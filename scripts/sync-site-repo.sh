#!/usr/bin/env bash
#
# Publish one site from this multi-site repo into its own per-domain repo.
#
#   ./scripts/sync-site-repo.sh <site-id> [domain]
#   ./scripts/sync-site-repo.sh brandcritic --push
#
# What it does:
#   1. Resolves <site-id> (a folder under src/sites/(<id>)) to its domain.
#   2. Mirrors this working tree into /Users/wescale/projects/pinterestru/<domain>,
#      excluding .git, build output and local env files.
#   3. Commits the result in that repo.
#   4. Prints the GitHub secrets/variables the repo needs, then STOPS.
#
# Pushing is opt-in: pass --push. Without it the script stops after the commit
# and prints the exact command to run, so nothing leaves the machine until you
# have set the repo's secrets and variables.
#
# The target repo's own .git is never touched — its `origin` is already
# configured, and copying this repo's .git would also copy a credential.

set -euo pipefail

readonly SOURCE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
readonly TARGET_ROOT="/Users/wescale/projects/pinterestru"

die() { printf '\033[31m✗ %s\033[0m\n' "$*" >&2; exit 1; }
info() { printf '  %s\n' "$*"; }
head1() { printf '\n\033[1m%s\033[0m\n' "$*"; }

# ---------------------------------------------------------------- arguments
PUSH=false
SITE=""
DOMAIN=""

for arg in "$@"; do
  case "$arg" in
    --push) PUSH=true ;;
    -h|--help) sed -n '2,20p' "${BASH_SOURCE[0]}" | sed 's/^# \{0,1\}//'; exit 0 ;;
    -*) die "Unknown flag: $arg" ;;
    *) if [[ -z "$SITE" ]]; then SITE="$arg"; else DOMAIN="$arg"; fi ;;
  esac
done

[[ -n "$SITE" ]] || die "Usage: $(basename "$0") <site-id> [domain] [--push]"

# Accept "(brandcritic)" or "brandcritic".
SITE="${SITE#(}"; SITE="${SITE%)}"

readonly SITE_DIR="${SOURCE_DIR}/src/sites/(${SITE})"
[[ -d "$SITE_DIR" ]] || {
  echo "Available sites:" >&2
  find "${SOURCE_DIR}/src/sites" -maxdepth 1 -name '(*)' -exec basename {} \; \
    | tr -d '()' | sort | sed 's/^/  /' >&2
  die "No such site: src/sites/(${SITE})"
}

# ------------------------------------------------------------------ domain
# Prefer data/site.ts (the site's declared source of truth); fall back to a
# literal canonicalUrl in config.ts for sites that have no data/ folder.
#
# `https*://` and not `https\?://`: `\?` is a GNU sed extension. BSD sed (macOS)
# has no optional-match operator in BRE and reads `\?` as a literal `?`, so the
# substitution silently matches nothing — and the two that follow still run,
# leaving DOMAIN as the garbage string "canonicalUrl: https:". `s*` is plain
# POSIX and behaves identically on both.
if [[ -z "$DOMAIN" && -f "${SITE_DIR}/data/site.ts" ]]; then
  DOMAIN="$(grep -oE "domain: *'[^']+'" "${SITE_DIR}/data/site.ts" | head -1 | sed "s/.*'\(.*\)'/\1/")"
fi
if [[ -z "$DOMAIN" ]]; then
  DOMAIN="$(grep -oE "canonicalUrl: *'https?://[^']+'" "${SITE_DIR}/config.ts" \
    | head -1 | sed "s|.*https*://||; s|'||g; s|/.*||")"
fi
[[ -n "$DOMAIN" ]] || die "Could not determine the domain for '${SITE}'. Pass it explicitly: $(basename "$0") ${SITE} example.ru"

readonly TARGET_DIR="${TARGET_ROOT}/${DOMAIN}"

head1 "Publishing '${SITE}' → ${DOMAIN}"
info "source: ${SOURCE_DIR}"
info "target: ${TARGET_DIR}"

# ------------------------------------------------------------ target checks
[[ -d "$TARGET_DIR" ]] || die "Target does not exist: ${TARGET_DIR}
Create the repo folder and set its origin remote first, then re-run."
[[ -d "${TARGET_DIR}/.git" ]] || die "Target is not a git repo: ${TARGET_DIR}
Refusing to run 'git init' here — the remote (and its credential) must be set up by you."

TARGET_REMOTE="$(git -C "$TARGET_DIR" remote get-url origin 2>/dev/null || true)"
[[ -n "$TARGET_REMOTE" ]] || die "Target repo has no 'origin' remote: ${TARGET_DIR}"
# Never print the credential embedded in the URL.
info "origin: $(printf '%s' "$TARGET_REMOTE" | sed -E 's#//[^@]*@#//***@#')"

# ------------------------------------------------------------------- mirror
# --delete makes the target an exact mirror, so a file removed here is removed
# there too. .git is excluded from BOTH sides of that (protected below).
head1 "Mirroring working tree"
rsync -a --delete \
  --exclude '.git/' \
  --exclude 'node_modules/' \
  --exclude '.next/' \
  --exclude '.DS_Store' \
  --exclude 'tsconfig.tsbuildinfo' \
  --include '.env.local*.example' \
  --exclude '.env.local' \
  --exclude '.env.local.*' \
  "${SOURCE_DIR}/" "${TARGET_DIR}/"
info "done"

# ------------------------------------------------------------------- commit
cd "$TARGET_DIR"
git symbolic-ref HEAD refs/heads/main   # ensure the branch is main, pre- or post-first-commit

# A clean tree is NOT a reason to stop. --push is opt-in, so a previous run may
# have committed without pushing; exiting here would strand that commit unpushed
# forever. Skip only the commit, then carry on to the push step.
if [[ -z "$(git status --porcelain)" ]]; then
  head1 "Nothing new to commit"
  info "${DOMAIN} already matches this working tree."
else
  head1 "Changes"
  git add -A
  git status --short | head -40
  CHANGED=$(git status --porcelain | wc -l | tr -d ' ')
  [[ "$CHANGED" -le 40 ]] || info "… and $((CHANGED - 40)) more"

  git -c user.name="aimipt" -c user.email="wescaleweb@gmail.com" \
    commit -q -m "chore: sync ${SITE} from site-ui

Mirrors the site-ui working tree for ${DOMAIN}.
Activate with SITE_CONFIG=${SITE}.

Co-Authored-By: Claude Opus 5 (1M context) <noreply@anthropic.com>"
  head1 "Committed"
  git log --oneline -1 | sed 's/^/  /'
fi

# ------------------------------------------------- what the repo needs set
PORT="$(grep -oE 'server 127\.0\.0\.1:[0-9]+' "${SOURCE_DIR}/nginx.conf.${SITE}" 2>/dev/null \
  | head -1 | grep -oE '[0-9]+$' || true)"

head1 "Set these on github.com/pinterestru/${DOMAIN} before the deploy runs"
cat <<EOF
  Settings → Secrets and variables → Actions

  Secrets (required — the workflow cannot deploy without all three):
    SSH_KEY        private key for the deploy user on the VPS
    HOST           VPS hostname or IP
    USERNAME       SSH user on the VPS

  Variables (required — the workflow fails fast if either is empty):
    SITE_CONFIG    ${SITE}
    PORT           ${PORT:-<port from nginx.conf.${SITE}>}

  Variables (optional):
    LOG_LEVEL      defaults to 'info'
    API_BASE_URL   leave unset — ${SITE} has no CMS backend
    API_MEDIA_URL  defaults to API_BASE_URL
EOF

if [[ "$PUSH" != true ]]; then
  head1 "Not pushed"
  AHEAD="$(git rev-list --count '@{u}..HEAD' 2>/dev/null || git rev-list --count HEAD)"
  info "${AHEAD} commit(s) waiting locally. Nothing has left this machine."
  info "When the variables above are set:"
  info ""
  info "    git -C ${TARGET_DIR} push -u origin main"
  info ""
  info "or re-run this script with --push"
  exit 0
fi

head1 "Pushing to origin/main"
git push -u origin main
info "pushed — the deploy workflow will now run"
