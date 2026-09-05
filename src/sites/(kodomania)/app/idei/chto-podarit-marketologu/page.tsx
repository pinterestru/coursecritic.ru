import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { FunnelHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-marketologu')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <FunnelHero
          guide={guide}
          heading="Что подарить маркетологу"
          accent="маркетологу"
          stages={[
            { label: 'Показы', pct: 100 },
            { label: 'Клики', pct: 64 },
            { label: 'Лиды', pct: 32 },
            { label: 'Продажи', pct: 14 },
          ]}
        />
      }
    />
  )
}
