// contracts/MosoToken.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MosoToken is ERC20 {
    constructor(uint256 initialSupply) public ERC20("MOSO", "MS") {
        _mint(msg.sender, initialSupply);
    }
}
