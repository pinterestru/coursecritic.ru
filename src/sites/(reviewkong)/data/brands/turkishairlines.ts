/**
 * Brand page data for Turkish Airlines (route: /brands/turkishairlines).
 *
 * SOURCES (checked 21 August 2026):
 *  - Branded fares, all four names: https://www.turkishairlines.com/en-int/any-questions/flight-packages-for-international-flights-questions/
 *  - Seat selection is chargeable on EcoFly and ExtraFly: https://www.turkishairlines.com/en-int/any-questions/seat-selection-terms-and-conditions/
 *  - Routes exist with no EcoFly checked allowance: https://www.turkishairlines.com/en-int/any-questions/fare-rules/
 *  - "Flying to the most countries" claim: https://www.turkishairlines.com/en-int
 *  - Skytrax certification, incl. the fleet-variation caveat: https://skytraxratings.com/airlines/turkish-airlines-rating
 *  - Skytrax 2025 top 100 placement: https://www.worldairlineawards.com/worlds-top-100-airlines-2025/
 *  - AirlineRatings 2026 list and 7/7 safety: https://www.airlineratings.com/articles/worlds-best-airlines-for-2026-by-airline-ratings
 *  - AirHelp Score and subscores: https://www.airhelp.com/en-int/airlines/turkish-airlines/reviews/
 *  - Istanbul Airport scale: https://www.istairport.com/en/corporate/about-us
 *  - Crystal seat and premium-economy timing, CEO quoted: https://www.forbes.com/sites/ramseyqubein/2026/06/21/new-turkish-airlines-ceo-says-premium-economy-being-considered-among-other-fleet-upgrades/
 *
 * ⚠️ Airline fares are route- and date-dependent, and fare-family rules change
 * without notice. Nothing here is a quotable price; re-verify against Turkish's
 * own conditions before launch. Specific traps: EcoFly's checked allowance is
 * genuinely route-dependent and is nil on some sectors, so no single figure may
 * be published for it; Turkish is a Skytrax FOUR-star airline; the Crystal
 * business seat and any premium-economy cabin are announced, not flying; and
 * Turkish does not run a consumer affiliate programme this site could confirm,
 * so its provider entry is `tracked: false`. See ../../README.md.
 *
 * Note on the template: `plans` carries fare families rather than subscription
 * tiers, and `priceNote` deliberately avoids a "from $X" figure because any such
 * number would be wrong for most routes.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const turkishairlines: BrandPage = {
  slug: 'turkishairlines',
  providerId: 'turkishairlines',
  schemaType: 'Airline',
  metaTitle: 'Turkish Airlines review 2026 — the EcoFly baggage catch',
  metaDescription:
    'An independent Turkish Airlines review: the widest country network of any airline, the Istanbul stopover, and why EcoFly’s checked allowance can be nil.',
  intro:
    'Turkish Airlines reaches more countries than any other airline — 131 of them at the Guinness certification in December 2024 — and it will put you in an Istanbul hotel for a night on a long enough layover. What it will not do is tell you in advance what its cheapest fare includes: EcoFly’s checked baggage allowance varies by route, and on some intra-Europe sectors it is nothing at all. That figure only appears at booking.',
  about: [
    'Turkish Airlines was founded in 1933 and has flown from Istanbul Airport since 2019. That airport is one of the largest single terminals in the world at about 1.44 million square metres, rated for 90 million passengers a year, and it handled 84.5 million in 2025. The airline claims — and states in its own page title — that it flies to more countries than any carrier on earth, a claim Guinness World Records certified at 131 countries in December 2024. Published destination counts run to roughly 340 across 129 countries, from a fleet reported at over 500 aircraft.',
    'That reach is the whole argument for flying Turkish. Where the Gulf carriers concentrate on major cities, Turkish serves secondary ones across Africa, Central Asia and eastern Europe that would otherwise need a second connection. It is a Star Alliance member, so miles credit into a programme many travellers already hold, and catering comes from the Do&Co joint venture, with a flying chef in business class on longer sectors. Skytrax named it the best airline in Europe for a ninth time in 2025 and placed it sixth in its top 100.',
    'The cost of that scale is consistency. Skytrax certifies Turkish at four stars, and its rating page says outright that "product standards vary across the fleet depending on aircraft type" — concretely, the 777-300ER business cabin is a 2-3-2 layout without direct aisle access for everyone, while the 787s and A350s are staggered 1-2-1. The Crystal business seat unveiled in 2024 is not flying: the chief executive told Forbes in June 2026 that rollout begins in early 2027. There is no premium economy and no first class; premium economy is at the evaluation stage for 2028.',
  ],
  facts: [
    { label: 'Founded', value: '1933, Istanbul' },
    { label: 'Hub', value: 'Istanbul Airport (IST)' },
    { label: 'Network', value: '~340 destinations, 129 countries' },
    { label: 'Loyalty', value: 'Miles&Smiles (Star Alliance)' },
  ],
  plans: {
    title: 'Fare families and what they include',
    note: 'Turkish sells four economy packages, not three — FlexFly is the one most comparison articles omit. Fares and allowances are route- and date-dependent, and Turkish publishes no fixed EcoFly baggage figure: its own fare rules refer to "routes without checked baggage allowance in the Ecofly package". Treat the structure below as the rule and the booking flow as the authority, because it is the only place the number for your route appears.',
    items: [
      {
        name: 'EcoFly',
        price: 'the entry fare',
        detail:
          'Checked baggage varies by route and is nil on some intra-Europe sectors; cabin baggage is 8 kg plus a personal item on every package. Seat selection is chargeable, refunds are not available beyond the 24-hour cooling-off window, and changes are either barred or charged depending on the route.',
      },
      {
        name: 'ExtraFly',
        price: 'a step up from EcoFly',
        detail:
          'Adds a checked allowance and permits a date change against a deduction. Seat selection is still chargeable. Worth comparing against rivals’ standard fares rather than EcoFly.',
        pick: true,
      },
      {
        name: 'FlexFly',
        price: 'the flexible economy fare',
        detail:
          'Free standard seat selection, free date changes, and a refund available against a deduction. The first package in the range that behaves like a normal ticket.',
      },
      {
        name: 'PrimeFly, BusinessFly and BusinessPrime',
        price: 'the top economy and business fares',
        detail:
          'PrimeFly adds preferred seats, fast track and a fully refundable ticket. The two business packages carry lie-flat seating on long-haul widebodies and Do&Co catering. There is no first class.',
      },
    ],
  },
  pros: [
    {
      title: 'It reaches places the Gulf carriers do not',
      body: 'Guinness certified Turkish as the airline serving the most countries — 131 at the December 2024 award. For secondary cities in Africa, Central Asia and eastern Europe, it is often the only one-stop option on the board.',
    },
    {
      title: 'Star Alliance, so the miles land somewhere useful',
      body: 'Emirates has no alliance and Etihad none either; Qatar is oneworld. If your existing balance sits with a Star carrier, Turkish is the only one of the four that credits into it.',
    },
    {
      title: 'A stopover that comes with a bed',
      body: 'Turkish runs both a stopover programme with a complimentary hotel night in economy and a transit-hotel service on long connections, alongside the free Touristanbul city tour. The conditions are specific — layover length, ticket eligibility and advance booking all matter — so check them against your itinerary.',
    },
    {
      title: 'Catering that wins awards on its own',
      body: 'Do&Co supplies the food and Skytrax has repeatedly given Turkish its European and world business-class catering titles. It is the one part of the product that does not vary with the aircraft.',
    },
  ],
  cons: [
    {
      title: 'You cannot know what EcoFly includes until you book',
      body: 'Turkish publishes no fixed EcoFly baggage figure, and its own fare rules acknowledge routes with no checked allowance in the package at all. On a short-haul European sector the cheapest fare can be hand baggage only; on a long-haul one it may carry 20 kg. The headline fare is therefore not comparable across routes, let alone across airlines.',
    },
    {
      title: 'Seat selection is paid on the two cheapest packages',
      body: 'Turkish states that standard and preferred seats are offered for a fee on EcoFly and ExtraFly. Free standard seat selection begins at FlexFly — two packages above the entry fare.',
    },
    {
      title: 'The cabin depends on the aircraft, and Skytrax says so',
      body: 'Its Skytrax rating page states that product standards vary across the fleet by aircraft type. The 777-300ER business cabin is 2-3-2 without direct aisle access from every seat; the newer widebodies are 1-2-1. The Crystal seat that fixes this begins rolling out in early 2027.',
    },
    {
      title: 'Weak on putting things right',
      body: 'Turkish ranked 45th of 117 airlines in the 2025 AirHelp Score at 6.92 out of 10, with claims processing scored 4.1. On-time performance and customer opinion were respectable; what drags it down is what happens after something goes wrong.',
    },
  ],
  reputation: [
    {
      source: 'Skytrax',
      value: 4.0,
      note: 'certified 4-star airline; sixth in the 2025 top 100, best in Europe',
    },
    {
      source: 'AirHelp Score',
      value: 3.5,
      note: '2025 score of 6.92 out of 10, rescaled; rank 45 of 117 airlines',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite: unmatched network reach against an unpredictable entry fare',
    },
  ],
  bestFor: [
    'Routes to secondary cities the Gulf carriers do not serve at all',
    'Star Alliance members crediting flights to an existing balance',
    'Travellers who would use a long layover for a free hotel night in Istanbul',
  ],
  notFor: [
    'Hand-luggage-free travellers comparing EcoFly fares without opening the baggage panel',
    'Anyone who needs a refundable ticket at the bottom of the range',
    'Passengers who want a premium-economy cabin or a guaranteed direct-aisle business seat',
  ],
  faq: [
    {
      q: 'How much checked baggage does EcoFly include?',
      a: 'It depends on the route, and Turkish does not publish a single figure. Its own fare rules refer to routes with no checked baggage allowance in the EcoFly package, and short intra-Europe sectors are often exactly that. The allowance for your route appears in the booking flow next to the package name — open it before comparing the fare with anything else.',
    },
    {
      q: 'What are the four economy packages?',
      a: 'EcoFly, ExtraFly, FlexFly and PrimeFly, with BusinessFly and BusinessPrime in business class. FlexFly is frequently missing from third-party comparisons, and it is the cheapest package with free standard seat selection and free date changes.',
    },
    {
      q: 'Can I get a refund on an EcoFly ticket?',
      a: 'Only inside the 24-hour cooling-off window that applies to all packages. Beyond that EcoFly is non-refundable, and depending on the route changes are either charged against a deduction or not permitted at all.',
    },
    {
      q: 'Is the free Istanbul stopover hotel real?',
      a: 'Yes, and there are two separate schemes: a stopover programme you book in advance for a longer stay, and a transit-hotel service arranged at the airport on qualifying long connections. Both carry conditions on layover length, cabin and booking lead time, and the Touristanbul city tour cannot be combined with the hotel on the same layover. Confirm the current terms with Turkish before planning around them.',
    },
    {
      q: 'Is Turkish Airlines a five-star airline?',
      a: 'No. Skytrax certifies it at four stars and notes that product standards vary across the fleet by aircraft type. It placed sixth in the Skytrax 2025 top 100 and seventh in AirlineRatings’ 2026 list, and it holds the Skytrax best-airline-in-Europe title for a ninth time.',
    },
    {
      q: 'What is connecting through Istanbul like?',
      a: 'The terminal is enormous — roughly 1.44 million square metres — with no internal train, so a gate-to-gate transfer can be a long walk plus passport control. Turkish carried 84.5 million passengers through it in 2025. Published minimum connection times differ between sources, so build in more time than the tightest figure you find.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'turkishairlines.com',
}
