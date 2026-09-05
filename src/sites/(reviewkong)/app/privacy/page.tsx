import type { Metadata } from 'next'

import LegalPage, { LegalTable } from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Privacy policy',
  description: `What ${SITE.name} collects and why, exactly what leaves this site when you follow a commercial link, how long everything is kept, and how to have it deleted.`,
  alternates: { canonical: '/privacy' },
}

export default function Page() {
  return (
    <LegalPage
      title="Privacy policy"
      updatedAt="25 August 2026"
      standfirst="Written to be read. If you only want the summary, it is the first four bullets."
    >
      <p>
        This policy explains what {SITE.name} collects when you visit <strong>{SITE.domain}</strong>
        , what leaves this site when you follow a link to a company we review, and what you can
        require us to do about either.
      </p>

      <h2>The short version</h2>
      <ul>
        <li>
          There are no accounts, no sign-up, no newsletter and no comment section, so there is no
          profile of you to build in the first place.
        </li>
        <li>
          We run <strong>no analytics script, no advertising pixel and no third-party tag</strong>{' '}
          on these pages. Nothing on this site is watching you read.
        </li>
        <li>
          The one thing we do record is the <strong>click on a commercial link</strong> — because
          that is how the site is paid for. Reading a page records nothing beyond an ordinary
          web-server log line.
        </li>
        <li>
          We do not sell personal data, and we have nothing to sell: we do not collect a name, an
          address or a payment detail anywhere on this site.
        </li>
      </ul>

      <h2>Who is responsible</h2>
      <p>
        {SITE.name} is an independent editorial publication. The operator of {SITE.domain} is the
        data controller for the purposes of the UK and EU GDPR and can be reached at{' '}
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>, which is a monitored mailbox
        and not a form that goes nowhere. If you need the operator’s registered name and postal
        address for a formal request or a complaint to a regulator, ask at that address and we will
        send them.
      </p>

      <h2>What we collect, and why</h2>
      <LegalTable
        head={['What', 'Contains', 'Why', 'Kept for']}
        rows={[
          [
            <strong key="l">Server logs</strong>,
            'IP address, browser user agent, the URL requested, the referring page, a timestamp',
            'Serving the page at all, blocking abuse, spotting outages and broken links',
            '30 days, then deleted',
          ],
          [
            <strong key="c">Click records</strong>,
            'Which commercial link, when, the campaign parameters in the URL, and the same technical details the request carries',
            'Attributing a referral so the commission that funds the site can be paid',
            'Up to 13 months — an affiliate reconciliation cycle — then aggregated',
          ],
          [
            <strong key="e">E-mail you send us</strong>,
            'Your address and whatever you wrote',
            'Answering you, and keeping a record of a correction we made',
            'While it is relevant to the correction, then deleted',
          ],
        ]}
      />
      <p>
        That is the complete list. We do not fingerprint devices, we do not buy data about visitors
        from anyone, and we do not combine any of the above into a profile of an individual reader.
      </p>

      <h2>What happens when you follow a commercial link</h2>
      <p>
        This is the part most policies gloss over, so here it is in order. A commercial link on this
        site does not point at the company directly. It points at a path on our own domain beginning{' '}
        <code>/click/</code>. When you follow one:
      </p>
      <ul>
        <li>
          The request reaches our server, which passes the details it already has — your IP address,
          your user agent, the request headers your browser sent, the destination and a timestamp —
          to our own click-tracking service so the referral can be attributed.
        </li>
        <li>
          A short-lived first-party cookie may be set on {SITE.domain} so a repeat click is not
          counted twice. It expires in <strong>24 hours</strong>. Details are in the{' '}
          <a href="/cookies">cookie notice</a>.
        </li>
        <li>
          You are then redirected to the company, or to the affiliate network that handles its
          programme. We send that redirect with <code>Referrer-Policy: no-referrer</code>, so the
          company is not told which article you were reading when you decided to click.
        </li>
        <li>
          From the moment you arrive there, <strong>their</strong> privacy policy governs, not this
          one. The affiliate network will normally set identifiers of its own on its own domain to
          credit the referral. We have no control over those and no visibility into what else the
          company does with the visit — which is a large part of why we keep the number of
          intermediaries as small as we do.
        </li>
      </ul>
      <p>
        Links to companies that pay us nothing skip all of this. They go straight to the company’s
        own site with no redirect, and nothing is recorded at our end.
      </p>

      <h2>Lawful basis</h2>
      <p>Where the UK or EU GDPR applies:</p>
      <LegalTable
        head={['Processing', 'Basis', 'The interest, where relevant']}
        rows={[
          [
            'Server logs and abuse prevention',
            'Legitimate interests',
            'Keeping a public website available and secure',
          ],
          [
            'Recording a click on a commercial link',
            'Legitimate interests',
            'Being paid for editorial work that is free to read; the processing is limited to the click itself and is not used to profile you',
          ],
          ['Replying to your e-mail', 'Legitimate interests', 'Answering the message you sent us'],
        ]}
      />
      <p>
        We do not rely on consent anywhere, because we do not do anything on this site that requires
        it — no advertising cookies, no cross-site tracking, no marketing to an address we
        harvested. You have an absolute right to object to processing based on legitimate interests;
        see below.
      </p>

      <h2>Who else sees any of this</h2>
      <ul>
        <li>
          <strong>Our hosting and infrastructure providers</strong>, who process server logs on our
          instructions in order to run the site.
        </li>
        <li>
          <strong>Our click-tracking service</strong>, which runs on infrastructure we control and
          exists solely to attribute referrals.
        </li>
        <li>
          <strong>Affiliate networks and the companies we link to</strong>, once you have chosen to
          click through to them. They are independent controllers, not our processors.
        </li>
      </ul>
      <p>
        Nobody else. We do not share data with advertisers, data brokers or social platforms,
        because we do not deal with any of them.
      </p>

      <h2>Where the data goes</h2>
      <p>
        We publish worldwide and our infrastructure providers operate internationally, so data may
        be processed outside the country you are reading from, including outside the UK and the EEA.
        Where that happens we rely on the transfer mechanisms our providers put in place — adequacy
        decisions or standard contractual clauses. The data involved is technical rather than
        sensitive: a log line and a click.
      </p>

      <h2>Security</h2>
      <p>
        The site is served over HTTPS. Access to logs and click records is restricted to the people
        who need it to run the site. No system is perfect, and the honest mitigation here is scope
        rather than promises: there is no account database to breach, no payment data and no contact
        list, because we never asked you for any of it.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on where you live you may have the right to access the personal data we hold about
        you, to have it corrected or deleted, to restrict or object to our processing of it, and to
        receive it in a portable form. Write to{' '}
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a> and we will answer within 30
        days.
      </p>
      <p>
        One practical warning, so a request does not disappoint you: because we hold no identifiers
        that point at a person, an access or deletion request will usually only be actionable if you
        can tell us something specific enough to find — the approximate time of a visit and the IP
        address it came from, or the e-mail address you wrote to us from. If we cannot identify data
        as yours, we are required to say so rather than hand over someone else’s.
      </p>
      <p>
        You can also complain to your data protection authority. In the UK that is the Information
        Commissioner’s Office; in the EU it is the supervisory authority in your member state. We
        would rather you gave us the chance to fix it first, but the route is yours either way.
      </p>

      <h2>If you are in the United States</h2>
      <p>
        We do not “sell” or “share” personal information as the California Consumer Privacy Act
        defines those terms, we do not process sensitive personal information, and we do not run
        cross-context behavioural advertising. There is accordingly no “Do Not Sell or Share My
        Personal Information” switch on this site — not because we buried it, but because there is
        nothing for it to turn off. California, Colorado, Connecticut, Virginia and other state
        privacy rights can be exercised at the same address as everything else:{' '}
        <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>.
      </p>

      <h2>Do Not Track and Global Privacy Control</h2>
      <p>
        There is no industry-agreed meaning for a Do Not Track header, so like most publishers we do
        not act on one. A Global Privacy Control signal is an opt-out of sale and sharing, and we do
        neither, so our behaviour with the signal and without it is identical.
      </p>

      <h2>Children</h2>
      <p>
        This site is written for adults making purchases and is not directed at children. We do not
        knowingly collect personal data from anyone under 16. If you believe a child has sent us
        something, write to us and we will delete it.
      </p>

      <h2>Changes</h2>
      <p>
        If this policy changes materially we will change the date at the top of the page and, where
        the change affects what we collect, say what changed rather than quietly reissuing the text.
        Continued use of the site after a change means you accept the revised policy.
      </p>
    </LegalPage>
  )
}
