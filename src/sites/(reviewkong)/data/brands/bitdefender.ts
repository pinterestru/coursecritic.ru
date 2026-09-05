/**
 * Brand page data for Bitdefender (route: /brands/bitdefender).
 *
 * SOURCES (checked 18 August 2026):
 *   - https://www.bitdefender.com/en-us/consumer/total-security — first-year and
 *     list prices, device counts, the 200 MB/day VPN cap, password manager,
 *     30-day refund window
 *   - https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/
 *   - https://www.av-comparatives.org/tests/real-world-protection-test-february-may-2026/
 *   - https://www.av-comparatives.org/tests/malware-protection-test-march-2026/
 *   - https://www.heise.de/en/news/Norton-relies-on-Avast-scan-engine-9866215.html
 *     — Norton, Avast and AVG now share one scan engine (Gen Digital confirmed,
 *     September 2024); the contrast with Bitdefender's own engine
 *   - https://en.wikipedia.org/wiki/Bitdefender and
 *     https://www.bitdefender.com/en-us/company/leadership — ownership, founding,
 *     dual Bucharest / San Antonio headquarters
 *   - https://www.trustpilot.com/review/www.bitdefender.com — 4.2 from 11,868 reviews
 *   - https://apps.apple.com/us/app/bitdefender-mobile-security/id1255893012
 *
 * ⚠️ Every figure here is a working value captured on the date above and MUST be
 * re-verified before launch and before each campaign. Bitdefender runs a rolling
 * discount on its own store, so the first-year price in particular will have
 * moved. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const bitdefender: BrandPage = {
  slug: 'bitdefender',
  providerId: 'bitdefender',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Bitdefender review 2026 — lab scores and renewal price',
  metaDescription:
    'An independent Bitdefender review: what AV-TEST and AV-Comparatives actually recorded, why the bundled VPN stops at 200 MB a day, and what Total Security costs once the first-year discount ends.',
  intro:
    'Bitdefender has the best sustained record in the independent detection tests of any consumer suite, and it is a Romanian company that is not owned by anybody else — two things worth having in a category dominated by American conglomerates. The catch is the bundle: the VPN it advertises is capped at 200 MB a day, and the list price it renews at is nearly double the discount you sign up on.',
  about: [
    'Bitdefender was founded in Bucharest in 2001 by Florin Talpeș, who still runs it and remains its principal shareholder. It is privately held, now dual-headquartered between Bucharest and San Antonio, and it is one of the few consumer security brands left that has not been absorbed into a larger group — unlike Norton, Avast, AVG and Avira, which are all Gen Digital. Its engine is also licensed by other vendors, so several products you might consider as alternatives are running Bitdefender detection under a different name.',
    'The independent lab record is where the case for Bitdefender is made. AV-TEST’s April 2026 Windows 11 home-user test gave Bitdefender Total Security 27.0 a full 6 out of 6 for protection, performance and usability, with TOP PRODUCT certification. AV-Comparatives’ Real-World Protection Test for February to May 2026 recorded a 99.5% protection rate with five false alarms, in the top ADVANCED+ band — marginally ahead of Norton on the same panel. Its March 2026 Malware Protection Test recorded a 99.94% online protection rate. Consistency across rounds is the useful signal, and Bitdefender has it.',
    'The bundle needs reading closely. Total Security covers five devices across Windows, macOS, Android and iOS and includes a full password manager, ransomware protection, cryptomining protection, a device optimiser and breach detection. What it does not include is a usable VPN: the bundled client allows 200 MB per device per day, which is roughly a morning of ordinary browsing. Unlimited VPN starts at Premium Security, one tier up. Identity-theft monitoring sits higher again, on the Ultimate tiers, and is largely a United States product.',
  ],
  facts: [
    { label: 'Founded', value: '2001, Bucharest' },
    { label: 'Ownership', value: 'Private, founder-controlled' },
    { label: 'Devices', value: '5 on Total Security' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'The struck-through figure on Bitdefender’s own store is the standard rate the subscription renews at — $109.99 for Total Security against a $59.99 first year. That is a smaller jump than Norton’s but it is still roughly double, and Bitdefender’s terms reserve the right to change it with email notice. Budget on the list price.',
    items: [
      {
        name: 'Antivirus Plus',
        price: '$29.99 for the first year',
        renews: 'list price $69.99/yr',
        detail:
          '3 devices, Windows only. The detection engine without the cross-platform cover — a narrow buy in a household with a phone in it.',
      },
      {
        name: 'Total Security',
        price: '$59.99 for the first year',
        renews: 'list price $109.99/yr',
        detail:
          '5 devices across Windows, macOS, Android and iOS, password manager, device optimiser. The tier we would buy — provided you already have a VPN.',
        pick: true,
      },
      {
        name: 'Premium Security',
        price: '$79.99 for the first year',
        renews: 'list price $129.99/yr',
        detail:
          'Total Security plus an uncapped VPN and Scam Protection Pro. Worth the $20 only if the 200 MB daily cap is the thing stopping you.',
      },
    ],
  },
  pros: [
    {
      title: 'The most consistent detection record in the category',
      body: 'A full 6/6/6 from AV-TEST on Windows 11 in April 2026, 99.5% real-world protection from AV-Comparatives across February to May 2026, and 99.94% online protection in the March 2026 malware test. Individual rounds are noisy; what distinguishes Bitdefender is that it stays at the top of them.',
    },
    {
      title: 'Light on the machine',
      body: 'AV-TEST scores performance separately from protection, and Bitdefender takes full marks there too — it is not buying detection with system load. That is the historical complaint about security suites and this one does not attract it.',
    },
    {
      title: 'Independent, and based in the EU',
      body: 'Privately held, founder-controlled, headquartered in Romania and therefore inside GDPR, and running its own detection engine — where Norton, Avast and AVG have all shared one Gen Digital engine since 2024. If you are deliberately assembling a shortlist that is not all one owner, Bitdefender is the entry that is genuinely separate.',
    },
    {
      title: 'Real cross-platform cover on the mainstream tier',
      body: 'Total Security spans Windows, macOS, Android and iOS on one licence for five devices. The Windows-only entry tier is clearly marked as such, which is more than several rivals manage.',
    },
  ],
  cons: [
    {
      title: 'The bundled VPN is 200 MB a day and effectively a trial',
      body: 'Bitdefender lists "Standard VPN" on Total Security as a privacy feature. At 200 MB per device per day it will not cover a video call, let alone streaming. Treat it as an upsell prompt for Premium Security rather than a VPN you own, and price the suite as if it has none.',
    },
    {
      title: 'The renewal is roughly double, and the store hides it in a strike-through',
      body: 'Total Security is $59.99 for the first year against a $109.99 standard rate. The higher figure is on the page — as the crossed-out "old price" next to a discount badge, which reads as a saving rather than as what you will be billed next August.',
    },
    {
      title: 'Thirty days to refund, not sixty',
      body: 'Bitdefender’s money-back guarantee runs 30 days from purchase. Norton gives 60, and applies it to renewals. In a category where the renewal charge is the recurring complaint, the shorter window is a real disadvantage rather than a technicality.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.2,
      note: '11,868 reviews — a smaller sample than Norton’s, and less actively solicited',
    },
    {
      source: 'App Store (Bitdefender Mobile Security)',
      value: 4.7,
      note: 'roughly 35,000 ratings on iOS',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.7,
      note: 'our composite: lab consistency and independent ownership pull it up, the capped VPN and 30-day refund pull it down',
    },
  ],
  bestFor: [
    'Anyone choosing on detection results rather than on the length of the feature list',
    'Buyers who already pay for a VPN and do not want to pay for a second one',
    'Readers deliberately avoiding the Gen Digital brands for ownership reasons',
  ],
  notFor: [
    'People expecting the bundled VPN to be a VPN — that is Premium Security, one tier up',
    'Anyone who wants identity monitoring included at the mainstream price',
    'Buyers who need a long refund window as insurance against the auto-renewal',
  ],
  faq: [
    {
      q: 'Is Bitdefender genuinely better at detection than Norton?',
      a: 'Marginally, and only on the aggregate. AV-Comparatives’ February to May 2026 round put Bitdefender at 99.5% and Norton at 99.3% — two tenths of a percentage point between them, both in the top ADVANCED+ band, both with five false alarms. AV-TEST gave both a clean 18 out of 18 in April 2026. Bitdefender’s advantage is that it holds those results round after round, not that any single test separates them meaningfully.',
    },
    {
      q: 'How restrictive is the 200 MB VPN limit really?',
      a: 'Restrictive enough to ignore. It is 200 MB per device per day, so a couple of hundred web pages, or about ten minutes of standard-definition video. It is useful for logging into a bank on hotel Wi-Fi and nothing beyond that. If you want an uncapped VPN from Bitdefender, that is Premium Security at $79.99 for the first year.',
    },
    {
      q: 'What does it renew at?',
      a: 'Bitdefender’s store shows $109.99 as the standard yearly rate for Total Security against a $59.99 first year, and $129.99 for Premium Security against $79.99. The terms reserve the right to change the renewal rate with prior email notice, so check the notice when it arrives rather than assuming the figure holds.',
    },
    {
      q: 'Who owns Bitdefender?',
      a: 'It is privately held and controlled by its founder, Florin Talpeș, who has run it since 2001. It is not part of a larger group, which is unusual now — Norton, Avast, AVG and Avira all sit under Gen Digital, and since 2024 Norton protection has run the same Avast scan engine that Avast and AVG share. Bitdefender is dual-headquartered in Bucharest and San Antonio.',
    },
    {
      q: 'Do I still need Microsoft Defender turned on?',
      a: 'No — installing a third-party suite hands protection over and Defender steps back automatically. Worth knowing that Defender itself scored 6/6/6 in the same April 2026 AV-TEST round, so the case for paying is the bundle and the cross-platform cover, not a detection gap on Windows.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'bitdefender.com/en-us/consumer/total-security',
}
