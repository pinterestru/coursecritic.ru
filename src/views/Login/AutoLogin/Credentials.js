import React, { useEffect } from "react";
const signIn = async () => ({ error: "Auth disabled" });
import { useRouter } from "next/router";
import { queryParse, queryStringify } from "utils";
import styles from "./Credentials.module.scss";
import { Loader } from "commons/Loader";

export const AutoLogin = ({ customerId }) => {
  const router = useRouter();
  const error = router.query.error;

  const processCallbackUrl = (callbackUrl, deleteCustomer) => {
    const callbackUrlParams = queryParse(callbackUrl);
    if (deleteCustomer) {
      delete callbackUrlParams["customer_id"];
    } else {
      callbackUrlParams["customer_id"] = "_"
    }
    return callbackUrl.split("?")[0] + "?" + queryStringify(callbackUrlParams);
  };

  const onSubmit = async () => {
    const callbackUrl = processCallbackUrl(router.query.callbackUrl || "");
    await signIn("auto_login", {
      customer_id: customerId,
      callbackUrl,
    });
  };

  const onError = () => {
    const query = { ...router.query };
    delete query["error"];
    query["callbackUrl"] = processCallbackUrl(router.query.callbackUrl || "", true);

    router.push({ pathname: router.pathname, query: query }, undefined, { shallow: true });
  };

  useEffect(() => {
    if (!error) {
      onSubmit();
    } else {
      onError();
    }
  }, []);

  return (
    <div className={styles["loading"]}>
      <Loader withMargin />
    </div>
  );
};
