const { expect } = require("chai");
const { ethers } = require("hardhat");


describe("Voting Project TestCases", () => {
    let VoterProject;
    let voterproject;
    let owner;
    let ballotOfficeName = "India Vote";
    let proposal = "MP";
    
    

    beforeEach(async () => {
        [owner, add1, add2] = await ethers.getSigners();
        VoterProject = await ethers.getContractFactory("Ballot_Vote");
        voterproject = await VoterProject.deploy(ballotOfficeName,proposal);
    });

    describe("Write test Cases for ", () => {
        it("Should check ballotOfficeName", async () => {   
            // console.log(">>",await voterproject.ballotOfficeName());
            expect(await voterproject.ballotOfficeName()).to.be.equals(ballotOfficeName);
        });
        
        it("Should check proposal", async () => {   
            // console.log(">>",await voterproject.proposal());
            expect(await voterproject.proposal()).to.be.equals(proposal);
        });
        
        it("Should check addVotter", async () =>{
            // console.log("addVoter",await voterproject.totalVoter());
            await voterproject.addVotter(add1.address,"First Voter");
            await voterproject.addVotter(add1.address,"Second Voter");
            // console.log(">>>",await voterproject.totalVoter());
        })
        
        it("Should check doVote", async () => {
            await voterproject.addVotter(add1.address,"Second Voter");
            console.log(">>",await voterproject.doVote(true));
  
        })
        
    });


});
