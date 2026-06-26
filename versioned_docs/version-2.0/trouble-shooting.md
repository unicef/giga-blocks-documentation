---
id: trouble-shooting
---

# Troubleshooting

This section lists common issues developers may encounter while working with the Giga Blocks platform, along with recommended solutions.


## Nx CLI Issues

- **Error: `nx command not found`**
  - Ensure Nx is installed globally:
    ```bash
    npm install -g nx
    ```
  - Alternatively, run Nx commands via `pnpm nx ...` without global install.


## Dependency Issues

- If builds fail due to missing dependencies:
  ```bash
  pnpm install
  ```
- If issues persist:
  ```bash
  rm -rf node_modules
  pnpm install
  ```

## Environment Variables

- Verify that all required `.env` files exist in the correct locations.
- Double-check that each variable (e.g., database, Redis, blockchain keys) is properly configured.


## Database (PostgreSQL / Prisma)

- **Check Database Connection:**
  - Ensure `DATABASE_URL` is correctly set in your `.env` file.
  - Confirm PostgreSQL is running (via Docker container or local instance).
- **Apply Prisma Migrations:**
  ```bash
  pnpm api:app:migrate
  ```
- **Prisma Errors:**
  - If you encounter `PrismaClientKnownRequestError`, verify that your schema matches the current database structure.


## Redis (BullMQ / Redis MQ)

- **Verify Connection:**
  - Check `REDIS_HOST` and `REDIS_PORT` in `.env`.
  - Ensure Redis is running (via Docker container or local instance).
- **Configuration (Production):**
  - Set the following in your Redis config to prevent data loss:
    ```ini
    maxmemory-policy=noeviction
    ```

## Port Conflicts

- If an application fails to start due to a port in use:
  - Update the port in the app’s configuration.
  - Or kill the process holding the port:
    ```bash
    lsof -i :PORT
    kill -9 <PID>
    ```


## NestJS Dependency Injection Issues

- Ensure modules are correctly imported into their parent modules.
- Verify providers are registered in the appropriate module.
- Check that services use the `@Injectable()` decorator.


## BullMQ Workers Not Processing

- Confirm BullMQ workers are running and connected to Redis.
- Check worker logs for job errors.
- Verify queue names match between producers and consumers.


## Database & Blockchain Out of Sync

When the database and blockchain data fall out of sync, it can cause inconsistencies in your application. We have a backup script to help resolve this.

Script is located in `apps/api/src/utils/backupScripts/updateSchools.ts` of giga blocks repository.

- The script works by fetching `schoolId` data directly from the subgraph. It then triggers the image generation process for any missing entries. This process automatically sets the school's status to _"minted"_ and randomly assigns a theme from the backend.

- This script is a backup that helps ensure your database and user-facing content stay up-to-date, even if an initial backend process fails **after an NFT has already been minted.**
