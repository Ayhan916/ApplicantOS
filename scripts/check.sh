#!/usr/bin/env bash
set -euo pipefail

npm ci
npm run typecheck
npm run build

python -m pip install --upgrade pip
python -m pip install -e "apps/api[dev]"
(
  cd apps/api
  ruff check .
  mypy app
  pytest
)
