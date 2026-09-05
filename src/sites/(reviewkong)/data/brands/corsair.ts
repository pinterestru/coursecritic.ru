/**
 * Brand page data for Corsair (route: /brands/corsair), reviewed via its
 * direct store, corsair.com.
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.corsair.com/us/en/s/shipping-return-refund-policy — 60-day
 *     return window, "no more handling than necessary" condition standard,
 *     final-sale/clearance exclusions, 30% restocking fee on Custom Lab
 *     products, US/UK/EU shipping-charge tiers
 *   - https://help.corsair.com/hc/en-us/articles/360033067832-Warranty-Corsair-Limited-Warranty
 *     — minimum 2-year warranty on new products, US authorised-seller
 *     requirement for memory/SSD/chairs/headsets/keyboards/mice/Elgato gear
 *   - https://help.corsair.com/hc/en-us/articles/360041757452-Certified-Refurbished-Revival-Series-Products-FAQ
 *     — 90-day standalone warranty on Certified Refurbished / Revival Series
 *     purchases
 *   - Company background: founding 1994 (Andy Paul, Don Lieberman, John
 *     Beekley), Elgato acquisition 2018, Nasdaq IPO September 2020 (ticker
 *     CRSR), EagleTree Capital as largest shareholder (Wikipedia and
 *     investor-reporting sources)
 *   - The Trustpilot page for www.corsair.com was checked but the exact
 *     current TrustScore could not be confirmed from an openable page, so no
 *     numeric rating is printed for that source
 *
 * ⚠️ Prices, financing terms and shipping charges are working values captured
 * on 2026-08-24 and MUST be re-verified against corsair.com before any
 * campaign. Warranty terms for specific product categories (and which
 * categories require a corsair.com/authorised-reseller purchase in the US)
 * change without notice. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const corsair: BrandPage = {
  slug: 'corsair',
  providerId: 'corsair',
  metaTitle: 'Corsair review 2026 — warranty, returns and refurb store',
  metaDescription:
    'An independent Corsair review: the 60-day return window, the two-year baseline warranty, and how the Certified Refurbished section compares on price and cover.',
  intro:
    'Corsair started as a memory-module maker in 1994 and grew into one of the biggest names in PC components and gaming peripherals, listing on Nasdaq in 2020. Corsair.com backs direct purchases with a 60-day return window — double the industry-standard 30 — and at least two years of warranty on new products. It also runs a Certified Refurbished section at a discount to retail, though those units carry a much shorter warranty than a new purchase, a distinction worth knowing before you buy on price alone.',
  about: [
    'Corsair was founded in California in 1994 by Andy Paul, Don Lieberman and John Beekley, initially selling memory modules to PC builders before expanding into power supplies, cases, cooling and, eventually, keyboards, mice and headsets as the gaming-peripheral category grew. It acquired Elgato in 2018, adding streaming and creator hardware to the range, and completed its Nasdaq IPO in September 2020 under the ticker CRSR; EagleTree Capital, its private-equity backer before the listing, remains the largest shareholder. The company still sells enthusiast-grade components alongside the peripherals that now account for a large share of revenue.',
    'Corsair.com sells the same catalogue direct that goes through retail partners — power supplies, memory, cases, liquid and air cooling, keyboards, mice, headsets and full pre-built systems — plus a Certified Refurbished and Revival Series section priced below new stock for buyers happy to accept opened or returned units. The site ships from regional distribution points across North America, Europe and Asia, with checkout showing the specific countries and shipping cost for a given address rather than publishing one fixed international list. Affirm financing is available at checkout, splitting the cost of a higher-end purchase such as a full keyboard-mouse-headset bundle or a pre-built system.',
    'New Corsair products carry at least a two-year limited warranty, longer on some categories, covering defects in materials and workmanship but not damage from misuse or unauthorised modification; in the US, several product lines including memory, SSDs, gaming chairs, headsets, keyboards and mice, and Elgato gear are only warrantied by Corsair when bought from corsair.com or an authorised reseller. Returns run 60 days from delivery for a direct purchase, with items needing to come back with no more handling than necessary to establish how they work; final-sale and clearance items are excluded, and customised Corsair Custom Lab builds carry a 30% restocking fee instead of a straight refund.',
  ],
  facts: [
    { label: 'Founded', value: '1994, California' },
    { label: 'Returns', value: '60 days from delivery' },
    { label: 'Warranty', value: '2 years min. on new stock' },
    { label: 'Refurb warranty', value: '90 days standalone' },
  ],
  plans: {
    title: 'What it costs to buy on corsair.com',
    note: 'The real cost lever is new versus Certified Refurbished — refurbished units are cheaper but carry a fraction of the new-product warranty, and Affirm applies only to the full-price cart.',
    items: [
      {
        name: 'Standard new purchase',
        price: 'listed price, no financing',
        detail:
          'Backed by at least a two-year limited warranty on materials and workmanship, longer on some product lines.',
        pick: true,
      },
      {
        name: 'Affirm financing',
        price: 'listed price split into monthly payments',
        detail:
          'Available at checkout for eligible carts; returned items get the loan balance reduced or cancelled and paid instalments refunded.',
      },
      {
        name: 'Certified Refurbished / Revival Series',
        price: 'discounted vs. new stock',
        detail:
          'Tested and inspected open-box or returned units, but standalone purchases carry only a 90-day warranty against the two-plus years on new stock.',
      },
    ],
  },
  pros: [
    {
      title: 'A 60-day return window, double the norm',
      body: 'Sixty days from delivery gives far more room to test a build before committing than the 30-day window most component and peripheral retailers offer buyers.',
    },
    {
      title: 'Warranty on new stock beats the category floor',
      body: 'A two-year minimum on new purchases, with some categories running longer still, sits above what several rival component and peripheral brands offer as their default cover.',
    },
    {
      title: 'Certified Refurbished undercuts new pricing',
      body: 'A dedicated section sells inspected, tested open-box and returned units at a discount, a legitimate way to buy Corsair gear for less if the shorter warranty is acceptable.',
    },
    {
      title: 'Affirm softens the cost of a full setup',
      body: 'Financing at checkout helps spread the cost of assembling a full loop, case and peripheral set all at once, and returns automatically adjust the remaining loan balance.',
    },
  ],
  cons: [
    {
      title: 'Refurbished units carry a fraction of the warranty',
      body: 'A standalone Certified Refurbished purchase drops to a 90-day warranty against the two-plus years on new stock, a steep cut for a saving that is not always large.',
    },
    {
      title: 'Custom Lab builds are hit with a 30% restocking fee',
      body: 'Personalise a build through Corsair Custom Lab and a return no longer gets a straight refund — 30% is deducted, a real cost of changing your mind on a customised order.',
    },
    {
      title: 'US warranty coverage depends on where you bought it',
      body: 'For memory, SSDs, gaming chairs, headsets, keyboards and mice, Corsair only honours its own warranty on US purchases made through corsair.com or an authorised reseller, not any retailer.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'weighted for the return window and refurbished option against the refurb warranty cut',
    },
  ],
  bestFor: [
    'Buyers who want 60 days, not 30, to decide whether a purchase is right',
    'PC builders assembling cooling, PSU, case and peripherals from one direct store',
    'Anyone happy to trade some warranty length for a discount via Certified Refurbished',
    'US buyers who want warranty-eligible memory, SSDs or peripherals bought direct',
  ],
  notFor: [
    'Buyers who want a Custom Lab build with an easy, fee-free change of mind',
    'Anyone assuming Certified Refurbished carries the same cover as new stock',
    'US shoppers buying eligible categories through an unauthorised third-party seller and expecting Corsair-honoured warranty',
  ],
  faq: [
    {
      q: 'How long is the Corsair return window?',
      a: 'Sixty days from delivery for a direct corsair.com purchase, longer than the 30-day norm at most competitors. Items need to come back with no more handling than necessary to establish how they work, and final-sale or clearance items are excluded entirely.',
    },
    {
      q: 'What warranty does a new Corsair product carry?',
      a: 'At least two years as standard, covering defects in materials and workmanship, with some product lines running longer. It does not cover damage from misuse or unauthorised modification, and in the US several categories are only warrantied when bought from corsair.com or an authorised reseller.',
    },
    {
      q: 'Is Certified Refurbished worth buying?',
      a: 'It is genuinely cheaper than new stock and the units are tested before resale, but a standalone refurbished purchase carries only a 90-day warranty against the two-plus years you get on new products — worth it if the saving is large, less so if it is marginal.',
    },
    {
      q: 'Does Corsair offer financing?',
      a: 'Yes, Affirm is available at checkout, splitting the cost into instalments. If you return a financed item, the outstanding loan balance is reduced or cancelled and any instalments already paid are refunded.',
    },
    {
      q: 'What happens if I return a Corsair Custom Lab build?',
      a: 'Custom Lab products are personalised, so a return does not get a straight refund — Corsair applies a 30% restocking fee to account for the fact the build cannot simply be resold as new.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'corsair.com',
}
