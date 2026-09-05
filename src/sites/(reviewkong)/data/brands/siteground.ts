/**
 * Brand page data for SiteGround (route: /brands/siteground).
 *
 * SOURCES — every figure below is taken from these pages, not from vendor
 * press material:
 *   - https://www.siteground.com/web-hosting.htm — plan tiers, introductory and
 *     regular pricing, storage limits, 30-day money-back guarantee
 *   - https://www.siteground.com/google-cloud-hosting.htm — the Google Cloud
 *     platform claim and the regions it runs in
 *   - https://www.siteground.com/kb/fair-use-siteground-hosting — the CPU-second
 *     and inode ceilings, the real capacity limit behind "unlimited traffic"
 *   - https://www.siteground.com/kb/backup-service — daily retention, free
 *     restores, and the paid Premium Backup tier that unlocks downloads
 *   - https://www.siteground.com/kb/could-you-transfer-my-website-for-me —
 *     "The migration price is 30USD/30EUR/25GBP/45AUD per site"
 *   - https://www.wpbeginner.com/hosting/siteground/ and
 *     https://www.capterra.com/p/228543/SiteGround/reviews/
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * siteground.com before launch and before each campaign.
 *
 * ⚠️ PRICING PROVENANCE — read before editing. siteground.com hard-redirects
 * (302) to the local storefront, so the USD figures below could NOT be read off
 * SiteGround's own US page. They are a consensus across five independent
 * sources (WPBeginner Aug 2026, WebHostingBuddy Jul 2026, checkthat.ai,
 * Tooltester, WebsitePlanet). What IS primary-verified is the EUR ladder on
 * siteground.es: €2.99 → €15.99, €5.49 → €27.99, €8.49 → €39.99, all on a
 * 12-month prepaid term — the same ~5x shape. Confirm the USD numbers from a US
 * IP before spending on traffic. Note also that the registry priceNote still
 * says "$3.99 introductory"; the advertised rate is currently $2.99.
 *
 * ⚠️ Storage was raised during 2026 to 10/50/100 GB. Reviews still quoting
 * 20/40 GB are stale — do not "correct" the figures back. The free-first-year
 * domain is advertised on the ES storefront but denied by two 2026 reviews, so
 * it is deliberately NOT claimed on this page. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const siteground: BrandPage = {
  slug: 'siteground',
  providerId: 'siteground',
  schemaType: 'SoftwareApplication',
  metaTitle: 'SiteGround review 2026 — great support, steep renewal',
  metaDescription:
    'An independent SiteGround review: why its support leads shared hosting, and the renewal price — $17.99 on the entry tier — you must plan for.',
  intro:
    'SiteGround is what you buy when you expect to need help. Its support is the genuine differentiator in a category where "support" usually means a link to a knowledge-base article, and the platform underneath is tuned well enough that WordPress behaves without a stack of plugins propping it up. It also has one of the steepest renewal jumps in the industry, and that number — not the one on the pricing page — is the one to decide on.',
  about: [
    'SiteGround has been hosting since 2004 and moved its shared platform onto Google Cloud, which is a more meaningful decision than most infrastructure marketing. It means the underlying hardware is somebody else’s problem, capacity is elastic rather than a rack that fills up, and the regional footprint is Google’s rather than a handful of leased cages. As with any shared host, pick the region closest to your visitors at signup: distance to the reader dominates page-load time more than any plan upgrade will recover.',
    'The control panel is Site Tools, SiteGround’s own, built after the company dropped cPanel. It is cleaner than cPanel and organised around sites rather than around a server, which suits the way most people actually think about their hosting. The cost is portability of habit: if you administer sites for clients and your muscle memory is cPanel, none of it transfers, and neither do the tutorials your clients have been reading.',
    'On the platform itself, the useful pieces are caching that is configured for you, a PHP setup SiteGround tunes rather than shipping at defaults, and daily backups on every tier including the cheapest — with restores included at no charge, which is not universal. Staging environments and Git integration appear on the middle tier and above, which is where the plan range stops being a shared-hosting ladder and starts being something an agency can work in.',
    'One thing worth understanding before you buy: "unlimited traffic" is real for bandwidth but is not the ceiling that will actually stop you. SiteGround publishes a fair-use policy with hard CPU-second allowances — 10,000 a day on StartUp, 20,000 on GrowBig, 40,000 on GoGeek — plus inode caps of 200,000 to 600,000 files. Exceed them repeatedly and SiteGround documents that it "may need to limit the access to your website until you take action". That, not visitor count, is the number your site is really rationed by.',
  ],
  facts: [
    { label: 'Operating since', value: '2004' },
    { label: 'Entry price', value: 'from $2.99/mo' },
    { label: 'Entry renewal', value: '$17.99/mo' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'This is the steepest renewal curve in the comparison and the reason to read carefully. StartUp is advertised near $2.99/mo on a 12-month prepaid term and renews at $17.99 — roughly six times the headline. GrowBig goes from about $4.99 to $29.99, GoGeek from about $7.99 to $44.99. The introductory rate is a rolling promotion and moves; the renewal figures are the stable ones, so compare on those. Note also that siteground.com geo-redirects to a local storefront, so the currency and the exact numbers you are shown depend on where you browse from — the euro ladder runs €2.99 to €15.99 on the entry tier, the same shape.',
    items: [
      {
        name: 'StartUp',
        price: 'from $2.99/mo on a 12-month term',
        renews: 'renews at $17.99/mo',
        detail:
          'One website, 10 GB storage, daily backups, 10,000 CPU seconds a day. No staging and no Git — the limits you notice first.',
      },
      {
        name: 'GrowBig',
        price: 'from $4.99/mo on a 12-month term',
        renews: 'renews at $29.99/mo',
        detail:
          'Unlimited websites, 50 GB storage, staging, faster PHP and double the CPU allowance. The tier that justifies choosing SiteGround at all.',
        pick: true,
      },
      {
        name: 'GoGeek',
        price: 'from $7.99/mo on a 12-month term',
        renews: 'renews at $44.99/mo',
        detail:
          '100 GB storage, Git integration, four times the entry CPU allowance and priority support queueing. Aimed at developers and agencies.',
      },
    ],
  },
  pros: [
    {
      title: 'Support that resolves the problem',
      body: 'This is what you are actually buying. Requests reach someone who reads the ticket and fixes the thing, rather than returning a documentation link and closing it. In a category where support is usually the first cost cut, SiteGround’s is consistently singled out by independent reviewers as the best in shared hosting.',
    },
    {
      title: 'A platform that is tuned, not just rented',
      body: 'Running on Google Cloud with caching already configured and a PHP setup SiteGround maintains means WordPress performs without three plugins installed to fix it. You are paying for engineering decisions made before you arrive.',
    },
    {
      title: 'Daily backups on every tier, with free restores',
      body: 'Including the cheapest plan, which is not the norm — Bluehost gives every shared tier weekly backups only. SiteGround retains up to 30 daily copies and documents that restore operations are included at no charge on all plans, so recovering from your own mistake does not become a support negotiation.',
    },
    {
      title: 'Staging and Git once you move up a tier',
      body: 'GrowBig adds staging and GoGeek adds Git. Being able to break a copy of the site rather than the live one is the feature that separates hosting you can work on from hosting you have to be careful around.',
    },
  ],
  cons: [
    {
      title: 'The renewal is close to punitive',
      body: 'StartUp moves from roughly $2.99 to $17.99 a month, about a sixfold increase, and GrowBig from roughly $4.99 to $29.99. That is the steepest curve among the hosts here. It is disclosed at checkout, but it is not what the pricing page is designed to make you think about. Decide on the renewal number or do not buy.',
    },
    {
      title: 'CPU seconds are the real limit, not visitors',
      body: '"Unlimited traffic" is bandwidth only. The binding constraint is the published fair-use allowance — 10,000 CPU seconds a day on StartUp — and an inefficient plugin can burn through that at modest traffic. SiteGround states it may limit access to your site on repeated overage. It is disclosed honestly in the knowledge base and invisible on the pricing page.',
    },
    {
      title: 'Getting out is harder than getting in',
      body: 'Three things compound. Site Tools is not cPanel, so there is no standard export path a new host will recognise. Downloading your own backups requires the paid Premium Backup add-on rather than being a standard feature. And a done-for-you migration is chargeable at $30 per site — the free option is a DIY WordPress plugin.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.7, note: 'tens of thousands of reviews' },
    { source: 'Capterra', value: 4.5, note: 'smaller sample; support praised repeatedly' },
    { source: 'G2', value: 4.4, note: 'business-user reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.4,
      note: 'our composite across support, platform quality and renewal honesty',
    },
  ],
  bestFor: [
    'Site owners who know they will need help and want it to be good',
    'WordPress sites that should perform well without plugin surgery',
    'Small agencies who want staging and Git on a shared-hosting budget',
  ],
  notFor: [
    'Anyone optimising purely on cost over three years — Hostinger renews far lower',
    'CPU-hungry sites that will keep colliding with the fair-use allowance — Cloudways gives you dedicated resources instead',
    'Agencies whose workflows and clients are built around cPanel',
  ],
  faq: [
    {
      q: 'Which plan should I actually buy?',
      a: 'GrowBig. StartUp caps you at one website, no staging, 10 GB of storage and the lowest CPU allowance on the platform. GrowBig lifts storage to 50 GB, doubles the CPU allowance and adds staging. If SiteGround is worth its price at all, it is worth it on GrowBig.',
    },
    {
      q: 'How bad is the renewal, really?',
      a: 'StartUp goes from around $2.99 a month to $17.99, and GrowBig from around $4.99 to $29.99. That is roughly a sixfold increase and the steepest in this comparison. Diarise the renewal date a month ahead: your leverage to negotiate or move is highest just before it lands.',
    },
    {
      q: 'Is the support genuinely better, or is that marketing?',
      a: 'It is the most consistently praised support in shared hosting across independent reviews, and it is the reason most SiteGround customers give for staying at the renewal price. If you will never contact support, you are paying a premium for a service you will not use — and Hostinger does the same hosting job for much less.',
    },
    {
      q: 'Can I move my existing site across for free?',
      a: 'SiteGround publishes a free WordPress migration plugin that handles most straightforward sites. A done-for-you professional migration is a paid add-on, around $30 per site. Either way, keep the old hosting running until the new site is verified and DNS has propagated.',
    },
    {
      q: 'Does it use cPanel?',
      a: 'No. SiteGround dropped cPanel and built Site Tools, its own panel. It is arguably the better interface, but if you or your clients depend on cPanel conventions, that is a real migration cost rather than a cosmetic difference.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'siteground.com/web-hosting.htm',
}
