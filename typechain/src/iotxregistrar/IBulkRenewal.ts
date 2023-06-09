/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface IBulkRenewalInterface extends utils.Interface {
  functions: {
    "renewAll(string[],uint256)": FunctionFragment;
    "rentPrice(string[],uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "renewAll" | "rentPrice"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "renewAll",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "rentPrice",
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "renewAll", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rentPrice", data: BytesLike): Result;

  events: {};
}

export interface IBulkRenewal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IBulkRenewalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    renewAll(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    rentPrice(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { total: BigNumber }>;
  };

  renewAll(
    names: PromiseOrValue<string>[],
    duration: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  rentPrice(
    names: PromiseOrValue<string>[],
    duration: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    renewAll(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    rentPrice(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    renewAll(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    rentPrice(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    renewAll(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    rentPrice(
      names: PromiseOrValue<string>[],
      duration: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
