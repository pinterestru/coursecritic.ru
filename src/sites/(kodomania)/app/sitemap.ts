import type { MetadataRoute } from 'next'

import { activeSiteConfig } from '@/config/sites/active.generated'

import { guides } from '../data/guides'

const BASE = activeSiteConfig.seo.canonicalUrl.replace(/\/$/, '')

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/idei', '/about', '/contacts', '/privacy', '/terms', '/cookies']

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((p) => ({
    url: `${BASE}${p || '/'}`,
    changeFrequency: p === '' || p === '/idei' ? 'weekly' : 'monthly',
    priority: p === '' ? 1 : p === '/idei' ? 0.9 : 0.6,
  }))

  const guideEntries: MetadataRoute.Sitemap = guides.map((g) => ({
    url: `${BASE}/idei/${g.slug}`,
    lastModified: new Date(g.updated),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [...staticEntries, ...guideEntries]
}
