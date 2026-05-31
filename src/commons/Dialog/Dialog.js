import React from "react";
import { Modal } from "@mui/base/Modal";
import { clsx } from "utils";
import styles from "./Dialog.module.scss";

const BackdropUnstyled = React.forwardRef(function BackdropUnstyled(
  props,
  ref
) {
  const { open, className, ownerState, ...other } = props;
  return (
    <div
      className={clsx(
        open ? "MuiBackdrop-open " : "",
        className,
        styles["backdrop"]
      )}
      ref={ref}
      {...other}
    ></div>
  );
});

export const Dialog = ({
  className,
  classNameBox,
  open,
  onClose,
  width,
  height,
  maxHeight,
  maxWidth,
  fullscreen,
  fullscreenMobile,
  children,
  backdropDark
}) => {
  return (
    <Modal
      aria-labelledby="unstyled-modal-title"
      aria-describedby="unstyled-modal-description"
      className={(className || "") + " " + styles["dialog"]}
      open={open}
      onClose={onClose}
      slots={{ backdrop: BackdropUnstyled }}
    >
      <div
        className={clsx(
          styles.box,
          classNameBox,
          maxWidth ? styles[maxWidth] : "",
          fullscreen ? styles["fullscreen"] : "",
          fullscreenMobile ? styles["fullscreen-mobile"] : ""
        )}
        style={{ width, height }}
      >
        {children}
      </div>
    </Modal>
  );
};

export const DialogHeader = ({ children, className, divider }) => {
  return (
    <div
      className={clsx(
        styles["header"],
        className,
        divider ? styles["header-divider"] : ""
      )}
    >
      {children}
    </div>
  );
};

export const DialogContent = ({
  children,
  className,
  dividers,
  withPadding,
}) => {
  return (
    <div
      className={clsx(
        styles["content"],
        className,
        dividers ? styles["content-dividers"] : "",
        withPadding ? styles["content-padding"] : ""
      )}
    >
      {children}
    </div>
  );
};

export const DialogActions = ({ children, className }) => {
  return <div className={clsx(styles["actions"], className)}>{children}</div>;
};
