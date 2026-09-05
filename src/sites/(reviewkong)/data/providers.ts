/**
 * Every brand on the site, merged into one `id → Provider` lookup.
 *
 * This is what makes the shared components vertical-agnostic: RankCard,
 * RatingSummary and CtaBanner resolve a provider by id from here, so a guide
 * can even mix verticals (a travel guide recommending a VPN, for instance)
 * without any component knowing about it. Ids must therefore be unique across
 * all vertical registries.
 */
import type { Author, Provider } from './guides/types'
import type { VerticalId } from './verticals'
import { beautyProviders } from './beauty/providers'
import { bookingProviders } from './booking/providers'
import { electronicsProviders } from './electronics/providers'
import { fashionProviders } from './fashion/providers'
import { gamingProviders } from './gaming/providers'
import { hostingAuthor, hostingProviders } from './hosting/providers'
import { learningProviders } from './learning/providers'
import { lifestyleProviders } from './lifestyle/providers'
import { marketplaceProviders } from './marketplace/providers'
import { securityAuthor, securityProviders } from './security/providers'
import { servicesProviders } from './services/providers'
import { SITE } from './site'
import { travelAuthor, travelProviders } from './travel/providers'
import { vpnAuthor, vpnProviders } from './vpn/providers'

export const providers: Record<string, Provider> = {
  ...vpnProviders,
  ...securityProviders,
  ...travelProviders,
  ...hostingProviders,
  ...bookingProviders,
  ...marketplaceProviders,
  ...fashionProviders,
  ...beautyProviders,
  ...electronicsProviders,
  ...lifestyleProviders,
  ...learningProviders,
  ...gamingProviders,
  ...servicesProviders,
}

/**
 * The byline on verticals that carry brand reviews but no ranked guide yet.
 *
 * Guides are signed by a named editor because a ranking is an argument someone
 * has to stand behind. The commerce verticals below are review-only for now, so
 * they carry the desk byline rather than a person invented to fill the field.
 */
const editorialDesk: Author = {
  name: `${SITE.name} reviews desk`,
  role: 'Commerce reviews',
  bio: 'The desk covers the retail, booking and services brands we review one at a time. Every page is written from published material — policy pages, fee schedules, terms of service and public review aggregates — and says so. We do not claim to have bought from every store on the site.',
  initials: 'RK',
  credentials: [
    'Reads the returns policy before the product page',
    'Prices at the total, not the headline',
    'Names the market a storefront actually serves',
  ],
}

/** The bylined editor for each vertical. */
export const authors: Record<VerticalId, Author> = {
  vpn: vpnAuthor,
  security: securityAuthor,
  travel: travelAuthor,
  hosting: hostingAuthor,
  booking: editorialDesk,
  marketplace: editorialDesk,
  fashion: editorialDesk,
  beauty: editorialDesk,
  electronics: editorialDesk,
  lifestyle: editorialDesk,
  learning: editorialDesk,
  gaming: editorialDesk,
  services: editorialDesk,
}

export function getProvider(id: string): Provider | undefined {
  return providers[id]
}

/** All brands in a vertical, best editorial score first. */
export function providersByVertical(vertical: VerticalId): Provider[] {
  return Object.values(providers)
    .filter((p) => p.vertical === vertical)
    .sort((a, b) => b.score - a.score)
}

/** Brands that have their own /brands page, best score first. */
export function providersWithBrandPage(): Provider[] {
  return Object.values(providers)
    .filter((p) => !!p.brandSlug)
    .sort((a, b) => b.score - a.score)
}
