// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import {INameWrapperUpgrade} from "../INameWrapperUpgrade.sol";
import "../../registry/INS.sol";
import "../../iotxregistrar/IBaseRegistrar.sol";
import {BytesUtils} from "../BytesUtils.sol";

contract UpgradedNameWrapperMock is INameWrapperUpgrade {
    using BytesUtils for bytes;

    bytes32 private constant IO_NODE = 0xb2b692c69df4aa3b0a24634d20a3ba1b44c3299d09d6c4377577e20b09e68395;

    INS public immutable ins;
    IBaseRegistrar public immutable registrar;

    constructor(INS _ins, IBaseRegistrar _registrar) {
        ins = _ins;
        registrar = _registrar;
    }

    event NameUpgraded(
        bytes name,
        address wrappedOwner,
        uint32 fuses,
        uint64 expiry,
        address approved,
        bytes extraData
    );

    function wrapFromUpgrade(
        bytes calldata name,
        address wrappedOwner,
        uint32 fuses,
        uint64 expiry,
        address approved,
        bytes calldata extraData
    ) public {
        (bytes32 labelhash, uint256 offset) = name.readLabel(0);
        bytes32 parentNode = name.namehash(offset);
        bytes32 node = _makeNode(parentNode, labelhash);

        if (parentNode == IO_NODE) {
            address registrant = registrar.ownerOf(uint256(labelhash));
            require(
                msg.sender == registrant && registrar.isApprovedForAll(registrant, address(this)),
                "No approval for registrar"
            );
        } else {
            address owner = ins.owner(node);
            require(msg.sender == owner && ins.isApprovedForAll(owner, address(this)), "No approval for registry");
        }
        emit NameUpgraded(name, wrappedOwner, fuses, expiry, approved, extraData);
    }

    function _makeNode(bytes32 node, bytes32 labelhash) private pure returns (bytes32) {
        return keccak256(abi.encodePacked(node, labelhash));
    }
}
