import type { SiteConfig } from '@/config/sites/types'

import { brandPages } from './data/brands'
import { providers } from './data/providers'
import { SITE, siteUrl } from './data/site'

/**
 * Every host the site is allowed to send a visitor to through /click.
 *
 * Derived from the data rather than hand-listed, so adding a brand cannot leave
 * its link blocked and removing one cannot leave a stale host permitted. Covers
 * both provider `domain` values and brand-page `deepLink` hosts; article-level
 * deep links all reuse provider domains.
 */
const offerHosts = Array.from(
  new Set(
    [
      ...Object.values(providers).map((p) => p.domain),
      ...brandPages.map((b) => b.deepLink).filter((d): d is string => !!d),
    ].map((value) =>
      value
        .replace(/^https?:\/\//, '')
        .split('/')[0]
        .toLowerCase()
    )
  )
).sort()

/**
 * Site registration for the multi-site build (see scripts/prepare-site.mjs).
 * Activate with `SITE_CONFIG=reviewkong pnpm dev`.
 *
 * Brand name and domain both live in ./data/site.ts.
 */
export const siteConfig: SiteConfig = {
  id: 'reviewkong',
  brand: {
    name: SITE.name,
    description: `${SITE.name} — independent brand reviews and buying guides across travel, retail, tech, security and online services.`,
    logoUrl: '/logo.svg',
    faviconUrl: '/favicon.svg',
  },
  seo: {
    titleTemplate: `%s — ${SITE.name}`,
    defaultDescription:
      'Independent brand reviews and buying guides: travel and booking, marketplaces and retail, fashion, consumer tech, VPNs and security, courses, games and online services. We read the fees and the fine print so you can pick once and move on.',
    canonicalUrl: siteUrl,
  },
  locale: 'en',
  offerHosts,
}
