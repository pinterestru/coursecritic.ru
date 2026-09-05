import type { ReactNode } from 'react'

/**
 * A titled, anchorable article section. The id matches a TOC entry; scroll-mt
 * keeps the heading clear of the top of the viewport. Wrap plain body copy with
 * `prose` to inherit the .article-prose typography from theme.css.
 */
export default function ArticleSection({
  id,
  title,
  children,
  prose = false,
}: {
  id?: string
  title?: string
  children: ReactNode
  prose?: boolean
}) {
  return (
    <section id={id} className={id ? 'scroll-mt-24' : undefined}>
      {title && (
        <h2
          className="font-editorial text-2xl font-bold tracking-tight sm:text-3xl"
          style={{ color: 'rgb(var(--color-fg))' }}
        >
          {title}
        </h2>
      )}
      <div className={prose ? 'article-prose mt-5' : 'mt-5'}>{children}</div>
    </section>
  )
}
