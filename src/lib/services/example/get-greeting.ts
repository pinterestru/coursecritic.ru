import 'server-only'
import { cache } from 'react'

import { activeSiteConfig } from '@/config/sites/active.generated'

export const getGreeting = cache(async (): Promise<string> => {
  return `Hello from the shared service, ${activeSiteConfig.brand.name}!`
})
