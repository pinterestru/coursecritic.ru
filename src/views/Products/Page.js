import React from "react";
import { useTranslation } from "app/i18n/client";
import { ProductSection } from "components/product/ProductSection";
import { Breadcrumbs } from "commons/Breadcrumbs";
import styles from "./Page.module.scss";

export const Page = ({ productDict, categoryList, loading }) => {
  const { t } = useTranslation("common");

  return (
    <div className={styles["container"]}>
      <div className="container">
        <Breadcrumbs breadcrumbs={[{ value: t("products") }]} t={t}/>
      </div>

      <h1 className="container hero-title">{t("products")}</h1>

      <div className={"container " + styles["category-preview-box"]}>
        {categoryList.map((category, i) => {
          const id = category.ecommerce_product_category_id;
          const name = category.name;
          return (
            <span
              key={id}
              onClick={(e) => {
                e.preventDefault();
                const categoryNode = document.getElementById(id);
                if (categoryNode && window) {
                  categoryNode.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className={styles["category-preview"]}
            >
              {name}
            </span>
          );
        })}
      </div>

      <div className="container">
        {categoryList.map((category, i) => {
          const categoryId = category.ecommerce_product_category_id;
          const products = productDict[categoryId];
          if (!products) return null;
          return (
            <div key={i}>
              <h2 id={categoryId} className={" " + styles["title"]}>
                {(category.name || "").toUpperCase()}
              </h2>
              <div className={styles["product-section"]}>
                <ProductSection
                  columns={3}
                  size={20}
                  itemId="ecommerce_product_id"
                  labelClassName=""
                  noLabel
                  type="product"
                  productList={products}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
