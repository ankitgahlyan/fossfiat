import { Cell, Slice, Address, Builder, TupleReader, Dictionary, ContractProvider, Sender, Contract, ContractABI, DictionaryValue } from '@ton/core';
export type DataSize = {
    $$type: 'DataSize';
    cells: bigint;
    bits: bigint;
    refs: bigint;
};
export declare function storeDataSize(src: DataSize): (builder: Builder) => void;
export declare function loadDataSize(slice: Slice): {
    $$type: "DataSize";
    cells: bigint;
    bits: bigint;
    refs: bigint;
};
export declare function loadTupleDataSize(source: TupleReader): {
    $$type: "DataSize";
    cells: bigint;
    bits: bigint;
    refs: bigint;
};
export declare function loadGetterTupleDataSize(source: TupleReader): {
    $$type: "DataSize";
    cells: bigint;
    bits: bigint;
    refs: bigint;
};
export declare function storeTupleDataSize(source: DataSize): import("@ton/core").TupleItem[];
export declare function dictValueParserDataSize(): DictionaryValue<DataSize>;
export type SignedBundle = {
    $$type: 'SignedBundle';
    signature: Buffer;
    signedData: Slice;
};
export declare function storeSignedBundle(src: SignedBundle): (builder: Builder) => void;
export declare function loadSignedBundle(slice: Slice): {
    $$type: "SignedBundle";
    signature: Buffer<ArrayBufferLike>;
    signedData: Slice;
};
export declare function loadTupleSignedBundle(source: TupleReader): {
    $$type: "SignedBundle";
    signature: Buffer<ArrayBufferLike>;
    signedData: Slice;
};
export declare function loadGetterTupleSignedBundle(source: TupleReader): {
    $$type: "SignedBundle";
    signature: Buffer<ArrayBufferLike>;
    signedData: Slice;
};
export declare function storeTupleSignedBundle(source: SignedBundle): import("@ton/core").TupleItem[];
export declare function dictValueParserSignedBundle(): DictionaryValue<SignedBundle>;
export type StateInit = {
    $$type: 'StateInit';
    code: Cell;
    data: Cell;
};
export declare function storeStateInit(src: StateInit): (builder: Builder) => void;
export declare function loadStateInit(slice: Slice): {
    $$type: "StateInit";
    code: Cell;
    data: Cell;
};
export declare function loadTupleStateInit(source: TupleReader): {
    $$type: "StateInit";
    code: Cell;
    data: Cell;
};
export declare function loadGetterTupleStateInit(source: TupleReader): {
    $$type: "StateInit";
    code: Cell;
    data: Cell;
};
export declare function storeTupleStateInit(source: StateInit): import("@ton/core").TupleItem[];
export declare function dictValueParserStateInit(): DictionaryValue<StateInit>;
export type Context = {
    $$type: 'Context';
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
};
export declare function storeContext(src: Context): (builder: Builder) => void;
export declare function loadContext(slice: Slice): {
    $$type: "Context";
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
};
export declare function loadTupleContext(source: TupleReader): {
    $$type: "Context";
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
};
export declare function loadGetterTupleContext(source: TupleReader): {
    $$type: "Context";
    bounceable: boolean;
    sender: Address;
    value: bigint;
    raw: Slice;
};
export declare function storeTupleContext(source: Context): import("@ton/core").TupleItem[];
export declare function dictValueParserContext(): DictionaryValue<Context>;
export type SendParameters = {
    $$type: 'SendParameters';
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function storeSendParameters(src: SendParameters): (builder: Builder) => void;
export declare function loadSendParameters(slice: Slice): {
    $$type: "SendParameters";
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function loadTupleSendParameters(source: TupleReader): {
    $$type: "SendParameters";
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function loadGetterTupleSendParameters(source: TupleReader): {
    $$type: "SendParameters";
    mode: bigint;
    body: Cell | null;
    code: Cell | null;
    data: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function storeTupleSendParameters(source: SendParameters): import("@ton/core").TupleItem[];
export declare function dictValueParserSendParameters(): DictionaryValue<SendParameters>;
export type MessageParameters = {
    $$type: 'MessageParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function storeMessageParameters(src: MessageParameters): (builder: Builder) => void;
export declare function loadMessageParameters(slice: Slice): {
    $$type: "MessageParameters";
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function loadTupleMessageParameters(source: TupleReader): {
    $$type: "MessageParameters";
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function loadGetterTupleMessageParameters(source: TupleReader): {
    $$type: "MessageParameters";
    mode: bigint;
    body: Cell | null;
    value: bigint;
    to: Address;
    bounce: boolean;
};
export declare function storeTupleMessageParameters(source: MessageParameters): import("@ton/core").TupleItem[];
export declare function dictValueParserMessageParameters(): DictionaryValue<MessageParameters>;
export type DeployParameters = {
    $$type: 'DeployParameters';
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: StateInit;
};
export declare function storeDeployParameters(src: DeployParameters): (builder: Builder) => void;
export declare function loadDeployParameters(slice: Slice): {
    $$type: "DeployParameters";
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: {
        $$type: "StateInit";
        code: Cell;
        data: Cell;
    };
};
export declare function loadTupleDeployParameters(source: TupleReader): {
    $$type: "DeployParameters";
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: {
        $$type: "StateInit";
        code: Cell;
        data: Cell;
    };
};
export declare function loadGetterTupleDeployParameters(source: TupleReader): {
    $$type: "DeployParameters";
    mode: bigint;
    body: Cell | null;
    value: bigint;
    bounce: boolean;
    init: {
        $$type: "StateInit";
        code: Cell;
        data: Cell;
    };
};
export declare function storeTupleDeployParameters(source: DeployParameters): import("@ton/core").TupleItem[];
export declare function dictValueParserDeployParameters(): DictionaryValue<DeployParameters>;
export type StdAddress = {
    $$type: 'StdAddress';
    workchain: bigint;
    address: bigint;
};
export declare function storeStdAddress(src: StdAddress): (builder: Builder) => void;
export declare function loadStdAddress(slice: Slice): {
    $$type: "StdAddress";
    workchain: bigint;
    address: bigint;
};
export declare function loadTupleStdAddress(source: TupleReader): {
    $$type: "StdAddress";
    workchain: bigint;
    address: bigint;
};
export declare function loadGetterTupleStdAddress(source: TupleReader): {
    $$type: "StdAddress";
    workchain: bigint;
    address: bigint;
};
export declare function storeTupleStdAddress(source: StdAddress): import("@ton/core").TupleItem[];
export declare function dictValueParserStdAddress(): DictionaryValue<StdAddress>;
export type VarAddress = {
    $$type: 'VarAddress';
    workchain: bigint;
    address: Slice;
};
export declare function storeVarAddress(src: VarAddress): (builder: Builder) => void;
export declare function loadVarAddress(slice: Slice): {
    $$type: "VarAddress";
    workchain: bigint;
    address: Slice;
};
export declare function loadTupleVarAddress(source: TupleReader): {
    $$type: "VarAddress";
    workchain: bigint;
    address: Slice;
};
export declare function loadGetterTupleVarAddress(source: TupleReader): {
    $$type: "VarAddress";
    workchain: bigint;
    address: Slice;
};
export declare function storeTupleVarAddress(source: VarAddress): import("@ton/core").TupleItem[];
export declare function dictValueParserVarAddress(): DictionaryValue<VarAddress>;
export type BasechainAddress = {
    $$type: 'BasechainAddress';
    hash: bigint | null;
};
export declare function storeBasechainAddress(src: BasechainAddress): (builder: Builder) => void;
export declare function loadBasechainAddress(slice: Slice): {
    $$type: "BasechainAddress";
    hash: bigint | null;
};
export declare function loadTupleBasechainAddress(source: TupleReader): {
    $$type: "BasechainAddress";
    hash: bigint | null;
};
export declare function loadGetterTupleBasechainAddress(source: TupleReader): {
    $$type: "BasechainAddress";
    hash: bigint | null;
};
export declare function storeTupleBasechainAddress(source: BasechainAddress): import("@ton/core").TupleItem[];
export declare function dictValueParserBasechainAddress(): DictionaryValue<BasechainAddress>;
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
};
export declare function storeJettonWalletSharded$Data(src: JettonWalletSharded$Data): (builder: Builder) => void;
export declare function loadJettonWalletSharded$Data(slice: Slice): {
    $$type: "JettonWalletSharded$Data";
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
    insurance: {
        $$type: "Insurance";
        emi: bigint;
        startStop: bigint;
    };
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
};
export declare function loadTupleJettonWalletSharded$Data(source: TupleReader): {
    $$type: "JettonWalletSharded$Data";
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
    insurance: {
        $$type: "Insurance";
        emi: bigint;
        startStop: bigint;
    };
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
};
export declare function loadGetterTupleJettonWalletSharded$Data(source: TupleReader): {
    $$type: "JettonWalletSharded$Data";
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
    insurance: {
        $$type: "Insurance";
        emi: bigint;
        startStop: bigint;
    };
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
};
export declare function storeTupleJettonWalletSharded$Data(source: JettonWalletSharded$Data): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonWalletSharded$Data(): DictionaryValue<JettonWalletSharded$Data>;
export type Insurance = {
    $$type: 'Insurance';
    emi: bigint;
    startStop: bigint;
};
export declare function storeInsurance(src: Insurance): (builder: Builder) => void;
export declare function loadInsurance(slice: Slice): {
    $$type: "Insurance";
    emi: bigint;
    startStop: bigint;
};
export declare function loadTupleInsurance(source: TupleReader): {
    $$type: "Insurance";
    emi: bigint;
    startStop: bigint;
};
export declare function loadGetterTupleInsurance(source: TupleReader): {
    $$type: "Insurance";
    emi: bigint;
    startStop: bigint;
};
export declare function storeTupleInsurance(source: Insurance): import("@ton/core").TupleItem[];
export declare function dictValueParserInsurance(): DictionaryValue<Insurance>;
export type JettonNotification = {
    $$type: 'JettonNotification';
    queryId: bigint;
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeJettonNotification(src: JettonNotification): (builder: Builder) => void;
export declare function loadJettonNotification(slice: Slice): {
    $$type: "JettonNotification";
    queryId: bigint;
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleJettonNotification(source: TupleReader): {
    $$type: "JettonNotification";
    queryId: bigint;
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleJettonNotification(source: TupleReader): {
    $$type: "JettonNotification";
    queryId: bigint;
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleJettonNotification(source: JettonNotification): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonNotification(): DictionaryValue<JettonNotification>;
export type JettonBurn = {
    $$type: 'JettonBurn';
    queryId: bigint;
    amount: bigint;
    responseDestination: Address | null;
    customPayload: Cell | null;
};
export declare function storeJettonBurn(src: JettonBurn): (builder: Builder) => void;
export declare function loadJettonBurn(slice: Slice): {
    $$type: "JettonBurn";
    queryId: bigint;
    amount: bigint;
    responseDestination: Address | null;
    customPayload: Cell | null;
};
export declare function loadTupleJettonBurn(source: TupleReader): {
    $$type: "JettonBurn";
    queryId: bigint;
    amount: bigint;
    responseDestination: Address | null;
    customPayload: Cell | null;
};
export declare function loadGetterTupleJettonBurn(source: TupleReader): {
    $$type: "JettonBurn";
    queryId: bigint;
    amount: bigint;
    responseDestination: Address | null;
    customPayload: Cell | null;
};
export declare function storeTupleJettonBurn(source: JettonBurn): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonBurn(): DictionaryValue<JettonBurn>;
export type JettonBurnNotification = {
    $$type: 'JettonBurnNotification';
    queryId: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
};
export declare function storeJettonBurnNotification(src: JettonBurnNotification): (builder: Builder) => void;
export declare function loadJettonBurnNotification(slice: Slice): {
    $$type: "JettonBurnNotification";
    queryId: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
};
export declare function loadTupleJettonBurnNotification(source: TupleReader): {
    $$type: "JettonBurnNotification";
    queryId: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
};
export declare function loadGetterTupleJettonBurnNotification(source: TupleReader): {
    $$type: "JettonBurnNotification";
    queryId: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
};
export declare function storeTupleJettonBurnNotification(source: JettonBurnNotification): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonBurnNotification(): DictionaryValue<JettonBurnNotification>;
export type ProvideWalletAddress = {
    $$type: 'ProvideWalletAddress';
    queryId: bigint;
    ownerAddress: Address;
    includeAddress: boolean;
};
export declare function storeProvideWalletAddress(src: ProvideWalletAddress): (builder: Builder) => void;
export declare function loadProvideWalletAddress(slice: Slice): {
    $$type: "ProvideWalletAddress";
    queryId: bigint;
    ownerAddress: Address;
    includeAddress: boolean;
};
export declare function loadTupleProvideWalletAddress(source: TupleReader): {
    $$type: "ProvideWalletAddress";
    queryId: bigint;
    ownerAddress: Address;
    includeAddress: boolean;
};
export declare function loadGetterTupleProvideWalletAddress(source: TupleReader): {
    $$type: "ProvideWalletAddress";
    queryId: bigint;
    ownerAddress: Address;
    includeAddress: boolean;
};
export declare function storeTupleProvideWalletAddress(source: ProvideWalletAddress): import("@ton/core").TupleItem[];
export declare function dictValueParserProvideWalletAddress(): DictionaryValue<ProvideWalletAddress>;
export type TakeWalletAddress = {
    $$type: 'TakeWalletAddress';
    queryId: bigint;
    walletAddress: Address;
    ownerAddress: Cell | null;
};
export declare function storeTakeWalletAddress(src: TakeWalletAddress): (builder: Builder) => void;
export declare function loadTakeWalletAddress(slice: Slice): {
    $$type: "TakeWalletAddress";
    queryId: bigint;
    walletAddress: Address;
    ownerAddress: Cell | null;
};
export declare function loadTupleTakeWalletAddress(source: TupleReader): {
    $$type: "TakeWalletAddress";
    queryId: bigint;
    walletAddress: Address;
    ownerAddress: Cell | null;
};
export declare function loadGetterTupleTakeWalletAddress(source: TupleReader): {
    $$type: "TakeWalletAddress";
    queryId: bigint;
    walletAddress: Address;
    ownerAddress: Cell | null;
};
export declare function storeTupleTakeWalletAddress(source: TakeWalletAddress): import("@ton/core").TupleItem[];
export declare function dictValueParserTakeWalletAddress(): DictionaryValue<TakeWalletAddress>;
export type ProvideWalletBalance = {
    $$type: 'ProvideWalletBalance';
    receiver: Address;
    includeVerifyInfo: boolean;
};
export declare function storeProvideWalletBalance(src: ProvideWalletBalance): (builder: Builder) => void;
export declare function loadProvideWalletBalance(slice: Slice): {
    $$type: "ProvideWalletBalance";
    receiver: Address;
    includeVerifyInfo: boolean;
};
export declare function loadTupleProvideWalletBalance(source: TupleReader): {
    $$type: "ProvideWalletBalance";
    receiver: Address;
    includeVerifyInfo: boolean;
};
export declare function loadGetterTupleProvideWalletBalance(source: TupleReader): {
    $$type: "ProvideWalletBalance";
    receiver: Address;
    includeVerifyInfo: boolean;
};
export declare function storeTupleProvideWalletBalance(source: ProvideWalletBalance): import("@ton/core").TupleItem[];
export declare function dictValueParserProvideWalletBalance(): DictionaryValue<ProvideWalletBalance>;
export type VerifyInfo = {
    $$type: 'VerifyInfo';
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function storeVerifyInfo(src: VerifyInfo): (builder: Builder) => void;
export declare function loadVerifyInfo(slice: Slice): {
    $$type: "VerifyInfo";
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function loadTupleVerifyInfo(source: TupleReader): {
    $$type: "VerifyInfo";
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function loadGetterTupleVerifyInfo(source: TupleReader): {
    $$type: "VerifyInfo";
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function storeTupleVerifyInfo(source: VerifyInfo): import("@ton/core").TupleItem[];
export declare function dictValueParserVerifyInfo(): DictionaryValue<VerifyInfo>;
export type TakeWalletBalance = {
    $$type: 'TakeWalletBalance';
    balance: bigint;
    verifyInfo: VerifyInfo | null;
};
export declare function storeTakeWalletBalance(src: TakeWalletBalance): (builder: Builder) => void;
export declare function loadTakeWalletBalance(slice: Slice): {
    $$type: "TakeWalletBalance";
    balance: bigint;
    verifyInfo: {
        $$type: "VerifyInfo";
        owner: Address;
        minter: Address;
        code: Cell;
    } | null;
};
export declare function loadTupleTakeWalletBalance(source: TupleReader): {
    $$type: "TakeWalletBalance";
    balance: bigint;
    verifyInfo: {
        $$type: "VerifyInfo";
        owner: Address;
        minter: Address;
        code: Cell;
    } | null;
};
export declare function loadGetterTupleTakeWalletBalance(source: TupleReader): {
    $$type: "TakeWalletBalance";
    balance: bigint;
    verifyInfo: {
        $$type: "VerifyInfo";
        owner: Address;
        minter: Address;
        code: Cell;
    } | null;
};
export declare function storeTupleTakeWalletBalance(source: TakeWalletBalance): import("@ton/core").TupleItem[];
export declare function dictValueParserTakeWalletBalance(): DictionaryValue<TakeWalletBalance>;
export type Mint = {
    $$type: 'Mint';
    queryId: bigint;
    receiver: Address;
    mintMessage: JettonTransferInternal;
};
export declare function storeMint(src: Mint): (builder: Builder) => void;
export declare function loadMint(slice: Slice): {
    $$type: "Mint";
    queryId: bigint;
    receiver: Address;
    mintMessage: {
        $$type: "JettonTransferInternal";
        queryId: bigint;
        walletVersion: bigint;
        amount: bigint;
        sender: Address;
        responseDestination: Address | null;
        forwardTonAmount: bigint;
        forwardPayload: Slice;
    };
};
export declare function loadTupleMint(source: TupleReader): {
    $$type: "Mint";
    queryId: bigint;
    receiver: Address;
    mintMessage: {
        $$type: "JettonTransferInternal";
        queryId: bigint;
        walletVersion: bigint;
        amount: bigint;
        sender: Address;
        responseDestination: Address | null;
        forwardTonAmount: bigint;
        forwardPayload: Slice;
    };
};
export declare function loadGetterTupleMint(source: TupleReader): {
    $$type: "Mint";
    queryId: bigint;
    receiver: Address;
    mintMessage: {
        $$type: "JettonTransferInternal";
        queryId: bigint;
        walletVersion: bigint;
        amount: bigint;
        sender: Address;
        responseDestination: Address | null;
        forwardTonAmount: bigint;
        forwardPayload: Slice;
    };
};
export declare function storeTupleMint(source: Mint): import("@ton/core").TupleItem[];
export declare function dictValueParserMint(): DictionaryValue<Mint>;
export type JettonTransfer = {
    $$type: 'JettonTransfer';
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function storeJettonTransfer(src: JettonTransfer): (builder: Builder) => void;
export declare function loadJettonTransfer(slice: Slice): {
    $$type: "JettonTransfer";
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function loadTupleJettonTransfer(source: TupleReader): {
    $$type: "JettonTransfer";
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function loadGetterTupleJettonTransfer(source: TupleReader): {
    $$type: "JettonTransfer";
    queryId: bigint;
    amount: bigint;
    destination: Address;
    responseDestination: Address | null;
    customPayload: Cell | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function storeTupleJettonTransfer(source: JettonTransfer): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonTransfer(): DictionaryValue<JettonTransfer>;
export type JettonTransferInternal = {
    $$type: 'JettonTransferInternal';
    queryId: bigint;
    walletVersion: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function storeJettonTransferInternal(src: JettonTransferInternal): (builder: Builder) => void;
export declare function loadJettonTransferInternal(slice: Slice): {
    $$type: "JettonTransferInternal";
    queryId: bigint;
    walletVersion: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function loadTupleJettonTransferInternal(source: TupleReader): {
    $$type: "JettonTransferInternal";
    queryId: bigint;
    walletVersion: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function loadGetterTupleJettonTransferInternal(source: TupleReader): {
    $$type: "JettonTransferInternal";
    queryId: bigint;
    walletVersion: bigint;
    amount: bigint;
    sender: Address;
    responseDestination: Address | null;
    forwardTonAmount: bigint;
    forwardPayload: Slice;
};
export declare function storeTupleJettonTransferInternal(source: JettonTransferInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonTransferInternal(): DictionaryValue<JettonTransferInternal>;
export type JettonExcesses = {
    $$type: 'JettonExcesses';
    queryId: bigint;
};
export declare function storeJettonExcesses(src: JettonExcesses): (builder: Builder) => void;
export declare function loadJettonExcesses(slice: Slice): {
    $$type: "JettonExcesses";
    queryId: bigint;
};
export declare function loadTupleJettonExcesses(source: TupleReader): {
    $$type: "JettonExcesses";
    queryId: bigint;
};
export declare function loadGetterTupleJettonExcesses(source: TupleReader): {
    $$type: "JettonExcesses";
    queryId: bigint;
};
export declare function storeTupleJettonExcesses(source: JettonExcesses): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonExcesses(): DictionaryValue<JettonExcesses>;
export type ClaimTON = {
    $$type: 'ClaimTON';
    receiver: Address;
};
export declare function storeClaimTON(src: ClaimTON): (builder: Builder) => void;
export declare function loadClaimTON(slice: Slice): {
    $$type: "ClaimTON";
    receiver: Address;
};
export declare function loadTupleClaimTON(source: TupleReader): {
    $$type: "ClaimTON";
    receiver: Address;
};
export declare function loadGetterTupleClaimTON(source: TupleReader): {
    $$type: "ClaimTON";
    receiver: Address;
};
export declare function storeTupleClaimTON(source: ClaimTON): import("@ton/core").TupleItem[];
export declare function dictValueParserClaimTON(): DictionaryValue<ClaimTON>;
export type RequestUpgradeCode = {
    $$type: 'RequestUpgradeCode';
    version: bigint;
};
export declare function storeRequestUpgradeCode(src: RequestUpgradeCode): (builder: Builder) => void;
export declare function loadRequestUpgradeCode(slice: Slice): {
    $$type: "RequestUpgradeCode";
    version: bigint;
};
export declare function loadTupleRequestUpgradeCode(source: TupleReader): {
    $$type: "RequestUpgradeCode";
    version: bigint;
};
export declare function loadGetterTupleRequestUpgradeCode(source: TupleReader): {
    $$type: "RequestUpgradeCode";
    version: bigint;
};
export declare function storeTupleRequestUpgradeCode(source: RequestUpgradeCode): import("@ton/core").TupleItem[];
export declare function dictValueParserRequestUpgradeCode(): DictionaryValue<RequestUpgradeCode>;
export type Upgrade = {
    $$type: 'Upgrade';
    rootVersion: bigint | null;
    walletVersion: bigint | null;
    sender: Address | null;
    newRootData: Cell | null;
    newRootCode: Cell | null;
    newWalletData: Cell | null;
    newWalletCode: Cell | null;
};
export declare function storeUpgrade(src: Upgrade): (builder: Builder) => void;
export declare function loadUpgrade(slice: Slice): {
    $$type: "Upgrade";
    rootVersion: bigint | null;
    walletVersion: bigint | null;
    sender: Address | null;
    newRootData: Cell | null;
    newRootCode: Cell | null;
    newWalletData: Cell | null;
    newWalletCode: Cell | null;
};
export declare function loadTupleUpgrade(source: TupleReader): {
    $$type: "Upgrade";
    rootVersion: bigint | null;
    walletVersion: bigint | null;
    sender: Address | null;
    newRootData: Cell | null;
    newRootCode: Cell | null;
    newWalletData: Cell | null;
    newWalletCode: Cell | null;
};
export declare function loadGetterTupleUpgrade(source: TupleReader): {
    $$type: "Upgrade";
    rootVersion: bigint | null;
    walletVersion: bigint | null;
    sender: Address | null;
    newRootData: Cell | null;
    newRootCode: Cell | null;
    newWalletData: Cell | null;
    newWalletCode: Cell | null;
};
export declare function storeTupleUpgrade(source: Upgrade): import("@ton/core").TupleItem[];
export declare function dictValueParserUpgrade(): DictionaryValue<Upgrade>;
export type ChangeOwner = {
    $$type: 'ChangeOwner';
    queryId: bigint;
    newOwner: Address;
};
export declare function storeChangeOwner(src: ChangeOwner): (builder: Builder) => void;
export declare function loadChangeOwner(slice: Slice): {
    $$type: "ChangeOwner";
    queryId: bigint;
    newOwner: Address;
};
export declare function loadTupleChangeOwner(source: TupleReader): {
    $$type: "ChangeOwner";
    queryId: bigint;
    newOwner: Address;
};
export declare function loadGetterTupleChangeOwner(source: TupleReader): {
    $$type: "ChangeOwner";
    queryId: bigint;
    newOwner: Address;
};
export declare function storeTupleChangeOwner(source: ChangeOwner): import("@ton/core").TupleItem[];
export declare function dictValueParserChangeOwner(): DictionaryValue<ChangeOwner>;
export type InviteInternal = {
    $$type: 'InviteInternal';
    version: bigint;
    amount: bigint;
    sender: Address;
    invitor: Address;
    currentWalletCode: Cell;
    forwardPayload: Slice;
};
export declare function storeInviteInternal(src: InviteInternal): (builder: Builder) => void;
export declare function loadInviteInternal(slice: Slice): {
    $$type: "InviteInternal";
    version: bigint;
    amount: bigint;
    sender: Address;
    invitor: Address;
    currentWalletCode: Cell;
    forwardPayload: Slice;
};
export declare function loadTupleInviteInternal(source: TupleReader): {
    $$type: "InviteInternal";
    version: bigint;
    amount: bigint;
    sender: Address;
    invitor: Address;
    currentWalletCode: Cell;
    forwardPayload: Slice;
};
export declare function loadGetterTupleInviteInternal(source: TupleReader): {
    $$type: "InviteInternal";
    version: bigint;
    amount: bigint;
    sender: Address;
    invitor: Address;
    currentWalletCode: Cell;
    forwardPayload: Slice;
};
export declare function storeTupleInviteInternal(source: InviteInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserInviteInternal(): DictionaryValue<InviteInternal>;
export type Follow = {
    $$type: 'Follow';
    target: Address;
    amount: bigint;
};
export declare function storeFollow(src: Follow): (builder: Builder) => void;
export declare function loadFollow(slice: Slice): {
    $$type: "Follow";
    target: Address;
    amount: bigint;
};
export declare function loadTupleFollow(source: TupleReader): {
    $$type: "Follow";
    target: Address;
    amount: bigint;
};
export declare function loadGetterTupleFollow(source: TupleReader): {
    $$type: "Follow";
    target: Address;
    amount: bigint;
};
export declare function storeTupleFollow(source: Follow): import("@ton/core").TupleItem[];
export declare function dictValueParserFollow(): DictionaryValue<Follow>;
export type FollowInternal = {
    $$type: 'FollowInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeFollowInternal(src: FollowInternal): (builder: Builder) => void;
export declare function loadFollowInternal(slice: Slice): {
    $$type: "FollowInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleFollowInternal(source: TupleReader): {
    $$type: "FollowInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleFollowInternal(source: TupleReader): {
    $$type: "FollowInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleFollowInternal(source: FollowInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserFollowInternal(): DictionaryValue<FollowInternal>;
export type Unfollow = {
    $$type: 'Unfollow';
    target: Address;
    amount: bigint;
};
export declare function storeUnfollow(src: Unfollow): (builder: Builder) => void;
export declare function loadUnfollow(slice: Slice): {
    $$type: "Unfollow";
    target: Address;
    amount: bigint;
};
export declare function loadTupleUnfollow(source: TupleReader): {
    $$type: "Unfollow";
    target: Address;
    amount: bigint;
};
export declare function loadGetterTupleUnfollow(source: TupleReader): {
    $$type: "Unfollow";
    target: Address;
    amount: bigint;
};
export declare function storeTupleUnfollow(source: Unfollow): import("@ton/core").TupleItem[];
export declare function dictValueParserUnfollow(): DictionaryValue<Unfollow>;
export type UnfollowInternal = {
    $$type: 'UnfollowInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeUnfollowInternal(src: UnfollowInternal): (builder: Builder) => void;
export declare function loadUnfollowInternal(slice: Slice): {
    $$type: "UnfollowInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleUnfollowInternal(source: TupleReader): {
    $$type: "UnfollowInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleUnfollowInternal(source: TupleReader): {
    $$type: "UnfollowInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleUnfollowInternal(source: UnfollowInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserUnfollowInternal(): DictionaryValue<UnfollowInternal>;
export type FriendRequestInternal = {
    $$type: 'FriendRequestInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeFriendRequestInternal(src: FriendRequestInternal): (builder: Builder) => void;
export declare function loadFriendRequestInternal(slice: Slice): {
    $$type: "FriendRequestInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleFriendRequestInternal(source: TupleReader): {
    $$type: "FriendRequestInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleFriendRequestInternal(source: TupleReader): {
    $$type: "FriendRequestInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleFriendRequestInternal(source: FriendRequestInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserFriendRequestInternal(): DictionaryValue<FriendRequestInternal>;
export type ConfirmRequestInternal = {
    $$type: 'ConfirmRequestInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeConfirmRequestInternal(src: ConfirmRequestInternal): (builder: Builder) => void;
export declare function loadConfirmRequestInternal(slice: Slice): {
    $$type: "ConfirmRequestInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleConfirmRequestInternal(source: TupleReader): {
    $$type: "ConfirmRequestInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleConfirmRequestInternal(source: TupleReader): {
    $$type: "ConfirmRequestInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleConfirmRequestInternal(source: ConfirmRequestInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserConfirmRequestInternal(): DictionaryValue<ConfirmRequestInternal>;
export type ReportInternal = {
    $$type: 'ReportInternal';
    amount: bigint;
    reason: boolean;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeReportInternal(src: ReportInternal): (builder: Builder) => void;
export declare function loadReportInternal(slice: Slice): {
    $$type: "ReportInternal";
    amount: bigint;
    reason: boolean;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleReportInternal(source: TupleReader): {
    $$type: "ReportInternal";
    amount: bigint;
    reason: boolean;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleReportInternal(source: TupleReader): {
    $$type: "ReportInternal";
    amount: bigint;
    reason: boolean;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleReportInternal(source: ReportInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserReportInternal(): DictionaryValue<ReportInternal>;
export type DisputeInternal = {
    $$type: 'DisputeInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeDisputeInternal(src: DisputeInternal): (builder: Builder) => void;
export declare function loadDisputeInternal(slice: Slice): {
    $$type: "DisputeInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleDisputeInternal(source: TupleReader): {
    $$type: "DisputeInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleDisputeInternal(source: TupleReader): {
    $$type: "DisputeInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleDisputeInternal(source: DisputeInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserDisputeInternal(): DictionaryValue<DisputeInternal>;
export type ResolutionInternal = {
    $$type: 'ResolutionInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeResolutionInternal(src: ResolutionInternal): (builder: Builder) => void;
export declare function loadResolutionInternal(slice: Slice): {
    $$type: "ResolutionInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleResolutionInternal(source: TupleReader): {
    $$type: "ResolutionInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleResolutionInternal(source: TupleReader): {
    $$type: "ResolutionInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleResolutionInternal(source: ResolutionInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserResolutionInternal(): DictionaryValue<ResolutionInternal>;
export type Report = {
    $$type: 'Report';
    target: Address;
    reason: boolean;
};
export declare function storeReport(src: Report): (builder: Builder) => void;
export declare function loadReport(slice: Slice): {
    $$type: "Report";
    target: Address;
    reason: boolean;
};
export declare function loadTupleReport(source: TupleReader): {
    $$type: "Report";
    target: Address;
    reason: boolean;
};
export declare function loadGetterTupleReport(source: TupleReader): {
    $$type: "Report";
    target: Address;
    reason: boolean;
};
export declare function storeTupleReport(source: Report): import("@ton/core").TupleItem[];
export declare function dictValueParserReport(): DictionaryValue<Report>;
export type Dispute = {
    $$type: 'Dispute';
    target: Address;
};
export declare function storeDispute(src: Dispute): (builder: Builder) => void;
export declare function loadDispute(slice: Slice): {
    $$type: "Dispute";
    target: Address;
};
export declare function loadTupleDispute(source: TupleReader): {
    $$type: "Dispute";
    target: Address;
};
export declare function loadGetterTupleDispute(source: TupleReader): {
    $$type: "Dispute";
    target: Address;
};
export declare function storeTupleDispute(source: Dispute): import("@ton/core").TupleItem[];
export declare function dictValueParserDispute(): DictionaryValue<Dispute>;
export type ProcessComplaint = {
    $$type: 'ProcessComplaint';
    target: Address;
};
export declare function storeProcessComplaint(src: ProcessComplaint): (builder: Builder) => void;
export declare function loadProcessComplaint(slice: Slice): {
    $$type: "ProcessComplaint";
    target: Address;
};
export declare function loadTupleProcessComplaint(source: TupleReader): {
    $$type: "ProcessComplaint";
    target: Address;
};
export declare function loadGetterTupleProcessComplaint(source: TupleReader): {
    $$type: "ProcessComplaint";
    target: Address;
};
export declare function storeTupleProcessComplaint(source: ProcessComplaint): import("@ton/core").TupleItem[];
export declare function dictValueParserProcessComplaint(): DictionaryValue<ProcessComplaint>;
export type AdminAction = {
    $$type: 'AdminAction';
    action: bigint;
    value: bigint;
};
export declare function storeAdminAction(src: AdminAction): (builder: Builder) => void;
export declare function loadAdminAction(slice: Slice): {
    $$type: "AdminAction";
    action: bigint;
    value: bigint;
};
export declare function loadTupleAdminAction(source: TupleReader): {
    $$type: "AdminAction";
    action: bigint;
    value: bigint;
};
export declare function loadGetterTupleAdminAction(source: TupleReader): {
    $$type: "AdminAction";
    action: bigint;
    value: bigint;
};
export declare function storeTupleAdminAction(source: AdminAction): import("@ton/core").TupleItem[];
export declare function dictValueParserAdminAction(): DictionaryValue<AdminAction>;
export type FriendsAndFollowings = {
    $$type: 'FriendsAndFollowings';
    friends: Cell | null;
    followings: Cell | null;
    followers: Cell | null;
    invited: Cell | null;
    pendingRequests: Cell | null;
    debts: Cell | null;
    reports: Cell | null;
};
export declare function storeFriendsAndFollowings(src: FriendsAndFollowings): (builder: Builder) => void;
export declare function loadFriendsAndFollowings(slice: Slice): {
    $$type: "FriendsAndFollowings";
    friends: Cell | null;
    followings: Cell | null;
    followers: Cell | null;
    invited: Cell | null;
    pendingRequests: Cell | null;
    debts: Cell | null;
    reports: Cell | null;
};
export declare function loadTupleFriendsAndFollowings(source: TupleReader): {
    $$type: "FriendsAndFollowings";
    friends: Cell | null;
    followings: Cell | null;
    followers: Cell | null;
    invited: Cell | null;
    pendingRequests: Cell | null;
    debts: Cell | null;
    reports: Cell | null;
};
export declare function loadGetterTupleFriendsAndFollowings(source: TupleReader): {
    $$type: "FriendsAndFollowings";
    friends: Cell | null;
    followings: Cell | null;
    followers: Cell | null;
    invited: Cell | null;
    pendingRequests: Cell | null;
    debts: Cell | null;
    reports: Cell | null;
};
export declare function storeTupleFriendsAndFollowings(source: FriendsAndFollowings): import("@ton/core").TupleItem[];
export declare function dictValueParserFriendsAndFollowings(): DictionaryValue<FriendsAndFollowings>;
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
};
export declare function storeOtherStateConsts(src: OtherStateConsts): (builder: Builder) => void;
export declare function loadOtherStateConsts(slice: Slice): {
    $$type: "OtherStateConsts";
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
};
export declare function loadTupleOtherStateConsts(source: TupleReader): {
    $$type: "OtherStateConsts";
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
};
export declare function loadGetterTupleOtherStateConsts(source: TupleReader): {
    $$type: "OtherStateConsts";
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
};
export declare function storeTupleOtherStateConsts(source: OtherStateConsts): import("@ton/core").TupleItem[];
export declare function dictValueParserOtherStateConsts(): DictionaryValue<OtherStateConsts>;
export type InvitorNominee = {
    $$type: 'InvitorNominee';
    invitor: Address;
    nominee: Address;
};
export declare function storeInvitorNominee(src: InvitorNominee): (builder: Builder) => void;
export declare function loadInvitorNominee(slice: Slice): {
    $$type: "InvitorNominee";
    invitor: Address;
    nominee: Address;
};
export declare function loadTupleInvitorNominee(source: TupleReader): {
    $$type: "InvitorNominee";
    invitor: Address;
    nominee: Address;
};
export declare function loadGetterTupleInvitorNominee(source: TupleReader): {
    $$type: "InvitorNominee";
    invitor: Address;
    nominee: Address;
};
export declare function storeTupleInvitorNominee(source: InvitorNominee): import("@ton/core").TupleItem[];
export declare function dictValueParserInvitorNominee(): DictionaryValue<InvitorNominee>;
export type JettonData = {
    $$type: 'JettonData';
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell;
    jettonWalletCode: Cell;
};
export declare function storeJettonData(src: JettonData): (builder: Builder) => void;
export declare function loadJettonData(slice: Slice): {
    $$type: "JettonData";
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell;
    jettonWalletCode: Cell;
};
export declare function loadTupleJettonData(source: TupleReader): {
    $$type: "JettonData";
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell;
    jettonWalletCode: Cell;
};
export declare function loadGetterTupleJettonData(source: TupleReader): {
    $$type: "JettonData";
    totalSupply: bigint;
    mintable: boolean;
    owner: Address;
    content: Cell;
    jettonWalletCode: Cell;
};
export declare function storeTupleJettonData(source: JettonData): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonData(): DictionaryValue<JettonData>;
export type JettonWalletData = {
    $$type: 'JettonWalletData';
    balance: bigint;
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function storeJettonWalletData(src: JettonWalletData): (builder: Builder) => void;
export declare function loadJettonWalletData(slice: Slice): {
    $$type: "JettonWalletData";
    balance: bigint;
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function loadTupleJettonWalletData(source: TupleReader): {
    $$type: "JettonWalletData";
    balance: bigint;
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function loadGetterTupleJettonWalletData(source: TupleReader): {
    $$type: "JettonWalletData";
    balance: bigint;
    owner: Address;
    minter: Address;
    code: Cell;
};
export declare function storeTupleJettonWalletData(source: JettonWalletData): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonWalletData(): DictionaryValue<JettonWalletData>;
export type MaybeAddress = {
    $$type: 'MaybeAddress';
    address: Address | null;
};
export declare function storeMaybeAddress(src: MaybeAddress): (builder: Builder) => void;
export declare function loadMaybeAddress(slice: Slice): {
    $$type: "MaybeAddress";
    address: Address | null;
};
export declare function loadTupleMaybeAddress(source: TupleReader): {
    $$type: "MaybeAddress";
    address: Address | null;
};
export declare function loadGetterTupleMaybeAddress(source: TupleReader): {
    $$type: "MaybeAddress";
    address: Address | null;
};
export declare function storeTupleMaybeAddress(source: MaybeAddress): import("@ton/core").TupleItem[];
export declare function dictValueParserMaybeAddress(): DictionaryValue<MaybeAddress>;
export type JettonUpdateContent = {
    $$type: 'JettonUpdateContent';
    queryId: bigint;
    content: Cell;
};
export declare function storeJettonUpdateContent(src: JettonUpdateContent): (builder: Builder) => void;
export declare function loadJettonUpdateContent(slice: Slice): {
    $$type: "JettonUpdateContent";
    queryId: bigint;
    content: Cell;
};
export declare function loadTupleJettonUpdateContent(source: TupleReader): {
    $$type: "JettonUpdateContent";
    queryId: bigint;
    content: Cell;
};
export declare function loadGetterTupleJettonUpdateContent(source: TupleReader): {
    $$type: "JettonUpdateContent";
    queryId: bigint;
    content: Cell;
};
export declare function storeTupleJettonUpdateContent(source: JettonUpdateContent): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonUpdateContent(): DictionaryValue<JettonUpdateContent>;
export type Mintable = {
    $$type: 'Mintable';
    mintable: boolean;
};
export declare function storeMintable(src: Mintable): (builder: Builder) => void;
export declare function loadMintable(slice: Slice): {
    $$type: "Mintable";
    mintable: boolean;
};
export declare function loadTupleMintable(source: TupleReader): {
    $$type: "Mintable";
    mintable: boolean;
};
export declare function loadGetterTupleMintable(source: TupleReader): {
    $$type: "Mintable";
    mintable: boolean;
};
export declare function storeTupleMintable(source: Mintable): import("@ton/core").TupleItem[];
export declare function dictValueParserMintable(): DictionaryValue<Mintable>;
export type UnfriendInternal = {
    $$type: 'UnfriendInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeUnfriendInternal(src: UnfriendInternal): (builder: Builder) => void;
export declare function loadUnfriendInternal(slice: Slice): {
    $$type: "UnfriendInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleUnfriendInternal(source: TupleReader): {
    $$type: "UnfriendInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleUnfriendInternal(source: TupleReader): {
    $$type: "UnfriendInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleUnfriendInternal(source: UnfriendInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserUnfriendInternal(): DictionaryValue<UnfriendInternal>;
export type ReInviteInternal = {
    $$type: 'ReInviteInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeReInviteInternal(src: ReInviteInternal): (builder: Builder) => void;
export declare function loadReInviteInternal(slice: Slice): {
    $$type: "ReInviteInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleReInviteInternal(source: TupleReader): {
    $$type: "ReInviteInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleReInviteInternal(source: TupleReader): {
    $$type: "ReInviteInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleReInviteInternal(source: ReInviteInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserReInviteInternal(): DictionaryValue<ReInviteInternal>;
export type UnInviteInternal = {
    $$type: 'UnInviteInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeUnInviteInternal(src: UnInviteInternal): (builder: Builder) => void;
export declare function loadUnInviteInternal(slice: Slice): {
    $$type: "UnInviteInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleUnInviteInternal(source: TupleReader): {
    $$type: "UnInviteInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleUnInviteInternal(source: TupleReader): {
    $$type: "UnInviteInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleUnInviteInternal(source: UnInviteInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserUnInviteInternal(): DictionaryValue<UnInviteInternal>;
export type U = {
    $$type: 'U';
    op: bigint;
    amount: bigint | null;
    sender: Address | null;
    receiver: Address | null;
    forwardPayload: Slice;
};
export declare function storeU(src: U): (builder: Builder) => void;
export declare function loadU(slice: Slice): {
    $$type: "U";
    op: bigint;
    amount: bigint | null;
    sender: Address | null;
    receiver: Address | null;
    forwardPayload: Slice;
};
export declare function loadTupleU(source: TupleReader): {
    $$type: "U";
    op: bigint;
    amount: bigint | null;
    sender: Address | null;
    receiver: Address | null;
    forwardPayload: Slice;
};
export declare function loadGetterTupleU(source: TupleReader): {
    $$type: "U";
    op: bigint;
    amount: bigint | null;
    sender: Address | null;
    receiver: Address | null;
    forwardPayload: Slice;
};
export declare function storeTupleU(source: U): import("@ton/core").TupleItem[];
export declare function dictValueParserU(): DictionaryValue<U>;
export type AccCloseBurnInternal = {
    $$type: 'AccCloseBurnInternal';
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeAccCloseBurnInternal(src: AccCloseBurnInternal): (builder: Builder) => void;
export declare function loadAccCloseBurnInternal(slice: Slice): {
    $$type: "AccCloseBurnInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadTupleAccCloseBurnInternal(source: TupleReader): {
    $$type: "AccCloseBurnInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function loadGetterTupleAccCloseBurnInternal(source: TupleReader): {
    $$type: "AccCloseBurnInternal";
    amount: bigint;
    sender: Address;
    forwardPayload: Slice;
};
export declare function storeTupleAccCloseBurnInternal(source: AccCloseBurnInternal): import("@ton/core").TupleItem[];
export declare function dictValueParserAccCloseBurnInternal(): DictionaryValue<AccCloseBurnInternal>;
export type EnquireInvitor = {
    $$type: 'EnquireInvitor';
    sender: Address;
};
export declare function storeEnquireInvitor(src: EnquireInvitor): (builder: Builder) => void;
export declare function loadEnquireInvitor(slice: Slice): {
    $$type: "EnquireInvitor";
    sender: Address;
};
export declare function loadTupleEnquireInvitor(source: TupleReader): {
    $$type: "EnquireInvitor";
    sender: Address;
};
export declare function loadGetterTupleEnquireInvitor(source: TupleReader): {
    $$type: "EnquireInvitor";
    sender: Address;
};
export declare function storeTupleEnquireInvitor(source: EnquireInvitor): import("@ton/core").TupleItem[];
export declare function dictValueParserEnquireInvitor(): DictionaryValue<EnquireInvitor>;
export type TakeInvitor = {
    $$type: 'TakeInvitor';
    sender: Address;
    invitor: Address;
};
export declare function storeTakeInvitor(src: TakeInvitor): (builder: Builder) => void;
export declare function loadTakeInvitor(slice: Slice): {
    $$type: "TakeInvitor";
    sender: Address;
    invitor: Address;
};
export declare function loadTupleTakeInvitor(source: TupleReader): {
    $$type: "TakeInvitor";
    sender: Address;
    invitor: Address;
};
export declare function loadGetterTupleTakeInvitor(source: TupleReader): {
    $$type: "TakeInvitor";
    sender: Address;
    invitor: Address;
};
export declare function storeTupleTakeInvitor(source: TakeInvitor): import("@ton/core").TupleItem[];
export declare function dictValueParserTakeInvitor(): DictionaryValue<TakeInvitor>;
export type AccountGenerated = {
    $$type: 'AccountGenerated';
    deployer: Address;
    newAccount: Address;
};
export declare function storeAccountGenerated(src: AccountGenerated): (builder: Builder) => void;
export declare function loadAccountGenerated(slice: Slice): {
    $$type: "AccountGenerated";
    deployer: Address;
    newAccount: Address;
};
export declare function loadTupleAccountGenerated(source: TupleReader): {
    $$type: "AccountGenerated";
    deployer: Address;
    newAccount: Address;
};
export declare function loadGetterTupleAccountGenerated(source: TupleReader): {
    $$type: "AccountGenerated";
    deployer: Address;
    newAccount: Address;
};
export declare function storeTupleAccountGenerated(source: AccountGenerated): import("@ton/core").TupleItem[];
export declare function dictValueParserAccountGenerated(): DictionaryValue<AccountGenerated>;
export type ApplyGrant = {
    $$type: 'ApplyGrant';
    sender: Address;
    amount: bigint;
};
export declare function storeApplyGrant(src: ApplyGrant): (builder: Builder) => void;
export declare function loadApplyGrant(slice: Slice): {
    $$type: "ApplyGrant";
    sender: Address;
    amount: bigint;
};
export declare function loadTupleApplyGrant(source: TupleReader): {
    $$type: "ApplyGrant";
    sender: Address;
    amount: bigint;
};
export declare function loadGetterTupleApplyGrant(source: TupleReader): {
    $$type: "ApplyGrant";
    sender: Address;
    amount: bigint;
};
export declare function storeTupleApplyGrant(source: ApplyGrant): import("@ton/core").TupleItem[];
export declare function dictValueParserApplyGrant(): DictionaryValue<ApplyGrant>;
export type VoteProposal = {
    $$type: 'VoteProposal';
    sender: Address;
    proposer: Address;
    turnover: bigint;
};
export declare function storeVoteProposal(src: VoteProposal): (builder: Builder) => void;
export declare function loadVoteProposal(slice: Slice): {
    $$type: "VoteProposal";
    sender: Address;
    proposer: Address;
    turnover: bigint;
};
export declare function loadTupleVoteProposal(source: TupleReader): {
    $$type: "VoteProposal";
    sender: Address;
    proposer: Address;
    turnover: bigint;
};
export declare function loadGetterTupleVoteProposal(source: TupleReader): {
    $$type: "VoteProposal";
    sender: Address;
    proposer: Address;
    turnover: bigint;
};
export declare function storeTupleVoteProposal(source: VoteProposal): import("@ton/core").TupleItem[];
export declare function dictValueParserVoteProposal(): DictionaryValue<VoteProposal>;
export type CitizenAdded = {
    $$type: 'CitizenAdded';
    sender: Address;
    newAccount: Address;
};
export declare function storeCitizenAdded(src: CitizenAdded): (builder: Builder) => void;
export declare function loadCitizenAdded(slice: Slice): {
    $$type: "CitizenAdded";
    sender: Address;
    newAccount: Address;
};
export declare function loadTupleCitizenAdded(source: TupleReader): {
    $$type: "CitizenAdded";
    sender: Address;
    newAccount: Address;
};
export declare function loadGetterTupleCitizenAdded(source: TupleReader): {
    $$type: "CitizenAdded";
    sender: Address;
    newAccount: Address;
};
export declare function storeTupleCitizenAdded(source: CitizenAdded): import("@ton/core").TupleItem[];
export declare function dictValueParserCitizenAdded(): DictionaryValue<CitizenAdded>;
export type InviteApproval = {
    $$type: 'InviteApproval';
    approved: boolean;
    invitor: Address;
    invitee: Address;
    approver: Address;
};
export declare function storeInviteApproval(src: InviteApproval): (builder: Builder) => void;
export declare function loadInviteApproval(slice: Slice): {
    $$type: "InviteApproval";
    approved: boolean;
    invitor: Address;
    invitee: Address;
    approver: Address;
};
export declare function loadTupleInviteApproval(source: TupleReader): {
    $$type: "InviteApproval";
    approved: boolean;
    invitor: Address;
    invitee: Address;
    approver: Address;
};
export declare function loadGetterTupleInviteApproval(source: TupleReader): {
    $$type: "InviteApproval";
    approved: boolean;
    invitor: Address;
    invitee: Address;
    approver: Address;
};
export declare function storeTupleInviteApproval(source: InviteApproval): import("@ton/core").TupleItem[];
export declare function dictValueParserInviteApproval(): DictionaryValue<InviteApproval>;
export type ChangeMetadataUri = {
    $$type: 'ChangeMetadataUri';
    queryId: bigint;
    metadata: Slice;
};
export declare function storeChangeMetadataUri(src: ChangeMetadataUri): (builder: Builder) => void;
export declare function loadChangeMetadataUri(slice: Slice): {
    $$type: "ChangeMetadataUri";
    queryId: bigint;
    metadata: Slice;
};
export declare function loadTupleChangeMetadataUri(source: TupleReader): {
    $$type: "ChangeMetadataUri";
    queryId: bigint;
    metadata: Slice;
};
export declare function loadGetterTupleChangeMetadataUri(source: TupleReader): {
    $$type: "ChangeMetadataUri";
    queryId: bigint;
    metadata: Slice;
};
export declare function storeTupleChangeMetadataUri(source: ChangeMetadataUri): import("@ton/core").TupleItem[];
export declare function dictValueParserChangeMetadataUri(): DictionaryValue<ChangeMetadataUri>;
export type SliceBitsAndRefs = {
    $$type: 'SliceBitsAndRefs';
    bits: bigint;
    refs: bigint;
};
export declare function storeSliceBitsAndRefs(src: SliceBitsAndRefs): (builder: Builder) => void;
export declare function loadSliceBitsAndRefs(slice: Slice): {
    $$type: "SliceBitsAndRefs";
    bits: bigint;
    refs: bigint;
};
export declare function loadTupleSliceBitsAndRefs(source: TupleReader): {
    $$type: "SliceBitsAndRefs";
    bits: bigint;
    refs: bigint;
};
export declare function loadGetterTupleSliceBitsAndRefs(source: TupleReader): {
    $$type: "SliceBitsAndRefs";
    bits: bigint;
    refs: bigint;
};
export declare function storeTupleSliceBitsAndRefs(source: SliceBitsAndRefs): import("@ton/core").TupleItem[];
export declare function dictValueParserSliceBitsAndRefs(): DictionaryValue<SliceBitsAndRefs>;
export type ShardDeployParameters = {
    $$type: 'ShardDeployParameters';
    deployParameters: DeployParameters;
    shard: bigint;
};
export declare function storeShardDeployParameters(src: ShardDeployParameters): (builder: Builder) => void;
export declare function loadShardDeployParameters(slice: Slice): {
    $$type: "ShardDeployParameters";
    deployParameters: {
        $$type: "DeployParameters";
        mode: bigint;
        body: Cell | null;
        value: bigint;
        bounce: boolean;
        init: {
            $$type: "StateInit";
            code: Cell;
            data: Cell;
        };
    };
    shard: bigint;
};
export declare function loadTupleShardDeployParameters(source: TupleReader): {
    $$type: "ShardDeployParameters";
    deployParameters: {
        $$type: "DeployParameters";
        mode: bigint;
        body: Cell | null;
        value: bigint;
        bounce: boolean;
        init: {
            $$type: "StateInit";
            code: Cell;
            data: Cell;
        };
    };
    shard: bigint;
};
export declare function loadGetterTupleShardDeployParameters(source: TupleReader): {
    $$type: "ShardDeployParameters";
    deployParameters: {
        $$type: "DeployParameters";
        mode: bigint;
        body: Cell | null;
        value: bigint;
        bounce: boolean;
        init: {
            $$type: "StateInit";
            code: Cell;
            data: Cell;
        };
    };
    shard: bigint;
};
export declare function storeTupleShardDeployParameters(source: ShardDeployParameters): import("@ton/core").TupleItem[];
export declare function dictValueParserShardDeployParameters(): DictionaryValue<ShardDeployParameters>;
export type ShardMessageParameters = {
    $$type: 'ShardMessageParameters';
    messageParameters: MessageParameters;
    shard: bigint;
};
export declare function storeShardMessageParameters(src: ShardMessageParameters): (builder: Builder) => void;
export declare function loadShardMessageParameters(slice: Slice): {
    $$type: "ShardMessageParameters";
    messageParameters: {
        $$type: "MessageParameters";
        mode: bigint;
        body: Cell | null;
        value: bigint;
        to: Address;
        bounce: boolean;
    };
    shard: bigint;
};
export declare function loadTupleShardMessageParameters(source: TupleReader): {
    $$type: "ShardMessageParameters";
    messageParameters: {
        $$type: "MessageParameters";
        mode: bigint;
        body: Cell | null;
        value: bigint;
        to: Address;
        bounce: boolean;
    };
    shard: bigint;
};
export declare function loadGetterTupleShardMessageParameters(source: TupleReader): {
    $$type: "ShardMessageParameters";
    messageParameters: {
        $$type: "MessageParameters";
        mode: bigint;
        body: Cell | null;
        value: bigint;
        to: Address;
        bounce: boolean;
    };
    shard: bigint;
};
export declare function storeTupleShardMessageParameters(source: ShardMessageParameters): import("@ton/core").TupleItem[];
export declare function dictValueParserShardMessageParameters(): DictionaryValue<ShardMessageParameters>;
export type JettonMinterState = {
    $$type: 'JettonMinterState';
    totalSupply: bigint;
    mintable: boolean;
    adminAddress: Address;
    jettonContent: Cell;
    jettonWalletCode: Cell;
};
export declare function storeJettonMinterState(src: JettonMinterState): (builder: Builder) => void;
export declare function loadJettonMinterState(slice: Slice): {
    $$type: "JettonMinterState";
    totalSupply: bigint;
    mintable: boolean;
    adminAddress: Address;
    jettonContent: Cell;
    jettonWalletCode: Cell;
};
export declare function loadTupleJettonMinterState(source: TupleReader): {
    $$type: "JettonMinterState";
    totalSupply: bigint;
    mintable: boolean;
    adminAddress: Address;
    jettonContent: Cell;
    jettonWalletCode: Cell;
};
export declare function loadGetterTupleJettonMinterState(source: TupleReader): {
    $$type: "JettonMinterState";
    totalSupply: bigint;
    mintable: boolean;
    adminAddress: Address;
    jettonContent: Cell;
    jettonWalletCode: Cell;
};
export declare function storeTupleJettonMinterState(source: JettonMinterState): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonMinterState(): DictionaryValue<JettonMinterState>;
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
};
export declare function storeJettonMinterSharded$Data(src: JettonMinterSharded$Data): (builder: Builder) => void;
export declare function loadJettonMinterSharded$Data(slice: Slice): {
    $$type: "JettonMinterSharded$Data";
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
};
export declare function loadTupleJettonMinterSharded$Data(source: TupleReader): {
    $$type: "JettonMinterSharded$Data";
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
};
export declare function loadGetterTupleJettonMinterSharded$Data(source: TupleReader): {
    $$type: "JettonMinterSharded$Data";
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
};
export declare function storeTupleJettonMinterSharded$Data(source: JettonMinterSharded$Data): import("@ton/core").TupleItem[];
export declare function dictValueParserJettonMinterSharded$Data(): DictionaryValue<JettonMinterSharded$Data>;
export declare const JettonMinterSharded_errors: {
    readonly 2: {
        readonly message: "Stack underflow";
    };
    readonly 3: {
        readonly message: "Stack overflow";
    };
    readonly 4: {
        readonly message: "Integer overflow";
    };
    readonly 5: {
        readonly message: "Integer out of expected range";
    };
    readonly 6: {
        readonly message: "Invalid opcode";
    };
    readonly 7: {
        readonly message: "Type check error";
    };
    readonly 8: {
        readonly message: "Cell overflow";
    };
    readonly 9: {
        readonly message: "Cell underflow";
    };
    readonly 10: {
        readonly message: "Dictionary error";
    };
    readonly 11: {
        readonly message: "'Unknown' error";
    };
    readonly 12: {
        readonly message: "Fatal error";
    };
    readonly 13: {
        readonly message: "Out of gas error";
    };
    readonly 14: {
        readonly message: "Virtualization error";
    };
    readonly 32: {
        readonly message: "Action list is invalid";
    };
    readonly 33: {
        readonly message: "Action list is too long";
    };
    readonly 34: {
        readonly message: "Action is invalid or not supported";
    };
    readonly 35: {
        readonly message: "Invalid source address in outbound message";
    };
    readonly 36: {
        readonly message: "Invalid destination address in outbound message";
    };
    readonly 37: {
        readonly message: "Not enough Toncoin";
    };
    readonly 38: {
        readonly message: "Not enough extra currencies";
    };
    readonly 39: {
        readonly message: "Outbound message does not fit into a cell after rewriting";
    };
    readonly 40: {
        readonly message: "Cannot process a message";
    };
    readonly 41: {
        readonly message: "Library reference is null";
    };
    readonly 42: {
        readonly message: "Library change action error";
    };
    readonly 43: {
        readonly message: "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree";
    };
    readonly 50: {
        readonly message: "Account state size exceeded limits";
    };
    readonly 128: {
        readonly message: "Null reference exception";
    };
    readonly 129: {
        readonly message: "Invalid serialization prefix";
    };
    readonly 130: {
        readonly message: "Invalid incoming message";
    };
    readonly 131: {
        readonly message: "Constraints error";
    };
    readonly 132: {
        readonly message: "Access denied";
    };
    readonly 133: {
        readonly message: "Contract stopped";
    };
    readonly 134: {
        readonly message: "Invalid argument";
    };
    readonly 135: {
        readonly message: "Code of a contract was not found";
    };
    readonly 136: {
        readonly message: "Invalid standard address";
    };
    readonly 138: {
        readonly message: "Not a basechain address";
    };
};
export declare const JettonMinterSharded_errors_backward: {
    readonly "Stack underflow": 2;
    readonly "Stack overflow": 3;
    readonly "Integer overflow": 4;
    readonly "Integer out of expected range": 5;
    readonly "Invalid opcode": 6;
    readonly "Type check error": 7;
    readonly "Cell overflow": 8;
    readonly "Cell underflow": 9;
    readonly "Dictionary error": 10;
    readonly "'Unknown' error": 11;
    readonly "Fatal error": 12;
    readonly "Out of gas error": 13;
    readonly "Virtualization error": 14;
    readonly "Action list is invalid": 32;
    readonly "Action list is too long": 33;
    readonly "Action is invalid or not supported": 34;
    readonly "Invalid source address in outbound message": 35;
    readonly "Invalid destination address in outbound message": 36;
    readonly "Not enough Toncoin": 37;
    readonly "Not enough extra currencies": 38;
    readonly "Outbound message does not fit into a cell after rewriting": 39;
    readonly "Cannot process a message": 40;
    readonly "Library reference is null": 41;
    readonly "Library change action error": 42;
    readonly "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree": 43;
    readonly "Account state size exceeded limits": 50;
    readonly "Null reference exception": 128;
    readonly "Invalid serialization prefix": 129;
    readonly "Invalid incoming message": 130;
    readonly "Constraints error": 131;
    readonly "Access denied": 132;
    readonly "Contract stopped": 133;
    readonly "Invalid argument": 134;
    readonly "Code of a contract was not found": 135;
    readonly "Invalid standard address": 136;
    readonly "Not a basechain address": 138;
};
export declare const JettonMinterSharded_getterMapping: {
    [key: string]: string;
};
export declare const gasForBurn = 8000n;
export declare const gasForTransfer = 11050n;
export declare const minTonsForStorage = 10000000n;
export declare const Basechain = 0n;
export declare const walletStateInitCells = 300n;
export declare const walletStateInitBits = 250000n;
export declare const MBRP_AMOUNT = 1000000000000n;
export declare const CLOSURE_WAIT = 86400n;
export declare const ZERO_ADDRESS: Address;
export declare const INCORRECT_SENDER = 700n;
export declare const ACCOUNT_TERMINATED = 701n;
export declare const ACCOUNT_INACTIVE = 702n;
export declare const INSUFFICIENT_GAS_SENT = 703n;
export declare const RESERVED_INTERNAL = 704n;
export declare const UPGRADE_WALLET = 705n;
export declare const NO_PENDING_REQUEST = 706n;
export declare const CANT_UNFOLLOW_REPORTED = 707n;
export declare const INSUFFICIENT_BALANCE = 709n;
export declare const ALREADY_REPORTED = 710n;
export declare const ACCOUNT_NOT_REPORTED = 711n;
export declare const NOT_FOLLOWING = 717n;
export declare const CONNECTION_EXISTS = 719n;
export declare const NOT_FRIEND = 720n;
export declare const NOT_INVITOR = 721n;
export declare const ALREADY_INVITED = 723n;
export declare const UNAUTHORIZED_BURN = 724n;
export declare const MINT_CLOSED = 730n;
export declare const WRONG_WORKCHAIN = 734n;
export declare const WAIT_UNTIL_CLOSURE = 735n;
export declare const NOT_CLOSE_FRIEND = 736n;
export declare const ALREADY_VOUCHED = 737n;
export declare const MAX_CONNECTIONS = 250n;
export declare const prefixLength = 8n;
export declare class JettonMinterSharded implements Contract {
    static readonly storageReserve = 0n;
    static readonly errors: {
        readonly "Stack underflow": 2;
        readonly "Stack overflow": 3;
        readonly "Integer overflow": 4;
        readonly "Integer out of expected range": 5;
        readonly "Invalid opcode": 6;
        readonly "Type check error": 7;
        readonly "Cell overflow": 8;
        readonly "Cell underflow": 9;
        readonly "Dictionary error": 10;
        readonly "'Unknown' error": 11;
        readonly "Fatal error": 12;
        readonly "Out of gas error": 13;
        readonly "Virtualization error": 14;
        readonly "Action list is invalid": 32;
        readonly "Action list is too long": 33;
        readonly "Action is invalid or not supported": 34;
        readonly "Invalid source address in outbound message": 35;
        readonly "Invalid destination address in outbound message": 36;
        readonly "Not enough Toncoin": 37;
        readonly "Not enough extra currencies": 38;
        readonly "Outbound message does not fit into a cell after rewriting": 39;
        readonly "Cannot process a message": 40;
        readonly "Library reference is null": 41;
        readonly "Library change action error": 42;
        readonly "Exceeded maximum number of cells in the library or the maximum depth of the Merkle tree": 43;
        readonly "Account state size exceeded limits": 50;
        readonly "Null reference exception": 128;
        readonly "Invalid serialization prefix": 129;
        readonly "Invalid incoming message": 130;
        readonly "Constraints error": 131;
        readonly "Access denied": 132;
        readonly "Contract stopped": 133;
        readonly "Invalid argument": 134;
        readonly "Code of a contract was not found": 135;
        readonly "Invalid standard address": 136;
        readonly "Not a basechain address": 138;
    };
    static readonly opcodes: {
        JettonNotification: number;
        JettonBurn: number;
        JettonBurnNotification: number;
        ProvideWalletAddress: number;
        TakeWalletAddress: number;
        ProvideWalletBalance: number;
        TakeWalletBalance: number;
        Mint: number;
        JettonTransfer: number;
        JettonTransferInternal: number;
        JettonExcesses: number;
        ClaimTON: number;
        RequestUpgradeCode: number;
        Upgrade: number;
        ChangeOwner: number;
        InviteInternal: number;
        Follow: number;
        FollowInternal: number;
        Unfollow: number;
        UnfollowInternal: number;
        FriendRequestInternal: number;
        ConfirmRequestInternal: number;
        ReportInternal: number;
        DisputeInternal: number;
        ResolutionInternal: number;
        Report: number;
        Dispute: number;
        ProcessComplaint: number;
        AdminAction: number;
        JettonUpdateContent: number;
        Mintable: number;
        UnfriendInternal: number;
        ReInviteInternal: number;
        UnInviteInternal: number;
        U: number;
        AccCloseBurnInternal: number;
        EnquireInvitor: number;
        TakeInvitor: number;
        AccountGenerated: number;
        ApplyGrant: number;
        VoteProposal: number;
        CitizenAdded: number;
        InviteApproval: number;
        ChangeMetadataUri: number;
    };
    static init(totalSupply: bigint, owner: Address, jettonContent: Cell): Promise<{
        code: Cell;
        data: Cell;
    }>;
    static fromInit(totalSupply: bigint, owner: Address, jettonContent: Cell): Promise<JettonMinterSharded>;
    static fromAddress(address: Address): JettonMinterSharded;
    readonly address: Address;
    readonly init?: {
        code: Cell;
        data: Cell;
    };
    readonly abi: ContractABI;
    constructor(address: Address, init?: {
        code: Cell;
        data: Cell;
    });
    send(provider: ContractProvider, via: Sender, args: {
        value: bigint;
        bounce?: boolean | null | undefined;
    }, message: ProvideWalletAddress | JettonBurnNotification | Mint | ClaimTON | JettonUpdateContent | RequestUpgradeCode | ChangeOwner | InviteApproval | Slice | null | ApplyGrant | VoteProposal | ChangeMetadataUri | Upgrade): Promise<void>;
    getState(provider: ContractProvider): Promise<{
        $$type: "JettonMinterSharded$Data";
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
    }>;
    getGetJettonData(provider: ContractProvider): Promise<{
        $$type: "JettonMinterState";
        totalSupply: bigint;
        mintable: boolean;
        adminAddress: Address;
        jettonContent: Cell;
        jettonWalletCode: Cell;
    }>;
    getGetWalletAddress(provider: ContractProvider, ownerAddress: Address): Promise<Address>;
}
