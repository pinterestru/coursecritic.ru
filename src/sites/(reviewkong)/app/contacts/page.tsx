import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach the ${SITE.name} editorial team, send a correction that gets acted on, and what we can and cannot help with.`,
  alternates: { canonical: '/contacts' },
}

export default function Page() {
  return (
    <LegalPage
      title="Contact us"
      updatedAt="25 August 2026"
      kicker="Contact"
      standfirst="Three mailboxes, all of them read by people. Corrections go to the front of the queue."
    >
      <p>
        We read everything and answer most of it. Corrections come first — if a price, a policy or a
        fact on this site is wrong, telling us is a favour and we treat it as one.
      </p>

      <h2>Where to write</h2>
      <ul>
        <li>
          <strong>Editorial, corrections, general questions:</strong>{' '}
          <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a> — also the address for
          copyright complaints and other legal notices.
        </li>
        <li>
          <strong>Partnerships and press:</strong>{' '}
          <a href={`mailto:${inboxes.partnerships}`}>{inboxes.partnerships}</a>
        </li>
        <li>
          <strong>Privacy and data requests:</strong>{' '}
          <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a> — see the{' '}
          <a href="/privacy">privacy policy</a> for what we hold and what you can ask for.
        </li>
      </ul>
      <p>
        E-mail is the whole list. {SITE.name} is a small distributed editorial team with no
        switchboard and no shopfront, so there is no phone number to publish and we would rather say
        that than print one nobody answers. If you need a postal address for a formal or legal
        notice, ask at the editorial address and we will provide it.
      </p>

      <h2>Sending a correction that gets acted on</h2>
      <p>Four lines are usually enough, and they save us a round trip:</p>
      <ul>
        <li>The page — a link, or the title.</li>
        <li>The sentence or figure that is wrong.</li>
        <li>What it should say instead.</li>
        <li>
          Where that comes from, if you have it — the vendor’s own pricing page or terms is ideal,
          and a screenshot with a date is better than nothing when a promotional price has already
          moved.
        </li>
      </ul>
      <p>
        When we make a change of substance, we update the review date on the page rather than
        editing it silently. If we disagree with a correction, we will tell you why instead of
        ignoring the mail.
      </p>

      <h2>What we cannot help with</h2>
      <p>
        The most common mail we receive is meant for somebody else, so: {SITE.name} is a
        publication, not a shop, a travel agent, an insurer or a hosting company. We have no access
        to your order, your booking, your policy or your account with any brand on this site. That
        means we cannot track a delivery, process a refund, rebook a flight, make a claim, cancel a
        subscription or reset a password.
      </p>
      <p>
        If you have a problem with a purchase, the company you bought from is the only party that
        can fix it, and its own support channel is the fastest route to a resolution. We will point
        you at the right one if you ask — that much we can do — but we cannot act on your behalf. If
        a brand we recommend is handling a problem badly and there is a pattern to it, that is
        genuinely useful to us as editorial: send the details to the editorial address and it will
        be read as feedback on the recommendation.
      </p>

      <h2>If you represent a brand we cover</h2>
      <p>
        You are welcome to send corrections, updated pricing, a product briefing or a note that a
        policy has changed, and we will look at all of it. Factual corrections from a brand are
        treated exactly like factual corrections from a reader: checked against the source, then
        made.
      </p>
      <p>
        What we will not do is sell a position in a ranking, remove a documented drawback because it
        is unflattering, publish copy written by you as editorial, or add a paid link to an existing
        article. An affiliate relationship does not change any of that, and neither does the size of
        the budget attached to the request. The reasoning is set out in full on the{' '}
        <a href="/disclosure">affiliate disclosure</a> page.
      </p>

      <h2>Response times</h2>
      <ul>
        <li>
          <strong>Corrections:</strong> looked at within a working day or two, because a wrong
          figure on a live page is a bug.
        </li>
        <li>
          <strong>General editorial mail:</strong> two to five working days.
        </li>
        <li>
          <strong>Privacy and data requests:</strong> within 30 days, as the applicable data
          protection rules require, and usually much sooner.
        </li>
        <li>
          <strong>Partnership enquiries:</strong> when we get to them. We are not quick about these
          and we would rather set the expectation than apologise for it later.
        </li>
      </ul>
    </LegalPage>
  )
}
