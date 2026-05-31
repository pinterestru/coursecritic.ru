import { CustomerApi } from "api/CustomerApi";

export class CustomerService {
  static async customerGet(options) {
    options = options || {}
    const response = await CustomerApi.customerGet(options);
    if (options.asValue) return response.item;
    return response;
  }
  static async customerUpdate(update, options) {
    options = options || {}
    const response = await CustomerApi.customerUpdate(update, options);
    if (options.asValue) return response.item_list;
    return response;
  }
  static async customerCreate(email, password, options) {
    options = options || {}
    const item = {
        email,
        password,
        workspace_id: options.workspaceId || "",
        timezone_offset_minutes: options.timezoneOffsetMinutes || 0
    }
    const response = await CustomerApi.customerCreate(item, options);
    if (options.asValue) return response.item;
    return response;
  }
}
