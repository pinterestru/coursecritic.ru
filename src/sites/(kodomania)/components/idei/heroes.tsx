import type { ReactNode } from 'react'

import type { Guide } from '../../data/guides'

/**
 * Signature hero components, one motif per Practicum direction. All share the
 * split HeroFrame (text column + a bespoke visual) and read the article's theme
 * through the scoped --art-* variables set by ArticleShell. Professions in the
 * same direction reuse the same hero and vary only copy + accent, so the section
 * reads as one family while each page stays distinct.
 */

/** Split heading where `accent` is gradient-highlighted. */
function AccentTitle({ heading, accent }: { heading: string; accent: string }) {
  const i = heading.indexOf(accent)
  const before = i >= 0 ? heading.slice(0, i) : heading
  const after = i >= 0 ? heading.slice(i + accent.length) : ''
  return (
    <h1
      className="mt-5 text-[34px] leading-[1.05] font-extrabold sm:text-[46px]"
      style={{ color: 'rgb(var(--color-fg))' }}
    >
      {before}
      {i >= 0 && (
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(120deg, var(--art-grad-1), var(--art-grad-2))',
          }}
        >
          {accent}
        </span>
      )}
      {after}
    </h1>
  )
}

function Kicker({ guide }: { guide: Guide }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-extrabold tracking-wide uppercase"
      style={{ background: 'rgb(var(--art-accent) / 0.1)', color: 'rgb(var(--art-accent))' }}
    >
      {guide.emoji} {guide.tag}
    </span>
  )
}

/** Shared split layout: text column on the left, a motif visual on the right. */
function HeroFrame({
  guide,
  heading,
  accent,
  visual,
}: {
  guide: Guide
  heading: string
  accent: string
  visual: ReactNode
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 pt-2 pb-10">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <Kicker guide={guide} />
          <AccentTitle heading={heading} accent={accent} />
          <p className="mt-5 text-lg leading-relaxed" style={{ color: 'rgb(var(--color-muted))' }}>
            {guide.lead}
          </p>
        </div>
        {visual}
      </div>
    </section>
  )
}

/** Card frame shared by the light-surface visuals. */
function VisualCard({ children }: { children: ReactNode }) {
  return (
    <div
      className="rounded-[28px] border p-6 shadow-[0_24px_50px_-28px_rgb(0_0_0_/_0.35)]"
      style={{
        background: 'rgb(var(--color-surface))',
        borderColor: 'rgb(var(--art-accent) / 0.15)',
      }}
      aria-hidden
    >
      {children}
    </div>
  )
}

// ── Разработка / DevOps / ИБ: code-editor + terminal ────────────────────────

export type CodeToken = { t: string; c?: 'kw' | 'str' | 'num' | 'cmt' | 'fn' | 'plain' | 'punc' }

function tokenColor(c: CodeToken['c']): string {
  switch (c) {
    case 'kw':
      return 'var(--art-grad-2)'
    case 'str':
      return 'rgb(var(--art-accent-2))'
    case 'num':
      return 'rgb(var(--art-accent-2))'
    case 'fn':
      return 'var(--art-grad-2)'
    case 'cmt':
      return 'rgb(255 255 255 / 0.35)'
    case 'punc':
      return 'rgb(255 255 255 / 0.5)'
    default:
      return 'rgb(255 255 255 / 0.9)'
  }
}

/** Faux editor / terminal window. Pass filename + lines of tokens. */
export function CodeEditorHero({
  guide,
  heading,
  accent,
  filename,
  lines,
}: {
  guide: Guide
  heading: string
  accent: string
  filename: string
  lines: CodeToken[][]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <div
          className="overflow-hidden rounded-2xl border shadow-[0_30px_60px_-30px_rgb(0_0_0_/_0.6)]"
          style={{ background: 'rgb(var(--art-ink))', borderColor: 'rgb(255 255 255 / 0.08)' }}
          aria-hidden
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ background: 'rgb(255 255 255 / 0.04)' }}
          >
            <span className="h-3 w-3 rounded-full" style={{ background: '#FF5F56' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: '#27C93F' }} />
            <span className="ml-2 text-[11px] text-white/40">{filename}</span>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-6">
            <code>
              {lines.map((line, li) => (
                <span key={li}>
                  {line.map((tok, ti) => (
                    <span key={ti} style={{ color: tokenColor(tok.c) }}>
                      {tok.t}
                    </span>
                  ))}
                  {li < lines.length - 1 ? '\n' : ''}
                </span>
              ))}
            </code>
          </pre>
        </div>
      }
    />
  )
}

// ── Аналитика: dashboard ────────────────────────────────────────────────────

export function DashboardHero({
  guide,
  heading,
  accent,
  bars = [38, 62, 48, 80, 56, 94, 72],
  metricLabel = 'Рост навыка',
  metricValue = '+38%',
  tiles = [
    ['SQL · Python', 'уже в работе'],
    ['ML', 'следующая ступень'],
  ],
}: {
  guide: Guide
  heading: string
  accent: string
  bars?: number[]
  metricLabel?: string
  metricValue?: string
  tiles?: [string, string][]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <VisualCard>
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-bold tracking-wide uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {metricLabel}
            </span>
            <span
              className="rounded-full px-2 py-0.5 text-[11px] font-extrabold"
              style={{
                background: 'rgb(var(--art-accent) / 0.12)',
                color: 'rgb(var(--art-accent))',
              }}
            >
              {metricValue}
            </span>
          </div>
          <div className="mt-5 flex h-28 items-end gap-2">
            {bars.map((h, i) => (
              <span
                key={i}
                className="flex-1 rounded-t-md"
                style={{
                  height: `${h}%`,
                  background:
                    i === bars.length - 2
                      ? 'linear-gradient(var(--art-grad-1), var(--art-grad-2))'
                      : 'rgb(var(--art-accent) / 0.2)',
                }}
              />
            ))}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {tiles.map(([big, small]) => (
              <div
                key={big}
                className="rounded-xl px-3 py-2.5"
                style={{ background: 'rgb(var(--art-tint))' }}
              >
                <div
                  className="kdm-display text-lg font-extrabold"
                  style={{ color: 'rgb(var(--art-accent))' }}
                >
                  {big}
                </div>
                <div className="text-[11px]" style={{ color: 'rgb(var(--color-muted))' }}>
                  {small}
                </div>
              </div>
            ))}
          </div>
        </VisualCard>
      }
    />
  )
}

// ── Менеджмент: kanban board ────────────────────────────────────────────────

export function KanbanHero({
  guide,
  heading,
  accent,
  columns,
}: {
  guide: Guide
  heading: string
  accent: string
  columns: { title: string; cards: string[] }[]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <VisualCard>
          <div className="grid grid-cols-3 gap-3">
            {columns.map((col) => (
              <div key={col.title}>
                <p
                  className="text-[10px] font-bold tracking-wide uppercase"
                  style={{ color: 'rgb(var(--color-muted))' }}
                >
                  {col.title}
                </p>
                <div className="mt-2 space-y-2">
                  {col.cards.map((card, i) => (
                    <div
                      key={i}
                      className="rounded-lg px-2.5 py-2 text-[11px] font-semibold"
                      style={{
                        background: 'rgb(var(--art-tint))',
                        color: 'rgb(var(--color-fg))',
                        borderLeft: '3px solid var(--art-grad-1)',
                      }}
                    >
                      {card}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </VisualCard>
      }
    />
  )
}

// ── Маркетинг: funnel ───────────────────────────────────────────────────────

export function FunnelHero({
  guide,
  heading,
  accent,
  stages,
}: {
  guide: Guide
  heading: string
  accent: string
  stages: { label: string; pct: number }[]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <VisualCard>
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            Воронка
          </p>
          <div className="mt-4 space-y-2">
            {stages.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <span
                  className="w-24 shrink-0 text-[11px] font-semibold"
                  style={{ color: 'rgb(var(--color-fg))' }}
                >
                  {s.label}
                </span>
                <span
                  className="h-7 flex-1 overflow-hidden rounded-md"
                  style={{ background: 'rgb(var(--art-accent) / 0.12)' }}
                >
                  <span
                    className="flex h-full items-center justify-end rounded-md px-2 text-[10px] font-extrabold text-white"
                    style={{
                      width: `${s.pct}%`,
                      background: 'linear-gradient(90deg, var(--art-grad-1), var(--art-grad-2))',
                    }}
                  >
                    {s.pct}%
                  </span>
                </span>
              </div>
            ))}
          </div>
        </VisualCard>
      }
    />
  )
}

// ── QA: test report ─────────────────────────────────────────────────────────

export function TestReportHero({
  guide,
  heading,
  accent,
  passed = 47,
  total = 48,
}: {
  guide: Guide
  heading: string
  accent: string
  passed?: number
  total?: number
}) {
  const rows: [boolean, string][] = [
    [true, 'login · авторизация'],
    [true, 'checkout · оплата'],
    [false, 'edge · пустая корзина'],
    [true, 'api · 200 OK'],
  ]
  const pct = Math.round((passed / total) * 100)
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <VisualCard>
          <div className="flex items-center justify-between">
            <span
              className="text-[11px] font-bold tracking-wide uppercase"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              Test run
            </span>
            <span
              className="text-[11px] font-extrabold"
              style={{ color: 'rgb(var(--art-accent))' }}
            >
              {passed}/{total} passed
            </span>
          </div>
          <div className="mt-4 space-y-2">
            {rows.map(([ok, label], i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 rounded-lg px-3 py-2 text-[12px] font-semibold"
                style={{ background: 'rgb(var(--art-tint))', color: 'rgb(var(--color-fg))' }}
              >
                <span
                  className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-extrabold text-white"
                  style={{ background: ok ? 'rgb(var(--art-accent-2))' : '#E02424' }}
                >
                  {ok ? '✓' : '✕'}
                </span>
                {label}
              </div>
            ))}
          </div>
          <div
            className="mt-4 h-2 overflow-hidden rounded-full"
            style={{ background: 'rgb(var(--art-accent) / 0.15)' }}
          >
            <span
              className="block h-full rounded-full"
              style={{
                width: `${pct}%`,
                background: 'linear-gradient(90deg, var(--art-grad-1), var(--art-grad-2))',
              }}
            />
          </div>
        </VisualCard>
      }
    />
  )
}

// ── DevOps: pipeline ────────────────────────────────────────────────────────

export function PipelineHero({
  guide,
  heading,
  accent,
  stages = ['build', 'test', 'deploy', 'monitor'],
}: {
  guide: Guide
  heading: string
  accent: string
  stages?: string[]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <VisualCard>
          <p
            className="text-[11px] font-bold tracking-wide uppercase"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            CI/CD pipeline
          </p>
          <div className="mt-4 flex items-center">
            {stages.map((s, i) => (
              <div key={s} className="flex flex-1 items-center">
                <div className="flex flex-col items-center">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-[13px] font-extrabold text-white"
                    style={{
                      background: 'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))',
                    }}
                  >
                    ✓
                  </span>
                  <span
                    className="mt-1.5 text-[10px] font-semibold"
                    style={{ color: 'rgb(var(--color-fg))' }}
                  >
                    {s}
                  </span>
                </div>
                {i < stages.length - 1 && (
                  <span
                    className="mx-1 h-0.5 flex-1"
                    style={{ background: 'rgb(var(--art-accent) / 0.3)' }}
                  />
                )}
              </div>
            ))}
          </div>
          <div
            className="mt-5 rounded-lg px-3 py-2 font-mono text-[11px]"
            style={{ background: 'rgb(var(--art-tint))', color: 'rgb(var(--art-accent))' }}
          >
            $ deploy → ✓ green · 99.9% uptime
          </div>
        </VisualCard>
      }
    />
  )
}

// ── ИБ: terminal ────────────────────────────────────────────────────────────

export function TerminalHero({
  guide,
  heading,
  accent,
  lines,
}: {
  guide: Guide
  heading: string
  accent: string
  lines: { prompt?: boolean; text: string; ok?: boolean }[]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <div
          className="overflow-hidden rounded-2xl border shadow-[0_30px_60px_-30px_rgb(0_0_0_/_0.6)]"
          style={{ background: 'rgb(var(--art-ink))', borderColor: 'rgb(255 255 255 / 0.08)' }}
          aria-hidden
        >
          <div
            className="flex items-center gap-1.5 px-4 py-3"
            style={{ background: 'rgb(255 255 255 / 0.04)' }}
          >
            <span className="h-3 w-3 rounded-full" style={{ background: '#FF5F56' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <span className="h-3 w-3 rounded-full" style={{ background: '#27C93F' }} />
            <span className="ml-2 text-[11px] text-white/40">secure — bash</span>
          </div>
          <pre className="overflow-x-auto px-5 py-4 font-mono text-[12.5px] leading-6">
            <code>
              {lines.map((l, i) => (
                <div key={i}>
                  {l.prompt && <span style={{ color: 'rgb(var(--art-accent-2))' }}>$ </span>}
                  <span
                    style={{
                      color:
                        l.ok === undefined
                          ? 'rgb(255 255 255 / 0.85)'
                          : l.ok
                            ? 'rgb(var(--art-accent-2))'
                            : '#FF6B6B',
                    }}
                  >
                    {l.text}
                  </span>
                </div>
              ))}
            </code>
          </pre>
        </div>
      }
    />
  )
}

// ── Английский: chat ────────────────────────────────────────────────────────

export function ChatHero({
  guide,
  heading,
  accent,
  messages,
}: {
  guide: Guide
  heading: string
  accent: string
  messages: { mine?: boolean; text: string }[]
}) {
  return (
    <HeroFrame
      guide={guide}
      heading={heading}
      accent={accent}
      visual={
        <VisualCard>
          <div className="space-y-2.5">
            {messages.map((m, i) => (
              <div key={i} className={m.mine ? 'flex justify-end' : 'flex justify-start'}>
                <span
                  className="max-w-[80%] rounded-2xl px-3.5 py-2 text-[12.5px] font-medium"
                  style={
                    m.mine
                      ? {
                          background:
                            'linear-gradient(135deg, var(--art-grad-1), var(--art-grad-2))',
                          color: '#fff',
                        }
                      : { background: 'rgb(var(--art-tint))', color: 'rgb(var(--color-fg))' }
                  }
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>
        </VisualCard>
      }
    />
  )
}
