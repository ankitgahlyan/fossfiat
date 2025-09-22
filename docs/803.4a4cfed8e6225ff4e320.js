(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[803],{

/***/ 32693:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hz: () => (/* binding */ PAUSE),
/* harmony export */   PY: () => (/* binding */ ATTEMPTS),
/* harmony export */   Ro: () => (/* binding */ DEFAULT_WALLET_VERSION),
/* harmony export */   eZ: () => (/* binding */ DEVICE_DETECT_ATTEMPTS),
/* harmony export */   fE: () => (/* binding */ LedgerWalletVersion),
/* harmony export */   mN: () => (/* binding */ IS_BOUNCEABLE),
/* harmony export */   xk: () => (/* binding */ INTERNAL_WORKCHAIN)
/* harmony export */ });
let LedgerWalletVersion = /*#__PURE__*/function (LedgerWalletVersion) {
  LedgerWalletVersion["v3R2"] = "v3r2";
  LedgerWalletVersion["v4R2"] = "v4";
  return LedgerWalletVersion;
}({});
const INTERNAL_WORKCHAIN = 0; // workchain === -1 ? 255 : 0;
const DEFAULT_WALLET_VERSION = 'v4R2';
const DEVICE_DETECT_ATTEMPTS = 3;
const PAUSE = 125;
const ATTEMPTS = 10;
const IS_BOUNCEABLE = false;

/***/ }),

/***/ 50243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  connectLedger: () => (/* binding */ connectLedger),
  detectAvailableTransports: () => (/* binding */ detectAvailableTransports),
  getNextLedgerWallets: () => (/* binding */ getNextLedgerWallets),
  getTransport: () => (/* binding */ getTransport),
  hasUsbDevice: () => (/* binding */ hasUsbDevice),
  importLedgerWallet: () => (/* binding */ importLedgerWallet),
  openSystemBluetoothSettings: () => (/* binding */ openSystemBluetoothSettings),
  reconnectLedger: () => (/* binding */ reconnectLedger),
  verifyAddress: () => (/* binding */ verifyAddress),
  waitLedgerTonApp: () => (/* binding */ waitLedgerTonApp)
});

// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport-webhid/lib-es/TransportWebHID.js
var TransportWebHID = __webpack_require__(68238);
// EXTERNAL MODULE: ./node_modules/@ledgerhq/hw-transport-webusb/lib-es/TransportWebUSB.js + 1 modules
var TransportWebUSB = __webpack_require__(7416);
// EXTERNAL MODULE: ./node_modules/@ton-community/ton-ledger/dist/index.js
var dist = __webpack_require__(34557);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./src/api/index.ts + 3 modules
var api = __webpack_require__(76944);
// EXTERNAL MODULE: ./src/api/chains/ton/constants.ts
var constants = __webpack_require__(3476);
// EXTERNAL MODULE: ./src/api/types/index.ts
var types = __webpack_require__(23174);
;// ./src/api/errors.ts

class ApiBaseError extends Error {
  constructor(message, displayError) {
    super(message);
    this.displayError = displayError;
    this.name = this.constructor.name;
  }
}
class ApiUserRejectsError extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Canceled by the user';
    super(message);
  }
}
class ApiServerError extends ApiBaseError {
  constructor(message, statusCode) {
    super(message, types/* ApiCommonError */.QD.ServerError);
    this.statusCode = statusCode;
  }
}
class AbortOperationError extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Abort operation';
    super(message);
  }
}
class NotImplemented extends ApiBaseError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Not implemented';
    super(message);
  }
}
function maybeApiErrors(fn) {
  return async function () {
    try {
      return await fn(...arguments);
    } catch (err) {
      return handleServerError(err);
    }
  };
}
function handleServerError(err) {
  if (err instanceof ApiServerError) {
    return {
      error: err.displayError
    };
  }
  throw err;
}
// EXTERNAL MODULE: ./src/util/account.ts
var util_account = __webpack_require__(86243);
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
// EXTERNAL MODULE: ./src/util/schedulers.ts
var schedulers = __webpack_require__(37836);
// EXTERNAL MODULE: ./src/util/windowEnvironment.ts
var windowEnvironment = __webpack_require__(82393);
// EXTERNAL MODULE: ./src/util/ledger/constants.ts
var ledger_constants = __webpack_require__(32693);
// EXTERNAL MODULE: ./src/util/ledger/utils.ts
var utils = __webpack_require__(59301);
;// ./src/util/ledger/index.ts














let transport;
let tonTransport;
let transportSupport;
let currentLedgerTransport;
let hidImportPromise;
let bleImportPromise;
let BleConnector;
let MtwHidTransport;
let listLedgerDevices;
async function ensureBleConnector() {
  if (!config/* IS_CAPACITOR */.UMQ) return undefined;
  if (!bleImportPromise) {
    bleImportPromise = Promise.all(/* import() */[__webpack_require__.e(580), __webpack_require__.e(513), __webpack_require__.e(642)]).then(__webpack_require__.bind(__webpack_require__, 17642)).then(module => {
      return module.BleConnector;
    });
    BleConnector = await bleImportPromise;
  }
  return bleImportPromise;
}
async function ensureHidTransport() {
  if (!windowEnvironment/* IS_ANDROID_APP */.xy) return undefined;
  if (!hidImportPromise) {
    hidImportPromise = Promise.all(/* import() */[__webpack_require__.e(580), __webpack_require__.e(897)]).then(__webpack_require__.bind(__webpack_require__, 52897)).then(module => {
      return {
        transport: module.HIDTransport,
        listLedgerDevices: module.listLedgerDevices
      };
    });
    const result = await hidImportPromise;
    MtwHidTransport = result.transport;
    listLedgerDevices = result.listLedgerDevices;
  }
  return hidImportPromise;
}
void ensureBleConnector();
void ensureHidTransport();
async function detectAvailableTransports() {
  await ensureBleConnector();
  await ensureHidTransport();
  const [hid, bluetooth, webUsb] = await Promise.all([windowEnvironment/* IS_ANDROID_APP */.xy ? MtwHidTransport.isSupported() : TransportWebHID/* default */.A.isSupported(), BleConnector ? BleConnector.isSupported() : false, TransportWebUSB/* default */.A.isSupported()]);
  (0,logs/* logDebug */.MD)('LEDGER TRANSPORTS', {
    hid,
    bluetooth,
    webUsb
  });
  transportSupport = {
    hid,
    bluetooth,
    webUsb
  };
  return {
    isUsbAvailable: hid || webUsb,
    isBluetoothAvailable: bluetooth
  };
}
async function hasUsbDevice() {
  const support = await getTransportSupport();
  if (support.hid) {
    return windowEnvironment/* IS_ANDROID_APP */.xy ? await hasCapacitorHIDDevice() : await hasWebHIDDevice();
  }
  if (support.webUsb) {
    return await hasWebUsbDevice();
  }
  return false;
}
function getInternalWalletVersion(version) {
  return ledger_constants/* LedgerWalletVersion */.fE[version];
}
async function importLedgerWallet(network, accountIndex) {
  const walletInfo = await getLedgerWalletInfo(network, accountIndex);
  return (0,api/* callApi */.p)('importLedgerWallet', network, walletInfo);
}
function openSystemBluetoothSettings() {
  if (!BleConnector) return;
  void BleConnector.openSettings();
}
async function reconnectLedger() {
  try {
    var _tonTransport;
    if (await ((_tonTransport = tonTransport) === null || _tonTransport === void 0 ? void 0 : _tonTransport.isAppOpen())) {
      return true;
    }
  } catch {
    // Do nothing
  }
  const isLedgerConnected = await connectLedger();
  if (!isLedgerConnected) return false;
  try {
    return await waitLedgerTonApp();
  } catch (err) {
    if ((0,utils/* isLedgerConnectionBroken */.HN)(err.name)) {
      return reconnectLedger();
    }
    throw err;
  }
}
async function connectLedger(preferredTransport) {
  const support = await getTransportSupport();
  if (preferredTransport) currentLedgerTransport = preferredTransport;
  try {
    switch (currentLedgerTransport) {
      case 'bluetooth':
        transport = await connectBLE();
        break;
      case 'usb':
      default:
        if (support.hid) {
          transport = await connectHID();
        } else if (support.webUsb) {
          transport = await connectWebUsb();
        }
        break;
    }
    if (!transport) {
      (0,logs/* logDebugError */.SJ)('connectLedger: BLE and/or HID are not supported');
      return false;
    }
    tonTransport = new dist/* TonTransport */.vs(transport);
    return true;
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('connectLedger', err);
    return false;
  }
}
async function waitLedgerTonAppDeadline() {
  await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz * ledger_constants/* ATTEMPTS */.PY);
  return false;
}
async function checkTonApp() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    try {
      var _tonTransport2;
      const isTonOpen = await ((_tonTransport2 = tonTransport) === null || _tonTransport2 === void 0 ? void 0 : _tonTransport2.isAppOpen());
      if (isTonOpen) {
        var _transport;
        if ((_transport = transport) !== null && _transport !== void 0 && (_transport = _transport.deviceModel) !== null && _transport !== void 0 && _transport.id.startsWith('nanoS')) {
          var _tonTransport3;
          // Workaround for Ledger Nano S or Nano S Plus, this is a way to check if it is unlocked.
          // There will be an error with code 0x530c.
          await ((_tonTransport3 = tonTransport) === null || _tonTransport3 === void 0 ? void 0 : _tonTransport3.getAddress((0,utils/* getLedgerAccountPathByIndex */.L5)(0, false), {
            walletVersion: ledger_constants/* LedgerWalletVersion */.fE[ledger_constants/* DEFAULT_WALLET_VERSION */.Ro]
          }));
        }
        return true;
      }
    } catch (err) {
      if ((0,utils/* isLedgerConnectionBroken */.HN)(err.name)) {
        tonTransport = undefined;
        throw err;
      }
      if (!(err !== null && err !== void 0 && err.message.includes('0x530c'))) {
        (0,logs/* logDebugError */.SJ)('waitLedgerTonApp', err);
      }
    }
    await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
  }
  return false;
}
function waitLedgerTonApp() {
  return Promise.race([checkTonApp(), waitLedgerTonAppDeadline()]);
}
function connectHID() {
  if (windowEnvironment/* IS_ANDROID_APP */.xy) {
    return connectCapacitorHID();
  }
  return connectWebHID();
}
async function connectWebHID() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    const [device] = await TransportWebHID/* default */.A.list();
    if (!device) {
      await TransportWebHID/* default */.A.create();
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
      continue;
    }
    if (device.opened) {
      return new TransportWebHID/* default */.A(device);
    } else {
      return TransportWebHID/* default */.A.open(device);
    }
  }
  throw new Error('Failed to connect');
}
async function connectWebUsb() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    const [device] = await TransportWebUSB/* default */.A.list();
    if (!device) {
      await TransportWebUSB/* default */.A.create();
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
      continue;
    }
    if (device.opened) {
      return (await TransportWebUSB/* default */.A.openConnected()) ?? (await TransportWebUSB/* default */.A.request());
    } else {
      return TransportWebUSB/* default */.A.open(device);
    }
  }
  throw new Error('Failed to connect');
}
async function connectCapacitorHID() {
  for (let i = 0; i < ledger_constants/* ATTEMPTS */.PY; i++) {
    const [device] = await listLedgerDevices();
    if (!device) {
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
      continue;
    }
    try {
      return await Promise.race([MtwHidTransport.open(device), new Promise((_, reject) => {
        setTimeout(() => reject(new Error()), 1000);
      })]);
    } catch (error) {
      await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
    }
  }
  throw new Error('Failed to connect');
}
async function connectBLE() {
  if (!BleConnector) {
    throw new Error('BLE is not supported on this device.');
  }
  const connection = await BleConnector.connect();
  return connection.bleTransport;
}
async function getNextLedgerWallets(network) {
  let lastExistingIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  let alreadyImportedAddresses = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  const result = [];
  let index = lastExistingIndex + 1;
  try {
    while (true) {
      const walletInfo = await getLedgerWalletInfo(network, index);
      if (alreadyImportedAddresses.includes(walletInfo.address)) {
        index += 1;
        continue;
      }
      if (walletInfo.balance !== 0n) {
        result.push(walletInfo);
        index += 1;
        continue;
      }
      if (!result.length) {
        result.push(walletInfo);
      }
      return result;
    }
  } catch (err) {
    return handleServerError(err);
  }
}
async function getLedgerWalletInfo(network, accountIndex) {
  var _deviceModel, _deviceModel2;
  const isTestnet = network === 'testnet';
  const {
    address,
    publicKey
  } = await getLedgerWalletAddress(accountIndex, isTestnet);
  const balance = await (0,api/* callApi */.p)('getWalletBalance', 'ton', network, address);
  return {
    index: accountIndex,
    address,
    publicKey: publicKey.toString('hex'),
    balance,
    version: ledger_constants/* DEFAULT_WALLET_VERSION */.Ro,
    driver: 'HID',
    deviceId: (_deviceModel = transport.deviceModel) === null || _deviceModel === void 0 ? void 0 : _deviceModel.id,
    deviceName: (_deviceModel2 = transport.deviceModel) === null || _deviceModel2 === void 0 ? void 0 : _deviceModel2.productName
  };
}
function getLedgerWalletAddress(index, isTestnet) {
  const path = (0,utils/* getLedgerAccountPathByIndex */.L5)(index, isTestnet);
  return tonTransport.getAddress(path, {
    testOnly: isTestnet,
    chain: ledger_constants/* INTERNAL_WORKCHAIN */.xk,
    bounceable: constants/* WALLET_IS_BOUNCEABLE */.eL,
    walletVersion: ledger_constants/* LedgerWalletVersion */.fE[ledger_constants/* DEFAULT_WALLET_VERSION */.Ro]
  });
}
async function verifyAddress(accountId) {
  const account = await (0,api/* callApi */.p)('fetchLedgerAccount', accountId);
  const path = (0,utils/* getLedgerAccountPathByWallet */.w6)((0,util_account/* parseAccountId */.cK)(accountId).network, account.ton);
  await tonTransport.validateAddress(path, {
    bounceable: ledger_constants/* IS_BOUNCEABLE */.mN,
    walletVersion: getInternalWalletVersion(account.ton.version)
  });
}
async function tryDetectDevice(listDeviceFn, createTransportFn) {
  try {
    for (let i = 0; i < ledger_constants/* DEVICE_DETECT_ATTEMPTS */.eZ; i++) {
      const [device] = await listDeviceFn();
      if (!device) {
        if (createTransportFn) await createTransportFn();
        await (0,schedulers/* pause */.v7)(ledger_constants/* PAUSE */.Hz);
        continue;
      }
      return true;
    }
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryDetectDevice', err);
  }
  return false;
}
function hasWebHIDDevice() {
  return tryDetectDevice(() => TransportWebHID/* default */.A.list(), () => TransportWebHID/* default */.A.create());
}
function hasWebUsbDevice() {
  return tryDetectDevice(() => TransportWebUSB/* default */.A.list(), () => TransportWebUSB/* default */.A.create());
}
function hasCapacitorHIDDevice() {
  return tryDetectDevice(listLedgerDevices);
}
async function getTransportSupport() {
  // Ensure transports support is detected lazily if missing
  if (!transportSupport) {
    await detectAvailableTransports();
  }
  return transportSupport;
}
function getTransport() {
  return transport;
}

/***/ }),

/***/ 71281:
/***/ (() => {

/* (ignored) */

/***/ })

}]);
//# sourceMappingURL=803.4a4cfed8e6225ff4e320.js.map