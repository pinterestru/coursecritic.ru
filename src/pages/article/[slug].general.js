import {
  incrementalStaticRegenerationRevalidate,
  ecommerceStoreId,
  websiteDomain,
  defaultLocale
} from "../../constants";
import { MetaService } from "service/MetaService";
import { ProductCategoryService } from "service/ProductCategoryService";
import { ProductReviewService } from "service/ProductReviewService";
import { ArticleService } from "service/ArticleService";
import { SeoService } from "service/SeoService";
import { ArticleView } from "views/Article";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const apiPath = process.env.NEXT_PUBLIC_API_PATH

export default ArticleView;

export const getStaticPaths = async () => {
  const productList = await ArticleService.articleList({
    fields: ["*.ecommerce_product_id", "*.slug"],
    ecommerceStoreId: ecommerceStoreId,
  }, {apiPath, asValue: true});
  const paths = productList.map((item) => ({
    params: { slug: item.slug || item.ecommerce_product_id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params, locale = defaultLocale }) => {
  const [meta, menu, article] = await Promise.all([
    MetaService.metaGet({locale, ecommerceStoreId}, {apiPath, asValue: true}),
    ProductCategoryService.productCategoryList({ecommerceStoreId}, {apiPath, asValue: true}),
    ArticleService.articleGet(params.slug, {
      ecommerceStoreId,
      withRich: true,
    }, {apiPath, asValue: true}),
  ]);

  let productUsed = {};
  if (Object.keys(article).length) {
    const resp = await ArticleService.articleProcess(
      article.article_body || "",
      { ecommerceStoreId, locale, apiPath }
    );
    article.article_body_list = resp.article_body_list;
    productUsed = resp.product;
    delete article["article_body"];
  }

  const reviews = await ProductReviewService.productReviewList(
    {locale,
    ecommerceProductId: article.ecommerce_product_id},
    {apiPath, asValue: true}
  );
  const reviewsProcessed = ProductReviewService.productReviewProcess(
    reviews,
    productUsed
  );

  const metaProcessed = MetaService.metaPreprocess(meta, { product: article });
  const seo = SeoService.seoProductGet(article, metaProcessed, {
    type: "article", websiteDomain
  });

  return {
    revalidate: incrementalStaticRegenerationRevalidate,
    props: {
      article,
      reviews: reviewsProcessed,
      meta: metaProcessed,
      menu,
      seo,
      ...(await serverSideTranslations(locale.split("-")[0], ["common"])),
      params,
    },
  };
};
