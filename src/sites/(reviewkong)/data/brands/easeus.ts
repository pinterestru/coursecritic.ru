/**
 * Brand page data for EaseUS (route: /brands/easeus).
 *
 * SOURCES (checked 18 August 2026):
 *   - https://www.easeus.com/datarecoverywizardpro/drw-pro-buy.html — Windows
 *     and Mac licence prices, "one licence for one computer", 30-day guarantee
 *   - https://www.easeus.com/data-recovery-software/ — Free / Pro / Technician
 *     editions, the 2 GB free cap and the vendor's 99.7% success-rate claim
 *   - https://www.easeus.com/datarecoverywizard/free-data-recovery-software.htm
 *     — free edition recovers 500 MB, rising to 2 GB after a social share
 *   - https://www.easeus.com/sales-faq/refund-policy.html — refunds are granted
 *     on technical grounds only, and not once the product has done its job
 *   - https://www.easeus.com/backup-software/tb-home-buy.html and
 *     https://www.easeus.com/partition-manager/epm-pro-buy.html — Todo Backup
 *     Home and Partition Master Pro prices
 *   - https://www.easeus.com/company/about-us.html — founded 2004, vendor-stated
 *     530m+ customers across 190 countries
 *   - https://www.trustpilot.com/review/easeus.com — 4.9 from 39,255 reviews,
 *     flagged by Trustpilot as a company that invites its customers to review
 *   - https://www.capterra.com/p/188155/EaseUS-Data-Recovery/ — 4.5 from ~290
 *     reviews; https://www.g2.com — 4.7 from ~301 reviews
 *
 * ⚠️ Every figure here is a working value captured on the date above and MUST be
 * re-verified against easeus.com before launch. EaseUS discounts its list prices
 * heavily and often, so the headline numbers move. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const easeus: BrandPage = {
  slug: 'easeus',
  providerId: 'easeus',
  schemaType: 'SoftwareApplication',
  metaTitle: 'EaseUS Data Recovery review 2026 — free limits and price',
  metaDescription:
    'An independent EaseUS review: what the free edition really recovers, what Data Recovery Wizard Pro costs by month, year and lifetime, and the refund condition that catches people out.',
  intro:
    'EaseUS Data Recovery Wizard is the file-recovery tool most people meet first: scan a drive, preview what is still readable, pay to get it back. The scanning and previewing are free, which is unusually fair — you can establish whether your files are recoverable before spending anything. The licence prices, and the terms of the refund behind them, need reading more carefully.',
  about: [
    'EaseUS is the consumer brand of Chengdu Yiwo Tech, a Chinese software house trading since 2004 and claiming 530m users across 190 countries. Data Recovery Wizard is its flagship: it reads the filesystem of a drive, memory card or USB stick, finds records for files that have been deleted, formatted away or lost to a corrupted partition, and rebuilds them. The free edition scans everything and previews everything, then recovers 500 MB — rising to 2 GB once you share the product on social media from inside the app. That is a functional diagnostic, not a way to get a photo library back.',
    'The mechanism matters for expectations. Deleting a file usually removes the pointer to it, not the bytes, which is why recovery is possible at all — and also why anything written to the volume afterwards can overwrite what you are trying to save. Installing the recovery software onto the same drive you are recovering from is the classic way to destroy the evidence. Solid-state drives make it worse: TRIM tells the drive to clear deleted blocks in the background, so files deleted from an SSD may be genuinely gone within minutes. EaseUS advertises a 99.7% success rate; that is a vendor number, unaudited, and the honest framing is that success depends on what has happened to the drive since, not on which tool you buy.',
    'Around the flagship sits a broad line. Todo Backup Home ($39.95 a year or $79.95 for lifetime upgrades, one computer) is the backup and disk-cloning product — the thing that makes recovery software unnecessary. Partition Master Professional ($19.95 a month, $49.95 a year or $69.95 lifetime, covering two PCs) handles resizing, merging, converting and migrating partitions. They are separate purchases with separate licences, and Windows and Mac builds are sold separately too, so a mixed household pays twice.',
  ],
  facts: [
    { label: 'Trading since', value: '2004' },
    { label: 'Company', value: 'Chengdu Yiwo Tech, China' },
    { label: 'Free recovery cap', value: '500 MB, 2 GB after sharing' },
    { label: 'Licence', value: 'One computer, one platform' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'Windows list prices for Data Recovery Wizard Pro. The Mac builds are separate products and cost more ($89.95 monthly, $119.95 yearly, $169.95 lifetime), and every tier is one licence for one computer. EaseUS runs discounts and student pricing (40% off with verification) often enough that the list price is rarely what anyone pays — check the current offer before buying. The 30-day money-back guarantee is narrower than it sounds: see the cons.',
    items: [
      {
        name: 'Free',
        price: '$0',
        detail:
          'Full scan and preview of everything the software can find, then 500 MB of recovery — 2 GB after sharing the product on social media. Run this first: it tells you whether your files are recoverable at all.',
      },
      {
        name: 'Pro, one month',
        price: '$69.95 for a one-month licence',
        detail:
          'Unlimited recovery on one Windows computer for a month. For the usual case — one accident, one drive, one afternoon — this is the rational purchase, and it does not roll on.',
        pick: true,
      },
      {
        name: 'Pro, one year',
        price: '$99.95 for a twelve-month licence',
        detail:
          'The same software for a year, with upgrades over that period. Only sensible if you are recovering repeatedly, which for a home user usually signals a failing drive that needs replacing instead.',
      },
      {
        name: 'Pro, lifetime',
        price: '$149.95 one-off',
        detail:
          'Perpetual licence with lifetime upgrades on one computer. Costs more than twice the one-month option to insure against a second incident that may never come.',
      },
    ],
  },
  pros: [
    {
      title: 'You can verify recoverability before paying',
      body: 'The free edition scans and previews without limit — the paywall sits on writing files back out. That means you find out whether your documents are intact before any money changes hands, which is not how most of this category is sold.',
    },
    {
      title: 'Broad coverage of devices and filesystems',
      body: 'Internal drives, external disks, SSDs, USB sticks, SD cards, RAID volumes and NAS, across the Windows and Mac filesystems, with deep-scan and partition-recovery modes for formatted or corrupted volumes.',
    },
    {
      title: 'Built for people who are not technical',
      body: 'A scan-preview-recover flow with results grouped by file type and a search box, rather than the command-line tools that do the same job free. When the alternative is TestDisk or PhotoRec at 2am, the interface is most of what you are buying.',
    },
    {
      title: 'A long track record and consistently high aggregate ratings',
      body: 'Trading since 2004, with 4.5 on Capterra and 4.7 on G2 from a few hundred reviews each. The product is mature and it is not going to vanish mid-licence.',
    },
  ],
  cons: [
    {
      title: 'It is expensive, and free tools do the same job',
      body: '$69.95 for one month of use on one computer is a lot for software you may run once. TestDisk and PhotoRec are free and open source, and Windows File Recovery is a free Microsoft tool. They are harder to use and uglier; they are not less capable on the common cases.',
    },
    {
      title: 'The 30-day guarantee is narrower than it sounds',
      body: 'EaseUS grants refunds on technical grounds — the software failed and support could not fix it — and its published policy says it will not refund once the product has successfully done the job it was bought for. Buy expecting a licence, not a trial. Purchases from resellers fall under the reseller’s terms instead.',
    },
    {
      title: 'Licences fragment across devices, platforms and products',
      body: 'One licence covers one computer, Windows and Mac are priced separately, and Todo Backup and Partition Master are further purchases again. Recovering a laptop and a desktop means buying twice, and the Mac version costs $20 more at every tier.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.9,
      note: '39,255 reviews — but Trustpilot flags EaseUS as inviting customers to review, so read the score as post-purchase sentiment',
    },
    { source: 'Capterra', value: 4.5, note: 'around 290 reviews of Data Recovery Wizard' },
    { source: 'G2', value: 4.7, note: 'around 301 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite: capable software, high list prices and restrictive refund terms',
    },
  ],
  bestFor: [
    'Anyone who has just deleted or formatted something important and needs it back today',
    'Non-technical users who want a preview before committing money',
    'Recovering from memory cards, USB sticks and external drives after a bad format',
    'People who would rather pay once than learn TestDisk under pressure',
  ],
  notFor: [
    'Physically failing drives that click, stall or vanish — that is a lab job, and running software at them makes it worse',
    'Files deleted from an SSD some time ago, where TRIM has usually cleared the blocks already',
    'Anyone comfortable with PhotoRec, TestDisk or Windows File Recovery, which cost nothing',
    'Buyers who expect a no-questions refund if they change their mind after it works',
  ],
  faq: [
    {
      q: 'What should I do first, before installing anything?',
      a: 'Stop using the affected drive. Every write reduces what can be recovered, so do not save files to it, do not let it keep running as your system disk if you can help it, and install the recovery software onto a different drive. If the lost data is on your only internal disk, recovering it to an external drive is the minimum precaution.',
    },
    {
      q: 'Can it recover files after a format or an emptied recycle bin?',
      a: 'Often, yes — both usually clear the filesystem records rather than the data, and a deep scan reconstructs files from what is left. A full (rather than quick) format, a drive that has been written to heavily since, or an SSD where TRIM has run are the cases where recovery frequently fails. The free scan is how you find out which case you are in.',
    },
    {
      q: 'Is the free version enough?',
      a: 'It is enough to answer the only question that matters at first — are my files still there? Scanning and previewing are unrestricted; recovery is capped at 500 MB, or 2 GB after you share the product on social media. For a handful of documents that may genuinely be all you need. For photos or video it will not be.',
    },
    {
      q: 'Does one licence cover both my PC and my Mac?',
      a: 'No. A licence covers one computer, and the Windows and Mac editions are separate products at separate prices — the Mac builds run $89.95 monthly, $119.95 yearly and $169.95 lifetime against $69.95, $99.95 and $149.95 on Windows. Two machines means two purchases.',
    },
    {
      q: 'Can I get a refund if it does not find my files?',
      a: 'That is the case the guarantee is meant for: EaseUS refunds within 30 days on technical grounds, where the software did not perform and support could not resolve it. What it will not do is refund a licence that already recovered your data, and a refund on a change of mind is not covered. Run the free scan before you pay and the question mostly disappears.',
    },
  ],
  updated: '2026-08-18',
  deepLink: 'easeus.com/datarecoverywizardpro/drw-pro-buy.html',
}
