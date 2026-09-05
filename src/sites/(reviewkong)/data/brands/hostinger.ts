/**
 * Brand page data for Hostinger (route: /brands/hostinger).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://www.hostinger.com/web-hosting — plan tiers, promotional and
 *     renewal pricing, term lengths, 30-day money-back guarantee
 *   - https://www.hostinger.com/wordpress-hosting — LiteSpeed and caching
 *   - https://www.hostinger.com/tutorials/hpanel — the control panel
 *   - https://www.trustpilot.com/review/hostinger.com and https://www.g2.com
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * hostinger.com before launch and before each campaign. Shared hosting is sold
 * on a rolling promotion and both the headline and the renewal price move; the
 * renewal figures are the ones that matter and the ones that drift. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const hostinger: BrandPage = {
  slug: 'hostinger',
  providerId: 'hostinger',
  metaTitle: 'Hostinger review 2026 — performance and renewal price',
  metaDescription:
    'An independent Hostinger review: how the cheap plans actually perform, which tier is worth buying, and the renewal price you should plan for from year two.',
  intro:
    'Hostinger is the answer to "where should I put a small site without overpaying". It is genuinely cheap, the control panel is friendlier than cPanel for a first-time site owner, and performance on the mid tier is better than the price suggests. Like everyone in shared hosting it sells on a first-term discount — the difference is that its renewal price stays defensible.',
  about: [
    'Hostinger has been around since 2004 and now runs data centres across several continents, which matters more than it sounds: shared hosting performance is dominated by physical distance to your visitors, and picking the wrong region costs you more than any plan upgrade will win back. Choose the location nearest your audience at signup, because moving later means a migration.',
    'The control panel is the company’s own, called hPanel, rather than the industry-standard cPanel. Experienced administrators occasionally grumble; everyone setting up a first website finds it substantially easier. Installing WordPress, adding a domain and issuing an SSL certificate are each a couple of clicks, and the interface does not assume you know what a subdomain record is.',
    'On performance, WordPress plans run on LiteSpeed with caching configured out of the box. That combination is why a $3 plan here often outruns a $10 plan elsewhere. The entry tier is still deliberately underpowered — modest resource limits and fewer websites — so treat the second tier as the real starting point and price accordingly.',
  ],
  facts: [
    { label: 'Operating since', value: '2004' },
    { label: 'Entry price', value: 'from $2.99/mo' },
    { label: 'Entry renewal', value: 'around $8/mo' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'Every advertised price assumes a multi-year term paid in advance. Renewal roughly triples the promotional rate — near $8/mo on the entry plan and near $11/mo on the Premium tier — which is high relative to the promo but still one of the cheaper renewals in shared hosting. Compare on that number, not the headline.',
    items: [
      {
        name: 'Single / entry',
        price: 'from $2.99/mo on a long term',
        renews: 'renews near $8/mo',
        detail:
          'One website, tight resource limits. Fine for a landing page, cramped for anything real.',
      },
      {
        name: 'Premium',
        price: 'from $3.99/mo on a long term',
        renews: 'renews near $11/mo',
        detail:
          'Multiple websites, free domain for year one, weekly backups. The tier we would actually buy.',
        pick: true,
      },
      {
        name: 'Business / managed WordPress',
        price: 'from $6.99/mo on a long term',
        renews: 'renews near $15/mo',
        detail:
          'Daily backups, more resources, better caching. Worth it once a site has real traffic.',
      },
    ],
  },
  pros: [
    {
      title: 'The best price-to-performance in shared hosting',
      body: 'LiteSpeed with caching enabled by default means the mid tier handles a small WordPress site comfortably. You are not paying a discount price for discount speed.',
    },
    {
      title: 'Built for people setting up their first site',
      body: 'hPanel walks you through domains, SSL and WordPress without jargon. For anyone who has never used a control panel, this alone is worth choosing it over a cPanel host.',
    },
    {
      title: 'Free migration that is actually done for you',
      body: 'Their team moves an existing site across rather than handing you a plugin and wishing you luck. It is the single biggest reason people successfully leave a more expensive host.',
    },
    {
      title: 'A renewal price that is not punitive',
      body: 'The increase at renewal is real, but it lands in a range that stays competitive. Several rivals here triple their price and hope you do not notice.',
    },
  ],
  cons: [
    {
      title: 'The cheapest tier is a trap',
      body: 'The entry plan exists to advertise a low number. Its resource limits will constrain any site with actual visitors, so budget for the tier above from the outset.',
    },
    {
      title: 'Long terms required for the headline price',
      body: 'To get $2.99 you commit to multiple years paid up front. Monthly billing costs substantially more, which makes trying it out for a month unattractive.',
    },
    {
      title: 'hPanel is not cPanel',
      body: 'If you administer sites for other people, or you have years of cPanel habits, the bespoke panel is friction. It is a better tool for beginners and a worse one for professionals.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.5, note: 'very high review volume' },
    { source: 'G2', value: 4.3, note: 'business-user reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite across price, performance and renewal honesty',
    },
  ],
  bestFor: [
    'A first website, a blog or a small business brochure site',
    'Anyone migrating off an expensive host and wanting help doing it',
    'Budget-conscious owners who still care about page speed',
  ],
  notFor: [
    'Sites needing dedicated resources or serious scaling — Cloudways instead',
    'Agencies managing many client sites through cPanel workflows',
    'Anyone who refuses to pay years in advance',
  ],
  faq: [
    {
      q: 'Which plan should I actually buy?',
      a: 'The Premium tier. The entry plan is priced to advertise, not to run a site with visitors, and the jump in resources for one extra dollar a month is the best value in the range.',
    },
    {
      q: 'How bad is the renewal?',
      a: 'It roughly triples. The entry plan goes from $2.99 to around $8 a month and the Premium tier from $3.99 to around $11. That is the industry pattern; the difference is that Hostinger’s renewal is still cheaper than most rivals’ introductory pricing.',
    },
    {
      q: 'Can I move an existing site over?',
      a: 'Yes, and their team performs the migration for you. Keep the old hosting active until the new site is verified and DNS has propagated — never cancel the source before the destination works.',
    },
    {
      q: 'Is it fast enough for WordPress?',
      a: 'On the Premium tier and above, yes, for a site up to a few thousand visits a day. Beyond that you want managed cloud hosting with dedicated resources rather than a bigger shared plan.',
    },
  ],
  updated: '2026-08-09',
  deepLink: 'hostinger.com',
}
