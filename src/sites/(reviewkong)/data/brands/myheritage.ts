/**
 * Brand page data for MyHeritage (route: /brands/myheritage).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://apps.apple.com/us/app/myheritage-family-tree-dna/id477971748 —
 *     App Store rating and review count, opened directly
 *   - https://www.businesswire.com/news/home/20210224005905/en/MyHeritage-to-be-Acquired-by-Leading-Private-Equity-Firm-Francisco-Partners
 *     and https://nocamels.com/2021/02/us-firm-acquire-israeli-genealogy-myheritage/
 *     — founding, Israel HQ, 2021 acquisition by Francisco Partners
 *   - https://terms.law/Privacy-Watchdog/dna-testing/myheritage/ — summary of
 *     MyHeritage's own DNA sample-retention, deletion and law-enforcement
 *     policy language (used to describe the shape of the policy, not to quote
 *     figures we did not independently confirm)
 *   - General pricing structure (kit-plus-trial, auto-renewing annual
 *     membership) corroborated across multiple 2026 third-party pricing
 *     write-ups; MyHeritage's own pricing page geo-redirected away from
 *     English during research, so no exact prices are printed below — see the
 *     accuracy note under `plans`.
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign — in particular,
 * confirm current kit and membership prices directly on myheritage.com from a
 * US-located session, since automated fetches during research were
 * geo-redirected to a non-English storefront. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const myheritage: BrandPage = {
  slug: 'myheritage',
  providerId: 'myheritage',
  metaTitle: 'MyHeritage review 2026 — DNA kit, subscription, privacy',
  metaDescription:
    'An independent MyHeritage review: what the DNA kit alone unlocks, what needs a paid membership, how the auto-renewal works, and what to check in the privacy policy first.',
  intro:
    'MyHeritage sells a DNA ancestry kit and, separately, a records-and-family-tree subscription that most buyers end up needing to make sense of their results. The kit tells you your ethnicity estimate and surfaces DNA matches on its own. Building an actual family history out of historical records is the paid part, and it renews automatically unless you cancel.',
  about: [
    'Founded in Israel in 2003 by Gilad Japhet, MyHeritage began as family-tree software before adding DNA testing in 2016. It was acquired by the US private equity firm Francisco Partners in 2021 for a reported $600 million and has stayed independent of Ancestry, its larger US rival, ever since. The company still operates out of Israel and serves a genuinely global user base, with the interface available in dozens of languages rather than English-only.',
    'The DNA side runs on a cheek-swab kit processed by a third-party lab, returning an ethnicity breakdown and a list of genetic relative matches within a few weeks of the sample arriving. Layered on top is MyHeritage’s records business: a subscription that unlocks billions of historical documents, its Smart Matches and Record Matches tools, and features like photo colourisation and animation that get most of the marketing attention but do not, by themselves, tell you anything about who your ancestors actually were.',
    'The commercial model depends on that layering, and it is worth understanding before you buy. A DNA kit is commonly bundled with a short trial of the paid membership, and the membership then renews automatically at a materially higher annual rate unless it is cancelled before the trial or term ends. Read the checkout page for the exact term and renewal price at the time you buy, because both change with promotions, and note the cancellation date somewhere you will actually see it again.',
  ],
  facts: [
    { label: 'Founded', value: '2003, Israel' },
    { label: 'Owner', value: 'Francisco Partners (2021)' },
    { label: 'DNA kit unlocks', value: 'Ethnicity + matches only' },
    { label: 'Records access', value: 'Needs paid membership' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'MyHeritage bundles DNA kits with a trial of a paid membership, and the membership renews automatically at a higher price than the introductory term. Check the exact figures at checkout — they move with promotions and were geo-redirected away from English during our research, so we are not printing point prices we could not confirm.',
    items: [
      {
        name: 'DNA kit only',
        price: 'One-off purchase, frequent discounts',
        detail:
          'Covers the ethnicity estimate, DNA relative matches and the basic chromosome browser. No records subscription included beyond a short trial.',
        pick: true,
      },
      {
        name: 'Kit + membership trial',
        price: 'One-off kit price, short trial included',
        renews: 'Auto-renews annually at the standard membership rate',
        detail:
          'The common bundle: buy the kit, get a short trial of a records membership, then it rolls onto a recurring annual charge unless you cancel first.',
      },
      {
        name: 'Records membership alone',
        price: 'Recurring annual or quarterly charge',
        renews: 'Auto-renews at the same or a higher rate',
        detail:
          'For people who already have DNA results (from MyHeritage or elsewhere) and just want the records, tree-building tools and Record Matches.',
      },
    ],
  },
  pros: [
    {
      title: 'DNA results work without a subscription',
      body: 'Unlike some rivals, the ethnicity estimate and the list of genetic matches are yours once the kit is processed. You are not locked out of your own raw results by a paywall.',
    },
    {
      title: 'Large international records base',
      body: 'MyHeritage leans harder into non-US and European records than some US-centric competitors, which matters if your family history runs through Europe, Scandinavia or Latin America.',
    },
    {
      title: 'Automated hints do real work',
      body: 'Smart Matches and Record Matches surface likely connections and documents without manual searching, which saves hours once a tree has a handful of names in it.',
    },
    {
      title: 'Strong App Store reputation',
      body: 'The mobile app carries a very high rating from a meaningful review volume, which is unusual for a subscription-driven genealogy product and suggests the day-to-day experience holds up.',
    },
  ],
  cons: [
    {
      title: 'The kit alone is the small part of the product',
      body: 'Ethnicity percentages and a match list are interesting for an afternoon. Turning them into an actual family history needs the records subscription, which is the part that costs real money over time.',
    },
    {
      title: 'Auto-renewal is the standard complaint',
      body: 'Independent reviews repeatedly flag confusion over when a trial ends and the annual charge lands, and difficulty cancelling before it does. Put a calendar reminder in before the trial period, not after.',
    },
    {
      title: 'Genetic privacy is on you to check',
      body: 'MyHeritage states it does not sell DNA data and requires a court order for law-enforcement requests, but retention periods and third-party research sharing depend on settings you have to actively review, not defaults you can ignore.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.9, note: 'based on roughly 66,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'strong DNA product, weighed down by subscription and privacy friction',
    },
  ],
  bestFor: [
    'Anyone whose family history runs through Europe rather than only the US',
    'People who want DNA matches without being forced into records straight away',
    'Existing genealogy hobbyists who will actually use a records subscription',
    'Users comfortable reading a privacy policy before swabbing their cheek',
  ],
  notFor: [
    'Anyone who wants a one-off DNA result with zero renewal risk',
    'Buyers who will not set a cancellation reminder before a trial ends',
    'Anyone with hard privacy objections to consumer DNA databases generally',
  ],
  faq: [
    {
      q: 'Does the DNA kit alone unlock my full family tree?',
      a: 'No. The kit gives you an ethnicity estimate and a list of DNA relative matches, which you keep regardless of whether you ever subscribe. Viewing the historical records behind those matches, and most of the tree-building and hint tools, needs a paid membership on top of the kit price.',
    },
    {
      q: 'Does the membership renew automatically?',
      a: 'Yes, in the standard case. Kits are commonly bundled with a short trial that rolls into a recurring annual or quarterly charge unless you cancel before the term ends. This is the single most common complaint in independent reviews, so confirm the exact renewal date and price at checkout rather than assuming the trial price is permanent.',
    },
    {
      q: 'Can I delete my DNA data afterwards?',
      a: 'MyHeritage says users can request destruction of a physical DNA sample and deletion of their genetic data through account settings or by contacting the company, and that deletion is permanent. Read the current privacy policy before testing if this matters to you.',
    },
    {
      q: 'Will law enforcement get access to my DNA?',
      a: 'MyHeritage states that using its DNA service for law-enforcement or forensic purposes is prohibited absent a valid court order or subpoena. That is a policy position, not a technical guarantee, so read the current terms rather than take it on faith.',
    },
    {
      q: 'Is MyHeritage better than Ancestry?',
      a: 'Neither is strictly better; they specialise differently. MyHeritage tends to have stronger European and international records and a smaller but still substantial DNA network. Ancestry has a larger US records base and a bigger DNA network overall. The right choice depends on where your ancestors actually lived, and serious researchers sometimes end up using both.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'myheritage.com',
}
