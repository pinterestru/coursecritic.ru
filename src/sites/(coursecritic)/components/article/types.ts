// Data model for the data-driven "Top-N courses" listicle pages.
// One `Article` object fully describes a post; `CourseListicle` renders it.

export interface Criterion {
  /** Bold lead-in, e.g. "Код-ревью." */
  title: string
  /** Rest of the sentence after the bold lead-in. */
  body: string
}

export interface SaveTip {
  /** Body of the "Как сэкономить" callout. */
  body: string
  /** Label for the affiliate CTA button inside the callout. */
  ctaLabel: string
}

export interface Course {
  /** 1-based position in the ranking; also used for the anchor id `course-<rank>`. */
  rank: number
  /** School name, e.g. "Яндекс Практикум". */
  provider: string
  /** Short value proposition shown under the name. */
  headline: string
  /** Affiliate (edurev.ru) tracker URL for this course. */
  url: string
  /** Duration chip, e.g. "10–13 мес" or "—". */
  duration: string
  /** Price chip, e.g. "от 5 388 ₽/мес". */
  price: string
  /** Whether the school offers a money-back employment guarantee. Drives the comparison filter. */
  guarantee: boolean
  /** Marks the editor's pick — highlighted card + badge. */
  best?: boolean
  /** Optional small spot illustration shown in the card header. */
  icon?: { src: string; alt: string }
  /** Narrative paragraphs (context, pricing). */
  body: string[]
  pros: string[]
  cons: string[]
  /** One-line verdict (rendered after a bold "Вердикт:"). */
  verdict: string
  /** Optional money-saving callout (used on the editor's pick). */
  save?: SaveTip
}

export interface MatchItem {
  provider: string
  text: string
}

export interface Article {
  slug: string
  title: string
  description: string
  /** ISO date for <time dateTime>. */
  date: string
  /** Human date label. */
  dateLabel: string
  author: string
  readingTime: string
  hero: { src: string; alt: string }
  /** Italic standfirst under the title. */
  lede: string
  introHeading: string
  intro: string[]
  role: { heading: string; body: string[] }
  criteriaHeading: string
  /** Optional lead paragraph before the criteria list. */
  criteriaIntro?: string
  criteria: Criterion[]
  courses: Course[]
  matchHeading: string
  match: MatchItem[]
  closing: string[]
}
