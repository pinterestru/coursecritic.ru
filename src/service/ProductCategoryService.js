import { EcommerceProductCategoryApi } from "api/EcommerceProductCategoryApi";

export class ProductCategoryService {
  static async productCategoryList(filters, options) {
    options = options || {}
    const response = await EcommerceProductCategoryApi.ecommerceProductCategoryList(
      filters,
      options
    );
    if (filters.rootCategoryId) {
      response.itemList = response.itemList.filter(v => {
        if (!v.parent_id && v.ecommerce_product_category_id !== filters.rootCategoryId) {
          return false
        }
        return true
      })
    }
    if (options.nested) {
      const categoryList = response.itemList;
      categoryList.sort((a,b) => a.position - b.position);
      const categoryDict = {};
      categoryList.forEach((v, i) => {
        const children = categoryDict[v.parent_id || "main"] || [];
        children.push(v);
        categoryDict[v.parent_id || "main"] = children;
      });
      response.itemList = (categoryDict["main"] || []).map(category => {
        category.children = categoryDict[category.ecommerce_product_category_id] || []
        return category
      })
    }
    if (options.asValue) return response.itemList;
    return response;
  }

  static async productCategoryGet(slug, filters, options) {
    options = options || {}
    const response = await EcommerceProductCategoryApi.ecommerceProductCategoryGet(
      slug,
      filters,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }
}
