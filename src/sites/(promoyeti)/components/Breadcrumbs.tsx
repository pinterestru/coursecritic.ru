import Link from 'next/link'

/**
 * Breadcrumb trail. The last item is the current page and is not a link.
 *
 * Rendered as plain markup, not JSON-LD — the BreadcrumbList structured data is
 * emitted by the store page itself, which already has the URLs to hand.
 */
export default function Breadcrumbs({ trail }: { trail: { label: string; href?: string }[] }) {
  return (
    <nav className="text-xs" style={{ color: 'rgb(var(--color-muted))' }} aria-label="Breadcrumb">
      {trail.map((item, i) => (
        <span key={item.label}>
          {i > 0 && <span className="mx-2">/</span>}
          {item.href ? (
            <Link
              href={item.href}
              className="hover:underline"
              style={{ color: 'rgb(var(--color-muted))' }}
            >
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
