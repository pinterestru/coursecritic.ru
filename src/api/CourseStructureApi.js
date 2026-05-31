import { dataSource } from "./dataSource";

export class CourseStructureApi {
  static async courseStructureNext(courseId, courseStructureId, options) {
    options = options || {};
    const { apiPath } = options;
    const response = await dataSource(
      `course_structure_next?course_id=${courseId}&course_structure_id=${courseStructureId}`,
      {
        apiPath,
      }
    );

    return {
      item: response.item || {},
      message: response.message,
      status: response.status,
    };
  }

  static async courseStructureList(courseId, space, nested, options) {
    options = options || {};
    const { apiPath } = options;
    const response = await dataSource(
      `course_structure_list?course_id=${courseId}&space=${space || "empty"}&is_hidden=false&nested=true&order_by=position${nested ? `&nested=true` : ""}`,
      {
        apiPath,
      }
    );

    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }

  static async courseStructureGet(structureId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_structure_get?course_structure_id=${structureId}`,
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

  static async courseStructureWithProgressList(courseId, space, timezoneOffset, withProgress, nested, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_structure_list_with_content?course_id=${courseId}&is_hidden=false&nested=true&space=${space || "empty"}&order_by=position&timezone_offset_minutes=${(timezoneOffset || 0).toString()}${withProgress ? `&join_progress=true` : ""}${nested ? `&nested=true` : ""}`,
      {
        apiPath,
        revalidate
      }
    );

    return {
      itemList: response.item_list || [],
      message: response.message,
      status: response.status,
    };
  }
}
