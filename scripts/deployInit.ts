import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  CalHash,
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy
  const owner = "0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0";

  const getInit1 = await ethers.getContractFactory("CalHash");
  const getInit = await getInit1.deploy();
  await sleep(4000);
  console.log("Init Deployed", getInit.address);
  console.log("Hash: "+await getInit.getInitHash());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // router address = 