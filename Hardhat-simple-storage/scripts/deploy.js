// Imports
const {ethers} = require("hardhat");

// Async main function
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )

  console.log("Deploying Contract...");
  const simpleStorage = await SimpleStorageFactory.deploy();
  await simpleStorage.deployed();
  // What's the private key?
  // What's the RPC url?
  console.log(`Deployed contract to: ${simpleStorage.address}`);
  // When we work with hardhat, it automatically provides us with a default RPC url and a private key hence that is what makes it a better framework to use.
  // If we want to add more things to it, add it in hardhat.config.js file 

}


async function verify(contractAddress, args){
}



// main function
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
