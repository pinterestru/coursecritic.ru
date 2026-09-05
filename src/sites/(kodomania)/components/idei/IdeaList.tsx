import type { ReactNode } from 'react'

import type { GiftIdea, GuideLayout } from '../../data/guides'
import AffiliateLink, { clickHref } from '../AffiliateLink'

function priceLabel(idea: GiftIdea): string {
  if (idea.priceText) return idea.priceText
  if (idea.price === 0) return 'Бесплатно'
  return `от ${idea.price.toLocaleString('ru-RU')} ₽${idea.per ?? ''}`
}

function marketUrl(term: string): string {
  return clickHref(`https://market.yandex.ru/search?text=${encodeURIComponent(term)}`)
}

// AdvCake affiliate tagging appended to every non-Practicum school course link.
const SCHOOL_UTM =
  'utm_source=advcake&utm_medium=cpa&utm_campaign=affiliate&utm_content=ec9s77a2&utm_term=0d355ed099d7a4292896fbh6eg93g38e'

/** Direct link to a school course page with affiliate UTM params appended. */
function schoolHref(deepLink: string): string {
  const url = `https://${deepLink.replace(/^https?:\/\//, '')}`
  return `${url}${url.includes('?') ? '&' : '?'}${SCHOOL_UTM}`
}

/** Destination + button label for a non-Practicum item. */
function ideaTarget(idea: GiftIdea): { href: string; label: string } {
  if (idea.clickUrl) {
    return { href: clickHref(idea.clickUrl), label: idea.ctaLabel ?? 'Перейти на сайт →' }
  }
  if (idea.deepLink) {
    return { href: schoolHref(idea.deepLink), label: idea.ctaLabel ?? 'Смотреть программу →' }
  }
  return {
    href: marketUrl(idea.search ?? idea.name),
    label: idea.ctaLabel ?? 'Смотреть в магазине →',
  }
}

/**
 * CTA button for a single item — Practicum via the edphub tracker, other schools'
 * courses via a direct affiliate link (AdvCake UTM), any other advertiser and
 * physical goods via /click.
 */
function IdeaCta({ idea }: { idea: GiftIdea }) {
  if (idea.practicumPath) {
    return (
      <AffiliateLink to={idea.practicumPath} kind="solid">
        Перейти к курсу →
      </AffiliateLink>
    )
  }
  const { href, label } = ideaTarget(idea)
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored"
      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.03]"
      style={{ background: 'rgb(var(--art-accent))' }}
    >
      {label}
    </a>
  )
}

/** White pill used for the #1 pick's CTA on the gradient hero-card. */
function FeaturedPill({ children }: { children: ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-extrabold transition-transform hover:scale-[1.03]"
      style={{ color: 'rgb(var(--art-accent))' }}
    >
      {children}
    </span>
  )
}

/**
 * The #1 pick — the article's lead offer, rendered as a bold gradient hero-card
 * so the top recommendation visibly leads every article, whatever the body
 * variant below.
 */
function FeaturedIdea({ idea, label }: { idea: GiftIdea; label?: string }) {
  const featured = ideaTarget(idea)
  return (
    <article
      id="idea-1"
      className="relative scroll-mt-20 overflow-hidden rounded-[28px] p-6 text-white sm:p-8"
      style={{ background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))' }}
    >
      <div
        className="pointer-events-none absolute -top-16 -right-16 h-52 w-52 rounded-full opacity-25"
        style={{ background: 'radial-gradient(circle, #fff 0%, transparent 70%)' }}
        aria-hidden
      />
      <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
        <div
          className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl text-5xl backdrop-blur-sm"
          style={{ background: 'rgb(255 255 255 / 0.18)' }}
          aria-hidden
        >
          {idea.emoji}
        </div>
        <div className="min-w-0 flex-1">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
            style={{ background: 'rgb(255 255 255 / 0.2)' }}
          >
            {label ? label : '★ Выбор редакции · №1'}
          </span>
          {idea.brand && (
            <p className="mt-3 text-[12px] font-bold tracking-wide text-white/75 uppercase">
              {idea.brand}
            </p>
          )}
          <h3 className="kdm-display mt-0.5 text-2xl leading-tight font-extrabold sm:text-[28px]">
            {idea.name}
          </h3>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/85">{idea.why}</p>
        </div>
        <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
          <span className="kdm-display text-lg font-extrabold tabular-nums">
            {priceLabel(idea)}
          </span>
          {idea.practicumPath ? (
            <AffiliateLink to={idea.practicumPath} kind="wrap">
              <FeaturedPill>🎓 Подарить курс →</FeaturedPill>
            </AffiliateLink>
          ) : idea.clickUrl ? (
            <a href={featured.href} target="_blank" rel="noopener sponsored" className="block">
              <FeaturedPill>{featured.label}</FeaturedPill>
            </a>
          ) : (
            <IdeaCta idea={idea} />
          )}
        </div>
      </div>
    </article>
  )
}

/** Compact horizontal row with a rank badge. */
function RowIdea({ idea, rank }: { idea: GiftIdea; rank: number }) {
  return (
    <article
      id={`idea-${rank}`}
      className="flex scroll-mt-20 flex-col gap-4 rounded-3xl border p-5 sm:flex-row sm:items-center sm:p-6"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div
        className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl"
        style={{ background: 'rgb(var(--art-accent) / 0.1)' }}
        aria-hidden
      >
        {idea.emoji}
        <span
          className="kdm-display absolute -top-2 -left-2 flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
          style={{ background: 'rgb(var(--art-accent))' }}
        >
          {rank}
        </span>
      </div>
      <div className="min-w-0 flex-1">
        {idea.brand && (
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {idea.brand}
          </p>
        )}
        <h3
          className="kdm-display mt-0.5 text-lg font-extrabold"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {idea.name}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
          {idea.why}
        </p>
      </div>
      <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
        <span
          className="kdm-display text-base font-extrabold tabular-nums"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {priceLabel(idea)}
        </span>
        <IdeaCta idea={idea} />
      </div>
    </article>
  )
}

/** Card for the 2-column grid variant. */
function CardIdea({ idea, rank }: { idea: GiftIdea; rank: number }) {
  return (
    <article
      id={`idea-${rank}`}
      className="flex h-full scroll-mt-20 flex-col rounded-3xl border p-6"
      style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
    >
      <div className="flex items-center justify-between">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-2xl text-3xl"
          style={{ background: 'rgb(var(--art-accent) / 0.1)' }}
          aria-hidden
        >
          {idea.emoji}
        </div>
        <span
          className="kdm-display text-sm font-extrabold tabular-nums"
          style={{ color: 'rgb(var(--art-accent))' }}
        >
          №{rank}
        </span>
      </div>
      {idea.brand && (
        <p
          className="mt-4 text-[11px] font-bold tracking-wide uppercase"
          style={{ color: 'rgb(var(--color-muted))' }}
        >
          {idea.brand}
        </p>
      )}
      <h3
        className="kdm-display mt-0.5 text-lg font-extrabold"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {idea.name}
      </h3>
      <p
        className="mt-2 flex-1 text-sm leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {idea.why}
      </p>
      <div
        className="mt-5 flex items-center justify-between gap-3 border-t pt-4"
        style={{ borderColor: 'rgb(var(--color-rule))' }}
      >
        <span
          className="kdm-display text-base font-extrabold tabular-nums"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {priceLabel(idea)}
        </span>
        <IdeaCta idea={idea} />
      </div>
    </article>
  )
}

/** Node in the vertical connected timeline variant. */
function TimelineIdea({ idea, rank, last }: { idea: GiftIdea; rank: number; last: boolean }) {
  return (
    <li id={`idea-${rank}`} className="relative flex scroll-mt-20 gap-5 pb-8 last:pb-0">
      {!last && (
        <span
          className="absolute top-12 bottom-0 left-6 w-px -translate-x-1/2"
          style={{ background: 'rgb(var(--art-accent) / 0.25)' }}
          aria-hidden
        />
      )}
      <span
        className="kdm-display relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-extrabold text-white"
        style={{ background: 'rgb(var(--art-accent))' }}
        aria-hidden
      >
        {rank}
      </span>
      <div
        className="min-w-0 flex-1 rounded-3xl border p-5"
        style={{ borderColor: 'rgb(var(--color-rule))', background: 'rgb(var(--color-surface))' }}
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-2xl" aria-hidden>
                {idea.emoji}
              </span>
              {idea.brand && (
                <span
                  className="text-[11px] font-bold tracking-wide uppercase"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {idea.brand}
                </span>
              )}
            </div>
            <h3
              className="kdm-display mt-1.5 text-lg font-extrabold"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {idea.name}
            </h3>
            <p
              className="mt-1.5 text-sm leading-relaxed"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {idea.why}
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2 sm:items-end">
            <span
              className="kdm-display text-base font-extrabold tabular-nums"
              style={{ color: 'rgb(var(--color-fg))' }}
            >
              {priceLabel(idea)}
            </span>
            <IdeaCta idea={idea} />
          </div>
        </div>
      </div>
    </li>
  )
}

/**
 * Ranked idea list. The #1 pick is always rendered as the gradient FeaturedIdea;
 * the remaining ideas follow the article's chosen `layout` motif so every article
 * reads visually distinct while sharing this one component.
 */
export default function IdeaList({
  ideas,
  layout,
  featuredLabel,
}: {
  ideas: GiftIdea[]
  layout: GuideLayout
  featuredLabel?: string
}) {
  const [featured, ...rest] = ideas

  return (
    <div className="space-y-6">
      {featured && <FeaturedIdea idea={featured} label={featuredLabel} />}

      {layout === 'rows' && (
        <div className="space-y-4">
          {rest.map((idea, i) => (
            <RowIdea key={`${idea.brand}-${idea.name}`} idea={idea} rank={i + 2} />
          ))}
        </div>
      )}

      {layout === 'cards' && (
        <div className="grid gap-4 sm:grid-cols-2">
          {rest.map((idea, i) => (
            <CardIdea key={`${idea.brand}-${idea.name}`} idea={idea} rank={i + 2} />
          ))}
        </div>
      )}

      {layout === 'timeline' && (
        <ol className="mt-2">
          {rest.map((idea, i) => (
            <TimelineIdea
              key={`${idea.brand}-${idea.name}`}
              idea={idea}
              rank={i + 2}
              last={i === rest.length - 1}
            />
          ))}
        </ol>
      )}
    </div>
  )
}
