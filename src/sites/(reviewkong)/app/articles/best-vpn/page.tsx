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

const meta = getArticle('best-vpn')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'Every VPN claims to be fast, private and audited. Most of that is checkable without taking anyone\u2019s word for it, so that is where this ranking starts: the published audit reports rather than the press releases about them, who owns the company, and the renewal price the checkout pages leave until the last screen.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'how', label: 'How we ranked them' },
  { id: 'detail', label: 'The six services in detail' },
  { id: 'verdict', label: 'Which one should you buy' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Services compared', value: '6' },
  { label: 'Ranked on', value: 'Renewal price' },
  { label: 'Entry price', value: 'from $2.15/mo' },
  { label: 'Refund window', value: '14\u201331 days' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'nordvpn',
    deepLink: 'nordvpn.com/pricing',
    bestFor: 'Anyone who wants one fast VPN and no further thought',
    verdict:
      'NordVPN wins because it is the only service here that does not force a trade-off. Independent benchmarks put it at the front on long-distance routes — the case that actually matters, since a VPN to the server down the road is fast on any provider. The no-logs claim has been audited more than once, streaming keeps working, and the apps are mature on every platform including the TV. The catch is the pricing structure: the headline number needs a two-year commitment, and renewal is substantially higher. Buy the long term, put a reminder in your calendar for the month before it renews, and it is comfortably the best all-round choice.',
    spotlight: {
      label: 'Why it was fastest',
      body: 'NordLynx is WireGuard with a double-NAT layer added so the protocol can run without storing user IPs on the server. You get WireGuard speed without the address-assignment problem that made it awkward for commercial VPNs.',
    },
  },
  {
    providerId: 'protonvpn',
    deepLink: 'protonvpn.com/pricing',
    bestFor: 'Readers who want to verify the privacy claims, not take them on trust',
    verdict:
      'If your reason for buying a VPN is privacy rather than convenience, this is the one. Proton is a Swiss company, funded by subscriptions rather than advertising, and its client apps are open source and independently audited — so the claims can be checked instead of believed. It is not the fastest here, and on a month-to-month basis it is the priciest, but it is the only provider whose free tier I would hand to a family member: no data cap, no ads, no quiet monetisation of their traffic.',
    spotlight: {
      label: 'The free tier, honestly',
      body: 'Unlimited data, one device, a handful of countries, no streaming support and lower priority at peak times. A real product for occasional public-Wi-Fi use, and a fair funnel to the paid plan for everyone else.',
    },
  },
  {
    providerId: 'surfshark',
    deepLink: 'surfshark.com/pricing',
    bestFor: 'Households and shared flats with more devices than they can count',
    verdict:
      'Unlimited simultaneous devices is not a marketing line here, it is the whole argument. One subscription covers every phone, laptop, tablet and TV in a household, which changes the per-person maths completely — and on the two-year term it is the cheapest service in this ranking. Speeds sit just behind the leaders on nearby servers and drop further on long hops. One thing worth knowing: Surfshark and NordVPN now sit under the same parent company, so choosing both to hedge across providers does not achieve anything.',
  },
  {
    providerId: 'expressvpn',
    deepLink: 'expressvpn.com/order',
    bestFor: 'Non-technical households, and anyone covering a whole home via the router',
    verdict:
      'ExpressVPN is the most forgiving product in the category. The apps hide everything that could confuse someone, Lightway reconnects cleanly when a network drops, and its router firmware remains the simplest way to put an entire household behind a VPN without configuring anything per device. What it is not is good value: it costs meaningfully more than services that match it feature for feature. If you are buying for a household that will phone you for support, that premium may be the cheapest part of the deal.',
  },
  {
    providerId: 'mullvad',
    bestFor: 'Strict privacy: no email, no profile, cash accepted',
    verdict:
      'Mullvad is the purist option and we earn nothing from recommending it — the company runs no affiliate programme at all, which tells you most of what you need to know about how it operates. Signup issues a random account number with no email address attached, it accepts cash, and the price is a flat €5 a month with no discount tiers and no renewal trap. The trade-offs are real: the smallest server network here, and streaming access is unreliable and explicitly not a goal. Buy it because the privacy model is the best in the market, not because you want it to be your Netflix VPN.',
    spotlight: {
      label: 'What "no affiliate programme" means here',
      body: 'This link earns us nothing. Mullvad is in the ranking because it deserves the place, which is the only useful way to read the rest of the list.',
    },
  },
  {
    providerId: 'purevpn',
    deepLink: 'purevpn.com/pricing',
    bestFor: 'Buyers for whom the price is the deciding factor, with the history read first',
    verdict:
      'PureVPN is the cheapest entry here and the only one that has to be introduced with a caveat. In 2017 it supplied connection records that helped the FBI identify a user, while its marketing promised no logs; the company\u2019s position was that it retained connection metadata rather than browsing activity. What it did afterwards is the reason it is still in this ranking rather than off it \u2014 a first no-logs audit by Altius IT in 2019, then repeat KPMG examinations from 2021 under an arrangement that permits inspection without notice. The network is large for the money and the refund window runs to 31 days. Speeds trail the leaders on long-distance routes, several features are sold as add-ons rather than included, and the headline rate needs two years paid up front. If the budget is the binding constraint, this is the honest answer to it. If the 2017 episode is disqualifying for you, that is a reasonable reading and Mullvad or Proton VPN is where to go instead.',
    spotlight: {
      label: 'The 2017 case, stated plainly',
      body: 'In a US criminal case that year, records PureVPN provided to the FBI helped establish which account was behind a set of connections, at a time when the company advertised a no-logs policy. PureVPN said it had kept connection metadata, not browsing activity. The lesson generalises past this one company: a no-logs claim is worth what an outside party can verify, and no more.',
    },
  },
]

const faq: FaqItem[] = [
  {
    q: 'Do I actually need a VPN?',
    a: 'Less often than the marketing suggests. HTTPS already protects the contents of nearly everything you do on public Wi-Fi. A VPN is worth paying for if you want to keep your browsing away from your internet provider, you travel and use networks you do not trust, or you need to reach services from another country. If none of those apply, you can safely skip it.',
  },
  {
    q: 'Are free VPNs safe?',
    a: 'Mostly no. Running a VPN network costs real money, and a free service that is not funded by paid subscriptions is usually funded by something you would not agree to. The exception in this ranking is Proton VPN, whose free tier is paid for by its own subscribers — which is why it is the only free option we recommend.',
  },
  {
    q: 'Will a VPN slow my connection down?',
    a: 'Yes, always, by some amount — your traffic is taking a longer path and being encrypted on the way. On a modern protocol and a nearby server the loss is small enough that you will not notice it in normal use. Connect from Europe to a server in Asia and the difference becomes obvious on any provider.',
  },
  {
    q: 'What does a no-logs audit actually prove?',
    a: 'That an independent firm examined the servers and internal processes at a point in time and found them consistent with the no-logs claim. It is not a permanent guarantee, which is why repeat audits count for far more than a single certificate that has been on the marketing page for four years.',
  },
  {
    q: 'Why is the renewal price so much higher?',
    a: 'Because the industry sells on a discounted first term and makes its margin from year two onwards. Every provider here does it except Mullvad. Assume you will pay the standard rate eventually and compare on that figure — or set a reminder to cancel and re-subscribe as a new customer.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          The hardest part of choosing a VPN is that every provider says the same four things: fast,
          no-logs, audited, thousands of servers. All of it is true enough to be useless. What
          separates them shows up in the details —{' '}
          <strong>how much speed survives a long-distance connection</strong>, who owns the company,
          how recent the audit is, and what happens to the price at renewal.
        </p>
        <p>
          So this ranking is built from what each company publishes and cannot quietly walk back:
          audit reports, ownership records, protocol documentation and the full pricing table
          including renewal. Where speed is claimed, it comes from published independent benchmarks
          rather than from us. The order below is the order I would spend my own money in.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} />
      </ArticleSection>

      <AuthorCard vertical="vpn" />

      <ArticleSection title="The numbers behind this ranking">
        <FactStrip facts={facts} />
      </ArticleSection>

      <ArticleSection id="how" title="How we ranked them" prose>
        <ul>
          <li>
            <strong>Speed where it hurts.</strong> Published independent benchmarks for
            long-distance connections, not to the nearest server. Every VPN looks fast at 20 km.
          </li>
          <li>
            <strong>Audits and jurisdiction.</strong> Who has examined the no-logs claim, how
            recently, and which country’s law the company answers to.
          </li>
          <li>
            <strong>Real cost.</strong> The renewal rate, not the promotional first term. We print
            both.
          </li>
          <li>
            <strong>Features for bad networks.</strong> Obfuscated servers, captive-portal handling,
            reconnection behaviour — what each app documents, and what its users report when it
            fails.
          </li>
        </ul>
        <p>
          Placement is editorial and not for sale. One of the six services below pays us nothing at
          all, and it is still in the ranking.
        </p>
      </ArticleSection>

      <ArticleSection id="detail" title="The six services in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="nordvpn"
        deepLink="nordvpn.com/pricing"
        title="One VPN, fast everywhere, no tinkering"
        body="NordVPN benchmarks at the front on long-distance routes, its audits are repeated rather than one-off, and it comes with a 30-day money-back guarantee if it does not suit you."
        cta="See NordVPN pricing →"
      />

      <ArticleSection id="verdict" title="Which one should you buy" prose>
        <p>
          <strong>For most people, NordVPN.</strong> It is the fastest here, it works with
          everything, and on the long term the price is competitive.{' '}
          <strong>If privacy is the actual reason you are buying</strong>, Proton VPN — open source,
          Swiss, and verifiable. <strong>If you are covering a household full of devices</strong>,
          Surfshark, because unlimited connections at that price has no equivalent.
        </p>
        <p>
          <strong>If you want the least data collected about you</strong>, Mullvad, and we make
          nothing from telling you that.{' '}
          <strong>If you are buying for someone who will call you for support</strong>, ExpressVPN
          is worth the premium for the apps and the router firmware alone.
        </p>
        <p>
          Whichever you pick: buy the long term for the price, then set a calendar reminder a month
          before renewal. That single habit saves more money than choosing a cheaper provider.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
