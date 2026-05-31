import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion } from "./utils";

export class LandingService {
  static async landingList(filters, options) {
    filters.type = "landing"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async landingGet(slug, filters, options) {
    filters.type = "landing"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductGet(
      slug,
      filters,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }
}
