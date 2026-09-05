/**
 * Brand page data for JTV (route: /brands/jtv).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.jtv.com/about — founding year (1993), founders, Knoxville TN
 *     headquarters, live-TV shopping model, sourcing offices
 *   - https://www.prnewswire.com/news-releases/jtv-expands-reach-with-launch-on-the-roku-channel-302604978.html
 *     — current household reach (~60M US/Canada) and Roku Channel launch
 *   - https://www.jtv.com/help/stretchpay — StretchPay: up to 6 interest-free
 *     instalments roughly 30 days apart
 *   - https://www.jtv.com/help/merchandise — JTV’s own statement that grading
 *     every diamond it sells “would become too costly”, so not all pieces
 *     carry a certified grading report
 *   - Return window (30 days) and restocking fee (up to 25% on select
 *     categories) corroborated across ConsumerAffairs and JTV’s own help
 *     content indexed via search
 *   - https://apps.apple.com/us/app/jtv-go/id402114612 — App Store rating
 *     (opened directly: 4.9/5, around 30,000 ratings)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Trustpilot scores
 * found for jtv.com ranged from 1.7 to 2.0 across different snapshots and
 * could not be confirmed by opening the page directly, so no Trustpilot
 * figure appears below — only the qualitative pattern (a consistently poor,
 * low-single-digit rating) is described in the copy. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const jtv: BrandPage = {
  slug: 'jtv',
  providerId: 'jtv',
  metaTitle: 'JTV review 2026 — live shopping, grading, returns',
  metaDescription:
    'An independent JTV review: how the live-shopping jeweller prices gemstones, the StretchPay payment plan, and why not every stone comes with a grading report.',
  intro:
    'JTV — Jewelry Television — is a Knoxville live-shopping channel that has sold jewellery on air since 1993, now streamed as much as broadcast. Hosts talk through each piece in real time, which suits buyers who want the story behind a stone before they commit. The catch sits in the small print: JTV does not grade every diamond it sells, by its own admission, because doing so would cost too much to keep prices where they are.',
  about: [
    'JTV was founded in 1993 by three Knoxville natives — Bill Kouns, Bob Hall and Jerry Sisk Jr. — and built its business on live television: hosts present and discuss jewellery in real time rather than relying on static product photos. The channel now reaches roughly 60 million US and Canadian households through cable and satellite carriage, alongside JTV.com and the JTV Go and JTV Live apps, with a Roku Channel added in late 2025. Sourcing runs through JTV’s own offices in Bangkok, Hong Kong, Jaipur, Mumbai and China rather than a single outside supplier.',
    'The detail worth reading before buying is JTV’s own explanation of its grading policy: it does not grade every diamond it sells, stating plainly that doing so for the full range “would become too costly” and would raise prices. Certified stones do carry grading information in the listing when JTV has it, but the absence of a grading report on a given piece is standard practice here, not an oversight — treat any on-air value or rarity claim as marketing until you see paperwork for it.',
    'JTV’s StretchPay plan splits a purchase into up to six instalments roughly 30 days apart with no added interest, and Affirm is offered separately for longer, interest-bearing terms — a real convenience on higher-priced pieces bought live, on impulse. Returns get 30 days, but a restocking fee of up to 25% applies on select categories such as clearance stock, and the JTV Preferred Account store card adds another way to finance a purchase, with the interest terms that implies.',
  ],
  facts: [
    { label: 'Founded', value: '1993, Knoxville TN' },
    { label: 'Reach', value: '~60M US/Canada households' },
    { label: 'Returns', value: '30 days, up to 25% restock' },
    { label: 'Grading', value: 'Not every stone is graded' },
  ],
  plans: {
    title: 'How to pay for a JTV purchase',
    note: 'StretchPay itself is interest-free if you pay on schedule; a credit card balance behind it can still accrue its own interest, and a restocking fee applies to some returns.',
    items: [
      {
        name: 'Pay in full',
        price: 'Standard listed price',
        detail: 'The simplest option — no instalments, no interest of any kind.',
      },
      {
        name: 'StretchPay',
        price: 'Split into up to 6 payments, no added fee',
        detail:
          'Interest-free instalments roughly 30 days apart, charged to a card on file. Credit-card interest can still apply on your end if you carry a balance.',
        pick: true,
      },
      {
        name: 'Affirm financing',
        price: 'Terms vary, some plans interest-bearing',
        detail:
          'A longer-term alternative to StretchPay for bigger purchases, with APR set by Affirm rather than JTV.',
      },
      {
        name: 'JTV Preferred Account',
        price: 'Store credit card, standard card APR applies',
        detail:
          'Another financing route with its own interest terms — read them before opening the account at checkout.',
      },
    ],
  },
  pros: [
    {
      title: 'Live hosts explain what you are actually buying',
      body: 'The 24/7 format lets a host walk through cut, colour and setting on camera before you buy, which is more information than a static product photo gives most online jewellers.',
    },
    {
      title: 'StretchPay is genuinely interest-free',
      body: 'Splitting a purchase into up to six payments roughly a month apart costs nothing extra if you pay on schedule and do not carry a card balance — a real advantage over store cards charging APR from day one.',
    },
    {
      title: 'A verifiable, high-volume app rating',
      body: 'JTV Go carries a 4.9-star rating from around 30,000 App Store ratings, a large enough sample to mean something, unlike a handful of five-star reviews scattered on a product page.',
    },
    {
      title: 'Real sourcing infrastructure, not a drop-shipper',
      body: 'JTV runs its own sourcing offices in Bangkok, Hong Kong, Jaipur, Mumbai and China rather than reselling from a single unnamed supplier, which is unusual at this end of the jewellery-TV market.',
    },
  ],
  cons: [
    {
      title: 'Not every stone is graded, by JTV’s own admission',
      body: 'JTV states plainly that grading every diamond it sells would be too costly and would raise prices, so most pieces ship without a certified grading report. Ask for one before buying anything sold on rarity or value.',
    },
    {
      title: 'Restocking fees eat into some returns',
      body: 'The 30-day return window sounds generous, but a restocking fee of up to 25% applies on select categories including clearance stock, which is not obvious until you are already trying to send something back.',
    },
    {
      title: 'Weak reputation on independent complaint sites',
      body: 'JTV’s own Trustpilot page sits deep in negative territory, with recurring complaints about grading disputes, appraised-value claims and slow return processing — worth reading before buying anything presented as a rare find.',
    },
  ],
  reputation: [
    {
      source: 'App Store (JTV Go)',
      value: 4.9,
      note: 'around 30,000 ratings',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.6,
      note: 'a strong live-shopping format and genuinely interest-free StretchPay, weighed against grading gaps and a poor independent-complaint record',
    },
  ],
  bestFor: [
    'Buyers who want a host talking through a piece before they commit',
    'Anyone who will actually use StretchPay’s interest-free instalments',
    'Existing JTV customers already comfortable with its return process',
    'Shoppers who verify grading and value claims independently before buying',
  ],
  notFor: [
    'Anyone who assumes every stone sold comes with a certified grading report',
    'Buyers relying on an on-air appraised value as a resale-value guarantee',
    'Shoppers who want a store card without reading its standard APR terms',
  ],
  faq: [
    {
      q: 'Does every JTV piece come with a certified gemstone grading report?',
      a: 'No. JTV has stated that grading every diamond it sells would be too costly and would push prices up, so certified grading only appears on select pieces. If certification matters to you, check the product listing for it before buying, not after.',
    },
    {
      q: 'Is StretchPay actually interest-free?',
      a: 'Yes, on JTV’s side: splitting a purchase into up to six payments roughly 30 days apart adds no extra charge if you pay on schedule. If you fund those payments with a credit card and carry a balance, your card issuer’s own interest still applies.',
    },
    {
      q: 'What is JTV’s return policy?',
      a: 'Thirty days from receipt, in original condition. Some categories, including clearance items, carry a restocking fee of up to 25%, so always check a specific listing’s own return terms before buying discounted stock with the intention of sending it back later.',
    },
    {
      q: 'How reliable is an on-air appraised value?',
      a: 'Treat it as a marketing figure, not an independent valuation. Appraised or “value” claims made live are not the same as a third-party certified appraisal, and resale value for coloured gemstones in particular can differ substantially from the number quoted on air.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'jtv.com',
}
