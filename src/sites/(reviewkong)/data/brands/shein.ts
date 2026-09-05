/**
 * Brand page data for SHEIN (route: /brands/shein).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/Shein — founding (Nanjing, 2008), Singapore
 *     HQ, business overview
 *   - https://www.sheingroup.com/process — the on-demand, small-batch
 *     manufacturing model
 *   - https://us.shein.com/SHEIN-CLUB-TERMS-AND-CONDITIONS-a-1438.html — SHEIN
 *     Club membership terms, pricing and tier structure
 *   - https://www.consumeraffairs.com/news/shein-return-policy-decoded-the-fees-deadlines-and-exceptions-to-know-082126.html
 *     — the 30-day window, free first return, $7.99 fee on further returns,
 *     no exchange service
 *   - https://www.france24.com/en/france/20260629-french-parliament-passes-fast-fashion-bill-targeting-shein-and-temu
 *     and https://www.businessoffashion.com/briefings/sustainability/what-frances-anti-fast-fashion-law-means-for-shein/
 *     — France’s 2026 per-item malus and the planned 2027 advertising ban
 *   - https://www.trustpilot.com/review/www.shein.com — rating and volume (the
 *     page itself blocks direct fetches with HTTP 403; the 3.8/353K figure is
 *     corroborated by three independent search snippets, including the
 *     star-percentage breakdown, which sums to exactly 100%)
 *   - https://apps.apple.com/us/app/shein-shopping-online/id878577184 — App
 *     Store rating and volume (opened directly)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const shein: BrandPage = {
  slug: 'shein',
  providerId: 'shein',
  metaTitle: 'SHEIN review 2026 — pricing, returns, and the France fee',
  metaDescription:
    'An independent SHEIN review: how the on-demand production model keeps prices low, what SHEIN Club actually buys you, and the new France fast-fashion fee shoppers there will notice.',
  intro:
    'SHEIN built the largest fast-fashion catalogue on the internet by manufacturing in small batches and scaling up only what sells. That is why the range refreshes daily and why quality varies wildly between two items in the same order. Shipping reaches most of the world, returns are workable if you read the terms, and 2026 brought the first serious regulatory pushback the company has faced.',
  about: [
    'SHEIN started in Nanjing in 2008, initially reselling generic apparel before pivoting to its own manufactured range under the SheInside name, later shortened to SHEIN in 2015. The company is now headquartered in Singapore, with logistics and regional offices across the US, Mexico, Brazil, Europe and the UAE, while manufacturing remains concentrated in China alongside newer hubs in Vietnam, India and Bangladesh.',
    'The mechanism behind the low prices is production, not just labour cost. New designs launch in runs of a few hundred units; SHEIN’s systems track how fast a style sells and only reorder the ones that move. That keeps unsold stock down and turnover fast, which is also why the catalogue looks endless and rotates constantly — you are seeing live inventory decisions, not a curated collection.',
    'The trade-off shoppers report is consistency. Because thousands of small manufacturers are producing to the same on-demand model, fabric weight, sizing and stitching vary between styles and sometimes between colourways of the same style. SHEIN ships to roughly 220 countries and regions, which is the scale that lets it undercut most rivals, but it also means quality control is inherently harder to standardise than at a retailer with a fixed supplier list.',
  ],
  facts: [
    { label: 'Founded', value: '2008, Nanjing' },
    { label: 'Headquarters', value: 'Singapore' },
    { label: 'Ships to', value: '220+ countries' },
    { label: 'Standard returns', value: '30 days, first free' },
  ],
  plans: {
    title: 'How the pricing and fees work',
    note: 'The advertised price is only part of the cost: a second return from the same order carries a flat fee, and France-bound orders now carry a rising per-item eco-fee under 2026 law.',
    items: [
      {
        name: 'Shop without SHEIN Club',
        price: 'Pay per order, no membership',
        detail:
          'The default way to buy. No subscription, no points to track, and no discount tier to qualify for — you pay the listed price and use the standard return terms.',
        pick: true,
      },
      {
        name: 'SHEIN Club',
        price: 'around $6.99 per quarter or $19.99 per year',
        detail:
          'A paid tier giving roughly 5% off non-sale items, bonus points on every order, and priority refund handling. Only pays for itself if you order often.',
      },
      {
        name: 'Extra returns',
        price: '$7.99 flat fee per additional return',
        detail:
          'The first return on an order is free via USPS and can bundle several items. Any further return from that same order costs a flat fee.',
      },
      {
        name: 'Orders shipped to France',
        price: 'An added per-item fee, rising each year',
        detail:
          'France’s 2026 anti-fast-fashion law adds a penalty-style eco-fee to items sold by SHEIN, capped at half the item’s price and scheduled to rise annually through 2030.',
      },
    ],
  },
  pros: [
    {
      title: 'The catalogue never stops moving',
      body: 'Small-batch production means thousands of new styles appear continuously rather than in seasonal drops. If a look exists anywhere in fast fashion, SHEIN has a version of it within days.',
    },
    {
      title: 'One free return per order, no argument',
      body: 'The first return ships free via USPS and can include every eligible item from that order in one parcel. Most competitors charge from the first return.',
    },
    {
      title: 'The app itself is well liked',
      body: 'A 4.7-star rating from 3.4 million App Store ratings is a large, consistent sample. Whatever shoppers think of the clothes, the buying experience is not the complaint.',
    },
    {
      title: 'Shipping reach few retailers match',
      body: 'Around 220 countries and regions are served directly. For shoppers outside the US and Europe, SHEIN is often the only fast-fashion catalogue that reaches them at all.',
    },
  ],
  cons: [
    {
      title: 'Sizing and quality are a lottery',
      body: 'Because thousands of small manufacturers each produce short runs, fit and fabric weight vary between styles and sometimes between colours of the same style. Trustpilot’s 3.8-star average sits well below the App Store score for exactly this reason.',
    },
    {
      title: 'No exchanges, only return-and-reorder',
      body: 'Got the wrong size? You return the item for a refund and place a fresh order — there is no direct exchange path, which adds a second shipping wait for anything that does not fit.',
    },
    {
      title: 'France now taxes and restricts the model directly',
      body: 'A 2026 law adds a rising per-item fee for France-bound orders and bans SHEIN from advertising there from 2027, with named enforcement against exactly this business model.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 3.8,
      note: 'very high volume, around 350,000 reviews, rated “Great” despite quality complaints',
    },
    { source: 'App Store (iOS)', value: 4.7, note: '3.4 million ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite across price, breadth, returns and quality consistency',
    },
  ],
  bestFor: [
    'Shoppers who want the widest, cheapest catalogue and treat pieces as short-lived',
    'Buyers happy to return everything from one order in a single free parcel',
    'Frequent shoppers who will actually earn back the SHEIN Club membership cost',
    'Anyone outside France, where the new fee and ad restrictions do not apply',
  ],
  notFor: [
    'Anyone who wants to exchange a wrong size rather than return and reorder',
    'Buyers who need predictable sizing and construction from one order to the next',
    'Shoppers uncomfortable buying from the brand now most targeted by fast-fashion regulation',
  ],
  faq: [
    {
      q: 'Does SHEIN ship to my country?',
      a: 'Almost certainly — SHEIN sells into roughly 220 countries and regions, more than most competitors. A handful of markets have restrictions or a separate storefront, so check at checkout rather than assuming full access.',
    },
    {
      q: 'Are SHEIN returns actually free?',
      a: 'The first return from an order is free via USPS and can include multiple items. Make a second return from the same order and SHEIN deducts a flat $7.99 fee from the refund. There is no exchange option — you return for a refund and reorder.',
    },
    {
      q: 'Is SHEIN Club worth joining?',
      a: 'Only if you order frequently. It costs around $6.99 a quarter, gives roughly 5% off non-sale items plus bonus points and priority refunds. Occasional shoppers will not recoup the fee before it renews.',
    },
    {
      q: 'What changed with the new France law?',
      a: 'A 2026 law adds a rising per-item fee to SHEIN and Temu orders shipped within France, capped at half the item’s price, and bans SHEIN from advertising there from January 2027. It does not apply outside France.',
    },
    {
      q: 'Is SHEIN safe to buy from?',
      a: 'Its Trustpilot score of 3.8 and heavily used App Store rating of 4.7 both sit in credible ranges, but the recurring complaint across both is inconsistent sizing and fabric quality rather than fraud or non-delivery.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'shein.com',
}
