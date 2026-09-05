/**
 * Brand page data for Coursera (route: /brands/coursera).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.coursera.org/about — founding (2012, Andrew Ng and Daphne
 *     Koller) and the "375+ universities and companies" partner count
 *   - https://www.coursera.org/courseraplus — Plus pricing shape ($59/month
 *     list price, $399/year, 7-day trial on monthly, 14-day money-back on
 *     annual with earned certificates revoked on refund), what Plus does and
 *     does not include (degrees and MasterTrack excluded)
 *   - https://www.forbes.com/sites/michaeltnietzel/2022/09/27/new-coursera-survey-industry-certificates-hold-strong-appeal-for-college-students-and-employers/
 *     — employer recognition gap between named partner certificates (Google,
 *     IBM) and generic course-completion certificates
 *   - Independent review round-ups referencing Coursera's Trustpilot page —
 *     recurring complaints about trial-to-paid conversion and cancellation
 *     friction. Trustpilot blocked direct automated access, so no Trustpilot
 *     score is printed on this page; only the App Store rating is used.
 *   - https://apps.apple.com/us/app/coursera-online-courses/id736535961 — App
 *     Store rating and review count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Coursera's monthly
 * price is currently discounted for new subscribers through a stated end
 * date — the discount will have lapsed or changed by the time this runs. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const coursera: BrandPage = {
  slug: 'coursera',
  schemaType: 'SoftwareApplication',
  providerId: 'coursera',
  metaTitle: 'Coursera review 2026 — Plus pricing and what certs are worth',
  metaDescription:
    'An independent Coursera review: how Plus and financial aid actually work, and the real gap between a named-partner certificate and a plain course one.',
  intro:
    'Coursera puts real university and industry names — Google, IBM, Stanford, Michigan — behind its courses, which is what separates it from an anonymous course marketplace. The subscription, Coursera Plus, bundles most of that catalogue into one annual fee. The part worth understanding before you pay is that not every certificate it issues carries the same weight.',
  about: [
    'Coursera launched in 2012, founded by Stanford computer science professors Andrew Ng and Daphne Koller, and now partners with more than 375 universities and companies according to its own about page. That partner list is the core of the pitch: courses and certificate programmes are built with named institutions rather than solo instructors, and the flagship Professional Certificates — Google, IBM, Meta and similar — are designed jointly with the hiring companies behind them.',
    'Coursera Plus is the subscription layer over that catalogue: one fee for unlimited access to courses, Projects, Specializations and Professional Certificate programmes, though full degree programmes and MasterTrack Certificates sit outside it and are billed separately. Specializations group several courses around one skill, while the named Professional Certificates, built jointly with companies like Google and IBM, are aimed squarely at people trying to break into a specific role. Individual courses and certificates can also be bought one at a time without ever subscribing.',
    'Financial aid is a genuinely useful, under-advertised feature: learners who cannot afford a course or certificate can apply for free access, reviewed case by case, typically within a couple of weeks. It applies to individual paid courses and many certificate programmes, including several of the named partner certificates, not just generic university content. It does not extend to the Coursera Plus subscription itself, which has no aid route of its own and must be paid for directly.',
  ],
  facts: [
    { label: 'Founded', value: '2012' },
    { label: 'Partners', value: '375+ universities/cos' },
    { label: 'Plus (annual)', value: '$399/year' },
    { label: 'Financial aid', value: 'Per-course, not Plus' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'The monthly Plus price is frequently discounted for new subscribers for a limited window, then renews at the full listed rate — check what you will actually pay after the promotion ends, not just the headline offer.',
    items: [
      {
        name: 'Single course or certificate',
        price: 'pay per course',
        detail:
          'One-off purchase for exactly one course or Professional Certificate. The right call if you only want a single credential.',
      },
      {
        name: 'Coursera Plus, monthly',
        price: 'around $59/month at list price',
        renews: 'renews monthly at the standing rate once any new-subscriber discount ends',
        detail:
          'Unlimited access to courses, Projects, Specializations and Professional Certificates. A 7-day free trial applies.',
      },
      {
        name: 'Coursera Plus, annual',
        price: 'around $399/year',
        detail:
          'The same unlimited access, cheaper per month than the monthly plan if you will use it past a few months. Backed by a 14-day money-back window; certificates earned in that window are revoked if you take the refund.',
        pick: true,
      },
      {
        name: 'Financial aid',
        price: 'free, application-based',
        detail:
          'Covers individual paid courses and many certificate programmes for learners who cannot afford them. Does not cover the Plus subscription itself.',
      },
    ],
  },
  pros: [
    {
      title: 'Named institutions, not anonymous instructors',
      body: 'Courses and certificates carry real university and company names — Stanford, Michigan, Google, IBM — which is a meaningfully different proposition from a marketplace where anyone can list a course.',
    },
    {
      title: 'Plus makes multiple certificates one flat cost',
      body: 'If you are working through several courses or certificate programmes in a year, the unlimited-access subscription beats paying for each one individually fairly quickly.',
    },
    {
      title: 'A genuine refund window on the annual plan',
      body: 'Fourteen days to change your mind and get your money back, which is more than most subscription services in this category offer without a fight.',
    },
    {
      title: 'Financial aid actually exists and is usable',
      body: 'Learners who cannot pay can apply for free access to individual courses and many certificates — a real route in, not just marketing language.',
    },
  ],
  cons: [
    {
      title: 'The free trial converts into a real annual charge',
      body: 'Independent reviews and complaint patterns consistently flag being charged in full once a trial ends with limited warning. Set a reminder before day seven if you are not certain you want to keep it.',
    },
    {
      title: 'Not every certificate means the same thing',
      body: 'Named Professional Certificates from partners like Google and IBM carry real, documented hiring weight. A plain course-completion certificate mostly just proves you watched the videos — treating the two as equivalent will disappoint you with employers.',
    },
    {
      title: 'Course quality varies more than the marketing suggests',
      body: 'Peer-graded assignments and instructor engagement are inconsistent outside the flagship Specializations and named Professional Certificates, since not every listed course is built to the same production standard.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: '175k+ ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'strong on partner credibility and certificate breadth, marked down for trial-to-paid billing friction',
    },
  ],
  bestFor: [
    'Anyone stacking multiple certificates in a year, where Plus’s flat fee beats paying per course',
    'Career changers targeting a specific named employer-backed certificate, like Google or IBM',
    'Learners who want a recognisable university or company name attached to their credential',
    'People who qualify for financial aid and want free access to a specific paid course',
  ],
  notFor: [
    'Anyone expecting a Coursera certificate to substitute for an actual degree — it does not',
    'Someone planning to complete exactly one course, where a single one-off purchase is cheaper than subscribing',
    'Learners likely to forget a free trial is running — the annual charge lands automatically once it ends',
  ],
  faq: [
    {
      q: 'Is a Coursera certificate worth anything?',
      a: 'It depends which one. Certificates from named partners — Google, IBM, Meta and similar — carry documented weight with employers, especially for entry-level and career-change hiring. A plain course-completion certificate mainly shows you finished the material and is not a substitute for a degree.',
    },
    {
      q: 'Does Coursera Plus include degree programmes?',
      a: 'No. Full online degrees and MasterTrack Certificates sit outside Plus and are enrolled and billed separately, even if you already subscribe.',
    },
    {
      q: 'Can I use Coursera for free?',
      a: 'For individual courses and many certificate programmes, yes — apply for financial aid and, if approved, get access at no cost. There is no equivalent free-access route for the Coursera Plus subscription itself.',
    },
    {
      q: 'What happens if I cancel Coursera Plus?',
      a: 'You keep access until the current billing period ends. If you request the 14-day money-back refund on the annual plan, any certificates you earned during that window are revoked along with the refund.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'coursera.org',
}
