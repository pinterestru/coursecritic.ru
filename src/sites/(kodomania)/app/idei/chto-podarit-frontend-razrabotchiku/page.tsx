import type { Metadata } from 'next'

import ArticleShell from '../../../components/idei/ArticleShell'
import type { CodeToken } from '../../../components/idei/heroes'
import { CodeEditorHero } from '../../../components/idei/heroes'
import { guideMetadata } from '../../../components/idei/meta'
import { getGuide } from '../../../data/guides'

const guide = getGuide('chto-podarit-frontend-razrabotchiku')!

export const metadata: Metadata = guideMetadata(guide)

const code: CodeToken[][] = [
  [{ t: '// подарок, который двигает карьеру', c: 'cmt' }],
  [
    { t: 'const', c: 'kw' },
    { t: ' gift ', c: 'plain' },
    { t: '=', c: 'punc' },
    { t: ' {', c: 'plain' },
  ],
  [
    { t: '  stack', c: 'plain' },
    { t: ':', c: 'punc' },
    { t: " 'React + TS'", c: 'str' },
    { t: ',', c: 'punc' },
  ],
  [
    { t: '  level', c: 'plain' },
    { t: ':', c: 'punc' },
    { t: " 'senior'", c: 'str' },
    { t: ',', c: 'punc' },
  ],
  [
    { t: '  price', c: 'plain' },
    { t: ':', c: 'punc' },
    { t: ' 0', c: 'num' },
    { t: ',', c: 'punc' },
    { t: ' // старт бесплатно', c: 'cmt' },
  ],
  [{ t: '}', c: 'plain' }],
]

export default function Page() {
  return (
    <ArticleShell
      guide={guide}
      hero={
        <CodeEditorHero
          guide={guide}
          heading="Что подарить фронтенд-разработчику"
          accent="фронтенд-разработчику"
          filename="App.tsx"
          lines={code}
        />
      }
    />
  )
}
