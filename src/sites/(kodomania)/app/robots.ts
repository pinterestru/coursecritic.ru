import type { MetadataRoute } from 'next'

import { activeSiteConfig } from '@/config/sites/active.generated'

const BASE = activeSiteConfig.seo.canonicalUrl.replace(/\/$/, '')

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Affiliate redirects shouldn't be indexed.
      disallow: '/click/',
    },
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
