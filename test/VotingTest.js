const { expect } = require('chai');
const {hre, ethers} = require("hardhat");
const { etherscan } = require('../hardhat.config');
// Start test of Voting Project
describe("Voter Machine Project",()=>{
    before(async ()=>{
        signers = await ethers.getSigner();
        Lock = await hre.ethers.getContractFactory("Ballot_Vote");
        lock = await Lock.deploy();
        await lock.deployed();
        console.log(">>>",lock.address);
  
    })
    
    describe("Test Cases for Voting Project", ()=>{
        it("Should check test",async () =>{
            console.log("????",lock);
        })
    })
})
