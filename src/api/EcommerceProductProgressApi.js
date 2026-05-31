import { dataSource } from "./dataSource";

export class EcommerceProductProgressApi {
  static async ecommerceProductProgressList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const { ecommerceProductId, userId } = filters;
    if (!ecommerceProductId || !userId) {
      return { message: "no user id or product id" };
    }
    const response = await dataSource(
      `ecommerce_product_progress_list?ecommerce_store_id=${ecommerceStoreId}&user_id=${userId}`,
      { apiPath, revalidate }
    );

    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }

  static async ecommerceProductProgressCommit(
    ecommerceProductId,
    userId,
    ecommerceStoreId,
    ecommerceProductContentId,
    options
  ) {
    options = options || {};
    const { apiPath, revalidate } = options;
    if (!ecommerceProductId || !userId || !ecommerceStoreId) {
      return { message: "no user id or product id or ecommerce store id" };
    }
    const response = await dataSource(
      `ecommerce_product_progress_commit?ecommerce_product_id=${ecommerceProductId}&user_id=${userId}&ecommerce_store_id=${ecommerceStoreId}&type=content`,
      {
        data: {
          update: {
            type: "content",
            ecommerce_product_content_id: ecommerceProductContentId,
            use_next_ecommerce_product_content_id: options.useNextContentId,
            use_prev_ecommerce_product_content_id: options.usePrevContentId,
          },
        },
        apiPath,
        revalidate
      }
    );

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }
}
