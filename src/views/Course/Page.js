import React from "react";
import { ReviewView } from "components/ReviewView";
import { CourseDescription } from "components/course/CourseDescription";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { useStore } from "context/state";
import { useTranslation } from "app/i18n/client";
import styles from "./Page.module.scss";

export const Page = (props) => {
  const {product, courseId, courseStructureList, reviews, noBreadcrumbs} = props;
  const {isMobile, mtfi} = useStore();
  const { t } = useTranslation('common')
  const actionType = !!mtfi ? (product.product_action_type || "cart") : ("cart" || "redirect")


  return (
    <div className={styles["product-page"]}>
      {
        !noBreadcrumbs ?
          <div className="container">
            <Breadcrumbs breadcrumbs={[{value: product.name }]} t={t}/>
          </div>
          :
          null
      } 

      <div className={"container " + styles.container}>
          <div className={styles.product + " " + styles["main-panel"]}>
              <div className={styles["widget"]}>
                  <CourseDescription  product={product}
                                      actionType={actionType}
                                      courseId={courseId}
                                      courseStructureList={courseStructureList}
                                      reviews={reviews}
                  />
              </div>
          </div>

          {
              !isMobile ?
                  <div className={styles["side-panel"]}>

                      {
                          reviews.length ?
                              <div>
                                  <div className={styles["side-title"]}>
                                      {t("reviews")}
                                  </div>
                                  {
                                      reviews.map((review, i) => {
                                          return (
                                              <div key={i} className={styles["review-item"]}>
                                                  <ReviewView index={i}
                                                        withRating
                                                        avatar={review.avatar}
                                                        name={review.name}
                                                        rating={review.rating}
                                                        review={review.review || ""}
                                                        reviewRich={review.review_rich || ""}
                                                        answer={review.answer || ""}
                                                        answerRich={review.answer_rich || ""}
                                                        author={product.article_author}
                                                        maxLength={200}/>
                                              </div>
                                          )
                                      })
                                  }
                              </div>
                              :
                              null
                      }

                  </div>
                  :
                  null
          }
      </div>
    </div>
  );
};
