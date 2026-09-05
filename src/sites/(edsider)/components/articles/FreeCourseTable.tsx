'use client'

import { useState } from 'react'

import type { FreeCourse } from '../../data/umschool/types'
import { gradeLabel } from '../../data/umschool/types'

import AffiliateButton from './AffiliateButton'

/**
 * Every free-course code for one subject, or for the whole school, as a table
 * a reader can copy from.
 *
 * The copy button per row is the whole reason this is not a static list. These
 * codes are twenty-odd characters of uppercase and underscores; on a phone, a
 * reader who has to retype `SOC11_SITEPROMO1_CC` will get it wrong once and
 * give up. Copy state is tracked per code rather than as a single flag, so the
 * confirmation lands on the row that was actually pressed.
 *
 * Rows carry the grade, not just the subject, because the codes are not
 * interchangeable: an eleventh-grader who redeems the ninth-grade code has
 * burned a single-use code on the wrong exam.
 *
 * `deepLink` closes the table rather than decorating it. A reader who has just
 * copied a code needs somewhere to redeem it, and without the button this — the
 * block people spend the longest on — was a dead end: they had to scroll back
 * up or leave. The button is optional so a page that already has a CTA within a
 * screen of the table can omit it instead of stacking two.
 */
export default function FreeCourseTable({
  codes,
  /** Show the subject column — on for the hub, off inside a subject article. */
  showSubject = false,
  caption,
  deepLink,
  cta = 'Активировать код на umschool.net →',
}: {
  codes: FreeCourse[]
  showSubject?: boolean
  caption?: string
  /** Where the copied code gets redeemed. Omit to render no button. */
  deepLink?: string
  cta?: string
}) {
  const [copied, setCopied] = useState<string | null>(null)

  async function copy(code: string) {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(code)
      setTimeout(() => setCopied((current) => (current === code ? null : current)), 2000)
    } catch {
      // Clipboard unavailable — every code stays selectable on screen.
    }
  }

  return (
    <figure>
      <div
        className="overflow-x-auto rounded-xl border"
        style={{ borderColor: 'rgb(var(--color-rule))' }}
      >
        <table className="w-full border-collapse text-left text-sm">
          <thead>
            <tr style={{ background: 'rgb(var(--color-surface))' }}>
              {showSubject && (
                <th
                  className="px-4 py-3 font-semibold whitespace-nowrap"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  Предмет
                </th>
              )}
              <th
                className="px-4 py-3 font-semibold whitespace-nowrap"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                Класс
              </th>
              <th className="px-4 py-3 font-semibold" style={{ color: 'rgb(var(--color-muted))' }}>
                Промокод
              </th>
              <th className="px-4 py-3 font-semibold" style={{ color: 'rgb(var(--color-muted))' }}>
                Что внутри
              </th>
              <th className="px-4 py-3">
                <span className="sr-only">Скопировать</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {codes.map((c) => (
              <tr
                key={c.code}
                className="border-t align-top"
                style={{ borderColor: 'rgb(var(--color-rule))' }}
              >
                {showSubject && (
                  <td
                    className="px-4 py-3 font-semibold whitespace-nowrap"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {c.subjectLabel}
                  </td>
                )}
                <td
                  className="px-4 py-3 whitespace-nowrap"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {gradeLabel(c)}
                </td>
                <td className="px-4 py-3">
                  <code
                    className="font-mono text-[13px] font-bold break-all select-all"
                    style={{ color: 'rgb(var(--color-primary))' }}
                  >
                    {c.code}
                  </code>
                </td>
                <td className="px-4 py-3" style={{ color: 'rgb(var(--color-muted))' }}>
                  {c.inside}
                </td>
                <td className="px-4 py-3">
                  <button
                    type="button"
                    onClick={() => copy(c.code)}
                    className="rounded-md border px-2.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors hover:bg-[rgb(var(--color-surface))]"
                    style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
                    aria-label={`Скопировать промокод ${c.code}`}
                    aria-live="polite"
                  >
                    {copied === c.code ? 'Готово' : 'Копировать'}
                  </button>
                </td>
              </tr>
            ))}
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

      {deepLink && (
        <div className="mt-5">
          <AffiliateButton to={deepLink}>{cta}</AffiliateButton>
        </div>
      )}
    </figure>
  )
}
