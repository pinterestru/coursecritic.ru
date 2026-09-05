/**
 * Brand page data for Walmart (route: /brands/walmart).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://corporate.walmart.com/about — current store count (10,900+),
 *     countries of operation (19), weekly customer traffic (~280M)
 *   - https://www.britannica.com/money/Sam-Walton — founding year (1962) and
 *     founder
 *   - https://www.walmart.com/help/article/walmart-standard-return-policy/adc0dfb692954e67a4de206fb8d9e03a
 *     — the 90-day standard window, 30-day consumer-electronics and 14-day
 *     wireless-phone exceptions, no-receipt store-credit policy
 *   - https://www.walmart.com/help/article/about-international-shipping/d38f32152008402e9ab60cf8b85192dc
 *     — direct shipping limited to the US, Canada and Mexico
 *   - Walmart+ pricing and benefits ($12.95/mo or $98/yr, 30-day trial, no
 *     order minimum for free shipping vs a $35 threshold for non-members,
 *     Paramount+/Peacock bundle, fuel discount) — cross-checked across
 *     multiple current membership-guide summaries of walmart.com's own page
 *   - https://www.trustpilot.com/review/www.walmart.com — TrustScore (1.7/5)
 *     and review volume (12,500+ reviews); the page itself blocks direct
 *     fetches, so the score is taken from the page's own title as surfaced by
 *     search, not from a rendered page
 *   - https://corporate.walmart.com/news/2026/06/11/walmart-opens-walmartcom-to-international-customers-unlocking-access-to-hundreds-of-thousands-of-items-with-shipping-available-to-mexico
 *     — confirms direct international shipping is Canada and Mexico only, "more
 *     countries coming soon" as of June 2026
 *
 * ⚠️ Store counts, Walmart+ pricing and the Trustpilot score are working
 * values captured while building the site and MUST be re-verified against
 * walmart.com and Trustpilot before launch. Note in particular that Walmart
 * only opened direct international shipping (to Mexico, then Canada) in June
 * 2026 — that footprint will likely have grown by the time this page is
 * re-checked. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const walmart: BrandPage = {
  slug: 'walmart',
  providerId: 'walmart',
  metaTitle: 'Walmart review 2026 — Walmart+ fees, returns, sellers',
  metaDescription:
    'An independent Walmart review: what Walmart+ costs and includes, the real return window, and why Marketplace sellers are the biggest quality risk.',
  intro:
    "Walmart.com is the online storefront of the world's largest retailer by revenue, and it behaves like one: enormous catalogue, aggressive price matching against its own stores, and a membership programme built to keep you from ever checking a competitor. What the marketing does not lead with is that a growing share of what you see in search results ships from a third-party Marketplace seller rather than Walmart itself, and that distinction matters more for quality and returns than the price tag does.",
  about: [
    "Walmart was founded in 1962 by Sam Walton in Rogers, Arkansas, and grew into the world's largest retailer by revenue, running more than 10,900 stores across 19 countries and drawing roughly 280 million customers into them and its e-commerce sites every week. It is publicly traded, with the Walton family still the largest shareholder decades after Sam Walton's death. Walmart.com is the digital arm of that operation rather than a separate company, which is why its pricing, stock and delivery windows are tied so closely to the physical store network behind it.",
    "Walmart+ costs $12.95 a month or $98 a year after a 30-day free trial, and its headline benefit is free delivery with no order minimum, against a $35 threshold for everyone else. Membership also bundles a rotating choice of Paramount+ or Peacock, a small fuel discount at partner stations, and early access to sales. Returns are generous by marketplace standards: 90 days on most items, without a receipt if needed, though consumer electronics drop to 30 days and wireless phones to 14. Marketplace-sold items follow the seller's own 30-day window rather than Walmart's, which is easy to miss at checkout.",
    'Walmart.com now sells far more than Walmart itself stocks, through its open Marketplace programme, and that is where most of the genuine complaints sit: counterfeit or mis-described items, slower dispute resolution than for first-party orders, and a Trustpilot page dominated by people who had a problem, since satisfied buyers of a $6 item rarely leave a review at all. International shipping is limited to Canada and Mexico from the US site; everyone else needs a package-forwarding service. None of that erases the convenience of the core business, but it does mean the listing you are looking at matters more than the Walmart name above it.',
  ],
  facts: [
    { label: 'Founded', value: '1962' },
    { label: 'Scale', value: '10,900+ stores, 19 countries' },
    { label: 'Returns', value: '90 days, most items' },
    { label: 'Walmart+ price', value: '$12.95/mo or $98/yr' },
  ],
  plans: {
    title: 'What Walmart+ actually buys you',
    note: "It is worth paying for only if you order often enough that the $35 free-shipping threshold would otherwise catch you, or you'd use the streaming bundle anyway.",
    items: [
      {
        name: 'Shopping without membership',
        price: 'Free shipping over $35',
        detail:
          'The default for anyone not paying for Walmart+. Below that threshold, delivery fees apply per order.',
      },
      {
        name: 'Walmart+ membership',
        price: '$12.95/month or $98/year',
        renews: 'Auto-renews at the same rate',
        detail:
          'No minimum order for free delivery, plus a streaming bundle (Paramount+ or Peacock), a small fuel discount and early sale access.',
        pick: true,
      },
      {
        name: 'In-store pickup',
        price: 'Free, any order size',
        detail:
          'Skips delivery fees and windows entirely if you can get to a store — often the fastest option regardless of membership.',
      },
      {
        name: 'Marketplace purchase',
        price: 'Set by the third-party seller',
        detail:
          "Shipping cost, speed and the 30-day return window are the seller's, not Walmart's — check before assuming Walmart's own terms apply.",
      },
    ],
  },
  pros: [
    {
      title: 'Almost everything, one checkout',
      body: 'Groceries, electronics, home goods and a vast open Marketplace sit behind a single cart and account, backed by a delivery and pickup network built around 10,900+ physical stores.',
    },
    {
      title: 'Walmart+ removes the free-shipping minimum entirely',
      body: 'No $35 cart to hit, which matters if you shop in small, frequent orders rather than stocking up. The Paramount+ or Peacock bundle is a genuine extra, not filler.',
    },
    {
      title: 'In-store pickup sidesteps delivery risk altogether',
      body: 'Ordering online and collecting in person avoids shipping delays, porch theft and Marketplace seller variance in one move, and it is free regardless of membership.',
    },
    {
      title: 'Returns are genuinely easy to start',
      body: 'Ninety days on most items, no receipt required for store credit, and a process that works the same whether you bought online or in a store.',
    },
  ],
  cons: [
    {
      title: 'Marketplace sellers are where the real complaints live',
      body: "Counterfeit or mis-described items, slower dispute handling than first-party orders, and a return window set by the seller rather than Walmart's own 90 days.",
    },
    {
      title: 'Trustpilot reputation is genuinely poor',
      body: 'A TrustScore of 1.7 out of 5 from more than 12,500 reviews, driven by people reporting a problem rather than the far larger number who had none — still worth reading before a big purchase.',
    },
    {
      title: 'International shipping barely exists',
      body: 'Walmart.com ships directly only to the US, Canada and Mexico. Everyone else needs a third-party package-forwarding service, which adds cost and delay.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.7,
      note: '12,500+ reviews, skewed toward people reporting a problem',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite across catalogue breadth, Walmart+ value and Marketplace risk',
    },
  ],
  bestFor: [
    'US shoppers who want one cart for groceries, electronics and everything between',
    "Frequent small-basket shoppers who'd otherwise miss the $35 free-shipping cutoff",
    'Anyone near a store willing to use pickup instead of delivery',
    'Households who would use the Paramount+ or Peacock bundle anyway',
  ],
  notFor: [
    'Shoppers outside the US, Canada or Mexico looking for direct shipping',
    'Anyone who wants first-party quality control on every single item bought',
    "Buyers who won't check whether a listing is fulfilled by Walmart or a Marketplace seller",
  ],
  faq: [
    {
      q: 'Is everything on Walmart.com sold by Walmart?',
      a: "No. A large and growing share of the catalogue is Walmart Marketplace — third-party sellers using Walmart's site and checkout. Shipping cost, speed and returns for those items follow the seller's terms, not Walmart's own 90-day policy.",
    },
    {
      q: 'Is Walmart+ worth it?',
      a: "Only if you order often enough that a $35 minimum for free shipping would otherwise catch you, or you'd use the included Paramount+ or Peacock subscription anyway. Occasional big-basket shoppers already clear the free threshold without paying for membership.",
    },
    {
      q: 'Does Walmart.com ship outside the US?',
      a: 'Directly, only to Canada and Mexico. Shoppers elsewhere need a package-forwarding service that assigns a US address, which adds both cost and delivery time on top of shipping.',
    },
    {
      q: "Why is Walmart's Trustpilot score so low?",
      a: 'Review platforms skew toward complaints: people report a late delivery far more often than they praise an uneventful one. A 1.7 TrustScore from a retailer serving hundreds of millions of customers a week says more about who bothers to review than about typical service.',
    },
    {
      q: "What's the return window?",
      a: 'Ninety days on most items bought directly from Walmart, dropping to 30 days for consumer electronics and 14 for wireless phones. Marketplace-sold items carry the individual seller’s own window, usually 30 days.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'walmart.com',
}
