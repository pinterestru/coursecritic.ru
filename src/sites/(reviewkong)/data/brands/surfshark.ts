/**
 * Brand page data for Surfshark (route: /brands/surfshark).
 *
 * SOURCES (checked 21 August 2026):
 *  - Plan tiers, term length, unlimited devices, 30-day guarantee, "4,500+
 *    servers in 100 countries": https://surfshark.com/pricing
 *  - What each tier contains (Starter / One / One+):
 *    https://surfshark.com/blog/surfshark-vpn-plans
 *  - Second Deloitte no-logs assurance report, published 16 June 2025, including
 *    the 15-minute session-IP retention window it describes:
 *    https://www.globenewswire.com/news-release/2025/06/20/3102717/0/en/Surfshark-s-no-logs-policy-verified-by-Deloitte-again.html
 *    and https://surfshark.com/features/no-logs
 *  - Nord Security merger, agreed 2 February 2022, both brands continuing to
 *    operate separately:
 *    https://www.prnewswire.com/news-releases/nord-security-and-surfshark-join-forces-to-strengthen-positions-in-the-cybersecurity-industry-301473286.html
 *    and https://nordvpn.com/blog/nord-security-surfshark-merger-agreement/
 *  - Jurisdiction (Surfshark B.V., Netherlands): https://en.wikipedia.org/wiki/Surfshark_B.V.
 *  - Aggregate scores: https://www.trustpilot.com/review/surfshark.com and the
 *    iOS App Store listing. Both match ../vpn/providers.ts.
 *
 * ⚠️ Re-verify every figure against surfshark.com before launch and before each
 * campaign — promotional VPN pricing moves monthly and is quoted in local
 * currency, so the dollar figure drifts with region and VAT. Two known
 * mismatches against ../vpn/providers.ts, which this file cannot edit:
 * `priceNote` there reads "$2.19/mo" where surfshark.com currently advertises
 * roughly $2.49/mo on the 27-month Starter offer, and `reach` reads "3,200+
 * servers across 100 countries" where Surfshark now publishes 4,500+. The
 * server figure below follows the vendor. See ../../README.md.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const surfshark: BrandPage = {
  slug: 'surfshark',
  providerId: 'surfshark',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Surfshark review 2026 — unlimited devices, one catch',
  metaDescription:
    'An independent Surfshark review: what unlimited devices is worth, the renewal price behind the headline rate, and what the Deloitte audit really says.',
  intro:
    'Surfshark sells one idea harder than any rival: a single subscription covers every device you own, with no seat counting. On a two-year term it is also among the cheapest services in this ranking. Two things temper that. The renewal rate is several times the advertised price, and Surfshark is no longer an independent challenger to NordVPN — the two have shared a parent company since 2022.',
  about: [
    'Surfshark launched in 2018 and is operated by Surfshark B.V., registered in the Netherlands. That is an EU jurisdiction, which cuts both ways: strong data-protection law on one side, a country inside the main intelligence-sharing arrangements on the other. The company argues the point is moot because there is nothing stored to hand over; the Deloitte reports are the evidence offered for that, and they are the thing to read rather than the marketing page.',
    'The network Surfshark publishes runs to more than 4,500 servers across 100 countries, on RAM-only hardware that holds no state through a reboot. The apps ship WireGuard alongside Camouflage and NoBorders modes for networks that block VPN traffic outright, plus CleanWeb ad and tracker filtering, Dynamic MultiHop for routing through two countries, and Alternative ID for generating throwaway details at signup forms. Unlimited simultaneous connections applies across all of it.',
    'On ownership: Nord Security and Surfshark agreed to merge in February 2022, so NordVPN and Surfshark now sit under the same group. Both say they run separate infrastructure and separate product roadmaps, and there is no published evidence to the contrary. It still matters for one specific decision — buying both to spread risk across two companies does not spread it across two companies. Proton VPN and Mullvad are the genuinely unrelated alternatives.',
  ],
  facts: [
    { label: 'Launched', value: '2018' },
    { label: 'Jurisdiction', value: 'Netherlands' },
    { label: 'Devices', value: 'Unlimited' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'The advertised rate is the first term only — currently a 27-month offer paid up front — and it is quoted in local currency, so the dollar figure moves with region and VAT. Renewal is charged annually at the standard rate: published figures run to roughly $79 a year for Starter, $99 for One and $119 for One+. That is the number to budget against, not the monthly headline.',
    items: [
      {
        name: 'Starter, 2-year term',
        price: 'from about $2.49/mo paid up front',
        renews: 'renews at roughly $79/year',
        detail:
          'The VPN itself, unlimited devices, CleanWeb ad blocking, Bypasser split tunnelling and Alternative ID. Everything most people are buying a VPN for.',
        pick: true,
      },
      {
        name: 'One, 2-year term',
        price: 'from about $2.79/mo paid up front',
        renews: 'renews at roughly $99/year',
        detail:
          'Adds antivirus, breach alerts and a private search tool. Worth it only if you would otherwise pay separately for antivirus.',
      },
      {
        name: 'One+, 2-year term',
        price: 'from about $4.49/mo paid up front',
        renews: 'renews at roughly $119/year',
        detail:
          'Adds Incogni data-broker removal. Incogni is sold on its own too — price it separately before assuming the bundle is cheaper.',
      },
    ],
  },
  pros: [
    {
      title: 'Unlimited devices, and it is the real argument',
      body: 'Every other provider here counts seats: five, eight, ten. Surfshark counts none. For a household with two adults, two teenagers, a TV and a tablet, that difference is the whole purchasing decision, and no rival matches it at this price.',
    },
    {
      title: 'A repeat no-logs audit by a Big Four firm',
      body: 'Deloitte examined the no-logs claim in 2023 and again in a second assurance report published in June 2025, covering server configuration and deployment across standard, static and multiport servers. A second look years after the first is worth considerably more than a single certificate.',
    },
    {
      title: 'Cheapest credible long-term price in the ranking',
      body: 'On the two-year term only PureVPN goes lower, and PureVPN caps you at ten devices and carries a 2017 logging history. Surfshark is the cheapest option here without an asterisk of that kind.',
    },
    {
      title: 'Built for awkward networks',
      body: 'Camouflage and NoBorders modes are for connections that block VPN traffic outright, and Dynamic MultiHop lets you pick the entry and exit countries separately. Features usually reserved for the privacy-first tier, included at the budget one.',
    },
  ],
  cons: [
    {
      title: 'The renewal price is roughly three times the headline',
      body: 'A first term at around $2.49 a month becomes an annual charge in the region of $79 for the same Starter plan. Nothing on the pricing page makes that obvious. Set a reminder for the month before the term ends and decide again then.',
    },
    {
      title: 'Not independent from NordVPN',
      body: 'The two brands share a parent company as of February 2022. If your reason for shortlisting Surfshark was that it is the scrappy alternative to Nord, that reason no longer holds — and comparing the two as separate companies is a category error.',
    },
    {
      title: 'The no-logs claim has a documented exception',
      body: 'Deloitte’s 2025 report describes session IP addresses being retained for up to 15 minutes after disconnection, for abuse prevention. That is a defensible engineering choice and it is disclosed rather than hidden, but "no logs" is not literally what is happening, and a reader whose threat model turns on that should know before buying.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.3,
      note: 'large review volume, steady across several years',
    },
    { source: 'App Store (iOS)', value: 4.7, note: 'very large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite: device policy and price against renewal pricing and the Nord Security relationship',
    },
  ],
  bestFor: [
    'Households and shared flats with more devices than anyone wants to count',
    'Buyers who want the lowest long-term price without a logging history attached',
    'Anyone on a network that blocks VPN traffic and needs obfuscation included',
  ],
  notFor: [
    'Readers deliberately picking a company unconnected to NordVPN — that is Proton VPN or Mullvad',
    'Anyone who wants to pay month to month: the value case depends entirely on the long term',
    'Buyers who need a literal zero-retention policy, given the 15-minute session-IP window',
  ],
  faq: [
    {
      q: 'Is unlimited devices genuinely unlimited?',
      a: 'On a paid subscription, yes — the limit is on the free trial, which caps at three. There is no seat count on the paid plans, so one subscription covers a household. Bandwidth is shared across whatever you connect, which is the only practical ceiling.',
    },
    {
      q: 'Does the Nord Security merger change anything for me?',
      a: 'Only if you were treating the two as independent companies. Both say they run separate infrastructure and separate roadmaps, and nothing published contradicts that. But if the plan was to hedge by subscribing to Nord and Surfshark, you would be hedging inside one corporate group.',
    },
    {
      q: 'What did the Deloitte audit actually cover?',
      a: 'Deloitte examined server configuration and deployment processes and the privacy settings behind them, across standard, static and multiport servers, and reported them consistent with the stated no-logs policy. It is a point-in-time assurance rather than a permanent guarantee — which is why the 2025 repeat matters more than the 2023 report on its own.',
    },
    {
      q: 'What will I pay from year three?',
      a: 'The standard annual rate for whichever tier you bought — published figures run to roughly $79, $99 and $119 a year for Starter, One and One+. The promotional monthly figure does not return. Cancel before renewal and re-subscribe as a new customer if you want the discount again.',
    },
    {
      q: 'Surfshark or NordVPN?',
      a: 'Surfshark if the device count or the price is what decides it. NordVPN if you want the faster protocol on long-distance connections and the longer audit history. They are not two independent companies, so pick on the features, not on spreading the risk.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'surfshark.com/pricing',
}
