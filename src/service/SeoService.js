import { getMediaPath, addHttps } from "utils";
import { replaceIfExists } from "./utils";
import { defaultLocale } from "../constants";

export class SeoService {
  static titleDefaultKey = "seo_title";
  static descriptionDefaultKey = "seo_description";

  static replaceVariables = (value, data) => {
    value = replaceIfExists(value, "${store_name}", data.store_name || "");
    value = replaceIfExists(
      value,
      "${store_full_name}",
      data.store_full_name || ""
    );
    value = replaceIfExists(value, "${store_legal}", data.store_legal || "");
    value = replaceIfExists(value, "${store_phone}", data.store_phone || "");
    value = replaceIfExists(value, "${store_email}", data.store_email || "");
    value = replaceIfExists(value, "${name}", data.name || "");
    value = replaceIfExists(value, "${price}", data.price || "");
    value = replaceIfExists(
      value,
      "${currency}",
      (data.currency || "").toLowerCase()
    );
    value = replaceIfExists(value, "&nbsp;", "");
    return value;
  };

  static seoGet(meta, options) {
    options = options || {};
    let { page, key, locale=defaultLocale, websiteDomain, dnsPrefetch } = options;
    meta = meta || {};
    page = page || {};
    const titleKey = `seo_${key || ""}_title`;
    const descriptionKey = `seo_${key || ""}_description`;

    let title =
      page[titleKey] ||
      meta[titleKey] ||
      meta[this.titleDefaultKey] ||
      page[this.titleDefaultKey] ||
      "";
    title = this.replaceVariables(title, page);

    let description =
      page[descriptionKey] ||
      meta[descriptionKey] ||
      meta[this.descriptionDefaultKey] ||
      page[this.descriptionDefaultKey] ||
      "";
    description = this.replaceVariables(description, page);
    const type = "website";

    const url =
      ((websiteDomain || "").startsWith("http") ? "" : "https://") +
      websiteDomain;

    let image =
      page.banner_image ||
      page.store_logo ||
      meta.banner_image ||
      meta.store_logo || "";
    if (image) {
      image = getMediaPath(image);
    }
    const favicon =
      getMediaPath(page.store_favicon ||
        page.favicon ||
        meta.store_favicon ||
        meta.favicon);

    return SeoService.seoMapping({
      title,
      description,
      image,
      locale,
      type,
      url,
      favicon,
      dnsPrefetch
    });
  }

  static seoCategoryGet(category, meta, options) {
    options = options || {};
    const { locale=defaultLocale, websiteDomain, dnsPrefetch } = options;
    let title =
      category.seo_title || category.name || meta[this.titleDefaultKey] || "";
    title = this.replaceVariables(title, { ...meta, ...category });

    let description =
      category.seo_description ||
      category.description ||
      meta[this.descriptionDefaultKey] ||
      "";
    description = this.replaceVariables(description, { ...meta, ...category });

    const url =
      ((websiteDomain || "").startsWith("http") ? "" : "https://") +
      websiteDomain +
      "/category/" +
      (category.slug || category.ecommerce_product_category_id);
    let image =
      (category.image || "").split(",")[0] ||
      meta.banner_image ||
      meta.store_logo || "";
    if (image) {
      image = getMediaPath(image);
    }
    const type = "website";

    return SeoService.seoMapping({
      title,
      description,
      image,
      locale,
      url,
      type,
      favicon: getMediaPath(meta.store_favicon || meta.favicon),
      dnsPrefetch
    });
  }

  static seoProductGet(product, meta, options) {
    options = options || {};
    const { locale=defaultLocale, websiteDomain, dnsPrefetch } = options;
    const price = product.price;
    const currency = (product.currency || "usd").toLowerCase();
    let title =
      options.title ||
      product.seo_title ||
      product.title ||
      product.name ||
      meta[this.titleDefaultKey] ||
      "";
    title = this.replaceVariables(title, {
      ...meta,
      ...product,
      price,
      currency,
    });

    let description =
      options.description || 
      product.seo_description ||
      product.short_description ||
      product.description ||
      product.name ||
      meta[this.descriptionDefaultKey] ||
      "";
    description = this.replaceVariables(description, {
      ...meta,
      ...product,
      price,
      currency,
    });

    const itemType = options.type || "product";
    const url =
      ((websiteDomain || "").startsWith("http") ? "" : "https://") +
      websiteDomain +
      ("/" + itemType + "/") +
      product.slug;
    let image =
      (product.images || "").split(",")[0] ||
      meta.banner_image ||
      meta.store_logo || "";
    if (image) {
      image = getMediaPath(image);
    }
    let type = "";
    const custom = [];
    if (itemType === "product") {
      type = "website";
      if (price) {
        custom.push({
          content: price,
          property: "product:price:amount",
        });
        if (currency) {
          custom.push({
            content: currency,
            property: "product:currency",
          });
        }
        custom.push({
          content: product.isAvailable ? "in stock" : "in stock",
          property: "product:isAvailable",
        });
        if (product.category) {
          custom.push({
            content: product.category?.name,
            property: "product:category",
          });
        }
      }
    }
    if (itemType === "article") {
      type = "article";
    }

    const contentId = "/" + itemType + "/" + product.slug;
    custom.push({
      itemprop: "identifier",
      content: contentId,
    });
    custom.push({
      itemscope: "",
      itemprop: "mainEntityOfPage",
      itemType: "https://schema.org/WebPage",
      itemid: contentId,
    });
    return SeoService.seoMapping({
      title,
      description,
      image,
      locale,
      url,
      type,
      custom,
      favicon: getMediaPath(meta.store_favicon || meta.favicon),
      dnsPrefetch
    });
  }

  static seoMapping(data) {
    data["openGraph"] = {}
    data["alternates"] = {}
    data["twitter"] = {card: "summary"}
    data["icons"] = {}

    if (data["title"]) {
      data["title"] = data["title"]
      data["openGraph"]["title"] = data["title"]
      data["twitter"]["title"] = data["title"]
    }
    if (data["description"]) {
      data["description"] = data["description"]
      data["openGraph"]["description"] = data["description"]
      data["twitter"]["description"] = data["description"]
    }
    if (data["url"]) {
      data["openGraph"]["url"] = data["url"]
      data["alternates"]["canonical"] = data["url"]
    }
    if (data["type"]) {
      data["openGraph"]["type"] = data["type"]
    }
    if (data["image"]) {
      data["openGraph"]["images"] = [{url: data["image"], alt: data["title"] || ""}]
      data["twitter"]["images"] = [data["image"]]
      data["twitter"]["card"] = "summary_large_image"
    }
    if (data["locale"]) {
      data["openGraph"]["locale"] = data["locale"]
    }
    if (data.favicon) {
      data["icons"] = {icon: data.favicon}
    }
    if (data.dnsPrefetch) {
      const other = data["icons"]["other"] || [];
      data.dnsPrefetch.forEach(domain => {
        other.push({rel: "dns-prefetch", url: addHttps(domain)})
      })
      data["icons"]["other"] = other
    }

    //data["themeColor"] = "white"
    data["generator"] = "Next.js"
    //data["colorScheme"] = "light"
    return data
  }
}


