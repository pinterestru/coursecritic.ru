/**
 * Brand page data for Desigual (route: /brands/desigual).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Desigual — founding year, founder, the
 *     Eurazeo stake sold and bought back, sales growth history
 *   - https://www.desigual.com/en_US/corporate/about-us/ — country and store
 *     count, logistics footprint, employee count
 *   - https://www.desigual.com/on/demandware.static/-/Library-Sites-DsglSharedLibrary/default/dwff9ed0f7/docs/legal/Desigual_Club/Desigual_Club_TC_US.pdf
 *     and https://www.desigual.com/en_PL/help-faq/loyalty/ — Desigual Club
 *     tier structure and cashback terms
 *   - https://www.trustpilot.com/review/www.desigual.com — rating and volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const desigual: BrandPage = {
  slug: 'desigual',
  providerId: 'desigual',
  metaTitle: 'Desigual review 2026 — prints, cashback club and returns',
  metaDescription:
    'An independent Desigual review: the Barcelona brand’s scale, how the Desigual Club cashback tiers work, and why the returns process is its weakest point.',
  intro:
    'Desigual built a global business on loud, asymmetric prints that most retailers would not risk, and Thomas Meyer has owned the company outright since buying back the stake he sold to Eurazeo. The clothes are distinctive rather than safe. The part that lets shoppers down is not the product but the returns process, which reviewers describe as slow and hard to chase up.',
  about: [
    'Thomas Meyer started Desigual in Barcelona in 1984, and the brand’s name and early identity came from collaborators rather than a marketing brief: filmmaker Isabel Coixet suggested the name, and graphic designer Peret drew the original logo. Meyer sold a 10% stake to private-equity firm Eurazeo in 2014 during a period of rapid growth, then bought it back in 2018 and has run the company independently since.',
    'The brand is present in 107 countries through more than 215 stores plus its own e-commerce, supported by three logistics centres in Barcelona, New Jersey and Hong Kong that between them move tens of millions of garments a year. That is a genuinely international footprint for a brand still built around one recognisable visual signature rather than a broad multi-label portfolio.',
    'Desigual’s loyalty programme, Desigual Club, is unusually generous on paper: new members get 25% of their first purchase back as spendable cashback, and frequent shoppers who cross a spending threshold move to a Gold tier with ongoing cashback on every order. The cashback mechanic is real and documented, which is more than most fashion loyalty schemes offer up front.',
  ],
  facts: [
    { label: 'Founded', value: '1984, Barcelona' },
    { label: 'Presence', value: '107 countries, 215+ stores' },
    { label: 'Ownership', value: 'Founder-owned (Thomas Meyer)' },
    { label: 'Return window', value: '30 days' },
  ],
  plans: {
    title: 'How the Desigual Club cashback works',
    note: 'Cashback is spendable credit, not a discount applied automatically — you have to use it within its expiry window or it lapses.',
    items: [
      {
        name: 'Silver (automatic at sign-up)',
        price: 'Free to join',
        detail:
          '25% of your first purchase comes back as cashback, usable on a future order within 3 months.',
        pick: true,
      },
      {
        name: 'Gold',
        price: 'Unlocked after $700 spent in 12 months',
        detail:
          '10% cashback on every purchase after that threshold, usable within 6 months, plus a birthday discount and early sale access.',
      },
      {
        name: 'Standard shipping',
        price: 'Free over $80 in the US',
        detail:
          'Below that threshold delivery is charged; rates and thresholds vary by market since Desigual ships from three separate hubs.',
      },
    ],
  },
  pros: [
    {
      title: 'A visual identity nothing else on the high street matches',
      body: 'The clashing prints and asymmetric cuts are the entire premise of the brand, and they deliver on it consistently rather than diluting into safer basics season by season.',
    },
    {
      title: 'Cashback that is genuinely spendable, not a gimmick',
      body: 'A documented 25% first-purchase cashback and an ongoing 10% for repeat spenders is a real incentive with published terms, not a vague "rewards" promise.',
    },
    {
      title: 'A real international footprint',
      body: 'Over 215 stores across 107 countries, backed by three logistics hubs, means this is not a niche e-commerce operation dressed up as a global brand.',
    },
    {
      title: 'Founder-run rather than private-equity-optimised',
      body: 'Thomas Meyer bought back the stake he sold to Eurazeo in 2018, so the brand answers to its own creative direction rather than a fund’s exit timeline.',
    },
  ],
  cons: [
    {
      title: 'Returns and refunds are the weak point',
      body: 'The most consistent complaint on Trustpilot is a returns process that is hard to get a response on — customers report repeated emails or chat sessions before a refund actually lands.',
    },
    {
      title: 'The Trustpilot score reflects it',
      body: 'desigual.com sits around 2.8 out of 5 on Trustpilot from roughly 5,500 reviews, with service and returns issues cited far more than the clothes themselves.',
    },
    {
      title: 'Sizing runs inconsistently across prints and cuts',
      body: 'Because pieces are asymmetric and print-led rather than following one standard block, reviewers report fit varying noticeably between items in the same nominal size.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.8, note: 'around 5,500 reviews, rated "Average"' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite weighs the distinctive product against a genuinely weak returns process',
    },
  ],
  bestFor: [
    'Shoppers who want prints and cuts they will not find at a mainstream chain',
    'Repeat buyers who will actually use the Desigual Club cashback before it expires',
    'Anyone shopping from one of the 107 countries with local store support',
    'Buyers who order in-store, where returns are simpler than online',
  ],
  notFor: [
    'Anyone who might need to return an online order and wants that to be simple',
    'Shoppers who rely on consistent sizing between styles',
    'Buyers wanting a fast refund turnaround if an item does not work out',
  ],
  faq: [
    {
      q: 'Who owns Desigual?',
      a: 'Founder Thomas Meyer owns the company. He sold a 10% stake to Eurazeo in 2014 during a growth phase and bought it back in 2018, so Desigual has been fully founder-controlled again since then.',
    },
    {
      q: 'How does the Desigual Club cashback actually work?',
      a: 'Sign up for free and you automatically become a Silver member, earning 25% of your first order back as cashback to spend within 3 months. Spend over $700 in a year and you move to Gold, earning 10% cashback on every order, usable within 6 months.',
    },
    {
      q: 'What is the return window?',
      a: 'Desigual offers a 30-day return window on most items, and standard shipping is free above $80 in the US. Below that threshold, delivery is charged and varies by market.',
    },
    {
      q: 'Why is the Trustpilot rating only around 2.8?',
      a: 'The recurring theme in negative reviews is the returns and refund process, described as slow to respond and difficult to escalate, rather than complaints about the clothing itself.',
    },
    {
      q: 'Does Desigual size consistently across its ranges?',
      a: 'Not reliably. Because so many pieces are asymmetric or print-driven rather than built on one standard block, fit varies more between styles than at a brand that sticks to conventional cuts.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'desigual.com',
}
