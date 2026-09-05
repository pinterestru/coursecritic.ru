/**
 * Ranked guide: best data recovery software (route: /articles/best-data-recovery-software).
 *
 * The thesis: recovery software cannot promise recovery. What decides the
 * outcome is whether anything has been written to the drive since the loss, and
 * whether the drive is an SSD running TRIM. The ranking therefore scores what a
 * reader can verify before paying — free caps, licence scope, refund terms —
 * and deliberately publishes NO success-rate percentage for any tool, because
 * none of the published ones are audited or case-specific.
 *
 * SOURCES for the claims made on this page (checked 21 August 2026). Per-brand
 * pricing and licence citations live in the four brand files under
 * ../../../data/brands/ (diskdrill, easeus, stellar, recuva); the ones specific
 * to this page are:
 *   - https://www.r-studio.com/SSD_Recovery.html — how TRIM/UNMAP erases blocks
 *     behind deleted files and why software recovery then returns nothing
 *   - https://diskdigger.org/recover-ssd-trim — the same mechanism, and why
 *     recovered files from a TRIMmed SSD come back as zeroes
 *   - https://www.dataclinic.co.uk/data-recovery-and-the-ssd-trim-feature/ — a
 *     recovery lab's account of why TRIM defeats software recovery
 *   - https://www.cleverfiles.com/pro.html — Disk Drill PRO purchases are
 *     non-refundable except where consumer law requires otherwise
 *   - https://www.stellarinfo.com/software-licensing-usage.php — Stellar's
 *     "lifetime" licence is defined as ten years
 *   - https://www.ccleaner.com/knowledge/recuva-v1-55 — v1.55.133, 22 June 2026,
 *     an EU right-of-withdrawal compliance release
 *   - https://www.easeus.com/sales-faq/refund-policy.html — refunds on technical
 *     grounds only, and not once the product has done its job
 *
 * ⚠️ Every price, cap and licence term quoted here is a working value captured
 * on the date above and MUST be re-verified against each vendor's own store
 * before launch and before every campaign — this category discounts constantly
 * and the stores geolocate. See ../../../README.md.
 */
import type { Metadata } from 'next'

import ArticleFaq from '../../../components/articles/ArticleFaq'
import ArticleSection from '../../../components/articles/ArticleSection'
import ArticleShell from '../../../components/articles/ArticleShell'
import AuthorCard from '../../../components/articles/AuthorCard'
import CtaBanner from '../../../components/articles/CtaBanner'
import FactStrip from '../../../components/articles/FactStrip'
import RankCard from '../../../components/articles/RankCard'
import RatingSummary from '../../../components/articles/RatingSummary'
import Toc from '../../../components/articles/Toc'
import { getArticle } from '../../../data/articles'
import { articleMetadata } from '../../../data/guides/metadata'
import type { FactItem, FaqItem, RankEntry } from '../../../data/guides/types'

const meta = getArticle('best-data-recovery-software')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Every product in this category is sold on the promise that it gets your files back, and not one of them can make that promise. What decides the outcome is what happened to the drive after the files went — whether anything has been written to it, and whether it is a solid-state drive. Buy the tool second. Here are four ranked on the things you can actually check: what the free tier returns, what the licence covers, and whether you can get your money back.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'physics', label: 'What actually decides whether you get it back' },
  { id: 'detail', label: 'The four tools in detail' },
  { id: 'choosing', label: 'How to choose in five minutes' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Tools compared', value: '4' },
  // The spread is the point: the free caps run from a token 100 MB to no cap at all,
  // and on the Mac build of the winner there is no free recovery allowance whatsoever.
  { label: 'Free recovery caps', value: 'None to uncapped' },
  { label: 'Sold outright', value: '3 of 4 offer a one-off licence' },
  { label: 'Deleted from an SSD?', value: 'Usually unrecoverable' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'diskdrill',
    bestFor:
      'Anyone covering more than one machine, or reading a drive from a computer that will not boot',
    verdict:
      'Disk Drill wins on the two things you can verify before buying: what the licence covers and what the software can read. One PRO licence covers a single user on macOS and Windows across three device activations, where EaseUS and Stellar both sell Mac and Windows as separate products and licence one computer at a time. It reads APFS, HFS+, NTFS, ReFS, FAT, exFAT, ext2/3/4 and BTRFS, so a drive pulled out of a dead machine is readable from whatever you plug it into. And the free edition includes byte-to-byte disk imaging, which is the single most useful thing in this guide: take a sector-level copy of the affected drive, then scan the copy and leave the original alone. Two real costs. The free recovery allowance is 100 MB on Windows and nothing at all on Mac — the smallest here by a distance. And CleverFiles states that PRO purchases, subscription and lifetime alike, are non-refundable except where consumer law compels it. Preview your files before you pay; there is no safety net behind that decision.',
    spotlight: {
      label: 'Buy the $149 lifetime licence, not the $89 subscription',
      body: 'The annual licence auto-renews at whatever the price is on the renewal date. The lifetime licence costs $60 more once, never charges again, and carries lifetime updates. For software most people run twice in a decade, the subscription is the wrong shape.',
    },
  },
  {
    providerId: 'easeus',
    bestFor: 'Finding out whether your files survived, before spending anything',
    verdict:
      'EaseUS is the one to open first, whatever you end up buying. Scanning and preview are unrestricted, so within a few minutes you know the only thing that matters at this stage: whether your files are still readable. Then it hands back 2 GB free, which for a folder of documents is the entire job done at no cost. The interface is the friendliest in the category and it is designed for someone doing this once, under pressure, at an unhelpful hour. Where it slips is the commercial terms. $69.95 buys one month on one computer; the Mac builds are separate products costing $20 more at every tier; and the refund is granted on technical grounds only — EaseUS says explicitly that it will not refund a licence that has already recovered your data. It is a good tool sold on terms that assume you are not comparing.',
    spotlight: {
      label: 'The one-month licence is the rational purchase',
      body: 'For one accident on one drive, $69.95 for a month beats $99.95 for a year and $149.95 for a lifetime, and it does not roll on. If you find yourself recovering repeatedly, that is a failing drive telling you to replace it, not a reason to upgrade the licence.',
    },
  },
  {
    providerId: 'stellar',
    bestFor: 'Windows users who want a genuine money-back guarantee behind the purchase',
    verdict:
      'Stellar has the clearest refund position of the four — a plain 30-day money-back guarantee on the annual subscriptions, where EaseUS refunds only on technical grounds and CleverFiles does not refund at all. Its free tier gives 1 GB, or 2 GB after a social share. And the edition ladder goes further than anyone else here: Professional adds lost-partition and non-booting-system recovery, Premium repairs corrupted photos and video, and Technician and Toolkit handle RAID and virtual machines, so a case that escalates does not mean starting again elsewhere. Two things hold it back. A licence installs on one computer at a time and the Mac editions are separate purchases, so a household pays repeatedly. And its lifetime licence is not one: Stellar’s own licensing page defines lifetime as ten years of use for a one-time payment. Ten years is a long time. It is not what the word says.',
    spotlight: {
      label: 'Start at Professional, not Standard',
      body: 'Standard only recovers deleted and formatted files from a volume that is still there. The cases people actually buy recovery software for — a partition that has vanished, a system that will not boot — need Professional at $89.99.',
    },
  },
  {
    providerId: 'recuva',
    bestFor: 'A Windows recovery you would rather not pay for at all',
    verdict:
      'Recuva is last on capability and first on a point nothing else here can match: the free edition has no recovery cap. Everything else scans for free and charges you to write the files back out. Recuva just writes them out, from FAT, exFAT and NTFS volumes on Windows, with a portable build that runs off a USB stick so nothing is installed onto the drive you are recovering. For a straightforward Windows deletion that is very often the whole answer, and trying it costs nothing but time. The limits are real and worth stating plainly: Windows only, no APFS, HFS+ or ext4, nothing for RAID or virtual disks, and development that has settled into maintenance — v1.55.133 in June 2026 was an EU withdrawal-rights compliance change rather than a recovery improvement. The $24.95 Professional licence buys automatic updates and priority support; Piriform’s own comparison table puts advanced file recovery in the free column too, so it does not recover more. Run the free one. Do not upgrade expecting a better result.',
    spotlight: {
      label: 'Same corporate group as Avast, AVG and Norton',
      body: 'Piriform was bought by Avast in 2017 and Avast is now part of Gen Digital — the group the FTC fined $16.5m in 2024 over the sale of browsing data. It has no bearing on whether Recuva recovers a file, but read the installer screens and decline the extras.',
    },
  },
]

const faq: FaqItem[] = [
  {
    q: 'What is the very first thing I should do?',
    a: 'Stop using the drive. Every byte written to a volume can overwrite the data you are trying to recover, so close what you can, do not save anything to it, and unplug it if it is external. If it is your only internal disk and the machine is still running, the safest move is to shut down and recover the drive from another computer. Then install the recovery software somewhere else, and recover the files to a different drive again.',
  },
  {
    q: 'Can any of these guarantee my files come back?',
    a: 'No, and be suspicious of any page that implies otherwise. Deleting a file usually removes the filesystem record rather than the data, which is why recovery works at all — and equally why anything written since may have overwritten it. Vendors publish success-rate percentages; they are unaudited marketing figures, they describe no case in particular, and they cannot know the state of your drive. The free scan and preview in each of these tools is the only honest answer to the question, and it costs nothing.',
  },
  {
    q: 'I deleted files from an SSD. Is there any hope?',
    a: 'Usually not, and this is a property of the hardware rather than a failing of the software. Modern SSDs run TRIM: when a file is deleted the operating system tells the drive those blocks are free, and the controller erases them in the background, typically within minutes. Once the flash cells are cleared the data is physically gone and no software can retrieve it — which is why recovery tools often return zero-byte files from SSDs. The exception is a partition lost to corruption or a bad format rather than a deletion, where TRIM may never have been issued. Try a free scan; just do not buy on hope.',
  },
  {
    q: 'Are free tools good enough?',
    a: 'Frequently, on the common cases. Recuva is free and uncapped on Windows. TestDisk and PhotoRec are free, open source and more capable than any of this on a technical level, at the cost of a command-line interface at the worst possible moment. Windows File Recovery is a free Microsoft tool in the same spirit. What the paid products sell is a scan-preview-recover flow that a non-technical person can follow while panicking, plus breadth of filesystem support. That is worth money to some people and nothing to others.',
  },
  {
    q: 'Why are these still sold as one-off licences when everything else is a subscription?',
    a: 'Because the usage pattern is a one-off. Nobody recovers files every month; they recover files after an accident, and then hopefully never again. Three of the four here still sell a perpetual licence — Disk Drill at $149, EaseUS at $149.95, and Stellar at an unpublished figure — and where the choice exists, the one-off is usually the better buy against an auto-renewing annual licence. Read the definition, though: Stellar’s licensing page defines its lifetime licence as ten years.',
  },
  {
    q: 'My drive is clicking or has disappeared from the BIOS. What now?',
    a: 'Turn it off and stop. Clicking, grinding, stalling or vanishing from the BIOS point to a mechanical or controller failure, and running recovery software at a physically failing drive makes it worse every time it spins up. That is a job for a lab with a clean room, and it costs hundreds rather than tens. Stellar runs its own labs, which is one practical reason to start there if you suspect physical failure.',
  },
  {
    q: 'Which one should I actually buy?',
    a: 'Most people should not buy anything until they have run a free scan, because the scan answers the question the purchase is meant to solve. On Windows, start with Recuva — free and uncapped. If it cannot see your files or they are on a Mac or Linux volume, preview with EaseUS or Disk Drill, both free and unlimited to preview. Then buy Disk Drill’s lifetime licence if you need breadth or cover more than one machine, EaseUS’s one-month licence for a single Windows incident, or Stellar if you want the money-back guarantee.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          There is a sentence missing from most comparisons in this category, so here it is first:{' '}
          <strong>recovery software cannot promise recovery.</strong> It reads what is left on a
          drive. If the bytes are still there it can usually rebuild the file; if they have been
          overwritten, no product on this page and no price you pay will bring them back. We earn
          commission on some of these links, which is exactly why the ranking below is built on
          things you can check for yourself — free caps, licence scope, refund terms — rather than
          on success-rate percentages that no vendor can substantiate.
        </p>
        <p>
          The second thing worth knowing before you read any further: every tool here scans and
          previews for free.{' '}
          <strong>
            You can establish whether your files are recoverable before spending a penny
          </strong>
          , and you should, because two of the four make refunds difficult or impossible.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best data recovery software" />
      </ArticleSection>

      <AuthorCard vertical="security" />

      <ArticleSection id="physics" title="What actually decides whether you get it back">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Deleting a file does not usually erase it. The operating system removes the record that
            says where the file lives and marks the space as available, and the data sits there
            until something else is written over it. That gap is the entire business model of this
            category — and it is also the reason the outcome is mostly decided in the first ten
            minutes, before any software is involved.
          </p>
          <p>
            <strong>Stop writing to the drive.</strong> Downloading an installer to it, saving a
            document, letting it carry on as your system disk while Windows writes logs and updates
            — each of those can land on the blocks holding the file you want. Installing the
            recovery tool onto the drive you are recovering is the classic way to destroy the thing
            you are trying to save. Install it elsewhere, or run a portable build from a USB stick.
          </p>
          <p>
            <strong>Recover to a different drive.</strong> Writing recovered files back to the same
            volume can overwrite other files that have not been recovered yet. An external disk or a
            second internal drive is the minimum precaution, and it is free.
          </p>
          <p>
            <strong>If it is an SSD, adjust your expectations sharply.</strong> Solid-state drives
            run TRIM: when a file is deleted the operating system tells the drive those blocks are
            no longer needed, and the controller erases them in the background — often within
            minutes, and TRIM is on by default on current Windows and macOS machines. After that the
            data is not unlinked, it is gone, which is why recovery tools so often return zero-byte
            files from SSDs. A partition lost to corruption or a bad format is a better case than a
            deletion, because TRIM may never have been issued. But no tool in this ranking, or any
            other, recovers erased flash cells.
          </p>
          <p>
            <strong>If the drive is making noises, stop entirely.</strong> Clicking, grinding or
            disappearing from the BIOS is mechanical failure, and every additional power-on reduces
            what a lab can retrieve. Software is the wrong instrument for that problem.
          </p>
          <p>
            None of which makes these products worthless. It means the honest question is not{' '}
            <em>which tool recovers the most</em> — nobody can answer that for your drive — but{' '}
            <strong>
              which one lets you find out for free, covers the machines you own, and treats you
              fairly if it fails
            </strong>
            . That is what the ranking measures.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="detail" title="The four tools in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="diskdrill"
        title="The widest coverage, and one licence for every machine you own"
        body="Disk Drill reads APFS, NTFS, ReFS, exFAT, ext4 and BTRFS, covers macOS and Windows on three devices from a single licence, and images a failing drive for free before you scan it. Preview your files first — purchases are not refundable."
        cta="See Disk Drill pricing →"
      />

      <ArticleSection id="choosing" title="How to choose in five minutes" prose>
        <ol>
          <li>
            <strong>Before anything else:</strong> stop using the drive, and plan to recover to a
            different one.
          </li>
          <li>
            <strong>On Windows, with a straightforward deletion?</strong> Run Recuva first. It is
            free, uncapped, and often the end of the story.
          </li>
          <li>
            <strong>Not sure your files survived?</strong> Scan and preview with EaseUS or Disk
            Drill. Both are unlimited and free up to the point of writing files back out.
          </li>
          <li>
            <strong>More than one machine, or a Mac and a PC?</strong> Disk Drill, lifetime licence
            — one purchase covers both platforms across three devices.
          </li>
          <li>
            <strong>One Windows accident, one drive, today?</strong> EaseUS, the one-month licence.
            It does not roll on.
          </li>
          <li>
            <strong>Want a refund if it fails?</strong> Stellar, Professional tier — the only plain
            30-day money-back guarantee here.
          </li>
          <li>
            <strong>Drive clicking, or files deleted from an SSD days ago?</strong> Do not buy
            anything yet. The first is a lab job; the second is usually beyond software entirely.
          </li>
        </ol>
        <p>
          And the thing that makes all of this unnecessary: a backup running on a schedule to
          somewhere that is not the machine. Every tool on this page exists because that was not set
          up in time.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
