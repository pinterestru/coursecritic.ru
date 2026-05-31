import { queryStringify } from "utils";
import { dataSource } from "./dataSource";

export class EcommerceProductContentApi {
  static async ecommerceProductContentList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const params = {
      ecommerce_product_id: filters.ecommerce_product_id,
      ecommerce_store_id: filters.ecommerce_store_id,
      past: filters.past,
      future: filters.future,
      status: filters.status,
      type: filters.type,
      order_by: filters.order_by,
      limit: filters.limit,
      limit_expired: filters.limit_expired
    }
    if (filters.category_id) {
      params.category_id = filters.category_id
    }
    if (filters.category_ids) {
      params.category_ids = filters.category_ids
    }
    const response = await dataSource(
      `ecommerce_product_content_list?${queryStringify(params, {skipEmptyString: true})}`,
      { apiPath, revalidate }
    );
    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }

  static async ecommerceProductContentPromocodeList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const params = {
      ecommerce_store_id: filters.ecommerce_store_id,
      slugs: filters.slugs,
      slug: filters.slug,
      with_code: filters.with_code ? "true" : "",
      random: filters.random ? "true" : "",
      mode: filters.mode || "single",
      max: (filters.max || 10).toString()
    }

    const response = await dataSource(
      `ecommerce_product_content_promocode_list?${queryStringify(params, {skipEmptyString: true})}`,
      { apiPath, revalidate }
    );

    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }

  static async ecommerceProductContentGet(ecommerceProductContentId, filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `ecommerce_product_content_get?ecommerce_product_content_id=${ecommerceProductContentId}`,
      { apiPath, revalidate }
    );

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }
}
