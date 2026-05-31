import { AuthApi } from "api/AuthApi";
import { queryStringify } from "utils";

export class AuthService {
  static async signIn(email, password, options) {
    const response = await AuthApi.signIn((email || "").toLowerCase().trim(), password, options);
    return response;
  }
  static async signInByOtp(token, options) {
    const response = await AuthApi.signInByOtp(token, options);
    return response;
  }
  static async signInById(customerId, options) {
    const response = await AuthApi.signInById(customerId, options);
    return response;
  }

  static async generateOtp(email, options) {
    const linkTemplate = options.origin + "/login?provider=otp_submit&token={{token}}&" + queryStringify({callbackUrl: options.callbackUrl}, {skipEmptyString: true})

    options.metaJson = JSON.stringify({...(options.meta || {}), email: options.email || email, with_email: options.withEmail || false, ecommerce_store_id: options.ecommerceStoreId || "", callback_url: options.callbackUrl || "", email_template: options.emailTemplate, link_template: linkTemplate})

    const response = await AuthApi.generateOtp(email, options);
    return response;
  }

  static async tokenRefresh(refreshToken, options) {
    const response = await AuthApi.tokenRefresh(refreshToken, options);
    return response;
  }

  static async userIdGet(email, options) {
    options = options || {};
    const response = await AuthApi.userIdGet(email, options);
    if (options.asValue) return response.user_id;
    return response;
  }
}
