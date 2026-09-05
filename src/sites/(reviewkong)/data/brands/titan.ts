/**
 * Brand page data for Titan (route: /brands/titan).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.titan.co.in/ and https://www.titan.co.in/shop/watches — what
 *     titan.co.in actually sells (Edge, Nebula, Xylys, Raga, smartwatches)
 *   - https://www.titan.co.in/content/returns.html — no in-store returns for
 *     online orders, no exchanges, international orders excluded from returns
 *   - https://www.titan.co.in/content/delivery-information.html — international
 *     order turnaround (T+15 days)
 *   - https://www.titan.co.in/warranty-policy.html — 2-year movement / 1-year
 *     battery warranty on Titan Quartz watches; 1 year on Fastrack and Sonata
 *   - https://www.titancompany.in/our-heritage — founding as a 1984 Tata
 *     Industries/TIDCO joint venture, Titan Company's wider brand portfolio
 *   - https://apps.apple.com/us/app/titan-world/id1351637761 — App Store rating
 *     (opened directly: 4.4/5, 40 ratings — a genuine but very small sample)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. No credible,
 * high-volume Trustpilot listing for titan.co.in could be verified, so no
 * Trustpilot figure appears below. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const titan: BrandPage = {
  slug: 'titan',
  providerId: 'titan',
  metaTitle: 'Titan review 2026 — Tata’s watch brand, warranty & returns',
  metaDescription:
    'An independent Titan review: what the Tata-owned watchmaker actually covers under warranty, why online orders can’t be returned in-store, and where it ships.',
  intro:
    'Titan is the watch business inside Tata Group’s Titan Company, the same house that owns Tanishq jewellery and Titan Eye+ eyewear. Its own retail site, titan.co.in, sells watches only — Edge, Nebula and Xylys at the premium end, Raga for women, and a smartwatch range — direct to Indian buyers, plus international shipping. The warranty splits by sub-brand and covers the movement, not the case or strap, and once you buy online there is no walking a return into a physical store.',
  about: [
    'Titan was incorporated in 1984 as a joint venture between Tata Industries and the Tamil Nadu Industrial Development Corporation, and it remains part of the Tata Group today. The watch business sits alongside Tanishq (jewellery), Titan Eye+ (eyewear) and CaratLane under the same parent, Titan Company Limited. Titan’s own watches are sold in dozens of countries outside India, but titan.co.in is the direct-to-consumer arm built for the Indian market — the Tata name buys real credibility with a domestic audience who might otherwise distrust an unfamiliar online watch seller.',
    'The catalogue runs from sub-₹2,000 quartz pieces to premium Nebula and Xylys lines built with materials such as gold plating and sapphire crystal, plus Fastrack and Sonata as separate, cheaper sister brands rather than lines within Titan itself. Smartwatches sit in the same storefront as analogue watches, which is unusual for a heritage watchmaker. Because the range spans casual buyers and serious watch collectors on one site, the pricing does the work of the sales floor: browse Edge for slim formal pieces, Octane for sport styling, Raga for the women’s dress range.',
    'Warranty is split by sub-brand and component: Titan’s own quartz watches carry two years on the movement and one year on the battery, while Fastrack and Sonata carry one year overall, and none of it covers the case, glass or strap. Buy online and you cannot return the item to a physical Titan showroom — collection happens through the courier that delivered it, and only after Titan’s own quality team approves the return. International orders are shipped, but with a stated turnaround of T+15 days and no return or replacement rights of any kind.',
  ],
  facts: [
    { label: 'Founded', value: '1984 (Tata JV)' },
    { label: 'Sells', value: 'Watches only, no jewellery' },
    { label: 'Warranty', value: '2 yrs movement, 1 yr battery' },
    { label: 'Online returns', value: 'Courier pickup, no in-store' },
  ],
  plans: {
    title: 'How buying and returns actually work',
    note: 'There is no membership tier or free-delivery threshold published — every watch is priced and sold individually, and the real cost to weigh is the return process, not a subscription fee.',
    items: [
      {
        name: 'Buying online (India)',
        price: 'Standard listed price, COD available',
        detail:
          'Cash on delivery and card payment both work. No loyalty programme or spend-based perks are published.',
        pick: true,
      },
      {
        name: 'International orders',
        price: 'Ships worldwide, delivery around T+15 days',
        detail:
          'No return or replacement rights at all once an international order ships — decide before you buy, not after.',
      },
      {
        name: 'Warranty repairs',
        price: 'Free within the warranty term',
        detail:
          'Two years on the movement for Titan Quartz watches, one year on the battery; Fastrack and Sonata carry one year overall. Case, glass and strap are excluded.',
      },
    ],
  },
  pros: [
    {
      title: 'A Tata name in a market full of grey imports',
      body: 'Titan sits inside Tata Group’s Titan Company alongside Tanishq and Titan Eye+. In a category where counterfeit and grey-market watches are common online, buying from the manufacturer’s own site is a real reassurance, not a marketing line.',
    },
    {
      title: 'Genuinely wide range, one storefront',
      body: 'Titan.co.in runs from sub-₹2,000 quartz watches to the premium Nebula and Xylys lines, plus smartwatches, on one site. Few single-brand watch retailers stretch that far without splitting into separate stores.',
    },
    {
      title: 'A warranty that actually specifies the term',
      body: 'Titan states two years on the movement for its Quartz range and one year on the battery, rather than a vague “lifetime” claim. Fastrack and Sonata, its cheaper sister brands, carry one year.',
    },
    {
      title: 'Ships internationally, which many India-only rivals do not',
      body: 'AJIO and Myntra barely sell outside India; Titan will ship a watch abroad. It takes a stated T+15 days and there is no return once it lands, but the option exists at all.',
    },
  ],
  cons: [
    {
      title: 'Online orders cannot be returned to a physical store',
      body: 'Bought on titan.co.in and want to return it? You cannot walk into a Titan showroom. Collection is by courier only, and the refund waits for Titan’s own quality-assurance team to approve the returned item.',
    },
    {
      title: 'No exchanges, on any product',
      body: 'Titan does not offer exchanges at all — a returned watch gets a refund, not a swap for a different size or model. If you want a different watch, that is two separate transactions, not one.',
    },
    {
      title: 'International buyers get no safety net',
      body: 'Ship a Titan watch outside India and it cannot be returned or replaced under any circumstance, per Titan’s own policy. Combined with a T+15-day delivery window, that is a real risk for a first-time overseas buyer.',
    },
  ],
  reputation: [
    {
      source: 'App Store (Titan World)',
      value: 4.4,
      note: 'only around 40 ratings — a real but very small sample, treat cautiously',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'a Tata-backed name with specific warranty terms, weighed against restrictive online-return rules',
    },
  ],
  bestFor: [
    'Indian buyers who want a heritage watch with a clearly timed warranty',
    'Someone who values the Tata name specifically as reassurance against counterfeits',
    'Buyers happy with quartz and smartwatches rather than mechanical horology',
    'Overseas buyers willing to accept a no-return international shipment',
  ],
  notFor: [
    'Anyone who wants to try a watch and return it same-day to a store',
    'Buyers who need an exchange rather than a refund',
    'International customers who might change their mind after ordering',
  ],
  faq: [
    {
      q: 'Can I return a Titan watch bought online to a Titan showroom?',
      a: 'No. Titan does not accept in-store returns for online orders. A courier collects the watch, and the refund is only processed once Titan’s quality-assurance team has inspected it, so budget more time than a walk-in return would take. Keep the original invoice, warranty card and tags, since the policy requires all three.',
    },
    {
      q: 'What does the Titan warranty actually cover?',
      a: 'For Titan’s own Quartz watches it is two years on the movement and one year on the battery. Fastrack and Sonata, Titan’s cheaper sister brands, carry one year overall. None of these cover the case, glass or strap — that is wear and tear, not a warranty claim.',
    },
    {
      q: 'Can I exchange a Titan watch for a different size or model?',
      a: 'No. Titan’s policy is refund-only — there is no exchange mechanism. If you want a different watch, you return the original for a refund and place a new, separate order once that refund clears, which itself takes time after the quality check.',
    },
    {
      q: 'Does Titan ship watches outside India, and can I return one if I change my mind?',
      a: 'Yes, Titan ships internationally with a stated delivery window of around T+15 days, but international orders carry no return or replacement rights at all under Titan’s published policy. Decide before you buy — there is no changing your mind once it ships.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'titan.co.in',
}
