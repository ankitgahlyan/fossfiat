import {
    Cell,
    Slice,
    Address,
    Builder,
    beginCell,
    // ComputeError,
    // TupleItem,
    TupleReader,
    Dictionary,
    contractAddress,
    address,
    ContractProvider,
    Sender,
    Contract,
    ContractABI,
    ABIType,
    ABIGetter,
    ABIReceiver,
    TupleBuilder,
    DictionaryValue
} from '@ton/core';

export type DataSize = {
    $$type: 'DataSize';
    cells: bigint;
    bits: bigint;
    refs: bigint;
}

export function storeDataSize(src: DataSize) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.cells, 257);
        b_0.storeInt(src.bits, 257);
        b_0.storeInt(src.refs, 257);
    };
}

export function loadDataSize(slice: Slice) {
    const sc_0 = slice;
    const _cells = sc_0.loadIntBig(257);
    const _bits = sc_0.loadIntBig(257);
    const _refs = sc_0.loadIntBig(257);
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function loadTupleDataSize(source: TupleReader) {
    const _cells = source.readBigNumber();
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function loadGetterTupleDataSize(source: TupleReader) {
    const _cells = source.readBigNumber();
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'DataSize' as const, cells: _cells, bits: _bits, refs: _refs };
}

export function storeTupleDataSize(source: DataSize) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.cells);
    builder.writeNumber(source.bits);
    builder.writeNumber(source.refs);
    return builder.build();
}

export function dictValueParserDataSize(): DictionaryValue<DataSize> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDataSize(src)).endCell());
        },
        parse: (src) => {
            return loadDataSize(src.loadRef().beginParse());
        }
    }
}

export type SignedBundle = {
    $$type: 'SignedBundle';
    signature: Buffer;
    signedData: Slice;
}

export function storeSignedBundle(src: SignedBundle) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBuffer(src.signature);
        b_0.storeBuilder(src.signedData.asBuilder());
    };
}

export function loadSignedBundle(slice: Slice) {
    const sc_0 = slice;
    const _signature = sc_0.loadBuffer(64);
    const _signedData = sc_0;
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function loadTupleSignedBundle(source: TupleReader) {
    const _signature = source.readBuffer();
    const _signedData = source.readCell().asSlice();
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function loadGetterTupleSignedBundle(source: TupleReader) {
    const _signature = source.readBuffer();
    const _signedData = source.readCell().asSlice();
    return { $$type: 'SignedBundle' as const, signature: _signature, signedData: _signedData };
}

export function storeTupleSignedBundle(source: SignedBundle) {
    const builder = new TupleBuilder();
    builder.writeBuffer(source.signature);
    builder.writeSlice(source.signedData.asCell());
    return builder.build();
}

export function dictValueParserSignedBundle(): DictionaryValue<SignedBundle> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSignedBundle(src)).endCell());
        },
        parse: (src) => {
            return loadSignedBundle(src.loadRef().beginParse());
        }
    }
}

export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
}

export function storeStateInit(src: StateInit) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeRef(src.code);
        b_0.storeRef(src.data);
    };
}

export function loadStateInit(slice: Slice) {
    const sc_0 = slice;
    const _code = sc_0.loadRef();
    const _data = sc_0.loadRef();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function loadGetterTupleStateInit(source: TupleReader) {
    const _code = source.readCell();
    const _data = source.readCell();
    return { $$type: 'StateInit' as const, code: _code, data: _data };
}

export function storeTupleStateInit(source: StateInit) {
    const builder = new TupleBuilder();
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    return builder.build();
}

export function dictValueParserStateInit(): DictionaryValue<StateInit> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStateInit(src)).endCell());
        },
        parse: (src) => {
            return loadStateInit(src.loadRef().beginParse());
        }
    }
}

export type Context = {
    $$type: 'Context';
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
}

export function storeContext(src: Context) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.bounceable);
        b_0.storeAddress(src.sender);
        b_0.storeInt(src.value, 257);
        b_0.storeRef(src.raw.asCell());
    };
}

export function loadContext(slice: Slice) {
    const sc_0 = slice;
    const _bounceable = sc_0.loadBit();
    const _sender = sc_0.loadAddress();
    const _value = sc_0.loadIntBig(257);
    const _raw = sc_0.loadRef().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function loadTupleContext(source: TupleReader) {
    const _bounceable = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function loadGetterTupleContext(source: TupleReader) {
    const _bounceable = source.readBoolean();
    const _sender = source.readAddress();
    const _value = source.readBigNumber();
    const _raw = source.readCell().asSlice();
    return { $$type: 'Context' as const, bounceable: _bounceable, sender: _sender, value: _value, raw: _raw };
}

export function storeTupleContext(source: Context) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.bounceable);
    builder.writeAddress(source.sender);
    builder.writeNumber(source.value);
    builder.writeSlice(source.raw.asCell());
    return builder.build();
}

export function dictValueParserContext(): DictionaryValue<Context> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeContext(src)).endCell());
        },
        parse: (src) => {
            return loadContext(src.loadRef().beginParse());
        }
    }
}

export type SendParameters = {
    $$type: 'SendParameters';
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
}

export function storeSendParameters(src: SendParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        if (src.code !== null && src.code !== undefined) { b_0.storeBit(true).storeRef(src.code); } else { b_0.storeBit(false); }
        if (src.data !== null && src.data !== undefined) { b_0.storeBit(true).storeRef(src.data); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeAddress(src.to);
        b_0.storeBit(src.bounce);
    };
}

export function loadSendParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _code = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _data = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _to = sc_0.loadAddress();
    const _bounce = sc_0.loadBit();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function loadTupleSendParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function loadGetterTupleSendParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _code = source.readCellOpt();
    const _data = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'SendParameters' as const, mode: _mode, body: _body, code: _code, data: _data, value: _value, to: _to, bounce: _bounce };
}

export function storeTupleSendParameters(source: SendParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeCell(source.code);
    builder.writeCell(source.data);
    builder.writeNumber(source.value);
    builder.writeAddress(source.to);
    builder.writeBoolean(source.bounce);
    return builder.build();
}

export function dictValueParserSendParameters(): DictionaryValue<SendParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSendParameters(src)).endCell());
        },
        parse: (src) => {
            return loadSendParameters(src.loadRef().beginParse());
        }
    }
}

export type MessageParameters = {
    $$type: 'MessageParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
}

export function storeMessageParameters(src: MessageParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeAddress(src.to);
        b_0.storeBit(src.bounce);
    };
}

export function loadMessageParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _to = sc_0.loadAddress();
    const _bounce = sc_0.loadBit();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function loadTupleMessageParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function loadGetterTupleMessageParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _to = source.readAddress();
    const _bounce = source.readBoolean();
    return { $$type: 'MessageParameters' as const, mode: _mode, body: _body, value: _value, to: _to, bounce: _bounce };
}

export function storeTupleMessageParameters(source: MessageParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeNumber(source.value);
    builder.writeAddress(source.to);
    builder.writeBoolean(source.bounce);
    return builder.build();
}

export function dictValueParserMessageParameters(): DictionaryValue<MessageParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMessageParameters(src)).endCell());
        },
        parse: (src) => {
            return loadMessageParameters(src.loadRef().beginParse());
        }
    }
}

export type DeployParameters = {
    $$type: 'DeployParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: StateInit;
}

export function storeDeployParameters(src: DeployParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.mode, 257);
        if (src.body !== null && src.body !== undefined) { b_0.storeBit(true).storeRef(src.body); } else { b_0.storeBit(false); }
        b_0.storeInt(src.value, 257);
        b_0.storeBit(src.bounce);
        b_0.store(storeStateInit(src.init));
    };
}

export function loadDeployParameters(slice: Slice) {
    const sc_0 = slice;
    const _mode = sc_0.loadIntBig(257);
    const _body = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _value = sc_0.loadIntBig(257);
    const _bounce = sc_0.loadBit();
    const _init = loadStateInit(sc_0);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function loadTupleDeployParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _bounce = source.readBoolean();
    const _init = loadTupleStateInit(source);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function loadGetterTupleDeployParameters(source: TupleReader) {
    const _mode = source.readBigNumber();
    const _body = source.readCellOpt();
    const _value = source.readBigNumber();
    const _bounce = source.readBoolean();
    const _init = loadGetterTupleStateInit(source);
    return { $$type: 'DeployParameters' as const, mode: _mode, body: _body, value: _value, bounce: _bounce, init: _init };
}

export function storeTupleDeployParameters(source: DeployParameters) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.mode);
    builder.writeCell(source.body);
    builder.writeNumber(source.value);
    builder.writeBoolean(source.bounce);
    builder.writeTuple(storeTupleStateInit(source.init));
    return builder.build();
}

export function dictValueParserDeployParameters(): DictionaryValue<DeployParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDeployParameters(src)).endCell());
        },
        parse: (src) => {
            return loadDeployParameters(src.loadRef().beginParse());
        }
    }
}

export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
}

export function storeStdAddress(src: StdAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 8);
        b_0.storeUint(src.address, 256);
    };
}

export function loadStdAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(8);
    const _address = sc_0.loadUintBig(256);
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function loadTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function loadGetterTupleStdAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readBigNumber();
    return { $$type: 'StdAddress' as const, workchain: _workchain, address: _address };
}

export function storeTupleStdAddress(source: StdAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeNumber(source.address);
    return builder.build();
}

export function dictValueParserStdAddress(): DictionaryValue<StdAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeStdAddress(src)).endCell());
        },
        parse: (src) => {
            return loadStdAddress(src.loadRef().beginParse());
        }
    }
}

export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
}

export function storeVarAddress(src: VarAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.workchain, 32);
        b_0.storeRef(src.address.asCell());
    };
}

export function loadVarAddress(slice: Slice) {
    const sc_0 = slice;
    const _workchain = sc_0.loadIntBig(32);
    const _address = sc_0.loadRef().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function loadTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function loadGetterTupleVarAddress(source: TupleReader) {
    const _workchain = source.readBigNumber();
    const _address = source.readCell().asSlice();
    return { $$type: 'VarAddress' as const, workchain: _workchain, address: _address };
}

export function storeTupleVarAddress(source: VarAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.workchain);
    builder.writeSlice(source.address.asCell());
    return builder.build();
}

export function dictValueParserVarAddress(): DictionaryValue<VarAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVarAddress(src)).endCell());
        },
        parse: (src) => {
            return loadVarAddress(src.loadRef().beginParse());
        }
    }
}

export type BasechainAddress = {
    $$type: 'BasechainAddress';
    hash: bigint | null;
}

export function storeBasechainAddress(src: BasechainAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        if (src.hash !== null && src.hash !== undefined) { b_0.storeBit(true).storeInt(src.hash, 257); } else { b_0.storeBit(false); }
    };
}

export function loadBasechainAddress(slice: Slice) {
    const sc_0 = slice;
    const _hash = sc_0.loadBit() ? sc_0.loadIntBig(257) : null;
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadTupleBasechainAddress(source: TupleReader) {
    const _hash = source.readBigNumberOpt();
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function loadGetterTupleBasechainAddress(source: TupleReader) {
    const _hash = source.readBigNumberOpt();
    return { $$type: 'BasechainAddress' as const, hash: _hash };
}

export function storeTupleBasechainAddress(source: BasechainAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.hash);
    return builder.build();
}

export function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeBasechainAddress(src)).endCell());
        },
        parse: (src) => {
            return loadBasechainAddress(src.loadRef().beginParse());
        }
    }
}

export type JettonWalletSharded$Data = {
    $$type: 'JettonWalletSharded$Data';
    owner: Address;
    ownerAfterRecovery: Address;
    minter: Address;
    nominee: Address;
    invitor: Address;
    invitor0: Address | null;
    balance: bigint;
    turnover: bigint;
    debts: Dictionary<Address, bigint>;
    debt: bigint;
    insurance: Insurance;
    invited: Dictionary<Address, bigint>;
    friends: Dictionary<Address, bigint>;
    closeFriendsAndVouched: Dictionary<Address, boolean>;
    closeFriendsCount: bigint;
    recoveryVouchersCount: bigint;
    pendingRequests: Dictionary<Address, bigint>;
    followers: Dictionary<Address, bigint>;
    followings: Dictionary<Address, bigint>;
    reports: Dictionary<Address, boolean>;
    reportReason: boolean;
    reporterCount: bigint;
    disputerCount: bigint;
    reportResolutionTime: bigint;
    connections: bigint;
    terminated: boolean;
    active: boolean;
    accountInitTime: bigint;
    lastTxnTime: bigint;
    lastMsgTo: Address;
    version: bigint;
    baseWalletCode: Cell;
}

export function storeJettonWalletSharded$Data(src: JettonWalletSharded$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.ownerAfterRecovery);
        b_0.storeAddress(src.minter);
        const b_1 = new Builder();
        b_1.storeAddress(src.nominee);
        b_1.storeAddress(src.invitor);
        b_1.storeAddress(src.invitor0);
        b_1.storeCoins(src.balance);
        const b_2 = new Builder();
        b_2.storeCoins(src.turnover);
        b_2.storeDict(src.debts, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4));
        b_2.storeCoins(src.debt);
        b_2.store(storeInsurance(src.insurance));
        b_2.storeDict(src.invited, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4));
        b_2.storeDict(src.friends, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4));
        const b_3 = new Builder();
        b_3.storeDict(src.closeFriendsAndVouched, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        b_3.storeUint(src.closeFriendsCount, 4);
        b_3.storeUint(src.recoveryVouchersCount, 4);
        b_3.storeDict(src.pendingRequests, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4));
        b_3.storeDict(src.followers, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4));
        const b_4 = new Builder();
        b_4.storeDict(src.followings, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4));
        b_4.storeDict(src.reports, Dictionary.Keys.Address(), Dictionary.Values.Bool());
        b_4.storeBit(src.reportReason);
        b_4.storeUint(src.reporterCount, 10);
        b_4.storeUint(src.disputerCount, 10);
        b_4.storeUint(src.reportResolutionTime, 32);
        b_4.storeUint(src.connections, 8);
        b_4.storeBit(src.terminated);
        b_4.storeBit(src.active);
        b_4.storeUint(src.accountInitTime, 32);
        b_4.storeUint(src.lastTxnTime, 32);
        b_4.storeAddress(src.lastMsgTo);
        b_4.storeUint(src.version, 10);
        b_4.storeRef(src.baseWalletCode);
        b_3.storeRef(b_4.endCell());
        b_2.storeRef(b_3.endCell());
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadJettonWalletSharded$Data(slice: Slice) {
    const sc_0 = slice;
    const _owner = sc_0.loadAddress();
    const _ownerAfterRecovery = sc_0.loadAddress();
    const _minter = sc_0.loadAddress();
    const sc_1 = sc_0.loadRef().beginParse();
    const _nominee = sc_1.loadAddress();
    const _invitor = sc_1.loadAddress();
    const _invitor0 = sc_1.loadMaybeAddress();
    const _balance = sc_1.loadCoins();
    const sc_2 = sc_1.loadRef().beginParse();
    const _turnover = sc_2.loadCoins();
    const _debts = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), sc_2);
    const _debt = sc_2.loadCoins();
    const _insurance = loadInsurance(sc_2);
    const _invited = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), sc_2);
    const _friends = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), sc_2);
    const sc_3 = sc_2.loadRef().beginParse();
    const _closeFriendsAndVouched = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_3);
    const _closeFriendsCount = sc_3.loadUintBig(4);
    const _recoveryVouchersCount = sc_3.loadUintBig(4);
    const _pendingRequests = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), sc_3);
    const _followers = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), sc_3);
    const sc_4 = sc_3.loadRef().beginParse();
    const _followings = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), sc_4);
    const _reports = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Bool(), sc_4);
    const _reportReason = sc_4.loadBit();
    const _reporterCount = sc_4.loadUintBig(10);
    const _disputerCount = sc_4.loadUintBig(10);
    const _reportResolutionTime = sc_4.loadUintBig(32);
    const _connections = sc_4.loadUintBig(8);
    const _terminated = sc_4.loadBit();
    const _active = sc_4.loadBit();
    const _accountInitTime = sc_4.loadUintBig(32);
    const _lastTxnTime = sc_4.loadUintBig(32);
    const _lastMsgTo = sc_4.loadAddress();
    const _version = sc_4.loadUintBig(10);
    const _baseWalletCode = sc_4.loadRef();
    return { $$type: 'JettonWalletSharded$Data' as const, owner: _owner, ownerAfterRecovery: _ownerAfterRecovery, minter: _minter, nominee: _nominee, invitor: _invitor, invitor0: _invitor0, balance: _balance, turnover: _turnover, debts: _debts, debt: _debt, insurance: _insurance, invited: _invited, friends: _friends, closeFriendsAndVouched: _closeFriendsAndVouched, closeFriendsCount: _closeFriendsCount, recoveryVouchersCount: _recoveryVouchersCount, pendingRequests: _pendingRequests, followers: _followers, followings: _followings, reports: _reports, reportReason: _reportReason, reporterCount: _reporterCount, disputerCount: _disputerCount, reportResolutionTime: _reportResolutionTime, connections: _connections, terminated: _terminated, active: _active, accountInitTime: _accountInitTime, lastTxnTime: _lastTxnTime, lastMsgTo: _lastMsgTo, version: _version, baseWalletCode: _baseWalletCode };
}

export function loadTupleJettonWalletSharded$Data(source: TupleReader) {
    const _owner = source.readAddress();
    const _ownerAfterRecovery = source.readAddress();
    const _minter = source.readAddress();
    const _nominee = source.readAddress();
    const _invitor = source.readAddress();
    const _invitor0 = source.readAddressOpt();
    const _balance = source.readBigNumber();
    const _turnover = source.readBigNumber();
    const _debts = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _debt = source.readBigNumber();
    const _insurance = loadTupleInsurance(source);
    const _invited = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _friends = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _closeFriendsAndVouched = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    source = source.readTuple();
    const _closeFriendsCount = source.readBigNumber();
    const _recoveryVouchersCount = source.readBigNumber();
    const _pendingRequests = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _followers = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _followings = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _reports = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    const _reportReason = source.readBoolean();
    const _reporterCount = source.readBigNumber();
    const _disputerCount = source.readBigNumber();
    const _reportResolutionTime = source.readBigNumber();
    const _connections = source.readBigNumber();
    const _terminated = source.readBoolean();
    const _active = source.readBoolean();
    const _accountInitTime = source.readBigNumber();
    source = source.readTuple();
    const _lastTxnTime = source.readBigNumber();
    const _lastMsgTo = source.readAddress();
    const _version = source.readBigNumber();
    const _baseWalletCode = source.readCell();
    return { $$type: 'JettonWalletSharded$Data' as const, owner: _owner, ownerAfterRecovery: _ownerAfterRecovery, minter: _minter, nominee: _nominee, invitor: _invitor, invitor0: _invitor0, balance: _balance, turnover: _turnover, debts: _debts, debt: _debt, insurance: _insurance, invited: _invited, friends: _friends, closeFriendsAndVouched: _closeFriendsAndVouched, closeFriendsCount: _closeFriendsCount, recoveryVouchersCount: _recoveryVouchersCount, pendingRequests: _pendingRequests, followers: _followers, followings: _followings, reports: _reports, reportReason: _reportReason, reporterCount: _reporterCount, disputerCount: _disputerCount, reportResolutionTime: _reportResolutionTime, connections: _connections, terminated: _terminated, active: _active, accountInitTime: _accountInitTime, lastTxnTime: _lastTxnTime, lastMsgTo: _lastMsgTo, version: _version, baseWalletCode: _baseWalletCode };
}

export function loadGetterTupleJettonWalletSharded$Data(source: TupleReader) {
    const _owner = source.readAddress();
    const _ownerAfterRecovery = source.readAddress();
    const _minter = source.readAddress();
    const _nominee = source.readAddress();
    const _invitor = source.readAddress();
    const _invitor0 = source.readAddressOpt();
    const _balance = source.readBigNumber();
    const _turnover = source.readBigNumber();
    const _debts = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _debt = source.readBigNumber();
    const _insurance = loadGetterTupleInsurance(source);
    const _invited = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _friends = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _closeFriendsAndVouched = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    const _closeFriendsCount = source.readBigNumber();
    const _recoveryVouchersCount = source.readBigNumber();
    const _pendingRequests = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _followers = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _followings = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4), source.readCellOpt());
    const _reports = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Bool(), source.readCellOpt());
    const _reportReason = source.readBoolean();
    const _reporterCount = source.readBigNumber();
    const _disputerCount = source.readBigNumber();
    const _reportResolutionTime = source.readBigNumber();
    const _connections = source.readBigNumber();
    const _terminated = source.readBoolean();
    const _active = source.readBoolean();
    const _accountInitTime = source.readBigNumber();
    const _lastTxnTime = source.readBigNumber();
    const _lastMsgTo = source.readAddress();
    const _version = source.readBigNumber();
    const _baseWalletCode = source.readCell();
    return { $$type: 'JettonWalletSharded$Data' as const, owner: _owner, ownerAfterRecovery: _ownerAfterRecovery, minter: _minter, nominee: _nominee, invitor: _invitor, invitor0: _invitor0, balance: _balance, turnover: _turnover, debts: _debts, debt: _debt, insurance: _insurance, invited: _invited, friends: _friends, closeFriendsAndVouched: _closeFriendsAndVouched, closeFriendsCount: _closeFriendsCount, recoveryVouchersCount: _recoveryVouchersCount, pendingRequests: _pendingRequests, followers: _followers, followings: _followings, reports: _reports, reportReason: _reportReason, reporterCount: _reporterCount, disputerCount: _disputerCount, reportResolutionTime: _reportResolutionTime, connections: _connections, terminated: _terminated, active: _active, accountInitTime: _accountInitTime, lastTxnTime: _lastTxnTime, lastMsgTo: _lastMsgTo, version: _version, baseWalletCode: _baseWalletCode };
}

export function storeTupleJettonWalletSharded$Data(source: JettonWalletSharded$Data) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.ownerAfterRecovery);
    builder.writeAddress(source.minter);
    builder.writeAddress(source.nominee);
    builder.writeAddress(source.invitor);
    builder.writeAddress(source.invitor0);
    builder.writeNumber(source.balance);
    builder.writeNumber(source.turnover);
    builder.writeCell(source.debts.size > 0 ? beginCell().storeDictDirect(source.debts, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4)).endCell() : null);
    builder.writeNumber(source.debt);
    builder.writeTuple(storeTupleInsurance(source.insurance));
    builder.writeCell(source.invited.size > 0 ? beginCell().storeDictDirect(source.invited, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4)).endCell() : null);
    builder.writeCell(source.friends.size > 0 ? beginCell().storeDictDirect(source.friends, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4)).endCell() : null);
    builder.writeCell(source.closeFriendsAndVouched.size > 0 ? beginCell().storeDictDirect(source.closeFriendsAndVouched, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
    builder.writeNumber(source.closeFriendsCount);
    builder.writeNumber(source.recoveryVouchersCount);
    builder.writeCell(source.pendingRequests.size > 0 ? beginCell().storeDictDirect(source.pendingRequests, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4)).endCell() : null);
    builder.writeCell(source.followers.size > 0 ? beginCell().storeDictDirect(source.followers, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4)).endCell() : null);
    builder.writeCell(source.followings.size > 0 ? beginCell().storeDictDirect(source.followings, Dictionary.Keys.Address(), Dictionary.Values.BigVarUint(4)).endCell() : null);
    builder.writeCell(source.reports.size > 0 ? beginCell().storeDictDirect(source.reports, Dictionary.Keys.Address(), Dictionary.Values.Bool()).endCell() : null);
    builder.writeBoolean(source.reportReason);
    builder.writeNumber(source.reporterCount);
    builder.writeNumber(source.disputerCount);
    builder.writeNumber(source.reportResolutionTime);
    builder.writeNumber(source.connections);
    builder.writeBoolean(source.terminated);
    builder.writeBoolean(source.active);
    builder.writeNumber(source.accountInitTime);
    builder.writeNumber(source.lastTxnTime);
    builder.writeAddress(source.lastMsgTo);
    builder.writeNumber(source.version);
    builder.writeCell(source.baseWalletCode);
    return builder.build();
}

export function dictValueParserJettonWalletSharded$Data(): DictionaryValue<JettonWalletSharded$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonWalletSharded$Data(src)).endCell());
        },
        parse: (src) => {
            return loadJettonWalletSharded$Data(src.loadRef().beginParse());
        }
    }
}

export type Insurance = {
    $$type: 'Insurance';
    emi: bigint;
    startStop: bigint;
}

export function storeInsurance(src: Insurance) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeCoins(src.emi);
        b_0.storeUint(src.startStop, 42);
    };
}

export function loadInsurance(slice: Slice) {
    const sc_0 = slice;
    const _emi = sc_0.loadCoins();
    const _startStop = sc_0.loadUintBig(42);
    return { $$type: 'Insurance' as const, emi: _emi, startStop: _startStop };
}

export function loadTupleInsurance(source: TupleReader) {
    const _emi = source.readBigNumber();
    const _startStop = source.readBigNumber();
    return { $$type: 'Insurance' as const, emi: _emi, startStop: _startStop };
}

export function loadGetterTupleInsurance(source: TupleReader) {
    const _emi = source.readBigNumber();
    const _startStop = source.readBigNumber();
    return { $$type: 'Insurance' as const, emi: _emi, startStop: _startStop };
}

export function storeTupleInsurance(source: Insurance) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.emi);
    builder.writeNumber(source.startStop);
    return builder.build();
}

export function dictValueParserInsurance(): DictionaryValue<Insurance> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInsurance(src)).endCell());
        },
        parse: (src) => {
            return loadInsurance(src.loadRef().beginParse());
        }
    }
}

export type JettonNotification = {
    $$type: 'JettonNotification';
    queryId: bigint;
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeJettonNotification(src: JettonNotification) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1935855772, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadJettonNotification(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1935855772) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'JettonNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleJettonNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleJettonNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleJettonNotification(source: JettonNotification) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserJettonNotification(): DictionaryValue<JettonNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonNotification(src)).endCell());
        },
        parse: (src) => {
            return loadJettonNotification(src.loadRef().beginParse());
        }
    }
}

export type JettonBurn = {
    $$type: 'JettonBurn';
    queryId: bigint;
    amount: bigint;
    responseDestination: Address | null;
    customPayload: Cell | null;
}

export function storeJettonBurn(src: JettonBurn) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1499400124, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.responseDestination);
        if (src.customPayload !== null && src.customPayload !== undefined) { b_0.storeBit(true).storeRef(src.customPayload); } else { b_0.storeBit(false); }
    };
}

export function loadJettonBurn(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1499400124) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _amount = sc_0.loadCoins();
    const _responseDestination = sc_0.loadMaybeAddress();
    const _customPayload = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'JettonBurn' as const, queryId: _queryId, amount: _amount, responseDestination: _responseDestination, customPayload: _customPayload };
}

export function loadTupleJettonBurn(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    return { $$type: 'JettonBurn' as const, queryId: _queryId, amount: _amount, responseDestination: _responseDestination, customPayload: _customPayload };
}

export function loadGetterTupleJettonBurn(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    return { $$type: 'JettonBurn' as const, queryId: _queryId, amount: _amount, responseDestination: _responseDestination, customPayload: _customPayload };
}

export function storeTupleJettonBurn(source: JettonBurn) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.responseDestination);
    builder.writeCell(source.customPayload);
    return builder.build();
}

export function dictValueParserJettonBurn(): DictionaryValue<JettonBurn> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonBurn(src)).endCell());
        },
        parse: (src) => {
            return loadJettonBurn(src.loadRef().beginParse());
        }
    }
}

export type JettonBurnNotification = {
    $$type: 'JettonBurnNotification';
    queryId: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
}

export function storeJettonBurnNotification(src: JettonBurnNotification) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2078119902, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.responseDestination);
    };
}

export function loadJettonBurnNotification(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2078119902) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _responseDestination = sc_0.loadMaybeAddress();
    return { $$type: 'JettonBurnNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, responseDestination: _responseDestination };
}

export function loadTupleJettonBurnNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    return { $$type: 'JettonBurnNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, responseDestination: _responseDestination };
}

export function loadGetterTupleJettonBurnNotification(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    return { $$type: 'JettonBurnNotification' as const, queryId: _queryId, amount: _amount, sender: _sender, responseDestination: _responseDestination };
}

export function storeTupleJettonBurnNotification(source: JettonBurnNotification) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeAddress(source.responseDestination);
    return builder.build();
}

export function dictValueParserJettonBurnNotification(): DictionaryValue<JettonBurnNotification> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonBurnNotification(src)).endCell());
        },
        parse: (src) => {
            return loadJettonBurnNotification(src.loadRef().beginParse());
        }
    }
}

export type ProvideWalletAddress = {
    $$type: 'ProvideWalletAddress';
    queryId: bigint;
    ownerAddress: Address;
    includeAddress: boolean;
}

export function storeProvideWalletAddress(src: ProvideWalletAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(745978227, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.ownerAddress);
        b_0.storeBit(src.includeAddress);
    };
}

export function loadProvideWalletAddress(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 745978227) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _ownerAddress = sc_0.loadAddress();
    const _includeAddress = sc_0.loadBit();
    return { $$type: 'ProvideWalletAddress' as const, queryId: _queryId, ownerAddress: _ownerAddress, includeAddress: _includeAddress };
}

export function loadTupleProvideWalletAddress(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _ownerAddress = source.readAddress();
    const _includeAddress = source.readBoolean();
    return { $$type: 'ProvideWalletAddress' as const, queryId: _queryId, ownerAddress: _ownerAddress, includeAddress: _includeAddress };
}

export function loadGetterTupleProvideWalletAddress(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _ownerAddress = source.readAddress();
    const _includeAddress = source.readBoolean();
    return { $$type: 'ProvideWalletAddress' as const, queryId: _queryId, ownerAddress: _ownerAddress, includeAddress: _includeAddress };
}

export function storeTupleProvideWalletAddress(source: ProvideWalletAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.ownerAddress);
    builder.writeBoolean(source.includeAddress);
    return builder.build();
}

export function dictValueParserProvideWalletAddress(): DictionaryValue<ProvideWalletAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProvideWalletAddress(src)).endCell());
        },
        parse: (src) => {
            return loadProvideWalletAddress(src.loadRef().beginParse());
        }
    }
}

export type TakeWalletAddress = {
    $$type: 'TakeWalletAddress';
    queryId: bigint;
    walletAddress: Address;
    ownerAddress: Cell | null;
}

export function storeTakeWalletAddress(src: TakeWalletAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3513996288, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.walletAddress);
        if (src.ownerAddress !== null && src.ownerAddress !== undefined) { b_0.storeBit(true).storeRef(src.ownerAddress); } else { b_0.storeBit(false); }
    };
}

export function loadTakeWalletAddress(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3513996288) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _walletAddress = sc_0.loadAddress();
    const _ownerAddress = sc_0.loadBit() ? sc_0.loadRef() : null;
    return { $$type: 'TakeWalletAddress' as const, queryId: _queryId, walletAddress: _walletAddress, ownerAddress: _ownerAddress };
}

export function loadTupleTakeWalletAddress(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _walletAddress = source.readAddress();
    const _ownerAddress = source.readCellOpt();
    return { $$type: 'TakeWalletAddress' as const, queryId: _queryId, walletAddress: _walletAddress, ownerAddress: _ownerAddress };
}

export function loadGetterTupleTakeWalletAddress(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _walletAddress = source.readAddress();
    const _ownerAddress = source.readCellOpt();
    return { $$type: 'TakeWalletAddress' as const, queryId: _queryId, walletAddress: _walletAddress, ownerAddress: _ownerAddress };
}

export function storeTupleTakeWalletAddress(source: TakeWalletAddress) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.walletAddress);
    builder.writeCell(source.ownerAddress);
    return builder.build();
}

export function dictValueParserTakeWalletAddress(): DictionaryValue<TakeWalletAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTakeWalletAddress(src)).endCell());
        },
        parse: (src) => {
            return loadTakeWalletAddress(src.loadRef().beginParse());
        }
    }
}

export type ProvideWalletBalance = {
    $$type: 'ProvideWalletBalance';
    receiver: Address;
    includeVerifyInfo: boolean;
}

export function storeProvideWalletBalance(src: ProvideWalletBalance) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2059982169, 32);
        b_0.storeAddress(src.receiver);
        b_0.storeBit(src.includeVerifyInfo);
    };
}

export function loadProvideWalletBalance(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2059982169) { throw Error('Invalid prefix'); }
    const _receiver = sc_0.loadAddress();
    const _includeVerifyInfo = sc_0.loadBit();
    return { $$type: 'ProvideWalletBalance' as const, receiver: _receiver, includeVerifyInfo: _includeVerifyInfo };
}

export function loadTupleProvideWalletBalance(source: TupleReader) {
    const _receiver = source.readAddress();
    const _includeVerifyInfo = source.readBoolean();
    return { $$type: 'ProvideWalletBalance' as const, receiver: _receiver, includeVerifyInfo: _includeVerifyInfo };
}

export function loadGetterTupleProvideWalletBalance(source: TupleReader) {
    const _receiver = source.readAddress();
    const _includeVerifyInfo = source.readBoolean();
    return { $$type: 'ProvideWalletBalance' as const, receiver: _receiver, includeVerifyInfo: _includeVerifyInfo };
}

export function storeTupleProvideWalletBalance(source: ProvideWalletBalance) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.receiver);
    builder.writeBoolean(source.includeVerifyInfo);
    return builder.build();
}

export function dictValueParserProvideWalletBalance(): DictionaryValue<ProvideWalletBalance> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProvideWalletBalance(src)).endCell());
        },
        parse: (src) => {
            return loadProvideWalletBalance(src.loadRef().beginParse());
        }
    }
}

export type VerifyInfo = {
    $$type: 'VerifyInfo';
    owner: Address;
    minter: Address;
    code: Cell;
}

export function storeVerifyInfo(src: VerifyInfo) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.minter);
        b_0.storeRef(src.code);
    };
}

export function loadVerifyInfo(slice: Slice) {
    const sc_0 = slice;
    const _owner = sc_0.loadAddress();
    const _minter = sc_0.loadAddress();
    const _code = sc_0.loadRef();
    return { $$type: 'VerifyInfo' as const, owner: _owner, minter: _minter, code: _code };
}

export function loadTupleVerifyInfo(source: TupleReader) {
    const _owner = source.readAddress();
    const _minter = source.readAddress();
    const _code = source.readCell();
    return { $$type: 'VerifyInfo' as const, owner: _owner, minter: _minter, code: _code };
}

export function loadGetterTupleVerifyInfo(source: TupleReader) {
    const _owner = source.readAddress();
    const _minter = source.readAddress();
    const _code = source.readCell();
    return { $$type: 'VerifyInfo' as const, owner: _owner, minter: _minter, code: _code };
}

export function storeTupleVerifyInfo(source: VerifyInfo) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.owner);
    builder.writeAddress(source.minter);
    builder.writeCell(source.code);
    return builder.build();
}

export function dictValueParserVerifyInfo(): DictionaryValue<VerifyInfo> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVerifyInfo(src)).endCell());
        },
        parse: (src) => {
            return loadVerifyInfo(src.loadRef().beginParse());
        }
    }
}

export type TakeWalletBalance = {
    $$type: 'TakeWalletBalance';
    balance: bigint;
    verifyInfo: VerifyInfo | null;
}

export function storeTakeWalletBalance(src: TakeWalletBalance) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3396861378, 32);
        b_0.storeCoins(src.balance);
        if (src.verifyInfo !== null && src.verifyInfo !== undefined) { b_0.storeBit(true); b_0.store(storeVerifyInfo(src.verifyInfo)); } else { b_0.storeBit(false); }
    };
}

export function loadTakeWalletBalance(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3396861378) { throw Error('Invalid prefix'); }
    const _balance = sc_0.loadCoins();
    const _verifyInfo = sc_0.loadBit() ? loadVerifyInfo(sc_0) : null;
    return { $$type: 'TakeWalletBalance' as const, balance: _balance, verifyInfo: _verifyInfo };
}

export function loadTupleTakeWalletBalance(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _verifyInfo_p = source.readTupleOpt();
    const _verifyInfo = _verifyInfo_p ? loadTupleVerifyInfo(_verifyInfo_p) : null;
    return { $$type: 'TakeWalletBalance' as const, balance: _balance, verifyInfo: _verifyInfo };
}

export function loadGetterTupleTakeWalletBalance(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _verifyInfo_p = source.readTupleOpt();
    const _verifyInfo = _verifyInfo_p ? loadTupleVerifyInfo(_verifyInfo_p) : null;
    return { $$type: 'TakeWalletBalance' as const, balance: _balance, verifyInfo: _verifyInfo };
}

export function storeTupleTakeWalletBalance(source: TakeWalletBalance) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    if (source.verifyInfo !== null && source.verifyInfo !== undefined) {
        builder.writeTuple(storeTupleVerifyInfo(source.verifyInfo));
    } else {
        builder.writeTuple(null);
    }
    return builder.build();
}

export function dictValueParserTakeWalletBalance(): DictionaryValue<TakeWalletBalance> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTakeWalletBalance(src)).endCell());
        },
        parse: (src) => {
            return loadTakeWalletBalance(src.loadRef().beginParse());
        }
    }
}

export type Mint = {
    $$type: 'Mint';
    queryId: bigint;
    receiver: Address;
    mintMessage: JettonTransferInternal;
}

export function storeMint(src: Mint) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1680571655, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.receiver);
        const b_1 = new Builder();
        b_1.store(storeJettonTransferInternal(src.mintMessage));
        b_0.storeRef(b_1.endCell());
    };
}

export function loadMint(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1680571655) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _receiver = sc_0.loadAddress();
    const sc_1 = sc_0.loadRef().beginParse();
    const _mintMessage = loadJettonTransferInternal(sc_1);
    return { $$type: 'Mint' as const, queryId: _queryId, receiver: _receiver, mintMessage: _mintMessage };
}

export function loadTupleMint(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _receiver = source.readAddress();
    const _mintMessage = loadTupleJettonTransferInternal(source);
    return { $$type: 'Mint' as const, queryId: _queryId, receiver: _receiver, mintMessage: _mintMessage };
}

export function loadGetterTupleMint(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _receiver = source.readAddress();
    const _mintMessage = loadGetterTupleJettonTransferInternal(source);
    return { $$type: 'Mint' as const, queryId: _queryId, receiver: _receiver, mintMessage: _mintMessage };
}

export function storeTupleMint(source: Mint) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.receiver);
    builder.writeTuple(storeTupleJettonTransferInternal(source.mintMessage));
    return builder.build();
}

export function dictValueParserMint(): DictionaryValue<Mint> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMint(src)).endCell());
        },
        parse: (src) => {
            return loadMint(src.loadRef().beginParse());
        }
    }
}

export type JettonTransfer = {
    $$type: 'JettonTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
}

export function storeJettonTransfer(src: JettonTransfer) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(260734629, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.destination);
        b_0.storeAddress(src.responseDestination);
        if (src.customPayload !== null && src.customPayload !== undefined) { b_0.storeBit(true).storeRef(src.customPayload); } else { b_0.storeBit(false); }
        b_0.storeCoins(src.forwardTonAmount);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadJettonTransfer(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 260734629) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _amount = sc_0.loadCoins();
    const _destination = sc_0.loadAddress();
    const _responseDestination = sc_0.loadMaybeAddress();
    const _customPayload = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _forwardTonAmount = sc_0.loadCoins();
    const _forwardPayload = sc_0;
    return { $$type: 'JettonTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function loadTupleJettonTransfer(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _destination = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function loadGetterTupleJettonTransfer(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _destination = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _customPayload = source.readCellOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonTransfer' as const, queryId: _queryId, amount: _amount, destination: _destination, responseDestination: _responseDestination, customPayload: _customPayload, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function storeTupleJettonTransfer(source: JettonTransfer) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.destination);
    builder.writeAddress(source.responseDestination);
    builder.writeCell(source.customPayload);
    builder.writeNumber(source.forwardTonAmount);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserJettonTransfer(): DictionaryValue<JettonTransfer> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonTransfer(src)).endCell());
        },
        parse: (src) => {
            return loadJettonTransfer(src.loadRef().beginParse());
        }
    }
}

export type JettonTransferInternal = {
    $$type: 'JettonTransferInternal';
    queryId: bigint;
    walletVersion: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
}

export function storeJettonTransferInternal(src: JettonTransferInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(395134233, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeUint(src.walletVersion, 10);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.responseDestination);
        b_0.storeCoins(src.forwardTonAmount);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadJettonTransferInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 395134233) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _walletVersion = sc_0.loadUintBig(10);
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _responseDestination = sc_0.loadMaybeAddress();
    const _forwardTonAmount = sc_0.loadCoins();
    const _forwardPayload = sc_0;
    return { $$type: 'JettonTransferInternal' as const, queryId: _queryId, walletVersion: _walletVersion, amount: _amount, sender: _sender, responseDestination: _responseDestination, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function loadTupleJettonTransferInternal(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _walletVersion = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonTransferInternal' as const, queryId: _queryId, walletVersion: _walletVersion, amount: _amount, sender: _sender, responseDestination: _responseDestination, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function loadGetterTupleJettonTransferInternal(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _walletVersion = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _responseDestination = source.readAddressOpt();
    const _forwardTonAmount = source.readBigNumber();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'JettonTransferInternal' as const, queryId: _queryId, walletVersion: _walletVersion, amount: _amount, sender: _sender, responseDestination: _responseDestination, forwardTonAmount: _forwardTonAmount, forwardPayload: _forwardPayload };
}

export function storeTupleJettonTransferInternal(source: JettonTransferInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeNumber(source.walletVersion);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeAddress(source.responseDestination);
    builder.writeNumber(source.forwardTonAmount);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserJettonTransferInternal(): DictionaryValue<JettonTransferInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonTransferInternal(src)).endCell());
        },
        parse: (src) => {
            return loadJettonTransferInternal(src.loadRef().beginParse());
        }
    }
}

export type JettonExcesses = {
    $$type: 'JettonExcesses';
    queryId: bigint;
}

export function storeJettonExcesses(src: JettonExcesses) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3576854235, 32);
        b_0.storeUint(src.queryId, 64);
    };
}

export function loadJettonExcesses(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3576854235) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    return { $$type: 'JettonExcesses' as const, queryId: _queryId };
}

export function loadTupleJettonExcesses(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'JettonExcesses' as const, queryId: _queryId };
}

export function loadGetterTupleJettonExcesses(source: TupleReader) {
    const _queryId = source.readBigNumber();
    return { $$type: 'JettonExcesses' as const, queryId: _queryId };
}

export function storeTupleJettonExcesses(source: JettonExcesses) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    return builder.build();
}

export function dictValueParserJettonExcesses(): DictionaryValue<JettonExcesses> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonExcesses(src)).endCell());
        },
        parse: (src) => {
            return loadJettonExcesses(src.loadRef().beginParse());
        }
    }
}

export type ClaimTON = {
    $$type: 'ClaimTON';
    receiver: Address;
}

export function storeClaimTON(src: ClaimTON) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(60010958, 32);
        b_0.storeAddress(src.receiver);
    };
}

export function loadClaimTON(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 60010958) { throw Error('Invalid prefix'); }
    const _receiver = sc_0.loadAddress();
    return { $$type: 'ClaimTON' as const, receiver: _receiver };
}

export function loadTupleClaimTON(source: TupleReader) {
    const _receiver = source.readAddress();
    return { $$type: 'ClaimTON' as const, receiver: _receiver };
}

export function loadGetterTupleClaimTON(source: TupleReader) {
    const _receiver = source.readAddress();
    return { $$type: 'ClaimTON' as const, receiver: _receiver };
}

export function storeTupleClaimTON(source: ClaimTON) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.receiver);
    return builder.build();
}

export function dictValueParserClaimTON(): DictionaryValue<ClaimTON> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeClaimTON(src)).endCell());
        },
        parse: (src) => {
            return loadClaimTON(src.loadRef().beginParse());
        }
    }
}

export type RequestUpgradeCode = {
    $$type: 'RequestUpgradeCode';
    version: bigint;
}

export function storeRequestUpgradeCode(src: RequestUpgradeCode) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(56, 32);
        b_0.storeUint(src.version, 10);
    };
}

export function loadRequestUpgradeCode(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 56) { throw Error('Invalid prefix'); }
    const _version = sc_0.loadUintBig(10);
    return { $$type: 'RequestUpgradeCode' as const, version: _version };
}

export function loadTupleRequestUpgradeCode(source: TupleReader) {
    const _version = source.readBigNumber();
    return { $$type: 'RequestUpgradeCode' as const, version: _version };
}

export function loadGetterTupleRequestUpgradeCode(source: TupleReader) {
    const _version = source.readBigNumber();
    return { $$type: 'RequestUpgradeCode' as const, version: _version };
}

export function storeTupleRequestUpgradeCode(source: RequestUpgradeCode) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.version);
    return builder.build();
}

export function dictValueParserRequestUpgradeCode(): DictionaryValue<RequestUpgradeCode> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeRequestUpgradeCode(src)).endCell());
        },
        parse: (src) => {
            return loadRequestUpgradeCode(src.loadRef().beginParse());
        }
    }
}

export type Upgrade = {
    $$type: 'Upgrade';
    rootVersion: bigint | null;
    walletVersion: bigint | null;
    sender: Address | null;
    newRootData: Cell | null;
    newRootCode: Cell | null;
    newWalletData: Cell | null;
    newWalletCode: Cell | null;
}

export function storeUpgrade(src: Upgrade) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(621336170, 32);
        if (src.rootVersion !== null && src.rootVersion !== undefined) { b_0.storeBit(true).storeUint(src.rootVersion, 10); } else { b_0.storeBit(false); }
        if (src.walletVersion !== null && src.walletVersion !== undefined) { b_0.storeBit(true).storeUint(src.walletVersion, 10); } else { b_0.storeBit(false); }
        b_0.storeAddress(src.sender);
        if (src.newRootData !== null && src.newRootData !== undefined) { b_0.storeBit(true).storeRef(src.newRootData); } else { b_0.storeBit(false); }
        if (src.newRootCode !== null && src.newRootCode !== undefined) { b_0.storeBit(true).storeRef(src.newRootCode); } else { b_0.storeBit(false); }
        const b_1 = new Builder();
        if (src.newWalletData !== null && src.newWalletData !== undefined) { b_1.storeBit(true).storeRef(src.newWalletData); } else { b_1.storeBit(false); }
        if (src.newWalletCode !== null && src.newWalletCode !== undefined) { b_1.storeBit(true).storeRef(src.newWalletCode); } else { b_1.storeBit(false); }
        b_0.storeRef(b_1.endCell());
    };
}

export function loadUpgrade(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 621336170) { throw Error('Invalid prefix'); }
    const _rootVersion = sc_0.loadBit() ? sc_0.loadUintBig(10) : null;
    const _walletVersion = sc_0.loadBit() ? sc_0.loadUintBig(10) : null;
    const _sender = sc_0.loadMaybeAddress();
    const _newRootData = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _newRootCode = sc_0.loadBit() ? sc_0.loadRef() : null;
    const sc_1 = sc_0.loadRef().beginParse();
    const _newWalletData = sc_1.loadBit() ? sc_1.loadRef() : null;
    const _newWalletCode = sc_1.loadBit() ? sc_1.loadRef() : null;
    return { $$type: 'Upgrade' as const, rootVersion: _rootVersion, walletVersion: _walletVersion, sender: _sender, newRootData: _newRootData, newRootCode: _newRootCode, newWalletData: _newWalletData, newWalletCode: _newWalletCode };
}

export function loadTupleUpgrade(source: TupleReader) {
    const _rootVersion = source.readBigNumberOpt();
    const _walletVersion = source.readBigNumberOpt();
    const _sender = source.readAddressOpt();
    const _newRootData = source.readCellOpt();
    const _newRootCode = source.readCellOpt();
    const _newWalletData = source.readCellOpt();
    const _newWalletCode = source.readCellOpt();
    return { $$type: 'Upgrade' as const, rootVersion: _rootVersion, walletVersion: _walletVersion, sender: _sender, newRootData: _newRootData, newRootCode: _newRootCode, newWalletData: _newWalletData, newWalletCode: _newWalletCode };
}

export function loadGetterTupleUpgrade(source: TupleReader) {
    const _rootVersion = source.readBigNumberOpt();
    const _walletVersion = source.readBigNumberOpt();
    const _sender = source.readAddressOpt();
    const _newRootData = source.readCellOpt();
    const _newRootCode = source.readCellOpt();
    const _newWalletData = source.readCellOpt();
    const _newWalletCode = source.readCellOpt();
    return { $$type: 'Upgrade' as const, rootVersion: _rootVersion, walletVersion: _walletVersion, sender: _sender, newRootData: _newRootData, newRootCode: _newRootCode, newWalletData: _newWalletData, newWalletCode: _newWalletCode };
}

export function storeTupleUpgrade(source: Upgrade) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.rootVersion);
    builder.writeNumber(source.walletVersion);
    builder.writeAddress(source.sender);
    builder.writeCell(source.newRootData);
    builder.writeCell(source.newRootCode);
    builder.writeCell(source.newWalletData);
    builder.writeCell(source.newWalletCode);
    return builder.build();
}

export function dictValueParserUpgrade(): DictionaryValue<Upgrade> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUpgrade(src)).endCell());
        },
        parse: (src) => {
            return loadUpgrade(src.loadRef().beginParse());
        }
    }
}

export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
}

export function storeChangeOwner(src: ChangeOwner) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeAddress(src.newOwner);
    };
}

export function loadChangeOwner(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _newOwner = sc_0.loadAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export function loadTupleChangeOwner(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export function loadGetterTupleChangeOwner(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _newOwner = source.readAddress();
    return { $$type: 'ChangeOwner' as const, queryId: _queryId, newOwner: _newOwner };
}

export function storeTupleChangeOwner(source: ChangeOwner) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeAddress(source.newOwner);
    return builder.build();
}

export function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeOwner(src)).endCell());
        },
        parse: (src) => {
            return loadChangeOwner(src.loadRef().beginParse());
        }
    }
}

export type InviteInternal = {
    $$type: 'InviteInternal';
    version: bigint;
    amount: bigint;
    sender: Address;
    invitor: Address;
    currentWalletCode: Cell;
    forwardPayload: Slice;
}

export function storeInviteInternal(src: InviteInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(1, 32);
        b_0.storeUint(src.version, 10);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.invitor);
        b_0.storeRef(src.currentWalletCode);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadInviteInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 1) { throw Error('Invalid prefix'); }
    const _version = sc_0.loadUintBig(10);
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _invitor = sc_0.loadAddress();
    const _currentWalletCode = sc_0.loadRef();
    const _forwardPayload = sc_0;
    return { $$type: 'InviteInternal' as const, version: _version, amount: _amount, sender: _sender, invitor: _invitor, currentWalletCode: _currentWalletCode, forwardPayload: _forwardPayload };
}

export function loadTupleInviteInternal(source: TupleReader) {
    const _version = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _invitor = source.readAddress();
    const _currentWalletCode = source.readCell();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'InviteInternal' as const, version: _version, amount: _amount, sender: _sender, invitor: _invitor, currentWalletCode: _currentWalletCode, forwardPayload: _forwardPayload };
}

export function loadGetterTupleInviteInternal(source: TupleReader) {
    const _version = source.readBigNumber();
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _invitor = source.readAddress();
    const _currentWalletCode = source.readCell();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'InviteInternal' as const, version: _version, amount: _amount, sender: _sender, invitor: _invitor, currentWalletCode: _currentWalletCode, forwardPayload: _forwardPayload };
}

export function storeTupleInviteInternal(source: InviteInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.version);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeAddress(source.invitor);
    builder.writeCell(source.currentWalletCode);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserInviteInternal(): DictionaryValue<InviteInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInviteInternal(src)).endCell());
        },
        parse: (src) => {
            return loadInviteInternal(src.loadRef().beginParse());
        }
    }
}

export type Follow = {
    $$type: 'Follow';
    target: Address;
    amount: bigint;
}

export function storeFollow(src: Follow) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(2, 32);
        b_0.storeAddress(src.target);
        b_0.storeCoins(src.amount);
    };
}

export function loadFollow(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 2) { throw Error('Invalid prefix'); }
    const _target = sc_0.loadAddress();
    const _amount = sc_0.loadCoins();
    return { $$type: 'Follow' as const, target: _target, amount: _amount };
}

export function loadTupleFollow(source: TupleReader) {
    const _target = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'Follow' as const, target: _target, amount: _amount };
}

export function loadGetterTupleFollow(source: TupleReader) {
    const _target = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'Follow' as const, target: _target, amount: _amount };
}

export function storeTupleFollow(source: Follow) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.target);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserFollow(): DictionaryValue<Follow> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFollow(src)).endCell());
        },
        parse: (src) => {
            return loadFollow(src.loadRef().beginParse());
        }
    }
}

export type FollowInternal = {
    $$type: 'FollowInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeFollowInternal(src: FollowInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(23, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadFollowInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 23) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'FollowInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleFollowInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'FollowInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleFollowInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'FollowInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleFollowInternal(source: FollowInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserFollowInternal(): DictionaryValue<FollowInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFollowInternal(src)).endCell());
        },
        parse: (src) => {
            return loadFollowInternal(src.loadRef().beginParse());
        }
    }
}

export type Unfollow = {
    $$type: 'Unfollow';
    target: Address;
    amount: bigint;
}

export function storeUnfollow(src: Unfollow) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(21, 32);
        b_0.storeAddress(src.target);
        b_0.storeUint(src.amount, 16);
    };
}

export function loadUnfollow(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 21) { throw Error('Invalid prefix'); }
    const _target = sc_0.loadAddress();
    const _amount = sc_0.loadUintBig(16);
    return { $$type: 'Unfollow' as const, target: _target, amount: _amount };
}

export function loadTupleUnfollow(source: TupleReader) {
    const _target = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'Unfollow' as const, target: _target, amount: _amount };
}

export function loadGetterTupleUnfollow(source: TupleReader) {
    const _target = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'Unfollow' as const, target: _target, amount: _amount };
}

export function storeTupleUnfollow(source: Unfollow) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.target);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserUnfollow(): DictionaryValue<Unfollow> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUnfollow(src)).endCell());
        },
        parse: (src) => {
            return loadUnfollow(src.loadRef().beginParse());
        }
    }
}

export type UnfollowInternal = {
    $$type: 'UnfollowInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeUnfollowInternal(src: UnfollowInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(5, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadUnfollowInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 5) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'UnfollowInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleUnfollowInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'UnfollowInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleUnfollowInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'UnfollowInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleUnfollowInternal(source: UnfollowInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserUnfollowInternal(): DictionaryValue<UnfollowInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUnfollowInternal(src)).endCell());
        },
        parse: (src) => {
            return loadUnfollowInternal(src.loadRef().beginParse());
        }
    }
}

export type FriendRequestInternal = {
    $$type: 'FriendRequestInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeFriendRequestInternal(src: FriendRequestInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(6, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadFriendRequestInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 6) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'FriendRequestInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleFriendRequestInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'FriendRequestInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleFriendRequestInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'FriendRequestInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleFriendRequestInternal(source: FriendRequestInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserFriendRequestInternal(): DictionaryValue<FriendRequestInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFriendRequestInternal(src)).endCell());
        },
        parse: (src) => {
            return loadFriendRequestInternal(src.loadRef().beginParse());
        }
    }
}

export type ConfirmRequestInternal = {
    $$type: 'ConfirmRequestInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeConfirmRequestInternal(src: ConfirmRequestInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(7, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadConfirmRequestInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 7) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'ConfirmRequestInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleConfirmRequestInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ConfirmRequestInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleConfirmRequestInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ConfirmRequestInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleConfirmRequestInternal(source: ConfirmRequestInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserConfirmRequestInternal(): DictionaryValue<ConfirmRequestInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeConfirmRequestInternal(src)).endCell());
        },
        parse: (src) => {
            return loadConfirmRequestInternal(src.loadRef().beginParse());
        }
    }
}

export type ReportInternal = {
    $$type: 'ReportInternal';
    amount: bigint;
    reason: boolean;
    sender: Address;
    forwardPayload: Slice;
}

export function storeReportInternal(src: ReportInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(8, 32);
        b_0.storeCoins(src.amount);
        b_0.storeBit(src.reason);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadReportInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 8) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _reason = sc_0.loadBit();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'ReportInternal' as const, amount: _amount, reason: _reason, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleReportInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _reason = source.readBoolean();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ReportInternal' as const, amount: _amount, reason: _reason, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleReportInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _reason = source.readBoolean();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ReportInternal' as const, amount: _amount, reason: _reason, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleReportInternal(source: ReportInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeBoolean(source.reason);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserReportInternal(): DictionaryValue<ReportInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReportInternal(src)).endCell());
        },
        parse: (src) => {
            return loadReportInternal(src.loadRef().beginParse());
        }
    }
}

export type DisputeInternal = {
    $$type: 'DisputeInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeDisputeInternal(src: DisputeInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(9, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadDisputeInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 9) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'DisputeInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleDisputeInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'DisputeInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleDisputeInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'DisputeInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleDisputeInternal(source: DisputeInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserDisputeInternal(): DictionaryValue<DisputeInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDisputeInternal(src)).endCell());
        },
        parse: (src) => {
            return loadDisputeInternal(src.loadRef().beginParse());
        }
    }
}

export type ResolutionInternal = {
    $$type: 'ResolutionInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeResolutionInternal(src: ResolutionInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(10, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadResolutionInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 10) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'ResolutionInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleResolutionInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ResolutionInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleResolutionInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ResolutionInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleResolutionInternal(source: ResolutionInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserResolutionInternal(): DictionaryValue<ResolutionInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeResolutionInternal(src)).endCell());
        },
        parse: (src) => {
            return loadResolutionInternal(src.loadRef().beginParse());
        }
    }
}

export type Report = {
    $$type: 'Report';
    target: Address;
    reason: boolean;
}

export function storeReport(src: Report) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(17, 32);
        b_0.storeAddress(src.target);
        b_0.storeBit(src.reason);
    };
}

export function loadReport(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 17) { throw Error('Invalid prefix'); }
    const _target = sc_0.loadAddress();
    const _reason = sc_0.loadBit();
    return { $$type: 'Report' as const, target: _target, reason: _reason };
}

export function loadTupleReport(source: TupleReader) {
    const _target = source.readAddress();
    const _reason = source.readBoolean();
    return { $$type: 'Report' as const, target: _target, reason: _reason };
}

export function loadGetterTupleReport(source: TupleReader) {
    const _target = source.readAddress();
    const _reason = source.readBoolean();
    return { $$type: 'Report' as const, target: _target, reason: _reason };
}

export function storeTupleReport(source: Report) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.target);
    builder.writeBoolean(source.reason);
    return builder.build();
}

export function dictValueParserReport(): DictionaryValue<Report> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReport(src)).endCell());
        },
        parse: (src) => {
            return loadReport(src.loadRef().beginParse());
        }
    }
}

export type Dispute = {
    $$type: 'Dispute';
    target: Address;
}

export function storeDispute(src: Dispute) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(18, 32);
        b_0.storeAddress(src.target);
    };
}

export function loadDispute(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 18) { throw Error('Invalid prefix'); }
    const _target = sc_0.loadAddress();
    return { $$type: 'Dispute' as const, target: _target };
}

export function loadTupleDispute(source: TupleReader) {
    const _target = source.readAddress();
    return { $$type: 'Dispute' as const, target: _target };
}

export function loadGetterTupleDispute(source: TupleReader) {
    const _target = source.readAddress();
    return { $$type: 'Dispute' as const, target: _target };
}

export function storeTupleDispute(source: Dispute) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.target);
    return builder.build();
}

export function dictValueParserDispute(): DictionaryValue<Dispute> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeDispute(src)).endCell());
        },
        parse: (src) => {
            return loadDispute(src.loadRef().beginParse());
        }
    }
}

export type ProcessComplaint = {
    $$type: 'ProcessComplaint';
    target: Address;
}

export function storeProcessComplaint(src: ProcessComplaint) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(19, 32);
        b_0.storeAddress(src.target);
    };
}

export function loadProcessComplaint(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 19) { throw Error('Invalid prefix'); }
    const _target = sc_0.loadAddress();
    return { $$type: 'ProcessComplaint' as const, target: _target };
}

export function loadTupleProcessComplaint(source: TupleReader) {
    const _target = source.readAddress();
    return { $$type: 'ProcessComplaint' as const, target: _target };
}

export function loadGetterTupleProcessComplaint(source: TupleReader) {
    const _target = source.readAddress();
    return { $$type: 'ProcessComplaint' as const, target: _target };
}

export function storeTupleProcessComplaint(source: ProcessComplaint) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.target);
    return builder.build();
}

export function dictValueParserProcessComplaint(): DictionaryValue<ProcessComplaint> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeProcessComplaint(src)).endCell());
        },
        parse: (src) => {
            return loadProcessComplaint(src.loadRef().beginParse());
        }
    }
}

export type AdminAction = {
    $$type: 'AdminAction';
    action: bigint;
    value: bigint;
}

export function storeAdminAction(src: AdminAction) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(20, 32);
        b_0.storeUint(src.action, 8);
        b_0.storeCoins(src.value);
    };
}

export function loadAdminAction(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 20) { throw Error('Invalid prefix'); }
    const _action = sc_0.loadUintBig(8);
    const _value = sc_0.loadCoins();
    return { $$type: 'AdminAction' as const, action: _action, value: _value };
}

export function loadTupleAdminAction(source: TupleReader) {
    const _action = source.readBigNumber();
    const _value = source.readBigNumber();
    return { $$type: 'AdminAction' as const, action: _action, value: _value };
}

export function loadGetterTupleAdminAction(source: TupleReader) {
    const _action = source.readBigNumber();
    const _value = source.readBigNumber();
    return { $$type: 'AdminAction' as const, action: _action, value: _value };
}

export function storeTupleAdminAction(source: AdminAction) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.action);
    builder.writeNumber(source.value);
    return builder.build();
}

export function dictValueParserAdminAction(): DictionaryValue<AdminAction> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAdminAction(src)).endCell());
        },
        parse: (src) => {
            return loadAdminAction(src.loadRef().beginParse());
        }
    }
}

export type FriendsAndFollowings = {
    $$type: 'FriendsAndFollowings';
    friends: Cell | null;
    followings: Cell | null;
    followers: Cell | null;
    invited: Cell | null;
    pendingRequests: Cell | null;
    debts: Cell | null;
    reports: Cell | null;
}

export function storeFriendsAndFollowings(src: FriendsAndFollowings) {
    return (builder: Builder) => {
        const b_0 = builder;
        if (src.friends !== null && src.friends !== undefined) { b_0.storeBit(true).storeRef(src.friends); } else { b_0.storeBit(false); }
        if (src.followings !== null && src.followings !== undefined) { b_0.storeBit(true).storeRef(src.followings); } else { b_0.storeBit(false); }
        const b_1 = new Builder();
        if (src.followers !== null && src.followers !== undefined) { b_1.storeBit(true).storeRef(src.followers); } else { b_1.storeBit(false); }
        if (src.invited !== null && src.invited !== undefined) { b_1.storeBit(true).storeRef(src.invited); } else { b_1.storeBit(false); }
        if (src.pendingRequests !== null && src.pendingRequests !== undefined) { b_1.storeBit(true).storeRef(src.pendingRequests); } else { b_1.storeBit(false); }
        const b_2 = new Builder();
        if (src.debts !== null && src.debts !== undefined) { b_2.storeBit(true).storeRef(src.debts); } else { b_2.storeBit(false); }
        if (src.reports !== null && src.reports !== undefined) { b_2.storeBit(true).storeRef(src.reports); } else { b_2.storeBit(false); }
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadFriendsAndFollowings(slice: Slice) {
    const sc_0 = slice;
    const _friends = sc_0.loadBit() ? sc_0.loadRef() : null;
    const _followings = sc_0.loadBit() ? sc_0.loadRef() : null;
    const sc_1 = sc_0.loadRef().beginParse();
    const _followers = sc_1.loadBit() ? sc_1.loadRef() : null;
    const _invited = sc_1.loadBit() ? sc_1.loadRef() : null;
    const _pendingRequests = sc_1.loadBit() ? sc_1.loadRef() : null;
    const sc_2 = sc_1.loadRef().beginParse();
    const _debts = sc_2.loadBit() ? sc_2.loadRef() : null;
    const _reports = sc_2.loadBit() ? sc_2.loadRef() : null;
    return { $$type: 'FriendsAndFollowings' as const, friends: _friends, followings: _followings, followers: _followers, invited: _invited, pendingRequests: _pendingRequests, debts: _debts, reports: _reports };
}

export function loadTupleFriendsAndFollowings(source: TupleReader) {
    const _friends = source.readCellOpt();
    const _followings = source.readCellOpt();
    const _followers = source.readCellOpt();
    const _invited = source.readCellOpt();
    const _pendingRequests = source.readCellOpt();
    const _debts = source.readCellOpt();
    const _reports = source.readCellOpt();
    return { $$type: 'FriendsAndFollowings' as const, friends: _friends, followings: _followings, followers: _followers, invited: _invited, pendingRequests: _pendingRequests, debts: _debts, reports: _reports };
}

export function loadGetterTupleFriendsAndFollowings(source: TupleReader) {
    const _friends = source.readCellOpt();
    const _followings = source.readCellOpt();
    const _followers = source.readCellOpt();
    const _invited = source.readCellOpt();
    const _pendingRequests = source.readCellOpt();
    const _debts = source.readCellOpt();
    const _reports = source.readCellOpt();
    return { $$type: 'FriendsAndFollowings' as const, friends: _friends, followings: _followings, followers: _followers, invited: _invited, pendingRequests: _pendingRequests, debts: _debts, reports: _reports };
}

export function storeTupleFriendsAndFollowings(source: FriendsAndFollowings) {
    const builder = new TupleBuilder();
    builder.writeCell(source.friends);
    builder.writeCell(source.followings);
    builder.writeCell(source.followers);
    builder.writeCell(source.invited);
    builder.writeCell(source.pendingRequests);
    builder.writeCell(source.debts);
    builder.writeCell(source.reports);
    return builder.build();
}

export function dictValueParserFriendsAndFollowings(): DictionaryValue<FriendsAndFollowings> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeFriendsAndFollowings(src)).endCell());
        },
        parse: (src) => {
            return loadFriendsAndFollowings(src.loadRef().beginParse());
        }
    }
}

export type OtherStateConsts = {
    $$type: 'OtherStateConsts';
    reportReason: boolean;
    reporterCount: bigint;
    disputerCount: bigint;
    reportResolutionTime: bigint;
    connections: bigint;
    terminated: boolean;
    mbrpAmount: bigint;
    closureWait: bigint;
    active: boolean;
    lastMsgTo: Address;
    insurance: Cell;
}

export function storeOtherStateConsts(src: OtherStateConsts) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeBit(src.reportReason);
        b_0.storeUint(src.reporterCount, 10);
        b_0.storeUint(src.disputerCount, 10);
        b_0.storeUint(src.reportResolutionTime, 32);
        b_0.storeUint(src.connections, 8);
        b_0.storeBit(src.terminated);
        b_0.storeCoins(src.mbrpAmount);
        b_0.storeUint(src.closureWait, 32);
        b_0.storeBit(src.active);
        b_0.storeAddress(src.lastMsgTo);
        b_0.storeRef(src.insurance);
    };
}

export function loadOtherStateConsts(slice: Slice) {
    const sc_0 = slice;
    const _reportReason = sc_0.loadBit();
    const _reporterCount = sc_0.loadUintBig(10);
    const _disputerCount = sc_0.loadUintBig(10);
    const _reportResolutionTime = sc_0.loadUintBig(32);
    const _connections = sc_0.loadUintBig(8);
    const _terminated = sc_0.loadBit();
    const _mbrpAmount = sc_0.loadCoins();
    const _closureWait = sc_0.loadUintBig(32);
    const _active = sc_0.loadBit();
    const _lastMsgTo = sc_0.loadAddress();
    const _insurance = sc_0.loadRef();
    return { $$type: 'OtherStateConsts' as const, reportReason: _reportReason, reporterCount: _reporterCount, disputerCount: _disputerCount, reportResolutionTime: _reportResolutionTime, connections: _connections, terminated: _terminated, mbrpAmount: _mbrpAmount, closureWait: _closureWait, active: _active, lastMsgTo: _lastMsgTo, insurance: _insurance };
}

export function loadTupleOtherStateConsts(source: TupleReader) {
    const _reportReason = source.readBoolean();
    const _reporterCount = source.readBigNumber();
    const _disputerCount = source.readBigNumber();
    const _reportResolutionTime = source.readBigNumber();
    const _connections = source.readBigNumber();
    const _terminated = source.readBoolean();
    const _mbrpAmount = source.readBigNumber();
    const _closureWait = source.readBigNumber();
    const _active = source.readBoolean();
    const _lastMsgTo = source.readAddress();
    const _insurance = source.readCell();
    return { $$type: 'OtherStateConsts' as const, reportReason: _reportReason, reporterCount: _reporterCount, disputerCount: _disputerCount, reportResolutionTime: _reportResolutionTime, connections: _connections, terminated: _terminated, mbrpAmount: _mbrpAmount, closureWait: _closureWait, active: _active, lastMsgTo: _lastMsgTo, insurance: _insurance };
}

export function loadGetterTupleOtherStateConsts(source: TupleReader) {
    const _reportReason = source.readBoolean();
    const _reporterCount = source.readBigNumber();
    const _disputerCount = source.readBigNumber();
    const _reportResolutionTime = source.readBigNumber();
    const _connections = source.readBigNumber();
    const _terminated = source.readBoolean();
    const _mbrpAmount = source.readBigNumber();
    const _closureWait = source.readBigNumber();
    const _active = source.readBoolean();
    const _lastMsgTo = source.readAddress();
    const _insurance = source.readCell();
    return { $$type: 'OtherStateConsts' as const, reportReason: _reportReason, reporterCount: _reporterCount, disputerCount: _disputerCount, reportResolutionTime: _reportResolutionTime, connections: _connections, terminated: _terminated, mbrpAmount: _mbrpAmount, closureWait: _closureWait, active: _active, lastMsgTo: _lastMsgTo, insurance: _insurance };
}

export function storeTupleOtherStateConsts(source: OtherStateConsts) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.reportReason);
    builder.writeNumber(source.reporterCount);
    builder.writeNumber(source.disputerCount);
    builder.writeNumber(source.reportResolutionTime);
    builder.writeNumber(source.connections);
    builder.writeBoolean(source.terminated);
    builder.writeNumber(source.mbrpAmount);
    builder.writeNumber(source.closureWait);
    builder.writeBoolean(source.active);
    builder.writeAddress(source.lastMsgTo);
    builder.writeCell(source.insurance);
    return builder.build();
}

export function dictValueParserOtherStateConsts(): DictionaryValue<OtherStateConsts> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeOtherStateConsts(src)).endCell());
        },
        parse: (src) => {
            return loadOtherStateConsts(src.loadRef().beginParse());
        }
    }
}

export type InvitorNominee = {
    $$type: 'InvitorNominee';
    invitor: Address;
    nominee: Address;
}

export function storeInvitorNominee(src: InvitorNominee) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.invitor);
        b_0.storeAddress(src.nominee);
    };
}

export function loadInvitorNominee(slice: Slice) {
    const sc_0 = slice;
    const _invitor = sc_0.loadAddress();
    const _nominee = sc_0.loadAddress();
    return { $$type: 'InvitorNominee' as const, invitor: _invitor, nominee: _nominee };
}

export function loadTupleInvitorNominee(source: TupleReader) {
    const _invitor = source.readAddress();
    const _nominee = source.readAddress();
    return { $$type: 'InvitorNominee' as const, invitor: _invitor, nominee: _nominee };
}

export function loadGetterTupleInvitorNominee(source: TupleReader) {
    const _invitor = source.readAddress();
    const _nominee = source.readAddress();
    return { $$type: 'InvitorNominee' as const, invitor: _invitor, nominee: _nominee };
}

export function storeTupleInvitorNominee(source: InvitorNominee) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.invitor);
    builder.writeAddress(source.nominee);
    return builder.build();
}

export function dictValueParserInvitorNominee(): DictionaryValue<InvitorNominee> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInvitorNominee(src)).endCell());
        },
        parse: (src) => {
            return loadInvitorNominee(src.loadRef().beginParse());
        }
    }
}

export type JettonData = {
    $$type: 'JettonData';
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell;
    jettonWalletCode: Cell;
}

export function storeJettonData(src: JettonData) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeCoins(src.totalSupply);
        b_0.storeBit(src.mintable);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.content);
        b_0.storeRef(src.jettonWalletCode);
    };
}

export function loadJettonData(slice: Slice) {
    const sc_0 = slice;
    const _totalSupply = sc_0.loadCoins();
    const _mintable = sc_0.loadBit();
    const _owner = sc_0.loadAddress();
    const _content = sc_0.loadRef();
    const _jettonWalletCode = sc_0.loadRef();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, jettonWalletCode: _jettonWalletCode };
}

export function loadTupleJettonData(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _mintable = source.readBoolean();
    const _owner = source.readAddress();
    const _content = source.readCell();
    const _jettonWalletCode = source.readCell();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, jettonWalletCode: _jettonWalletCode };
}

export function loadGetterTupleJettonData(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _mintable = source.readBoolean();
    const _owner = source.readAddress();
    const _content = source.readCell();
    const _jettonWalletCode = source.readCell();
    return { $$type: 'JettonData' as const, totalSupply: _totalSupply, mintable: _mintable, owner: _owner, content: _content, jettonWalletCode: _jettonWalletCode };
}

export function storeTupleJettonData(source: JettonData) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.totalSupply);
    builder.writeBoolean(source.mintable);
    builder.writeAddress(source.owner);
    builder.writeCell(source.content);
    builder.writeCell(source.jettonWalletCode);
    return builder.build();
}

export function dictValueParserJettonData(): DictionaryValue<JettonData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonData(src)).endCell());
        },
        parse: (src) => {
            return loadJettonData(src.loadRef().beginParse());
        }
    }
}

export type JettonWalletData = {
    $$type: 'JettonWalletData';
    balance: bigint;
    owner: Address;
    minter: Address;
    code: Cell;
}

export function storeJettonWalletData(src: JettonWalletData) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeCoins(src.balance);
        b_0.storeAddress(src.owner);
        b_0.storeAddress(src.minter);
        b_0.storeRef(src.code);
    };
}

export function loadJettonWalletData(slice: Slice) {
    const sc_0 = slice;
    const _balance = sc_0.loadCoins();
    const _owner = sc_0.loadAddress();
    const _minter = sc_0.loadAddress();
    const _code = sc_0.loadRef();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, minter: _minter, code: _code };
}

export function loadTupleJettonWalletData(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _owner = source.readAddress();
    const _minter = source.readAddress();
    const _code = source.readCell();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, minter: _minter, code: _code };
}

export function loadGetterTupleJettonWalletData(source: TupleReader) {
    const _balance = source.readBigNumber();
    const _owner = source.readAddress();
    const _minter = source.readAddress();
    const _code = source.readCell();
    return { $$type: 'JettonWalletData' as const, balance: _balance, owner: _owner, minter: _minter, code: _code };
}

export function storeTupleJettonWalletData(source: JettonWalletData) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.balance);
    builder.writeAddress(source.owner);
    builder.writeAddress(source.minter);
    builder.writeCell(source.code);
    return builder.build();
}

export function dictValueParserJettonWalletData(): DictionaryValue<JettonWalletData> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonWalletData(src)).endCell());
        },
        parse: (src) => {
            return loadJettonWalletData(src.loadRef().beginParse());
        }
    }
}

export type MaybeAddress = {
    $$type: 'MaybeAddress';
    address: Address | null;
}

export function storeMaybeAddress(src: MaybeAddress) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeAddress(src.address);
    };
}

export function loadMaybeAddress(slice: Slice) {
    const sc_0 = slice;
    const _address = sc_0.loadMaybeAddress();
    return { $$type: 'MaybeAddress' as const, address: _address };
}

export function loadTupleMaybeAddress(source: TupleReader) {
    const _address = source.readAddressOpt();
    return { $$type: 'MaybeAddress' as const, address: _address };
}

export function loadGetterTupleMaybeAddress(source: TupleReader) {
    const _address = source.readAddressOpt();
    return { $$type: 'MaybeAddress' as const, address: _address };
}

export function storeTupleMaybeAddress(source: MaybeAddress) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.address);
    return builder.build();
}

export function dictValueParserMaybeAddress(): DictionaryValue<MaybeAddress> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMaybeAddress(src)).endCell());
        },
        parse: (src) => {
            return loadMaybeAddress(src.loadRef().beginParse());
        }
    }
}

export type JettonUpdateContent = {
    $$type: 'JettonUpdateContent';
    queryId: bigint;
    content: Cell;
}

export function storeJettonUpdateContent(src: JettonUpdateContent) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(4, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeRef(src.content);
    };
}

export function loadJettonUpdateContent(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 4) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _content = sc_0.loadRef();
    return { $$type: 'JettonUpdateContent' as const, queryId: _queryId, content: _content };
}

export function loadTupleJettonUpdateContent(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _content = source.readCell();
    return { $$type: 'JettonUpdateContent' as const, queryId: _queryId, content: _content };
}

export function loadGetterTupleJettonUpdateContent(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _content = source.readCell();
    return { $$type: 'JettonUpdateContent' as const, queryId: _queryId, content: _content };
}

export function storeTupleJettonUpdateContent(source: JettonUpdateContent) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeCell(source.content);
    return builder.build();
}

export function dictValueParserJettonUpdateContent(): DictionaryValue<JettonUpdateContent> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonUpdateContent(src)).endCell());
        },
        parse: (src) => {
            return loadJettonUpdateContent(src.loadRef().beginParse());
        }
    }
}

export type Mintable = {
    $$type: 'Mintable';
    mintable: boolean;
}

export function storeMintable(src: Mintable) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(37, 32);
        b_0.storeBit(src.mintable);
    };
}

export function loadMintable(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 37) { throw Error('Invalid prefix'); }
    const _mintable = sc_0.loadBit();
    return { $$type: 'Mintable' as const, mintable: _mintable };
}

export function loadTupleMintable(source: TupleReader) {
    const _mintable = source.readBoolean();
    return { $$type: 'Mintable' as const, mintable: _mintable };
}

export function loadGetterTupleMintable(source: TupleReader) {
    const _mintable = source.readBoolean();
    return { $$type: 'Mintable' as const, mintable: _mintable };
}

export function storeTupleMintable(source: Mintable) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.mintable);
    return builder.build();
}

export function dictValueParserMintable(): DictionaryValue<Mintable> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeMintable(src)).endCell());
        },
        parse: (src) => {
            return loadMintable(src.loadRef().beginParse());
        }
    }
}

export type UnfriendInternal = {
    $$type: 'UnfriendInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeUnfriendInternal(src: UnfriendInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(49, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadUnfriendInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 49) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'UnfriendInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleUnfriendInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'UnfriendInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleUnfriendInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'UnfriendInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleUnfriendInternal(source: UnfriendInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserUnfriendInternal(): DictionaryValue<UnfriendInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUnfriendInternal(src)).endCell());
        },
        parse: (src) => {
            return loadUnfriendInternal(src.loadRef().beginParse());
        }
    }
}

export type ReInviteInternal = {
    $$type: 'ReInviteInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeReInviteInternal(src: ReInviteInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(50, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadReInviteInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 50) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'ReInviteInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleReInviteInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ReInviteInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleReInviteInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'ReInviteInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleReInviteInternal(source: ReInviteInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserReInviteInternal(): DictionaryValue<ReInviteInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeReInviteInternal(src)).endCell());
        },
        parse: (src) => {
            return loadReInviteInternal(src.loadRef().beginParse());
        }
    }
}

export type UnInviteInternal = {
    $$type: 'UnInviteInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeUnInviteInternal(src: UnInviteInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(52, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadUnInviteInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 52) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'UnInviteInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleUnInviteInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'UnInviteInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleUnInviteInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'UnInviteInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleUnInviteInternal(source: UnInviteInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserUnInviteInternal(): DictionaryValue<UnInviteInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeUnInviteInternal(src)).endCell());
        },
        parse: (src) => {
            return loadUnInviteInternal(src.loadRef().beginParse());
        }
    }
}

export type U = {
    $$type: 'U';
    op: bigint;
    amount: bigint | null;
    sender: Address | null;
    receiver: Address | null;
    forwardPayload: Slice;
}

export function storeU(src: U) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(51, 32);
        b_0.storeUint(src.op, 6);
        if (src.amount !== null && src.amount !== undefined) { b_0.storeBit(true).storeCoins(src.amount); } else { b_0.storeBit(false); }
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.receiver);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadU(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 51) { throw Error('Invalid prefix'); }
    const _op = sc_0.loadUintBig(6);
    const _amount = sc_0.loadBit() ? sc_0.loadCoins() : null;
    const _sender = sc_0.loadMaybeAddress();
    const _receiver = sc_0.loadMaybeAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'U' as const, op: _op, amount: _amount, sender: _sender, receiver: _receiver, forwardPayload: _forwardPayload };
}

export function loadTupleU(source: TupleReader) {
    const _op = source.readBigNumber();
    const _amount = source.readBigNumberOpt();
    const _sender = source.readAddressOpt();
    const _receiver = source.readAddressOpt();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'U' as const, op: _op, amount: _amount, sender: _sender, receiver: _receiver, forwardPayload: _forwardPayload };
}

export function loadGetterTupleU(source: TupleReader) {
    const _op = source.readBigNumber();
    const _amount = source.readBigNumberOpt();
    const _sender = source.readAddressOpt();
    const _receiver = source.readAddressOpt();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'U' as const, op: _op, amount: _amount, sender: _sender, receiver: _receiver, forwardPayload: _forwardPayload };
}

export function storeTupleU(source: U) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.op);
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeAddress(source.receiver);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserU(): DictionaryValue<U> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeU(src)).endCell());
        },
        parse: (src) => {
            return loadU(src.loadRef().beginParse());
        }
    }
}

export type AccCloseBurnInternal = {
    $$type: 'AccCloseBurnInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
}

export function storeAccCloseBurnInternal(src: AccCloseBurnInternal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(53, 32);
        b_0.storeCoins(src.amount);
        b_0.storeAddress(src.sender);
        b_0.storeBuilder(src.forwardPayload.asBuilder());
    };
}

export function loadAccCloseBurnInternal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 53) { throw Error('Invalid prefix'); }
    const _amount = sc_0.loadCoins();
    const _sender = sc_0.loadAddress();
    const _forwardPayload = sc_0;
    return { $$type: 'AccCloseBurnInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadTupleAccCloseBurnInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'AccCloseBurnInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function loadGetterTupleAccCloseBurnInternal(source: TupleReader) {
    const _amount = source.readBigNumber();
    const _sender = source.readAddress();
    const _forwardPayload = source.readCell().asSlice();
    return { $$type: 'AccCloseBurnInternal' as const, amount: _amount, sender: _sender, forwardPayload: _forwardPayload };
}

export function storeTupleAccCloseBurnInternal(source: AccCloseBurnInternal) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.amount);
    builder.writeAddress(source.sender);
    builder.writeSlice(source.forwardPayload.asCell());
    return builder.build();
}

export function dictValueParserAccCloseBurnInternal(): DictionaryValue<AccCloseBurnInternal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAccCloseBurnInternal(src)).endCell());
        },
        parse: (src) => {
            return loadAccCloseBurnInternal(src.loadRef().beginParse());
        }
    }
}

export type EnquireInvitor = {
    $$type: 'EnquireInvitor';
    sender: Address;
}

export function storeEnquireInvitor(src: EnquireInvitor) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(54, 32);
        b_0.storeAddress(src.sender);
    };
}

export function loadEnquireInvitor(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 54) { throw Error('Invalid prefix'); }
    const _sender = sc_0.loadAddress();
    return { $$type: 'EnquireInvitor' as const, sender: _sender };
}

export function loadTupleEnquireInvitor(source: TupleReader) {
    const _sender = source.readAddress();
    return { $$type: 'EnquireInvitor' as const, sender: _sender };
}

export function loadGetterTupleEnquireInvitor(source: TupleReader) {
    const _sender = source.readAddress();
    return { $$type: 'EnquireInvitor' as const, sender: _sender };
}

export function storeTupleEnquireInvitor(source: EnquireInvitor) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.sender);
    return builder.build();
}

export function dictValueParserEnquireInvitor(): DictionaryValue<EnquireInvitor> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeEnquireInvitor(src)).endCell());
        },
        parse: (src) => {
            return loadEnquireInvitor(src.loadRef().beginParse());
        }
    }
}

export type TakeInvitor = {
    $$type: 'TakeInvitor';
    sender: Address;
    invitor: Address;
}

export function storeTakeInvitor(src: TakeInvitor) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(55, 32);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.invitor);
    };
}

export function loadTakeInvitor(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 55) { throw Error('Invalid prefix'); }
    const _sender = sc_0.loadAddress();
    const _invitor = sc_0.loadAddress();
    return { $$type: 'TakeInvitor' as const, sender: _sender, invitor: _invitor };
}

export function loadTupleTakeInvitor(source: TupleReader) {
    const _sender = source.readAddress();
    const _invitor = source.readAddress();
    return { $$type: 'TakeInvitor' as const, sender: _sender, invitor: _invitor };
}

export function loadGetterTupleTakeInvitor(source: TupleReader) {
    const _sender = source.readAddress();
    const _invitor = source.readAddress();
    return { $$type: 'TakeInvitor' as const, sender: _sender, invitor: _invitor };
}

export function storeTupleTakeInvitor(source: TakeInvitor) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.sender);
    builder.writeAddress(source.invitor);
    return builder.build();
}

export function dictValueParserTakeInvitor(): DictionaryValue<TakeInvitor> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeTakeInvitor(src)).endCell());
        },
        parse: (src) => {
            return loadTakeInvitor(src.loadRef().beginParse());
        }
    }
}

export type AccountGenerated = {
    $$type: 'AccountGenerated';
    deployer: Address;
    newAccount: Address;
}

export function storeAccountGenerated(src: AccountGenerated) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(64, 32);
        b_0.storeAddress(src.deployer);
        b_0.storeAddress(src.newAccount);
    };
}

export function loadAccountGenerated(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 64) { throw Error('Invalid prefix'); }
    const _deployer = sc_0.loadAddress();
    const _newAccount = sc_0.loadAddress();
    return { $$type: 'AccountGenerated' as const, deployer: _deployer, newAccount: _newAccount };
}

export function loadTupleAccountGenerated(source: TupleReader) {
    const _deployer = source.readAddress();
    const _newAccount = source.readAddress();
    return { $$type: 'AccountGenerated' as const, deployer: _deployer, newAccount: _newAccount };
}

export function loadGetterTupleAccountGenerated(source: TupleReader) {
    const _deployer = source.readAddress();
    const _newAccount = source.readAddress();
    return { $$type: 'AccountGenerated' as const, deployer: _deployer, newAccount: _newAccount };
}

export function storeTupleAccountGenerated(source: AccountGenerated) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.deployer);
    builder.writeAddress(source.newAccount);
    return builder.build();
}

export function dictValueParserAccountGenerated(): DictionaryValue<AccountGenerated> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeAccountGenerated(src)).endCell());
        },
        parse: (src) => {
            return loadAccountGenerated(src.loadRef().beginParse());
        }
    }
}

export type ApplyGrant = {
    $$type: 'ApplyGrant';
    sender: Address;
    amount: bigint;
}

export function storeApplyGrant(src: ApplyGrant) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(65, 32);
        b_0.storeAddress(src.sender);
        b_0.storeCoins(src.amount);
    };
}

export function loadApplyGrant(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 65) { throw Error('Invalid prefix'); }
    const _sender = sc_0.loadAddress();
    const _amount = sc_0.loadCoins();
    return { $$type: 'ApplyGrant' as const, sender: _sender, amount: _amount };
}

export function loadTupleApplyGrant(source: TupleReader) {
    const _sender = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'ApplyGrant' as const, sender: _sender, amount: _amount };
}

export function loadGetterTupleApplyGrant(source: TupleReader) {
    const _sender = source.readAddress();
    const _amount = source.readBigNumber();
    return { $$type: 'ApplyGrant' as const, sender: _sender, amount: _amount };
}

export function storeTupleApplyGrant(source: ApplyGrant) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.sender);
    builder.writeNumber(source.amount);
    return builder.build();
}

export function dictValueParserApplyGrant(): DictionaryValue<ApplyGrant> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeApplyGrant(src)).endCell());
        },
        parse: (src) => {
            return loadApplyGrant(src.loadRef().beginParse());
        }
    }
}

export type VoteProposal = {
    $$type: 'VoteProposal';
    sender: Address;
    proposer: Address;
    turnover: bigint;
}

export function storeVoteProposal(src: VoteProposal) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(66, 32);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.proposer);
        b_0.storeCoins(src.turnover);
    };
}

export function loadVoteProposal(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 66) { throw Error('Invalid prefix'); }
    const _sender = sc_0.loadAddress();
    const _proposer = sc_0.loadAddress();
    const _turnover = sc_0.loadCoins();
    return { $$type: 'VoteProposal' as const, sender: _sender, proposer: _proposer, turnover: _turnover };
}

export function loadTupleVoteProposal(source: TupleReader) {
    const _sender = source.readAddress();
    const _proposer = source.readAddress();
    const _turnover = source.readBigNumber();
    return { $$type: 'VoteProposal' as const, sender: _sender, proposer: _proposer, turnover: _turnover };
}

export function loadGetterTupleVoteProposal(source: TupleReader) {
    const _sender = source.readAddress();
    const _proposer = source.readAddress();
    const _turnover = source.readBigNumber();
    return { $$type: 'VoteProposal' as const, sender: _sender, proposer: _proposer, turnover: _turnover };
}

export function storeTupleVoteProposal(source: VoteProposal) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.sender);
    builder.writeAddress(source.proposer);
    builder.writeNumber(source.turnover);
    return builder.build();
}

export function dictValueParserVoteProposal(): DictionaryValue<VoteProposal> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeVoteProposal(src)).endCell());
        },
        parse: (src) => {
            return loadVoteProposal(src.loadRef().beginParse());
        }
    }
}

export type CitizenAdded = {
    $$type: 'CitizenAdded';
    sender: Address;
    newAccount: Address;
}

export function storeCitizenAdded(src: CitizenAdded) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(67, 32);
        b_0.storeAddress(src.sender);
        b_0.storeAddress(src.newAccount);
    };
}

export function loadCitizenAdded(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 67) { throw Error('Invalid prefix'); }
    const _sender = sc_0.loadAddress();
    const _newAccount = sc_0.loadAddress();
    return { $$type: 'CitizenAdded' as const, sender: _sender, newAccount: _newAccount };
}

export function loadTupleCitizenAdded(source: TupleReader) {
    const _sender = source.readAddress();
    const _newAccount = source.readAddress();
    return { $$type: 'CitizenAdded' as const, sender: _sender, newAccount: _newAccount };
}

export function loadGetterTupleCitizenAdded(source: TupleReader) {
    const _sender = source.readAddress();
    const _newAccount = source.readAddress();
    return { $$type: 'CitizenAdded' as const, sender: _sender, newAccount: _newAccount };
}

export function storeTupleCitizenAdded(source: CitizenAdded) {
    const builder = new TupleBuilder();
    builder.writeAddress(source.sender);
    builder.writeAddress(source.newAccount);
    return builder.build();
}

export function dictValueParserCitizenAdded(): DictionaryValue<CitizenAdded> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeCitizenAdded(src)).endCell());
        },
        parse: (src) => {
            return loadCitizenAdded(src.loadRef().beginParse());
        }
    }
}

export type InviteApproval = {
    $$type: 'InviteApproval';
    approved: boolean;
    invitor: Address;
    invitee: Address;
    approver: Address;
}

export function storeInviteApproval(src: InviteApproval) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(68, 32);
        b_0.storeBit(src.approved);
        b_0.storeAddress(src.invitor);
        b_0.storeAddress(src.invitee);
        b_0.storeAddress(src.approver);
    };
}

export function loadInviteApproval(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 68) { throw Error('Invalid prefix'); }
    const _approved = sc_0.loadBit();
    const _invitor = sc_0.loadAddress();
    const _invitee = sc_0.loadAddress();
    const _approver = sc_0.loadAddress();
    return { $$type: 'InviteApproval' as const, approved: _approved, invitor: _invitor, invitee: _invitee, approver: _approver };
}

export function loadTupleInviteApproval(source: TupleReader) {
    const _approved = source.readBoolean();
    const _invitor = source.readAddress();
    const _invitee = source.readAddress();
    const _approver = source.readAddress();
    return { $$type: 'InviteApproval' as const, approved: _approved, invitor: _invitor, invitee: _invitee, approver: _approver };
}

export function loadGetterTupleInviteApproval(source: TupleReader) {
    const _approved = source.readBoolean();
    const _invitor = source.readAddress();
    const _invitee = source.readAddress();
    const _approver = source.readAddress();
    return { $$type: 'InviteApproval' as const, approved: _approved, invitor: _invitor, invitee: _invitee, approver: _approver };
}

export function storeTupleInviteApproval(source: InviteApproval) {
    const builder = new TupleBuilder();
    builder.writeBoolean(source.approved);
    builder.writeAddress(source.invitor);
    builder.writeAddress(source.invitee);
    builder.writeAddress(source.approver);
    return builder.build();
}

export function dictValueParserInviteApproval(): DictionaryValue<InviteApproval> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeInviteApproval(src)).endCell());
        },
        parse: (src) => {
            return loadInviteApproval(src.loadRef().beginParse());
        }
    }
}

export type ChangeMetadataUri = {
    $$type: 'ChangeMetadataUri';
    queryId: bigint;
    metadata: Slice;
}

export function storeChangeMetadataUri(src: ChangeMetadataUri) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeUint(3414567170, 32);
        b_0.storeUint(src.queryId, 64);
        b_0.storeBuilder(src.metadata.asBuilder());
    };
}

export function loadChangeMetadataUri(slice: Slice) {
    const sc_0 = slice;
    if (sc_0.loadUint(32) !== 3414567170) { throw Error('Invalid prefix'); }
    const _queryId = sc_0.loadUintBig(64);
    const _metadata = sc_0;
    return { $$type: 'ChangeMetadataUri' as const, queryId: _queryId, metadata: _metadata };
}

export function loadTupleChangeMetadataUri(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _metadata = source.readCell().asSlice();
    return { $$type: 'ChangeMetadataUri' as const, queryId: _queryId, metadata: _metadata };
}

export function loadGetterTupleChangeMetadataUri(source: TupleReader) {
    const _queryId = source.readBigNumber();
    const _metadata = source.readCell().asSlice();
    return { $$type: 'ChangeMetadataUri' as const, queryId: _queryId, metadata: _metadata };
}

export function storeTupleChangeMetadataUri(source: ChangeMetadataUri) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.queryId);
    builder.writeSlice(source.metadata.asCell());
    return builder.build();
}

export function dictValueParserChangeMetadataUri(): DictionaryValue<ChangeMetadataUri> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeChangeMetadataUri(src)).endCell());
        },
        parse: (src) => {
            return loadChangeMetadataUri(src.loadRef().beginParse());
        }
    }
}

export type SliceBitsAndRefs = {
    $$type: 'SliceBitsAndRefs';
    bits: bigint;
    refs: bigint;
}

export function storeSliceBitsAndRefs(src: SliceBitsAndRefs) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeInt(src.bits, 257);
        b_0.storeInt(src.refs, 257);
    };
}

export function loadSliceBitsAndRefs(slice: Slice) {
    const sc_0 = slice;
    const _bits = sc_0.loadIntBig(257);
    const _refs = sc_0.loadIntBig(257);
    return { $$type: 'SliceBitsAndRefs' as const, bits: _bits, refs: _refs };
}

export function loadTupleSliceBitsAndRefs(source: TupleReader) {
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'SliceBitsAndRefs' as const, bits: _bits, refs: _refs };
}

export function loadGetterTupleSliceBitsAndRefs(source: TupleReader) {
    const _bits = source.readBigNumber();
    const _refs = source.readBigNumber();
    return { $$type: 'SliceBitsAndRefs' as const, bits: _bits, refs: _refs };
}

export function storeTupleSliceBitsAndRefs(source: SliceBitsAndRefs) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.bits);
    builder.writeNumber(source.refs);
    return builder.build();
}

export function dictValueParserSliceBitsAndRefs(): DictionaryValue<SliceBitsAndRefs> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeSliceBitsAndRefs(src)).endCell());
        },
        parse: (src) => {
            return loadSliceBitsAndRefs(src.loadRef().beginParse());
        }
    }
}

export type ShardDeployParameters = {
    $$type: 'ShardDeployParameters';
    deployParameters: DeployParameters;
    shard: bigint;
}

export function storeShardDeployParameters(src: ShardDeployParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.store(storeDeployParameters(src.deployParameters));
        b_0.storeUint(src.shard, 8);
    };
}

export function loadShardDeployParameters(slice: Slice) {
    const sc_0 = slice;
    const _deployParameters = loadDeployParameters(sc_0);
    const _shard = sc_0.loadUintBig(8);
    return { $$type: 'ShardDeployParameters' as const, deployParameters: _deployParameters, shard: _shard };
}

export function loadTupleShardDeployParameters(source: TupleReader) {
    const _deployParameters = loadTupleDeployParameters(source);
    const _shard = source.readBigNumber();
    return { $$type: 'ShardDeployParameters' as const, deployParameters: _deployParameters, shard: _shard };
}

export function loadGetterTupleShardDeployParameters(source: TupleReader) {
    const _deployParameters = loadGetterTupleDeployParameters(source);
    const _shard = source.readBigNumber();
    return { $$type: 'ShardDeployParameters' as const, deployParameters: _deployParameters, shard: _shard };
}

export function storeTupleShardDeployParameters(source: ShardDeployParameters) {
    const builder = new TupleBuilder();
    builder.writeTuple(storeTupleDeployParameters(source.deployParameters));
    builder.writeNumber(source.shard);
    return builder.build();
}

export function dictValueParserShardDeployParameters(): DictionaryValue<ShardDeployParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeShardDeployParameters(src)).endCell());
        },
        parse: (src) => {
            return loadShardDeployParameters(src.loadRef().beginParse());
        }
    }
}

export type ShardMessageParameters = {
    $$type: 'ShardMessageParameters';
    messageParameters: MessageParameters;
    shard: bigint;
}

export function storeShardMessageParameters(src: ShardMessageParameters) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.store(storeMessageParameters(src.messageParameters));
        b_0.storeUint(src.shard, 8);
    };
}

export function loadShardMessageParameters(slice: Slice) {
    const sc_0 = slice;
    const _messageParameters = loadMessageParameters(sc_0);
    const _shard = sc_0.loadUintBig(8);
    return { $$type: 'ShardMessageParameters' as const, messageParameters: _messageParameters, shard: _shard };
}

export function loadTupleShardMessageParameters(source: TupleReader) {
    const _messageParameters = loadTupleMessageParameters(source);
    const _shard = source.readBigNumber();
    return { $$type: 'ShardMessageParameters' as const, messageParameters: _messageParameters, shard: _shard };
}

export function loadGetterTupleShardMessageParameters(source: TupleReader) {
    const _messageParameters = loadGetterTupleMessageParameters(source);
    const _shard = source.readBigNumber();
    return { $$type: 'ShardMessageParameters' as const, messageParameters: _messageParameters, shard: _shard };
}

export function storeTupleShardMessageParameters(source: ShardMessageParameters) {
    const builder = new TupleBuilder();
    builder.writeTuple(storeTupleMessageParameters(source.messageParameters));
    builder.writeNumber(source.shard);
    return builder.build();
}

export function dictValueParserShardMessageParameters(): DictionaryValue<ShardMessageParameters> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeShardMessageParameters(src)).endCell());
        },
        parse: (src) => {
            return loadShardMessageParameters(src.loadRef().beginParse());
        }
    }
}

export type JettonMinterState = {
    $$type: 'JettonMinterState';
    totalSupply: bigint;
    mintable: boolean;
    adminAddress: Address;
    jettonContent: Cell;
    jettonWalletCode: Cell;
}

export function storeJettonMinterState(src: JettonMinterState) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeCoins(src.totalSupply);
        b_0.storeBit(src.mintable);
        b_0.storeAddress(src.adminAddress);
        b_0.storeRef(src.jettonContent);
        b_0.storeRef(src.jettonWalletCode);
    };
}

export function loadJettonMinterState(slice: Slice) {
    const sc_0 = slice;
    const _totalSupply = sc_0.loadCoins();
    const _mintable = sc_0.loadBit();
    const _adminAddress = sc_0.loadAddress();
    const _jettonContent = sc_0.loadRef();
    const _jettonWalletCode = sc_0.loadRef();
    return { $$type: 'JettonMinterState' as const, totalSupply: _totalSupply, mintable: _mintable, adminAddress: _adminAddress, jettonContent: _jettonContent, jettonWalletCode: _jettonWalletCode };
}

export function loadTupleJettonMinterState(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _mintable = source.readBoolean();
    const _adminAddress = source.readAddress();
    const _jettonContent = source.readCell();
    const _jettonWalletCode = source.readCell();
    return { $$type: 'JettonMinterState' as const, totalSupply: _totalSupply, mintable: _mintable, adminAddress: _adminAddress, jettonContent: _jettonContent, jettonWalletCode: _jettonWalletCode };
}

export function loadGetterTupleJettonMinterState(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _mintable = source.readBoolean();
    const _adminAddress = source.readAddress();
    const _jettonContent = source.readCell();
    const _jettonWalletCode = source.readCell();
    return { $$type: 'JettonMinterState' as const, totalSupply: _totalSupply, mintable: _mintable, adminAddress: _adminAddress, jettonContent: _jettonContent, jettonWalletCode: _jettonWalletCode };
}

export function storeTupleJettonMinterState(source: JettonMinterState) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.totalSupply);
    builder.writeBoolean(source.mintable);
    builder.writeAddress(source.adminAddress);
    builder.writeCell(source.jettonContent);
    builder.writeCell(source.jettonWalletCode);
    return builder.build();
}

export function dictValueParserJettonMinterState(): DictionaryValue<JettonMinterState> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonMinterState(src)).endCell());
        },
        parse: (src) => {
            return loadJettonMinterState(src.loadRef().beginParse());
        }
    }
}

export type JettonMinterSharded$Data = {
    $$type: 'JettonMinterSharded$Data';
    totalSupply: bigint;
    totalAccounts: bigint;
    treasurySurplus: bigint;
    treasuryDeficits: bigint;
    owner: Address;
    jettonContent: Cell;
    jettonWalletCode: Cell;
    jettonWalletInitialCode: Cell;
    version: bigint;
    walletVersion: bigint;
    tosHash: string;
    mbrpAmount: bigint;
    publicWorks: Dictionary<Address, number>;
    votes: Dictionary<Address, number>;
    crowdFund: Dictionary<number, number>;
}

export function storeJettonMinterSharded$Data(src: JettonMinterSharded$Data) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeCoins(src.totalSupply);
        b_0.storeUint(src.totalAccounts, 32);
        b_0.storeCoins(src.treasurySurplus);
        b_0.storeCoins(src.treasuryDeficits);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.jettonContent);
        b_0.storeRef(src.jettonWalletCode);
        const b_1 = new Builder();
        b_1.storeRef(src.jettonWalletInitialCode);
        b_1.storeUint(src.version, 10);
        b_1.storeUint(src.walletVersion, 10);
        b_1.storeStringRefTail(src.tosHash);
        b_1.storeCoins(src.mbrpAmount);
        b_1.storeDict(src.publicWorks, Dictionary.Keys.Address(), Dictionary.Values.Uint(10));
        const b_2 = new Builder();
        b_2.storeDict(src.votes, Dictionary.Keys.Address(), Dictionary.Values.Uint(20));
        b_2.storeDict(src.crowdFund, Dictionary.Keys.Uint(10), Dictionary.Values.Uint(10));
        b_1.storeRef(b_2.endCell());
        b_0.storeRef(b_1.endCell());
    };
}

export function loadJettonMinterSharded$Data(slice: Slice) {
    const sc_0 = slice;
    const _totalSupply = sc_0.loadCoins();
    const _totalAccounts = sc_0.loadUintBig(32);
    const _treasurySurplus = sc_0.loadCoins();
    const _treasuryDeficits = sc_0.loadCoins();
    const _owner = sc_0.loadAddress();
    const _jettonContent = sc_0.loadRef();
    const _jettonWalletCode = sc_0.loadRef();
    const sc_1 = sc_0.loadRef().beginParse();
    const _jettonWalletInitialCode = sc_1.loadRef();
    const _version = sc_1.loadUintBig(10);
    const _walletVersion = sc_1.loadUintBig(10);
    const _tosHash = sc_1.loadStringRefTail();
    const _mbrpAmount = sc_1.loadCoins();
    const _publicWorks = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Uint(10), sc_1);
    const sc_2 = sc_1.loadRef().beginParse();
    const _votes = Dictionary.load(Dictionary.Keys.Address(), Dictionary.Values.Uint(20), sc_2);
    const _crowdFund = Dictionary.load(Dictionary.Keys.Uint(10), Dictionary.Values.Uint(10), sc_2);
    return { $$type: 'JettonMinterSharded$Data' as const, totalSupply: _totalSupply, totalAccounts: _totalAccounts, treasurySurplus: _treasurySurplus, treasuryDeficits: _treasuryDeficits, owner: _owner, jettonContent: _jettonContent, jettonWalletCode: _jettonWalletCode, jettonWalletInitialCode: _jettonWalletInitialCode, version: _version, walletVersion: _walletVersion, tosHash: _tosHash, mbrpAmount: _mbrpAmount, publicWorks: _publicWorks, votes: _votes, crowdFund: _crowdFund };
}

export function loadTupleJettonMinterSharded$Data(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _totalAccounts = source.readBigNumber();
    const _treasurySurplus = source.readBigNumber();
    const _treasuryDeficits = source.readBigNumber();
    const _owner = source.readAddress();
    const _jettonContent = source.readCell();
    const _jettonWalletCode = source.readCell();
    const _jettonWalletInitialCode = source.readCell();
    const _version = source.readBigNumber();
    const _walletVersion = source.readBigNumber();
    const _tosHash = source.readString();
    const _mbrpAmount = source.readBigNumber();
    const _publicWorks = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Uint(10), source.readCellOpt());
    const _votes = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Uint(20), source.readCellOpt());
    const _crowdFund = Dictionary.loadDirect(Dictionary.Keys.Uint(10), Dictionary.Values.Uint(10), source.readCellOpt());
    return { $$type: 'JettonMinterSharded$Data' as const, totalSupply: _totalSupply, totalAccounts: _totalAccounts, treasurySurplus: _treasurySurplus, treasuryDeficits: _treasuryDeficits, owner: _owner, jettonContent: _jettonContent, jettonWalletCode: _jettonWalletCode, jettonWalletInitialCode: _jettonWalletInitialCode, version: _version, walletVersion: _walletVersion, tosHash: _tosHash, mbrpAmount: _mbrpAmount, publicWorks: _publicWorks, votes: _votes, crowdFund: _crowdFund };
}

export function loadGetterTupleJettonMinterSharded$Data(source: TupleReader) {
    const _totalSupply = source.readBigNumber();
    const _totalAccounts = source.readBigNumber();
    const _treasurySurplus = source.readBigNumber();
    const _treasuryDeficits = source.readBigNumber();
    const _owner = source.readAddress();
    const _jettonContent = source.readCell();
    const _jettonWalletCode = source.readCell();
    const _jettonWalletInitialCode = source.readCell();
    const _version = source.readBigNumber();
    const _walletVersion = source.readBigNumber();
    const _tosHash = source.readString();
    const _mbrpAmount = source.readBigNumber();
    const _publicWorks = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Uint(10), source.readCellOpt());
    const _votes = Dictionary.loadDirect(Dictionary.Keys.Address(), Dictionary.Values.Uint(20), source.readCellOpt());
    const _crowdFund = Dictionary.loadDirect(Dictionary.Keys.Uint(10), Dictionary.Values.Uint(10), source.readCellOpt());
    return { $$type: 'JettonMinterSharded$Data' as const, totalSupply: _totalSupply, totalAccounts: _totalAccounts, treasurySurplus: _treasurySurplus, treasuryDeficits: _treasuryDeficits, owner: _owner, jettonContent: _jettonContent, jettonWalletCode: _jettonWalletCode, jettonWalletInitialCode: _jettonWalletInitialCode, version: _version, walletVersion: _walletVersion, tosHash: _tosHash, mbrpAmount: _mbrpAmount, publicWorks: _publicWorks, votes: _votes, crowdFund: _crowdFund };
}

export function storeTupleJettonMinterSharded$Data(source: JettonMinterSharded$Data) {
    const builder = new TupleBuilder();
    builder.writeNumber(source.totalSupply);
    builder.writeNumber(source.totalAccounts);
    builder.writeNumber(source.treasurySurplus);
    builder.writeNumber(source.treasuryDeficits);
    builder.writeAddress(source.owner);
    builder.writeCell(source.jettonContent);
    builder.writeCell(source.jettonWalletCode);
    builder.writeCell(source.jettonWalletInitialCode);
    builder.writeNumber(source.version);
    builder.writeNumber(source.walletVersion);
    builder.writeString(source.tosHash);
    builder.writeNumber(source.mbrpAmount);
    builder.writeCell(source.publicWorks.size > 0 ? beginCell().storeDictDirect(source.publicWorks, Dictionary.Keys.Address(), Dictionary.Values.Uint(10)).endCell() : null);
    builder.writeCell(source.votes.size > 0 ? beginCell().storeDictDirect(source.votes, Dictionary.Keys.Address(), Dictionary.Values.Uint(20)).endCell() : null);
    builder.writeCell(source.crowdFund.size > 0 ? beginCell().storeDictDirect(source.crowdFund, Dictionary.Keys.Uint(10), Dictionary.Values.Uint(10)).endCell() : null);
    return builder.build();
}

export function dictValueParserJettonMinterSharded$Data(): DictionaryValue<JettonMinterSharded$Data> {
    return {
        serialize: (src, builder) => {
            builder.storeRef(beginCell().store(storeJettonMinterSharded$Data(src)).endCell());
        },
        parse: (src) => {
            return loadJettonMinterSharded$Data(src.loadRef().beginParse());
        }
    }
}

 type JettonMinterSharded_init_args = {
    $$type: 'JettonMinterSharded_init_args';
    totalSupply: bigint;
    owner: Address;
    jettonContent: Cell;
}

function initJettonMinterSharded_init_args(src: JettonMinterSharded_init_args) {
    return (builder: Builder) => {
        const b_0 = builder;
        b_0.storeCoins(src.totalSupply);
        b_0.storeAddress(src.owner);
        b_0.storeRef(src.jettonContent);
    };
}

async function JettonMinterSharded_init(totalSupply: bigint, owner: Address, jettonContent: Cell) {
    const __code = Cell.fromHex('b5ee9c7242020164000100008a8500000114ff00f4a413f4bcf2c80b00010201620002002203f8d001d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e32fa00d31ffa00fa00fa40d4d401d0d4d4d309d309d401d001fa00d430d0f404f404f40430109f109e109d109c109b109a6c1f8f27fa00fa40d4552003d15870547000208b088218e8d4a510006d6d6d888810bd10ac109b109a5561e200280028000301fe11108e7a0e8020d7217021d749c21f9430d31f01de8210178d4519ba8e5cd33fd309fa0055206c311da10e10bd10ac109b108a107910681057104610354430c87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed54e05f0f30e0000403fc702fd74920c21f96312fd70b1f01de2182102c76b973bae3022182107bdd97deba8ed95b0e8020d721d33ffa00fa40d72c01916d93fa4001e231f842fa440f11120f0e11110e0d11100d0c11120c0b11110b0a11100a0911120908111108071110070611120605111105041110040311120302111302011114011112e02100050009000d04fc5b0e8020d721d33ffa40d2003021fa443022800bd721d307300e11110e0d11100d10cf0b11110b0a11100a109f0811110807111007106f0511110504111004103f021111020111120111132ff8287088c87001ca0055215023cece01fa02c9315280c85980285003cb057601cb03ccccc9f9001113c000e30f4f1311101e00280006000700080020011112011113018100f8a92801aaf7b10016571257126d11111112111101ca95c801cf16c992306de2c88210d173540001cb1f12cb3f58206e95307001cb019e830958cb0a01206ef2d08001cbffe2f400c9f84270804043137fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00109e108d107c106b105a104910384715406413002104fe55e02ff8287088c87001ca0055215023cece01fa02c9315280c85980285003cb057601cb03ccccc91110800bd721d307301110f900011110018100f8a92801aaf7b110ef10de10cd10bc10ab109a10891078106710561045103441301114c0009c1113206ef2d08001111101ba955713571070e2f2e2d456106eb3e30f10de0028000a000b000c00ae50cda0f8276f101110206ef2d0800ec8018210d53276db58cb1fcb3fc9561082112a05f200bc99111082103b9aca00a193571070e2102e011110017080425044c8cf8580ca00cf8440ce01fa02806acf40f400c901fb0000123e3f50aba10d10ab09009a108d107c106b105a10491038471540060403c87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed5404348210642b7d07bae30221820b93b1cebae30221c004e30221c038000e00110012001301fe5b0e8020d721d33f31fa40d430d0d31f018210178d4519baf2e081d33fd309fa00fa40d72c01916d93fa4001e201fa005166161514433037f8425611c705f2e2bc27fa4430c000f2e2de26f404016e913091d1e2f8416f24820898968025a044305244fa40fa0071d721fa00fa00306c6170f83aa081012c8203d09070f838000f02faa0812b2a70f836aa00a0bcf2e2bf111423a01113a40504431370111512805008c855608210178d45195008cb1f16cb3f14cb0958fa02ce01206e9430cf84809201cee201fa02cec910ef1d10cf1b10af19108f17106f15104f4f300111110111125611f8287088c87001ca0055215023cece01fa02c9315280041112040028001001cc0311110302111402103410237f591114800bd721d3073010561045103441300111140155505505c85a80285003cb057601cb03ccccc9c87101cb0113ca00830901cb0d22f90058018100f8a92801aaf7b101cbff58fa027301cb6accf400c901fb0010ae5539002100ee5b0e8020d721fa4030f8422ac705f2e2bc82089896808010fb027083066d40037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0010ce551bc87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed5400dc5b380d8020d721d33f31d430f84229c705f2e2bcf842c8cf8508ce70cf0b6ec98042fb0010ce10bd10ac109b108a0910685515c87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed5404ee8ee75b0e8020d721d3093024b98e9af84210df10ce10bd10ac109b108a107910681057104610354430de10ce551bc87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed54e021c003e30221c044e30221c041001400150016001700f280427070547e9c6d6d50046d50036d01c8556082102508d66a5008cb1f266eb3977f01ca0016cb099636705006ca00e2246eb3977f01ca0014cb099634705004ca00e258206e9430cf84809201cee2f400f40001c8f40012f400cdc9034144c8cf8580ca00cf8440ce01fa02806acf40f400c901fb000e55b100c85b0e8020d721d33f31fa4030f842500ac705f2e2bcf842c8cf8508ce70cf0b6ec98042fb0010ce551bc87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed5400c25b0e8020d721d20030920ba4920ba5e210ce0d10ac109b108a10791068105710461035440302c87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed5402f68e725b0e8020d721fa40fa00301281010b52327a216e955b59f4593098c801cf014133f441e201c8cf8508ce70cf0b6ec98042fb0010ce551bc87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed54e021c042e302210018001900ee5b0e8020d721fa40fa40fa00300211100281010b598014216e955b59f4593098c801cf014133f441e20ec8cf8508ce70cf0b6ec98042fb0010ce551bc87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed5402fc8210cb862902ba8e615b380d8020d721d33f31f84229c705f2e2bcc801cf16c910ce10bd10ac109b108a0910685515c87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed54e02182102508d66abae3025710c0000fc1211fb0001a002002c65b0e8020d721d2000193d30931ded2000193d30931ded72c01916d93fa4001e230f404f404d430d0f40431f40430f8422cc705f2e2bc216eb39b07a401206ef2d080fb04069131e2206eb39130e30d206eb399206ef2d080ed54f2009130e210ce551b001b002101b03804a407206ef2d080547dcb547dcb5476cb5610547dcb561b561d0e111c0e0d111b0d0c111a0c0b11190b56180b0a11180a0911100908111608071115070611170605111305041112040311110302111e0201111f011119001c02fe55e02ff8287088c87001ca0055215023cece01fa02c9315280c85980285003cb057601cb03ccccc91110800bd721d30730c87401cb027001cb071111f90001018100f8a92801aaf7b1011110cbffc9d0fa403010ef10de10cd10bc10ab109a10891078106710561045103441306cf110ef10de10cd10bc10ab191a107810670028001d011410451034413001111001001e01fe80427070547e9c6d6d50046d50036d01c8556082102508d66a5008cb1f266eb3977f01ca0016cb099636705006ca00e2246eb3977f01ca0014cb099634705004ca00e258206e9430cf84809201cee2f400f40001c8f40012f400cdc9034144c8cf8580ca00cf8440ce01fa02806acf40f400c901fb0050ef1d1c1b1a191817001f000a1615144330018c8e3f10ce551bc87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed54e010ce551b00210076c87f01ca0055e050fefa021ccb1f500afa025008fa0216ce14cc02c8cccc12cb0912cb0902c8ce12cd58fa0202c8f40014f40012f400cdcdc9ed540201200023002402efbd78af6a268690000c7197d00698ffd007d007d206a6a00e86a6a6984e984ea00e800fd006a18687a027a027a0218084f884f084e884e084d884d360fc793fd007d206a2a9001e8ac382a3800104584410c746a52880036b6b6c444085e8856084d884d2ab0f12a3f6e2a3f6e2a3f6e2a3f6e2a3f6e367fc002800280202710025002703d1adbcf6a268690000c7197d00698ffd007d007d206a6a00e86a6a6984e984ea00e800fd006a18687a027a027a0218084f884f084e884e084d884d360fc793fd007d206a2a9001e8ac382a3800104584410c746a52880036b6b6c444085e8856084d884d2ab0f12a874000280028002601de55e02ff8287088c87001ca0055215023cece01fa02c9315280c85980285003cb057601cb03ccccc91110800bd721d30730c87401cb027001cb071111f90001018100f8a92801aaf7b1011110cbffc9d0fa403010ef10de10cd10bc10ab109a10891078106710561045103441306cf1002802dbaf16f6a268690000c7197d00698ffd007d007d206a6a00e86a6a6984e984ea00e800fd006a18687a027a027a0218084f884f084e884e084d884d360fc793fd007d206a2a9001e8ac382a3800104584410c746a52880036b6b6c444085e8856084d884d2ab0f1173faa3e5d367ac0002800280114ff00f4a413f4bcf2c80b0029020162002a0152047ed0eda2edfb01d072d721d200d200fa4021103450666f04f86102f862ed44d0d200018e8dfa40fa40fa00552003d158db3ce30d1122e302705621d74920c21f015e0162002b004404b011208020d7217021d749c21f9430d31f01de20c0448fbd303403d200013120b301e30f07c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54e020c034002c002e0150003001f6111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105710464435541022002d00f68218e8d4a5100020c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e207a501f4111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a107910681057104644554313002f01a08218e8d4a510008ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a07a400e902fe8efc30fa000131aa00111381010b225615206e953059f4593098c801fa024133f441e2011119011113a005a4111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b111905111a05111711191117111611181116111511171115111411161114111311151113111211141112111111131111e000360031045c20c0078e9b30fa0001315311111481010bf45930111301112101112256225622e020c031e30220c017e30220c005003200350037003901fc20c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e2102f81010b02011123011122003301fc206e953059f4593098c801fa024133f441e205a5111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e105f10ce10bd10ac0034017a109b108a107910680710465513c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015001fa30fa000131210111130181010b015614206e953059f4593098c801fa024133f441e2011119011112a005a4111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b111905111a05111711191117111611181116111511171115111411161114111311151113111211141112111111131111003601aa1110111211100f11110f0e11100e10df10ce10bd10ac109b108a1079106807104610354403c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015001fc5b520c81010bf4593005a5111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce105d10ac109b108a10791068070038016810465513c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015002fe8efd30fa0001311c81010b52d2206e953059f4593098c801fa024133f441e205a4111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f003a003b01920e11100e10df10ce105d10ac109b108a107910680710465513c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015004fce020c008e30220c009e30220c0358ee55b111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551de0208210178d4519ba003c003d014f003f01fe30fa00d20059303101111901a0111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b1119111a1117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a1079106810571046004301fc30fa00013101111901a0111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b1119111a1117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105710461035003e01644430c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015002fe8efc30d33fd309fa0055206c312082103b9aca00be9701111901a011189130e2561ec8cf8508ce70cf0b6ec98042fb00111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112e000400041018c1111111311111110111211100f11110f0e11100e551dc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed540150011e82107bdd97debae3025f0f5f0f5f04004201fcd33ffa00596c2101111901a0111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b1119111a1117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105710460043016810354430c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015004f4e30021c00001c121b08ee7305720111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551de0c000925720e30d0045014f014b014e04f4315621d70b1f2082100f8a7ea5ba8fe85b11208020d721d33ffa00fa40d72c01916d93fa4001e201f404fa00f842205627c705f2e2bc2b917f982682103b9aca00b9e2f2e2be25fa4430f2d08a21f404016e913091d1e22682103b9aca00bee30f7080506d220511260556260504112a04031129031126c8e0200046004e00b000b402fe34385bf823225622c705b3e303112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a1119112211191118112111181117112311171116112211161115112111151114112311141113112211131112112111121111112311111110112211100f11210f0e11230e0d11220d0047004d01fe323334112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10790048027c10681057104610351024db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310049015001f420718064a986112111231121112011221120111f1123111f111e1122111e111d1123111d111c1122111c111b1123111b111a1122111a1119112311191118112211181117112311171116112211161115112311151114112211141113112311131112112211121111112311111110112211100f11230f0e11220e004a01e80d11230d0c11220c0b11230b0a11220a091123090811220807112307061122060511230504112204031123030211220201112301f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba0111970112280401124c8004b01fe5980415003cb1fce01fa02c90211220201112301561f0140337fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112004c002c1111111311111110111211100f11110f0e11100e551d00d20c11210c0b11230b0a11220a09112109081123080711220706112106051123050411220403021123020111240111255625f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba01119044c26821005f5e100bae3022682100bebc200bae30226821011e1a300bae30226821017d78400ba004f0057005e006501fe145f046c22112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a00500280107910681057104610351024db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310051015001f4298100fab9f2e0fa112011221120111f1121111f111e1122111e111d1121111d111c1122111c111b1121111b111a1122111a1119112111191118112211181117112111171116112211161115112111151114112211141113112111131112112211121111112111111110112211100f11210f0e11220e0d11210d005201fe0c11220c0b11210b0a11220a09112109081122080711210706112206051121050411220403112103021122020111210111225621561d21c705917f9c561481010b2259f40a6fa131e2917f9b2e81010b2259f40a6fa131e2917f9c561581010b2259f40a6fa131e292307f9c81010b56100259f40a6fa131e2917f9170e2b3005301f4f2e2cf708050821005f5e100f82a25035625025622021129c85550715007cb1f15cb095003fa02cececccec9112011221120111f1121111f111e1122111e111d1121111d111c1122111c111b1121111b111a1122111a111911211119111811221118111711211117111611221116111511211115111411221114005401f61113112111131112112211121111112111111110112211100f11210f0e11220e0d11210d0c11220c0b11210b0a11220a09112109081122080711210706112206051121050411220403112103021122020111210111225623561f70f82ac87001ca0055215023cece01fa02c9315210041123040311260302112402005501fc103410237f591126800bd721d3073010561045103441300111260155505505c85a80285003cb057601cb03ccccc9c87101cb0113ca00830901cb0d22f90058018100f8a92801aaf7b101cbff58fa027301cb6accf400c901fb00111c1120111c111b111f111b111a111e111a1119111d11191118111c11181117111b1117005600a01116111a11161115111911151114111811141113111711131112111611121111111511111110111411100f11130f0e11120e0d11110d0c11100c10bf10ae109d108c107b106a1059104810374644451501fe145f046c22112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a005802901079106810571046103510248219d1a94a200001db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310059015001f42a8100fab9f2e0fa112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a1119112211191118112111181117112311171116112211161115112111151114112311141113112211131112112111121111112311111110112211100f11210f0e11230e0d11220d005a01fe0c11210c0b11230b0a11220a09112109081123080711220706112106051123050411220403112103021123020111220111215623561d21c705917f9c561481010b2259f40a6fa131e2917f9b2e81010b2259f40a6fa131e2917f9c561581010b2259f40a6fa131e292307f9c81010b56100259f40a6fa131e2917f9170e2b3005b02faf2e2cf112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e1123db3c701123562280501126c80142005c01fc5520765004cb1f58fa02cecec913021123020111240140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112005d00301111111311111110111211100f11110f0e11100e10df551c01fe30112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111005f02a61110111211100f11110f0e11100e10df10ce10bd2410bd10ac109b108a5560db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310060015001ee6c61561181010b2359f40a6fa131f2e2c2561181010b2359f40a6fa193fa003092306de2206ef2d080112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a111911221119111811211118111711231117111611221116111511211115111411231114006101b01113112211131112112111121111112311111110112211100f11210f0e11230e0d11220d0c11210c0b11230b0a11220a09112109081123080711220706112106051123050411220403112103021123020111220111215621006203e68ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a111381010b56245623206e953059f4593098c801fa024133f441e211135623db3c33701122562180501125c800e90142006301f45520775004cb1f58fa02cecec9021122020111230140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb005620011121010d81010bf4593004a4111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a1117111611191116111511181115111411171114006400761113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d104f10be10ad109c108b107a1069105807103645401023043ce3022682101dcd6500bae30226821023c34600bae30226821029b92700ba00660068006e007001fc10575f07111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105700670174104610354430571ec87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001fe30112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111006902bc1110111211100f11110f0e11100e10df10ce10bd10ac109b108a10798218e8d4a5100025106844741513db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31006a015001f06c612a8100fab9f2e0fa112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a1119112211191118112111181117112311171116112211161115112111151114112311141113112211131112112111121111112311111110112211100f11210f0e11230e006b01700d11220d0c11210c0b11230b0a11220a09112109081123080711220706112106051123050411220403112103021123020111220111215623006c02f0561d21c705917f9c561481010b2259f40a6fa131e2917f9b2e81010b2259f40a6fa131e2917f9c561581010b2259f40a6fa131e292307f9c81010b56100259f40a6fa131e2917f9170e2b3f2e2cf0d81010b56245624206e953059f4593098c801fa024133f441e20d5623db3c33701123562180501124c80142006d01f4552080175004cb1f58fa02cecec9021123020111220140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0004a4111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a1117111611191116111511181115111411171114111311161113111211151112009901fc112611281126112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112006f02cc1111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a078218e8d4a510007f274879103644554313db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db3100730150043ce3022682102faf0800bae30226821035a4e900bae302268210068e7780ba00710078007f008401fc112611281126112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112007202cc1111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a078218e8d4a5100070274879103644554313db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310073015001f06c61112011251120111f1124111f111e1123111e111d1122111d111c1121111c111b1125111b111a1124111a1119112311191118112211181117112111171116112511161115112411151114112311141113112211131112112111121111112511111110112411100f11230f0e11220e0d11210d0c11250c007401f40b11240b0a11230a09112209081121080711250706112406051123050411220403112103021125020111240111235625f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba01119112011211120111f1120111f111e111f111e007502fc111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550edb3c01112501112470112380501125c85530785005cb1f5003fa02ca00cecec9031123030142007601f8021121020111220140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111c1120111c111b111f111b111a111e111a1119111d11191118111c11181117111b11171116111a11161115111911151114111811141113111711131112111611121111111511111110111411100f11130f0e11120e0d11110d0077000e0c11100c553b1201fc112611281126112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112007902c81111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a078218e8d4a510005415765044451503db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31007a015001f06c61112011241120111f1123111f111e1122111e111d1121111d111c1124111c111b1123111b111a1122111a1119112111191118112411181117112311171116112211161115112111151114112411141113112311131112112211121111112111111110112411100f11230f0e11220e0d11210d0c11240c007b01f40b11230b0a11220a09112109081124080711230706112206051121050411240403112303021122020111210111245622f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba01119112011211120111f1120111f111e111f111e007c02fe111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550edb3c112270112480501126c85520795004cb1f58fa02cecec90311220302112302011124010142007d01fc40037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be007e002810ad109c108b107a10691058104710364513504201fe30112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111008002a61110111211100f11110f0e11100e10df10ce10bd2410bd10ac109b108a5560db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310081015001f6365f04112111231121112011221120111f1123111f111e1122111e111d1123111d111c1122111c111b1123111b111a1122111a1119112311191118112211181117112311171116112211161115112311151114112211141113112311131112112211121111112311111110112211100f11230f0e11220e0d11230d008202f60c11220c0b11230b0a11220a0911230908112208071123070611220605112305041122040311230302112202011123011122db3c70701124562380501127c855207a5004cb1f58fa02cecec9443002112402011125014343c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111e1120111e111d111f111d0142008300b0111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d04fc8ee65f08111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551de026821007270e00bae30226821007bfa480bae3022600850087008c009202a42f6e936d5710df88c88258c000000000000000000000000101cb67ccc970fb00c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db3100860150003400000000636c656172656450656e64696e67526571756573747301fe30112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111008802bc1110111211100f11110f0e11100e10df10ce10bd10ac109b108a10798218e8d4a5100025106844741513db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310089015001f06c615220111181010bf459f2e2cd112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a1119112211191118112111181117112311171116112211161115112111151114112311141113112211131112112111121111112311111110112211100f11210f008a02fa0e11230e0d0c11210c0b11230b0a09112109081123080706112106051123050403112103021123020111215623db3c33701122562180501125c85520755004cb1f58fa02cecec9021122020111230140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0004a5111d1120111d111c111f111c111b111e111b0142008b00c8111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be10ad109c108b107a1069105807103645401301fe30112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111008d02a61110111211100f11110f0e11100e10df10ce10bd2410bd10ac109b108a5560db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31008e015001ee6c615210111781010bf459f2e2d12081010b2359f40a6fa193fa003092306de2206ef2d080112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a11191122111911181121111811171123111711161122111611151121111501111401111311221113008f02fe111211211112011111011110112211100f11210f1e0d11220d0c11210c1b0a11220a09112109180711220706112106150411220403112103120111220111215621f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba011195622db3c33700142009001f680501123ab00015622011126c8552080345004cb1f58fa02cecec9021124020111220140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0004a5111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a1117111611191116111511181115111411171114009100761113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be10ad109c108b107a1069105807103640550403044e821008583b00bae3026c223223821008f0d180bae30223821009896800bae302238209312d00ba0093009a009c009d01fe30112511271125112411261124112311251123112211241122112111231121112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111009402a61110111211100f11110f0e11100e10df10ce10bd2410bd10ac109b108a5560db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310095015001f66c61561581010b2359f40a6fa131f2e2d0561581010b2359f40a6fa193fa003092306de2206ef2d0805220111781010bf45930112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a11191122111911181121111811171123111711161122111611151121111500960192111411231114111311121121111211111123111111100f11210f0e11230e0d0c11210c0b11230b0a091121090811230807061121060511230504031121030211230201112156235623009702fc20c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e25623db3c33701123562180500142009801fa1124c8552080315004cb1f58fa02cecec9021123020111220140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0004a5111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511120099005c1111111411111110111311100f11120f0e11110e0d11100d10cf10be10ad109c108b107a1069105807103645040301fc10245f04111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a107910681057009b01cc1046103544308d0860000000000000000000000000000000000000000000000000000000000000000004c705b3f2e2bc25f2e2bec87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001d85f05111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d571f561f111f013001c293f2c2c0e30e0311250301112401021123020411220411210211200204111f04111e02111d0204111c04111b02111a02041119041118021117020411160411150211140204111304111202111102041110044e1f104d4b1c104a48191047451603009e03f82382103a699d00ba917f9823821006052340bae2e30f112501112401112011231120111f1122111f111e1121111e111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a1117111611191116111511181115111411171114111311161113111211151112111111141111009f00a100af01fc112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a1119112211191118112111181117112311171116112211161115112111151114112311141113112211131112112111121111112311111110112211100f11210f0e11230e0d11220d0c11210c0b11230b0a11220a00a000ca09112109081123080711220706112106051123050411220403112103021123020111240111258218174876e800f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba01119044c2382103b023380bae30223821006146580bae3022382103b8b87c0bae3022382101ddca740ba00a200a400a600a801f810245f040111110181010b017071216e955b59f4593098c801cf004133f441e20fa4111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311110f11120f111100a3019c0e11100e10df10ce10bd10ac109b108a107910681057104610354403c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001fe10245f0401111181010bf45930111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a111811171119111711161118111611151117111511141116111411131115111311121114111211111113111111120f11110f0e11100e10df10ce10bd10ac109b108a107910681057104600a5016c10354430c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001fc5f05111e1120111e111d111f111d561c111f111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a1079106810571046103500a701c2440382100bebc20070801125c801803858cb1fcb09c94343c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015004f8e30223821017e6c640ba917f9823821017f60880bae2917f9823821018148d00bae2e3022382101a76e700bae3021125011124010211230204112204031121030211200204111f0403111e0302111d0204111c0403111b0302111a02041119040311180302111702041116040311150302111402041113040311120300a900ab00ad00ae01fc10245f04111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105700aa01dc104610354430804056227003561dc8552080425004cb1f12cece01fa02c95621503340137fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001fc10345f04111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105700ac01c01046103544308e57eda2edfb56177022821017e6c640ba9c303157178218174876e800208e2b22821017f60880ba9c303157178218746a528800208e1302821018148d00ba965b705717db31e0111801e2e201111801bc965715f8231115ded8013001cc5f05111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d014d003c0211110204111004103f102e104d103c102b104a1039102810471036102500501110111311100f11120f0e11110e0d11100d10cf10be10ad109c108b107a1069105810471036102501f655608210178d45195008cb1f16cb3f14cb0958fa02ce01206e9430cf84809201cee201fa02cec9111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a111911181119111811171118111711161117111611151116111511141115111411131114111311121113111200b101e01111111211111110111111100f11100f10ef10de10cd10bc10ab109a108910781067105610451034112155025622561f70f82ac87001ca0055215023cece01fa02c9315210041126040311250302112302103410237f591125800bd721d307301056104510344130011125015550550500b201fac85a80285003cb057601cb03ccccc9c87101cb0113ca00830901cb0d22f90058018100f8a92801aaf7b101cbff58fa027301cb6accf400c901fb00111c1120111c111b111f111b111a111e111a1119111d11191118111c11181117111b11171116111a111611151119111511141118111411131117111311121116111200b301ca1111111511111110111411100f11130f0e11120e0d11110d0c11100c10bf10ae109d108c107b106a1059104810374614403305c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310150042c8210178d4519bae30220c001e30220c044e30220c03400b500c700cc00d901fc5b11208020d721d33f31d309fa00fa40d72c01916d93fa4001e230fa0031112011221120111f1121111f111e1122111e111d1121111d111c1122111c111b1121111b111a1122111a11191121111911181122111811171121111711161122111611151121111511141122111411131121111311121122111211111121111100b602fc1110112211100f11210f0e11220e0d11210d0c11220c0b11210b0a11220a09112109081122080711210706112206051121050411220403112103021122020111230111245623db3c112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119111811191118013a00b702f41117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e5302ba91308eba22bc8e2ff84282100bebc20070801125c801803858cb1fcb09c94343c8cf8580ca00cf8440ce01fa02806acf40f400c901fb008e84f842db3ce2e25621014700b804fe82103b9aca00be8ec956218ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a8f2456218209312d00ba8e98562182103a699d00ba9a111a8218174876e800a0e30e111ae30de211201123112000e900b900c500c603fa5621821006052340ba8ed2562257208218174876e8008ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a8f1b562182100623a7c0ba8e8e561b206ef2d080562301c705e302e30de2111a00e900ba00c301fe57237f112182100e4e1c00ba93705721de111f1122111f111e1121111e111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf00bb027010be552adb3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db3100bc015004f6375366e30f561b111e1120111e111d111f111d111c1120111c111b111f111b7080505622111d111c1122111c111b111a1122111a111911181122111811171116112211161115111411221114111311121122111211111110112211100f0e11220e0d0c11220c0b0a11220a0910480710460502112202011123db3c00bd00bf014200c101fc112011221120111f1121111f111e1122111e111d1121111d111c1122111c111b1121111b111a1122111a1119112111191118112211181117112111171116112211161115112111151114112211141113112111131112112211121111112111111110112211100f11210f0e11220e0d11210d0c11220c0b11210b0a11220a00be01dc09112109081122080711210706112206050411220403021122020111228218e8d4a510008ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a3206a400e901f0112011221120111f1121111f111e1122111e111d1121111d8218e8d4a510005623111e111d1123111d111c111b1123111b111a111911231119111811171123111711161115112311151114111311231113111211111123111111100f11230f0e0d11230d0c0b11230b0a091123094718451644140311240100c000ea20c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e23206a501fc01112401561d015622011127c8553080445005cb1f13ca00cececec903112103021122020111240140337fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111c1120111c111b111f111b111a111e111a1119111d11191118111c11181117111b11171116111a111611151119111511141118111411131117111300c200701112111611121111111511111110111411100f11130f0e11120e0d11110d0c11100c10bf10ae109d108c107b106a1059104810374644050301f25622561381010b2259f40a6fa131f2e2e0561381010b22714133f40a6fa19401d70030925b6de2206ef2d080b3f2e2e1561272a906561201be99f82325a182015180bc9170e28e290111130181010b017f71216e955b59f4593098c801cf004133f441e21110a401112001111011121110e30d01112001111000c400ca305710571f561d70561281010b7159f4826fa520965023d7003058966c216d326d01e2908e3d8e1d111381010b56147071216e955b59f4593098c801cf004133f441e21113de81010b561402714133f4746fa520965023d7003058966c216d326d01e2e85b00f656228218e8d4a5100020c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e201e4111f1122111f111e1121111e111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be552a012a01f85b11208020d721d309fa0031fa40fa40d430112011221120111f1121111f111e1122111e111d1121111d111c1122111c111b1121111b111a1122111a1119112111191118112211181117112111171116112211161115112111151114112211141113112111131112112211121111112111111110112211100f11210f00c803f60e11220e0d11210d0c11220c0b11210b0a11220a09112109081122080711210706112206051121050411220403112103021122020111230111245622db3c571b571b571b22b3f2e2d3561f561f561bbc96571a1121fb048e955722111e5619b9e300111d1120111d1118111d1118e2111c1120111c111b111f111b013a00c900cb02f4f842111d1121111d111c1120111c111b111f111b111b111e111b1117111b11171116111a11161115111911151114111811141113111711131112111611121111111511111110111411100f11130f0e11120e0d11110d0c11100c10bf10ae109d108c107b106a105910481037465010344130db3c111c1120111c014700ca0076111b111f111b111d111e111d03111d0303111a030211190201111801111703111603021115020111140111130311120302111102011110010f55a301c4111a111e111a111a111d111a1118111c11181116111a11161115111911151114111811141113111711131112111611121111111511111110111411100f11130f0e11120e0d11110d0c11100c10bf10ae109d108c107b106a10591048103746144553013001fe5b11208020d721d200fa4031fa40fa4030112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e00cd048a0d11210d0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c8219d1a94a20005622e30f013a00ce00d000d201e2111581010b56245617206e953059f4593098c801fa024133f441e2112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114111311121111111055e0562100cf01928ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a07a400e901c6562301111681010bf45930112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114111311121111111055e05623562200d100e820c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e207a502fc88d0112111221121112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f10ef10de10cd10bc10ab191a00d300d4002400000000696e76697465207375636365737301e2107810671056104510341023562459f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb0056235622821aba7def300000d502e8821005f5e10073707005926d36df443056265006c8553082107bdd97de5005cb1f13cb3f01fa02ce01206e9430cf84809201cee2c956225044441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb0082089896807370705625978218e8d4a5100097821f172b5af000e288d0562601c800d600d7002800000000696e766974656420617070726f76656401fa553082107362d09c5005cb1f13cb3f01fa02cecec956265530441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00820898968011227370562302011126011127c8553080445005cb1f13ca00cececec9561f040311230302112502112401441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb0000d801cc111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be552a013002fe8efd5b11208020d721fa00fa40112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d00da00de02f60c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c561c5623c705f2e2d1112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119111811191118111711181117013a00db016c1116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e56225110112500dc01f8f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb0035111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a00dd01be1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105770071046103544030200f00426e020c006e30220c007e30220c031e30220c01700df00e400eb00f101fa5b11208020d721fa00fa40288100fab9f2e0fa112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f00e002f40e11210e0d11210d0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119111811191118111711181117013a00e1016c1116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e56225110112500e201f6f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00102f81010b02011122011123206e953059f4593098c801fa024133f441e2111e1120111e00e301e8111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e0f10ce10bd10ac109b108a10791068105710461035443012013001fa5b11208020d721fa00fa40112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d00e502fc0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119111811191118111711181117111611171116111511161115013a00e601541114111511141113111411131112111311121111111211111110111111100f11100f550e56225110112500e701b2f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00562200e802f68ebdeda2edfb5618561a6e22c101917f9821c00091209170e2e2915b8ea021c2008e16571a5cbe9c571901111801a1111770db31e1a17011199131e2e301e2d801111b01a0111a0211130281010b02011122011123206e953059f4593098c801fa024133f441e205a4111e1120111e111d111f111d111c111e111c00e900ea00ee561981010bf4826fa5209502fa00305895316d326d01e2908e5b22c101935bdb31e05320be91209122e266a15033a1228e1e01111b0181010b01561c5004206e953059f4593098c801fa024133f441e29a3220111b81010bf45930e281010b21111c59f4746fa5209502fa00305895316d326d01e2e85b01c2111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112051113051110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068075514013001fa5b11208020d721fa00fa40112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d00ec02fc0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119111811191118111711181117111611171116111511161115013a00ed01541114111511141113111411131112111311121111111211111110111111100f11100f550e56225110112500ee01f4f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00562101111481010bf45930112011221120111f1121111f111e1120111e111d111f111d00ef01d6111c111e111c111b111d111b111a111c111a1119111b11191118111a111811171119111711161118111611151117111511141116111411151112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a1079106810571046103544030200f001e420c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e2013002fe8efd5b11208020d721fa00fa40288100fab9f2e0fa112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f00f200f702f40e11210e0d11210d0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117013a00f3016e1116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d66112400f401def8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111a8218e8d4a51000a01e81010b0111228218e8d4a5100000f501fc206e953059f4593098c801fa024133f441e206a4111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f10ef106e10cd10bc10ab109a00f60170108907085505c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db3101500426e020c005e30220c008e30220c009e30220c00a00f801000107010a01fa5b11208020d721fa00fa40112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d00f902fc0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119111811191118111711181117111611171116111511161115013a00fa01541114111511141113111411131112111311121111111211111110111111100f11100f550e56225110112500fb01f6f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00112011221120111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b00fc03fc111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551ddb3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed5400fd015000ff01342cc000f2e2c35210111181010bf4593029c2009309a509de111000fe00e420c101915b8e6a561c21be983101111b01a1111ae020111da17020561c81010b2559f40a6fa1318e1930561b81010b2459f40a6fa193fa003092306de2206ef2d080de81010b03a003111c0301111c01206e953059f4593098c801fa024133f441e201111a01111ba01118111a11181119e20004db3101f85b11208020d721fa00d200fa4020112011231120111f1122111f111e1121111e111d1123111d111c1122111c111b1121111b111a1123111a1119112211191118112111181117112311171116112211161115112111151114112311141113112211131112112111121111112311111110112211100f11210f0e11230e010102fe0d11220d0c11210c0b11230b0a11220a09112109081123080711220706112106051123050411220403112103021123020111240111255623db3c385620953a09111f09925720e223f2e2be2a81010b562359f40a6fa131b3f2e2c60a81010b56227f71216e955b59f4593098c801cf004133f441e208a4f82382015180a021013a010202fc925723e30e111e1123111e111d1122111d111c1121111c111b1120111b111a111f111a1119111e11191118111d11181117111c11171116111b11161115111a11151114111911141113111811131112111711121111111611111110111511100f11140f0e11130e0d11120d0c11110c0b11100b108f109e0d107c109b105a0103010601fc35111e111f111e111d111e111d111c111d111c111b111c111b7f561b111d111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f10ef10de5e2a102b109a10691718105610451034010402fc4013db3c82083d0900708209312d005410222602562602562902112b1045c855608210178d45195008cb1f16cb3f14cb0958fa02ce01206e9430cf84809201cee201fa02cec912011125017050237fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0007112207111f111e111d111c111b111a111911181117111601420105002a1115111411131112111111100f0e0d0c0b55700a0901be1049103840770603f8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00013001fa5b11208020d721fa00fa40112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d010802fa0c11210c0b11210b0a11210a09112109081121080711210706112106051121050411210403112103021121020111220111235622db3c5622392ac200f2e2c71c81010b50097071216e955b59f4593098c801cf004133f441e208a4f82382015180a050981c112011231120111f1122111f111e1121111e111d1120111d013a010901c0111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be552a012a04fee30220c0358f785b11208020d721fa0030561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f561f563f56415621ed41ed43ed44ed45ed47965b01111801a0ed67ed65ed64ed63ed6180227fed118aed41edf101f2ff1117010b012b0130012d01fc5b11208020d721fa00fa4020112011221120111f1121111f111e1122111e111d1121111d111c1122111c111b1121111b111a1122111a1119112111191118112211181117112111171116112211161115112111151114112211141113112111131112112211121111112111111110112211100f11210f0e11220e0d11210d010c02f40c11220c0b11210b0a11220a09112109081122080711210706112206051121050411220403112103021122020111230111245622db3c5621015623011125112211231122112111221121112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a1119013a010d02f81118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f10ef10de10cd10bc10ab109a10891078106710561045103403112503db3c112011231120111f1122111f111e1121111e111d1120111d111c111f111c111b111e111b010e012904f6322ac200f2e2c2f8232bbef2e2df547cbc21bc209132923101e270561181010b7159f4826fa520965023d7003058966c216d326d01e2908eb12091249170e292307f97b39223b39170e2e2e30081010b561302714133f4746fa520965023d7003058966c216d326d01e2e85f04e30f111e1120111e111d111f111d010f01130127012801fa5312b9998219d1a94a200002a4988218e8d4a5100002e2112011271120111f1126111f111e1125111e111d1124111d111c1123111c111b1122111b111a1121111a111911271119111811261118111711251117111611241116111511231115111411221114111311211113111211271112111111261111111011251110011002fe0f11240f0e11230e0d11220d0c11210c0b11270b0a11260a09112509081124080711230706112206051121050411270403112603021125020111240111235624db3c707154510101112a015260562601562701562a1045c855608210178d45195008cb1f16cb3f14cb0958fa02ce01206e9430cf84809201cee201fa02cec90142011101f441300111280140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111f1126111f111e1125111e111d1124111d111c1123111c111b1122111b111a1121111a1119112011191118111f11181117111e11171116111d11161115111c11151114111b11141113111a1113111211191112111111181111011200521110111711100f11160f0e11150e0d11140d0c11130c0b11120b0a11110a09111009108f107e55661604d02f81010bf4826fa5209502fa00305895316d326d01e2908ae85b561081010bf4826fa5209502fa00305895316d326d01e2908ae85b561581010bf4826fa5209502fa00305895316d326d01e2908ae85b561681010bf4826fa5209502fa00305895316d326d01e290011401160118011a01fc112011241120111f1123111f111e1122111e111d1121111d111c1124111c111b1123111b111a1122111a1119112111191118112411181117112311171116112211161115112111151114112411141113112311131112112211121111112111111110112411100f11230f0e11220e0d11210d0c11240c0b11230b0a11220a011502f609112109081124080711230706112206051121050411240403112303021122020111210111245621db3c7071112756235627c8552080355004cb1f58fa02cecec941300111270140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0081010b2d02112259f4746fa5209502fa00305895316d326d01e20142011d01fc112011241120111f1123111f111e1122111e111d1121111d111c1124111c111b1123111b111a1122111a1119112111191118112411181117112311171116112211161115112111151114112411141113112311131112112211121111112111111110112411100f11230f0e11220e0d11210d0c11240c0b11230b0a11220a011702f609112109081124080711230706112206051121050411240403112303021122020111210111245621db3c7071112756235627c8552080355004cb1f58fa02cecec941300111270140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0081010b2e02112259f4746fa5209502fa00305895316d326d01e20142011d01fc112011241120111f1123111f111e1122111e111d1121111d111c1124111c111b1123111b111a1122111a1119112111191118112411181117112311171116112211161115112111151114112411141113112311131112112211121111112111111110112411100f11230f0e11220e0d11210d0c11240c0b11230b0a11220a011902fc09112109081124080711230706112206051121050411240403112303021122020111210111245621db3c70711127aa0056235627c8552080355004cb1f58fa02cecec941300111270140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0081010b561302112259f4746fa5209502fa00305895316d326d01e20142011d03fe8ae85b112011221120111f1121111f111e1122111e111d1121111d5622111d111c1122111c111b111a1122111a111911181122111811171116112211161115111411221114111311121122111211111110112211100f0e11220e0d0c11220c0b0a11220a0908112208070611220605041122040302112202011123db3c7071011b0142011f01fc112011241120111f1123111f111e1122111e111d1121111d111c1124111c111b1123111b111a1122111a1119112111191118112411181117112311171116112211161115112111151114112411141113112311131112112211121111112111111110112411100f11230f0e11220e0d11210d0c11240c0b11230b0a11220a011c02fc09112109081124080711230706112206051121050411240403112303021122020111210111245621db3c70711127a70356235627c8552080355004cb1f58fa02cecec941300111270140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0081010b561402112259f4746fa5209502fa00305895316d326d01e20142011d01fc112111251121112011241120111f1123111f111e1122111e111d1121111d111c1120111c111b111f111b111a111e111a1119111d11191118111c11181117111b11171116111a11161115111911151114111811141113111711131112111611121111111511111110111411100f11130f0e11120e0d11110d0c11100c10bf011e002010ae109d108c107b106a10591048103702b2821aba7def300056245626c8552080355004cb1f58fa02cecec940037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb002b925722e30e561781010bf4826fa5209502fa00305895316d326d01e2908ae85b35571f7f0120012302e2705617c2009cf82326a1821925b3aee000b99170e29d30561678265618a07aa98601a8de112011211120111f1121111f111e1121111e5621111e111d111c111b111a111911181117111611151114111311121111111055e01122db3c707121561e5626a05361562701562b01562b1045c80142012101fc55608210178d45195008cb1f16cb3f14cb0958fa02ce01206e9430cf84809201cee201fa02cec940037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00707370228b021302112602011128c8553082107bdd97de5005cb1f13cb3f01fa02ce01206e9430cf84809201cee2c95620431402112602112401441359012200eec8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e01fc112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d0c11210c0b11210b0a11210a012402f809112109081121080711210706112106051121050411210403112103021121020111210111235621db3c7071112656235626c8552080355004cb1f58fa02cecec941300111260140037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb0081010b561802112259f4746fa5209502fa00305895316d326d01e20142012501fc112111221121112011211120111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f10ef10de10cd10bc10ab109a1089012600141078106710561045103400c25b38383838386d70530007111f0709111e0907111d0709111c0907111b0709111a0907111907091118090711170709111609071115070911140907111307091112090711110709111009107f109e107d109c107b109a103970487910365044050300dc111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105706103544301201cc111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100f11120f0e11110e0d11100d10cf10be10ad109c108b107a106910581047103645135042012a01aef8276f102082112a05f200bc9782103b9aca00a196308208989680e273707045135064c8553082107362d09c5005cb1f13cb3f01fa02cecec956244344441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00013001fc111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105710461035012c00784430f82325a1218218e8d4a51000a90612a05618c2009c56185882109ca41900a986a09131e2111b561ba120c2fff2e2c501111a01111ba0111911170442e02082107ac8d559bae302208210595f07bcbae30220820b93b1cebae30220c038012e01310134013501f45b11208020d721fa40d2003026b3f2e2bd6d019c30f82a561e01562101126f03de561a01c8598210ca77fdc25003cb1f01fa02216eb38e117f01ca0001206ef2d0806f235023cececc947032ca00e2c90170804043137fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111e1120111e111d111f111d012f01b0111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d01300164c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001fe5b11208020d721d33ffa00d72c01916d93fa4001e23127b3f2e2bdf8425622c705f2e2bc111b21a120c2fff2e2c5f8416f2443305230fa40fa0071d721fa00fa00306c6170f83a811f4070f836aa00a0bcf2e2bf708040504356237f111fc8553082107bdd97de5005cb1f13cb3f01fa02ce01206e9430cf84809201cee2c9013201f85620044313111d01441359c8cf8580ca00cf8440ce01fa02806acf40f400c901fb00111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a1118111711191117111611181116111511171115111411161114111311151113111211141112111111131111111011121110013301780f11110f0e11100e551dc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001ce5b5720111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d014d021ae3022082102508d66abae302010136013801fe5b5720f842111f1121111f111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105701370274104610354430db3cc87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db310147015001f65b11208020d721d2000193d30931ded2000192d309926d01e2d72c01916d93fa4001e201f40431f40431d430d0f40431f4043021206ef2d080112111221121112011221120111f1122111f111e1122111e111d1122111d111c1122111c111b1122111b111a1122111a111911221119111811221118111711221117013903fa1116112211161115112211151114112211141113112211131112112211121111112211111110112211100f11220f0e11220e0d11220d0c11220c0b11220b0a11220a091122090811220807112207061122060511220504112204031122030211230201112401db3c5621206ef2d0805220b99457215722e30d1120561a013a013e013f01f4112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d0c11210c0b11210b013b02fc0a11210a09112109112108070655405621561f70f82ac87001ca0055215023cece01fa02c9315210f842fa443159c85980285003cb057601cb03ccccc9f900206ef2d0808100f8a928018100f8a928ba8e2af842561f01c705f2e2bc259257218e1935571a571a7f561f06a40411200406111b0604111a04506604e2e30d013c013d0004572100cc111f1120111f111e111f111e111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e0022311120206ef2d0801122206ef2d080fb0402f8216e925b7092c705e28e9c561181010bf4826fa5209502fa00305895316d326d01e231908ae830de111d1120111d111c111f111c111b111e111b111a111d111a1119111c11191118111b11181117111a11171116111911161115111811151114111711141113111611131112111511121111111411111110111311100140014a01fc561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e561e563e5640563f1120113f1120111f113e111f111e113d111e111d113c111d111c113b111c111b113a111b111a1139111a111911381119111811371118111711361117014102f61116113511161115113411151114113311141113113211131112113111121111113011111110112f11100f112e0f0e112d0e0d112c0d0c112b0c0b112a0b0a11290a09112809081127080711260706112506051124050411230403112203021141020111420111405621db3c57105f0f57105f0f31111f1121111f0142014501f4112011211120111f1121111f111e1121111e111d1121111d111c1121111c111b1121111b111a1121111a1119112111191118112111181117112111171116112111161115112111151114112111141113112111131112112111121111112111111110112111100f11210f0e11210e0d11210d0c11210c0b11210b014301f40a11210a09112109112108070655405621561f70f82ac87001ca0055215023cece01fa02c9315210c85980285003cb057601cb03ccccc91122800bd721d30730c87401cb027001cb071123f90001018100f8a92801aaf7b1011122cbffc9d0fa4030112011211120111f1120111f111e111f111e111d111e111d014400d8111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f10ef10de10cd10bc10ab109a108910781067105610451034413001fc111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e10df10ce10bd10ac109b108a10791068105710461035102402112202014602fc01112201db3c81010b561502112359f4746fa5209502fa00305895316d326d01e23102112202031121030211200203111f0302111e0203111d0302111c0203111b0302111a0203111903021118020311170302111602031115030211140203111303021112020311110302111002103f102e103d102c103b102a103910280147014901cc7382100bebc20070f82a562552726d6d50046d50036d01c8556082102508d66a5008cb1f266eb3977f01ca0016cb099636705006ca00e2246eb3977f01ca0014cb099634705004ca00e258206e9430cf84809201cee2f400f40001c8f40012f400cdc90350440148002ec8cf8580ca00cf8440ce01fa02806acf40f400c901fb00000c10375e32102401860f11120f0e11110e0d11100d10cf552b12c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001521120f90182f0535d44514554aee036c09a39063fe878ca30a50cb9b5f8f6f1ec24f13e3169e9bae302014c01c8111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d014d01caf8425621c705f2e2bcf8276f1082103b9aca00a1562101706d40037fc8cf8580ca00cf8440ce01fa02806acf40f400c901fb00c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54db31015001c8111e1120111e111d111f111d111c111e111c111b111d111b111a111c111a1119111b11191118111a11181117111911171116111811161115111711151114111611141113111511131112111411121111111311111110111211100f11110f0e11100e551d014f0160c87f01ca0011211120111f111e111d111c111b111a111911181117111611151114111311121111111055e0db3cc9ed54015001f6011120011121ce01111e01ce01111c01ce111ac8ce01111901ce011117206e9430cf84809201cee2011115fa02c8011114fa0201111201f400011110fa0240ed59fa02cb291af40018f40006c8f40015cb0313cb03f400f40001c8f40013f40013ca0013cb0913cb0913cb1f13cb0714ca0014ca0014cb1f15cb1f0151001615ce15cb0915cccdcdcdcd0201200153015b0201200154015a0201580155015703fbb3c57b513434800063a37e903e903e80154800f45636cf38c355881588158815881588158815881588158815881588158815881588158815881588158815881588158815881588158815881588158815881588158815881588158815c855c855c855c855c855c855c855c855c855c855c855c855c855c855c855c855c860015e016201560040572157215721572157215721572157215721572157215721572157215721572102016e01580159025fa783da89a1a400031d1bf481f481f400aa4007a2b1b679c61a4d67e5c57aac26a7deac2eac26ac3aac24d9ced9ced8af015e0162024fa4cfda89a1a400031d1bf481f481f400aa4007a2b1b679c61aac38ac3cae24ae20be1eae227ebe1d015e01620255bbb02ed44d0d200018e8dfa40fa40fa00552003d158db3ce30df82a561b015622015621016cc46cc46c948015e016202039c34015c015d0245bf7ed44d0d200018e8dfa40fa40fa00552003d158db3ce30d2857105f0f57105f0f318015e01620287bd3ed44d0d200018e8dfa40fa40fa00552003d158db3ce30d8218e8d4a510008201518056185618c85959fa02cb29c92e513e513e513e513e513e546ec56cbb6cbb6cbb8015e016203f4308d08600000000000000000000000000000000000000000000000000000000000000000048d08600000000000000000000000000000000000000000000000000000000000000000046d706d5471116d6d6d53556d6d6d6d70547555207070228921561c561cf82382103b9aca00f82af84201112101c705e300015f016001610043800000000000000000000000000000000000000000000000000000000000000000100004307000880311200303111f0302111e0202111d0202111c0202111b02111a0211190211180211170211160211150211140211130211120211110211104f1e4d1c4b1a49184716552201fefa40fa40fa40d401d0fa40fa40d72c01916d93fa4001e201fa00d430d0fa00f404fa00fa00d3295902f404f404d430d0f404d303d303f404f404d430d0f404f404d200d309d309d31fd307d200d200d31fd31ffa40d309d430111e1121111e111e1120111e111e111f111e1115111611155721111f1120111f111e111f111e016300b4111d111e111d111c111d111c111b111c111b111a111b111a1119111a11191118111911181117111811171116111711161115111611151114111511141113111411131112111311121111111211111110111111100f11100f550e23697063');
    const builder = beginCell();
    builder.storeUint(0, 1);
    initJettonMinterSharded_init_args({ $$type: 'JettonMinterSharded_init_args', totalSupply, owner, jettonContent })(builder);
    const __data = builder.endCell();
    return { code: __code, data: __data };
}

export const JettonMinterSharded_errors = {
    2: { message: "Stack underflow" },
    3: { message: "Stack overflow" },
    4: { message: "Integer overflow" },
    5: { message: "Integer out of expected range" },
    6: { message: "Invalid opcode" },
    7: { message: "Type check error" },
    8: { message: "Cell overflow" },
    9: { message: "Cell underflow" },
    10: { message: "Dictionary error" },
    11: { message: "'Unknown' error" },
    12: { message: "Fatal error" },
    13: { message: "Out of gas error" },
    14: { message: "Virtualization error" },
    32: { message: "Action list is invalid" },
    33: { message: "Action list is too long" },
    34: { message: "Action is invalid or not supported" },
    35: { message: "Invalid source address in outbound message" },
    36: { message: "Invalid destination address in outbound message" },
    37: { message: "Not enough Toncoin" },
    38: { message: "Not enough extra currencies" },
    39: { message: "Outbound message does not fit into a cell after rewriting" },
    40: { message: "Cannot process a message" },
    41: { message: "Library reference is null" },
    42: { message: "Library change action error" },
    43: { message: "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree" },
    50: { message: "Account state size exceeded limits" },
    128: { message: "Null reference exception" },
    129: { message: "Invalid serialization prefix" },
    130: { message: "Invalid incoming message" },
    131: { message: "Constraints error" },
    132: { message: "Access denied" },
    133: { message: "Contract stopped" },
    134: { message: "Invalid argument" },
    135: { message: "Code of a contract was not found" },
    136: { message: "Invalid standard address" },
    138: { message: "Not a basechain address" },
} as const

export const JettonMinterSharded_errors_backward = {
    "Stack underflow": 2,
    "Stack overflow": 3,
    "Integer overflow": 4,
    "Integer out of expected range": 5,
    "Invalid opcode": 6,
    "Type check error": 7,
    "Cell overflow": 8,
    "Cell underflow": 9,
    "Dictionary error": 10,
    "'Unknown' error": 11,
    "Fatal error": 12,
    "Out of gas error": 13,
    "Virtualization error": 14,
    "Action list is invalid": 32,
    "Action list is too long": 33,
    "Action is invalid or not supported": 34,
    "Invalid source address in outbound message": 35,
    "Invalid destination address in outbound message": 36,
    "Not enough Toncoin": 37,
    "Not enough extra currencies": 38,
    "Outbound message does not fit into a cell after rewriting": 39,
    "Cannot process a message": 40,
    "Library reference is null": 41,
    "Library change action error": 42,
    "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree": 43,
    "Account state size exceeded limits": 50,
    "Null reference exception": 128,
    "Invalid serialization prefix": 129,
    "Invalid incoming message": 130,
    "Constraints error": 131,
    "Access denied": 132,
    "Contract stopped": 133,
    "Invalid argument": 134,
    "Code of a contract was not found": 135,
    "Invalid standard address": 136,
    "Not a basechain address": 138,
} as const

const JettonMinterSharded_types: ABIType[] = [
    {"name":"DataSize","header":null,"fields":[{"name":"cells","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bits","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"refs","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"SignedBundle","header":null,"fields":[{"name":"signature","type":{"kind":"simple","type":"fixed-bytes","optional":false,"format":64}},{"name":"signedData","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"StateInit","header":null,"fields":[{"name":"code","type":{"kind":"simple","type":"cell","optional":false}},{"name":"data","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Context","header":null,"fields":[{"name":"bounceable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"raw","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"SendParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"code","type":{"kind":"simple","type":"cell","optional":true}},{"name":"data","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"MessageParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"to","type":{"kind":"simple","type":"address","optional":false}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"DeployParameters","header":null,"fields":[{"name":"mode","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"body","type":{"kind":"simple","type":"cell","optional":true}},{"name":"value","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"bounce","type":{"kind":"simple","type":"bool","optional":false}},{"name":"init","type":{"kind":"simple","type":"StateInit","optional":false}}]},
    {"name":"StdAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":8}},{"name":"address","type":{"kind":"simple","type":"uint","optional":false,"format":256}}]},
    {"name":"VarAddress","header":null,"fields":[{"name":"workchain","type":{"kind":"simple","type":"int","optional":false,"format":32}},{"name":"address","type":{"kind":"simple","type":"slice","optional":false}}]},
    {"name":"BasechainAddress","header":null,"fields":[{"name":"hash","type":{"kind":"simple","type":"int","optional":true,"format":257}}]},
    {"name":"JettonWalletSharded$Data","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"ownerAfterRecovery","type":{"kind":"simple","type":"address","optional":false}},{"name":"minter","type":{"kind":"simple","type":"address","optional":false}},{"name":"nominee","type":{"kind":"simple","type":"address","optional":false}},{"name":"invitor","type":{"kind":"simple","type":"address","optional":false}},{"name":"invitor0","type":{"kind":"simple","type":"address","optional":true}},{"name":"balance","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"turnover","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"debts","type":{"kind":"dict","key":"address","value":"uint","valueFormat":"coins"}},{"name":"debt","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"insurance","type":{"kind":"simple","type":"Insurance","optional":false}},{"name":"invited","type":{"kind":"dict","key":"address","value":"uint","valueFormat":"coins"}},{"name":"friends","type":{"kind":"dict","key":"address","value":"uint","valueFormat":"coins"}},{"name":"closeFriendsAndVouched","type":{"kind":"dict","key":"address","value":"bool"}},{"name":"closeFriendsCount","type":{"kind":"simple","type":"uint","optional":false,"format":4}},{"name":"recoveryVouchersCount","type":{"kind":"simple","type":"uint","optional":false,"format":4}},{"name":"pendingRequests","type":{"kind":"dict","key":"address","value":"uint","valueFormat":"coins"}},{"name":"followers","type":{"kind":"dict","key":"address","value":"uint","valueFormat":"coins"}},{"name":"followings","type":{"kind":"dict","key":"address","value":"uint","valueFormat":"coins"}},{"name":"reports","type":{"kind":"dict","key":"address","value":"bool"}},{"name":"reportReason","type":{"kind":"simple","type":"bool","optional":false}},{"name":"reporterCount","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"disputerCount","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"reportResolutionTime","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"connections","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"terminated","type":{"kind":"simple","type":"bool","optional":false}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"accountInitTime","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"lastTxnTime","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"lastMsgTo","type":{"kind":"simple","type":"address","optional":false}},{"name":"version","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"baseWalletCode","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Insurance","header":null,"fields":[{"name":"emi","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"startStop","type":{"kind":"simple","type":"uint","optional":false,"format":42}}]},
    {"name":"JettonNotification","header":1935855772,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonBurn","header":1499400124,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"responseDestination","type":{"kind":"simple","type":"address","optional":true}},{"name":"customPayload","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"JettonBurnNotification","header":2078119902,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"responseDestination","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"ProvideWalletAddress","header":745978227,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"ownerAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"includeAddress","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"TakeWalletAddress","header":3513996288,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"walletAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"ownerAddress","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"ProvideWalletBalance","header":2059982169,"fields":[{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}},{"name":"includeVerifyInfo","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"VerifyInfo","header":null,"fields":[{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"minter","type":{"kind":"simple","type":"address","optional":false}},{"name":"code","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"TakeWalletBalance","header":3396861378,"fields":[{"name":"balance","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"verifyInfo","type":{"kind":"simple","type":"VerifyInfo","optional":true}}]},
    {"name":"Mint","header":1680571655,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}},{"name":"mintMessage","type":{"kind":"simple","type":"JettonTransferInternal","optional":false}}]},
    {"name":"JettonTransfer","header":260734629,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"destination","type":{"kind":"simple","type":"address","optional":false}},{"name":"responseDestination","type":{"kind":"simple","type":"address","optional":true}},{"name":"customPayload","type":{"kind":"simple","type":"cell","optional":true}},{"name":"forwardTonAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonTransferInternal","header":395134233,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"walletVersion","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"responseDestination","type":{"kind":"simple","type":"address","optional":true}},{"name":"forwardTonAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"JettonExcesses","header":3576854235,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}}]},
    {"name":"ClaimTON","header":60010958,"fields":[{"name":"receiver","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"RequestUpgradeCode","header":56,"fields":[{"name":"version","type":{"kind":"simple","type":"uint","optional":false,"format":10}}]},
    {"name":"Upgrade","header":621336170,"fields":[{"name":"rootVersion","type":{"kind":"simple","type":"uint","optional":true,"format":10}},{"name":"walletVersion","type":{"kind":"simple","type":"uint","optional":true,"format":10}},{"name":"sender","type":{"kind":"simple","type":"address","optional":true}},{"name":"newRootData","type":{"kind":"simple","type":"cell","optional":true}},{"name":"newRootCode","type":{"kind":"simple","type":"cell","optional":true}},{"name":"newWalletData","type":{"kind":"simple","type":"cell","optional":true}},{"name":"newWalletCode","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"ChangeOwner","header":3,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"newOwner","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InviteInternal","header":1,"fields":[{"name":"version","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"invitor","type":{"kind":"simple","type":"address","optional":false}},{"name":"currentWalletCode","type":{"kind":"simple","type":"cell","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"Follow","header":2,"fields":[{"name":"target","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"FollowInternal","header":23,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"Unfollow","header":21,"fields":[{"name":"target","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":16}}]},
    {"name":"UnfollowInternal","header":5,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"FriendRequestInternal","header":6,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"ConfirmRequestInternal","header":7,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"ReportInternal","header":8,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"reason","type":{"kind":"simple","type":"bool","optional":false}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"DisputeInternal","header":9,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"ResolutionInternal","header":10,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"Report","header":17,"fields":[{"name":"target","type":{"kind":"simple","type":"address","optional":false}},{"name":"reason","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"Dispute","header":18,"fields":[{"name":"target","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ProcessComplaint","header":19,"fields":[{"name":"target","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AdminAction","header":20,"fields":[{"name":"action","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"value","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"FriendsAndFollowings","header":null,"fields":[{"name":"friends","type":{"kind":"simple","type":"cell","optional":true}},{"name":"followings","type":{"kind":"simple","type":"cell","optional":true}},{"name":"followers","type":{"kind":"simple","type":"cell","optional":true}},{"name":"invited","type":{"kind":"simple","type":"cell","optional":true}},{"name":"pendingRequests","type":{"kind":"simple","type":"cell","optional":true}},{"name":"debts","type":{"kind":"simple","type":"cell","optional":true}},{"name":"reports","type":{"kind":"simple","type":"cell","optional":true}}]},
    {"name":"OtherStateConsts","header":null,"fields":[{"name":"reportReason","type":{"kind":"simple","type":"bool","optional":false}},{"name":"reporterCount","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"disputerCount","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"reportResolutionTime","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"connections","type":{"kind":"simple","type":"uint","optional":false,"format":8}},{"name":"terminated","type":{"kind":"simple","type":"bool","optional":false}},{"name":"mbrpAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"closureWait","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"active","type":{"kind":"simple","type":"bool","optional":false}},{"name":"lastMsgTo","type":{"kind":"simple","type":"address","optional":false}},{"name":"insurance","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"InvitorNominee","header":null,"fields":[{"name":"invitor","type":{"kind":"simple","type":"address","optional":false}},{"name":"nominee","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"JettonData","header":null,"fields":[{"name":"totalSupply","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"mintable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"content","type":{"kind":"simple","type":"cell","optional":false}},{"name":"jettonWalletCode","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"JettonWalletData","header":null,"fields":[{"name":"balance","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"minter","type":{"kind":"simple","type":"address","optional":false}},{"name":"code","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"MaybeAddress","header":null,"fields":[{"name":"address","type":{"kind":"simple","type":"address","optional":true}}]},
    {"name":"JettonUpdateContent","header":4,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"content","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"Mintable","header":37,"fields":[{"name":"mintable","type":{"kind":"simple","type":"bool","optional":false}}]},
    {"name":"UnfriendInternal","header":49,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"ReInviteInternal","header":50,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"UnInviteInternal","header":52,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"U","header":51,"fields":[{"name":"op","type":{"kind":"simple","type":"uint","optional":false,"format":6}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":true,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":true}},{"name":"receiver","type":{"kind":"simple","type":"address","optional":true}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"AccCloseBurnInternal","header":53,"fields":[{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"forwardPayload","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"EnquireInvitor","header":54,"fields":[{"name":"sender","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"TakeInvitor","header":55,"fields":[{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"invitor","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"AccountGenerated","header":64,"fields":[{"name":"deployer","type":{"kind":"simple","type":"address","optional":false}},{"name":"newAccount","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ApplyGrant","header":65,"fields":[{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"amount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"VoteProposal","header":66,"fields":[{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"proposer","type":{"kind":"simple","type":"address","optional":false}},{"name":"turnover","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}}]},
    {"name":"CitizenAdded","header":67,"fields":[{"name":"sender","type":{"kind":"simple","type":"address","optional":false}},{"name":"newAccount","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"InviteApproval","header":68,"fields":[{"name":"approved","type":{"kind":"simple","type":"bool","optional":false}},{"name":"invitor","type":{"kind":"simple","type":"address","optional":false}},{"name":"invitee","type":{"kind":"simple","type":"address","optional":false}},{"name":"approver","type":{"kind":"simple","type":"address","optional":false}}]},
    {"name":"ChangeMetadataUri","header":3414567170,"fields":[{"name":"queryId","type":{"kind":"simple","type":"uint","optional":false,"format":64}},{"name":"metadata","type":{"kind":"simple","type":"slice","optional":false,"format":"remainder"}}]},
    {"name":"SliceBitsAndRefs","header":null,"fields":[{"name":"bits","type":{"kind":"simple","type":"int","optional":false,"format":257}},{"name":"refs","type":{"kind":"simple","type":"int","optional":false,"format":257}}]},
    {"name":"ShardDeployParameters","header":null,"fields":[{"name":"deployParameters","type":{"kind":"simple","type":"DeployParameters","optional":false}},{"name":"shard","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"ShardMessageParameters","header":null,"fields":[{"name":"messageParameters","type":{"kind":"simple","type":"MessageParameters","optional":false}},{"name":"shard","type":{"kind":"simple","type":"uint","optional":false,"format":8}}]},
    {"name":"JettonMinterState","header":null,"fields":[{"name":"totalSupply","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"mintable","type":{"kind":"simple","type":"bool","optional":false}},{"name":"adminAddress","type":{"kind":"simple","type":"address","optional":false}},{"name":"jettonContent","type":{"kind":"simple","type":"cell","optional":false}},{"name":"jettonWalletCode","type":{"kind":"simple","type":"cell","optional":false}}]},
    {"name":"JettonMinterSharded$Data","header":null,"fields":[{"name":"totalSupply","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"totalAccounts","type":{"kind":"simple","type":"uint","optional":false,"format":32}},{"name":"treasurySurplus","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"treasuryDeficits","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"owner","type":{"kind":"simple","type":"address","optional":false}},{"name":"jettonContent","type":{"kind":"simple","type":"cell","optional":false}},{"name":"jettonWalletCode","type":{"kind":"simple","type":"cell","optional":false}},{"name":"jettonWalletInitialCode","type":{"kind":"simple","type":"cell","optional":false}},{"name":"version","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"walletVersion","type":{"kind":"simple","type":"uint","optional":false,"format":10}},{"name":"tosHash","type":{"kind":"simple","type":"string","optional":false}},{"name":"mbrpAmount","type":{"kind":"simple","type":"uint","optional":false,"format":"coins"}},{"name":"publicWorks","type":{"kind":"dict","key":"address","value":"uint","valueFormat":10}},{"name":"votes","type":{"kind":"dict","key":"address","value":"uint","valueFormat":20}},{"name":"crowdFund","type":{"kind":"dict","key":"uint","keyFormat":10,"value":"uint","valueFormat":10}}]},
]

const JettonMinterSharded_opcodes = {
    "JettonNotification": 1935855772,
    "JettonBurn": 1499400124,
    "JettonBurnNotification": 2078119902,
    "ProvideWalletAddress": 745978227,
    "TakeWalletAddress": 3513996288,
    "ProvideWalletBalance": 2059982169,
    "TakeWalletBalance": 3396861378,
    "Mint": 1680571655,
    "JettonTransfer": 260734629,
    "JettonTransferInternal": 395134233,
    "JettonExcesses": 3576854235,
    "ClaimTON": 60010958,
    "RequestUpgradeCode": 56,
    "Upgrade": 621336170,
    "ChangeOwner": 3,
    "InviteInternal": 1,
    "Follow": 2,
    "FollowInternal": 23,
    "Unfollow": 21,
    "UnfollowInternal": 5,
    "FriendRequestInternal": 6,
    "ConfirmRequestInternal": 7,
    "ReportInternal": 8,
    "DisputeInternal": 9,
    "ResolutionInternal": 10,
    "Report": 17,
    "Dispute": 18,
    "ProcessComplaint": 19,
    "AdminAction": 20,
    "JettonUpdateContent": 4,
    "Mintable": 37,
    "UnfriendInternal": 49,
    "ReInviteInternal": 50,
    "UnInviteInternal": 52,
    "U": 51,
    "AccCloseBurnInternal": 53,
    "EnquireInvitor": 54,
    "TakeInvitor": 55,
    "AccountGenerated": 64,
    "ApplyGrant": 65,
    "VoteProposal": 66,
    "CitizenAdded": 67,
    "InviteApproval": 68,
    "ChangeMetadataUri": 3414567170,
}

const JettonMinterSharded_getters: ABIGetter[] = [
    {"name":"state","methodId":77589,"arguments":[],"returnType":{"kind":"simple","type":"JettonMinterSharded$Data","optional":false}},
    {"name":"get_jetton_data","methodId":106029,"arguments":[],"returnType":{"kind":"simple","type":"JettonMinterState","optional":false}},
    {"name":"get_wallet_address","methodId":103289,"arguments":[{"name":"ownerAddress","type":{"kind":"simple","type":"address","optional":false}}],"returnType":{"kind":"simple","type":"address","optional":false}},
]

export const JettonMinterSharded_getterMapping: { [key: string]: string } = {
    'state': 'getState',
    'get_jetton_data': 'getGetJettonData',
    'get_wallet_address': 'getGetWalletAddress',
}

const JettonMinterSharded_receivers: ABIReceiver[] = [
    {"receiver":"internal","message":{"kind":"typed","type":"ProvideWalletAddress"}},
    {"receiver":"internal","message":{"kind":"typed","type":"JettonBurnNotification"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Mint"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ClaimTON"}},
    {"receiver":"internal","message":{"kind":"typed","type":"JettonUpdateContent"}},
    {"receiver":"internal","message":{"kind":"typed","type":"RequestUpgradeCode"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeOwner"}},
    {"receiver":"internal","message":{"kind":"typed","type":"InviteApproval"}},
    {"receiver":"internal","message":{"kind":"any"}},
    {"receiver":"internal","message":{"kind":"empty"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ApplyGrant"}},
    {"receiver":"internal","message":{"kind":"typed","type":"VoteProposal"}},
    {"receiver":"internal","message":{"kind":"typed","type":"ChangeMetadataUri"}},
    {"receiver":"internal","message":{"kind":"typed","type":"Upgrade"}},
]

export const gasForBurn = 8000n;
export const gasForTransfer = 11050n;
export const minTonsForStorage = 10000000n;
export const Basechain = 0n;
export const walletStateInitCells = 300n;
export const walletStateInitBits = 250000n;
export const MBRP_AMOUNT = 1000000000000n;
export const CLOSURE_WAIT = 86400n;
export const ZERO_ADDRESS = address("EQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM9c");
export const INCORRECT_SENDER = 700n;
export const ACCOUNT_TERMINATED = 701n;
export const ACCOUNT_INACTIVE = 702n;
export const INSUFFICIENT_GAS_SENT = 703n;
export const RESERVED_INTERNAL = 704n;
export const UPGRADE_WALLET = 705n;
export const NO_PENDING_REQUEST = 706n;
export const CANT_UNFOLLOW_REPORTED = 707n;
export const INSUFFICIENT_BALANCE = 709n;
export const ALREADY_REPORTED = 710n;
export const ACCOUNT_NOT_REPORTED = 711n;
export const NOT_FOLLOWING = 717n;
export const CONNECTION_EXISTS = 719n;
export const NOT_FRIEND = 720n;
export const NOT_INVITOR = 721n;
export const ALREADY_INVITED = 723n;
export const UNAUTHORIZED_BURN = 724n;
export const MINT_CLOSED = 730n;
export const WRONG_WORKCHAIN = 734n;
export const WAIT_UNTIL_CLOSURE = 735n;
export const NOT_CLOSE_FRIEND = 736n;
export const ALREADY_VOUCHED = 737n;
export const MAX_CONNECTIONS = 250n;
export const prefixLength = 8n;

export class JettonMinterSharded implements Contract {
    
    public static readonly storageReserve = 0n;
    public static readonly errors = JettonMinterSharded_errors_backward;
    public static readonly opcodes = JettonMinterSharded_opcodes;
    
    static async init(totalSupply: bigint, owner: Address, jettonContent: Cell) {
        return await JettonMinterSharded_init(totalSupply, owner, jettonContent);
    }
    
    static async fromInit(totalSupply: bigint, owner: Address, jettonContent: Cell) {
        const __gen_init = await JettonMinterSharded_init(totalSupply, owner, jettonContent);
        const address = contractAddress(0, __gen_init);
        return new JettonMinterSharded(address, __gen_init);
    }
    
    static fromAddress(address: Address) {
        return new JettonMinterSharded(address);
    }
    
    readonly address: Address; 
    readonly init?: { code: Cell, data: Cell };
    readonly abi: ContractABI = {
        types:  JettonMinterSharded_types,
        getters: JettonMinterSharded_getters,
        receivers: JettonMinterSharded_receivers,
        errors: JettonMinterSharded_errors,
    };
    
    constructor(address: Address, init?: { code: Cell, data: Cell }) {
        this.address = address;
        this.init = init;
    }
    
    async send(provider: ContractProvider, via: Sender, args: { value: bigint, bounce?: boolean| null | undefined }, message: ProvideWalletAddress | JettonBurnNotification | Mint | ClaimTON | JettonUpdateContent | RequestUpgradeCode | ChangeOwner | InviteApproval | Slice | null | ApplyGrant | VoteProposal | ChangeMetadataUri | Upgrade) {
        
        let body: Cell | null = null;
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ProvideWalletAddress') {
            body = beginCell().store(storeProvideWalletAddress(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'JettonBurnNotification') {
            body = beginCell().store(storeJettonBurnNotification(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Mint') {
            body = beginCell().store(storeMint(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ClaimTON') {
            body = beginCell().store(storeClaimTON(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'JettonUpdateContent') {
            body = beginCell().store(storeJettonUpdateContent(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'RequestUpgradeCode') {
            body = beginCell().store(storeRequestUpgradeCode(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeOwner') {
            body = beginCell().store(storeChangeOwner(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'InviteApproval') {
            body = beginCell().store(storeInviteApproval(message)).endCell();
        }
        if (message && typeof message === 'object' && message instanceof Slice) {
            body = message.asCell();
        }
        if (message === null) {
            body = new Cell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ApplyGrant') {
            body = beginCell().store(storeApplyGrant(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'VoteProposal') {
            body = beginCell().store(storeVoteProposal(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'ChangeMetadataUri') {
            body = beginCell().store(storeChangeMetadataUri(message)).endCell();
        }
        if (message && typeof message === 'object' && !(message instanceof Slice) && message.$$type === 'Upgrade') {
            body = beginCell().store(storeUpgrade(message)).endCell();
        }
        if (body === null) { throw new Error('Invalid message type'); }
        
        await provider.internal(via, { ...args, body: body });
        
    }
    
    async getState(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('state', builder.build())).stack;
        const result = loadGetterTupleJettonMinterSharded$Data(source);
        return result;
    }
    
    async getGetJettonData(provider: ContractProvider) {
        const builder = new TupleBuilder();
        const source = (await provider.get('get_jetton_data', builder.build())).stack;
        const result = loadGetterTupleJettonMinterState(source);
        return result;
    }
    
    async getGetWalletAddress(provider: ContractProvider, ownerAddress: Address) {
        const builder = new TupleBuilder();
        builder.writeAddress(ownerAddress);
        const source = (await provider.get('get_wallet_address', builder.build())).stack;
        const result = source.readAddress();
        return result;
    }
    
}