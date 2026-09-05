/**
 * Brand page data for Zavvi (route: /brands/zavvi).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Zavvi_(retailer) — 1971 Virgin Megastores
 *     origin, 2007 rename, 2008 administration, 2009 relaunch under THG
 *   - https://www.zavvi.com/blog/features/celebrating-10-years-of-zavvi-online/
 *     — The Hut Group acquisition date, product-category evolution
 *   - https://www.thg.com/news/hut-acquires-zavvi — THG ownership
 *   - https://www.zavvi.com/c/articles/delivery-information/ — delivery
 *     costs, next-day cutoff, free-delivery threshold
 *   - https://www.zavvi.com/c/articles/returns-policy/ — 14-day return
 *     window, buyer-paid return shipping, no exchanges
 *   - https://www.trustpilot.com/review/www.zavvi.com — rating and volume
 *     for the main zavvi.com profile
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const zavvi: BrandPage = {
  slug: 'zavvi',
  providerId: 'zavvi',
  metaTitle: 'Zavvi review 2026 — pop culture merch, delivery, returns',
  metaDescription:
    'An independent Zavvi review: what the pop culture and steelbook catalogue covers, delivery costs, and the 14-day returns policy with no exchanges.',
  intro:
    "Zavvi sells pop culture merchandise: exclusive steelbooks, collectibles, trading cards and branded clothing built around film, TV and gaming franchises. It began as the UK's Virgin Megastores chain, collapsed as a high-street retailer in 2008, and was rebuilt as an online-only business by The Hut Group in 2009. The catalogue is genuinely distinctive; the delivery and returns experience is more ordinary.",
  about: [
    "Zavvi's roots go back to 1971 as Virgin Megastores, renamed Zavvi in 2007 after a management buyout. That standalone company went into administration in December 2008 and every physical store closed by February 2009. Days later, on 2 March 2009, The Hut Group bought the brand and relaunched Zavvi as an online-only retailer, which is the business reviewed here — it has no operational connection to the old high-street chain beyond the name and the general pop culture positioning it carried over.",
    'Under THG, Zavvi rebuilt itself around pop culture rather than general entertainment retail: exclusive steelbook Blu-rays and 4K UHDs, a format it launched in March 2013 with Who Framed Roger Rabbit, licensed collectibles from makers like Hot Toys, NECA and Kotobukiya, trading cards, LEGO, board games and franchise-branded clothing built around properties such as Star Wars, Nintendo and Jurassic Park. Exclusivity is the pitch — variant steelbooks and limited collectibles that are genuinely hard to find elsewhere at the advertised price.',
    'As a THG property, Zavvi sits inside a large e-commerce group rather than operating as an independent business, which shows up in shared infrastructure like delivery pricing tiers and a standard, group-wide returns process rather than bespoke policies per category or product line. That scale cuts both ways: broad stock and frequent exclusives on one side, alongside customer-service handling that reads more like a large multi-brand retailer than the specialist collectibles shop the branding suggests.',
  ],
  facts: [
    { label: 'Relaunched online', value: '2009, under The Hut Group' },
    { label: 'Ownership', value: 'Owned by The Hut Group' },
    { label: 'Next-day cutoff', value: 'Order by 2pm, weekdays' },
    { label: 'Returns window', value: '14 days from delivery' },
  ],
  plans: {
    title: 'How delivery is priced',
    note: 'Delivery cost and speed are set by order value and postcode at checkout, and premium or express options can be paused during peak periods.',
    items: [
      {
        name: 'Standard UK delivery',
        price: 'Free over roughly £10, otherwise around £1.99',
        detail:
          'Arrives in 3 to 5 working days. Saturday delivery is limited to England, Wales and Belfast postcodes BT1 to BT9.',
        pick: true,
      },
      {
        name: 'Next-day delivery',
        price: 'Around £4.99',
        detail:
          'Order before 2pm on a working day. Weekend and bank-holiday orders roll over to the next business day, and availability depends on postcode.',
      },
      {
        name: 'International delivery',
        price: 'Charged by destination at checkout',
        detail:
          'Zavvi ships beyond the UK, with cost and timescale set per country rather than a flat international rate.',
      },
      {
        name: 'Returns',
        price: 'Buyer pays return postage',
        detail:
          '14 days from delivery to start a return, item must be in pristine condition, refund only — Zavvi does not offer direct exchanges.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely hard-to-find exclusives',
      body: 'Variant steelbooks and limited collectibles from named makers are the actual reason to shop here rather than a generic entertainment retailer, and Zavvi has run this exclusives model since 2013.',
    },
    {
      title: 'A real, checkable free-delivery threshold',
      body: 'Free UK standard delivery from roughly £10 is a low bar for a multi-item pop culture order, so most baskets clear it without the buyer having to plan around it deliberately.',
    },
    {
      title: 'Backed by a large retail group',
      body: "Ownership by The Hut Group means shared logistics and payment infrastructure rather than a small independent shop's more fragile, single-point-of-failure operation running everything on its own.",
    },
    {
      title: 'Broad category range in one basket',
      body: 'Physical media, collectibles, trading cards, LEGO and branded clothing can all be ordered together in one checkout, which a specialist collectibles-only shop generally cannot offer.',
    },
  ],
  cons: [
    {
      title: 'No exchanges, ever',
      body: 'A wrong size or a change of mind means a refund and a fresh order, not a straight swap, and the buyer covers return postage unless the item itself is faulty.',
    },
    {
      title: 'Trustpilot volume is large and the score is middling',
      body: 'Zavvi\'s main Trustpilot profile carries tens of thousands of reviews, and the score sits closer to average than excellent, with recurring complaints about items stuck "processing" and slow responses to queries.',
    },
    {
      title: 'Exclusives sell out and do not come back',
      body: 'The same limited-run model that makes steelbooks desirable also means a missed release is usually gone for good, unlike a general retail line that simply gets restocked from the warehouse.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 2.9,
      note: 'roughly 54,500 reviews on the main zavvi.com profile',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'a genuinely distinctive catalogue held back by a weak Trustpilot record and no exchanges',
    },
  ],
  bestFor: [
    'Collectors chasing exclusive steelbooks or limited collectibles',
    'UK orders that comfortably clear the free-delivery threshold',
    'Buyers who are certain of size and edition before ordering',
    'Shoppers who want physical media, toys and clothing in one basket',
  ],
  notFor: [
    'Anyone who might need to exchange rather than return an item',
    'Time-sensitive gifts where a delayed dispatch would be a problem',
    'Buyers relying on Trustpilot sentiment as a strong positive signal',
  ],
  faq: [
    {
      q: 'Is Zavvi the same company as the old Virgin Megastores or high-street Zavvi?',
      a: 'Only by name. The original Zavvi went into administration in December 2008 and its shops closed in early 2009. The Hut Group bought the brand days later and relaunched it as an online-only retailer, which is the business trading today.',
    },
    {
      q: 'What does free delivery require?',
      a: 'UK orders qualify for free standard delivery over roughly £10; smaller orders pay a small flat delivery fee shown at checkout. Next-day delivery is a separate paid option with its own 2pm weekday cutoff, and it is not covered by the free-delivery threshold that applies to standard shipping.',
    },
    {
      q: 'Can I exchange an item instead of returning it?',
      a: "No. Zavvi's policy is refund-only within 14 days of delivery — you place a new order separately if you want a different size or edition, and you generally cover the return postage yourself unless the original item arrived faulty or was sent in error by Zavvi.",
    },
    {
      q: 'Why do steelbooks and exclusives sell out so fast?',
      a: 'They are produced in limited runs by design, which is what makes them collectible in the first place. Zavvi does not typically restock a sold-out exclusive once it is gone, so timing a purchase around the release date matters far more than it would with standard retail stock.',
    },
    {
      q: 'Does Zavvi ship outside the UK?',
      a: 'Yes, though international cost and delivery time are set per destination at checkout rather than a single published international rate. Check the country-specific figure and estimated timescale shown at checkout before ordering, since it varies considerably by where the parcel is heading.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'zavvi.com',
}
