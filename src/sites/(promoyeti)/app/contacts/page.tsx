import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${SITE.name} — corrections, expired offers, partnership enquiries and data requests.`,
  alternates: { canonical: '/contacts' },
}

export default function Page() {
  return (
    <LegalPage
      title="Contact"
      updatedAt="25 August 2026"
      kicker="Contact"
      standfirst="Three inboxes, so a correction does not sit behind a fortnight of partnership mail."
    >
      <h2>Corrections and expired offers</h2>
      <p>
        <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>
      </p>
      <p>
        The most useful mail we get. If a code failed, an offer has expired, an exclusion is missing
        or a market is wrong, send the page and — if you have it — what the checkout said. We check
        it, fix it, and re-date the page. Corrections are handled before anything else in any inbox.
      </p>
      <p>
        Working code that is not listed? Same address. We will verify it against the merchant before
        it goes up, because publishing an unverified code is the one thing this site does not do.
      </p>

      <h2>Partnerships, networks and press</h2>
      <p>
        <a href={`mailto:${inboxes.partnerships}`}>{inboxes.partnerships}</a>
      </p>
      <p>
        Affiliate programmes, network contacts, feed access and press enquiries. Two things worth
        saving us both time on: we do not sell placement in any list on this site, and we do not
        publish codes we have not confirmed — including ones supplied to us as “exclusive” with no
        way to verify them.
      </p>

      <h2>Privacy and data requests</h2>
      <p>
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>
      </p>
      <p>
        Access, deletion, objection and any other request under the GDPR, UK GDPR or comparable
        legislation. See the <a href="/privacy">privacy policy</a> for what we hold and how long. We
        respond within the statutory period.
      </p>

      <h2>What we cannot help with</h2>
      <p>
        We are not any of the shops listed here. We cannot see your order, change a booking, process
        a refund, chase a delivery or resolve a dispute with a merchant. For any of that, contact
        the shop directly — their own support page will be faster than we could ever be.
      </p>
    </LegalPage>
  )
}
