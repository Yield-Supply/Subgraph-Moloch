// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Sync extends ethereum.Event {
  get params(): Sync__Params {
    return new Sync__Params(this);
  }
}

export class Sync__Params {
  _event: Sync;

  constructor(event: Sync) {
    this._event = event;
  }

  get currentProposalIndex(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Deposit extends ethereum.Event {
  get params(): Deposit__Params {
    return new Deposit__Params(this);
  }
}

export class Deposit__Params {
  _event: Deposit;

  constructor(event: Deposit) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sharesMinted(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get tokensDeposited(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Withdraw extends ethereum.Event {
  get params(): Withdraw__Params {
    return new Withdraw__Params(this);
  }
}

export class Withdraw__Params {
  _event: Withdraw;

  constructor(event: Withdraw) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sharesBurned(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class KeeperWithdraw extends ethereum.Event {
  get params(): KeeperWithdraw__Params {
    return new KeeperWithdraw__Params(this);
  }
}

export class KeeperWithdraw__Params {
  _event: KeeperWithdraw;

  constructor(event: KeeperWithdraw) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get sharesBurned(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get keeper(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AddKeepers extends ethereum.Event {
  get params(): AddKeepers__Params {
    return new AddKeepers__Params(this);
  }
}

export class AddKeepers__Params {
  _event: AddKeepers;

  constructor(event: AddKeepers) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get addedKeepers(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class RemoveKeepers extends ethereum.Event {
  get params(): RemoveKeepers__Params {
    return new RemoveKeepers__Params(this);
  }
}

export class RemoveKeepers__Params {
  _event: RemoveKeepers;

  constructor(event: RemoveKeepers) {
    this._event = event;
  }

  get donor(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get removedKeepers(): Array<Address> {
    return this._event.parameters[1].value.toAddressArray();
  }
}

export class SharesMinted extends ethereum.Event {
  get params(): SharesMinted__Params {
    return new SharesMinted__Params(this);
  }
}

export class SharesMinted__Params {
  _event: SharesMinted;

  constructor(event: SharesMinted) {
    this._event = event;
  }

  get sharesToMint(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get totalPoolShares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class SharesBurned extends ethereum.Event {
  get params(): SharesBurned__Params {
    return new SharesBurned__Params(this);
  }
}

export class SharesBurned__Params {
  _event: SharesBurned;

  constructor(event: SharesBurned) {
    this._event = event;
  }

  get sharesToBurn(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get totalPoolShares(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class MolochPool extends ethereum.SmartContract {
  static bind(address: Address): MolochPool {
    return new MolochPool("MolochPool", address);
  }

  currentProposalIndex(): BigInt {
    let result = super.call(
      "currentProposalIndex",
      "currentProposalIndex():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_currentProposalIndex(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "currentProposalIndex",
      "currentProposalIndex():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  moloch(): Address {
    let result = super.call("moloch", "moloch():(address)", []);

    return result[0].toAddress();
  }

  try_moloch(): ethereum.CallResult<Address> {
    let result = super.tryCall("moloch", "moloch():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  totalPoolShares(): BigInt {
    let result = super.call(
      "totalPoolShares",
      "totalPoolShares():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalPoolShares(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPoolShares",
      "totalPoolShares():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  approvedToken(): Address {
    let result = super.call("approvedToken", "approvedToken():(address)", []);

    return result[0].toAddress();
  }

  try_approvedToken(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "approvedToken",
      "approvedToken():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  donors(param0: Address): BigInt {
    let result = super.call("donors", "donors(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_donors(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("donors", "donors(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get sharesToBurn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}

export class AddKeepersCall extends ethereum.Call {
  get inputs(): AddKeepersCall__Inputs {
    return new AddKeepersCall__Inputs(this);
  }

  get outputs(): AddKeepersCall__Outputs {
    return new AddKeepersCall__Outputs(this);
  }
}

export class AddKeepersCall__Inputs {
  _call: AddKeepersCall;

  constructor(call: AddKeepersCall) {
    this._call = call;
  }

  get newKeepers(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class AddKeepersCall__Outputs {
  _call: AddKeepersCall;

  constructor(call: AddKeepersCall) {
    this._call = call;
  }
}

export class ActivateCall extends ethereum.Call {
  get inputs(): ActivateCall__Inputs {
    return new ActivateCall__Inputs(this);
  }

  get outputs(): ActivateCall__Outputs {
    return new ActivateCall__Outputs(this);
  }
}

export class ActivateCall__Inputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }

  get initialTokens(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get initialPoolShares(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ActivateCall__Outputs {
  _call: ActivateCall;

  constructor(call: ActivateCall) {
    this._call = call;
  }
}

export class KeeperWithdrawCall extends ethereum.Call {
  get inputs(): KeeperWithdrawCall__Inputs {
    return new KeeperWithdrawCall__Inputs(this);
  }

  get outputs(): KeeperWithdrawCall__Outputs {
    return new KeeperWithdrawCall__Outputs(this);
  }
}

export class KeeperWithdrawCall__Inputs {
  _call: KeeperWithdrawCall;

  constructor(call: KeeperWithdrawCall) {
    this._call = call;
  }

  get sharesToBurn(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get recipient(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class KeeperWithdrawCall__Outputs {
  _call: KeeperWithdrawCall;

  constructor(call: KeeperWithdrawCall) {
    this._call = call;
  }
}

export class SyncCall extends ethereum.Call {
  get inputs(): SyncCall__Inputs {
    return new SyncCall__Inputs(this);
  }

  get outputs(): SyncCall__Outputs {
    return new SyncCall__Outputs(this);
  }
}

export class SyncCall__Inputs {
  _call: SyncCall;

  constructor(call: SyncCall) {
    this._call = call;
  }

  get toIndex(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class SyncCall__Outputs {
  _call: SyncCall;

  constructor(call: SyncCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }

  get tokenAmount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class RemoveKeepersCall extends ethereum.Call {
  get inputs(): RemoveKeepersCall__Inputs {
    return new RemoveKeepersCall__Inputs(this);
  }

  get outputs(): RemoveKeepersCall__Outputs {
    return new RemoveKeepersCall__Outputs(this);
  }
}

export class RemoveKeepersCall__Inputs {
  _call: RemoveKeepersCall;

  constructor(call: RemoveKeepersCall) {
    this._call = call;
  }

  get keepersToRemove(): Array<Address> {
    return this._call.inputValues[0].value.toAddressArray();
  }
}

export class RemoveKeepersCall__Outputs {
  _call: RemoveKeepersCall;

  constructor(call: RemoveKeepersCall) {
    this._call = call;
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _moloch(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}
