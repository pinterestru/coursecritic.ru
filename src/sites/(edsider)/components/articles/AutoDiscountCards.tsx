import type { AutoDiscount } from '../../data/umschool/types'

import AffiliateButton from './AffiliateButton'

/**
 * The discounts that need no code, as cards with the steps that trigger them.
 *
 * The steps matter as much as the percentage. Every one of these applies itself
 * in the basket, which sounds effortless and is exactly why readers miss them:
 * there is no moment where you type something and see a confirmation, so people
 * who came looking for a code assume nothing happened and pay full price. The
 * numbered steps give them something to check against.
 *
 * Every step ends with «посмотрите в корзине», so `deepLink` gives the reader
 * the basket. Optional: a page that renders this block two or three times only
 * wants the button on the one that matters.
 */
export default function AutoDiscountCards({
  discounts,
  deepLink,
  cta = 'Собрать корзину и увидеть скидку →',
}: {
  discounts: AutoDiscount[]
  /** Where the discount actually applies itself. Omit to render no button. */
  deepLink?: string
  cta?: string
}) {
  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {discounts.map((d) => (
          <article
            key={d.id}
            className="rounded-xl border p-5"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {d.label && (
                <span
                  className="font-editorial text-2xl font-bold"
                  style={{ color: 'rgb(var(--color-primary))' }}
                >
                  {d.label}
                </span>
              )}
              <h3 className="text-base font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                {d.title}
              </h3>
            </div>

            <p
              className="mt-3 text-[15px] leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {d.detail}
            </p>

            <ol className="mt-4 space-y-1.5 text-sm" style={{ color: 'rgb(var(--color-fg))' }}>
              {d.how.map((step, i) => (
                <li key={step} className="flex gap-2.5">
                  <span
                    className="mt-[1px] flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[11px] font-bold"
                    style={{
                      background: 'rgb(var(--color-primary) / 0.15)',
                      color: 'rgb(var(--color-primary))',
                    }}
                  >
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{step}</span>
                </li>
              ))}
            </ol>
          </article>
        ))}
      </div>

      {deepLink && (
        <div className="mt-5">
          <AffiliateButton to={deepLink}>{cta}</AffiliateButton>
        </div>
      )}
    </>
  )
}
