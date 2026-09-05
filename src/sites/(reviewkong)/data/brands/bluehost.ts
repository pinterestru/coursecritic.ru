/**
 * Brand page data for Bluehost (route: /brands/bluehost).
 *
 * SOURCES — every figure below is taken from these pages, not from vendor
 * press material:
 *   - https://www.bluehost.com/hosting/shared — the Starter / Business /
 *     eCommerce Essentials tiers, storage, site counts and visit guidance
 *   - https://www.bluehost.com/help/article/renewal-price-faq — the official
 *     renewal price list by term, including the second-renewal escalation
 *   - https://www.bluehost.com/help/article/refundpolicy and
 *     https://www.bluehost.com/modals/_money-back.mas — the 30-day window and
 *     the non-refundable domain deduction
 *   - https://www.bluehost.com/help/article/migration-products — $149.99 per
 *     site professional migration, $99 per mailbox for email
 *   - https://www.bluehost.com/help/article/free-wordpress-migration — the DIY
 *     tool and its stated ~85% success target
 *   - https://hostingstep.com/hosting-reviews/bluehost/ — 243-day uptime and
 *     TTFB dataset
 *   - https://www.wpbeginner.com/hosting/bluehost/ and
 *     https://www.websiteplanet.com/web-hosting/bluehost/
 *
 * ⚠️ TIER NAMES CHANGED. Basic / Plus / Choice Plus / Pro are retired; the
 * current shared line is Starter / Business / eCommerce Essentials. Most 2026
 * affiliate content still uses the old names and the old prices — do not copy
 * figures from it back into this file.
 *
 * ⚠️ TWO REGISTRY CLAIMS ARE NOW WRONG and are deliberately NOT repeated here.
 * (1) "Cheapest headline price in the comparison" — Bluehost's own page now
 * advertises Starter at $3.99, above Hostinger's $2.99 and DreamHost's $1.99.
 * (2) "Renewal multiple is one of the harshest here" — $3.99 to $9.99 is about
 * 2.5x, the MILDEST shared multiple in this comparison; SiteGround's is roughly
 * 6x. The real case against Bluehost is upsells, weekly-only backups, a $149.99
 * migration and middling performance, all of which is documented below. Do not
 * re-add a harsh-renewal claim to make the page match the older copy.
 *
 * ⚠️ Checkout pre-ticking is asserted only as far as it is sourced: Website
 * Planet states "some paid extras are pre-selected" and names the Professional
 * Email trial. The widely circulated "$9–10/month of pre-checked boxes" figure
 * comes from low-quality affiliate pages and is NOT repeated. Trustpilot and G2
 * both refuse automated fetches, so their scores are carried from the registry
 * and need a manual check. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const bluehost: BrandPage = {
  slug: 'bluehost',
  providerId: 'bluehost',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Bluehost review 2026 — the upsells and the real cost',
  metaDescription:
    'An independent Bluehost review: what the plans renew at, which extras are sold separately, and why it is hard to justify on the numbers.',
  intro:
    'Bluehost is the most recommended host on the internet and the hardest to justify once you read the invoice rather than the tutorial. The onboarding is genuinely good, there is a how-to for every problem you could possibly have, and WordPress itself officially recommends it. The problems are elsewhere: backups are weekly unless you pay, a done-for-you migration costs $149.99, performance is average, and the things you assume are included are frequently the things being sold to you at checkout.',
  about: [
    'Bluehost has been hosting since 2003 and is owned by Newfold Digital, the group formed when Endurance International Group was bought by Clearlake Capital in 2021 and merged with Web.com. Newfold runs sixty-odd hosting brands including HostGator, iPage and Domain.com. This matters for one practical reason: if you are choosing between several of those names to spread your risk, you are not spreading anything.',
    'The shared range was renamed and is now Starter, Business and eCommerce Essentials. Storage is metered and stated plainly — 10, 50 and 100 GB of NVMe SSD — and capacity is expressed as visit guidance rather than an unmetered-with-fair-use claim, at roughly 40,000, 200,000 and 400,000 visits a month. That is more honest than the old "unlimited everything" framing, and it makes the tiers easier to compare against rivals.',
    "The control panel is a hybrid. Bluehost's own Account Manager is the front end you land in, with cPanel retained underneath and reachable from the Advanced section without a separate login. For a first-time site owner that is the right arrangement — the simple dashboard for everyday tasks, the industry-standard panel there when a tutorial assumes it. It is also one of the few genuine advantages Bluehost still has over hosts that dropped cPanel entirely.",
  ],
  facts: [
    { label: 'Operating since', value: '2003' },
    { label: 'Owned by', value: 'Newfold Digital' },
    { label: 'Entry price', value: 'from $3.99/mo' },
    { label: 'Entry renewal', value: '$9.99/mo' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: "Prices below are the 36-month term, paid in full up front, and the renewal rate that follows it. The renewal multiple is about 2.5x — genuinely the mildest of the shared hosts here — so the renewal is not where Bluehost costs you. The extras are. Note also that Bluehost's own renewal price list shows eCommerce Essentials renewing at $21.99 on the first renewal and $30.99 on the second, so the price can step up more than once. Shorter terms cost more throughout: Starter renews at $11.99 on a 12-month term and $15.99 month to month.",
    items: [
      {
        name: 'Starter',
        price: 'from $3.99/mo on a 36-month term',
        renews: 'renews at $9.99/mo',
        detail:
          '10 GB storage, 10 sites, guidance of ~40,000 visits a month. No domain privacy and no phone support at this tier.',
      },
      {
        name: 'Business',
        price: 'from $6.99/mo on a 36-month term',
        renews: 'renews at $13.99/mo',
        detail:
          '50 GB storage, 50 sites, ~200,000 visits. Adds domain privacy for year one and phone support. The tier to buy if you buy Bluehost.',
        pick: true,
      },
      {
        name: 'eCommerce Essentials',
        price: 'from $14.99/mo on a 36-month term',
        renews: 'renews at $21.99/mo, then $30.99',
        detail:
          '100 GB storage, 100 sites, ~400,000 visits and store tooling. At this price a managed cloud plan deserves a look first.',
      },
    ],
  },
  pros: [
    {
      title: 'The easiest start in hosting',
      body: 'The guided WordPress setup is hard to get wrong, and because Bluehost is the host most tutorials name, every problem you hit has been written up by somebody. For a first site that is worth real money in saved time.',
    },
    {
      title: 'A custom dashboard with cPanel still underneath',
      body: 'You get a simplified Account Manager for everyday work and full cPanel from the Advanced section when a guide assumes it. Hosts that dropped cPanel entirely make you choose; Bluehost does not.',
    },
    {
      title: 'Uptime is solid, whatever else is not',
      body: "Hostingstep's monitoring across 243 days and roughly 350,000 checks recorded 99.97% uptime — about 84 minutes of downtime in eight months. Speed is the weakness here, not availability.",
    },
    {
      title: 'Storage and capacity are stated plainly',
      body: '10, 50 and 100 GB of NVMe with published visit guidance, rather than "unlimited" hedged by a fair-use policy you have to go and find. It makes the tiers genuinely comparable.',
    },
  ],
  cons: [
    {
      title: 'Backups are weekly unless you pay for CodeGuard',
      body: 'Every shared tier includes weekly backups only. On a site you update daily that means losing up to a week of work, and the fix is a paid CodeGuard add-on at roughly $2.99 a month. SiteGround includes daily backups on its cheapest plan with free restores. This is the single most consequential thing Bluehost holds back.',
    },
    {
      title: 'Migration is DIY or $149.99',
      body: "The free option is a self-service plugin, and Bluehost's own documentation targets an 85% success rate — meaning roughly one migration in seven fails and lands you on the paid path. A done-for-you transfer is $149.99 per website, with email migration a further $99 per mailbox. Hostinger and SiteGround both move sites for far less or nothing.",
    },
    {
      title: 'Extras are pushed at checkout, and refunds are not clean',
      body: 'Website Planet reports that some paid extras arrive pre-selected, naming the Professional Email trial that converts to full price when it ends. Domain privacy is free for year one on Business and above but chargeable on Starter, and renews at $15 a year. If you do refund inside the 30-day window, the value of the free domain is deducted at its regular price, and SiteLock, domain privacy and website transfers are non-refundable outright.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 3.9, note: 'very high volume; cancellation complaints recur' },
    { source: 'G2', value: 3.8, note: 'business-user reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite across price, performance and what is held back for upsell',
    },
  ],
  bestFor: [
    'Complete beginners following a tutorial that specifically names Bluehost',
    'Anyone who wants a simple dashboard but occasional access to real cPanel',
    'US-audience sites where the regional performance is at its best',
  ],
  notFor: [
    'Sites updated daily, unless you budget for the paid daily-backup add-on',
    'Anyone migrating an existing site who does not want to risk a $149.99 bill',
    'Asia-Pacific audiences — independent monitoring puts regional response well behind',
  ],
  faq: [
    {
      q: 'Which plan should I actually buy?',
      a: 'Business. Starter withholds domain privacy and phone support, and 10 GB is tight once a media library builds up. The renewal gap between the two is four dollars a month for five times the storage and the support channel you will want at the moment something breaks.',
    },
    {
      q: 'How bad is the renewal?',
      a: "Milder than its reputation, in fact: Starter goes from $3.99 to $9.99, about 2.5 times, which is the gentlest shared multiple in this comparison — SiteGround roughly sextuples. Watch the second renewal though. Bluehost's own price list shows eCommerce Essentials stepping from $21.99 to $30.99, so the first renewal is not necessarily the last increase.",
    },
    {
      q: 'Are the backups good enough?',
      a: 'No, not on the included plan. Weekly backups mean that in the worst case you lose a week. Either add CodeGuard at around $2.99 a month or run an independent backup plugin to off-site storage. This is not the place to economise.',
    },
    {
      q: 'Is the free migration really free?',
      a: 'The self-service tool is free, and Bluehost documents a target success rate of about 85%. If your site is in the other 15% the professional service is $149.99 per website, plus $99 per mailbox for email. Budget for the possibility before you commit, and keep the old host running until the new site is verified.',
    },
    {
      q: 'What happens if I claim the 30-day refund?',
      a: 'You get the hosting fee back, but not the domain: Bluehost deducts a non-refundable domain fee at the regular price, typically in the region of $13 to $16. Add-ons including SiteLock, domain privacy and any website transfer are non-refundable as well, so the sum returned is smaller than the sum paid.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'bluehost.com/hosting/shared',
}
