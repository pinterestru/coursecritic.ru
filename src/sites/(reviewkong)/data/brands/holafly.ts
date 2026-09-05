/**
 * Brand page data for Holafly (route: /brands/holafly).
 *
 * SOURCES — every figure below is taken from Holafly's own published pages,
 * not from vendor press material:
 *   - https://esim.holafly.com/esim-europe/ — the unlimited price ladder
 *     ($11.90 / 3 days up to $73.90 / 30 days), the 33-country Europe list, the
 *     1 GB-per-day hotspot allowance and the "no local phone number" statement
 *   - https://esim.holafly.com/esim-japan/ — the identical price ladder, which
 *     is what establishes that Holafly prices by trip length, not by destination
 *   - https://esim.holafly.com/faq/about-esims/are-there-esims-with-unlimited-data/
 *     — fair-use wording, the "no more than one day" throttle and the statement
 *     that hotspot use is not unlimited
 *   - https://esim.holafly.com/faq/holafly-plans/international-data-subscriptions/
 *     — the Holafly Plans subscription: 160+ destinations, cancellation and
 *     refund terms, Always On, and the advertised SMS reception
 *   - https://esim.holafly.com/plans/ — subscription pricing (€59.95 Unlimited,
 *     €45.95 Light / 25 GB per month)
 *   - https://esim.holafly.com/holafly-reviews/ — the Trustpilot widget
 *     (Excellent, 4.5, 107,341 reviews) as displayed on 21 August 2026
 *   - https://en.wikipedia.org/wiki/Holafly — founded 2017 in Spain, eSIM from
 *     summer 2018
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * holafly.com before launch and before each campaign. Two specific warnings:
 *   1. The registry `priceNote` in ../travel/providers.ts says "unlimited plans
 *      from around $6/day". The published ladder works out at roughly
 *      $2.46–$4.10 a day depending on trip length, so that figure looks stale
 *      and is NOT repeated on this page. Registry file is owned elsewhere —
 *      flag it rather than editing it here.
 *   2. Holafly does not publish a single central fair-use threshold; the
 *      gigabyte figure sits in each plan's "Technical Specs" and differs by
 *      destination. Do not put a specific daily number on this page unless it
 *      is read off the destination page it applies to.
 * Trustpilot itself could not be read directly (bot protection), so the score
 * below is the one Holafly's own widget renders. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const holafly: BrandPage = {
  slug: 'holafly',
  providerId: 'holafly',
  schemaType: 'Product',
  metaTitle: 'Holafly review 2026 — unlimited data, and its limits',
  metaDescription:
    'An independent Holafly review: what "unlimited" really covers, the 1 GB daily hotspot cap, and the point where a capped gigabyte plan costs less.',
  intro:
    'Holafly sells trip length rather than gigabytes. You buy five days or thirty, the data is unlimited for that window, and there is no counter to watch. That is a genuinely different proposition from every other eSIM in this comparison — and it is worth knowing exactly where it stops being the cheaper one, because the crossover arrives sooner than the marketing implies.',
  about: [
    'Holafly was founded in Spain in 2017 and moved to eSIM in the summer of 2018, having started out posting physical travel SIMs. The product today covers more than 200 destinations, and unlike the marketplace apps it leads with one idea: an unlimited allowance for a fixed number of days. For a traveller who has ever rationed a gigabyte allowance on the last morning of a trip, that idea sells itself.',
    'The pricing is unusually simple, and comparing the Europe and Japan plan pages shows why: the ladder is identical. Three days costs $11.90, five $20.50, seven $27.50, ten $36.50, fifteen $50.50 and thirty $73.90, whichever destination you pick. That is a real convenience — you can budget a trip without opening a spreadsheet — but it also means the price bears no relation to what data costs in the country you are visiting, which is precisely why Holafly looks expensive in cheap markets.',
    'Alongside the one-off trip eSIMs, Holafly now sells a rolling subscription it calls Holafly Plans, covering more than 160 destinations at €59.95 a month for unlimited data or €45.95 for a 25 GB "Light" tier. The monthly version cancels at any time; the annual version carries a twelve-month commitment and refunds only within the first fourteen days. This is also the tier where Holafly advertises something the rest of the category cannot offer, which is covered below.',
  ],
  facts: [
    { label: 'eSIM since', value: '2018' },
    { label: 'Coverage', value: '200+ destinations' },
    { label: 'Plan type', value: 'Unlimited by trip length' },
    { label: 'Hotspot', value: '1 GB per day' },
  ],
  plans: {
    title: 'How the plans are priced',
    note: 'Holafly charges for days, not gigabytes, and the day rate falls as the trip gets longer — from about $4.10 a day on the five-day plan to $2.46 on the thirty-day one. That makes short heavy trips the case it wins and long trips the case it loses. Prices are the published USD ladder and move with promotions.',
    items: [
      {
        name: 'Short trip eSIM (3–7 days)',
        price: '$11.90 for 3 days, $20.50 for 5, $27.50 for 7',
        detail:
          'Unlimited data at roughly $3.90–$4.10 a day. The sweet spot: heavy use, short window, no counter.',
        pick: true,
      },
      {
        name: 'Long trip eSIM (10–30 days)',
        price: '$36.50 for 10 days up to $73.90 for 30',
        detail:
          'The day rate improves but the total does not compete with a large capped plan over the same period.',
      },
      {
        name: 'Holafly Plans subscription',
        price: '€45.95/mo for 25 GB, €59.95/mo unlimited',
        renews: 'monthly plans renew every 30 days; annual plans commit for 12 months',
        detail:
          'Covers 160+ destinations on one eSIM. This is the tier whose documentation lists SMS reception — the trip eSIMs do not have it.',
      },
    ],
  },
  pros: [
    {
      title: 'No allowance to ration',
      body: 'The whole argument, and it holds. Nobody checks a data counter before opening a map, and on a short trip with heavy navigation, video calls and uploads that is worth paying for.',
    },
    {
      title: 'One price ladder, every destination',
      body: 'The Europe and Japan pages publish the same figures. You can price a trip to anywhere Holafly covers without checking the country first, which no per-gigabyte seller lets you do.',
    },
    {
      title: 'The subscription tier claims SMS, which is rare',
      body: 'Holafly’s documentation for Holafly Plans lists receiving SMS for bank verification and login codes among the benefits. If that holds in practice it is the one thing a travel eSIM normally cannot do — but note it is documented for the subscription, not for the one-off trip eSIMs.',
    },
    {
      title: 'A small standing allowance after you cancel',
      body: 'The Always On feature gives subscribers 1 GB of free data each month once a plan ends, across 160-odd destinations. Not a reason to buy, but a sensible piece of design for people who travel irregularly.',
    },
  ],
  cons: [
    {
      title: 'Tethering is capped at 1 GB a day',
      body: 'The Europe plan page states plainly that hotspot sharing is limited to 1 GB per day, and Holafly’s FAQ confirms the hotspot feature is not unlimited. Anyone buying Holafly specifically to work from a laptop over the phone’s hotspot should read that sentence twice — it undercuts the main reason heavy users choose it.',
    },
    {
      title: 'The fair-use threshold is not published in one place',
      body: 'Holafly’s FAQ says operators may reduce speed once a high-speed limit is reached, for no more than a day, with normal speed restored the next. What that limit actually is sits in each plan’s Technical Specs and differs by destination, so "unlimited" cannot be checked from the homepage. That is a transparency problem, not a small print quibble.',
    },
    {
      title: 'A capped plan wins from about a week',
      body: 'Seven days costs $27.50, or roughly $3.90 a day. Regional capped plans from the cheaper sellers run near €2 a gigabyte, so that daily rate buys about two gigabytes of equivalent value. Unless you reliably use more than that, and are not relying on the hotspot, the capped plan is cheaper — and on a month-long trip it is not close.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.5,
      note: '107,341 reviews on the widget Holafly displays, checked August 2026',
    },
    { source: 'App Store (iOS)', value: 4.4, note: 'large review volume' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite: strong on convenience, marked down on the hotspot cap and unpublished fair-use limits',
    },
  ],
  bestFor: [
    'Short trips with heavy phone use — navigation, video calls, uploads, streaming',
    'Travellers who would rather pay a premium than think about a data counter',
    'Anyone who wants one predictable price regardless of destination',
    'Frequent travellers weighing the monthly subscription against repeated trip plans',
  ],
  notFor: [
    'Light users — a 3 GB capped plan costs a fraction of the equivalent Holafly window',
    'Anyone tethering a laptop all day: the hotspot allowance is 1 GB per day, not unlimited',
    'Long stays, where a large capped plan or a local SIM is substantially cheaper',
    'Travellers who need a phone number on a one-off trip eSIM — those are data only',
  ],
  faq: [
    {
      q: 'Is Holafly’s unlimited data really unlimited?',
      a: 'There is no fixed gigabyte allowance, but the plans are subject to a fair-use policy. Holafly’s own FAQ says operators may reduce speed once a high-speed limit is reached, that the reduction lasts no more than one day, and that normal speed returns the following day. The actual threshold varies by destination and is published in each plan’s Technical Specs rather than centrally.',
    },
    {
      q: 'Can I share the connection with a laptop or another traveller?',
      a: 'Yes, but not without limit. The Europe plan page allows sharing 1 GB of data per day over the hotspot, and Holafly states that the hotspot feature is not unlimited. Check the figure on the destination page before buying if tethering is the point.',
    },
    {
      q: 'Do I get a phone number or receive SMS?',
      a: 'Not on the one-off trip eSIMs: the Europe plan page states they include cellular data only, with no local number for calls or texts. Holafly’s subscription product, Holafly Plans, does list receiving SMS for bank verification and login codes among its benefits — so which product you buy changes the answer. Verify it against the plan you are actually purchasing.',
    },
    {
      q: 'When is Holafly cheaper than a gigabyte plan?',
      a: 'When the trip is short and the usage is high. At roughly $3.90 a day on the seven-day plan, Holafly is good value if you would otherwise buy more than about two gigabytes a day. Past a week or so, or at ordinary usage levels, a large capped regional plan costs less for the same period.',
    },
    {
      q: 'What is the difference between a Holafly trip eSIM and a Holafly Plans subscription?',
      a: 'The trip eSIM is a one-off purchase for a fixed number of days in one destination or region. Holafly Plans is a rolling subscription covering more than 160 destinations on a single eSIM, at €59.95 a month unlimited or €45.95 for 25 GB. Monthly subscriptions cancel at any time; annual ones commit for twelve months and refund only within the first fourteen days.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'esim.holafly.com/shop',
}
