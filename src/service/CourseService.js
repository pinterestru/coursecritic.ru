import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion } from "./utils";

export class CourseService {
  static async courseList(filters, options) {
    filters.type = "course"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async myCourseWithProgressList(filters, options) {
    options = options || {}
    filters.type = "course"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    options.path = "ecommerce_my_course_view_list"
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async courseWithProgressList(filters, options) {
    filters.type = "course"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async courseGet(slug, filters, options) {
    filters.type = "course"
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
