import React from "react";
import { TextField } from "commons/TextField";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent";
import { Button } from "commons/Button";
import { useTranslation } from "app/i18n/client";
import styles from "./Page.module.scss";

export const Page = ({ title, description }) => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["sign-up-page"]}>
      <div className="container">
        <Breadcrumbs breadcrumbs={[{ link: "/sign-up", value: t("signUp") }]} t={t}/>
      </div>
      <div className="container">
        <h1 className="hero-title">{title || t("signUp")}</h1>
        {description && (
          <div className={styles.description}>
            <RichTextContent value={description} />
          </div>
        )}
        <form className={styles.form}>
          <TextField
            className={styles["input"]}
            label={t("inputs.email")}
            helperText={t("inputs.emailHelper")}
          />
          <TextField
            className={styles["input"]}
            label={t("inputs.name")}
            helperText={t("inputs.nameHelper")}
          />
          <TextField
            className={styles["input"]}
            label={t("inputs.password")}
            helperText={t("inputs.passwordHelper")}
          />
          <TextField
            className={styles["input"]}
            label={t("inputs.passwordRepeat")}
            helperText={t("inputs.passwordRepeatHelper")}
          />
          <Button color="secondary" size="large">
            {t("signUp")}
          </Button>
        </form>
      </div>
    </div>
  );
};
