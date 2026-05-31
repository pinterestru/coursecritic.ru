import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const NotFoundView = ({ meta, menu, seo }) => {

  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page />
      </Layout>
    </SeoWrapper>
  );
};
