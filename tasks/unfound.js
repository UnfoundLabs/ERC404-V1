/* eslint-disable no-undef */
require('dotenv').config();
const { CONTRACT_NAMES } = require('../utils/constants');
const {
  readContract,
  writeContract,
  writeABI,
  readABI,
} = require('../utils/io');

// deploy the new contract
task('deploy:Unfound', 'Deploy Contract', async (_, { ethers }) => {
  const accounts = await ethers.getSigners();
  const signer = accounts[0];

  const myContract = await ethers.deployContract(CONTRACT_NAMES.Unfound, [
    // owner address
    signer.address,
  ]);

  await myContract.waitForDeployment();

  console.info(`Contract deployed at ${myContract.target}`);

  writeContract(CONTRACT_NAMES.Unfound, myContract.target, signer.address, []);
});

// verify contract on etherscan
task('verify:Unfound', 'Verify Contract', async (_, { run }) => {
  const myContract = readContract(CONTRACT_NAMES.Unfound);
  const accounts = await ethers.getSigners();
  const signer = accounts[0];

  await run('verify:verify', {
    address: myContract.address,
    constructorArguments: [
      // owner address
      signer.address,
    ],
  });
});

// whitelist deployer address
task(
  'whitelist-owner:Unfound',
  'Whitelists the owner of the Contract',
  async (_, { ethers }) => {
    const myContract = readContract(CONTRACT_NAMES.Unfound);
    const abi = readABI(CONTRACT_NAMES.Unfound);

    const accounts = await ethers.getSigners();
    const signer = accounts[0];

    const contract = new ethers.Contract(myContract.address, abi, signer);

    const tx = await contract.setWhitelist(signer.address, true);
    await tx.wait();

    console.info(`${signer.address} whitelisted`);
  },
);

// whitelist user / uniswap address manually
task(
  'whitelist-address:Unfound',
  'Whitelists a specific address for the Contract',
  async (taskArgs, { ethers }) => {
    const { addressToWhitelist } = taskArgs; // Assuming the address to whitelist is passed as a task argument


    const myContract = readContract(CONTRACT_NAMES.Unfound);
    const abi = readABI(CONTRACT_NAMES.Unfound);

    const accounts = await ethers.getSigners();
    const signer = accounts[0];

    const contract = new ethers.Contract(myContract.address, abi, signer);

    const tx = await contract.setWhitelist(addressToWhitelist, true);
    await tx.wait();

    console.info(`${addressToWhitelist} whitelisted`);
  },
).addParam("addressToWhitelist", "The address to be whitelisted");


// set data-uri 
task(
  'set-data-uri',
  'Sets the DataURI in the contract',
  async (_, { ethers }) => {
    const myContract = readContract(CONTRACT_NAMES.Unfound);
    const abi = readABI(CONTRACT_NAMES.Unfound);

    const accounts = await ethers.getSigners();
    const signer = accounts[0];

    const contract = new ethers.Contract(myContract.address, abi, signer);

    const dataURI = process.env.IMAGE_URL;

    const tx = await contract.setDataURI(dataURI);
    await tx.wait();

    console.info(`DataURI has been set successfully!`);
  },
);

// Export the ABI for use
task('abi:Unfound', 'Export contract ABI', async () => {
  writeABI('unfound.sol/Unfound.json', CONTRACT_NAMES.Unfound);
});