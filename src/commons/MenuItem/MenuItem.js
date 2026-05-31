import React from "react";
import {MenuItem as MenuItemBase} from '@mui/base/MenuItem';
import {clsx} from "utils";
import styles from "./MenuItem.module.scss";


export function MenuItem({children, onClick, button, icon, disabled, className}) {

  return (
    <MenuItemBase onClick={disabled ? undefined : onClick} 
                      className={clsx(styles.item, disabled ? styles.disabled : "", button ? styles.button : "", className)}>
      {
        icon ?
          <span className={styles.icon}>
            {icon}
          </span>
          :
          null
      }
      {children}
    </MenuItemBase>
  );
}