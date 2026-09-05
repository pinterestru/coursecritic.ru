/**
 * Brand page data for Wondershare (route: /brands/wondershare).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://filmora.wondershare.com/store/windows-individuals.html — Filmora
 *     Windows pricing: Annual plan, Monthly plan and a one-off Perpetual
 *     licence, and that the perpetual licence excludes future major versions,
 *     fetched directly
 *   - https://www.wondershare.com/subscription-renew-terms.html — auto-renewal
 *     wording ("automatically renew... until you cancel") and that service
 *     continues to the end of the paid term after cancelling, fetched directly
 *   - https://www.capterra.com/p/186540/Filmora/ — 4.5/5 from 736 reviews,
 *     fetched directly
 *   - Wondershare's own about/company pages (founded 2003, Shenzhen HQ,
 *     product portfolio including Filmora, Recoverit, PDFelement and Dr.Fone)
 *     — the primary about-us page returned 403/404 to automated fetch, so
 *     these details are corroborated across secondary listings rather than
 *     one primary source
 *
 * ⚠️ Prices, trial limits and renewal terms are working values captured on
 * 2026-08-24 and MUST be re-verified against wondershare.com before launch —
 * Wondershare runs frequent discounts off list price. Recoverit's free-trial
 * recovery cap is stated only as "a small, capped amount" because sources
 * disagreed on the exact figure and it could not be confirmed on the live
 * product page. A Trustpilot score could not be verified (the page blocked
 * automated access) and has deliberately been left out rather than guessed.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const wondershare: BrandPage = {
  slug: 'wondershare',
  providerId: 'wondershare',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Wondershare review 2026 — subscription vs one-off pricing',
  metaDescription:
    'An independent Wondershare review: Filmora’s subscription versus perpetual pricing, free-export watermarks, and the auto-renewal terms that catch people out.',
  intro:
    'Wondershare is not one product but a portfolio: Filmora for video editing, Recoverit for data recovery, PDFelement for documents, Dr.Fone for phone data, sold from separate storefronts with a nearly identical pricing pattern across all of them. Every one offers a free trial that watermarks or caps its output, a subscription, and usually a one-off "perpetual" licence — and the differences between those three options are exactly where buyers get caught out.',
  about: [
    'Wondershare has traded since 2003, headquartered in Shenzhen, China, and now ships dozens of consumer software titles rather than one flagship product. Filmora, its video editor, is the best known; Recoverit (data recovery), PDFelement (PDF editing) and Dr.Fone (phone data transfer and repair) round out the products most likely to appear on a review site, each sold and priced independently of the others under its own storefront and its own trial terms.',
    'The commercial pattern repeats across the portfolio: try free with the output restricted, then choose between a recurring subscription and a one-off "perpetual" licence. On Filmora specifically, the annual plan runs cheaper up front than paying monthly, while the perpetual option costs more than a single year but never expires for the version you bought — it just does not include whichever major version ships after your purchase, which functions closer to "this version, forever" than "all future updates, forever."',
    "The free trial is a genuine trial of the full feature set, not a cut-down demo — the catch is entirely in the export. Trial exports on Filmora carry a watermark, which is Wondershare's way of letting you evaluate the whole workflow before paying while making the output unusable commercially until you do. Other products in the portfolio, like Recoverit, gate differently: full scanning and previewing for free, then a small capped amount of actual data recovery before the software asks for payment.",
  ],
  facts: [
    { label: 'Trading since', value: '2003, Shenzhen' },
    { label: 'Main products', value: 'Video, recovery, PDF, phone' },
    { label: 'Free trial', value: 'Watermarked or capped output' },
    { label: 'Renewal', value: 'Auto-renews until cancelled' },
  ],
  plans: {
    title: 'Subscription versus perpetual, using Filmora as the example',
    note: "Every Wondershare product sold this way runs the same three-way choice — free trial with restricted output, a recurring subscription, or a one-off licence tied to the version you buy. Figures below are Filmora's; other products in the portfolio price separately.",
    items: [
      {
        name: 'Free trial',
        price: '$0',
        detail:
          'The full editor, but exports carry a visible watermark. Good for confirming the software does what you need before paying anything.',
      },
      {
        name: 'Annual plan',
        price: 'Cheaper per year than paying monthly',
        detail:
          'Watermark-free exports and updates for as long as the subscription is active. Auto-renews at the end of the term unless cancelled first.',
        pick: true,
      },
      {
        name: 'Monthly plan',
        price: 'Higher effective cost than annual',
        detail:
          'The same watermark-free access with no annual commitment, priced at a premium for that flexibility. Sensible only for a short, defined project.',
      },
      {
        name: 'Perpetual licence',
        price: 'A single one-off payment, priced above one year of the subscription',
        detail:
          'No expiry and no further renewal charges for the version purchased, but it excludes whichever major version Wondershare ships next — that requires a fresh purchase.',
      },
    ],
  },
  pros: [
    {
      title: 'A real full-feature trial, not a stripped demo',
      body: 'You can build an entire project on the trial and confirm it does what you need before paying — the restriction sits on the final export, not on which tools you can access while working.',
    },
    {
      title: 'A genuine no-subscription option exists',
      body: 'Unlike much of the category, Wondershare still sells a perpetual licence alongside the subscription. Anyone who dislikes recurring software charges has an actual alternative, not just a "contact sales" page.',
    },
    {
      title: 'One portfolio covers several unrelated jobs',
      body: 'Video editing, data recovery, PDF editing and phone data management are all in-house rather than scattered across unrelated vendors, which simplifies support and billing if you end up needing more than one.',
    },
    {
      title: 'Long-running, well-reviewed flagship product',
      body: 'Filmora holds a strong rating across several hundred reviews on independent software-review sites, which for a consumer product that has been on the market for well over a decade suggests durable satisfaction rather than a one-off launch spike.',
    },
  ],
  cons: [
    {
      title: 'The perpetual licence is not what "lifetime" implies',
      body: 'It never expires for the version you bought, but it does not carry you into the next major version — that is a separate purchase. Read it as "this version, indefinitely" rather than "every future update, forever."',
    },
    {
      title: 'Every free export is watermarked or capped',
      body: 'There is no way to get a clean, usable export or a full data recovery out of the free tier on any of these products — the trial exists to prove the software works, not to produce anything you can actually use.',
    },
    {
      title: 'Subscriptions auto-renew until you actively cancel',
      body: "Wondershare's own terms state the subscription renews automatically at the end of each term, and your access continues only to the end of the term you already paid for once you do cancel — there is no partial refund for cancelling mid-term.",
    },
  ],
  reputation: [
    {
      source: 'Capterra (Filmora)',
      value: 4.5,
      note: '736 reviews of the video editor specifically, not the wider product portfolio',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite: capable, well-reviewed software offset by the subscription-vs-perpetual confusion and auto-renewal terms',
    },
  ],
  bestFor: [
    'Anyone who wants to fully test a video editor, PDF tool or recovery tool before paying for it',
    'Buyers who specifically want a one-off licence instead of a recurring subscription',
    'Households already using more than one Wondershare product, consolidating billing and support',
    'Short, single-project use where a monthly plan covers exactly the window needed',
  ],
  notFor: [
    'Anyone assuming "perpetual" or "lifetime" includes free access to future major versions',
    'Buyers who forget to cancel and would be caught by an auto-renewal charge',
    "Recovery jobs bigger than the free trial's capped output — the trial confirms feasibility, not the actual recovery",
  ],
  faq: [
    {
      q: 'Does the perpetual licence really last forever?',
      a: 'For the version you bought, yes — it does not expire and carries no further renewal charge. What it does not do is follow you into the next major version release; accessing that requires a separate new purchase, so "perpetual" describes the licence for one version, not free upgrades indefinitely.',
    },
    {
      q: 'Can I remove the watermark on a free trial export without paying?',
      a: "No. The watermark is deliberately part of the trial's restriction on every product sold this way, and there is no free workaround built into the software itself. A paid subscription or the one-off perpetual licence is required to produce a clean, watermark-free export.",
    },
    {
      q: 'What happens if I forget to cancel my subscription?',
      a: "It renews automatically at your regular rate for another term, per Wondershare's own subscription terms. If you cancel afterward, access continues to the end of whatever term you were just charged for rather than stopping immediately or refunding the difference.",
    },
    {
      q: 'Is Filmora representative of how the whole Wondershare portfolio is priced?',
      a: "The pattern — free trial with restricted output, a subscription, often a perpetual option — repeats across Recoverit, PDFelement and Dr.Fone, but the actual prices and trial limits are set separately for each product. Check the specific product's own pricing page rather than assuming Filmora's figures transfer directly.",
    },
    {
      q: 'Should I buy the monthly plan or the annual plan?',
      a: 'The annual plan works out cheaper per year than paying monthly, so it is the better choice for anything beyond a short, clearly bounded project. Monthly only makes sense if you need the software for a few weeks and want to avoid a longer commitment.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'wondershare.com',
}
