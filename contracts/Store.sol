pragma solidity 0.8.17;
import "./StoreInterface.sol";
import "./ERC165/ERC165.sol";
contract Store is ERC165, StoreInterface {
  uint256 internal value;
  function setValue(uint256 v) external {
    value = v;
  }
  function getValue() external view returns (uint256) {
    return value;
  }
  function supportsInterface(bytes4 interfaceId) external view returns (bool) {
    return interfaceId == 0x01ffc9a7 || 
           interfaceId == 0x75b24222;
  }
}
