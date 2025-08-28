---
id: run-locally
---

# Running the Applications

You can run individual applications or all of them concurrently using Nx and pnpm commands.

## Run Individual Applications

- **API (Backend - NestJS):**
  ```bash
  nx serve api
  ```
  The API will typically be available at [http://localhost:3000](http://localhost:3000) (or your configured `API_PORT`).

- **Giga (Frontend):**
  ```bash
  nx serve giga
  ```
  The Giga frontend will typically be available at [http://localhost:4200](http://localhost:4200) (or your configured `GIGA_PORT`).

- **Admin (Frontend):**
  ```bash
  nx serve admin
  ```
  The Admin frontend will typically be available at [http://localhost:4201](http://localhost:4201) (or your configured `ADMIN_PORT`).

- **Webhook Service:**
  ```bash
  nx serve webhook
  ```
  The webhook service will typically be available at [http://localhost:3001](http://localhost:3001) (or your configured `WEBHOOK_PORT`).

## Run All Applications Concurrently (Development)

To start all services at once for development:

```bash
pnpm serve
```

---

Adjust the port numbers as needed based on your `.env` configuration.
