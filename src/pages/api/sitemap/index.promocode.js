import { generateSitemap } from "utils/sitemap"
import { websiteDomain, ecommerceStoreId } from "../../../constants"
import { StoreService } from "service/StoreService"
import { LandingService } from "service/LandingService"
const apiPath = process.env.NEXT_PUBLIC_API_PATH


export default async (req, res) => {
    const links = [
        { url: "/" },
        { url: "/about" },
        { url: "/login" },
        { url: "/privacy-policy" },
        { url: "/terms-of-use" },
        { url: "/cookies-policy" },
        { url: "/email-unsubscribe" }
    ]

    // Store
    const storeList = await StoreService.storeList(
        {
          includeFields: ["*.slug"],
          ecommerceStoreId: ecommerceStoreId,
        },
        { apiPath, asProduct: true, asValue: true }
    );

    storeList.forEach(store => {
        if (store.slug) {
            links.push({url: "/store/" + store.slug, frequency: "daily"})
        }
    })

    // Landing
    const landingList = await LandingService.landingList(
        {
          includeFields: ["*.slug", "*.seo_title", "*.seo_description", "*.landing_render_type"],
          ecommerceStoreId: ecommerceStoreId,
        },
        { apiPath, asProduct: true, asValue: true }
    );
    landingList.forEach(store => {
        if (!store.slug || !store.seo_title || !store.seo_description) {
            return
        }
        if (store.landing_render_type === "dynamic") {
            return
        }
        links.push({url: "/l/" + store.slug})
    })

    generateSitemap(res, links, websiteDomain)
  }