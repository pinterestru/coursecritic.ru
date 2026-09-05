/**
 * Home, family & hobby stores.
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

export const homeStores: Store[] = [
  {
    slug: 'firstcry',
    name: 'FirstCry',
    domain: 'firstcry.com',
    siteLabel: 'firstcry.com',
    badge: 'FC',
    color: '#C4396B',
    category: 'home',
    markets: 'India only',
    blurb: 'Baby and kids retail where club membership and coupons are the whole model.',
    about: [
      'FirstCry is India’s largest baby and children’s retailer, selling clothing, toys, nappies, feeding equipment and gear online with a large franchise store network alongside.',
      'This is a genuine coupon business. The site runs continuous percentage codes, club membership tiers, cashback into a wallet, and free-gift thresholds, and the categories that matter — nappies and formula — are bought repeatedly, which makes the wallet and club mechanics compound in a way a one-off code does not.',
    ],
    offers: [
      {
        id: 'firstcry-club',
        kind: 'deal',
        value: 'Member',
        title: 'Club membership — standing discounts and wallet cashback',
        detail:
          'The membership tier discounts repeat purchases and returns cashback into a site wallet. On nappies and formula, bought monthly, this is the largest lever.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'firstcry-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring sale events across clothing and toys',
        detail:
          'Apparel and toys are discounted continuously and deeply; the essentials categories much less so.',
        checked: CHECKED,
      },
      {
        id: 'firstcry-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card offers at payment',
        detail: 'Rotating instant discounts by issuer, applied after any coupon.',
        checked: CHECKED,
      },
      {
        id: 'firstcry-bulk',
        kind: 'deal',
        value: 'Deal',
        title: 'Bulk pricing on nappies and wipes',
        detail:
          'The larger pack sizes carry a materially lower unit price, before any discount. Buy the biggest pack the child will fit before outgrowing.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Wallet cashback is not cash',
        body: 'It is credit against the next FirstCry order. Fine if you shop here monthly, worth discounting mentally if you do not.',
      },
      {
        title: 'Size up on clothing',
        body: 'Children grow faster than delivery times. Buying the next size at sale prices is the cheapest way to dress a toddler.',
      },
      {
        title: 'Essentials do not go on deep discount',
        body: 'Formula and nappies are thin-margin. The club discount and pack size are the levers there, not sale events.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Model', value: 'Retail plus franchise stores' },
      { label: 'Membership', value: 'Paid club tier with per-order benefits' },
      { label: 'Returns', value: 'Category-dependent; hygiene items excluded' },
    ],
    faq: [
      {
        q: 'Do FirstCry coupons work on nappies and formula?',
        a: 'Often not, or at a much lower percentage. Those categories are discounted through club membership and pack size instead.',
      },
      {
        q: 'Is the club membership worth paying for?',
        a: 'If you buy monthly essentials here, it pays back quickly. For occasional clothing purchases, no.',
      },
      {
        q: 'Does FirstCry ship outside India?',
        a: 'The main storefront serves India. Separate regional operations exist under the same brand in some markets.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'igp',
    name: 'IGP',
    domain: 'igp.com',
    siteLabel: 'igp.com',
    badge: 'IGP',
    color: '#A0264C',
    category: 'home',
    markets: 'Worldwide gifting into India and several other countries',
    blurb: 'Gift delivery where the delivery slot matters more than the discount.',
    about: [
      'IGP delivers gifts — flowers, cakes, personalised items, hampers — mostly into India, and is used heavily by people abroad sending to family at home. Same-day and midnight delivery are the core proposition.',
      'Discounting is straightforward: recurring percentage codes, festival campaigns, and free or upgraded delivery over a threshold. But the thing that actually determines whether the purchase worked is the delivery slot and the substitution policy, and no code compensates for a cake arriving the day after a birthday.',
    ],
    offers: [
      {
        id: 'igp-festival',
        kind: 'deal',
        value: 'Sale',
        title: 'Festival campaign pricing',
        detail:
          'IGP’s calendar is built around the Indian festival cycle, and the campaign discounts around each are the deepest of the year.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'igp-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail: 'A welcome percentage on a first order, with a minimum spend.',
        checked: CHECKED,
      },
      {
        id: 'igp-delivery',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free or upgraded delivery above a spend threshold',
        detail:
          'Midnight and same-day slots carry a surcharge that a threshold order removes. On gifting, that surcharge is often the largest line after the gift.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Order ahead of the festival, not during it',
        body: 'Slots sell out and surcharges rise as a festival approaches. The same gift is cheaper and more reliable a week early.',
      },
      {
        title: 'Read the substitution clause',
        body: 'Flowers and cakes are substituted for equivalents when stock is short. Knowing that in advance is better than discovering it from a photo.',
      },
      {
        title: 'Personalised items cannot be returned',
        body: 'Check the spelling on the preview screen. That is the whole remedy.',
      },
    ],
    facts: [
      { label: 'Delivers to', value: 'India primarily, plus selected other countries' },
      { label: 'Speciality', value: 'Same-day and midnight delivery' },
      { label: 'Returns', value: 'Not applicable to perishables and personalised goods' },
      { label: 'Peak', value: 'Indian festival calendar' },
    ],
    faq: [
      {
        q: 'Can I send a gift to India from abroad?',
        a: 'Yes — that is IGP’s main use case. You pay in your currency and the gift is fulfilled locally in India.',
      },
      {
        q: 'What happens if the item is out of stock?',
        a: 'It is substituted with something of equivalent value under the published substitution policy. If exactness matters, choose a category where substitution is unlikely.',
      },
      {
        q: 'Do codes apply to the delivery charge?',
        a: 'Usually not. Percentage codes apply to the gift value; the same-day and midnight surcharges sit outside them.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'lenox',
    name: 'Lenox',
    domain: 'lenox.com',
    siteLabel: 'lenox.com',
    badge: 'LX',
    color: '#3D4C6B',
    category: 'home',
    markets: 'United States',
    blurb: 'Tableware and giftware that discounts on a predictable seasonal cycle.',
    about: [
      'Lenox makes dinnerware, crystal, giftware and Christmas ornaments, sold direct in the US. It is an old American tableware brand with a catalogue built around collections that stay in production for years.',
      'That longevity is the key to buying it well. Collections are retired on a schedule, and retired patterns are discounted hard; the Christmas ornament business runs a clearance cycle every January that is the cheapest the same product will ever be. Codes exist and are frequent, but the seasonal calendar is the larger effect.',
    ],
    offers: [
      {
        id: 'lenox-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Retired-pattern and seasonal clearance',
        detail:
          'Discontinued collections and post-holiday ornament clearance are the deepest prices the brand reaches, and they need no code.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'lenox-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring site-wide percentage events',
        detail:
          'Lenox runs frequent advertised sales through the year, weighted towards the gifting season.',
        checked: CHECKED,
      },
      {
        id: 'lenox-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Email signup offer for new customers',
        detail: 'A first-order discount for new subscribers on full-price stock.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy ornaments in January',
        body: 'The annual dated ornaments are cleared immediately after the holiday. They do not change between then and next December.',
      },
      {
        title: 'Check whether the pattern is being retired',
        body: 'If you are building a set, a retired pattern is cheap now and unobtainable in two years. Buy the full set or avoid it.',
      },
      {
        title: 'Open-stock replacements exist',
        body: 'You do not have to buy a boxed set to replace one broken plate. Open stock is usually cheaper per piece.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Catalogue', value: 'Dinnerware, crystal, giftware, ornaments' },
      { label: 'Best value', value: 'Retired patterns and January clearance' },
      { label: 'Returns', value: 'Standard US retail window' },
    ],
    faq: [
      {
        q: 'When is the best time to buy Lenox?',
        a: 'January for ornaments and holiday giftware, and whenever a pattern is marked as retiring for dinnerware. Both beat any code.',
      },
      {
        q: 'Do Lenox codes apply to clearance?',
        a: 'Usually not. Clearance is already below what the code would produce.',
      },
      {
        q: 'Is the dinnerware dishwasher safe?',
        a: 'Depends on the collection — the metallic-banded patterns generally are not. It is stated on the product page and it is the fact worth checking before buying a set.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'cricut',
    name: 'Cricut',
    domain: 'cricut.com',
    siteLabel: 'cricut.com',
    badge: 'CR',
    color: '#1F7A6B',
    category: 'home',
    markets: 'United States and Canada',
    blurb: 'Cutting machines where the machine is cheap and the consumables are not.',
    about: [
      'Cricut sells cutting machines for crafting, plus the materials, blades, mats and a design subscription that make them useful. The machines go on deep discount regularly; the ecosystem around them does not.',
      'That is the thing to understand before buying. The total cost of a Cricut is the machine plus vinyl, transfer tape, replacement mats, blades and — for most people — the design subscription. A 40% machine discount matters less than knowing the yearly running cost, and the subscription is the line people forget.',
    ],
    offers: [
      {
        id: 'cricut-machine-sale',
        kind: 'deal',
        value: 'Bundle',
        title: 'Machine bundles at seasonal events',
        detail:
          'Machines are discounted hard several times a year, usually as a bundle with materials. Buying a machine at full price is unnecessary.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'cricut-materials',
        kind: 'deal',
        value: 'Outlet',
        title: 'Material multipacks and clearance',
        detail:
          'Vinyl and cardstock multipacks cut the per-sheet cost substantially, and the clearance section rotates constantly.',
        checked: CHECKED,
      },
      {
        id: 'cricut-trial',
        kind: 'deal',
        value: 'Free trial',
        title: 'Design Space subscription trial',
        detail:
          'A free trial of the design subscription. Use it to decide whether you need it — many projects do not — before it renews.',
        terms: 'Renews at the standard rate unless cancelled before the trial ends.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy third-party vinyl',
        body: 'Generic vinyl and transfer tape work in these machines and cost a fraction of the branded equivalent. This is the largest ongoing saving available.',
      },
      {
        title: 'Diarise the subscription trial',
        body: 'The design subscription auto-renews. Decide before the date, not after the charge.',
      },
      {
        title: 'Mats are consumable',
        body: 'Budget for replacements. Cleaning them extends life considerably, and most people discover this after buying four.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'United States, Canada' },
      { label: 'Ongoing cost', value: 'Materials, blades, mats, optional subscription' },
      { label: 'Machine discounts', value: 'Frequent and deep, usually as bundles' },
      { label: 'Returns', value: 'Standard window on unopened machines' },
    ],
    faq: [
      {
        q: 'Do I need the Cricut subscription?',
        a: 'Not to use the machine. It gives you a design library and some features; plenty of people upload their own files instead. Try it free and decide before it renews.',
      },
      {
        q: 'When do Cricut machines go on sale?',
        a: 'Around the major US retail events and repeatedly through the crafting season. Waiting is nearly always rewarded.',
      },
      {
        q: 'Can I use non-Cricut materials?',
        a: 'Yes, for vinyl, cardstock and transfer tape. It is the main way regular users keep the running cost down.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'wilson',
    name: 'Wilson',
    domain: 'wilson.com',
    siteLabel: 'wilson.com',
    badge: 'WI',
    color: '#B02A1E',
    category: 'home',
    markets: 'United States, UK, Germany and other country storefronts',
    blurb: 'Sports equipment direct, where last year’s racket is the deal.',
    about: [
      'Wilson sells rackets, balls, bats, gloves and sports apparel direct through country storefronts. It is a manufacturer store rather than a general sports retailer, so the range is deep in its own lines and absent everywhere else.',
      'Equipment discounting follows the model-year cycle. Tennis rackets in particular get a cosmetic refresh far more often than a real one, and the outgoing paint job of the same frame sells at a large discount. Codes exist on apparel and accessories; on frames, the outgoing model is the discount.',
    ],
    offers: [
      {
        id: 'wilson-previous',
        kind: 'deal',
        value: 'Last season',
        title: 'Previous model-year rackets and equipment',
        detail:
          'The most reliable saving. Frames often carry over unchanged between paint jobs; the discount does not.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'wilson-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal sale on apparel and accessories',
        detail: 'The apparel side discounts on a normal fashion calendar, twice a year.',
        checked: CHECKED,
      },
      {
        id: 'wilson-custom',
        kind: 'deal',
        value: 'Member',
        title: 'Customisation and team programmes',
        detail:
          'Wilson runs team and bulk programmes with their own pricing. Worth asking about if you are buying for a club rather than yourself.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'The frame matters, the paint does not',
        body: 'Check whether the new model changed the specification or only the cosmetics. Very often it is the latter.',
      },
      {
        title: 'Buy balls in bulk',
        body: 'Pressurised balls have a shelf life but a case is dramatically cheaper per can, and any regular player gets through them.',
      },
      {
        title: 'Compare with specialist retailers',
        body: 'On current-model rackets, specialist tennis shops often beat the manufacturer store and offer stringing.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, UK, DE and other country storefronts' },
      { label: 'Best value', value: 'Previous model-year equipment' },
      { label: 'Returns', value: 'Standard window; strung rackets may differ' },
      { label: 'Programmes', value: 'Team and bulk pricing on request' },
    ],
    faq: [
      {
        q: 'Is last year’s racket worse?',
        a: 'Usually not in any way you will feel. Check whether the specification changed; if only the cosmetics did, the discount is free money.',
      },
      {
        q: 'Do Wilson codes work on equipment?',
        a: 'More often on apparel and accessories than on frames. The equipment discount is the model-year clearance.',
      },
      {
        q: 'Does Wilson ship internationally?',
        a: 'Each country storefront serves its own market. Use the one for where you are, since pricing and stock differ.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'dailyobjects',
    name: 'DailyObjects',
    domain: 'dailyobjects.com',
    siteLabel: 'dailyobjects.com',
    badge: 'DO',
    color: '#2B2B33',
    category: 'home',
    markets: 'India, with some shipping to the United States',
    blurb: 'Phone cases, bags and desk goods with a permanent code economy.',
    about: [
      'DailyObjects makes phone cases, laptop sleeves, bags, wallets and desk accessories, sold direct in India with some international shipping. The design language is minimal and the price points are mid-market for India.',
      'It runs a straightforward and genuinely active promotional programme: site-wide percentage codes, first-order discounts, bundle pricing across accessories and frequent sale events. On this kind of catalogue, where nothing is a necessity, discounting is continuous by design.',
    ],
    offers: [
      {
        id: 'dailyobjects-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring site-wide percentage sales',
        detail:
          'The site runs advertised events most months. Buying between them is paying the anchor price.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'dailyobjects-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundle pricing across cases and accessories',
        detail:
          'Buying a case with a screen protector or a sleeve with a bag is priced below the two separately.',
        checked: CHECKED,
      },
      {
        id: 'dailyobjects-first',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail: 'A welcome code for new accounts, applied on full-price items.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy for the phone you have',
        body: 'Cases are model-specific and are cleared hard when a phone generation turns over. If your phone is a year old, its cases are cheap.',
      },
      {
        title: 'Personalised items are final sale',
        body: 'Custom-printed goods cannot be returned. Check the preview.',
      },
      {
        title: 'Watch the delivery threshold',
        body: 'On a single low-value accessory, postage can be a third of the order. Bundle to clear the free-delivery minimum.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'India, with some US shipping' },
      { label: 'Catalogue', value: 'Cases, sleeves, bags, desk accessories' },
      { label: 'Returns', value: 'Standard window; personalised items excluded' },
      { label: 'Promotions', value: 'Frequent site-wide events' },
    ],
    faq: [
      {
        q: 'Are DailyObjects promo codes reliable?',
        a: 'Yes — this is a catalogue that is discounted continuously. The question is usually whether a larger site-wide event is about to start.',
      },
      {
        q: 'Does it ship outside India?',
        a: 'To the United States on part of the catalogue. Elsewhere, generally not.',
      },
      {
        q: 'Can I return a custom-printed case?',
        a: 'No. Personalised goods are excluded from returns, so check the preview carefully before ordering.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'vevor',
    name: 'Vevor',
    domain: 'vevor.com',
    siteLabel: 'vevor.com',
    badge: 'VV',
    color: '#B0451A',
    category: 'home',
    markets: 'US, Canada, UK, Australia and much of Europe',
    blurb: 'Cheap industrial and garden equipment, discounted almost permanently.',
    about: [
      'Vevor sells business and industrial equipment direct to consumers: catering kit, workshop machinery, garden and agricultural tools, pet equipment and home hardware. It is manufacturer-direct cross-border, which is where the price gap against a specialist supplier comes from.',
      'The discounting is permanent — site-wide events, coupon codes, clearance — so nobody pays the list price. The trade-off is support: documentation is often thin, spare parts are not always available, and on machinery that matters more than on a kitchen gadget. For occasional or light use the value is real; for daily professional use, buy the brand with a parts channel.',
    ],
    offers: [
      {
        id: 'vevor-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Near-permanent site-wide discounting',
        detail: 'Events run continuously. Treat the crossed-out figure as an anchor.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'vevor-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Stackable coupon codes and new-customer offers',
        detail: 'A first-order code plus a running event generally combine at checkout.',
        checked: CHECKED_R2,
      },
      {
        id: 'vevor-local',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Local warehouse stock with free delivery',
        detail:
          'Much of the range ships from in-country warehouses, which on heavy equipment is the difference between practical and not.',
        checked: CHECKED_R2,
      },
      {
        id: 'vevor-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance and open-box stock',
        detail: 'Returned units at a further reduction, where available in your market.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check whether spare parts exist',
        body: 'On machinery this decides whether the purchase lasts three years or one. It is the real difference from a specialist supplier.',
      },
      {
        title: 'Read the specification, not the category',
        body: 'Products here are often lighter-duty than the listing photograph implies. Motor power and material thickness are the honest figures.',
      },
      {
        title: 'Buy light-use, not professional-use',
        body: 'For occasional jobs the value is excellent. For daily commercial work the economics reverse.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, CA, UK, AU and much of Europe' },
      { label: 'Catalogue', value: 'Industrial, catering, garden, workshop, pet' },
      { label: 'Discounting', value: 'Permanent' },
      { label: 'Weak point', value: 'Documentation and spare parts' },
    ],
    faq: [
      {
        q: 'Is Vevor equipment any good?',
        a: 'For light and occasional use, generally yes at the price. For daily professional use the thin parts and documentation support becomes the problem rather than the build.',
      },
      {
        q: 'Where does it ship from?',
        a: 'Local warehouses in most of its markets, which is what makes buying heavy equipment practical. Check on the product page.',
      },
      {
        q: 'Do the coupons stack?',
        a: 'A site event and a first-order code usually combine. The listed price is never the price.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'costway',
    name: 'Costway',
    domain: 'costway.com',
    siteLabel: 'costway.com',
    badge: 'CW',
    color: '#1F6B8A',
    category: 'home',
    markets: 'United States',
    blurb: 'Flat-pack furniture and outdoor goods with continuous promotions.',
    about: [
      'Costway sells furniture, outdoor and garden equipment, home appliances and baby goods direct in the US, at prices below the mainstream furniture retailers. Most of it is flat-pack and shipped by courier rather than by furniture delivery.',
      'Discounting is continuous rather than seasonal — site-wide events, clearance, coupon codes. What deserves attention instead of the price is assembly and dimensions: the photographs flatter, the assembly is on you, and the single most common complaint in this segment is a piece that did not fit the space someone measured optimistically.',
    ],
    offers: [
      {
        id: 'costway-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Continuous site-wide events',
        detail: 'Percentage campaigns run most weeks across the catalogue.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'costway-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance and open-box section',
        detail: 'Returned and end-of-line stock at a further cut.',
        checked: CHECKED_R2,
      },
      {
        id: 'costway-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new subscribers',
        detail: 'A welcome code applied at checkout.',
        checked: CHECKED_R2,
      },
      {
        id: 'costway-seasonal',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal clearance on outdoor and garden',
        detail:
          'Patio and garden equipment clears hard at the end of summer. The product does not change over a winter.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Measure, then read the dimensions twice',
        body: 'The most common regret in flat-pack furniture is not price, it is size. The specification is accurate; the photograph is not.',
      },
      {
        title: 'Buy garden furniture in September',
        body: 'End-of-season clearance on outdoor goods is the deepest discount of the year and the product waits happily.',
      },
      {
        title: 'Check the return route on large items',
        body: 'Sending back an assembled flat-pack unit is difficult everywhere. Read the policy before ordering something borderline.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Catalogue', value: 'Furniture, outdoor, appliances, baby' },
      { label: 'Assembly', value: 'Mostly flat-pack, self-assembly' },
      { label: 'Discounting', value: 'Continuous' },
    ],
    faq: [
      {
        q: 'Is Costway furniture good quality?',
        a: 'It is priced below the mainstream retailers and built accordingly — fine for a spare room or a first flat, less so for something you expect to keep for a decade.',
      },
      {
        q: 'How is it delivered?',
        a: 'By standard courier in flat-pack boxes rather than by a furniture delivery team. Plan for carrying and assembling it yourself.',
      },
      {
        q: 'Should I wait for a sale?',
        a: 'Rarely necessary — something is almost always running. On outdoor goods, waiting for end-of-season is worth it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'rugs-direct',
    name: 'Rugs Direct',
    domain: 'rugs-direct.com',
    siteLabel: 'rugs-direct.com',
    badge: 'RD',
    color: '#6B3A2A',
    category: 'home',
    markets: 'United States',
    blurb: 'Rug specialist where the sale is permanent and the size is the decision.',
    about: [
      'Rugs Direct is a US online rug retailer carrying a very large catalogue across machine-made, hand-tufted and hand-knotted construction, from budget polypropylene up to wool and silk.',
      'Rugs are discounted permanently in this trade, so the percentage on the page is not the interesting number. The two things that decide whether a purchase works are size — which almost everyone gets wrong by going too small — and construction, which determines whether it survives a hallway or belongs in a bedroom.',
    ],
    offers: [
      {
        id: 'rugsdirect-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Permanent site-wide sale pricing',
        detail: 'Discounting is continuous in this trade. Judge against the usual selling price.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'rugsdirect-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance on discontinued designs',
        detail: 'Deeper reductions on retired lines, where the size you need may still exist.',
        checked: CHECKED_R2,
      },
      {
        id: 'rugsdirect-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free shipping on most of the catalogue',
        detail:
          'Meaningful on an item this bulky, and it is built into the price rather than added.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Go one size up from what feels right',
        body: 'Undersized rugs are the near-universal mistake. Tape the dimensions out on the floor before ordering.',
      },
      {
        title: 'Match construction to traffic',
        body: 'Hand-tufted sheds and flattens in a hallway. Machine-made polypropylene is ugly in a bedroom and indestructible in a kitchen.',
      },
      {
        title: 'Budget for a pad',
        body: 'A rug pad extends the life of the rug and stops it moving. It is a small cost that protects a large one.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Range', value: 'Machine-made to hand-knotted' },
      { label: 'Shipping', value: 'Free on most items' },
      { label: 'Returns', value: 'Check the policy — bulky returns are restricted' },
    ],
    faq: [
      {
        q: 'What size rug should I buy?',
        a: 'Almost certainly larger than you think. Under a dining table it needs to hold the chairs pulled out; in a living room the front legs of the furniture should sit on it.',
      },
      {
        q: 'Is a hand-knotted rug worth the money?',
        a: 'It lasts decades and holds value; a machine-made rug lasts a few years. Whether that trade makes sense depends on the room and how long you will be in it.',
      },
      {
        q: 'Can I return a rug?',
        a: 'Within the published window, but bulky returns often carry a shipping cost. Get the size right rather than relying on it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'pepperfry',
    name: 'Pepperfry',
    domain: 'pepperfry.com',
    siteLabel: 'pepperfry.com',
    badge: 'PF',
    color: '#B0451A',
    category: 'home',
    markets: 'India only',
    blurb: 'Indian furniture marketplace where EMI and exchange do the heavy lifting.',
    about: [
      'Pepperfry is one of India’s largest furniture and home retailers, selling online with a network of experience studios where you can see the pieces before buying. The catalogue runs from flat-pack to solid wood.',
      'Furniture is a large, infrequent purchase, and Indian retail prices it accordingly: no-cost EMI spreading the cost, exchange programmes on old furniture, assembly included, and deep festive campaigns. A percentage coupon exists but on a purchase this size the financing and the assembly terms matter more.',
    ],
    offers: [
      {
        id: 'pepperfry-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive and end-of-season campaigns',
        detail: 'The deepest catalogue-wide reductions, aligned to the Indian festive calendar.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'pepperfry-emi',
        kind: 'deal',
        value: 'Long term',
        title: 'No-cost EMI on furniture purchases',
        detail: 'Spreads a large purchase without interest on eligible cards.',
        checked: CHECKED_R2,
      },
      {
        id: 'pepperfry-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card discounts at checkout',
        detail: 'Instant issuer reductions applied at payment, capped per transaction.',
        checked: CHECKED_R2,
      },
      {
        id: 'pepperfry-assembly',
        kind: 'deal',
        value: 'Free',
        title: 'Assembly included on most furniture',
        detail:
          'Not a discount, but a real cost avoided — self-assembling a wardrobe is not the same purchase.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'See it in a studio before buying big',
        body: 'Sofa comfort and wood finish do not photograph. The studios exist for exactly this and cost nothing to visit.',
      },
      {
        title: 'Measure the doorway, not just the room',
        body: 'The most common furniture delivery failure in Indian apartments is the staircase, not the space.',
      },
      {
        title: 'Confirm what assembly includes',
        body: 'It varies by product. On modular items, check whether fitting is part of the delivery.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Channels', value: 'Online plus experience studios' },
      { label: 'Assembly', value: 'Included on most furniture' },
      { label: 'Peak', value: 'Festive season' },
    ],
    faq: [
      {
        q: 'When is furniture cheapest in India?',
        a: 'During the festive season campaigns, when the whole category discounts together.',
      },
      {
        q: 'Is assembly free?',
        a: 'Included on most furniture, but confirm on the specific product — modular and fitted items sometimes differ.',
      },
      {
        q: 'Can I return furniture?',
        a: 'Within the published window and subject to condition. Damage in transit is a separate and better-covered case — inspect on delivery.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'mobly',
    name: 'Mobly',
    domain: 'mobly.com.br',
    siteLabel: 'mobly.com.br',
    badge: 'MB',
    color: '#1F6B8A',
    category: 'home',
    markets: 'Brazil only',
    blurb: 'Brazilian furniture retailer priced around instalments.',
    about: [
      'Mobly is a Brazilian online furniture and home décor retailer, selling flat-pack and assembled furniture, mattresses and décor nationwide with its own logistics.',
      'Brazilian retail is built on instalments, and furniture especially: the headline is often quoted as a monthly figure across ten or twelve payments rather than as a total. That is not a discount and it is important to read it as what it is. The genuine reductions come from seasonal campaigns, outlet stock and free-delivery thresholds by region.',
    ],
    offers: [
      {
        id: 'mobly-parcelado',
        kind: 'deal',
        value: 'Long term',
        title: 'Interest-free instalment payment',
        detail:
          'Standard on furniture here. Read the total, not the monthly figure — they are frequently quoted the other way round.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'mobly-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet on returned and end-of-line stock',
        detail: 'Graded items at a real reduction, with the condition stated.',
        checked: CHECKED_R2,
      },
      {
        id: 'mobly-campaigns',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns across the catalogue',
        detail: 'The Brazilian retail calendar concentrates discounting into defined weeks.',
        checked: CHECKED_R2,
      },
      {
        id: 'mobly-delivery',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free delivery thresholds by region',
        detail: 'Delivery on furniture is expensive in Brazil. The threshold is worth building to.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read the total, not the instalment',
        body: 'A monthly figure is a payment plan, not a price. Compare totals across retailers.',
      },
      {
        title: 'Check delivery to your CEP before you fall in love',
        body: 'Coverage and cost vary widely across the country and can change the decision entirely.',
      },
      {
        title: 'Assembly is often separate',
        body: 'Confirm whether the price includes it. On a wardrobe it is a meaningful line.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Brazil' },
      { label: 'Currency', value: 'BRL' },
      { label: 'Payment', value: 'Interest-free instalments are standard' },
      { label: 'Check first', value: 'Delivery coverage and cost for your region' },
    ],
    faq: [
      {
        q: 'Is instalment payment a discount?',
        a: 'No. It spreads the cost and, when genuinely interest-free, costs you nothing extra — but the total is the number to compare.',
      },
      {
        q: 'Does Mobly deliver everywhere in Brazil?',
        a: 'Coverage is broad but cost and timing vary by region. Check against your postcode before ordering.',
      },
      {
        q: 'Is assembly included?',
        a: 'Sometimes, and it is stated per product. On large items it is worth paying for rather than doing yourself.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'state-line-tack',
    name: 'State Line Tack',
    domain: 'statelinetack.com',
    siteLabel: 'statelinetack.com',
    badge: 'SLT',
    color: '#5A3A22',
    category: 'home',
    markets: 'United States',
    blurb: 'Equestrian supplies where consumables and clearance are the savings.',
    about: [
      'State Line Tack is a long-standing US equestrian retailer: saddles, bridles, rider apparel, stable equipment, supplements and feed accessories, sold online to a customer base that buys the same consumables repeatedly.',
      'That repetition is the discount mechanic. Bulk pricing on supplements, bedding and grooming products, plus a rewards programme and continuous clearance on retired apparel colours, is where the money is. Saddles and boots are a different purchase entirely — fit matters more than price and the return policy on used equipment is narrow.',
    ],
    offers: [
      {
        id: 'statelinetack-bulk',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bulk pricing on supplements and consumables',
        detail:
          'The repeat purchases are where the saving compounds. Per-unit price falls sharply on larger quantities.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'statelinetack-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance on retired apparel and colours',
        detail: 'Deep reductions on last season’s riding wear, which does not change year to year.',
        checked: CHECKED_R2,
      },
      {
        id: 'statelinetack-rewards',
        kind: 'deal',
        value: 'Member',
        title: 'Rewards programme on spend',
        detail: 'Points against future orders — meaningful on a customer who reorders monthly.',
        checked: CHECKED_R2,
      },
      {
        id: 'statelinetack-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Email signup offer for new customers',
        detail: 'A first-order discount for new subscribers.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy consumables in bulk, tack on fit',
        body: 'Supplements and bedding reward volume buying. Saddles and boots reward getting the fit right, whatever it costs.',
      },
      {
        title: 'Check expiry on supplements',
        body: 'A large tub is only cheaper if the horse finishes it inside the shelf life.',
      },
      {
        title: 'Shipping on heavy items is the hidden cost',
        body: 'Feed and bedding are heavy. Consolidate into one order and check the threshold.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Catalogue', value: 'Tack, rider apparel, stable supplies, supplements' },
      { label: 'Best value', value: 'Bulk consumables and clearance apparel' },
      { label: 'Returns', value: 'Narrow on used equipment' },
    ],
    faq: [
      {
        q: 'Can I return a saddle that does not fit?',
        a: 'Only unused and within the window. Once it has been ridden in, no equestrian retailer will take it back — which is why fitting matters more than price.',
      },
      {
        q: 'Is bulk buying supplements worth it?',
        a: 'Per serving, substantially. Check the shelf life against how fast you actually get through it.',
      },
      {
        q: 'How is shipping on heavy items?',
        a: 'It is the significant cost in this category. Consolidating orders and hitting the free-shipping threshold is the practical saving.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'zooplus',
    name: 'Zooplus',
    domain: 'zooplus.pl',
    siteLabel: 'zooplus.pl',
    badge: 'ZP',
    color: '#1F6B33',
    category: 'home',
    markets: 'Poland — Zooplus runs a storefront per European country',
    blurb: 'Europe’s pet-food retailer, priced on bulk and a subscription.',
    about: [
      'Zooplus is the largest online pet-supplies retailer in Europe, selling food, litter, accessories and medication across country storefronts. This is the Polish site; the group runs a separate one for each market.',
      'Pet food is bought on repeat, which makes this a subscription-and-bulk business rather than a coupon one. A saver subscription discounts recurring deliveries, large-bag pricing falls sharply per kilo, and a loyalty scheme returns points on everything. A one-off code is the smallest of the four levers by a wide margin.',
    ],
    offers: [
      {
        id: 'zooplus-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Repeat-delivery subscription with a standing discount',
        detail:
          'A percentage off every recurring order plus it arriving without you thinking about it. The main mechanic.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'zooplus-bulk',
        kind: 'deal',
        value: 'Bundle',
        title: 'Large-bag and multipack pricing',
        detail:
          'Price per kilo falls substantially on the big bags, which is how pet food is bought.',
        terms: 'Dry food has a best-before date once opened — buy a size you will finish.',
        checked: CHECKED_R2,
      },
      {
        id: 'zooplus-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme with points',
        detail: 'Points on every order, redeemable against future purchases.',
        checked: CHECKED_R2,
      },
      {
        id: 'zooplus-shipping',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Free delivery over the cart threshold',
        detail:
          'Pet food is heavy and postage matters. The threshold is easy to hit on a monthly shop.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Subscribe to the food you already buy',
        body: 'The discount applies to a purchase you were making anyway, every month, forever. Nothing else here comes close.',
      },
      {
        title: 'Compare per kilo, not per bag',
        body: 'Bag sizes differ between brands and the shelf price hides it.',
      },
      {
        title: 'Do not switch food to save money',
        body: 'Abrupt diet changes upset animals. If you do switch, do it gradually over a week or more.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Poland; a site per European country' },
      { label: 'Model', value: 'Bulk pricing plus repeat-delivery subscription' },
      { label: 'Loyalty', value: 'Free points programme' },
      { label: 'Delivery', value: 'Free over a cart threshold' },
    ],
    faq: [
      {
        q: 'Is the Zooplus subscription worth it?',
        a: 'For food you buy every month, yes — it is a standing discount on a recurring purchase, which is the most valuable kind.',
      },
      {
        q: 'Is a bigger bag always cheaper?',
        a: 'Per kilo yes. Dry food degrades after opening, so buy the largest size your animal will finish in a reasonable time.',
      },
      {
        q: 'Does the Polish site ship to other countries?',
        a: 'Use your own country’s Zooplus storefront — pricing, stock and delivery differ.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'dr-marty-pets',
    name: 'Dr. Marty Pets',
    domain: 'drmartypets.com',
    siteLabel: 'drmartypets.com',
    badge: 'DMP',
    color: '#2A6B4A',
    category: 'home',
    markets: 'United States',
    blurb: 'Freeze-dried raw pet food sold by subscription — check the cost per day.',
    about: [
      'Dr. Marty Pets sells freeze-dried raw dog and cat food plus supplements, direct to consumers in the US, marketed heavily on the difference between raw and conventional kibble.',
      'The commercial model is subscription with a discounted first order, and the number that matters is cost per day rather than cost per bag. Freeze-dried raw is several times the price of kibble per feed, which may be a reasonable choice for your animal and is a decision worth making with your vet rather than with a marketing page — including ours.',
    ],
    offers: [
      {
        id: 'drmarty-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Subscription pricing below one-off orders',
        detail:
          'A standing discount on recurring deliveries, which is how the product is intended to be bought.',
        terms: 'Recurring billing — set the frequency to match actual consumption.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'drmarty-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'Discounted first order for new customers',
        detail: 'The acquisition offer, applied to a first subscription order.',
        checked: CHECKED_R2,
      },
      {
        id: 'drmarty-bulk',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-bag bundles at a lower price per bag',
        detail: 'Worth taking once you know the animal will eat it.',
        checked: CHECKED_R2,
      },
      {
        id: 'drmarty-guarantee',
        kind: 'deal',
        value: 'Refund',
        title: 'Money-back guarantee on a first order',
        detail: 'Which matters, because the animal decides whether this purchase works, not you.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Work out the cost per day',
        body: 'Bag prices are not comparable across food types. Feeding-guide grams per day against the bag size is the honest number.',
      },
      {
        title: 'Buy one bag before subscribing to six',
        body: 'Animals refuse food. The guarantee exists because this is common.',
      },
      {
        title: 'Talk to your vet about raw diets',
        body: 'It is a genuine nutritional decision with arguments on both sides, and a marketing page is not where to settle it.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Product', value: 'Freeze-dried raw pet food and supplements' },
      { label: 'Model', value: 'Subscription with discounted first order' },
      { label: 'Compare by', value: 'Cost per day, not per bag' },
    ],
    faq: [
      {
        q: 'Is freeze-dried raw better than kibble?',
        a: 'It is a contested question with reasonable positions on both sides, and it depends on the animal. Your vet is the right person to ask — not a retailer and not us.',
      },
      {
        q: 'How much does it cost to feed?',
        a: 'Several times kibble per day for most animals. Work out grams per day from the feeding guide before subscribing.',
      },
      {
        q: 'Can I cancel the subscription?',
        a: 'Yes, online, effective from the next cycle. Set the delivery frequency to match consumption or bags accumulate.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'decathlon-poland',
    name: 'Decathlon',
    domain: 'decathlon.pl',
    siteLabel: 'decathlon.pl',
    badge: 'DC',
    color: '#0082C3',
    category: 'home',
    markets: 'Poland — Decathlon runs a storefront per country',
    blurb: 'Own-label sports kit priced low permanently — the discount is the model.',
    about: [
      'Decathlon is a French sports retailer selling almost entirely its own brands across every sport it covers, from running and cycling to camping, climbing and swimming. This is the Polish storefront.',
      'Its whole positioning is permanently low prices rather than discounting, so there is no coupon economy and the sales are modest. What there is instead: a free membership with a two-year warranty on much of the range, a genuinely good second-hand and returned-stock programme, and end-of-season clearance. Buying the entry-level own-label item is nearly always the value purchase here.',
    ],
    offers: [
      {
        id: 'decathlon-pl-secondlife',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Second-hand and returned-stock programme',
        detail:
          'Checked returns and ex-display kit at a real reduction, with a warranty. The deepest discount the chain offers.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'decathlon-pl-member',
        kind: 'deal',
        value: 'Member',
        title: 'Free membership with extended warranty and returns',
        detail:
          'Costs nothing, extends the warranty on much of the range and makes returns straightforward.',
        checked: CHECKED_R2,
      },
      {
        id: 'decathlon-pl-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'End-of-season clearance',
        detail: 'Ski kit in spring, camping in autumn. The gear does not change between years.',
        checked: CHECKED_R2,
      },
      {
        id: 'decathlon-pl-entry',
        kind: 'deal',
        value: 'Sale',
        title: 'Entry-level own-label ranges',
        detail:
          'Not a promotion — the pricing model. For a sport you are trying rather than committed to, the cheapest tier is usually enough.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy the entry tier for a sport you are trying',
        body: 'Decathlon’s cheapest own-label kit is genuinely usable. Upgrade when you know you will keep doing it.',
      },
      {
        title: 'Check the second-life section first',
        body: 'Returned and ex-display kit is checked, warranted and much cheaper. It is under-used.',
      },
      {
        title: 'Join the free membership before buying',
        body: 'The extended warranty applies to the purchase, so sign up first.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Poland; a site per country' },
      { label: 'Model', value: 'Own-label, permanently low prices' },
      { label: 'Membership', value: 'Free, with extended warranty' },
      { label: 'Best value', value: 'Second-life stock and entry ranges' },
    ],
    faq: [
      {
        q: 'Does Decathlon do discount codes?',
        a: 'Barely. The pricing model is low prices all the time rather than promotions, which is why the sales look modest compared with other sports retailers.',
      },
      {
        q: 'Is the cheap own-label kit any good?',
        a: 'For beginners and casual use, consistently yes — it is the reason the chain exists. The premium own-label tiers compete with brand-name gear.',
      },
      {
        q: 'What is the second-life programme?',
        a: 'Returned and ex-display equipment, checked and warranted, sold at a reduction. It is the largest discount available and most people never look at it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'funko',
    name: 'Funko',
    domain: 'funkoeurope.com',
    siteLabel: 'funkoeurope.com',
    badge: 'FK',
    color: '#B0161E',
    category: 'home',
    markets: 'Poland, Belgium, Greece and other European markets',
    blurb: 'Collectible vinyl figures — the exclusives hold value, the rest discounts.',
    about: [
      'Funko makes Pop! vinyl figures and related collectibles under licence from essentially every film, television and games franchise. This is the European direct storefront.',
      'The catalogue splits cleanly into two economies. Common figures are mass-produced and discount hard once a licence cools, so waiting is rewarded. Convention and store exclusives are limited, sell out, and then trade above retail — so for those the discipline is the opposite: buy at release or not at all. Knowing which of the two you are looking at is the whole skill.',
    ],
    offers: [
      {
        id: 'funko-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Site-wide sales and clearance on common figures',
        detail:
          'Non-exclusive stock discounts steadily once a franchise moment passes. Waiting works here.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'funko-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multibuy across the catalogue',
        detail: 'Buy-two and buy-three mechanics run regularly on standard figures.',
        checked: CHECKED_R2,
      },
      {
        id: 'funko-preorder',
        kind: 'deal',
        value: 'Sale',
        title: 'Pre-order on limited and exclusive releases',
        detail:
          'The exception to waiting. Exclusives sell out at retail and then trade higher — pre-order or miss them.',
        checked: CHECKED_R2,
      },
      {
        id: 'funko-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup offer',
        detail: 'A first-order discount for new subscribers.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Know whether it is a common or an exclusive',
        body: 'Commons discount and exclusives appreciate. Treating them the same is how collectors lose money in both directions.',
      },
      {
        title: 'Box condition is the value on exclusives',
        body: 'If you are buying to keep, a protector case costs little and preserves most of the resale value.',
      },
      {
        title: 'Wait out the franchise moment',
        body: 'Figures released alongside a film are cheapest six months after it leaves cinemas.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'European storefront, several countries' },
      { label: 'Two economies', value: 'Common figures discount; exclusives appreciate' },
      { label: 'Pre-orders', value: 'How exclusives are obtained at retail' },
      { label: 'Condition', value: 'Box condition drives resale value' },
    ],
    faq: [
      {
        q: 'Should I wait for a Funko sale?',
        a: 'On common figures, yes — they discount reliably. On convention and store exclusives, no: those sell out and then cost more.',
      },
      {
        q: 'Do Pop figures hold value?',
        a: 'A small minority do, mostly limited exclusives in good box condition. The mass-market ones are toys, not investments.',
      },
      {
        q: 'Is the European store the same as the US one?',
        a: 'Separate storefront, separate stock and separate exclusives. Some releases never cross.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'bunches',
    name: 'Bunches',
    domain: 'bunches.co.uk',
    siteLabel: 'bunches.co.uk',
    badge: 'BN',
    color: '#2A7A4A',
    category: 'home',
    markets: 'United Kingdom',
    blurb: 'UK flowers by post — the delivery date matters more than the price.',
    about: [
      'Bunches is a family-run UK flower delivery business, sending letterbox and boxed bouquets by post rather than through a local florist network. That model is why it is cheaper than the relay services.',
      'Flower gifting is priced against an occasion, so the calendar drives everything: Valentine’s Day and Mother’s Day carry surcharges and sell out slots, and the discounts sit in the weeks around them. Subscriptions for regular deliveries are the other lever, and they price well below buying the same bouquets one at a time.',
    ],
    offers: [
      {
        id: 'bunches-subscription',
        kind: 'deal',
        value: 'Member',
        title: 'Flower subscriptions below one-off orders',
        detail:
          'Regular deliveries at a lower per-bouquet price, with the dates set in advance so nothing is forgotten.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'bunches-offpeak',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Order outside the occasion peaks',
        detail:
          'The same bouquet costs meaningfully less in the weeks either side of Valentine’s or Mother’s Day, and the slots exist.',
        checked: CHECKED_R2,
      },
      {
        id: 'bunches-letterbox',
        kind: 'deal',
        value: 'Free delivery',
        title: 'Letterbox bouquets with no delivery surcharge',
        detail:
          'Posted flat through the door — no signature needed, no courier fee, and nothing left on a doorstep.',
        checked: CHECKED_R2,
      },
      {
        id: 'bunches-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail: 'A welcome offer on a first order.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Order early for a dated occasion',
        body: 'Slots sell out and surcharges rise as the date approaches. A week early is cheaper and more reliable.',
      },
      {
        title: 'Letterbox over boxed for an empty house',
        body: 'Flowers left on a doorstep in July are not a gift. Letterbox delivery removes the problem.',
      },
      {
        title: 'Read the substitution policy',
        body: 'Seasonal stems get substituted for equivalents. Knowing that in advance beats finding out from a photo.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United Kingdom' },
      { label: 'Model', value: 'Posted direct, not a florist relay' },
      { label: 'Options', value: 'Letterbox and boxed bouquets, subscriptions' },
      { label: 'Peak', value: "Valentine's Day and Mother's Day" },
    ],
    faq: [
      {
        q: 'Are posted flowers as good as a florist?',
        a: 'They arrive in bud and open over a few days, which means they last longer but look less impressive on arrival. It is a different product at a lower price, not a worse version of the same one.',
      },
      {
        q: 'When should I order for Mother’s Day?',
        a: 'At least a week ahead. Slots and stems both run short, and the surcharges climb as the date nears.',
      },
      {
        q: 'What if nobody is home?',
        a: 'Letterbox bouquets fit through the door and need no signature, which is the main reason to choose them.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'milton',
    name: 'Milton',
    domain: 'milton.in',
    siteLabel: 'milton.in',
    badge: 'ML',
    color: '#1F5C8A',
    category: 'home',
    markets: 'India only',
    blurb: 'Indian homeware staple — bottles, tiffins and cookware, discounted seasonally.',
    about: [
      'Milton is a long-established Indian houseware brand, known for insulated Thermosteel bottles, lunch boxes, casseroles and cookware. It is the kind of brand that is in most Indian kitchens rather than an aspirational one.',
      'Houseware discounts on the Indian retail calendar: festive campaigns, end-of-season events and bank-card offers at payment, plus combo pricing on sets. The specification worth reading rather than the price is the insulation retention hours on flasks, which is what separates two similar-looking bottles.',
    ],
    offers: [
      {
        id: 'milton-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive-season campaigns',
        detail: 'The deepest reductions of the year across the catalogue.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'milton-combo',
        kind: 'deal',
        value: 'Bundle',
        title: 'Combo and set pricing',
        detail: 'Bottle-and-lunchbox sets and cookware sets priced below the pieces.',
        checked: CHECKED_R2,
      },
      {
        id: 'milton-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card offers at checkout',
        detail: 'Instant issuer discounts applied at payment.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare retention hours, not the look',
        body: 'On insulated flasks the stated hot and cold retention is the specification. Two identical-looking bottles can differ substantially.',
      },
      {
        title: 'Sets are cheaper if you need the set',
        body: 'Combo pricing is real, but a set with two pieces you will never use is not a saving.',
      },
      {
        title: 'Check the seal and spare parts',
        body: 'Lids and gaskets are what fail on lunch boxes. Availability of replacements matters over years.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Catalogue', value: 'Insulated bottles, tiffins, casseroles, cookware' },
      { label: 'Key spec', value: 'Insulation retention hours' },
      { label: 'Peak', value: 'Festive season' },
    ],
    faq: [
      {
        q: 'When is Milton cheapest?',
        a: 'During the festive campaigns, which is when Indian houseware discounts across the board.',
      },
      {
        q: 'Are the combo sets worth it?',
        a: 'If you want all the pieces, yes. The set price is genuinely below the individual items.',
      },
      {
        q: 'Does Milton ship outside India?',
        a: 'The storefront serves India.',
      },
    ],
    updated: CHECKED_R2,
  },
]
