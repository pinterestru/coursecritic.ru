/**
 * Brand page data for Insured Nomads (route: /brands/insurednomads).
 *
 * NOT A PARTNER. `tracked: false` in ../travel/providers.ts is deliberate:
 * there is no affiliate relationship and no commission on this listing, the
 * links are plain nofollow, and the page says so out loud. See ../../README.md,
 * point 5 — do not "fix" it.
 *
 * SOURCES — checked 21 August 2026:
 *   - https://insurednomads.com/world-explorer-hotspot-travel-insurance/ — the
 *     Hotspot plan: EUR 500,000 emergency medical including evacuation, EUR
 *     25,000 search and rescue, EUR 250,000 kidnap and ransom limit, the 24-hour
 *     security centre, InstaPass lounge access, and the excluded territories
 *     (Iran, North Korea, Russia, Belarus). Underwriting is stated on that page
 *     as "Opportuna Insurance PCC Limited – International Risks Cell", backed by
 *     Lloyd's reinsurers, in partnership with Hotspot Cover DAC
 *   - https://insurednomads.com/ — which on the date of this review displayed a
 *     maintenance notice: "We're making some changes! We'll be back with much
 *     better plans and experience for you", directing enquiries to a mailbox
 *   - https://www.trustpilot.com/review/insurednomads.com and its US location
 *     listing — the public scores
 *
 * ⚠️ COULD NOT VERIFY. Because the vendor's own site was mid-transition, the
 * following are NOT stated on this page and must be obtained from a written
 * quote: current pricing (the registry's "from roughly $100/month" could not be
 * confirmed), the World Explorer medical maximum and deductible options, age
 * limits, and whether cover can be started after departure. Third-party blogs
 * quote figures for these; none was corroborated by the vendor, so none is
 * repeated here. RE-CHECK once the new plans are published — this page will
 * need rewriting rather than adjusting.
 *
 * Nothing here is insurance advice. Read the policy wording issued for your own
 * country of residence.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const insurednomads: BrandPage = {
  slug: 'insurednomads',
  providerId: 'insurednomads',
  schemaType: 'Product',
  metaTitle: 'Insured Nomads review 2026 — limits and real cost',
  metaDescription:
    'An independent Insured Nomads review, with no commercial relationship: what the high-risk plan covers, and the figures we could not verify.',
  intro:
    'Insured Nomads is the expensive option in our long-trip comparison, and the only one we earn nothing from — there is no affiliate relationship here, and the link on this page is a plain one. It earns its place on cover limits rather than price: high medical maximums, evacuation treated as part of the product, and a security response most travel policies do not attempt. It also excludes several countries outright, even on the plan sold for dangerous places.',
  about: [
    'Start with the disclosure, because it changes how you should read the rest. We are not an Insured Nomads partner. The company is not in our affiliate programme, the outbound link here is a plain nofollow rather than a tracked one, and nobody at this publication is paid whether you buy or not. It stays in the ranking because a comparison that only contains brands paying us is a price list, not a comparison.',
    'The product is built around the scenario ordinary travel insurance handles worst: something serious happening somewhere with thin local healthcare, where the answer is being moved rather than treated on the spot. The clearest published example is the World Explorer Hotspot plan, sold for high-risk and conflict-affected destinations, which states EUR 500,000 for emergency medical expenses including evacuation, EUR 25,000 for search and rescue where a mountain rescue, coastguard or air-sea deployment is needed, and a EUR 250,000 limit for kidnap and ransom, with a 24-hour global security centre behind it. That page names the underwriter as Opportuna Insurance PCC Limited – International Risks Cell, backed by Lloyd’s reinsurers, in partnership with Hotspot Cover DAC. Even that plan excludes Iran, North Korea, Russia and Belarus.',
    'There is a large caveat on everything else. On the date of this review the company’s own site was showing a maintenance notice saying it was "making some changes" and would return with new plans, directing enquiries to a mailbox. We could not therefore verify current pricing, the World Explorer medical maximum and deductible options, the age limits, or whether cover can be started once you have already departed — so this page does not state them. Get those in writing on a quote before you buy, and read the exclusions in the wording issued for your own country of residence, because none of this is advice.',
  ],
  facts: [
    { label: 'Partner status', value: 'Not a partner' },
    { label: 'Hotspot medical', value: '€500,000' },
    { label: 'Kidnap and ransom', value: '€250,000 limit' },
    { label: 'Current pricing', value: 'Could not verify' },
  ],
  plans: {
    title: 'What is published, and what is not',
    note: 'The vendor’s site was displaying a maintenance notice in August 2026 saying its plans were changing, so no current price, deductible or age limit is quoted here — we could not confirm any of them, including the "from roughly $100 a month" figure that circulates in comparisons. Treat every line below as provisional, ask for a written quote and the full wording, and check eligibility for your own country of residence before you rely on any of it.',
    items: [
      {
        name: 'World Explorer',
        price: 'quote-based — could not verify',
        detail:
          'The mainstream travel medical plan, sold by trip length. Medical maximum options, deductibles and age limits were not verifiable from the vendor at the time of writing, so they are not stated here.',
      },
      {
        name: 'World Explorer Hotspot',
        price: 'quote-based — could not verify',
        detail:
          'The high-risk destination plan: EUR 500,000 emergency medical including evacuation, EUR 25,000 search and rescue, EUR 250,000 kidnap and ransom, natural-disaster and crisis evacuation, and a 24-hour security centre. Iran, North Korea, Russia and Belarus remain excluded.',
        pick: true,
      },
    ],
  },
  pros: [
    {
      title: 'Evacuation is part of the product, not an upsell',
      body: 'Emergency medical evacuation, natural-disaster evacuation and crisis response sit inside the published Hotspot cover rather than being sold as riders. For anyone working somewhere with limited local healthcare, that combination is the entire reason to consider the brand.',
    },
    {
      title: 'Cover for risks other travel policies decline',
      body: 'Search and rescue at EUR 25,000, a EUR 250,000 kidnap and ransom limit, wrongful-detention support and access to a 24-hour security centre. Whether you need any of it is a separate question, but almost nothing else in this comparison offers it at all.',
    },
    {
      title: 'We earn nothing from this listing',
      body: 'No affiliate relationship, no commission, a plain link. That is worth saying plainly, because it is the only thing that makes the rest of our ranking — where we are paid — worth reading.',
    },
  ],
  cons: [
    {
      title: 'The exclusions survive the premium',
      body: 'Even the plan sold for dangerous places excludes Iran, North Korea, Russia and Belarus outright, and the ordinary category exclusions still apply on top: pre-existing conditions, anything that began before cover started, alcohol and drug-related incidents, and travel against official government advice. A high limit does not buy a wider list of covered events.',
    },
    {
      title: 'Key figures could not be verified',
      body: 'The vendor’s site was mid-transition when we checked, with a notice saying the plans were changing. Current prices, the World Explorer maximums and deductibles, age limits and whether you can start cover after departure were all unavailable from the company itself, and we do not repeat blog figures we cannot corroborate.',
    },
    {
      title: 'Public reviews are weaker than the cover suggests',
      body: 'The main Trustpilot listing sits in the low threes, and the critical reviews cluster on claim handling and slow communication rather than on the cover itself. High published limits and a paid claim are different things — which is exactly why we rank it below cheaper options.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 3.3,
      note: 'main insurednomads.com listing; negative reviews concentrate on claim handling and response times',
    },
    {
      source: 'Trustpilot (US location listing)',
      value: 4.0,
      note: 'separate, smaller listing for the US entity — the gap between the two is itself worth noting',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite across cover limits, price and how much we could verify from the vendor',
    },
  ],
  bestFor: [
    'Remote work in regions where a serious problem means evacuation, not local treatment',
    'Travellers who need search and rescue or crisis response, not just a hospital bill paid',
    'Readers who want the high-limit option in a comparison priced against cheap subscriptions',
  ],
  notFor: [
    'Ordinary travel in low-risk countries — you are buying cover you will not use',
    'Budget-led buyers: it is the most expensive option in our long-trip comparison',
    'Anyone who needs firm published prices and limits before committing, at least until the new plans appear',
  ],
  faq: [
    {
      q: 'Do you earn anything if I buy this?',
      a: 'No. Insured Nomads is not an affiliate partner of ours, there is no commission on this listing, and the link on this page is a plain nofollow rather than a tracked one. It is in the ranking because leaving it out would make the ranking less honest, not because it pays.',
    },
    {
      q: 'Are pre-existing conditions covered?',
      a: 'Expect not — the category excludes them almost universally, and we could not verify any exception in the current wording. Definitions turn on when symptoms first appeared or treatment was last received, so ask for this clause in writing before you buy and read it before you compare prices.',
    },
    {
      q: 'What would void my cover or get a claim refused?',
      a: 'Travelling to an excluded territory — Iran, North Korea, Russia and Belarus are excluded even on the high-risk plan — anything that began before cover started, alcohol and drug-related incidents, activities outside the covered list, and travel against official government advice. Missing paperwork refuses more claims than any single exclusion.',
    },
    {
      q: 'What does it actually cost?',
      a: 'We could not verify it. The company’s site was showing a maintenance notice about changing plans when we checked, so rather than repeat a figure from a third-party blog we are telling you plainly that the current price is unknown to us. Ask for a written quote for your age, destination and trip length.',
    },
    {
      q: 'Is it worth it over a cheaper subscription plan?',
      a: 'Only for one scenario: a destination where a serious medical problem means being moved rather than treated locally, or where security risk is real. In low-risk countries the extra premium buys limits you will never approach, and a cheaper plan you keep in force protects you better than an expensive one you cancel.',
    },
  ],
  updated: '2026-08-21',
}
