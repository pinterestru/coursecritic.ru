/**
 * Brand page data for Swarovski (route: /brands/swarovski).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.swarovski.com/en-US/s-brand/ and
 *     https://www.swarovski.com/en-US/s-the-history-of-swarovski/ — founding,
 *     ownership, history
 *   - https://www.swarovski.com/en-US/s-faq-shipping/Swarovski-Shipping-FAQs/
 *     and https://www.swarovski.com/en-US/s-faq-return/ — shipping threshold,
 *     SWAROVSKI Club perk, return window
 *   - https://www.swarovski.com/en-US/s-swarovski-created-diamonds/ and
 *     https://www.swarovski.com/en-US/s-sustainability-swarovski-created-diamonds/
 *     — the Created Diamonds line and its lab-grown positioning
 *   - https://www.prnewswire.com/news-releases/swarovski-crystal-business-2025-results-302717511.html
 *     — 2025 boutique count and country coverage
 *   - https://www.trustpilot.com/review/www.swarovski.com — rating and volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const swarovski: BrandPage = {
  slug: 'swarovski',
  providerId: 'swarovski',
  metaTitle: 'Swarovski review 2026 — crystal jewellery, honestly',
  metaDescription:
    'An independent Swarovski review: what the crystal jewellery actually costs, the Created Diamonds line, and why its own Trustpilot score is the lowest on this site.',
  intro:
    'Swarovski has sold cut crystal since 1895, and the name is still the reflex answer to "affordable sparkle". The catalogue runs from crystal-set jewellery to lab-grown Created Diamonds fine jewellery, sold through thousands of boutiques and its own site. The reflex answer is not the same as a safe one: the brand’s own e-commerce reviews are consistently poor, and that is worth reading before you buy online rather than in a boutique.',
  about: [
    'Swarovski was founded in 1895 in Wattens, Austria, by Daniel Swarovski, who built the first automated crystal-cutting machine and picked the site for its hydroelectric power. The company stayed a family concern for well over a century; in 2022 it formally moved from family-managed to family-owned, under an outside CEO for the first time. It is still private, which means it publishes far less financial detail than a listed rival would.',
    'The core business is cut-crystal jewellery, accessories and home decor at a price point well below fine jewellery but above costume brands. Since 2018 it has added Swarovski Created Diamonds, a laboratory-grown fine jewellery line the company positions on sustainability grounds — it says it is moving the diamond-growing process to renewable energy. That line sits at a materially higher price than the crystal collections and is sold separately on the site.',
    'Distribution is boutique-led: the company reported roughly 2,200 boutiques plus multibrand partners in its most recent published results, across more than 140 countries. That scale is the brand’s real strength — a Swarovski counter exists in most major shopping districts worldwide — and it is also why the online experience matters less to the company than it might to a pure online retailer, which shows in how the web reviews read.',
  ],
  facts: [
    { label: 'Founded', value: '1895, Austria' },
    { label: 'Ownership', value: 'Privately family-owned' },
    { label: 'Boutiques', value: '~2,200+ worldwide' },
    { label: 'Returns', value: '14 days (30 for diamonds)' },
  ],
  plans: {
    title: 'What it costs to buy',
    note: 'Crystal jewellery and Created Diamonds fine jewellery are priced on entirely different scales — check which section you are browsing before comparing to a competitor.',
    items: [
      {
        name: 'Crystal jewellery',
        price: 'Entry-level crystal pieces up to statement collections',
        detail:
          'The core catalogue: pendants, earrings, bracelets and rings set with cut crystal rather than gemstones.',
        pick: true,
      },
      {
        name: 'Swarovski Created Diamonds',
        price: 'A step up, priced as fine jewellery',
        detail:
          'Lab-grown diamonds in precious-metal settings, sold as a separate line since 2018. Not comparable in price to the crystal range.',
      },
      {
        name: 'Standard shipping',
        price: 'Free over $150 in the US',
        detail:
          'Below that threshold shipping is charged; SWAROVSKI Club Silver-tier members get free shipping regardless of order size.',
      },
      {
        name: 'SWAROVSKI Club membership',
        price: 'Free to join',
        detail:
          'Tiered loyalty programme; the free-shipping perk above is a Silver-tier benefit, not available to every member by default.',
      },
    ],
  },
  pros: [
    {
      title: 'A boutique within reach almost everywhere',
      body: 'With around 2,200 boutiques across 140-plus countries, Swarovski is one of the few jewellery brands you can walk into on nearly any high street, which matters if you want to see and return in person.',
    },
    {
      title: 'A real lab-grown diamond line, not a rebrand',
      body: 'Created Diamonds has existed since 2018 with its own sustainability claims around renewable-energy growing. It is a genuine second product line, not crystal jewellery relabelled.',
    },
    {
      title: 'Recognisable at a price below fine jewellery',
      body: 'Cut-crystal pieces sit below fine jewellery prices while still reading as a known name, which is the specific gap the brand has occupied for over a century.',
    },
    {
      title: 'A stated return window on every order',
      body: 'Fourteen days for crystal jewellery and thirty for Created Diamonds gives a clear, dated window to act in, rather than a vague "reasonable time" policy.',
    },
  ],
  cons: [
    {
      title: 'Its own Trustpilot score is bad, and consistent about it',
      body: 'www.swarovski.com is rated "Bad" at 1.7 out of 5 from close to 3,000 reviews, with recurring complaints about slow refunds, unresponsive support and orders arriving incomplete. That is a lower score than any other brand on this site.',
    },
    {
      title: 'Clasps and findings draw specific complaints',
      body: 'Beyond generic service gripes, reviewers repeatedly flag broken clasps and loose stones on jewellery items — a product-quality complaint, not just a shipping one, and worth checking on the specific piece you want.',
    },
    {
      title: 'Free shipping has a real threshold',
      body: 'Below $150 you pay for shipping unless you hold Silver-tier SWAROVSKI Club status. Casual one-off buyers of a single lower-priced piece will meet this.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.7, note: 'rated "Bad", close to 3,000 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'reflects the boutique network and product range; weighed down by the online service record',
    },
  ],
  bestFor: [
    'Buyers near a physical boutique who can see and return items in person',
    'Gift-buyers who want a recognisable name at a mid-range price',
    'Shoppers specifically interested in lab-grown Created Diamonds fine jewellery',
    'SWAROVSKI Club Silver members ordering below the shipping threshold',
  ],
  notFor: [
    'Anyone ordering online who expects fast, responsive customer service',
    'Buyers who want fine-jewellery-grade quality control on every piece',
    'One-off small orders under the free-shipping threshold outside a boutique',
  ],
  faq: [
    {
      q: 'Is Swarovski jewellery real crystal or glass?',
      a: 'It is cut crystal, a lead-free glass formulated and precision-cut by Swarovski’s own process, not a gemstone or a plain glass imitation. Created Diamonds, sold separately, are laboratory-grown diamonds rather than crystal.',
    },
    {
      q: 'How long do I have to return an order?',
      a: 'Fourteen days from receipt for standard crystal jewellery, extended to thirty days for Created Diamonds pieces. Courier returns are processed within about ten business days of reaching the warehouse.',
    },
    {
      q: 'Is buying from a boutique different from buying online?',
      a: 'The product is the same, but the public review record for the website specifically is poor — 1.7 out of 5 on Trustpilot. Boutique purchases let you inspect the piece and get in-person help, sidestepping the online service issues reviewers report.',
    },
    {
      q: 'Do I get free shipping automatically?',
      a: 'Only above the $150 order threshold in the US, or at any order size if you hold Silver-tier SWAROVSKI Club membership, which is free to join but tiered by spend.',
    },
    {
      q: 'What is Created Diamonds and is it cheaper than a mined diamond?',
      a: 'It is Swarovski’s laboratory-grown diamond fine jewellery line, launched in 2018 and marketed on sustainability grounds. Lab-grown diamonds are generally priced below mined equivalents of comparable size, but Swarovski does not publish a direct like-for-like comparison.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'swarovski.com',
}
