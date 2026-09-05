/**
 * Brand page data for Bewakoof (route: /brands/bewakoof).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.bewakoof.com/about-us/our-story — founding year, founders,
 *     TMRW/Aditya Birla acquisition, headquarters
 *   - https://www.bewakoof.com/contact-us/return-and-refund-policy and
 *     https://www.bewakoof.com/contact-us/refund-or-return — 15-day return
 *     window, refund timelines for COD vs prepaid, self-ship rule
 *   - https://www.trustpilot.com/review/bewakoof.com — rating and review count
 *   - Google Play listing for the Bewakoof shopping app — app rating and
 *     rating count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const bewakoof: BrandPage = {
  slug: 'bewakoof',
  providerId: 'bewakoof',
  metaTitle: 'Bewakoof review 2026 — graphic tees, returns, real ratings',
  metaDescription:
    'An independent Bewakoof review: what the India-based graphic-fashion brand sells, how its return window actually works, and why its app and Trustpilot scores disagree so sharply.',
  intro:
    'Bewakoof sells graphic tees, oversized fits and licensed pop-culture merchandise to a young Indian shopping audience, and it does volume: tens of millions of app downloads and a catalogue built around drops rather than classic basics. It ships within India first. The gap between its huge, glowing app rating and its thin, poor Trustpilot record is the first thing worth understanding before you order.',
  about: [
    'Bewakoof was founded in 2012 by IIT Bombay graduates Prabhkirandeep Singh and Siddharth Munot, starting as a small direct-to-consumer label built around graphic T-shirts. It grew into one of India’s better-known youth fashion brands, selling licensed merchandise alongside its own streetwear-leaning designs, and is headquartered in Mumbai. In November 2022 it was acquired by TMRW, the D2C fashion venture of Aditya Birla Fashion and Retail, which now owns the brand.',
    'The catalogue is built for a young, price-conscious Indian buyer: printed and graphic T-shirts, hoodies, oversized fits, co-branded pop-culture collections and accessories, sold primarily through its own app and website rather than third-party marketplaces. Sizing and fit sit at the casual, oversized end, which is a deliberate style choice rather than an error, but it is worth knowing before you order a usual size.',
    'Bewakoof operates cash-on-delivery alongside prepaid checkout, both common in the Indian market, and runs its own return logistics with scheduled courier pickups. It positions itself on price and print variety rather than on garment construction or premium materials, and its scale — a catalogue that refreshes constantly with new licensed drops — is the main thing that separates it from smaller graphic-tee sellers.',
  ],
  facts: [
    { label: 'Founded', value: '2012' },
    { label: 'Headquarters', value: 'Mumbai, India' },
    { label: 'Owner', value: 'TMRW (Aditya Birla)' },
    { label: 'Returns', value: '15 days from delivery' },
  ],
  plans: {
    title: 'How checkout and returns work',
    note: 'Cash on delivery is available but its shipping and COD charges are not refunded if you return the order, which quietly changes the maths on a COD purchase.',
    items: [
      {
        name: 'Prepaid checkout',
        price: 'Paid at order, refunded to source',
        detail:
          'Returns refund to the original payment method within 7–10 working days of the item passing quality inspection.',
        pick: true,
      },
      {
        name: 'Cash on delivery',
        price: 'Paid to courier on arrival',
        detail:
          'Refund lands in wallet instantly or via bank transfer in 3–5 working days, but COD and shipping fees are not returned.',
      },
      {
        name: 'Returns pickup',
        price: 'Free where serviceable',
        detail:
          'Bewakoof schedules a courier pickup within 2–3 days; unserviceable areas require you to self-ship at your own cost.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely large, constantly refreshed print catalogue',
      body: 'New licensed and graphic drops appear regularly, which is the actual draw for the audience it targets — buyers looking for a specific print or collaboration, not a wardrobe staple.',
    },
    {
      title: 'Familiar Indian checkout options',
      body: 'Cash on delivery alongside standard prepaid methods removes the trust barrier that stops some first-time online shoppers in India from ordering at all.',
    },
    {
      title: 'A defined return window with pickup',
      body: 'Fifteen days is workable for a fast-fashion return cycle, and scheduled courier pickup means most buyers do not have to find a shipping counter themselves.',
    },
    {
      title: 'A rated, heavily downloaded app',
      body: 'The Android app carries a rating in the low 4s from hundreds of thousands of raters, evidence that for a large share of straightforward orders the experience works as advertised.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot tells a much worse story than the app store does',
      body: 'Bewakoof is rated "Bad" on Trustpilot, with recurring complaints about delivery delays, refund handling and customer support response times. Read both scores, not just the flattering one.',
    },
    {
      title: 'COD charges are not refunded on returns',
      body: 'If you pay cash on delivery and then return the item, you lose the shipping and COD fee. Prepaid checkout avoids this, which is not obvious until you are already mid-return.',
    },
    {
      title: 'Sizing runs oversized by design',
      body: 'Most fits lean deliberately loose. Buyers used to fitted basics elsewhere frequently end up sizing down, and the size guide is essential reading before ordering.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.2, note: 'rated "Bad", based on around 166 reviews' },
    { source: 'Google Play (app)', value: 4.1, note: 'around 560,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite across catalogue, checkout and verified reputation',
    },
  ],
  bestFor: [
    'Shoppers in India after licensed prints, graphic tees or pop-culture collabs',
    'Buyers who want cash-on-delivery as a checkout option',
    'Anyone shopping oversized, streetwear-leaning fits deliberately',
    'Price-led buyers who reorder often and can absorb an occasional bad delivery',
  ],
  notFor: [
    'Shoppers outside India expecting straightforward international delivery',
    'Anyone who wants fitted, classic-cut basics rather than oversized prints',
    'Buyers who need dependable support if an order goes wrong — check the Trustpilot pattern first',
  ],
  faq: [
    {
      q: 'Does Bewakoof ship outside India?',
      a: 'Its checkout and delivery network are built around the Indian market. Treat it as a domestic Indian retailer rather than an international one, and confirm delivery to your country on the product page before ordering.',
    },
    {
      q: 'Why is the Trustpilot score so much lower than the app rating?',
      a: 'App store ratings skew toward people who complete a smooth order and rate in-app; Trustpilot skews toward people motivated to complain, often about delivery or refunds. Both are real signals — read them as two different audiences, not a contradiction to dismiss.',
    },
    {
      q: 'Can I return a cash-on-delivery order for a full refund?',
      a: 'You get the item price back, but the shipping charge and COD fee are not refunded. Paying by card or wallet avoids losing that amount if you end up returning the order.',
    },
    {
      q: 'How long does a return pickup take?',
      a: 'Bewakoof aims to schedule a courier pickup within two to three days of a return request. If your area is not serviceable for pickup, you self-ship the item instead, at your own cost.',
    },
    {
      q: 'Is Bewakoof still an independent company?',
      a: 'No. It was acquired in November 2022 by TMRW, the direct-to-consumer fashion arm of Aditya Birla Fashion and Retail, one of India’s largest listed retail groups.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'bewakoof.com',
}
