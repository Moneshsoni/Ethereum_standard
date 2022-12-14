pragma solidity 0.8.9;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MosoToken is ERC721{
    constructor() ERC721("MosoToken","moso"){}
    
    function supportsInterface(bytes4 interfaceId) public view override returns(bool){
        // if(interfaceId == 0x80ac58cd){
        //     return true;
        // }else if(super.supportsInterface(interfaceId)){
        //     return true;
        // }else{
        //     return false;
        // }
        
        return interfaceId == 0x80ac58cd || super.supportsInterface(interfaceId);
    }
}
