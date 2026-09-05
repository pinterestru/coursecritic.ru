/**
 * Brand page data for Air India (route: /brands/airindia).
 *
 * SOURCES (checked 24 August 2026):
 *  - Fleet size, destination count, hubs, Star Alliance date, Tata/Singapore
 *    Airlines ownership split, Vistara merger: https://en.wikipedia.org/wiki/Air_India
 *  - Skytrax 4-star certification and fleet-consistency wording:
 *    https://skytraxratings.com/airlines/air-india-rating
 *  - Skytrax rating announcement and Vihaan.AI framing:
 *    https://www.airindia.com/in/en/newsroom/press-release/air-india-earns-skytrax-4-star-rating-as-passenger-experience-tr.html
 *  - Smart Fares (Value/Classic/Flex) structure and baggage weights:
 *    https://www.happyfares.in/blog/air-india-fare-types-classes-guide-2026/ and
 *    https://www.indianeagle.com/travelbeats/air-india-economy-fare-types-value-vs-classic/
 *  - Maharaja Club tier structure and Star Alliance status matching:
 *    https://www.airindia.com/in/en/maharaja-club/about/tiers-benefits.html
 *  - 787 retrofit programme, $400m investment, first retrofitted aircraft:
 *    https://aviationa2z.com/index.php/2026/08/15/air-india-to-modernize-16-boeing-787-8s-in-2027/
 *    and Air India's own press release on the first retrofitted 787 (19 Apr 2026)
 *  - June 2025 Ahmedabad crash and casualty figures: https://en.wikipedia.org/wiki/Air_India
 *  - Contested investigation reporting: https://www.eurasiareview.com/28022026-the-june-2025-air-india-crash-whodunit-oped/
 *  - AirHelp Score and subscores: https://www.airhelp.co.uk/airlines/air-india/reviews/
 *  - Trustpilot sentiment (qualitative only — see caveat below): search-indexed
 *    excerpts of https://www.trustpilot.com/review/airindia.in and airindia.com
 *
 * ⚠️ Airline fares, baggage allowances and fleet-retrofit progress change
 * without notice; re-verify against Air India's own fare rules before launch.
 * Specific caveats: (a) Trustpilot's live page returned HTTP 403 to automated
 * fetches on every attempt, so no numeric TrustScore is printed anywhere on
 * this page or in `reputation` — only the qualitative, search-corroborated
 * sentiment appears, and it should be re-verified by opening the page directly
 * before launch; (b) the AirHelp Score (6.11/10) has been rescaled to this
 * site's 0–5 scale as 3.1; (c) the cause of the June 2025 Ahmedabad crash is
 * contested in public reporting as of August 2026 — the copy below states only
 * what is settled (the crash occurred, the AAIB's interim report and its
 * reception) and takes no position on disputed claims about cause; (d) fleet
 * size, destination count and retrofit completion percentages move month to
 * month during an active transformation programme — treat the figures here as
 * a August 2026 snapshot. See ../../README.md.
 *
 * Note on the template: `plans` carries Air India's Smart Fares families rather
 * than subscription tiers, and no reputation entry cites Trustpilot because the
 * number could not be verified by direct fetch (see caveat above).
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const airindia: BrandPage = {
  slug: 'airindia',
  providerId: 'airindia',
  schemaType: 'Airline',
  metaTitle: 'Air India review 2026 — the retrofit and the scrutiny',
  metaDescription:
    'An independent Air India review: the Tata-era turnaround, Star Alliance access through Delhi, the unfinished 787 retrofit, and the scrutiny since June 2025.',
  intro:
    'Air India is the clearest turnaround story in aviation and also the airline under the most scrutiny. Since Tata Sons took it back from the state in 2022, the Vihaan.AI programme has funded new aircraft, a Boeing 787 cabin retrofit and a Skytrax upgrade to four stars. What has not gone away is the aftermath of the June 2025 Ahmedabad crash, and a fleet where the cabin you actually get still depends on which specific aircraft you are booked onto.',
  about: [
    'Air India traces back to Tata Airlines, founded by JRD Tata in 1932 as an airmail service between Karachi and Bombay; it was nationalised in 1953 and stayed government-owned for 69 years until Tata Sons bought it back in January 2022. The November 2024 merger with Vistara folded in Singapore Airlines as a 25.1% shareholder alongside Tata’s 74.9%. The airline now runs roughly 189 aircraft to 87 destinations in 37 countries from its main hub at Delhi, with Mumbai and Bengaluru as secondary bases, and has flown as a Star Alliance member since July 2014.',
    'The turnaround has a name — Vihaan.AI — and a budget behind it: around 570 aircraft on order since 2022 across Airbus and Boeing, plus a separate roughly $400 million programme to retrofit the legacy Boeing 787 cabins that came with the original fleet. The first retrofitted 787 entered service in April 2026, and Air India says the remaining legacy aircraft in that batch will carry new interiors by late 2026; the narrow-body fleet is further along, with the bulk already upgraded. Skytrax raised its certification from three stars to four in 2026 on the strength of that work.',
    'Skytrax’s own rating page is candid about what is not finished yet: it notes that "some variation across the fleet is still evident, with product standards and service execution being inconsistent" — precisely the retrofitted-versus-legacy gap the investment is meant to close. The airline is also operating under heavier outside scrutiny than its Gulf and Turkish rivals: Air India Flight 171, a 787-8, crashed shortly after takeoff from Ahmedabad in June 2025, killing all but one of the 242 people aboard and 19 people on the ground. The investigation into its cause remained contested in public reporting as of August 2026.',
  ],
  facts: [
    { label: 'Founded', value: '1932, Mumbai' },
    { label: 'Hub', value: 'Indira Gandhi Intl (DEL)' },
    { label: 'Network', value: '87 routes, 37 countries' },
    { label: 'Loyalty', value: 'Maharaja Club, Star Alliance' },
  ],
  plans: {
    title: 'Smart Fares and what they include',
    note: 'Air India rebuilt its economy fare families in October 2024 into three tiers — Value, Classic and Flex — with cabin baggage standardised at 7 kg plus a personal item across all three. What changes is the checked allowance and the change/refund terms, and the domestic rules are stricter than the international ones, so check which itinerary you are actually booking against.',
    items: [
      {
        name: 'Value',
        price: 'the entry fare',
        detail:
          'On international routes this still includes one checked bag; on domestic routes the allowance is lighter and the change and refund terms are the most restrictive of the three.',
      },
      {
        name: 'Classic',
        price: 'a step up from Value',
        detail:
          'Adds a second checked bag internationally and a larger domestic allowance, with less punitive change rules. The fare most worth comparing against other airlines’ standard economy.',
        pick: true,
      },
      {
        name: 'Flex',
        price: 'the flexible economy fare',
        detail:
          'The largest economy baggage allowance and the least restrictive changes, for a fee over Classic. Meals are included across all three economy tiers.',
      },
      {
        name: 'Business',
        price: 'multiples of economy',
        detail:
          'Lie-flat seating on retrofitted widebodies, lounge access and a generous baggage allowance — with the caveat that the seat you get still depends on whether your specific aircraft has been through the cabin refit.',
      },
    ],
  },
  pros: [
    {
      title: 'A Star Alliance hub with genuine long-haul reach',
      body: 'Delhi connects onward through the largest airline alliance in the world, and Maharaja Club Gold and Platinum members get reciprocal Star Alliance Gold-equivalent status from day one.',
    },
    {
      title: 'The retrofit programme is real, not just a press release',
      body: 'The first cabin-refreshed Boeing 787 is already flying, roughly 570 new aircraft are on order, and Skytrax moved Air India from three stars to four on the back of the work done so far.',
    },
    {
      title: 'The cheapest international fare still checks a bag',
      body: 'Value includes one checked bag on international routes — a lower floor than some rivals’ entry fares, which drop baggage entirely at the bottom of the range.',
    },
    {
      title: 'One of very few full-service options out of India',
      body: 'For long-haul travel originating in or connecting through India, Air India’s network and Star Alliance ties are broader than any other India-based carrier can currently offer.',
    },
  ],
  cons: [
    {
      title: 'The cabin you get depends on the aircraft, not the fare',
      body: 'Skytrax’s own rating notes inconsistent product standards across the fleet. A Business ticket on a retrofitted 787 and the same ticket on a legacy one are not the same product, and there is no reliable way to guarantee which you get.',
    },
    {
      title: 'Safety scrutiny that has not resolved',
      body: 'The June 2025 Ahmedabad crash killed 241 of the 242 people aboard and 19 on the ground, and its investigation remained contested in public reporting through August 2026. That overhang sits alongside the Skytrax upgrade, not instead of it.',
    },
    {
      title: 'Weak at putting things right after a claim',
      body: 'AirHelp’s claims-processing subscore for Air India is 4.4 out of 10, well below its passenger-opinion subscore, and independent review sites skew heavily towards complaints about refund and customer-service response times.',
    },
  ],
  reputation: [
    {
      source: 'Skytrax',
      value: 4.0,
      note: 'raised from 3-star in 2026; fleet consistency flagged as still uneven',
    },
    {
      source: 'AirHelp Score',
      value: 3.1,
      note: 'overall 6.11/10, rank 72 of 117; claims processing the weak subscore',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite: a real network and retrofit against unresolved safety scrutiny',
    },
  ],
  bestFor: [
    'Long-haul travellers connecting through Delhi to Star Alliance partners across Europe, the Americas and Asia',
    'Existing Star Alliance Gold or Platinum flyers who want matching Maharaja Club status immediately',
    'International travellers who want a checked bag included even on the cheapest fare',
    'Passengers happy to check which specific aircraft is flying their route before they book',
  ],
  notFor: [
    'Anyone assuming a Business-class ticket buys the same seat on every aircraft — it does not yet',
    'Travellers who want an airline with a fully settled, uncontested recent safety record',
    'Passengers who expect a fast, friction-free process if a claim or refund goes wrong',
  ],
  faq: [
    {
      q: 'Is Air India safe to fly in 2026?',
      a: 'It operates under the same international regulatory oversight as any Star Alliance carrier, and Skytrax’s 2026 upgrade covers cabin and service quality, not a safety certification. The June 2025 Ahmedabad crash and its contested investigation are a real part of the airline’s current record, and readers should weigh that alongside the operational improvements rather than instead of them.',
    },
    {
      q: 'Why does the cabin vary so much between flights on the same route?',
      a: 'Air India inherited an older 787 fleet that is being retrofitted in stages — the first refreshed aircraft entered service in April 2026, with the rest of that batch due by late 2026. Skytrax’s own rating explicitly flags this inconsistency. Until the programme finishes, the same route can be flown by a retrofitted or a legacy aircraft.',
    },
    {
      q: 'What does the Value fare actually include?',
      a: 'On international routes, one checked bag around 23 kg; on domestic routes, a lighter allowance and the most restrictive change and refund terms of the three Smart Fares tiers. Cabin baggage (7 kg plus a personal item) and a meal are included on all three tiers — confirm the exact figure for your route in the booking flow.',
    },
    {
      q: 'Is Air India part of Star Alliance?',
      a: 'Yes, since July 2014. Maharaja Club members at Gold and Platinum get benefits matched to Star Alliance Gold, and Silver members match Star Alliance Silver, so miles and status both carry across the alliance rather than being locked to Air India alone.',
    },
    {
      q: 'How good is Air India at handling delays and compensation claims?',
      a: 'Not strong. AirHelp scores its claims processing at 4.4 out of 10 against a healthier 7.6 for passenger opinion and 6.4 for on-time performance, and independent review sites lean heavily towards complaints about slow refunds and customer service. Budget extra time if you need to chase a claim.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'airindia.com',
}
