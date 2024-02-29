```
# ERC404 Deployment Guide

This guide provides instructions for deploying the ERC404 contract and interacting with it using Hardhat commands.

## Prerequisites

- Node.js and npm installed
- Hardhat installed globally (`npm install -g hardhat`)

## Deployment Steps

### 1. Clone the Repository

Clone the ERC404 repository to your local machine:

```sh
git clone https://github.com/UnfoundLabs/ERC404-V1.git
```

### 2. Install Dependencies

Navigate to the cloned repository directory and install dependencies:

```sh
cd ERC404-V1
npm install
```

### 3. Compile the Contracts

Compile the contracts using Hardhat:

```sh
npx hardhat compile
```

### 4. Deploy the Contract

Deploy the ERC404 contract to the desired network (replace `sepolia` with your network name):

```sh
npx hardhat deploy:Unfound --network sepolia
```

### 5. Verify the Contract (Optional)

If needed, verify the deployed contract on Etherscan:

```sh
npx hardhat verify:Unfound --network sepolia
```

### 6. Whitelist Deployer (Optional)

Whitelist the deployer address to perform administrative functions:

```sh
npx hardhat whitelist-owner:Unfound --network sepolia
```

### 7. Whitelist User Address (Optional)

Whitelist a user address to interact with the contract:

```sh
npx hardhat whitelist-address:Unfound --address-to-whitelist "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2" --network sepolia
```

### 8. Set Data URI

Set the data URI for metadata:

```sh
npx hardhat set-data-uri --network sepolia
```
