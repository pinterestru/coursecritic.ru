import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../constants";
import { MetaService } from "service/MetaService";
import { PageService } from "service/PageService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { SeoService } from "service/SeoService";
import { SupportView } from "views/Support";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default SupportView;

export const getStaticProps = async ({ locale = defaultLocale }) => {
  const [page, meta, menu] = await Promise.all([
    PageService.pageGet(
      "support-page",
      { locale, ecommerceStoreId },
      { apiPath, asValue: true }
    ),
    MetaService.metaGet(
      { locale, ecommerceStoreId },
      { apiPath, asValue: true }
    ),
    ProductCategoryService.productCategoryList(
      { ecommerceStoreId },
      { apiPath, asValue: true }
    ),
  ]);

  const seo = SeoService.seoGet(meta, {key: "page_support", page, websiteDomain});

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      page,
      meta,
      menu,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common"])),
    },
  };
};
