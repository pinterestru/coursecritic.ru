import type { Metadata } from 'next'

import LegalPage, { LegalTable } from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Cookie notice',
  description: `The full list of cookies ${SITE.domain} sets — there is one — what it does, how long it lasts, why you never see a consent banner here, and how to block it.`,
  alternates: { canonical: '/cookies' },
}

export default function Page() {
  return (
    <LegalPage
      title="Cookie notice"
      updatedAt="25 August 2026"
      standfirst="Most cookie notices describe a category. This one lists the cookie."
    >
      <p>
        <strong>{SITE.domain}</strong> sets one cookie, and only after you have chosen to follow a
        link to a company we review. Reading these pages sets nothing at all. This notice should be
        read alongside the <a href="/privacy">privacy policy</a>, which covers the rest of what the
        site records.
      </p>

      <h2>The complete list</h2>
      <LegalTable
        head={['Name', 'Set by', 'When', 'Purpose', 'Expires']}
        rows={[
          [
            <code key="n">_mtfi__&lt;merchant&gt;</code>,
            <>
              {SITE.domain}
              <br />
              <span style={{ color: 'rgb(var(--color-muted))' }}>first party</span>
            </>,
            'Only when you follow a commercial link',
            'Ties a referral to the company you clicked through to, so a commission can be attributed and the same click is not counted twice',
            '24 hours',
          ],
        ]}
      />
      <p>
        One row is the whole register. There is no analytics cookie, because there is no analytics
        script on this site. There is no advertising or retargeting cookie, because we sell no
        advertising. There is no preference or session cookie, because there is nothing here to log
        into and nothing to remember between visits.
      </p>

      <h2>Why you are not being asked to accept anything</h2>
      <p>
        A consent banner exists to obtain permission before something non-essential is stored on
        your device. Nothing is stored on your device while you read. The single cookie above is
        written only in response to a deliberate action you take — clicking through to a merchant —
        and it does nothing except record that particular referral for a day.
      </p>
      <p>
        Where the rules in your country require consent for a cookie of that kind, the click itself
        is the point at which it is sought, and the disclosure sits above every commercial link on
        the site rather than behind a dialogue box. If you do not click a commercial link, the
        question never arises. We would rather explain the position once, here, than interrupt every
        reader with a modal that most people dismiss without reading.
      </p>

      <h2>Cookies other companies set</h2>
      <p>
        Once you leave this site, you are on someone else’s. The affiliate network handling a
        company’s programme, and the company itself, will normally set identifiers of their own on
        their own domains to credit the referral and to run their shop. Those are governed by their
        policies and their consent tooling, not by this notice, and we can neither see them nor
        switch them off from here.
      </p>
      <p>
        Links to companies that pay us nothing bypass all of it: no redirect, no cookie from us,
        nothing recorded at our end.
      </p>

      <h2>Blocking it</h2>
      <p>
        Every major browser can block or delete cookies from its privacy settings, usually with a
        per-site control, and private or incognito windows discard the whole lot when you close
        them. Blocking ours costs you nothing whatsoever: the price you pay at the merchant is
        identical either way, the article you read is unchanged, and the only consequence is that we
        are not credited for the referral. We would rather say that plainly than pretend the site
        breaks without it.
      </p>

      <h2>Related technologies</h2>
      <p>
        For completeness: we use no local storage, no session storage, no web beacons, no tracking
        pixels in e-mail (we send no marketing e-mail) and no device fingerprinting. Our server logs
        record requests as any web server does — that is described in the{' '}
        <a href="/privacy">privacy policy</a> and involves no cookie.
      </p>

      <h2>Questions</h2>
      <p>
        If something on this page does not match what you observe in your browser’s developer tools,
        we want to know about it — that would be a bug in our disclosure, and we treat those the way
        we treat a factual correction. Write to{' '}
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>.
      </p>
    </LegalPage>
  )
}
