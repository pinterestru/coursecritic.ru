/**
 * Brand page data for DHgate (route: /brands/dhgate).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/DHgate.com — founding (Diane Wang, Beijing,
 *     August 2004, name from the Silk Road city Dunhuang), scale figures (2.2M+
 *     sellers, 220+ countries/regions, 31M+ registered buyers, as of June 2020 —
 *     the most recent sourced figures found, dated and flagged below), the 2022
 *     US Trade Representative "Notorious Markets" listing
 *   - Trustpilot search-result page titles for www.dhgate.com ("rated 'Bad',
 *     1.7/5") — direct fetch of trustpilot.com returns 403 for every agent, so
 *     the rating is taken from the page's own title as surfaced by search,
 *     the same workaround used on the AliExpress page; review-volume figure
 *     (~34k) is a search-summarised count, not independently re-counted
 *   - DHgate Google Play listing ("DHgate-online wholesale stores") — 4.3/5
 *     from a search-summarised ~458k ratings, cross-checked across app listing
 *     summaries, not opened directly
 *   - General buyer-protection / dispute-process summaries (secondary sources
 *     aggregating DHgate's own policy pages) — seller-first contact, then
 *     DHgate escalation mediation, for non-delivery or significantly wrong
 *     items
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * dhgate.com before launch and before each campaign. Seller/buyer/country
 * counts are from 2020 and are very likely stale — treat them as a floor, not
 * a current figure. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const dhgate: BrandPage = {
  slug: 'dhgate',
  providerId: 'dhgate',
  metaTitle: 'DHgate review 2026 — bulk pricing, duties, disputes',
  metaDescription:
    'An independent DHgate review: how wholesale and single-unit pricing actually works, who covers customs duties, and what the 2022 US counterfeit listing means for buyers.',
  intro:
    'DHgate is a Chinese cross-border marketplace that sells almost anything a small factory or trading company will ship: phone cases, clothing, furniture, tools, sold single-unit or by the case. Prices undercut most local retail. The trade-off is the one every China-direct wholesale site makes — weeks-long shipping, customs duties that land on you rather than the seller, and quality that depends entirely on which of its millions of sellers you picked.',
  about: [
    'Diane Wang founded DHgate in Beijing in August 2004, launching properly in 2005; the name nods to Dunhuang, the ancient Silk Road trading city. It grew into one of the earliest platforms connecting small and mid-sized Chinese manufacturers directly with buyers abroad, rather than routing everything through import wholesalers. By 2020 the company reported over 2.2 million sellers and 31 million registered buyers across more than 220 countries and regions — the most recent figures a source will confirm, so treat them as dated rather than current.',
    'Unlike Alibaba.com, DHgate does not force a minimum order quantity on every listing — you can buy one item or a case of them, which is why it doubles as both a small-business restocking tool and a direct-to-consumer bargain site. Buyer Protection covers non-delivery and items that arrive significantly different from the listing, but the process starts with the seller: you contact them directly first, and DHgate only steps in with escalation mediation if that conversation goes nowhere.',
    'The platform carries real reputational baggage. The US Trade Representative added DHgate.com to its "Notorious Markets for Counterfeiting and Piracy" list in 2022, citing weak seller vetting for counterfeit goods. Trustpilot reflects the same pattern of complaints — a "Bad" rating dominated by non-delivery, refund friction and disputed cases closed against the buyer — even though the DHgate buyer app itself scores comfortably on Google Play, a gap worth noticing before you order.',
  ],
  facts: [
    { label: 'Founded', value: '2004, Beijing' },
    { label: 'Scale', value: '2.2M+ sellers, 220+ markets' },
    { label: 'Order model', value: 'Wholesale & single units' },
    { label: 'Disputes', value: 'DHgate dispute mediation' },
  ],
  plans: {
    title: 'How pricing and protection actually work',
    note: 'There is no DHgate-wide fee — each seller sets their own price and shipping cost. The real decision is single-unit versus bulk, and understanding what Buyer Protection covers before you need it.',
    items: [
      {
        name: 'Single-unit purchase',
        price: 'Seller-set price, no minimum order',
        detail:
          'Buy one of almost anything the catalogue lists. No wholesale minimum, unlike Alibaba.com — shipping is usually the largest variable cost.',
      },
      {
        name: 'Bulk / wholesale order',
        price: 'Per-unit price drops with quantity',
        detail:
          'DHgate’s original use case: tiered pricing as order size rises, aimed at small retailers restocking rather than one-off buyers.',
      },
      {
        name: 'Buyer Protection (every order)',
        price: 'Included, no extra cost',
        detail:
          'Covers non-delivery and items significantly different from the listing. Contact the seller first — DHgate mediates only if that fails.',
        pick: true,
      },
      {
        name: 'Import duties and customs',
        price: 'Not included in the listing price',
        detail:
          'Orders over your country’s duty-free threshold can be charged at the border on top of what you already paid DHgate.',
      },
    ],
  },
  pros: [
    {
      title: 'Wholesale pricing without a wholesale minimum',
      body: 'Most listings have no minimum order quantity, so you get bulk-market prices whether you are buying one item or restocking a shop. Alibaba.com rarely offers that flexibility.',
    },
    {
      title: 'An enormous, oddly specific catalogue',
      body: 'With well over two million sellers, DHgate turns up niche and hard-to-source items that mainstream marketplaces do not bother stocking, from custom parts to small-batch fashion.',
    },
    {
      title: 'Buyer Protection is a real, structured process',
      body: 'Non-delivery and significantly-wrong-item claims have a defined path: seller contact, then DHgate escalation mediation. It is slower than a one-click refund, but it exists.',
    },
    {
      title: 'The buyer app outperforms the website’s reputation',
      body: 'The DHgate app rates well on Google Play despite the website’s poor Trustpilot record, suggesting app-based order tracking and support handle problems better than the browser flow.',
    },
  ],
  cons: [
    {
      title: 'Named a US "Notorious Market" in 2022',
      body: 'The US Trade Representative listed DHgate.com among marketplaces facilitating counterfeit and pirated goods, citing weak vetting of sellers. That risk has not been reported as resolved.',
    },
    {
      title: 'Shipping is slow and duties are your problem',
      body: 'Orders ship from China and commonly take weeks. Customs duties above your country’s threshold are charged separately at the border, on top of the price you already paid.',
    },
    {
      title: 'Trustpilot reputation is poor',
      body: 'The main www.dhgate.com listing is rated "Bad" at 1.7 out of 5 from a large review volume, with non-delivery and refund disputes the recurring complaint.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 1.7,
      note: 'rated "Bad", roughly 34k reviews on the main www.dhgate.com listing',
    },
    { source: 'Google Play', value: 4.3, note: '~458k ratings on the DHgate buyer app' },
    {
      source: `${SITE.name} editorial score`,
      value: 3.6,
      note: 'our composite across catalogue breadth, dispute process and delivery reliability',
    },
  ],
  bestFor: [
    'Small resellers and dropshippers who need low or no minimum order quantity',
    'Buyers who read individual seller ratings and order counts before checking out',
    'Anyone willing to budget for customs duties on top of the listed price',
    'Shoppers chasing a niche or hard-to-source item that mainstream marketplaces skip',
  ],
  notFor: [
    'Anyone who needs fast, predictable delivery',
    'Buyers who want to avoid counterfeit risk, given the 2022 US Notorious Markets listing',
    'Shoppers unwilling to contact an individual seller directly before DHgate steps in',
  ],
  faq: [
    {
      q: 'Is DHgate the same as AliExpress or Alibaba.com?',
      a: 'No, though all three connect buyers with Chinese sellers. AliExpress and DHgate both allow single-unit purchases at fixed prices; Alibaba.com is built around negotiated bulk orders with minimum quantities. DHgate sits closer to AliExpress but leans more heavily into bulk and small-business restocking.',
    },
    {
      q: 'Will I have to pay customs duties on a DHgate order?',
      a: 'Possibly. DHgate’s listed price does not include import duties, and orders above your country’s duty-free threshold can be charged separately when the parcel arrives. Check your own country’s threshold before ordering something expensive.',
    },
    {
      q: 'How does Buyer Protection work if an order goes wrong?',
      a: 'You contact the seller first to try to resolve it directly. If that fails, you can open a dispute and escalate it to DHgate for mediation. It covers items that never arrive or that turn out significantly different from the listing.',
    },
    {
      q: 'What was the 2022 US Notorious Markets listing about?',
      a: 'The US Trade Representative added DHgate.com to its annual list of marketplaces it says facilitate counterfeiting and piracy, citing weak seller vetting. It is a reputational flag worth knowing, not a ban — the site continues operating normally.',
    },
    {
      q: 'Is there a minimum order quantity?',
      a: 'Not on most listings — that is one of DHgate’s main differences from Alibaba.com. You can buy a single item at the listed unit price, though per-unit cost usually drops if you order more.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'dhgate.com',
}
