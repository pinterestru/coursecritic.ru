import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale,
  ecommerceRecipeStoreId
} from "../constants";
import { RecipesView } from "views/Recipes";
import { MetaService } from "service/MetaService";
import { SeoService } from "service/SeoService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default RecipesView;

export const getStaticProps = async ({ locale = defaultLocale }) => {
  const [meta] = await Promise.all([
    MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true})
  ]);
  
  const seo = SeoService.seoGet(meta, {websiteDomain});

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      meta,
      seo,
      ecommerceRecipeStoreId,
      ...(await serverSideTranslations(locale.split("-")[0], ["common", "course"])),
    },
  };
};
