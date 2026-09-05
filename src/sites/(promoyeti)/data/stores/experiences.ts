/**
 * Tours, tickets & events.
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

export const experienceStores: Store[] = [
  {
    slug: 'klook',
    name: 'Klook',
    domain: 'klook.com',
    siteLabel: 'klook.com',
    badge: 'KL',
    color: '#B04A1F',
    category: 'experiences',
    markets: 'Worldwide, strongest across Asia-Pacific',
    blurb: 'Activity platform with a working coupon system and app-only pricing.',
    about: [
      'Klook sells attraction tickets, tours, transport passes, airport transfers and rail passes, with by far its deepest catalogue across Asia — Japan, Korea, Hong Kong, Singapore, Thailand and Taiwan in particular.',
      'It is a genuine coupon business. Promo codes are issued continuously by market, a credits programme returns value on completed bookings, and app-exclusive prices are routine. The caveat that matters is the cap: first-booking codes are usually capped at a modest amount, so they are worth most on a cheap ticket and least on an expensive tour.',
    ],
    offers: [
      {
        id: 'klook-app',
        kind: 'deal',
        value: 'App only',
        title: 'App-only prices and coupons',
        detail:
          'A structural discount, not a promotion. The same activity is frequently cheaper in the app than on the website.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'klook-first',
        kind: 'deal',
        value: 'New customer',
        title: 'First-booking discount for new accounts',
        detail: 'A capped percentage on a first booking, issued per market.',
        terms: 'Capped — the maximum amount matters more than the percentage.',
        checked: CHECKED,
      },
      {
        id: 'klook-credits',
        kind: 'deal',
        value: 'Credits',
        title: 'Klook Credits on completed bookings',
        detail: 'Credit against future bookings, plus credits for reviews with photos.',
        checked: CHECKED,
      },
      {
        id: 'klook-passes',
        kind: 'deal',
        value: 'Bundle',
        title: 'City passes and multi-attraction bundles',
        detail:
          'On a dense sightseeing day these beat individual tickets and any code by a wide margin. Check the pass covers what you actually want to see.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Compare the operator’s own price',
        body: 'On single attractions the venue is sometimes cheaper. Klook wins on convenience, on bundles and on skip-the-line access.',
      },
      {
        title: 'Book transport passes before you land',
        body: 'Rail passes and airport transfers are cheaper in advance and avoid a queue at a machine in a language you may not read.',
      },
      {
        title: 'Check the cancellation window per activity',
        body: 'It is set by the operator, not by Klook, and ranges from fully flexible to non-refundable on the same page.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'Worldwide; deepest in Asia-Pacific' },
      { label: 'Best channel', value: 'The app' },
      { label: 'Codes', value: 'Real, issued per market, capped' },
      { label: 'Cancellation', value: 'Set per activity by the operator' },
    ],
    faq: [
      {
        q: 'Do Klook promo codes work?',
        a: 'Yes. They are market-specific and capped, so a code found on a US-facing page may be rejected in Singapore. The app’s own coupon page is the reliable source.',
      },
      {
        q: 'Is Klook cheaper than buying at the venue?',
        a: 'Often for bundles and passes, sometimes not for a single ticket. Where it reliably wins is skipping the ticket queue.',
      },
      {
        q: 'What if the tour is cancelled?',
        a: 'Operator-cancelled activities are refunded. Cancellations by you follow the window on that activity’s page, which varies widely.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'viator',
    name: 'Viator',
    domain: 'viator.com',
    siteLabel: 'viator.com',
    badge: 'VT',
    color: '#1F6B4A',
    category: 'experiences',
    markets: 'Worldwide',
    blurb: 'Tripadvisor’s tour marketplace, where flexibility is the product.',
    about: [
      'Viator is Tripadvisor’s tours and activities marketplace, listing operator-run experiences worldwide with the largest catalogue in the category outside Asia.',
      'Discounting is modest and mostly comes as app promotions, a rewards programme and occasional seasonal campaigns. The genuine value here is not the price but the cancellation policy: a large share of the catalogue is free to cancel up to 24 hours before, which on a trip where the weather decides your plans is worth more than a 10% code.',
    ],
    offers: [
      {
        id: 'viator-app',
        kind: 'deal',
        value: 'App only',
        title: 'App promotions and app-first pricing',
        detail: 'The app carries the platform’s own promotional inventory and a rewards balance.',
        checked: CHECKED,
      },
      {
        id: 'viator-cancellation',
        kind: 'deal',
        value: 'Flexible',
        title: 'Free cancellation up to 24 hours before on most listings',
        detail:
          'The reason to book here rather than direct. Book the flexible option early, then decide on the day.',
        terms: 'Per listing — a minority of tours are non-refundable.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'viator-rewards',
        kind: 'deal',
        value: 'Member',
        title: 'Rewards programme on completed bookings',
        detail: 'Points that convert to credit against later bookings.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Search the operator’s name',
        body: 'Many tours are bookable direct at a lower price. Viator’s advantage is the flexible cancellation and the review volume.',
      },
      {
        title: 'Book early, cancel late',
        body: 'On flexible listings, an early booking locks availability at no risk. Popular tours sell out long before they discount.',
      },
      {
        title: 'Read the meeting-point line',
        body: 'Most bad Viator experiences are logistics, not the tour. The pickup arrangement is the detail to check.',
      },
    ],
    facts: [
      { label: 'Owner', value: 'Tripadvisor' },
      { label: 'Coverage', value: 'Worldwide' },
      { label: 'Cancellation', value: 'Free up to 24h before on most listings' },
      { label: 'Codes', value: 'Occasional and modest' },
    ],
    faq: [
      {
        q: 'Are there Viator promo codes?',
        a: 'Occasionally, usually app-linked or seasonal, and rarely large. The rewards programme is the more dependable saving.',
      },
      {
        q: 'Is Viator more expensive than booking direct?',
        a: 'Sometimes, because the operator pays a commission. You are buying the cancellation policy and the review history with the difference.',
      },
      {
        q: 'What happens if the operator cancels?',
        a: 'You are refunded in full. That is the platform’s core guarantee and it is the reason to book through one rather than by e-mail.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'kkday',
    name: 'KKday',
    domain: 'kkday.com',
    siteLabel: 'kkday.com',
    badge: 'KK',
    color: '#1F5C8A',
    category: 'experiences',
    markets: 'Worldwide, strongest in East and Southeast Asia',
    blurb: 'Taiwan-based activity platform with aggressive coupon and credit mechanics.',
    about: [
      'KKday is a Taiwanese travel experience platform covering tours, tickets, transport and eSIMs, with a catalogue concentrated on Japan, Taiwan, Korea, Hong Kong and Southeast Asia.',
      'It competes with Klook directly and discounts to match: continuous coupon codes, a points system, seasonal campaigns and app-only pricing. Because the two platforms carry a lot of the same operators, checking both for the same activity is worth the minute it takes.',
    ],
    offers: [
      {
        id: 'kkday-coupons',
        kind: 'deal',
        value: 'Coupons',
        title: 'Coupon centre with market-specific codes',
        detail: 'Codes are collected to your account and applied at checkout, refreshed regularly.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'kkday-points',
        kind: 'deal',
        value: 'Member',
        title: 'Points on completed bookings and reviews',
        detail: 'Convert to credit against later bookings; reviews earn as well.',
        checked: CHECKED,
      },
      {
        id: 'kkday-campaigns',
        kind: 'deal',
        value: 'Sale',
        title: 'Seasonal destination campaigns',
        detail:
          'Deep, time-boxed discounts on a single destination — usually the largest reductions on the platform.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Check KKday and Klook side by side',
        body: 'Same operators, different promotions. The gap on an identical tour is often meaningful.',
      },
      {
        title: 'Collect the coupon before searching',
        body: 'Coupons attach to the account and apply at checkout. Finding one after you have paid does nothing.',
      },
      {
        title: 'Voucher redemption rules vary',
        body: 'Some tickets are scanned from the phone, some need exchanging at a counter. Read which before you plan the morning.',
      },
    ],
    facts: [
      { label: 'Base', value: 'Taiwan' },
      { label: 'Coverage', value: 'Worldwide; deepest in East and Southeast Asia' },
      { label: 'Codes', value: 'Frequent, market-specific' },
      { label: 'Also sells', value: 'eSIMs, transport passes, airport transfers' },
    ],
    faq: [
      {
        q: 'Is KKday legitimate?',
        a: 'Yes — it is an established regional platform, listed in Taiwan, and one of the two main players across East Asian activities.',
      },
      {
        q: 'Do KKday codes stack with points?',
        a: 'Usually yes, since points apply as a credit line rather than a percentage. Two percentage codes will not stack.',
      },
      {
        q: 'Which is better, KKday or Klook?',
        a: 'Neither consistently. They carry overlapping inventory with different promotions, so compare the specific activity rather than picking a platform.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'vegas-com',
    name: 'Vegas.com',
    domain: 'vegas.com',
    siteLabel: 'vegas.com',
    badge: 'VG',
    color: '#8A2338',
    category: 'experiences',
    markets: 'United States — Las Vegas specifically',
    blurb: 'Single-destination specialist where bundling the hotel and the show is the saving.',
    about: [
      'Vegas.com sells hotels, shows, tours and attractions for one city. That focus is the reason to use it: the inventory and the packaging logic are built around how people actually book a Las Vegas trip.',
      'The discount mechanic is bundling. Hotel plus show, hotel plus flight, or a multi-show package prices below the components, because the hotel rate inside a package is opaque and can be discounted without publishing a lower nightly rate. Resort fees, which are charged at the property regardless, are the thing that undoes an apparent bargain.',
    ],
    offers: [
      {
        id: 'vegas-packages',
        kind: 'deal',
        value: 'Bundle',
        title: 'Hotel-plus-show and hotel-plus-flight packages',
        detail:
          'The core saving. Packaged rates are usually below the same hotel booked alone plus tickets bought separately.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'vegas-show-deals',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Show and attraction discounts, including midweek pricing',
        detail:
          'Weeknight shows are materially cheaper than weekends for the same seat. The calendar is the discount.',
        checked: CHECKED,
      },
      {
        id: 'vegas-signup',
        kind: 'deal',
        value: 'New customer',
        title: 'Email signup and seasonal promotional codes',
        detail: 'The site issues codes fairly regularly, usually with a minimum spend.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Add the resort fee before comparing',
        body: 'Nightly resort fees are collected at the hotel and are not always in the quoted rate. They change which hotel is cheapest.',
      },
      {
        title: 'Midweek is a different city, price-wise',
        body: 'Rooms and shows both drop sharply Sunday to Thursday. Shifting a trip by two days beats every code on this page.',
      },
      {
        title: 'Check the seat map, not the ticket tier',
        body: 'Show pricing tiers hide big differences in sightline. The map is worth the extra minute.',
      },
    ],
    facts: [
      { label: 'Destination', value: 'Las Vegas only' },
      { label: 'Best mechanic', value: 'Packages' },
      { label: 'Watch out for', value: 'Resort fees charged at the property' },
      { label: 'Cheapest days', value: 'Sunday to Thursday' },
    ],
    faq: [
      {
        q: 'Are Vegas.com prices better than booking the hotel direct?',
        a: 'On a package, frequently yes. On a room alone, often not — and a direct booking earns the casino’s loyalty status, which has its own value.',
      },
      {
        q: 'Are resort fees included?',
        a: 'Usually not in the headline rate. They are charged at check-in and can be a substantial share of a cheap room.',
      },
      {
        q: 'Can I get refunds on show tickets?',
        a: 'Generally not — live entertainment tickets are usually final sale. Check the specific show before buying.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'fever',
    name: 'Fever',
    domain: 'feverup.com',
    siteLabel: 'feverup.com',
    badge: 'FV',
    color: '#B01E5A',
    category: 'experiences',
    markets: 'Worldwide — city-by-city, strongest in the US and Western Europe',
    blurb: 'City events platform where early-bird tiers are the discount.',
    about: [
      'Fever sells tickets to city experiences — candlelight concerts, immersive exhibitions, pop-up dining, seasonal light trails — many of them produced by Fever itself rather than by third parties.',
      'Because much of the inventory is its own, pricing is tiered by time rather than discounted by code: early-bird tiers sell out and are replaced by higher ones. Buying the week tickets go on sale is the saving. Codes exist, mostly as first-purchase offers, and are small.',
    ],
    offers: [
      {
        id: 'fever-earlybird',
        kind: 'deal',
        value: 'Member',
        title: 'Early-bird ticket tiers',
        detail:
          'Prices step up as tiers sell out. For a popular event the first release is meaningfully cheaper than the last.',
        checked: CHECKED,
        best: true,
      },
      {
        id: 'fever-first',
        kind: 'deal',
        value: 'App only',
        title: 'First-purchase discount in the app',
        detail: 'A modest welcome offer for new accounts, applied at checkout.',
        checked: CHECKED,
      },
      {
        id: 'fever-weekday',
        kind: 'deal',
        value: 'Member',
        title: 'Weekday and off-peak session pricing',
        detail:
          'The same experience on a Tuesday afternoon is routinely a tier or two below a Saturday evening.',
        checked: CHECKED,
      },
    ],
    savingTips: [
      {
        title: 'Set an alert for the event, not a code',
        body: 'Fever’s pricing rewards being early. A notification when tickets drop is worth more than any coupon.',
      },
      {
        title: 'Check what the ticket includes',
        body: 'Some listings include a drink or a guided element and some do not, at similar prices.',
      },
      {
        title: 'Read the transfer policy before buying gifts',
        body: 'Not all tickets are transferable or date-changeable, which matters if you are buying for someone else.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'City-by-city worldwide' },
      { label: 'Inventory', value: 'Much of it produced by Fever itself' },
      { label: 'Pricing', value: 'Tiered by release, not by code' },
      { label: 'Refunds', value: 'Limited — check the listing before buying' },
    ],
    faq: [
      {
        q: 'Do Fever promo codes work?',
        a: 'The first-purchase code does, and it is small. The real saving is buying in the first tier of a release.',
      },
      {
        q: 'Can I change the date of a Fever ticket?',
        a: 'Sometimes, subject to the listing’s policy and availability. Assume not unless the listing says otherwise.',
      },
      {
        q: 'Is Fever the organiser or a reseller?',
        a: 'Both, depending on the event. Many of the best-known formats are produced by Fever, which is why they are not available anywhere else.',
      },
    ],
    updated: CHECKED,
  },
  {
    slug: 'stubhub',
    name: 'StubHub',
    domain: 'stubhub.com',
    siteLabel: 'stubhub.com',
    badge: 'SH',
    color: '#3B0A70',
    category: 'experiences',
    markets: 'United States and Canada',
    blurb: 'Ticket resale marketplace — the fee at the end is most of the story.',
    about: [
      'StubHub is a secondary ticketing marketplace: individuals and professional resellers list tickets they hold, and buyers pay above or below face value depending on demand. It is not the box office and it does not set prices.',
      'The thing to understand before using any resale platform is the fee. A service fee and a delivery fee are added at the final step, and they are a substantial percentage of the ticket — a listing that looks competitive against another site can lose once both totals are visible. Enable all-in pricing where the site offers it, and always compare at the last screen rather than the first.',
    ],
    offers: [
      {
        id: 'stubhub-allin',
        kind: 'deal',
        value: 'Compare',
        title: 'Turn on all-in pricing before comparing',
        detail:
          'Fees are a large share of the total here. Comparing listing prices without them is comparing nothing.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'stubhub-latedrops',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Prices often fall close to the event',
        detail:
          'Resellers holding unsold inventory cut prices as the date approaches. Risky on a sell-out, effective on most events.',
        checked: CHECKED_R2,
      },
      {
        id: 'stubhub-app',
        kind: 'deal',
        value: 'App only',
        title: 'App promotions and price alerts',
        detail:
          'Alerts on a specific event are more useful than any code, because timing is the lever.',
        checked: CHECKED_R2,
      },
      {
        id: 'stubhub-guarantee',
        kind: 'deal',
        value: 'Protection',
        title: 'Buyer guarantee on valid tickets',
        detail:
          'The platform undertakes to replace or refund if tickets are invalid or do not arrive. It is the reason to use a marketplace rather than a stranger.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Check the box office first, every time',
        body: 'Official tickets at face value are frequently still available for events people assume are sold out. Resale should be the fallback.',
      },
      {
        title: 'Compare at the payment screen',
        body: 'Fees differ between resale platforms. The listing price tells you almost nothing about the total.',
      },
      {
        title: 'Wait if the event is not a sell-out',
        body: 'Unsold resale inventory gets cheaper as the date approaches. On a genuinely sold-out show, the opposite happens.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'United States, Canada' },
      { label: 'Model', value: 'Secondary marketplace — resellers set prices' },
      { label: 'Fees', value: 'Service and delivery fees added at checkout' },
      { label: 'Protection', value: 'Buyer guarantee on validity and delivery' },
    ],
    faq: [
      {
        q: 'Why is the final price so much higher than the listing?',
        a: 'Service and delivery fees are added at the last step and they are a substantial percentage. Switch on all-in pricing so you are comparing totals from the start.',
      },
      {
        q: 'Is buying resale safe?',
        a: 'On a marketplace with a buyer guarantee, reasonably — you are covered if the tickets are invalid or do not arrive. Buying from a stranger directly has no such protection.',
      },
      {
        q: 'Should I buy early or late?',
        a: 'Late, if the event is not selling out — resellers cut prices to clear inventory. Early, if it is, because the opposite happens.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'viagogo',
    name: 'viagogo',
    domain: 'viagogo.com',
    siteLabel: 'viagogo.com',
    badge: 'VG',
    color: '#1F5C8A',
    category: 'experiences',
    markets: 'Worldwide',
    blurb: 'Global ticket resale — read the total, and check the box office first.',
    about: [
      'viagogo is a worldwide secondary ticketing marketplace where resellers list tickets for concerts, sport and theatre. Prices are set by sellers and can be well above or below face value depending on demand.',
      'Resale platforms have been the subject of consumer-protection scrutiny in several countries over price presentation and fee disclosure, and the practical lesson for a buyer is simple: the number that matters is the one on the final payment screen, after service and delivery fees. Always price the official box office first — on a large share of events, face-value tickets are still available.',
    ],
    offers: [
      {
        id: 'viagogo-total',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare the all-in total, not the listing',
        detail:
          'Fees are added late and are significant. Two platforms with similar listings can differ a lot at checkout.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'viagogo-boxoffice',
        kind: 'deal',
        value: 'Compare',
        title: 'Check the official seller before buying resale',
        detail:
          'Face-value tickets are often still on sale for events that appear sold out. Resale should be the second stop.',
        checked: CHECKED_R2,
      },
      {
        id: 'viagogo-late',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Prices can fall close to the date',
        detail: 'Unsold resale inventory is cut as the event approaches, on anything not sold out.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Know what you are buying',
        body: 'This is a resale marketplace, not the venue. The seller is another person or a professional trader.',
      },
      {
        title: 'Screenshot the listing and the total',
        body: 'On a resale purchase, your record of what was promised is what a dispute rests on.',
      },
      {
        title: 'Check the delivery method and timing',
        body: 'Some tickets transfer only days before the event. If you are travelling, confirm you will have them in time.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Secondary ticket marketplace, worldwide' },
      { label: 'Prices', value: 'Set by sellers — above or below face value' },
      { label: 'Fees', value: 'Service and delivery fees added at checkout' },
      { label: 'First check', value: 'The official box office' },
    ],
    faq: [
      {
        q: 'Is viagogo the official ticket seller?',
        a: 'No. It is a resale marketplace where individuals and traders list tickets they already hold. Always check the official seller before buying here.',
      },
      {
        q: 'Why did the price change at checkout?',
        a: 'Service and delivery fees are applied at the final step. Compare platforms on the payment screen rather than the search results.',
      },
      {
        q: 'Will my tickets definitely work?',
        a: 'The platform operates a guarantee covering invalid or undelivered tickets. Keep your confirmation and check the delivery timing well before you travel.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'tiqets',
    name: 'Tiqets',
    domain: 'tiqets.com',
    siteLabel: 'tiqets.com',
    badge: 'TQ',
    color: '#1F4FB0',
    category: 'experiences',
    markets: 'Worldwide, strongest across Europe',
    blurb: 'Museum and attraction tickets on your phone — the skip-the-queue is the product.',
    about: [
      'Tiqets sells instant mobile tickets to museums, attractions and landmarks, strongest across European city destinations. Tickets arrive immediately and are scanned from the phone, which is the entire proposition.',
      'On price it is usually close to the venue’s own website, because attractions control their pricing. What you are buying is the queue: timed entry booked in advance at a busy museum saves an hour that no discount compensates for. City cards and combination tickets are the real saving when you are visiting several places in a day.',
    ],
    offers: [
      {
        id: 'tiqets-combo',
        kind: 'deal',
        value: 'Bundle',
        title: 'City cards and combination tickets',
        detail:
          'Two or three attractions in a day priced well below individual entry. The genuine discount on this platform.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'tiqets-firstbooking',
        kind: 'deal',
        value: 'New customer',
        title: 'First-booking discount for new customers',
        detail: 'A capped welcome discount, applied at checkout.',
        checked: CHECKED_R2,
      },
      {
        id: 'tiqets-timed',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Off-peak timed slots',
        detail:
          'Early and late entry slots are cheaper at many attractions and are also the quietest times to visit.',
        checked: CHECKED_R2,
      },
      {
        id: 'tiqets-instant',
        kind: 'deal',
        value: 'Free',
        title: 'Instant mobile tickets, no printing',
        detail:
          'Booked minutes before entry if a plan changes, which is the practical advantage over the venue’s own advance system.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Compare the venue’s own site',
        body: 'On a single attraction the museum often charges the same or less. Tiqets wins on combinations and on last-minute availability.',
      },
      {
        title: 'Check whether entry is free on certain days',
        body: 'Many European museums have free days or evenings. Worth a search before buying anything.',
      },
      {
        title: 'Book the timed slot, then plan the day around it',
        body: 'Timed entry is the product. Turning up outside your slot at a busy attraction can mean the queue anyway.',
      },
    ],
    facts: [
      { label: 'Coverage', value: 'Worldwide, deepest in European cities' },
      { label: 'Delivery', value: 'Instant mobile tickets' },
      { label: 'Real saving', value: 'City cards and combination tickets' },
      { label: 'Cancellation', value: 'Varies per attraction — check the listing' },
    ],
    faq: [
      {
        q: 'Is Tiqets cheaper than the museum’s website?',
        a: 'On a single ticket, usually about the same. On a combination or a city card covering several attractions, meaningfully cheaper.',
      },
      {
        q: 'Do I need to print anything?',
        a: 'No — tickets are scanned from your phone, which is the main practical advantage over booking through some venue systems.',
      },
      {
        q: 'Can I cancel?',
        a: 'It depends on the attraction, not on Tiqets. The cancellation window is stated on each listing and ranges from flexible to non-refundable.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'platinumlist',
    name: 'Platinumlist',
    domain: 'platinumlist.net',
    siteLabel: 'platinumlist.net',
    badge: 'PL',
    color: '#1A1A1A',
    category: 'experiences',
    markets: 'UAE, Saudi Arabia, Qatar and the wider Gulf',
    blurb: 'The Gulf’s events platform — early-bird tiers are the discount.',
    about: [
      'Platinumlist is the main ticketing platform across the Gulf: concerts, festivals, theme parks, brunches, sport and attractions in the UAE, Saudi Arabia and Qatar. For many events in the region it is the official seller rather than a resale marketplace, which is an important difference.',
      'Because it is primary ticketing, pricing works by release tier rather than by coupon: early-bird allocations sell at a lower price and step up as they sell out. Buying in the first release is the discount, and no code replicates it.',
    ],
    offers: [
      {
        id: 'platinumlist-earlybird',
        kind: 'deal',
        value: 'Sale',
        title: 'Early-bird release tiers',
        detail:
          'Prices step up as allocations sell. The first release is the cheapest the ticket will ever be.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'platinumlist-group',
        kind: 'deal',
        value: 'Bundle',
        title: 'Group and package tickets',
        detail:
          'Table bookings, group rates and brunch packages price well below individual entry per head.',
        checked: CHECKED_R2,
      },
      {
        id: 'platinumlist-app',
        kind: 'deal',
        value: 'App only',
        title: 'App alerts and exclusive presales',
        detail:
          'Presale access matters more than a discount on events that sell out in the first hour.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Buy in the first release',
        body: 'Tiered pricing means waiting costs money on anything popular. Set an alert for the on-sale rather than the price.',
      },
      {
        title: 'Group tickets are per head cheaper',
        body: 'Brunches and table bookings especially. Organise the group before buying individually.',
      },
      {
        title: 'Check the venue’s own channel for attractions',
        body: 'For theme parks and permanent attractions the operator sometimes sells cheaper direct.',
      },
    ],
    facts: [
      { label: 'Markets', value: 'UAE, Saudi Arabia, Qatar and the wider Gulf' },
      { label: 'Model', value: 'Primary ticketing for most events' },
      { label: 'Pricing', value: 'Tiered by release, not by coupon' },
      { label: 'Refunds', value: 'Set per event by the organiser' },
    ],
    faq: [
      {
        q: 'Is Platinumlist official?',
        a: 'For most Gulf events, yes — it is the primary seller rather than a resale marketplace, which is why prices follow release tiers.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Refund terms are set by each event organiser and stated on the listing. Many live events are non-refundable.',
      },
      {
        q: 'When should I buy?',
        a: 'As early as possible on anything popular. Tiered pricing means the first release is the lowest price, not the last.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'ticombo',
    name: 'Ticombo',
    domain: 'ticombo.com',
    siteLabel: 'ticombo.com',
    badge: 'TB',
    color: '#1F6B5A',
    category: 'experiences',
    markets: 'Worldwide, strongest in Europe',
    blurb: 'Fan-to-fan ticket marketplace with a guarantee — compare the total.',
    about: [
      'Ticombo is a ticket marketplace where fans and sellers list tickets for concerts, sport and theatre, mostly across Europe. It positions itself against the larger resale platforms on fee transparency and on a buyer guarantee.',
      'The advice for any resale platform holds here: check the official seller first, then compare the all-in total rather than the listing price, and keep your confirmation. The guarantee is what separates a marketplace from buying from a stranger, and it is the reason to use one at all.',
    ],
    offers: [
      {
        id: 'ticombo-total',
        kind: 'deal',
        value: 'Compare',
        title: 'Compare the checkout total across platforms',
        detail:
          'Fee structures differ between resale sites. The listing price is not the comparison.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'ticombo-guarantee',
        kind: 'deal',
        value: 'Protection',
        title: 'Buyer guarantee on validity and delivery',
        detail: 'Replacement or refund if tickets are invalid or fail to arrive.',
        checked: CHECKED_R2,
      },
      {
        id: 'ticombo-late',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Late listings on non-sold-out events',
        detail: 'Sellers cut prices as the date approaches when demand has not materialised.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Official first, resale second',
        body: 'Face-value tickets are frequently still available. Resale is a fallback, not a starting point.',
      },
      {
        title: 'Confirm the delivery method and date',
        body: 'Electronic transfers sometimes happen only days before the event. Check that against your travel plans.',
      },
      {
        title: 'Keep every confirmation',
        body: 'A guarantee claim rests on what you can show was promised.',
      },
    ],
    facts: [
      { label: 'Model', value: 'Fan-to-fan resale marketplace' },
      { label: 'Coverage', value: 'Worldwide, strongest in Europe' },
      { label: 'Protection', value: 'Buyer guarantee' },
      { label: 'First check', value: 'The official box office' },
    ],
    faq: [
      {
        q: 'Is Ticombo an official ticket seller?',
        a: 'No — it is a resale marketplace. Check the event’s official seller before buying here.',
      },
      {
        q: 'What if my tickets do not arrive?',
        a: 'The buyer guarantee covers replacement or refund. Raise it through the platform and keep your confirmation.',
      },
      {
        q: 'Are the fees lower than the big platforms?',
        a: 'It positions itself that way, but the only reliable test is comparing the final payment screen on both for your specific event.',
      },
    ],
    updated: CHECKED_R2,
  },
  {
    slug: 'rayna-tours',
    name: 'Rayna Tours',
    domain: 'raynatours.com',
    siteLabel: 'raynatours.com',
    badge: 'RT',
    color: '#B0451A',
    category: 'experiences',
    markets: 'UAE primarily, plus other destinations',
    blurb: 'Dubai tours and attraction tickets — combos and transfers are the value.',
    about: [
      'Rayna Tours is a Dubai-based tour operator and attraction ticket seller, covering desert safaris, city tours, theme parks, dhow cruises and airport transfers across the UAE and some other destinations.',
      'Being an operator rather than a pure marketplace changes the economics: it runs many of its own tours and buses, so combination packages and tours-with-transfer are priced well below assembling the same day yourself. That, plus off-peak scheduling, is where the saving is — the individual attraction ticket is usually close to the gate price.',
    ],
    offers: [
      {
        id: 'raynatours-combo',
        kind: 'deal',
        value: 'Bundle',
        title: 'Combination tours and multi-attraction packages',
        detail:
          'Two or three attractions with transfers included, priced below the same day bought separately.',
        checked: CHECKED_R2,
        best: true,
      },
      {
        id: 'raynatours-transfer',
        kind: 'deal',
        value: 'Bundle',
        title: 'Tours with hotel pickup included',
        detail:
          'Transport in the UAE is a real cost. A tour with transfers included frequently beats a cheaper ticket plus taxis.',
        checked: CHECKED_R2,
      },
      {
        id: 'raynatours-offpeak',
        kind: 'deal',
        value: 'Off-peak',
        title: 'Off-season and weekday pricing',
        detail:
          'Dubai tourism is intensely seasonal. Summer and weekday rates are far below peak-season weekends.',
        checked: CHECKED_R2,
      },
      {
        id: 'raynatours-earlybird',
        kind: 'deal',
        value: 'New customer',
        title: 'Advance-booking and first-order discounts',
        detail: 'Booking ahead is cheaper than at the desk, and new customers get a welcome offer.',
        checked: CHECKED_R2,
      },
    ],
    savingTips: [
      {
        title: 'Count the transfers',
        body: 'A cheaper ticket without pickup plus two taxis across Dubai is not cheaper. Compare the whole day.',
      },
      {
        title: 'Avoid peak-season weekends',
        body: 'The same desert safari costs substantially less midweek and out of season, and is more pleasant.',
      },
      {
        title: 'Check what a "safari" includes',
        body: 'Dune drive, camel ride, dinner, entertainment — packages differ widely at similar prices.',
      },
    ],
    facts: [
      { label: 'Market', value: 'UAE primarily, plus other destinations' },
      { label: 'Model', value: 'Tour operator plus attraction ticketing' },
      { label: 'Best value', value: 'Combination packages with transfers' },
      { label: 'Seasonality', value: 'Strong — off-season is much cheaper' },
    ],
    faq: [
      {
        q: 'Is it cheaper than buying attraction tickets directly?',
        a: 'On single tickets, rarely. On combinations and on anything needing transport across Dubai, usually yes.',
      },
      {
        q: 'Is hotel pickup included?',
        a: 'On many tours, and it is stated per listing. It is worth more than it looks given taxi costs and distances in the UAE.',
      },
      {
        q: 'When is the cheapest time to visit?',
        a: 'Summer, when demand collapses because of the heat, and midweek at any time of year.',
      },
    ],
    updated: CHECKED_R2,
  },
]
