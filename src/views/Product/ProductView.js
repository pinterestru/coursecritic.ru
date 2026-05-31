import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const ProductView = ({ product, reviews, meta, menu, seo }) => {
  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page
          product={product}
          noBreadcrumbs={meta.store_view_type === "onepage"}
          reviews={reviews}
        />
      </Layout>
    </SeoWrapper>
  );
};
