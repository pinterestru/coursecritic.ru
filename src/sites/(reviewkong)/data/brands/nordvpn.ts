/**
 * Brand page data for NordVPN (route: /brands/nordvpn).
 *
 * SOURCES — every figure below is taken from these pages, not from vendor
 * press material:
 *   - https://nordvpn.com/pricing — plan tiers, headline and renewal pricing,
 *     device limit, 30-day money-back guarantee
 *   - https://nordvpn.com/features/nordlynx/ — NordLynx and the double-NAT design
 *   - https://nordvpn.com/audit/ — the repeat no-logs audits
 *   - https://nordsecurity.com/ — ownership of Surfshark, NordPass and NordLayer
 *   - https://www.trustpilot.com/review/nordvpn.com and the iOS App Store listing
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * nordvpn.com before launch and before each campaign — VPN promotional pricing
 * moves monthly, and the server and country counts change constantly. The
 * README flags the `reach` figure in ../vpn/providers.ts as likely understated.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const nordvpn: BrandPage = {
  slug: 'nordvpn',
  providerId: 'nordvpn',
  schemaType: 'SoftwareApplication',
  metaTitle: 'NordVPN review 2026 — what renewal really costs',
  metaDescription:
    'An independent NordVPN review: how NordLynx performs on real connections, what the audits actually cover, and the renewal price the checkout page does not show you.',
  intro:
    'NordVPN is the default recommendation in this category for a reason: it is fast, the apps are mature on every platform, and the no-logs claim has been audited more than once by an outside firm. It is also sold on a two-year discount that renews at a much higher rate, which is the single thing most reviews skip.',
  about: [
    'NordVPN launched in 2012 and is operated from Panama, outside the jurisdictions that participate in the main intelligence-sharing agreements. The company behind it, Nord Security, also owns Surfshark, NordPass and NordLayer — worth knowing if you are comparing NordVPN against Surfshark and think of them as independent rivals. They are not.',
    'Technically, the thing that separates NordVPN from the pack is NordLynx, its implementation of WireGuard with a double-NAT layer added so the protocol can be used without storing user IP addresses on the server. Independent speed testing consistently puts it at or near the front on long-distance hops, which is where most VPNs fall apart. The server fleet runs from RAM, so a reboot wipes everything on the machine.',
    'The rest of the product is a bundle: tracker and malware blocking that works outside the tunnel, a Meshnet feature for linking your own devices, dedicated IPs as a paid extra, and a password manager and encrypted storage on the higher tiers. Plenty of it you will never turn on. That does not make the core VPN worse, but it does explain why the top plans cost what they do.',
  ],
  facts: [
    { label: 'Launched', value: '2012' },
    { label: 'Jurisdiction', value: 'Panama' },
    { label: 'Devices', value: '10 at once' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'Advertised prices assume the two-year term paid up front. Renewal is charged at the standard annual rate, which is roughly three times the headline figure — budget for that from year three, not year two.',
    items: [
      {
        name: 'Basic',
        price: 'from $3.39/mo on the 2-year plan',
        renews: 'renews at the standard annual rate',
        detail: 'The VPN itself, 10 devices, every server location. Everything most people need.',
        pick: true,
      },
      {
        name: 'Plus',
        price: 'from $4.39/mo on the 2-year plan',
        renews: 'renews at the standard annual rate',
        detail: 'Adds the password manager and a data-breach scanner.',
      },
      {
        name: 'Complete',
        price: 'from $5.39/mo on the 2-year plan',
        renews: 'renews at the standard annual rate',
        detail:
          'Adds 1 TB of encrypted cloud storage. Only worth it if you would pay for that anyway.',
      },
    ],
  },
  pros: [
    {
      title: 'The fastest protocol in the category',
      body: 'NordLynx holds its throughput on transatlantic connections where other providers drop by half. If you are connecting from Asia to a European server — the case that actually hurts — this is the difference you feel.',
    },
    {
      title: 'Audited more than once',
      body: 'The no-logs policy has been examined by an outside auditor repeatedly rather than in a single one-off report. Repeat audits matter more than a single certificate: they show the claim survived a second look.',
    },
    {
      title: 'Works with streaming without a fight',
      body: 'Privacy-first providers usually treat streaming access as somebody else’s problem. NordVPN keeps it working, which is a large part of why people stay subscribed.',
    },
    {
      title: 'Genuinely complete platform coverage',
      body: 'Windows, macOS, Linux, iOS, Android, Android TV, browser extensions and router configurations, all maintained. The Linux client is a real client, not a config file and good luck.',
    },
  ],
  cons: [
    {
      title: 'The renewal price is the real price',
      body: 'The figure on the pricing page is a first-term promotion tied to a two-year commitment. What you pay from renewal onward is substantially higher, and it is not shown until checkout. Set a calendar reminder before the term ends.',
    },
    {
      title: 'Feature sprawl',
      body: 'Meshnet, cloud storage, a password manager, dedicated IPs, a breach scanner. Most subscribers use none of it. It inflates the higher tiers and makes the app busier than it needs to be.',
    },
    {
      title: 'Not independent from Surfshark',
      body: 'If you are comparing NordVPN with Surfshark to hedge across companies, you are not: both sit under Nord Security. Proton VPN or Mullvad are the genuinely separate alternatives.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.3,
      note: 'tens of thousands of reviews, consistent over years',
    },
    { source: 'App Store (iOS)', value: 4.6, note: 'very large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.7,
      note: 'our composite across speed, audits and pricing honesty',
    },
  ],
  bestFor: [
    'Anyone who wants one VPN that is fast, works everywhere and needs no tinkering',
    'Households connecting up to ten devices, including a TV',
    'Travellers who need reliable long-distance connections',
  ],
  notFor: [
    'People who want to pay monthly — the value case depends on the long term',
    'Anyone whose priority is minimal data collection at signup: Mullvad is the stricter choice',
    'Buyers comparing "two independent companies" against each other with Surfshark',
  ],
  faq: [
    {
      q: 'Is NordVPN worth it over a cheaper VPN?',
      a: 'On the two-year term it is not meaningfully more expensive than the budget options, and the speed difference on long-distance connections is real. Paid monthly, the calculation changes and cheaper providers become defensible.',
    },
    {
      q: 'What does the audit actually prove?',
      a: 'That an outside firm examined the server configuration and internal processes and found them consistent with the no-logs claim at the time of the audit. It is a point-in-time assurance, not a permanent guarantee — which is exactly why repeat audits matter more than a single one.',
    },
    {
      q: 'Can I use it in countries that restrict VPNs?',
      a: 'Obfuscated servers exist for exactly this and usually work, but no provider can promise availability in a country actively blocking them. Install and sign in before you travel: downloading a VPN app once you are already behind the restriction is much harder.',
    },
    {
      q: 'How do I cancel before the renewal charge?',
      a: 'Turn off auto-renew in your account settings; the subscription then runs to the end of the paid term and stops. The 30-day money-back guarantee covers the first purchase if you change your mind early.',
    },
  ],
  updated: '2026-08-12',
  deepLink: 'nordvpn.com/pricing',
}
