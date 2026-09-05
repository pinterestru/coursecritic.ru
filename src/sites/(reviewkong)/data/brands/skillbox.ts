/**
 * Brand page data for Skillbox (route: /brands/skillbox).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://skillbox.ru/ — catalogue scope, categories, licence number,
 *     graduate/employment claims, discount and instalment mentions
 *   - Legal/consumer-advice coverage of Skillbox's offer documents (indexed
 *     via search) — the 10-day refund window from date of payment and how
 *     instalment-service refunds are routed
 *   - https://edu.sravni.ru/shkola/skillbox/otzyvy/ — aggregate rating and
 *     review count (opened directly)
 *   - Company-history sources corroborating the 2016 founding and Russia/CIS
 *     market positioning (searched, cross-checked across independent sources)
 *
 * ⚠️ Programme prices, discount percentages and the exact refund window are
 * working values captured from secondary reporting on Skillbox's offer terms,
 * not from the current live contract — re-verify against skillbox.ru before
 * any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const skillbox: BrandPage = {
  slug: 'skillbox',
  providerId: 'skillbox',
  metaTitle: 'Skillbox review 2026 — courses, refunds, job guarantee',
  metaDescription:
    'An independent Skillbox review: pricing tiers, the 10-day refund window, and what its money-back-if-no-job guarantee actually requires you to do first.',
  intro:
    'Skillbox is a Russian-language vocational education platform teaching programming, design, marketing and management to a Russia-and-CIS audience, built around long professional-retraining programmes rather than short hobby classes. It operates under a state education licence and offers some tracks with a stated money-back guarantee if a graduate does not find work, but the fine print on that guarantee, and a refund window that runs to only 10 days from payment, matter more than the marketing headline.',
  about: [
    'Skillbox launched in 2016 and has grown into one of Russia’s larger vocational online-education platforms, with more than 700 programmes spanning programming, design, marketing, management, finance and English. Courses run under a Russian state education licence, and graduates receive either a diploma of professional retraining or a certificate, depending on the programme. Everything — marketing, support, contracts and the licence itself — is built around the Russian legal and education system, not an international one.',
    'Programmes run three to thirteen months and are priced individually rather than through one flat subscription. Skillbox regularly advertises discounts of up to around 55% off list price and offers instalment payment options. Several career-track programmes carry a marketed promise to refund fees if a graduate does not find relevant work, but the qualifying conditions are not spelled out on the page that advertises it — read the actual enrolment contract, not the headline, before counting on that guarantee.',
    'The refund window that applies to everyone, guarantee or not, is short: reporting on Skillbox’s own offer documents puts it at 10 days from the date of payment for a full refund on request, with instalment-service purchases refunded to the finance provider rather than directly to the student. Skillbox states over 141,000 graduates have found work through the platform and that hundreds of companies recruit from its alumni, figures that come from Skillbox’s own marketing rather than an audited third party. It serves a Russian-speaking audience specifically — the platform, support and legal contract are all in Russian.',
  ],
  facts: [
    { label: 'Founded', value: '2016' },
    { label: 'Market', value: 'Russia / CIS (Russian)' },
    { label: 'Refund window', value: '10 days from payment' },
    { label: 'Accreditation', value: 'State-licensed (Russia)' },
  ],
  plans: {
    title: 'What a programme costs',
    note: 'Skillbox prices each programme individually rather than by subscription, and regularly runs discounts — treat any advertised price as a starting point before the current promotion is applied.',
    items: [
      {
        name: 'Full payment',
        price: 'One-time programme fee',
        detail:
          'Full price paid upfront, list price cut by advertised discounts of up to around 55% during sales.',
        pick: true,
      },
      {
        name: 'Instalment plan (Skillbox)',
        price: 'Programme fee split monthly',
        detail:
          'Skillbox’s own instalment option; refunds on cancellation go back through the same instalment structure, not as a lump sum.',
      },
      {
        name: 'Third-party instalment / financing',
        price: 'Financed through a partner service',
        detail:
          'Fees and refund handling run through the finance provider rather than Skillbox directly, which changes how a cancellation is actually resolved.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuinely broad, career-oriented catalogue',
      body: 'More than 700 programmes across programming, design, marketing, management and finance, most built as full retraining tracks rather than single-topic classes.',
    },
    {
      title: 'A real state licence backs the diplomas',
      body: 'Skillbox operates under a Russian state education licence, and graduates receive a diploma of professional retraining or a certificate, not just a platform-issued badge.',
    },
    {
      title: 'Job-outcome guarantee exists on some tracks',
      body: 'Several career programmes carry a stated promise to refund fees if a graduate does not find relevant work, a real commercial risk few competitors take on publicly.',
    },
    {
      title: 'Flexible payment, including instalments',
      body: 'Both an in-house instalment plan and third-party financing are available, which matters given that full programmes can run to a significant, multi-month cost.',
    },
  ],
  cons: [
    {
      title: 'The refund window is short: 10 days',
      body: 'Cancel outside that window and getting money back becomes a formal dispute rather than a routine request, according to legal-advice sites that walk students through the process.',
    },
    {
      title: 'Job-guarantee terms are not published up front',
      body: 'The “money back if no job” promise is advertised on landing pages without spelling out the qualifying conditions — read the actual enrolment contract before treating it as a safety net.',
    },
    {
      title: 'Scale claims are self-reported',
      body: 'The 141,000+ graduates and job-placement figures come from Skillbox’s own marketing pages, not an independent audit, so weigh them against a specific programme’s own outcomes.',
    },
  ],
  reputation: [
    {
      source: 'Sravni.ru',
      value: 4.86,
      note: '3,500+ reviews; Russian ed-tech aggregators trend high, so weigh alongside written complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'broad catalogue and real licensing offset by a short refund window and self-reported outcomes',
    },
  ],
  bestFor: [
    'Russian-speaking career-changers wanting a full multi-month retraining track',
    'Anyone who wants a state-recognised diploma rather than a platform certificate',
    'Students able to use instalment or financing options for a larger programme fee',
    'Buyers who will act inside the 10-day window if the programme is not right',
  ],
  notFor: [
    'Anyone outside the Russian-speaking market — platform, contract and support are all in Russian',
    'Students expecting refund flexibility beyond the first 10 days after payment',
    'Anyone enrolling purely on the job-guarantee headline without reading the qualifying conditions',
  ],
  faq: [
    {
      q: 'Is Skillbox accredited?',
      a: 'Skillbox operates under a Russian state education licence and issues either a diploma of professional retraining or a certificate depending on the programme, which is real accreditation within the Russian system — it is not automatically recognised outside Russia.',
    },
    {
      q: 'How long do I have to cancel and get a refund?',
      a: 'Reporting on Skillbox’s published offer terms puts the full-refund window at 10 days from the date of payment. After that, a refund becomes a formal request under Russian consumer-protection law rather than an automatic process.',
    },
    {
      q: 'Does the money-back-if-no-job guarantee really work?',
      a: 'It exists on some career-track programmes, but the qualifying conditions are not detailed on the pages that advertise it. Read the enrolment contract for the specific programme before enrolling on the strength of the guarantee alone.',
    },
    {
      q: 'Can I pay in instalments?',
      a: 'Yes — Skillbox offers its own instalment plan and works with third-party financing services. Refund handling differs depending on which you use: Skillbox’s own plan versus money already disbursed to a finance partner.',
    },
    {
      q: 'Is Skillbox useful if I do not live in Russia or speak Russian?',
      a: 'Not really. The platform, contracts, support and licence are all built around the Russian market and language. A non-Russian speaker outside that market is better served by an English-language platform.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'skillbox.ru',
}
