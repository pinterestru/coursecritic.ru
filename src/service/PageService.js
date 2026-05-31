import { EcommerceProductApi } from "api/EcommerceProductApi";
import { getVersion, replaceVariables } from "./utils";

export class PageService {
    static async pageGet(slug, filters, options) {
        filters.versionId = getVersion(filters.versionId, filters.locale)
        filters.type = "page"
        filters.withRich = true
        const response = await EcommerceProductApi.ecommerceProductGet(slug, filters, options)
        const page = response.item || {};
        page.title = replaceVariables(page.title, page) || ""
        page.description = replaceVariables(page.description, page) || ""
        page.description_rich = replaceVariables(page.description_rich, page) || ""
        response.item = page
        if (options.asValue) return response.item
        return response
    };
}