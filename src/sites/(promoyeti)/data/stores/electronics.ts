/**
 * Consumer tech stores.
 *
 * ⚠️ Working values written from the merchants' public pages; re-check before a
 * campaign. Several of these are single-country storefronts sold as such by the
 * network (oneplus.in, apple.com/in, asus India, store.acer.com India, dyson.in,
 * mediaexpert.pl). See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const electronicsStores: Store[] = [
  {
    slug: 'oneplus',
    name: 'OnePlus',
    domain: 'oneplus.in',
    siteLabel: 'oneplus.in',
    badge: 'OP',
    color: '#A32020',
    category: 'electronics',
    markets: 'India — the Indian storefront; OnePlus runs a separate site per region',
    blurb: 'Phones direct from the brand, where the bank offer is the discount.',
    about: [
      'OnePlus sells direct in India through oneplus.in, alongside a marketplace presence. The catalogue is phones, tablets, earbuds, watches and accessories, with a launch cadence that puts a new flagship and a new mid-range device out each year.',
      'Phone discounting does not work through coupon codes. It works through three things: instant bank discounts at checkout, exchange value for your old device, and no-cost EMI which spreads the price without interest. A launch-period offer will typically bundle all three, and that stack is far larger than any percentage code you will find.',
    ],
    offers: [
      {
        id: 'oneplus-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discount at checkout',
        detail:
          'The largest single reduction on a phone purchase in India. Card-issuer specific, capped per transaction, and rotated every few weeks.',
        terms: 'Applies to specific issuers and card types; check the payment page.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'oneplus-exchange',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Exchange your old phone for credit',
        detail:
          'Quoted online against the model and condition you declare, confirmed on collection. Frequently worth more than the bank offer on an older flagship.',
        checked: CHECKED,
      },
      {
        id: 'oneplus-emi',
        kind: 'deal',
        value: 'Bank offer',
        title: 'No-cost EMI on eligible cards',
        detail:
          'Spreads the purchase over months without interest. Not a discount, but it changes what the phone costs you this month.',
        checked: CHECKED,
      },
      {
        id: 'oneplus-red',
        kind: 'deal',
        value: 'Member',
        title: 'Membership programme — points, early access and service benefits',
        detail:
          'The free account programme carries points against accessories and early access to sale events.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy in a sale window, not between them',
        body: 'Indian phone pricing clusters around the festive sales. The same device is materially cheaper in those weeks.',
      },
      {
        title: 'Exchange and bank offer usually stack',
        body: 'Check both on the same order before deciding one is enough — the two together are the real price.',
      },
      {
        title: 'Accessories are where codes work',
        body: 'Cases, chargers and earbuds do carry percentage promotions. Phones essentially never do.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India (oneplus.in)' },
      { label: 'Biggest lever', value: 'Bank offer plus exchange' },
      { label: 'Warranty', value: 'Manufacturer warranty, India' },
      { label: 'Returns', value: 'Short window on devices — check at purchase' },
    ],
    faq: [
      {
        q: 'Is there a OnePlus promo code for phones?',
        a: 'Realistically, no. Phone discounts come from bank offers, exchange and EMI, all applied at checkout. Codes exist for accessories.',
      },
      {
        q: 'Does oneplus.in ship abroad?',
        a: 'No. It serves India. Other regions have their own OnePlus storefronts with different pricing.',
      },
      {
        q: 'When is the cheapest time to buy?',
        a: 'During the Indian festive sale season, and immediately after a successor device is announced.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'apple',
    name: 'Apple',
    domain: 'apple.com',
    siteLabel: 'apple.com',
    badge: 'AP',
    color: '#1D1D1F',
    category: 'electronics',
    markets: 'Worldwide via country storefronts — the offer we link is the Indian store',
    blurb: 'The brand that does not do discount codes, and the four ways around that.',
    about: [
      'Apple does not issue promotional codes, run sales, or discount current products through third parties on its own store. Anyone offering you an "Apple promo code" is selling you something else. That is worth saying plainly, because it is the honest answer to the query.',
      'There are still four real ways to pay less, and they are all official: the education store, trade-in, certified refurbished stock, and — in India specifically — instant bank discounts at checkout, which are a normal part of how the Indian storefront prices. None of them is a code.',
    ],
    offers: [
      {
        id: 'apple-education',
        kind: 'deal',
        value: 'Student',
        title: 'Education store pricing for students and staff',
        detail:
          'A standing discount on Macs and iPads for verified students, parents of students, and education staff. It is the largest permanent reduction Apple offers.',
        terms: 'Requires verification; applies to a subset of the catalogue.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'apple-refurb',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Certified refurbished store',
        detail:
          'Apple-refurbished units with the full warranty, at a real discount, in whichever country the refurb store operates. Stock is unpredictable — check often rather than once.',
        checked: CHECKED,
      },
      {
        id: 'apple-tradein',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Trade-in credit against a new device',
        detail:
          'Quoted online, adjusted on inspection. Usually below the private-sale value and far more convenient than it.',
        checked: CHECKED,
      },
      {
        id: 'apple-bank-in',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts on the Indian storefront',
        detail:
          'On apple.com in India, card-issuer instant discounts and no-cost EMI are standard at checkout — the one market where Apple’s own store routinely reduces the price.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Refurbished carries the same warranty as new',
        body: 'That is the argument for it. It is not a grey-market unit; it is Apple’s own reconditioning with the standard warranty and AppleCare eligibility.',
      },
      {
        title: 'Education pricing is not only for students',
        body: 'In most markets it also covers teachers, staff and parents buying for a student. Read the eligibility page rather than assuming.',
      },
      {
        title: 'Prices are set per country',
        body: 'The same MacBook can differ substantially between two neighbouring storefronts once tax is included. If you travel, it is worth checking.',
      },
    ],
    facts: [
      { label: 'Promo codes', value: 'Apple does not issue them' },
      { label: 'Best standing discount', value: 'Education store' },
      { label: 'Refurbished', value: 'Full warranty, AppleCare eligible' },
      { label: 'India', value: 'Bank offers and no-cost EMI at checkout' },
    ],
    faq: [
      {
        q: 'Are there Apple promo codes?',
        a: 'No. Apple does not run coupon promotions on its own store. Sites listing "Apple codes" are listing codes for resellers, or nothing at all.',
      },
      {
        q: 'What is the biggest legitimate Apple discount?',
        a: 'For most people, the education store if you qualify, and certified refurbished if you do not. Both are official and both carry the standard warranty.',
      },
      {
        q: 'Do resellers discount Apple products?',
        a: 'Yes, and in most markets a large retailer will beat Apple’s own price on last-generation stock. The trade-off is who handles a warranty claim.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'asus',
    name: 'Asus',
    domain: 'asus.com',
    siteLabel: 'asus.com',
    badge: 'AS',
    color: '#1B3A5C',
    category: 'electronics',
    markets: 'India for this storefront; Asus operates a separate site in each region',
    blurb: 'Laptops and components direct, discounted around launches and festive events.',
    about: [
      'Asus sells laptops, motherboards, graphics cards, monitors and peripherals through a direct storefront in each region, with a very wide product range and a naming scheme that makes comparison harder than it should be.',
      'The discounting pattern is standard for a PC brand: festive and back-to-school events, instant bank offers at payment in India, and steep reductions on the outgoing generation once a refresh is announced. Coupon codes appear mostly on peripherals and accessories.',
    ],
    offers: [
      {
        id: 'asus-events',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive and back-to-school sale events',
        detail:
          'The catalogue price itself moves during these. Outside them, laptop pricing is close to fixed.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'asus-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts and no-cost EMI',
        detail:
          'On the Indian storefront, card-issuer offers at checkout are the largest routine reduction on a laptop.',
        checked: CHECKED,
      },
      {
        id: 'asus-outgoing',
        kind: 'deal',
        value: 'Last season',
        title: 'Previous-generation stock after a refresh',
        detail:
          'When a chassis gets a new CPU generation, the outgoing configuration drops hard. For most workloads the difference is small and the saving is not.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compare by panel and chassis, not by model name',
        body: 'Asus reuses names across very different machines. The screen, the thermals and the port selection are what you are buying.',
      },
      {
        title: 'Check who services the warranty',
        body: 'Direct purchases are handled by Asus; reseller purchases sometimes route through the reseller first. It matters when a laptop fails.',
      },
      {
        title: 'Peripherals is where the codes are',
        body: 'Keyboards, mice and monitors carry percentage promotions that laptops do not.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'India (asus.com)' },
      { label: 'Biggest lever', value: 'Bank offers and generational clearance' },
      { label: 'Warranty', value: 'Manufacturer, regional' },
      { label: 'Range', value: 'Laptops, components, monitors, peripherals' },
    ],
    faq: [
      {
        q: 'Are Asus coupon codes real?',
        a: 'On accessories, often. On laptops, the reduction comes from an event price or a bank offer rather than from a code.',
      },
      {
        q: 'Is buying direct better than a marketplace?',
        a: 'Usually for warranty handling and for configuration choice; often not for price. Compare both before deciding.',
      },
      {
        q: 'When do laptop prices drop?',
        a: 'Around the festive season, at back-to-school, and immediately after a CPU generation refresh is announced.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'acer',
    name: 'Acer',
    domain: 'store.acer.com',
    siteLabel: 'store.acer.com',
    badge: 'AC',
    color: '#2F6B33',
    category: 'electronics',
    markets: 'India for this storefront; Acer runs regional stores including Poland',
    blurb: 'Value-focused laptops where the entry configuration is the point.',
    about: [
      'Acer’s direct store sells its laptop, desktop, monitor and gaming lines. The brand competes at the value end more aggressively than most, which means the interesting configurations are usually near the bottom of a range rather than at the top.',
      'Discounting works through scheduled events, bank offers at payment, and clearance on outgoing models. Acer also runs student and education pricing in several markets, which is a standing discount rather than a promotion.',
    ],
    offers: [
      {
        id: 'acer-events',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled store-wide sale events',
        detail: 'Percentage events several times a year, applied without a code.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'acer-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card offers and no-cost EMI at checkout',
        detail: 'The standard Indian mechanic; usually the largest reduction on a laptop order.',
        checked: CHECKED,
      },
      {
        id: 'acer-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance on outgoing configurations',
        detail:
          'Acer refreshes frequently, which means there is nearly always a previous configuration being cleared at a real discount.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy the RAM and storage separately where you can',
        body: 'On Acer’s value machines the factory upgrade is priced well above the part. Check whether the chassis is user-upgradeable first.',
      },
      {
        title: 'Read the panel spec',
        body: 'The cheapest configurations in a range often carry a much worse screen. It is the spec that most affects daily use and the one most easily skipped.',
      },
      {
        title: 'Check the regional store you are on',
        body: 'Acer’s Polish and Indian stores are separate businesses with separate pricing and separate promotions.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'India (store.acer.com); a separate store serves Poland' },
      { label: 'Positioning', value: 'Value-focused' },
      { label: 'Warranty', value: 'Manufacturer, regional' },
      { label: 'Best value', value: 'Outgoing configurations' },
    ],
    faq: [
      {
        q: 'Does Acer have a student discount?',
        a: 'In several markets, yes, through an education store or a verification partner. It applies to full-price configurations.',
      },
      {
        q: 'Are Acer store prices better than a retailer’s?',
        a: 'Sometimes on configuration availability, rarely on headline price. Retailers discount harder; the direct store carries configurations they do not.',
      },
      {
        q: 'Can I use a Polish code on the Indian store?',
        a: 'No. They are separate storefronts with separate promotions.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'lenovo',
    name: 'Lenovo',
    domain: 'lenovo.com',
    siteLabel: 'lenovo.com',
    badge: 'LN',
    color: '#9E1B32',
    category: 'electronics',
    markets: 'US, UK, Canada and many other country storefronts',
    blurb: 'The one PC brand where coupon codes are the actual pricing mechanism.',
    about: [
      'Lenovo is the exception in consumer tech: its direct store runs a genuine, continuous coupon economy. eCoupons are issued site-wide, per-series and per-configuration, and the "list price" on a ThinkPad is a number almost nobody pays.',
      'That has a practical consequence. On lenovo.com, the discipline is not finding a code — the site is showing you one — it is checking whether a better one exists for the same machine, and whether the configuration you are about to build is the one the coupon applies to. Configuration changes routinely invalidate a coupon.',
    ],
    offers: [
      {
        id: 'lenovo-ecoupon',
        kind: 'deal',
        value: 'Coupons',
        title: 'eCoupons applied automatically on the configured price',
        detail:
          'Lenovo publishes coupons directly on the product pages and applies them in the basket. The displayed "estimated value" is the anchor, not the price.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'lenovo-outlet',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Lenovo Outlet — refurbished and open-box with warranty',
        detail:
          'The outlet carries returned and refurbished units at a deeper cut than the coupon economy reaches, with a manufacturer warranty attached.',
        checked: CHECKED,
      },
      {
        id: 'lenovo-education',
        kind: 'deal',
        value: 'Student',
        title: 'Student, education and business-tier pricing',
        detail:
          'Verified student and education stores carry a standing discount, and the small-business store prices some models differently again. It is worth checking all three for the same machine.',
        checked: CHECKED,
      },
      {
        id: 'lenovo-events',
        kind: 'deal',
        value: 'Long term',
        title: 'Doorbuster and seasonal events',
        detail:
          'Lenovo runs frequent limited-quantity events. On a ThinkPad these are usually the annual low.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Configure first, then look for a coupon',
        body: 'Coupons are frequently tied to a specific configuration code. Changing the RAM can silently remove the discount you thought you had.',
      },
      {
        title: 'Compare the consumer, education and business stores',
        body: 'The same ThinkPad often has three different prices on the same website. This is normal and it is the biggest saving available.',
      },
      {
        title: 'Ignore the crossed-out list price',
        body: 'It is a reference figure, not a price anyone paid last week. Judge the deal against Lenovo’s own recent prices, not against the anchor.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Most countries, one storefront each' },
      { label: 'Pricing model', value: 'Continuous eCoupons on a high list price' },
      { label: 'Outlet', value: 'Refurbished with manufacturer warranty' },
      { label: 'Trap', value: 'Coupons tied to specific configurations' },
    ],
    faq: [
      {
        q: 'Do Lenovo coupon codes actually work?',
        a: 'Yes — more reliably than at almost any other manufacturer, because coupons are how Lenovo prices rather than an occasional promotion. The catch is that they are configuration-specific.',
      },
      {
        q: 'Is the Lenovo Outlet worth using?',
        a: 'For a machine you would otherwise buy new, usually yes. Units carry a manufacturer warranty, and the discount is deeper than the coupon economy on the main store.',
      },
      {
        q: 'Why did my coupon stop applying?',
        a: 'Almost always because you changed the configuration. Rebuild the exact model the coupon names, or find the coupon that covers your build.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'dyson',
    name: 'Dyson',
    domain: 'dyson.in',
    siteLabel: 'dyson.in',
    badge: 'DY',
    color: '#5A2D82',
    category: 'electronics',
    markets: 'India — this is the Indian storefront',
    blurb: 'Premium appliances that discount through refurbished stock, not codes.',
    about: [
      'Dyson sells vacuums, hair tools, purifiers and fans direct. The brand protects its pricing tightly and does not run a coupon programme: current-generation products sit at list price almost all year.',
      'The exceptions are worth knowing. Dyson operates an official refurbished channel in several markets with a real warranty attached, runs occasional direct-only bundles that include an accessory kit worth more than a percentage discount, and — on the Indian storefront — participates in the usual bank-offer and EMI mechanics.',
    ],
    offers: [
      {
        id: 'dyson-refurb',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Officially refurbished units with warranty',
        detail:
          'Dyson’s own refurbished channel is the largest legitimate discount on the brand, and the warranty makes it a different proposition from a used listing.',
        terms: 'Availability is intermittent and model-dependent.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'dyson-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Direct-only bundles with accessories included',
        detail:
          'Buying direct often includes an attachment set or a spare battery that a retailer does not supply. Price the bundle, not the machine.',
        checked: CHECKED,
      },
      {
        id: 'dyson-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank offers and no-cost EMI on the Indian store',
        detail: 'The standard Indian checkout mechanics apply to Dyson’s direct storefront.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Previous generation, current warranty',
        body: 'When a new vacuum generation launches, the outgoing model is discounted and is not meaningfully worse. Dyson’s generational changes are incremental.',
      },
      {
        title: 'Count the accessories',
        body: 'The difference between two Dyson SKUs is often only the attachment set. Buying the cheaper machine plus the one attachment you need is frequently less.',
      },
      {
        title: 'Registration extends nothing, but it does prove purchase',
        body: 'Register the machine. Warranty claims on premium appliances go much faster with a registered serial.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India (dyson.in)' },
      { label: 'Coupon codes', value: 'Not part of how Dyson prices' },
      { label: 'Refurbished', value: 'Official channel with warranty' },
      { label: 'Warranty', value: 'Two years on most machines' },
    ],
    faq: [
      {
        q: 'Is there a Dyson promo code?',
        a: 'Essentially never on current products. The refurbished store, direct bundles and bank offers are the real routes to a lower price.',
      },
      {
        q: 'Are refurbished Dysons reliable?',
        a: 'The official refurbished units are reconditioned by Dyson and carry a warranty. That is a different product from a used machine on a marketplace.',
      },
      {
        q: 'Is it cheaper at a retailer?',
        a: 'Sometimes during retail sale events, but retailers rarely include the direct-only accessory bundles. Compare what is in the box.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'media-expert',
    name: 'Media Expert',
    domain: 'mediaexpert.pl',
    siteLabel: 'mediaexpert.pl',
    badge: 'ME',
    color: '#B01818',
    category: 'electronics',
    markets: 'Poland only',
    blurb: 'Poland’s big electronics chain, discounting on bundles and instalments.',
    about: [
      'Media Expert is one of the largest electronics and appliance retailers in Poland, selling online and through a wide store network. The catalogue runs from phones and TVs to white goods and small kitchen appliances.',
      'Its promotional model is Polish retail standard: heavy weekly leaflet-style promotions, bundle deals ("second item at a discount", appliance packages), instalment financing at zero interest, and trade-in on large appliances. Codes are a smaller part of the picture than the recurring promotional calendar.',
    ],
    offers: [
      {
        id: 'mediaexpert-promocje',
        kind: 'deal',
        value: 'Sale',
        title: 'Weekly promotions across the catalogue',
        detail:
          'The promotional calendar runs continuously and rotates categories. Buying in the week your category is featured is the discount.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'mediaexpert-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundle and second-item discounts',
        detail:
          'Appliance packages and "buy two" mechanics are priced well below the sum of the parts, which matters when kitting out a kitchen.',
        checked: CHECKED,
      },
      {
        id: 'mediaexpert-raty',
        kind: 'deal',
        value: 'Long term',
        title: 'Zero-interest instalments',
        detail:
          'Standard on larger purchases. Not a discount, but it is the difference between buying now and waiting.',
        checked: CHECKED,
      },
      {
        id: 'mediaexpert-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet — returned and display stock',
        detail:
          'Open-box and display units at a real cut, with the normal warranty. Grading is stated per item.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check the store-collection price',
        body: 'Polish electronics retail frequently prices in-store collection below delivery, and on a large appliance the difference is significant.',
      },
      {
        title: 'Old-appliance collection is usually free',
        body: 'When buying a replacement white good, the retailer will normally take the old one. Ask rather than paying for disposal.',
      },
      {
        title: 'Compare against the other Polish chains',
        body: 'This market is price-competitive and the same SKU moves between the big retailers weekly.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Currency', value: 'PLN' },
      { label: 'Returns', value: '14 days on distance sales, per Polish law' },
      { label: 'Delivery', value: 'Home delivery or free store collection' },
    ],
    faq: [
      {
        q: 'Does Media Expert deliver outside Poland?',
        a: 'No. It serves the Polish market.',
      },
      {
        q: 'Are Media Expert codes worth hunting for?',
        a: 'Less than the weekly promotional calendar. The advertised category promotions are larger and require nothing from you.',
      },
      {
        q: 'Is the outlet stock covered by warranty?',
        a: 'Yes, with the condition grade stated on the listing. Display units in particular are usually a good buy.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'adorama',
    name: 'Adorama',
    domain: 'adorama.com',
    siteLabel: 'adorama.com',
    badge: 'AD',
    color: '#1D3F63',
    category: 'electronics',
    markets: 'United States primarily, with international shipping on much of the catalogue',
    blurb: 'Photo and pro-AV retailer where bundles and used stock beat codes.',
    about: [
      'Adorama is a long-established New York photography and pro-audio retailer, selling cameras, lenses, lighting, computers and studio equipment online and from a single physical store.',
      'Camera retail is manufacturer-controlled: the price of a new body is set by the brand’s minimum advertised price policy, and retailers compete on what they add rather than on what they subtract. That means bundles, gift cards with purchase, instant savings funded by the manufacturer, and a genuinely deep used and refurbished department — not coupon codes.',
    ],
    offers: [
      {
        id: 'adorama-bundles',
        kind: 'deal',
        value: 'Bundle',
        title: 'Kit bundles with cards, bags and warranties included',
        detail:
          'The retailer’s main lever. Compare the bundle against the body-only price plus what you would buy anyway, not against the headline.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'adorama-used',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Used and refurbished department with condition grading',
        detail:
          'Graded used lenses and bodies with a return window. On glass, which does not date, this is the best value in the shop.',
        checked: CHECKED,
      },
      {
        id: 'adorama-instant',
        kind: 'deal',
        value: 'Deal',
        title: 'Manufacturer instant savings and rebates',
        detail:
          'Brand-funded reductions that appear and vanish on a schedule set by Canon, Nikon, Sony and the rest. They apply without a code.',
        checked: CHECKED,
      },
      {
        id: 'adorama-edu',
        kind: 'deal',
        value: 'Deal',
        title: 'Education and pro programmes',
        detail:
          'Adorama runs education and professional pricing programmes with their own registration. Worth checking if you qualify.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Buy the body used and the lens new, or the reverse',
        body: 'Bodies date, glass does not. Splitting the purchase across new and used is usually the best value per pound spent.',
      },
      {
        title: 'Watch the rebate calendar',
        body: 'Manufacturer instant savings run in defined windows across all US retailers at once. Waiting three weeks can be worth hundreds.',
      },
      {
        title: 'Check international shipping before you fall in love',
        body: 'Not everything ships outside the US, and duties on camera equipment are substantial.',
      },
    ],
    facts: [
      { label: 'Market', value: 'US, with international shipping on much of the range' },
      { label: 'Pricing', value: 'Manufacturer MAP — retailers compete on bundles' },
      { label: 'Used department', value: 'Graded, with a return window' },
      { label: 'Returns', value: 'Category-dependent; shorter on opened gear' },
    ],
    faq: [
      {
        q: 'Why is every retailer’s camera price identical?',
        a: 'Minimum advertised price policies. The manufacturer sets the floor, so retailers add value in the bundle instead of cutting the number.',
      },
      {
        q: 'Is Adorama’s used gear reliable?',
        a: 'It is graded and returnable, which is what separates it from a private sale. Read the grade description rather than the star rating.',
      },
      {
        q: 'Do Adorama promo codes exist?',
        a: 'Occasionally on accessories and computers. On cameras and lenses, the manufacturer rebate and the bundle are the discount.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'corsair',
    name: 'Corsair',
    domain: 'corsair.com',
    siteLabel: 'corsair.com',
    badge: 'CS',
    color: '#1A1A1A',
    category: 'electronics',
    markets: 'Worldwide, via country storefronts',
    blurb: 'PC components and peripherals where refurbished stock is the real discount.',
    about: [
      'Corsair makes memory, power supplies, cases, cooling, keyboards, mice and headsets, and owns Elgato and Scuf. It sells direct alongside a heavy retail presence, and the direct store carries configurations and spare parts the retailers do not.',
      'Component pricing is competitive enough that the direct store rarely undercuts a good retailer on a headline item. Where it wins is the certified refurbished section — returned and factory-refreshed units with a warranty attached — plus bundle pricing on a build and genuinely useful spare-parts availability years after purchase.',
    ],
    offers: [
      {
        id: 'corsair-refurb',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Certified refurbished with warranty',
        detail:
          'Factory-refreshed returns at a real cut, warranted. On a power supply or a case, functionally the same purchase as new.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'corsair-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Build bundles across memory, cooling and peripherals',
        detail: 'Buying several components together is priced below the parts during campaigns.',
        checked: CHECKED_R2,
      },
      {
        id: 'corsair-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal sale events',
        detail: 'Deep reductions around the major retail events, particularly on peripherals.',
        checked: CHECKED_R2,
      },
      {
        id: 'corsair-parts',
        kind: 'deal',
        value: 'Free',
        title: 'Spare parts and warranty replacement direct',
        detail:
          'Not a discount, but the reason to buy direct: cables, keycaps, feet and fans are available for years, and the warranty process skips the retailer.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare against a good retailer first',
        body: 'On new components the direct store is rarely the cheapest. On refurbished and spares it has no competition.',
      },
      {
        title: 'Power supplies are the wrong place to save',
        body: 'It is the one component whose failure takes others with it. Buy the warranty length, not the price.',
      },
      {
        title: 'Watch the memory kit, not the sticks',
        body: 'Two 16 GB sticks sold as a matched kit are not the same purchase as two bought separately. Buy the kit.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide, per-country storefronts' },
      { label: 'Best value', value: 'Certified refurbished' },
      { label: 'Warranty', value: 'Varies by product line; long on PSUs' },
      { label: 'Also owns', value: 'Elgato, Scuf' },
    ],
    faq: [
      {
        q: 'Is Corsair refurbished stock reliable?',
        a: 'It is factory-refreshed with a warranty, which makes it a different proposition from a used marketplace listing. On cases, coolers and power supplies it is the best value on the site.',
      },
      {
        q: 'Is buying direct cheaper than a retailer?',
        a: 'Usually not on new components. It wins on configuration availability, spare parts and warranty handling.',
      },
      {
        q: 'When do peripherals go on sale?',
        a: 'Around the major seasonal retail events, where keyboards and headsets discount hardest.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'casetify',
    name: 'CASETiFY',
    domain: 'casetify.com',
    siteLabel: 'casetify.com',
    badge: 'CT',
    color: '#1A1A1A',
    category: 'electronics',
    markets: 'Worldwide',
    blurb: 'Premium phone cases sold on bundles — personalised ones are non-returnable.',
    about: [
      'CASETiFY sells phone, tablet and laptop cases positioned well above the commodity market, with collaboration ranges and a customisation tool that puts your own name or photo on the case.',
      'It discounts by bundle rather than by percentage: two or three cases in one order drop the per-unit price substantially, which is how most people buy — a case plus a screen protector plus something for a partner. The thing to get right before ordering is the personalisation, because a custom case cannot be returned and the preview screen is the only check you get.',
    ],
    offers: [
      {
        id: 'casetify-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-item bundle pricing',
        detail:
          'The per-case price falls sharply on two and three items. It is the standing mechanic rather than an event.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'casetify-firstorder',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail: 'A welcome code for new accounts on full-price items.',
        checked: CHECKED_R2,
      },
      {
        id: 'casetify-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal events and last-generation clearance',
        detail:
          'Cases for a superseded phone model clear hard. If your phone is a year old, its cases are cheap.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy for the phone you have, late',
        body: 'Case prices fall as a phone generation ages. There is no reason to buy a case at launch pricing.',
      },
      {
        title: 'Personalised means final sale',
        body: 'Check the spelling and the preview. There is no return path on a custom case.',
      },
      {
        title: 'Bundle with someone else',
        body: 'The multi-item discount does not care whose phone the second case is for.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide' },
      { label: 'Core mechanic', value: 'Multi-item bundles' },
      { label: 'Returns', value: 'Not available on personalised items' },
      { label: 'Delivery', value: 'Custom cases are made to order — allow time' },
    ],
    faq: [
      {
        q: 'Are CASETiFY cases worth the price?',
        a: 'They are protective and well made, and you are also paying for the design and the collaborations. Against a generic case at a fifth of the price, the protection difference is smaller than the price difference.',
      },
      {
        q: 'Can I return a custom case?',
        a: 'No. Personalised goods are excluded, which makes the preview screen the only safeguard.',
      },
      {
        q: 'Do the bundle discounts stack with a code?',
        a: 'Usually the basket takes whichever is larger. Compare both totals before paying.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'govee',
    name: 'Govee',
    domain: 'store.govee.com',
    siteLabel: 'store.govee.com',
    badge: 'GV',
    color: '#1F4FA8',
    category: 'electronics',
    markets: 'US, Canada and much of Europe',
    blurb: 'Smart lighting that discounts constantly — check the ecosystem before you commit.',
    about: [
      'Govee makes smart LED lighting: strips, bars, floor lamps, outdoor lights and the TV backlighting kits it is best known for. It sells direct and through the marketplaces, at prices well under the established smart-home brands.',
      'Discounting is close to permanent — site-wide events, bundle pricing and clearance run continuously — so paying list is unnecessary. The thing worth checking before a first purchase is ecosystem support: which products work with your voice assistant and whether they need Govee’s own hub, because that decides whether a cheap strip integrates with the rest of your house or lives in its own app.',
    ],
    offers: [
      {
        id: 'govee-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Near-continuous site-wide events',
        detail: 'Something is almost always running. The listed price is an anchor.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'govee-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Multi-pack and room bundles',
        detail:
          'Per-unit cost falls sharply on multi-packs, which is how lighting is actually bought.',
        checked: CHECKED_R2,
      },
      {
        id: 'govee-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance on previous product generations',
        detail:
          'Govee iterates quickly and the outgoing generation is usually the same light with an older controller.',
        checked: CHECKED_R2,
      },
      {
        id: 'govee-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new subscribers',
        detail: 'A welcome code for new accounts.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check assistant support per product',
        body: 'Not every Govee line supports every ecosystem, and some need the hub. Buying the wrong one is the common regret, not the price.',
      },
      {
        title: 'Measure before you buy strip lighting',
        body: 'Extensions are sold separately and sometimes do not match the original run. Measure the whole job first.',
      },
      {
        title: 'Compare the direct store with the marketplaces',
        body: 'Govee sells in both places and the promotions do not always match.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, Canada, much of Europe' },
      { label: 'Category', value: 'Smart LED lighting' },
      { label: 'Discounting', value: 'Near-continuous' },
      { label: 'Check first', value: 'Voice assistant and hub requirements' },
    ],
    faq: [
      {
        q: 'Does Govee work with Alexa and Google Home?',
        a: 'Much of the range does, but not all of it, and some products need Govee’s hub. Check the specific product page before buying.',
      },
      {
        q: 'Should I wait for a sale?',
        a: 'You rarely need to wait long — the site discounts almost permanently. Judge against the usual selling price, not the crossed-out one.',
      },
      {
        q: 'Is the previous generation worth buying?',
        a: 'Usually. Generational changes here are mostly to the controller and the app rather than to the light itself.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'poco',
    name: 'POCO',
    domain: 'poco.de',
    siteLabel: 'poco.de',
    badge: 'PO',
    color: '#B0B000',
    category: 'electronics',
    markets: 'Germany for this storefront; POCO sells across many markets',
    blurb: 'Xiaomi’s value phone brand — specification per euro is the entire proposition.',
    about: [
      'POCO is Xiaomi’s value-focused phone brand, selling handsets that put flagship-class processors and screens into mid-range prices by economising on cameras, materials and software support.',
      'Phones are not discounted by coupon anywhere, and POCO is no exception: the price moves through launch promotions, flash sales timed to product events, and the steep drop that follows a successor announcement. The specification to check is not the chip — it is how many years of software and security updates the model is promised, which is where the value brands make their real economy.',
    ],
    offers: [
      {
        id: 'poco-launch',
        kind: 'deal',
        value: 'Sale',
        title: 'Launch-window and flash-sale pricing',
        detail:
          'POCO prices aggressively at launch and during timed events. Between them the price is close to fixed.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'poco-previous',
        kind: 'deal',
        value: 'Last season',
        title: 'Previous generation after a successor lands',
        detail:
          'The outgoing model drops hard and is usually the better buy, provided its update window still has years left.',
        checked: CHECKED_R2,
      },
      {
        id: 'poco-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Accessory bundles with a handset',
        detail: 'Earbuds and a band bundled at launch cost far less than bought separately.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the update commitment, not the benchmark',
        body: 'A fast phone with two years of security updates is a worse purchase than a slower one with five.',
      },
      {
        title: 'Buy the model number, not the name',
        body: 'POCO reuses names across regions with different hardware. Confirm the exact model for your market.',
      },
      {
        title: 'Band support matters',
        body: 'Grey-import handsets can lack the network bands your carrier uses. Buy the version sold in your country.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Germany (poco.de)' },
      { label: 'Parent', value: 'Xiaomi' },
      { label: 'Positioning', value: 'Flagship specification at mid-range prices' },
      { label: 'Check first', value: 'Software update window and network bands' },
    ],
    faq: [
      {
        q: 'Are there POCO promo codes?',
        a: 'Not meaningfully on handsets. Launch pricing, flash sales and the post-successor drop are how phone prices move.',
      },
      {
        q: 'Is a POCO phone a good buy?',
        a: 'On raw specification per euro, very. The economies are in the camera processing, the build and the length of software support — decide whether those matter to you.',
      },
      {
        q: 'Can I buy from another country’s POCO site?',
        a: 'You can, but network bands, warranty and software region differ. Buy the version sold where you live.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'samsung-italy',
    name: 'Samsung',
    domain: 'samsung.com',
    siteLabel: 'samsung.com',
    badge: 'SM',
    color: '#1428A0',
    category: 'electronics',
    markets: 'Italy for this storefront; Samsung runs a site per country',
    blurb: 'Direct from Samsung, where trade-in and student pricing beat any code.',
    about: [
      'This is Samsung’s Italian direct storefront, covering phones, tablets, watches, TVs and appliances. Every country has its own site with its own pricing, promotions and trade-in programme.',
      'Buying direct from a phone manufacturer is not usually about the headline price — retailers often match or beat it. It is about the levers only the manufacturer offers: trade-in valuations that are frequently generous during a launch window, an education store with standing discounts, pre-order bundles that include a watch or earbuds, and instalment plans. Stacking trade-in with a launch bundle is where the real money is.',
    ],
    offers: [
      {
        id: 'samsung-it-tradein',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Trade-in credit against a new device',
        detail:
          'Valuations are at their most generous during a launch window and are frequently the largest single reduction available.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'samsung-it-education',
        kind: 'deal',
        value: 'Student',
        title: 'Education store pricing',
        detail:
          'A standing discount for verified students and staff across much of the catalogue, not a temporary promotion.',
        terms: 'Requires verification.',
        checked: CHECKED_R2,
      },
      {
        id: 'samsung-it-preorder',
        kind: 'deal',
        value: 'Bundle',
        title: 'Pre-order bundles with accessories included',
        detail:
          'Launch pre-orders typically include earbuds, a watch or a storage upgrade. Price the bundle, not the phone.',
        checked: CHECKED_R2,
      },
      {
        id: 'samsung-it-refurb',
        kind: 'deal',
        value: 'Refurbished',
        title: 'Certified refurbished with warranty',
        detail:
          'Manufacturer-refurbished handsets and tablets, warranted, in markets where offered.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Stack trade-in with the launch bundle',
        body: 'They are separate mechanics and they usually combine. That combination, not a code, is the discount.',
      },
      {
        title: 'Check the education store even if you are staff',
        body: 'Eligibility often extends beyond students to teachers and university employees.',
      },
      {
        title: 'Compare a good retailer on the headline',
        body: 'Direct wins on trade-in and bundles; retailers frequently win on the bare price.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Italy; a site per country' },
      { label: 'Biggest lever', value: 'Trade-in during a launch window' },
      { label: 'Education store', value: 'Standing discount, verification required' },
      { label: 'Promo codes', value: 'Not how phones are discounted' },
    ],
    faq: [
      {
        q: 'Is there a Samsung promo code?',
        a: 'Not meaningfully on devices. Trade-in, education pricing and pre-order bundles are the real mechanics, and they stack.',
      },
      {
        q: 'Is the trade-in value fair?',
        a: 'During a launch window it is often above what a private sale would net once you account for the hassle. Outside one, less so.',
      },
      {
        q: 'Does the Italian price apply elsewhere?',
        a: 'No. Samsung prices per country, and the promotions differ with it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'oppo',
    name: 'OPPO',
    domain: 'oppo.com',
    siteLabel: 'oppo.com',
    badge: 'OP',
    color: '#046A38',
    category: 'electronics',
    markets: 'India for this storefront',
    blurb: 'Phones direct in India — bank offer, exchange and EMI, as always.',
    about: [
      'OPPO sells phones, earbuds and watches direct in India alongside a very large offline retail presence. Its handsets emphasise charging speed, camera processing and design over raw benchmark performance.',
      'Indian phone pricing works the same way for every brand: the discount is a bank-card instant reduction at checkout, an exchange valuation on your old device, and no-cost EMI spreading the balance. A launch-period offer usually bundles all three, and that stack is far larger than any percentage code you will find.',
    ],
    offers: [
      {
        id: 'oppo-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discount at checkout',
        detail:
          'The largest single reduction on an Indian phone purchase. Issuer-specific and capped per transaction.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'oppo-exchange',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Exchange your old handset',
        detail: 'Quoted online against declared condition, confirmed on collection.',
        checked: CHECKED_R2,
      },
      {
        id: 'oppo-emi',
        kind: 'deal',
        value: 'Long term',
        title: 'No-cost EMI on eligible cards',
        detail:
          'Spreads the price without interest. Not a discount, but it changes the monthly cost.',
        checked: CHECKED_R2,
      },
      {
        id: 'oppo-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive-season pricing',
        detail: 'Indian phone prices cluster their real movement around the festive sales.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Stack the bank offer with the exchange',
        body: 'They apply at different stages and generally combine. Check both before paying.',
      },
      {
        title: 'Wait for the festive window if you can',
        body: 'The same handset moves meaningfully in price during those weeks.',
      },
      {
        title: 'Accessories carry codes; phones do not',
        body: 'Earbuds and cases do run percentage promotions. Handsets essentially never do.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Biggest lever', value: 'Bank offer plus exchange' },
      { label: 'Warranty', value: 'Manufacturer warranty, India' },
      { label: 'Cheapest window', value: 'Festive season' },
    ],
    faq: [
      {
        q: 'Is there an OPPO promo code for phones?',
        a: 'Realistically no. Bank offers, exchange and EMI at checkout are how handsets are discounted in India.',
      },
      {
        q: 'Is buying direct better than a marketplace?',
        a: 'Compare both. Marketplaces run their own bank offers during sale events and sometimes land lower.',
      },
      {
        q: 'When is the cheapest time to buy?',
        a: 'The festive sale weeks, and just after a successor model is announced.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'realme',
    name: 'realme',
    domain: 'realme.com',
    siteLabel: 'realme.com',
    badge: 'RM',
    color: '#FFC915',
    category: 'electronics',
    markets: 'India for this storefront',
    blurb: 'Aggressive value phones sold in timed flash sales.',
    about: [
      'realme sells budget and mid-range phones plus earbuds, watches and small accessories, direct in India and through the marketplaces. Its positioning is specification per rupee, refreshed at a pace that makes the model naming genuinely confusing.',
      'The distinctive mechanic is the flash sale: stock released at a set time at a lower price, often with a bank offer layered on. Beyond that it is the standard Indian phone stack — instant card discounts, exchange and no-cost EMI. Because the range refreshes so fast, the model launched six months ago is frequently the better purchase.',
    ],
    offers: [
      {
        id: 'realme-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Timed flash sales on new models',
        detail:
          'Stock released at an announced time and price. The cheapest the handset will be for months.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'realme-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail: 'Issuer offers layered on top of the sale price, capped per transaction.',
        checked: CHECKED_R2,
      },
      {
        id: 'realme-previous',
        kind: 'deal',
        value: 'Last season',
        title: 'Previous model after a refresh',
        detail:
          'With this release cadence there is nearly always a six-month-old handset at a much lower price.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the model numbers carefully',
        body: 'realme runs several overlapping series with similar names and quite different hardware. The number is the product.',
      },
      {
        title: 'Set an alarm for the flash sale',
        body: 'The mechanic works because stock is limited. Deciding afterwards means paying the standing price.',
      },
      {
        title: 'Check the update policy',
        body: 'Budget handsets vary widely on how long they receive security updates. It is the spec that ages the phone.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Mechanic', value: 'Flash sales plus bank offers' },
      { label: 'Refresh rate', value: 'Very fast — many overlapping series' },
      { label: 'Check first', value: 'Model number and update window' },
    ],
    faq: [
      {
        q: 'What is a realme flash sale?',
        a: 'Limited stock released at an announced time at a reduced price, usually with a bank offer available on top. It is the cheapest entry point on a new model.',
      },
      {
        q: 'Which realme model should I buy?',
        a: 'Compare by model number and chipset rather than by series name — the naming overlaps and the hardware does not.',
      },
      {
        q: 'Do promo codes work on realme phones?',
        a: 'Not meaningfully. The discount is the sale price and the bank offer.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'redmagic',
    name: 'RedMagic',
    domain: 'global.redmagic.gg',
    siteLabel: 'global.redmagic.gg',
    badge: 'RM',
    color: '#B0161E',
    category: 'electronics',
    markets: 'Much of Europe, North America and beyond',
    blurb: 'Gaming phones with active cooling — buy direct, check the bands.',
    about: [
      'RedMagic makes gaming phones: high refresh-rate displays, shoulder triggers, and an actual fan inside the handset to keep the processor at full clock during long sessions. It is a niche the mainstream brands do not really serve.',
      'It sells direct globally rather than through carriers, which has two consequences. The pricing is unusually aggressive for the specification, and you are responsible for checking that the model supports your carrier’s network bands — there is no shop to ask. Discounting runs through launch promotions, bundles and clearance on the outgoing generation.',
    ],
    offers: [
      {
        id: 'redmagic-launch',
        kind: 'deal',
        value: 'Sale',
        title: 'Launch pricing and seasonal events',
        detail:
          'The direct model means aggressive launch pricing and frequent site-wide campaigns afterwards.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'redmagic-previous',
        kind: 'deal',
        value: 'Last season',
        title: 'Previous generation at clearance',
        detail:
          'Gaming phone generations change less than the marketing suggests. The outgoing model is usually the value buy.',
        checked: CHECKED_R2,
      },
      {
        id: 'redmagic-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Accessory bundles with a handset',
        detail:
          'Cases, chargers and cooling accessories bundled at launch cost less than separately.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check your carrier bands before ordering',
        body: 'Direct-import handsets can lack bands your network needs. This is the mistake that makes a cheap phone useless.',
      },
      {
        title: 'Understand the warranty route',
        body: 'Buying direct from a manufacturer with no local presence means shipping a faulty handset back. Factor that in.',
      },
      {
        title: 'The fan is the point',
        body: 'If you are not gaming for hours, a mainstream phone with better cameras is the better purchase at the same money.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Europe, North America and beyond, direct' },
      { label: 'Distinctive', value: 'Active cooling fan and shoulder triggers' },
      { label: 'Check first', value: 'Network band support for your carrier' },
      { label: 'Warranty', value: 'Direct with the manufacturer — no local shop' },
    ],
    faq: [
      {
        q: 'Will a RedMagic phone work on my network?',
        a: 'Check the band list against your carrier before ordering. This is the single most important thing about buying a direct-import handset.',
      },
      {
        q: 'Is the cooling fan a gimmick?',
        a: 'No — it is what keeps the processor from throttling during long sessions, which is the whole reason the category exists. It is also useless to you if you do not game that way.',
      },
      {
        q: 'How does warranty work?',
        a: 'Directly with the manufacturer, which usually means shipping the device. Slower than a local retailer.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'xppen',
    name: 'XPPen',
    domain: 'xp-pen.com',
    siteLabel: 'xp-pen.com',
    badge: 'XP',
    color: '#1F5C8A',
    category: 'electronics',
    markets: 'Worldwide',
    blurb: 'Drawing tablets at half the price of the incumbent — discounted constantly.',
    about: [
      'XPPen makes graphics tablets and pen displays for illustration, animation and photo editing, competing directly with Wacom at substantially lower prices. The range runs from small screenless tablets up to large pen displays.',
      'It discounts almost permanently — site-wide events, student pricing, bundle deals with stands and gloves, and clearance on outgoing models. What separates a good purchase from a bad one is not the price but the driver: check that your operating system and your specific software are supported before buying, because that is where budget tablets fail.',
    ],
    offers: [
      {
        id: 'xppen-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Near-continuous site-wide promotions',
        detail: 'Something is nearly always running. The listed price is an anchor.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'xppen-student',
        kind: 'deal',
        value: 'Student',
        title: 'Student and educator pricing',
        detail:
          'A standing verified discount, which matters in a category bought largely by students.',
        terms: 'Requires verification.',
        checked: CHECKED_R2,
      },
      {
        id: 'xppen-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundles with stands, gloves and spare nibs',
        detail: 'The accessories you will buy anyway, cheaper in the box than separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'xppen-clearance',
        kind: 'deal',
        value: 'Outlet',
        title: 'Clearance on previous models',
        detail:
          'Pen technology moves slowly. A superseded display is frequently the same drawing experience for much less.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check driver support for your OS and software',
        body: 'This is where cheap tablets disappoint, not on the hardware. Confirm before ordering.',
      },
      {
        title: 'Nibs are consumable',
        body: 'They wear out and are cheap in bulk. Buy a pack with the tablet.',
      },
      {
        title: 'Screenless is cheaper and fine for many people',
        body: 'A pen display is a luxury. If you are learning, a screenless tablet at a quarter of the price does the same job.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Worldwide' },
      { label: 'Category', value: 'Graphics tablets and pen displays' },
      { label: 'Student pricing', value: 'Yes, verified' },
      { label: 'Check first', value: 'Driver support for your OS and applications' },
    ],
    faq: [
      {
        q: 'Is XPPen as good as Wacom?',
        a: 'For most users the drawing experience is close and the price is not. Wacom’s advantage is driver maturity and build; XPPen’s is that you can buy twice the screen for the money.',
      },
      {
        q: 'Do I need a pen display or a plain tablet?',
        a: 'A plain tablet is much cheaper and, once you adapt to looking at the monitor, entirely capable. Buy the display when you know you want it.',
      },
      {
        q: 'Should I wait for a sale?',
        a: 'Barely necessary — the site discounts continuously. Check the student rate if you qualify.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'noise',
    name: 'Noise',
    domain: 'gonoise.com',
    siteLabel: 'gonoise.com',
    badge: 'NS',
    color: '#1A1A1A',
    category: 'electronics',
    markets: 'India only',
    blurb: 'Indian wearables brand competing entirely on price and refresh rate.',
    about: [
      'Noise is one of the Indian smart-wearables brands: smartwatches, earbuds and audio accessories at price points far below the international names, sold direct and through the marketplaces.',
      'This is one of the most competitive segments in Indian retail, and it shows in the discounting — permanent site-wide events, bundle pricing, bank offers and constant new models. The trade-off to understand is support: sensor accuracy and app quality vary across the segment, and a two-year-old model may stop receiving firmware updates. Buy for the two years you will actually wear it.',
    ],
    offers: [
      {
        id: 'noise-sitewide',
        kind: 'deal',
        value: 'Sale',
        title: 'Permanent site-wide discounting',
        detail: 'Advertised events run continuously. Nobody pays the listed price.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'noise-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Watch-and-earbuds bundles',
        detail: 'Bought together the pair costs well under the two separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'noise-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card offers at checkout',
        detail: 'Instant issuer discounts applied at payment on top of the sale price.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare across the Indian wearables brands',
        body: 'The segment is crowded and the specifications are close. Buy on the app and the sensor set, not the brand.',
      },
      {
        title: 'Check how long the model has been out',
        body: 'Firmware support on budget wearables is short. A brand-new model buys you more of it.',
      },
      {
        title: 'Straps are cheap and generic',
        body: 'Standard lug widths mean third-party straps fit. Do not pay brand prices for a strap.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Products', value: 'Smartwatches, earbuds, audio accessories' },
      { label: 'Discounting', value: 'Permanent' },
      { label: 'Watch out for', value: 'Short firmware support windows' },
    ],
    faq: [
      {
        q: 'Are Noise smartwatches accurate?',
        a: 'For step counting and general activity, adequate. For heart rate during exercise and for SpO2, treat budget wearables across this whole segment as indicative rather than clinical.',
      },
      {
        q: 'Should I buy direct or from a marketplace?',
        a: 'Compare both during a sale event. Warranty is manufacturer-backed either way if the seller is authorised.',
      },
      {
        q: 'Do promo codes work?',
        a: 'Yes, and the site runs its own promotions continuously. The bank offer at payment usually adds to it.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'x-kom',
    name: 'x-kom',
    domain: 'x-kom.pl',
    siteLabel: 'x-kom.pl',
    badge: 'XK',
    color: '#1F7A4A',
    category: 'electronics',
    markets: 'Poland only',
    blurb: 'Polish PC and electronics retailer with a strong outlet and daily deals.',
    about: [
      'x-kom is one of Poland’s largest computer and consumer electronics retailers, selling components, laptops, phones and peripherals online with a store network behind it. It is a specialist rather than a general retailer, which shows in the depth of the component range.',
      'The mechanics are Polish retail standard with one addition worth knowing: a well-stocked outlet of returned, open-box and display units, graded and warranted. Between that, the daily deal slots and zero-interest instalments on larger purchases, the coupon is the least of the options.',
    ],
    offers: [
      {
        id: 'xkom-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet — returned, open-box and display stock',
        detail:
          'Graded per item and warranted. On monitors and laptops it is the deepest legitimate discount available.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'xkom-daily',
        kind: 'deal',
        value: 'Sale',
        title: 'Daily deal slots',
        detail: 'Time-limited pricing on a rotating selection, refreshed every day.',
        checked: CHECKED_R2,
      },
      {
        id: 'xkom-raty',
        kind: 'deal',
        value: 'Long term',
        title: 'Zero-interest instalments',
        detail:
          'Standard on larger purchases. Not a discount, but it changes what you can buy now.',
        checked: CHECKED_R2,
      },
      {
        id: 'xkom-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Build and peripheral bundles',
        detail: 'Component sets and laptop-plus-accessory bundles priced below the parts.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read the outlet grade, not the discount',
        body: 'Grades range from cosmetically perfect open-box to visibly marked. The grade is stated and it explains the price.',
      },
      {
        title: 'Compare against the other Polish specialists',
        body: 'This market is price-competitive and the same SKU moves between retailers weekly.',
      },
      {
        title: 'Free store collection',
        body: 'On a large monitor or a desktop, collecting avoids a delivery charge and a courier risk.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Currency', value: 'PLN' },
      { label: 'Speciality', value: 'PC components and laptops' },
      { label: 'Returns', value: '14 days on distance sales, per Polish law' },
    ],
    faq: [
      {
        q: 'Is x-kom outlet stock warranted?',
        a: 'Yes, with the condition grade stated per item. Display and open-box units are usually the best value in the shop.',
      },
      {
        q: 'Does x-kom deliver outside Poland?',
        a: 'It serves the Polish market.',
      },
      {
        q: 'Are the daily deals real?',
        a: 'They are genuinely time-limited and genuinely reduced, but they rotate — if today’s slot is not what you need, tomorrow’s might be.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'komputronik',
    name: 'Komputronik',
    domain: 'komputronik.pl',
    siteLabel: 'komputronik.pl',
    badge: 'KM',
    color: '#1F4E9B',
    category: 'electronics',
    markets: 'Poland only',
    blurb: 'Polish electronics retailer with outlet stock and instalment financing.',
    about: [
      'Komputronik is a long-established Polish retailer of computers, components and consumer electronics, selling online and through a store network, with its own assembled desktop range alongside the brand catalogue.',
      'Its discounting follows the local pattern: weekly promotional campaigns, an outlet of returned and display stock, zero-interest instalments, and trade-in on larger items. Because Poland is a competitive electronics market, checking the same SKU across two or three retailers before buying is usually worth more than any code.',
    ],
    offers: [
      {
        id: 'komputronik-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet on returned and display stock',
        detail: 'Graded, warranted, and substantially below new pricing.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'komputronik-promo',
        kind: 'deal',
        value: 'Sale',
        title: 'Weekly promotional campaigns',
        detail: 'Rotating category promotions, the standing rhythm of Polish electronics retail.',
        checked: CHECKED_R2,
      },
      {
        id: 'komputronik-raty',
        kind: 'deal',
        value: 'Long term',
        title: 'Zero-interest instalments',
        detail: 'Available on larger purchases at checkout.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Cross-check the Polish retailers',
        body: 'The same laptop moves between x-kom, Media Expert and Komputronik week to week. It is a two-minute comparison.',
      },
      {
        title: 'Store collection avoids delivery risk',
        body: 'On monitors and desktops this matters as much as the fee.',
      },
      {
        title: 'Old-equipment collection',
        body: 'Retailers here will normally take your old device when delivering a replacement. Ask rather than paying for disposal.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Currency', value: 'PLN' },
      { label: 'Outlet', value: 'Returned and display stock, warranted' },
      { label: 'Returns', value: '14 days on distance sales, per Polish law' },
    ],
    faq: [
      {
        q: 'Is Komputronik cheaper than x-kom?',
        a: 'Sometimes, and sometimes the reverse. This is a competitive market where the ranking changes weekly by SKU — check both.',
      },
      {
        q: 'Does it ship outside Poland?',
        a: 'It serves the Polish market.',
      },
      {
        q: 'Is outlet stock risky?',
        a: 'Not especially — the grade is stated and the warranty applies. Display units in particular are usually a good buy.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'vijay-sales',
    name: 'Vijay Sales',
    domain: 'vijaysales.com',
    siteLabel: 'vijaysales.com',
    badge: 'VS',
    color: '#B0161E',
    category: 'electronics',
    markets: 'India only',
    blurb: 'Indian electronics chain where the bank offer and exchange do the work.',
    about: [
      'Vijay Sales is an Indian electronics and appliance retailer with a large store network across the west and north of the country, selling phones, televisions, laptops and white goods online and offline.',
      'Appliance and electronics retail in India discounts through payment rather than through price: instant bank-card reductions, no-cost EMI, and exchange programmes on televisions and appliances. Add the festive-season campaigns, when the whole market moves, and the coupon is the smallest lever on the page.',
    ],
    offers: [
      {
        id: 'vijaysales-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at checkout',
        detail: 'Rotating issuer offers, capped per transaction, applied at payment.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'vijaysales-exchange',
        kind: 'deal',
        value: 'Trade-in',
        title: 'Exchange on televisions and appliances',
        detail:
          'Old-unit credit against a replacement, plus collection. On a large appliance this is the biggest single reduction.',
        checked: CHECKED_R2,
      },
      {
        id: 'vijaysales-festive',
        kind: 'deal',
        value: 'Sale',
        title: 'Festive-season campaigns',
        detail: 'The annual low across the category, aligned to the Indian festive calendar.',
        checked: CHECKED_R2,
      },
      {
        id: 'vijaysales-emi',
        kind: 'deal',
        value: 'Long term',
        title: 'No-cost EMI on eligible cards',
        detail: 'Spreads a large purchase without interest on qualifying cards.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Ask about the demo and display units',
        body: 'Store-displayed televisions are sold at a discount with full warranty. They are rarely listed online.',
      },
      {
        title: 'Installation is a separate cost',
        body: 'Air conditioners and large televisions carry an installation charge. Get it quoted before comparing totals.',
      },
      {
        title: 'Compare against the marketplaces during festive week',
        body: 'The online platforms discount hard in the same window and the ranking flips by product.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Channels', value: 'Store network plus online' },
      { label: 'Biggest levers', value: 'Bank offers and exchange' },
      { label: 'Peak', value: 'Festive season' },
    ],
    faq: [
      {
        q: 'Are Vijay Sales prices better than online marketplaces?',
        a: 'Sometimes, particularly on appliances where installation and exchange are bundled. During festive week the marketplaces often win on phones.',
      },
      {
        q: 'Do they deliver across India?',
        a: 'Delivery coverage follows the store network, which is strongest in the west and north. Check your pin code.',
      },
      {
        q: 'Is the exchange programme worth using?',
        a: 'On a large appliance, yes — the credit plus free collection of the old unit is usually more than a private sale nets.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'sharaf-dg',
    name: 'Sharaf DG',
    domain: 'uae.sharafdg.com',
    siteLabel: 'uae.sharafdg.com',
    badge: 'SDG',
    color: '#B0161E',
    category: 'electronics',
    markets: 'United Arab Emirates',
    blurb: 'UAE electronics chain — bank offers and instalments, as across the Gulf.',
    about: [
      'Sharaf DG is one of the largest electronics retailers in the UAE, carrying phones, computers, televisions, appliances and gaming across a store network and online, priced in dirhams.',
      'Gulf electronics retail discounts the way Indian retail does: bank-card instant reductions, zero-interest instalment plans through the local banks, exchange on appliances, and heavy campaigns around the shopping festivals. A loyalty programme accrues points on top. Public codes exist but they are the smallest of those levers.',
    ],
    offers: [
      {
        id: 'sharafdg-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Bank card discounts and instalment plans',
        detail:
          'Issuer offers with UAE banks applied at payment, plus zero-interest instalments on larger purchases.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'sharafdg-festival',
        kind: 'deal',
        value: 'Sale',
        title: 'Shopping festival campaigns',
        detail:
          'The UAE retail calendar concentrates its deepest discounting into a few defined windows.',
        checked: CHECKED_R2,
      },
      {
        id: 'sharafdg-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme with points on purchases',
        detail: 'Points accrue and redeem against future orders.',
        checked: CHECKED_R2,
      },
      {
        id: 'sharafdg-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundles with accessories and extended warranty',
        detail:
          'Phones and laptops are frequently bundled with cases, insurance or extended cover. Price what is in the box.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check which bank offer applies before you pay',
        body: 'The UAE issuer offers rotate and are capped. It is the largest single discount and it is easy to miss.',
      },
      {
        title: 'Extended warranty is optional',
        body: 'It is offered on most electronics here and it is a margin product. Decide before the till, not at it.',
      },
      {
        title: 'Time a big purchase to the festival windows',
        body: 'Prices in this market move sharply in defined weeks rather than continuously.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United Arab Emirates' },
      { label: 'Currency', value: 'AED' },
      { label: 'Biggest levers', value: 'Bank offers and instalments' },
      { label: 'Loyalty', value: 'Points programme' },
    ],
    faq: [
      {
        q: 'Does Sharaf DG deliver outside the UAE?',
        a: 'This storefront serves the UAE. The group operates in other Gulf markets separately.',
      },
      {
        q: 'Are bank offers worth chasing?',
        a: 'Yes — they are the largest reduction available and they change every few weeks. Check which of your cards qualifies before paying.',
      },
      {
        q: 'Is the extended warranty worth buying?',
        a: 'On appliances sometimes; on phones rarely. It is priced as a margin product, so treat it as an optional purchase and not a formality.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'suunto',
    name: 'Suunto',
    domain: 'suunto.com',
    siteLabel: 'suunto.com',
    badge: 'SU',
    color: '#1A1A1A',
    category: 'electronics',
    markets: 'France, Belgium, Czechia, Denmark, Greece and other European markets',
    blurb: 'Finnish outdoor sports watches — the previous generation is the buy.',
    about: [
      'Suunto makes GPS sports watches and dive computers from Finland, aimed at trail running, mountaineering, diving and multisport rather than at general fitness tracking. Battery life and navigation are the priorities, at the expense of the smartwatch features the mainstream brands lead with.',
      'Sports watches are a category where the outgoing generation is almost always the sensible purchase: the sensors change slowly, the software is shared across the range for years, and the price gap is large. Suunto sells direct through European storefronts with seasonal sales and an outlet.',
    ],
    offers: [
      {
        id: 'suunto-previous',
        kind: 'deal',
        value: 'Last season',
        title: 'Previous-generation watches at a real cut',
        detail:
          'Sensors and navigation change slowly here. The superseded model runs the same software for years.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'suunto-outlet',
        kind: 'deal',
        value: 'Outlet',
        title: 'Outlet section on retired colourways and models',
        detail: 'Standing reductions on stock the brand is clearing.',
        checked: CHECKED_R2,
      },
      {
        id: 'suunto-sale',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns',
        detail: 'Percentage events several times a year across the European storefronts.',
        checked: CHECKED_R2,
      },
      {
        id: 'suunto-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Newsletter signup offer',
        detail: 'A first-order discount for new subscribers in most markets.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy the older model',
        body: 'On sports watches the generational change is usually the case material and the screen, not the GPS or the sensors.',
      },
      {
        title: 'Check strap availability',
        body: 'On a watch you will own for five years, being able to buy a replacement strap matters more than the colour you pick now.',
      },
      {
        title: 'Battery life is the specification',
        body: 'Compare hours in GPS mode, not marketing days. It is the number that decides whether the watch suits your sport.',
      },
    ],
    facts: [
      { label: 'Origin', value: 'Finland' },
      { label: 'Focus', value: 'Trail, mountaineering, diving, multisport' },
      { label: 'Best value', value: 'Previous generation' },
      { label: 'Markets', value: 'European storefronts, priced locally' },
    ],
    faq: [
      {
        q: 'Should I buy the newest Suunto?',
        a: 'Usually not. The previous generation shares the software and most of the sensor set at a substantially lower price.',
      },
      {
        q: 'How does it compare with Garmin?',
        a: 'Closer on navigation and battery than the market share suggests; behind on ecosystem and third-party app support. Choose on the sport you do.',
      },
      {
        q: 'Are there Suunto discount codes?',
        a: 'A signup offer and seasonal campaigns. The outlet and the older generation are the larger savings.',
      },
    ],
    updated: CHECKED_R2,
  },
]
