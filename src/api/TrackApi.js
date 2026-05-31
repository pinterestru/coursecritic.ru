import { dataSource } from "./dataSource";

export class TrackApi {
  static async campaignList(tag, options) {
    options = options || {};
    const { apiPath } = options
    const response = await dataSource(
      `marketing_campaign_list?tags=contains ${tag}`,
      { apiPath }
    );
    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }

  static async marketingTrack(eventType, trackType, trackValue, options) {
    options = options || {};
    const { apiPath, revalidate, createdAt, jsMeta, clientMeta, mtfi, withFlow } = options;

    if (!apiPath) {
      console.error("no apiPath");
      return { message: "no apiPath" };
    }

    if (eventType !== "visit" && !mtfi) {
      //console.error("no mtfi");
      return { message: "no mtfi" };
    }

    let params = "event_type=" + eventType;
    if (trackType) {
      params += "&track_type=" + (trackType || "session_time");
    }
    if (trackValue) {
      params += "&track_value=" + trackValue;
    }
    if (mtfi) {
      params += "&mtfi=" + mtfi;
    }
    if (jsMeta) {
      //params += "&js_meta=" + jsMeta;
    }
    if (createdAt) {
      params += "&created_at=" + createdAt;
    }
    if (withFlow) {
      params += "&with_flow=true";
    }

    console.log("META", jsMeta ? {js_meta: jsMeta} : undefined)


    const resp = await dataSource(`marketing_track?${params}`, {
      data: jsMeta ? {js_meta: typeof jsMeta === "string" ? jsMeta : JSON.stringify(jsMeta)} : undefined, apiPath, revalidate, clientMeta
    });

    return resp;
  }


  static async marketingProcess(tag, slug, query, options) {
    options = options || {};
    const { apiPath, revalidate, createdAt, jsMeta, clientMeta, mtfi } = options;

    if (!apiPath) {
      console.error("no apiPath");
      return { message: "no apiPath" };
    }

    let params = "as_json=true";
    if (mtfi) {
      params += "&mtfi=" + mtfi;
    }
    if (jsMeta) {
      //params += "&js_meta=" + jsMeta;
    }
    if (createdAt) {
      params += "&created_at=" + createdAt;
    }
    if (tag) {
      params += "&tag=" + tag; 
    }
    if (slug) {
      params += "&slug=" + tag; 
    }
    Object.keys(query || {}).forEach(key => {
      if (!params.includes(key + "=")) {
        params += `&${key}=${query[key]}`
      }
    })
    const resp = await dataSource(`marketing_process?${params}`, {
      data: jsMeta ? {js_meta: typeof jsMeta === "string" ? jsMeta : JSON.stringify(jsMeta)} : undefined, apiPath, revalidate, clientMeta
    });

    return resp;
  }
}
