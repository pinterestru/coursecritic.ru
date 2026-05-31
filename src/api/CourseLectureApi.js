import { dataSource } from "./dataSource";

export class CourseLectureApi {
  static async courseLectureGet(lectureId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_lecture_get?course_lecture_id=${lectureId}`,
      {
        apiPath,
        revalidate
      }
    );

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }

  static async courseLectureAttachmentList(lectureId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_lecture_attachment_list?course_lecture_id=${lectureId}`,
      {
        apiPath,
        revalidate
      }
    );

    return {
      item_list: response.item_list || {},
      message: response.message,
      status: response.status,
    };
  }

  static async courseLectureProgressSet(lectureId, externalId, update, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_lecture_progress_set?course_lecture_id=${lectureId}&external_id=${externalId}`,
      {
        data: {update},
        apiPath,
        revalidate
      }
    );

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }
}
