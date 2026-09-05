/**
 * Brand page data for DreamHost (route: /brands/dreamhost).
 *
 * SOURCES — every figure below is taken from these pages, not from vendor
 * press material:
 *   - https://www.dreamhost.com/hosting/ and https://www.dreamhost.com/pricing/
 *     — the Launch / Growth / Scale tiers, introductory and renewal pricing
 *   - https://www.dreamhost.com/legal/terms-of-service/ (last updated 22 June
 *     2026) — the money-back guarantee wording quoted below
 *   - https://www.dreamhost.com/legal/unlimited-policy/ — what "unmetered"
 *     excludes, and the 3 GB per-database cap
 *   - https://help.dreamhost.com/hc/en-us/articles/215721217 — "DreamHost does
 *     not have a call-in telephone number"; paid callback pricing
 *   - https://www.dreamhost.com/pro-services/management/website-transfer/ — the
 *     $99 professional migration
 *   - https://www.dreamhost.com/company/ — founded 1997, privately held
 *   - https://www.tooltester.com/en/hosting/dreamhost-reviews/ — uptime and
 *     page-load benchmarks
 *
 * ⚠️ THE 97-DAY GUARANTEE NO LONGER EXISTS. It is 30 days. DreamHost's own
 * Terms of Service (updated 22 June 2026) read: "If the customer wishes to
 * cancel DreamHost Website Hosting Services … within thirty (30) days of
 * initial signup, they shall be able to do so for any reason", and "The
 * '30-Day Money-Back Guarantee' offer is only applicable to credit card and
 * PayPal payments". PayPal now qualifies, so the old "card only" qualifier is
 * also wrong. Self-Managed VPS, Dedicated, Email Service, Remixer and
 * DreamCompute are excluded from the guarantee entirely rather than given a
 * shorter window. Any 2026-dated article still saying 97 days is recycling
 * pre-October-2025 copy — several also still list the retired "Shared Starter"
 * and "Shared Unlimited" plans, which were replaced on 2 October 2025.
 *
 * ⚠️ PRICING PROVENANCE — dreamhost.com geolocates and served EUR. The EUR
 * ladder IS primary-verified: Launch €2.89 → €10.99, Growth €3.99 → €12.99,
 * Scale €9.99 → €25.99. The USD figures below are third-party (Website Builder
 * Expert, March 2026) and MUST be confirmed from a US IP before any campaign.
 *
 * ⚠️ Do NOT reinstate the "employee-owned" claim — dreamhost.com/company/ says
 * privately held and independent, and does not say employee-owned. Do NOT
 * describe the estate as US-only either: DreamHost has opened an Amsterdam
 * facility, its first outside the United States. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const dreamhost: BrandPage = {
  slug: 'dreamhost',
  providerId: 'dreamhost',
  schemaType: 'SoftwareApplication',
  metaTitle: 'DreamHost review 2026 — month-to-month, 30-day refund',
  metaDescription:
    'An independent DreamHost review: real month-to-month billing, one of the lowest renewals in shared hosting, and the refund window now cut to 30 days.',
  intro:
    'DreamHost has long been the least manipulative pricing page in shared hosting, and most of that reputation survives: you can pay by the month without being punished for it, the price you land on after the discount expires is among the lowest of any host here, and the checkout does not try to sell you five things you did not ask for. One pillar of the reputation has gone, though. The famous 97-day money-back guarantee is no longer offered — it is 30 days now, the same as everybody else.',
  about: [
    'DreamHost has been operating since 1997 out of Brea, California, and is privately held and independent rather than part of one of the hosting conglomerates that have absorbed most of this market. That independence shows up in the product decisions: no aggressive checkout upsells, no ownership by the same group as three of its competitors, and pricing that is legible on the first read. In a category that mostly optimises for the first transaction, this is the company that behaves as though it expects you to stay.',
    'The plan range was rebuilt on 2 October 2025. "Shared Starter" and "Shared Unlimited" are retired; the shared line is now Launch, Growth and Scale. The practical change is that storage is metered rather than notionally unlimited — Launch ships 25 GB of NVMe SSD — while bandwidth remains unmetered subject to a published fair-use policy. That policy also caps any single MySQL database at 3 GB, which is the limit a growing site is most likely to meet first.',
    'Infrastructure is two US data centres, in Ashburn, Virginia and Hillsboro, Oregon, plus a recently opened Amsterdam facility — DreamHost’s first outside the United States. If your audience is European that third location changes the calculation, because distance to the reader dominates page-load time. The control panel is DreamHost’s own; there is no cPanel, and the company keeps a knowledge-base article titled "Where can I find cPanel?" precisely because people keep looking for it.',
  ],
  facts: [
    { label: 'Operating since', value: '1997' },
    { label: 'Entry price', value: 'from $1.99/mo' },
    { label: 'Entry renewal', value: 'around $7.99/mo' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: "The renewal jump here is roughly 4x, which is unremarkable — but it lands among the lowest renewal prices in this comparison, under half SiteGround's $17.99. Judge it on the destination, not the multiple. The genuinely distinctive option is the third column: every plan can be bought month to month, with no term prepaid at all. That costs about 50% more than the annual renewal rate, which is a fair premium rather than the punitive one most hosts charge to discourage it. Note that dreamhost.com geolocates; the euro ladder runs €2.89 to €10.99 on Launch.",
    items: [
      {
        name: 'Launch',
        price: 'from $1.99/mo on an annual term',
        renews: 'renews around $7.99/mo — or $11.99/mo billed monthly',
        detail:
          '25 GB NVMe storage, unmetered bandwidth, daily backups, free domain for a year. Mailboxes are free for three months, then chargeable.',
      },
      {
        name: 'Growth',
        price: 'from $3.49/mo on an annual term',
        renews: 'renews around $8.99/mo — or $13.99/mo billed monthly',
        detail:
          'More storage and unlimited websites. The renewal gap over Launch is about a dollar, which makes this the obvious tier.',
        pick: true,
      },
      {
        name: 'Scale',
        price: 'from $7.99/mo on an annual term',
        renews: 'renews around $19.99/mo — or $27.99/mo billed monthly',
        detail:
          'The top shared tier. At this price compare it against DreamPress, DreamHost’s managed WordPress product, rather than against other shared plans.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuine month-to-month billing',
      body: 'Every plan can be bought by the month. The premium over the annual renewal rate is around 50%, which is a real cost but a proportionate one — most competitors price monthly billing to make it unattractive. If you will not prepay years in advance, this is the host that does not require it.',
    },
    {
      title: 'A renewal price as low as any here',
      body: "Launch settles around $7.99 a month and Growth around $8.99. The multiple off the promotional rate is roughly four times, which is ordinary for this market — but the number you actually end up paying sits level with Hostinger at the bottom of this comparison, and less than half SiteGround's $17.99 entry renewal. Rank on that figure, because it is the one you pay every year after the first.",
    },
    {
      title: 'A checkout that does not fight you',
      body: 'No pre-ticked security add-ons, no backup service bolted on at the last screen, no five-page upsell funnel. You choose a plan and buy it. This sounds like a small thing until you have been through a Bluehost checkout.',
    },
    {
      title: 'Independent, and old enough to have proved it',
      body: 'Operating since 1997 and still privately held, rather than absorbed into a group running dozens of brands off shared infrastructure. Where you land matters in this market, because conglomerate ownership is what usually precedes support quality falling away.',
    },
  ],
  cons: [
    {
      title: 'The 97-day guarantee is gone — it is 30 days now',
      body: 'This was the strongest single reason to choose DreamHost and it no longer exists. The Terms of Service updated in June 2026 specify thirty days, on credit card and PayPal payments, and exclude Self-Managed VPS, Dedicated, Email Service, Remixer and DreamCompute outright. Thirty days is the industry norm, so what was a genuine advantage is now merely par — and a great deal of published advice about DreamHost has not caught up.',
    },
    {
      title: 'Performance is the weakest part of the product',
      body: 'Independent benchmarking by Tooltester recorded 99.83% uptime — second worst of fifteen hosts tested — and an average page load of 1.75 seconds, ninth of fifteen. DreamHost simultaneously advertises a 100% uptime guarantee on every plan. Buy it for the pricing and the treatment, not for speed.',
    },
    {
      title: 'No phone support, and callbacks are chargeable',
      body: 'DreamHost states plainly that it has no call-in number. On shared plans the only way to speak to anyone is a paid callback: $9.95 each, or $14.95 a month for three, during business hours. Free callbacks exist only on Dedicated and the upper DreamPress tiers. Email on the entry plan is also free for three months and chargeable after that.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.0, note: 'roughly 8,000 reviews' },
    { source: 'G2', value: 4.1, note: 'business-user reviews, small sample' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite across pricing honesty, performance and support access',
    },
  ],
  bestFor: [
    'Anyone who refuses to prepay a multi-year term to get a sane price',
    'Site owners who value a straightforward checkout and a mild renewal',
    'European audiences now that Amsterdam is an option, as well as US ones',
  ],
  notFor: [
    'Buyers choosing DreamHost specifically for the 97-day guarantee — it no longer exists',
    'Sites where page speed and uptime are the deciding factors',
    'Anyone who expects to phone their host when something breaks',
  ],
  faq: [
    {
      q: 'Does DreamHost still have the 97-day money-back guarantee?',
      a: "No. It is 30 days. DreamHost's Terms of Service, last updated in June 2026, specify a thirty-day window on credit card and PayPal payments for website hosting services, and exclude Self-Managed VPS, Dedicated, Email Service, Remixer and DreamCompute. Articles published in 2026 still citing 97 days are repeating outdated copy.",
    },
    {
      q: 'Which plan should I actually buy?',
      a: 'Growth. The renewal price is about a dollar a month more than Launch and it lifts the storage ceiling and the website limit. If you genuinely only ever want one small site and want to test the water, Launch billed monthly is a reasonable way in.',
    },
    {
      q: 'Is paying monthly worth the premium?',
      a: 'Often, yes. Monthly billing costs roughly 50% more than the annual renewal rate, but it costs you nothing to leave, and the alternative is prepaying a year or more at a discount that expires. If you are not certain the site will still exist in a year, the flexibility is worth more than the saving.',
    },
    {
      q: 'Is email included?',
      a: "Not permanently on the entry plan. Launch includes 20 mailboxes free for three months, after which email becomes a paid add-on. Budget for it, or point your domain's mail records at a separate provider — which is generally the better idea anyway.",
    },
    {
      q: 'Can I move an existing WordPress site across?',
      a: 'There is a free automated WordPress migration plugin that handles most straightforward sites. A done-for-you transfer is a professional service at $99 per site, refunded if DreamHost cannot complete it, and included free with DreamPress. Keep the old hosting running until the new site is verified and DNS has propagated.',
    },
  ],
  updated: '2026-08-21',
  // Stays on the bare `dreamhost.com` apex: that is the configured, working
  // affiliate offer. Do not deepen it to /pricing/ or /hosting/shared/ without
  // confirming the tracker still matches — an unmatched destination falls
  // through the /click redirect untracked and the click earns nothing.
  deepLink: 'dreamhost.com',
}
