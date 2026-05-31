import { CourseLectureApi } from "api/CourseLectureApi";

export class CourseLectureService {
  static async courseLectureGet(lectureId, options) {
    options = options || {}
    const response = await CourseLectureApi.courseLectureGet(lectureId, options);
    if (options.asValue) return response.item;
    return response;
  }
  static async courseLectureAttachmentList(lectureId, options) {
    options = options || {}
    const response = await CourseLectureApi.courseLectureAttachmentList(lectureId, options);
    if (options.asValue) return response.item_list;
    return response;
  }
  static async courseLectureProgressSet(lectureId, externalId, update, options) {
    options = options || {}
    const response = await CourseLectureApi.courseLectureProgressSet(lectureId, externalId, update, options);
    if (options.asValue) return response.item;
    return response;
  }
}

