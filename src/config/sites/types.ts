import { z } from 'zod'

export const SiteConfigSchema = z.object({
  id: z.string().min(1),
  brand: z.object({
    name: z.string(),
    description: z.string(),
    logoUrl: z.string(),
    faviconUrl: z.string(),
  }),
  seo: z.object({
    titleTemplate: z.string(),
    defaultDescription: z.string(),
    canonicalUrl: z.string().url(),
  }),
  locale: z.string().default('en'),
  // Optional CMS binding. Sites that render pages from the CMS must set storeId.
  // `productType` is the default type filter (e.g. 'landing', 'article').
  cms: z
    .object({
      storeId: z.string().min(1),
      productType: z.string().default('landing'),
      defaultTTL: z.number().int().positive().default(3600),
    })
    .optional(),
})

export type SiteConfig = z.infer<typeof SiteConfigSchema>
