/**
 * Fashion & footwear stores.
 *
 * ⚠️ Everything in here — thresholds, windows, percentages — is a working value
 * written from the merchants' own public pages and MUST be re-checked before a
 * campaign runs against it. Retail terms in this category change by season and
 * by country. See ../../README.md.
 *
 * Note the market lines. Six of these are single-country storefronts sold to us
 * as such by the network (myntra.com, ajio.com, adidas.co.in, in.puma.com,
 * titan.co.in, lenskart.com are India; victoriassecret.ae is Gulf). A visitor
 * from the wrong country cannot use anything on the page, so the market is
 * stated above the offers, not buried in an FAQ.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const fashionStores: Store[] = [
  {
    slug: 'myntra',
    name: 'Myntra',
    domain: 'myntra.com',
    siteLabel: 'myntra.com',
    badge: 'MY',
    color: '#E1275A',
    category: 'fashion',
    markets: 'India only — delivery within India, prices in ₹',
    blurb: 'India’s largest fashion storefront, discounted mostly through its own sale events.',
    about: [
      'Myntra is the fashion arm of the Flipkart group and the default clothing destination for most online shoppers in India. It carries international brands alongside a deep bench of Indian labels, and its own private labels sit at the cheap end of almost every category.',
      'Discounting here follows the event calendar rather than the coupon economy. End of Reason Sale and the festive events cut prices across the catalogue far harder than any code, and bank offers layered on top are usually the second-largest saving. A public code, when one works at all, tends to be a small cap on a first order.',
    ],
    offers: [
      {
        id: 'myntra-sale',
        kind: 'deal',
        value: '70–80%',
        title: 'Up to 70–80% off in the running sale section',
        detail:
          'The permanent sale rail is where the real discounting lives on Myntra, and it is deeper than anything a code applies. Sort by discount rather than by price to see what is actually being cleared.',
        terms: 'Sale stock is normally excluded from any coupon you might also hold.',
        checked: CHECKED,
        best: true,
        deepLink: 'myntra.com/deals',
      },
      {
        id: 'myntra-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card offers at checkout',
        detail:
          'Myntra runs rotating instant-discount deals with Indian card issuers, applied at payment rather than in the basket. They stack on top of the sale price and are frequently worth more than any coupon.',
        terms: 'Card-specific, capped per transaction, and they change every few weeks.',
        checked: CHECKED,
      },
      {
        id: 'myntra-insider',
        kind: 'deal',
        value: 'Member',
        title: 'Myntra Insider — free loyalty tier with early sale access',
        detail:
          'The loyalty programme is free to join and returns points on every order, plus early entry to the big sale events. Early entry matters more than the points: the good sizes go on day one.',
        checked: CHECKED,
      },
      {
        id: 'myntra-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-only drops and coupons',
        detail:
          'A share of Myntra’s promotional inventory is issued only in the app, in the coupon wallet. If you shop on desktop you never see it.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Wait for the event if you can',
        body: 'Myntra’s two big annual sales cut deeper than any other lever on this page. If what you want is not urgent, the calendar is the discount.',
      },
      {
        title: 'Check the coupon wallet before the basket',
        body: 'Coupons issued to your account sit in the wallet inside the app and are applied at checkout, not typed in. People miss them because they are looking for a text box.',
      },
      {
        title: 'Private labels are the price floor',
        body: 'Roadster, HERE&NOW and the other in-house labels are priced under the branded equivalents before any discount, and they are discounted as well.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Returns', value: 'Typically 14 days, category-dependent' },
      { label: 'Delivery', value: 'Free over a low cart threshold; otherwise a small fee' },
      { label: 'Payment', value: 'Cards, UPI, net banking, cash on delivery' },
    ],
    faq: [
      {
        q: 'Do Myntra promo codes work on sale items?',
        a: 'Usually not. Coupons on Myntra are typically restricted to full-price stock, and the sale section is excluded. That is not a trick — the sale price is already below what the coupon would have produced.',
      },
      {
        q: 'Can I order from Myntra outside India?',
        a: 'No. Myntra delivers within India only, and payment methods assume an Indian card or UPI account. If you are shopping from elsewhere, nothing on this page will help you.',
      },
      {
        q: 'What is the fastest way to get a discount right now?',
        a: 'Open the sale section, sort by discount, then check whether one of your cards has a live instant-discount deal at checkout. Those two together beat coupon hunting.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'ajio',
    name: 'AJIO',
    domain: 'ajio.com',
    siteLabel: 'ajio.com',
    badge: 'AJ',
    color: '#2C4152',
    category: 'fashion',
    markets: 'India only — delivery within India, prices in ₹',
    blurb: 'Reliance’s fashion platform, built around stacked cart-level discounts.',
    about: [
      'AJIO is Reliance Retail’s fashion storefront and Myntra’s main rival in India. Its catalogue leans on international high-street brands and a large own-label range, and it competes hard on price rather than on service.',
      'The discount mechanics are unusually layered: a headline sale price, then a cart-level percentage that unlocks at a spend threshold, then a bank offer at payment. Codes on AJIO are typically the middle layer of that stack, which is why the same code produces a different saving depending on how full your basket is.',
    ],
    offers: [
      {
        id: 'ajio-sale',
        kind: 'deal',
        value: '80%',
        title: 'Up to 80% off in the sale and clearance rails',
        detail:
          'The clearance section is the deepest single discount on the site and needs no code. AJIO refreshes it constantly rather than in a season block.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'ajio-cart',
        kind: 'deal',
        value: 'Deal',
        title: 'Extra cart discount above a spend threshold',
        detail:
          'AJIO runs a standing "extra X% off on carts over ₹Y" mechanic that applies on top of the item discount. Filling the basket to the threshold is often cheaper per item than two separate orders.',
        terms: 'Threshold and percentage both move; the current pair is shown in the basket.',
        checked: CHECKED,
      },
      {
        id: 'ajio-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail:
          'Rotating card-issuer deals apply after the cart discount, capped per transaction. Check the payment page before assuming your total is final.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Build to the cart threshold, not past it',
        body: 'The extra discount unlocks at a fixed spend. Going a long way over it adds nothing; landing just above it is the efficient basket.',
      },
      {
        title: 'AJIO Luxe is priced separately',
        body: 'The luxury storefront runs its own promotions and is usually excluded from the main site’s cart mechanics. Treat it as a different shop.',
      },
      {
        title: 'Compare against Myntra for the same SKU',
        body: 'The two carry a lot of the same branded stock and undercut each other by turns. For a specific item it is worth a thirty-second check.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Returns', value: 'Typically 7–15 days depending on category' },
      { label: 'Delivery', value: 'Free above a cart minimum' },
      { label: 'Owner', value: 'Reliance Retail' },
    ],
    faq: [
      {
        q: 'How do AJIO coupon codes stack with the cart discount?',
        a: 'A coupon normally replaces the cart-level offer rather than adding to it — the basket applies whichever is larger. Add everything first, then compare the two totals before you pay.',
      },
      {
        q: 'Does AJIO ship outside India?',
        a: 'No. It is an India-only storefront.',
      },
      {
        q: 'Is AJIO Luxe covered by the same offers?',
        a: 'Generally not. Luxe stock is excluded from most site-wide mechanics and runs its own, smaller, promotions.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'shein',
    name: 'SHEIN',
    domain: 'shein.com',
    siteLabel: 'shein.com',
    badge: 'SH',
    color: '#1F1F1F',
    category: 'fashion',
    markets: 'Worldwide — country storefront selected at entry, prices in local currency',
    blurb: 'Ultra-fast fashion with a coupon system baked into the app.',
    about: [
      'SHEIN is the largest of the ultra-fast-fashion platforms: an enormous catalogue at very low unit prices, refreshed daily, sold through a country-specific storefront in local currency.',
      'It is also one of the few merchants where coupon codes genuinely are the mechanic rather than a decoration. The app issues points, wallet coupons, first-order allowances and stacked cart discounts continuously, and the same basket can cost meaningfully different amounts depending on which of them you have collected. The trade-off, as always here, is sizing and quality variance — the returns policy is what you are actually relying on.',
    ],
    offers: [
      {
        id: 'shein-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'New-customer discount on your first order',
        detail:
          'SHEIN issues a first-order allowance to new accounts, applied automatically in the basket in most markets. It is normally the largest single discount you will get from the site.',
        terms: 'One per account; usually has a minimum spend.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'shein-wallet',
        kind: 'deal',
        value: 'Coupons',
        title: 'Coupon wallet — collect before you check out',
        detail:
          'Coupons issued to your account sit in "My Coupons" and must be selected in the basket. Several can be live at once with different minimums; the checkout does not pick the best one for you.',
        checked: CHECKED,
      },
      {
        id: 'shein-points',
        kind: 'deal',
        value: 'Member',
        title: 'Points for reviews, photos and daily check-in',
        detail:
          'Points convert to money off at checkout. Uploading a photo review of something you already bought is the highest-yield action per minute on the site.',
        checked: CHECKED,
      },
      {
        id: 'shein-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance section, plus free shipping over the cart minimum',
        detail:
          'The clearance rail plus a basket built to the free-delivery threshold is the standing way to get the unit price down without any code at all.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Coupons do not auto-apply — pick them',
        body: 'The basket shows a coupon selector. Open it. It is common to hold three coupons and have the checkout apply the smallest by default.',
      },
      {
        title: 'Read the size reviews, not the size chart',
        body: 'Returns cost you time and sometimes postage. The customer photos with height and weight are a better predictor than the measurements table.',
      },
      {
        title: 'One basket, not three',
        body: 'Shipping thresholds and cart-level discounts both reward consolidation, and SHEIN’s delivery is slow enough that splitting orders rarely gets anything to you sooner.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Worldwide, via country storefronts' },
      { label: 'Returns', value: 'Commonly 30–45 days; first return often free' },
      { label: 'Delivery', value: 'Free over a cart threshold that varies by country' },
      { label: 'Duty', value: 'Charged on arrival in some markets — check before ordering' },
    ],
    faq: [
      {
        q: 'Do SHEIN promo codes actually work?',
        a: 'The ones SHEIN issues to your own account do, reliably — they are the core of how the site prices. Public codes scraped from elsewhere are a different matter: most are expired, market-locked or single-use.',
      },
      {
        q: 'Can I stack a code with the points discount?',
        a: 'Usually yes — points are applied as a separate line at checkout. Two percentage coupons, on the other hand, generally do not stack.',
      },
      {
        q: 'Is the first-order discount available in every country?',
        a: 'It exists in most storefronts but the size and the minimum spend differ. Your local site is the authority; a figure quoted for the US market is not a promise anywhere else.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'farfetch',
    name: 'Farfetch',
    domain: 'farfetch.com',
    siteLabel: 'farfetch.com',
    badge: 'FF',
    color: '#111111',
    category: 'fashion',
    markets: 'Worldwide — ships from partner boutiques in dozens of countries',
    blurb: 'Luxury marketplace where the sale, not the code, is the discount.',
    about: [
      'Farfetch is a marketplace for luxury boutiques rather than a shop with its own warehouse. Your order ships from whichever partner store holds the piece, which is why delivery times, duties and return handling vary between two items in the same basket.',
      'Luxury discounting is seasonal and severe: the twice-yearly sale takes 30–50% off, then goes deeper on the final markdowns. New-season stock is essentially never discounted by code, and a welcome code, where offered, excludes most of the brands people come here for.',
    ],
    offers: [
      {
        id: 'farfetch-sale',
        kind: 'deal',
        value: '50%',
        title: 'Seasonal sale — commonly up to 50%, deeper on final markdowns',
        detail:
          'The end-of-season sale is the entire discounting strategy of this site. Filter by your size first: at the deeper markdowns the size curve is what is left, not what is best.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'farfetch-newsletter',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup discount for new customers',
        detail:
          'Farfetch issues a first-order code to new subscribers in most markets. Read the brand exclusion list before you plan a purchase around it — it is long.',
        terms: 'Excludes a large list of brands and, normally, all sale stock.',
        checked: CHECKED,
      },
      {
        id: 'farfetch-access',
        kind: 'deal',
        value: 'Member',
        title: 'Farfetch Access — spend-based tiers with private sale entry',
        detail:
          'The loyalty programme unlocks early access to the sale and occasional private offers. Early access is the part with value; on limited sizes it is the difference between buying and browsing.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check which country the boutique ships from',
        body: 'It is on the product page. It determines the delivery time, whether duty is prepaid, and how a return is handled — all of which can cost more than the discount.',
      },
      {
        title: 'Prices are set per market',
        body: 'The same piece can carry a different price on the same site in a different currency. If you are near a border between storefronts, it is worth looking.',
      },
      {
        title: 'Final markdowns are usually non-returnable',
        body: 'Read the returns line on the product page at the deepest discounts. This is where "up to 70% off" stops being a bargain if the fit is wrong.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Marketplace — ships from partner boutiques' },
      { label: 'Returns', value: 'Typically 14 days from delivery' },
      { label: 'Duties', value: 'Prepaid in many destinations; check at checkout' },
      { label: 'Markets', value: 'Worldwide, prices set per storefront' },
    ],
    faq: [
      {
        q: 'Do Farfetch codes work on sale items?',
        a: 'Almost never. Codes are for full-price stock and carry a brand exclusion list on top of that. During sale season the discount is the sale price.',
      },
      {
        q: 'Why do two items in one order arrive separately?',
        a: 'Because they come from two different boutiques. Farfetch is a marketplace; each seller ships its own parcel, sometimes from a different country.',
      },
      {
        q: 'Are duties included in the price?',
        a: 'In many destinations Farfetch prepays them and shows an all-in price. In others they are collected on delivery. The checkout tells you which case you are in — read it before you pay.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'adidas',
    name: 'Adidas',
    domain: 'adidas.co.in',
    siteLabel: 'adidas.co.in',
    badge: 'AD',
    color: '#1A1A1A',
    category: 'fashion',
    markets: 'India — this is the Indian storefront; other countries have their own sites',
    blurb: 'Sportswear direct from the brand, discounted through outlet and membership.',
    about: [
      'This is the Adidas India storefront. The brand runs a separate site per country with its own pricing, stock and promotions, so a discount that exists on the Indian site frequently does not exist on the German one.',
      'Direct-from-brand sportswear discounts in three predictable ways: the permanent outlet section, the free membership programme with its member-only sales, and end-of-season clearance. Codes are usually membership-linked rather than public, which is exactly why the public ones you find elsewhere so rarely work.',
    ],
    offers: [
      {
        id: 'adidas-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet section — standing discounts, no code needed',
        detail:
          'The outlet is a permanent part of the site, not an event. It carries previous-season colourways of current silhouettes at a real cut.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'adidas-membership',
        kind: 'deal',
        value: 'Member',
        title: 'adiClub membership — free, with member-only sale access',
        detail:
          'Joining costs nothing and unlocks member pricing events, early drops and points against future orders. Most of the codes people search for are issued to members.',
        checked: CHECKED,
      },
      {
        id: 'adidas-endofseason',
        kind: 'deal',
        value: 'Outlet',
        title: 'End-of-season sale, layered on top of outlet pricing',
        detail:
          'Twice a year the site runs an extra percentage across already-reduced stock. That layering is the deepest price the brand’s own storefront reaches.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Join adiClub before you shop, not after',
        body: 'Member pricing is applied at the basket for signed-in accounts. Signing up after you have paid does nothing for that order.',
      },
      {
        title: 'Check the country storefront you are actually on',
        body: 'This offer runs on the Indian site. If you are elsewhere, the prices, the promotions and the returns policy are all different.',
      },
      {
        title: 'Codes exclude new releases',
        body: 'Anything on a launch calendar — new silhouettes, collaborations, limited drops — is excluded from every code the brand issues.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India (adidas.co.in)' },
      { label: 'Returns', value: 'Commonly 30 days, unworn with tags' },
      { label: 'Membership', value: 'adiClub, free' },
      { label: 'Excluded from codes', value: 'New releases, collaborations, some franchises' },
    ],
    faq: [
      {
        q: 'Why did my Adidas code not work?',
        a: 'Three usual reasons: it was issued for a different country’s storefront, the item is a new release or collaboration and therefore excluded, or the code was member-linked and tied to the account it was issued to.',
      },
      {
        q: 'Does the outlet stack with a code?',
        a: 'Rarely. Outlet pricing is normally the discount, and codes apply to full-price stock. During the end-of-season event the site itself layers an extra cut — that is the exception, and it needs no code.',
      },
      {
        q: 'Is adiClub worth joining for one purchase?',
        a: 'Yes, because it is free and because member-only pricing events are where the real reductions are. There is no downside beyond the e-mail.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'puma',
    name: 'PUMA',
    domain: 'in.puma.com',
    siteLabel: 'in.puma.com',
    badge: 'PU',
    color: '#14171C',
    category: 'fashion',
    markets: 'India — the Indian storefront; PUMA runs a separate site per country',
    blurb: 'Sportswear direct, with an outlet that undercuts most marketplace prices.',
    about: [
      'PUMA’s Indian storefront sells the full range direct, and — as with most sportswear brands — the outlet section rather than the coupon field is where the site actually discounts.',
      'The brand runs frequent site-wide events with an advertised percentage that applies without a code, plus a free loyalty programme that carries early access and member pricing. Public promo codes exist but are usually the smallest of the three levers.',
    ],
    offers: [
      {
        id: 'puma-outlet',
        kind: 'deal',
        value: '50%',
        title: 'Outlet — up to 50%+ off previous-season stock',
        detail:
          'Standing section, no code required. Best value on training and running lines where the update between seasons is cosmetic.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'puma-sitewide',
        kind: 'deal',
        value: 'Coupons',
        title: 'Recurring site-wide sale events',
        detail:
          'PUMA runs advertised percentage-off events several times a year that apply automatically. If you are within a few weeks of one, waiting beats coupon hunting.',
        checked: CHECKED,
      },
      {
        id: 'puma-membership',
        kind: 'deal',
        value: 'Member',
        title: 'Free membership with points and early access',
        detail:
          'The loyalty scheme returns points on orders and opens sales a day or two early, which matters on popular sizes.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Bundle deals beat percentage codes',
        body: 'PUMA leans on "buy two, get X% off" mechanics. On a two-item basket these routinely beat any single-item code.',
      },
      {
        title: 'The India site is not the global site',
        body: 'Pricing, stock and promotions are all country-specific. Nothing on this page applies to puma.com in another market.',
      },
      {
        title: 'Sizes go first, prices go second',
        body: 'In an outlet, waiting for a deeper cut usually costs you the size. Buy when your size appears at an acceptable price.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India (in.puma.com)' },
      { label: 'Returns', value: 'Commonly 30 days, unworn with tags' },
      { label: 'Membership', value: 'Free, points-based' },
      { label: 'Best section', value: 'Outlet' },
    ],
    faq: [
      {
        q: 'Can I use a PUMA code on outlet items?',
        a: 'Usually not — outlet pricing and coupon codes are alternatives, not layers. The exception is a site-wide event that explicitly includes outlet stock.',
      },
      {
        q: 'Does PUMA India ship abroad?',
        a: 'No. It is a domestic storefront. Use your own country’s PUMA site.',
      },
      {
        q: 'When are the biggest PUMA sales?',
        a: 'Around the end of each season and the major shopping festivals. The site advertises them prominently; you do not need a code to take part.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'timberland',
    name: 'Timberland',
    domain: 'timberland.com',
    siteLabel: 'timberland.com',
    badge: 'TB',
    color: '#5A4321',
    category: 'fashion',
    markets: 'UK, France, Germany, Italy, Spain, US and other country storefronts',
    blurb: 'Boots and outerwear direct, with a membership scheme worth more than most codes.',
    about: [
      'Timberland sells direct through a country storefront in each of its main markets. The product mix is boots, outerwear and workwear, and the price points are stable enough that the brand discounts by event rather than continuously.',
      'The lever most people miss is the free membership programme, which carries a standing welcome discount, points on every order and member-only sale access. On a single pair of boots that is normally worth more than any public code, which in this category tends to be a small first-order percentage with a long exclusion list.',
    ],
    offers: [
      {
        id: 'timberland-member',
        kind: 'deal',
        value: 'New customer',
        title: 'Free membership — welcome discount plus points on every order',
        detail:
          'Joining is free and the welcome benefit applies to a first order. Points then accrue against later purchases and member-only events open early.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'timberland-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Sale section, deeper at end of season',
        detail:
          'Outerwear discounts hardest in late winter, boots in spring. The sale section runs all year but the depth is seasonal.',
        checked: CHECKED,
      },
      {
        id: 'timberland-students',
        kind: 'deal',
        value: 'Student',
        title: 'Student discount via third-party verification',
        detail:
          'Available in several European markets through the usual student verification services. It applies to full-price stock and does not stack with sale pricing.',
        terms: 'Requires verification; excludes sale and some collaborations.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy the boots out of season',
        body: 'The classic silhouettes do not change. A spring purchase of a winter boot is the same product at a materially lower price.',
      },
      {
        title: 'Check your country storefront’s delivery threshold',
        body: 'Free delivery minimums differ across the European sites, and on a single-item order the postage can exceed the discount.',
      },
      {
        title: 'Membership before checkout',
        body: 'The welcome benefit is applied to a signed-in account. Sign up first; it takes a minute and cannot be applied retroactively.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UK, FR, DE, IT, ES, US and others, each with its own site' },
      { label: 'Returns', value: 'Commonly 30 days, unworn' },
      { label: 'Membership', value: 'Free, points plus welcome offer' },
      { label: 'Warranty', value: 'Manufacturing defects, per the brand’s own policy' },
    ],
    faq: [
      {
        q: 'Is there a Timberland student discount?',
        a: 'In several markets, yes, through the standard student verification platforms. It applies to full-price items only and cannot be combined with sale pricing.',
      },
      {
        q: 'Do codes work across country sites?',
        a: 'No. Each storefront issues its own, and a UK code will be rejected on the German site even though the page looks identical.',
      },
      {
        q: 'What is excluded from Timberland promotions?',
        a: 'Typically collaborations, limited editions and already-reduced stock. The exclusion list is on the promotion’s own terms page.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'new-balance',
    name: 'New Balance',
    domain: 'newbalance.com',
    siteLabel: 'newbalance.com',
    badge: 'NB',
    color: '#B3132C',
    category: 'fashion',
    markets: 'United States — the brand runs separate storefronts for other regions',
    blurb: 'Running and lifestyle shoes direct, where the outlet is the standing discount.',
    about: [
      'New Balance sells direct in the US alongside a large wholesale presence. The brand has spent the last few years in unusually high demand on the lifestyle side, which has one practical consequence: the popular silhouettes are almost never discounted, and the ones that are discounted are the ones nobody is queuing for.',
      'That makes the outlet section and the end-of-life colourways the honest answer to "New Balance promo code". Running shoes in particular follow a predictable cycle — a model gets a version bump, the previous version drops sharply, and the difference between them is usually a colour and a midsole tweak.',
    ],
    offers: [
      {
        id: 'nb-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet — previous-version running models at a real cut',
        detail:
          'The most reliable saving on the site. When a model number increments, the outgoing version lands here at a fraction of its launch price.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'nb-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme with points and member events',
        detail:
          'Points on every order plus member-only access to some releases. The release access matters more than the points if you want the popular colourways.',
        checked: CHECKED,
      },
      {
        id: 'nb-verified',
        kind: 'deal',
        value: 'Student',
        title: 'Student, military and first-responder discounts',
        detail:
          'New Balance runs verified-group discounts in the US through the usual third-party verification service. It applies to full-price stock.',
        terms: 'Requires verification; typically excludes collaborations and sale items.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy the outgoing version',
        body: 'A 1080v13 and a 1080v14 are not different shoes in any way you will feel on a run. The version gap is the discount.',
      },
      {
        title: 'Check Joe’s New Balance Outlet too',
        body: 'The brand’s dedicated outlet site carries stock the main site does not, at lower prices. We cover it separately.',
      },
      {
        title: 'Codes do not touch collaborations',
        body: 'Anything with a partner name on it is excluded from every discount the brand offers. There is no code for those.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States (newbalance.com)' },
      { label: 'Returns', value: 'Commonly 45 days, unworn' },
      { label: 'Loyalty', value: 'Free, points-based' },
      { label: 'Widths', value: 'Multiple widths — the reason to buy direct' },
    ],
    faq: [
      {
        q: 'Are there working New Balance promo codes?',
        a: 'Public site-wide codes are rare, because the brand does not need them. The verified-group discounts and the outlet are the real routes to a lower price.',
      },
      {
        q: 'Does the discount apply to the 990 and other made-in-USA models?',
        a: 'Usually not. The domestically made lines are excluded from most promotions and rarely enter the outlet.',
      },
      {
        q: 'Why buy direct rather than from a marketplace?',
        a: 'Width fittings. New Balance sells 2E and 4E widths direct that most resellers do not stock, and for anyone who needs them that is worth more than a discount.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'joes-new-balance-outlet',
    name: "Joe's New Balance Outlet",
    domain: 'joesnewbalanceoutlet.com',
    siteLabel: 'joesnewbalanceoutlet.com',
    badge: 'JNB',
    color: '#16294A',
    category: 'fashion',
    markets: 'United States',
    blurb: 'New Balance’s official outlet — the discount is the entire premise.',
    about: [
      'Joe’s is New Balance’s own outlet storefront, not a reseller. It carries overstock, previous seasons and discontinued colourways of shoes and apparel at prices the main site does not run.',
      'Because the site is built around clearance, coupon codes here behave differently from a full-price retailer: the interesting mechanic is the extra-percentage-off-clearance event, which layers on top of already-reduced prices, plus a shipping threshold that is easy to hit.',
    ],
    offers: [
      {
        id: 'joes-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Extra percentage off clearance during recurring events',
        detail:
          'The site regularly layers an additional cut over clearance pricing. That stack, not a code, is the lowest price New Balance stock reaches through official channels.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'joes-shipping',
        kind: 'deal',
        value: 'Outlet',
        title: 'Free US shipping over the order threshold',
        detail:
          'A low threshold, easily reached with two pairs. On a single-pair order the postage is a meaningful share of an outlet price.',
        checked: CHECKED,
      },
      {
        id: 'joes-email',
        kind: 'deal',
        value: 'New customer',
        title: 'Email signup offer for new customers',
        detail:
          'A first-order discount for new subscribers, applied to an already-discounted catalogue.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Filter by width first',
        body: 'Outlet stock is what is left. Setting the width and size filters before you browse saves you from falling for a shoe that does not exist in your fitting.',
      },
      {
        title: 'Final sale means final',
        body: 'Deep-clearance items are frequently non-returnable. Check the line on the product page before you buy an unfamiliar model.',
      },
      {
        title: 'Two pairs beat one',
        body: 'The shipping threshold and the event stacking both reward a larger basket, and outlet stock does not come back.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Operated by', value: 'New Balance (official outlet)' },
      { label: 'Returns', value: 'Standard returns except on final-sale items' },
      { label: 'Stock', value: 'Overstock, past seasons, discontinued colourways' },
    ],
    faq: [
      {
        q: 'Is Joe’s New Balance Outlet legitimate?',
        a: 'Yes — it is New Balance’s own outlet channel, so the shoes are genuine first-quality or clearly marked seconds, not marketplace stock of unknown origin.',
      },
      {
        q: 'Can I return an outlet purchase?',
        a: 'Normal purchases yes; items marked final sale, no. The distinction is on the product page and it is the thing to read before ordering an unfamiliar size.',
      },
      {
        q: 'How does this compare with the main New Balance site?',
        a: 'Lower prices, older stock, fewer sizes. If you want a current-season shoe in your exact size, buy direct; if you want the best price on a good shoe, start here.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'desigual',
    name: 'Desigual',
    domain: 'desigual.com',
    siteLabel: 'desigual.com',
    badge: 'DS',
    color: '#B31C28',
    category: 'fashion',
    markets: 'Poland, Spain, Germany, France, UK, Austria, Italy and the US',
    blurb: 'Spanish print-led fashion that discounts hard and often.',
    about: [
      'Desigual is a Barcelona label built on maximalist prints, sold direct through country storefronts across Europe and in the US. The aesthetic is polarising, which is relevant here: it means stock turns over into the sale section reliably and deeply.',
      'The brand discounts aggressively by season and layers extra percentages during its own events. Newsletter subscription carries a standing first-order benefit, and the loyalty programme returns value on repeat orders.',
    ],
    offers: [
      {
        id: 'desigual-sale',
        kind: 'deal',
        value: '50%',
        title: 'Seasonal sale, frequently to 50% and beyond',
        detail:
          'Desigual’s markdowns go deeper than most European high-street labels because the prints date quickly. The final reductions are the interesting ones.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'desigual-newsletter',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup discount for new customers',
        detail:
          'A first-order percentage for new subscribers on the storefront you sign up on. Codes are country-locked.',
        checked: CHECKED,
      },
      {
        id: 'desigual-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty scheme with private-sale access',
        detail:
          'Members get earlier entry to the sale, which on a brand with this much size variance is worth real money.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Sign up on the storefront you will buy from',
        body: 'A code issued on the Spanish site will not clear on the Polish one, even though both are desigual.com.',
      },
      {
        title: 'Sizing runs its own way',
        body: 'Read the garment measurements rather than assuming your usual size translates. Returns across borders are the expensive kind.',
      },
      {
        title: 'The second markdown is the real one',
        body: 'Desigual reduces the sale section more than once per season. Unless it is your size and your print, waiting for the second cut is usually right.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'PL, ES, DE, FR, UK, AT, IT, US' },
      { label: 'Returns', value: 'Commonly 30 days' },
      { label: 'Delivery', value: 'Free over a country-specific threshold' },
      { label: 'Origin', value: 'Barcelona' },
    ],
    faq: [
      {
        q: 'Do Desigual codes work in every country?',
        a: 'No. Codes are issued per storefront and validated against the market you are checking out in.',
      },
      {
        q: 'Can I combine a code with the sale?',
        a: 'Occasionally, during the brand’s own "extra off sale" events. Outside those, no.',
      },
      {
        q: 'How is Desigual sizing?',
        a: 'Inconsistent between lines, which is the main reason people return. Use the measurements table for the specific garment rather than the size letter.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'hello-molly',
    name: 'Hello Molly',
    domain: 'hellomolly.com',
    siteLabel: 'hellomolly.com',
    badge: 'HLM',
    color: '#1E1E1E',
    category: 'fashion',
    markets: 'Worldwide — Australian brand shipping internationally, USD storefront',
    blurb: 'Occasionwear label with a fast-moving sale rail and frequent site-wide events.',
    about: [
      'Hello Molly is an Australian label that sells going-out and occasion dresses internationally, mostly to a US and UK audience. It is a single-brand storefront rather than a marketplace, so the discounting is centrally controlled and reasonably predictable.',
      'The site runs frequent site-wide percentage events and a permanent sale section, and issues a first-order code to new subscribers. On occasionwear the timing question matters more than usual: styles sell through fast and do not come back, so the sale rail is genuinely last-chance rather than a permanent bargain bin.',
    ],
    offers: [
      {
        id: 'hellomolly-sale',
        kind: 'deal',
        value: '70%',
        title: 'Sale section — up to 70% off end-of-line styles',
        detail:
          'No code needed. Sizes disappear quickly here because the catalogue is dress-led and each style has a short run.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'hellomolly-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new email subscribers',
        detail: 'A standing welcome offer for new accounts, applied on full-price items.',
        terms: 'Normally excludes sale stock and cannot be stacked with an event discount.',
        checked: CHECKED,
      },
      {
        id: 'hellomolly-events',
        kind: 'deal',
        value: 'New customer',
        title: 'Recurring site-wide percentage events',
        detail:
          'The brand runs advertised sitewide events several times a quarter. When one is live it is normally better than the welcome code.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check the international shipping cost first',
        body: 'This is an Australian business shipping worldwide. Outside the US the postage and any duty can outweigh the discount on a single dress.',
      },
      {
        title: 'Returns are store credit in many cases',
        body: 'Read the returns policy for your country before ordering two sizes. A credit-only return changes the maths on "order both and send one back".',
      },
      {
        title: 'One code at a time',
        body: 'The checkout takes a single code. If an event is running, the event price is usually the better of the two.',
      },
    ],
    facts: [
      { label: 'Origin', value: 'Australia' },
      { label: 'Ships', value: 'Worldwide' },
      { label: 'Returns', value: 'Policy varies by market — credit in some cases' },
      { label: 'Catalogue', value: 'Occasion and going-out wear' },
    ],
    faq: [
      {
        q: 'Does Hello Molly ship internationally?',
        a: 'Yes, worldwide from Australia. Delivery time and cost vary a lot by destination and are quoted at checkout.',
      },
      {
        q: 'Can I stack the welcome code with the sale?',
        a: 'No. The welcome offer applies to full-price items and the checkout accepts one code.',
      },
      {
        q: 'Are returns free?',
        a: 'Not generally, and in some markets the refund is issued as store credit rather than to your card. Check the policy for your country before buying multiple sizes.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'kicks-crew',
    name: 'KICKS CREW',
    domain: 'kickscrew.com',
    siteLabel: 'kickscrew.com',
    badge: 'KC',
    color: '#141414',
    category: 'fashion',
    markets: 'Worldwide — ships internationally from Asian and US hubs',
    blurb: 'Sneaker marketplace with codes that actually apply, and authentication to check.',
    about: [
      'KICKS CREW is a sneaker marketplace sourcing from a network of sellers across Asia, the US and Europe. It sits between a retailer and a resale platform: prices on hyped models are below the resale market, and prices on general-release models are often below retail.',
      'Unlike most of this category it discounts by code routinely — a first-order code, app codes and event codes are all part of how the platform buys customers. What you trade for that is a longer delivery window, because stock is consolidated and authenticated before it ships to you.',
    ],
    offers: [
      {
        id: 'kickscrew-first',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new accounts',
        detail:
          'A standing new-customer offer, usually a percentage with a cap. On a single pair it is one of the more meaningful codes in sneakers.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'kickscrew-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive pricing and codes',
        detail:
          'A share of the platform’s promotional inventory only appears in the app. Worth installing before a purchase you have already decided on.',
        checked: CHECKED,
      },
      {
        id: 'kickscrew-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Sale rail on general-release stock',
        detail:
          'Non-hyped colourways sit well under retail here, before any code. That is where the platform is genuinely cheap.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Sizing is listed in several conventions',
        body: 'Check whether the listing is US, UK, EU or JP and whether it is men’s or women’s. Marketplace listings mix them and a wrong size is an international return.',
      },
      {
        title: 'Factor in the delivery window',
        body: 'Consolidation and authentication add days. If you need shoes for a date, this is not the channel.',
      },
      {
        title: 'Compare against retail before assuming',
        body: 'On general releases the brand’s own outlet is sometimes cheaper. The marketplace advantage is on models retail no longer carries.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Marketplace with authentication' },
      { label: 'Ships', value: 'Worldwide' },
      { label: 'Delivery', value: 'Longer than retail — allow for consolidation' },
      { label: 'Returns', value: 'Limited on marketplace stock — read per listing' },
    ],
    faq: [
      {
        q: 'Is KICKS CREW legit?',
        a: 'It is an established sneaker marketplace with an authentication step before dispatch. The risk here is not counterfeits so much as delivery time and a thin returns policy.',
      },
      {
        q: 'Do KICKS CREW promo codes work?',
        a: 'Yes — this is one of the few sneaker sellers where codes are a normal part of the pricing rather than a myth. First-order and app codes are the reliable ones.',
      },
      {
        q: 'Can I return shoes that do not fit?',
        a: 'Often not, or not without a fee. Read the returns terms on the specific listing before ordering, and get the size convention right first time.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'hm',
    name: 'H&M',
    domain: 'hm.com',
    siteLabel: 'hm.com',
    badge: 'H&M',
    color: '#B0121A',
    category: 'fashion',
    markets: 'Worldwide — country storefronts with their own pricing and membership scheme',
    blurb: 'High-street basics where membership points beat any public code.',
    about: [
      'H&M runs a country storefront in most of its markets, each with its own pricing, stock and loyalty programme. The catalogue is high-street basics plus a designer collaboration calendar that operates on completely different rules.',
      'The discounting model is membership-first. Joining is free and returns points that convert into money-off vouchers, plus member-only prices on a rotating selection and early access to sales. Public codes exist, mostly as a first-order percentage, and are country-locked.',
    ],
    offers: [
      {
        id: 'hm-member',
        kind: 'deal',
        value: 'Member',
        title: 'Free membership — points, member prices and early sale access',
        detail:
          'The standing discount at H&M. Points convert to vouchers automatically, and member prices apply on a rotating slice of the catalogue without any code.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'hm-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Sale section with recurring extra-percentage events',
        detail:
          'The sale runs continuously and the brand layers additional cuts over it at the end of each season.',
        checked: CHECKED,
      },
      {
        id: 'hm-recycle',
        kind: 'deal',
        value: 'Coupons',
        title: 'Garment-collecting voucher for bringing in old clothes',
        detail:
          'Handing a bag of any brand’s textiles to a store earns a voucher against your next purchase. It is the most reliably available discount H&M offers and it is not a code.',
        terms: 'In-store only, limited per visit, minimum spend applies to the voucher.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Points are per country',
        body: 'A membership balance does not travel between storefronts. If you have moved country, you have started again.',
      },
      {
        title: 'Collaborations are excluded from everything',
        body: 'The designer collections are exempt from member prices, codes and usually from returns extensions. Buy those on their own terms.',
      },
      {
        title: 'Online returns are often free to store',
        body: 'Returning in person avoids the postage fee most storefronts charge for a mailed return.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide, one storefront per country' },
      { label: 'Membership', value: 'Free, points-based' },
      { label: 'Returns', value: 'Commonly 30 days; in-store returns usually free' },
      { label: 'Excluded', value: 'Designer collaborations' },
    ],
    faq: [
      {
        q: 'Is there an H&M discount code that always works?',
        a: 'No. The membership scheme is the standing discount; public codes are country-locked, time-limited and usually first-order only.',
      },
      {
        q: 'Does the recycling voucher stack with member prices?',
        a: 'Generally yes — it is a voucher applied at the till rather than a percentage code, and it has its own minimum spend.',
      },
      {
        q: 'Can I use a code from another country?',
        a: 'No. Each storefront validates codes against its own market.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'victorias-secret',
    name: "Victoria's Secret",
    domain: 'victoriassecret.ae',
    siteLabel: 'victoriassecret.ae',
    badge: 'VS',
    color: '#B31459',
    category: 'fashion',
    markets: 'UAE and Saudi Arabia — this is the Gulf storefront, not the US site',
    blurb: 'Lingerie and beauty in the Gulf, discounted by multibuy rather than by code.',
    about: [
      'This is the Victoria’s Secret storefront for the UAE and Saudi Arabia, operated regionally rather than by the US business. Pricing is in AED and SAR, the catalogue is a subset of the global one, and the promotions are set locally.',
      'The pricing mechanic that matters is multibuy: "3 for" and "5 for" bundles on bras, panties and sleepwear are the standing discount, and they beat any percentage code on a basket of more than one item. Seasonal events add a site-wide percentage on top.',
    ],
    offers: [
      {
        id: 'vs-multibuy',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multibuy bundles on panties, bras and sleepwear',
        detail:
          'The core discount. A "5 for" bundle prices each item well below the single-unit price, and it applies without a code.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'vs-sale',
        kind: 'deal',
        value: 'Outlet',
        title: 'Semi-annual sale',
        detail:
          'The twice-yearly clearance is the deepest pricing of the year in this market and does not need a code.',
        checked: CHECKED,
      },
      {
        id: 'vs-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Signup offer for new customers',
        detail:
          'A welcome discount for new accounts on the Gulf storefront. Country-locked to AE/SA.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Build the bundle before applying anything',
        body: 'Multibuy pricing and percentage codes usually do not stack, and on three or more items the bundle is the larger discount.',
      },
      {
        title: 'This is not the US site',
        body: 'US codes, US loyalty and US returns do not apply here. Pricing and stock are set for the Gulf market.',
      },
      {
        title: 'Check the returns route',
        body: 'Regional operators handle returns differently from the US business. Confirm whether it is in-store, courier pickup or postal before you order two sizes.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UAE, Saudi Arabia' },
      { label: 'Currency', value: 'AED / SAR' },
      { label: 'Core discount', value: 'Multibuy bundles' },
      { label: 'Sale', value: 'Semi-annual' },
    ],
    faq: [
      {
        q: 'Can I use a US Victoria’s Secret code here?',
        a: 'No. The Gulf storefront is operated separately and validates codes against its own market.',
      },
      {
        q: 'Do bundles stack with a discount code?',
        a: 'Normally not. The basket applies one or the other, and on a multi-item order the bundle usually wins.',
      },
      {
        q: 'Which countries does this site deliver to?',
        a: 'The UAE and Saudi Arabia. Elsewhere in the Gulf, check the operator’s current delivery list at checkout.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'swarovski',
    name: 'Swarovski',
    domain: 'swarovski.com',
    siteLabel: 'swarovski.com',
    badge: 'SW',
    color: '#002F5F',
    category: 'fashion',
    markets: 'Worldwide — country storefronts with local pricing',
    blurb: 'Crystal jewellery that discounts by season, sparingly and predictably.',
    about: [
      'Swarovski sells direct worldwide through country storefronts. It is a brand that protects its price positioning, so the discounting is narrower than in most of fashion: a sale section, seasonal events, and a members’ club with early access.',
      'What that means practically is that the search for a "Swarovski promo code" is mostly answered by the sale calendar. When codes do appear they are welcome offers with exclusions on new collections and collaborations.',
    ],
    offers: [
      {
        id: 'swarovski-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Sale section on past collections',
        detail:
          'Standing discounts on retired lines, with the deepest cuts after the seasonal collection changes.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'swarovski-club',
        kind: 'deal',
        value: 'Member',
        title: 'Free membership with early sale access and a birthday offer',
        detail:
          'The club is free and carries early entry to sales plus a birthday-month benefit. On a brand that discounts rarely, early access is the useful part.',
        checked: CHECKED,
      },
      {
        id: 'swarovski-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter welcome offer for new customers',
        detail:
          'A first-order discount in most markets, excluding new collections and collaborations.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy the outgoing collection',
        body: 'Crystal jewellery does not date the way clothing does. The retired line at 40% off is the same product it was last season.',
      },
      {
        title: 'Check the local storefront’s price',
        body: 'Prices are set per market and the gap between two neighbouring countries can exceed any code.',
      },
      {
        title: 'Gift packaging is included',
        body: 'Do not pay for a gift-wrap upsell you were going to get anyway — check what the standard packaging already is.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide, per-country pricing' },
      { label: 'Returns', value: 'Commonly 14–30 days depending on market' },
      { label: 'Membership', value: 'Free club with early sale access' },
      { label: 'Warranty', value: 'Two years on manufacturing defects in most markets' },
    ],
    faq: [
      {
        q: 'Does Swarovski ever discount new collections?',
        a: 'Very rarely, and not by public code. New collections are excluded from essentially every promotion the brand runs.',
      },
      {
        q: 'When is the Swarovski sale?',
        a: 'After each seasonal collection change, with the deeper reductions later in the sale rather than at the start. Members are let in first.',
      },
      {
        q: 'Are online and in-store prices the same?',
        a: 'Usually within a market, but promotions differ — some events are online-only and some in-store-only. Check both if the piece is expensive.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'titan',
    name: 'Titan',
    domain: 'titan.co.in',
    siteLabel: 'titan.co.in',
    badge: 'TI',
    color: '#8E1728',
    category: 'fashion',
    markets: 'India only',
    blurb: 'India’s largest watch brand, discounted through bank offers and exchange.',
    about: [
      'Titan is the Tata group’s watch business and the dominant watch brand in India, selling its own labels alongside licensed international ones through a direct storefront.',
      'Discounting on watches follows the jewellery pattern rather than the fashion one: modest percentage sales, significant bank-card instant discounts at checkout, and an exchange programme that takes an old watch against a new one. The exchange is the lever most people ignore and it is usually the largest.',
    ],
    offers: [
      {
        id: 'titan-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at checkout',
        detail:
          'Rotating card-issuer offers applied at payment. On a watch-sized basket these are typically the biggest single reduction available.',
        terms: 'Card-specific and capped per transaction.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'titan-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive and end-of-season sale events',
        detail:
          'Titan runs percentage events around the Indian festive calendar. Those are the periods when the catalogue price itself moves.',
        checked: CHECKED,
      },
      {
        id: 'titan-exchange',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Exchange your old watch against a new one',
        detail:
          'The exchange programme credits an old watch of any brand toward a new purchase. Availability and value depend on the model and the channel.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compare the sub-brands',
        body: 'Titan, Fastrack and Sonata are the same company at three price points, and the movement inside a mid-range Fastrack is not meaningfully different from an entry Titan.',
      },
      {
        title: 'Check the warranty registration',
        body: 'The international warranty depends on buying through an authorised channel. Buying direct is how you keep it.',
      },
      {
        title: 'Watch the festive calendar',
        body: 'Discounting in India clusters around the festive season. Outside it, the catalogue price is close to fixed.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Owner', value: 'Tata group' },
      { label: 'Warranty', value: 'Manufacturer warranty on authorised purchases' },
      { label: 'Biggest lever', value: 'Bank offers and exchange, not codes' },
    ],
    faq: [
      {
        q: 'Do Titan promo codes stack with bank offers?',
        a: 'Frequently yes — the code applies in the basket and the bank discount at payment. Confirm on the payment page, since the caps interact.',
      },
      {
        q: 'Does Titan ship internationally?',
        a: 'The titan.co.in storefront serves India. International customers should use the brand’s local distributor.',
      },
      {
        q: 'Is the exchange programme worth using?',
        a: 'If you have an old watch sitting unused, yes — it is usually a larger reduction than any code, and the condition requirements are not strict.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'lenskart',
    name: 'Lenskart',
    domain: 'lenskart.com',
    siteLabel: 'lenskart.com',
    badge: 'LK',
    color: '#0B6E77',
    category: 'fashion',
    markets: 'India primarily, with storefronts in several other Asian markets',
    blurb: 'Eyewear priced as a bundle — the frame price is not the price.',
    about: [
      'Lenskart is the largest online eyewear retailer in India, selling frames, prescription lenses, sunglasses and contact lenses direct, with a large physical store network behind the website.',
      'The important thing about discounting here is that eyewear is sold as a bundle: the frame carries the advertised price and the lens package is the upsell. A code that discounts the frame and not the lens is a much smaller discount than it looks. The membership scheme and the buy-one-get-one mechanics operate on the total, which is why they are usually better.',
    ],
    offers: [
      {
        id: 'lenskart-bogo',
        kind: 'deal',
        value: 'Bundle',
        title: 'Buy-one-get-one and multi-pair bundles',
        detail:
          'The standing mechanic. A second pair at a nominal price is the cheapest way to own a spare, and it applies to the total rather than to the frame alone.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'lenskart-gold',
        kind: 'deal',
        value: 'Member',
        title: 'Paid membership with per-order discounts',
        detail:
          'The subscription tier discounts every order and includes lens benefits. It pays for itself inside one prescription purchase for most buyers.',
        terms: 'A paid tier — worth it only if you buy more than one pair a year.',
        checked: CHECKED,
      },
      {
        id: 'lenskart-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail:
          'A welcome offer for new accounts, typically on frames rather than on the lens package.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Price the lens, not the frame',
        body: 'Two frames at the same price can differ by a large amount once the lens index and coatings are chosen. Configure fully before comparing.',
      },
      {
        title: 'A home eye test is not a prescription check',
        body: 'The free home trial and test services are convenient, but if your prescription is complex, get it from an optometrist and enter it.',
      },
      {
        title: 'Membership before the first pair',
        body: 'If you are buying two pairs anyway, joining first is almost always cheaper than buying twice without it.',
      },
    ],
    facts: [
      { label: 'Primary market', value: 'India' },
      { label: 'Returns', value: 'Commonly 14 days on frames' },
      { label: 'Membership', value: 'Paid tier with per-order discounts' },
      { label: 'Watch out for', value: 'Lens package priced separately from the frame' },
    ],
    faq: [
      {
        q: 'Do Lenskart codes apply to lenses?',
        a: 'Often not. Many codes discount the frame only, and the lens package is where a large share of the cost sits. Read the terms before assuming a percentage applies to the total.',
      },
      {
        q: 'Is the Gold membership worth it?',
        a: 'For one cheap pair a year, no. For a prescription pair plus sunglasses, or for a family, it usually pays for itself on the first order.',
      },
      {
        q: 'Can I use my own prescription?',
        a: 'Yes — you enter it during configuration. Make sure you also have your pupillary distance, which some prescriptions omit.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'jtv',
    name: 'JTV',
    domain: 'jtv.com',
    siteLabel: 'jtv.com',
    badge: 'JTV',
    color: '#8A1E3C',
    category: 'fashion',
    markets: 'United States',
    blurb: 'Televised jewellery retail — the auction and the clearance are the real prices.',
    about: [
      'JTV — Jewelry Television — is a US jewellery retailer that sells through a 24-hour broadcast channel alongside its website, specialising in coloured gemstones at prices well below the mall jewellers. The catalogue is enormous and turns over constantly, which is the point of the format.',
      'That constant turnover is also how it discounts. Live auctions, daily doorbusters, a permanent clearance section and heavy end-of-line reductions do the work; a percentage code is a small layer on top. What deserves attention instead of the price is the stone description — treatment, origin and clarity are stated in the specification, and they are what separate two rings at the same figure.',
    ],
    offers: [
      {
        id: 'jtv-clearance',
        kind: 'deal',
        value: 'Clearance',
        title: 'Clearance and daily doorbuster pricing',
        detail:
          'The deepest reductions on the site, refreshed daily against the broadcast schedule. No code involved.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'jtv-auction',
        kind: 'deal',
        value: 'Sale',
        title: 'Live auctions below catalogue price',
        detail:
          'Items clear at whatever the room pays. Set a limit before you start, because the format is designed to make you exceed it.',
        checked: CHECKED_R2,
      },
      {
        id: 'jtv-finance',
        kind: 'deal',
        value: 'Long term',
        title: 'Instalment payment plans',
        detail:
          'Spreads a purchase over months. Not a discount — check whether interest applies before treating it as one.',
        checked: CHECKED_R2,
      },
      {
        id: 'jtv-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Email signup offer for new customers',
        detail: 'A first-order discount for new subscribers, with a minimum spend.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read the treatment line',
        body: 'Most coloured gemstones are treated, and JTV says so in the specification. It is the honest disclosure and it is what explains the price.',
      },
      {
        title: 'Know the return window before you bid',
        body: 'Auction purchases and standard purchases can be treated differently. Check which you are making.',
      },
      {
        title: 'Compare the metal weight, not the photo',
        body: 'Two similar-looking rings differ mostly in gold weight. That figure is in the specification and it is most of the cost.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Speciality', value: 'Coloured gemstone jewellery' },
      { label: 'Channels', value: 'Broadcast channel and website' },
      { label: 'Best value', value: 'Clearance and auctions' },
    ],
    faq: [
      {
        q: 'Is JTV jewellery real?',
        a: 'Yes — real metals and real stones, with treatments and clarity disclosed in the product specification. It is priced below mall jewellers because of the direct sourcing and the broadcast format, not because the goods are fake.',
      },
      {
        q: 'Are the auctions actually cheaper?',
        a: 'Frequently, on items with few bidders. On popular pieces the live format works against you — set a limit in advance.',
      },
      {
        q: 'Can I return a purchase?',
        a: 'Within the published window, subject to the item being unworn and complete. Check whether auction lots carry the same terms.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'g-star-raw',
    name: 'G-Star RAW',
    domain: 'g-star.com',
    siteLabel: 'g-star.com',
    badge: 'GS',
    color: '#1A1A1A',
    category: 'fashion',
    markets: 'Germany, France, Netherlands, US and other country storefronts',
    blurb: 'Dutch denim label that discounts on a hard seasonal cycle.',
    about: [
      'G-Star RAW is an Amsterdam denim brand selling direct through country storefronts across Europe and North America. The core of the catalogue is jeans, with jackets, knitwear and accessories around it.',
      'Denim ages slowly and the fits carry over between seasons, which makes the outlet section unusually good value here: last season’s wash of a fit that has not changed is the same trouser at a much lower price. The brand also runs a free membership with early sale access and a standing student discount in several markets.',
    ],
    offers: [
      {
        id: 'gstar-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet section on carried-over fits',
        detail:
          'Denim fits change slowly. A previous-season wash of a current cut is the best value on the site.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'gstar-member',
        kind: 'deal',
        value: 'Member',
        title: 'Free membership with early sale access',
        detail:
          'Joining costs nothing and opens the sale before it goes public, which matters on popular waist sizes.',
        checked: CHECKED_R2,
      },
      {
        id: 'gstar-student',
        kind: 'deal',
        value: 'Student',
        title: 'Student discount via verification',
        detail: 'Available in several European markets through the usual verification services.',
        terms: 'Full-price stock only; excludes sale.',
        checked: CHECKED_R2,
      },
      {
        id: 'gstar-seasonal',
        kind: 'deal',
        value: 'Sale',
        title: 'End-of-season sale with layered extra reductions',
        detail: 'Twice a year the site adds a further cut across already-reduced stock.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Learn your fit name, then shop by it',
        body: 'G-Star names its cuts and keeps them for years. Once you know yours, buying an older wash of the same fit is risk-free.',
      },
      {
        title: 'Sign up on the storefront you will buy from',
        body: 'Codes and member benefits are validated per country. A German code will not clear on the French site.',
      },
      {
        title: 'Raw denim needs different care',
        body: 'Not a discount, but the reason raw jeans get ruined in a year. Read the care label before the first wash.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'DE, FR, NL, US and other country sites' },
      { label: 'Returns', value: 'Commonly 30 days, unworn with tags' },
      { label: 'Membership', value: 'Free, with early sale access' },
      { label: 'Best value', value: 'Outlet on carried-over fits' },
    ],
    faq: [
      {
        q: 'Does G-Star have a student discount?',
        a: 'In several European markets, yes, through the standard verification platforms. It applies to full-price stock only.',
      },
      {
        q: 'Do codes work across country sites?',
        a: 'No. Each storefront issues and validates its own.',
      },
      {
        q: 'When is the sale?',
        a: 'End of each season, with a second, deeper reduction later in the run. Members are let in first.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'bewakoof',
    name: 'Bewakoof',
    domain: 'bewakoof.com',
    siteLabel: 'bewakoof.com',
    badge: 'BW',
    color: '#1F7A6B',
    category: 'fashion',
    markets: 'India only',
    blurb: 'Indian graphic-tee brand built entirely on membership pricing.',
    about: [
      'Bewakoof is an Indian direct-to-consumer clothing brand: printed t-shirts, joggers, hoodies and phone cases, with licensed pop-culture designs and a young audience. Everything is own-label, so it controls its own pricing completely.',
      'That control shows in the model. A paid membership tier discounts every order and unlocks member-only prices across the catalogue, and it is pushed harder than any coupon. Combine that with the near-permanent multibuy mechanics — buy two, buy three — and the per-item price for a member buying in bulk is a long way below the listed one.',
    ],
    offers: [
      {
        id: 'bewakoof-membership',
        kind: 'deal',
        value: 'Member',
        title: 'Paid membership with member-only pricing',
        detail:
          'Discounts every order plus free shipping. On two or three orders a year it pays for itself easily.',
        terms: 'An annual fee — worth it only if you buy here more than once.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'bewakoof-multibuy',
        kind: 'deal',
        value: 'Bundle',
        title: 'Buy-two and buy-three pricing across the catalogue',
        detail:
          'The per-item price falls sharply on a multi-item basket. This is the standing mechanic, not an event.',
        checked: CHECKED_R2,
      },
      {
        id: 'bewakoof-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive drops and coupons',
        detail: 'A share of the promotional inventory appears only in the app.',
        checked: CHECKED_R2,
      },
      {
        id: 'bewakoof-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring site-wide sale events',
        detail: 'Frequent advertised events, deepest around the Indian festive calendar.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Do the membership arithmetic first',
        body: 'It is a paid tier. Two orders a year and it wins; one order and it does not.',
      },
      {
        title: 'Build to the multibuy threshold',
        body: 'Three tees at the bundle price is often cheaper than two at the single price. Check both totals.',
      },
      {
        title: 'Print quality varies by line',
        body: 'The licensed and premium ranges wash better than the entry tees. Read recent reviews on the specific product.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Model', value: 'Own-label direct to consumer' },
      { label: 'Membership', value: 'Paid tier with per-order discounts' },
      { label: 'Returns', value: 'Standard window; check on discounted stock' },
    ],
    faq: [
      {
        q: 'Is the Bewakoof membership worth it?',
        a: 'If you buy here more than once a year, yes — it discounts every order and includes shipping. For a single purchase it is not.',
      },
      {
        q: 'Do Bewakoof coupons stack with membership pricing?',
        a: 'Usually the basket applies whichever is larger rather than both. Compare the two totals before paying.',
      },
      {
        q: 'Does it ship outside India?',
        a: 'No. It is a domestic brand.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'patpat',
    name: 'PatPat',
    domain: 'patpat.com',
    siteLabel: 'patpat.com',
    badge: 'PP',
    color: '#B02A5C',
    category: 'fashion',
    markets: 'Worldwide, with country storefronts and local currencies',
    blurb: 'Family and kids clothing at low unit prices, built on stacked app coupons.',
    about: [
      'PatPat sells children’s and family clothing — including the matching-outfit sets it is known for — direct to consumers worldwide at very low unit prices, shipping cross-border.',
      'The pricing works the way the ultra-fast-fashion platforms work: a first-order allowance, a coupon wallet, points for reviews, and cart-level thresholds that stack. Sizing runs small and inconsistently between lines, and returns across a border on a low-value item rarely make financial sense — which makes reading the size reviews the highest-value thing you can do here.',
    ],
    offers: [
      {
        id: 'patpat-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'New-customer discount on the first order',
        detail: 'Applied in the basket for new accounts and normally the largest single reduction.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'patpat-wallet',
        kind: 'deal',
        value: 'Coupons',
        title: 'Coupon wallet — select before you check out',
        detail:
          'Several coupons can be live at once with different minimums. The checkout does not pick the best one for you.',
        checked: CHECKED_R2,
      },
      {
        id: 'patpat-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Cart thresholds and multi-item pricing',
        detail:
          'Free shipping and extra percentages unlock at spend levels. Consolidating a season’s buying into one order is the efficient move.',
        checked: CHECKED_R2,
      },
      {
        id: 'patpat-points',
        kind: 'deal',
        value: 'Credits',
        title: 'Points for reviews and daily check-in',
        detail: 'Convert to money off. Photo reviews are the highest-yield action per minute.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Size up, and read the photo reviews',
        body: 'Sizing runs small. Customer photos with the child’s height are a better predictor than the chart.',
      },
      {
        title: 'One order per season',
        body: 'Cross-border shipping and cart thresholds both reward consolidation, and delivery is slow enough that splitting gains nothing.',
      },
      {
        title: 'Treat returns as unavailable',
        body: 'Return postage on a low-value cross-border item usually exceeds the refund. Buy accordingly.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide, country storefronts' },
      { label: 'Delivery', value: 'Cross-border — allow weeks, not days' },
      { label: 'Pricing', value: 'Stacked coupons, points, cart thresholds' },
      { label: 'Sizing', value: 'Runs small; check reviews' },
    ],
    faq: [
      {
        q: 'Do PatPat coupons stack?',
        a: 'A first-order allowance, a wallet coupon and a cart threshold generally combine. Two percentage coupons generally do not.',
      },
      {
        q: 'How long does delivery take?',
        a: 'Weeks rather than days on standard shipping. If it is for an occasion, order well ahead or buy elsewhere.',
      },
      {
        q: 'Will I pay customs?',
        a: 'Above your country’s threshold, likely. Price the order with duty included before deciding it is cheap.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'stradivarius',
    name: 'Stradivarius',
    domain: 'stradivarius.com',
    siteLabel: 'stradivarius.com',
    badge: 'ST',
    color: '#1A1A1A',
    category: 'fashion',
    markets: 'France for this storefront; Stradivarius runs a site per country',
    blurb: 'Inditex high street label — the sale is the discount and it is twice a year.',
    about: [
      'Stradivarius is one of the Inditex brands, sitting alongside Zara and Bershka with a younger, trend-led women’s catalogue at lower price points. Each country has its own storefront, stock and promotional calendar.',
      'Inditex brands do not run a coupon economy — that is the single most useful thing to know here. There is no welcome code, no loyalty percentage and no rolling promotion. There are two seasonal sales a year, deep ones, plus free in-store returns and free delivery to a shop. Anyone offering you a Stradivarius promo code is almost certainly offering you nothing.',
    ],
    offers: [
      {
        id: 'stradivarius-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Twice-yearly seasonal sale',
        detail:
          'The entire discount strategy. Deep, scheduled, and applied without any code — with a second markdown later in the run.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'stradivarius-delivery',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free delivery and returns to a store',
        detail:
          'Collecting and returning in a shop avoids the postage charges on both legs, which on fashion ordering is the recurring cost.',
        checked: CHECKED_R2,
      },
      {
        id: 'stradivarius-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-first access to sale and new drops',
        detail:
          'The app opens the sale slightly ahead and holds stock alerts. On a brand where sizes vanish quickly that is the practical advantage.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Stop looking for a code',
        body: 'Inditex brands do not issue them. The sale calendar is the discount, and it is public.',
      },
      {
        title: 'Return in store, not by post',
        body: 'Postal returns are charged in many markets; store returns are not. On a three-size order that is the whole saving.',
      },
      {
        title: 'The second markdown is where the value is',
        body: 'Prices drop again a few weeks into each sale, on whatever is left.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'France (stradivarius.com); a site per country' },
      { label: 'Group', value: 'Inditex' },
      { label: 'Promo codes', value: 'Not part of how Inditex prices' },
      { label: 'Returns', value: 'Free in store; postal returns may be charged' },
    ],
    faq: [
      {
        q: 'Is there a Stradivarius promo code?',
        a: 'No. Inditex brands do not run coupon promotions. The seasonal sale is the discount, and it needs nothing typed at checkout.',
      },
      {
        q: 'When is the Stradivarius sale?',
        a: 'Twice a year at the end of each season, with a further reduction a few weeks in.',
      },
      {
        q: 'Are returns free?',
        a: 'In store, yes. Postal returns carry a fee in a number of markets — check on your own country’s site.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'lilysilk',
    name: 'LILYSILK',
    domain: 'lilysilk.com',
    siteLabel: 'lilysilk.com',
    badge: 'LS',
    color: '#7A5C3A',
    category: 'fashion',
    markets: 'US, Canada, UK, Germany, France, Japan and other markets',
    blurb: 'Mulberry silk clothing and bedding, discounted almost continuously.',
    about: [
      'LILYSILK sells silk clothing, sleepwear and bedding direct, positioned between the mass market and the luxury houses. The specification that matters is momme weight — a measure of silk density printed on every product — because it is what separates a pillowcase that lasts five years from one that shreds in one.',
      'Commercially it behaves like a direct-to-consumer brand: a first-order code, frequent site-wide events, a rewards programme and bundle pricing on bedding sets. Something is nearly always running, so the list price is an anchor rather than a price.',
    ],
    offers: [
      {
        id: 'lilysilk-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Near-continuous site-wide events',
        detail:
          'Advertised percentage campaigns run most weeks. Paying the listed price is unnecessary.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'lilysilk-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new subscribers',
        detail: 'A welcome code for new accounts, applied on full-price items.',
        checked: CHECKED_R2,
      },
      {
        id: 'lilysilk-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bedding set bundles below the pieces',
        detail:
          'A sheet, duvet cover and pillowcases bought as a set costs meaningfully less than separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'lilysilk-rewards',
        kind: 'deal',
        value: 'Member',
        title: 'Rewards programme with points on orders',
        detail: 'Points convert to credit; worthwhile on a brand people buy from repeatedly.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare by momme, not by price',
        body: 'A 19-momme and a 25-momme pillowcase are different products. The heavier one costs more and lasts longer; the lighter one is where "cheap silk" comes from.',
      },
      {
        title: 'Wait a week if nothing is running',
        body: 'Site-wide events are frequent enough that patience is the reliable discount.',
      },
      {
        title: 'Silk care is a running cost',
        body: 'Machine washing on the wrong cycle ruins it. Factor in either careful washing or dry cleaning.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, CA, UK, DE, FR, JP and others' },
      { label: 'Key spec', value: 'Momme weight — printed on every product' },
      { label: 'Returns', value: 'Standard window; check on bedding' },
      { label: 'Discounting', value: 'Near-continuous' },
    ],
    faq: [
      {
        q: 'Is LILYSILK real mulberry silk?',
        a: 'Yes, and it publishes the momme weight per product, which is the number that tells you what you are buying. Compare that rather than the price.',
      },
      {
        q: 'Should I wait for a sale?',
        a: 'You rarely have to wait long — something is usually running. If nothing is, a fortnight is normally enough.',
      },
      {
        q: 'Can I machine wash it?',
        a: 'Some items, on a delicate cycle in a bag with the right detergent. Read the care label; this is where expensive silk gets destroyed.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'chicme',
    name: 'ChicMe',
    domain: 'chicme.com',
    siteLabel: 'chicme.com',
    badge: 'CM',
    color: '#B0246B',
    category: 'fashion',
    markets: 'Worldwide, cross-border shipping',
    blurb: 'Ultra-cheap fast fashion where the coupon stack is the pricing model.',
    about: [
      'ChicMe is a cross-border fast-fashion platform selling women’s clothing at very low unit prices, shipping worldwide from Asia. The catalogue turns over constantly and the photography is aspirational in the way this segment always is.',
      'Its pricing is a coupon stack rather than a price list: a new-customer allowance, a wallet of collectable coupons, points, flash timers and cart-level thresholds. What you trade for the prices is delivery time, sizing that runs small, and returns that rarely make financial sense across a border — so buy as if the item is final sale, because in practice it is.',
    ],
    offers: [
      {
        id: 'chicme-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'New-customer allowance on the first order',
        detail: 'The largest single discount available on the platform, once per account.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'chicme-wallet',
        kind: 'deal',
        value: 'Coupons',
        title: 'Collectable coupon wallet',
        detail:
          'Coupons must be selected in the basket. Holding three and having the checkout apply the smallest is the common mistake.',
        checked: CHECKED_R2,
      },
      {
        id: 'chicme-threshold',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free shipping over the cart threshold',
        detail: 'Below it, international postage is a large share of a cheap basket.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy as if returns do not exist',
        body: 'Cross-border return postage on a low-value garment exceeds the refund. Size carefully the first time.',
      },
      {
        title: 'Photo reviews over the size chart',
        body: 'Customer photos with height and measurements are the only reliable fit signal in this segment.',
      },
      {
        title: 'Ignore the countdown timers',
        body: 'They reset. The coupon wallet and the cart threshold are the real mechanics.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Cross-border fast fashion' },
      { label: 'Delivery', value: 'Weeks on standard shipping' },
      { label: 'Pricing', value: 'Stacked coupons and thresholds' },
      { label: 'Returns', value: 'Impractical internationally' },
    ],
    faq: [
      {
        q: 'Is ChicMe legit?',
        a: 'Orders arrive and the platform processes payments normally. The complaints in this segment are about fit, fabric and delivery time rather than about the money.',
      },
      {
        q: 'How does the sizing run?',
        a: 'Small, and inconsistently between items. Read the measurements on the specific product rather than trusting the letter size.',
      },
      {
        q: 'Can I return something?',
        a: 'In principle. In practice the postage back across a border usually costs more than the garment.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'stylewe',
    name: 'Stylewe',
    domain: 'stylewe.com',
    siteLabel: 'stylewe.com',
    badge: 'SW',
    color: '#3A3A44',
    category: 'fashion',
    markets: 'Worldwide, shipping cross-border',
    blurb: 'Independent-designer womenswear marketplace with permanent promotions.',
    about: [
      'Stylewe sells women’s clothing from a roster of independent designers, positioned above the ultra-cheap platforms on price and on cut. The range leans towards workwear, dresses and outerwear rather than trend pieces.',
      'It discounts continuously — site-wide events, first-order codes, tiered cart discounts — so the listed price is rarely what anyone pays. Because the garments come from many different makers, sizing consistency is the weak point: two items in the same basket can fit quite differently.',
    ],
    offers: [
      {
        id: 'stylewe-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Continuous site-wide percentage events',
        detail:
          'Something is nearly always running. Buying between campaigns is paying the anchor.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'stylewe-tiered',
        kind: 'deal',
        value: 'Bundle',
        title: 'Tiered cart discounts by spend',
        detail: 'Extra percentages unlock at basket thresholds, on top of the item discount.',
        checked: CHECKED_R2,
      },
      {
        id: 'stylewe-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order code for new accounts',
        detail: 'A welcome discount applied at checkout for new customers.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check measurements per item, not per size',
        body: 'Different designers, different blocks. The garment measurement table is the only reliable guide.',
      },
      {
        title: 'Build to the next cart tier',
        body: 'The threshold discounts are large enough that one more item can reduce the total.',
      },
      {
        title: 'Allow for delivery time',
        body: 'Cross-border shipping means weeks. Not a channel for a dress you need this month.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Independent-designer marketplace' },
      { label: 'Shipping', value: 'Cross-border, worldwide' },
      { label: 'Pricing', value: 'Continuous events plus cart tiers' },
      { label: 'Weak point', value: 'Sizing consistency between designers' },
    ],
    faq: [
      {
        q: 'Is Stylewe better quality than the ultra-cheap platforms?',
        a: 'Generally yes, and priced accordingly. It is still cross-border direct shipping, so delivery time and returns work the same way.',
      },
      {
        q: 'Do the discounts stack?',
        a: 'A site-wide event and a cart-tier discount generally combine. Two codes do not.',
      },
      {
        q: 'How do returns work?',
        a: 'Possible but international. Read the policy for your country before ordering more than one size.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'justfashionnow',
    name: 'JustFashionNow',
    domain: 'justfashionnow.com',
    siteLabel: 'justfashionnow.com',
    badge: 'JFN',
    color: '#8A4A2A',
    category: 'fashion',
    markets: 'Worldwide, cross-border shipping',
    blurb: 'Cross-border womenswear with permanent sales — read the reviews per item.',
    about: [
      'JustFashionNow is a cross-border women’s fashion platform selling dresses, tops and outerwear from a mix of suppliers, shipping worldwide. It sits in the same segment as Stylewe and ChicMe: low to mid prices, aspirational photography, long delivery windows.',
      'Discounting is permanent rather than event-driven, so the mechanics matter less than the buying discipline. In this segment, the difference between a good purchase and a bad one is almost entirely whether you read the customer photos on that specific product before ordering.',
    ],
    offers: [
      {
        id: 'justfashionnow-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Permanent sale and clearance pricing',
        detail:
          'The listed "was" price is an anchor. Judge against what the item sells for weekly.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'justfashionnow-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new accounts',
        detail: 'A welcome code applied in the basket for new customers.',
        checked: CHECKED_R2,
      },
      {
        id: 'justfashionnow-threshold',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free shipping above the cart minimum',
        detail: 'Worth building to, since international postage is a large fixed cost.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Customer photos or nothing',
        body: 'Studio images in this segment are unreliable. If an item has no customer photos, treat it as an unknown.',
      },
      {
        title: 'Check the fabric line',
        body: 'Polyester and linen at the same price look identical in a photograph and are not the same purchase.',
      },
      {
        title: 'Order once, not three times',
        body: 'Shipping and thresholds both reward one basket, and returns are impractical either way.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Cross-border fashion platform' },
      { label: 'Delivery', value: 'Weeks on standard shipping' },
      { label: 'Pricing', value: 'Permanent discounting' },
      { label: 'Returns', value: 'International — usually uneconomic' },
    ],
    faq: [
      {
        q: 'Is JustFashionNow reliable?',
        a: 'Orders arrive. The recurring complaints are fit, fabric weight and delivery time, which is normal for the segment and is what the customer photos are for.',
      },
      {
        q: 'Are the "was" prices real?',
        a: 'Treat them as anchors rather than as a price the item recently sold at. Judge the deal against the usual selling price instead.',
      },
      {
        q: 'How long is delivery?',
        a: 'Typically two to four weeks on standard shipping. Faster options cost enough to change the value calculation.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'italo-jewelry',
    name: 'Italo Jewelry',
    domain: 'italojewelry.com',
    siteLabel: 'italojewelry.com',
    badge: 'IJ',
    color: '#8A6B2A',
    category: 'fashion',
    markets: 'Worldwide',
    blurb: 'Affordable engagement and occasion jewellery in lab stones and silver.',
    about: [
      'Italo Jewelry sells engagement rings, wedding sets and occasion jewellery at a fraction of traditional jeweller prices, using sterling silver and lab-created or simulated stones rather than mined diamonds.',
      'That substitution is the entire proposition and it should be stated plainly: these are not mined-diamond rings, and the listings say so in the specification. For a proposal on a budget, a travel ring or a piece worn a few times a year, that trade is reasonable. For an heirloom it is not, and no discount changes that.',
    ],
    offers: [
      {
        id: 'italo-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Permanent site-wide discounting',
        detail:
          'Percentage events run essentially continuously. The struck-through price is an anchor.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'italo-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bridal set pricing below the pieces',
        detail: 'Engagement ring and band bought together costs less than separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'italo-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new subscribers',
        detail: 'A welcome code on a first purchase.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read what the stone actually is',
        body: 'Lab-created, moissanite and cubic zirconia are three different things at three price points. The specification says which.',
      },
      {
        title: 'Silver needs maintenance',
        body: 'Sterling tarnishes and rhodium plating wears. Budget for re-plating if it is worn daily.',
      },
      {
        title: 'Get the size right first time',
        body: 'Resizing a plated silver ring is often not worth doing. Measure properly before ordering.',
      },
    ],
    facts: [
      { label: 'Materials', value: 'Sterling silver, lab-created and simulated stones' },
      { label: 'Not', value: 'Mined diamonds' },
      { label: 'Shipping', value: 'Worldwide' },
      { label: 'Discounting', value: 'Permanent' },
    ],
    faq: [
      {
        q: 'Are Italo Jewelry rings real diamonds?',
        a: 'No — they use lab-created or simulated stones, which the listings state. That is why they cost what they cost, and it is a reasonable trade for some purchases and a bad one for others.',
      },
      {
        q: 'Will the ring tarnish?',
        a: 'Sterling silver does, and plating wears with daily use. It is a maintenance question rather than a defect.',
      },
      {
        q: 'Is the sale price real?',
        a: 'The site discounts permanently, so treat the crossed-out figure as an anchor and judge against the usual selling price.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'tanishq',
    name: 'Tanishq',
    domain: 'tanishq.co.in',
    siteLabel: 'tanishq.co.in',
    badge: 'TQ',
    color: '#8A1E3C',
    category: 'fashion',
    markets: 'India only',
    blurb: 'Tata’s jewellery house, where the making charge is the negotiable part.',
    about: [
      'Tanishq is the Tata group’s jewellery brand and the largest organised jeweller in India, selling gold and diamond jewellery through a national store network and online with certified purity.',
      'Gold jewellery pricing has three components: the metal at the day’s rate, the making charge, and tax. The metal rate is the same everywhere; the making charge is where jewellers compete and where promotions apply. Almost every Tanishq offer is a making-charge reduction rather than a discount on gold, and understanding that is the difference between comparing offers properly and not.',
    ],
    offers: [
      {
        id: 'tanishq-making',
        kind: 'deal',
        value: 'Sale',
        title: 'Making-charge reductions during campaigns',
        detail:
          'The standard mechanic. Gold is priced at the day’s rate; the promotion applies to the craftsmanship charge on top.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'tanishq-exchange',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Gold exchange against a new purchase',
        detail:
          'Old gold is assessed for purity and credited. On a family with unworn jewellery this is by far the largest lever.',
        checked: CHECKED_R2,
      },
      {
        id: 'tanishq-savings',
        kind: 'deal',
        value: 'Long term',
        title: 'Monthly savings scheme toward a purchase',
        detail:
          'Pay in instalments across several months and receive a benefit at maturity. Read the terms — it is a commitment, not a discount.',
        checked: CHECKED_R2,
      },
      {
        id: 'tanishq-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive-season campaigns',
        detail: 'The deepest promotions of the year cluster around the Indian festive calendar.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare making charges, not headline prices',
        body: 'Two jewellers quoting different totals on the same weight are competing on the making charge. That is the number to ask for.',
      },
      {
        title: 'Exchange old gold before buying new',
        body: 'Unworn jewellery sitting in a locker is the cheapest funding available for a new purchase.',
      },
      {
        title: 'Keep the certificate and the invoice',
        body: 'Purity certification and the original bill determine what you get back on a future exchange.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Owner', value: 'Tata group' },
      { label: 'Price components', value: 'Gold rate + making charge + tax' },
      { label: 'Biggest lever', value: 'Gold exchange' },
    ],
    faq: [
      {
        q: 'Do Tanishq offers discount the gold price?',
        a: 'Essentially never. Gold is sold at the prevailing rate; promotions reduce the making charge. Any offer described as a discount on gold deserves a second look.',
      },
      {
        q: 'Is the savings scheme worth joining?',
        a: 'It commits you to monthly payments toward a future purchase in exchange for a benefit at maturity. Read the terms carefully — it is a financial commitment, not a coupon.',
      },
      {
        q: 'Can I buy from outside India?',
        a: 'This storefront serves India. The group operates separately in some other markets.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'fastrack',
    name: 'Fastrack',
    domain: 'fastrack.in',
    siteLabel: 'fastrack.in',
    badge: 'FT',
    color: '#1A1A1A',
    category: 'fashion',
    markets: 'India only',
    blurb: 'Titan’s youth watch and eyewear brand, discounted hard and often.',
    about: [
      'Fastrack is the Titan group’s youth-oriented brand: watches, smartwatches, sunglasses, bags and accessories at price points well below the parent brand. Same company, different customer.',
      'Because the products are impulse-priced rather than considered purchases, the discounting is far more aggressive than at Titan: frequent site-wide events, bank offers at checkout and multibuy mechanics on accessories. On the smartwatch side it is worth comparing against the specialist Indian wearables brands before buying on brand alone.',
    ],
    offers: [
      {
        id: 'fastrack-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Frequent site-wide percentage events',
        detail: 'Advertised campaigns run most months, deepest around the festive season.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'fastrack-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail: 'Card-issuer offers applied after the item discount, capped per transaction.',
        checked: CHECKED_R2,
      },
      {
        id: 'fastrack-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multibuy on sunglasses and accessories',
        detail: 'Buy-two mechanics run regularly on the accessory lines.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the smartwatches on specification',
        body: 'The Indian wearables market is crowded and competes hard. Buy on the sensor set and the app, not the brand.',
      },
      {
        title: 'Check the warranty channel',
        body: 'Buying direct keeps the manufacturer warranty straightforward. Marketplace listings sometimes do not.',
      },
      {
        title: 'Festive season is the annual low',
        body: 'If the purchase can wait a few weeks in autumn, it should.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Parent', value: 'Titan (Tata group)' },
      { label: 'Catalogue', value: 'Watches, smartwatches, eyewear, bags' },
      { label: 'Discounting', value: 'Frequent and deep' },
    ],
    faq: [
      {
        q: 'Is Fastrack the same as Titan?',
        a: 'Same company, different brand and a much lower price point. Fastrack discounts far more aggressively than Titan does.',
      },
      {
        q: 'Do bank offers stack with the sale price?',
        a: 'Usually yes — the sale price applies in the basket and the bank discount at payment. Check the payment page.',
      },
      {
        q: 'Are the smartwatches any good?',
        a: 'Competitive at the price, in a market with a lot of similar options. Compare the specification against the specialist brands before deciding.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'foot-locker-gulf',
    name: 'Foot Locker',
    domain: 'footlocker.ae',
    siteLabel: 'footlocker.ae',
    badge: 'FL',
    color: '#B0161E',
    category: 'fashion',
    markets: 'UAE, Saudi Arabia and Kuwait — the Gulf storefront, not the US site',
    blurb: 'Sneaker retail in the Gulf, where the loyalty app carries the offers.',
    about: [
      'This is Foot Locker’s Gulf storefront, operated regionally for the UAE, Saudi Arabia and Kuwait rather than by the US business. It carries the major sneaker brands with regional pricing in AED, SAR and KWD.',
      'Multi-brand sneaker retail discounts differently from a brand’s own store: the retailer cannot cut a launch price, so it competes on loyalty points, seasonal clearance on older colourways, and app-exclusive releases. Anything on a launch calendar is excluded from every promotion, as it is everywhere in this category.',
    ],
    offers: [
      {
        id: 'footlocker-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme with points and early access',
        detail:
          'Points on every order plus entry to limited releases. The release access is worth more than the points.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'footlocker-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal clearance on previous colourways',
        detail:
          'Where a multi-brand retailer can actually cut prices — last season’s colours of current silhouettes.',
        checked: CHECKED_R2,
      },
      {
        id: 'footlocker-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive drops and offers',
        detail: 'Limited releases and a share of the promotional inventory are app-only.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'This is not the US site',
        body: 'US Foot Locker codes, loyalty balances and returns do not apply. Pricing and stock are set for the Gulf.',
      },
      {
        title: 'Launch stock is never discounted',
        body: 'Anything with a release date is excluded from every promotion. Buy those at price or not at all.',
      },
      {
        title: 'Check sizing convention',
        body: 'Gulf listings mix US, UK and EU sizing across brands. Confirm which one the listing uses.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UAE, Saudi Arabia, Kuwait' },
      { label: 'Currency', value: 'AED / SAR / KWD' },
      { label: 'Loyalty', value: 'Free, points plus release access' },
      { label: 'Excluded', value: 'Launch and limited releases' },
    ],
    faq: [
      {
        q: 'Can I use a US Foot Locker code here?',
        a: 'No. The Gulf storefront is operated separately with its own pricing and promotions.',
      },
      {
        q: 'Is the loyalty programme worth joining?',
        a: 'Yes, because it is free and because access to limited releases is the part that actually matters in sneakers.',
      },
      {
        q: 'Which countries does it deliver to?',
        a: 'The UAE, Saudi Arabia and Kuwait. Delivery fees and thresholds differ between them.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'humanic',
    name: 'Humanic',
    domain: 'humanic.net',
    siteLabel: 'humanic.net',
    badge: 'HU',
    color: '#B0161E',
    category: 'fashion',
    markets: 'Austria, Germany, Czechia and Slovakia',
    blurb: 'Central European shoe chain with a hard seasonal clearance.',
    about: [
      'Humanic is a long-established shoe retailer across Austria, Germany, Czechia and Slovakia, selling its own labels alongside mainstream brands from a large store network and online.',
      'Footwear retail in this region runs on a strict seasonal cycle: winter boots clear in February, sandals in August, and the reductions are steep because the stock cannot be held for a year. A free loyalty card adds points and early sale access on top. Codes exist but they are the smallest of the three levers.',
    ],
    offers: [
      {
        id: 'humanic-seasonal',
        kind: 'deal',
        value: 'Sale',
        title: 'End-of-season clearance',
        detail:
          'Deep reductions when the season turns, with a second markdown on what is left. The annual low.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'humanic-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty card with points and early sale access',
        detail:
          'Costs nothing and opens the sale before it goes public, which matters on common sizes.',
        checked: CHECKED_R2,
      },
      {
        id: 'humanic-store',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free delivery and returns to a store',
        detail:
          'On shoes, where two sizes are often ordered, avoiding return postage is the recurring saving.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy boots in February',
        body: 'Winter footwear does not change year to year. Buying at the end of the season is the same product at a fraction of the price.',
      },
      {
        title: 'Return in store',
        body: 'Ordering two sizes only makes sense if sending one back is free. In store it is.',
      },
      {
        title: 'Check which country site you are on',
        body: 'Prices, stock and promotions differ across the four markets.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Austria, Germany, Czechia, Slovakia' },
      { label: 'Loyalty', value: 'Free card with early sale access' },
      { label: 'Returns', value: 'Free in store' },
      { label: 'Best value', value: 'End-of-season clearance' },
    ],
    faq: [
      {
        q: 'When is the Humanic sale?',
        a: 'At the end of each season — winter stock from February, summer stock from August — with a further markdown later in the run.',
      },
      {
        q: 'Are online and in-store prices the same?',
        a: 'Usually within a country, though some promotions are channel-specific. Worth checking both on an expensive pair.',
      },
      {
        q: 'Does it ship outside those four countries?',
        a: 'Generally not. It is a regional chain.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'answear',
    name: 'Answear',
    domain: 'answear.ua',
    siteLabel: 'answear.ua',
    badge: 'AN',
    color: '#1A1A1A',
    category: 'fashion',
    markets: 'Ukraine for this storefront; Answear operates across Central and Eastern Europe',
    blurb: 'Multi-brand fashion platform with a loyalty club and constant promotions.',
    about: [
      'Answear is a Central and Eastern European multi-brand fashion retailer, carrying several hundred international labels across clothing, footwear and accessories. This is the Ukrainian storefront; the group runs separate sites for Poland, Romania, Czechia and other markets.',
      'It discounts continuously, in the way multi-brand platforms do: rotating brand-level promotions, cart-percentage events, a paid loyalty club with standing discounts and free delivery, and a large permanent outlet. The club is the mechanic worth doing the arithmetic on if you buy clothing more than twice a year.',
    ],
    offers: [
      {
        id: 'answear-club',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty club with standing discounts and free delivery',
        detail:
          'A paid tier that discounts every order and removes shipping. It pays for itself quickly at this basket size.',
        terms: 'An annual fee — worth it above a couple of orders a year.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'answear-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Permanent outlet section',
        detail: 'Previous-season stock from the same brands at a standing reduction.',
        checked: CHECKED_R2,
      },
      {
        id: 'answear-events',
        kind: 'deal',
        value: 'Sale',
        title: 'Rotating brand and cart-level promotions',
        detail:
          'Percentage events on specific brands or on the whole basket, refreshed most weeks.',
        checked: CHECKED_R2,
      },
      {
        id: 'answear-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive codes',
        detail: 'Part of the promotional inventory appears only in the app.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the brand promotion before the cart promotion',
        body: 'They rarely stack. Whichever is larger on your specific basket is the one to take.',
      },
      {
        title: 'The outlet carries the same brands',
        body: 'Last season’s stock from the labels you were browsing, at a standing discount. Start there.',
      },
      {
        title: 'Storefronts are per country',
        body: 'Prices, stock and codes differ between the group’s national sites.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Ukraine; the group covers several CEE markets' },
      { label: 'Model', value: 'Multi-brand fashion platform' },
      { label: 'Club', value: 'Paid tier with discounts and free delivery' },
      { label: 'Outlet', value: 'Permanent' },
    ],
    faq: [
      {
        q: 'Is the Answear club worth paying for?',
        a: 'Above roughly two orders a year, yes — the per-order discount plus free delivery covers the fee. For one purchase it does not.',
      },
      {
        q: 'Do promotions stack?',
        a: 'Usually not with each other. The basket applies the larger of the brand promotion and the cart promotion.',
      },
      {
        q: 'Can I order from another country?',
        a: 'Use the storefront for your own market — the group runs separate sites with separate stock and pricing.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'bellroy',
    name: 'Bellroy',
    domain: 'bellroy.com',
    siteLabel: 'bellroy.com',
    badge: 'BR',
    color: '#2A4A3A',
    category: 'fashion',
    markets: 'Germany, Austria, Ireland and other European markets',
    blurb: 'Australian carry brand that barely discounts — and warranties instead.',
    about: [
      'Bellroy makes wallets, bags and phone cases from Melbourne, sold direct worldwide. The products are designed around a specific idea — carrying less, more neatly — and priced as considered purchases rather than accessories.',
      'It is a brand that deliberately does not discount much. There is no rolling promotion and no coupon economy; what there is instead is a three-year warranty, a long returns window and an outlet of past-season colours. If you are waiting for 40% off a Bellroy wallet, you will wait a long time.',
    ],
    offers: [
      {
        id: 'bellroy-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Past-season colours at a reduced price',
        detail:
          'The main discount channel. Same product, retired colourway — the leather does not know what season it is.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'bellroy-warranty',
        kind: 'deal',
        value: 'Protection',
        title: 'Three-year warranty on the carry range',
        detail:
          'Not a discount — the reason the price is defensible. A wallet that is replaced at year two costs less per year than a cheap one bought three times.',
        checked: CHECKED_R2,
      },
      {
        id: 'bellroy-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup offer for new customers',
        detail: 'A modest first-order discount in most markets.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy the retired colour',
        body: 'The outlet is the only meaningful discount this brand runs, and the product is identical.',
      },
      {
        title: 'Register the warranty',
        body: 'Three years is long enough that you will not remember the order. Register it so the claim is straightforward.',
      },
      {
        title: 'Choose by capacity, not by looks',
        body: 'Bellroy publishes card counts per wallet. Buying one that is too small is the common regret.',
      },
    ],
    facts: [
      { label: 'Origin', value: 'Melbourne, Australia' },
      { label: 'Warranty', value: 'Three years on the carry range' },
      { label: 'Discounting', value: 'Rare — outlet colours only' },
      { label: 'Returns', value: 'Long window; check your market' },
    ],
    faq: [
      {
        q: 'Are there Bellroy discount codes?',
        a: 'Rarely, and small when they exist. The outlet section and the newsletter offer are the realistic routes to a lower price.',
      },
      {
        q: 'Is the warranty worth anything?',
        a: 'Yes — three years on stitching and hardware is unusual in this category and is a large part of what you are paying for.',
      },
      {
        q: 'Which market am I buying from?',
        a: 'Bellroy prices per region. Buy from your own country’s storefront to avoid duty and to keep returns simple.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'marks-and-spencer-india',
    name: 'Marks & Spencer',
    domain: 'marksandspencer.in',
    siteLabel: 'marksandspencer.in',
    badge: 'M&S',
    color: '#1A2E4A',
    category: 'fashion',
    markets: 'India — this is the Indian storefront, not the UK site',
    blurb: 'British high street in India, discounted on the local retail calendar.',
    about: [
      'This is Marks & Spencer’s Indian storefront, operated as a joint venture rather than by the UK business. The catalogue is clothing, lingerie and accessories adapted for the Indian market, priced in rupees.',
      'It follows Indian retail conventions rather than British ones: end-of-season sales aligned to the local calendar, bank-card instant discounts at payment, and festive campaigns. UK loyalty, UK pricing and UK promotions do not apply here, which is the thing most people searching for a code get wrong.',
    ],
    offers: [
      {
        id: 'mns-in-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'End-of-season and festive sale events',
        detail: 'The main discount, applied to the catalogue without a code.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'mns-in-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail: 'Card-issuer offers applied after any coupon, capped per transaction.',
        checked: CHECKED_R2,
      },
      {
        id: 'mns-in-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order offer for new customers',
        detail: 'A welcome discount on the Indian storefront for new accounts.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'This is not marksandspencer.com',
        body: 'UK codes, Sparks membership and UK returns have nothing to do with this site.',
      },
      {
        title: 'Check the bank offer before you pay',
        body: 'It applies at the payment step, after the basket. People take the first discount and stop looking.',
      },
      {
        title: 'Sizing follows UK conventions',
        body: 'Useful if you know your UK size, confusing if you are shopping Indian sizing elsewhere. Check the chart.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Operated by', value: 'A local joint venture, not the UK business' },
      { label: 'Currency', value: 'INR' },
      { label: 'Discounting', value: 'Seasonal plus bank offers' },
    ],
    faq: [
      {
        q: 'Can I use a UK M&S code in India?',
        a: 'No. The Indian storefront is a separate operation with its own pricing and promotions.',
      },
      {
        q: 'Is Sparks membership valid here?',
        a: 'No — the UK loyalty programme does not extend to the Indian site.',
      },
      {
        q: 'When are the biggest discounts?',
        a: 'End of season and around the Indian festive calendar, the same rhythm as the rest of Indian retail.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'lifestyle-stores',
    name: 'Lifestyle Stores',
    domain: 'lifestylestore.com',
    siteLabel: 'lifestylestore.com',
    badge: 'LS',
    color: '#8A2A5C',
    category: 'fashion',
    markets: 'India only',
    blurb: 'Indian department store chain where the loyalty programme drives everything.',
    about: [
      'Lifestyle is an Indian department store chain carrying clothing, footwear, beauty and home across a large physical network and online, part of the Landmark Group.',
      'Department-store retail in India runs on loyalty. The free programme accrues points on every purchase across the group’s brands, unlocks member-only preview days before public sales, and is where the meaningful offers are issued. Add bank-card discounts at payment and the festive calendar, and the public coupon is the least of the four.',
    ],
    offers: [
      {
        id: 'lifestyle-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme with points and preview access',
        detail:
          'Points across the group’s brands plus entry to sales before they open publicly. The preview access is the valuable half.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'lifestyle-eoss',
        kind: 'deal',
        value: 'Sale',
        title: 'End-of-season sale',
        detail: 'The deepest catalogue-wide reductions of the year, twice annually.',
        checked: CHECKED_R2,
      },
      {
        id: 'lifestyle-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at checkout',
        detail: 'Rotating issuer offers applied at payment.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Join before the sale, not during it',
        body: 'The preview days are the point of the programme, and you need to be a member before they open.',
      },
      {
        title: 'Points work across the group',
        body: 'The Landmark brands share the programme. Consolidating your spending makes the balance worth something.',
      },
      {
        title: 'Check stock at your local store',
        body: 'The online and in-store assortments differ, and store stock can be reserved.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Group', value: 'Landmark Group' },
      { label: 'Loyalty', value: 'Free, points across group brands' },
      { label: 'Biggest event', value: 'End-of-season sale' },
    ],
    faq: [
      {
        q: 'Is the Lifestyle loyalty programme free?',
        a: 'Yes, and it is the main mechanic here — points across the group plus early access to the sale events.',
      },
      {
        q: 'Do online and store prices match?',
        a: 'Usually, but promotions are sometimes channel-specific. Worth a check on a large purchase.',
      },
      {
        q: 'Does it ship outside India?',
        a: 'No. It is a domestic chain.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'glasseslit',
    name: 'Glasseslit',
    domain: 'glasseslit.com',
    siteLabel: 'glasseslit.com',
    badge: 'GL',
    color: '#1F5C7A',
    category: 'fashion',
    markets: 'Worldwide, shipping cross-border',
    blurb: 'Very cheap prescription eyewear — the lens spec is where the price hides.',
    about: [
      'Glasseslit sells prescription glasses and sunglasses online at prices far below high-street opticians, shipping worldwide from Asia. Frames start at almost nothing and the business is built on volume.',
      'As with all budget online eyewear, the frame price is not the price. The lens index, coatings and any progressive or high-prescription surcharge are configured after you choose the frame, and they can multiply the total several times over. You also need your pupillary distance, which many prescriptions omit and which no online seller can measure for you.',
    ],
    offers: [
      {
        id: 'glasseslit-frames',
        kind: 'deal',
        value: 'Sale',
        title: 'Very low frame pricing with permanent promotions',
        detail:
          'Frames are priced as a loss-leader and discounted continuously. The configuration afterwards is where the money is.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'glasseslit-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new accounts',
        detail: 'A welcome code applied at checkout.',
        checked: CHECKED_R2,
      },
      {
        id: 'glasseslit-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Second-pair pricing',
        detail:
          'A spare pair or prescription sunglasses ordered in the same basket costs much less than a separate order.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Price the finished glasses, not the frame',
        body: 'Index, coatings and progressive lenses are the real cost. Configure fully before comparing sellers.',
      },
      {
        title: 'Get your pupillary distance measured',
        body: 'Without it the lenses will be centred wrongly. Ask your optician for the figure — they are obliged to give you the prescription.',
      },
      {
        title: 'Order one pair before you order three',
        body: 'Fit and lens quality vary. Test the seller with a single cheap pair before buying for the family.',
      },
    ],
    facts: [
      { label: 'Ships', value: 'Worldwide, cross-border' },
      { label: 'Needs', value: 'A valid prescription and your pupillary distance' },
      { label: 'Real cost', value: 'Lens index and coatings, not the frame' },
      { label: 'Delivery', value: 'Weeks — lenses are made to order' },
    ],
    faq: [
      {
        q: 'Is cheap online eyewear any good?',
        a: 'The frames and lenses are generally serviceable at the price. The failure modes are a wrong pupillary distance, an over-optimistic lens choice on a strong prescription, and a frame that does not suit your face — none of which the price fixes.',
      },
      {
        q: 'Do I need my pupillary distance?',
        a: 'Yes. Without it the optical centres will be off, which causes eye strain. Your optician measures it and must give you your prescription.',
      },
      {
        q: 'What if the glasses are wrong?',
        a: 'Returns on made-to-order prescription lenses across a border are difficult. Check the seller’s remake policy before ordering a complex prescription.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'superbottoms',
    name: 'SuperBottoms',
    domain: 'superbottoms.com',
    siteLabel: 'superbottoms.com',
    badge: 'SB',
    color: '#2A6B7A',
    category: 'fashion',
    markets: 'India only',
    blurb: 'Reusable cloth nappies — the saving is the disposables you stop buying.',
    about: [
      'SuperBottoms is an Indian brand making reusable cloth nappies, training pants and period underwear, sold direct. The products are a considered purchase with a high up-front cost and a low running one.',
      'The discount that matters is not on the page. A cloth nappy system costs a few thousand rupees once and replaces a recurring disposables bill for two years or more, and it can then be used for a second child. Against that, a 15% code on the starter set is a rounding error — though the brand does run frequent bundle and festive promotions worth timing a purchase around.',
    ],
    offers: [
      {
        id: 'superbottoms-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Starter packs and bundles below the individual pieces',
        detail:
          'A full-time cloth system needs a set, not one nappy. The bundles are priced for that and are the sensible entry point.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'superbottoms-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive and seasonal campaigns',
        detail: 'The deepest reductions cluster around the Indian festive calendar.',
        checked: CHECKED_R2,
      },
      {
        id: 'superbottoms-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail: 'A welcome offer on a first purchase, with a minimum spend.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy a trial set before a full system',
        body: 'Fit and your own laundry routine decide whether cloth works for you. Two nappies will tell you; twenty is an expensive way to find out.',
      },
      {
        title: 'Count the washing',
        body: 'The economics assume you can wash every other day. If you cannot, the system needs to be larger and the saving shrinks.',
      },
      {
        title: 'They resell',
        body: 'Cloth nappies hold value second-hand in India, which changes the real cost of trying them.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Products', value: 'Cloth nappies, training pants, period underwear' },
      { label: 'Economics', value: 'High up front, low running cost' },
      { label: 'Returns', value: 'Limited on hygiene products — check per item' },
    ],
    faq: [
      {
        q: 'Do cloth nappies actually save money?',
        a: 'Over a full two years, substantially, and more again with a second child. The saving depends on being able to wash frequently — if you cannot, the calculation changes.',
      },
      {
        q: 'Which size do I buy?',
        a: 'Most of the range is adjustable across a weight span rather than sized per age. The product page states the range.',
      },
      {
        q: 'Can I return them?',
        a: 'Hygiene rules limit returns on used items. Buy a small trial set first for exactly this reason.',
      },
    ],
    updated: CHECKED_R2,
  },
]
