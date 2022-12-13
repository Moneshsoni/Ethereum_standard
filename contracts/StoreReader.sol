pragma solidity 0.8.17;
import "./StoreInterface.sol";
contract StoreReader is StoreInterfaceId {
  function getStoreValue(address store) external view returns (uint256) {
    if (ERC165(storeAddress).supportsInterface(0x75b24222)) {
      return store.getValue();
    }
    revert("Does not support StoreInterface");
  }
}
