/**
 * Brand page data for Gotogate (route: /brands/gotogate).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.gotogate.com/about-gotogate — Etraveli Group ownership,
 *     "running its travel agency business since 1989," online since 2000,
 *     77 countries, 650+ airlines, 300,000+ hotels/holiday rentals, close to
 *     14 million customers and 4 million+ holidays sold group-wide, and the
 *     line "in-person customer support isn't available"
 *   - https://www.etraveligroup.com/about-etraveli-group/ — Etraveli Group
 *     describing itself as serving 48 million+ travellers a year in 75+
 *     countries and as "the largest tech company selling flights in Europe,"
 *     with partnerships including Booking.com, Google Flights and Skyscanner
 *   - https://en.wikipedia.org/wiki/Etraveli_Group — Etraveli's 2000 origin
 *     as Seat24 and the 2007 merger that created Etraveli
 *   - https://www.gotogate.com/c/faq/ticket-changes-and-cancellation — the
 *     7-day-out full-refund window and airline-governed fare rules
 *   - https://www.trustpilot.com/review/www.gotogate.com — rating and
 *     review volume for the main gotogate.com storefront
 *
 * ⚠️ Figures are working values captured on 2026-08-24. Etraveli Group's own
 * "close to 14 million customers" line is a group-wide figure covering all
 * of its consumer brands (Gotogate, Mytrip, Flightnetwork), not Gotogate
 * alone — do not present it as a Gotogate-only number. Re-verify all figures
 * against gotogate.com and etraveligroup.com before launch. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const gotogate: BrandPage = {
  slug: 'gotogate',
  providerId: 'gotogate',
  metaTitle: 'Gotogate review 2026 — cheap fares, a low Trustpilot score',
  metaDescription:
    'An independent Gotogate review: what the Etraveli-owned agency is, why it powers fares on Google Flights too, and why Trustpilot rates it "Poor."',
  intro:
    "Gotogate is a flight-booking agency owned by Etraveli Group, the Swedish company that describes itself as the largest tech firm selling flights in Europe — and that also supplies fares to Google Flights, Skyscanner and Booking.com behind the scenes. The fares can be genuinely cheap. The reason this review exists is that Gotogate's own Trustpilot rating sits well below every other brand in this comparison, and that gap deserves an explanation rather than a shrug.",
  about: [
    "Gotogate sits inside Etraveli Group, a company whose roots go back to Seat24, a Swedish flight-booking site founded in 2000; a 2007 merger with travel agency SRG created Etraveli itself. Etraveli's own materials describe the group as running a travel agency business since 1989 and now serving more than 48 million travellers a year across upwards of 75 countries, through a portfolio that also includes Mytrip and Flightnetwork alongside Gotogate.",
    'What makes Etraveli unusual is its second business line: it is a backend flight-booking supplier to some of the biggest names in travel search, including Google Flights, Skyscanner and Booking.com. A fare bought through Gotogate directly and a fare bought through one of those metasearch partners can, on some routes, trace back to the same underlying inventory — which is worth knowing before assuming a Gotogate booking is meaningfully different from what a comparison site already showed you.',
    'Gotogate\'s own catalogue is broad on paper: the company cites comparisons across more than 650 airlines and access to roughly 300,000 hotels and holiday rentals alongside car rental in all the usual price and size categories. Its own "about" page is also candid about one limitation — it states plainly that in-person customer support is not available, and directs customers to a contact form and FAQ instead of a phone number or office.',
  ],
  facts: [
    { label: 'Parent company', value: 'Etraveli Group (Sweden)' },
    { label: 'Group trading since', value: '1989; online since 2000' },
    { label: 'Airlines compared', value: '650+' },
    { label: 'In-person support', value: 'Not available' },
  ],
  plans: {
    title: 'How the pricing works',
    note: "Gotogate's fare is the airline price plus its own booking/processing fee; post-booking changes such as a name correction can carry a separate administrative fee on top of whatever the airline itself charges.",
    items: [
      {
        name: 'Standard fare',
        price: "Airline fare plus Gotogate's booking fee",
        detail:
          'The base flight search. Compare the total at checkout against a direct airline search, not just the headline price on the results page.',
        pick: true,
      },
      {
        name: 'Flexible fare upgrade',
        price: 'An optional add-on priced per itinerary at checkout',
        detail:
          "Sold alongside the standard fare as extra flexibility to change plans. Read exactly what it changes about the airline's own fare rules before assuming it replaces them.",
      },
      {
        name: 'Bundled hotel or car rental',
        price: 'Combined with the flight into one checkout',
        detail:
          "Drawing on Etraveli's wider hotel and car inventory. Convenient, but bundles the service fees together the same way OneTravel's packages do.",
      },
      {
        name: 'Post-booking changes',
        price: 'An administrative fee, in addition to any airline charge',
        detail:
          "Corrections like a name change or itinerary edit go through Gotogate's own fee schedule as well as whatever the airline's fare rules allow.",
      },
    ],
  },
  pros: [
    {
      title: 'Access to fares metasearch sites are already showing you',
      body: 'Because Etraveli supplies flight inventory to Google Flights, Skyscanner and Booking.com, Gotogate can surface fares that match what those larger platforms display, under one Etraveli-run checkout.',
    },
    {
      title: 'A genuinely large route and airline comparison',
      body: "Comparing across 650-plus airlines gives Gotogate real reach for less common routings, particularly useful for multi-airline itineraries that a single carrier's own site cannot construct.",
    },
    {
      title: 'A hotel and car catalogue big enough to bundle meaningfully',
      body: "With roughly 300,000 hotels and holiday rentals in the group's inventory, a Gotogate package has real breadth behind it rather than a thin add-on list bolted onto a flight search.",
    },
    {
      title: 'A long-running parent company, not a fly-by-night storefront',
      body: "Etraveli Group's roots trace back to 2000, and it operates as a serious enough player in European flight distribution that Booking Holdings once agreed to acquire it, before regulators blocked the deal.",
    },
  ],
  cons: [
    {
      title: 'The lowest independently-verified Trustpilot score here',
      body: 'Gotogate\'s main storefront rates in "Poor" territory on Trustpilot, driven by recurring complaints about refund delays and fees withheld from money returned after a cancellation.',
    },
    {
      title: "No in-person support, by the company's own admission",
      body: "Gotogate's own about page states that in-person customer support is not available, leaving a contact form and FAQ as the primary channels — a real constraint if a booking goes wrong while you are travelling.",
    },
    {
      title: "Post-booking changes stack fees on the airline's charges",
      body: "A name correction or itinerary edit can trigger Gotogate's own administrative fee in addition to anything the airline charges, which reviewers frequently flag as an unwelcome surprise.",
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 2.6,
      note: 'rated "Poor" on the main gotogate.com storefront; regional subdomains vary further',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.4,
      note: 'real airline and hotel reach undercut by the weakest support reputation of the brands compared here',
    },
  ],
  bestFor: [
    'Price-driven searchers who already compare fares on Google Flights or Skyscanner and want the same backend directly',
    'Multi-airline itineraries that benefit from comparing across 650-plus carriers in one search',
    'Travellers bundling a flight with a hotel or car who are comfortable self-servicing through a contact form if something goes wrong',
    'Anyone who has read the cancellation and change-fee terms for their specific fare before booking',
  ],
  notFor: [
    'Anyone who wants phone or in-person support as a fallback if a booking needs urgent fixing',
    'Travellers who expect a full cash refund by default rather than one reduced by processing fees',
    'Bookings likely to need a name correction or other post-purchase change — the fees stack quickly',
  ],
  faq: [
    {
      q: 'Is Gotogate legitimate?',
      a: 'Yes. It is a real brand of Etraveli Group, a Swedish company with roots back to 2000 that also supplies flight inventory to Google Flights, Skyscanner and Booking.com. Legitimacy is not the concern reviewers raise; support responsiveness and fee handling are.',
    },
    {
      q: "Why is Gotogate's Trustpilot score so much lower than similar sites?",
      a: 'The main gotogate.com storefront rates in "Poor" territory, driven mainly by refund and support complaints, and it sits noticeably below regional sister sites in some markets. It is a real, independently verifiable score, and one reason this review\'s editorial score sits below what Gotogate\'s fare competitiveness alone would suggest.',
    },
    {
      q: 'Can I get a full refund if I cancel?',
      a: "That depends entirely on the airline's own fare rules for your ticket, which Gotogate does not control and cannot override. Even where the airline allows a refund, Gotogate's own processing fee is typically deducted from whatever comes back to you, so budget for less than the full fare.",
    },
    {
      q: 'How do I contact Gotogate if something goes wrong?',
      a: "By the company's own admission, in-person support is not available. The contact form and FAQ published on gotogate.com are the primary channels, so build extra time into resolving any issue compared with an agency that offers a staffed phone line around the clock.",
    },
    {
      q: 'Is Gotogate the same as Mytrip or Flightnetwork?',
      a: 'They are sister brands under the same parent, Etraveli Group, sharing back-end booking infrastructure but operating as separate storefronts with their own branding, pricing and, in some cases, noticeably different Trustpilot scores from one market and one regional domain to the next.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'gotogate.com',
}
