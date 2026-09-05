/**
 * Brand page data for CCleaner (route: /brands/ccleaner).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://thehackernews.com/2018/04/ccleaner-malware-attack.html and
 *     https://securityaffairs.com/63148/breaking-news/ccleaner-supply-chain-malware.html
 *     — the 2017 supply-chain compromise: CCleaner 5.33, distributed with the
 *     Floxif malware from mid-August to 12 September 2017, roughly 2.3 million
 *     installs affected, discovered by Cisco Talos and reported to Piriform on
 *     13 September, a clean build shipped the next day
 *   - https://www.makeuseof.com/cleaning-windows-registry-with-ccleaner-isnt-helping-might-be-hurting/
 *     — independent testing finding registry cleaning produced no measurable
 *     performance change, and that Microsoft does not recommend registry
 *     cleaning as maintenance
 *   - https://newsroom.gendigital.com/2017-07-19-Avast-acquires-Piriform,-maker-of-CCleaner
 *     and Wikipedia's Avast entry — Piriform founded 2003/2004 in London,
 *     acquired by Avast in July 2017, and Avast's 2022 merger with
 *     NortonLifeLock forming Gen Digital, the same parent as our Recuva review
 *   - Independent pricing trackers cross-referenced for the shape of the
 *     Free/Professional/Professional Plus tiers (see price caveat below)
 *   - G2's CCleaner listing, sourced via search indexing rather than a live
 *     page open — flagged in the reputation entry below, exactly as the
 *     Softpedia figure is flagged on our Recuva page
 *
 * ⚠️ ccleaner.com's own pricing and Trustpilot pages did not render usable
 * content or blocked automated fetches during research, so (1) the
 * Professional price is an approximate range corroborated across independent
 * trackers, not read live on ccleaner.com — treat it as directional; (2) the
 * G2 rating below was not opened directly and carries a ⚠️ note for that
 * reason. Re-verify both before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const ccleaner: BrandPage = {
  slug: 'ccleaner',
  schemaType: 'SoftwareApplication',
  providerId: 'ccleaner',
  metaTitle: 'CCleaner review 2026 — the 2017 breach and registry cleaning',
  metaDescription:
    'An independent CCleaner review: what Free and Pro actually clean, the 2017 supply-chain compromise explained factually, and what registry cleaning really does.',
  intro:
    'CCleaner is Piriform’s long-running Windows cleanup utility, now published under Gen Digital, the same corporate parent as Avast, Norton and our separately reviewed Recuva. It clears temporary files, browser data and startup clutter competently. Two things any honest review has to cover: a 2017 breach that shipped malware inside a signed CCleaner installer, and the now-common finding that its signature registry cleaner does little measurable good on a modern Windows PC.',
  about: [
    'CCleaner was created in 2003 by Piriform, a small British software company, and became one of the most downloaded Windows utilities of its era. Avast acquired Piriform in July 2017; Avast itself merged with NortonLifeLock in 2022 to form Gen Digital, which is also the publisher of Recuva, AVG and Norton. That ownership history is not a reason to distrust the product on its own, but a buyer choosing between CCleaner and other cleanup tools should know the group it now sits inside.',
    'The core product is a junk-file and browser-data cleaner with a startup manager and, in the free tier, a registry cleaner. It does what it says: it finds temporary files, cache and leftover installer debris and removes them, and it can disable programs launching at boot. Independent testing of the registry cleaner specifically has found that clearing the "issues" it flags produces no measurable performance change on modern Windows, and Microsoft does not recommend registry cleaning as routine maintenance at all — a fact CCleaner’s marketing does not lead with.',
    'Professional adds the things that matter for unattended maintenance rather than deeper cleaning: scheduled automatic cleaning, a software updater, real-time monitoring and priority support. It does not clean more thoroughly than the free tier — the underlying engine is the same. Buying it is a bet on convenience and automation, not on a better clean, and a step worth taking only once the manual routine of opening Free and clicking clean has actually become a chore rather than an occasional five-minute task.',
  ],
  facts: [
    { label: 'First released', value: '2003' },
    { label: 'Owner', value: 'Piriform / Gen Digital' },
    { label: '2017 incident', value: 'Malware in installer' },
    { label: 'Registry cleaning benefit', value: 'Minimal on modern Windows' },
  ],
  plans: {
    title: 'Plans and what they actually add',
    note: 'ccleaner.com geolocates its checkout to local currency, and independent trackers disagree on the exact current dollar figure, so treat the Professional price below as a range rather than a fixed number — confirm it in your own market before quoting it in ad copy.',
    items: [
      {
        name: 'Free',
        price: '$0',
        detail:
          'Junk-file and browser cleaning, startup manager and the registry cleaner, run manually. No scheduling, no automatic updates and no real-time monitoring — you have to open it and click clean.',
        pick: true,
      },
      {
        name: 'Professional',
        price: 'around $30–45 a year, one device',
        detail:
          'Adds scheduled automatic cleaning, an automatic software updater, real-time monitoring and priority support. Does not clean more deeply than Free — the engine is identical.',
      },
      {
        name: 'Professional Plus',
        price: 'a higher annual price, multi-device',
        detail:
          'Bundles CCleaner Professional with other Piriform tools, including Recuva and Defraggler, across several devices. Only worth it if you actually want those other tools — buying it purely for CCleaner overpays for features you will not use.',
      },
    ],
  },
  pros: [
    {
      title: 'Does the basic cleanup job reliably',
      body: 'Temporary files, browser cache and leftover installer debris are cleared competently, and the startup manager is a genuinely useful way to see and disable what launches at boot without digging through Task Manager.',
    },
    {
      title: 'Free tier is not artificially crippled',
      body: 'Free includes the registry cleaner and full manual cleaning, not a stripped demo. The paid tiers add automation and monitoring rather than gating core cleaning behind a paywall.',
    },
    {
      title: 'A long operating history under a large security company',
      body: 'Two decades in the category, now backed by Gen Digital’s infrastructure and support organisation, which handles the automatic-update and monitoring plumbing behind the paid tiers.',
    },
    {
      title: 'Lightweight and fast to run',
      body: 'It is a small, quick utility rather than a heavyweight suite. Scanning and cleaning a typical drive takes minutes, not the tens of minutes some "PC optimiser" competitors demand.',
    },
  ],
  cons: [
    {
      title: 'A real, documented supply-chain compromise in 2017',
      body: 'Version 5.33, distributed between mid-August and 12 September 2017, was modified to include the Floxif malware and affected an estimated 2.3 million installs before Cisco Talos discovered it. A genuine breach, not a rumour, though a resolved, historical one.',
    },
    {
      title: 'The registry cleaner does little measurable good',
      body: 'Independent testing has found clearing the "issues" CCleaner’s registry cleaner flags produces no measurable performance change on modern Windows. Microsoft does not recommend registry cleaning as maintenance, and the feature implies a fix it rarely delivers.',
    },
    {
      title: 'Professional buys automation, not a better clean',
      body: 'Scheduled runs, an updater and real-time monitoring are the entire pitch for paying. Anyone expecting Professional to find and remove more than Free is buying on a false premise — the underlying cleaning engine is unchanged.',
    },
  ],
  reputation: [
    {
      source: 'G2',
      value: 4.5,
      note: '⚠️ figure surfaced via search indexing during research, not confirmed on a live G2 page fetch — re-verify before use',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite: a reliable, honest free cleaner, weighed against a real 2017 breach and a headline registry-cleaning feature with little proven benefit',
    },
  ],
  bestFor: [
    'Windows users who want a fast, no-frills junk and browser cleaner',
    'Anyone happy running a manual clean occasionally rather than paying for automation',
    'People who also want Recuva or Defraggler and would rather buy one bundle than several tools',
    'Users comfortable evaluating a security incident from 2017 in context rather than avoiding the brand outright',
  ],
  notFor: [
    'Anyone buying Professional specifically expecting a deeper clean than Free provides',
    'Users hoping registry cleaning will meaningfully speed up a modern Windows PC — the evidence does not support that',
    'Anyone who wants a publisher untouched by a past security incident, even a resolved one — Gen Digital’s other brands share the same 2017 history through Piriform',
  ],
  faq: [
    {
      q: 'Is CCleaner still safe to use after the 2017 hack?',
      a: 'Yes. The 2017 compromise affected one specific version (5.33) distributed for about four weeks before Cisco Talos discovered it and Piriform shipped a clean build within a day of being notified. There is no evidence of a repeat incident since, and the response — a public disclosure, a fixed build and law-enforcement cooperation — is the standard playbook for handling a supply-chain breach. It is a real historical event worth knowing, not an ongoing risk.',
    },
    {
      q: 'Does registry cleaning actually speed up my PC?',
      a: 'Independent testing has found little to no measurable performance improvement from clearing the issues CCleaner’s registry cleaner flags, and Microsoft does not recommend registry cleaning as routine maintenance. It is not dangerous in normal use, but do not expect it to be the fix for a slow PC.',
    },
    {
      q: 'What does Professional actually add over Free?',
      a: 'Scheduled automatic cleaning, an automatic software updater, real-time monitoring and priority support. It does not clean more thoroughly — Free and Professional share the same cleaning engine under the hood. Professional is a convenience and automation purchase, not a deeper-clean purchase, and buying it expecting the latter is a common source of disappointment.',
    },
    {
      q: 'Is CCleaner the same company as Recuva?',
      a: 'Yes. Both are published by Piriform, which has been part of Gen Digital since Avast’s 2017 acquisition and Avast’s later 2022 merger with NortonLifeLock. If you already use one, the other comes from the same team and, on Professional Plus, can be bought bundled together.',
    },
    {
      q: 'Should I use the registry cleaner at all?',
      a: 'It is unlikely to cause harm in normal use, since CCleaner backs up changes before applying them, but the realistic benefit on a modern Windows installation is close to zero. If you want CCleaner mainly for temp-file and browser cleanup, you can safely ignore the registry section entirely.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'ccleaner.com',
}
