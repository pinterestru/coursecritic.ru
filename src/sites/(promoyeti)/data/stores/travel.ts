/**
 * Flights, hotels & transport.
 *
 * ⚠️ Working values written from the merchants' public pages; re-check before a
 * campaign. Travel terms — baggage, change fees, cancellation windows — move
 * constantly and are the most complained-about category on the internet, so
 * nothing here should be quoted to a reader without a fresh check.
 * See ../../README.md.
 */
import type { Store } from '../types'

const CHECKED = '2026-08-25'
/** Rounds 2–3 pass, checked a day after the first batch. Two constants
 *  rather than one because re-dating the originals would be a claim we
 *  did not earn — nobody re-read their pages on the later date. */
const CHECKED_R2 = '2026-08-26'

export const travelStores: Store[] = [
  {
    slug: 'trip-com',
    name: 'Trip.com',
    domain: 'trip.com',
    siteLabel: 'trip.com',
    badge: 'TR',
    color: '#1F4FB0',
    category: 'travel',
    markets: 'Worldwide, strongest in Asia-Pacific',
    blurb: 'OTA with a real coupon economy and app-only fares worth installing for.',
    about: [
      'Trip.com is the international arm of Trip.com Group, and one of the few global online travel agencies where coupon codes and in-app pricing are a routine part of how bookings are sold rather than an occasional promotion.',
      'Its catalogue is strongest across Asia-Pacific — hotels in Japan, Korea, Southeast Asia and China, plus trains in several markets — and thinner on European rail and North American domestic. The loyalty programme returns points on stays, and the app carries prices the website does not show. What to watch is the same as at any agency: when a flight changes, you are dealing with the agency, not the airline.',
    ],
    offers: [
      {
        id: 'tripcom-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-only hotel and flight prices',
        detail:
          'A genuine, repeatable discount rather than a marketing line. The same room is frequently cheaper in the app than on the desktop site.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'tripcom-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Coupon centre — collectable codes by route and region',
        detail:
          'Trip.com issues coupons continuously, filtered by destination and booking type. Collect them to your account before searching, not after.',
        checked: CHECKED,
      },
      {
        id: 'tripcom-rewards',
        kind: 'deal',
        value: 'Member',
        title: 'Trip Coins and tiered membership',
        detail:
          'Points on completed stays plus tier benefits like late checkout. Modest per booking, useful if you travel the region regularly.',
        checked: CHECKED,
      },
      {
        id: 'tripcom-flash',
        kind: 'deal',
        value: 'Sale',
        title: 'Flash sales and destination campaigns',
        detail:
          'Time-boxed hotel campaigns, typically 24–72 hours, on specific cities. The discounts are real and the inventory is limited.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Price the same hotel direct before booking',
        body: 'Chains increasingly match or beat OTA pricing for loyalty members, and a direct booking is far easier to change.',
      },
      {
        title: 'Coupons are region-scoped',
        body: 'A coupon collected for Southeast Asia will not apply to a European hotel. Check the scope before you build a plan around one.',
      },
      {
        title: 'Free cancellation is per rate, not per site',
        body: 'The refundable rate costs more for a reason. On uncertain trips it is usually the cheaper choice overall.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'Worldwide; deepest in Asia-Pacific' },
      { label: 'Best channel', value: 'The app' },
      { label: 'Support', value: '24/7, multilingual' },
      { label: 'Watch out for', value: 'Agency-issued tickets on airline schedule changes' },
    ],
    faq: [
      {
        q: 'Are Trip.com coupon codes real?',
        a: 'Yes. Unlike most Western agencies, Trip.com runs a standing coupon centre and app-exclusive pricing. Codes found elsewhere are usually stale; the ones in your own account are the ones that work.',
      },
      {
        q: 'What happens if my flight is cancelled?',
        a: 'You deal with Trip.com, not the airline, because the agency issued the ticket. That is slower than dealing direct and it is the main trade-off for the price.',
      },
      {
        q: 'Is the app really cheaper?',
        a: 'Frequently, on hotels especially. It is a deliberate acquisition strategy rather than a coincidence.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'etihad',
    name: 'Etihad Airways',
    domain: 'etihad.com',
    siteLabel: 'etihad.com',
    badge: 'EY',
    color: '#8A6A2F',
    category: 'travel',
    markets: 'Worldwide, hubbed in Abu Dhabi',
    blurb: 'Gulf carrier where the stopover programme is worth more than any code.',
    about: [
      'Etihad is the UAE’s Abu Dhabi-based flag carrier, running a hub-and-spoke network that connects Europe and the Americas with South Asia, Southeast Asia and Australia.',
      'Airlines do not discount by coupon in any meaningful way. What Etihad does run is a set of programmes that reduce the effective cost of a trip: a stopover offer that includes hotel nights in Abu Dhabi on qualifying connections, fare sales several times a year, a bid-to-upgrade system, and a loyalty programme with reasonable partner reach. The stopover is the standout because it converts a layover into accommodation you would otherwise buy.',
    ],
    offers: [
      {
        id: 'etihad-stopover',
        kind: 'deal',
        value: 'Long term',
        title: 'Abu Dhabi stopover with included hotel nights',
        detail:
          'On qualifying connecting itineraries the airline includes hotel nights in Abu Dhabi. Conditions apply and change; read the current terms, because "free" is doing work in most descriptions of this.',
        terms: 'Eligibility depends on the fare, the route and the length of the connection.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'etihad-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled fare sales',
        detail:
          'Several route-wide sales a year, applied to the fare directly. This is what an airline discount looks like — a price, not a code.',
        checked: CHECKED,
      },
      {
        id: 'etihad-upgrade',
        kind: 'deal',
        value: 'Deal',
        title: 'Bid for an upgrade after booking',
        detail:
          'The bidding system routinely clears below the published upgrade fare. Bid low on a lightly loaded flight.',
        checked: CHECKED,
      },
      {
        id: 'etihad-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme with partner earning',
        detail:
          'Miles on Etihad and partners, redeemable for flights and upgrades. Worth joining before your first flight, not after.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Book the bag with the ticket',
        body: 'Extra baggage bought at the airport costs multiples of what it costs at booking. This is the most common avoidable airline expense.',
      },
      {
        title: 'Check the fare family, not the price',
        body: 'The cheapest fare usually excludes changes, seat selection and sometimes checked bags. Price the trip you will actually take.',
      },
      {
        title: 'Currency of purchase matters',
        body: 'Airline pricing differs by point of sale. Where the site lets you choose, it is worth a comparison.',
      },
    ],
    facts: [
      { label: 'Hub', value: 'Abu Dhabi' },
      { label: 'Coupon codes', value: 'Not how airlines discount' },
      { label: 'Standout programme', value: 'Stopover with hotel nights' },
      { label: 'Upgrades', value: 'Bid system, often below published fares' },
    ],
    faq: [
      {
        q: 'Is there an Etihad promo code?',
        a: 'Not in the coupon-site sense. Airlines discount by running a fare sale, and the sale price applies without a code. Occasional partner codes exist but are small and conditional.',
      },
      {
        q: 'Is the Abu Dhabi stopover actually free?',
        a: 'It is heavily subsidised and includes hotel nights on qualifying itineraries, but it has conditions attached and the details change. Read the current terms rather than trusting a blog post — including this one.',
      },
      {
        q: 'When is the cheapest time to book?',
        a: 'During the airline’s own sale windows, and — as with most long-haul carriers — several months out rather than at the last minute.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'makemytrip',
    name: 'MakeMyTrip',
    domain: 'makemytrip.com',
    siteLabel: 'makemytrip.com',
    badge: 'MMT',
    color: '#B03A1A',
    category: 'travel',
    markets: 'India primarily, with international bookings for Indian travellers',
    blurb: 'India’s largest OTA, and a genuine coupon-and-bank-offer machine.',
    about: [
      'MakeMyTrip is the largest online travel agency in India, covering flights, hotels, trains, buses and holiday packages. Its audience is Indian travellers booking both domestically and internationally.',
      'It is one of the most coupon-driven travel businesses anywhere. Codes are issued continuously, bank-card instant discounts apply at payment, a wallet accumulates credit against future bookings, and the app carries its own pricing. Stacking a code with a bank offer is normal here rather than exceptional, which makes it worth a couple of minutes before paying.',
    ],
    offers: [
      {
        id: 'mmt-codes',
        kind: 'deal',
        value: 'Coupons',
        title: 'Continuous coupon codes by product and route',
        detail:
          'Flight, hotel and bus coupons are issued and refreshed constantly, and are listed on the booking page itself rather than hidden.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'mmt-bank',
        kind: 'deal',
        value: 'Coupons',
        title: 'Bank card instant discounts at payment',
        detail:
          'Issuer-specific reductions applied after the coupon, capped per transaction. The stack of the two is the real price.',
        checked: CHECKED,
      },
      {
        id: 'mmt-wallet',
        kind: 'deal',
        value: 'Coupons',
        title: 'Wallet credit against future bookings',
        detail:
          'Cashback accrues as wallet balance rather than money back. Useful if you book here regularly; discount it if you do not.',
        checked: CHECKED,
      },
      {
        id: 'mmt-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-only fares and coupons',
        detail: 'A share of the promotional inventory is app-exclusive, as at most Indian OTAs.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Apply the coupon, then check the bank offer',
        body: 'They apply at different stages. People take the first discount and pay before reaching the second.',
      },
      {
        title: 'Compare against the airline direct',
        body: 'On domestic Indian routes the airline’s own site is sometimes cheaper after its own promotions, and much easier when a schedule changes.',
      },
      {
        title: 'Read what "free cancellation" covers',
        body: 'Agency cancellation protection is a paid add-on with its own rules, and it is not the same as the airline’s refund policy.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Products', value: 'Flights, hotels, trains, buses, packages' },
      { label: 'Pricing', value: 'Coupons plus bank offers, stacked' },
      { label: 'Watch out for', value: 'Wallet cashback is credit, not cash' },
    ],
    faq: [
      {
        q: 'Do MakeMyTrip coupons stack with bank offers?',
        a: 'Usually yes — the coupon applies to the fare and the bank discount at payment. That combination is the normal way to book here.',
      },
      {
        q: 'Is the wallet cashback worth anything?',
        a: 'Only if you book through MakeMyTrip again. It is credit with an expiry, not a refund.',
      },
      {
        q: 'Should I book flights here or direct?',
        a: 'Compare both. The agency often wins on price after stacking; the airline always wins on handling a schedule change.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'abhibus',
    name: 'AbhiBus',
    domain: 'abhibus.com',
    siteLabel: 'abhibus.com',
    badge: 'AB',
    color: '#B0472A',
    category: 'travel',
    markets: 'India only',
    blurb: 'Bus and train ticketing where the coupon is a real, if small, saving.',
    about: [
      'AbhiBus sells intercity bus tickets across India, plus train and some flight bookings, working with state transport corporations and private operators.',
      'Bus tickets are low-value and high-frequency, which shapes the discounting: small percentage codes with low caps, wallet cashback, and first-booking offers. None of them is large in absolute terms, but on a route you take monthly they add up, and unlike in most travel categories the codes here genuinely apply.',
    ],
    offers: [
      {
        id: 'abhibus-firstbooking',
        kind: 'deal',
        value: 'New customer',
        title: 'First-booking discount for new users',
        detail: 'A capped percentage on a first ticket, applied at checkout.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'abhibus-wallet',
        kind: 'deal',
        value: 'Coupons',
        title: 'Wallet cashback on completed journeys',
        detail:
          'Credit against future bookings rather than a refund. It compounds on a regular route.',
        checked: CHECKED,
      },
      {
        id: 'abhibus-bank',
        kind: 'deal',
        value: 'Deal',
        title: 'Bank and UPI payment offers',
        detail: 'Small instant discounts by payment method, rotated frequently.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compare the state corporation’s own site',
        body: 'For government bus services the operator’s own booking channel sometimes avoids the agency fee entirely.',
      },
      {
        title: 'Book early on festival routes',
        body: 'Indian intercity bus pricing is demand-driven and rises steeply around festivals. The date matters far more than the code.',
      },
      {
        title: 'Check the boarding point, not just the city',
        body: 'A cheap ticket from an inconvenient boarding point costs you an auto fare and an hour. Price the whole journey.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Products', value: 'Bus, train and some flight tickets' },
      { label: 'Cancellation', value: 'Operator-dependent, with a fee scale by time' },
      { label: 'Ticket value', value: 'Low — discounts are capped accordingly' },
    ],
    faq: [
      {
        q: 'Do AbhiBus coupons work?',
        a: 'Yes, and they apply straightforwardly. The caps are low because the tickets are cheap, so expect a small absolute saving.',
      },
      {
        q: 'Can I cancel a bus ticket?',
        a: 'Usually, on a sliding fee scale set by the operator rather than by AbhiBus. The nearer to departure, the less you get back.',
      },
      {
        q: 'Is it available outside India?',
        a: 'No. Domestic Indian transport only.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'cheapoair',
    name: 'CheapOair',
    domain: 'cheapoair.com',
    siteLabel: 'cheapoair.com',
    badge: 'CO',
    color: '#1F5FA8',
    category: 'travel',
    markets: 'United States, Canada and Mexico',
    blurb: 'US flight agency where codes are real but capped, and fees are the catch.',
    about: [
      'CheapOair is a US-based online travel agency selling flights, hotels and cars, aimed at price-led travellers and heavily focused on international routes out of North America.',
      'Unlike most agencies it does issue promo codes routinely, and they work — but they are capped at a fixed dollar amount per passenger, so the percentage advertised is not the percentage you get on an expensive ticket. The other thing to price in is the booking fee, which the agency charges on top of the fare and which the code does not touch.',
    ],
    offers: [
      {
        id: 'cheapoair-codes',
        kind: 'deal',
        value: 'Coupons',
        title: 'Promo codes with a per-passenger cap',
        detail:
          'Real, frequently issued, and capped. On a cheap domestic ticket the cap barely binds; on a long-haul fare it is a small percentage.',
        terms: 'Applies to the base fare and is limited to a maximum dollar amount per passenger.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'cheapoair-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive fares and larger app codes',
        detail: 'The mobile app carries its own, usually larger, code inventory.',
        checked: CHECKED,
      },
      {
        id: 'cheapoair-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Flight-plus-hotel bundle pricing',
        detail:
          'Packaging can beat the two booked separately, because the hotel side is opaque-priced. Compare both before committing.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compare the all-in total, including the booking fee',
        body: 'The agency fee is added after the code. Against the airline’s own site, the fee sometimes cancels the discount.',
      },
      {
        title: 'Never book a tight connection through an agency',
        body: 'Self-transfer and separate tickets are where agency bookings turn painful. Pay for a protected itinerary.',
      },
      {
        title: 'Check the 24-hour rule',
        body: 'For flights touching the US, the free-cancellation window is a legal right in most cases. Use it to hold a fare while you check direct.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, Canada, Mexico' },
      { label: 'Codes', value: 'Real, capped per passenger' },
      { label: 'Fees', value: 'A booking fee is added on top of the fare' },
      { label: 'Support', value: 'Phone-first; the agency owns the ticket' },
    ],
    faq: [
      {
        q: 'Do CheapOair promo codes work?',
        a: 'Yes, and that is unusual for a flight agency. Read the cap: an advertised percentage is limited to a fixed amount per passenger.',
      },
      {
        q: 'Are there hidden fees?',
        a: 'Not hidden, but there is a booking fee added to the fare. Compare the final total against the airline before you decide the code saved you money.',
      },
      {
        q: 'What if the airline changes my flight?',
        a: 'You go through CheapOair, not the airline. That is slower, and it is the structural cost of booking through any agency.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'onetravel',
    name: 'OneTravel',
    domain: 'onetravel.com',
    siteLabel: 'onetravel.com',
    badge: 'OT',
    color: '#1E4E7C',
    category: 'travel',
    markets: 'United States and Canada',
    blurb: 'Sister agency to CheapOair, with the same mechanics and a different code pool.',
    about: [
      'OneTravel is a US and Canadian flight agency operating under the same group as CheapOair. The inventory, the interface and the fee structure are close cousins, and the two are worth checking against each other on the same route.',
      'The discounting model is identical: capped promo codes on the base fare, app-exclusive inventory, and package bundling. Because they run separate code pools, the same trip can be a few dollars cheaper on one than on the other on any given day.',
    ],
    offers: [
      {
        id: 'onetravel-codes',
        kind: 'deal',
        value: 'Coupons',
        title: 'Capped promo codes on the base fare',
        detail: 'Frequently issued and genuinely applied, subject to a per-passenger maximum.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'onetravel-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-only fares',
        detail: 'A separate, usually more generous, code pool inside the mobile app.',
        checked: CHECKED,
      },
      {
        id: 'onetravel-bundles',
        kind: 'deal',
        value: 'Bundle',
        title: 'Flight and hotel packages',
        detail: 'Opaque hotel pricing in a bundle can beat the two booked separately.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check both group sites',
        body: 'OneTravel and CheapOair run separate promotions on the same inventory. It is a thirty-second comparison.',
      },
      {
        title: 'The fee is not covered by the code',
        body: 'Compare the final total, not the discounted fare.',
      },
      {
        title: 'Use the 24-hour cancellation right',
        body: 'On US itineraries it lets you lock a price and verify it against the airline before committing.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'US, Canada' },
      { label: 'Group', value: 'Same operator as CheapOair' },
      { label: 'Codes', value: 'Capped per passenger' },
      { label: 'Fees', value: 'Booking fee added to the fare' },
    ],
    faq: [
      {
        q: 'Is OneTravel the same as CheapOair?',
        a: 'Same group, separate brands, separate promotions. Worth comparing both for the same route because the codes differ.',
      },
      {
        q: 'Why is the total higher than the advertised fare?',
        a: 'The agency booking fee and taxes are added after the fare, and the promo code applies to the base fare only.',
      },
      {
        q: 'Can I change a ticket booked here?',
        a: 'Through the agency, subject to the airline’s rules plus the agency’s own change fee. Direct bookings are simpler when plans move.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'kiwi-com',
    name: 'Kiwi.com',
    domain: 'kiwi.com',
    siteLabel: 'kiwi.com',
    badge: 'KW',
    color: '#1E7A4A',
    category: 'travel',
    markets: 'Worldwide, strongest in Europe',
    blurb: 'Virtual-interlining agency: cheap routes, and a guarantee you should understand.',
    about: [
      'Kiwi.com builds itineraries by combining flights from airlines that have no agreement with each other — "virtual interlining". That is why it finds routes nobody else shows, and why the routes are cheap.',
      'It is also why the Kiwi Guarantee exists. Because the carriers are not connected, a delay on the first leg does not obligate the second airline to do anything; Kiwi’s paid guarantee steps in instead. Booking a self-transfer itinerary without it is the single biggest risk in budget flying, and the guarantee is not free. Price the trip with it included, because that is the trip you want.',
    ],
    offers: [
      {
        id: 'kiwi-nomad',
        kind: 'deal',
        value: 'Deal',
        title: 'Multi-city and Nomad search for cheaper routings',
        detail:
          'The tool that justifies the site: it reorders a multi-stop trip to find the cheapest sequence, which no airline site will do.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'kiwi-deals',
        kind: 'deal',
        value: 'Sale',
        title: 'Deals section and price alerts',
        detail:
          'Route-level price alerts are more useful here than a code, because the saving comes from flexibility on dates.',
        checked: CHECKED,
      },
      {
        id: 'kiwi-guarantee',
        kind: 'deal',
        value: 'Protection',
        title: 'Kiwi Guarantee on self-transfer itineraries',
        detail:
          'A paid protection that rebooks you when a missed connection is caused by a delay. Not a discount — the thing that stops the discount becoming a disaster.',
        terms:
          'An added cost at checkout; declining it leaves you with no protection between carriers.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Always price the baggage',
        body: 'Virtual interlining often mixes carriers with different baggage rules. The cheap fare can carry two separate bag charges.',
      },
      {
        title: 'Leave real time between legs',
        body: 'Self-transfer means clearing immigration and rechecking bags. A two-hour connection that looks fine on paper is not.',
      },
      {
        title: 'Cross-check the same route as separate tickets',
        body: 'Sometimes booking the two legs yourself is cheaper. Then you own the risk knowingly.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Virtual interlining — combined unaffiliated carriers' },
      { label: 'Protection', value: 'Kiwi Guarantee, paid' },
      { label: 'Coverage', value: 'Worldwide, deepest in Europe' },
      { label: 'Main risk', value: 'Self-transfer connections' },
    ],
    faq: [
      {
        q: 'Is Kiwi.com safe to book with?',
        a: 'The tickets are real. The risk is structural: on a self-transfer itinerary, no airline is responsible for your onward leg. Take the guarantee or do not book the connection.',
      },
      {
        q: 'Are there Kiwi.com promo codes?',
        a: 'Occasionally, and small. The saving on this site comes from the routing engine and date flexibility, not from codes.',
      },
      {
        q: 'What happens if I miss my connection?',
        a: 'With the guarantee, Kiwi rebooks you or refunds. Without it, you have bought two unrelated tickets and the second airline owes you nothing.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'gotogate',
    name: 'Gotogate',
    domain: 'gotogate.com',
    siteLabel: 'gotogate.com',
    badge: 'GG',
    color: '#1F3F7A',
    category: 'travel',
    markets: 'Worldwide, with country storefronts across Europe and beyond',
    blurb: 'Low-headline flight agency where the add-ons decide the total.',
    about: [
      'Gotogate is a global flight agency operating country storefronts in dozens of markets. It regularly appears at or near the top of price comparisons, which is the point.',
      'The business model is a low base fare plus a long series of optional extras: seat selection, baggage, flexible-ticket options, service packages and payment-method fees. The headline is genuine and so are the extras, and the total after them is often close to the airline’s own price. Price the whole basket before deciding this is the cheap option.',
    ],
    offers: [
      {
        id: 'gotogate-basefare',
        kind: 'deal',
        value: 'Deal',
        title: 'Low base fares on the search page',
        detail:
          'Consistently competitive on the headline. Take it as the start of the calculation, not the end.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'gotogate-payment',
        kind: 'deal',
        value: 'No fee',
        title: 'Choose the payment method with no surcharge',
        detail:
          'Card fees vary by method and market and are added at the last step. Picking the free one is a real saving.',
        checked: CHECKED,
      },
      {
        id: 'gotogate-decline',
        kind: 'deal',
        value: 'Bundle',
        title: 'Decline the service packages you do not need',
        detail:
          'Flexible-ticket and priority-support add-ons are opt-out in places. Reading the checkout carefully is the discount here.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Read every checkout step',
        body: 'This is a checkout designed to add. Nothing dishonest happens, but the defaults are not in your favour.',
      },
      {
        title: 'Compare the final total with the airline',
        body: 'Once bags and seats are added, the gap frequently closes. The airline is easier when something goes wrong.',
      },
      {
        title: 'Screenshot everything',
        body: 'Agency disputes are won with the confirmation page. Keep it.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Flight agency with extensive paid add-ons' },
      { label: 'Coverage', value: 'Worldwide via country storefronts' },
      { label: 'Fees', value: 'Payment-method and service fees at checkout' },
      { label: 'Support', value: 'Agency-owned ticket; contact them, not the airline' },
    ],
    faq: [
      {
        q: 'Why is Gotogate cheaper on the search page?',
        a: 'Because the fare excludes things that are bundled elsewhere. Add your bag and your seat and compare again — that is the honest comparison.',
      },
      {
        q: 'Are there Gotogate promo codes?',
        a: 'Rarely and marginally. The variable that moves your total here is which add-ons you accept.',
      },
      {
        q: 'Who do I contact if my flight changes?',
        a: 'Gotogate, because the agency issued the ticket. Budget more time for that than you would for an airline call.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'airalo',
    name: 'Airalo',
    domain: 'airalo.com',
    siteLabel: 'airalo.com',
    badge: 'AI',
    color: '#1F3A6B',
    category: 'travel',
    markets: 'Worldwide — eSIM data in 200+ countries and regions',
    blurb: 'Travel eSIMs where regional bundles, not codes, cut the per-gigabyte price.',
    about: [
      'Airalo sells prepaid eSIM data plans for travellers: you buy a country, regional or global package in the app, install it before you fly, and land with data. It is the largest of the travel eSIM providers by country coverage.',
      'The pricing lever is not the coupon — although a first-order code exists and works — it is choosing the right package shape. A regional plan across a multi-country trip is usually far cheaper per gigabyte than three country plans, and the largest data tier in any plan is always the cheapest per gigabyte. Loyalty credits accumulate on top.',
    ],
    offers: [
      {
        id: 'airalo-first',
        kind: 'deal',
        value: 'App only',
        title: 'First-purchase discount for new accounts',
        detail: 'A standing welcome offer, applied in the app at checkout.',
        checked: CHECKED,
      },
      {
        id: 'airalo-regional',
        kind: 'deal',
        value: 'Bundle',
        title: 'Regional and global bundles instead of country plans',
        detail:
          'On a multi-country trip a regional package is normally cheaper per gigabyte than buying each country separately, and it removes the need to switch.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'airalo-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty credits on purchases',
        detail: 'Credits accrue and apply against later top-ups. Useful for frequent travellers.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Install before you fly',
        body: 'You need internet to install an eSIM. Doing it at the destination airport is the classic mistake.',
      },
      {
        title: 'Check your phone actually supports eSIM',
        body: 'Most recent flagships do, plenty of mid-range and region-locked models do not. Check before buying.',
      },
      {
        title: 'Data-only means data-only',
        body: 'Most plans carry no phone number. If you need SMS for two-factor authentication, keep your home SIM active alongside.',
      },
    ],
    facts: [
      { label: 'Coverage', value: '200+ countries and regions' },
      { label: 'Type', value: 'Prepaid data eSIM, no contract' },
      { label: 'Requirement', value: 'An eSIM-capable, carrier-unlocked phone' },
      { label: 'Caveat', value: 'Most plans are data-only, without a number' },
    ],
    faq: [
      {
        q: 'Is Airalo cheaper than roaming?',
        a: 'Almost always, unless your home plan includes free roaming where you are going. Check your own plan first — some European and US carriers now include it.',
      },
      {
        q: 'Do Airalo promo codes work?',
        a: 'The first-purchase code does, and referral credits do. Beyond that, choosing a regional bundle saves more than any code.',
      },
      {
        q: 'Can I keep my normal number?',
        a: 'Yes — the eSIM runs alongside your physical SIM, so calls and SMS to your usual number still arrive as long as you leave it enabled.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'traveloka',
    name: 'Traveloka',
    domain: 'traveloka.com',
    siteLabel: 'traveloka.com',
    badge: 'TV',
    color: '#1F5CE0',
    category: 'travel',
    markets: 'Worldwide, dominant across Southeast Asia',
    blurb: 'Southeast Asia’s travel app, and a genuine coupon economy.',
    about: [
      'Traveloka is the leading online travel platform across Southeast Asia — flights, hotels, trains, buses, airport transfers and attraction tickets, with by far its deepest inventory in Indonesia, Thailand, Malaysia, Vietnam, Singapore and the Philippines.',
      'It is one of the travel platforms where coupons genuinely are the pricing mechanic rather than a decoration. Codes are issued continuously by market and product, the app carries its own inventory, and local payment-method promotions layer on top. On regional hotels and domestic flights it is frequently cheaper than the global agencies simply because it holds the supply.',
    ],
    offers: [
      {
        id: 'traveloka-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Continuous coupon codes by market and product',
        detail:
          'Issued constantly and listed in the app rather than hidden. Collect before you search, not after.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'traveloka-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive prices and promotions',
        detail: 'A share of the inventory and most of the promotional activity is app-first.',
        checked: CHECKED_R2,
      },
      {
        id: 'traveloka-payment',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Local payment-method and card promotions',
        detail:
          'Bank and e-wallet promotions across Southeast Asian markets, applied at the payment step.',
        checked: CHECKED_R2,
      },
      {
        id: 'traveloka-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Flight-plus-hotel packages',
        detail: 'Packaged pricing that frequently beats booking the two separately in the region.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Coupons are market-specific',
        body: 'A code issued for Indonesia will not clear on a Thai booking. Use the coupon page in your own market.',
      },
      {
        title: 'Strongest inside Southeast Asia',
        body: 'For an intra-regional trip it usually wins. For a European hotel, the global agencies hold more supply.',
      },
      {
        title: 'Check the airline direct on domestic routes',
        body: 'Low-cost carriers in the region sell cheaply on their own sites and are easier when a schedule changes.',
      },
    ],
    facts: [
      { label: 'Strength', value: 'Southeast Asia — flights, hotels, rail, bus, attractions' },
      { label: 'Coupons', value: 'Continuous and market-specific' },
      { label: 'Best channel', value: 'The app' },
      { label: 'Payments', value: 'Local methods with their own promotions' },
    ],
    faq: [
      {
        q: 'Do Traveloka promo codes work?',
        a: 'Yes — this is one of the travel platforms where coupons are a core mechanic. They are market-specific, so use the coupon page for the country you are booking in.',
      },
      {
        q: 'Is it cheaper than the global agencies?',
        a: 'Inside Southeast Asia, frequently. Outside it, usually not — the supply advantage is regional.',
      },
      {
        q: 'What happens if my flight changes?',
        a: 'You deal with Traveloka rather than the airline, as with any agency booking. Budget more time for that than a direct booking.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'cleartrip',
    name: 'Cleartrip',
    domain: 'cleartrip.com',
    siteLabel: 'cleartrip.com',
    badge: 'CT',
    color: '#F47B20',
    category: 'travel',
    markets: 'India only',
    blurb: 'Indian OTA owned by Flipkart — coupons plus bank offers, stacked.',
    about: [
      'Cleartrip is an Indian online travel agency covering flights, hotels, trains and buses, owned by Flipkart. It competes with MakeMyTrip and the airline direct channels on a market where price transparency is fierce.',
      'The mechanics are the Indian standard and they stack: continuous coupon codes, bank-card instant discounts at payment, and a cashback wallet. Being inside the Flipkart group, it also runs promotions tied to the group’s own sale events and payment products, which is where the deeper discounts appear.',
    ],
    offers: [
      {
        id: 'cleartrip-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Continuous coupon codes on flights and hotels',
        detail: 'Listed on the booking page and refreshed constantly.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'cleartrip-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Instant bank discounts at payment',
        detail: 'Issuer offers applied after the coupon, capped per transaction.',
        checked: CHECKED_R2,
      },
      {
        id: 'cleartrip-group',
        kind: 'deal',
        value: 'Sale',
        title: 'Group sale events and payment-product promotions',
        detail: 'Tied to the Flipkart group calendar, which is where the deeper cuts appear.',
        checked: CHECKED_R2,
      },
      {
        id: 'cleartrip-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-exclusive fares and codes',
        detail: 'A share of the promotional inventory is app-only, as at every Indian OTA.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Apply the coupon, then look at the payment page',
        body: 'They apply at different steps and both usually count. Most people stop after the first.',
      },
      {
        title: 'Compare against the airline direct',
        body: 'On Indian domestic routes the carrier’s own site is sometimes cheaper and always easier when plans change.',
      },
      {
        title: 'Read what the cancellation add-on actually covers',
        body: 'Agency flexibility products are paid extras with their own rules, separate from the airline’s policy.',
      },
    ],
    facts: [
      { label: 'Market', value: 'India' },
      { label: 'Owner', value: 'Flipkart' },
      { label: 'Products', value: 'Flights, hotels, trains, buses' },
      { label: 'Pricing', value: 'Coupons plus bank offers, stacked' },
    ],
    faq: [
      {
        q: 'Do Cleartrip coupons stack with bank offers?',
        a: 'Usually yes — the coupon applies to the fare and the bank discount at payment. That combination is the normal way to book.',
      },
      {
        q: 'Is it cheaper than MakeMyTrip?',
        a: 'Neither consistently. Check both plus the airline for a specific route — the ranking changes with whichever promotion is running.',
      },
      {
        q: 'Who handles a cancellation?',
        a: 'Cleartrip, because the agency issued the ticket. That is slower than dealing with the airline directly.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'malaysia-airlines',
    name: 'Malaysia Airlines',
    domain: 'malaysiaairlines.com',
    siteLabel: 'malaysiaairlines.com',
    badge: 'MH',
    color: '#005BAC',
    category: 'travel',
    markets: 'Malaysia, Australia, UK, India and other markets on the network',
    blurb: 'Kuala Lumpur’s flag carrier — fare sales and the loyalty programme, not codes.',
    about: [
      'Malaysia Airlines is the national carrier, hubbed at Kuala Lumpur, connecting Southeast Asia with Australia, South Asia, Northeast Asia and a small long-haul network to Europe. It is a Oneworld member, which matters for earning and redeeming miles.',
      'Airlines do not discount by coupon in any meaningful way. What this one runs is scheduled fare sales several times a year, a loyalty programme with reasonable partner reach, and periodic companion and stopover promotions. Booking direct rather than through an agency also matters more here than on a short-haul hop: when a long-haul schedule changes, dealing with the airline is materially easier.',
    ],
    offers: [
      {
        id: 'malaysiaairlines-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Scheduled fare sales across the network',
        detail:
          'Several route-wide sales a year, applied to the fare directly. This is what an airline discount looks like.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'malaysiaairlines-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme with Oneworld earning',
        detail:
          'Miles on this airline and its alliance partners. Join before your first flight, not after it.',
        checked: CHECKED_R2,
      },
      {
        id: 'malaysiaairlines-bags',
        kind: 'deal',
        value: 'Bundle',
        title: 'Buy baggage with the ticket, not at the airport',
        detail:
          'Excess baggage bought at the counter costs multiples of the same allowance added at booking.',
        checked: CHECKED_R2,
      },
      {
        id: 'malaysiaairlines-fare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare fare families before the price',
        detail:
          'The cheapest fare typically excludes changes, seat selection and sometimes bags. Price the trip you will take.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Book direct on long-haul',
        body: 'When a schedule changes across a fifteen-hour itinerary, dealing with the airline instead of an agency is worth real money in time and stress.',
      },
      {
        title: 'Add baggage at booking',
        body: 'The single most common avoidable airline cost, on every carrier.',
      },
      {
        title: 'Check the point of sale',
        body: 'Airline pricing varies by the country you buy in. Where the site lets you choose, it is worth comparing.',
      },
    ],
    facts: [
      { label: 'Hub', value: 'Kuala Lumpur' },
      { label: 'Alliance', value: 'Oneworld' },
      { label: 'Promo codes', value: 'Not how airlines discount' },
      { label: 'Discount lever', value: 'Scheduled fare sales' },
    ],
    faq: [
      {
        q: 'Is there a Malaysia Airlines promo code?',
        a: 'Not in the coupon sense. Airlines discount by running a fare sale, and the sale price applies without anything typed in.',
      },
      {
        q: 'Should I book direct or through an agency?',
        a: 'Direct, unless an agency is meaningfully cheaper. On long-haul, changes and disruptions are far easier to resolve with the airline.',
      },
      {
        q: 'When are the fare sales?',
        a: 'Several times a year on a published basis, and typically for travel some months ahead rather than immediately.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'flynas',
    name: 'flynas',
    domain: 'flynas.com',
    siteLabel: 'flynas.com',
    badge: 'XY',
    color: '#00A5A8',
    category: 'travel',
    markets: 'Saudi Arabia and the wider Gulf, plus international routes',
    blurb: 'Saudi low-cost carrier — the fare is the start, the extras are the total.',
    about: [
      'flynas is Saudi Arabia’s low-cost airline, flying domestic Saudi routes and out across the Gulf, the Middle East, South Asia and to selected European and North African destinations, plus a large seasonal Hajj and Umrah operation.',
      'It prices like a low-cost carrier, which means the headline fare buys a seat and very little else. Baggage, seat selection and meals are priced separately, and the total for a trip with a suitcase can be double the advertised number. Fare sales are frequent and real; the discipline is pricing the trip with the extras you will actually need before comparing against a full-service carrier.',
    ],
    offers: [
      {
        id: 'flynas-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Frequent fare sales across the network',
        detail: 'Low-cost carriers run promotions constantly, especially on lower-demand dates.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'flynas-bags',
        kind: 'deal',
        value: 'Bundle',
        title: 'Add baggage at booking, never at the airport',
        detail:
          'Airport baggage charges on low-cost carriers are punitive by design. Adding it at booking is a fraction of the price.',
        checked: CHECKED_R2,
      },
      {
        id: 'flynas-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme on a network people fly repeatedly',
        detail: 'Worth joining if you fly Saudi domestic routes with any regularity.',
        checked: CHECKED_R2,
      },
      {
        id: 'flynas-bundle',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare the fare bundles, not the base fare',
        detail:
          'The bundled fares including bag and seat are frequently cheaper than adding the same items individually.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Price the trip you will actually take',
        body: 'With a checked bag and a seat, the cheapest fare is often not the cheapest total. Compare bundles.',
      },
      {
        title: 'Never pay for baggage at the airport',
        body: 'It is the most expensive way to carry anything, on every low-cost airline in the world.',
      },
      {
        title: 'Weigh the bag at home',
        body: 'Excess weight charges at a Gulf airport are steep and non-negotiable.',
      },
    ],
    facts: [
      { label: 'Base', value: 'Saudi Arabia' },
      { label: 'Model', value: 'Low-cost — extras priced separately' },
      { label: 'Network', value: 'Gulf, Middle East, South Asia, selected Europe' },
      { label: 'Biggest avoidable cost', value: 'Airport baggage charges' },
    ],
    faq: [
      {
        q: 'Are there flynas promo codes?',
        a: 'Fare sales rather than codes are how low-cost carriers discount, and they are frequent. The advertised sale price needs nothing typed in.',
      },
      {
        q: 'Is baggage included?',
        a: 'Not on the cheapest fares. Add it at booking — the airport price is a multiple of it.',
      },
      {
        q: 'Should I buy the bundle fare?',
        a: 'If you need a bag and a seat, usually yes. The bundle is priced below the same items added individually.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'air-india-express',
    name: 'Air India Express',
    domain: 'airindiaexpress.com',
    siteLabel: 'airindiaexpress.com',
    badge: 'IX',
    color: '#B0161E',
    category: 'travel',
    markets: 'India, with routes across the Gulf and Southeast Asia',
    blurb: 'India’s low-cost arm — book direct, add the bag, watch the fare family.',
    about: [
      'Air India Express is the low-cost subsidiary of Air India, flying domestic Indian routes and short-haul international services, especially the heavily travelled Gulf corridors. It has been integrated with the group’s other low-cost operation, so fleet and network have changed considerably in recent years.',
      'Pricing follows low-cost convention: a lean base fare with baggage, seats and meals sold separately, plus bundled fare families that include them at a lower combined price. On the Gulf routes, where passengers routinely travel with substantial baggage, the baggage decision at booking is usually worth more than the fare difference between carriers.',
    ],
    offers: [
      {
        id: 'airindiaexpress-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring fare sales on domestic and Gulf routes',
        detail: 'Frequent promotions, typically for travel some weeks or months ahead.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'airindiaexpress-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Fare bundles including baggage and seat',
        detail:
          'On routes where people travel heavy, the bundle is normally cheaper than adding the same allowance later.',
        checked: CHECKED_R2,
      },
      {
        id: 'airindiaexpress-direct',
        kind: 'deal',
        value: 'Compare',
        title: 'Book direct rather than through an agency',
        detail:
          'Changes and disruptions are handled by whoever issued the ticket. On a low-cost carrier that difference is stark.',
        checked: CHECKED_R2,
      },
      {
        id: 'airindiaexpress-bank',
        kind: 'deal',
        value: 'Bank offer',
        title: 'Card and payment offers at checkout',
        detail: 'Indian issuer promotions apply on airline sites as they do everywhere else.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy the baggage allowance you need at booking',
        body: 'On Gulf routes especially. Airport excess charges are the largest avoidable cost in this market.',
      },
      {
        title: 'Compare the total against the full-service carriers',
        body: 'Once a bag and a seat are added, a low-cost fare is sometimes not cheaper than the group’s mainline flight.',
      },
      {
        title: 'Check the airport and terminal',
        body: 'Low-cost operations sometimes use different terminals, which matters on a connection.',
      },
    ],
    facts: [
      { label: 'Type', value: 'Low-cost, part of the Air India group' },
      { label: 'Network', value: 'Indian domestic plus Gulf and Southeast Asia' },
      { label: 'Extras', value: 'Baggage, seats and meals priced separately' },
      { label: 'Best lever', value: 'Fare bundles bought at booking' },
    ],
    faq: [
      {
        q: 'Is baggage included in the fare?',
        a: 'Not on the leanest fares. Add it at booking or buy a bundle — the airport rate is far higher.',
      },
      {
        q: 'Are there promo codes?',
        a: 'Fare sales rather than codes. Payment-method offers at checkout are the other lever.',
      },
      {
        q: 'Should I book direct?',
        a: 'Yes, unless an agency is significantly cheaper. Low-cost carriers handle disruption through whoever sold the ticket, and that is slower via an agency.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'skyscanner',
    name: 'Skyscanner',
    domain: 'skyscanner.co.in',
    siteLabel: 'skyscanner.co.in',
    badge: 'SK',
    color: '#0770E3',
    category: 'travel',
    markets: 'India for this storefront; Skyscanner operates worldwide',
    blurb: 'A search engine, not a seller — use it to find, then book direct.',
    about: [
      'Skyscanner searches flights, hotels and car hire across airlines and agencies and sends you to whoever is selling. It does not issue tickets itself, which is the most important thing to understand about it.',
      'That makes it a research tool rather than a place to buy, and it is an excellent one: the everywhere search, the whole-month calendar and price alerts do things no airline site does. The discipline is what happens after: check whether the airline’s own price matches the agency it found, and book direct if it does. A twenty-rupee saving is not worth an agency between you and a schedule change.',
    ],
    offers: [
      {
        id: 'skyscanner-flexible',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Whole-month and everywhere search',
        detail:
          'Moving a trip by two days, or picking the destination by price, saves far more than any code. This is the tool that shows you how much.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'skyscanner-alerts',
        kind: 'deal',
        value: 'Free',
        title: 'Price alerts on a route',
        detail:
          'Free, and the practical way to buy at a good price rather than at whatever today happens to be.',
        checked: CHECKED_R2,
      },
      {
        id: 'skyscanner-direct',
        kind: 'deal',
        value: 'Compare',
        title: 'Book direct with the airline when the price matches',
        detail:
          'Skyscanner hands you to a seller. If the airline matches the agency, book with the airline — changes and refunds are far easier.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Search flexible dates first',
        body: 'The calendar view routinely shows a fare a third lower two days either side. Nothing else on this page beats that.',
      },
      {
        title: 'Check who the seller is before clicking through',
        body: 'Unfamiliar agencies with very low prices are where post-booking problems come from. The reviews are worth a look.',
      },
      {
        title: 'Skyscanner does not sell you the ticket',
        body: 'If something goes wrong, your contract is with the airline or agency it sent you to. Know which before you pay.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Metasearch — finds, does not sell' },
      { label: 'Storefront', value: 'India (skyscanner.co.in); worldwide operation' },
      { label: 'Best features', value: 'Whole-month calendar, everywhere search, price alerts' },
      { label: 'After search', value: 'Compare the airline’s own price before booking' },
    ],
    faq: [
      {
        q: 'Does Skyscanner sell tickets?',
        a: 'No. It searches and hands you to an airline or an agency, and your contract is with them. That is the key thing to know if a booking goes wrong.',
      },
      {
        q: 'Are the prices it shows real?',
        a: 'They are what the seller was quoting when it last checked. Prices move fast on flights and the final page is the authority.',
      },
      {
        q: 'How do I actually save money with it?',
        a: 'Use the flexible-date calendar and price alerts. Date flexibility beats every discount mechanism in travel.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'lastminute-com',
    name: 'lastminute.com',
    domain: 'lastminute.com',
    siteLabel: 'lastminute.com',
    badge: 'LM',
    color: '#E6007E',
    category: 'travel',
    markets: 'United Kingdom for this storefront; separate sites across Europe',
    blurb: 'Package holidays and city breaks — the bundle is the discount.',
    about: [
      'lastminute.com sells flights, hotels, package holidays, city breaks and theatre-and-dinner deals, with a UK storefront and separate sites across Europe. Despite the name, most of its inventory is booked well ahead.',
      'The mechanic that matters is packaging. A flight and hotel bought together are priced from opaque inventory the hotel does not publish separately, which is why the bundle frequently undercuts the two booked apart. In the UK there is a second, better reason: a package sold by a UK travel organiser carries ATOL financial protection, which two separate bookings do not.',
    ],
    offers: [
      {
        id: 'lastminute-package',
        kind: 'deal',
        value: 'Bundle',
        title: 'Flight-plus-hotel packages below the parts',
        detail:
          'Opaque hotel pricing inside a bundle regularly beats booking separately — and a UK package carries ATOL protection.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'lastminute-codes',
        kind: 'deal',
        value: 'Coupons',
        title: 'Discount codes on packages and hotels',
        detail:
          'Genuinely issued and applied, usually with a minimum spend and excluding some suppliers.',
        checked: CHECKED_R2,
      },
      {
        id: 'lastminute-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal sale events',
        detail:
          'Scheduled campaigns, deepest in the January booking period and the late-summer window.',
        checked: CHECKED_R2,
      },
      {
        id: 'lastminute-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-only prices and alerts',
        detail: 'A share of the promotional inventory is app-exclusive.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Price the package against the two parts',
        body: 'It takes two minutes and it goes both ways. Where the package wins, it usually wins by a lot.',
      },
      {
        title: 'ATOL protection is a real benefit',
        body: 'A UK package is financially protected if the operator fails. Two separate bookings are not. That is worth money.',
      },
      {
        title: 'Read what the hotel board basis includes',
        body: 'Room-only, breakfast and all-inclusive at similar headline prices are very different holidays.',
      },
    ],
    facts: [
      { label: 'Storefront', value: 'United Kingdom; separate European sites' },
      { label: 'Best mechanic', value: 'Flight-plus-hotel packages' },
      { label: 'Protection', value: 'ATOL on UK packages' },
      { label: 'Codes', value: 'Real, with minimums and exclusions' },
    ],
    faq: [
      {
        q: 'Are lastminute.com packages actually cheaper?',
        a: 'Frequently, because the hotel component is priced opaquely inside a bundle. Compare against booking the two separately — the gap can be substantial either way.',
      },
      {
        q: 'What is ATOL protection?',
        a: 'A UK scheme that protects the money you paid for a package if the operator fails, and repatriates you if it happens mid-trip. It applies to packages, not to separate bookings.',
      },
      {
        q: 'Do the discount codes work?',
        a: 'Yes, with minimum spends and supplier exclusions. Check the terms before planning a booking around one.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'omio',
    name: 'Omio',
    domain: 'omio.com',
    siteLabel: 'omio.com',
    badge: 'OM',
    color: '#1F5CE0',
    category: 'travel',
    markets: 'Worldwide, strongest across Europe',
    blurb: 'Trains, buses and flights in one search — book direct on domestic rail.',
    about: [
      'Omio searches and sells train, bus and flight tickets across Europe and beyond, putting all three modes in one comparison. For a journey where the train and the plane are genuinely competitive — most of Western Europe — that comparison is the product.',
      'It adds a small booking fee on top of the operator’s fare, which is the trade for the convenience and the single booking. On a domestic journey with one operator, the operator’s own site is usually a little cheaper and easier to change; on a multi-country or multi-mode journey, Omio saves real effort.',
    ],
    offers: [
      {
        id: 'omio-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare train, bus and flight on one search',
        detail:
          'The comparison itself is the saving. On many European routes the bus is a third of the train and the train beats the plane door to door.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'omio-advance',
        kind: 'deal',
        value: 'Sale',
        title: 'Advance rail fares released months ahead',
        detail:
          'European rail pricing is advance-purchase. The cheapest tickets appear when booking opens and disappear steadily.',
        checked: CHECKED_R2,
      },
      {
        id: 'omio-direct',
        kind: 'deal',
        value: 'Compare',
        title: 'Book direct on a single-operator domestic journey',
        detail:
          'The operator’s own site avoids the booking fee and makes changes easier. Omio earns its fee on complex journeys.',
        checked: CHECKED_R2,
      },
      {
        id: 'omio-app',
        kind: 'deal',
        value: 'App only',
        title: 'App tickets and occasional app-only fares',
        detail: 'Mobile tickets, plus some fares released only in the app.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Book European rail early',
        body: 'Advance fares are the discount and they sell out. Same-week rail travel in Europe is expensive by design.',
      },
      {
        title: 'Check the bus on medium distances',
        body: 'Often a third of the rail fare for two hours more. Whether that trade is worth it is yours to make, but see the number.',
      },
      {
        title: 'On a simple domestic trip, buy from the operator',
        body: 'You avoid the fee and changes are easier. Use Omio to find the journey, then decide where to buy it.',
      },
    ],
    facts: [
      { label: 'Modes', value: 'Train, bus and flight in one search' },
      { label: 'Coverage', value: 'Worldwide, strongest in Europe' },
      { label: 'Fee', value: 'A booking fee on top of the operator fare' },
      { label: 'Best for', value: 'Multi-country and multi-mode journeys' },
    ],
    faq: [
      {
        q: 'Is Omio more expensive than booking direct?',
        a: 'Usually by a small booking fee. On a single-operator domestic trip that fee buys you nothing; on a multi-country journey it buys you one booking instead of four.',
      },
      {
        q: 'When should I book European trains?',
        a: 'As early as booking opens, typically a few months ahead. Advance fares are the whole discount in European rail.',
      },
      {
        q: 'Can I change a ticket bought through Omio?',
        a: 'Subject to the operator’s rules, and through Omio rather than the operator. That is the structural cost of booking through an intermediary.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'eurowings',
    name: 'Eurowings',
    domain: 'eurowings.com',
    siteLabel: 'eurowings.com',
    badge: 'EW',
    color: '#C41E3A',
    category: 'travel',
    markets: 'Germany and much of Europe',
    blurb: 'Lufthansa’s low-cost arm — the fare family decides the total.',
    about: [
      'Eurowings is the Lufthansa Group’s low-cost carrier, flying short-haul across Europe from German bases and a few others. Being inside the group means loyalty earning and some connectivity that a standalone budget airline does not offer.',
      'It sells in fare families rather than as a bare fare plus extras: the cheapest tier is hand luggage only with no changes, and the tiers above add a bag, seat selection and flexibility. That structure is genuinely clearer than the à-la-carte model, and it also means the advertised price is for a trip most people are not taking. Price the tier you need.',
    ],
    offers: [
      {
        id: 'eurowings-farefamily',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare the fare families, not the headline',
        detail:
          'The cheapest tier is cabin bag only and non-changeable. The bundled tiers cost less than adding the same items separately.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'eurowings-sales',
        kind: 'deal',
        value: 'Sale',
        title: 'Recurring fare sales across the network',
        detail: 'Frequent promotions, deepest on off-peak dates and lower-demand routes.',
        checked: CHECKED_R2,
      },
      {
        id: 'eurowings-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Group loyalty earning',
        detail:
          'Miles in the Lufthansa Group programme, which is unusual for a low-cost carrier and worth having.',
        checked: CHECKED_R2,
      },
      {
        id: 'eurowings-bags',
        kind: 'deal',
        value: 'Bundle',
        title: 'Add baggage at booking',
        detail: 'Airport rates are a multiple of the booking rate, as on every low-cost airline.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Work out whether you need a checked bag first',
        body: 'It determines which fare family you are buying and therefore the real comparison against other airlines.',
      },
      {
        title: 'Off-peak days are much cheaper',
        body: 'Midweek and early-morning departures across European short-haul are consistently below weekend fares.',
      },
      {
        title: 'Group loyalty is a genuine differentiator',
        body: 'Earning miles on a low-cost flight is unusual. If you fly the group anyway, it counts.',
      },
    ],
    facts: [
      { label: 'Group', value: 'Lufthansa' },
      { label: 'Network', value: 'European short-haul, German bases' },
      { label: 'Pricing', value: 'Fare families rather than à-la-carte' },
      { label: 'Loyalty', value: 'Earns in the group programme' },
    ],
    faq: [
      {
        q: 'Is the cheapest Eurowings fare worth it?',
        a: 'If you are travelling with cabin baggage only and your plans are fixed, yes. Otherwise the next tier up is usually cheaper than adding the extras.',
      },
      {
        q: 'Can I earn miles on Eurowings?',
        a: 'Yes, in the Lufthansa Group programme — unusual for a low-cost carrier and a real reason to prefer it if you fly the group.',
      },
      {
        q: 'Are there discount codes?',
        a: 'Fare sales rather than codes. The airline runs them frequently, especially on off-peak dates.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'flight-network',
    name: 'Flight Network',
    domain: 'flightnetwork.com',
    siteLabel: 'flightnetwork.com',
    badge: 'FN',
    color: '#1F6B4A',
    category: 'travel',
    markets: 'Worldwide, Canadian-based',
    blurb: 'Flight agency with a price-drop guarantee worth reading.',
    about: [
      'Flight Network is a Canadian-headquartered online travel agency selling flights, hotels and packages worldwide. It competes with the big agencies on price and on a handful of guarantees around fare drops and price matching.',
      'The mechanics are standard agency ones: a booking fee added to the fare, paid add-ons at checkout, and the ticket issued by the agency rather than the airline. The guarantees are the differentiator and they have conditions — read them rather than assuming, because a price-drop guarantee with a narrow window and a claim process is a different thing from a refund.',
    ],
    offers: [
      {
        id: 'flightnetwork-guarantee',
        kind: 'deal',
        value: 'Protection',
        title: 'Price-drop and price-match guarantees',
        detail:
          'Real, and conditional. Read the window, the claim process and the exclusions before relying on one.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'flightnetwork-flexible',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Flexible-date search across the month',
        detail: 'As with any flight search, moving dates saves more than any promotion.',
        checked: CHECKED_R2,
      },
      {
        id: 'flightnetwork-bundle',
        kind: 'deal',
        value: 'Bundle',
        title: 'Flight-plus-hotel packages',
        detail: 'Opaque hotel pricing in a bundle sometimes beats the two booked separately.',
        checked: CHECKED_R2,
      },
      {
        id: 'flightnetwork-decline',
        kind: 'deal',
        value: 'No add-ons',
        title: 'Decline the optional add-ons at checkout',
        detail:
          'Flexible-ticket and protection products are offered at the payment step. Reading each step carefully is the reliable saving.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the all-in total with the airline',
        body: 'Once the agency fee and any add-ons are counted, the gap frequently closes — and the airline is easier on a change.',
      },
      {
        title: 'Read the guarantee terms before you book on them',
        body: 'A guarantee with a 24-hour window and a claim form is worth less than it sounds. It is still worth having.',
      },
      {
        title: 'Use the 24-hour cancellation right on US itineraries',
        body: 'Where it applies, it lets you hold a fare while you verify it direct.',
      },
    ],
    facts: [
      { label: 'Base', value: 'Canada, selling worldwide' },
      { label: 'Model', value: 'Agency — issues the ticket, not the airline' },
      { label: 'Differentiator', value: 'Price-drop and price-match guarantees' },
      { label: 'Fees', value: 'Booking fee plus optional add-ons' },
    ],
    faq: [
      {
        q: 'Is the price-drop guarantee real?',
        a: 'Yes, with conditions — a defined window, a claim process and exclusions. Read them; it is a genuine benefit but not an automatic refund.',
      },
      {
        q: 'Why is the total higher than the fare?',
        a: 'A booking fee is added, plus anything you accepted at checkout. Compare the final figure against the airline.',
      },
      {
        q: 'Who do I contact if the flight changes?',
        a: 'Flight Network, because the agency issued the ticket. That is slower than dealing with the airline directly.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'mytrip',
    name: 'Mytrip',
    domain: 'mytrip.com',
    siteLabel: 'mytrip.com',
    badge: 'MT',
    color: '#1F4E9B',
    category: 'travel',
    markets: 'Worldwide, with country storefronts',
    blurb: 'Low-headline flight agency — the checkout steps are where the money goes.',
    about: [
      'Mytrip is a global online flight agency, part of the same group as several other budget-facing booking brands. It appears consistently near the top of flight comparisons, which is the business model working as intended.',
      'The low headline is genuine and so are the extras that follow it: seat selection, baggage, flexible-ticket options, service packages and payment-method fees, each presented as a step in the checkout. Nothing here is dishonest, but the defaults are not in your favour, and the total after a bag and a seat is frequently close to the airline’s own price.',
    ],
    offers: [
      {
        id: 'mytrip-basefare',
        kind: 'deal',
        value: 'Compare',
        title: 'Competitive base fares on the search page',
        detail: 'Consistently low headlines. Treat as the start of the calculation, not the end.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'mytrip-payment',
        kind: 'deal',
        value: 'No fee',
        title: 'Choose a payment method with no surcharge',
        detail:
          'Card fees differ by method and market and are applied at the last step. Picking the free one is a real saving.',
        checked: CHECKED_R2,
      },
      {
        id: 'mytrip-decline',
        kind: 'deal',
        value: 'No add-ons',
        title: 'Decline the service and flexibility packages',
        detail:
          'Read every checkout screen. Several add-ons are presented in ways that make accepting easier than declining.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the final total against the airline',
        body: 'With a bag and a seat added, the gap frequently disappears — and the airline is far easier when something changes.',
      },
      {
        title: 'Never book a tight self-transfer through an agency',
        body: 'Separate tickets and short connections are where agency bookings become expensive and stressful.',
      },
      {
        title: 'Keep every confirmation screen',
        body: 'Agency disputes are decided on what you can show was agreed.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Flight agency with extensive paid add-ons' },
      { label: 'Coverage', value: 'Worldwide via country storefronts' },
      { label: 'Fees', value: 'Payment-method and service fees at checkout' },
      { label: 'Support', value: 'Agency-issued ticket — contact them, not the airline' },
    ],
    faq: [
      {
        q: 'Why is Mytrip cheaper on the search page?',
        a: 'Because the fare excludes things bundled elsewhere. Add your bag and your seat and compare again — that is the honest comparison.',
      },
      {
        q: 'Are there Mytrip promo codes?',
        a: 'Rarely and marginally. What moves your total is which add-ons you accept and which payment method you use.',
      },
      {
        q: 'What happens if the airline cancels?',
        a: 'You go through Mytrip, because the agency issued the ticket. Allow considerably more time than an airline call.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'zenhotels',
    name: 'ZenHotels',
    domain: 'zenhotels.com',
    siteLabel: 'zenhotels.com',
    badge: 'ZH',
    color: '#1F5C8A',
    category: 'travel',
    markets: 'Worldwide',
    blurb: 'Hotel booking with a loyalty cashback — compare against the chain direct.',
    about: [
      'ZenHotels is an online hotel booking platform with worldwide inventory, competing with the large agencies on price and on a loyalty programme that returns a percentage of each stay as credit.',
      'The mechanics are standard hotel-agency ones: prepaid rates below flexible ones, free-cancellation options at a premium, and a loyalty tier that improves with spend. The comparison worth making every time is against the chain’s own site, because most hotel groups now match agency pricing for their loyalty members and a direct booking is easier to change.',
    ],
    offers: [
      {
        id: 'zenhotels-loyalty',
        kind: 'deal',
        value: 'Member',
        title: 'Loyalty programme returning credit on stays',
        detail:
          'A percentage of each completed booking comes back as credit against the next. It improves with tier.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'zenhotels-prepaid',
        kind: 'deal',
        value: 'Long term',
        title: 'Prepaid rates below flexible ones',
        detail: 'Cheaper and non-refundable. Right for a fixed trip, wrong for a provisional one.',
        checked: CHECKED_R2,
      },
      {
        id: 'zenhotels-freecancel',
        kind: 'deal',
        value: 'Flexible',
        title: 'Free-cancellation rates on much of the inventory',
        detail:
          'Book early on a refundable rate, keep looking, rebook if something better appears. Costs nothing but the price difference.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the chain’s own site before booking',
        body: 'Most groups match agency prices for members and give you an easier change process plus loyalty nights.',
      },
      {
        title: 'Read the cancellation terms per rate, not per hotel',
        body: 'The same room is sold on several rates with very different terms. The cheapest is usually the strictest.',
      },
      {
        title: 'Watch for the resort fee',
        body: 'Some destinations add a per-night charge at the property that is not in the agency price.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Hotel booking agency, worldwide inventory' },
      { label: 'Loyalty', value: 'Credit back on completed stays' },
      { label: 'Rates', value: 'Prepaid and free-cancellation options' },
      { label: 'Compare with', value: 'The hotel chain’s own member rate' },
    ],
    faq: [
      {
        q: 'Is ZenHotels cheaper than the big agencies?',
        a: 'Sometimes, and the loyalty credit adds to it. Always check the hotel’s own site too — chains increasingly match on price and win on flexibility.',
      },
      {
        q: 'Can I cancel a booking?',
        a: 'On a free-cancellation rate, yes, within the stated window. Prepaid rates are cheaper because they are not refundable.',
      },
      {
        q: 'Does the loyalty credit expire?',
        a: 'Check the current terms in your account. Agency credit schemes generally carry a validity window.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'nh-hotels',
    name: 'NH Hotels',
    domain: 'nh-hotels.com',
    siteLabel: 'nh-hotels.com',
    badge: 'NH',
    color: '#1A3A6B',
    category: 'travel',
    markets: 'Spain, Germany, Italy, Netherlands, Latin America and beyond',
    blurb: 'European city hotel group — book direct for the member rate.',
    about: [
      'NH is a European hotel group strongest in Spanish, Italian, German and Dutch cities, with a growing Latin American presence, operating across business and upscale brands.',
      'Like most chains it now runs a best-price policy for loyalty members: joining the free programme gets you a rate below what the agencies show, plus flexible cancellation and points toward free nights. That combination is why booking direct is usually right at a chain hotel — the price matches or beats the agency and the stay actually counts toward something.',
    ],
    offers: [
      {
        id: 'nhhotels-member',
        kind: 'deal',
        value: 'Member',
        title: 'Free loyalty programme with a member-only rate',
        detail:
          'A discount below the public and agency price, plus points on stays. Joining takes a minute and is the main lever.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'nhhotels-advance',
        kind: 'deal',
        value: 'Long term',
        title: 'Advance-purchase rates below flexible ones',
        detail: 'Cheaper and non-refundable. Suits a fixed itinerary.',
        checked: CHECKED_R2,
      },
      {
        id: 'nhhotels-campaigns',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal campaigns and city-break packages',
        detail: 'Scheduled promotions with extra percentages for members.',
        checked: CHECKED_R2,
      },
      {
        id: 'nhhotels-flexible',
        kind: 'deal',
        value: 'Flexible',
        title: 'Free cancellation on the flexible rate',
        detail:
          'Book early on a refundable rate and rebook if the price falls. Chains rarely penalise that.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Join the programme before you book',
        body: 'The member rate applies to a signed-in booking. It cannot be added afterwards.',
      },
      {
        title: 'Direct usually beats the agency at a chain',
        body: 'Matching price, easier changes, and the stay earns points. The agency wins only when it is genuinely cheaper.',
      },
      {
        title: 'Check whether breakfast is included',
        body: 'City-hotel rates often exclude it and add a substantial per-person charge. It changes the comparison.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'ES, DE, IT, NL, Latin America and more' },
      { label: 'Loyalty', value: 'Free, with a member-only rate' },
      { label: 'Rates', value: 'Advance-purchase and flexible' },
      { label: 'Watch for', value: 'Breakfast charged separately' },
    ],
    faq: [
      {
        q: 'Is booking direct with NH cheaper than an agency?',
        a: 'For members, usually — the member rate sits below the public price, and the stay earns points. Joining is free.',
      },
      {
        q: 'Is the advance rate worth it?',
        a: 'On a fixed trip, yes. It is non-refundable, so on anything provisional the flexible rate is the cheaper mistake.',
      },
      {
        q: 'Does the price include breakfast?',
        a: 'Often not in city hotels. Check the rate description — it is a meaningful per-person addition.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'infobus',
    name: 'Infobus',
    domain: 'infobus.eu',
    siteLabel: 'infobus.eu',
    badge: 'IB',
    color: '#1F6B8A',
    category: 'travel',
    markets: 'Europe, with a focus on Central and Eastern European routes',
    blurb: 'International coach and rail tickets across Europe, mostly long routes.',
    about: [
      'Infobus sells bus, coach and some rail tickets for international routes across Europe, with particular depth on Central and Eastern European corridors that the big Western operators do not serve well.',
      'Long-distance coach is the cheapest way to cross Europe by a wide margin, and on the routes this platform covers there is often no competing train. The saving comes from booking early and travelling off-peak; the thing to check before booking is the boarding point and the total journey time, because a cheap ticket from an inconvenient stop with a five-hour night wait is a different product.',
    ],
    offers: [
      {
        id: 'infobus-advance',
        kind: 'deal',
        value: 'Sale',
        title: 'Advance-purchase fares well below walk-up',
        detail:
          'Coach pricing rewards booking early on popular corridors, particularly around holidays.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'infobus-offpeak',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Midweek and off-season departures',
        detail:
          'Demand on these routes is highly seasonal. Shifting a journey by a day can halve the fare.',
        checked: CHECKED_R2,
      },
      {
        id: 'infobus-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare the operator’s own site',
        detail:
          'On a single-operator route the carrier sometimes sells direct for less. Infobus earns its place on multi-operator corridors.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the boarding point, not just the city',
        body: 'International coaches often leave from a peripheral station. Add the cost and time of getting there.',
      },
      {
        title: 'Price the whole journey time',
        body: 'A twenty-hour coach with a border wait against a cheap flight is a real comparison worth making honestly.',
      },
      {
        title: 'Book before the holiday rush',
        body: 'These corridors fill around public holidays and fares rise steeply as they do.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'European international coach and some rail' },
      { label: 'Strength', value: 'Central and Eastern European corridors' },
      { label: 'Pricing', value: 'Advance purchase, strongly seasonal' },
      { label: 'Check first', value: 'Boarding point and total journey time' },
    ],
    faq: [
      {
        q: 'Is coach cheaper than flying across Europe?',
        a: 'Usually by a wide margin on the routes this platform covers, especially where no budget airline flies. The cost is time.',
      },
      {
        q: 'Can I change or cancel a ticket?',
        a: 'Subject to the operator’s rules, which on cheap advance fares are usually strict. Read them before booking.',
      },
      {
        q: 'Where does the coach actually leave from?',
        a: 'Frequently a peripheral station rather than the main terminal. Check it before comparing on price alone.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'buser',
    name: 'Buser',
    domain: 'buser.com.br',
    siteLabel: 'buser.com.br',
    badge: 'BS',
    color: '#1F7A4A',
    category: 'travel',
    markets: 'Brazil only',
    blurb: 'Brazilian intercity coach at below-terminal prices — book early.',
    about: [
      'Buser sells intercity coach travel in Brazil, working with chartered operators to undercut the traditional terminal-based bus companies on the busiest corridors.',
      'The pricing is straightforwardly demand-based: seats are cheapest when booking opens and rise as a departure fills, and the gap against a walk-up terminal ticket on a popular route is substantial. Boarding points are often not the main bus terminal, which is part of how the model works and part of what you need to check.',
    ],
    offers: [
      {
        id: 'buser-advance',
        kind: 'deal',
        value: 'Sale',
        title: 'Early booking well below departure-day prices',
        detail: 'Seats are priced by remaining availability. Booking early is the discount.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'buser-offpeak',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Midweek and overnight departures',
        detail:
          'Substantially cheaper than Friday and Sunday services, which is when everyone travels.',
        checked: CHECKED_R2,
      },
      {
        id: 'buser-firstride',
        kind: 'deal',
        value: 'New customer',
        title: 'First-trip discount for new users',
        detail: 'An acquisition offer applied in the app on a first booking.',
        checked: CHECKED_R2,
      },
      {
        id: 'buser-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-first booking and alerts',
        detail: 'The platform is app-led and the promotional inventory follows.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the boarding point before booking',
        body: 'Departures are often from a street pickup rather than the terminal. Factor in getting there, especially late at night.',
      },
      {
        title: 'Avoid Friday and Sunday',
        body: 'Brazilian intercity demand concentrates on those two days and pricing reflects it.',
      },
      {
        title: 'Overnight saves a night’s accommodation',
        body: 'On the long corridors that is a real saving, if you can sleep on a coach.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Brazil' },
      { label: 'Model', value: 'Chartered coach, app-first booking' },
      { label: 'Pricing', value: 'Demand-based — earlier is cheaper' },
      { label: 'Check first', value: 'Boarding point, often not the terminal' },
    ],
    faq: [
      {
        q: 'Is Buser cheaper than the bus terminal?',
        a: 'On the busy corridors, usually and substantially — that is the whole business model. Book early, because prices rise as a departure fills.',
      },
      {
        q: 'Where do I board?',
        a: 'Often a designated street point rather than the main terminal. It is stated at booking and worth checking against your travel to it.',
      },
      {
        q: 'Can I cancel?',
        a: 'Within the published window and subject to a fee scale that tightens close to departure.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'maxmilhas',
    name: 'MaxMilhas',
    domain: 'maxmilhas.com.br',
    siteLabel: 'maxmilhas.com.br',
    badge: 'MM',
    color: '#1F5CB0',
    category: 'travel',
    markets: 'Brazil only',
    blurb: 'Flights issued from other people’s air miles — cheaper, with a caveat.',
    about: [
      'MaxMilhas is a Brazilian platform that sells flights issued using air miles from members who sell theirs. The result is a real ticket on a real airline, frequently well below the cash fare, particularly on domestic Brazilian routes.',
      'The model has a structural consequence worth understanding before you book. The ticket is issued in your name from a third party’s mileage account, which means changes, cancellations and airline disputes route through the platform rather than being simple airline transactions. On a straightforward one-way trip that is fine; on a complex itinerary it adds friction that the discount has to justify.',
    ],
    offers: [
      {
        id: 'maxmilhas-miles',
        kind: 'deal',
        value: 'Sale',
        title: 'Mileage-issued fares below cash prices',
        detail:
          'Frequently a substantial saving on domestic Brazilian routes. A genuine ticket on the airline.',
        terms: 'Changes and cancellations run through the platform, not the airline.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'maxmilhas-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare against the airline’s own fare',
        detail:
          'On a promotional cash fare the gap sometimes disappears, and the direct booking is simpler.',
        checked: CHECKED_R2,
      },
      {
        id: 'maxmilhas-flexible',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Flexible dates on domestic routes',
        detail: 'Brazilian domestic pricing swings hard by day. The calendar is the discount.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Use it for simple itineraries',
        body: 'One-way or straightforward return trips. Complex multi-leg journeys are where the extra layer between you and the airline hurts.',
      },
      {
        title: 'Check the fare rules before booking',
        body: 'Mileage-issued tickets can carry stricter change conditions than the equivalent cash fare.',
      },
      {
        title: 'Compare against a promotional cash fare',
        body: 'Brazilian carriers run frequent sales. When one is on, the advantage narrows.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Brazil' },
      { label: 'Model', value: 'Tickets issued from third-party air miles' },
      { label: 'Best for', value: 'Simple domestic itineraries' },
      { label: 'Trade-off', value: 'Changes route through the platform' },
    ],
    faq: [
      {
        q: 'Is a mileage-issued ticket a real ticket?',
        a: 'Yes — issued by the airline in your name with a normal booking reference. The difference is who arranged it and therefore who handles a change.',
      },
      {
        q: 'What happens if I need to cancel?',
        a: 'You go through MaxMilhas rather than the airline. Read the change and cancellation rules before booking, because they can be stricter than a cash fare.',
      },
      {
        q: 'Is it always cheaper?',
        a: 'No. During airline promotional sales the cash fare can match or beat it, and a direct booking is simpler.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'global-yo',
    name: 'Global YO',
    domain: 'globalyo.com',
    siteLabel: 'globalyo.com',
    badge: 'GY',
    color: '#1F5C8A',
    category: 'travel',
    markets: 'Worldwide — eSIM data plans',
    blurb: 'Travel eSIM with regional bundles — install before you fly.',
    about: [
      'Global YO sells prepaid eSIM data plans for travellers: buy a country, regional or global package, install it before departure, and land with working data. It competes with the larger eSIM providers mainly on regional bundle pricing.',
      'The rules of this category are the same everywhere and worth repeating. A regional plan across a multi-country trip is cheaper per gigabyte than several country plans; the largest data tier in any plan is always cheapest per gigabyte; and most plans are data-only, so if you need SMS for two-factor codes you must keep your home SIM active alongside.',
    ],
    offers: [
      {
        id: 'globalyo-regional',
        kind: 'deal',
        value: 'Bundle',
        title: 'Regional and global bundles over country plans',
        detail:
          'On a multi-country trip a regional package is cheaper per gigabyte and removes the switching.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'globalyo-firstpurchase',
        kind: 'deal',
        value: 'New customer',
        title: 'First-purchase discount for new accounts',
        detail: 'A welcome offer applied at checkout.',
        checked: CHECKED_R2,
      },
      {
        id: 'globalyo-tier',
        kind: 'deal',
        value: 'Bundle',
        title: 'Larger data tiers at a lower price per gigabyte',
        detail: 'Buy the tier above what you think you need — the unit price falls sharply.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Install before you fly',
        body: 'You need internet to install an eSIM. Doing it at the destination airport is the classic mistake.',
      },
      {
        title: 'Check your phone supports eSIM and is unlocked',
        body: 'Most recent flagships do; plenty of mid-range and carrier-locked handsets do not.',
      },
      {
        title: 'Compare your own roaming first',
        body: 'Some European and US plans now include roaming where you are going. Free beats cheap.',
      },
    ],
    facts: [
      { label: 'Product', value: 'Prepaid travel eSIM data' },
      { label: 'Requirement', value: 'An eSIM-capable, unlocked phone' },
      { label: 'Best value', value: 'Regional bundles, largest data tier' },
      { label: 'Caveat', value: 'Data-only — no phone number on most plans' },
    ],
    faq: [
      {
        q: 'Will I keep my normal phone number?',
        a: 'Yes — the eSIM runs alongside your physical SIM, so calls and texts to your usual number still arrive while it is enabled.',
      },
      {
        q: 'Is an eSIM cheaper than roaming?',
        a: 'Almost always, unless your home plan already includes free roaming at your destination. Check that first.',
      },
      {
        q: 'When should I install it?',
        a: 'Before you travel, while you still have internet. Installation needs a connection.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'palace-resorts',
    name: 'Palace Resorts',
    domain: 'palaceresorts.com',
    siteLabel: 'palaceresorts.com',
    badge: 'PR',
    color: '#1F5C7A',
    category: 'travel',
    markets: 'Mexico and the Caribbean, sold worldwide',
    blurb: 'All-inclusive resorts — book direct and price the resort credit honestly.',
    about: [
      'Palace Resorts operates all-inclusive resorts in Mexico and the Caribbean, aimed at families and couples, with everything from meals and drinks to activities included in the nightly rate.',
      'All-inclusive pricing is discounted almost permanently and the mechanics are consistent: a percentage off the rate, plus a "resort credit" toward spa treatments, excursions and dining upgrades. That credit is where the marketing does its work — it is real but restricted, frequently comes with minimum spends per use, and is not cash. Price the holiday on the nightly rate and treat the credit as a bonus rather than a discount.',
    ],
    offers: [
      {
        id: 'palaceresorts-direct',
        kind: 'deal',
        value: 'Member',
        title: 'Book direct for the best available rate',
        detail:
          'All-inclusive groups price direct at or below the agencies and add credits on top. There is little reason to book elsewhere.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'palaceresorts-longstay',
        kind: 'deal',
        value: 'Long term',
        title: 'Longer stays at a lower nightly rate',
        detail: 'Five and seven-night packages price well below three nights per night.',
        checked: CHECKED_R2,
      },
      {
        id: 'palaceresorts-offseason',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Off-season and shoulder-month pricing',
        detail:
          'Caribbean rates swing enormously by season. Shifting by three weeks can change the price by a third.',
        checked: CHECKED_R2,
      },
      {
        id: 'palaceresorts-credit',
        kind: 'deal',
        value: 'Bundle',
        title: 'Resort credit toward spa, dining and excursions',
        detail:
          'Real but restricted — usually with minimum spends per redemption. Treat it as a bonus, not as money off the price.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the nightly rate, not the credit',
        body: 'Resort credits are the standard marketing device in all-inclusive. The rate is the number that determines what you pay.',
      },
      {
        title: 'Shoulder season is the real discount',
        body: 'Late spring and autumn in the Caribbean are cheaper, quieter and perfectly good weather.',
      },
      {
        title: 'Check what "all-inclusive" excludes',
        body: 'Premium spirits, à-la-carte restaurants, spa and excursions are commonly outside the rate. That list varies by resort.',
      },
    ],
    facts: [
      { label: 'Locations', value: 'Mexico and the Caribbean' },
      { label: 'Model', value: 'All-inclusive nightly rates' },
      { label: 'Standard offer', value: 'Rate discount plus restricted resort credit' },
      { label: 'Biggest lever', value: 'Season and length of stay' },
    ],
    faq: [
      {
        q: 'Is the resort credit worth anything?',
        a: 'Yes, but less than the headline suggests — it usually carries minimum spends per redemption and covers things outside the all-inclusive rate. Judge the deal on the nightly rate.',
      },
      {
        q: 'Should I book direct or through an agency?',
        a: 'Direct, generally. All-inclusive groups price their own channel competitively and add the credits there.',
      },
      {
        q: 'When is it cheapest?',
        a: 'Shoulder and low season, and on longer stays. Those two together move the price far more than any promotion.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'palazzo-versace-dubai',
    name: 'Palazzo Versace Dubai',
    domain: 'palazzoversace.ae',
    siteLabel: 'palazzoversace.ae',
    badge: 'PVD',
    color: '#8A7A2A',
    category: 'travel',
    markets: 'Dubai, sold internationally',
    blurb: 'Luxury Dubai hotel — the summer rate is a different hotel financially.',
    about: [
      'Palazzo Versace Dubai is a luxury hotel on Dubai Creek, designed and furnished by the fashion house, with the suites, restaurants and pool complex that positioning implies.',
      'Luxury hotels do not discount by coupon; they discount by season, and in Dubai the seasonal swing is extreme. Summer rates, when the heat empties the city, can be a fraction of the winter peak at the same property. Beyond that the levers are direct-booking benefits, longer-stay rates and packages that fold in breakfast, spa or airport transfers — which at this price point are worth more than they cost.',
    ],
    offers: [
      {
        id: 'palazzoversace-summer',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Summer and shoulder-season rates',
        detail:
          'Dubai empties in the heat and luxury rates fall accordingly. It is by far the largest saving available.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'palazzoversace-direct',
        kind: 'deal',
        value: 'Member',
        title: 'Direct booking benefits and packages',
        detail:
          'Breakfast, credit or upgrades included when booking with the hotel rather than through an agency.',
        checked: CHECKED_R2,
      },
      {
        id: 'palazzoversace-longstay',
        kind: 'deal',
        value: 'Long term',
        title: 'Longer-stay rates and third-night-free offers',
        detail: 'The nightly rate falls sharply beyond two nights.',
        checked: CHECKED_R2,
      },
      {
        id: 'palazzoversace-advance',
        kind: 'deal',
        value: 'Long term',
        title: 'Advance-purchase rates',
        detail: 'Non-refundable and meaningfully cheaper. Right only on a fixed trip.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Travel in summer if you can tolerate the heat',
        body: 'It is the single biggest variable in Dubai hotel pricing, and the hotels are air-conditioned throughout.',
      },
      {
        title: 'Ask what the package includes before comparing',
        body: 'Breakfast for two, spa credit and transfers are substantial money at this level and vary between rates.',
      },
      {
        title: 'Check for a tourism fee added at checkout',
        body: 'Dubai levies a per-room, per-night charge collected at the hotel. It is not in the quoted rate.',
      },
    ],
    facts: [
      { label: 'Location', value: 'Dubai Creek' },
      { label: 'Pricing', value: 'Extremely seasonal' },
      { label: 'Direct booking', value: 'Usually adds breakfast, credit or upgrades' },
      { label: 'Extra cost', value: 'Municipality tourism fee, per night, at the hotel' },
    ],
    faq: [
      {
        q: 'When is Dubai cheapest?',
        a: 'Summer, by a wide margin, because of the heat. Shoulder months in spring and autumn are the compromise.',
      },
      {
        q: 'Is booking direct better?',
        a: 'At luxury hotels, usually — the rate matches the agencies and direct bookings typically add breakfast, credit or an upgrade.',
      },
      {
        q: 'Are there extra charges on arrival?',
        a: 'A per-night tourism fee is collected at the hotel across Dubai, and it is not included in the quoted rate.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'wakacje-pl',
    name: 'Wakacje.pl',
    domain: 'wakacje.pl',
    siteLabel: 'wakacje.pl',
    badge: 'WP',
    color: '#1F6BC4',
    category: 'travel',
    markets: 'Poland only',
    blurb: 'Poland’s package holiday comparison — first minute or last minute, not between.',
    about: [
      'Wakacje.pl is the largest Polish package holiday platform, comparing tours from the major Polish operators — flights, transfers and hotels sold as one package with the operator carrying the responsibility.',
      'Polish package pricing has two cheap windows and an expensive middle. "First minute" fares released months ahead reward early commitment, and genuine last-minute deals clear unsold capacity days before departure. Booking in the middle is the worst of both. Which window suits you depends entirely on whether you can be flexible about the destination.',
    ],
    offers: [
      {
        id: 'wakacjepl-firstminute',
        kind: 'deal',
        value: 'Sale',
        title: 'First-minute pricing released months ahead',
        detail:
          'The cheapest way to get a specific hotel on specific dates. Commit early, pay less.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'wakacjepl-lastminute',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Genuine last-minute clearance',
        detail:
          'Operators clear unsold seats close to departure. Cheap, but you take what is left.',
        checked: CHECKED_R2,
      },
      {
        id: 'wakacjepl-compare',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare operators on the same hotel',
        detail:
          'Different Polish operators sell the same resort at different prices with different flight times.',
        checked: CHECKED_R2,
      },
      {
        id: 'wakacjepl-instalments',
        kind: 'deal',
        value: 'Long term',
        title: 'Instalment payment on packages',
        detail: 'Deposit now, balance before departure. Standard in the Polish market.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Decide which window you are in',
        body: 'First minute if the dates and hotel matter; last minute if only the beach does. The middle is the expensive place to book.',
      },
      {
        title: 'Check the flight times before the price',
        body: 'Charter departures at three in the morning are cheaper for a reason, and it costs you a day at both ends.',
      },
      {
        title: 'A package carries operator protection',
        body: 'Under EU package travel rules the operator is responsible for the whole trip. Separate bookings are not covered that way.',
      },
    ],
    facts: [
      { label: 'Market', value: 'Poland' },
      { label: 'Product', value: 'Package holidays from Polish tour operators' },
      { label: 'Cheap windows', value: 'First minute and genuine last minute' },
      { label: 'Protection', value: 'EU package travel rules apply' },
    ],
    faq: [
      {
        q: 'Is first minute or last minute cheaper?',
        a: 'Both beat booking in the middle. First minute gets you the hotel and dates you want; last minute is cheaper still if you will take whatever is left.',
      },
      {
        q: 'What if the tour operator goes under?',
        a: 'EU package travel rules provide protection and repatriation for packages sold by an EU operator. That is a real advantage over assembling the trip yourself.',
      },
      {
        q: 'Why is the same hotel a different price on two listings?',
        a: 'Different operators, different charter flights and different board basis. Compare the flight times and what is included, not just the total.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'tez-tour',
    name: 'TEZ TOUR',
    domain: 'tez-tour.com',
    siteLabel: 'tez-tour.com',
    badge: 'TT',
    color: '#1F6B8A',
    category: 'travel',
    markets: 'Worldwide, strongest on Turkey, Egypt and UAE beach packages',
    blurb: 'Beach package operator — early booking and shoulder season are the discounts.',
    about: [
      'TEZ TOUR is a tour operator selling beach package holidays, strongest on the Turkey, Egypt and UAE corridors, with charter flights, transfers and hotels sold as a single package.',
      'Package operators price by booking window and by season, not by coupon. Early booking secures the hotels people actually want at the lowest rate; late clearance is cheaper still on whatever has not sold. The other variable that matters more than the price is board basis — all-inclusive versus half board at these destinations changes the total holiday cost far more than the headline difference suggests.',
    ],
    offers: [
      {
        id: 'teztour-early',
        kind: 'deal',
        value: 'Sale',
        title: 'Early-booking rates',
        detail: 'The cheapest route to a specific hotel on specific dates.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'teztour-shoulder',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Shoulder-season departures',
        detail:
          'Late spring and early autumn at these destinations are cheaper, quieter and often more pleasant.',
        checked: CHECKED_R2,
      },
      {
        id: 'teztour-allinclusive',
        kind: 'deal',
        value: 'Bundle',
        title: 'All-inclusive board over half board',
        detail:
          'At beach resorts the all-inclusive upgrade frequently costs less than the food and drink it replaces.',
        checked: CHECKED_R2,
      },
      {
        id: 'teztour-instalments',
        kind: 'deal',
        value: 'Long term',
        title: 'Deposit and instalment payment',
        detail: 'Book with a deposit and settle before departure.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Price the board basis properly',
        body: 'Half board plus drinks and lunches at a resort routinely exceeds the all-inclusive upgrade. Work it out rather than assuming.',
      },
      {
        title: 'Check the flight times',
        body: 'Charter schedules are built around aircraft utilisation. A cheap package can cost you two days of the holiday.',
      },
      {
        title: 'Shoulder season is the value window',
        body: 'Cheaper, cooler and less crowded at exactly the destinations this operator specialises in.',
      },
    ],
    facts: [
      { label: 'Product', value: 'Charter beach packages' },
      { label: 'Strength', value: 'Turkey, Egypt, UAE' },
      { label: 'Cheap windows', value: 'Early booking and late clearance' },
      { label: 'Key decision', value: 'Board basis' },
    ],
    faq: [
      {
        q: 'Is all-inclusive worth the upgrade?',
        a: 'At beach resorts, usually yes. Once you count drinks and lunches at resort prices, the upgrade is frequently cheaper than paying as you go.',
      },
      {
        q: 'When should I book?',
        a: 'Early if you want a particular hotel; late if you are flexible and will take what is left. The middle of the window is the expensive place to be.',
      },
      {
        q: 'Are charter flights different from scheduled ones?',
        a: 'They fly to the operator’s schedule, which often means unsociable times and less flexibility if something changes. Factor that in.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'youtravel-me',
    name: 'YouTravel.me',
    domain: 'youtravel.me',
    siteLabel: 'youtravel.me',
    badge: 'YT',
    color: '#1F7A6B',
    category: 'travel',
    markets: 'Worldwide — small-group tours run by independent organisers',
    blurb: 'Small-group tour marketplace — vet the organiser, not the platform.',
    about: [
      'YouTravel.me is a marketplace for small-group tours and author-led trips: independent organisers list itineraries — trekking, surfing, road trips, retreats — and travellers book a place in the group.',
      'Because the organiser rather than the platform runs the trip, the variance is in who you book with. Reviews of that specific organiser and that specific itinerary are worth more than anything about the platform. Pricing works by deposit and early-bird place rather than by coupon: groups have fixed sizes, early places are cheaper, and popular trips fill.',
    ],
    offers: [
      {
        id: 'youtravel-earlybird',
        kind: 'deal',
        value: 'Sale',
        title: 'Early-bird places at a lower price',
        detail:
          'Group sizes are fixed and early places are cheaper. On a popular itinerary they are also the only ones.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'youtravel-deposit',
        kind: 'deal',
        value: 'Long term',
        title: 'Deposit now, balance before departure',
        detail:
          'Secures a place without the full outlay. Check what the deposit terms are if you cancel.',
        checked: CHECKED_R2,
      },
      {
        id: 'youtravel-offseason',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Shoulder-season departures',
        detail: 'The same itinerary outside peak months is cheaper and usually less crowded.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Read reviews of the organiser, not the site',
        body: 'The trip is run by an individual or a small company. Their track record is the only relevant signal.',
      },
      {
        title: 'Check what the price excludes',
        body: 'Flights, some meals, park fees and equipment hire are commonly outside the tour price. That list decides the real cost.',
      },
      {
        title: 'Ask about the group size and who else is going',
        body: 'On a small-group trip the composition of the group is a large part of the experience.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Marketplace of independent tour organisers' },
      { label: 'Trips', value: 'Small-group, author-led itineraries' },
      { label: 'Payment', value: 'Deposit plus balance before departure' },
      { label: 'Vet', value: 'The organiser and the specific itinerary' },
    ],
    faq: [
      {
        q: 'Who actually runs the trip?',
        a: 'An independent organiser, not the platform. That is why their reviews and their itinerary detail matter more than anything else on the page.',
      },
      {
        q: 'Are flights included?',
        a: 'Usually not. Check the inclusions list carefully — it is where the real cost of these trips is decided.',
      },
      {
        q: 'What if the trip is cancelled?',
        a: 'Terms are set by the organiser within the platform’s rules. Read the cancellation and refund policy before paying a deposit.',
      },
    ],
    updated: CHECKED_R2,
  },
]
