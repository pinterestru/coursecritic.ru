import React from "react";
import { SeoWrapper } from "commons/SeoWrapper";
import { Layout } from "layouts/Layout";
import { Page } from "./Page";
import { useRouter } from "next/router";

export const CourseContentView = ({
  meta,
  menu,
  product,
  courseId,
  slug,
  courseStructureList,
  seo
}) => {
  const router = useRouter()

  return (
    <SeoWrapper seo={seo}>
      <Page
          product={product}
          courseStructureList={courseStructureList}
          courseId={courseId}
          slug={slug}
          noAction={!!router.query.no_action}
          noBreadcrumbs={(product || {}).course_no_breadcrumbs === "true"}
        />
    </SeoWrapper>
  );
};
