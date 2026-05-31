import {
    incrementalStaticRegenerationRevalidate,
    ecommerceStoreId,
    websiteDomain,
    defaultLocale
  } from "../../constants";
  import { MetaService } from "service/MetaService";
  import { ProductCategoryService } from "service/ProductCategoryService";
  import { CourseService } from "service/CourseService";
  import { PageService } from "service/PageService";
  import { SeoService } from "service/SeoService";
  import { RegistrationView } from "views/Registration";
  import { serverSideTranslations } from "next-i18next/serverSideTranslations";
  import { StoreService } from "service/StoreService";
  const apiPath = process.env.NEXT_PUBLIC_API_PATH
  
  export default RegistrationView;
  
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
    const [page, meta, menu, product, store] = await Promise.all([
      PageService.pageGet("registration-page", {locale, ecommerceStoreId}, {apiPath, asValue: true}),
      MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true}),
      ProductCategoryService.productCategoryList({ecommerceStoreId}, {apiPath, asValue: true}),
      CourseService.courseGet(params.slug, {
        ecommerceStoreId,
        withRich: true,
      }, {apiPath, asValue: true}),
      StoreService.storeGet({ecommerceStoreId}, {apiPath, asValue: true}),
    ]);
  
    const courseId = product.course_link

    const workspaceId = store.workspace_id

    const metaProcessed = MetaService.metaPreprocess(meta, { product: product });
    const seo = SeoService.seoProductGet(product, metaProcessed, {
      type: "product", websiteDomain
    });

  
    return {
      revalidate: incrementalStaticRegenerationRevalidate,
      props: {
        product,
        slug: product.slug || product.ecommerce_product_id,
        courseId,
        workspaceId,
        meta: metaProcessed,
        menu,
        page: page || {},
        seo,
        ...(await serverSideTranslations(locale.split("-")[0], ["common", "course"])),
        params,
      },
    };
  };
  