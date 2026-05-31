import React from "react";
import { AccountLayout } from "layouts/AccountLayout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const AccountView = ({ page, meta, menu, seo }) => {
 
    return (
      <SeoWrapper seo={seo}>
        <AccountLayout meta={meta}>
          <Page/>
        </AccountLayout>
      </SeoWrapper>
    );
};
