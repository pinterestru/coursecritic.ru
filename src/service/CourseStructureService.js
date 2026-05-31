import { CourseStructureApi } from "api/CourseStructureApi";

export class CourseStructureService {
  static async courseStructureNext(courseId, courseStructureId, options) {
    options = options || {}
    const response = await CourseStructureApi.courseStructureNext(courseId, courseStructureId, options);
    if (options.asValue) return response.item;
    return response;
  }
  static async courseStructureList(courseId, options) {
    options = options || {}
    const response = await CourseStructureApi.courseStructureList(courseId, "", false, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async courseStructureGet(structureId, options) {
    options = options || {}
    const response = await CourseStructureApi.courseStructureGet(structureId, options);
    if (options.asValue) return response.item;
    return response;
  }
  static async courseStructureWithProgressList(courseId, options) {
    options = options || {}
    const response = await CourseStructureApi.courseStructureWithProgressList(courseId, "", -1 * new Date().getTimezoneOffset(), true, false, options);
    response.itemList = response.itemList.map((item, i) => {
      return {...item, ...(item.course_lecture_progress || {}), ...(item.course_quiz_progress || {})}
    })
    if (options.asValue) return response.itemList;
    return response;
  }
  static async courseReportList(courseId, options) {
    options = options || {}
    const response = await CourseStructureApi.courseStructureList(courseId, "report", false, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async courseReportWithProgressList(courseId, options) {
    options = options || {}
    const response = await CourseStructureApi.courseStructureWithProgressList(courseId, "report", -1 * new Date().getTimezoneOffset(), true, false, options);
    response.itemList = response.itemList.map((item, i) => {
      return {...item, ...(item.course_lecture_progress || {}), ...(item.course_quiz_progress || {})}
    })
    if (options.asValue) return response.itemList;
    return response;
  }
}

