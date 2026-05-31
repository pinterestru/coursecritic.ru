import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../constants";
import { MyCoursesView } from "views/MyCourses";
import { MetaService } from "service/MetaService";
import { SeoService } from "service/SeoService";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default MyCoursesView;

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
      ...(await serverSideTranslations(locale.split("-")[0], ["common", "course"])),
    },
  };
};
