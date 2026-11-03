#!/usr/bin/env bash
# Publish lexicom-site → lexicom/ for GitHub Pages (radius-company1/radius).
# Static route HTML is produced by the prerender build — do not hand-edit it.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/lexicom-site"
PAGES="$ROOT/lexicom"

cd "$SITE"
npm run build

# Full replace of Pages tree from dist (HTML + assets stay in sync)
rsync -a --delete \
  --filter='P .gitkeep' \
  "$SITE/dist/" "$PAGES/"

# Sanity: nested route HTML must reference the same hashed bundles as root
root_js="$(grep -oE 'assets/index-[^"]+\.js' "$PAGES/index.html" | head -1)"
for route in company mfc 122 edds social utilities business education products/contact-center products/neurobot products/speech-analytics products/protocol products/ekc-110 design-preview; do
  stub="$PAGES/$route/index.html"
  if [[ ! -f "$stub" ]]; then
    echo "ERROR: missing static route $stub" >&2
    exit 1
  fi
  stub_js="$(grep -oE 'assets/index-[^"]+\.js' "$stub" | head -1)"
  if [[ "$stub_js" != "$root_js" ]]; then
    echo "ERROR: $route/index.html has $stub_js, root has $root_js" >&2
    exit 1
  fi
done

echo "Deploy tree ready: $PAGES (bundle $root_js)"
