/**
 * Registry of the ranked guides in the VPN vertical.
 *
 * This holds only what the /articles index and the cross-link block need. Each
 * guide's body — facts strip, ranked providers with their verdicts, FAQ — is
 * written by hand in its own app/articles/<slug>/page.tsx using the shared
 * components in components/articles.
 */
import type { ArticleMeta } from '../guides/types'

export const vpnArticles: ArticleMeta[] = [
  {
    slug: 'best-vpn',
    vertical: 'vpn',
    topic: 'overall',
    shortTopic: 'Best VPNs overall',
    title: 'Best VPNs of 2026: five services ranked on what you can verify',
    metaTitle: 'Best VPNs of 2026 — 5 services compared and ranked',
    metaDescription:
      'Five VPNs compared on the things you can check for yourself: published audits, jurisdiction, ownership, protocol and what you really pay at renewal.',
    intent: 'best vpn',
    blurb:
      'Speed, audits and renewal pricing compared across NordVPN, Surfshark, Proton VPN, ExpressVPN and Mullvad.',
    updated: '2026-08-12',
    readingTime: '9 min',
  },
  {
    slug: 'best-vpn-for-travel',
    vertical: 'vpn',
    topic: 'for travel',
    shortTopic: 'VPN for travel',
    title: 'Best VPN for travel in 2026: what actually works on hotel Wi-Fi',
    metaTitle: 'Best VPN for Travel 2026 — hotel Wi-Fi, captive portals, roaming',
    metaDescription:
      'A VPN for travel has a different job: captive portals, restrictive networks, roaming. Four services ranked on the features that address them.',
    intent: 'best vpn for travel',
    blurb:
      'Captive portals, restricted networks and banking apps abroad — which VPNs ship the features that handle them.',
    updated: '2026-08-14',
    readingTime: '7 min',
  },
]
