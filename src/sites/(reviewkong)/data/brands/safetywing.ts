/**
 * Brand page data for SafetyWing (route: /brands/safetywing).
 *
 * SOURCES — figures below come from these pages, checked 21 August 2026:
 *   - https://safetywing.com/nomad-insurance — the two products (Nomad
 *     Insurance Essential and Nomad Insurance Complete), the published prices
 *     for the 18–39 band, the US$250,000 Essential limit, the US$100,000
 *     lifetime evacuation cap, the luggage/trip-interruption/delay figures,
 *     "180+ countries", "US coverage is extra" and the statement that you may
 *     "sign up before you depart or at any point during your travels"
 *   - https://safetywing.com/nomad-insurance/policy — Essential description of
 *     coverage
 *   - https://explore.safetywing.com/nomad-insurance-complete — what Complete
 *     adds and its US$1,500,000 overall limit
 *   - https://www.trustpilot.com/review/safetywing.com — the public score
 *
 * ⚠️ RE-VERIFY BEFORE LAUNCH AND BEFORE EVERY CAMPAIGN. Insurance pricing is
 * age-banded and changes without notice, and SafetyWing restructured its
 * products in December 2024. The README flags this brand's `priceNote` in
 * ../travel/providers.ts ("from around $56 per 4 weeks") as needing the product
 * named: the $56 figure belongs to the ESSENTIAL product, and the price
 * published on safetywing.com in August 2026 is $62.72 per 4 weeks for ages
 * 18–39 — the registry line is stale as well as unlabelled. The underwriter
 * names are reported by third parties reading the policy documents rather than
 * quoted from SafetyWing's own marketing pages; confirm them in the description
 * of coverage attached to the version you actually buy. See ../../README.md.
 *
 * Nothing on this page is insurance advice. It describes published policy
 * wording, and the wording that binds a reader is the one issued for their own
 * country of residence.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const safetywing: BrandPage = {
  slug: 'safetywing',
  providerId: 'safetywing',
  schemaType: 'Product',
  metaTitle: 'SafetyWing review 2026 — Essential vs Complete',
  metaDescription:
    'An independent SafetyWing review: what Nomad Insurance Essential excludes, how it differs from the pricier Complete plan, and which price is which.',
  intro:
    'SafetyWing is the cheapest credible way to stay insured on an open-ended trip, and the exclusions are the reason it is cheap. Nomad Insurance Essential is medical cover for travellers, not a full travel policy: pre-existing conditions, maternity and cancer treatment sit outside it, and baggage and cancellation protection are token amounts. Read those limits first, because they decide whether the low monthly price is a bargain or a false economy.',
  about: [
    'SafetyWing sells two different things under one brand, and confusing them is the most common mistake readers make. Nomad Insurance Essential is travel medical insurance — the subscription product the company is known for, published at $62.72 per 4 weeks for ages 18–39 in August 2026. Nomad Insurance Complete is a full health insurance plan with an entirely different price, published at $177.50 per month for the same age band. Any "from around $56" figure you see quoted for SafetyWing, including in older comparisons, refers to Essential and is now out of date.',
    'What Essential buys is a US$250,000 overall limit, emergency medical evacuation capped at US$100,000 for the lifetime of the plan, and cover across a stated 180-plus countries — with cover inside the United States priced as a separate extra. The subscription renews every four weeks until you cancel, and SafetyWing states you can sign up before departure or at any point once you are already travelling, which is the feature that rescues people whose holiday policy expired mid-trip. Non-medical benefits exist but are small: lost luggage at US$500 per item to a US$3,000 plan maximum, US$5,000 towards a ticket home on trip interruption, and fixed sums of $60 or $150 for long delays.',
    'Complete is a different product for a different reader: an ongoing health plan with a US$1,500,000 overall limit that adds routine and preventive care, screening and vaccines, cancer tests and treatment, limited maternity cover and a set number of mental-health visits a year. If you are living abroad rather than travelling, that is the plan the comparison should be against — and against real expatriate health insurance, not against a $60 travel policy. None of this is advice, and no summary substitutes for the description of coverage issued for your country of residence: read the exclusions in your own document before you buy.',
  ],
  facts: [
    { label: 'Products', value: 'Essential + Complete' },
    { label: 'Essential limit', value: 'US$250,000' },
    { label: 'Evacuation cap', value: 'US$100,000 lifetime' },
    { label: 'Buy after departure', value: 'Yes' },
  ],
  plans: {
    title: 'The two products, and which price is which',
    note: 'Both figures are the rates published on safetywing.com in August 2026 for ages 18–39; premiums rise with each age band, cover inside the United States is charged as an extra, and eligibility depends on your country of residence. Treat these as a starting point and take a live quote — and read the description of coverage attached to it, not this table, before you buy.',
    items: [
      {
        name: 'Nomad Insurance Essential',
        price: '$62.72 per 4 weeks (ages 18–39)',
        renews: 'renews every 4 weeks until cancelled',
        detail:
          'Travel medical cover with a US$250,000 overall limit and evacuation capped at US$100,000 for the life of the plan. Pre-existing conditions, maternity and cancer treatment are excluded. This is the product the widely quoted "from around $56" figure refers to.',
        pick: true,
      },
      {
        name: 'Nomad Insurance Complete',
        price: '$177.50 per month (ages 18–39)',
        renews: 'ongoing cover, renewable indefinitely',
        detail:
          'Full health insurance with a US$1,500,000 overall limit. Adds routine and preventive care, screening and vaccines, cancer treatment, limited maternity cover and a capped number of mental-health visits a year.',
      },
    ],
  },
  pros: [
    {
      title: 'You can start cover after you have already left',
      body: 'SafetyWing states that you can sign up before departure or at any point during your travels. Most conventional insurers refuse outright once you are abroad, so this is the single feature that puts SafetyWing on most long-trip shortlists.',
    },
    {
      title: 'No deductible on the published Essential plan',
      body: 'SafetyWing removed the excess that used to apply to medical claims, so the plan does not require you to spend a first tranche of your own money before it engages. Confirm this on the current description of coverage — it is a change to older documentation, not a permanent feature of the brand.',
    },
    {
      title: 'Priced so that people keep it in force',
      body: 'A four-week subscription that cancels any time is the only structure in this category that survives a trip with no fixed end date. Insurance that lapses because it was annoying to renew protects nobody, and this is the product least likely to lapse.',
    },
    {
      title: 'Proof of cover you can hand to a consulate',
      body: 'The Essential limit is far above the €30,000 minimum most short-stay visa rules specify, and SafetyWing issues a downloadable proof-of-insurance letter. Acceptance is still the consulate’s decision, particularly for long-stay national visas — see the FAQ.',
    },
  ],
  cons: [
    {
      title: 'The exclusions are the product',
      body: 'Essential excludes pre-existing conditions, maternity and cancer treatment outright, and work-related accidents in hazardous occupations sit outside it too. Cover in your home country is limited to a short published window rather than being continuous. If any of those describe your situation, the price is irrelevant — buy something else.',
    },
    {
      title: 'It is not a travel policy in the ordinary sense',
      body: 'Luggage is capped at US$500 an item and US$3,000 a plan, delays pay fixed sums of $60 or $150, and there is no meaningful trip-cancellation cover. If what you are insuring is a flight, a booking or a bag of camera equipment, World Nomads covers the thing you are worried about and this does not.',
    },
    {
      title: 'Two products, one brand name — and a stale headline price',
      body: 'Essential and Complete differ by roughly a factor of three in price and by more than that in scope, and comparisons routinely quote one product’s price beside the other’s features. Check which plan a quote is for, and note that the once-standard "$56 per 4 weeks" figure no longer matches the published rate.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.3,
      note: 'safetywing.com listing, several thousand reviews; the negative tail is dominated by claim-handling times',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.5,
      note: 'our composite across price structure, buy-after-departure and how much the exclusions remove',
    },
  ],
  bestFor: [
    'Open-ended trips with no fixed return date',
    'Travellers who have already left home and are uninsured',
    'Healthy adults who want medical cover cheap enough to keep running for months',
  ],
  notFor: [
    'Anyone with a pre-existing condition they need covered',
    'Trips where the value at risk is flights, bookings or equipment rather than a hospital bill',
    'People living abroad permanently — that is the Complete plan, or real expatriate health insurance',
  ],
  faq: [
    {
      q: 'Which SafetyWing product does the "$56 per 4 weeks" price refer to?',
      a: 'Nomad Insurance Essential, the travel medical product — not the far pricier Nomad Insurance Complete. The figure is also dated: safetywing.com published $62.72 per 4 weeks for ages 18–39 in August 2026, with higher rates for older bands and cover inside the United States charged separately.',
    },
    {
      q: 'Are pre-existing conditions covered?',
      a: 'No. Essential excludes them, along with maternity and cancer treatment. Definitions of "pre-existing" vary between insurers and turn on when symptoms first appeared or treatment was last received, so if you have an ongoing condition this is the clause to read before anything else — it is the most common reason a large claim is refused.',
    },
    {
      q: 'What would void my cover or get a claim refused?',
      a: 'The usual list, applied more literally than travellers expect: anything that began before cover started, alcohol and drug-related incidents, hazardous work, high-risk activities outside the covered list, and travel into regions your government advises against. Failing to keep receipts and discharge notes refuses more claims than any of them.',
    },
    {
      q: 'Can I buy it once I am already abroad?',
      a: 'Yes — SafetyWing states you can sign up before you depart or at any point during your travels. Expect anything that started before the policy did to be excluded, which is the point: buying insurance after the symptoms is not insurance.',
    },
    {
      q: 'Will it satisfy a visa requirement?',
      a: 'The Essential limit is far above the €30,000 medical minimum that short-stay Schengen rules specify, and SafetyWing issues a proof-of-insurance letter you can attach to an application. Acceptance is decided by the consulate, and some countries apply stricter or locally licensed insurer rules to long-stay national visas, so confirm with the consulate handling your application before you rely on it.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'safetywing.com/nomad-insurance',
}
