import React, { useState, useEffect } from "react";
const signIn = async () => ({ error: "Auth disabled" });
import { TextField } from "commons/TextField";
import { Button } from "commons/Button";
import { useTranslation } from "app/i18n/client";
import { useRouter } from "next/router";
import styles from "./Credentials.module.scss";

export const Credentials = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation("common");
  const router = useRouter();

  const emailDefault = router.query.email || ""

  const onSubmit = async (username, password) => {
    const callbackUrl = router.query.callbackUrl || "/";
    await signIn("credentials", {
      username: username,
      password: password,
      callbackUrl,
    });
  };

  useEffect(() => {
    if (!email && emailDefault) {
      setEmail(emailDefault)
    }
  }, [emailDefault])

  return (
    <form className={styles.form} onSubmit={e => {e.preventDefault(); onSubmit(email, password); }}>
      <TextField
        className={styles["input"]}
        label={t("inputs.email")}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        size="large"
        placeholder={t("inputs.emailHelper")}
      />
      <TextField
        className={styles["input"]}
        label={t("inputs.password")}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        size="large"
        placeholder={t("inputs.passwordHelper")}
      />
      <Button
        size="large"
        type="button"
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          onSubmit(email, password);
        }}
      >
        {t("login.login")}
      </Button>
    </form>
  );
};
