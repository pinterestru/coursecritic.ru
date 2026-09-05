import type { MetadataRoute } from 'next'

import { articles } from '../data/articles'
import { brandPages } from '../data/brands'
import { siteUrl } from '../data/site'

/**
 * Карта сайта: просматриваемая часть плюс разборы.
 *
 * *Индекса* /articles здесь намеренно нет: он noindex, потому что поисковую
 * ценность несут сами разборы, а хаб не входит в просматриваемый сайт (см.
 * data/articles.ts). Сами разборы включены — их открывают из объявлений, но
 * прятать их ещё и от поиска незачем.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '',
    '/brands',
    '/about',
    '/contacts',
    '/disclosure',
    '/terms',
    '/privacy',
    '/cookies',
  ]

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1 : 0.6,
    })),
    ...brandPages.map((page) => ({
      url: `${siteUrl}/brands/${page.slug}`,
      lastModified: new Date(page.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...articles.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      lastModified: new Date(article.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
