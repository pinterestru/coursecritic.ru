/**
 * Brand page data for viagogo (route: /brands/viagogo).
 *
 * SOURCES — every figure below is taken from these pages:
 *   - https://en.wikipedia.org/wiki/Viagogo and
 *     https://www.prnewswire.com/news-releases/viagogo-completes-acquisition-of-stubhub-301004796.html
 *     — founding year, founder, the 2020 StubHub acquisition and its price
 *   - https://support.viagogo.com/articles/61000309340-what-is-the-viagogo-guarantee
 *     — what the 100% Buyer Guarantee covers and its exceptions
 *   - https://www.deceptive.design/cases/competition-and-markets-authority-v-viagogo
 *     and https://feeds.bbci.co.uk/news/business-49591794 — the UK CMA's 2018
 *     legal action and court-ordered changes
 *   - https://www.iqmagazine.com/2025/11/cma-investigates-secondary-ticketing-platforms/
 *     and https://www.gov.uk/government/news/cma-calls-for-stronger-laws-to-tackle-illegal-ticket-resale
 *     — the CMA's 2025 fee-disclosure investigation covering viagogo and StubHub
 *   - https://www.billboard.com/pro/italian-regulator-fines-viagogo-inflating-ticket-prices-maneskin-dua-lipa-concerts
 *     and https://musically.com/2022/06/27/viagogo-fined-e23-5m-in-italy-over-inflated-ticket-prices/
 *     — the €23.5m AGCOM fine, 131 events, prices up to 6–7x face value
 *   - https://www.trustpilot.com/review/www.viagogo.com — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const viagogo: BrandPage = {
  slug: 'viagogo',
  providerId: 'viagogo',
  metaTitle: 'viagogo review 2026 — resale prices, fees, guarantee',
  metaDescription:
    'An independent viagogo review: how seller-set resale pricing works, where the booking fee is added, and why UK and Italian regulators have acted against it.',
  intro:
    'viagogo is a secondary ticket marketplace: sellers, not viagogo, set the price of every listing, and a booking fee is added on top at checkout. For a sold-out show it is often the only place left to find a genuine ticket, backed by a 100% Buyer Guarantee. It is also a company with a genuine regulatory record — a UK court order, an Italian fine, and an open 2025 fee investigation are worth knowing before you pay.',
  about: [
    'viagogo launched in London in 2006, founded by Eric Baker after he had already built and sold StubHub in the United States. It operates as a marketplace rather than a box office: professional resellers and individual ticket-holders list seats they already hold, at whatever price they choose, and viagogo earns its money through the buyer fee rather than setting any price itself. In February 2020, Baker’s company bought StubHub back from eBay for $4.05 billion, putting the two biggest English-language resale brands under one owner. The sites still run separately, but the commercial pressures behind both are now the same.',
    'Because prices are seller-set, they float with demand instead of tracking face value. A quiet midweek gig can come in below cover price; a sold-out arena show usually runs well above the printed number, and viagogo does not cap it either way. A booking fee is added at checkout on top of whatever the seller asked, and historically that fee has surfaced late in the buying flow rather than in the headline price shown on the listing. Every order carries the 100% Buyer Guarantee: a valid ticket in time for the event, or a replacement or refund if one never arrives.',
    'That fee placement is exactly what regulators have gone after. The UK’s Competition and Markets Authority took legal action against viagogo in 2018 and won a court order forcing changes to how it displayed availability, seat details and fees; the CMA said in 2025 it was still finding gaps and opened a fresh investigation, alongside StubHub, into how both sites disclose checkout fees. Italy’s AGCOM fined the company €23.5 million in 2022 after finding tickets across 131 events listed at up to six or seven times face value.',
  ],
  facts: [
    { label: 'Founded', value: '2006, London' },
    { label: 'Ownership', value: 'Same group as StubHub' },
    { label: 'Pricing', value: 'Seller-set, uncapped' },
    { label: 'Guarantee', value: '100% Buyer Guarantee' },
  ],
  plans: {
    title: 'What actually gets charged',
    note: 'viagogo does not set or cap ticket prices — sellers do that. Regulators in the UK and Italy have both taken issue with how clearly the full total is shown before checkout.',
    items: [
      {
        name: 'Ticket price',
        price: 'Set by the individual seller',
        detail:
          'Floats with demand rather than face value — a bargain on a quiet midweek date, several times face value for a sold-out arena show. Nothing here is fixed.',
        pick: true,
      },
      {
        name: 'Booking fee',
        price: 'Added on top, late in checkout',
        detail:
          'A percentage fee layered onto the seller’s price. This is the specific practice behind the CMA’s 2018 legal action and its ongoing 2025 fee investigation.',
      },
      {
        name: '100% Buyer Guarantee',
        price: 'Included, no extra charge',
        detail:
          'A valid ticket in time for the event, or a replacement or refund if the order fails. Nominative, name-on-ticket events are the recurring exception people run into.',
      },
    ],
  },
  pros: [
    {
      title: 'Inventory when the primary seller has none',
      body: 'Once an event shows sold out on the venue’s own site, viagogo is often the only place left with a genuine listing — for the right buyer, that is the whole point of the service.',
    },
    {
      title: 'A 100% Buyer Guarantee backs every order',
      body: 'If a ticket never arrives, is invalid, or gets you turned away at the door, viagogo commits to a replacement or refund — a real backstop the primary market does not offer.',
    },
    {
      title: 'One account across a very large map',
      body: 'Listings span events in dozens of countries, so a single viagogo account covers far more ground than most single-country resale sites manage on their own.',
    },
    {
      title: 'Mobile and PDF delivery on most listings',
      body: 'Most tickets arrive electronically rather than by post, so buying a day or two before the event is still realistic when a listing is available.',
    },
  ],
  cons: [
    {
      title: 'Prices are not tied to face value',
      body: 'Sellers, not viagogo, set the price, and for anything in demand that means paying well above what the ticket originally cost — Italy’s regulator found examples up to six or seven times face value.',
    },
    {
      title: 'Fees surface late in the checkout flow',
      body: 'The percentage added on top of the seller’s price has repeatedly drawn regulatory complaint, most recently a fresh 2025 CMA investigation, alongside StubHub, into fee disclosure.',
    },
    {
      title: 'A genuinely mixed regulatory record',
      body: 'A 2018 UK court order, a €23.5 million Italian fine in 2022, and an open 2025 fee investigation are not one-off headlines — they are a pattern worth knowing about before you buy.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot (viagogo.com)',
      value: 3.9,
      note: '"Great", around 21,800 reviews — scores swing sharply by country, from 2.3 in Australia to over 4 in Italy',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.3,
      note: 'sold-out-event utility and a real guarantee, weighed against price transparency and a repeat regulatory record',
    },
  ],
  bestFor: [
    'Buyers chasing a sold-out show with no other legitimate option left',
    'Anyone who wants the 100% Buyer Guarantee as a backstop on a resale purchase',
    'Fans booking last-minute, since most tickets deliver electronically',
    'People willing to check the seller’s price and the fee separately before paying',
  ],
  notFor: [
    'Anyone who assumes the price shown is close to face value',
    'Buyers who want fees itemised upfront rather than added during checkout',
    'Nominative-ticket events, where the guarantee’s exceptions matter most',
  ],
  faq: [
    {
      q: 'Is viagogo legit?',
      a: 'Yes, as a business — but legit does not mean cheap or price-capped. It is a licensed resale marketplace with a buyer guarantee, though UK and Italian regulators have both taken formal action over how it discloses prices and fees.',
    },
    {
      q: 'Why are viagogo prices so much higher than face value?',
      a: 'Because sellers, not viagogo, set them. Once a show sells out through the official box office, resale prices simply track demand instead of the printed cost, and Italy’s regulator documented cases running up to six or seven times face value across the 131 events it examined.',
    },
    {
      q: 'Is viagogo the same company as StubHub?',
      a: 'Yes. viagogo bought StubHub from eBay in February 2020 for $4.05 billion, bringing the two biggest English-language resale brands under one owner. Both operate under Eric Baker, who founded StubHub in 2000 and viagogo in 2006, though the two sites still run separately with separate accounts.',
    },
    {
      q: 'What does the 100% Buyer Guarantee actually cover?',
      a: 'A valid ticket delivered in time for the event, or a comparable replacement or refund if that fails — including cancelled events and tickets that get you refused entry at the door. Name-on-ticket events are the main scenario where claims get complicated and slower to resolve.',
    },
    {
      q: 'Has viagogo been fined or sued over its pricing?',
      a: 'Yes, more than once. The UK’s CMA won a 2018 court order over its practices, and Italy’s AGCOM fined it €23.5 million in 2022 for listings up to seven times face value. A fresh CMA fee investigation covering viagogo and StubHub opened in 2025.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'viagogo.com',
}
