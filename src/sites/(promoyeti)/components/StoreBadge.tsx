import { contrastText } from './contrastText'

/**
 * The merchant tile: initials on the brand's own colour.
 *
 * Deliberately not the merchant's logo. Hotlinking brand logos onto an
 * affiliate site is a trademark question we do not need to have, and a wall of
 * mismatched PNGs looks worse than a consistent set of tiles anyway.
 */
export default function StoreBadge({
  badge,
  color,
  size = 'md',
}: {
  badge: string
  color: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const dims =
    size === 'lg'
      ? 'h-16 w-16 rounded-xl text-lg'
      : size === 'sm'
        ? 'h-9 w-9 rounded-md text-[11px]'
        : 'h-11 w-11 rounded-lg text-[13px]'

  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center font-extrabold tracking-tight ${dims}`}
      style={{ background: color, color: contrastText(color) }}
      aria-hidden
    >
      {badge}
    </span>
  )
}
