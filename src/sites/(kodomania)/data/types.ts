/**
 * Shared types for the guide data set.
 *
 * This module imports nothing on purpose. `guides.ts` spreads the per-cluster
 * arrays from `cruises.ts` / `winelab.ts`, and those files need the `Guide`
 * type — importing it from `guides.ts` created a type-only cycle that would
 * become a real, build-breaking runtime cycle the moment anyone imported a
 * *value* back. Keeping the types here removes that hazard entirely.
 */

export type GuideGroup =
  | 'Обучение в подарок'
  | 'По профессии'
  | 'По ситуации'
  | 'Кому подарить'
  | 'Впечатления в подарок'
  | 'Вкусные подарки'

/** Per-article visual identity. Colours are space-separated RGB triplets unless
 *  noted; hex is used only for the two hero/card gradient stops. */
export interface ArticleTheme {
  /** Two-stop gradient (hex) for the hero + card. */
  grad: [string, string]
  /** Primary accent — buttons, ranks, links. RGB triplet. */
  accent: string
  /** Secondary accent — highlights, pops. RGB triplet. */
  accent2: string
  /** Soft tint for section backgrounds. RGB triplet. */
  tint: string
  /** Deep ink for dark panels. RGB triplet. */
  ink: string
}

/** Body layout motif for the ranked idea list. */
export type GuideLayout = 'rows' | 'cards' | 'timeline'

export interface GiftIdea {
  name: string
  brand?: string
  emoji: string
  /** One or two sentences: why it works as a gift. */
  why: string
  /** Starting price in RUB. 0 → «Бесплатно». */
  price: number
  /** e.g. '/мес' for courses/subscriptions. */
  per?: string
  /** Practicum deep-link path → routes through the edphub tracker. */
  practicumPath?: string
  /** Course deep-link "host/path" for a non-Practicum school → direct link + affiliate UTM. */
  deepLink?: string
  /** Overrides the formatted price label, e.g. 'от 3 900 ₽/мес' or 'Бесплатный старт'. */
  priceText?: string
  /** Marketplace search term → routes through /click to Yandex Market (physical goods). */
  search?: string
  /** Advertiser URL (e.g. 'https://kruiz.online/sea') → routes through /click. */
  clickUrl?: string
  /** Overrides the CTA button label. */
  ctaLabel?: string
}

export interface GuideFaq {
  q: string
  a: string
}

/**
 * Prose block rendered under the ranked list. This is where an article's
 * informational depth lives — «как выбрать», «как это работает», «сколько
 * стоит» — so guides can serve how/what/which intents without turning the
 * ranked list into a fake one.
 */
export interface GuideSection {
  h: string
  p: string[]
  bullets?: string[]
  /** Scannable comparison grid rendered under the paragraphs. */
  table?: { head: string[]; rows: string[][] }
  /**
   * Action for this section. The strongest commercial passages — discounts,
   * loyalty terms, «когда бронировать» — used to be dead text; this gives each
   * of them the click it earns.
   */
  cta?: { label: string; clickUrl: string }
}

/**
 * Overrides the article's closing CTA. Education guides leave this undefined
 * and keep the default Practicum block; guides built around another advertiser
 * point the CTA at that advertiser instead, so the funnel matches the topic.
 */
export interface GuideCta {
  kicker: string
  title: string
  text: string
  label: string
  /** Advertiser URL → routes through /click. */
  clickUrl: string
}

export interface Guide {
  slug: string
  /** Card + H1 title. */
  title: string
  metaTitle: string
  metaDescription: string
  group: GuideGroup
  /** Short label for the category chip / card. */
  tag: string
  emoji: string
  /** Per-article visual identity. */
  theme: ArticleTheme
  /** Idea-list layout motif. */
  layout: GuideLayout
  /** One-line teaser for cards + hero. */
  lead: string
  /** Article intro paragraphs. */
  intro: string[]
  ideas: GiftIdea[]
  /**
   * Badge on the #1 card. Defaults to «Выбор редакции» — override it when the
   * list is a catalogue or a set of steps rather than a ranked recommendation,
   * so the badge never claims an endorsement the list does not make.
   */
  featuredLabel?: string
  /** Optional prose blocks rendered after the ranked list. */
  sections?: GuideSection[]
  /** Small legal/disclosure note shown above the body (e.g. the 18+ notice). */
  notice?: string
  /** Closing CTA override; undefined → the default Practicum block. */
  cta?: GuideCta
  faq: GuideFaq[]
  /** Slugs of related guides. */
  related: string[]
  /** ISO date for article metadata. */
  updated: string
}
