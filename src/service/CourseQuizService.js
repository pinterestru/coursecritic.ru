import { CourseQuizApi } from "api/CourseQuizApi";

export class CourseQuizService {
  static async courseQuizGet(quizId, options) {
    options = options || {}
    const response = await CourseQuizApi.courseQuizGet(quizId, options);
    if (options.asValue) return response.item;
    return response;
  }
  static async courseQuizQuestionList(quizId, externalId, withProgress, options) {
    options = options || {}
    const response = await CourseQuizApi.courseQuizQuestionList(quizId, externalId, withProgress, options);
    if (options.asValue) return response.itemList;
    return response;
  }
  static async courseQuizQuestionNext(nextQuestionId, quizId, options) {
    options = options || {}
    const response = await CourseQuizApi.courseQuizQuestionNext(nextQuestionId, quizId, options);
    if (options.asValue) return response.item;
    return response;
  }
  static async courseQuizSubmit(quizId, externalId, answers, options) {
    options = options || {}
    const response = await CourseQuizApi.courseQuizSubmit(quizId, externalId, answers, options);
    return response;
  }
  static async courseQuizProgressSet(quizId, externalId, timeSpent, options) {
    options = options || {}
    const response = await CourseQuizApi.courseQuizProgressSet(quizId, externalId, timeSpent, options);
    if (options.asValue) return response.item;
    return response;
  }
}

