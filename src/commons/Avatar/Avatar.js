import React from "react";
import { clsx } from "utils";
import styles from "./Avatar.module.scss";
import Image from "next/image";

export const Avatar = ({
  className,
  src,
  title,
  alt,
  width,
  height,
  size,
  sizes,
  color,
  backgroundColor,
  disabled,
  button,
  onClick,
  children,
  plainImage,
}) => {
  return (
    <div
      onClick={disabled ? undefined : onClick}
      style={{ color, backgroundColor, width: width || size, height: height || size }}
      className={clsx(className, styles.avatar, button ? styles.button : "")}
    >
      {src ? (
        plainImage ? (
          <img src={src} className={styles.image} title={title} alt={alt} />
        ) : (
          <Image
            src={src}
            sizes={sizes || "(max-width: 768px) 25vw, 10vw"}
            title={title}
            alt={alt}
            fill
          />
        )
      ) : (
        children
      )}
    </div>
  );
};
