/**
 * Brand page data for Scentbird (route: /brands/scentbird).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.scentbird.com/blog/scentbird-cancel-subscription/ and related
 *     Scentbird blog posts — how skipping, pausing and cancelling work
 *   - Third-party subscription-box reporting (FashionBeans, MySubscriptionAddiction,
 *     WWD founder interview) — pricing tiers, luxury-fragrance surcharge, catalogue
 *     size, founding story (2014, founder Mariya Nurislamova)
 *   - https://www.trustpilot.com/review/scentbird.com — TrustScore and review volume
 *   - Shipping-region reporting (Scentbird ships direct only to the US, Canada and
 *     the UK; other countries need a parcel forwarder)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const scentbird: BrandPage = {
  slug: 'scentbird',
  providerId: 'scentbird',
  metaTitle: 'Scentbird review 2026 — cost, catalogue, cancel policy',
  metaDescription:
    'An independent Scentbird review: how the vial subscription is priced, the luxury-fragrance surcharge, and where shipping stops outside North America.',
  intro:
    'Scentbird sells fragrance the way a streaming service sells music: a monthly 8mL vial instead of a full bottle, picked from a catalogue that runs into the hundreds of designer and niche names. It solves a real problem, buying a $150 bottle blind, but the subscription mechanics matter more than the scent list. Skip it wrong and you get charged anyway.',
  about: [
    'Scentbird launched in 2014, built by founder Mariya Nurislamova around a simple frustration: fragrance counters force a decision on a full-price bottle after one sniff test. The company repackaged perfume and cologne into 8mL monthly vials, roughly a 30-day supply at normal use, so a subscriber can live with a scent before committing to the bottle. It now ships from the US and has grown into one of the larger fragrance-discovery subscriptions in the market.',
    'The mechanic is a queue, not a lucky dip. You take a scent quiz, browse the catalogue, and build a list of what you want next; each month a vial from that queue ships automatically unless you skip. Ultra-luxury and niche houses carry an extra charge on top of the base subscription, so the sticker price on the homepage is not what every vial actually costs once you pick a premium name.',
    'What you are paying for is discovery and convenience, not the cheapest possible way to smell a specific perfume. A single vial works out expensive next to buying a full bottle and decanting it yourself, and that gap widens once a queued fragrance falls into the ultra-luxury or niche tier and picks up its own surcharge on top of the plan price. Scentbird is also explicit that switching plans, skipping a month or cancelling outright has to happen before a fixed cutoff date each billing cycle, or the charge goes through regardless of what you meant to do.',
  ],
  facts: [
    { label: 'Founded', value: '2014' },
    { label: 'Ships to', value: 'US, Canada, UK' },
    { label: 'Vial size', value: '8mL, ~30 days' },
    { label: 'Cancel window', value: 'Before the 5th' },
  ],
  plans: {
    title: 'How the subscription is priced',
    note: 'The advertised per-vial price is for standard fragrances only. Ultra-luxury and niche houses add a surcharge on top, so check the catalogue price before adding anything premium to your queue.',
    items: [
      {
        name: '1 fragrance / month',
        price: 'around $17.95/month',
        detail:
          'One 8mL vial, chosen from your queue. The entry tier, and the most expensive per vial.',
      },
      {
        name: '2 fragrances / month',
        price: 'around $28.50/month',
        detail:
          'Two vials, roughly $14.25 each. The middle tier for people who alternate scents by season or occasion.',
        pick: true,
      },
      {
        name: '3 fragrances / month',
        price: 'around $39/month',
        detail:
          'Three vials, roughly $13 each. Best per-vial rate, only worth it if you will actually use all three.',
      },
      {
        name: 'Luxury surcharge',
        price: 'add roughly $5–15',
        detail:
          'Applied at checkout when a queued fragrance is from an ultra-luxury or niche house rather than the standard catalogue.',
      },
    ],
  },
  pros: [
    {
      title: 'A real way to try before you buy',
      body: 'An 8mL vial answers the question a store tester cannot: does this fragrance still work on you eight hours later, in your own life, not the shop floor.',
    },
    {
      title: 'The queue does the remembering',
      body: 'Build a list once and it ships in order automatically each month, no re-ordering required. There is no browsing under pressure at 11pm because the subscription renews tomorrow and nothing is lined up.',
    },
    {
      title: 'Skip and pause without losing your profile',
      body: 'Pausing keeps your queue, credits and scent preferences intact for as long as you need it, unlike cancelling outright, which wipes the personalisation the original quiz built up and starts you over.',
    },
    {
      title: 'A catalogue wide enough to actually discover something',
      body: 'Designer names sit alongside independent and niche brands, so the service works as a genuine discovery engine, not just a cheaper way to sample something you already know you like.',
    },
  ],
  cons: [
    {
      title: 'Miss the cutoff and you are charged anyway',
      body: 'Cancellation has to go through before the 5th of the month or that cycle bills regardless. Refunds only apply within 12 hours of a charge, so a missed date is a sunk cost.',
    },
    {
      title: 'Ships to three countries, full stop',
      body: 'Direct shipping covers only the US, Canada and the UK. Everyone else needs a third-party parcel forwarder, which adds cost and a point of failure Scentbird will not support.',
    },
    {
      title: 'Premium names cost more than the homepage suggests',
      body: 'The luxury surcharge on niche and high-end fragrances is not part of the headline monthly price, so a queue built from aspirational brands quietly costs more than the plan implies.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 3.8, note: '27,460 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite across catalogue breadth, pricing clarity and cancellation friction',
    },
  ],
  bestFor: [
    'Fragrance shoppers who want to test a scent for weeks before buying a bottle',
    'Anyone tired of guessing at a perfume counter and getting it wrong',
    'US, Canadian and UK subscribers who will actually use a monthly vial',
    'People who want designer and niche names in the same catalogue',
  ],
  notFor: [
    'Anyone outside the US, Canada or UK without a parcel-forwarding service',
    'Subscribers who cannot commit to cancelling or skipping before the monthly cutoff',
    'Buyers chasing the lowest possible cost per millilitre — decanting a full bottle is cheaper',
  ],
  faq: [
    {
      q: 'How much is a Scentbird subscription?',
      a: 'The single-vial plan runs around $17.95 a month, dropping to roughly $14.25 and $13 per vial on the two- and three-fragrance plans as you add more each cycle. Ultra-luxury and niche fragrances add a surcharge of roughly $5 to $15 on top of whichever plan you are on, applied at checkout rather than folded into the headline price.',
    },
    {
      q: 'Can I skip a month without cancelling?',
      a: 'Yes. Skipping through the Manage Subscription page pauses billing and shipping for that cycle while keeping your queue, credits and scent preferences intact. The subscription resumes automatically the following month unless you skip again, so it needs revisiting if you want a longer break.',
    },
    {
      q: 'Does Scentbird ship outside the US?',
      a: 'Direct shipping covers the US, Canada and the UK only. Subscribers elsewhere need to route through a US or UK package-forwarding service such as MyUS or Planet Express, which adds its own fee, an extra delivery leg and a point where a shipment can go wrong that Scentbird will not directly support.',
    },
    {
      q: 'What happens if I forget to cancel in time?',
      a: 'You will be charged for that cycle regardless of intent. Cancellation needs to be confirmed before the 5th of the month, and refunds are only available within 12 hours of a charge going through, so a cancellation submitted even a day late after the charge is not recoverable through a refund.',
    },
    {
      q: 'Is the vial enough to actually judge a fragrance?',
      a: 'An 8mL vial lasts roughly 30 days at normal use, around four sprays a day, which is enough for repeated real-world wear across different weather, seasons and occasions. That is a fairer test of how a scent actually behaves on your skin than a single spritz tested standing at a counter.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'scentbird.com',
}
