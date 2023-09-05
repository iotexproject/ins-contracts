// SPDX-License-Identifier: MIT
pragma solidity ~0.8.17;

import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";
import {IMetadataService} from "./IMetadataService.sol";

contract OwnedStaticMetadataService is IMetadataService, Ownable {
    event UriChanged(string uri);

    string private _uri;

    constructor(string memory _metaDataUri) {
        _uri = _metaDataUri;
        emit UriChanged(_metaDataUri);
    }

    function changeUri(string memory _metaDataUri) external onlyOwner {
        _uri = _metaDataUri;
        emit UriChanged(_metaDataUri);
    }

    function uri(uint256 id) public view returns (string memory) {
        return string(abi.encodePacked(_uri, Strings.toString(id)));
    }
}
