import { dataSource } from "./dataSource";

export class CustomerApi {
  static async customerGet(options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`customer_get`, {
      apiPath,
      revalidate
    });

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }
  static async customerUpdate(update, options) {
    options = options || {};
    const { customerId, apiPath, revalidate } = options;

    const response = await dataSource(`customer_update?${customerId ? `customer_id=${customerId}` : ""}`, {
      data: {update},
      apiPath,
      revalidate
    });

    return {
      item_list: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }
  static async customerMessageCreate(item, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`customer_message_create`, {
      data: { item },
      apiPath,
      revalidate
    });

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }

  static async customerCreate(item, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource(`customer_create`, {
      data: { item },
      apiPath,
      revalidate
    });

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }
}
