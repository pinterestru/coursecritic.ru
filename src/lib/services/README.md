# Server API services

Every file in this directory must start with:

```ts
import 'server-only'
```

Services are shared across all sites. They must not import from `src/sites/**`. Use `@/lib/http/fetcher` for outbound calls and `@/lib/logging/logger` for logging. Wrap per-request reads in React `cache()` for deduplication, and validate external responses with Zod.
