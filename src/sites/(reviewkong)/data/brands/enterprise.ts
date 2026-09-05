/**
 * Brand page data for Enterprise Rent-A-Car (route: /brands/enterprise).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Enterprise_Rent-A-Car and
 *     https://en.wikipedia.org/wiki/Enterprise_Holdings — founding by Jack
 *     Taylor in 1957, the 1969 rename, the neighbourhood-first business model,
 *     Enterprise Holdings as the private parent of Enterprise/National/Alamo
 *   - https://www.enterprise.ca/en/car-rental-faqs/canada-renter-requirements/car-rental-under-25.html
 *     — Canadian minimum age and young-renter surcharge
 *   - https://www.enterprise.ca/en/car-rental-faqs/canada-deposits-and-payments/how-much-is-a-rental-car-deposit.html
 *     — deposit policy (no fixed published figure)
 *   - https://www.enterprise.com/en/car-rental-faqs/us-deposits-and-payments/forms-of-payment.html
 *     and https://www.enterprise.com/en/help/faqs/fueling-rental-car.html —
 *     debit-card conditions and the three fuel-payment options
 *   - https://www.trustpilot.com/review/www.enterprise.com — rating and volume
 *
 * ⚠️ Deposit amounts, young-renter fees and fuel prices are working values
 * captured on 2026-08-24 and vary by province, city and vehicle class. None of
 * the figures here are fixed published prices — re-verify at enterprise.ca
 * before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const enterprise: BrandPage = {
  slug: 'enterprise',
  providerId: 'enterprise',
  metaTitle: 'Enterprise review 2026 — deposit, fuel and young-driver fees',
  metaDescription:
    'An independent Enterprise review for Canada: the deposit it will not put a number on, how the fuel options work, and what renting under 25 costs.',
  intro:
    'Enterprise built its business on neighbourhood branches rather than airport counters, and that history still shapes how it operates in Canada today. The car itself is rarely the issue — it is the deposit hold, the fuel choice at pickup and the under-25 surcharge that decide whether the rental costs what the headline rate implied.',
  about: [
    'Jack Taylor founded the company in 1957 in St. Louis as a small car-leasing operation with seven vehicles, renaming it Enterprise in 1969 in honour of the aircraft carrier he served on in the Second World War. Rather than chase airport traffic, Taylor built the business around local, off-airport branches that would pick renters up — a model still visible in how Enterprise positions itself against its own sister brands today.',
    'Enterprise is one of three brands owned by Enterprise Holdings, a privately held company controlled by the Taylor family, alongside National Car Rental and Alamo Rent A Car. The three run on shared reservation and fleet infrastructure but keep separate identities: Enterprise leans local and neighbourhood, Alamo leans airport and leisure. In Canada, enterprise.ca is the storefront for the brand’s local, corporate-account and insurance-replacement business as well as ordinary leisure rentals.',
    'The commercial mechanics that actually matter are the deposit and the fuel choice. Enterprise does not publish a fixed Canadian deposit figure — its own FAQ tells renters to start a reservation or call the branch to find out, which is a real gap if you are trying to budget before you commit. Fuel is more transparent: full-to-full is the default, with a prepaid option and a refuel-for-you option sitting either side of it as the counter’s two upsells.',
  ],
  facts: [
    { label: 'Founded', value: '1957, St. Louis' },
    { label: 'Parent company', value: 'Enterprise Holdings' },
    { label: 'Canada minimum age', value: '21' },
    { label: 'Sister brands', value: 'National, Alamo' },
  ],
  plans: {
    title: 'What renting actually costs beyond the daily rate',
    note: 'This is a rental company, not a subscription, so treat the items below as the cost layers a renter meets rather than plan tiers. Enterprise does not publish fixed figures for the deposit or the young-renter fee — both vary by province and branch.',
    items: [
      {
        name: 'Standard rental, self-fill fuel',
        price: 'Daily rate + refundable deposit hold',
        detail:
          'Full-to-full: collect with a full tank, return it full yourself at a station of your choosing, and no fuel charge applies.',
        pick: true,
      },
      {
        name: 'Prepaid fuel',
        price: 'One tank charged at pickup, at a discounted per-litre rate',
        detail:
          'Pay upfront for a full tank and return the car on empty — convenient, but you get no credit back for fuel you did not use.',
      },
      {
        name: 'Enterprise refuels for you',
        price: 'Refuel charge above the local pump price',
        detail:
          'Return the car with less than a full tank and Enterprise fills it, billing you at a rate higher than the pump — the option to avoid if you can.',
      },
      {
        name: 'Under-25 rental',
        price: 'Daily rate + young-renter surcharge (around $25/day on average)',
        detail:
          'Minimum age in Canada is 21; drivers under 25 pay an additional daily fee that Enterprise says varies by location.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely large local network',
      body: 'Enterprise Holdings runs thousands of branches worldwide, and Enterprise’s neighbourhood-first model means a pickup near home or office is often realistic, not just at the airport.',
    },
    {
      title: 'Fuel options that do not force a bad deal',
      body: 'Return-full self-fill costs nothing extra. The prepaid and refuel-for-you options exist, but a renter who plans ahead can avoid both fuel upsells entirely and still return the car on time.',
    },
    {
      title: 'Backed by shared group infrastructure',
      body: 'The same reservation system and roadside support sit behind Enterprise, National and Alamo, so the booking experience is consistent even when the branch is a small local one.',
    },
    {
      title: 'Insurance-replacement and corporate accounts are a real strength',
      body: 'Enterprise’s neighbourhood branch network was built partly around insurance-replacement rentals, which shows in how smoothly that specific use case tends to run compared with a pure airport-desk operation.',
    },
  ],
  cons: [
    {
      title: 'No published deposit figure',
      body: 'Enterprise Canada will not commit to a number in its own FAQ — it varies by branch, region and vehicle class, and you find out only once you start booking or call ahead.',
    },
    {
      title: 'Under-25 surcharge is real money on a short rental',
      body: 'At an average of roughly $25 a day, a week-long rental for a 22-year-old adds well over $100 before anything else about the booking changes at all.',
    },
    {
      title: 'Public reputation sits in “poor” territory',
      body: 'Enterprise’s Trustpilot profile is dominated by complaints about reserved cars not being available and disputed repair or fuel charges after return — read the small print at pickup.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.8, note: 'over a thousand reviews, rated “Poor”' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'strong on network size and fuel transparency, marked down for the undisclosed deposit and weak public reputation',
    },
  ],
  bestFor: [
    'Renters who want a pickup near home rather than only at the airport',
    'Anyone confident about returning the tank full, avoiding both fuel upsells',
    'Insurance-replacement rentals, where Enterprise’s branch network has depth',
    'Renters over 25 who avoid the young-renter surcharge entirely',
  ],
  notFor: [
    'Renters under 25 who are fee-sensitive on a short trip',
    'Anyone who wants to know the exact deposit before booking',
    'Travellers prioritising a strong public trust score over price',
  ],
  faq: [
    {
      q: 'How old do I need to be to rent from Enterprise in Canada?',
      a: 'The minimum age is 21 across Canada. Drivers between 21 and 24 pay an additional young-renter fee on top of the daily rate, which Enterprise says averages around $25 a day but varies by location, so confirm the figure before you book.',
    },
    {
      q: 'How much deposit will Enterprise take?',
      a: 'Enterprise does not publish a fixed figure for Canada — its own FAQ says the amount depends on region, vehicle class and other factors, and recommends starting a reservation or contacting the branch directly to find out before you commit.',
    },
    {
      q: 'What is the smartest fuel option?',
      a: 'Return the car with a full tank yourself. It costs nothing extra. The prepaid option only makes sense if you are certain you will use most of the tank, and letting Enterprise refuel the car for you is priced above the local pump rate.',
    },
    {
      q: 'Is Enterprise the same company as Alamo?',
      a: 'Same parent, different brand. Both sit under the privately held Enterprise Holdings alongside National Car Rental. Enterprise leans toward neighbourhood and corporate rentals; Alamo is positioned specifically for airport leisure travel and family holidays instead of ordinary local, everyday use.',
    },
    {
      q: 'Can I use a debit card?',
      a: 'Some locations accept debit cards to secure a rental, but conditions apply — at airport counters this typically requires a ticketed return travel itinerary, and the name and address on your licence must match your current one on file. Confirm with the specific branch before you rely on it for pickup.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'enterprise.ca',
}
