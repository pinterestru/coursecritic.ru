/**
 * Brand page data for Nykaa (route: /brands/nykaa).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.nykaa.com/who_are_we — founding year, founder, brand and
 *     customer-count scale, own-label roster
 *   - https://www.nykaa.com/cancellation-policy and
 *     https://support.nykaa.com/hc/en-us/articles/360000947686-Nykaa-Return-Policy
 *     — 15-day return window, refund timing
 *   - https://www.nykaa.com/app-nykaa-prive-help — Nykaa Prive membership,
 *     no membership fee
 *   - https://www.trustpilot.com/review/nykaa.com — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const nykaa: BrandPage = {
  slug: 'nykaa',
  providerId: 'nykaa',
  metaTitle: 'Nykaa review 2026 — India beauty marketplace, honestly',
  metaDescription:
    'An independent Nykaa review: the beauty and fashion catalogue, Nykaa Prive membership, the 15-day return policy, and why the Trustpilot score is worth reading first.',
  intro:
    'Nykaa is India’s largest online beauty platform, built by Falguni Nayar from a single beauty e-commerce site in 2012 into a public company selling more than 4,000 brands, including a large stable of its own labels. It is an India-first business: strong on catalogue depth and own-brand pricing, and its public review record outside that home market is genuinely poor.',
  about: [
    'Nykaa was founded in April 2012 by Falguni Nayar in Mumbai, formally operating as FSN E-Commerce Ventures. It listed publicly in 2021, becoming the first Indian unicorn led by a woman to complete an IPO, and Nayar has remained the company’s largest individual shareholder. The business grew from an online-only beauty retailer into an omnichannel one, adding physical stores once it became clear beauty buyers wanted to test products before purchase.',
    'The catalogue spans makeup, skincare, haircare, fragrance, wellness and fashion, hosting more than 4,000 third-party brands alongside a substantial own-label portfolio — Nykaa Cosmetics, Kay Beauty, Dot & Key and Nykaa Wanderlust among others. Nykaa reports serving more than 42 million customers through its website, app and over 100 physical stores, almost all of that footprint inside India.',
    'Nykaa Prive is the loyalty layer: a free-to-join membership tier with no signup fee, distinct from a paid subscription model. Returns run on a 15-day window from delivery, with refunds processed within roughly two to three business days of the returned item being received and inspected, which is a reasonably fast published timeline compared with several competitors on this site.',
  ],
  facts: [
    { label: 'Founded', value: '2012, Mumbai' },
    { label: 'Brands listed', value: '4,000+' },
    { label: 'Customers served', value: '42 million+' },
    { label: 'Returns', value: '15 days from delivery' },
  ],
  plans: {
    title: 'How the cost structure works',
    note: 'Nykaa Prive carries no membership fee, which is unusual among beauty loyalty programmes — the trade-off is that perks are lighter than a paid tier would offer.',
    items: [
      {
        name: 'Standard purchase',
        price: 'Listed price, third-party or own-label',
        detail:
          'Prices vary widely by brand; own-label lines (Nykaa Cosmetics, Kay Beauty and others) are generally positioned below premium third-party brands on the same site.',
        pick: true,
      },
      {
        name: 'Nykaa Prive membership',
        price: 'Free to join',
        detail:
          'No signup or annual fee. Membership status is earned through spend rather than purchased outright, unlike Lenskart’s paid Gold tier.',
      },
      {
        name: 'Returns and refunds',
        price: 'Free within the 15-day window',
        detail:
          'Items must arrive back with original packaging, seals and barcodes intact; courier pickup is arranged within 3 to 5 business days of the request.',
      },
      {
        name: 'Own-label products',
        price: 'Generally the lowest price tier on-site',
        detail:
          'Nykaa’s house brands are positioned as the value option against the third-party names it also stocks, rather than as a premium line.',
      },
    ],
  },
  pros: [
    {
      title: 'The deepest India-focused beauty catalogue on this site',
      body: 'Over 4,000 brands and 42 million-plus customers served give Nykaa a scale in the Indian market that most competitors, local or international, cannot match on breadth alone.',
    },
    {
      title: 'A genuine own-label bench, not just a storefront',
      body: 'Nykaa Cosmetics, Kay Beauty, Dot & Key and Nykaa Wanderlust are real product lines with their own development, not rebadged third-party stock, and they sit at accessible price points.',
    },
    {
      title: 'A free loyalty tier with no signup cost',
      body: 'Nykaa Prive requires no membership fee, unlike some competitors that gate their best offers behind a paid annual plan.',
    },
    {
      title: 'A published, relatively fast refund timeline',
      body: 'Refunds are stated to complete within 24 to 48 hours of the returned item being received, with a further 2 to 3 days for the money to land — a specific, checkable commitment rather than a vague window.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rates it "Bad", consistently',
      body: 'Nykaa.com carries a 1.2 out of 5 Trustpilot score, with recurring complaints about delivery delays, order cancellations without notice and unresponsive customer service. The sample is smaller than Nykaa’s domestic scale would suggest, but the pattern is consistent across it.',
    },
    {
      title: 'Reviewers flag pricing shown at checkout changing',
      body: 'A recurring app-store complaint is the price shown on a product page not matching what is charged after discounts are applied at checkout — a transparency issue worth watching for on higher-value orders.',
    },
    {
      title: 'Built for India first',
      body: 'The store network, fastest delivery promises and most of the 42 million customers served are domestic. A buyer outside India is dealing with an international storefront that is not the core product.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.2, note: 'rated "Bad"; a few hundred reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'reflects catalogue depth and own-label range for its home market; weighed down by service complaints',
    },
  ],
  bestFor: [
    'Buyers in India wanting the widest single beauty catalogue available',
    'Shoppers specifically after Nykaa’s own-label lines (Kay Beauty, Dot & Key)',
    'Anyone who wants loyalty perks without paying a membership fee',
    'Buyers who value a fast, clearly stated refund timeline over other factors',
  ],
  notFor: [
    'Buyers outside India expecting the same delivery speed and support quality',
    'Anyone who has read the Trustpilot complaints and wants zero delivery risk',
    'Shoppers who want price certainty from product page through to checkout',
  ],
  faq: [
    {
      q: 'Is Nykaa only for customers in India?',
      a: 'Its core business, store network and the large majority of its 42 million-plus customers are in India. It does ship and operate storefronts beyond that market, but the fastest delivery and store-based experience are India-centric.',
    },
    {
      q: 'How long do I have to return an order?',
      a: 'Fifteen days from delivery, and partial returns on multi-item orders are accepted. The item needs to come back in its original packaging with seals, labels and barcodes intact for the refund to go through.',
    },
    {
      q: 'Is Nykaa Prive worth joining?',
      a: 'It costs nothing to join, so there is little downside, but it is not a paid tier with guaranteed heavy discounts either — treat it as a light loyalty layer rather than a membership that pays for itself immediately.',
    },
    {
      q: 'Why is the Trustpilot score so much lower than the editorial score here?',
      a: 'Trustpilot reflects a relatively small, self-selected sample skewed toward people with a complaint, mostly around delivery and support. Our editorial score also weighs catalogue depth, own-label range and published policies, which the Trustpilot sample does not capture.',
    },
    {
      q: 'Are Nykaa’s own-label products worth buying over the third-party brands it stocks?',
      a: 'They are priced as the value option on the site and are real in-house product lines rather than rebadged goods, which makes them reasonable to try. They are not positioned as premium alternatives to the established brands sold alongside them.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'nykaa.com',
}
