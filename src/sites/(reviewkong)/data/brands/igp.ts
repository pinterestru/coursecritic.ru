/**
 * Brand page data for IGP (route: /brands/igp).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.igp.com/all-about-igp — city/country coverage, delivery
 *     speed claims, scale (20M+ gifts delivered)
 *   - https://www.igp.com/faq — same-day cutoff, cancellation, refund,
 *     substitution and payment-method rules
 *   - https://www.igp.com/igp-select — IGP Select membership price and terms
 *   - https://en.wikipedia.org/wiki/IGP_(e-gifting_retailer) — founding year,
 *     2012 relaunch under Tarun Joshi, headquarters, funding rounds
 *   - https://apps.apple.com/in/app/igp-gifts-flowers-cakes/id1470378219 —
 *     App Store rating and review count
 *   - https://www.trustpilot.com/review/www.igp.com — profile currently
 *     shows no TrustScore, flagged for a guidelines breach
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const igp: BrandPage = {
  slug: 'igp',
  providerId: 'igp',
  metaTitle: 'IGP review 2026 — India gifting, delivery windows, fees',
  metaDescription:
    'An independent IGP.com review: what the same-day and international delivery windows promise, what IGP Select costs, and why its Trustpilot score is hidden.',
  intro:
    'IGP is a Mumbai-based gifting retailer built around delivering flowers, cakes and hampers into India on a specific date, plus shipping abroad to family who cannot be there in person. The same-day and hyperlocal delivery claims are real for major cities. The catch is what "on a specific date" actually means once you read the fine print.',
  about: [
    'IGP started in 1999 as IndianGiftsPortal.com and was relaunched under the igp.com name in 2012 after entrepreneur Tarun Joshi acquired and rebuilt the business, which he still runs as founder and CEO. It has since raised outside funding, including a Series A led by DSG Consumer Partners and 9Unicorns and a Series B from Motilal Oswal Alternate Investment Advisors, both in 2022 — real institutional backing rather than a small unverified storefront.',
    "The core business is India-focused: flowers, cakes, hampers and personalised gifts delivered to Indian addresses, with same-day, 30-minute and 60-minute options advertised in major metros such as Mumbai, Delhi, Bangalore and Hyderabad. Roughly half of IGP's orders originate from outside India, sent by people abroad to family and friends back home, and the company also runs operations in the US, Singapore and the UAE to fulfil orders headed the other way, from those markets back into India.",
    'What differentiates IGP from a generic flower site is the honesty buried in its own FAQ: a courier-shipped gift\'s delivery date is described as "tentative," and hand-delivered flowers or cakes are re-attempted within 24 hours of the chosen date rather than guaranteed to the hour. That is a fair description of how last-mile gifting works in India, but it is worth reading before you promise someone a birthday delivery at a fixed time.',
  ],
  facts: [
    { label: 'Founded', value: '1999, relaunched 2012' },
    { label: 'Headquarters', value: 'Mumbai, India' },
    { label: 'Same-day cutoff', value: 'Order by 6pm (flowers/cakes)' },
    { label: 'Returns', value: 'No returns on perishables' },
  ],
  plans: {
    title: 'How delivery and membership are priced',
    note: 'International shipping is charged per destination and product, not a flat rate, so treat any headline figure as a starting point that changes at checkout.',
    items: [
      {
        name: 'Standard India delivery',
        price: 'Included in the product price',
        detail:
          "Same-day if flowers or cakes are ordered before 6pm; other categories ship on the date chosen, which IGP's own terms describe as tentative rather than guaranteed.",
        pick: true,
      },
      {
        name: 'Fixed-time or midnight delivery',
        price: 'Small surcharge, varies by item',
        detail:
          'Needs at least 24 hours notice and is not offered on every product, so confirm availability before promising someone a specific slot.',
      },
      {
        name: 'International delivery',
        price: 'Charged per country and product',
        detail:
          "Advertised to over 150 countries, though by IGP's own figures around a third of all orders are international and most of those land in roughly 90 countries in practice.",
      },
      {
        name: 'IGP Select membership',
        price: 'Around ₹99 for the first year',
        renews: 'Renews near the ₹999 list price after the intro rate',
        detail:
          '5% back on orders and free or discounted domestic delivery — the delivery discount does not apply to international orders — plus priority support.',
      },
    ],
  },
  pros: [
    {
      title: 'Real hyperlocal delivery in Indian metros',
      body: 'Same-day, 30-minute and 60-minute delivery windows are offered on flowers and cakes in major cities, which is genuinely useful for a last-minute birthday or anniversary gift.',
    },
    {
      title: 'Backed by real institutional money',
      body: 'Two funding rounds in 2022 from named venture firms, plus a 2012 relaunch under a named founder-CEO, put IGP on firmer footing than most gifting sites of its size.',
    },
    {
      title: 'IGP Select pays for itself quickly',
      body: 'At around ₹99 for the first year, two or three domestic orders with free delivery and 5% back likely cover the membership cost, if you order from India more than once.',
    },
    {
      title: 'Genuine reach for the Indian diaspora',
      body: 'Operations in the US, Singapore and the UAE, alongside delivery into over 90 countries in practice, make it one of the few sites built specifically for sending gifts home to India.',
    },
  ],
  cons: [
    {
      title: 'A chosen delivery date is not a promise',
      body: 'IGP\'s own FAQ calls courier delivery dates "tentative," and hand-delivered items are re-attempted within 24 hours of the date rather than guaranteed to arrive on it. Do not book it against a fixed event.',
    },
    {
      title: 'Its Trustpilot profile is currently flagged',
      body: 'IGP\'s main Trustpilot page shows no TrustScore, marked as a guidelines breach, alongside a long history of complaints about missed delivery windows and orders marked "delivered" that were not.',
    },
    {
      title: 'Payment options thin out for buyers abroad',
      body: 'Net banking and several wallets only work with Indian bank accounts, and cash on delivery is not offered at all, so an overseas buyer is limited to cards and PayPal.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS, India)',
      value: 4.7,
      note: '27k+ ratings on the IGP: Gifts, Flowers & Cakes app',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'strong app rating and real funding offset by a flagged Trustpilot profile and tentative delivery dates',
    },
  ],
  bestFor: [
    'Sending flowers, cakes or hampers to family in India from abroad',
    'Last-minute gifting in major Indian metros, where same-day delivery applies',
    'Buyers who will take an IGP Select membership for repeat domestic orders',
    'Anyone comfortable treating a delivery date as approximate, not fixed',
  ],
  notFor: [
    'A gift that absolutely must arrive at a specific hour for an event',
    'Buyers who want cash on delivery or non-Indian net banking',
    'Anyone put off by a Trustpilot profile currently missing its score',
  ],
  faq: [
    {
      q: 'Can I get a gift delivered the same day in India?',
      a: 'Yes, for flowers and cakes ordered before 6pm in cities IGP covers, and it also advertises 30- or 60-minute delivery in some metros. Other product categories, and orders placed after the cutoff, move to next-day delivery or the date you selected at checkout instead of same-day.',
    },
    {
      q: 'What happens if my chosen delivery date is missed?',
      a: "For flowers and cakes, IGP re-attempts delivery within 24 hours of the date you picked rather than treating the miss as a failed order outright. For courier-shipped gifts, the date is described in IGP's own terms as tentative, so build in slack if the timing genuinely matters to you.",
    },
    {
      q: 'Is IGP Select worth buying?',
      a: 'If you order from India more than once in a year, the roughly ₹99 introductory price is easily covered by the 5% back on orders and free or discounted domestic delivery. It renews near the ₹999 list price, so check the renewal figure at checkout before it quietly rolls over.',
    },
    {
      q: 'Why does IGP show no rating on Trustpilot?',
      a: "IGP's main Trustpilot profile currently displays no TrustScore at all, flagged for a breach of Trustpilot's guidelines rather than simply having too few reviews to score. Its App Store rating is a separate, independently maintained listing and is unaffected, remaining strong at last check.",
    },
    {
      q: 'Can international customers pay by cash on delivery?',
      a: 'No. Cash on delivery is not offered at all on IGP, and net banking is limited to Indian bank accounts rather than being available internationally. Buyers ordering from outside India are effectively limited to credit or debit cards and PayPal at checkout.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'igp.com',
}
