/**
 * Brand page data for Flight Network (route: /brands/flightnetwork).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Etraveli_Group and multiple M&A
 *     confirmations (mergr.com, phocuswire.com, etraveligroup.com press
 *     release) — Flight Network was acquired by Etraveli Group in 2019,
 *     making it a sister brand to Gotogate and Mytrip
 *   - https://www.bbb.org/ca/on/toronto/profile/travel-agency/flight-network-ltd-0107-1148264
 *     — Toronto, Ontario base, Travel Industry Council of Ontario licence,
 *     not BBB accredited, recorded complaints about pricing and support
 *   - https://help.flightnetwork.com/customer/en/portal/articles/1457637-changing-or-canceling-a-flight-booking
 *     and https://www.flightnetwork.com/rf/0/travel-conditions — most
 *     bookings are non-refundable/non-changeable once confirmed, changes
 *     must be requested at least 24 hours before travel, and both airline
 *     and Flight Network fees can apply on top of each other
 *   - Trustpilot listing for www.flightnetwork.com — "Average" rating and
 *     review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const flightnetwork: BrandPage = {
  slug: 'flightnetwork',
  providerId: 'flightnetwork',
  metaTitle: 'Flight Network review 2026 — fees, refunds and who owns it',
  metaDescription:
    'An independent Flight Network review: the Canadian flight agency now owned by Etraveli Group, its non-refundable-by-default booking terms, and where its Trustpilot score sits.',
  intro:
    'Flight Network started as a Toronto-founded online travel agency and has, since 2019, been owned by Etraveli Group, the same Swedish parent behind Gotogate and Mytrip. The fares can be competitive on long-haul and multi-airline routes. What buyers need to know first is that most tickets are treated as non-refundable and non-changeable the moment they are confirmed, with the burden on you to request any change well before departure.',
  about: [
    'Flight Network was founded in Canada and built its reputation as one of the country’s larger independently-run online travel agencies before Etraveli Group acquired it in 2019, folding it into the same corporate family as Gotogate and Mytrip. The acquisition gave Etraveli a stronger North American presence and gave Flight Network access to Etraveli’s wider airline-integration technology, though the storefront still operates under its own name, branding and Toronto-registered licence.',
    'As a flight agent rather than an airline, Flight Network compares fares across many carriers and issues the ticket on the airline’s behalf. Its own published travel conditions state that once a booking is confirmed, tickets are, by default, non-refundable and non-changeable — a stricter framing than some competitors use, and one genuinely worth reading in full before assuming a standard, more forgiving cancellation policy automatically applies to your particular fare.',
    'Where a change is possible, it typically needs to be requested at least 24 hours before travel, and any resulting change or cancellation can carry both the airline’s own fare-rule charge and a separate fee from Flight Network for handling the request on your behalf. If the airline itself cancels a flight, however, Flight Network states plainly that it will not add its own separate fee on top of that refund request.',
  ],
  facts: [
    { label: 'Founded', value: 'Toronto, Canada' },
    { label: 'Owned by', value: 'Etraveli Group, since 2019' },
    { label: 'Default refund policy', value: 'Non-refundable once confirmed' },
    { label: 'Change deadline', value: 'At least 24h before travel' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Treat every fare as non-refundable unless the fare rules on your specific booking say otherwise — Flight Network’s own terms default to non-refundable and non-changeable once a ticket is issued.',
    items: [
      {
        name: 'Standard fare',
        price: "Airline fare plus Flight Network's booking margin",
        detail:
          'The default search result across the airlines Flight Network compares. Read the fare rules shown at checkout, since the non-refundable default applies unless stated otherwise.',
        pick: true,
      },
      {
        name: 'Change request',
        price: 'Airline fare-rule charge plus a Flight Network handling fee',
        detail:
          'Must be requested at least 24 hours before departure. Some airlines will not permit any change at all once a ticket is issued, regardless of how far ahead you ask.',
      },
      {
        name: 'Airline-initiated cancellation',
        price: 'No Flight Network fee added',
        detail:
          'If the airline itself cancels your flight, Flight Network states it will not charge its own fee for processing that refund request — the exception to the otherwise non-refundable default.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuine multi-airline fare comparison',
      body: 'Comparing across many carriers in one search gives Flight Network reach for long-haul and connecting itineraries that a single airline’s own booking page cannot construct.',
    },
    {
      title: 'Backed by an established travel technology parent',
      body: 'Etraveli Group has run flight-booking businesses since 2000 and operates at real scale, which is a different footing than a small independent storefront with no institutional backing.',
    },
    {
      title: 'No extra fee when the airline is the one cancelling',
      body: 'Flight Network draws a clear line in its own published terms: if the airline cancels, it will not tack its own fee onto that refund request, which is a fairer default than some agencies apply.',
    },
    {
      title: 'A licensed Ontario travel agency, not an anonymous storefront',
      body: 'Flight Network is registered with the Travel Industry Council of Ontario, giving it a real, checkable regulatory footing in its home market.',
    },
  ],
  cons: [
    {
      title: 'Non-refundable is the default, not the exception',
      body: 'Flight Network’s own travel conditions state that confirmed bookings are non-refundable and non-changeable by default. Read the fare rules before buying if there is any chance your plans might shift.',
    },
    {
      title: 'Change and cancellation fees stack on the airline’s own charges',
      body: 'Where a change is even possible, Flight Network’s own handling fee applies in addition to whatever the airline charges under its fare rules, and complaints about the total size of that stack are common in reviews.',
    },
    {
      title: 'Trustpilot rates it only "Average", with recurring refund complaints',
      body: 'The main flightnetwork.com storefront sits at an Average score on Trustpilot, weighed down by reviews describing slow or disputed refunds and being redirected between Flight Network and the airline.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.9, note: '"Average", on a large main-domain review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'competitive multi-airline fares offset by a strict non-refundable default and stacked change fees',
    },
  ],
  bestFor: [
    'Long-haul and multi-airline itineraries where comparing carriers in one search saves real money',
    'Travellers with fixed, unlikely-to-change plans who are comfortable with a non-refundable ticket',
    'Bookers who read the specific fare rules shown at checkout rather than assuming a standard refund policy',
    'Anyone who wants the reassurance of a company registered with a real Canadian travel-industry regulator',
  ],
  notFor: [
    'Anyone who wants a straightforwardly refundable or easily changeable ticket by default',
    'Travellers with plans that might shift and who are not willing to pay for a flexible fare upfront',
    'Bookers expecting a fast, hassle-free refund process if a change or cancellation becomes necessary',
  ],
  faq: [
    {
      q: 'Is Flight Network legitimate?',
      a: 'Yes. It is a licensed Ontario travel agency, registered with the Travel Industry Council of Ontario, and has been owned by Etraveli Group since 2019. Legitimacy is not the concern in reviews; the strict non-refundable default and fee stacking on changes are.',
    },
    {
      q: 'Can I cancel my booking for a refund?',
      a: 'By default, no. Flight Network’s own travel conditions state that confirmed bookings are non-refundable and non-changeable, unless your specific fare rules say otherwise. Check the fare rules shown at checkout carefully before you buy if there is any real chance your plans could still shift.',
    },
    {
      q: 'What happens if the airline cancels my flight instead?',
      a: 'Flight Network states it will not charge its own fee for processing that refund request, which is the one clear exception to its otherwise non-refundable default. The airline’s own refund timeline still applies, and Flight Network does not control how quickly that money is returned.',
    },
    {
      q: 'Is Flight Network the same company as Gotogate or Mytrip?',
      a: 'They are sister brands under the same parent, Etraveli Group, which acquired Flight Network in 2019. Each storefront operates under its own name and branding, but shares back-end booking infrastructure with Gotogate and Mytrip, which is why service patterns can look similar across all three.',
    },
    {
      q: 'How far ahead do I need to request a change?',
      a: 'Flight Network’s published help centre states change requests must reach them at least 24 hours before departure. Some airlines will not permit a change at all once a ticket is issued, regardless of how much notice you give, so read your specific fare rules first.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'flightnetwork.com',
}
