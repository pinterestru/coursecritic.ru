import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../constants";
import { MetaService } from "service/MetaService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { SeoService } from "service/SeoService";
import { CourseService } from "service/CourseService";
import { HomeCourseView } from "views/HomeCourse";
import { getMediaPath } from "utils";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default HomeCourseView;

export const getStaticProps = async ({ locale = defaultLocale }) => {

  const [meta, menu, products] = await Promise.all([
    MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true}),
    ProductCategoryService.productCategoryList({ecommerceStoreId}, {apiPath, asValue: true}),
    CourseService.courseList({locale, ecommerceStoreId}, {apiPath, asValue: true}),
  ]);

  const categoryList = menu;

  const productDict = {};
  products.forEach((product) => {
    const categoryIdDict = product.category_id_dict || {};
    Object.keys(categoryIdDict).forEach((categoryId) => {
      const l = productDict[categoryId] || [];
      l.push(product);
      productDict[categoryId] = l;
    });
  });

  const seo = {
    ...SeoService.seoGet(meta, {websiteDomain}),
    links: meta.banner_image
      ? [
          {
            rel: "preload",
            as: "image",
            href: getMediaPath(meta.banner_image),
          },
        ]
      : [],
  };

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      meta,
      menu,
      categoryList,
      productDict,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common"])),
    },
  };
};
