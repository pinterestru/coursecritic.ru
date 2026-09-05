/**
 * Brand page data for Skillshare (route: /brands/skillshare).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - Company-history sources corroborating the 2010 New York launch, the
 *     2011 public beta, and the March 2014 switch from pay-per-class to a
 *     subscription model (cross-checked across multiple independent sources,
 *     including a Wikipedia summary of that history)
 *   - https://itunes.apple.com/lookup?bundleId=com.skillshare.skillshare —
 *     iOS App Store rating and review count (opened directly)
 *   - Skillshare's own help-centre pricing/refund article and teacher-payment
 *     articles (indexed via search after direct fetches were blocked) —
 *     subscription price shape, free-trial mechanics, royalty-pool payment
 *     model and per-minute rate range
 *
 * ⚠️ The subscription price is a working, hedged value ("around") captured
 * via secondary sources because Skillshare's own pricing pages blocked direct
 * fetching — re-verify against skillshare.com before any campaign. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const skillshare: BrandPage = {
  slug: 'skillshare',
  providerId: 'skillshare',
  metaTitle: 'Skillshare review 2026 — pricing, trial, teacher pay',
  metaDescription:
    'An independent Skillshare review: what Premium actually costs after the free trial, how the royalty-pool model pays teachers, and where the catalogue is thin.',
  intro:
    'Skillshare is a subscription library for creative and hobbyist skills, not a place to buy a single course outright. One flat Premium fee unlocks the whole catalogue, teachers are paid from a pool split by watch-time rather than a fixed royalty, and the free trial converts to a paid annual plan automatically unless you cancel first. It suits browsers who want to dabble across illustration, video and design; it suits career-changers hunting a rigorous, accredited curriculum far less well.',
  about: [
    'Skillshare launched in New York in 2010, initially as a pay-per-class marketplace for creative skills like painting, photography and design. In March 2014 it switched to the subscription model it still uses: one membership fee unlocks the whole catalogue instead of paying per class. Classes stay short and project-based rather than long and credentialed — most build toward a class project a student actually finishes and shares, and anyone with relevant expertise can apply to teach one.',
    'Premium runs on annual billing by default, priced in the mid-teens per month when billed yearly, with a considerably pricier month-to-month option available but not advertised prominently. New sign-ups get a free trial — the exact length varies by promotion — but a card is required upfront and the annual fee charges automatically the moment the trial ends, so a calendar reminder matters more here than on most subscriptions. Teachers are not paid a flat per-student royalty: they draw from a monthly royalty pool split by how many minutes paying members actually watched their classes, at rates commonly cited around $0.05 to $0.10 per minute.',
    'That royalty structure shapes the catalogue: with payouts tied to watch-time rather than a course price, Skillshare’s incentive is volume and completion-friendly runtime, not depth. The platform works best for browsing and short, motivating projects rather than a rigorous curriculum with an assessment at the end — there is no accreditation, no diploma and no employer-recognised certificate at the finish line. Treat it as a well-curated hobby library with real production values, not a substitute for a structured qualification.',
  ],
  facts: [
    { label: 'Founded', value: '2010' },
    { label: 'Model', value: 'Subscription + limited free' },
    { label: 'Credential', value: 'None — no diploma or cert' },
    { label: 'Renewal', value: 'Auto-renews annually' },
  ],
  plans: {
    title: 'How Premium is priced',
    note: 'Skillshare does not publish one universal global price — it varies by region and promotion — and the free trial requires a card upfront, so cancel before it ends if you do not want the annual fee charged automatically.',
    items: [
      {
        name: 'Premium (annual)',
        price: 'Billed yearly, around $14/month',
        detail:
          'The default plan and the one Skillshare promotes; unlocks the full catalogue for one flat annual charge.',
        pick: true,
      },
      {
        name: 'Premium (monthly)',
        price: 'A markedly higher monthly rate',
        detail:
          'Exists but is not prominently advertised — pay month to month and you pay a real premium for the flexibility.',
      },
      {
        name: 'Free tier',
        price: 'Free',
        detail:
          'Limited access to a small slice of classes and features; enough to try the format, not enough to learn a skill in depth.',
      },
    ],
  },
  pros: [
    {
      title: 'One fee, the whole catalogue',
      body: 'No per-course purchase decisions, no upsells mid-class. Once subscribed, every class is included, which suits someone who wants to browse widely across creative subjects rather than commit to one path.',
    },
    {
      title: 'Classes end in something you made',
      body: 'The project-based format means most classes push you toward finishing a tangible piece of work, not just watching a talking head for an hour.',
    },
    {
      title: 'Teachers are paid for engagement, not just enrolment',
      body: 'The watch-time royalty pool rewards classes people actually finish and rewatch, which pushes teachers toward genuinely useful, well-paced content rather than a one-time sales pitch.',
    },
    {
      title: 'Strong production values for the price',
      body: 'Classes are generally well shot and edited compared with the average user-generated marketplace course, a byproduct of Skillshare curating who gets approved to teach.',
    },
  ],
  cons: [
    {
      title: 'The free trial needs a card, and auto-renews into a real charge',
      body: 'You cannot browse Premium without giving payment details first, and if you forget to cancel before the trial ends you are billed for a full year up front, not a month.',
    },
    {
      title: 'No accreditation of any kind',
      body: 'There is no diploma, certificate or recognised qualification at the end of a class. Fine for a hobby or a portfolio piece, useless if an employer needs proof of study.',
    },
    {
      title: 'Depth loses to breadth',
      body: 'Classes are short by design, which suits an introduction but rarely goes deep enough to replace a structured course if you actually need to master a skill, not just sample it.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.82, note: '25,000+ ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'strong production values offset by no accreditation and an auto-renewing trial',
    },
  ],
  bestFor: [
    'Hobbyists who want to browse widely across creative subjects for one flat fee',
    'Anyone who learns better by finishing a project than by taking a test',
    'People happy with short, well-produced classes over long structured courses',
    'Freelancers building a portfolio piece rather than chasing a certificate',
  ],
  notFor: [
    'Anyone who needs an accredited certificate or diploma at the end',
    'Learners who forget to cancel trials — the annual charge lands automatically',
    'People wanting deep, technical mastery rather than an introductory project',
  ],
  faq: [
    {
      q: 'How much does Skillshare actually cost?',
      a: 'Skillshare does not publish one fixed global price. The default is annual billing at a rate in the mid-teens dollars per month; a monthly option exists at a noticeably higher rate but is not promoted as heavily. Check the price shown at signup for your region before committing.',
    },
    {
      q: 'Does the free trial really need a credit card?',
      a: 'Yes. You provide payment details before the trial starts, and if you do not cancel before it ends, the annual fee is charged automatically. Set a reminder a few days before the trial’s end date.',
    },
    {
      q: 'Do Skillshare teachers get paid per student?',
      a: 'No. Teachers share a monthly royalty pool based on how many minutes paying members watched their classes, at rates commonly cited around $0.05 to $0.10 per minute — not a fixed fee per enrolment or per course sold.',
    },
    {
      q: 'Will a Skillshare class help me get a job?',
      a: 'Only indirectly, through the portfolio piece you build, not through a certificate — there isn’t one. Skillshare offers no accreditation, so treat it as a way to practise and produce work, not as a credential employers will recognise.',
    },
    {
      q: 'Is Skillshare better than Udemy?',
      a: 'They solve different problems. Skillshare is a subscription for browsing short, creative, project-based classes; Udemy is a marketplace for buying individual courses outright, often on more technical or professional subjects. Pick based on whether you want to browse or own.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'skillshare.com',
}
