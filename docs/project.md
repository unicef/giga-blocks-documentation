---
id: project
---

# Project Components

This section describes the core applications and services within the Giga Blocks monorepo. Each application has a defined role, technology stack, and integration pattern, ensuring the platform operates as a scalable, decentralized school directory.

**Migrations:**
  ```bash
  pnpm api:app:migrate
  ```

**Redis Integration:**
- Used for caching frequent queries (e.g., user profiles)
- **NestJS Cache Manager** + `cache-manager-redis-store`

**BullMQ Integration:**
- Queueing system with producers (controllers/services) and consumers (`@Processor()` classes)
- Handles background jobs (e.g., NFT updates, contributor processing)

**RabbitMQ:**
- Provides additional messaging for asynchronous workflows

**Error Handling & Logging:**
- Global exception filters for consistent API error responses
- Built-in NestJS logger (console in dev, pluggable for prod)

## Giga (Frontend - Public Site)

**Framework & Libraries:**
- Built with **React** + **Next.js**
- **Carbon Design System** for consistent UI styling and accessibility

**Data Management:**
- **Tanstack Query** for data fetching, caching, and API synchronization
- Query hooks: `apps/giga/src/app/hooks/use[Feature].ts`
- **Subgraph Integration:** On-chain data queried via GraphQL
- Queries: `apps/giga/app/libs/graph-query.js`

**State Management:**
- React state + Tanstack Query cache for server state


## Admin (Frontend - Admin Site)

**Framework & Libraries:**
- Built with **React** + **Next.js**
- **Material UI** for customizable admin components

**Features:**
- Routing: Next.js router
- Form Management: Material UI + React Hook Form
- Bulk Actions: Bulk school activations and link creation


## Webhook (Service)

**Purpose:**
- Processes blockchain transaction events and pushes them into backend queues

**Integration:**
- **Alchemy Webhook Payloads:** JSON logs of smart contract events
- **BullMQ for Queueing:** Jobs added to named queues (e.g., `ONCHAIN_DATA_QUEUE`), processed by API service workers
- **Redis:** Provides job storage and event emission for BullMQ

**Prerequisites:**
- **Alchemy Setup:**
  - Create an Alchemy account and Webhook App
  - Select Custom Webhook
- **Webhook Configuration:**
  - Network: Select blockchain network (e.g., Base MainNet, Sepolia)
  - Query Template: Specify contract address + event signatures
  - Webhook URL: Point to the deployed webhook service endpoint

Once configured, the webhook service receives real-time notifications from Alchemy whenever tracked events occur.


This architecture ensures robust, scalable, and maintainable operations for the Giga Blocks platform.
