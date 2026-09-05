/**
 * Food & grocery stores.
 *
 * ⚠️ Working values written from the merchants' public pages; re-check before a
 * campaign. Delivery fee structures and membership prices in this category
 * change several times a year. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-26'

export const foodStores: Store[] = [
  {
    slug: 'food-lion',
    name: 'Food Lion',
    domain: 'shop.foodlion.com',
    siteLabel: 'shop.foodlion.com',
    badge: 'FL',
    color: '#1F6B33',
    category: 'food',
    markets: 'United States — south-eastern and mid-Atlantic states only',
    blurb: 'Regional US grocery where the loyalty card, not a code, is the discount.',
    about: [
      'Food Lion is a supermarket chain across the south-eastern and mid-Atlantic United States, with online ordering for delivery and store pickup. It is a regional operator, not a national one — if there is no store near you, the site cannot serve you.',
      'Grocery discounting works on repetition rather than on coupons. The free loyalty card applies member pricing to the shelf price on every shop, digital coupons are clipped to that card rather than typed at checkout, and the weekly circular is where the real reductions are advertised. Over a year those three are worth many times any one-off code.',
    ],
    offers: [
      {
        id: 'foodlion-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty card with member shelf pricing',
        detail:
          'Applies a lower price to hundreds of items on every shop. Free to join and it is the single largest saving available here.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'foodlion-digital',
        kind: 'deal',
        value: 'Coupons',
        title: 'Digital coupons clipped to your card',
        detail:
          'Clip them in the app before you shop; they apply automatically at the till. People miss them because they are looking for a code box.',
        checked: CHECKED,
      },
      {
        id: 'foodlion-pickup',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free store pickup instead of paid delivery',
        detail:
          'Collection avoids the delivery fee entirely. On a weekly shop that fee is the largest avoidable cost on the order.',
        checked: CHECKED,
      },
      {
        id: 'foodlion-weekly',
        kind: 'deal',
        value: 'Sale',
        title: 'Weekly circular and bulk multibuys',
        detail:
          'The advertised weekly specials rotate categories. Planning a shop around them beats coupon hunting comfortably.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Clip before you shop, not after',
        body: 'Digital coupons must be added to the card before the transaction. There is no retroactive fix at the till.',
      },
      {
        title: 'Store brands are the price floor',
        body: 'The own-label equivalents are cheaper than the branded item before any promotion, and they are promoted too.',
      },
      {
        title: 'Check the substitution setting',
        body: 'On a delivery or pickup order, decide in advance what happens when something is out of stock. The default may not be what you want.',
      },
    ],
    facts: [
      { label: 'Market', value: 'US south-east and mid-Atlantic' },
      { label: 'Loyalty', value: 'Free card, member shelf pricing' },
      { label: 'Fulfilment', value: 'Delivery or free store pickup' },
      { label: 'Coupons', value: 'Digital, clipped to the card' },
    ],
    faq: [
      {
        q: 'Does Food Lion take paper coupons?',
        a: 'Manufacturer coupons, generally yes in store. The store’s own promotions are digital and clip to your loyalty card.',
      },
      {
        q: 'Is delivery worth it?',
        a: 'Only if the fee is worth the time to you. Store pickup is free on qualifying orders and usually available the same day.',
      },
      {
        q: 'Does Food Lion deliver everywhere?',
        a: 'No. It is a regional chain — the site serves the states where it has stores and nowhere else.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'shipt',
    name: 'Shipt',
    domain: 'shipt.com',
    siteLabel: 'shipt.com',
    badge: 'SH',
    color: '#1F7A4A',
    category: 'food',
    markets: 'United States',
    blurb: 'Grocery delivery membership — the maths depends entirely on how often you order.',
    about: [
      'Shipt is a US same-day delivery service: a shopper collects your order from a partner retailer and brings it to you, usually within a few hours. It covers grocery chains, big-box retailers and pharmacies depending on your area.',
      'It is sold as a membership rather than per-delivery, and that is the whole decision. The annual membership removes the delivery fee on qualifying orders; below roughly two orders a month it costs more than paying per delivery. What the membership does not remove is the price markup — items on delivery platforms often cost more than the same items on the shelf.',
    ],
    offers: [
      {
        id: 'shipt-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free membership trial for new customers',
        detail:
          'Enough to run two or three real orders and find out whether the service is worth a year of it.',
        terms: 'Converts to a paid membership automatically unless you cancel.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'shipt-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual membership below twelve monthly payments',
        detail: 'The standard discount, worth taking only once you know you will use it.',
        checked: CHECKED,
      },
      {
        id: 'shipt-passes',
        kind: 'deal',
        value: 'No fee',
        title: 'Pay per delivery instead of subscribing',
        detail:
          'For occasional use, single-delivery pricing is cheaper than a membership you use twice.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Count your real orders before subscribing',
        body: 'The break-even is a couple of orders a month. Most people who regret this subscription ordered four times all year.',
      },
      {
        title: 'Membership removes the fee, not the markup',
        body: 'Item prices on delivery platforms are frequently above shelf price. That gap is unaffected by what you pay for membership.',
      },
      {
        title: 'Diarise the trial',
        body: 'It converts automatically. Set the reminder the day you sign up, not the week it ends.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Model', value: 'Membership, same-day delivery from partner retailers' },
      { label: 'Trial', value: 'Yes, auto-converting' },
      { label: 'Watch out for', value: 'Item markup above shelf price' },
    ],
    faq: [
      {
        q: 'Is a Shipt membership worth it?',
        a: 'Above about two orders a month, yes. Below that, paying per delivery is cheaper — do the arithmetic on your own habit rather than the marketing.',
      },
      {
        q: 'Are prices the same as in the store?',
        a: 'Often not. Many retailers price higher on delivery platforms, and the membership does not change that.',
      },
      {
        q: 'Do I still tip?',
        a: 'The shopper is doing the work and tips are customary and expected in the US. Budget for it as part of the cost.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'ezcater',
    name: 'ezCater',
    domain: 'ezcater.com',
    siteLabel: 'ezcater.com',
    badge: 'EZ',
    color: '#B03A2A',
    category: 'food',
    markets: 'United States',
    blurb: 'Business catering marketplace — the rewards programme is the repeat discount.',
    about: [
      'ezCater is a marketplace for business catering in the US: office lunches, meetings, events, ordered from local restaurants and caterers with delivery and setup handled. The buyer is usually an office manager placing the same kind of order repeatedly, which shapes everything about how it discounts.',
      'It runs a rewards programme that accrues on spend and converts into credit or gift cards, plus first-order incentives for new accounts. Because the orders are large and recurring, the rewards balance is worth far more over a year than any single-order code, and the platform knows it.',
    ],
    offers: [
      {
        id: 'ezcater-rewards',
        kind: 'deal',
        value: 'Member',
        title: 'Rewards programme on catering spend',
        detail:
          'Points accrue on every order and convert into credit. On recurring office catering this compounds into real money.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'ezcater-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order incentive for new accounts',
        detail:
          'A credit or discount on the first catering order placed on a new business account.',
        checked: CHECKED,
      },
      {
        id: 'ezcater-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare the caterer’s own price',
        detail:
          'Marketplace pricing includes the platform’s cut. For a caterer you use every week, a direct account is sometimes cheaper — and ezCater still wins on invoicing and delivery reliability.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Order early for the delivery window you need',
        body: 'Catering is priced and staffed against a slot. Late orders lose you the choice, not just the discount.',
      },
      {
        title: 'Consolidate to build rewards',
        body: 'Spread across three platforms you earn nothing anywhere. One account accrues.',
      },
      {
        title: 'Check what setup and utensils include',
        body: 'The line items differ by caterer and they are the reason two similar quotes end up far apart.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Buyer', value: 'Business and office catering' },
      { label: 'Rewards', value: 'Points on spend, redeemable as credit' },
      { label: 'Includes', value: 'Delivery and setup, per caterer' },
    ],
    faq: [
      {
        q: 'Is ezCater cheaper than ordering direct?',
        a: 'Not usually on price alone — the marketplace takes a cut. It wins on breadth, on delivery reliability and on giving a business one invoice instead of twelve.',
      },
      {
        q: 'Do the rewards actually add up?',
        a: 'On regular office catering, yes. On a one-off party order, no — that is what the first-order incentive is for.',
      },
      {
        q: 'Can individuals order?',
        a: 'The platform is built for business catering with business-sized minimums. For a household order it is the wrong tool.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'kfc',
    name: 'KFC',
    domain: 'kfc.com.mx',
    siteLabel: 'kfc.com.mx',
    badge: 'KFC',
    color: '#B0161E',
    category: 'food',
    markets: 'Mexico — this is the Mexican storefront, priced in MXN',
    blurb: 'App-first fast food where the bucket deal beats every code.',
    about: [
      'This is KFC’s Mexican ordering site. Fast-food chains operate a separate site, app and promotional calendar in each country, so nothing here applies to KFC in another market.',
      'The discounting model is the same everywhere in quick-service food: the app is the channel. App-exclusive coupons, a rewards programme that returns points on every order, and combo and bucket pricing that is far below the sum of the individual items. A code found on a coupon site is almost never better than the offer already sitting in the app.',
    ],
    offers: [
      {
        id: 'kfc-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive coupons and rewards',
        detail:
          'The app carries the promotional inventory and accrues points on every order. It is the whole discount programme in one place.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'kfc-combos',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bucket and combo pricing',
        detail:
          'A shared bucket costs far less per piece than the same items ordered separately. On a group order this beats any percentage code.',
        checked: CHECKED,
      },
      {
        id: 'kfc-pickup',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Collection instead of delivery',
        detail:
          'Delivery and service fees are a large share of a fast-food order. Ordering ahead in the app and collecting removes them.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Order in the app, collect in person',
        body: 'The app pricing plus no delivery fee is the cheapest combination available, and the food is ready when you arrive.',
      },
      {
        title: 'Compare the delivery platforms against the chain’s own app',
        body: 'Menu prices on third-party delivery apps are often higher than in the restaurant’s own.',
      },
      {
        title: 'This is the Mexican site',
        body: 'KFC promotions do not cross borders. Use your own country’s app.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Mexico' },
      { label: 'Currency', value: 'MXN' },
      { label: 'Best channel', value: 'The KFC app' },
      { label: 'Core discount', value: 'Buckets and combos' },
    ],
    faq: [
      {
        q: 'Do KFC promo codes work?',
        a: 'The ones issued inside the app do. Public codes from coupon sites are usually expired, market-locked or single-use.',
      },
      {
        q: 'Is the app cheaper than ordering at the counter?',
        a: 'Usually, because the app carries the coupons and the rewards balance. It is also where the exclusive combos live.',
      },
      {
        q: 'Can I use a US KFC coupon here?',
        a: 'No. Each country runs its own storefront, app and offers.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'konesso',
    name: 'Konesso',
    domain: 'konesso.pl',
    siteLabel: 'konesso.pl',
    badge: 'KN',
    color: '#6B4423',
    category: 'food',
    markets: 'Poland only',
    blurb: 'Polish coffee specialist — machines up front, beans as the running cost.',
    about: [
      'Konesso is a Polish retailer of coffee machines, beans and tea, selling to households and offices. The catalogue runs from entry-level automatics up to commercial machines, alongside a deep range of roasted coffee.',
      'The saving that matters here is not on the machine. A coffee machine is bought once; beans are bought every month for years, and the per-kilo price on a larger bag is dramatically lower than on a supermarket pack. Konesso discounts machines during seasonal campaigns and bundles them with starter coffee, which is the moment to buy the hardware.',
    ],
    offers: [
      {
        id: 'konesso-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Machine bundles with starter coffee included',
        detail:
          'Buying the machine with beans and accessories included is priced below the parts, and it is how the seasonal campaigns are structured.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'konesso-bulk',
        kind: 'deal',
        value: 'Bundle',
        title: 'Larger bean bags at a much lower price per kilo',
        detail:
          'The ongoing cost of owning a machine. A 1 kg bag is far cheaper per cup than a supermarket 250 g pack.',
        terms:
          'Roasted coffee has a best-before window — buy what you will drink in a couple of months.',
        checked: CHECKED,
      },
      {
        id: 'konesso-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns on machines',
        detail:
          'Espresso machines discount hard around the Polish retail calendar. Buying between campaigns is paying the anchor price.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Price the cup, not the machine',
        body: 'Over three years the beans cost more than the machine. Choose a machine that takes beans you can buy cheaply.',
      },
      {
        title: 'Descaling and filters are consumables',
        body: 'Budget for them. Skipping descaling is how an expensive automatic machine dies early.',
      },
      {
        title: 'Buy roasted coffee in quantities you will finish',
        body: 'Bulk is cheaper per kilo right up to the point where it goes stale in the cupboard.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Currency', value: 'PLN' },
      { label: 'Catalogue', value: 'Coffee machines, beans, tea, accessories' },
      { label: 'Returns', value: '14 days on distance sales, per Polish law' },
    ],
    faq: [
      {
        q: 'When are coffee machines cheapest?',
        a: 'During the seasonal retail campaigns, and usually as a bundle with coffee and accessories rather than as a bare price cut.',
      },
      {
        q: 'Does Konesso ship outside Poland?',
        a: 'It serves the Polish market. Use a local retailer elsewhere.',
      },
      {
        q: 'Is bulk coffee actually cheaper?',
        a: 'Per kilo, substantially. Only if you drink it inside the freshness window — stale beans are not a saving.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'cadbury-gifts-direct',
    name: 'Cadbury Gifts Direct',
    domain: 'cadburygiftsdirect.co.uk',
    siteLabel: 'cadburygiftsdirect.co.uk',
    badge: 'CGD',
    color: '#4A2379',
    category: 'food',
    markets: 'United Kingdom',
    blurb: 'Personalised chocolate gifting where the delivery date matters more than the price.',
    about: [
      'Cadbury Gifts Direct is the brand’s own UK gifting storefront: personalised bars, hampers, chocolate letters and occasion boxes, delivered direct. It exists for birthdays, thank-yous and Christmas rather than for buying chocolate to eat.',
      'Gifting sites discount by occasion and by bundle, and they run out of delivery slots before they run out of stock. A code that saves ten per cent is worth nothing if the Christmas cut-off has passed, and personalised items cannot be returned — so the order of operations is: check the date, check the spelling, then look for the discount.',
    ],
    offers: [
      {
        id: 'cadbury-occasion',
        kind: 'deal',
        value: 'Sale',
        title: 'Occasion campaigns around Christmas, Easter and Mother’s Day',
        detail:
          'The gifting calendar is where the discounts are. Ordering a week ahead of the rush usually gets both the price and the slot.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'cadbury-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multibuy on gifts and hampers',
        detail:
          'Buying several gifts in one order is priced below the sum and saves a delivery charge per recipient.',
        checked: CHECKED,
      },
      {
        id: 'cadbury-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup offer for new customers',
        detail: 'A first-order discount for new subscribers, with a minimum spend.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Order before the cut-off, not before the sale',
        body: 'Dated delivery is the whole product. A cheaper gift that arrives on the 27th is not a cheaper gift.',
      },
      {
        title: 'Personalised means non-returnable',
        body: 'Check the spelling on the preview screen. That is the entire remedy available to you.',
      },
      {
        title: 'One order, several recipients',
        body: 'Delivery is charged per address. Consolidating where you can is often bigger than the code.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United Kingdom' },
      { label: 'Speciality', value: 'Personalised chocolate and hampers' },
      { label: 'Returns', value: 'Not available on personalised items' },
      { label: 'Peak', value: 'Christmas, Easter, Mother’s Day' },
    ],
    faq: [
      {
        q: 'Can I return a personalised bar?',
        a: 'No. Personalised goods are exempt from the normal distance-selling return right, so the preview screen is your only check.',
      },
      {
        q: 'When is the Christmas delivery cut-off?',
        a: 'Published on the site each year and it moves. Check it before you plan an order — it is earlier than most people expect.',
      },
      {
        q: 'Is it cheaper than a supermarket?',
        a: 'Not for chocolate you intend to eat. It is priced as gifting, and the personalisation and delivery are what you are buying.',
      },
    ],
    updated: CHECKED,
  },
]
