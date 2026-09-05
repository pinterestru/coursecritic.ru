import type { Metadata } from 'next'

import LegalPage, { LegalTable } from '../../components/LegalPage'
import { SITE, inboxes, siteUrl } from '../../data/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `What ${SITE.name} collects, what it does not, who receives it and how to have it removed.`,
  alternates: { canonical: '/privacy' },
}

export default function Page() {
  return (
    <LegalPage
      title="Privacy policy"
      updatedAt="25 August 2026"
      standfirst="Short, because the site does little. There are no accounts, no newsletter and no advertising trackers — but clicking an offer does send data to an affiliate network, and that part is set out in full."
    >
      <p>
        This policy covers {SITE.name} at <a href={siteUrl}>{SITE.domain}</a>. It explains what is
        collected when you read the site, what happens when you click through to a shop, and how to
        exercise your rights. Contact for anything in it:{' '}
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>.
      </p>

      <h2>What we do not do</h2>
      <ul>
        <li>No user accounts, logins or profiles — there is nothing to sign up for.</li>
        <li>No newsletter, so no e-mail list.</li>
        <li>No advertising or social-media tracking pixels on our pages.</li>
        <li>No selling or renting of personal data to anyone, for any purpose.</li>
      </ul>

      <h2>What is processed when you read a page</h2>
      <p>
        Our web server keeps standard request logs — IP address, timestamp, requested URL, referrer
        and user-agent — which exist to run and secure the service and to diagnose faults. They are
        not used to build a profile of you.
      </p>
      <p>
        Page fonts are served from Google Fonts, which means your browser requests font files from a
        Google domain and Google receives the request metadata that any web request carries,
        including your IP address.
      </p>

      <h2>What happens when you click an offer</h2>
      <p>
        This is the part worth reading. Outbound offer links go through a redirect on our own domain
        (<code>/click/…</code>). When you use one:
      </p>
      <ul>
        <li>
          your IP address, browser user-agent and the request headers are sent to our affiliate
          tracking service so that a later purchase can be attributed to this site;
        </li>
        <li>
          a cookie is set on our domain, named <code>_mtfi__&lt;merchant&gt;</code>, lasting 24
          hours, which lets a repeat click be joined to the same visit;
        </li>
        <li>
          you are redirected to the merchant, or to the affiliate network’s tracking URL, which will
          set its own cookies under its own policy.
        </li>
      </ul>
      <p>
        If you never click an offer, none of the above happens. Merchant and network privacy
        practices are theirs, not ours — once you land on a shop’s site you are covered by that
        shop’s policy.
      </p>

      <h2>Lawful basis</h2>
      <LegalTable
        head={['Processing', 'Purpose', 'Lawful basis']}
        rows={[
          [
            'Server request logs',
            'Operating and securing the site, diagnosing faults',
            'Legitimate interests (Art. 6(1)(f))',
          ],
          [
            'Affiliate click tracking',
            'Attributing a referred purchase so the site can be funded',
            'Legitimate interests (Art. 6(1)(f)) — the processing is limited to what attribution requires',
          ],
          [
            'Correspondence you send us',
            'Answering corrections, partnership and privacy mail',
            'Legitimate interests, or legal obligation for rights requests',
          ],
        ]}
      />

      <h2>Retention</h2>
      <LegalTable
        head={['Data', 'Kept for']}
        rows={[
          ['Server request logs', 'A short operational window, then rotated out'],
          ['Affiliate click cookie', '24 hours from the click'],
          ['Records held by the affiliate network', 'Per that network’s own retention policy'],
          ['E-mail correspondence', 'As long as needed to resolve it, and to show we did'],
        ]}
      />

      <h2>Who receives data</h2>
      <ul>
        <li>
          <strong>Our hosting provider,</strong> as a processor, in the ordinary course of serving
          pages.
        </li>
        <li>
          <strong>Our affiliate tracking service and the affiliate networks,</strong> for click
          attribution as described above.
        </li>
        <li>
          <strong>Google,</strong> for the font files your browser requests.
        </li>
      </ul>
      <p>
        Some of these are outside the EEA and the UK. Where that is the case, transfers rely on the
        recipient’s standard contractual clauses or an adequacy decision.
      </p>

      <h2>Your rights</h2>
      <p>
        Under the GDPR, the UK GDPR and comparable laws you may request access to your personal
        data, correction, erasure, restriction or portability, and you may object to processing
        carried out on the basis of legitimate interests. Write to{' '}
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a> and we will respond within the
        statutory period.
      </p>
      <p>
        In practice, the honest answer to most access requests will be that we hold nothing
        identifiable about you beyond, possibly, a short-lived server log entry — because there is
        no account and no mailing list. If you have written to us, we hold that correspondence.
      </p>
      <p>
        You also have the right to complain to your supervisory authority — in the UK, the
        Information Commissioner’s Office; in the EU, the authority for your member state.
      </p>

      <h2>Children</h2>
      <p>
        This site is aimed at adults doing their own shopping and is not directed at children. We do
        not knowingly collect data from anyone under 16.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes materially, the date at the top of the page changes with it. Nothing
        here is applied retroactively to data already collected.
      </p>
    </LegalPage>
  )
}
