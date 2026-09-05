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

const meta = getArticle('best-vpn-for-travel')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'A VPN for travel is judged on different things than a VPN for the sofa. It has to survive captive portals, reconnect when a train drops the signal, keep your bank from locking the account because you appeared in a new country, and — occasionally — work on a network that is actively trying to stop it. Four services, ranked on the features that address exactly those problems.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'different', label: 'Why travel is a different test' },
  { id: 'detail', label: 'The four services in detail' },
  { id: 'setup', label: 'Set it up before you fly' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Services compared', value: '4' },
  { label: 'Judged on', value: 'Travel features' },
  { label: 'Entry price', value: 'from $2.19/mo' },
  { label: 'Install before', value: 'You leave home' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'nordvpn',
    deepLink: 'nordvpn.com/pricing',
    bestFor: 'Travellers who want it to work on the first try, everywhere',
    tagline: 'The most complete set of features for the networks travel actually puts you on',
    highlights: [
      'Obfuscated servers for networks that block VPN traffic outright',
      'Reconnects cleanly after a captive-portal login instead of hanging',
      'Fast enough on long hops to stream from home while abroad',
      'Apps on every device you are likely to travel with',
    ],
    verdict:
      'On the road, the metric that matters is not peak speed — it is how the app behaves when a network misbehaves. NordVPN is the only service here that documents handling for all three travel failure modes: captive-portal detection so the hotel login page loads, obfuscated servers for countries that block VPN traffic outright, and automatic reconnection after a drop. Add long-hop speed good enough to watch something from home in the evening, and it is the pick if you want one app that copes from an airport lounge.',
    spotlight: {
      label: 'The captive-portal problem',
      body: 'Hotel and airport networks make you log in through a browser page. A VPN that connects too eagerly blocks the very page you need. The good apps detect the portal and stand aside; the bad ones leave you rebooting Wi-Fi in a lobby.',
    },
  },
  {
    providerId: 'expressvpn',
    deepLink: 'expressvpn.com/order',
    bestFor: 'Anyone travelling with a family or a bag full of devices',
    tagline: 'Lightway is built around recovering from dropped connections',
    highlights: [
      'Lightway is built to survive network changes — trains, planes, patchy hotel Wi-Fi',
      'The friendliest apps in the category for non-technical travel companions',
      'Router firmware, if you want a travel router covering everyone at once',
      'Live chat that answers quickly, which matters across time zones',
    ],
    verdict:
      'Lightway was designed for exactly this: switching between mobile data and Wi-Fi, tunnels dropping in tunnels, connections that come and go. In practice it means fewer moments of staring at a spinning icon. Add apps simple enough that a travelling companion can fix their own connection, and this is the least stressful option for a group. It is also the most expensive, and on a two-week holiday that premium is hard to justify — it earns its place on longer trips.',
  },
  {
    providerId: 'surfshark',
    deepLink: 'surfshark.com/pricing',
    bestFor: 'Covering everyone’s devices on one subscription',
    tagline: 'Unlimited devices, which is the whole argument when you travel as a group',
    highlights: [
      'One subscription covers every device in the group — no seat juggling',
      'NoBorders mode for restrictive networks',
      'Cheapest long-term price of anything in this ranking',
      'Rotating IP option for connections that flag repeated logins',
    ],
    verdict:
      'For a couple or a family, the device limit is the constraint that actually bites: two phones, two laptops, a tablet and someone’s e-reader and you are already at the ceiling on most services. Surfshark has no ceiling, and it is the cheapest here on a long term. Speeds are a step behind the leaders on distant servers and it is now under the same ownership as NordVPN, so treat them as one company with two products rather than as alternatives.',
  },
  {
    providerId: 'protonvpn',
    deepLink: 'protonvpn.com/pricing',
    bestFor: 'Journalists and anyone travelling somewhere with real surveillance risk',
    tagline: 'Swiss jurisdiction, open-source apps and Secure Core routing when it matters',
    highlights: [
      'Secure Core routes through a hardened server before the traffic exits',
      'Open-source, independently audited clients you can inspect',
      'Free tier usable for occasional protection on airport Wi-Fi',
      'Swiss company, funded by subscriptions rather than advertising',
    ],
    verdict:
      'Most travellers want a VPN so their bank does not panic and the hotel network cannot see their traffic. A minority are travelling somewhere where the stakes are higher, and for them nothing else here comes close: verifiable open-source clients, Swiss jurisdiction and multi-hop routing that assumes the exit server is being watched. It costs you speed and it is slower than the leaders on long hops — a bad trade for a beach holiday, and exactly the right one if you are reporting from somewhere difficult.',
  },
]

const faq: FaqItem[] = [
  {
    q: 'Will a VPN stop my bank from locking my account abroad?',
    a: 'It can help: connecting to a server in your home country makes your banking session look ordinary rather than like a login from a new continent. It is not a guarantee — many banks fingerprint the device too — and you should still tell your bank you are travelling. Never use a VPN to misrepresent where you live in a way that breaks the bank’s terms.',
  },
  {
    q: 'Can I watch my home streaming subscriptions while travelling?',
    a: 'Usually, by connecting to a server in your home country. Streaming services do try to detect this, so it works most of the time rather than always. Check the provider’s terms — access rights are regional and using a VPN to change them may breach them.',
  },
  {
    q: 'Should I install the VPN before I leave?',
    a: 'Always. Install the app, sign in and test a connection while you are still on a network you trust. Downloading and registering for a VPN once you are already behind a restrictive network is far harder, and in some countries the provider’s website itself is blocked.',
  },
  {
    q: 'Is it legal to use a VPN abroad?',
    a: 'In the overwhelming majority of countries, yes. A handful restrict or ban unapproved VPN services, and the rules occasionally change at short notice. Check the destination’s current position before you travel — that is on you, not on the VPN provider.',
  },
  {
    q: 'Do I still need a travel eSIM if I have a VPN?',
    a: 'They solve unrelated problems. The eSIM gives you data at all; the VPN protects the traffic once you have it. Most travellers end up with both — and running a VPN over an eSIM connection works fine, at a small cost in speed and battery.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          Nearly every VPN ranking is written from a desk. That is fine for measuring throughput,
          and useless for the things that go wrong when you travel:{' '}
          <strong>
            the hotel login page that never loads, the app that reconnects to a server three
            countries away, the bank that decides you are a fraudster
          </strong>
          .
        </p>
        <p>
          So this ranking weights the features built for those conditions — captive-portal handling,
          obfuscation, reconnection behaviour, device limits — over headline speed. Four services
          made it; the rest are covered in our <a href="/articles/best-vpn">main VPN ranking</a>.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best VPNs for travel" />
      </ArticleSection>

      <AuthorCard vertical="vpn" />

      <ArticleSection id="different" title="Why travel is a different test">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            At home your VPN connects once and stays connected. Travelling, it is asked to do
            something much harder:{' '}
            <strong>
              survive captive portals, hand off between mobile data and Wi-Fi, and recover from
              networks that drop without warning
            </strong>
            . An app that handles that gracefully feels invisible. One that does not turns every
            hotel check-in into ten minutes of troubleshooting.
          </p>
          <p>
            The second difference is distance. Connecting home from another continent is the
            worst-case scenario for throughput, and it is precisely what you do when you want to
            watch something familiar in the evening or use a service that only works from your own
            country.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="detail" title="The four services in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="nordvpn"
        deepLink="nordvpn.com/pricing"
        title="Set it up before you get to the airport"
        body="NordVPN covers all three travel failure modes — captive portals, blocked networks and dropped connections — and there is a 30-day money-back guarantee if your first trip proves otherwise."
        cta="See NordVPN pricing →"
      />

      <ArticleSection id="setup" title="Set it up before you fly" prose>
        <ol>
          <li>
            <strong>Install and sign in at home.</strong> On every device you are taking, while you
            are still on a network you trust.
          </li>
          <li>
            <strong>Test a home-country server.</strong> Confirm your banking app and streaming
            services behave through it before you need them.
          </li>
          <li>
            <strong>Turn on the kill switch, but know what it does.</strong> It blocks traffic when
            the tunnel drops — which is also why a captive portal may not load until you pause it.
          </li>
          <li>
            <strong>Save one obfuscated server as a favourite.</strong> If a network blocks standard
            VPN traffic, you do not want to be hunting through a server list to find one.
          </li>
          <li>
            <strong>Download offline maps and boarding passes anyway.</strong> No VPN helps when
            there is no connection at all.
          </li>
        </ol>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
