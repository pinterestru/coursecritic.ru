/**
 * Brand page data for Bloomingdale's Gulf (route: /brands/bloomingdales).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://gulfnews.com/business/al-tayer-group-secure-to-open-bloomingdales-in-the-dubai-mall-1.132456
 *     and https://www.mubadala.com/en/news/al-tayer-group-and-gulf-related-sign-landmark-agreement-to-bring-macys-and-bloomingdales-to-abu
 *     — Al Tayer Insignia (part of Al Tayer Group) operates Bloomingdale's in
 *     the Gulf under a licensing agreement with Macy's, Inc.; first
 *     international Bloomingdale's opened at The Dubai Mall, 1 February 2010
 *   - https://bloomingdales.ae/aboutus.html — markets served (UAE stores at
 *     The Dubai Mall, one Kuwait store at 360 Mall; online serves UAE, Kuwait
 *     and Saudi Arabia); bloomingdales.ae e-commerce platform launched 2020
 *   - https://bloomingdales.ae/return.html and search-summarised results for
 *     Bloomingdale's UAE's own returns/terms pages — 30-day free "no
 *     questions" returns and exchanges, proof of purchase required, beauty,
 *     lingerie, underwear, earrings and furniture excluded from exchange,
 *     3–5 day refund processing or an instant in-store refund, damaged/wrong
 *     items resolved within 24 hours
 *   - Search-summarised results referencing bloomingdales.ae's shipping and
 *     Price Promise pages — 2-hour/same-day Dubai delivery free over 500 AED
 *     (else 25 AED), Price Promise price-matches the same item within 30 days
 *     of order date across AED/SAR/OMR/KWD/BHD/QAR
 *   - Trustpilot search-result page title for bloomingdales.ae ("rated
 *     'Poor', 2.7/5", ~9 reviews) and the Bloomingdale's Middle East Google
 *     Play listing (2.15/5 from ~370 ratings) — direct fetch of
 *     trustpilot.com returns 403; both figures are taken from page titles and
 *     listing summaries as surfaced by search, not opened directly
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * bloomingdales.ae before launch and before each campaign. The Trustpilot
 * sample (~9 reviews) is very small — treat that rating as indicative, not
 * statistically solid. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const bloomingdales: BrandPage = {
  slug: 'bloomingdales',
  providerId: 'bloomingdales',
  metaTitle: 'Bloomingdale’s Gulf review 2026 — is it the US site?',
  metaDescription:
    'An independent review of bloomingdales.ae: why it is a separate, Al Tayer-licensed Gulf storefront, how delivery and the 30-day return policy work, and where ratings are weak.',
  intro:
    'Bloomingdale’s Gulf is not the US retailer with a regional domain bolted on. It is bloomingdales.ae, run by Al Tayer Insignia under licence from Macy’s, Inc., with its own stores in Dubai and Kuwait, its own online catalogue and its own return rules. The Dubai Mall store was the first Bloomingdale’s ever opened outside the United States, in 2010; the online business followed a decade later, in 2020.',
  about: [
    'Al Tayer Group, through Al Tayer Insignia, holds the licence to operate Bloomingdale’s across the Gulf. The Dubai Mall flagship opened on 1 February 2010 as the brand’s first store outside the US, followed by a second Dubai Mall location for home goods and a store in Kuwait at 360 Mall. bloomingdales.ae, the bilingual e-commerce platform, launched in 2020 and now serves the UAE, Kuwait and Saudi Arabia — a narrower footprint than the brand name suggests, and worth checking before anyone outside those three countries expects to shop or return anything here.',
    'Because it operates under licence rather than as a direct subsidiary, the catalogue, pricing currency and policies are all set locally rather than mirrored from bloomingdales.com. Delivery in Dubai runs to 2-hour and same-day slots, free above 500 AED and 25 AED below that threshold; Kuwait and Saudi Arabia orders move on longer express timelines. Price Promise lets a shopper claim a price drop on the same item within 30 days of ordering, quoted across the region’s several currencies (AED, SAR, OMR, KWD, BHD, QAR).',
    'Returns are a genuine 30-day, no-questions window with proof of purchase, and dropping an online order at a physical store gets an instant refund instead of the standard 3–5 day processing. The exclusion list is worth reading before buying: beauty products, lingerie, underwear, earrings and furniture cannot be exchanged once opened or delivered. Damaged or wrong items are meant to be resolved within 24 hours, which is a specific, checkable commitment rather than a vague promise.',
  ],
  facts: [
    { label: 'Operator', value: 'Al Tayer Insignia (licence)' },
    { label: 'Markets', value: 'UAE, Kuwait, Saudi Arabia' },
    { label: 'Returns', value: '30 days, free, no questions' },
    { label: 'Dubai delivery', value: 'Free ≥500 AED, else 25 AED' },
  ],
  plans: {
    title: 'How delivery, returns and Price Promise work',
    note: 'This is a licensed regional storefront, not a mirror of the US site — currencies, delivery zones and the return window are all set for the Gulf specifically.',
    items: [
      {
        name: '2-hour / same-day delivery (Dubai)',
        price: 'Free over 500 AED, else 25 AED',
        detail:
          'Covers Dubai on eligible categories including select beauty and fashion. Next-day delivery reaches the rest of the UAE.',
      },
      {
        name: 'Kuwait & Saudi Arabia delivery',
        price: 'Express shipping, fee set at checkout',
        detail:
          'The other two markets the online store serves. Delivery windows run longer than the Dubai 2-hour and same-day slots.',
      },
      {
        name: '30-day returns',
        price: 'Free, no-questions return',
        detail:
          'Beauty, lingerie, underwear, earrings and furniture are excluded from exchange. In-store drop-off gets an instant refund instead of a 3–5 day wait.',
        pick: true,
      },
      {
        name: 'Price Promise',
        price: 'Price-matched within 30 days',
        detail:
          'Claim a price drop on the identical item, same currency, within 30 days of your order date. Applies across the AED/SAR/OMR/KWD/BHD/QAR currencies the site bills in.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuine, licensed Bloomingdale’s, not a lookalike',
      body: 'Al Tayer Insignia operates it under an actual licence from Macy’s, Inc. — the same group that has run Dubai’s Bloomingdale’s stores since the brand’s first international launch in 2010.',
    },
    {
      title: 'Fast delivery inside Dubai',
      body: '2-hour and same-day slots are free above 500 AED, with next-day coverage across the rest of the UAE — a real logistics advantage over most international shipping into the region.',
    },
    {
      title: 'A genuinely no-questions 30-day return window',
      body: 'Free returns with proof of purchase, plus the option of an instant in-store refund instead of waiting the standard 3–5 processing days.',
    },
    {
      title: 'Price Promise is a specific, usable guarantee',
      body: 'Claim a price drop on the same item within 30 days of ordering, across the region’s several billing currencies, rather than a vague "best price" claim.',
    },
  ],
  cons: [
    {
      title: 'This is not the US site, and the differences are real',
      body: 'Catalogue, pricing, currency and return rules are all set locally under the Al Tayer licence. Anyone expecting bloomingdales.com’s range or policies here will be disappointed.',
    },
    {
      title: 'Public ratings are weak',
      body: 'Trustpilot rates bloomingdales.ae "Poor" at 2.7 out of 5, albeit from only around nine reviews, and the Middle East app sits at 2.15 out of 5 from roughly 370 Google Play ratings.',
    },
    {
      title: 'Whole categories cannot be exchanged',
      body: 'Beauty products, lingerie, underwear, earrings and furniture are excluded from the exchange policy once received, regardless of the general 30-day window.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 2.7,
      note: 'rated "Poor"; a very small sample, roughly 9 reviews',
    },
    { source: 'Google Play', value: 2.15, note: '~370 ratings on the Middle East app' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite weights the licensed operator, fast Dubai delivery and Price Promise guarantee above a thin and poor public-review sample',
    },
  ],
  bestFor: [
    'Shoppers actually based in the UAE, Kuwait or Saudi Arabia',
    'Dubai buyers who want 2-hour or same-day delivery on eligible items',
    'Anyone who values a genuine 30-day no-questions return window',
    'Shoppers who will use Price Promise to claim back a price drop',
  ],
  notFor: [
    'Anyone outside the UAE, Kuwait or Saudi Arabia expecting to shop or return here',
    'Shoppers assuming the catalogue or policies match bloomingdales.com',
    'Anyone who weighs public app and review ratings heavily before buying',
  ],
  faq: [
    {
      q: 'Is bloomingdales.ae the same company as the US Bloomingdale’s?',
      a: 'No. It is operated by Al Tayer Insignia under a licensing agreement with Macy’s, Inc. The Dubai Mall store, opened in 2010, was the first Bloomingdale’s outside the US, but the Gulf business runs its own catalogue, pricing and policies.',
    },
    {
      q: 'Which countries does bloomingdales.ae actually deliver to?',
      a: 'The UAE, Kuwait and Saudi Arabia. Dubai gets 2-hour and same-day delivery on eligible items; Kuwait and Saudi Arabia orders move on longer express timelines.',
    },
    {
      q: 'What is the return policy?',
      a: 'Thirty days from delivery, free, no questions asked, with proof of purchase. Beauty, lingerie, underwear, earrings and furniture cannot be exchanged. Returning in person at a store gets an instant refund; online-initiated returns process in 3–5 days.',
    },
    {
      q: 'What does Price Promise actually guarantee?',
      a: 'If the same item drops in price within 30 days of your order, you can claim the difference. It is billed in the region’s own currencies — AED, SAR, OMR, KWD, BHD and QAR — not in US dollars.',
    },
    {
      q: 'Why are the app and Trustpilot ratings so low if the store is well established?',
      a: 'The public sample is small and skews toward complaints, as with most retailer review pages. The Trustpilot score comes from roughly nine reviews and the Google Play rating from around 370 — read the current reviews yourself before treating either as definitive.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'bloomingdales.ae',
}
