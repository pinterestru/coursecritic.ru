import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../../constants";

import { MetaService } from "service/MetaService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { ProductService } from "service/ProductService";
import { SeoService } from "service/SeoService";
import { CategoryView } from "views/Category";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default CategoryView;

export const getStaticPaths = async () => {
  const categoryList = await ProductCategoryService.productCategoryList(
    {ecommerceStoreId},
    {apiPath, asValue: true}
  );
  const paths = categoryList.map((item) => ({
    params: { slug: item.slug || item.ecommerce_product_category_id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params, locale = defaultLocale }) => {
  const [meta, menu, category] = await Promise.all([
    MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true}),
    ProductCategoryService.productCategoryList({ecommerceStoreId}, {apiPath, asValue: true}),
    ProductCategoryService.productCategoryGet(
      params.slug,
      {ecommerceStoreId},
      {apiPath, asValue: true}
    ),
  ]);

  const products = await ProductService.productList({
    locale,
    category: category.ecommerce_product_category_id,
    ecommerceStoreId: ecommerceStoreId,
  }, {apiPath, asValue: true});

  const seo = SeoService.seoCategoryGet(category, meta, {websiteDomain});

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      category,
      products,
      meta,
      menu,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common"])),
      params,
    },
  };
};
