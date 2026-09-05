import type { ReactNode } from 'react'

import { affiliateHref, directHref } from '../../data/guides/types'

/**
 * Inline affiliate link for article body copy.
 *
 * The buttons convert the readers who are already decided; these catch the rest
 * — someone who wants to look at the programme the sentence just described,
 * mid-paragraph, without scrolling to the next CTA. Same tracked `/click`
 * redirect and same `rel="sponsored"` as the buttons, so a body link is
 * disclosed and measured exactly like one.
 *
 * Styled as an underlined primary-coloured link rather than a button so it
 * reads as part of the sentence. Mirrors the `Aff` helper on the brand pages.
 */
export default function Aff({
  to,
  children,
  tracked = true,
}: {
  /** Deep-link, e.g. 'netology.ru/programs/python-basic'. */
  to: string
  children: ReactNode
  /** False for schools we merely mention — links out directly, nothing recorded. */
  tracked?: boolean
}) {
  return (
    <a
      href={tracked ? affiliateHref(to) : directHref(to)}
      target="_blank"
      rel={tracked ? 'noopener sponsored' : 'noopener nofollow'}
      className="underline underline-offset-2 hover:opacity-75"
      style={{ color: 'rgb(var(--color-primary))' }}
    >
      {children}
    </a>
  )
}
