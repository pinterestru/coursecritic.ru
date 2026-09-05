/**
 * Vertical-agnostic types for the /articles rating guides.
 *
 * A guide is always the same shape: a ranked list of schools/providers, an
 * author byline, a facts strip, FAQ and tracked CTAs. Only the registry of
 * providers changes between verticals — ЕГЭ-школы live in ../ege/schools.ts,
 * finance-course providers in ../finance/providers.ts. The shared components
 * in components/articles take the registry as a prop, so a new vertical needs
 * data files only, not new components.
 */

export interface ProviderRating {
  source: string
  value: number
}

/** One school / online-course provider featured in a rating guide. */
export interface GuideProvider {
  id: string
  name: string
  /** 2–3 character badge tile. */
  badge: string
  /** Hex tint for the badge. */
  color: string
  /** Bare domain (+ optional path) used to build the outbound link. */
  domain: string
  /** Human-readable site label shown under CTAs. */
  siteLabel: string
  /** EDсайдер editorial composite score, 0–5 (one decimal). */
  score: number
  /** One-line positioning. */
  tagline: string
  /** Headline facts for the compact rating row. */
  founded: string
  students: string
  /** Default price note (individual guides can override). */
  priceNote: string
  /** Short format description. */
  format: string
  /** Selling-point bullets. */
  highlights: string[]
  pros: string[]
  cons: string[]
  /** Payment / trust signals. */
  trust: string[]
  ratings: ProviderRating[]
  /**
   * When false the provider is NOT monetised: links go straight to its site
   * with rel="nofollow" instead of through the tracked /click redirect.
   * Defaults to true (every ЕГЭ school is an affiliate partner).
   */
  tracked?: boolean
  /** CTA wording for the #1 slot, e.g. 'Выбрать курс в Эдюсон →'. */
  topCta?: string
}

/** One provider's placement inside a specific guide's ranking. */
export interface RankEntry {
  schoolId: string
  /** Full direct deep-link for THIS guide (overrides the provider default). */
  deepLink?: string
  /** Price note for this guide (overrides the provider default). */
  price?: string
  /** Star teacher / lead expert for this guide, if notable. */
  teacher?: { name: string; bio: string }
  /** The author's guide-specific verdict paragraph (her personal take). */
  verdict: string
  /** One line: who this option fits best. */
  bestFor: string
  /** Optional per-guide pros/cons (fall back to provider defaults if omitted). */
  pros?: string[]
  cons?: string[]
  /**
   * Per-guide overrides of the provider's course-level facts. A school's default
   * `format`/`highlights` describe one specific course, so any guide about a
   * different course of theirs must restate them.
   */
  format?: string
  highlights?: string[]
  /** Positioning line for this course (overrides the provider's tagline). */
  tagline?: string
}

/** One cell of the facts strip (exam structure, profession snapshot, …). */
export interface FactItem {
  label: string
  value: string
}

export interface FaqItem {
  q: string
  a: string
}

/** Lightweight metadata for the index grid and cross-article navigation. */
export interface ArticleMeta {
  slug: string
  /** e.g. 'по русскому языку' — completes "Курсы подготовки к ЕГЭ {subject}". */
  subject: string
  /** Short label, e.g. 'Русский язык'. */
  shortSubject: string
  /** H1 / card title. */
  title: string
  /** <title> tag. */
  metaTitle: string
  metaDescription: string
  /** Primary search intent / keyword. */
  intent: string
  /** Index-card teaser. */
  blurb: string
  updated: string
  readingTime: string
  /** Accent hex for the index card. */
  accent: string
}

/** The recurring expert bylined across a vertical's guides. */
export interface Author {
  name: string
  role: string
  bio: string
  initials: string
  credentials: string[]
}

/**
 * Build the tracked affiliate href for a provider deep-link.
 *   affiliateHref('eduson.academy/fin-analyst') → '/click/eduson.academy/fin-analyst'
 * Accepts a full URL or a bare domain+path; strips protocol and www.
 */
export function affiliateHref(domainOrUrl: string): string {
  const clean = domainOrUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')
  return `/click/${clean}`
}

/** Plain external href for providers we don't monetise. */
export function directHref(domainOrUrl: string): string {
  if (/^https?:\/\//.test(domainOrUrl)) return domainOrUrl
  return `https://${domainOrUrl}`
}
