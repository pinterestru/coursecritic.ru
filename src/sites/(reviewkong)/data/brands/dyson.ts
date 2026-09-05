/**
 * Brand page data for Dyson (route: /brands/dyson), reviewed via its Indian
 * storefront, dyson.in.
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.dyson.in/customer-info — two-year warranty statement,
 *     10-day "no questions" return policy, No Cost EMI up to ₹50,000 over
 *     6/12/18 months, cash on delivery up to the same threshold, importer
 *     entity (Dyson Technology India Pvt Ltd, Gurugram)
 *   - https://www.dyson.in/footer-primary-links/warranty-terms — warranty
 *     effective date and wear-part exclusions (filters, belts, brush bar,
 *     batteries), general defect coverage
 *   - https://www.dyson.in/footer-secondary-links/terms-and-conditions/return-and-refund
 *     — original-condition requirements, inspection-before-refund process
 *   - Company background: James Dyson, DC01 launch 1993, HQ move to
 *     Singapore in 2019, ~80 markets worldwide (Wikipedia and Dyson
 *     company-history reporting)
 *   - The India-specific Trustpilot page (trustpilot.com/review/dyson.in) was
 *     checked but carries too few reviews to cite a reliable score, so no
 *     numeric rating is printed for that source — see the cons section for
 *     the qualitative finding instead
 *
 * ⚠️ Prices, EMI terms and delivery timing are working values captured on
 * 2026-08-24 and MUST be re-verified against dyson.in before any campaign.
 * This page describes dyson.in specifically — India — not Dyson's global
 * business; other Dyson markets run separate storefronts with different
 * warranty and return terms. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const dyson: BrandPage = {
  slug: 'dyson',
  providerId: 'dyson',
  metaTitle: 'Dyson (dyson.in) review 2026 — warranty and returns',
  metaDescription:
    'An independent Dyson review via its India store, dyson.in: the two-year warranty, the ten-day no-questions return window, and No Cost EMI on qualifying orders.',
  intro:
    'Dyson sells vacuums, air treatment, hair care and lighting globally, and dyson.in is the storefront for India specifically — imported and operated by Dyson Technology India Pvt Ltd, not a regional mirror of the UK or US site. The headline terms are a two-year warranty across the range and a ten-day, no-questions return window, both shorter than what some other markets get, plus No Cost EMI on qualifying orders. Read this as an India-market review: the global Dyson name does not mean identical policy everywhere.',
  about: [
    'James Dyson founded the company on the back of the DC01, the cyclone vacuum that launched in 1993 after more than five thousand prototypes; the bagless design became the template the whole category eventually copied. Dyson has since expanded into hair care (the Supersonic dryer and Airwrap), air purifiers and fans, lighting and, more recently, hair styling accessories, positioning itself at the premium end of every category it enters. The company moved its global headquarters from the UK to Singapore in 2019, closer to its manufacturing and supply-chain base, and now sells through roughly 80 markets worldwide, each typically running its own storefront and its own policy terms.',
    'dyson.in is run by Dyson Technology India Pvt Ltd, based in Gurugram, and sells the same core categories as every Dyson market — cordless vacuums, air purifiers and fans, hair dryers and stylers, and lighting — priced and stocked for India rather than mirrored from the UK or US catalogue. The site offers No Cost EMI and reward points on orders up to ₹50,000, splitting a purchase over six, twelve or eighteen months with no added interest, and accepts cash on delivery up to the same threshold. Delivery dates are quoted at checkout rather than promised as a fixed number of days, and can shift with courier volume.',
    'Warranty across the dyson.in range is two years from the date of purchase or delivery, covering repair or replacement for faults in materials or workmanship — it explicitly excludes wear parts such as filters, brushbars, belts and batteries, and it does not cover accidental damage or non-genuine attachments. The return window is ten days, pitched by Dyson as a no-questions policy, but the small print requires the product back in original packaging with every accessory and the invoice, inspected and approved before a refund is issued; miss any of that and the return can be refused.',
  ],
  facts: [
    { label: 'Warranty', value: '2 years, wear parts excl.' },
    { label: 'Returns', value: '10 days, no questions' },
    { label: 'Financing', value: 'No Cost EMI to ₹50,000' },
    { label: 'Store operator', value: 'Dyson Technology India' },
  ],
  plans: {
    title: 'What it costs to buy on dyson.in',
    note: 'There is no membership tier — the real cost lever is whether you use No Cost EMI or cash on delivery, and whether you can live inside the ten-day return window.',
    items: [
      {
        name: 'Standard purchase',
        price: 'listed price, no financing',
        detail:
          'Covered by the standard two-year warranty against faults in materials or workmanship; wear parts like filters and batteries are excluded.',
        pick: true,
      },
      {
        name: 'No Cost EMI',
        price: '0% interest over 6, 12 or 18 months',
        detail:
          'Available on orders up to ₹50,000, through partner banks at checkout; splits the cost without an interest markup.',
      },
      {
        name: 'Cash on delivery',
        price: 'pay on arrival, up to ₹50,000',
        detail:
          'Available alongside card and EMI payment, capped at the same ₹50,000 threshold as the EMI offer.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuine two-year warranty as standard',
      body: 'No extended-warranty upsell needed to reach two years of cover against manufacturing faults — most direct electronics stores in this category default to just one year, and make you pay to get here.',
    },
    {
      title: 'No Cost EMI on a genuinely premium range',
      body: 'Splitting a purchase over 6, 12 or 18 months with no interest markup makes Dyson’s premium pricing more manageable, and reward points accrue on top of the discount.',
    },
    {
      title: 'One operator, one accountable support line',
      body: 'Because dyson.in is run directly by Dyson Technology India rather than a marketplace reseller, warranty and return claims go straight to the company that made the product.',
    },
    {
      title: 'A toll-free line staffed daily',
      body: 'Customer support runs seven days a week rather than being limited to a business-hours window, useful given how often warranty questions come up outside a 9-to-5.',
    },
  ],
  cons: [
    {
      title: 'Ten days is a short return window',
      body: 'A no-questions return only works for ten days from delivery — far tighter than the 30-plus days most electronics retailers give, and easy to miss if a fault only shows up later.',
    },
    {
      title: 'Wear parts are excluded from warranty',
      body: 'Filters, brushbars, belts and batteries — the parts that actually degrade with use on a vacuum or hair dryer — sit outside the two-year cover entirely, so replacing them is always an out-of-pocket cost.',
    },
    {
      title: 'Trustpilot presence for dyson.in is thin',
      body: 'The India-specific Trustpilot page carries only a handful of reviews, too few to draw a reliable pattern from, and the ones that exist describe delivery and refund-pickup delays rather than product faults.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'weighted for warranty length and financing against the short return window',
    },
  ],
  bestFor: [
    'India-based buyers who want a genuine two-year warranty rather than a one-year default',
    'Anyone planning to use No Cost EMI to spread a premium-priced purchase',
    'Buyers who will test a machine within the first ten days and act fast if something is wrong',
    'Shoppers who want claims handled by Dyson’s own India operation, not a marketplace seller',
  ],
  notFor: [
    'Buyers who need longer than ten days to decide whether to keep a machine',
    'Anyone outside India looking for this specific storefront — dyson.in serves India only',
    'Buyers chasing a refurbished or outlet-priced Dyson — dyson.in does not appear to run one',
  ],
  faq: [
    {
      q: 'Does dyson.in ship outside India?',
      a: 'No. dyson.in is operated by Dyson Technology India Pvt Ltd and serves the Indian market specifically. Dyson sells through roughly 80 markets worldwide, but each typically runs its own storefront with its own pricing, warranty and delivery terms — the India site is not interchangeable with dyson.com or dyson.co.uk.',
    },
    {
      q: 'What does the Dyson warranty actually cover?',
      a: 'Two years of cover for faults in materials or workmanship on the machine itself, effective from the purchase or delivery date. It does not cover wear-and-tear parts such as filters, brushbars, belts and batteries, accidental damage, or machines fitted with non-genuine attachments.',
    },
    {
      q: 'How does the ten-day return work?',
      a: 'You have ten days from delivery to return a machine, described as no-questions on the marketing page, though the actual policy requires original packaging, every accessory and the invoice, and the item must pass a quality inspection before a refund is issued.',
    },
    {
      q: 'Is Dyson financing actually interest-free?',
      a: 'On orders up to ₹50,000, yes — No Cost EMI splits the price over 6, 12 or 18 months with no added interest, and reward points accrue on top. Cash on delivery is available up to the same ₹50,000 threshold.',
    },
    {
      q: 'Can I buy a refurbished Dyson through dyson.in?',
      a: 'There is no evidence of a certified-refurbished or outlet channel on dyson.in itself; that kind of programme exists in some other Dyson markets through third-party channels. Treat every dyson.in listing as new stock unless the product page says otherwise.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'dyson.in',
}
