import React, {useEffect} from "react";
import { Layout } from "layouts/Layout";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";
import { useRouter } from "next/router";

export const HomeCourseView = ({ meta, menu, categoryList, productDict, seo }) => {
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      router.push({pathname: "/my-courses", query: router.query}, undefined, { shallow: true })
    }
  }, [router.isReady])

  return null

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
