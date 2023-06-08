// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "./INameChecker.sol";
import "./StringUtils.sol";

contract ZeroWidthNameChecker is INameChecker {
    using StringUtils for string;

    function valid(string memory name) public pure returns (bool) {
        if (name.strlen() < 3) {
            return false;
        }
        bytes memory nb = bytes(name);
        // zero width for /u200b /u200c /u200d and U+FEFF
        for (uint256 i; i < nb.length - 2; i++) {
            if (bytes1(nb[i]) == 0xe2 && bytes1(nb[i + 1]) == 0x80) {
                if (bytes1(nb[i + 2]) == 0x8b || bytes1(nb[i + 2]) == 0x8c || bytes1(nb[i + 2]) == 0x8d) {
                    return false;
                }
            } else if (bytes1(nb[i]) == 0xef) {
                if (bytes1(nb[i + 1]) == 0xbb && bytes1(nb[i + 2]) == 0xbf) return false;
            }
        }
        return true;
    }
}
