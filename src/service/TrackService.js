//import { set, get } from "idb-keyval";
import { TrackApi } from "api/TrackApi";
import { getCookie, setCookie, queryParse  } from "utils";


export class TrackService {
  static async clickLinkExist(tag, options) {
    options = options || {};

    if (!tag) {
      if (options.asValue) {
        return false
      }
      return { message: "tag__null" };
    }

    const resp = await TrackApi.campaignList(
      tag,
      options
    );

    let isExist = false
    const campaigns = resp.itemList;
    for (const campaign of campaigns) {
      if (campaign.tags) {
        campaign.tags.split(";").forEach(tagReal => {
          if (tagReal === tag) {
            isExist = true
          }
        })
      }
    }

    if (options.asValue) {
      return isExist
    }
    return {isExist: isExist};
  }

  static async trackEvent(eventType, trackType, trackValue, options) {
    options = options || {};
    const { mtfi, onSuccess } = options;

    const resp = await TrackApi.marketingTrack(
      eventType,
      trackType,
      trackValue,
      options
    );
    onSuccess ? onSuccess() : null;

    return resp;
  }
  static async marketingProcess(tag, slug, query, options) {
    options = options || {};
    const { onSuccess } = options;

    const resp = await TrackApi.marketingProcess(
      tag,
      slug,
      query,
      options
    );
    onSuccess ? onSuccess() : null;

    return resp;
  }
  static async trackActivity(trackType, trackValue, options) {
    options = options || {};
    const { mtfi, useOnce, onSuccess } = options;
    const key = `track_complete_activity__${trackType + trackValue}__${mtfi}`;

    //if (useOnce) {
    //  const isUsed = await get(key);
    //  console.log("USED", isUsed);
    //  if (isUsed) {
    //    return { message: "used" };
    //  }
    //}
    const resp = await this.trackEvent(
      "complete_activity",
      trackType,
      trackValue,
      options
    );
    //await set(key, true);
    onSuccess ? onSuccess() : null;

    //if (trackValue === "30") {
    //  this.sendGA("activity30");
    //} else if (trackValue === "90") {
    //  this.sendGA("activity90");
    //}
    return resp;
  }

  static async trackActivity30(options) {
    let time = 30000;
    setTimeout(() => {
      this.trackActivity(
        "time_on_site",
        (time / 1000).toString(),
        options
      ).then((v) => {
        if (v.message) {
          console.log(v.message);
        } else {
          console.log("time on site tracked");
        }
      });
    }, time);
  }

  static async trackActivity90(options) {
    let time = 90000;
    setTimeout(() => {
      this.trackActivity(
        "time_on_site",
        (time / 1000).toString(),
        options
      ).then((v) => {
        if (v.message) {
          console.log(v.message);
        } else {
          console.log("time on site tracked");
        }
      });
    }, time);
  }

  static sendGA(name, params, type) {
    if (window.gtag && !window.location.hostname.includes("localhost")) {
      window.gtag(type || "event", name, params || {});
    }
  }

  static async trackPlaceAnOrder(price, currency) {
    this.sendGA("generate_lead", {
      value: parseFloat(price) || 0,
      currency: currency.toUpperCase(),
    });
  }

  static mtfiGetOld() {
    const search = (location && location.search).replace("?", "");
    if (search) {
      const queryParams = queryParse(search);
      const mtfiCookie = getCookie("_mtfi");
      const mtfiQuery =
        queryParams["_mtfi"] ||
        queryParams["mtfi"] ||
        queryParams["marketing_traffic_flow_id"];
      if (mtfiQuery && mtfiCookie !== mtfiQuery && mtfiQuery) {
        setCookie("_mtfi", mtfiQuery, 30);
      }
      return mtfiQuery || mtfiCookie;
    }
  }

  static mtfiGet() {
    let mtfi = ""
    if (!mtfi) {
      const search = (location && location.search).replace("?", "");
      if (search) {
        const queryParams = queryParse(search);
        mtfi = queryParams["_mtfi"] ||
        queryParams["mtfi"] ||
        queryParams["marketing_traffic_flow_id"];
      }
    }
    if (!mtfi) {
      mtfi = getCookie("_mtfi");
    }
    return mtfi
  }

  static eventExecute(data, router) {
    const type = data.type;
    if (type === "redirect" && data.url) {
      router.push(data.url);
    }
    setTimeout(() => {
      var el = document.getElementById("ovrl-div-ovrl-local");
      if (el) {
        el.remove();
      }
    }, 500);
  }

  static userVerify() {
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
