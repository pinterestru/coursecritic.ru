import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const ContactsView = ({ page, meta, menu, seo }) => {
  
    return (
      <SeoWrapper seo={seo}>
        <Layout meta={meta} menu={menu}>
          <Page
            title={page.title}
            description={page.description_rich || page.description}
            storeEmail={page.store_email}
            storePhone={page.store_phone}
            storeLegal={page.store_legal}
            linkFacebook={page.link_facebook}
            linkInstagram={page.link_instagram}
          />
        </Layout>
      </SeoWrapper>
    );
};
