import React from "react";
import { ProductFormWidget } from "components/product/ProductFormWidget";
import { ReviewView } from "components/ReviewView";
import { ProductDescription } from "components/product/ProductDescription";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { useStore } from "context/state";
import { useTranslation } from "app/i18n/client";
import { clsx } from "utils"; 
import styles from "./Page.module.scss";

export const Page = (props) => {
  const {product, reviews, noBreadcrumbs} = props;
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
                  <ProductDescription product={product}
                                      actionType={actionType}
                                      reviews={reviews}
                  />
              </div>
          </div>

          {
              !isMobile ?
                  <div className={styles["side-panel"]}>
                      {
                          actionType === "cart" ?
                            <div className={styles["side-form"]}>
                                <ProductFormWidget product={product} withCountry/>
                            </div>
                            :
                            null
                      }

                      {
                          reviews.length ?
                              <div>
                                  <div className={styles["side-title"]}>
                                      {t("reviews")}
                                  </div>
                                  {
                                      reviews.map((review, i) => {
                                          return (
                                              <div key={i} className={clsx("card", styles["review-item"])}>
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
