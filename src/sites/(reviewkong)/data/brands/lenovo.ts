/**
 * Brand page data for Lenovo (route: /brands/lenovo).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.lenovo.com/us/en/shopping-faq/ and Lenovo return-policy summaries
 *     — 30-day return window, up to 15% restocking fee on opened non-defective
 *     returns, free shipping, no restock fee for damaged/wrong items
 *   - https://www.lenovo.com/us/en/services-warranty/premiersupport/ and
 *     https://www.lenovo.com/us/en/edupremium_care/ — Premier Support and
 *     education protection-plan structure
 *   - https://www.trustpilot.com/review/www.lenovo.com — TrustScore, "Bad"
 *   - Global PC market-share reporting (Statista, Tom's Hardware, Counterpoint-style
 *     coverage) — #1 global PC vendor by shipments in 2024, ~23.5% share, 61.8M
 *     units; company operating in 180+ countries
 *   - Company history: founded as Legend in Beijing in 1984, acquired IBM's PC
 *     division (including ThinkPad) in 2005, acquired Motorola Mobility from
 *     Google in 2014; dual headquarters in Beijing and Morrisville, NC
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified against lenovo.com before any campaign.
 * PC market-share figures move quarterly and should be re-checked before reuse.
 * See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const lenovo: BrandPage = {
  slug: 'lenovo',
  providerId: 'lenovo',
  metaTitle: 'Lenovo review 2026 — returns, warranty, support record',
  metaDescription:
    'An independent Lenovo review: how the return and restocking policy works, what Premier Support adds, and why the Trustpilot record trails the market share.',
  intro:
    'Lenovo ships more PCs than any other company on earth, ThinkPad, Legion, Yoga and IdeaPad all sit under one roof, plus Motorola phones since 2014. Scale is not the question here. The question is what happens after checkout: a 30-day return window with a restocking fee on opened items, and a direct-support reputation on independent review sites that lags well behind the hardware’s reputation.',
  about: [
    'Lenovo traces back to Legend, founded in Beijing in 1984 with the equivalent of $25,000 in capital. It became a global PC brand in 2005 by acquiring IBM’s personal computing division, ThinkPad included, and added Motorola Mobility from Google in 2014, giving it a smartphone business alongside laptops and desktops. It now runs dual headquarters in Beijing and Morrisville, North Carolina, and by 2024 shipped more PCs worldwide than any competitor, roughly 61.8 million units and a market share near 23.5%.',
    'The product range spans budget to premium under separate sub-brands rather than one undifferentiated line: ThinkPad for business and durability, Legion for gaming, Yoga for convertibles and premium consumer hardware, IdeaPad as the mainstream range, plus Motorola handsets as a separate division. That segmentation is deliberate, a ThinkPad buyer and a Legion buyer are shopping for different things, and Lenovo prices and markets them accordingly rather than as one brand.',
    'Commercially, lenovo.com runs standard e-commerce terms rather than a subscription: free shipping on orders, a 30-day return window, and a restocking fee of up to 15% on opened, non-defective returns. Items that arrive damaged or wrong are exempt from that fee and Lenovo covers the return shipping itself. Premier Support and its education equivalent, Premium Care, are separately sold protection plans rather than something included by default with a standard purchase, which matters if a fault appears after the base warranty window.',
  ],
  facts: [
    { label: 'Founded', value: '1984, as Legend' },
    { label: 'Global PC share', value: '#1, ~23.5% (2024)' },
    { label: 'Return window', value: '30 days' },
    { label: 'Restocking fee', value: 'up to 15%, if opened' },
  ],
  plans: {
    title: 'What buying from lenovo.com actually costs',
    note: 'The listed price is only the start. Whether a return costs you 15% depends on opening the box, and meaningful support beyond the base warranty is a separate paid add-on.',
    items: [
      {
        name: 'Standard purchase',
        price: 'listed price, free shipping',
        detail:
          'Base manufacturer warranty applies; support beyond it is limited unless a protection plan is added at checkout.',
      },
      {
        name: 'Unopened return, within 30 days',
        price: 'full refund, no fee',
        detail:
          'The clean case: return an unopened item inside the window and there is no restocking charge.',
        pick: true,
      },
      {
        name: 'Opened, non-defective return',
        price: 'up to 15% restocking fee',
        detail:
          'Change your mind after using the machine and Lenovo can deduct up to 15% of the price, on top of arranging the return itself.',
      },
      {
        name: 'Premier Support / Premium Care',
        price: 'add-on plan',
        detail:
          'Paid protection and priority support, aimed particularly at business and education buyers who need faster turnaround on a hardware failure.',
      },
    ],
  },
  pros: [
    {
      title: 'The widest hardware range of any single PC vendor',
      body: 'ThinkPad, Legion, Yoga and IdeaPad cover business, gaming, premium consumer and budget segments under one storefront, with Motorola phones sitting alongside them in the same ecosystem.',
    },
    {
      title: 'Scale keeps parts and resale value healthy',
      body: 'Being the world’s largest PC vendor by shipments means ThinkPad and Legion parts, accessories and third-party support are easy to find years after purchase, unlike a niche brand.',
    },
    {
      title: 'Damaged or wrong orders are handled without penalty',
      body: 'Items that arrive defective or incorrect skip the restocking fee entirely and Lenovo covers the return shipping itself, unlike a simple change-of-mind return where you pay both ways.',
    },
    {
      title: 'Segmented sub-brands instead of one undifferentiated line',
      body: 'A ThinkPad buyer and a Legion buyer are shopping for genuinely different things, and Lenovo prices, designs and markets each range for its actual audience.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rates Lenovo "Bad", and it is not a small sample',
      body: 'The direct-to-consumer support experience scores 1.3 out of 5 on Trustpilot from thousands of reviews, a pattern serious enough to weigh against the hardware’s otherwise strong reputation.',
    },
    {
      title: 'Open the box and a return can cost you 15%',
      body: 'Once a laptop has been used, even briefly, a non-defective return can be docked up to 15% as a restocking fee, a real cost if a configuration turns out wrong for you.',
    },
    {
      title: 'Meaningful support is a paid add-on, not the default',
      body: 'Premier Support and equivalent plans, the tier that gets a business or education buyer fast turnaround on a hardware fault, are sold separately rather than included with a standard purchase.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 1.3, note: '~3,500 reviews, rated "Bad"' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'our composite weights hardware breadth and market position against the weak direct-support record',
    },
  ],
  bestFor: [
    'Business buyers who want a ThinkPad specifically for its durability reputation',
    'Gamers comparing Legion against other manufacturers on spec-for-price',
    'Buyers who will return an item unopened if it turns out wrong, avoiding the restocking fee',
    'Anyone who wants Motorola phones and Lenovo PCs from a single company ecosystem',
  ],
  notFor: [
    'Buyers who expect to need direct post-purchase support without paying for Premier Support separately',
    'Anyone likely to open and use a laptop before deciding whether to return it',
    'Shoppers who weigh Trustpilot-style support reviews heavily in a purchase decision',
  ],
  faq: [
    {
      q: 'What is Lenovo’s return policy?',
      a: 'Returns are accepted within 30 days of delivery. Unopened items get a full refund with no fee attached. Opened, non-defective returns can carry a restocking fee of up to 15% of the price, though items that arrive damaged or incorrect are exempt from that fee and Lenovo covers the return shipping.',
    },
    {
      q: 'Is Lenovo actually the biggest PC maker?',
      a: 'Yes, by shipment volume: it led global PC shipments in 2024 with roughly 61.8 million units and about 23.5% market share, ahead of HP and Dell. Rankings shift quarter to quarter, so check current figures before treating this as fixed.',
    },
    {
      q: 'Does Lenovo still make ThinkPad?',
      a: 'Yes. ThinkPad has been a Lenovo line since its 2005 acquisition of IBM’s personal computing division, and it remains the business-focused range, aimed at durability and enterprise buyers who prize a keyboard and chassis built for years of daily use, sitting alongside Legion, Yoga and IdeaPad as distinct, separately marketed sub-brands.',
    },
    {
      q: 'Is Motorola owned by Lenovo?',
      a: 'Yes. Lenovo acquired Motorola Mobility from Google in 2014 and runs it as a wholly-owned subsidiary, giving the group a smartphone business separate from its ThinkPad, Legion, Yoga and IdeaPad PC lines, marketed under its own Motorola brand rather than Lenovo’s.',
    },
    {
      q: 'Why is the Trustpilot score so much lower than the market position suggests?',
      a: 'Trustpilot reviews concentrate on direct customer-service and post-purchase support experiences, an area where Lenovo scores poorly at 1.3 out of 5 despite its hardware leading the market by shipment volume. Market share measures what people buy; Trustpilot measures what happens when something goes wrong afterward, and the two do not track each other.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'lenovo.com',
}
