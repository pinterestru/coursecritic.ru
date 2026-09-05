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

const meta = getArticle('best-data-removal-services')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Four services that send opt-out demands to data brokers on your behalf, ranked on the one thing that matters and almost nobody measures: how much actually came down. Only one controlled test of this category exists, it is three years old, and its most uncomfortable finding is that doing it yourself for nothing beat every paid service in it. Read that before you read the prices.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'evidence', label: 'The only real test of this category' },
  { id: 'drop', label: 'California changed the maths in August 2026' },
  { id: 'treadmill', label: 'Nothing here is permanent' },
  { id: 'how', label: 'How we ranked them' },
  { id: 'detail', label: 'The four services in detail' },
  { id: 'verdict', label: 'Which one should you buy' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Services compared', value: '4' },
  { label: 'Controlled tests that exist', value: '1' },
  { label: 'Best measured result', value: 'Optery, 68%' },
  { label: 'Doing it yourself', value: '70%' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'optery',
    deepLink: 'optery.com/pricing',
    bestFor: 'Anyone who wants proof a page is gone, not a status label saying so',
    verdict:
      'Optery wins on evidence twice over. It posted the best result of the seven services Consumer Reports measured — 52% of listings removed within a week, 58% within a month, 68% within four months — and it is the only service here that shows you its work, sending a report roughly every ninety days with before-and-after screenshots of the broker pages your details sat on. PCMag’s Neil J. Rubenking described that as a level of verification he had not seen elsewhere in the category. The free tier is genuinely useful too: it returns a real exposure report with screenshots rather than a scare-screen demanding a card, so you can find out whether you need any of this before spending. The drawbacks are specific and they matter. The Removals Reports do not exist on the $39 Core plan, so the tier actually worth buying is Extended at $149. There are no consumer plans in the UK or the EU, which rules it out for a large share of readers. And the "950+ sites" on the marketing counts Ultimate-only custom requests you cannot even file for the first thirty days — automated coverage tops out at 635+.',
    spotlight: {
      label: 'The $39 plan is not the one you want',
      body: 'Core covers 380+ brokers and includes no Removals Reports, which is the entire reason to choose Optery over something cheaper. Evidence starts at Extended, $149 a year. Price this service at $149, not at $39, and if that changes your answer then EasyOptOuts is the honest comparison.',
    },
  },
  {
    providerId: 'incogni',
    deepLink: 'incogni.com/pricing',
    bestFor: 'Readers in the UK, the EU or Canada — the only one here that sells to them',
    verdict:
      'Incogni is second on coverage and jurisdiction rather than on measured results, because no independent measurement of it exists — it was not among the services Consumer Reports tested, and nothing comparable has been published since. What can be established is scale and reach. Incogni states that Deloitte independently assessed its coverage figures at 420+ brokers with automated removals and 245m+ requests processed, and its list runs beyond people-search sites into marketing databases, recruitment brokers and the risk-mitigation firms whose files feed lending and insurance decisions — the ones you cannot scan for yourself. More decisively for anyone reading this outside North America, it is the only service in this ranking sold across the UK, the EU, Switzerland, Norway and Canada, where GDPR, UK GDPR and PIPEDA give a deletion demand real force. Against that: paying monthly costs roughly double the annual rate, there is no free tier at all, and Comparitech has noted that Incogni does not confirm a broker actually complied — the dashboard reports the request, not always the outcome. Set beside Optery’s screenshots, that is the gap.',
    spotlight: {
      label: 'The only one on this page that sells in the UK and EU',
      body: 'Optery excludes the UK and EU from consumer plans. EasyOptOuts is US-only by its own terms. DeleteMe advertises UK plans but says on its own international page that sign-ups have ended. If you are in Britain or Europe, this ranking effectively has one entry, and it is this one.',
    },
  },
  {
    providerId: 'easyoptouts',
    deepLink: 'easyoptouts.com',
    bestFor: 'US residents who want the most removal per pound — and no commission attached',
    verdict:
      'A flat $19.99 a year from a bootstrapped two-person company, and it removed more than services costing six and twelve times as much. Consumer Reports measured 59% of listings gone within a week and 65% within four months, second only to Optery’s top tier and comfortably ahead of DeleteMe’s 27%. Privacy Guides retested it independently in February 2025 against fifteen high-priority brokers, found 73% to 86% cleared, and called it the best value of anything it had tried. The refund window is 150 days, which is long enough to watch two complete scan cycles and still get your money back — no competitor here offers anything close. It sits third rather than first because of what surrounds the removals: it sells to US residents only and says so plainly in its terms, it re-scans every four months against monthly for Optery and Incogni, there is no family plan, and you get essentially no reporting and nobody to escalate to. One more thing you should weigh: EasyOptOuts runs no affiliate programme and states publicly that it never pays reviewers for traffic. This entry earns us nothing, and its link is a plain nofollow.',
    spotlight: {
      label: 'We are paid nothing for this one',
      body: 'EasyOptOuts refuses affiliate relationships as a matter of policy. Optery, Incogni and DeleteMe all pay commission on a subscription bought through this page; EasyOptOuts does not, and its link here is an ordinary nofollow. It is ranked third because that is where the evidence puts it, and you should read our conclusions about the other three knowing which way the money runs.',
    },
  },
  {
    providerId: 'deleteme',
    deepLink: 'joindeleteme.com/pricing',
    bestFor: 'Buyers who want a named human on the account and the fullest report',
    verdict:
      'DeleteMe is the oldest and best-known service here, run by Abine in Boston since around 2010, and it is last because of the two numbers that define it. The first is 986 against roughly 90: its site advertises removal from 986 data brokers, and its own footnote legend tiers that list so that about ninety carry the Standard-plan marker while 566 are custom requests you have to file yourself. The second is 27% — the share of listings Consumer Reports found removed after four months, the weakest of the seven services it tested, at $129 a year against EasyOptOuts’ $19.99 and its 65%. That test dates from 2023 and DeleteMe has had three years to improve on it, which is a fair defence and not a substitute for a newer measurement. What DeleteMe does better than anyone is tell you what happened: quarterly reports naming each broker, its removal status and exactly which categories of your data it held, with the full twenty-page sample published so you can read it before buying. Every plan carries a named privacy advisor, which is what gets past brokers whose opt-out process involves notarised forms. Consumer Reports also flagged DeleteMe’s own privacy policy, which reserves the right to transfer personal information with the business in a merger, acquisition or bankruptcy.',
    spotlight: {
      label: '986 brokers, about 90 on your plan',
      body: 'The broker list is public and honestly footnoted — roughly 90 marked for the Standard plan, 566 custom-request only, 153 international, 143 VIP-only. Nothing is hidden. But the tiering sits in footnote symbols beside a very large headline number, and Comparitech observed the service contacting between forty and fifty brokers in practice. Buy on the ninety.',
    },
  },
]

const faq: FaqItem[] = [
  {
    q: 'Do data removal services actually work?',
    a: 'Partially, and the honest evidence base is thin. Consumer Reports ran the only controlled test this category has: 32 volunteers in California and New York, seven paid services, 13 people-search sites, checked at one week, one month and four months. Across all of them, 117 of 332 listings came down within four months — about 35%. The spread was enormous, from 68% for Optery’s top tier down to 4% for the worst performer. So the answer depends almost entirely on which one you buy, and the marketing claims of the whole category are not a guide to that. The fieldwork ran in 2023 and was published in 2024, and nothing comparable has been run since.',
  },
  {
    q: 'Is it cheaper to just do it myself?',
    a: 'It is cheaper and, on the evidence, more effective — with a catch. Consumer Reports included a manual control group that filed its own opt-outs, and that group cleared 70% of listings within a week and stayed there, beating every paid service at every interval, for nothing. The catch is that the control group did the work properly and then the study stopped. Doing this yourself means finding your records across hundreds of brokers, filing each opt-out through whatever obstacle course that broker has built, and then repeating the whole exercise every few months for the rest of your life, because the listings come back. Practically nobody sustains that. What you are paying these services for is not superior technique; it is the repetition.',
  },
  {
    q: 'What is DROP, and does it replace paying for this?',
    a: 'DROP is California’s Delete Request and Opt-Out Platform, run by the California Privacy Protection Agency. Californians have been able to submit a single free deletion request through it since 1 January 2026, and from 1 August 2026 the more than 500 data brokers registered in the state must check the platform at least every 45 days and act on those requests. For a California resident it is the best-value option in this article by a distance, because it costs nothing and carries a regulator behind it. It does not replace a subscription entirely: it only reaches brokers registered in California, it is open only to California residents, and it does not touch data covered by the FCRA, HIPAA or GLBA exemptions, nor anything a government body publishes. If you live in California, use DROP first and then decide whether a paid service is still worth it.',
  },
  {
    q: 'Which one works in the UK or the EU?',
    a: 'Of these four, Incogni. It sells across the UK, the EU, Switzerland, Norway, Iceland, Liechtenstein and Canada, and its requests cite GDPR, UK GDPR and PIPEDA, which give a covered broker a defined window — commonly 30 to 45 days — to act. Optery does not sell consumer plans in the UK or EU at all. EasyOptOuts restricts itself to US residents in its terms. DeleteMe quotes UK prices on its pricing page while its own international page says sign-ups for international plans have ended, which is not a contradiction you want to discover after paying.',
  },
  {
    q: 'Why does my information come back after it is removed?',
    a: 'Because brokers do not hold a single copy of you; they rebuild a profile continuously from electoral rolls, property filings, court records, marketing feeds and each other. An opt-out suppresses the record that exists today. The next refresh cycle assembles a new one from sources that never received your request. This is why every service here re-scans and re-files on a schedule rather than sweeping once, and why cancelling does not leave you where you were — it leaves you drifting back towards where you started over the following months.',
  },
  {
    q: 'What can none of these services remove?',
    a: 'Anything not held by a data broker. Government and court records, news articles, professional registers, company filings, and anything you or other people posted on social media all sit outside the remit. So do search results themselves: a listing disappears from Google once the underlying broker page is gone, not before, which is why removal shows up in search with a lag. If your problem is a news story or a court filing rather than a people-search profile, none of the four is the tool for it.',
  },
  {
    q: 'Is it safe to hand a removal service my address and phone number?',
    a: 'It is the central irony of the category: to have your personal data removed you must first give one company an unusually complete package of it — full name, current and previous addresses, phone numbers, e-mail addresses, sometimes date of birth — plus written authority to act for you. Treat the vendor’s own security and data handling as part of the purchase. Optery has completed a SOC 2 Type II audit. Consumer Reports specifically flagged DeleteMe’s privacy policy for reserving the right to transfer personal information as a business asset in a merger or bankruptcy. Give each service the minimum identifiers it needs to find you, and no more.',
  },
  {
    q: 'How do these compare on cost per year?',
    a: 'Very unevenly, and not in proportion to what they achieve. EasyOptOuts is $19.99 a year flat. Optery runs $39 for Core, $149 for Extended — the cheapest tier that includes the removal evidence — and $249 for Ultimate. Incogni is $95.88 a year annually against $15.98 a month billed monthly, with five people covered for $191.88. DeleteMe is $129 for one person and $329 for four. Since these are indefinite subscriptions rather than one-off purchases, multiply whichever you pick by the number of years you expect to care, and compare that figure against the free options: DROP if you are Californian, and filing the opt-outs yourself if you are not.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          Every service on this page does the same thing. You hand it your name, your addresses and
          your phone numbers, it finds the data brokers publishing them, and it files opt-out and
          deletion demands on your behalf — over and over, because the listings come back. The
          mechanism is legitimate and the underlying right is real.{' '}
          <strong>
            What almost no comparison of these services will tell you is how much actually came
            down.
          </strong>
        </p>
        <p>
          There is a reason for that: it is hard to measure and only one organisation has properly
          tried.{' '}
          <strong>
            Consumer Reports tested seven of these services against thirteen people-search sites in
            2023, and found they removed about 35% of listings within four months.
          </strong>{' '}
          The best did 68%. The worst did 4%. And the volunteers who filed their own opt-outs by
          hand, for nothing, did better than all of them. That study is the backbone of this
          ranking, along with what each vendor publishes about coverage, evidence and price — and
          the caveats on it are set out below rather than buried.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best data removal services for 2026" />
      </ArticleSection>

      <AuthorCard vertical="security" />

      <ArticleSection id="evidence" title="The only real test of this category">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            In August 2024 Consumer Reports published <em>Data Defense</em>, based on fieldwork run
            between May and September 2023. Thirty-two volunteers in California and New York,
            homeowners and renters, were signed up to seven paid removal services and checked
            against thirteen people-search sites at one week, one month and four months. A further
            group filed opt-outs manually as a control.
          </p>
          <p>
            <strong>
              The headline finding was that 117 of 332 listings — about 35% — came down
            </strong>{' '}
            within four months across all the paid services. Optery’s Ultimate tier led at 68%,
            EasyOptOuts followed at 65% for $19.99 a year, and DeleteMe reached 27%. The two worst
            performers, neither of them in this ranking, managed 6% and 4%.{' '}
            <strong>The manual control group cleared 70% within a week and held there</strong> — a
            better result than any product tested, at no cost.
          </p>
          <p>
            Three caveats, because a three-year-old study should not be treated as a current
            benchmark. It covered thirteen people-search sites, which is a narrow and comparatively
            easy slice of a market that also contains marketing databases and risk-scoring firms you
            cannot check yourself. Optery has published detailed objections to the method, arguing
            that the manual comparison group used trained privacy professionals with automation and
            that participants were told not to use features most real customers use. And every
            service has had three years to change.{' '}
            <strong>
              Incogni was not in the study at all, which is why it is ranked here on coverage and
              jurisdiction rather than on a removal rate.
            </strong>{' '}
            Weigh it as the best evidence available rather than as a scoreboard — but do weigh it,
            because there is nothing else of its kind.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="drop" title="California changed the maths in August 2026" prose>
        <p>
          If you live in California, read this before you buy anything. The state’s Delete Act
          created <strong>DROP — the Delete Request and Opt-Out Platform</strong> — run by the
          California Privacy Protection Agency. Californians have been able to submit a single
          deletion request through it since 1 January 2026, and{' '}
          <strong>
            since 1 August 2026 registered data brokers have been obliged to check the platform at
            least every 45 days
          </strong>{' '}
          and process what they find, with the regulator behind the requirement rather than a
          vendor.
        </p>
        <p>
          More than 500 data brokers are registered with the agency. One free request from a
          resident now reaches all of them at once — which is, structurally, the thing these
          subscriptions were invented to do.{' '}
          <strong>
            For a Californian, that is the best value in this article and it costs nothing.
          </strong>
        </p>
        <p>
          It is not a complete replacement, and it would be dishonest to present it as one. DROP
          reaches only brokers registered in California, and only California residents may use it.
          It does not cover data handled under the Fair Credit Reporting Act, HIPAA or the
          Gramm-Leach-Bliley Act, or information a government body publishes — and businesses
          already covered by those laws are not required to register as data brokers in the first
          place. It also does nothing for readers in the other forty-nine states or outside the US.{' '}
          <strong>
            Use DROP first if you can, then decide whether a paid subscription still earns its
            place.
          </strong>
        </p>
      </ArticleSection>

      <ArticleSection id="treadmill" title="Nothing here is permanent" prose>
        <p>
          The single most important thing to understand before spending money in this category:{' '}
          <strong>none of these services deletes you, and none of them can.</strong> Data brokers do
          not hold one static copy of your profile. They rebuild it continuously from electoral
          rolls, property filings, court records, marketing feeds and each other. An opt-out removes
          the record that exists this month; the next refresh cycle assembles a new one from sources
          that never saw your request.
        </p>
        <p>
          That is why every service here re-scans and re-files on a schedule rather than sweeping
          once, and it is the specification to compare them on. Optery and Incogni re-check at least
          every thirty days. DeleteMe reports quarterly.{' '}
          <strong>EasyOptOuts scans every four months</strong>, which is the slowest cadence in this
          ranking and the one real weakness in an otherwise excellent-value product.
        </p>
        <p>
          The commercial consequence is the part the advertising skips.{' '}
          <strong>
            These are indefinite subscriptions, not purchases — cancel, and your listings return
            over the following months
          </strong>
          , with no credit for the ground you gained. So the number to compare is not the first
          year’s price but the price multiplied by however long you expect to care, which for most
          people is the rest of their life. Any guide implying a one-off clean-up is misdescribing
          the product.
        </p>
      </ArticleSection>

      <ArticleSection id="how" title="How we ranked them" prose>
        <ul>
          <li>
            <strong>Measured removals where a measurement exists.</strong> The Consumer Reports
            figures, with their date and their limits stated. Nobody here has run their own removal
            trial, and a guide claiming to have signed up and watched its own listings disappear is
            telling you something it cannot support.
          </li>
          <li>
            <strong>Evidence of the work done.</strong> Whether the service can show you a broker
            page is gone, or only tells you a request was sent. Optery sends screenshots, DeleteMe
            sends per-broker status tables, Incogni and EasyOptOuts largely ask you to take their
            word for it.
          </li>
          <li>
            <strong>Coverage breadth, and what the headline number really counts.</strong> Automated
            coverage on the plan you would actually buy — not the total that includes custom
            requests, VIP tiers and international add-ons.
          </li>
          <li>
            <strong>Cost per year, and jurisdiction.</strong> The annual price against what it
            removes, and whether the service sells where you live and can cite a law that compels a
            reply.
          </li>
        </ul>
        <p>
          Placement is editorial and not for sale. One of the four below pays us nothing at all, is
          ranked third on merit, and is labelled as such on its own card — as is every link on this
          site that earns commission.
        </p>
      </ArticleSection>

      <ArticleSection id="detail" title="The four services in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="optery"
        deepLink="optery.com/pricing"
        title="The only one that shows you the before and after"
        body="Optery posted the highest removal rate of the seven services Consumer Reports measured, and on its Extended and Ultimate tiers it sends a report roughly every 90 days with screenshots of the broker pages before and after. The free tier will tell you whether you are exposed at all before you spend anything."
        cta="See Optery pricing →"
      />

      <ArticleSection id="verdict" title="Which one should you buy" prose>
        <p>
          <strong>If you live in California, start with DROP.</strong> One free request, more than
          500 registered brokers obliged to act on it since August 2026, and a regulator rather than
          a vendor standing behind it. Then decide whether you still need a subscription for the
          brokers it does not reach.
        </p>
        <p>
          <strong>For most people otherwise, Optery — on the Extended tier at $149.</strong> It
          produced the best measured result in the only controlled test of this market, and it is
          the only service that sends photographic evidence that a page is gone rather than a status
          label claiming it. Do not buy Core at $39 expecting that; the reports are not on it.
        </p>
        <p>
          <strong>If you are in the UK, the EU or Canada, Incogni</strong>, because it is the only
          one of these four that sells to you and cites a law with teeth behind it. Take the annual
          billing rather than the monthly, which costs roughly double, and the family plan if there
          is more than one of you.{' '}
          <strong>If the price is what is stopping you, EasyOptOuts at $19.99</strong> — US
          residents only, second-best measured result in the study, a 150-day refund, and no
          commission to us whatsoever.
        </p>
        <p>
          <strong>DeleteMe is the one to buy for the reporting</strong>, if a named advisor and a
          detailed quarterly breakdown are worth $129 to you. Go in knowing that the 986 brokers on
          the advertising are about ninety on the plan, and that it came last in the only
          independent measurement anyone has published.{' '}
          <strong>And if you would rather pay nothing at all</strong>, the volunteers who filed
          their own opt-outs by hand beat every paid service in that study — the reason to subscribe
          is that almost nobody keeps doing it, not that it does not work.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
