/**
 * Brand page data for Autodoc (route: /brands/autodoc).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://autodoc.group/en/about-us/our-story/ — founded 2008 in
 *     Berlin-Weißensee by Vitalij Kungel, Alexej Erdle and Max Wegner;
 *     expansion timeline to 27 European markets; named programmes AUTODOC
 *     Club (loyalty, 2019), AUTODOC PRO (trade customers, 2020) and in-house
 *     parts brands STARK (2013) and RIDEX (2016); converted to a Societas
 *     Europaea in 2022
 *   - Search-summarised company-scale figures (Dealroom/EQS company profiles)
 *     — around 5.8 million products from roughly 2,300 manufacturers, €1.8bn
 *     revenue in 2025
 *   - https://help.autodoc.co.uk/categories/11/236/1871 and related Autodoc
 *     GB help-centre pages (search-summarised) — 14-day standard return
 *     window from delivery, the paid "Safe Order" option that extends this
 *     to 200 days, a 12-month return deadline on core (exchange) parts, a
 *     24-month warranty claim period, refunds in around 7 business days
 *   - Search-summarised results for Autodoc's own vehicle-search help pages
 *     — parts lookup by registration number across a database of roughly
 *     85,000 model configurations (176 car brands, 23 truck brands, 154
 *     motorbike brands); VIN-based search is available only where
 *     registration identifiers are legally regulated, i.e. not everywhere
 *   - https://www.autodoc.parts/services/shipping (search-summarised) —
 *     in-stock items dispatch within 1–2 working days; final delivery time
 *     depends on destination country, courier and stock split
 *   - Trustpilot search-result page title for the pan-European autodoc.eu
 *     listing ("rated 'Great', 4/5") — direct fetch of trustpilot.com
 *     returns 403. Poland’s own autodoc.pl page shows roughly 1,634 reviews
 *     in the same 4-star band, but no page title surfaced a Poland-specific
 *     decimal score, so the pan-European figure is used instead and the
 *     Poland-specific number is deliberately omitted
 *
 * ⚠️ Every figure here is a working value and MUST be re-verified against
 * autodoc.pl before launch and before each campaign. Catalogue size and
 * revenue move with the business; treat them as approximate. See
 * ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const autodoc: BrandPage = {
  slug: 'autodoc',
  providerId: 'autodoc',
  metaTitle: 'Autodoc review 2026 — catalogue, returns, Safe Order',
  metaDescription:
    'An independent Autodoc review: how deep the parts catalogue actually goes, what the 14-day return window and paid Safe Order extension cover, and where delivery gets unpredictable.',
  intro:
    'Autodoc is Europe’s largest online car-parts retailer, selling roughly 5.8 million parts from around 2,300 manufacturers to drivers, garages and DIY mechanics across 27 European countries from its Berlin base. The pitch is straightforward: cheaper than a main dealer, filtered by your specific vehicle so you order the right part once. The parts that need reading closely are the standard 14-day return window and how delivery timing varies by market.',
  about: [
    'Vitalij Kungel, Alexej Erdle and Max Wegner founded Autodoc in Berlin-Weißensee in 2008 to fix a specific annoyance: finding the correct replacement part for a given car took too long and cost too much. The business expanded from Germany into Austria and Switzerland by 2011, then Spain, Italy, the UK and France the following year, reaching 27 European markets by 2020. It now runs its own in-house parts brands, STARK and RIDEX, alongside third-party manufacturer stock, and converted to a Societas Europaea — a European public company structure — in 2022.',
    'The catalogue is filtered by vehicle rather than browsed blind: enter a registration number and Autodoc matches parts against a database of roughly 85,000 model configurations spanning 176 car brands, 23 truck brands and 154 motorbike brands. VIN-based lookup is also offered, though only in countries where registration identifiers are legally regulated — it is not available everywhere, and Autodoc points buyers to live chat where it is not. AUTODOC Club (a loyalty programme since 2019) and AUTODOC PRO (a trade-customer tier since 2020) sit on top of the base catalogue for repeat buyers.',
    'In-stock items dispatch within one to two working days, but the final delivery date depends on your country, the courier used and whether your basket splits across warehouses — real-world delivery times reported by customers vary considerably by route. Returns get a standard 14 days from delivery, unused and in original packaging; the paid Safe Order add-on extends that to 200 days, which matters if you buy a part before a repair slot is confirmed. Warranty claims run for 24 months from delivery, and exchange ("core") parts get their own 12-month return deadline.',
  ],
  facts: [
    { label: 'Founded', value: '2008, Berlin' },
    { label: 'Markets', value: '27 European countries' },
    { label: 'Catalogue', value: '5.8M+ parts, 2,300+ brands' },
    { label: 'Returns', value: '14 days, extendable to 200' },
  ],
  plans: {
    title: 'How pricing, returns and warranty work',
    note: 'Prices are set per market and part, not a subscription — the terms worth reading closely are the 14-day standard return window, the paid Safe Order extension and the 24-month warranty claim period.',
    items: [
      {
        name: 'Standard order',
        price: 'Market-set catalogue price',
        detail:
          'Filtered by registration number or vehicle selection to reduce wrong-fitment orders, across 5.8 million-plus parts from around 2,300 manufacturers.',
      },
      {
        name: 'Standard 14-day return',
        price: 'Free, unused item in original packaging',
        detail:
          'The default window from delivery. Core (exchange) parts get a separate, longer 12-month return deadline instead.',
      },
      {
        name: 'Safe Order (paid extension)',
        price: 'Small fee at checkout',
        detail:
          'Extends the return window from 14 days to 200 days — worth it for a part bought ahead of a repair slot that might move.',
        pick: true,
      },
      {
        name: '24-month warranty claim',
        price: 'Included, no extra cost',
        detail:
          'Covers manufacturing defects and parts that fail under normal use, claimable up to 24 months from the delivery date.',
      },
    ],
  },
  pros: [
    {
      title: 'One of the deepest parts catalogues in Europe',
      body: 'Around 5.8 million parts from roughly 2,300 manufacturers, filtered against a database of some 85,000 vehicle configurations across cars, trucks and motorbikes.',
    },
    {
      title: 'Safe Order genuinely extends your return window',
      body: 'A named, paid option that stretches the standard 14-day return period to 200 days — a real feature for anyone ordering a part before a garage slot is confirmed.',
    },
    {
      title: 'A specific, checkable 24-month warranty',
      body: 'Warranty claims can be filed up to 24 months after delivery for manufacturing defects and normal-use failures, longer than many competitors state outright.',
    },
    {
      title: 'Registration-number lookup cuts wrong-fitment orders',
      body: 'Entering your plate matches parts to your exact model, reducing the classic mail-order car-parts mistake of ordering the wrong variant.',
    },
  ],
  cons: [
    {
      title: 'The standard return window is short without Safe Order',
      body: 'Fourteen days from delivery is tight if a repair gets delayed. The 200-day Safe Order extension exists because Autodoc knows this is a real problem, and it costs extra.',
    },
    {
      title: 'Delivery timing is genuinely unpredictable across markets',
      body: 'In-stock items dispatch in one to two working days, but final delivery depends on destination, courier and whether your order splits across warehouses — real timelines vary by route.',
    },
    {
      title: 'VIN-based lookup is not available everywhere',
      body: 'Full VIN search only works in countries where registration identifiers are legally regulated. Elsewhere you are relying on manual model selection or live chat instead.',
    },
  ],
  reputation: [
    {
      source: 'Trustpilot',
      value: 4.0,
      note: 'pan-European autodoc.eu listing, rated "Great"',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite across catalogue depth, fitment accuracy and the Safe Order/warranty terms',
    },
  ],
  bestFor: [
    'DIY and driveway mechanics comparing prices across European markets',
    'Anyone ordering a part ahead of a repair slot who wants the Safe Order buffer',
    'Buyers in a market where registration-plate or VIN lookup is supported',
    'Trade or repeat buyers who qualify for the AUTODOC PRO or Club tiers',
  ],
  notFor: [
    'Anyone who needs a part the same day — nothing here promises rapid turnaround',
    'Buyers in a country without VIN-based lookup who dislike manual model selection',
    'Shoppers unwilling to pay extra for Safe Order if their repair timing is uncertain',
  ],
  faq: [
    {
      q: 'How does Autodoc make sure I order the right part?',
      a: 'You search by vehicle registration number or manually select your model, and the catalogue filters to matching parts across a database of roughly 85,000 configurations. VIN-based search is offered too, but only where registration identifiers are legally regulated.',
    },
    {
      q: 'What is Safe Order and is it worth paying for?',
      a: 'It is a paid checkout add-on that extends the standard 14-day return window to 200 days. It is worth it if you are buying a part before your repair date is locked in — otherwise the free 14-day window is usually enough.',
    },
    {
      q: 'How long does Autodoc delivery actually take?',
      a: 'In-stock items dispatch within one to two working days, but total delivery time depends on your country, the courier and whether your order ships from a single warehouse. Reported real-world times vary considerably by route.',
    },
    {
      q: 'What does the warranty actually cover?',
      a: 'Manufacturing defects and parts that fail under normal use, with claims accepted up to 24 months from delivery. Core (exchange) parts follow a separate 12-month return deadline rather than the standard window.',
    },
    {
      q: 'Is Autodoc cheaper than buying from a main dealer?',
      a: 'Generally yes, which is the entire premise of the business — but prices vary by market and part, and you are responsible for confirming fitment yourself, even with registration-based filtering.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'autodoc.pl',
}
