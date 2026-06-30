# ApplicantOS Architecture

ApplicantOS is structured as a monorepo with independently deployable frontend and backend applications plus shared packages.

## Applications

- `apps/web`: Next.js 15, React 19, TypeScript, Tailwind CSS, and shadcn/ui-compatible components.
- `apps/api`: FastAPI service targeting Python 3.12 with SQLAlchemy, PostgreSQL, and Redis dependencies.

## Packages

- `packages/ui`: Shared React UI primitives.
- `packages/shared`: Shared constants and platform utilities.
- `packages/types`: Shared TypeScript contracts.
- `packages/prompts`: Prompt assets and prompt package exports.
