import { dataSource } from "./dataSource";

export class ParserApi {
  static async websiteDownload(website, ecommerceStoreId, slug, options) {
    options = options || {};

    const response = await dataSource(`api/parser/website_download`, {
      data: {
        website,
        ecommerce_store_id: ecommerceStoreId,
        slug
      },
      useClient: true
    });

    return {
      message: response.message,
      status: response.status,
    };
  }

  static async assetDownload(url, options) {
    options = options || {};

    const response = await dataSource(`api/parser/asset_download?url=${url}`, {
      useClient: true
    });

    return {
      content: response.content,
      message: response.message,
      status: response.status,
    };
  }
}
