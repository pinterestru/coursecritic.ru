import React from "react";
import { useTranslation } from "app/i18n/client";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent";
import styles from "./Page.module.scss";

export const Page = ({ title, description }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["cookies-policy-page"]}>
      <div className="container">
        <Breadcrumbs
          breadcrumbs={[{ link: "/cookies-policy", value: t("cookiesPolicy") }]}
          t={t}
        />
      </div>
      <div className="container">
        <h1 className="hero-title">{title || t("cookiesPolicy")}</h1>
        {description && (
          <div className={styles.description}>
            <RichTextContent value={description} />
          </div>
        )}
      </div>
    </div>
  );
};
