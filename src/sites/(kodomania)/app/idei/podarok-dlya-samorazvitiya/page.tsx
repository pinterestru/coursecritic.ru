import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('podarok-dlya-samorazvitiya')!

export const metadata: Metadata = guideMetadata(guide)

const vectors = [
  { icon: '🧠', k: 'Нейросети', v: 'экономят часы' },
  { icon: '🗣️', k: 'Язык', v: 'открывает мир' },
  { icon: '🚀', k: 'Навык', v: 'растит доход' },
]

/** Premium dark-panel hero with the three growth vectors. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] px-7 py-12 sm:px-12 sm:py-14"
        style={{ background: 'rgb(var(--art-ink))' }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, var(--art-grad-2) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, var(--art-grad-1) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div className="relative">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{
              background: 'rgb(var(--art-accent-2) / 0.2)',
              color: 'rgb(var(--art-accent-2))',
            }}
          >
            🌱 Саморазвитие
          </span>
          <h1 className="mt-5 max-w-2xl text-[34px] leading-[1.05] font-extrabold text-white sm:text-[48px]">
            Подарок для саморазвития
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{guide.lead}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {vectors.map((v) => (
              <div
                key={v.k}
                className="rounded-2xl px-4 py-4"
                style={{ background: 'rgb(255 255 255 / 0.07)' }}
              >
                <div className="text-2xl" aria-hidden>
                  {v.icon}
                </div>
                <div className="kdm-display mt-2 text-lg font-extrabold text-white">{v.k}</div>
                <div className="text-xs text-white/60">{v.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
