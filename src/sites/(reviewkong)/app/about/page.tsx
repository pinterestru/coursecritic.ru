import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { articles } from '../../data/articles'
import { brandPages } from '../../data/brands'
import { authors, providers } from '../../data/providers'
import { SITE, inboxes } from '../../data/site'
import { verticals } from '../../data/verticals'

export const metadata: Metadata = {
  title: 'About us',
  description: `Who writes ${SITE.name}, how a review is actually researched, how the scores are built, and how the site is funded.`,
  alternates: { canonical: '/about' },
}

/** Counts read from the data so the page cannot claim a scale the site lost. */
const counts = {
  verticals: verticals.length,
  brands: brandPages.length,
  guides: articles.length,
  nonPartners: Object.values(providers).filter((p) => p.tracked === false).length,
}

export default function Page() {
  return (
    <LegalPage
      title={`About ${SITE.name}`}
      updatedAt="25 August 2026"
      kicker="About"
      standfirst="An editorial project about things people buy online — funded by commission, and specific about what that does and does not buy."
    >
      <p>
        {SITE.name} covers the products and storefronts people buy from online: VPNs and security
        software, flights, hotels and experiences, the large retail marketplaces, fashion, consumer
        tech, courses, games and everyday online services. We do not sell any of them. We compare
        them, say which one we would buy, and publish the reasons someone might reasonably disagree.
      </p>
      <p>
        At the moment that is <strong>{counts.brands} brand reviews</strong> and{' '}
        <strong>{counts.guides} ranked buying guides</strong> across{' '}
        <strong>{counts.verticals} categories</strong>. It grows slowly and on purpose: a category
        gets added when someone here can say something useful about it that is not already on the
        first page of results.
      </p>

      <h2>What we cover</h2>
      <ul>
        {verticals.map((v) => (
          <li key={v.id}>
            <strong>{v.name}.</strong> {v.blurb}
          </li>
        ))}
      </ul>

      <h2>Who writes it</h2>
      <p>
        Rankings are signed, because a ranking is an argument and someone has to stand behind it.
        Categories that carry brand reviews but no ranked guide yet are written by the reviews desk
        rather than by a byline invented to fill the field.
      </p>
      <ul>
        {/* One byline can cover several verticals, so dedupe before listing. */}
        {Array.from(new Set(Object.values(authors))).map((author) => (
          <li key={author.name}>
            <strong>{author.name}</strong> — {author.role}. {author.bio}
          </li>
        ))}
      </ul>

      <h2>How a review is actually researched</h2>
      <p>
        This is where most affiliate sites are vague, so we would rather be exact — including about
        the limits.
      </p>
      <ul>
        <li>
          <strong>Primary documents first.</strong> The pricing page, the terms of service, the fee
          schedule, the returns and cancellation policy, the insurance policy wording, the
          transparency or audit report. Where a claim in a review comes from one of those, that is
          the document it came from.
        </li>
        <li>
          <strong>Independent test data over vendor benchmarks.</strong> In security, that means
          detection results from the independent labs — AV-TEST and AV-Comparatives — rather than
          numbers a vendor produced about itself. In categories where no credible independent
          testing exists, we say so instead of implying there is some.
        </li>
        <li>
          <strong>Aggregate customer experience, with the source named.</strong> Where we print a
          third-party rating we name who produced it and, alongside it, roughly how large the sample
          behind it is — because a perfect score on a handful of reviews tells you less than a
          mediocre one on tens of thousands. Where a rating could not be read from a source we
          trust, we leave it out rather than estimate one.
        </li>
        <li>
          <strong>Hands-on where we have it, and silence where we do not.</strong> Some of what we
          cover has been used at length by the person writing about it, and the review reads like
          it. For the retail and booking brands, most reviews are desk research from published
          material.{' '}
          <strong>
            We do not claim to have bought from every store on this site, because we have not.
          </strong>{' '}
          Anyone telling you they personally tested {counts.brands} brands is telling you something
          else as well.
        </li>
      </ul>

      <h2>How the ranking works</h2>
      <p>Three rules apply to everything published here.</p>
      <ul>
        <li>
          <strong>Price at renewal, not at the introductory rate.</strong> The promotional first
          term is a marketing number; the renewal is the one you pay repeatedly. We print both and
          rank on the second.
        </li>
        <li>
          <strong>Publish the criteria on the guide.</strong> Every ranking lists what it was judged
          on, above the ranking itself, so you can disagree with the weighting rather than guess at
          it. The criteria differ by category — what matters about a hosting plan is not what
          matters about an insurance policy.
        </li>
        <li>
          <strong>End by sending people elsewhere.</strong> Every guide closes by pointing several
          kinds of reader at something other than the number one — the cheapest option, the most
          private one, the one with the better support — because saying “this is wrong for you” is
          the fastest way for a buying guide to be useful.
        </li>
      </ul>
      <p>
        The score attached to a brand is our own composite on a five-point scale, not an average of
        customer reviews and not a rating any brand paid for. It exists to make the ordering legible
        at a glance; the reasoning under it is the part worth reading, and where the two seem to
        disagree, trust the text.
      </p>

      <h2>How we are funded</h2>
      <p>
        Through affiliate commissions. If you buy something after following one of our links, the
        company may pay us a referral fee at no extra cost to you. It does not buy placement:{' '}
        {counts.nonPartners} of the brands we rank or recommend pay us nothing at all, and they are
        named on the <a href="/disclosure">affiliate disclosure</a> page along with the full
        mechanics. We take no sponsored posts, no paid link insertions and no payment for a position
        in a ranking.
      </p>

      <h2>Corrections</h2>
      <p>
        Prices and terms in these categories change constantly, and we get things wrong. Every page
        carries the date it was last reviewed. If something is inaccurate, write to{' '}
        <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a> with the page and, if you
        have one, the source — we will correct it, update the review date, and say that we did
        rather than editing quietly. Corrections jump the queue ahead of everything else in the
        inbox, including partnership mail.
      </p>

      <h2>Contact</h2>
      <p>
        Editorial and corrections: <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
        Partnerships and press:{' '}
        <a href={`mailto:${inboxes.partnerships}`}>{inboxes.partnerships}</a>. Privacy and data
        requests: <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>. More on what each one
        is for is on the <a href="/contacts">contact page</a>.
      </p>
    </LegalPage>
  )
}
