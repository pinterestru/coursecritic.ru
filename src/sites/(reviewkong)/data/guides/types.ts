/**
 * Vertical-agnostic types for the ranked buying guides and brand pages.
 *
 * A guide is always the same shape: a ranked list of providers, an author
 * byline, a facts strip, FAQ and tracked CTAs. Only the provider registry
 * changes between verticals (data/vpn/providers.ts, data/travel/providers.ts,
 * …), and data/providers.ts merges them into one id → Provider lookup, so the
 * shared components never need to know which vertical they are rendering.
 */
import type { VerticalId } from '../verticals'

export interface ProviderRating {
  /** Where the score comes from — always a public, third-party aggregator. */
  source: string
  value: number
}

/** One brand featured in guides and, optionally, on its own /brands page. */
export interface Provider {
  id: string
  name: string
  /** 2–3 character badge tile. */
  badge: string
  /** Hex tint for the badge. */
  color: string
  vertical: VerticalId
  /** Bare domain (+ optional path) used to build the outbound link. */
  domain: string
  /** Human-readable site label shown under CTAs. */
  siteLabel: string
  /** Our editorial composite score, 0–5 (one decimal). */
  score: number
  /** One-line positioning. */
  tagline: string
  /** Headline facts for the compact rating row. */
  founded: string
  /** Scale line: users, servers, countries — whatever the vertical measures by. */
  reach: string
  /** Default price note (individual guides can override). */
  priceNote: string
  /** Short format/plan description. */
  format: string
  /** Selling-point bullets. */
  highlights: string[]
  pros: string[]
  cons: string[]
  /** Guarantee / trust signals: refund window, audits, licences. */
  trust: string[]
  ratings: ProviderRating[]
  /**
   * When false the provider is NOT monetised: links go straight to its site
   * with rel="nofollow" instead of through the tracked /click redirect.
   * Defaults to true.
   */
  tracked?: boolean
  /** CTA wording for the #1 slot, e.g. 'Get NordVPN →'. */
  topCta?: string
  /** Slug of this brand's own page under /brands, when one exists. */
  brandSlug?: string
}

/** One provider's placement inside a specific guide's ranking. */
export interface RankEntry {
  providerId: string
  /** Full direct deep-link for THIS guide (overrides the provider default). */
  deepLink?: string
  /** Price note for this guide (overrides the provider default). */
  price?: string
  /** The author's guide-specific verdict paragraph. */
  verdict: string
  /** One line: who this option fits best. */
  bestFor: string
  /** Optional per-guide pros/cons (fall back to provider defaults if omitted). */
  pros?: string[]
  cons?: string[]
  /**
   * Per-guide overrides of the provider's plan-level facts. A brand's default
   * `format`/`highlights` describe one specific product, so a guide about a
   * different product of theirs must restate them.
   */
  format?: string
  highlights?: string[]
  /** Positioning line for this product (overrides the provider's tagline). */
  tagline?: string
  /** A named spec worth calling out on its own, e.g. an audit or a policy limit. */
  spotlight?: { label: string; body: string }
}

/** One cell of the facts strip (price range, coverage, refund window…). */
export interface FactItem {
  label: string
  value: string
}

export interface FaqItem {
  q: string
  a: string
}

/** Lightweight metadata for the index grid and cross-article navigation. */
export interface ArticleMeta {
  slug: string
  vertical: VerticalId
  /** e.g. 'for streaming' — completes "Best VPNs {topic}". */
  topic: string
  /** Short label used on cards, e.g. 'Streaming'. */
  shortTopic: string
  /** H1 / card title. */
  title: string
  /** <title> tag. */
  metaTitle: string
  metaDescription: string
  /** Primary search intent / keyword. */
  intent: string
  /** Index-card teaser. */
  blurb: string
  /** ISO date of the last editorial review. */
  updated: string
  readingTime: string
}

/** The recurring expert bylined across a vertical's guides. */
export interface Author {
  name: string
  role: string
  bio: string
  initials: string
  credentials: string[]
}

/**
 * Build the tracked affiliate href for a deep-link.
 *   affiliateHref('nordvpn.com/pricing') → '/click/nordvpn.com/pricing'
 * Accepts a full URL or a bare domain+path; strips protocol and www. The
 * /click route (src/sites/_shared/app/click) records the click and forwards to
 * the affiliate network.
 */
export function affiliateHref(domainOrUrl: string): string {
  const clean = domainOrUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')
  return `/click/${clean}`
}

/** Plain external href for brands we don't monetise. */
export function directHref(domainOrUrl: string): string {
  if (/^https?:\/\//.test(domainOrUrl)) return domainOrUrl
  return `https://${domainOrUrl}`
}
