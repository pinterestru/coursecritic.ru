import type { Metadata } from 'next'

import Breadcrumbs from '../../components/Breadcrumbs'
import CategoryCard from '../../components/CategoryCard'
import { categories } from '../../data/categories'
import { SITE } from '../../data/site'
import { storesByCategory } from '../../data/stores'

const TITLE = 'Categories'
const DESCRIPTION =
  'Twelve markets, twelve different ways a discount actually happens — from the coupon economies where codes are the mechanic to the categories where they are decoration.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/categories' },
  openGraph: {
    type: 'website',
    title: TITLE,
    description: DESCRIPTION,
    url: '/categories',
    siteName: SITE.name,
    locale: 'en_US',
  },
  twitter: { card: 'summary', title: TITLE, description: DESCRIPTION },
}

export default function CategoriesIndexPage() {
  return (
    <main>
      <section
        className="border-b"
        style={{
          borderColor: 'rgb(var(--color-rule))',
          background: 'rgb(var(--color-surface))',
        }}
      >
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <Breadcrumbs trail={[{ label: 'Home', href: '/' }, { label: 'Categories' }]} />
          <h1
            className="font-display mt-6 max-w-3xl text-[38px] leading-[1.06] font-extrabold tracking-tight sm:text-[52px]"
            style={{ color: 'rgb(var(--color-fg))' }}
          >
            Where the discount actually is
          </h1>
          <p
            className="mt-5 max-w-2xl text-lg leading-relaxed"
            style={{ color: 'rgb(var(--color-muted))' }}
          >
            {DESCRIPTION}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              count={storesByCategory(category.id).length}
            />
          ))}
        </div>
      </div>
    </main>
  )
}
