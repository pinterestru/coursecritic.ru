/**
 * Brand page data for Media Expert (route: /brands/mediaexpert).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.mediaexpert.pl/zwroty and
 *     https://www.mediaexpert.pl/reklamacja — 14-day return window, buyer-paid
 *     return shipping, statutory 2-year rękojmia
 *   - https://www.mediaexpert.pl/s,o-firmie and reporting on TERG S.A.
 *     (Wirtualne Media, the Grzebita family ownership) — ownership, founding,
 *     store count
 *   - https://www.mediaexpert.pl/lp,zakupy-na-raty and
 *     https://www.mediaexpert.pl/lp,zakupy-na-raty-faq — 0% RRSO instalment terms
 *     and partner banks
 *   - https://pl.trustpilot.com/review/www.mediaexpert.pl — rating and review
 *     volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const mediaexpert: BrandPage = {
  slug: 'mediaexpert',
  providerId: 'mediaexpert',
  metaTitle: 'Media Expert review 2026 — 0% RRSO, delivery, returns',
  metaDescription:
    'An independent review of Media Expert, Poland’s largest electronics chain: how 0% RRSO instalments, next-day delivery and the 14-day return window work.',
  intro:
    'Media Expert is TERG S.A.’s electronics chain, Poland’s largest, running mediaexpert.pl alongside roughly 650 physical stores. It sells only within Poland, in Polish, with no international shipping, worth stating plainly for any reader based outside that market. The real pull is a wide 0% RRSO instalment network and a store footprint big enough to return an online order to in person.',
  about: [
    'TERG S.A. began as a small household-appliance retailer in Złotów in the early 1990s under founder Teresa Grzebita, rebranding to Media Expert in 2002 and moving online with the launch of its e-commerce operation in 2007. The Grzebita family still controls the company today, which now runs around 650 stores across roughly 450 Polish towns and cities alongside mediaexpert.pl, making it the country’s largest dedicated electronics retail chain by store count.',
    'The two features that actually define the buying experience are instalment financing and delivery speed. 0% RRSO instalment plans, run through partner banks including Santander Consumer Bank, Alior, Credit Agricole, Millennium and BNP Paribas, cover eligible items up to 40 instalments with a credit decision returned in minutes, though the 0% rate applies only to specifically promoted lines rather than every product in the catalogue. On delivery, Media Expert offers free shipping above a 99 zł order threshold, next-day delivery, and hourly click-and-collect in store on items already in stock.',
    'Media Expert operates only in Poland: there is no English-language storefront and no shipping outside the country at all. Returns run for 14 days from delivery, with the buyer covering return shipping, on top of which Polish and EU consumer law guarantees a separate two-year rękojmia against defects. Trustpilot reviews for the site run heavily polarised, with a majority of one-star ratings sitting alongside a large share of five-star ones.',
  ],
  facts: [
    { label: 'Parent company', value: 'TERG S.A.' },
    { label: 'Trading since', value: 'Early 1990s' },
    { label: 'Stores', value: '~650 stores, ~450 cities' },
    { label: 'Returns window', value: '14 days' },
  ],
  plans: {
    title: 'What it costs to buy',
    note: 'Media Expert rarely beats marketplace sellers on bare list price; free delivery above 99 zł, wide 0% instalments and in-store returns are where it earns the difference back for buyers.',
    items: [
      {
        name: 'Standard order',
        price: 'Free delivery over 99 zł, paid fee below it',
        detail:
          'Below the 99 zł threshold a delivery fee applies on top of the item price; next-day delivery and hourly in-store pickup are both available on items already sitting in stock.',
      },
      {
        name: 'Raty 0% (0% RRSO instalments)',
        price: '0% RRSO, up to 40 instalments on promoted lines',
        detail:
          'Financed through partner banks including Santander Consumer Bank, Alior and Credit Agricole, with a credit decision typically returned in minutes; only specifically promoted SKUs actually carry the 0% rate.',
        pick: true,
      },
      {
        name: '14-day returns plus statutory warranty',
        price: 'Free to start, buyer pays return shipping',
        detail:
          'The 14-day change-of-mind window sits alongside a separate two-year rękojmia against defects, guaranteed under Polish and EU consumer law entirely regardless of the store’s own voluntary return policy.',
      },
    ],
  },
  pros: [
    {
      title: 'Instalment financing is genuinely widespread here',
      body: '0% RRSO plans run up to 40 months through five separate partner banks, not a rare promotional gimmick limited to a small handful of flagship products at any given time.',
    },
    {
      title: 'A dense store network backs up the online store',
      body: 'Around 650 stores spread across roughly 450 cities mean an online order can usually be returned to a physical counter in person rather than posted back at the buyer’s own expense.',
    },
    {
      title: 'Delivery options beat a lot of EU competitors',
      body: 'Next-day delivery and hourly click-and-collect on items already in stock are both noticeably faster than the standard multi-day delivery windows common elsewhere across the region.',
    },
    {
      title: 'The statutory warranty sits apart from the return policy',
      body: 'A two-year rękojmia against defects applies regardless of the 14-day change-of-mind window, giving buyers a considerably longer backstop than the headline return period alone would suggest.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot skews heavily negative overall',
      body: 'Around 3.2 out of 5 across roughly 1,500 reviews, with close to 59% of them one-star; complaints cluster around defective units sold as new and slow complaint handling afterward.',
    },
    {
      title: 'Poland only, with no English-language storefront',
      body: 'Mediaexpert.pl does not ship internationally and offers no English-language version of the site at all, so it is not a realistic option for shoppers based outside Poland.',
    },
    {
      title: 'Return shipping cost falls on the buyer, not the store',
      body: 'Media Expert accepts returns within 14 days but the customer pays to send the item back themselves, and refunds in practice take five to seven working days rather than arriving instantly.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 3.2,
      note: '~1,500 reviews, polarised between one-star and five-star ratings',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite across instalment value, delivery speed and return terms',
    },
  ],
  bestFor: [
    'Shoppers within Poland who want a store nearby to return to',
    'Buyers who want 0% RRSO instalments on bigger purchases',
    'Anyone who values next-day delivery or hourly click-and-collect',
    'Buyers who want the statutory two-year warranty stated plainly, not buried',
  ],
  notFor: [
    'Anyone outside Poland — there is no international shipping or English UI',
    'Buyers who want to avoid paying for return shipping themselves',
    'Anyone put off by a review record with a heavy one-star skew',
  ],
  faq: [
    {
      q: 'Does Media Expert ship outside Poland?',
      a: 'No. Mediaexpert.pl sells and delivers within Poland only, with no English-language storefront available at all, which means it is not really a practical option for shoppers who happen to be based elsewhere in Europe or further afield than that, whatever the local price looks like.',
    },
    {
      q: 'How does the 0% RRSO instalment plan work?',
      a: 'Eligible purchases can be split into up to 40 interest-free instalments through partner banks such as Santander Consumer Bank, Alior and Credit Agricole, with a credit decision typically given within minutes, though only specifically promoted products actually carry that 0% rate.',
    },
    {
      q: 'What is the difference between the 14-day return and the warranty?',
      a: 'The 14-day window is a voluntary change-of-mind return that Media Expert chooses to offer on top of its legal obligations. Separately, Polish and EU law guarantees a two-year rękojmia against defects, which applies regardless of the store’s own change-of-mind policy or its stated length.',
    },
    {
      q: 'Who pays for return shipping?',
      a: 'The buyer does. Media Expert processes the refund once the item is received back at its warehouse, typically within five to seven working days, but it does not cover or reimburse the cost of sending the item back at all.',
    },
    {
      q: 'Can I return an online order to a physical store?',
      a: 'Yes. Products bought online can be returned to any Media Expert store regardless of how they were originally delivered, which is one of the genuine practical advantages of buying from a large chain with roughly 650 physical locations spread across the country.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'mediaexpert.pl',
}
