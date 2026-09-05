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

const meta = getArticle('best-antivirus')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Four suites, four price lists — and two detection engines between them. Norton, Avast and AVG are all Gen Digital brands running the same scanner, which is why the labs keep printing the same score three times. Bitdefender is the one genuinely separate company here. Ranked on the independent lab results and on the renewal price, because that is the number you pay more than once.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'owners', label: 'Three of these four are one company' },
  { id: 'renewal', label: 'Why we price at renewal' },
  { id: 'how', label: 'How we ranked them' },
  { id: 'detail', label: 'The four suites in detail' },
  { id: 'verdict', label: 'Which one should you buy' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Suites compared', value: '4' },
  { label: 'Detection engines', value: '2' },
  { label: 'Priced on', value: 'Renewal rate' },
  { label: 'Steepest renewal', value: 'Norton, $124.99/yr' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'bitdefender',
    deepLink: 'bitdefender.com/en-us/consumer/total-security',
    bestFor: 'Anyone who wants a second opinion that is not owned by the first one',
    verdict:
      'Bitdefender is first here for two reasons, and only one of them is detection. AV-Comparatives recorded 99.5% real-world protection with five false alarms across February to May 2026, marginally the best of these four, and AV-TEST gave Total Security 27.0 a full 6/6/6 on Windows 11 in its June 2026 Windows round — protection without a performance penalty, which is the historical complaint about security suites. The larger reason is ownership: it is a privately held Romanian company running its own engine, so it is the only entry on this list that is not the same software as the other three. The drawbacks are real. The VPN bundled into Total Security stops at 200 MB per device per day, which is a login on hotel Wi-Fi and nothing more; the refund window is 30 days against Norton’s 60; and the first-year price of $59.99 renews at a list rate close to double it.',
    spotlight: {
      label: 'Read the VPN line before you buy',
      body: 'Bitdefender lists a VPN on Total Security. It allows 200 MB per device per day — roughly ten minutes of standard-definition video. Uncapped VPN is Premium Security, one tier up. Price this suite as though it includes no VPN at all.',
    },
  },
  {
    providerId: 'norton',
    deepLink: 'norton.com/products',
    bestFor: 'Households wanting one subscription, an uncapped VPN and a long refund window',
    verdict:
      'Norton is the most complete bundle in this ranking and the most expensive way to buy the Gen Digital engine. The lab results are top-tier — 6/6/6 and TOP PRODUCT from AV-TEST on Windows 11 in June 2026, ADVANCED+ from AV-Comparatives at 99.3% for February to May 2026 — though those are the same figures Avast and AVG post, for the reason set out above. What Norton adds is a VPN with no data allowance to run out, 50 GB of cloud backup on Deluxe, and a 60-day refund window that also applies to each annual renewal, which is the single most useful term any of these four publish. Against that: Norton’s own price list, effective March 2026, renews Deluxe at $124.99 and Standard at $94.99, roughly triple the first-year offer — the steepest jump here. The cloud backup is Windows-only, LifeLock identity cover is a United States product, and the company shipped an opt-in Ethereum miner inside Norton 360 from 2021 until it was switched off in September 2022.',
    spotlight: {
      label: 'The 60-day refund covers renewals too',
      body: 'Norton’s stated policy refunds an annual subscription within 60 days of payment, and applies to renewal charges rather than first purchases only. If the $124.99 lands unexpectedly, you have two months to reverse it — no other suite here offers that.',
    },
  },
  {
    providerId: 'avg',
    deepLink: 'avg.com/en-us/store',
    bestFor: 'A household of several devices that wants to try it properly before paying',
    verdict:
      'AVG is the same engine as Avast and Norton in different packaging, so nothing about protection distinguishes it: AV-Comparatives put it at 99.3% with five false alarms for February to May 2026, identical to both, and AV-TEST certified AVG Antivirus Free as a Top Product on Windows 11 in June 2026. What is left to judge is the commercial offer, and there AVG has two things worth having. Every paid tier covers ten devices — there is no single-device licence to upsell you from — and Internet Security can be run for 60 days before a card is charged, which is twice the money-back window backing it. It sits third because the renewal maths is worse than Avast’s: $59.88 for the first year becomes $99.99, and Ultimate is sold at the same $59.88 and renews at $149.99, so the discount actively steers buyers onto the tier with the biggest jump. The in-product upselling of TuneUp, Secure VPN, AntiTrack and Driver Updater is constant, and training people to dismiss alerts from their security software is not a small cost.',
  },
  {
    providerId: 'avast',
    deepLink: 'avast.com/en-us/store',
    bestFor: 'One PC and a phone — or a free tier that is genuinely a product',
    verdict:
      'Avast has the cheapest paid entry point across the Gen Digital brands and the most serious black mark. AV-TEST certified Avast Free Antivirus as a Top Product on Windows 11 in June 2026 with 6/6/6, and AV-Comparatives recorded 99.3% real-world protection with five false alarms for February to May 2026 — the same numbers as AVG and Norton, on the same engine. The free tier has no data cap and no expiry, and it runs that engine, which makes it a defensible answer for a single machine rather than a nagging trial. The 1+1 licence renews at $77.99, below anything AVG or Norton lists. It is last because of what the company did with the data: in February 2024 the FTC ordered Avast to pay $16.5m and banned it from licensing browsing data for advertising, having found that from 2014 it collected browsing histories through antivirus and extensions marketed as blocking tracking, and sold them through its Jumpshot subsidiary to more than a hundred buyers. The conduct has been stopped and paid for. Whether that is behind you is a judgement, not a fact.',
    spotlight: {
      label: 'The renewal spread is wider than it looks',
      body: 'Depending on tier and device count, Avast renewals run from 44% above the first year (Premium Security on ten devices, $69.48 to $99.99) to 124% above it (Ultimate on the 1+1 licence, $49.08 to $109.99). Ultimate costs the same as Premium Security in year one, which is precisely why it is offered.',
    },
  },
]

const faq: FaqItem[] = [
  {
    q: 'Are Norton, Avast and AVG really the same product?',
    a: 'They are the same company and, since 2024, largely the same scanner. All three are consumer brands of Gen Digital, alongside Avira and CCleaner. In September 2024 AV-Comparatives reported that Norton-branded protection had moved onto the Avast scan engine that Avast and AVG have shared since 2016, citing near-identical virus-definition folder structures and a shared engine process, and Gen Digital confirmed the change. It shows in the results: all three recorded the same 99.3% protection rate and the same five false alarms in the February to May 2026 AV-Comparatives round. The packaging, the licence sizes and the price lists differ. The detection does not.',
  },
  {
    q: 'Do I need to pay for antivirus at all?',
    a: 'Less obviously than the category would like. Microsoft Defender is built into Windows and scored 99.0% real-world protection with zero false alarms in the same AV-Comparatives round — the lowest false-alarm count of any product in it — and it was a Top Product at AV-TEST on Windows 11 in June 2026. The honest case for paying is the bundle and the cross-platform cover: a licence that also protects the Macs, Androids and iPhones in a household, plus a password manager, backup or VPN you would otherwise buy separately. It is not a detection gap on Windows.',
  },
  {
    q: 'Why does the price go up so much in year two?',
    a: 'Because consumer security is sold on a first-year discount and the margin is made from the renewal onwards. Norton publishes a renewal list — $124.99 a year for Deluxe, $94.99 for Standard — against first-year offers roughly a third of that. AVG’s Internet Security goes from $59.88 to $99.99. Avast’s renewals run between 44% and 124% above the first year depending on tier. None of it is hidden; it is in footnote type beside a large struck-through number. Compare on the renewal figure and diarise the date a month ahead.',
  },
  {
    q: 'Is the free version of Avast or AVG good enough?',
    a: 'For malware protection on a single Windows machine, often yes — and the evidence is unusually direct, because the products AV-TEST certified as Top Products on Windows 11 in June 2026 were Avast Free Antivirus and AVG Antivirus Free, not the paid suites. What you go without is the multi-device licence, the firewall and payment-protection extras, and the phishing and fake-site blocking on the paid tiers. What you take on is a steady stream of upgrade prompts inside a product you rely on for alerts.',
  },
  {
    q: 'Does a higher lab score mean better protection in practice?',
    a: 'Only up to a point. Seven products earned the top ADVANCED+ award in the February to May 2026 AV-Comparatives Real-World Protection Test, with Kaspersky highest at 99.8% and the four here between 99.3% and 99.5%. Two tenths of a percentage point between Bitdefender and Norton is not a reason to choose one over the other. Read a top score as the entry requirement, then decide on ownership, what is actually included and the renewal price — which is what the ranking above does.',
  },
  {
    q: 'What happens to Microsoft Defender if I install one of these?',
    a: 'It steps back automatically. Installing a third-party suite hands real-time protection over to it, and Defender switches to a passive role rather than running alongside and duplicating the work. You do not need to disable anything, and you should not run two real-time scanners deliberately.',
  },
  {
    q: 'How do I stop the automatic renewal?',
    a: 'Turn off auto-renew in the vendor’s account area before the term ends; the subscription then runs to its expiry date and stops. The money-back guarantees are the fallback and they differ sharply — Norton gives 60 days and applies it to renewals, while Bitdefender, Avast and AVG give 30. Cancelling in advance is the reliable route; a refund request after the charge is the one that depends on the wording.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          Antivirus comparisons have a structural problem. Every mainstream suite now scores at or
          near the top of the independent tests, so a ranking built on detection alone produces four
          products separated by fractions of a percentage point and tells you nothing.{' '}
          <strong>
            The useful questions are who actually makes the software, what is genuinely included,
            and what the subscription costs in year two.
          </strong>
        </p>
        <p>
          On the first of those, this category has a fact that most buyers miss.{' '}
          <strong>Three of the four suites below are brands of the same company</strong>, and since
          2024 they have run the same detection engine. A reader shortlisting Norton against Avast
          against AVG to hedge their bets is comparing three price lists from one supplier. That is
          the single most important thing on this page, so it comes before the rankings rather than
          after them.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best antivirus suites for 2026" />
      </ArticleSection>

      <AuthorCard vertical="security" />

      <ArticleSection id="owners" title="Three of these four are one company">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Norton, Avast, AVG and Avira are all consumer brands of Gen Digital, formed when
            NortonLifeLock merged with Avast in 2022. Avast bought AVG in 2016 and the two have
            shared a detection engine ever since. In September 2024 AV-Comparatives reported that
            Norton-branded protection had moved onto that same engine — pointing to near-identical
            virus-definition folder structures, a shared engine process and Avast domains referenced
            in Norton’s own configuration — and <strong>Gen Digital confirmed the change</strong>.
          </p>
          <p>
            The lab results are what that looks like from outside. In AV-Comparatives’ Real-World
            Protection Test covering February to May 2026,{' '}
            <strong>
              Norton, Avast and AVG each recorded a 99.3% protection rate with five false alarms
            </strong>{' '}
            — the same figure three times, to the decimal. Bitdefender, running its own engine, was
            marginally ahead at 99.5%, also with five false alarms. All four took the top ADVANCED+
            award, as did Kaspersky, Microsoft and TotalAV.
          </p>
          <p>
            Two practical consequences. First, choosing between Norton, Avast and AVG on protection
            is choosing between identical numbers; choose on licence size, what is bundled and the
            renewal price instead.{' '}
            <strong>Second, if you want a genuinely independent second opinion</strong> — a
            different company, a different engine, a different jurisdiction — Bitdefender is the
            only one of these four that provides it.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="renewal" title="Why we price at renewal" prose>
        <p>
          Consumer security is sold on a heavy first-year discount and renews at a much higher
          standard rate. This is the site’s standing rule across every vertical, and antivirus is
          where it bites hardest. <strong>Norton publishes its own renewal list</strong> — $124.99 a
          year for 360 Deluxe and $94.99 for Standard, effective March 2026 — against first-year
          offers roughly a third of those figures. That is the steepest multiple in this ranking,
          and the renewal list sits on a different page from the buy button.
        </p>
        <p>
          The others are less dramatic and still substantial. AVG’s Internet Security is sold at
          $59.88 and renews at $99.99, a 67% rise; its Ultimate tier is sold at the <em>same</em>{' '}
          $59.88 and renews at $149.99, which is what the identical first-year price is for. Avast’s
          spread runs from 44% above the first year on Premium Security for ten devices to 124%
          above it on the 1+1 Ultimate licence. Bitdefender’s Total Security is $59.99 for the first
          year and renews near double that at its list rate.
        </p>
        <p>
          None of this is concealed — it is printed beside a struck-through number that reads as a
          saving rather than as next August’s bill.{' '}
          <strong>Assume you will pay the renewal rate and compare on that.</strong> Then set a
          calendar reminder a month before the term ends, which is worth more than the difference
          between any two products on this list.
        </p>
      </ArticleSection>

      <ArticleSection id="how" title="How we ranked them" prose>
        <ul>
          <li>
            <strong>Detection scores from independent labs, not vendor figures.</strong> AV-TEST’s
            Windows 11 home-user rounds and AV-Comparatives’ Real-World Protection Test. Every
            performance claim on this page is attributed to one of them; nobody here has run their
            own malware tests, and a guide that says otherwise is telling you something it cannot
            support.
          </li>
          <li>
            <strong>Renewal price against the first-year offer.</strong> Both figures, every time.
            Consumer security has the steepest renewal jumps in mainstream software.
          </li>
          <li>
            <strong>What is included versus upsold.</strong> A bundled VPN capped at 200 MB a day is
            not a VPN. Cloud backup that only works on Windows is not cross-platform. The tier that
            costs nothing extra in year one is usually the one that renews highest.
          </li>
          <li>
            <strong>Ownership, and what the company does with your data.</strong> Who owns the
            brand, whose engine it runs, and whether there is a regulator’s order in the file.
          </li>
        </ul>
        <p>
          Placement is editorial and not for sale. The order below follows our composite scores, and
          the winner’s drawbacks are printed alongside everyone else’s.
        </p>
      </ArticleSection>

      <ArticleSection id="detail" title="The four suites in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="bitdefender"
        deepLink="bitdefender.com/en-us/consumer/total-security"
        title="The one on this list that is not Gen Digital"
        body="Bitdefender took the highest protection rate of these four in AV-Comparatives' February to May 2026 round and a full 6/6/6 from AV-TEST on Windows 11 in June 2026 — on its own engine, from an independent company, with a 30-day money-back guarantee."
        cta="See Bitdefender pricing →"
      />

      <ArticleSection id="verdict" title="Which one should you buy" prose>
        <p>
          <strong>For most people, Bitdefender.</strong> It posts the best protection rate of these
          four, it does not cost performance to get there, and it is the only one that is a separate
          company running a separate engine. Buy Total Security, and buy your VPN somewhere else —
          the bundled one is 200 MB a day.
        </p>
        <p>
          <strong>If you want the fullest bundle and will use it</strong>, Norton: an uncapped VPN,
          50 GB of Windows cloud backup on Deluxe, and a 60-day refund window that covers renewals.
          Go in knowing Deluxe renews at $124.99.{' '}
          <strong>If you are covering a lot of devices</strong>, AVG — ten seats on the entry paid
          tier and 60 days to try it before any charge, provided you cancel or renegotiate before
          the $99.99 renewal.
        </p>
        <p>
          <strong>If you want the cheapest paid option here</strong>, Avast’s 1+1 licence at $77.99
          on renewal, with the 2024 FTC order over browsing data on the record and worth weighing.{' '}
          <strong>If you are not sure you need to pay at all</strong>, Microsoft Defender is already
          on your Windows machine and was a Top Product in the same AV-TEST round as all four of
          these — pay for the bundle and the cross-platform cover, not for a detection gap that the
          published results do not show.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
