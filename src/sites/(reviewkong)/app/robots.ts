import type { MetadataRoute } from 'next'

import { siteUrl } from '../data/site'

/**
 * `/click/*` is disallowed: it is a redirect endpoint, not a page, and there is
 * nothing there for a crawler to index. Everything else is open.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/click/', '/api/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  }
}
