const hre = require("hardhat");

async function main() {
  const MosoToken = await hre.ethers.getContractFactory("MosoToken");
  const mosotoken = await MosoToken.deploy(1000000);

  await mosotoken.deployed();

  console.log(
    `MosoToken = deployed to address`,mosotoken.address
  );
  // MosoToken = deployed to address 0x902C6faAF34E53fF168892b719C3836d223562Dc
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// Token address 0x902C6faAF34E53fF168892b719C3836d223562Dc
// https://mumbai.polygonscan.com/address/0x902C6faAF34E53fF168892b719C3836d223562Dc#code
