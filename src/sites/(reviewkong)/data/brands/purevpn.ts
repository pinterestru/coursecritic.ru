/**
 * Brand page data for PureVPN (route: /brands/purevpn).
 *
 * SOURCES (checked 18 August 2026):
 *  - Pricing, server counts, device limit, 31-day guarantee: https://www.purevpn.com/pricing
 *  - Audit history and the always-on arrangement: https://www.purevpn.com/no-log-vpn
 *  - First no-logs audit (Altius IT, 2019): https://www.purevpn.com/blog/no-log-certified/
 *  - First KPMG audit and the always-on arrangement (2021):
 *    https://www.prnewswire.com/news-releases/purevpn-the-first-no-log-vpn-with-an-always-on-audit-passes-second-kpmg-evaluation-301349340.html
 *  - Jurisdiction (British Virgin Islands): https://www.purevpn.com/privacy-policy
 *  - 2017 US criminal case (US v. Ryan Lin, cyberstalking) in which PureVPN-supplied
 *    connection records assisted the FBI. Both sides are cited deliberately, because
 *    this page alleges a company misled its customers and must be defensible:
 *      report:  https://torrentfreak.com/purevpn-logs-helped-fbi-net-alleged-cyberstalker-171009/
 *      PureVPN's own response:
 *               https://torrentfreak.com/purevpn-explains-how-it-helped-the-fbi-catch-a-cyberstalker-171016/
 *    The affidavit is a public DOJ court filing in the District of Massachusetts.
 *
 * ⚠️ VPN promotional pricing moves monthly and the audit list grows. Re-verify
 * every figure against PureVPN's own pages before launch and before each
 * campaign. See ../../README.md.
 *
 * Editorial note: the 2017 logging episode is the single most important fact for
 * a reader choosing this provider, so it appears in the intro, the cons and the
 * FAQ rather than being buried. It is stated with its date and its outcome —
 * neither softened nor inflated into a claim about the company's behaviour today.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const purevpn: BrandPage = {
  slug: 'purevpn',
  providerId: 'purevpn',
  schemaType: 'SoftwareApplication',
  metaTitle: 'PureVPN review 2026 — the price and the 2017 logging case',
  metaDescription:
    'An independent PureVPN review: what it costs against the premium VPNs, what the repeat no-logs audits actually cover, and the 2017 case in which it handed connection records to the FBI.',
  intro:
    'PureVPN is the budget entry in this category, and it is cheap enough that the comparison is worth making seriously. It is also the provider with the most awkward history: in 2017 it supplied connection records that helped the FBI identify a user, while its marketing promised no logs. What it has done since — repeat external audits and an unusual standing arrangement with KPMG — is the reason it is still in the conversation rather than a footnote.',
  about: [
    'PureVPN launched in 2007 and is registered in the British Virgin Islands, outside the intelligence-sharing arrangements that make jurisdiction a live question for a privacy product. The network runs to roughly 6,000 servers across more than 80 countries, which is a large footprint for the price, and the apps ship WireGuard alongside obfuscation modes for networks that block VPN traffic outright.',
    'The 2017 episode is what most readers arrive with. In a US criminal case that year, records PureVPN supplied to the FBI helped establish which account had been behind a set of connections — at a time when the company advertised a no-logs policy. PureVPN’s position was that it did not log browsing activity but had retained connection metadata. Either way the practical lesson for a buyer is the same: a no-logs claim is worth what an outside party can verify, and no more.',
    'That is the context for what the company built afterwards. Its no-logs claim was first examined by Altius IT in 2019 and has been re-examined by KPMG repeatedly since 2021, under an "always-on" arrangement in which KPMG may inspect the infrastructure unannounced rather than on a scheduled date. No other consumer VPN in this ranking has agreed to unannounced inspection. Whether that offsets the history is a judgement each reader makes; what it is not is a marketing claim with nothing behind it.',
  ],
  facts: [
    { label: 'Launched', value: '2007' },
    { label: 'Jurisdiction', value: 'British Virgin Islands' },
    { label: 'Devices', value: '10 at once' },
    { label: 'Refund window', value: '31 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'As everywhere in this category, the headline figure is a first-term rate that requires paying two years up front, and renewal is charged at a materially higher standard rate. Budget from the renewal price, not the promotion — and note the refund window is 31 days rather than the usual 30.',
    items: [
      {
        name: 'Monthly',
        price: 'around $12.95/mo',
        detail:
          'No commitment. As with every provider here, paying monthly costs several times the long-term rate.',
      },
      {
        name: 'Standard, 2-year term',
        price: 'from $2.15/mo paid up front',
        renews: 'renews at the standard annual rate',
        detail:
          'The VPN itself, 10 devices, every server location. The tier the advertised price refers to.',
        pick: true,
      },
      {
        name: 'Add-ons',
        price: 'priced per feature',
        detail:
          'Dedicated IP, port forwarding and a password manager are sold on top rather than included. Add them up before comparing against a rival’s all-in price.',
      },
    ],
  },
  pros: [
    {
      title: 'The cheapest credible long-term price here',
      body: 'On a two-year term PureVPN undercuts almost every established competitor with a comparable server list. If price is the binding constraint, this is the honest answer to it.',
    },
    {
      title: 'Audited repeatedly, and unannounced',
      body: 'A first no-logs audit by Altius IT in 2019, repeat KPMG audits from 2021, and a standing arrangement permitting inspection without notice. Repeat verification is worth considerably more than a single certificate, and unannounced verification more again.',
    },
    {
      title: 'A large network for the money',
      body: 'Roughly 6,000 servers across 80+ countries, with WireGuard and obfuscation modes — coverage normally attached to a higher price.',
    },
    {
      title: 'A slightly longer refund window',
      body: '31 days rather than the category-standard 30. A day is not a differentiator, but it does mean a full month of real use before the decision is final.',
    },
  ],
  cons: [
    {
      title: 'The 2017 logging case',
      body: 'Records PureVPN supplied assisted an FBI investigation while the company advertised no logs. The audits since are a genuine response, but a reader who wants a provider with no such episode in its history has several to choose from, and should choose one.',
    },
    {
      title: 'Slower than the leaders on long routes',
      body: 'Fine for streaming and calls on nearby servers. On the intercontinental connections where the premium services separate themselves, PureVPN does not keep up.',
    },
    {
      title: 'Features sold as add-ons',
      body: 'Dedicated IP and port forwarding are chargeable extras. Once added, the gap to a fully-featured rival narrows enough that the price advantage can disappear.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.0,
      note: 'large review volume, consistent over several years',
    },
    { source: 'App Store (iOS)', value: 4.5, note: 'high review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite: price and audit programme weighed against the 2017 history and speed',
    },
  ],
  bestFor: [
    'Buyers for whom price is the deciding factor and who still want an audited provider',
    'Households needing ten simultaneous connections cheaply',
    'Anyone who wants obfuscation and a wide server list without a premium subscription',
  ],
  notFor: [
    'Readers whose threat model makes the 2017 episode disqualifying — Mullvad or Proton VPN instead',
    'Anyone chasing maximum throughput on intercontinental routes',
    'Buyers who want every feature included rather than sold as add-ons',
  ],
  faq: [
    {
      q: 'What actually happened in 2017?',
      a: 'In a US criminal case, records PureVPN provided to the FBI helped identify which account was behind a set of connections, at a time when the company marketed a no-logs policy. PureVPN said it retained connection metadata rather than browsing activity. The episode is why independent verification, rather than a policy page, is the thing to look for in this category.',
    },
    {
      q: 'Do the KPMG audits make it trustworthy now?',
      a: 'They are meaningful: independent examinations since 2019 — Altius IT first, then KPMG repeatedly from 2021 — and an arrangement allowing unannounced inspection that no other provider in this ranking has agreed to. An audit is still a point-in-time check of what an auditor was shown. It raises the floor considerably; it does not turn a claim into a guarantee.',
    },
    {
      q: 'Is it fast enough for streaming?',
      a: 'On a nearby server, yes. The gap to the faster providers shows on long-distance connections — streaming a home service from another continent is where you would notice it.',
    },
    {
      q: 'How does the price compare once the term ends?',
      a: 'The advertised rate is the two-year term paid up front; renewal is charged at a higher standard rate, as with every provider in this ranking except Mullvad. Set a reminder before the term ends and reassess then.',
    },
    {
      q: 'PureVPN or one of the premium options?',
      a: 'If the budget is genuinely tight, PureVPN is the defensible cheap choice and the audit programme is real. If you can afford another two or three dollars a month, NordVPN is faster and Proton VPN has the stronger privacy record — and neither carries the 2017 history.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'purevpn.com/pricing',
}
