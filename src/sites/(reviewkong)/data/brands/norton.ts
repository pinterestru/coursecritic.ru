/**
 * Brand page data for Norton (route: /brands/norton).
 *
 * SOURCES (checked 18 August 2026):
 *   - https://us.norton.com/products — current first-year offers, device counts,
 *     cloud-backup allowances, 60-day refund and auto-renewal terms
 *   - https://us.norton.com/pricing — Norton's own published renewal price list
 *     (stated as effective March 2026)
 *   - https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/
 *   - https://www.av-comparatives.org/tests/real-world-protection-test-february-may-2026/
 *   - https://www.gendigital.com/us/en/family-of-brands/ and
 *     https://en.wikipedia.org/wiki/Gen_Digital — ownership
 *   - https://www.heise.de/en/news/Norton-relies-on-Avast-scan-engine-9866215.html
 *     — AV-Comparatives identified, and Gen Digital confirmed (September 2024),
 *     that Norton protection now runs Avast's scan engine
 *   - https://krebsonsecurity.com/2022/01/norton-360-now-comes-with-a-cryptominer/
 *     and https://support.norton.com/sp/en/us/home/current/solutions/v20220609114424467
 *     — the Norton Crypto episode and its 14 September 2022 shutdown
 *   - https://www.trustpilot.com/review/www.norton.com — 4.7 from 83,089 reviews
 *   - https://apps.apple.com/app/norton-mobile-security/id1278474169 — App Store score
 *
 * ⚠️ Every figure here is a working value captured on the date above and MUST be
 * re-verified before launch and before each campaign. Promotional pricing in
 * consumer security moves monthly, and Norton's published renewal list has its
 * own effective date. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

// NOTE: deepLink must stay on the bare `norton.com` apex. The affiliate offer is
// keyed to that host; `us.norton.com` resolves fine but falls straight through the
// /click redirect untracked, so every click from this page would earn nothing.
export const norton: BrandPage = {
  slug: 'norton',
  providerId: 'norton',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Norton 360 review 2026 — what year two actually costs',
  metaDescription:
    'An independent Norton 360 review: the AV-TEST and AV-Comparatives results, what is genuinely included, who owns the brand, and the renewal price Norton publishes but does not advertise.',
  intro:
    'Norton 360 is the most recognised name in consumer security and it earns the top marks from the independent labs that matter. It is also the clearest example in this category of a product sold on a first-year price that has very little to do with what you will pay from year two — Norton publishes both numbers, on separate pages, and only one of them appears on the buy button.',
  about: [
    'The Norton name has been on consumer antivirus since the early 1990s, but the company behind it now is Gen Digital. Gen was formed when NortonLifeLock merged with Avast in 2022, and its consumer portfolio also includes AVG, Avira, CCleaner, LifeLock and ReputationDefender. That matters if you are shortlisting Norton against Avast or AVG to hedge your bets: those are three brands of one company, not three companies. It goes further than the ownership chart. In September 2024 AV-Comparatives identified Avast’s scan engine inside Norton-branded protection and Gen Digital confirmed the change, so Norton, Avast and AVG now detect with the same engine as well as banking into the same accounts.',
    'On detection, the independent evidence is genuinely strong. AV-TEST’s April 2026 Windows 11 home-user round gave Norton 360 a full 6 out of 6 for protection, performance and usability — 18 out of 18, with TOP PRODUCT certification. AV-Comparatives’ Real-World Protection Test covering February to May 2026 recorded a 99.3% protection rate for Norton with five false alarms, in the top ADVANCED+ band. Bitdefender edged it on protection rate in that same test, by two tenths of a percentage point, which is not a reason to choose between them.',
    'What you are actually buying is a bundle. Every 360 plan includes Norton VPN with no data allowance to watch, a password manager, dark web monitoring and the AI scam-detection features Norton has pushed hard since 2025. Cloud backup is Windows-only, per Norton’s own footnotes, and the deepfake detection has specific Windows 11 and hardware requirements. The LifeLock tiers add real identity-theft monitoring and reimbursement cover, but those are United States products — outside the US you are buying the security suite alone.',
  ],
  facts: [
    { label: 'Owner', value: 'Gen Digital (also Avast, AVG, Avira)' },
    { label: 'Devices', value: '5 on Deluxe' },
    { label: 'Deluxe renewal', value: '$124.99/yr' },
    { label: 'Refund window', value: '60 days, annual plans' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'The headline figure is a first-year offer; the second figure is Norton’s own published renewal rate, and it is roughly three times the price you paid to sign up. Norton emails the renewal price beforehand and bills up to 35 days ahead, so the reminder does arrive — it is just easy to miss. Compare this product against rivals on the renewal number.',
    items: [
      {
        name: 'Norton 360 Standard',
        price: '$34.99 for the first year',
        renews: 'renews at $94.99/yr',
        detail: '3 devices, 2 GB cloud backup. Enough for one person with a laptop and a phone.',
      },
      {
        name: 'Norton 360 Deluxe',
        price: '$39.99 for the first year',
        renews: 'renews at $124.99/yr',
        detail:
          '5 devices, 50 GB cloud backup, parental controls. The tier we would buy — $5 more in year one for two more devices and 25 times the backup.',
        pick: true,
      },
      {
        name: 'Norton 360 with LifeLock Select Plus',
        price: '$99.99 for the first year',
        renews: 'renews at $189.99/yr',
        detail:
          '10 devices, 250 GB backup and LifeLock identity monitoring with reimbursement cover. Only worth the money if you are in the US, where LifeLock operates.',
      },
    ],
  },
  pros: [
    {
      title: 'Top marks from both independent labs',
      body: 'AV-TEST scored Norton 360 a clean 18 out of 18 on Windows 11 in April 2026, and AV-Comparatives put it in the ADVANCED+ band at 99.3% real-world protection across February to May 2026. Those are the two testers worth quoting, and Norton is at the front of both.',
    },
    {
      title: 'The VPN has no data cap',
      body: 'Norton VPN is included on every 360 plan and runs unmetered. That is the difference against Bitdefender, whose bundled VPN stops at 200 MB per device per day unless you pay for the tier above. If the bundled VPN is part of why you are buying a suite, this is the one that works as a VPN.',
    },
    {
      title: 'Sixty days to change your mind — including on a renewal',
      body: 'Norton’s published policy gives a full refund within 60 days of payment on annual subscriptions, and that applies to each annual renewal, not only the first purchase. In a category where the renewal charge is the main complaint, a two-month window to reverse it is the most useful term in the contract.',
    },
    {
      title: 'Identity protection that is a product, not a badge',
      body: 'The LifeLock tiers carry credit monitoring, stolen-funds reimbursement and a claims process behind them. Plenty of rivals list "identity protection" and deliver an email-breach lookup. This is the substantive version — for US buyers.',
    },
  ],
  cons: [
    {
      title: 'The renewal is roughly triple the signup price',
      body: 'Deluxe is $39.99 for the first year and $124.99 every year after. Standard goes $34.99 to $94.99. That is the steepest first-year-to-renewal jump among the mainstream suites, and the renewal figure lives on a separate page from the one with the buy button.',
    },
    {
      title: 'Norton shipped a crypto miner inside the antivirus',
      body: 'Norton Crypto launched in 2021: an opt-in Ethereum miner bundled into Norton 360, with Norton taking a 15% cut of what a subscriber’s machine earned. Krebs on Security and others reported in January 2022 that the mining component was installed on machines regardless of opt-in and was awkward to remove. Norton disabled it on 14 September 2022, when Ethereum moved to proof-of-stake and the mining stopped working. It is history — but it is a security vendor that installed a miner on customer hardware, and the decision-making that produced it belongs in the record.',
    },
    {
      title: 'You are not comparing independent companies, or independent engines',
      body: 'Norton, Avast, AVG and Avira are all Gen Digital brands, and since 2024 Norton protection has run the same Avast scan engine that Avast and AVG share — which is why all three recorded the same 99.3% protection rate and the same five false alarms in the February to May 2026 AV-Comparatives round. If your shortlist is Norton versus Avast, you are choosing between two packages of one product. Bitdefender, ESET and Kaspersky are the genuinely separate alternatives.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.7,
      note: '83,089 reviews; Norton actively solicits them, so read the volume as much as the score',
    },
    {
      source: 'App Store (Norton 360)',
      value: 4.7,
      note: 'roughly 92,000 ratings on iOS',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite: lab results and the refund window pull it up, the renewal jump and the crypto-miner history pull it down',
    },
  ],
  bestFor: [
    'Households wanting one subscription across five or ten mixed devices',
    'US buyers who want identity monitoring and antivirus from one supplier',
    'Anyone who will use the bundled VPN properly — it is uncapped, which is rare in a suite',
  ],
  notFor: [
    'Buyers who will forget to diarise the renewal and resent a $124.99 charge',
    'Mac-only and Linux households — cloud backup is Windows-only, and much of the value is in the extras',
    'Readers outside the US shopping specifically for the LifeLock identity features',
  ],
  faq: [
    {
      q: 'What will Norton actually cost me in year two?',
      a: 'On Norton’s own published renewal list, $94.99 a year for Standard and $124.99 for Deluxe, against first-year offers of $34.99 and $39.99. Norton emails the renewal price in advance and bills up to 35 days before the date, so the notice is there — put it in your calendar rather than relying on the email.',
    },
    {
      q: 'Did Norton really put a crypto miner in its antivirus?',
      a: 'Yes. Norton Crypto shipped with Norton 360 from 2021 as an opt-in Ethereum miner, with Norton keeping 15% of what was mined. Reporting in January 2022 found the mining component present on machines that had not opted in and difficult to remove cleanly. Norton disabled the feature on 14 September 2022 after Ethereum’s move to proof-of-stake made GPU mining pointless. Current installations do not include it.',
    },
    {
      q: 'Is the included VPN good enough to replace a standalone one?',
      a: 'For public Wi-Fi and general browsing, yes — it is unmetered, which is the main thing a bundled VPN usually gets wrong. For streaming catalogues, obfuscation in restrictive countries or audited no-logs claims, a dedicated provider is still the stronger buy.',
    },
    {
      q: 'Is Norton the same company as Avast and AVG?',
      a: 'It is, and since 2024 it is largely the same software underneath. All three are consumer brands of Gen Digital, along with Avira, CCleaner and LifeLock, and AV-Comparatives found Avast’s scan engine running inside Norton protection in September 2024 — a change Gen Digital confirmed. Treat a Norton-versus-Avast shortlist as a comparison of two packages of one product, and bring in Bitdefender or ESET if you want a genuinely independent second option.',
    },
    {
      q: 'Can I get my money back after the renewal charge lands?',
      a: 'Norton’s stated policy is a full refund within 60 days of payment on an annual subscription, and it applies to renewals as well as first purchases. Monthly subscriptions get 14 days from the initial purchase. Cancel auto-renew in your account if you simply do not want the next term.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'norton.com/products',
}
