import React from "react";
import { SeoWrapper } from "commons/SeoWrapper";
import { Layout } from "layouts/Layout";
import { Page } from "./Page";

export const ArticleView = ({
  meta,
  menu,
  article,
  articleBodyList,
  reviews,
  product,
  productUsed,
}) => {
  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page
          article={article}
          articleBodyList={articleBodyList}
          reviews={reviews}
          product={product}
          productUsed={productUsed || {}}
          noBreadcrumbs={article.article_no_breadcrumbs === "true"}
        />
      </Layout>
    </SeoWrapper>
  );
};
