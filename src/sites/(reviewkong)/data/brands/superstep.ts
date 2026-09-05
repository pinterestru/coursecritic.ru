/**
 * Brand page data for Superstep (route: /brands/superstep).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://superstep.ru/about/company/ — founding in Istanbul in 2012,
 *     expansion to Moscow in 2013, 55-store count, brand portfolio, in-store
 *     experiential concept
 *   - https://superstep.ru/return-rules/ and https://superstep.ru/faq/ —
 *     return window (7 days from receipt / 30 days for a full order return),
 *     30-day warranty period, refund handling timeline
 *   - https://superstep.ru/loyalty/ — Sneaker Club bonus programme structure
 *     and instalment ("Doley", split into 4) checkout option
 *   - Public review aggregators (otzovik.com, tbank.ru/reviews, Yandex Maps)
 *     were checked but only return per-store ratings for individual
 *     locations, not one verifiable company-wide score, so no third-party
 *     aggregate rating is quoted below — see the cons section instead.
 *
 * ⚠️ This is a Russian-market retailer with no meaningful international
 * shipping — every figure below applies to buyers inside Russia and its
 * near-abroad footprint (it also runs a Kazakhstan storefront, superstep.kz).
 * Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const superstep: BrandPage = {
  slug: 'superstep',
  providerId: 'superstep',
  metaTitle: 'Superstep review 2026 — Russia’s sneaker retail chain',
  metaDescription:
    'An independent Superstep review: the Russian sneaker and streetwear chain’s store network, return rules and instalment checkout, and why it is not an option for shoppers outside Russia.',
  intro:
    'Superstep is a Russian multi-brand sneaker and streetwear retailer, with around 55 stores across the country and an online shop that ships domestically. It began as a Turkish retail concept in Istanbul in 2012 before its Moscow launch a year later built it into a chain. This is a Russia-market business through and through: no meaningful international shipping, prices in rubles, and a return process built around Russian consumer-protection rules — useful context regardless of where you are reading from.',
  about: [
    'Superstep opened its first store in Istanbul in 2012 under Turkish retail operator Intermode, then launched in Moscow in 2013, where the concept found its real scale. It grew into Russia’s first dedicated multi-brand sneaker retailer, carrying both classic premium releases and trend-led streetwear drops from more than 20 international sportswear and lifestyle brands, including Adidas, Puma, Reebok, Converse, Vans, Timberland and The North Face.',
    'The chain now runs roughly 55 stores across Russia, several built as experiential flagships with basketball courts, skate areas, gaming setups and artist customisation services rather than plain retail floors. It also runs workshops in basketball, dance and DJing at some locations — a positioning choice aimed squarely at a youth streetwear and sneaker-culture audience rather than general footwear shoppers.',
    'Superstep operates a Sneaker Club loyalty programme, where bonus points earned on purchases and social activity can cover a meaningful share of a later order, and it offers instalment checkout through a third-party split-payment service. It is a domestic Russian retailer: online orders ship inside Russia (and via a separate Kazakhstan storefront), and there is no international shipping option for buyers elsewhere.',
  ],
  facts: [
    { label: 'Founded', value: '2012, Istanbul → Moscow 2013' },
    { label: 'Store count', value: '~55, Russia' },
    { label: 'Ships to', value: 'Russia (domestic only)' },
    { label: 'Returns', value: '7–30 days, conditions apply' },
  ],
  plans: {
    title: 'How checkout and returns work',
    note: 'Returns are governed by Russian consumer-protection timelines rather than a single storewide policy, and delivery cost compensation applies only if the item arrived defective.',
    items: [
      {
        name: 'Standard checkout',
        price: 'Card or cash, in rubles',
        detail:
          'Free courier delivery is offered on the day of ordering in some cases; otherwise standard delivery charges apply. All pricing is in rubles for the Russian market.',
        pick: true,
      },
      {
        name: 'Instalment ("Doley")',
        price: 'Split into 4 payments',
        detail:
          'A third-party instalment service lets buyers split the order total into four payments — a checkout option, not a Superstep-run credit line.',
      },
      {
        name: 'Sneaker Club bonus points',
        price: 'Up to 30% of an order',
        detail:
          'Bonus points from past purchases and social activity can cover up to 30% of an order in concept stores and online, or up to 10% at outlet stores, credited 14 days after purchase and valid for a year.',
      },
      {
        name: 'Returns',
        price: 'Refund in ≤14 business days',
        detail:
          'A 7-day window applies to standard exchanges, or 30 days to return a full order; items must keep tags, packaging and unworn condition. Refunds land within 14 business days of the item reaching the warehouse.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely deep sneaker and streetwear catalogue',
      body: 'More than 20 international brands under one roof, spanning classic premium releases and trend drops, is a wider spread than most Russian footwear retailers carry.',
    },
    {
      title: 'Flagship stores that go beyond a retail floor',
      body: 'Basketball courts, skate spots and customisation services at flagship locations give Superstep a sneaker-culture identity that a plain multi-brand shoe shop does not have.',
    },
    {
      title: 'A loyalty programme with real spending power',
      body: 'Bonus points covering up to 30% of an order in concept stores is a meaningfully generous redemption rate compared with typical retail loyalty schemes.',
    },
    {
      title: 'Instalment checkout without Superstep extending its own credit',
      body: 'Splitting a purchase into four payments through a third-party service gives buyers flexibility on larger sneaker drops without a store-run finance application.',
    },
  ],
  cons: [
    {
      title: 'No international shipping — this is a Russia-only retailer',
      body: 'There is no route to buy from outside Russia and its Kazakhstan storefront. Anyone reading this from elsewhere should treat Superstep as informational, not a shop they can actually use.',
    },
    {
      title: 'No single trustworthy company-wide rating exists',
      body: 'Review platforms only publish per-store scores for individual Superstep locations, which vary widely, so there is no reliable aggregate to point to — treat any single number you see elsewhere with suspicion.',
    },
    {
      title: 'Online refunds run slower than promised',
      body: 'Reviews on Otzovik describe refunds taking around three weeks against a stated week-long target, alongside order cancellations and sizing mix-ups — issues rarer in the physical stores than online.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite across catalogue, store experience and a thin, mixed online review record',
    },
  ],
  bestFor: [
    'Sneaker and streetwear buyers physically shopping in Russia',
    'Shoppers wanting a wide multi-brand catalogue plus culture-focused flagship stores',
    'Buyers who value a loyalty programme with a high bonus-point redemption cap',
    'Anyone comfortable with instalment checkout for a bigger sneaker purchase',
  ],
  notFor: [
    'Any shopper outside Russia or Kazakhstan — there is no international shipping route',
    'Buyers who have been burned by online-order delivery or returns issues before and want a cleaner track record',
    'Price-sensitive shoppers who have not first checked the same item on a Russian marketplace listing',
  ],
  faq: [
    {
      q: 'Can I order from Superstep if I do not live in Russia?',
      a: 'No. Superstep operates as a Russian domestic retailer, plus a separate Kazakhstan storefront at superstep.kz. There is no general international shipping option, so this review is informational for readers elsewhere rather than a buying guide.',
    },
    {
      q: 'How does the return window work?',
      a: 'A 7-day window applies for a standard exchange, and up to 30 days to return a full order, both counted from receipt, provided the item keeps its tags, packaging and unworn condition. Refunds are processed within 14 business days of the item reaching Superstep’s warehouse.',
    },
    {
      q: 'Is the instalment option a Superstep credit line?',
      a: 'No. The "Doley" instalment checkout is a third-party split-payment service that lets a buyer divide the order total into four payments — Superstep is not itself extending credit.',
    },
    {
      q: 'How generous is the Sneaker Club loyalty programme?',
      a: 'Bonus points can cover up to 30% of an order in Superstep’s concept stores and online shop, or up to 10% at outlet locations, with a combined discount cap of 50%. Points post 14 days after the purchase and expire after a year.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'superstep.ru',
}
