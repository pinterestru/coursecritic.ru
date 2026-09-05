/**
 * Brand page data for DeleteMe (route: /brands/deleteme).
 *
 * SOURCES (checked 21 August 2026):
 *   - https://joindeleteme.com/pricing/ — US Standard pricing ($129 one person,
 *     $229 two, $329 four, for one year; $209 / $349 / $499 for two years),
 *     annual-or-biennial billing with no monthly option, quarterly privacy
 *     reports, first report within 7 days, and the UK/Canada/Australia currencies
 *   - https://joindeleteme.com/sites-we-remove-from/ — "We Remove Private
 *     Information from 986 Data Brokers", list updated 30 July 2026, with the
 *     footnote legend that tiers those 986 by plan. Roughly 90 carry the
 *     Standard-plan marker; 566 are marked custom-request only.
 *   - https://joindeleteme.com/terms-of-service/ — the refund wording: full
 *     refund before the first Privacy Report, prorated after it
 *   - https://joindeleteme.com/example-report.pdf — the public 20-page sample
 *     report: per-broker status, exposed PII categories, Google-results scan
 *   - https://joindeleteme.com/how-we-work/ — "in business since 2011", the
 *     assigned expert, and the hybrid expert-plus-automation description
 *   - https://en.wikipedia.org/wiki/DeleteMe — Abine, Inc., founded 2010 by Rob
 *     Shavell, Eugene Kuznetsov and Andrew Sudbury; "automated methods and human
 *     intervention"
 *   - https://www.bbb.org/us/ma/boston/profile/computer-hardware/abine-inc-0021-127863
 *     — Boston HQ, BBB A+ rating, accredited since 3 June 2016
 *   - https://innovation.consumerreports.org/wp-content/uploads/2024/08/Data-Defense_-Evaluating-People-Search-Site-Removal-Services-.pdf
 *     — Consumer Reports, "Data Defense", published 8 August 2024 on fieldwork
 *     run May–September 2023: DeleteMe removed 13% of listings at one week, 20%
 *     at one month and 27% at four months; CR also quotes DeleteMe's privacy
 *     policy on transferring personal information in a business transaction
 *   - https://www.comparitech.com/data-privacy-management/reviews/deleteme-review/
 *     — observed contact with 40 to 50 brokers; international service described
 *     as still in development
 *   - https://allaboutcookies.org/deleteme-review — the tiering of the broker
 *     count is not clearly displayed; phone masking is a separate charge
 *   - https://joindeleteme.com/join-our-affiliate-program/ — the affiliate
 *     programme, "Commissions equal to 30-40% of AOV"
 *
 * ⚠️ RE-VERIFY BEFORE LAUNCH. Known weak points:
 *   1. The Trustpilot figure below could NOT be read directly — Trustpilot
 *      returns HTTP 403 to automated fetches on every regional domain, so the
 *      score and count come from search-index snippets. Open the page by hand.
 *   2. The founding year is genuinely contested: BBB says 2009, Wikipedia 2010,
 *      DeleteMe's own marketing "since 2011". This page says 2010 and cites
 *      Wikipedia; do not tighten it to a single sourceless year.
 *   3. International availability is self-contradictory on DeleteMe's own site:
 *      the pricing page sells UK, Canadian and Australian plans, while
 *      joindeleteme.com/international/ says enrollment for international plans
 *      has ended. Check which is live before sending traffic.
 *   4. The ~90 Standard-plan broker figure comes from counting the footnote
 *      markers on the sites-we-remove-from page on the date above. It is a
 *      count of a published list, not a vendor-stated number, and the list is
 *      revised roughly monthly.
 * See ../../README.md.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const deleteme: BrandPage = {
  slug: 'deleteme',
  providerId: 'deleteme',
  schemaType: 'Product',
  metaTitle: 'DeleteMe review 2026 — 986 brokers, about 90 on Standard',
  metaDescription:
    'An independent DeleteMe review: why the advertised 986 brokers are not what your $129 plan covers, what the quarterly reports show, and what it removed.',
  intro:
    'DeleteMe is the oldest and best-known name in data removal, and the one whose headline number needs the most care. Its site says it removes information from 986 data brokers. Its own footnotes say roughly ninety of those are included on the Standard plan most people buy, and 566 are available only as custom requests. The service is real, the reporting is the most detailed in this comparison, and the gap between the advertisement and the plan is the thing to understand before paying.',
  about: [
    'The company behind it is Abine, Inc., based at Marina Park Drive in Boston and trading since around 2010 — Wikipedia dates the founding to 2010 under Rob Shavell, Eugene Kuznetsov and Andrew Sudbury, DeleteMe’s own marketing says "in business since 2011", and its Better Business Bureau profile records a 2009 start. It has been accredited by the BBB since 2016 and holds an A+ rating there. Whichever year you take, it predates every other service in this comparison by about a decade, and it is the one a journalist or an HR department is most likely to have heard of.',
    'The method is a hybrid rather than the pure automation Incogni and EasyOptOuts run. Every plan assigns a named privacy advisor, and DeleteMe describes its people as searching for your information and going back to check each source again after a removal request. Wikipedia describes the approach as automated methods combined with human intervention, and DeleteMe’s own plan wording — "custom removal requests plus automated services" — says the same thing. The human element is what the higher price buys, and it is also what caps the scale: Comparitech, reviewing the service, observed it contacting between forty and fifty brokers.',
    'What arrives is the best reporting in this category, and DeleteMe publishes a twenty-page sample so you can judge it before buying. Each quarterly report lists brokers individually with a removal status, an estimated removal time and the categories of personal information that were exposed at each one — name, age, current and past addresses, phone, photo, e-mail, occupation, property value, court records — alongside a scan of what is showing in your Google results. The first report arrives within about a week of signing up. What it does not contain is screenshots of the broker page before and after, which is what Optery sends; DeleteMe reports a status, not a picture.',
  ],
  facts: [
    { label: 'Operator', value: 'Abine, Inc., Boston' },
    { label: 'Launched', value: 'around 2010' },
    { label: 'Brokers on Standard', value: 'about 90 of 986' },
    { label: 'Reports', value: 'Quarterly' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'US dollar prices from joindeleteme.com/pricing. There is no monthly option — billing is annual or biennial, and it renews automatically. The per-month figures in the advertising are the annual price divided by twelve. UK, Canadian and Australian plans are sold in local currency and are country-locked: a US plan does not cover UK brokers. The refund term is not a fixed window: DeleteMe’s terms give a full refund if you cancel before your first Privacy Report and a prorated one after it, and cancellation is by e-mail or phone rather than a button in the account.',
    items: [
      {
        name: 'One person, one year',
        price: '$129 for the year',
        renews: 'renews automatically at the annual rate',
        detail:
          'The plan the advertising is built around. Roughly ninety brokers covered automatically, a named advisor, and quarterly reports.',
        pick: true,
      },
      {
        name: 'One person, two years',
        price: '$209 for two years',
        detail:
          'About $105 a year — the discount is real, but two years is a long commitment to a service whose measured results are the weakest in this comparison.',
      },
      {
        name: 'Two people, one year',
        price: '$229 for the year',
        detail: 'Around $115 per person. The point at which the pricing starts making sense.',
      },
      {
        name: 'Family, four people, one year',
        price: '$329 for the year',
        detail:
          'About $82 per person per year, the cheapest way into DeleteMe. Still more than twice Incogni’s family rate per head.',
      },
    ],
  },
  pros: [
    {
      title: 'The most detailed reporting in the category',
      body: 'The quarterly report names each broker, gives it a removal status and lists which categories of your information were exposed there — addresses, phone, photo, occupation, property value, court records — plus a scan of your Google results. DeleteMe publishes a full twenty-page sample at joindeleteme.com/example-report.pdf, so you can read exactly what you would receive before handing over a card. Almost nobody else in this market lets you do that.',
    },
    {
      title: 'A named human is attached to the account',
      body: 'Every plan includes an assigned privacy advisor, and DeleteMe’s process has staff re-checking sources after a request rather than logging the request and moving on. For brokers with awkward, deliberately obstructive opt-out flows — notarised forms, phone-only removal, identity documents — a person is what gets through, and a purely automated service simply skips them.',
    },
    {
      title: 'It genuinely sells outside the United States',
      body: 'The pricing page quotes UK, Canadian and Australian plans in local currency, and 153 sites on the broker list are marked as international coverage. That is more than Optery or EasyOptOuts offer consumers. Read the caveat in the cons before relying on it.',
    },
    {
      title: 'The refund is tied to the work, not to a countdown',
      body: 'The terms give a full refund if you cancel before your first Privacy Report arrives, and a prorated refund on the remaining term after that. Since the first report lands about a week in, that means you can see what the service actually found for you and still get your money back — a fairer structure than a fixed thirty-day clock that runs whether or not anything has happened.',
    },
  ],
  cons: [
    {
      title: 'The 986 figure is not what your plan covers',
      body: 'DeleteMe’s own footnotes tier that list: roughly ninety sites carry the Standard-plan marker, 566 are custom-request only, 153 are international plans and 143 are exclusive to the VIP tier. So the number in the headline is about eleven times the number the $129 plan removes from automatically. Nothing here is concealed — it is all on the page — but the tiering is in footnote symbols beside a very large number, and allaboutcookies.org has criticised exactly that presentation.',
    },
    {
      title: 'The weakest measured result of the services tested',
      body: 'In the only controlled test of this category, Consumer Reports found DeleteMe had removed 13% of listings after a week, 20% after a month and 27% after four months — against 68% for Optery and 65% for EasyOptOuts, the latter at a sixth of DeleteMe’s price. The fieldwork ran in 2023 and DeleteMe has had three years to improve since, so treat it as dated rather than current. It is still the only independent measurement that exists, and DeleteMe came near the bottom of it.',
    },
    {
      title: 'Consumer Reports flagged the privacy policy itself',
      body: 'CR quoted DeleteMe’s policy stating it may sell, transfer or share business assets "including your personal information" in a merger, acquisition, divestiture, bankruptcy or dissolution, and noted that some privacy-minded subscribers might not want their information used that way. It is standard commercial boilerplate. It reads differently in a contract with a company whose entire purpose is stopping your details from circulating.',
    },
    {
      title: 'No monthly billing, no free trial, and cancelling means contacting them',
      body: 'The minimum commitment is a year at $129, paid up front. There is a free exposure scan but no trial of the service itself, and the terms route cancellation through e-mail or a phone number rather than a setting in the account. The international plans are the shakiest part: Comparitech describes that side as still in development with inconsistent results, and DeleteMe’s own international page currently says sign-ups have ended even while the pricing page sells UK, Canadian and Australian plans.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.1,
      note: 'around 250 reviews on joindeleteme.com as indexed in August 2026',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite across measured results, evidence of work done, coverage and cost per year',
    },
  ],
  bestFor: [
    'Anyone who wants a person attached to the account rather than a queue of automated requests',
    'People who want to read the exact report they will receive before paying — the sample is public',
    'Households of four, where the per-person price finally becomes competitive',
    'Buyers outside the US who want a mainstream option — subject to checking availability first',
  ],
  notFor: [
    'Anyone buying on the 986 figure: the plan you are looking at covers about ninety of them',
    'Value-led buyers — EasyOptOuts measured better in the Consumer Reports test at a sixth of the price',
    'People who want screenshot proof a page is gone: DeleteMe reports a status, Optery sends pictures',
    'Anyone who wants to pay monthly or cancel with a click',
  ],
  faq: [
    {
      q: 'How many data brokers does DeleteMe actually cover?',
      a: 'It depends entirely on the plan, and the difference is large. The site advertises 986, and its own footnote legend tiers them: roughly ninety are marked as included on the Standard plan, 566 are custom requests you have to submit, 153 belong to international plans and 143 are VIP-only. Comparitech, reviewing the service, observed it contacting between forty and fifty brokers. Buy on the ninety, and treat anything above it as an upsell path rather than something you have already paid for.',
    },
    {
      q: 'Is the human element worth the extra money?',
      a: 'It buys two things an automated service cannot: brokers whose opt-out process is deliberately awkward, and a named advisor to escalate to when a removal stalls. Whether that is worth $129 against $19.99 for EasyOptOuts is the real question, and the only independent measurement that exists went the other way — 27% removed at four months for DeleteMe against 65% for EasyOptOuts. That test is from 2023. The price gap is from today.',
    },
    {
      q: 'What is in the quarterly report?',
      a: 'Each broker listed by name with a removal status and an estimated removal time, the categories of personal information found at each one, counts of listings reviewed and removed, and a scan of what is surfacing in your Google results. The first arrives about a week after signup and then quarterly. What it does not include is before-and-after screenshots of the broker pages — for that, Optery is the service in this comparison that sends them.',
    },
    {
      q: 'Can I get a refund?',
      a: 'DeleteMe’s terms give a full refund if you cancel before your first Privacy Report, and a prorated refund based on the time remaining if you cancel after it. Because the first report arrives within about a week, you can see what it found for you and still exit at no cost. Cancellation is handled by e-mail or telephone rather than in the account settings, so do it with time in hand rather than on the renewal date.',
    },
    {
      q: 'Does DeleteMe work outside the United States?',
      a: 'The pricing page sells plans in pounds, Canadian dollars and Australian dollars, and 153 sites on the broker list are marked as international coverage. Two caveats. Plans are country-locked, so a US subscription does not cover UK brokers. And DeleteMe’s own international page currently states that sign-ups for its international plans have ended, which contradicts the pricing page — check before you buy, and if you are in the EU, Incogni is the service here that clearly sells to you.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'joindeleteme.com/pricing',
}
