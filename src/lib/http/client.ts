import 'server-only'
import { logger } from '@/lib/logging/logger'
import { APIError } from './client-utils'

// Re-export client-safe utilities
export { APIError, isAPIError } from './client-utils'

/**
 * Extract endpoint path and base URL from URL for logging purposes
 * Removes query parameters from path
 */
function extractEndpoint(url: string): { baseUrl: string; endpoint: string } {
  try {
    const urlObj = new URL(url)
    return {
      baseUrl: urlObj.origin,
      endpoint: urlObj.pathname,
    }
  } catch {
    // If URL parsing fails, try to extract path after domain
    const pathMatch = url.match(/^(https?:\/\/[^/]+)(\/[^?]*)/)
    if (pathMatch) {
      return {
        baseUrl: pathMatch[1],
        endpoint: pathMatch[2],
      }
    }
    // Fallback: assume it's already a relative path
    return {
      baseUrl: 'unknown',
      endpoint: url.split('?')[0],
    }
  }
}

export interface RequestOptions extends RequestInit {
  timeout?: number
  retry?: {
    retries?: number
    factor?: number
    minTimeout?: number
    maxTimeout?: number

    shouldRetry?: (error: unknown, attempt: number) => boolean
  }
  next?: {
    revalidate?: number | false
    tags?: string[]
  }
}

const DEFAULT_TIMEOUT = 20000 // 10 seconds
const DEFAULT_RETRY_CONFIG = {
  retries: 3,
  factor: 2,
  minTimeout: 1000,
  maxTimeout: 20000,
}

function wait(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function calculateBackoff(
  attempt: number,
  factor: number,
  minTimeout: number,
  maxTimeout: number
): number {
  // Exponential backoff with jitter
  const exponentialDelay = minTimeout * Math.pow(factor, attempt - 1)
  const jitter = Math.random() * 0.1 * exponentialDelay // 10% jitter
  const delay = Math.min(exponentialDelay + jitter, maxTimeout)
  return Math.round(delay)
}

function defaultShouldRetry(error: unknown, attempt: number): boolean {
  // Don't retry if we've exhausted attempts
  if (attempt <= 0) return false

  // Retry on network errors
  if (error instanceof Error && error.name === 'AbortError') return false // Don't retry timeouts
  if (error instanceof TypeError && error.message.includes('fetch')) return true

  // Retry on 5xx errors
  if (error instanceof APIError) {
    return error.status >= 500 && error.status < 600
  }

  return false
}

export async function httpClient<T>(url: string, options: RequestOptions = {}): Promise<T> {
  const { timeout = DEFAULT_TIMEOUT, retry: retryConfig = {}, next, ...fetchOptions } = options

  const retry = {
    ...DEFAULT_RETRY_CONFIG,
    ...retryConfig,
    shouldRetry: retryConfig.shouldRetry || defaultShouldRetry,
  }

  let lastError: unknown
  const startTime = Date.now()

  for (let attempt = 0; attempt <= retry.retries; attempt++) {
    try {
      // Create new abort controller for each attempt
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      try {
        // Start timing the fetch operation
        const fetchStartTime = Date.now()

        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
          headers: {
            'Content-Type': 'application/json',
            ...fetchOptions.headers,
          },
          next,
        })

        const fetchDuration = Date.now() - fetchStartTime
        clearTimeout(timeoutId)

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new APIError(
            response.status,
            errorData.code || 'UNKNOWN_ERROR',
            errorData.message || `HTTP ${response.status}: ${response.statusText}`,
            errorData.details
          )
        }

        const data = await response.json()

        // Log all successful requests
        const { baseUrl, endpoint } = extractEndpoint(url)
        const method = fetchOptions.method || 'GET'
        const contentLength = response.headers.get('content-length')
        const cacheStatus =
          response.headers.get('x-cache') || response.headers.get('cf-cache-status') || 'UNKNOWN'

        logger.info(
          {
            type: 'api_request',
            method,
            api_base_url: baseUrl,
            endpoint,
            status: response.status,
            duration_ms: fetchDuration,
            total_duration_ms: Date.now() - startTime,
            response_size_bytes: contentLength ? parseInt(contentLength, 10) : undefined,
            attempt: attempt + 1,
            cache_status: cacheStatus,
            retry: attempt > 0,
          },
          `API request completed: ${method} ${endpoint}`
        )

        return data as T
      } catch (error) {
        clearTimeout(timeoutId)

        if (error instanceof APIError) {
          throw error
        }

        if (error instanceof Error && error.name === 'AbortError') {
          throw new APIError(408, 'REQUEST_TIMEOUT', `Request timed out after ${timeout}ms`)
        }

        throw new APIError(
          500,
          'NETWORK_ERROR',
          error instanceof Error ? error.message : 'Unknown error occurred',
          error
        )
      }
    } catch (error) {
      lastError = error

      // Check if we should retry
      const remainingAttempts = retry.retries - attempt
      if (remainingAttempts > 0 && retry.shouldRetry(error, remainingAttempts)) {
        const delay = calculateBackoff(
          attempt + 1,
          retry.factor,
          retry.minTimeout,
          retry.maxTimeout
        )

        const { baseUrl, endpoint } = extractEndpoint(url)
        logger.warn(
          {
            type: 'api_retry',
            method: fetchOptions.method || 'GET',
            api_base_url: baseUrl,
            endpoint,
            url,
            attempt: attempt + 1,
            max_attempts: retry.retries + 1,
            next_retry_ms: delay,
            elapsed_ms: Date.now() - startTime,
            error_type: error instanceof Error ? error.name : 'Unknown',
            error_message: error instanceof Error ? error.message : 'Unknown error',
            error_status: error instanceof APIError ? error.status : undefined,
          },
          `Retrying failed request: ${fetchOptions.method || 'GET'} ${endpoint}`
        )

        await wait(delay)
        continue
      }

      // No more retries, log final failure and throw the error
      const { baseUrl, endpoint } = extractEndpoint(url)
      logger.error(
        {
          type: 'api_request_failed',
          method: fetchOptions.method || 'GET',
          api_base_url: baseUrl,
          endpoint,
          url,
          attempts: attempt + 1,
          total_duration_ms: Date.now() - startTime,
          error_type: error instanceof Error ? error.name : 'Unknown',
          error_message: error instanceof Error ? error.message : 'Unknown error',
          error_status: error instanceof APIError ? error.status : undefined,
          error_code: error instanceof APIError ? error.code : undefined,
        },
        `Request failed after all retries: ${fetchOptions.method || 'GET'} ${endpoint}`
      )
      throw error
    }
  }

  // This should never be reached, but TypeScript needs it
  throw lastError
}
