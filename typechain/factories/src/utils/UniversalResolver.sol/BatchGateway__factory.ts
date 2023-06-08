/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  BatchGateway,
  BatchGatewayInterface,
} from "../../../../src/utils/UniversalResolver.sol/BatchGateway";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "string[]",
            name: "urls",
            type: "string[]",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
        ],
        internalType: "struct OffchainLookupCallData[]",
        name: "data",
        type: "tuple[]",
      },
    ],
    name: "query",
    outputs: [
      {
        internalType: "bool[]",
        name: "failures",
        type: "bool[]",
      },
      {
        internalType: "bytes[]",
        name: "responses",
        type: "bytes[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class BatchGateway__factory {
  static readonly abi = _abi;
  static createInterface(): BatchGatewayInterface {
    return new utils.Interface(_abi) as BatchGatewayInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BatchGateway {
    return new Contract(address, _abi, signerOrProvider) as BatchGateway;
  }
}
