/**
 * Brand page data for Funko Europe (route: /brands/funko).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://funkoeurope.com/ (redirects to https://funko.com/gb/) — confirmed
 *     the 301 redirect and the current storefront
 *   - https://funko.com/gb/pages/delivery-shipping-information — country list,
 *     delivery speeds, UK free-shipping threshold
 *   - https://www.popshopguide.com/2025/09/25/funko-com-expands-to-europe/ —
 *     the September 2025 funkoeurope.com → funko.com merger and what changed
 *   - https://en.wikipedia.org/wiki/Funko and Funko, Inc. investor materials —
 *     founding year, HQ, FY2025 revenue and international sales share
 *   - https://www.trustpilot.com/review/funkoeurope.com — rating and volume
 *
 * ⚠️ Prices, fees and shipping terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const funko: BrandPage = {
  slug: 'funko',
  providerId: 'funko',
  metaTitle: 'Funko Europe review 2026 — shipping, cost, verdict',
  metaDescription:
    'Funko Europe reviewed: which countries it ships to, what changed when funkoeurope.com folded into funko.com, and the delivery reputation it has to live down.',
  intro:
    'Funko Europe is the localised storefront for buyers in the UK, the EU and the UAE who want official Pop! figures without importing from the US site. Since September 2025 it runs on the same funko.com platform as the American store rather than a separate one, which fixed years of missing loyalty perks — but the delivery and support reputation that follows the brand has not caught up.',
  about: [
    'Funko, Inc. was founded in 1998 by Mike Becker, growing from novelty bobbleheads into a licensing powerhouse that makes Pop! vinyl figures, Loungefly bags and apparel under deals with more than 250 content providers spanning film, TV, games and music. The company is headquartered in Everett, Washington, and reported $908.2 million in revenue for fiscal 2025, with international customers accounting for roughly 40% of sales, up from 35% the year before, and long-running "evergreen" properties driving most of that total.',
    'For years, funkoeurope.com was a separate regional site, and it showed: European buyers missed out on the Fan Rewards loyalty programme and some online exclusives that US shoppers had. In September 2025 Funko folded the European storefront into funko.com, and funkoeurope.com now 301-redirects to funko.com/gb. Existing account holders had to do a one-time password reset to move across, which is a real piece of friction the announcement did not dwell on.',
    'What buyers get today is a UK/EU-priced catalogue with VAT built into the checkout, delivery to more than 40 European countries plus the UAE, and the same Fan Rewards and Pop! Yourself customisation the US site has always offered. What has not changed is the commercial model: no membership tier, no flat shipping fee outside the UK, and a public reputation for delivery and support that a rebrand does not erase overnight, whatever the new domain says.',
  ],
  facts: [
    { label: 'Parent company', value: 'Funko, Inc. (1998)' },
    { label: 'Ships to', value: '40+ European countries, UAE' },
    { label: 'Free shipping', value: 'UK orders over £60 only' },
    { label: 'Storefront', value: 'Redirects to funko.com/gb' },
  ],
  plans: {
    title: 'How delivery is priced',
    note: 'There is no membership tier here — every option below is a shipping speed. Free delivery only applies to the UK site above the stated threshold; every other market pays a fee calculated at checkout, not a published flat rate.',
    items: [
      {
        name: 'Standard Tracked Post',
        price: 'Free to the UK over £60; otherwise calculated at checkout',
        detail:
          '3 to 7 working days depending on destination country. The default option most orders ship on.',
        pick: true,
      },
      {
        name: 'Premium Standard',
        price: 'A checkout surcharge over standard post',
        detail: 'A faster tracked service: 3 to 4 working days instead of up to 7.',
      },
      {
        name: 'Express Air/Courier',
        price: 'The highest shipping tier, varies by country',
        detail: '2 to 3 working days, for buyers who need a figure by a set date.',
      },
      {
        name: 'Pop! Yourself customised orders',
        price: 'Item price plus production time',
        detail:
          'Made-to-order custom figures ship separately from the rest of a basket; allow 3 to 7 working days from dispatch on top of the time to make it.',
      },
    ],
  },
  pros: [
    {
      title: 'The official source for EU-market exclusives',
      body: 'Some drops and variants sell only through the European storefront, not through US resellers or marketplace sellers, making it the only reliable place to get them at retail price.',
    },
    {
      title: 'VAT-inclusive checkout, no customs surprise',
      body: 'European orders are priced with VAT built in, which removes the guesswork of importing directly from the US site and hoping duties do not turn up on the doorstep.',
    },
    {
      title: 'Fan Rewards and Pop! Yourself now match the US site',
      body: 'The September 2025 merger ended years of European buyers missing the loyalty points and figure-customisation features that American shoppers already had, closing a gap that had annoyed collectors for a long time.',
    },
    {
      title: 'A genuine choice of delivery speed',
      body: 'From 3-to-7-day standard tracked post up to 2-to-3-day express courier, buyers can choose to pay for speed when a release date or a birthday actually matters, rather than being stuck with one option.',
    },
  ],
  cons: [
    {
      title: 'The delivery and support reputation is poor',
      body: 'Trustpilot puts funkoeurope.com at 1.5 out of 5 across roughly 2,000 reviews, heavily weighted toward one-star ratings citing missing tracking and slow refunds. That is the number to weigh against the catalogue.',
    },
    {
      title: 'Free shipping is a UK-only perk',
      body: 'Every market outside the UK pays a fee calculated at checkout with no published threshold, so EU and UAE buyers cannot plan around a free-delivery figure the way UK shoppers can.',
    },
    {
      title: 'The 2025 platform migration had real friction',
      body: 'Moving accounts from funkoeurope.com to funko.com required a one-time password reset, and buyers switching platforms mid-order history should expect some rough edges from a young merger.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.5, note: 'roughly 2,000 reviews, mostly one-star' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'reflects catalogue breadth and VAT-inclusive checkout, weighed down by the delivery and support record above',
    },
  ],
  bestFor: [
    'European and UK Pop! collectors who want the official range without importing',
    'Buyers who want VAT and duties settled at checkout, not on the doorstep',
    'Fans chasing EU-only exclusives not sold through US retailers',
    'Anyone wanting Loungefly or Pop! Yourself without shipping from the US',
  ],
  notFor: [
    'Buyers who prioritise a strong customer-service reputation above catalogue size',
    'Shoppers outside the ~40 covered markets, who need funko.com’s other regional stores',
    'Anyone who cannot tolerate the 3-to-7-day standard post window without paying for express',
  ],
  faq: [
    {
      q: 'Is funkoeurope.com still a separate website?',
      a: 'No. Since September 2025 it 301-redirects to funko.com/gb, part of a single global platform shared with the US store. Existing European account holders needed a one-time password reset to move their accounts across, but the brand is still widely called Funko Europe in marketing, and the site still shows UK/EU pricing, currency and stock.',
    },
    {
      q: 'Which countries does Funko Europe ship to?',
      a: 'More than 40, spanning the UK, most of the EU and the UAE, including Germany, France, Spain, Italy, the Nordics and the Baltic states, each with its own delivery timeframe. Buyers outside that covered list need one of funko.com’s other regional storefronts, since Funko Europe will not ship to a country it does not list.',
    },
    {
      q: 'Will I be charged customs or import duties on top of the price?',
      a: 'European checkout prices include VAT, so in principle there should be no extra charge on delivery. That said, buyer reports and Funko’s own help centre both describe parcels occasionally held in customs despite duties being prepaid, so it is worth keeping the order confirmation to hand and contacting support quickly if a parcel gets stuck.',
    },
    {
      q: 'What is the return policy?',
      a: 'Funko publishes a separate returns policy page on the site, but we could not verify the exact number of days in the return window at the time of writing, so treat any figure you see elsewhere with caution. Check the current policy at checkout before ordering, especially for Pop! Yourself customised pieces, which are unlikely to be returnable at all.',
    },
    {
      q: 'Is Funko Europe cheaper than buying from the US site?',
      a: 'Usually simpler rather than cheaper: VAT-inclusive local pricing avoids the customs-duty risk of importing directly, but that is not the same as a discount on the item itself. Compare the total landed cost, including any US shipping and duties, against the European price before assuming the local site automatically wins on cost.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'funkoeurope.com',
}
