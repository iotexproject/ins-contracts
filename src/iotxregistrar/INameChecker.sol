// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

interface INameChecker {
    function valid(string memory name) external view returns (bool);
}
