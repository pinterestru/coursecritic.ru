/**
 * Brand page data for Fiverr (route: /brands/fiverr).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://apps.apple.com/us/app/fiverr-freelance-services/id346080608 —
 *     App Store rating (4.9) and review count (571K), fetched directly
 *   - https://en.wikipedia.org/wiki/Fiverr — founding year (2010), founders,
 *     Tel Aviv HQ, NYSE listing (2019), ~160 countries served, original $5
 *     pricing anchor
 *   - Fiverr's own help centre and community pages (service-fee and gig-extra
 *     mechanics, Seller Plus programme, multiples-with-extras ordering) — the
 *     live pages returned 403 to automated fetch, so fee figures below are
 *     kept to the shape of the charge rather than an exact percentage or
 *     dollar amount
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Fiverr's buyer
 * service fee could not be pinned to an exact percentage from a source we
 * could open directly — re-verify the figure on fiverr.com at checkout before
 * publishing anything more specific than "a percentage plus a flat add-on on
 * small orders." A Trustpilot score also could not be verified (the page
 * blocked automated access) and has deliberately been left out rather than
 * guessed. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const fiverr: BrandPage = {
  slug: 'fiverr',
  providerId: 'fiverr',
  metaTitle: 'Fiverr review 2026 — buyer fees, gig extras, quality',
  metaDescription:
    'An independent Fiverr review: how the buyer service fee stacks up on an order, why gig extras change the real price, and where seller quality varies most.',
  intro:
    'Fiverr is the marketplace that made freelance services feel like checkout shopping: browse a gig, read the package tiers, buy. What the gig card does not show is the service fee Fiverr adds on top, or how often the real job needs an extra you had not budgeted for. Neither is hidden exactly — both just live one click past the price you first see.',
  about: [
    'Fiverr launched in Tel Aviv in 2010, built around a simple idea: list a task, price it, sell it. Micha Kaufman and Shai Wininger started it as a $5-a-task marketplace; sellers now price freely, with rates running from a few dollars to four figures for complex work. The company listed on the New York Stock Exchange in 2019 and operates as a pure marketplace — it does not employ the freelancers, vet most of them, or guarantee the work, it processes the transaction and mediates when something goes wrong.',
    'Buying follows the same pattern on every gig: pick a package (Basic, Standard, Premium, where the seller offers tiers), add any gig extras — rush delivery, extra revisions, source files, a bigger scope — and pay. Fiverr adds its own service fee to that total at checkout, and the fee recalculates separately if you pay again later for a revision request or a tip. A seller Fiverr calls "Pro" carries a hand-reviewed badge and prices above the open marketplace; everyone else is unvetted, which is the trade-off the low headline prices are built on.',
    'Quality is the thing to manage, not assume. Fiverr does not employ or credential the sellers behind most gigs, so outcomes swing entirely with the individual freelancer: a five-star seller with thousands of reviews and a newly listed one with none can sit on the same search results page, priced identically. Reading seller-level reviews, response time and delivery history, not the category average or the star rating on the search page, is what actually predicts what you will get — and it takes the same few minutes as comparing prices.',
  ],
  facts: [
    { label: 'Founded', value: '2010, Tel Aviv' },
    { label: 'Model', value: 'Freelance marketplace' },
    { label: 'Reach', value: '160+ countries' },
    { label: 'Buyer fee', value: 'Added at checkout' },
  ],
  plans: {
    title: 'How buying on Fiverr is priced',
    note: 'The gig price you see on the listing is the starting number, not the total. Fiverr adds a service fee at checkout, and every extra you add — rush delivery, more revisions, a bigger scope — is priced and fee-charged separately.',
    items: [
      {
        name: 'Standard gig order',
        price: "Seller's gig price + Fiverr's service fee",
        detail:
          'The fee is percentage-based with a flat add-on on smaller orders, shown and confirmed at checkout before you pay. It applies again on any later payment on the same order — a revision request or a tip included.',
        pick: true,
      },
      {
        name: 'Gig extras',
        price: 'Set individually by the seller',
        detail:
          'Rush delivery, extra revisions, source files and similar add-ons are each priced separately and each carry their own service fee. A gig that looked cheap on the search page often is not, once two or three extras are added.',
      },
      {
        name: 'Fiverr Pro',
        price: 'Above open-marketplace rates',
        detail:
          'A separate tier of freelancers Fiverr has manually reviewed, badge included. You are paying for the vetting layer specifically — the fee structure on top is the same as any other gig.',
      },
      {
        name: 'Multiples in one order',
        price: 'Discount at the seller’s discretion',
        detail:
          'Ordering several units of a gig in one transaction can pull a bulk discount and lets you add a matching number of gig extras in the same order, rather than paying per-unit fees repeatedly.',
      },
    ],
  },
  pros: [
    {
      title: 'A price and a deadline before you commit',
      body: 'Every gig states a starting price and a delivery time up front, and package tiers let you compare scope directly. For simple, well-defined jobs the whole process from search to order takes minutes.',
    },
    {
      title: 'Depth on nearly any digital task',
      body: 'From logo design to voiceover to app store optimisation, the catalogue runs to hundreds of categories. If a task can be delivered as a file or a service call, a seller on Fiverr almost certainly offers it.',
    },
    {
      title: 'Seller-level reviews are genuinely useful',
      body: 'Because reviews attach to the individual freelancer and their delivery history, not just the platform, a buyer who reads them can filter out the sellers most likely to disappoint before paying anything.',
    },
    {
      title: 'Escrow-style payment protects the buyer first',
      body: 'Money is held by Fiverr until you approve delivery, so a seller cannot simply take payment and vanish. Disputes go through Fiverr’s resolution process rather than a direct chargeback fight.',
    },
  ],
  cons: [
    {
      title: 'The service fee is easy to underestimate',
      body: 'It is a percentage plus a flat add-on on smaller orders, applied again on every separate payment — the base order, a rush add-on, a tip. Add two gig extras and a tip and you have paid the fee three times over.',
    },
    {
      title: 'Quality genuinely varies by seller, not by category',
      body: 'Fiverr does not vet the open marketplace, so the same search term surfaces experienced professionals and first-week sellers side by side. The star rating on the category page tells you nothing; the seller’s own review history does.',
    },
    {
      title: 'The listed price is rarely the final one',
      body: 'Gig extras exist because base packages are scoped narrowly on purpose — rush delivery, extra revisions and expanded scope are all separate charges. Budget for the job you actually need, not the cheapest package shown.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS)',
      value: 4.9,
      note: '571K ratings — skews toward buyers rating right after a successful delivery',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite: broad catalogue and buyer protection, offset by fee stacking and seller variance',
    },
  ],
  bestFor: [
    'One-off digital tasks with a clear brief: a logo, a voiceover, a landing page',
    'Buyers willing to read a seller’s review history before ordering',
    'Small businesses that need occasional freelance work without hiring',
    'Anyone who wants payment held in escrow until the work is approved',
  ],
  notFor: [
    'Ongoing work better suited to a direct hire or retainer relationship',
    'Buyers who assume every seller on a category page is vetted the same way',
    'Anyone who wants a single, all-in price with no extras to evaluate',
  ],
  faq: [
    {
      q: 'How much does Fiverr actually charge buyers on top of the gig price?',
      a: 'A service fee is added at checkout — a percentage of the order plus a flat charge on smaller orders — and shown before you confirm payment. The exact figures move and vary by order size, so treat the checkout screen, not a blog post, as the source of truth for a specific order.',
    },
    {
      q: 'Does the fee apply more than once on the same order?',
      a: 'Yes. Fiverr charges the fee on every separate payment tied to an order, so the base purchase, a later rush-delivery add-on, an extra revision paid separately and a tip each carry their own fee rather than one combined charge — worth factoring in before assuming the gig’s headline price is the total you will pay.',
    },
    {
      q: 'Is Fiverr Pro worth the higher price?',
      a: 'Pro sellers have been manually reviewed by Fiverr, which reduces the quality gamble the open marketplace carries. It costs more precisely because of that vetting — for a task where a bad delivery is expensive to redo, the premium is often the cheaper outcome.',
    },
    {
      q: 'What happens if the delivered work is not what I asked for?',
      a: 'Money sits with Fiverr until you approve delivery, so you can request revisions within the scope of the package before releasing payment. If it still is not resolved, Fiverr’s resolution process mediates — but revisions beyond what the package included are a paid gig extra, not automatically free.',
    },
    {
      q: 'Are all sellers on Fiverr vetted?',
      a: 'No. Most of the marketplace is open to anyone who signs up as a seller; only the separate Fiverr Pro tier carries manual review. Reading a seller’s own rating, review count and delivery-time history is the only reliable quality check on the standard marketplace.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'fiverr.com',
}
