import { dataSource } from "./dataSource";

export class EcommerceProductReviewApi {
  static async ecommerceProductReviewList(filters, options) {
    filters = filters || {};
    options = options || {};
    const { apiPath, revalidate } = options;
    const { versionId, excludeFuture, orderBy, ecommerceProductId } = filters;
    if (!ecommerceProductId) {
      return { message: "no user id or product id" };
    }
    const response = await dataSource(
      `ecommerce_product_review_list?ecommerce_product_id=${ecommerceProductId}&version_id=${versionId || ""}${excludeFuture ? `&exclude_future=true` : ""}${orderBy ? `&order_by=${orderBy}` : ""}`,
      { apiPath, revalidate }
    );

    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }
}
