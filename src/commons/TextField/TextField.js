import React from "react";
import {Input as InputBase} from "@mui/base/Input";
import styles from "./TextField.module.scss";
import { clsx } from "utils";



const Input = React.forwardRef(function InputRef(props, ref) {
  const { className, size, ownerState, ...rest } = props;
  return (
    <input {...rest} ref={ref} className={clsx(size === "small" && styles["small"], size === "large" && styles["large"], styles["input"])} />
    );
});


const Textarea = React.forwardRef(function TextareaRef(props, ref) {
  const { className, size, minRows, maxRows, ownerState, ...rest } = props;
  return (
    <textarea {...rest} ref={ref} className={clsx(size === "small" && styles["small"], size === "large" && styles["large"], styles["textarea"])} />
    );
});



const InputRoot = React.forwardRef(function InputRootRef(props, ref) {
  const { children, ownerState, onClick, ...rest } = props;
  return (
    <div ref={ref} onClick={onClick} className={styles["input-root"]}>
      {children}
    </div>
    );
});

const InputAdornment = ({type, children}) => {
  return (
    <div className={clsx(type === "start" ? styles["start"] : styles["end"], styles["adornment"])}>
      {children}
    </div>
  )
}

const TextFieldCustom = React.forwardRef(function TextFieldCustom(props, ref) {
  const { slots, className, size, onClick, classNameRoot, label, placeholder, error, helperText, startAdornment, endAdornment } = props;
  return (
    <div className={(className || "") + " " + styles.field}>
      {label ? <span className={styles["label"]}>{label}</span> : null}
      <InputBase
        slots={{ input: Input, textarea: Textarea, root: InputRoot, ...slots }}
        slotProps={{input: {size}}}
        {...props}
        error={!!error}
        placeholder={placeholder}
        className={(classNameRoot || "")}
        ref={ref}
        onClick={onClick}
        startAdornment={(
          startAdornment ?
            <InputAdornment type="start">
                {startAdornment}
            </InputAdornment>
            :
            null
        )}
        endAdornment={(
          endAdornment ?
            <InputAdornment type="end">
                {endAdornment}
            </InputAdornment>
            :
            null
        )}
      />
      {helperText || error ? <span className={clsx(styles.helper, error ? styles.error : "")}>{error || helperText}</span> : null}
    </div>
  );
});

export function TextField({startAdorement, endAdorement, ...rest}) {
  return <TextFieldCustom {...rest} />;
}