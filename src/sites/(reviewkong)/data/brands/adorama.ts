/**
 * Brand page data for Adorama (route: /brands/adorama).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.adorama.com/g/history — founding year (1974), original
 *     34th Street store, 1988 move to the current 42 West 18th Street
 *     flagship
 *   - https://www.adorama.com/help/returnpolicy — 30-day return window,
 *     minimum 15% restocking fee, the non-returnable electronics list
 *     (laptops, tablets, drones, memory cards, etc.), oversize-item terms
 *   - https://www.adorama.com/help/warranties — warranty tiers for new,
 *     refurbished and used stock (graded Mint through "For Parts")
 *   - https://www.adorama.com/help/PaymentMethods — Adorama Edge Credit
 *     Card terms (no annual fee, 5% everyday discount or promotional
 *     financing), issuer (Comenity Bank / Fortiva)
 *   - https://www.adorama.com/help/shippinganddelivery — free 2-day
 *     shipping threshold ($49.99), international shipping/duties policy,
 *     the 70-country/territory shipping list, Package Protection (Extend)
 *   - https://www.trustpilot.com/review/www.adorama.com — 4.6/5, 3,662
 *     reviews, "Excellent," paid Trustpilot subscription noted on the
 *     profile itself
 *
 * ⚠️ Prices, fees and thresholds are working values captured on 2026-08-24
 * and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const adorama: BrandPage = {
  slug: 'adorama',
  providerId: 'adorama',
  metaTitle: 'Adorama review 2026 — returns, warranty tiers, financing',
  metaDescription:
    "An independent Adorama review: the 30-day return window, why opened electronics can't go back, and the tiered used-and-refurbished warranty system.",
  intro:
    "Adorama has sold photo and video equipment out of the same block of Manhattan since 1974, and its 30-day return window and detailed used-and-refurbished grading system reflect that specialism. The catch is squarely electronics-shaped: laptops, tablets, drones, computers and memory cards cannot be returned once their sealed packaging is opened, whatever condition they're in. A 15% restocking fee applies if anything comes back without its original box, seals and accessories intact.",
  about: [
    "Adorama opened as a single photography store on Manhattan's 34th Street in 1974 — self-described as 'The Photography People' — and moved to its current 42 West 18th Street flagship in 1988. What was once a camera counter now spans computers, drones, audio, musical instruments and home electronics online, alongside sister storefronts under the same group: Adorama Rentals, the print service Printique, and the outdoor retailers Scuba.com and SunnySports. The company still operates the single NYC retail store, closed Saturdays, alongside its e-commerce catalogue, and ships to more than 70 countries and territories worldwide.",
    "Pricing is not the differentiator — Adorama competes on selection, financing and service tiers rather than being reliably the cheapest. The Adorama Edge Credit Card, issued through Comenity Bank or Fortiva, carries no annual fee and offers a choice between an everyday 5% discount or promotional financing on qualifying purchases. New items carry the full manufacturer warranty; refurbished stock carries a 90-day return-to-manufacturer warranty; and used gear is graded Mint through 'For Parts,' with warranty coverage — 90 days down to none at all — set by that grade rather than a single blanket policy across the used catalogue.",
    'Returns run 30 days from delivery, longer than most electronics retailers, but the exception matters more than the headline number: laptops, tablets, drones, memory cards and other electronics cannot go back once the sealed box is opened, and a minimum 15% restocking fee applies to anything returned without its original packaging and accessories intact. Trustpilot rates Adorama 4.6 out of 5 across more than 3,600 reviews — a genuinely high volume for a specialist retailer — though Adorama pays for a Trustpilot business subscription and actively invites reviews from every customer, worth factoring in when reading that score.',
  ],
  facts: [
    { label: 'Founded', value: '1974' },
    { label: 'Return window', value: '30 days' },
    { label: 'Ships to', value: '70+ countries' },
    { label: 'Restocking fee', value: 'Min. 15% if not resellable' },
  ],
  plans: {
    title: 'What buying actually costs',
    note: 'Electronics carry the strictest return terms on the site — check the non-returnable list before assuming the 30-day window applies.',
    items: [
      {
        name: 'Standard shipping',
        price: 'Cost shown at checkout',
        detail:
          'Free 2-day shipping applies to eligible items on orders over $49.99 within the contiguous 48 states; Home Electronics, Musical Instruments and used stock are excluded.',
        pick: true,
      },
      {
        name: '30-day return window',
        price: 'Self-service label; 15% restocking fee risk',
        detail:
          'Generous by US electronics standards, but laptops, tablets, drones, computers and memory cards cannot be returned once opened, whatever the reason.',
      },
      {
        name: 'Adorama Edge Credit Card',
        price: 'No annual fee; 5% off every day or promotional financing',
        detail:
          'Issued through Comenity Bank or Fortiva; pick the everyday discount or a financing offer on a given order, not both.',
      },
      {
        name: 'Used and refurbished tiers',
        price: 'Priced below new; warranty set by condition grade',
        detail:
          'Refurbished carries a 90-day return-to-manufacturer warranty; used ranges from 90 days down to no warranty at all for "Flawed" or "For Parts" grades.',
      },
    ],
  },
  pros: [
    {
      title: 'A real 30 days to decide',
      body: "Most electronics retailers give 14 days; Adorama's self-service return portal and 30-day window give more room to test a purchase before the deadline passes.",
    },
    {
      title: 'Warranty tiers are written down',
      body: "New stock gets the full manufacturer warranty, while refurbished and used items carry stated, graded warranty terms instead of a vague 'as-is' disclaimer buried in the fine print.",
    },
    {
      title: 'Financing with no annual fee',
      body: 'The Adorama Edge Credit Card offers a standing 5% everyday discount or promotional financing on qualifying purchases through Comenity Bank or Fortiva, without an annual charge.',
    },
    {
      title: 'A large, active Trustpilot presence',
      body: '4.6 out of 5 across more than 3,600 reviews is a genuinely high volume for a specialist retailer, and Adorama replies to a stated majority of negative reviews rather than ignoring them.',
    },
  ],
  cons: [
    {
      title: "Opened electronics can't go back",
      body: "Laptops, computers, tablets, drones and memory cards are non-returnable once out of their sealed packaging — there is no 'try it and decide' option for most higher-value gear here.",
    },
    {
      title: 'Restocking fee risk is real',
      body: 'A minimum 15% fee applies if a returned item is not in its original, unaltered packaging with every accessory and manual included, which is easy to fall foul of on anything larger than an accessory.',
    },
    {
      title: 'International orders carry friction',
      body: 'Buyers outside the US and Canada cover duties, taxes and brokerage fees themselves, and Adorama will not ship an international order at all until every backordered item is back in stock.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.6,
      note: '3,600+ reviews, rated "Excellent"; Adorama pays for a Trustpilot subscription and actively solicits reviews',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'weighed against the strict non-returnable-electronics list and restocking-fee risk above',
    },
  ],
  bestFor: [
    'US and Canada buyers who want manufacturer-backed new gear alongside a genuinely tiered used market',
    'Photo, video and audio buyers who value a near-50-year specialist over a generalist chain',
    'Buyers who want financing with a stated everyday discount rather than a vague "special offer"',
    'International buyers prepared to handle their own customs and duties',
  ],
  notFor: [
    'Anyone planning to open and test a laptop, tablet or drone before deciding whether to keep it',
    'Buyers who want a fast international order when part of it is backordered',
    'Shoppers who want to skip restocking-fee risk entirely — that means keeping every box, seal and accessory',
  ],
  faq: [
    {
      q: "Can I return a laptop or tablet if I just don't like it?",
      a: "Only if it's still in its original, unopened sealed packaging. Once the box is opened, laptops, computers, tablets, drones and memory cards are on Adorama's non-returnable list regardless of the reason for the return, so this is not a 'try before you commit' retailer for that category of electronics.",
    },
    {
      q: 'Does Adorama ship internationally?',
      a: "Yes, to more than 70 countries and territories by its own listing, alongside the US and Canada. Import duties, taxes and brokerage fees are the buyer's responsibility and are not something Adorama controls or predicts, and an international order that includes a backordered item is held until everything is in stock.",
    },
    {
      q: 'What is the restocking fee, exactly?',
      a: "A minimum of 15% of the item's value, charged when a returned product isn't in new, resellable condition — meaning it's missing its original box, an intact UPC code, packing material, manuals or accessories. Keeping everything that arrived, in the condition it arrived, is the way to avoid it.",
    },
    {
      q: 'Is financing available?',
      a: 'Yes, through the Adorama Edge Credit Card, issued via Comenity Bank or Fortiva Retail Credit. It carries no annual fee and offers either an everyday 5% discount or promotional financing on qualifying purchases — the two are alternatives on a given order, not a stack.',
    },
    {
      q: 'Is the 4.6 Trustpilot score trustworthy?',
      a: 'It reflects a genuinely large sample — more than 3,600 reviews — which is hard to fake at that volume. But Adorama holds a paid Trustpilot business subscription and actively invites every customer to review, both of which tend to lift review counts and, often, average scores compared with a store that never asks.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'adorama.com',
}
