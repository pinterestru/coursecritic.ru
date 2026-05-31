import { NotificationApi } from "api/NotificationApi";

export class NotificationService {
  static async notify(text, options) {
    options = options || {}
    const response = await NotificationApi.notify(text, options);
    return response;
  }
}

