/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
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

export interface TestNameEncoderInterface extends utils.Interface {
  functions: {
    "encodeName(string)": FunctionFragment;
  };

  getFunction(nameOrSignatureOrTopic: "encodeName"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "encodeName",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "encodeName", data: BytesLike): Result;

  events: {};
}

export interface TestNameEncoder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TestNameEncoderInterface;

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
    encodeName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;
  };

  encodeName(
    name: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[string, string]>;

  callStatic: {
    encodeName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string, string]>;
  };

  filters: {};

  estimateGas: {
    encodeName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    encodeName(
      name: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
