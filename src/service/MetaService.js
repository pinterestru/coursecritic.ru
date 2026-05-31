import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion, overrideField } from "./utils";

export class MetaService {
    static async metaGet(filters, options) {
        filters.versionId = getVersion(filters.versionId, filters.locale)
        filters.type = "page_meta"
        filters.withRich = true
        const response = await EcommerceProductApi.ecommerceProductGet("meta-page", filters, options)
        if (options.asValue) return response.item
        return response
    };
    
    static metaPreprocess(page, options) {
        options = options || {}
        const {product} = options;
        if (product) {
            page = overrideField(page, product, "store_logo")
            page = overrideField(page, product, "store_favicon")
            page = overrideField(page, product, "favicon")
            page = overrideField(page, product, "store_name")
            page = overrideField(page, product, "store_legal")
            page = overrideField(page, product, "store_email")
            page = overrideField(page, product, "store_phone")
    
            page = overrideField(page, product, "banner_preview")
            page = overrideField(page, product, "banner_title")
            page = overrideField(page, product, "banner_description")
            page = overrideField(page, product, "banner_image")
            page = overrideField(page, product, "banner_link")
    
            page = overrideField(page, product, "footer_gallery")
            page = overrideField(page, product, "header_with_categories")
            page = overrideField(page, product, "header_with_page_links")
            page = overrideField(page, product, "footer_with_logo")
            page = overrideField(page, product, "footer_with_banner")
            page = overrideField(page, product, "footer_with_gallery")
            page = overrideField(page, product, "footer_with_categories")
            page = overrideField(page, product, "footer_with_page_links")
        }
        return page
    };
}