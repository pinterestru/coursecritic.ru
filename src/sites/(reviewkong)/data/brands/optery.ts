/**
 * Brand page data for Optery (route: /brands/optery).
 *
 * SOURCES (checked 21 August 2026):
 *   - https://www.optery.com/pricing/ — the four tiers, the $39 / $149 / $249
 *     annual prices, the 380+ / 555+ / 635+ automated site counts, which tiers
 *     carry Removals Reports, and the 30-day money-back guarantee
 *   - https://help.optery.com/en/article/how-often-does-optery-run-scans-and-opt-outs-z8xpc2/
 *     — scans and opt-outs run at least every 30 days on paid plans; Removals
 *     Reports arrive roughly every 90 days; the report shows only a portion of
 *     the profiles removed
 *   - https://help.optery.com/en/article/does-optery-work-in-other-countries-than-the-united-states-eg-canada-uk-australia-netherlands-1fr62gn/
 *     — consumer accounts cover the US, Canada excluding Quebec, Australia,
 *     New Zealand and South Africa. The UK and EU are NOT served.
 *   - https://help.optery.com/en/article/how-does-your-30-day-money-back-guarantee-work-1f5gimr/
 *     — 30-day no-questions-asked refund, consumer plans only, first purchase only
 *   - https://www.optery.com/data-brokers/ — the public opt-out directory
 *   - https://www.optery.com/family/ — family cover is a discount of up to 30%,
 *     not a fixed-price plan
 *   - https://innovation.consumerreports.org/wp-content/uploads/2024/08/Data-Defense_-Evaluating-People-Search-Site-Removal-Services-.pdf
 *     — Consumer Reports, "Data Defense", published 8 August 2024 on fieldwork
 *     run May–September 2023: Optery Ultimate removed 52% of listings at one
 *     week, 58% at one month and 68% at four months, the best of seven services
 *   - https://www.optery.com/optery-statement-on-consumer-reports-people-search-removal-study/
 *     — Optery's own published objections to that study's method
 *   - https://www.globenewswire.com/news-release/2023/07/25/2710474/0/en/personal-data-removal-startup-optery-achieves-soc-2-type-ii-security-certification.html
 *     — SOC 2 Type II, audited by Prescient Assurance, announced 25 July 2023
 *   - https://www.ycombinator.com/companies/optery — founded 2020, YC Winter
 *     2022, San Francisco, Lawrence Gentilello and Chen Atlas
 *
 * ⚠️ RE-VERIFY BEFORE LAUNCH. Two specific weak points:
 *   1. The Trustpilot and PCMag figures below could NOT be read directly —
 *      both sites return HTTP 403 to automated fetches, so the score and the
 *      review count come from search-index snippets. Open both pages by hand
 *      and correct the numbers before this is published.
 *   2. The per-tier site counts move. Much third-party coverage still quotes
 *      the retired "Core 100+, Extended 200+, Ultimate 350+" figures; the ones
 *      here are from optery.com/pricing on the date above. Re-read that page
 *      rather than trusting a review site.
 * Prices are US dollars and exclude tax. See ../../README.md.
 */
import { SITE } from '../site'

import type { BrandPage } from './types'

export const optery: BrandPage = {
  slug: 'optery',
  providerId: 'optery',
  schemaType: 'Product',
  metaTitle: 'Optery review 2026 — the removal service that shows proof',
  metaDescription:
    'An independent Optery review: what the Removals Reports actually prove, which tier you must buy to get them, what a year costs, and where it will not work.',
  intro:
    'Almost every data-removal service asks you to take its word for it. Optery is the one that photographs the work: on its middle and top tiers it sends a report every ninety days with before-and-after screenshots of the broker pages your details used to sit on. That is the reason to buy it, and it is also the catch, because the cheap tier does not include the reports at all.',
  about: [
    'Optery was founded in 2020 by Lawrence Gentilello and Chen Atlas, went through Y Combinator in the winter 2022 batch, and operates out of San Francisco. The product does what the category does — it finds records of you on people-search sites and data brokers and files opt-out requests — but it is built around verification rather than volume. Paid accounts are re-scanned and re-opted-out at least every thirty days, and on the Extended and Ultimate tiers a Removals Report lands roughly every ninety days showing the broker page before removal and the same page afterwards.',
    'The free tier is unusually substantial and worth using before you decide anything. A free Basic account produces a personalised exposure report with screenshots of where your details are currently published, plus a scan of your Google and Bing results and self-service tools for filing your own opt-outs. It runs no automated removals — that is the paywall — but it does answer the only question that matters at the outset, which is whether you are exposed enough to be worth paying for. Optery also publishes its broker directory openly: a public, free list of hundreds of data brokers with per-broker opt-out instructions, whether or not you are a customer.',
    'The important limit is geographic, and it is the opposite of Incogni’s. Optery sells consumer accounts to residents of the United States, Canada excluding Quebec, Australia, New Zealand and South Africa. It does not serve the UK or the EU, so the GDPR jurisdictions where a removal demand carries the most weight are the jurisdictions Optery does not sell into. If you are in Britain or Europe, this page is background reading rather than a shortlist entry.',
  ],
  facts: [
    { label: 'Launched', value: '2020' },
    { label: 'Base', value: 'San Francisco' },
    { label: 'Brokers covered', value: '380+ to 635+ by tier' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'US dollar prices from optery.com/pricing. Annual billing runs roughly 17% below twelve months at the monthly rate. The line to read is not the price but the site count and whether Removals Reports are included — those are what separate the tiers. Family cover is a discount of up to 30% applied across separate accounts rather than a fixed-price household plan, so there is no single figure to quote. There is a 30-day money-back guarantee, and it applies to a first purchase only.',
    items: [
      {
        name: 'Free Basic',
        price: '$0',
        detail:
          'An exposure report with screenshots of where your details are published, a scan of your Google and Bing results, and self-service opt-out tools. No automated removals — but it tells you whether you need any of this.',
      },
      {
        name: 'Core',
        price: '$39 for the year ($3.99/mo monthly)',
        detail:
          'Automated removals across 380+ sites. Cheapest broad cover in the category — and it does not include Removals Reports, so you are back to taking the vendor’s word for it.',
      },
      {
        name: 'Extended',
        price: '$149 for the year ($14.99/mo monthly)',
        detail:
          '555+ sites and, more to the point, the Removals Reports with before-and-after screenshots every ~90 days. This is the cheapest tier that produces evidence, which is the whole argument for choosing Optery.',
        pick: true,
      },
      {
        name: 'Ultimate',
        price: '$249 for the year ($24.99/mo monthly)',
        detail:
          '635+ automated sites plus unlimited custom removal requests, which Optery counts towards a 950+ total. The custom requests need a 30-day minimum subscription before you can use them.',
      },
    ],
  },
  pros: [
    {
      title: 'It shows you the before and the after',
      body: 'On Extended and Ultimate, a Removals Report arrives roughly every ninety days carrying screenshots of the broker page where your details were published and the same page once they are gone. PCMag’s Neil J. Rubenking, reviewing the service, called it a level of verification he had not seen from another removal service. Everywhere else in this category, "removed" is a status in a dashboard.',
    },
    {
      title: 'The best result in the only controlled test of the category',
      body: 'Consumer Reports ran 32 volunteers against 13 people-search sites and measured what actually disappeared. Optery Ultimate cleared 52% of listings within a week, 58% within a month and 68% within four months — the highest of the seven services tested. The fieldwork ran from May to September 2023 and was published in August 2024, so it is evidence about a three-year-old version of the product, not a current benchmark.',
    },
    {
      title: 'You can see your exposure before paying anything',
      body: 'The free Basic account produces a real exposure report with screenshots rather than a scare-screen counting "47 exposures" and demanding a card. Optery also publishes its broker directory publicly, with opt-out instructions per broker, which is a genuine service to people who would rather do it themselves.',
    },
    {
      title: 'The security posture is audited, not asserted',
      body: 'Using any of these services means handing a company your full name, current and past addresses, phone numbers and e-mail addresses — an unusually complete identity package. Optery completed a SOC 2 Type II audit with Prescient Assurance, announced in July 2023. That is assurance about how it holds your data, which is the risk you take on the moment you sign up.',
    },
  ],
  cons: [
    {
      title: 'The tier worth buying is not the cheap one',
      body: 'Core is $39 a year and carries no Removals Reports. Evidence starts at Extended, which is $149 — nearly four times the price. If the verification is why you chose Optery, the real entry price for this service is $149 a year, and the $39 figure in the advertising buys you the same take-our-word-for-it experience as everyone else.',
    },
    {
      title: 'No UK, no EU',
      body: 'Consumer accounts are sold to residents of the US, Canada excluding Quebec, Australia, New Zealand and South Africa. Britain and the EU — where GDPR gives a deletion demand the sharpest teeth anywhere — are not served on personal plans at all. That is the single reason a reader outside North America should stop reading here.',
    },
    {
      title: 'The headline site count is not what is automated',
      body: 'The "950+ sites" figure counts custom removal requests, which are Ultimate-only and unavailable for the first thirty days of the subscription. Automated coverage tops out at 635+ on Ultimate, 555+ on Extended and 380+ on Core. The larger number is a different product doing a different thing, and it is the one on the marketing.',
    },
    {
      title: 'The reports are a sample, not an audit',
      body: 'Optery’s own help documentation states that a Removals Report displays only a portion of the profiles removed. It is far better evidence than any competitor here provides, and it is still not a complete accounting of what was found, what was requested and what the broker did. Read it as a spot-check.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.4,
      note: 'around 220 reviews on optery.com as indexed in August 2026',
    },
    {
      source: 'PCMag',
      value: 4.5,
      note: 'Editors’ Choice, reviewed by Neil J. Rubenking',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite across measured results, evidence of work done, coverage and cost per year',
    },
  ],
  bestFor: [
    'Anyone who wants proof a broker page is gone rather than a status label saying so',
    'People in the US, Canada outside Quebec, Australia, New Zealand or South Africa',
    'Anyone unsure they are exposed at all — the free tier answers that for nothing',
    'Readers who would rather work through the opt-outs by hand: the broker directory is public',
  ],
  notFor: [
    'Anyone in the UK or the EU — consumer accounts are not sold there',
    'Buyers who want the $39 price and the evidence: those are different tiers',
    'Households wanting one fixed-price family plan rather than a discount across accounts',
    'Anyone expecting a one-off clean-up: brokers re-list, so this is an indefinite subscription',
  ],
  faq: [
    {
      q: 'Which Optery plan should I actually buy?',
      a: 'Extended, at $149 a year, unless money is the binding constraint. It is the cheapest tier that includes the Removals Reports, and the reports are the reason to choose Optery over a cheaper competitor. Core at $39 is broad automated cover with no evidence attached — perfectly reasonable value, but at that point you are buying on price and there are cheaper services still. Ultimate at $249 adds custom removals you cannot use for the first thirty days and mostly suits people who already know exactly where they are exposed.',
    },
    {
      q: 'What does the free plan actually give me?',
      a: 'A personalised exposure report with screenshots showing where your details are currently published, a scan of your Google and Bing results, and self-service tools for filing opt-outs yourself. It runs no automated removals. Its real use is diagnostic: run it first, and if the report comes back thin you have saved yourself a subscription.',
    },
    {
      q: 'Does Optery work in the UK or the EU?',
      a: 'No. Consumer accounts are sold to residents of the United States, Canada excluding Quebec, Australia, New Zealand and South Africa. The UK and EU are not covered on personal plans, though Optery points international enquiries towards its business plans. If you are in a GDPR country, Incogni is the service in this comparison that sells to you.',
    },
    {
      q: 'How good is the 68% figure from Consumer Reports?',
      a: 'It is the best number any paid service in that study produced, and it should still be read carefully. The fieldwork ran from May to September 2023 and covered 13 people-search sites and 32 volunteers, so it is a snapshot of one slice of the category three years ago. Optery has published objections to the method, arguing the manual comparison group used trained privacy professionals with automation and that participants were told not to use features most customers use. Both things are true at once: it is old, contested evidence, and it is more evidence than exists for most of this market.',
    },
    {
      q: 'Will my details stay off once Optery removes them?',
      a: 'No. Brokers rebuild profiles from public records and from each other, which is why Optery re-scans and re-files at least every thirty days rather than sweeping once. Stop paying and the listings return over the following months. Every service in this category is a standing subscription, and any of them implying otherwise is selling you something it cannot deliver.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'optery.com/pricing',
}
