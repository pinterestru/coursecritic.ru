/**
 * Brand page data for Mullvad (route: /brands/mullvad).
 *
 * MONETISATION: Mullvad runs no affiliate or referral programme, so this page
 * earns nothing. `tracked: false` in ../vpn/providers.ts is deliberate and the
 * link is a plain nofollow. The page says so in the intro, the pros and the FAQ
 * — that disclosure is the point, not a garnish. See ../../README.md §5.
 *
 * SOURCES (checked 21 August 2026):
 *  - Flat €5/month, no term contracts, 5 devices per account, payment methods
 *    including cash and Monero, 10% crypto discount, 14-day money-back guarantee
 *    with cash payments excluded: https://mullvad.net/en/pricing
 *  - Refund window cut from 30 days to 14 for privacy reasons, in Mullvad's own
 *    words: https://mullvad.net/en/blog/for-privacy-change-of-our-refund-policy-from-30-to-14-days
 *  - Live server list — at time of writing 589 servers across 50 countries and
 *    91 cities, each marked owned or rented: https://mullvad.net/en/servers
 *  - Port forwarding withdrawn: announced 29 May 2023, existing ports removed
 *    1 July 2023, with the abuse rationale stated:
 *    https://mullvad.net/en/blog/removing-the-support-for-forwarded-ports
 *  - April 2023 search warrant executed at the Gothenburg office; police left
 *    with nothing, per Mullvad's own account and contemporaneous reporting:
 *    https://mullvad.net/en/blog/mullvad-vpn-was-subject-to-a-search-warrant-customer-data-not-compromised
 *    and https://www.techradar.com/news/mullvads-no-log-policy-proven-after-police-raid
 *  - Audit history — Cure53 infrastructure and app audits (2018, 2020, 2022,
 *    2024) plus later Assured AB reports; reports and app-level audits are
 *    published rather than summarised: https://mullvad.net/en/blog/tag/audits
 *    and https://github.com/mullvad/mullvadvpn-app/blob/main/audits/README.md
 *  - DAITA (Defence Against AI-guided Traffic Analysis), developed with Karlstad
 *    University: https://mullvad.net/en/blog/daita-defense-against-ai-guided-traffic-analysis
 *  - Aggregate scores: https://www.trustpilot.com/review/mullvad.net and the iOS
 *    App Store listing. Both match ../vpn/providers.ts.
 *
 * ⚠️ Re-verify before launch and before each campaign. The €5 price has held
 * since 2009 and is the least likely figure here to move, but the server and
 * country counts change weekly and ../vpn/providers.ts currently says "45+
 * countries" where mullvad.net lists 50. See ../../README.md.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const mullvad: BrandPage = {
  slug: 'mullvad',
  providerId: 'mullvad',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Mullvad review 2026 — €5 flat, and we earn nothing',
  metaDescription:
    'An independent Mullvad review: a flat €5 a month, an account number instead of an email, and no affiliate programme — so this page earns nothing.',
  intro:
    'Start with the disclosure, because it changes how you should read the rest: Mullvad runs no affiliate or referral programme, so we are paid nothing whether you subscribe or not. It is in this ranking on merit alone. What it offers is a flat €5 a month that has not changed since 2009, an account that is a random number rather than an email address, and a company that has been tested in public. What it does not offer is the biggest network, or a reliable way to watch Netflix.',
  about: [
    'Mullvad is Swedish, has operated since 2009, and has built the whole product around collecting as little as possible. Signing up issues a 16-digit account number — no email address, no password, no profile. You can pay by card or PayPal if you want convenience, or by Monero, Bitcoin or an envelope of cash posted to Gothenburg if you would rather leave no payment trail at all; cryptocurrency payments carry a 10% discount. There is no upsell tier, no bundled password manager and no antivirus, because there is no growth story attached to selling you one.',
    'The pricing is the same principle applied to money. €5 a month, monthly or annually at the same rate, no two-year term, no introductory discount and therefore no renewal shock — the trap that every other provider in this ranking sets. It is commercially inconvenient and Mullvad has held it for over fifteen years. The refund window is 14 days rather than the usual 30, and Mullvad’s stated reason for shortening it is consistent with the rest: a longer window means holding identifiable payment records for longer.',
    'The claims are unusually well tested. Cure53 has audited the infrastructure and apps repeatedly since 2018, with later reports from Assured AB, and the reports are published in full alongside app-level audits in the public repository. In April 2023 Swedish police arrived at the Gothenburg office with a search warrant intending to seize customer data; by Mullvad’s account, backed by contemporaneous reporting, they were shown how the service works and left without taking anything. A no-logs policy that survives a police visit is a different class of evidence from one that survives a press release. On top of that sits DAITA, a defence against traffic-analysis attacks developed with Karlstad University that pads packets to a constant size and injects cover traffic — a research-grade feature no competitor here ships.',
  ],
  facts: [
    { label: 'Launched', value: '2009' },
    { label: 'Jurisdiction', value: 'Sweden' },
    { label: 'Devices', value: '5 at once' },
    { label: 'Refund window', value: '14 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'There is one plan and one price, and this is the only entry in this ranking with no renewal warning to give: €5 a month is what you pay in month one and in year five. No term contract, no introductory rate, no discount tiers beyond 10% off for paying in cryptocurrency. The 14-day money-back guarantee does not apply to cash payments, which Mullvad attributes to anti-money-laundering rules.',
    items: [
      {
        name: 'Mullvad VPN',
        price: '€5/month, flat',
        renews: 'renews at €5/month — the same price, indefinitely',
        detail:
          'The entire product: every server, 5 simultaneous devices, DAITA, quantum-resistant tunnels. Pay monthly or a year at a time; the rate is identical either way.',
        pick: true,
      },
      {
        name: 'Paid in cryptocurrency',
        price: '€4.50/month equivalent',
        detail:
          'Bitcoin, Bitcoin Lightning or Monero, at a 10% discount. The only price reduction Mullvad offers, and it exists because it costs them less to process.',
      },
      {
        name: 'Paid in cash',
        price: '€5/month, posted',
        detail:
          'An envelope with your account number, sent to Gothenburg. No refund on cash payments. Nobody else in this ranking will take your money this way.',
      },
    ],
  },
  pros: [
    {
      title: 'We earn nothing from recommending it',
      body: 'Mullvad operates no affiliate or referral programme, so the link on this page pays us zero. It is here because it belongs in the ranking, and saying so is the only thing that makes the paid recommendations on the rest of this site worth reading.',
    },
    {
      title: 'The least data collected at signup of anything here',
      body: 'A random account number, no email address, no password and no profile. Every rival wants at least an email. If your objection to VPNs is that you are swapping one company that can identify you for another, this is the answer to it.',
    },
    {
      title: 'One price, forever',
      body: '€5 a month since 2009, with no first-term discount and therefore no renewal trap. Across four years, Mullvad costs less than most of the "cheaper" providers here once their promotional term expires.',
    },
    {
      title: 'Claims tested in public, not just audited',
      body: 'Repeat Cure53 and Assured AB audits with the reports published in full, plus an April 2023 police search of the Gothenburg office that ended with officers leaving empty-handed. That is the no-logs claim demonstrated rather than asserted.',
    },
  ],
  cons: [
    {
      title: 'The smallest network in this ranking',
      body: 'Around 589 servers across 50 countries at the time of writing, against several thousand at the larger providers. For most European and North American routes that is irrelevant. If you need an exit in a specific smaller country, check the live server list before you pay.',
    },
    {
      title: 'Streaming is unreliable and not a goal',
      body: 'Mullvad does not chase unblocking and does not pretend to. Expect some services to detect and refuse the connection. If watching a home catalogue from abroad is your main reason for buying a VPN, buy a different one.',
    },
    {
      title: 'Fewer devices, a shorter refund window, and features it has dropped',
      body: 'Five simultaneous connections against Surfshark’s unlimited, 14 days to change your mind rather than 30, and port forwarding withdrawn in July 2023 after it became an abuse vector — which rules Mullvad out for some self-hosting and torrenting setups. Each of these is a defensible decision, and each is still a limitation you live with.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.3,
      note: 'smaller review volume than the mass-market brands, steady over years',
    },
    { source: 'App Store (iOS)', value: 4.5, note: 'moderate review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.4,
      note: 'our composite: privacy model and pricing honesty against network size and streaming',
    },
  ],
  bestFor: [
    'Anyone who wants the minimum possible data held about them by a VPN company',
    'Buyers who would rather pay one honest price than track a renewal date',
    'People who want to pay in cash or Monero and leave no billing trail',
  ],
  notFor: [
    'Streaming — unblocking is unreliable and explicitly not something Mullvad works on',
    'Households with more than five devices to cover on one account',
    'Anyone who needs port forwarding: it was withdrawn in July 2023 and has not returned',
  ],
  faq: [
    {
      q: 'Do you make money if I sign up?',
      a: 'No. Mullvad runs no affiliate or referral programme, so the link on this page earns us nothing at all. Most of the other providers on this site do pay us, which is disclosed on every page — and the reason Mullvad is here anyway is that a ranking with no unpaid entries in it is not a ranking.',
    },
    {
      q: 'How does signing up without an email work?',
      a: 'You click once and get a 16-digit account number. That number is your entire identity with the company — write it down, because there is no password reset and no support agent who can look you up by email. Add credit to it whenever you like; if it runs out, the account simply stops working.',
    },
    {
      q: 'Is €5 a month actually good value?',
      a: 'Over a year or two, no — Surfshark and PureVPN advertise less on their introductory terms. Over four or five years, yes, because they renew at two to three times their headline rate and Mullvad does not renew at anything. Compare on the renewal price and the arithmetic changes.',
    },
    {
      q: 'What happened with the police in 2023?',
      a: 'In April 2023 Swedish police attended Mullvad’s Gothenburg office with a search warrant, intending to seize computers holding customer data. By Mullvad’s account, supported by reporting at the time, the company demonstrated that no such data exists, the officers consulted the prosecutor, and they left without taking anything. It is the most direct public evidence any provider in this ranking has of its own no-logs claim.',
    },
    {
      q: 'Can I use it for torrenting?',
      a: 'Traffic is not restricted, but port forwarding was withdrawn on 1 July 2023 after it was repeatedly abused, and some clients rely on it for connectivity. If your setup needs an incoming port, Mullvad will not do it. Nothing else about the service stands in your way.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'mullvad.net/en/pricing',
}
