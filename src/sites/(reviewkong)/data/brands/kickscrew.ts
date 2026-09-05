/**
 * Brand page data for KICKS CREW (route: /brands/kickscrew).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Kicks_Crew — founding (2008, Johnny Mak
 *     and Ross Adrian Yip), shift to direct-to-consumer in 2021, the
 *     November 2022 $7.2M Series A (Gobi Partners, Pacific Century Group,
 *     Damian Lillard) and later athlete investors
 *   - https://www.kickscrew.com/authenticity — the "verified retail partners
 *     only" sourcing model, "CREW Process" and "CREW Data & Technology"
 *     traceability, product categories including trading cards/collectibles
 *   - https://www.kickscrew.com/shipping-info — per-item, per-destination
 *     shipping cost and transit time, the 7-10 business day processing
 *     window, and the duty-unpaid (DDU) import-fee policy
 *   - https://account.kickscrew.com/pages/pdp-refund-exchange — 14-day
 *     return window, QC-tag requirement, 15% restocking fee, 25%
 *     cancellation fee, final-sale collectibles category
 *   - https://www.trustpilot.com/review/www.kickscrew.com and
 *     https://apps.apple.com/us/app/kicks-crew-shoes-apparel/id1615695658 —
 *     rating and review volume, opened directly
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Current
 * headquarters location is disputed across sources (Hong Kong founding vs a
 * New York City entry on Wikipedia vs a reported LA push) — no HQ city is
 * stated in the copy below because it could not be pinned down with
 * confidence. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const kickscrew: BrandPage = {
  slug: 'kickscrew',
  providerId: 'kickscrew',
  metaTitle: 'KICKS CREW review 2026 — authenticity, fees and delays',
  metaDescription:
    'An independent KICKS CREW review: how its verified-partner sourcing and authentication actually work, and the processing time, duties and return fees rivals do not mention.',
  intro:
    'KICKS CREW is a sneaker and streetwear marketplace that sources stock only from verified retail partners and brands rather than individual sellers, and puts every order through an in-house authentication process it calls the "CREW Process". That is reassuring on authenticity. It is less reassuring on cost and speed: orders take 7 to 10 business days just to process before international shipping begins, and most cross-border orders arrive with import duties collected separately at the door.',
  about: [
    'KICKS CREW was founded in 2008 by Johnny Mak and Ross Adrian Yip, the latter previously business development director at rival resale platform GOAT. It started out selling through third-party marketplaces — Amazon, eBay, Tmall, JD.com — before moving to a direct-to-consumer site of its own in 2021. In November 2022 it raised a $7.2 million Series A led by Gobi Partners and Pacific Century Group, with NBA player Damian Lillard among the investors, and has since added Kyrie Irving as a community officer and investor and Dwyane Wade and D’Angelo Russell as investor-ambassadors.',
    'The business model is a curated marketplace rather than an open one: KICKS CREW says it works only with verified retail partners and brands, not individual consumer sellers, and every order runs through what it calls the "CREW Process" — sourced from a partner, sent to its own facility, quality-checked, then shipped — with a unique order number that traces the item back to the specific partner it came from under a system it brands "CREW Data & Technology." The catalogue is reported to run past 400,000 products across sneakers, apparel, accessories and, more unusually, trading cards and collectibles.',
    'The friction shows up at checkout. Orders take 7 to 10 business days to process — sourcing, authenticating and packing — before transit time even starts, and international shipping is charged per item and priced steeply by destination. Most cross-border orders ship duty-unpaid, meaning customs, VAT or brokerage fees are collected by the courier on delivery rather than folded into the price you paid. Returns run a 14-day window, need prior approval and an intact QC tag, and pay back as store credit or a partial refund minus a 15 percent restocking fee — cancelling before an item ships costs 25 percent.',
  ],
  facts: [
    { label: 'Founded', value: '2008' },
    { label: 'Model', value: 'Curated partner marketplace' },
    { label: 'Processing time', value: '7–10 business days' },
    { label: 'Returns', value: '14 days, 15% restocking fee' },
  ],
  plans: {
    title: 'How the pricing and fees work',
    note: 'The sticker price is only part of the cost — processing time, per-item shipping and import duties collected at delivery all add up before the shoes reach you.',
    items: [
      {
        name: 'Standard order',
        price: 'Item price + per-item shipping',
        detail:
          'Shipping is charged per item and varies sharply by destination — for example around $35 to the US or £12 to the UK — on top of 7-10 business days of processing before it even ships.',
        pick: true,
      },
      {
        name: 'International duties',
        price: 'Collected separately by the courier',
        detail:
          'Most orders ship duty-unpaid (DDU): customs, VAT or brokerage fees are billed on delivery, not included at checkout, and are not refundable through KICKS CREW.',
      },
      {
        name: 'Returns & cancellations',
        price: 'Store credit minus 15%, or 25% to cancel',
        detail:
          'A 14-day return window needs prior approval and an intact QC tag; cancelling before an item ships costs a 25 percent fee instead — treat an order as close to final once placed.',
      },
    ],
  },
  pros: [
    {
      title: 'A real authentication process, not just a claim',
      body: 'KICKS CREW says it sources only from verified retail partners and brands, not individual sellers, then runs a named "CREW Process" — inspection at its own facility before anything ships to you.',
    },
    {
      title: 'Order-level traceability',
      body: 'A unique order number ties every purchase back to the specific verified partner it was sourced from, under a system the company brands "CREW Data & Technology" — more transparency than most resellers offer.',
    },
    {
      title: 'A large catalogue, including the odd sizes',
      body: 'Reported to stock past 400,000 products across sneakers, apparel and accessories, with shipping quoted to more than 50 named markets — useful for a release your local retailer never got.',
    },
    {
      title: 'Ratings hold up at real volume',
      body: 'A 3.8 Trustpilot score across more than 32,000 reviews, and 4.4 stars on the iOS App Store from around 2,700 ratings — a large enough sample to be a genuine signal rather than noise.',
    },
  ],
  cons: [
    {
      title: 'Processing alone takes up to 10 business days',
      body: 'Every order is sourced, authenticated and packed before it ships — that is 7 to 10 business days on top of whatever the courier itself takes, easy to miss when comparing delivery estimates.',
    },
    {
      title: 'Import duties can arrive as a surprise',
      body: 'Most international orders ship duty-unpaid, so customs and VAT are billed separately by the courier on delivery rather than shown at checkout — budget for it or the final cost runs higher than the order total.',
    },
    {
      title: 'Returns are not a refund, and cancelling is not free',
      body: 'A successful return comes back as store credit or a partial refund minus a 15 percent restocking fee, and cancelling before an item even ships still costs 25 percent — treat an order as close to final.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 3.8,
      note: '32,347 reviews — a large, directly verified sample',
    },
    { source: 'App Store (iOS)', value: 4.4, note: 'around 2,700 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite credits the named authentication process and catalogue depth against real friction on speed, duties and returns',
    },
  ],
  bestFor: [
    'Sneakerheads chasing a release their local retailers do not stock',
    'Buyers who value a named authentication process over the cheapest possible price',
    'Shoppers comfortable paying customs or VAT separately on delivery',
    'Anyone ordering something they are confident about keeping — returns are expensive',
  ],
  notFor: [
    'Anyone who needs an order within a week — processing alone can take 10 business days',
    'Buyers who want duties included at checkout rather than billed on delivery',
    'Shoppers who expect a simple, low-cost return if a pair does not fit',
  ],
  faq: [
    {
      q: 'Is KICKS CREW a marketplace like GOAT or StockX?',
      a: 'It uses a similar resale-marketplace model, but says it deliberately restricts sourcing to verified retail partners and brands rather than opening listings to individual sellers, and runs every order through its own "CREW Process" quality check before shipping.',
    },
    {
      q: 'How long does an order actually take to arrive?',
      a: 'Longer than the shipping estimate suggests. Every order needs 7 to 10 business days of processing — sourcing from the partner, authentication, packing — before transit time even starts, and international transit itself can add several more days on top.',
    },
    {
      q: 'Will I owe customs or import fees on top of the price?',
      a: 'Likely, if you are ordering across a border. Most international shipments go out duty-unpaid, so the courier collects any customs duty, VAT or brokerage fee separately when the package arrives — KICKS CREW states plainly that it does not prepay these and cannot refund them.',
    },
    {
      q: 'What happens if I need to return something?',
      a: 'You have 14 days from delivery, need prior approval and must keep the QC tag attached. The refund comes back as store credit or a partial refund after a 15 percent restocking fee, and the buyer pays return shipping — cancelling an unshipped order instead costs 25 percent.',
    },
    {
      q: 'Is the sneaker authentic if it comes from KICKS CREW?',
      a: 'The company’s own claim is that every item is sourced only from verified retail partners and brands, then checked at its facility before it ships, with an order number that traces back to the specific partner. We have not independently tested this; it is the company’s stated process, not a third-party audit we can point to.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'kickscrew.com',
}
