/**
 * Brand page data for Qatar Airways (route: /brands/qatarairways).
 *
 * SOURCES (checked 21 August 2026):
 *  - Fare-family matrix (Lite / Classic / Convenience / Comfort): https://www.qatarairways.com/tradeportal/en/NewFareFamilies.html
 *  - Baggage allowance by fare: https://www.qatarairways.com/en/baggage/allowance.html
 *  - Seat-selection and optional fees: https://www.qatarairways.com/en-us/optional-services-and-fees.html
 *  - Fleet and Qsuite configurations: https://www.qatarairways.com/en/fleet.html
 *  - Skytrax certification: https://skytraxratings.com/airlines/qatar-airways-rating
 *  - World Airline Awards winners list: https://www.worldairlineawards.com/airline-of-the-year-winners/
 *  - AirlineRatings world's best 2026: https://www.airlineratings.com/articles/qatar-airways-is-named-worlds-best-airline-for-2026-by-airlineratings
 *  - Hamad International 2025 performance: https://dohahamadairport.com/press-releases/news/2025-operational-performance
 *  - Network rebuild to 160 destinations: https://travelweekly.co.uk/news/qatar-airways-restores-network-to-160-destinations-this-summer
 *  - A350 dispute settlement: https://www.forbes.com/sites/dominicdudley/2023/02/01/airbus-and-qatar-airways-settle-a350-dispute-and-revive-cancelled-aircraft-orders/
 *
 * ⚠️ Airline fares are route- and date-dependent, and fare-family rules change
 * without notice. Nothing here is a quotable price; re-verify against Qatar's
 * own conditions before launch. Three specific traps: qatarairways.com blocks
 * automated fetching, so the fare-family and fee figures above were read from
 * archived captures of Qatar's own pages dated April–June 2026 and need a
 * human eye on the live page; the 2026 Skytrax World Airline Awards are not
 * announced until 18 September 2026, so Qatar's 2026 crown is AirlineRatings'
 * and not Skytrax's; and the destination count is unusually volatile because
 * the network was still being rebuilt through summer 2026 after February's
 * regional airspace closures. See ../../README.md.
 *
 * Note on the template: `plans` carries fare families rather than subscription
 * tiers, and `priceNote` deliberately avoids a "from $X" figure because any such
 * number would be wrong for most routes.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const qatarairways: BrandPage = {
  slug: 'qatarairways',
  providerId: 'qatarairways',
  schemaType: 'Airline',
  metaTitle: 'Qatar Airways review 2026 — what Economy Lite excludes',
  metaDescription:
    'An independent Qatar Airways review: the only 5-star carrier of the four, what Economy Lite includes, and why it cannot be changed at any price.',
  intro:
    'Qatar Airways is the only airline in this comparison that Skytrax certifies at five stars, and it is one of the few premium carriers whose cheapest fare still includes a checked bag, a meal and seat-back entertainment. The catch is not the baggage. It is that Economy Lite is neither changeable nor refundable — the strictest entry fare of the Gulf three — so the money you save is money you cannot get back.',
  about: [
    'Qatar Airways was founded in 1993 and began flying in January 1994. It operates from Hamad International in Doha, a single-terminal airport whose Concourses D and E opened in March 2025, taking the building to about 845,000 square metres and 62 contact gates. Hamad handled 54.3 million passengers in 2025 at a stated 85% on-time performance — roughly half the throughput of Dubai, in a terminal designed for transfers.',
    'The fleet is around 267 aircraft, weighted towards A350s and 787s, with 57 Boeing 777-300ERs and eight active A380s. That A380 flying is now narrow: the type returned to service in June 2026 on just two routes, Doha–London Heathrow and Doha–Bangkok. Qatar’s network was rebuilt to more than 160 destinations over summer 2026 after February’s regional airspace closures forced a suspension and a staged restart, so the destination count is a moving number rather than a settled one.',
    'On product, the headline is Qsuite: a business class with closing doors, centre pairs that convert to a double bed, and a four-seat "quad" for travelling groups. It is not fitted fleet-wide — Qatar’s own fleet page marks only certain A350 and 777 configurations — so the aircraft matters as much as the route. There is no premium economy: what Qatar sells as Comfort Plus is a paid extra-legroom seat inside the economy cabin, priced from about US$83 to US$250 per sector, not a separate cabin. Qatar is a oneworld member and its Privilege Club has earned and burned in Avios since 2022.',
  ],
  facts: [
    { label: 'Founded', value: '1993, Doha' },
    { label: 'Hub', value: 'Hamad International (DOH)' },
    { label: 'Network', value: '~160 destinations' },
    { label: 'Loyalty', value: 'Privilege Club (Avios)' },
  ],
  plans: {
    title: 'Fare families and what they include',
    note: 'Fares are route- and date-dependent, so treat the ordering below as the rule and Qatar’s own booking flow as the authority. The rule worth memorising: the bag is included in every fare, but Economy Lite permits neither changes nor refunds — Qatar’s own fare table marks both "not applicable" — and its standard seat is free only once online check-in opens. Qatar does not publish cash change fees for the fares that do allow changes.',
    items: [
      {
        name: 'Economy Lite',
        price: 'the entry fare',
        detail:
          '20 kg checked on most routes, or one 23 kg bag to and from the Americas and Africa, plus 7 kg cabin. No changes and no refunds at all. Standard seat free only at online check-in; pre-selecting earlier costs roughly US$9–48 per sector. Earns 25% Avios.',
      },
      {
        name: 'Economy Classic',
        price: 'a step up from Lite',
        detail:
          '25 kg checked, changes and refunds permitted on payment of a fee, 50% Avios. The first fare in the range you can actually alter, which is what most travellers are really buying.',
        pick: true,
      },
      {
        name: 'Economy Convenience',
        price: 'the mid economy fare',
        detail:
          '30 kg checked, one complimentary change, free standard seat selection at any time, 75% Avios.',
      },
      {
        name: 'Economy Comfort, Business and First',
        price: 'multiples of the entry fare',
        detail:
          'Comfort adds 35 kg, free preferred seats, free changes and free refunds. Business runs Lite to Elite and is where Qsuite sits on the aircraft that have it; First survives on the A380 and one 777 configuration.',
      },
    ],
  },
  pros: [
    {
      title: 'The only five-star certification of the four',
      body: 'Skytrax certifies Qatar Airways at five stars, where Emirates, Etihad and Turkish all hold four. It also took the Skytrax World’s Best Airline title for 2025 — its ninth — and AirlineRatings named it world’s best airline for 2026.',
    },
    {
      title: 'Nothing essential is stripped out of the cheap fare',
      body: 'Qatar states plainly that checked baggage is included on all its flights, and meals and seat-back entertainment come with every fare. Economy Lite gives you 20 kg, or one 23 kg piece on Americas and Africa routings.',
    },
    {
      title: 'A hub built around transferring',
      body: 'Hamad is one terminal with concourses A to E and no inter-terminal shuttle to catch, handling 54.3 million passengers in 2025 — a little over half Dubai’s volume through a building expanded in March 2025.',
    },
    {
      title: 'Qsuite, where it is fitted',
      body: 'Closing doors, direct aisle access, centre pairs that convert to a double bed and a four-seat quad. Qatar’s own fleet page shows which A350 and 777 configurations carry it — worth checking against your specific flight.',
    },
  ],
  cons: [
    {
      title: 'Economy Lite cannot be changed or refunded at all',
      body: 'Qatar’s fare table marks both changes and refunds "not applicable" on Lite. Not chargeable — unavailable. If your plans are anything other than fixed, Classic is the fare to compare against rivals, not Lite.',
    },
    {
      title: 'No premium economy cabin',
      body: 'Comfort Plus is a paid extra-legroom seat in the economy cabin at roughly US$83–250 per sector, not a separate class. Anyone shopping for a genuine premium-economy product has to look at Emirates instead.',
    },
    {
      title: 'The network is still a moving target',
      body: 'Flights from Doha were suspended in February 2026 during the regional airspace closures and rebuilt through the spring; trade press put the network at more than 160 destinations by June. Check that your specific route is actually operating before comparing fares.',
    },
    {
      title: 'Qsuite and First are not fleet-wide',
      body: 'The retrofit is incomplete, so a 777 or A350 booking does not guarantee the suite, and the A380 — where First lives — flies only London and Bangkok. Read the seat map, not the brochure.',
    },
  ],
  reputation: [
    {
      source: 'Skytrax',
      value: 5.0,
      note: 'certified 5-star airline; World’s Best Airline 2025, its ninth title',
    },
    {
      source: 'AirHelp Score',
      value: 4.1,
      note: '2025 score of 8.16 out of 10, rescaled; ranked first of 117 airlines',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.7,
      note: 'our composite: certification and fare inclusions against Lite’s rigidity',
    },
  ],
  bestFor: [
    'Travellers with fixed dates who want a premium cabin and a bag in the headline fare',
    'One-stop routings between Europe or the Americas and South and South-East Asia',
    'oneworld and Avios collectors crediting flights to a programme they already hold',
  ],
  notFor: [
    'Anyone whose dates might move — Economy Lite cannot be changed at any price',
    'Passengers who specifically want a premium-economy cabin rather than a bigger seat',
    'Travellers who need certainty that a given flight carries Qsuite or First',
  ],
  faq: [
    {
      q: 'Does Economy Lite include a checked bag?',
      a: 'Yes — 20 kg on weight-concept routes and one 23 kg piece to and from the Americas and Africa, plus 7 kg cabin. Qatar’s own baggage page states that checked baggage is included on all its flights. The restriction on Lite is flexibility, not luggage.',
    },
    {
      q: 'Can I change or cancel an Economy Lite ticket?',
      a: 'No. Qatar’s fare table marks changes and refunds as not applicable on Lite. Economy Classic is the cheapest fare that permits either, and it charges for both. If there is any chance your plans move, price Classic rather than Lite.',
    },
    {
      q: 'Do I pay to choose a seat?',
      a: 'On Economy Lite a standard seat is free once online check-in opens; selecting one earlier costs roughly US$9–48 per sector. Preferred and extra-legroom seats are chargeable on the lower fares, and free seat selection comes with Comfort fares and with Privilege Club Gold and Platinum status.',
    },
    {
      q: 'Is Qatar Airways the world’s best airline in 2026?',
      a: 'AirlineRatings named it world’s best for 2026, published in March. Skytrax’s 2026 awards had not been announced at the time of writing — the ceremony is on 18 September 2026 — so its most recent Skytrax title is the 2025 one. The two organisations are separate and should not be conflated.',
    },
    {
      q: 'Does Qatar Airways have premium economy?',
      a: 'Not as a cabin. Comfort Plus is an extra-legroom seat sold inside the economy cabin, at roughly US$83–250 per sector. A four-class layout including a true premium economy has been committed for the 777-9, which is not yet delivered.',
    },
    {
      q: 'What is connecting through Doha like?',
      a: 'Hamad is a single terminal with concourses A to E, so there is no shuttle between buildings, and Qatar reports 85% on-time performance across 2025. It is a smaller operation than Dubai at 54.3 million passengers. Published minimum connection times vary between sources, so allow more than the tightest figure you find.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'qatarairways.com',
}
