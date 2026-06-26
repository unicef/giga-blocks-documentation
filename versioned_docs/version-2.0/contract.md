---
id: contract
---

# Contracts

The Giga Contracts system consists of **nine core smart contracts** that collectively manage the lifecycle of NFT pairs—from minting and escrow, to sales and on-chain storage of school-related data.


## Contract Overview

The Giga Contracts are nine interconnected contracts, each with a specific responsibility:

- **Giga Minter Contract**: Central hub for minting; allows designated minters to create new NFT pairs.
- **School NFT Contract**: Stores `tokenId` and ownership details for school-based NFTs.
- **Collector NFT Contract**: Stores `tokenId` and ownership details for collector NFTs.
- **NFT Content Contract**: Stores on-chain metadata for school NFTs.
  - Generates unique hashes per NFT (based on `tokenId` + on-chain school data).
  - Stores base p5.js art script for image generation.
- **Giga Seller Contract**: Handles sales of collector NFTs, transferring them from escrow to buyer wallets.
- **School Escrow Contract**: Holds school NFTs securely until transfer.
- **Collector Escrow Contract**: Holds collector NFTs and transfers them securely upon claim.
- **Image Content Contract**: Stores Base64-encoded base images; assigns random region-specific images per school.
- **QoS Contract**: Stores daily school connectivity data and associated Arweave IDs.


## Contract Ownership & Minting Methods

There are **three ways NFTs are minted** in Giga Contracts:

- **Paying User**
  - User pays a base fee.
  - Collector NFT is minted directly to the user’s wallet.
  - School NFT is held in the School Escrow Contract.

- **Admin**
  - Bulk minting of both School and Collector NFTs.
  - Both are held in their respective escrow contracts.
  - Admin can later transfer NFTs to target wallets.

- **Non-Paying User (Sponsored Events)**
  - Minting handled by admin address (no base/gas fee required).
  - Both School and Collector NFTs stored in escrow.
  - Collector NFT reserved for a user’s email.
  - After email verification, NFT is transferred to the user’s wallet.


## Deployment

Deployment scripts are stored in the `scripts` folder of the repository.

### Basic Deployment

Deploy contracts to **Base Sepolia**:
```bash
pnpm deploy:nft:baseSepolia
```
To deploy on another network, update the script:
```json
"deploy:nft:networkName": "hardhat run scripts/deploy.js --network networkName"
```

### New Network Configuration
- Update `hardhat.config.js` with the new network details.
- Add the network’s explorer API key for verification.

### Sample .env File
```env
PRIVATE_KEY=
ETHERSCAN_KEY=
ARBISCAN_KEY=
BASESCAN_KEY=
```


## Post-Deployment Updates

After deployment, contracts must be configured via `scripts/updateContracts.js`.

**Required updates:**
- Set content managers: School NFT + Collector NFT as managers in NFT Content Contract.
- Set NFT content manager: NFT Content Contract as manager of School + Collector NFTs.
- Authorize minter: Add Giga Minter Contract as minter of School + Collector NFTs.
- Approve seller: Giga Seller Contract must be approved by Collector Escrow.
- Add art script: Upload latest p5.js art script into NFT Content Contract.
- Set QoS manager: Add deployer/admin as content manager in QoS Contract.

Run updates for Base Sepolia:
```bash
pnpm update:contracts:baseSepolia
```
**Note:**
- Update `ART_SCRIPT` in `scripts/example-art-scripts/index.js` before running.
- Ensure deployed contract addresses are updated in script configs.


## Managing Images

### Updating Image Content
To upload Base64-encoded images into Image Content Contract:
```bash
pnpm update:images:baseSepolia
```
- Image values are stored in the `imageMappings` folder.
- Remove the `data:image/png;base64,` prefix before upload (the script handles conversion).
- Update contract address in the script before running.

### Updating Image Regions
To add region-specific image mappings:
```bash
pnpm run update:imageregion:baseSepolia
```
- Region mappings are defined in `scripts/example-art-scripts/index.js`.
- Latest updated country data is in `./latestUpdatedCountry.txt`.
- Update Image Content Contract address in the script before running.


This contract system ensures secure, transparent, and flexible management of NFTs and school data on-chain.
