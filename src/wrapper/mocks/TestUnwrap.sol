// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "../../registry/INS.sol";
import "../../iotxregistrar/IBaseRegistrar.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {BytesUtils} from "../BytesUtils.sol";

contract TestUnwrap is Ownable {
    using BytesUtils for bytes;

    bytes32 private constant IO_NODE = 0xb2b692c69df4aa3b0a24634d20a3ba1b44c3299d09d6c4377577e20b09e68395;

    INS public immutable ins;
    IBaseRegistrar public immutable registrar;
    mapping(address => bool) public approvedWrapper;

    constructor(INS _ins, IBaseRegistrar _registrar) {
        ins = _ins;
        registrar = _registrar;
    }

    function setWrapperApproval(address wrapper, bool approved) public onlyOwner {
        approvedWrapper[wrapper] = approved;
    }

    function wrapETH2LD(string calldata label, address wrappedOwner, uint32, uint64, address) public {
        _unwrapETH2LD(keccak256(bytes(label)), wrappedOwner, msg.sender);
    }

    function setSubnodeRecord(
        bytes32 parentNode,
        string memory label,
        address newOwner,
        address,
        uint64,
        uint32,
        uint64
    ) public {
        bytes32 node = _makeNode(parentNode, keccak256(bytes(label)));
        _unwrapSubnode(node, newOwner, msg.sender);
    }

    function wrapFromUpgrade(
        bytes calldata name,
        address wrappedOwner,
        uint32,
        uint64,
        address,
        bytes calldata
    ) public {
        (bytes32 labelhash, uint256 offset) = name.readLabel(0);
        bytes32 parentNode = name.namehash(offset);
        bytes32 node = _makeNode(parentNode, labelhash);

        if (parentNode == IO_NODE) {
            _unwrapETH2LD(labelhash, wrappedOwner, msg.sender);
        } else {
            _unwrapSubnode(node, wrappedOwner, msg.sender);
        }
    }

    function _unwrapETH2LD(bytes32 labelhash, address wrappedOwner, address sender) private {
        uint256 tokenId = uint256(labelhash);
        address registrant = registrar.ownerOf(tokenId);

        require(
            approvedWrapper[sender] && sender == registrant && registrar.isApprovedForAll(registrant, address(this)),
            "Unauthorised"
        );

        registrar.reclaim(tokenId, wrappedOwner);
        registrar.transferFrom(registrant, wrappedOwner, tokenId);
    }

    function _unwrapSubnode(bytes32 node, address newOwner, address sender) private {
        address owner = ins.owner(node);

        require(
            approvedWrapper[sender] && owner == sender && ins.isApprovedForAll(owner, address(this)),
            "Unauthorised"
        );

        ins.setOwner(node, newOwner);
    }

    function _makeNode(bytes32 node, bytes32 labelhash) private pure returns (bytes32) {
        return keccak256(abi.encodePacked(node, labelhash));
    }
}
