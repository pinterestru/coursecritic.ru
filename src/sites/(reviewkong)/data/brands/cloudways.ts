/**
 * Brand page data for Cloudways (route: /brands/cloudways).
 *
 * SOURCES — every figure below is taken from these pages, not from vendor
 * press material:
 *   - https://www.cloudways.com/en/pricing.php — server sizes and monthly
 *     prices per cloud provider, hourly billing, add-on pricing, the 3-day
 *     trial, and the Rackspace email add-on
 *   - https://www.cloudways.com/en/managed-cloud-hosting.php — the managed
 *     platform, staging and the underlying provider choice
 *   - https://investors.digitalocean.com/news/news-details/2022/DigitalOcean-Completes-Acquisition-of-Cloudways/
 *     — the $350m acquisition, completed 8 September 2022
 *   - https://www.cloudways.com/blog/updated-pricing-plans/ — the 1 April 2023
 *     increase, described by Cloudways as its "first since 2017"
 *   - https://www.capterra.com/p/151414/Cloudways/reviews/ — the lower,
 *     live-verified rating used as a counterweight below
 *   - https://www.trustpilot.com/review/cloudways.com and https://www.g2.com
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * cloudways.com before launch and before each campaign. Server prices track the
 * underlying cloud provider's own pricing and move when it does.
 *
 * ⚠️ DO NOT restore the claim that Cloudways runs "no introductory discount".
 * It is false — a 40%-off-for-four-months promotion was live to 15 September
 * 2026. What survives, and what this page argues, is narrower: there is no
 * TERM-LOCKED first-period rate that resets to a higher one, which is the trick
 * the rest of this vertical is built around. Keep that distinction intact.
 *
 * ⚠️ The Trustpilot and G2 values are carried from ../hosting/providers.ts and
 * are NOT independently confirmed — both sites block every automated fetch
 * route. Archive-derived figures (Trustpilot 4.6 from ~3,480 reviews, Apr 2026;
 * G2 4.7 from 1,131, Jul 2026) run higher, and Trustpilot's own page disagrees
 * with itself (3,480 in JSON-LD vs 3,234 on-page). The distribution is a
 * barbell — roughly 88% five-star and 8% one-star — which is why Capterra's
 * lower, live-verified 4.2 is shown alongside rather than dropped.
 *
 * ⚠️ The $11 entry-tier specs came from the pricing page but its plan selector
 * is JavaScript-driven; confirm RAM/storage/bandwidth by eye before a campaign.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const cloudways: BrandPage = {
  slug: 'cloudways',
  providerId: 'cloudways',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Cloudways review 2026 — managed cloud, no renewal cliff',
  metaDescription:
    'An independent Cloudways review: what managed cloud really costs monthly, why there is no renewal jump, and the two things it does not do.',
  intro:
    'Cloudways is the only host in this comparison that does not play the renewal game. There is no three-year term to prepay and no renewal cliff waiting in year two — you rent a managed cloud server by the month, and barring a change of server size the price in month thirty is the price in month one. That single fact is its whole argument, and it is a strong one. The trade-off is that it assumes you already know what you are doing.',
  about: [
    'Cloudways launched in 2012 and was acquired by DigitalOcean in 2022. It is not a cloud provider itself: it is a management layer on top of one. You choose the underlying infrastructure — DigitalOcean, Vultr, AWS or Google Cloud — and Cloudways provisions the server, keeps the stack patched, and gives you a dashboard instead of an SSH session and a stack of documentation. You are paying for the operations work, not the hardware.',
    'The practical difference from shared hosting is dedicated resources. On a shared plan your site competes with every other site on the box, so somebody else’s traffic spike becomes your slow afternoon. A Cloudways server is yours: the RAM and CPU on the plan are the RAM and CPU you get. That is why it holds up on database-heavy work — WooCommerce, membership sites, anything that cannot be served from a cache — where shared hosting starts to strain.',
    'Scaling is the other structural advantage. Because the server is a cloud instance rather than a slot on a fixed machine, you can move up a size when a post takes off and back down afterwards, and billing is hourly so a short-lived upgrade costs what it actually used. There is no migration, no new plan and no renegotiated term — which is the thing shared hosting genuinely cannot offer at any price.',
  ],
  facts: [
    { label: 'Launched', value: '2012' },
    { label: 'Owned by', value: 'DigitalOcean' },
    { label: 'Entry price', value: '$11/mo' },
    { label: 'Free trial', value: '3 days, no card' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'This is the honest column in the whole comparison: billing is hourly, invoiced monthly in arrears, with no term contract and no renewal increase. Cloudways does run limited-time promotions — 40% off for four months was live to 15 September 2026 — but those discount a standing list price rather than setting a first-term rate that later resets, which is the distinction that matters. What changes your bill is changing your server size, not the calendar. Prices below are for DigitalOcean-backed servers, the cheapest of the four options; AWS and Google Cloud cost more for equivalent sizes. Intermediate sizes fill the gaps between the tiers shown. Two things are billed on top: bandwidth and storage above the plan allowance, and any add-ons you enable.',
    items: [
      {
        name: 'Entry (DigitalOcean)',
        price: '$11/mo, billed monthly',
        renews: 'no renewal increase — this is the standing price',
        detail:
          '2 GB RAM, 1 vCPU, 50 GB storage, 2 TB bandwidth. Comfortably more headroom than any shared plan at three times the money.',
        pick: true,
      },
      {
        name: 'Medium (DigitalOcean)',
        price: '$88/mo, billed monthly',
        renews: 'no renewal increase',
        detail:
          '8 GB RAM, 4 vCPU, 160 GB storage, 5 TB bandwidth. The size for a busy store or a site with real concurrency.',
      },
      {
        name: 'Large (DigitalOcean)',
        price: 'up to $342/mo, billed monthly',
        renews: 'no renewal increase',
        detail:
          '128 GB RAM, 24 vCPU at the top of the range. Well past the point where you should be asking whether you need a sysadmin.',
      },
    ],
  },
  pros: [
    {
      title: 'The price does not change',
      body: 'No term to prepay and no renewal jump. Promotions exist, but they discount a standing list price instead of setting a first-term rate that later resets — so the number you are quoted does not have an expiry date attached to it. Every other host here is cheaper in year one and several are dearer by year two. If you have been burned by a renewal, this is the structural fix.',
    },
    {
      title: 'Dedicated resources, not a slot on a shared box',
      body: 'The RAM and CPU on the plan are yours. That is what makes the difference on database-heavy sites — carts, checkouts, logged-in users — where caching cannot save you and shared hosting quietly falls over.',
    },
    {
      title: 'Scale up and back down in a click',
      body: 'Resize the server when traffic arrives and shrink it again afterwards. Because billing is hourly, a week at a larger size costs a week, not a year. No shared host can do this without a migration.',
    },
    {
      title: 'You can leave whenever you like',
      body: 'Monthly billing means the exit cost is one month. There is no prepaid multi-year balance keeping you somewhere you no longer want to be, which is a real form of leverage.',
    },
  ],
  cons: [
    {
      title: 'The server price is not the whole bill',
      body: 'Cloudways does not sell domains at all, and email is a paid Rackspace add-on at around $1 per mailbox per month. Off-site backups are billed separately too, at $0.033 per GB per server — and long-standing customers note the backup charge cannot be reduced to zero, so there is a small unavoidable floor above the headline figure. You are assembling several services rather than buying one.',
    },
    {
      title: 'There is no money-back guarantee',
      body: 'What you get is a 3-day free trial without a card. Everyone else here offers 30 days to change your mind after paying; Cloudways offers three days to look around before you do. The uptime guarantee is similarly thin — Website Planet notes it carries no stated compensation if the target is missed, and AllAboutCookies measured 99.95% against a 99.99% promise.',
    },
    {
      title: 'It is not a first-website product',
      body: 'The dashboard talks about servers, applications, staging and SSH keys, because that is what it manages. If you have never used a control panel, this is the wrong end of the market to start at — and $11 a month is three times what a shared plan costs for a site that does not need the resources yet.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.5,
      note: 'thousands of reviews; a polarised 5-star/1-star split',
    },
    { source: 'G2', value: 4.5, note: 'business-user reviews, large sample' },
    {
      source: 'Capterra',
      value: 4.2,
      note: 'smaller sample; support rated lower than the headline',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite across performance, pricing honesty and scope',
    },
  ],
  bestFor: [
    'Sites with real traffic, especially WooCommerce and anything database-heavy',
    'Anyone who refuses to prepay a multi-year term or absorb a renewal jump',
    'Developers and agencies who want staging, SSH and a server they can resize',
  ],
  notFor: [
    'A first website — the resources are wasted and the dashboard assumes too much',
    'Anyone who wants domain, email and hosting on one bill',
    'Buyers who need a long refund window rather than a three-day trial',
  ],
  faq: [
    {
      q: 'Is there really no renewal price increase?',
      a: 'Correct. Billing is hourly and invoiced monthly in arrears, so there is no introductory term to expire. Cloudways does run limited-time promotions — a 40%-off-for-four-months offer was live in 2026 — but those are discounts off a standing price, not a first-term rate that resets. Your bill changes when you change server size.',
    },
    {
      q: 'Which underlying provider should I pick?',
      a: 'DigitalOcean or Vultr for almost everyone: they are the cheapest and perform well for typical web workloads. AWS and Google Cloud cost meaningfully more per equivalent size and are worth it mainly if you need a specific region or already run other infrastructure there.',
    },
    {
      q: 'How does $11 a month compare with shared hosting?',
      a: 'It is roughly three times a promotional shared plan and roughly the same as, or less than, what several shared hosts charge at renewal — SiteGround renews its entry plan at $17.99. So the honest comparison is not $11 against $2.99; it is $11 against what you will actually be paying in year two.',
    },
    {
      q: 'Can I get email addresses on my domain?',
      a: 'Not included. Cloudways offers a Rackspace email add-on at around $1 per mailbox per month, or you can point your domain’s mail records at Google Workspace, Fastmail or anyone else. Budget for it — it is a genuine gap rather than an oversight.',
    },
    {
      q: 'Do I need to be technical to use it?',
      a: 'Somewhat. The server management is genuinely handled for you, but the dashboard is organised around servers and applications, and getting value from staging, SSH or WP-CLI assumes you know what they are. If none of those words mean anything yet, a managed shared host is the better starting point.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'cloudways.com/en/pricing.php',
}
