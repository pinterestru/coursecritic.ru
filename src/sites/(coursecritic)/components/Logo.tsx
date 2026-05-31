import Link from 'next/link'

export default function Logo({ linkHome = false }: { linkHome?: boolean }) {
  const content = (
    <span className="font-serif text-xl italic" style={{ color: 'rgb(var(--color-fg))' }}>
      путь в код
      <span
        className="ml-1 inline-block h-1.5 w-1.5 translate-y-[-2px] rounded-[1px]"
        style={{ background: 'rgb(var(--color-primary))' }}
      />
    </span>
  )
  if (!linkHome) return content
  return (
    <Link href="/" aria-label="На главную" className="inline-block no-underline">
      {content}
    </Link>
  )
}
