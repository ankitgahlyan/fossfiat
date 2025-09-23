"use strict";
(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[76],{

/***/ 13648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalTracer: () => (/* binding */ LocalTracer)
/* harmony export */ });
/* unused harmony exports log, trace, listen */
let id = 0;
const subscribers = [];
/**
 * Logs something
 *
 * @param type a namespaced identifier of the log (it is not a level like "debug", "error" but more like "apdu-in", "apdu-out", etc...)
 * @param message a clear message of the log associated to the type
 */
const log = (type, message, data) => {
    const obj = {
        type,
        id: String(++id),
        date: new Date(),
    };
    if (message)
        obj.message = message;
    if (data)
        obj.data = data;
    dispatch(obj);
};
/**
 * A simple tracer function, only expanding the existing log function
 *
 * Its goal is to capture more context than a log function.
 * This is simple for now, but can be improved later.
 *
 * @param context Anything representing the context where the log occurred
 */
const trace = ({ type, message, data, context, }) => {
    const obj = {
        type,
        id: String(++id),
        date: new Date(),
    };
    if (message)
        obj.message = message;
    if (data)
        obj.data = data;
    if (context)
        obj.context = context;
    dispatch(obj);
};
/**
 * A simple tracer class, that can be used to avoid repetition when using the `trace` function
 *
 * Its goal is to capture more context than a log function.
 * This is simple for now, but can be improved later.
 *
 * @param type A given type (not level) for the current local tracer ("hw", "withDevice", etc.)
 * @param context Anything representing the context where the log occurred
 */
class LocalTracer {
    constructor(type, context) {
        this.type = type;
        this.context = context;
    }
    trace(message, data) {
        trace({
            type: this.type,
            message,
            data,
            context: this.context,
        });
    }
    getContext() {
        return this.context;
    }
    setContext(context) {
        this.context = context;
    }
    updateContext(contextToAdd) {
        this.context = Object.assign(Object.assign({}, this.context), contextToAdd);
    }
    getType() {
        return this.type;
    }
    setType(type) {
        this.type = type;
    }
    /**
     * Create a new instance of the LocalTracer with an updated `type`
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     */
    withType(type) {
        return new LocalTracer(type, this.context);
    }
    /**
     * Create a new instance of the LocalTracer with a new `context`
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     *
     * @param context A TraceContext, that can undefined to reset the context
     */
    withContext(context) {
        return new LocalTracer(this.type, context);
    }
    /**
     * Create a new instance of the LocalTracer with an updated `context`,
     * on which an additional context is merged with the existing one.
     *
     * It does not mutate the calling instance, but returns a new LocalTracer,
     * following a simple builder pattern.
     */
    withUpdatedContext(contextToAdd) {
        return new LocalTracer(this.type, Object.assign(Object.assign({}, this.context), contextToAdd));
    }
}
/**
 * Adds a subscribers to the emitted logs.
 *
 * @param cb that is called for each future log() with the Log object
 * @return a function that can be called to unsubscribe the listener
 */
const listen = (cb) => {
    subscribers.push(cb);
    return () => {
        const i = subscribers.indexOf(cb);
        if (i !== -1) {
            // equivalent of subscribers.splice(i, 1) // https://twitter.com/Rich_Harris/status/1125850391155965952
            subscribers[i] = subscribers[subscribers.length - 1];
            subscribers.pop();
        }
    };
};
function dispatch(log) {
    for (let i = 0; i < subscribers.length; i++) {
        try {
            subscribers[i](log);
        }
        catch (e) {
            console.error(e);
        }
    }
}
if (typeof window !== "undefined") {
    window.__ledgerLogsListen = listen;
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 24450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  StatusCodes: () => (/* binding */ StatusCodes),
  TransportError: () => (/* binding */ TransportError),
  TransportRaceCondition: () => (/* binding */ TransportRaceCondition),
  TransportStatusError: () => (/* binding */ TransportStatusError)
});

// UNUSED EXPORTS: AccountAwaitingSendPendingOperations, AccountNameRequiredError, AccountNotSupported, AmountRequired, BluetoothRequired, BtcUnmatchedApp, CantOpenDevice, CantScanQRCode, CashAddrNotSupported, ClaimRewardsFeesWarning, CurrencyNotSupported, DBNotReset, DBWrongPassword, DeviceAppVerifyNotSupported, DeviceExtractOnboardingStateError, DeviceGenuineSocketEarlyClose, DeviceHalted, DeviceInOSUExpected, DeviceNameInvalid, DeviceNeedsRestart, DeviceNotGenuineError, DeviceOnDashboardExpected, DeviceOnDashboardUnexpected, DeviceOnboardingStatePollingError, DeviceShouldStayInApp, DeviceSocketFail, DeviceSocketNoBulkStatus, DisabledTransactionBroadcastError, DisconnectedDevice, DisconnectedDeviceDuringOperation, DustLimit, ETHAddressNonEIP, EnpointConfigError, EthAppPleaseEnableContractData, ExpertModeRequired, FeeEstimationFailed, FeeNotLoaded, FeeNotLoadedSwap, FeeRequired, FeeTooHigh, FirmwareNotRecognized, FirmwareOrAppUpdateRequired, GasLessThanEstimate, GenuineCheckFailed, HardResetFail, HwTransportError, HwTransportErrorType, InvalidAddress, InvalidAddressBecauseDestinationIsAlsoSource, InvalidNonce, InvalidXRPTag, LanguageNotFound, LatestMCUInstalledError, LedgerAPI4xx, LedgerAPI5xx, LedgerAPIError, LedgerAPIErrorWithMessage, LedgerAPINotAvailable, LockedDeviceError, MCUNotGenuineToDashboard, ManagerAppAlreadyInstalledError, ManagerAppDepInstallRequired, ManagerAppDepUninstallRequired, ManagerAppRelyOnBTCError, ManagerDeviceLockedError, ManagerFirmwareNotEnoughSpaceError, ManagerNotEnoughSpaceError, ManagerUninstallBTCDep, MaxFeeTooLow, MaybeKeepTronAccountAlive, NetworkDown, NetworkError, NoAccessToCamera, NoAddressesFound, NoDBPathGiven, NotEnoughBalance, NotEnoughBalanceBecauseDestinationNotCreated, NotEnoughBalanceInParentAccount, NotEnoughBalanceSwap, NotEnoughBalanceToDelegate, NotEnoughGas, NotEnoughGasSwap, NotEnoughSpendableBalance, NotSupportedLegacyAddress, OpReturnDataSizeLimit, PairingFailed, PasswordIncorrectError, PasswordsDontMatchError, PeerRemovedPairing, PendingOperation, PinNotSet, PriorityFeeHigherThanMaxFee, PriorityFeeTooHigh, PriorityFeeTooLow, RecipientRequired, RecommendSubAccountsToEmpty, RecommendUndelegation, ReplacementTransactionUnderpriced, SequenceNumberError, SyncError, TimeoutTagged, TransactionHasBeenValidatedError, TransportExchangeTimeoutError, TransportInterfaceNotAvailable, TransportOpenUserCancelled, TransportWebUSBGestureRequired, TronEmptyAccount, UnavailableTezosOriginatedAccountReceive, UnavailableTezosOriginatedAccountSend, UnexpectedBootloader, UnknownMCU, UnresponsiveDeviceError, UpdateFetchFileFail, UpdateIncorrectHash, UpdateIncorrectSig, UpdateYourApp, UserRefusedAddress, UserRefusedAllowManager, UserRefusedDeviceNameChange, UserRefusedFirmwareUpdate, UserRefusedOnDevice, WebsocketConnectionError, WebsocketConnectionFailed, WrongAppForCurrency, WrongDeviceForAccount, WrongDeviceForAccountPayout, WrongDeviceForAccountRefund, addCustomErrorDeserializer, createCustomErrorClass, deserializeError, getAltStatusMessage, serializeError

;// ./node_modules/@ledgerhq/errors/lib-es/helpers.js
/* eslint-disable no-continue */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
const errorClasses = {};
const deserializers = {};
const addCustomErrorDeserializer = (name, deserializer) => {
    deserializers[name] = deserializer;
};
const createCustomErrorClass = (name) => {
    class CustomErrorClass extends Error {
        constructor(message, fields, options) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            super(message || name, options);
            // Set the prototype explicitly. See https://github.com/Microsoft/TypeScript/wiki/Breaking-Changes#extending-built-ins-like-error-array-and-map-may-no-longer-work
            Object.setPrototypeOf(this, CustomErrorClass.prototype);
            this.name = name;
            if (fields) {
                for (const k in fields) {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                    // @ts-ignore
                    this[k] = fields[k];
                }
            }
            if (options && isObject(options) && "cause" in options && !("cause" in this)) {
                // .cause was specified but the superconstructor
                // did not create an instance property.
                const cause = options.cause;
                this.cause = cause;
                if ("stack" in cause) {
                    this.stack = this.stack + "\nCAUSE: " + cause.stack;
                }
            }
        }
    }
    errorClasses[name] = CustomErrorClass;
    return CustomErrorClass;
};
function isObject(value) {
    return typeof value === "object";
}
// inspired from https://github.com/programble/errio/blob/master/index.js
const deserializeError = (object) => {
    if (object && typeof object === "object") {
        try {
            if (typeof object.message === "string") {
                const msg = JSON.parse(object.message);
                if (msg.message && msg.name) {
                    object = msg;
                }
            }
        }
        catch (e) {
            // nothing
        }
        let error;
        if (typeof object.name === "string") {
            const { name } = object;
            const des = deserializers[name];
            if (des) {
                error = des(object);
            }
            else {
                let constructor = name === "Error" ? Error : errorClasses[name];
                if (!constructor) {
                    console.warn("deserializing an unknown class '" + name + "'");
                    constructor = createCustomErrorClass(name);
                }
                error = Object.create(constructor.prototype);
                try {
                    for (const prop in object) {
                        if (object.hasOwnProperty(prop)) {
                            error[prop] = object[prop];
                        }
                    }
                }
                catch (e) {
                    // sometimes setting a property can fail (e.g. .name)
                }
            }
        }
        else {
            if (typeof object.message === "string") {
                error = new Error(object.message);
            }
        }
        if (error && !error.stack && Error.captureStackTrace) {
            Error.captureStackTrace(error, deserializeError);
        }
        return error;
    }
    return new Error(String(object));
};
// inspired from https://github.com/sindresorhus/serialize-error/blob/master/index.js
const serializeError = (value) => {
    if (!value)
        return value;
    if (typeof value === "object") {
        return destroyCircular(value, []);
    }
    if (typeof value === "function") {
        return `[Function: ${value.name || "anonymous"}]`;
    }
    return value;
};
// https://www.npmjs.com/package/destroy-circular
function destroyCircular(from, seen) {
    const to = {};
    seen.push(from);
    for (const key of Object.keys(from)) {
        const value = from[key];
        if (typeof value === "function") {
            continue;
        }
        if (!value || typeof value !== "object") {
            to[key] = value;
            continue;
        }
        if (seen.indexOf(from[key]) === -1) {
            to[key] = destroyCircular(from[key], seen.slice(0));
            continue;
        }
        to[key] = "[Circular]";
    }
    if (typeof from.name === "string") {
        to.name = from.name;
    }
    if (typeof from.message === "string") {
        to.message = from.message;
    }
    if (typeof from.stack === "string") {
        to.stack = from.stack;
    }
    return to;
}
//# sourceMappingURL=helpers.js.map
;// ./node_modules/@ledgerhq/errors/lib-es/index.js


const AccountNameRequiredError = createCustomErrorClass("AccountNameRequired");
const AccountNotSupported = createCustomErrorClass("AccountNotSupported");
const AccountAwaitingSendPendingOperations = createCustomErrorClass("AccountAwaitingSendPendingOperations");
const AmountRequired = createCustomErrorClass("AmountRequired");
const BluetoothRequired = createCustomErrorClass("BluetoothRequired");
const BtcUnmatchedApp = createCustomErrorClass("BtcUnmatchedApp");
const CantOpenDevice = createCustomErrorClass("CantOpenDevice");
const CashAddrNotSupported = createCustomErrorClass("CashAddrNotSupported");
const ClaimRewardsFeesWarning = createCustomErrorClass("ClaimRewardsFeesWarning");
const CurrencyNotSupported = createCustomErrorClass("CurrencyNotSupported");
const DeviceAppVerifyNotSupported = createCustomErrorClass("DeviceAppVerifyNotSupported");
const DeviceGenuineSocketEarlyClose = createCustomErrorClass("DeviceGenuineSocketEarlyClose");
const DeviceNotGenuineError = createCustomErrorClass("DeviceNotGenuine");
const DeviceOnDashboardExpected = createCustomErrorClass("DeviceOnDashboardExpected");
const DeviceOnDashboardUnexpected = createCustomErrorClass("DeviceOnDashboardUnexpected");
const DeviceInOSUExpected = createCustomErrorClass("DeviceInOSUExpected");
const DeviceHalted = createCustomErrorClass("DeviceHalted");
const DeviceNameInvalid = createCustomErrorClass("DeviceNameInvalid");
const DeviceSocketFail = createCustomErrorClass("DeviceSocketFail");
const DeviceSocketNoBulkStatus = createCustomErrorClass("DeviceSocketNoBulkStatus");
const DeviceNeedsRestart = createCustomErrorClass("DeviceSocketNoBulkStatus");
const UnresponsiveDeviceError = createCustomErrorClass("UnresponsiveDeviceError");
const DisconnectedDevice = createCustomErrorClass("DisconnectedDevice");
const DisconnectedDeviceDuringOperation = createCustomErrorClass("DisconnectedDeviceDuringOperation");
const DeviceExtractOnboardingStateError = createCustomErrorClass("DeviceExtractOnboardingStateError");
const DeviceOnboardingStatePollingError = createCustomErrorClass("DeviceOnboardingStatePollingError");
const EnpointConfigError = createCustomErrorClass("EnpointConfig");
const EthAppPleaseEnableContractData = createCustomErrorClass("EthAppPleaseEnableContractData");
const FeeEstimationFailed = createCustomErrorClass("FeeEstimationFailed");
const FirmwareNotRecognized = createCustomErrorClass("FirmwareNotRecognized");
const HardResetFail = createCustomErrorClass("HardResetFail");
const InvalidXRPTag = createCustomErrorClass("InvalidXRPTag");
const InvalidAddress = createCustomErrorClass("InvalidAddress");
const InvalidNonce = createCustomErrorClass("InvalidNonce");
const InvalidAddressBecauseDestinationIsAlsoSource = createCustomErrorClass("InvalidAddressBecauseDestinationIsAlsoSource");
const LatestMCUInstalledError = createCustomErrorClass("LatestMCUInstalledError");
const UnknownMCU = createCustomErrorClass("UnknownMCU");
const LedgerAPIError = createCustomErrorClass("LedgerAPIError");
const LedgerAPIErrorWithMessage = createCustomErrorClass("LedgerAPIErrorWithMessage");
const LedgerAPINotAvailable = createCustomErrorClass("LedgerAPINotAvailable");
const ManagerAppAlreadyInstalledError = createCustomErrorClass("ManagerAppAlreadyInstalled");
const ManagerAppRelyOnBTCError = createCustomErrorClass("ManagerAppRelyOnBTC");
const ManagerAppDepInstallRequired = createCustomErrorClass("ManagerAppDepInstallRequired");
const ManagerAppDepUninstallRequired = createCustomErrorClass("ManagerAppDepUninstallRequired");
const ManagerDeviceLockedError = createCustomErrorClass("ManagerDeviceLocked");
const ManagerFirmwareNotEnoughSpaceError = createCustomErrorClass("ManagerFirmwareNotEnoughSpace");
const ManagerNotEnoughSpaceError = createCustomErrorClass("ManagerNotEnoughSpace");
const ManagerUninstallBTCDep = createCustomErrorClass("ManagerUninstallBTCDep");
const NetworkDown = createCustomErrorClass("NetworkDown");
const NetworkError = createCustomErrorClass("NetworkError");
const NoAddressesFound = createCustomErrorClass("NoAddressesFound");
const NotEnoughBalance = createCustomErrorClass("NotEnoughBalance");
const NotEnoughBalanceSwap = createCustomErrorClass("NotEnoughBalanceSwap");
const NotEnoughBalanceToDelegate = createCustomErrorClass("NotEnoughBalanceToDelegate");
const NotEnoughBalanceInParentAccount = createCustomErrorClass("NotEnoughBalanceInParentAccount");
const NotEnoughSpendableBalance = createCustomErrorClass("NotEnoughSpendableBalance");
const NotEnoughBalanceBecauseDestinationNotCreated = createCustomErrorClass("NotEnoughBalanceBecauseDestinationNotCreated");
const NoAccessToCamera = createCustomErrorClass("NoAccessToCamera");
const NotEnoughGas = createCustomErrorClass("NotEnoughGas");
// Error message specifically for the PTX swap flow
const NotEnoughGasSwap = createCustomErrorClass("NotEnoughGasSwap");
const TronEmptyAccount = createCustomErrorClass("TronEmptyAccount");
const MaybeKeepTronAccountAlive = createCustomErrorClass("MaybeKeepTronAccountAlive");
const NotSupportedLegacyAddress = createCustomErrorClass("NotSupportedLegacyAddress");
const GasLessThanEstimate = createCustomErrorClass("GasLessThanEstimate");
const PriorityFeeTooLow = createCustomErrorClass("PriorityFeeTooLow");
const PriorityFeeTooHigh = createCustomErrorClass("PriorityFeeTooHigh");
const PriorityFeeHigherThanMaxFee = createCustomErrorClass("PriorityFeeHigherThanMaxFee");
const MaxFeeTooLow = createCustomErrorClass("MaxFeeTooLow");
const PasswordsDontMatchError = createCustomErrorClass("PasswordsDontMatch");
const PasswordIncorrectError = createCustomErrorClass("PasswordIncorrect");
const RecommendSubAccountsToEmpty = createCustomErrorClass("RecommendSubAccountsToEmpty");
const RecommendUndelegation = createCustomErrorClass("RecommendUndelegation");
const TimeoutTagged = createCustomErrorClass("TimeoutTagged");
const UnexpectedBootloader = createCustomErrorClass("UnexpectedBootloader");
const MCUNotGenuineToDashboard = createCustomErrorClass("MCUNotGenuineToDashboard");
const RecipientRequired = createCustomErrorClass("RecipientRequired");
const UnavailableTezosOriginatedAccountReceive = createCustomErrorClass("UnavailableTezosOriginatedAccountReceive");
const UnavailableTezosOriginatedAccountSend = createCustomErrorClass("UnavailableTezosOriginatedAccountSend");
const UpdateFetchFileFail = createCustomErrorClass("UpdateFetchFileFail");
const UpdateIncorrectHash = createCustomErrorClass("UpdateIncorrectHash");
const UpdateIncorrectSig = createCustomErrorClass("UpdateIncorrectSig");
const UpdateYourApp = createCustomErrorClass("UpdateYourApp");
const UserRefusedDeviceNameChange = createCustomErrorClass("UserRefusedDeviceNameChange");
const UserRefusedAddress = createCustomErrorClass("UserRefusedAddress");
const UserRefusedFirmwareUpdate = createCustomErrorClass("UserRefusedFirmwareUpdate");
const UserRefusedAllowManager = createCustomErrorClass("UserRefusedAllowManager");
const UserRefusedOnDevice = createCustomErrorClass("UserRefusedOnDevice"); // TODO rename because it's just for transaction refusal
const PinNotSet = createCustomErrorClass("PinNotSet");
const ExpertModeRequired = createCustomErrorClass("ExpertModeRequired");
const TransportOpenUserCancelled = createCustomErrorClass("TransportOpenUserCancelled");
const TransportInterfaceNotAvailable = createCustomErrorClass("TransportInterfaceNotAvailable");
const TransportRaceCondition = createCustomErrorClass("TransportRaceCondition");
const TransportWebUSBGestureRequired = createCustomErrorClass("TransportWebUSBGestureRequired");
const TransactionHasBeenValidatedError = createCustomErrorClass("TransactionHasBeenValidatedError");
const TransportExchangeTimeoutError = createCustomErrorClass("TransportExchangeTimeoutError");
const DeviceShouldStayInApp = createCustomErrorClass("DeviceShouldStayInApp");
const WebsocketConnectionError = createCustomErrorClass("WebsocketConnectionError");
const WebsocketConnectionFailed = createCustomErrorClass("WebsocketConnectionFailed");
const WrongDeviceForAccount = createCustomErrorClass("WrongDeviceForAccount");
const WrongDeviceForAccountPayout = createCustomErrorClass("WrongDeviceForAccountPayout");
const WrongDeviceForAccountRefund = createCustomErrorClass("WrongDeviceForAccountRefund");
const WrongAppForCurrency = createCustomErrorClass("WrongAppForCurrency");
const ETHAddressNonEIP = createCustomErrorClass("ETHAddressNonEIP");
const CantScanQRCode = createCustomErrorClass("CantScanQRCode");
const FeeNotLoaded = createCustomErrorClass("FeeNotLoaded");
const FeeNotLoadedSwap = createCustomErrorClass("FeeNotLoadedSwap");
const FeeRequired = createCustomErrorClass("FeeRequired");
const FeeTooHigh = createCustomErrorClass("FeeTooHigh");
const PendingOperation = createCustomErrorClass("PendingOperation");
const SyncError = createCustomErrorClass("SyncError");
const PairingFailed = createCustomErrorClass("PairingFailed");
const PeerRemovedPairing = createCustomErrorClass("PeerRemovedPairing");
const GenuineCheckFailed = createCustomErrorClass("GenuineCheckFailed");
const LedgerAPI4xx = createCustomErrorClass("LedgerAPI4xx");
const LedgerAPI5xx = createCustomErrorClass("LedgerAPI5xx");
const FirmwareOrAppUpdateRequired = createCustomErrorClass("FirmwareOrAppUpdateRequired");
// SpeedUp / Cancel EVM tx
const ReplacementTransactionUnderpriced = createCustomErrorClass("ReplacementTransactionUnderpriced");
// Bitcoin family
const OpReturnDataSizeLimit = createCustomErrorClass("OpReturnSizeLimit");
const DustLimit = createCustomErrorClass("DustLimit");
// Language
const LanguageNotFound = createCustomErrorClass("LanguageNotFound");
// db stuff, no need to translate
const NoDBPathGiven = createCustomErrorClass("NoDBPathGiven");
const DBWrongPassword = createCustomErrorClass("DBWrongPassword");
const DBNotReset = createCustomErrorClass("DBNotReset");
const SequenceNumberError = createCustomErrorClass("SequenceNumberError");
const DisabledTransactionBroadcastError = createCustomErrorClass("DisabledTransactionBroadcastError");
/**
 * Type of a Transport error used to represent all equivalent errors coming from all possible implementation of Transport
 */
var HwTransportErrorType;
(function (HwTransportErrorType) {
    HwTransportErrorType["Unknown"] = "Unknown";
    HwTransportErrorType["LocationServicesDisabled"] = "LocationServicesDisabled";
    HwTransportErrorType["LocationServicesUnauthorized"] = "LocationServicesUnauthorized";
    HwTransportErrorType["BluetoothScanStartFailed"] = "BluetoothScanStartFailed";
})(HwTransportErrorType || (HwTransportErrorType = {}));
/**
 * Represents an error coming from the usage of any Transport implementation.
 *
 * Needed to map a specific implementation error into an error that
 * can be managed by any code unaware of the specific Transport implementation
 * that was used.
 */
class HwTransportError extends Error {
    constructor(type, message) {
        super(message);
        this.name = "HwTransportError";
        this.type = type;
        // Needed as long as we target < ES6
        Object.setPrototypeOf(this, HwTransportError.prototype);
    }
}
/**
 * TransportError is used for any generic transport errors.
 * e.g. Error thrown when data received by exchanges are incorrect or if exchanged failed to communicate with the device for various reason.
 */
class TransportError extends Error {
    constructor(message, id) {
        const name = "TransportError";
        super(message || name);
        this.name = name;
        this.message = message;
        this.stack = new Error(message).stack;
        this.id = id;
    }
}
addCustomErrorDeserializer("TransportError", e => new TransportError(e.message, e.id));
const StatusCodes = {
    ACCESS_CONDITION_NOT_FULFILLED: 0x9804,
    ALGORITHM_NOT_SUPPORTED: 0x9484,
    CLA_NOT_SUPPORTED: 0x6e00,
    CODE_BLOCKED: 0x9840,
    CODE_NOT_INITIALIZED: 0x9802,
    COMMAND_INCOMPATIBLE_FILE_STRUCTURE: 0x6981,
    CONDITIONS_OF_USE_NOT_SATISFIED: 0x6985,
    CONTRADICTION_INVALIDATION: 0x9810,
    CONTRADICTION_SECRET_CODE_STATUS: 0x9808,
    DEVICE_IN_RECOVERY_MODE: 0x662f,
    CUSTOM_IMAGE_EMPTY: 0x662e,
    FILE_ALREADY_EXISTS: 0x6a89,
    FILE_NOT_FOUND: 0x9404,
    GP_AUTH_FAILED: 0x6300,
    HALTED: 0x6faa,
    INCONSISTENT_FILE: 0x9408,
    INCORRECT_DATA: 0x6a80,
    INCORRECT_LENGTH: 0x6700,
    INCORRECT_P1_P2: 0x6b00,
    INS_NOT_SUPPORTED: 0x6d00,
    DEVICE_NOT_ONBOARDED: 0x6d07,
    DEVICE_NOT_ONBOARDED_2: 0x6611,
    INVALID_KCV: 0x9485,
    INVALID_OFFSET: 0x9402,
    LICENSING: 0x6f42,
    LOCKED_DEVICE: 0x5515,
    MAX_VALUE_REACHED: 0x9850,
    MEMORY_PROBLEM: 0x9240,
    MISSING_CRITICAL_PARAMETER: 0x6800,
    NO_EF_SELECTED: 0x9400,
    NOT_ENOUGH_MEMORY_SPACE: 0x6a84,
    OK: 0x9000,
    PIN_REMAINING_ATTEMPTS: 0x63c0,
    REFERENCED_DATA_NOT_FOUND: 0x6a88,
    SECURITY_STATUS_NOT_SATISFIED: 0x6982,
    TECHNICAL_PROBLEM: 0x6f00,
    UNKNOWN_APDU: 0x6d02,
    USER_REFUSED_ON_DEVICE: 0x5501,
    NOT_ENOUGH_SPACE: 0x5102,
    APP_NOT_FOUND_OR_INVALID_CONTEXT: 0x5123,
    INVALID_APP_NAME_LENGTH: 0x670a,
    GEN_AES_KEY_FAILED: 0x5419,
    INTERNAL_CRYPTO_OPERATION_FAILED: 0x541a,
    INTERNAL_COMPUTE_AES_CMAC_FAILED: 0x541b,
    ENCRYPT_APP_STORAGE_FAILED: 0x541c,
    INVALID_BACKUP_STATE: 0x6642,
    PIN_NOT_SET: 0x5502,
    INVALID_BACKUP_LENGTH: 0x6733,
    INVALID_RESTORE_STATE: 0x6643,
    INVALID_CHUNK_LENGTH: 0x6734,
    INVALID_BACKUP_HEADER: 0x684a,
    // Not documented:
    TRUSTCHAIN_WRONG_SEED: 0xb007,
};
function getAltStatusMessage(code) {
    switch (code) {
        // improve text of most common errors
        case 0x6700:
            return "Incorrect length";
        case 0x6800:
            return "Missing critical parameter";
        case 0x6982:
            return "Security not satisfied (dongle locked or have invalid access rights)";
        case 0x6985:
            return "Condition of use not satisfied (denied by the user?)";
        case 0x6a80:
            return "Invalid data received";
        case 0x6b00:
            return "Invalid parameter received";
        case 0x5515:
            return "Locked device";
    }
    if (0x6f00 <= code && code <= 0x6fff) {
        return "Internal error, please report";
    }
}
/**
 * Error thrown when a device returned a non success status.
 * the error.statusCode is one of the `StatusCodes` exported by this library.
 */
class TransportStatusError extends Error {
    /**
     * @param statusCode The error status code coming from a Transport implementation
     * @param options containing:
     *  - canBeMappedToChildError: enable the mapping of TransportStatusError to an error extending/inheriting from it
     *  . Ex: LockedDeviceError. Default to true.
     */
    constructor(statusCode, { canBeMappedToChildError = true } = {}) {
        const statusText = Object.keys(StatusCodes).find(k => StatusCodes[k] === statusCode) || "UNKNOWN_ERROR";
        const smsg = getAltStatusMessage(statusCode) || statusText;
        const statusCodeStr = statusCode.toString(16);
        const message = `Ledger device: ${smsg} (0x${statusCodeStr})`;
        super(message);
        this.name = "TransportStatusError";
        this.statusCode = statusCode;
        this.statusText = statusText;
        Object.setPrototypeOf(this, TransportStatusError.prototype);
        // Maps to a LockedDeviceError
        if (canBeMappedToChildError && statusCode === StatusCodes.LOCKED_DEVICE) {
            return new LockedDeviceError(message);
        }
    }
}
class LockedDeviceError extends TransportStatusError {
    constructor(message) {
        super(StatusCodes.LOCKED_DEVICE, { canBeMappedToChildError: false });
        if (message) {
            this.message = message;
        }
        this.name = "LockedDeviceError";
        Object.setPrototypeOf(this, LockedDeviceError.prototype);
    }
}
addCustomErrorDeserializer("TransportStatusError", e => new TransportStatusError(e.statusCode));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34557:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports._t = exports.vY = exports.vs = void 0;
var TonTransport_1 = __webpack_require__(80715);
Object.defineProperty(exports, "vs", ({ enumerable: true, get: function () { return TonTransport_1.TonTransport; } }));
Object.defineProperty(exports, "vY", ({ enumerable: true, get: function () { return TonTransport_1.parseMessage; } }));
Object.defineProperty(exports, "_t", ({ enumerable: true, get: function () { return TonTransport_1.KNOWN_JETTONS; } }));


/***/ }),

/***/ 38861:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  signTonProofWithLedger: () => (/* binding */ signTonProofWithLedger),
  signTonTransactionsWithLedger: () => (/* binding */ signTonTransactionsWithLedger)
});

// UNUSED EXPORTS: lacksBlindSigningError, tonPayloadToLedgerPayload, tonTransactionToLedgerTransaction, unsupportedError

// EXTERNAL MODULE: ./node_modules/@ledgerhq/errors/lib-es/index.js + 1 modules
var lib_es = __webpack_require__(24450);
// EXTERNAL MODULE: ./node_modules/@ton-community/ton-ledger/dist/index.js
var dist = __webpack_require__(34557);
// EXTERNAL MODULE: ./src/api/types/index.ts
var types = __webpack_require__(23174);
;// ./src/util/compareVersions.ts
function compareVersions(versionA, versionB) {
  const partsA = versionA.split('.').map(Number);
  const partsB = versionB.split('.').map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const partA = partsA[i] || 0;
    const partB = partsB[i] || 0;
    if (partA > partB) return 1;
    if (partA < partB) return -1;
  }
  return 0;
}
// EXTERNAL MODULE: ./src/api/chains/ton/constants.ts
var constants = __webpack_require__(3476);
;// ./src/util/ledger/utils.ts

const BROKEN_CONNECTION_ERRORS = new Set(['DisconnectedDeviceDuringOperation', 'TransportRaceCondition']);
function getLedgerAccountPathByWallet(network, wallet, workchain) {
  return getLedgerAccountPathByIndex(wallet.index, network !== 'mainnet', workchain);
}
function getLedgerAccountPathByIndex(index, isTestnet) {
  let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constants/* WORKCHAIN */.Zm;
  const network = isTestnet ? 1 : 0;
  const chain = workchain === constants/* Workchain */.li.MasterChain ? 255 : 0;
  return [44, 607, network, chain, index, 0];
}
function isLedgerConnectionBroken(error) {
  return BROKEN_CONNECTION_ERRORS.has(error);
}
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport/lib-es/Transport.js
var Transport = __webpack_require__(13983);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./src/util/windowProvider/connector.ts + 2 modules
var connector = __webpack_require__(5370);
;// ./src/api/common/ledger.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];




/**
 * Serialization format differs between web/capacitor and native apps:
 *  - Native (AIR) apps: Use hex format (expected by native Ledger library implementations)
 *  - Web/Capacitor apps: Use base64 format (more efficient for browser message passing)
 */
const serializationFormat = config/* IS_AIR_APP */.gmk ? 'hex' : 'base64';

/**
 * A Ledger's Transport implementation that passes the data to the actual transfer object in the main browser thread
 * (src/util/ledger/index.ts) via postMessage (because actual Ledger transports don't work in worker threads).
 */
class WindowTransport extends Transport/* default */.Ay {
  /** Use `getDeviceModel()` instead */

  async exchange(apdu) {
    const response = await (0,connector/* callWindow */.p)('exchangeWithLedger', apdu.toString(serializationFormat));
    return Buffer.from(response, serializationFormat);
  }
  getDeviceModel() {
    return (0,connector/* callWindow */.p)('getLedgerDeviceModel');
  }
}
// EXTERNAL MODULE: ./src/api/chains/ton/util/tonCore.ts + 4 modules
var tonCore = __webpack_require__(88823);
;// ./src/api/chains/ton/util/ledger.ts
/* provided dependency */ var ledger_Buffer = __webpack_require__(48287)["Buffer"];
/*
 * This file must be imported dynamically via import().
 * This is needed to reduce the app size when Ledger is not used.
 */










// You can use the https://github.com/LedgerHQ/app-ton history as the version support reference
// Warning! The versions MUST NOT be lower than the actual versions that added support for these features. Otherwise,
// that features fail. If you are not sure, set the version to a higher value. In that case Ledger will display the
// transactions as blind/unknown, but will be able to sign them.
const VERSION_WITH_GET_SETTINGS = '2.1';
const VERSION_WITH_WALLET_SPECIFIERS = '2.1';
/** The values are the TON App versions. The keys are the largest jetton ids (jetton indices) added in that versions. */
const VERSION_WITH_JETTON_ID = {
  6: '2.2',
  9: '2.6.1',
  10: '2.8.0' // TODO Replace to real version
};
const VERSION_WITH_PAYLOAD = {
  unsafe: '2.1',
  comment: '0',
  'jetton-transfer': '0',
  'nft-transfer': '2.1',
  'jetton-burn': '2.1',
  'add-whitelist': '2.1',
  'single-nominator-withdraw': '2.1',
  'single-nominator-change-validator': '2.1',
  'tonstakers-deposit': '2.1',
  'vote-for-proposal': '2.1',
  'change-dns-record': '2.1',
  'token-bridge-pay-swap': '2.1'
  // 'tonwhales-pool-deposit': '2.7',
  // 'tonwhales-pool-withdraw': '2.7',
  // 'vesting-send-msg-comment': '2.7',
};

// https://github.com/LedgerHQ/app-ton/blob/d3e1edbbc1fcf9a5d6982fbb971f757a83d0aa56/doc/MESSAGES.md?plain=1#L51
const DEVICES_NOT_SUPPORTING_JETTON_ID = new Set(['nanoS']);
const knownJettonAddresses = Object.fromEntries(dist/* KNOWN_JETTONS */._t.map((_ref, jettonId) => {
  let {
    masterAddress
  } = _ref;
  return [(0,tonCore/* toBase64Address */.vn)(masterAddress, true, 'mainnet'), jettonId];
}));
const ledgerTransport = new WindowTransport();
const tonTransport = new dist/* TonTransport */.vs(ledgerTransport);

/** Thrown when and only when the Ledger TON app needs to be updated to support this transaction */
const unsupportedError = new Error('Unsupported');
const lacksBlindSigningError = new Error('Lacks blind signing');
async function signTonProofWithLedger(network, wallet, proof) {
  const accountPath = getLedgerAccountPathByWallet(network, wallet);
  const {
    timestamp,
    domain,
    payload
  } = proof;
  try {
    const result = await tonTransport.getAddressProof(accountPath, {
      domain,
      timestamp,
      payload: ledger_Buffer.from(payload)
    });
    return result.signature;
  } catch (err) {
    return handleLedgerError(err);
  }
}

/**
 * Signs the given TON transactions using Ledger. Because Ledger can't sign multiple messages at once, each transaction
 * must contain exactly 1 message, and the transactions will be signed one by one. If everything is ok, returns the
 * signed transactions in the same order as the input transactions.
 */
async function signTonTransactionsWithLedger(network, wallet, tonTransactions, subwalletId) {
  let maxRetries = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : constants/* ATTEMPTS */.PY;
  const accountPath = getLedgerAccountPathByWallet(network, wallet);
  const deviceModel = await ledgerTransport.getDeviceModel();
  const ledgerTonVersion = await tonTransport.getVersion();
  const isBlindSigningEnabled = await getIsBlindSigningEnabled(ledgerTonVersion);
  let ledgerTransactions;

  // To improve the UX, making sure all the transactions are signable before asking the user to sign them
  try {
    ledgerTransactions = await Promise.all(tonTransactions.map(tonTransaction => tonTransactionToLedgerTransaction(network, wallet.version, tonTransaction, deviceModel === null || deviceModel === void 0 ? void 0 : deviceModel.id, ledgerTonVersion, isBlindSigningEnabled, subwalletId)));
  } catch (err) {
    if (err === unsupportedError) return {
      error: types/* ApiHardwareError */.jc.HardwareOutdated
    };
    if (err === lacksBlindSigningError) return {
      error: types/* ApiHardwareError */.jc.BlindSigningNotEnabled
    };
    throw err;
  }
  return signLedgerTransactionsWithRetry(accountPath, ledgerTransactions, maxRetries);
}
async function getIsBlindSigningEnabled(ledgerTonVersion) {
  if (!doesSupport(ledgerTonVersion, VERSION_WITH_GET_SETTINGS)) {
    return true; // If Ledger actually doesn't allow blind signing, it will throw an error later
  }
  const {
    blindSigningEnabled
  } = await tonTransport.getSettings();
  return blindSigningEnabled;
}

/**
 * Converts a transaction, that you would pass to `TonWallet.createTransfer`, to the format suitable for Ledger's
 * `TonTransport.signTransaction`.
 *
 * Exported for tests only.
 */
async function tonTransactionToLedgerTransaction(network, walletVersion, tonTransaction, ledgerModel, ledgerTonVersion, isBlindSigningEnabled, subwalletId) {
  const {
    authType = 'external',
    sendMode = 0,
    seqno,
    timeout,
    hints
  } = tonTransaction;
  const message = getMessageFromTonTransaction(tonTransaction);
  if (authType !== 'external') {
    throw new Error(`Unsupported transaction authType "${authType}"`);
  }
  if (message.info.type !== 'internal') {
    throw new Error(`Unsupported message type "${message.info.type}"`);
  }
  const payload = await getPayload(network, message.info.dest, message.body, ledgerModel, ledgerTonVersion, isBlindSigningEnabled, hints);
  return {
    to: message.info.dest,
    sendMode,
    seqno,
    timeout: timeout ?? getFallbackTimeout(),
    bounce: message.info.bounce,
    amount: message.info.value.coins,
    stateInit: message.init ?? undefined,
    payload,
    walletSpecifiers: getWalletSpecifiers(walletVersion, ledgerTonVersion, subwalletId)
  };
}
function getMessageFromTonTransaction(_ref2) {
  let {
    messages
  } = _ref2;
  if (messages.length === 0) throw new Error('No messages');
  if (messages.length > 1) throw new Error('Ledger doesn\'t support signing more than 1 message');
  return messages[0];
}
function getFallbackTimeout() {
  return Math.floor(Date.now() / 1000 + constants/* TRANSFER_TIMEOUT_SEC */.kF);
}

/**
 * Like `tonPayloadToLedgerPayload`, but also performs long asynchronous operations such as fetching data for the
 * `knownJetton` field.
 */
async function getPayload(network, toAddress, tonPayload, ledgerModel, ledgerTonVersion, isBlindSigningEnabled) {
  let {
    tokenAddress
  } = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {};
  const ledgerPayload = tonPayloadToLedgerPayload(tonPayload, ledgerTonVersion);
  if ((ledgerPayload === null || ledgerPayload === void 0 ? void 0 : ledgerPayload.type) === 'jetton-transfer' && doesSupportKnownJetton(ledgerModel, ledgerTonVersion)) {
    if (!tokenAddress) {
      const tokenWalletAddress = (0,tonCore/* toBase64Address */.vn)(toAddress, true, network);
      tokenAddress = await (0,tonCore/* resolveTokenAddress */.uA)(network, tokenWalletAddress);
    }
    if (tokenAddress) {
      ledgerPayload.knownJetton = getKnownJetton(ledgerTonVersion, tokenAddress);
    }
  }
  if ((ledgerPayload === null || ledgerPayload === void 0 ? void 0 : ledgerPayload.type) === 'unsafe' && !isBlindSigningEnabled) {
    throw lacksBlindSigningError;
  }
  return ledgerPayload;
}

/**
 * Converts a TON message body to the Ledger payload format. Doesn't populate the `knownJetton` field.
 *
 * Exported for tests only.
 */
function tonPayloadToLedgerPayload(tonPayload, ledgerTonVersion) {
  if (!tonPayload) {
    return undefined;
  }
  let ledgerPayload;
  try {
    ledgerPayload = (0,dist/* parseMessage */.vY)(tonPayload, {
      disallowUnsafe: true // Otherwise no error will be thrown, and we won't see why the payload can't be converted
      // We don't use `disallowModification: true`, because it can cause an unnecessary "unsafe" payload, for example,
      // when a token is transferred with a short comment. On the other hand, the fee may increase by about 0.0001 TON.
    });
  } catch (err) {
    (0,logs/* logDebug */.MD)('Unsafe Ledger payload', err);
    ledgerPayload = {
      type: 'unsafe',
      message: tonPayload
    };
  }
  if (ledgerPayload && !doesSupport(ledgerTonVersion, VERSION_WITH_PAYLOAD[ledgerPayload.type])) {
    (0,logs/* logDebug */.MD)(`The ${ledgerPayload.type} payload type is not supported by Ledger TON v${ledgerTonVersion}`);
    if (!doesSupport(ledgerTonVersion, VERSION_WITH_PAYLOAD.unsafe)) {
      throw unsupportedError;
    }
    (0,logs/* logDebug */.MD)('Falling back to an unsafe payload');
    ledgerPayload = {
      type: 'unsafe',
      message: tonPayload
    };
  }
  return ledgerPayload;
}
async function signLedgerTransactionsWithRetry(accountPath, ledgerTransactions, maxRetries) {
  const signedTransactions = [];
  let retryCount = 0;
  let index = 0;
  while (index < ledgerTransactions.length) {
    try {
      signedTransactions.push(await tonTransport.signTransaction(accountPath, ledgerTransactions[index]));
      index++;
    } catch (err) {
      try {
        return handleLedgerError(err);
      } catch {
        if (retryCount >= maxRetries) {
          throw err;
        }
        retryCount++;
      }
      (0,logs/* logDebugError */.SJ)('signLedgerTransactionsWithRetry', err);
    }
  }
  return signedTransactions;
}
function doesSupport(ledgerTonVersion, featureVersion) {
  return compareVersions(ledgerTonVersion, featureVersion) >= 0;
}

/**
 * Checks whether the current Ledger device supports `knownJetton` generally
 */
function doesSupportKnownJetton(ledgerModel, ledgerTonVersion) {
  return ledgerModel // If the Ledger model is unknown, assuming it can be any model and acting safely
  && !DEVICES_NOT_SUPPORTING_JETTON_ID.has(ledgerModel)
  // Note: JavaScript sorts the numeric `VERSION_WITH_JETTON_ID` keys in ascending order automatically
  && doesSupport(ledgerTonVersion, Object.values(VERSION_WITH_JETTON_ID)[0]);
}
function getKnownJetton(ledgerTonVersion, tokenAddress) {
  const jettonId = knownJettonAddresses[tokenAddress];
  return jettonId !== undefined && doesSupportKnownJettonId(ledgerTonVersion, jettonId) ? {
    jettonId,
    workchain: constants/* WORKCHAIN */.Zm
  } : null; // eslint-disable-line no-null/no-null
}

/**
 * Checks that the current Ledger device supports the specific jetton id. This function should be used only if
 * `doesSupportKnownJetton` returns `true`, because it doesn't check what that function checks.
 */
function doesSupportKnownJettonId(ledgerTonVersion, jettonId) {
  // Note: JavaScript sorts the numeric `VERSION_WITH_JETTON_ID` keys in ascending order automatically
  for (const [candidateJettonId, candidateVersion] of Object.entries(VERSION_WITH_JETTON_ID)) {
    if (jettonId <= Number(candidateJettonId)) {
      return doesSupport(ledgerTonVersion, candidateVersion);
    }
  }
  (0,logs/* logDebugError */.SJ)(`The supported version of jetton id ${jettonId} is not set in VERSION_WITH_JETTON_ID`);
  return false;
}
function getWalletSpecifiers(walletVersion, ledgerTonVersion, subwalletId) {
  if (walletVersion === 'v3R2') {
    if (!doesSupport(ledgerTonVersion, VERSION_WITH_WALLET_SPECIFIERS)) throw unsupportedError;
    return {
      includeWalletOp: false
    };
  }
  if (subwalletId !== undefined) {
    if (!doesSupport(ledgerTonVersion, VERSION_WITH_WALLET_SPECIFIERS)) throw unsupportedError;
    return {
      subwalletId,
      includeWalletOp: false
    };
  }
  return undefined;
}

/** Throws unexpected errors (i.e. caused by mistakes in the app code), and returns expected */
function handleLedgerError(error) {
  if (error instanceof lib_es.TransportStatusError) {
    // Status code reference: https://github.com/LedgerHQ/app-ton/blob/d3e1edbbc1fcf9a5d6982fbb971f757a83d0aa56/src/sw.h
    switch (error.statusCode) {
      case 0x6985:
        return {
          error: types/* ApiHardwareError */.jc.RejectedByUser
        };
      case 0xbd00:
        return {
          error: types/* ApiHardwareError */.jc.BlindSigningNotEnabled
        };
      // The limits for Ton Connect proofs are: payload ≤ 128 bytes, domain ≤ 128 bytes, payload + domain ≤ 222 bytes
      case 0xb00b:
        return {
          error: types/* ApiHardwareError */.jc.ProofTooLarge
        };
    }
  }
  throw error;
}

/***/ })

}]);
//# sourceMappingURL=76.e64e6cda01c8360f9f93.js.map