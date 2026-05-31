import { Feed } from 'feed';
import { MetaService } from "service/MetaService";
import { ArticleService } from 'service/ArticleService';
import { getMediaPath } from "utils";
import {
  ecommerceStoreId,
  defaultLocale,
  websiteDomain
} from "../../../../constants";
import { ProductContentService } from 'service/ProductContentService';
import { ProductCategoryService } from 'service/ProductCategoryService';

const apiPath = process.env.NEXT_PUBLIC_API_PATH;
const locale = defaultLocale;

function isInSplitIndex(date, split, splitIndex) {
    if (splitIndex <= 0 || splitIndex > split) {
      return "error"
    }
  
    const minutes = date.getMinutes();
    const groupSize = 60 / split;
    const groupIndex = Math.floor(minutes / groupSize);
  
    return groupIndex === splitIndex - 1;
}
  

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(400).json({ message: 'Invalid request method' });
    }

    const categoryId = req.query.board_id || req.query.category_id;
    const split = req.query.split || req.query.split_count || req.query.split_group_count
    const splitIndex = req.query.split_index


    const [meta, contents, category] = await Promise.all([
        MetaService.metaGet({ locale, ecommerceStoreId }, { apiPath, asValue: true }),
        ProductContentService.productContentList({ ecommerce_store_id: ecommerceStoreId, category_id: categoryId, past: "true", order_by: "-publish_at", status: "ready", limit: "25", type: "pinterest" }, { apiPath, asValue: true }),
        ProductCategoryService.productCategoryGet(categoryId, {ecommerceStoreId: ecommerceStoreId}, { apiPath, asValue: true })
    ]);


    const productIds = contents.map(v => v.ecommerce_product_id)
    const products = await ArticleService.articleList({ecommerceProductIdList: productIds}, { apiPath, asValue: true })
    const productDict = {}
    products.forEach(product => productDict[product.ecommerce_product_id] = product)
    const contentsProcessed = contents.map(content => {
        const product = productDict[content.ecommerce_product_id] || {}
        content.link = `${websiteDomain}/article/${product.slug || content.ecommerce_product_id}?utm_source=pinterest.com&utm_medium=organic${categoryId ? ("&utm_campaign=" + (category.slug || categoryId)) : ""}&utm_content=${(product.slug ? (product.slug + "__") : "") + content.ecommerce_product_content_id}`
        return content
    })

    const feed = new Feed({
        title: meta.seo_title || "RSS feed",
        description: meta.seo_description || "RSS feed",
        id: ecommerceStoreId,
        link: websiteDomain,
        language: meta.language || meta.locale || locale,
        image: getMediaPath(meta.banner_image || meta.store_logo || meta.store_image || ""),
        favicon: getMediaPath(meta.store_favicon || meta.favicon),
        copyright: 'All rights reserved ' + new Date().getFullYear().toString(),
        feedLinks: {
            rss2: websiteDomain + '/api/rss/pinterest',
        },
    });

    contentsProcessed.forEach((content) => {
        if (!content.images || !content.publish_at) return

        if (split && splitIndex) {
            try {
                const isInSplit = isInSplitIndex(new Date(content.publish_at), parseInt(split), parseInt(splitIndex))
                if (isInSplit === false) {
                    return
                }
            } catch (e) {}
        }

        feed.addItem({
            id: content.ecommerce_product_content_id,
            title: content.title,
            link: content.link,
            description: content.description,
            image: getMediaPath(content.images.split(",")[0]),
            date: new Date(content.publish_at),
        });
    });

    res.setHeader('Content-Type', 'text/xml');
    res.write(feed.rss2());
    res.end();
}
