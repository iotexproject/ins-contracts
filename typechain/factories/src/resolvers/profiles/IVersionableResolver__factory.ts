/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IVersionableResolver,
  IVersionableResolverInterface,
} from "../../../../src/resolvers/profiles/IVersionableResolver";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint64",
        name: "newVersion",
        type: "uint64",
      },
    ],
    name: "VersionChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "node",
        type: "bytes32",
      },
    ],
    name: "recordVersions",
    outputs: [
      {
        internalType: "uint64",
        name: "",
        type: "uint64",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IVersionableResolver__factory {
  static readonly abi = _abi;
  static createInterface(): IVersionableResolverInterface {
    return new utils.Interface(_abi) as IVersionableResolverInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVersionableResolver {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IVersionableResolver;
  }
}
