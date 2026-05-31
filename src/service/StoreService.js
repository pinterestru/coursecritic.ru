import { EcommerceStoreApi } from "api/EcommerceStoreApi";
import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion } from "./utils";

export class StoreService {
  static async storeGet(filters, options) {
    if (options.asProduct) {
      filters.type = "store"
      filters.versionId = getVersion(filters.versionId, filters.locale)
      const slug = filters.slug
      delete filters["slug"]
      const response = await EcommerceProductApi.ecommerceProductGet(
        slug,
        filters,
        options
      );
      if (options.asValue) return response.item;
      return response;
    }

    const response = await EcommerceStoreApi.ecommerceStoreGet(
      filters,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }

  static async storeList(filters, options) {
    if (options.asProduct) {
      filters.type = "store"
      filters.versionId = getVersion(filters.versionId, filters.locale)
      const response = await EcommerceProductApi.ecommerceProductList(filters, options);
      if (options.asValue) return response.itemList;
      return response;
    }

    return []
  }
}
