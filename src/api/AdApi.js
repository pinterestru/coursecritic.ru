import { dataSource } from "./dataSource";

export class AdApi {
  static async adList(campaignId, filters, options) {
    filters = filters || {};
    options = options || {};
    const { limit, groupNumber, shuffle } = filters;

    const response = await dataSource(
      `ad_list?campaign_id=${campaignId}&limit=${limit || 0}&group_number=${groupNumber || 0}&shuffle=${shuffle || false}`,
      options
    );
    
    return {
      item_list: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }
}
