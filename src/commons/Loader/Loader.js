import React from "react";
import { clsx } from "utils";
import styles from "./Loader.module.scss";

export const Loader = ({ size, type, margin, fullscreen, className, withMargin }) => {
  return (
    <div
      className={clsx(styles["container"], className, fullscreen ? styles["fullscreen"] : "", withMargin ? styles["margin"] : "")}
      style={{ marginTop: margin || undefined }}
    >
      {
        <div className={styles["tt-container"]}>
          <div className={styles["tt-left"]}></div>
          <div className={styles["tt-right"]}></div>
        </div>
      }
    </div>
  );
};
