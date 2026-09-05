/**
 * The site's verticals.
 *
 * This site is deliberately multi-vertical: one editorial format (ranked buying
 * guide + brand review) applied to unrelated markets — VPNs today, travel and
 * hosting alongside it, anything else later. A vertical owns:
 *   - a provider registry   → data/<vertical>/providers.ts
 *   - a guide registry      → data/<vertical>/articles.ts
 *   - an author byline      → exported from its providers file
 *
 * Adding a vertical means adding those two files plus an entry here. No
 * component changes: every shared component resolves providers by id through
 * data/providers.ts, which merges all vertical registries.
 */
export type VerticalId =
  | 'vpn'
  | 'security'
  | 'travel'
  | 'hosting'
  | 'booking'
  | 'marketplace'
  | 'fashion'
  | 'beauty'
  | 'electronics'
  | 'lifestyle'
  | 'learning'
  | 'gaming'
  | 'services'

export interface Vertical {
  id: VerticalId
  /** Section heading, e.g. 'VPNs & privacy'. */
  name: string
  /** Short label for chips and cards. */
  label: string
  /** Eyebrow used above article H1s, e.g. 'Ranked · VPNs 2026'. */
  kicker: string
  /** One-line positioning for the home page and the guides index. */
  blurb: string
  /** Accent hex for cards and chips. */
  accent: string
  /** What we actually check when ranking in this vertical. */
  criteria: string[]
}

export const verticals: Vertical[] = [
  {
    id: 'vpn',
    name: 'VPNs & privacy',
    label: 'VPN',
    kicker: 'Ranked · VPNs 2026',
    blurb:
      'Speed, jurisdiction, audits and what actually happens to your logs — the parts the pricing page never mentions.',
    accent: '#0F6E64',
    criteria: [
      'Independent security audits and how recent they are',
      'Jurisdiction and the company behind the app',
      'Real cost at renewal, not the first-term promo',
      'Device limits, protocols and platform coverage',
    ],
  },
  {
    id: 'security',
    name: 'Security & data',
    label: 'Security',
    kicker: 'Ranked · Security 2026',
    blurb:
      'Antivirus, data-removal and recovery tools — judged on independent lab results and the renewal price, which is where this category does its real business.',
    accent: '#B23A48',
    criteria: [
      'Detection scores from independent labs, not the vendor’s own numbers',
      'Renewal price versus the first-year offer — the steepest jumps in software',
      'What is genuinely included versus upsold as a separate subscription',
      'What the company does with your data, and where it is based',
    ],
  },
  {
    id: 'travel',
    name: 'Travel',
    label: 'Travel',
    kicker: 'Ranked · Travel 2026',
    blurb:
      'eSIMs, insurance and booking tools for people who leave the country more than once a year.',
    accent: '#B4622A',
    criteria: [
      'Coverage where readers actually travel, not just the headline countries',
      'What the policy or plan excludes — the reason claims get denied',
      'Total price including fees, not the teaser rate',
      'Support that answers while you are abroad and mid-problem',
    ],
  },
  {
    id: 'hosting',
    name: 'Web hosting',
    label: 'Hosting',
    kicker: 'Ranked · Hosting 2026',
    blurb:
      'Where a small site should live: renewal pricing, real performance and how painful migration is.',
    accent: '#3B4C9B',
    criteria: [
      'Renewal price versus the introductory rate',
      'Performance on a realistic plan, not the top tier',
      'Backups, staging and how easy it is to leave',
      'Support quality on the entry plan people actually buy',
    ],
  },
  {
    id: 'booking',
    name: 'Flights, hotels & experiences',
    label: 'Booking',
    kicker: 'Ranked · Booking 2026',
    blurb:
      'Travel agents, activity platforms and car hire — judged on what happens when a booking goes wrong, not on the search page.',
    accent: '#1D7A5F',
    criteria: [
      'Who you actually deal with when a flight or a booking changes',
      'Service and convenience fees added between the search result and the card',
      'Cancellation windows, and whether a refund means cash or credit',
      'Where the catalogue is genuinely strong, by region rather than in the marketing',
    ],
  },
  {
    id: 'marketplace',
    name: 'Marketplaces & retail',
    label: 'Marketplace',
    kicker: 'Ranked · Marketplaces 2026',
    blurb:
      'The big storefronts: what they ship where, what a return costs you, and how much of the catalogue is third-party sellers.',
    accent: '#1F6FEB',
    criteria: [
      'First-party stock versus third-party sellers, and who honours the return',
      'Delivery cost and realistic delivery time to the markets they serve',
      'Buyer protection: what it covers, and how long a dispute takes',
      'Whether the published price is the price at checkout',
    ],
  },
  {
    id: 'fashion',
    name: 'Fashion & footwear',
    label: 'Fashion',
    kicker: 'Ranked · Fashion 2026',
    blurb:
      'Clothing, shoes and accessories — sizing, authenticity and the returns policy, which is where most of the money is really lost.',
    accent: '#8E2F5B',
    criteria: [
      'Returns: the window, who pays for the label, and how refunds are issued',
      'Authenticity and sourcing, especially on resale and marketplace models',
      'Sizing consistency and how much help the size guide actually is',
      'Which countries the storefront ships to, and what duties land on arrival',
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty & wellness',
    label: 'Beauty',
    kicker: 'Ranked · Beauty 2026',
    blurb:
      'Cosmetics, fragrance and supplements — authenticity, shipping restrictions and what a subscription really costs to leave.',
    accent: '#C2547A',
    criteria: [
      'Authorised stock and authenticity guarantees, not just a low price',
      'Shipping restrictions on liquids, aerosols and supplements by country',
      'Subscription terms: skipping, pausing and cancelling without a phone call',
      'Expiry dating and how the retailer handles short-dated stock',
    ],
  },
  {
    id: 'electronics',
    name: 'Consumer tech',
    label: 'Tech',
    kicker: 'Ranked · Tech retail 2026',
    blurb:
      'Where to buy the hardware, not which hardware to buy: warranty handling, delivery, financing and what returns cost.',
    accent: '#2C6E8F',
    criteria: [
      'Warranty: who services the unit, and whether the retailer or the brand handles it',
      'Return window on opened electronics, and any restocking fee',
      'Delivery, installation and trade-in options where the retailer offers them',
      'Whether the storefront serves your country, and in which currency',
    ],
  },
  {
    id: 'lifestyle',
    name: 'Home, hobby & gifting',
    label: 'Lifestyle',
    kicker: 'Ranked · Home & gifting 2026',
    blurb:
      'Gifts, collectibles, craft and sports kit — dated delivery, substitution policies and the running costs nobody mentions.',
    accent: '#A45C2B',
    criteria: [
      'Dated delivery: the cut-off, the guarantee, and what happens when it slips',
      'Substitution and stock policy on made-to-order and perishable items',
      'Ongoing costs — subscriptions, materials, consumables — after the first purchase',
      'Where it ships, and what an international return actually involves',
    ],
  },
  {
    id: 'learning',
    name: 'Courses & learning',
    label: 'Learning',
    kicker: 'Ranked · Learning 2026',
    blurb:
      'Course platforms and schools: who teaches, what the certificate is worth, and how the refund window works.',
    accent: '#7A4FBF',
    criteria: [
      'Who actually teaches, and what their qualification to teach it is',
      'Refund window and what voids it — usually how much you have watched',
      'Subscription versus per-course pricing, and which works out cheaper for you',
      'What the certificate is recognised for, stated plainly rather than implied',
    ],
  },
  {
    id: 'gaming',
    name: 'Games & digital keys',
    label: 'Gaming',
    kicker: 'Ranked · Games 2026',
    blurb:
      'First-party stores and key marketplaces. The price gap between them is real, and so is the reason for it.',
    accent: '#4B3FA8',
    criteria: [
      'Key provenance, and the risk of a revoked key on marketplace models',
      'Buyer protection: whether it is included or sold as a paid add-on',
      'Region locks and activation restrictions before you pay, not after',
      'Refund policy once a download or activation has started',
    ],
  },
  {
    id: 'services',
    name: 'Online services',
    label: 'Services',
    kicker: 'Ranked · Services 2026',
    blurb:
      'Freelance work, creative assets, money transfer, delivery and DNA testing — priced on the fees they do not put on the landing page.',
    accent: '#3F6B4A',
    criteria: [
      'The total fee, including the margin hidden in an exchange rate or a mark-up',
      'What a subscription keeps working after you cancel, and what stops',
      'Auto-renewal terms and how hard the cancellation route is',
      'What the company does with your data — and, for DNA tests, your sample',
    ],
  },
]

export function getVertical(id: VerticalId): Vertical {
  const vertical = verticals.find((v) => v.id === id)
  if (!vertical) throw new Error(`Unknown vertical: ${id}`)
  return vertical
}
