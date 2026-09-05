import { providers as allProviders } from '../../data/providers'
import AffiliateLink from '../AffiliateLink'

/**
 * Конверсионный блок в середине и в конце разбора — возвращает основной CTA
 * после длинного куска чтения. Принимает id сервиса из data/providers.ts и
 * формулировки для этого конкретного места.
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
      className="bc-corners border p-6 sm:p-8"
      style={{
        borderColor: 'rgb(var(--color-primary))',
        background: 'rgb(var(--color-primary) / 0.05)',
      }}
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold sm:text-2xl" style={{ color: 'rgb(var(--color-fg))' }}>
            {title}
          </h2>
          <p
            className="mt-3 text-[15px] leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {body}
          </p>
        </div>
        <div className="flex-shrink-0">
          <AffiliateLink to={href} tracked={provider.tracked !== false}>
            {cta}
          </AffiliateLink>
        </div>
      </div>
    </section>
  )
}
