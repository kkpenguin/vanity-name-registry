/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface VanityNameRegistryInterface extends ethers.utils.Interface {
  functions: {
    "feePerChar()": FunctionFragment;
    "lockAmount()": FunctionFragment;
    "lockPeriod()": FunctionFragment;
    "owner()": FunctionFragment;
    "records(string)": FunctionFragment;
    "registerName(string)": FunctionFragment;
    "registerSignature(bytes,bool)": FunctionFragment;
    "renewName(string)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestSignatures(address)": FunctionFragment;
    "setFeePerChar(uint256)": FunctionFragment;
    "setLockAmount(uint256)": FunctionFragment;
    "setLockPeriod(uint64)": FunctionFragment;
    "setTreasury(address)": FunctionFragment;
    "setWaitBlocks(uint64)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "treasury()": FunctionFragment;
    "unlock(string)": FunctionFragment;
    "unlockedEthers(address)": FunctionFragment;
    "waitBlocks()": FunctionFragment;
    "withdrawUnlockedEther()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "feePerChar",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockAmount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lockPeriod",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "records", values: [string]): string;
  encodeFunctionData(
    functionFragment: "registerName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "registerSignature",
    values: [BytesLike, boolean]
  ): string;
  encodeFunctionData(functionFragment: "renewName", values: [string]): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestSignatures",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setFeePerChar",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setLockPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setTreasury", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setWaitBlocks",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "treasury", values?: undefined): string;
  encodeFunctionData(functionFragment: "unlock", values: [string]): string;
  encodeFunctionData(
    functionFragment: "unlockedEthers",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "waitBlocks",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnlockedEther",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "feePerChar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockAmount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lockPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "records", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "registerSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "renewName", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestSignatures",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeePerChar",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setLockPeriod",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTreasury",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWaitBlocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "treasury", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockedEthers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "waitBlocks", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnlockedEther",
    data: BytesLike
  ): Result;

  events: {
    "NewRegister(address,string,uint256)": EventFragment;
    "NewSignature(address,bytes)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "RenewName(address,string)": EventFragment;
    "UnlockETH(address,string,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewRegister"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSignature"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RenewName"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UnlockETH"): EventFragment;
}

export type NewRegisterEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    name: string;
    lockedAmount: BigNumber;
  }
>;

export type NewSignatureEvent = TypedEvent<
  [string, string] & { user: string; signature: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type RenewNameEvent = TypedEvent<
  [string, string] & { user: string; name: string }
>;

export type UnlockETHEvent = TypedEvent<
  [string, string, BigNumber] & {
    user: string;
    name: string;
    unlockAmount: BigNumber;
  }
>;

export class VanityNameRegistry extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: VanityNameRegistryInterface;

  functions: {
    feePerChar(overrides?: CallOverrides): Promise<[BigNumber]>;

    lockAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    lockPeriod(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    records(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        owner: string;
        maturity: BigNumber;
        lockAmount: BigNumber;
      }
    >;

    registerName(
      name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    registerSignature(
      signature: BytesLike,
      cancelPending: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renewName(
      name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestSignatures(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { signature: string; blockId: BigNumber }>;

    setFeePerChar(
      _feePerChar: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLockAmount(
      _lockAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setLockPeriod(
      _lockPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWaitBlocks(
      _waitBlocks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    treasury(overrides?: CallOverrides): Promise<[string]>;

    unlock(
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockedEthers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    waitBlocks(overrides?: CallOverrides): Promise<[BigNumber]>;

    withdrawUnlockedEther(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  feePerChar(overrides?: CallOverrides): Promise<BigNumber>;

  lockAmount(overrides?: CallOverrides): Promise<BigNumber>;

  lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  records(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [string, BigNumber, BigNumber] & {
      owner: string;
      maturity: BigNumber;
      lockAmount: BigNumber;
    }
  >;

  registerName(
    name: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  registerSignature(
    signature: BytesLike,
    cancelPending: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renewName(
    name: string,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestSignatures(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<[string, BigNumber] & { signature: string; blockId: BigNumber }>;

  setFeePerChar(
    _feePerChar: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLockAmount(
    _lockAmount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setLockPeriod(
    _lockPeriod: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTreasury(
    _treasury: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWaitBlocks(
    _waitBlocks: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  treasury(overrides?: CallOverrides): Promise<string>;

  unlock(
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockedEthers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  waitBlocks(overrides?: CallOverrides): Promise<BigNumber>;

  withdrawUnlockedEther(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    feePerChar(overrides?: CallOverrides): Promise<BigNumber>;

    lockAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    records(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [string, BigNumber, BigNumber] & {
        owner: string;
        maturity: BigNumber;
        lockAmount: BigNumber;
      }
    >;

    registerName(name: string, overrides?: CallOverrides): Promise<void>;

    registerSignature(
      signature: BytesLike,
      cancelPending: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    renewName(name: string, overrides?: CallOverrides): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestSignatures(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string, BigNumber] & { signature: string; blockId: BigNumber }>;

    setFeePerChar(
      _feePerChar: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockAmount(
      _lockAmount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setLockPeriod(
      _lockPeriod: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTreasury(_treasury: string, overrides?: CallOverrides): Promise<void>;

    setWaitBlocks(
      _waitBlocks: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    treasury(overrides?: CallOverrides): Promise<string>;

    unlock(name: string, overrides?: CallOverrides): Promise<void>;

    unlockedEthers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    waitBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawUnlockedEther(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    "NewRegister(address,string,uint256)"(
      user?: string | null,
      name?: null,
      lockedAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; name: string; lockedAmount: BigNumber }
    >;

    NewRegister(
      user?: string | null,
      name?: null,
      lockedAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; name: string; lockedAmount: BigNumber }
    >;

    "NewSignature(address,bytes)"(
      user?: string | null,
      signature?: null
    ): TypedEventFilter<[string, string], { user: string; signature: string }>;

    NewSignature(
      user?: string | null,
      signature?: null
    ): TypedEventFilter<[string, string], { user: string; signature: string }>;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "RenewName(address,string)"(
      user?: string | null,
      name?: null
    ): TypedEventFilter<[string, string], { user: string; name: string }>;

    RenewName(
      user?: string | null,
      name?: null
    ): TypedEventFilter<[string, string], { user: string; name: string }>;

    "UnlockETH(address,string,uint256)"(
      user?: string | null,
      name?: null,
      unlockAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; name: string; unlockAmount: BigNumber }
    >;

    UnlockETH(
      user?: string | null,
      name?: null,
      unlockAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber],
      { user: string; name: string; unlockAmount: BigNumber }
    >;
  };

  estimateGas: {
    feePerChar(overrides?: CallOverrides): Promise<BigNumber>;

    lockAmount(overrides?: CallOverrides): Promise<BigNumber>;

    lockPeriod(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    records(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    registerName(
      name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    registerSignature(
      signature: BytesLike,
      cancelPending: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renewName(
      name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestSignatures(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setFeePerChar(
      _feePerChar: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLockAmount(
      _lockAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setLockPeriod(
      _lockPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWaitBlocks(
      _waitBlocks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    treasury(overrides?: CallOverrides): Promise<BigNumber>;

    unlock(
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockedEthers(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    waitBlocks(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawUnlockedEther(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    feePerChar(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockAmount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockPeriod(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    records(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    registerName(
      name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    registerSignature(
      signature: BytesLike,
      cancelPending: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renewName(
      name: string,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestSignatures(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setFeePerChar(
      _feePerChar: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLockAmount(
      _lockAmount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setLockPeriod(
      _lockPeriod: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTreasury(
      _treasury: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWaitBlocks(
      _waitBlocks: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    treasury(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlock(
      name: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockedEthers(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    waitBlocks(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdrawUnlockedEther(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}