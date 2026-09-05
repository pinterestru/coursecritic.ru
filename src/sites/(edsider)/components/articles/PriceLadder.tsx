import type { PriceStep } from '../../data/netology/types'
import { rub } from '../../data/netology/types'

/**
 * The receipt: list price at the top, every deduction as its own rung, the
 * amount actually paid at the bottom.
 *
 * The point of showing it as a ladder rather than a single "цена со скидкой" is
 * that the order of operations is where the money is. A percentage applied
 * after the sale is computed from the reduced base; a fixed code is not. The
 * running total in the right column makes that visible instead of asking the
 * reader to trust a final number.
 *
 * Scrolls inside its own container so a long label never widens the page.
 */
export default function PriceLadder({
  steps,
  caption,
}: {
  steps: PriceStep[]
  /** Source-and-date note printed under the table. */
  caption?: string
}) {
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left">
          <tbody>
            {steps.map((step) => {
              const isTotal = step.kind === 'total'
              return (
                <tr
                  key={step.label}
                  className="border-t first:border-t-0"
                  style={{ borderColor: 'rgb(var(--color-rule))' }}
                >
                  <th
                    scope="row"
                    className={`py-3 pr-4 align-top text-[15px] ${
                      isTotal ? 'font-bold' : 'font-normal'
                    }`}
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {step.label}
                    {step.detail && (
                      <span
                        className="mt-0.5 block text-[13px] font-normal"
                        style={{ color: 'rgb(var(--color-muted))' }}
                      >
                        {step.detail}
                      </span>
                    )}
                  </th>
                  <td
                    className="py-3 pr-4 text-right align-top text-[15px] whitespace-nowrap tabular-nums"
                    style={{
                      color:
                        step.kind === 'discount' || step.kind === 'refund'
                          ? 'rgb(var(--color-success))'
                          : 'rgb(var(--color-muted))',
                    }}
                  >
                    {step.delta !== undefined &&
                      `${step.delta > 0 ? '+' : '−'}${rub(Math.abs(step.delta))}`}
                  </td>
                  <td
                    className={`py-3 text-right align-top whitespace-nowrap tabular-nums ${
                      isTotal ? 'font-editorial text-xl font-bold' : 'text-[15px] font-semibold'
                    }`}
                    style={{
                      color: isTotal ? 'rgb(var(--color-primary))' : 'rgb(var(--color-fg))',
                    }}
                  >
                    {rub(step.amount)}
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
