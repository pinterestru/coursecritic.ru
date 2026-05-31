import { dataSource } from "./dataSource";

export class FunnelApi {
  static async courseOnboarding(email, productId, workspaceId, origin, timezoneOffsetMinutes, options) {
    options = options || {};

    const response = await dataSource(`api/funnel/course_onboarding`, {
      data: {
        email,
        ecommerce_product_id: productId,
        workspace_id: workspaceId,
        origin,
        timezone_offset_minutes: timezoneOffsetMinutes
      },
      useClient: true
    });

    return {
      action: response.action,
      url: response.url,
      message: response.message,
      status: response.status,
    };
  }
}
