import type { ReactNode } from 'react'

/**
 * Секция разбора с якорем и заголовком. Id совпадает с пунктом оглавления,
 * scroll-mt удерживает заголовок ниже липкой шапки. Оберните обычный текст в
 * `prose`, чтобы он унаследовал типографику .bc-prose из theme.css.
 */
export default function ArticleSection({
  id,
  title,
  index,
  children,
  prose = false,
}: {
  id?: string
  title?: string
  /** Номер секции, рисуется моноширинным слева от заголовка. */
  index?: number
  children: ReactNode
  prose?: boolean
}) {
  return (
    <section id={id} className={id ? 'scroll-mt-28' : undefined}>
      {title && (
        <h2
          className="flex items-baseline gap-3 text-2xl font-bold sm:text-[28px]"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {typeof index === 'number' && (
            <span
              className="bc-mono text-sm font-semibold tabular-nums"
              style={{ color: 'rgb(var(--color-primary))' }}
              aria-hidden
            >
              {String(index).padStart(2, '0')}
            </span>
          )}
          <span>{title}</span>
        </h2>
      )}
      <div className={prose ? 'bc-prose mt-5' : 'mt-5'}>{children}</div>
    </section>
  )
}
