/**
 * Brand page data for Cricut (route: /brands/cricut).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://cricut.com/en-us/discover-machines and reporting on the February
 *     2026 Joy 2 / Explore 5 launch — machine price ranges
 *   - https://cricut.com/en-us/cricut-access and https://cricut.com/blog/what-is-cricut-access/
 *     — Cricut Access Standard/Premium pricing structure, library size, discounts
 *   - https://help.cricut.com/hc/en-us/articles/360009431214-How-to-find-Cricut-Warranty-Documentation
 *     and the Cricut Maker warranty PDF — warranty terms
 *   - https://www.supermoney.com/cricut-return-policy — 30-day return window,
 *     45-day US/Canada satisfaction guarantee
 *   - Apple App Store and Google Play listings for Cricut Design Space —
 *     rating and review volume on each platform
 *   - Grokipedia and dcf-model.com company-history summaries — the Provo Craft
 *     → Cricut, Inc. rename in 2018
 *
 * ⚠️ Prices, subscription tiers and promotional terms are working values
 * captured on 2026-08-24 and MUST be re-verified before any campaign. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const cricut: BrandPage = {
  slug: 'cricut',
  providerId: 'cricut',
  metaTitle: 'Cricut review 2026 — machines, Access, real cost',
  metaDescription:
    'Cricut reviewed: what the Joy 2 and Explore 5 actually cost, what Cricut Access unlocks versus what stays free, and the materials bill nobody puts on the box.',
  intro:
    'Cricut sells smart cutting machines controlled through Design Space, a free app that works on desktop and mobile. The machine itself is the cheap part. The Cricut Access subscription gates most of the good licensed content, and vinyl, cardstock and mats need restocking constantly — the running cost of the hobby, not the sticker price, is what a buyer actually needs to plan for.',
  about: [
    'The company began life as Provo Craft, a Utah craft-supply business, and formally renamed itself Cricut, Inc. in 2018 as its electronic cutting machines became the core of the business. Today the lineup runs from the compact Cricut Joy 2 to the larger Explore 5, both refreshed in February 2026, with Joy 2 priced from around $99 up to $229 and Explore 5 from around $199 up to $349 depending on the bundle.',
    'Design Space, the design app that drives every machine, is free to download and use: a starter set of images and fonts comes with the account, and uploading your own artwork or using system fonts costs nothing extra. What Design Space does not give away is the bulk of the licensed and premium content — that sits behind Cricut Access, a subscription with a Standard and a Premium tier priced by the month but discounted only when paid annually.',
    'Standard Access runs from around $7.99 a month on the annual plan (about $9.99 paid month to month), unlocking a library of 130,000-plus images, thousands of ready-to-make projects, 500-plus fonts and 10% off site purchases. Premium, from around $9.99 a month annually, adds free economy shipping over $50, deeper 20–50% discounts on materials and licensed designs, and a larger library — but only at the annual rate; paying monthly costs more.',
  ],
  facts: [
    { label: 'Access (Standard)', value: 'from $7.99/mo, billed yearly' },
    { label: 'Access (Premium)', value: 'from $9.99/mo, billed yearly' },
    { label: 'Machines from', value: 'Joy 2 $99, Explore 5 $199' },
    { label: 'Machine warranty', value: '1–2 years depending on model' },
  ],
  plans: {
    title: 'What Cricut Access actually costs',
    note: 'The headline monthly price only applies if you pay annually up front. Pay month to month and it costs noticeably more, and Premium’s discounted rate is annual-only either way.',
    items: [
      {
        name: 'No Access (free)',
        price: '$0 — Design Space itself is free',
        detail:
          'Comes with a starter set of images and fonts plus unlimited use of your own uploads. Most licensed and premium content stays locked.',
      },
      {
        name: 'Access Standard, billed annually',
        price: 'from around $7.99/month',
        detail:
          '130,000+ images, thousands of ready-to-make projects, 500+ fonts and 10% off site purchases.',
        pick: true,
      },
      {
        name: 'Access Standard, billed monthly',
        price: 'around $9.99/month',
        detail: 'The same library as annual Standard, with no upfront commitment.',
      },
      {
        name: 'Access Premium, billed annually',
        renews: 'Not available at the discounted rate month to month',
        price: 'from around $9.99/month',
        detail:
          'Adds free economy shipping over $50, 20–50% off materials and licensed designs, and a larger image and font library.',
      },
    ],
  },
  pros: [
    {
      title: 'Design Space is genuinely free to use',
      body: 'Every smart machine works with the app at no cost, and the free tier still includes some fonts and images plus unlimited use of your own artwork.',
    },
    {
      title: 'Two current machines span a real price range',
      body: 'Joy 2, from around $99, suits small projects and quick labels; Explore 5, from around $199, handles bigger cuts and thicker materials. Both machines were refreshed in February 2026.',
    },
    {
      title: 'Strong, high-volume iOS reception',
      body: 'Design Space holds 4.7 out of 5 across more than 745,000 App Store ratings — a large and consistent sample, not a handful of reviews.',
    },
    {
      title: 'A real breakage safety net',
      body: 'Machines carry a 1-year manufacturer warranty as standard, stretching to 2 years on the Maker line, with paid Extend protection plans available to buy once that original coverage runs out.',
    },
  ],
  cons: [
    {
      title: 'The subscription is where the real cost lives',
      body: 'Premium’s advertised rate needs an annual payment up front; pay monthly and it costs meaningfully more, and much of the best licensed content is gated behind Access either way.',
    },
    {
      title: 'Materials are a recurring bill the machine price hides',
      body: 'Vinyl, cardstock, iron-on and cutting mats need regular restocking, largely at Cricut’s own prices, so the ongoing materials spend is the real cost of the hobby, not the machine.',
    },
    {
      title: 'The Android experience lags well behind iOS',
      body: 'Design Space rates 3.6 out of 5 on Google Play against 4.7 on the App Store, and reviewers we read repeatedly flagged slow support response times as a separate complaint.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.7, note: '745,000+ ratings' },
    { source: 'Google Play', value: 3.6, note: '86,000+ ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across app quality, machine range and the real cost of Access plus materials',
    },
  ],
  bestFor: [
    'Crafters who want one ecosystem for cutting, printing and iron-on projects',
    'iPhone and iPad users, where Design Space’s reception is strongest',
    'Anyone starting small — the Joy 2 keeps the entry price low',
    'Buyers who will use Access often enough to offset its monthly cost',
  ],
  notFor: [
    'Android-first users, where the app rates meaningfully lower than on iOS',
    'Occasional crafters who will not use enough licensed content to justify Access',
    'Anyone budgeting only for the machine and not the ongoing materials cost',
  ],
  faq: [
    {
      q: 'Do I need Cricut Access to use a Cricut machine?',
      a: 'No. Design Space is free and works with any Cricut smart machine without a subscription, and you can upload your own artwork and use system fonts at no extra cost. Access unlocks the much larger licensed image and font library, thousands of ready-to-make projects, and site-wide discounts on top of what already comes free with the app.',
    },
    {
      q: 'What is the difference between Access Standard and Premium?',
      a: 'Premium costs more but adds free economy shipping on orders over $50, bigger discounts on materials and licensed designs, and a noticeably larger image and font library than Standard offers. The catch is that Premium’s discounted monthly rate is only available if you commit to annual billing; there is no cheaper month-to-month option for that tier.',
    },
    {
      q: 'How much does a Cricut machine actually cost?',
      a: 'Joy 2, the smaller machine, starts from around $99 and runs up to about $229 depending on which bundle of tools and materials you choose. Explore 5 starts from around $199 and runs up to about $349 on the same logic. Both launched in February 2026, so the final price you pay depends heavily on the bundle.',
    },
    {
      q: 'What warranty comes with a Cricut machine?',
      a: 'Standard machines carry a 1-year manufacturer warranty against defects, while the Cricut Maker line carries 2 years of coverage. Materials and accessories such as mats and blades are not covered under either warranty. Extend, a third-party partner, offers a paid protection plan that picks up coverage once the standard warranty period expires.',
    },
    {
      q: 'Can I return a Cricut machine if it is not for me?',
      a: 'Cricut offers a 30-day return window for unopened items accompanied by a receipt, which is fairly standard for the category. On top of that, US and Canadian buyers get a 45-day satisfaction guarantee that can cover products falling outside the usual warranty terms, giving a bit more room to change your mind after opening the box.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'cricut.com',
}
