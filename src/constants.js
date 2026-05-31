const addHttps = (url) => {
    if (!url) return url
    if (url.startsWith("http")) return url
    return "https://" + url
}

const isHttp = (url) => url.startsWith("http:")

// REQUIRED
export const withGTM = process.env.NEXT_PUBLIC_WITH_GTM === "false" ? false : true

export const stunDomain = process.env.NEXT_PUBLIC_STUN_DOMAIN || ""

export const spaceId = "education"

export const ecommerceProductStoreId = process.env.NEXT_PUBLIC_ECOMMERCE_PRODUCT_STORE_ID
// REQUIRED
export const ecommerceStoreId = process.env.NEXT_PUBLIC_ECOMMERCE_STORE_ID //|| "1ada4bdd-c597-4dbf-9830-1e2bdf4a276d"

export const rootCategoryId = process.env.NEXT_PUBLIC_ROOT_CATEGORY_ID || ""

export const ecommerceRecipeStoreId = process.env.NEXT_PUBLIC_ECOMMERCE_RECIPE_STORE_ID

// REQUIRED
export const ecommerceBlackStoreId = process.env.NEXT_PUBLIC_ECOMMERCE_BLACK_STORE_ID

// REQUIRED
export const blackUrl = process.env.NEXT_PUBLIC_BLACK_URL || ""//"https://mysticnumbers.onelink.me/ugBl?pid=TT&c=sub1%25profitov%25sub2%25SUB2%25sub3%25SUB3%25sub4%25526%25sub5%25907%25sub6%251653056400%25sub7%25SUB7&is_retargeting=true&deep_link_value=app%3A%2F%2F%3Fsub1%3Dprofitov%26sub2%3DSUB2%26sub3%3DSUB3%26sub4%3D526%26sub5%3D907%26sub6%3D1653056400"

// REQUIRED
export const localeList = (process.env.NEXT_PUBLIC_LOCALE_LIST || "").split("").map(v => v.toLowerCase())
export const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE

export const countryCodeList = process.env.NEXT_PUBLIC_COUNTRY_CODE_LIST ? process.env.NEXT_PUBLIC_COUNTRY_CODE_LIST.split(",") : ["kz"]
export const defaultCountryCode = (process.env.NEXT_PUBLIC_DEFAULT_COUNTRY_CODE || "kz").toLowerCase()

export const versionType = process.env.NEXT_PUBLIC_VERSION_TYPE || "country_code"

// REQUIRED
export const websiteDomain = addHttps(process.env.NEXT_PUBLIC_DOMAIN || process.env.NEXT_PUBLIC_NETLIFY_URL || process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || process.env.NEXT_PUBLIC_AUTH_URL)//"https://trimhouse.vercel.app";

export const ssrMode = typeof window === "undefined";

export const incrementalStaticRegenerationRevalidate = 3600

export const currencyMult = ((process.env.NEXT_PUBLIC_CURRENCY_MULT || process.env.CURRENCY_MULT) ? parseFloat(process.env.NEXT_PUBLIC_CURRENCY_MULT || process.env.CURRENCY_MULT) : 1)

export const faviconDefault = "/favicon.ico"

export const iframeLink = ""
export const preconnectDomain = ""

// ANALYTICS
export const yaMetrika = !isHttp(websiteDomain) ? (process.env.NEXT_PUBLIC_YANDEX_METRIKA || process.env.YANDEX_METRIKA || "") : ""

export const gAnalytics = !isHttp(websiteDomain) ? (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || process.env.NEXT_PUBLIC_GA || "") : ""

export const gadsPixel = !isHttp(websiteDomain) ? (process.env.NEXT_PUBLIC_GOOGLE_ADS_PIXEL || process.env.NEXT_PUBLIC_GADS_PIXEL || "") : ""

export const tiktokPixel = !isHttp(websiteDomain) ? (process.env.NEXT_PUBLIC_TIKTOK_PIXEL || "") : ""

export const gtm = !isHttp(websiteDomain) ? (process.env.NEXT_PUBLIC_GTM || "") : ""