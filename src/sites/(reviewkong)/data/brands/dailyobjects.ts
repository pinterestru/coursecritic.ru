/**
 * Brand page data for DailyObjects (route: /brands/dailyobjects).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.dailyobjects.com/about-us — founding year (via copyright
 *     line), artisan-manufacturing claim, product categories
 *   - https://yourstory.com/companies/dailyobjects and
 *     https://tracxn.com — founders, Gurugram HQ, funding raised
 *   - https://www.dailyobjects.com/shipping-policy — shipping fee threshold
 *     and flat COD/low-order charge
 *   - https://www.dailyobjects.com/return-replacement-and-refund-policy —
 *     30-day return window, exclusions, refund timing
 *   - https://apps.apple.com/in/app/dailyobjects/id1141900369 — App Store
 *     rating and review count
 *   - https://www.trustpilot.com/review/dailyobjects.com — rating and the
 *     small review volume on that profile
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const dailyobjects: BrandPage = {
  slug: 'dailyobjects',
  providerId: 'dailyobjects',
  metaTitle: 'DailyObjects review 2026 — cases, returns, shipping cost',
  metaDescription:
    'An independent DailyObjects review: what the tech-accessory catalogue covers, the 30-day return window, and why ratings differ sharply by platform.',
  intro:
    'DailyObjects is an Indian design brand for phone cases, laptop sleeves, bags and desk accessories, positioned as homegrown alternatives to imported tech accessories. It designs in-house and manufactures through a domestic artisan network rather than reselling imported or third-party stock. Reviews on its own App Store listing are consistently strong; independent review sites tell a noticeably rougher story about the same products.',
  about: [
    'Founded in 2012 and based in Gurugram, near Delhi, DailyObjects started by selling accessories from other brands before moving into designing and manufacturing its own range under its own name. The company describes production as the work of over 1,000 Indian artisans and makers, sourcing materials globally while building the products domestically — a "homegrown design" positioning rather than a private-label reseller putting its own name on stock made elsewhere by someone else.',
    'The catalogue centres on phone cases and covers, laptop sleeves, bags and wallets, watch straps, wireless chargers and desk organisers, plus a corporate-gifting line for bulk orders aimed at businesses. DailyObjects has raised institutional funding, including a Series B round in 2024, from investors such as Seedfund, Unilazer Ventures and 360 One, putting it on notably firmer financial footing than a small independent accessories shop selling through a single marketplace listing.',
    'DailyObjects ships domestically across India from dailyobjects.com and internationally, to 180-plus countries, through a separate dailyobjects.us storefront with its own pricing and timelines. Free shipping applies to prepaid domestic orders above a stated rupee threshold, with a flat charge for low-value and cash-on-delivery orders below it — a fairly conventional Indian D2C shipping structure rather than anything unusual for the category, and worth knowing before checkout has any chance of surprising anyone.',
  ],
  facts: [
    { label: 'Founded', value: '2012' },
    { label: 'Headquarters', value: 'Gurugram, India' },
    { label: 'Returns', value: '30 days from delivery' },
    { label: 'Free shipping', value: 'Prepaid orders over ₹1,199' },
  ],
  plans: {
    title: 'How shipping and returns are priced',
    note: 'International orders route through a separate dailyobjects.us store with its own pricing, so the domestic figures below do not carry over automatically.',
    items: [
      {
        name: 'Prepaid orders over ₹1,199',
        price: 'Free shipping',
        detail:
          'Applies to domestic orders on dailyobjects.com paid online rather than on delivery.',
        pick: true,
      },
      {
        name: 'Smaller or cash-on-delivery orders',
        price: 'Flat ₹79 shipping charge',
        detail:
          'Applies to prepaid orders under the free-shipping threshold and to all COD orders regardless of value.',
      },
      {
        name: 'International orders',
        price: 'Set at checkout on dailyobjects.us',
        detail:
          'Shipped to 180-plus countries through the separate US-facing storefront, with its own rates and delivery timelines.',
      },
      {
        name: 'Returns and replacements',
        price: 'Free within 30 days for eligible items',
        detail:
          'Screen guards, notebooks, chargers, keychains and freebies are excluded from return; defective items on those categories still qualify for replacement within 7 days.',
      },
    ],
  },
  pros: [
    {
      title: 'Designs and manufactures its own products',
      body: 'Rather than reselling third-party accessories, DailyObjects designs in-house and manufactures through its own artisan network, which shows in more distinctive cases and sleeves than a typical marketplace listing.',
    },
    {
      title: 'A clear, dated return window',
      body: '30 days from delivery is a specific, checkable figure, and the refund-processing timeline (2-7 business days to the original payment method) is stated rather than left vague.',
    },
    {
      title: 'Institutional funding behind the brand',
      body: 'A 2024 Series B round from named investors is a concrete signal that this is a funded, ongoing business rather than a small operation that could disappear overnight.',
    },
    {
      title: 'A strong App Store track record',
      body: 'The DailyObjects iOS app carries a high rating across a large number of ratings, suggesting the mobile buying experience itself is generally well received by the people who use it most often.',
    },
  ],
  cons: [
    {
      title: 'Ratings swing hard depending on the platform',
      body: 'The App Store rating is strong, but Trustpilot and other independent review sites skew sharply more negative, with recurring complaints about product durability and slow resolution of defective-item claims.',
    },
    {
      title: 'Several accessory categories cannot be returned at all',
      body: 'Screen guards, chargers, notebooks and freebies are excluded from the standard return policy outright, and only qualify for a 7-day replacement window if genuinely defective.',
    },
    {
      title: 'Cash on delivery costs more than paying upfront',
      body: 'COD orders carry the flat ₹79 charge regardless of order size, while prepaid orders above the threshold ship free, which nudges buyers toward paying online rather than on delivery.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS, India)',
      value: 4.7,
      note: '22k+ ratings on the DailyObjects app',
    },
    {
      source: 'Trustpilot',
      value: 2.9,
      note: 'only around 10 reviews on this profile, too small a sample to weight heavily',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'strong app-store sentiment and a clear returns policy, tempered by weaker independent review-site scores',
    },
  ],
  bestFor: [
    'Buyers who want a locally designed, distinctive phone case or sleeve',
    'Domestic Indian orders that clear the free-shipping threshold',
    'Anyone who reads a 30-day return window as a meaningful commitment',
    'Shoppers happy to buy through the app rather than the desktop site',
  ],
  notFor: [
    'Anyone buying a screen guard, charger or notebook expecting a standard return',
    'Buyers who weight independent review-aggregator scores heavily',
    'Cash-on-delivery shoppers trying to avoid a shipping fee entirely',
  ],
  faq: [
    {
      q: 'Does DailyObjects manufacture its own products?',
      a: 'Yes. The company designs its accessories in-house and manufactures through a network it describes as over 1,000 Indian artisans and makers, rather than reselling stock made and branded by other companies. It sources materials globally but keeps production based in India, which it uses as its core positioning.',
    },
    {
      q: 'How long do I have to return something?',
      a: '30 days from the delivery date for eligible items, provided they are unused, in original packaging and still have their tags attached. A handful of categories, including screen guards, chargers and notebooks, are excluded from standard returns outright, though defective units in those categories can still qualify for replacement.',
    },
    {
      q: 'Why do DailyObjects ratings look so different across sites?',
      a: 'Its App Store rating is high with a large review count behind it, while independent aggregators like Trustpilot show a noticeably lower score, though on a much smaller sample there. Both figures are genuine; they simply measure different, self-selecting audiences with different reasons to leave a review.',
    },
    {
      q: 'Is shipping free?',
      a: 'Only on prepaid domestic orders above ₹1,199. Smaller prepaid orders and all cash-on-delivery orders carry a flat ₹79 charge regardless of what is in the basket. International orders are priced separately at checkout on the dedicated dailyobjects.us storefront rather than the Indian site.',
    },
    {
      q: 'Can I exchange a defective product?',
      a: 'Yes, defective or shipping-damaged items are eligible for replacement, including several categories that are otherwise excluded from standard returns, within a shorter 7-day window counted from the delivery date rather than the standard 30 days given for ordinary, non-defective returns.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'dailyobjects.com',
}
