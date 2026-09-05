/**
 * Brand page data for Myntra (route: /brands/myntra).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/Myntra — founding (2007), founders, 2014
 *     Flipkart acquisition, Walmart’s stake in Flipkart
 *   - https://blog.myntra.com/myntras-m-now-30-minute-delivery-patna-fashion-beauty/
 *     and https://techcrunch.com/2024/12/05/myntra-pushes-into-india-quick-commerce-race-with-30-minute-fashion-delivery
 *     — the M-Now 30-minute service and its city coverage
 *   - https://www.indianretailer.com/news/myntra-sees-strong-international-brand-growth-non-metro-demand-nears-45-pc
 *     — catalogue and pin-code coverage figures
 *   - Myntra Insider tier structure (Select / Elite / Icon), summarised from
 *     https://zoutons.com/news/what-is-myntra-insider-benefits-guide-2026
 *   - https://www.gonukkad.com/blog/how-to-return-product-on-myntra — return
 *     window and refund timeline
 *   - https://apps.apple.com/in/app/myntra-fashion-shopping-app/id907394059 —
 *     App Store rating and volume, India listing (opened directly in-browser;
 *     the 1.4M-rating figure is specific to the India storefront, the relevant
 *     one for an India-only retailer)
 *   - https://www.trustpilot.com/review/www.myntra.com — rating and volume
 *     (opened directly in-browser: 1.1, "Bad", 2,365 reviews)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const myntra: BrandPage = {
  slug: 'myntra',
  providerId: 'myntra',
  metaTitle: 'Myntra review 2026 — Insider tiers, M-Now, returns',
  metaDescription:
    'An independent Myntra review: what the free Insider programme actually unlocks, how the 30-minute M-Now service works, and why its ratings look so different across platforms.',
  intro:
    'Myntra is the largest dedicated fashion app in India, backed by Flipkart and, above that, Walmart. The catalogue runs past nine thousand brands, the Insider programme is free to join, and M-Now now delivers fashion in 30 minutes in ten cities. None of that reaches outside India, and the two public ratings this page could verify point in opposite directions for reasons worth understanding before you order.',
  about: [
    'Three IIT graduates — Mukesh Bansal, Ashutosh Lawania and Vineet Saxena — founded Myntra in Bengaluru in 2007, originally to sell personalised gifts before pivoting to fashion. Flipkart acquired the company in 2014, and Flipkart itself is majority owned by Walmart, so Myntra sits inside one of the largest retail groups operating in India rather than running as an independent business.',
    'The catalogue is the scale story: more than 9,700 domestic and international brands and several million listed styles, reaching over 95% of India’s postal codes. In 2024 Myntra layered a quick-commerce service, M-Now, on top of the core marketplace — branded fashion and beauty delivered in around 30 minutes from local dark stores, live in ten cities including Bengaluru, Delhi, Mumbai and Pune at last count.',
    'Loyalty runs through Myntra Insider, a free programme with three tiers — Select, Elite and Icon — that unlock progressively better early-sale access, free delivery, SuperCoins and, at the top tier, travel perks through a Cleartrip partnership. None of this changes the platform’s core limitation: Myntra ships within India only, with a nascent Myntra Global pilot into Singapore the sole exception reported so far.',
  ],
  facts: [
    { label: 'Founded', value: '2007, Bengaluru' },
    { label: 'Owner', value: 'Flipkart / Walmart group' },
    { label: 'Ships to', value: 'India only' },
    { label: 'Standard returns', value: '30 days' },
  ],
  plans: {
    title: 'How the Insider tiers work',
    note: 'Insider is free to join — the perks scale with how much you spend and order, not with a subscription fee, so casual shoppers stay on entry-level benefits by default.',
    items: [
      {
        name: 'Pay-as-you-go',
        price: 'Free, no membership needed',
        detail:
          'The default way to shop. Standard delivery charges and the 30-day return window apply, with cash on delivery available on eligible orders.',
        pick: true,
      },
      {
        name: 'Insider — Select',
        price: 'Free, entry tier',
        detail: 'Early access to sales and SuperCoins on every order once you register.',
      },
      {
        name: 'Insider — Elite',
        price: 'Free, unlocked by spend',
        detail: 'Faster SuperCoin accrual, partner rewards and a birthday offer.',
      },
      {
        name: 'Insider — Icon',
        price: 'Free, top spend tier',
        detail:
          'Priority customer support, VIP early access and travel perks via the Cleartrip tie-in.',
      },
    ],
  },
  pros: [
    {
      title: 'M-Now delivers fashion in 30 minutes',
      body: 'No India-focused fashion competitor matches this. It runs from local dark stores across ten cities, covering fashion and beauty rather than just essentials.',
    },
    {
      title: 'Insider is free and the perks are real',
      body: 'Early sale access, SuperCoins and priority support cost nothing to unlock. Heavy shoppers reach the Icon tier without ever paying a subscription fee.',
    },
    {
      title: 'The catalogue is genuinely the biggest',
      body: 'Over 9,700 brands and several million styles, reaching upward of 95% of India’s pin codes. Few rivals cover this much ground in one app.',
    },
    {
      title: 'The app itself is rated strongly',
      body: 'A 4.7-star App Store rating from 1.4 million ratings on the India storefront reflects a large, satisfied core audience using the app day to day.',
    },
  ],
  cons: [
    {
      title: 'India only, with one small exception',
      body: 'There is no meaningful way to shop Myntra from outside India. A Myntra Global pilot into Singapore has been reported but has not expanded the platform’s reach in any broad sense.',
    },
    {
      title: 'Trustpilot tells a very different story than the app store',
      body: 'A 1.1-star Trustpilot rating from around 2,300 reviews sits nowhere near the 4.7-star App Store score. The Trustpilot sample skews toward customers who had a delivery or service problem worth writing about; it is worth reading before a large order even though the volume is far smaller than the app’s.',
    },
    {
      title: 'Refunds are not instant',
      body: 'Once a return is picked up, Myntra quotes 7 to 10 working days to process the refund to your original payment method — slower than platforms that refund on pickup confirmation.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.1,
      note: 'small sample, around 2,300 reviews, dominated by delivery and service complaints',
    },
    { source: 'App Store (iOS)', value: 4.7, note: '1.4 million ratings, India storefront' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite across catalogue breadth, delivery speed and loyalty value',
    },
  ],
  bestFor: [
    'Shoppers in India who want the widest branded fashion catalogue in one app',
    'Buyers in M-Now’s ten covered cities who want fashion delivered same-hour',
    'Frequent shoppers who will actually reach Insider’s higher tiers',
    'Anyone who wants cash on delivery as a standard payment option',
  ],
  notFor: [
    'Anyone shopping from outside India expecting normal delivery access',
    'Buyers who read only Trustpilot and skip the app store data — check both',
    'Anyone who needs a refund processed in under a week',
  ],
  faq: [
    {
      q: 'Does Myntra ship outside India?',
      a: 'No, not in any general sense. Myntra is built around Indian pin-code delivery, covering upward of 95% of them. A Myntra Global pilot into Singapore has been reported, but the core platform remains India-only.',
    },
    {
      q: 'What is Myntra Insider?',
      a: 'A free loyalty programme with three tiers — Select, Elite and Icon — unlocked by how much and how often you buy. Perks include early sale access, SuperCoins, free delivery and, at the top tier, priority support and travel benefits.',
    },
    {
      q: 'How does M-Now work?',
      a: 'It is Myntra’s quick-commerce layer: branded fashion and beauty delivered in around 30 minutes from local dark stores. It currently covers ten cities, including Bengaluru, Delhi, Mumbai, Pune and Hyderabad.',
    },
    {
      q: 'What is the return and refund timeline?',
      a: 'Returns are accepted within 30 days of delivery provided tags and packaging are intact. Once picked up, refunds typically take 7 to 10 working days to reach your original payment method.',
    },
    {
      q: 'Why is Myntra’s Trustpilot score so much lower than its app rating?',
      a: 'The two draw from very different populations. Trustpilot’s roughly 2,300 reviews skew toward customers reporting delivery or service problems, while the App Store’s 1.4 million ratings on the India storefront come overwhelmingly from Myntra’s regular user base. Both are real; neither tells the whole story alone.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'myntra.com',
}
