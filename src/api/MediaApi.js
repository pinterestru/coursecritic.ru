import { dataSource } from "./dataSource";

export class MediaApi {
  static async upload(file, options) {
    options = options || {};
    const { directory, serviceName, apiPath, revalidate } = options;

    const data = new FormData();
    data.append('file', file);

    const headers = {'Content-Type': 'multipart/form-data'};
    const response = await dataSource(`upload?directory=${directory}&service_name=${serviceName}&use_original_name=true`, {
      data,
      apiPath,
      headers,
      revalidate
    });

    return {
      path: response.file_path,
      message: response.message,
      status: response.status,
    };
  }
}