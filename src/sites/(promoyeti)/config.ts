import type { SiteConfig } from '@/config/sites/types'

import { stores } from './data/stores'
import { SITE, siteUrl } from './data/site'

/**
 * Every host the site is allowed to send a visitor to through /click.
 *
 * Derived from the store data rather than hand-listed, so adding a store cannot
 * leave its link blocked and removing one cannot leave a stale host permitted.
 * Covers each store's `domain` plus any per-offer `deepLink`.
 */
const offerHosts = Array.from(
  new Set(
    [
      ...stores.map((s) => s.domain),
      ...stores.flatMap((s) => s.offers.map((o) => o.deepLink).filter((d): d is string => !!d)),
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
 * Activate with `SITE_CONFIG=promoyeti pnpm dev`.
 *
 * Brand name and domain both live in ./data/site.ts; everything else derives
 * from them.
 */
export const siteConfig: SiteConfig = {
  id: 'promoyeti',
  brand: {
    name: SITE.name,
    description: `${SITE.name} — verified discount codes and deals for ${stores.length} online stores, with the terms that decide whether they work.`,
    logoUrl: '/logo.svg',
    faviconUrl: '/favicon.svg',
  },
  seo: {
    titleTemplate: `%s — ${SITE.name}`,
    defaultDescription:
      'Discount codes and deals for the shops people actually buy from — fashion, tech, travel, software and more. We publish the offer, the market it works in, and the condition that kills it at checkout. No invented codes.',
    canonicalUrl: siteUrl,
  },
  locale: 'en',
  offerHosts,
}
