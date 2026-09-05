/**
 * Types for the Нетология promo-code landers.
 *
 * These guides are a different shape from the ranking guides in ../guides: no
 * leaderboard, one school, and the whole article is built around one number —
 * what the reader actually pays at checkout. So the data model is the receipt:
 * the school's tariffs, the codes that apply to them, and the ladder of
 * deductions that turns a list price into a final one.
 */

/**
 * One purchasable tier on a Нетология course page.
 *
 * The number printed largest on the card is the price BEFORE the sale, not
 * after it — a detail worth stating because it inverts the obvious reading.
 * The real cost of the tier is `monthly × monthlyTerm`, which is what the
 * school's own installment adds up to, and it lands within a few hundred
 * roubles of `price × (1 - promoPercent/100)` on every tariff we checked.
 * Paying at once applies a further discount on top and gives `lumpSum`.
 */
export interface Tariff {
  name: string
  /** The school's own one-line positioning for the tier. */
  positioning: string
  /** List price in ₽, before the site-wide sale — the headline figure. */
  price: number
  /** Site-wide sale on this tier, e.g. 45 for «-45% до 28 августа». */
  promoPercent: number
  /** Installment payment, ₽ per month over `monthlyTerm` months, no interest. */
  monthly: number
  monthlyTerm: number
  /**
   * Single-payment price, when the school offers a further discount for paying
   * at once. Absent on the university-partner programmes, which price the
   * course at the instalment total and give nothing extra for paying up front.
   */
  lumpSum?: number
  /** Wording of that further discount, e.g. 'включая скидку 15%'. */
  lumpSumNote?: string
  duration: string
  perks: string[]
  /** The tier Нетология marks «Рекомендуем». */
  recommended?: boolean
}

/**
 * What the tier actually costs after the sale: the installment total.
 *
 * Preferred over recomputing `price × (1 - promoPercent/100)` because the
 * school rounds the instalment, and this is the figure a buyer is really
 * committed to when they choose «частями без переплат».
 */
export function salePrice(tariff: Tariff): number {
  return tariff.monthly * tariff.monthlyTerm
}

/**
 * How a code behaves next to the sale already running on the course page.
 *
 * This is the single most important property of a Нетология code and the one
 * every promo aggregator gets wrong. A code that replaces the sale is measured
 * against the list price and usually loses outright; one that lands on top of
 * it takes its cut from the already-reduced sum. The school documents this for
 * only some codes, so 'unverified' is a real state, not a gap to guess at — the
 * articles say so plainly rather than implying a saving we have not confirmed.
 */
export type Stacking = 'confirmed' | 'replaces' | 'unverified'

/**
 * A Нетология promo code.
 *
 * `kind` matters more than the headline number: a fixed code takes its rouble
 * amount off the final sum, so on an already-discounted price it beats a
 * percentage that would be computed from the reduced base.
 */
export interface PromoCode {
  code: string
  kind: 'fixed' | 'percent'
  /** Roubles for 'fixed', percent for 'percent'. */
  value: number
  /** Rendered discount, e.g. '−20 000 ₽' or '−15%'. */
  label: string
  /** Which programmes the code is valid on. */
  scope: string
  /** What we know about the code in practice. */
  note: string
  stacking: Stacking
  /** Deep-link path on netology.ru the code belongs to, when it is a named one. */
  path?: string
  /** ISO date the code expires, when the school states one. */
  expires?: string
}

/**
 * A discount that needs no code at all.
 *
 * Worth listing beside the codes because on this school they are usually
 * bigger: the automatic sale and the single-payment discount together move the
 * price far more than any promo code, and readers hunting for a code routinely
 * miss them.
 */
export interface AutoOffer {
  title: string
  detail: string
  /** Deep-link path on netology.ru, when the offer has its own page. */
  path?: string
}

/**
 * One rung of the checkout ladder.
 *
 * `amount` is the running total after this step, not the delta — the delta is
 * `delta`, kept separately so the component can print both without arithmetic.
 */
export interface PriceStep {
  label: string
  detail?: string
  /** Running total in ₽ after this step. */
  amount: number
  /** Signed change this step applied, in ₽. Omitted for the opening row. */
  delta?: number
  kind: 'base' | 'discount' | 'total' | 'refund'
}

/** Headline facts about a course, straight from its landing page. */
export interface CourseFacts {
  /** Course slug on netology.ru, e.g. 'python-basic'. */
  path: string
  name: string
  duration: string
  starts: string
  /** Site-wide sale running on the page when the article was written. */
  sale: string
  document: string
  tariffs: Tariff[]
}

/**
 * Formats roubles the way the school does: '194 515 ₽'.
 *
 * `toLocaleString` groups with a plain space in some ICU builds and a no-break
 * space in others, so both are normalised to a narrow no-break space — that
 * keeps an amount from ever wrapping mid-number inside a table cell.
 */
export function rub(value: number): string {
  const grouped = value.toLocaleString('ru-RU').replace(/[\s\u00A0]/g, '\u202F')
  return `${grouped}\u00A0\u20BD`
}

/** Human label for how a code behaves next to a running sale. */
export function stackingLabel(stacking: Stacking): string {
  switch (stacking) {
    case 'confirmed':
      return 'Складывается с акцией'
    case 'replaces':
      return 'Заменяет акцию, не суммируется'
    case 'unverified':
      return 'Сложение с акцией школа не подтверждает'
  }
}
