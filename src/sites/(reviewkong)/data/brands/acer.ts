/**
 * Brand page data for Acer Store (route: /brands/acer).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://store.acer.com/en-us/returns-and-cancellations and
 *     https://store.acer.com/en-us/shipping-information — return window, RMA
 *     requirement, buyer-paid return shipping
 *   - https://www.acer.com/us-en/resellers/online-stores and
 *     https://store.acer.com/en-us/ — store model, product lines (Predator,
 *     ConceptD, Chromebook), per-country storefronts
 *   - https://acerrecertified.com/Content/Terms-of-Sale and
 *     https://acerrecertified.com/Content/FAQ — the separate Acer Recertified
 *     refurbished channel
 *   - https://www.affirm.com/ (Acer merchant financing) — Affirm instalment terms
 *   - https://www.trustpilot.com/review/www.acer.com — rating and review volume
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const acer: BrandPage = {
  slug: 'acer',
  providerId: 'acer',
  metaTitle: 'Acer Store review 2026 — pricing, returns, financing',
  metaDescription:
    'An independent review of Acer’s own online store: how the 15-day return window, the RMA process and Affirm financing work across its per-country sites.',
  intro:
    'Store.acer.com is Acer’s first-party outlet for its own laptops, desktops, monitors and the gaming-focused Predator and creator-focused ConceptD lines. Buying here means dealing with Acer directly instead of a retailer, which is the whole appeal and the whole risk: exclusive configurations set against Acer’s own returns process and its own patchy support reputation, run separately in every country it sells to.',
  about: [
    'Store.acer.com is not one global site but a set of separate country storefronts built on the same template, each with its own prices, taxes, promotions and return rules. Acer Inc. is a Taiwanese hardware maker founded in 1976, and the store exists to sell its own catalogue direct to buyers: mainstream Aspire and Swift laptops, Nitro and Predator gaming machines, ConceptD creator hardware, Chromebooks, monitors, projectors and peripherals, without a retailer sitting in between.',
    'The commercial pitch is access. Certain Predator and ConceptD configurations, and limited-run colourways, appear only on Acer’s own store rather than at third-party retailers, so buyers chasing a specific build often end up here regardless of price. Checkout supports Affirm, splitting a purchase into four interest-free payments or a longer instalment plan whose APR depends on credit and term. A separate outlet, Acer Recertified, sells factory-refurbished units at a discount under its own, different warranty.',
    'What buyers give up for that direct access is the safety net a large retailer usually provides. Returns require a Return Merchandise Authorization, the US window is a short 15 days, and the customer pays return shipping and carries the risk until Acer confirms receipt. Acer’s broader web and support presence also carries a weak reputation on Trustpilot, with recurring complaints about slow replies — worth weighing against the appeal of an exclusive configuration.',
  ],
  facts: [
    { label: 'Parent company', value: 'Acer Inc. (Taiwan)' },
    { label: 'Store model', value: 'One storefront per country' },
    { label: 'Returns window', value: '15 days (US store)' },
    { label: 'Financing', value: 'Affirm at checkout' },
  ],
  plans: {
    title: 'What it costs to buy direct',
    note: 'Acer’s own store rarely undercuts retailers on price; the reason to buy here is configuration access, not a discount. Affirm’s short interest-free plan is the only financing worth taking without checking the APR on the longer terms first.',
    items: [
      {
        name: 'Direct new-unit pricing',
        price: 'Acer’s own list price, no marketplace resellers',
        detail:
          'No third-party sellers are mixed into the listing, so condition and stock are guaranteed new; occasional clearance sales and referral promo codes are the only real discounts on offer.',
        pick: true,
      },
      {
        name: 'Affirm instalments',
        price: '4 interest-free payments, or 0–36% APR over longer terms',
        detail:
          'Approved instantly at checkout; the rate depends on credit and the term chosen, so the four-payment plan is the only option guaranteed to be interest-free regardless of credit history.',
      },
      {
        name: 'Acer Recertified (refurbished)',
        price: 'Below new-unit price, on a separate site',
        detail:
          'Factory-refurbished stock sold through its own storefront with its own warranty and return terms, entirely distinct from the new-hardware policy on store.acer.com itself.',
      },
    ],
  },
  pros: [
    {
      title: 'Configurations retailers do not stock',
      body: 'Certain Predator and ConceptD builds, and limited colourways, are sold only through Acer’s own store rather than through any third-party retail channel, so serious buyers end up here anyway.',
    },
    {
      title: 'Financing built directly into checkout',
      body: 'Affirm is offered right at checkout, including a genuinely interest-free four-payment option, without needing a separate app, a third-party approval step, or a card application elsewhere.',
    },
    {
      title: 'A distinct refurbished channel exists',
      body: 'Acer Recertified gives budget buyers a factory-refurbished route with its own dedicated warranty, rather than leaving all refurbished stock to unrelated, unaccountable third-party marketplace sellers to sort out.',
    },
    {
      title: 'No marketplace-seller condition lottery',
      body: 'Every unit ships from Acer itself, so there is no risk of a mixed-condition listing, a reseller shipping old stock, or unclear provenance on what actually arrives at your door.',
    },
  ],
  cons: [
    {
      title: 'Buyer pays to send anything back',
      body: 'Returns need an RMA number first, the US window is only 15 days, and the customer covers return shipping and carries the risk in transit until Acer confirms the item has arrived.',
    },
    {
      title: 'Support reputation is weak and inconsistent',
      body: 'Acer’s broader web presence carries a low Trustpilot score built on roughly a thousand reviews, with recurring complaints about slow support replies, hardware defects and unresolved repair tickets.',
    },
    {
      title: 'Every country runs its own separate store',
      body: 'There is no cross-border checkout: pricing, stock, active promotions and even which product lines are available at all differ depending on which country’s storefront a buyer lands on.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 2.6,
      note: '~1,200 reviews across Acer’s main web and support domain',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across configuration access, financing and support reputation',
    },
  ],
  bestFor: [
    'Buyers after a specific Predator or ConceptD configuration not sold elsewhere',
    'Anyone who wants Affirm’s four-payment interest-free option at checkout',
    'Budget buyers happy to consider Acer Recertified refurbished stock',
    'Shoppers who prefer buying direct from the manufacturer over a marketplace listing',
  ],
  notFor: [
    'Anyone who wants a long, no-questions-asked return window',
    'Buyers comparing prices first — retailers often match or beat Acer’s own store',
    'Shoppers who want reassurance from a strong, high-volume support rating',
  ],
  faq: [
    {
      q: 'Is Acer Recertified the same as store.acer.com?',
      a: 'No. Acer Recertified is a separate storefront selling factory-refurbished Acer units at a discount, with its own warranty and return terms that differ from the main store’s policy on new hardware, so check which site you are actually buying from.',
    },
    {
      q: 'Who pays for return shipping?',
      a: 'The buyer does. Acer requires a Return Merchandise Authorization before you send anything back, and shipping costs plus the risk of loss or damage in transit are the customer’s responsibility until Acer confirms the returned item has actually arrived at its warehouse.',
    },
    {
      q: 'Can I order from any country’s Acer store?',
      a: 'No. Store.acer.com runs as separate sites per country, each with its own pricing, tax treatment and stock. You need to use the storefront built for your own region; there is no cross-border checkout or shipping between different country sites at all.',
    },
    {
      q: 'Does Acer offer financing at checkout?',
      a: 'Yes, via Affirm: a four-payment interest-free plan for smaller purchases, or a longer instalment plan where the APR, somewhere between 0% and 36%, depends on your own credit profile and the repayment term you happen to choose right at checkout itself.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'store.acer.com',
}
