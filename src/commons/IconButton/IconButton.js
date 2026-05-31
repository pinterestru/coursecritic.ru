import React from "react";
import { clsx } from "utils";
import styles from "./IconButton.module.scss";

export const IconButton = ({
  children,
  size,
  className,
  ariaLabel,
  ...otherProps
}) => (
  <button
    aria-label={ariaLabel}
    className={clsx(className, styles.button, size === "small" ? styles["small"] : "", size === "large" ? styles["large"] : "")}
    type={"button"}
    {...otherProps}
  >
    {children}
  </button>
);
