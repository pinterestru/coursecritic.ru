/**
 * Brand page data for Bath & Body Works Gulf (route: /brands/bathandbodyworks).
 *
 * This page covers bathandbodyworks.ae, the UAE/Gulf storefront run under
 * franchise by M.H. Alshaya Co., not the US-owned bathandbodyworks.com. Range,
 * loyalty programme, returns and payment methods are all set by the regional
 * franchise operator, not by Bath & Body Works, Inc. in Ohio.
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.bathandbodyworks.ae/en/ — product range (fragrance, body
 *     care, hand soap, home/candles) and free delivery above a stated
 *     order threshold
 *   - https://ae.arabiccoupon.com/en/article/bath-and-body-works-return-and-exchange-policy-country
 *     and https://www.bathandbodyworks.ae/en/website-terms-and-conditions —
 *     return conditions: unused/undamaged items, receipt required, used
 *     personal-care and fragrance items excluded from exchange
 *   - https://www.aura-mena.com/en and
 *     https://www.bathandbodyworks.ae/en/user/loyalty-club — the Aura
 *     loyalty programme: three tiers (Hello, Star, VIP), 6,000 tier points to
 *     reach Star for the following 12 months, rewards valid 90 days from
 *     issue, shared across Alshaya-operated brands in the UAE, Kuwait, Qatar,
 *     Saudi Arabia and Bahrain
 *   - https://en.wikipedia.org/wiki/Alshaya_Group — M.H. Alshaya Co.,
 *     registered in Kuwait, operates roughly 4,000 stores and ecommerce sites
 *     for nearly 50 retail brands across MENA, Turkey and Europe
 *   - https://www.trustpilot.com/review/bathandbodyworks.ae — TrustScore 2.3
 *     out of 5 from 11 reviews (very low volume)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const bathandbodyworks: BrandPage = {
  slug: 'bathandbodyworks',
  providerId: 'bathandbodyworks',
  metaTitle: 'Bath & Body Works UAE review 2026 — Gulf storefront, Aura',
  metaDescription:
    'An independent review of bathandbodyworks.ae, the Gulf franchise run by Alshaya: the range, the Aura loyalty tiers, and what the return policy excludes.',
  intro:
    'Bathandbodyworks.ae is not run by Bath & Body Works, Inc. It is the Gulf franchise of the fragrance and body-care chain, operated by Kuwait-based M.H. Alshaya Co. across the UAE and neighbouring markets. The products carry the same name, but the loyalty scheme, returns process, delivery terms and customer service sit entirely with the regional operator, not with the US parent brand.',
  about: [
    'Bath & Body Works was founded in the US in 1990 and became an independent public company in 2021. Its presence in the Gulf, however, has run since 2010 through a franchise agreement with M.H. Alshaya Co., a Kuwait-registered retail operator that runs roughly 4,000 stores and ecommerce sites across nearly 50 brands in the Middle East, North Africa, Turkey and Europe. Bathandbodyworks.ae is Alshaya’s storefront, not a subsidiary of the US company.',
    'The catalogue is the recognisable one: fragrance mists, lotions and body care, hand soaps, and home fragrance and candles, sold online with delivery across the UAE. Because Alshaya, not Bath & Body Works Inc., sets local terms, ranges and promotional cycles here can lag behind or simply differ from whatever the US site is running at any given time, so a US promo code or seasonal collection is not something to expect to find live on the Gulf storefront on the same schedule.',
    'Loyalty runs through Aura, an Alshaya-wide points programme rather than a Bath & Body Works-specific scheme — the same Aura account earns and spends across other Alshaya-run brands in the region, from fashion to food service. It has three tiers, Hello, Star and VIP, reached by accumulating tier points, and issued rewards expire 90 days after they land in the account, so unused points and vouchers do not sit indefinitely waiting to be redeemed on some future order.',
  ],
  facts: [
    { label: 'Gulf franchise operator', value: 'M.H. Alshaya Co.' },
    { label: 'Franchise trading since', value: '2010 (Gulf launch)' },
    { label: 'Loyalty programme', value: 'Aura (Alshaya-wide)' },
    { label: 'Returns', value: 'Receipt required, unused' },
  ],
  plans: {
    title: 'What Aura membership and delivery actually cost',
    note: 'Aura is free to join and spans multiple Alshaya brands, not just this one — the numbers below describe the tier structure, not a subscription price.',
    items: [
      {
        name: 'Aura Hello',
        price: 'Free to join',
        detail:
          'Entry tier, earned automatically on sign-up. No purchase required to open an account.',
      },
      {
        name: 'Aura Star',
        price: '6,000 tier points',
        detail:
          'Reached by accumulating tier points from purchases; Star status holds for the following 12 months.',
        pick: true,
      },
      {
        name: 'Aura VIP',
        price: 'Higher tier-point threshold',
        detail:
          'Top tier for the heaviest spenders across Alshaya’s brands, with the deepest access to offers and events.',
      },
      {
        name: 'Standard delivery',
        price: 'Free above a stated order threshold',
        detail:
          'Orders under the site’s current threshold pay a delivery fee shown at checkout; the exact cut-off moves with promotions.',
      },
    ],
  },
  pros: [
    {
      title: 'Aura points work across dozens of other Alshaya brands',
      body: 'Because Aura is Alshaya’s group-wide programme, points and rewards earned here can be used at other Alshaya-run retailers in the region, not locked to fragrance and body-care purchases alone.',
    },
    {
      title: 'Local delivery and receipts, not a cross-border US order',
      body: 'Buying through the Gulf storefront means UAE-based delivery and support instead of relying on a US import, cutting the shipping time and customs uncertainty that come with ordering from bathandbodyworks.com.',
    },
    {
      title: 'Full-line catalogue: fragrance, body care and home',
      body: 'The range spans body mists and lotions through to hand soaps and home candles — the complete category set the brand is known for, not a trimmed regional selection.',
    },
    {
      title: 'Free entry-level loyalty tier',
      body: 'Aura Hello costs nothing and requires no purchase to join, so the loyalty programme is available from the first order rather than gated behind a spend threshold.',
    },
  ],
  cons: [
    {
      title: 'Used personal-care and fragrance items cannot be exchanged',
      body: 'Once a fragrance or personal-care product has been used, the storefront will not accept it for exchange, citing regional product-safety rules — normal for this category, but worth knowing before opening a new scent.',
    },
    {
      title: 'No stated day-limit for returns, and a receipt is mandatory',
      body: 'The published terms describe requiring a receipt and an unused, undamaged item, but do not state a clear return-window length. Without a defined cut-off, it is worth confirming the current window before assuming standard timing.',
    },
    {
      title: 'Very thin public review record',
      body: 'Bathandbodyworks.ae carries a Trustpilot TrustScore of 2.3 out of 5, but from only 11 reviews — too small a sample to treat as a reliable signal either way.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.3, note: 'only 11 reviews — a very small sample' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite across range, loyalty terms and delivery, weighed against the thin review record',
    },
  ],
  bestFor: [
    'UAE and Gulf shoppers who want local delivery instead of a US cross-border order',
    'Anyone already collecting Aura points at other Alshaya-run stores in the region',
    'Buyers who want the full fragrance-and-home-candle range in one order',
    'Shoppers happy to join a free loyalty tier from their first purchase',
  ],
  notFor: [
    'Anyone expecting US bathandbodyworks.com pricing, promotions or return terms',
    'Buyers who want a fragrance they can return once it has been opened and tried',
    'Shoppers who need a clearly published return-window length before ordering',
  ],
  faq: [
    {
      q: 'Is bathandbodyworks.ae the same company as bathandbodyworks.com?',
      a: 'No. The UAE site is run by M.H. Alshaya Co. under franchise, a separate Kuwait-registered retail operator, not Bath & Body Works, Inc. in the US. Pricing, promotions, stock and policies are all set locally by Alshaya and will not necessarily match whatever the US site is currently running.',
    },
    {
      q: 'What is Aura, and is it specific to Bath & Body Works?',
      a: 'Aura is Alshaya’s shared loyalty programme, used across many of the roughly 50 brands the group operates in the region, not just this one store. Points and tier status carry over to other Alshaya-run stores, so a single Aura account can be used shopping fashion, food and beauty brands alike.',
    },
    {
      q: 'Can I return an opened fragrance or body-care product?',
      a: 'No. Used personal-care and fragrance items are excluded from exchange under the site’s stated terms, citing regional product-safety rules that apply across the category. Keep items unopened and unused until you are genuinely sure about them, rather than assuming you can send an opened bottle or spray back.',
    },
    {
      q: 'What do I need to make a return?',
      a: 'A receipt and an unused, undamaged item, returned to the nearest Bath & Body Works store in the region. The published terms do not state an exact number of days you have to do this, so it is worth confirming the current window directly with the store before you place an order.',
    },
    {
      q: 'How reliable is the Trustpilot rating for this storefront?',
      a: 'Treat it cautiously. The site carries a 2.3-out-of-5 TrustScore, but that figure comes from only 11 reviews, which is far too small a sample size to draw strong, reliable conclusions from either way, positive or negative, about what typical service quality actually looks like here.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'bathandbodyworks.ae',
}
