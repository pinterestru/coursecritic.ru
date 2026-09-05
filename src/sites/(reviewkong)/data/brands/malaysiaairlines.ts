/**
 * Brand page data for Malaysia Airlines (route: /brands/malaysiaairlines).
 *
 * SOURCES (checked 24 August 2026):
 *  - Founding, current corporate entity, hub, fleet size, destination count,
 *    Khazanah/MAG ownership, oneworld join date, MH370/MH17 history:
 *    https://en.wikipedia.org/wiki/Malaysia_Airlines
 *  - Skytrax 4-star certification, "once 5-star" status, A350 commentary:
 *    https://skytraxratings.com/airlines/malaysia-airlines-rating
 *  - Long Term Business Plan 3.0 — 27th today, Skytrax top-10 target by 2030,
 *    fleet growth to 116 aircraft:
 *    https://www.malaymail.com/news/money/2025/12/15/malaysia-aviation-group-unveils-five-year-plan-to-push-malaysia-airlines-into-skytrax-top-10-by-2030/202038
 *  - Enrich programme refresh effective 1 January 2026, tier names and new
 *    points thresholds: https://www.malaysiaairlines.com/hq/en/mh-media-centre/news-releases/2025/enrich-refreshed-programme.html
 *    and https://ringgitplus.com/en/blog/personal-finance-news/mas-updates-enrich-programme-with-new-earning-rates-tier-requirements-from-2026.html
 *  - Economy fare family names and checked-baggage tiers (Value 20kg, Basic
 *    25kg, Flex 35kg), April 2025 refresh: https://thetraveltinker.com/transport/malaysia-airlines-baggage-allowance/
 *  - Business Suite as the rebranded former first class, and its removal in
 *    the 2026 A350 retrofit: https://www.executivetraveller.com/malaysia-airlines-drops-first-class-rebrands-it-as-business-suites
 *    and https://deeparrival.com/airlines/malaysia-airlines/
 *  - Bonus Side Trip programme — free domestic leg, fare eligibility, 2025
 *    destination expansion: https://www.malaysiaairlines.com/hq/en/mh-media-centre/news-releases/2025/malaysia-airlines-expands-bonus-side-trip-programme-new-destinations.html
 *  - Trustpilot TrustScore and review count: https://www.trustpilot.com/review/malaysiaairlines.com
 *
 * ⚠️ Fares, baggage allowances and loyalty thresholds are working values
 * captured on 2026-08-24 and change without notice — re-verify against
 * Malaysia Airlines' own conditions before any campaign. Specific traps: the
 * Bonus Side Trip perk explicitly excludes the cheapest Economy Value fare;
 * fleet and destination counts are moving targets mid-way through the 2026–
 * 2030 Long Term Business Plan; and the Trustpilot score reflects the sample
 * of travellers who choose to review there, not a representative survey. See
 * ../../README.md.
 *
 * Note on the template: `plans` carries fare families rather than
 * subscription tiers, and `priceNote` deliberately avoids a "from $X" figure
 * because any such number would be wrong for most routes.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const malaysiaairlines: BrandPage = {
  slug: 'malaysiaairlines',
  providerId: 'malaysiaairlines',
  schemaType: 'Airline',
  metaTitle: 'Malaysia Airlines review 2026 — the Skytrax-Trustpilot gap',
  metaDescription:
    'An independent Malaysia Airlines review: the oneworld carrier linking Europe and Australia via Kuala Lumpur, and why its Skytrax and Trustpilot scores disagree.',
  intro:
    'Malaysia Airlines is the Khazanah-owned national carrier built around a single, useful idea: Kuala Lumpur as a stopover between Europe and Australia or New Zealand, with a genuinely free domestic side trip thrown in on most fares. Skytrax rates the product 4-star and points to real improvement on the A350 fleet. Set that against a 1.7-out-of-5 Trustpilot score built on hundreds of service complaints, and the gap between "what the aircraft is like" and "what happens when something goes wrong" is the whole story here.',
  about: [
    'Malaysia Airlines traces to Malayan Airways, which began flying in 1947, and operates today as Malaysia Airlines Berhad, restructured under Malaysia Aviation Group (MAG) in September 2015. MAG is wholly owned by Khazanah Nasional, Malaysia’s sovereign wealth fund, which has kept the airline dependent on state ownership rather than outside capital through a difficult decade. That decade included two events that reshaped the airline financially and reputationally: the March 2014 disappearance of flight MH370 and the July 2014 shooting-down of flight MH17 over eastern Ukraine, both of which are documented at length elsewhere and are not revisited here beyond noting their lasting effect on the carrier’s finances and public trust.',
    'The airline flies from its main hub at Kuala Lumpur International Airport, with a secondary base at Kota Kinabalu for East Malaysia and Borneo routes, to roughly 69 destinations from a fleet of about 86 aircraft. It joined oneworld on 1 February 2013, so Enrich miles and status credit into a network that also includes British Airways, Qatar Airways and Cathay Pacific. Kuala Lumpur’s role as a connecting point between Europe and Australia or New Zealand is deliberate strategy, reinforced by a genuinely free perk: eligible transit passengers can add a no-base-fare domestic leg to a handful of Malaysian cities, or regional points on sister carrier Firefly.',
    'In December 2025, MAG published Long Term Business Plan 3.0, targeting a Skytrax top-10 global ranking by 2030 — up from 27th at the time of the announcement — alongside a fleet expansion toward 116 aircraft, built on 40 Airbus A330neos and a direct order for 30 Boeing 737 MAX jets. Skytrax’s own write-up credits recent product investment, particularly on the A350, while noting the airline held 5-star certification in the past and could regain it with more consistent service. The plan is a stated ambition rather than an achieved result, and is worth checking on again as the decade progresses.',
  ],
  facts: [
    { label: 'Founded', value: '1947, Kuala Lumpur' },
    { label: 'Hub', value: 'Kuala Lumpur Intl (KLIA)' },
    { label: 'Network', value: '~69 destinations' },
    { label: 'Loyalty', value: 'Enrich (oneworld)' },
  ],
  plans: {
    title: 'Fare families and what they include',
    note: 'Fares and allowances are route- and date-dependent, and the numbers below follow the April 2025 economy refresh. The trap to know before booking: the free Bonus Side Trip perk is not available on the cheapest Economy Value fare, only on Basic, Flex and Business.',
    items: [
      {
        name: 'Economy Value',
        price: 'the entry fare',
        detail:
          'Still includes a 20 kg checked bag plus a 7 kg cabin allowance — unlike bag-free budget fares elsewhere. What it excludes is flexibility: no Bonus Side Trip eligibility and the most restrictive change terms.',
      },
      {
        name: 'Economy Basic',
        price: 'a step up from Value',
        detail:
          '25 kg checked and eligible for the free Bonus Side Trip domestic leg on qualifying international itineraries. The fare most worth comparing against other airlines’ standard economy.',
        pick: true,
      },
      {
        name: 'Economy Flex',
        price: 'the flexible economy fare',
        detail:
          '35 kg checked, standard seat selection and looser change and refund terms, plus Bonus Side Trip eligibility. Priced for travellers who need to keep a booking movable.',
      },
      {
        name: 'Business',
        price: 'multiples of economy',
        detail:
          'Lie-flat seating on long-haul aircraft and Golden Lounge access. A handful of A350s still carry the old Business Suite — the rebranded former first class — but it is being phased out as the A350 retrofit rolls through 2026.',
      },
    ],
  },
  pros: [
    {
      title: 'A checked bag on every fare, even the cheapest',
      body: 'Economy Value still carries a 20 kg checked allowance. Several rivals sell a bag-free entry fare that looks cheaper on the search page and is not once luggage is added.',
    },
    {
      title: 'A genuinely free stopover perk',
      body: 'The Bonus Side Trip programme adds a no-base-fare domestic or regional leg to a qualifying international itinerary transiting Kuala Lumpur — a real cost saving, not a marketing phrase, on Basic fares and above.',
    },
    {
      title: 'oneworld membership since 2013',
      body: 'Enrich miles and elite status credit into a global alliance that includes British Airways, Qatar Airways and Cathay Pacific, useful if a balance already sits with one of them.',
    },
    {
      title: 'Skytrax specifically credits recent A350 investment',
      body: 'Its rating notes standards "much improved" over the last two years, with the A350 called out by name — a specific, checkable claim rather than a blanket compliment.',
    },
  ],
  cons: [
    {
      title: 'A dismal Trustpilot score',
      body: 'Malaysia Airlines sits at 1.7 out of 5 on Trustpilot from several hundred reviews, dominated by complaints about delays and customer service. That is a far worse showing than the Skytrax product rating implies.',
    },
    {
      title: 'The Bonus Side Trip perk skips the cheapest fare',
      body: 'It is not available on Economy Value, only on Basic, Flex and Business. Book the entry fare expecting the free side trip and you will find out otherwise at checkout.',
    },
    {
      title: 'A stated turnaround, not a finished one',
      body: 'MAG’s own December 2025 plan puts Malaysia Airlines 27th in the Skytrax world ranking today, targeting top 10 only by 2030. The airline held 5-star certification once and has not yet regained it.',
    },
  ],
  reputation: [
    {
      source: 'Skytrax',
      value: 4.0,
      note: 'certified 4-star; previously 5-star, targeting Skytrax top 10 by 2030 from 27th today',
    },
    {
      source: 'Trustpilot',
      value: 1.7,
      note: 'from several hundred reviews, mostly delay and service complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite: a genuinely improving product against a poor service-recovery reputation',
    },
  ],
  bestFor: [
    'Travellers routing between Europe and Australia or New Zealand who want a useful Kuala Lumpur stopover',
    'oneworld members who want Enrich miles and status to credit into an existing alliance balance',
    'Anyone who wants a checked bag included even on the cheapest advertised economy fare',
    'Passengers specifically booking the A350, where Skytrax notes the clearest recent improvement',
  ],
  notFor: [
    'Travellers who weight customer-service reputation heavily — the Trustpilot record is genuinely poor',
    'Anyone booking Economy Value and expecting the free Bonus Side Trip perk to apply',
    'Passengers wanting a dedicated premium economy cabin or a proper first-class product',
  ],
  faq: [
    {
      q: 'Is Malaysia Airlines still a 5-star airline?',
      a: 'No. Skytrax currently certifies it at 4-star, though it has held 5-star certification in the past. Skytrax’s own assessment says the airline could regain that top rating with more consistent service, and MAG has set a public target of reaching Skytrax’s top 10 global airlines by 2030, from 27th at the end of 2025.',
    },
    {
      q: 'Does every economy fare include a checked bag?',
      a: 'Yes. Even the cheapest Economy Value fare carries a 20 kg checked allowance, rising to 25 kg on Basic and 35 kg on Flex, plus a 7 kg cabin bag on every tier. That is more generous than airlines that sell a hand-luggage-only entry fare.',
    },
    {
      q: 'What is the Bonus Side Trip programme?',
      a: 'A free domestic or regional leg added to a qualifying international itinerary transiting Kuala Lumpur, at zero base fare plus taxes. It covers destinations across Malaysia and a few regional points on sister carrier Firefly, but it is only available on Economy Basic, Economy Flex and Business fares — not on Economy Value.',
    },
    {
      q: 'Who owns Malaysia Airlines?',
      a: 'Malaysia Aviation Group, which operates Malaysia Airlines, is wholly owned by Khazanah Nasional, Malaysia’s sovereign wealth fund. The group has said it hopes to resume dividend discussions with Khazanah from 2026 or 2027, having funded recent fleet growth largely outside a shareholder cash injection.',
    },
    {
      q: 'Is there still a first class or premium economy cabin?',
      a: 'Not in the conventional sense. The old first class was rebranded Business Suite in 2018 and survives on a shrinking number of A350s as the fleet is retrofitted through 2026; there is no separate premium economy cabin between Economy and Business on the current network.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'malaysiaairlines.com',
}
