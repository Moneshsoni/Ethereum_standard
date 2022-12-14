pragma solidity 0.8.17;
import "./StoreInterface.sol";
interface ERC165 {
    function supportsInterface(bytes4 interfaceID) 
       external view returns (bool);
}
contract StoreReader is StoreInterface {
//   function getStoreValue(address store) external view returns (uint256) {
//     address storeAddress = store;
//     if (ERC165(storeAddress).supportsInterface(0x75b24222)) {
//       return store.getValue();
//     }
//     revert("Does not support StoreInterface");
//   }
}
