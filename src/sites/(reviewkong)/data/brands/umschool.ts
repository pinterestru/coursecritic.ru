/**
 * Brand page data for Umschool (route: /brands/umschool).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://umschool.net/ — subjects covered, subscription tier pricing,
 *     payment methods, average student exam-score claim
 *   - https://www.tadviser.ru (indexed via search) — 2016 Kazan founding,
 *     founder/ownership stake breakdown, Skolkovo residency (2020), VK
 *     ecosystem membership (2021), mentor and teacher counts
 *   - https://otzovik.com/reviews/umschool_net-onlayn_shkola_podgotovki_k_ege_i_oge/
 *     — aggregate rating, review count and recurring criticisms (opened directly)
 *   - https://umschool.net/reviews/ — 700,000+ graduates claim (opened directly;
 *     no aggregate score is shown on that page itself)
 *
 * ⚠️ Subscription prices are working values in Russian roubles, captured on
 * 2026-08-24, and change with promotions — re-verify against umschool.net
 * before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const umschool: BrandPage = {
  slug: 'umschool',
  providerId: 'umschool',
  metaTitle: 'Umschool review 2026 — pricing, subjects, real complaints',
  metaDescription:
    'An independent Umschool review: pricing tiers for Russian EGE and OGE exam prep, and the pricing and support complaints its own reviewers raise most often.',
  intro:
    'Umschool is a Russian online school that prepares school-age students for the EGE and OGE, Russia’s national school-leaving and entrance exams, taught live over webinars rather than pre-recorded video. It runs on monthly subscription tiers priced per subject bundle, backed with 2,000+ mentors supporting students day to day, and its own reviewers report an average exam-score jump — but also raise real complaints about final pricing drifting from what was advertised and customer service after payment.',
  about: [
    'Umschool launched in 2016 in Kazan and has grown into one of Russia’s larger exam-prep platforms, built specifically around the EGE (the university-entrance exam) and OGE (the mid-school exam), plus olympiad and FGOS-standard middle-school courses. Instruction runs as live webinars rather than a pre-recorded library, backed by a stated network of more than 2,000 mentors and around 50 subject teachers who work directly with students. The company became a Skolkovo resident in 2020 and joined VK’s ecosystem in 2021, with VK now holding a 25% stake alongside founder Dmitry Danilov’s majority share.',
    'Pricing runs on monthly subscription tiers rather than a one-off course fee: three levels — Standard, Pro and Premium — each priced per bundle of four subjects, with Premium adding the most direct mentor contact and personalised feedback. Payment options extend beyond a card: instalments, Yandex Split (a buy-now-pay-later service), and Russia’s maternity-capital benefit are all accepted, which signals how squarely this is built for a Russian household budget and Russian financial infrastructure rather than an international audience. Umschool states its students average an exam score of 85.04 out of 100, a headline figure not independently audited.',
    'Umschool’s own marketing claims more than 700,000 graduates since launch, and independent review aggregators back a generally positive experience — but the same reviewers raise a consistent set of complaints worth weighing before paying: prices that shift between what is advertised and what is actually charged, uneven support once a subscription is live, and webinars that some students find padded with chatter rather than tightly focused on exam content. It is a Russian-language service for Russian school students preparing for Russian state exams; nothing about it translates to an international curriculum.',
  ],
  facts: [
    { label: 'Founded', value: '2016 (Kazan)' },
    { label: 'Market', value: 'Russia, Russian-language' },
    { label: 'Format', value: 'Live webinars, not recorded' },
    { label: 'Ownership', value: '25% held by VK' },
  ],
  plans: {
    title: 'How the subscription tiers work',
    note: 'Prices are quoted per bundle of subjects and rise with more subjects added — treat Umschool’s published from-prices as a floor for a single four-subject bundle, not the cost of a full multi-subject programme.',
    items: [
      {
        name: 'Standard',
        price: 'From around 6,510₽/month, 4 subjects',
        detail:
          'Core webinars and materials for four subjects; the entry tier with the least direct mentor contact.',
        pick: true,
      },
      {
        name: 'Pro',
        price: 'From around 10,220₽/month, 4 subjects',
        detail: 'Adds closer mentor support on top of the Standard tier’s content.',
      },
      {
        name: 'Premium',
        price: 'From around 13,240₽/month, 4 subjects',
        detail: 'The most direct mentor contact and personalised feedback of the three tiers.',
      },
    ],
  },
  pros: [
    {
      title: 'Live teaching, not a recorded-video library',
      body: 'Classes run as live webinars with real-time mentor support, which suits students who need to ask questions and get corrected in the moment rather than pause a video.',
    },
    {
      title: 'A genuinely large mentor network',
      body: 'Umschool reports more than 2,000 mentors working directly with students, well beyond what a single-teacher tutoring service can offer at this scale.',
    },
    {
      title: 'Payment options built for a Russian household',
      body: 'Instalments, Yandex Split and maternity-capital payments are all accepted, which matters for a multi-month subscription that many families budget for carefully.',
    },
    {
      title: 'A track record measured in exam results',
      body: 'Umschool publishes a stated average exam score across its student base rather than only marketing testimonials, even though that figure is self-reported, not audited.',
    },
  ],
  cons: [
    {
      title: 'Pricing complaints show up repeatedly in its own reviews',
      body: 'Multiple Otzovik reviewers report the final price differing from what was advertised, discovering extra costs after paying rather than before.',
    },
    {
      title: 'Support quality drops after you have paid',
      body: 'A recurring theme across independent reviews is responsive marketing before purchase and slower, less personal support once a student is enrolled.',
    },
    {
      title: 'Some webinars run long on chat, short on content',
      body: 'Reviewers specifically flag padded, joke-heavy stretches in live sessions, and uneven results in subjects like chemistry and computer science compared with its strongest subjects.',
    },
  ],
  reputation: [
    {
      source: 'Otzovik',
      value: 4.8,
      note: '1,500+ reviews; also documents the pricing and support complaints above',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'live teaching and mentor scale offset by recurring pricing and support complaints',
    },
  ],
  bestFor: [
    'Russian school students preparing specifically for the EGE or OGE',
    'Families who want live webinar teaching over a self-paced video library',
    'Students who benefit from a large mentor network for day-to-day questions',
    'Households needing instalment or Yandex Split payment options',
  ],
  notFor: [
    'Anyone outside the Russian school-exam system — the curriculum is Russia-specific',
    'Students choosing based on the advertised “from” price alone — final cost has drawn complaints',
    'Anyone chemistry- or CS-focused expecting the same quality as its stronger subjects',
  ],
  faq: [
    {
      q: 'What exams does Umschool prepare students for?',
      a: 'Primarily Russia’s EGE (the university-entrance exam) and OGE (the mid-school exam), plus olympiad prep and FGOS-standard courses for younger students. It is built entirely around the Russian school-exam system.',
    },
    {
      q: 'How much does a subscription actually cost?',
      a: 'Three published tiers — Standard, Pro and Premium — start from around 6,510₽, 10,220₽ and 13,240₽ per month respectively for a bundle of four subjects. Adding subjects or a higher tier raises the monthly cost beyond that from-price.',
    },
    {
      q: 'Are classes live or pre-recorded?',
      a: 'Live. Umschool runs webinars with real-time mentor support rather than a self-paced video library, which is part of why reviewers cite responsive teaching as a strength.',
    },
    {
      q: 'What do negative reviews say about Umschool?',
      a: 'The recurring themes are pricing that shifts from what was advertised, support that gets slower after enrolment, and webinars some students find padded rather than tightly focused — all documented on independent Russian review sites, not just marketing pages.',
    },
    {
      q: 'Can a student outside Russia use Umschool?',
      a: 'The curriculum is built specifically for Russian state exams and taught in Russian, so it only makes sense for a student sitting the EGE or OGE — not a general international audience.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'umschool.net',
}
