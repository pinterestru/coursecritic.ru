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

const meta = getArticle('best-esim-international-travel')

export const metadata: Metadata = articleMetadata(meta)

const lead =
  'A travel eSIM is the rare piece of travel kit that is unambiguously better than what it replaced: no kiosk queue, no passport photocopy, no hunting for a shop that is open on a Sunday. You install it before you fly and land with data already working. The four apps below cover most of the market — and they differ far more on price than the marketing suggests.'

const toc = [
  { id: 'ranking', label: 'The ranking at a glance' },
  { id: 'maths', label: 'The per-gigabyte maths' },
  { id: 'detail', label: 'The four apps in detail' },
  { id: 'catch', label: 'The catch nobody mentions' },
  { id: 'faq', label: 'Frequently asked' },
]

const facts: FactItem[] = [
  { label: 'Apps compared', value: '4' },
  { label: 'Destinations covered', value: '150–200+' },
  { label: 'Entry price', value: 'from ~$3 / GB' },
  { label: 'Phone number', value: 'None — data only' },
]

const ranking: RankEntry[] = [
  {
    providerId: 'airalo',
    bestFor: 'Almost everyone — the widest coverage and the fewest surprises',
    verdict:
      'Airalo is the default for a simple reason: if a country sells eSIM data at all, Airalo almost certainly lists a plan for it. That matters the moment you leave the standard tourist routes, where the cheaper apps quietly have no coverage. Every plan installs before departure, top-ups reuse the same profile so your phone does not fill up with dead eSIMs, and its support reputation on public review sites is the strongest of the four. It is not the cheapest per gigabyte — but it is the one I would install for a trip I could not afford to get wrong.',
    spotlight: {
      label: 'Buy local, not regional',
      body: 'Airalo’s local plans are consistently cheaper per gigabyte than the regional bundles. Only pay for a regional plan if you are genuinely crossing borders on this trip.',
    },
  },
  {
    providerId: 'nomad',
    bestFor: 'Long stays where cost per gigabyte is the only thing that matters',
    verdict:
      'If you are buying 20 GB for a month somewhere, Nomad is usually the cheapest way to do it, and the long validity windows — up to a year on some plans — suit slow travel better than anything else here. The trade-off is polish: the app is fussier than Airalo’s, support is slower, and network partner quality varies noticeably from country to country. For a two-day city break the saving is trivial and not worth the risk; for three months in one region it adds up to real money.',
  },
  {
    providerId: 'holafly',
    bestFor: 'Heavy users who tether a laptop and refuse to watch a data counter',
    verdict:
      'Holafly sells unlimited data by the day rather than gigabytes by the plan, and for a particular kind of traveller that is exactly right: if you work from a laptop over your phone’s hotspot, a gigabyte allowance is anxiety you have to pay attention to. Two caveats before you buy. Speed is throttled after a fair-use threshold in several destinations, and per-day pricing gets expensive fast on a long trip — over about a fortnight, a large gigabyte plan usually wins on cost.',
  },
  {
    providerId: 'saily',
    bestFor: 'Readers already in the Nord ecosystem who want privacy tooling included',
    verdict:
      'Saily comes from the team behind NordVPN, and it shows in the details: ad blocking and a virtual-location option built into a travel eSIM is genuinely unusual. The app is the cleanest of the four and the purchase flow is two taps. It is also the youngest product here, with thinner coverage in smaller countries and a shorter track record when something goes wrong. A good pick if your destinations are mainstream and you already trust the company.',
  },
]

const faq: FaqItem[] = [
  {
    q: 'Does my phone support eSIM?',
    a: 'Most handsets from roughly 2019 onwards do, but the phone must also be carrier-unlocked. Check both before buying a plan — an eSIM cannot be installed on a locked device, and no eSIM seller can fix that for you.',
  },
  {
    q: 'Will I get a phone number?',
    a: 'No. Travel eSIMs are data only. That means no SMS, which matters more than people expect: banks, ride-hailing apps and two-factor codes often insist on a text. Keep your home SIM active for SMS (with data roaming switched off) and run everything else over the eSIM.',
  },
  {
    q: 'Can I keep using WhatsApp and iMessage?',
    a: 'Yes. Those are tied to your account rather than to the network you are on, so they keep working over eSIM data exactly as before.',
  },
  {
    q: 'What happens when the data runs out?',
    a: 'You top up in the app, and the top-up applies to the same eSIM profile. Do it before you run out if you can: buying a top-up requires a connection, which is awkward when the connection is the thing that expired. Most apps let you buy over Wi-Fi in the meantime.',
  },
  {
    q: 'Is an eSIM cheaper than roaming with my own carrier?',
    a: 'Almost always — unless your home plan already includes roaming at your destination. Check that first: some European and North American plans include enough free roaming that buying an eSIM is money wasted.',
  },
  {
    q: 'Can I install it before I travel?',
    a: 'Yes, and you should. Install over Wi-Fi at home; the plan activates when you first connect to a network at your destination. You then land with working data, which is exactly when you need it.',
  },
]

export default function Page() {
  return (
    <ArticleShell meta={meta} lead={lead}>
      <ArticleSection prose>
        <p>
          Every eSIM app sells the same thing — prepaid data resold from local networks — so the
          differences are narrower than the branding implies. Three of them actually matter:{' '}
          <strong>
            whether your destination is covered, what a gigabyte costs, and whether the plan is
            capped or unlimited
          </strong>
          .
        </p>
        <p>
          So the comparison below works from the published catalogues and price lists: which
          destinations each app actually covers, what a gigabyte costs once you divide the plan
          price by the data, and what the terms say about throttling and validity. Below is the
          order I would buy them in.
        </p>
      </ArticleSection>

      <Toc items={toc} />

      <ArticleSection id="ranking">
        <RatingSummary entries={ranking} title="Best travel eSIMs" />
      </ArticleSection>

      <AuthorCard vertical="travel" />

      <ArticleSection id="maths" title="The per-gigabyte maths">
        <FactStrip facts={facts} />
        <div className="article-prose mt-6">
          <p>
            Prices look similar until you divide by the data. A $5 plan with 1 GB and a $18 plan
            with 10 GB are not remotely the same deal, and the apps present them side by side as
            though they are. <strong>Work out the cost per gigabyte before you buy</strong>, and buy
            for the trip you are actually taking rather than the one you imagine.
          </p>
          <p>
            Two rules cover most cases. <strong>Local beats regional</strong> when you are staying
            in one country, every time. And <strong>capped beats unlimited</strong> on anything
            longer than about a fortnight, unless you are genuinely tethering a laptop all day.
          </p>
        </div>
      </ArticleSection>

      <ArticleSection id="detail" title="The four apps in detail">
        <div className="space-y-6">
          {ranking.map((entry, i) => (
            <RankCard key={entry.providerId} rank={i + 1} entry={entry} />
          ))}
        </div>
      </ArticleSection>

      <CtaBanner
        providerId="airalo"
        title="Land with data already working"
        body="Airalo covers more than 200 countries and regions, installs before you fly, and reuses the same eSIM every time you come back. It is the safest choice for a trip you cannot afford to get wrong."
        cta="Browse Airalo plans →"
      />

      <ArticleSection id="catch" title="The catch nobody mentions" prose>
        <p>
          <strong>You do not get a phone number.</strong> Every travel eSIM in this comparison is
          data only, and the consequences surface at the worst moments: a bank sending a
          verification code by SMS, a ride-hailing app insisting on a text, a hotel confirming a
          booking the same way.
        </p>
        <p>The workaround is straightforward, and worth setting up before you leave:</p>
        <ul>
          <li>Keep your home SIM active for calls and SMS, with data roaming switched off.</li>
          <li>Set the travel eSIM as the default for mobile data.</li>
          <li>
            Move any two-factor codes you can to an authenticator app rather than SMS — good
            practice regardless of travel.
          </li>
        </ul>
        <p>
          Do that once and the rest of the trip is genuinely frictionless. Skip it and you will
          discover the problem in an airport at midnight.
        </p>
      </ArticleSection>

      <ArticleSection id="faq">
        <ArticleFaq items={faq} />
      </ArticleSection>
    </ArticleShell>
  )
}
