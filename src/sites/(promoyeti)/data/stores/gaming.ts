/**
 * Games & digital keys.
 *
 * ⚠️ Working values written from the platforms' public pages; re-check before a
 * campaign. Key-marketplace risk descriptions in particular should be re-read
 * against each platform's current buyer-protection terms. See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const gamingStores: Store[] = [
  {
    slug: 'kinguin',
    name: 'Kinguin',
    domain: 'kinguin.net',
    siteLabel: 'kinguin.net',
    badge: 'KG',
    color: '#2A2A6B',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'Key marketplace with real prices, real coupons and real seller risk.',
    about: [
      'Kinguin is a marketplace where third-party sellers list game keys, software licences and gift cards. Prices are well below first-party stores because the sellers source keys from wherever they are cheapest.',
      'Two things follow from the marketplace model. First, coupons are a normal part of pricing — the platform issues them continuously and they stack with the already-low listing prices. Second, the seller matters: buyer protection is sold as a paid add-on, and without it a revoked key is a dispute rather than a refund. Buy from established sellers and read the region lock before you pay.',
    ],
    offers: [
      {
        id: 'kinguin-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Platform coupons issued continuously',
        detail:
          'Sitewide and category codes are a standing part of the pricing rather than an occasional promotion.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'kinguin-seller-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare sellers on the same listing',
        detail:
          'Several sellers offer the same key at different prices and ratings. The cheapest is not always the one to take.',
        checked: CHECKED,
      },
      {
        id: 'kinguin-protection',
        kind: 'deal',
        value: 'Protection',
        title: 'Buyer protection as a paid add-on',
        detail:
          'Not a discount — the thing that decides whether a revoked key costs you the game or nothing. Price it into the comparison.',
        terms: 'Optional and charged per order.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check the region lock before you buy',
        body: 'A key that cannot activate in your country is not a bargain. The restriction is stated on the listing.',
      },
      {
        title: 'Add protection on expensive keys',
        body: 'On a cheap game, self-insure. On a full-price new release, the add-on is worth it.',
      },
      {
        title: 'Compare against the official store’s sale',
        body: 'During a first-party seasonal sale the gap frequently closes to nothing, and the official purchase carries no key risk at all.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Third-party key marketplace' },
      { label: 'Coupons', value: 'Frequent and stackable with listing prices' },
      { label: 'Protection', value: 'Paid add-on per order' },
      { label: 'Main risk', value: 'Region locks and revoked keys' },
    ],
    faq: [
      {
        q: 'Is Kinguin safe?',
        a: 'It is an established marketplace with a dispute process, but the seller — not Kinguin — supplies the key. Buying from a high-volume seller and taking the protection on expensive orders is how people use it without trouble.',
      },
      {
        q: 'Do Kinguin coupons work?',
        a: 'Yes, routinely. This is one of the categories where coupon codes are a real mechanic rather than a myth.',
      },
      {
        q: 'What happens if my key is revoked?',
        a: 'With buyer protection, you are covered under the platform’s terms. Without it, you are opening a dispute with a seller and the outcome is much less certain.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'g2a',
    name: 'G2A',
    domain: 'g2a.com',
    siteLabel: 'g2a.com',
    badge: 'G2',
    color: '#B0651A',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'The largest key marketplace — cheap, coupon-heavy, and read the add-ons.',
    about: [
      'G2A is the biggest of the third-party key marketplaces, listing game keys, software, gift cards and subscriptions from a large seller base at prices well under first-party stores.',
      'The pricing model includes an optional paid protection product and, historically, opt-out add-ons at checkout — so the price you agreed to on the listing page is not necessarily the total at the end. Read every step. Coupons are frequent and genuine, and the platform runs regular sale events on top.',
    ],
    offers: [
      {
        id: 'g2a-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Frequent platform coupons and sale events',
        detail:
          'Site-wide and category codes issued continuously, on top of already-discounted listings.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'g2a-seller-rating',
        kind: 'deal',
        value: 'Sale',
        title: 'Buy from high-volume sellers',
        detail:
          'The same key from a seller with tens of thousands of sales is a materially lower risk at a near-identical price.',
        checked: CHECKED,
      },
      {
        id: 'g2a-checkout',
        kind: 'deal',
        value: 'No add-ons',
        title: 'Decline the add-ons you did not ask for',
        detail:
          'Read each checkout step and untick anything optional. This is the most reliable saving on the platform.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compare the final total, not the listing price',
        body: 'Add-ons and payment fees can move a marketplace price closer to the official store than it first appears.',
      },
      {
        title: 'Check the platform the key activates on',
        body: 'Listings specify Steam, Origin, Uplay, Xbox or a regional store. A key for the wrong platform is unusable.',
      },
      {
        title: 'Big first-party sales beat marketplaces',
        body: 'During a major seasonal sale the official store is often within a couple of percent, with none of the risk.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Third-party key marketplace' },
      { label: 'Coupons', value: 'Frequent' },
      { label: 'Checkout', value: 'Optional add-ons — read every step' },
      { label: 'Main risk', value: 'Region locks, revoked keys, seller quality' },
    ],
    faq: [
      {
        q: 'Is G2A legitimate?',
        a: 'It is a large, established marketplace, and most orders complete without incident. The criticisms — key provenance and checkout add-ons — are about the model, not about whether you will receive something.',
      },
      {
        q: 'Why is my total higher than the listed price?',
        a: 'Optional add-ons and payment-method fees are applied at checkout. Untick what you do not want before paying.',
      },
      {
        q: 'Should I buy new releases here?',
        a: 'It is the riskiest case: new-release keys are the ones most likely to be sourced questionably. On a full-price new game, the official store is the safer purchase.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'gog',
    name: 'GOG',
    domain: 'gog.com',
    siteLabel: 'gog.com',
    badge: 'GG',
    color: '#5A2A8A',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'DRM-free store with a proper refund policy and deep seasonal sales.',
    about: [
      'GOG sells PC games DRM-free: you download an installer and it is yours, offline, without a launcher requirement. The catalogue mixes restored classics with current independent and mid-sized releases.',
      'It is a first-party store, so the discount comes from sales rather than codes. GOG’s seasonal sales are among the deepest in PC gaming, the refund policy is unusually generous for digital goods, and the DRM-free guarantee is the actual product — it is why people pay here rather than a couple of pounds less on a key marketplace.',
    ],
    offers: [
      {
        id: 'gog-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal sales with very deep discounts',
        detail:
          'The main mechanic. Older catalogue titles fall to a few units of currency during the big events.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'gog-refund',
        kind: 'deal',
        value: 'Refund',
        title: 'Refund policy on purchases',
        detail:
          'GOG operates a customer-friendly refund window even on downloaded games, which is rare in digital storefronts.',
        checked: CHECKED,
      },
      {
        id: 'gog-giveaways',
        kind: 'deal',
        value: 'Free games',
        title: 'Recurring free-game giveaways',
        detail:
          'GOG gives away a title outright fairly regularly. Keeping an account costs nothing.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Back up the installers',
        body: 'DRM-free means the file works forever. Download and keep the installer rather than relying on the store still being there.',
      },
      {
        title: 'Wishlist and wait',
        body: 'Almost everything discounts within a few months. GOG notifies you when a wishlisted game drops.',
      },
      {
        title: 'Check regional pricing',
        body: 'GOG has moved toward flat pricing in many regions, which can make it dearer than a regionally priced store — and cheaper than one.',
      },
    ],
    facts: [
      { label: 'Owner', value: 'CD Projekt' },
      { label: 'DRM', value: 'None — standalone installers' },
      { label: 'Refunds', value: 'Generous by digital-store standards' },
      { label: 'Discounting', value: 'Seasonal sales, not coupon codes' },
    ],
    faq: [
      {
        q: 'Are there GOG promo codes?',
        a: 'Rarely. GOG discounts by putting games on sale, and its sales are deep enough that a code would be redundant.',
      },
      {
        q: 'What does DRM-free actually mean here?',
        a: 'You download an installer that runs without a client, an account check or an internet connection. Copy it to a drive and it will still install years later.',
      },
      {
        q: 'Can I get a refund on a game I have played?',
        a: 'GOG’s policy is unusually accommodating for digital purchases, though not unlimited. Check the current terms — it is one of the better ones in the industry.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'playstation-store',
    name: 'PlayStation Store',
    domain: 'store.playstation.com',
    siteLabel: 'store.playstation.com',
    badge: 'PS',
    color: '#1F4FA8',
    category: 'gaming',
    markets: 'Worldwide via regional stores tied to your account country',
    blurb: 'First-party console store — sales and the subscription, never a code.',
    about: [
      'The PlayStation Store is Sony’s first-party digital storefront, tied to the country on your account. It does not run a coupon economy: prices move through scheduled sales and through the subscription tiers.',
      'What replaces coupons here is timing and membership. The seasonal sales are deep and predictable, subscription tiers include a rotating catalogue and monthly titles, and prepaid wallet top-ups bought from third-party retailers are frequently discounted — which is the closest thing to a genuine promo code in the console ecosystem.',
    ],
    offers: [
      {
        id: 'psn-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled store sales',
        detail:
          'Predictable, deep and applied without a code. Almost every non-current title reaches a large discount within a year.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'psn-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Subscription tiers with a games catalogue',
        detail:
          'The higher tiers include a rotating library. For anyone playing more than a few games a year the maths favours the subscription.',
        checked: CHECKED,
      },
      {
        id: 'psn-wallet',
        kind: 'deal',
        value: 'Coupons',
        title: 'Discounted wallet top-up cards from retailers',
        detail:
          'Third-party retailers discount PSN credit periodically. Topping up during one of those is a real reduction on everything you subsequently buy.',
        checked: CHECKED,
      },
      {
        id: 'psn-member-discount',
        kind: 'deal',
        value: 'Member',
        title: 'Extra member-only discounts during sales',
        detail: 'Subscribers see a further reduction on many sale titles.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy credit on discount, spend it later',
        body: 'Wallet top-ups bought at a discount effectively reduce the price of everything you buy afterwards, including sale titles.',
      },
      {
        title: 'Your account region sets your prices',
        body: 'Store prices follow the account country, not your location. Changing it is against the terms and breaks your existing balance.',
      },
      {
        title: 'Refunds are narrow on digital games',
        body: 'Once downloaded or streamed, a digital game is generally non-refundable. Buy carefully rather than counting on a return.',
      },
    ],
    facts: [
      { label: 'Store', value: 'First-party, regional by account country' },
      { label: 'Promo codes', value: 'Not part of the pricing model' },
      { label: 'Best levers', value: 'Sales, subscription tiers, discounted credit' },
      { label: 'Refunds', value: 'Limited once downloaded' },
    ],
    faq: [
      {
        q: 'Are there PlayStation Store discount codes?',
        a: 'Not as a general mechanic. Sony discounts by running sales and by bundling games into subscription tiers. Occasional promotional codes exist for specific campaigns.',
      },
      {
        q: 'Is the subscription worth it?',
        a: 'Above roughly three or four full-price games a year, the higher tiers pay for themselves through the included catalogue. Below that, buying on sale is cheaper.',
      },
      {
        q: 'Can I buy from a cheaper region?',
        a: 'Prices follow your account country, and changing it to arbitrage pricing breaches the terms and can strand your wallet balance. Not worth it.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'green-man-gaming',
    name: 'Green Man Gaming',
    domain: 'greenmangaming.com',
    siteLabel: 'greenmangaming.com',
    badge: 'GMG',
    color: '#1F7A4A',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'Authorised key reseller — the safe middle between Steam and a marketplace.',
    about: [
      'Green Man Gaming is an authorised digital retailer: it buys keys from publishers and sells them, rather than hosting third-party sellers. That is the important distinction from the grey-market marketplaces, and it is why keys bought here do not get revoked.',
      'Because it is authorised, it can discount below the first-party stores while remaining legitimate — publisher-funded promotions, a loyalty programme returning credit on purchases, and frequent voucher codes that genuinely apply. On pre-orders and new releases it is routinely the cheapest legitimate option.',
    ],
    offers: [
      {
        id: 'gmg-vouchers',
        kind: 'deal',
        value: 'Coupons',
        title: 'Voucher codes on top of sale pricing',
        detail:
          'Site-wide codes are issued regularly and stack with the promotional price. Unusual and genuine.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'gmg-preorder',
        kind: 'deal',
        value: 'Sale',
        title: 'New releases and pre-orders below first-party pricing',
        detail:
          'As an authorised reseller it can undercut the platform stores on day one, legitimately.',
        checked: CHECKED_R2,
      },
      {
        id: 'gmg-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme returning credit',
        detail: 'Points on purchases convert into money off later orders.',
        checked: CHECKED_R2,
      },
      {
        id: 'gmg-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal sales matching the platform events',
        detail: 'Runs alongside the big first-party sales and frequently goes deeper.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the activation platform',
        body: 'Keys are for a specific store — Steam, Epic, a publisher launcher. The listing says which; buying the wrong one is unrecoverable.',
      },
      {
        title: 'Stack the voucher on the sale price',
        body: 'That combination is where this retailer beats the first-party stores. Look for a live code before checking out.',
      },
      {
        title: 'Authorised means no revocation risk',
        body: 'That is what you are buying versus a grey marketplace, and it is worth a small price difference.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Authorised digital retailer, not a marketplace' },
      { label: 'Keys', value: 'Publisher-supplied — no revocation risk' },
      { label: 'Loyalty', value: 'Points returning credit' },
      { label: 'Strength', value: 'New releases and pre-orders' },
    ],
    faq: [
      {
        q: 'Is Green Man Gaming legitimate?',
        a: 'Yes — it is an authorised retailer buying keys from publishers, which is a different business from a marketplace where third parties resell keys of unknown origin.',
      },
      {
        q: 'Can keys be revoked?',
        a: 'Not in the way grey-market keys can, because these come through official channels.',
      },
      {
        q: 'Do the voucher codes really work?',
        a: 'Yes, and they stack with sale pricing, which is the main reason to check here before buying on Steam.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'gamivo',
    name: 'Gamivo',
    domain: 'gamivo.com',
    siteLabel: 'gamivo.com',
    badge: 'GM',
    color: '#7A2AB0',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'Key marketplace with a paid protection tier — read what it covers.',
    about: [
      'Gamivo is a third-party key marketplace: independent sellers list game keys, software licences and subscription top-ups, and the platform takes a cut. Prices sit well below the first-party stores for the same reasons as its competitors — regional sourcing and thin margins.',
      'The distinctive feature is Smart, a paid membership that lowers prices and includes a protection layer on purchases. That matters because the risk on any key marketplace is a revoked or region-locked key, and the platform sells the mitigation separately from the key. Price the protection into the comparison rather than treating it as optional on an expensive title.',
    ],
    offers: [
      {
        id: 'gamivo-smart',
        kind: 'deal',
        value: 'Member',
        title: 'Paid membership with lower prices and protection',
        detail:
          'Reduces prices across the catalogue and adds a protection layer. On several purchases a year it pays for itself.',
        terms: 'A recurring subscription — check the renewal terms.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'gamivo-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare sellers on the same title',
        detail:
          'Several sellers list the same key at different prices and ratings. The cheapest is not always the one to take.',
        checked: CHECKED_R2,
      },
      {
        id: 'gamivo-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Platform sale events and coupon codes',
        detail: 'Site-wide campaigns run frequently on top of already-low marketplace pricing.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the region lock before you pay',
        body: 'A key that will not activate in your country is worthless. The restriction is stated on the listing.',
      },
      {
        title: 'Buy protection on expensive keys, self-insure on cheap ones',
        body: 'On a five-pound indie game, take the risk. On a new release, do not.',
      },
      {
        title: 'Compare against the first-party sale',
        body: 'During a big Steam or Epic sale the gap frequently closes to nothing, and the official purchase carries no key risk.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Third-party key marketplace' },
      { label: 'Membership', value: 'Paid tier with lower prices and protection' },
      { label: 'Main risks', value: 'Region locks and revoked keys' },
      { label: 'Coverage', value: 'Worldwide' },
    ],
    faq: [
      {
        q: 'Is Gamivo safe?',
        a: 'It is an established marketplace with a dispute process, and most orders complete normally. The structural risk is the seller and the key origin, which is what the paid protection addresses.',
      },
      {
        q: 'Is the Smart membership worth it?',
        a: 'Above a few purchases a year, the price reduction alone usually covers it. Check the renewal terms before subscribing.',
      },
      {
        q: 'What if my key does not work?',
        a: 'Raise it through the platform’s dispute process. With protection the outcome is more predictable; without it you are arguing with a seller.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'humble-bundle',
    name: 'Humble Bundle',
    domain: 'humblebundle.com',
    siteLabel: 'humblebundle.com',
    badge: 'HB',
    color: '#B0161E',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'Pay-what-you-want bundles with a charity split — the tiers are the mechanic.',
    about: [
      'Humble Bundle sells games, ebooks and software in pay-what-you-want bundles with a portion going to charity, alongside a monthly subscription that delivers a set of games each month and a normally priced store.',
      'The bundle model is the interesting part: you choose the price, and hitting each tier unlocks more of the contents. The per-game cost at the top tier is usually a fraction of buying anything in it individually, and you can adjust how the payment splits between the publisher, the platform and the charity. Nothing here needs a coupon.',
    ],
    offers: [
      {
        id: 'humble-bundles',
        kind: 'deal',
        value: 'Bundle',
        title: 'Pay-what-you-want tiered bundles',
        detail:
          'The top tier is normally a fraction of the individual prices. Paying just above a tier threshold is the efficient point.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'humble-choice',
        kind: 'deal',
        value: 'Member',
        title: 'Monthly subscription with a games bundle',
        detail:
          'A set of games each month plus a store discount. Worth it if you play them; a slow accumulation of unplayed keys if not.',
        terms: 'Recurring — pausing a month is supported and underused.',
        checked: CHECKED_R2,
      },
      {
        id: 'humble-store',
        kind: 'deal',
        value: 'Sale',
        title: 'Store sales and subscriber discount',
        detail: 'Normal storefront pricing with sales, plus a standing discount for subscribers.',
        checked: CHECKED_R2,
      },
      {
        id: 'humble-charity',
        kind: 'deal',
        value: 'Free',
        title: 'Adjustable charity split',
        detail:
          'You control how the payment divides. Not a discount, but it is a real feature and people do not know it exists.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Pay a penny above the tier, not more',
        body: 'Tiers unlock at thresholds. Paying the suggested amount rather than the threshold is pure generosity — fine if intended.',
      },
      {
        title: 'Pause the subscription rather than cancelling',
        body: 'If a month’s selection does not appeal, pausing keeps your account and skips the charge.',
      },
      {
        title: 'Check you do not already own them',
        body: 'Bundles reuse popular titles. Cross-check your library before paying for a bundle you half-own.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Pay-what-you-want bundles, subscription, store' },
      { label: 'Charity', value: 'Adjustable split on each purchase' },
      { label: 'Keys', value: 'Official, from publishers' },
      { label: 'Subscription', value: 'Pausable month to month' },
    ],
    faq: [
      {
        q: 'Are Humble Bundle keys legitimate?',
        a: 'Yes — they come from publishers directly. This is not a grey-market marketplace.',
      },
      {
        q: 'Is the monthly subscription worth it?',
        a: 'If you play two of the games in a typical month, comfortably. If you are accumulating a library you never open, pause it.',
      },
      {
        q: 'How much of my money goes to charity?',
        a: 'Whatever you set — the split between publisher, platform and charity is adjustable on each purchase.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'ubisoft-store',
    name: 'Ubisoft Store',
    domain: 'store.ubisoft.com',
    siteLabel: 'store.ubisoft.com',
    badge: 'UB',
    color: '#1A1A1A',
    category: 'gaming',
    markets: 'US, UK, Germany, France, Poland and other country storefronts',
    blurb: 'First-party publisher store — the subscription is cheaper than buying.',
    about: [
      'The Ubisoft Store sells the publisher’s own catalogue directly, alongside its subscription service which includes the back catalogue and day-one access to new releases for a monthly fee.',
      'For a publisher whose games are large, occasional purchases, the subscription is frequently the better arithmetic: one month costs a fraction of one new release, and you can finish a game and cancel. Beyond that the store runs deep seasonal sales and a loyalty programme that returns credit on purchases and in-game activity.',
    ],
    offers: [
      {
        id: 'ubisoft-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Subscription with day-one access to new releases',
        detail:
          'One month costs a fraction of one new game. Finish it and cancel — that is a legitimate way to use it.',
        terms: 'Recurring monthly; access ends when the subscription does.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'ubisoft-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Deep seasonal sales on the back catalogue',
        detail: 'Older titles fall very low during the scheduled events.',
        checked: CHECKED_R2,
      },
      {
        id: 'ubisoft-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme returning credit',
        detail: 'Points from purchases and in-game activity convert into store discounts.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Subscribe for the game, then cancel',
        body: 'A month of the subscription costs far less than a new release. Access ends when you stop paying — that is the trade.',
      },
      {
        title: 'Wait for the seasonal sale on older titles',
        body: 'Back-catalogue pricing during the scheduled events is a fraction of the list price.',
      },
      {
        title: 'Check whether an authorised reseller is cheaper',
        body: 'For a permanent purchase, an authorised key retailer sometimes undercuts the publisher’s own store.',
      },
    ],
    facts: [
      { label: 'Model', value: 'First-party publisher store plus subscription' },
      { label: 'Subscription', value: 'Day-one access to new releases while active' },
      { label: 'Loyalty', value: 'Credit from purchases and play' },
      { label: 'Markets', value: 'Country storefronts with local pricing' },
    ],
    faq: [
      {
        q: 'Is the Ubisoft subscription better than buying?',
        a: 'For one or two games a year, yes — a month costs a fraction of a new release. You lose access when you cancel, which is the trade-off.',
      },
      {
        q: 'Do I keep the games if I cancel?',
        a: 'No. Subscription access ends with the subscription. Purchased games are yours.',
      },
      {
        q: 'When are the big sales?',
        a: 'On the usual seasonal schedule, aligned with the platform-wide events. Back-catalogue pricing gets very low.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'difmark',
    name: 'Difmark',
    domain: 'difmark.com',
    siteLabel: 'difmark.com',
    badge: 'DF',
    color: '#2A2A6B',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'Marketplace for keys, in-game currency and accounts — accounts are the risky part.',
    about: [
      'Difmark is a marketplace for digital gaming goods: game keys, in-game currency, top-ups and game accounts, sold by third-party sellers with the platform holding payment until delivery.',
      'Keys and top-ups behave like any key marketplace — cheap, with region-lock and provenance risk. Accounts are a different matter and worth a plain warning: buying, selling or sharing game accounts breaches the terms of service of essentially every publisher, and the usual outcome when it is detected is a permanent ban with no recourse and no refund. That risk sits with the buyer, not the marketplace.',
    ],
    offers: [
      {
        id: 'difmark-keys',
        kind: 'deal',
        value: 'Coupons',
        title: 'Marketplace pricing on keys and top-ups',
        detail:
          'Well below first-party stores, with the usual marketplace caveats about region locks and provenance.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'difmark-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare sellers by rating, not only by price',
        detail:
          'Established sellers with long histories are a materially lower risk at a similar price.',
        checked: CHECKED_R2,
      },
      {
        id: 'difmark-escrow',
        kind: 'deal',
        value: 'Protection',
        title: 'Payment held until delivery is confirmed',
        detail: 'Do not confirm until the key has actually activated. That is the protection.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Do not buy game accounts',
        body: 'It breaches publisher terms and the usual result is a permanent ban. No marketplace guarantee survives that.',
      },
      {
        title: 'Check the region lock first',
        body: 'On keys it is the single most common reason a cheap purchase turns out to be unusable.',
      },
      {
        title: 'Activate before confirming receipt',
        body: 'Confirming releases the payment and ends the dispute window.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Third-party marketplace for digital gaming goods' },
      { label: 'Sells', value: 'Keys, in-game currency, top-ups, accounts' },
      { label: 'Protection', value: 'Payment held until delivery is confirmed' },
      { label: 'Serious risk', value: 'Account purchases breach publisher terms' },
    ],
    faq: [
      {
        q: 'Is it safe to buy a game account?',
        a: 'No. It breaches the terms of service of essentially every publisher and the typical consequence is a permanent ban on the account you paid for. The marketplace cannot protect you from that.',
      },
      {
        q: 'Are the keys legitimate?',
        a: 'They come from third-party sellers, so provenance varies. Check the seller rating and the region lock, and activate before confirming receipt.',
      },
      {
        q: 'How does buyer protection work?',
        a: 'Payment is held until you confirm delivery. Confirming early is how people lose that protection.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'skycoach',
    name: 'Skycoach',
    domain: 'skycoach.gg',
    siteLabel: 'skycoach.gg',
    badge: 'SC',
    color: '#1F5CB0',
    category: 'gaming',
    markets: 'Worldwide',
    blurb: 'Game boosting and coaching — coaching is fine, boosting risks your account.',
    about: [
      'Skycoach is a marketplace for in-game services: boosting, coaching, in-game currency, items and accounts, delivered by verified players across the major online games.',
      'The two halves of that catalogue carry very different risks and it is worth separating them. Coaching — a better player teaching you over a call while you play — breaches nothing and is a legitimate service. Boosting, where someone else logs into your account and plays it, breaches the terms of service of essentially every online game, and account sharing is detectable. Publishers suspend and ban for it, and no service guarantee compensates for a lost account.',
    ],
    offers: [
      {
        id: 'skycoach-coaching',
        kind: 'deal',
        value: 'Compare',
        title: 'Coaching sessions rather than account boosting',
        detail:
          'A coach teaching you while you play breaches no terms, and the improvement persists after the session. The boosting does not.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'skycoach-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Package pricing on longer service orders',
        detail: 'Per-hour and per-tier rates fall on larger orders.',
        checked: CHECKED_R2,
      },
      {
        id: 'skycoach-promos',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal promotions and coupon codes',
        detail: 'Regular site-wide campaigns across the service catalogue.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Understand the account risk before buying a boost',
        body: 'Account sharing breaches the rules of every major online game. Detection means suspension or a permanent ban, and that is your loss, not the seller’s.',
      },
      {
        title: 'Self-play services carry less risk',
        body: 'Where the service is delivered while you play your own account, you are not sharing credentials. That is the safer half of the catalogue.',
      },
      {
        title: 'Never reuse a password you use elsewhere',
        body: 'If you do share credentials against this advice, that password must exist nowhere else and must be changed afterwards.',
      },
    ],
    facts: [
      { label: 'Services', value: 'Boosting, coaching, currency, items, accounts' },
      { label: 'Coaching', value: 'Legitimate — breaches no terms' },
      { label: 'Boosting', value: 'Breaches publisher terms; ban risk is yours' },
      { label: 'Coverage', value: 'Worldwide, major online games' },
    ],
    faq: [
      {
        q: 'Can I get banned for using a boosting service?',
        a: 'Yes. Account sharing breaches the terms of service of essentially every online game, publishers detect it, and the penalty is suspension or permanent loss of the account. No seller guarantee covers that.',
      },
      {
        q: 'Is coaching against the rules too?',
        a: 'No. Someone teaching you while you play your own account is a normal service, and unlike a boost the improvement stays with you.',
      },
      {
        q: 'What is the safest way to use a service like this?',
        a: 'Buy coaching or self-play services rather than account boosting. If you share credentials anyway, use a password that exists nowhere else and change it immediately afterwards.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'star-stable',
    name: 'Star Stable',
    domain: 'starstable.com',
    siteLabel: 'starstable.com',
    badge: 'SS',
    color: '#5A2A7A',
    category: 'gaming',
    markets: 'Much of Europe, North America and Australia',
    blurb: 'Horse-riding MMO for younger players — a subscription with in-game currency on top.',
    about: [
      'Star Stable is an online horse-riding game with a large, mostly young player base. The game is free to start; progression beyond the early area requires a lifetime membership, and horses and cosmetics are bought with an in-game currency purchased separately.',
      'That two-currency structure is the thing for a parent to understand before buying. The membership is a one-off payment, which is unusually reasonable; the in-game currency is where ongoing spending happens, and it is bought in packs that get cheaper per unit at larger sizes. Setting a budget in advance is worth more than any discount.',
    ],
    offers: [
      {
        id: 'starstable-membership',
        kind: 'deal',
        value: 'Long term',
        title: 'Lifetime membership rather than monthly',
        detail:
          'A one-off payment unlocking the full game permanently, well below the cumulative cost of monthly access.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'starstable-packs',
        kind: 'deal',
        value: 'Bundle',
        title: 'Larger currency packs at a lower unit price',
        detail:
          'The per-unit price falls on bigger packs. Only buy the size that matches a budget you have already decided.',
        checked: CHECKED_R2,
      },
      {
        id: 'starstable-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns on memberships and packs',
        detail: 'Discounts cluster around holidays and in-game events.',
        checked: CHECKED_R2,
      },
      {
        id: 'starstable-free',
        kind: 'deal',
        value: 'Free',
        title: 'Free starting area before any payment',
        detail:
          'Enough to find out whether a child will keep playing before you buy anything at all.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Play the free area first',
        body: 'Children lose interest in games quickly. The free portion answers that question at no cost.',
      },
      {
        title: 'Set the in-game budget before, not after',
        body: 'The membership is a fixed cost; the currency is not. Agreeing an amount in advance is the whole of parental cost control here.',
      },
      {
        title: 'Turn off stored payment details',
        body: 'The most common complaint about games aimed at children is unintended repeat purchases. Removing the saved card solves it.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Europe, North America, Australia' },
      { label: 'Model', value: 'Free start, one-off membership, in-game currency' },
      { label: 'Audience', value: 'Largely younger players' },
      { label: 'Parent tip', value: 'Set a currency budget and remove saved cards' },
    ],
    faq: [
      {
        q: 'Is Star Stable free?',
        a: 'The starting area is. Progressing beyond it needs a membership, and horses and cosmetics need in-game currency bought separately.',
      },
      {
        q: 'Is the lifetime membership worth it?',
        a: 'If the child is going to keep playing, yes — it is far cheaper than paying monthly. Use the free area to establish that first.',
      },
      {
        q: 'How do I stop unexpected charges?',
        a: 'Do not store a payment method on the account, and agree a currency budget in advance. That is the practical control.',
      },
    ],
    updated: CHECKED_R2,
  },
]
