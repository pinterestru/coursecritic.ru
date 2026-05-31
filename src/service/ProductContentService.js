import { EcommerceProductContentApi } from "api/EcommerceProductContentApi";


export class ProductContentService {
  static async productContentList(filters, options) {
    const response = await EcommerceProductContentApi.ecommerceProductContentList(
      filters,
      options
    );
    if (options.asValue) return response.itemList
    return response;
  }

  static async ecommerceProductContentPromocodeList(filters, options) {
    const response = await EcommerceProductContentApi.ecommerceProductContentPromocodeList(
      filters,
      options
    );
    if (options.asValue) return response.itemList
    return response;
  }

  static async productContentGet(slug, filters, options) {
    const response = await EcommerceProductContentApi.ecommerceProductContentGet(slug, filters, options);
    if (options.asValue) return response.item
    return response
  }
}
