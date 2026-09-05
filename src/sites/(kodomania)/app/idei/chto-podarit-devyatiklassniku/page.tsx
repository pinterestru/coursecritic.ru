import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-devyatiklassniku')!

export const metadata: Metadata = guideMetadata(guide)

const paths = [
  { n: '1', t: 'Остаётся в школе', d: 'Профиль выбран — пригодится курс по нему' },
  { n: '2', t: 'Уходит в колледж', d: 'Важен аттестат, а не подготовка к ЕГЭ' },
  { n: '3', t: 'Ещё не решил', d: 'Лучший вариант — попробовать бесплатно' },
]

/** Hero built around the three forks a ninth-grader is standing at. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
        style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
      >
        🧭 9 класс
      </span>
      <h1
        className="mt-5 max-w-2xl text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Что подарить девятикласснику
      </h1>
      <p
        className="mt-5 max-w-xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {guide.lead}
      </p>

      <div className="mt-9 grid gap-4 sm:grid-cols-3">
        {paths.map((p) => (
          <div
            key={p.n}
            className="rounded-2xl border p-5"
            style={{
              borderColor: 'rgb(var(--art-accent) / 0.2)',
              background: 'rgb(var(--art-tint))',
            }}
          >
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white"
              style={{ background: 'rgb(var(--art-accent))' }}
              aria-hidden
            >
              {p.n}
            </span>
            <p className="mt-3 text-sm font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
              {p.t}
            </p>
            <p
              className="mt-1 text-xs leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {p.d}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
