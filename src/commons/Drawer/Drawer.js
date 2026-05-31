import React from "react";
import { clsx } from "utils";
import styles from "./Drawer.module.scss";

export const Drawer = ({open, onClose, style, className, children}) => {
  if (!open) return null
  return (
    <div className={styles.container}>
      <span onClick={onClose} className={styles.backdrop}></span>
      <div className={clsx(className, styles.drawer)} style={style}>
        {children}
      </div>
    </div>
  )
}
