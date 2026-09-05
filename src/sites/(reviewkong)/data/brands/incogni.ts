/**
 * Brand page data for Incogni (route: /brands/incogni).
 *
 * SOURCES (checked 18 August 2026):
 *   - https://incogni.com/ and https://incogni.com/pricing — plans, prices,
 *     420+/3,000+ site coverage, the ~14-day first-resolution figure, the
 *     Deloitte assessment wording and the 30-day money-back guarantee
 *   - https://support.incogni.com/hc/en-us/articles/5285682832402 — the list of
 *     countries Incogni serves
 *   - https://www.security.org/data-removal/incogni/ — US dollar pricing on
 *     monthly vs annual billing, and the 30–45 day statutory response window
 *   - https://en.wikipedia.org/wiki/Incogni — built inside Surfshark in 2021,
 *     public launch January 2022; documented criticism (no free trial, no
 *     confirmation that a broker complied)
 *   - https://www.trustpilot.com/review/incogni.com — 4.3 from 2,901 reviews
 *
 * ⚠️ Every figure here is a working value captured on the date above and MUST
 * be re-verified against incogni.com before launch. Prices in this category are
 * regional and promotional: the site quotes different currencies and first-year
 * discounts by location, so the USD figures below will not match what a reader
 * in the EU sees. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const incogni: BrandPage = {
  slug: 'incogni',
  providerId: 'incogni',
  metaTitle: 'Incogni review 2026 — what it removes, and for how long',
  metaDescription:
    'An independent Incogni review: which data brokers it can compel, what privacy law gives it leverage, what it costs monthly versus annually, and why removal lasts only as long as you keep paying.',
  intro:
    'Incogni sends opt-out and deletion demands to data brokers on your behalf, then keeps sending them. The service is legitimate and the mechanism is real, but the thing to understand before you buy is that it is a subscription, not a fix: brokers rebuild profiles from public records, so removal holds only while the requests keep going out.',
  about: [
    'The product is an automation layer over a right you already have. You sign up, hand over the identifiers Incogni needs to find you — name, addresses, e-mail, phone numbers — and sign an authorisation form letting the company act on your behalf. It then scans people-search sites for records matching you and fires opt-out requests at the brokers on its list, including the ones holding private databases you cannot scan. Incogni says the first wave typically resolves in around 14 days, and that individual brokers vary from hours to weeks.',
    'Incogni was built inside Surfshark in 2021 and launched publicly in January 2022. Surfshark’s holding structure merged with Nord Security shortly afterwards, so Incogni sits in the same corporate group as NordVPN, Surfshark and NordPass. Both parent brands market it on their own sites. That is worth knowing if you are assembling a privacy stack from what look like independent vendors — they are not independent of each other.',
    'The leverage comes from statute: GDPR and UK GDPR in Europe, CCPA/CPRA in California, PIPEDA in Canada, and the growing set of US state privacy laws. Brokers inside those regimes have a legal window — commonly 30 to 45 days — to act on a verified request. Outside them, a removal request is a polite letter with no force behind it, which is why Incogni sells only to residents of about 34 countries: the US, Canada, the UK, Switzerland, Norway, Iceland, Liechtenstein and the EU member states. Its coverage spans people-search sites, marketing and advertising databases, recruitment brokers, and the financial and risk-mitigation firms whose files feed insurance and lending decisions.',
  ],
  facts: [
    { label: 'Launched', value: '2022' },
    { label: 'Owner', value: 'Surfshark / Nord Security group' },
    { label: 'Brokers covered', value: '420+ automated, 3,000+ custom' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'US dollar list prices from incogni.com. Annual billing costs roughly half the monthly rate, and that gap is the whole pricing story here. Prices are regional — other markets are quoted in local currency, sometimes with a discounted first year that renews at the standard annual rate, and tax is added on top. There is no free tier; the 30-day money-back guarantee is the only way to try it.',
    items: [
      {
        name: 'Standard, monthly',
        price: '$15.98/mo billed monthly',
        detail:
          'Automated removals from 420+ brokers for one person. Roughly double the annual rate, but it is the only way to run the service for a few months and stop.',
      },
      {
        name: 'Standard, annual',
        price: '$95.88 for the year ($7.99/mo)',
        renews: 'renews annually at the same rate unless a regional promotion applied',
        detail:
          'The same service at about half the monthly price. What most individual buyers should take — remembering that removals stop when the subscription does.',
        pick: true,
      },
      {
        name: 'Unlimited, annual',
        price: '$179.88 for the year ($14.99/mo)',
        detail:
          'Adds custom removals: you submit URLs for sites outside the automated list — Incogni quotes 3,000+ — and its staff handle the opt-out. Worth it only if you already know where you are exposed.',
      },
      {
        name: 'Family, annual',
        price: '$191.88 for the year ($15.99/mo)',
        detail:
          'Up to five people on one account — around $3.20 per person per month. The only tier where the maths is comfortable.',
      },
    ],
  },
  pros: [
    {
      title: 'The requests carry statutory weight',
      body: 'Incogni’s demands cite GDPR, UK GDPR, CCPA and equivalents rather than asking nicely. Brokers covered by those laws have a defined window to respond, which is the difference between a removal service and a mailing list.',
    },
    {
      title: 'The repetition is the point',
      body: 'Opting out of a broker once decays within months as the profile is rebuilt from fresh public records. Incogni re-scans and sends new waves on a schedule, which is the part almost nobody sustains manually across hundreds of companies.',
    },
    {
      title: 'The scale claims have been checked by an outside firm',
      body: 'Incogni states that Deloitte independently assessed its coverage and volume figures — 420+ brokers with automated removals and 245m+ requests processed. That is assurance over the numbers, not over how well the service works for you, but it is more than most competitors offer.',
    },
    {
      title: 'The family plan is the honest deal',
      body: 'Five people for $191.88 a year works out cheaper per person than any individual tier, and household exposure is correlated anyway — brokers list relatives and shared addresses alongside you.',
    },
  ],
  cons: [
    {
      title: 'Removal is not permanent, and stopping undoes it',
      body: 'Data brokers re-acquire from public records, marketing feeds and each other. Cancel, and profiles reappear over the following months with no refund of the ground you gained. Price this as an indefinite subscription, because that is what it is.',
    },
    {
      title: 'Paying monthly costs roughly double',
      body: 'At $15.98 against $7.99 a month, the monthly option is priced to push you onto the annual commitment — awkward, given that a year is exactly the commitment a first-time buyer has no basis for making.',
    },
    {
      title: 'Its reach stops where the laws stop',
      body: 'Incogni sells only to residents of the US, Canada, the UK, Switzerland, Norway, Iceland, Liechtenstein and the EU, because elsewhere there is nothing to compel a broker. It also cannot touch court and government records, news articles or anything you posted yourself, and Comparitech has noted it does not confirm that a broker actually complied — the dashboard reports the request, not always the outcome.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.3,
      note: '2,901 reviews on incogni.com as of August 2026',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite across legal leverage, coverage, pricing structure and how honestly the limits are stated',
    },
  ],
  bestFor: [
    'People whose address and phone number already surface on people-search sites',
    'Anyone in the US, UK, EU or Canada — where the underlying laws have teeth',
    'Households: five people on the family plan is the cheapest way in',
    'Anyone who would never work through hundreds of opt-out forms by hand',
  ],
  notFor: [
    'Anyone expecting a one-off clean-up — this only holds while you keep paying',
    'Residents outside the 34 supported countries, where requests have no legal backing',
    'People trying to remove news coverage, court records or their own social posts',
    'Buyers who want to trial a service before committing: there is no free tier, only a 30-day refund',
  ],
  faq: [
    {
      q: 'Does Incogni delete my data permanently?',
      a: 'No, and no service can. Brokers rebuild profiles from public records — electoral rolls, property filings, marketing feeds — so a removed record tends to return. Incogni’s answer is to keep re-scanning and re-sending requests, which works as long as the subscription is live. Treat it as ongoing maintenance rather than a deletion.',
    },
    {
      q: 'What can it not remove?',
      a: 'Anything not held by a data broker. Government and court records, news articles, professional registers and content you or other people posted on social media all sit outside its remit, as do search results themselves — a listing disappears from Google once the underlying broker page is gone, not before.',
    },
    {
      q: 'Does it work outside the US?',
      a: 'It works in about 34 countries: the US, Canada, the UK, Switzerland, Norway, Iceland, Liechtenstein and the EU member states. Those are the jurisdictions where GDPR, UK GDPR, CCPA/CPRA or PIPEDA give a removal demand legal force. Incogni does not sell to residents elsewhere, which is more honest than taking the money and sending unenforceable requests.',
    },
    {
      q: 'Is Incogni connected to Surfshark and NordVPN?',
      a: 'Yes. Surfshark built it in 2021 and launched it publicly in January 2022, and Surfshark’s holding structure merged with Nord Security soon after — so Incogni, Surfshark, NordVPN and NordPass all sit in one group. If you are deliberately spreading your privacy tooling across separate companies, buying all of it from that group defeats the exercise.',
    },
    {
      q: 'How long before I see a difference?',
      a: 'Incogni says the first round of requests typically resolves in about 14 days, and brokers covered by CCPA or GDPR generally have 30 to 45 days to act on a verified request. Security.org’s review found the bulk of removals landed in the first week and then slowed sharply, which matches the shape of the service: the automated, easy removals happen first and the tail takes months.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'incogni.com/pricing',
}
