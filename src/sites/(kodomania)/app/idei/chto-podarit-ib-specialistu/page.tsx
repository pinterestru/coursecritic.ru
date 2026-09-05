import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { TerminalHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-ib-specialistu')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <TerminalHero
          guide={guide}
          heading="Что подарить специалисту по ИБ"
          accent="по ИБ"
          lines={[
            { prompt: true, text: 'nmap --scan target' },
            { text: '✓ 0 критических уязвимостей', ok: true },
            { prompt: true, text: 'audit --secrets' },
            { text: '✓ секреты не в коде', ok: true },
            { text: '✕ обнови зависимость до патча', ok: false },
          ]}
        />
      }
    />
  )
}
