---
id: subgraph
---

# Subgraph 

The **Giga-Graph** subgraph indexes and exposes data from the Giga Contracts via **The Graph Protocol**. It enables efficient querying of blockchain events such as NFT minting, school activations, and ownership transfers. Developers interact with this subgraph instead of making direct RPC calls, ensuring lower latency and optimized performance.


## Initial Setup and Dependencies

Install project dependencies:
```bash
yarn
```
Install The Graph CLI and libraries:
```bash
pnpm install @graphprotocol/graph-cli
pnpm install @graphprotocol/graph-ts
```
These packages are required for building and deploying subgraphs.


## Creating a Studio Service Account

1. Visit [The Graph website](https://thegraph.com/).
2. Click **Sign up with GitHub** and authorize access.
3. After setup, create a new Subgraph Studio account.


## Subgraph Creation in The Graph Explorer

1. Open Subgraph Studio.
2. Connect your wallet (MetaMask, Coinbase Wallet, WalletConnect, or Safe).
3. Retrieve your unique deploy key from the Subgraph details page.
   - The deploy key is used for publishing and managing subgraphs.
   - It can be regenerated if compromised.


## Generating the Subgraph Project

Run the initialization command and follow the interactive prompts:
```bash
graph init
```
This generates the basic file structure for your subgraph.


## Building and Deploying the Subgraph

**Code Generation:**
Generates TypeScript classes from `schema.graphql`.
```bash
yarn codegen
```

**Build Graph:**
Compiles the subgraph into WebAssembly (Wasm).
```bash
yarn build
```

**Authentication:**
Authenticate your machine with The Graph Studio:
```bash
graph auth --product subgraph-studio <access-token>
```

**Deployment:**
Deploy the subgraph to the hosted service:
```bash
graph deploy subgraph-name/slug
```

With these steps, the Giga-Graph subgraph will be live and ready to serve queries from the Giga Public and Admin applications.
