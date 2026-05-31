import React from "react";
import { LoadPlayer } from "./LoadPlayer";
import { clsx } from "utils";
import styles from "./RichTextContent.module.scss";

export const RichTextContent = ({ value, size, itemProp, className, children, asParent, asChild, noPlayer }) => {

  if (asParent) {
    return (
      <div className={clsx(className, styles.content, "ck-content", size)} itemProp={itemProp}>
        {children}
      </div>
    )
  }
  return (
    <>
      <div
        className={asChild ? undefined : clsx(className, styles.content, "ck-content", size)}
        itemProp={itemProp}
        dangerouslySetInnerHTML={{
          __html: value || "",
        }}
      />
      {
        noPlayer ?
          null
          :
          <LoadPlayer value={value} />
      }
    </>
  );
};

export const getTextFromRichText = (jsonData) => {
  return jsonData;
};
