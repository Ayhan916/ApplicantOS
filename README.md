# ApplicantOS

ApplicantOS is an enterprise AI-powered Career Operating System.

This repository is initialized as a development-ready monorepo with a Next.js frontend, FastAPI backend, shared TypeScript packages, Docker support, and GitHub Actions CI.

## Repository Structure

```text
apps/
  web/        Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui
  api/        FastAPI, Python 3.12, SQLAlchemy
packages/
  ui/         Shared UI primitives
  shared/     Shared platform constants and utilities
  types/      Shared TypeScript contracts
  prompts/    Prompt package exports
agents/       Agent specifications and evaluation assets
infrastructure/
docs/
scripts/
tests/
```

## Prerequisites

- Node.js 22+
- npm 10+
- Python 3.12+
- Docker and Docker Compose

## Install

```bash
npm ci
python -m venv apps/api/.venv
source apps/api/.venv/bin/activate
pip install -e "apps/api[dev]"
```

## Development

Run the web app:

```bash
npm run dev
```

Run the API:

```bash
cd apps/api
uvicorn app.main:app --reload
```

Run the full local stack:

```bash
cp .env.example .env
docker compose up --build
```

Services:

- Web: http://localhost:3000
- API: http://localhost:8000
- API docs: http://localhost:8000/docs

## Verification

```bash
npm run typecheck
npm run build
cd apps/api
ruff check .
mypy app
pytest
```

Or run:

```bash
./scripts/check.sh
```

## License

MIT
