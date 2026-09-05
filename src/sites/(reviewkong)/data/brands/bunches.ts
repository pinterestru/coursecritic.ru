/**
 * Brand page data for Bunches (route: /brands/bunches).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.bunches.co.uk/about-us/history — founding year, family
 *     ownership, scale (13M+ bouquets), Posy Points, FSF partnership
 *   - https://www.bunches.co.uk/category/letterbox-flowers and
 *     https://www.bunches.co.uk/category/available-soonest — letterbox
 *     packaging, next-day availability, freshness guarantee
 *   - https://www.bunches.co.uk/terms — delivery charges (from £4.99),
 *     Royal Mail Tracked 24 for letterbox/postal flowers
 *   - https://uk.trustpilot.com/review/www.bunches.co.uk — rating and volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const bunches: BrandPage = {
  slug: 'bunches',
  providerId: 'bunches',
  metaTitle: 'Bunches review 2026 — letterbox flowers, delivery, cost',
  metaDescription:
    'An independent Bunches review: how letterbox flower delivery works, what the freshness guarantee covers, and where couriered bouquets can still go wrong.',
  intro:
    'Bunches is a family-run British flower and gift company that more or less invented letterbox flower delivery: bouquets sized and packaged to fit through a standard letterbox, sent by post so a missed doorstep does not mean a missed gift. It also sells hand-tied bouquets and plants delivered by courier, where the reliability story is less clean.',
  about: [
    "Bunches was founded in 1989 by Erik and Sandra Hoving, who started out selling flowers from under an umbrella before signing up with the Post Office in 1990 to dispatch bouquets by mail — five bouquets in the first week, according to the company's own history. It remains family-owned, with the founders' children Dani and Dan now running the business from a single site in Newstead Village, Nottinghamshire, that combines production, dispatch and customer support.",
    'The letterbox format is the point of difference. Flowers are packed flat in recyclable paper wrap with a compostable flower-food sachet, sized to fit through a standard UK letterbox, and sent by Royal Mail Tracked 24 so a bouquet does not depend on someone being home to answer the door. Hand-tied bouquets and larger gifts are sent by courier instead, which behaves more like ordinary parcel delivery, cutoffs, tracking and occasional delays included.',
    "Bunches backs orders with a 7-day freshness guarantee, and states it commits 10% of profit to charitable projects supporting communities in the UK and developing countries, alongside a partnership with Florverde Sustainable Flowers for stems sourced from certified Colombian farms with above-minimum wages and worker protections written into the certification. Over 13 million bouquets delivered since 1989 is the company's own lifetime figure, not an independently audited one, but it is consistent with the review volume its Trustpilot profile has accumulated over the same period.",
  ],
  facts: [
    { label: 'Founded', value: '1989' },
    { label: 'Ownership', value: 'Family-owned (Hoving family)' },
    { label: 'Letterbox delivery', value: 'Royal Mail Tracked 24' },
    { label: 'Guarantee', value: '7-day freshness guarantee' },
  ],
  plans: {
    title: 'How delivery is priced',
    note: 'Letterbox and courier flowers are priced and delivered differently — check which one a given bouquet actually is before assuming next-day cover.',
    items: [
      {
        name: 'Letterbox flowers by post',
        price: 'Often bundled into the bouquet price',
        detail:
          "Sent by Royal Mail Tracked 24 in letterbox-friendly packaging. No one needs to be home, but Royal Mail's own timescales apply, so it is not a same-day option.",
        pick: true,
      },
      {
        name: 'Standard courier delivery',
        price: 'From around £4.99',
        detail:
          'For hand-tied bouquets, plants and larger gifts. Priced per order at checkout rather than a single flat fee across the whole catalogue.',
      },
      {
        name: 'Next-day delivery',
        price: 'Order before the daily cutoff',
        detail:
          'Available on in-stock lines shown as deliverable "tomorrow." Bunches does not publish one universal cutoff time across the site, so check the product page or checkout before relying on it.',
      },
    ],
  },
  pros: [
    {
      title: 'Letterbox flowers solve the missed-delivery problem',
      body: 'Packaging designed to fit through a standard letterbox means a bouquet does not bounce back to a depot because nobody was home, which is the single most common way flower delivery goes wrong elsewhere.',
    },
    {
      title: 'A named freshness guarantee, not a vague promise',
      body: 'The 7-day freshness guarantee gives a concrete number to hold the company to if flowers wilt early, rather than a generic satisfaction assurance with no timeframe attached.',
    },
    {
      title: 'One site handles everything, which shows in support',
      body: 'Production, dispatch and customer service run from a single Nottinghamshire site rather than a distributed marketplace of local florists, so there is one place to escalate a problem to.',
    },
    {
      title: 'A sourcing commitment you can actually check',
      body: 'The Florverde Sustainable Flowers partnership names a specific certification body for Colombian-grown stems, rather than an unverifiable "ethically sourced" label with nothing behind it to check against.',
    },
  ],
  cons: [
    {
      title: 'Courier-sent bouquets carry ordinary courier risk',
      body: "Outside the letterbox range, flowers move by standard courier and are exposed to the same late or missed deliveries as any parcel service, which shows up repeatedly in negative reviews around key dates like Mother's Day.",
    },
    {
      title: 'No single published cutoff time',
      body: 'Next-day availability is shown per product rather than as one site-wide cutoff, so a buyer has to check each item rather than relying on a rule of thumb.',
    },
    {
      title: 'Letterbox flowers are smaller by design',
      body: 'The format that avoids missed doorstep deliveries also means fewer, shorter stems than a full hand-tied bouquet — a genuine trade-off, not a flaw, but worth knowing before buying for someone expecting a large arrangement.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.3, note: 'around 18,000 reviews, rated "Excellent"' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'strong on the letterbox format and its guarantee, marked down for courier-delivery variance',
    },
  ],
  bestFor: [
    'Sending flowers to someone who is often out during the day',
    'Gifts where a compostable, letterbox-sized bouquet fits the occasion',
    'UK-only deliveries — Bunches does not ship flowers internationally',
    'Buyers who want a named freshness guarantee rather than a vague one',
  ],
  notFor: [
    'A large, full-size arrangement — letterbox bouquets are deliberately compact',
    "Time-critical courier deliveries around peak dates like Mother's Day",
    'Anyone needing delivery outside the UK',
  ],
  faq: [
    {
      q: 'How do letterbox flowers actually get delivered?',
      a: 'They are packed flat in recyclable wrap with a flower-food sachet, sized to fit through a standard letterbox, and sent by Royal Mail Tracked 24. Nobody needs to be in to receive them, which is the main appeal over courier delivery.',
    },
    {
      q: 'What does the freshness guarantee cover?',
      a: 'Bunches guarantees flowers for 7 days from delivery. If they wilt earlier than that, the guarantee is the basis for a complaint, though the exact remedy — replacement or refund — is handled case by case through customer service rather than an automatic process, so keep photos and the order number handy when you get in touch.',
    },
    {
      q: 'Can Bunches deliver flowers outside the UK?',
      a: 'No. Bunches operates as a UK domestic flower and gift retailer, delivering by Royal Mail and courier within the UK only, so it is not an option for sending flowers internationally. Shoppers outside the UK will need a florist or gifting service that specifically covers their destination country instead.',
    },
    {
      q: 'Is next-day delivery guaranteed?',
      a: 'Availability is shown per product rather than promised site-wide, and courier-delivered items carry ordinary parcel-delivery risk around busy periods. Check the specific product page and the delivery date offered at checkout rather than assuming next-day applies to every bouquet in the catalogue.',
    },
    {
      q: 'Is Bunches cheaper than a local florist?',
      a: "Letterbox flowers, which often bundle delivery into the headline price, tend to undercut a local florist's hand-delivered bouquet on straightforward gifts. Courier-sent hand-tied bouquets sit closer to typical online florist pricing once the roughly £4.99-and-up delivery fee is added on top of the bouquet itself.",
    },
  ],
  updated: '2026-08-24',
  deepLink: 'bunches.co.uk',
}
