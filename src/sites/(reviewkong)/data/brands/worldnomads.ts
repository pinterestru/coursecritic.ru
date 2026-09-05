/**
 * Brand page data for World Nomads (route: /brands/worldnomads).
 *
 * SOURCES — figures below come from these pages, checked 21 August 2026:
 *   - https://www.worldnomads.com/usa/travel-insurance/whats-covered/plan-comparison
 *     — the US-resident Standard / Explorer / Epic / Annual limits for
 *     emergency medical, evacuation and repatriation, trip cancellation and
 *     baggage, the pre-existing exclusion and its time-sensitive waiver, and
 *     the statement that a plan can be bought online from anywhere in the world
 *   - https://www.worldnomads.com/usa/travel-insurance — "We cover 250+
 *     activities you love" (up to 340+ on Epic), the United States Fire
 *     Insurance Company underwriting line, and the footer stating the World
 *     Nomads entities are "subsidiaries of nib holdings limited"
 *   - https://www.nib.com.au/media/company/nib-group-announce-sale-of-world-nomads-international-travel-insurance-business
 *     — nib's announcement of the sale: IMG (a SiriusPoint subsidiary),
 *     A$67.5m cash, "business as usual for existing policyholders"
 *   - https://www.imglobal.com/newsroom/article/2026/02/12/img-acquires-world-nomads-expands-global-travel-insurance-offerings
 *     — IMG's announcement, 12 February 2026, and its statement that "coverage
 *     and service will continue without disruption"
 *   - https://www.trustpilot.com/review/worldnomads.com and
 *     https://www.trustpilot.com/review/worldnomads.co.uk — the public scores
 *
 * ⚠️ THE OWNERSHIP CHANGE. The README flags this brand's `trust` line ("backed
 * by established underwriters") as predating a 2026 change. Confirmed: nib
 * announced in February 2026 that it is selling the World Nomads international
 * travel insurance brand to International Medical Group, a SiriusPoint
 * subsidiary, for A$67.5m, with completion staged and regulatory approvals
 * outstanding. As of this check worldnomads.com still names nib holdings as
 * parent and United States Fire Insurance Company as the US underwriter, so the
 * handover is in progress rather than complete. RE-CHECK the underwriter and
 * contracting entity before every campaign — they may move mid-transition.
 *
 * ⚠️ ALL LIMITS BELOW ARE THE US-RESIDENT PLANS. World Nomads sells different
 * products, limits and plan names by country of residence. Re-verify the figures
 * for the market you buy traffic in.
 *
 * Nothing here is insurance advice; the policy wording issued for your own
 * country of residence is what binds you.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const worldnomads: BrandPage = {
  slug: 'worldnomads',
  providerId: 'worldnomads',
  schemaType: 'Product',
  metaTitle: 'World Nomads review 2026 — limits and new owner',
  metaDescription:
    'An independent World Nomads review: the pre-existing exclusion and its narrow waiver, the US plan limits, and the 2026 sale from nib to IMG.',
  intro:
    'World Nomads is the option here that behaves like conventional travel insurance — real baggage and cancellation cover, a long list of adventure activities included as standard — and it carries conventional exclusions to match. Pre-existing conditions are excluded unless you buy inside a narrow window, activities are covered only if they are on the list, and every limit below changes with your country of residence. In February 2026 the brand was also sold.',
  about: [
    'The ownership question first, because it is the one thing that changed this year. On 12 February 2026 International Medical Group, a subsidiary of SiriusPoint, announced it was acquiring the World Nomads brand from the Australian health insurer nib for A$67.5m in cash. Both sides said the same thing about continuity — nib called it "business as usual for existing policyholders", IMG said coverage and service would "continue without disruption" — and completion is staged and subject to regulatory approval. At the time of this review worldnomads.com still names nib holdings as the parent of its entities, so treat the handover as under way rather than finished, and check who your certificate names.',
    'What you buy is a fixed-term trip policy rather than a subscription. For US residents the plans run Standard, Explorer, Epic and an Annual option, underwritten by United States Fire Insurance Company, and the differences between them are the limits: emergency medical of $125,000, $150,000 and $250,000; evacuation and repatriation of $400,000, $500,000 and $700,000; trip cancellation of $2,500, $10,000 and $15,000; baggage of $1,000, $2,000 and $3,000. The Annual plan covers up to $100,000 per trip for medical and evacuation with $5,000 of cancellation cover per term. Residents of other countries get different plan names and different numbers entirely.',
    'The reason to consider it over a subscription plan is breadth. World Nomads advertises 250-plus covered activities as standard and up to 340-plus on the top plan, which is the difference between a diving or trekking injury being covered and being argued about, and it is the only option in our long-trip comparison with meaningful cancellation and baggage cover. It also lets you buy a policy online from anywhere in the world, with immediate cover for accidents but waiting periods on other benefits. None of that is advice: the wording issued for your residence is what decides a claim, and it is worth the ten minutes.',
  ],
  facts: [
    { label: 'Owner', value: 'nib → IMG (2026)' },
    { label: 'US medical max', value: 'Up to $250,000' },
    { label: 'Activities covered', value: '250+ as standard' },
    { label: 'Buy while abroad', value: 'Yes' },
  ],
  plans: {
    title: 'The US-resident plans and their limits',
    note: 'These are the limits published for US residents; plan names, limits, availability and the underwriter all differ by country of residence, and premiums are quoted per trip rather than listed as a monthly price. The ownership handover announced in February 2026 may also change the contracting entity on a long policy — read the certificate you are issued, not this table.',
    items: [
      {
        name: 'Standard',
        price: 'quote-based, per trip',
        detail:
          'Emergency medical $125,000, evacuation and repatriation $400,000, trip cancellation $2,500, baggage $1,000.',
      },
      {
        name: 'Explorer',
        price: 'quote-based, per trip',
        detail:
          'Emergency medical $150,000, evacuation and repatriation $500,000, trip cancellation $10,000, baggage $2,000. Eligible for the pre-existing condition waiver if bought inside the stated time-sensitive window.',
        pick: true,
      },
      {
        name: 'Epic',
        price: 'quote-based, per trip',
        detail:
          'Emergency medical $250,000, evacuation and repatriation $700,000, trip cancellation $15,000, baggage $3,000, and the widest activity list — up to 340+ activities.',
      },
      {
        name: 'Annual',
        price: 'quote-based, per coverage term',
        detail:
          'Multi-trip cover: up to $100,000 per trip for medical and evacuation, $5,000 of cancellation cover per term, baggage up to $2,000 per trip.',
      },
    ],
  },
  pros: [
    {
      title: 'It covers the activities people actually go travelling for',
      body: 'World Nomads publishes a list of 250-plus covered activities as standard, rising to 340-plus on the top plan. Diving, trekking and skiing are on it rather than sold as an expensive rider, which is not true of the subscription products.',
    },
    {
      title: 'Real cancellation and baggage cover',
      body: 'Up to $15,000 of trip cancellation and $3,000 of baggage on the top US plan. If what you are protecting is flights, bookings or equipment, this is the only option in our long-trip comparison that insures it at a level worth claiming on.',
    },
    {
      title: 'You can buy or extend from anywhere',
      body: 'A plan can be bought online from anywhere in the world, with immediate cover for accidents and waiting periods on other benefits — and policies can be extended while you are still travelling rather than requiring you to fly home and start again.',
    },
    {
      title: 'Two decades of claims history, now with a larger owner',
      body: 'The brand has been operating since 2002, and the buyer is a specialist travel and international medical insurer rather than a private-equity holding company. Both parties have publicly committed to continuity of cover for existing policyholders.',
    },
  ],
  cons: [
    {
      title: 'Pre-existing conditions are excluded, and the waiver is narrow',
      body: 'The plans carry a pre-existing medical condition exclusion. Explorer and Epic offer a waiver, but only if the policy is bought inside a stated time-sensitive window after your first trip payment — miss it and the exclusion applies for the whole trip. Activities not on the covered list, riding without the correct licence, and alcohol-related incidents are excluded as standard.',
    },
    {
      title: 'The limits and the product change with where you live',
      body: 'Everything above is the US-resident version. Residents of other countries get different plan names, different maximums and a different underwriter, so a figure quoted in a review written for another market tells you very little about your own quote.',
    },
    {
      title: 'The ownership handover is not finished',
      body: 'The sale from nib to IMG was announced in February 2026 with staged completion and regulatory approvals outstanding, and the public sites still reflect the old structure in places. Nothing suggests cover is at risk, but the entity you contract with and the underwriter named on your certificate are worth reading rather than assuming.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.2,
      note: 'worldnomads.com listing, several thousand reviews',
    },
    {
      source: 'Trustpilot (worldnomads.co.uk)',
      value: 2.3,
      note: 'separate UK listing for the same brand, far smaller volume and a far lower score — worth reading before you buy from the UK',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across cover breadth, price and how much the exclusions remove',
    },
  ],
  bestFor: [
    'Trips built around adventure activities that subscription plans exclude',
    'Travellers with expensive bookings or equipment worth insuring',
    'Anyone who wants medical, cancellation and baggage cover in one policy',
  ],
  notFor: [
    'Open-ended travel with no return date — the fixed-term structure fights you',
    'Budget-led buyers: it costs noticeably more per month than subscription cover',
    'Anyone relying on a pre-existing condition being covered without meeting the waiver window',
  ],
  faq: [
    {
      q: 'Who owns World Nomads now?',
      a: 'In February 2026 nib announced the sale of the World Nomads international travel insurance brand to International Medical Group, a SiriusPoint subsidiary, for A$67.5m. Completion is staged and subject to regulatory approval; both companies have said cover and service continue for existing policyholders. Check which entity and underwriter your own certificate names.',
    },
    {
      q: 'Are pre-existing conditions covered?',
      a: 'Not by default — the plans carry a pre-existing medical condition exclusion. The Explorer and Epic plans include a waiver, but only if you buy within a stated window after your first trip payment and meet the other conditions. If a condition matters to your decision, read that clause first.',
    },
    {
      q: 'What would void my cover or get a claim refused?',
      a: 'Doing an activity that is not on the covered list, riding a motorbike without the correct licence, alcohol or drug-related incidents, travelling into a region your government advises against, and leaving possessions unattended — the last one removes most real-world theft claims. Claims are also refused for missing receipts, police reports and discharge notes.',
    },
    {
      q: 'Can I buy or extend a policy while I am already travelling?',
      a: 'Yes. World Nomads states you can buy a plan online from anywhere in the world, with immediate cover for accidents and a waiting period on some other benefits, and policies can be extended while you are away.',
    },
    {
      q: 'Are adventure sports really covered as standard?',
      a: 'A published list of 250-plus activities is, rising to 340-plus on the top plan. "Standard" means on the list and within its conditions — depth limits for diving, marked pistes for skiing, correct licensing for anything motorised. Check that your specific activity appears on the list for the plan you are buying, not just on the marketing page.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'worldnomads.com',
}
