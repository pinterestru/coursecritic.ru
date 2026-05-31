import { dataSource } from "./dataSource";

export class PermissionApi {
  static async permissionModelObjectGet(email, model, objectId, spaceId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `permission_model_object_get?email=${email}&model=${model}&object_id=${objectId}&space_id=${spaceId}`,
      { apiPath }
    );
    
    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }

  static async permissionModelObjectCreate(item, options) {
    options = options || {};
    const { apiPath } = options;

    const response = await dataSource(`permission_model_object_create`, {
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
