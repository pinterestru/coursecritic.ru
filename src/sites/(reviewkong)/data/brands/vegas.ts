/**
 * Brand page data for Vegas.com (route: /brands/vegas).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/VEGAS.com — founding year, ownership history,
 *     the 2023 Vivid Seats acquisition, the Casino Travel & Tours retail desks
 *   - https://www.vegas.com/best-price-guarantee/ — claim window, exclusions,
 *     verification requirement
 *   - https://www.trustpilot.com/review/www.vegas.com — TrustScore and review count
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const vegas: BrandPage = {
  slug: 'vegas',
  providerId: 'vegas',
  metaTitle: 'Vegas.com review 2026 — hotels, shows and the fine print',
  metaDescription:
    'An independent Vegas.com review: what it actually sells beyond hotel rooms, how the Best Price Guarantee works, and the cancellation rules that vary by product.',
  intro:
    'Vegas.com is not a general booking site. It sells exactly one destination: hotel rooms, show tickets, tours, dining and attraction passes for Las Vegas, and nothing else. That narrowness is the point — the catalogue of shows and activities is wider than any general OTA carries for the city, but the trade-off is a confusing set of cancellation rules that differ by product type.',
  about: [
    'Vegas.com launched in 1998 as a destination-specific online travel agency built around a single city. It has changed hands twice: Remark Holdings bought it in 2015, and Vivid Seats, the ticket-resale marketplace, acquired it in November 2023. That last move matters — Vegas.com now sits inside a ticketing company, which shows in how heavily the site pushes shows and events alongside rooms.',
    'Beyond the website, the company runs Casino Travel & Tours, a retail and concierge desk network with roughly 70 locations across Southern Nevada — hotel lobbies, kiosks and tour counters where staff sell the same inventory in person. Few destination OTAs still maintain a physical footprint like this; it is a legacy of the pre-app era that Vegas.com never wound down.',
    'The catalogue spans hotel rooms, air-hotel packages, show tickets, attraction and tour passes, dining reservations and golf. Pricing is Las Vegas market pricing: resort fees, parking charges and dynamic show pricing all apply on top of the headline number, and none of that is Vegas.com-specific — it is how the city itself prices things.',
  ],
  facts: [
    { label: 'Founded', value: '1998' },
    { label: 'Coverage', value: 'Las Vegas only' },
    { label: 'Owner', value: 'Vivid Seats (since 2023)' },
    { label: 'Retail desks', value: '~70 in Southern Nevada' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'There is no membership tier — every visitor sees the same prices. The Best Price Guarantee is the only lever if you find the same booking cheaper elsewhere, and it comes with conditions worth reading first.',
    items: [
      {
        name: 'Hotel packages',
        price: 'Market rate + resort fee',
        detail:
          'Resort fees are charged by the property, not Vegas.com, and are rarely included in the headline price. Best Price Guarantee claims must be made inside the hotel’s own cancellation window.',
        pick: true,
      },
      {
        name: 'Show and attraction tickets',
        price: 'Dynamic, set per event',
        detail:
          'Prices move with demand like any Vegas box office. A Best Price Guarantee claim here must be filed within 24 hours of booking, not the wider hotel window.',
      },
      {
        name: 'Tours and dining',
        price: 'Set per operator',
        detail:
          'Vegas.com resells third-party tour operators and restaurant reservations, so cancellation terms follow whatever that operator allows, not a single house policy.',
      },
    ],
  },
  pros: [
    {
      title: 'The deepest single-city catalogue there is',
      body: 'Because Vegas.com only covers one destination, it lists more shows, tours and attraction passes for that city than a general OTA bothers to carry. For entertainment specifically, it is hard to beat.',
    },
    {
      title: 'A genuine price-match option',
      body: 'The Best Price Guarantee is a real, checkable mechanism, not a marketing line — Vegas.com verifies competing prices itself rather than accepting a screenshot, which cuts both ways but is at least consistent.',
    },
    {
      title: 'Human help still exists',
      body: 'Roughly 70 Casino Travel & Tours desks around Southern Nevada mean a traveller with a booking problem can walk up to a person, not just wait on hold — unusual for an online-first agency.',
    },
    {
      title: 'Backed by a company that lives in ticketing',
      body: 'Vivid Seats’ ownership since 2023 means the show-ticket side of the business, historically the trickiest part of any Vegas booking, is run by people whose main business is exactly that.',
    },
  ],
  cons: [
    {
      title: 'Cancellation rules differ by product',
      body: 'A hotel room, a show ticket, an attraction pass and a tour voucher can all carry different cancellation deadlines and penalties on the same order. Read each listing separately before assuming a blanket policy applies.',
    },
    {
      title: 'The Best Price Guarantee has real teeth, against you',
      body: 'It only pays out on an exact match — same room type, same rate plan, same refund terms — and Vegas.com independently verifies the competing price rather than taking your word for it. Many claims will not qualify.',
    },
    {
      title: 'It cannot help anywhere but Las Vegas',
      body: 'Vegas.com is not a booking option for any other trip. If a traveller wants one account for a Vegas leg and a flight elsewhere, they are booking that other leg somewhere else regardless.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 4.6, note: '175,000+ reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'strong on catalogue depth, marked down for inconsistent cancellation terms across product types',
    },
  ],
  bestFor: [
    'Anyone planning a Las Vegas trip who wants shows and tours alongside the hotel',
    'Travellers who value a Best Price Guarantee they can actually invoke',
    'People who prefer a phone number or a physical desk over app-only support',
    'Vegas regulars who want one place for dining, golf and attraction passes',
  ],
  notFor: [
    'Any trip that is not to Las Vegas — the catalogue is single-city only',
    'Anyone who wants one uniform cancellation policy across every booking',
    'Bargain hunters who assume resort fees and parking are already included',
  ],
  faq: [
    {
      q: 'Does Vegas.com book anything outside Las Vegas?',
      a: 'No. It is a destination-specific agency; every hotel, show, tour and package on the site is for Las Vegas. Book flights and any other leg of a trip elsewhere.',
    },
    {
      q: 'Are resort fees included in the price shown?',
      a: 'Not reliably. Resort fees are set by the hotel property, not Vegas.com, and are commonly billed separately at check-in. Check the listing’s fine print before assuming the headline price is final.',
    },
    {
      q: 'How does the Best Price Guarantee actually work?',
      a: 'You find an identical booking — same room type, rate plan and refund terms — cheaper elsewhere, and Vegas.com independently verifies it before refunding the difference. Hotel claims must fall inside the hotel’s cancellation window; every other product gives you 24 hours from booking.',
    },
    {
      q: 'Can I cancel a show ticket the same way as a hotel room?',
      a: 'No. Vegas.com states plainly that cancellation terms are listing-specific — hotel rooms, shows, attraction passes and tour vouchers each carry their own deadline and penalty. Check the individual booking, not a general policy page.',
    },
    {
      q: 'Who owns Vegas.com?',
      a: 'Vivid Seats, the ticket-resale marketplace, acquired Vegas.com in November 2023. Before that it was owned by Remark Holdings, which bought it in 2015.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'vegas.com',
}
