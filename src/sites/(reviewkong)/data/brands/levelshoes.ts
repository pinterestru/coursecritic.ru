/**
 * Brand page data for Level Shoes (route: /brands/levelshoes).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://www.levelshoes.com/stories/patrick-michael-chalhoub-legacy-family-values
 *     and https://www.chalhoubgroup.com/en/media/11/level-shoes--from-the-uae-to-the-world
 *     — founding, Chalhoub Group ownership, positioning
 *   - https://www.levelshoes.com/faqs and https://us.levelshoes.com/return-policy
 *     — 30-day return window, free international returns via Glopal, delivery
 *     speed tiers in the UAE and GCC
 *   - https://www.trustpilot.com/review/levelshoes.com — rating and review
 *     count, star distribution
 *
 * ⚠️ Prices, fees and promotional terms are working values captured on
 * 2026-08-24 and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const levelshoes: BrandPage = {
  slug: 'levelshoes',
  providerId: 'levelshoes',
  metaTitle: 'Level Shoes review 2026 — luxury footwear from the UAE',
  metaDescription:
    'An independent Level Shoes review: the Dubai luxury footwear retailer behind the Dubai Mall flagship, what it actually delivers outside the Gulf, and where its Trustpilot record disagrees with its reputation.',
  intro:
    'Level Shoes is a Dubai-based luxury footwear and accessories retailer, owned by the Chalhoub Group, built around a flagship store in Dubai Mall and an e-commerce platform carrying over 250 designer labels. It is a Gulf retailer first: same-day and 90-minute delivery are UAE features, and an international order is a different, slower proposition than a GCC one. Its public review record is considerably rougher than its luxury positioning suggests.',
  about: [
    'Level Shoes was founded in Dubai in 2012 and is owned by the Chalhoub Group, the Gulf’s dominant luxury retail conglomerate, founded in 1955 by Michel and Widad Chalhoub and still family-led. Level Shoes built its identity on its physical flagship inside Dubai Mall — one of the largest dedicated footwear stores in the world — before extending into a fully integrated e-commerce app and site covering women’s, men’s and children’s footwear and accessories.',
    'The catalogue runs to more than 250 designer names, spanning established luxury houses and emerging labels, plus a pre-loved resale section. That breadth, combined with in-store services like styling and exclusive product launches, is the pitch: a single destination for designer footwear rather than a specialist in one category or price tier.',
    'Delivery is genuinely fast inside the UAE — 90-minute delivery in Dubai, same-day or next-day elsewhere depending on order cutoff — and the company extends dedicated delivery to GCC countries with free regional returns. Outside the Gulf, orders route through a third-party international service, Glopal, which handles customs and returns but adds a layer buyers outside the region should expect and plan around.',
  ],
  facts: [
    { label: 'Founded', value: 'Dubai, 2012' },
    { label: 'Owner', value: 'Chalhoub Group' },
    { label: 'Catalogue', value: '250+ designer labels' },
    { label: 'Returns', value: '30 days, free' },
  ],
  plans: {
    title: 'How delivery and returns are tiered',
    note: 'Delivery speed and cost depend heavily on where you are ordering from — UAE buyers get by far the fastest and cheapest service; everyone else routes through a third-party international partner.',
    items: [
      {
        name: 'UAE delivery',
        price: 'Free on UAE orders',
        detail:
          '90-minute delivery in Dubai; same-day for orders placed before 2pm elsewhere in the UAE, next-day after that cutoff.',
        pick: true,
      },
      {
        name: 'GCC delivery',
        price: 'Dedicated regional service',
        detail:
          'Level Shoes ships directly to other Gulf countries with a faster service than standard international shipping, and free regional returns.',
      },
      {
        name: 'International delivery',
        price: 'Via Glopal',
        detail:
          'Orders outside the GCC route through Level Shoes’ international partner Glopal, which handles customs clearance and free international returns but adds transit time.',
      },
      {
        name: 'Click & Collect',
        price: 'Free, Dubai Mall',
        detail:
          'Collect at the Dubai Mall Concierge Desk with your confirmation email and ID — the fastest option if you are in Dubai already.',
      },
    ],
  },
  pros: [
    {
      title: 'One of the widest luxury footwear catalogues anywhere online',
      body: 'More than 250 designer names in one place, spanning established houses to newer labels, plus a pre-loved section most luxury retailers do not offer at all.',
    },
    {
      title: 'UAE delivery that actually is fast',
      body: '90-minute delivery in Dubai and same-day elsewhere in the country is a genuine differentiator, not a marketing claim — most competitors quote days, not hours.',
    },
    {
      title: 'A flagship that is a destination in its own right',
      body: 'The Dubai Mall store hosts exclusive launches and limited releases, which gives Level Shoes access to drops that do not show up on generic multi-brand sites.',
    },
    {
      title: 'Free returns, including internationally',
      body: 'Both UAE/GCC and international orders carry free returns, which removes the biggest reason shoppers avoid buying luxury shoes online sight-unseen.',
    },
  ],
  cons: [
    {
      title: 'Trustpilot rates it "Poor", and by a wide margin',
      body: 'Level Shoes sits around 2.1 out of 5 on Trustpilot from a small but heavily 1-star-skewed sample, with recurring complaints about international returns disputes and slow refund processing.',
    },
    {
      title: 'International shipping is a different, slower product',
      body: 'Orders outside the GCC go through the third-party Glopal service. It works, but it is a genuinely different experience from the UAE’s 90-minute delivery, and buyers should not expect the same speed.',
    },
    {
      title: 'Returns disputes over item condition are a recurring complaint',
      body: 'Multiple public reviews describe returns rejected on the grounds the item showed signs of wear after being tried on indoors. Photograph footwear before wearing it, and read the return terms for your region closely.',
    },
  ],
  reputation: [
    { source: 'Trustpilot', value: 2.1, note: 'rated "Poor", based on around 38 reviews' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.0,
      note: 'our composite across catalogue breadth, delivery infrastructure and verified reputation',
    },
  ],
  bestFor: [
    'Shoppers in the UAE or wider GCC wanting fast luxury footwear delivery',
    'Buyers after a specific designer label or a limited Dubai Mall drop',
    'Anyone wanting one destination across 250+ designer names instead of hopping sites',
    'International shoppers happy to accept a slower, Glopal-mediated delivery for genuine luxury stock',
  ],
  notFor: [
    'International buyers expecting UAE-speed delivery outside the Gulf',
    'Anyone who has read the Trustpilot pattern on returns and wants a smoother dispute history',
    'Shoppers who plan to try shoes on at home before deciding — do it carefully, return condition is contested',
  ],
  faq: [
    {
      q: 'Does Level Shoes deliver outside the UAE?',
      a: 'Yes, to the rest of the GCC directly and further afield through its international partner Glopal, which handles customs and returns. Expect a slower, more conventional delivery timeline than the UAE’s same-day and 90-minute options.',
    },
    {
      q: 'How long is the return window?',
      a: 'Level Shoes advertises a 30-day return window with free returns, including internationally through Glopal. Keep original packaging and avoid wearing items outdoors, since condition disputes are a recurring complaint in public reviews.',
    },
    {
      q: 'Who owns Level Shoes?',
      a: 'It is owned by the Chalhoub Group, a family-led luxury retail conglomerate founded in 1955 and one of the dominant players in Gulf luxury retail, with joint ventures across many international luxury brands.',
    },
    {
      q: 'Can I collect an order in person instead of waiting for delivery?',
      a: 'Yes, via Click & Collect at the Dubai Mall flagship’s Concierge Desk. Select it at checkout and bring your confirmation email and ID — useful if you are already in Dubai and want to skip the wait.',
    },
    {
      q: 'Why is the Trustpilot score lower than you would expect from a luxury retailer?',
      a: 'The sample is small — around 38 reviews — and skews toward customers who had a returns or refund dispute, which is typical of review platforms generally. It is still a real signal worth weighing against the retailer’s scale and reach.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'levelshoes.com',
}
