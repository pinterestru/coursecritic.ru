/**
 * Brand page data for Joe's New Balance Outlet (route: /brands/joesnewbalance).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.joesnewbalanceoutlet.com/aboutus.html — company history,
 *     acquisition by New Balance Athletics, "over 25 years" trading claim
 *     (read via search-indexed snippet; direct fetch was bot-blocked)
 *   - https://www.joesnewbalanceoutlet.com/customer-service-shipping.html —
 *     shipping fee and free-shipping threshold (search-indexed snippet)
 *   - https://www.joesnewbalanceoutlet.com/all-final-sale/ — final-sale,
 *     no-returns clearance section
 *   - https://www.amberlooks.com/joes-new-balance-outlet-legit-review-shopping-tips-2026.html
 *     — independent review corroborating the restocking fee, seconds
 *     disclosure and "Made in USA" stock appearing in the outlet
 *   - https://www.bbb.org/us/mo/saint-louis/profile/retail-shoes/joes-new-balance-outlet-0734-310324425
 *     — BBB rating and the documented complaint pattern
 *   - https://www.yelp.com/biz/joes-new-balance-outlet-fenton — confirms the
 *     Fenton, Missouri physical store is closed
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Trustpilot's page
 * for this domain returned a bot block (403) on every direct fetch attempt
 * during research, so no Trustpilot score is cited here — do not add one
 * without opening the live page. The return window also has conflicting
 * secondary sources (30 vs 45 days); re-verify against the live site before
 * publishing a single number. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const joesnewbalance: BrandPage = {
  slug: 'joesnewbalance',
  providerId: 'joesnewbalance',
  metaTitle: 'Joe’s New Balance Outlet review 2026 — is it official?',
  metaDescription:
    'An independent review of Joe’s New Balance Outlet: its real relationship to New Balance, the discounts, the restocking fee on returns, and the BBB complaint pattern.',
  intro:
    'Joe’s New Balance Outlet is not an imitator trading on a famous name — it is New Balance’s own clearance channel, bought by New Balance Athletics in the early 2000s after starting life as an independent reseller of surplus stock. It sells past-season and discontinued New Balance footwear at markdowns up to 70 percent, ships only within the US, and charges a flat restocking fee on every return. The Better Business Bureau lists a real pattern of fulfilment complaints worth reading first.',
  about: [
    'The name suggests a scrappy independent outlet, and for a while it was one: Joe’s began as a third-party retailer selling New Balance’s surplus and discontinued stock. New Balance Athletics bought the business in the early 2000s, and it now describes itself as the brand’s own official online clearance store. The company says it has been trading for more than 25 years. Its one dedicated physical location, in Fenton, Missouri, has since closed, so this is now an online-only channel rather than a store with a website attached.',
    'What actually sits in the catalogue is past-season and discontinued New Balance footwear and apparel, marked down as much as 70 percent off the original price, plus a dedicated final-sale section carrying the steepest discounts of all. Some stock is disclosed as "seconds" — items with a cosmetic flaw — rather than mixed in unlabelled with first-quality pairs, which is more transparency than some outlet retailers offer. Reviewers also report that genuine "Made in USA" pairs surface here occasionally at a fraction of newbalance.com’s price, for shoppers willing to check back often rather than buy on a schedule.',
    'Shipping within the US is free above a $99 order, or a flat $9.95 below that. Returns run within a 30-to-45-day window depending on which of the company’s own pages you read, and carry a roughly $9.99 restocking fee per item on top of return postage that the buyer pays — a cost that can eat a large share of the discount on a single pair of shoes. The Better Business Bureau profile lists a documented pattern of complaints about undelivered orders, wrong items shipped and delayed refunds, worth reading before buying anything time-sensitive.',
  ],
  facts: [
    { label: 'Relationship to NB', value: 'Owned by New Balance' },
    { label: 'Ships to', value: 'US addresses only' },
    { label: 'Return window', value: '30–45 days (sources vary)' },
    { label: 'Restocking fee', value: '~$9.99 per item' },
  ],
  plans: {
    title: 'How the discounts and fees stack up',
    note: 'Free shipping only kicks in above a threshold, and every return costs a flat restocking fee on top of postage you pay yourself — factor both into whether the markdown is still worth it.',
    items: [
      {
        name: 'Standard markdown stock',
        price: 'Up to 70% off original NB pricing',
        detail:
          'Past-season and discontinued New Balance styles at outlet pricing — most of the catalogue, including occasional "seconds" clearly disclosed as such.',
        pick: true,
      },
      {
        name: 'Final sale / clearance',
        price: 'Deepest discounts, no returns',
        detail:
          'A dedicated final-sale section carries the steepest markdowns of all, but every purchase there is non-returnable, full stop.',
      },
      {
        name: 'Standard shipping',
        price: 'Free over $99, else a flat $9.95',
        detail:
          'One flat domestic rate below the threshold; there is no membership tier here that waives it the way newbalance.com’s does.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely part of New Balance, not a copycat',
      body: 'It began as an independent reseller of NB surplus stock, then New Balance Athletics bought the business itself in the early 2000s. It is the brand’s own outlet channel now, not a lookalike trading on the name.',
    },
    {
      title: 'Deep, honestly-labelled discounts',
      body: 'Markdowns run as steep as 70 percent off original pricing, and cosmetic-flaw "seconds" stock is disclosed as such rather than mixed in unlabelled with first-quality pairs.',
    },
    {
      title: '"Made in USA" stock turns up here too',
      body: 'Reviewers report that premium domestic-manufactured New Balance pairs surface in the outlet occasionally, at a fraction of the standard price, for shoppers willing to check back often.',
    },
    {
      title: 'Free shipping is achievable on a normal order',
      body: 'The $99 threshold is modest if you are buying two pairs of shoes, and the flat $9.95 fallback below that is cheap compared with most outlet retailers.',
    },
  ],
  cons: [
    {
      title: 'A documented pattern of fulfilment complaints',
      body: 'The Better Business Bureau profile lists a pattern of complaints alleging undelivered orders, wrong items shipped, delayed refunds and cancelled orders — worth reading before buying anything time-sensitive.',
    },
    {
      title: 'Returns cost you twice',
      body: 'A roughly $9.99 restocking fee applies per item on top of return postage, which the shopper pays. On a discounted pair of shoes, that can eat a large share of the saving.',
    },
    {
      title: 'US shipping only, and the outlet store itself is gone',
      body: 'There is no direct international shipping, and the brand’s dedicated Fenton, Missouri outlet store has closed — this is now an online-only clearance channel, not a place you can walk into.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'weighed against real discounts and genuine NB stock, marked down for the BBB-documented fulfilment complaints and the double cost of returns',
    },
  ],
  bestFor: [
    'US-based shoppers who know their New Balance size and want a lower price than retail',
    'Buyers happy with past-season or discontinued styles rather than the newest release',
    'Anyone willing to check back regularly for restocks of the "Made in USA" line',
    'Shoppers who read the final-sale terms before checking out on clearance stock',
  ],
  notFor: [
    'International shoppers — there is no direct shipping outside the US',
    'Anyone who wants the current season’s styles or a full size run in stock',
    'Buyers who cannot tolerate a slow or unresponsive order — the BBB complaint pattern is real',
  ],
  faq: [
    {
      q: 'Is Joe’s New Balance Outlet actually run by New Balance?',
      a: 'Yes. It started life as an independent third-party reseller of surplus New Balance stock, but New Balance Athletics bought the business in the early 2000s. It now operates as the brand’s own official clearance channel rather than an unaffiliated outlet using the name.',
    },
    {
      q: 'Does Joe’s ship outside the United States?',
      a: 'No — the site is set up for US shipping addresses only, and there is no official international checkout. Some shoppers route orders through third-party package-forwarding services instead, but that sits outside Joe’s own policy and adds cost and risk.',
    },
    {
      q: 'What is the return policy, and what does it cost?',
      a: 'Returns are accepted within a window the company states as somewhere between 30 and 45 days depending on which of its own pages you check, and carry a roughly $9.99 restocking fee per item. The shopper also pays return postage, so a returned pair can cost more than expected.',
    },
    {
      q: 'Is the stock genuine, unworn New Balance product?',
      a: 'It is genuine New Balance stock — past-season, discontinued or overstock styles — and the company discloses cosmetic-flaw "seconds" as such rather than mixing them in unlabelled. This research did not turn up substantiated counterfeit complaints, only the disclosed-seconds practice.',
    },
    {
      q: 'Is Joe’s a good source for the "Made in USA" line?',
      a: 'Sometimes. Reviewers report that premium domestically-manufactured pairs do turn up here at outlet prices, but stock is unpredictable and popular sizes sell out fast — it rewards checking back often rather than shopping to a fixed list.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'joesnewbalanceoutlet.com',
}
