/**
 * Date formatting that is safe to call from a client component.
 *
 * `toLocaleDateString` formats with the *visitor's* locale, so a date rendered
 * on the server and re-rendered in the browser can disagree and trip a
 * hydration mismatch. The offer cards are client components (they reveal and
 * copy codes), and every one of them prints a "checked" date, so the formatting
 * has to be deterministic. This is that: fixed English month names, no Intl.
 */
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** '2026-08-25' → '25 August 2026'. Returns the input unchanged if unparseable. */
export function formatDate(iso: string): string {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso)
  if (!match) return iso
  const [, year, month, day] = match
  const name = MONTHS[Number(month) - 1]
  if (!name) return iso
  return `${Number(day)} ${name} ${year}`
}

/** '2026-08-25' → '25 Aug 2026', for tight spaces like card footers. */
export function formatDateShort(iso: string): string {
  const long = formatDate(iso)
  if (long === iso) return iso
  const [day, month, year] = long.split(' ')
  return `${day} ${month.slice(0, 3)} ${year}`
}
