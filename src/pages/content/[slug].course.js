import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../../constants";
import { MetaService } from "service/MetaService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { CourseStructureService } from "service/CourseStructureService";
import { CourseService } from "service/CourseService";
import { SeoService } from "service/SeoService";
import { CourseContentView } from "views/CourseContent";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default CourseContentView;

export const getStaticPaths = async () => {
  const productList = await CourseService.courseList({
    fields: ["*.ecommerce_product_id", "*.slug"],
    ecommerceStoreId: ecommerceStoreId,
  }, {apiPath, asValue: true});
  const paths = productList.map((item) => ({
    params: { slug: item.slug || item.ecommerce_product_id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params, locale = defaultLocale }) => {
  const [meta, menu, product] = await Promise.all([
    MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true}),
    ProductCategoryService.productCategoryList({ecommerceStoreId}, {apiPath, asValue: true}),
    CourseService.courseGet(params.slug, {
      ecommerceStoreId,
      withRich: true,
    }, {apiPath, asValue: true}),
  ]);

  const courseId = product.course_link
  const courseStructureList = await CourseStructureService.courseStructureList(courseId, {apiPath, asValue: true})


  const metaProcessed = MetaService.metaPreprocess(meta, { product: product });
  const seo = SeoService.seoProductGet(product, metaProcessed, {
    type: "product", websiteDomain
  });

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      product,
      courseId,
      courseStructureList,
      slug: product.slug || course_ecommerce_product_id,
      meta: metaProcessed,
      menu,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common", "course"])),
      params,
    },
  };
};
