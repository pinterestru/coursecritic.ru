import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kurs-podgotovki-k-ege-v-podarok')!

export const metadata: Metadata = guideMetadata(guide)

const tiers = [
  { k: '0 ₽', v: 'мини-курс по коду' },
  { k: '45 315 ₽', v: 'год по одному предмету' },
  { k: '22 658 ₽', v: 'предмет в комплекте' },
]

/** Dark-panel hero with the three price tiers the article is built around. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] px-7 py-12 sm:px-12 sm:py-16"
        style={{ background: 'rgb(var(--art-ink))' }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, var(--art-grad-2) 0%, transparent 70%)' }}
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
            🎓 Обучение в подарок
          </span>
          <h1 className="mt-5 max-w-2xl text-[36px] leading-[1.04] font-extrabold text-white sm:text-[50px]">
            Курс подготовки к ЕГЭ в подарок
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{guide.lead}</p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {tiers.map((t) => (
              <div
                key={t.k}
                className="rounded-2xl px-4 py-3"
                style={{ background: 'rgb(255 255 255 / 0.08)' }}
              >
                <p className="text-xl font-extrabold text-white">{t.k}</p>
                <p className="mt-0.5 text-xs text-white/60">{t.v}</p>
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
