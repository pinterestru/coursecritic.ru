import React from "react";
import styles from "./Button.module.scss";

export const Button = ({
  className = "",
  children,
  testingContext,
  secondary,
  btnRef,
  size,
  type,
  variant,
  color,
  animation,
  fullWidth,
  disabled,
  loading,
  onClick,
  itemProp,
  ariaLabel,
  ...otherProps
}) => (
  <button
    data-test={testingContext}
    aria-label={ariaLabel}
    className={`${styles.button} ${styles[color]} ${disabled || loading ? styles["disabled"] : ""} ${
      styles[size || "medium"]
  } ${className} ${styles[variant || "contained"]} ${fullWidth ? styles["full-width"] : ""} ${animation ? styles[animation + "-animation"] : ""}`}
    ref={btnRef}
    type={type}
    disabled={disabled || loading}
    onClick={disabled || loading ? undefined : onClick}
    {...otherProps}
  >
    <span itemProp={itemProp}>{children}</span>
  </button>
);
