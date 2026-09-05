/**
 * Brand page data for EasyOptOuts (route: /brands/easyoptouts).
 *
 * MONETISATION: EasyOptOuts runs no affiliate programme and says so in public —
 * "We never pay reviewers for traffic." `tracked: false` in ../security/providers.ts
 * is deliberate and the link is a plain nofollow, so this page earns nothing.
 * The page states that in the intro, the pros and the FAQ; that disclosure is
 * the point, not a garnish. See ../../README.md §5, and ./mullvad.ts for the
 * same arrangement in the VPN vertical.
 *
 * SOURCES (checked 21 August 2026):
 *   - https://easyoptouts.com/ — "Just $19.99/year for our top-rated service",
 *     "200+ most visible data brokers and people-search sites", and "We run
 *     another scan every four months"
 *   - https://easyoptouts.com/terms — "If you're not happy with the service we
 *     provide, we'll give you a full refund within 150 days of signing up", and
 *     the restriction to current or recent residents of the United States:
 *     "Our service doesn't work for residents of other countries."
 *   - https://easyoptouts.com/about — founded by "Ben and Tyler", "Our small
 *     team is 100% US-based", and "Our opt-outs are 100% automated"
 *   - https://easyoptouts.com/best-data-removal-service — the affiliate
 *     statement: "Some review sites earn money from affiliate relationships with
 *     the services they review… We never pay reviewers for traffic." Also "We
 *     don't work with data brokers directly and we don't pay to put ourselves on
 *     ratings and review sites that don't measure results."
 *   - https://innovation.consumerreports.org/wp-content/uploads/2024/08/Data-Defense_-Evaluating-People-Search-Site-Removal-Services-.pdf
 *     — Consumer Reports, "Data Defense", published 8 August 2024 on fieldwork
 *     run May–September 2023: EasyOptOuts removed 59% of listings at one week,
 *     61% at one month and 65% at four months, second only to Optery Ultimate at
 *     68% and cheapest of the seven services by a wide margin. The manual DIY
 *     control group scored 70%, beating every paid service.
 *   - https://www.privacyguides.org/articles/2025/02/03/easyoptouts-review/ —
 *     independent retest published 3 February 2025: two US subjects, 15
 *     high-priority brokers, checked at one week, one month and three months;
 *     73–86% of high-priority brokers cleared and 80–90% of the relevant Google
 *     results gone. Privacy Guides notes the sample is small.
 *
 * ⚠️ RE-VERIFY BEFORE LAUNCH. The Trustpilot figure below could NOT be read
 * directly — Trustpilot returns HTTP 403 to automated fetches — so the score and
 * count come from search-index snippets. Open the page by hand and correct it.
 * The $19.99 price has been stable but is a single flat figure with no plan
 * structure behind it, so a change would be a change to everything on this page.
 * See ../../README.md.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const easyoptouts: BrandPage = {
  slug: 'easyoptouts',
  providerId: 'easyoptouts',
  schemaType: 'Product',
  metaTitle: 'EasyOptOuts review 2026 — $19.99, and we earn nothing',
  metaDescription:
    'An independent EasyOptOuts review: the cheapest removal service, second-best in the only controlled test, US-only — and it runs no affiliate programme.',
  intro:
    'Start with the disclosure, because it should change how you read the rest: EasyOptOuts runs no affiliate programme and states publicly that it never pays reviewers for traffic. We are paid nothing whether you subscribe or not, and it is in our ranking on merit alone. What it offers is $19.99 a year, flat, and the second-best result any paid service produced in the only controlled test this category has. What it does not offer is family plans, international coverage, human help, or much in the way of a report.',
  about: [
    'EasyOptOuts is a small, bootstrapped, self-described 100% US-based operation founded by two childhood friends, Ben and Tyler. There is no funding announcement, no enterprise tier and no marketing department. The product is one thing at one price: for $19.99 a year it scans what the site calls the 200+ most visible data brokers and people-search sites, files opt-outs against the ones holding your records, and then does it again. Opt-outs are, in the company’s own words, 100% automated — there is no human tier and no escalation path.',
    'The reason to take it seriously is the evidence. In 2023 Consumer Reports ran the only controlled test this market has: 32 volunteers in California and New York, seven paid services, 13 people-search sites, measured at one week, one month and four months. EasyOptOuts cleared 59% of listings within a week and 65% within four months, second only to Optery’s top tier at 68% — while costing $19.99 against Optery’s $249 and DeleteMe’s $129. Privacy Guides retested it independently in February 2025 against 15 high-priority brokers and found 73% to 86% of them cleared, calling it the best value of any removal service it had tested, while noting its own sample was small.',
    'The catch is scope, in three directions. It sells to current or recent residents of the United States only — its terms say plainly that the service does not work for residents of other countries — so the UK and EU are out. There is no family or household plan, so covering a couple means buying two subscriptions. And it re-scans every four months rather than every thirty days, which matters because brokers re-list on their own refresh cycles: a profile that reappears the week after a scan can sit there for most of a third of a year before the next one catches it.',
  ],
  facts: [
    { label: 'Price', value: '$19.99 a year, flat' },
    { label: 'Sites covered', value: '200+, all automated' },
    { label: 'Scans', value: 'Every four months' },
    { label: 'Refund window', value: '150 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'There is one plan. No monthly option, no tiers, no family pricing and no upsell — covering a second person means a second $19.99 subscription. The refund term is the most generous in this comparison by a wide margin: a full refund within 150 days of signing up, which is long enough to see two full scan cycles before deciding. A business product is sold separately.',
    items: [
      {
        name: 'EasyOptOuts, annual',
        price: '$19.99 for the year',
        detail:
          'Automated opt-outs across 200+ data brokers and people-search sites, re-run every four months, for one person in the United States. That is the entire product.',
        pick: true,
      },
    ],
  },
  pros: [
    {
      title: 'Second-best measured result, at a twelfth of the price of the winner',
      body: 'Consumer Reports measured 59% of listings removed within a week and 65% within four months — behind Optery Ultimate at 68%, ahead of every other paid service tested, and well ahead of DeleteMe at 27%. Optery cost $249 a year and DeleteMe $129. This cost $19.99. That is not a marginal value argument; it is the whole case for the product.',
    },
    {
      title: 'It has been tested twice, by people with nothing to sell',
      body: 'Beyond the Consumer Reports study, Privacy Guides ran its own test in February 2025 against 15 high-priority brokers and found 73% to 86% cleared, concluding it was the best value of any service it had tried. Two independent assessments from non-commercial sources is more scrutiny than most of this category has ever had, and both landed in the same place.',
    },
    {
      title: 'A 150-day refund',
      body: 'You can sign up, watch a scan run, wait four months, watch the second scan, and still get a full refund — the terms allow it within 150 days. Every competitor here works to a 30-day window that expires long before you can judge whether anything is holding. This is the only company in the comparison whose guarantee outlasts its own feedback loop.',
    },
    {
      title: 'It refuses affiliate money, and we are the ones telling you so',
      body: 'EasyOptOuts publishes the fact that it does not pay review sites for traffic and does not pay to appear on ratings sites that do not measure results. That means this page earns us nothing, and the link below is a plain nofollow rather than a tracked one. It also means every other recommendation you will read about this category has a reason to leave it out.',
    },
  ],
  cons: [
    {
      title: 'United States only',
      body: 'The terms restrict the service to current or recent US residents and say directly that it does not work for residents of other countries. There is no UK plan, no EU plan and no Canadian plan. For a reader in a GDPR jurisdiction this is not a cheap option, it is not an option — Incogni is the service in this comparison that sells there.',
    },
    {
      title: 'Three scans a year, against brokers that refresh faster',
      body: 'Scans run every four months. Incogni and Optery re-check at least monthly. Since re-listing is the entire problem with this category, the interval is the product’s weakest specification: a record that reappears shortly after a scan can stay published for close to four months before anything happens to it. The Consumer Reports figures were still strong despite that, which says the coverage is good — but it is the number to weigh if your exposure is the reason you are buying.',
    },
    {
      title: 'No family plan, no household discount',
      body: 'Each person needs their own $19.99 subscription. It is still far cheaper than the alternatives — four people costs about $80 against DeleteMe’s $329 family plan — but there is no discount for buying together, and brokers list relatives and shared addresses alongside you, so households rarely need only one.',
    },
    {
      title: 'Almost no reporting, and nobody to escalate to',
      body: 'You do not get before-and-after screenshots like Optery’s, or per-broker exposure tables like DeleteMe’s quarterly report. Removals are 100% automated with no human tier, so a broker with a deliberately obstructive opt-out process — notarised forms, identity documents, phone-only removal — is a broker that does not get handled. What you are buying is coverage and price, not evidence or advocacy.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.5,
      note: 'around 90 reviews on easyoptouts.com as indexed in August 2026 — a small sample',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite across measured results, evidence of work done, coverage and cost per year',
    },
  ],
  bestFor: [
    'US residents who want the most removal per pound spent, by a long way',
    'Anyone unconvinced this category is worth paying for — at $19.99 the bet is small',
    'People who want a long window to judge the result: the refund runs 150 days',
    'Readers who would rather their recommendation came from somebody not being paid for it',
  ],
  notFor: [
    'Anyone outside the United States — the terms exclude you outright',
    'People who want proof: there are no removal screenshots and no per-broker reporting',
    'Anyone who needs a human to chase an awkward broker — removals are fully automated',
    'Households wanting one plan and one price for several people',
  ],
  faq: [
    {
      q: 'Why is a $19.99 service ranked above ones costing six times more?',
      a: 'Because the only controlled test of this category measured it that way. Consumer Reports found EasyOptOuts removed 65% of listings within four months against DeleteMe’s 27%, at a sixth of the price, and Privacy Guides reached a similar conclusion in a separate 2025 test. Price is not the argument here; measured removal is. Where it loses ground is everything around the removals — no international coverage, no family plan, quarterly-ish scanning and effectively no reporting.',
    },
    {
      q: 'Does EasyOptOuts work in the UK or Europe?',
      a: 'No. Its terms limit the service to current or recent residents of the United States and state that it does not work for residents of other countries. That is a hard stop, not a soft preference. In the UK and EU, Incogni is the service in this comparison that sells to you and cites GDPR and UK GDPR in its requests.',
    },
    {
      q: 'How often does it actually run?',
      a: 'Every four months, so three times a year, and each run re-files opt-outs against brokers that have re-listed you. That is the slowest cadence of the four services compared here — Incogni and Optery re-check at least monthly. Whether it matters depends on how quickly the brokers holding your records refresh: the Consumer Reports result suggests the coverage compensates, but a gap of four months is a real gap.',
    },
    {
      q: 'What does "we earn nothing from this" mean in practice?',
      a: 'EasyOptOuts runs no affiliate programme and publishes the fact that it does not pay reviewers for traffic. The link on this page is therefore a plain nofollow to its own site, not a tracked commercial link, and no commission is paid to us if you subscribe. We rank it where the evidence puts it. The services above and below it on our list do pay commission, and you should read our conclusions about them in that light.',
    },
    {
      q: 'Will $19.99 a year keep my details off permanently?',
      a: 'No, and nothing will. Brokers rebuild profiles from public records, marketing feeds and each other, so removal decays and has to be redone — which is why this is an annual subscription rather than a one-off purchase. Stop paying and the listings come back over the following months. The honest framing for every service in this category is maintenance, not deletion.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'easyoptouts.com',
}
