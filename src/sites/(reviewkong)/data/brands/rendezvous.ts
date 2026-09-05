/**
 * Brand page data for Rendez-Vous (route: /brands/rendezvous).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.rendez-vous.ru/about/ — founding, GUM flagship origin,
 *     store count, brand portfolio, online launch year, in-house repair and
 *     loyalty ("Привилегия") programme
 *   - https://www.rendez-vous.ru/return/ and https://www.rendez-vous.ru/exchange/
 *     — 30-calendar-day warranty/return window, return-to-any-store rule,
 *     refund method, non-returnable care products
 *   - https://www.tbank.ru/reviews/company/rendez-vous/232/ — company-wide
 *     rating and review count, opened directly (not a per-location page)
 *
 * ⚠️ This is a Russian-market retailer with store locations concentrated in
 * Russia (plus outposts in Courchevel and Limassol) and no general
 * international online shipping — every figure below applies to buyers in
 * that footprint. Prices, fees and promotional terms are working values
 * captured on 2026-08-24 and MUST be re-verified before any campaign. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const rendezvous: BrandPage = {
  slug: 'rendezvous',
  providerId: 'rendezvous',
  metaTitle: 'Rendez-Vous review 2026 — Russia’s footwear retail chain',
  metaDescription:
    'An independent Rendez-Vous review: the Russian footwear and accessories chain’s scale, its 30-day return rule, and why service quality varies sharply by store.',
  intro:
    'Rendez-Vous is a Russian footwear, bag and accessories retailer with more than 100 stores nationwide, built around a portfolio of over 100 imported brands. It opened its first boutique in Moscow’s GUM department store around 2000 and has run an online shop since 2011. This is a domestic Russian retailer without general international shipping, so treat the review as context for what the business is rather than a route to order from outside the country.',
  about: [
    'Rendez-Vous opened its first store in Moscow’s GUM department store around 2000, then expanded through Okhotny Ryad, Tverskaya Street, Stoleshnikov Lane and shopping centres across the capital before growing into a nationwide chain. Its online shop, rendez-vous.ru, launched in 2011. The company now runs more than 100 stores across Russia, with a handful of outposts abroad in Courchevel and Limassol, and describes itself as one of the country’s leading branded footwear and accessories retailers.',
    'The catalogue runs to more than 100 brand names — including Michael Kors, Versace Jeans Couture, MM6 Maison Margiela, ASH and Officine Creative — spanning shoes, bags and accessories, with thousands of individual models available across a season. Rendez-Vous works directly with design studios and manufacturers to adapt some imported styles for Russian winter conditions, a detail specific to operating a footwear chain in this climate rather than a generic import retailer.',
    'The business layers a loyalty club, "Привилегия" (Privilege), on top of standard retail: tiered discounts, a birthday gift, and an in-house repair service using original materials, with the length of coverage tied to loyalty card status. Checkout supports cash on delivery alongside card payment, both standard in the Russian market, and any online order can be returned at any Rendez-Vous store in the country rather than only by post.',
  ],
  facts: [
    { label: 'First store', value: 'GUM, Moscow, ~2000' },
    { label: 'Store count', value: '100+, mostly Russia' },
    { label: 'Online since', value: '2011' },
    { label: 'Returns', value: '30 calendar days' },
  ],
  plans: {
    title: 'How checkout, returns and loyalty work',
    note: 'Returns from the online shop can be made at any physical Rendez-Vous store in Russia, not only by courier, which is a genuine convenience if you live near one.',
    items: [
      {
        name: 'Standard checkout',
        price: 'Card or cash on delivery',
        detail:
          'Both prepaid card payment and cash on delivery are supported, priced in rubles, with an in-house delivery network alongside courier partners.',
        pick: true,
      },
      {
        name: 'Returns and exchanges',
        price: '30 calendar days',
        detail:
          'Unworn goods with original packaging and no signs of use can be returned within 30 calendar days of purchase, refunded via the original payment method, at any Rendez-Vous store nationwide.',
      },
      {
        name: 'Привилегия loyalty club',
        price: 'Free to join, tiered',
        detail:
          'Tiered discounts, a birthday gift and an in-house shoe repair service using original materials, with the repair coverage window (1 to 5 years) set by card tier.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely large branded footwear catalogue',
      body: 'More than 100 brand names and thousands of models is a wider spread than most Russian footwear specialists carry, spanning mid-range to designer names.',
    },
    {
      title: 'Returns work at any store, not just by post',
      body: 'An online order can be taken back to any Rendez-Vous location in Russia, which removes the usual friction of arranging a courier return for footwear.',
    },
    {
      title: 'Footwear adapted for Russian winters',
      body: 'Working directly with manufacturers to adjust imported styles for local climate conditions is a specific, checkable claim most import-only retailers cannot make.',
    },
    {
      title: 'A loyalty programme with a genuine service benefit',
      body: 'The in-house repair service using original materials, tied to loyalty tier, is a tangible perk beyond the usual points-and-discounts scheme.',
    },
  ],
  cons: [
    {
      title: 'Service quality swings hard by location',
      body: 'Across a chain of more than 100 stores, public reviews describe a wide range of experiences: attentive, well-informed staff at some branches and scripted, unhelpful service at others. There is no single reliable read on any given store.',
    },
    {
      title: 'Returns are sometimes disputed over "signs of wear"',
      body: 'A recurring theme in public reviews is a store refusing a return or exchange on the grounds the item’s appearance had changed, which is exactly the kind of judgement call that varies by staff member.',
    },
    {
      title: 'No general route to buy from outside Russia',
      body: 'Beyond the Courchevel and Limassol locations, this is a Russia-based retail network. There is no advertised international online shipping, so it is not a practical option for most readers outside the country.',
    },
  ],
  reputation: [
    {
      source: 'Т-Банк (Tbank) reviews',
      value: 4.8,
      note: 'company-wide, based on around 21,898 ratings',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite across catalogue, return convenience and inconsistent store-level service reports',
    },
  ],
  bestFor: [
    'Shoppers in Russia after a wide range of imported footwear and accessory brands',
    'Buyers who value being able to return an online order at a physical store',
    'Anyone wanting shoes adapted for Russian winter conditions rather than generic imports',
    'Loyalty members who will use the in-house repair benefit over several years',
  ],
  notFor: [
    'Any shopper expecting to order online from outside Russia — there is no general international shipping',
    'Buyers who want a consistent experience across every branch rather than store-by-store variation',
    'Anyone planning to try footwear indoors before deciding — return disputes over item condition are a recurring complaint',
  ],
  faq: [
    {
      q: 'Can I order from Rendez-Vous if I do not live in Russia?',
      a: 'Not in the general case. Rendez-Vous is a Russian retail network with outposts in Courchevel and Limassol, but no advertised international online shipping route. Treat this review as background on the business rather than a buying guide if you are elsewhere.',
    },
    {
      q: 'How does the return policy work?',
      a: 'Goods in unworn condition with original packaging can be returned within 30 calendar days of purchase. Online orders can be returned at any Rendez-Vous store in Russia, and refunds go back via the payment method used at checkout.',
    },
    {
      q: 'What does the Привилегия loyalty programme actually include?',
      a: 'Tiered discounts, a birthday gift, and an in-house repair service that uses original materials, with the length of repair coverage — from one to five years — set by your loyalty card tier.',
    },
    {
      q: 'Why do reviews of Rendez-Vous vary so much?',
      a: 'It is a chain of more than 100 individually staffed stores, and public reviews reflect that: some branches get consistent praise for service, others draw complaints about rudeness or disputed returns. Judge the specific store you plan to use, not just the brand.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'rendez-vous.ru',
}
