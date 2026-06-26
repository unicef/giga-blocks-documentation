---
id: giga-id
---

# Privado ID 

The **Giga ID** feature is implemented using the open-source **Privado ID** framework. It introduces **Decentralized Identifiers (DIDs)** and **Verifiable Credentials (VCs)** into the Giga ecosystem, enabling secure, decentralized identity and credential management.


## Core Components

The Giga ID system is built on two primary components:

- **Issuer Node**
  - Dedicated service for issuing Verifiable Credentials (VCs).
  - Customized version of Privado’s open-source issuer-node.
  - Configured specifically for the Giga platform.

- **Verification Service**
  - Backend service for verifying the authenticity of VCs.
  - Integrated into the **Giga Backend** using the `@iden3/js-iden3-auth` SDK.
  - Ensures secure authentication and credential verification.


## Issuer Node Deployment

Deploying the Issuer Node is required for issuing Giga VCs.

- **Deployment**
  - Uses a modified version of Privado’s open-source `issuer-node`.
  - Update environment variables in the `.env` file.
  - Configuration files:
    - `resolvers_settings.yaml` (based on `resolvers_settings_sample.yaml`)
    - Deployed primarily on **Privado Main** network (Polygon Amoy optional)
  - `payment_settings.yaml` is **not required** for Giga deployment.

- **Configuration**
  - Node must be configured with correct **network settings** and **signature type**.
  - Ensures seamless operation across the Giga ecosystem.

- **Schema Management**
  - Issuer node supports importing custom schemas.
  - Giga ID uses the **Giga schema type**, defining structure & data fields of Giga’s VCs.
  - Example schema, [click Here](https://tools.privado.id/schemas/638d2d89-5aa2-4fa6-8392-30824a0bd841) 
  
## Verification Implementation

Verification of Giga VCs is handled in the **Giga Backend**.

- **SDK Integration**
  - Uses `@iden3/js-iden3-auth` SDK.
  - Provides utilities for authentication and verification of VCs.

- **Environment Variables**
  - Verification relies on values configured in the `.env` file.
  - Verifier config can be used directly, while **issuer config** must be updated based on the deployed Issuer Node.

**Sample `.env` file:**
```env
## Verifier Config
SCHEMA_TYPE=Giga
SCHEMA_CONTEXT_URL=ipfs://QmYpBx8CwGxsW9BALW5LFavXowv9W27G5ZegrCSHHu69Lm
RESOLVER_URL=https://rpc-mainnet.privado.id
RESOLVER_ADDRESS=0x3C9acB2205Aa72A05F6D77d708b5Cf85FCa3a896
RESOLVER_NETWORK=privado:main
AUDIENCE_DID=did:polygonid:polygon:main:2q4Q7F7tM1xpwUTgWivb6TgKX3vWirsE3mqymuYjVv
VERIFIER_CREDENTIALS=country

## Issuer Config
ISSUER_USERNAME=
ISSUER_PASSWORD=
DID_ISSUER_URL=API_ENDPOINT_FOR_ISSUER_NODE
ISSUER_DID=DID_ID_OF_ISSUER
NEXT_PUBLIC_ISSUER_UI=UI_LINK_OF_ISSUER_NODE
```


With this setup:
- The Issuer Node handles credential creation.
- The Giga Backend verifies them using Privado’s resolver and schema.
- Contributors and CIWs (Community Information Workers) can prove their identity and role using Verifiable Credentials.
