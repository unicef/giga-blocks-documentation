---
id: environment-variables 
---

# Environment Variables

This document provides detailed guidelines for generating values for certain environment variables, specifically the new and unique ones used in Giga-Blocks. Common variables like API links, Redis, database connections, and JWT are not included in these guidelines.

## Generating OTP and Encoded Secrets

**OTP_SECRET**: To generate the OTP secret, simply create a random, strong secret key. This key is used for email verification during admin login.

**ENCODED_OTP_SECRET**: This secret is used to encode the tokens for your magic links. You'll need to run the provided script, that uses a cryptographic algorithm, to generate this random secret.

```javascript
const crypto = require('crypto');
const secretKey = crypto.randomBytes(16);
console.log('Secret Key ');
console.log(secretKey.toString('hex'));
```

## Setting up IPFS Credentials and Explorer API Keys

**IPFS Credentials (Access Token and Secret Key)**: These are obtained from an IPFS service provider. For this project, you'll be using Pinata. You can create a new access token and secret key directly from your Pinata account dashboard.

**EXPLORER_API_KEY and NEXT_PUBLIC_GAS_API_KEY**: These API keys are essential for interacting with network explorers. To get them, log in to the explorer account for your specific network and generate the keys from your account settings.

## Configuring Arweave

**AREWAVE_CONFIG**: This variable holds the configuration for your Arweave wallet. To generate it, run the script located at `apps/api/src/utils/arweave/config/createAndFundWallet.ts`. This script will create a new wallet, fund it with tokens for the local network, and save the wallet data to a file named `wallet.json`.

**Securing the Wallet**: For security, do not commit `wallet.json` to GitHub. Instead, encode the contents of the JSON file and store the resulting string as the value for `AREWAVE_CONFIG` in your `.env` file. This ensures your wallet credentials are kept safe while still being accessible to your application.

## Generating the Alchemy Signing Key

**ALCHEMY_SIGNING_KEY**: This key is required for webhook security. You'll need an Alchemy account to get it. First, create a new webhook app in your Alchemy dashboard. The signing key can be found within the details of that specific webhook app. 

Refer to the giga developer guide for more detailed instructions on creating alchemy webhooks.

## ISSUER Node Credentials

**ISSUER Node Credentials**: These credentials can be obtained after successfully deploying the Privado issuer node. The deployment process will provide you with the necessary credentials to configure your application.