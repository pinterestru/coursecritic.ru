import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const CategoryView = ({ meta, menu, category, products, seo }) => {
 
    return (
        <SeoWrapper seo={seo}>
            <Layout meta={meta} menu={menu}>
                <Page category={category} products={products}/>
            </Layout>
        </SeoWrapper>
    );
};
