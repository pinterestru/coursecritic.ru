/**
 * Brand page data for Victoria’s Secret Gulf (route: /brands/victoriassecret).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.victoriassecret.ae/en/returns-refunds — 14-day return window,
 *     exclusions (underwear, swimwear, lingerie, fragrances, health & beauty),
 *     refund-by-original-payment-method rule including Aura Credits
 *   - https://www.victoriassecret.ae/en/delivery-information — delivery scope
 *     (all areas across the UAE); no stable fee/threshold figure is published
 *   - https://www.franchisemart.in/franchise/victoria-s-secret-announces-franchise-partnership-with-alshaya/
 *     and https://www.alshaya.com/en/locations/united-arab-emirates/victoria-s-secret/
 *     — confirms Alshaya Group (M.H. Alshaya Co.) operates Victoria’s Secret
 *     under franchise across the Gulf, including the UAE
 *   - https://www.alshaya.com/en/media-centre/alshaya-news/alshaya-launches-aura-loyalty-programme-in-united-arab-emirates/
 *     — Aura is Alshaya’s own cross-brand loyalty programme (1M+ UAE members),
 *     not a Victoria’s Secret-specific scheme
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Trustpilot shows
 * only a single review for victoriassecret.ae — far too thin to count as a
 * verified aggregate — so no Trustpilot figure appears below. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const victoriassecret: BrandPage = {
  slug: 'victoriassecret',
  providerId: 'victoriassecret',
  metaTitle: 'Victoria’s Secret UAE review 2026 — returns, delivery, Aura',
  metaDescription:
    'An independent review of Victoria’s Secret’s UAE storefront: the Alshaya franchise behind it, the 14-day return window, and why lingerie is excluded from it.',
  intro:
    'Victoriassecret.ae is not run by Victoria’s Secret’s American head office. It is operated under franchise by Alshaya Group, the Kuwait-based retail conglomerate that also runs H&M, Starbucks and Foot Locker across the Gulf. That matters because prices, stock and policy are set locally, not in Ohio: the return window is shorter than shoppers used to the US site might expect, and the categories Victoria’s Secret is best known for — underwear, lingerie, swimwear — are excluded from returns altogether.',
  about: [
    'Victoria’s Secret’s UAE storefront is run by M.H. Alshaya Co., the Kuwait-based retail group that holds Middle East franchise rights to dozens of Western brands — H&M, Starbucks, Foot Locker, Bath & Body Works and Ulta Beauty among them. Alshaya announced its Victoria’s Secret franchise partnership to bring the brand into the Gulf, and the group now runs Victoria’s Secret stores across the UAE alongside other Gulf markets. The practical effect: this is a licensed operation with its own pricing, stock levels and customer-service policy, not a mirror of victoriassecret.com.',
    'The catalogue mirrors the US brand — bras, lingerie, sleepwear, swimwear, beauty and the PINK sub-line — but availability and promotions run on the Gulf retail calendar, not the American one. Because Alshaya operates the storefront, purchases also plug into Aura, Alshaya’s own cross-brand loyalty programme used by more than a million members across the UAE, rather than any Victoria’s Secret-specific rewards scheme. That is a genuine perk if you already shop other Alshaya-run brands, and irrelevant if you do not.',
    'The return policy is the detail most likely to catch out anyone used to the US site: goods must go back within 14 days, refunds depend on the original payment method (including Alshaya’s own Aura Credits in some cases), and the exclusions list rules out underwear, swimwear, lingerie, fragrances and health and beauty items — precisely the categories the brand is best known for. Read the exclusions before buying anything you might want to send back.',
  ],
  facts: [
    { label: 'Operator', value: 'Alshaya Group (franchise)' },
    { label: 'Market', value: 'UAE only' },
    { label: 'Returns', value: '14 days, many exclusions' },
    { label: 'Loyalty', value: 'Alshaya Aura programme' },
  ],
  plans: {
    title: 'How delivery and returns actually work',
    note: 'This is a franchise operation, so US Victoria’s Secret policies (free shipping over a dollar threshold, generous return windows) do not carry over — the UAE site sets its own terms.',
    items: [
      {
        name: 'Standard delivery',
        price: 'Fee applies below an order threshold',
        detail:
          'Delivers across the UAE. No stable free-delivery threshold is published — it shifts with promotions, so check at checkout.',
        pick: true,
      },
      {
        name: 'Returns (14 days)',
        price: 'Delivery fee refunded only on a full return',
        detail:
          'Partial returns forfeit the original delivery charge. Underwear, lingerie, swimwear, fragrances and health & beauty items cannot be returned at all.',
      },
      {
        name: 'Aura loyalty',
        price: 'Free to join',
        detail:
          'Points and perks apply across Alshaya’s other UAE brands too, including H&M and Starbucks — not a Victoria’s Secret-exclusive scheme.',
      },
    ],
  },
  pros: [
    {
      title: 'A licensed local presence in a market the US site does not reach',
      body: 'Victoria’s Secret does not sell directly to the UAE from its US site, so a properly licensed local storefront is the more reliable way to buy current stock and get local customer service.',
    },
    {
      title: 'Backed by an experienced regional retailer',
      body: 'Alshaya has run Western retail franchises across the Gulf for decades and operates dozens of well-known brands. That track record counts for more than a standalone regional start-up would offer.',
    },
    {
      title: 'Aura loyalty stacks across other Alshaya brands',
      body: 'Points earned shopping Victoria’s Secret carry over to Alshaya’s other UAE brands, including H&M and Starbucks, which rewards someone who already shops the group rather than being a single-brand perk.',
    },
    {
      title: 'Local delivery across the UAE',
      body: 'Orders are delivered within the UAE rather than shipped from overseas, meaning shorter transit times and fewer customs surprises than ordering from Victoria’s Secret’s US site directly.',
    },
  ],
  cons: [
    {
      title: 'The core product category is excluded from returns',
      body: 'Underwear, lingerie, swimwear, fragrances and health & beauty items cannot be returned, per the site’s own returns page. For a lingerie retailer, that rules out returning most of what it actually sells.',
    },
    {
      title: 'A 14-day window, not a generous US-style policy',
      body: 'Shoppers coming from Victoria’s Secret’s American site, where policies run more forgiving, will find the UAE return window considerably tighter — 14 days from delivery, with no exceptions stated.',
    },
    {
      title: 'Not the same company as Victoria’s Secret in the US',
      body: 'Prices, stock, promotions and customer service are all set by Alshaya’s regional team, not head office. A promotion or product visible on the US site may simply not exist here.',
    },
  ],
  reputation: [
    {
      source: `${SITE.name} editorial score`,
      value: 3.8,
      note: 'genuine licensed access to the brand in the Gulf, marked down for the tight, exclusion-heavy return policy',
    },
  ],
  bestFor: [
    'UAE residents who want genuine Victoria’s Secret stock with local delivery',
    'Existing Alshaya Aura members who want points to carry across brands',
    'Buyers who plan to keep the order, not size-audition and return it',
    'Shoppers expecting UAE-market pricing and promotions, not US ones',
  ],
  notFor: [
    'Anyone assuming the US Victoria’s Secret return or shipping policy applies here',
    'Buyers hoping to return lingerie, swimwear or fragrance if it does not fit',
    'Shoppers outside the UAE looking for wider Gulf or international delivery',
  ],
  faq: [
    {
      q: 'Is victoriassecret.ae the same company as Victoria’s Secret in the US?',
      a: 'No. It is operated under franchise by Alshaya Group, a Kuwait-based retail conglomerate that also runs H&M, Starbucks and Foot Locker across the Gulf. Pricing, promotions, stock and policy are all set locally, not by Victoria’s Secret’s US head office, so do not assume the two sites match.',
    },
    {
      q: 'Can I return lingerie or swimwear if it does not fit?',
      a: 'No. The published exclusions list rules out underwear, lingerie, swimwear, fragrances and health & beauty items entirely, regardless of condition or whether it has been worn. Check sizing carefully before ordering, since these are precisely the categories the brand is best known for.',
    },
    {
      q: 'How long do I have to return an order, and do I get delivery fees back?',
      a: '14 days from delivery. Return the full order and the original delivery fee is refunded too; return only part of it and you lose that fee. Items must be unused, in original condition and packaging, and outside the excluded categories.',
    },
    {
      q: 'What is Aura, and do I have to join it?',
      a: 'Aura is Alshaya’s own loyalty programme, shared across its UAE-operated brands including H&M and Starbucks, not something Victoria’s Secret runs itself. Joining is free and optional; some refunds may be issued as Aura Credit rather than cash back to your card.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'victoriassecret.ae',
}
