/**
 * Brand page data for CheapOair (route: /brands/cheapoair).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.fareportal.com/brands/ and https://www.fareportal.com/founder-story/
 *     — Fareportal's 2003 founding, the Travelong acquisition, CheapOair
 *     launching in 2005 as Fareportal's first consumer OTA, and the stated
 *     positioning of CheapOair as the value-conscious brand against OneTravel
 *   - https://www.globenewswire.com/news-release/2022/06/09/2459834/0/en/Fareportal-Announces-the-Launch-of-Travel-Rewards-Program-ClubMiles.html
 *     and https://www.cheapoair.com/rewards/clubmiles — the shared ClubMiles
 *     loyalty programme launched 2022, points earned and redeemed across
 *     both CheapOair and OneTravel from one account
 *   - https://www.spocket.co/blogs/is-cheapoair-legit — reported per-fare
 *     service fee (CheapOair's own fee schedule page returned a 403 to
 *     automated fetches at research time; this figure is second-hand and
 *     hedged accordingly)
 *   - https://www.trustpilot.com/review/www.cheapoair.com — rating and
 *     review volume
 *   - ConsumerAffairs CheapOair page — separate aggregate rating
 *
 * ⚠️ The service fee, cancellation terms and Trustpilot review counts are
 * working values captured on 2026-08-24. CheapOair's own terms and fee
 * pages blocked automated access during research — the fee figure here is
 * sourced second-hand and MUST be re-verified directly against
 * cheapoair.com before launch and before each campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const cheapoair: BrandPage = {
  slug: 'cheapoair',
  providerId: 'cheapoair',
  metaTitle: "CheapOair review 2026 — the fee that isn't in the fare",
  metaDescription:
    'An independent CheapOair review: how the Fareportal-owned agency prices flights, why the service fee lands at checkout, and what cancellation actually gets you.',
  intro:
    "CheapOair is the value-focused half of Fareportal, the New York travel technology company that has sold flights online since 2005. The fares it surfaces are frequently competitive, which is the whole pitch. What the search results do not show is CheapOair's own service fee, which is added at checkout rather than the results page — the single fact this review keeps coming back to.",
  about: [
    "Fareportal was founded in 2003 by Sam Jain, built in part on Travelong, a long-established travel agency Jain acquired to bring in decades of ticketing and fulfilment experience into a newer, technology-driven booking operation. CheapOair launched in 2005 as the company's first consumer-facing online portal and remains its higher-volume, value-positioned brand, sitting alongside sister brand OneTravel under the same New York-based parent company that still runs both today, side by side.",
    'The model is what Fareportal itself calls "hybrid": a self-service website and app backed by phone agents, rather than a pure online checkout. That combination is genuinely useful for complicated itineraries or when something goes wrong mid-trip and a human is faster than a web form — it is also how CheapOair upsells Travel Protection Plans and bundled packages, and phone-assisted bookings carry a materially higher service fee than booking the same fare online.',
    'Since 2022, CheapOair and OneTravel have shared ClubMiles, a Fareportal loyalty programme: points earn on eligible bookings across both sites and redeem from one account, including on hotels and car rentals at a higher rate than on flights themselves. It is a genuine points-back mechanism rather than window dressing, though it does nothing to offset the base service fee, which applies to every booking whether or not you are a ClubMiles member at all.',
  ],
  facts: [
    { label: 'Launched', value: '2005 (Fareportal)' },
    { label: 'Ownership', value: 'Fareportal, New York' },
    { label: 'Booking model', value: 'Web + phone agents' },
    { label: 'Service fee', value: 'Added at checkout' },
  ],
  plans: {
    title: 'How the pricing works',
    note: "The fare shown in search results excludes CheapOair's own service fee, which is disclosed at the final checkout step — compare the total there against a direct airline search before assuming CheapOair is cheaper.",
    items: [
      {
        name: 'Book online',
        price: 'Airline fare plus a per-fare service fee',
        detail:
          'The lower-fee route. The service fee is separate from anything the airline itself charges and is shown only once you reach checkout.',
        pick: true,
      },
      {
        name: 'Book by phone',
        price: 'Airline fare plus a substantially higher service fee',
        detail:
          'Useful for complex itineraries or when you need a human immediately, at a real cost premium over booking the identical fare online.',
      },
      {
        name: 'Vacation packages and bundles',
        price: 'Flight, hotel and car priced as one checkout',
        detail:
          'Bundling can undercut booking each piece separately, but makes the individual service fees harder to see and compare.',
      },
      {
        name: 'Travel Protection Plan',
        price: 'An optional add-on priced per booking',
        detail:
          "Third-party trip protection sold at checkout, separate from any airline fare-change fee and from CheapOair's own cancellation terms.",
      },
    ],
  },
  pros: [
    {
      title: 'Fares that are genuinely competitive before the fee',
      body: "CheapOair's underlying airline pricing regularly matches or beats comparable searches elsewhere, which is why it keeps a large and loyal repeat-customer base despite the fee complaints.",
    },
    {
      title: 'A phone agent is actually available',
      body: 'For itineraries with multiple stops, special fares, or a trip that goes wrong at 2am in another time zone, having a hybrid agency with live phone support behind the website is a real advantage over pure self-service sites.',
    },
    {
      title: 'ClubMiles works across both Fareportal brands',
      body: 'Points earned on CheapOair redeem on OneTravel and vice versa, from a single account, which is more flexible than most single-brand travel loyalty schemes manage to be.',
    },
    {
      title: 'A long operating history in a category with high churn',
      body: 'CheapOair has been selling flights online since 2005. In a sector where budget OTAs regularly fold or rebrand, that longevity is itself a signal worth weighing.',
    },
  ],
  cons: [
    {
      title: 'The fee is not in the price you searched for',
      body: "CheapOair's service fee is added at the final checkout step rather than shown in results, which is the single most repeated complaint across independent review coverage of the site.",
    },
    {
      title: 'Refunds and reimbursements can take a long time',
      body: 'Multiple reviewers report lengthy waits to be reimbursed for unused tickets, and the service fee itself is typically non-refundable even when the underlying airline fare qualifies for a refund.',
    },
    {
      title: 'Support quality is inconsistent',
      body: 'Alongside genuine phone support as a plus, reviewers also describe long hold times and agents who could not resolve a problem on the first call — the same hybrid model cuts both ways.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.2,
      note: 'rated "Great", consistent across regional Trustpilot sites',
    },
    {
      source: 'ConsumerAffairs',
      value: 2.0,
      note: 'over 1,200 reviews, weighted toward customer-service complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.6,
      note: 'competitive fares undercut by a fee that only appears at checkout',
    },
  ],
  bestFor: [
    'Travellers who compare the checkout total, not the search-results price, before booking',
    'Complex itineraries where a phone agent backing up the website is genuinely useful',
    'Existing ClubMiles members who already have points to redeem across CheapOair and OneTravel',
    'Bundled flight-and-hotel trips where the combined price beats booking each piece alone',
  ],
  notFor: [
    'Anyone who wants the full price, fee included, on the search-results page',
    'Travellers who need a fast, certain refund rather than travel credit or a lengthy reimbursement wait',
    'Simple one-way domestic bookings where a direct airline search skips the service fee entirely',
  ],
  faq: [
    {
      q: 'Why did the price go up at checkout?',
      a: 'CheapOair adds its own service fee on top of the airline fare, and that fee is disclosed at the final checkout step rather than in the search results. Always compare the checkout total, not the headline fare, against booking direct.',
    },
    {
      q: 'Is CheapOair legitimate?',
      a: 'Yes. It is a real, long-running brand of Fareportal, a New York travel technology company operating since 2003, with CheapOair itself launched in 2005 as its first consumer-facing portal. Legitimacy is not the issue reviewers raise; fee transparency and support consistency are.',
    },
    {
      q: 'Is it cheaper to book online or by phone?',
      a: 'Online, in almost every case. Phone bookings carry a materially higher CheapOair service fee than the same fare booked on the website or app, so use the phone line for complexity you cannot resolve yourself, not for a routine booking.',
    },
    {
      q: 'Can I get a refund if my plans change?',
      a: "It depends on the fare rules of the airline you booked, not on CheapOair. Many fares only qualify for a full refund inside the first 24 hours after booking; CheapOair's own service fee is typically non-refundable regardless of the airline's policy.",
    },
    {
      q: 'What is ClubMiles?',
      a: "Fareportal's loyalty programme, shared by CheapOair and OneTravel since 2022. Points earn on eligible bookings and redeem at checkout on flights, hotels, car rentals and add-ons from a single account across both brands, with hotels and cars earning at a faster rate.",
    },
  ],
  updated: '2026-08-24',
  deepLink: 'cheapoair.com',
}
