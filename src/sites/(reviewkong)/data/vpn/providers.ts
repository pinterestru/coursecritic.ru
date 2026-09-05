/**
 * Provider registry for the VPN & privacy vertical.
 *
 * Scores are ReviewKong editorial composites, not vendor marketing numbers: they
 * blend independent aggregator ratings, audit history, renewal pricing honesty
 * and published third-party benchmarks. Nothing here is a flat 5.0, because
 * nothing in this market is.
 *
 * Monetisation is explicit. Partners carry `tracked: true` and their links go
 * through the internal /click redirect; everyone else carries `tracked: false`
 * and gets a plain nofollow link. Mullvad, for example, runs no affiliate
 * programme at all — it is in the ranking because it belongs there.
 *
 * SOURCES — pricing, server and country counts, device limits and refund
 * windows come from each vendor's own pricing page; audit claims come from the
 * published reports or the auditor's announcement:
 *   - https://nordvpn.com/pricing and https://nordvpn.com/audit/
 *   - https://surfshark.com/pricing
 *   - https://protonvpn.com/pricing
 *   - https://www.expressvpn.com/order
 *   - https://mullvad.net/en/pricing
 *   - https://www.purevpn.com/pricing and https://www.purevpn.com/no-log-vpn
 *   - PureVPN's first no-logs audit was by Altius IT (2019); KPMG has audited it
 *     from 2021 under the "always-on" arrangement:
 *     https://www.purevpn.com/blog/no-log-certified/ and
 *     https://www.prnewswire.com/news-releases/purevpn-the-first-no-log-vpn-with-an-always-on-audit-passes-second-kpmg-evaluation-301349340.html
 *
 * ⚠️ Figures (prices, server counts, audit dates) are working values captured
 * while building the site and MUST be re-verified against each vendor's own
 * page before this goes live. The README flags the NordVPN and ExpressVPN
 * `reach` figures as likely understated. See ../../README.md.
 */
import type { Author, Provider } from '../guides/types'

export const vpnProviders: Record<string, Provider> = {
  nordvpn: {
    id: 'nordvpn',
    name: 'NordVPN',
    badge: 'NV',
    color: '#3E5FFF',
    vertical: 'vpn',
    domain: 'nordvpn.com',
    siteLabel: 'nordvpn.com',
    score: 4.7,
    tagline: 'The all-rounder: fastest protocol in the field and the widest feature set',
    founded: 'operating since 2012',
    reach: '7,000+ servers across 110+ countries',
    priceNote: 'from $3.39/mo on the 2-year plan',
    format: 'Apps for every platform, 10 simultaneous devices, 30-day money-back guarantee',
    highlights: [
      'NordLynx (WireGuard-based) benchmarks at or near the top in independent speed tests',
      'No-logs policy audited repeatedly by a Big Four firm',
      'Threat Protection blocks trackers and malicious domains outside the tunnel too',
      'Reliable with streaming catalogues, which most privacy-first VPNs are not',
    ],
    pros: [
      'Speed holds up on long-distance hops, not just to the nearest server',
      'Repeat independent audits rather than a single one-off report',
      'Mature apps on every platform including TV and router setups',
    ],
    cons: [
      'The advertised price is the 2-year term; renewal is far higher',
      'Feature list has grown busy — plenty of it you will never switch on',
    ],
    trust: [
      'Independently audited no-logs policy',
      'Panama jurisdiction, outside the 14 Eyes',
      'RAM-only server infrastructure',
      '30-day money-back guarantee',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.3 },
      { source: 'App Store', value: 4.6 },
    ],
    tracked: true,
    topCta: 'See NordVPN pricing →',
    brandSlug: 'nordvpn',
  },
  surfshark: {
    id: 'surfshark',
    name: 'Surfshark',
    badge: 'SS',
    color: '#1EBFBF',
    vertical: 'vpn',
    domain: 'surfshark.com',
    siteLabel: 'surfshark.com',
    score: 4.5,
    tagline: 'Unlimited devices at the lowest long-term price in the ranking',
    founded: 'operating since 2018',
    reach: '3,200+ servers across 100 countries',
    priceNote: 'from $2.19/mo on the 2-year plan',
    format: 'Unlimited simultaneous devices, 30-day money-back guarantee',
    highlights: [
      'One subscription covers every device in a household — no seat counting',
      'Cheapest per-month price here if you commit to the long term',
      'CleanWeb ad and tracker blocking included at no extra cost',
      'Camouflage and NoBorders modes for restrictive networks',
    ],
    pros: [
      'Unlimited devices genuinely changes the maths for families and shared flats',
      'Speeds are close to the leaders on nearby servers',
      'Frequent feature additions without a price rise mid-term',
    ],
    cons: [
      'Renewal pricing jumps sharply once the introductory term ends',
      'Now part of the same group as NordVPN, so "independent alternative" is a stretch',
    ],
    trust: [
      'Audited no-logs policy',
      'Netherlands-registered, RAM-only servers',
      '30-day money-back guarantee',
      'Two-year price locked at signup',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.3 },
      { source: 'App Store', value: 4.7 },
    ],
    tracked: true,
    topCta: 'See Surfshark pricing →',
    brandSlug: 'surfshark',
  },
  protonvpn: {
    id: 'protonvpn',
    name: 'Proton VPN',
    badge: 'PR',
    color: '#6D4AFF',
    vertical: 'vpn',
    domain: 'protonvpn.com',
    siteLabel: 'protonvpn.com',
    score: 4.6,
    tagline: 'The privacy pick: Swiss jurisdiction, open-source apps, a usable free tier',
    founded: 'launched 2017 by the Proton team',
    reach: '5,000+ servers across 100+ countries',
    priceNote: 'free tier available; paid from $4.49/mo',
    format: 'Open-source apps on every platform, 10 devices, Secure Core routing',
    highlights: [
      'The only genuinely usable free tier here — no data cap, no ads',
      'Every app is open source and independently audited',
      'Secure Core routes through hardened servers before leaving the network',
      'Swiss company under Swiss privacy law, funded by subscriptions not ads',
    ],
    pros: [
      'Strongest transparency story: open-source clients plus published audits',
      'Free tier is a real product, not a three-day trial in disguise',
      'Bundles with Proton Mail and Drive if you want the whole stack',
    ],
    cons: [
      'Streaming access is deliberately limited on the free tier',
      'Monthly price is above the discount-driven competition',
    ],
    trust: [
      'Swiss jurisdiction',
      'Open-source, independently audited apps',
      'No-logs policy',
      '30-day money-back guarantee on paid plans',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.5 },
      { source: 'App Store', value: 4.6 },
    ],
    tracked: true,
    topCta: 'Try Proton VPN →',
    brandSlug: 'protonvpn',
  },
  expressvpn: {
    id: 'expressvpn',
    name: 'ExpressVPN',
    badge: 'EX',
    color: '#DA3940',
    vertical: 'vpn',
    domain: 'expressvpn.com',
    siteLabel: 'expressvpn.com',
    score: 4.3,
    tagline: 'Premium price, the most forgiving apps, strongest router support',
    founded: 'operating since 2009',
    reach: 'servers in 105 countries',
    priceNote: 'from $4.99/mo on the longest plan',
    format: 'Lightway protocol, 8 devices, dedicated router firmware',
    highlights: [
      'Lightway connects quickly and recovers well when a network drops',
      'TrustedServer runs everything in RAM, wiping state on every reboot',
      'Its own router firmware — the simplest way to cover a whole home',
      '24/7 live chat that answers in minutes, not hours',
    ],
    pros: [
      'The least fiddly apps in the category — good for non-technical households',
      'Router firmware nobody else matches for ease of setup',
      'Consistent unblocking across streaming services',
    ],
    cons: [
      'Materially more expensive than equally capable rivals',
      'Ownership by a large ad-tech-adjacent group still bothers some readers',
    ],
    trust: [
      'British Virgin Islands jurisdiction',
      'RAM-only TrustedServer infrastructure',
      'Audited no-logs policy',
      '30-day money-back guarantee',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.4 },
      { source: 'App Store', value: 4.6 },
    ],
    tracked: true,
    topCta: 'See ExpressVPN pricing →',
    brandSlug: 'expressvpn',
  },
  mullvad: {
    id: 'mullvad',
    name: 'Mullvad',
    badge: 'MU',
    color: '#F2C500',
    vertical: 'vpn',
    domain: 'mullvad.net',
    siteLabel: 'mullvad.net',
    score: 4.4,
    tagline: 'Flat €5 a month, no account, no upsell — and no affiliate programme',
    founded: 'operating since 2009',
    reach: 'servers in 45+ countries',
    priceNote: 'flat €5/month, no discounts, ever',
    format: 'Anonymous account numbers, no email required, cash accepted',
    highlights: [
      'Signup issues a random account number — no email, no password, no profile',
      'One price forever: €5 a month, no term contracts and no renewal trap',
      'Accepts cash and Monero if you want no payment trail at all',
      'Open-source apps with a long public audit history',
    ],
    pros: [
      'The cleanest privacy model in the market, by a distance',
      'Pricing is honest to the point of being commercially inconvenient',
      'Refuses to play the discount game, so there is no renewal shock',
    ],
    cons: [
      'Smallest network here — fewer options for distant exit countries',
      'Streaming unblocking is unreliable and explicitly not a goal',
    ],
    trust: [
      'Swedish company, open-source clients',
      'Repeated independent audits',
      'No accounts, no email, cash payment accepted',
      'No affiliate programme — we earn nothing if you sign up',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.3 },
      { source: 'App Store', value: 4.5 },
    ],
    // Mullvad runs no affiliate programme. Links go straight to them.
    tracked: false,
    brandSlug: 'mullvad',
  },
  purevpn: {
    id: 'purevpn',
    name: 'PureVPN',
    badge: 'PU',
    color: '#7539DB',
    vertical: 'vpn',
    domain: 'purevpn.com',
    siteLabel: 'purevpn.com',
    score: 3.8,
    tagline: 'The budget option, rebuilt on audits after handing logs to the FBI in 2017',
    founded: 'operating since 2007',
    reach: '6,000+ servers across 80+ countries',
    priceNote: 'from $2.15/mo on the 2-year plan',
    format: '10 simultaneous devices, WireGuard and obfuscation, 31-day money-back guarantee',
    highlights: [
      'Among the cheapest long-term prices of any established VPN',
      'Independently audited no-logs claims since 2019 — Altius IT first, KPMG from 2021 under an "always-on" arrangement',
      'British Virgin Islands jurisdiction, outside the 14 Eyes arrangements',
      '31-day money-back window — a day longer than the category standard',
    ],
    pros: [
      'Long-term pricing undercuts almost everything else with a comparable server list',
      'Has put real money into repeat external audits, including an arrangement letting KPMG inspect without notice',
      'Obfuscation and a large server list for the price',
    ],
    cons: [
      'In 2017 it supplied connection timestamps that helped the FBI identify a user, while advertising a no-logs policy',
      'Speeds trail the leaders on long-distance routes',
      'The cheap headline price requires a multi-year term paid up front',
    ],
    trust: [
      'British Virgin Islands jurisdiction',
      'No-logs audited by Altius IT in 2019 and by KPMG from 2021, on an always-on basis',
      '31-day money-back guarantee',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.0 },
      { source: 'App Store', value: 4.5 },
    ],
    tracked: true,
    topCta: 'See PureVPN pricing →',
    brandSlug: 'purevpn',
  },
}

/** The byline on every VPN guide. */
export const vpnAuthor: Author = {
  name: 'Daniel Reeves',
  role: 'Privacy & networking editor',
  bio: 'Daniel has spent a decade writing about network security and consumer privacy tooling. For this ranking he worked from the documents rather than the marketing: every published audit report in full, the ownership structure behind each brand, the protocol each one actually ships, and the renewal price sitting behind the promotional rate.',
  initials: 'DR',
  credentials: [
    '10 years covering privacy tech',
    'Reads the audit, not the press release',
    'Prices at renewal, not the promo',
  ],
}
