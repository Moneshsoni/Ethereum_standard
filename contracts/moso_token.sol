// contracts/MosoToken.sol
// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
contract MyToken is ERC20 ,Ownable{
    constructor(uint256 initialSupply) public ERC20("MOSO", "MS") {
        _mint(msg.sender, initialSupply);
    }
    
    function mint(address account, uint256 amount)public onlyOwner{
        _mint(account, amount);
    }
    
    
    function burn(address account,uint256 amount)public onlyOwner{
        _burn(account,amount);
    }
    
    
}
