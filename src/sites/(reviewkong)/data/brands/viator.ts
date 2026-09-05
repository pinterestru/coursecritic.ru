/**
 * Brand page data for Viator (route: /brands/viator).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - Founding and ownership history via Tracxn's company profile and
 *     https://www.thetraveler.org/why-viator-became-a-giant-in-tours-and-activities/
 *     — founded 1995 in San Francisco by Rod Cuthbert, acquired by Tripadvisor
 *     in 2014 for around $200 million
 *   - https://partnerhelp.viator.com/en/articles/86-what-are-viator-s-cancellation-policies
 *     and https://partnerresources.viator.com/blog/reservenowpaylater/ —
 *     standard 24-hour free-cancellation window, Reserve Now & Pay Later terms
 *   - Viator's price-guarantee terms, referenced from its own help and blog
 *     content — refunds the difference on an identical cheaper listing
 *   - https://www.trustpilot.com/review/www.viator.com — rating and review
 *     volume, plus recurring complaints about operator hand-offs
 *   - https://apps.apple.com/us/app/viator-tours-attractions/id434832826 — App
 *     Store rating and ratings count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const viator: BrandPage = {
  slug: 'viator',
  providerId: 'viator',
  metaTitle: 'Viator review 2026 — coverage, refunds and Tripadvisor',
  metaDescription:
    'An independent Viator review: what Tripadvisor ownership actually means, how the 24-hour cancellation policy works, and where the catalogue is strongest.',
  intro:
    'Viator has been booking tours and activities since 1995 and has been owned by Tripadvisor since 2014, which gives it two things its Asia-first rivals do not: genuine global depth outside Asia, and Tripadvisor’s own review data sitting next to the booking. Its free-cancellation window is also the most standardised of the group — 24 hours before start on most listings, rather than a deadline set by each operator.',
  about: [
    'Viator started in San Francisco in 1995, founded by Rod Cuthbert, well before “tours and activities” was a recognised online category. Tripadvisor bought it in 2014 for around $200 million and has run it since as a marketplace layered on top of Tripadvisor’s own review data. The scale that gives it is real: more than 300,000 bookable experiences across roughly 200 countries, with genuine depth outside Asia in a way the Klook and KKday pair cannot match.',
    'The mechanics are standard for the category — browse, pick a date, pay, receive a voucher — but Viator applies one policy more consistently than its Asia-first rivals: most experiences carry a straightforward free-cancellation window up to 24 hours before the start time, rather than a deadline set listing by listing. A Reserve Now & Pay Later option on eligible tours delays the charge to roughly two days out, and a price guarantee promises to refund the gap if the identical experience turns up cheaper within a few days.',
    'Viator does not run the tours itself, so quality still depends on the local operator on any given listing, and some high-demand or ticketed experiences carry their own stricter terms that override the general 24-hour rule. Trustpilot reviewers are mostly positive, but a recurring complaint describes being sent back and forth between Viator and the operator when a cancellation or a missed meeting point goes wrong, with no one clearly owning the fix.',
  ],
  facts: [
    { label: 'Founded', value: '1995, San Francisco' },
    { label: 'Owner', value: 'TripAdvisor since 2014' },
    { label: 'Catalogue', value: '300,000+ experiences' },
    { label: 'Cancellation', value: 'Free up to 24h before' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Viator is free to browse; you pay the operator’s listed price at checkout, and the low-price guarantee covers the days around booking rather than the whole trip.',
    items: [
      {
        name: 'Standard booking',
        price: 'Pay in full at checkout',
        detail:
          'The default: pick a date, pay immediately, cancel free up to 24 hours before start on most listings. The card is charged the moment you book.',
        pick: true,
      },
      {
        name: 'Reserve Now & Pay Later',
        price: 'No extra cost to use',
        detail:
          'Same booking, but the card is not charged until roughly two days before the activity — useful for firming up plans without locking in payment early.',
      },
      {
        name: 'Price guarantee',
        price: 'Refund of the difference',
        detail:
          'Find the identical experience, same operator, cheaper elsewhere within a few days of booking or while you are there, and Viator refunds the gap on request.',
      },
    ],
  },
  pros: [
    {
      title: 'Backed by Tripadvisor’s review data',
      body: 'Viator listings sit alongside genuine Tripadvisor reviews of the same tour, which is a level of independent, pre-existing feedback pure booking marketplaces cannot match.',
    },
    {
      title: 'The most standardised cancellation policy of the group',
      body: 'Most experiences carry a straightforward free-cancellation window up to 24 hours before start, rather than Klook’s and KKday’s listing-by-listing terms.',
    },
    {
      title: 'A genuine global catalogue, not an Asia-first one',
      body: 'Over 300,000 experiences across roughly 200 countries, with real depth in Europe and North America where Klook and KKday are comparatively thin.',
    },
    {
      title: 'Reserve Now, Pay Later reduces upfront risk',
      body: 'Booking early without being charged until close to the date suits travellers who want to lock in a popular tour before it sells out.',
    },
  ],
  cons: [
    {
      title: 'Reviews name inconsistent support when things go wrong',
      body: 'Some Trustpilot reviewers describe being passed between Viator and the local operator after a cancellation or a missed meeting point, with neither side taking clear ownership.',
    },
    {
      title: 'Operator quality still varies',
      body: 'Viator vets and lists but does not run the tours itself, so the on-the-ground experience depends on whichever local company is behind a given listing.',
    },
    {
      title: 'Non-standard listings break the 24-hour rule',
      body: 'Some tours, especially high-demand or ticketed ones, carry their own stricter cancellation terms that override the general 24-hour policy — worth checking first.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.4, note: 'around 300,000 reviews' },
    { source: 'App Store (iOS)', value: 4.9, note: 'around 279,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite across catalogue breadth, policy consistency and support reports',
    },
  ],
  bestFor: [
    'Travellers whose trip is outside Asia, where the catalogue is deepest',
    'Anyone who wants one predictable cancellation deadline rather than per-listing rules',
    'People who already use Tripadvisor and want reviews next to the booking',
    'Travellers who want to reserve a popular tour without paying immediately',
  ],
  notFor: [
    'Anyone booking a niche Japan, Korea or Taiwan-specific activity — check KKday first',
    'Travellers who assume every listing follows the same 24-hour rule',
    'Buyers who want a single company to own a problem end-to-end',
  ],
  faq: [
    {
      q: 'Is Viator legit?',
      a: 'Yes — Viator has operated since 1995 and has been owned by Tripadvisor since 2014, and its Trustpilot rating is strong from a very large review base. Most complaints concern individual operators or specific cancellations rather than the platform itself.',
    },
    {
      q: 'What is Viator’s cancellation policy?',
      a: 'Most experiences offer a full refund if you cancel at least 24 hours before the activity starts. Some listings, particularly high-demand or ticketed ones, set stricter terms — check the specific listing rather than assuming the 24-hour rule applies.',
    },
    {
      q: 'How does the price guarantee work?',
      a: 'If you find the same experience, from the same operator, priced lower elsewhere within a few days of booking or once you are at your destination, Viator will refund the difference on request. It does not cover a different operator’s cheaper version of a similar tour.',
    },
    {
      q: 'What is Reserve Now & Pay Later?',
      a: 'A booking option on eligible experiences where you confirm your spot immediately but the card is not charged until roughly two days before the activity. It costs nothing extra and is useful for locking in a popular tour early.',
    },
    {
      q: 'Is Viator the same company as Tripadvisor?',
      a: 'Tripadvisor acquired Viator in 2014 for about $200 million and now owns it outright, though Viator still runs its own site and booking flow. Reviews on the main Tripadvisor site and Viator bookings are linked but not identical systems.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'viator.com',
}
