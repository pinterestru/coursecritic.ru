import { PermissionApi } from "api/PermissionApi";
import { spaceId } from "../constants";

export class PermissionService {
  static async permissionModelObjectCreate(email, model, objectId, source, meta, options) {
    options = options || {}
    const item = {
      email,
      model,
      object_id: objectId,
      space_id: spaceId,
      source: source,
      meta_json: JSON.stringify(meta || {})
    }
    const response = await PermissionApi.permissionModelObjectCreate(
      item,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }

  static async permissionModelObjectGet(email, model, objectId, options) {
    options = options || {}
    const response = await PermissionApi.permissionModelObjectGet(
      email,
      model,
      objectId,
      spaceId,
      options
    );
    if (options.asValue) return response.item;
    return response;
  }
}
