/**
 * Brand page data for Nomad (route: /brands/nomad).
 *
 * ⚠️ DOMAIN MOVE — VERIFIED 21 August 2026. `https://getnomad.app/` and
 * `https://www.getnomad.app/` both return `301 Moved Permanently` with
 * `Location: https://www.nomadesim.com/`. The old domain no longer serves the
 * store; it is a permanent redirect to the new one. The registry entry in
 * ../travel/providers.ts still carries `domain: 'getnomad.app'` and
 * `siteLabel: 'getnomad.app'` — that file is owned elsewhere and has NOT been
 * touched from here. It needs updating to nomadesim.com, and the affiliate
 * offer in the tracker needs re-pointing before any traffic is bought, because
 * a redirect chain through a retired domain is exactly where affiliate
 * attribution gets lost. Wikipedia still lists getnomad.app as the official
 * site, so search results and third-party listings will lag for some time.
 *
 * SOURCES — every figure below is taken from Nomad's own published pages:
 *   - https://www.nomadesim.com/about/us — LotusFlare, Inc., headquartered in
 *     Santa Clara, launched 2020, 200+ destinations, 3M+ registered users
 *   - https://www.nomadesim.com/europe-eSIM — the 35-country Europe ladder
 *     (€4.76 / 1 GB / 7 days; €10.38 / 3 GB; €15.13 / 5 GB; €19.89 / 10 GB;
 *     €23.34 / 20 GB on sale from €31.99; €30.26 / 50 GB on sale from €41.50),
 *     the unlimited options (€16.43 / 5 days, €29.40 / 10 days), Nomad Pass at
 *     €2.59 per 30 days, the 60-day activation window and the auto-activating
 *     add-on plans
 *   - https://www.nomadesim.com/global-eSIM — the Global plan: 123 countries,
 *     €10.38 / 1 GB / 7 days up to €89.05 / 20 GB / 30 days
 *   - https://en.wikipedia.org/wiki/Nomad_(eSIM) — LotusFlare ownership and the
 *     2020 launch
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * nomadesim.com before launch and before each campaign. Two further warnings:
 *   1. Several larger allowances were on promotion when checked (20 GB Europe
 *      at €23.34 against a €31.99 list price). Sale prices are quoted as sale
 *      prices on this page — keep it that way or the comparison stops being
 *      honest when the promotion ends.
 *   2. The registry says "170+ destinations"; Nomad now publishes "200+".
 *      Trustpilot could not be read directly (bot protection), so the score
 *      below is the registry's working value and the review count is the one
 *      Nomad's own widget rendered (42,632). The score in particular is
 *      unconfirmed. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const nomad: BrandPage = {
  slug: 'nomad',
  providerId: 'nomad',
  schemaType: 'Product',
  metaTitle: 'Nomad eSIM review 2026 — cheap per GB, new domain',
  metaDescription:
    'An independent Nomad eSIM review: the lowest per-gigabyte prices of the major travel eSIMs, a 60-day activation window, and the move to nomadesim.com.',
  intro:
    'Nomad is the eSIM to buy when cost per gigabyte is the number you care about. Ten gigabytes across Europe for thirty days is €19.89 here, against €31.99 at Saily for the same allowance and window. It is also the brand that has just moved house on the web: the old getnomad.app address now redirects permanently to nomadesim.com, which is worth knowing before you type a domain from memory.',
  about: [
    'Nomad is run by LotusFlare, Inc., a telecommunications software company headquartered in Santa Clara, California, and launched as a travel eSIM in 2020. It reports more than three million registered users and sells data in over 200 destinations. Like Airalo it is a reseller rather than a network: the plans ride on local operators, and quality follows whichever partner Nomad has signed in a given country.',
    'The store now lives at nomadesim.com. Requests to getnomad.app return a permanent redirect to the new address, so old links, app-store listings and reference pages that still name the former domain will eventually catch up — but at the time of writing several have not. Nothing about the product appears to have changed; it is a web-presence move rather than a change of company. Check the address bar reads nomadesim.com before you enter card details, because a brand mid-domain-move is precisely the situation typosquatters look for.',
    'What the pricing actually looks like: on the 35-country Europe plan, 1 GB for seven days is €4.76, 3 GB for thirty days is €10.38, 10 GB is €19.89, and the larger tiers were on promotion when checked — 20 GB at €23.34 against a €31.99 list price, and 50 GB at €30.26 against €41.50. Buy at the top of that ladder and the effective rate falls under a euro a gigabyte, which nothing else in this comparison approaches.',
  ],
  facts: [
    { label: 'Launched', value: '2020' },
    { label: 'Operator', value: 'LotusFlare, Inc.' },
    { label: 'Coverage', value: '200+ destinations' },
    { label: 'Activation window', value: '60 days' },
  ],
  plans: {
    title: 'How the plans are priced',
    note: 'Regional plans are where Nomad wins and global plans are where it stops winning: 20 GB across Europe is €23.34, while 20 GB on the Global plan is €89.05. Buy regional unless the trip genuinely spans continents. Larger Europe tiers were on promotion when checked, so those figures will move when the sale ends.',
    items: [
      {
        name: 'Europe regional (35 countries)',
        price: '€4.76 for 1 GB / 7 days, up to €30.26 for 50 GB / 30 days',
        detail:
          'The value pick. At the 20 GB and 50 GB tiers the effective rate drops close to a euro a gigabyte.',
        pick: true,
      },
      {
        name: 'Single-country plans',
        price: 'roughly €0.54–€0.78 per GB in popular destinations',
        detail:
          'Cheapest per gigabyte if your trip stays in one country, which is the usual rule across every eSIM seller.',
      },
      {
        name: 'Global (123 countries)',
        price: '€10.38 for 1 GB / 7 days, up to €89.05 for 20 GB / 30 days',
        detail:
          'Priced far above the regional bundles. Only worth it for genuinely unpredictable multi-continent travel.',
      },
      {
        name: 'Nomad Pass',
        price: '€2.59 per 30 days, auto-renewing',
        detail:
          'A small subscription that includes 1 GB refreshed every 30 days and takes 15% off Europe data plans. Cancel at any time.',
      },
    ],
  },
  pros: [
    {
      title: 'The lowest per-gigabyte prices of the major apps',
      body: 'Ten gigabytes across Europe for thirty days is €19.89, against €31.99 at Saily for the same allowance. Buy the 50 GB tier and the rate falls under a euro a gigabyte. If you measure eSIMs by arithmetic, this is the answer.',
    },
    {
      title: 'Sixty days to activate, not thirty',
      body: 'Plans can be bought and installed up to sixty days before they start, twice the window Saily allows. Useful when you book flights months ahead and want the eSIM sorted while you are thinking about it.',
    },
    {
      title: 'Add-on plans that queue behind the current one',
      body: 'Buy an add-on and it activates automatically when the running plan expires, so a long trip does not need you to notice the changeover. It is a small piece of design that removes the most common eSIM failure — running out mid-journey with no connection to buy a top-up.',
    },
    {
      title: 'A cheap standing subscription for frequent travellers',
      body: 'Nomad Pass costs €2.59 per thirty days, includes a refreshing 1 GB and discounts Europe plans by 15%. For anyone travelling several times a year it pays for itself without a commitment.',
    },
  ],
  cons: [
    {
      title: 'Data only, and that has consequences',
      body: 'There is no phone number and no SMS. Banks sending verification codes, ride-hailing apps insisting on a text and app signups that demand a mobile number will all fail. Keep your home SIM active for SMS with data roaming switched off, and move what two-factor codes you can to an authenticator app before you leave.',
    },
    {
      title: 'The brand has moved domain mid-flight',
      body: 'getnomad.app now returns a permanent redirect to nomadesim.com. The product looks unchanged, but third-party listings — Wikipedia among them — still name the old address, so verifying you are on the real site takes a moment’s care rather than none. Type nomadesim.com directly rather than following an old bookmark.',
    },
    {
      title: 'Global plans are poor value, and the sale prices are temporary',
      body: 'Twenty gigabytes costs €23.34 on the Europe plan and €89.05 on the Global one — nearly four times as much for the same data. And the cheapest Europe tiers were discounted when checked, against list prices around a third higher. Work from the list price when budgeting a trip that is months away.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.2,
      note: '42,600+ reviews on the widget Nomad displays; score not confirmed on Trustpilot directly',
    },
    { source: 'App Store (iOS)', value: 4.5, note: 'large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite: best on price, marked down for polish and the unsettled web presence',
    },
  ],
  bestFor: [
    'Long stays where cost per gigabyte is the number that decides it',
    'Travellers buying 20 GB or more, where the top tiers get genuinely cheap',
    'Anyone booking months ahead — the 60-day activation window suits early planning',
    'Multi-country trips inside one region, using the Europe or other regional bundles',
  ],
  notFor: [
    'Anyone who needs a phone number or SMS on the trip — there is no add-on for it here',
    'Multi-continent travel, where the Global plan’s pricing removes the whole advantage',
    'Travellers who want the deepest catalogue for an unusual destination — Airalo is broader',
    'Short city breaks, where the saving over a rival plan amounts to a couple of euros',
  ],
  faq: [
    {
      q: 'Has Nomad changed its website address?',
      a: 'Yes. As of August 2026, getnomad.app returns a permanent redirect to nomadesim.com, which is where the store now lives. The company behind it, LotusFlare, appears unchanged. Older links and third-party listings still name the previous domain, so type nomadesim.com directly rather than trusting a stale bookmark or search result.',
    },
    {
      q: 'Is Nomad really the cheapest travel eSIM?',
      a: 'On regional and single-country plans it is the cheapest of the major apps. Ten gigabytes across Europe for thirty days is €19.89, well under Saily’s €31.99 for the same thing, and the larger tiers fall close to a euro a gigabyte. Its global plans are a different story and are priced well above the regional ones.',
    },
    {
      q: 'Will I get a phone number?',
      a: 'No. Nomad sells data-only eSIMs, so there is no local number and no SMS. Keep your home SIM active for texts with data roaming turned off, set the Nomad eSIM as the default for mobile data, and shift two-factor codes to an authenticator app where the service allows it.',
    },
    {
      q: 'What is Nomad Pass and is it worth it?',
      a: 'It is a €2.59 subscription renewing every thirty days that includes 1 GB of data and takes 15% off Europe data plans. For someone travelling once a year it is not worth the standing charge; for anyone taking several trips it pays back on a single 20 GB purchase.',
    },
    {
      q: 'How long do I have to activate a plan after buying it?',
      a: 'Sixty days. Buy and install the eSIM whenever it suits, and the plan starts when you connect to a network at the destination — or automatically once the sixty days elapse, whichever comes first. That is twice the window several rivals allow.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'nomadesim.com/shop',
}
