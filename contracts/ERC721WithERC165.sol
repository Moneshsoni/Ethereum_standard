pragma solidity 0.8.9;
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
contract Test{
    function getSelector() external pure returns(bytes4){
        return type(IERC721).interfaceId;
    }
}
