import type { Metadata } from 'next'
import Link from 'next/link'

import { articlesByVertical } from '../../data/articles'
import { authors } from '../../data/providers'
import { verticals } from '../../data/verticals'
import { contrastText } from '../../components/contrastText'

/**
 * Индекс рейтинговых разборов.
 *
 * Разборы — лендинги прямого открытия для платного трафика, поэтому из обвязки
 * сайта сюда не ведёт ничего: страница существует для читателя, который пришёл
 * на один разбор и хочет остальные, и для нас при подготовке материалов. Она
 * намеренно noindex: поисковую ценность несут сами разборы, а не хаб.
 */
export const metadata: Metadata = {
  title: 'Все разборы',
  description:
    'Все рейтинговые разборы: магазины и ритейл, круизы и путешествия. Оценка по опубликованным критериям, полная цена и условия мелким шрифтом.',
  alternates: { canonical: '/articles' },
  robots: { index: false, follow: true },
}

export default function ArticlesIndexPage() {
  return (
    <main>
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <span className="bc-kicker">рейтинги · 2026</span>
          <h1
            className="mt-5 max-w-3xl text-[36px] leading-[1.06] font-bold sm:text-[52px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Все наши рейтинги в одном месте
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Каждый разбор берёт одно решение, сравнивает четыре-пять вариантов, которые реально
            стоит рассматривать, и называет победителя. Цена считается полной, коммерческие ссылки
            раскрыты.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-14">
        {verticals.map((vertical, vIdx) => {
          const list = articlesByVertical(vertical.id)
          if (list.length === 0) return null
          const author = authors[vertical.id]
          return (
            <div key={vertical.id} className={vIdx > 0 ? 'mt-16' : undefined}>
              <h2 className="text-2xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                {vertical.name}
              </h2>
              <p className="mt-2 max-w-2xl text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
                {vertical.blurb} Автор — {author.name}, {author.role.toLowerCase()}.
              </p>

              <div
                className="mt-6 grid gap-px sm:grid-cols-2"
                style={{ background: 'rgb(var(--color-rule))' }}
              >
                {list.map((a, i) => (
                  <Link
                    key={a.slug}
                    href={`/articles/${a.slug}`}
                    className="group flex h-full flex-col p-6 transition-colors"
                    style={{ background: 'rgb(var(--color-surface))' }}
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className="bc-mono text-xs font-bold tabular-nums"
                        style={{ color: 'rgb(var(--color-fg) / 0.55)' }}
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span
                        className="bc-mono px-2 py-0.5 text-[9px] font-bold tracking-[0.14em] uppercase"
                        style={{
                          background: vertical.accent,
                          color: contrastText(vertical.accent),
                        }}
                      >
                        {vertical.label}
                      </span>
                    </div>
                    <h3
                      className="mt-4 text-lg leading-snug font-bold transition-colors group-hover:text-[rgb(var(--color-primary))]"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {a.title}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--color-muted))' }}
                    >
                      {a.blurb}
                    </p>
                    <div
                      className="bc-mono mt-5 flex items-center justify-between border-t pt-4 text-[10px] tracking-[0.1em] uppercase"
                      style={{
                        borderColor: 'rgb(var(--color-rule))',
                        color: 'rgb(var(--color-muted))',
                      }}
                    >
                      <span>чтение {a.readingTime}</span>
                      <span style={{ color: 'rgb(var(--color-primary))' }}>открыть →</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </main>
  )
}
