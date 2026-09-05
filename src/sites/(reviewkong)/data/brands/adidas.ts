/**
 * Brand page data for adidas (route: /brands/adidas).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Adidas — founding history (1924 Gebrüder
 *     Dassler Schuhfabrik, formally Adidas AG from 18 August 1949),
 *     headquarters, 2024 employee count and revenue
 *   - https://www.adidas.co.in/adiClub — adiClub tier structure and benefits
 *   - https://canireturn.com/return/adidas — return window and exceptions for
 *     Hype/limited-edition and final-sale items (cross-checked against
 *     adidas's own published 30-day policy language)
 *   - https://apps.apple.com/us/app/adidas-shop-shoes-clothing/id1266591536
 *     and https://play.google.com/store/apps/details?id=com.adidas.app —
 *     App Store and Google Play ratings
 *   - https://www.trustpilot.com/review/www.adidas.com and
 *     https://www.trustpilot.com/review/adidas.co.in — global rating and the
 *     India-specific review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const adidas: BrandPage = {
  slug: 'adidas',
  providerId: 'adidas',
  metaTitle: 'adidas review 2026 — adiClub, returns and India delivery',
  metaDescription:
    'An independent adidas review: what adiClub unlocks on adidas.co.in, the return window and its exceptions, and where the app outperforms the site.',
  intro:
    'adidas has been Adi Dassler’s company since he split from his brother Rudolf — who went on to found PUMA — and registered adidas AG in 1949. It is now the largest sportswear manufacturer in Europe. On adidas.co.in, most of what shapes the buying experience runs through adiClub, the free loyalty programme that gates free delivery and free returns rather than offering them by default.',
  about: [
    'The business traces back to 1924, when Adolf "Adi" Dassler made sports shoes in his mother’s laundry room in Herzogenaurach, Germany. After the wartime split with his brother Rudolf, Adi formally registered Adidas AG on 18 August 1949. The company remains headquartered in Herzogenaurach today, alongside offices in London, Portland, Tokyo and elsewhere, and reported revenue of €23.683 billion in 2024 with 62,035 employees worldwide — figures that put it comfortably ahead of PUMA and second globally only to Nike.',
    'adidas.co.in runs the same product range as the global site with India-specific delivery and pricing. The centrepiece of the buying experience is adiClub, a free membership programme rather than a paid subscription: signing up unlocks free delivery on orders above ₹1,000, free returns, early access to sales and a welcome bonus, and points earned from purchases and app activity push members into higher tiers with priority service and free personalisation.',
    'Outside adiClub, adidas is less generous. Standard returns run 30 days on most items, but limited "Hype" releases can carry a return window as short as 7 or 14 days, and final-sale items are excluded from returns entirely — worth checking before buying anything positioned as a drop rather than a standard release.',
  ],
  facts: [
    { label: 'Founded', value: '1949 (roots to 1924)' },
    { label: 'Revenue (2024)', value: '€23.68 billion' },
    { label: 'Return window', value: '30 days, most items' },
    { label: 'Free delivery', value: 'adiClub, orders over ₹1,000' },
  ],
  plans: {
    title: 'What adiClub actually changes',
    note: 'adiClub is free to join, but free delivery and free returns are gated behind it rather than automatic for every shopper.',
    items: [
      {
        name: 'Guest checkout',
        price: 'Delivery charged; fee not published upfront',
        detail:
          'Shopping without an adiClub account means paying for delivery and, in some cases, returns — the India site does not surface a flat non-member rate clearly.',
      },
      {
        name: 'adiClub Level 1 (free)',
        price: 'Free delivery over ₹1,000, free returns',
        detail:
          'Automatic on sign-up. Adds a welcome bonus and early access to sales, and starts accumulating points toward higher tiers.',
        pick: true,
      },
      {
        name: 'Higher adiClub tiers',
        price: 'Unlocked by points, no extra cost',
        detail:
          'Earned through purchases and app activity such as logged workouts. Adds priority customer service and free personalisation on eligible products.',
      },
    ],
  },
  pros: [
    {
      title: 'adiClub is genuinely free and genuinely useful',
      body: 'Unlike loyalty schemes that require a purchase threshold before they do anything, signing up alone gets you free delivery over ₹1,000 and free returns — a real cost saving, not a marketing gesture.',
    },
    {
      title: 'The shopping app is rated well by a very large base',
      body: 'The adidas app carries a strong App Store rating from hundreds of thousands of reviews, a scale of validation few retail apps in the category reach.',
    },
    {
      title: 'Standard return window matches the market norm',
      body: 'A 30-day window on most items is in line with what buyers expect from a major retailer, rather than the shorter windows some competitors default to.',
    },
    {
      title: 'Backed by genuine global scale',
      body: 'Second-largest sportswear manufacturer in the world by revenue, with over 62,000 employees, means consistent product standards and a supply chain built for volume.',
    },
  ],
  cons: [
    {
      title: 'The good terms are conditional on joining adiClub',
      body: 'Skip the sign-up and you lose free delivery and returns by default. It costs nothing to join, but it is easy to check out as a guest and miss that entirely.',
    },
    {
      title: 'Hype and limited releases play by different rules',
      body: 'Some limited-edition drops carry a 7- or 14-day return window instead of the usual 30, and final-sale items cannot be returned at all — easy to miss if you are buying a release, not a staple.',
    },
    {
      title: 'The public review record is weak',
      body: 'adidas’s main global storefront sits around 1.5 out of 5 on Trustpilot, driven by delivery and refund complaints. The India-specific listing has too few reviews to be a reliable read on its own, but the pattern on the global site is consistent and long-running.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.5,
      note: 'global adidas.com storefront, thousands of reviews',
    },
    { source: 'App Store (iOS)', value: 4.88, note: 'around 680,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite weighs scale, the app and adiClub’s real benefits against a poor service track record',
    },
  ],
  bestFor: [
    'Shoppers willing to spend two minutes joining adiClub before checkout',
    'Buyers ordering standard-range products rather than limited drops',
    'App-first shoppers who will track points and returns through the app',
    'Anyone comparing scale and financial stability across sportswear brands',
  ],
  notFor: [
    'Guest checkout shoppers who will not bother creating an account',
    'Anyone buying a Hype or limited release expecting the standard 30-day window',
    'Buyers who weight the brand’s general customer-service reputation heavily',
  ],
  faq: [
    {
      q: 'Do I have to pay for adiClub membership?',
      a: 'No. adiClub is free. Signing up alone gets you Level 1 status, which includes free delivery on orders above ₹1,000, free returns, a welcome bonus and early access to sales.',
    },
    {
      q: 'What is the standard return window?',
      a: '30 days from delivery for most items. Limited "Hype" releases can carry a shorter 7- or 14-day window instead, and items marked final sale are not returnable at all, so check the product page before buying a drop.',
    },
    {
      q: 'Is adidas related to PUMA?',
      a: 'Yes, historically. Founder Adi Dassler and his brother Rudolf ran a shared shoe business until a wartime falling-out split it in two. Adi’s half became adidas; Rudolf’s became PUMA, founded the same year a few streets away in the same German town.',
    },
    {
      q: 'How do I move up adiClub tiers?',
      a: 'Points accumulate from purchases, logging workouts in the adidas Running app, and other tracked activity. Higher tiers add priority customer service, free personalisation on eligible products and priority access to releases.',
    },
    {
      q: 'Why is the Trustpilot score so low for a brand this size?',
      a: 'The global adidas.com storefront rates around 1.5 out of 5 on Trustpilot, with delivery delays and refund handling as the recurring complaints. Scale does not appear to have solved the service issues that show up across most large multinational retailers on the platform.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'adidas.co.in',
}
