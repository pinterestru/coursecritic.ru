import { AdApi } from "api/AdApi";

export class AdService {
  static async adList(campaignId, filters, options) {
    options = options || {}
    const response = await AdApi.adList(campaignId, filters, options);
    if (options.asValue) return response.item_list;
    console.log(1)
    return response;
  }
}

