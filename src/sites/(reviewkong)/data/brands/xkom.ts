/**
 * Brand page data for x-kom (route: /brands/xkom).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.x-kom.pl/ — homepage stats banner (24 years on the market,
 *     over a million customer reviews claimed, free delivery to salons)
 *   - https://www.x-kom.pl/o-nas — founding year (2002), store count (27),
 *     employee count, catalogue size (43,000+ products), the al.to sister
 *     brand, and the "largest Allegro seller" self-description
 *   - https://www.x-kom.pl/zwroty — 15-day return window, free-return
 *     conditions (InPost locker or in-store only), 7-business-day refund
 *     timing, non-returnable categories, and the downloadable per-line
 *     warranty documents (G4M3R, Pro, Home & Office, NYXUM)
 *   - https://www.trustpilot.com/review/x-kom.pl — 2.2/5, 902 reviews, "Poor"
 *
 * ⚠️ Prices, fees and store/employee counts are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const xkom: BrandPage = {
  slug: 'xkom',
  providerId: 'xkom',
  metaTitle: 'x-kom review 2026 — pricing, delivery, 15-day returns',
  metaDescription:
    'An independent x-kom review: how the Polish electronics retailer prices delivery, instalments and returns, and the Trustpilot pattern worth reading first.',
  intro:
    "x-kom is one of Poland's largest computer and electronics retailers, built from a single Częstochowa shop in 2002 into a chain of 27 stores plus a catalogue of more than 43,000 products. Pricing runs on frequent flash discounts and 0% instalments rather than everyday-low pricing, and returns are 15 days rather than the EU's usual 14. The catch for anyone outside Poland: the site, support and paperwork are Polish-only, and there's no international storefront.",
  about: [
    "x-kom opened its first physical store in Częstochowa in 2002 and has grown into a chain of 27 showrooms across Poland, alongside one of the country's most-used electronics websites and, by its own account, the largest storefront on Allegro, Poland's dominant marketplace. The catalogue runs past 43,000 products: laptops, components, gaming rigs, smartphones, TVs and smarthome gear. A sister company, al.to, spun out in 2012 to sell toys, games and appliances under the same parent group, but x-kom itself stays focused on computing and consumer electronics rather than becoming a general marketplace.",
    "Pricing leans on constant promotion rather than a stable list price: a twice-daily 'Gorący Strzał' flash sale, code-based discounts stacked on top of the shelf price, and 0% instalment plans arranged at checkout for higher-ticket items like gaming PCs. Business customers get leasing instead. x-kom also runs a buyback programme for old devices and short-term equipment rental, both unusual extras for a retailer this size. None of this changes the basic mechanics of buying: the price you see before a code is rarely the price you pay, so it is worth comparing the discounted total against a rival before assuming a shown price is competitive.",
    "Returns run 15 days from delivery, a day longer than the EU statutory minimum, and can go back for free only through an InPost parcel locker or in person at a salon; posted any other way, the cost falls on the buyer. Trustpilot puts x-kom at 2.2 out of 5 across 902 reviews, rated 'Poor,' with the recurring complaint being checkout stock shown as available that turns out to be back-ordered. None of that erases the practical case for x-kom within Poland — the catalogue, the physical stores and the financing are real advantages — but it is not the retailer to pick for support reassurance, and it sells only within Poland.",
  ],
  facts: [
    { label: 'Founded', value: '2002' },
    { label: 'Stores in Poland', value: '27 salons' },
    { label: 'Return window', value: '15 days' },
    { label: 'Catalogue', value: '43,000+ products' },
  ],
  plans: {
    title: 'What buying actually costs',
    note: 'Delivery, financing and returns are priced separately from the product — there is no single membership fee that bundles them together.',
    items: [
      {
        name: 'Courier or InPost locker delivery',
        price: 'Charged per order, shown at checkout',
        detail:
          "The standard route for anyone outside x-kom's 27 stores. Cost depends on weight, size and speed; nothing here is bundled into the product price.",
      },
      {
        name: 'Free collection at a salon',
        price: 'Free',
        detail:
          'Order online and collect at any of the 27 physical stores in Poland — the only genuinely free delivery option, and the fastest way to return an item too.',
        pick: true,
      },
      {
        name: '0% instalment financing',
        price: 'Interest-free, via a partner lender',
        detail:
          'Available on many higher-priced items, arranged at checkout subject to a bank credit decision. Missing a payment typically ends the 0% rate.',
      },
      {
        name: 'Leasing and equipment rental',
        price: 'Aimed at business buyers',
        detail:
          'x-kom also offers leasing and short-term equipment rental (wynajem sprzętu) alongside a trade-in/buyback programme for old devices.',
      },
    ],
  },
  pros: [
    {
      title: '27 stores double as a return counter',
      body: "Bring a purchase back to any of x-kom's 27 Polish showrooms instead of paying for a courier both ways — the fastest, cheapest route through the 15-day return window.",
    },
    {
      title: '0% instalments on higher-ticket gear',
      body: "Financing is arranged at checkout rather than through a separate lender's site, useful for gaming PCs and premium laptops that would otherwise be one large payment, subject to a bank's credit decision.",
    },
    {
      title: 'One of the largest catalogues in Polish electronics',
      body: 'More than 43,000 products span laptops, components, gaming rigs, phones, TVs and smarthome gear, plus a twice-daily flash-deal slot for shoppers who track prices closely.',
    },
    {
      title: 'Warranty terms are published, not vague',
      body: 'Every own-brand PC line — G4M3R, Pro, Home & Office, NYXUM — has its own downloadable warranty document on the site rather than one blanket policy, worth reading before buying a pre-built.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rating is genuinely poor',
      body: "2.2 out of 5 across 902 reviews, rated 'Poor.' The recurring pattern in the reviews is stock shown as available at checkout that turns out to be back-ordered, discovered only after paying.",
    },
    {
      title: "Return shipping isn't always free",
      body: 'Free returns work only through an InPost locker or in a salon. Posting any other way — most large items included — means paying courier costs yourself, on top of the 15-day deadline.',
    },
    {
      title: 'Poland only, Polish-language',
      body: "The site, support and returns paperwork are all in Polish, built for Polish addresses. There's no separate international storefront, so this is not a realistic option for anyone shopping from outside Poland.",
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 2.2,
      note: '902 reviews, rated "Poor"; recurring complaints about stock accuracy and delivery delays',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'weighed against the store network, catalogue and financing above the support-reputation pattern',
    },
  ],
  bestFor: [
    'Buyers in Poland who want to compare price, pick up in a salon and skip delivery fees entirely',
    'Big-ticket purchases where 0% instalments make sense',
    'Gamers who want a pre-built PC with a stated, downloadable warranty',
    'Shoppers who value a huge catalogue over customer-service polish',
  ],
  notFor: [
    'Anyone outside Poland — the store, support and paperwork are Polish-only',
    'Buyers who need confidence that checkout stock reflects real availability',
    'Anyone who wants free return shipping by default',
  ],
  faq: [
    {
      q: 'Does x-kom ship or sell outside Poland?',
      a: 'No. x-kom operates as a Polish retailer with a Polish-language site, Polish customer support and delivery limited to Polish addresses, salons and parcel lockers. There is no separate international storefront, so shoppers outside Poland cannot realistically use it — treat this review as relevant only if you have a Polish delivery address.',
    },
    {
      q: 'How long do I have to return something?',
      a: "15 days from the day you receive the order, longer than the EU's 14-day statutory minimum. You can return for free through an InPost parcel locker (if the item fits) or in any of the 27 salons; any other method, you cover the postage yourself. Refunds land within 7 business days of x-kom receiving the item.",
    },
    {
      q: 'Can I return large items like TVs or gaming PCs in a store?',
      a: 'Yes, but contact x-kom first — televisions, gaming chairs, monitors 32 inches and larger, e-scooters and similarly bulky items need a specific return method the support team arranges with you, rather than the standard locker or courier process used for smaller purchases.',
    },
    {
      q: 'Does x-kom offer 0% instalments?',
      a: "Yes, on many higher-priced items, arranged at checkout and subject to approval from x-kom's partner lender rather than guaranteed. Business buyers can choose leasing instead. Missing a scheduled instalment payment typically ends the interest-free rate, so it is worth checking the exact terms shown for the specific product before committing.",
    },
    {
      q: "Is x-kom's Trustpilot rating a concern?",
      a: "Yes, worth weighing seriously: 2.2 out of 5 across 902 reviews is rated 'Poor,' and the pattern in the complaints is specific — stock shown as available at checkout that turns out to be back-ordered, found out only after paying and chasing support. It does not mean every order goes wrong, but it is not a reassuring number.",
    },
  ],
  updated: '2026-08-24',
  deepLink: 'x-kom.pl',
}
