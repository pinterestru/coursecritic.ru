/**
 * Brand page data for H&M (route: /brands/hm).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://hmgroup.com/about-us/ — founding year, market/store count,
 *     employee count, sister-brand portfolio
 *   - https://www2.hm.com/en_us/member/membership-info.html and
 *     https://thereturnguide.com/blogs/retail-store-returns/hm-return-policy-guide
 *     — free Member programme benefits, points, and the mail-return fee that
 *     is waived for Members
 *   - https://apps.apple.com/us/app/h-m/id834465911 — App Store rating
 *     (opened directly: 4.8/5, 237,000 ratings)
 *   - https://www.forbrukertilsynet.no/wp-content/uploads/2022/06/hm-potentially-misleading-environmental-claims-in-marketing-using-higg-msi-data-in-marketing-of-garments.pdf
 *     and https://www.businessoffashion.com/articles/sustainability/hm-norrona-norway-sustainability-environmental-marketing-higg/
 *     — Norway’s Consumer Authority warning over Higg Index sustainability
 *     claims and H&M’s €500,000 donation settlement
 *   - https://fashionunited.com/news/business/h-m-s-response-to-allegations-of-dumping-textile-waste-in-global-south-highlights-industry-s-problems/
 *     — the Aftonbladet/Bild tracked-garment investigation into H&M’s
 *     in-store collecting bins
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Trustpilot scores
 * for hm.com found across searches were inconsistent and could not be
 * confirmed by opening the page directly, so no Trustpilot figure appears
 * below. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const hm: BrandPage = {
  slug: 'hm',
  providerId: 'hm',
  metaTitle: 'H&M review 2026 — Member fees, returns, greenwashing claims',
  metaDescription:
    'An independent H&M review: the free Member perks, the return fee non-members pay, and the regulatory scrutiny over its sustainability marketing claims.',
  intro:
    'H&M is fast fashion at genuine global scale: thousands of stores across dozens of markets, new stock landing constantly, and price points built for volume rather than durability. The free H&M Member programme is worth joining before you buy anything, since non-members pay a return fee that Members get waived. The bigger issue for a skeptical buyer is the paper trail: H&M has been formally warned by a national regulator over its environmental marketing, and an independent investigation found some of its “recycled” garments ending up as waste abroad.',
  about: [
    'H&M was founded in Sweden in 1947 and has grown into one of the largest fast-fashion retailers in the world, trading through thousands of stores across more than 70 markets alongside online sales in around 60. The H&M Group now runs a portfolio of sister brands too — COS, & Other Stories, ARKET, Weekday, Monki and Sellpy among them — each pitched at a slightly different price point and aesthetic, though H&M itself remains the mass-market flagship most shoppers actually mean when they say the name.',
    'The free H&M Member programme is the account worth having: it earns points on every purchase, in store and online, unlocks personalised discounts, and — critically — waives the fee non-members pay when they mail an order back. New members also get a one-time discount on their first purchase. None of this changes the core proposition, which is volume and turnover rather than considered buying: new stock arrives constantly, and prices are built for a garment worn a handful of times, not for years.',
    'H&M’s environmental marketing has drawn real regulatory attention. Norway’s Consumer Authority formally warned H&M Group in 2022 that its use of the Higg Materials Sustainability Index to market garments as sustainable was misleading, since the index measures only raw-material impact, not the finished product; H&M subsequently agreed to a €500,000 donation and to stop using that framing. Separately, a joint Aftonbladet/Bild investigation tracked garments dropped into H&M’s in-store collecting bins and found them exported abroad rather than recycled locally, undercutting the “close the loop” pitch behind the scheme.',
  ],
  facts: [
    { label: 'Founded', value: '1947, Sweden' },
    { label: 'Markets', value: '70+ markets, 4,000+ stores' },
    { label: 'Loyalty', value: 'Free H&M Member programme' },
    { label: 'Returns', value: 'Fee unless you are a Member' },
  ],
  plans: {
    title: 'How H&M pricing and the Member programme fit together',
    note: 'The return fee and its Member waiver are the one recurring cost most shoppers do not budget for — the exact figure is set per market and is not the same everywhere.',
    items: [
      {
        name: 'Shopping as a guest',
        price: 'Standard listed prices',
        detail:
          'No account needed to buy, but you pay any return fee in full and miss out on points, personalised offers and early sale access.',
      },
      {
        name: 'H&M Member (free)',
        price: 'Free to join',
        detail:
          'Earns points toward discount vouchers, unlocks personalised offers, and waives the mail-return fee that guests pay.',
        pick: true,
      },
      {
        name: 'Returning by post',
        price: 'A flat fee is deducted from non-Member refunds',
        detail:
          'Members get this waived; guests do not. Returning to a physical store avoids the fee entirely, regardless of membership.',
      },
    ],
  },
  pros: [
    {
      title: 'A loyalty programme that actually saves real money',
      body: 'The free Member programme waives the return-by-post fee entirely, on top of points and personalised discounts. For anyone who orders online and returns even occasionally, joining costs nothing and clearly pays for itself.',
    },
    {
      title: 'A sister-brand range for different budgets',
      body: 'COS, & Other Stories and ARKET sit above H&M on price and design, while Weekday and Monki skew younger, so a shopper who outgrows H&M’s own aisles has somewhere else to go within the same corporate group.',
    },
    {
      title: 'Strong, high-volume app ratings',
      body: 'The H&M app carries a 4.8-star rating on Apple’s App Store from more than 230,000 ratings — a genuinely large sample, not a handful of five-star plants padding out the number.',
    },
    {
      title: 'Scale means stock actually turns over',
      body: 'New designs land constantly rather than on a seasonal cycle, and with thousands of stores across more than 70 markets, availability and trying items on in person are realistic options most online-only rivals cannot match.',
    },
  ],
  cons: [
    {
      title: 'Warned by regulators over sustainability marketing',
      body: 'Norway’s Consumer Authority told H&M Group in 2022 that using the Higg Index to call garments sustainable was misleading, since the index only measures raw materials, not the finished product. H&M agreed to a €500,000 donation and dropped the claim.',
    },
    {
      title: 'The garment-collecting bins do not fully deliver on the pitch',
      body: 'A joint Aftonbladet/Bild investigation tracked donated clothes with hidden trackers and found garments from H&M’s in-store collection scheme exported abroad rather than recycled locally — the opposite of what the “close the loop” framing implies.',
    },
    {
      title: 'A return fee non-members do not expect',
      body: 'Mail a return back without a Member account and a flat fee is deducted from the refund. It is a small amount per order, but it adds up for anyone who orders several sizes to try at home.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS)',
      value: 4.8,
      note: '237,000+ ratings — an unusually high, verifiable volume for a fashion app',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'wide catalogue and genuinely useful loyalty perks weighed against real regulatory and greenwashing findings',
    },
  ],
  bestFor: [
    'Shoppers who want current trends at low prices and do not expect longevity',
    'Anyone who orders online regularly — the free Member account pays for itself',
    'Buyers who want a sister-brand range (COS, ARKET, Weekday) under one group',
    'People happy to buy in-store, where the return-fee issue does not apply',
  ],
  notFor: [
    'Buyers who weigh a retailer’s sustainability claims and want a clean record',
    'Anyone who returns online orders often and will not create a Member account',
    'Shoppers expecting durability — H&M is priced for turnover, not longevity',
  ],
  faq: [
    {
      q: 'Does H&M charge a fee to return an order?',
      a: 'Yes, if you post it back without a Member account — a flat fee is deducted from the refund. Free H&M Members get that fee waived entirely, and returning to a physical store avoids it altogether, regardless of membership status or how you paid.',
    },
    {
      q: 'Has H&M actually been penalised over its sustainability claims?',
      a: 'Norway’s Consumer Authority found H&M Group’s use of the Higg Index to market garments as sustainable misleading in 2022, since the index covers only raw materials, not the finished item. H&M agreed to a €500,000 donation and stopped using that specific claim — a regulatory warning and settlement, not a court fine.',
    },
    {
      q: 'What happens to clothes I drop in H&M’s in-store collection bins?',
      a: 'H&M has promised to recycle donated garments, but a joint Aftonbladet/Bild investigation using hidden trackers found clothing dropped at H&M stores in Sweden ending up exported abroad rather than recycled locally. Treat the “close the loop” pitch with some skepticism.',
    },
    {
      q: 'Is the H&M app rating trustworthy?',
      a: 'The iOS App Store rating (4.8 from over 230,000 ratings) is a large enough sample to mean something, and it is independently checkable on Apple’s own store page — more than can be said for some retailers’ quoted review counts elsewhere online.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'hm.com',
}
