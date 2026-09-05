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
  /**
   * Hosts the /click affiliate redirect is allowed to forward visitors to.
   *
   * The redirect takes its destination from the URL path, so without an
   * allowlist `/click/<anything>.com` is an open redirect on your own domain —
   * which is both a phishing vector and a suspension-grade destination-URL
   * mismatch on the ad platforms. Sites that set this get exact-or-subdomain
   * enforcement; sites that omit it keep the old permissive behaviour (still
   * hostname-validated) so existing sites are not broken by this field landing.
   */
  offerHosts: z.array(z.string().min(1)).optional(),
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
