/**
 * Brand page data for PUMA (route: /brands/puma).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Puma_(brand) — founding, the Rudolf/Adolf
 *     Dassler split, the 2026 Anta Sports and Frasers Group ownership changes,
 *     2023 revenue, employee count, country count, Frankfurt listing
 *   - https://in.puma.com/in/en/help/app-return-policy and
 *     https://in.puma.com/in/en/help/returns — India return window, return
 *     process, refund timelines
 *   - https://apps.apple.com/gb/app/puma-shop-clothes-trainers/id1563024677 —
 *     iOS App Store rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const puma: BrandPage = {
  slug: 'puma',
  providerId: 'puma',
  metaTitle: 'PUMA review 2026 — India returns, delivery and ownership',
  metaDescription:
    'An independent PUMA review: what changed at ownership level in 2026, how the India site’s 10-day return window compares, and where the app delivers.',
  intro:
    'PUMA exists because of a family feud: Rudolf Dassler split from his brother Adolf in 1948, Adolf kept the adidas name, and Rudolf built PUMA into the world’s third-largest sportswear company from the same German town. 2026 has been a turning year for who actually owns it, and on the India storefront the return window is noticeably tighter than most rivals offer.',
  about: [
    'Rudolf Dassler founded PUMA in Herzogenaurach, Germany in 1948, the same year his brother Adolf launched adidas a few streets away. The company has been publicly traded on the Frankfurt Stock Exchange for decades, and 2026 brought its biggest ownership shake-up in years: Chinese sportswear group Anta Sports bought a 29.06% stake for around €1.5 billion in January, becoming PUMA’s largest shareholder, and UK retailer Frasers Group picked up close to 6% in March, becoming the second-largest.',
    'PUMA reported revenue of €8.601 billion in 2023 with roughly 18,681 employees and operations in more than 120 countries, putting it well behind adidas and Nike in scale but still solidly the number-three global player. The in.puma.com storefront is the India-facing arm of that global retail operation, running the same product catalogue with locally adjusted policies.',
    'On the India site specifically, buyers deal with a shorter return window than most international apparel retailers offer, and a returns process that channels self-shipped items through a callback request rather than a straightforward prepaid-label system. The shopping app itself, by contrast, has a strong public track record on the App Store.',
  ],
  facts: [
    { label: 'Founded', value: '1948, Herzogenaurach' },
    { label: 'Largest shareholder', value: 'Anta Sports (since Jan 2026)' },
    { label: 'Global reach', value: '120+ countries' },
    { label: 'Return window (India)', value: '10 days from delivery' },
  ],
  plans: {
    title: 'What delivery and returns actually cost',
    note: 'Free shipping thresholds on in.puma.com vary by delivery location and are not published as a single flat figure.',
    items: [
      {
        name: 'Prepaid standard delivery',
        price: 'Free above a location-set threshold',
        detail:
          'The exact threshold depends on where the order ships to; below it, standard delivery is charged.',
        pick: true,
      },
      {
        name: 'Cash on delivery',
        price: 'Additional COD charge applies',
        detail: 'Paying online avoids the extra fee that cash-on-delivery orders attract.',
      },
      {
        name: 'Returns via PUMA logistics',
        price: 'Free pickup within 10 days of delivery',
        detail:
          'Prepaid-order refunds are initiated within 48 hours of the return clearing quality check; COD refunds go through a bank or UPI link instead.',
      },
    ],
  },
  pros: [
    {
      title: 'A brand with real scale behind it',
      body: 'Third-largest sportswear company globally, over €8.6 billion in revenue and operations in more than 120 countries — this is not a challenger brand playing catch-up.',
    },
    {
      title: 'A shopping app that performs well publicly',
      body: 'The PUMA shopping app carries a strong rating from a large base of App Store reviews, well above what most retail apps in the category manage.',
    },
    {
      title: 'Fast refund initiation once a return clears',
      body: 'Prepaid-order refunds start within 48 hours of the returned item passing quality check, which is quicker than several competitors in the same market.',
    },
    {
      title: 'New ownership with genuine capital behind it',
      body: 'Anta Sports’ €1.5 billion stake and Frasers Group’s follow-on purchase both landed in 2026, bringing two well-capitalised, retail-literate shareholders onto the register.',
    },
  ],
  cons: [
    {
      title: 'A short return window on the India site',
      body: 'Ten days from delivery is tight next to the 30-day norm most apparel retailers offer, and any concern about the product itself must be raised within 72 hours of delivery.',
    },
    {
      title: 'Self-shipped returns are not a simple prepaid-label process',
      body: 'Choosing to ship a return yourself instead of booking a PUMA pickup means raising a callback request rather than following a standard published procedure.',
    },
    {
      title: 'Ownership churn worth watching',
      body: 'Two large shareholder changes in three months is a lot of movement for one year. It has not affected day-to-day retail operations yet, but it is not a settled ownership structure either.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.9, note: 'roughly 82,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite weighs the brand’s scale and app quality against the tight India return window',
    },
  ],
  bestFor: [
    'Shoppers who already know their size and are unlikely to need a return',
    'Buyers who pay online rather than by cash on delivery',
    'Anyone comparing scale and financial stability across sportswear brands',
    'App-first shoppers who will manage orders and returns from the PUMA app',
  ],
  notFor: [
    'Anyone who wants a generous window to decide whether an item fits',
    'Buyers who prefer a simple, always-prepaid return label regardless of method',
    'Shoppers who want a settled, unchanging ownership story behind the brand',
  ],
  faq: [
    {
      q: 'Who owns PUMA now?',
      a: 'PUMA remains listed on the Frankfurt Stock Exchange, but its shareholder base changed significantly in 2026. Anta Sports of China bought a 29.06% stake for around €1.5 billion in January, becoming the largest shareholder, and Frasers Group took close to 6% in March.',
    },
    {
      q: 'How long do I have to return an order on in.puma.com?',
      a: 'Ten days from your delivery date for a standard return, and only 72 hours if you are raising a concern about the product itself. Both windows are shorter than most competitors offer.',
    },
    {
      q: 'Is PUMA related to adidas?',
      a: 'Historically, yes. Founders Rudolf and Adolf Dassler were brothers who split their shared shoe business in 1948 after a falling out. Rudolf’s half became PUMA; Adolf’s became adidas. They have been entirely separate companies ever since.',
    },
    {
      q: 'How do refunds work if I pay cash on delivery?',
      a: 'PUMA sends a link to submit UPI or bank account details within 48 hours of your return clearing quality check, valid for 7 days, rather than crediting a card automatically.',
    },
    {
      q: 'Is the PUMA shopping app worth using over the website?',
      a: 'The app carries a strong App Store rating from a large review base, and it is where most of PUMA’s own return and delivery tools are built for, so it is generally the smoother route for account holders.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'in.puma.com',
}
