import React from "react";
import { SeoWrapper } from "commons/SeoWrapper";
import { Layout } from "layouts/Layout";
import { Page } from "./Page";

export const CourseView = ({
  meta,
  menu,
  slug,
  product,
  courseId,
  courseStructureList,
  reviews,
  seo
}) => {

  return (
    <SeoWrapper seo={seo}>
      <Layout meta={meta} menu={menu}>
        <Page
          product={product}
          reviews={reviews}
          courseStructureList={courseStructureList}
          courseId={courseId}
          noBreadcrumbs={product.course_no_breadcrumbs === "true"}
        />
      </Layout>
    </SeoWrapper>
  );
};
