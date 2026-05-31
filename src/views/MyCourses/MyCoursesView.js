import React, {useState, useEffect} from "react";
import { AccountLayout } from "layouts/AccountLayout";
import { CourseService } from "service/CourseService";
import { SeoWrapper } from "commons/SeoWrapper";
import { Page } from "./Page";
import { useRouter } from "next/router";
import { ecommerceStoreId } from "constants";

export const MyCoursesView = ({
  meta,
  seo,
}) => {
  const [loading, setLoading] = useState(true);
  const [courseList, setCourseList] = useState([]);
  const router = useRouter()

  useEffect(() => {
    CourseService.myCourseWithProgressList({locale: router.locale, ecommerceStoreId }, {asValue: true}).then(v => {
      setCourseList(v);
      setLoading(false);
    })
  }, [])

  return (
    <SeoWrapper seo={seo}>
      <AccountLayout meta={meta}>
        <Page loading={loading} courseList={courseList}/>
      </AccountLayout>
    </SeoWrapper>
  );
};
