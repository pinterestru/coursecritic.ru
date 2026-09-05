/**
 * Brand page data for Emirates (route: /brands/emirates).
 *
 * SOURCES (checked 21 August 2026):
 *  - Fare families, verbatim definitions: https://emirates.com/ch/english/help/faqs/what-are-the-differences-between-special-saver-flex-and-flex-plus-fares
 *  - Checked baggage by fare: https://www.emirates.com/us/english/before-you-fly/baggage/checked-baggage/
 *  - Seat-selection fees, carry-on, award-change fees: https://www.emirates.com/us/english/information/optional-services/
 *  - August 2026 change and refund terms: https://www.emirates.com/media-centre/five-ways-emirates-is-helping-customers-travel-with-greater-confidence/
 *  - Network, fleet and order book at 31 March 2026: https://www.emirates.com/media-centre/emirates-group-achieves-record-profit-of-aed-244-bn-us-66-bn-in-2025-26/
 *  - Retrofit programme scale: https://www.emirates.com/media-centre/emirates-retrofit-programme/
 *  - Premium Economy availability: https://www.emirates.com/us/english/experience/cabin-features/premium-economy-class/
 *  - Skytrax certification: https://skytraxratings.com/airlines/emirates-rating
 *  - AirlineRatings 2026 list: https://www.airlineratings.com/articles/worlds-best-airlines-for-2026-by-airline-ratings
 *  - DXB 2025 traffic and capacity: https://media.dubaiairports.ae/dxb-sets-global-benchmark-as-record-traffic-become-the-norm/
 *
 * ⚠️ Airline fares are route- and date-dependent, and fare-family rules change
 * without notice. Nothing here is a quotable price; re-verify the baggage,
 * seat-selection and change rules against Emirates' own conditions before
 * launch. Two specific traps: Skytrax certifies Emirates at FOUR stars, not
 * five, and the 2026 Skytrax World Airline Awards are not announced until 18
 * September 2026, so no 2026 Skytrax placement exists yet. See ../../README.md.
 *
 * Note on the template: `plans` carries fare families rather than subscription
 * tiers, and `priceNote` deliberately avoids a "from $X" figure because any such
 * number would be wrong for most routes.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const emirates: BrandPage = {
  slug: 'emirates',
  providerId: 'emirates',
  schemaType: 'Airline',
  metaTitle: 'Emirates review 2026 — what Economy Special includes',
  metaDescription:
    'An independent Emirates review: why the cheapest fare still includes a checked bag, what advance seat selection costs, and what Dubai is like to connect in.',
  intro:
    'Emirates is the largest of the Gulf carriers and the one whose cheapest fare is least likely to catch you out: Economy Special still includes 20 kg of checked baggage, and there is no hand-baggage-only ticket anywhere in the range. What it does charge for is choosing your seat in advance — and what it cannot promise is which version of its cabin you will end up in, because more than 200 of its aircraft are still queuing for a refit.',
  about: [
    'Emirates launched in 1985 with two aircraft and now flies from Dubai International to 152 cities in 80 countries, with 32 codeshare and 117 interline partners extending that further. The Emirates Group reported a fleet of 277 aircraft at 31 March 2026, average age 10.8 years, and an order book of 367 more with deliveries running to 2038. It is the world’s largest operator of both the A380 and the Boeing 777, and its A350s entered service in January 2025.',
    'The commercial logic is pure hub-and-spoke: almost every long-haul itinerary transits Dubai. That gives Emirates the broadest one-stop reach of any carrier in this comparison, and it concentrates all of the risk in one airport. Dubai Airports handled 95.2 million passengers in 2025 and described the airport as operating "at the edge of physical capacity", with roughly 99.5 million forecast for 2026. Emirates flies from Terminal 3, which it has to itself, so most connections are at least within one building.',
    'Emirates is not a member of any global alliance — it runs bilateral deals instead, most visibly with Qantas — so miles credit to Emirates Skywards rather than to a programme you may already hold. On product, the picture is genuinely uneven. Premium Economy now appears on every A350 and on retrofitted A380s and 777s, and Emirates is fitting free Starlink wi-fi across 232 aircraft. But its own retrofit programme covers 219 aircraft at a stated cost of $5bn, only about half of which will be finished by December 2026. Skytrax certifies Emirates at four stars, a tier below Qatar Airways.',
  ],
  facts: [
    { label: 'Founded', value: '1985, Dubai' },
    { label: 'Hub', value: 'Dubai International (DXB)' },
    { label: 'Network', value: '152 cities, 80 countries' },
    { label: 'Loyalty', value: 'Emirates Skywards' },
  ],
  plans: {
    title: 'Fare families and what they include',
    note: 'Fares are route- and date-dependent, so treat the ordering below as the rule and Emirates’ own booking flow as the authority. The rule worth memorising: every Emirates fare includes checked baggage, but Special and Saver charge for choosing a seat in advance — from roughly US$7 to US$260 per sector depending on the seat. A standard seat becomes free once online check-in opens, so the fee buys certainty rather than a seat.',
    items: [
      {
        name: 'Economy Special',
        price: 'the entry fare',
        detail:
          '20 kg checked on most routes, or one 23 kg bag to and from the Americas and Africa, plus 7 kg cabin. Advance seat selection is paid. Excluded from the unlimited-change and reduced-refund terms Emirates introduced for Dubai-bound travel in August 2026.',
      },
      {
        name: 'Economy Saver',
        price: 'a step up from Special',
        detail:
          '25 kg checked on most routes, and the point at which the August 2026 free-date-change and reduced-refund terms to Dubai begin to apply. Advance seat selection is still paid.',
        pick: true,
      },
      {
        name: 'Economy Flex / Flex Plus',
        price: 'the flexible economy fares',
        detail:
          '30 kg and 35 kg checked respectively, free advance seat selection on standard and preferred seats, and change terms that do not depend on a promotion.',
      },
      {
        name: 'Premium Economy, Business and First',
        price: 'multiples of Economy',
        detail:
          'Premium Economy is sold as Flex Plus only and carries 35 kg. Business has lie-flat seating and 40 kg. First is on A380s and 777s only, with the shower spa on the A380.',
      },
    ],
  },
  pros: [
    {
      title: 'Every fare includes a checked bag',
      body: 'Emirates has no hand-baggage-only ticket. The cheapest fare, Economy Special, carries 20 kg on weight-concept routes and one 23 kg piece to and from the Americas and Africa. Against carriers whose entry fare strips the bag out, that is a real cash difference, not a marketing point.',
    },
    {
      title: 'The widest one-stop network here',
      body: '152 cities in 80 countries, plus 117 interline partners, means more city pairs work in a single connection. On routes where a rival needs two stops, the comparison stops being about the fare.',
    },
    {
      title: 'A free seat once check-in opens',
      body: 'Advance selection is chargeable on Special and Saver, but Emirates states that a standard seat is assigned free once online check-in opens. Travelling alone and indifferent about the window, you can decline the fee entirely.',
    },
    {
      title: 'Premium Economy is now a real option',
      body: 'It is fitted on every A350 and on retrofitted A380s and 777s, and Emirates said in 2026 it would be deployed on more than 84 routes. Of the four carriers here, only Emirates offers a genuine premium-economy cabin across a meaningful slice of the network.',
    },
  ],
  cons: [
    {
      title: 'You cannot predict which cabin you will get',
      body: 'Emirates’ retrofit programme covers 219 of its aircraft, with only about half due to be finished by December 2026. Emirates itself warns that "products, services and features on actual flights may vary". Booking a route does not tell you whether you are getting the new interior or a fifteen-year-old one.',
    },
    {
      title: 'Advance seat selection is charged on the two cheapest fares',
      body: 'Emirates publishes a range of roughly US$7 to US$260 per passenger per sector for seat selection on Special and Saver fares. Two people who want to sit together on a return long-haul should add that to the fare before comparing it with anything else.',
    },
    {
      title: 'The cheapest fare is excluded from the flexibility improvements',
      body: 'The unlimited free date changes and reduced refund fees Emirates announced for Dubai-bound travel in August 2026 run from Saver through Flex in Economy. Economy Special is not named in either list.',
    },
    {
      title: 'Four stars, and one very busy hub',
      body: 'Skytrax certifies Emirates at four stars, below Qatar Airways. And every long-haul itinerary transits an airport its own operator describes as running at the edge of physical capacity, with 95.2 million passengers in 2025.',
    },
  ],
  reputation: [
    {
      source: 'Skytrax',
      value: 4.0,
      note: 'certified 4-star airline; fourth in the 2025 World Airline Awards',
    },
    {
      source: 'AirHelp Score',
      value: 3.7,
      note: '2025 score of 7.45 out of 10, rescaled; rank 16 of 117 airlines',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite: network reach and fare inclusions against cabin inconsistency',
    },
  ],
  bestFor: [
    'Travellers checking a bag who want it included in the headline fare',
    'One-stop routings to cities the smaller Gulf networks do not reach',
    'Anyone who wants a genuine premium-economy cabin rather than an extra-legroom seat',
  ],
  notFor: [
    'Passengers who need to know exactly which cabin product they are booking',
    'Couples and families unwilling to pay for advance seat selection on the cheapest fares',
    'Anyone buying Economy Special and expecting the 2026 flexibility terms to apply to it',
  ],
  faq: [
    {
      q: 'Does the cheapest Emirates fare include a checked bag?',
      a: 'Yes. Economy Special includes 20 kg on weight-concept routes and one 23 kg piece on routes to and from the Americas and Africa, per Emirates’ own checked-baggage page. There is no hand-baggage-only fare in the Emirates range, which is the main way its entry fare differs from Etihad’s.',
    },
    {
      q: 'Do I have to pay to choose a seat?',
      a: 'Only if you want to choose in advance. Emirates charges roughly US$7 to US$260 per sector for seat selection on Economy Special and Saver fares. It also states that a standard seat is assigned at no charge once online check-in opens — extra-legroom seats stay chargeable throughout.',
    },
    {
      q: 'What are the change and cancellation rules on a cheap fare?',
      a: 'Emirates does not publish a single global fee table for cash Economy fares; the rules are shown in the booking flow. What is published is that tickets booked from 2 April 2026 carry one free date change network-wide, and that the unlimited-change and reduced-refund terms for Dubai-bound travel start at Saver, not Special. A fare difference is payable on any change.',
    },
    {
      q: 'Is Emirates a five-star airline?',
      a: 'No. Skytrax certifies Emirates as a four-star airline. It placed fourth in the 2025 World Airline Awards and eighth in AirlineRatings’ 2026 list of full-service carriers. The 2026 Skytrax awards are not announced until September 2026.',
    },
    {
      q: 'Which alliance is Emirates in?',
      a: 'None. Emirates runs bilateral partnerships instead — 32 codeshare and 117 interline partners at 31 March 2026, most prominently with Qantas. Miles earn into Emirates Skywards rather than into Star Alliance, oneworld or SkyTeam.',
    },
    {
      q: 'What is connecting through Dubai actually like?',
      a: 'Emirates has Terminal 3 to itself, so most connections stay within one building. The trade-off is scale: Dubai handled 95.2 million passengers in 2025 and its operator described the airport as running at the edge of physical capacity. Allow more time than the minimum a booking engine will sell you.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'emirates.com',
}
