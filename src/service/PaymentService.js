import { PaymentApi } from "api/PaymentApi";

export class PaymentService {
  static async buymeacoffeeValidate(email, product, callbackUrl, origin, options) {
    options = options || {}
    const response = await PaymentApi.buymeacoffeeValidate(email, product, callbackUrl, origin, options)
    if (options.asValue) return response.approved
    return response
  }
}
