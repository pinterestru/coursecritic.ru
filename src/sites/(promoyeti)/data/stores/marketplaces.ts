/**
 * Marketplaces & general retail.
 *
 * ⚠️ Working values written from the merchants' public pages; re-check before a
 * campaign. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const marketplaceStores: Store[] = [
  {
    slug: 'walmart',
    name: 'Walmart',
    domain: 'walmart.com',
    siteLabel: 'walmart.com',
    badge: 'WM',
    color: '#0A5AA8',
    category: 'marketplaces',
    markets: 'United States',
    blurb: 'US retail at scale — rollbacks and pickup beat any code.',
    about: [
      'Walmart’s US site sells its own inventory alongside a large third-party marketplace. That split matters more than any promotion: who the seller is decides the return route, the delivery estimate and whether the item is covered by the store’s usual guarantees.',
      'Walmart does not run a coupon-code economy. It prices down directly — "rollback" reductions, clearance, and a paid membership that removes delivery fees. The saving most people leave on the table is pickup: choosing store collection avoids delivery charges entirely and is often available same day.',
    ],
    offers: [
      {
        id: 'walmart-rollback',
        kind: 'deal',
        value: 'Outlet',
        title: 'Rollbacks and clearance across the catalogue',
        detail:
          'Walmart’s standing markdown mechanic, applied to the shelf price with no code involved. Clearance is where the deepest cuts are.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'walmart-pickup',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free store pickup instead of paid delivery',
        detail:
          'Collection is free on qualifying orders and frequently available the same day. On a sub-threshold basket it is worth more than any discount.',
        checked: CHECKED,
      },
      {
        id: 'walmart-membership',
        kind: 'deal',
        value: 'Member',
        title: 'Paid membership — free delivery, fuel and pharmacy benefits',
        detail:
          'Worth it only above a certain order frequency. Do the arithmetic on your own delivery habit rather than the marketing.',
        terms: 'A paid annual or monthly subscription.',
        checked: CHECKED,
      },
      {
        id: 'walmart-marketplace',
        kind: 'deal',
        value: 'Sale',
        title: 'Marketplace seller promotions',
        detail:
          'Third-party sellers run their own discounts. Check who the seller is before you judge the deal, because the return route changes with it.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check "sold by" before you buy',
        body: 'Sold-by-Walmart and sold-by-a-marketplace-seller are different products from a returns and support point of view, at the same price.',
      },
      {
        title: 'Pickup beats the delivery threshold',
        body: 'If a store is on your route, collection removes the postage question entirely and is often faster.',
      },
      {
        title: 'Price-match rules changed',
        body: 'Walmart no longer honours the old broad price-match policy. Do not plan a purchase around it.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Model', value: 'First-party plus third-party marketplace' },
      { label: 'Returns', value: 'Typically 90 days on first-party; varies for marketplace' },
      { label: 'Delivery', value: 'Free over a threshold, or free store pickup' },
    ],
    faq: [
      {
        q: 'Does Walmart accept promo codes?',
        a: 'Rarely, and not as a systematic mechanic. Rollbacks, clearance and pickup are how you actually pay less here.',
      },
      {
        q: 'How do I return a marketplace item?',
        a: 'Through the seller’s policy, which can be shorter and stricter than Walmart’s own. The listing states it — read it before ordering.',
      },
      {
        q: 'Is the membership worth it?',
        a: 'If you order delivery more than a couple of times a month, usually yes. For occasional orders, free pickup does the same job for nothing.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'alibaba',
    name: 'Alibaba.com',
    domain: 'alibaba.com',
    siteLabel: 'alibaba.com',
    badge: 'AB',
    color: '#C4540F',
    category: 'marketplaces',
    markets: 'Worldwide — B2B wholesale, cross-border',
    blurb: 'Wholesale sourcing where the negotiated quote, not a coupon, is the price.',
    about: [
      'Alibaba.com is a business-to-business sourcing platform, not a consumer shop. Listings are supplier offers with minimum order quantities, and the price you see is a starting point for a conversation rather than a checkout number.',
      'This changes what "discount" means. Coupons exist — new-buyer coupons, platform coupons during trade events — but they are marginal next to negotiating the unit price at volume, choosing the right shipping method, and using Trade Assurance so your payment is held until delivery is confirmed. The expensive mistakes here are shipping and quality control, not the headline price.',
    ],
    offers: [
      {
        id: 'alibaba-newbuyer',
        kind: 'deal',
        value: 'New customer',
        title: 'New-buyer coupons and first-order credits',
        detail:
          'The platform issues acquisition coupons to new accounts, applied against qualifying orders at checkout.',
        checked: CHECKED,
      },
      {
        id: 'alibaba-negotiate',
        kind: 'deal',
        value: 'Negotiate',
        title: 'Negotiate the unit price at your actual volume',
        detail:
          'Listed prices assume a bracket. Sending an RFQ with your real quantity routinely produces a lower number than any coupon.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'alibaba-events',
        kind: 'deal',
        value: 'Coupons',
        title: 'Trade-show and seasonal sourcing events',
        detail:
          'The platform runs scheduled events with supplier-funded discounts and platform coupons layered on top.',
        checked: CHECKED,
      },
      {
        id: 'alibaba-assurance',
        kind: 'deal',
        value: 'Protection',
        title: 'Trade Assurance — payment held until delivery is confirmed',
        detail:
          'Not a discount, but the mechanism that stops a cheap order becoming a total loss. Use it on every order with a supplier you have not worked with.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Order samples before volume',
        body: 'A sample order costs a fraction of a container and answers the only question that matters. Skipping it is the classic expensive mistake.',
      },
      {
        title: 'Get the landed cost, not the unit price',
        body: 'Freight, insurance, duty and customs clearance often exceed the goods. A supplier who is 10% dearer with better shipping terms can be cheaper delivered.',
      },
      {
        title: 'Verified supplier status is a filter, not a guarantee',
        body: 'Use it to narrow the list, then check the trade history and ask for references. Both take minutes.',
      },
    ],
    facts: [
      { label: 'Model', value: 'B2B wholesale marketplace' },
      { label: 'Minimums', value: 'MOQ per listing — often high' },
      { label: 'Protection', value: 'Trade Assurance on qualifying orders' },
      { label: 'Real cost driver', value: 'Freight and duty, not unit price' },
    ],
    faq: [
      {
        q: 'Is Alibaba.com the same as AliExpress?',
        a: 'No. AliExpress is retail, single units, consumer returns. Alibaba.com is wholesale with minimum order quantities and negotiated terms. Confusing them is how people end up with 500 phone cases.',
      },
      {
        q: 'Do Alibaba coupons matter?',
        a: 'Marginally. On a wholesale order, the negotiated unit price and the shipping method move the total far more than any coupon.',
      },
      {
        q: 'How do I avoid being scammed?',
        a: 'Pay through Trade Assurance, order a sample first, and never move the conversation and the payment off-platform. Those three rules cover most of the risk.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'dhgate',
    name: 'DHgate',
    domain: 'dhgate.com',
    siteLabel: 'dhgate.com',
    badge: 'DH',
    color: '#B02222',
    category: 'marketplaces',
    markets: 'Worldwide — cross-border from Chinese sellers',
    blurb: 'Cross-border marketplace with a genuine coupon system and a real quality spread.',
    about: [
      'DHgate is a cross-border marketplace where mostly Chinese sellers list to international buyers, in small wholesale lots and increasingly in single units. Prices are low and the quality spread between two identical-looking listings is enormous.',
      'Unlike most Western retailers, DHgate genuinely runs on coupons: seller coupons, platform coupons, first-order allowances and cart-level thresholds all stack in a defined order. Collecting them on the product page before you add to cart is the mechanic. Buyer protection and delivery time are what you are trading for the price.',
    ],
    offers: [
      {
        id: 'dhgate-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Stackable seller and platform coupons',
        detail:
          'Collect the seller coupon on the listing and the platform coupon in the coupon centre; both apply at checkout. This is the site’s core pricing mechanic.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'dhgate-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'New-buyer allowance on a first order',
        detail: 'A one-off credit issued to new accounts, with a minimum spend.',
        checked: CHECKED,
      },
      {
        id: 'dhgate-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Flash deals and scheduled sale events',
        detail:
          'Time-boxed reductions across categories, several times a year plus a rolling daily selection.',
        checked: CHECKED,
      },
      {
        id: 'dhgate-protection',
        kind: 'deal',
        value: 'Protection',
        title: 'Buyer protection window on qualifying orders',
        detail:
          'Payment is held until you confirm receipt. Do not confirm early to be polite — that is the protection.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Sort by orders, not by price',
        body: 'A listing with thousands of completed orders and a long review history is a different risk from an identical listing with none.',
      },
      {
        title: 'Check the shipping method before you buy',
        body: 'The cheapest option can take six weeks. The difference between shipping tiers often exceeds the coupon you just collected.',
      },
      {
        title: 'Never confirm receipt before you have opened it',
        body: 'Confirming releases the payment and effectively ends the dispute window.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Cross-border marketplace, small wholesale and retail' },
      { label: 'Protection', value: 'Escrow-style hold until receipt is confirmed' },
      { label: 'Delivery', value: 'Days to weeks depending on the method chosen' },
      { label: 'Duty', value: 'Charged on arrival in many countries' },
    ],
    faq: [
      {
        q: 'Do DHgate coupons stack?',
        a: 'Yes — seller and platform coupons apply in a defined order, and a cart threshold discount can sit on top. It is one of the few sites where stacking genuinely works.',
      },
      {
        q: 'Is DHgate safe?',
        a: 'The payment protection works if you use it: pay on-platform, keep the conversation on-platform, and do not confirm receipt until you have inspected the goods.',
      },
      {
        q: 'Will I pay customs?',
        a: 'In most countries, above your de minimis threshold, yes. Price the order with duty included before deciding it is cheap.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'hacoo',
    name: 'Hacoo',
    domain: 'hacoo.app',
    siteLabel: 'hacoo.app',
    badge: 'HC',
    color: '#8A2350',
    category: 'marketplaces',
    markets: 'UK, Germany and other European markets',
    blurb: 'Discount marketplace app built entirely around stacked coupon mechanics.',
    about: [
      'Hacoo is a mobile-first discount marketplace shipping cross-border into Europe, competing at the very low end on price. The catalogue is broad and shallow: household goods, accessories, small electronics, apparel.',
      'Everything about the app is a coupon mechanic — new-user allowances, daily check-in credits, group-buy pricing, spin-the-wheel vouchers and cart-level thresholds. That is the product. What you are trading is delivery time, which is long, and returns, which are awkward on cross-border orders of low-value items.',
    ],
    offers: [
      {
        id: 'hacoo-newuser',
        kind: 'deal',
        value: 'New customer',
        title: 'New-user allowance and first-order pricing',
        detail:
          'The acquisition offer is aggressive and is normally the best price you will ever get on the platform.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'hacoo-daily',
        kind: 'deal',
        value: 'Coupons',
        title: 'Daily check-in credits and in-app vouchers',
        detail:
          'Credits accrue for opening the app and completing tasks, and apply against future orders. Low value per action, meaningful over weeks.',
        checked: CHECKED,
      },
      {
        id: 'hacoo-group',
        kind: 'deal',
        value: 'Member',
        title: 'Group-buy pricing',
        detail:
          'Prices drop when several buyers join the same order. It is the platform’s cheapest tier and it is not a code.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Judge by the delivered price, including time',
        body: 'A three-week delivery window on a cheap item is part of the price. If you need it this month, this is not the channel.',
      },
      {
        title: 'Read what the item actually is',
        body: 'At this price point, listing photos and product descriptions diverge more than on established retailers. Reviews with photos are the useful signal.',
      },
      {
        title: 'Returns are the weak point',
        body: 'Sending a low-value item back across a border rarely makes financial sense. Buy accordingly.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UK, Germany and other European countries' },
      { label: 'Model', value: 'Cross-border discount marketplace, app-first' },
      { label: 'Delivery', value: 'Long — weeks rather than days' },
      { label: 'Pricing', value: 'Stacked coupons, group buys, credits' },
    ],
    faq: [
      {
        q: 'How does Hacoo get prices that low?',
        a: 'Cross-border direct-from-factory shipping, minimal overhead, and aggressive customer acquisition. The trade-off is delivery time and returns, not usually legality.',
      },
      {
        q: 'Are the coupons real?',
        a: 'Yes — they are the pricing system rather than a promotion on top of it. The in-app credits and new-user allowance are the ones that matter.',
      },
      {
        q: 'Can I return an item?',
        a: 'In principle, but cross-border return postage on a low-value item usually exceeds the refund. Treat these purchases as final.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'aliexpress',
    name: 'AliExpress',
    domain: 'aliexpress.com',
    siteLabel: 'aliexpress.com',
    badge: 'AE',
    color: '#E62E04',
    category: 'marketplaces',
    markets: 'Worldwide, with country storefronts and local currencies',
    blurb: 'The original cross-border marketplace, and a genuine coupon economy.',
    about: [
      'AliExpress is Alibaba’s consumer-facing cross-border marketplace: millions of listings from mostly Chinese sellers, shipped worldwide, at prices that reflect buying close to the factory. It is retail rather than wholesale, which is what separates it from Alibaba.com.',
      'It runs one of the few coupon systems on the internet that genuinely stacks. Seller coupons, platform coupons, select-coupons collected in the app, cart-level thresholds and the big sale events all apply in a defined order, and collecting them before you add to cart is the mechanic. Delivery has improved substantially in recent years but still varies enormously by shipping method.',
    ],
    offers: [
      {
        id: 'aliexpress-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Stackable seller and platform coupons',
        detail:
          'Collect the seller coupon on the listing and the platform coupon in the coupon centre. They apply together at checkout.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'aliexpress-events',
        kind: 'deal',
        value: 'Sale',
        title: 'Major sale events several times a year',
        detail:
          'The scheduled platform events cut deeper than anything available between them. Worth waiting for on a planned purchase.',
        checked: CHECKED_R2,
      },
      {
        id: 'aliexpress-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive coupons and games',
        detail:
          'A share of the coupon inventory is app-only, including the daily collection mechanics.',
        checked: CHECKED_R2,
      },
      {
        id: 'aliexpress-protection',
        kind: 'deal',
        value: 'Protection',
        title: 'Buyer protection until you confirm receipt',
        detail:
          'Payment is held until the delivery window closes or you confirm. Do not confirm early — that is the protection.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Sort by orders and reviews, not by price',
        body: 'A listing with thousands of completed orders is a different risk from an identical one with none, at almost the same price.',
      },
      {
        title: 'Check the shipping method before you buy',
        body: 'The gap between the cheapest and the fastest option is weeks, and sometimes more than the item costs.',
      },
      {
        title: 'Never confirm receipt before opening the parcel',
        body: 'Confirming releases the payment and effectively closes the dispute window.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Cross-border retail marketplace' },
      { label: 'Protection', value: 'Payment held until receipt is confirmed' },
      { label: 'Delivery', value: 'Days to weeks, depending on the method' },
      { label: 'Coupons', value: 'Genuinely stackable' },
    ],
    faq: [
      {
        q: 'Do AliExpress coupons really stack?',
        a: 'Yes — seller coupons, platform coupons and cart thresholds apply in a defined order. It is one of very few marketplaces where stacking works as advertised.',
      },
      {
        q: 'Is AliExpress safe?',
        a: 'The payment protection works if you use it: pay on-platform, keep communication on-platform, and do not confirm receipt until you have inspected the goods.',
      },
      {
        q: 'Will I pay import duty?',
        a: 'Above your country’s threshold, usually. Some destinations now collect it at checkout; others bill you on arrival.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'joom',
    name: 'Joom',
    domain: 'joom.com',
    siteLabel: 'joom.com',
    badge: 'JM',
    color: '#1F6BC4',
    category: 'marketplaces',
    markets: 'Most of Europe, with local currencies',
    blurb: 'European-facing cross-border marketplace built around app coupons.',
    about: [
      'Joom is a cross-border marketplace founded in Latvia, selling mostly Asian-sourced goods into European markets: accessories, home items, small electronics, clothing. It competes with AliExpress on the same ground with a tighter, more curated catalogue.',
      'The pricing model is app-first and coupon-driven — a new-user allowance, collectable coupons, points and cart thresholds — with free or very cheap shipping on most items as the headline. What you trade is delivery time, which is measured in weeks rather than days on the standard option.',
    ],
    offers: [
      {
        id: 'joom-newuser',
        kind: 'deal',
        value: 'New customer',
        title: 'New-user allowance on the first order',
        detail: 'The largest single discount on the platform, once per account.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'joom-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Collectable coupons in the app',
        detail:
          'Coupons attach to the account and must be selected in the basket. The checkout does not choose the best one.',
        checked: CHECKED_R2,
      },
      {
        id: 'joom-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free or low-cost shipping on most of the catalogue',
        detail:
          'Built into the pricing rather than added at checkout, which is the platform’s main advantage over its rivals.',
        checked: CHECKED_R2,
      },
      {
        id: 'joom-protection',
        kind: 'deal',
        value: 'Protection',
        title: 'Buyer protection with a delivery guarantee',
        detail: 'Refunds where an order does not arrive inside the stated window.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Collect coupons before you fill the basket',
        body: 'They are applied at checkout from what is already on your account. Finding one afterwards does nothing.',
      },
      {
        title: 'Expect weeks, not days',
        body: 'Standard shipping is slow. If you need something for a date, this is the wrong channel.',
      },
      {
        title: 'Read the review photos',
        body: 'At these prices product photography is aspirational. Customer images are the honest version.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Most of Europe' },
      { label: 'Founded', value: 'Latvia' },
      { label: 'Shipping', value: 'Free or low-cost on most items' },
      { label: 'Delivery', value: 'Weeks on standard' },
    ],
    faq: [
      {
        q: 'Is Joom the same as AliExpress?',
        a: 'Same idea — cross-border marketplace, mostly Asian supply — with a smaller, more curated catalogue and a stronger focus on European delivery.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Typically two to four weeks on the standard option. The delivery guarantee is what covers you if it does not arrive at all.',
      },
      {
        q: 'Do coupons stack?',
        a: 'A new-user allowance and a collected coupon generally combine with a cart threshold. Two percentage coupons do not.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'banggood',
    name: 'Banggood',
    domain: 'banggood.com',
    siteLabel: 'banggood.com',
    badge: 'BG',
    color: '#E64A19',
    category: 'marketplaces',
    markets: 'Worldwide, with EU and US warehouses on part of the catalogue',
    blurb: 'Gadget marketplace where the EU warehouse is worth more than the coupon.',
    about: [
      'Banggood is a Chinese cross-border retailer with an unusually strong catalogue in hobbyist categories: drones, RC, 3D printing, tools, electronics components and LED lighting. It is where people go for things a general marketplace does not stock.',
      'The mechanic worth knowing is not the coupon system, though there is one. It is the warehouse selector: a large share of the catalogue is stocked in EU, UK and US warehouses, which means days rather than weeks, no customs, and a simpler return. Filtering to a local warehouse before you compare prices is the single most useful habit on this site.',
    ],
    offers: [
      {
        id: 'banggood-warehouse',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Ship from a local EU, UK or US warehouse',
        detail:
          'Days instead of weeks, duty already handled, and returns that are actually practical. Worth more than any coupon.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'banggood-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Product-level coupon codes',
        detail:
          'Banggood issues per-product codes continuously, listed on the product page itself. They genuinely apply.',
        checked: CHECKED_R2,
      },
      {
        id: 'banggood-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Flash deals and scheduled sale events',
        detail: 'Time-boxed pricing on a rotating selection plus the big seasonal campaigns.',
        checked: CHECKED_R2,
      },
      {
        id: 'banggood-points',
        kind: 'deal',
        value: 'Credits',
        title: 'Points on orders and reviews',
        detail: 'Convert to money off later orders; reviews with photos earn more.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Filter by warehouse first, price second',
        body: 'The same item from the EU warehouse at a slightly higher price is almost always the better purchase.',
      },
      {
        title: 'Check the plug and voltage',
        body: 'On tools and chargers, confirm the version matches your country. It is the most common return here.',
      },
      {
        title: 'Hobbyist categories are the reason to be here',
        body: 'On general goods a normal marketplace competes. On drone parts and 3D printer spares it does not.',
      },
    ],
    facts: [
      { label: 'Strength', value: 'Drones, RC, 3D printing, tools, components' },
      { label: 'Warehouses', value: 'EU, UK, US on part of the catalogue' },
      { label: 'Coupons', value: 'Per-product, listed on the page' },
      { label: 'Delivery', value: 'Days from a local warehouse, weeks from China' },
    ],
    faq: [
      {
        q: 'Should I buy from the China warehouse or the EU one?',
        a: 'The local warehouse, almost always. It is faster, duty is handled, and returns are practical — usually for a small price premium.',
      },
      {
        q: 'Do Banggood coupons work?',
        a: 'Yes. Per-product codes are published on the listing itself and apply at checkout — one of the more honest coupon systems in this segment.',
      },
      {
        q: 'What about warranty on electronics?',
        a: 'Handled by Banggood rather than a local distributor, which means shipping items back. Factor that in on anything expensive.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'wish',
    name: 'Wish',
    domain: 'wish.com',
    siteLabel: 'wish.com',
    badge: 'WI',
    color: '#2FB7EC',
    category: 'marketplaces',
    markets: 'Worldwide, with country storefronts',
    blurb: 'Very cheap goods with very variable quality — buy on reviews or not at all.',
    about: [
      'Wish is a cross-border marketplace built around browsing rather than searching: an algorithmic feed of very cheap goods from mostly Asian sellers. It has been through a substantial restructuring in recent years and has tightened its merchant standards, but the segment it plays in is unchanged.',
      'The honest framing is that this is a lottery you can improve your odds at. Prices are genuinely low; the variance in what arrives is genuinely high. Reviews with customer photos on the specific listing are the only reliable signal, and buying anything where fit, safety or accuracy matters is a bad use of the platform.',
    ],
    offers: [
      {
        id: 'wish-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'New-customer discount on the first order',
        detail: 'Applied at checkout for new accounts, and normally the largest single reduction.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'wish-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'In-app coupons and daily deals',
        detail: 'The promotional inventory is app-first and refreshed daily.',
        checked: CHECKED_R2,
      },
      {
        id: 'wish-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free shipping over the cart threshold',
        detail: 'Below it, postage is a large share of a cheap basket.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Only buy listings with photo reviews',
        body: 'It is the single filter that changes your odds. No customer photos, no purchase.',
      },
      {
        title: 'Do not buy anything safety-critical',
        body: 'Chargers, car parts, child equipment. The price is not worth the variance on those.',
      },
      {
        title: 'Assume returns are impractical',
        body: 'Cross-border return postage on a low-value item exceeds the refund. Buy as if it is final.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Cross-border discovery marketplace' },
      { label: 'Delivery', value: 'Weeks on standard shipping' },
      { label: 'Quality', value: 'Highly variable — reviews are the only signal' },
      { label: 'Returns', value: 'Impractical internationally' },
    ],
    faq: [
      {
        q: 'Is Wish legitimate?',
        a: 'It is a real marketplace that processes payments and refunds normally. The complaints are about what arrives rather than about whether anything arrives.',
      },
      {
        q: 'How do I avoid a bad purchase?',
        a: 'Buy only listings with a substantial number of photo reviews, avoid anything where safety or exact fit matters, and treat the price as the whole of what you are risking.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Typically weeks. Faster options exist on some items and often change the value calculation entirely.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'geekbuying',
    name: 'Geekbuying',
    domain: 'geekbuying.com',
    siteLabel: 'geekbuying.com',
    badge: 'GB',
    color: '#1F7A6B',
    category: 'marketplaces',
    markets: 'Worldwide, with EU warehouses on much of the catalogue',
    blurb: 'Chinese tech and e-mobility, shipped from EU stock with real coupons.',
    about: [
      'Geekbuying specialises in Chinese consumer tech that is hard to buy locally: electric scooters and e-bikes, robot vacuums, 3D printers, projectors, mini PCs and power stations. The catalogue is narrower and more considered than a general marketplace.',
      'Its useful feature is EU warehouse stock on most of the popular items, which turns a four-week import with a customs bill into a three-day domestic delivery. It also runs a genuine coupon system, published per product, and the combination of an EU-stocked item plus a live code is where the value is.',
    ],
    offers: [
      {
        id: 'geekbuying-eu',
        kind: 'deal',
        value: 'Free delivery',
        title: 'EU warehouse stock with fast local delivery',
        detail:
          'Days rather than weeks, duty handled, and a practical return route. On heavy items like scooters this is the whole proposition.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'geekbuying-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Per-product coupon codes',
        detail: 'Published against individual products and refreshed constantly. They apply.',
        checked: CHECKED_R2,
      },
      {
        id: 'geekbuying-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Flash sales and seasonal campaigns',
        detail: 'Time-boxed pricing on a rotating selection, deepest during the big retail events.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the warehouse before the price',
        body: 'A slightly dearer EU-stocked unit beats a cheaper one shipping from China once customs and delivery time are counted.',
      },
      {
        title: 'On e-mobility, check local road rules first',
        body: 'Speed and power limits differ by country and an imported scooter may not be road-legal where you live.',
      },
      {
        title: 'Confirm the warranty route',
        body: 'On large items, ask who handles a fault and where it ships to before ordering.',
      },
    ],
    facts: [
      { label: 'Speciality', value: 'E-mobility, robot vacuums, 3D printers, mini PCs' },
      { label: 'Warehouses', value: 'EU stock on much of the range' },
      { label: 'Coupons', value: 'Per-product, published on the listing' },
      { label: 'Check first', value: 'Local road-legality on e-mobility' },
    ],
    faq: [
      {
        q: 'Is Geekbuying reliable for expensive items?',
        a: 'It is an established cross-border retailer, and buying EU-warehouse stock makes a large purchase substantially lower risk on delivery, duty and returns.',
      },
      {
        q: 'Will I pay customs?',
        a: 'Not on EU warehouse stock. On items shipping from China, above your threshold, yes.',
      },
      {
        q: 'Are electric scooters legal to use?',
        a: 'That depends entirely on your country’s rules on power, speed and where they may be ridden. Check before buying, not after.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'sunsky-online',
    name: 'Sunsky-online',
    domain: 'sunsky-online.com',
    siteLabel: 'sunsky-online.com',
    badge: 'SS',
    color: '#1F5C8A',
    category: 'marketplaces',
    markets: 'Worldwide — a wholesale platform, not a retail shop',
    blurb: 'Shenzhen wholesaler of phone accessories — priced by quantity, not by unit.',
    about: [
      'Sunsky is a Shenzhen-based wholesaler of consumer electronics accessories: phone cases and parts, computer peripherals, gaming accessories and small gadgets. Its customers are resellers and repair shops rather than consumers.',
      'That changes how you should read the site. Prices fall in quantity brackets, so a single unit is poor value and the interesting numbers start at ten or fifty. There is no consumer-style returns experience and no local warranty; what there is instead is a very deep parts catalogue at trade prices, which is exactly what it is for.',
    ],
    offers: [
      {
        id: 'sunsky-quantity',
        kind: 'deal',
        value: 'Bundle',
        title: 'Quantity price brackets',
        detail:
          'The unit price falls at defined quantities. Buying one is the most expensive way to use this site.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'sunsky-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Platform coupons and seasonal campaigns',
        detail: 'Site-wide codes and periodic trade events on top of the bracket pricing.',
        checked: CHECKED_R2,
      },
      {
        id: 'sunsky-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Consolidated shipping on a mixed order',
        detail:
          'Freight is the real cost on a wholesale order. One consolidated shipment beats several small ones by a wide margin.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Price the landed cost, not the unit price',
        body: 'Freight and duty on a wholesale order routinely exceed the goods. Work out the delivered figure before comparing.',
      },
      {
        title: 'Sample before you buy a bracket',
        body: 'Accessory quality varies between suppliers. A small first order is cheap insurance on a large second one.',
      },
      {
        title: 'Not a consumer shop',
        body: 'If you want one phone case, buy it locally. This is for people buying fifty.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Wholesale, quantity-bracket pricing' },
      { label: 'Catalogue', value: 'Phone accessories, parts, peripherals, gadgets' },
      { label: 'Buyer', value: 'Resellers and repair shops' },
      { label: 'Real cost driver', value: 'Freight and duty' },
    ],
    faq: [
      {
        q: 'Can an individual buy from Sunsky?',
        a: 'Technically yes, but the pricing is built for quantity and there is no consumer returns experience. For a single item you will do better elsewhere.',
      },
      {
        q: 'Is the quality good?',
        a: 'It varies by supplier within the catalogue, which is why sampling before a bulk order is the standard practice.',
      },
      {
        q: 'Will I pay import duty?',
        a: 'On a wholesale-sized order, almost certainly, plus a customs clearance charge. Price it in from the start.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'tata-cliq',
    name: 'Tata CliQ',
    domain: 'tatacliq.com',
    siteLabel: 'tatacliq.com',
    badge: 'TC',
    color: '#B0161E',
    category: 'marketplaces',
    markets: 'India only',
    blurb: 'Tata’s marketplace, where authenticity and bank offers are the pitch.',
    about: [
      'Tata CliQ is the Tata group’s online marketplace, covering fashion, electronics, watches and beauty, with a luxury storefront alongside it. Its differentiator against the larger Indian marketplaces is authenticity: brands sold through authorised channels with the group’s name behind them.',
      'Commercially it behaves like the rest of Indian e-commerce — bank-card instant discounts, no-cost EMI, festive campaigns and coupon codes — with the addition of a group loyalty programme that earns across Tata brands. On electronics and watches the bank offer is usually the largest single lever.',
    ],
    offers: [
      {
        id: 'tatacliq-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail: 'Rotating issuer offers capped per transaction, applied after any coupon.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'tatacliq-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Category and site-wide coupon codes',
        detail: 'Issued continuously and listed on the basket page rather than hidden.',
        checked: CHECKED_R2,
      },
      {
        id: 'tatacliq-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Group loyalty programme across Tata brands',
        detail: 'Points earned here are spendable across the group, which is unusual reach.',
        checked: CHECKED_R2,
      },
      {
        id: 'tatacliq-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive and end-of-season events',
        detail: 'The deepest catalogue-wide reductions of the year.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Apply the coupon, then check the payment page',
        body: 'They apply at different stages and both usually count. People stop after the first one.',
      },
      {
        title: 'Authenticity is the reason to pay a little more',
        body: 'On watches, beauty and electronics, an authorised channel is worth a small premium over a cheaper third-party listing.',
      },
      {
        title: 'Luxury is a separate storefront',
        body: 'Tata CliQ Luxury runs its own pricing and is usually excluded from the main site’s mechanics.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Owner', value: 'Tata group' },
      { label: 'Pitch', value: 'Authorised-channel authenticity' },
      { label: 'Loyalty', value: 'Points across Tata brands' },
    ],
    faq: [
      {
        q: 'Is Tata CliQ cheaper than the big marketplaces?',
        a: 'Not systematically. It competes on authenticity and on the group loyalty programme rather than on being the lowest price.',
      },
      {
        q: 'Do coupons stack with bank offers?',
        a: 'Usually yes — coupon in the basket, bank discount at payment. Check both before you pay.',
      },
      {
        q: 'Does it ship outside India?',
        a: 'No. It is a domestic marketplace.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'sams-club',
    name: "Sam's Club",
    domain: 'samsclub.com',
    siteLabel: 'samsclub.com',
    badge: 'SC',
    color: '#0067A0',
    category: 'marketplaces',
    markets: 'United States',
    blurb: 'Membership warehouse club — the fee is the product, so do the arithmetic.',
    about: [
      'Sam’s Club is Walmart’s membership warehouse chain: bulk groceries, household goods, electronics, fuel and pharmacy at club prices, available only to members paying an annual fee.',
      'The entire question is whether the fee pays back. For a household buying in bulk, using the fuel discount and filling prescriptions there, it usually does several times over. For someone shopping occasionally it does not, and the club knows it — which is why the introductory membership offers are as generous as they are.',
    ],
    offers: [
      {
        id: 'samsclub-intro',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted first-year membership for new members',
        detail:
          'The standing acquisition offer, frequently at a steep discount. It renews at the standard rate.',
        terms: 'Auto-renews annually unless you turn it off.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'samsclub-plus',
        kind: 'deal',
        value: 'Member',
        title: 'Upgraded tier with cash rewards and free shipping',
        detail:
          'The higher tier returns a percentage of qualifying spend. Above a certain annual spend it pays for the upgrade itself.',
        checked: CHECKED_R2,
      },
      {
        id: 'samsclub-instant',
        kind: 'deal',
        value: 'Sale',
        title: 'Instant savings events in the club',
        detail:
          'Time-boxed reductions published in the members’ book, on top of the normal club price.',
        checked: CHECKED_R2,
      },
      {
        id: 'samsclub-fuel',
        kind: 'deal',
        value: 'Member',
        title: 'Member fuel pricing',
        detail:
          'For a household that drives, the fuel discount alone can cover the annual fee. Worth working out first.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Work out the fuel saving before anything else',
        body: 'It is the most predictable part of the maths and for many members it covers the fee on its own.',
      },
      {
        title: 'Bulk is only cheaper if you use it',
        body: 'Per-unit pricing is genuinely lower. Food that spoils before you finish it is not a saving.',
      },
      {
        title: 'Diarise the renewal',
        body: 'The introductory membership rate is one year. The second is at the standard price.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Model', value: 'Paid annual membership warehouse club' },
      { label: 'Owner', value: 'Walmart' },
      { label: 'Break-even drivers', value: 'Fuel, bulk groceries, pharmacy' },
    ],
    faq: [
      {
        q: 'Is a Sam’s Club membership worth it?',
        a: 'For a household buying in bulk and using the fuel discount, comfortably. For occasional shopping, no — and the introductory offer is designed to get you to find out.',
      },
      {
        q: 'Can I shop without a membership?',
        a: 'Online access without membership exists in a limited form with a surcharge in some cases. In the club, membership is the entry condition.',
      },
      {
        q: 'Is the upgraded tier worth it?',
        a: 'Above a certain annual spend the cash rewards cover the difference. Below it, the base membership is the right choice.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'allegro-czechia',
    name: 'Allegro',
    domain: 'allegro.cz',
    siteLabel: 'allegro.cz',
    badge: 'AL',
    color: '#FF5A00',
    category: 'marketplaces',
    markets: 'Czechia — the Czech storefront of the Polish marketplace',
    blurb: 'Central Europe’s biggest marketplace, where the delivery subscription is the deal.',
    about: [
      'Allegro is the dominant online marketplace in Poland and has expanded into Czechia and other Central European markets. It is a marketplace of many sellers rather than a single retailer, covering essentially every category.',
      'Its defining mechanic is the delivery subscription: an annual fee that makes qualifying deliveries free, including to the parcel-locker networks that most of the region uses. On a household ordering regularly it removes the largest recurring cost of marketplace shopping, and it matters far more than any coupon.',
    ],
    offers: [
      {
        id: 'allegro-cz-smart',
        kind: 'deal',
        value: 'Member',
        title: 'Delivery subscription with free qualifying shipping',
        detail:
          'An annual fee that removes delivery charges on qualifying orders. On regular ordering it pays back quickly.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'allegro-cz-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Platform coupons and seller promotions',
        detail: 'Site-wide codes issued regularly, on top of whatever the seller is running.',
        checked: CHECKED_R2,
      },
      {
        id: 'allegro-cz-events',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled marketplace sale events',
        detail: 'Large campaigns several times a year across the whole catalogue.',
        checked: CHECKED_R2,
      },
      {
        id: 'allegro-cz-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare sellers on the same listing',
        detail:
          'The same product is usually offered by several sellers at different prices and delivery terms. Check more than the first one.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Do the subscription arithmetic on delivery, not on discounts',
        body: 'It is a shipping product. Count how many parcels you order a year and compare against the fee.',
      },
      {
        title: 'Parcel lockers are cheaper and usually faster',
        body: 'The regional locker networks are the default here for a reason. Choose them over courier where you can.',
      },
      {
        title: 'Check the seller, not just the price',
        body: 'It is a marketplace. Returns and warranty run through the seller, and their ratings are published.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Czechia; the group is Polish' },
      { label: 'Model', value: 'Marketplace of many sellers' },
      { label: 'Key mechanic', value: 'Annual delivery subscription' },
      { label: 'Returns', value: 'Via the seller, under EU distance-selling rules' },
    ],
    faq: [
      {
        q: 'Is the Allegro delivery subscription worth it?',
        a: 'If you order more than a handful of parcels a year, yes — it removes the recurring cost that makes marketplace shopping expensive.',
      },
      {
        q: 'Who handles a return?',
        a: 'The seller, under EU distance-selling rules. Check their rating and policy before buying anything expensive.',
      },
      {
        q: 'Is the Czech site the same as the Polish one?',
        a: 'Same platform, separate storefront, separate sellers and pricing.',
      },
    ],
    updated: CHECKED_R2,
  },
]
