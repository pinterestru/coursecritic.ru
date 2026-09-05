import type { MetadataRoute } from 'next'

import { articles } from '../data/articles'
import { brandPages } from '../data/brands'
import { siteUrl } from '../data/site'

/**
 * Sitemap for the browsable site plus the ranked guides.
 *
 * The /articles *index* is intentionally absent: it is noindex, because the
 * guides themselves carry the search value and the hub is not part of the
 * browsable site (see data/articles.ts). The guides are included — they are
 * opened from ads, but there is no reason to hide them from search as well.
 */

/**
 * Date the legal and about pages were last revised. Mirrors the `updatedAt`
 * prop each of those pages passes to <LegalPage> — keep the two in step.
 *
 * These are hand-maintained rather than `new Date()` on purpose: a build-time
 * lastModified re-dates every URL on every deploy, which teaches Google that
 * the field carries no signal and gets it ignored for the whole sitemap.
 */
const LEGAL_UPDATED = '2026-08-25'

/** Newest `updated` date across a list of dated content, as an ISO date. */
function newest(dates: string[]): string {
  return dates.reduce((a, b) => (a > b ? a : b))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const brandDates = brandPages.map((p) => p.updated)
  const articleDates = articles.map((a) => a.updated)

  // The home page lists every brand, and /brands lists every reviewed brand,
  // so each is "modified" whenever its newest constituent is.
  const homeUpdated = newest([...brandDates, ...articleDates])
  const brandsUpdated = newest(brandDates)

  const staticPages: { path: string; updated: string; priority: number }[] = [
    // Next normalises this <loc> to `https://reviewkong.com/` while the home
    // canonical renders as the bare origin. The two are the same URL per
    // RFC 3986 (an empty path is equivalent to "/"), so Google treats them as
    // one — there is nothing to reconcile here.
    { path: '', updated: homeUpdated, priority: 1 },
    { path: '/brands', updated: brandsUpdated, priority: 0.8 },
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
      changeFrequency: 'monthly' as const,
      priority,
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
