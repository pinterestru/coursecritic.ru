import React from "react";
import { useTranslation } from "app/i18n/client";
import { CourseContent } from "components/course/CourseContent"
import {clsx} from "utils";
import styles from "./Page.module.scss";

export const Page = (props) => {
  const {product, slug, courseId, noAction, courseStructureList} = props;
  const { t } = useTranslation('common')


  return (
    <div className={clsx("container", styles["product-page"])}>
        <CourseContent product={product} 
                             courseId={courseId}
                             slug={slug}
                             noAction={noAction}
                             courseStructureList={courseStructureList}/>
    </div>
  );
};
