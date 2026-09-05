/**
 * Provider registry for the games and digital-keys vertical.
 *
 * The honest version of this category: first-party stores cost more and cannot
 * revoke what you bought; key marketplaces are cheaper because the key came
 * from somewhere else, and the buyer protection that covers that is usually a
 * paid add-on. Every marketplace entry states the risk rather than burying it,
 * which is also why they score below the first-party store.
 *
 * SOURCES — buyer-protection terms, refund policies and region-lock rules come
 * from each platform's own terms pages, plus public review aggregates.
 * Individual figures are cited in the matching data/brands/<slug>.ts file.
 *
 * ⚠️ Marketplace protection schemes are renamed and repriced often. Re-verify
 * before a campaign runs. See ../../README.md.
 */
import type { Provider } from '../guides/types'

export const gamingProviders: Record<string, Provider> = {
  playstation: {
    id: 'playstation',
    name: 'PlayStation Store',
    badge: 'PS',
    color: '#0070D1',
    vertical: 'gaming',
    domain: 'store.playstation.com',
    siteLabel: 'store.playstation.com',
    score: 4.4,
    tagline: 'First-party PS4/PS5 storefront: every key genuine, no marketplace risk',
    founded: 'launched 2006',
    reach: '69 countries/territories, 3 PS Plus tiers',
    priceNote: 'games priced per market; PS Plus from about $11/mo',
    format: 'First-party digital storefront for PS4/PS5 games, add-ons and PS Plus memberships',
    highlights: [
      'Every purchase is a genuine first-party key, zero chargeback or revoked-key risk',
      'PlayStation Plus Extra and Premium add hundreds of PS4/PS5 games to download free',
      'Several deep seasonal sales a year, plus rotating weekly deals',
      'One account library that follows you across every PlayStation you own',
    ],
    pros: [
      'No seller to vet, no risk of a key revoked later',
      'PS Plus tiers add real value beyond just online multiplayer',
      'Deep, predictable seasonal sales throughout the year',
    ],
    cons: [
      'No refund once a download or stream has started',
      'Account region is fixed for life and multiplayer needs a paid PS Plus tier',
    ],
    trust: [
      '14-day refund window before download starts',
      'Region-locked accounts prevent cross-border price shopping',
      'First-party Sony storefront, no third-party seller risk',
    ],
    ratings: [{ source: 'Sitejabber', value: 2.0 }],
    tracked: true,
    topCta: 'Browse PlayStation Store →',
    brandSlug: 'playstation',
  },
  kinguin: {
    id: 'kinguin',
    name: 'Kinguin',
    badge: 'KG',
    color: '#FDB913',
    vertical: 'gaming',
    domain: 'kinguin.net',
    siteLabel: 'kinguin.net',
    score: 3.7,
    tagline: 'Cheap third-party game keys — real risk without Buyer Protection',
    founded: 'launched 2013',
    reach: '150,000+ products, 20M+ registered accounts',
    priceNote: 'seller-set, often cheapest; protection is a paid add-on',
    format: 'Third-party marketplace for game keys, software licences and gift cards',
    highlights: [
      'Routinely the cheapest listing anywhere for mainstream and older PC titles',
      'Buyer Protection is a real paid add-on, not bundled in by default',
      'Catalogue tops 150,000 products across 20 million-plus registered accounts',
      'Instant delivery for the large majority of orders, no shipping wait',
    ],
    pros: [
      'Usually the lowest headline price for a given title',
      'Buyer Protection gives a genuine refund path when you pay for it',
      'Catalogue covers older and niche titles bigger stores have delisted',
    ],
    cons: [
      'Skip Buyer Protection and a revoked key is a dispute with a stranger, not a refund',
      'Some listings are region-locked, and publishers have criticised the resale model directly',
    ],
    trust: [
      'Optional Buyer Protection, paid per order, not a subscription',
      'Long-running marketplace with millions of completed orders',
      'Refunded fraudulently sourced keys in publicly documented cases (e.g. Ubisoft, 2015)',
    ],
    ratings: [{ source: 'Sitejabber', value: 2.8 }],
    tracked: true,
    topCta: 'Compare prices on Kinguin →',
    brandSlug: 'kinguin',
  },
  g2a: {
    id: 'g2a',
    name: 'G2A',
    badge: 'G2',
    color: '#F15A24',
    vertical: 'gaming',
    domain: 'g2a.com',
    siteLabel: 'g2a.com',
    score: 3.4,
    tagline: 'Cheap third-party keys, free Money Back Guarantee, real chargeback history',
    founded: 'founded 2010, as Go2Arena',
    reach: '30M+ users across 180 countries',
    priceNote: 'seller-set, often the lowest; protection now free',
    format:
      'Third-party marketplace for game keys and digital goods, resold by independent sellers',
    highlights: [
      'Money Back Guarantee is now free and automatic, replacing the old paid G2A Shield',
      'One of the largest catalogues in the category: 30M+ users across 180 countries',
      'G2A Direct shares resale revenue with developers who opt in',
      'Consistently competitive pricing on well-known, mainstream titles',
    ],
    pros: [
      'Free Money Back Guarantee replaced the old paid protection add-on',
      'Huge catalogue and heavy seller competition keep prices low',
      'G2A Direct gives opted-in developers a real cut of resales',
    ],
    cons: [
      'A decade of documented chargeback-fraud disputes with independent studios',
      'Money Back Guarantee excludes developer-direct and official-reseller purchases',
    ],
    trust: [
      'Free, automatic Money Back Guarantee on eligible items',
      'G2A Direct developer revenue-share programme',
      'Pledge to repay studios ten times any proven chargeback loss',
    ],
    ratings: [{ source: 'Sitejabber', value: 1.3 }],
    tracked: true,
    topCta: 'Compare prices on G2A →',
    brandSlug: 'g2a',
  },
  gamivo: {
    id: 'gamivo',
    name: 'Gamivo',
    badge: 'GM',
    color: '#FF7A00',
    vertical: 'gaming',
    domain: 'gamivo.com',
    siteLabel: 'gamivo.com',
    score: 3.6,
    tagline: 'Cheap third-party keys — mind the pre-ticked SMART subscription',
    founded: 'trading since around 2017',
    reach: 'Steam, Epic, Xbox and PlayStation keys and gift cards',
    priceNote: 'seller-set; SMART is pre-ticked at checkout by default',
    format:
      'Third-party marketplace for game keys and gift cards, with an optional SMART membership',
    highlights: [
      'Aggressive daily and monthly discount codes stack on already-cheap listings',
      'GAMIVO SMART is pre-ticked at checkout — untick it to avoid a recurring charge',
      'Wide catalogue across Steam, Epic, Xbox and PlayStation plus gift cards',
      'A genuine paid buyer-protection option exists via SMART or a standalone add-on',
    ],
    pros: [
      'Frequent, genuinely deep discount codes on top of cheap base prices',
      'Real buyer protection available, via SMART or a standalone add-on',
      'Wide catalogue spanning most major platforms in one place',
    ],
    cons: [
      'SMART is pre-selected at checkout and renews automatically unless unticked',
      'Reviewers repeatedly report friction cancelling the SMART subscription',
    ],
    trust: [
      'Optional buyer protection for invalid or revoked keys',
      'Instant delivery for most orders',
      'Long-running marketplace with an established seller base',
    ],
    ratings: [{ source: 'Sitejabber', value: 2.0 }],
    tracked: true,
    topCta: 'Compare prices on Gamivo →',
    brandSlug: 'gamivo',
  },
  gog: {
    id: 'gog',
    name: 'GOG.com',
    badge: 'GO',
    color: '#86328A',
    vertical: 'gaming',
    domain: 'gog.com',
    siteLabel: 'gog.com',
    score: 4.2,
    tagline: 'DRM-free PC games: keep the installer, skip the client, 30 days to refund',
    founded: 'launched 2008, independent since 2025',
    reach: 'a curated, DRM-free catalogue, smaller than Steam’s',
    priceNote: 'standard digital pricing, no subscription',
    format: 'Digital store selling DRM-free PC games as permanent, offline installers',
    highlights: [
      'Every game is DRM-free — a real installer you keep, not a licence tied to a server',
      'GOG Galaxy client is entirely optional, unlike most storefront clients',
      'Preservation Program actively maintains 100+ classic titles for modern systems',
      '30-day refund window that survives having already played the game',
    ],
    pros: [
      'Genuine DRM-free ownership of the installer',
      'A 30-day refund window even after playing',
      'Real preservation commitment for older titles',
    ],
    cons: [
      'Catalogue is far smaller and more curated than Steam’s',
      'Weak social, mod and multiplayer infrastructure by comparison',
    ],
    trust: [
      '30-day refund policy, reviewed case by case',
      'Independent company since December 2025',
      'No DRM, no licence-server dependency',
    ],
    ratings: [{ source: 'Trustpilot', value: 4.0 }],
    tracked: true,
    topCta: 'Browse GOG’s DRM-free catalogue →',
    brandSlug: 'gog',
  },
}
