/**
 * Brand page data for Envato Elements (route: /brands/envato).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://elements.envato.com/pricing — Core, Plus and Ultimate monthly
 *     prices, AI-credit allowances, "29+ million creative assets", unlimited
 *     downloads on every tier, fetched directly
 *   - https://elements.envato.com/about — Envato founded 2006, $1.4B in
 *     contributor earnings, fetched directly
 *   - Envato's subscription and cancellation help articles (licensing being
 *     project-specific, what happens to licences after cancelling) — the live
 *     pages returned 403 to automated fetch, so this is stated at the level of
 *     mechanism rather than quoting exact policy wording
 *   - https://www.capterra.com/p/241830/Envato-Elements/ — 4.8/5 from 37
 *     reviews, fetched directly
 *
 * ⚠️ Prices, credit allowances and promotional terms are working values
 * captured on 2026-08-24 and MUST be re-verified before any campaign. A
 * Trustpilot score could not be verified (the page blocked automated access)
 * and has deliberately been left out rather than guessed. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const envato: BrandPage = {
  slug: 'envato',
  providerId: 'envato',
  metaTitle: 'Envato Elements review 2026 — pricing and the licence trap',
  metaDescription:
    'An independent Envato Elements review: how the unlimited-download subscription is actually priced, and what really happens to your licences the day you cancel.',
  intro:
    'Envato Elements sells unlimited downloads from a library of tens of millions of stock assets — video, photos, fonts, templates, music — for one flat monthly fee. The pitch is simple and the library is genuinely broad. The part buyers get wrong is what "unlimited" licenses actually cover once the subscription itself stops: it is narrower than the marketing implies.',
  about: [
    'Envato has run creative marketplaces since 2006, and Elements is its subscription product: instead of buying individual stock items on Envato Market, a flat monthly fee gives unlimited downloads across the whole catalogue — more than 29 million assets spanning video, photos, audio, fonts, graphics, templates and 3D. Envato states $1.4 billion in cumulative contributor earnings across its marketplaces, which gives a sense of scale even without an exact subscriber count.',
    "The subscription tiers do not gate the asset library itself — every plan gets the same unlimited downloads. What differs is the monthly allowance of AI-generation credits, used against Envato's built-in AI tools, and how many of those generations can run in parallel. Buying Elements for the stock library alone means the cheapest tier does the same job as the most expensive one; the higher tiers exist for people using the AI features heavily, not for people who just want more downloads.",
    'The licence is the part worth reading before subscribing. Every download comes with a commercial licence, but that licence is scoped per project — using the same asset in a second, separate piece of work requires generating a new licence for it, not just re-downloading the file. That distinction becomes a real cost the day you cancel: your existing licences remain valid for what you already built with them, but you lose the ability to generate any new licence, including for assets you already have sitting on disk.',
  ],
  facts: [
    { label: 'Founded', value: '2006' },
    { label: 'Catalogue', value: '29M+ creative assets' },
    { label: 'Downloads', value: 'Unlimited on every tier' },
    { label: 'Licence', value: 'Per-project, not per-file' },
  ],
  plans: {
    title: 'How the subscription is priced',
    note: 'Every tier includes the same unlimited downloads and the same commercial licence terms — the only real difference between Core, Plus and Ultimate is the monthly AI-credit allowance, not the stock library you can reach.',
    items: [
      {
        name: 'Core',
        price: 'From around $16.50/month, billed annually',
        detail:
          'Unlimited downloads across the full library plus a modest monthly AI-credit allowance. The right tier if you are subscribing for the stock assets and rarely touch the AI tools.',
        pick: true,
      },
      {
        name: 'Plus',
        price: 'From around $39/month, billed annually',
        detail:
          'Same unlimited downloads, a substantially larger AI-credit allowance, and several generations running in parallel instead of one at a time.',
      },
      {
        name: 'Ultimate',
        price: 'From around $99/month, billed annually',
        detail:
          'The largest AI-credit allowance, sold in a few size options, aimed at teams or individuals generating AI content at volume rather than downloading stock.',
      },
      {
        name: 'Enterprise',
        price: 'Custom pricing',
        detail:
          'Multiple seats, tailored licensing terms and a dedicated account manager, aimed at organisations rather than solo buyers.',
      },
    ],
  },
  pros: [
    {
      title: 'One subscription, one price, the whole catalogue',
      body: 'No per-asset checkout and no tier that locks part of the library behind a higher price. Whatever you download on the cheapest plan is the same file a top-tier subscriber gets.',
    },
    {
      title: 'The library is genuinely broad',
      body: 'Video, photo, audio, fonts, graphics, templates and 3D assets sit in one catalogue of more than 29 million items, which covers most project needs without switching to a second stock site.',
    },
    {
      title: 'A real commercial licence, not a vague "personal use" grant',
      body: 'Downloads come with a licence intended for commercial projects, which matters for anyone building client work rather than a personal hobby project — just remember each new project needs its own licence generated, not simply the downloaded file.',
    },
    {
      title: 'AI tools are bundled rather than a separate subscription',
      body: 'The built-in AI generation tools draw from the same monthly credit pool as the plan you already pay for, instead of requiring a second product purchase.',
    },
  ],
  cons: [
    {
      title: 'Cancelling freezes your licences, not just new downloads',
      body: 'What you have already licensed keeps working for that specific use, but you cannot generate a new licence for anything after cancelling — even for a file you downloaded months ago, if you want to use it in a new project.',
    },
    {
      title: 'A licence is per project, not per file',
      body: 'Re-using a previously downloaded asset in a second, unrelated project needs its own new licence generated while you are still subscribed. Treating a download as a permanent, reusable asset is the single most common misunderstanding of the terms.',
    },
    {
      title: 'Individual item quality is inconsistent at this scale',
      body: 'A 29-million-item library assembled from many contributors inevitably varies in production quality and how current templates are kept. Previewing before committing a project timeline to a specific asset is worth the extra minute.',
    },
  ],
  reputation: [
    {
      source: 'Capterra',
      value: 4.8,
      note: 'from 37 reviews — a small sample, read alongside the pricing page itself',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite: broad library and flat pricing, offset by the licence-on-cancellation trap',
    },
  ],
  bestFor: [
    'Freelancers and small studios who need a steady stream of stock assets across formats',
    'Anyone already comparing Elements against buying individual stock items one at a time',
    'Teams that want one licence structure to explain to clients rather than several stock vendors',
    'Buyers who will actually use the AI-generation credits, not just the stock downloads',
  ],
  notFor: [
    'Anyone planning to cancel and keep generating new licences for previously downloaded assets',
    'One-off projects needing a single asset, where a one-time stock purchase is cheaper',
    'Buyers who expect "unlimited" to mean the licence itself has no scope restriction',
  ],
  faq: [
    {
      q: 'What actually happens to my licences if I cancel?',
      a: 'Anything you already generated a licence for keeps its validity for that specific use. What stops is the ability to create any new licence — including for a file already sitting on your drive — so a resubscribe is required the moment you need to license an asset for a new project.',
    },
    {
      q: 'Can I reuse a downloaded asset across multiple projects on one subscription?',
      a: 'Only by generating a separate licence for each project. The download itself is not the licence; the licence is tied to the specific end use you generate it for, so a second project needs its own licence even if you never re-download the file.',
    },
    {
      q: 'Do the AI tools cost extra on top of the subscription?',
      a: 'No, they draw from the same monthly credit allowance included in your plan rather than a separate charge. Core includes a modest allowance; Plus and Ultimate include progressively larger ones, aimed at people using AI generation heavily rather than mainly downloading stock assets.',
    },
    {
      q: 'Is the cheapest plan missing any assets the expensive plans get?',
      a: 'No. Every tier reaches the same full catalogue with the same unlimited downloads, so there is no hidden gate on the stock library itself. The tiers differ only in AI-credit allowance and how many generations can run in parallel, not in what stock content is available to download.',
    },
    {
      q: 'Is Envato Elements the same as Envato Market?',
      a: 'No. Envato Market sells individual items one at a time from named creators; Elements is the flat-fee subscription with unlimited downloads across a curated catalogue. They are run by the same company but are different products with different licensing mechanics.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'elements.envato.com',
}
