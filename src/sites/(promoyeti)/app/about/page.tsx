import type { Metadata } from 'next'

import LegalPage from '../../components/LegalPage'
import { categories } from '../../data/categories'
import { SITE, inboxes } from '../../data/site'
import { codeCount, offerCount, stores } from '../../data/stores'

export const metadata: Metadata = {
  title: 'How we work',
  description: `What ${SITE.name} publishes, what it refuses to publish, how the offers are checked, and how the site is paid for.`,
  alternates: { canonical: '/about' },
}

/** Counts read from the data, so the page cannot claim a scale the site lost. */
const counts = {
  stores: stores.length,
  offers: offerCount(),
  codes: codeCount(),
  categories: categories.length,
}

export default function Page() {
  return (
    <LegalPage
      title={`How ${SITE.name} works`}
      updatedAt="25 August 2026"
      kicker="About"
      standfirst="A discount-code site with an unusual rule: we do not publish a code we have not seen. Here is what that costs us, and what it is worth to you."
    >
      <p>
        {SITE.name} indexes ways to pay less at online shops — {counts.stores} of them at the
        moment, across {counts.categories} categories, carrying {counts.offers} offers in total. We
        are not a shop and we are not a review site. Each page answers one question: what can I
        actually use at this store today, and what will stop it working?
      </p>

      <h2>The rule that shapes everything here</h2>
      <p>
        <strong>We do not invent codes.</strong> An offer appears on this site as a code only if
        somebody read that code on the merchant’s own page, in an affiliate network’s feed, or in an
        e-mail the merchant sent. If we cannot confirm one, we do not print a plausible-looking
        string and hope.
      </p>
      <p>
        This is not a slogan; it is enforced in the code that builds the site. The store registry
        refuses to compile an offer marked as a code with no code behind it, so a “reveal code”
        button that reveals nothing cannot ship even by accident. Right now that leaves us with{' '}
        <strong>
          {counts.codes} confirmed code{counts.codes === 1 ? '' : 's'}
        </strong>{' '}
        and {counts.offers - counts.codes} offers that work without one.
      </p>
      <p>
        We would rather tell you a shop has no code today than sell you thirty seconds of typing
        “SAVE20” into a box that rejects it. That is the entire difference between this site and
        most of the category.
      </p>

      <h2>What we publish instead</h2>
      <ul>
        <li>
          <strong>Deals that need no code.</strong> Outlet sections, multibuy bundles, member
          pricing, app-only fares, bank offers at checkout, term discounts. In several of these
          markets that is where the discount genuinely lives, and a code would be the worse option
          even if we had one.
        </li>
        <li>
          <strong>The market each storefront serves.</strong> A large share of these offers are
          single-country sites. Every store page states the market before it states a discount,
          because that is the fact most likely to make the page useless to the person reading it.
        </li>
        <li>
          <strong>The condition that kills the discount.</strong> Sale exclusions, minimum spends,
          per-passenger caps, renewal prices, fees that a percentage code does not touch. If an
          offer has one, it is printed under the offer.
        </li>
        <li>
          <strong>A date.</strong> Every offer and every store page carries the day it was last
          checked. An undated coupon page is telling you nothing.
        </li>
      </ul>

      <h2>How an offer gets checked</h2>
      <p>
        From the merchant’s own material: the promotions page, the terms attached to a promotion,
        the delivery and returns policy, the pricing page. Where a figure is a range or moves by
        country, we describe the shape of the offer rather than invent a number, and we say which
        market we looked at.
      </p>
      <p>
        We do not claim to have shopped at every store on this site, because we have not. Anyone
        telling you they personally tested {counts.stores} retailers is telling you something else
        as well.
      </p>

      <h2>What each category page is for</h2>
      <p>
        Discounting works differently in different markets, and the biggest saving is often not a
        code at all. Each category page says how the market actually prices:
      </p>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <strong>{category.name}.</strong> {category.blurb}
          </li>
        ))}
      </ul>

      <h2>How we are paid</h2>
      <p>
        Through affiliate commission. If you follow one of our links and buy something, the merchant
        may pay us a referral fee at no extra cost to you. Outbound links pass through our own{' '}
        <code>/click</code> redirect, which records the click and forwards you to the shop.
      </p>
      <p>
        What that does <em>not</em> buy: a position, a rating, or an offer we could not confirm.
        There is no paid placement on this site and no advertiser sees a page before it publishes.
        The full mechanics are on the <a href="/disclosure">affiliate disclosure</a> page.
      </p>
      <p>
        The honest limitation to state alongside that: every store here is one we can earn from. We
        do not currently list shops we have no commercial relationship with, so treat this as an
        index of the offers we cover rather than a survey of the whole internet.
      </p>

      <h2>Corrections</h2>
      <p>
        Retail terms change constantly and we get things wrong. If an offer here has expired,
        excludes something we did not mention, or never worked, write to{' '}
        <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a> with the page and what
        happened. We will check it, fix it, and re-date the page rather than editing quietly.
        Corrections jump the queue ahead of everything else in the inbox, including partnership
        mail.
      </p>
      <p>
        Found a code that works and is not listed? Send it. We will verify it before it goes up —
        which is the whole point — and we will say thank you.
      </p>

      <h2>Contact</h2>
      <p>
        Editorial and corrections: <a href={`mailto:${inboxes.editorial}`}>{inboxes.editorial}</a>.
        Partnerships and press:{' '}
        <a href={`mailto:${inboxes.partnerships}`}>{inboxes.partnerships}</a>. Privacy and data
        requests: <a href={`mailto:${inboxes.privacy}`}>{inboxes.privacy}</a>. More on what each is
        for is on the <a href="/contacts">contact page</a>.
      </p>
    </LegalPage>
  )
}
