/**
 * Brand page data for Genki (route: /brands/genki).
 *
 * SOURCES — figures below come from these pages, checked 21 August 2026:
 *   - https://genki.world/products/traveler — the €1,000,000 cover maximum, the
 *     €50 deductible per insurance case (waived for inpatient stays), the
 *     "ages up to 69" limit, "sign up from home or while already abroad",
 *     monthly cancellation after a one-month minimum, the sports list and the
 *     one-year pre-existing-condition look-back
 *   - https://help.genki.world/en/articles/10769959-what-is-covered-by-genki-traveler
 *     — cover detail, sports limits, home-country limitation
 *   - https://help.genki.world/en/articles/9292986-where-can-i-find-my-insurance-certificate
 *     — the insurance certificate used as proof for visa applications
 *   - https://guide.genki.world/genki-traveler-vs-genki-native/ — Traveler vs
 *     Native Basic vs Native Premium: entry prices, durations, age limits,
 *     home-country cover
 *   - https://www.dr-walter.com/en/consumer-information/partner-products/genki/
 *     — DR-WALTER's partner listing for the Genki products
 *   - https://www.trustpilot.com/review/genki.world — the public score
 *
 * ⚠️ RE-VERIFY BEFORE LAUNCH AND BEFORE EVERY CAMPAIGN. Genki has renamed its
 * products more than once (Explorer → Traveler, World Resident → Native), so an
 * older comparison may be describing a plan that no longer exists under that
 * name. Prices vary by age, chosen deductible, medical questionnaire and whether
 * the USA and Canada are included, so the "from" figures are entry rates only.
 *
 * ⚠️ THE VISA CLAIM. ../travel/providers.ts says "visa-compliant tier
 * available". What is verifiable is narrower: Genki issues an insurance
 * certificate in the member centre for use as proof of cover, its cover levels
 * exceed the published minimums, and it runs landing pages for specific
 * digital-nomad visas. A blanket claim that any given consulate accepts it
 * could NOT be verified and is not made on this page.
 *
 * Nothing here is insurance advice. Read the consumer conditions issued for
 * your own country of residence before buying.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const genki: BrandPage = {
  slug: 'genki',
  providerId: 'genki',
  schemaType: 'Product',
  metaTitle: 'Genki insurance review 2026 — cover and exclusions',
  metaDescription:
    'An independent Genki review: the one-year look-back on pre-existing conditions, what Traveler and Native exclude, and what the visa claim really means.',
  intro:
    'Genki writes the most readable policy documents in long-stay travel cover, which matters mainly because it makes the exclusions easy to find. The hard one is the look-back: anything diagnosed or treated in the year before your policy starts is outside the cover. Everything else — the €1,000,000 maximum, the €50 outpatient deductible, the sports list — follows from documents you can actually read before you buy.',
  about: [
    'Genki is a European brand that packages health cover for people who live out of a suitcase, and it now sells two distinct products. Genki Traveler is travel health insurance for trips of up to a year, for ages up to 69, with a €1,000,000 maximum and a €50 deductible per insurance case that is waived for inpatient treatment. Genki Native is international health insurance for people settling somewhere: a one-year minimum term, sign-up up to age 55 with no upper age limit once you are covered, and two levels — Basic and Premium.',
    'The exclusions are conventional but specific, which is the point. Conditions you were diagnosed with or treated for within one year before the policy starts are excluded. Recreational sport is broadly covered — hiking, cycling, diving, skiing, surfing — but only within limits: skiing on marked trails rather than off-piste or heli-skiing, biking that is not extreme downhill, and nothing professional; a published list of genuinely dangerous activities is excluded outright. Home-country cover on Traveler is emergencies only, for the first six weeks of each stay, so it is not a substitute for insurance where you are actually registered as resident.',
    'The insurers behind the products differ, which is worth knowing before you compare it with an American subscription plan. Traveler’s reimbursement sits with Squarelife; the Native and older Resident line is written on Barmenia paper, and DR-WALTER lists the Genki products as a partner offering. That European structure is why some readers pick Genki, and it is also why the documents read as they do. It is still not advice: read the consumer conditions issued for your own residence before you buy, because the version that binds you is not the summary on this page.',
  ],
  facts: [
    { label: 'Products', value: 'Traveler + Native' },
    { label: 'Traveler maximum', value: '€1,000,000' },
    { label: 'Deductible', value: '€50 per case' },
    { label: 'Pre-existing look-back', value: '12 months' },
  ],
  plans: {
    title: 'The tiers, and what each one is for',
    note: 'Entry prices only. The premium you are quoted depends on your age, the deductible you choose, your answers to the medical questions on Native, and whether the USA and Canada are inside the cover area — Traveler is capped at one year and Native requires a minimum term of a year. Take a live quote and read the consumer conditions attached to it rather than this table.',
    items: [
      {
        name: 'Genki Traveler',
        price: 'from around €52 per month',
        renews: 'monthly, cancellable after a one-month minimum',
        detail:
          'Travel health cover for trips up to a year, ages 0–69. €1,000,000 maximum, €50 deductible per insurance case, waived for inpatient stays. Emergencies and medically necessary treatment only; home-country cover is emergencies for the first six weeks of each stay.',
        pick: true,
      },
      {
        name: 'Genki Native Basic',
        price: 'from around €180 per month',
        renews: 'minimum term one year, then ongoing',
        detail:
          'International health insurance for people staying put. Sign-up to age 55, no upper limit once covered. Adds dental and alternative medicine, and home-country cover up to 30 days per insurance year within a €250,000 limit.',
      },
      {
        name: 'Genki Native Premium',
        price: 'from around €260 per month',
        renews: 'minimum term one year, then ongoing',
        detail:
          'Everything in Basic plus preventive care, health checkups and vaccines, and full cover in your country of citizenship — with stated exceptions for the USA and Canada.',
      },
    ],
  },
  pros: [
    {
      title: 'Policy wording you can actually read',
      body: 'The consumer conditions and help-centre articles state cover limits, deductibles and sports restrictions in ordinary sentences. In a category where the exclusions decide everything, a document a buyer will finish is a genuine feature rather than a nicety.',
    },
    {
      title: 'A high maximum for the price',
      body: 'Traveler’s €1,000,000 maximum is well above what a serious hospitalisation usually costs outside the United States, and far above the medical minimum that short-stay visa rules specify. The €50 deductible applies to outpatient claims only.',
    },
    {
      title: 'You can start it while already abroad',
      body: 'Genki states you can sign up from home or while already travelling, and the insurance certificate appears in the member centre for use as proof of cover at a border or on a visa application.',
    },
    {
      title: 'A genuine path from travelling to living somewhere',
      body: 'Traveler runs for up to a year; Native is built for the point at which you stop travelling and start living somewhere, with routine care and — on Premium — preventive treatment. Few competitors cover both stages under one brand.',
    },
  ],
  cons: [
    {
      title: 'The twelve-month look-back is strict',
      body: 'Anything you were diagnosed with or treated for in the year before the policy starts is excluded, which catches far more people than the phrase "pre-existing condition" suggests — a single consultation about a recurring problem is enough. Read this clause before comparing prices.',
    },
    {
      title: 'Native is a commitment, not a subscription',
      body: 'A minimum term of a year, a medical questionnaire that affects your premium, and a sign-up age cap of 55. It is not the cancel-any-time arrangement the Traveler plan is, and it should not be compared with one.',
    },
    {
      title: '"Visa-compliant" is not a guarantee anybody can give',
      body: 'Genki issues the certificate and the cover levels clear the published minimums, but acceptance is decided by the consulate processing your application, and some countries impose stricter or locally licensed insurer rules on long-stay national visas. We could not verify a blanket acceptance claim, and neither should you.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.1,
      note: 'genki.world listing, several hundred reviews; regional listings for the same brand score slightly differently',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite across clarity of wording, cover level and how much the exclusions remove',
    },
  ],
  bestFor: [
    'Long stays where you will need routine healthcare, not only emergencies',
    'Readers who want to understand the exclusions before buying rather than after a claim',
    'Travellers who need a certificate of cover for a visa application or a border check',
  ],
  notFor: [
    'Anyone needing cover for a condition treated in the last twelve months',
    'Trips where the value at risk is bookings, baggage or equipment',
    'Over-55s looking to start the Native plan, or anyone unwilling to commit to a year',
  ],
  faq: [
    {
      q: 'Are pre-existing conditions covered?',
      a: 'No. Genki Traveler excludes conditions you were diagnosed with, treated for, or had symptoms of within one year before the policy starts. That look-back is stricter than it sounds — one consultation inside the window is enough to bring a condition within the exclusion.',
    },
    {
      q: 'What would void my cover or get a claim refused?',
      a: 'Treatment for something inside the pre-existing look-back, professional sport or an activity on the excluded list, skiing off-piste rather than on marked trails, and treatment in your home country beyond the short window the policy allows. Missing documentation refuses more claims than any of these.',
    },
    {
      q: 'Does Genki satisfy a visa requirement?',
      a: 'It issues an insurance certificate in the member centre that people use as proof of cover, and the cover levels sit far above the medical minimums published for short-stay visas. Whether a specific consulate accepts it is their decision — several countries apply extra rules to long-stay national visas — so confirm with the office handling your application.',
    },
    {
      q: 'Traveler or Native — which one do I need?',
      a: 'Traveler if you are moving between countries for up to a year and want emergency and medically necessary treatment covered. Native if you are settling somewhere for a year or more and want routine care, dental and, on Premium, preventive treatment. Native asks medical questions and caps sign-up at 55.',
    },
    {
      q: 'Can I buy it after I have already left home?',
      a: 'Yes. Genki states you can sign up from home or while already abroad, and Traveler can be cancelled monthly once the one-month minimum has passed. Anything that began before cover started is still excluded.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'genki.world',
}
