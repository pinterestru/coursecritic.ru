import { dataSource } from "./dataSource";

export class EcommerceProductCategoryApi {
  static async ecommerceProductCategoryList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const { ecommerceStoreId } = filters;
    const response = await dataSource(
      `ecommerce_product_category_list?ecommerce_store_id=${ecommerceStoreId}&is_hidden=${"is_hidden" in filters ? filters.is_hidden : false}`,
      { apiPath, revalidate }
    );

    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }

  static async ecommerceProductCategoryGet(slug, filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const { ecommerceStoreId } = filters;
    const response = await dataSource(
      `ecommerce_product_category_list?slug=${slug}&ecommerce_store_id=${ecommerceStoreId}`,
      { apiPath, revalidate }
    );


    return {
      item: (response.item_list || [])[0] || {},
      message: response.message,
      status: response.status,
    };
  }
}
