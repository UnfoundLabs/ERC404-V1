# Unfound ERC404 Deployment Guide

This guide provides instructions for deploying the ERC404 contract and interacting with it using Hardhat commands. This is a fork of the original ERC404 contract built by pandora.build.

## Pandora ERC404 Original Contract

```sh
https://github.com/Pandora-Labs-Org/erc404
```

## Unfound Labs Introduction to ID Management Upgrade in ERC404:

The original ERC404 contract presented an innovative blend of ERC20 and ERC721
functionalities, allowing for both fractional and unique token ownership. However, it lacked an
efficient ID management system, leading to potential issues such as uncontrolled ID creation and
duplication. The introduction of a comprehensive ID management system in the new ERC404
contract represents a substantial improvement over the original implementation. This system
addresses critical issues related to ID creation and duplication, ensuring a more secure, efficient,
and user-friendly experience. By optimizing ID management, the upgraded contract sets a new
standard for combining ERC20 and ERC721 functionalities in a single framework.

## Enhancements in the New ERC404 Contract:

1. Efficient ID Management:
The upgraded ERC404 contract introduces a sophisticated ID management system that
addresses the limitations of the original implementation. This system ensures that new IDs are
created in a controlled manner, preventing the endless generation of new IDs and effectively
eliminating the risk of ID duplication. This is a significant upgrade, as it not only optimizes the
contract's performance but also enhances its security and usability.

2. ID Reuse Mechanism:
One of the key features of the new ID management system is the ability to reuse IDs from tokens
that have been burned. This mechanism involves maintaining a queue of available IDs that can
be assigned to new tokens, thereby recycling IDs and conserving the namespace. This approach
is particularly beneficial in scenarios where the contract undergoes extensive minting and
burning activities, ensuring that the ID space is utilized efficiently.

3. Preventing Duplicate IDs:
The original contract's lack of control over ID creation could lead to scenarios where duplicate
IDs are generated, potentially causing confusion and errors in token ownership and transfers.
The new system implements checks and balances to ensure that each ID is unique and is only
assigned once, thereby maintaining the integrity of token ownership and the overall security of
the contract.

4. Gas Efficiency Improvements:
By introducing a systematic approach to ID management, the upgraded contract also achieves
better gas efficiency. The reuse of IDs minimizes the need for additional storage operations, which are among the most gas-intensive operations in the Ethereum Virtual Machine (EVM).This efficiency is crucial for maintaining low transaction costs and enhancing the contract's scalability.

## Getting Started:

Follow these instructions to clone and launch the ERC404-v1 contract.

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












