import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const ProductsView = ({
  meta,
  menu,
  productDict,
  categoryList,
  seo,
}) => {
  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page productDict={productDict} categoryList={categoryList} />
      </Layout>
    </SeoWrapper>
  );
};
