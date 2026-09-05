/**
 * Brand page data for FirstCry (route: /brands/firstcry).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.firstcry.com/club/ — FirstCry Club membership pricing and
 *     tier benefits (3/6/12-month plans, discounted list prices, free
 *     shipping thresholds, Club Cash, birthday gift)
 *   - https://www.firstcry.com/m/club/faqs/benefits/ and
 *     https://www.firstcry.com/m/club/faqs/cancellation-policy/ — Club
 *     benefits detail and the no-cancellation rule on an activated membership
 *   - https://www.firstcry.com/returnpolicy — return windows (7 days most
 *     items, 2 days on birthday items, 48 hours on large furniture) and the
 *     category-wide exclusion list (diapers, wipes, feeding/formula, creams,
 *     lotions, medicine and more)
 *   - https://en.wikipedia.org/wiki/FirstCry and reporting around FirstCry’s
 *     August 2024 IPO (parent company Brainbees Solutions Ltd, listed BSE and
 *     NSE) — founded 2010 in Pune, 200,000+ items from 5,800+ brands as of
 *     December 2023, 900+ stores across 465 Indian cities, UAE launch 2019
 *     and Saudi Arabia 2022
 *   - https://www.trustpilot.com/review/www.firstcry.com — TrustScore 1.5 out
 *     of 5 from roughly 150 reviews, 88% one-star
 *   - Google Play listing for "FirstCry India - Baby & Kids" — 4.5 out of 5
 *     from over 1 million ratings
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const firstcry: BrandPage = {
  slug: 'firstcry',
  providerId: 'firstcry',
  metaTitle: 'FirstCry review 2026 — Club pricing, returns, store network',
  metaDescription:
    'An independent FirstCry review: what Club membership costs across its three tiers, which categories you can never return, and the store network behind it.',
  intro:
    'FirstCry is India’s largest baby, kids and maternity retailer by gross merchandise value, running as a listed public company since its 2024 IPO. It sells through firstcry.com, an app, and a store network of more than 900 outlets, with a separate presence in the UAE and Saudi Arabia. The paid Club membership and a hard line on hygiene-item returns are the two things worth understanding before you order.',
  about: [
    'FirstCry launched in Pune in 2010 and grew into India’s largest multi-channel platform for baby, kids and maternity products by gross merchandise value, listing more than 200,000 items from over 5,800 brands as of December 2023. Its parent company, Brainbees Solutions Ltd, listed on the BSE and NSE in August 2024. The business runs online and through a physical network of more than 900 stores across 465 Indian cities, including outlets under its Babyhug brand.',
    'Outside India, FirstCry expanded into the UAE in 2019 and Saudi Arabia in 2022, running as a separate regional operation with its own storefront and delivery rather than shipping cross-border from India. The core catalogue — diapering, feeding, toys, clothing, footwear, strollers, car seats and nursery furniture — carries across markets, but stock, pricing and delivery timing are all set locally, so what is in stock in Dubai will not always match what is in stock in Pune.',
    'FirstCry Club is the site’s paid loyalty tier, sold in 3, 6 and 12-month terms at a discount to a stated list price, and it stacks on top of the standard return policy rather than changing it: Club members get extra discounts, lower free-shipping thresholds and Club Cash on top of every order, but the same return rules and category exclusions apply to Club members and non-members alike, with no special treatment either way.',
  ],
  facts: [
    { label: 'Founded', value: '2010, Pune' },
    { label: 'Catalogue', value: '200,000+ items' },
    { label: 'Store network', value: '900+ stores, 465 cities' },
    { label: 'Standard return window', value: '7 days (most items)' },
  ],
  plans: {
    title: 'How FirstCry Club membership is priced',
    note: 'Club is a discretionary paid membership, not a requirement to shop — and once activated it cannot be cancelled or refunded, so treat the term length as final before buying.',
    items: [
      {
        name: 'Club 3 months',
        price: 'around ₹259 (discounted from ₹399)',
        detail:
          'Entry tier: roughly 10% extra discount on eligible products, store coupons, and free shipping above a stated order minimum.',
      },
      {
        name: 'Club 6 months',
        price: 'around ₹511 (discounted from ₹799)',
        detail: 'Same core benefits as the 3-month plan with a larger bundle of store coupons.',
      },
      {
        name: 'Club 12 months',
        price: 'around ₹942 (discounted from ₹1,599)',
        detail:
          'The only tier with fully free shipping (down to a low order minimum), a birthday gift, double Club Cash, and free assembly on selected large items.',
        pick: true,
      },
      {
        name: 'Non-member',
        price: 'No membership fee',
        detail:
          'Full catalogue access and the same return policy as Club members, without the extra discount, coupon bundle or lowered shipping threshold.',
      },
    ],
  },
  pros: [
    {
      title: 'The India catalogue is genuinely the largest in the category',
      body: 'Over 200,000 items from more than 5,800 brands, backed by a public company’s balance sheet since the 2024 IPO — a scale independent baby-and-kids retailers do not match.',
    },
    {
      title: 'A real store network, not just a warehouse operation',
      body: 'More than 900 physical stores across 465 Indian cities mean an in-person option for sizing, returns and same-day purchases that pure online rivals cannot offer.',
    },
    {
      title: 'The Club 12-month tier is the one that actually pays off',
      body: 'Free shipping down to a low order minimum, a birthday gift, double Club Cash and free assembly on selected items make the annual plan noticeably better value than the shorter terms.',
    },
    {
      title: 'The mobile app rating is a genuine strength',
      body: 'The FirstCry India app holds a 4.5-out-of-5 rating on Google Play from more than a million ratings — a scale of positive feedback the website’s own review record does not reflect.',
    },
  ],
  cons: [
    {
      title: 'Public review sites are consistently negative',
      body: 'FirstCry.com carries a Trustpilot TrustScore of 1.5 out of 5 from roughly 150 reviews, with about 88% one-star — a pattern of delivery, refund and support complaints, not a handful of outliers.',
    },
    {
      title: 'Hygiene and consumable categories are never returnable',
      body: 'Diapers, wipes, bottles, feeding and formula products, creams, lotions and similar items are excluded from returns outright, whatever condition they arrive in — check the category before you buy, not after.',
    },
    {
      title: 'Club membership is non-cancellable once activated',
      body: 'You cannot cancel or get a refund on a Club membership after it is active, so a 12-month commitment is final even if you barely use the site again that year.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.5, note: '~150 reviews, around 88% one-star' },
    { source: 'Google Play', value: 4.5, note: '1M+ ratings on the FirstCry India app' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite weighing catalogue scale and the store network against the weak website review record',
    },
  ],
  bestFor: [
    'Parents in India who want the widest baby-and-kids catalogue in one place',
    'Shoppers who prefer trying an in-store return over a mail-in one',
    'Frequent buyers who will use a full year of free shipping and Club Cash',
    'Anyone comparing FirstCry’s app experience against its website',
  ],
  notFor: [
    'Buyers wanting to return an opened diaper pack, formula tin or lotion',
    'Anyone unwilling to commit to a non-refundable Club term',
    'Shoppers outside India, the UAE and Saudi Arabia — coverage stops there',
  ],
  faq: [
    {
      q: 'Is FirstCry Club worth paying for?',
      a: 'The 12-month tier is the one with a real case: free shipping down to a low order minimum, a birthday gift, double Club Cash and free assembly on selected items. The 3 and 6-month tiers offer less relative value, since their shipping perk still requires a minimum order.',
    },
    {
      q: 'Can I cancel Club membership and get a refund?',
      a: 'No. FirstCry’s own terms state plainly that once a Club membership has been activated, it cannot be cancelled or refunded, whatever the reason. Decide on the term length carefully before paying, since a 12-month plan is a genuine 12-month commitment with no way back out of it.',
    },
    {
      q: 'What can I never return to FirstCry?',
      a: 'Diapers, wipes, cloth nappies, bottles and feeding accessories, baby food and formula, creams, lotions, oils, powders and several other consumable or hygiene categories are excluded from returns regardless of condition, even if the item arrives unopened and completely unused in its original packaging.',
    },
    {
      q: 'How long do I have to return a normal item?',
      a: 'Seven days from delivery for most products. Birthday-category items get a shorter two-day window, and large furniture must be returned within 48 hours of delivery. Clothing and footwear instead follow whatever window is stated on that specific product’s page, so check before assuming the standard seven days applies.',
    },
    {
      q: 'Does FirstCry operate outside India?',
      a: 'Yes, in a limited way: it launched in the UAE in 2019 and Saudi Arabia in 2022, running as separate regional storefronts with their own stock and delivery. Outside India, the UAE and Saudi Arabia, FirstCry does not currently sell or ship to customers at all.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'firstcry.com',
}
