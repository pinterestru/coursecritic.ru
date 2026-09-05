/**
 * Brand page data for OneTravel (route: /brands/onetravel).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.fareportal.com/brands/ and https://www.fareportal.com/founder-story/
 *     — OneTravel's 2008 launch under Fareportal, and Fareportal's own
 *     stated positioning of OneTravel as the more "aspirational" traveller
 *     brand versus value-focused sister brand CheapOair
 *   - https://www.onetravel.com/rewards/clubmiles and the 2022 ClubMiles
 *     launch release — the loyalty programme shared with CheapOair
 *   - https://www.trustpilot.com/review/www.onetravel.com — rating and
 *     review volume, checked across several regional Trustpilot subdomains
 *     for consistency
 *   - ConsumerAffairs OneTravel reviews and general OTA cancellation
 *     complaint patterns — 24-hour cancellation window, add-on confusion
 *
 * ⚠️ Fees and cancellation figures are working values captured on
 * 2026-08-24. OneTravel's own terms and fee pages blocked automated access
 * during research (403), so specific fee amounts below are second-hand and
 * hedged — MUST be re-verified directly against onetravel.com before launch
 * and before each campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const onetravel: BrandPage = {
  slug: 'onetravel',
  providerId: 'onetravel',
  metaTitle: "OneTravel review 2026 — CheapOair's sister brand, checked",
  metaDescription:
    'An independent OneTravel review: how it differs from sister brand CheapOair, how ClubMiles works across both, and what the 24-hour cancellation window covers.',
  intro:
    "OneTravel is the second Fareportal brand, launched in 2008 to sell a fuller trip than the original CheapOair storefront — flights alongside hotels, car rental, attractions and insurance in one checkout. It runs on the same booking infrastructure and the same ClubMiles loyalty scheme as CheapOair, which means it also shares CheapOair's central weakness: a checkout that adds cost the search results did not show.",
  about: [
    'Fareportal built OneTravel as a second storefront rather than a direct competitor to its own CheapOair, and says as much in its own brand materials: CheapOair targets value-conscious shoppers, while OneTravel is positioned toward a more aspirational, package-minded traveller planning a fuller trip. In practice the two sites overlap heavily on inventory, run on the same booking infrastructure, and both operate through the same New York-based parent company, Fareportal, founded back in 2003.',
    'The product itself leans further into bundling than CheapOair does. Where CheapOair sells flights first and add-ons second, OneTravel foregrounds vacation packages — flight, hotel, car rental, attraction tickets and travel insurance combined into a single checkout — aimed squarely at travellers planning a full trip rather than searching for one bare fare and stopping there once it is found and booked. The packaging itself is the actual pitch here, not an upsell bolted on afterwards.',
    'Since 2022 OneTravel has shared ClubMiles with CheapOair: points earned on either site redeem on either site from one account, with hotels and car rentals earning at double the base rate flights do. It is a real, genuine cross-brand benefit for anyone who books through Fareportal regularly, and close to irrelevant if this is a one-off booking you do not expect to repeat again any time soon, or ever again.',
  ],
  facts: [
    { label: 'Launched', value: '2008 (Fareportal)' },
    { label: 'Ownership', value: 'Fareportal, New York' },
    { label: 'Sister brand', value: 'CheapOair (shared systems)' },
    { label: 'Cancellation window', value: '24 hours, fee applies' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Vacation packages can genuinely undercut booking flight, hotel and car separately, but they also bundle several service fees into one number that is harder to itemise than a flight-only search.',
    items: [
      {
        name: 'Flight only',
        price: "Airline fare plus OneTravel's service fee",
        detail:
          "The simplest option and the easiest to compare against a direct airline search or CheapOair's own flight-only pricing.",
        pick: true,
      },
      {
        name: 'Vacation package',
        price: 'Flight, hotel and car combined into one checkout',
        detail:
          "OneTravel's core positioning versus CheapOair. Convenient for planning a full trip, but the individual service fees are harder to see.",
      },
      {
        name: 'Travel Protection Plan',
        price: 'An optional add-on priced per booking',
        detail:
          "Third-party trip protection, separate from OneTravel's own 24-hour cancellation terms and from any airline change fee.",
      },
      {
        name: 'ClubMiles redemption',
        price: 'Points applied as a discount at checkout',
        detail:
          'Shared with CheapOair. Worth tracking if you book through Fareportal often; not a reason on its own to choose OneTravel for a single trip.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuine full-trip bundle, not just a flight search',
      body: "Packaging flight, hotel, car and attractions into one checkout is OneTravel's actual point of difference from CheapOair, and it suits travellers planning a complete trip rather than comparison-shopping bare fares.",
    },
    {
      title: 'Phone agents back up the website',
      body: 'Like CheapOair, OneTravel runs a hybrid model with live phone support, useful when a package booking with several moving parts needs a human to fix rather than a self-service form.',
    },
    {
      title: 'ClubMiles points redeem across two brands',
      body: 'Points earned on OneTravel spend on CheapOair too, and hotels and car rentals earn at double the flight rate, which rewards bundling if you already plan to book both pieces.',
    },
    {
      title: 'Backed by an established travel technology company',
      body: 'OneTravel runs on the same booking and fulfilment infrastructure Fareportal has operated since 2003, rather than being a newly spun-up storefront with no operating history behind it.',
    },
  ],
  cons: [
    {
      title: 'The same checkout-fee pattern as CheapOair',
      body: "OneTravel shares its parent's booking engine and, with it, the same practice of adding a service fee that only becomes visible once you reach the final checkout step rather than in the search results.",
    },
    {
      title: 'A 24-hour window does not always mean fee-free',
      body: 'The standard 24-hour window applies, but reviewers report being charged cancellation fees even within it depending on fare type, and the fee is separate from any Travel Protection Plan purchased.',
    },
    {
      title: 'Bundle pricing makes comparison harder',
      body: 'A vacation package is priced as one total, which can genuinely save money but also makes it difficult to see whether the flight, hotel or car portion is the expensive part before you commit.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.2,
      note: 'rated "Great", consistent across several regional Trustpilot sites',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.5,
      note: 'a genuinely useful bundle, marked down for the same checkout-fee pattern as sister brand CheapOair',
    },
  ],
  bestFor: [
    'Travellers who want flight, hotel, car and insurance in one checkout rather than four bookings',
    "Existing ClubMiles members already earning points across Fareportal's two brands",
    'Package trips where a bundled price beats booking each component separately',
    'Anyone who values a phone agent being available if a multi-part package booking goes wrong',
  ],
  notFor: [
    'Anyone booking a single flight who does not need the package features — CheapOair is the simpler sister site',
    'Travellers who want the full price, fee included, visible before checkout',
    'Bookings you may need to cancel inside 24 hours and want a fee-free guarantee for',
  ],
  faq: [
    {
      q: 'What is the difference between OneTravel and CheapOair?',
      a: 'Both are Fareportal brands running on shared booking infrastructure. Fareportal positions CheapOair as the value-focused flight search and OneTravel as the fuller-trip, package-oriented brand, though in practice both sell flights, hotels and cars, and both share the ClubMiles loyalty programme and the same service-fee structure at checkout.',
    },
    {
      q: 'Can I cancel within 24 hours for free?',
      a: 'OneTravel operates a 24-hour cancellation window, but whether it is genuinely fee-free depends on the specific fare rules of the airline and package involved — reviewers report being charged even inside that window on some bookings, so check the terms shown at your specific checkout.',
    },
    {
      q: 'Is OneTravel cheaper than booking a package directly with a hotel and airline?',
      a: "Sometimes, because bundling can undercut separate bookings on the same dates. It is not guaranteed, and OneTravel's own service fee is folded into the bundle total rather than itemised, so the only reliable check is comparing the full package price against booking each piece yourself.",
    },
    {
      q: 'How does ClubMiles work on OneTravel?',
      a: 'You earn points on eligible OneTravel bookings, with hotels and car rentals earning at double the rate flights do, and can redeem them at checkout on either OneTravel or sister brand CheapOair from the same shared account, without transferring anything manually between the two.',
    },
    {
      q: 'Is OneTravel legitimate?',
      a: 'Yes. It is an established Fareportal brand operating since 2008, on the same New York-based booking infrastructure as CheapOair. The complaints that turn up in public reviews concern fees and cancellation terms, not the legitimacy of the business itself or who actually runs it.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'onetravel.com',
}
