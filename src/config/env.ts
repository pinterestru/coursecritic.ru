import { z } from 'zod'

const EnvSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  SITE_CONFIG: z.string().min(1),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']).default('info'),
  // CMS — required only for sites that actually call the CMS. Left optional so
  // purely-static sites don't need it set.
  API_BASE_URL: z.string().url().optional(),
  API_MEDIA_URL: z.string().url().optional(),
})

export type Env = z.infer<typeof EnvSchema>

const parsed = EnvSchema.safeParse(process.env)

if (!parsed.success) {
  console.error('✗ Invalid environment variables:', parsed.error.flatten().fieldErrors)
  throw new Error('Invalid environment variables')
}

export const env: Env = parsed.data
