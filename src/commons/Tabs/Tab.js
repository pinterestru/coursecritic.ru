import React from "react";
import {Tab as TabBase} from "@mui/base/Tab";
import { clsx } from "utils";
import styles from "./Tab.module.scss";

export const Tab = (props) => {
  const { className, tabIndex, children } = props;

  return (
    <TabBase
      {...props}
      className={clsx(
        className,
        styles["tab"],
        tabIndex === 0 && styles["selected"]
      )}
    >
      {children}
    </TabBase>
  );
};
