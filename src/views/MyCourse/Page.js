import React from "react";
import { useTranslation } from "app/i18n/client";
import { MyCourseDescription } from "components/course/MyCourseDescription"
import styles from "./Page.module.scss";

export const Page = (props) => {
  const {product, slug, courseId, courseStructureList, courseReportList} = props;
  const { t } = useTranslation('common')


  return (
    <div className={styles["product-page"]}>
        <MyCourseDescription product={product} 
                             courseId={courseId}
                             slug={slug}
                             courseStructureListInitial={courseStructureList}
                             courseReportListInitial={courseReportList}/>
    </div>
  );
};
