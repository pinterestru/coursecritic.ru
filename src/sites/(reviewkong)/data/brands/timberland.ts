/**
 * Brand page data for Timberland (route: /brands/timberland).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Timberland_(company) — founding year, the
 *     1973 waterproof-boot launch, the 2011 VF Corporation acquisition
 *   - https://help.timberland.com/hc/en-us/articles/115004585668-Free-Return-Policy
 *     — 30-day return window, free prepaid label, shipping cost not refunded
 *   - https://help.timberland.com/hc/en-us/articles/115001361293-How-Do-You-Ship-How-Much-Does-It-Cost
 *     — Community (free loyalty) shipping threshold, non-member flat rate,
 *     expedited shipping cost ranges
 *   - https://www.trustpilot.com/review/www.timberland.com — rating and volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const timberland: BrandPage = {
  slug: 'timberland',
  providerId: 'timberland',
  metaTitle: 'Timberland review 2026 — boots, shipping and returns',
  metaDescription:
    'An independent Timberland review: what VF Corporation owns, how the free-shipping threshold works, and why the brand’s own Trustpilot score is this low.',
  intro:
    'Timberland is the yellow boot everyone recognises, but the company behind it is VF Corporation, and the products stretch well past hiking footwear into workwear, apparel and city-friendly leather. The boots themselves hold up. What lets the brand down, consistently and specifically, is what happens after you click buy: shipping speed and customer service are the recurring complaint, not the product.',
  about: [
    'Timberland began in 1952 as the Abington Shoe Company in Massachusetts, and it only took its current name after launching the original waterproof leather boot in 1973 — the product the whole brand still hangs on. VF Corporation, which also owns The North Face and Vans, bought Timberland in 2011 for around $2 billion, and it has run as a VF division since.',
    'The catalogue has grown well beyond the yellow boot: hiking and casual footwear, apparel, and a separate Timberland PRO line of safety-toe and electrical-hazard work boots launched in 1999 for tradespeople who need certification, not just style. Materials sourcing and leather standards are handled at the VF Corporation level and applied across Timberland’s range.',
    'Buying direct from timberland.com means dealing with VF’s own fulfilment and customer service operation rather than a marketplace seller, which should mean more consistency. The public review record does not bear that out: shipping delays and slow refund processing are the most repeated complaints across the brand’s regional storefronts, not one-off issues.',
  ],
  facts: [
    { label: 'Founded', value: '1952' },
    { label: 'Parent company', value: 'VF Corporation (since 2011)' },
    { label: 'Return window', value: '30 days from shipment' },
    { label: 'Work boot line', value: 'Timberland PRO, since 1999' },
  ],
  plans: {
    title: 'How shipping and returns are priced',
    note: 'Timberland Community is a free loyalty sign-up, not a paid membership, but it is the only route to free standard shipping under $75.',
    items: [
      {
        name: 'Guest checkout',
        price: '$7 flat for standard shipping',
        detail:
          'No account needed, but you pay standard shipping on every order regardless of size.',
      },
      {
        name: 'Timberland Community (free to join)',
        price: 'Free over $75, $5 under that',
        detail:
          'A free account unlocks the shipping threshold. For anyone ordering more than once, joining costs nothing and saves the flat fee.',
        pick: true,
      },
      {
        name: 'Expedited shipping',
        price: 'From around $12 to $18',
        detail:
          'Second-day runs $12–15, overnight $16–18, on top of the order total. P.O. boxes and territories carry separate surcharges.',
      },
    ],
  },
  pros: [
    {
      title: 'The core boot earns its reputation',
      body: 'The original waterproof leather boot from 1973 is still the reference point for the category, and the design has changed little because it does not need to.',
    },
    {
      title: 'A genuine safety-certified work line',
      body: 'Timberland PRO is built for people who need electrical-hazard or steel-toe certification on the job, not just boots that look like workwear.',
    },
    {
      title: 'Free returns, no restocking argument',
      body: 'Returns within 30 days of shipment come with a free prepaid label. You only lose the original shipping charge, not a percentage of the order.',
    },
    {
      title: 'Backed by VF’s scale, not a small operator',
      body: 'Ownership by VF Corporation means consistent sizing, materials standards and a fulfilment network shared with The North Face and Vans, rather than a boutique supply chain.',
    },
  ],
  cons: [
    {
      title: 'Shipping speed is the recurring complaint',
      body: 'Across regional Trustpilot pages, slow dispatch and long delivery windows are the single most repeated grievance, sometimes described as the slowest in the category.',
    },
    {
      title: 'Refunds take weeks, not days',
      body: 'Reviewers report returns taking one to three weeks just to reach the warehouse, then several more business days for confirmation and refund — a long wait if you needed the money back for a replacement pair.',
    },
    {
      title: 'The Trustpilot score reflects it',
      body: 'timberland.com sits at 1.4 out of 5 on Trustpilot from just over a thousand reviews — a "Bad" rating driven by service complaints rather than the boots themselves.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.4, note: 'US storefront, 1,000+ reviews, rated "Bad"' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite weighs product durability heavily against a poor service record',
    },
  ],
  bestFor: [
    'Anyone who wants the original waterproof boot and knows the fit already',
    'Tradespeople who need a certified safety-toe or EH-rated work boot',
    'Buyers happy to order well ahead of when they need the item',
    'Repeat customers who join Timberland Community for the shipping threshold',
  ],
  notFor: [
    'Anyone who needs an order to arrive quickly — build in slack',
    'Buyers who might need a fast refund if a return does not fit',
    'Shoppers who weight customer-service reviews heavily in a purchase decision',
  ],
  faq: [
    {
      q: 'Is Timberland owned by VF Corporation?',
      a: 'Yes. VF Corporation, which also owns The North Face, Vans and Dickies, acquired Timberland in 2011 for around $2 billion. Timberland still operates as its own brand within VF.',
    },
    {
      q: 'How long do I have to return an order?',
      a: '30 days from the date your order shipped, provided the item is unworn, unwashed and unaltered. Timberland provides a free prepaid return label, but your original shipping charge is not refunded.',
    },
    {
      q: 'Is standard shipping free?',
      a: 'Only if you join Timberland Community, which is free, and only above a $75 order. Below that, or without an account, standard shipping is a flat $7.',
    },
    {
      q: 'Why is the Trustpilot rating so low if the boots are well regarded?',
      a: 'The product itself is rarely the complaint. Reviewers consistently flag slow dispatch, long delivery windows and slow refund processing, which drags the aggregate score down independent of build quality.',
    },
    {
      q: 'Are Timberland PRO boots the same as the standard yellow boot?',
      a: 'No. PRO is a separate line launched in 1999, built for jobsite requirements like steel-toe or electrical-hazard protection. The classic yellow boot is not certified safety footwear.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'timberland.com',
}
