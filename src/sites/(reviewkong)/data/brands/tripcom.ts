/**
 * Brand page data for Trip.com (route: /brands/tripcom).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Trip.com_Group — founding as Ctrip in 1999,
 *     2019 rebrand, Nasdaq (2003) and Hong Kong Stock Exchange (2021) listings,
 *     the Ctrip/Qunar/Trip.com/Skyscanner brand portfolio
 *   - https://www.trip.com/customer/loyalty/ and https://us.trip.com/ask/questions/trip.com-membership.html
 *     — the six-tier Trip Coins membership programme and lounge-visit perks
 *   - https://sg.trip.com/ask/questions/trip.com-cancellation-policy.html and
 *     https://sg.trip.com/ask/questions/trip.com-flight-refund.html — refund
 *     handling as an agent, the 24-hour free-cancellation window on eligible
 *     fares, and the non-refundable service fee
 *   - https://uk.trip.com/ask/questions/booking-fee.html — the service-fee
 *     structure added at checkout
 *   - https://www.trustpilot.com/review/trip.com — TrustScore and review volume
 *     (verified via cached search results after the live page returned 403)
 *   - Google Play listing for "Trip.com: Book Flights, Hotels" — app rating
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const tripcom: BrandPage = {
  slug: 'tripcom',
  providerId: 'tripcom',
  metaTitle: 'Trip.com review 2026 — fees, refunds and Trip Coins',
  metaDescription:
    'An independent Trip.com review: how refunds work when it acts as agent, where the checkout service fee hides, and what the Trip Coins tiers are worth.',
  intro:
    'Trip.com is the international arm of Trip.com Group, the Nasdaq- and Hong Kong-listed operator behind Ctrip, Qunar and Skyscanner. It sells flights, hotels, trains and packages across a large catalogue of airlines and properties, at prices that are usually competitive. The part worth reading before you book is who you actually deal with when a flight changes: Trip.com is an intermediary, not the airline.',
  about: [
    'The company started in 1999 as Ctrip, founded by James Liang, Neil Shen, Min Fan and Qi Ji, and was structured the following year around a Cayman Islands holding company. It listed on Nasdaq in 2003, consolidated Qunar in 2015 and Skyscanner in 2016, then renamed itself Trip.com Group in 2019 and added a Hong Kong Stock Exchange listing in 2021. Trip.com is the brand built for travellers outside mainland China; Ctrip still serves the domestic Chinese market under its own name and interface.',
    'It operates as a travel agent rather than a direct supplier: flights, hotels and train tickets are booked through Trip.com but fulfilled by the airline, hotel or rail operator whose terms actually govern the booking. That distinction matters at the exact point something goes wrong. A schedule change, a cancellation or a refund amount is decided by the underlying supplier’s own fare rules, not by Trip.com, which relays the outcome rather than setting it. Expecting Trip.com to override an airline’s policy is the most common source of frustration in its reviews.',
    'A service fee is added at checkout on many flight, hotel and train bookings, layered on top of the base price and separate from any airline change or cancellation charge. It is not disclosed as a single flat number because it scales with the size and complexity of the booking, and it is generally non-refundable even when the underlying ticket is. Reading the full price breakdown before paying, rather than only the headline fare shown in search results, is the only reliable way to see it before you commit to paying it.',
  ],
  facts: [
    { label: 'Founded', value: '1999, as Ctrip' },
    { label: 'Parent', value: 'Trip.com Group (Nasdaq/HKEX)' },
    { label: 'Model', value: 'Books as agent, not supplier' },
    { label: 'Loyalty', value: 'Six-tier Trip Coins scheme' },
  ],
  plans: {
    title: 'How the cost stacks up at checkout',
    note: 'The headline fare is not the final price. A service fee is added per booking, and it is separate from — and additional to — whatever the airline, hotel or rail operator charges to change or cancel.',
    items: [
      {
        name: 'Standard fare booking',
        price: 'Ticket or room rate plus a checkout service fee',
        detail:
          'The fee scales with the booking rather than being fixed, and it is shown in the price breakdown before payment, not in the headline price.',
        pick: true,
      },
      {
        name: 'Free-cancellation fares',
        price: 'No extra charge on eligible fares',
        detail:
          'Some flights carry a 24-hour free-cancellation window from purchase. Outside that window, the airline’s own fare rules apply and Trip.com’s service fee is not refunded.',
      },
      {
        name: 'Trip Coins membership',
        price: 'Free to join',
        detail:
          'Six tiers from Silver to Black Diamond, reached by spend and booking frequency. Higher tiers earn bonus Trip Coins and complimentary airport lounge visits.',
      },
    ],
  },
  pros: [
    {
      title: 'One of the widest inventories for cross-border trips',
      body: 'Flights, hotels, trains and packages sit on one account, which is genuinely convenient for multi-leg itineraries that cross several countries, currencies and languages without switching apps.',
    },
    {
      title: 'Pricing is usually competitive on the headline fare',
      body: 'Aggregators and reviewers consistently note that Trip.com’s base prices compare well against booking directly with the airline and against rival OTAs, before the checkout service fee is added on top.',
    },
    {
      title: '24/7 support in multiple languages',
      body: 'Support operates around the clock rather than office hours, which matters on a platform used across very different time zones, though response quality is uneven once a real dispute is involved.',
    },
    {
      title: 'A loyalty scheme that rewards frequent bookers',
      body: 'Trip Coins accrue on every booking and the top membership tiers add complimentary lounge access and priority support, a real, usable benefit for people who book through the platform repeatedly.',
    },
  ],
  cons: [
    {
      title: 'The service fee is easy to miss and rarely refunded',
      body: 'It is added per booking and disclosed only inside the checkout price breakdown, not the headline fare. Cancel the underlying ticket and the fee typically stays charged regardless of the airline refund.',
    },
    {
      title: 'Refund timelines run on the supplier, not on Trip.com',
      body: 'Because Trip.com is the agent rather than the airline or hotel, it must first receive the refund from that supplier before passing it on. Reviewers repeatedly cite this relay as the source of the longest waits.',
    },
    {
      title: 'Support quality is inconsistent under pressure',
      body: 'A meaningful share of negative reviews describe long response times and unresolved billing disputes during disruption, which is exactly the moment fast, competent support matters most to a stranded traveller.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.4, note: 'around 195,000 reviews; 13% are 1-star' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'strong inventory and pricing, marked down for fee transparency and refund speed',
    },
  ],
  bestFor: [
    'Multi-country itineraries where one account across flights, hotels and trains saves time',
    'Travellers who read the full price breakdown before paying',
    'Frequent bookers who will actually climb the Trip Coins tiers',
    'Routes where Trip.com’s fare beats the airline’s own site even after the service fee',
  ],
  notFor: [
    'Anyone who wants to deal directly with the airline if a flight changes',
    'Bookings you might cancel — the service fee is usually gone either way',
    'Travellers who need a fast refund and cannot tolerate the agent-relay delay',
  ],
  faq: [
    {
      q: 'Who do I contact if my flight is cancelled or rescheduled?',
      a: 'Trip.com support handles communication around the booking, but the airline sets the actual rebooking or refund options available. Trip.com relays what the airline offers rather than deciding it independently; it cannot grant terms the airline itself has not approved, so a dispute over compensation ultimately runs on the airline’s policy, not Trip.com’s.',
    },
    {
      q: 'Is the service fee refundable if I cancel?',
      a: 'Generally no. The fee is charged for the booking transaction itself, separately from the airline or hotel’s own cancellation terms, so it is usually kept even when the underlying ticket or room is fully refunded by the supplier. Check the price breakdown at the time of booking to see the exact amount before you pay.',
    },
    {
      q: 'How long do refunds actually take?',
      a: 'It depends on the supplier rather than on Trip.com. Trip.com must first receive the refund from the airline, hotel or rail operator before it can pass the money on to you, so the real timeline is set by that third party’s own processing speed, which varies widely by airline and fare type.',
    },
    {
      q: 'Is Trip.com the same company as Ctrip?',
      a: 'Yes, in origin. Ctrip launched in 1999 and now operates as one brand within Trip.com Group alongside Qunar, Trip.com and Skyscanner. Trip.com is the brand built specifically for travellers outside mainland China, while Ctrip continues to serve the domestic Chinese market under its own name.',
    },
    {
      q: 'Do Trip Coins expire?',
      a: 'Membership tiers and coin balances are tied to ongoing activity under the programme’s own rules, which vary by market and change over time. Rather than assuming a balance will simply carry over, check the current terms shown in your Trip.com account before you rely on it for a future booking.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'trip.com',
}
