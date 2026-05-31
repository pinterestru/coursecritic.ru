import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const DmcaView = ({ page, meta, menu, seo }) => {
 
    return (
      <SeoWrapper seo={seo}>
        <Layout meta={meta} menu={menu}>
          <Page
            title={page.title}
            description={page.description_rich || page.description}
          />
        </Layout>
      </SeoWrapper>
    );
};
