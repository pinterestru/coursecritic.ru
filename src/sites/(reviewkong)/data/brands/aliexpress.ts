/**
 * Brand page data for AliExpress (route: /brands/aliexpress).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://home.alibabagroup.com/en-US/about-alibaba-businesses-1747705938191581184
 *     — AliExpress as an Alibaba Group business, launched 2010
 *   - https://www.alidrop.co/blogs/what-is-aliexpress-choice and coverage at
 *     https://www.ad-hoc-news.de/boerse/news/ueberblick/aliexpress-choice-by-alibaba-group-flat-fee-shipping-lures-serial/69827790
 *     — AliExpress Choice (launched March 2023): flat-fee/free shipping,
 *     free returns and delivery-time guarantees on Choice-tagged listings
 *   - Buyer Protection refund terms (item not delivered on time, or arrives
 *     significantly different from the listing) — cross-checked across
 *     multiple current AliExpress-safety guides referencing the platform's own
 *     Buyer Protection page
 *   - https://digital-strategy.ec.europa.eu/en/news/commission-fines-aliexpress-eu550-million-breaching-digital-services-act
 *     (the European Commission's own digital-strategy site; the press-corner
 *     mirror at ec.europa.eu/commission/presscorner/detail/en/ip_26_1654 did
 *     not render on fetch) and https://www.jurist.org/news/2026/07/european-commission-fines-aliexpress-e550-million-for-breaching-digital-services-act/
 *     — the €550 million fine, announced 20 July 2026, for failing to
 *     diligently assess and reduce the risk of illegal, unsafe and
 *     counterfeit products (named examples: counterfeit clothing, unsafe
 *     toys, hazardous cosmetics), inadequate brand-authorisation checks,
 *     flagged products staying listed for weeks, and weak enforcement of
 *     seller penalties; AliExpress has until 20 October 2026 to submit a
 *     compliance plan; the fine exceeds the €200 million the Commission
 *     fined Temu in May 2026 for comparable violations
 *   - https://www.trustpilot.com/review/www.aliexpress.com — rated "Poor",
 *     2.0/5 from around 187,000 reviews (page title as surfaced by search;
 *     direct fetch of the page is blocked)
 *   - AliExpress's Google Play listing ("AliExpress — Shopping App") — 4.33/5
 *     from around 16 million ratings, cross-checked across app-analytics
 *     aggregators
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * aliexpress.com before launch and before each campaign. Catalogue size and
 * seller counts are deliberately omitted — no figure could be confirmed
 * against a primary source in this pass. The EU fine is recent and
 * consequential: check for an update (AliExpress's compliance response is due
 * 20 October 2026) before this page goes live after that date.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const aliexpress: BrandPage = {
  slug: 'aliexpress',
  providerId: 'aliexpress',
  metaTitle: 'AliExpress review 2026 — Choice, refunds, the EU fine',
  metaDescription:
    'An independent AliExpress review: what Choice actually changes about shipping and returns, how Buyer Protection refunds work, and the €550m EU fine to know about.',
  intro:
    'AliExpress is Alibaba Group’s consumer marketplace: single units, fixed prices, sellers mostly based in China, shipped to buyers worldwide. It is the retail sibling of Alibaba.com’s bulk-trade platform, built for anyone buying one thing rather than a container of them. The trade-off for low prices has always been shipping time and listing-quality variance, and in 2026 it also has to answer for a record European Union fine over unsafe and counterfeit goods.',
  about: [
    'Alibaba Group launched AliExpress in 2010 as a way to sell directly to consumers outside China, mostly connecting individual buyers with manufacturers and small merchants rather than the large trading houses that use Alibaba.com. It is a separate product from Alibaba.com in every practical sense: fixed listing prices instead of quoted bulk pricing, single-unit purchases instead of minimum order quantities, and checkout built for a one-off shopper rather than a business account.',
    'AliExpress Choice, launched in March 2023, is the platform’s answer to the criticism that used to define it: slow, unpredictable shipping. Choice-tagged listings carry flat-fee or free shipping, free returns and a stated delivery-time guarantee, backed by AliExpress’s own logistics rather than whatever the individual seller arranges. Non-Choice listings still exist across the catalogue and can still take weeks to arrive from China, so which tag a listing carries matters more on AliExpress than on most marketplaces.',
    'Buyer Protection is the baseline guarantee on every order: a refund if the item never arrives, or arrives significantly different from the listing. In July 2026 the European Commission fined AliExpress €550 million — more than Temu’s €200 million fine two months earlier — for failing to reduce the risk of illegal and unsafe products such as counterfeit clothing, unsafe toys and hazardous cosmetics, citing weak brand-authorisation checks and flagged listings that stayed live for weeks. AliExpress must submit a compliance plan by October 2026, and that pressure is worth knowing about even outside the EU, since it points at the platform’s underlying moderation problem.',
  ],
  facts: [
    { label: 'Launched', value: '2010' },
    { label: 'Owner', value: 'Alibaba Group' },
    { label: 'Order model', value: 'Single units, fixed prices' },
    { label: 'EU DSA fine', value: '€550m (July 2026)' },
  ],
  plans: {
    title: 'What changes the price you actually pay',
    note: 'The listing badge matters more than any membership here — a Choice tag changes shipping cost, speed and the return process, and a lot of the catalogue still is not Choice.',
    items: [
      {
        name: 'Standard listing',
        price: 'Lowest sticker price, seller sets shipping',
        detail:
          'Shipping cost and speed vary by seller. Can be slow and unpredictable direct from China; check estimated delivery dates before buying anything time-sensitive.',
      },
      {
        name: 'AliExpress Choice',
        price: 'Flat-fee or free shipping, small premium over standard',
        detail:
          'Free returns and a stated delivery-time guarantee, fulfilled through AliExpress’s own logistics rather than the seller directly.',
        pick: true,
      },
      {
        name: 'Buyer Protection (all orders)',
        price: 'Included, no extra cost',
        detail:
          'Refund if the item never arrives or is significantly different from the listing. The baseline safety net regardless of Choice status.',
      },
      {
        name: 'Coins and app-only promotions',
        price: 'Small discounts, redeemable in-app',
        detail:
          'Gamified discount system layered on top of regular pricing. Worth using if you are already buying, not worth chasing on its own.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely the widest single-unit catalogue from Chinese sellers',
      body: 'Where Alibaba.com requires a bulk order, AliExpress sells the same manufacturing base one item at a time, at prices a marketplace built around Western supply chains rarely matches.',
    },
    {
      title: 'Choice fixed the platform’s oldest complaint',
      body: 'Flat or free shipping, free returns and a delivery-time guarantee turn the classic “ordered in March, arrived in June” AliExpress joke into an actual exception rather than the norm — on tagged listings.',
    },
    {
      title: 'Buyer Protection refunds are real and usable',
      body: 'Every order carries a baseline guarantee against non-delivery or a significantly wrong item, and disputes go through AliExpress rather than being the buyer’s problem to chase with the seller alone.',
    },
    {
      title: 'The app is genuinely well used and well rated',
      body: '4.33 stars on Google Play from around 16 million ratings. Most AliExpress shopping happens in the app, and it holds up at that scale.',
    },
  ],
  cons: [
    {
      title: 'A record EU fine over counterfeit and unsafe goods',
      body: 'The European Commission fined AliExpress €550 million in July 2026 — more than Temu’s €200 million fine two months earlier — citing counterfeit clothing, unsafe toys, hazardous cosmetics and listings that stayed live for weeks after being flagged.',
    },
    {
      title: 'Non-Choice listings can still be genuinely slow',
      body: 'A large share of the catalogue is not Choice-tagged, and those items still ship on the seller’s own timeline from China, sometimes taking weeks. Check the tag before assuming Choice-level shipping applies.',
    },
    {
      title: 'Trustpilot reputation is poor',
      body: 'Rated "Poor" at 2.0 out of 5 from roughly 187,000 reviews, dominated by delivery delays, listing-quality mismatches and refund friction on non-Choice orders.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.0, note: '~187,000 reviews, rated "Poor"' },
    { source: 'Google Play', value: 4.33, note: '~16m ratings on the Android app' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across catalogue breadth, Choice reliability and the EU compliance issue',
    },
  ],
  bestFor: [
    'Buyers who want single, low-cost items direct from Chinese manufacturers',
    'Anyone who checks for the Choice tag and sticks to it for anything time-sensitive',
    'Small, low-risk purchases where a few weeks’ wait is genuinely fine',
    'Shoppers comfortable using Buyer Protection if an order goes wrong',
  ],
  notFor: [
    'Anyone who needs guaranteed fast, predictable delivery on a non-Choice listing',
    'Buyers wanting bulk or wholesale quantities — that is Alibaba.com’s job, not this one',
    'Shoppers who weight platform trust and moderation heavily after the 2026 EU fine',
  ],
  faq: [
    {
      q: 'What does the AliExpress Choice tag actually change?',
      a: 'Choice-tagged listings carry flat-fee or free shipping, free returns and a stated delivery-time guarantee, fulfilled through AliExpress’s own logistics. Non-Choice listings ship on the individual seller’s own arrangement, which can be far slower.',
    },
    {
      q: 'What is the €550 million EU fine about?',
      a: 'In July 2026 the European Commission fined AliExpress under the Digital Services Act for failing to properly assess and mitigate the risk of illegal, unsafe and counterfeit products on the platform. AliExpress must submit a compliance plan by October 2026.',
    },
    {
      q: 'How does Buyer Protection work?',
      a: 'It refunds you if an order never arrives or turns out significantly different from the listing. It applies to every order, not just Choice-tagged ones, and disputes are handled through AliExpress rather than the seller alone.',
    },
    {
      q: 'Is AliExpress the same as Alibaba.com?',
      a: 'No, though both belong to Alibaba Group. AliExpress sells single units at fixed prices to individual consumers; Alibaba.com is a B2B platform built around minimum order quantities and negotiated bulk pricing.',
    },
    {
      q: 'Why is the Trustpilot score so low if millions of people shop here?',
      a: 'Review platforms skew toward complaints, and AliExpress’s mix of slow non-Choice shipping and listing-quality variance gives people plenty to complain about. A 2.0 rating reflects who bothers to leave a review more than typical order outcomes.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'aliexpress.com',
}
