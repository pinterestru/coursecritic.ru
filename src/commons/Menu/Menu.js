import React from "react";
import {Menu as MenuBase} from '@mui/base/Menu'; 
import {Popper as PopperBase} from '@mui/base/Popper';
import { clsx } from "utils";
import styles from "./Menu.module.scss";




const ListBox = React.forwardRef(function ListBoxRef(props, ref) {
  const { children, className, ownerState, ...other } = props;
  return (
    <div
      className={clsx(styles.listbox, className)}
      ref={ref}
      {...other}
    >
      {children}
    </div>
  );
});

function Popper(props) {
  return (
    <PopperBase {...props} className={clsx(props.className, styles.popper)}>
      {props.children}
    </PopperBase>
  )
}

export function Menu({children, open, onClose}) {
  const menuActions = React.useRef(null);

  return (
    <>
      <MenuBase
          actions={menuActions}
          open={!!open}
          onClose={() => null}
          anchorEl={open || null}
          slots={{ root: Popper, listbox: ListBox }}
          slotProps={{ listbox: { id: 'menu-component' } }}
      >
        {children}
      </MenuBase>
      {
        open ?
          <div className={styles.backdrop} onClick={onClose}></div>
          :
          null
      }
    </>
  );
}