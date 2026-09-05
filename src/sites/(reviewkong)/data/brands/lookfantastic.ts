/**
 * Brand page data for Lookfantastic (route: /brands/lookfantastic).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.thg.com/news/hut-group-acquires-lookfantastic-group and
 *     https://en.wikipedia.org/wiki/THG_plc — founding year, acquisition by
 *     The Hut Group, parent company
 *   - https://www.lookfantastic.com/c/info/international-delivery/ and
 *     https://www.lookfantastic.com/c/info/refunds-returns/ — worldwide
 *     shipping, import-duty note, 30-day return window via the ZigZag portal
 *   - https://www.lookfantastic.com/blog/discover/everything-you-need-to-know-about-lf-beauty-plus/
 *     and https://www.lookfantastic.com/c/beauty-plus/faqs/ — LF Beauty Plus+
 *     points scheme
 *   - https://www.trustpilot.com/review/www.lookfantastic.com — UK-site rating
 *     and volume; https://www.trustpilot.com/review/no.lookfantastic.com and
 *     https://www.trustpilot.com/review/lookfantastic.dk — regional score
 *     variance
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const lookfantastic: BrandPage = {
  slug: 'lookfantastic',
  providerId: 'lookfantastic',
  metaTitle: 'Lookfantastic review 2026 — beauty retailer, LF Plus+ cost',
  metaDescription:
    'An independent Lookfantastic review: worldwide shipping and import duties, the LF Beauty Plus+ points scheme, the 30-day return window, and where regional ratings drop.',
  intro:
    'Lookfantastic started as a Sussex beauty retailer in 1996 and has been part of THG plc since 2010, now shipping to more than 200 countries from the UK. The flagship storefront has an excellent Trustpilot record; several of its regional storefronts do not, and that split is worth knowing before you assume the same experience everywhere.',
  about: [
    'Lookfantastic began trading online in 1997, a year after the underlying company was founded in 1996, and was acquired by The Hut Group in 2010 for £19.4 million. It has operated as part of THG plc ever since, sitting inside a group that has built several other beauty and nutrition retail brands using shared logistics and technology infrastructure rather than running as a standalone company.',
    'The catalogue is third-party beauty and haircare: skincare, makeup, fragrance and hair products from a wide range of established brands, sold from a UK base with what the company describes as complimentary worldwide shipping to over 200 countries. Orders outside the UK can attract import duties and VAT on arrival, which the site states are the buyer’s responsibility and are not included in the checkout price.',
    'LF Beauty Plus+ is the loyalty scheme: free to join, earning points on purchases and reviews, redeemable from a 500-point threshold at a fixed rate. It sits alongside a 30-day return window handled through a third-party returns portal (ZigZag), a longer window than several competitors on this site offer.',
  ],
  facts: [
    { label: 'Founded', value: '1996, UK' },
    { label: 'Parent company', value: 'THG plc (since 2010)' },
    { label: 'Ships to', value: '200+ countries' },
    { label: 'Returns', value: '30 days via ZigZag' },
  ],
  plans: {
    title: 'What it costs to buy',
    note: 'Shipping is advertised as free worldwide, but import duties and VAT outside the UK are charged separately on arrival and are not shown at checkout.',
    items: [
      {
        name: 'Standard order',
        price: 'Listed price, no delivery fee stated',
        detail:
          'Complimentary shipping to over 200 countries from the UK base; the product price is what you pay at checkout before any import charges.',
        pick: true,
      },
      {
        name: 'Import duties (non-UK)',
        price: 'Charged separately on arrival',
        detail:
          'VAT and import duties apply once a non-UK order reaches its destination country and are the buyer’s responsibility, not included at checkout.',
      },
      {
        name: 'LF Beauty Plus+ membership',
        price: 'Free to join',
        detail:
          'Earn points shopping and reviewing (25 points per review, 400 for completing your profile); redeem from 500 points at roughly £5 credit per 500.',
      },
      {
        name: 'Referral credit',
        price: '£10 in points per successful referral',
        detail:
          'Awarded once a referred friend completes a purchase, on top of standard points earned from shopping.',
      },
    ],
  },
  pros: [
    {
      title: 'The UK storefront’s Trustpilot record is genuinely strong',
      body: 'www.lookfantastic.com is rated "Excellent" at 4.6 out of 5, a high score to sustain at the volume of reviews the flagship site has accumulated over years of trading.',
    },
    {
      title: 'Worldwide shipping without an upfront delivery fee',
      body: 'Complimentary shipping to over 200 countries removes the delivery-cost calculation at checkout, even though import duties can still apply once the parcel lands.',
    },
    {
      title: 'A 30-day return window, longer than several rivals',
      body: 'Thirty days from receipt gives more room to decide than the 14 to 15-day windows common elsewhere on this site, useful for gifts or seasonal buying.',
    },
    {
      title: 'A free points scheme with a real referral incentive',
      body: 'LF Beauty Plus+ costs nothing to join and pays out for reviews and referrals as well as purchases, with a fixed and published redemption rate.',
    },
  ],
  cons: [
    {
      title: 'Regional Trustpilot scores vary sharply',
      body: 'The UK site’s 4.6 rating does not carry over everywhere: Norway’s storefront sits at 1.7 out of 5 and Denmark’s at 2.4, both rated "Bad" or "Poor". Which storefront you land on materially changes what to expect.',
    },
    {
      title: 'Import duties are a real added cost outside the UK',
      body: 'Shipping being free does not mean the order is free of extra charges — VAT and duty on arrival in non-UK destinations can add a meaningful amount that is invisible at checkout.',
    },
    {
      title: 'Returns run through a third-party portal',
      body: 'Refunds are initiated via the ZigZag returns portal rather than directly with Lookfantastic, adding a step and a second company into the process, and payouts take a further 3 to 5 working days once the item is received.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot (UK site)',
      value: 4.6,
      note: 'rated "Excellent", very high review volume',
    },
    {
      source: 'Trustpilot (Norway site)',
      value: 1.7,
      note: 'rated "Bad" — regional service varies',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'the strong UK record is offset by inconsistent regional performance and added import costs',
    },
  ],
  bestFor: [
    'UK-based buyers who benefit from the flagship storefront’s strong record',
    'International buyers happy to budget for import duties separately',
    'Gift shoppers who want a longer, 30-day return window',
    'Anyone who wants a free loyalty scheme rather than a paid one',
  ],
  notFor: [
    'Buyers on a regional storefront with a weak local Trustpilot record',
    'Anyone who wants delivery and duties bundled into one checkout price',
    'Shoppers who prefer returns handled directly rather than via a third-party portal',
  ],
  faq: [
    {
      q: 'Will I pay extra charges on an order outside the UK?',
      a: 'Shipping itself is complimentary, but import duties and VAT are charged separately once your order arrives in your country, and you are responsible for them. These are not shown at UK checkout, so budget for them on international orders.',
    },
    {
      q: 'Why does the Trustpilot score for Lookfantastic vary by source?',
      a: 'Trustpilot runs a separate profile per regional storefront. The UK site is rated "Excellent" at 4.6, while some smaller regional storefronts, including Norway and Denmark, score far lower — check the profile for the storefront you will actually order from.',
    },
    {
      q: 'How do returns work?',
      a: 'You start a return through the ZigZag returns portal, choose a carrier, and send the item back within 30 days of receipt in eligible condition. Refunds are confirmed by email and typically land within 3 to 5 working days of the item being received.',
    },
    {
      q: 'Is LF Beauty Plus+ worth joining?',
      a: 'It costs nothing and points accrue from normal shopping, reviews and referrals, so there is no real downside. The value is modest per purchase (500 points for roughly £5), so treat it as a background perk rather than a reason to buy.',
    },
    {
      q: 'Is Lookfantastic part of a bigger company?',
      a: 'Yes. It has been owned by The Hut Group, now THG plc, since 2010, sharing logistics and platform infrastructure with THG’s other beauty and wellness brands rather than operating as an independent retailer.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'lookfantastic.com',
}
