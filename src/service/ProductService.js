import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion } from "./utils";

export class ProductService {
  static async productList(filters, options) {
    filters.versionId = getVersion(filters.versionId, filters.locale)
    filters.type = "product"
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList
    return response
  }

  static async productGet(slug, filters, options) {
    filters.versionId = getVersion(filters.versionId, filters.locale)
    filters.type = "product"
    const response = await EcommerceProductApi.ecommerceProductGet(slug, filters, options);
    if (options.asValue) return response.item
    return response
  }

  static calcPrice = (obj) => {
    let price = parseFloat(obj.price || 0);

    let discount =
      obj.discount_percent && obj.discount_percent !== "0"
        ? price * (1 - parseFloat(obj.discount_percent) / 100)
        : obj.discount
        ? parseFloat(obj.discount)
        : 0;
    let discount_percent =
      obj.discount_percent && obj.discount_percent !== "0"
        ? "-" + obj.discount_percent
        : obj.discount
        ? Math.round((discount / price - 1) * 100)
        : 0;
    let final_price = discount_percent ? discount : price;

    if (final_price < 0 || price < 0 || discount < 0) {
      final_price = 0;
      price = 0;
      discount = 0;
      if (discount_percent) {
        discount_percent = "-100";
      }
    }

    let price_fixed = price.toFixed(2);
    if (price_fixed.endsWith(".00")) {
      price_fixed = price_fixed.split(".")[0];
    }
    let discount_fixed = discount ? discount.toFixed(2) : "";
    if (discount_fixed.endsWith(".00")) {
      discount_fixed = discount_fixed.split(".")[0];
    }
    let final_price_fixed = final_price ? final_price.toFixed(2) : "";
    if (final_price_fixed.endsWith(".00")) {
      final_price_fixed = final_price_fixed.split(".")[0];
    }
    if (price < 0) {
      price_fixed = "Contact our manager for price details";
    }

    return {
      final_price,
      final_price_fixed,
      price,
      discount,
      discount_percent,
      price_fixed,
      discount_fixed,
    };
  };

  static productUrlBuild(slug, locale, options) {
    options = options || {};
    const { fallback } = options;
    let url = "/product";
    if (slug) {
      url += "/" + slug;
      if (locale) {
        url += "/" + locale;
      }
    } else if (fallback) {
      return fallback;
    }
    return url;
  }
}
