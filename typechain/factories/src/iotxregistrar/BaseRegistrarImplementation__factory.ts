/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BytesLike,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  BaseRegistrarImplementation,
  BaseRegistrarImplementationInterface,
} from "../../../src/iotxregistrar/BaseRegistrarImplementation";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract INS",
        name: "_ins",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_baseNode",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "ControllerRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameMigrated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
    ],
    name: "NameRenewed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "GRACE_PERIOD",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "addController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "available",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "baseNode",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "controllers",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ins",
    outputs: [
      {
        internalType: "contract INS",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "nameExpires",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "reclaim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "registerOnly",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "controller",
        type: "address",
      },
    ],
    name: "removeController",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "renew",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "resolver",
        type: "address",
      },
    ],
    name: "setResolver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceID",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200225538038062002255833981016040819052620000349162000109565b60408051602080820183526000808352835191820190935282815290916200005d8382620001ea565b5060016200006c8282620001ea565b5050506200008962000083620000b360201b60201c565b620000b7565b600880546001600160a01b0319166001600160a01b039390931692909217909155600955620002b6565b3390565b600680546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b600080604083850312156200011d57600080fd5b82516001600160a01b03811681146200013557600080fd5b6020939093015192949293505050565b634e487b7160e01b600052604160045260246000fd5b600181811c908216806200017057607f821691505b6020821081036200019157634e487b7160e01b600052602260045260246000fd5b50919050565b601f821115620001e557600081815260208120601f850160051c81016020861015620001c05750805b601f850160051c820191505b81811015620001e157828155600101620001cc565b5050505b505050565b81516001600160401b0381111562000206576200020662000145565b6200021e816200021784546200015b565b8462000197565b602080601f8311600181146200025657600084156200023d5750858301515b600019600386901b1c1916600185901b178555620001e1565b600085815260208120601f198616915b82811015620002875788860151825594840194600190910190840162000266565b5085821015620002a65787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b611f8f80620002c66000396000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c806395d89b4111610104578063c87b56dd116100a2578063e985e9c511610071578063e985e9c5146103e0578063f2fde38b1461041c578063f6a74ed71461042f578063fca247ac1461044257600080fd5b8063c87b56dd14610381578063d6e4fa8614610394578063da8c229e146103b4578063ddf7fcb0146103d757600080fd5b8063a7fc7a07116100de578063a7fc7a071461033e578063b88d4fde14610351578063c1a287e214610364578063c475abff1461036e57600080fd5b806395d89b411461031057806396e494e814610318578063a22cb4651461032b57600080fd5b806342842e0e116101715780636f14a0d11161014b5780636f14a0d1146102d157806370a08231146102e4578063715018a6146102f75780638da5cb5b146102ff57600080fd5b806342842e0e146102985780634e543b26146102ab5780636352211e146102be57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c5780630e297b451461025157806323b872dd1461027257806328ed4f6c1461028557600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611b38565b610455565b60405190151581526020015b60405180910390f35b6102046104f2565b6040516101f39190611ba5565b61022461021f366004611bb8565b610584565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611be6565b6105ab565b005b61026461025f366004611c12565b6106e1565b6040519081526020016101f3565b61024f610280366004611c4a565b6106f8565b61024f610293366004611c7a565b61077f565b61024f6102a6366004611c4a565b610898565b61024f6102b9366004611caa565b6108b3565b6102246102cc366004611bb8565b610941565b600854610224906001600160a01b031681565b6102646102f2366004611caa565b610964565b61024f6109fe565b6006546001600160a01b0316610224565b610204610a12565b6101e7610326366004611bb8565b610a21565b61024f610339366004611cc7565b610a47565b61024f61034c366004611caa565b610a56565b61024f61035f366004611d10565b610aaa565b6102646276a70081565b61026461037c366004611df0565b610b38565b61020461038f366004611bb8565b610cc9565b6102646103a2366004611bb8565b60009081526007602052604090205490565b6101e76103c2366004611caa565b600a6020526000908152604090205460ff1681565b61026460095481565b6101e76103ee366004611e12565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b61024f61042a366004611caa565b610d3d565b61024f61043d366004611caa565b610dcd565b610264610450366004611c12565b610e1e565b60006001600160e01b031982167f01ffc9a70000000000000000000000000000000000000000000000000000000014806104b857506001600160e01b031982167f80ac58cd00000000000000000000000000000000000000000000000000000000145b806104ec57506001600160e01b031982167f28ed4f6c00000000000000000000000000000000000000000000000000000000145b92915050565b60606000805461050190611e40565b80601f016020809104026020016040519081016040528092919081815260200182805461052d90611e40565b801561057a5780601f1061054f5761010080835404028352916020019161057a565b820191906000526020600020905b81548152906001019060200180831161055d57829003601f168201915b5050505050905090565b600061058f82610e2d565b506000908152600460205260409020546001600160a01b031690565b60006105b682610e91565b9050806001600160a01b0316836001600160a01b0316036106445760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e6560448201527f720000000000000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b336001600160a01b0382161480610660575061066081336103ee565b6106d25760405162461bcd60e51b815260206004820152603d60248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f7420746f60448201527f6b656e206f776e6572206f7220617070726f76656420666f7220616c6c000000606482015260840161063b565b6106dc8383610ef6565b505050565b60006106f08484846000610f71565b949350505050565b6107023382611181565b6107745760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f76656400000000000000000000000000000000000000606482015260840161063b565b6106dc8383836111fc565b6008546009546040516302571be360e01b8152600481019190915230916001600160a01b0316906302571be390602401602060405180830381865afa1580156107cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f09190611e7a565b6001600160a01b03161461080357600080fd5b61080d3383611181565b61081657600080fd5b6008546009546040516306ab592360e01b81526004810191909152602481018490526001600160a01b038381166044830152909116906306ab5923906064016020604051808303816000875af1158015610874573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106dc9190611e97565b6106dc83838360405180602001604052806000815250610aaa565b6108bb611402565b6008546009546040517f1896f70a00000000000000000000000000000000000000000000000000000000815260048101919091526001600160a01b03838116602483015290911690631896f70a90604401600060405180830381600087803b15801561092657600080fd5b505af115801561093a573d6000803e3d6000fd5b5050505050565b600081815260076020526040812054421061095b57600080fd5b6104ec82610e91565b60006001600160a01b0382166109e25760405162461bcd60e51b815260206004820152602960248201527f4552433732313a2061646472657373207a65726f206973206e6f74206120766160448201527f6c6964206f776e65720000000000000000000000000000000000000000000000606482015260840161063b565b506001600160a01b031660009081526003602052604090205490565b610a06611402565b610a10600061145c565b565b60606001805461050190611e40565b6000818152600760205260408120544290610a40906276a70090611eb0565b1092915050565b610a523383836114bb565b5050565b610a5e611402565b6001600160a01b0381166000818152600a6020526040808220805460ff19166001179055517f0a8bb31534c0ed46f380cb867bd5c803a189ced9a764e30b3a4991a9901d74749190a250565b610ab43383611181565b610b265760405162461bcd60e51b815260206004820152602d60248201527f4552433732313a2063616c6c6572206973206e6f7420746f6b656e206f776e6560448201527f72206f7220617070726f76656400000000000000000000000000000000000000606482015260840161063b565b610b3284848484611589565b50505050565b6008546009546040516302571be360e01b8152600481019190915260009130916001600160a01b03909116906302571be390602401602060405180830381865afa158015610b8a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bae9190611e7a565b6001600160a01b031614610bc157600080fd5b336000908152600a602052604090205460ff16610bdd57600080fd5b6000838152600760205260409020544290610bfc906276a70090611eb0565b1015610c0757600080fd5b610c146276a70083611eb0565b6000848152600760205260409020546276a70090610c33908590611eb0565b610c3d9190611eb0565b11610c4757600080fd5b60008381526007602052604081208054849290610c65908490611eb0565b90915550506000838152600760205260409081902054905184917f9b87a00e30f1ac65d898f070f8a3488fe60517182d0a2098e1b4b93a54aa9bd691610cad91815260200190565b60405180910390a2505060009081526007602052604090205490565b6060610cd482610e2d565b6000610ceb60408051602081019091526000815290565b90506000815111610d0b5760405180602001604052806000815250610d36565b80610d1584611612565b604051602001610d26929190611ed1565b6040516020818303038152906040525b9392505050565b610d45611402565b6001600160a01b038116610dc15760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161063b565b610dca8161145c565b50565b610dd5611402565b6001600160a01b0381166000818152600a6020526040808220805460ff19169055517f33d83959be2573f5453b12eb9d43b3499bc57d96bd2f067ba44803c859e811139190a250565b60006106f08484846001610f71565b6000818152600260205260409020546001600160a01b0316610dca5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161063b565b6000818152600260205260408120546001600160a01b0316806104ec5760405162461bcd60e51b815260206004820152601860248201527f4552433732313a20696e76616c696420746f6b656e2049440000000000000000604482015260640161063b565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610f3882610e91565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6008546009546040516302571be360e01b8152600481019190915260009130916001600160a01b03909116906302571be390602401602060405180830381865afa158015610fc3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe79190611e7a565b6001600160a01b031614610ffa57600080fd5b336000908152600a602052604090205460ff1661101657600080fd5b61101f85610a21565b61102857600080fd5b6110356276a70042611eb0565b6276a7006110438542611eb0565b61104d9190611eb0565b1161105757600080fd5b6110618342611eb0565b6000868152600760209081526040808320939093556002905220546001600160a01b03161561109357611093856116b2565b61109d8486611754565b8115611127576008546009546040516306ab592360e01b81526004810191909152602481018790526001600160a01b038681166044830152909116906306ab5923906064016020604051808303816000875af1158015611101573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906111259190611e97565b505b6001600160a01b038416857fb3d987963d01b2f68493b4bdb130988f157ea43070d4ad840fee0466ed9370d961115d8642611eb0565b60405190815260200160405180910390a36111788342611eb0565b95945050505050565b60008061118d83610941565b9050806001600160a01b0316846001600160a01b031614806111c85750836001600160a01b03166111bd84610584565b6001600160a01b0316145b806106f057506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff166106f0565b826001600160a01b031661120f82610e91565b6001600160a01b0316146112735760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161063b565b6001600160a01b0382166112ee5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f2061646460448201527f7265737300000000000000000000000000000000000000000000000000000000606482015260840161063b565b826001600160a01b031661130182610e91565b6001600160a01b0316146113655760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201526437bbb732b960d91b606482015260840161063b565b6000818152600460209081526040808320805473ffffffffffffffffffffffffffffffffffffffff199081169091556001600160a01b0387811680865260038552838620805460001901905590871680865283862080546001019055868652600290945282852080549092168417909155905184937fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b6006546001600160a01b03163314610a105760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161063b565b600680546001600160a01b0383811673ffffffffffffffffffffffffffffffffffffffff19831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03160361151c5760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161063b565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6115948484846111fc565b6115a0848484846118ec565b610b325760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161063b565b6060600061161f83611a40565b600101905060008167ffffffffffffffff81111561163f5761163f611cfa565b6040519080825280601f01601f191660200182016040528015611669576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461167357509392505050565b60006116bd82610e91565b90506116c882610e91565b6000838152600460209081526040808320805473ffffffffffffffffffffffffffffffffffffffff199081169091556001600160a01b0385168085526003845282852080546000190190558785526002909352818420805490911690555192935084927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b0382166117aa5760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161063b565b6000818152600260205260409020546001600160a01b03161561180f5760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161063b565b6000818152600260205260409020546001600160a01b0316156118745760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161063b565b6001600160a01b0382166000818152600360209081526040808320805460010190558483526002909152808220805473ffffffffffffffffffffffffffffffffffffffff19168417905551839291907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006001600160a01b0384163b15611a3857604051630a85bd0160e11b81526001600160a01b0385169063150b7a0290611930903390899088908890600401611f00565b6020604051808303816000875af192505050801561196b575060408051601f3d908101601f1916820190925261196891810190611f3c565b60015b611a1e573d808015611999576040519150601f19603f3d011682016040523d82523d6000602084013e61199e565b606091505b508051600003611a165760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527f63656976657220696d706c656d656e7465720000000000000000000000000000606482015260840161063b565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506106f0565b5060016106f0565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a89577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef81000000008310611ab5576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc100008310611ad357662386f26fc10000830492506010015b6305f5e1008310611aeb576305f5e100830492506008015b6127108310611aff57612710830492506004015b60648310611b11576064830492506002015b600a83106104ec5760010192915050565b6001600160e01b031981168114610dca57600080fd5b600060208284031215611b4a57600080fd5b8135610d3681611b22565b60005b83811015611b70578181015183820152602001611b58565b50506000910152565b60008151808452611b91816020860160208601611b55565b601f01601f19169290920160200192915050565b602081526000610d366020830184611b79565b600060208284031215611bca57600080fd5b5035919050565b6001600160a01b0381168114610dca57600080fd5b60008060408385031215611bf957600080fd5b8235611c0481611bd1565b946020939093013593505050565b600080600060608486031215611c2757600080fd5b833592506020840135611c3981611bd1565b929592945050506040919091013590565b600080600060608486031215611c5f57600080fd5b8335611c6a81611bd1565b92506020840135611c3981611bd1565b60008060408385031215611c8d57600080fd5b823591506020830135611c9f81611bd1565b809150509250929050565b600060208284031215611cbc57600080fd5b8135610d3681611bd1565b60008060408385031215611cda57600080fd5b8235611ce581611bd1565b915060208301358015158114611c9f57600080fd5b634e487b7160e01b600052604160045260246000fd5b60008060008060808587031215611d2657600080fd5b8435611d3181611bd1565b93506020850135611d4181611bd1565b925060408501359150606085013567ffffffffffffffff80821115611d6557600080fd5b818701915087601f830112611d7957600080fd5b813581811115611d8b57611d8b611cfa565b604051601f8201601f19908116603f01168101908382118183101715611db357611db3611cfa565b816040528281528a6020848701011115611dcc57600080fd5b82602086016020830137600060208483010152809550505050505092959194509250565b60008060408385031215611e0357600080fd5b50508035926020909101359150565b60008060408385031215611e2557600080fd5b8235611e3081611bd1565b91506020830135611c9f81611bd1565b600181811c90821680611e5457607f821691505b602082108103611e7457634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215611e8c57600080fd5b8151610d3681611bd1565b600060208284031215611ea957600080fd5b5051919050565b808201808211156104ec57634e487b7160e01b600052601160045260246000fd5b60008351611ee3818460208801611b55565b835190830190611ef7818360208801611b55565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611f326080830184611b79565b9695505050505050565b600060208284031215611f4e57600080fd5b8151610d3681611b2256fea2646970667358221220d1ecd63ad228d6cd3df48cc4c2b5b4a0103e9ee205b327d27d52a5a6596aed7c64736f6c63430008110033";

type BaseRegistrarImplementationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseRegistrarImplementationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseRegistrarImplementation__factory extends ContractFactory {
  constructor(...args: BaseRegistrarImplementationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _ins: PromiseOrValue<string>,
    _baseNode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BaseRegistrarImplementation> {
    return super.deploy(
      _ins,
      _baseNode,
      overrides || {}
    ) as Promise<BaseRegistrarImplementation>;
  }
  override getDeployTransaction(
    _ins: PromiseOrValue<string>,
    _baseNode: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_ins, _baseNode, overrides || {});
  }
  override attach(address: string): BaseRegistrarImplementation {
    return super.attach(address) as BaseRegistrarImplementation;
  }
  override connect(signer: Signer): BaseRegistrarImplementation__factory {
    return super.connect(signer) as BaseRegistrarImplementation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseRegistrarImplementationInterface {
    return new utils.Interface(_abi) as BaseRegistrarImplementationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BaseRegistrarImplementation {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BaseRegistrarImplementation;
  }
}
