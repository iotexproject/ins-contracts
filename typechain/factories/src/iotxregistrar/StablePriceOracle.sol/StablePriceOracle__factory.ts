/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  StablePriceOracle,
  StablePriceOracleInterface,
} from "../../../../src/iotxregistrar/StablePriceOracle.sol/StablePriceOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract AggregatorInterface",
        name: "_usdOracle",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "_rentPrices",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256[]",
        name: "prices",
        type: "uint256[]",
      },
    ],
    name: "RentPriceChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "premium",
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
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expires",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    name: "price",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "base",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256",
          },
        ],
        internalType: "struct IPriceOracle.Price",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "price1Letter",
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
    name: "price2Letter",
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
    name: "price3Letter",
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
    name: "price4Letter",
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
    name: "price5Letter",
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "usdOracle",
    outputs: [
      {
        internalType: "contract AggregatorInterface",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6101406040523480156200001257600080fd5b5060405162000b6238038062000b6283398101604081905262000035916200011b565b6001600160a01b038216610120528051819060009062000059576200005962000208565b602002602001015160808181525050806001815181106200007e576200007e62000208565b602002602001015160a0818152505080600281518110620000a357620000a362000208565b602002602001015160c0818152505080600381518110620000c857620000c862000208565b602002602001015160e0818152505080600481518110620000ed57620000ed62000208565b6020026020010151610100818152505050506200021e565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156200012f57600080fd5b82516001600160a01b03811681146200014757600080fd5b602084810151919350906001600160401b03808211156200016757600080fd5b818601915086601f8301126200017c57600080fd5b81518181111562000191576200019162000105565b8060051b604051601f19603f83011681018181108582111715620001b957620001b962000105565b604052918252848201925083810185019189831115620001d857600080fd5b938501935b82851015620001f857845184529385019392850192620001dd565b8096505050505050509250929050565b634e487b7160e01b600052603260045260246000fd5b60805160a05160c05160e05161010051610120516108cb62000297600039600081816101990152610672015260008181610138015261032e01526000818161020c015261036701526000818161015f01526103990152600081816101e501526103cb01526000818160d501526103f501526108cb6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063a200e15311610076578063c8a4271f1161005b578063c8a4271f14610194578063cd5d2c74146101e0578063d820ed421461020757600080fd5b8063a200e1531461015a578063a34e35961461018157600080fd5b806301ffc9a7146100a85780632c0fd74c146100d057806350e9a7151461010557806359b6b86c14610133575b600080fd5b6100bb6100b636600461072a565b61022e565b60405190151581526020015b60405180910390f35b6100f77f000000000000000000000000000000000000000000000000000000000000000081565b6040519081526020016100c7565b61011861011336600461076c565b6102c7565b604080518251815260209283015192810192909252016100c7565b6100f77f000000000000000000000000000000000000000000000000000000000000000081565b6100f77f000000000000000000000000000000000000000000000000000000000000000081565b6100f761018f36600461076c565b61048d565b6101bb7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020016100c7565b6100f77f000000000000000000000000000000000000000000000000000000000000000081565b6100f77f000000000000000000000000000000000000000000000000000000000000000081565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f01ffc9a70000000000000000000000000000000000000000000000000000000014806102c157507fffffffff0000000000000000000000000000000000000000000000000000000082167f50e9a71500000000000000000000000000000000000000000000000000000000145b92915050565b6040805180820190915260008082526020820152600061031c86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152506104de92505050565b905060006005821061035957610352847f0000000000000000000000000000000000000000000000000000000000000000610801565b905061041c565b8160040361038b57610352847f0000000000000000000000000000000000000000000000000000000000000000610801565b816003036103bd57610352847f0000000000000000000000000000000000000000000000000000000000000000610801565b816002036103ef57610352847f0000000000000000000000000000000000000000000000000000000000000000610801565b610419847f0000000000000000000000000000000000000000000000000000000000000000610801565b90505b60405180604001604052806104308361066d565b815260200161048061047b8a8a8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508c92508b91506107219050565b61066d565b9052979650505050505050565b60006104d561047b86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892508791506107219050565b95945050505050565b8051600090819081905b8082101561066457600085838151811061050457610504610818565b01602001516001600160f81b03191690507f800000000000000000000000000000000000000000000000000000000000000081101561054f5761054860018461082e565b9250610651565b7fe0000000000000000000000000000000000000000000000000000000000000006001600160f81b03198216101561058c5761054860028461082e565b7ff0000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610156105c95761054860038461082e565b7ff8000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610156106065761054860048461082e565b7ffc000000000000000000000000000000000000000000000000000000000000006001600160f81b0319821610156106435761054860058461082e565b61064e60068461082e565b92505b508261065c81610841565b9350506104e8565b50909392505050565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff166350d25bcd6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156106db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106ff919061085a565b905080610710846305f5e100610801565b61071a9190610873565b9392505050565b60009392505050565b60006020828403121561073c57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461071a57600080fd5b6000806000806060858703121561078257600080fd5b843567ffffffffffffffff8082111561079a57600080fd5b818701915087601f8301126107ae57600080fd5b8135818111156107bd57600080fd5b8860208285010111156107cf57600080fd5b6020928301999098509187013596604001359550909350505050565b634e487b7160e01b600052601160045260246000fd5b80820281158282048414176102c1576102c16107eb565b634e487b7160e01b600052603260045260246000fd5b808201808211156102c1576102c16107eb565b600060018201610853576108536107eb565b5060010190565b60006020828403121561086c57600080fd5b5051919050565b60008261089057634e487b7160e01b600052601260045260246000fd5b50049056fea2646970667358221220948bcd2203c13d43cbb3a8c085d71e4f54ba1f412914dd926583df70473cb7d164736f6c63430008110033";

type StablePriceOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StablePriceOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StablePriceOracle__factory extends ContractFactory {
  constructor(...args: StablePriceOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _usdOracle: PromiseOrValue<string>,
    _rentPrices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StablePriceOracle> {
    return super.deploy(
      _usdOracle,
      _rentPrices,
      overrides || {}
    ) as Promise<StablePriceOracle>;
  }
  override getDeployTransaction(
    _usdOracle: PromiseOrValue<string>,
    _rentPrices: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_usdOracle, _rentPrices, overrides || {});
  }
  override attach(address: string): StablePriceOracle {
    return super.attach(address) as StablePriceOracle;
  }
  override connect(signer: Signer): StablePriceOracle__factory {
    return super.connect(signer) as StablePriceOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StablePriceOracleInterface {
    return new utils.Interface(_abi) as StablePriceOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StablePriceOracle {
    return new Contract(address, _abi, signerOrProvider) as StablePriceOracle;
  }
}
