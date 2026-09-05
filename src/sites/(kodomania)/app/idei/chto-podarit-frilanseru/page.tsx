import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import { DashboardHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-frilanseru')!

export const metadata: Metadata = guideMetadata(guide)

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <DashboardHero
          guide={guide}
          heading="Что подарить фрилансеру"
          accent="фрилансеру"
          bars={[42, 50, 46, 64, 72, 88, 96]}
          metricLabel="Ставка за час"
          metricValue="×2"
          tiles={[
            ['Дизайн', 'топ-навык фриланса'],
            ['Английский', '+ зарубеж клиенты'],
          ]}
        />
      }
    />
  )
}
