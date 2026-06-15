/**
 * Client-safe utilities for HTTP error handling
 * This file contains only the error types without any server-side dependencies
 */

export class APIError extends Error {
  public status: number
  public code: string
  public details?: unknown

  constructor(status: number, code: string, message: string, details?: unknown) {
    super(message)
    this.name = 'APIError'
    this.status = status
    this.code = code
    this.details = details
  }
}

export function isAPIError(error: unknown): error is APIError {
  return error instanceof APIError
}
