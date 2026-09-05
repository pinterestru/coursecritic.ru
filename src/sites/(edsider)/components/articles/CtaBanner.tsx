import type { GuideProvider } from '../../data/guides/types'
import { egeSchools } from '../../data/ege/schools'

import AffiliateButton from './AffiliateButton'

/**
 * Mid/bottom conversion banner. Defaults to the ЕГЭ editor's pick (Фоксфорд),
 * but any registry + school + deep-link can be passed. Used to re-surface the
 * main CTA after a long reading stretch.
 */
export default function CtaBanner({
  schoolId = 'foxford',
  schools = egeSchools,
  deepLink,
  title,
  body,
  cta,
}: {
  schoolId?: string
  schools?: Record<string, GuideProvider>
  deepLink?: string
  title: string
  body: string
  cta: string
}) {
  const school = schools[schoolId]
  const href = deepLink ?? school?.domain ?? 'foxford.ru/ege'
  return (
    <section
      className="rounded-2xl border p-6 text-center sm:p-10"
      style={{
        borderColor: 'rgb(var(--color-primary))',
        background: 'rgb(var(--color-primary) / 0.06)',
      }}
    >
      <h2
        className="font-editorial mx-auto max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl"
        style={{ color: 'rgb(var(--color-fg))' }}
      >
        {title}
      </h2>
      <p
        className="mx-auto mt-3 max-w-2xl text-base leading-relaxed"
        style={{ color: 'rgb(var(--color-muted))' }}
      >
        {body}
      </p>
      <div className="mt-6">
        <AffiliateButton to={href} tracked={school?.tracked !== false}>
          {cta}
        </AffiliateButton>
      </div>
    </section>
  )
}
