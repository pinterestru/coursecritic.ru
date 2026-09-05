/**
 * The store taxonomy.
 *
 * Categories exist for browsing and for internal linking, not for search: the
 * traffic this site is built for lands directly on a store page from a
 * "<brand> promo code" query. A category page's job is to catch the visitor who
 * arrived for one brand and is willing to look at a neighbour, so the copy on
 * each one is about *how discounting works in that market* — where the real
 * money is, which "discounts" are theatre — rather than a list of adjectives.
 *
 * Adding a category means adding an entry here plus a file under ./stores/ and
 * a line in ./stores/index.ts. Nothing else knows the list.
 */
export type CategoryId =
  | 'fashion'
  | 'beauty'
  | 'electronics'
  | 'marketplaces'
  | 'home'
  | 'food'
  | 'travel'
  | 'experiences'
  | 'auto'
  | 'security'
  | 'software'
  | 'learning'
  | 'media'
  | 'gaming'
  | 'services'

export interface Category {
  id: CategoryId
  /** Section heading, e.g. 'Fashion & footwear'. */
  name: string
  /** Short label for chips and breadcrumbs. */
  label: string
  /** One line under the heading, on cards and the category hero. */
  blurb: string
  /** Body copy on the category page: how to actually save here. */
  intro: string
  /** Accent hex used on the category card and hero. */
  accent: string
  /** What we tell people to check before they pay, in this market. */
  watchFor: string[]
}

export const categories: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion & footwear',
    label: 'Fashion',
    blurb: 'Clothing, shoes, eyewear and jewellery — where the sale section beats the code.',
    intro:
      'Fashion is the category where a discount code is least likely to be the best deal on the page. Most of these storefronts run a permanent outlet or end-of-season section at a deeper cut than any welcome code, and most of them exclude that section from codes anyway. Take the sale price first, then try a code on full-price items only.',
    accent: '#B0246B',
    watchFor: [
      'Codes almost always exclude sale, outlet and new-season lines',
      'Free delivery thresholds move by country — check yours, not the US one',
      'Return postage is the real cost of ordering three sizes',
      'On resale and marketplace models, authenticity policy matters more than price',
    ],
  },
  {
    id: 'beauty',
    name: 'Beauty & wellness',
    label: 'Beauty',
    blurb: 'Cosmetics, fragrance and supplements, where the loyalty scheme usually wins.',
    intro:
      'Beauty retailers discount by loyalty tier and by basket size far more than by code. A points programme that returns 5–10% on everything you buy, forever, beats a one-off 15% welcome code within a couple of orders — so join first and stack second. Watch shipping restrictions on liquids, aerosols and supplements, which is where cross-border beauty orders actually fail.',
    accent: '#C2547A',
    watchFor: [
      'Loyalty points usually beat the welcome code over two orders',
      'Aerosols, liquids and supplements have country-level shipping bans',
      'Check the expiry date on discounted stock before you buy in bulk',
      'Subscription boxes are easy to start and deliberately slow to stop',
    ],
  },
  {
    id: 'electronics',
    name: 'Consumer tech',
    label: 'Tech',
    blurb: 'Phones, laptops and appliances — bank offers and trade-in beat coupon codes.',
    intro:
      'Nobody sells a flagship phone at 20% off with a code. Real discounts in consumer tech come from three places: the manufacturer’s own student or education store, a card or bank promotion at checkout, and trade-in. Coupon codes exist mostly on accessories and on last-generation stock, and that is where you should expect to find them.',
    accent: '#2C6E8F',
    watchFor: [
      'Bank and card offers at checkout usually beat any public code',
      'Student and education stores are a standing discount, not a promotion',
      'Last-generation models drop hardest the week the new one is announced',
      'Who honours the warranty — the retailer or the manufacturer',
    ],
  },
  {
    id: 'marketplaces',
    name: 'Marketplaces & retail',
    label: 'Marketplace',
    blurb: 'Big storefronts and wholesale platforms with coupon systems of their own.',
    intro:
      'Marketplaces run their discounting internally: seller coupons, platform coupons, first-order allowances and cart-level thresholds that stack in an order the checkout decides, not you. A site-wide code is rare; collecting the coupons the platform is already offering you, on the product page, before you add to cart, is where the money is.',
    accent: '#1F6FEB',
    watchFor: [
      'Seller coupons and platform coupons stack in a fixed order — collect both first',
      'Shipping is quoted per seller, so one basket can carry several charges',
      'Third-party listings return to the seller, not the platform',
      'Import duty on cross-border orders lands after the discount, not before',
    ],
  },
  {
    id: 'home',
    name: 'Home, family & hobby',
    label: 'Home',
    blurb: 'Gifting, crafts, kids and sports kit — dated delivery is the thing to check.',
    intro:
      'This is the category where the discount matters less than the delivery date. Gifting, flowers, cakes and personalised items are sold against an occasion, and a code that saves 15% is worthless if the cut-off has passed or the item is substituted. Read the dated-delivery guarantee before the price.',
    accent: '#A45C2B',
    watchFor: [
      'Dated-delivery cut-offs, and what compensation applies when they slip',
      'Substitution policy on flowers, cakes and made-to-order items',
      'Personalised goods are usually exempt from the normal returns right',
      'Consumables — blades, mats, materials — are the real cost of a craft machine',
    ],
  },
  {
    id: 'food',
    name: 'Food & grocery',
    label: 'Food',
    blurb: 'Groceries, delivery and catering, where the fee schedule is the real price.',
    intro:
      'Food is bought weekly, so the mechanics that compound beat the one-off code every time: a loyalty card that discounts the shelf price, a delivery subscription that removes a per-order fee, a store-brand equivalent that is thirty per cent cheaper before any promotion. Delivery platforms in particular add service, small-basket and priority fees under the subtotal, and a percentage code never touches them.',
    accent: '#B0521A',
    watchFor: [
      'Delivery, service and small-basket fees are added after any code',
      'A loyalty card usually beats a coupon within two shops',
      'Substitution policy on a grocery delivery — what arrives if your item is out',
      'Subscription delivery only pays back above a few orders a month',
    ],
  },
  {
    id: 'travel',
    name: 'Flights, hotels & transport',
    label: 'Travel',
    blurb: 'Airlines, OTAs, rail and bus, eSIMs — where fees eat the discount.',
    intro:
      'A travel code is applied to the base fare and almost never to the fees, so a 10% code on a booking that is 30% fees is a 7% code. Price the total twice — once through the agent, once on the airline or hotel’s own site — before you decide the discount is real. When something goes wrong, who you booked with decides how bad the week gets.',
    accent: '#1D7A5F',
    watchFor: [
      'Codes apply to the base fare, not to taxes, baggage or service fees',
      'Book direct when the total matches: changes and refunds are far easier',
      'App-only fares are a genuine, repeatable discount at most OTAs',
      '"Free cancellation" often means credit with the agent, not money back',
    ],
  },
  {
    id: 'experiences',
    name: 'Tours, tickets & events',
    label: 'Experiences',
    blurb: 'Activities, attractions and shows — bundles beat codes almost every time.',
    intro:
      'Activity platforms discount by bundle and by timing: city passes, multi-attraction combos, weekday and off-peak slots. A first-booking code is usually capped at a low ceiling, so it helps on a cheap ticket and disappears on an expensive one. Check the operator’s own price too — on single attractions it is sometimes lower than any platform.',
    accent: '#8A5BD6',
    watchFor: [
      'First-booking codes are capped — the cap, not the percentage, is the number',
      'Combo tickets and city passes usually beat any code on the same day',
      'Free cancellation windows are per-activity, not per-platform',
      'Check what the ticket actually includes: entry, transfer, guide, or all three',
    ],
  },
  {
    id: 'auto',
    name: 'Cars & mobility',
    label: 'Cars',
    blurb: 'Parts and car hire, where the extras at the desk cost more than the discount.',
    intro:
      'Car hire and car parts are both quoted low and settled high. In hire, the counter upsell — insurance, fuel policy, young-driver and one-way fees — routinely doubles a headline rate, so a discount code on the base rate is a small part of the bill. In parts, the discount is real but shipping and returns on heavy items are not free.',
    accent: '#5A6B7A',
    watchFor: [
      'Excess insurance bought at the counter is the single biggest markup in car hire',
      'Fuel policy: full-to-full is the only one that cannot be used against you',
      'On parts, check the OE number, not the model name',
      'Return shipping on a wrongly ordered heavy part is on you',
    ],
  },
  {
    id: 'security',
    name: 'Security & privacy',
    label: 'Security',
    blurb: 'VPNs, antivirus and password managers — priced cheap in year one, not in year two.',
    intro:
      'This is the category with the steepest first-year-to-renewal jump in consumer software, and it is the only thing about the pricing worth remembering. A suite advertised at a low introductory figure can renew at two or three times that, automatically, on a card you saved eleven months ago. The discipline that saves money here is not finding a better code — it is turning off auto-renew the day you subscribe and deciding again when the term ends.',
    accent: '#0F6E64',
    watchFor: [
      'The renewal rate, not the first-term promo, is what you pay repeatedly',
      'Turn off auto-renew at purchase — you keep the term you paid for',
      'Count what you already have before buying a bundle of five tools',
      'Money-back guarantees are real and are the safest way to test',
    ],
  },
  {
    id: 'software',
    name: 'Software & subscriptions',
    label: 'Software',
    blurb: 'VPNs, security, hosting and creative tools — the renewal is the real price.',
    intro:
      'This category is priced as a two-part product: a heavily discounted first term and a much higher renewal. Every "70% off" you see is the first number. The discipline that saves you money is not finding a better code — it is putting the renewal date in your calendar and deciding again, because the second-term price is where these businesses make their margin.',
    accent: '#0F6E64',
    watchFor: [
      'The renewal rate, not the first-term promo, is what you will pay repeatedly',
      'Longer terms are cheaper per month and much more expensive to regret',
      'Money-back guarantees are real, and they are the safest way to test',
      'Cancel auto-renew the day you subscribe if you only want one term',
    ],
  },
  {
    id: 'learning',
    name: 'Courses & study',
    label: 'Learning',
    blurb: 'Course platforms and study tools that discount on a fixed cycle.',
    intro:
      'Course marketplaces run scheduled sales that cut prices far below anything a code achieves, and they run them often. If a course is not urgent, waiting for the cycle is the discount. Subscription study tools discount differently — free trials and student verification — and both are worth more than a coupon.',
    accent: '#7A4FBF',
    watchFor: [
      'Scheduled sales beat codes on course marketplaces; the cycle is short',
      'Refund windows are voided by how much you have already watched',
      'Student verification is a standing discount on most study subscriptions',
      'A subscription only beats per-course buying above a few courses a year',
    ],
  },
  {
    id: 'media',
    name: 'Books, music & streaming',
    label: 'Media',
    blurb: 'Subscriptions and entertainment retail, where the trial is the offer.',
    intro:
      'Media subscriptions discount by trial and by annual billing, not by coupon: a free month, a student rate, twelve months for the price of ten. All three are real, and all three renew. The retail end — books, vinyl, film and merchandise — runs on a normal retail calendar instead, where the used copy and the pre-order price are usually the two levers that matter.',
    accent: '#7A4FBF',
    watchFor: [
      'Free trials need a card and convert silently — diarise the date',
      'Annual billing is the discount; the monthly price is the anchor',
      'What you keep after cancelling: usually nothing on streaming, everything on a bought book',
      'Regional catalogues differ — the show you subscribed for may not be in your country',
    ],
  },
  {
    id: 'gaming',
    name: 'Games & digital keys',
    label: 'Gaming',
    blurb: 'First-party stores and key marketplaces, and the gap between them.',
    intro:
      'The price gap between a first-party store and a key marketplace is real, and so is the reason for it: on a marketplace you are buying from a third-party seller, and provenance is your problem if a key is revoked. Seasonal sales on the first-party stores are deep enough that, for most people, waiting is the safer discount.',
    accent: '#4B3FA8',
    watchFor: [
      'Key provenance on marketplaces — a revoked key is rarely refunded in full',
      'Buyer protection is usually a paid add-on, priced per order',
      'Region locks and activation restrictions apply before you pay, not after',
      'Refunds stop being available the moment a download or activation starts',
    ],
  },
  {
    id: 'services',
    name: 'Online services',
    label: 'Services',
    blurb: 'Freelance work, delivery, data and trading tools — priced on fees, not on price.',
    intro:
      'Services discount the headline and keep the fee. Delivery platforms add service, small-order and priority fees under the subtotal; freelance platforms charge the buyer a percentage on top of the seller’s quote; data and trading subscriptions discount the annual plan and renew at full price. Compare totals, not prices.',
    accent: '#3F6B4A',
    watchFor: [
      'Service and delivery fees are added after any code is applied',
      'Annual plans are the discount; the monthly price is the anchor',
      'Free trials that need a card renew silently — diarise the date',
      'What the service keeps doing after you cancel, and what stops immediately',
    ],
  },
]

export function getCategory(id: CategoryId): Category {
  const category = categories.find((c) => c.id === id)
  if (!category) throw new Error(`Unknown category: ${id}`)
  return category
}
