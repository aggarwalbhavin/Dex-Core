// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const BN = require("ethers").BigNumber;
const { ethers } = require("hardhat");

const owner = "0x1671fc001505af8433B259a60dc2638ae6DaBf0b";
async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  Factory = await ethers.getContractFactory("AbcSwapFactory");
  Pair = await ethers.getContractFactory("AbcSwapPair");
  Erc20 = await ethers.getContractFactory("AbcSwapERC20");
  // const Router = await ethers.getContractFactory("AbcSwapFactory");

  erc20 = await Erc20.deploy();
  
  factory = await Factory.deploy(owner);


  console.log("factory",factory.address);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
