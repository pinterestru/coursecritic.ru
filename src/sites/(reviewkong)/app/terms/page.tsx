import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: `The terms on which ${SITE.domain} is published: what the Site is, the limits of the information on it, what you may reuse, and where liability ends.`,
  alternates: { canonical: '/terms' },
}

export default function Page() {
  return (
    <LegalPage
      title="Terms of use"
      updatedAt="25 August 2026"
      standfirst="Short, and meant to be readable. The important clause is the second one: this is journalism, not advice."
    >
      <p>
        By using <strong>{SITE.domain}</strong> (“the Site”) you accept these terms. If you do not
        accept them, please do not use the Site. “We” and “us” mean the operator of the Site; “you”
        means the person reading it.
      </p>

      <h2>What this site is</h2>
      <p>
        {SITE.name} is an independent editorial publication. We are not a retailer, a marketplace, a
        travel agent, a broker, an insurer, a hosting company or an agent of any of them. We do not
        sell the products described here, we do not take bookings or payments, and{' '}
        <strong>we are not a party to any contract you enter into</strong> with a company you found
        through the Site. Your rights in that purchase are against that company, under its terms and
        the consumer law that applies to it.
      </p>

      <h2>Information, not advice</h2>
      <p>
        Everything published here is general information and editorial opinion, written for a
        worldwide readership and not tailored to your circumstances. It is not legal, financial,
        insurance, tax or security advice. Insurance in particular varies by country of residence,
        age, destination and activity, and a policy that suits the person who wrote a guide may
        exclude exactly the thing you needed cover for: read the actual policy wording for your own
        situation before you buy. The same caution applies to security software, where the right
        answer depends on what you are protecting and from whom.
      </p>

      <h2>Accuracy and availability</h2>
      <p>
        We take reasonable care, and prices, features, plan structures and terms in these categories
        still change constantly — sometimes between our checking a page and your reading it. Every
        page shows the date it was last reviewed, and the company’s own page is always the authority
        on its current offer. We give no warranty that the Site is accurate, complete, error-free or
        continuously available, and we may change, suspend or withdraw any part of it without
        notice. Corrections are welcome at{' '}
        <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
      </p>

      <h2>Commercial links</h2>
      <p>
        Some links on the Site earn us a commission when you buy, at no extra cost to you. They are
        disclosed above the first such link on every guide, again in the footer, and in full on our{' '}
        <a href="/disclosure">affiliate disclosure</a> page, which also names the brands that pay us
        nothing. Commission does not affect ranking or verdict. We do not control the third-party
        sites those links lead to and are not responsible for their content, their terms, their
        prices or their products.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>
          use the Site unlawfully, or in a way that damages it, overloads it or interferes with
          anyone else’s use of it;
        </li>
        <li>
          scrape, harvest or systematically copy the Site at a scale that burdens the servers, or
          circumvent any technical restriction on access;
        </li>
        <li>
          misrepresent your affiliation with us, or present our content as endorsing a product in a
          way we did not.
        </li>
      </ul>

      <h2>Intellectual property</h2>
      <p>
        The text, rankings, scoring, layout and design of the Site belong to {SITE.name} unless
        stated otherwise. You may quote a short extract with a visible credit and a link back for
        the purpose of review, comment, news reporting or ordinary discussion — that is what
        quotation is for and we are glad of it.
      </p>
      <p>
        You may not republish whole pages or substantial parts of them, reproduce our rankings as
        your own, or use the content as training data for a commercial machine-learning model,
        without written permission. Third-party names, logos and trade marks are the property of
        their owners and are used here descriptively, to identify the products under discussion.
        That use does not imply any endorsement of us by them.
      </p>

      <h2>If you think we have infringed your rights</h2>
      <p>
        Write to <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a> identifying the
        material, the right you hold and where the original appears. We will investigate promptly
        and remove or credit anything we should not have published. That is a faster route than a
        formal notice and we would rather you took it.
      </p>

      <h2>Liability</h2>
      <p>
        To the fullest extent permitted by law, {SITE.name} is not liable for any loss or damage
        arising from your use of, or reliance on, the Site — including any purchase you make from a
        company you found through it, any loss of profit, data or opportunity, and any loss arising
        because a price or term had changed since we checked it.
      </p>
      <p>
        Nothing in these terms excludes or limits liability that cannot lawfully be excluded,
        including liability for death or personal injury caused by negligence, or for fraud. If you
        are a consumer, nothing here affects your statutory rights.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms and any dispute arising out of them are governed by the law of the jurisdiction
        in which the operator of the Site is established, whose courts have non-exclusive
        jurisdiction. If you are a consumer resident elsewhere, you keep the protection of the
        mandatory consumer law of your own country and may bring proceedings there. The operator’s
        registered details are available on request from{' '}
        <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
      </p>

      <h2>General</h2>
      <p>
        If any provision of these terms is found unenforceable, the rest continue to apply. Our not
        enforcing a term on one occasion does not waive it. These terms are the entire agreement
        between us about your use of the Site.
      </p>

      <h2>Changes</h2>
      <p>
        We may amend these terms; the date at the top of this page shows when they were last
        changed, and continued use of the Site afterwards means you accept the amended version.
        Questions go to <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
      </p>
    </LegalPage>
  )
}
