import { TrackService } from "service/TrackService";
import { NotificationService } from "service/NotificationService";
import { localizationMetaScript } from "utils/global";
import { defaultLocale, websiteDomain } from "../../../constants";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

const jsMetaScript = `<!DOCTYPE html>
<html lang="${defaultLocale.toLowerCase()}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="referrer" content="no-referrer">
  <title>Redirecting</title>
</head> 
<body>
  <script>
    ${localizationMetaScript}
    fetch(window.location.href, {method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify({js_meta: window.LocalizationDataGet(), is_client: true})}).then(v => v.json()).then(v => v.url ? window.location.href = v.url : "")
  </script>
  <script>
    var styleElem = document.createElement("style");
    styleElem.innerHTML = '#ovrl-div-ovrl{position:fixed;width:100%;height:100%;background:white;top:0;left:0;right:0;bottom:0;z-index:10000;display:flex;align-items:center;justify-content:center}#ovrl-div-ovrl>div{display:inline-block;width:80px;height:80px}#ovrl-div-ovrl>div:after{content:" ";display:block;width:64px;height:64px;margin:8px;border-radius:50%;border:6px solid #09035d;border-color:#09035d transparent #09035d transparent;animation:lds-dual-ring 1.2s linear infinite}@keyframes lds-dual-ring{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}';
    var div1 = document.createElement("div");
    div1.id = "ovrl-div-ovrl";
    var div2 = document.createElement("div");
    div2.id = "lds-dual-ring";
    div1.appendChild(div2);
    document.head.appendChild(styleElem);
    document.body.append(div1);
  </script>
</body>
</html>
`

const splitPattern = /\.(com|net|org|ru)(?!\/)(?=.)/;

function normalizeTags(tags) {
  const first = tags[0];
  const m = splitPattern.exec(first);
  if (!m) return tags;

  const tldStart = m.index;
  const tldLen   = m[0].length;
  const domain   = first.slice(0, tldStart + tldLen);
  const path     = first.slice(tldStart + tldLen);

  tags.splice(0, 1, domain, path);
  return tags
}

export default async (req, res) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405)
  }
  res.setHeader('Referrer-Policy', 'no-referrer')
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')
  const requestBody = req.body || {};

  let { tags, slug, created_at, mtfi, js_meta, url, domain, with_meta, target, direct, direct_link } = req.query;
  with_meta = "true"
  let urlValue = url || `${req.headers['x-forwarded-proto']}://${req.headers.host}${req.url}` || req.headers["origin"] || ""

  const isBot = target === "false" || req.cookies["_target"] === "false" || !req.cookies["_target"]
  if (isBot && urlValue) {
    try {
      const urlObject = new URL(urlValue)
      urlObject.searchParams.set('bot', 'true')
      urlObject.searchParams.set('target', 'false')
      urlValue = urlObject.toString()
    } catch (e) {}
  }
  if (isBot && direct !== "true") {
    //direct = "true"
  }

  if (direct === "true" && false) {
    if (direct_link) {
      return res.redirect(301, direct_link)
    } else {
      const link = "https://" + tags.join("/")
      if (!link.includes(".")) {
        return res.redirect(301, websiteDomain)
      }
      return res.redirect(301, link)
    }
  }

  tags = normalizeTags(tags)
  let tag = tags.shift();
  let path = tags.filter(v => !!v).join("/")


  if (with_meta && !requestBody.js_meta) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(jsMetaScript)
    return
  }

  const mtfiKey = `_mtfi__${tag}${path ? ("__" + path.split("/").join("_")) : (slug ? ("__" + slug) : "")}`
  if (!mtfi) {
    mtfi = req.cookies[mtfiKey] || "none"
  }

  const clientMeta = {
    ip: req.headers["cf-connecting-ip"] || (req.headers['x-forwarded-for'] || "").split(",")[0].trim() || req.connection.remoteAddress || req.ip,
    userAgent: req.headers['user-agent'],
    domain,
    url: urlValue
  }

  const query = { ...res.query }
  if (path) {
    query["path"] = "/" + path
  }
  delete query["tags"]
  delete query["direct_link"]
  delete query["direct"]

  const jsMeta = requestBody.js_meta || js_meta
  if (jsMeta && !jsMeta.js_url) {
    jsMeta.js_url = urlValue
  }

  const response = await TrackService.marketingProcess(tag, slug, query, { mtfi, createdAt: created_at, jsMeta: jsMeta, clientMeta, apiPath })

  if (response.message) {
    const httpReferrer = req.headers.referer || req.headers.referrer || '-';
    const redirectLink = `https://${tag}/${path}`
    delete query["path"]
    const d = domain || req.headers.host || req.headers["origin"] || "no_domain"
    const error = response.message
    NotificationService.notify(`Broken Campaign: <b>${tag}</b> | ${redirectLink} | domain: ${d} | referrer: ${httpReferrer} | query: ${JSON.stringify(query)} | ip: ${clientMeta.ip || ""} | err: ${error}`, { apiPath })
    res.redirect(301, redirectLink)
    return
  }
  if (response.mtfi) {
    res.setHeader('Set-Cookie', `${mtfiKey}=${response.mtfi}; Expires=${new Date(Date.now() + 24 * 60 * 60 * 1000).toUTCString()}; Path=/`);
  }
  //res.status(200).json({});
  //return

  if (response.type === "redirect" && response.url) {
    if (!requestBody.is_client) {
      res.redirect(301, response.url)
      return
    }
  }
  res.status(200).json(response);
};
