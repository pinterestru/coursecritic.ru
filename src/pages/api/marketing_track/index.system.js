import { TrackService } from "service/TrackService";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

const eventTypeMapping = {
  "localization_init": "visit",
  "localization_check": "view_page",
  "page_info": "view_page",
  "check": "view_page",
  "localization_interval": "complete_activity",
  "interval": "complete_activity"
}
const trackTypeMapping = {
  "interval": "session_time",
  "localization_entry": "view_page_entry",
  "entry": "view_page_entry",
  "localization_navigated": "view_page_navigated",
  "navigated": "view_page_navigated"
}

export default async (req, res) => {
  if (req.method !== "GET" && req.method !== "POST") {
    return res.status(405)
  }
  let { event_type, localization_type, type, value, created_at, mtfi, js_meta, localization_meta, url, localization_page, domain, with_flow, with_view } = req.query;
  let eventType = event_type || localization_type
  let urlValue = url || localization_page
  const createdAt = created_at || new Date().toISOString()

  if (!urlValue) {
    urlValue = req.headers["referer"] || req.headers["origin"] || ""
  }

  const requestBody = req.body || {};
  const jsMeta = requestBody.js_meta || requestBody.localization_meta || js_meta || localization_meta

  if (jsMeta && !jsMeta.js_url) {
    jsMeta.js_url = urlValue
  }

  eventType = eventTypeMapping[eventType] || eventType
  type = trackTypeMapping[type] || type

  if (value === "url") {
    value = urlValue
  }

  if (!mtfi) {
    mtfi = req.cookies['_mtfi'] || ""
  }

  const clientMeta = {
    ip: req.headers["cf-connecting-ip"] || (req.headers['x-forwarded-for'] || "").split(",")[0].trim() || req.connection.remoteAddress || req.ip,
    userAgent: req.headers['user-agent'],
    domain,
    url: urlValue
  }

  const response = await TrackService.trackEvent(eventType, type, value, { mtfi, createdAt: createdAt, jsMeta: jsMeta, clientMeta, apiPath, withFlow: with_flow === "true" })


  const result = {ok: true}
  console.log("TRACK RESP", response)
  if (response && response.mtfi && eventType === "visit") {
    const cookies = []
    if (mtfi !== response.mtfi) {
      cookies.push(`_mtfi=${response.mtfi}; Expires=${new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toUTCString()}; Path=/`);
    }
    if ("content_is_target" in response && response.content_type === "nothing") {
      cookies.push(`_target=${response["content_is_target"]}; Expires=${new Date(Date.now() + 12 * 60 * 60 * 1000).toUTCString()}; Path=/`);
      result.localized = response["content_is_target"] === "true"
    } else {
      result.localized = true
    }
    if (cookies.length) {
      res.setHeader('Set-Cookie', cookies);
    }
    result.mtfi = response.mtfi
    return res.status(200).json(result);
  }
  return res.status(200).json({...result, localized: true});
};
