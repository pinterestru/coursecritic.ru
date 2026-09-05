/**
 * Brand page data for AbhiBus (route: /brands/abhibus).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.phocuswire.com/Ixigo-acquires-Abhibus and
 *     https://en.wikipedia.org/wiki/Ixigo — founded 2008 by Sudhakar Chirra
 *     Reddy and Sasya Chirra, acquired by ixigo (Le Travenues Technology Ltd)
 *     in a cash-and-stock deal in August 2021
 *   - https://www.abhibus.com/about and https://www.abhibus.com/bus-ticket-booking
 *     — scale claims (bus partner count, route count) and that flight, train
 *     and hotel booking have been added alongside the core bus product
 *   - https://www.abhibus.com/abhibusFreeCancellationPolicy/ and
 *     https://www.abhibus.com/abhi-assured — the 6-hour cancellation cutoff,
 *     the non-refundable convenience fee, and the Abhi Assured operator-side
 *     cancellation/delay compensation programme
 *   - https://www.abhibus.com/abhicash — the AbhiCash wallet, which is the
 *     platform's only loyalty mechanism (no tiered points programme found)
 *   - Google Play listing for "AbhiBus: Book Bus Tickets" — app rating and
 *     review volume. AbhiBus's Trustpilot listing carries too few reviews
 *     (around 40) to be a meaningful aggregate score and was not used here.
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const abhibus: BrandPage = {
  slug: 'abhibus',
  providerId: 'abhibus',
  metaTitle: 'AbhiBus review 2026 — cancellations, fees and Abhi Assured',
  metaDescription:
    'An independent AbhiBus review: what happens when an operator cancels or delays your bus, the fee that never comes back, and why there is no points programme.',
  intro:
    'AbhiBus is India’s largest dedicated bus-ticketing platform, now owned by ixigo, aggregating thousands of private operators and state transport corporations onto one booking flow. It has since added trains, flights and hotels, but bus remains the core product and the one worth judging it on. The most useful thing to understand before booking is what happens when the operator, not you, cancels or delays the service.',
  about: [
    'AbhiBus was founded in 2008 by Sudhakar Chirra Reddy and Sasya Chirra as a bus-ticketing and fleet-technology business, selling e-ticketing, vehicle-tracking and passenger-information systems to operators as well as running the consumer-facing booking site itself. In August 2021, ixigo (Le Travenues Technology Ltd) acquired the company in a cash-and-stock deal, and Abhibus’s founding team joined ixigo as part of the transaction; the brand, technology and customer-facing product continue to operate under that new ownership rather than being retired.',
    'The platform’s scale is in aggregation rather than fleet ownership: it lists inventory from thousands of private bus operators alongside several state transport corporations and a number of international routes, giving it one of the widest route networks of any Indian bus booking site currently operating. It has since layered on train, flight and hotel booking under the same ixigo-owned umbrella, but those are additions to a bus-first product rather than the reason most people open the app in the first place.',
    'AbhiBus runs Abhi Assured, a programme that pays out when the bus operator — not the passenger — cancels or delays a service, reimbursing up to a stated multiple of the ticket fare rather than leaving the passenger to chase the operator directly for compensation. There is no tiered loyalty scheme sitting alongside it; instead, cancellations, refunds and promotional cashback are all credited to AbhiCash, an in-app wallet with no stated expiry on the balance, redeemable in full or in part against any future booking made on the platform.',
  ],
  facts: [
    { label: 'Founded', value: '2008' },
    { label: 'Owner', value: 'ixigo, since August 2021' },
    { label: 'Scale', value: '6,200+ bus partners' },
    { label: 'Loyalty', value: 'AbhiCash wallet, no tiers' },
  ],
  plans: {
    title: 'What you actually pay beyond the fare',
    note: 'The convenience fee is charged on every booking and is not refunded on cancellation, whichever side cancels. The optional Travel Guarantee add-on is a separate, small per-ticket charge.',
    items: [
      {
        name: 'Standard bus booking',
        price: 'Fare set by the operator plus a convenience fee',
        detail:
          'The convenience fee is non-refundable in every cancellation scenario, including when the operator cancels the service.',
        pick: true,
      },
      {
        name: 'Cancel by the passenger',
        price: 'Refund governed by a 6-hour cutoff',
        detail:
          'Cancel 6+ hours before departure and the ticket amount is reimbursed per AbhiBus policy; inside that window the operator’s own cancellation terms decide the refund.',
      },
      {
        name: 'Travel Guarantee add-on',
        price: 'A small fee from roughly ₹9 at booking',
        detail:
          'Pays a multiple of the ticket fare if the operator cancels the service, on top of the standard 100% refund AbhiBus already gives for operator-side cancellations.',
      },
      {
        name: 'AbhiCash wallet',
        price: 'Free, credited automatically',
        detail:
          'Refunds, cashback and promotional credit land here rather than in a points scheme. Balance has no stated expiry and can be applied to any future booking.',
      },
    ],
  },
  pros: [
    {
      title: 'The widest bus inventory of any dedicated Indian platform',
      body: 'Thousands of private operators plus multiple state transport corporations sit on one single booking flow, giving a breadth of route and operator choice that smaller regional apps simply cannot match on their own.',
    },
    {
      title: 'A named policy for the scenario that matters most',
      body: 'Abhi Assured specifically covers operator-side cancellations and delays, the failure mode passengers actually fear on a long-distance bus route, rather than only covering cancellations the passenger themselves initiates.',
    },
    {
      title: 'A strong, high-volume app rating',
      body: 'The Android app holds a 4.8-star rating from well over half a million reviews, a genuinely large sample size for a regional travel-category app rather than a handful of curated testimonials.',
    },
    {
      title: 'AbhiCash keeps refunds usable rather than stuck in limbo',
      body: 'Crediting cancellations and cashback straight to an in-app wallet with no stated expiry means passengers do not lose value even when a full cash refund back to source would take longer to process.',
    },
  ],
  cons: [
    {
      title: 'No loyalty programme beyond a cashback wallet',
      body: 'There are no status tiers, no accruing points and no escalating rewards for frequent bookers, just AbhiCash credit. Anyone comparing this to a proper loyalty scheme elsewhere on this site will find it thin.',
    },
    {
      title: 'The convenience fee is kept no matter who cancels',
      body: 'Even when AbhiBus refunds the full ticket fare because the operator itself cancelled the trip, its own convenience fee is still not returned, an odd inconsistency in an otherwise fairly passenger-favourable policy.',
    },
    {
      title: 'Service quality still depends on the operator, not AbhiBus',
      body: 'AbhiBus aggregates other companies’ buses rather than running its own fleet. Delays, poor vehicle condition or a rude driver are the operator’s doing, and reviewers report AbhiBus and the operator each blaming the other when it happens.',
    },
  ],
  reputation: [
    { source: 'Google Play', value: 4.8, note: 'over 590,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'strong app rating and a genuinely useful operator-cancellation policy, marked down for the thin loyalty offer',
    },
  ],
  bestFor: [
    'Intercity bus travel across India where operator choice matters more than brand',
    'Passengers who want a named policy for operator-side cancellations, not just their own',
    'Anyone happy to receive refunds as reusable AbhiCash rather than needing cash back',
    'Bookings on state transport corporation routes alongside private operators, on one app',
  ],
  notFor: [
    'Travellers who want an accruing, tiered loyalty programme rather than wallet credit',
    'Bookings inside the 6-hour cancellation cutoff, where the operator’s own terms decide the refund',
    'Anyone who wants their convenience fee back on top of a full fare refund',
  ],
  faq: [
    {
      q: 'What happens if the bus operator cancels my trip?',
      a: 'AbhiBus refunds the full ticket amount automatically under its standard policy, without requiring the passenger to chase the operator directly, and the optional Travel Guarantee add-on pays out a further multiple of the fare on top if you bought it at the time of booking.',
    },
    {
      q: 'Can I get a refund if I cancel close to departure?',
      a: 'AbhiBus’s own free-cancellation window closes 6 hours before scheduled departure of the bus. Cancel after that cutoff and the refund amount is instead governed entirely by the individual operator’s own cancellation policy, rather than by AbhiBus’s standard passenger-friendly terms described above.',
    },
    {
      q: 'Is the convenience fee ever refunded?',
      a: 'No. It is charged on every booking regardless of route, operator or ticket value, and it is not refunded in any cancellation scenario at all, including cases where AbhiBus refunds the entire fare because the operator itself cancelled the service.',
    },
    {
      q: 'Does AbhiBus have a rewards or points programme?',
      a: 'No tiered scheme exists on the platform at all, and none is currently advertised. Cashback, promotional credit and cancellation refunds are all paid directly into AbhiCash, an in-app wallet with no stated expiry, rather than accruing separately as membership status levels or redeemable points.',
    },
    {
      q: 'Who owns AbhiBus?',
      a: 'ixigo, formally known as Le Travenues Technology Ltd, acquired AbhiBus in a cash-and-stock deal completed in August 2021. The founding team joined ixigo directly as part of that transaction, and AbhiBus continues to operate today as a distinct consumer-facing brand.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'abhibus.com',
}
