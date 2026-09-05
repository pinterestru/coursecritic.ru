/**
 * Brand page data for Chegg (route: /brands/chegg).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.chegg.com/about — current product line-up (Study Help,
 *     Citation Generator, Grammar Checker, Math Solver, Plagiarism Checker)
 *   - https://www.chegg.com/en/contactus (Chegg Study cancellation article) —
 *     the official cancel steps and the "access until period ends" wording
 *   - https://www.ftc.gov/news-events/news/press-releases/2025/09/ed-tech-provider-chegg-pay-75-million-settle-ftc-allegations-concerning-unlawful-cancellation-practices
 *     — the $7.5m FTC settlement over buried, multi-click cancellation flows
 *   - https://www.highereddive.com/news/chegg-layoffs-strategic-alternatives-google-ai/804192/
 *     — Q2 2025 revenue ($105.1m, down more than a third), the 388-role
 *     (45%) layoff, and Chegg's own attribution to Google AI Overviews
 *   - https://www.edsurge.com/news/2021-02-23-more-students-are-using-chegg-to-cheat-is-the-company-doing-enough-to-stop-it
 *     and https://www.highereducationinquirer.org/2025/07/chegg-critical-history-of-disruptor.html
 *     — the academic-integrity criticism and pandemic-era spike in "Chegging"
 *   - https://apps.apple.com/us/app/chegg-study-homework-help/id385758163 —
 *     App Store rating and review count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const chegg: BrandPage = {
  slug: 'chegg',
  schemaType: 'SoftwareApplication',
  providerId: 'chegg',
  metaTitle: 'Chegg review 2026 — pricing, cancelling, cheating claims',
  metaDescription:
    'An independent Chegg review: what the subscription costs, how to cancel it without a second charge, and the academic-integrity criticism it never shook off.',
  intro:
    'Chegg built a business on step-by-step textbook solutions and on-demand subject experts, and for years that was worth paying for. Two things now complicate it: free AI chatbots answer the same generic questions for nothing, and Chegg was fined by the FTC in 2025 over how hard it made cancelling. Both are worth knowing before you subscribe.',
  about: [
    'Chegg launched in 2005 and made its name renting physical textbooks before selling that side of the business to Ingram Content Group in 2015. What is left is Chegg Study: a searchable library of existing step-by-step solutions plus on-demand Expert Q&A, bundled with a math solver, a writing and grammar checker, and a plagiarism checker. The two subscription tiers, Study and the pricier Study Pack, split the same underlying tools rather than each covering something the other does not.',
    'The pitch is speed for a specific, often oddly-worded homework problem that a general chatbot handles less reliably than a purpose-built database of textbook-matched answers. That advantage is strongest on courses using well-known, widely-assigned textbooks and weaker on anything niche or recently revised. It is why Chegg built a subscriber base in the tens of millions during the pandemic, when remote assessment made the service far more tempting to use than it had been before.',
    'That advantage is shrinking fast. Chegg’s own reporting shows Q2 2025 revenue down by more than a third year over year, which the company blames largely on Google folding AI-generated answers directly into search results and diverting the traffic Chegg relied on. It responded by cutting 388 roles, about 45% of its workforce, in October 2025 — worth knowing if you are relying on this service being around, or well supported, for years to come.',
  ],
  facts: [
    { label: 'Founded', value: '2005' },
    { label: 'Core product', value: 'Step-by-step Q&A' },
    { label: 'Billing', value: 'Monthly, auto-renews' },
    { label: 'FTC cancellation fine', value: '$7.5m (2025)' },
  ],
  plans: {
    title: 'How the subscription is priced',
    note: 'It renews automatically every month until you cancel, and the FTC fined Chegg in 2025 specifically over how hard that cancellation flow was to find — confirm it went through before you assume it has.',
    items: [
      {
        name: 'Free tools',
        price: 'Free',
        detail:
          'The citation generator, grammar checker and plagiarism checker work without a subscription. Fine for light, occasional use.',
      },
      {
        name: 'Chegg Study',
        price: 'a monthly fee, roughly $15–20',
        renews: 'auto-renews monthly at the same rate',
        detail:
          'Step-by-step textbook solutions and Expert Q&A on your specific course questions. The core reason people subscribe.',
        pick: true,
      },
      {
        name: 'Chegg Study Pack',
        price: 'a higher monthly fee than Study alone',
        renews: 'auto-renews monthly at the same rate',
        detail:
          'Bundles the math solver and writing tools in with Study. Worth it only if you will genuinely use both, not just one.',
      },
    ],
  },
  pros: [
    {
      title: 'A large, pre-built solution library',
      body: 'For courses using common textbooks, the odds that your exact problem already has a step-by-step answer are high, which beats prompting a generic chatbot from scratch.',
    },
    {
      title: 'Human experts for the harder cases',
      body: 'Expert Q&A puts a subject-matter person on a specific, oddly-phrased problem that a general AI model still gets wrong more often than a written, checked solution.',
    },
    {
      title: 'One subscription instead of several apps',
      body: 'Study Pack folds a math solver and writing checker in alongside the core homework help, so you are not paying for three separate tools if you actually use all three.',
    },
    {
      title: 'No long-term contract',
      body: 'Billing is monthly with no multi-year lock-in, so a one-month subscription during exam season and then cancelling is a legitimate way to use it.',
    },
  ],
  cons: [
    {
      title: 'Cancellation was bad enough to draw a federal fine',
      body: 'The FTC fined Chegg $7.5m in 2025 over cancellation flows it called buried and cumbersome. If you subscribed through Apple or Google, cancelling on chegg.com alone will not stop the billing — you must cancel through that app store.',
    },
    {
      title: 'The academic-integrity stigma is real, not exaggerated',
      body: 'Reporting from EdSurge and others documented a sharp rise in students using Chegg to copy rather than check answers, and Chegg cooperates with universities investigating specific submissions. Some institutions treat any matched answer as a violation regardless of intent.',
    },
    {
      title: 'The business is shrinking around the product',
      body: 'Revenue fell by more than a third in a single reported quarter of 2025 and the company cut 45% of its workforce that October, largely blamed on free AI answers displacing paid search traffic. Long-term investment in the product is a genuine question mark.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.7, note: '205k+ ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.5,
      note: 'real utility on standard coursework, undercut by cancellation friction, integrity risk and a shrinking business',
    },
  ],
  bestFor: [
    'Students on courses using well-known textbooks who want a fast, checked step-by-step answer',
    'Anyone stuck on a specific problem that generic AI chatbots keep getting wrong',
    'Short, deliberate use — one month during exam season, then cancelled',
    'People who will genuinely use the math solver and writing tools, not just homework Q&A',
  ],
  notFor: [
    'Students at institutions with strict honour codes that treat matched Chegg answers as a violation',
    'Anyone who is likely to forget to cancel, given the auto-renewal and the FTC’s findings on how hard that used to be',
    'Full-semester, every-course use where a free AI chatbot now covers most of the generic questions',
  ],
  faq: [
    {
      q: 'Is using Chegg considered cheating?',
      a: 'It depends entirely on your institution’s policy. Many treat submitting a matched Chegg answer as a violation regardless of intent, and Chegg cooperates with academic-integrity investigations when a dean or officer requests takedown information. Use it to check your own work, not to source a final answer, if you are unsure.',
    },
    {
      q: 'How do I cancel without getting charged again?',
      a: 'Go to My Account, then Orders, and cancel the subscription directly — you keep access until the current billing period ends. If you subscribed through the Apple App Store or Google Play, you must cancel there instead; cancelling on chegg.com will not stop that billing.',
    },
    {
      q: 'What is the difference between Chegg Study and Study Pack?',
      a: 'Study covers the core step-by-step textbook solutions and Expert Q&A. Study Pack adds the math solver and writing/grammar tools on top, for a higher monthly fee. Only worth the upgrade if you will use those extra tools regularly.',
    },
    {
      q: 'Has ChatGPT made Chegg pointless?',
      a: 'Not entirely, but its edge has narrowed. Free chatbots now handle generic questions well, and Chegg’s own revenue figures show the damage. What is left is its pre-built, textbook-matched solution library and human experts for specific problems general AI still gets wrong — a shrinking but not zero advantage.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'chegg.com',
}
