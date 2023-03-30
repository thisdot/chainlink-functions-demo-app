/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  TransparentUpgradeableProxy,
  TransparentUpgradeableProxyInterface,
} from "../../../../../@openzeppelin/contracts/proxy/transparent/TransparentUpgradeableProxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "admin_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "changeAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "implementation_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405162000f0238038062000f02833981016040819052620000269162000458565b828162000036828260006200004d565b50620000449050826200008a565b505050620005d0565b6200005883620000e5565b600082511180620000665750805b1562000085576200008383836200012760201b620002701760201c565b505b505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f620000b562000156565b604080516001600160a01b03928316815291841660208301520160405180910390a1620000e2816200018f565b50565b620000f08162000244565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606200014f838360405180606001604052806027815260200162000edb60279139620002f8565b9392505050565b60006200018060008051602062000ebb83398151915260001b6200037760201b620002181760201c565b546001600160a01b0316919050565b6001600160a01b038116620001fa5760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b806200022360008051602062000ebb83398151915260001b6200037760201b620002181760201c565b80546001600160a01b0319166001600160a01b039290921691909117905550565b6200025a816200037a60201b6200029c1760201c565b620002be5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401620001f1565b80620002237f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b6200037760201b620002181760201c565b6060600080856001600160a01b03168560405162000317919062000538565b600060405180830381855af49150503d806000811462000354576040519150601f19603f3d011682016040523d82523d6000602084013e62000359565b606091505b5090925090506200036d8683838762000389565b9695505050505050565b90565b6001600160a01b03163b151590565b60608315620003fa578251620003f2576001600160a01b0385163b620003f25760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401620001f1565b508162000406565b6200040683836200040e565b949350505050565b8151156200041f5781518083602001fd5b8060405162461bcd60e51b8152600401620001f1919062000556565b80516001600160a01b03811681146200045357600080fd5b919050565b6000806000606084860312156200046e57600080fd5b62000479846200043b565b925062000489602085016200043b565b60408501519092506001600160401b0380821115620004a757600080fd5b818601915086601f830112620004bc57600080fd5b815181811115620004d157620004d1620005ba565b604051601f8201601f19908116603f01168101908382118183101715620004fc57620004fc620005ba565b816040528281528960208487010111156200051657600080fd5b620005298360208301602088016200058b565b80955050505050509250925092565b600082516200054c8184602087016200058b565b9190910192915050565b6020815260008251806020840152620005778160408501602087016200058b565b601f01601f19169190910160400192915050565b60005b83811015620005a85781810151838201526020016200058e565b83811115620000835750506000910152565b634e487b7160e01b600052604160045260246000fd5b6108db80620005e06000396000f3fe60806040526004361061005e5760003560e01c80635c60da1b116100435780635c60da1b146100a85780638f283970146100d9578063f851a440146100f95761006d565b80633659cfe6146100755780634f1ef286146100955761006d565b3661006d5761006b61010e565b005b61006b61010e565b34801561008157600080fd5b5061006b610090366004610765565b610128565b61006b6100a3366004610780565b61016f565b3480156100b457600080fd5b506100bd6101e0565b6040516001600160a01b03909116815260200160405180910390f35b3480156100e557600080fd5b5061006b6100f4366004610765565b61021b565b34801561010557600080fd5b506100bd610245565b6101166102ab565b610126610121610365565b61036f565b565b610130610393565b6001600160a01b0316336001600160a01b0316141561016757610164816040518060200160405280600081525060006103c6565b50565b61016461010e565b610177610393565b6001600160a01b0316336001600160a01b031614156101d8576101d38383838080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250600192506103c6915050565b505050565b6101d361010e565b60006101ea610393565b6001600160a01b0316336001600160a01b031614156102105761020b610365565b905090565b61021861010e565b90565b610223610393565b6001600160a01b0316336001600160a01b0316141561016757610164816103f1565b600061024f610393565b6001600160a01b0316336001600160a01b031614156102105761020b610393565b6060610295838360405180606001604052806027815260200161087f60279139610445565b9392505050565b6001600160a01b03163b151590565b6102b3610393565b6001600160a01b0316336001600160a01b031614156101265760405162461bcd60e51b815260206004820152604260248201527f5472616e73706172656e745570677261646561626c6550726f78793a2061646d60448201527f696e2063616e6e6f742066616c6c6261636b20746f2070726f7879207461726760648201527f6574000000000000000000000000000000000000000000000000000000000000608482015260a4015b60405180910390fd5b600061020b6104bd565b3660008037600080366000845af43d6000803e80801561038e573d6000f35b3d6000fd5b60007fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b546001600160a01b0316919050565b6103cf836104e5565b6000825111806103dc5750805b156101d3576103eb8383610270565b50505050565b7f7e644d79422f17c01e4894b5f4f588d331ebfa28653d42ae832dc59e38c9798f61041a610393565b604080516001600160a01b03928316815291841660208301520160405180910390a161016481610525565b6060600080856001600160a01b0316856040516104629190610803565b600060405180830381855af49150503d806000811461049d576040519150601f19603f3d011682016040523d82523d6000602084013e6104a2565b606091505b50915091506104b3868383876105fd565b9695505050505050565b60007f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6103b7565b6104ee8161067b565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6001600160a01b0381166105a15760405162461bcd60e51b815260206004820152602660248201527f455243313936373a206e65772061646d696e20697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161035c565b807fb53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d61035b80547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039290921691909117905550565b60608315610669578251610662576001600160a01b0385163b6106625760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640161035c565b5081610673565b610673838361071f565b949350505050565b6001600160a01b0381163b6106f85760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e747261637400000000000000000000000000000000000000606482015260840161035c565b807f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc6105c4565b81511561072f5781518083602001fd5b8060405162461bcd60e51b815260040161035c919061081f565b80356001600160a01b038116811461076057600080fd5b919050565b60006020828403121561077757600080fd5b61029582610749565b60008060006040848603121561079557600080fd5b61079e84610749565b9250602084013567ffffffffffffffff808211156107bb57600080fd5b818601915086601f8301126107cf57600080fd5b8135818111156107de57600080fd5b8760208285010111156107f057600080fd5b6020830194508093505050509250925092565b60008251610815818460208701610852565b9190910192915050565b602081526000825180602084015261083e816040850160208701610852565b601f01601f19169190910160400192915050565b60005b8381101561086d578181015183820152602001610855565b838111156103eb575050600091015256fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212201a92a7e7aff0abbfdfc9f8b43479d97860f9688973a4b4297addc74f2dc4246064736f6c63430008070033b53127684a568b3173ae13b9f8a6016e243e63b6e8ee1178d6a717850b5d6103416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type TransparentUpgradeableProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TransparentUpgradeableProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TransparentUpgradeableProxy__factory extends ContractFactory {
  constructor(...args: TransparentUpgradeableProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<TransparentUpgradeableProxy> {
    return super.deploy(
      _logic,
      admin_,
      _data,
      overrides || {}
    ) as Promise<TransparentUpgradeableProxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    admin_: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, admin_, _data, overrides || {});
  }
  override attach(address: string): TransparentUpgradeableProxy {
    return super.attach(address) as TransparentUpgradeableProxy;
  }
  override connect(signer: Signer): TransparentUpgradeableProxy__factory {
    return super.connect(signer) as TransparentUpgradeableProxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TransparentUpgradeableProxyInterface {
    return new utils.Interface(_abi) as TransparentUpgradeableProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TransparentUpgradeableProxy {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TransparentUpgradeableProxy;
  }
}
