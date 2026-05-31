import { EmailApi } from "api/EmailApi";

export class EmailService {
  static async emailSend(title, data, options) {
    return await EmailApi.emailJsSend(title, data, options)
  }

  static async emailSubscribe(item, options) {
    const response = await EmailApi.marketingEmailSubscribe(item, options)
    if (options.asValue) return response.item
    return response
  }

  static async emailConfirm(item, options) {
    const response = await EmailApi.marketingEmailConfirm(item, options)
    if (options.asValue) return response.item
    return response
  }

  static async emailUnsubscribe(item, options) {
    const response = await EmailApi.marketingEmailUnsubscribe(item, options)
    if (options.asValue) return response.item
    return response
  }
}
