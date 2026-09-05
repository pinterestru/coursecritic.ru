/**
 * Courses & study.
 *
 * ⚠️ Working values written from the platforms' public pages; re-check before a
 * campaign. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const learningStores: Store[] = [
  {
    slug: 'udemy',
    name: 'Udemy',
    domain: 'udemy.com',
    siteLabel: 'udemy.com',
    badge: 'UD',
    color: '#7A2FB0',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'The sale cycle is the price — nobody should pay list for a Udemy course.',
    about: [
      'Udemy is a course marketplace: instructors set a list price, and the platform runs near-continuous sales that reduce almost everything to a small fraction of it. The list price is an anchor, not a price.',
      'This makes the honest advice simple. There is no need to hunt for a code — wait for the sale, which is rarely more than a week or two away, and buy then. Course prices also differ by country, and the platform’s business subscription is a different product for people who take courses constantly.',
    ],
    offers: [
      {
        id: 'udemy-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring platform-wide sales at a fraction of list price',
        detail:
          'The defining mechanic. Courses drop to a low flat price repeatedly through the year. Buying at list is unnecessary.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'udemy-newuser',
        kind: 'deal',
        value: 'New customer',
        title: 'New-account pricing on a first purchase',
        detail: 'New users typically see reduced pricing on their first course.',
        checked: CHECKED,
      },
      {
        id: 'udemy-subscription',
        kind: 'deal',
        value: 'Deal',
        title: 'Personal subscription plan for heavy users',
        detail:
          'A monthly plan covering a large slice of the catalogue. Worth it above roughly a course a month; not otherwise.',
        checked: CHECKED,
      },
      {
        id: 'udemy-refund',
        kind: 'deal',
        value: 'Refund',
        title: '30-day refund policy',
        detail:
          'A real refund window, subject to how much of the course you have consumed. It makes a bad purchase recoverable.',
        terms:
          'Refunds can be refused where a large share of the course has been watched or downloaded.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Never buy at list price',
        body: 'If the sale is not running today it will be within a fortnight. Add the course to your wishlist and wait.',
      },
      {
        title: 'Check the instructor’s free content first',
        body: 'Most of the good instructors publish substantial free material. It tells you whether their teaching style works for you.',
      },
      {
        title: 'Recent reviews only',
        body: 'A five-year-old course with excellent reviews may cover a version of the software that no longer exists. Sort reviews by date.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Course marketplace, per-course purchase' },
      { label: 'Pricing', value: 'Near-continuous sales against a high list price' },
      { label: 'Refunds', value: '30 days, consumption-dependent' },
      { label: 'Access', value: 'Lifetime on purchased courses' },
    ],
    faq: [
      {
        q: 'Do Udemy coupon codes work?',
        a: 'Instructor-issued codes do, and are sometimes better than the sale price. Generic codes from coupon sites are mostly expired. The sale itself needs no code.',
      },
      {
        q: 'Is the subscription better than buying courses?',
        a: 'Only if you take courses constantly. At sale prices, buying two or three a year is far cheaper than a monthly plan.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Within 30 days, provided you have not consumed most of the course. It is one of the more generous policies in online learning.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'skillshare',
    name: 'Skillshare',
    domain: 'skillshare.com',
    siteLabel: 'skillshare.com',
    badge: 'SK',
    color: '#1F6B5A',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'Creative-class subscription where the annual plan and the trial are the offers.',
    about: [
      'Skillshare is a subscription platform for creative and professional classes — illustration, design, photography, writing, freelancing — with short project-based courses rather than long certifications.',
      'There is one product and two prices: monthly and annual, with annual substantially cheaper per month. The promotional lever is the free trial, and the risk attached to it is the usual one: it needs a card and converts automatically. Skillshare is a good subscription for someone learning actively and a poor one for someone who signs up in January.',
    ],
    offers: [
      {
        id: 'skillshare-annual',
        kind: 'deal',
        value: 'Member',
        title: 'Annual membership well below twelve monthly payments',
        detail: 'The main discount. Worth taking only once you know you will use it.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'skillshare-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial for new members',
        detail:
          'Long enough to complete several classes. Set a reminder for the day before it ends.',
        terms: 'Requires a card and converts to a paid membership automatically.',
        checked: CHECKED,
      },
      {
        id: 'skillshare-teams',
        kind: 'deal',
        value: 'Member',
        title: 'Team plans for small groups',
        detail: 'Per-seat pricing below individual membership for a group of three or more.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Plan the trial before you start it',
        body: 'Pick three classes and block the time. A trial spent browsing converts into a subscription you do not use.',
      },
      {
        title: 'Cancel and keep the term',
        body: 'Cancelling stops the renewal; access runs to the end of the period you have paid for. There is no reason to wait until the last day.',
      },
      {
        title: 'Check the teacher’s other platforms',
        body: 'Popular Skillshare teachers frequently sell the same material as a one-off course. If you only want one, buying it is cheaper.',
      },
    ],
    facts: [
      { label: 'Model', value: 'All-you-can-watch subscription' },
      { label: 'Discount lever', value: 'Annual billing' },
      { label: 'Trial', value: 'Free, card required, auto-converts' },
      { label: 'Focus', value: 'Creative and freelance skills, project-based' },
    ],
    faq: [
      {
        q: 'Does Skillshare have a free plan?',
        a: 'No, only a free trial. Some individual classes are viewable without a membership but the catalogue is behind the subscription.',
      },
      {
        q: 'Do Skillshare promo codes work?',
        a: 'Referral and partner links usually offer extended trials rather than a lower price. The annual plan is the price discount.',
      },
      {
        q: 'Can I download classes?',
        a: 'In the mobile app for offline viewing while your membership is active. Downloads are not permanent copies.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'chegg',
    name: 'Chegg',
    domain: 'chegg.com',
    siteLabel: 'chegg.com',
    badge: 'CH',
    color: '#2A6B3A',
    category: 'learning',
    markets: 'United States primarily, with international access to some products',
    blurb: 'Study subscriptions that are easy to start and famously easy to forget.',
    about: [
      'Chegg sells study help to students: worked solutions, expert questions, writing tools and — in the US — textbook rental. The products are sold as monthly subscriptions.',
      'Discounting here is trial-shaped rather than coupon-shaped. There are free trials, occasional term-length promotions and bundle pricing across products. The financially important fact is not the discount but the cancellation: this is a subscription bought during a semester and frequently paid for through a summer nobody was studying in.',
    ],
    offers: [
      {
        id: 'chegg-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial on the study subscriptions',
        detail:
          'Enough to get through an assignment. It converts to a paid month automatically unless cancelled.',
        terms: 'Card required; auto-renews.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'chegg-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundled study products at a combined rate',
        detail: 'Cheaper than subscribing to two products separately, if you need both.',
        checked: CHECKED,
      },
      {
        id: 'chegg-rental',
        kind: 'deal',
        value: 'Deal',
        title: 'Textbook rental instead of purchase (US)',
        detail:
          'Renting a semester textbook costs a fraction of buying it. Return it on time — late fees convert the rental into a purchase.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Cancel at the end of the semester',
        body: 'The single biggest saving available. Set the reminder when you subscribe, not when you finish exams.',
      },
      {
        title: 'Check your institution’s library first',
        body: 'Many universities provide the same reference material free. It is worth ten minutes before subscribing.',
      },
      {
        title: 'Return rentals on the due date',
        body: 'Late fees on textbook rentals escalate to the purchase price. Diarise the return, not just the exam.',
      },
    ],
    facts: [
      { label: 'Market', value: 'US primarily' },
      { label: 'Model', value: 'Monthly study subscriptions plus textbook rental' },
      { label: 'Trial', value: 'Free, auto-renewing' },
      { label: 'Biggest cost risk', value: 'Forgetting to cancel over a break' },
    ],
    faq: [
      {
        q: 'How do I avoid being charged by Chegg over the summer?',
        a: 'Cancel the subscription at the end of term rather than pausing your usage. Access continues to the end of the paid month.',
      },
      {
        q: 'Are there Chegg discount codes?',
        a: 'Mostly trial extensions and bundle offers rather than percentage codes. The subscription price itself rarely moves.',
      },
      {
        q: 'Is textbook rental cheaper than buying used?',
        a: 'Usually for a single semester, especially on expensive science texts. For a book you will reference for years, buying used wins.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'coursera',
    name: 'Coursera',
    domain: 'coursera.org',
    siteLabel: 'coursera.org',
    badge: 'CO',
    color: '#0056D2',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'University and industry courses — audit free, pay only for the certificate.',
    about: [
      'Coursera hosts courses, professional certificates and full degrees from universities and companies. Unlike a marketplace, the content comes from named institutions, which is most of what you are paying for.',
      'The mechanic almost nobody uses: a large share of individual courses can be audited for free. You get the lectures and the readings; what payment buys is the graded assignments and the certificate. If you want the knowledge rather than the credential, that is the whole cost. For the certificates and specialisations, the subscription is cheaper than paying per course above two or three a year, and financial aid is a real, granted programme rather than a token one.',
    ],
    offers: [
      {
        id: 'coursera-audit',
        kind: 'deal',
        value: 'Free',
        title: 'Audit most individual courses for free',
        detail:
          'Lectures and readings at no cost. Payment buys graded work and the certificate — decide whether you need those.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'coursera-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Subscription covering a large slice of the catalogue',
        detail:
          'Cheaper than paying per certificate above a few a year, and it includes the specialisations.',
        terms: 'Recurring monthly or annual; access ends when it does.',
        checked: CHECKED_R2,
      },
      {
        id: 'coursera-aid',
        kind: 'deal',
        value: 'Student',
        title: 'Financial aid on individual courses',
        detail:
          'A genuine application process that grants free access to paid courses for people who cannot pay. It is granted routinely and it is under-used.',
        checked: CHECKED_R2,
      },
      {
        id: 'coursera-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial on the subscription plans',
        detail: 'Enough to complete a short certificate if you are organised about it.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Audit first, pay later',
        body: 'You can audit, decide the course is worth finishing, and then pay for the certificate track. Not the other way round.',
      },
      {
        title: 'Apply for financial aid if money is the barrier',
        body: 'It is a real programme with a real approval rate. The application takes fifteen minutes.',
      },
      {
        title: 'Finish before you cancel',
        body: 'Subscription access to graded work ends with the subscription. Certificates you have already earned are yours.',
      },
    ],
    facts: [
      { label: 'Content from', value: 'Universities and companies, named' },
      { label: 'Free option', value: 'Audit most individual courses' },
      { label: 'Financial aid', value: 'Available and routinely granted' },
      { label: 'Certificates', value: 'Kept permanently once earned' },
    ],
    faq: [
      {
        q: 'Can I use Coursera for free?',
        a: 'Largely, yes. Most individual courses can be audited free — you lose the graded assignments and the certificate, not the teaching.',
      },
      {
        q: 'Is the subscription worth it?',
        a: 'Above two or three certificates a year, comfortably. For one course, buying it individually or auditing it is cheaper.',
      },
      {
        q: 'Is financial aid real?',
        a: 'Yes. It is an application on the course page, it is granted routinely to people who need it, and it gives full paid access.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'italki',
    name: 'italki',
    domain: 'italki.com',
    siteLabel: 'italki.com',
    badge: 'IT',
    color: '#FF4438',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'One-to-one language tutoring — community tutors are half the price.',
    about: [
      'italki is a marketplace for one-to-one language lessons over video. Teachers set their own rates and you buy lessons directly from them, which makes the price range enormous — the same language can cost four times as much from one teacher as another.',
      'The distinction that saves the most money is professional teachers versus community tutors. Professional teachers hold qualifications and charge accordingly; community tutors are fluent speakers offering conversation practice at much lower rates. For building fluency through conversation, which is what most learners actually need after the basics, the community tutor is frequently the better purchase as well as the cheaper one.',
    ],
    offers: [
      {
        id: 'italki-community',
        kind: 'deal',
        value: 'Compare',
        title: 'Community tutors at roughly half the professional rate',
        detail:
          'For conversation practice — the thing most learners need most — a fluent speaker is as useful as a qualified teacher and much cheaper.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'italki-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Discounted trial lessons with new teachers',
        detail:
          'Most teachers offer a short reduced-price first lesson. Teacher fit matters more than method — use it.',
        checked: CHECKED_R2,
      },
      {
        id: 'italki-package',
        kind: 'deal',
        value: 'Bundle',
        title: 'Lesson packages below the single-lesson rate',
        detail: 'Buying five or ten lessons from one teacher reduces the per-lesson price.',
        checked: CHECKED_R2,
      },
      {
        id: 'italki-firstpurchase',
        kind: 'deal',
        value: 'New customer',
        title: 'First-purchase credit for new students',
        detail: 'A welcome credit applied to a first lesson-credit purchase.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Trial three teachers before committing',
        body: 'Fit is the whole product in one-to-one tutoring. Three cheap trials beat ten lessons with the wrong person.',
      },
      {
        title: 'Teachers in lower-cost countries charge less',
        body: 'A native Spanish speaker in Latin America and one in Spain teach the same language at very different rates.',
      },
      {
        title: 'Buy the package once you have chosen',
        body: 'Not before. Package credits are tied to a teacher you may not stay with.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Marketplace — teachers set their own rates' },
      { label: 'Two tiers', value: 'Professional teachers and community tutors' },
      { label: 'Trials', value: 'Most teachers offer a discounted first lesson' },
      { label: 'Packages', value: 'Cheaper per lesson, tied to one teacher' },
    ],
    faq: [
      {
        q: 'What is the difference between a professional teacher and a community tutor?',
        a: 'Qualifications and price. Professionals teach structured curricula; community tutors offer conversation practice. For fluency after the basics, the tutor is often the better value.',
      },
      {
        q: 'How much does a lesson cost?',
        a: 'It varies enormously by language, by teacher and by where they live. That range is the main thing to exploit.',
      },
      {
        q: 'Should I buy a package?',
        a: 'After you have found a teacher you want to keep, yes. Credits are tied to that teacher, so buying early is a bet.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'british-council',
    name: 'British Council',
    domain: 'englishonline.britishcouncil.org',
    siteLabel: 'englishonline.britishcouncil.org',
    badge: 'BC',
    color: '#1A1A1A',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'Live online English classes from the institution that writes the exams.',
    about: [
      'British Council English Online sells live, small-group English classes taught by qualified teachers, with a placement test, a structured curriculum and progress tracking. The organisation also co-owns the IELTS exam, which is a large part of why its teaching carries weight for people studying towards it.',
      'It is expensive relative to a marketplace tutor and the reason is what you are buying: qualified teachers, a designed curriculum and a recognised name on a certificate. Discounting works by course-length package rather than by coupon — longer commitments drop the per-class price — and there is a substantial free resource library that most people never look at before paying.',
    ],
    offers: [
      {
        id: 'britishcouncil-package',
        kind: 'deal',
        value: 'Bundle',
        title: 'Longer course packages at a lower per-class price',
        detail: 'The per-lesson rate falls substantially on three- and six-month commitments.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'britishcouncil-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free learning resources and practice materials',
        detail:
          'A large free library including IELTS practice. Worth exhausting before paying for classes.',
        checked: CHECKED_R2,
      },
      {
        id: 'britishcouncil-placement',
        kind: 'deal',
        value: 'Free',
        title: 'Free placement test before you buy',
        detail:
          'Buying classes at the wrong level is the expensive mistake here. The test prevents it and costs nothing.',
        checked: CHECKED_R2,
      },
      {
        id: 'britishcouncil-seasonal',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal enrolment campaigns',
        detail: 'Discounted enrolment windows several times a year, tied to term starts.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Take the placement test first',
        body: 'It is free and it stops you buying a course at the wrong level, which is the most expensive error available here.',
      },
      {
        title: 'Use the free library before paying',
        body: 'The practice materials are substantial, especially for IELTS. Many people pay for classes covering ground the free resources handle.',
      },
      {
        title: 'Commit longer only once the level is right',
        body: 'The package discount is real, and it is worth nothing if you are in the wrong class.',
      },
    ],
    facts: [
      { label: 'Format', value: 'Live small-group classes with qualified teachers' },
      { label: 'Free', value: 'Placement test and a large resource library' },
      { label: 'Discount lever', value: 'Course-length packages' },
      { label: 'Relevance', value: 'IELTS preparation, from a co-owner of the exam' },
    ],
    faq: [
      {
        q: 'Is it worth paying more than a marketplace tutor?',
        a: 'For structured progression, qualified teaching and IELTS preparation, many people find it is. For conversation practice alone, a marketplace tutor at a third of the price does that job.',
      },
      {
        q: 'Are the free resources any good?',
        a: 'Substantial, and the IELTS practice material in particular is worth working through before paying for anything.',
      },
      {
        q: 'How do I know which level to buy?',
        a: 'Take the free placement test. Buying at the wrong level is the common and expensive mistake.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'issa',
    name: 'ISSA',
    domain: 'issaonline.com',
    siteLabel: 'issaonline.com',
    badge: 'IS',
    color: '#1F4E9B',
    category: 'learning',
    markets: 'United States, United Kingdom, Canada and other markets',
    blurb: 'Personal-trainer certification — check that your employer recognises it.',
    about: [
      'ISSA sells personal-training and specialist fitness certifications by distance learning: study materials, an online exam and a credential, with bundles that add nutrition, strength or corrective-exercise specialisms.',
      'The question that matters more than the price is recognition. Certification bodies in fitness differ in whether they hold third-party accreditation, and gyms and insurers in some countries accept a narrower list than the marketing implies. Ask the gyms you actually want to work at which credentials they accept before buying any programme — that answer decides the purchase.',
    ],
    offers: [
      {
        id: 'issa-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Certification bundles below the individual courses',
        detail:
          'Trainer plus a specialism bought together is priced well under the two separately. Buy the specialism you will use.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'issa-payment',
        kind: 'deal',
        value: 'Long term',
        title: 'Interest-free payment plans',
        detail: 'Spreads the course fee monthly. Not a discount — check whether interest applies.',
        checked: CHECKED_R2,
      },
      {
        id: 'issa-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Frequent enrolment promotions',
        detail:
          'The sector discounts heavily and often. Paying the list price for a certification course is rarely necessary.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Ask three gyms what they accept before enrolling',
        body: 'Recognition, not price, is what makes a certification worth buying. Five phone calls beats any discount.',
      },
      {
        title: 'Buy the specialism you will actually use',
        body: 'Bundles are cheap because they add courses. Three credentials you never mention are not a saving.',
      },
      {
        title: 'Factor in insurance and renewal',
        body: 'Practising needs liability insurance, and certifications require continuing education to stay valid. Both are ongoing costs.',
      },
    ],
    facts: [
      { label: 'Format', value: 'Distance learning with an online exam' },
      { label: 'Markets', value: 'US, UK, Canada and others' },
      { label: 'Check first', value: 'Which credentials your target employers accept' },
      { label: 'Ongoing costs', value: 'Renewal, continuing education, liability insurance' },
    ],
    faq: [
      {
        q: 'Will gyms accept this certification?',
        a: 'Many do, and acceptance varies by country and by employer. Ask the specific gyms you want to work at before enrolling — that is the only answer that matters.',
      },
      {
        q: 'Is the bundle worth it?',
        a: 'If you will use the specialism, yes. Bundles are priced to add courses, and unused credentials are not value.',
      },
      {
        q: 'Are there ongoing costs?',
        a: 'Yes — renewal fees, continuing education requirements, and separately, liability insurance if you intend to practise.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'novakid',
    name: 'Novakid',
    domain: 'novakidschool.com',
    siteLabel: 'novakidschool.com',
    badge: 'NK',
    color: '#2A9D5C',
    category: 'learning',
    markets: 'UAE, Saudi Arabia, Turkey, South Korea and other markets',
    blurb: 'Online English classes for children — the trial lesson is the decision.',
    about: [
      'Novakid teaches English to children aged roughly four to twelve in one-to-one online classes with native or certified non-native speakers, using a game-based curriculum built for short attention spans.',
      'Everything about the purchase turns on one thing: whether your specific child engages with their specific teacher. That is unpredictable from any description, which is why the free trial lesson exists and why it should be used before any package. Pricing is by lesson package — larger blocks cost less per lesson — and native-speaker teachers cost more than certified non-native ones, a difference that matters less at beginner levels than the marketing implies.',
    ],
    offers: [
      {
        id: 'novakid-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial lesson before any purchase',
        detail:
          'The only reliable way to find out whether your child engages. Use it before buying a package, not after.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'novakid-packages',
        kind: 'deal',
        value: 'Bundle',
        title: 'Larger lesson packages at a lower per-lesson price',
        detail: 'The per-lesson rate falls substantially on bigger blocks.',
        terms: 'Credits usually expire — check the validity window before buying a large block.',
        checked: CHECKED_R2,
      },
      {
        id: 'novakid-teacher',
        kind: 'deal',
        value: 'Compare',
        title: 'Certified non-native teachers below native-speaker rates',
        detail:
          'A meaningful price difference. At beginner and elementary levels the teaching quality matters far more than the accent.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Trial before you buy anything',
        body: 'Child engagement is the entire product and it cannot be predicted. The trial is free and it is the decision.',
      },
      {
        title: 'Check how long credits last',
        body: 'Large packages are cheaper per lesson and expire. A block you cannot finish is not a discount.',
      },
      {
        title: 'Keep lessons short and frequent',
        body: 'Two short lessons a week beats one long one at this age. It also spreads a package further.',
      },
    ],
    facts: [
      { label: 'Ages', value: 'Roughly 4–12' },
      { label: 'Format', value: 'One-to-one online, game-based curriculum' },
      { label: 'Trial', value: 'Free lesson before purchase' },
      { label: 'Watch out for', value: 'Credit expiry on large packages' },
    ],
    faq: [
      {
        q: 'Do I need a native-speaker teacher?',
        a: 'At beginner and elementary levels, no — certified non-native teachers cost less and teach the same curriculum. The difference matters more at advanced levels.',
      },
      {
        q: 'What if my child does not engage?',
        a: 'That is what the free trial is for. Try a different teacher before concluding the format is wrong — fit varies enormously with children.',
      },
      {
        q: 'Do lesson credits expire?',
        a: 'Usually, within a stated window. Check it before buying the largest package, because the per-lesson saving disappears if you cannot use them.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'blinkist',
    name: 'Blinkist',
    domain: 'blinkist.com',
    siteLabel: 'blinkist.com',
    badge: 'BK',
    color: '#2CE080',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'Book summaries by subscription — the annual plan and the trial are the offers.',
    about: [
      'Blinkist condenses non-fiction books into fifteen-minute text and audio summaries. It is a subscription, and the catalogue covers most of the business, psychology and self-improvement titles people mean to read and do not.',
      'It discounts in two ways only: a free trial, and annual billing at a large reduction against monthly. Both are real and both renew automatically. The honest question before subscribing is whether you will use it — this is a category with famously high churn, because the appeal of the idea outlasts the habit for most people.',
    ],
    offers: [
      {
        id: 'blinkist-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the premium subscription',
        detail:
          'Long enough to establish whether you actually use it — which is the real question here.',
        terms: 'Converts to a paid subscription unless cancelled before it ends.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'blinkist-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing well below twelve monthly payments',
        detail: 'A large reduction, and a year-long commitment to a habit you may not keep.',
        checked: CHECKED_R2,
      },
      {
        id: 'blinkist-free',
        kind: 'deal',
        value: 'Free',
        title: 'A rotating free title each day',
        detail: 'One summary a day at no cost. Enough to test the format before subscribing.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Use the free daily title for a fortnight first',
        body: 'If you did not open it most days, a subscription will not change that.',
      },
      {
        title: 'Diarise the trial end date',
        body: 'It converts to an annual plan in many funnels, which is a much larger charge than a month.',
      },
      {
        title: 'Your library card may cover the real books',
        body: 'Public library apps lend the full audiobooks free in most countries. Different product, but worth knowing.',
      },
    ],
    facts: [
      { label: 'Format', value: '15-minute text and audio book summaries' },
      { label: 'Discount lever', value: 'Annual billing' },
      { label: 'Free', value: 'One rotating title a day' },
      { label: 'Watch out for', value: 'Trials that convert to an annual charge' },
    ],
    faq: [
      {
        q: 'Is Blinkist worth it?',
        a: 'If you genuinely listen several times a week, the annual price is small per summary. The category has high churn because most subscribers do not, so test the habit before committing a year.',
      },
      {
        q: 'Does the trial convert to a monthly or an annual plan?',
        a: 'Frequently annual, depending on the funnel you signed up through. Check which before the trial ends — it is a much larger charge.',
      },
      {
        q: 'Is there a free version?',
        a: 'One rotating free title a day, which is a reasonable way to test the format at no cost.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'headway',
    name: 'Headway',
    domain: 'makeheadway.com',
    siteLabel: 'makeheadway.com',
    badge: 'HW',
    color: '#1F4E9B',
    category: 'learning',
    markets: 'Worldwide',
    blurb: 'Book-summary app competing on price — read the renewal terms first.',
    about: [
      'Headway is a book-summary app in the same category as Blinkist: condensed non-fiction in text and audio, plus challenges and streaks designed to build a daily habit. It competes mainly on price and on the mobile experience.',
      'The commercial model in this whole category deserves one warning above everything else. Introductory offers are frequently steep and frequently annual, and the renewal is at full price. Read what term you are buying and what it renews at before you tap through — that is where the money is, not in the discount on the first screen.',
    ],
    offers: [
      {
        id: 'headway-intro',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted introductory subscription',
        detail:
          'Steeply discounted for new users. Check the term length and the renewal price before accepting.',
        terms: 'Auto-renews at the standard rate — often annually.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'headway-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial period',
        detail:
          'Enough to establish whether the habit sticks, which is the only question that matters.',
        checked: CHECKED_R2,
      },
      {
        id: 'headway-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below monthly',
        detail: 'The standard discount, and a year-long commitment.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read the term before the price',
        body: 'The largest discounts in this category attach to annual plans. Know which you are buying.',
      },
      {
        title: 'Set a calendar reminder for the renewal',
        body: 'An annual renewal at full price twelve months after a heavily discounted signup is the standard outcome here.',
      },
      {
        title: 'Test the habit for two weeks first',
        body: 'Summary apps are bought on intention and abandoned on habit. Two weeks tells you which you have.',
      },
    ],
    facts: [
      { label: 'Format', value: 'Book summaries, text and audio, mobile-first' },
      { label: 'Positioning', value: 'Cheaper competitor to Blinkist' },
      { label: 'Discount lever', value: 'Introductory pricing and annual billing' },
      { label: 'Watch out for', value: 'Annual auto-renewal at full price' },
    ],
    faq: [
      {
        q: 'Is Headway cheaper than Blinkist?',
        a: 'It positions itself that way and the introductory offers are usually steeper. Compare the renewal prices rather than the signup prices — that is where the two actually differ.',
      },
      {
        q: 'What happens after the introductory period?',
        a: 'It renews at the standard rate, frequently annually. That is the number to check before you subscribe.',
      },
      {
        q: 'How do I cancel?',
        a: 'Through the app store subscription settings if you subscribed in-app, or in your account if you subscribed on the web. They are different places and people look in the wrong one.',
      },
    ],
    updated: CHECKED_R2,
  },
]
