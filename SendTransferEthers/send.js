



// https://warmhearted-autumn-sound.matic-testnet.discover.quiknode.pro/26f3e04fde83d8e22afaa9b6ed9fb8fc3bc6e3b5/

const {ethers} = require('ethers');
const { etherscan } = require('../hardhat.config');
const node = 'https://warmhearted-autumn-sound.matic-testnet.discover.quiknode.pro/26f3e04fde83d8e22afaa9b6ed9fb8fc3bc6e3b5/';

const provider = new ethers.providers.JsonRpcProvider(node);

async function main(){
    const wallet = new ethers.Wallet.createRandom();
    console.log(wallet.address);
    console.log(wallet.privateKey);
}


main();
