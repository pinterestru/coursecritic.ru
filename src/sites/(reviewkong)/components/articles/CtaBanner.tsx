import { providers as allProviders } from '../../data/providers'
import AffiliateLink from '../AffiliateLink'

/**
 * Mid/bottom conversion banner — re-surfaces the main CTA after a long reading
 * stretch. Takes a provider id from data/providers.ts plus the wording for this
 * particular placement.
 */
export default function CtaBanner({
  providerId,
  providers = allProviders,
  deepLink,
  title,
  body,
  cta,
}: {
  providerId: string
  providers?: typeof allProviders
  deepLink?: string
  title: string
  body: string
  cta: string
}) {
  const provider = providers[providerId]
  if (!provider) return null

  const href = deepLink ?? provider.domain
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
        <AffiliateLink to={href} tracked={provider.tracked !== false}>
          {cta}
        </AffiliateLink>
      </div>
    </section>
  )
}
