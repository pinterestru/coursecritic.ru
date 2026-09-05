import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { DashboardHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-data-sayentistu')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <DashboardHero
          guide={guide}
          heading="Что подарить дата-сайентисту"
          accent="дата-сайентисту"
          bars={[40, 55, 63, 72, 80, 88, 94]}
          metricLabel="Точность модели"
          metricValue="ROC-AUC 0.94"
          tiles={[
            ['ML · Python', 'уже в работе'],
            ['Нейросети', 'следующая ступень'],
          ]}
        />
      }
    />
  )
}
