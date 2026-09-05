'use client'

import { useState } from 'react'

import type { AutoDiscount, FreeCourse } from '../../data/umschool/types'
import { gradeLabel } from '../../data/umschool/types'

import AffiliateButton from './AffiliateButton'

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getDate()} ${MONTHS[d.getMonth()]} ${d.getFullYear()}`
}

/**
 * The conversion block of an Умскул lander: the free mini-course the reader's
 * code actually opens, above the fold, before a word of the article.
 *
 * Deliberately louder and higher than the Нетология `PromoNote`, and the reason
 * is the offer, not the design. A Нетология code is money off a six-figure
 * course, so the reader still has to decide to spend; the top of that article
 * can afford to be quiet. Here the code costs nothing and gives a complete
 * course — theory, practice and a mock paper. There is no decision to defer, so
 * putting the code below the lead only loses the people who came for it.
 *
 * The strip of automatic discounts underneath does the second job of the page.
 * Someone searching «промокод умскул» wants a discount and is about to be told
 * their code is not one; the strip answers that in the same breath by naming
 * the discounts that are — and those need no code at all, which is exactly the
 * thing nobody tells them.
 *
 * Client-only for the clipboard copy: these codes are twenty characters of
 * uppercase and underscores, and asking someone to retype one by hand on a
 * phone is where a promo page loses its reader.
 */
export default function PromoHero({
  promo,
  deepLink,
  autos,
  asOf,
  cta = 'Забрать курс бесплатно →',
}: {
  promo: FreeCourse
  /** Where the CTA goes — usually the course page, else the coupons page. */
  deepLink: string
  /** Automatic discounts named in the strip below the fold line. */
  autos: AutoDiscount[]
  /** ISO date the codes and prices were checked — usually meta.updated. */
  asOf: string
  cta?: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(promo.code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable — the code stays selectable on screen.
    }
  }

  return (
    <aside
      className="overflow-hidden rounded-2xl border-2"
      style={{
        borderColor: 'rgb(var(--color-primary))',
        background: 'rgb(var(--color-primary) / 0.05)',
      }}
    >
      <div className="p-5 sm:p-7">
        <p
          className="text-[11px] font-bold tracking-[0.18em] uppercase"
          style={{ color: 'rgb(var(--color-primary))' }}
        >
          Промокод открывает бесплатный курс
        </p>

        <h2
          className="font-editorial mt-2 text-xl leading-snug font-bold sm:text-2xl"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {promo.subjectLabel} · {gradeLabel(promo)} — мини-курс за{' '}
          <span style={{ color: 'rgb(var(--color-primary))' }}>0&nbsp;₽</span>
        </h2>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <code
            className="rounded-lg border px-3 py-2.5 font-mono text-sm font-bold tracking-wide break-all select-all sm:text-base"
            style={{
              borderColor: 'rgb(var(--color-rule))',
              background: 'rgb(var(--color-surface))',
              color: 'rgb(var(--color-fg))',
            }}
          >
            {promo.code}
          </code>
          <button
            type="button"
            onClick={copy}
            className="rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-[rgb(var(--color-surface))]"
            style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
            aria-live="polite"
          >
            {copied ? 'Скопировано' : 'Скопировать код'}
          </button>
        </div>

        <p className="mt-4 text-[15px] leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
          Внутри теория, практика и пробник: {promo.inside}. Код одноразовый и вводится{' '}
          <strong>не в корзине</strong>, а по иконке билетика в личном кабинете — курс появится в
          разделе «Занятия».
        </p>

        <div className="mt-5">
          <AffiliateButton to={deepLink}>{cta}</AffiliateButton>
        </div>
      </div>

      {autos.length > 0 && (
        <div
          className="border-t px-5 py-4 sm:px-7"
          style={{ borderColor: 'rgb(var(--color-primary) / 0.35)' }}
        >
          <p className="text-sm leading-relaxed" style={{ color: 'rgb(var(--color-fg))' }}>
            <strong>А скидка на платный курс идёт вообще без кода</strong> — она считается сама,
            когда вы собираете корзину:
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {autos.map((d) => (
              <li
                key={d.id}
                className="rounded-full border px-3 py-1 text-xs font-semibold"
                style={{
                  borderColor: 'rgb(var(--color-primary) / 0.4)',
                  background: 'rgb(var(--color-surface))',
                  color: 'rgb(var(--color-fg))',
                }}
              >
                {d.label && <span style={{ color: 'rgb(var(--color-primary))' }}>{d.label} </span>}
                {d.title}
              </li>
            ))}
          </ul>
        </div>
      )}

      <p
        className="border-t px-5 py-3 text-[13px] leading-relaxed sm:px-7"
        style={{
          borderColor: 'rgb(var(--color-primary) / 0.35)',
          color: 'rgb(var(--color-muted))',
        }}
      >
        Коды и цены проверены {formatDate(asOf)}; школа меняет их вместе с акциями, поэтому перед
        оплатой сверяйтесь с текущими на сайте.
      </p>
    </aside>
  )
}
