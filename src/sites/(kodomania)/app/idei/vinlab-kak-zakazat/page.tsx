import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('vinlab-kak-zakazat')!

export const metadata: Metadata = guideMetadata(guide)

const steps = [
  { n: '1', title: 'Заказ на сайте', note: 'выбираете товар и магазин' },
  { n: '2', title: 'Через ~15 минут', note: 'заказ собран и ждёт' },
  { n: '3', title: 'Самовывоз', note: 'оплата в магазине, паспорт 18+' },
]

/** Hero as a three-step pickup flow — the navigational article. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] px-7 py-11 sm:px-11 sm:py-13"
        style={{ background: 'rgb(var(--art-ink))' }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full opacity-35"
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
            🏪 Как заказать
          </span>
          <h1 className="mt-5 max-w-2xl text-[32px] leading-[1.05] font-extrabold text-white sm:text-[44px]">
            ВинЛаб: как заказать онлайн
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">{guide.lead}</p>

          <ol className="mt-8 grid gap-3 sm:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.n}
                className="rounded-2xl px-4 py-4"
                style={{ background: 'rgb(255 255 255 / 0.07)' }}
              >
                <span
                  className="kdm-display flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold"
                  style={{
                    background: 'rgb(var(--art-accent-2) / 0.22)',
                    color: 'rgb(var(--art-accent-2))',
                  }}
                  aria-hidden
                >
                  {step.n}
                </span>
                <div className="mt-3 text-sm font-extrabold text-white">{step.title}</div>
                <div className="mt-0.5 text-xs text-white/60">{step.note}</div>
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
