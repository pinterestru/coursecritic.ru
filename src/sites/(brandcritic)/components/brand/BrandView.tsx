import Link from 'next/link'

import { activeSiteConfig } from '@/config/sites/active.generated'

import type { BrandPage } from '../../data/brands/types'
import { ldJson } from '../../data/guides/ldJson'
import { providers } from '../../data/providers'
import { getVertical } from '../../data/verticals'
import Advisory from '../Advisory'
import AffiliateLink from '../AffiliateLink'
import ScoreMeter from '../ScoreMeter'
import { contrastText } from '../contrastText'
import ArticleFaq from '../articles/ArticleFaq'

/**
 * Единственный шаблон, по которому рисуется каждая страница /brands/<slug>.
 *
 * Страницы брендов — данные (data/brands/*.ts), а не отдельная вёрстка: все они
 * отвечают на одни и те же вопросы в одном порядке. Липкая колонка слева держит
 * оценку, разбивку по критериям и кнопку в поле зрения на всей длине страницы —
 * это и есть главное отличие раскладки от обычной статьи.
 *
 * JSON-LD здесь — `Review` с НАШЕЙ редакционной оценкой, а не свод отзывов
 * пользователей, которых мы не собирали.
 */
export default function BrandView({ page }: { page: BrandPage }) {
  const provider = providers[page.providerId]
  if (!provider) return null

  const vertical = getVertical(provider.vertical)
  const href = page.deepLink ?? provider.domain
  const tracked = provider.tracked !== false
  const updated = new Date(page.updated).toLocaleDateString('ru-RU', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Review',
    inLanguage: 'ru-RU',
    itemReviewed: {
      '@type': 'Organization',
      name: provider.name,
      url: `https://${provider.domain}`,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: provider.score,
      bestRating: 5,
      worstRating: 1,
    },
    datePublished: page.updated,
    author: { '@type': 'Organization', name: activeSiteConfig.brand.name },
    publisher: { '@type': 'Organization', name: activeSiteConfig.brand.name },
  }

  return (
    <main>
      {/* Первый экран */}
      <section
        className="border-b"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <nav
            className="bc-mono text-[11px]"
            style={{ color: 'rgb(var(--color-muted))' }}
            aria-label="Хлебные крошки"
          >
            <Link
              href="/"
              className="hover:text-[rgb(var(--color-primary))]"
              style={{ color: 'inherit' }}
            >
              Главная
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <Link
              href="/brands"
              className="hover:text-[rgb(var(--color-primary))]"
              style={{ color: 'inherit' }}
            >
              Бренды
            </Link>
            <span className="mx-2 opacity-50">/</span>
            <span style={{ color: 'rgb(var(--color-fg))' }}>{provider.name}</span>
          </nav>

          <div className="mt-7 flex items-start gap-5">
            <span
              className="bc-mono flex h-16 w-16 flex-shrink-0 items-center justify-center text-lg font-bold"
              style={{ background: provider.color, color: contrastText(provider.color) }}
            >
              {provider.badge}
            </span>
            <div className="min-w-0">
              <span className="bc-kicker">{vertical.name} · разбор</span>
              <h1
                className="mt-3 text-3xl font-bold sm:text-[40px]"
                style={{ color: 'rgb(var(--color-fg))' }}
              >
                {provider.name}
              </h1>
              <p
                className="bc-mono mt-2 text-[11px] tracking-[0.1em] uppercase"
                style={{ color: 'rgb(var(--color-muted))' }}
              >
                проверено {updated} · балл {provider.score.toFixed(1)} из 5
              </p>
            </div>
          </div>

          <p
            className="mt-7 max-w-3xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {page.intro}
          </p>

          {provider.advisory && (
            <div className="mt-6 max-w-3xl">
              <Advisory text={provider.advisory} />
            </div>
          )}
        </div>
      </section>

      {/* Тело: липкая колонка с оценкой + содержание */}
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[19rem_minmax(0,1fr)] lg:gap-12">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div
            className="bc-corners border p-5"
            style={{
              borderColor: 'rgb(var(--color-primary))',
              background: 'rgb(var(--color-surface))',
            }}
          >
            <p
              className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
              style={{ color: 'rgb(var(--color-primary))' }}
            >
              редакционный балл
            </p>
            <p
              className="bc-mono mt-2 text-5xl leading-none font-bold tabular-nums"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {provider.score.toFixed(1)}
              <span className="text-lg" style={{ color: 'rgb(var(--color-muted))' }}>
                /5
              </span>
            </p>

            <div
              className="mt-5 space-y-2 border-t pt-5"
              style={{ borderColor: 'rgb(var(--color-rule))' }}
            >
              {provider.scorecard.map((line) => (
                <ScoreMeter key={line.label} label={line.label} value={line.value} size="sm" />
              ))}
            </div>

            <div className="mt-6">
              <AffiliateLink to={href} tracked={tracked} className="w-full">
                {provider.topCta ?? `На сайт ${provider.siteLabel} →`}
              </AffiliateLink>
            </div>
          </div>

          <dl
            className="mt-5 grid grid-cols-2 gap-px border"
            style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-rule))' }}
          >
            {page.facts.map((f) => (
              <div
                key={f.label}
                className="p-4"
                style={{ background: 'rgb(var(--color-surface))' }}
              >
                <dt
                  className="bc-mono text-[10px] tracking-[0.12em] uppercase"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {f.label}
                </dt>
                <dd className="mt-1 text-sm font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </aside>

        <div className="min-w-0 space-y-14">
          {/* О сервисе */}
          <section>
            <h2
              className="text-2xl font-bold sm:text-[28px]"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Что это такое
            </h2>
            <div className="bc-prose mt-5">
              {/* Ключи по индексу здесь и дальше по файлу: это авторские списки,
                  они рендерятся статически и никогда не переупорядочиваются, так что
                  индекс стабилен — а ключ по тексту молча выбросил бы пункт, если два
                  абзаца случайно совпали. */}
              {page.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* Цена */}
          <section>
            <h2
              className="text-2xl font-bold sm:text-[28px]"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {page.plans.title}
            </h2>
            {/* auto-fit вместо фиксированных колонок: у брендов бывает 3, 4 или 5
                строк, и набор для сравнения плохо читается, когда последняя висит
                одна на своей строке. */}
            <div className="mt-6 grid [grid-template-columns:repeat(auto-fit,minmax(min(100%,14rem),1fr))] gap-4">
              {page.plans.items.map((plan) => (
                <div
                  key={plan.name}
                  className="flex flex-col border p-5"
                  style={{
                    borderColor: plan.pick ? 'rgb(var(--color-primary))' : 'rgb(var(--color-rule))',
                    background: 'rgb(var(--color-surface))',
                  }}
                >
                  {plan.pick && (
                    <span
                      className="bc-mono mb-3 self-start px-2 py-0.5 text-[9px] font-bold tracking-[0.14em] uppercase"
                      style={{
                        background: 'rgb(var(--color-primary))',
                        color: 'rgb(var(--color-primary-fg))',
                      }}
                    >
                      основной режим
                    </span>
                  )}
                  <p className="font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                    {plan.name}
                  </p>
                  <p
                    className="bc-mono mt-1.5 text-[12px]"
                    style={{ color: 'rgb(var(--color-primary))' }}
                  >
                    {plan.price}
                  </p>
                  {plan.renews && (
                    <p
                      className="bc-mono mt-1 text-[11px]"
                      style={{ color: 'rgb(var(--color-danger))' }}
                    >
                      {plan.renews}
                    </p>
                  )}
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {plan.detail}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              {page.plans.note}
            </p>
          </section>

          {/* Плюсы и минусы */}
          <section className="grid gap-10 lg:grid-cols-2">
            <div>
              <p
                className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
                style={{ color: 'rgb(var(--color-success))' }}
              >
                что работает
              </p>
              <div className="mt-5 space-y-5">
                {page.pros.map((p) => (
                  <div
                    key={p.title}
                    className="border-l-2 pl-4"
                    style={{ borderColor: 'rgb(var(--color-success) / 0.5)' }}
                  >
                    <p className="font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                      {p.title}
                    </p>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--color-muted))' }}
                    >
                      {p.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p
                className="bc-mono text-[10px] font-bold tracking-[0.18em] uppercase"
                style={{ color: 'rgb(var(--color-danger))' }}
              >
                что не работает
              </p>
              <div className="mt-5 space-y-5">
                {page.cons.map((c) => (
                  <div
                    key={c.title}
                    className="border-l-2 pl-4"
                    style={{ borderColor: 'rgb(var(--color-danger) / 0.5)' }}
                  >
                    <p className="font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                      {c.title}
                    </p>
                    <p
                      className="mt-1.5 text-sm leading-relaxed"
                      style={{ color: 'rgb(var(--color-muted))' }}
                    >
                      {c.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Репутация и кому подходит */}
          <section className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                Оценки на стороне
              </h2>
              <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
                Сводные публичные оценки с названным источником. Отдельные отзывы мы не публикуем:
                проверить их подлинность мы не можем.
              </p>
              <ul className="mt-5 space-y-px" style={{ background: 'rgb(var(--color-rule))' }}>
                {page.reputation.map((r) => (
                  <li
                    key={r.source}
                    className="flex items-center justify-between gap-4 p-4"
                    style={{ background: 'rgb(var(--color-surface))' }}
                  >
                    <div className="min-w-0">
                      <p
                        className="text-sm font-semibold"
                        style={{ color: 'rgb(var(--color-fg))' }}
                      >
                        {r.source}
                      </p>
                      <p className="text-xs" style={{ color: 'rgb(var(--color-muted))' }}>
                        {r.note}
                      </p>
                    </div>
                    <ScoreMeter value={r.value} size="sm" />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                  Подойдёт, если
                </h2>
                <ul
                  className="mt-4 space-y-2 text-sm"
                  style={{ color: 'rgb(var(--color-fg) / 0.86)' }}
                >
                  {page.bestFor.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: 'rgb(var(--color-success))' }} aria-hidden>
                        +
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold" style={{ color: 'rgb(var(--color-fg))' }}>
                  Не подойдёт, если
                </h2>
                <ul
                  className="mt-4 space-y-2 text-sm"
                  style={{ color: 'rgb(var(--color-fg) / 0.86)' }}
                >
                  {page.notFor.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span style={{ color: 'rgb(var(--color-danger))' }} aria-hidden>
                        −
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <ArticleFaq items={page.faq} title={`${provider.name}: частые вопросы`} />

          {/* Финальный CTA */}
          <section
            className="bc-corners border p-6 sm:p-8"
            style={{
              borderColor: 'rgb(var(--color-primary))',
              background: 'rgb(var(--color-primary) / 0.05)',
            }}
          >
            <h2 className="text-xl font-bold sm:text-2xl" style={{ color: 'rgb(var(--color-fg))' }}>
              Готовы попробовать {provider.name}?
            </h2>
            <ul
              className="bc-mono mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[11px]"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {provider.trust.map((t, i) => (
                <li key={i} className="flex gap-2">
                  <span style={{ color: 'rgb(var(--color-primary))' }} aria-hidden>
                    ▸
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <AffiliateLink to={href} tracked={tracked}>
                {provider.topCta ?? `На сайт ${provider.siteLabel} →`}
              </AffiliateLink>
            </div>
          </section>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(jsonLd) }} />
    </main>
  )
}
