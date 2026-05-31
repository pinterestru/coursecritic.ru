import { generateSitemap } from "utils/sitemap"
import { websiteDomain, ecommerceStoreId } from "../../../constants"
import { ArticleService } from "service/ArticleService"
import { ProductCategoryService } from "service/ProductCategoryService"
const apiPath = process.env.NEXT_PUBLIC_API_PATH


export default async (req, res) => {
    const links = [
        { url: "/" },
        { url: "/about" },
        { url: "/login" },
        { url: "/privacy-policy" },
        { url: "/terms-of-use" },
        { url: "/cookies-policy" }
    ]

    // Category
    const categoryList = await ProductCategoryService.productCategoryList(
        {ecommerceStoreId},
        {apiPath, asValue: true}
    );
    categoryList.forEach(category => {
        links.push({url: "/category/" + (category.slug || category.ecommerce_product_category_id)})
    })

    // Article
    const articleList = await ArticleService.articleList(
        {
          fields: ["*.ecommerce_product_id", "*.slug", "*.updated_at"],
          ecommerceStoreId: ecommerceStoreId,
        },
        { apiPath, asValue: true }
    );
    articleList.forEach(article => {
        links.push({url: "/article/" + (article.slug || article.ecommerce_product_id)})
    })

    generateSitemap(res, links, websiteDomain)
  }