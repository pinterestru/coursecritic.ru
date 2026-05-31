import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../constants";
import { MetaService } from "service/MetaService";
import { SeoService } from "service/SeoService";
import { AccountView } from "views/Account";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default AccountView;

export const getStaticProps = async ({ locale = defaultLocale }) => {
  const meta = await MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true})

  const seo = SeoService.seoGet(meta, {websiteDomain});

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      meta,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common"])),
    },
  };
};
