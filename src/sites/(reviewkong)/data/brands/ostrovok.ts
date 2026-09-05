/**
 * Brand page data for Ostrovok (route: /brands/ostrovok).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Ostrovok.ru — founding year, founders, 2024
 *     rename from “Ostrovok.ru” to “Ostrovok”, ownership history
 *   - https://www.emergingtravel.com/about — Emerging Travel Group as parent,
 *     sister brands RateHawk (B2B) and Zenhotels
 *   - https://play.google.com/store/apps/details?id=ru.ostrovok.android — the
 *     vendor’s own catalogue-size and country-count claim, booking types
 *   - https://blog.ostrovok.ru/kak-oplachivat-bronirovaniya/ and third-party
 *     travel guides on paying from outside Russia — booking-without-a-card and
 *     pay-at-hotel options, free-cancellation refund timing
 *   - https://www.trustpilot.com/review/ostrovok.ru — rating and volume, and
 *     Trustpilot’s 2022 freeze on new reviews for Russia-linked businesses
 *
 * ⚠️ Prices, fees and payment-access details are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign — payment access for
 * non-Russian cards in particular is unstable and sanctions-dependent. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ostrovok: BrandPage = {
  slug: 'ostrovok',
  providerId: 'ostrovok',
  metaTitle: 'Ostrovok review 2026 — Russia’s domestic booking platform',
  metaDescription:
    'An independent Ostrovok review: what it actually is — Russia’s own domestic hotel platform — and what that means if you are booking from outside.',
  intro:
    'Ostrovok is not a global alternative to Booking.com. It is Russia’s own domestic hotel booking platform, built for Russian travellers and priced mostly in rubles, with the accommodation and support depth to match inside the country and thinner coverage the further you get from it. If you are reading this from outside Russia, the one thing to understand before anything else is which market this site was built for.',
  about: [
    'Ostrovok launched in 2010 as Ostrovok.ru, founded by Serge Faguet and Kirill Makharinsky, and rebranded to the shorter “Ostrovok” in April 2024 as part of a wider refresh of its visual identity. It sits inside Emerging Travel Group, a holding company that also owns RateHawk, a business-to-business booking platform for travel agents, and Zenhotels, a separate consumer site aimed at a broader international audience. Ostrovok is specifically the group’s brand for individual Russian travellers, distinct from its B2B sibling and from Zenhotels.',
    'The catalogue is large by the company’s own account — well over a million bookable properties, spanning hotels, hostels and apartments, with the vendor’s own app listing claiming coverage in around 220 countries and territories worldwide. In practice the depth is heaviest inside Russia and the CIS, where Ostrovok competes as the default local option and the listings are correspondingly dense; further afield it is one option among several rather than the market leader you would default to.',
    'What sets it apart from a Western booking site is flexibility around payment. Alongside the standard pay-by-card booking, many properties let you reserve without entering any card at all and pay in cash at check-in, and the company runs its own 24/7 customer service centre rather than routing everything through hotel staff. That matters more here than on most sites, because international card rails into Russia have been unreliable since 2022.',
  ],
  facts: [
    { label: 'Founded', value: '2010' },
    { label: 'Primary market', value: 'Russia and the CIS' },
    { label: 'Owner', value: 'Emerging Travel Group' },
    { label: 'Booking types', value: 'Card, no-card, prepaid' },
  ],
  plans: {
    title: 'How the booking types work',
    note: 'This is not a subscription product — the choice buyers actually make is between rate types, and prices are set per property mostly in rubles, so treat any figure here as illustrative rather than quotable.',
    items: [
      {
        name: 'Free-cancellation rate',
        price: 'Usually a small premium over the non-refundable rate',
        detail:
          'Cancel within the stated window and Ostrovok refunds the full amount with no commission deducted, typically within around 10 working days.',
        pick: true,
      },
      {
        name: 'Non-refundable rate',
        price: 'Cheapest rate on most properties',
        detail: 'No refund on cancellation. Worth it only if your dates are certain.',
      },
      {
        name: 'No-card / pay-at-hotel',
        price: 'Same as the standard rate, no prepayment',
        detail:
          'Available on a subset of properties. Reserve without entering card details and settle in cash at check-in — useful where card payment is uncertain.',
      },
    ],
  },
  pros: [
    {
      title: 'The default for Russian-market hotel search',
      body: 'For accommodation inside Russia and neighbouring CIS countries, the catalogue depth and local support are hard to match from an international booking site built for a different market entirely.',
    },
    {
      title: 'Genuine no-card and pay-at-hotel options',
      body: 'Many properties let you book without a card and pay in cash on arrival, which is a real advantage where card payment can fail without warning.',
    },
    {
      title: '24/7 in-house support',
      body: 'The company runs its own customer service centre rather than leaving disputes to the hotel, which matters most exactly when a booking goes wrong and someone needs to sort it out.',
    },
    {
      title: 'Free cancellation is genuinely free',
      body: 'On eligible rates, refunds are processed in full with no commission taken by Ostrovok, unlike sites that quietly keep a service fee when a guest cancels.',
    },
  ],
  cons: [
    {
      title: 'Built for Russia, not for you if you are elsewhere',
      body: 'Coverage outside Russia and the CIS exists but is not the platform’s strength. An international traveller comparing hotels in Lisbon or Bangkok has better specialist options.',
    },
    {
      title: 'Payment access from abroad is genuinely uncertain',
      body: 'International card networks have restricted transactions with Russian merchants since 2022. Some routes reportedly still work; none of them are guaranteed to keep working, and Ostrovok’s own site does not promise otherwise.',
    },
    {
      title: 'No fresh independent review signal since 2022',
      body: 'Trustpilot stopped accepting new reviews for businesses closely tied to Russia after 2022, so the public rating reflects historic sentiment rather than anything current or checkable today.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.7,
      note: '4,400+ reviews, but frozen since 2022 — no new reviews accepted for Russia-linked sites',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'strong for its actual market, marked down for being a poor fit outside it',
    },
  ],
  bestFor: [
    'Anyone booking accommodation inside Russia or the CIS',
    'Travellers who want to reserve without a card and pay cash at check-in',
    'Aeroflot or Pobeda passengers wanting a hotel alongside the flight',
    'Russian-speaking users who want a local-market interface and support line',
  ],
  notFor: [
    'International travellers wanting one site to book hotels worldwide',
    'Anyone who needs certainty that a non-Russian card will be accepted',
    'Readers relying on current third-party review scores to judge trust',
  ],
  faq: [
    {
      q: 'Is Ostrovok available to travellers outside Russia?',
      a: 'The site lists accommodation in roughly 220 countries by its own count, so technically yes. But the platform is built for the Russian market — pricing defaults to rubles and support is oriented around Russian travellers — so it is not a like-for-like substitute for a global booking site.',
    },
    {
      q: 'Can I pay with a foreign card?',
      a: 'Uncertain, and that uncertainty is the point. International card rails into Russian merchants have been restricted since 2022. Some third-party guides report workarounds still functioning; treat none of them as guaranteed, and check current status yourself before relying on any of them for a real booking.',
    },
    {
      q: 'Do I need a card to book at all?',
      a: 'Not always. A meaningful share of properties let you reserve with no card details and pay in cash at check-in, which sidesteps the payment-access question entirely if that option happens to be available on the specific property you want to book.',
    },
    {
      q: 'What happens if I cancel a booking?',
      a: 'It depends on the rate you booked. Free-cancellation rates are refunded in full with no commission, usually within about 10 working days, if you cancel inside the stated window. Non-refundable rates are cheaper but pay nothing back if your plans change.',
    },
    {
      q: 'Who owns Ostrovok?',
      a: 'Emerging Travel Group, which also owns RateHawk, a separate B2B booking platform for travel agents, and Zenhotels, another consumer site aimed at a broader international audience. Ostrovok is the group’s brand aimed specifically at individual Russian travellers booking trips domestically inside the country.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ostrovok.ru',
}
