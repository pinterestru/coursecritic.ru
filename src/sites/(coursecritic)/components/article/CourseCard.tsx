import type { Course } from './types'

// A single course written as part of an author's review — numbered prose
// section, a quiet meta line, a small hand-drawn margin doodle, soft
// likes/dislikes, an optional savings aside and an inline affiliate link.
// Deliberately not a boxed "product card": this is a blog post, not a landing page.
export default function CourseCard({ course }: { course: Course }) {
  const { rank, provider, headline, url, duration, price, guarantee, body, pros, cons, verdict, save, icon } =
    course

  const meta = [duration, price, guarantee ? 'есть гарантия возврата' : 'без гарантии возврата'].filter(
    (m) => m && m !== '—'
  )

  return (
    <section id={`course-${rank}`} className="mt-14 scroll-mt-24">
      <div className="flex items-start gap-5">
        <div className="min-w-0 flex-1">
          <RankBadge rank={rank} />
          <h2 className="mt-3 font-serif text-2xl leading-snug font-semibold sm:text-[28px]">
            <a
              href={url}
              target="_blank"
              rel="noopener sponsored"
              className="underline decoration-1 underline-offset-[3px] transition-opacity hover:opacity-80"
              style={{ color: 'inherit', textDecorationColor: 'rgb(var(--color-link) / 0.35)' }}
            >
              {provider}
            </a>
          </h2>
          <p className="mt-1 text-lg italic" style={{ color: 'rgb(var(--color-muted))' }}>
            {headline}
          </p>
          {meta.length > 0 && (
            <p className="mt-2 text-sm" style={{ color: 'rgb(var(--color-muted))' }}>
              {meta.join('  ·  ')}
            </p>
          )}
        </div>

        {icon && (
          <span
            className="mt-1 hidden h-20 w-20 flex-none overflow-hidden rounded-xl sm:block"
            style={{ border: '1px solid rgb(var(--color-rule))' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={icon.src} alt={icon.alt} width={80} height={80} className="h-full w-full object-cover" />
          </span>
        )}
      </div>

      <div className="mt-4 space-y-4 text-[17px] leading-[1.75]" style={{ color: 'rgb(var(--color-fg))' }}>
        {body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="mt-5 grid gap-x-8 gap-y-4 text-[16px] sm:grid-cols-2">
        <Likes title="Что понравилось" items={pros} kind="pro" />
        <Likes title="Что напрягло" items={cons} kind="con" />
      </div>

      {save && (
        <blockquote
          className="mt-6 border-l-2 pl-5 text-[16px] leading-relaxed italic"
          style={{ borderColor: 'rgb(var(--color-primary))', color: 'rgb(var(--color-muted))' }}
        >
          <strong className="not-italic" style={{ color: 'rgb(var(--color-fg))' }}>
            Как сэкономить.
          </strong>{' '}
          {save.body}{' '}
          <a
            href={url}
            target="_blank"
            rel="noopener sponsored"
            className="font-medium not-italic underline underline-offset-2"
            style={{ color: 'rgb(var(--color-link))' }}
          >
            {save.ctaLabel} →
          </a>
        </blockquote>
      )}

      <p className="mt-5 text-[17px] leading-[1.75]" style={{ color: 'rgb(var(--color-fg))' }}>
        <strong>Вердикт.</strong> {verdict}
      </p>

      <p className="mt-3 text-[15px]">
        <a
          href={url}
          target="_blank"
          rel="noopener sponsored"
          className="underline underline-offset-2"
          style={{ color: 'rgb(var(--color-link))' }}
        >
          Посмотреть программу и цены на «{provider}» →
        </a>
      </p>
    </section>
  )
}

// Top three get an emphasised "ТОП-N" badge (#1 solid, #2–#3 tinted);
// the rest get a quiet "№N" marker without the ТОП wording.
function RankBadge({ rank }: { rank: number }) {
  const base =
    'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase'

  if (rank <= 3) {
    const solid = rank === 1
    return (
      <span
        className={base}
        style={
          solid
            ? { background: 'rgb(var(--color-primary))', color: 'rgb(var(--color-primary-fg))' }
            : { background: 'rgb(var(--color-primary) / 0.12)', color: 'rgb(var(--color-primary))' }
        }
      >
        ТОП-{rank}
      </span>
    )
  }

  return (
    <span
      className={base}
      style={{ border: '1px solid rgb(var(--color-rule))', color: 'rgb(var(--color-muted))' }}
    >
      №{rank}
    </span>
  )
}

function Likes({ title, items, kind }: { title: string; items: string[]; kind: 'pro' | 'con' }) {
  const mark = kind === 'pro' ? '+' : '–'
  return (
    <div>
      <p className="text-sm font-medium" style={{ color: 'rgb(var(--color-muted))' }}>
        {title}
      </p>
      <ul className="mt-2 space-y-1.5 leading-relaxed">
        {items.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="flex-none" style={{ color: 'rgb(var(--color-muted))' }}>
              {mark}
            </span>
            <span style={{ color: 'rgb(var(--color-fg))' }}>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
