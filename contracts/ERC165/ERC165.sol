pragma solidity 0.8.17;
interface ERC165 {
  function supportsInterface(bytes4 interfaceID) 
    external view returns (bool);
}
