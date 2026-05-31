import { MediaApi } from "api/MediaApi";

export class MediaService {
  static async upload(file, options) {
    options = options || {}
    const response = await MediaApi.upload(file, options);
    return response;
  }
}
