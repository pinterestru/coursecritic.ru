import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import styles from "./ThemeSwitch.module.scss";
import { useSwitch } from '@mui/base/useSwitch';
import { clsx } from "utils";

export function ThemeSwitch({ label, className }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className={clsx(className, styles.container)}>
      <span className={styles.label}>{label || "Theme"}</span>
      <Switch
        checked={theme === "dark"}
        onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
      />
    </div>
  );
}

function Switch(props) {
  const { getInputProps, checked, disabled, focusVisible } = useSwitch(props);

  return (
    <span
      className={clsx(
        styles.root,
        checked ? styles.checked : "",
        disabled ? styles.disabled : "",
        focusVisible ? styles.focusVisible : ""
      )}
    >
      <span className={styles.track}>
        <span
          className={clsx(
            styles.thumb,
            checked ? styles.checked : "",
            disabled ? styles.disabled : "",
            focusVisible ? styles.focusVisible : ""
          )}
        />
      </span>
      <input
        {...getInputProps()}
        className={styles.input}
        aria-label="Theme Switch"
      />
    </span>
  );
}
