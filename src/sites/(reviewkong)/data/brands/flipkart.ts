/**
 * Brand page data for Flipkart (route: /brands/flipkart).
 *
 * SOURCES — every figure below comes from these pages, opened directly:
 *   - https://en.wikipedia.org/wiki/Flipkart — founded October 2007 by Sachin
 *     Bansal and Binny Bansal (IIT Delhi alumni, former Amazon employees),
 *     starting with online book sales; Walmart announced a 77% stake for
 *     $16bn on 9 May 2018, deal completed 18 August 2018; Big Billion Days
 *     began in 2014 and became a multi-day, app-exclusive event by 2015
 *   - https://techcrunch.com/2023/09/02/walmart-has-spent-3-5-billion-this-year-to-increase-stake-in-flipkart
 *     — Walmart spent a further $3.5bn in H1 2023 buying out other
 *     shareholders (Tiger Global, Accel, co-founder Binny Bansal and others),
 *     taking its stake to roughly 80%
 *   - https://stories.flipkart.com — Flipkart Minutes' "1,000 Micro
 *     Fulfilment Centers in 2 years" milestone. Note: the site's own
 *     customer/seller/category figures render as placeholder text ("M+",
 *     "L+") rather than concrete numbers, so no catalogue size, seller count
 *     or total user count is stated below — none could be verified
 *   - https://stories.flipkart.com/announcement/flipkart-launches-pay-later-making-flexible-credit-more-accessible-for-millions-of-indian-shoppers
 *     — Flipkart Pay Later's three repayment shapes (Pay Later up to 30
 *     days, Pay in 3, EMI over 3–12 months on mobiles/electronics/
 *     appliances/furniture), PayU Finance as lending partner, live across
 *     Flipkart, Myntra and Flipkart Minutes
 *   - https://www.flipkart.com/pages/plus-tnc — Flipkart Plus is a free
 *     Silver/Gold status earned through SuperCoins cashback and order
 *     history, not a paid membership; benefits are the cashback rate, an
 *     instant-discount offer during early sale access, SuperCoins
 *     redemption, and a Netflix Mobile plan for members placing 4+
 *     qualifying orders in a month. The T&Cs do not mention a
 *     delivery-speed guarantee or a return-pickup window, so neither is
 *     claimed below
 *   - https://seller.flipkart.com/seller-blog/what-is-cash-on-delivery and
 *     https://stories.flipkart.com/500-1000-cod-payments/ — cash on delivery
 *     exists but is restricted by pin code, product category and order value
 *   - Flipkart's Google Play listing ("Flipkart Online Shopping App") —
 *     4.5/5 from 7m+ ratings; a direct fetch of the store page returned only
 *     navigation chrome, so this figure is taken from the listing data as
 *     surfaced by search, not a rendered page
 *   - https://www.trustpilot.com/review/www.flipkart.com — the page itself
 *     blocks a direct fetch (HTTP 403), but search-surfaced review content
 *     from that exact URL shows recurring, specific complaint themes:
 *     delivery pickups that never happen, return-pickup and refund delays,
 *     counterfeit or misrepresented items (books with poor print quality,
 *     "new" items arriving as refurbished), and unprofessional support
 *     handling. No overall numeric TrustScore could be confirmed, so none
 *     appears below
 *   - Third-party shipping-forwarder pages (https://www.shoppre.com,
 *     https://myxborder.com) and quality-badge explainers
 *     (https://candid.technology/flipkart-assured/) — independently confirm
 *     Flipkart does not ship outside India, and that Flipkart Assured is a
 *     quality/fast-delivery badge on select listings, launched 2016
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * flipkart.com before launch and before each campaign. SuperCoins terms,
 * Pay Later eligibility and Walmart's exact ownership stake move without
 * notice. Catalogue size, seller count and total user count are deliberately
 * omitted — Flipkart does not publish a concrete current figure for any of
 * them. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const flipkart: BrandPage = {
  slug: 'flipkart',
  providerId: 'flipkart',
  metaTitle: 'Flipkart review 2026 — Pay Later, Plus, and the real risk',
  metaDescription:
    'An independent Flipkart review: how Pay Later and EMI actually work, what the free Plus tier unlocks, and the delivery and counterfeit complaints worth knowing first.',
  intro:
    'Flipkart is the marketplace most of India defaults to. Walmart has spent close to $20 billion building a stake now around 80%, its shopping app is the top-rated one in its category on Google Play, and Pay Later or EMI sits at checkout on most big-ticket items. What that scale does not buy is a spotless reputation: independent reviews carry specific, recurring complaints about missed delivery pickups and counterfeit items that are worth reading before a large order.',
  about: [
    'Sachin and Binny Bansal, both IIT Delhi alumni who had worked at Amazon, started Flipkart in October 2007 selling books online, the well-worn playbook for a first-generation marketplace. It grew into general retail long before Walmart announced a 77% controlling stake in May 2018, paying around $16 billion, with the deal completing that August. Walmart spent a further $3.5 billion in the first half of 2023 buying out other shareholders, including co-founder Binny Bansal, taking its ownership to roughly 80%. It still runs as an India-first marketplace, competing with Amazon on the same turf rather than folding into Walmart’s US operations.',
    'Flipkart does not publish a current, concrete catalogue size, seller count or user total on its own corporate pages, so none is repeated here. What it does confirm is Flipkart Minutes, its quick-commerce arm, which passed 1,000 micro fulfilment centres inside two years of launch. Checkout supports cash on delivery, though not on every pin code, product category or order value, plus Flipkart Pay Later: a three-way choice between a 30-day pay-later window, a three-instalment split, or EMI over 3 to 12 months on mobiles, electronics, appliances and furniture, underwritten by lending partner PayU Finance.',
    'Flipkart Plus, the loyalty tier, is not a subscription you buy — it is a free Silver or Gold status earned through SuperCoins cashback and order history, unlocking a higher cashback rate, an instant-discount offer during early access to sales like Big Billion Days, and a Netflix Mobile plan for members placing four or more qualifying orders in a month. Outside Plus, and outside listings carrying the Flipkart Assured badge introduced in 2016, the experience is closer to any large open marketplace: independent reviews describe missed delivery pickups, slow refunds and counterfeit or misrepresented items reaching buyers often enough to be a real, checkable pattern rather than a one-off.',
  ],
  facts: [
    { label: 'Founded', value: 'Oct 2007' },
    { label: 'Owner', value: 'Walmart (~80% stake)' },
    { label: 'Quick delivery', value: '1,000+ micro fulfilment hubs' },
    { label: 'Ships to', value: 'India only' },
  ],
  plans: {
    title: 'What it actually costs to buy',
    note: 'Flipkart Plus is earned, not purchased, and third-party marketplace sellers set their own return windows — check the listing before assuming Flipkart’s own policy applies.',
    items: [
      {
        name: 'Standard checkout',
        price: 'Free to browse; delivery fee varies by order and location',
        detail:
          'Cash on delivery exists but is restricted by pin code, category and order value. No membership is required to buy anything on the site.',
      },
      {
        name: 'Flipkart Plus',
        price: 'Free — a Silver or Gold status earned, not bought',
        detail:
          'Unlocked through SuperCoins cashback and order history. Gets a higher cashback rate, an instant-discount offer during early sale access, and a Netflix Mobile plan for members with 4+ qualifying monthly orders.',
        pick: true,
      },
      {
        name: 'Pay Later / EMI',
        price: '30-day Pay Later, a 3-instalment split, or EMI over 3–12 months',
        detail:
          'Underwritten by PayU Finance, aimed at mobiles, electronics, appliances and furniture. Check the exact terms at checkout — not every option is interest-free.',
      },
      {
        name: 'Big Billion Days',
        price: 'Deep discounts during the annual sale window',
        detail:
          'The flagship sale event, running since 2014. Plus members get early access with an instant-discount offer before the best stock sells out.',
      },
    ],
  },
  pros: [
    {
      title: 'One of the deepest catalogues built for a single country',
      body: 'Flipkart does not publish a current total, but the range spans electronics, fashion, groceries and general merchandise well beyond what most India-only rivals stock.',
    },
    {
      title: 'Flipkart Minutes for same-day essentials',
      body: 'Over 1,000 micro fulfilment centres now handle quick-commerce orders, so groceries and daily items arrive in a window closer to a convenience store than a marketplace.',
    },
    {
      title: 'Pay Later and EMI built into checkout',
      body: 'A 30-day pay-later window, a three-instalment split, or EMI over 3 to 12 months on big-ticket items, underwritten by PayU Finance rather than a single bank.',
    },
    {
      title: 'The highest-rated shopping app in its category',
      body: '4.5 stars on Google Play from more than 7 million ratings. Most Flipkart traffic is mobile, so an app that actually works is not a minor detail.',
    },
  ],
  cons: [
    {
      title: 'India only, no exceptions',
      body: 'Flipkart does not ship outside India; independent forwarding services exist precisely because Flipkart itself offers no direct international delivery.',
    },
    {
      title: 'Delivery pickups and refunds draw specific, recurring complaints',
      body: 'Independent reviews describe scheduled pickups that never happen and returns sitting unrefunded for weeks, with the in-app complaint system offering only pre-set responses.',
    },
    {
      title: 'Counterfeit and misrepresented items are a documented pattern',
      body: 'Reviewers report items sold as new arriving as refurbished, and specific quality failures like poorly printed books — outside "Flipkart Assured" tagged listings, checking a seller’s own rating is worth the extra minute.',
    },
  ],
  reputation: [
    { source: 'Google Play', value: 4.5, note: '7m+ ratings on the Android app' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.2,
      note: 'our composite across catalogue depth, checkout options and seller risk',
    },
  ],
  bestFor: [
    'Shoppers in India who want one default marketplace for electronics, fashion and groceries',
    'Big-ticket buyers who want Pay Later or EMI built into checkout',
    'Anyone who wants quick-commerce delivery on daily essentials via Flipkart Minutes',
    'Bargain hunters who plan purchases around Big Billion Days',
  ],
  notFor: [
    'Anyone outside India — there is no direct international shipping',
    'Buyers who want guaranteed authenticity without checking seller ratings first',
    'Shoppers who weight a spotless delivery and refund record over price and range',
  ],
  faq: [
    {
      q: 'Does Flipkart ship outside India?',
      a: 'No. Flipkart restricts delivery addresses to India, which is why third-party forwarding services exist to get Flipkart orders to buyers abroad — Flipkart itself offers no direct international shipping option.',
    },
    {
      q: 'What is Flipkart Plus and how do I get it?',
      a: 'It is a free Silver or Gold status, not a paid subscription. You earn into it through SuperCoins cashback and order history, and it unlocks a higher cashback rate, an instant-discount offer during early sale access, and a Netflix Mobile plan once you place four or more qualifying orders in a month.',
    },
    {
      q: 'Is it safe to buy from Flipkart’s marketplace sellers?',
      a: 'Mostly, but quality varies. Independent reviews describe counterfeit or misrepresented items reaching buyers often enough that checking a seller’s own rating, and favouring "Flipkart Assured" listings for anything valuable, is worth the extra step.',
    },
    {
      q: 'Can I pay in instalments?',
      a: 'Yes. Flipkart Pay Later offers a 30-day pay-later window, a three-instalment split, or EMI over 3 to 12 months on mobiles, electronics, appliances and furniture, underwritten by PayU Finance. Read the exact terms at checkout first.',
    },
    {
      q: 'When is the best time to buy?',
      a: 'Big Billion Days, running annually since 2014, is the flagship sale with the deepest discounts of the year. Flipkart Plus members get early access with an instant-discount offer before the best stock sells out.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'flipkart.com',
}
