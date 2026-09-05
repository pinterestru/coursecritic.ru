/**
 * Brand page data for AJIO (route: /brands/ajio).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://relianceretail.com/ajio.html — parent company (Reliance Retail)
 *   - https://www.ajio.com/help/whoweare — AJIO’s own brand positioning and
 *     private-label naming (AJIO OWN, Outryt)
 *   - https://www.luxe.ajio.com/ and coverage of its October 2019 launch —
 *     the AJIO Luxe premium storefront
 *   - https://www.ajio.com/return-refund-policy and https://www.ajio.com/faq-returns
 *     — return window, non-returnable-item deadline and refund timeline
 *   - Delivery/convenience fee, summarised from https://infobeamsolution.in/what-are-the-shipping-charges-on-ajio/
 *   - https://www.trustpilot.com/review/ajio.com — rating and volume
 *   - https://apps.apple.com/in/app/ajio-online-shopping-app/id1113425372 —
 *     App Store rating and volume (opened directly)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ajio: BrandPage = {
  slug: 'ajio',
  providerId: 'ajio',
  metaTitle: 'AJIO review 2026 — Luxe tier, fees, and returns',
  metaDescription:
    'An independent AJIO review: how the AJIO Luxe premium tier and AJIO OWN private label sit alongside branded stock, what the convenience fee costs, and the Trustpilot gap worth knowing about.',
  intro:
    'AJIO is Reliance Retail’s online fashion arm, launched in 2016 to sit inside India’s largest retail conglomerate rather than run as a standalone start-up. It spans a discount-priced private label at one end and a curated luxury storefront, AJIO Luxe, at the other. Delivery is India-only, a small non-refundable fee applies to most orders, and its Trustpilot record is worth reading before a first order.',
  about: [
    'Reliance Retail launched AJIO in 2016 as an online-only fashion and lifestyle retailer, with no physical stores of its own. It sits inside Reliance Retail — a subsidiary of Reliance Industries Limited, India’s largest listed company — which gives it access to logistics and buying scale that smaller fashion apps do not have.',
    'The catalogue splits into two distinct tiers. AJIO OWN and labels like Outryt are AJIO’s private-label lines, priced below third-party brands and designed in-house. At the other end, AJIO Luxe, launched as a dedicated storefront in October 2019, curates premium and luxury international labels for shoppers who want designer stock without leaving the app. An Indie collection sits alongside both, spotlighting India-made craft and smaller domestic labels.',
    'Checkout carries a flat, non-refundable convenience fee on most orders, and free-shipping thresholds shift depending on which promotional code is active rather than sitting at one fixed number. Cash on delivery is available on eligible orders. Returns run 15 to 30 days depending on category, with a tighter five-day window for items marked non-returnable.',
  ],
  facts: [
    { label: 'Founded', value: '2016, by Reliance Retail' },
    { label: 'Owner', value: 'Reliance Industries' },
    { label: 'Ships to', value: 'India only' },
    { label: 'Standard returns', value: '15–30 days' },
  ],
  plans: {
    title: 'How AJIO’s tiers and costs work',
    note: 'A flat convenience fee applies to most orders regardless of value, and free-shipping thresholds move with whichever promo code is running rather than staying fixed.',
    items: [
      {
        name: 'Standard checkout',
        price: 'Order value + a small flat fee',
        detail:
          'A non-refundable convenience fee of around ₹19 applies per order. Free-delivery thresholds vary by active coupon rather than a single published number.',
        pick: true,
      },
      {
        name: 'AJIO OWN & private labels',
        price: 'Usually the cheapest tier on the app',
        detail:
          'AJIO’s in-house labels, including Outryt, are designed and priced by AJIO itself, sitting below equivalent third-party branded pricing.',
      },
      {
        name: 'AJIO Luxe',
        price: 'Premium and designer pricing',
        detail:
          'A dedicated storefront for premium and luxury international labels, launched in 2019, priced well above the core AJIO catalogue.',
      },
    ],
  },
  pros: [
    {
      title: 'AJIO Luxe is a genuine premium tier',
      body: 'Most India-only fashion apps stop at mid-market branded stock. AJIO pairs that with a dedicated luxury storefront, giving shoppers a reason to stay in one app for both ends of the price range.',
    },
    {
      title: 'Backed by Reliance Retail’s actual infrastructure',
      body: 'This is not a dropship reseller. Reliance Retail’s logistics and store network sit behind AJIO, which matters for delivery reliability at scale even when individual orders go wrong.',
    },
    {
      title: 'Private labels undercut branded pricing',
      body: 'AJIO OWN and Outryt are designed and priced in-house, giving budget-focused shoppers a cheaper alternative to third-party brands without leaving the app.',
    },
    {
      title: 'The app itself is rated strongly',
      body: 'A 4.7-star App Store rating from 504,000 ratings shows a large, mostly satisfied day-to-day user base, separate from the platform’s Trustpilot record.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot is a genuine outlier, low',
      body: 'A 1.1-star “Bad” rating, even from a small sample of roughly 400 reviews, is unusually poor. The recurring complaints are delivery delays, difficulty reaching support, and a return process that requires photo evidence under a strict file-size limit.',
    },
    {
      title: 'A convenience fee applies regardless of outcome',
      body: 'A flat, non-refundable fee of around ₹19 is added to most orders on top of delivery charges, whether or not you end up keeping anything from the order.',
    },
    {
      title: 'India only, with no international storefront',
      body: 'AJIO does not meaningfully ship outside India. Anyone browsing from elsewhere is looking at a catalogue they cannot actually check out.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.1,
      note: 'small sample, around 400 reviews, dominated by delivery and refund complaints',
    },
    { source: 'App Store (iOS)', value: 4.7, note: '504,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across catalogue breadth, Luxe tier and delivery reliability',
    },
  ],
  bestFor: [
    'Shoppers in India who want private-label prices and AJIO Luxe in one app',
    'Buyers who trust Reliance Retail’s scale behind the platform',
    'Fans of Indian craft and smaller domestic labels via the Indie collection',
    'Anyone comfortable resolving delivery issues through in-app support',
  ],
  notFor: [
    'Anyone reading Trustpilot as a first stop — the score is a real outlier worth investigating further before a large order',
    'International buyers — AJIO does not ship meaningfully outside India',
    'Buyers who want frictionless returns without photo-verification requirements',
  ],
  faq: [
    {
      q: 'Does AJIO ship internationally?',
      a: 'No. AJIO operates as an India-only retailer with no general international shipping option, despite the app being downloadable elsewhere.',
    },
    {
      q: 'What is AJIO Luxe?',
      a: 'A dedicated storefront, launched in 2019, curating premium and luxury international labels within the AJIO app. It sits well above the core catalogue on price and is aimed at shoppers who want designer stock without a separate app.',
    },
    {
      q: 'What is the return window?',
      a: 'Standard items can usually be returned within 15 to 30 days of delivery depending on category. Items marked non-returnable must have a return request opened within 5 days. Refunds are initiated within roughly 13 business days of pickup.',
    },
    {
      q: 'Is the convenience fee refundable?',
      a: 'No. A small flat fee, around ₹19, is charged per order and is non-refundable regardless of whether items are returned.',
    },
    {
      q: 'Why is AJIO’s Trustpilot score so low if the app store rating is high?',
      a: 'The two samples are very different sizes and audiences. Trustpilot’s roughly 400 reviews skew almost entirely toward customers with an unresolved delivery or refund complaint, while the App Store’s 504,000 ratings reflect the much larger, mostly satisfied everyday user base.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ajio.com',
}
