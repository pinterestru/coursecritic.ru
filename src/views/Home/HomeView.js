import React from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";

export const HomeView = ({ meta, menu, categoryList, productDict, seo }) => {
  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page
          menu={menu}
          bannerPreview={meta.banner_preview}
          bannerTitle={meta.banner_title}
          bannerDescription={meta.banner_description}
          bannerLink={meta.banner_link}
          bannerImage={meta.banner_image}
          gallery={meta.home_gallery}
          withGallery={meta.home_with_gallery === "true"}
          withProduct={meta.home_with_product === "true"}
          product={meta.product}
          categoryList={categoryList}
          productDict={productDict}
        />
      </Layout>
    </SeoWrapper>
  );
};
