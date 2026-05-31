import { getVersion, replaceVariables } from "./utils";
import { EcommerceProductReviewApi } from "api/EcommerceProductReviewApi";

export class ProductReviewService {
  static async productReviewList(filters, options) {
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductReviewApi.ecommerceProductReviewList(
      filters,
      options
    );
    if (options.asValue) return response.itemList
    return response;
  }

  static productReviewProcess(reviews, product) {
    const result = (reviews || []).map((review_) => {
      const review = { ...review_ };

      if (!product) {
        return review;
      }
      review.review = replaceVariables(review.review, product) || "";
      review.review_rich = replaceVariables(review.review_rich, product) || "";
      review.answer = replaceVariables(review.answer, product) || "";
      review.answer_rich = replaceVariables(review.answer_rich, product) || "";
      return review;
    }).filter(review => {
      if (review.review_created_at && new Date(review.review_created_at) > new Date()) {
        return false
      }
      return true
    });
    return result;
  }
}
