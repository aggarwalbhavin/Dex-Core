import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  AbcSwapFactory,
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy

  const factory1 = await ethers.getContractFactory("AbcSwapFactory");
  const factory = await factory1.deploy("0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0");
  await sleep(6000);
  console.log("Factory Deployed", factory.address);
  await sleep(1000);
  console.log("INITCODE: ",await factory.INIT_CODE_PAIR_HASH());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  