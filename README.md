# Unfound ERC404 Deployment Guide

This guide provides instructions for deploying the ERC404 contract and interacting with it using Hardhat commands.

## Prerequisites

- Node.js and npm installed
- Hardhat installed globally

```sh
npm install -g hardhat
```

## Deployment Steps

### 1. Clone the Repository:

Clone the ERC404 repository to your local machine:

```sh
git clone https://github.com/UnfoundLabs/ERC404-V1.git
```
```sh
cd ERC404-V1
```
```sh
npm install
```

### 3. Compile the Contracts:

Compile the contracts using Hardhat:

```sh
npx hardhat compile
```

### 4. Deploy the Contract:

Deploy the ERC404 contract to the desired network (replace `sepolia` with your network name):

```sh
npx hardhat deploy:Unfound --network sepolia
```

### 5. Verify the Contract (Optional):

If needed, verify the deployed contract on Etherscan:

```sh
npx hardhat verify:Unfound --network sepolia
```

### 6. Whitelist Deployer:

Whitelist the deployer address to avoid ERC721 minting / burning to save on gas

```sh
npx hardhat whitelist-owner:Unfound --network sepolia
```

### 7. Whitelist User Address (Optional)

Whitelist a user address or Uniswap pool address to avoid ERC721 minting / burning

```sh
npx hardhat whitelist-address:Unfound --address-to-whitelist "address_to_whitelist" --network sepolia
```

### 8. Set Data URI

Set the data URI for metadata, this includes the dynamic json file in the unfound.sol:

```sh
npx hardhat set-data-uri --network sepolia
```












