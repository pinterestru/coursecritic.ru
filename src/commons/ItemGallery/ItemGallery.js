import React from "react";
import { clsx } from "utils";
import styles from "./ItemGallery.module.scss";

export const ItemGallery = (props) => {
  let {
    items,
    columns,
    mobileColumns,
    label,
    loading,
    hideHeader,
    loadingItemsCount,
    labelClassName,
    marginLeftNegative,
    marginRightNegative,
    itemComponent,
    className,
    layout,
    layoutMobile
  } = props;

  if (loading && items.length === 0) {
    const itemsNew = [];
    for (let i = 0; i < (loadingItemsCount || 12); i++) {
      itemsNew.push({});
    }
    items = itemsNew;
  }

  const layoutClass = layout || "vertical";
  const layoutMobileClass = "mobile-" + (layoutMobile || "horizontal");
  return (
    <div
      className={clsx(
        styles["item-gallery"],
        styles[layoutClass],
        styles[layoutMobileClass]
      )}
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <meta itemProp="numberOfItems" content={items.length.toString()} />

      {label && !hideHeader ? (
        <div className={styles["header"]}>
          <div className={styles["label-container"] + " " + labelClassName}>
            <div className={styles["label"]}>{label}</div>
          </div>
        </div>
      ) : null}

      <div className={styles["box-shadow-right"]}></div>
      <div className={styles["box-shadow-left"]}></div>

      <div
        className={styles["body"]}
        style={{
          marginLeft:
            marginLeftNegative || marginLeftNegative === 0
              ? marginLeftNegative * -1
              : -15,
          marginRight:
            marginRightNegative || marginLeftNegative === 0
              ? marginRightNegative * -1
              : -15,
        }}
      >
        <ul
          className={clsx(
            styles["body-container"],
            className,
            styles["columns-" + (columns || 3).toString()],
            styles["mobile-columns-" + (mobileColumns || 1).toString()]
          )}
        >
          {items.map((item, i) => {
            const width = (100 / (columns || 4)).toString() + "%";
            return (
              <li
                key={i}
                itemType="https://schema.org/ListItem"
                itemScope
                itemProp="itemListElement"
                className={styles.item}
                style={{
                  width: width,
                  minWidth: width,
                }}
              >
                {itemComponent({
                  item,
                  props: {
                    ...props,
                  },
                  index: i,
                })}
                <meta itemProp="position" content={(i + 1).toString()}/>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
