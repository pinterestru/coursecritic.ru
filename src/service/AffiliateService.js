//import { set, get } from "idb-keyval";
import { queryStringify, getCookie, setCookie, queryMerge } from "utils";


export class AffiliateService {
  static viewPromocode(promocodeId, brandName, transactionId) {
    try{
      const hasGTM = window.dataLayer
      const isPromocodeViewed = getCookie("_promocode_viewed") === "true"
      if (hasGTM && !isPromocodeViewed && promocodeId) {
        console.log("promocode viewed")
        const data = {
          event: 'view_promocode',
          promocode_id: promocodeId || "",
          brand_name: brandName || ""
        }
        if (transactionId) {
          data.transaction_id = transactionId
        }
        console.log("viewPromocode", data)
        window.dataLayer.push(data)
        setCookie("_promocode_viewed", "true", 1)
      }
    } catch(e) {
      console.error("gtag error:", e)
    }
  }
  static postprocessClickLink(url, options={}) {
    const {slug, isDirect, direct, params, paramsReverse} = options;
    let rules = options.rules

    let link = url
    if (slug) {
      link = link.replace("__SLUG__", slug)
    }
    if (direct) {
      link = link.replace("__IS_DIRECT__", direct)
    } else if (isDirect === true || isDirect === false) {
      link = link.replace("__IS_DIRECT__", isDirect ? "true" : "false")
    }
    if (params) {
      link = queryMerge(link, params, paramsReverse || false)
    }
  

    if (rules) {
      if (!Array.isArray(rules)) {
        rules = [rules]
      }

      rules.forEach(rule => {
        const {patterns, disabled, field="domain", value} = rule;
        if (disabled) {
          return
        }
        if (!value) {
          return
        }
        if (!patterns || patterns.length === 0) {
          return
        }
        let isConditionTrue = true;
        patterns.forEach(pattern => {
          if (!link.includes(pattern)) {
            isConditionTrue = false
          }
        });
        if (!isConditionTrue) {
          return
        }
        if (field === "domain") {
          var urlMeta = new URL(link);
          urlMeta.hostname = value;
          link = urlMeta.href
        }
      })
    }
    return link
  }



  static getClickLink(link, params, options) {
    let { isAffiliate, withMeta, domain="", asTemplate, isDirect, fallbackLink } = options || {};

    if (domain && !domain.startsWith("http")) {
      domain = "https://" + domain
    }
    
    if (!params.utm_source && domain) {
      params.utm_source = domain
    }
    if (params.utm_source) {
      params.utm_source = params.utm_source.replace("https://", "").replace("http://", "").replace("www.", "").split("/")[0].split(":")[0]
    }
    if (!params.utm_medium) {
      params.utm_medium = "referral"
    }
    if (params.utm_content) {
      params.utm_content = params.utm_content.split("?")[0].split("#")[0]
      if (params.utm_content.endsWith("/")) {
        params.utm_content = params.utm_content.slice(0, -1)
      }
      const contentSplit = params.utm_content.split("/")
      params.utm_content = contentSplit[contentSplit.length - 1]
    }
    if (withMeta) {
      params.with_meta = "true"
    }
    if (!isAffiliate || isDirect || !domain) {
      params.direct = "true"
    }
    if (asTemplate) {
      params.direct = "__IS_DIRECT__"
      if (fallbackLink) {
        params.direct_link = fallbackLink
      }
    }

    link = link.split("?")[0].split("#")[0]
    link = link.replace("https://", "").replace("http://", "").replace("www.", "")
    if (link.startsWith("/")) {
      link = link.slice(1)
    }
    if (link.endsWith("/")) {
      link = link.slice(0, -1)
    }
    if (asTemplate) {
      link = "__SLUG__"
    }
    let result = `${domain}/c/${link}?${queryStringify(params)}`

    return result;
  }
  static flowValidate() {
    const result = {}
    let url = window.location.href.split("?")[0].split("#")[0];
    if (url.endsWith("/")) {
      url = url.substring(0, url.length - 1);
    }
    const pageVisits = JSON.parse(localStorage.getItem('page_visits')) || []
    if (pageVisits.length === 0) {
      pageVisits.push({url, referrer: document.referrer || ""})
    }
    const firstVisit = pageVisits[0] || {}
    const lastVisit = pageVisits[pageVisits.length - 1] || {}
    
    result["is_current_page_only"] = pageVisits.filter(v => v.url !== url).length === 0
    result["is_first_page_yandex"] = (firstVisit.referrer || "").includes("ya.ru") || (firstVisit.referrer || "").includes("yandex.ru")
    result["is_first_page_google"] = (firstVisit.referrer || "").includes("google")
    return result
  }
}
