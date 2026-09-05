/**
 * Provider registry for the security & data vertical — antivirus suites,
 * personal-data removal and data recovery.
 *
 * The rule this vertical is ranked on: independent lab results over vendor
 * marketing, and the renewal price over the first-year offer. Consumer security
 * software is sold on a heavy year-one discount that commonly doubles or triples
 * on auto-renewal, so every entry states both figures.
 *
 * One ownership note that readers routinely miss and that recurs across these
 * entries: Avast, AVG and Norton are all Gen Digital brands. Comparing them is
 * not comparing three independent companies. Since September 2024 it is not
 * comparing three detection engines either — AV-Comparatives identified, and
 * Gen Digital confirmed, that Norton-branded protection now runs Avast's scan
 * engine, which Avast and AVG have shared since 2016.
 *
 * SOURCES (checked 18 August 2026) — every figure below comes from the vendor's
 * own store or the named lab, and each brand page under ../brands repeats its
 * own source list:
 *   - https://us.norton.com/products and https://us.norton.com/pricing
 *   - https://www.bitdefender.com/en-us/consumer/total-security
 *   - https://www.avast.com/en-us/store and .../compare-antivirus
 *   - https://www.avg.com/en-us/store
 *   - https://incogni.com/pricing
 *   - https://www.easeus.com/datarecoverywizardpro/drw-pro-buy.html
 *   - https://www.av-test.org/en/antivirus/home-windows/windows-11/april-2026/
 *   - https://www.av-comparatives.org/tests/real-world-protection-test-february-may-2026/
 *   - https://www.heise.de/en/news/Norton-relies-on-Avast-scan-engine-9866215.html
 *
 * ⚠️ Prices, renewal rates, lab scores and bundled features are working values
 * captured while building the site and MUST be re-verified against each
 * vendor's own page before this goes live. See ../../README.md.
 */
import type { Author, Provider } from '../guides/types'

export const securityProviders: Record<string, Provider> = {
  norton: {
    id: 'norton',
    name: 'Norton',
    badge: 'NO',
    color: '#FFC72C',
    vertical: 'security',
    domain: 'norton.com',
    siteLabel: 'norton.com',
    score: 4.3,
    tagline: 'Top lab scores and an uncapped VPN, sold on a price that triples at renewal',
    founded: 'consumer antivirus since 1991, Gen Digital-owned',
    reach: 'Gen Digital states 500m+ users across Norton, Avast, AVG and Avira',
    priceNote: 'Deluxe $39.99 first year, renews at $124.99',
    format: 'Norton 360 Deluxe: 5 devices, uncapped VPN, 50 GB cloud backup (Windows only)',
    highlights: [
      'AV-TEST scored Norton 360 a full 6/6/6 on Windows 11 in April 2026',
      'AV-Comparatives placed it in the top ADVANCED+ band at 99.3% real-world protection',
      'The bundled VPN is unmetered — no daily data cap, unlike most suite VPNs',
      'LifeLock tiers add credit monitoring and stolen-funds reimbursement, in the US',
    ],
    pros: [
      'Top marks from both AV-TEST and AV-Comparatives in 2026 rounds',
      'Bundled VPN has no data allowance to run out',
      '60-day refund window that also covers each annual renewal',
    ],
    cons: [
      'Deluxe renews at $124.99 against a $39.99 first year — roughly triple',
      'Shipped an opt-in Ethereum miner inside Norton 360 from 2021 until September 2022',
      'Not independent from Avast, AVG or Avira — all Gen Digital brands, and Norton protection has run Avast’s scan engine since 2024',
    ],
    trust: [
      'AV-TEST TOP PRODUCT, Windows 11, April 2026',
      'AV-Comparatives ADVANCED+, Real-World Protection Feb–May 2026',
      '60-day money-back guarantee on annual plans, renewals included',
      'Renewal price list published on norton.com/pricing',
    ],
    ratings: [
      { source: 'AV-TEST Apr 2026 (of 6)', value: 6.0 },
      { source: 'AV-Comparatives protection %', value: 99.3 },
      { source: 'Trustpilot', value: 4.7 },
    ],
    tracked: true,
    topCta: 'See Norton pricing →',
    brandSlug: 'norton',
  },
  bitdefender: {
    id: 'bitdefender',
    name: 'Bitdefender',
    badge: 'BD',
    color: '#E01E26',
    vertical: 'security',
    domain: 'bitdefender.com',
    siteLabel: 'bitdefender.com',
    score: 4.7,
    tagline: 'The most consistent detection record in the category, from an independent EU company',
    founded: 'founded 2001 in Bucharest, still founder-controlled',
    reach: 'company states 500m+ systems protected across 150+ countries',
    priceNote: 'Total Security $59.99 first year, list price $109.99',
    format: 'Total Security: 5 devices across Windows, macOS, Android and iOS, 30-day refund',
    highlights: [
      'AV-TEST scored Total Security 27.0 a full 6/6/6 on Windows 11 in April 2026',
      'AV-Comparatives recorded 99.5% real-world protection, February to May 2026',
      'Full marks for performance too — detection is not bought with system load',
      'Privately held in Romania, outside the Gen Digital group',
    ],
    pros: [
      'Stays at the top of the independent tests round after round, not just once',
      'Genuinely independent ownership and an EU base',
      'Password manager and cross-platform cover included on the mainstream tier',
    ],
    cons: [
      'The bundled VPN stops at 200 MB per device per day — uncapped costs a tier more',
      'Total Security renews at a $109.99 list price against a $59.99 first year',
      'Refund window is 30 days, half what Norton offers',
    ],
    trust: [
      'AV-TEST TOP PRODUCT, Windows 11, April 2026',
      'AV-Comparatives ADVANCED+, Real-World Protection Feb–May 2026',
      'Romanian company, GDPR jurisdiction, no parent group',
      '30-day money-back guarantee',
    ],
    ratings: [
      { source: 'AV-TEST Apr 2026 (of 6)', value: 6.0 },
      { source: 'AV-Comparatives protection %', value: 99.5 },
      { source: 'Trustpilot', value: 4.2 },
    ],
    tracked: true,
    topCta: 'See Bitdefender pricing →',
    brandSlug: 'bitdefender',
  },
  avast: {
    id: 'avast',
    name: 'Avast',
    badge: 'AV',
    color: '#FF7800',
    vertical: 'security',
    domain: 'avast.com',
    siteLabel: 'avast.com',
    score: 3.8,
    tagline:
      'Top lab scores and a genuinely free tier, sold on renewals 44% to 124% above year one',
    founded: 'operating since 1988, Prague',
    reach: 'Windows, macOS, Android and iOS; 1+1 or 10-device licences',
    priceNote: '$49.08 first year, renews at $77.99/yr (1+1 device)',
    format: 'Free Antivirus, Premium Security or Ultimate; 30-day money-back guarantee',
    highlights: [
      'ADVANCED+ at AV-Comparatives — 99.3% real-world protection, Feb–May 2026',
      'AV-TEST Top Product on Windows 11: 6/6 protection, performance and usability, June 2026',
      'Free tier has no data cap and no expiry, on the same detection engine as the paid plans',
      'Ultimate bundles SecureLine VPN, Cleanup Premium and AntiTrack — Premium Security does not',
    ],
    pros: [
      'Independent lab results at the top of the category, from both AV-TEST and AV-Comparatives',
      'The 1+1 licence at $77.99 on renewal is the cheapest paid option across Avast and AVG',
      'One licence spans Windows, macOS, Android and iOS',
    ],
    cons: [
      'The advertised price is a first-year rate; Premium Security renews 59% higher',
      'FTC ordered it in February 2024 to pay $16.5m and stop selling browsing data for advertising',
      'Same Gen Digital parent as AVG, Norton and Avira; the same scan engine as AVG since 2016, and Norton moved onto that engine in 2024',
    ],
    trust: [
      '30-day money-back guarantee',
      'Renewal prices printed alongside the first-year rate on the store page',
      'Barred by the 2024 FTC order from licensing browsing data for advertising',
      'Gen Digital brand, dual-headquartered in Tempe and Prague',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.0 },
      { source: 'AV-TEST Jun 2026 (of 6)', value: 6.0 },
      { source: 'AV-Comparatives protection %', value: 99.3 },
    ],
    tracked: true,
    topCta: 'See Avast pricing →',
    brandSlug: 'avast',
  },
  avg: {
    id: 'avg',
    name: 'AVG',
    badge: 'AG',
    color: '#0F9D58',
    vertical: 'security',
    domain: 'avg.com',
    siteLabel: 'avg.com',
    score: 3.9,
    tagline: 'Ten devices on the entry plan, the same engine as Avast, a 67% jump at renewal',
    founded: 'operating since 1991, Brno',
    reach: 'Windows, macOS, Android and iOS; 10 devices on every paid tier',
    priceNote: '$59.88 first year, renews at $99.99/yr (10 devices)',
    format:
      'AntiVirus FREE, Internet Security or Ultimate; 60-day trial, 30-day money-back guarantee',
    highlights: [
      'ADVANCED+ at AV-Comparatives — 99.3% real-world protection, Feb–May 2026',
      'AV-TEST Top Product on Windows 11: a perfect 18/18, April 2026',
      'Every paid tier covers 10 devices — there is no single-device licence to undercut it',
      '60-day free trial of Internet Security before any card is charged',
    ],
    pros: [
      'Cheapest first-year price for ten seats in the Gen Digital range, and no smaller licence to upsell you from',
      'Unusually long trial — 60 days — backed by a 30-day money-back guarantee',
      'Free tier runs the same detection engine and does not expire',
    ],
    cons: [
      'Internet Security renews at $99.99 against a $59.88 first year; Ultimate renews at $149.99',
      'Identical engine and lab figures to Avast, and Norton moved onto the same engine in 2024, so choosing between the three changes nothing technical',
      'Persistent in-product upselling of TuneUp, Secure VPN, AntiTrack and Driver Updater',
    ],
    trust: [
      '30-day money-back guarantee',
      '60-day free trial of Internet Security',
      'Renewal prices printed alongside the first-year rate on the store page',
      'Gen Digital brand — same owner as Avast, Norton and Avira',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.0 },
      { source: 'AV-TEST Apr 2026 (of 6)', value: 6.0 },
      { source: 'AV-Comparatives protection %', value: 99.3 },
    ],
    tracked: true,
    topCta: 'See AVG pricing →',
    brandSlug: 'avg',
  },
  incogni: {
    id: 'incogni',
    name: 'Incogni',
    badge: 'IN',
    color: '#6E3AE8',
    vertical: 'security',
    domain: 'incogni.com',
    siteLabel: 'incogni.com',
    score: 4.3,
    tagline:
      'Automated data-broker removals with statutory force behind them — for as long as you keep paying',
    founded: 'built by Surfshark in 2021, launched January 2022',
    reach:
      '420+ data brokers covered by automated removals, 3,000+ more sites on the Unlimited plans',
    priceNote: '$95.88/yr ($7.99/mo) annually, or $15.98/mo billed monthly',
    format:
      'Subscription removal service for one person or up to five; 30-day money-back guarantee',
    highlights: [
      'Requests cite GDPR, UK GDPR, CCPA/CPRA and PIPEDA, so covered brokers have a legal window to comply',
      'Re-scans and re-sends on a schedule, which is what stops profiles being rebuilt',
      'Deloitte independently assessed the coverage figures: 420+ brokers, 245m+ requests processed',
      'Family plan covers five people for $191.88 a year — around $3.20 per person per month',
    ],
    pros: [
      'The legal basis is real: brokers in scope must respond, typically within 30 to 45 days',
      'Recurring requests rather than a one-off sweep, which is the only approach that holds',
      'Family pricing is the cheapest per person in the category',
    ],
    cons: [
      'Removals only continue while the subscription does — brokers re-list from public records',
      'Monthly billing costs roughly double the annual rate, and there is no free tier',
      'Sold only in about 34 countries, because elsewhere the requests have nothing to enforce them',
    ],
    trust: [
      '30-day money-back guarantee on all plans',
      'Coverage and volume figures independently assessed by Deloitte',
      'Available only where GDPR, UK GDPR, CCPA/CPRA or PIPEDA apply',
      'Part of the Surfshark / Nord Security group, alongside NordVPN and NordPass',
    ],
    ratings: [{ source: 'Trustpilot', value: 4.3 }],
    tracked: true,
    topCta: 'See Incogni pricing →',
    brandSlug: 'incogni',
  },
  easeus: {
    id: 'easeus',
    name: 'EaseUS',
    badge: 'EA',
    color: '#1E6FD9',
    vertical: 'security',
    domain: 'easeus.com',
    siteLabel: 'easeus.com',
    score: 4.1,
    tagline:
      'The approachable data-recovery tool: free to scan and preview, expensive to actually recover',
    founded: 'Chengdu Yiwo Tech, trading since 2004',
    reach: 'vendor-stated 530m+ users across 190 countries; Windows and Mac builds sold separately',
    priceNote: 'free up to 2 GB; Pro from $69.95 for one month, $149.95 lifetime (Windows)',
    format: 'Data Recovery Wizard Pro, one licence per computer; 30-day money-back guarantee',
    highlights: [
      'Free edition scans and previews without limit, then recovers 500 MB — 2 GB after a social share',
      'Covers internal and external drives, SSDs, USB sticks, SD cards, RAID and NAS volumes',
      'Deep-scan and partition-recovery modes for formatted or corrupted volumes',
      'Todo Backup Home and Partition Master Professional cover backup and partitioning separately',
    ],
    pros: [
      'You can confirm your files are recoverable before paying anything',
      'Scan-preview-recover flow that non-technical users can follow under pressure',
      'Mature product with high aggregate ratings on Capterra and G2',
    ],
    cons: [
      '$69.95 for a one-month, one-computer licence, against free tools that do the same job',
      'Refunds are granted on technical grounds only, and not once the software has worked',
      'One licence per computer, with Windows and Mac priced as separate products',
    ],
    trust: [
      '30-day money-back guarantee on technical grounds',
      'Trading since 2004 under Chengdu Yiwo Tech Development Co.',
      'Free edition is fully functional for scanning and previewing before purchase',
      'Refund conditions published in full on the sales FAQ',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.9 },
      { source: 'Capterra', value: 4.5 },
      { source: 'G2', value: 4.7 },
    ],
    tracked: true,
    topCta: 'See EaseUS pricing →',
    brandSlug: 'easeus',
  },
  diskdrill: {
    id: 'diskdrill',
    name: 'Disk Drill',
    badge: 'DD',
    color: '#00A3A3',
    vertical: 'security',
    domain: 'cleverfiles.com',
    siteLabel: 'cleverfiles.com',
    score: 4.3,
    tagline:
      'One licence across Mac and Windows and the widest filesystem coverage — with the smallest free allowance',
    founded: 'CleverFiles, shipping Disk Drill since 2010',
    reach: 'one PRO licence covers macOS and Windows, one user, up to three device activations',
    priceNote: 'free recovery capped at 100 MB on Windows; PRO $89/yr or $149 lifetime',
    format: 'Disk Drill PRO: one user, three devices, macOS and Windows in a single licence',
    highlights: [
      'A single PRO licence covers both macOS and Windows and activates on up to three devices',
      'Reads APFS, HFS+, NTFS, NTFS5, ReFS, FAT16/FAT32, exFAT, ext2/3/4, BTRFS and raw disks',
      'Byte-to-byte disk imaging is free — copy a failing drive first and scan the copy instead',
      'The $149 lifetime licence is perpetual, and CleverFiles now bundles lifetime updates with it',
    ],
    pros: [
      'The only tool here whose one licence spans Mac, Windows and three machines',
      'Free byte-to-byte imaging lets you work from a copy rather than the drive that is failing',
      'Broadest filesystem support in the category, including APFS and Linux volumes',
    ],
    cons: [
      'Free recovery stops at 100 MB on Windows, and the Mac build carries no free recovery allowance at all',
      'CleverFiles states PRO purchases are non-refundable except where consumer law compels a refund',
      'The $89 annual licence auto-renews at whatever the price happens to be on renewal day',
    ],
    trust: [
      'Lifetime licence is perpetual and carries lifetime updates under the published update policy',
      'Unlimited free preview and free byte-to-byte imaging before any purchase',
      'CleverFiles has shipped Disk Drill continuously since 2010',
      'No money-back guarantee — the non-refundable terms are printed on cleverfiles.com/pro.html',
    ],
    ratings: [
      { source: 'Trustpilot (CleverFiles)', value: 4.4 },
      { source: 'G2', value: 4.0 },
      { source: 'Capterra', value: 3.8 },
    ],
    tracked: true,
    topCta: 'See Disk Drill pricing →',
    brandSlug: 'diskdrill',
  },
  stellar: {
    id: 'stellar',
    name: 'Stellar Data Recovery',
    badge: 'ST',
    color: '#0B3D91',
    vertical: 'security',
    domain: 'stellarinfo.com',
    siteLabel: 'stellarinfo.com',
    score: 3.7,
    tagline:
      'The deepest edition ladder in the category, sold one computer at a time — and its “lifetime” licence runs ten years',
    founded: 'Stellar Information Technology, India, trading since 1993',
    reach: 'Windows and Mac editions sold separately; one computer per licence at a time',
    priceNote: 'free up to 2 GB; Professional $89.99/yr, Premium $99.99/yr (Windows)',
    format:
      'Standard, Professional, Premium, Technician and Toolkit editions; 30-day money-back guarantee',
    highlights: [
      'Free edition recovers 1 GB, rising to 2 GB once you share the product on social media',
      'Professional adds lost-partition and non-booting-system recovery; Premium adds photo and video repair',
      'Reads BitLocker-encrypted and RAW volumes when you can supply the recovery key',
      'A plain 30-day money-back guarantee — the clearest refund promise of the four',
    ],
    pros: [
      'The refund is a straightforward 30-day money-back guarantee, not a technical-fault clause',
      'The edition ladder runs all the way to RAID and virtual-machine recovery if the case needs it',
      'Free tier hands back 2 GB before any money changes hands',
    ],
    cons: [
      'A licence covers one computer at a time, and the Mac editions are separate purchases again',
      'Stellar’s own licensing page defines the “lifetime” licence as ten years of use, not forever',
      'Capterra shows 2.8 from a small sample of 13 reviews — far below its Trustpilot standing',
    ],
    trust: [
      '30-day money-back guarantee on annual subscriptions, published in the refund policy',
      'Trading since 1993, with its own physical data-recovery labs alongside the software',
      'Licence terms, including the ten-year definition of “lifetime”, published on stellarinfo.com',
      'Free edition recovers up to 2 GB before any purchase',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.8 },
      { source: 'Capterra', value: 2.8 },
    ],
    tracked: true,
    topCta: 'See Stellar pricing →',
    brandSlug: 'stellar',
  },
  recuva: {
    id: 'recuva',
    name: 'Recuva',
    badge: 'RE',
    color: '#546E7A',
    vertical: 'security',
    domain: 'ccleaner.com/recuva',
    siteLabel: 'ccleaner.com',
    score: 3.3,
    tagline: 'Free, uncapped and Windows-only — the one to try before you spend anything',
    founded: 'Piriform, 2007; owned by Gen Digital since the 2017 Avast acquisition',
    reach: 'Windows only; FAT16/FAT32, exFAT and NTFS volumes; a portable build is published',
    priceNote: 'free with no recovery cap; Professional $24.95/yr',
    format:
      'Recuva Free or Recuva Professional; Professional adds virtual-drive support and priority support',
    highlights: [
      'The free edition has no recovery cap — the only tool in this ranking without one',
      'A portable build runs from a USB stick, so nothing is installed onto the damaged drive',
      'Deep-scan mode rebuilds files whose filesystem records have already gone',
      'Professional costs $24.95 a year, a fraction of anything else in the category',
    ],
    pros: [
      'Free and uncapped, so a small recovery can genuinely cost nothing',
      'The portable build avoids writing to the drive you are trying to recover from',
      'Light, fast and simple enough to drive at two in the morning',
    ],
    cons: [
      'Windows only, and it reads FAT, exFAT and NTFS alone — no APFS, HFS+ or ext4',
      'Development is maintenance-level: v1.55.133 in June 2026 was an EU withdrawal-rights compliance change',
      'Professional buys virtual-drive support and priority support, not better recovery',
      'A Gen Digital product, like Avast, AVG and Norton — the group the FTC fined $16.5m in 2024',
    ],
    trust: [
      'The free edition is fully functional with no data cap and no expiry',
      'Published continuously since 2007, by Piriform under Gen Digital',
      'A portable build is offered by the vendor for recovery without installation',
      'Not listed on Trustpilot, G2 or Capterra — no aggregate user score exists for it',
    ],
    ratings: [
      { source: 'TechRadar (editorial)', value: 4.0 },
      { source: 'Softpedia (editorial)', value: 3.5 },
    ],
    tracked: true,
    topCta: 'Download Recuva →',
    brandSlug: 'recuva',
  },
  deleteme: {
    id: 'deleteme',
    name: 'DeleteMe',
    badge: 'DM',
    color: '#1B3A6B',
    vertical: 'security',
    domain: 'joindeleteme.com',
    siteLabel: 'joindeleteme.com',
    score: 3.9,
    tagline:
      'The oldest name in data removal, with the best reporting and the weakest measured result',
    founded: 'Abine, Inc., Boston — trading since around 2010',
    reach: '986 brokers listed, of which roughly 90 are covered on the Standard plan',
    priceNote: '$129/yr one person, $329/yr for four',
    format: 'Annual or two-year subscription, 1 to 4 people; quarterly privacy reports',
    highlights: [
      'Quarterly reports name each broker, its removal status and which categories of data it held',
      'A named privacy advisor on every plan — removals are human-assisted, not purely automated',
      'The full 20-page sample report is published, so you can read it before buying',
      'Sells UK, Canadian and Australian plans in local currency; 153 sites marked international',
    ],
    pros: [
      'The most detailed per-broker reporting of any service here, and the sample is public',
      'A person is assigned to the account, which is what gets past obstructive opt-out processes',
      'Full refund before the first report arrives, prorated after — tied to the work, not a countdown',
    ],
    cons: [
      'The advertised 986 brokers are tiered: about 90 on Standard, 566 custom-request only',
      'Consumer Reports measured 27% of listings removed at four months — lowest of the services it tested',
      'No monthly billing and no trial; cancellation goes through e-mail or a phone call',
    ],
    trust: [
      'Full refund if cancelled before the first Privacy Report, prorated afterwards',
      'Twenty-page sample report published at joindeleteme.com/example-report.pdf',
      'Abine, Inc. holds a BBB A+ rating, accredited since 2016',
      'Broker list published with per-plan coverage markers, updated monthly',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.1 },
      { source: 'Consumer Reports removals at 4 months %', value: 27 },
    ],
    tracked: true,
    topCta: 'See DeleteMe pricing →',
    brandSlug: 'deleteme',
  },
  optery: {
    id: 'optery',
    name: 'Optery',
    badge: 'OP',
    color: '#00A88F',
    vertical: 'security',
    domain: 'optery.com',
    siteLabel: 'optery.com',
    score: 4.5,
    tagline:
      'The only removal service that photographs the work — on the tiers that include the reports',
    founded: 'founded 2020 in San Francisco, Y Combinator winter 2022',
    reach: '380+ to 635+ brokers by tier, plus custom removals Optery counts towards 950+',
    priceNote: '$39/yr Core, $149/yr Extended, $249/yr Ultimate',
    format: 'Free tier plus three paid tiers; 30-day money-back guarantee on a first purchase',
    highlights: [
      'Removals Reports carry before-and-after screenshots of the broker pages, roughly every 90 days',
      'Best result of the seven services in the Consumer Reports test: 68% removed at four months',
      'Free tier returns a real exposure report with screenshots before you pay anything',
      'SOC 2 Type II audited by Prescient Assurance — relevant, given what you hand over at signup',
    ],
    pros: [
      'Sends photographic evidence that a broker page is gone, which no competitor here does',
      'Highest measured removal rate in the only controlled test of the category',
      'Paid plans re-scan and re-file at least every 30 days, and the broker directory is public',
    ],
    cons: [
      'Removals Reports start at the $149 Extended tier — the $39 plan includes no evidence at all',
      'No consumer plans in the UK or the EU, the jurisdictions where GDPR bites hardest',
      'The headline 950+ figure counts Ultimate-only custom requests, not automated coverage',
    ],
    trust: [
      '30-day no-questions-asked money-back guarantee on a first purchase',
      'SOC 2 Type II certification, audited by Prescient Assurance',
      'Public data-broker directory with per-broker opt-out instructions, free to non-customers',
      'PCMag Editors’ Choice in the personal data-removal category',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.4 },
      { source: 'PCMag', value: 4.5 },
      { source: 'Consumer Reports removals at 4 months %', value: 68 },
    ],
    tracked: true,
    topCta: 'See Optery pricing →',
    brandSlug: 'optery',
  },
  easyoptouts: {
    id: 'easyoptouts',
    name: 'EasyOptOuts',
    badge: 'EO',
    color: '#5B8C00',
    vertical: 'security',
    domain: 'easyoptouts.com',
    siteLabel: 'easyoptouts.com',
    score: 4.2,
    tagline:
      'One price, no affiliate programme, and the second-best measured result in the category',
    founded: 'bootstrapped by two US founders, Ben and Tyler',
    reach: '200+ of the most visible data brokers and people-search sites, US residents only',
    priceNote: '$19.99/yr flat — no monthly, no tiers, no family plan',
    format: 'One annual subscription per person; full refund within 150 days',
    highlights: [
      'Consumer Reports measured 65% of listings removed at four months, second only to Optery',
      'Retested independently by Privacy Guides in 2025: 73% to 86% of high-priority brokers cleared',
      'A 150-day refund window — long enough to watch two full scan cycles before deciding',
      'Runs no affiliate programme and says so publicly: “We never pay reviewers for traffic”',
    ],
    pros: [
      'Second-best measured removal rate in the only controlled test, at a twelfth of the winner’s price',
      'Assessed twice by independent, non-commercial testers, with consistent results',
      'The longest money-back guarantee in the category by a wide margin',
    ],
    cons: [
      'United States only — its terms state the service does not work for residents of other countries',
      'Scans run every four months, against competitors re-checking at least monthly',
      'No family plan, no reporting to speak of, and no human to escalate an awkward broker to',
    ],
    trust: [
      'Full refund within 150 days of signing up',
      'Results measured independently by Consumer Reports (2024) and Privacy Guides (2025)',
      'Runs no affiliate programme — this site earns nothing from the link',
      'Opt-outs stated as 100% automated, by a team stated as 100% US-based',
    ],
    ratings: [
      { source: 'Trustpilot', value: 4.5 },
      { source: 'Consumer Reports removals at 4 months %', value: 65 },
    ],
    tracked: false,
    topCta: 'Visit easyoptouts.com →',
    brandSlug: 'easyoptouts',
  },
}

/** The byline on every security guide. */
export const securityAuthor: Author = {
  name: 'Priya Raman',
  role: 'Security & privacy editor',
  bio: 'Priya has covered consumer security software for twelve years, through the period when antivirus stopped being a product you bought once and became a subscription that quietly doubles. She works from the independent lab results — AV-TEST and AV-Comparatives — rather than vendor benchmarks, and she reads the auto-renewal terms, which is where most of the complaints in this category originate.',
  initials: 'PR',
  credentials: [
    '12 years covering security software',
    'Works from independent lab data',
    'Reads the auto-renewal terms',
  ],
}
