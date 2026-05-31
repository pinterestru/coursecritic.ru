import React from "react";
import Link from "next/link";
import { useTranslation } from "app/i18n/client";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { Button } from "commons/Button";
import styles from "./Page.module.scss";

export const Page = () => {
  const { t } = useTranslation("common");
  return (
    <div className={styles["not-found-page"]}>
      <div className="container">
        <Breadcrumbs
          breadcrumbs={[{ link: "/404", value: t("pageNotFound") }]}
          t={t}
        />
      </div>
      <div className={"container " + styles.container}>
        <p className={styles["preview"]}>404</p>
        <h1 className="hero-title">{t("pageNotFound")}</h1>
        <Link href="/" prefetch={false}>
          <Button color="primary" size="large">
            {t("backToMainPage")}
          </Button>
        </Link>
      </div>
    </div>
  );
};
