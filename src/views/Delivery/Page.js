import React from "react";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent";
import { useTranslation } from "app/i18n/client";
import styles from "./Page.module.scss";

export const Page = ({ title, description }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["delivery-page"]}>
      <div className="container">
        <Breadcrumbs
          breadcrumbs={[{ link: "/delivery", value: t("delivery") }]}
          t={t}
        />
      </div>
      <div className="container">
        <h1 className="hero-title">{title || t("delivery")}</h1>
        {description && (
          <div className={styles.description}>
            <RichTextContent value={description} />
          </div>
        )}
      </div>
    </div>
  );
};
