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

const meta = getArticle('best-travel-insurance-long-trips')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Travel insurance is sold on what it covers and decided on what it excludes. For trips longer than a month the ordinary holiday policy stops applying entirely — most will not cover you once you have already left, and none of them are priced for six months away. This comparison works through four long-stay policies from their own wording, exclusions first, and ranks them on what actually gets paid.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'difference', label: 'Subscription vs fixed-term cover' },
  { id: 'detail', label: 'The four policies in detail' },
  { id: 'excluded', label: 'What is almost always excluded' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Policies compared', value: '4' },
  { label: 'Entry price', value: 'from ~$56 / 4 weeks' },
  { label: 'Buy after departure', value: 'Yes, on 2 of 4' },
  { label: 'Covers cancellation', value: 'Rarely' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'safetywing',
    bestFor: 'Open-ended trips where you do not know the return date',
    verdict:
      'SafetyWing solves the problem that makes ordinary travel insurance useless for long trips: it does not ask how long you are going for. You subscribe by the month, it renews until you cancel, and — unusually — you can buy it after you have already left home. That last point rescues a lot of people who realised too late that their holiday policy expired. It is medical-first cover: strong on the hospital visit, thin to absent on baggage and cancellation. Read it as health cover for travellers rather than a full travel policy, and it is the best value here by some distance.',
    spotlight: {
      label: 'What it does not do',
      body: 'Baggage and trip-cancellation protection are minimal. If the thing you are insuring against is a cancelled flight or a stolen laptop, this is the wrong product — look at World Nomads instead.',
    },
  },
  {
    providerId: 'genki',
    bestFor: 'Long stays that need visa-compliant cover and readable terms',
    verdict:
      'Genki writes the clearest policy documents in this comparison, and against the other three that is not faint praise — you can determine what is covered without a glossary. Its higher tier is built for people staying somewhere long enough to need routine healthcare as well as emergencies, and it satisfies the insurance requirement on several long-stay visas out of the box, which the American-style products often do not. It costs more per month than SafetyWing. If your stay involves paperwork or a residence permit, the extra buys you a document that gets accepted.',
  },
  {
    providerId: 'worldnomads',
    bestFor: 'Trips with adventure activities, gear worth insuring, or bookings worth protecting',
    verdict:
      'World Nomads is the only option here that behaves like traditional travel insurance: real baggage cover, real trip-cancellation cover, and a long published list of adventure activities included as standard rather than as an expensive add-on. If your trip involves diving, trekking at altitude or a bag of camera equipment, the subscription products will not cover the thing you are worried about. Expect to pay noticeably more per month, and check the terms for your country of residence — availability and cover vary a lot by where you live.',
  },
  {
    providerId: 'insurednomads',
    bestFor: 'Higher-risk destinations where evacuation cover is the point',
    verdict:
      'This is the expensive option, and for most readers it is more insurance than the trip warrants. It earns its place for one scenario: travelling somewhere where a serious medical problem means being moved rather than treated locally. Medical maximums are well above the budget subscriptions and evacuation assistance is genuinely included rather than sold as an extra. If you are working in a region with thin local healthcare, that combination is the whole product. In low-risk countries you are paying for cover you will never use — and we earn nothing from this listing either way.',
  },
]

const faq: FaqItem[] = [
  {
    q: 'What counts as a "long trip"?',
    a: 'In practice, anything over about a month. Standard holiday policies are written for fixed trips of up to 30 or 60 days, must be bought before you leave, and price badly beyond that. Once you cross that line you need cover designed for it.',
  },
  {
    q: 'Can I buy insurance after I have already left?',
    a: 'With most conventional insurers, no. SafetyWing and Genki both allow it, which is precisely why people end up with them. Expect a short waiting period before cover begins, and expect anything that started before you bought it to be excluded.',
  },
  {
    q: 'Are pre-existing conditions covered?',
    a: 'Generally not, on any of these. Definitions vary and some policies cover an acute flare-up of a stable condition, so if you have an ongoing condition this is the clause to read before anything else — it is the most common reason a large claim is refused.',
  },
  {
    q: 'Does travel insurance cover me if I am working abroad?',
    a: 'Ordinary office and laptop work is normally fine on these policies; manual labour and hazardous occupations are usually excluded. If you are working in any physical capacity, check the occupation clause specifically — assuming is expensive.',
  },
  {
    q: 'Is my credit-card travel insurance enough?',
    a: 'For a two-week holiday it often is. For a long trip it usually is not: card cover typically caps the trip length, may require you to have paid for travel with that card, and rarely covers you once you are already abroad. Read the certificate rather than the marketing summary.',
  },
  {
    q: 'What should I do the moment something happens?',
    a: 'Contact the insurer before treatment where the situation allows it, and keep every document: receipts, discharge notes, police reports for theft. Claims are refused for missing paperwork far more often than for the underlying event not being covered.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          Insurance marketing is written around the best case. The document that decides whether you
          are paid is the exclusions page, and it is the one nobody reads until they need it. So
          this comparison starts there:{' '}
          <strong>what each policy refuses to cover, and who that rules out</strong>.
        </p>
        <p>
          One thing to be clear about before the ranking. Nothing here is financial advice, and no
          two travellers have the same risk. Use this to narrow the field to two options, then read
          the actual policy wording for the one you choose —{' '}
          <strong>your version, in your country of residence</strong>, because the terms differ.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best long-trip insurance" />
      </ArticleSection>

      <AuthorCard vertical="travel" />

      <ArticleSection id="difference" title="Subscription vs fixed-term cover">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            <strong>Subscription cover</strong> (SafetyWing, Genki) renews monthly until you cancel.
            It suits open-ended travel, it can usually be bought after you have left, and it is
            cheap enough that people keep it in force — which is the entire point of insurance. What
            you give up is breadth: these are medical-first products.
          </p>
          <p>
            <strong>Fixed-term policies</strong> (World Nomads, and most conventional insurers) are
            bought for a defined trip before you leave. They cover far more — baggage, cancellation,
            activities — and they cost more per month. If the value of what you are protecting
            includes flights, equipment or planned activities, that breadth is the reason to buy.
          </p>
          <p>
            A lot of long-term travellers end up with subscription medical cover permanently, and a
            fixed-term policy on top for the specific weeks that involve something risky. That is a
            perfectly sensible way to do it.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="detail" title="The four policies in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="safetywing"
        title="Cover that does not need a return date"
        body="SafetyWing subscribes by the month, can be bought while you are already abroad, and cancels whenever you stop travelling. Check the current pricing for your age band and read the exclusions before you buy."
        cta="Check SafetyWing pricing →"
      />

      <ArticleSection id="excluded" title="What is almost always excluded" prose>
        <p>
          These appear in nearly every policy in the category. None of them are hidden — they are
          simply on the page most people skip.
        </p>
        <ul>
          <li>
            <strong>Pre-existing conditions.</strong> Excluded by default on all four. Definitions
            differ, so check whether a stable condition’s acute flare-up is treated separately.
          </li>
          <li>
            <strong>Anything that began before cover started.</strong> Buying insurance after the
            symptoms is not insurance, and every policy says so.
          </li>
          <li>
            <strong>Alcohol and drug-related incidents.</strong> A very common reason for refusal,
            and applied more literally than travellers expect.
          </li>
          <li>
            <strong>High-risk activities not on the covered list.</strong> Motorbikes without the
            correct licence, diving beyond a certified depth, unroped climbing.
          </li>
          <li>
            <strong>Travel against official advice.</strong> Entering a region your government
            advises against usually voids cover for that region entirely.
          </li>
          <li>
            <strong>Unattended possessions.</strong> Where baggage cover exists at all, this
            exclusion removes most real-world theft claims.
          </li>
        </ul>
        <p>
          Read those six clauses in the policy you are considering before you read anything else. It
          takes ten minutes and it is the only part of the document that decides whether the product
          is worth buying.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
