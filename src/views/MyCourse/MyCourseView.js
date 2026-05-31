import React, {useEffect, useState} from "react";
import { SeoWrapper } from "commons/SeoWrapper";
import { AccountLayout } from "layouts/AccountLayout";
import { Page } from "./Page";
import { CourseStructureService } from "service/CourseStructureService";

export const MyCourseView = ({
  meta,
  menu,
  slug,
  product,
  courseId,
  courseStructureList,
  courseReportList,
  seo
}) => {
  
  return (
    <SeoWrapper seo={seo}>
      <AccountLayout meta={meta}>
        <Page
          product={product}
          slug={slug}
          courseStructureList={courseStructureList}
          courseReportList={courseReportList}
          courseId={courseId}
          noBreadcrumbs={(product || {}).course_no_breadcrumbs === "true"}
        />
      </AccountLayout>
    </SeoWrapper>
  );
};
