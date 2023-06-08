// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../registry/INS.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Controllable.sol";

contract Root is Ownable, Controllable {
    bytes32 private constant ROOT_NODE = bytes32(0);

    bytes4 private constant INTERFACE_META_ID = bytes4(keccak256("supportsInterface(bytes4)"));

    event TLDLocked(bytes32 indexed label);

    INS public ins;
    mapping(bytes32 => bool) public locked;

    constructor(INS _ins) {
        ins = _ins;
    }

    function setSubnodeOwner(bytes32 label, address owner) external onlyController {
        require(!locked[label]);
        ins.setSubnodeOwner(ROOT_NODE, label, owner);
    }

    function setResolver(address resolver) external onlyOwner {
        ins.setResolver(ROOT_NODE, resolver);
    }

    function lock(bytes32 label) external onlyOwner {
        emit TLDLocked(label);
        locked[label] = true;
    }

    function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
        return interfaceID == INTERFACE_META_ID;
    }
}
