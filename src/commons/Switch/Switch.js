import React from "react";
import { clsx } from "utils";
import { useSwitch } from '@mui/base/useSwitch';
import styles from "./Switch.module.scss";



export function Switch(props) {
  const { size } = props;
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  return (
    <span
      className={clsx(
        styles.root,
        size === "small" ? styles.small : "",
        //checked ? styles.checked : "",
        disabled ? styles.disabled : "",
        //focusVisible ? styles.focusVisible : ""
      )}
    >
      <span
          className={clsx(
            styles.thumb,
            checked ? styles.checked : "",
            disabled ? styles.disabled : "",
            focusVisible ? styles.focusVisible : ""
          )}
        />
      <input
        {...getInputProps()}
        className={styles.input}
        aria-label="Switch"
      />
    </span>
  );
}
