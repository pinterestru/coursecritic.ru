import { kitPrice, rub } from '../../data/umschool/types'

import AffiliateButton from './AffiliateButton'

/**
 * What one subject costs depending on how many you buy.
 *
 * The school advertises the kit as «4 предмета по цене 2», which is a headline
 * about the total. The number that actually changes a decision is the one it
 * hides: the price per subject, which halves between one subject and four. A
 * family choosing between three subjects and four is not comparing 136 000 ₽
 * with 181 000 ₽ — they are comparing 38 518 ₽ a subject with 22 658 ₽ a
 * subject, and at that framing the fourth subject is close to free.
 *
 * The per-subject column is therefore the point of the table, and the row for
 * the reader's own count is highlighted rather than left to be found.
 */
export default function KitTable({
  unitPrice,
  deepLink,
  highlight = 4,
  caption,
  cta = 'Собрать комплект на umschool.net →',
}: {
  /** List price of one year course, e.g. 45 315 ₽. */
  unitPrice: number
  deepLink: string
  /** Which row to mark as the recommended one. */
  highlight?: number
  caption?: string
  cta?: string
}) {
  const rows = [1, 2, 3, 4].map((n) => ({ n, ...kitPrice(unitPrice, n) }))
  const single = rows[0].perSubject

  return (
    <figure>
      <div
        className="overflow-x-auto rounded-xl border"
        style={{ borderColor: 'rgb(var(--color-rule))' }}
      >
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr style={{ background: 'rgb(var(--color-surface))' }}>
              {['Предметов', 'Скидка', 'Всего за год', 'За один предмет', 'Против одного'].map(
                (h) => (
                  <th
                    key={h}
                    className="px-4 py-3 font-semibold whitespace-nowrap"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {h}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const isBest = r.n === highlight
              const saving = single - r.perSubject
              return (
                <tr
                  key={r.n}
                  className="border-t"
                  style={{
                    borderColor: 'rgb(var(--color-rule))',
                    background: isBest ? 'rgb(var(--color-primary) / 0.07)' : undefined,
                  }}
                >
                  <td
                    className="px-4 py-3 font-semibold whitespace-nowrap"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {r.n}
                    {isBest && (
                      <span
                        className="ml-2 rounded-full px-2 py-0.5 text-[11px] font-bold"
                        style={{
                          background: 'rgb(var(--color-primary))',
                          color: 'rgb(var(--color-primary-fg))',
                        }}
                      >
                        выгоднее всего
                      </span>
                    )}
                  </td>
                  <td
                    className="px-4 py-3 whitespace-nowrap"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    −{r.n >= 4 ? 50 : r.n >= 2 ? 15 : 10}%
                  </td>
                  <td
                    className="px-4 py-3 whitespace-nowrap"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {rub(r.total)}
                  </td>
                  <td
                    className="px-4 py-3 font-bold whitespace-nowrap"
                    style={{ color: isBest ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg))' }}
                  >
                    {rub(r.perSubject)}
                  </td>
                  <td
                    className="px-4 py-3 whitespace-nowrap"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {saving > 0 ? `−${rub(saving)} за предмет` : '—'}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {caption && (
        <figcaption
          className="mt-3 text-[13px] leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {caption}
        </figcaption>
      )}

      <div className="mt-5">
        <AffiliateButton to={deepLink}>{cta}</AffiliateButton>
      </div>
    </figure>
  )
}
