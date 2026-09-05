/**
 * Brand page data for G2A (route: /brands/g2a).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/G2A — founding year (2010, as Go2Arena),
 *     headquarters, marketplace pivot timeline, tinyBuild/Unknown Worlds/Wube
 *     Software chargeback disputes, G2A Direct and the 10x chargeback pledge
 *   - G2A's own Money Back Guarantee terms, corroborated via
 *     https://luckypicker.com/g2a-money-back-guarantee-scam/ — free,
 *     automatic cover that excludes developer-direct and official-reseller
 *     purchases
 *   - https://supporthub.g2a.com/marketplace/en/digital-items/region-restrictions--globaleuropeamericarow-what-does-it-mean
 *     — region tagging (EUROPE, ROW) on listings
 *   - https://www.smartcustomer.com/reviews/g2a.com (Sitejabber) — rating and
 *     review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const g2a: BrandPage = {
  slug: 'g2a',
  providerId: 'g2a',
  metaTitle: 'G2A review 2026 — cheap keys, Money Back Guarantee, risk',
  metaDescription:
    'An independent G2A review: how the marketplace’s free Money Back Guarantee works, what it excludes, and the chargeback history publishers still cite against it.',
  intro:
    "G2A is a third-party marketplace for game keys and digital goods, built the same way Kinguin and Gamivo are: independent sellers list the stock, G2A takes a cut, and buyer protection now comes bundled in free rather than sold as an add-on. That improvement does not erase the platform's history. Developers have spent a decade accusing G2A of profiting from keys bought with stolen cards, and the company's own Money Back Guarantee excludes exactly the official-reseller purchases where that criticism matters most.",
  about: [
    'G2A was founded in 2010 in Rzeszów, Poland, as a direct game-key retailer called Go2Arena before pivoting to today’s open marketplace model in 2013 and 2014. The company is now headquartered in the Netherlands, with additional offices in Poland and a registered entity in Hong Kong. It says it serves more than 30 million users across some 180 countries, which puts its scale ahead of most rivals in this category, Kinguin included, and explains why it is usually one of the first results for a cheap key search on almost any title.',
    'G2A’s most persistent controversy is stolen-card fraud: independent studios, most visibly tinyBuild and Unknown Worlds Entertainment, have publicly documented chargebacks from keys resold on G2A after being bought with compromised cards, and one studio told players it would rather they pirated its game. G2A’s response has included G2A Direct, a scheme letting participating developers claim a cut of resales, and a pledge to pay ten times any chargeback loss a studio can prove. Both require a developer to opt in and engage with G2A directly, so neither reaches every title sold on the site.',
    'To its credit, G2A dropped the old paid G2A Shield add-on and replaced it with a free Money Back Guarantee that applies automatically: if an item is not as described or stops working, you can claim without paying extra first. The guarantee does not cover items bought from the developer or an official reseller. Listings are also tagged by region, EUROPE, ROW and similar, and a key bought for the wrong region can simply fail to activate. G2A suits price-driven buyers on mainstream titles who read seller ratings and region tags before paying; it does not suit anyone who wants certainty above all else.',
  ],
  facts: [
    { label: 'Founded', value: '2010, as Go2Arena' },
    { label: 'Headquarters', value: 'Netherlands' },
    { label: 'Reach', value: '30M+ users, 180 countries' },
    { label: 'Protection', value: 'Money Back Guarantee, free' },
  ],
  plans: {
    title: 'How buying a key actually works',
    note: 'Every listed price is set by an independent seller; the Money Back Guarantee is now free and automatic, but it excludes items from the developer or an official reseller.',
    items: [
      {
        name: 'Marketplace key, standard listing',
        price: 'Seller-set, often the lowest price',
        detail:
          'The base marketplace price from whichever independent seller is offering the title, before any protection is considered.',
      },
      {
        name: 'Money Back Guarantee',
        price: 'Included at no extra cost',
        detail:
          'Applies automatically if an item is not as described or stops working, except items bought from the developer or an official reseller.',
        pick: true,
      },
      {
        name: 'G2A Direct-participating listings',
        price: 'Same price as standard listings',
        detail:
          'On titles where the developer opted in, a share of the sale goes back to them at no extra cost to the buyer.',
      },
    ],
  },
  pros: [
    {
      title: 'Money Back Guarantee is now free, not upsold',
      body: 'G2A replaced its old paid G2A Shield add-on with automatic, no-cost buyer protection, which removes one of the sharpest historical criticisms of the marketplace model.',
    },
    {
      title: 'One of the largest catalogues in the category',
      body: 'More than 30 million users across roughly 180 countries means almost any mainstream title, and plenty of older or regional ones, turns up somewhere on the site.',
    },
    {
      title: 'Consistently competitive prices on big titles',
      body: 'Heavy competition between thousands of independent sellers keeps prices for well-known games among the lowest available anywhere, official storefronts included, especially around launch week and big sales events.',
    },
    {
      title: 'G2A Direct gives some developers a real cut',
      body: 'On titles where a publisher has opted into G2A Direct, part of the resale revenue flows back to them automatically, which narrows the fairness gap this category is known for.',
    },
  ],
  cons: [
    {
      title: 'The chargeback-fraud history is real and recent',
      body: 'Independent studios including tinyBuild and Unknown Worlds Entertainment have documented keys resold on G2A after being bought with stolen cards, leaving developers to absorb the chargeback fees.',
    },
    {
      title: 'Money Back Guarantee has real exclusions',
      body: 'Items bought directly from the developer or an official reseller are not covered, and it only helps once a compromise with the seller has already failed.',
    },
    {
      title: 'Region tags restrict where a key activates',
      body: 'A key marked EUROPE or ROW will not necessarily work outside that region, and using a VPN to force activation can itself put the buyer’s platform account at risk.',
    },
  ],
  reputation: [
    {
      source: 'Sitejabber',
      value: 1.3,
      note: '201 reviews, low volume and heavily complaint-skewed',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.4,
      note: 'scale and a free protection scheme weighed against the chargeback history',
    },
  ],
  bestFor: [
    'Bargain hunters buying well-known, mainstream titles from highly rated sellers',
    'Buyers who check a seller’s rating and a key’s region tag before paying',
    'Shoppers happy to rely on the free Money Back Guarantee if something goes wrong',
    'Anyone buying software licences or gift cards rather than indie games specifically',
  ],
  notFor: [
    'Anyone who wants their money to reach the developer with certainty',
    'Buyers who won’t check region tags before paying',
    'Anyone put off by a decade of publisher criticism over stolen-card fraud',
  ],
  faq: [
    {
      q: 'Is G2A safe to buy from?',
      a: 'Most orders complete without any problem, and the free Money Back Guarantee gives you a real claim path if one does not. The bigger question is not safety but ethics: some of the criticism aimed at G2A is about publishers losing revenue, not buyers losing money.',
    },
    {
      q: 'Why do developers criticise G2A?',
      a: 'Because stolen credit cards have been used to buy keys that were then resold on G2A, leaving the original publisher to cover the chargeback while G2A keeps its commission. G2A Direct and a chargeback-repayment pledge address this only for developers who opt in.',
    },
    {
      q: 'What does the Money Back Guarantee not cover?',
      a: 'It excludes anything bought directly from the developer or from an official reseller listed on G2A, and it only pays out after you have tried, and failed, to resolve the issue with the seller first, so keep any message threads as evidence.',
    },
    {
      q: 'Are G2A keys region locked?',
      a: 'Some are. Listings are tagged EUROPE, ROW or similar, and a key bought for the wrong region can fail to activate entirely. Check the tag before paying, since a mismatched region is treated as buyer error, not a fault covered by the guarantee.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'g2a.com',
}
