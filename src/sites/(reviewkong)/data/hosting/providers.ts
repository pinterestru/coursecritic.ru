/**
 * Provider registry for the web hosting vertical.
 *
 * The rule we apply throughout this vertical: rank on the *renewal* price, not
 * the introductory one. Shared hosting is sold on a 70%-off first term and then
 * quietly triples, so every entry states both numbers.
 *
 * SOURCES — promotional and renewal prices, plan limits, refund windows and
 * infrastructure claims come from each host's own pricing page:
 *   - https://www.hostinger.com/web-hosting
 *   - https://www.siteground.com/web-hosting.htm
 *   - https://www.cloudways.com/en/pricing.php
 *   - https://www.dreamhost.com/hosting/shared/ and the DreamHost Terms of Service
 *     (updated 22 June 2026): the guarantee is THIRTY days, card and PayPal, with
 *     VPS, dedicated, email and DreamCompute excluded. Third-party review sites
 *     still claiming 97 days are stale — they also list retired plan names.
 *   - https://www.bluehost.com/hosting/shared
 *   - Ratings: Trustpilot and G2 listings for each host
 *
 * ⚠️ Prices and plan limits are working values captured while building the site
 * and MUST be re-verified against each host's own pricing page before this goes
 * live — shared hosting runs a rolling promotion and both the headline and the
 * renewal figure move. See ../../README.md.
 */
import type { Author, Provider } from '../guides/types'

export const hostingProviders: Record<string, Provider> = {
  hostinger: {
    id: 'hostinger',
    name: 'Hostinger',
    badge: 'HO',
    color: '#673DE6',
    vertical: 'hosting',
    domain: 'hostinger.com',
    siteLabel: 'hostinger.com',
    score: 4.5,
    tagline: 'The value pick: fast enough for most sites at a genuinely low price',
    founded: 'operating since 2004',
    reach: 'data centres on four continents',
    priceNote: 'from $2.99/mo on a long term; entry tier renews near $8/mo',
    format: 'Shared and managed WordPress plans, custom hPanel control panel',
    highlights: [
      'Cheapest credible entry point in the comparison, including on renewal',
      'hPanel is simpler than cPanel for anyone hosting their first site',
      'Free migration from another host, handled by their team',
      'LiteSpeed servers and built-in caching on WordPress plans',
    ],
    pros: [
      'Price-to-performance is the best here for a small brochure or blog site',
      'Onboarding is friendly to people who have never touched a control panel',
      'Renewal, while higher, stays reasonable — unlike much of the market',
    ],
    cons: [
      'Cheapest tier is deliberately underpowered; you will want the next one up',
      'The advertised price requires committing to a multi-year term up front',
    ],
    trust: [
      '30-day money-back guarantee',
      'Free SSL and daily or weekly backups by plan',
      'Free migration from another host',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.5 },
      { source: 'G2', value: 4.3 },
    ],
    tracked: true,
    topCta: 'See Hostinger plans →',
    brandSlug: 'hostinger',
  },
  siteground: {
    id: 'siteground',
    name: 'SiteGround',
    badge: 'SG',
    color: '#3BA55D',
    vertical: 'hosting',
    domain: 'siteground.com',
    siteLabel: 'siteground.com',
    score: 4.4,
    tagline: 'Best support in shared hosting, at a renewal price you should check first',
    founded: 'operating since 2004',
    reach: 'Google Cloud infrastructure across six regions',
    priceNote: 'from $2.99/mo introductory; renews at $17.99/mo',
    format: 'Managed shared hosting with staging on higher tiers',
    highlights: [
      'Support that resolves problems instead of pasting documentation links',
      'Runs on Google Cloud, with sensible caching configured by default',
      'Staging and Git integration on the mid and top tiers',
      'Daily backups included on every plan',
    ],
    pros: [
      'Support quality is the differentiator, and it is real',
      'Platform tuning means WordPress runs well without plugins to fix it',
    ],
    cons: [
      'One of the steepest renewal jumps in the industry',
      'A done-for-you migration is a paid extra; only the self-service plugin is free',
    ],
    trust: ['30-day money-back guarantee', 'Daily backups on all plans', 'Free migration plugin'],
    ratings: [
      { source: 'Trustpilot', value: 4.7 },
      { source: 'G2', value: 4.4 },
    ],
    tracked: true,
    brandSlug: 'siteground',
  },
  cloudways: {
    id: 'cloudways',
    name: 'Cloudways',
    badge: 'CW',
    color: '#2C39C6',
    vertical: 'hosting',
    domain: 'cloudways.com',
    siteLabel: 'cloudways.com',
    score: 4.3,
    tagline: 'Managed cloud VPS: pay monthly, scale in a click, no long-term lock-in',
    founded: 'launched 2012',
    reach: 'servers on DigitalOcean, Vultr, AWS and Google Cloud',
    priceNote: 'from $11/mo, billed monthly with no term contract',
    format: 'Managed cloud hosting on your choice of underlying provider',
    highlights: [
      'Real dedicated resources instead of a shared box with noisy neighbours',
      'Monthly billing with no multi-year commitment and no renewal cliff',
      'Vertical scaling in a click when a post takes off',
      'Staging, free SSL and automated backups built in',
    ],
    pros: [
      'The price you pay in month one is the price in month thirty',
      'Substantially faster than shared hosting for anything database-heavy',
      'Straightforward path from a small site to a busy one',
    ],
    cons: [
      'No domain registration or email hosting — you assemble those yourself',
      'Assumes some technical comfort; not a first-website product',
    ],
    trust: [
      'Pay-as-you-go monthly billing',
      'Free 3-day trial without a card',
      'Automated backups and staging',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.5 },
      { source: 'G2', value: 4.5 },
    ],
    tracked: true,
    brandSlug: 'cloudways',
  },
  dreamhost: {
    id: 'dreamhost',
    name: 'DreamHost',
    badge: 'DH',
    color: '#0060D6',
    vertical: 'hosting',
    domain: 'dreamhost.com',
    siteLabel: 'dreamhost.com',
    score: 4.1,
    tagline: 'Month-to-month billing and a mild renewal multiple, on a plainly-priced page',
    founded: 'operating since 1997',
    reach: 'privately held and independent; US data centres plus Amsterdam',
    priceNote: 'from ~$2.99/mo first term; renews near 4x that (region-dependent)',
    format: 'Shared and managed WordPress hosting, month-to-month option',
    highlights: [
      'Month-to-month billing at a fair rate, not just a discounted multi-year term',
      'Month-to-month billing without a punitive premium',
      'Unlimited traffic on shared plans; storage is metered (Launch starts at 25 GB NVMe)',
      'Privately held and independent, not part of a hosting conglomerate',
    ],
    pros: [
      'Month-to-month billing without the punitive premium most hosts attach to it',
      'Pricing page is refreshingly free of asterisks',
    ],
    cons: [
      'No phone support on entry plans; chat and tickets only',
      'Control panel is bespoke, so cPanel habits do not transfer',
    ],
    trust: [
      '30-day money-back guarantee (card and PayPal; VPS, dedicated and email excluded)',
      'Free domain on annual plans',
      'Privately held and independent',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.0 },
      { source: 'G2', value: 4.1 },
    ],
    tracked: true,
    brandSlug: 'dreamhost',
  },
  bluehost: {
    id: 'bluehost',
    name: 'Bluehost',
    badge: 'BH',
    color: '#1E90FF',
    vertical: 'hosting',
    domain: 'bluehost.com',
    siteLabel: 'bluehost.com',
    score: 3.7,
    tagline: 'The name everyone knows, priced on a first term you should read carefully',
    founded: 'operating since 2003',
    reach: 'part of a large hosting group',
    priceNote: 'from $3.99/mo on a 36-month term; renews at $9.99/mo',
    format: 'Shared hosting with a WordPress-focused onboarding flow',
    highlights: [
      'Guided setup and a free domain for year one, aimed squarely at first-timers',
      'Guided WordPress setup that suits complete beginners; tiers are Starter, Business and eCommerce Essentials',
      'Free domain for the first year',
      'Enormous amount of third-party tutorial coverage',
    ],
    pros: [
      'Beginner onboarding is smooth and hard to get wrong',
      'You will never struggle to find a how-to for it',
    ],
    cons: [
      'Aggressive checkout upsells inflate the real first bill, and site migration is a $149.99 extra',
      'Performance is only average — independent measurement puts origin TTFB above the industry norm',
    ],
    trust: ['30-day money-back guarantee', 'Free domain for year one', 'Free SSL'],
    ratings: [
      { source: 'Trustpilot', value: 3.9 },
      { source: 'G2', value: 3.8 },
    ],
    tracked: true,
    brandSlug: 'bluehost',
  },
}

/** The byline on every hosting guide. */
export const hostingAuthor: Author = {
  name: 'Tom Aldridge',
  role: 'Infrastructure editor',
  bio: 'Tom has spent fifteen years writing about the infrastructure small sites run on. He compares the plan people actually buy — the second-cheapest tier, not the advertised one — and prices everything at renewal, because that is what you will really pay from year two.',
  initials: 'TA',
  credentials: [
    'Compares the plan people buy',
    'Prices at renewal, not the promo',
    '15 years covering hosting',
  ],
}
