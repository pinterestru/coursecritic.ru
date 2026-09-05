import type { MetadataRoute } from 'next'

import { categories } from '../data/categories'
import { siteUrl } from '../data/site'
import { stores, storesByCategory } from '../data/stores'

/**
 * Date the legal and about pages were last revised. Mirrors the `updatedAt`
 * prop each of those pages passes to <LegalPage> — keep the two in step.
 *
 * Hand-maintained rather than `new Date()` on purpose: a build-time
 * lastModified re-dates every URL on every deploy, which teaches Google that
 * the field carries no signal and gets it ignored for the whole sitemap.
 */
const LEGAL_UPDATED = '2026-08-25'

/** Newest `updated` date across a list of dated content, as an ISO date. */
function newest(dates: string[]): string {
  return dates.reduce((a, b) => (a > b ? a : b))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const storeDates = stores.map((s) => s.updated)
  const allUpdated = newest(storeDates)

  const staticPages: { path: string; updated: string; priority: number }[] = [
    { path: '', updated: allUpdated, priority: 1 },
    { path: '/stores', updated: allUpdated, priority: 0.9 },
    { path: '/categories', updated: allUpdated, priority: 0.7 },
    { path: '/about', updated: LEGAL_UPDATED, priority: 0.6 },
    { path: '/contacts', updated: LEGAL_UPDATED, priority: 0.4 },
    { path: '/disclosure', updated: LEGAL_UPDATED, priority: 0.5 },
    { path: '/terms', updated: LEGAL_UPDATED, priority: 0.3 },
    { path: '/privacy', updated: LEGAL_UPDATED, priority: 0.3 },
    { path: '/cookies', updated: LEGAL_UPDATED, priority: 0.3 },
  ]

  return [
    ...staticPages.map(({ path, updated, priority }) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(updated),
      changeFrequency: 'weekly' as const,
      priority,
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/categories/${category.id}`,
      lastModified: new Date(newest(storesByCategory(category.id).map((s) => s.updated))),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    // The store pages are the site. They carry the search value and the paid
    // traffic, and each one is dated from its own data.
    ...stores.map((store) => ({
      url: `${siteUrl}/stores/${store.slug}`,
      lastModified: new Date(store.updated),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    })),
  ]
}
