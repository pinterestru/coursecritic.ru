# syntax=docker/dockerfile:1.7

# ---------- Base ----------
FROM node:22-alpine AS base
RUN corepack enable && corepack prepare pnpm@9.15.0 --activate

# Build-time arguments
ARG NODE_ENV=production
ARG SITE_CONFIG
ARG LOG_LEVEL=info
ARG PORT=3000
ARG API_BASE_URL
ARG API_MEDIA_URL

# NODE_ENV intentionally NOT set here — pnpm fetch/install skip devDependencies
# when NODE_ENV=production, and Next.js needs them at build time. NODE_ENV is
# pinned to production in the builder (right before `next build`) and runner.
ENV SITE_CONFIG=$SITE_CONFIG \
    LOG_LEVEL=$LOG_LEVEL \
    PORT=$PORT \
    API_BASE_URL=$API_BASE_URL \
    API_MEDIA_URL=$API_MEDIA_URL

# ---------- Dependencies ----------
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Force-override NODE_ENV for the install stage. pnpm's `production` flag is
# triggered by NODE_ENV=production, which makes it skip devDependencies. The
# build stage needs them (e.g. @tailwindcss/postcss), so we install everything
# here; runtime stays production via the runner stage's ENV.
ENV NODE_ENV=development

# Only package manifests for optimal layer cache
COPY package.json pnpm-lock.yaml ./

RUN --mount=type=cache,target=/root/.pnpm-store,sharing=locked \
    pnpm config set store-dir /root/.pnpm-store && \
    pnpm fetch && pnpm install --frozen-lockfile --offline

# ---------- Builder ----------
FROM base AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Pin production for the build itself — Next.js minifies, removes dev warnings, etc.
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1

# SITE_CONFIG is required at build — prepare-site fails otherwise.
RUN --mount=type=cache,target=/app/.next/cache,sharing=locked \
    test -n "$SITE_CONFIG" || (echo "✗ SITE_CONFIG build-arg is required" && exit 1) && \
    pnpm run build

# ---------- Runner ----------
FROM node:22-alpine AS runner
WORKDIR /app

# Re-declare build args so they can be baked into the runtime image.
# (FROM node:... starts a fresh stage; args from earlier stages are not inherited.)
ARG SITE_CONFIG
ARG LOG_LEVEL=info
ARG PORT=3000
ARG API_BASE_URL
ARG API_MEDIA_URL

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    HOSTNAME=0.0.0.0 \
    SITE_CONFIG=$SITE_CONFIG \
    LOG_LEVEL=$LOG_LEVEL \
    PORT=$PORT \
    API_BASE_URL=$API_BASE_URL \
    API_MEDIA_URL=$API_MEDIA_URL

RUN apk add --no-cache dumb-init

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN mkdir -p .next/cache && \
    chown -R nextjs:nodejs .next && \
    chmod -R 755 .next/cache

LABEL org.opencontainers.image.title="site-ui" \
      org.opencontainers.image.description="Multi-site Next.js 16 host — one build per site via SITE_CONFIG." \
      org.opencontainers.image.source="https://github.com/wescaleweb/site-ui"

USER nextjs

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
    CMD node -e "const http=require('http');const p=process.env.PORT||3000;http.get(\`http://127.0.0.1:\${p}/api/health\`,r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

ENTRYPOINT ["dumb-init", "--"]

CMD ["node", "server.js"]
