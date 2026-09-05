/**
 * Types for the Умскул promo-code landers.
 *
 * Same job as ../netology/types.ts — turn a list price into the number a buyer
 * actually pays — but the school's mechanics are inverted, and the data model
 * has to say so. On Нетология the code is the money. Here the money is
 * automatic: the basket recalculates itself for a kit of two or four subjects,
 * and no code is involved. The codes open a free mini-course instead, and are
 * entered somewhere else entirely — the ticket icon in the account, not the
 * checkout.
 *
 * Hence two separate types where the Нетология model has one `PromoCode`:
 * `FreeCourse` (a code, worth 0 ₽ off the price) and `AutoDiscount` (money, no
 * code). Collapsing them into one shape is exactly the mistake the articles
 * exist to correct.
 *
 * `PriceStep` and `rub` are re-exported from the Нетология model rather than
 * restated: the shared PriceLadder component types against that module, and a
 * second identical interface here would only drift.
 */
export type { PriceStep } from '../netology/types'
export { rub } from '../netology/types'

/** Which exam a grade is preparing for — ОГЭ in 9, ЕГЭ from 10, neither below. */
export type Exam = 'ЕГЭ' | 'ОГЭ' | 'Школа'

/**
 * A promo code that opens one mini-course for 0 ₽.
 *
 * Not a discount in any sense: it moves no price and stacks with nothing,
 * because there is nothing to stack with. Its value to a reader is the chance
 * to sit through a school's actual teaching — the platform, the tutor, the
 * homework — before committing 45 315 ₽ to a year of it. Every article treats
 * it that way rather than dressing it up as a saving.
 *
 * One code per subject per grade, single-use and bound to the account that
 * redeems it, so a reader can collect several across subjects.
 */
export interface FreeCourse {
  /** e.g. 'RUSS11_SITEPROMO1_CC'. */
  code: string
  /** Lowercase, for mid-sentence use: 'русский язык'. */
  subject: string
  /** Capitalised, for headings and table cells: 'Русский язык'. */
  subjectLabel: string
  /** Slug shared with the subject's article: 'russkiy'. */
  subjectSlug: string
  grade: 7 | 8 | 9 | 10 | 11
  exam: Exam
  /** What the mini-course actually covers, in the school's own words. */
  inside: string
  /** ISO date the code expires. */
  expires: string
}

/**
 * A discount that applies itself in the basket, with no code at all.
 *
 * These are where the money is, and they are what a reader searching for a
 * promo code will otherwise walk past: the kit discounts move the price by
 * tens of thousands of roubles, while the best money code in existence for
 * this school is worth −12% and is probably dead.
 */
export interface AutoDiscount {
  id: string
  /** Headline, e.g. '«4 предмета по цене 2»'. */
  title: string
  /** Rendered saving, e.g. '−50%'. Absent for offers that are not a percentage. */
  label?: string
  /** Percent off, when the offer is one — used to compute a kit price. */
  percent?: number
  /** What it is and who it is for. */
  detail: string
  /** The steps that trigger it, in order. */
  how: string[]
  /** ISO date it expires, when the school states one. */
  expires?: string
}

/**
 * A money code — a discount entered in the basket, the way most schools work.
 *
 * Kept as its own type with exactly one instance because the honest answer to
 * «промокод Умскул на скидку» is that the school has essentially none, and a
 * one-element list states that more plainly than an absent one.
 */
export interface MoneyCode {
  code: string
  label: string
  percent: number
  note: string
  /** Whether the code still works — aggregators mark this one expired. */
  status: 'live' | 'disputed' | 'expired'
}

/**
 * A year-long course: the product every article is ultimately about.
 *
 * `price` is what the site shows and `priceOld` what it strikes through. The
 * gap between them is almost exactly 15%, which is the school's own two-subject
 * kit discount — a coincidence worth checking at the till rather than asserting
 * here, and one the articles flag instead of glossing over.
 */
export interface YearCourse {
  /** Path on umschool.net, e.g. 'ege/russian-11-class-aleksandr-dolgih-10980/'. */
  path: string
  name: string
  /** Short label for tables: 'Русский язык, 11 класс'. */
  shortName: string
  teacher: string
  /** One line on what that teacher is known for. */
  teacherNote: string
  subjectSlug: string
  /** Displayed price in ₽. */
  price: number
  /** Struck-through price in ₽. */
  priceOld: number
  /** Instalment payment, ₽ per month. */
  perMonth: number
  perMonthOld: number
  rating: number
  reviews: number
}

/** Catalogue path for subjects with no individual course page in our data. */
export const CATALOG_PATH = 'umschool.net/courses/'
/** Where every code is redeemed and every discount applies itself. */
export const COUPONS_PATH = 'umschool.net/coupons/'

/**
 * What a kit of `n` subjects costs, and what it costs per subject.
 *
 * The school prices kits by discount tier rather than per item: four subjects
 * for the price of two (−50%), two or three at −15%, one at −10%. Computing it
 * here keeps every article's arithmetic identical — the per-subject figure is
 * the one that actually changes a reader's mind, and it is the one nobody
 * works out for themselves.
 */
export function kitPrice(unitPrice: number, n: number): { total: number; perSubject: number } {
  const percent = n >= 4 ? 50 : n >= 2 ? 15 : 10
  const total = Math.round((unitPrice * n * (100 - percent)) / 100)
  return { total, perSubject: Math.round(total / n) }
}

/** Human label for a grade + exam pair: 'ЕГЭ, 11 класс' or '7 класс'. */
export function gradeLabel(fc: Pick<FreeCourse, 'exam' | 'grade'>): string {
  return fc.exam === 'Школа' ? `${fc.grade} класс` : `${fc.exam}, ${fc.grade} класс`
}
