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
