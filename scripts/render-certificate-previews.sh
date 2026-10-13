#!/usr/bin/env bash
set -euo pipefail

# Requires Poppler (pdftoppm). Run again whenever a certificate PDF changes.
cd "$(dirname "$0")/.."
for pdf in public/certificates/storm-cost/*.pdf; do
  pdftoppm -f 1 -singlefile -scale-to 2000 -jpeg -jpegopt quality=90 \
    "$pdf" "${pdf%.pdf}"
done
