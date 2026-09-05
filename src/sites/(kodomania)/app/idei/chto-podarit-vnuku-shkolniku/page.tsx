import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-vnuku-shkolniku')!

export const metadata: Metadata = guideMetadata(guide)

const steps = [
  'Спросить у родителей, какие предметы он сдаёт',
  'Начать с бесплатного — это ни к чему не обязывает',
  'Или войти в общий подарок вместе с семьёй',
]

/** Split hero with the three-step way out of guessing a teenager's taste. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.12)', color: 'rgb(var(--art-accent))' }}
          >
            👵 Внуку
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[44px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Что подарить внуку-школьнику
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div className="rounded-[28px] p-7" style={{ background: 'rgb(var(--art-ink))' }}>
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent-2))' }}
          >
            Как не угадывать
          </p>
          <ol className="mt-5 space-y-4">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-extrabold"
                  style={{
                    background: 'rgb(var(--art-accent-2) / 0.25)',
                    color: 'rgb(var(--art-accent-2))',
                  }}
                  aria-hidden
                >
                  {i + 1}
                </span>
                <span className="text-sm leading-relaxed text-white/85">{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
