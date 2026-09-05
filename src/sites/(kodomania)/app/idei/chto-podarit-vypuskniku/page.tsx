import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-vypuskniku')!

export const metadata: Metadata = guideMetadata(guide)

const steps = [
  { n: '01', t: 'Определиться', d: 'попробовать сферу без риска' },
  { n: '02', t: 'Освоить навык', d: 'курс или английский' },
  { n: '03', t: 'Первая работа', d: 'портфолио и оффер' },
]

/** Hero with a horizontal 3-step career roadmap. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
        style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
      >
        🎓 Выпускнику
      </span>
      <h1
        className="mt-5 max-w-2xl text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        Что подарить выпускнику
      </h1>
      <p
        className="mt-5 max-w-xl text-lg leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {guide.lead}
      </p>

      <div className="relative mt-9 grid gap-4 sm:grid-cols-3">
        <span
          className="pointer-events-none absolute top-6 right-8 left-8 hidden h-px sm:block"
          style={{ background: 'rgb(var(--art-accent) / 0.25)' }}
          aria-hidden
        />
        {steps.map((s) => (
          <div key={s.n} className="relative">
            <span
              className="kdm-display flex h-12 w-12 items-center justify-center rounded-full text-sm font-extrabold text-white"
              style={{
                background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              {s.n}
            </span>
            <p className="mt-3 text-base font-extrabold" style={{ color: 'rgb(var(--color-fg))' }}>
              {s.t}
            </p>
            <p
              className="mt-1 text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {s.d}
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
