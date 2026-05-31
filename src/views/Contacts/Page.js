import React from "react";
import Link from "next/link";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent";
import { useTranslation } from "app/i18n/client";
import styles from "./Page.module.scss";

export const Page = ({
  title,
  description,
  storeEmail,
  storePhone,
  storeLegal,
  linkFacebook,
  linkInstagram,
}) => {
  const { t } = useTranslation('common')
  return (
    <div className={styles["contacts-page"]}>
      <div className="container">
        <Breadcrumbs breadcrumbs={[{ link: "/contacts", value: t("contacts") }]} t={t}/>
      </div>
      <div className="container">
        <h1 className="hero-title">{title || t("contacts")}</h1>
        {description && (
          <div className={styles.description}>
            <RichTextContent value={description} />
          </div>
        )}
        <div className={styles["contacts"]}>
          {storeEmail && (
            <span>
              {t("email")}: <a href={"mailto: " + storeEmail}>{storeEmail}</a>
            </span>
          )}
          {storePhone && (
            <span>
              {t("phone")}: <a href={"tel:" + storePhone}>{storePhone}</a>
            </span>
          )}
          {storeLegal && <span>{t("legalInformation")}: {storeLegal}</span>}
          {linkFacebook && <span><a href={linkFacebook} className="link" rel="noreferrer" target="_blank">Facebook</a></span>}
          {linkInstagram && <span><a href={linkInstagram} className="link" rel="noreferrer" target="_blank">Instagram</a></span>}
          <span>
            <Link className="link" href="/privacy-policy" prefetch={false}>
                {t("privacyPolicy")}
            </Link>
          </span>
          <span>
            <Link className="link" href="/terms-of-use" prefetch={false}>
                {t("termsOfUse")}
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};
