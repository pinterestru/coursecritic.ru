import React, {useState} from "react";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { RichTextContent } from "commons/RichTextContent";
import { useTranslation } from "app/i18n/client";
import { OtpSubmit } from "./OtpSubmit";
import { Credentials } from "./Credentials";
import { AutoLogin } from "./AutoLogin";
import { Otp } from "./Otp";
import {clsx, queryParse, queryStringify} from "utils";
import styles from "./Page.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";

export const Page = ({ title, description }) => {
  const { t } = useTranslation('common')
  const router = useRouter();

  const provider = router.query.provider
  const callbackUrl = router.query.callbackUrl || ""
  const callbackUrlParams = queryParse(callbackUrl)
  const customerId = callbackUrlParams.customer_id

  if (!router.isReady) {
    return null
  }

  if (customerId) {
    return <AutoLogin customerId={customerId}/>
  }
  
  if (provider === "otp_submit") {
    return <OtpSubmit/>
  }


  return (
    <div className={styles["login-page"]}>
      {/*<div className="container">
        <Breadcrumbs
          breadcrumbs={[{ link: "/login", value: t("login") }]}
        />
      </div>*/}
      <div className="container">

        <div className={styles["form-container"]}>
          <div className={clsx(styles.box, "card")}>
            <div>
              <h1 className="hero-title">{title || t("login.login")}</h1>
              {description && (
                <div className={styles.description}>
                  <RichTextContent value={description} />
                </div>
              )}
            </div>
            {
              provider === "credentials" ?
                <Credentials/>
                :
                null
            }
            {
              provider === "otp" || !provider ?
                <Otp/>
                :
                null
            }
          </div>
          <div className={styles.alternative}>
            {
              provider === "credentials" ?
                <Link href={"/login?" + queryStringify({provider: "otp", callbackUrl: router.query.callbackUrl})} className={"link"}>
                  {t("login.loginWithOtp")}
                </Link>
                :
                <Link href={"/login?" + queryStringify({provider: "credentials", callbackUrl: router.query.callbackUrl})}  className={"link"}>
                  {t("login.loginWithEmailAndPassword")}
                </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};
