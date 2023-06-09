/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ILinearPremiumPriceOracle,
  ILinearPremiumPriceOracleInterface,
} from "../../../src/iotxregistrar/ILinearPremiumPriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "timeUntilPremium",
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
] as const;

export class ILinearPremiumPriceOracle__factory {
  static readonly abi = _abi;
  static createInterface(): ILinearPremiumPriceOracleInterface {
    return new utils.Interface(_abi) as ILinearPremiumPriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ILinearPremiumPriceOracle {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ILinearPremiumPriceOracle;
  }
}
