import { EcommerceOrderApi } from "api/EcommerceOrderApi";

export class OrderService {
  static async orderCreate(item, options) {
    const response = await EcommerceOrderApi.ecommerceOrderCreate(item, options)
    if (options.asValue) return response.item
    return response
  }


  static async externalClickGet(url, data, options) {
    const item = {
      url,
      type: "GET",
      response_type: "text",
      ua_in_header: data.ua,
    };
    const result = await EcommerceOrderApi.proxyRequestSend(item, options);
    return result;
  }
}
