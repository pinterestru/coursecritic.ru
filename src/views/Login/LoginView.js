import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const LoginView = ({ page, meta, menu, seo, csrfToken }) => {
  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page
          title={page.title}
          description={page.description_rich || page.description}
          csrfToken={csrfToken}
        />
      </Layout>
    </SeoWrapper>
  );
};
