import React, {useState, useEffect} from "react";
import { AuthService } from "service/AuthService";
import { TextField } from "commons/TextField";
import { Button } from "commons/Button";
import { useTranslation } from "app/i18n/client";
import { useRouter } from "next/router";
import { MdMarkEmailUnread } from "react-icons/md";
import { ecommerceStoreId } from "../../../constants";
import styles from "./Otp.module.scss";

export const Otp = (props) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const { t } = useTranslation('common')
  const router = useRouter();

  const emailDefault = router.query.email || ""

  const onSubmit = async (email) => {
    const emailRe =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRe.test(email)) {
      setError(t("errors.invalidEmail"));
      return;
    }

    email = email.toLowerCase().trim()
    const callbackUrl = router.query.callbackUrl || "/"
    const response = await AuthService.generateOtp(email, {email, origin: window.location.origin, ecommerceStoreId, withEmail: true, callbackUrl})
    if (!response.message) {
      setSubmitted(true)
    } else {
      setError(t("errors.error"))
    }
  }

  useEffect(() => {
    if (!email && emailDefault) {
      setEmail(emailDefault)
    }
  }, [emailDefault])

  if (submitted) {
    return (
      <div className={styles.submitted}>
        <MdMarkEmailUnread className={styles.svg} size="70px"/>
        <span className={styles.text}>{t("checkEmail")}</span>
      </div>
    )
  }

  return (
    <form onSubmit={e => {e.preventDefault(); onSubmit(email); }} className={styles.form}>
          <TextField className={styles["input"]}
                     label={t("inputs.email")}
                     error={router.query.error ? t("errors.linkExpired") : (error ? error : "")}
                     onChange={(e) => setEmail(e.target.value)}
                     placeholder={t("inputs.emailHelper")}
                     size="large"
                     value={email} />
          <Button size="large" type="button" className={styles.button} onClick={(e) => {e.preventDefault(); onSubmit(email)}}>
              {t("login.login")}
          </Button>
    </form>
  );
};
