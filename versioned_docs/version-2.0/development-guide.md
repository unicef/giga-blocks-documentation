---
id: development-guide
---

# Development Practices

## Branching Strategy
We follow a **GitFlow-inspired branching model**:

- **main**: Production-ready code. Only release-approved pull requests are merged here.
- **stage**: Staging-ready code. Used for testnet deployments.
- **dev**: Development branch. Aggregates features that are QA-ready.
- **feature/issueNumber-description**: Feature or bugfix branch tied to a GitHub issue.

**Developer Notes:**
- Always branch off from **dev** unless fixing urgent production bugs.
- Hotfixes can be branched from **main** and merged back into both **main** and **dev**.


## Code Style and Linting
We enforce consistent code formatting across all projects using **ESLint** and **Prettier**.

- **Run linting for a project:**
  ```bash
  nx lint [project-name]
  ```
- **Lint all projects:**
  ```bash
  nx run-many --target=lint --all
  ```
- **Auto-fix issues:**
  ```bash
  nx lint [project-name] --fix
  ```

**Developer Notes:**
- Pre-commit hooks (via Husky) run lint and format automatically.
- Code that fails linting cannot be merged.


## Creating New Projects/Libraries (Nx)
All applications and libraries must be created using the Nx CLI for consistency.

- **Generate a new React application:**
  ```bash
  nx g @nx/react:app my-new-app
  ```
- **Generate a new NestJS application:**
  ```bash
  nx g @nx/nest:app my-new-api
  ```
- **Generate a new Node.js application (e.g., Webhook Service):**
  ```bash
  nx g @nx/node:app my-new-webhook-service
  ```
- **Generate a shared NestJS library (business logic, DTOs, interfaces):**
  ```bash
  nx g @nx/nest:lib shared-api-lib
  ```
- **Generate a shared React library (UI components):**
  ```bash
  nx g @nx/react:lib ui-components
  ```

**Developer Notes:**
- Always check for existing libraries before creating a new one to avoid duplication.
- Shared libraries should follow domain-driven naming (e.g., `school-data-lib`, `auth-lib`).


## Code Review Process
All contributions must go through peer review before merging.

- Open a Pull Request (PR) against the **dev** branch.
- PR description must include:
  - Linked GitHub issue
  - Summary of changes
  - Screenshots (if UI-related)
  - Any migrations or breaking changes
- Request at least 1 reviewer (2 for complex features).
- Resolve all comments and address conflicts before merge.
- After approval, merge using **squash commits** to keep history clean.

**Developer Notes:**
- Use conventional commit messages (`feat:`, `fix:`, `chore:`, etc.) for consistency and changelog generation.
- CI/CD pipelines run tests and linting automatically on every PR.


## Testing Guidelines
Before pushing code, run unit and integration tests:

```bash
nx test [project-name]
nx e2e [project-name]
```


## Commit Message Standards
We follow [Conventional Commits](https://www.conventionalcommits.org/) for clarity and automated changelogs.

**Examples:**
```text
feat(dashboard): add contributor stats card
fix(api): handle null QoS values from Maps API
chore(deps): update prisma client
```


## Release Workflow
- Tag releases from **main** using semantic versioning (e.g., `v1.1.0`).
- The **stage** branch is tested on Base Sepolia before promoting to production on **main**.

