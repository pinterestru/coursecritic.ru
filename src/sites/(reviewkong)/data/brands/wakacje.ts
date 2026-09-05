/**
 * Brand page data for Wakacje.pl (route: /brands/wakacje).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.wakacje.pl/ofirmie.html — founding year, ownership, scale
 *     (tour-operator partnerships, franchise salons, customers, hotel count)
 *   - https://pl.wikipedia.org/wiki/Wakacje.pl — 2009 Enovatis merger, the 2015
 *     Wirtualna Polska Holding acquisition, the 2025 Invia Group deal
 *   - https://www.trustpilot.com/review/wakacje.pl — TrustScore and review count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. This is a Polish
 * domestic travel agent — see the market note in the intro before using it in
 * any non-Polish campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const wakacje: BrandPage = {
  slug: 'wakacje',
  providerId: 'wakacje',
  metaTitle: 'Wakacje.pl review 2026 — Poland’s package-holiday agent',
  metaDescription:
    'An independent Wakacje.pl review: how the multi-operator package model works, the price guarantee it advertises, and why this is a Polish-market booking only.',
  intro:
    'Wakacje.pl is Poland’s largest multi-agent package-holiday site, not a hotel or flight booker in its own right. It aggregates offers from dozens of tour operators — flights, hotel and transfers bundled together — rather than selling its own inventory. It sells and supports in Polish, prices in zloty, and its call centre and 300-plus franchise salons are Poland-based, so it is realistically a booking option for people in or travelling from Poland, not an international audience.',
  about: [
    'The company started in 1999 and has been through two ownership changes since: it merged with easygo.pl in 2009 to form Enovatis S.A., then was bought by Wirtualna Polska Holding, the listed Polish media and internet group, in 2015. In 2025 WP Holding folded in the Invia Group acquisition, making Wakacje.pl part of what it describes as one of Central and Eastern Europe’s largest tourism groups alongside sister brand Travelplanet.pl.',
    'The model is a marketplace for holiday packages rather than a single operator: Wakacje.pl compares offers from close to 80 tour operators and around 8,000 hotels in its dynamic-packaging system, letting a buyer combine flight, hotel and transfer into one price. Popular destinations skew Mediterranean — Turkey, Egypt, Greece, Spain, Cyprus — reflecting where Polish package tourists actually go.',
    'Alongside the website there is a call centre and a franchise network of more than 300 physical sales points across Poland, unusual scale for an OTA and a sign the business still serves a customer base that wants to book with a person. Wakacje.pl advertises that it passes through the tour operator’s own price without adding a booking commission or hidden markup.',
  ],
  facts: [
    { label: 'Founded', value: '1999' },
    { label: 'Market', value: 'Poland (Polish-language)' },
    { label: 'Owner', value: 'Wirtualna Polska / Invia' },
    { label: 'Tour operators', value: '~80 partners' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'This is a package-holiday marketplace, not a subscription — the cost structure is what the underlying tour operator charges, plus Wakacje.pl’s pass-through pricing promise.',
    items: [
      {
        name: 'Operator packages',
        price: 'Set by the tour operator',
        detail:
          'Flight, hotel and transfer bundled by one of roughly 80 partner operators. Wakacje.pl states it does not add its own markup on top of the operator’s advertised price.',
        pick: true,
      },
      {
        name: 'Dynamic packages',
        price: 'Built per search',
        detail:
          'Wakacje.pl assembles flight plus hotel itself from its roughly 8,000-hotel inventory when no ready-made operator package fits the dates or destination.',
      },
      {
        name: 'Last-minute and pre-sale offers',
        price: 'Discounted vs. standard rate',
        detail:
          'Last-minute departures and early pre-sale bookings are flagged separately on the site; both still carry the underlying operator’s cancellation terms.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely large operator comparison',
      body: 'Comparing close to 80 tour operators in one search is more than most Polish travel sites offer, and it means a buyer is seeing real market spread rather than one company’s inventory.',
    },
    {
      title: 'A price-pass-through promise, stated plainly',
      body: 'Wakacje.pl advertises that it does not mark up the tour operator’s own price. Whether that holds on every booking is unverifiable from outside, but it is at least a specific, checkable claim rather than vague marketing.',
    },
    {
      title: 'A large physical network for a booking site',
      body: 'More than 300 franchise salons across Poland is a genuine option for buyers who want to sit down with an agent, unusual scale for an online-first business in 2026.',
    },
    {
      title: 'Long operating history in one market',
      body: 'Twenty-five-plus years serving Polish holidaymakers, now backed by a listed media group’s balance sheet, gives it more institutional weight than a newer package-holiday startup.',
    },
  ],
  cons: [
    {
      title: 'Polish-market only, in practice',
      body: 'The site, support and physical salons all operate in Polish for a Polish customer base. Someone outside Poland without a Polish payment method and language has little reason to use it over a local alternative.',
    },
    {
      title: 'Trustpilot sentiment is mixed, not strong',
      body: 'Public reviews sit in Trustpilot’s "Average" band, with recurring complaints about last-minute fee additions when a hotel does not confirm a reservation, and about hotel star ratings on the site not matching what travellers found on arrival.',
    },
    {
      title: 'Terms vary by the underlying operator, not Wakacje.pl',
      body: 'Because most bookings are resold from a third-party tour operator, the actual cancellation penalty and refund timeline depend on that operator’s contract, not a single house policy a buyer can learn once.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 3.5, note: '"Average" rating, 500+ reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'strong on operator choice and physical support, marked down for mixed review sentiment on fees',
    },
  ],
  bestFor: [
    'Polish travellers comparing package holidays across many tour operators at once',
    'Buyers who want to walk into a physical salon rather than book entirely online',
    'Mediterranean beach-holiday trips — Turkey, Egypt, Greece, Spain, Cyprus',
    'Anyone who reads and pays in Polish and wants a Poland-based support line',
  ],
  notFor: [
    'Travellers outside Poland with no Polish-language support or payment method',
    'Anyone wanting one uniform cancellation policy — it depends on the underlying operator',
    'Buyers who have already read the mixed fee complaints and want a cleaner record',
  ],
  faq: [
    {
      q: 'Can someone outside Poland book through Wakacje.pl?',
      a: 'Technically the site is reachable from anywhere, but it operates in Polish, prices in zloty, and its support and physical salons are Poland-based. A non-Polish traveller has little practical advantage over a local booking site.',
    },
    {
      q: 'Does Wakacje.pl own the hotels and flights it sells?',
      a: 'No. It is a multi-agent marketplace that compares and resells packages from close to 80 tour operators, plus its own dynamic flight-and-hotel combinations. Cancellation and refund terms follow whichever operator underlies the booking.',
    },
    {
      q: 'Is Wakacje.pl the cheapest way to book a Mediterranean package holiday from Poland?',
      a: 'It compares a wide operator spread, which helps find a competitive price, but it is a marketplace, not a discounter — a specific operator’s own site could occasionally beat it on the same package.',
    },
    {
      q: 'What do the negative reviews mainly complain about?',
      a: 'The recurring pattern in public reviews is fees added close to departure when a hotel does not confirm a reservation, and hotel star ratings on the site not matching the property travellers found on arrival. Read the specific listing and operator terms before booking.',
    },
    {
      q: 'Who owns Wakacje.pl now?',
      a: 'Wirtualna Polska Holding, the listed Polish media group, has owned it since 2015. In 2025 WP Holding’s acquisition of the Invia Group placed Wakacje.pl alongside sister brand Travelplanet.pl within a larger Central and Eastern European tourism group.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'wakacje.pl',
}
