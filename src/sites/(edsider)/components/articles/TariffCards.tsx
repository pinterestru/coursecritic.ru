import type { CourseFacts } from '../../data/netology/types'
import { rub, salePrice } from '../../data/netology/types'

import AffiliateButton from './AffiliateButton'

/**
 * The three tiers of a Нетология course, side by side.
 *
 * Both prices are shown deliberately: the installment figure is the one the
 * school leads with, the single payment is the one that carries the extra
 * discount. Readers comparing only the ₽/мес number consistently miss that the
 * same course costs tens of thousands less paid at once.
 */
export default function TariffCards({
  course,
  tracked = true,
}: {
  course: CourseFacts
  tracked?: boolean
}) {
  return (
    // A single-offer programme gets one full-width card rather than a lonely
    // third of a row; Tailwind needs whole class names, so both are spelled out.
    <div className={course.tariffs.length === 1 ? 'grid gap-4' : 'grid gap-4 sm:grid-cols-3'}>
      {course.tariffs.map((t) => (
        <div
          key={t.name}
          className="flex flex-col rounded-2xl border p-5"
          style={{
            borderColor: t.recommended ? 'rgb(var(--color-primary))' : 'rgb(var(--color-rule))',
            background: 'rgb(var(--color-surface))',
          }}
        >
          {t.recommended && (
            <p
              className="text-[11px] font-bold tracking-[0.16em] uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              Рекомендует школа
            </p>
          )}
          <p className="font-editorial text-lg font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
            {t.name}
          </p>
          <p className="mt-1 text-[13px] leading-snug" style={{ color: 'rgb(var(--color-muted))' }}>
            {t.positioning}
          </p>

          <p className="mt-4 text-[13px]" style={{ color: 'rgb(var(--color-muted))' }}>
            <s>{rub(t.price)}</s> — цена без акции
          </p>
          <p
            className="font-editorial text-2xl font-bold tabular-nums"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {rub(salePrice(t))}
          </p>
          <p className="text-[13px]" style={{ color: 'rgb(var(--color-primary))' }}>
            по акции −{t.promoPercent}%, то есть {rub(t.monthly)} / мес на {t.monthlyTerm} месяцев
          </p>
          {t.lumpSum !== undefined && (
            <p className="mt-2 text-[13px]" style={{ color: 'rgb(var(--color-muted))' }}>
              или <strong style={{ color: 'rgb(var(--color-fg))' }}>{rub(t.lumpSum)}</strong> одним
              платежом, {t.lumpSumNote}
            </p>
          )}

          <p
            className="mt-4 text-xs tracking-wider uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {t.duration}
          </p>
          <ul className="mt-2 space-y-1.5 text-[13px]" style={{ color: 'rgb(var(--color-fg))' }}>
            {t.perks.map((p) => (
              <li key={p} className="flex gap-2">
                <span aria-hidden style={{ color: 'rgb(var(--color-primary))' }}>
                  ·
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex-grow" />
          <AffiliateButton to={`netology.ru/${course.path}`} variant="ghost" tracked={tracked}>
            Проверить цену →
          </AffiliateButton>
        </div>
      ))}
    </div>
  )
}
