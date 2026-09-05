/**
 * Brand page data for New Balance (route: /brands/newbalance).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/New_Balance — founding (1906, Boston),
 *     ownership (Davis family, since 1972), employee count
 *   - https://www.heddels.com/2019/07/new-balance-brand-history-philosophy-iconic-products/
 *     — founding history detail
 *   - https://wwd.com/footwear-news/shoe-industry-news/new-balance-global-sales-2025-sneakers-apparel-1238615804/
 *     and https://finance.yahoo.com/news/new-balance-sales-jump-20-in-2024-reach-record-78-billion-194451442.html
 *     — reported revenue, $7.8bn (2024) and $9.2bn (2025)
 *   - https://www.classaction.org/news/roughly-30-of-each-made-in-usa-new-balance-sneaker-is-made-outside-u.s.-class-action-alleges
 *     and https://truthinadvertising.org/articles/new-balance-an-iconic-made-in-usa-brand-defies-ftc-law/
 *     — the "Made in USA" domestic-value standard, named factories and the
 *     pending class action disputing the claim
 *   - https://www.trustpilot.com/review/www.newbalance.com — US TrustScore and
 *     review volume, opened directly
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 * The newbalance.com returns and membership pages themselves returned a bot
 * block on every fetch attempt during research — the return/membership terms
 * below come from secondary sources describing those pages, not a page we
 * opened directly, and should be re-checked against the live site.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const newbalance: BrandPage = {
  slug: 'newbalance',
  providerId: 'newbalance',
  metaTitle: 'New Balance review 2026 — USA line, returns, Trustpilot',
  metaDescription:
    'An independent New Balance review: what the "Made in USA" premium actually buys, how free membership changes shipping and returns, and why Trustpilot rates it so low.',
  intro:
    'New Balance has manufactured shoes in New England since 1906, stayed privately held while every major rival went public, and now backs a defined "Made in USA" collection with five named domestic factories. It also carries one of footwear’s worst Trustpilot scores and a live class action disputing what "Made in USA" actually means on some models. Both things are true at once, and worth knowing before you pay a premium for the domestic-made line.',
  about: [
    'New Balance began in 1906 as the New Balance Arch Support Company, founded in Boston by William Riley to sell arch supports rather than running shoes. It stayed obscure for decades before pivoting into performance footwear, and today sells running, training, lifestyle sneakers and team-sport gear through subsidiaries Warrior Sports and Brine. The detail that separates it from every major rival: it has been privately held since the Davis family bought the company in 1972, and is regularly described as the only major athletic-footwear maker still outside public or private-equity ownership.',
    'Manufacturing is where New Balance tries to differentiate itself hardest. Five New England factories — in Skowhegan and Norway, Maine, and Lawrence and Methuen, Massachusetts — supply its "Made in USA" collection, built to a stated standard of at least 70 percent domestic value; a new plant in Londonderry, New Hampshire is due to open in early 2026. That claim is not uncontested: a filed class action alleges that roughly 30 percent of components in some "Made in USA" models, including the soles, are sourced abroad, and a separate advertising-watchdog complaint makes a similar argument. The rest of the catalogue is imported and priced accordingly.',
    'Commercially, New Balance has been growing fast: reported revenue climbed from $7.8 billion in 2024 to $9.2 billion in 2025, a fifth consecutive year of double-digit growth, with the company talking publicly about reaching $10 billion. Free membership on newbalance.com adds free shipping and free returns plus early access to selected releases; skip it and a return costs a restocking fee. None of that scale shows up in the brand’s public service reputation — its US Trustpilot page sits at a startlingly low 1.5 out of 5 across roughly 1,500 reviews, with slow shipping and unresponsive support as the recurring complaint.',
  ],
  facts: [
    { label: 'Founded', value: '1906, Boston' },
    { label: 'Ownership', value: 'Privately held since 1972' },
    { label: 'Manufacturing', value: '5 New England factories' },
    { label: 'Returns', value: '45 days (members: free)' },
  ],
  plans: {
    title: 'How the pricing works',
    note: 'The imported core range and the domestically-made "USA" collection are priced very differently, and only free members skip the return restocking fee.',
    items: [
      {
        name: 'Core imported range',
        price: 'Standard retail pricing',
        detail:
          'The bulk of the running, training and lifestyle catalogue is manufactured overseas and priced accordingly, with no premium for domestic labour.',
      },
      {
        name: '"Made in USA" collection',
        price: 'A premium over the imported range',
        detail:
          'Specific models — the 990-series, 992, 993 and 1540v3 — cost more, built to a stated "70 percent domestic value" standard that a pending class action disputes.',
      },
      {
        name: 'Free membership',
        price: 'Free to join',
        detail:
          'Unlocks free shipping and free returns, early access to selected releases and a birthday offer. Skip it and a return costs a restocking fee.',
        pick: true,
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely deep catalogue in one place',
      body: 'Running, training, lifestyle sneakers and team-sport gear via Warrior and Brine sit under one roof, covering most athletic-footwear needs without shopping across several other retailers.',
    },
    {
      title: 'Domestic manufacturing you can actually point to',
      body: 'Five named New England factories, plus a new Londonderry, New Hampshire plant opening in early 2026, back the "Made in USA" collection with real production sites rather than a marketing label.',
    },
    {
      title: 'Free membership pays for itself immediately',
      body: 'Joining costs nothing and removes the restocking fee non-members pay on returns, while adding free shipping, early access to selected releases and a birthday offer.',
    },
    {
      title: 'The only major privately held athletic-shoe maker',
      body: 'Family-owned since the Davis family bought the company in 1972, which New Balance points to as freedom from the quarterly-earnings pressure that shapes public rivals’ product decisions.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot’s aggregate score is genuinely bad',
      body: 'The US Trustpilot page sits at 1.5 out of 5 across roughly 1,500 reviews, with recurring complaints about slow shipping, wrong items received and unresponsive customer support.',
    },
    {
      title: '"Made in USA" is disputed, not settled',
      body: 'A filed class action alleges roughly 30 percent of components in some "Made in USA" shoes, including the soles, are sourced abroad — a live legal dispute over what the claim means.',
    },
    {
      title: 'Fit varies by model, not just by foot',
      body: 'Some models run true to size, others (reviewers single out the 574) run small — worth checking a model-specific fit guide rather than assuming your usual New Balance size carries over.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.5,
      note: 'US storefront, roughly 1,500 reviews — slow shipping and support are the recurring complaints',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite weighs catalogue depth and named domestic manufacturing against a poor public service record',
    },
  ],
  bestFor: [
    'Runners and lifestyle-sneaker buyers who want one catalogue covering most needs',
    'Buyers who specifically want the domestically-manufactured "Made in USA" line',
    'Shoppers happy to create a free account for free shipping and returns',
    'Anyone who prefers buying from the brand itself rather than a marketplace reseller',
  ],
  notFor: [
    'Buyers who have had a bad support experience elsewhere — Trustpilot’s complaint volume is hard to ignore',
    'Shoppers who need certainty every stitch of a "Made in USA" shoe was made domestically',
    'Anyone chasing the lowest possible price — Joe’s New Balance Outlet usually undercuts newbalance.com',
  ],
  faq: [
    {
      q: 'Is New Balance actually privately owned?',
      a: 'Yes. The Davis family bought the company in 1972 and has held it ever since, which New Balance and outside coverage both describe as unusual for a footwear maker this size — most direct rivals answer to public shareholders or private-equity owners instead.',
    },
    {
      q: 'What does "Made in USA" mean on a New Balance shoe?',
      a: 'New Balance applies its own standard — at least 70 percent domestic value — to specific models like the 990-series, 992, 993 and 1540v3, made across five New England factories. A filed class action disputes that figure for some models, alleging closer to 30 percent of components, including soles, are actually sourced abroad.',
    },
    {
      q: 'Does New Balance ship internationally?',
      a: 'Yes, well beyond the US — New Balance sells through its own regional sites and authorised retailers across a large number of markets worldwide. Availability, sizing runs and pricing vary by region, so check the local site for your country rather than assuming the US catalogue and policies apply.',
    },
    {
      q: 'How does the return policy work?',
      a: 'Standard returns run 45 days from the ship or purchase date, refunded to the original payment method. Non-members pay a small restocking fee per return; free members do not, which is one of the clearest reasons to create an account before checking out as a guest.',
    },
    {
      q: 'Is New Balance’s own outlet the same as Joe’s New Balance Outlet?',
      a: 'Effectively, yes. Joe’s New Balance Outlet started as an independent reseller of surplus New Balance stock but was bought by New Balance Athletics in the early 2000s and now operates as the brand’s own clearance channel, selling past-season stock online rather than at newbalance.com’s regular prices.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'newbalance.com',
}
