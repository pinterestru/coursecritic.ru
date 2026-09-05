/**
 * Brand page data for Wilson (route: /brands/wilson).
 *
 * SOURCES — every figure below comes from these pages:
 *   - https://en.wikipedia.org/wiki/Wilson_Sporting_Goods and
 *     https://www.fundinguniverse.com/company-histories/wilson-sporting-goods-company-history/
 *     — 1913 incorporation as Ashland Manufacturing, the 1989 Amer Group merger
 *   - https://www.sportico.com/personalities/executives/2024/chip-wilson-amer-sports-profit-1234817161/
 *     — the 2019 Amer Sports consortium (Anta Sports, FountainVest, Tencent,
 *     Chip Wilson)
 *   - https://www.usopen.org/en_US/about/sponsors/wilson.html and
 *     https://sgbonline.com/wilson-named-official-ball-for-australian-open/ —
 *     official-ball status at the US Open and Australian Open
 *   - https://support.wilson.com/s/article/What-is-Wilson-s-return-policy —
 *     30-day return window, custom-item exclusions, holiday extension
 *   - https://www.sitejabber.com/reviews/wilson.com — rating and volume
 *     (small sample, flagged as such below; no numeric Trustpilot score for
 *     wilson.com could be independently verified at the time of writing)
 *
 * ⚠️ Prices, fees and policy terms are working values captured on 2026-08-24
 * and MUST be re-verified before any campaign. See ../../README.md.
 */
import { SITE } from '../site'
import type { BrandPage } from './types'

export const wilson: BrandPage = {
  slug: 'wilson',
  providerId: 'wilson',
  metaTitle: 'Wilson review 2026 — official gear, cost, returns',
  metaDescription:
    'Wilson reviewed: what it means to be the official ball of the NBA and two Grand Slams, the real return terms at wilson.com, and where the complaints cluster.',
  intro:
    'Wilson is one of the few sporting-goods brands that can prove its on-court credibility with a contract rather than a slogan: it supplies the official ball for the NBA, the US Open and the Australian Open. The catalogue at wilson.com spans rackets, gloves, clubs and apparel across a dozen sports. The trade-off is a return policy with real exclusions and a customer-service record that independent review sites do not rate kindly.',
  about: [
    'Wilson traces back to 1913, when it was incorporated in Chicago as Ashland Manufacturing Company, originally set up to use byproducts from a nearby meat-packing plant before it pivoted into sporting goods entirely. It grew through the twentieth century into one of the biggest names in tennis, baseball and golf equipment, and a 1989 merger made it a subsidiary of Finland’s Amer Group, a relationship that has continued in one form or another ever since under the wider Amer Sports umbrella.',
    'Amer Sports itself changed hands again in 2019, bought by a consortium led by China’s Anta Sports alongside investment firm FountainVest, the technology group Tencent, and Lululemon founder Chip Wilson — a coincidence of surnames entirely unrelated to the sporting-goods brand he helped buy. Wilson Sporting Goods has operated under that ownership structure since, alongside sibling brands including Salomon and Arc’teryx inside the same wider group of outdoor and sports companies.',
    'What still sets Wilson apart commercially is its sponsorship book: official ball of the NBA since the 2021–22 season, ending Spalding’s 37-year run in that role, plus the US Open and a separate five-year deal covering the Australian Open. The retail catalogue at wilson.com backs that up with tennis rackets and balls, baseball and softball gloves (the A2000 and A2K lines), golf, pickleball, badminton, volleyball, racquetball, squash and soccer gear.',
  ],
  facts: [
    { label: 'Incorporated', value: '1913, Chicago' },
    { label: 'Parent company', value: 'Amer Sports' },
    { label: 'Official ball of', value: 'NBA, US Open, Aus Open' },
    { label: 'Free shipping', value: 'US orders over $50' },
  ],
  plans: {
    title: 'What it costs to buy direct from Wilson',
    note: 'There is no membership tier — the terms that matter are the $50 free-shipping threshold and which items the 30-day return window actually covers.',
    items: [
      {
        name: 'Standard shipping',
        price: 'Free on US orders over $50',
        detail: 'Below that threshold a flat shipping fee applies at checkout.',
        pick: true,
      },
      {
        name: 'Stock item returns',
        price: 'Free within 30 days of receipt',
        detail:
          'Covers most off-the-shelf rackets, balls, gloves and apparel bought at wilson.com.',
      },
      {
        name: 'Custom or personalised gear',
        price: 'No returns once ordered',
        detail:
          'Strung rackets, custom golf clubs, custom inflates and anything with a personalised name, number or logo are final sale.',
      },
      {
        name: 'Holiday return extension',
        price: 'Same free return, longer window',
        detail: 'Purchases made through December stay returnable into late January.',
      },
    ],
  },
  pros: [
    {
      title: 'On-court credibility that is contractual, not marketing',
      body: 'Official ball of the NBA, the US Open and the Australian Open means buying "the same ball as the pros" for tennis or basketball is literally true, not an advertising line dressed up as a fact.',
    },
    {
      title: 'One retailer across a dozen sports',
      body: 'Tennis, baseball and softball gloves, golf, pickleball, badminton, volleyball, racquetball, squash and soccer gear all sit under one catalogue and one checkout, instead of several specialist retailers.',
    },
    {
      title: 'A low, clear free-shipping bar',
      body: 'The $50 threshold is easy to clear on a single racket, glove or pack of balls, well below what many specialist sporting-goods retailers require before shipping is free.',
    },
    {
      title: 'A holiday-friendly return window',
      body: 'Purchases made through December stay returnable into late January instead of expiring at the usual 30-day mark, useful cover for gifted equipment tried out over the break.',
    },
  ],
  cons: [
    {
      title: 'Custom and personalised gear cannot be returned',
      body: 'Strung rackets, custom clubs, custom inflates and anything personalised are final sale — exactly the orders a buyer is most likely to need to change.',
    },
    {
      title: 'Independent review sites flag customer service repeatedly',
      body: 'Reviewers on sites like Sitejabber cite slow customer service, shipping delays and expense as recurring complaints; the sample sizes are small, but the same themes repeat across separate review platforms.',
    },
    {
      title: 'The return window is short for the category',
      body: '30 days on stock items is standard for a large retailer but noticeably tighter than the 60–90 days some specialist racket and glove shops offer their customers.',
    },
  ],
  reputation: [
    { source: 'Sitejabber', value: 1.3, note: 'only 13 reviews — a small sample, not conclusive' },
    {
      source: `${SITE.name} editorial score`,
      value: 4.1,
      note: 'weighs the genuine sponsorship credibility and catalogue breadth against the service complaints noted above',
    },
  ],
  bestFor: [
    'Tennis and basketball players who want gear tied to real tour and league contracts',
    'Buyers who want one retailer for equipment across several sports',
    'Shoppers ordering a single item and wanting to clear the $50 free-shipping bar easily',
    'Holiday gift-buyers who need the return window to stretch past December',
  ],
  notFor: [
    'Anyone ordering custom-strung rackets or personalised gear who might need to return it',
    'Buyers who prioritise a strong, verifiable customer-service reputation above brand pedigree',
    'Shoppers wanting a longer-than-30-day return window on stock items',
  ],
  faq: [
    {
      q: 'Is Wilson really the official ball of the NBA?',
      a: 'Yes. Wilson became the NBA’s official ball supplier starting with the 2021–22 season, ending Spalding’s 37-year run in that role, and it remains the official ball of the US Open, where it has supplied every ball for more than forty years, plus the Australian Open under a separate five-year agreement covering the tournament and its lead-in events.',
    },
    {
      q: 'Who owns Wilson Sporting Goods?',
      a: 'Wilson has been part of the Amer Sports family since a 1989 merger with Finland’s Amer Group. Amer Sports itself changed hands again in 2019, bought by a consortium including China’s Anta Sports, investment firm FountainVest, technology group Tencent and Lululemon founder Chip Wilson, an unrelated coincidence of surnames.',
    },
    {
      q: 'What is Wilson’s return policy?',
      a: 'Most stock items bought at wilson.com can be returned free of charge within 30 days of receipt. Custom or personalised products — strung rackets, custom golf clubs, custom inflates, and anything carrying a personalised name, number or logo — are final sale and cannot be returned once ordered, so double-check custom specifications before confirming.',
    },
    {
      q: 'Does Wilson offer free shipping?',
      a: 'Yes, on US orders over $50, a lower bar than many specialist sporting-goods retailers set. Orders below that threshold pay a flat shipping fee calculated at checkout, and the free-shipping offer applies to domestic US orders rather than international ones, which should be checked separately before ordering from outside the country.',
    },
    {
      q: 'Can I return a holiday gift bought from Wilson?',
      a: 'Wilson extends its standard return window over the holidays: purchases made through December stay returnable into late January instead of expiring at the usual 30-day mark, which gives gift recipients time to actually try the equipment before the window closes. The same custom-item exclusions still apply during that extended period.',
    },
  ],
  updated: '2026-08-24',
  deepLink: 'wilson.com',
}
