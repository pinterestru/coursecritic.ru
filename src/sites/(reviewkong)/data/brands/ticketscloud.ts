/**
 * Brand page data for Ticketscloud (route: /brands/ticketscloud).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.ticketscloud.com/about-us — what it sells, positioning, copyright range
 *   - https://tracxn.com/d/companies/ticketscloud/__4Teust4yqRhxLznPoMQUl9IUNGZOZ3GnvUQv1Zw9oPE
 *     — founding year (2014), Moscow HQ, MTS acquisition timeline
 *   - https://support.ticketscloud.com (indexed via search) — recommended
 *     commission/service-fee split and the lower negotiated-volume rate
 *   - https://www.tbank.ru/reviews/company/ticketscloud/16519/ — ticket-buyer
 *     aggregate rating and volume (opened directly)
 *   - https://zoon.ru/msk/business/ticketscloud/reviews/ — business/organiser
 *     aggregate rating and volume (opened directly)
 *
 * ⚠️ Fee percentages are described as Ticketscloud's own "recommended" default
 * and a negotiated volume rate, not a fixed public rate card — re-verify with
 * Ticketscloud directly before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ticketscloud: BrandPage = {
  slug: 'ticketscloud',
  providerId: 'ticketscloud',
  metaTitle: 'Ticketscloud review 2026 — fees, features, who it serves',
  metaDescription:
    'An independent look at Ticketscloud, the Russian ticketing platform MTS now owns: what it charges organizers, what it covers, and who should look elsewhere.',
  intro:
    'Ticketscloud is a ticketing and event-management platform built for organisers in Russia: seating, cloud box office, a scanner app and an audience app called Vibeapp, sold on a commission plus service-fee model rather than a flat licence. Majority owned by the telecoms group MTS since 2023, it competes for Russian promoters, venues and festivals rather than for an international audience — read this before assuming it works the way a Western ticketing SaaS does.',
  about: [
    'Ticketscloud launched in 2014 as an events-ticketing platform for the Russian market, giving organisers a way to sell tickets, manage seating charts, and run a mobile box office without stitching together separate tools. It grew into a wider event-management suite: an open sales platform, promotion tools, online analytics dashboards, and Vibeapp, a companion app that hands ticket-holders a digital ticket with a QR code rather than a printed one. Tracxn and company filings list Moscow as its home base, and Russian telecoms group MTS bought a stake in 2023 before taking full ownership in December 2024.',
    'The commercial model is a commission plus a service fee charged per ticket, not a flat subscription. Ticketscloud’s own help centre cites a starting point of around 4% including card processing, with a common recommended split of roughly 10% commission and 10% service fee that organisers can adjust — for example passing the whole fee to the buyer to make the ticket free for themselves. That flexibility helps a small venue running one gig and a festival running fifty different events, but it also means the price a given organiser pays is negotiated, not published as one fixed number.',
    'For anyone outside Russia the takeaway is simple: this is a domestic tool for a domestic market, priced and supported in Russian, integrated with Russian payment rails, and not a platform an international festival would default to. Ticketscloud’s own marketing leans on scale — “thousands” of organisers — without publishing a precise client count, plus seat-based ticketing for venues with assigned seating and a push into AI-driven sales analytics. Read it as a capable, MTS-backed ticketing stack built specifically for Russian promoters, not as a global Eventbrite alternative.',
  ],
  facts: [
    { label: 'Founded', value: '2014' },
    { label: 'Market', value: 'Russia (Russian-language)' },
    { label: 'Ownership', value: 'Majority owned by MTS' },
    { label: 'Pricing model', value: 'Commission + service fee' },
  ],
  plans: {
    title: 'How organisers are charged',
    note: 'There is no public rate card — the figures below are Ticketscloud’s own stated defaults and starting points, and the number any given organiser actually pays is negotiated.',
    items: [
      {
        name: 'Standard split',
        price: 'Around 10% commission + 10% fee',
        detail:
          'Ticketscloud’s help centre cites this as its recommended default: roughly 10% platform commission plus a 10% service fee, both configurable.',
        pick: true,
      },
      {
        name: 'Fee passed to buyer',
        price: 'Free for the organiser',
        detail:
          'Organisers can set commission at 0% and shift the whole service fee onto the ticket buyer, a common practice on the platform.',
      },
      {
        name: 'Volume-negotiated rate',
        price: 'From around 4%, by negotiation',
        detail:
          'Ticketscloud states pricing can start near 4% including card processing for higher-volume organisers, but the number is negotiated case by case, not published as a rate card.',
      },
    ],
  },
  pros: [
    {
      title: 'Full event-ops stack, not just a checkout button',
      body: 'Seating charts, a cloud box office, a scanner app and a companion audience app (Vibeapp) all ship as one product, so an organiser is not stitching together separate vendors for entry and analytics.',
    },
    {
      title: 'Fee structure organisers can actually shape',
      body: 'Commission and service fee are configurable per deal, down to routing the entire fee to the buyer so the organiser keeps 100% of the ticket’s face value.',
    },
    {
      title: 'Backed by a telecoms giant, not a startup running on fumes',
      body: 'MTS, one of Russia’s largest telecoms and tech groups, took full ownership in December 2024, giving the platform a resourced parent rather than the funding uncertainty smaller ticketing startups carry.',
    },
    {
      title: 'Built for the market it actually serves',
      body: 'Interface, support and payment rails are tuned for Russian organisers and Russian card networks, which is exactly the right fit if that is your market and exactly the wrong one if it is not.',
    },
  ],
  cons: [
    {
      title: 'Pricing is negotiated, not published',
      body: 'There is no public rate card. The 10%+10% figure quoted by Ticketscloud’s own help centre is a “recommended” default, and the real number for any given organiser depends on a conversation, not a page you can check.',
    },
    {
      title: 'Its own public ratings disagree with each other',
      body: 'T-Bank’s review section shows 4.8 from ticket buyers praising fast delivery, while Zoon’s business-review section shows 1.6 from reviews dominated by refund and service-fee complaints. Read both before trusting either headline number.',
    },
    {
      title: 'Built for Russia, unusable as a global tool',
      body: 'Support, documentation and payment integrations assume a Russian organiser. Anyone running events for an international audience, or needing non-Russian payment rails, should look at a global platform instead.',
    },
  ],
  reputation: [
    {
      source: 'T-Bank Reviews (ticket buyers)',
      value: 4.8,
      note: '8,943 ratings, mostly praising delivery speed',
    },
    {
      source: 'Zoon.ru (business reviews)',
      value: 1.6,
      note: '60 reviews, dominated by refund and fee complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our own read of its fee structure, market fit and sharply divided public reputation',
    },
  ],
  bestFor: [
    'Russian event organisers who want seating, box office and analytics in one product',
    'Promoters happy to negotiate their own commission and service-fee split',
    'Venues that want ticket-holders to get a QR-coded digital ticket via Vibeapp',
    'Anyone already inside the MTS ecosystem in Russia',
  ],
  notFor: [
    'International organisers outside Russia — support and payment rails are built for the domestic market',
    'Anyone who wants a published, fixed rate card instead of a negotiated fee',
    'Ticket buyers wary of per-ticket service fees, a recurring complaint in its own reviews',
  ],
  faq: [
    {
      q: 'Is Ticketscloud a ticket marketplace or software for organisers?',
      a: 'Software for organisers, primarily. It provides the sales platform, seating tools and scanner app that an organiser uses to sell and manage tickets; Vibeapp is the consumer-facing app ticket-holders see. You do not browse a Ticketscloud storefront to buy tickets the way you would on Ticketmaster.',
    },
    {
      q: 'How much does Ticketscloud charge?',
      a: 'There is no published rate card. Its help centre describes a recommended default of around 10% commission plus a 10% service fee, both configurable, and cites pricing that can start near 4% including card processing for higher-volume organisers — but the actual number is negotiated.',
    },
    {
      q: 'Who owns Ticketscloud?',
      a: 'Russian telecoms and technology group MTS, which took a stake in 2023 and completed full ownership in December 2024. That makes it part of a large domestic conglomerate rather than an independent startup.',
    },
    {
      q: 'Does Ticketscloud work outside Russia?',
      a: 'Its own materials, support and payment integrations are built around the Russian market. Organisers running events for an international audience, or needing non-Russian payment rails, are better served by a global platform.',
    },
    {
      q: 'Why do Ticketscloud’s ratings look so different depending on where you check?',
      a: 'Different aggregators sample different people: ticket buyers on T-Bank’s review section rate the checkout experience highly, while organisers and consumers leaving business reviews on Zoon focus on refund and fee disputes. Read the specific complaints, not just the star average.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ticketscloud.com',
}
