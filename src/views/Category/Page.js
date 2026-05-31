import React from "react";
import { ProductSection } from "components/product/ProductSection";
import { Breadcrumbs } from "commons/Breadcrumbs";
import { useTranslation } from "app/i18n/client";
import { clsx } from "utils";
import styles from "./Page.module.scss";

export const Page = ({ products, category }) => {
  const { t } = useTranslation("common");

  return (
    <div className={clsx("container", styles["container"])}>
      <Breadcrumbs breadcrumbs={[{ value: category.name }]} t={t}/>

      <h1 className="hero-title">{category.name}</h1>

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
};
