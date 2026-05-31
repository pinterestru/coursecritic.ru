import React, {useState} from "react";
import { useTranslation } from "app/i18n/client";
import { Breadcrumbs } from "commons/Breadcrumbs";
import styles from "./Page.module.scss";
import { MdDrafts } from "react-icons/md";
import { SupportForm } from "components/SupportForm";
import { clsx } from "utils";

export const Page = ({ title }) => {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation("common");
  return (
    <div className={styles["support-page"]}>
      <div className="container">
        <Breadcrumbs
          breadcrumbs={[{ link: "/support", value: t("support") }]}
          t={t}
        />
      </div>
      <div className="container">
        <h1 className="hero-title">{title || t("support")}</h1>
        <div className={clsx("card", styles.form)}>
          {
            submitted ?
              <div className={styles.success}>
                  <MdDrafts className={styles["success-icon"]} size="65px"/>
                  <p className={styles["success-text"]}>
                    {t("supportRequestReceived")}
                  </p>
              </div>
              :
              <div>
                <h2 className={clsx("title")}>{t("writeYourQuestion")}</h2>
                <SupportForm onSuccess={() => {
                  setSubmitted(true)
                }}/>
              </div>
          }
        </div>
      </div>
    </div>
  );
};
