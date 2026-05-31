import { dataSource } from "./dataSource";

export class EmailApi {
  static async emailJsSend(title, data, options) {
    options = options || {};
    const userIdList = [
      "Pzzn4SMPZLELxGChk"
    ];
    const serviceId = options.serviceId || "service";
    const templateId = options.templateId || "template";
    let userId = userIdList[0];
    if (options.random) {
      userId = userIdList[Math.floor(Math.random() * userIdList.length)];
    }
    const dataEmail = {
      service_id: serviceId,
      template_id: templateId,
      user_id: userId,
      template_params: {
        title: title || "No title",
        data: data || "No data",
      },
    };
    const response = await dataSource(`api/v1.0/email/send`, {
      data: dataEmail,
      useClient: true,
      apiPath: "https://api.emailjs.com",
    });
    return response;
  }

  static async marketingEmailSubscribe(item, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource("marketing_email_subscribe", {
      data: item,
      apiPath,
      revalidate
    });

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }

  static async marketingEmailConfirm(item, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource("marketing_email_confirm", {
      data: item,
      apiPath,
      revalidate
    });

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }

  static async marketingEmailUnsubscribe(item, options) {
    options = options || {};
    const { apiPath, revalidate } = options;

    const response = await dataSource("marketing_email_unsubscribe", {
      data: item,
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
