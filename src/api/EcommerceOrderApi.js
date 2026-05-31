import { dataSource } from "./dataSource";

export class EcommerceOrderApi {
  static async ecommerceOrderCreate(item, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(`order/?mtfi=${item.mtfi}`, {
      data: { item },
      apiPath,
      revalidate
    });
    return response;
  }

  static async proxyRequestSend(data, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(`proxy_request`, {
      data: data,
      apiPath,
      revalidate
    });
    const result = result.data;
    return result;
  }
}
