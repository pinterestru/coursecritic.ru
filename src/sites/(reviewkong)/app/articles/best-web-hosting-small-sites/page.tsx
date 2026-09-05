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

const meta = getArticle('best-web-hosting-small-sites')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Shared hosting is the last corner of the software market where the advertised price is not the price. A plan sold at $2.99 renews near $12, and the comparison tables that rank hosts on the promotional figure are ranking them on a number almost nobody pays for long. Here are five hosts scored on the renewal price — plus what they are actually like to run a site on.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'renewal', label: 'Why we price at renewal' },
  { id: 'detail', label: 'The five hosts in detail' },
  { id: 'choosing', label: 'How to choose in five minutes' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Hosts compared', value: '5' },
  { label: 'Priced on', value: 'Renewal rate' },
  // Deliberately NOT the $1.99 headline: quoting a promo rate here would contradict the
  // renewal-first argument this whole guide is built on.
  { label: 'Cheapest renewal', value: '~$8/mo' },
  { label: 'Typical renewal', value: '$11–18/mo' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'hostinger',
    bestFor: 'A first site, a blog or a small business page on a real budget',
    verdict:
      'Hostinger wins on the number that matters. Its renewal price is roughly where competitors start their promotions, and the performance you get for it is better than the price implies — WordPress plans run on LiteSpeed with caching already configured, which is why a cheap plan here often beats an expensive one elsewhere. hPanel is friendlier than cPanel for anyone who has never administered a site, and the migration team moves an existing site for you rather than handing over a plugin. One caveat: skip the cheapest tier, which exists to advertise a low number, and start one plan up.',
    spotlight: {
      label: 'Pick your data centre carefully',
      body: 'Shared hosting performance is dominated by distance to your visitors. Choose the region closest to your audience at signup — changing it later means a migration.',
    },
  },
  {
    providerId: 'cloudways',
    bestFor: 'Anyone who expects traffic and wants no renewal surprises at all',
    verdict:
      'Cloudways is the only host here that does not play the discount game: you pay monthly, the price in month thirty is the price in month one, and you can leave whenever you like. You are getting managed cloud resources rather than a slot on a shared box, so a busy day does not mean your site slows down because someone else’s did. The trade-offs are real — no domain registration, no email hosting, and it assumes you are comfortable with a slightly technical dashboard. For a site with a real audience, it is the most honest deal in this ranking.',
  },
  {
    providerId: 'siteground',
    bestFor: 'People who will need support and want it to be good',
    verdict:
      'SiteGround has the best support in shared hosting, and it is not close: you describe a problem and someone solves it, rather than pasting a documentation link. The platform is well-tuned, runs on Google Cloud, and WordPress behaves without a stack of plugins to fix it. And then there is the renewal, which is one of the steepest in the industry — the price roughly quadruples off the introductory rate. Worth it if support is the thing you are buying. If it is not, you are paying a lot for a phone number you will never call.',
  },
  {
    providerId: 'dreamhost',
    bestFor: 'Anyone who refuses to pay three years in advance',
    verdict:
      'DreamHost is the least manipulative pricing page in this ranking. Month-to-month billing without a punitive premium, no aggressive checkout upsells, and a renewal multiple that is mild by the standards of everyone else here. Its refund window is a standard thirty days — it used to run to ninety-seven, and a lot of hosting coverage still says so, but the current terms do not. Performance is respectable rather than outstanding, there is no phone support on entry plans, and the bespoke control panel means cPanel habits do not transfer. Buy it because you value being treated straightforwardly, which in this market is worth something.',
  },
  {
    providerId: 'bluehost',
    bestFor: 'Complete beginners following a tutorial that names it',
    verdict:
      'Bluehost is the most recommended host on the internet and the hardest to justify on the numbers. The onboarding is genuinely smooth for someone building a first WordPress site, and there is a tutorial for every problem you could have. Credit where it is due: at $3.99 renewing to $9.99 its multiple is the mildest here, which cuts against the usual complaint. The trouble is everything around it — checkout upsells inflate the real first bill, migrating a site in costs $149.99, backups are weekly rather than daily, and measured performance is average at best. If you are following a tutorial that uses it, fine. Otherwise Hostinger starts cheaper and runs faster.',
  },
]

const faq: FaqItem[] = [
  {
    q: 'How much should a small site really cost to host?',
    a: 'For a blog or brochure site, $3–5 a month on a long term and $10–13 at renewal is the honest range. Paying less usually means resource limits that will constrain you; paying much more means you are buying support or managed cloud resources, which are legitimate reasons but should be deliberate ones.',
  },
  {
    q: 'Is shared hosting fast enough for WordPress?',
    a: 'On a mid-tier plan with caching, yes — up to a few thousand visits a day. Beyond that the constraint is shared resources, and the fix is managed cloud hosting rather than a larger shared plan.',
  },
  {
    q: 'Should I buy a domain from my host?',
    a: 'It is convenient and often free for the first year, but it puts your domain and your hosting with the same company, which makes leaving harder. Registering the domain separately costs a few dollars and keeps the two decisions independent.',
  },
  {
    q: 'How hard is it to switch hosts later?',
    a: 'Easier than it used to be. Most hosts here will migrate an existing site for you at no charge, and Hostinger and SiteGround both do it well. The rule: keep the old hosting running until the new site is verified and DNS has propagated. Never cancel the source before the destination works.',
  },
  {
    q: 'Do I need to pay for backups?',
    a: 'You need backups; whether you pay for them depends on the plan. Some tiers include daily backups, others only weekly, and a weekly backup on a site you update daily means losing up to a week. If they are not included, add an external backup — this is not the place to economise.',
  },
  {
    q: 'What about the free tiers on Netlify or Vercel?',
    a: 'Excellent for static sites and modern frameworks, and genuinely free at small scale. They are not a WordPress host, so if your site is WordPress, shared hosting or managed cloud remains the right category.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          Hosting comparisons have a structural problem: the affiliate commission is paid on the
          first purchase, so the incentive is to rank on the introductory price and say nothing
          about what happens in year two. We earn commission on some of these links too —{' '}
          <strong>which is exactly why we rank on the renewal figure instead</strong>. It is the
          only number you will pay more than once.
        </p>
        <p>
          The second thing this ranking corrects for is the tier. Every host advertises its cheapest
          plan and every host designs that plan to be inadequate.{' '}
          <strong>The comparison below assumes the second tier</strong> — the one people end up on
          once the first proves too tight.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best hosts for a small site" />
      </ArticleSection>

      <AuthorCard vertical="hosting" />

      <ArticleSection id="renewal" title="Why we price at renewal">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            The pattern is consistent across the industry: a heavy discount on the first term, paid
            up front for one to three years, followed by a renewal at two to four times the price.
            Nothing about it is hidden — it is in the small print at checkout — but it is presented
            in a way that makes comparison hard on purpose.
          </p>
          <p>
            Two consequences worth internalising.{' '}
            <strong>
              First: the cheapest host at signup is frequently not the cheapest host over three
              years.
            </strong>{' '}
            Second: your leverage is highest at renewal, when moving costs you a migration you can
            often get for free. Diarise the date a month ahead, and either negotiate or move.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="detail" title="The five hosts in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="hostinger"
        title="The best price-to-performance for a small site"
        body="Hostinger renews near where competitors start, migrates your existing site for you, and runs WordPress on LiteSpeed with caching already configured. Start on the Premium tier, not the cheapest one."
        cta="See Hostinger plans →"
      />

      <ArticleSection id="choosing" title="How to choose in five minutes" prose>
        <ol>
          <li>
            <strong>Building your first site and watching the budget?</strong> Hostinger, Premium
            tier.
          </li>
          <li>
            <strong>Expecting real traffic, or already have it?</strong> Cloudways — dedicated
            resources and no renewal cliff.
          </li>
          <li>
            <strong>Know you will need help?</strong> SiteGround, and budget for the renewal from
            day one.
          </li>
          <li>
            <strong>Not willing to prepay for years?</strong> DreamHost, month to month.
          </li>
          <li>
            <strong>Following a tutorial that specifies Bluehost?</strong> It will work. It is not
            what we would choose.
          </li>
        </ol>
        <p>
          Whatever you pick, register the domain somewhere else and put a reminder in the calendar
          for a month before renewal. Those two habits will save you more than the difference
          between any two hosts on this list.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
