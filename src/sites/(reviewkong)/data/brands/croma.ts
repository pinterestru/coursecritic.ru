/**
 * Brand page data for Croma (route: /brands/croma).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.croma.com/faq and
 *     https://www.croma.com/cancellation-and-return — return window, refund
 *     timing, condition requirements
 *   - https://www.tata.com/business/infiniti and
 *     https://www.tata.com/newsroom/business/croma-15-years — ownership
 *     (Infiniti Retail, Tata Sons), founding year, store count
 *   - https://www.croma.com/lp-upto-12-month-no-cost-emi and
 *     https://www.croma.com/campaign/emi-offer/c/3215 — No Cost EMI terms
 *   - https://www.croma.com/campaign/zip-delivery/c/3021 and
 *     https://www.croma.com/lp-express-delivery — Zip/Express delivery windows
 *   - https://www.croma.com/lp-onsitego-extended-warranty — Onsitego extended
 *     warranty terms
 *   - https://www.mouthshut.com/product-reviews/Croma-com-reviews-925868262 —
 *     rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const croma: BrandPage = {
  slug: 'croma',
  providerId: 'croma',
  metaTitle: 'Croma review 2026 — EMI, delivery and returns in India',
  metaDescription:
    'An independent review of Croma, the Tata-owned Indian electronics chain: how No Cost EMI, same-day Zip delivery and the short return window work in practice.',
  intro:
    'Croma is Infiniti Retail’s Tata-owned electronics chain, running both croma.com and more than 540 physical stores across India. It is not a marketplace: everything sold is Croma’s own inventory, and the pitch is No Cost EMI, same-day delivery in major cities, and a private-label range with in-house support, set against a review record dominated by after-sales complaints.',
  about: [
    'Croma is run by Infiniti Retail Limited, a wholly owned subsidiary of Tata Sons, founded in 2006. It now operates more than 540 Croma stores plus a smaller TRiBE format across over 200 Indian cities, alongside croma.com. Tata ownership matters specifically in Indian electronics retail because it distinguishes Croma from the marketplace-seller model used by Amazon India or Flipkart, where the actual seller behind any given listing can change from one order to the next.',
    'The commercial hooks are No Cost EMI — up to 12 months of instalments on eligible bank cards, with Croma absorbing the interest cost as an instant discount rather than passing it on to the buyer — and Zip/Express delivery, which promises same-day delivery for orders placed before 4pm and, in select cities, delivery within about three hours from the nearest store. Croma Exclusive, its private-label range, ships with an in-house service promise rather than routing repairs through a third-party brand.',
    'Extended cover is handled through Onsitego, a named third-party partner, adding up to four extra years on top of the manufacturer’s warranty, capped at five years combined. Set against that is a return window of only five to seven working days depending on payment method, and a review record — on MouthShut and elsewhere — dominated by complaints about after-sales service, particularly repair requests marked resolved without a technician ever visiting.',
  ],
  facts: [
    { label: 'Parent company', value: 'Tata (Infiniti Retail)' },
    { label: 'Founded', value: '2006' },
    { label: 'Stores', value: '540+ stores, 200+ cities' },
    { label: 'Returns window', value: 'Up to 7 days' },
  ],
  plans: {
    title: 'What it costs to buy',
    note: 'Croma’s list prices rarely beat Amazon India or Flipkart on the same SKU. The value is in No Cost EMI, delivery speed and Croma Exclusive’s in-house support, not the headline price on the box.',
    items: [
      {
        name: 'Standard order with No Cost EMI',
        price: 'List price; interest waived on eligible cards',
        detail:
          'No Cost EMI runs up to 12 months on eligible bank cards, through partners including several major Indian banks; Croma discounts the interest cost instantly rather than billing and refunding it separately.',
        pick: true,
      },
      {
        name: 'Zip / Express delivery',
        price: 'Included on eligible pin codes',
        detail:
          'Same-day delivery for orders placed before 4pm, or delivery within about three hours in select cities, dispatched from the nearest Croma store itself rather than a distant central warehouse.',
      },
      {
        name: 'Onsitego extended warranty',
        price: 'Sold as an add-on at checkout',
        detail:
          'Adds up to four extra years of cover beyond the manufacturer’s own warranty, capped at five years combined; Onsitego, not Croma or the original manufacturer, actually administers the claims.',
      },
    ],
  },
  pros: [
    {
      title: 'Tata-backed, not an anonymous marketplace seller',
      body: 'Ownership by Infiniti Retail and Tata Sons gives a level of accountability that genuinely matters in a market where marketplace listings can change sellers overnight without any warning to the buyer.',
    },
    {
      title: 'No Cost EMI genuinely waives the interest',
      body: 'Up to 12 interest-free instalments on eligible bank cards, discounted instantly at checkout rather than charged and refunded later, which is not how every retailer’s ‘no cost’ EMI scheme actually works in practice.',
    },
    {
      title: 'Delivery speed most competitors cannot match',
      body: 'Same-day delivery ahead of a 4pm cutoff, or roughly three-hour delivery in select cities, sourced directly from the nearest physical store rather than a distant regional warehouse.',
    },
    {
      title: 'Croma Exclusive comes with genuine in-house service',
      body: 'Its private-label products are backed by Croma’s own support and repair network rather than routing every single service request through an unrelated third-party manufacturer’s slower process.',
    },
  ],
  cons: [
    {
      title: 'After-sales service is the dominant, recurring complaint',
      body: 'Review sites including MouthShut repeatedly describe support tickets marked resolved with no technician visit ever taking place, and manufacturer warranty periods lapsing entirely during the wait for a callback.',
    },
    {
      title: 'Fast delivery concentrates in India’s biggest cities',
      body: 'Zip’s same-day and three-hour delivery options are limited to select metros; buyers in smaller towns and tier-2 or tier-3 cities get standard, slower delivery timelines instead.',
    },
    {
      title: 'The return window is short and strict on condition',
      body: 'Five to seven working days depending on payment method, and the item must come back with its original box, MRP tag, user manual and every single in-box accessory intact.',
    },
  ],
  reputation: [
    {
      source: 'MouthShut',
      value: 1.8,
      note: '~5,000 user ratings on India’s MouthShut, skewed toward after-sales complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across EMI value, delivery speed and after-sales support',
    },
  ],
  bestFor: [
    'Indian buyers who want Tata-backed accountability over a marketplace listing',
    'Anyone who can use No Cost EMI on an eligible bank card',
    'Shoppers in major cities who want genuinely fast, store-sourced delivery',
    'Buyers considering Croma Exclusive private-label products for the in-house support',
  ],
  notFor: [
    'Anyone outside India — croma.com sells and delivers within India only',
    'Buyers who expect fast, hands-on after-sales support if something goes wrong',
    'Shoppers in smaller towns expecting Zip’s same-day or three-hour delivery',
  ],
  faq: [
    {
      q: 'Does Croma ship outside India?',
      a: 'No. Croma is an India-only retailer, selling through croma.com and its wide network of physical stores; it does not offer international shipping or otherwise serve customers who are based outside the country in any meaningful way at all currently, unlike some larger global marketplaces.',
    },
    {
      q: 'How does No Cost EMI actually work?',
      a: 'On eligible bank cards, Croma splits the price into instalments of up to 12 months and discounts the interest cost upfront rather than charging and refunding it, so the total across the instalment plan matches what you’d otherwise pay upfront in cash.',
    },
    {
      q: 'What is Zip or Express delivery?',
      a: 'A same-day delivery promise for orders placed before 4pm, with roughly three-hour delivery available in select major cities, fulfilled directly from the nearest Croma store rather than being shipped out from a distant central warehouse somewhere else in the country.',
    },
    {
      q: 'How long do I have to return something?',
      a: 'Five to seven working days depending on how you paid, and the item needs its original box, MRP tag, manual and all in-box accessories intact; refunds follow within about two working days of Croma actually receiving the returned item back.',
    },
    {
      q: 'Is Croma Exclusive the same as buying a third-party brand?',
      a: 'No. Croma Exclusive is Croma’s own private-label product range, sold under its own name with Croma’s in-house service and support promise, rather than having every single repair routed through an unrelated external manufacturer’s much slower process, as happens with most other brands.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'croma.com',
}
