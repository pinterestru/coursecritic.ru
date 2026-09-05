/**
 * Brand page data for ExpressVPN (route: /brands/expressvpn).
 *
 * SOURCES (checked 21 August 2026):
 *  - Tier structure (Basic / Advanced / Pro), device counts of 10 / 12 / 14 and
 *    two-year headline rates of $3.49 / $4.49 / $7.49 a month, 30-day guarantee:
 *    https://www.expressvpn.com/blog/introducing-expressvpn-tiered-pricing/
 *    (the order page itself, https://www.expressvpn.com/order, blocks automated
 *    fetches — check it manually before launch)
 *  - Lightway: open-sourced, re-implemented in Rust, audited by Cure53 in 2021
 *    and 2022 and by Cure53 with Praetorian after the Rust rewrite in 2024:
 *    https://www.expressvpn.com/lightway
 *  - Third KPMG no-logs and TrustedServer examination, ISAE 3000 Type 1, as at
 *    28 February 2025: https://www.expressvpn.com/blog/kpmg-2025-no-logs-policy-audit/
 *    and the published audit list at https://www.expressvpn.com/trust
 *  - Router change: the dedicated ExpressVPN router app stopped supporting
 *    third-party routers after 31 March 2026; manual configuration remains, and
 *    Aircove hardware has published end-of-support dates:
 *    https://www.tomsguide.com/computing/vpns/expressvpn-just-killed-a-core-feature-and-its-costing-them-customers
 *    and https://www.expressvpn.com/support/vpn-setup/release-notes/aircoveos/
 *  - Ownership: Kape Technologies agreed to buy ExpressVPN for $936m in
 *    September 2021 (https://www.bloomberg.com/news/articles/2021-09-13/kape-technologies-agrees-to-buy-expressvpn-for-936-million);
 *    Kape was formerly Crossrider (https://www.theregister.com/2021/09/14/expressvpn_bought_kape/);
 *    Kape delisted from AIM on 31 May 2023 after Unikmind Holdings took it
 *    private (https://www.techradar.com/news/kape-receives-dollar15bn-proposal-to-go-private)
 *  - The 2021 Daniel Gericke matter — ExpressVPN's CIO was one of three former US
 *    operatives who entered a deferred prosecution agreement over UAE contract
 *    work, and ExpressVPN said publicly it stood behind him:
 *    https://www.techtarget.com/searchsecurity/news/252506801/ExpressVPN-stands-behind-CIO-named-in-UAE-hacking-scandal
 *    Both the DOJ outcome and the company's response are cited, because this
 *    page describes a named individual and must stay defensible.
 *  - Aggregate scores: https://www.trustpilot.com/review/expressvpn.com and the
 *    iOS App Store listing. Both match ../vpn/providers.ts.
 *
 * ⚠️ Re-verify every figure against expressvpn.com before launch and before each
 * campaign. Two known mismatches against ../vpn/providers.ts, which this file
 * cannot edit: `priceNote` there reads "$4.99/mo on the longest plan" where
 * ExpressVPN now advertises Basic at $3.49, and `format` there says "8 devices,
 * dedicated router firmware" — the device count is now 10 to 14 by tier, and the
 * router app no longer supports third-party routers. The README also flags the
 * `reach` figure as understated. See ../../README.md.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const expressvpn: BrandPage = {
  slug: 'expressvpn',
  providerId: 'expressvpn',
  schemaType: 'SoftwareApplication',
  metaTitle: 'ExpressVPN review 2026 — is the premium justified?',
  metaDescription:
    'An independent ExpressVPN review: what the tiers cost at renewal, what the published audits cover, and the Kape Technologies question answered honestly.',
  intro:
    'ExpressVPN is the easiest product in this category to hand to someone who does not want to think about it, and it charges accordingly. The case for paying more rests on three things that are checkable: the Lightway protocol, an unusually long list of published audits, and apps that hide the complexity. The case against rests on two: the price at renewal, and who owns the company.',
  about: [
    'ExpressVPN has operated since 2009 and is registered in the British Virgin Islands, outside the intelligence-sharing arrangements that make jurisdiction a live question for a privacy product. Its servers run on TrustedServer, a RAM-only design in which nothing survives a reboot, and its no-logs claim has been examined by KPMG — a third such report, prepared to the ISAE 3000 Type 1 standard, covered the position as at 28 February 2025. The company publishes the full audit list rather than a summary of it, which is more than most rivals do.',
    'Lightway is the technical argument. It is ExpressVPN’s own protocol, open-sourced on GitHub, re-implemented in Rust and audited by Cure53 in 2021 and 2022 and again by Cure53 alongside Praetorian after the rewrite in 2024. Its practical benefit is not raw throughput but reconnection: it holds an idle connection across a Wi-Fi-to-mobile switch or a device waking from sleep, rather than dropping and renegotiating. On a laptop that moves between networks all day, that is the difference you actually notice.',
    'Ownership is the part readers ask about most. ExpressVPN was bought by Kape Technologies in a $936m deal announced in September 2021. Kape also owns CyberGhost and Private Internet Access, and traded until 2018 as Crossrider, a business whose earlier product bundled adware — a history it has publicly disowned but which has not been forgotten. Kape delisted from London’s AIM market on 31 May 2023 when Unikmind Holdings took it private, so it now discloses less than it did as a listed company. None of this is evidence that ExpressVPN mishandles data; it is a reason the published audits matter more here than they would elsewhere.',
  ],
  facts: [
    { label: 'Launched', value: '2009' },
    { label: 'Jurisdiction', value: 'British Virgin Islands' },
    { label: 'Devices', value: '10–14 by tier' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'The headline monthly figures below require a two-year term paid up front. Renewal is charged at the standard annual rate — reported at around $99.95 a year for Basic — which is roughly two and a half times the promotional monthly figure. Budget from renewal. The extras on Advanced and Pro are separate products bundled in; price them on their own before assuming the higher tier saves money.',
    items: [
      {
        name: 'Basic, 2-year term',
        price: 'from $3.49/mo paid up front',
        renews: 'renews at around $99.95/year',
        detail:
          'The VPN alone, Lightway, every location, 10 simultaneous devices. The tier worth buying.',
        pick: true,
      },
      {
        name: 'Advanced, 2-year term',
        price: 'from $4.49/mo paid up front',
        renews: 'renews at the standard annual rate',
        detail:
          'Adds the Keys password manager, threat protection, identity monitoring and 12 devices.',
      },
      {
        name: 'Pro, 2-year term',
        price: 'from $7.49/mo paid up front',
        renews: 'renews at the standard annual rate',
        detail:
          'Adds a dedicated IP, data-broker removal, credit reporting and 14 devices. A bundle of things sold separately elsewhere — check you want all of them.',
      },
    ],
  },
  pros: [
    {
      title: 'The most published audits in the category',
      body: 'More than twenty independent reports covering the no-logs claim, TrustedServer, the apps, the browser extensions and the Lightway protocol, listed publicly rather than summarised. KPMG’s third no-logs examination covered the position as at February 2025.',
    },
    {
      title: 'Lightway handles network changes well',
      body: 'The protocol is documented to hold the connection when a device switches from Wi-Fi to mobile data or wakes from sleep, instead of dropping and reconnecting. It is open source and has been audited four times, so the claim is inspectable rather than asserted.',
    },
    {
      title: 'The least fiddly apps here',
      body: 'One button, sensible defaults, and very little that a non-technical user can misconfigure. If you are buying for a parent or a household that will call you when something breaks, that is worth real money.',
    },
    {
      title: 'Consistent access to streaming catalogues',
      body: 'Unblocking is maintained rather than treated as somebody else’s problem, which is a large part of why subscribers stay. Privacy-first providers generally do not compete here.',
    },
  ],
  cons: [
    {
      title: 'You pay a premium for the polish, and more again at renewal',
      body: 'Basic starts above Surfshark and PureVPN on the same two-year commitment and renews at around $99.95 a year. Rivals match it feature for feature for less. The extra buys easier apps and a longer audit list — decide whether that is what you are short of.',
    },
    {
      title: 'Router support was cut back in 2026',
      body: 'Whole-home coverage via the router used to be the standout reason to choose ExpressVPN. Since 31 March 2026 the dedicated router app no longer supports third-party routers; manual configuration still works, and the company’s own Aircove hardware has published end-of-support dates — end of 2027 for the AX1800, end of 2028 for Aircove Go. If a router setup is why you are here, verify your specific model still works before paying.',
    },
    {
      title: 'The Kape Technologies question is legitimate',
      body: 'The parent company was Crossrider, an adware-bundling business, until 2018, and it went private in 2023 so it now publishes less about itself. Separately, in 2021 ExpressVPN’s CIO was one of three former US operatives who entered a deferred prosecution agreement with the DOJ over hacking work contracted by the UAE government; ExpressVPN kept him in post and said so publicly. Neither fact shows the service mishandles data. Both are reasons some readers rule it out, and they are entitled to.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.4,
      note: 'large review volume, consistent over years',
    },
    { source: 'App Store (iOS)', value: 4.6, note: 'very large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite: audit depth and app quality against price, ownership and the 2026 router change',
    },
  ],
  bestFor: [
    'Non-technical households where somebody else will be doing the support',
    'People who move between networks all day and want the connection to survive it',
    'Readers who weigh a long, public audit list above the monthly price',
  ],
  notFor: [
    'Anyone for whom Kape Technologies’ history, or the 2021 DOJ matter, is disqualifying',
    'Buyers choosing on price — Surfshark and PureVPN cost materially less for the same core job',
    'Households that specifically wanted the router app: third-party router support ended in March 2026',
  ],
  faq: [
    {
      q: 'Is ExpressVPN worth the extra money?',
      a: 'If the apps and the support are what you are buying, often yes. If you want raw speed on long-distance routes, NordVPN benchmarks better for less. If you want the cheapest competent service, Surfshark does the same core job for a fraction of the renewal price.',
    },
    {
      q: 'Does Kape Technologies ownership matter?',
      a: 'It is a fair question rather than a scandal. Kape traded as Crossrider until 2018, a business whose earlier product bundled adware, and it delisted in 2023 so it discloses less than it once did. What offsets it is that ExpressVPN publishes more independent audits than any rival here — verification you can read, rather than a corporate history you have to take on faith.',
    },
    {
      q: 'Can I still use it on my router?',
      a: 'Manual configuration still works on routers that support it, but since 31 March 2026 the dedicated ExpressVPN router app no longer connects third-party routers, and the company has moved to an app-first approach. Its own Aircove hardware carries end-of-support dates of end-2027 and end-2028. Check your model before buying on this basis.',
    },
    {
      q: 'How many devices can I connect?',
      a: 'It depends on the tier: 10 on Basic, 12 on Advanced, 14 on Pro. That is more generous than it used to be, though still a count — Surfshark does not impose one at all.',
    },
    {
      q: 'What does the KPMG audit actually prove?',
      a: 'That an outside firm examined the TrustedServer infrastructure and the privacy claims and found, as at a stated date, that browsing history, traffic destinations, content and DNS queries were not being recorded. It is an assurance at a point in time. Repeat reports — this was the third — are what turn that into a pattern.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'expressvpn.com/order',
}
