---
id: prerequisites
---

# Prerequisites

Before you begin, ensure your development environment includes the following tools and versions:

- **Node.js**: v20.13.1
- **pnpm**: v8.14.1
- **Git**: [Download](https://git-scm.com/downloads)
- **Docker** (Recommended for local database, Redis, and RabbitMQ): [Get Started](https://www.docker.com/get-started)
- **Nx CLI**: Install globally with:
  ```bash
  npm install -g nx
  ```

## Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/unicef/giga-blocks.git
cd giga-blocks
```

### 2. Install Dependencies

```bash
pnpm install
```
This will install dependencies for all projects in the monorepo, including `@nestjs/*`, Prisma, and `ioredis` (BullMQ's Redis client).

### 3. Environment Variables

Each project requires specific environment variables. Create a `.env` file in the root directory. All projects will use values from this file. Refer to `.env.example` in the root for a full list. Example variables:

```env
PORT=3333
NEXT_PUBLIC_D3_BACKEND=
NEXT_PUBLIC_ENVIRONMENT=development
NEXT_PUBLIC_WEB_NAME=
NEXT_PUBLIC_ADMIN_NAME=
NEXT_PUBLIC_DEBUG_MODE=
NEXT_PUBLIC_GRAPH_URL=
NEXT_PUBLIC_ADMIN_ADDRESS=
# Jwt
JWT_SECRET_KEY=your-secret-key
JWT_EXPIRATION_TIME=900
JWT_EXPIRATION_LONG_TIME=180000
# OTP
OTP_SECRET=your-secret-key
OTP_DURATION_IN_SECS=300
NEXT_PUBLIC_OTP_DURATION_IN_MINS=3
MAGIC_LINK_EXPIRATION_TIME_IN_HRS=24
OTP_LENGTH=6
NEXT_PUBLIC_ADMIN_BASE_PATH=/admin
ENCODED_OTP_SECRET=
# DB
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=
DB_NAME=
NEWSLETTER_DB_NAME=
# Prisma
APP_DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public
NEWSLETTER_DATABASE_URL=postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${NEWSLETTER_DB_NAME}?schema=public
# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=
# Mailing Service
SERVICE_PROVIDER="Gmail"
EMAIL_ADDRESS=
EMAIL_USER=
EMAIL_PASSWORD=
REPLY_TO_EMAIL_ADDRESS=
DEBUG_EMAIL_ADDRESS=
# RabbitMQ
RABBIT_MQ_HOST=""
RABBIT_MQ_PORT=""
RABBIT_MQ_USER=""
RABBIT_MQ_PASSWORD=""
RABBIT_MQ_URL=amqp://${RABBIT_MQ_USER}:${RABBIT_MQ_PASSWORD}@${RABBIT_MQ_HOST}:${RABBIT_MQ_PORT}
# Network Provider
NEXT_PUBLIC_GIGA_NFT_CONTRACT_ADDRESS=
NEXT_PUBLIC_GIGA_NFT_CONTENT_ADDRESS=
NEXT_PUBLIC_GIGA_SCHOOL_ESCROW_ADDRESS=
NEXT_PUBLIC_GIGA_COLLECTOR_ESCROW_ADDRESS=
GIGA_NFT_CONTENT_ADDRESS=
GIGA_IMAGE_CONTENT_ADDRESS=
NEXT_PUBLIC_GIGA_SCHOOL_NFT_ADDRESS=
NEXT_PUBLIC_GIGA_SELLER_ADDRESS=
NEXT_PUBLIC_GIGA_COLLECTOR_NFT_ADDRESS=
GIGA_QOS_CONTRACT_ADDRESS=
PRIVATE_KEY=
BATCH_SIZE=
NEXT_PUBLIC_DEFAULT_CHAIN=
NEXT_PUBLIC_DEFAULT_CHAIN_ID=
NEXT_PUBLIC_NETWORK_PROVIDER=
NETWORK_PROVIDER=
IPFS_API_KEY=
IPFS_API_SECRET=
NEXT_PUBLIC_GAS_API=
NEXT_PUBLIC_GAS_API_KEY=
IMAGE_BATCH_SIZE=300
CORS_ORIGIN='http://localhost:3000', 'https://your-production-domain.com'
# Webhook Config
WEBHOOK_PORT=3010
ALCHEMY_SIGNING_KEY=
# Arweave
ARWEAVE_HOST=
ARWEAVE_PORT=
ARWEAVE_PROTOCOL=
AREWAVE_CONFIG=
# Verifier config
SCHEMA_TYPE=Giga
SCHEMA_CONTEXT_URL=ipfs://QmYpBx8CwGxsW9BALW5LFavXowv9W27G5ZegrCSHHu69Lm
RESOLVER_URL=https://rpc-mainnet.privado.id
RESOLVER_ADDRESS=0x3C9acB2205Aa72A05F6D77d708b5Cf85FCa3a896
RESOLVER_NETWORK=privado:main
AUDIENCE_DID=did:polygonid:polygon:main:2q4Q7F7tM1xpwUTgWivb6TgKX3vWirsE3mqymuYjVv
VERIFIER_CREDENTIALS=country
# Issuer Config
ISSUER_USERNAME=
ISSUER_PASSWORD=
DID_ISSUER_URL=
NEXT_PUBLIC_ISSUER_UI=
# Giga Maps
UNI_OOI_GIGA=https://uni-ooi-giga-backend-hjekcuagasashucv.a03.azurefd.net/api/locations/gsearch
NEXT_PUBLIC_GIGA_MAPS_API=https://maps.giga.global/map
NEXT_PUBLIC_MAPBOX_TOKEN=
```

### 4. Database, Redis, and RabbitMQ Setup (with Docker)

If you have a `docker-compose.yml` file in the root or `infra` directory, you can spin up local PostgreSQL, Redis, and RabbitMQ instances:

```bash
docker-compose up -d
```

**Example docker-compose service definitions:**
```yaml
version: '3.9'
services:
  postgres:
    image: postgres:14
    restart: always
    container_name: postgres_container
    environment:
      - POSTGRES_USER=USERNAME
      - POSTGRES_PASSWORD=PASSWORD
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - '5432:5432'

  redis-giga:
    container_name: redis-giga
    image: bitnami/redis:latest
    restart: always
    ports:
      - '6379:6379'
    environment:
      - REDIS_PASSWORD=REDIS_PASSWORD
    volumes:
      - giga_redis_data:/data

  bull-board:
    image: deadly0/bull-board:latest
    restart: always
    container_name: bull-board-giga
    ports:
      - '5687:3000'
    environment:
      - REDIS_HOST=redis-giga
      - REDIS_PORT=6379
      - REDIS_PASSWORD=REDIS_PASSWORD
    depends_on:
      - redis-giga

  rabbitmq:
    image: rabbitmq:3-management
    container_name: rabbitmq_container
    restart: always
    ports:
      - '5672:5672'
      - '15672:15672'
    environment:
      - RABBITMQ_DEFAULT_USER=USERNAME
      - RABBITMQ_DEFAULT_PASS=PASSWORD
      - RABBITMQ_DEFAULT_VHOST=/

volumes:
  postgres_data:
  giga_redis_data:
```

*If no `docker-compose` is available, set up PostgreSQL, Redis, and RabbitMQ manually.*

### 5. Prisma Setup and Migrations

- The Prisma schema is typically located in `apps/api/prisma`.
- Generate Prisma clients:
  ```bash
  pnpm api:app:generate      # For the application database
  pnpm api:news:generate     # For the newsletter database
  ```
- Run migrations:
  ```bash
  pnpm api:app:migrate       # For the application database
  pnpm api:news:migrate      # For the newsletter database
  ```

These commands create and apply database migrations based on your `schema.prisma` file, keeping your database schema in sync with your application models.

### 6. Arweave Local Configuration

To set up and run a local Arweave node for development, use the `arlocal` tool:

- **Start Local Node:**
  ```bash
  npx arlocal
  ```
- **Generate Wallet:**
  Use the provided script to create a wallet key and mint tokens for the local network. The script saves your wallet key to `wallet.json`:
  ```
  apps/api/src/utils/arweave/config/createAndFundWallet.ts
  ```
- **Secure Wallet Data:**
  Do not commit `wallet.json` to GitHub. Instead, encode its contents and save it in your `.env` file as the `AREWAVE_CONFIG` value.

You're now ready to proceed with local development!
