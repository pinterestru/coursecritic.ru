/**
 * Brand page data for StubHub (route: /brands/stubhub).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/StubHub and
 *     https://www.prnewswire.com/news-releases/viagogo-completes-acquisition-of-stubhub-301004796.html
 *     — founding year, founders, the 2007 eBay sale and the 2020 viagogo buyback
 *   - https://newsroom.stubhub.com/2026/07/29/fanprotect-guarantee-explained/
 *     — what the FanProtect Guarantee covers and its exclusions
 *   - https://www.ftc.gov/news-events/news/press-releases/2026/04/stubhub-refunding-10-million-fees-consumers-after-deceptive-ticket-pricing
 *     and https://www.billboard.com/pro/stubhub-settles-ftc-ticket-pricing-violations-10m/
 *     — the April 2026 $10m FTC settlement, the May 2025 all-in-pricing rule,
 *     and the NFL-rollout compliance timeline
 *   - https://www.tickpick.com/blog/stubhub-buyer-seller-fees/ — how StubHub
 *     itself describes its fee as having no fixed percentage
 *   - https://www.trustpilot.com/review/www.stubhub.com — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const stubhub: BrandPage = {
  slug: 'stubhub',
  providerId: 'stubhub',
  metaTitle: 'StubHub review 2026 — fees, guarantee, FTC settlement',
  metaDescription:
    'An independent StubHub review: how the FanProtect guarantee works, why buyer fees are hard to predict, and the $10 million FTC settlement over hidden pricing.',
  intro:
    'StubHub is a secondary ticket marketplace: sellers list what they hold, StubHub adds a service fee it says has no fixed percentage, and every order carries the FanProtect Guarantee. It is a genuinely large source of sold-out and last-minute inventory. It has also just paid the US government $10 million for not clearly showing that fee before checkout, which is worth knowing before you rely on the headline price.',
  about: [
    'StubHub was founded in San Francisco in 2000 by Eric Baker and Jeff Fluhr as one of the first dedicated ticket resale marketplaces. eBay bought it in 2007 for $310 million and ran it for over a decade before Baker — by then also running the rival viagogo — bought it back for $4.05 billion in February 2020. The two brands have shared an owner ever since, though they still operate as separate sites with separate accounts. StubHub Holdings went public via a US stock listing in 2025, so its finances are now a matter of public filing rather than private estimate.',
    'StubHub is a marketplace, not a box office: individual and professional sellers list tickets they already hold, and StubHub adds a service fee on top rather than pricing anything itself. The company is explicit that the fee has no fixed percentage — it moves with the ticket price, how close the event is, and demand — which independent fee trackers say commonly pushes the checkout total well above the listed seat price. Since a federal rule took effect in May 2025, US listings must show that all-in total upfront rather than adding fees during checkout.',
    'Every order carries the FanProtect Guarantee: a valid, on-time ticket or a comparable replacement or refund, funded out of the fees already built into the price. It excludes buyer’s remorse and personal emergencies, and claims generally need reporting within 24 to 48 hours of the event. The rollout of all-in pricing became a genuine regulatory problem: in April 2026 the FTC announced a $10 million settlement after finding StubHub knowingly phased in compliance over two days around a major NFL ticket release, and is refunding fees to affected buyers from that window.',
  ],
  facts: [
    { label: 'Founded', value: '2000, San Francisco' },
    { label: 'Ownership', value: 'Same group as viagogo' },
    { label: 'Guarantee', value: 'FanProtect Guarantee' },
    { label: 'Pricing rule', value: 'All-in US pricing since 2025' },
  ],
  plans: {
    title: 'What you actually pay',
    note: 'StubHub says there is no fixed fee percentage — it moves with price, timing and demand — and the 2026 FTC settlement shows that "no fixed fee" history came with real compliance problems.',
    items: [
      {
        name: 'Ticket price',
        price: 'Set by the individual seller',
        detail:
          'The listed seat price is whatever the seller chose to ask, not a StubHub-set number — worth comparing across listings for the same seats before buying.',
        pick: true,
      },
      {
        name: 'Service fee',
        price: 'No fixed %, added by StubHub',
        detail:
          'StubHub states the fee varies with ticket price, time to event and demand. Independent fee trackers report it often adding a fifth of the total or more.',
      },
      {
        name: 'FanProtect Guarantee',
        price: 'Included, no extra charge',
        detail:
          'Valid, on-time tickets or a replacement/refund, but it excludes buyer’s remorse and needs claims reported within 24–48 hours of the event.',
      },
    ],
  },
  pros: [
    {
      title: 'A very large secondary inventory',
      body: 'Because sellers list directly, sold-out shows, playoff games and last-minute releases often still show available seats here when the primary box office has nothing left.',
    },
    {
      title: 'FanProtect Guarantee on every order',
      body: 'A concrete backstop: valid tickets or your money back, which matters more on a resale purchase than on almost any other kind of online order.',
    },
    {
      title: 'Now a public company',
      body: 'StubHub Holdings listed on a US exchange in 2025, which means audited financial disclosure exists where it did not before — an unusual level of transparency for a resale marketplace.',
    },
    {
      title: 'Fast electronic delivery',
      body: 'Most tickets transfer instantly or within minutes of purchase, which makes a same-day, walk-up-to-the-venue purchase genuinely realistic in a way a mailed paper ticket never was.',
    },
  ],
  cons: [
    {
      title: 'Fees are genuinely unpredictable',
      body: 'StubHub itself says there is no fixed percentage, so the checkout total can move a long way from the headline seat price depending on timing and demand.',
    },
    {
      title: '$10 million FTC settlement over hidden pricing',
      body: 'In April 2026 the FTC found StubHub had not properly complied with the federal rule requiring all-in prices, and ordered $10 million refunded to affected buyers.',
    },
    {
      title: 'The guarantee has real exclusions',
      body: 'Buyer’s remorse, personal emergencies and late claims outside the 24–48 hour reporting window are not covered, whatever the underlying ticket problem turned out to be.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot (US/Canada)',
      value: 4.0,
      note: 'over 20,000 reviews; roughly a third are 1-star, mostly citing fees',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.6,
      note: 'a wide, guarantee-backed inventory weighed against unpredictable fees and a 2026 FTC settlement',
    },
  ],
  bestFor: [
    'Buyers chasing sold-out or last-minute inventory the box office has none of',
    'Anyone who wants a FanProtect-backed resale purchase over an unverified private seller',
    'US buyers who want to see the all-in total, now that the federal rule applies',
    'Sellers who want a very large buyer pool for tickets they can no longer use',
  ],
  notFor: [
    'Anyone assuming the listed seat price is close to the final checkout total',
    'Buyers who want a fee history free of recent enforcement action',
    'Shoppers who want a flat, predictable service-fee percentage stated upfront',
  ],
  faq: [
    {
      q: 'Is StubHub legit?',
      a: 'Yes — it is a long-running, now publicly listed marketplace with a real buyer guarantee. Legit is not the same as cheap: fees are unpredictable, and StubHub has just paid a $10 million FTC settlement over how clearly it showed them.',
    },
    {
      q: 'How much are StubHub’s fees?',
      a: 'There is no fixed percentage — StubHub says it varies with the ticket price, how close the event is, and demand. Independent fee trackers commonly report it adding a fifth of the total or more, so check the final price before confirming.',
    },
    {
      q: 'What does the FanProtect Guarantee cover?',
      a: 'A valid, on-time ticket, or a comparable replacement or refund if something goes wrong with the order — including invalid tickets or a cancelled event. It does not cover buyer’s remorse, and claims generally need reporting within 24 to 48 hours of the event.',
    },
    {
      q: 'Are StubHub and viagogo the same company?',
      a: 'Yes. viagogo bought StubHub from eBay in 2020, and both now operate under the same ownership, led by StubHub’s original co-founder Eric Baker. The two sites still run separately, with separate accounts, separate listings, and their own distinct fee and complaint histories.',
    },
    {
      q: 'Why did StubHub pay the FTC $10 million?',
      a: 'For not properly complying with the federal rule that requires ticket sites to show the full, all-in price before checkout. The FTC said StubHub phased in compliance over two days around a major NFL ticket release rather than switching immediately, and is refunding affected buyers.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'stubhub.com',
}
