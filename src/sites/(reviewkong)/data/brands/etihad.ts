/**
 * Brand page data for Etihad Airways (route: /brands/etihad).
 *
 * SOURCES (checked 18 August 2026):
 *  - Cabins, fare families and The Residence: https://www.etihad.com/en/plan/fly-with-etihad/our-cabins
 *  - Baggage rules incl. Economy Basic: https://www.etihad.com/en-us/help/baggage-information
 *  - Optional service fees: https://www.etihad.com/en-us/legal/optional-service-fees
 *  - Skytrax airline rating: https://skytraxratings.com/airlines/etihad-airways-rating
 *  - AirlineRatings safest airline 2026, as reported August 2026
 *
 * ⚠️ Airline fares are route- and date-dependent, and fare-family rules change
 * without notice. Nothing here is a quotable price; re-verify the baggage and
 * change rules against Etihad's own conditions before launch. See ../../README.md.
 *
 * Note on the template: `plans` carries fare families rather than subscription
 * tiers, and `priceNote` deliberately avoids a "from $X" figure because any such
 * number would be wrong for most routes.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const etihad: BrandPage = {
  slug: 'etihad',
  providerId: 'etihad',
  schemaType: 'Airline',
  metaTitle: 'Etihad Airways review 2026 — what Economy Basic excludes',
  metaDescription:
    'An independent Etihad Airways review: what the Abu Dhabi hub is genuinely good for, how the fare families differ, and why Economy Basic carries no checked bag even for elite members.',
  intro:
    'Etihad is the third of the big Gulf carriers, and its case rests on the hub rather than the hype. Abu Dhabi is markedly quieter than Dubai, the long-haul fleet is one of the youngest anywhere, and a free stopover programme turns a connection into a few days on the ground. The thing to check before booking is the fare family: Economy Basic carries no checked bag at all, and that exclusion applies even if you hold elite status.',
  about: [
    'Etihad was founded in 2003 and flies from Zayed International in Abu Dhabi to roughly 110 destinations with a fleet of about 127 aircraft. Its natural market is one-stop traffic between Europe or North America and South and South-East Asia, which is the same geography Emirates and Qatar serve — with the difference that Etihad’s network is smaller, so a given city pair is somewhat likelier to need a second connection.',
    'What the smaller scale buys is a less punishing transfer. Connecting through Abu Dhabi generally means shorter walks and shorter queues than the equivalent connection through Dubai, which matters most on a tight inbound. The fleet skews new — A350s, 787s and A321LRs on much of the network — so the cabin you sit in is typically more modern than the legacy carriers flying the same route. Etihad also runs a free stopover programme, which is worth knowing about if a long layover could become a short holiday instead.',
    'At the top of the aircraft, Etihad still operates The Residence on the A380: a three-room suite with a bedroom, a living area and a private shower, sold on selected Abu Dhabi services to London, New York and Paris. It is an upgrade from a First Class ticket rather than a fare you book directly, and it is a genuine curiosity rather than a serious consideration for almost anybody. Independent assessment is more mixed than the marketing: Skytrax currently certifies Etihad at four stars, below the five-star Gulf rivals it prices itself against, while AirlineRatings named it the world’s safest airline for 2026.',
  ],
  facts: [
    { label: 'Founded', value: '2003, Abu Dhabi' },
    { label: 'Hub', value: 'Zayed International (AUH)' },
    { label: 'Network', value: '~110 destinations' },
    { label: 'Loyalty', value: 'Etihad Guest' },
  ],
  plans: {
    title: 'Fare families and what they include',
    note: 'Fares are route- and date-dependent, so treat the ordering below as the rule and Etihad’s own booking flow as the authority. The one rule worth memorising: Economy Basic includes no checked baggage and no seat selection, and Etihad Guest status does not add a bag to it. If you are travelling with luggage, the cheapest fare on the screen is not the cheapest fare for your trip.',
    items: [
      {
        name: 'Economy Basic',
        price: 'the entry fare',
        detail:
          'Cabin bag only. No checked baggage, no seat selection, and the most restrictive change and refund terms. Fine for a short hop with hand luggage; a false economy on anything longer.',
      },
      {
        name: 'Economy Value',
        price: 'a step up from Basic',
        detail:
          'Adds a checked bag and standard seat selection, with less punitive change rules. For most trips this is the fare to compare against other airlines, not Basic.',
        pick: true,
      },
      {
        name: 'Business',
        price: 'multiples of Economy',
        detail:
          'Lie-flat seating on long-haul aircraft, lounge access and a generous baggage allowance. The cabin most of Etihad’s reputation is built on.',
      },
      {
        name: 'First & The Residence',
        price: 'premium, A380 routes only',
        detail:
          'First Apartments on the A380, with The Residence — a three-room suite — sold as an upgrade on selected London, New York and Paris services.',
      },
    ],
  },
  pros: [
    {
      title: 'A hub that does not punish a tight connection',
      body: 'Abu Dhabi is materially less congested than Dubai. On a delayed inbound with ninety minutes to make a connection, that difference is the whole trip.',
    },
    {
      title: 'One of the youngest long-haul fleets',
      body: 'A350s, 787s and A321LRs across much of the network mean newer cabins, quieter aircraft and better in-seat power than legacy competitors on the same city pairs.',
    },
    {
      title: 'The stopover programme is genuinely free',
      body: 'A connection can be extended into a few days in Abu Dhabi at no additional fare cost. Few carriers let you break a journey without repricing the ticket.',
    },
    {
      title: 'A strong independent safety record',
      body: 'AirlineRatings named Etihad the world’s safest airline for 2026 — an assessment from outside the airline, unlike most of what appears in airline marketing.',
    },
  ],
  cons: [
    {
      title: 'Economy Basic excludes more than people expect',
      body: 'No checked bag, no seat selection, and status does not change that. Readers habitually compare a Basic fare against a rival’s bag-inclusive fare and conclude Etihad is cheaper when it is not.',
    },
    {
      title: 'A smaller network than its rivals',
      body: 'Fewer destinations than Emirates or Qatar means more itineraries requiring a second connection. Check the whole routing rather than the headline fare.',
    },
    {
      title: 'Rated below the carriers it prices against',
      body: 'Skytrax currently certifies Etihad at four stars while its principal Gulf competitors hold five. On a premium cabin at a premium price, that gap is the relevant comparison.',
    },
  ],
  reputation: [
    {
      source: 'Skytrax',
      value: 4.0,
      note: 'certified 4-star airline; rivals Emirates and Qatar hold 5-star',
    },
    {
      source: 'AirHelp Score',
      value: 4.2,
      note: 'global top-tier placement on claims handling and punctuality',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.4,
      note: 'our composite: hub quality and fleet age against network size and fare restrictions',
    },
  ],
  bestFor: [
    'One-stop journeys between Europe or the Americas and South and South-East Asia',
    'Travellers who would rather connect through Abu Dhabi than Dubai',
    'Anyone who would turn a long layover into a few days with the free stopover',
  ],
  notFor: [
    'Hand-luggage-only bargain hunters comparing Basic fares without reading the baggage rules',
    'Routes where a competitor flies non-stop — a connection is a connection',
    'Travellers expecting five-star service ratings at the top of the aircraft',
  ],
  faq: [
    {
      q: 'Does Economy Basic really include no checked bag?',
      a: 'Correct, and this is the single most common booking mistake on this airline. Basic is cabin baggage only, and Etihad Guest status does not add an allowance to it. Compare Economy Value against other airlines’ standard fares if you are checking a bag.',
    },
    {
      q: 'Is connecting through Abu Dhabi better than Dubai?',
      a: 'For most passengers, yes — it is a smaller, quieter airport with shorter transfer times. The trade-off is network breadth: Dubai serves more destinations, so more itineraries work in one stop.',
    },
    {
      q: 'Can I book The Residence directly?',
      a: 'No. It is sold as an upgrade from a First Class ticket booked with Etihad, in cash or miles, on selected A380 services to London, New York and Paris. It is not a fare class you can select in an ordinary search.',
    },
    {
      q: 'Is the free stopover worth using?',
      a: 'If your schedule has any slack, yes. Etihad lets you break the journey in Abu Dhabi without repricing the ticket, which effectively adds a destination to a trip you were taking anyway.',
    },
    {
      q: 'How does Etihad Guest compare with other programmes?',
      a: 'It earns and redeems across a partner network and adds baggage allowance at Silver, Gold and Platinum — but not on Basic fares. If you credit flights to an existing programme, check the earning rate on the specific fare class before assuming it counts.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'etihad.com',
}
