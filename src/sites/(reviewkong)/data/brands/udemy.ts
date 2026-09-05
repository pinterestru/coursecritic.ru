/**
 * Brand page data for Udemy (route: /brands/udemy).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://support.udemy.com/hc/en-us/articles/360050856093-Udemy-s-refund-policy
 *     and https://support.udemy.com/hc/en-us/articles/229606248 (indexed via
 *     search after a direct fetch was blocked) — refund window and exceptions,
 *     course pricing shape
 *   - https://itunes.apple.com/lookup?id=562413829 — iOS App Store rating and
 *     review count (opened directly)
 *   - https://investor.coursera.com/news/news-details/2026/Coursera-Completes-
 *     Combination-with-Udemy-... and https://blog.udemy.com/udemy-coursera-combine/
 *     — merger close date (May 2026) and combined-company scale claims
 *   - Founding facts (May 2010, San Francisco) corroborated across multiple
 *     independent company-history sources
 *
 * ⚠️ Course prices move constantly with Udemy's near-permanent sitewide sales;
 * treat every price here as a shape, not a quote, and re-verify before any
 * campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const udemy: BrandPage = {
  slug: 'udemy',
  providerId: 'udemy',
  metaTitle: 'Udemy review 2026 — pricing, refunds, course quality',
  metaDescription:
    'An independent Udemy review: per-course pricing versus the Personal Plan subscription, what the 30-day refund policy excludes, and why quality varies so much.',
  intro:
    'Udemy is the largest open course marketplace on the internet: anyone can teach, anyone can buy a single course for life, and in 2026 it became part of Coursera after the two merged. That scale is also the catch. Course quality ranges from genuinely excellent to thin and outdated because there is no admissions bar for instructors, so the platform rewards buyers who read reviews before they pay, not buyers who trust the catalogue by default.',
  about: [
    'Udemy opened its marketplace in 2010 on a simple premise: anyone can build a video course, price it, and sell it to Udemy’s global audience, with the platform taking a cut. That open-door model produced one of the largest catalogues in online learning — commonly cited in the hundreds of thousands of courses — but it also means there is no admissions committee. Instructors range from working practitioners with real credentials to hobbyists recording their first tutorial, and Udemy’s own 2025 push toward stricter instructor vetting and AI-driven content review is a tacit admission that quality control had been thin.',
    'Two ways to pay coexist. Buy a course outright and you own it for life, with individual prices ranging roughly from single digits to around $200 before Udemy’s frequent sitewide sales cut that further; or subscribe to the Personal Plan, a curated library that covers only a slice of the full marketplace rather than every course. Refunds on individual purchases follow a 30-day window, but the guarantee has real edges: subscriptions are not covered by the same 30-day promise, iOS purchases refund as store credit rather than cash, and live Udemy Connect sessions cannot be cancelled inside 48 hours of the start time.',
    'In May 2026, Coursera completed an all-stock merger with Udemy, folding it into a combined company the two firms say serves well over 100 million registered learners and tens of thousands of instructors across a joint catalogue. For a buyer, the immediate effect is limited: courses, pricing and the instructor marketplace kept running as before, but expect Udemy’s positioning to drift closer to Coursera’s university-partnered courses over time. For now it remains the platform where you can find a course on almost anything, taught by almost anyone, at almost any level of polish.',
  ],
  facts: [
    { label: 'Founded', value: '2010' },
    { label: 'Catalogue', value: '200,000+ courses' },
    { label: 'Ownership', value: 'Part of Coursera (2026)' },
    { label: 'Refund window', value: '30 days, with exceptions' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Prices swing constantly with Udemy’s near-permanent sales, so treat any figure here as the shape of the pricing, not a quote.',
    items: [
      {
        name: 'Pay per course',
        price: 'Roughly $10–$200, often discounted',
        detail:
          'Own the course for life once bought. Sitewide sales are near-constant, so the list price is rarely what anyone actually pays.',
        pick: true,
      },
      {
        name: 'Personal Plan subscription',
        price: 'Monthly or annual subscription',
        detail:
          'Access to a curated library that covers only part of the full marketplace, not every course on Udemy — check a specific course is included before subscribing for it.',
      },
      {
        name: 'Udemy Business (teams)',
        price: 'Per-seat, sold to organisations',
        detail:
          'A separate enterprise catalogue and admin tools, priced and sold outside the consumer checkout entirely.',
      },
    ],
  },
  pros: [
    {
      title: 'The biggest open catalogue in online learning',
      body: 'With courses numbering in the hundreds of thousands across dozens of languages, if a niche skill has an audience willing to pay for it, someone on Udemy has probably taught it.',
    },
    {
      title: 'You own what you buy',
      body: 'A purchased course is yours for life, no subscription required to keep watching it — unlike Skillshare or the Personal Plan, which stop working the moment you stop paying.',
    },
    {
      title: 'Real, if imperfect, refund cover',
      body: 'Individual course purchases carry a 30-day money-back window — more forgiving than most one-off digital purchases get elsewhere, even though the guarantee itself has carve-outs worth reading first.',
    },
    {
      title: 'Instructors keep teaching what they know, priced how they like',
      body: 'Course creators set their own pricing and content, so specialised or fast-moving topics — a new framework, a regional certification — show up on Udemy long before a curated platform commissions one.',
    },
  ],
  cons: [
    {
      title: 'No admissions bar for instructors',
      body: 'Anyone can publish a course, so quality swings from genuinely expert to thin and outdated in the same search results. Udemy’s own 2025 vetting push is an admission the problem was real; read reviews before buying, every time.',
    },
    {
      title: 'The refund guarantee has real gaps',
      body: 'Subscriptions carry no 30-day promise, iOS purchases refund as app-store credit rather than cash, and live Udemy Connect sessions cannot be cancelled inside 48 hours of starting. Read the exceptions, not just the headline.',
    },
    {
      title: 'Web reviews and app reviews tell different stories',
      body: 'Third-party review aggregators for the web platform skew heavily toward billing and refund complaints, while the iOS app itself holds a strong average rating — a reminder that one score rarely captures the whole picture.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.72, note: '76,778 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'catalogue breadth and pricing flexibility offset by inconsistent instructor quality',
    },
  ],
  bestFor: [
    'Anyone who wants to own a course outright rather than rent access to it',
    'Self-directed learners hunting a specific, niche or fast-moving skill',
    'Bargain hunters happy to wait for one of Udemy’s frequent sales',
    'Teams buying access to a large catalogue via Udemy Business rather than individual seats',
  ],
  notFor: [
    'Anyone who assumes every course is vetted to the same standard — it is not',
    'Subscribers expecting the Personal Plan to cover every course in the marketplace',
    'Learners who value instructor credentials over price and search-ranking',
  ],
  faq: [
    {
      q: 'Is Udemy still independent now that Coursera owns it?',
      a: 'No — Coursera completed an all-stock merger with Udemy in May 2026. Day to day, courses and pricing kept running as before, but expect the two catalogues and brands to converge further over time.',
    },
    {
      q: 'What is the actual refund policy?',
      a: 'Individually purchased courses can be refunded within 30 days under Udemy’s stated policy, but subscriptions are excluded from that 30-day guarantee, iOS purchases refund as store credit rather than cash, and live Connect sessions cannot be cancelled inside 48 hours of starting.',
    },
    {
      q: 'Is the Personal Plan subscription worth it over buying courses?',
      a: 'Only if you finish more than roughly one course a month from its curated library. It does not include Udemy’s full marketplace, so check the specific course you want is actually in the subscription before assuming it is covered.',
    },
    {
      q: 'How do I know if a course is any good before buying?',
      a: 'Read the reviews and check the instructor’s other courses — there is no admissions bar for teaching on Udemy, so ratings and review volume are doing the vetting a curated platform would otherwise do for you.',
    },
    {
      q: 'Can I get a certificate that means something?',
      a: 'You get a completion certificate, but it carries no accreditation and is not equivalent to a university credential. For it to matter, employers need to recognise Udemy specifically, which varies a great deal by industry.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'udemy.com',
}
