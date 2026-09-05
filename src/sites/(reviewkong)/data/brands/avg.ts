/**
 * Brand page data for AVG (route: /brands/avg).
 *
 * SOURCES (checked 18 August 2026):
 *  - Pricing, tiers, device counts, renewal figures: https://www.avg.com/en-us/store
 *  - 30-day money-back guarantee and 60-day trial: https://www.avg.com/en-us/internet-security
 *  - AV-TEST, Windows 11, Apr 2026:
 *    https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/avg-antivirus-free-26.2--26.3-261202/
 *  - AV-Comparatives Real-World Protection Feb–May 2026:
 *    https://www.av-comparatives.org/tests/real-world-protection-test-february-may-2026/
 *  - Ownership: https://investor.gendigital.com/news/news-details/2022/Introducing-Gen-The-Company-to-Power-Digital-Freedom/default.aspx
 *  - Norton moving onto the Avast/AVG scan engine (AV-Comparatives finding,
 *    confirmed by Gen Digital, September 2024):
 *    https://www.heise.de/en/news/Norton-relies-on-Avast-scan-engine-9866215.html
 *  - 2020 browsing-data reporting covering AVG extensions:
 *    https://www.pcworld.com/article/398699/report-avast-and-avg-collect-and-sell-your-personal-info-via-their-free-antivirus-programs.html
 *  - FTC order against Avast, AVG's owner (Feb 2024):
 *    https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-order-will-ban-avast-selling-browsing-data-advertising-purposes-require-it-pay-165-million-over
 *
 * ⚠️ Antivirus promotional pricing moves monthly and lab results are re-published
 * every two months. Every figure below MUST be re-verified against AVG's own
 * store page and the labs' current reports before launch, and before every
 * campaign. See ../../README.md.
 *
 * Note on the `reputation` scale: the Rating component renders out of 5, so the
 * lab rows are rescaled and their raw scores are stated in `note`.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const avg: BrandPage = {
  slug: 'avg',
  providerId: 'avg',
  schemaType: 'SoftwareApplication',
  metaTitle: 'AVG review 2026 — the Avast engine, a different price',
  metaDescription:
    'An independent AVG review: identical lab results to Avast because it is the same engine, what Internet Security costs in year two, and why AVG, Avast and Norton are one company.',
  intro:
    'AVG is one of the oldest names in consumer antivirus and, since 2016, one of the least distinct. It runs the same detection engine as Avast, sits under the same parent as Norton, and posts the same independent lab figures as both. What is left to compare is the price list — and AVG’s smallest licence covers ten devices, which makes it good value in year one and the more expensive option from year two.',
  about: [
    'AVG began life as Grisoft in Brno in 1991 and built its name on free antivirus for Windows. Avast bought it in 2016; Avast then merged with NortonLifeLock in September 2022 to create Gen Digital, which today owns Norton, Avast, AVG, Avira, CCleaner and LifeLock. AVG’s own store footer says as much — "AVG is part of Gen". Anyone shortlisting AVG, Avast and Norton as three vendors is shortlisting one.',
    'Since the acquisition AVG and Avast have shared a detection engine, and in September 2024 AV-Comparatives identified — and Gen Digital confirmed — that Norton had moved onto the same engine. The published results are as close as that implies. In the AV-Comparatives Real-World Protection test covering February to May 2026 AVG, Avast and Norton each recorded a 99.3% protection rate with five false positives, and each took the ADVANCED+ award. AV-TEST certified AVG AntiVirus Free as a Top Product on Windows 11 in April 2026 with a perfect 18/18 — 6/6 for protection, performance and usability. Good numbers, and worth reading in context: seven products earned ADVANCED+ in that AV-Comparatives round, Norton and Microsoft among them.',
    'Three tiers are sold: AVG AntiVirus FREE, Internet Security and Ultimate. Free handles malware and ransomware. Internet Security adds Wi-Fi network checks, fake-site and phishing blocking, the enhanced firewall and payment protection, across ten devices. Ultimate is Internet Security plus AVG Secure VPN, TuneUp and AntiTrack — products AVG otherwise sells at $99.99, $79.99 and $54.99 a year respectively. That bundle is real value if you want all three, and an expensive habit if you wanted one.',
  ],
  facts: [
    { label: 'Founded', value: '1991, Brno (as Grisoft)' },
    { label: 'Owner', value: 'Gen Digital (also Norton, Avast, Avira)' },
    { label: 'Devices', value: '10 on every paid tier' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'AVG advertises a first-year rate and prints the renewal beside it in footnote type. Internet Security runs $59.88 → $99.99; Ultimate runs $59.88 → $149.99. Read those two lines together: the first year costs the same either way, so the discount exists to move you onto the tier that renews $50 higher. Every paid tier renews automatically at the full price.',
    items: [
      {
        name: 'AVG AntiVirus FREE',
        price: 'free, no time limit',
        detail:
          'Malware and ransomware protection on the same engine as the paid tiers. No Wi-Fi checks, no enhanced firewall, no payment protection — and regular prompts to upgrade.',
      },
      {
        name: 'Internet Security',
        price: '$59.88 for the first year, 10 devices',
        renews: 'renews at $99.99/year',
        detail:
          'Adds Wi-Fi network checks, fake-site and phishing blocking, enhanced firewall and payment protection. There is a 60-day free trial before you commit. The tier to buy.',
        pick: true,
      },
      {
        name: 'Ultimate',
        price: '$59.88 for the first year, 10 devices',
        renews: 'renews at $149.99/year',
        detail:
          'Internet Security plus Secure VPN, TuneUp and AntiTrack. Identical first-year price, 50% more at renewal. Only worth it if you would genuinely pay for the VPN and the tune-up tool separately.',
      },
    ],
  },
  pros: [
    {
      title: 'Lab results at the top of the field',
      body: 'AV-Comparatives recorded 99.3% real-world protection with five false positives between February and May 2026 and awarded ADVANCED+; AV-TEST scored AVG 18/18 on Windows 11 in April 2026 and certified it a Top Product. Both are published third-party results rather than vendor figures.',
    },
    {
      title: 'Ten devices on the entry paid tier',
      body: 'AVG does not sell a one-device paid licence, so the cheapest paid plan is also the household plan: ten devices across Windows, macOS, Android and iOS for $59.88 in year one, which is $9.60 less than Avast charges for the same ten seats. Both renew at $99.99, so the saving is a first-year one — the per-device maths is level with Avast from year two.',
    },
    {
      title: 'A 60-day trial before any charge',
      body: 'Internet Security can be run free for 60 days, which is long enough to see how it behaves on your own machine before a card is charged — and twice the length of the 30-day money-back window that backs it up.',
    },
    {
      title: 'A free tier with no expiry',
      body: 'AVG AntiVirus FREE uses the same detection engine as the paid product and does not time out. For a single machine that only needs malware protection, it is a legitimate stopping point rather than a trial.',
    },
  ],
  cons: [
    {
      title: 'The renewal is where the money is made',
      body: 'Internet Security is sold at $59.88 and renews at $99.99 — a 67% rise. Ultimate is sold at the same $59.88 and renews at $149.99, up 151%. Because the first-year prices are identical, the promotion actively steers buyers onto the tier with the largest jump. It renews automatically.',
    },
    {
      title: 'It is Avast in different packaging',
      body: 'Same parent, same engine — the engine Norton also adopted in 2024 — and identical AV-Comparatives figures to the decimal for February to May 2026. AVG carries the history too: in 2020, reporting on the browsing-data collection that led to the FTC’s February 2024 order against Avast — AVG’s owner — named AVG-branded extensions, and Google, Mozilla and Opera pulled both brands’ extensions from their stores. Bitdefender, ESET and Kaspersky are the genuinely independent comparisons.',
    },
    {
      title: 'Constant upselling inside the product',
      body: 'The free tier advertises Internet Security, and the paid tiers advertise TuneUp, Secure VPN, AntiTrack, BreachGuard and Driver Updater — each a separate annual subscription. Security software that interrupts you to sell you more security software trains people to dismiss its alerts.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.0,
      note: 'around 45,900 reviews; the displayed star rating, not a decimal TrustScore',
    },
    {
      source: 'AV-TEST (rescaled from 6)',
      value: 5.0,
      note: '18/18 total — 6/6 protection, performance and usability, Windows 11, April 2026',
    },
    {
      source: 'AV-Comparatives (rescaled from 100%)',
      value: 5.0,
      note: '99.3% real-world protection, 5 false positives, ADVANCED+ — Feb–May 2026',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite: top-tier detection, ten devices as standard, punishing renewal pricing',
    },
  ],
  bestFor: [
    'Households with several devices, where ten seats on the entry paid tier is the cheapest per-device deal here',
    'Anyone who wants to trial an antivirus properly before paying — 60 days is unusually long',
    'Windows users who only need malware protection and will happily stay on the free tier',
  ],
  notFor: [
    'Single-device buyers — there is no one-device paid licence, so you pay for ten seats regardless',
    'Anyone who will not cancel or re-negotiate before renewal, where Ultimate more than doubles',
    'Readers deliberately avoiding Gen Digital, or looking for something genuinely different from Avast',
  ],
  faq: [
    {
      q: 'Is AVG different from Avast in any way that matters?',
      a: 'For protection, no — same owner, same engine (the one Norton switched to in 2024), and identical AV-Comparatives protection rates and false-positive counts in the February to May 2026 round. The differences are commercial: AVG sells ten-device licences only, offers a 60-day trial, and renews Internet Security at $99.99 against Avast Premium Security’s $77.99 for one PC plus a phone.',
    },
    {
      q: 'Is AVG AntiVirus FREE good enough on its own?',
      a: 'For basic malware protection on one machine, yes — it runs the engine that earned the lab scores and does not expire. You go without the Wi-Fi checks, phishing and fake-site blocking, enhanced firewall and payment protection, and you accept regular upgrade prompts.',
    },
    {
      q: 'Should I buy Internet Security or Ultimate?',
      a: 'Internet Security, unless you would separately pay for a VPN and a tune-up tool. Both cost $59.88 in year one, but Ultimate then renews at $149.99 against Internet Security’s $99.99. A dedicated VPN bought on its own is generally faster and cheaper than the bundled one.',
    },
    {
      q: 'Was AVG involved in the Avast browsing-data case?',
      a: 'The FTC’s February 2024 order and its $16.5m penalty were against Avast Limited, AVG’s owner since 2016, not AVG as a named respondent. But the underlying collection was reported in 2020 as covering AVG-branded extensions as well, and Google, Mozilla and Opera removed extensions from both brands at the time. Treat it as one episode at one company with two labels on it.',
    },
    {
      q: 'How do I stop it renewing at the full price?',
      a: 'Switch off automatic renewal in your AVG account before the term ends and the subscription simply expires. The 30-day money-back guarantee only covers the period just after a purchase, so it will not help you against a renewal charge you noticed late.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'avg.com/en-us/store',
}
