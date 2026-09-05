/**
 * Brand page data for iHerb (route: /brands/iherb).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.iherb.com/shipping — regions served, logistics centres,
 *     free-shipping thresholds vary by destination
 *   - https://iherb.zendesk.com/hc/en-us/articles/360025694711 — Loyalty Credit
 *     programme (10% of order total, expires in 60 days)
 *   - https://information.iherb.com/hc/en-us/articles/33197654321684 and related
 *     iHerb Customer Self Service articles — refund window (30 days standard,
 *     90 days for iHerb-brand products), return process
 *   - https://information.iherb.com/hc/en-us/articles/44017918191252 — Autoship
 *     & Save programme
 *   - https://www.trustpilot.com/review/www.iherb.com — TrustScore and review volume
 *   - General company background (founded 1996, Irvine CA, ~50,000 products from
 *     ~1,900 brands, fulfilment centres in the US, South Korea, Hong Kong and
 *     Saudi Arabia) via third-party company profiles
 *
 * ⚠️ Prices, thresholds and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Free-shipping minimums
 * and Loyalty Credit terms vary by destination market. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const iherb: BrandPage = {
  slug: 'iherb',
  providerId: 'iherb',
  metaTitle: 'iHerb review 2026 — shipping, returns and the loyalty credit',
  metaDescription:
    'An independent iHerb review: how the supplement catalogue is priced, what free shipping actually requires, and where the returns process gets awkward.',
  intro:
    'iHerb is a US supplement and wellness retailer that has spent three decades building the logistics to ship vitamins, supplements and personal-care products worldwide rather than just across America. The catalogue is the draw, tens of thousands of items from brands that are hard to find on general marketplaces, but the free-shipping threshold and the returns process both depend heavily on which country you are ordering into.',
  about: [
    'Founded in 1996 and headquartered in Irvine, California, iHerb built its business on a category general retailers under-serve: vitamins, supplements, herbs, and specialty diet and personal-care products. Rather than staying a US-only operation, it invested early in international logistics, and now ships from fulfilment centres across the US and Asia to customers in well over a hundred countries. That international reach, not the product range alone, is what separates it from most supplement retailers.',
    'The catalogue is large and third-party heavy: tens of thousands of SKUs from close to two thousand brands, spanning mainstream supplement names alongside smaller wellness brands that rarely get shelf space at a pharmacy or a general marketplace. Authenticity is the pitch, iHerb positions itself as sourcing directly from brands and manufacturers rather than through resellers, which matters in a category where counterfeit supplements are a genuine and persistent problem for shoppers buying online.',
    'The commercial model runs on order thresholds rather than a membership fee. Orders above a destination-specific minimum ship free; below it, a flat delivery charge applies, and that minimum is set per country rather than being one global figure. A Loyalty Credit programme returns roughly 10% of an order total as credit toward a future purchase, and an Autoship & Save option automates repeat orders of everyday items like protein powder or daily vitamins, often with its own separate shipping terms.',
  ],
  facts: [
    { label: 'Founded', value: '1996, Irvine, California' },
    { label: 'Ships to', value: '180+ countries' },
    { label: 'Catalogue', value: '~50,000 products' },
    { label: 'Standard refund window', value: '30 days' },
  ],
  plans: {
    title: 'How the cost structure works',
    note: 'There is no membership fee. What you pay depends on your destination country, your order size relative to the local free-shipping threshold, and whether you opt into Autoship for recurring items.',
    items: [
      {
        name: 'Standard order',
        price: 'flat delivery fee below the threshold',
        detail:
          'Most markets need an order over a country-set minimum, commonly cited around $30-40 USD equivalent, to waive the delivery charge. Below it, a flat fee applies.',
      },
      {
        name: 'Order above the threshold',
        price: 'free standard shipping',
        detail:
          'Cross the destination-specific minimum and delivery is free. The exact figure differs by country and is shown at checkout, not fixed globally.',
        pick: true,
      },
      {
        name: 'Autoship & Save',
        price: 'discount on repeat items',
        detail:
          'Recurring orders of the same product, aimed at everyday items like vitamins or protein, often paired with its own free-shipping minimum.',
      },
      {
        name: 'Loyalty Credit',
        price: '~10% of order total, back as credit',
        detail:
          'Earned on qualifying purchases and applied toward a future order. It expires within 60 days, so it needs to be used, not banked.',
      },
    ],
  },
  pros: [
    {
      title: 'A supplement catalogue most retailers cannot match',
      body: 'Tens of thousands of products from close to two thousand brands, including smaller wellness names that rarely reach general marketplaces or pharmacy shelves, all searchable and reviewed in one storefront.',
    },
    {
      title: 'Genuinely built for international shipping',
      body: 'Fulfilment centres across the US and Asia and delivery to well over a hundred countries mean it is one of the few supplement retailers that treats non-US buyers as a first-class market, not an afterthought.',
    },
    {
      title: 'Loyalty Credit rewards repeat buying',
      body: 'Roughly 10% of an order comes back as credit toward the next one, a real discount for anyone reordering the same vitamins or protein monthly rather than a one-off promotional gimmick.',
    },
    {
      title: 'A longer return window on its own-brand products',
      body: 'Standard items get 30 days; iHerb-brand products get 90, considerably longer than most competitors offer on a supplement that has already been opened, tried and possibly disagreed with you.',
    },
  ],
  cons: [
    {
      title: 'Free shipping depends on where you live',
      body: 'The order minimum for free delivery is set per country and is not the same figure everywhere, so what counts as a good deal varies by destination in a way the homepage does not make obvious.',
    },
    {
      title: 'Returns can mean sending the package back yourself',
      body: 'Once a return is approved there is a window to physically ship the item back, and refunds to the original payment method can take a week to over a month for buyers outside the US.',
    },
    {
      title: 'Trustpilot skews lower than the product reviews suggest',
      body: 'Customer-service complaints, mostly logistics and delivery issues that vary by region, pull the aggregate rating down even though on-site product reviews tend to run positive.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 3.8, note: '13,623 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.4,
      note: 'our composite across catalogue breadth, international shipping and return terms',
    },
  ],
  bestFor: [
    'International shoppers who cannot get a specific supplement brand locally',
    'Anyone reordering the same vitamins or protein monthly via Autoship',
    'Buyers who want iHerb-brand products, with the longer 90-day return window',
    'Shoppers comfortable clearing a country-specific order minimum for free shipping',
  ],
  notFor: [
    'One-off small orders below the local free-shipping threshold',
    'Buyers who need a fast, no-questions domestic return process',
    'Anyone in a market with a high delivery fee where a local pharmacy is cheaper',
  ],
  faq: [
    {
      q: 'Does iHerb ship to my country?',
      a: 'iHerb ships to more than 180 countries from fulfilment centres in the US and Asia, which is a genuinely wider footprint than most supplement retailers manage. Availability of specific products, delivery times and the free-shipping minimum still vary by destination, so check at checkout rather than assuming coverage or terms match another country.',
    },
    {
      q: 'What is the Loyalty Credit?',
      a: 'It is roughly 10% of a qualifying order total, returned as store credit toward a future purchase rather than a cash refund. It expires 60 days after being issued, so it is worth using on your next order rather than letting it accumulate and lapse unused.',
    },
    {
      q: 'How long do I have to return something?',
      a: 'Standard items purchased directly from iHerb have a 30-day refund window from delivery; iHerb-brand products get 90 days, a longer allowance for its own supplement lines. Items bought through other marketplaces that list iHerb as the seller carry their own separate 30-day terms.',
    },
    {
      q: 'Is iHerb cheaper than buying supplements locally?',
      a: 'Often, especially for US brands that carry a big import markup once they reach a local pharmacy or health-food shop shelf elsewhere. But the comparison depends heavily on whether your order clears the local free-shipping threshold; below it, the flat delivery fee can erase most or all of the saving on a small order.',
    },
    {
      q: 'Are the products on iHerb genuine?',
      a: 'iHerb positions itself as sourcing directly from brands and manufacturers rather than through resellers, which is the standard defence against counterfeit supplements sold on open marketplaces. That is the retailer’s own claim rather than something we independently audited, and we have not verified the sourcing chain for individual smaller brands ourselves.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'iherb.com',
}
