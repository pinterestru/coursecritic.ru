import type { Metadata } from 'next'

import { clickHref } from '../../../components/AffiliateLink'
import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kruiz-v-podarok')!

export const metadata: Metadata = guideMetadata(guide)

const perks = [
  { k: 'от 6 100 ₽', v: 'самый доступный формат' },
  { k: 'до 20%', v: 'раннее бронирование' },
  { k: 'всё включено', v: 'питание и экскурсии' },
]

/** Dark panel with a «boarding pass» card — the podarok article's signature. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div
        className="relative overflow-hidden rounded-[32px] px-7 py-11 sm:px-12 sm:py-14"
        style={{ background: 'rgb(var(--art-ink))' }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full opacity-40"
          style={{ background: 'radial-gradient(circle, var(--art-grad-1) 0%, transparent 70%)' }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgb(var(--art-accent-2)) 0%, transparent 70%)',
          }}
          aria-hidden
        />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
              style={{
                background: 'rgb(var(--art-accent-2) / 0.2)',
                color: 'rgb(var(--art-accent-2))',
              }}
            >
              🚢 Впечатление в подарок
            </span>
            <h1 className="mt-5 text-[34px] leading-[1.04] font-extrabold text-white sm:text-[48px]">
              Круиз в подарок: сертификат или готовая бронь
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/70">{guide.lead}</p>

            <a
              href={clickHref('https://kruiz.online/search-kruiz')}
              target="_blank"
              rel="noopener sponsored"
              className="mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold text-white transition-transform hover:scale-[1.03]"
              style={{
                background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              🚢 Подобрать круиз →
            </a>

            <div className="mt-8 flex flex-wrap gap-3">
              {perks.map((p) => (
                <div
                  key={p.k}
                  className="rounded-2xl px-4 py-3"
                  style={{ background: 'rgb(255 255 255 / 0.07)' }}
                >
                  <div
                    className="kdm-display text-base font-extrabold"
                    style={{ color: 'rgb(var(--art-accent-2))' }}
                  >
                    {p.k}
                  </div>
                  <div className="text-xs text-white/60">{p.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Подарочный сертификат как посадочный талон */}
          <div
            className="rounded-[26px] p-6 backdrop-blur-sm"
            style={{ background: 'rgb(255 255 255 / 0.08)' }}
          >
            <div className="flex items-start justify-between gap-3">
              <span className="text-[11px] font-bold tracking-wide text-white/60 uppercase">
                Подарочный сертификат
              </span>
              <span className="text-2xl" aria-hidden>
                🎁
              </span>
            </div>
            <p
              className="kdm-display mt-4 text-[26px] leading-none font-extrabold"
              style={{ color: 'rgb(var(--art-accent-2))' }}
            >
              номинал на выбор
            </p>
            <p className="mt-2 text-sm text-white/65">Круиз.онлайн</p>

            <div className="my-5 border-t border-dashed border-white/25" />

            <dl className="grid grid-cols-2 gap-4">
              <div>
                <dt className="text-[11px] tracking-wide text-white/50 uppercase">Маршрут</dt>
                <dd className="mt-1 text-sm font-semibold text-white">выбирает получатель</dd>
              </div>
              <div>
                <dt className="text-[11px] tracking-wide text-white/50 uppercase">Дата</dt>
                <dd className="mt-1 text-sm font-semibold text-white">когда удобно</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
