/**
 * Brand page data for Kiwi.com (route: /brands/kiwi).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.kiwi.com/en/pages/content/company/ and https://en.wikipedia.org/wiki/Kiwi.com
 *     — founding year (2012), Brno HQ, the Skypicker-to-Kiwi.com rebrand (2016)
 *   - https://www.kiwi.com/en/guarantee/ and the Kiwi.com Help Centre article
 *     "What's the Kiwi.com Guarantee?" — what the Guarantee covers and how
 *     it is offered at booking
 *   - https://www.kiwi.com/en/pages/content/fees/ — how the service fee is
 *     built into the shown price, no separately disclosed amount
 *   - https://media.kiwi.com/company-news/kiwi-com-business-update/ — daily
 *     search volume and seats sold, from Kiwi.com's own newsroom
 *   - https://www.trustpilot.com/review/kiwi.com — rating and review volume
 *
 * ⚠️ Fees, the exact composition of the Guarantee and the daily volume
 * figures are working values and MUST be re-verified against kiwi.com before
 * launch and before each campaign. Kiwi.com's own Guarantee page does not
 * publish tiered pricing at the time of writing — do not reintroduce the
 * "Basic/Standard/Plus, priced in EUR" structure some third-party blogs
 * describe unless it is re-confirmed on kiwi.com directly. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const kiwi: BrandPage = {
  slug: 'kiwi',
  providerId: 'kiwi',
  metaTitle: 'Kiwi.com review 2026 — virtual interlining and the Guarantee',
  metaDescription:
    'An independent Kiwi.com review: how virtual interlining combines unrelated airlines into one fare, what the Guarantee covers, and why refunds turn into credit.',
  intro:
    'Kiwi.com built its business on a routing trick most other search engines will not attempt: combining flights from airlines that have no partnership with each other into one bookable itinerary, often for less than a single-carrier ticket. That is genuinely useful. It is also genuinely riskier than a normal connection, which is why the site sells its own protection on top, and why what happens when a self-transfer goes wrong matters more here than on almost any other booking site.',
  about: [
    'Kiwi.com launched in 2012 out of Brno, Czech Republic, as Skypicker, a fare-alert engine built by two students; it rebranded to Kiwi.com in 2016 once the "virtual interlining" search became the core product rather than a side feature. The company is now backed by growth investor General Atlantic and operates as a straightforward flight-search-and-booking agency rather than a travel supermarket — no hotels bolted on for their own sake, no cruise upsell, no distractions from the routing engine that is the entire point.',
    "The mechanism is what sets it apart. Ordinary search engines only show connections airlines have agreed to sell together. Kiwi.com will instead combine, say, a budget carrier into a city with a long-haul flight out of it on a completely unrelated airline, checking you don't need a visa for the stopover country and pricing the two legs as one trip. According to Kiwi.com's own newsroom, the search engine handles tens of millions of queries and tens of thousands of booked seats every day, at a scale few pure-play OTAs match.",
    "The trade-off is liability. If the two airlines on a self-transfer itinerary do not codeshare, neither one owes you anything if the first flight is delayed and you miss the second — normally that is entirely the traveller's problem. Kiwi.com's answer is the Kiwi.com Guarantee, offered at checkout on itineraries that need it, which is the entire reason to read the rest of this page before assuming a self-transfer fare is simply free money.",
  ],
  facts: [
    { label: 'Founded', value: '2012, as Skypicker' },
    { label: 'Headquarters', value: 'Brno, Czech Republic' },
    { label: 'Core mechanism', value: 'Virtual interlining' },
    { label: 'Self-transfer risk', value: 'Covered by add-on' },
  ],
  plans: {
    title: 'How the pricing works',
    note: "The headline fare already includes Kiwi.com's service fee — the company says it does not disclose that fee as a separate line — so compare the total, not the fare, against a single-carrier search before booking.",
    items: [
      {
        name: 'Single-carrier or codeshare fare',
        price: "The carrier fare plus Kiwi.com's built-in service fee",
        detail:
          'A normal itinerary on one airline or an alliance. Safer in the ordinary sense: one carrier is liable for the whole journey.',
      },
      {
        name: 'Self-transfer (virtual interlining) fare',
        price: 'Usually the cheapest option on the route',
        detail:
          'Two or more unrelated airlines stitched into one itinerary. The saving is real; so is the fact that no single airline is responsible if a connection fails.',
        pick: true,
      },
      {
        name: 'Kiwi.com Guarantee',
        price: 'An add-on fee shown at checkout, varies by itinerary',
        detail:
          'Covers rebooking, and hotel or meal costs, if a self-transfer connection breaks. Offered specifically where the itinerary needs it — read what it actually pays out before assuming it is comprehensive.',
      },
      {
        name: 'Bags, seats and other extras',
        price: "Airline's own price, passed through",
        detail:
          'Added at booking or later from your Kiwi.com account, generally cheaper added early since most carriers raise the price closer to departure.',
      },
    ],
  },
  pros: [
    {
      title: 'Routes that simply do not exist elsewhere',
      body: 'Virtual interlining finds itineraries ordinary search engines cannot construct because the airlines involved never agreed to sell them together. For unusual city pairs, that can be the only sensible option.',
    },
    {
      title: 'Genuinely lower fares on the routes it is built for',
      body: 'Combining a low-cost short-haul leg with an unrelated long-haul carrier regularly beats what either airline charges alone on the connecting route, before any add-on protection is factored in.',
    },
    {
      title: 'The Guarantee prices a real risk, not a manufactured one',
      body: 'Rather than pretending self-transfer connections are as safe as a codeshare, Kiwi.com sells specific cover for the exact failure mode its own product creates. That is a more honest structure than most competitors offer.',
    },
    {
      title: 'Automatic check-in on covered itineraries',
      body: 'Kiwi.com will check passengers in and deliver boarding passes for flights on the Guarantee, removing one of the manual steps a self-transfer otherwise leaves entirely to the traveller.',
    },
  ],
  cons: [
    {
      title: 'Miss a connection without the Guarantee, and it is on you',
      body: "Unrelated airlines share no liability for each other's delays. Skip the add-on to save money on a self-transfer fare and a late first leg can strand you with no one obliged to rebook you.",
    },
    {
      title: 'Refunds skew toward Kiwi.com Credit, not cash',
      body: "Trustpilot's most repeated complaint is cancellations resolved as travel credit or a partial refund rather than money back, which matters if you are not planning to book with Kiwi.com again.",
    },
    {
      title: 'Re-checking bags at the connection is on you',
      body: "A self-transfer usually means clearing the first airline's baggage claim and re-checking in with the second, inside whatever layover time the itinerary gave you. Build in margin, especially through unfamiliar airports.",
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.0,
      note: 'rated "Great"; a very large, long-running review base with a recurring refund-as-credit complaint',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'strong for the routing itself, marked down for what happens when a self-transfer goes wrong',
    },
  ],
  bestFor: [
    'Travellers on an unusual city pair where no single airline or alliance sells a through fare',
    'Anyone happy to buy the Guarantee and treat it as the real cost of a self-transfer saving',
    'Budget trips where the cheapest legal combination of airlines matters more than one ticket number',
    'Confident self-transfer flyers comfortable clearing immigration and re-checking bags mid-trip',
  ],
  notFor: [
    'Anyone connecting through an unfamiliar airport on a tight layover without buying the Guarantee',
    'Travellers who want a single ticket number and one airline responsible for the whole itinerary',
    'Anyone who needs a cash refund rather than credit if plans change after booking',
  ],
  faq: [
    {
      q: 'What is virtual interlining?',
      a: 'It is combining flights from airlines with no commercial agreement between them into a single bookable trip. Kiwi.com issues two separate tickets behind the scenes and prices them as one itinerary, which is how it finds routes and fares other search engines do not show.',
    },
    {
      q: 'Do I need the Kiwi.com Guarantee?',
      a: 'You need it on any self-transfer itinerary where you would otherwise have no recourse if the first flight runs late. On a single-carrier or codeshare booking the airline already carries that liability, so the add-on matters far less there than on a self-transfer fare between two unrelated carriers.',
    },
    {
      q: 'Why did my refund come back as credit instead of cash?',
      a: 'This is the most common complaint on public review sites. Depending on the fare rules of the airlines involved and how the cancellation happened, Kiwi.com can resolve it with Kiwi.com Credit rather than a refund to your original payment method — check the terms before assuming cash back is guaranteed.',
    },
    {
      q: 'Is Kiwi.com cheaper than booking directly with an airline?',
      a: "Often, specifically because of virtual interlining and low-cost-carrier combinations a direct airline site cannot offer at all. On routes already served well by a single airline or alliance, the saving shrinks and can disappear once Kiwi.com's built-in service fee is counted against the direct fare.",
    },
    {
      q: 'What happens if I miss a connection I did not insure?',
      a: 'If the two carriers do not codeshare and you declined the Guarantee, rebooking and any resulting costs are yours to arrange and pay for, including a new fare if the original one is not refundable. This is the central trade-off of self-transfer travel and the reason the Guarantee exists as a product at all.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'kiwi.com',
}
