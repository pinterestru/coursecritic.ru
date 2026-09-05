/**
 * Brand page data for Apple (route: /brands/apple).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.apple.com/newsroom/2026/07/apple-upgrade-launches-in-the-united-states/
 *     — the Apple Upgrade leasing programme, run via Klarna
 *   - https://www.apple.com/apple-card/monthly-installments/ and
 *     https://support.apple.com/en-us/102730 — Apple Card Monthly Installments,
 *     0% APR, US-only scope
 *   - MacRumors and 9to5Mac coverage of Apple's November 2025 holiday return
 *     policy extension — the 14-day window and its holiday extension
 *   - Mappr and Statista store-count reporting (apple stores by country, 2026) —
 *     approximate store and country counts
 *   - https://www.trustpilot.com/review/www.apple.com — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const apple: BrandPage = {
  slug: 'apple',
  providerId: 'apple',
  metaTitle: 'Apple Store review 2026 — returns, trade-in, financing',
  metaDescription:
    'An independent review of buying direct from Apple: the 14-day return window, how Trade In credit works, and why Apple Card and Apple Upgrade stay US-only.',
  intro:
    'Apple’s own store sells at one fixed price, worldwide, with no haggling and almost no discounting. What it offers instead is a single consistent return policy, trade-in credit applied automatically at checkout, and, for US buyers only, genuinely interest-free financing through Apple Card or a newer leasing option called Apple Upgrade, run through Klarna rather than Apple itself.',
  about: [
    'Apple.com is the company’s first-party storefront, running as localized sites in dozens of countries and backed by roughly 537 physical Apple Store locations across 27 countries as of 2026. Every regional site sells the same core catalogue — iPhone, Mac, iPad, Apple Watch and accessories — at a fixed local price that Apple itself does not discount, run seasonal promotions against, or agree to price-match with a competitor’s own advertised offer.',
    'Two things make buying direct different from a reseller. Trade-In credit is built into checkout: hand over an old device’s details and its estimated value comes straight off the price, or off the amount financed. In the US only, Apple Card Monthly Installments spreads the cost at 0% APR, while a newer option, Apple Upgrade, lets you lease an iPhone, Mac, iPad or Apple Watch through Klarna instead of buying outright, with the choice to buy it out, return it, or step up to the newest model when the term ends.',
    'None of that financing travels. Outside the US, Apple’s own store offers no instalment plan at all, so buyers pay in full or rely on a local card issuer’s own scheme instead. The trade-off for Apple’s consistency is a flat, unbending policy: a 14-day return window, extended each year over the holiday period, no coupon codes, and a support reputation that on public review sites sits well below what its product satisfaction scores elsewhere would suggest.',
  ],
  facts: [
    { label: 'Founded', value: '1976 (Apple Inc.)' },
    { label: 'Returns window', value: '14 days (holiday extension)' },
    { label: 'Retail footprint', value: '537 stores, 27 countries' },
    { label: 'Financing', value: '0% APR Apple Card (US)' },
  ],
  plans: {
    title: 'What it costs to buy direct',
    note: 'Apple does not discount. The only ways to pay less are Trade-In credit, US-only 0% financing that spreads the cost without adding interest, or education and business pricing where a buyer qualifies for it.',
    items: [
      {
        name: 'Buy outright',
        price: 'Fixed list price, no negotiation',
        detail:
          'Apple rarely runs storewide sales; an occasional gift-card-back promotion around back-to-school, and sometimes Black Friday, is close to the only discount that ever appears on the main store.',
        pick: true,
      },
      {
        name: 'Apple Card Monthly Installments',
        price: '0% APR, spread over the plan term',
        detail:
          'US-only and requires an Apple Card; tax and shipping are billed separately to the card and do accrue interest if the balance is not paid off in full each month.',
      },
      {
        name: 'Apple Upgrade (leasing via Klarna)',
        price: 'Low monthly rate, 12–36 month lease',
        detail:
          'US-only: you rent rather than own the device, with the option at term end to buy it outright, return it entirely, or roll straight into the newest model available.',
      },
      {
        name: 'Trade-In credit',
        price: 'Value assessed at checkout or by mail',
        detail:
          'Reduces the amount financed or paid upfront; the payout depends entirely on the old device’s condition and can land well below what a marketplace like eBay would actually pay.',
      },
    ],
  },
  pros: [
    {
      title: 'Trade-in credit applies at checkout, not after',
      body: 'You don’t need a separate marketplace listing or a mail-in waiting period to see the discount; the estimated trade-in value comes straight off what you owe before you pay anything.',
    },
    {
      title: 'US financing is genuinely interest-free',
      body: 'Apple Card Monthly Installments charges a flat 0% APR with no hidden fee attached, unlike a lot of buy-now-pay-later schemes that advertise 0% and then quietly fail to deliver it in practice.',
    },
    {
      title: 'One return policy, applied the same way everywhere',
      body: 'The 14-day window and its holiday extension apply consistently across every one of Apple’s own regional stores, rather than varying depending on which country’s site a buyer happens to land on.',
    },
    {
      title: 'AppleCare is offered right at the point of sale',
      body: 'Extended coverage can be added directly during checkout rather than requiring a separate purchase later, a phone call, or sourcing a third-party warranty provider after the fact.',
    },
  ],
  cons: [
    {
      title: 'No discounting, ever',
      body: 'Apple does not run storewide sales, accept coupon codes, or agree to price-match a competitor. Buyers who actually want a lower price have to go to a carrier or an authorised reseller instead.',
    },
    {
      title: 'Financing perks stop at the US border',
      body: 'Apple Card Monthly Installments and Apple Upgrade leasing are both US-only products; the rest of the world gets one fixed price and whatever instalment scheme their own local card issuer happens to offer.',
    },
    {
      title: 'Trustpilot reflects real, high-volume dissatisfaction',
      body: 'Apple’s main site carries a low Trustpilot score across roughly 12,000 reviews, weighted heavily toward one-star complaints about support responsiveness and repair delays rather than the products themselves.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.8,
      note: '~12,000 reviews, heavily skewed toward support and repair complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.6,
      note: 'our composite across pricing consistency, trade-in and return policy',
    },
  ],
  bestFor: [
    'Buyers who want a trade-in credited automatically at checkout',
    'US shoppers who qualify for 0% Apple Card financing and want to avoid interest',
    'Anyone who values one consistent return policy over hunting for a discount',
    'Buyers who want AppleCare added at the point of purchase rather than after',
  ],
  notFor: [
    'Bargain hunters — Apple does not discount or price-match its own store',
    'Shoppers outside the US who want Apple’s own instalment financing',
    'Anyone who has read Apple’s own Trustpilot page and wants reassurance before buying',
  ],
  faq: [
    {
      q: 'Does apple.com ever go on sale?',
      a: 'Rarely. Apple does not run storewide discounts on its own site; the closest it comes is a gift-card-back promotion around back-to-school and sometimes Black Friday, plus separate education and business pricing for the smaller group of buyers who qualify for either scheme.',
    },
    {
      q: 'What’s the difference between Apple Card Monthly Installments and Apple Upgrade?',
      a: 'Installments finance a device you own outright at 0% APR through Apple Card. Apple Upgrade is a lease run through Klarna instead: you don’t own the device until you choose to buy it out at the end of the term, and can return or upgrade it rather than keep it.',
    },
    {
      q: 'How long do I have to return something bought on apple.com?',
      a: '14 days from delivery under Apple’s standard policy, extended into January for items bought during the November-to-December holiday window each year. Carrier-financed iPhones purchased through T-Mobile or Verizon are excluded from that extension and always follow the standard 14-day rule instead.',
    },
    {
      q: 'Does Trade-In credit apply automatically?',
      a: 'No. You have to submit the old device’s details at checkout, or send it in separately by mail, and Apple assesses its condition and current market value before crediting the amount — older or visibly damaged devices can be worth far less than expected.',
    },
    {
      q: 'Is buying directly from Apple better than an authorised reseller?',
      a: 'Pricing is usually identical since Apple enforces resale pricing across its whole network, so the real difference comes down to service: Apple’s own support, returns and Trade-In process, versus whatever separate policy the individual authorised reseller happens to run instead of it.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'apple.com',
}
