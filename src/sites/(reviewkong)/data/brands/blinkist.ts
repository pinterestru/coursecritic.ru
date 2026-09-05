/**
 * Brand page data for Blinkist (route: /brands/blinkist).
 *
 * SOURCES — every figure below comes from these pages:
 *   - Blinkist's own pricing and magazine pages describing its plans, cross-
 *     checked against independent pricing round-ups (makeheadway.com,
 *     befreed.ai) after blinkist.com blocked direct automated access —
 *     annual plan around $99.99/year, monthly plan billed separately with no
 *     trial attached, free tier limited to one preselected summary a day
 *   - Wikipedia's Blinkist entry — founded 21 August 2012 in Berlin;
 *     acquired by Go1 (Australian corporate-learning company) on 8 May 2023
 *   - Independent 2025–2026 catalogue-size reporting citing 9,000+ nonfiction
 *     titles, and independent Trustpilot-review round-ups describing a
 *     recurring complaint pattern: trial converting to a full annual charge
 *     with refund difficulty, especially via app-store purchases
 *   - https://apps.apple.com/us/app/blinkist-book-summaries-daily/id568839295
 *     — App Store rating and review count
 *
 * ⚠️ Prices are working values captured on 2026-08-24 via secondary sources
 * because blinkist.com blocked direct automated fetches — re-verify against
 * blinkist.com before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const blinkist: BrandPage = {
  slug: 'blinkist',
  schemaType: 'SoftwareApplication',
  providerId: 'blinkist',
  metaTitle: 'Blinkist review 2026 — what a summary is not, and pricing',
  metaDescription:
    'An independent Blinkist review: how the annual and monthly plans differ, what a 15-minute summary leaves out of the book, and the trial-billing complaint.',
  intro:
    'Blinkist condenses nonfiction books into roughly 15-minute text or audio summaries, which is genuinely useful for triaging a reading list. It is not a substitute for the book, and the site is upfront that the two are different products. The annual plan is also the only sensible way to buy it — the monthly plan and the trial terms are built to push you there.',
  about: [
    'Blinkist was founded in Berlin in August 2012 and built its catalogue around condensing nonfiction books into short summaries — "key ideas" you can read or listen to in about 15 minutes rather than committing to the full text. In May 2023 it was acquired by Go1, an Australian corporate-learning content company, and now operates as part of that broader learning catalogue rather than as an independent standalone app.',
    'The product itself has grown into a catalogue reported at more than 9,000 nonfiction titles, each reduced to a set of key-idea summaries with an audio narration option read by a professional narrator rather than machine-generated speech. The pitch is efficiency: a way to survey a topic, decide which full books are actually worth your time, or refresh material you have already read, rather than a genuine substitute for absorbing a book’s full argument and evidence.',
    'Access is subscription-based, with a limited free tier and two paid tiers that differ mainly in billing period rather than features. The annual plan is materially cheaper per month than the monthly plan and is the only one bundled with a free trial, which is a fairly deliberate way to steer new users toward the plan Blinkist would rather sell. Both paid tiers cover the full summary library and audio narration once you are past the limited free tier.',
  ],
  facts: [
    { label: 'Founded', value: '2012, Berlin' },
    { label: 'Owner', value: 'Go1 (acquired 2023)' },
    { label: 'Catalogue', value: '9,000+ titles' },
    { label: 'Free trial', value: '7 days, annual plan only' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Prices vary by region and by promotion, and only the annual plan carries a free trial — treat any figure here as a working estimate to confirm at checkout.',
    items: [
      {
        name: 'Free',
        price: 'Free',
        detail:
          'One preselected key-idea summary per day, text only. No audio narration and no access to the wider library.',
      },
      {
        name: 'Premium, monthly',
        price: 'around €15.99/month',
        detail:
          'Full library and audio narration, billed every month with no free trial attached — noticeably worse value than the annual plan.',
      },
      {
        name: 'Premium, annual',
        price: 'around $99.99/year',
        detail:
          'Same full library and audio narration, works out to a much lower monthly cost than the monthly plan, and is the only tier bundled with a 7-day free trial.',
        pick: true,
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely large catalogue for the format',
      body: 'More than 9,000 nonfiction titles condensed into short summaries makes it a fast way to survey a topic or decide which full books are actually worth reading.',
    },
    {
      title: 'Audio narration on every summary',
      body: 'Every title is available to listen to as well as read, which is the whole point of the format — it turns a commute or a workout into reading time.',
    },
    {
      title: 'The annual plan is genuinely cheap once you commit',
      body: 'At around $99.99 a year, the per-month cost undercuts the monthly plan by a wide margin if you actually use it consistently across the year.',
    },
    {
      title: 'Backed by a larger learning company since 2023',
      body: 'The Go1 acquisition brought Blinkist under a broader corporate-learning content catalogue, rather than leaving it as a single-product startup with no wider backing.',
    },
  ],
  cons: [
    {
      title: 'A summary is not the book',
      body: 'You get the author’s headline arguments, not the evidence, nuance or counter-examples that often are the actual value of a good nonfiction book. Treat it as a preview or refresher, never a replacement.',
    },
    {
      title: 'The monthly plan is priced to push you off it',
      body: 'No trial, and a materially worse per-month rate than the annual plan — it exists mainly for people not ready to commit for a year, and is priced accordingly.',
    },
    {
      title: 'Trial-to-paid billing is a recurring complaint',
      body: 'Independent reviews repeatedly describe being charged the full annual fee immediately after a free trial, with refund requests, particularly on app-store purchases, harder to resolve than expected.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: '154k+ ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'a genuinely useful triage tool, marked down for the trial-billing complaint pattern and the format’s inherent limits',
    },
  ],
  bestFor: [
    'People who want a fast way to triage a long reading list before committing to full books',
    'Commuters or exercisers who want short nonfiction audio in digestible chunks',
    'Readers happy treating summaries as a discovery tool, not a substitute for deep reading',
    'Anyone who will use it consistently enough that the annual plan’s low per-month cost pays off',
  ],
  notFor: [
    'Anyone who wants a book’s actual argument, evidence and nuance rather than a 15-minute distillation',
    'Casual users likely to sign up on the monthly plan and barely open the app — it only pays off with real use',
    'Anyone who might forget a running free trial — mark the date, since day seven triggers a full annual charge',
  ],
  faq: [
    {
      q: 'Is a Blinkist summary the same as reading the book?',
      a: 'No. It compresses the author’s central arguments into roughly 15 minutes and strips out the supporting evidence, digressions and nuance that are often the real value of a good nonfiction book. Use it as a preview or a refresher, not a replacement for reading the book itself.',
    },
    {
      q: 'Does the free trial really require a card?',
      a: 'Yes, and it only exists on the annual plan. You are charged the full annual price automatically once the trial ends unless you cancel first — the single most common complaint in independent reviews of the service.',
    },
    {
      q: 'What do I get without paying?',
      a: 'The free tier gives you one preselected summary a day, text only, with no audio narration and no access to the wider catalogue.',
    },
    {
      q: 'Who owns Blinkist?',
      a: 'Blinkist was acquired by Go1, an Australian corporate-learning content company, in May 2023. The original Berlin-founded product continues operating under that ownership rather than as an independent company.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'blinkist.com',
}
