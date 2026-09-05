/**
 * Brand page data for Recuva (route: /brands/recuva).
 *
 * SOURCES (checked 21 August 2026):
 *   - https://www.ccleaner.com/recuva — the Free vs Professional feature table:
 *     both editions get "Advanced file recovery" and virtual hard drive support;
 *     Professional adds automatic updates and premium support. Page footer
 *     copyright reads "Gen Digital Inc", 2005–2026
 *   - https://www.ccleaner.com/recuva/download — supported systems, "Windows 10,
 *     8.1, 7, Vista and XP … but not RT tablet editions", and confirmation that
 *     there is no Mac build
 *   - https://www.ccleaner.com/knowledge/recuva-v1-55 — v1.55.133, released
 *     22 June 2026, a maintenance release adding an easier route for EU
 *     customers to exercise their right of withdrawal
 *   - https://en.wikipedia.org/wiki/Recuva — Piriform authorship, Gen Digital
 *     ownership via the 2017 Avast acquisition of Piriform, freemium model
 *   - https://www.ccleaner.com/affiliates — the CCleaner/Piriform affiliate
 *     programme on CJ Affiliate, which names "Recuva Professional" among the
 *     products it pays on (this brand IS monetised: tracked: true)
 *   - https://www.handyrecovery.com/recuva-data-recovery-review/ — $24.95/year
 *     for Professional, FAT32/exFAT/NTFS support and no HFS+, APFS or ext4,
 *     and the portable build
 *   - https://www.digitaltrends.com/computing/recuva-professional-review/ and
 *     https://www.techradar.com/reviews/pc-mac/software/piriform-recuva-review-1323657/review
 *     — independent editorial reviews
 *
 * ⚠️ Re-verify before launch and before every campaign. Specific risks:
 * (1) the ccleaner.com store geolocates and returned CZK (399 Kč / 849 Kč) to us
 * rather than dollars, so the $24.95 Professional price comes from independent
 * reviews and NOT from a vendor page we could read — check it in the market you
 * buy traffic in; (2) Recuva is not listed on Trustpilot, G2 or Capterra, so the
 * two ratings below are editorial scores from named publications, not aggregate
 * user scores, and the Softpedia figure comes from secondary reporting;
 * (3) the claim that the free edition has NO recovery cap is load-bearing for
 * the whole page — it is consistent across the vendor's own comparison table and
 * multiple independent reviews, but confirm it against a fresh install before
 * launch. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const recuva: BrandPage = {
  slug: 'recuva',
  providerId: 'recuva',
  schemaType: 'SoftwareApplication',
  metaTitle: 'Recuva review 2026 — free, uncapped, Windows only',
  metaDescription:
    'An independent Recuva review: the only free recovery tool with no data cap, what the $24.95 Professional licence adds — and where it stops.',
  intro:
    'Recuva is the odd one out in this category, and the reason is simple: the free edition has no recovery cap. Everything else here scans for free and then charges you to write the files back out. Recuva just writes them out. What you give up for that is breadth — it is Windows-only, it reads three filesystems, and its development has settled into maintenance.',
  about: [
    'Recuva was written by Piriform, the small British developer behind CCleaner, Defraggler and Speccy. Avast bought Piriform in 2017 and Avast is now part of Gen Digital, so Recuva sits in the same corporate group as Avast, AVG, Norton and Avira — the group the US Federal Trade Commission fined $16.5m in 2024 over the sale of browsing data. That has no bearing on whether Recuva recovers a file, but anyone choosing tools on the basis of who they are dealing with should know it.',
    'The software itself is deliberately narrow. It undeletes files on Windows from FAT16, FAT32, exFAT and NTFS volumes — hard drives, external drives, USB sticks and memory cards — with a quick scan that reads the filesystem records and a deep scan that trawls the disk for file signatures when those records are gone. There is no macOS build and it does not read HFS+, APFS or ext4, so a Mac drive or a Linux volume is out of scope entirely. A portable build exists, which matters more than it sounds: run it from a USB stick and nothing is written to the drive you are trying to recover.',
    'Recuva Professional costs about $24.95 a year and the vendor’s own comparison table shows what that buys: automatic updates and premium support. Advanced file recovery and virtual hard drive support are listed under both editions. It does not recover more, scan deeper or reach further. The honest reading is that Professional is a support contract on a free product — which is a legitimate thing to sell, and a bad thing to buy under the impression that the paid version will find files the free one missed.',
  ],
  facts: [
    { label: 'First released', value: '2007' },
    { label: 'Free recovery cap', value: 'None' },
    { label: 'Platforms', value: 'Windows only' },
    { label: 'Owner', value: 'Piriform, part of Gen Digital' },
  ],
  plans: {
    title: 'Plans and what they actually cost',
    note: 'The ccleaner.com store shows prices in the local currency of wherever you open it, so the dollar figure below may not be what your checkout says. The important point is structural rather than numerical: the free edition is not a limited trial, and the paid edition does not improve recovery.',
    items: [
      {
        name: 'Free',
        price: '$0',
        detail:
          'Quick scan, deep scan and unlimited recovery, with no data cap and no expiry. A portable build runs from a USB stick without installing anything on the affected machine. For most single-drive Windows accidents this is the whole product.',
        pick: true,
      },
      {
        name: 'Professional',
        price: 'around $24.95 a year',
        detail:
          'Adds automatic updates and premium support. Piriform’s own comparison table lists advanced file recovery and virtual hard drive support under the free edition too, so this does not recover anything the free version cannot.',
      },
      {
        name: 'CCleaner Professional Plus bundle',
        price: 'sold as a CCleaner subscription',
        detail:
          'Recuva Professional is also bundled into the higher CCleaner tiers alongside Speccy. Only relevant if you were buying CCleaner anyway — buying the bundle for the Recuva component is paying for the part that is free.',
      },
    ],
  },
  pros: [
    {
      title: 'No recovery cap on the free edition',
      body: 'This is the whole case for Recuva and it is a strong one. Disk Drill returns 100 MB free on Windows and nothing on Mac; EaseUS and Stellar stop at 2 GB. Recuva stops when your files run out. If what you lost is on a Windows drive, this is the first thing to try, and it may well be the last.',
    },
    {
      title: 'A portable build that never touches the damaged drive',
      body: 'Run it from a USB stick and nothing is installed onto the volume you are recovering. Since every write to that volume risks overwriting the data you want, this is the correct way to run any recovery tool, and most of the paid alternatives make it harder.',
    },
    {
      title: 'Small, fast and simple under pressure',
      body: 'A few megabytes, a wizard that asks what kind of file you lost and where, and a results list with a colour-coded assessment of each file’s condition. When it is late and something important has gone, the tool that does not need to be learnt has a real advantage.',
    },
    {
      title: 'Nothing to lose by trying it first',
      body: 'Because it costs nothing and caps nothing, running Recuva before you buy anything is close to free information. If it returns your files, you are finished. If it cannot see them, that is a useful signal about whether a paid tool would fare better.',
    },
  ],
  cons: [
    {
      title: 'Windows only, and only three filesystems',
      body: 'FAT16, FAT32, exFAT and NTFS. No macOS build, and no support for HFS+, APFS or ext4, so a Mac disk, a Linux volume or a drive from a NAS is simply out of reach. Disk Drill reads all of those from one licence.',
    },
    {
      title: 'Development is maintenance, not progress',
      body: 'Version 1.55.133 arrived in June 2026, and its published purpose was to give EU customers an easier route to exercise their right of withdrawal — a compliance change, not a recovery improvement. The product works, but nobody should expect it to grow new capabilities.',
    },
    {
      title: 'The paid tier does not recover more',
      body: 'Professional adds automatic updates and premium support. Piriform’s own table puts advanced file recovery and virtual hard drive support in the free column as well. Paying $24.95 a year expecting deeper recovery is a misunderstanding the pricing page does little to prevent.',
    },
    {
      title: 'No public aggregate rating exists for it',
      body: 'Recuva is not listed on Trustpilot, G2 or Capterra, so there is no user-score consensus to check it against — only editorial reviews. For a free tool that is unsurprising, but it does mean the usual sanity check on a vendor’s claims is unavailable here.',
    },
  ],
  reputation: [
    {
      source: 'TechRadar (editorial)',
      value: 4.0,
      note: 'a publication’s review score, not an aggregate — praised for speed, marked down for the interface and slow deep scans',
    },
    {
      source: 'Softpedia (editorial)',
      value: 3.5,
      note: '⚠️ editorial rating taken from secondary reporting, not read from the live listing',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.3,
      note: 'our composite: an uncapped free tier that is genuinely the right first move, against Windows-only reach and a paid tier that adds nothing to recovery',
    },
  ],
  bestFor: [
    'Anyone on Windows who has just deleted something and wants to try free first',
    'Recovering from USB sticks, SD cards and external drives formatted FAT, exFAT or NTFS',
    'Running recovery from a USB stick without installing anything on the affected machine',
    'Small jobs where a 2 GB cap elsewhere would not be enough',
  ],
  notFor: [
    'Mac users — there is no macOS build, and it cannot read APFS or HFS+',
    'Linux or NAS volumes on ext4, BTRFS or ReFS',
    'RAID arrays, virtual-machine disks or drives that will not mount at all',
    'Anyone expecting the $24.95 Professional licence to recover more than the free one',
  ],
  faq: [
    {
      q: 'Is Recuva really free, with no catch?',
      a: 'On the recovery cap, yes — the free edition has no data limit, which is unusual in this category and the main reason to start with it. The catch, such as it is, is scope rather than volume: Windows only, three filesystems, and no help with RAID, virtual disks or drives that will not mount.',
    },
    {
      q: 'What does Recuva Professional add?',
      a: 'Automatic updates and premium support, per Piriform’s own comparison table, which lists advanced file recovery and virtual hard drive support under the free edition as well. It is best understood as a support subscription rather than a more capable product. If the free version cannot find your files, paying for Professional is unlikely to change that.',
    },
    {
      q: 'Should I install it on the drive I am recovering?',
      a: 'No, and this matters more than which tool you choose. Every write to that volume can overwrite the data you are trying to retrieve, and an installer is a write. Use the portable build from a USB stick, or install to a different drive, and always recover the files to somewhere other than the drive they came from.',
    },
    {
      q: 'Will it work on my Mac?',
      a: 'No. Recuva is Windows-only and does not read APFS or HFS+, so a Mac volume is out of scope even from a Windows machine. Disk Drill covers macOS and Windows from a single licence and reads both filesystems; EaseUS and Stellar sell separate Mac builds.',
    },
    {
      q: 'Can it recover files deleted from an SSD?',
      a: 'Usually not, and neither can anything else. Modern SSDs run TRIM, which clears the blocks behind deleted files in the background within minutes, after which the data is physically gone rather than merely unlinked. This is a property of the drive, not a limitation of Recuva — no software tool recovers TRIMmed blocks.',
    },
    {
      q: 'Is it safe to use, given who owns it?',
      a: 'Recuva is a legitimate, long-standing product published by Piriform. Piriform is owned by Gen Digital, the group behind Avast, AVG and Norton, which the FTC fined $16.5m in 2024 over the sale of browsing data. That is a reason to read the installer screens and decline any bundled extras, not a reason to avoid the tool.',
    },
  ],
  updated: '2026-08-21',
  deepLink: 'ccleaner.com/recuva',
}
