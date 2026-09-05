import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('kruizy-po-rossii')!

export const metadata: Metadata = guideMetadata(guide)

const stops = ['Москва', 'Углич', 'Ярославль', 'Казань', 'Волгоград', 'Астрахань']

/** Split hero with a route line: the article is about choosing a direction. */
function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            🗺️ Маршруты и цены
          </span>
          <h1
            className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Круизы по России:{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            >
              куда плыть
            </span>
          </h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>

        <div
          className="rounded-[28px] border p-6"
          style={{
            background: 'rgb(var(--color-surface))',
            borderColor: 'rgb(var(--art-accent) / 0.18)',
          }}
        >
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--art-accent))' }}
          >
            Волга целиком · 11 дней
          </p>
          <ol className="mt-5">
            {stops.map((stop, i) => (
              <li key={stop} className="relative flex items-center gap-3 pb-5 last:pb-0">
                {i < stops.length - 1 && (
                  <span
                    className="absolute top-4 bottom-0 left-[7px] w-px"
                    style={{ background: 'rgb(var(--art-accent) / 0.3)' }}
                    aria-hidden
                  />
                )}
                <span
                  className="relative z-10 h-3.5 w-3.5 shrink-0 rounded-full ring-4"
                  style={{
                    background: 'rgb(var(--art-accent))',
                    boxShadow: '0 0 0 4px rgb(var(--art-accent) / 0.12)',
                  }}
                  aria-hidden
                />
                <span className="text-sm font-semibold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {stop}
                </span>
              </li>
            ))}
          </ol>
          <p className="mt-1 text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
            от 100 500 ₽/чел · май–сентябрь
          </p>
          <p
            className="mt-4 rounded-2xl px-4 py-3 text-xs font-semibold"
            style={{ background: 'rgb(var(--art-tint))', color: 'rgb(var(--art-ink))' }}
          >
            Короткий круиз выходного дня по Золотому кольцу — от 6 500 ₽/чел за 2–4 дня.
          </p>
        </div>
      </div>
    </section>
  )
}

export default function Page() {
  return <ArticleShell guide={guide} hero={<Hero />} />
}
