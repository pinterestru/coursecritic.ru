#!/usr/bin/env node
/**
 * Activates a single site in this multi-site repo:
 *   - copies    src/sites/(<SITE_CONFIG>)/app         → src/app
 *   - copies    src/sites/(<SITE_CONFIG>)/components  → src/components
 *   - copies    src/sites/(<SITE_CONFIG>)/public      → public
 *   - copies    theme.css                             → src/styles/active-theme.css
 *   - writes    src/config/sites/active.generated.ts
 *
 * Required env: SITE_CONFIG. Must match a folder (<name>) under src/sites/.
 * Optional flag: --watch — keeps running and re-syncs on source changes (dev ergonomics).
 */
import {
  readFileSync,
  writeFileSync,
  existsSync,
  rmSync,
  cpSync,
  lstatSync,
  readdirSync,
  watch,
} from 'node:fs'
import { resolve, dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

// Top-level folders inside a site that are NOT copied to src/<name>.
//  - 'public' is copied to <root>/public separately.
//  - The rest are reserved / handled elsewhere.
const DIRS_NOT_COPIED_TO_SRC = new Set([
  'public',
  'app', // handled explicitly (destination is src/app)
  'components', // handled explicitly (destination is src/components)
])

// Shared src folders we must never overwrite — a site folder using any of
// these names would clobber shared code. Fail fast if detected.
const SRC_RESERVED = new Set(['lib', 'config', 'styles', 'sites'])

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function loadEnvFile(path) {
  if (!existsSync(path)) return false
  for (const raw of readFileSync(path, 'utf8').split('\n')) {
    const line = raw.trim()
    if (!line || line.startsWith('#')) continue
    const eq = line.indexOf('=')
    if (eq < 0) continue
    const key = line.slice(0, eq).trim()
    const value = line.slice(eq + 1).trim()
    if (key && process.env[key] === undefined) process.env[key] = value
  }
  return true
}

/**
 * Load .env.local so SITE_CONFIG can be read from it if not already in the env.
 * We need SITE_CONFIG first to know which per-site file to prefer.
 */
function loadDotEnvLocal() {
  loadEnvFile(resolve(ROOT, '.env.local'))
}

/**
 * Per-site env: if `.env.local.<siteId>` exists, copy it over `.env.local`
 * and load it into process.env. `.env.local` is thus treated as a
 * generated file owned by prepare-site, driven by `.env.local.<siteId>`.
 * If no per-site file exists, `.env.local` (if any) is left alone.
 */
function activatePerSiteEnv(siteId) {
  const perSitePath = resolve(ROOT, `.env.local.${siteId}`)
  const dotEnvLocal = resolve(ROOT, '.env.local')

  if (!existsSync(perSitePath)) {
    return { activated: false, path: perSitePath }
  }

  cpSync(perSitePath, dotEnvLocal, { force: true })
  loadEnvFile(dotEnvLocal)
  return { activated: true, path: perSitePath }
}

function removeIfExists(path) {
  try {
    lstatSync(path)
  } catch {
    return
  }
  rmSync(path, { recursive: true, force: true })
}

function activate(siteId, { incremental = false } = {}) {
  const siteDir = resolve(ROOT, `src/sites/(${siteId})`)
  if (!existsSync(siteDir)) {
    console.error(`✗ Site folder not found: src/sites/(${siteId})`)
    process.exit(1)
  }

  const required = ['app', 'config.ts', 'theme.css', 'public']
  const missing = required.filter((f) => !existsSync(resolve(siteDir, f)))
  if (missing.length) {
    console.error(`✗ Site "(${siteId})" is missing required entries: ${missing.join(', ')}`)
    process.exit(1)
  }

  // Enumerate site's top-level directories for dynamic copy, enforcing that
  // no site folder collides with a shared src/ folder name.
  const siteEntries = readdirSync(siteDir, { withFileTypes: true })
  const siteDirs = siteEntries.filter((e) => e.isDirectory()).map((e) => e.name)

  const collisions = siteDirs.filter((name) => SRC_RESERVED.has(name))
  if (collisions.length) {
    console.error(
      `✗ Site "(${siteId})" folder(s) collide with shared src/ names: ${collisions.join(', ')}`
    )
    process.exit(1)
  }

  const activeThemeFile = resolve(ROOT, 'src/styles/active-theme.css')
  const generatedConfigFile = resolve(ROOT, 'src/config/sites/active.generated.ts')
  const manifestFile = resolve(ROOT, 'src/config/sites/active.manifest.json')

  // On a full (non-incremental) run, purge paths from the prior activation so
  // stale files/dirs from a previously-active site don't linger. On incremental
  // (watch-triggered) runs, we just overwrite in place so HMR sees file updates
  // rather than delete+recreate — otherwise Next.js flashes errors mid-sync.
  if (!incremental && existsSync(manifestFile)) {
    try {
      const prior = JSON.parse(readFileSync(manifestFile, 'utf8'))
      for (const p of prior.generatedPaths ?? []) {
        removeIfExists(resolve(ROOT, p))
      }
    } catch {
      // Ignore malformed manifest — we'll rewrite it below.
    }
  }

  const generatedPaths = []
  const copyOpts = { recursive: true, force: true }

  // Copy each site subfolder to src/<name>, except special ones.
  for (const name of siteDirs) {
    if (DIRS_NOT_COPIED_TO_SRC.has(name)) continue
    const dest = resolve(ROOT, 'src', name)
    if (!incremental) removeIfExists(dest)
    cpSync(resolve(siteDir, name), dest, copyOpts)
    generatedPaths.push(`src/${name}`)
  }

  // app/ and components/ — always copied to their fixed destinations.
  const appDest = resolve(ROOT, 'src/app')
  if (!incremental) removeIfExists(appDest)
  cpSync(resolve(siteDir, 'app'), appDest, copyOpts)
  generatedPaths.push('src/app')

  if (siteDirs.includes('components')) {
    const componentsDest = resolve(ROOT, 'src/components')
    if (!incremental) removeIfExists(componentsDest)
    cpSync(resolve(siteDir, 'components'), componentsDest, copyOpts)
    generatedPaths.push('src/components')
  }

  // public/ — at the project root.
  const publicDest = resolve(ROOT, 'public')
  if (!incremental) removeIfExists(publicDest)
  cpSync(resolve(siteDir, 'public'), publicDest, copyOpts)
  generatedPaths.push('public')

  // Shared cross-site overlay (src/sites/_shared) — routes/components/public
  // that every site gets (e.g. the /click affiliate redirect). Copied AFTER the
  // active site with force:false, so a site's own files win on any path
  // collision and shared-only files are added on top.
  const sharedDir = resolve(ROOT, 'src/sites/_shared')
  const overlayShared = (sub, dest, pathLabel) => {
    const from = resolve(sharedDir, sub)
    if (!existsSync(from)) return
    cpSync(from, dest, { recursive: true, force: false, errorOnExist: false })
    if (!generatedPaths.includes(pathLabel)) generatedPaths.push(pathLabel)
  }
  overlayShared('app', appDest, 'src/app')
  overlayShared('components', resolve(ROOT, 'src/components'), 'src/components')
  overlayShared('public', publicDest, 'public')

  // theme + generated config (single files — overwrite is always safe)
  cpSync(resolve(siteDir, 'theme.css'), activeThemeFile, { force: true })
  generatedPaths.push('src/styles/active-theme.css')

  const generated = `// AUTO-GENERATED by scripts/prepare-site.mjs — DO NOT EDIT.
// Regenerate with \`pnpm prepare-site\` (honors SITE_CONFIG env var).
import { SiteConfigSchema } from './types'
import { siteConfig as raw } from '../../sites/(${siteId})/config'

export const activeSiteId = '${siteId}' as const
export const activeSiteConfig = SiteConfigSchema.parse(raw)
`
  writeFileSync(generatedConfigFile, generated, 'utf8')
  generatedPaths.push('src/config/sites/active.generated.ts')

  writeFileSync(manifestFile, JSON.stringify({ siteId, generatedPaths }, null, 2), 'utf8')
}

function main() {
  loadDotEnvLocal()

  const siteId = process.env.SITE_CONFIG
  if (!siteId) {
    console.error('✗ SITE_CONFIG env var is required (e.g. SITE_CONFIG=coursecritic)')
    process.exit(1)
  }

  const perSite = activatePerSiteEnv(siteId)

  activate(siteId)
  console.log(`✓ Site activated: ${siteId}`)
  if (perSite.activated) {
    console.log(`  env        ← .env.local.${siteId} → .env.local`)
  }

  if (process.argv.includes('--watch')) {
    const siteDir = resolve(ROOT, `src/sites/(${siteId})`)
    console.log(`  watching src/sites/(${siteId}) for changes…`)

    let syncTimer
    const scheduleSync = () => {
      clearTimeout(syncTimer)
      syncTimer = setTimeout(() => {
        try {
          activate(siteId, { incremental: true })
          console.log(`  ↻ re-synced @ ${new Date().toLocaleTimeString()}`)
        } catch (err) {
          console.error('✗ sync failed:', err.message)
        }
      }, 80)
    }

    const sharedDir = resolve(ROOT, 'src/sites/_shared')
    for (const subdir of ['app', 'components', 'public']) {
      const target = join(siteDir, subdir)
      if (existsSync(target)) {
        watch(target, { recursive: true }, scheduleSync)
      }
      const sharedTarget = join(sharedDir, subdir)
      if (existsSync(sharedTarget)) {
        watch(sharedTarget, { recursive: true }, scheduleSync)
      }
    }
    watch(join(siteDir, 'theme.css'), scheduleSync)
    watch(join(siteDir, 'config.ts'), scheduleSync)
  }
}

main()
