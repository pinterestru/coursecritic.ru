import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../../constants";

import { MetaService } from "service/MetaService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { ProductService } from "service/ProductService";
import { ProductReviewService } from "service/ProductReviewService";
import { SeoService } from "service/SeoService";
import { ProductView } from "views/Product";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default ProductView;

export const getStaticPaths = async () => {
  const productList = await ProductService.productList(
    {
      fields: ["*.ecommerce_product_id", "*.slug"],
      ecommerceStoreId: ecommerceStoreId,
    },
    { apiPath, asValue: true }
  );
  const paths = productList.map((item) => ({
    params: { slug: item.slug || item.ecommerce_product_id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params, locale = defaultLocale }) => {
  const [meta, menu, product] = await Promise.all([
    MetaService.metaGet(
      { locale, ecommerceStoreId },
      { apiPath, asValue: true }
    ),
    ProductCategoryService.productCategoryList(
      { ecommerceStoreId },
      { apiPath, asValue: true }
    ),
    ProductService.productGet(
      params.slug,
      {
        locale,
        ecommerceStoreId,
        withRich: true,
      },
      { apiPath, asValue: true }
    ),
  ]);

  const reviews = await ProductReviewService.productReviewList(
    { locale, ecommerceProductId: product.ecommerce_product_id },
    { apiPath, asValue: true }
  );
  const reviewsProcessed = ProductReviewService.productReviewProcess(
    reviews,
    product
  );
  const metaProcessed = MetaService.metaPreprocess(meta, { product: product });
  const seo = SeoService.seoProductGet(product, metaProcessed, {
    type: "product",
    websiteDomain,
  });

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      product,
      reviews: reviewsProcessed,
      meta: metaProcessed,
      menu,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common"])),
      params,
    },
  };
};
