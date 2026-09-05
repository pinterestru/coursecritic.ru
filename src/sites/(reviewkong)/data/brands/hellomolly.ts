/**
 * Brand page data for Hello Molly (route: /brands/hellomolly).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Hello_Molly — founding (20 September
 *     2012, Echo Liu, ~AU$50,000 start-up capital), ownership, Sydney HQ
 *     plus Los Angeles and Beijing offices, revenue history, sister brands
 *     (Hello Molly Swim, Dear Emilia, Fortunate One, Wedding Parlour), press
 *     and TV-commercial history
 *   - https://apps.apple.com/us/app/hello-molly-us/id6476927044 — App Store
 *     rating and review count, opened directly
 *   - https://www.afterpay.com/en-US/stores/hello-molly-20030 and
 *     https://www.klarna.com/us/store/f62ca65e-97a1-4fb6-94d1-bd58d4d9753b/Hello-Molly/pay-with-klarna/
 *     — confirms Afterpay and Klarna as active checkout options
 *   - https://paperbeez.com/hello-molly-return-policy/ and
 *     https://closo.co/blogs/how-to-return/the-truth-about-the-hello-molly-return-policy-store-credit-traps-australian-sizing-and-instant-refunds
 *     — return window, store-credit-only policy for change-of-mind returns
 *     (secondary summaries of hellomolly.com's own policy page, which
 *     returned a bot block on every direct fetch attempt)
 *   - https://www.smartcustomer.com/reviews/hellomolly.com and
 *     https://hello-molly.pissedconsumer.com/review.html — recurring
 *     complaint themes on material quality and sizing
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. Trustpilot's page
 * for this domain returned a bot block on every direct fetch attempt during
 * research, and secondary sources disagreed on the exact score and review
 * count — no Trustpilot figure is cited here; do not add one without
 * opening the live page. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const hellomolly: BrandPage = {
  slug: 'hellomolly',
  providerId: 'hellomolly',
  metaTitle: 'Hello Molly review 2026 — returns, quality and sizing',
  metaDescription:
    'An independent Hello Molly review: how the store-credit-only return policy actually works, the recurring sizing and material complaints, and who the pace suits.',
  intro:
    'Hello Molly built a global going-out-and-party dress business from a Sydney dorm room, launching in 2012 with roughly AU$50,000 and growing past AU$100 million in reported revenue by 2021. It adds more than 100 new styles a week, which is the appeal and the catch: fast turnover means fast-fashion construction, and returns for a simple change of mind come back as store credit, not cash, unless the item is faulty.',
  about: [
    'Founded on 20 September 2012 by Echo Liu, then a University of Sydney student, with an initial investment of around AU$50,000, Hello Molly is privately owned and headquartered in Sydney, with additional offices in Los Angeles and Beijing. Growth was fast: reported revenue moved from AU$510,100 in its first year to AU$5.3 million by 2014 and past AU$100 million by 2021. The brand got a mainstream push in 2018, when its first TV commercial aired during Love Island Australia and it was featured in both Vogue Australia and Glamour.',
    'The catalogue is built for speed: more than 100 new styles land each week, centred on dresses, going-out and party wear, with swimwear split off into its own sub-brand, Hello Molly Swim, launched in 2018. Sister labels Dear Emilia (occasion wear, 2017), Fortunate One (2016) and Wedding Parlour (2025) sit alongside it, giving the company several branded storefronts rather than one general catalogue. Buy-now-pay-later options — Afterpay and Klarna both list Hello Molly as an active merchant — sit at checkout, standard for this segment of fast fashion.',
    'Policy pages describe a 30-day return window for unworn items with tags attached, but a change-of-mind return comes back as store credit only, valid for 12 months — refunds go only to faulty items. Independent review aggregators repeat the same complaint themes often enough to take seriously: material described as thin or cheap for the price, sizing that runs smaller or shorter than the size chart suggests, and mixed reports on how quickly support actually replies.',
  ],
  facts: [
    { label: 'Founded', value: '2012, Sydney' },
    { label: 'New styles', value: '100+ per week' },
    { label: 'Returns', value: '30 days, store credit' },
    { label: 'BNPL', value: 'Afterpay, Klarna' },
  ],
  plans: {
    title: 'How the costs and returns work',
    note: 'A change-of-mind return only ever comes back as store credit, not cash — factor that into whether a discount code is worth the risk on fit.',
    items: [
      {
        name: 'Standard order',
        price: 'Item price + region-specific shipping',
        detail:
          'Pricing and delivery run through separate regional storefronts (AU, US, UK, CA); shipping cost and speed depend on which one you are ordering from.',
      },
      {
        name: 'Buy now, pay later',
        price: 'Split into instalments via Afterpay or Klarna',
        detail:
          'Both providers list Hello Molly as an active merchant, letting you spread the cost of an order at checkout with no extra fee if paid on schedule.',
        pick: true,
      },
      {
        name: 'Returns',
        price: 'Store credit only for change of mind',
        detail:
          'A 30-day window applies to unworn, tagged items, but the credit is only valid for 12 months, and only faulty items qualify for an actual refund.',
      },
    ],
  },
  pros: [
    {
      title: 'A genuinely fast-moving catalogue',
      body: 'More than 100 new styles land every week, so the range for going-out and party dressing rarely feels stale — useful if you are shopping for something specific and time-sensitive.',
    },
    {
      title: 'A real growth story behind the brand',
      body: 'From roughly AU$50,000 in start-up capital to reported revenue past AU$100 million by 2021, plus mainstream press coverage in Vogue Australia and Glamour — this is not a fly-by-night storefront.',
    },
    {
      title: 'Splitting the cost is genuinely easy',
      body: 'Both Afterpay and Klarna list Hello Molly as an active merchant, so spreading an order into instalments is a standard checkout option, not a workaround.',
    },
    {
      title: 'Sister labels widen the range without diluting it',
      body: 'Hello Molly Swim, Dear Emilia and Fortunate One give the company distinct storefronts for swimwear, occasion wear and separate style, instead of cramming everything into one generic catalogue.',
    },
  ],
  cons: [
    {
      title: 'A return only ever pays you back in store credit',
      body: 'Change your mind and the refund is store credit valid for 12 months, not cash — only genuinely faulty items get an actual refund, worth knowing before you order borderline sizes.',
    },
    {
      title: 'Material and sizing complaints recur across review sites',
      body: 'Independent aggregators repeat similar themes — dresses and knitwear described as thin or cheap for the price, and sizing that runs smaller or shorter than the chart suggests.',
    },
    {
      title: 'Fast-fashion turnover means fast-fashion construction',
      body: 'Weekly drops of over 100 new styles are only possible at fast-fashion production speed, and the trade-off shows up in the same durability and material complaints that dog the whole category.',
    },
  ],
  reputation: [
    {
      source: 'App Store (iOS, Hello Molly US)',
      value: 4.3,
      note: 'a small sample of around 50 ratings — read as a weak signal, not a broad verdict',
    },
    {
      source: `${SITE.name} editorial score`,
      value: 3.7,
      note: 'our composite weighs the catalogue speed and easy BNPL checkout against store-credit-only returns and recurring quality complaints',
    },
  ],
  bestFor: [
    'Shoppers who want a constant stream of new going-out and party styles',
    'Buyers happy to use Afterpay or Klarna instalments at checkout',
    'Anyone who reads a size chart carefully before ordering, given the fit complaints',
    'Shoppers who see a wardrobe refresh in store credit rather than needing cash back',
  ],
  notFor: [
    'Anyone who wants a straightforward cash refund for a simple change of mind',
    'Buyers prioritising garment durability over the newest style each week',
    'Shoppers who will not check independent reviews before trusting the size chart',
  ],
  faq: [
    {
      q: 'Is Hello Molly a fast-fashion brand?',
      a: 'Yes, by its own operating model: more than 100 new styles land each week, which only works at fast-fashion production speed. That pace is the appeal for shoppers chasing the newest look, and the likely source of the material and durability complaints that turn up on independent review sites.',
    },
    {
      q: 'What happens if I want to return something because it does not fit?',
      a: 'A change-of-mind return is accepted within 30 days on unworn, tagged items, but it comes back as store credit valid for 12 months, not a cash refund. Only items that are genuinely faulty qualify for money back — worth checking the size chart carefully before you order.',
    },
    {
      q: 'Does Hello Molly ship outside Australia?',
      a: 'Yes — the brand runs separate regional storefronts, including US, UK and Canadian sites, alongside its home Australian site. Shipping cost and delivery speed depend on which regional storefront you order from, so check the version of the site set for your country rather than the Australian one.',
    },
    {
      q: 'Can I pay in instalments?',
      a: 'Yes. Both Afterpay and Klarna list Hello Molly as an active merchant, so buy-now-pay-later is available at checkout in the markets those providers support, alongside standard card payment.',
    },
    {
      q: 'Is the product quality actually a problem?',
      a: 'Independent review aggregators recur on the same themes — dresses and tops described as thin or cheap for the price point, and sizing that runs smaller or shorter than the chart. That is not universal, but it shows up often enough to factor into what you order and how you size it.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'hellomolly.com',
}
