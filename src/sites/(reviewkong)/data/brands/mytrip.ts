/**
 * Brand page data for Mytrip (route: /brands/mytrip).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Etraveli_Group — Etraveli Group's brand
 *     portfolio (Gotogate, Flightnetwork, Mytrip and others), 2007 founding
 *     via the Seat24/SRG merger, Stockholm HQ, the blocked 2023 Booking
 *     Holdings acquisition attempt
 *   - https://www.mytrip.com/support-faq/changes-and-cancellations-1352dfbf/what-is-the-service-fee-cf6ad8f6
 *     and https://www.mytrip.com/terms-conditions-post-booking — the
 *     per-passenger service fee for airline-side changes/cancellations, the
 *     separate administrative fee, and the Flexible Ticket waiver
 *   - Trustpilot listing for mytrip.com — "Average" rating and review volume
 *   - /brands/gotogate.ts (this site, same research pass) — corroborates
 *     Mytrip's status as an Etraveli Group sister brand to Gotogate and
 *     Flightnetwork sharing back-end booking infrastructure
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const mytrip: BrandPage = {
  slug: 'mytrip',
  providerId: 'mytrip',
  metaTitle: 'Mytrip review 2026 — cheap fares, an Average Trustpilot score',
  metaDescription:
    'An independent Mytrip review: how the Etraveli-owned flight agency prices fares, what its service fee actually covers, and why its Trustpilot rating sits at Average.',
  intro:
    'Mytrip is a flight-booking agency owned by Etraveli Group, the same Swedish company behind Gotogate — and the family resemblance matters, because reviewers report similar complaints across both storefronts. Fares can undercut booking direct with the airline. The trade-off is a per-passenger service fee on any change or cancellation, and a Trustpilot record that rates only "Average" on a high review volume.',
  about: [
    'Mytrip is a consumer storefront of Etraveli Group, a Stockholm-headquartered travel technology company formed in 2007 when Seat24, a Swedish flight-booking site, merged with the travel agency SRG. Etraveli also owns Gotogate and Flightnetwork as sister brands, sharing the same back-end booking infrastructure while operating under separate names, pricing and, in practice, separate — though comparably mixed — reputations across independent review sites, app stores and regional Trustpilot domains worldwide.',
    "As an online travel agent rather than an airline, Mytrip's core function is comparing and reselling fares across many carriers from one checkout. That gives it route flexibility a single airline's own site cannot match, particularly for itineraries that combine two or more airlines on one ticket across separate alliances. It does not, however, give Mytrip control over the airline's own fare rules once a ticket is issued, and that distinction matters most after a booking.",
    "Mytrip charges a per-passenger service fee to handle communication with the airline on any post-booking change or cancellation, on top of whatever the airline itself charges under its own fare rules. A Flexible Ticket add-on, bought at the time of booking, waives Mytrip's own administrative fees on later changes — it does not waive the airline's fare-rule charges, which stay outside Mytrip's control either way, whatever add-on was purchased upfront.",
  ],
  facts: [
    { label: 'Parent company', value: 'Etraveli Group (Sweden)' },
    { label: 'Group founded', value: '2007, Seat24/SRG merger' },
    { label: 'Sister brands', value: 'Gotogate, Flightnetwork' },
    { label: 'Change/cancel fee', value: 'Per passenger, on top of airline' },
  ],
  plans: {
    title: 'How the pricing works',
    note: "The headline fare is the airline's price plus Mytrip's own margin; any later change adds Mytrip's per-passenger service fee to whatever the airline charges, unless a Flexible Ticket was bought upfront.",
    items: [
      {
        name: 'Standard fare',
        price: "Airline fare plus Mytrip's booking margin",
        detail:
          'The default search result. Compare the total against the airline booking directly, since the headline fare on the results page is not always the full story.',
        pick: true,
      },
      {
        name: 'Flexible Ticket',
        price: 'An optional add-on priced per itinerary at checkout',
        detail:
          "Waives Mytrip's own administrative fees on a later change or cancellation. It does not override the airline's own fare rules or guarantee a full refund.",
      },
      {
        name: 'Post-booking change or cancellation',
        price: 'Airline fare-rule charge plus a per-passenger Mytrip service fee',
        detail:
          "Any name correction, date change or cancellation request handled by Mytrip's support team carries this fee stack unless a Flexible Ticket already waived Mytrip's side of it.",
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely competitive headline fares',
      body: 'Comparing across many airlines and combining carriers on one ticket lets Mytrip surface prices a single airline site cannot construct, particularly on connecting or multi-carrier routes.',
    },
    {
      title: 'Backed by a real, long-running travel technology group',
      body: "Etraveli Group's roots trace to 2000, and it is substantial enough that Booking Holdings once agreed to acquire it before regulators blocked the deal — this is an established company, not a fly-by-night storefront.",
    },
    {
      title: 'A named waiver for its own change fees',
      body: 'The Flexible Ticket add-on is a concrete, purchasable way to avoid at least Mytrip’s side of the fee stack on a later change, which is more than some agencies offer.',
    },
    {
      title: 'Transparent about what the service fee is for',
      body: "Mytrip's own support pages spell out that the service fee covers handling communication with the airline, rather than leaving the charge unexplained until it appears on a cancellation request.",
    },
  ],
  cons: [
    {
      title: 'Trustpilot rates it only "Average"',
      body: "Mytrip's main storefront sits at an Average rating on a very high review volume, with a large share of one-star reviews citing refund delays and unresponsive support — a pattern serious enough to weigh against the fare savings.",
    },
    {
      title: 'Fees stack on top of the airline, not instead of it',
      body: "A change or cancellation is never just the airline's own fee. Mytrip's per-passenger service fee applies on top, and reviewers frequently describe this as poorly flagged until the request is already in progress.",
    },
    {
      title: 'Shares a support reputation with its Etraveli sister brands',
      body: 'Mytrip runs on the same back-end as Gotogate and Flightnetwork, and public complaints about slow refunds and hard-to-reach support recur across all three storefronts, not just this one.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.9, note: '"Average", tens of thousands of reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.5,
      note: 'competitive fares held back by a weak support and refund record',
    },
  ],
  bestFor: [
    'Price-driven flight searches spanning multiple airlines or connecting itineraries',
    'Travellers comfortable self-servicing a booking through a web form rather than a phone line',
    'Bookers who buy the Flexible Ticket add-on when their plans are genuinely uncertain',
    'Anyone who has read the specific fare rules for their ticket before assuming a cancellation means a full refund',
  ],
  notFor: [
    'Anyone who wants a fast, reliably resolved refund if a flight is cancelled or changed',
    'Travellers who expect phone support as a fallback when something goes wrong mid-trip',
    'Bookings likely to need a name correction or date change — the fee stack adds up quickly',
  ],
  faq: [
    {
      q: 'Is Mytrip a legitimate company?',
      a: 'Yes. It is a real consumer brand of Etraveli Group, a Swedish travel technology company operating since 2007 that also owns Gotogate and Flightnetwork. Legitimacy is not the concern reviewers raise; refund speed and support responsiveness are, and those are worth reading up on before you book.',
    },
    {
      q: "Why is Mytrip's Trustpilot score only 'Average'?",
      a: 'A large share of one-star reviews cite delayed refunds and difficulty reaching support after a flight change or cancellation. The rating is independently verifiable and sits well below what the headline fares alone would suggest, which is exactly the gap this review exists to flag.',
    },
    {
      q: 'What is the service fee for?',
      a: 'Mytrip charges a per-passenger service fee to handle communication with the airline on your behalf for any post-booking change or cancellation. It applies on top of whatever fee the airline itself charges under its own fare rules, so budget for both, not just one.',
    },
    {
      q: 'Does the Flexible Ticket guarantee a refund?',
      a: "No. It waives Mytrip's own administrative fees on a later change, but the airline's fare rules still govern whether a refund is available at all and how much of it comes back once the airline's own charges are deducted from whatever remains.",
    },
    {
      q: 'Is Mytrip the same company as Gotogate?',
      a: 'They are sister brands under the same parent, Etraveli Group, sharing back-end booking infrastructure but operating as separate storefronts with their own branding and pricing. Their published service reputations are broadly similar, which is worth knowing if you are choosing between the two.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'mytrip.com',
}
