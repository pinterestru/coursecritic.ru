/**
 * Brand page data for Cleartrip (route: /brands/cleartrip).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Cleartrip and https://techcrunch.com/2021/04/15/flipkart-to-acquire-online-travel-firm-cleartrip/
 *     — founded 2006 in Mumbai by Stuart Crighton, Hrush Bhatt and Matthew
 *     Spacie; acquired outright by Flipkart (majority-owned by Walmart) in 2021
 *   - https://www.arabianbusiness.com/gcc/uae/wego-announces-acquisition-of-cleartrips-middle-east-business-from-indias-flipkart
 *     — the 2022 sale of Cleartrip's Middle East business (the cleartrip.ae
 *     brand) to Wego; cleartrip.com is now an India-focused product
 *   - https://www.cleartrip.com/faq/account/tour/flights_cancellation.shtml and
 *     scribd-hosted Cleartrip cancellation terms — the per-passenger
 *     cancellation and amendment fee structure, in rupees
 *   - https://www.hotelierindia.com/business/cleartrip-extends-its-travel-benefits-to-flipkarts-and-myntras-reward-programmes
 *     and https://travelobiz.com/cleartrip-tie-ups-with-payback-to-offer-loyalty-program/
 *     — Cleartrip has no standalone points programme of its own; it plugs into
 *     Flipkart Plus/Myntra Insiders and the Payback India multi-brand scheme
 *   - https://www.trustpilot.com/review/www.cleartrip.com — TrustScore and
 *     review volume (verified via cached search results after the live page
 *     was inaccessible directly; note cleartrip.ae, now Wego-owned, is a
 *     separate Trustpilot listing and was not used here)
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const cleartrip: BrandPage = {
  slug: 'cleartrip',
  providerId: 'cleartrip',
  metaTitle: 'Cleartrip review 2026 — fees, refunds and who owns it now',
  metaDescription:
    'An independent Cleartrip review: the Flipkart-owned OTA’s cancellation fees, why it no longer covers the Middle East, and a Trustpilot record worth reading.',
  intro:
    'Cleartrip is a Mumbai-founded online travel agency, wholly owned by Flipkart (itself majority-owned by Walmart) since 2021. It used to run a sizeable Middle East business too, but that was sold to Wego in 2022, so cleartrip.com today is effectively an India-market product for flights, hotels, trains and buses. It has no loyalty programme of its own, relying instead on Flipkart and Payback points.',
  about: [
    'Founded in July 2006 in Mumbai by Stuart Crighton, Hrush Bhatt and Matthew Spacie, Cleartrip built an early reputation on a simpler booking interface than the Indian OTA norm at the time favoured. Flipkart acquired 100% of the company in April 2021, and Cleartrip continues to operate as a distinct consumer brand under that ownership rather than being merged wholesale into Flipkart’s core shopping marketplace, keeping its own site, app and booking policies.',
    'Cleartrip expanded into the UAE and wider Gulf market from 2012 and at one point claimed a majority share of GCC online travel bookings, including a 2018 acquisition of Saudi-based Flyin.com that helped it grow further in that market. That Middle East business was sold to Dubai-based Wego in 2022, and the cleartrip.ae brand now operates independently of cleartrip.com under Wego’s ownership rather than Flipkart’s. Anyone researching Cleartrip in the Middle East today is, in practical terms, looking at a different company entirely.',
    'On flights, Cleartrip charges a non-refundable per-passenger cancellation fee that is higher for international bookings than domestic ones, plus a separate amendment fee for date or time changes, both charged on top of whatever the airline itself levies under its own fare rules. Cleartrip has no proprietary rewards currency of its own; instead it extends booking discounts to Flipkart Plus and Myntra Insiders members and lets users earn and redeem Payback India loyalty points on every transaction made through the site or app.',
  ],
  facts: [
    { label: 'Founded', value: '2006, Mumbai' },
    { label: 'Owner', value: 'Flipkart (Walmart group)' },
    { label: 'Market', value: 'India-focused since 2022' },
    { label: 'Loyalty', value: 'Via Flipkart Plus / Payback' },
  ],
  plans: {
    title: 'What gets charged beyond the fare',
    note: 'Cancellation and amendment fees are charged per passenger per sector and are non-refundable, separate from anything the airline itself charges for the same change.',
    items: [
      {
        name: 'Standard flight booking',
        price: 'Fare plus airline charges as applicable',
        detail:
          'No platform booking fee on the base fare itself, but cancellations and changes carry Cleartrip’s own charges described below.',
        pick: true,
      },
      {
        name: 'Cancellation',
        price: 'A non-refundable fee per passenger per sector',
        detail:
          'Higher for international sectors than domestic ones, and charged in addition to whatever cancellation penalty the airline applies under its own fare rules.',
      },
      {
        name: 'Date or time amendment',
        price: 'A separate non-refundable handling fee',
        detail:
          'You can change date or time on the same sector; you cannot change the route. Airline fare-difference and change charges apply on top.',
      },
      {
        name: 'Flipkart Plus / Payback benefits',
        price: 'Free, via an existing Flipkart or Payback account',
        detail:
          'No Cleartrip-specific points currency. Flipkart Plus members get preferential cancellation pricing on some bookings; Payback India members earn and redeem points on every transaction.',
      },
    ],
  },
  pros: [
    {
      title: 'Owned by a company with real financial weight',
      body: 'Flipkart’s backing, and Walmart’s majority ownership behind that, gives Cleartrip a level of corporate stability and staying power that many standalone regional OTAs simply cannot claim for themselves.',
    },
    {
      title: 'A cleaner interface than the Indian OTA norm',
      body: 'Cleartrip’s original reputation was built on interface simplicity, and the booking flow today is still noticeably less cluttered with cross-sell prompts and pop-ups than several competitors covered in this category.',
    },
    {
      title: 'Fee amounts are published rather than hidden',
      body: 'Cancellation and amendment charges are stated in rupees directly on Cleartrip’s own policy pages rather than only surfacing at the final checkout step, which makes comparison shopping meaningfully easier before you commit.',
    },
    {
      title: 'Cross-ecosystem value through Flipkart and Payback',
      body: 'Existing Flipkart Plus or Payback India members get real, usable discounts and points value layered onto Cleartrip bookings automatically, without needing to sign up for a separate rewards scheme first.',
    },
  ],
  cons: [
    {
      title: 'A Trustpilot record dominated by refund complaints',
      body: 'Cleartrip is rated "Bad" on Trustpilot, with reviewers most commonly describing unconfirmed bookings, slow refunds that take weeks to resolve, and unresponsive customer support precisely during travel disruption, when it matters most.',
    },
    {
      title: 'No longer relevant outside India',
      body: 'The Middle East business that once made Cleartrip a genuine regional player across the Gulf was sold outright to Wego in 2022. Searching for Cleartrip in the UAE or Saudi Arabia today finds a different company.',
    },
    {
      title: 'Two separate fees just to change your mind',
      body: 'Cancelling and amending a flight are charged as two distinct, non-refundable line items, both stacked on top of whatever penalty the airline itself applies, which adds up quickly on international sectors.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.3, note: 'rated "Bad", over 1,600 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'straightforward booking flow and clear fee disclosure, weighed against a poor support record',
    },
  ],
  bestFor: [
    'India-based travellers who already hold Flipkart Plus or Payback India membership',
    'Bookings you are confident you will not need to change',
    'Buyers who want fees stated up front rather than discovered at checkout',
    'Domestic Indian flights and hotels rather than international itineraries',
  ],
  notFor: [
    'Anyone booking in the UAE or wider Gulf expecting the old Cleartrip service — that is now Wego',
    'Trips likely to need a cancellation or date change on an international sector',
    'Travellers who read Trustpilot first and want a stronger refund track record',
  ],
  faq: [
    {
      q: 'Is Cleartrip still available in the UAE?',
      a: 'Not under Flipkart’s ownership any more. Cleartrip sold its entire Middle East business, including the cleartrip.ae brand and its Gulf customer base, to Dubai-based Wego in 2022. That is now a genuinely separate company under different ownership; cleartrip.com serves only the Indian market today.',
    },
    {
      q: 'How much does it cost to cancel a flight booked on Cleartrip?',
      a: 'A non-refundable per-passenger, per-sector cancellation fee applies, priced noticeably higher on international sectors than on domestic ones, in addition to whatever separate cancellation charge the airline itself levies under its own published fare rules for that specific ticket type and route.',
    },
    {
      q: 'Does Cleartrip have its own loyalty programme?',
      a: 'No, it does not. It has no standalone points currency of its own to accrue, but it extends discounts to Flipkart Plus and Myntra Insiders members and lets users earn and redeem Payback India points on every Cleartrip booking made instead.',
    },
    {
      q: 'Who owns Cleartrip?',
      a: 'Flipkart acquired 100% of Cleartrip’s shareholding in April 2021, taking full ownership of the company outright rather than a partial stake. Flipkart is itself majority-owned by Walmart, giving Cleartrip corporate backing and financial stability well beyond most India-focused online travel agencies operating independently.',
    },
    {
      q: 'Can I change the destination on a booked flight?',
      a: 'No, not directly. Cleartrip’s amendment policy only allows changing the date or time of travel on the same sector already booked; changing the route itself requires cancelling that booking outright and making an entirely new one, not a simple amendment.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'cleartrip.com',
}
