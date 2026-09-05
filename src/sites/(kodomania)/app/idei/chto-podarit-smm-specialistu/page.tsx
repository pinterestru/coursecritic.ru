import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { FunnelHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-smm-specialistu')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <FunnelHero
          guide={guide}
          heading="Что подарить SMM-специалисту"
          accent="SMM-специалисту"
          stages={[
            { label: 'Охваты', pct: 100 },
            { label: 'Вовлечение', pct: 58 },
            { label: 'Переходы', pct: 34 },
            { label: 'Подписки', pct: 18 },
          ]}
        />
      }
    />
  )
}
