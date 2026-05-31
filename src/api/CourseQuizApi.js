import { dataSource } from "./dataSource";

export class CourseQuizApi {
  static async courseQuizGet(quizId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_quiz_get?course_quiz_id=${quizId}`,
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
  static async courseQuizQuestionList(quizId, externalId, withProgress, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_quiz_question_link_list?course_quiz_id=${quizId}&external_id=${externalId}&join_course_question=true&join_course_question_progress=${withProgress ? "true" : ""}&order_by=position`,
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
  static async courseQuizQuestionNext(nextQuestionId, quizId, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_question_next?next_question_id=${nextQuestionId}&course_quiz_id=${quizId}`,
      {
        apiPath,
        revalidate
      }
    );
    const item = v.item;
    const question = item.question || {};
    if (item.is_finished && question.question_type !== "complete_screen") {
      item.question_type = "complete_screen_default";
    }
    const result = {
      quiz: item.quiz,
      question: question,
      quizProgress: item.quiz_progress,
      questionProgress: item.question_progress,
      previousQuestionId: item.previous_question_id,
      stepCount: item.step_count,
      incorrectAnsweredCount: item.incorrect_answered_count || 0,
      correctAnsweredCount: item.correct_answered_count || 0,
      answeredCount: item.answered_count,
      totalCount: item.total_count,
      isFinished: item.is_finished,
    };
    return {
      item: result,
      message: response.message,
      status: response.status,
    };
  }
  static async courseQuizSubmit(quizId, externalId, answers, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const response = await dataSource(
      `course_quiz_submit`,
      {
        data: {
          course_quiz_id: quizId,
          external_id: externalId,
          answers: answers
        },
        apiPath,
        revalidate
      }
    );
    return {
      message: response.message,
      status: response.status,
    };
  }
  static async courseQuizProgressSet(quizId, externalId, timeSpent, options) {
    options = options || {};
    const { apiPath, revalidate } = options;
    const update = {time_spent: timeSpent};
    const response = await dataSource(
      `course_quiz_progress_set?course_quiz_id=${quizId}&external_id=${externalId}`,
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
