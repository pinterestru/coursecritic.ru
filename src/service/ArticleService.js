import { ProductService } from "./ProductService";
import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion, replaceVariables } from "./utils";

export class ArticleService {
  static async articleList(filters, options) {
    filters.type = "article"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductList(filters, options);
    if (options.asValue) return response.itemList;
    return response;
  }

  static async articleGet(slug, filters, options) {
    filters.type = "article"
    filters.versionId = getVersion(filters.versionId, filters.locale)
    const response = await EcommerceProductApi.ecommerceProductGet(
      slug,
      filters,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }

  static async articleProcess(article, options) {
    options = options || {};
    let productUsed = {};
    const { withFigure, withAds, maxAdsCount, removeH1, ecommerceStoreId, locale, apiPath, mediaPath } = options;

    if (withFigure) {
      // Process Images
      const parts = []
      let error = false

      article = article.split("<figure").forEach((part, i) => {
        if (error) {
          return
        }
        if (i === 0) {
          parts.push(part)
          return
        }
        const partSplit = part.split("</figure>")
        if (partSplit.length !== 2) {
          error = true
        }
        const imgPart = partSplit[0]

        const src = (imgPart.split('src="')[1] || "").split('"')[0].replace(mediaPath, "/api/media/").trim()
        const size = (src.split("__size")[1] || "").split("y")[0]
        const sizeSplit = size.split("x")
        const width = parseInt(sizeSplit[0])
        const height = parseInt(sizeSplit[1])
        if (!width || !height) {
          parts.push("<figure" + part)
          return
        }
        
        
        const alt = (imgPart.split('alt="')[1] || "").split('"')[0].trim()
        const title = (imgPart.split('title="')[1] || "").split('"')[0].trim()
        const figureClass = (imgPart.split('class="')[1] || "").split('"')[0].trim()

        const figureStyle = {};
        (imgPart.split('style="')[1] || "").split('"')[0].trim().split(";").forEach(v => {
          const sp = v.split(":")
          if (sp.length === 2) {
            figureStyle[sp[0].trim()] = sp[1].trim()
          }
        })

        const caption = (imgPart.split("<figcaption>")[1] || "").split("</figcaption>")[0].trim()

        const json = "<p>" + "#json" + JSON.stringify({type: "figure", index: i, figureClass, figureStyle, caption, src, alt, title, width, height}) + "</p>"
        parts.push(json)
        parts.push(partSplit[1])
        
      })
      
      if (!error) {
        article = parts.join("")
      }
    }

    let h1 = ""
    if (removeH1) {

      const h1RightSplit = article.split("</h1>")
      if (h1RightSplit.length === 2) {
        const h1LeftSplit = h1RightSplit[0].split("<h1")
        if (h1LeftSplit.length === 2) {
          article = h1LeftSplit[0] + h1RightSplit[1]
          const h1TextSplit = h1LeftSplit[1].split(">")
          h1TextSplit.shift()
          h1 = h1TextSplit.join(">").trim()
        }
      }
    } else {
      article = article.replace("<h1", '<h1 itemprop="headline"');
    }



    const articleSplit = article.split("#json");
    if (articleSplit.length === 1) {
      return { article: article, article_body_list: [{ type: "article", content: articleSplit[0] }], product: productUsed};
    }
    const result = [];
    let adsCount = 0
    for (let i = 0; i < articleSplit.length; i++) {
      const item = articleSplit[i];
      if (i === 0) {
        let content = item + "</p>"
        content = content.split("<p></p>").join("")
        result.push({ type: "article", content: content });
        continue;
      }

      const json = item.substring(0, item.indexOf("</p>"));
      let jsonFormatted = json.trim();
      jsonFormatted = json.replace("\n", "").replace("\n", "");
      jsonFormatted = json
        .split("”")
        .join('"')
        .split("“")
        .join('"')
        .split("‘’")
        .join('"');
      try {
        const obj = JSON.parse(jsonFormatted);
        if (obj.slug) {
          const product = await ProductService.productGet(
            obj.slug,
            {
              locale,
              ecommerceStoreId,
            },
            { apiPath, asValue: true }
          );
          if (product && Object.keys(product).length) {
            obj.product = product;
            productUsed = product;
            if (!obj.tag && product.tags && product.tags.length) {
              obj.tags = product.tags;
            }
          }
        } else if (obj.tag) {
          const products = await ProductService.productList(
            { tag: obj.tag, locale, ecommerceStoreId },
            { apiPath, asValue: true }
          );
          if (products && products.length) {
            obj.product = products[Math.floor(Math.random() * products.length)];
            productUsed = obj.product;
          }
        }
        result.push(obj);

        if (withAds && obj.type === "figure" || obj.type === "image") {
          adsCount += 1
          if (!maxAdsCount || adsCount <= maxAdsCount) {
            result.push({type: "ads"})
          }
        }
      } catch (error) {
        //console.log(jsonFormatted, error);
      }
      let finalString = item.replace(json + "</p>", "");
      if (finalString) {
        finalString = finalString.trim()
        if (finalString.endsWith("<p>")) {
          finalString = finalString.slice(0, -3);
        }
        finalString = finalString.split("<p></p>").join("")
        result.push({ type: "article", content: finalString });
      }
    }

    return { article, article_body_list: result, product: productUsed, h1 };
  }

  static articleReplaceVariables(articleBodyList, product) {
    articleBodyList
      .filter((part) => !!part)
      .map((part) => {
        if (product && part.type === "article") {
          part.content = replaceVariables(part.content, product);
        }
        return part;
      });
  }
}



