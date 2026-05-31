import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../constants";
import { ProductsView } from "views/Products";
import { MetaService } from "service/MetaService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { ProductService } from "service/ProductService";
import { SeoService } from "service/SeoService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default ProductsView;

export const getStaticProps = async ({ locale = defaultLocale }) => {
  const [meta, menu, products] = await Promise.all([
    MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true}),
    ProductCategoryService.productCategoryList({ecommerceStoreId}, {apiPath, asValue: true}),
    ProductService.productList({locale, ecommerceStoreId}, {apiPath, asValue: true}),
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

  const seo = SeoService.seoGet(meta, {websiteDomain});

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
