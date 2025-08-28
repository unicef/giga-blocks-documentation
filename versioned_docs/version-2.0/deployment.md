---
id: deployment
---

# Deployment

We use **GitHub Actions** (configurable to GitLab CI/CD, Jenkins, etc.) for automated testing, building, and deployment of all Giga Blocks services.


## Deployment Environments

- **Development**
  - **Trigger:** Push or merge into the `dev` branch
  - **Action:** Auto-deployed to the **Dev Server**
  - **Purpose:** Internal testing and QA validation

- **Staging**
  - **Trigger:** Push or merge into the `stage` branch
  - **Action:** Auto-deployed to the **Staging Server**
  - **Purpose:** Client/UAT (User Acceptance Testing)

- **Production**
  - **Trigger:** Merge into the `main` branch
  - **Action:** Deployment can be **manual approval** or automated pipeline execution
  - **Purpose:** Live production environment


## Build Commands

We use **Nx** for monorepo builds. Each application has its own build target:

```bash
# Build API (NestJS backend)
nx build api

# Build Giga (Public frontend)
nx build giga

# Build Admin (Admin dashboard)
nx build admin

# Build Webhook Service
nx build webhook
```

- Build artifacts are stored in `dist/apps/[project-name]`.
- Nx caches each build to optimize incremental builds.


## Test Automation

Before each deployment pipeline, automated tests are executed:

```bash
# Run all tests
nx run-many --target=test --all

# Run tests for a specific project
nx test [project-name]

# Run end-to-end tests
nx e2e [project-name]
```

- **Unit Tests:** Validate business logic in services and utilities.
- **Integration Tests:** Validate APIs, DB, and blockchain interactions.
- **E2E Tests:** Validate frontend + backend workflows.
- **Deployment is blocked if tests fail.**


## Linting & Code Quality Checks

Linting and formatting checks run in all pipelines:

```bash
nx run-many --target=lint --all
nx lint [project-name] --fix
```

- Enforced via Husky pre-commit hooks.
- PRs cannot be merged if linting fails.

## Secrets & Environment Variables

- Secrets (API keys, RPC URLs, private keys) are stored in GitHub Actions Encrypted Secrets.
- Each environment (Dev, Staging, Prod) has its own `.env` configuration.
- Sensitive values are **never** committed to Git.


## Deployment Workflow

1. **Push to Branch**
   - `dev` → Deploy to Dev server
   - `stage` → Deploy to Staging server
   - `main` → Deploy to Production

2. **Pipeline Steps**
   - Install dependencies: `pnpm install`
   - Run lint & tests (block on failure)
   - Build apps (`api`, `giga`, `admin`, `webhook`)
   - Package & deploy to target server (via Docker or PM2)

3. **Verification**
   - Post-deployment smoke tests run automatically
   - Deployment marked successful only after verification passes

With this CI/CD setup:
- Developers get fast feedback via automated testing.
- Clients test features safely in staging.
- Production remains stable and gated by approvals.
