---
id: tech-stack-overview
---
# Tech Stack Overview

![Giga Blocks Tech Stack Overview](https://assets.rumsan.net/rumsan-test/giga-nft2---rumsan-x-giga-tech-stack.jpg)

All Giga Blocks components are built on a modern, modular technology stack designed for scalability, interoperability, and seamless blockchain integration.


## Database

- **PostgreSQL**  
  The primary relational database, chosen for its reliability and scalability.  
  Managed via **Prisma ORM** for type-safe schema management and efficient queries.


## Frontend (UI/UX)

- **React.js**  
  The core framework for building dynamic, component-driven user interfaces.
- **Next.js**  
  Enables server-side rendering, static site generation, and advanced routing for the public site.
- **Carbon Design System**  
  Provides a consistent, accessible, and modern UI component library.
- **Ethers.js**  
  Facilitates secure blockchain interactions, including wallet connections and smart contract transactions.
- **CSS / JavaScript / TypeScript**  
  Ensures robust styling, interactivity, and type safety across the frontend.


## Backend (API & Server)

- **NestJS (Node.js framework)**  
  Powers the backend API, handling business logic, controllers, and service layers.
- **TypeScript**  
  Delivers strong typing and maintainability across backend services.
- **Python**  
  Used for supporting cron jobs and data ingestion scripts, such as syncing with the Giga Maps API.

## Blockchain Layer

- **Solidity**  
  The language for developing smart contracts for NFT minting and school activation.
- **Base (via Infura RPC)**  
  The blockchain network used for contract deployment and transaction processing.
- **EVM Compatibility**  
  Ensures seamless support for all Ethereum-compatible wallets and tools.

## Wallets

- **EVM-Based Wallets**  
  (e.g., MetaMask, Privado Wallet, WalletConnect)  
  Enable user activation, NFT minting, and contributor recognition through secure wallet connections.


## Third-Party Services

- **Alchemy**  
  Provides reliable blockchain API access and event listening.
- **Pinata / Arweave** 
  Used for decentralized storage of NFT metadata and artwork.


This integrated stack empowers Giga Blocks to deliver a secure, scalable, and user-friendly decentralized platform for the global school directory initiative.