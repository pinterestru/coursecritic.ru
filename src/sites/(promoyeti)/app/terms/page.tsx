import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { SITE, inboxes, siteUrl } from '../../data/site'

export const metadata: Metadata = {
  title: 'Terms of use',
  description: `The terms on which ${SITE.name} is published: what the offers are, what they are not, and the limits of what we can be responsible for.`,
  alternates: { canonical: '/terms' },
}

export default function Page() {
  return (
    <LegalPage
      title="Terms of use"
      updatedAt="25 August 2026"
      standfirst="What this site is, what it is not, and the limits of what an information site can be responsible for."
    >
      <h2>1. What this site is</h2>
      <p>
        {SITE.name}, at <a href={siteUrl}>{SITE.domain}</a>, is an information site that indexes
        discount codes and offers at third-party shops. We do not sell any product or service listed
        here, we do not process payments, and we are not party to any contract you enter with a
        merchant.
      </p>

      <h2>2. Offers are information, not a promise</h2>
      <p>
        Every offer on this site is a statement about what a merchant was publishing at the date
        printed on the page. Merchants change, cap, restrict and withdraw promotions without notice,
        frequently without updating their own pages first. An offer listed here is therefore not a
        guarantee that it will work when you try it.
      </p>
      <p>
        We publish only offers we could confirm at the time of checking, and every one carries its
        check date. That is the standard we hold ourselves to. It is not the same thing as a
        warranty, and we do not offer one.
      </p>

      <h2>3. Your contract is with the merchant</h2>
      <p>
        When you follow a link from this site and buy something, the contract is between you and the
        shop. Price, availability, delivery, warranty, returns, refunds, cancellations and disputes
        are governed by that shop’s terms and by your consumer rights against them. We cannot see
        your order, alter it, refund it or intervene in a dispute.
      </p>

      <h2>4. Affiliate relationships</h2>
      <p>
        We are paid commission on qualifying purchases made through links on this site. The full
        mechanism is set out on the <a href="/disclosure">affiliate disclosure</a> page and it is
        part of these terms.
      </p>

      <h2>5. Nothing here is professional advice</h2>
      <p>
        The content on this site is general commercial information. It is not financial, legal, tax,
        insurance, medical or investment advice, and it is not personalised to your circumstances.
        This matters especially for the categories where it could be mistaken for advice — insurance
        products, subscriptions with financial consequences, and anything involving digital assets,
        where capital is genuinely at risk. Take your own advice before committing money you cannot
        afford to lose.
      </p>

      <h2>6. Third-party sites</h2>
      <p>
        Outbound links lead to sites we do not operate and are not responsible for. Their content,
        terms, privacy practices and security are theirs. A link is not an endorsement beyond what
        the page around it actually says.
      </p>

      <h2>7. Intellectual property</h2>
      <p>
        The text, layout, design and code of this site belong to us. Merchant names, logos and
        trademarks belong to their owners and are used for identification and description —
        nominative fair use — and do not imply endorsement by or affiliation with those owners
        beyond the affiliate relationships disclosed. You may quote or link to our pages with
        attribution; you may not republish them wholesale or scrape the site to reproduce it.
      </p>

      <h2>8. Acceptable use</h2>
      <p>
        Do not attempt to disrupt the service, circumvent its technical measures, or use automated
        tools to harvest the site at a rate that degrades it for other people.
      </p>

      <h2>9. Liability</h2>
      <p>
        The site is provided as it is. To the fullest extent permitted by law we exclude liability
        for loss arising from reliance on information here — including an offer that has expired,
        changed, excluded your purchase, or turned out not to apply to your country. Nothing in
        these terms limits liability for fraud, for death or personal injury caused by negligence,
        or for anything else that cannot lawfully be excluded, and nothing here affects your
        statutory consumer rights against a merchant.
      </p>

      <h2>10. Changes</h2>
      <p>
        These terms may change; the date at the top of this page tracks that. Continuing to use the
        site after a change means you accept the current version.
      </p>

      <h2>11. Contact</h2>
      <p>
        Questions about these terms: <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>
        .
      </p>
    </LegalPage>
  )
}
