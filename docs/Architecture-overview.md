---
id: architecture-overview
---

#  Architecture Overview

The Giga Blocks platform is a **modular, service-oriented system** that combines blockchain components, backend services, and frontend applications. This architecture ensures scalability, maintainability, and transparent data flows.


![Giga Blocks Architecture Diagram](https://assets.rumsan.net/rumsan-test/giga-nft2---rumsan-x-giga-system-architecture-diagram-2.jpg "Giga Blocks Architecture Overview")


## Platform Components

Giga Blocks operates through five distinct application sites:

- **Giga Admin**: Administrative dashboard for platform management.
- **Giga Public**: Public-facing site for general users.
- **Giga Backend**: Core API and service layer for both public and admin interfaces.
- **Giga Delta Sharing**: Service for ingesting and synchronizing school and connectivity data.
- **Giga Webhook**: Event listener and processor for blockchain transaction events.

The **Backend** provides API services for both public visitors and administrators. General users access the public site, while designated administrators use the Giga Admin site.


## Backend & Data Management

- **Giga Backend** is built with [Nest.js](https://nestjs.com/) and uses [Prisma](https://www.prisma.io/) ORM for database management.
- **Queuing** is handled via [Redis](https://redis.io/docs/about/) and [RabbitMQ](https://www.rabbitmq.com/).
- **Databases**:
  - **Giga Database**: Stores school data, contributed content, and user profiles (contributors and admins).
  - **Newsletter Database**: Stores information for users interested in joining the developer community.


## Frontend & UI

- **Public Site**: Built with [React-Carbon](https://www.npmjs.com/package/@carbon/react) ([Carbon Design System](https://carbondesignsystem.com/)) for a modern, accessible user experience.
- **Admin Site**: Uses [Material UI](https://mui.com/material-ui/) for the administrative interface.
- Both sites are served using the Nest.js framework.

## Blockchain Integration

- **Subgraph Service**: A hosted [Subgraph](https://thegraph.com/docs/en/quick-start/) caches blockchain transactions and data, enabling both Admin and Public sites to retrieve blockchain-related information efficiently.
- **Smart Contracts**: Deployed on the Base MainNet for NFT minting and school activation.


## Data Ingestion & Event Processing

- **Giga Delta Sharing**:  
  - Fetches school and real-time connectivity data from Giga Maps to the Giga Blocks database.
  - Implemented in Python, using multiple Celery workers for efficient data ingestion.
- **Giga Webhook**:  
  - A lightweight [Node.js](https://nodejs.org/en) service using Express.
  - Listens to blockchain events via Alchemy webhooks and queues updates for the main backend after successful transactions.


## Summary

This comprehensive architecture supports distinct user roles and leverages best-in-class technologies and frameworks to manage data, interactions, and user interfaces effectively.

**Tip:**  
For the architecture diagram, ensure your image is stored in the correct directory (e.g., `static/img/architecture.png` for Docusaurus) and update the image path accordingly.
