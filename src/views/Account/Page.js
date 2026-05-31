import { Account } from "components/Account";
import React from "react";
import styles from "./Page.module.scss";

export const Page = () => {
  return (
    <div className={styles["page"]}>
      <Account/>
    </div>
  );
};
