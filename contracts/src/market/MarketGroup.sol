pragma solidity ^0.5.0;

import "../common/config/UsingConfig.sol";
import "../common/storage/UsingStorage.sol";
import "../common/validate/AddressValidator.sol";
import "../common/interface/IGroup.sol";

contract MarketGroup is UsingConfig, UsingStorage, IGroup {
	mapping(address => bool) private _markets;

	// solium-disable-next-line no-empty-blocks
	constructor(address _config) public UsingConfig(_config) UsingStorage() {}

	function addGroup(address _addr) external {
		new AddressValidator().validateAddress(
			msg.sender,
			config().marketFactory()
		);
		eternalStorage().setBool(getAddressKey(_addr), true);
	}

	function isGroup(address _addr) external view returns (bool) {
		return eternalStorage().getBool(getAddressKey(_addr));
	}
}
