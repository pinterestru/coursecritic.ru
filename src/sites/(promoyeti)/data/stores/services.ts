/**
 * Online services.
 *
 * ⚠️ Working values written from the platforms' public pages; re-check before a
 * campaign. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const serviceStores: Store[] = [
  {
    slug: 'fiverr',
    name: 'Fiverr',
    domain: 'fiverr.com',
    siteLabel: 'fiverr.com',
    badge: 'FV',
    color: '#1F7A4A',
    category: 'services',
    markets: 'Worldwide',
    blurb: 'Freelance marketplace where the buyer fee is the number nobody quotes.',
    about: [
      'Fiverr is a freelance services marketplace organised around packaged offers — a seller lists a fixed deliverable at a fixed price and you buy it. That packaging is what makes it fast, and what makes the scope conversation important.',
      'The pricing detail people miss is the service fee Fiverr adds on top of the seller’s price at checkout. A gig listed at one number costs you more than that number. First-order discounts exist and work, and buying a larger package rather than several small orders reduces the fee’s proportional bite.',
    ],
    offers: [
      {
        id: 'fiverr-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new buyers',
        detail: 'A standing acquisition offer applied at checkout on a first purchase.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'fiverr-package',
        kind: 'deal',
        value: 'Bundle',
        title: 'Buy one larger package rather than several small orders',
        detail:
          'The service fee is applied per order and is proportionally heavier on small ones. Consolidating is a genuine saving.',
        checked: CHECKED,
      },
      {
        id: 'fiverr-pro',
        kind: 'deal',
        value: 'Member',
        title: 'Compare standard sellers against the vetted tier',
        detail:
          'The vetted tier costs more and screens for capability. On work where a bad delivery costs you a week, that is the cheaper option.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Write the brief before you shop',
        body: 'Most money lost here goes on revisions caused by an unclear brief, not on the gig price.',
      },
      {
        title: 'Check what "delivery" includes',
        body: 'Source files, commercial rights and revision count are frequently paid extras. Price the package you actually need.',
      },
      {
        title: 'Message the seller first on anything non-trivial',
        body: 'A five-minute conversation before ordering prevents the dispute that costs you the whole fee.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Packaged freelance services' },
      { label: 'Buyer fee', value: 'Added at checkout on top of the listed price' },
      { label: 'Extras', value: 'Source files and commercial use are often separate' },
      { label: 'Protection', value: 'Platform dispute process — keep it on-platform' },
    ],
    faq: [
      {
        q: 'Why is my Fiverr total higher than the gig price?',
        a: 'A service fee is added at checkout. It is disclosed, and it is the reason a "$50 gig" is not a $50 charge.',
      },
      {
        q: 'Do Fiverr promo codes work?',
        a: 'The new-buyer offer does. Beyond that, codes are occasional and usually capped.',
      },
      {
        q: 'Is the vetted tier worth the premium?',
        a: 'For anything with a deadline attached, generally yes. For a low-stakes one-off, the standard marketplace is fine.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'tradingview',
    name: 'TradingView',
    domain: 'tradingview.com',
    siteLabel: 'tradingview.com',
    badge: 'TV',
    color: '#1F5CB0',
    category: 'services',
    markets: 'Worldwide',
    blurb: 'Charting platform where annual billing and the Black Friday sale are the discounts.',
    about: [
      'TradingView is the standard charting and market-analysis platform for retail traders, with a free tier that is genuinely usable and paid tiers that add indicators per chart, more alerts, and fewer interface limits.',
      'It discounts on a schedule rather than by code. Annual billing cuts the monthly rate substantially, and the platform runs one large annual sale that is reliably the cheapest entry point of the year. Market data for some exchanges is a separate subscription on top — the line people forget when budgeting.',
    ],
    offers: [
      {
        id: 'tradingview-annual',
        kind: 'deal',
        value: 'Long term',
        title: 'Annual billing below twelve monthly payments',
        detail: 'The standing discount. On a tool used daily it is the obvious choice.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'tradingview-sale',
        kind: 'deal',
        value: 'Long term',
        title: 'The annual platform-wide sale',
        detail:
          'One large scheduled sale a year, reliably the lowest price. If you can wait for it, wait.',
        checked: CHECKED,
      },
      {
        id: 'tradingview-free',
        kind: 'deal',
        value: 'Member',
        title: 'Free tier that covers most casual use',
        detail:
          'Charting, community scripts and a limited number of indicators per chart. Upgrade when the limits actually bite.',
        checked: CHECKED,
      },
      {
        id: 'tradingview-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the paid tiers',
        detail:
          'Test whether the extra indicators and alerts change how you work before committing.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Start free and upgrade against a specific limit',
        body: 'Most people upgrade for indicator count or alert count. Know which one is blocking you before paying.',
      },
      {
        title: 'Real-time data is a separate charge',
        body: 'Exchange data subscriptions sit on top of the plan. Budget for the exchanges you actually trade.',
      },
      {
        title: 'Wait for the annual sale',
        body: 'It happens once a year and it is the cheapest the platform gets. Nothing about the product changes in the meantime.',
      },
    ],
    facts: [
      { label: 'Free tier', value: 'Yes, genuinely usable' },
      { label: 'Discount levers', value: 'Annual billing and the annual sale' },
      { label: 'Extra cost', value: 'Real-time exchange data subscriptions' },
      { label: 'Trial', value: 'Available on paid tiers' },
    ],
    faq: [
      {
        q: 'Are there TradingView coupon codes?',
        a: 'Not as a routine mechanic. Annual billing and the once-yearly sale are how the price comes down.',
      },
      {
        q: 'Is the free plan enough?',
        a: 'For learning and for casual chart-watching, yes. The paid tiers matter when you need several indicators on one chart or many active alerts.',
      },
      {
        q: 'Why am I seeing delayed prices?',
        a: 'Real-time data for many exchanges is a separate subscription, independent of your plan tier.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'uber-eats',
    name: 'Uber Eats',
    domain: 'ubereats.com',
    siteLabel: 'ubereats.com',
    badge: 'UE',
    color: '#1F7A33',
    category: 'services',
    markets: 'United Kingdom for this offer; the service operates in many countries',
    blurb: 'Delivery where the fees below the subtotal decide what you actually pay.',
    about: [
      'Uber Eats delivers restaurant and grocery orders through the Uber app. Restaurant prices on delivery platforms are frequently higher than in the restaurant itself, before any fee is added.',
      'The total is built from the subtotal plus a delivery fee, a service fee, sometimes a small-order fee, and a tip. A promo code applies to the subtotal and not to the fees, which is why a "£10 off" code on a small order saves much less than it appears. The subscription that removes delivery fees is the lever that changes the arithmetic for regular users.',
    ],
    offers: [
      {
        id: 'ubereats-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'New-user discount on a first order',
        detail:
          'The standing acquisition offer, applied to the subtotal. Genuinely large, and once per account.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'ubereats-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Subscription that removes delivery fees',
        detail:
          'Pays for itself above a few orders a month. Below that it is a cost, not a saving — count your actual orders.',
        terms: 'A recurring monthly charge; it does not remove service fees.',
        checked: CHECKED,
      },
      {
        id: 'ubereats-restaurant-offers',
        kind: 'deal',
        value: 'App only',
        title: 'Restaurant-funded offers in the app',
        detail:
          'Buy-one-get-one and percentage offers funded by the restaurant, listed in the app rather than issued as codes.',
        checked: CHECKED,
      },
      {
        id: 'ubereats-pickup',
        kind: 'deal',
        value: 'Deal',
        title: 'Switch to pickup',
        detail:
          'Collection removes the delivery fee entirely and often the service fee with it. If the restaurant is close, this is the largest saving on the page.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Codes do not touch the fees',
        body: 'A percentage code applies to food. Delivery, service and small-order fees sit outside it, which is why the saving looks smaller at the end.',
      },
      {
        title: 'Order above the small-order threshold',
        body: 'The small-order fee is a fixed penalty. One extra item is often cheaper than the fee it removes.',
      },
      {
        title: 'Compare the restaurant’s own delivery',
        body: 'Many restaurants take direct orders at menu prices with a lower fee. It takes one search.',
      },
    ],
    facts: [
      { label: 'Market', value: 'UK for this offer; many countries overall' },
      {
        label: 'Fee structure',
        value: 'Delivery + service + small-order fees on top of the subtotal',
      },
      { label: 'Subscription', value: 'Removes delivery fees, not service fees' },
      { label: 'Cheapest option', value: 'Pickup' },
    ],
    faq: [
      {
        q: 'Why did my Uber Eats code save less than expected?',
        a: 'Because it applies to the food subtotal. Delivery, service and small-order fees are added afterwards and are not discounted.',
      },
      {
        q: 'Is the subscription worth it?',
        a: 'Above roughly three or four orders a month, yes. Below that the monthly charge exceeds the fees it saves.',
      },
      {
        q: 'Are menu prices the same as in the restaurant?',
        a: 'Often not — many restaurants price higher on delivery platforms to absorb the commission. Comparing the menu directly is worth doing once.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'myheritage',
    name: 'MyHeritage',
    domain: 'myheritage.com',
    siteLabel: 'myheritage.com',
    badge: 'MH',
    color: '#2A5C8A',
    category: 'services',
    markets: 'Worldwide',
    blurb: 'DNA kits discounted often; the subscription behind them is the real cost.',
    about: [
      'MyHeritage sells DNA testing kits alongside a genealogy platform with historical records, family-tree building and photo tools. It has particular strength in European records, which is why it is often the better choice than the US-focused services for family lines outside America.',
      'The commercial structure is important: the kit is cheap and discounted constantly, while the records subscription — which is what makes the results useful — is an annual charge that renews. The DNA test alone gives you ethnicity estimates and matches; researching them properly needs the subscription.',
    ],
    offers: [
      {
        id: 'myheritage-kit-sales',
        kind: 'deal',
        value: 'Bundle',
        title: 'Frequent DNA kit promotions',
        detail:
          'Kits are discounted repeatedly through the year, deepest around the holiday season. Paying list for a kit is unnecessary.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'myheritage-multikit',
        kind: 'deal',
        value: 'Member',
        title: 'Multi-kit bundles',
        detail:
          'Buying two or three kits together drops the per-kit price sharply — useful when testing several family members, which is how genealogy actually works.',
        checked: CHECKED,
      },
      {
        id: 'myheritage-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the records subscription',
        detail:
          'Enough to explore whether the record collections cover your family’s regions. It converts automatically.',
        terms: 'Auto-renews at the annual rate unless cancelled before the trial ends.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Diarise the subscription renewal',
        body: 'The annual records charge is the real cost of this hobby, and it renews quietly. Decide each year rather than drifting.',
      },
      {
        title: 'Test the oldest generation first',
        body: 'A grandparent’s DNA carries information yours does not. If budget is limited, that is the kit to buy.',
      },
      {
        title: 'Check which records cover your regions',
        body: 'Coverage is uneven by country. Use the trial to verify the collections you need exist before paying for a year.',
      },
    ],
    facts: [
      { label: 'Products', value: 'DNA kits plus a records subscription' },
      { label: 'Strength', value: 'European record collections' },
      { label: 'Kit pricing', value: 'Discounted frequently; bundles cheaper per kit' },
      { label: 'Ongoing cost', value: 'Annual subscription, auto-renewing' },
    ],
    faq: [
      {
        q: 'Do I need the subscription to see my DNA results?',
        a: 'No. Ethnicity estimates and DNA matches come with the kit. The subscription unlocks historical records and some advanced tools.',
      },
      {
        q: 'When are DNA kits cheapest?',
        a: 'Around the major holiday sales, and during the platform’s own recurring promotions. Kits are discounted often enough that waiting is easy.',
      },
      {
        q: 'What happens to my DNA data?',
        a: 'That is governed by the company’s privacy policy and your consent settings, including whether your sample is stored and whether matching is enabled. Read those settings before testing, not after.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'ancestry',
    name: 'Ancestry',
    domain: 'ancestry.com',
    siteLabel: 'ancestry.com',
    badge: 'AN',
    color: '#2C6B3A',
    category: 'services',
    markets: 'US, Canada, UK, Australia and Germany',
    blurb: 'The largest records archive, sold as a subscription with a discounted kit in front.',
    about: [
      'Ancestry operates the largest commercial genealogy archive, strongest on US, UK, Irish and Australian records, alongside the best-known consumer DNA test by database size — which matters, because a DNA match is only useful if the person you match is also in the database.',
      'Pricing follows the same shape as the rest of the category: cheap, frequently discounted kits; a records subscription that is the actual product; and regional tiers that determine which archives you can open. Choosing the right subscription tier is worth more than any discount on it.',
    ],
    offers: [
      {
        id: 'ancestry-kit-sales',
        kind: 'deal',
        value: 'Bundle',
        title: 'Recurring DNA kit promotions',
        detail:
          'Kits discount repeatedly through the year and deeply around the holidays. The database size is the reason to choose this one.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'ancestry-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Free trial of the records subscription',
        detail:
          'Use it deliberately: search the specific ancestors you care about and confirm the records exist before the trial converts.',
        terms: 'Card required; converts to a paid subscription automatically.',
        checked: CHECKED,
      },
      {
        id: 'ancestry-tier',
        kind: 'deal',
        value: 'Member',
        title: 'Choose the regional tier, not the worldwide one',
        detail:
          'If your family is entirely within one country, the cheaper regional subscription covers everything you will open.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Plan the trial like a research session',
        body: 'A fortnight of focused searching can extract most of what a casual user ever needs. Save the records you find as you go.',
      },
      {
        title: 'Do not buy the worldwide tier by default',
        body: 'It is the expensive one, and most family lines sit in a single region. Upgrade only when you hit a border.',
      },
      {
        title: 'Free public archives exist',
        body: 'National archives and volunteer indexes cover a lot of the same ground. Use them for the easy generations and pay for the hard ones.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, CA, UK, AU, DE' },
      { label: 'Strength', value: 'Largest DNA database and records archive' },
      { label: 'Subscription tiers', value: 'Regional and worldwide' },
      { label: 'Ongoing cost', value: 'Auto-renewing subscription' },
    ],
    faq: [
      {
        q: 'Is the Ancestry DNA test worth it without the subscription?',
        a: 'Yes for ethnicity estimates and matches, which is what most people want. Building out a documented tree is what needs the records access.',
      },
      {
        q: 'How do I avoid the automatic renewal?',
        a: 'Cancel before the trial or term ends — access runs to the end of the paid period. Set the reminder at signup.',
      },
      {
        q: 'Which regional tier should I buy?',
        a: 'The one covering where your family actually lived. The worldwide tier only pays off once you are researching across countries.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'gomining',
    name: 'GoMining',
    domain: 'gomining.com',
    siteLabel: 'gomining.com',
    badge: 'GM',
    color: '#3A3A6B',
    category: 'services',
    markets: 'Worldwide',
    blurb: 'Tokenised bitcoin mining — a speculative product, not a discount purchase.',
    about: [
      'GoMining sells tokenised access to bitcoin mining hardware: you buy a token representing a share of hashrate and receive mining rewards, net of an electricity and maintenance fee, without operating any equipment yourself.',
      'It belongs in a coupon index only because it is an offer we cover, and it needs saying plainly: this is a speculative financial product whose return depends on the bitcoin price, the network difficulty and an ongoing fee you pay whether or not the position is profitable. Promotional discounts on entry do not change any of that. Nothing here is investment advice, and the honest saving in this category is not spending money you cannot afford to lose.',
    ],
    offers: [
      {
        id: 'gomining-promos',
        kind: 'deal',
        value: 'Sale',
        title: 'Platform promotions on hashrate purchases',
        detail:
          'The platform runs periodic campaigns on entry pricing. Treat a discount on a speculative position as a smaller position, not a better one.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'gomining-fees',
        kind: 'deal',
        value: 'Fees',
        title: 'Compare the electricity and maintenance fee, not the headline yield',
        detail:
          'The ongoing fee is what determines whether a position earns anything. It is the number to compare between offers.',
        checked: CHECKED,
      },
      {
        id: 'gomining-start-small',
        kind: 'deal',
        value: 'Start small',
        title: 'Start at the smallest position the platform allows',
        detail:
          'The cheapest way to find out how the product behaves through a full payout cycle before committing more.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Model a falling bitcoin price',
        body: 'Rewards are paid in bitcoin while fees are charged regardless. Work out what a sustained downturn does to the position before buying.',
      },
      {
        title: 'Understand what you own',
        body: 'A token representing hashrate is not the same as owning a machine or owning bitcoin. Read what the platform actually commits to.',
      },
      {
        title: 'Only what you can lose',
        body: 'This is the only advice in this category that is reliably correct.',
      },
    ],
    facts: [
      { label: 'Product', value: 'Tokenised bitcoin mining hashrate' },
      { label: 'Ongoing cost', value: 'Electricity and maintenance fee' },
      { label: 'Return depends on', value: 'Bitcoin price and network difficulty' },
      { label: 'Risk', value: 'High — capital is at risk' },
    ],
    faq: [
      {
        q: 'Is GoMining a way to make money?',
        a: 'It is a way to take a leveraged bet on the bitcoin price with an ongoing cost attached. Whether it makes money depends on variables nobody controls. We list the offer; we are not telling you it is a good investment.',
      },
      {
        q: 'Do promotional discounts make it safer?',
        a: 'No. A discount changes the entry price, not the risk profile. Treat it as a smaller stake rather than a better deal.',
      },
      {
        q: 'What is the ongoing fee for?',
        a: 'Electricity and maintenance on the underlying hardware. It is charged regardless of whether mining is profitable that month, which is the mechanism that can erode a position.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'square',
    name: 'Square',
    domain: 'squareup.com',
    siteLabel: 'squareup.com',
    badge: 'SQ',
    color: '#1A1A1A',
    category: 'services',
    markets: 'United States, Canada, United Kingdom and Australia',
    blurb: 'Card payments for small business — the transaction rate is the real price.',
    about: [
      'Square sells card readers, point-of-sale software and payment processing to small businesses, with no monthly minimum on the base tier: you buy a reader and pay a percentage of each transaction.',
      'The hardware price is not the decision. Processing takes a percentage plus a fixed fee on every sale, forever, and across a year that dwarfs whatever the reader cost. A business taking a hundred pounds a day pays more in processing in a month than the reader cost once. Compare providers on the rate for your card mix and your average transaction size, not on the terminal.',
    ],
    offers: [
      {
        id: 'square-freereader',
        kind: 'deal',
        value: 'New customer',
        title: 'Free or discounted first reader for new accounts',
        detail:
          'A standing acquisition offer. Useful, and much smaller than the processing decision behind it.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'square-freetier',
        kind: 'deal',
        value: 'Free',
        title: 'No monthly fee on the base point-of-sale software',
        detail:
          'The software costs nothing on the entry tier; you pay per transaction. That suits low and irregular volume.',
        checked: CHECKED_R2,
      },
      {
        id: 'square-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Hardware bundles for a full till setup',
        detail: 'Stand, printer, drawer and reader priced below the pieces.',
        checked: CHECKED_R2,
      },
      {
        id: 'square-rates',
        kind: 'deal',
        value: 'Compare',
        title: 'Negotiated rates at higher volume',
        detail:
          'Above a certain monthly volume, custom pricing is available. If you are past it and still on the standard rate, ask.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the effective rate, not the headline',
        body: 'Card-present, card-not-present, and international cards are priced differently. Work out the blended rate on your actual mix.',
      },
      {
        title: 'Watch the fixed fee on small transactions',
        body: 'A per-transaction fixed component hurts a coffee shop far more than a furniture shop. It can decide the provider.',
      },
      {
        title: 'Ask for custom pricing once volume justifies it',
        body: 'It is available and it is not offered automatically.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, Canada, UK, Australia' },
      { label: 'Model', value: 'Free base software, per-transaction pricing' },
      { label: 'Real cost', value: 'The processing rate, not the hardware' },
      { label: 'Volume pricing', value: 'Available on request above a threshold' },
    ],
    faq: [
      {
        q: 'Is Square cheaper than the alternatives?',
        a: 'It depends entirely on your card mix and average transaction size. The fixed per-transaction component matters most to businesses taking many small payments.',
      },
      {
        q: 'Is there a monthly fee?',
        a: 'Not on the base tier — you pay per transaction. Advanced features and some industry packages are subscriptions.',
      },
      {
        q: 'How quickly do I get paid?',
        a: 'Standard settlement takes a business day or two; instant transfer is available for an extra percentage. Check the current terms for your market.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'swyft-filings',
    name: 'Swyft Filings',
    domain: 'swyftfilings.com',
    siteLabel: 'swyftfilings.com',
    badge: 'SF',
    color: '#1F4E9B',
    category: 'services',
    markets: 'United States primarily',
    blurb: 'US company formation — the state fee is fixed, the service fee is not.',
    about: [
      'Swyft Filings incorporates US businesses: LLCs, S-corps and non-profits, plus registered-agent service, EIN applications and compliance filings. It is a filing service, not a law firm.',
      'The pricing has two parts that are constantly confused. The state filing fee is set by the state and is identical wherever you file from — nobody can discount it. The service fee on top is what companies in this sector compete on, and it is heavily promoted. What deserves more attention than either is the registered-agent renewal, which is an annual charge that often starts free and is where the long-term cost sits.',
    ],
    offers: [
      {
        id: 'swyft-formation',
        kind: 'deal',
        value: 'Sale',
        title: 'Discounted or free service fee on formation packages',
        detail:
          'The service fee is the discountable part. The state fee is fixed and is charged on top regardless.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'swyft-agent',
        kind: 'deal',
        value: 'New customer',
        title: 'First year of registered-agent service included',
        detail:
          'Frequently bundled free for a year, then billed annually. That renewal is the real ongoing cost.',
        terms: 'Auto-renews at the standard annual rate.',
        checked: CHECKED_R2,
      },
      {
        id: 'swyft-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Packages bundling EIN, operating agreement and compliance',
        detail:
          'Cheaper than adding them individually, and several are things you can also do yourself for nothing.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Separate the state fee from the service fee',
        body: 'Only one of them can be discounted. Compare providers on the service fee and the agent renewal.',
      },
      {
        title: 'An EIN is free from the IRS',
        body: 'You can apply directly at no cost in minutes. Paying for it as an add-on is optional convenience.',
      },
      {
        title: 'Diarise the registered-agent renewal',
        body: 'The free first year converts to an annual charge. That is the recurring cost of the decision.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Service', value: 'Company formation and compliance filings' },
      { label: 'Fixed cost', value: 'State filing fee — not discountable by anyone' },
      { label: 'Recurring cost', value: 'Registered-agent renewal' },
    ],
    faq: [
      {
        q: 'Why is the total higher than the advertised price?',
        a: 'Because the state filing fee is added to the service fee. The state sets that figure and no provider can reduce it.',
      },
      {
        q: 'Do I need to pay for an EIN?',
        a: 'No. The IRS issues them free and directly. Paying a service for it buys convenience, not access.',
      },
      {
        q: 'Is a registered agent required?',
        a: 'Yes in every US state, and you can be your own if you have a physical address there and are content for it to be public. That is the trade the service exists to solve.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'tiktok-for-business',
    name: 'TikTok for Business',
    domain: 'ads.tiktok.com',
    siteLabel: 'ads.tiktok.com',
    badge: 'TT',
    color: '#1A1A1A',
    category: 'services',
    markets: 'US, Canada, UK, Australia and many other markets',
    blurb: 'Ad credits for new advertisers — the credit is not the cost that matters.',
    about: [
      'TikTok for Business is the platform’s self-serve advertising system: campaign creation, targeting, the creative tools and the pixel. Anyone can open an account and spend.',
      'The promotional offer in this category is always the same shape — match or credit on a first spend for new advertisers — and it is genuinely worth taking. It is also the smallest variable in what advertising costs you. Creative quality and targeting move cost per result by multiples; a credit moves it once. Treat the credit as a subsidised test budget rather than as a discount.',
    ],
    offers: [
      {
        id: 'tiktokads-credit',
        kind: 'deal',
        value: 'New customer',
        title: 'Ad credit or spend match for new advertisers',
        detail:
          'A first-spend credit for new accounts, subject to region and eligibility. Real, and worth taking.',
        terms: 'Eligibility and amounts vary by market and change frequently.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'tiktokads-tools',
        kind: 'deal',
        value: 'Free',
        title: 'Free creative and editing tools',
        detail:
          'The built-in creative tools cost nothing and are the variable that actually moves your cost per result.',
        checked: CHECKED_R2,
      },
      {
        id: 'tiktokads-smallbudget',
        kind: 'deal',
        value: 'Start small',
        title: 'Test at a small daily budget before scaling',
        detail:
          'The cheapest way to advertise badly is briefly. Prove a creative at a low budget before committing spend.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'The credit is a test budget, not a saving',
        body: 'Use it to learn what works. The money that matters is what you spend after it runs out.',
      },
      {
        title: 'Creative beats targeting on this platform',
        body: 'Ads that look like the feed outperform polished ones by a wide margin. That is where cost per result is won.',
      },
      {
        title: 'Set the account-level spend cap on day one',
        body: 'It is the control that prevents an expensive misconfiguration, and it takes a minute.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, CA, UK, AU and many others' },
      { label: 'Offer', value: 'First-spend credit for new advertisers' },
      { label: 'Cost driver', value: 'Creative quality, not the credit' },
      { label: 'Control', value: 'Set an account spend cap immediately' },
    ],
    faq: [
      {
        q: 'Is the TikTok ad credit real?',
        a: 'Yes, for new advertisers, subject to eligibility that varies by market and changes often. Read the current terms in your account rather than a third-party page.',
      },
      {
        q: 'How much should I budget to start?',
        a: 'Enough to test several creatives at a small daily spend rather than one at a large one. Learning which creative works is the point of the first budget.',
      },
      {
        q: 'Do I need a professional video?',
        a: 'No — and polished advertising frequently underperforms native-looking content on this platform. The free creative tools are enough to start.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'western-union',
    name: 'Western Union',
    domain: 'westernunion.com',
    siteLabel: 'westernunion.com',
    badge: 'WU',
    color: '#B0161E',
    category: 'services',
    markets: 'Germany, France, UK, Spain, Nordics and many other European markets',
    blurb: 'Money transfer where the exchange rate margin is the real fee.',
    about: [
      'Western Union moves money internationally, with an unusually deep agent network for cash pickup in places where digital-only services do not reach. That network is the reason to use it and the reason it costs more than the app-based competitors.',
      'The cost has two parts and only one is advertised. There is a transfer fee, which is often waived or discounted on a first transfer, and there is the margin built into the exchange rate, which is not shown as a fee at all. On a large transfer the rate margin is usually the bigger number by some distance — always compare the amount that actually lands, not the fee.',
    ],
    offers: [
      {
        id: 'westernunion-firsttransfer',
        kind: 'deal',
        value: 'New customer',
        title: 'Fee-free or discounted first transfer',
        detail:
          'A standing offer for new customers. It discounts the fee, not the exchange-rate margin.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'westernunion-bank',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Bank-account delivery is cheaper than cash pickup',
        detail:
          'Sending to an account rather than to an agent for collection costs less almost everywhere.',
        checked: CHECKED_R2,
      },
      {
        id: 'westernunion-app',
        kind: 'deal',
        value: 'App only',
        title: 'App and online rates below in-agent',
        detail: 'Sending from the app is consistently cheaper than sending over an agent counter.',
        checked: CHECKED_R2,
      },
      {
        id: 'westernunion-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme for regular senders',
        detail: 'Points and fee reductions for people who send on a schedule.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare what lands, not what it costs to send',
        body: 'Enter the same amount on two providers and compare the recipient figure. The exchange-rate margin is invisible otherwise.',
      },
      {
        title: 'Bank transfer over cash pickup',
        body: 'Cash collection is the premium product. Use it when the recipient genuinely has no account.',
      },
      {
        title: 'Check a specialist for large transfers',
        body: 'On bigger amounts, dedicated transfer services usually beat the legacy networks by a wide margin on the rate.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Most of Europe, sending worldwide' },
      { label: 'Strength', value: 'Cash pickup network where digital does not reach' },
      { label: 'Hidden cost', value: 'Exchange-rate margin, not shown as a fee' },
      { label: 'Cheapest route', value: 'App, to a bank account' },
    ],
    faq: [
      {
        q: 'Why is a fee-free transfer still expensive?',
        a: 'Because the fee is only half the cost. The exchange rate applied carries a margin, and on a large transfer that is usually the larger number.',
      },
      {
        q: 'Is cash pickup worth the extra?',
        a: 'Only if the recipient cannot receive a bank transfer. It is the premium option and the network is what you are paying for.',
      },
      {
        q: 'Are there cheaper alternatives?',
        a: 'For bank-to-bank transfers between developed markets, usually yes — specialist transfer services compete hard on the rate. Western Union wins where cash and reach matter.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'diagnostyka',
    name: 'Diagnostyka',
    domain: 'diag.pl',
    siteLabel: 'diag.pl',
    badge: 'DG',
    color: '#1F6B8A',
    category: 'services',
    markets: 'Poland only',
    blurb: 'Poland’s largest medical lab network — packages beat individual tests.',
    about: [
      'Diagnostyka is the largest medical laboratory network in Poland, with a wide collection-point footprint. You buy a test or a package online, attend a collection point, and receive results digitally.',
      'The pricing mechanic is packages: a bundled panel costs substantially less than the same tests ordered individually, and the seasonal preventive-health campaigns discount those panels further. One thing worth saying that a retailer would not: buying a broad panel without a clinical reason produces results you then have to interpret, and abnormal readings on a screening panel are common and usually harmless. A GP is the right person to decide which tests you actually need.',
    ],
    offers: [
      {
        id: 'diagnostyka-packages',
        kind: 'deal',
        value: 'Bundle',
        title: 'Test packages below individual pricing',
        detail:
          'A bundled panel costs far less than the same tests ordered one by one. The core mechanic.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'diagnostyka-campaigns',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal preventive-health campaigns',
        detail: 'Scheduled discounts on screening panels several times a year.',
        checked: CHECKED_R2,
      },
      {
        id: 'diagnostyka-online',
        kind: 'deal',
        value: 'Sale',
        title: 'Online purchase below walk-in pricing',
        detail:
          'Buying the test online before attending is cheaper than paying at the collection point.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Ask a doctor which tests you need',
        body: 'A cheaper panel of the wrong tests is not a saving, and unexplained abnormal results on a broad screen cause more worry than they resolve.',
      },
      {
        title: 'Check whether your insurance or employer covers it',
        body: 'Many Polish employers include private diagnostics. People pay for tests they were already entitled to.',
      },
      {
        title: 'Buy online, then attend',
        body: 'The online price is lower than paying at the counter, and it reserves the test.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Network', value: 'Nationwide laboratories and collection points' },
      { label: 'Results', value: 'Delivered digitally' },
      { label: 'Best value', value: 'Bundled packages, bought online' },
    ],
    faq: [
      {
        q: 'Do I need a doctor’s referral?',
        a: 'For most private tests, no — you can buy and attend directly. Whether you should is a different question, and a GP is the right person to answer it.',
      },
      {
        q: 'Is a package cheaper than individual tests?',
        a: 'Substantially, if you need everything in it. A large panel of tests nobody asked for is not a saving.',
      },
      {
        q: 'How do I get the results?',
        a: 'Digitally, through the patient portal, usually within a short window depending on the test.',
      },
    ],
    updated: CHECKED_R2,
  },
]
