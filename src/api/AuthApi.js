import { dataSource } from "./dataSource";

export class AuthApi {
  static async signIn(email, password, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`sign_in`, {
      data: { email, password },
      apiPath,
      revalidate
    });

    return {
      token: response.token || response.access,
      access: response.token || response.access,
      expires_at: response.expires_at ? response.expires_at * 1000 : response.expires_at,
      refresh: response.refresh,
      message: response.message,
      status: response.status,
    };
  }
  static async userIdGet(email, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`user_id_get?email=${email}`, {
      apiPath,
      revalidate
    });

    return {
      user_id: response.user_id,
      message: response.message,
      status: response.status,
    };
  }
  static async signInByOtp(token, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`sign_in_by_otp`, {
      data: { token },
      apiPath,
      revalidate
    });

    return {
      token: response.token || response.access,
      access: response.token || response.access,
      expires_at: response.expires_at ? response.expires_at * 1000 : response.expires_at,
      refresh: response.refresh,
      message: response.message,
      status: response.status,
    };
  }
  static async signInById(customerId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`sign_in_by_id`, {
      data: { customer_id: customerId },
      apiPath,
      revalidate
    });

    return {
      token: response.token || response.access,
      access: response.token || response.access,
      expires_at: response.expires_at ? response.expires_at * 1000 : response.expires_at,
      refresh: response.refresh,
      message: response.message,
      status: response.status,
    };
  }
  static async tokenRefresh(refreshToken, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`token_refresh`, {
      data: { refresh: refreshToken },
      apiPath,
      revalidate
    });

    return {
      token: response.token || response.access,
      access: response.token || response.access,
      expires_at: response.expires_at ? response.expires_at * 1000 : response.expires_at,
      message: response.message,
      status: response.status,
    };
  }
  static async generateOtp(email, options) {
    options = options || {};
    const { metaJson, apiPath, revalidate } = options;

    const response = await dataSource(`generate_otp`, {
      data: { email, meta_json: metaJson || "" },
      apiPath,
      revalidate
    });

    return {
      token: response.token,
      message: response.message,
      status: response.status,
    };
  }
}
