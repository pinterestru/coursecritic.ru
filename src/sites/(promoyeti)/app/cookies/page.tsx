import type { Metadata } from 'next'

import LegalPage, { LegalTable } from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Cookie notice',
  description: `Every cookie ${SITE.name} sets, what it does and how long it lasts. There is exactly one, and it is only set if you click an offer.`,
  alternates: { canonical: '/cookies' },
}

export default function Page() {
  return (
    <LegalPage
      title="Cookie notice"
      updatedAt="25 August 2026"
      standfirst="A full register rather than a banner. Reading the site sets nothing; clicking an offer sets one cookie, and it is listed below."
    >
      <h2>Reading the site</h2>
      <p>
        Browsing {SITE.name} sets no cookies at all. There is no analytics tag, no advertising
        pixel, no social embed and no consent-management platform on these pages — which is why you
        have not been asked to accept anything.
      </p>

      <h2>The one cookie we set</h2>
      <LegalTable
        head={['Name', 'Set when', 'Purpose', 'Lifetime', 'Type']}
        rows={[
          [
            <code key="n">_mtfi__&lt;merchant&gt;</code>,
            'You click an offer link',
            'Lets our affiliate tracking service join a repeat click to the same visit so a referred purchase can be attributed',
            '24 hours',
            'First-party, functional to the affiliate model',
          ],
        ]}
      />
      <p>
        One of these is set per merchant path you click, which is why the name carries the merchant
        host. It contains an identifier issued by the tracking service and nothing you typed.
      </p>

      <h2>Cookies set by other people</h2>
      <p>
        When our redirect hands you to a shop or to an affiliate network, that destination sets its
        own cookies under its own policy. Those are the cookies that make a commission possible, and
        they are outside our control — the merchant’s privacy and cookie pages govern them.
      </p>
      <p>
        Your browser also requests font files from Google Fonts while rendering our pages. That is a
        network request rather than a cookie, and it is covered in the{' '}
        <a href="/privacy">privacy policy</a>.
      </p>

      <h2>Refusing or removing them</h2>
      <p>
        Every browser lets you block or delete cookies, per site or globally. Blocking ours has one
        consequence and it is entirely on our side: a purchase you make after clicking through may
        not be attributed to us, so we are not paid for it. Nothing on this site stops working, no
        price changes, and no feature is withheld.
      </p>

      <h2>Questions</h2>
      <p>
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a> — including if you find
        something setting a cookie that is not in the table above, which we would want to know
        about.
      </p>
    </LegalPage>
  )
}
