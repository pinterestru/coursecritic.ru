import type { Metadata } from 'next'
import Link from 'next/link'

import { activeSiteConfig } from '@/config/sites/active.generated'

import Advisory from '../components/Advisory'
import BrandRow from '../components/BrandRow'
import { faq, hero, method } from '../data/home'
import { providers, providersByVertical } from '../data/providers'
import { verticals } from '../data/verticals'

/**
 * Заголовок и описание главная наследует от корневого layout, но canonical и
 * собственный блок Open Graph объявить обязана здесь: `metadataBase` сам по
 * себе не отдаёт ни того, ни другого. Без этого самая залинкованная страница
 * сайта оставалась бы без self-canonical — и каждый `?utm_*` из объявления был
 * бы для поиска отдельным URL.
 */
export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: `${activeSiteConfig.brand.name} — независимые разборы сервисов`,
    description: activeSiteConfig.seo.defaultDescription,
    url: '/',
    siteName: activeSiteConfig.brand.name,
    locale: 'ru_RU',
  },
  twitter: {
    card: 'summary',
    title: `${activeSiteConfig.brand.name} — независимые разборы сервисов`,
    description: activeSiteConfig.seo.defaultDescription,
  },
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Method />
      <VerticalSections />
      <Faq />
    </main>
  )
}

/**
 * Первый экран: слева заявление, справа — панель методики с числами, которые
 * считаются прямо из данных сайта. Панель здесь не украшение: она отвечает на
 * первый вопрос читателя такого сайта — «а вы вообще кто и на чём считаете».
 */
function Hero() {
  const list = Object.values(providers)
  const average = list.reduce((sum, p) => sum + p.score, 0) / list.length
  const partners = list.filter((p) => p.tracked !== false).length
  const criteria = list[0]?.scorecard.length ?? 0

  const values = [
    String(list.length),
    String(criteria),
    average.toFixed(1),
    `${partners} из ${list.length}`,
  ]

  return (
    <section className="border-b" style={{ borderColor: 'rgb(var(--color-rule))' }}>
      <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-14 pb-16 sm:pt-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <div>
          <span className="bc-kicker">{hero.eyebrow}</span>
          <h1
            className="mt-7 text-[40px] leading-[1.02] font-bold sm:text-[62px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {hero.titleLead}
            <br />
            <span style={{ color: 'rgb(var(--color-primary))' }}>{hero.titleAccent}</span>
          </h1>
          <p
            className="mt-7 max-w-xl text-lg leading-[1.7]"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {hero.body}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/brands"
              className="bc-mono inline-flex items-center px-6 py-3.5 text-xs font-bold tracking-[0.1em] uppercase transition-transform hover:-translate-y-[1px]"
              style={{
                background: 'rgb(var(--color-primary))',
                color: 'rgb(var(--color-primary-fg))',
              }}
            >
              Смотреть разборы →
            </Link>
            <Link
              href="/about"
              className="bc-mono border px-6 py-3.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors hover:border-[rgb(var(--color-primary))] hover:text-[rgb(var(--color-primary))]"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-fg))' }}
            >
              Как мы считаем
            </Link>
          </div>
        </div>

        {/* Панель методики */}
        <div
          className="bc-corners self-start border"
          style={{
            borderColor: 'rgb(var(--color-rule))',
            background: 'rgb(var(--color-surface))',
          }}
        >
          <div
            className="bc-hatch h-2 border-b"
            style={{ borderColor: 'rgb(var(--color-rule))' }}
            aria-hidden
          />
          <div className="p-6">
            <p
              className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              на чём стоит сайт
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-7">
              {hero.metrics.map((metric, i) => (
                <div key={metric.label}>
                  <dd
                    className="bc-mono text-[34px] leading-none font-bold tabular-nums"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {values[i]}
                  </dd>
                  <dt
                    className="bc-mono mt-2 text-[10px] leading-snug tracking-[0.1em] uppercase"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {metric.label}
                  </dt>
                </div>
              ))}
            </dl>
            <p
              className="mt-7 border-t pt-5 text-[13px] leading-relaxed"
              style={{ borderColor: 'rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
            >
              Бренды, которые не платят нам ничего, остаются в рейтинге и помечены на карточке.
              Иначе весь список не стоил бы чтения.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

/** Четыре правила, по которым собирается оценка. */
function Method() {
  return (
    <section className="border-b" style={{ borderColor: 'rgb(var(--color-rule))' }}>
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="bc-kicker">методика</span>
            <h2
              className="mt-5 max-w-xl text-[32px] leading-[1.1] font-bold sm:text-[42px]"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Оценка, с которой можно спорить по пунктам
            </h2>
          </div>
          <Link
            href="/disclosure"
            className="bc-mono text-[11px] font-semibold tracking-[0.1em] uppercase underline underline-offset-4"
            style={{ color: 'rgb(var(--color-primary))' }}
          >
            как мы зарабатываем →
          </Link>
        </div>

        <div
          className="mt-12 grid gap-px sm:grid-cols-2 lg:grid-cols-4"
          style={{ background: 'rgb(var(--color-rule))' }}
        >
          {method.map((item) => (
            <div key={item.num} className="p-6" style={{ background: 'rgb(var(--color-bg))' }}>
              <span
                className="bc-mono text-[28px] leading-none font-bold tabular-nums"
                style={{ color: 'rgb(var(--color-primary))' }}
              >
                {item.num}
              </span>
              <h3 className="mt-5 text-lg font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                {item.title}
              </h3>
              <p
                className="mt-2.5 text-sm leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/**
 * По разделу на вертикаль: список брендов строками, отсортированный по нашему
 * баллу. У брендов со своим разбором строка ведёт внутрь сайта, у остальных —
 * наружу через размеченный редирект.
 */
function VerticalSections() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="space-y-20">
        {verticals.map((vertical, idx) => {
          const list = providersByVertical(vertical.id)
          if (list.length === 0) return null
          // Обязательная оговорка категории (18+ для алкоголя) выводится один раз
          // на раздел: карточки здесь идут списком, и повтор у каждой строки
          // превратил бы предупреждение в фон, который перестают читать.
          const advisory = list.find((p) => p.advisory)?.advisory
          return (
            <div key={vertical.id}>
              <div className="grid gap-8 lg:grid-cols-[1fr_20rem] lg:gap-12">
                <div>
                  <div className="flex items-baseline gap-4">
                    <span
                      className="bc-mono text-sm font-bold tabular-nums"
                      style={{ color: 'rgb(var(--color-primary))' }}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2
                      className="text-[30px] leading-none font-bold sm:text-[38px]"
                      style={{ color: 'rgb(var(--color-fg))' }}
                    >
                      {vertical.name}
                    </h2>
                  </div>
                  <p
                    className="mt-4 max-w-2xl text-[15px] leading-relaxed"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {vertical.blurb}
                  </p>
                </div>

                <div
                  className="border p-5"
                  style={{
                    borderColor: 'rgb(var(--color-rule))',
                    background: 'rgb(var(--color-surface))',
                  }}
                >
                  <p
                    className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    что проверяем
                  </p>
                  <ul className="mt-3 space-y-2">
                    {vertical.criteria.map((c, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[13px] leading-snug"
                        style={{ color: 'rgb(var(--color-fg) / 0.8)' }}
                      >
                        <span style={{ color: 'rgb(var(--color-primary))' }} aria-hidden>
                          ▸
                        </span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {advisory && (
                <div className="mt-8">
                  <Advisory text={advisory} />
                </div>
              )}

              <div className="mt-8 space-y-3">
                {list.map((provider, i) => (
                  <BrandRow key={provider.id} provider={provider} rank={i + 1} />
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section
      className="border-t"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-16">
        <div>
          <span className="bc-kicker">вопросы</span>
          <h2
            className="mt-5 text-[32px] leading-[1.1] font-bold"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            О чём спрашивают чаще всего
          </h2>
        </div>

        <div className="border-t" style={{ borderColor: 'rgb(var(--color-rule))' }}>
          {faq.map((item, i) => (
            <details
              key={item.q}
              className="group border-b py-5"
              style={{ borderColor: 'rgb(var(--color-rule))' }}
            >
              <summary
                className="flex cursor-pointer list-none items-start gap-3 text-[17px] font-semibold"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                <span
                  className="bc-mono mt-1 flex-shrink-0 text-xs tabular-nums"
                  style={{ color: 'rgb(var(--color-primary))' }}
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="flex-1">{item.q}</span>
                <span
                  className="mt-1 inline-block h-5 w-5 flex-shrink-0 text-center leading-5 transition-transform group-open:rotate-45"
                  style={{ color: 'rgb(var(--color-primary))' }}
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p
                className="mt-3 pl-8 text-[15px] leading-relaxed"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
