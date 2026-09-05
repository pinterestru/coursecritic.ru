import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { providers } from '../../data/providers'
import { SITE, inboxes } from '../../data/site'

export const metadata: Metadata = {
  title: 'Affiliate disclosure',
  description: `How ${SITE.name} earns money, how to tell which links pay us, which brands pay us nothing, and what commission does and does not change about a ranking.`,
  alternates: { canonical: '/disclosure' },
}

/**
 * The brands we rank or review that earn us nothing.
 *
 * Read out of the provider registry rather than typed here, because this is the
 * one claim on the page a reader can check against the markup: if a brand stops
 * being `tracked: false`, it has to disappear from this list in the same commit.
 */
const nonPartners = Object.values(providers)
  .filter((p) => p.tracked === false)
  .map((p) => p.name)
  .sort()

export default function Page() {
  return (
    <LegalPage
      title="Affiliate disclosure"
      updatedAt="25 August 2026"
      kicker="Disclosure"
      standfirst="A disclosure that is vague is not a disclosure. This one names the mechanism, the money and the exceptions."
    >
      <p>
        <strong>
          {SITE.name} earns money through affiliate commissions. Some links on this site pay us when
          you buy; none of them buy a position in a ranking.
        </strong>{' '}
        Everything below explains how that actually works, in enough detail that you can verify most
        of it yourself.
      </p>

      <h2>How the money reaches us</h2>
      <p>
        When you follow a commercial link here, it passes through a redirect on our own domain — a
        URL beginning <code>/click/</code> — which records the referral and forwards you to the
        company or to the affiliate network running its programme. If you then buy something, the
        company may pay us a percentage of the sale or a fixed fee per customer.
      </p>
      <p>
        You pay exactly what you would have paid arriving there any other way. The fee comes out of
        the company’s marketing budget; there is no version of the checkout where our link makes it
        more expensive. Commission is also paid on a delay and clawed back on refunds, which is
        worth knowing because it means we have no financial reason to push you toward a purchase you
        will send back.
      </p>

      <h2>How to tell which links pay us</h2>
      <ul>
        <li>
          Every guide carries the disclosure in plain language <strong>above the ranking</strong>,
          before the first commercial link appears, and it is repeated in the footer of every page
          on the site.
        </li>
        <li>
          Paying links are marked <code>rel=&quot;sponsored&quot;</code> in the page source and
          route through <code>/click/</code>. That is the machine-readable signal search engines
          expect — a supplement to the human-readable disclosure, never a substitute for it.
        </li>
        <li>
          Links to brands that pay us nothing are marked <code>rel=&quot;nofollow&quot;</code> and
          point straight at the company’s own site with no redirect and nothing recorded.
        </li>
        <li>
          You do not have to read the markup to find out. Where a ranked or reviewed brand is not a
          partner, the card says so on its face:{' '}
          <em>not an affiliate partner — this link earns us nothing</em>.
        </li>
      </ul>

      <h2>Which brands pay us nothing</h2>
      <p>
        Naming them is the cheapest way to make the point checkable. As of the date at the top of
        this page, {nonPartners.length} brands we recommend or rank earn us nothing at all:
      </p>
      <ul>
        {nonPartners.map((name) => (
          <li key={name}>
            <strong>{name}</strong>
          </li>
        ))}
      </ul>
      <p>
        Some of them run no affiliate programme in the first place; at least one declines to pay
        reviewers for traffic as a matter of policy, which we think is to its credit. They stay in
        the rankings because they earned the place. If one of them ever does start paying us, it
        moves off this list in the same change that adds the tracked link — the list above is
        generated from the same data that decides how each link is built, so it cannot quietly fall
        out of date.
      </p>

      <h2>What commission does not change</h2>
      <ul>
        <li>
          <strong>Placement.</strong> Rankings follow the criteria printed on the guide itself. A
          brand cannot buy a higher position and we do not sell one. Nobody outside the editorial
          side sees a ranking before it is published.
        </li>
        <li>
          <strong>Drawbacks.</strong> Every brand we cover gets a section on what does not work
          about it. Partners are not exempt, and we have never removed a criticism because a partner
          asked.
        </li>
        <li>
          <strong>Inclusion.</strong> A brand that deserves the place gets it whether or not there
          is money behind the link — see the list above.
        </li>
        <li>
          <strong>The verdict.</strong> Where the right answer for a particular reader is a product
          that pays us less or nothing, the guide says so in those words.
        </li>
      </ul>

      <h2>What we do not accept, at any price</h2>
      <ul>
        <li>Payment for a position in a ranking, a review score, or a place on a shortlist.</li>
        <li>
          Sponsored posts, advertorial, or copy written by a brand and published as editorial.
        </li>
        <li>
          Paid link insertions into existing articles — the most common request we get, and an
          automatic no.
        </li>
        <li>
          Removing or softening a documented drawback in exchange for a commercial relationship.
        </li>
        <li>
          Reviewing a brand we are otherwise financially involved with beyond the affiliate
          programme.
        </li>
      </ul>

      <h2>What it does change, honestly</h2>
      <p>
        Commercial reality deserves an honest account rather than a denial. We are more likely to
        write about categories where affiliate programmes exist, because that is what pays for the
        work: you will find a guide to VPNs here and not one to public library cards. Commission
        rates also differ between brands in ways we do not control and cannot always see in advance.
      </p>
      <p>
        So: <strong>within</strong> a category, the ranking is editorial and the rates play no part
        in it. <strong>Across</strong> categories, the economics influence what we cover first.
        Pretending otherwise would be the kind of claim this page exists to avoid making.
      </p>

      <h2>Prices, figures and accuracy</h2>
      <p>
        Prices, plan structures and promotional terms in these categories change monthly, and
        promotional pricing is designed to be hard to compare. Every page shows the date it was last
        reviewed. Treat our figures as a guide and the company’s own checkout as the authority — and
        if you find something out of date, tell us at{' '}
        <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a> and we will fix it and say
        that we did.
      </p>

      <h2>Advertising standards</h2>
      <p>
        This disclosure is written to meet the expectations of the advertising regulators in the
        markets we publish to — including the United States Federal Trade Commission’s endorsement
        guides, which require disclosure that is clear, conspicuous and placed before the
        endorsement, and the equivalent UK and EU rules on identifying commercial content. If you
        think a page here falls short of that standard, we would rather hear it from you than from a
        regulator: <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
      </p>
    </LegalPage>
  )
}
