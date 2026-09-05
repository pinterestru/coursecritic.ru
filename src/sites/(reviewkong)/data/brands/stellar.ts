/**
 * Brand page data for Stellar Data Recovery (route: /brands/stellar).
 *
 * SOURCES (checked 21 August 2026):
 *   - https://www.stellarinfo.com/order_online.php — US dollar list prices for
 *     the Windows editions: Standard $59.99/yr (from $99), Professional
 *     $89.99/yr (from $149), Premium $99.99/yr (from $199), Technician $199/yr
 *     (from $399), Toolkit $299/yr (from $599)
 *   - https://www.stellarinfo.com/disk-recovery/windows-data-recovery/buy-now.php
 *     — "You can install the software on only one computer or laptop at a time"
 *     and the 30-day money-back guarantee on annual subscriptions
 *   - https://www.stellarinfo.com/software-licensing-usage.php — "Lifetime or
 *     perpetual license allows end-users to use the software for 10 years after
 *     making a one-time payment", plus one complimentary year of support
 *     (extendable to three)
 *   - https://www.stellarinfo.com/free-data-recovery.php — the free edition
 *     recovers 1 GB, rising to 2 GB after a social share; 64-bit Windows only
 *   - https://www.stellarinfo.com/windows-data-recovery-professional.php —
 *     NTFS, FAT16/FAT32, exFAT and ReFS; HDDs, SSDs, 4K drives, BitLocker
 *     volumes, optical media and RAW disks
 *   - https://www.stellarinfo.com/partners/affiliates.php — the Stellar
 *     affiliate programme (this brand is monetised: tracked: true)
 *   - https://www.capterra.com/p/170163/Stellar-Phoenix-Windows-Data-Recovery/reviews/
 *     — 2.8 from 13 reviews
 *
 * ⚠️ Re-verify before launch and before every campaign. Specific risks:
 * (1) the store geolocates, so a European reader sees euro figures (€69.99 /
 * €99 / €109) against the dollar list above — quote the currency of the market
 * you buy traffic in; (2) Stellar does NOT publish the lifetime-licence prices
 * on the product pages, only inside the store widget, so the "lifetime costs
 * more" framing below is deliberately kept unpriced; (3) the Trustpilot figure
 * (4.8) could NOT be read from the live page — Trustpilot refuses automated
 * fetches — and comes from secondary reporting. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const stellar: BrandPage = {
  slug: 'stellar',
  providerId: 'stellar',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Stellar Data Recovery review 2026 — price and free cap',
  metaDescription:
    'An independent Stellar review: what the free 2 GB covers, which edition you actually need, and why the "lifetime" licence lasts just ten years.',
  intro:
    'Stellar is the oldest company in this category and it sells accordingly: five editions of the same product, each unlocking a class of problem the one below cannot handle. It also has the clearest refund promise of the four tools here — a plain 30-day money-back guarantee. What it does not have is a licence that follows you between machines, or a "lifetime" that means what the word usually means.',
  about: [
    'Stellar Information Technology has been trading since 1993 and runs physical data-recovery labs alongside the software business — the sort of operation you send a drive to when the software has failed. That heritage shows in the product range. Stellar Data Recovery for Windows is sold as Standard, Professional, Premium, Technician and Toolkit, and the differences are not cosmetic: Standard recovers deleted and formatted files, Professional adds lost-partition and non-booting-system recovery, Premium adds photo and video repair, and Technician and Toolkit add RAID and virtual-machine work for people doing this for a living.',
    'Coverage is solid rather than exotic. NTFS, FAT16, FAT32, exFAT and ReFS on hard drives, SSDs, 4K-sector drives, optical media and external storage, plus BitLocker-encrypted volumes when you can supply the recovery key, and disks that have gone RAW because the filesystem is corrupt. The free edition runs on 64-bit Windows and recovers 1 GB, rising to 2 GB once you share the product from inside the app — the same social-share mechanic EaseUS uses, and the same effective ceiling.',
    'The licensing is where a buyer needs to read carefully. A licence installs on one computer or laptop at a time, and the Mac editions are separate purchases; there is no cross-platform licence of the kind Disk Drill sells. Stellar offers a lifetime licence alongside the annual subscription, but its own licensing page defines that as ten years of use for a one-time payment, with one complimentary year of support that can be extended to three. Ten years is a long time for software you may run twice. It is still not "lifetime", and the page that says so is not the page you buy from.',
  ],
  facts: [
    { label: 'Trading since', value: '1993' },
    { label: 'Free recovery cap', value: '1 GB, 2 GB after sharing' },
    { label: 'Licence', value: 'One computer at a time' },
    { label: 'Refund window', value: '30 days, money-back' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'US dollar list prices for the Windows editions, all annual. Stellar discounts these heavily and continuously — every tier below shows a struck-through figure roughly 40–60% higher — so the list price is almost never the checkout price. The store geolocates, and European readers see euro amounts instead. Lifetime licences are offered at checkout but their prices are not published on the product pages, and Stellar defines "lifetime" as ten years. Mac editions are separate purchases.',
    items: [
      {
        name: 'Free',
        price: '$0',
        detail:
          'Scans, previews and recovers 1 GB, rising to 2 GB after sharing the product on social media. No RAID or NAS support, no full partition recovery, no photo or video repair. Enough to establish whether your files survived, and enough to bring back a folder of documents.',
      },
      {
        name: 'Standard',
        price: '$59.99 for a twelve-month licence',
        detail:
          'Unlimited recovery of deleted and formatted files from working volumes on one computer. Fine if you emptied the recycle bin or reformatted a memory card; it will not help you with a partition that has vanished.',
      },
      {
        name: 'Professional',
        price: '$89.99 for a twelve-month licence',
        detail:
          'Adds lost-partition recovery, recovery from a system that will not boot, and optical media. This is the tier that handles the cases people actually buy recovery software for, and the one to start at.',
        pick: true,
      },
      {
        name: 'Premium',
        price: '$99.99 for a twelve-month licence',
        detail:
          'Professional plus photo and video repair — for files that come back corrupt rather than files that do not come back. Worth $10 more only if the lost material is photos or video.',
      },
      {
        name: 'Technician / Toolkit',
        price: '$199 and $299 for twelve months',
        detail:
          'RAID reconstruction, multi-system licensing and virtual-machine disks. Priced for repair shops and IT departments, not households.',
      },
    ],
  },
  pros: [
    {
      title: 'The clearest refund terms in the category',
      body: 'A plain 30-day money-back guarantee on the annual subscriptions. EaseUS refunds on technical grounds only and explicitly not once the software has worked; CleverFiles states Disk Drill purchases are non-refundable outright. Stellar is the only one of the four where changing your mind is contemplated.',
    },
    {
      title: 'A free tier that returns something real',
      body: '1 GB, or 2 GB after a share, against Disk Drill’s 100 MB on Windows and nothing on Mac. For a folder of documents or a set of scanned papers that is a complete recovery at no cost, and it doubles as the diagnostic that tells you whether paying would help.',
    },
    {
      title: 'The edition ladder goes as far as the problem does',
      body: 'BitLocker volumes, RAW disks, non-booting systems, RAID arrays, virtual machines. Most consumers will never leave Professional, but a case that escalates does not mean starting again with a different vendor.',
    },
    {
      title: 'A company with labs behind the software',
      body: 'Trading since 1993 and running physical recovery labs, so the escalation path when software cannot do it is the same company rather than a cold search at the worst possible moment.',
    },
  ],
  cons: [
    {
      title: 'The "lifetime" licence is ten years',
      body: 'Stellar’s own software licensing page states that the lifetime or perpetual licence allows use for ten years after a one-time payment, with one complimentary year of support extendable to three. That is a fixed term dressed in a word that means the opposite, and the definition lives on a policy page rather than the checkout.',
    },
    {
      title: 'One computer at a time, and Mac costs again',
      body: 'The buy page states the software installs on only one computer or laptop at a time, and the Mac editions are separate products at separate prices. Covering a laptop and a desktop means two purchases; covering a PC and a Mac means two more. Disk Drill sells one licence for three devices across both platforms at $149.',
    },
    {
      title: 'Its aggregate scores disagree with each other sharply',
      body: 'Trustpilot puts Stellar near the top of the category while Capterra shows 2.8 from 13 reviews — a small sample, but a very different picture, and the negative reviews cluster on licensing and refunds rather than on whether the software recovers files. Read the low-star reviews before buying, not the average.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.8,
      note: 'thousands of reviews — ⚠️ read from secondary reporting, not the live page',
    },
    { source: 'Capterra', value: 2.8, note: 'a thin and much less flattering sample — 13 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite: the best refund terms and a usable free tier, against per-machine licensing and a ten-year "lifetime"',
    },
  ],
  bestFor: [
    'Windows users who want a real money-back guarantee behind the purchase',
    'Recovering a partition that has vanished, or reading a system that will not boot',
    'Photos and video that come back corrupted — the Premium tier repairs as well as recovers',
    'Anyone whose case might escalate to a physical lab, since Stellar runs its own',
  ],
  notFor: [
    'Households with more than one computer — every machine is another licence',
    'Mac users comparing on price, because the Mac editions are priced separately again',
    'Anyone who reads "lifetime" as permanent: Stellar defines it as ten years',
    'Small recoveries that Recuva would do free, or that fit in EaseUS’s 2 GB',
  ],
  faq: [
    {
      q: 'How much does the free version actually recover?',
      a: '1 GB, rising to 2 GB once you share the product on social media from inside the app. Scanning and preview are not capped, so the free edition always tells you whether your files are still readable — which is the question worth answering before any money is spent.',
    },
    {
      q: 'Which edition do I need?',
      a: 'Professional, in most real cases. Standard only handles deleted and formatted files on a volume that is still there; the moment a partition has disappeared or the system will not boot — the situations people actually buy recovery software for — you need Professional. Go to Premium only if the lost material is photos or video that may come back damaged.',
    },
    {
      q: 'Is the lifetime licence worth buying?',
      a: 'Understand what you are buying first: Stellar defines the lifetime licence as ten years of use for a one-time payment, with one year of support included and up to three available. As a decade-long licence it can be good value against repeated annual renewals. As a permanent purchase, which is what the word implies, it is not one.',
    },
    {
      q: 'Can I use one licence on two computers?',
      a: 'No. The buy page states the software installs on only one computer or laptop at a time, and the Mac editions are separate products. If you need to cover several machines or both platforms, Disk Drill’s single licence for three devices across macOS and Windows is the cheaper structure.',
    },
    {
      q: 'What if it does not find my files — can I get my money back?',
      a: 'Stellar publishes a 30-day money-back guarantee, and its annual subscription is refundable if you request it within 30 days. That is the strongest refund position of the four tools here. Even so, run the free edition first: if the scan cannot see your files, no edition of the paid software will either, and you save yourself the round trip.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'stellarinfo.com/disk-recovery/windows-data-recovery/buy-now.php',
}
