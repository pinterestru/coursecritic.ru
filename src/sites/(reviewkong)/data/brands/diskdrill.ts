/**
 * Brand page data for Disk Drill (route: /brands/diskdrill).
 *
 * SOURCES (checked 21 August 2026):
 *   - https://www.cleverfiles.com/pro.html — "1 user, install on up to 3 devices",
 *     macOS and Windows under one licence, and the statement that all PRO
 *     purchases (Lifetime and One-Year) are non-refundable except where consumer
 *     law requires otherwise
 *   - https://www.cleverfiles.com/help/what-are-the-differences-between-disk-drill-basic-pro-expert-and-enterprise/
 *     — PRO at $89.00/year or $149.00 lifetime, and the 100 MB free recovery cap
 *     on Windows (the Mac build offers preview and Guaranteed Recovery instead,
 *     with no free recovery allowance)
 *   - https://www.cleverfiles.com/help/disk-drill-pro-coupon-discount.html — the
 *     same $89/year and $149 lifetime list prices
 *   - https://www.cleverfiles.com/help/disk-drill-pro-subscription.html — the
 *     subscription runs 12 months and auto-renews at the price valid on the
 *     renewal date; the Lifetime licence does not renew
 *   - https://www.cleverfiles.com/help/disk-drill-license-models-updated.html —
 *     one licence covers macOS and Windows with up to three device activations
 *   - https://www.cleverfiles.com/help/updates/ — the Lifetime Upgrade Guarantee
 *   - https://www.cleverfiles.com/data-recovery-software.html — supported
 *     filesystems (FAT16/32, exFAT, NTFS, NTFS5, ReFS, HFS, HFS+, APFS,
 *     ext2/3/4, BTRFS, raw), Recovery Vault, S.M.A.R.T. monitoring and
 *     byte-to-byte backup
 *   - https://www.cleverfiles.com/partners.html — the CleverFiles affiliate
 *     programme (this brand is monetised: tracked: true)
 *   - https://www.capterra.com/p/229166/Disk-Drill/reviews/ — 3.8 from 12 reviews
 *
 * ⚠️ Re-verify before launch and before every campaign. Two specific risks:
 * (1) CleverFiles runs coupon promotions constantly, so $89/$149 is a list price
 * that is often discounted; (2) the Trustpilot (4.4, roughly 480 reviews on the
 * CleverFiles company profile) and G2 (4.0, roughly 64 reviews) figures below
 * could NOT be read from the live pages — both hosts refuse automated fetches —
 * and were taken from secondary reporting. Check them by hand. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const diskdrill: BrandPage = {
  slug: 'diskdrill',
  providerId: 'diskdrill',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Disk Drill review 2026 — free limit, price, refunds',
  metaDescription:
    'An independent Disk Drill review: the 100 MB free cap on Windows, what the $89 and $149 licences really cover, and the refund policy that says no.',
  intro:
    'Disk Drill is the most technically complete file-recovery tool a home user can buy: one licence covers macOS and Windows on three machines, it reads more filesystems than anything else in the category, and it will image a failing drive for free before you scan it. The catch is at both ends of the transaction — the free tier gives back almost nothing, and CleverFiles says plainly that purchases are not refundable.',
  about: [
    'CleverFiles is a US software company that has shipped Disk Drill since 2010, first on the Mac and later on Windows. The product does what every tool in this category does — read the filesystem of a drive, find records for files that have been deleted, formatted away or lost with a partition, and rebuild them — but it does so across an unusually wide set of volumes. APFS, HFS+, NTFS, NTFS5, ReFS, FAT16, FAT32, exFAT, ext2/3/4, BTRFS and raw disks are all supported, which means it can read a Mac drive from Windows, a Linux volume from a Mac, or a camera card formatted by something that has never heard of either.',
    'Two of its free features matter more than the free recovery allowance, which is small. Byte-to-byte backup makes a sector-level image of a drive, including the deleted regions, so you can scan the copy and leave the original untouched — the single most useful thing you can do with a drive that may be failing physically. Recovery Vault, running in the background before anything goes wrong, keeps a record of what was deleted so a later restore is trivial rather than forensic. Neither is behind the paywall. The paywall sits on writing recovered files back out.',
    'Licensing is the other place Disk Drill differs from its rivals. Since version 6.2 CleverFiles has sold both a one-year subscription at $89 and a perpetual Lifetime licence at $149, and either one covers a single user across macOS and Windows on up to three device activations. Against EaseUS and Stellar, which price Windows and Mac separately and licence one computer at a time, that is a genuinely better deal for anyone with more than one machine — and it is the main reason this ends up ranked first rather than the free tier, which is the worst here.',
  ],
  facts: [
    { label: 'Shipping since', value: '2010' },
    { label: 'Free recovery cap', value: '100 MB (Windows)' },
    { label: 'Licence', value: '1 user, 3 devices, Mac + Windows' },
    { label: 'Refunds', value: 'None offered' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'List prices from CleverFiles. The subscription runs twelve months and renews automatically at whatever the price is on the renewal date, so diarise it. The Lifetime licence does not renew. CleverFiles discounts these figures through coupon promotions often enough that the list price is frequently not the checkout price — and note that neither purchase is refundable, so run the free scan and preview first.',
    items: [
      {
        name: 'Basic (free)',
        price: '$0',
        detail:
          'Unlimited scanning and preview, free byte-to-byte disk imaging, Recovery Vault and S.M.A.R.T. monitoring — then 100 MB of recovery on Windows. The Mac build has no free recovery allowance at all. Treat this as the diagnostic, not the fix.',
      },
      {
        name: 'PRO, one year',
        price: '$89.00 for a twelve-month licence',
        renews: 'auto-renews at the price current on the renewal date',
        detail:
          'Unlimited recovery for one user across macOS and Windows, on up to three devices. Only worth it over the Lifetime licence if you are certain this is a one-off — and it renews on its own unless you cancel.',
      },
      {
        name: 'PRO, lifetime',
        price: '$149.00 one-off',
        detail:
          'The same licence, perpetual, with lifetime updates under the CleverFiles upgrade guarantee. It costs $60 more than one year and never charges you again, which for a tool you keep on the shelf against the next accident is the rational purchase.',
        pick: true,
      },
      {
        name: 'Enterprise',
        price: 'quoted on request',
        detail:
          'Multi-workstation licensing for businesses and recovery shops, with priority support and forensic export. Not a consumer product; CleverFiles does not publish a price.',
      },
    ],
  },
  pros: [
    {
      title: 'One licence, both platforms, three machines',
      body: 'A single PRO licence activates on up to three devices and works on macOS and Windows alike. EaseUS and Stellar both sell their Mac builds as separate products and licence one computer at a time, so a mixed household pays them twice and Disk Drill once.',
    },
    {
      title: 'Free byte-to-byte imaging, which is what you should do first',
      body: 'Making a sector-level copy of the affected drive and scanning the copy is the safest possible approach: the original is read once and then left alone. Disk Drill includes it in the free edition, so you can take the image before you have decided whether to buy anything.',
    },
    {
      title: 'The widest filesystem support in the category',
      body: 'APFS, HFS+, NTFS, ReFS, FAT, exFAT, ext2/3/4, BTRFS and raw disks. If you are pulling a drive out of one machine and reading it from another — the common case when the original computer will not boot — this is the tool least likely to shrug at the volume.',
    },
    {
      title: 'A perpetual licence still exists, and it now includes updates',
      body: 'Most software has abandoned the one-off purchase. Disk Drill has kept it: $149 buys the product outright with lifetime updates under the published upgrade guarantee, which is the honest shape for a tool you may use twice in a decade.',
    },
  ],
  cons: [
    {
      title: 'CleverFiles says PRO purchases are not refundable',
      body: 'The pro.html page states that all Disk Drill PRO purchases, Lifetime and One-Year alike, are non-refundable except where consumer protection law compels a refund. Stellar offers a 30-day money-back guarantee and EaseUS a narrower 30-day technical-grounds one. This is the weakest position in the ranking, and it makes the free scan and preview mandatory rather than optional.',
    },
    {
      title: 'The free allowance is the smallest here — and zero on Mac',
      body: '100 MB of free recovery on Windows will return a few documents and nothing more. On macOS there is no free recovery allowance: you get preview, imaging and Recovery Vault, then a paywall. EaseUS gives 2 GB and Recuva gives no cap at all, so if what you lost is small, start there instead.',
    },
    {
      title: 'The annual licence renews by itself',
      body: 'The twelve-month subscription rolls over automatically at whatever the price is on the renewal date, and CleverFiles states the renewal price may change. For a product most people use once, an auto-renewing subscription is the wrong default — buy the Lifetime licence or set a cancellation reminder the day you pay.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.4,
      note: 'CleverFiles company profile, roughly 480 reviews — ⚠️ read from secondary reporting, not the live page',
    },
    { source: 'G2', value: 4.0, note: 'roughly 64 reviews of Disk Drill' },
    { source: 'Capterra', value: 3.8, note: 'a thin sample — 12 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.3,
      note: 'our composite: the best licence terms and the widest coverage, undercut by no refunds and a token free tier',
    },
  ],
  bestFor: [
    'Anyone with both a Mac and a PC, or more than one computer to cover',
    'Reading a drive pulled out of a machine that will no longer boot',
    'Imaging a drive that may be failing physically, before scanning anything',
    'People who would rather buy software once than rent it annually',
  ],
  notFor: [
    'Recovering a handful of documents — the 100 MB free cap will not stretch, and Recuva is free',
    'Mac users hoping to recover anything at all without paying: there is no free allowance',
    'Buyers who want the safety net of a money-back guarantee, which CleverFiles does not offer',
    'Drives that click, grind or disappear from the BIOS — that is a lab job, not a software one',
  ],
  faq: [
    {
      q: 'What should I do before I install Disk Drill?',
      a: 'Stop writing to the affected drive, and install the software somewhere else. Every file written to the volume you are recovering can overwrite the thing you are trying to get back, and installing the recovery tool onto that same volume is the classic way to destroy the evidence. If the drive is external, unplug it until you are ready. If it is your only internal disk, recover to an external drive.',
    },
    {
      q: 'Is the free version any use?',
      a: 'As a diagnostic, yes — it scans and previews without limit, so it tells you whether your files are still readable before you spend anything. As a recovery tool it is barely there: 100 MB on Windows, and no free recovery allowance at all on macOS. The free byte-to-byte imaging is arguably worth more than the allowance, because it lets you take a safe copy of the drive first.',
    },
    {
      q: 'Should I buy the subscription or the lifetime licence?',
      a: 'The Lifetime licence at $149, unless you have a specific reason not to. It is $60 more than one year of the subscription, it never charges you again, and it carries lifetime updates. The subscription auto-renews at the price current on the renewal date, which for software most people run once is the wrong shape.',
    },
    {
      q: 'Does one licence cover my Mac and my PC?',
      a: 'Yes — this is Disk Drill’s main advantage over EaseUS and Stellar. One PRO licence covers a single user on both macOS and Windows, with up to three device activations. The others sell their Mac and Windows builds as separate products, licensed one computer at a time.',
    },
    {
      q: 'Can I get a refund if it does not find my files?',
      a: 'Assume not. CleverFiles states that Disk Drill PRO purchases, both the Lifetime licence and the one-year subscription, are non-refundable except where consumer protection law requires a refund. That is why the free scan and preview matter so much: establish that your files are visible and intact before you pay, because the money is unlikely to come back.',
    },
    {
      q: 'Will it recover files deleted from an SSD?',
      a: 'Often not, and that is not a criticism of Disk Drill. Modern SSDs run TRIM, which tells the drive to clear the blocks behind deleted files in the background, usually within minutes. Once that has happened the data is physically gone and no software can retrieve it — recovery tools frequently return zero-byte files in this case. The exception is a file lost to a formatted or corrupted partition rather than a deletion, where TRIM may not have been issued.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'cleverfiles.com/pro.html',
}
