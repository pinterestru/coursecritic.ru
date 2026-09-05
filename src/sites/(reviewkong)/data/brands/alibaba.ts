/**
 * Brand page data for Alibaba.com (route: /brands/alibaba).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://seller.alibaba.com/blogs/2026/southeast-asia/b2b-trade/trade-assurance-complete-guide-alibaba-secure-payment
 *     and https://buyer.alibaba.com/page/tradeassurance/buyer/story.html —
 *     what Trade Assurance covers, the 30-day claim window, the 2-hour
 *     quick-refund option, and the 7-day dispute-escalation rule
 *   - https://www.alibaba.com/supplier/how-does-alibaba-trade-assurance-work.html
 *     — Verified Supplier on-site inspection by third-party firms (SGS, TÜV
 *     Rheinland, Bureau Veritas)
 *   - Founding year, founder and scale figures (1999, Jack Ma and co-founders
 *     in Hangzhou; 40M+ registered buyers across 200+ countries) — cross-
 *     checked across multiple current industry-statistics summaries, since
 *     alibaba.com's own about page returned an error at research time
 *   - Alibaba.com's Google Play listing ("Alibaba.com — B2B marketplace") —
 *     4.4/5 from 3m+ ratings, cross-checked across app-analytics aggregators
 *
 * ⚠️ Alibaba.com's Trustpilot presence is genuinely inconsistent across
 * regional sub-domains at the time of writing (conflicting scores from 1.4 to
 * 4.1 depending on which alibaba.com sub-page is reviewed), so no Trustpilot
 * figure appears below — verify directly against trustpilot.com/review/www.alibaba.com
 * before launch. Buyer/supplier counts are working values and MUST be
 * re-verified against alibaba.com before each campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const alibaba: BrandPage = {
  slug: 'alibaba',
  providerId: 'alibaba',
  metaTitle: 'Alibaba.com review 2026 — Trade Assurance, MOQs, risk',
  metaDescription:
    'An independent Alibaba.com review: what Trade Assurance actually covers, why minimum order quantities rule out casual buyers, and how to vet a supplier.',
  intro:
    "Alibaba.com is not a shop, it is a sourcing directory: a B2B marketplace connecting buyers with mostly Chinese manufacturers and wholesalers, built around minimum order quantities rather than single units. Trade Assurance, its buyer-protection scheme, is the reason serious sourcing happens here rather than through a supplier's own website. It is genuinely useful for anyone building a supply chain, and genuinely wrong for anyone who wants to buy one item, since almost nothing on the platform is priced or packaged for a single customer.",
  about: [
    "Alibaba.com launched in 1999, the original business in what became Alibaba Group, founded by Jack Ma and a group of co-founders in Hangzhou to connect Chinese manufacturers with buyers abroad. It remains the group's business-to-business arm, distinct from Taobao and Tmall (China-facing consumer retail) and from AliExpress (global consumer retail), a distinction worth knowing since all three get lumped together as 'Alibaba' in casual conversation. Alibaba.com has since opened to sellers outside China too, though Chinese manufacturing still dominates the supplier base by a wide margin.",
    "Buying works nothing like a normal marketplace. Almost every listing carries a minimum order quantity, prices are quoted rather than fixed, and serious transactions go through Trade Assurance: a free protection scheme that guarantees a refund if an enrolled supplier ships late, short, or off-spec, with claims open for 30 days after delivery. A step up from that is Verified Supplier status, where a third-party inspection firm such as SGS, TÜV Rheinland or Bureau Veritas has actually visited the factory. Neither guarantee extends to suppliers outside Trade Assurance, and freight, customs and import duty are the buyer's problem to arrange, not Alibaba's.",
    "The platform's own scale numbers are large — Alibaba Group has cited more than 40 million registered buyers across upwards of 200 countries — but scale is not the same as safety. Every sourcing guide, and Alibaba's own help pages, warn buyers to stay inside Trade Assurance and never wire money directly to a supplier's personal account, because the classic scam here is a supplier who looks verified and simply is not. Product quality on unverified listings is genuinely inconsistent, which is why experienced buyers pay for a third-party inspection before a large order ships rather than trusting photos alone.",
  ],
  facts: [
    { label: 'Founded', value: '1999' },
    { label: 'Model', value: 'B2B wholesale, MOQ required' },
    { label: 'Buyers', value: '40 million+ registered' },
    { label: 'Protection', value: 'Trade Assurance (30-day)' },
  ],
  plans: {
    title: 'How sourcing actually gets priced',
    note: "There is no fixed retail price to compare against — quotes depend on quantity, customisation and the supplier — and only Trade Assurance orders carry Alibaba's own refund guarantee.",
    items: [
      {
        name: 'Unverified supplier, direct quote',
        price: 'Lowest quoted prices, no platform guarantee',
        detail:
          'No Trade Assurance cover. Fine for browsing catalogues and prices, risky for actually paying a deposit.',
      },
      {
        name: 'Trade Assurance order',
        price: 'Same supplier pricing, refund-backed',
        detail:
          'Free to use. Guarantees a refund if the enrolled supplier ships late, short or off-spec — the baseline for any real transaction.',
        pick: true,
      },
      {
        name: 'Verified Supplier / Gold Supplier',
        price: 'Often a small premium over unverified listings',
        detail:
          "The supplier's factory has been inspected on-site by a third party such as SGS or Bureau Veritas. Worth paying for on a large first order.",
      },
      {
        name: 'Third-party inspection add-on',
        price: 'Arranged and paid for separately, per shipment',
        detail:
          "An independent check of the goods before they ship. Not part of Alibaba's own offering, but standard practice among experienced buyers.",
      },
    ],
  },
  pros: [
    {
      title: 'The largest B2B sourcing directory there is',
      body: 'Millions of suppliers and 40 million-plus registered buyers across 200-plus countries, covering more product categories than any single competitor comes close to matching.',
    },
    {
      title: 'Trade Assurance gives you somewhere to complain',
      body: 'A free, genuine refund guarantee on enrolled suppliers if delivery is late, short or off-spec, with Alibaba mediating and arbitrating disputes rather than leaving buyer and supplier to argue alone.',
    },
    {
      title: 'Verified Supplier status is a real, checkable signal',
      body: 'Factories carrying this badge have had an on-site inspection from an independent firm such as SGS or Bureau Veritas, not just a paperwork check Alibaba did itself.',
    },
    {
      title: 'Built for negotiation, not fixed pricing',
      body: 'Quoted prices move with order size, customisation and relationship, which suits anyone actually building a supply chain rather than window-shopping a catalogue.',
    },
  ],
  cons: [
    {
      title: 'Minimum order quantities rule out casual buyers',
      body: 'Almost nothing is priced or packaged for a single unit. Anyone wanting one item at a time should be on AliExpress instead, not here.',
    },
    {
      title: 'Unverified suppliers are where the scams live',
      body: 'Fake verification badges, off-platform wire-transfer requests and photos that do not match the factory are documented, recurring problems outside Trade Assurance.',
    },
    {
      title: "Freight, customs and inspection are the buyer's job",
      body: 'Alibaba arranges none of it by default. Shipping internationally, clearing customs and checking quality before goods leave the factory all fall on the buyer to organise.',
    },
  ],
  reputation: [
    {
      source: 'Google Play',
      value: 4.4,
      note: "Alibaba.com's B2B marketplace app, 3m+ ratings",
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.9,
      note: 'our composite across sourcing depth, Trade Assurance cover and scam risk',
    },
  ],
  bestFor: [
    'Businesses sourcing products or components in bulk from overseas manufacturers',
    'Buyers willing to stay inside Trade Assurance rather than pay a supplier directly',
    "Anyone comfortable negotiating price, MOQ and lead time rather than clicking 'buy now'",
    'First-time importers who will pay for an independent factory inspection',
  ],
  notFor: [
    'Anyone wanting to buy a single item rather than a bulk order',
    'Buyers unwilling to vet a supplier before paying anything',
    'Shoppers who want AliExpress-style consumer protection and fast shipping',
  ],
  faq: [
    {
      q: 'Is Alibaba.com the same as AliExpress?',
      a: 'No, though both belong to Alibaba Group. Alibaba.com is a B2B wholesale platform built around minimum order quantities and negotiated pricing; AliExpress sells single units directly to consumers with fixed prices and buyer protection built for retail, not bulk trade.',
    },
    {
      q: 'What does Trade Assurance actually cover?',
      a: 'A refund if an enrolled supplier ships late, short of the agreed quantity, or off the agreed specification, with claims open for 30 days after delivery. It only applies to suppliers who have opted into the programme, not every listing on the site.',
    },
    {
      q: 'Can I buy just one item?',
      a: 'Technically sometimes, but most listings carry a minimum order quantity set by the supplier, and pricing is structured around bulk orders. If you want a single unit, a consumer marketplace is the better fit.',
    },
    {
      q: 'How do I avoid scams?',
      a: "Stick to Trade Assurance orders, check for Verified Supplier status, and never pay a supplier directly outside the platform, however good the discount sounds. Alibaba's own help pages repeat this warning for a reason.",
    },
    {
      q: 'Who arranges shipping and customs?',
      a: "The buyer, by default. Alibaba connects you to freight options through some suppliers, but clearing customs, paying import duty and arranging final delivery are the buyer's responsibility unless specifically negotiated otherwise.",
    },
  ],
  updated: '2026-08-24',
  deepLink: 'alibaba.com',
}
