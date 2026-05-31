import { ParserApi } from "api/ParserApi";

export class ParserService {
  static async websiteDownload(website, ecommerceStoreId, slug, options) {
    options = options || {}
    if (!website.startsWith("http")) {
      website = "https://" + website
    }
    const assetResponse = await ParserApi.assetDownload(website)
    const html = assetResponse.content
    const parser = new DOMParser();
    const dom = parser.parseFromString(html, "text/html")


    //const response = await ParserApi.websiteDownload(website, ecommerceStoreId, slug, options)

    return ""
  }
}
