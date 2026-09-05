/**
 * Brand page data for Lenskart (route: /brands/lenskart).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.lenskart.com/corporate/about — founding year, founders,
 *     country and store-count coverage
 *   - https://www.lenskart.com/en-us/us_return_exchange and
 *     https://www.lenskart.sg/sg-inhousewarranty — 14-day return policy,
 *     one-year warranty terms and exclusions
 *   - https://www.lenskart.com/en-us/lenskart-gold-membership.html — Gold
 *     Membership terms
 *   - Lenskart app product page (3D Try-On feature)
 *   - https://www.trustpilot.com/review/lenskart.com — rating band and review
 *     volume; https://apps.apple.com/us/app/lenskart-eyewear/id970343205 — iOS
 *     App Store rating
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const lenskart: BrandPage = {
  slug: 'lenskart',
  providerId: 'lenskart',
  metaTitle: 'Lenskart review 2026 — eyewear, warranty and Gold cost',
  metaDescription:
    'An independent Lenskart review: how the eyewear pricing and Gold Membership work, what the one-year warranty actually covers, and where the app reviews go wrong.',
  intro:
    'Lenskart is the eyewear retailer that took India online, then took the model to more than a dozen countries with a hybrid of app, website and physical stores. The 3D Try-On tool and same-day-processed orders are the pitch; a fourteen-day no-questions return window and a one-year warranty with real exclusions are the print worth reading before you buy.',
  about: [
    'Lenskart was founded in 2008 by Peyush Bansal and co-founders, launching as an online business in India in 2010 before opening its first physical store in New Delhi in 2013. It has since built a hybrid model most eyewear retailers do not have: an app and website backed by a large retail footprint, so a customer can order online and pick up, try on, or return in a store rather than dealing with a courier both ways.',
    'The company now operates across 14 countries in Asia-Pacific and the Middle East — India remains its largest market, alongside Saudi Arabia, the UAE, Thailand, Vietnam, Singapore, Japan and Australia among others — with more than 2,000 retail stores globally as of 2025. That store count is the differentiator against pure online rivals: prescription eyewear is one of the categories where trying a frame on in person still matters to a lot of buyers.',
    'The catalogue covers prescription eyeglasses, sunglasses, contact lenses and accessories, sold at a range of price points from budget frames to designer-licensed collections. A 3D Try-On tool in the app lets a shopper preview a frame on their own face before ordering, aimed at the biggest objection to buying glasses online: not being able to see how they actually look.',
  ],
  facts: [
    { label: 'Founded', value: '2008, India' },
    { label: 'Countries served', value: '14, Asia-Pacific & ME' },
    { label: 'Stores', value: '2,000+ worldwide' },
    { label: 'Returns', value: '14 days, unused only' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Gold Membership is the main way Lenskart discounts repeat purchases — it is a paid annual programme, not a free loyalty tier, so it only pays off if you buy more than once a year.',
    items: [
      {
        name: 'Standard purchase',
        price: 'Frame and lens priced separately by tier',
        detail:
          'Pay per pair at listed price; the range runs from budget frames to designer-licensed lines, with lens type and coatings priced on top.',
        pick: true,
      },
      {
        name: 'Gold Membership',
        price: 'Paid annual membership',
        detail:
          'Includes offers such as buy-one-get-one and a discount on a first order, valid across the app, website, stores and home try-on for one year from purchase.',
      },
      {
        name: 'Home Try-On',
        price: 'Included with an order, where available',
        detail:
          'Frames are sent to try before you commit to lenses, reducing the risk of ordering the wrong style sight unseen — availability varies by market.',
      },
      {
        name: '1-year warranty',
        price: 'Included with every purchase',
        detail:
          'Free manufacturing-defect cover for a year from collection. Does not cover breakage, scratches or damage from accidents, mishandling or unauthorised repairs.',
      },
    ],
  },
  pros: [
    {
      title: 'Stores back up the app in 14 countries',
      body: 'Over 2,000 physical stores mean a buyer unhappy with an online order in a covered market can usually walk into a store rather than relying entirely on a courier round trip.',
    },
    {
      title: '3D Try-On removes some of the online-glasses guesswork',
      body: 'The in-app tool renders a 180-degree preview of a chosen frame on the shopper’s own face before checkout — a genuinely useful feature specific to eyewear, not a generic virtual try-on gimmick.',
    },
    {
      title: 'A stated one-year warranty on every pair',
      body: 'Manufacturing-defect cover is included by default rather than sold as an add-on, and the terms are published rather than left to case-by-case discretion.',
    },
    {
      title: 'App Store reviewers rate it highly',
      body: 'The iOS app carries a 4.49 out of 5 rating, a strong score for a shopping app in a category where fit and prescription accuracy usually generate more complaints than praise.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot tells a less flattering story than the App Store',
      body: 'Lenskart sits at a 4-star ("Great") band on Trustpilot across roughly 56,000 reviews, with a smaller US-specific storefront trailing at 3.5 out of 5 — a meaningfully lower score than the flagship rating.',
    },
    {
      title: 'The warranty excludes ordinary damage',
      body: 'Breakage, scratches, and damage from accidents, mishandling or unauthorised repair are explicitly not covered. It protects against manufacturing faults, not everyday wear on a pair of glasses.',
    },
    {
      title: 'Gold Membership is a paid tier, not automatic',
      body: 'The discounts attached to Gold Membership require buying the membership itself first. A one-off buyer gets none of those perks and pays the standard listed price.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.0, note: '"Great" band, roughly 56,000 reviews' },
    { source: 'App Store (iOS)', value: 4.49, note: 'around 1,500 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'strong for the store network and try-on tooling, capped by the US storefront’s weaker score',
    },
  ],
  bestFor: [
    'Buyers in India, the Middle East or Southeast Asia near a Lenskart store',
    'Anyone who wants to preview a frame with 3D Try-On before ordering',
    'Repeat buyers who order enough pairs a year to justify Gold Membership',
    'Shoppers who want a stated, published one-year manufacturing warranty',
  ],
  notFor: [
    'Buyers in markets where Lenskart has no store presence yet',
    'Anyone expecting the warranty to cover accidental damage or scratches',
    'One-off purchasers unwilling to pay for Gold Membership to unlock its offers',
  ],
  faq: [
    {
      q: 'Can I return glasses if I just do not like how they look?',
      a: 'Yes, within 14 days of receipt, provided the item is unused with tags and packaging intact. Lenskart describes this as a "no questions asked" policy, but the condition requirement is real and checked.',
    },
    {
      q: 'Does the warranty cover a scratched or broken lens?',
      a: 'No. The one-year warranty covers manufacturing defects only. Scratches, accidental breakage, mishandling and unauthorised repairs are explicitly excluded, so treat it as defect cover rather than accidental damage insurance.',
    },
    {
      q: 'Is Gold Membership worth buying for a single pair of glasses?',
      a: 'Usually not. The membership is paid and its value comes from repeat-purchase perks like buy-one-get-one offers over a full year. A one-time buyer is better off comparing the standard price against the membership fee first.',
    },
    {
      q: 'Does Lenskart ship outside its 14 core countries?',
      a: 'The retail and try-on experience is built around those markets. Outside them, expect limited or no service — the store network and same-country logistics are central to how Lenskart operates, unlike a pure global e-commerce shipper.',
    },
    {
      q: 'How reliable is the 3D Try-On preview?',
      a: 'It gives a reasonable sense of frame shape and proportion on your own face, which is more useful than a static product photo, but it is a preview, not a guarantee — fit still depends on your actual measurements once the glasses arrive.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'lenskart.com',
}
