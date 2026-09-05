import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { SITE, inboxes } from '../../data/site'
import { stores } from '../../data/stores'

export const metadata: Metadata = {
  title: 'Affiliate disclosure',
  description: `How ${SITE.name} makes money, what commission does and does not influence, and exactly what happens when you click an offer.`,
  alternates: { canonical: '/disclosure' },
}

export default function Page() {
  return (
    <LegalPage
      title="Affiliate disclosure"
      updatedAt="25 August 2026"
      kicker="Disclosure"
      standfirst="We are paid commission when you buy after following a link from this site. Here is the whole mechanism, including the parts that are inconvenient to admit."
    >
      <h2>The short version</h2>
      <p>
        {SITE.name} is an affiliate publisher. Every one of the {stores.length} shops on this site
        is a merchant we can earn a commission from. If you follow one of our links and buy
        something, the merchant — usually through an affiliate network — may pay us a referral fee.
        You pay the same price either way; the fee comes out of the merchant’s margin, not your
        total.
      </p>

      <h2>What happens when you click</h2>
      <p>
        Outbound buttons on this site do not link straight to the shop. They point at a path on our
        own domain, <code>/click/…</code>, which:
      </p>
      <ul>
        <li>
          checks the destination against a list of permitted merchant hosts that is generated from
          this site’s own store data — so a broken or tampered link cannot be used to bounce anyone
          off our domain to somewhere else;
        </li>
        <li>
          records the click with our affiliate tracking service, passing your IP address, browser
          user-agent and request headers so the network can attribute a later purchase;
        </li>
        <li>
          sets a short-lived cookie on our domain (24 hours) so a repeat click can be stitched to
          the same visit;
        </li>
        <li>redirects you to the merchant, or to the affiliate network’s own tracking URL.</li>
      </ul>
      <p>
        The merchant then sets its own cookies under its own policy, which we do not control. The{' '}
        <a href="/cookies">cookie notice</a> lists everything set on our side, and the{' '}
        <a href="/privacy">privacy policy</a> covers what is shared with the tracking service.
      </p>

      <h2>What commission does not buy</h2>
      <ul>
        <li>
          <strong>It does not buy an offer.</strong> No offer appears on this site unless we could
          confirm it from the merchant’s own material. A merchant cannot pay to have a code listed,
          and no merchant sees a page before it publishes.
        </li>
        <li>
          <strong>It does not buy a position.</strong> Store listings are alphabetical or by
          category. The “our pick” flag on a store page marks the offer we would use, and it is
          frequently the one that earns us nothing — a free membership tier, an off-airport
          collection, a suggestion to wait for a sale.
        </li>
        <li>
          <strong>It does not buy silence.</strong> Several pages here tell you the discount is not
          worth taking, that a subscription will renew at a much higher price, that the shop does
          not serve your country, or — in one case — that the product is a speculative investment
          you can lose money on. Those pages earn less. They stay as they are.
        </li>
      </ul>

      <h2>What you should know that is less comfortable</h2>
      <p>
        Because we only list merchants we have a commercial relationship with, this site is an index
        of the offers we cover — not a complete survey of everywhere you could shop. A better deal
        may exist at a retailer that is not here, for no reason other than that we do not have a
        programme with them. Several store pages say exactly this and send you to compare elsewhere.
      </p>
      <p>
        We take no payment for a review, no sponsored posts and no paid link insertions, and we do
        not sell placement in any list on this site.
      </p>

      <h2>Regulatory position</h2>
      <p>
        This disclosure is provided to meet advertising and consumer-protection expectations
        including the US Federal Trade Commission’s endorsement guidance and equivalent rules in the
        UK and EU. Commercial links across the site carry a <code>sponsored</code> relationship
        attribute in the markup, and store pages state that we earn commission.
      </p>

      <h2>Questions</h2>
      <p>
        Anything about how we are funded, or a specific commercial relationship:{' '}
        <a href={`mailto:${inboxes.partnerships}`}>{inboxes.partnerships}</a>. Anything about an
        offer being wrong: <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
      </p>
    </LegalPage>
  )
}
