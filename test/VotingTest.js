const { expect } = require('chai');
const {hre, ethers} = require('hardhat');
const { etherscan } = require('../hardhat.config');
// Start test of Voting Project
describe("Voter Machine Project",()=>{
    before(async ()=>{
        const signers = await ethers.getSigner();
       
    })
    
    describe("Test Cases for Voting Project", ()=>{
        it("Should check test",async () =>{
            console.log("????",signers);
        })
    })
})
