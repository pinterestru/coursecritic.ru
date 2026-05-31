import React from "react";
import { useTranslation } from "app/i18n/client";
import { MyCourseSection } from "components/course/MyCourseSection";
import { clsx } from "utils";
import styles from "./Page.module.scss";
import { Loader } from "commons/Loader";

export const Page = ({ courseList, loading }) => {
  const { t } = useTranslation("course");

  return (
    <div className={clsx("container", styles["container"])}>

      <h1 className="hero-title">{t("myCourses")}</h1>

      <div className={styles["body"]}>
        {
          loading ?
            <Loader margin={100}/>
            :
            <MyCourseSection
                  size={20}
                  productList={courseList}
            />
        }
      </div>
    </div>
  );
};
