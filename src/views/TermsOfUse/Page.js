import React from "react";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent"
import { useTranslation } from "app/i18n/client";
import styles from "./Page.module.scss";

export const Page = ({ title, description }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["terms-of-use-page"]}>
      <div className="container">
        <Breadcrumbs
          breadcrumbs={[{ link: "/terms-of-use", value: t("termsOfUse") }]}
          t={t}
        />
      </div>
      <div className="container">
        <h1 className="hero-title">{title || t("termsOfUse")}</h1>
        {description && (
          <div className={styles.description}>
            <RichTextContent value={description} />
          </div>
        )}
      </div>
    </div>
  );
};
