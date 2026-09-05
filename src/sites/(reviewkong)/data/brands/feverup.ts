/**
 * Brand page data for Fever (route: /brands/feverup).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/Fever_(app) — founding (Barcelona, around
 *     2011, founder Pep Gómez), headquarters, funding history, scale
 *   - https://newsroom.feverup.com/en-US/about/ — business model, "Fever
 *     Originals" concept, country/city reach
 *   - https://support.feverup.com/hc/en-us/articles/46562400143636-How-do-I-request-my-refund
 *     and https://feverpartners.zendesk.com/hc/en-us/articles/24535678606738-How-to-cancel-a-ticket
 *     — refund policy (mostly final sale), reschedule exceptions, the
 *     Monday-after deadline for Fever-initiated event changes
 *   - https://apps.apple.com/us/app/fever-events-tickets/id497702817 — App
 *     Store rating and ratings count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 * NOTE: Fever's founding date varies across public sources (2011–2014
 * depending on whether it dates from incorporation, product launch or the
 * management team forming) — "around 2011" here follows Wikipedia, the most
 * specific single source found; re-check before publishing.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const feverup: BrandPage = {
  slug: 'feverup',
  providerId: 'feverup',
  metaTitle: 'Fever review 2026 — Originals, refunds and cities',
  metaDescription:
    'An independent Fever review: what makes the Originals catalogue different, why most tickets are final sale, and how refunds and reschedules actually work.',
  intro:
    'Fever is not a tours-and-attractions marketplace like Klook or Viator — it is a ticketing platform that produces much of its own catalogue, including the Candlelight concert series, under the “Fever Originals” banner, alongside listings for local events and nightlife. The trade-off for a genuinely different catalogue is that tickets are mostly final sale, with rescheduling the exception rather than a right, and refunds go through a support form rather than a one-click cancel button.',
  about: [
    'Fever traces back to around 2011, when founder Pep Gómez incorporated the company in Barcelona before relocating its base to New York; it now also keeps a hub in Madrid. Its model differs from the Asia-first marketplaces: rather than only reselling other operators’ tours, Fever produces a large share of its own ticketed formats — Candlelight concerts and various immersive, themed experiences among them — under the “Fever Originals” banner, alongside third-party listings for local events, exhibitions and nightlife.',
    'The app is built around discovery by city rather than search by attraction: open it and see what is on nearby this week, rather than looking up a named tour. Fever says it reaches over 40 countries and hundreds of cities. Checkout is the same as any ticketing platform — pick a time slot, pay in full — but the sale is final on most listings, with a reschedule option, where offered, stated on that specific experience’s page rather than a general Fever policy.',
    'Fever’s ownership of its Originals cuts both ways. Because it produces the event itself, there is no separate local operator to blame if something goes wrong, which in principle makes the company more directly accountable — but refund requests still go through a support form rather than self-service cancellation, and reviewers describe the process as slow specifically when an event is disrupted and many customers file at once. It suits a one-off city experience far better than it suits a conventional day-tour itinerary.',
  ],
  facts: [
    { label: 'Founded', value: 'Around 2011' },
    { label: 'HQ', value: 'Madrid / New York' },
    { label: 'Coverage', value: '40+ countries' },
    { label: 'Refunds', value: 'Mostly final sale' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Fever is free to browse; tickets are paid in full at checkout and, for most experiences, that sale is final — refunds are the exception, not the rule.',
    items: [
      {
        name: 'Standard ticket',
        price: 'Pay in full, final sale',
        detail:
          'The default for most listings: no free-cancellation window. Some experiences allow a reschedule up to about 48 hours out, stated on that experience’s own page.',
        pick: true,
      },
      {
        name: 'Fever Originals',
        price: 'Same checkout, in-house event',
        detail:
          'Experiences Fever produces itself — Candlelight concerts and similar formats — rather than reselling a third-party operator’s listing. Quality control sits entirely with Fever.',
      },
      {
        name: 'Event changes and cancellations',
        price: 'Voucher or refund, Fever-initiated',
        detail:
          'If Fever itself postpones, relocates or cancels an event, it offers a voucher or refund — but you must contact support by the Monday after, or the window closes.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely different catalogue',
      body: 'Fever produces its own events — Candlelight concerts, themed pop-ups, immersive exhibitions — rather than only reselling third-party tours, so its listings barely overlap with Klook, KKday or Viator.',
    },
    {
      title: 'One company owns the whole experience for Originals',
      body: 'Because Fever produces its own events rather than reselling someone else’s, there is no local operator to blame when something goes wrong — accountability is clearer, at least in principle.',
    },
    {
      title: 'Strong app-store reputation',
      body: 'A 4.8 rating from around 72,000 App Store raters suggests the discovery and checkout experience itself works well for most people.',
    },
    {
      title: 'City-by-city discovery, not just search',
      body: 'The app is built around browsing what is on in your city right now rather than searching for a specific attraction, which suits spontaneous plans better than a marketplace format.',
    },
  ],
  cons: [
    {
      title: 'Tickets are mostly non-refundable',
      body: 'Fever’s general policy is final sale once bought. A reschedule option exists on some experiences up to about 48 hours before, but it is the exception and easy to miss on the listing.',
    },
    {
      title: 'Not a tours-and-attractions marketplace',
      body: 'Fever is built around ticketed entertainment and its own produced events, not day tours, transfers or attraction tickets — it will not replace Klook or Viator for sightseeing.',
    },
    {
      title: 'Refund requests go through a support form, not self-service',
      body: 'There is no one-click cancellation for most tickets; you file a request through the help centre and wait, and reviewers describe the process as slow when an event itself is disrupted.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: 'around 72,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across catalogue originality, refund flexibility and support reports',
    },
  ],
  bestFor: [
    'City-break travellers wanting local, one-off events rather than day tours',
    'Anyone after immersive or themed experiences unique to Fever, like Candlelight',
    'People comfortable buying a ticket knowing it is final sale',
    'Travellers who want one company accountable for a produced, in-house event',
  ],
  notFor: [
    'Anyone who wants a standard free-cancellation window before buying',
    'Travellers looking for day tours, transfers or attraction tickets',
    'Buyers who want to compare an identical listing across several sites',
  ],
  faq: [
    {
      q: 'Is Fever legit?',
      a: 'Yes — a well-funded live-entertainment platform operating in more than 40 countries, best known for producing its own ticketed formats such as Candlelight concerts. Its App Store rating is strong. The main thing to know before buying is that most tickets are final sale.',
    },
    {
      q: 'Can I get a refund on a Fever ticket?',
      a: 'Generally no — most tickets are non-refundable once purchased. Some experiences allow a reschedule up to roughly 48 hours before the date, stated on that listing. If Fever itself cancels, postpones or relocates an event, contact support by the following Monday for a voucher or refund.',
    },
    {
      q: 'What are Fever Originals?',
      a: 'Experiences Fever produces and runs itself — Candlelight concerts and other in-house formats — rather than reselling a third-party operator’s tour. Because Fever controls the production directly, quality and accountability sit with one company rather than a local operator it merely lists.',
    },
    {
      q: 'Does Fever sell day tours and attraction tickets like Klook or Viator?',
      a: 'Not really — Fever’s catalogue is built around ticketed entertainment and events, particularly ones it produces itself. For a conventional day tour, museum ticket or airport transfer, a marketplace like Klook or Viator is the better fit.',
    },
    {
      q: 'How do I request a refund or reschedule?',
      a: 'Through Fever’s help-centre support form rather than self-service in the app — you provide the ticket ID, event and date, and describe the issue. Reviewers report this can be slow, particularly when an entire event is disrupted and many customers file at once.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'feverup.com',
}
