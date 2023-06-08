// SPDX-License-Identifier: MIT
pragma solidity >=0.8.4;

import "../registry/INS.sol";
import "./IOTXRegistrarController.sol";
import "./IIOTXRegistrarController.sol";
import "../resolvers/Resolver.sol";
import "./IBulkRenewal.sol";
import "./IPriceOracle.sol";

import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

contract BulkRenewal is IBulkRenewal {
    bytes32 private constant IO_NAMEHASH = 0xb2b692c69df4aa3b0a24634d20a3ba1b44c3299d09d6c4377577e20b09e68395;

    INS public immutable ins;

    constructor(INS _ins) {
        ins = _ins;
    }

    function getController() internal view returns (IOTXRegistrarController) {
        Resolver r = Resolver(ins.resolver(IO_NAMEHASH));
        return IOTXRegistrarController(r.interfaceImplementer(IO_NAMEHASH, type(IIOTXRegistrarController).interfaceId));
    }

    function rentPrice(string[] calldata names, uint256 duration) external view override returns (uint256 total) {
        IOTXRegistrarController controller = getController();
        uint256 length = names.length;
        for (uint256 i = 0; i < length; ) {
            IPriceOracle.Price memory price = controller.rentPrice(names[i], duration);
            unchecked {
                ++i;
                total += (price.base + price.premium);
            }
        }
    }

    function renewAll(string[] calldata names, uint256 duration) external payable override {
        IOTXRegistrarController controller = getController();
        uint256 length = names.length;
        uint256 total;
        for (uint256 i = 0; i < length; ) {
            IPriceOracle.Price memory price = controller.rentPrice(names[i], duration);
            uint256 totalPrice = price.base + price.premium;
            controller.renew{value: totalPrice}(names[i], duration);
            unchecked {
                ++i;
                total += totalPrice;
            }
        }
        // Send any excess funds back
        payable(msg.sender).transfer(address(this).balance);
    }

    function supportsInterface(bytes4 interfaceID) external pure returns (bool) {
        return interfaceID == type(IERC165).interfaceId || interfaceID == type(IBulkRenewal).interfaceId;
    }
}
