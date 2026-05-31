import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion } from "./utils";

export class RecipeService {
  static async recipeList(filters, options) {
    filters.type = "recipe"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList;
    return response;
  }

  static async recipeGet(slug, filters, options) {
    filters.type = "recipe"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductGet(
      slug,
      filters,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }

  static async ingredientSuggestionList(filters, options) {
    filters["attribute"] = "ingredients_completion"
    const response = await EcommerceProductApi.ecommerceProductSuggestionList(
      filters,
      options
    );
    if (options.asValue) return response.itemList;
    return response;
  }
}
