/**
 * Brand page data for Sephora Poland (route: /brands/sephora).
 *
 * This page covers the Polish storefront, sephora.pl — not sephora.com or any
 * other national Sephora site. Catalogue, delivery, loyalty rules and returns
 * are all set locally and differ from the US operation.
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.sephora.pl/content/reassurance.html — delivery thresholds
 *     (free over 99 PLN by courier/parcel locker, free via the app) and the
 *     30-day return window with 14-day refund processing
 *   - https://www.sephora.pl/bezplatne-zwroty-z-inpost.html — free InPost
 *     parcel-locker returns
 *   - https://www.sephora.pl/warunki-sprzedazy/sales-terms.html — sales terms
 *   - https://www.lvmh.com/en/our-maisons/selective-retailing/sephora — Sephora
 *     founded 1969 in Limoges, France; part of LVMH since 1997; 3,000+ stores
 *     worldwide across the global network
 *   - https://www.trustpilot.com/review/sephora.pl — checked for a rating;
 *     only 23 reviews and no reliable aggregate score was visible, so no
 *     Trustpilot figure is quoted here (see note below)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const sephora: BrandPage = {
  slug: 'sephora',
  providerId: 'sephora',
  metaTitle: 'Sephora Poland review 2026 — sephora.pl delivery and returns',
  metaDescription:
    'An independent review of sephora.pl, the Polish Sephora storefront: delivery, the 30-day return window, and where local buyers complain most.',
  intro:
    'Sephora.pl is the Polish arm of the LVMH-owned beauty chain, not the US or French site. It carries the same mix of prestige and mass beauty brands Sephora is known for, priced and stocked for the Polish market, with delivery, returns and loyalty rules set locally rather than inherited wholesale from sephora.com or any other country storefront in the group.',
  about: [
    'Sephora was founded in Limoges, France in 1969 and has been part of LVMH since 1997, which now puts it inside a network of more than 3,000 stores worldwide. Poland is one of the markets it expanded into as part of that European rollout, and sephora.pl runs as a separate storefront with its own logistics, promotions and customer service, set locally rather than mirrored from any other country site, LVMH scale included.',
    'The catalogue follows the standard Sephora format: skincare, makeup, fragrance and haircare spanning prestige houses and the brand’s own private label, sold online and through its Polish store network. Anyone used to shopping a different Sephora market will recognise the layout immediately; what differs, and what actually matters when deciding whether to buy here, is commercial rather than editorial — pricing, delivery speed and how smoothly a return actually gets handled once you have paid.',
    'Delivery is free above a set order threshold by courier or parcel locker, and orders placed through the mobile app ship free regardless of basket size — a policy sephora.pl advertises more aggressively than most competitors in the market. Returns run on a 30-day window, with a free-return option through InPost lockers, which is the part of the experience Polish shoppers reference most when comparing it with other Polish beauty retailers.',
  ],
  facts: [
    { label: 'Poland site launched', value: 'sephora.pl' },
    { label: 'Parent company', value: 'LVMH (since 1997)' },
    { label: 'Free delivery over', value: '99 PLN, or free in-app' },
    { label: 'Return window', value: '30 days' },
  ],
  plans: {
    title: 'How delivery and returns are priced',
    note: 'The free-delivery threshold and return method both depend on how you order, so check the current basket total and courier options before assuming a delivery is free.',
    items: [
      {
        name: 'Standard delivery',
        price: 'Free over 99 PLN',
        detail:
          'Courier (DPD) or parcel locker for orders above the threshold; smaller baskets pay a delivery fee shown at checkout.',
      },
      {
        name: 'App orders',
        price: 'Free regardless of basket size',
        detail:
          'Ordering through the Sephora mobile app waives the delivery threshold entirely — the one genuinely distinctive perk on this site.',
        pick: true,
      },
      {
        name: 'InPost returns',
        price: 'Free',
        detail:
          'Returns sent back through an InPost parcel locker do not cost the buyer anything; other return methods may not be free.',
      },
      {
        name: 'Standard return',
        price: '30-day window',
        detail:
          'Items must be unopened, unused and in original packaging with accessories and samples included; refunds land within 14 days of the parcel arriving back.',
      },
    ],
  },
  pros: [
    {
      title: 'Free app delivery with no minimum spend',
      body: 'Most beauty retailers set a free-delivery threshold and enforce it everywhere. Ordering through the Sephora app removes that minimum entirely, which is unusual and worth using for small top-up orders.',
    },
    {
      title: 'A genuinely free return route via InPost',
      body: 'Parcel-locker returns through InPost cost nothing, which matters in a market where InPost lockers are already the default way most people send any parcel back to a retailer.',
    },
    {
      title: 'Full prestige-plus-mass catalogue in one place',
      body: 'The same breadth Sephora is known for elsewhere — prestige fragrance and skincare houses alongside drugstore-adjacent brands and Sephora’s own label — is stocked locally rather than trimmed for the Polish market.',
    },
    {
      title: 'Backed by a 3,000-store global operator',
      body: 'Being part of LVMH’s Sephora network since 1997 means the Polish operation inherits corporate scale, supplier relationships and a recognisable loyalty format rather than running as an independent local reseller.',
    },
  ],
  cons: [
    {
      title: 'Recurring stock-cancellation complaints',
      body: 'Reviews on Trustpilot’s sephora.pl page repeatedly describe orders being cancelled after payment because stock was not actually available — a pattern reviewers say has persisted for a long time, not a one-off.',
    },
    {
      title: 'No refunds on items bought in a physical store',
      body: 'Customer feedback on the same reviews describes Sephora Poland declining refunds for products purchased at a stationary store, which narrows your options if you bought in person rather than online.',
    },
    {
      title: 'Return shipping is not free by default',
      body: 'Outside the free InPost locker route, the buyer covers the direct cost of sending an item back — worth factoring in before ordering something you might send back.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite across catalogue breadth, delivery terms and the return policy',
    },
  ],
  bestFor: [
    'Polish shoppers who already use InPost lockers for parcels and returns',
    'Small top-up orders, where the app’s no-minimum free delivery pays off',
    'Buyers who want the full prestige-plus-mass Sephora catalogue locally',
    'Anyone comparing Sephora against other Polish online beauty retailers',
  ],
  notFor: [
    'Anyone who bought in a physical Sephora Poland store and wants an online refund',
    'Buyers who need certainty that a paid order will actually ship — cancellations are a recurring complaint',
    'Shoppers outside Poland — this storefront does not serve other markets',
  ],
  faq: [
    {
      q: 'Is sephora.pl the same as sephora.com?',
      a: 'No. Sephora runs separate storefronts per market with their own systems, and sephora.pl is the Polish one, with its own pricing, catalogue, delivery terms and return policy. Rules, promotions and account benefits on the US site, or on any other country’s Sephora site, do not carry over here.',
    },
    {
      q: 'How much does delivery cost?',
      a: 'Delivery is free on orders above a set threshold, currently 99 PLN, sent by courier or to a parcel locker. Order through the Sephora mobile app instead and delivery is free regardless of basket size, which is worth using for smaller top-up orders.',
    },
    {
      q: 'How long do I have to return something?',
      a: 'Thirty days from delivery. The item needs to be unopened, unused, in its original packaging, with any accessories, samples or gifts that came with it still included. Refunds are processed within 14 days of Sephora actually receiving the returned parcel back at its warehouse.',
    },
    {
      q: 'Can I return a Sephora.pl order for free?',
      a: 'Yes, if you send it back through an InPost parcel locker — that specific route is free of charge. Other return methods put the direct cost of shipping the item back on you, so check which option you are using before you commit to sending anything back.',
    },
    {
      q: 'Can I return something bought in a physical store to sephora.pl, or vice versa?',
      a: 'Be careful here: customer reports describe Sephora Poland refusing online refunds for items originally bought in a physical store. Keep your purchase channel in mind before you buy, and plan to return through the same channel you bought from to avoid a refund being refused.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'sephora.pl',
}
