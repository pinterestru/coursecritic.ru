/**
 * Brand page data for Omio (route: /brands/omio).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.omio.com/about-us and https://www.omio.com/corporate/ —
 *     founding in 2013 (as GoEuro), Berlin HQ, 3,000+ transport providers,
 *     47 countries, 250+ major European rail providers
 *   - https://en.wikipedia.org/wiki/Omio — 2013 founding by Naren Shaam and
 *     Matt Wheeler, GoEuro-to-Omio rename, Series E funding
 *   - https://www.prnewswire.com/news-releases/omio-group-to-acquire-rail-europe-to-consolidate-the-ground-transportation-landscape-302830915.html
 *     and https://www.eu-startups.com/2026/07/german-traveltech-success-omio-group-agrees-to-acquire-rail-europe-in-major-rail-distribution-deal
 *     — the July 2026 agreement for Omio Group to acquire Rail Europe
 *   - https://help.omio.com/hc/en-us/articles/203726791-Why-is-there-a-service-fee
 *     and related Omio Help Centre articles — the service fee is shown before
 *     payment, is non-refundable, and refunds/cancellations otherwise follow
 *     the travel provider's own fare rules unless Omio Flex was added
 *   - Trustpilot listing for omio.com — rating and review volume
 *
 * ⚠️ Prices, fees and the Rail Europe deal status are working values captured
 * on 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const omio: BrandPage = {
  slug: 'omio',
  providerId: 'omio',
  metaTitle: 'Omio review 2026 — the service fee and who to book with',
  metaDescription:
    'An independent Omio review: how the multi-modal search compares trains, buses and flights across Europe, what the checkout service fee actually covers, and where refunds get complicated.',
  intro:
    'Omio compares trains, buses, flights and ferries across a continent in one search, which is precisely the problem it was built to solve for anyone tired of checking five separate booking sites before a European trip. The catch is a checkout service fee that is not part of the fare you were quoted, and a refund process that depends entirely on the operator you actually booked, not on Omio itself.',
  about: [
    'Omio launched in Berlin in 2013 as GoEuro, founded by Naren Shaam after he found booking cross-border ground transport in Europe needlessly fragmented. The company renamed to Omio in 2019 as it expanded beyond Europe, and it now works with more than 3,000 transport providers, including over 250 major European rail operators such as SNCF, Deutsche Bahn, Renfe and Trenitalia, across 47 countries in total. That growth from a single-founder frustration to a continent-wide catalogue is the whole pitch in miniature.',
    'In July 2026, Omio Group agreed to acquire Rail Europe, a deal aimed at consolidating rail distribution under one technology layer rather than adding another competing storefront. For a reader comparing booking sites today, the near-term effect is simply that Omio is expanding its direct relationships with rail operators rather than reselling through a further layer of intermediaries — worth knowing, though the integration itself will take time and the on-site experience has not visibly changed yet.',
    "Omio's own role is that of a comparison and booking agent, not a carrier. It searches live fares from its partner operators, takes the booking, and adds its own service fee at checkout, disclosed before payment rather than buried in a later step. What happens if a trip needs to change afterwards then depends on the operator's own fare rules, which Omio does not control and states plainly, rather than vaguely, in its public help centre.",
  ],
  facts: [
    { label: 'Founded', value: '2013, as GoEuro' },
    { label: 'Headquarters', value: 'Berlin, Germany' },
    { label: 'Coverage', value: '3,000+ providers, 47 countries' },
    { label: 'Service fee', value: 'Added at checkout, non-refundable' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'The fare shown in search is not the final price — a service fee is added at checkout and is disclosed before you pay, but it does not come back if you cancel.',
    items: [
      {
        name: 'Standard booking',
        price: 'Operator fare plus a checkout service fee',
        detail:
          'The default for any train, bus or flight search. The service fee funds multilingual support and change/cancellation assistance, and is shown before you confirm payment.',
        pick: true,
      },
      {
        name: 'Omio Flex',
        price: 'An optional add-on priced per booking',
        detail:
          'Buys the right to cancel online for a refund on tickets that would otherwise be non-refundable under the operator’s own fare rules. Only useful if your plans are genuinely uncertain.',
      },
      {
        name: 'Assisted change or cancellation',
        price: 'Operator fare rules plus a support fee where applicable',
        detail:
          'If Omio’s customer support handles a flight or ferry change on your behalf, it can charge its own fee on top of anything the operator charges, disclosed upfront before you agree to proceed.',
      },
    ],
  },
  pros: [
    {
      title: 'One search across trains, buses, flights and ferries',
      body: 'Comparing modes rather than just operators is the actual product. On many European routes a bus or train beats a flight on total door-to-door time, and Omio is one of the few tools that shows that trade-off directly.',
    },
    {
      title: 'Genuinely broad rail relationships',
      body: 'More than 250 major European rail operators sit behind the search, including the large national carriers, which matters on routes where a single operator’s own site sells only its own trains.',
    },
    {
      title: 'The service fee is disclosed, not hidden in the fine print',
      body: 'Omio’s help centre explains what the fee funds and shows the total before payment, which is more transparent than agencies that surface it only at the final confirmation screen.',
    },
    {
      title: 'Support built for cross-border ticket problems',
      body: 'Because the whole product is multi-country, multi-operator bookings, its support model is built around exactly the kind of provider-side changes and cancellations that trip up a one-off booking made directly with a small regional carrier.',
    },
  ],
  cons: [
    {
      title: 'The service fee is never refunded',
      body: 'Cancel a booking and the fare may or may not come back depending on the operator’s fare rules, but the Omio service fee itself does not — it is explicitly non-refundable, whatever else happens to the ticket.',
    },
    {
      title: 'Refund timing is the operator’s, not Omio’s',
      body: 'Omio processes the request, but how long a refund actually takes to land depends on the train, bus or airline you booked. Do not expect a uniform turnaround across every provider in the catalogue.',
    },
    {
      title: 'Regional Trustpilot pages tell a rougher story',
      body: 'The main omio.com storefront rates solidly, but several country-specific Omio domains score noticeably lower on Trustpilot, which suggests the experience is not identical everywhere the service operates.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.0, note: 'main omio.com storefront, 20,000+ reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'wide multi-modal coverage weighed against the non-refundable service fee',
    },
  ],
  bestFor: [
    'Anyone comparing trains, buses and flights on the same European route before deciding how to travel',
    'Multi-country trips where checking five separate national rail sites is not worth the time',
    'Travellers who want a live price for the true booking cost, service fee included, before they commit',
    'Bookers whose plans are firm enough that a non-refundable service fee is not a real risk',
  ],
  notFor: [
    'Anyone who can book directly with a single national rail operator at no extra fee for a simple one-leg journey',
    'Travellers with genuinely uncertain plans who are not willing to pay extra for Omio Flex to keep tickets cancellable',
    'Bookers outside omio.com’s stronger markets, where regional Trustpilot scores run lower',
  ],
  faq: [
    {
      q: 'Is Omio a real carrier or a booking agent?',
      a: 'A booking agent. Omio does not run trains, buses or flights itself — it searches and sells inventory from more than 3,000 transport providers and takes a service fee for doing so. The trip itself is operated, and largely governed, by the carrier you actually book.',
    },
    {
      q: 'Why does the price go up at checkout?',
      a: "Because the fare shown in search results does not include Omio's service fee, which is added before payment and disclosed in full on the checkout screen. Compare the total at checkout, not the headline search price, if you are weighing Omio against a carrier's own site.",
    },
    {
      q: 'Can I get a refund if I cancel?',
      a: "Depends on the fare rules of the operator you booked. Some tickets are refundable by default, others are not unless you added Omio Flex at checkout. Either way, Omio's own service fee is non-refundable regardless of what happens to the ticket itself.",
    },
    {
      q: 'Does Omio cover routes outside Europe?',
      a: 'Yes, though its strongest relationships remain European rail. The catalogue spans 47 countries in total, so coverage outside Europe exists but is not as dense as it is on the routes Omio was originally built around — check the app for your specific destination before assuming full mode coverage applies there too.',
    },
    {
      q: 'What is the Rail Europe acquisition and does it change anything today?',
      a: 'Omio Group agreed in July 2026 to acquire Rail Europe, aiming to bring more rail distribution under one technology layer. As of this review the deal had not changed how a booking on omio.com works day to day, but it signals the company deepening its rail relationships rather than expanding into unrelated categories.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'omio.com',
}
