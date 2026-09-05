/**
 * Brand page data for Klook (route: /brands/klook).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/Klook_(company) — founding year, founders,
 *     headquarters, funding history, IPO filing context
 *   - Klook's Form F-1 IPO filing (November 2025), summarised via
 *     https://www.mostlymetrics.com/p/klook-ipo-s1-breakdown and
 *     https://travelweekly.com.au/klook-files-for-ipo-gives-insight-into-global-experience-market/
 *     — offerings count, destination count, bookings, employees
 *   - https://www.klook.com/en-US/faq/category-29-question-718/ and
 *     https://www.klook.com/en-US/faq/category-61-question-934/ — cancellation
 *     varies by operator, no single blanket policy
 *   - https://www.klook.com/en-US/help-center/ — instant vs manual confirmation
 *     timing, KlookCash exclusions
 *   - https://www.trustpilot.com/review/www.klook.com — rating and review volume
 *   - https://apps.apple.com/us/app/klook-travel-activities/id961850126 — App
 *     Store rating and ratings count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const klook: BrandPage = {
  slug: 'klook',
  providerId: 'klook',
  metaTitle: 'Klook review 2026 — catalogue, fees and cancellation',
  metaDescription:
    'An independent Klook review: how big the catalogue really is, what instant confirmation means, and why there is no single cancellation policy to rely on.',
  intro:
    'Klook is the largest of the Asia-first activity marketplaces: around 310,000 listings across roughly 4,200 destinations, filed in its own November 2025 US IPO paperwork. Instant confirmation on most listings means a voucher lands within minutes of paying. What it does not offer is one predictable cancellation policy — that is set listing by listing, and it is worth reading before you assume Klook’s general terms apply.',
  about: [
    'Klook launched in Hong Kong in 2014, co-founded by Ethan Lin and Eric Gnock Fah, and has grown into one of the largest activities marketplaces built around Asia-Pacific travel. It operates as an intermediary rather than an operator: local tour companies, attraction owners and transport providers list their inventory, and Klook takes a cut, handles payment, and issues the voucher. By its own November 2025 IPO filing, the platform carried around 310,000 offerings across roughly 4,200 destinations and recorded more than 65 million bookings in the preceding twelve months.',
    'The instant-confirmation system is the main reason people default to Klook. Listings marked with a lightning bolt confirm within about five minutes of payment, with a QR-code voucher that works straight from the app — everything else is checked manually with the operator and can take up to 48 hours. Klook has also broadened well past tours and tickets: hotels, airport transfers, train tickets, eSIM data plans and flights all sit in the same app, tied together by KlookCash, an in-house credit balance earned on past bookings.',
    'What Klook does not offer is a single, predictable cancellation policy. Each listing sets its own free-cancellation deadline, and it is genuinely inconsistent — some operators allow cancellation up to pick-up, others charge a fee close to the date, and a few do not refund at all. That variability, plus quality that still depends on whichever local merchant is behind a given listing, is the trade-off for a catalogue this size. Its Trustpilot score (4.4, “Excellent”) and App Store rating (4.7) suggest the trade-off works out for most bookings.',
  ],
  facts: [
    { label: 'Founded', value: '2014, Hong Kong' },
    { label: 'Catalogue', value: 'Around 310,000 listings' },
    { label: 'Destinations', value: 'Around 4,200' },
    { label: 'Confirmation', value: 'Instant or 24–48h' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Klook is free to browse; you pay per activity at checkout, and Klook’s margin is already inside the operator’s price rather than added as a visible fee.',
    items: [
      {
        name: 'Per-activity booking',
        price: 'Pay per ticket, no membership',
        detail:
          'The default route on every listing: pick a date, pay at checkout, get a voucher. Prices are set by the operator, so compare the same activity on KKday or Viator before buying.',
        pick: true,
      },
      {
        name: 'KlookCash credit',
        price: 'Earned on completed bookings',
        detail:
          'In-house store credit rather than a discount code — it accrues after trips and can only be spent inside Klook, and it does not apply to passes, gift cards, insurance or Stay+ packages.',
      },
      {
        name: 'Instant vs manual confirmation',
        price: 'No extra cost either way',
        detail:
          'Listings with the lightning-bolt icon confirm within about five minutes of payment; the rest take 24 to 48 hours, worth knowing if you are booking the night before.',
      },
    ],
  },
  pros: [
    {
      title: 'The broadest catalogue among the Asia-first apps',
      body: 'Around 310,000 listings across roughly 4,200 destinations, per Klook’s own 2025 IPO filing, with particular depth across East and Southeast Asia that few competitors match.',
    },
    {
      title: 'Instant confirmation on most listings',
      body: 'The lightning-bolt icon means a voucher inside about five minutes of paying, with a QR code that works straight from the app — no printing, no kiosk queue.',
    },
    {
      title: 'Diversified beyond pure activities',
      body: 'Hotels, trains, airport transfers, eSIMs and flights sit alongside tours and tickets, so a single account and a single KlookCash balance cover more of a trip.',
    },
    {
      title: 'A public-company-grade paper trail',
      body: 'Klook filed to list on a US exchange in November 2025, which means audited financials and a prospectus exist — an unusual level of disclosure for this category.',
    },
  ],
  cons: [
    {
      title: 'No blanket cancellation guarantee',
      body: 'Unlike Viator’s standard 24-hour window, Klook leaves the free-cancellation deadline to the operator. Some listings allow cancellation right up to pick-up; others charge a fee or refuse a refund entirely.',
    },
    {
      title: 'Not always the cheapest',
      body: 'KKday and Viator undercut Klook on identical listings often enough that comparing before you buy is worth the two minutes — size is not the same as lowest price.',
    },
    {
      title: 'Quality still depends on the local operator',
      body: 'Klook vets and pays merchants but does not run the activities itself, so a slow or disorganised local partner in a smaller destination is still possible.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.4, note: '"Excellent", around 28,000 reviews' },
    { source: 'App Store (iOS)', value: 4.7, note: 'around 7,900 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite across catalogue breadth, confirmation speed and pricing',
    },
  ],
  bestFor: [
    'Travellers whose itinerary is mostly in East or Southeast Asia',
    'Anyone who wants activities, transport and an eSIM in one app',
    'Buyers who value a fast, confirmed voucher over the lowest possible price',
    'People who want a large, well-funded company behind a mid-trip booking',
  ],
  notFor: [
    'Anyone assuming every listing has the same cancellation terms',
    'Bargain hunters who have not compared the same activity on KKday or Viator',
    'Travellers who want a single global cancellation policy rather than per-listing rules',
  ],
  faq: [
    {
      q: 'Is Klook legit?',
      a: 'Yes. It is a well-funded Hong Kong company that filed for a US IPO in November 2025, and its Trustpilot and App Store ratings are both strong. The usual caveat applies: it is a marketplace, so experience quality depends on the local operator behind a given listing.',
    },
    {
      q: 'What does the lightning-bolt icon mean?',
      a: 'Instant confirmation. Klook is guaranteeing the voucher lands in your inbox or app within roughly five minutes of paying, instead of the 24 to 48 hours a manually-confirmed listing needs. Useful if you are booking for later the same day.',
    },
    {
      q: 'Can I cancel a Klook booking for free?',
      a: 'Sometimes — it depends entirely on the specific listing, not on Klook as a whole. Each activity page states its own cancellation deadline; some allow cancellation right up to pick-up, others charge a fee or do not refund once booked.',
    },
    {
      q: 'How does Klook compare with KKday?',
      a: 'Both are Asia-first marketplaces founded in 2014 with heavily overlapping catalogues. Klook is the larger of the two by listings and destinations and carries a stronger aggregate reputation; KKday sometimes beats it on price or on niche Japan and Korea inventory.',
    },
    {
      q: 'What is KlookCash?',
      a: 'Store credit that accrues after you complete bookings and can only be spent on future Klook purchases. It is not a discount code and does not apply to passes, gift cards, travel insurance or Stay+ packages.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'klook.com',
}
