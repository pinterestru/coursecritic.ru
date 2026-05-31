import { dataSource } from "./dataSource";

export class EcommerceStoreApi {
  static async ecommerceStoreGet(filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const { ecommerceStoreId } = filters;
    if (!ecommerceStoreId) {
      return { message: "no store id" };
    }
    const response = await dataSource(
      `ecommerce_store_get?ecommerce_store_id=${ecommerceStoreId}`,
      { apiPath, revalidate }
    );

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }
}
