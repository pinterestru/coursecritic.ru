/**
 * Brand page data for Alamo Rent A Car (route: /brands/alamo).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Alamo_Rent_a_Car — founding in Florida in
 *     1974, the leisure/airport positioning, 2007 acquisition by Enterprise
 *     Holdings after the earlier Cerberus/Vanguard ownership
 *   - https://www.alamo.com/en/customer-support/car-rental-faqs/age-to-rent-a-car.html
 *     — minimum age (21, 18 in NY/MI) and the youthful-driver surcharge
 *   - https://www.alamo.com/en/customer-support/car-rental-faqs/fuel-options.html
 *     — the two fuel-payment options
 *   - https://carinsurent.com/car-rental/alamo-car-rental-deposit-what-you-need-to-know/
 *     and Alamo’s own rental-requirements FAQ — deposit shape and debit-card
 *     conditions at airport counters
 *   - https://www.trustpilot.com/review/www.alamo.com — rating and volume
 *
 * ⚠️ Deposit ranges, surcharge amounts and fuel prices are working values
 * captured on 2026-08-24 and vary by state, airport and vehicle class — none
 * are fixed published prices. Re-verify at alamo.com before any campaign. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const alamo: BrandPage = {
  slug: 'alamo',
  providerId: 'alamo',
  metaTitle: 'Alamo review 2026 — deposit, fuel and under-25 fees',
  metaDescription:
    'An independent Alamo review: what the deposit hold covers, how the two fuel options compare, and what the youthful-driver surcharge costs by state.',
  intro:
    'Alamo is Enterprise Holdings’ airport-and-leisure brand, built from the start for vacationers rather than local errands, not for someone popping out for groceries. It is a sound choice on price at the counter, but the deposit hold, the fuel choice and a youthful-driver surcharge that varies sharply by state are where a quoted rate turns into the amount actually charged.',
  about: [
    'Alamo was founded in 1974 in Florida, built around roughly 1,000 cars across four locations and aimed squarely at leisure travellers rather than business renters. It grew by undercutting larger competitors on price and leaning on airport counters, changing hands more than once — including a stretch under Cerberus-backed Vanguard Car Rental — before Enterprise Holdings bought it in 2007 and folded it in alongside Enterprise and National as one of its three core brands.',
    'That leisure-first identity still shapes the brand: Alamo markets itself on value-oriented airport rentals for family and holiday travel, with a footprint across North America, Latin America, the Caribbean and a broad international list beyond that, including stops in the Middle East and Asia-Pacific. It shares Enterprise Holdings’ reservation and fleet backbone with its sister brands, so the booking mechanics behind the scenes are the same even though the on-lot experience skews more toward the airport desk than the neighbourhood branch.',
    'The rental requirements are where Alamo asks more of a renter than the sticker price suggests. Minimum age is 21 almost everywhere (18 in New York and Michigan), a youthful-driver surcharge applies under 25 and varies enormously by state, and the deposit at pickup is a hold sized to cover the estimated total plus a buffer for damage, extra mileage or fuel — typically in the low hundreds of dollars, though Alamo does not commit to one figure across all locations.',
  ],
  facts: [
    { label: 'Founded', value: '1974, Florida' },
    { label: 'Parent company', value: 'Enterprise Holdings' },
    { label: 'Minimum age', value: '21 (18 in NY, MI)' },
    { label: 'Positioning', value: 'Airport, leisure travel' },
  ],
  plans: {
    title: 'What renting actually costs beyond the daily rate',
    note: 'Not a subscription: the items below are the cost layers a renter meets at the counter. Deposit and surcharge figures move by state and location — treat the ranges as the shape, not a quote.',
    items: [
      {
        name: 'Standard rental, pay-for-fuel-used',
        price: 'Daily rate + deposit hold (commonly low hundreds of dollars)',
        detail:
          'Collect with a full tank and either return it full yourself, or let Alamo refill it and bill you at a rate above local pump prices.',
        pick: true,
      },
      {
        name: 'Prepaid fuel',
        price: 'One tank charged at pickup, at an estimated rate',
        detail:
          'Pay for a full tank upfront and return the car empty — no refund for fuel you did not use, so it only pays off on a long trip.',
      },
      {
        name: 'Under-25 rental',
        price: 'Daily rate + youthful-driver surcharge',
        detail:
          'Surcharge size varies sharply by state — reported figures range from roughly $15 to nearly $70 a day depending on age band and location — and can also restrict which car classes are available.',
      },
    ],
  },
  pros: [
    {
      title: 'Built for the airport-leisure trip',
      body: 'Counter locations, shuttle pickups and a fleet mix skewed toward the cars families and holiday travellers actually book — this is Alamo’s specialty, not an afterthought.',
    },
    {
      title: 'Two honest fuel choices',
      body: 'Return the tank full yourself and pay nothing extra, or prepay if a long trip makes that the better bet. Neither option hides the trade-off.',
    },
    {
      title: 'Backed by Enterprise Holdings’ scale',
      body: 'Same reservation platform and roadside infrastructure as its much larger sister brand, which shows up in booking reliability even at smaller regional airports far from a major hub.',
    },
    {
      title: 'Competitive on headline price for leisure routes',
      body: 'Alamo built its original business on undercutting larger rivals on price, and that value positioning still shows up clearly on standard leisure-route pricing across most of its network today.',
    },
  ],
  cons: [
    {
      title: 'Youthful-driver surcharge is inconsistent and can be steep',
      body: 'The fee for renters under 25 varies enormously by state — in some states it is a modest daily add-on, in others it roughly doubles the youngest bracket’s effective rate.',
    },
    {
      title: 'Deposit is a range, not a number',
      body: 'The hold at pickup depends on location and vehicle class, commonly in the low hundreds of dollars — Alamo will not give you a fixed figure before you arrive at the counter.',
    },
    {
      title: 'Public reputation runs negative',
      body: 'Alamo’s Trustpilot profile skews toward complaints about unexpected damage or administrative charges and inconsistent service between locations — read the final charges closely before you sign.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.8, note: 'several thousand reviews, rated “Poor”' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'solid on price and fuel clarity, held back by the surcharge variance and weak public reputation',
    },
  ],
  bestFor: [
    'Airport leisure trips where value pricing matters most',
    'Renters over 25 who avoid the youthful-driver surcharge entirely',
    'Travellers confident they can return the tank full themselves',
    'Anyone already comparing sister brands National or Enterprise for the same trip',
  ],
  notFor: [
    'Renters under 25 in a high-surcharge state, where the fee changes the maths',
    'Anyone needing a guaranteed deposit figure before booking',
    'Renters prioritising a strong public trust score over price',
  ],
  faq: [
    {
      q: 'What is the minimum age to rent from Alamo?',
      a: 'Alamo is 21 almost everywhere, with New York and Michigan the exceptions at 18. Renters between 21 and 24 pay an additional youthful-driver surcharge that varies widely by state and can also limit which vehicle classes are offered to them at pickup.',
    },
    {
      q: 'How much is the deposit?',
      a: 'Alamo holds an amount at pickup sized to cover the estimated rental total plus a buffer for damage, extra mileage or fuel — commonly in the low hundreds of dollars, though the exact figure depends on location and vehicle class and is not published as a fixed number.',
    },
    {
      q: 'Which fuel option should I pick?',
      a: 'Return the tank full yourself if you can — it costs nothing extra. Prepaying only makes sense on a long trip where you are confident you will use most of a full tank, since unused prepaid fuel is not refunded.',
    },
    {
      q: 'Can I pay the deposit with a debit card?',
      a: 'At airport locations, debit is generally accepted only when the renter has a ticketed return travel itinerary. Requirements vary by location, so confirm with the specific counter before you show up planning to rely on a debit card for the deposit.',
    },
    {
      q: 'Is Alamo the same company as Enterprise?',
      a: 'Same parent — both are owned by the privately held Enterprise Holdings, alongside National Car Rental. Alamo is positioned for airport leisure travel and family holidays; Enterprise leans toward neighbourhood pickups and corporate accounts instead of relying mainly on airport counters.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'alamo.com',
}
