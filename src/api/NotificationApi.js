import { dataSource } from "./dataSource";

export class NotificationApi {
  static async notify(text, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    if (!text) {
      return {
        message: "text__null",
      }
    }
    const response = await dataSource(`notify`, {
      data: { text, type: "system_notification" },
      apiPath,
      revalidate
    });
    return response;
  }
}
