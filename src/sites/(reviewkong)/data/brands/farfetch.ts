/**
 * Brand page data for Farfetch (route: /brands/farfetch).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/Farfetch — founding (2007, José Neves),
 *     marketplace model, brand/boutique and country-reach figures
 *   - https://www.businessoffashion.com/news/luxury/coupang-completes-farfetch-acquisition/
 *     and https://ir.aboutcoupang.com/news-events/news/news-details/2024/Coupang-Completes-Acquisition-of-Farfetch/default.aspx
 *     — the January/February 2024 Coupang acquisition after Farfetch’s 2023
 *     near-collapse, and the effect on NYSE shareholders
 *   - https://www.farfetch.com/orders-and-shipping/ — the DDP/DAP customs-duty
 *     split by destination
 *   - https://www.farfetch.com/returns-and-refunds/ — the 30-day headline
 *     window versus the boutique’s 14-day acceptance deadline, and free
 *     worldwide return shipping
 *   - https://www.farfetch.com/farfetch-access-programme — the five Access
 *     loyalty tiers (Bronze to Private Client)
 *   - https://www.trustpilot.com/review/www.farfetch.com — rating and volume
 *   - https://apps.apple.com/us/app/farfetch-shop-luxury-fashion/id906698760 —
 *     App Store rating and volume (opened directly)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const farfetch: BrandPage = {
  slug: 'farfetch',
  providerId: 'farfetch',
  metaTitle: 'Farfetch review 2026 — customs, returns and ownership',
  metaDescription:
    'An independent Farfetch review: how customs duties differ by destination, why the real return deadline is tighter than the 30-day headline, and what Coupang’s 2024 rescue changed.',
  intro:
    'Farfetch is a marketplace, not a retailer: it connects thousands of boutiques and brands under one checkout rather than holding its own stock. That model survived a genuine 2023 financial crisis and is now backed by Coupang, which completed a rescue acquisition in early 2024. The marketplace breadth is real. So is the risk of an unexpected customs bill if your destination is not on the list Farfetch prices duties into upfront.',
  about: [
    'José Neves founded Farfetch in 2007 to solve a specific problem: independent luxury boutiques with real stock but no way to reach a global audience. The platform now lists more than 3,500 brands and boutiques and ships to around 190 countries, making it one of the broadest luxury marketplaces by brand count rather than by first-party inventory.',
    'The business nearly did not survive 2023. Farfetch ran into a severe cash crisis, was delisted from the New York Stock Exchange, and existing shareholders were wiped out before Coupang — the South Korean e-commerce group — completed a roughly $500 million rescue acquisition in early 2024. The marketplace kept operating throughout, and the brands and boutiques selling through it were unaffected, but the corporate history is recent enough to matter to a cautious buyer.',
    'Because Farfetch ships from individual boutiques worldwide rather than one warehouse, customs handling depends entirely on destination. A defined list of major markets — the EU, UK, US, Canada, Australia and others — has duties and taxes built into the checkout price. Everywhere else, the courier collects them separately on delivery, on top of what you already paid.',
  ],
  facts: [
    { label: 'Founded', value: '2007, by José Neves' },
    { label: 'Owner', value: 'Coupang-owned since 2024' },
    { label: 'Marketplace', value: '3,500+ brands & boutiques' },
    { label: 'Returns', value: 'Free, 14-day window' },
  ],
  plans: {
    title: 'How Farfetch prices and ships',
    note: 'Which customs model applies depends entirely on your delivery address — check this before ordering, not after a surprise courier bill.',
    items: [
      {
        name: 'Checkout in a DDP market',
        price: 'Duties and taxes included in the price shown',
        detail:
          'Major markets including the EU, UK, US, Canada, Australia and several others have import duties bundled in at checkout, so the price shown is the price paid.',
        pick: true,
      },
      {
        name: 'Checkout in a DAP market',
        price: 'Duties billed separately by the courier',
        detail:
          'Outside the DDP list, checkout excludes import duties and local taxes. The courier collects these on delivery, adding to the cost after the sale is already made.',
      },
      {
        name: 'Access loyalty programme',
        price: 'Free, tiers unlock by annual spend',
        detail:
          'Five tiers from Bronze to Private Client. Higher tiers add free delivery, presale access, and, at the top, a dedicated personal stylist.',
      },
    ],
  },
  pros: [
    {
      title: 'Genuine multi-boutique breadth',
      body: 'Over 3,500 brands and boutiques sell through one checkout. Few luxury platforms match this range without becoming a first-party warehouse operation themselves.',
    },
    {
      title: 'Return shipping is free, worldwide',
      body: 'A prepaid courier label is provided for every return, at no cost to the buyer, which is unusual at this end of the market and worth factoring into any price comparison.',
    },
    {
      title: 'Coupang’s backing replaced a genuine financial crisis',
      body: 'The 2023 near-collapse was real and public. A capitalised owner since 2024 is a materially different starting position than the one Farfetch was in eighteen months earlier.',
    },
    {
      title: 'Access rewards frequent buyers for free',
      body: 'No subscription fee gates the loyalty programme. Spend enough and the perks scale up to a personal stylist at the Private Client tier.',
    },
  ],
  cons: [
    {
      title: 'The real return deadline is 14 days, not 30',
      body: 'Farfetch quotes a 30-day window, but the boutique’s acceptance deadline is 14 days from delivery. International transit can eat that margin, so Farfetch itself recommends booking the return within the first week.',
    },
    {
      title: 'Outside the DDP list, duties land after checkout',
      body: 'Buyers in DAP destinations pay import duties and taxes to the courier on delivery, on top of the checkout price — a real added cost that is easy to miss when comparing prices across sites.',
    },
    {
      title: 'The 2023 crisis is recent history, not ancient',
      body: 'Shareholders were wiped out and the company was delisted before the Coupang deal closed. New ownership addresses the immediate risk, but it is a fair reason for a cautious buyer to still ask questions.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.1,
      note: 'tens of thousands of reviews, rated “Great”',
    },
    { source: 'App Store (iOS)', value: 4.9, note: '215,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across marketplace breadth, returns policy and post-2024 stability',
    },
  ],
  bestFor: [
    'Shoppers in DDP markets — the EU, UK, US and most major economies — who want duties settled upfront',
    'Buyers who value free, prepaid worldwide return shipping',
    'Anyone chasing presale access or a dedicated stylist through Access tiers',
    'Shoppers reassured by Coupang’s capital standing behind a platform that nearly collapsed in 2023',
  ],
  notFor: [
    'Buyers in DAP destinations who do not want a customs bill after checkout',
    'Anyone who leaves a return past the first week — the 14-day boutique deadline is tighter than it looks',
    'Shoppers who want a luxury retailer with a longer, uninterrupted track record of financial stability',
  ],
  faq: [
    {
      q: 'Who owns Farfetch now?',
      a: 'Coupang, the South Korean e-commerce group, completed a roughly $500 million acquisition of Farfetch’s operating business in early 2024 after a severe cash crisis forced a rescue deal. The company was delisted from the NYSE as part of that process.',
    },
    {
      q: 'Will I pay customs duties on a Farfetch order?',
      a: 'It depends on your delivery address. A defined list of major markets — including the EU, UK, US, Canada and Australia — has duties included in the checkout price. Outside that list, the courier collects duties and taxes separately on delivery.',
    },
    {
      q: 'How long do I really have to return something?',
      a: 'Farfetch advertises a 30-day return window, but the selling boutique’s actual acceptance deadline is 14 days from delivery. Book your free return collection within the first week to avoid it arriving late because of international transit time.',
    },
    {
      q: 'What is Farfetch Access?',
      a: 'A free loyalty programme with five tiers, from Bronze to Private Client, based on annual spend. Higher tiers add free delivery, early access to presales and, at Private Client level, a dedicated personal stylist.',
    },
    {
      q: 'Is Farfetch financially stable now?',
      a: 'It went through a genuine crisis in 2023, including an NYSE delisting, before Coupang completed a rescue acquisition in early 2024. The marketplace kept operating throughout and now sits under a well-capitalised owner, but the history is recent enough to be worth knowing.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'farfetch.com',
}
