import 'server-only'
import { logger } from '@/lib/logging/logger'

export class HttpError extends Error {
  constructor(
    message: string,
    public readonly status: number,
    public readonly url: string
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

export interface FetchOptions extends RequestInit {
  timeoutMs?: number
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
}

export async function fetcher<T>(url: string, options: FetchOptions = {}): Promise<T> {
  const { timeoutMs = 10_000, ...init } = options
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), timeoutMs)

  try {
    const response = await fetch(url, {
      ...init,
      signal: controller.signal,
      headers: { accept: 'application/json', ...init.headers },
    })

    if (!response.ok) {
      throw new HttpError(`HTTP ${response.status} for ${url}`, response.status, url)
    }

    return (await response.json()) as T
  } catch (error) {
    logger.error({ err: error, url }, 'fetch failed')
    throw error
  } finally {
    clearTimeout(timer)
  }
}
