/**
 * Brand page data for Avast (route: /brands/avast).
 *
 * SOURCES (checked 18 August 2026):
 *  - Pricing, tiers, device counts, 30-day guarantee: https://www.avast.com/en-us/store
 *  - Tier contents (Free vs Premium Security vs Ultimate): https://www.avast.com/en-us/compare-antivirus
 *  - AV-TEST, Windows 11: https://www.av-test.org/en/antivirus/home-windows/manufacturer/avast/
 *  - AV-Comparatives Real-World Protection Feb–May 2026:
 *    https://www.av-comparatives.org/tests/real-world-protection-test-february-may-2026/
 *  - FTC order (Feb 2024) and $16.5m payment:
 *    https://www.ftc.gov/news-events/news/press-releases/2024/02/ftc-order-will-ban-avast-selling-browsing-data-advertising-purposes-require-it-pay-165-million-over
 *  - FTC consumer payments, Dec 2025:
 *    https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-sends-payments-consumers-impacted-avasts-deceptive-privacy-claims
 *  - Ownership: https://investor.gendigital.com/news/news-details/2022/Introducing-Gen-The-Company-to-Power-Digital-Freedom/default.aspx
 *  - Norton moving onto the Avast scan engine (AV-Comparatives finding, confirmed
 *    by Gen Digital, September 2024):
 *    https://www.heise.de/en/news/Norton-relies-on-Avast-scan-engine-9866215.html
 *
 * ⚠️ Antivirus promotional pricing moves monthly and lab results are re-published
 * every two months. Every figure below MUST be re-verified against Avast's own
 * store page and the labs' current reports before launch, and before every
 * campaign. See ../../README.md.
 *
 * Note on the `reputation` scale: the Rating component renders out of 5, so the
 * lab row is rescaled and its raw score is stated in `note`.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const avast: BrandPage = {
  slug: 'avast',
  providerId: 'avast',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Avast review 2026 — the renewal price and the FTC order',
  metaDescription:
    'An independent Avast review: what the labs actually scored, what Premium Security costs in year two rather than year one, and the browsing-data case the marketing does not mention.',
  intro:
    'Avast protects well. Both of the independent labs that matter give it top marks, and the free version is a genuine product rather than a nagging trial. The two things worth knowing before you pay are that the renewal price is between 44% and 124% higher than the first year, depending on the tier and the number of devices, and that in 2024 the FTC ordered the company to stop selling browsing data it had collected through the very software that promised to block tracking.',
  about: [
    'Avast started in Prague in 1988 and spent three decades as the large independent name in free antivirus. It is not independent any more. It bought AVG in 2016, and in September 2022 it merged with NortonLifeLock to form Gen Digital, which now owns Norton, Avast, AVG, Avira, CCleaner and LifeLock. A reader weighing Avast against AVG against Norton is not comparing three companies; they are comparing three price lists from one.',
    'That matters technically as well as commercially. Avast and AVG have run on the same detection engine since the 2016 acquisition, and in September 2024 AV-Comparatives identified — and Gen Digital confirmed — that Norton-branded protection had moved onto that engine too. The lab results show it: in the AV-Comparatives Real-World Protection test covering February to May 2026 Avast, AVG and Norton all recorded a 99.3% protection rate with five false positives and ADVANCED+ awards. AV-TEST separately certified Avast Free Antivirus as a Top Product on Windows 11 in June 2026 with 6/6 for protection, performance and usability. Worth keeping in proportion: six other products earned ADVANCED+ in the same AV-Comparatives round, so a top score here is the entry requirement, not a differentiator.',
    'The line-up is Free Antivirus, Premium Security and Ultimate. Free covers malware and ransomware, checks Wi-Fi networks and screens scam calls and messages. Premium Security is the paid antivirus with the multi-device licence. Ultimate is Premium Security plus three products Avast otherwise sells separately — SecureLine VPN, Cleanup Premium and AntiTrack. The VPN is not in Premium Security; if you want it bundled you are on the top tier, and the top tier is where the renewal price bites hardest.',
  ],
  facts: [
    { label: 'Founded', value: '1988, Prague' },
    { label: 'Owner', value: 'Gen Digital (also Norton, AVG, Avira)' },
    { label: 'Devices', value: '1+1 or 10' },
    { label: 'Refund window', value: '30 days' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'Every figure on Avast’s store is a first-year rate; the renewal price sits beside it in small type and is the number to budget from. Premium Security goes $49.08 → $77.99 on the 1+1 licence and $69.48 → $99.99 on ten devices. Note what the discount is doing: Ultimate costs exactly the same as Premium Security in year one, then renews $32 higher on the 1+1 licence and $40 higher on ten devices. The cheap year is bait for the expensive tier.',
    items: [
      {
        name: 'Free Antivirus',
        price: 'free, no time limit',
        detail:
          'Malware and ransomware protection, Wi-Fi network checks, scam call and message screening. No data cap and no expiry — but it advertises the paid tiers at you.',
      },
      {
        name: 'Premium Security (1+1 device)',
        price: '$49.08 for the first year',
        renews: 'renews at $77.99/year',
        detail:
          'One Windows PC or Mac plus one mobile device. The cheapest paid entry point across Avast and AVG, and the tier to buy if you want the antivirus and nothing else.',
        pick: true,
      },
      {
        name: 'Premium Security (10 devices)',
        price: '$69.48 for the first year',
        renews: 'renews at $99.99/year',
        detail: 'The same product across ten devices on Windows, macOS, Android and iOS.',
      },
      {
        name: 'Ultimate',
        price: '$49.08 (1+1) or $69.48 (10 devices) for the first year',
        renews: 'renews at $109.99 or $139.99/year',
        detail:
          'Adds SecureLine VPN, Cleanup Premium and AntiTrack. Free in year one, then the steepest renewal Avast sells. Buy a standalone VPN instead unless you want all three.',
      },
    ],
  },
  pros: [
    {
      title: 'Top results at both labs that count',
      body: 'AV-Comparatives recorded 99.3% real-world protection with five false positives across February to May 2026 and gave Avast its ADVANCED+ award; AV-TEST scored it 6/6 for protection, performance and usability on Windows 11 in June 2026. These are the published third-party numbers, not vendor claims.',
    },
    {
      title: 'The free tier is a real product',
      body: 'No data cap, no thirty-day clock, and the same detection engine as the paid tiers. For a single machine where nobody will remember to cancel a subscription, the free version is a defensible answer rather than a consolation prize.',
    },
    {
      title: 'The cheapest way into the Gen Digital stable',
      body: 'The 1+1 licence at $77.99 on renewal is below anything AVG lists and well below Norton. If you have decided on this engine, Avast’s small licence is the least expensive door.',
    },
    {
      title: 'Coverage across all four consumer platforms',
      body: 'Windows, macOS, Android and iOS are all covered by the one licence, and the ten-device plan lets a household mix them freely rather than counting seats per operating system.',
    },
  ],
  cons: [
    {
      title: 'It sold browsing data, and the FTC said so',
      body: 'In February 2024 the FTC ordered Avast to pay $16.5m and banned it from licensing browsing data for advertising, finding that from 2014 to 2020 it had collected browsing histories through its antivirus and extensions — software marketed as blocking tracking — and sold them via its Jumpshot subsidiary to more than a hundred buyers. Jumpshot was shut in January 2020; the FTC paid $15.3m to 103,152 claimants in December 2025. The conduct has been stopped and paid for. It still happened, and it happened in the product this page is about.',
    },
    {
      title: 'The renewal price is the real price',
      body: 'Premium Security is advertised at $49.08 and renews at $77.99 — a 59% rise — while Ultimate on ten devices goes from $69.48 to $139.99. None of this is hidden, but it sits in footnote type beside a large struck-through number, and it recurs automatically. Set a reminder before the first term ends.',
    },
    {
      title: 'Not an independent alternative to AVG or Norton',
      body: 'All three are Gen Digital brands, Avast and AVG have shared a detection engine since 2016, and Norton moved onto the same engine in 2024 — which is why the three of them returned identical AV-Comparatives figures, to the decimal, for February to May 2026. Comparing them is comparing packaging and price lists. Bitdefender, ESET and Kaspersky are the genuinely separate options.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.0,
      note: 'around 45,400 reviews; the displayed star rating, not a decimal TrustScore',
    },
    {
      source: 'AV-TEST (rescaled from 6)',
      value: 5.0,
      note: '6/6 protection, performance and usability — Windows 11, June 2026, Top Product',
    },
    {
      source: 'AV-Comparatives (rescaled from 100%)',
      value: 5.0,
      note: '99.3% real-world protection, 5 false positives, ADVANCED+ — Feb–May 2026',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'our composite: lab results are excellent, the renewal maths and the FTC order are not',
    },
  ],
  bestFor: [
    'Anyone who wants free antivirus that is genuinely free and genuinely good at detection',
    'A single PC or Mac plus a phone, where the $77.99 renewal is the cheapest paid option here',
    'Households on mixed Windows, macOS, Android and iOS devices',
  ],
  notFor: [
    'Readers for whom the 2014–2020 browsing-data episode is disqualifying — that is a reasonable position',
    'Anyone who will not diarise a renewal date — the charge rises 59% on the smallest Premium licence and 101% on ten-device Ultimate, unprompted',
    'Buyers who think choosing between Avast, AVG and Norton spreads their risk across companies',
  ],
  faq: [
    {
      q: 'Is Avast still safe to use after the FTC case?',
      a: 'The detection product tests as well as anything on the market. The FTC order of February 2024 bans Avast from licensing browsing data for advertising and required it to delete what Jumpshot had gathered; Jumpshot itself closed in January 2020. So the specific conduct is prohibited and the penalty has been paid. Whether a company that did it once has earned your trust back is a judgement only you can make, and it is a fair reason to buy elsewhere.',
    },
    {
      q: 'Is the free version good enough?',
      a: 'For one machine, often yes. It uses the same engine that earned the lab scores, has no data cap and does not expire. What you give up is the multi-device licence and the extras bundled into Ultimate. What you take on is a steady stream of upgrade prompts.',
    },
    {
      q: 'What actually changes if I buy Ultimate?',
      a: 'You get SecureLine VPN, Cleanup Premium and AntiTrack on top of Premium Security. In year one that costs nothing extra — both tiers are $49.08 on the 1+1 licence — which is precisely why it is worth checking the renewal line: Ultimate then charges $109.99 a year against Premium Security’s $77.99. If the VPN is the only part you want, a dedicated provider is better and usually cheaper.',
    },
    {
      q: 'How different is Avast from AVG?',
      a: 'Barely. Both are Gen Digital brands running the same detection engine, and in the AV-Comparatives round covering February to May 2026 they returned identical protection rates and identical false-positive counts — as did Norton, which moved onto that engine in 2024. Choose on licence size and renewal price, not on protection.',
    },
    {
      q: 'How do I avoid the renewal charge?',
      a: 'Turn off automatic renewal in your Avast account before the term ends; the subscription then runs to its expiry date and stops. The 30-day money-back guarantee covers you if you change your mind shortly after buying.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'avast.com/en-us/store',
}
