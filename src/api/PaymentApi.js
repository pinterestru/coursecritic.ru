import { dataSource } from "./dataSource";

export class PaymentApi {
  static async buymeacoffeeValidate(email, product, callbackUrl, origin, options) {
    options = options || {};

    const response = await dataSource(`api/payment/buymeacoffee_validate`, {
      data: {
        email,
        product,
        callbackUrl,
        origin
      },
      useClient: true
    });

    return {
      approved: response.approved,
      action: response.action,
      url: response.url,
      message: response.message,
      status: response.status,
    };
  }
}
