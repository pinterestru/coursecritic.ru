import React, {useEffect} from "react";
const signIn = async () => ({ error: "Auth disabled" })
import { Loader } from "commons/Loader";
import { useRouter } from "next/router";
import styles from "./OtpSubmit.module.scss";

export const OtpSubmit = (props) => {
  const router = useRouter();
  const token = router.query.token

  const onSubmit = async (token) => {
    let callbackUrl = router.query.callbackUrl || "/"
    if (callbackUrl && !callbackUrl.startsWith("http") && !callbackUrl.startsWith("/")) {
      callbackUrl = "/"
    }
    await signIn("otp", { token, callbackUrl })
  }

  useEffect(() => {
    if (token) {
      onSubmit(token)
    }
  }, [token])

  return (
    <div className={styles.container}>
      <Loader margin={100}/>
    </div>
  );
};
