/**
 * Brand page data for Proton VPN (route: /brands/protonvpn).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://protonvpn.com/pricing — Free, VPN Plus and Proton Unlimited terms,
 *     device limit, 30-day money-back guarantee on paid plans
 *   - https://protonvpn.com/free-vpn — the free tier's limits (one device,
 *     limited countries, no streaming, no data cap)
 *   - https://protonvpn.com/blog/open-source/ and the published audit reports
 *   - https://protonvpn.com/support/secure-core-vpn/ — Secure Core routing
 *   - https://www.trustpilot.com/review/protonvpn.com and the iOS App Store listing
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * protonvpn.com before launch and before each campaign. Proton prices in
 * several currencies and the per-month figures depend on the term chosen.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const protonvpn: BrandPage = {
  slug: 'protonvpn',
  providerId: 'protonvpn',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Proton VPN review 2026 — the free tier and the audits',
  metaDescription:
    'An independent Proton VPN review: what the free plan really gives you, how Swiss jurisdiction and open-source apps change the trust equation, and where it loses to faster rivals.',
  intro:
    'Proton VPN is the provider you recommend to someone who does not trust VPN providers. Swiss company, open-source apps on every platform, published audits, and a free tier with no data cap — a combination nobody else offers. The trade-off is price on the monthly plan and a deliberately limited free experience.',
  about: [
    'Proton VPN comes from the team behind Proton Mail, based in Geneva and operating under Swiss privacy law. That jurisdiction is the first half of the pitch. The second is structural: the company is funded by subscriptions rather than advertising, and it publishes the source code for its client apps so that the privacy claims can be checked rather than believed.',
    'The free tier is the part that surprises people. It has no data cap and no advertising — genuinely unusual in a market where "free VPN" normally means your traffic is the product. What you give up is choice of country, top speeds at peak times, and streaming access. It is a real product for someone who needs occasional protection on public Wi-Fi, and an honest funnel into the paid plan for everyone else.',
    'On the paid plan you get servers in over a hundred countries, ten simultaneous devices, and Secure Core: routing that sends your traffic through a hardened server in a privacy-friendly country before it exits to the wider internet. It costs you speed. For most people that is a bad trade, and for a journalist working somewhere hostile it is exactly the point — which is the clearest illustration of who this product is designed for.',
  ],
  facts: [
    { label: 'Launched', value: '2017' },
    { label: 'Jurisdiction', value: 'Switzerland' },
    { label: 'Devices', value: '10 at once' },
    { label: 'Free tier', value: 'Yes, no data cap' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'Proton discounts long terms like everyone else, but the renewal gap is smaller than the industry norm. The free plan is permanent, not a trial.',
    items: [
      {
        name: 'Free',
        price: '$0, permanently',
        detail:
          'Unlimited data, one device, a limited set of countries, no streaming support. No ads, no logs, no catch that we could find.',
      },
      {
        name: 'VPN Plus',
        price: 'from $4.49/mo on a long term',
        renews: 'renews near the standard annual rate',
        detail: 'All countries, 10 devices, Secure Core, streaming support, port forwarding.',
        pick: true,
      },
      {
        name: 'Proton Unlimited',
        price: 'from $9.99/mo on a long term',
        renews: 'renews near the standard annual rate',
        detail:
          'The VPN plus Mail, Calendar, Drive and Pass. Worth it only if you are moving your whole stack.',
      },
    ],
  },
  pros: [
    {
      title: 'You can check the claims yourself',
      body: 'Open-source clients plus published independent audits mean the privacy promises are inspectable rather than asserted. In a category built on trust-us marketing, that is the strongest possible position.',
    },
    {
      title: 'A free tier that is genuinely usable',
      body: 'No data cap, no ads, no time limit. It is slower and restricted to a few countries, but it is a functioning VPN you can hand to a family member without worrying about what they are signing up for.',
    },
    {
      title: 'Swiss jurisdiction, and it matters here',
      body: 'Switzerland is outside the EU and the main intelligence-sharing arrangements, with strong domestic privacy law. Combined with a subscription-funded business model, the incentives line up with the user.',
    },
    {
      title: 'Secure Core for people who actually need it',
      body: 'Multi-hop routing through hardened servers costs speed and protects against an adversary watching the exit server. Most people should leave it off; the people who need it have very few alternatives.',
    },
  ],
  cons: [
    {
      title: 'Slower than the speed leaders',
      body: 'Perfectly fast for video calls and streaming, but on long-distance connections NordVPN is measurably quicker. If raw throughput is your first criterion, this is not the top pick.',
    },
    {
      title: 'The free tier is limited on purpose',
      body: 'One device, a handful of countries, no streaming. That is a reasonable funnel design, not a complaint — just do not expect the paid experience for nothing.',
    },
    {
      title: 'Expensive without a commitment',
      body: 'Committing to a year or two brings it in line with rivals. Paid month to month it sits well above Mullvad’s flat €5, which carries no term and no renewal increase at all — so if paying monthly is the requirement, this is not the cheapest way to meet it.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.5, note: 'consistent across several years' },
    { source: 'App Store (iOS)', value: 4.6, note: 'large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.6,
      note: 'our composite across transparency, speed and value',
    },
  ],
  bestFor: [
    'Anyone who wants to verify privacy claims rather than trust them',
    'Journalists, researchers and activists who need Secure Core routing',
    'People who want a free VPN that is not monetising their traffic',
  ],
  notFor: [
    'Speed-first users chasing the highest possible throughput',
    'Anyone who wants to pay monthly at the lowest possible price',
    'Households needing more than ten simultaneous devices',
  ],
  faq: [
    {
      q: 'Is the free plan really unlimited?',
      a: 'There is no data cap and no time limit. You are limited to one device, a small set of countries and lower priority at peak times, and streaming services are not supported on it.',
    },
    {
      q: 'How is this funded if the free tier has no ads?',
      a: 'By paid subscriptions to Proton VPN and the wider Proton suite. That is the point of the model: the company makes money when you pay it, not when it sells information about you.',
    },
    {
      q: 'Does Secure Core slow things down?',
      a: 'Yes, noticeably — your traffic takes an extra hop through a hardened server before exiting. Leave it off for everyday browsing and switch it on for the sessions where it matters.',
    },
    {
      q: 'Proton VPN or Mullvad for privacy?',
      a: 'Mullvad collects less at signup — no email, an anonymous account number, cash accepted. Proton has the larger network, better streaming support and a free tier. For strict anonymity, Mullvad. For a privacy-first VPN you can use as your only one, Proton.',
    },
  ],
  updated: '2026-08-12',
  deepLink: 'protonvpn.com/pricing',
}
