import type { PromoCode } from '../../data/netology/types'
import { rub } from '../../data/netology/types'

/**
 * What each code is actually worth on one specific price.
 *
 * A promo list sorted by headline percentage is misleading: a −15% code that
 * replaces the running sale competes with it instead of adding to it, and
 * usually loses outright. So a code that replaces the sale is measured against
 * the list price, and one that lands on top of it against the sale price.
 *
 * Codes whose stacking the school has not documented are computed the same way
 * as stacking ones but flagged in their own column, so the reader sees the
 * best case AND that it is unconfirmed. Confirmed codes outrank unverified ones
 * at equal saving — a smaller sure discount is worth more at the till than a
 * bigger maybe.
 */
export default function PromoCompare({
  codes,
  listPrice,
  salePrice,
  caption,
}: {
  codes: PromoCode[]
  /** Price before the school's own sale. */
  listPrice: number
  /** Price after the sale — the base a stacking code applies to. */
  salePrice: number
  caption?: string
}) {
  const rows = codes
    .map((c) => {
      // A code that replaces the sale is applied to the list price, and its
      // "saving" is measured against what the sale alone would have given — so a
      // code weaker than the sale correctly scores zero rather than a negative.
      const replaces = c.stacking === 'replaces'
      const base = replaces ? listPrice : salePrice
      const after = c.kind === 'fixed' ? base - c.value : Math.round(base * (1 - c.value / 100))
      const finalPrice = replaces ? Math.min(after, salePrice) : after
      return { code: c, finalPrice, saved: salePrice - finalPrice }
    })
    .sort((a, b) => {
      // Ranked by saving, but a confirmed code wins a tie against an unverified
      // one: at the till a sure 5% beats a maybe-5%.
      if (b.saved !== a.saved) return b.saved - a.saved
      const rank = (s: string) => (s === 'confirmed' ? 0 : s === 'unverified' ? 1 : 2)
      return rank(a.code.stacking) - rank(b.code.stacking)
    })

  const best = rows[0]

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-[15px]">
          <thead>
            <tr
              className="border-b"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
            >
              <th scope="col" className="py-2 pr-4 text-xs font-semibold tracking-wider uppercase">
                Промокод
              </th>
              <th scope="col" className="py-2 pr-4 text-xs font-semibold tracking-wider uppercase">
                Как считается
              </th>
              <th
                scope="col"
                className="py-2 pr-4 text-right text-xs font-semibold tracking-wider uppercase"
              >
                Выгода
              </th>
              <th
                scope="col"
                className="py-2 text-right text-xs font-semibold tracking-wider uppercase"
              >
                К оплате
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => {
              const isBest = r === best
              return (
                <tr
                  key={r.code.code}
                  className="border-b"
                  style={{
                    borderColor: 'rgb(var(--color-rule))',
                    background: isBest ? 'rgb(var(--color-primary) / 0.06)' : undefined,
                  }}
                >
                  <th scope="row" className="py-3 pr-4 align-top">
                    <code
                      className="font-mono text-sm font-bold"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {r.code.code}
                    </code>
                    <span
                      className="mt-0.5 block text-[13px] font-normal"
                      style={{ color: 'rgb(var(--color-muted))' }}
                    >
                      {r.code.label}
                    </span>
                  </th>
                  <td
                    className="py-3 pr-4 align-top text-[13px]"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {r.code.stacking === 'confirmed'
                      ? 'Поверх акции — школа подтверждает'
                      : r.code.stacking === 'replaces'
                        ? 'Вместо акции — акция выгоднее'
                        : 'Поверх акции, но не подтверждено'}
                  </td>
                  <td
                    className="py-3 pr-4 text-right align-top whitespace-nowrap tabular-nums"
                    style={{
                      color: r.saved > 0 ? 'rgb(var(--color-success))' : 'rgb(var(--color-muted))',
                    }}
                  >
                    {r.saved > 0 ? `−${rub(r.saved)}` : '—'}
                  </td>
                  <td
                    className="py-3 text-right align-top font-semibold whitespace-nowrap tabular-nums"
                    style={{
                      color: isBest ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg))',
                    }}
                  >
                    {rub(r.finalPrice)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {caption && (
        <p
          className="mt-3 text-[13px] leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
