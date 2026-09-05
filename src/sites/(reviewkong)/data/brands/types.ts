/**
 * Shape of a brand page (route: /brands/<slug>).
 *
 * Brand pages are data, not bespoke JSX: every one of them answers the same
 * questions in the same order, so a single template renders them all and adding
 * a brand means adding one file plus a line in ./index.ts. Ranked guides under
 * /articles are the opposite — hand-written, because the argument in each one
 * is different.
 *
 * Note what is NOT in here: individual user testimonials. We do not publish
 * invented reviews. `reputation` carries aggregate scores from named public
 * sources instead, and each entry says where the number comes from.
 */
import type { FaqItem } from '../guides/types'

export interface BrandFact {
  label: string
  value: string
}

export interface BrandPoint {
  title: string
  body: string
}

export interface BrandPlan {
  name: string
  /** Headline price as advertised, including the term it requires. */
  price: string
  /** What it costs once the introductory term ends, when that differs. */
  renews?: string
  detail: string
  /** Marks the plan we would actually buy. */
  pick?: boolean
}

export interface BrandReputation {
  source: string
  value: number
  /** Rough sample size or context, e.g. '40k+ reviews'. */
  note: string
}

export interface BrandPage {
  slug: string
  /**
   * schema.org type for the thing being reviewed, used in the Review JSON-LD.
   *
   * Defaults to 'Product'. Set it accurately: typing a business ENTITY as a
   * Product so it can carry a star rating is exactly the shape that reads as
   * routing around Google's restriction on rated Organization markup, and
   * structured data must be "a true representation of the page content".
   * 'Airline' (an Organization subtype) therefore renders WITHOUT a rating.
   */
  schemaType?: 'Product' | 'SoftwareApplication' | 'Airline'
  /** Key into data/providers.ts — supplies name, badge, score, links. */
  providerId: string
  metaTitle: string
  metaDescription: string
  /** Lead paragraph under the H1. */
  intro: string
  /** Body prose for the "About" section, one string per paragraph. */
  about: string[]
  facts: BrandFact[]
  plans: {
    title: string
    /** Pricing caveat shown under the table — usually the renewal warning. */
    note: string
    items: BrandPlan[]
  }
  pros: BrandPoint[]
  cons: BrandPoint[]
  reputation: BrandReputation[]
  /** Who should buy it / who should not. */
  bestFor: string[]
  notFor: string[]
  faq: FaqItem[]
  /** ISO date of the last editorial review of this page. */
  updated: string
  /** Deep-link for the page's CTAs (defaults to the provider's domain). */
  deepLink?: string
}
