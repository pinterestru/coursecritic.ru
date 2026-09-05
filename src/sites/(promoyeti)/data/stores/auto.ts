/**
 * Cars & mobility — parts and hire.
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

export const autoStores: Store[] = [
  {
    slug: 'autodoc',
    name: 'Autodoc',
    domain: 'autodoc.pl',
    siteLabel: 'autodoc.pl',
    badge: 'AD',
    color: '#1F6B4A',
    category: 'auto',
    markets: 'Poland, France, Spain, Italy, UK, Portugal, Austria, Netherlands and the Nordics',
    blurb: 'European car-parts retailer where the OE number is the only search that matters.',
    about: [
      'Autodoc is one of Europe’s largest online car-parts retailers, selling replacement parts, oils, tools and accessories across most of the EU through country storefronts, with a catalogue searchable by vehicle registration or by part number.',
      'Prices are well below a franchised dealer and generally below an independent factor’s counter price. The discounting is straightforward — first-order codes, seasonal campaigns, bulk pricing on service items — but the money is really made or lost on ordering the right part. A wrongly ordered brake disc is a heavy international return.',
    ],
    offers: [
      {
        id: 'autodoc-first',
        kind: 'deal',
        value: 'New customer',
        title: 'First-order discount for new customers',
        detail: 'A welcome percentage on a first order, issued per country storefront.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'autodoc-service-kits',
        kind: 'deal',
        value: 'Bundle',
        title: 'Service kits priced below the separate parts',
        detail:
          'Filters, oil and plugs bought as a kit for your vehicle cost less than the same items individually and remove the risk of a mismatch.',
        checked: CHECKED,
      },
      {
        id: 'autodoc-campaigns',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns on brakes, batteries and oils',
        detail:
          'The catalogue rotates through category promotions. Buying in the right week is a real saving on consumables.',
        checked: CHECKED,
      },
      {
        id: 'autodoc-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive pricing and the vehicle garage',
        detail:
          'Saving your vehicle in the app filters the catalogue to parts that fit, which is worth more than the app discount itself.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Match the OE number, not the model name',
        body: 'The same model year can take two different parts depending on build date and trim. The OE number on the old part is the only reliable identifier.',
      },
      {
        title: 'Order everything for the job at once',
        body: 'Shipping is per order and parts arrive from different warehouses. Half a brake job waiting on a delivery is an expensive weekend.',
      },
      {
        title: 'Compare the tier brands',
        body: 'The same factory makes OE and aftermarket versions of many parts. The mid-tier brand is frequently the same component without the box.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'Most of the EU plus the UK, via country storefronts' },
      { label: 'Search', value: 'By registration or OE part number' },
      { label: 'Returns', value: 'Possible but heavy items are expensive to send back' },
      { label: 'Delivery', value: 'Multi-warehouse — parts can arrive separately' },
    ],
    faq: [
      {
        q: 'Are Autodoc parts genuine?',
        a: 'They are genuine branded aftermarket and OE-supplier parts, not counterfeits. The brand tiering is real, though — read which manufacturer you are buying, not just the price.',
      },
      {
        q: 'What if I order the wrong part?',
        a: 'You can return it, but you generally pay the return shipping, and on heavy items that can exceed the part’s value. Verify the OE number first.',
      },
      {
        q: 'Do the codes work on every country site?',
        a: 'No. Each storefront issues its own and validates against the market you are checking out in.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'enterprise',
    name: 'Enterprise Rent-A-Car',
    domain: 'enterprise.ca',
    siteLabel: 'enterprise.ca',
    badge: 'EN',
    color: '#1F5C33',
    category: 'auto',
    markets: 'Canada for this storefront; Enterprise operates worldwide under country sites',
    blurb: 'Car hire where the discount is a corporate code, not a coupon.',
    about: [
      'Enterprise is one of the largest car-hire companies in the world, with an unusually deep network of neighbourhood branches as well as airport locations — which matters, because off-airport pickup avoids airport concession fees.',
      'Car hire does not discount by public coupon. It discounts by contract: corporate and association codes, loyalty membership, and pre-paid rates. What determines your final bill more than any of them is the counter conversation — excess insurance, fuel policy, additional driver and young-driver fees routinely add more than the base rate.',
    ],
    offers: [
      {
        id: 'enterprise-corporate',
        kind: 'deal',
        value: 'Member',
        title: 'Corporate, association and partner discount codes',
        detail:
          'The real discount mechanism in car hire. Employer, airline, union and membership organisation codes attach a negotiated rate to your booking.',
        terms: 'You may be asked for proof of eligibility at the counter.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'enterprise-offairport',
        kind: 'deal',
        value: 'Off-airport',
        title: 'Off-airport branch pickup',
        detail:
          'Neighbourhood branches avoid airport concession recovery fees, which are a fixed percentage of the rental. On a week-long hire the saving is large.',
        checked: CHECKED,
      },
      {
        id: 'enterprise-prepay',
        kind: 'deal',
        value: 'Long term',
        title: 'Pay-now rates below pay-later rates',
        detail:
          'Prepaid bookings are cheaper and less flexible. Worth it on a fixed trip, not on a provisional one.',
        checked: CHECKED,
      },
      {
        id: 'enterprise-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme with faster pickup and free days',
        detail: 'Points toward free rental days and a shorter counter queue.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check your card’s hire-car insurance before the counter',
        body: 'Many credit cards include collision damage cover. Knowing whether yours does turns the counter upsell into a yes-or-no question rather than a panic.',
      },
      {
        title: 'Full-to-full fuel only',
        body: 'Any pre-purchase fuel policy is priced in the hire company’s favour. Return it full and keep the receipt.',
      },
      {
        title: 'Photograph the car before and after',
        body: 'Five minutes with a phone camera is the cheapest damage insurance there is.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'Canada (enterprise.ca); country sites elsewhere' },
      { label: 'Real discount', value: 'Corporate and association codes' },
      { label: 'Fee traps', value: 'Excess waiver, fuel policy, additional driver, young driver' },
      { label: 'Network', value: 'Airport and neighbourhood branches' },
    ],
    faq: [
      {
        q: 'Are there Enterprise promo codes?',
        a: 'Not in the public-coupon sense. The codes that work are corporate, association and partner codes attached to a negotiated rate — and you may need to prove eligibility.',
      },
      {
        q: 'Should I buy the excess waiver at the counter?',
        a: 'Only if you have checked your credit card and your travel insurance first. Counter excess products are the single largest markup in car hire.',
      },
      {
        q: 'Is off-airport really cheaper?',
        a: 'Usually meaningfully so, because airport locations pass on concession fees. Weigh it against the cost and hassle of getting to the branch.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'movida',
    name: 'Movida',
    domain: 'movida.com.br',
    siteLabel: 'movida.com.br',
    badge: 'MV',
    color: '#B0501A',
    category: 'auto',
    markets: 'Brazil only',
    blurb: 'Brazilian car hire and subscription, priced by term rather than by coupon.',
    about: [
      'Movida is one of Brazil’s largest car-hire companies, operating daily rental, monthly rental and a car-subscription product, with a nationwide branch network and a used-vehicle sales arm.',
      'The pricing logic is term-based: the daily rate falls sharply as the rental lengthens, and the monthly and subscription products are a different price band entirely. For anything beyond a week, moving to the monthly product usually beats any discount applied to a daily rate.',
    ],
    offers: [
      {
        id: 'movida-monthly',
        kind: 'deal',
        value: 'Monthly rate',
        title: 'Monthly rental instead of a long daily booking',
        detail:
          'The single biggest saving. A month-long booking at the monthly rate is far below thirty daily rates with a discount applied.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'movida-prepay',
        kind: 'deal',
        value: 'Long term',
        title: 'Prepaid rates and online-only pricing',
        detail: 'Booking and paying online is cheaper than arranging at the counter.',
        checked: CHECKED,
      },
      {
        id: 'movida-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme and partner discounts',
        detail:
          'Points on rentals plus negotiated rates through airline and card partnerships in Brazil.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Ask about the protection package explicitly',
        body: 'Brazilian rentals bundle protection differently from Europe or the US. Confirm what is included before you decline anything.',
      },
      {
        title: 'Check the toll and fuel arrangement',
        body: 'Automatic toll tags and fuel policies are billed after the rental. Understand both at pickup.',
      },
      {
        title: 'Subscription is a different product',
        body: 'If you need a car for months rather than weeks, the subscription includes maintenance and insurance and is priced accordingly.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Brazil' },
      { label: 'Products', value: 'Daily rental, monthly rental, car subscription' },
      { label: 'Currency', value: 'BRL' },
      { label: 'Best value', value: 'Monthly rate on anything over a week' },
    ],
    faq: [
      {
        q: 'Can foreigners rent from Movida?',
        a: 'Generally yes, with a valid licence and a credit card, subject to the company’s current documentation rules. Check before you fly.',
      },
      {
        q: 'Are there Movida coupon codes?',
        a: 'Partner and loyalty rates exist; broad public codes are not how this market prices. The term you book for matters far more.',
      },
      {
        q: 'What is included in the daily rate?',
        a: 'A basic protection level and a mileage allowance, both of which vary by tariff. Read the tariff, not the headline.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'alamo',
    name: 'Alamo Rent A Car',
    domain: 'alamo.com',
    siteLabel: 'alamo.com',
    badge: 'AL',
    color: '#1F4E9B',
    category: 'auto',
    markets: 'United States',
    blurb: 'Leisure-focused car hire where prepaying and skipping the counter save most.',
    about: [
      'Alamo is the leisure brand of the Enterprise group, aimed at holidaymakers rather than corporate travel. Its distinguishing feature in the US is how far it has pushed self-service: online check-in and kiosks that let you skip the desk entirely at most airports.',
      'That matters financially as well as practically, because the counter is where car hire gets expensive. Excess waivers, fuel packages, upgrades and toll devices are all sold there, and skipping it removes the conversation. Beyond that the levers are the standard ones: prepaid rates below pay-later, association and partner codes, and the free loyalty programme.',
    ],
    offers: [
      {
        id: 'alamo-prepay',
        kind: 'deal',
        value: 'Long term',
        title: 'Pay-now rates below pay-later',
        detail:
          'Prepaid bookings are cheaper and less flexible. Right for a fixed trip, wrong for a provisional one.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'alamo-skipcounter',
        kind: 'deal',
        value: 'Free',
        title: 'Online check-in and skip the counter',
        detail:
          'Removes the queue and, more usefully, removes the upsell conversation where car hire actually gets expensive.',
        checked: CHECKED_R2,
      },
      {
        id: 'alamo-partner',
        kind: 'deal',
        value: 'Coupons',
        title: 'Association and partner discount codes',
        detail:
          'Airline, membership-organisation and employer codes attach negotiated rates. The real discount mechanism in car hire.',
        terms: 'You may be asked to prove eligibility at pickup.',
        checked: CHECKED_R2,
      },
      {
        id: 'alamo-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme',
        detail: 'Faster pickup and occasional free-day benefits. Costs nothing to join.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check your card’s hire-car cover before you travel',
        body: 'Many credit cards include collision damage cover. Knowing whether yours does turns the counter upsell into a simple no.',
      },
      {
        title: 'Full-to-full fuel only',
        body: 'Every pre-purchase fuel option is priced in the company’s favour. Return it full and keep the receipt.',
      },
      {
        title: 'Photograph the car before and after',
        body: 'Five minutes with a phone is the cheapest damage protection available.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Group', value: 'Enterprise' },
      { label: 'Positioning', value: 'Leisure travel, self-service pickup' },
      { label: 'Fee traps', value: 'Excess waiver, fuel policy, tolls, extra driver' },
    ],
    faq: [
      {
        q: 'Are there Alamo promo codes?',
        a: 'Not in the public coupon sense. Association, airline and employer codes attach negotiated rates and are the genuine mechanism.',
      },
      {
        q: 'Should I prepay?',
        a: 'On a trip that is definitely happening, yes — it is cheaper. On a provisional booking the flexibility is worth more than the difference.',
      },
      {
        q: 'Do I need their insurance?',
        a: 'Check your credit card and your travel policy first. Counter excess products are the largest markup in car hire and the answer is often no.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'national-car-rental',
    name: 'National Car Rental',
    domain: 'nationalcar.com',
    siteLabel: 'nationalcar.com',
    badge: 'NC',
    color: '#1F5C33',
    category: 'auto',
    markets: 'United States',
    blurb: 'Business-focused hire where the loyalty aisle is worth more than any rate.',
    about: [
      'National is the business-travel brand of the Enterprise group. Its defining feature is the Emerald Aisle: qualifying members walk to a designated area, take any car in it, and drive out at the mid-size rate regardless of what they picked.',
      'That is the discount, and it is unusual because it is structural rather than promotional. Joining costs nothing, and on a business traveller who hires monthly the combination of skipping the counter and choosing the car is worth far more than a percentage off a base rate. Corporate and association codes do the rest.',
    ],
    offers: [
      {
        id: 'national-aisle',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty aisle — pick any car at the booked rate',
        detail:
          'Free to join. Choose from the designated aisle and pay the mid-size rate whatever you take, without a counter visit.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'national-corporate',
        kind: 'deal',
        value: 'Coupons',
        title: 'Corporate and association rate codes',
        detail:
          'Employer, membership-body and airline codes attach negotiated pricing. This is how car hire is actually discounted.',
        terms: 'Eligibility may be checked at pickup.',
        checked: CHECKED_R2,
      },
      {
        id: 'national-prepay',
        kind: 'deal',
        value: 'Long term',
        title: 'Prepaid rates below pay-later',
        detail: 'Cheaper and less flexible. Suits a fixed itinerary.',
        checked: CHECKED_R2,
      },
      {
        id: 'national-offairport',
        kind: 'deal',
        value: 'Off-airport',
        title: 'Off-airport branch pickup',
        detail:
          'Avoids the airport concession recovery fee, which is a fixed percentage of the whole rental.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Join the programme before your first hire',
        body: 'The aisle privilege is the product. Booking without it and joining later achieves nothing for that trip.',
      },
      {
        title: 'Decline the fuel package',
        body: 'Full-to-full is the only policy that cannot be used against you.',
      },
      {
        title: 'Check for a corporate code you already have',
        body: 'Employers, professional bodies and airline programmes all carry them, and people forget they qualify.',
      },
    ],
    facts: [
      { label: 'Market', value: 'United States' },
      { label: 'Group', value: 'Enterprise' },
      { label: 'Key benefit', value: 'Loyalty aisle — choose the car, pay the booked rate' },
      { label: 'Fee traps', value: 'Excess waiver, fuel, tolls, young-driver' },
    ],
    faq: [
      {
        q: 'What is the Emerald Aisle worth?',
        a: 'On a frequent hirer, more than any rate discount: you skip the counter and take a larger car than you paid for. It is free to join, which makes it the first thing to do.',
      },
      {
        q: 'Are there public National promo codes?',
        a: 'Corporate and association codes, yes. Public consumer coupons, essentially no — that is not how this market prices.',
      },
      {
        q: 'Is off-airport really cheaper?',
        a: 'Usually, because airport locations pass on concession fees. Weigh it against the cost of getting to the branch.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'way-com',
    name: 'Way.com',
    domain: 'way.com',
    siteLabel: 'way.com',
    badge: 'WY',
    color: '#1F6BC4',
    category: 'auto',
    markets: 'United States and Canada',
    blurb: 'Car super-app for parking, insurance and washes — compare, then check direct.',
    about: [
      'Way.com bundles the recurring costs of owning a car in the US into one app: airport and city parking, car insurance comparison, car washes, oil changes, refinancing and EV charging. The pitch is that these are all separately annoying and it does them in one place.',
      'The parking side is where most people arrive, and it works the way aggregators work — pre-booked airport parking is genuinely much cheaper than driving up, and the platform’s rate is usually competitive. The insurance side is a comparison tool, and comparison tools show you the panel they have; running one direct quote alongside it costs ten minutes and is worth doing.',
    ],
    offers: [
      {
        id: 'waycom-parking',
        kind: 'deal',
        value: 'Sale',
        title: 'Pre-booked airport parking below drive-up rates',
        detail:
          'The core saving, and a large one. Booking ahead is cheaper than arriving at the barrier, everywhere.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'waycom-firstbooking',
        kind: 'deal',
        value: 'New customer',
        title: 'First-booking discount for new users',
        detail: 'An acquisition offer on a first parking reservation, applied in the app.',
        checked: CHECKED_R2,
      },
      {
        id: 'waycom-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Wash and service subscriptions',
        detail:
          'Monthly plans that price below paying per visit — if you actually go that often. Count first.',
        checked: CHECKED_R2,
      },
      {
        id: 'waycom-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Insurance comparison alongside one direct quote',
        detail:
          'Use the comparison, then get one quote direct from a large insurer. Panels are not the whole market.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Book airport parking before you leave the house',
        body: 'The drive-up rate is the most expensive way to park anywhere. This is the reliable saving here.',
      },
      {
        title: 'Check the shuttle frequency, not just the price',
        body: 'The cheapest lot is sometimes twenty minutes and a wait from the terminal. Read recent reviews.',
      },
      {
        title: 'Treat comparison results as a starting point',
        body: 'Any comparison shows its own panel. One direct quote tells you whether the panel was competitive.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'United States, Canada' },
      { label: 'Covers', value: 'Parking, insurance, washes, servicing, EV charging' },
      { label: 'Best use', value: 'Pre-booked airport parking' },
      { label: 'Caveat', value: 'Insurance results reflect a panel, not the market' },
    ],
    faq: [
      {
        q: 'Is Way.com parking cheaper than the airport lot?',
        a: 'Usually substantially, because pre-booked off-site parking is a different product from driving up to the terminal barrier.',
      },
      {
        q: 'Is the insurance comparison trustworthy?',
        a: 'It shows the insurers on its panel, which is how every comparison works. Take the best result and check one direct quote against it.',
      },
      {
        q: 'Are the wash subscriptions worth it?',
        a: 'Above roughly two visits a month, yes. Below that, pay per wash.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'finn',
    name: 'FINN',
    domain: 'finn.com',
    siteLabel: 'finn.com',
    badge: 'FN',
    color: '#1A1A1A',
    category: 'auto',
    markets: 'Germany',
    blurb: 'Car subscription — one monthly figure covering almost everything.',
    about: [
      'FINN offers car subscriptions in Germany: a fixed monthly payment covering the car, insurance, tax, maintenance, tyres and registration, on terms from a few months upward, with the car delivered to your door.',
      'It sits between leasing and rental, and it is priced accordingly — more per month than a comparable lease, less commitment and no separate insurance to arrange. The comparison that matters is not against a hire car but against leasing plus insurance plus servicing, on the term you actually want. Mileage allowance is the number that decides whether it works.',
    ],
    offers: [
      {
        id: 'finn-term',
        kind: 'deal',
        value: 'Long term',
        title: 'Longer terms at a lower monthly rate',
        detail:
          'The monthly figure falls substantially as the term extends. Six months and twelve are quite different products.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'finn-instock',
        kind: 'deal',
        value: 'Sale',
        title: 'In-stock cars at reduced rates',
        detail:
          'Vehicles already available are priced below build-to-order. If you are flexible on colour and trim, that is the discount.',
        checked: CHECKED_R2,
      },
      {
        id: 'finn-allin',
        kind: 'deal',
        value: 'Bundle',
        title: 'Insurance, tax, servicing and tyres included',
        detail:
          'Not a promotion — the product. Price it against leasing plus those four bought separately, not against a lease alone.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Get the mileage allowance right',
        body: 'Excess mileage charges are where subscriptions become expensive. Estimate honestly and buy the band above it.',
      },
      {
        title: 'Compare against leasing plus insurance',
        body: 'A lease looks cheaper until you add insurance, tax, servicing and tyres. That is the fair comparison.',
      },
      {
        title: 'Take an in-stock car if you can',
        body: 'Flexibility on the exact specification is worth a meaningful monthly reduction.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Germany' },
      { label: 'Model', value: 'All-inclusive car subscription' },
      { label: 'Includes', value: 'Insurance, tax, servicing, tyres, delivery' },
      { label: 'Key number', value: 'Mileage allowance' },
    ],
    faq: [
      {
        q: 'Is a car subscription cheaper than leasing?',
        a: 'Per month, usually no. Once insurance, tax, servicing and tyres are added to the lease, the gap narrows and the shorter commitment may be worth the rest.',
      },
      {
        q: 'What happens if I exceed the mileage?',
        a: 'You pay a per-kilometre excess charge. It is the main way a subscription ends up costing more than expected.',
      },
      {
        q: 'How short can the term be?',
        a: 'From a few months. The shorter the term, the higher the monthly rate — that trade-off is the whole pricing model.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'discovercars',
    name: 'DiscoverCars',
    domain: 'discovercars.com',
    siteLabel: 'discovercars.com',
    badge: 'DC',
    color: '#1F7A5A',
    category: 'auto',
    markets: 'Worldwide',
    blurb: 'Car hire comparison where the excess insurance is the thing to price.',
    about: [
      'DiscoverCars compares car hire across the major companies and a long tail of local suppliers in over a hundred countries, then books you with the supplier. It is a broker, not a hire company, which shapes what can go wrong and who fixes it.',
      'The most consequential decision on the page is the excess insurance. The platform sells its own full-coverage product at a fraction of what the rental desk charges for the equivalent, but it works by reimbursement: you still pay the desk if there is damage, then claim it back. That is a genuine saving and a genuinely different experience from a desk waiver, and knowing which you bought matters.',
    ],
    offers: [
      {
        id: 'discovercars-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare across majors and local suppliers',
        detail:
          'Local suppliers are frequently far cheaper than the international brands for the same car in the same place.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'discovercars-excess',
        kind: 'deal',
        value: 'Protection',
        title: 'Full-coverage excess insurance at a fraction of the desk price',
        detail:
          'Substantially cheaper than the counter waiver, but it reimburses rather than waives — you pay first and claim back.',
        terms: 'Read what is excluded: tyres, glass and underbody are common carve-outs.',
        checked: CHECKED_R2,
      },
      {
        id: 'discovercars-freecancel',
        kind: 'deal',
        value: 'Flexible',
        title: 'Free cancellation on most bookings',
        detail:
          'Book early at a good rate, keep looking, cancel free if something better appears. Costs nothing.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Understand reimbursement versus waiver',
        body: 'Third-party excess insurance is much cheaper and requires you to pay the desk first. If you cannot float the excess on a card, buy the desk product instead.',
      },
      {
        title: 'Read the supplier reviews, not just the price',
        body: 'The cheapest local supplier at an airport is sometimes a long shuttle and a two-hour queue. The ratings are published for a reason.',
      },
      {
        title: 'Book early and cancel free',
        body: 'With free cancellation there is no reason to wait. Lock a rate and keep an eye out.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Comparison broker, not a hire company' },
      { label: 'Coverage', value: '100+ countries, majors plus local suppliers' },
      { label: 'Excess insurance', value: 'Reimbursement-based, much cheaper than the desk' },
      { label: 'Cancellation', value: 'Free on most bookings' },
    ],
    faq: [
      {
        q: 'Is the DiscoverCars excess insurance worth buying?',
        a: 'It is far cheaper than the counter equivalent and it works — but by reimbursement. You must be able to put the excess on a card and claim it back.',
      },
      {
        q: 'Who do I deal with if something goes wrong?',
        a: 'The rental supplier for the car, DiscoverCars for the booking and the insurance claim. Two parties instead of one is the structural trade-off of using a broker.',
      },
      {
        q: 'Are local suppliers safe to book?',
        a: 'Often excellent value, sometimes a long shuttle and a hard sell at the desk. The review scores are the signal — read them before choosing on price.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'qeeq',
    name: 'QEEQ',
    domain: 'qeeq.com',
    siteLabel: 'qeeq.com',
    badge: 'QQ',
    color: '#1F5CB0',
    category: 'auto',
    markets: 'Worldwide',
    blurb: 'Car hire comparison with a points programme and cheap excess cover.',
    about: [
      'QEEQ is a car-rental comparison platform covering the international brands and local suppliers worldwide, booking on their behalf. It competes with the other brokers on price, on its own excess-protection product and on a loyalty scheme that returns points against future rentals.',
      'The mechanics are the same as any broker: the price advantage comes from local suppliers, the excess cover is reimbursement-based rather than a waiver, and the thing that decides whether a cheap booking was a good idea is the supplier’s pickup experience rather than the rate.',
    ],
    offers: [
      {
        id: 'qeeq-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare majors against local suppliers',
        detail: 'The price gap on the same car class is often large in leisure destinations.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'qeeq-points',
        kind: 'deal',
        value: 'Member',
        title: 'Points programme against future rentals',
        detail: 'Accrues on completed bookings and applies as credit later.',
        checked: CHECKED_R2,
      },
      {
        id: 'qeeq-excess',
        kind: 'deal',
        value: 'Protection',
        title: 'Excess protection well below the counter price',
        detail:
          'Reimbursement-based cover. Cheaper than the desk waiver, with a claim process instead of a signature.',
        terms: 'Check the exclusions — tyres, glass and undercarriage are commonly carved out.',
        checked: CHECKED_R2,
      },
      {
        id: 'qeeq-freecancel',
        kind: 'deal',
        value: 'Flexible',
        title: 'Free cancellation on most rates',
        detail: 'Book early, keep looking, cancel at no cost if a better option appears.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check what the excess actually is before insuring it',
        body: 'Some suppliers set excesses in the thousands. That figure, not the rate, decides how much cover you need.',
      },
      {
        title: 'Read the fuel and mileage terms per supplier',
        body: 'Brokers list many suppliers with different policies. The cheap rate sometimes comes with a punitive fuel rule.',
      },
      {
        title: 'Photograph everything at pickup',
        body: 'With a broker booking and third-party insurance, your photographs are the evidence in any claim.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Comparison broker' },
      { label: 'Coverage', value: 'Worldwide, majors and local suppliers' },
      { label: 'Loyalty', value: 'Points against future rentals' },
      { label: 'Excess cover', value: 'Reimbursement-based' },
    ],
    faq: [
      {
        q: 'How does QEEQ compare with DiscoverCars?',
        a: 'Similar model and often similar suppliers. Check both for the same dates — the ranking flips depending on which local suppliers each has contracted.',
      },
      {
        q: 'Is the excess protection the same as the desk waiver?',
        a: 'No. It reimburses you after you pay the supplier, rather than waiving the charge. Much cheaper, more paperwork.',
      },
      {
        q: 'Can I cancel free?',
        a: 'On most rates, yes. It is worth booking early on that basis rather than waiting for a better price.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'economybookings',
    name: 'EconomyBookings',
    domain: 'economybookings.com',
    siteLabel: 'economybookings.com',
    badge: 'EB',
    color: '#1F4E9B',
    category: 'auto',
    markets: 'United States, United Kingdom and Canada for this offer; worldwide inventory',
    blurb: 'Budget car hire broker — read the supplier terms before the price.',
    about: [
      'EconomyBookings is a car-rental broker aggregating suppliers worldwide, competing at the value end. Like every broker it books you with a third-party supplier and steps back; the car, the desk and the deposit are theirs.',
      'At this end of the market the headline rate is genuinely low and the variables are everything else: the security deposit held on your card, the fuel policy, the excess amount and whether the pickup is at the terminal or a shuttle ride away. A cheap booking with a large deposit and an off-site desk is a different product from a slightly dearer one without them.',
    ],
    offers: [
      {
        id: 'economybookings-rates',
        kind: 'deal',
        value: 'Compare',
        title: 'Aggregated budget supplier rates',
        detail: 'Consistently low headline pricing. Take it as the start of the comparison.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'economybookings-excess',
        kind: 'deal',
        value: 'Protection',
        title: 'Full-coverage add-on below counter prices',
        detail:
          'Reimbursement-based cover, much cheaper than the desk. Read what it excludes before relying on it.',
        checked: CHECKED_R2,
      },
      {
        id: 'economybookings-cancel',
        kind: 'deal',
        value: 'Flexible',
        title: 'Free cancellation on qualifying bookings',
        detail: 'Lock a rate early where the terms allow it at no cost.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the deposit before the rate',
        body: 'Budget suppliers hold large deposits on a credit card. If yours cannot take it, the booking fails at the desk.',
      },
      {
        title: 'Confirm terminal or shuttle',
        body: 'Off-airport desks are cheaper and can add an hour each way. That is a real cost on a short trip.',
      },
      {
        title: 'Read the supplier’s own reviews',
        body: 'The broker aggregates good and bad suppliers alike. The ratings are the only warning you get.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Budget car-hire broker' },
      { label: 'Coverage', value: 'Worldwide supplier inventory' },
      { label: 'Watch out for', value: 'Deposit size, fuel policy, off-airport desks' },
      { label: 'Insurance', value: 'Reimbursement-based add-on' },
    ],
    faq: [
      {
        q: 'Why is EconomyBookings so cheap?',
        a: 'It aggregates budget suppliers whose economics depend on deposits, fuel policies and counter upsells. The base rate is real; the total depends on the supplier you pick.',
      },
      {
        q: 'Will I need a credit card?',
        a: 'Almost certainly, for the security deposit. Debit cards are refused by many budget suppliers, and that is the most common failure at pickup.',
      },
      {
        q: 'Who handles a problem with the car?',
        a: 'The supplier. The broker handles the booking and its own insurance product. Two parties, which is the trade-off for the price.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: '7way',
    name: '7way',
    domain: '7way.pl',
    siteLabel: '7way.pl',
    badge: '7W',
    color: '#1F6B4A',
    category: 'auto',
    markets: 'Poland primarily, with some other European markets',
    blurb: 'Polish electric scooter maker — check the road rules before the price.',
    about: [
      '7way manufactures and distributes electric scooters in Poland, across a wide range from commuter models up to high-powered machines. It sells direct, which is where the price advantage over imported brands comes from.',
      'The purchase decision here is not really about the discount. Electric scooter regulations differ by country and, within Poland, by where you intend to ride: power output, top speed and whether a machine is road-legal at all are the questions that decide whether an expensive scooter is usable. Discounting runs through frequent promotions and seasonal campaigns.',
    ],
    offers: [
      {
        id: '7way-promos',
        kind: 'deal',
        value: 'Sale',
        title: 'Frequent promotions across the range',
        detail:
          'The manufacturer runs regular campaigns, deepest at the start and end of the season.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: '7way-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Bundles with helmet, lock and spares',
        detail:
          'The accessories you legally and practically need, cheaper bought with the scooter than after it.',
        checked: CHECKED_R2,
      },
      {
        id: '7way-raty',
        kind: 'deal',
        value: 'Long term',
        title: 'Instalment payment on larger models',
        detail: 'Standard on higher-value machines in the Polish market.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the legal power and speed limits first',
        body: 'A scooter you cannot legally ride where you live is not a bargain at any price. Rules differ between countries and cities.',
      },
      {
        title: 'Budget for the battery',
        body: 'It is the consumable and the most expensive part. Ask about replacement availability and cost before buying.',
      },
      {
        title: 'Buy the safety kit in the bundle',
        body: 'A helmet and a decent lock are not optional purchases. Bundled they cost less.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland primarily' },
      { label: 'Category', value: 'Electric scooters, manufacturer-direct' },
      { label: 'Check first', value: 'Local power, speed and road-use rules' },
      { label: 'Main consumable', value: 'The battery' },
    ],
    faq: [
      {
        q: 'Is an electric scooter road-legal?',
        a: 'That depends on its power and speed and on your country’s rules — and in many places on where exactly you ride it. Check before buying, because the powerful models frequently are not.',
      },
      {
        q: 'How long does the battery last?',
        a: 'A few years of regular use before capacity drops noticeably. Replacement cost and availability are worth asking about at purchase.',
      },
      {
        q: 'When are scooters cheapest?',
        a: 'At the season boundaries — early spring promotions and end-of-season clearance in autumn.',
      },
    ],
    updated: CHECKED_R2,
  },
]
