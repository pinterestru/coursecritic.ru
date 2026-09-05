/**
 * Brand page data for OnePlus (route: /brands/oneplus), reviewed via its Indian
 * storefront, oneplus.in.
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.oneplus.in/warranty and https://www.oneplus.in/support/warranty-policy
 *     — 1-year limited hardware warranty on oneplus.in
 *   - https://www.oneplus.in/support/replacement-policy — DOA/replacement terms
 *   - https://www.oneplus.in/legal/terms-of-sales — India store terms
 *   - https://www.trustpilot.com/review/oneplus.com — global TrustScore, "Bad"
 *   - https://www.trustpilot.com/review/oneplus.in — India-storefront TrustScore, "Poor"
 *   - Reporting on OnePlus's July 2026 exit from new-product launches in the US
 *     and Europe (TechCrunch, Android Authority, Android Central), which confirms
 *     India is explicitly unaffected and treated as a priority market
 *   - Reporting on OxygenOS being retired in favour of parent-company ColorOS
 *     from Android 17 onward (9to5Google, Android Authority)
 *   - Company/ownership background: OnePlus founded December 2013 by Pete Lau,
 *     operates as a subsidiary within the BBK Electronics group alongside Oppo
 *
 * ⚠️ Prices, EMI terms and promotional offers are working values captured on
 * 2026-08-24 and MUST be re-verified against oneplus.in before any campaign.
 * OnePlus's global market footprint changed materially in July 2026 — re-check
 * before reusing any "available in" claim. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const oneplus: BrandPage = {
  slug: 'oneplus',
  providerId: 'oneplus',
  metaTitle: 'OnePlus (oneplus.in) review 2026 — warranty, EMI and support',
  metaDescription:
    'An independent OnePlus review via its India store: what the warranty and replacement policy cover, EMI options, and why the Trustpilot record is a warning sign.',
  intro:
    'OnePlus built its name on flagship-spec phones at a discount to Apple and Samsung, and India, where oneplus.in sells phones, Buds, watches and tablets with No Cost EMI, remains one of the brand’s priority markets even as it winds down new launches in the US and Europe. The product range is genuinely competitive. The customer-service record on independent review sites is not, and that matters more than a spec sheet once something goes wrong.',
  about: [
    'OnePlus was founded in December 2013 by Pete Lau, initially as a standalone challenger brand selling "flagship killer" phones through invite-only sales that built a cult following before the company opened up to wider retail. It now operates within the BBK Electronics group alongside Oppo, sharing supply chains and, increasingly, software: OnePlus has confirmed that its OxygenOS interface is being retired in favour of parent-company ColorOS starting with the Android 17 update cycle, ending a decade of OxygenOS as a distinct identity.',
    'In July 2026, OnePlus announced it will stop launching new products in the US and Europe, citing an unsustainable global business against rising component costs and slower demand, while stating that after-sales support and software updates for existing devices continue unchanged in those markets. India was explicitly named as unaffected: oneplus.in keeps operating as usual, with new launches continuing and the company publicly describing India as a priority market rather than one facing the same wind-down.',
    'The oneplus.in catalogue covers the numbered flagship line, the mid-range Nord series, Buds earphones, the Watch line and OnePlus Pad tablets, sold direct with No Cost EMI options through partner banks rather than through third-party retail marketplaces. A standard purchase carries a one-year limited hardware warranty and a defined replacement window for devices that arrive defective, both handled through OnePlus’s own support portal, with claims requiring the original invoice and photo evidence of the fault.',
  ],
  facts: [
    { label: 'Founded', value: '2013' },
    { label: 'Parent group', value: 'BBK Electronics / Oppo' },
    { label: 'Warranty', value: '1 year, hardware only' },
    { label: 'India status', value: 'Unaffected by US/EU exit' },
  ],
  plans: {
    title: 'What it costs to buy on oneplus.in',
    note: 'There is no subscription. The real cost variable is which financing route you take and whether you add OnePlus Care, since the base warranty is limited hardware cover only.',
    items: [
      {
        name: 'Standard purchase',
        price: 'listed price, no financing',
        detail:
          'Comes with the standard 1-year limited hardware warranty. Software, accessories and consumables are excluded or only partially covered.',
      },
      {
        name: 'No Cost EMI',
        price: 'listed price split across months',
        detail:
          'Interest-free instalments through partner banks on eligible cards, the default way most buyers spread the cost of a flagship model.',
        pick: true,
      },
      {
        name: 'OnePlus Care',
        price: 'add-on protection plan',
        detail:
          'Extends coverage to accidental and liquid damage and lengthens the warranty term, sold as an add-on at checkout, not included by default.',
      },
      {
        name: 'Trade-in / exchange',
        price: 'deducted from listed price',
        detail:
          'Old-device exchange value is set per model and condition at checkout, reducing the upfront cost rather than the EMI schedule itself.',
      },
    ],
  },
  pros: [
    {
      title: 'India remains a genuine priority market, not an afterthought',
      body: 'While OnePlus is exiting new launches in the US and Europe, it has explicitly confirmed continued launches, support and business-as-usual operations in India, unlike markets it is winding down.',
    },
    {
      title: 'No Cost EMI makes flagship pricing manageable',
      body: 'Interest-free instalments through partner banks let buyers spread a flagship-tier price across months without an added financing markup, a meaningful difference on the higher-end models in the range.',
    },
    {
      title: 'A product range beyond phones',
      body: 'Buds, the Watch line and OnePlus Pad tablets sit in the same storefront, letting a buyer build an ecosystem instead of sourcing accessories from third parties.',
    },
    {
      title: 'A defined replacement window for dead-on-arrival units',
      body: 'oneplus.in commits to a replacement process for devices that are defective out of the box, handled directly through its own support portal rather than routed through a third-party marketplace seller.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rates it "Bad" globally, "Poor" in India',
      body: 'OnePlus’s global Trustpilot score sits at 1.5 out of 5, and the dedicated oneplus.in page sits at 2.5, both driven largely by service-centre and support complaints, a real pattern, not isolated noise.',
    },
    {
      title: 'OxygenOS is being phased out',
      body: 'OnePlus has confirmed OxygenOS is retiring in favour of Oppo’s ColorOS from the Android 17 cycle, meaning the interface long-time buyers chose OnePlus for will not exist as a separate product going forward.',
    },
    {
      title: 'The base warranty is narrow',
      body: 'Standard coverage is limited to hardware defects from workmanship or materials; it does not cover software issues, accessories or consumables, so meaningful protection means paying extra for OnePlus Care.',
    },
  ],
  reputation: [
    { source: 'Trustpilot (global, oneplus.com)', value: 1.5, note: 'rated "Bad"' },
    { source: 'Trustpilot (oneplus.in)', value: 2.5, note: 'rated "Poor"' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite weights hardware and pricing heavily against the weak support record',
    },
  ],
  bestFor: [
    'India-based buyers who want flagship-tier specs below Apple/Samsung pricing',
    'Anyone planning to use No Cost EMI to spread the cost of a higher-end model',
    'Buyers who want phones, Buds, watch and tablet from one ecosystem',
    'Shoppers who will add OnePlus Care rather than rely on the base warranty alone',
  ],
  notFor: [
    'Buyers in the US or Europe wanting new OnePlus launches going forward',
    'Anyone who chose OnePlus specifically for OxygenOS as a distinct software experience',
    'Buyers who read the weak Trustpilot support record as a dealbreaker for after-sales issues',
  ],
  faq: [
    {
      q: 'Is OnePlus still available in India?',
      a: 'Yes. OnePlus has explicitly confirmed India is unaffected by its July 2026 decision to stop new product launches in the US and Europe. The company continues to treat India as a priority market, with ongoing launches, full local operations and oneplus.in trading as normal throughout the change elsewhere.',
    },
    {
      q: 'What does the standard OnePlus warranty cover?',
      a: 'A one-year limited warranty on hardware defects caused by workmanship or build materials, applying to devices purchased through oneplus.in. It does not cover software issues, consumables or accessories, even when they are bundled with the device at the point of sale.',
    },
    {
      q: 'Is OxygenOS going away?',
      a: 'OnePlus has confirmed OxygenOS is being retired in favour of parent-company ColorOS, starting with the Android 17 update cycle for eligible devices. Existing phones keep receiving software updates as promised, but the distinct OxygenOS interface that long-time buyers chose OnePlus for is ending.',
    },
    {
      q: 'How bad are the Trustpilot reviews, really?',
      a: 'Meaningfully bad: 1.5 out of 5 globally, rated "Bad", and 2.5 for the India storefront specifically, rated "Poor". Both sit in Trustpilot’s lowest bands, and complaints cluster around service-centre experiences and support response rather than the hardware itself, which is a distinct issue from build quality.',
    },
    {
      q: 'Can I finance a OnePlus phone on oneplus.in?',
      a: 'Yes, through No Cost EMI offered with partner banks on eligible cards, which splits the listed price across several months without an added interest markup. Eligibility, the number of instalments and the specific banks involved all depend on the card issuer and the model you are buying.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'oneplus.in',
}
