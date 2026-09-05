/**
 * Brand page data for Uber Eats (route: /brands/ubereats).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://apps.apple.com/us/app/uber-eats-food-groceries/id1058959277 —
 *     App Store rating and review count, opened directly
 *   - https://help.uber.com/en/ubereats/restaurants/article/what-fees-may-apply-to-my-order
 *     — confirms the three customer-facing fee types (delivery fee, service
 *     fee as a percentage of subtotal before discounts, small-order fee below
 *     a merchant-set threshold) and how each is triggered
 *   - https://help.uber.com/ubereats/restaurants/article/changes-to-membership-benefits
 *     and https://help.uber.com/en/ubereats/restaurants/article/changes-to-uber-one
 *     — confirms Uber One as the membership tier and that its service-fee and
 *     delivery-fee discounts are being scaled back for merchants and members
 *   - Menu markup: multiple independent studies (cited via aggregated 2026
 *     analysis) consistently find in-app menu prices run meaningfully above
 *     in-restaurant prices on Uber Eats specifically, not just delivery apps
 *     generally; used to describe the direction and rough scale of the
 *     markup, not to print one disputed percentage as fact
 *   - Founding (August 2014) and current multi-country, multi-city footprint
 *     corroborated across multiple 2026 statistics aggregators
 *
 * ⚠️ Fees, surge pricing behaviour and Uber One pricing/benefits are working
 * values and MUST be re-verified on ubereats.com/uber-one and in-app before
 * any campaign — Uber has been actively changing membership benefits and
 * merchant fee tiers through 2026. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ubereats: BrandPage = {
  slug: 'ubereats',
  providerId: 'ubereats',
  metaTitle: 'Uber Eats review 2026 — fees, markups, Uber One',
  metaDescription:
    'An independent Uber Eats review: the service fee, delivery fee and small-order fee stack, why menu prices run above in-restaurant prices, and what Uber One actually waives.',
  intro:
    'Uber Eats is the biggest food-delivery marketplace by footprint, covering well over a million restaurants across thousands of cities. The catchment is not in question. What is worth understanding before you order is that the price on the app is not the restaurant price: a service fee, a delivery fee, a possible small-order fee and a menu mark-up stack on top, and Uber One only offsets some of that.',
  about: [
    'Launched in August 2014 as a spin-off of Uber’s core ride-hailing app, Uber Eats has grown into a marketplace covering well over a million restaurants and, in many markets, grocery and retail delivery alongside food. Its scale is genuinely the largest in the category by both city count and restaurant count, which is the main reason it wins the "is it available here" question more often than smaller rivals, even before price or speed enters the comparison.',
    'The fee structure on a customer order has three named parts: a delivery fee that varies by distance and demand, a service fee charged as a percentage of the order subtotal before any discount is applied, and a small-order fee that kicks in below a merchant-set minimum. None of these are optional line items you can turn off individually — they are calculated per order and shown before checkout, but they add up in a way a single "delivery fee" figure does not communicate.',
    'On top of the fee stack, menu prices shown in the app are frequently higher than the same items cost ordering in person at the restaurant, because many merchants build Uber Eats’ commission into their in-app pricing rather than absorb it. Uber One, the paid membership, discounts or waives some delivery and service fees on qualifying orders, but Uber has been reducing those benefits for both merchants and members through 2026, so the subscription is worth less than it once was.',
  ],
  facts: [
    { label: 'Launched', value: '2014' },
    { label: 'Footprint', value: '1M+ restaurants' },
    { label: 'Customer fees', value: 'Delivery + service fees' },
    { label: 'Membership', value: 'Uber One membership' },
  ],
  plans: {
    title: 'How the cost actually stacks up',
    note: 'There is no single Uber Eats price — every order combines a delivery fee, a service fee, a possible small-order fee, and menu prices that often already run above in-restaurant pricing. Uber One reduces some of this but does not remove it, and its benefits have been getting smaller through 2026.',
    items: [
      {
        name: 'Pay-per-order, no membership',
        price: 'Delivery fee + service fee + menu mark-up',
        detail:
          'The default. Delivery fee moves with distance and demand, the service fee is a percentage of the subtotal calculated before discounts, and a small-order fee applies under the merchant’s minimum.',
        pick: true,
      },
      {
        name: 'Small orders',
        price: 'Adds a small-order fee',
        detail:
          'Below a threshold the merchant sets, an extra fee applies on top of delivery and service fees. Adding items to clear the threshold removes it.',
      },
      {
        name: 'Uber One membership',
        price: 'Recurring monthly or annual subscription',
        renews: 'Auto-renews until cancelled',
        detail:
          'Discounts or waives delivery fees and reduces the service fee on qualifying orders from participating merchants. Benefits have been scaled back for members and merchants through 2026 — check current terms before assuming a $0 delivery fee applies everywhere.',
      },
      {
        name: 'Busy-period pricing',
        price: 'Delivery fee rises with demand',
        detail:
          'During high-demand windows the delivery fee increases to balance courier supply and order volume, on top of the baseline distance-based fee.',
      },
    ],
  },
  pros: [
    {
      title: 'The widest restaurant and city footprint in the category',
      body: 'Over a million restaurants across thousands of cities means Uber Eats answers "is this place on the app" more often than most competitors, which is the first filter for most orders.',
    },
    {
      title: 'Fees are itemised before checkout',
      body: 'Delivery fee, service fee and any small-order fee are all shown before you confirm, so the total is not a surprise at the door even if it is higher than expected.',
    },
    {
      title: 'One account across ride-hailing and delivery',
      body: 'Shared login and payment with Uber’s ride-hailing app removes friction for existing Uber users, and Uber One membership spans both services where it is offered in a given market.',
    },
    {
      title: 'Very high App Store rating at enormous volume',
      body: 'Millions of ratings back a strong average score, a volume large enough that it reflects the everyday delivery experience rather than an early-adopter sample skewing the number upward.',
    },
  ],
  cons: [
    {
      title: 'The fee stack understates the real cost',
      body: 'Delivery fee, service fee and a possible small-order fee are all separate charges on top of the menu price, and the service fee is calculated on the subtotal before any promo discount reduces what you actually save.',
    },
    {
      title: 'In-app menu prices often run above in-restaurant prices',
      body: 'Many merchants price items higher on Uber Eats than at the counter to offset the commission Uber charges them, so the sticker price you compare against a restaurant menu is frequently not the real comparison.',
    },
    {
      title: 'Uber One benefits have been getting thinner',
      body: 'Fee discounts and waivers for members have been reduced through 2026 for both merchants and customers, so a membership bought expecting last year’s benefits may deliver noticeably less now.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: 'based on roughly 11 million ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'unmatched availability, offset by a fee stack and menu mark-up that add up fast',
    },
  ],
  bestFor: [
    'Anyone who needs the widest possible restaurant availability in their city',
    'Orders large enough to clear the small-order-fee threshold comfortably',
    'Existing Uber ride-hailing users who want one account and one membership',
    'Uber One members who regularly hit the qualifying order minimums for fee waivers',
  ],
  notFor: [
    'Small, frequent orders, where the fee stack is a large share of the total',
    'Anyone assuming the in-app menu price matches the in-restaurant price',
    'Price-sensitive users unwilling to compare the total against the restaurant’s own delivery or pickup',
  ],
  faq: [
    {
      q: 'What fees actually appear on an Uber Eats order?',
      a: 'A delivery fee that varies by distance and demand, a service fee charged as a percentage of the subtotal before discounts are applied, and a small-order fee if the order falls under the merchant’s set minimum. All three are itemised and shown before you confirm checkout, so the total should not be a surprise.',
    },
    {
      q: 'Are menu prices on Uber Eats the same as in the restaurant?',
      a: 'Often not. Many merchants raise in-app prices above what they charge in person specifically to offset the commission Uber takes on each order, so comparing the app price directly to the printed restaurant menu can be misleading. Worth checking on anything you order regularly.',
    },
    {
      q: 'Does Uber One remove all the fees?',
      a: 'No. It discounts or waives delivery fees and reduces the service fee on qualifying orders from participating merchants, not on every order, and those benefits have been reduced through 2026. Check the current terms before relying on a specific discount.',
    },
    {
      q: 'Why did my delivery fee jump compared to last time?',
      a: 'Delivery fees rise during high-demand periods to balance courier availability against order volume in your area. The same route can cost noticeably more at a busy dinner hour than at a quiet mid-afternoon, and it can change again within the same evening as demand shifts.',
    },
    {
      q: 'How do I avoid the small-order fee?',
      a: 'Add items until the order subtotal clears the merchant’s set minimum threshold. That threshold is set per restaurant rather than platform-wide, so it varies from one order to the next, and the app shows how much more you need to add to clear it.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ubereats.com',
}
