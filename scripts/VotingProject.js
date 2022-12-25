const hre = require("hardhat");

async function main(){
    const VotingProject = await hre.ethers.getContractFactory("Ballot_Vote");
    const votingproject = await VotingProject.deploy("MyVoting","MP");
    await votingproject.deployed();
    console.log("Voting project address:",votingproject.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

// Voting Project address 0xd50D8111bB7911D61C0d154a6df4383EF754F840
// https://mumbai.polygonscan.com/address/0xd50D8111bB7911D61C0d154a6df4383EF754F840#code
