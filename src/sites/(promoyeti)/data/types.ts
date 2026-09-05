/**
 * The whole data model of a promo-code site: a store, and the offers on it.
 *
 * There is deliberately no "review" type here. This is not a review site — it
 * is an index of ways to pay less at a named storefront, and every page answers
 * one query shape: "<brand> promo code". The store page is the product.
 *
 * ── The one editorial rule that shapes these types ──────────────────────────
 * `kind: 'code'` requires a real `code` string, and a code is only real if
 * somebody read it on the merchant's own page, in the affiliate network's feed,
 * or in the merchant's own e-mail. Inventing plausible-looking codes is what
 * makes coupon sites worthless, gets landing pages rejected by Google Ads, and
 * burns the traffic you paid for. The registry in ./stores/index.ts refuses to
 * build a `code` offer with no code; the seeded inventory is therefore all
 * `deal`, which is honest and still converts. See ../README.md.
 */
import type { CategoryId } from './categories'

export type OfferKind = 'code' | 'deal'

export interface Offer {
  /** Unique within its store; used as the React key and the anchor id. */
  id: string
  kind: OfferKind
  /**
   * The scannable label in the offer card's value column.
   *
   * A percentage where the merchant publishes one ('70% off'), and otherwise
   * the KIND of saving it is — 'Outlet', 'Member', 'Bank offer', 'App only'.
   * Never a number nobody published: the competition fills this column with
   * invented percentages, and a made-up "50% OFF" is the most consequential lie
   * a coupon site can tell, because it is the only thing most visitors read.
   *
   * Keep it to roughly 14 characters — the column is narrow by design.
   */
  value: string
  /** The code the visitor types at checkout. Required when kind is 'code'. */
  code?: string
  /** Headline, e.g. 'Up to 60% off the outlet'. */
  title: string
  /** One or two sentences: what it covers and how you actually take it. */
  detail: string
  /** The condition that most often kills this discount at the till. */
  terms?: string
  /** ISO date this was last confirmed against the merchant's own pages. */
  checked: string
  /** ISO date it lapses, where the merchant publishes one. */
  expires?: string
  /** Our pick of this store's offers. At most one per store. */
  best?: boolean
  /** Deep-link for this offer's CTA. Defaults to the store's domain. */
  deepLink?: string
}

/** A way to save that is not an offer — a status, a habit, a timing trick. */
export interface SavingTip {
  title: string
  body: string
}

/** A checkout-relevant fact: delivery threshold, returns window, currency. */
export interface StoreFact {
  label: string
  value: string
}

export interface FaqItem {
  q: string
  a: string
}

export interface Store {
  slug: string
  name: string
  /** Bare domain (+ optional path) the outbound link is built from. */
  domain: string
  /** Human-readable label under CTAs, e.g. 'shein.com'. */
  siteLabel: string
  /** 2–3 character badge tile. */
  badge: string
  /** Hex tint for the badge. Keep it dark or light enough to clear contrast. */
  color: string
  category: CategoryId
  /**
   * The market this storefront actually serves.
   *
   * The single most load-bearing field on the page. Many of these offers are
   * single-country sites (oneplus.in, bathandbodyworks.ae, mediaexpert.pl); a
   * visitor from the wrong country cannot use anything we list, and saying so
   * above the fold is cheaper than a bounced paid click.
   */
  markets: string
  /** One-line positioning for cards and the store hero. */
  blurb: string
  /** Body prose for the store page, one string per paragraph. */
  about: string[]
  offers: Offer[]
  savingTips: SavingTip[]
  facts: StoreFact[]
  faq: FaqItem[]
  /** ISO date of the last editorial pass over this store. */
  updated: string
}

/**
 * Build the tracked affiliate href for a deep-link.
 *   affiliateHref('shein.com/sale') → '/click/shein.com/sale'
 * Accepts a full URL or a bare domain+path; strips protocol and www. The
 * /click route (src/sites/_shared/app/click) records the click and forwards to
 * the affiliate network.
 */
export function affiliateHref(domainOrUrl: string): string {
  const clean = domainOrUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')
  return `/click/${clean}`
}

/** Plain external href for destinations we do not monetise. */
export function directHref(domainOrUrl: string): string {
  if (/^https?:\/\//.test(domainOrUrl)) return domainOrUrl
  return `https://${domainOrUrl}`
}

/** Offers in display order: our pick first, then codes, then plain deals. */
export function sortOffers(offers: Offer[]): Offer[] {
  return [...offers].sort((a, b) => {
    if (!!a.best !== !!b.best) return a.best ? -1 : 1
    if (a.kind !== b.kind) return a.kind === 'code' ? -1 : 1
    return 0
  })
}
