/**
 * Beauty & wellness stores.
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

export const beautyStores: Store[] = [
  {
    slug: 'nykaa',
    name: 'Nykaa',
    domain: 'nykaa.com',
    siteLabel: 'nykaa.com',
    badge: 'NY',
    color: '#B0175C',
    category: 'beauty',
    markets: 'India only — delivery within India, prices in ₹',
    blurb: 'India’s beauty retailer, where the loyalty tier outruns the coupon.',
    about: [
      'Nykaa is the dominant beauty retailer in India, carrying international brands alongside its own labels, with a physical store network behind the site. It is an authorised stockist rather than a marketplace for most of its catalogue, which is the reason to buy here rather than from a general marketplace.',
      'Discounting is a mix of scheduled sale events, brand-funded offers on individual labels, bank-card discounts at payment and a tiered loyalty programme. Coupons exist and work, but the tier you sit in changes the price of everything you buy, permanently, which is the larger effect.',
    ],
    offers: [
      {
        id: 'nykaa-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Tiered loyalty programme — free to join, discounts every order',
        detail:
          'Spend moves you up tiers that carry standing percentage benefits and early sale access. Over a year it is worth more than any single code.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'nykaa-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled sale events across the catalogue',
        detail:
          'Nykaa runs several large events a year with genuine catalogue-wide cuts. Between them, discounting is brand-by-brand.',
        checked: CHECKED,
      },
      {
        id: 'nykaa-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail: 'Rotating card-issuer offers applied after any coupon, capped per transaction.',
        checked: CHECKED,
      },
      {
        id: 'nykaa-gwp',
        kind: 'deal',
        value: 'Free gift',
        title: 'Gift-with-purchase and free-sample thresholds',
        detail:
          'Nykaa runs brand-funded GWP offers constantly. On a basket you were building anyway, hitting the threshold is free money.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check the expiry date on discounted stock',
        body: 'Deeply discounted cosmetics are often short-dated. The listing usually says so; the price makes sense once you read it.',
      },
      {
        title: 'Nykaa’s own labels are the price floor',
        body: 'The in-house brands are priced below the international equivalents before any discount, and they are discounted too.',
      },
      {
        title: 'Sale events beat coupons',
        body: 'If you can wait for the next scheduled event, do. Coupon percentages between events are small by comparison.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Model', value: 'Authorised retailer for most brands' },
      { label: 'Returns', value: 'Limited on opened cosmetics — read per product' },
      { label: 'Loyalty', value: 'Free, tiered by spend' },
    ],
    faq: [
      {
        q: 'Is Nykaa stock genuine?',
        a: 'Nykaa buys as an authorised retailer for the majority of its catalogue, which is the main argument for using it rather than a general marketplace where third-party sellers are the norm.',
      },
      {
        q: 'Can I return makeup I have opened?',
        a: 'Generally not, for hygiene reasons. Damaged or wrong items are a different case and are covered.',
      },
      {
        q: 'Does Nykaa deliver outside India?',
        a: 'No. It is a domestic retailer.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'scentbird',
    name: 'Scentbird',
    domain: 'scentbird.com',
    siteLabel: 'scentbird.com',
    badge: 'SB',
    color: '#3B2A55',
    category: 'beauty',
    markets: 'United States',
    blurb: 'Fragrance subscription — the first month is the discount, the cancel flow is the risk.',
    about: [
      'Scentbird posts a monthly decant of a designer or niche fragrance in a refillable travel case. It is a subscription, not a shop: you pick from a queue each month and one vial arrives.',
      'Because it is a subscription the entire discounting model is front-loaded — a heavily reduced or free first month, then the standard monthly rate. That is a genuinely good way to try expensive fragrances at a low unit cost, and a genuinely easy way to keep paying for months you did not think about. Both things are true and the second one is how the business works.',
    ],
    offers: [
      {
        id: 'scentbird-first',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted or free first month for new subscribers',
        detail:
          'The standing acquisition offer. It is the cheapest way to sample a fragrance you are considering buying a full bottle of.',
        terms: 'Renews at the standard monthly rate unless you cancel before the next cycle.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'scentbird-prepay',
        kind: 'deal',
        value: 'Long term',
        title: 'Prepaid multi-month plans at a lower monthly rate',
        detail:
          'Three-, six- and twelve-month prepayments cut the per-month price. Only worth it once you know you will use it.',
        checked: CHECKED,
      },
      {
        id: 'scentbird-queue',
        kind: 'deal',
        value: 'Skip a month',
        title: 'Skip a month instead of cancelling',
        detail:
          'The subscription supports skipping. Using it keeps the account and stops the charge, which is the middle option most people do not notice.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Diarise the renewal the day you sign up',
        body: 'The introductory price is one cycle. Put the next billing date in your calendar before you close the tab.',
      },
      {
        title: 'Fill the queue',
        body: 'If the queue is empty the service picks for you. Ten minutes choosing is the difference between a useful subscription and a drawer of vials.',
      },
      {
        title: 'Compare against a decant seller',
        body: 'For one specific fragrance, a one-off decant is cheaper than a subscription. The subscription only wins if you want variety every month.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Model', value: 'Monthly fragrance subscription' },
      { label: 'Size', value: 'A single travel-sized decant per month' },
      { label: 'Cancellation', value: 'Online, effective from the next cycle' },
    ],
    faq: [
      {
        q: 'How much is Scentbird after the first month?',
        a: 'It reverts to the standard monthly subscription price. The introductory offer covers one cycle only — that is the single most important thing to know before subscribing.',
      },
      {
        q: 'Can I cancel after the first month?',
        a: 'Yes, online, and it takes effect from the next billing cycle rather than immediately. Cancel before the renewal date, not after it.',
      },
      {
        q: 'Are the fragrances genuine?',
        a: 'They are decanted from full bottles into Scentbird’s own vials, which is why the packaging is not the designer’s. The liquid is the real product.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'iherb',
    name: 'iHerb',
    domain: 'iherb.com',
    siteLabel: 'iherb.com',
    badge: 'IH',
    color: '#2C6B3F',
    category: 'beauty',
    markets: 'Worldwide — ships to most countries, with local currency and duty rules',
    blurb: 'Supplements and natural goods, priced on a loyalty credit that never expires.',
    about: [
      'iHerb ships supplements, natural beauty and grocery items worldwide from US warehouses, and is one of the few retailers in this category with genuinely global reach. Prices are competitive against domestic health-food retail almost everywhere, which is the reason people import.',
      'The pricing model rests on three things: a permanent loyalty credit on every order, weekly and brand-specific specials, and a first-order discount for new customers. What ruins the maths is customs: on a large order, duty and handling in your country can exceed the entire saving, and iHerb cannot control that.',
    ],
    offers: [
      {
        id: 'iherb-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty credit on every order, applied to the next one',
        detail:
          'A standing percentage of each order comes back as credit. It is automatic, it needs no code, and it compounds if you buy regularly.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'iherb-first',
        kind: 'deal',
        value: 'New customer',
        title: 'New-customer discount on the first order',
        detail: 'A first-order percentage for new accounts, applied at checkout in most markets.',
        checked: CHECKED,
      },
      {
        id: 'iherb-specials',
        kind: 'deal',
        value: 'Deal',
        title: 'Weekly specials and brand-of-the-month discounts',
        detail:
          'A rotating set of deep brand discounts. If you are flexible about which brand of a commodity supplement you buy, this is where the price is.',
        checked: CHECKED,
      },
      {
        id: 'iherb-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free shipping over a country-specific threshold',
        detail:
          'The threshold differs by destination and is shown in the basket. Below it, international postage is a large fraction of a small order.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Know your country’s duty-free limit',
        body: 'Split a large order into two below the threshold, or accept the charge knowingly. This is the single biggest cost surprise on iHerb.',
      },
      {
        title: 'Weight matters as much as price',
        body: 'International shipping is weight-based. Powders and liquids are the expensive things to import; capsules are the cheap ones.',
      },
      {
        title: 'Check the expiry date on the listing',
        body: 'iHerb publishes the best-before date. On a bulk buy of something you take occasionally, it is the number that decides whether the deal is real.',
      },
    ],
    facts: [
      { label: 'Ships to', value: 'Most countries, from US warehouses' },
      { label: 'Loyalty', value: 'Automatic credit on every order' },
      { label: 'Returns', value: 'Possible but impractical internationally' },
      { label: 'Watch out for', value: 'Import duty and handling in your country' },
    ],
    faq: [
      {
        q: 'Does iHerb charge customs duty?',
        a: 'iHerb collects an estimated amount at checkout for some destinations and not for others. Where it does not, your customs authority bills you on arrival. Check your country’s de minimis threshold before ordering.',
      },
      {
        q: 'Do iHerb promo codes stack with the loyalty credit?',
        a: 'The credit is applied as a separate line rather than as a percentage, so in practice it usually does combine. Two percentage codes will not.',
      },
      {
        q: 'How long does delivery take?',
        a: 'From a few days in the US to several weeks internationally, depending on the shipping method you choose. The cheapest option is much slower, which is worth knowing on something you take daily.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'bath-and-body-works',
    name: 'Bath & Body Works',
    domain: 'bathandbodyworks.ae',
    siteLabel: 'bathandbodyworks.ae',
    badge: 'BBW',
    color: '#134A6B',
    category: 'beauty',
    markets: 'UAE, Saudi Arabia and Kuwait — the Gulf storefront, not the US site',
    blurb: 'Candles and body care sold on multibuy — the bundle is always the discount.',
    about: [
      'This is the Bath & Body Works storefront for the Gulf, operated regionally. The catalogue is the familiar candles, body care and hand soaps, priced in AED, SAR and KWD.',
      'The brand has one pricing mechanic and it is bundles. "Buy 3 get 3", "2 for" and mixed-basket multibuys are the way essentially everything is sold, and a percentage code applied to a single item is almost never competitive with them. Semi-annual sale events are the other lever.',
    ],
    offers: [
      {
        id: 'bbw-multibuy',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multibuy offers across candles and body care',
        detail:
          'The core mechanic. The per-unit price on a bundle is far below the single price, and the offers rotate across product families weekly.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'bbw-semiannual',
        kind: 'deal',
        value: 'Sale',
        title: 'Semi-annual sale',
        detail:
          'Twice a year the whole catalogue is cut hard to clear seasonal fragrances. It is the deepest pricing of the year.',
        checked: CHECKED,
      },
      {
        id: 'bbw-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Signup offer for new customers on the Gulf site',
        detail: 'A welcome discount for new accounts, valid on the AE/SA/KW storefront only.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Never buy one candle',
        body: 'There is a bundle running on candles more or less permanently. A single-unit purchase is the most expensive way to shop this brand.',
      },
      {
        title: 'Seasonal fragrances get cleared',
        body: 'The autumn and winter ranges are discounted hard once the season turns, and a candle does not expire.',
      },
      {
        title: 'This is not the US business',
        body: 'US loyalty, US coupons and US returns do not apply. Pricing and promotions here are set for the Gulf.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UAE, Saudi Arabia, Kuwait' },
      { label: 'Core discount', value: 'Multibuy bundles' },
      { label: 'Sale', value: 'Semi-annual' },
      { label: 'Currency', value: 'AED / SAR / KWD' },
    ],
    faq: [
      {
        q: 'Do US Bath & Body Works coupons work here?',
        a: 'No. The Gulf storefront is a separate operation with its own pricing and its own promotions.',
      },
      {
        q: 'Can I combine a code with a bundle?',
        a: 'Usually not, and you would rarely want to — the bundle is normally the deeper discount.',
      },
      {
        q: 'Which countries does it deliver to?',
        a: 'The UAE, Saudi Arabia and Kuwait. Delivery fees and thresholds differ between them.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'sephora-poland',
    name: 'Sephora',
    domain: 'sephora.pl',
    siteLabel: 'sephora.pl',
    badge: 'SP',
    color: '#1A1A1A',
    category: 'beauty',
    markets: 'Poland — this is the Polish storefront',
    blurb: 'Beauty retail where the loyalty tier beats every code you will find.',
    about: [
      'This is Sephora’s Polish storefront. The chain operates a separate site, stock list and loyalty programme in each country, so a French code or a US Beauty Insider balance means nothing here.',
      'The mechanic that matters is the loyalty programme. Tiers are earned by annual spend and carry a standing percentage on everything you buy, plus birthday gifts, samples and early access to the sale events. Over a year of normal beauty spending that is worth several times any single coupon, which is why the brand pushes it harder than it pushes discounts.',
    ],
    offers: [
      {
        id: 'sephora-pl-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free tiered loyalty programme',
        detail:
          'Standing discounts that rise with annual spend, plus samples, a birthday gift and early sale access.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'sephora-pl-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled member sale events',
        detail:
          'The big percentage events are the real discounting, and members are let in before everyone else.',
        checked: CHECKED_R2,
      },
      {
        id: 'sephora-pl-gwp',
        kind: 'deal',
        value: 'Free gift',
        title: 'Gift-with-purchase and sample thresholds',
        detail:
          'Brand-funded gifts at spend levels, running continuously across different brands. Free value on a basket you were building anyway.',
        checked: CHECKED_R2,
      },
      {
        id: 'sephora-pl-own',
        kind: 'deal',
        value: 'Sale',
        title: 'Sephora Collection own-label pricing',
        detail:
          'The in-house range is priced below the brands it sits next to and is discounted as well.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Join before you buy, not after',
        body: 'Tier benefits apply to a signed-in account at checkout and cannot be applied retroactively.',
      },
      {
        title: 'Save the big basket for the member event',
        body: 'The scheduled sales cut deeper than any code, and the early-access window is when stock is still there.',
      },
      {
        title: 'Samples are a real way to test',
        body: 'On foundation and fragrance especially, a sample avoids the most expensive mistake in beauty.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Loyalty', value: 'Free, tiered by annual spend' },
      { label: 'Returns', value: 'Limited on opened cosmetics' },
      { label: 'Note', value: 'A separate programme from other countries’ Sephora' },
    ],
    faq: [
      {
        q: 'Does my Sephora account work in other countries?',
        a: 'No. Each market runs its own storefront and loyalty programme, and balances do not transfer.',
      },
      {
        q: 'When are the Sephora sale events?',
        a: 'On a published schedule several times a year, with members admitted before the public. Those are the deepest discounts.',
      },
      {
        q: 'Can I return opened makeup?',
        a: 'Generally not, for hygiene reasons. Damaged or incorrect items are a different case.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'douglas',
    name: 'Douglas',
    domain: 'douglas-shop.pl',
    siteLabel: 'douglas-shop.pl',
    badge: 'DG',
    color: '#1A1A1A',
    category: 'beauty',
    markets: 'Poland — the Polish storefront of the German group',
    blurb: 'European beauty chain with a loyalty card and near-permanent promotions.',
    about: [
      'Douglas is the largest beauty retailer in continental Europe, German-owned, with a storefront and a store network in each of its markets. This is the Polish site, with Polish pricing and its own loyalty programme.',
      'Unlike Sephora it discounts almost continuously: rotating brand promotions, percentage events, and multibuy mechanics on skincare and fragrance. The free loyalty card adds points and member-only pricing on top of whatever is running, and the two generally combine — which is unusual and worth knowing.',
    ],
    offers: [
      {
        id: 'douglas-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty card with points and member pricing',
        detail:
          'Points on every order plus member prices that usually apply alongside the running promotion.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'douglas-promos',
        kind: 'deal',
        value: 'Sale',
        title: 'Rotating brand and site-wide promotions',
        detail:
          'Something is running most weeks — a brand at a percentage off, or a cart-level event.',
        checked: CHECKED_R2,
      },
      {
        id: 'douglas-gwp',
        kind: 'deal',
        value: 'Free gift',
        title: 'Gift-with-purchase and sample sets',
        detail: 'Brand-funded gifts at spend thresholds, refreshed constantly.',
        checked: CHECKED_R2,
      },
      {
        id: 'douglas-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet on discontinued lines and short-dated stock',
        detail:
          'Deep reductions on retired ranges. Check the expiry date on anything you are buying in quantity.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Member price plus promotion usually stacks',
        body: 'That is unusual in beauty retail and it is the reason to have the card before you shop.',
      },
      {
        title: 'Watch the expiry date on outlet stock',
        body: 'Discontinued lines are cheap because they are old. Fine for something you use daily, less so for an occasional fragrance.',
      },
      {
        title: 'Fragrance is where the multibuys are',
        body: 'The deepest bundle mechanics run on perfume rather than on skincare.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland (part of the German Douglas group)' },
      { label: 'Loyalty', value: 'Free card, points plus member pricing' },
      { label: 'Discounting', value: 'Near-continuous' },
      { label: 'Returns', value: 'Limited on opened cosmetics' },
    ],
    faq: [
      {
        q: 'Do Douglas member prices stack with promotions?',
        a: 'Usually yes, which is unusual in this category and is the main argument for getting the card before you shop.',
      },
      {
        q: 'Is the Polish site the same as the German one?',
        a: 'Same group, separate storefront, separate pricing and separate loyalty balance.',
      },
      {
        q: 'Is outlet stock genuine?',
        a: 'Yes — it is discontinued or short-dated authorised stock, not grey market. Check the dating before buying several.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'ipsy',
    name: 'IPSY',
    domain: 'ipsy.com',
    siteLabel: 'ipsy.com',
    badge: 'IP',
    color: '#B02A6B',
    category: 'beauty',
    markets: 'United States',
    blurb: 'Beauty subscription boxes — cheap to start, deliberately easy to forget.',
    about: [
      'IPSY posts monthly beauty boxes: a small bag of samples at a low monthly price, and a larger box of full-size products at a higher one. You complete a profile and the selection is matched to it, with some choice each month.',
      'Subscription beauty is a genuinely good way to try products at a fraction of retail, and a genuinely easy way to accumulate a drawer of things you did not choose. The commercial model is a heavily discounted or free first month followed by the standard rate, so the date to note is the second billing, not the first.',
    ],
    offers: [
      {
        id: 'ipsy-firstmonth',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted or free first box for new subscribers',
        detail: 'The standing acquisition offer and the cheapest way to see what arrives.',
        terms: 'Renews at the standard monthly rate unless cancelled before the next cycle.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'ipsy-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Prepaid annual plans at a lower monthly rate',
        detail: 'Worth it only once you know you use what arrives.',
        checked: CHECKED_R2,
      },
      {
        id: 'ipsy-addons',
        kind: 'deal',
        value: 'Sale',
        title: 'Member add-on pricing on full-size products',
        detail:
          'Subscribers can buy full-size items at member prices, which is frequently better value than the box itself.',
        checked: CHECKED_R2,
      },
      {
        id: 'ipsy-skip',
        kind: 'deal',
        value: 'Skip a month',
        title: 'Skip a month rather than cancelling',
        detail:
          'Keeps the account and stops the charge — the middle option most people never find.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Diarise the second billing date',
        body: 'The introductory price covers one cycle. Put the next charge in your calendar before you close the tab.',
      },
      {
        title: 'Complete the profile properly',
        body: 'The matching is only as good as what you told it. Ten minutes here decides whether the box is useful for a year.',
      },
      {
        title: 'The add-on store is often the better deal',
        body: 'Member pricing on full-size products can beat the box. Check it before assuming the subscription is the value.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Model', value: 'Monthly sample and full-size subscription boxes' },
      { label: 'Cancellation', value: 'Online, effective from the next cycle' },
      { label: 'Option', value: 'Skip a month instead of cancelling' },
    ],
    faq: [
      {
        q: 'How much is IPSY after the first month?',
        a: 'It reverts to the standard monthly rate for whichever tier you chose. The introductory offer covers one cycle only.',
      },
      {
        q: 'Can I choose what is in the box?',
        a: 'Partly — you get some choice each month within the options offered, guided by your profile. It is not a full pick-your-own.',
      },
      {
        q: 'How do I cancel?',
        a: 'Online in your account, effective from the next billing cycle. Skipping a month is the lighter option if you just want a break.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'stylevana',
    name: 'Stylevana',
    domain: 'stylevana.com',
    siteLabel: 'stylevana.com',
    badge: 'SV',
    color: '#8A5C7A',
    category: 'beauty',
    markets: 'Worldwide, shipping cross-border from Asia',
    blurb: 'Korean and Japanese beauty at Asian prices — check the batch dates.',
    about: [
      'Stylevana sells Korean and Japanese skincare, sunscreen and cosmetics internationally, at prices much closer to what those products cost in their home markets than a Western retailer charges. For anyone who has built a K-beauty routine, the difference is substantial.',
      'The trade-offs are the usual cross-border ones plus one specific to this category: batch dating. Skincare and especially sunscreen degrade, and deeply discounted stock is sometimes short-dated. The site runs continuous coupon and flash-sale mechanics, so the listed price is rarely the price.',
    ],
    offers: [
      {
        id: 'stylevana-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Continuous flash sales and site-wide events',
        detail: 'Something is nearly always running across the catalogue.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'stylevana-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Stackable coupon codes and cart thresholds',
        detail:
          'A site coupon plus a spend threshold generally combine. Check the basket applies both.',
        checked: CHECKED_R2,
      },
      {
        id: 'stylevana-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free shipping over the cart minimum',
        detail:
          'The threshold is meaningful and international postage below it is expensive. Build one order rather than three.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Ask about batch dates on sunscreen',
        body: 'Sunscreen loses effectiveness as it ages. It is the one product here where a deep discount deserves a question.',
      },
      {
        title: 'One large order, not several small ones',
        body: 'Shipping thresholds and delivery time both reward consolidation. Buy a routine, not a bottle.',
      },
      {
        title: 'Check your country’s cosmetics import rules',
        body: 'Some markets restrict quantities or specific ingredients at the border. Worth two minutes before a large order.',
      },
    ],
    facts: [
      { label: 'Ships from', value: 'Asia, worldwide' },
      { label: 'Catalogue', value: 'Korean and Japanese skincare and cosmetics' },
      { label: 'Delivery', value: 'Weeks on standard shipping' },
      { label: 'Watch out for', value: 'Batch dating on discounted skincare' },
    ],
    faq: [
      {
        q: 'Is Stylevana authentic?',
        a: 'It sells genuine Asian-market stock, which is why the prices look low against Western retail. The recurring complaints are delivery time and occasional short-dated products rather than counterfeits.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Typically several weeks on standard shipping. Faster options exist and change the value calculation.',
      },
      {
        q: 'Will I pay customs?',
        a: 'Above your country’s threshold, likely. Cosmetics also face specific import rules in some markets — check before a large order.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'forest-essentials',
    name: 'Forest Essentials',
    domain: 'forestessentialsindia.com',
    siteLabel: 'forestessentialsindia.com',
    badge: 'FE',
    color: '#6B5A2A',
    category: 'beauty',
    markets: 'India primarily, with international shipping',
    blurb: 'Indian luxury ayurvedic skincare — sampling matters more than the discount.',
    about: [
      'Forest Essentials is an Indian luxury skincare brand working in an ayurvedic idiom: cold-pressed oils, ghee-based creams, traditional formulations presented and priced as a luxury range.',
      'Luxury beauty discounts narrowly and this brand is no exception — occasional festive campaigns, gift-with-purchase sets and a loyalty programme, rather than percentage codes. The genuinely useful mechanic here is sampling: the formulations are rich and divisive, and a sample set costs a fraction of the mistake of buying a full jar you dislike.',
    ],
    offers: [
      {
        id: 'forestessentials-gwp',
        kind: 'deal',
        value: 'Free gift',
        title: 'Gift-with-purchase and sample sets at spend thresholds',
        detail:
          'The main mechanic. Sampling before committing to a full size is worth more here than a percentage.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'forestessentials-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive campaigns and gift sets',
        detail:
          'The Indian festive calendar is when this brand discounts and when the boxed gift sets appear.',
        checked: CHECKED_R2,
      },
      {
        id: 'forestessentials-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme with points on purchases',
        detail: 'Points against future orders, plus early access to the seasonal collections.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Sample before you buy a full size',
        body: 'The textures are rich and the fragrances are strong. A trial set is the cheapest way to find out whether the range suits you.',
      },
      {
        title: 'Gift sets are the value at festive time',
        body: 'Boxed sets are priced well below the components and are the brand’s main seasonal offer.',
      },
      {
        title: 'Check shelf life on natural formulations',
        body: 'Preservative-light products have shorter windows. Buy what you will use.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India, with international shipping' },
      { label: 'Positioning', value: 'Luxury ayurvedic skincare' },
      { label: 'Discounting', value: 'Narrow — gifts and festive sets rather than percentages' },
      { label: 'Loyalty', value: 'Points programme' },
    ],
    faq: [
      {
        q: 'Does Forest Essentials ship internationally?',
        a: 'Yes, from India to many markets. Duty and delivery costs are worth checking before a large order.',
      },
      {
        q: 'Are there discount codes?',
        a: 'Rarely. This is a luxury brand that discounts through gifts, sets and festive campaigns rather than percentages.',
      },
      {
        q: 'How long do the products keep?',
        a: 'Shorter than conventional cosmetics in some cases, because the formulations are preservative-light. The packaging states the period after opening.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'muscletech',
    name: 'MuscleTech',
    domain: 'muscletech.in',
    siteLabel: 'muscletech.in',
    badge: 'MT',
    color: '#B0161E',
    category: 'beauty',
    markets: 'India — this is the Indian storefront',
    blurb: 'Sports supplements where price per serving is the only comparison that works.',
    about: [
      'MuscleTech sells sports nutrition — whey protein, creatine, pre-workout and mass gainers — through an Indian storefront alongside a large marketplace presence. The category is crowded and the marketing is loud.',
      'There is exactly one way to compare products here honestly: price per gram of protein, not price per tub. Tub sizes, serving sizes and protein-per-serving all differ between products and between brands, and the headline price tells you nothing. Buying direct also matters more than usual in India, where counterfeit supplements are a genuine problem on third-party listings.',
    ],
    offers: [
      {
        id: 'muscletech-bulk',
        kind: 'deal',
        value: 'Bundle',
        title: 'Larger tubs at a lower price per serving',
        detail:
          'The main saving. Compare per gram of protein rather than per tub — the difference between sizes is substantial.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'muscletech-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring site-wide sale events',
        detail: 'Frequent campaigns, deepest around the Indian festive and new-year windows.',
        checked: CHECKED_R2,
      },
      {
        id: 'muscletech-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card offers at payment',
        detail: 'Issuer discounts applied at checkout on top of any promotion.',
        checked: CHECKED_R2,
      },
      {
        id: 'muscletech-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Stack bundles across protein and creatine',
        detail: 'Combination packs are priced below the individual tubs.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare per gram of protein',
        body: 'Serving sizes and protein content differ between products. Price per tub is not a comparison.',
      },
      {
        title: 'Buy from the authorised channel',
        body: 'Counterfeit supplements are a real problem on Indian marketplaces. Direct or an authorised seller is worth a small premium.',
      },
      {
        title: 'Creatine monohydrate is a commodity',
        body: 'It is the cheapest well-evidenced supplement in the category and brand makes almost no difference. Do not overpay for it.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Compare by', value: 'Price per gram of protein' },
      { label: 'Watch out for', value: 'Counterfeits on third-party listings' },
      { label: 'Discounting', value: 'Frequent, plus bank offers' },
    ],
    faq: [
      {
        q: 'How do I know a supplement is genuine?',
        a: 'Buy from the brand’s own storefront or a named authorised seller, check the import and authentication markings, and be sceptical of pricing far below the market.',
      },
      {
        q: 'Is the bigger tub always cheaper?',
        a: 'Per serving, usually yes and by a wide margin. Only if you will finish it — protein has a shelf life once opened.',
      },
      {
        q: 'Do I need a mass gainer?',
        a: 'For most people, no — they are mostly carbohydrate at a protein price. Compare the nutrition panel against food before buying one.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'nadula',
    name: 'Nadula',
    domain: 'nadula.com',
    siteLabel: 'nadula.com',
    badge: 'ND',
    color: '#6B2A4A',
    category: 'beauty',
    markets: 'Worldwide, shipping cross-border',
    blurb: 'Human hair wigs and extensions, sold on near-permanent promotion.',
    about: [
      'Nadula sells human hair wigs, closures and extensions internationally, across the lace front, HD lace and headband categories. It is a direct-from-manufacturer operation shipping worldwide, which is where the price advantage comes from.',
      'The category discounts continuously — flash sales, coupon stacks, first-order codes — so the listed price is an anchor. What decides whether a purchase works is the specification: hair origin, density, cap size and lace type. Two wigs at the same price with different densities are different products, and the return policy on installed hair is narrow everywhere.',
    ],
    offers: [
      {
        id: 'nadula-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Continuous flash sales and site-wide events',
        detail:
          'Something is always running. Judge against the usual selling price, not the anchor.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'nadula-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail:
          'A welcome code applied at checkout, stacking with the running event in most cases.',
        checked: CHECKED_R2,
      },
      {
        id: 'nadula-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundle deals across wefts and closures',
        detail:
          'Buying the bundles and the closure together costs less than separately, and matches the hair.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Match the closure to the bundles in one order',
        body: 'Hair from different batches can differ in tone and texture. Buying together avoids the mismatch.',
      },
      {
        title: 'Density is the specification that matters',
        body: 'It determines how the piece looks and how long it lasts, and it is the difference between two similar prices.',
      },
      {
        title: 'Returns close once it is installed',
        body: 'Inspect and check the colour before any customisation. After that, the policy is narrow everywhere in this category.',
      },
    ],
    facts: [
      { label: 'Ships', value: 'Worldwide, cross-border' },
      { label: 'Products', value: 'Human hair wigs, bundles, closures' },
      { label: 'Key specs', value: 'Origin, density, cap size, lace type' },
      { label: 'Returns', value: 'Narrow once altered or installed' },
    ],
    faq: [
      {
        q: 'Is Nadula real human hair?',
        a: 'The range is sold as human hair with the origin and grade stated per product. Read the specification rather than the marketing copy.',
      },
      {
        q: 'Can I return a wig?',
        a: 'Only unaltered and uninstalled, within the published window. Once it has been cut, bleached or worn, no seller in this category will take it back.',
      },
      {
        q: 'Do the discounts stack?',
        a: 'A first-order code and a running event usually combine. Two percentage codes do not.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'lelo',
    name: 'LELO',
    domain: 'lelo.com',
    siteLabel: 'lelo.com',
    badge: 'LL',
    color: '#8A1E3C',
    category: 'beauty',
    markets: 'Worldwide, via regional storefronts',
    blurb: 'Swedish intimate wellness brand — warranty length is the specification.',
    about: [
      'LELO is a Swedish design company making intimate wellness products, positioned at the premium end of a category where most of the market is unbranded. The products use body-safe silicone, rechargeable motors and a long manufacturer warranty.',
      'That warranty is the practical reason to buy branded here rather than cheap: it is the specification that distinguishes a product designed to last years from one that fails in months. Discounting runs through seasonal campaigns, bundles and outlet colours; packaging is discreet, which is worth stating because people ask.',
    ],
    offers: [
      {
        id: 'lelo-seasonal',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns across the range',
        detail: 'Percentage events several times a year, deepest around the winter holidays.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'lelo-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundles with cleaner and lubricant',
        detail: 'The care products you need anyway, priced below buying them separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'lelo-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Retired colours at a reduced price',
        detail: 'Same product, discontinued finish.',
        checked: CHECKED_R2,
      },
      {
        id: 'lelo-warranty',
        kind: 'deal',
        value: 'Protection',
        title: 'Manufacturer warranty on the range',
        detail:
          'Not a discount — the reason the price is defensible against unbranded alternatives. Register the purchase.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy body-safe materials, not the cheapest silicone',
        body: 'This is the one specification worth paying for. Unlabelled materials are the risk the price difference reflects.',
      },
      {
        title: 'Register the warranty',
        body: 'It is long, and it is the main argument for buying branded. Registration takes a minute.',
      },
      {
        title: 'Buy the care products in the bundle',
        body: 'Silicone cleaner and a compatible lubricant are required, not optional. Bundled is cheaper.',
      },
    ],
    facts: [
      { label: 'Origin', value: 'Sweden' },
      { label: 'Materials', value: 'Body-safe silicone, rechargeable' },
      { label: 'Warranty', value: 'Long manufacturer warranty — register it' },
      { label: 'Packaging', value: 'Discreet' },
    ],
    faq: [
      {
        q: 'Is the packaging discreet?',
        a: 'Yes — plain outer packaging with a neutral sender name, which is standard in this category.',
      },
      {
        q: 'Why is it more expensive than unbranded alternatives?',
        a: 'Certified body-safe materials, a rechargeable motor built to last, and a long warranty. Those are the three things the price difference buys.',
      },
      {
        q: 'When are the discounts?',
        a: 'Seasonal campaigns through the year, deepest around the winter holidays, plus the outlet colours year-round.',
      },
    ],
    updated: CHECKED_R2,
  },
]
