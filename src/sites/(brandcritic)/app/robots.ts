import type { MetadataRoute } from 'next'

import { siteUrl } from '../data/site'

/**
 * `/click/*` закрыт: это редирект, а не страница, индексировать там нечего.
 * Остальное открыто.
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
