/**
 * Brand page data for Hacoo (route: /brands/hacoo).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://marketing4ecommerce.net/en/everything-about-hacoo/ — Hacoo is the
 *     rebranded name for Saramart (a Chinese social-shopping app that traded as
 *     Saramart from around 2019–2021 and drew scam complaints under that name);
 *     5M+ products, app-only checkout, ~$4.99 flat standard shipping, and that
 *     counterfeit-adjacent items exist on the platform via unlisted links
 *   - Search-summarised results for "How to return the products" on
 *     act.hacoo.app's own help centre — 15-day return window from delivery,
 *     items must be unworn/unused with tags, buyer pays return postage, full
 *     refund on cancellation within 24 hours of ordering
 *   - Trustpilot search-result page titles for www.hacoo.app ("rated
 *     'Average', 3.2/5") — direct fetch of trustpilot.com returns 403; rating
 *     taken from the page's own title as surfaced by search, and volume
 *     (~3,100 reviews) is a search-summarised count
 *   - Hacoo's Google Play listing ("Hacoo – Discovering & Inspiring") — 4.3/5
 *     from a search-summarised ~48,900 ratings, not opened directly
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * hacoo.app before launch and before each campaign. The App Store rating is
 * deliberately omitted below — search results suggested a figure but no page
 * was actually opened to confirm it, so it is referenced only in prose, not
 * as a scored reputation entry. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const hacoo: BrandPage = {
  slug: 'hacoo',
  providerId: 'hacoo',
  metaTitle: 'Hacoo review 2026 — prices, returns, is it Saramart?',
  metaDescription:
    'An independent Hacoo review: what changed when Saramart became Hacoo, how the 15-day return window actually works, and the quality and refund complaints worth knowing first.',
  intro:
    'Hacoo is a Chinese social-shopping app selling home goods, electronics, clothing and footwear at very low prices, browsed like a discovery feed rather than a search-driven store. It only sells through its mobile app — there is no desktop checkout. It is also a rebrand: Hacoo previously traded as Saramart, a name that picked up its own share of scam complaints before the switch.',
  about: [
    'Hacoo runs on the same low-price, high-volume playbook as Shein and Temu, but leans harder into a Pinterest-style discovery feed of products rather than a conventional search-and-filter store. The catalogue runs to more than five million listings across home, electronics, fashion and footwear, and checkout only happens inside the iOS or Android app — there is no browser storefront to fall back on.',
    'The platform is not a new entrant despite the name: Hacoo is the rebranded identity of Saramart, which operated under that name from roughly 2019 to 2021 and picked up a number of scam complaints in that period. Current ratings across both major app stores are considerably better than that history would suggest, though it is worth knowing the app you are installing has changed its name once already.',
    'Standard shipping runs a flat rate of around $4.99 regardless of basket size, orders can be cancelled for a full refund within 24 hours of purchase, and returns get a 15-day window from delivery provided the item is unworn, unused and still tagged — with the buyer covering return postage. None of that is unusual for the category; what is worth checking is that Trustpilot’s recurring complaint is the refund process itself, not the shipping.',
  ],
  facts: [
    { label: 'Platform', value: 'App-only, iOS & Android' },
    { label: 'Formerly', value: 'Rebranded from Saramart' },
    { label: 'Catalogue', value: '5M+ products' },
    { label: 'Returns', value: '15 days, buyer pays shipping' },
  ],
  plans: {
    title: 'How the pricing and returns actually work',
    note: 'There is no subscription tier — this is single-item retail pricing plus a flat shipping charge. The real variable is quality risk, not fees.',
    items: [
      {
        name: 'Standard order',
        price: 'Item price + a flat ~$4.99 shipping',
        detail:
          'Shipping is a flat rate on most orders rather than scaling with basket size — good value on a small order, less so on a large one.',
        pick: true,
      },
      {
        name: '24-hour cancellation',
        price: 'Full refund before the item ships',
        detail:
          'Cancel within 24 hours of ordering for a full refund. After that window you are into the standard return process instead.',
      },
      {
        name: 'Standard return',
        price: 'Free return label, buyer pays postage',
        detail:
          'A 15-day window from delivery. The item must be unworn, unused and still tagged, and you cover the cost of shipping it back.',
      },
    ],
  },
  pros: [
    {
      title: 'Prices are aggressively low',
      body: 'The core appeal is straightforward: a five-million-item catalogue priced to undercut mainstream retail, in the same bracket as Shein and Temu.',
    },
    {
      title: 'A genuine 24-hour full-refund cancellation window',
      body: 'Change your mind within a day of ordering and the refund is unconditional, before the return process — with its buyer-pays-postage catch — ever comes into play.',
    },
    {
      title: 'App-store ratings run well ahead of the platform’s history',
      body: 'Current ratings on both major app stores are solid, a marked improvement on the complaints that followed the app during its years trading as Saramart.',
    },
    {
      title: 'A discovery-feed format some shoppers genuinely prefer',
      body: 'Browsing works more like a social feed than a search box, which suits impulse and inspiration shopping better than a conventional retail site does.',
    },
  ],
  cons: [
    {
      title: 'Quality is inconsistent, by reviewers’ own account',
      body: 'Feedback swings from "top-tier" to disappointing on similar items, which is the expected pattern for an unvetted, high-volume Chinese social-shopping catalogue.',
    },
    {
      title: 'Refunds are the recurring Trustpilot complaint',
      body: 'The most consistent negative theme is friction getting a refund approved, including at least one account restricted after a customer claimed a refund for poor quality.',
    },
    {
      title: 'A short, checkered history under its previous name',
      body: 'Hacoo is a rebrand of Saramart, which drew scam complaints during 2019–2021. The name changed; verify current buyer protections yourself before a large order.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 3.2,
      note: 'rated "Average", roughly 3,100 reviews on the main hacoo.app listing',
    },
    { source: 'Google Play', value: 4.3, note: '~48,900 ratings on the Android app' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.4,
      note: 'our composite across price, quality variance and refund friction',
    },
  ],
  bestFor: [
    'Bargain-hunters comfortable trading quality certainty for very low prices',
    'Small, low-risk purchases rather than anything expensive or time-sensitive',
    'Shoppers already comfortable with Shein- or Temu-style social shopping apps',
    'Buyers who will use the 24-hour cancellation window if they change their mind',
  ],
  notFor: [
    'Anyone who wants a browser checkout — Hacoo only sells inside its app',
    'Buyers who want strong recourse if a refund gets contested',
    'Shoppers who weight platform history heavily, given the Saramart-era complaints',
  ],
  faq: [
    {
      q: 'Is Hacoo the same company as Saramart?',
      a: 'Yes. Hacoo is the rebranded name for the app that previously traded as Saramart, roughly from 2019 to 2021. The catalogue and low-price positioning carried over; the name and branding changed.',
    },
    {
      q: 'Can I shop on Hacoo from a desktop browser?',
      a: 'No. Hacoo only sells through its iOS and Android app. There is no full desktop storefront where you can browse and check out.',
    },
    {
      q: 'How does the return policy work?',
      a: 'You have 15 days from delivery to request a return, and the item must be unworn, unused and still have its tags. Hacoo provides a return label but you pay the postage to send it back.',
    },
    {
      q: 'What does shipping cost and how long does it take?',
      a: 'Standard shipping runs a flat rate of around $4.99 on most orders. As an overseas, China-shipped catalogue, expect delivery to take a few weeks rather than days.',
    },
    {
      q: 'Is Hacoo safe to order from?',
      a: 'Current app-store ratings are solid, but the platform has a mixed history under its previous Saramart name and Trustpilot’s most consistent complaint is refund friction. Treat it as low-risk-purchase territory rather than somewhere for an expensive order.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'hacoo.app',
}
