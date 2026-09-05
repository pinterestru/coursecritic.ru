/**
 * Brand page data for italki (route: /brands/italki).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.italki.com/en/blog/italki-price (italki's own pricing
 *     guide) — the pay-as-you-go model, trial-lesson discounting, and the
 *     roughly $4–20 (community tutor) vs $10–40 (professional teacher)
 *     per-lesson ranges
 *   - italki's own help-centre article on the Professional Teacher vs
 *     Community Tutor distinction (qualifications and pricing tiers),
 *     corroborated via search of support.italki.com
 *   - Wikipedia's italki entry — founding year (2007), Hong Kong
 *     headquarters, and the "20,000+ teachers across 190 countries" scale
 *     figure, cross-checked against multiple secondary sources; presented
 *     here hedged as "reportedly well over 20,000" rather than repeated as
 *     an exact count
 *   - https://apps.apple.com/us/app/italki-language-learning/id1140000003 —
 *     App Store rating and review count
 *
 * ⚠️ Per-lesson prices are set individually by each teacher and vary
 * constantly — the ranges here are working values captured on 2026-08-24
 * and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const italki: BrandPage = {
  slug: 'italki',
  schemaType: 'SoftwareApplication',
  providerId: 'italki',
  metaTitle: 'italki review 2026 — how per-lesson pricing works',
  metaDescription:
    'An independent italki review: how the pay-as-you-go credits work, what separates a community tutor from a professional teacher, and where cost sits.',
  intro:
    'italki is a marketplace, not a course app: you pick a human tutor and pay that tutor’s own per-lesson rate out of a prepaid credit balance. There is no fixed course fee and no single subscription price, which makes it flexible and means the honest answer to "what does it cost" is always "depends who you book."',
  about: [
    'italki launched in 2007 as an online language-exchange community and is headquartered in Hong Kong. It has grown into a marketplace connecting learners with a large pool of independent teachers, reportedly well over 20,000 of them spread across roughly 190 countries, covering dozens of languages, including many that mainstream subscription apps do not bother building a course for. There is no italki curriculum of its own; the platform is the booking and payment layer between you and whichever teacher you choose.',
    'Every teacher sets their own per-lesson price, and italki splits them into two tiers: Community Tutors, who are native or fluent speakers without formal teaching credentials and are priced for conversation practice, and Professional Teachers, who hold teaching qualifications or a relevant degree and charge more for structured, curriculum-based lessons. A discounted trial lesson with any teacher is the standard way to test fit before booking a full course of lessons.',
    'Money moves through an italki Wallet: you buy credits, pegged to your currency, and spend them booking lessons with whichever teacher you pick. Credit-return rules on a cancelled lesson are set by each teacher’s own cancellation window rather than one platform-wide policy, so it pays to read a specific teacher’s terms before booking. Unused credits can also expire if the account sits inactive for a long stretch — worth knowing if you tend to study in bursts rather than continuously.',
  ],
  facts: [
    { label: 'Founded', value: '2007' },
    { label: 'Headquarters', value: 'Hong Kong' },
    { label: 'Pricing model', value: 'Pay-per-lesson, no plan' },
    { label: 'Payment', value: 'Prepaid wallet credits' },
  ],
  plans: {
    title: 'How lesson pricing works',
    note: 'There is no fixed course price. Every figure below is a typical range — the actual cost is whatever the individual teacher you book has set.',
    items: [
      {
        name: 'Trial lesson',
        price: 'discounted, teacher-set',
        detail:
          'A short introductory lesson, often around 30 minutes, priced below that teacher’s normal rate so you can test their style first.',
      },
      {
        name: 'Community Tutor lessons',
        price: 'roughly $4–20 per lesson',
        detail:
          'Native or fluent speakers without formal teaching credentials. Priced for conversation practice, not a structured curriculum.',
      },
      {
        name: 'Professional Teacher lessons',
        price: 'roughly $10–40 per lesson',
        detail:
          'Credentialed teachers running structured, curriculum-based lessons. Higher price, better suited to exam prep or learning from scratch.',
        pick: true,
      },
      {
        name: 'italki Wallet credits',
        price: 'bought upfront, spent per booking',
        detail:
          'Credits are pegged to your currency and topped up before you book. Balances can expire after prolonged account inactivity.',
      },
    ],
  },
  pros: [
    {
      title: 'You choose exactly who and what you pay for',
      body: 'No platform-wide markup or fixed tier — prices for the same language vary teacher to teacher, so budget-conscious learners can genuinely shop around rather than accept one set price.',
    },
    {
      title: 'Cheap way to test a teacher before committing',
      body: 'A discounted trial lesson costs little and tells you more about fit than any profile description could, before you commit to a full course of paid lessons.',
    },
    {
      title: 'Reaches languages other apps skip',
      body: 'Because any qualified teacher can list themselves, the catalogue extends well beyond the handful of major languages that subscription course apps default to.',
    },
    {
      title: 'A clear, named split between tiers',
      body: 'Community Tutor and Professional Teacher are distinct, defined categories rather than a vague single teacher pool, so you know roughly what kind of lesson you are paying for before you book.',
    },
  ],
  cons: [
    {
      title: 'Quality is entirely teacher-dependent',
      body: 'italki checks credentials for the Professional Teacher label but does not deliver lessons itself. A bad match means finding a different teacher, not a platform-wide fix or guarantee.',
    },
    {
      title: 'Video calls can be unreliable',
      body: 'Lessons run over video tools inside italki’s own interface, and users report calls dropping or lagging when a teacher’s own connection or setup is weak — worth testing in a trial lesson first.',
    },
    {
      title: 'Wallet credits can expire on you',
      body: 'Credits sit in a prepaid balance that can lapse after an extended period of inactivity, so learners who study in irregular bursts risk losing money they have already paid in.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: '9.7k+ ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'flexible and wide-reaching, marked down for variable call quality and wallet expiry',
    },
  ],
  bestFor: [
    'Learners who want a native speaker for conversation practice at a low per-lesson cost',
    'Anyone studying a language too niche for subscription apps’ built-in course libraries',
    'Learners preparing for a specific exam who want a structured, credentialed teacher',
    'People who want to try several teaching styles cheaply before settling on one',
  ],
  notFor: [
    'Anyone who wants one predictable monthly bill rather than variable per-lesson spending',
    'Complete beginners who want an app-guided curriculum instead of choosing their own teacher',
    'Infrequent learners likely to let a purchased credit balance sit long enough to expire',
  ],
  faq: [
    {
      q: 'Do I need a subscription to use italki?',
      a: 'No. The core lesson marketplace is pay-as-you-go: buy credits and spend them booking whichever teacher you choose. A separate, optional add-on subscription for extra study tools exists but does not gate lesson booking itself.',
    },
    {
      q: 'What is the difference between a Community Tutor and a Professional Teacher?',
      a: 'Community Tutors are fluent or native speakers without formal teaching credentials, priced lower and best for conversation practice. Professional Teachers hold a teaching qualification or relevant degree, cost more, and run structured, curriculum-based lessons.',
    },
    {
      q: 'What happens if I cancel a lesson?',
      a: 'Refund and credit-return rules are set by each teacher’s own cancellation window, commonly requiring notice around 24 hours ahead — check the specific teacher’s stated policy before booking, since it is not one uniform platform rule.',
    },
    {
      q: 'Do italki credits expire?',
      a: 'Yes, if the account is inactive for an extended period. If you study in irregular bursts rather than continuously, check your balance before a long pause so you do not lose money you have already paid in.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'italki.com',
}
