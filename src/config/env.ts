import { z } from 'zod'

// Single source of truth for server-side environment variables.
// Import `env` from here instead of reading process.env directly.
const envSchema = z.object({
  // API / tracker backend. Defaults to the shared backend so purely-static sites
  // and the /click affiliate redirect work without per-site configuration.
  API_BASE_URL: z.string().url().default('https://relearnme.com/api'),
  API_MEDIA_URL: z.string().url().default('https://relearnme.com/api'),

  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  SITE_CONFIG: z.string().min(1),
  LOG_LEVEL: z.enum(['trace', 'debug', 'info', 'warn', 'error', 'fatal']).default('info'),
})

function validateEnv() {
  const parsed = envSchema.safeParse({
    // Treat empty strings ("API_BASE_URL=") as unset so the defaults apply.
    API_BASE_URL: process.env.API_BASE_URL || undefined,
    API_MEDIA_URL: process.env.API_MEDIA_URL || process.env.API_BASE_URL || undefined,
    NODE_ENV: process.env.NODE_ENV,
    SITE_CONFIG: process.env.SITE_CONFIG,
    LOG_LEVEL: process.env.LOG_LEVEL,
  })

  if (!parsed.success) {
    console.error('✗ Invalid environment variables:', parsed.error.flatten().fieldErrors)
    throw new Error('Invalid environment variables')
  }

  return parsed.data
}

export type Env = z.infer<typeof envSchema>

export const env: Env = validateEnv()
