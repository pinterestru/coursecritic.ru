/**
 * Brand page data for Ancestry (route: /brands/ancestry).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://apps.apple.com/us/app/ancestry-family-history-dna/id349554263 —
 *     App Store rating and review count, opened directly
 *   - https://www.ksl.com/article/50003379/lehi-based-ancestry-acquired-in-47-billion-deal
 *     — Blackstone's 2020 acquisition, deal value
 *   - https://en.wikipedia.org/wiki/Ancestry.com — founding year (1996) and
 *     ownership history (Permira, Silver Lake/GIC, Blackstone) cross-checked
 *     against the KSL report above
 *   - https://www.ancestry.com/corporate/newsroom/press-releases/ancestry-surpasses-15-million-members-its-dna-network-powering-unparalleled
 *     — DNA network scale, used only to support "one of the largest" language,
 *     not to print a current member count, since the release predates 2026
 *   - General pricing structure (kit-plus-membership bundles, tiered monthly
 *     subscriptions, 14-day free trial) corroborated across multiple 2026
 *     third-party pricing write-ups; ancestry.com's own pricing was not
 *     re-fetched live for this page, so no point prices are printed — see the
 *     accuracy note under `plans`.
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified directly on ancestry.com before any
 * campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ancestry: BrandPage = {
  slug: 'ancestry',
  providerId: 'ancestry',
  metaTitle: 'Ancestry review 2026 — DNA kit, subscription tiers, privacy',
  metaDescription:
    'An independent Ancestry review: what the AncestryDNA kit unlocks on its own, how the records subscription tiers differ, the auto-renewal trap, and the privacy policy basics.',
  intro:
    'Ancestry is the largest consumer genealogy company in the US, built on two separate products sold together: a DNA test and a records subscription. The DNA test gives you an ethnicity estimate and DNA matches by itself. Everything built from historical documents, which is most of what makes a family tree useful, sits behind one of several subscription tiers that renew automatically.',
  about: [
    'Ancestry traces back to 1996 and has changed hands repeatedly since: a 2009 IPO, a 2012 buyout by Permira, investment from Silver Lake and Singapore’s GIC in 2016, and a $4.7 billion acquisition by Blackstone that closed in December 2020. It remains the largest player in US consumer genealogy by records volume and DNA network size, and its AncestryDNA test is usually the default recommendation for someone starting from scratch in the United States.',
    'The DNA kit returns an ethnicity estimate and a list of genetic relative matches without requiring a subscription, which is the same shape most competitors follow now. Building a documented family tree from census records, military files, immigration papers and newspaper archives needs a paid membership, and Ancestry sells several tiers of it: a US-only records tier, a broader international tier, and an "All Access" tier that bundles in Fold3 military records and Newspapers.com on top.',
    'That tiering is deliberate segmentation, not a technicality, and it is easy to get wrong. Someone researching only US ancestors overpays on the international tier; someone with European or other overseas roots is under-served by the US-only one. Read the tier descriptions carefully before buying, because the difference between them is exactly the records you are trying to find, and every tier renews automatically at its standard rate once any introductory or promotional term ends.',
  ],
  facts: [
    { label: 'Founded', value: '1996' },
    { label: 'Owner', value: 'Blackstone (since 2020)' },
    { label: 'DNA kit unlocks', value: 'Ethnicity + matches only' },
    { label: 'Records tiers', value: 'US, World, All Access' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'Ancestry sells the DNA kit and the records membership separately, and the membership comes in several tiers scoped by geography. Every tier renews automatically at the standard rate once any trial or promotional term ends — confirm the current prices at checkout, since we are not printing point figures we did not re-fetch live.',
    items: [
      {
        name: 'AncestryDNA kit only',
        price: 'One-off purchase, frequent discounts',
        detail:
          'Ethnicity estimate and DNA relative matches. No records access beyond what a free account already shows.',
        pick: true,
      },
      {
        name: 'US Discovery membership',
        price: 'Monthly subscription',
        renews: 'Auto-renews at the standard monthly rate',
        detail:
          'US records, the tree builder and search tools. The right tier if your research is entirely US-based.',
      },
      {
        name: 'World Explorer membership',
        price: 'Monthly or quarterly subscription',
        renews: 'Auto-renews at the standard rate',
        detail: 'Adds international records on top of the US collection.',
      },
      {
        name: 'All Access membership',
        price: 'Higher monthly or quarterly subscription',
        renews: 'Auto-renews at the standard rate',
        detail:
          'World Explorer plus Fold3 (military records) and Newspapers.com. The most expensive tier and the easiest to overbuy.',
      },
    ],
  },
  pros: [
    {
      title: 'The largest US records collection in the category',
      body: 'Ancestry’s scale advantage is real for anyone researching US-based family lines: census, immigration, military and vital records go deeper here than most competitors, and new collections are added on an ongoing basis.',
    },
    {
      title: 'DNA network size improves match quality',
      body: 'A bigger DNA database means more potential relative matches and better odds of connecting to a documented line, which is the single biggest driver of useful results.',
    },
    {
      title: 'DNA results are not paywalled',
      body: 'Ethnicity estimates and match lists are available from the kit alone, so you are not forced into a subscription just to see your own raw DNA results.',
    },
    {
      title: 'Very high App Store rating at real scale',
      body: 'The mobile app holds a strong rating from several hundred thousand reviewers, a volume large enough to be a genuine signal rather than an early-adopter skew.',
    },
  ],
  cons: [
    {
      title: 'Subscription tiering is easy to overbuy or underbuy',
      body: 'Pick the geography-scoped tier that does not match where your ancestors actually lived and you either miss the records you need or pay for international access you never use.',
    },
    {
      title: 'Auto-renewal is a recurring complaint theme',
      body: 'Independent reviews consistently flag dissatisfaction with subscription cost and the renewal mechanic specifically, not just the underlying price. Cancel before a trial or promotional term ends if you do not want the standard rate.',
    },
    {
      title: 'Genetic and account data policy needs reading, not assuming',
      body: 'Ancestry says it will not share genetic data with insurers or employers and requires legal process for law-enforcement requests, but research-sharing consent and retention specifics are opt-in settings you have to check yourself.',
    },
  ],
  reputation: [
    { source: 'App Store (iOS)', value: 4.8, note: 'based on roughly 637,000 ratings' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'the strongest US records base in the category, offset by tiering and renewal friction',
    },
  ],
  bestFor: [
    'Anyone whose ancestry research is mostly or entirely US-based',
    'Users who want the largest DNA match network to work with',
    'People willing to pick the right subscription tier rather than default to the biggest one',
    'Buyers who will actively manage a renewal date rather than forget it',
  ],
  notFor: [
    'Casual users who only want an ethnicity estimate and nothing more',
    'Researchers focused entirely outside the US, where MyHeritage may serve records better',
    'Anyone who wants to avoid an auto-renewing subscription entirely',
  ],
  faq: [
    {
      q: 'Do I need a subscription to see my DNA results?',
      a: 'No. The ethnicity estimate and your list of DNA matches are included with the test itself, and you keep them regardless of whether you subscribe afterwards. A membership is only needed to view the historical records, documents and family trees connected to those matches.',
    },
    {
      q: 'Which membership tier should I buy?',
      a: 'Match the tier to where your ancestors actually lived rather than defaulting to the biggest one. US Discovery covers US records only; World Explorer adds international collections; All Access adds Fold3 military records and Newspapers.com. Buying more geography than your research needs is the most common overspend on this site.',
    },
    {
      q: 'Does the membership renew automatically?',
      a: 'Yes. Every membership tier auto-renews at its standard rate once a trial or promotional term ends, and this is one of the most common complaints in independent reviews. Set a reminder well before that date if you only wanted short-term access for a specific research project.',
    },
    {
      q: 'What happens to my DNA data if I close my account?',
      a: 'Ancestry says DNA profiles can be deleted on request, though it may retain some non-genetic account details for legal or research reasons. If you consented to its research programme separately, that consent is managed independently of account deletion — check both.',
    },
    {
      q: 'Can law enforcement access my results?',
      a: 'Ancestry states it requires a valid court order or search warrant before releasing personal information to law enforcement and publishes a transparency report on such requests. Read the current privacy statement rather than relying on a summary, including this one.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ancestry.com',
}
