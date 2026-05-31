import { FunnelApi } from "api/FunnelApi";

export class FunnelService {
  static async courseOnboarding(email, productId, workspaceId, origin, options) {
    options = options || {};

    const timezoneOffsetMinutes = -1 * new Date().getTimezoneOffset()
    const response = await FunnelApi.courseOnboarding(email, productId, workspaceId, origin, timezoneOffsetMinutes, options)
    return response
  }
}

