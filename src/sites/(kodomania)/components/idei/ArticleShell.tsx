import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'

import type { Guide, GuideCta, GuideSection } from '../../data/guides'
import { getGuide } from '../../data/guides'
import AffiliateLink, { clickHref } from '../AffiliateLink'
import GuideCard from '../GuideCard'

import IdeaList from './IdeaList'
import { CANONICAL_BASE as BASE, pluralIdeas } from './meta'

const MONTHS = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
]

function formatDate(iso: string): string {
  const d = new Date(iso)
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

function themeVars(guide: Guide): CSSProperties {
  const { theme } = guide
  return {
    '--art-accent': theme.accent,
    '--art-accent-2': theme.accent2,
    '--art-tint': theme.tint,
    '--art-ink': theme.ink,
    '--art-grad-1': theme.grad[0],
    '--art-grad-2': theme.grad[1],
  } as CSSProperties
}

/** Small legal/disclosure note (e.g. the 18+ notice on the drinks cluster). */
function Notice({ text }: { text: string }) {
  return (
    <p
      className="mt-6 rounded-2xl border px-4 py-3 text-xs leading-relaxed"
      style={{
        borderColor: 'rgb(var(--art-accent) / 0.25)',
        background: 'rgb(var(--art-tint) / 0.6)',
        color: 'rgb(var(--color-fg) / 0.75)',
      }}
    >
      {text}
    </p>
  )
}

/**
 * Bullet list. A list whose items are written as «1. …», «2. …» is a sequence
 * of steps, not a set — rendering it as a <ul> printed «• 1. …» and read as an
 * unordered list to a screen reader. Detect that shape and render a real <ol>
 * with the manual numbering stripped.
 */
function Bullets({ items }: { items: string[] }) {
  const numbered = items.every((item) => /^\d+\.\s/.test(item))
  const rows = numbered ? items.map((item) => item.replace(/^\d+\.\s/, '')) : items
  const List = numbered ? 'ol' : 'ul'

  return (
    <List className="mt-5 space-y-2.5">
      {rows.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          {numbered ? (
            <span
              className="kdm-display mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
              style={{ background: 'rgb(var(--art-accent))' }}
              aria-hidden
            >
              {i + 1}
            </span>
          ) : (
            <span
              className="mt-[7px] h-2 w-2 shrink-0 rounded-full"
              style={{ background: 'rgb(var(--art-accent))' }}
              aria-hidden
            />
          )}
          <span
            className="text-[15px] leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {item}
          </span>
        </li>
      ))}
    </List>
  )
}

/** Prose block under the ranked list — where an article's «как выбрать» /
 *  «как это работает» depth lives. */
function Sections({ sections }: { sections: GuideSection[] }) {
  return (
    <div className="mt-12 space-y-10">
      {sections.map((section) => (
        <section key={section.h}>
          <h2
            className="text-[22px] leading-snug font-extrabold sm:text-[28px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            {section.h}
          </h2>
          <div
            className="mt-4 space-y-3 text-base leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {section.p.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          {section.table && (
            <div className="mt-5 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                <thead>
                  <tr>
                    {section.table.head.map((h) => (
                      <th
                        key={h}
                        className="border-b px-3 py-2 text-[11px] font-bold tracking-wide uppercase"
                        style={{
                          borderColor: 'rgb(var(--color-rule))',
                          color: 'rgb(var(--art-accent))',
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, i) => (
                    <tr key={i}>
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className="border-b px-3 py-2.5 align-top"
                          style={{
                            borderColor: 'rgb(var(--color-rule))',
                            color: j === 0 ? 'rgb(var(--color-fg))' : 'rgb(var(--color-muted))',
                            fontWeight: j === 0 ? 700 : 400,
                          }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.bullets && <Bullets items={section.bullets} />}
          {section.cta && (
            <a
              href={clickHref(section.cta.clickUrl)}
              target="_blank"
              rel="noopener sponsored"
              className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
              style={{ background: 'rgb(var(--art-accent))' }}
            >
              {section.cta.label}
            </a>
          )}
        </section>
      ))}
    </div>
  )
}

/**
 * Closing CTA. Education guides keep the default Practicum block; guides built
 * around another advertiser pass `guide.cta` and funnel there instead, so the
 * offer at the end of the article matches its topic.
 */
function ClosingCta({ cta }: { cta?: GuideCta }) {
  const copy = cta ?? {
    kicker: 'Совет редакции',
    title: 'Хотите подарок, который запомнят надолго? Подарите обучение.',
    text: 'У Яндекс Практикума есть бесплатное начало — можно подарить старт, ничего не платя.',
    label: '🎓 Начать бесплатно →',
  }
  const button = (
    <span
      className="inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold text-white transition-transform hover:scale-[1.03]"
      style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
    >
      {copy.label}
    </span>
  )

  return (
    <div
      className="mt-12 overflow-hidden rounded-[28px] p-7 sm:p-9"
      style={{ background: 'rgb(var(--art-ink))' }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl">
          <span
            className="inline-flex rounded-full px-3 py-1 text-[11px] font-bold tracking-wide uppercase"
            style={{
              background: 'rgb(var(--art-accent-2) / 0.22)',
              color: 'rgb(var(--art-accent-2))',
            }}
          >
            {copy.kicker}
          </span>
          <p className="kdm-display mt-3 text-xl leading-snug font-extrabold text-white">
            {copy.title}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-white/70">{copy.text}</p>
        </div>
        {cta ? (
          <a
            href={clickHref(cta.clickUrl)}
            target="_blank"
            rel="noopener sponsored"
            className="block"
          >
            {button}
          </a>
        ) : (
          <AffiliateLink to="/python-free/" kind="wrap">
            {button}
          </AffiliateLink>
        )}
      </div>
    </div>
  )
}

/**
 * Shared chrome for every gift-idea article. Each page passes its own bespoke
 * `hero`; the shell provides scoped theme tokens (--art-*), breadcrumb, the
 * freshness byline, the ranked IdeaList, a Practicum CTA,
 * FAQ, related guides and the full JSON-LD graph. This keeps per-article files
 * focused on what makes them look different — hero + palette + list motif.
 */
export default function ArticleShell({ guide, hero }: { guide: Guide; hero: ReactNode }) {
  const related = guide.related.map(getGuide).filter((g): g is Guide => Boolean(g))

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Главная', item: `${BASE}/` },
          { '@type': 'ListItem', position: 2, name: 'Идеи подарков', item: `${BASE}/idei` },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.tag,
            item: `${BASE}/idei/${guide.slug}`,
          },
        ],
      },
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.metaDescription,
        datePublished: guide.updated,
        dateModified: guide.updated,
        inLanguage: 'ru-RU',
        mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE}/idei/${guide.slug}` },
        author: {
          '@type': 'Organization',
          name: 'Редакция Kodomania',
          url: `${BASE}/about`,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Kodomania',
          url: BASE,
          logo: { '@type': 'ImageObject', url: `${BASE}/logo.svg` },
        },
      },
      {
        '@type': 'ItemList',
        name: guide.title,
        numberOfItems: guide.ideas.length,
        itemListElement: guide.ideas.map((idea, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: idea.name,
          url: `${BASE}/idei/${guide.slug}#idea-${i + 1}`,
        })),
      },
      {
        '@type': 'FAQPage',
        mainEntity: guide.faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }

  return (
    <main style={themeVars(guide)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-4xl px-6 py-8 sm:py-10">
        <nav
          className="text-xs"
          style={{ color: 'rgb(var(--color-muted))' }}
          aria-label="breadcrumbs"
        >
          <Link href="/" className="hover:underline" style={{ color: 'rgb(var(--color-muted))' }}>
            Главная
          </Link>
          <span className="mx-1.5">→</span>
          <Link
            href="/idei"
            className="hover:underline"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Идеи подарков
          </Link>
          <span className="mx-1.5">→</span>
          <span>{guide.tag}</span>
        </nav>
      </div>

      {/* Bespoke, per-article hero */}
      {hero}

      <div className="mx-auto max-w-4xl px-6">
        {/* Freshness + count byline */}
        <div
          className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1"
            style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
          >
            ✦ {pluralIdeas(guide.ideas.length)}
          </span>
          <span>Обновлено {formatDate(guide.updated)}</span>
        </div>

        <p className="mt-3 text-xs leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
          Подборку составила редакция Kodomania. Цены — стартовые «от» на момент обновления,
          финальную стоимость подтверждает продавец.
        </p>

        {guide.notice && <Notice text={guide.notice} />}

        {/* Intro */}
        <div
          className="mt-6 space-y-4 text-lg leading-relaxed"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {guide.intro.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Ranked ideas */}
        <div className="mt-8">
          <h2 className="sr-only">{pluralIdeas(guide.ideas.length)}</h2>
          <IdeaList ideas={guide.ideas} layout={guide.layout} featuredLabel={guide.featuredLabel} />
        </div>

        {guide.sections && guide.sections.length > 0 && <Sections sections={guide.sections} />}

        {/* Closing CTA — Practicum by default, the article's advertiser when set */}
        <ClosingCta cta={guide.cta} />

        {/* FAQ */}
        {guide.faq.length > 0 && (
          <section className="mt-12">
            <h2
              className="text-[24px] font-extrabold sm:text-[30px]"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              Частые вопросы
            </h2>
            <div className="mt-6 space-y-3">
              {guide.faq.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border px-5 py-4"
                  style={{
                    borderColor: 'rgb(var(--color-rule))',
                    background: 'rgb(var(--color-surface))',
                  }}
                >
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-bold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {f.q}
                    <span
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm transition-transform group-open:rotate-45"
                      style={{
                        background: 'rgb(var(--art-accent) / 0.12)',
                        color: 'rgb(var(--art-accent))',
                      }}
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: 'rgb(var(--color-muted))' }}
                  >
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-4xl px-6 py-14">
          <h2
            className="text-[24px] font-extrabold sm:text-[30px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Ещё идеи подарков
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((g) => (
              <GuideCard key={g.slug} guide={g} />
            ))}
          </div>
        </section>
      )}
    </main>
  )
}
