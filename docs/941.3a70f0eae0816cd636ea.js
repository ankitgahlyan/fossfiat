/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CF: () => (/* binding */ toBig),
/* harmony export */   UH: () => (/* binding */ fromDecimal),
/* harmony export */   nI: () => (/* binding */ toDecimal)
/* harmony export */ });
/* unused harmony export roundDecimal */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* harmony import */ var _lib_big_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48805);


_lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z.RM = 0; // RoundDown
_lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z.NE = -100000; // Disable exponential form
_lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z.PE = 100000; // Disable exponential form

const ten = (0,_lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z)(10);
function fromDecimal(value, decimals) {
  return BigInt((0,_lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z)(value).mul(ten.pow(decimals ?? _config__WEBPACK_IMPORTED_MODULE_0__/* .TONCOIN */ .Tu9.decimals)).round().toString());
}
function toDecimal(value, decimals) {
  let noFloor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return toBig(value, decimals ?? _config__WEBPACK_IMPORTED_MODULE_0__/* .TONCOIN */ .Tu9.decimals, noFloor).toString();
}
function toBig(value) {
  let decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _config__WEBPACK_IMPORTED_MODULE_0__/* .TONCOIN */ .Tu9.decimals;
  let noFloor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  return (0,_lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z)(value.toString()).div(ten.pow(decimals)).round(decimals, noFloor ? _lib_big_js__WEBPACK_IMPORTED_MODULE_1__/* .Big */ .z.roundHalfUp : undefined);
}
function roundDecimal(value, decimals) {
  return Big(value).round(decimals).toString();
}

/***/ }),

/***/ 809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bk: () => (/* binding */ bigintReviver),
/* harmony export */   fC: () => (/* binding */ bigintDivideToNumber),
/* harmony export */   m1: () => (/* binding */ bigintMultiplyToNumber),
/* harmony export */   nd: () => (/* binding */ bigintRandom),
/* harmony export */   tH: () => (/* binding */ BIGINT_PREFIX),
/* harmony export */   wg: () => (/* binding */ bigintAbs)
/* harmony export */ });
/* unused harmony exports bigintSum, bigintCountBits, bigintMax, bigintMin, bigintMultiplePercent */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* harmony import */ var _decimals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(398);
/* harmony import */ var _random__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59121);



const BIGINT_PREFIX = 'bigint:';
function bigintReviver(key, value) {
  if (typeof value === 'string' && value.startsWith(BIGINT_PREFIX)) {
    return BigInt(value.slice(7));
  }
  return value;
}
function bigintAbs(value) {
  return value === -0n || value < 0n ? -value : value;
}
function bigintSum(values) {
  let result = 0n;
  for (const value of values) result += value;
  return result;
}
function bigintDivideToNumber(value, num) {
  return value * _config__WEBPACK_IMPORTED_MODULE_0__/* .ONE_TON */ .X1K / (0,_decimals__WEBPACK_IMPORTED_MODULE_1__/* .fromDecimal */ .UH)(num);
}
function bigintMultiplyToNumber(value, num) {
  return value * (0,_decimals__WEBPACK_IMPORTED_MODULE_1__/* .fromDecimal */ .UH)(num) / _config__WEBPACK_IMPORTED_MODULE_0__/* .ONE_TON */ .X1K;
}
function bigintRandom(bytes) {
  let value = BigInt(0);
  for (const randomNumber of (0,_random__WEBPACK_IMPORTED_MODULE_2__/* .randomBytes */ .po)(bytes)) {
    const randomBigInt = BigInt(randomNumber);
    value = (value << BigInt(8)) + randomBigInt;
  }
  return value;
}
function bigintCountBits(value) {
  const binaryString = value.toString(2);
  return binaryString.length;
}
function bigintMax(value0, value1) {
  return value0 > value1 ? value0 : value1;
}
function bigintMin(value0, value1) {
  return value0 < value1 ? value0 : value1;
}
function bigintMultiplePercent(value, percent) {
  return value * fromDecimal(percent / 100) / ONE_TON;
}

/***/ }),

/***/ 3476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $G: () => (/* binding */ OpCode),
/* harmony export */   Ad: () => (/* binding */ LiquidStakingOpCode),
/* harmony export */   Bm: () => (/* binding */ W5_MAX_MESSAGES),
/* harmony export */   CH: () => (/* binding */ CLAIM_MINTLESS_AMOUNT),
/* harmony export */   CU: () => (/* binding */ JettonStakingOpCode),
/* harmony export */   EV: () => (/* binding */ DEFAULT_MAX_MESSAGES),
/* harmony export */   F0: () => (/* binding */ TINIEST_TOKEN_TRANSFER_REAL_AMOUNT),
/* harmony export */   FT: () => (/* binding */ FEE_FACTOR),
/* harmony export */   Fx: () => (/* binding */ LEDGER_VESTING_SUBWALLET_ID),
/* harmony export */   GV: () => (/* binding */ TINY_TOKEN_TRANSFER_AMOUNT),
/* harmony export */   H3: () => (/* binding */ NftOpCode),
/* harmony export */   IP: () => (/* binding */ SingleNominatorOpCode),
/* harmony export */   Ih: () => (/* binding */ TON_TESTNET_CHAIN_ID),
/* harmony export */   LV: () => (/* binding */ TOKEN_TRANSFER_AMOUNT),
/* harmony export */   LY: () => (/* binding */ JettonOpCode),
/* harmony export */   PY: () => (/* binding */ ATTEMPTS),
/* harmony export */   SQ: () => (/* binding */ OUR_FEE_PAYLOAD_BOC),
/* harmony export */   UA: () => (/* binding */ VestingV1OpCode),
/* harmony export */   W2: () => (/* binding */ TON_BIP39_PATH),
/* harmony export */   Wb: () => (/* binding */ NFT_TRANSFER_FORWARD_AMOUNT),
/* harmony export */   Zm: () => (/* binding */ WORKCHAIN),
/* harmony export */   b2: () => (/* binding */ OtherOpCode),
/* harmony export */   br: () => (/* binding */ EXCESS_OP_CODES),
/* harmony export */   e2: () => (/* binding */ DEFAULT_IS_BOUNCEABLE),
/* harmony export */   fI: () => (/* binding */ DEFAULT_DECIMALS),
/* harmony export */   h$: () => (/* binding */ ContractType),
/* harmony export */   kF: () => (/* binding */ TRANSFER_TIMEOUT_SEC),
/* harmony export */   kJ: () => (/* binding */ DnsCategory),
/* harmony export */   kc: () => (/* binding */ DnsOpCode),
/* harmony export */   li: () => (/* binding */ Workchain),
/* harmony export */   mv: () => (/* binding */ UNSTAKE_COMMENT),
/* harmony export */   nm: () => (/* binding */ DNS_CATEGORY_HASH_MAP),
/* harmony export */   nx: () => (/* binding */ NFT_TRANSFER_REAL_AMOUNT),
/* harmony export */   ov: () => (/* binding */ ALL_WALLET_VERSIONS),
/* harmony export */   qP: () => (/* binding */ LEDGER_MAX_MESSAGES),
/* harmony export */   qd: () => (/* binding */ TOKEN_TRANSFER_REAL_AMOUNT),
/* harmony export */   s1: () => (/* binding */ TeleitemOpCode),
/* harmony export */   sl: () => (/* binding */ TON_GAS),
/* harmony export */   tF: () => (/* binding */ TOKEN_TRANSFER_FORWARD_AMOUNT),
/* harmony export */   uS: () => (/* binding */ NFT_TRANSFER_AMOUNT),
/* harmony export */   v4: () => (/* binding */ KnownContracts),
/* harmony export */   v8: () => (/* binding */ STAKE_COMMENT),
/* harmony export */   xA: () => (/* binding */ NFT_PAYLOAD_SAFE_MARGIN),
/* harmony export */   xB: () => (/* binding */ TINY_TOKEN_TRANSFER_REAL_AMOUNT),
/* harmony export */   xc: () => (/* binding */ TON_MAINNET_CHAIN_ID)
/* harmony export */ });
/* unused harmony exports ONE_TON, TON_GAS_REAL, WALLET_IS_BOUNCEABLE, RAW_ADDRESS_LENGTH */
/* harmony import */ var _contracts_JettonStaking_imports_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61995);

const TON_BIP39_PATH = 'm/44\'/607\'/0\'';

// W5 wallet chain IDs for different subwallet variants
const TON_MAINNET_CHAIN_ID = -239;
const TON_TESTNET_CHAIN_ID = -3;
const ONE_TON = 1_000_000_000n;
const TOKEN_TRANSFER_AMOUNT = 2000000000n; // 0.05 TON
const TINY_TOKEN_TRANSFER_AMOUNT = 18000000n; // 0.018 TON
const TOKEN_TRANSFER_REAL_AMOUNT = 32100000n; // 0.0321 TON
const TINY_TOKEN_TRANSFER_REAL_AMOUNT = 8000000n; // 0.008 TON
const TINIEST_TOKEN_TRANSFER_REAL_AMOUNT = 3000000n; // 0.003 TON
const TOKEN_TRANSFER_FORWARD_AMOUNT = 1n; // 0.000000001 TON
const CLAIM_MINTLESS_AMOUNT = 20000000n; // 0.02 TON

/** The amount that MyTonWallet attaches to NFT transfers */
const NFT_TRANSFER_AMOUNT = 100000000n; // 0.1 TON
const NFT_TRANSFER_REAL_AMOUNT = 5000000n; // 0.005 TON
const NFT_TRANSFER_FORWARD_AMOUNT = 1n; // 0.000000001 TON
/**
 * When the NFT contract handles the payload we send, it simply adds its data to the payload. If the resulting payload
 * size becomes greater than the cell capacity, the contract fails to send the NFT. To avoid that, we keep some free
 * space in the payload cell we send. This constant is the size of the free space in bits.
 */
const NFT_PAYLOAD_SAFE_MARGIN = 14 * 8;
const TON_GAS = {
  stakeNominators: ONE_TON,
  unstakeNominators: ONE_TON,
  stakeLiquid: ONE_TON,
  unstakeLiquid: ONE_TON,
  stakeJettonsForward: _contracts_JettonStaking_imports_constants__WEBPACK_IMPORTED_MODULE_0__/* .JettonStakingGas */ .xT.STAKE_JETTONS,
  stakeJettons: _contracts_JettonStaking_imports_constants__WEBPACK_IMPORTED_MODULE_0__/* .JettonStakingGas */ .xT.STAKE_JETTONS + TOKEN_TRANSFER_AMOUNT,
  unstakeJettons: _contracts_JettonStaking_imports_constants__WEBPACK_IMPORTED_MODULE_0__/* .JettonStakingGas */ .xT.UNSTAKE_JETTONS,
  claimJettons: _contracts_JettonStaking_imports_constants__WEBPACK_IMPORTED_MODULE_0__/* .JettonStakingGas */ .xT.JETTON_TRANSFER + _contracts_JettonStaking_imports_constants__WEBPACK_IMPORTED_MODULE_0__/* .JettonStakingGas */ .xT.SIMPLE_UPDATE_REQUEST,
  changeDns: 15_000_000n,
  // 0.015 TON
  stakeEthena: TOKEN_TRANSFER_AMOUNT + 100_000_000n,
  // 0.15 TON
  stakeEthenaForward: 100_000_000n,
  // 0.1 TON
  unstakeEthena: TOKEN_TRANSFER_AMOUNT + 100_000_000n,
  // 0.15 TON
  unstakeEthenaForward: 100_000_000n,
  // 0.1 TON
  unstakeEthenaLocked: 150_000_000n,
  // 0.15 TON
  unstakeEthenaLockedForward: 70_000_000n // 0.07 TON
};
const TON_GAS_REAL = {
  stakeNominators: 1_000_052_853n,
  unstakeNominators: 148_337_433n,
  stakeLiquid: 20_251_387n,
  unstakeLiquid: 18_625_604n,
  stakeJettons: 74_879_996n,
  unstakeJettons: 59_971_662n,
  claimJettons: 57_053_859n,
  stakeEthena: 116_690_790n,
  unstakeEthena: 113_210_330n,
  unstakeEthenaLocked: 37_612_000n
};
const STAKE_COMMENT = 'd';
const UNSTAKE_COMMENT = 'w';
const ATTEMPTS = 5;
const DEFAULT_DECIMALS = 9;
const DEFAULT_IS_BOUNCEABLE = true;
const WALLET_IS_BOUNCEABLE = false;

// Fee may change, so we add 5% for more reliability. This is only safe for low-fee blockchains such as TON.
const FEE_FACTOR = 1.05;
const ALL_WALLET_VERSIONS = ['simpleR1', 'simpleR2', 'simpleR3', 'v2R1', 'v2R2', 'v3R1', 'v3R2', 'v4R2', 'W5'];
const OUR_FEE_PAYLOAD_BOC = 'te6cckEBAQEABgAACE0jhUPUcYAL';
const RAW_ADDRESS_LENGTH = 66;
let Workchain = /*#__PURE__*/function (Workchain) {
  Workchain[Workchain["MasterChain"] = -1] = "MasterChain";
  Workchain[Workchain["BaseChain"] = 0] = "BaseChain";
  return Workchain;
}({});
const WORKCHAIN = Workchain.BaseChain;
const TRANSFER_TIMEOUT_SEC = 600; // 10 min.

const DEFAULT_MAX_MESSAGES = 4;
const LEDGER_MAX_MESSAGES = 1;
const W5_MAX_MESSAGES = 255;
const LEDGER_VESTING_SUBWALLET_ID = 0x10C;
let OpCode = /*#__PURE__*/function (OpCode) {
  OpCode[OpCode["Comment"] = 0] = "Comment";
  OpCode[OpCode["Encrypted"] = 560454219] = "Encrypted";
  OpCode[OpCode["OurFee"] = 1294173507] = "OurFee";
  OpCode[OpCode["Bounced"] = 4294967295] = "Bounced";
  return OpCode;
}({});
let JettonOpCode = /*#__PURE__*/function (JettonOpCode) {
  JettonOpCode[JettonOpCode["Transfer"] = 260734629] = "Transfer";
  JettonOpCode[JettonOpCode["TransferNotification"] = 1935855772] = "TransferNotification";
  JettonOpCode[JettonOpCode["InternalTransfer"] = 395134233] = "InternalTransfer";
  JettonOpCode[JettonOpCode["Excesses"] = 3576854235] = "Excesses";
  JettonOpCode[JettonOpCode["Burn"] = 1499400124] = "Burn";
  JettonOpCode[JettonOpCode["BurnNotification"] = 2078119902] = "BurnNotification";
  return JettonOpCode;
}({});
let NftOpCode = /*#__PURE__*/function (NftOpCode) {
  NftOpCode[NftOpCode["TransferOwnership"] = 1607220500] = "TransferOwnership";
  NftOpCode[NftOpCode["OwnershipAssigned"] = 85167505] = "OwnershipAssigned";
  NftOpCode[NftOpCode["Excesses"] = 3576854235] = "Excesses";
  return NftOpCode;
}({});
let LiquidStakingOpCode = /*#__PURE__*/function (LiquidStakingOpCode) {
  // Pool
  LiquidStakingOpCode[LiquidStakingOpCode["RequestLoan"] = 3863136613] = "RequestLoan";
  LiquidStakingOpCode[LiquidStakingOpCode["LoanRepayment"] = 3755778683] = "LoanRepayment";
  LiquidStakingOpCode[LiquidStakingOpCode["Deposit"] = 1205158801] = "Deposit";
  LiquidStakingOpCode[LiquidStakingOpCode["Withdraw"] = 832244956] = "Withdraw";
  LiquidStakingOpCode[LiquidStakingOpCode["Withdrawal"] = 175592284] = "Withdrawal";
  LiquidStakingOpCode[LiquidStakingOpCode["DeployController"] = 2994658477] = "DeployController";
  LiquidStakingOpCode[LiquidStakingOpCode["Touch"] = 1271382751] = "Touch";
  LiquidStakingOpCode[LiquidStakingOpCode["Donate"] = 1940913697] = "Donate";
  // NFT
  LiquidStakingOpCode[LiquidStakingOpCode["DistributedAsset"] = 3678112445] = "DistributedAsset";
  // Jetton
  LiquidStakingOpCode[LiquidStakingOpCode["Vote"] = 1778069612] = "Vote";
  return LiquidStakingOpCode;
}({});
let JettonStakingOpCode = /*#__PURE__*/function (JettonStakingOpCode) {
  JettonStakingOpCode[JettonStakingOpCode["UnstakeRequest"] = 1234866786] = "UnstakeRequest";
  JettonStakingOpCode[JettonStakingOpCode["ClaimRewards"] = 2027548937] = "ClaimRewards";
  return JettonStakingOpCode;
}({});
let VestingV1OpCode = /*#__PURE__*/function (VestingV1OpCode) {
  VestingV1OpCode[VestingV1OpCode["AddWhitelist"] = 1918412443] = "AddWhitelist";
  return VestingV1OpCode;
}({});
let SingleNominatorOpCode = /*#__PURE__*/function (SingleNominatorOpCode) {
  SingleNominatorOpCode[SingleNominatorOpCode["Withdraw"] = 4096] = "Withdraw";
  SingleNominatorOpCode[SingleNominatorOpCode["ChangeValidator"] = 4097] = "ChangeValidator";
  return SingleNominatorOpCode;
}({});
let DnsOpCode = /*#__PURE__*/function (DnsOpCode) {
  DnsOpCode[DnsOpCode["ChangeRecord"] = 1320284409] = "ChangeRecord";
  return DnsOpCode;
}({});
let TeleitemOpCode = /*#__PURE__*/function (TeleitemOpCode) {
  TeleitemOpCode[TeleitemOpCode["Ok"] = 2742684035] = "Ok";
  return TeleitemOpCode;
}({});
let OtherOpCode = /*#__PURE__*/function (OtherOpCode) {
  OtherOpCode[OtherOpCode["TokenBridgePaySwap"] = 8] = "TokenBridgePaySwap";
  return OtherOpCode;
}({});
let ContractType = /*#__PURE__*/function (ContractType) {
  ContractType["Wallet"] = "wallet";
  ContractType["Staking"] = "staking";
  return ContractType;
}({});
let DnsCategory = /*#__PURE__*/function (DnsCategory) {
  DnsCategory["DnsNextResolver"] = "dns_next_resolver";
  DnsCategory["Wallet"] = "wallet";
  DnsCategory["Site"] = "site";
  DnsCategory["BagId"] = "storage";
  DnsCategory["Unknown"] = "unknown";
  return DnsCategory;
}({});
const EXCESS_OP_CODES = [JettonOpCode.Excesses, TeleitemOpCode.Ok];
const DNS_CATEGORY_HASH_MAP = {
  dns_next_resolver: '19f02441ee588fdb26ee24b2568dd035c3c9206e11ab979be62e55558a1d17ff',
  wallet: 'e8d44050873dba865aa7c170ab4cce64d90839a34dcfd6cf71d14e0205443b1b',
  site: 'fbae041b02c41ed0fd8a4efb039bc780dd6af4a1f0c420f42561ae705dda43fe',
  storage: '49a25f9feefaffecad0fcd30c50dc9331cff8b55ece53def6285c09e17e6f5d7'
};
const KnownContracts = {
  simpleR1: {
    name: 'simpleR1',
    hash: '3232dc55b02b3d2a9485adc151cf29c50b94c374d3571cb59390d761b87af8bd',
    type: ContractType.Wallet
  },
  simpleR2: {
    name: 'simpleR2',
    hash: '672ce2b01d2fd487a5e0528611e7e4fc11867148cc13ff772bd773b72fb368df',
    type: ContractType.Wallet
  },
  simpleR3: {
    name: 'simpleR3',
    hash: 'd95417233f66ae218317f533630cbbddc677d6d893d5722be6947c8fad8e9d52',
    type: ContractType.Wallet
  },
  v2R1: {
    name: 'v2R1',
    hash: 'fb3bd539b7e50166f1cfdc0bbd298b1c88f6b261fe5ee61343ea47ab4b256029',
    type: ContractType.Wallet
  },
  v2R2: {
    name: 'v2R2',
    hash: 'b584b6106753b7f34709df505be603e463a44ff6a85adf7fec4e26453c325983',
    type: ContractType.Wallet
  },
  v3R1: {
    name: 'v3R1',
    hash: '11d123ed5c2055128e75a9ef4cf1e837e6d14a9c079c39939885c78dc13626e6',
    type: ContractType.Wallet
  },
  v3R2: {
    name: 'v3R2',
    hash: 'df7bf014ee7ac0c38da19ef1b7fa054e2cc7a4513df1f1aa295109cf3606ac14',
    type: ContractType.Wallet
  },
  v4R1: {
    name: 'v4R1',
    hash: '1bc0dfa40956c911616f8a5db09ecc217601bae48d7d3f9311562c5afcb66dcf',
    type: ContractType.Wallet
  },
  v4R2: {
    name: 'v4R2',
    hash: '5659ce2300f4a09a37b0bdee41246ded52474f032c1d6ffce0d7d31b18b7b2b1',
    type: ContractType.Wallet
  },
  W5: {
    name: 'W5',
    hash: '7e94eaaeaaa423b9396e79747038c42edc4fe98dce65094071f0e0ad2df22fd5',
    type: ContractType.Wallet
  },
  highloadV2: {
    name: 'highloadV2',
    hash: 'fcd7d1f3b3847f0b9bd44bc64a2256c03450979dd1646a24fbc874b075392d6e',
    type: ContractType.Wallet
  },
  nominatorPool: {
    name: 'nominatorPool',
    hash: '26faa2d0fd2a8197ea36ded8dc50ad081cce5244207e9b05c08c1bb655527bff',
    type: ContractType.Staking
  },
  multisig: {
    name: 'multisig',
    hash: '45d890485cdd6b152bcbbe3fb2e16d2df82f6da840440a5b9f34ea13cb0b92d2',
    type: ContractType.Wallet
  },
  multisigV2: {
    name: 'multisigV2',
    hash: 'eb1323c5544d5bf26248dc427d108d722d5c2922dd97dd0bdf903c4cea73ca97',
    type: ContractType.Wallet
  },
  vesting: {
    name: 'vesting',
    hash: '69dc931958f7aa203c4a7bfcf263d25d2d828d573184b542a65dd55c8398ad83',
    type: ContractType.Wallet
  },
  multisigNew: {
    name: 'multisigNew',
    hash: '7cb3678880388acff45d74b2e7e7544caa8039d20b49f57c75b53c051b6fa30f',
    type: ContractType.Wallet
  },
  dedustPool: {
    name: 'dedustPool',
    hash: 'f216ded2b43d32e2d487db6fa6e4d2387f0ef1d7b53ec1ad85f0b4feb8e4ed62',
    isSwapAllowed: true
  },
  dedustVaultNative: {
    name: 'dedustVaultNative',
    hash: '64a42ad66688097422901ae6188670f0d6292ad3bdb4139289666f24187e86cb',
    isSwapAllowed: true
  },
  // Example: https://tonscan.org/address/EQAYqo4u7VF0fa4DPAebk4g9lBytj2VFny7pzXR0trjtXQaO
  dedustVaultJetton: {
    name: 'dedustVaultJetton',
    hash: '5bc82f0c5972ccc6732e98cbe31ea4795da818f9e06c991331568182a8362307',
    isSwapAllowed: true
  },
  stonPtonWallet: {
    name: 'stonPtonWallet',
    hash: '6ccbf71a3ed9c7355f84a698a44a7406574bfb8aa34d4bbd86ab75ee9c994880',
    isSwapAllowed: true
  },
  stonRouter: {
    name: 'stonRouter',
    hash: '14ce618a0e9a94adc99fa6e975219ddd675425b30dfa9728f98714c8dc55f9da',
    isSwapAllowed: true
  },
  stonRouterV2_1: {
    name: 'stonRouterV2_1',
    hash: 'd61cb7fb7bee0cc414286a482fccdec53c3f8717e4aae4fc362d98ab6254e6cd',
    isSwapAllowed: true
  },
  stonPoolV2_1: {
    name: 'stonPoolV2_1',
    hash: '16cc513c380e329f45d54f294787e2030e289799eca138961c1cd7e26e882c7c',
    isSwapAllowed: true
  },
  // Example: https://tonscan.org/address/EQCS4UEa5UaJLzOyyKieqQOQ2P9M-7kXpkO5HnP3Bv250cN3
  stonRouterV2_2: {
    name: 'stonRouterV2_2',
    hash: '094b5084111addda1b6fac7007c8a8f85ff4ccc63475815ab3dfa3b5b4c6b102',
    isSwapAllowed: true
  },
  // Example: https://tonscan.org/address/EQBSNX_5mSikBVttWhIaIb0f8jJU7fL6kvyyFVppd7dWRO6M
  stonRouterV2_2_alt: {
    name: 'stonRouterV2_2_alt',
    hash: 'd41e7563afa05ee008655e190920d3f53de9cab4c2d4e10ee1d0f158e95e52e5',
    isSwapAllowed: true
  },
  stonPoolV2_2: {
    name: 'stonPoolV2_2',
    hash: '11eaf6db706e63adf9327897aaa845c77a631856abfc14375837f19b617cacb4',
    isSwapAllowed: true
  },
  // Example: https://tonscan.org/address/EQBiLHuQjDj4fNyCD7Ch5HwpNGldlb5g-LMwQ1kStQ4NM5kv
  stonPtonWalletV2: {
    name: 'stonPtonWalletV2',
    hash: '2761042202032258de9eb1b672e1ec2e4f13b2af00700195801ada33f7ced1b6',
    isSwapAllowed: true
  },
  // Example: https://tonscan.org/address/EQC_-t0nCnOFMdp7E7qPxAOCbCWGFz-e3pwxb6tTvFmshjt5
  toncoRouter: {
    name: 'toncoRouter',
    hash: '3bfeca142c7c280d63f7c06f05b2e43504f2c66694f362f6dc0b5ec7f7090403',
    isSwapAllowed: true
  }
};

/***/ }),

/***/ 5370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  p: () => (/* binding */ callWindow),
  q: () => (/* binding */ initWindowConnector)
});

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./src/api/types/index.ts
var types = __webpack_require__(23174);
;// ./src/api/air/airAppCallWindow.ts

let nativeCallNumber = 0;
const airAppCallWindow = function (methodName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  const airWindow = window;
  const bridge = airWindow.airBridge;
  return new Promise((resolve, reject) => {
    nativeCallNumber++;
    const requestNumber = nativeCallNumber;
    bridge.nativeCallCallbacks[requestNumber] = response => {
      delete bridge.nativeCallCallbacks[requestNumber];
      if (!response.ok) reject(new Error(types/* ApiCommonError */.QD.Unexpected));else resolve(response.result);
    };
    if (airWindow.webkit) {
      var _airWindow$webkit;
      (_airWindow$webkit = airWindow.webkit) === null || _airWindow$webkit === void 0 || _airWindow$webkit.messageHandlers.nativeCall.postMessage({
        requestNumber,
        methodName,
        arg0: args[0],
        arg1: args[1]
      });
    } else {
      airWindow.androidApp.nativeCall(requestNumber, methodName, args[0], args[1]);
    }
  });
};
// EXTERNAL MODULE: ./src/util/extensionMessageSerializer.ts
var extensionMessageSerializer = __webpack_require__(24082);
// EXTERNAL MODULE: ./src/util/generateUniqueId.ts
var generateUniqueId = __webpack_require__(14235);
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
;// ./src/util/PostMessageConnector.ts




// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents

class ConnectorClass {
  requestStates = new Map();
  requestStatesByCallback = new Map();
  constructor(target, onUpdate, channel, shouldUseJson) {
    let targetOrigin = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '*';
    this.target = target;
    this.onUpdate = onUpdate;
    this.channel = channel;
    this.shouldUseJson = shouldUseJson;
    this.targetOrigin = targetOrigin;
  }
  destroy() {}
  init() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    this.postMessage({
      type: 'init',
      args
    });
  }
  request(messageData) {
    const {
      requestStates,
      requestStatesByCallback
    } = this;
    const messageId = (0,generateUniqueId/* default */.A)();
    const payload = {
      type: 'callMethod',
      messageId,
      ...messageData
    };
    const requestState = {
      messageId
    };

    // Re-wrap type because of `postMessage`
    const promise = new Promise((resolve, reject) => {
      Object.assign(requestState, {
        resolve,
        reject
      });
    });
    if (typeof payload.args[payload.args.length - 1] === 'function') {
      payload.withCallback = true;
      const callback = payload.args.pop();
      requestState.callback = callback;
      requestStatesByCallback.set(callback, requestState);
    }
    requestStates.set(messageId, requestState);
    promise.catch(() => undefined).finally(() => {
      requestStates.delete(messageId);
      if (requestState.callback) {
        requestStatesByCallback.delete(requestState.callback);
      }
    });
    this.postMessage(payload);
    return promise;
  }
  cancelCallback(progressCallback) {
    progressCallback.isCanceled = true;
    const {
      messageId
    } = this.requestStatesByCallback.get(progressCallback) || {};
    if (!messageId) {
      return;
    }
    this.postMessage({
      type: 'cancelProgress',
      messageId
    });
  }
  onMessage(data) {
    try {
      data = (0,extensionMessageSerializer/* decodeExtensionMessage */.d$)(data);
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('PostMessageConnector: Failed to parse message', err);
      return;
    }
    const {
      requestStates,
      channel
    } = this;
    if (data.channel !== channel) {
      return;
    }
    if (data.type === 'update' && this.onUpdate) {
      this.onUpdate(data.update);
    }
    if (data.type === 'methodResponse') {
      const requestState = requestStates.get(data.messageId);
      if (requestState) {
        if (data.error) {
          requestState.reject(data.error);
        } else {
          requestState.resolve(data.response);
        }
      }
    } else if (data.type === 'methodCallback') {
      var _requestState$callbac;
      const requestState = requestStates.get(data.messageId);
      requestState === null || requestState === void 0 || (_requestState$callbac = requestState.callback) === null || _requestState$callbac === void 0 || _requestState$callbac.call(requestState, ...data.callbackArgs);
    } else if (data.type === 'unhandledError') {
      var _data$error, _data$error2;
      const error = new Error((_data$error = data.error) === null || _data$error === void 0 ? void 0 : _data$error.message);
      if ((_data$error2 = data.error) !== null && _data$error2 !== void 0 && _data$error2.stack) {
        error.stack = data.error.stack;
      }
      throw error;
    }
  }
  postMessage(data) {
    data.channel = this.channel;
    let rawData = data;
    if (this.shouldUseJson) {
      rawData = (0,extensionMessageSerializer/* encodeExtensionMessage */.HE)(data);
    }
    if ('open' in this.target) {
      // Is Window
      this.target.postMessage(rawData, this.targetOrigin);
    } else {
      this.target.postMessage(rawData);
    }
  }
}

/**
 * Allows to call functions, provided by another messenger (a window, a worker), in this messenger.
 * The other messenger must provide the functions using `createPostMessageInterface`.
 */
function createConnector(worker, onUpdate, channel, targetOrigin) {
  const connector = new ConnectorClass(worker, onUpdate, channel, undefined, targetOrigin);
  function handleMessage(_ref) {
    let {
      data
    } = _ref;
    connector.onMessage(data);
  }
  worker.addEventListener('message', handleMessage); // TS weirdly complains here

  connector.destroy = () => {
    worker.removeEventListener('message', handleMessage);
  };
  return connector;
}

/**
 * Allows to call functions, provided by the extension service worker, in this window.
 * The service worker must provide the functions using `createExtensionInterface`.
 */
function createExtensionConnector(name, onUpdate, getInitArgs, channel) {
  const connector = new ConnectorClass(connect(), onUpdate, channel, true);
  function connect() {
    const port = self.chrome.runtime.connect({
      name
    });
    port.onMessage.addListener(data => {
      connector.onMessage(data);
    });

    // For some reason port can suddenly get disconnected
    port.onDisconnect.addListener(() => {
      connector.target = connect();
      connector.init(getInitArgs === null || getInitArgs === void 0 ? void 0 : getInitArgs());
    });
    return port;
  }
  connector.init(getInitArgs === null || getInitArgs === void 0 ? void 0 : getInitArgs());
  return connector;
}

/**
 * Allows to call functions, provided by a window, in this service worker.
 * The window must provide the functions using `createReverseExtensionInterface`.
 *
 * Warning: the connector is able to send messages only when the popup window is open.
 */
function createReverseExtensionConnector(portName) {
  const nullWorker = {
    postMessage() {
      throw new Error('The popup window is not connected');
    }
  };
  const connector = new ConnectorClass(nullWorker, undefined, undefined, true);
  chrome.runtime.onConnect.addListener(port => {
    if (port.name !== portName) {
      return;
    }
    connector.target = port;
    port.onMessage.addListener(data => {
      connector.onMessage(data);
    });
    port.onDisconnect.addListener(() => {
      connector.target = nullWorker;
    });
  });
  return connector;
}
;// ./src/util/windowProvider/connector.ts




let connector;
function initWindowConnector() {
  if (!connector) {
    // We use process.env.IS_EXTENSION instead of IS_EXTENSION in order to remove the irrelevant code during bundling
    if (false) // removed by dead control flow
{} else {
      connector = createConnector(self, undefined, config/* WINDOW_PROVIDER_CHANNEL */.Pcx);
      connector.init();
    }
  }
}
function callWindow(methodName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (config/* IS_AIR_APP */.gmk) return airAppCallWindow(methodName, ...args);
  if (!connector) {
    throw new Error('API is not initialized');
  }
  return connector.request({
    name: methodName,
    args
  });
}

/***/ }),

/***/ 9202:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// NAMESPACE OBJECT: ./src/api/chains/ton/index.ts
var ton_namespaceObject = {};
__webpack_require__.r(ton_namespaceObject);
__webpack_require__.d(ton_namespaceObject, {
  Workchain: () => (constants/* Workchain */.li),
  buildWallet: () => (buildWallet),
  checkApiAvailability: () => (checkApiAvailability),
  checkDnsChangeWalletDraft: () => (checkDnsChangeWalletDraft),
  checkDnsRenewalDraft: () => (checkDnsRenewalDraft),
  checkMultiTransactionDraft: () => (checkMultiTransactionDraft),
  checkNftOwnership: () => (checkNftOwnership),
  checkNftTransferDraft: () => (checkNftTransferDraft),
  checkStakeDraft: () => (checkStakeDraft),
  checkTransactionDraft: () => (checkTransactionDraft),
  checkUnstakeDraft: () => (checkUnstakeDraft),
  decryptComment: () => (decryptComment),
  fetchActivityDetails: () => (fetchActivityDetails),
  fetchActivitySlice: () => (fetchActivitySlice),
  fetchEstimateDiesel: () => (fetchEstimateDiesel),
  fetchPrivateKey: () => (fetchPrivateKey),
  fetchToken: () => (fetchToken),
  generateMnemonic: () => (generateMnemonic),
  getAccountBalance: () => (getAccountBalance),
  getAccountNfts: () => (getAccountNfts),
  getBackendStakingState: () => (getBackendStakingState),
  getContractInfo: () => (getContractInfo),
  getNftUpdates: () => (getNftUpdates),
  getOtherVersionWallet: () => (getOtherVersionWallet),
  getStakingStates: () => (getStakingStates),
  getTonWallet: () => (getTonWallet),
  getToncoinAmountForTransfer: () => (getToncoinAmountForTransfer),
  getWalletBalance: () => (getWalletBalance),
  getWalletFromAddress: () => (getWalletFromAddress),
  getWalletFromBip39Mnemonic: () => (getWalletFromBip39Mnemonic),
  getWalletFromKeys: () => (getWalletFromKeys),
  getWalletFromMnemonic: () => (getWalletFromMnemonic),
  getWalletFromPrivateKey: () => (getWalletFromPrivateKey),
  getWalletInfo: () => (getWalletInfo),
  getWalletSeqno: () => (getWalletSeqno),
  getWalletStateInit: () => (getWalletStateInit),
  getWalletVersionInfos: () => (getWalletVersionInfos),
  getWalletVersions: () => (getWalletVersions),
  insertMintlessPayload: () => (insertMintlessPayload),
  isActiveSmartContract: () => (isActiveSmartContract),
  isAddressInitialized: () => (isAddressInitialized),
  normalizeAddress: () => (normalizeAddress),
  oneCellFromBoc: () => (tonCore/* oneCellFromBoc */.RS),
  packPayloadToBoc: () => (packPayloadToBoc),
  parsePayloadBase64: () => (parsePayloadBase64),
  pickBestWallet: () => (pickBestWallet),
  pickWalletByAddress: () => (pickWalletByAddress),
  publicKeyToAddress: () => (publicKeyToAddress),
  rawSign: () => (rawSign),
  resolveTokenAddress: () => (tonCore/* resolveTokenAddress */.uA),
  resolveTokenWalletAddress: () => (tonCore/* resolveTokenWalletAddress */.jq),
  sendSignedTransactions: () => (sendSignedTransactions),
  setupActivePolling: () => (setupActivePolling),
  setupInactivePolling: () => (setupInactivePolling),
  signTransfers: () => (signTransfers),
  submitDnsChangeWallet: () => (submitDnsChangeWallet),
  submitDnsRenewal: () => (submitDnsRenewal),
  submitMultiTransfer: () => (submitMultiTransfer),
  submitNftTransfers: () => (submitNftTransfers),
  submitStake: () => (submitStake),
  submitTokenStakingClaim: () => (submitTokenStakingClaim),
  submitTransfer: () => (submitTransfer),
  submitTransferWithDiesel: () => (submitTransferWithDiesel),
  submitUnstake: () => (submitUnstake),
  submitUnstakeEthenaLocked: () => (submitUnstakeEthenaLocked),
  validateDexSwapTransfers: () => (validateDexSwapTransfers),
  validateMnemonic: () => (validateMnemonic)
});

// NAMESPACE OBJECT: ./src/api/chains/tron/index.ts
var tron_namespaceObject = {};
__webpack_require__.r(tron_namespaceObject);
__webpack_require__.d(tron_namespaceObject, {
  checkApiAvailability: () => (tron_checkApiAvailability),
  checkTransactionDraft: () => (transfer_checkTransactionDraft),
  decryptComment: () => (activities_decryptComment),
  fetchActivityDetails: () => (activities_fetchActivityDetails),
  fetchActivitySlice: () => (activities_fetchActivitySlice),
  getWalletBalance: () => (wallet_getWalletBalance),
  getWalletFromAddress: () => (tron_getWalletFromAddress),
  getWalletFromBip39Mnemonic: () => (tron_getWalletFromBip39Mnemonic),
  isTronAccountMultisig: () => (isTronAccountMultisig),
  setupActivePolling: () => (polling_setupActivePolling),
  setupInactivePolling: () => (polling_setupInactivePolling),
  submitTransfer: () => (transfer_submitTransfer)
});

// NAMESPACE OBJECT: ./src/api/tonConnect/index.ts
var tonConnect_namespaceObject = {};
__webpack_require__.r(tonConnect_namespaceObject);
__webpack_require__.d(tonConnect_namespaceObject, {
  connect: () => (connect),
  disconnect: () => (disconnect),
  fetchDappMetadata: () => (fetchDappMetadata),
  initTonConnect: () => (initTonConnect),
  reconnect: () => (reconnect),
  sendTransaction: () => (sendTransaction),
  signData: () => (signData)
});

// NAMESPACE OBJECT: ./src/api/methods/index.ts
var methods_namespaceObject = {};
__webpack_require__.r(methods_namespaceObject);
__webpack_require__.d(methods_namespaceObject, {
  activateAccount: () => (activateAccount),
  addressFromPublicKey: () => (addressFromPublicKey),
  buildTokenSlug: () => (buildTokenSlug),
  cancelDappRequest: () => (cancelDappRequest),
  changePassword: () => (changePassword),
  checkApiAvailability: () => (other_checkApiAvailability),
  checkDnsChangeWalletDraft: () => (domains_checkDnsChangeWalletDraft),
  checkDnsRenewalDraft: () => (domains_checkDnsRenewalDraft),
  checkNftOwnership: () => (nfts_checkNftOwnership),
  checkNftTransferDraft: () => (nfts_checkNftTransferDraft),
  checkStakeDraft: () => (staking_checkStakeDraft),
  checkTransactionDraft: () => (methods_transfer_checkTransactionDraft),
  checkUnstakeDraft: () => (staking_checkUnstakeDraft),
  checkWorkerStorageIntegrity: () => (checkWorkerStorageIntegrity),
  confirmDappRequest: () => (confirmDappRequest),
  confirmDappRequestConnect: () => (confirmDappRequestConnect),
  confirmDappRequestSendTransaction: () => (confirmDappRequestSendTransaction),
  confirmDappRequestSignData: () => (confirmDappRequestSignData),
  createAccountWithSecondNetwork: () => (createAccountWithSecondNetwork),
  createLocalActivitiesFromEmulation: () => (createLocalActivitiesFromEmulation),
  createLocalTransactions: () => (createLocalTransactions),
  createWallet: () => (createWallet),
  deactivateAllAccounts: () => (deactivateAllAccounts),
  decryptComment: () => (methods_activities_decryptComment),
  deleteAllDapps: () => (deleteAllDapps),
  deleteDapp: () => (deleteDapp),
  destroy: () => (destroy),
  fetchAccountConfigForDebugPurposesOnly: () => (fetchAccountConfigForDebugPurposesOnly),
  fetchActivityDetails: () => (methods_activities_fetchActivityDetails),
  fetchAddress: () => (fetchAddress),
  fetchEstimateDiesel: () => (transfer_fetchEstimateDiesel),
  fetchLedgerAccount: () => (fetchLedgerAccount),
  fetchMnemonic: () => (fetchMnemonic),
  fetchNftsFromCollection: () => (fetchNftsFromCollection),
  fetchPastActivities: () => (fetchPastActivities),
  fetchPriceHistory: () => (fetchPriceHistory),
  fetchPrivateKey: () => (wallet_fetchPrivateKey),
  fetchSwaps: () => (fetchSwaps),
  fetchToken: () => (tokens_fetchToken),
  fetchTonWallet: () => (fetchTonWallet),
  generateMnemonic: () => (auth_generateMnemonic),
  getAddressInfo: () => (getAddressInfo),
  getAmountForTokenTransfer: () => (getAmountForTokenTransfer),
  getBackendAuthToken: () => (getBackendAuthToken),
  getContractInfo: () => (wallet_getContractInfo),
  getDapps: () => (getDapps),
  getDappsByUrl: () => (getDappsByUrl),
  getLogs: () => (logs/* getLogs */.ao),
  getMnemonicWordList: () => (getMnemonicWordList),
  getMoonpayOnrampUrl: () => (getMoonpayOnrampUrl),
  getStakingHistory: () => (getStakingHistory),
  getTokenBySlug: () => (getTokenBySlug),
  getWalletBalance: () => (methods_wallet_getWalletBalance),
  getWalletInfo: () => (wallet_getWalletInfo),
  getWalletSeqno: () => (wallet_getWalletSeqno),
  getWalletStateInit: () => (wallet_getWalletStateInit),
  importLedgerWallet: () => (importLedgerWallet),
  importMnemonic: () => (importMnemonic),
  importNewWalletVersion: () => (importNewWalletVersion),
  importViewAccount: () => (importViewAccount),
  initAccounts: () => (initAccounts),
  initDapps: () => (initDapps),
  initNfts: () => (initNfts),
  initPolling: () => (initPolling),
  initStaking: () => (initStaking),
  initSwap: () => (initSwap),
  initTransfer: () => (initTransfer),
  isWalletInitialized: () => (isWalletInitialized),
  loadExploreSites: () => (loadExploreSites),
  ping: () => (ping),
  removeAccount: () => (removeAccount),
  removeNetworkAccounts: () => (removeNetworkAccounts),
  resetAccounts: () => (resetAccounts),
  resolveDataPreloadPromise: () => (resolveDataPreloadPromise),
  resolveTokenAddress: () => (resolveTokenAddress),
  resolveTokenWalletAddress: () => (resolveTokenWalletAddress),
  setIsAppFocused: () => (setIsAppFocused),
  signData: () => (tonConnect_signData),
  signTonProof: () => (signTonProof),
  signTransfers: () => (tonConnect_signTransfers),
  startSseConnection: () => (startSseConnection),
  submitDnsChangeWallet: () => (domains_submitDnsChangeWallet),
  submitDnsRenewal: () => (domains_submitDnsRenewal),
  submitNftTransfers: () => (nfts_submitNftTransfers),
  submitStake: () => (staking_submitStake),
  submitStakingClaimOrUnlock: () => (submitStakingClaimOrUnlock),
  submitTransfer: () => (methods_transfer_submitTransfer),
  submitUnstake: () => (staking_submitUnstake),
  subscribeNotifications: () => (subscribeNotifications),
  swapBuild: () => (swapBuild),
  swapBuildTransfer: () => (swapBuildTransfer),
  swapCexCreateTransaction: () => (swapCexCreateTransaction),
  swapCexEstimate: () => (swapCexEstimate),
  swapCexSubmit: () => (swapCexSubmit),
  swapCexValidateAddress: () => (swapCexValidateAddress),
  swapEstimate: () => (swapEstimate),
  swapGetAssets: () => (swapGetAssets),
  swapGetPairs: () => (swapGetPairs),
  swapSubmit: () => (swapSubmit),
  tryUpdateStakingCommonData: () => (tryUpdateStakingCommonData),
  unsubscribeNotifications: () => (unsubscribeNotifications),
  updateAccountMemoryCache: () => (updateAccountMemoryCache),
  validateMnemonic: () => (auth_validateMnemonic),
  verifyPassword: () => (verifyPassword),
  waitDataPreload: () => (waitDataPreload)
});

// EXTERNAL MODULE: ./src/util/extensionMessageSerializer.ts
var extensionMessageSerializer = __webpack_require__(24082);
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
;// ./src/util/createPostMessageInterface.ts


const callbackState = new Map();
/**
 * Provides functions, defined in this messenger (a window, a worker), to another messenger.
 * The other messenger can call the functions using `createConnector`.
 */
function createPostMessageInterface(api, channel) {
  let target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : self;
  let shouldIgnoreErrors = arguments.length > 3 ? arguments[3] : undefined;
  function sendToOrigin(data, transferables) {
    data.channel = channel;
    if (transferables) {
      target.postMessage(data, transferables);
    } else {
      target.postMessage(data);
    }
  }
  if (!shouldIgnoreErrors) {
    handleErrors(sendToOrigin);
  }
  function handleMessage(e) {
    var _e$data;
    if (((_e$data = e.data) === null || _e$data === void 0 ? void 0 : _e$data.channel) === channel) {
      void onMessage(api, e.data, sendToOrigin);
    }
  }

  // Correct for any target, but TypeScript weirdly complains
  target.addEventListener('message', handleMessage);
  return () => {
    target.removeEventListener('message', handleMessage);
  };
}

/**
 * Provides functions, defined in the main window, to an IFrame.
 */
function createReverseIFrameInterface(api, targetOrigin, target, channel) {
  function sendToOrigin(data, transferables) {
    data.channel = channel;
    if (transferables) {
      throw new Error('Cannot send `Transferable` to `Window`');
    } else {
      target.postMessage(data, targetOrigin);
    }
  }
  function handleMessage(e) {
    var _e$data2;
    if (targetOrigin && e.origin !== targetOrigin) return;
    if (((_e$data2 = e.data) === null || _e$data2 === void 0 ? void 0 : _e$data2.channel) === channel) {
      void onMessage(api, e.data, sendToOrigin);
    }
  }
  window.addEventListener('message', handleMessage);
  return () => {
    window.removeEventListener('message', handleMessage);
  };
}

/**
 * Provides functions, defined in this extension service worker, to a window.
 * The window can call the functions using `createExtensionConnector`.
 */
function createExtensionInterface(portName, api, channel, cleanUpdater) {
  let withAutoInit = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  chrome.runtime.onConnect.addListener(port => {
    var _port$sender;
    if (port.name !== portName) {
      return;
    }
    const url = (_port$sender = port.sender) === null || _port$sender === void 0 ? void 0 : _port$sender.url;
    const origin = url ? new URL(url).origin : undefined;
    const dAppUpdater = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
    function sendToOrigin(data) {
      data.channel = channel;
      port.postMessage(encodeExtensionMessage(data));
    }
    handleErrors(sendToOrigin);
    port.onMessage.addListener(data => {
      data = decodeExtensionMessage(data);
      if (data.channel === channel) {
        void onMessage(api, data, sendToOrigin, dAppUpdater, origin);
      }
    });
    port.onDisconnect.addListener(() => {
      cleanUpdater === null || cleanUpdater === void 0 || cleanUpdater(dAppUpdater);
    });
    if (withAutoInit) {
      void onMessage(api, {
        type: 'init',
        args: []
      }, sendToOrigin, dAppUpdater);
    }
  });
}

/**
 * Provides functions, defined in this window, to the extension service worker.
 * The service worker can call the functions using `createReverseExtensionConnector`.
 */
function createReverseExtensionInterface(portName, api) {
  let port;
  function sendToServiceWorker(data) {
    port.postMessage(encodeExtensionMessage(data));
  }
  function connect() {
    port = chrome.runtime.connect({
      name: portName
    });
    port.onMessage.addListener(data => {
      data = decodeExtensionMessage(data);
      void onMessage(api, data, sendToServiceWorker);
    });

    // For some reason port can suddenly get disconnected
    port.onDisconnect.addListener(() => {
      connect();
    });
  }
  connect();
}
async function onMessage(api, data, sendToOrigin, onUpdate, origin) {
  if (!onUpdate) {
    onUpdate = update => {
      sendToOrigin({
        type: 'update',
        update
      });
    };
  }
  switch (data.type) {
    case 'init':
      {
        var _api$init;
        const {
          args
        } = data;
        const promise = typeof api === 'function' ? api('init', origin, onUpdate, ...args) : (_api$init = api.init) === null || _api$init === void 0 ? void 0 : _api$init.call(api, onUpdate, ...args);
        await promise;
        break;
      }
    case 'callMethod':
      {
        const {
          messageId,
          name,
          args,
          withCallback
        } = data;
        try {
          // This method is probably from another worker
          if (typeof api !== 'function' && !api[name]) return;
          if (messageId && withCallback) {
            const callback = function () {
              for (var _len = arguments.length, callbackArgs = new Array(_len), _key = 0; _key < _len; _key++) {
                callbackArgs[_key] = arguments[_key];
              }
              const lastArg = callbackArgs[callbackArgs.length - 1];
              sendToOrigin({
                type: 'methodCallback',
                messageId,
                callbackArgs
              }, isTransferable(lastArg) ? [lastArg] : undefined);
            };
            callbackState.set(messageId, callback);
            args.push(callback);
          }
          const response = typeof api === 'function' ? await api(name, origin, ...args) : await api[name](...args);
          const {
            arrayBuffer
          } = typeof response === 'object' && response && 'arrayBuffer' in response || {};
          if (messageId) {
            sendToOrigin({
              type: 'methodResponse',
              messageId,
              response
            }, arrayBuffer ? [arrayBuffer] : undefined);
          }
        } catch (err) {
          (0,logs/* logDebugError */.SJ)(name, err);
          if (messageId) {
            sendToOrigin({
              type: 'methodResponse',
              messageId,
              error: {
                message: err.message
              }
            });
          }
        }
        if (messageId) {
          callbackState.delete(messageId);
        }
        break;
      }
    case 'cancelProgress':
      {
        const callback = callbackState.get(data.messageId);
        if (callback) {
          callback.isCanceled = true;
        }
        break;
      }
  }
}
function isTransferable(obj) {
  return obj instanceof ArrayBuffer || obj instanceof ImageBitmap;
}
function handleErrors(sendToOrigin) {
  self.onerror = e => {
    var _e$error, _e$error2;
    const message = ((_e$error = e.error) === null || _e$error === void 0 ? void 0 : _e$error.message) || 'Uncaught exception in worker';
    (0,logs/* logDebugError */.SJ)(message, e.error);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message,
        stack: (_e$error2 = e.error) === null || _e$error2 === void 0 ? void 0 : _e$error2.stack
      }
    });
  };
  self.addEventListener('unhandledrejection', e => {
    var _e$reason, _e$reason2;
    const message = ((_e$reason = e.reason) === null || _e$reason === void 0 ? void 0 : _e$reason.message) || 'Unhandled rejection in worker';
    (0,logs/* logDebugError */.SJ)(message, e.reason);
    sendToOrigin({
      type: 'unhandledError',
      error: {
        message,
        stack: (_e$reason2 = e.reason) === null || _e$reason2 === void 0 ? void 0 : _e$reason2.stack
      }
    });
  });
}
// EXTERNAL MODULE: ./src/util/bigint.ts
var bigint = __webpack_require__(809);
;// ./src/util/bigintPatch.ts


// Fixes serialization of objects containing `bigint` values.
// Extracted to a separate file to avoid leaking into Extension Page Script.
// @ts-ignore
BigInt.prototype.toJSON = function toJSON() {
  return `${bigint/* BIGINT_PREFIX */.tH}${this.toString()}`;
};
// EXTERNAL MODULE: ./src/util/windowProvider/connector.ts + 2 modules
var connector = __webpack_require__(5370);
// EXTERNAL MODULE: ./node_modules/tonweb-mnemonic/dist/web/index.js
var web = __webpack_require__(98629);
// EXTERNAL MODULE: ./node_modules/bip39/src/index.js
var src = __webpack_require__(90749);
// EXTERNAL MODULE: ./node_modules/tweetnacl/nacl-fast.js
var nacl_fast = __webpack_require__(88947);
var nacl_fast_default = /*#__PURE__*/__webpack_require__.n(nacl_fast);
// EXTERNAL MODULE: ./src/api/types/index.ts
var types = __webpack_require__(23174);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./node_modules/create-hmac/browser.js
var browser = __webpack_require__(83507);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);
;// ./src/lib/ed25519-hd-key/index.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


const ED25519_CURVE = 'ed25519 seed';
const HARDENED_OFFSET = 0x80000000;
const pathRegex = /^m(\/[0-9]+')+$/;
function replaceDerive(val) {
  return val.replace('\'', '');
}
const getMasterKeyFromSeed = seed => {
  const hmac = browser_default()('sha512', ED25519_CURVE);
  const I = hmac.update(Buffer.from(seed, 'hex')).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
const CKDPriv = (_ref, index) => {
  let {
    key,
    chainCode
  } = _ref;
  const indexBuffer = Buffer.allocUnsafe(4);
  indexBuffer.writeUInt32BE(index, 0);
  const data = Buffer.concat([Buffer.alloc(1, 0), key, indexBuffer]);
  const I = browser_default()('sha512', chainCode).update(data).digest();
  const IL = I.slice(0, 32);
  const IR = I.slice(32);
  return {
    key: IL,
    chainCode: IR
  };
};
const getPublicKey = function (privateKey) {
  let withZeroByte = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  const keyPair = nacl.sign.keyPair.fromSeed(privateKey);
  const signPk = keyPair.secretKey.subarray(32);
  const zero = Buffer.alloc(1, 0);
  return withZeroByte ? Buffer.concat([zero, Buffer.from(signPk)]) : Buffer.from(signPk);
};
const isValidPath = path => {
  if (!pathRegex.test(path)) {
    return false;
  }
  return !path.split('/').slice(1).map(replaceDerive).some(isNaN);
};
const derivePath = function (path, seed) {
  let offset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : HARDENED_OFFSET;
  if (!isValidPath(path)) {
    throw new Error('Invalid derivation path');
  }
  const {
    key,
    chainCode
  } = getMasterKeyFromSeed(seed);
  const segments = path.split('/').slice(1).map(replaceDerive).map(el => parseInt(el, 10));
  return segments.reduce((parentKeys, segment) => CKDPriv(parentKeys, segment + offset), {
    key,
    chainCode
  });
};
;// ./src/util/isMnemonicPrivateKey.ts

function isMnemonicPrivateKey(mnemonic) {
  return mnemonic.length === 1 && mnemonic[0].length === config/* PRIVATE_KEY_HEX_LENGTH */.PcM;
}
// EXTERNAL MODULE: ./src/util/iteratees.ts
var iteratees = __webpack_require__(87894);
// EXTERNAL MODULE: ./src/api/chains/ton/util/tonCore.ts + 4 modules
var tonCore = __webpack_require__(88823);
// EXTERNAL MODULE: ./src/util/withCache.ts
var withCache = __webpack_require__(19314);
;// ./src/util/shortenAddress.ts

const MEANINGFUL_CHAR_LENGTH = 6;
const FILLER = '···';
const FILLER_LENGTH = FILLER.length;
const shortenAddress_shortenAddress = (0,withCache/* default */.A)(function (address) {
  let shift = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : MEANINGFUL_CHAR_LENGTH;
  let fromRight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : shift;
  if (!address) return undefined;
  if (address.length <= shift + fromRight + FILLER_LENGTH) return address;
  return `${address.slice(0, shift)}${FILLER}${address.slice(-fromRight)}`;
});
;// ./src/util/account.ts

function parseAccountId(accountId) {
  const parts = accountId.split('-');
  const [id, network = 'mainnet'] = parts.length === 3 ? [parts[0], parts[2]] : parts;
  return {
    id: Number(id),
    network
  };
}
function buildAccountId(account) {
  const {
    id,
    network
  } = account;
  return `${id}-${network}`;
}
function getMainAccountAddress(byChain) {
  var _ref;
  return (_ref = byChain.ton ?? Object.values(byChain).find(Boolean)) === null || _ref === void 0 ? void 0 : _ref.address;
}
function getAccountTitle(account) {
  return account.title || shortenAddress(getMainAccountAddress(account.byChain) ?? '');
}
;// ./src/api/storages/types.ts
let StorageType = /*#__PURE__*/function (StorageType) {
  StorageType[StorageType["IndexedDb"] = 0] = "IndexedDb";
  StorageType[StorageType["LocalStorage"] = 1] = "LocalStorage";
  StorageType[StorageType["ExtensionLocal"] = 2] = "ExtensionLocal";
  StorageType[StorageType["CapacitorStorage"] = 3] = "CapacitorStorage";
  return StorageType;
}({});
// EXTERNAL MODULE: ./src/api/environment.ts
var api_environment = __webpack_require__(68249);
;// ./src/api/storages/capacitorStorage.ts



let cache = {};
const storage = {
  async getItem(key, force) {
    if ((0,api_environment/* getEnvironment */.u)().isAndroidApp && key in cache && !force) {
      return cache[key];
    }
    const result = await (0,connector/* callWindow */.p)('capacitorStorageGetItem', key);
    const value = result ? JSON.parse(result, bigint/* bigintReviver */.bk) : undefined;
    if ((0,api_environment/* getEnvironment */.u)().isAndroidApp) {
      if (value === undefined) {
        delete cache[key];
      } else {
        cache[key] = value;
      }
    }
    return value;
  },
  async setItem(key, value) {
    await (0,connector/* callWindow */.p)('capacitorStorageSetItem', key, JSON.stringify(value));
    if ((0,api_environment/* getEnvironment */.u)().isAndroidApp) {
      cache[key] = value;
    }
  },
  async removeItem(key) {
    await (0,connector/* callWindow */.p)('capacitorStorageRemoveItem', key);
    if ((0,api_environment/* getEnvironment */.u)().isAndroidApp) {
      delete cache[key];
    }
  },
  async clear() {
    await (0,connector/* callWindow */.p)('capacitorStorageClear');
    if ((0,api_environment/* getEnvironment */.u)().isAndroidApp) {
      cache = {};
    }
  },
  async getKeys() {
    const result = await (0,connector/* callWindow */.p)('capacitorStorageKeys');
    return result === null || result === void 0 ? void 0 : result.value;
  }
};
/* harmony default export */ const capacitorStorage = (storage);
;// ./src/api/storages/extension.ts

const extension_storage = config/* IS_EXTENSION */.hL1 ? self.chrome.storage.local : undefined;
/* harmony default export */ const extension = (extension_storage && {
  getItem: async key => {
    var _await$storage$get;
    return (_await$storage$get = await extension_storage.get(key)) === null || _await$storage$get === void 0 ? void 0 : _await$storage$get[key];
  },
  setItem: (key, value) => extension_storage.set({
    [key]: value
  }),
  removeItem: extension_storage.remove.bind(extension_storage),
  clear: extension_storage.clear.bind(extension_storage),
  getAll: extension_storage.get.bind(extension_storage),
  setMany: extension_storage.set.bind(extension_storage),
  getMany: extension_storage.get.bind(extension_storage)
} || {});
// EXTERNAL MODULE: ./node_modules/idb-keyval/dist/index.js
var dist = __webpack_require__(77783);
;// ./src/api/storages/idb.ts



const store = dist/* createStore */.y$(config/* INDEXED_DB_NAME */.vPi, config/* INDEXED_DB_STORE_NAME */.rQT);
/* harmony default export */ const idb = ({
  getItem: name => dist/* get */.Jt(name, store),
  setItem: (name, value) => dist/* set */.hZ(name, value, store),
  removeItem: name => dist/* del */.yH(name, store),
  clear: () => dist/* clear */.IU(store),
  getAll: async () => {
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-type-assertion
    const keys = await dist/* keys */.HP(store);
    const values = await dist/* getMany */.qy(keys, store);
    return (0,iteratees/* fromKeyValueArrays */.rs)(keys, values);
  },
  getMany: async keys => {
    const values = await dist/* getMany */.qy(keys, store);
    return (0,iteratees/* fromKeyValueArrays */.rs)(keys, values);
  },
  setMany: items => {
    return dist/* setMany */._y(Object.entries(items), store);
  }
});
;// ./src/api/storages/localStorage.ts


function withPromise(fn) {
  return function () {
    return Promise.resolve(fn(...arguments));
  };
}
const localStorage_storage = typeof localStorage === 'object' ? {
  getItem: withPromise(localStorage.getItem),
  setItem: withPromise(localStorage.setItem),
  removeItem: withPromise(localStorage.removeItem),
  clear: withPromise(localStorage.clear),
  getAll: withPromise(() => ({
    ...localStorage
  })),
  getMany: withPromise(keys => (0,iteratees/* pick */.Up)(localStorage, keys)),
  setMany: withPromise(items => {
    Object.assign(localStorage, items);
  })
} : {
  getItem(key) {
    return (0,connector/* callWindow */.p)('localStorageGetItem', key);
  },
  setItem(key, value) {
    return (0,connector/* callWindow */.p)('localStorageSetItem', key, value);
  },
  removeItem(key) {
    return (0,connector/* callWindow */.p)('localStorageRemoveItem', key);
  },
  clear() {
    return (0,connector/* callWindow */.p)('localStorageClear');
  },
  getAll() {
    return (0,connector/* callWindow */.p)('localStorageGetAll');
  },
  getMany(keys) {
    return (0,connector/* callWindow */.p)('localStorageGetMany', keys);
  },
  setMany(items) {
    return (0,connector/* callWindow */.p)('localStorageSetMany', items);
  }
};
/* harmony default export */ const storages_localStorage = (localStorage_storage);
;// ./src/api/storages/index.ts






const storages_storage = config/* IS_EXTENSION */.hL1 ? extension : config/* IS_CAPACITOR */.UMQ ? capacitorStorage : idb;
/* harmony default export */ const storages = ({
  [StorageType.IndexedDb]: idb,
  [StorageType.LocalStorage]: storages_localStorage,
  [StorageType.ExtensionLocal]: extension,
  [StorageType.CapacitorStorage]: capacitorStorage
});
;// ./src/api/common/accounts.ts



const MIN_ACCOUNT_NUMBER = 0;
let loginResolve;
const loginPromise = new Promise(resolve => {
  loginResolve = resolve;
});
async function getAccountIds() {
  return Object.keys((await storages_storage.getItem('accounts')) || {});
}
async function getAccountWithMnemonic() {
  const byId = await fetchStoredAccounts();
  return Object.entries(byId).find(_ref => {
    let [, {
      type
    }] = _ref;
    return type !== 'ledger' && type !== 'view';
  });
}
async function getNewAccountId(network, preferredId) {
  const ids = (await getAccountIds()).map(accountId => parseAccountId(accountId).id);
  const id = preferredId !== undefined && !ids.includes(preferredId) ? preferredId : ids.length === 0 ? MIN_ACCOUNT_NUMBER : Math.max(...ids) + 1;
  return buildAccountId({
    id,
    network
  });
}
async function fetchStoredAddress(accountId, chain) {
  return (await fetchStoredChainAccount(accountId, chain)).byChain[chain].address;
}
async function fetchStoredWallet(accountId, chain) {
  return (await fetchStoredChainAccount(accountId, chain)).byChain[chain];
}
function fetchMaybeStoredAccount(accountId) {
  return getAccountValue(accountId, 'accounts');
}
async function fetchStoredAccount(accountId) {
  const account = await fetchMaybeStoredAccount(accountId);
  if (account) return account;
  throw new Error(`Account ${accountId} doesn't exist`);
}
async function fetchStoredChainAccount(accountId, chain) {
  const account = await fetchStoredAccount(accountId);
  if (account.byChain[chain]) return account;
  throw new Error(`${chain} wallet missing in account ${accountId}`);
}
function fetchStoredAccounts() {
  return storages_storage.getItem('accounts');
}
async function updateStoredAccount(accountId, partial) {
  const account = await fetchStoredAccount(accountId);
  return setAccountValue(accountId, 'accounts', {
    ...account,
    ...partial
  });
}
async function updateStoredWallet(accountId, chain, partial) {
  const account = await fetchStoredChainAccount(accountId, chain);
  return updateStoredAccount(accountId, {
    byChain: {
      ...account.byChain,
      [chain]: {
        ...account.byChain[chain],
        ...partial
      }
    }
  });
}
async function getAccountValue(accountId, key) {
  var _await$storage$getIte;
  return (_await$storage$getIte = await storages_storage.getItem(key)) === null || _await$storage$getIte === void 0 ? void 0 : _await$storage$getIte[accountId];
}
async function removeAccountValue(accountId, key) {
  const data = await storages_storage.getItem(key);
  if (!data) return;
  const {
    [accountId]: removedValue,
    ...restData
  } = data;
  await storages_storage.setItem(key, restData);
}
async function setAccountValue(accountId, key, value) {
  const data = await storages_storage.getItem(key);
  await storages_storage.setItem(key, {
    ...data,
    [accountId]: value
  });
}
async function removeNetworkAccountsValue(network, key) {
  const data = await storages_storage.getItem(key);
  if (!data) return;
  for (const accountId of Object.keys(data)) {
    if (parseAccountId(accountId).network === network) {
      delete data[accountId];
    }
  }
  await storages_storage.setItem(key, data);
}
async function getCurrentNetwork() {
  const accountId = await getCurrentAccountId();
  if (!accountId) return undefined;
  return parseAccountId(accountId).network;
}
async function getCurrentAccountIdOrFail() {
  const accountId = await getCurrentAccountId();
  if (!accountId) {
    throw new Error('The user is not authorized in the wallet');
  }
  return accountId;
}
function getCurrentAccountId() {
  return storages_storage.getItem('currentAccountId');
}
function waitLogin() {
  return loginPromise;
}
function getAccountChains(account) {
  return (0,iteratees/* mapValues */.LG)(account.byChain, wallet => ({
    address: wallet.address
  }));
}
function doesAccountHaveChain(account, chain) {
  return !!account.byChain[chain];
}
;// ./src/api/common/mnemonic.ts




const PBKDF2_IMPORT_KEY_ARGS = [{
  name: 'PBKDF2'
}, false, ['deriveBits', 'deriveKey']];
const PBKDF2_DERIVE_KEY_ARGS = {
  name: 'PBKDF2',
  iterations: 100000,
  // Higher is more secure but slower
  hash: 'SHA-256'
};
const PBKDF2_DERIVE_KEY_TYPE = {
  name: 'AES-GCM',
  length: 256
};
function generateBip39Mnemonic() {
  return src/* generateMnemonic */.we(256).split(' ');
}
function validateBip39Mnemonic(mnemonic) {
  return src/* validateMnemonic */.JB(mnemonic.join(' '));
}
async function tryMigratingMnemonicEncryption(accountId, mnemonic, password) {
  const sensitiveData = [password, ...mnemonic];
  try {
    const mnemonicEncrypted = await encryptMnemonic(mnemonic, password);
    sensitiveData.push(mnemonicEncrypted);

    // This is a defensive approach against potential corrupted encryption reported by some users
    const decryptedMnemonic = await decryptMnemonic(mnemonicEncrypted, password).catch(() => undefined);
    if (!password || !decryptedMnemonic) {
      return {
        error: types/* ApiCommonError */.QD.DebugError
      };
    }
    await updateStoredAccount(accountId, {
      mnemonicEncrypted
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryMigratingMnemonicEncryption', removeSensitiveDataFromError(err, sensitiveData));
  }
  return undefined;
}
async function encryptMnemonic(mnemonic, password) {
  const plaintext = mnemonic.join(',');
  const salt = crypto.getRandomValues(new Uint8Array(16)); // generate a 128-bit salt
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), ...PBKDF2_IMPORT_KEY_ARGS);
  const key = await crypto.subtle.deriveKey({
    salt,
    ...PBKDF2_DERIVE_KEY_ARGS
  }, keyMaterial, PBKDF2_DERIVE_KEY_TYPE, false, ['encrypt']);
  const iv = crypto.getRandomValues(new Uint8Array(12)); // get 96-bit random iv
  const ptUint8 = new TextEncoder().encode(plaintext); // encode plaintext as UTF-8
  const ctBuffer = await crypto.subtle.encrypt({
    name: 'AES-GCM',
    iv
  }, key, ptUint8); // encrypt plaintext using key
  const ctArray = Array.from(new Uint8Array(ctBuffer)); // ciphertext as byte array
  const ctBase64 = btoa(String.fromCharCode(...ctArray)); // encode ciphertext as base64
  const ivHex = Array.from(iv).map(b => `00${b.toString(16)}`.slice(-2)).join(''); // iv as hex string
  const saltHex = Array.from(salt).map(b => `00${b.toString(16)}`.slice(-2)).join(''); // salt as hex string

  return `${saltHex}:${ivHex}:${ctBase64}`;
}
async function decryptMnemonic(encrypted, password) {
  if (!encrypted.includes(':')) {
    return decryptMnemonicLegacy(encrypted, password);
  }
  const [saltHex, ivHex, encryptedData] = encrypted.split(':');
  const salt = new Uint8Array(saltHex.match(/.{2}/g).map(b => parseInt(b, 16)));
  const iv = new Uint8Array(ivHex.match(/.{2}/g).map(b => parseInt(b, 16)));
  const keyMaterial = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), ...PBKDF2_IMPORT_KEY_ARGS);
  const key = await crypto.subtle.deriveKey({
    salt,
    ...PBKDF2_DERIVE_KEY_ARGS
  }, keyMaterial, PBKDF2_DERIVE_KEY_TYPE, false, ['decrypt']);
  const ctStr = atob(encryptedData); // decode base64 ciphertext
  const ctUint8 = new Uint8Array(ctStr.match(/[\s\S]/g).map(ch => ch.charCodeAt(0))); // ciphertext as Uint8Array
  const plainBuffer = await crypto.subtle.decrypt({
    name: 'AES-GCM',
    iv
  }, key, ctUint8); // decrypt ciphertext using key
  const plaintext = new TextDecoder().decode(plainBuffer); // decode password from UTF-8

  return plaintext.split(',');
}
async function decryptMnemonicLegacy(encrypted, password) {
  const pwUtf8 = new TextEncoder().encode(password); // encode password as UTF-8
  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8); // hash the password
  const iv = encrypted.slice(0, 24).match(/.{2}/g).map(byte => parseInt(byte, 16)); // get iv from ciphertext
  const alg = {
    name: 'AES-GCM',
    iv: new Uint8Array(iv)
  }; // specify algorithm to use
  const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']); // use pw to generate key
  const ctStr = atob(encrypted.slice(24)); // decode base64 ciphertext
  const ctUint8 = new Uint8Array(ctStr.match(/[\s\S]/g).map(ch => ch.charCodeAt(0))); // ciphertext as Uint8Array
  const plainBuffer = await crypto.subtle.decrypt(alg, key, ctUint8); // decrypt ciphertext using key
  const plaintext = new TextDecoder().decode(plainBuffer); // decode password from UTF-8

  return plaintext.split(',');
}
async function getMnemonic(accountId, password, account) {
  const sensitiveData = [password];
  try {
    const {
      mnemonicEncrypted
    } = account;
    sensitiveData.push(mnemonicEncrypted);
    const mnemonic = await decryptMnemonic(mnemonicEncrypted, password);
    sensitiveData.push(...mnemonic);
    if (!mnemonicEncrypted.includes(':')) {
      await tryMigratingMnemonicEncryption(accountId, mnemonic, password);
    }
    return mnemonic;
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('getMnemonic', removeSensitiveDataFromError(err, sensitiveData));
    return undefined;
  }
}
function removeSensitiveDataFromError(error, sensitiveData) {
  const removeFromString = text => {
    for (const toRemove of sensitiveData) {
      if (toRemove) {
        text = text.replaceAll(toRemove, '(hidden)');
      }
    }
    return text;
  };
  if (typeof error === 'string') {
    return removeFromString(error);
  }
  if (error instanceof Error) {
    var _error$stack;
    const message = removeFromString(error.message);
    return {
      name: error.name,
      message,
      stack: (_error$stack = error.stack) === null || _error$stack === void 0 ? void 0 : _error$stack.replaceAll(error.message, message)
    };
  }
  return error;
}
// EXTERNAL MODULE: ./src/api/common/utils.ts
var utils = __webpack_require__(60341);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var core_dist = __webpack_require__(1307);
// EXTERNAL MODULE: ./src/util/dns.ts
var dns = __webpack_require__(67491);
// EXTERNAL MODULE: ./src/api/chains/ton/util/dns.ts + 1 modules
var util_dns = __webpack_require__(24887);
;// ./src/lib/confusables/util.ts
/* eslint-disable @stylistic/max-len, no-misleading-character-class, no-control-regex, @stylistic/operator-linebreak */
/** @copyright Mathias Bynens <https://mathiasbynens.be/>. MIT license. */
const RE_SYMBOL_WITH_COMBINING_MARKS = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
/** @copyright Mathias Bynens <https://mathiasbynens.be/>. MIT license. */
const RE_LINEBREAK_COMBINING_MARKS = /[\0-\x08\x0E-\x1F\x7F-\x84\x86-\x9F\u0300-\u034E\u0350-\u035B\u0363-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u061C\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u200C\u200E\u200F\u202A-\u202E\u2066-\u206F\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3035\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFFF9-\uFFFB]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD804[\uDC00-\uDC02\uDC38-\uDC46\uDC7F-\uDC82\uDCB0-\uDCBA\uDD00-\uDD02\uDD27-\uDD34\uDD73\uDD80-\uDD82\uDDB3-\uDDC0\uDDCA-\uDDCC\uDE2C-\uDE37\uDE3E\uDEDF-\uDEEA\uDF00-\uDF03\uDF3C\uDF3E-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF57\uDF62\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC35-\uDC46\uDCB0-\uDCC3\uDDAF-\uDDB5\uDDB8-\uDDC0\uDDDC\uDDDD\uDE30-\uDE40\uDEAB-\uDEB7]|\uD807[\uDC2F-\uDC36\uDC38-\uDC3F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF51-\uDF7E\uDF8F-\uDF92]|\uD82F[\uDC9D\uDC9E\uDCA0-\uDCA3]|\uD834[\uDD65-\uDD69\uDD6D-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uDB40[\uDC01\uDC20-\uDC7F\uDD00-\uDDEF]/g;
const RE_SPACE_CHARS = /[\n\r]/g;
const RE_FAKE_DOTS = /[\u0702\u0701\u2024\u00B7\u02D9\u0971\u1427\u18DF\u22C5\u2027]/g;
const RE_EMPTY_CHARS = /[\u200B-\u200D\uFEFF\u2063]/g;
/* eslint-enable @stylistic/max-len, no-misleading-character-class, no-control-regex, @stylistic/operator-linebreak */

/** Skippable characters that are not confusables */
const checkLNPRegex = /^(?:[~`!@#%^&*(){}[\];:"'<,.>?/\\|_+=-]|[a-zA-Z0-9\s])+$/;
function checkLNP(str) {
  return checkLNPRegex.test(str);
}

/**
 * Utility function to call 2 other functions which remove Combining Marks/Invisible characters
 * @param str The text to clean.
 */
function clean(str) {
  return str.replace(RE_LINEBREAK_COMBINING_MARKS, '').replace(RE_SYMBOL_WITH_COMBINING_MARKS, '$1').replace(RE_SPACE_CHARS, ' ').replace(RE_FAKE_DOTS, '.').replace(RE_EMPTY_CHARS, '');
}
;// ./src/lib/confusables/characters.ts
const characters = new Map([[' ', ' '], ['0', '⓿'], ['1', '11⓵➊⑴¹𝟏𝟙１𝟷𝟣⒈𝟭1➀₁①❶⥠'], ['2', '⓶⒉⑵➋ƻ²ᒿ𝟚２𝟮𝟤ᒾ𝟸Ƨ𝟐②ᴤ₂➁❷ᘝƨ'], ['3', '³ȝჳⳌꞫ𝟑ℨ𝟛𝟯𝟥Ꝫ➌ЗȜ⓷ӠƷ３𝟹⑶⒊ʒʓǯǮƺ𝕴ᶾзᦡ➂③₃ᶚᴣᴟ❸ҘҙӬӡӭӟӞ'], ['4', '𝟰𝟺𝟦𝟒➍ҶᏎ𝟜ҷ⓸ҸҹӴӵᶣ４чㄩ⁴➃₄④❹Ӌ⑷⒋'], ['5', '𝟱⓹➎Ƽ𝟓𝟻𝟝𝟧５➄₅⑤⁵❺ƽ⑸⒌'], ['6', 'Ⳓ🄇𝟼Ꮾ𝟲𝟞𝟨𝟔➏⓺Ϭϭ⁶б６ᧈ⑥➅₆❻⑹⒍'], ['7', '𝟕𝟟𝟩𝟳𝟽🄈⓻𐓒➐７⁷⑦₇❼➆⑺⒎'], ['8', '𐌚🄉➑⓼８𝟠𝟪৪⁸₈𝟴➇⑧❽𝟾𝟖⑻⒏'], ['9', '൭Ꝯ𝝑𝞋𝟅🄊𝟡𝟵Ⳋ⓽➒੧৭୨９𝟫𝟿𝟗⁹₉Գ➈⑨❾⑼⒐'], ['10', '⓾❿➉➓🔟⑩⑽⒑'], ['11', '⑪⑾⒒⓫'], ['12', '⑫⑿⒓⓬'], ['13', '⑬⒀⒔⓭'], ['14', '⑭⒁⒕⓮'], ['15', '⑮⒂⒖⓯'], ['16', '⑯⒃⒗⓰'], ['17', '⑰⒄⒘⓱'], ['18', '⑱⒅⒙⓲'], ['19', '⑲⒆⒚⓳'], ['20', '⑳⒇⒛⓴'], ['ae', 'æ'], ['OE', 'Œ'], ['oe', 'œ'], ['pi', 'ᒆ'], ['Nj', 'ǋ'], ['AE', 'ᴁ'], ['A', '𝑨𝔄ᗄ𝖠𝗔ꓯ𝞐🄐🄰Ꭿ𐊠𝕬𝜜𝐴ꓮᎪ𝚨ꭺ𝝖🅐Å∀🇦₳🅰𝒜𝘈𝐀𝔸дǺᗅⒶＡΑᾋᗩĂÃÅǍȀȂĀȺĄʌΛλƛᴀᴬДАልÄₐᕱªǞӒΆẠẢẦẨẬẮẰẲẴẶᾸᾹᾺΆᾼᾈᾉᾊᾌᾍᾎᾏἈἉἊἋἌἍἎἏḀȦǠӐÀÁÂẤẪ𝛢𝓐𝙰𝘼ᗩ'], ['a', '∂⍺ⓐձǟᵃᶏ⒜аɒａαȃȁคǎმäɑāɐąᾄẚạảǡầẵḁȧӑӓãåάὰάăẩằẳặᾀᾁᾂᾃᾅᾆᾰᾱᾲᾳᾴᶐᾶᾷἀἁἂἃἄἅἆἇᾇậắàáâấẫǻⱥ𝐚𝑎𝒂𝒶𝓪𝔞𝕒𝖆𝖺𝗮𝘢𝙖𝚊𝛂𝛼𝜶𝝰𝞪⍶'], ['B', '🄑𝔙𝖁ꞵ𝛃𝛽𝜷𝝱𝞫Ᏸ𐌁𝑩𝕭🄱𐊡𝖡𝘽ꓐ𝗕𝘉𝜝𐊂𝚩𝐁𝛣𝝗𝐵𝙱𝔹Ᏼᏼ𝞑Ꞵ𝔅🅑฿𝓑ᗿᗾᗽ🅱ⒷＢвϐᗷƁ乃ßცჩ๖βɮБՅ๒ᙖʙᴮᵇጌḄℬΒВẞḂḆɃദᗹᗸᵝᙞᙟᙝᛒᙗᙘᴃ🇧'], ['b', 'ꮟᏏ𝐛𝘣𝒷𝔟𝓫𝖇𝖻𝑏𝙗𝕓𝒃𝗯𝚋♭ᑳᒈｂᖚᕹᕺⓑḃḅҍъḇƃɓƅᖯƄЬᑲþƂ⒝ЪᶀᑿᒀᒂᒁᑾьƀҌѢѣᔎ'], ['C', 'ꞆႠ℃🄒ᏟⲤ🄲ꓚ𐊢𐌂🅲𐐕🅒☾ČÇⒸＣↃƇᑕㄈ¢८↻ĈϾՇȻᙅᶜ⒞ĆҀĊ©टƆℂℭϹС匚ḈҪʗᑖᑡᑢᑣᑤᑥⅭ𝐂𝐶𝑪𝒞𝓒𝕮𝖢𝗖𝘊𝘾ᔍ'], ['c', '🝌ｃⅽ𝐜𝑐𝒄𝒸𝓬𝔠𝕔𝖈𝖼𝗰𝘤𝙘𝚌ᴄϲⲥсꮯ𐐽ⲥ𐐽ꮯĉｃⓒćčċçҁƈḉȼↄсርᴄϲҫ꒝ςɽϛ𝙲ᑦ᧚𝐜𝑐𝒄𝒸𝓬𝔠𝕔𝖈𝖼𝗰𝘤𝙘𝚌₵🇨ᥴᒼⅽ'], ['D', '🄓Ꭰ🄳𝔡𝖉𝔻𝗗𝘋𝙳𝐷𝓓𝐃𝑫𝕯𝖣𝔇𝘿ꭰⅅ𝒟ꓓ🅳🅓ⒹＤƉᗪƊÐԺᴅᴰↁḊĐÞⅮᗞᑯĎḌḐḒḎᗫᗬᗟᗠᶛᴆ🇩'], ['d', 'Ꮷ𝔡𝖉ᑯꓒ𝓭ᵭ₫ԃⓓｄḋďḍḑḓḏđƌɖɗᵈ⒟ԁⅾᶁԀᑺᑻᑼᑽᒄᑰᑱᶑ𝕕𝖽𝑑𝘥𝒅𝙙𝐝𝗱𝚍ⅆ𝒹ʠժ'], ['E', '£ᙓ⋿∃ⴺꓱ𝐄𝐸𝔈𝕰𝖤𝘌𝙴𝛦𝜠ꭼ🄔🄴𝙀𝔼𐊆𝚬ꓰ𝝚𝞔𝓔𝑬𝗘🅴🅔ⒺΈＥƎἝᕮƐモЄᴇᴱᵉÉ乇ЁɆꂅ€ÈℰΕЕⴹᎬĒĔĖĘĚÊËԐỀẾỄỂẼḔḖẺȄȆẸỆȨḜḘḚἘἙἚἛἜῈΈӖὲέЀϵ🇪'], ['e', 'əәⅇꬲꞓ⋴𝛆𝛜𝜀𝜖𝜺𝝐𝝴𝞊𝞮𝟄ⲉꮛ𐐩ꞒⲈ⍷𝑒𝓮𝕖𝖊𝘦𝗲𝚎𝙚𝒆𝔢𝖾𝐞Ҿҿⓔｅ⒠èᧉéᶒêɘἔềếễ૯ǝєεēҽɛểẽḕḗĕėëẻěȅȇẹệȩɇₑęḝḙḛ℮еԑѐӗᥱёἐἑἒἓἕℯ'], ['F', 'ᖵꘘꓞꟻᖷ𝐅𝐹𝑭𝔽𝕱𝖥𝗙𝙁𝙵𝟊℉🄕🄵𐊇𝔉𝘍𐊥ꓝꞘ🅵🅕𝓕ⒻＦғҒᖴƑԲϝቻḞℱϜ₣🇫Ⅎ'], ['f', '𝐟ᵮ𝑓𝒇𝒻𝓯𝔣𝕗𝖿𝗳𝙛𝚏ꬵꞙẝ𝖋ⓕｆƒḟʃբᶠ⒡ſꊰʄ∱ᶂ𝘧'], ['G', '𝗚𝘎🄖ꓖᏳ🄶Ꮐᏻ𝔾𝓖𝑮𝕲ꮐ𝒢𝙂𝖦𝙶𝔊𝐺𝐆🅶🅖ⒼＧɢƓʛĢᘜᴳǴĠԌĜḠĞǦǤԍ₲🇬⅁'], ['g', 'ᶃᶢⓖｇǵĝḡğġǧģց૭ǥɠﻭﻮᵍ⒢ℊɡᧁ𝐠𝑔𝒈𝓰𝔤𝕘𝖌𝗀𝗴𝘨𝙜𝚐'], ['H', 'Ἤ🄗𝆦🄷𝜢ꓧ𝘏𝐻𝝜𝖧𐋏𝗛ꮋℍᎻℌⲎ𝑯𝞖🅷🅗ዞǶԋⒽＨĤᚺḢḦȞḤḨḪĦⱧҢңҤῊΉῌἨἩἪἫἭἮἯᾘᾙᾚᾛᾜᾝᾞᾟӉӈҥΉн卄♓𝓗ℋН𝐇𝙃𝙷ʜ𝛨Η𝚮ᕼӇᴴᵸ🇭'], ['h', 'ꞕ৸𝕳ꚕᏲℏӊԊꜧᏂҺ⒣ђⓗｈĥḣḧȟḥḩḫẖħⱨհһከኩኪካɦℎ𝐡𝒉𝒽𝓱𝔥𝕙𝖍𝗁𝗵𝘩𝙝𝚑իʰᑋᗁɧんɥ'], ['I', 'ⲒἿ🄘🄸ЇꀤᏆ🅸🅘إﺇٳأﺃٲٵⒾＩ៸ÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗェエῘῙῚΊἸἹἺἻἼἽἾⅠΪΊɪᶦᑊᥣ𝛪𝐈𝙄𝙸𝓵𝙡𝐼ᴵ𝚰𝑰🇮'], ['i', '⍳ℹⅈ𝑖𝒊𝒾ı𝚤ɩιιͺ𝛊𝜄𝜾𝞲ꙇӏꭵᎥⓘｉìíîĩīĭïḯỉǐȉȋịḭῐῑῒΐῖῗἰἱἲⅰⅼ∣ⵏ￨׀ا١۱ߊᛁἳἴἵɨіὶίᶖ𝔦𝚒𝝸𝗂𝐢𝕚𝖎𝗶𝘪𝙞ίⁱᵢ𝓲⒤'], ['J', '𝐉𝐽𝑱𝒥𝓙𝔍𝕁𝕵𝖩𝗝𝘑𝙅𝙹ꞲͿꓙ🄙🄹🅹🅙ⒿＪЈʝᒍנﾌĴʆวلյʖᴊᴶﻝጋɈⱼՂๅႱįᎫȷ丿ℐℑᒘᒙᒚᒛᒴᒵᒎᒏ🇯'], ['j', '𝚥ꭻⅉⓙｊϳʲ⒥ɉĵǰјڶᶨ𝒿𝘫𝗷𝑗𝙟𝔧𝒋𝗃𝓳𝕛𝚓𝖏𝐣'], ['K', '𝐊ꝄꝀ𝐾𝑲𝓚𝕶𝖪𝙺𝚱𝝟🄚𝗞🄺𝜥𝘒ꓗ𝙆𝕂Ⲕ𝔎𝛫Ꮶ𝞙𝒦🅺🅚₭ⓀＫĸḰќƘкҠκқҟӄʞҚКҡᴋᴷᵏ⒦ᛕЌጕḲΚKҜҝҞĶḴǨⱩϗӃ🇰'], ['k', 'ⓚꝁｋḱǩḳķḵƙⱪᶄ𝐤𝘬𝗄𝕜𝜅𝜘𝜿𝝒𝝹𝞌𝞳𝙠𝚔𝑘𝒌ϰ𝛋𝛞𝟆𝗸𝓴𝓀'], ['L', '𝐋𝐿𝔏𝕃𝕷𝖫𝗟𝘓𝙇ﴼ🄛🄻𐐛Ⳑ𝑳𝙻𐑃𝓛ⳑꮮᏞꓡ🅻🅛ﺈ└ⓁւＬĿᒪ乚ՆʟꓶιԼᴸˡĹረḶₗΓլĻᄂⅬℒⱢᥧᥨᒻᒶᒷᶫﺎᒺᒹᒸᒫ⎳ㄥŁⱠﺄȽ🇱'], ['l', 'ⓛｌŀĺľḷḹļӀℓḽḻłﾚɭƚɫⱡ|Ɩ⒧ʅǀוןΙІ｜ᶩӏ𝓘𝕀𝖨𝗜𝘐𝐥𝑙𝒍𝓁𝔩𝕝𝖑𝗅𝗹𝘭𝚕𝜤𝝞ı𝚤ɩι𝛊𝜄𝜾𝞲'], ['M', 'ꮇ🄜🄼𐌑𐊰ꓟⲘᎷ🅼🅜ⓂＭмṂ൱ᗰ州ᘻო๓♏ʍᙏᴍᴹᵐ⒨ḾМṀ௱ⅯℳΜϺᛖӍӎ𝐌𝑀𝑴𝓜𝔐𝕄𝕸𝖬𝗠𝘔𝙈𝙼𝚳𝛭𝜧𝝡𝞛🇲'], ['m', '₥ᵯ𝖒𝐦𝗆𝔪𝕞𝓂ⓜｍനᙢ൩ḿṁⅿϻṃጠɱ៳ᶆ𝙢𝓶𝚖𝑚𝗺᧕᧗'], ['N', '𝇙𝇚𝇜🄝𝆧𝙉🄽ℕꓠ𝛮𝝢𝙽𝚴𝑵𝑁Ⲛ𝐍𝒩𝞜𝗡𝘕𝜨𝓝𝖭🅽₦🅝ЙЍⓃҋ៷ＮᴎɴƝᑎ几иՈռИהЛπᴺᶰŃ刀ክṄⁿÑПΝᴨոϖǸŇṆŅṊṈทŊӢӣӤӥћѝйᥢҊᴻ🇳'], ['n', 'ոռח𝒏𝓷𝙣𝑛𝖓𝔫𝗇𝚗𝗻ᥒⓝήｎǹᴒńñᾗηṅňṇɲņṋṉղຖՌƞŋ⒩ภกɳпŉлԉȠἠἡῃդᾐᾑᾒᾓᾔᾕᾖῄῆῇῂἢἣἤἥἦἧὴήበቡቢባቤብቦȵ𝛈𝜂𝜼𝝶𝞰𝕟𝘯𝐧𝓃ᶇᵰᥥ∩'], ['O',
// eslint-disable-next-line @stylistic/max-len
'𝜽⭘🔿ꭴ⭕⏺🄁🄀Ꭴ𝚯𝚹𝛩𝛳𝜣𝜭𝝝𝝧𝞗𝞡ⴱᎾᏫ⍬𝞱𝝷𝛉𝟎𝜃θ𝟘𝑂𝑶𝓞𝔒𝕆𝕺𝗢𝘖𝙊𝛰㈇ꄲ🄞🔾🄾𐊒𝟬ꓳⲞ𐐄𐊫𐓂𝞞🅞⍥◯ⵁ⊖０⊝𝝤Ѳϴ𝚶𝜪ѺӦӨӪΌʘ𝐎ǑÒŎÓÔÕȌȎㇿ❍ⓄＯὋロ❤૦⊕ØФԾΘƠᴼᵒ⒪ŐÖₒ¤◊Φ〇ΟОՕଠഠ௦סỒỐỖỔṌȬṎŌṐṒȮȰȪỎỜỚỠỞỢỌỘǪǬǾƟⵔ߀៰⍜⎔⎕⦰⦱⦲⦳⦴⦵⦶⦷⦸⦹⦺⦻⦼⦽⦾⦿⧀⧁⧂⧃ὈὉὊὌὍ'], ['o',
// eslint-disable-next-line @stylistic/max-len
'ంಂംං૦௦۵ℴ𝑜𝒐𝖔ꬽ𝝄𝛔𝜎𝝈𝞂ჿ𝚘০୦ዐ𝛐𝗈𝞼ဝⲟ𝙤၀𐐬𝔬𐓪𝓸🇴⍤○ϙ🅾𝒪𝖮𝟢𝟶𝙾𝘰𝗼𝕠𝜊𝐨𝝾𝞸ᐤⓞѳ᧐ᥲðｏఠᦞՓòөӧóºōôǒȏŏồốȍỗổõσṍȭṏὄṑṓȯȫ๏ᴏőöѻоዐǭȱ০୦٥౦೦൦๐໐οօᴑ०੦ỏơờớỡởợọộǫøǿɵծὀὁόὸόὂὃὅ'], ['P', '🄟🄿ꓑ𝚸𝙿𝞠𝙋ꮲⲢ𝒫𝝦𝑃𝑷𝗣𝐏𐊕𝜬𝘗𝓟𝖯𝛲Ꮲ🅟Ҏ🅿ⓅＰƤᑭ尸Ṗրφքᴘᴾᵖ⒫ṔｱקРየᴩⱣℙΡῬᑸᑶᑷᑹᑬᑮ🇵₱'], ['p', 'ⲣҏ℗ⓟｐṕṗƥᵽῥρрƿǷῤ⍴𝓹𝓅𝐩𝑝𝒑𝔭𝕡𝖕𝗉𝗽𝘱𝙥𝚙𝛒𝝆𝞺𝜌𝞀'], ['Q', '🅀🄠Ꝗ🆀🅠ⓆＱℚⵕԚ𝐐𝑄𝑸𝒬𝓠𝚀𝘘𝙌𝖰𝕼𝔔𝗤🇶'], ['q', '𝓆ꝗ𝗾ⓠｑգ⒬۹զᑫɋɊԛ𝗊𝑞𝘲𝕢𝚚𝒒𝖖𝐪𝔮𝓺𝙦'], ['R', '℞🄡℟ꭱᏒ𐒴ꮢᎡꓣ🆁🅡ⓇＲᴙȒʀᖇя尺ŔЯરƦᴿዪṚɌʁℛℜℝṘŘȐṜŖṞⱤ𝐑𝑅𝑹𝓡𝕽𝖱𝗥𝘙𝙍𝚁ᚱ🇷ᴚ'], ['r', '𝚛ꭇᣴℾ𝚪𝛤𝜞𝝘𝞒ⲄГᎱᒥꭈⲅꮁⓡｒŕṙřȑȓṛṝŗгՐɾᥬṟɍʳ⒭ɼѓᴦᶉ𝐫𝑟𝒓𝓇𝓻𝔯𝕣𝖗𝗋𝗿𝘳𝙧ᵲґᵣ'], ['S', '🅂🄪🄢ꇙ𝓢𝗦Ꮪ𝒮Ꮥ𝚂𝐒ꓢ𝖲𝔖𝙎𐊖𝕾𐐠𝘚𝕊𝑆𝑺🆂🅢ⓈＳṨŞֆՏȘˢ⒮ЅṠŠŚṤŜṦṢടᔕᔖᔢᔡᔣᔤ'], ['s', 'ᣵⓢꜱ𐑈ꮪｓśṥŝṡšṧʂṣṩѕşșȿᶊక𝐬𝑠𝒔𝓈𝓼𝔰𝕤𝖘𝗌𝘀𝘴𝙨𝚜ގ🇸'], ['T', '🅃🄣七ፒ𝜯🆃𐌕𝚻𝛵𝕋𝕿𝑻𐊱𐊗𝖳𝙏🝨𝝩𝞣𝚃𝘛𝑇ꓔ⟙𝐓Ⲧ𝗧⊤𝔗Ꭲꭲ𝒯🅣⏇⏉ⓉＴтҬҭƬイŦԵτᴛᵀｲፕϮŤ⊥ƮΤТ下ṪṬȚŢṰṮ丅丁ᐪ𝛕𝜏𝝉𝞃𝞽𝓣ㄒ🇹ጥ'], ['t', 'ⓣｔṫẗťṭțȶ੮էʇ†ţṱṯƭŧᵗ⒯ʈեƫ𝐭𝑡𝒕𝓉𝓽𝔱𝕥𝖙𝗍𝘁𝘵𝙩𝚝ナ'], ['U', '🅄Џ🄤ሀꓴ𐓎꒤🆄🅤ŨŬŮᑗᑘǓǕǗǙⓊＵȖᑌ凵ƱմԱꓵЦŪՄƲᙀᵁᵘ⒰ŰપÜՍÙÚÛṸṺǛỦȔƯỪỨỮỬỰỤṲŲṶṴɄᥩᑧ∪ᘮ⋃𝐔𝑈𝑼𝒰𝓤𝔘𝕌𝖀𝖴𝗨𝘜𝙐𝚄🇺'], ['u', '𝘂𝘶𝙪𝚞ꞟꭎꭒ𝛖𝜐𝝊𝞄𝞾𐓶ὺύⓤｕùũūừṷṹŭǖữᥙǚǜὗυΰนսʊǘǔúůᴜűųยûṻцሁüᵾᵤµʋủȕȗưứửựụṳṵʉῠῡῢΰῦῧὐὑϋύὒὓὔὕὖᥔ𝐮𝑢𝒖𝓊𝓾𝔲𝕦𝖚𝗎ᶙ'], ['V', '𝑉𝒱𝕍𝗩🄥🅅ꓦ𝑽𝖵𝘝Ꮩ𝚅𝙑𝐕🆅🅥ⓋＶᐯѴᵛ⒱۷ṾⅴⅤṼ٧ⴸѶᐺᐻ🇻𝓥'], ['v', '∨⌄⋁ⅴ𝐯𝑣𝒗𝓋𝔳𝕧𝖛𝗏ꮩሀⓥｖ𝜐𝝊ṽṿ౮งѵעᴠνטᵥѷ៴ᘁ𝙫𝚟𝛎𝜈𝝂𝝼𝞶𝘷𝘃𝓿'], ['W', '𝐖𝑊𝓦𝔚𝕎𝖂𝖶𝗪𝙒𝚆🄦🅆ᏔᎳ𝑾ꓪ𝒲𝘞🆆Ⓦ🅦ｗＷẂᾧᗯᥕ山ѠຟచաЩШώщฬшᙎᵂʷ⒲ฝሠẄԜẀŴẆẈധᘺѿᙡƜ₩🇼'], ['w', '𝐰ꝡ𝑤𝒘𝓌𝔀𝔴𝕨𝖜𝗐𝘄𝘸𝙬𝚠աẁꮃẃⓦ⍵ŵẇẅẘẉⱳὼὠὡὢὣωὤὥὦὧῲῳῴῶῷⱲѡԝᴡώᾠᾡᾢᾣᾤᾥᾦɯ𝝕𝟉𝞏'], ['X', 'ꭓꭕ𝛘𝜒𝝌𝞆𝟀ⲭ🞨𝑿𝛸🄧🞩🞪🅇🞫🞬𐌗Ⲭꓫ𝖃𝞦𝘟𐊐𝚾𝝬𝜲Ꭓ𐌢𝖷𝑋𝕏𝔛𐊴𝗫🆇🅧❌Ⓧ𝓧ＸẊ᙭χㄨ𝒳ӾჯӼҳЖΧҲᵡˣ⒳אሸẌꊼⅩХ╳᙮ᕁᕽⅹᚷⵝ𝙓𝚇乂𝐗🇽'], ['x', '᙮ⅹ𝑥𝒙𝓍𝔵𝕩𝖝𝗑𝘅ᕁᕽⓧｘхẋ×ₓ⤫⤬⨯ẍᶍ𝙭ӽ𝘹𝐱𝚡⨰ﾒ𝔁'], ['Y', '𝒴🄨𝓨𝔜𝖄𝖸𝘠𝙔𝚼𝛶𝝪𝞤УᎩᎽⲨ𝚈𝑌𝗬𝐘ꓬ𝒀𝜰𐊲🆈🅨ⓎＹὛƳㄚʏ⅄ϔ￥¥ՎϓγץӲЧЎሃŸɎϤΥϒҮỲÝŶỸȲẎỶỴῨῩῪΎὙὝὟΫΎӮӰҰұ𝕐🇾'], ['y', '𝐲𝑦𝒚𝓎𝔂𝔶𝕪𝖞𝗒𝘆𝘺𝙮𝚢ʏỿꭚγℽ𝛄𝛾𝜸𝝲𝞬🅈ᎽᎩⓨｙỳýŷỹȳẏÿỷуყẙỵƴɏᵞɣʸᶌү⒴ӳӱӯўУʎ'], ['Z', '🄩🅉ꓜ𝗭𝐙☡Ꮓ𝘡🆉🅩ⓏＺẔƵ乙ẐȤᶻ⒵ŹℤΖŻŽẒⱫ🇿'], ['z', '𝑍𝒁𝒵𝓩𝖹𝙕𝚉𝚭𝛧𝜡𝝛𝞕ᵶꮓ𝐳𝑧𝒛𝓏𝔃𝔷𝕫𝖟𝗓𝘇𝘻𝙯𝚣ⓩｚźẑżžẓẕƶȥɀᴢጊʐⱬᶎʑᙆ']]);
;// ./src/lib/confusables/index.ts
// Original repo: https://github.com/gc/confusables



const alphabetMap = new Map();
const confusablesMap = new Map();
for (const [base, alts] of characters.entries()) {
  alphabetMap.set(base, [...alts]);
  for (const char of alts) {
    confusablesMap.set(char, base);
  }
}
function cleanText(str) {
  if (checkLNP(str)) return str;
  let newStr = '';
  for (const char of clean(str)) {
    newStr += confusablesMap.get(char) || char;
  }
  return newStr;
}
// EXTERNAL MODULE: ./src/util/Deferred.ts
var Deferred = __webpack_require__(9705);
// EXTERNAL MODULE: ./src/util/fetch.ts
var util_fetch = __webpack_require__(45232);
;// ./src/api/common/backend.ts



const BAD_REQUEST_CODE = 400;
async function callBackendPost(path, data, options) {
  const {
    authToken,
    isAllowBadRequest,
    method,
    shouldRetry,
    retries,
    timeouts
  } = options ?? {};
  const url = new URL(`${config/* BRILLIANT_API_BASE_URL */.HUv}${path}`);
  const init = {
    method: method ?? 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...getBackendHeaders(),
      ...(authToken && {
        'X-Auth-Token': authToken
      })
    },
    body: JSON.stringify(data)
  };
  const response = shouldRetry ? await (0,util_fetch/* fetchWithRetry */.J5)(url, init, {
    retries,
    timeouts,
    shouldSkipRetryFn: message => !(message !== null && message !== void 0 && message.includes('signal is aborted'))
  }) : await fetch(url.toString(), init);
  await (0,util_fetch/* handleFetchErrors */.EQ)(response, isAllowBadRequest ? [BAD_REQUEST_CODE] : undefined);
  return response.json();
}
function callBackendGet(path, data, headers) {
  const url = new URL(`${config/* BRILLIANT_API_BASE_URL */.HUv}${path}`);
  return (0,util_fetch/* fetchJson */.x6)(url, data, {
    headers: {
      ...headers,
      ...getBackendHeaders()
    }
  });
}
function getBackendHeaders() {
  return {
    ...(0,api_environment/* getEnvironment */.u)().apiHeaders,
    'X-App-Version': config/* APP_VERSION */.hl5,
    'X-App-Env': config/* APP_ENV */.Guj
  };
}
function addBackendHeadersToSocketUrl(url) {
  for (const [name, value] of Object.entries(getBackendHeaders())) {
    const match = /^X-App-(.+)$/i.exec(name);
    if (match) {
      url.searchParams.append(match[1].toLowerCase(), value);
    }
  }
}
async function fetchBackendReferrer() {
  return (await callBackendGet('/referrer/get')).referrer;
}
;// ./src/api/common/addresses.ts





let knownAddresses = {};
let scamMarkers = [];
let trustedSites = new Set();
let trustedCollections = new Set();
let tonNftSuperCollectionsByCollectionAddress = {};
const nftSuperCollectionsDeferred = new Deferred/* default */.A();
async function tryUpdateKnownAddresses() {
  try {
    const data = await callBackendGet('/known-addresses');
    knownAddresses = data.knownAddresses;
    scamMarkers = data.scamMarkers.map(x => new RegExp(x, 'i'));
    trustedSites = new Set(data.trustedSites);
    trustedCollections = new Set(data.trustedCollections);
    tonNftSuperCollectionsByCollectionAddress = data.tonNftSuperCollections.reduce((acc, superCollection) => {
      const {
        collections,
        ...rest
      } = superCollection;
      collections.forEach(address => {
        acc[address] = rest;
      });
      return acc;
    }, {});
    nftSuperCollectionsDeferred.resolve();
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryUpdateKnownAddresses', err);
  }
}
function getKnownAddresses() {
  return knownAddresses;
}
async function getNftSuperCollectionsByCollectionAddress() {
  await nftSuperCollectionsDeferred.promise;
  return tonNftSuperCollectionsByCollectionAddress;
}
function getScamMarkers() {
  return scamMarkers;
}
function getKnownAddressInfo(address) {
  return knownAddresses[address];
}
function checkIsTrustedSite(domain) {
  return trustedSites.has(domain.toLowerCase());
}
function checkIsTrustedCollection(address) {
  return trustedCollections.has(address);
}
function checkHasScamLink(text) {
  const matches = cleanText(text).matchAll(config/* RE_LINK_TEMPLATE */.kNZ);
  for (const match of matches) {
    var _match$groups;
    const host = (_match$groups = match.groups) === null || _match$groups === void 0 ? void 0 : _match$groups.host;
    if (host && !checkIsTrustedSite(host)) {
      return true;
    }
  }
  return false;
}
function checkHasTelegramBotMention(text) {
  return config/* RE_TG_BOT_MENTION */.rcB.test(cleanText(text));
}
// EXTERNAL MODULE: ./src/api/chains/ton/constants.ts
var constants = __webpack_require__(3476);
;// ./src/util/poisoningHash.ts



const poisoningHash_cache = new Map();
function getKey(address) {
  return shortenAddress(address, TRANSACTION_ADDRESS_SHIFT);
}
function addToCache(address, amount, timestamp) {
  const key = getKey(address);
  poisoningHash_cache.set(key, {
    address,
    amount,
    timestamp
  });
}
function getFromCache(address) {
  const key = getKey(address);
  return poisoningHash_cache.get(key);
}
function updatePoisoningCache(tx) {
  const {
    fromAddress,
    toAddress,
    isIncoming,
    amount,
    timestamp
  } = tx;
  const address = isIncoming ? fromAddress : toAddress;
  const cached = getFromCache(address);
  if (!cached || cached.timestamp > timestamp || cached.timestamp === timestamp && cached.amount < amount) {
    addToCache(address, amount, timestamp);
  }
}
function updatePoisoningCacheFromActivities(activities) {
  activities.forEach(activity => {
    if (activity.kind === 'transaction' && !getIsActivityPendingForUser(activity)) {
      updatePoisoningCache(activity);
    }
  });
}
function updatePoisoningCacheFromGlobalState(global) {
  const {
    currentAccountId,
    byAccountId
  } = global;

  // Since the `global` can be restored from the cache, it may not contain data for the current account
  if (!currentAccountId || !byAccountId[currentAccountId]) return;
  const {
    byId,
    newestActivitiesBySlug
  } = byAccountId[currentAccountId].activities || {};
  if (byId) {
    updatePoisoningCacheFromActivities(Object.values(byId));
  }
  if (newestActivitiesBySlug) {
    updatePoisoningCacheFromActivities(Object.values(newestActivitiesBySlug));
  }
}
function poisoningHash_getIsTransactionWithPoisoning(tx) {
  const {
    fromAddress: address
  } = tx;
  const cached = getFromCache(address);
  return cached && cached.address !== address;
}
function clearPoisoningCache() {
  poisoningHash_cache.clear();
}
;// ./src/util/chain.ts

function chain_getChainConfig(chain) {
  return config/* CHAIN_CONFIG */.zll[chain];
}
function findChainConfig(chain) {
  return chain in CHAIN_CONFIG ? CHAIN_CONFIG[chain] : undefined;
}
;// ./src/util/tokens.ts



const chainByNativeSlug = Object.fromEntries(Object.entries(config/* CHAIN_CONFIG */.zll).map(_ref => {
  let [chain, {
    nativeToken
  }] = _ref;
  return [nativeToken.slug, chain];
}));
function tokens_getIsNativeToken(slug) {
  return slug ? slug in chainByNativeSlug : false;
}
function getIsTonToken(slug, withNative) {
  return Boolean(slug.startsWith('ton-') || withNative && slug === TONCOIN.slug);
}
function getNativeToken(chain) {
  return getChainConfig(chain).nativeToken;
}
function getChainBySlug(slug) {
  const items = slug.split('-');
  return items.length > 1 ? items[0] : chainByNativeSlug[slug];
}
function getIsServiceToken(token) {
  const {
    type,
    codeHash = '',
    slug = ''
  } = token ?? {};
  return type === 'lp_token' || STAKED_TOKEN_SLUGS.has(slug) || PRICELESS_TOKEN_HASHES.has(codeHash);
}
function buildUserToken(token) {
  return {
    ...pick(token, ['symbol', 'slug', 'name', 'image', 'decimals', 'keywords', 'chain', 'tokenAddress', 'type']),
    amount: 0n,
    totalValue: '0',
    price: 0,
    priceUsd: 0,
    change24h: 0
  };
}
;// ./src/util/activities/index.ts




const TRANSACTION_TYPE_TITLES = {
  stake: ['Staked', 'Staking', '$stake_action'],
  unstake: ['Unstaked', 'Unstaking', '$unstake_action'],
  unstakeRequest: ['Requested Unstake', 'Requesting Unstake', '$request_unstake_action'],
  callContract: ['Called Contract', 'Calling Contract', '$call_contract_action'],
  excess: ['Excess', 'Excess', 'Excess'],
  contractDeploy: ['Deployed Contract', 'Deploying Contract', '$deploy_contract_action'],
  bounced: ['Bounced', 'Bouncing', '$bounce_action'],
  mint: ['Minted', 'Minting', '$mint_action'],
  burn: ['Burned', 'Burning', '$burn_action'],
  auctionBid: ['NFT Auction Bid', 'Bidding at NFT Auction', 'NFT Auction Bid '],
  dnsChangeAddress: ['Updated Address', 'Updating Address', '$update_address_action'],
  dnsChangeSite: ['Updated Site', 'Updating Site', '$update_site_action'],
  dnsChangeSubdomains: ['Updated Subdomains', 'Updating Subdomains', '$update_subdomains_action'],
  dnsChangeStorage: ['Updated Storage', 'Updating Storage', '$update_storage_action'],
  dnsDelete: ['Deleted Domain Record', 'Deleting Domain Record', '$delete_domain_record_action'],
  dnsRenew: ['Renewed Domain', 'Renewing Domain', '$renew_domain_action'],
  liquidityDeposit: ['Provided Liquidity', 'Providing Liquidity', '$provide_liquidity_action'],
  liquidityWithdraw: ['Withdrawn Liquidity', 'Withdrawing Liquidity', '$withdraw_liquidity_action']
};
const STAKING_TRANSACTION_TYPES = new Set(['stake', 'unstake', 'unstakeRequest']);
const DNS_TRANSACTION_TYPES = new Set(['dnsChangeAddress', 'dnsChangeSite', 'dnsChangeStorage', 'dnsChangeSubdomains', 'dnsDelete', 'dnsRenew']);

/**
 * Both 'pendingTrusted' and 'pending' mean the activity is awaiting confirmation by the blockchain.
 * - 'pendingTrusted' — awaiting confirmation and trusted (initiated by our app).
 * - 'pending' — awaiting confirmation from an external/unauthenticated source.
 */
const PENDING_STATUSES = new Set(['pending', 'pendingTrusted']);
function parseTxId(txId) {
  const [hash, subId, type] = txId.split(':');
  return {
    hash,
    type,
    subId
  };
}
function getIsTxIdLocal(txId) {
  return txId.endsWith(':local');
}
function getIsBackendSwapId(id) {
  return id.endsWith(':backend-swap');
}
function buildBackendSwapId(backendId) {
  return buildTxId(backendId, undefined, 'backend-swap');
}
function buildLocalTxId(hash, subId) {
  return buildTxId(hash, subId, 'local');
}
function buildTxId(hash, subId, type) {
  if (!type && subId === undefined) return hash;
  if (type === undefined) return `${hash}:${subId}`;
  return `${hash}:${subId ?? ''}:${type}`;
}

/** Returns the token slugs that the activity is a part of the history of */
function getActivityTokenSlugs(activity) {
  switch (activity.kind) {
    case 'transaction':
      {
        if (activity.nft) return []; // We don't want NFT activities to get into any token activity list
        return [activity.slug];
      }
    case 'swap':
      {
        return [activity.from, activity.to];
      }
  }
}
function getActivityChains(activity) {
  switch (activity.kind) {
    case 'transaction':
      {
        return [getChainBySlug(activity.slug)];
      }
    case 'swap':
      {
        return (0,iteratees/* unique */.Am)([getChainBySlug(activity.from), getChainBySlug(activity.to)]);
      }
  }
}
function getIsActivitySuitableForFetchingTimestamp(activity) {
  return !!activity && !getIsTxIdLocal(activity.id) && !getIsBackendSwapId(activity.id) && !getIsActivityPending(activity);
}
function getTransactionTitle(_ref, tense, translate) {
  let {
    type,
    isIncoming,
    nft
  } = _ref;
  const tenseIndex = tense === 'past' ? 0 : tense === 'present' ? 1 : 2;
  let titles;
  if (type === 'nftTrade') {
    titles = isIncoming ? ['Sold NFT', 'Selling NFT', '$sell_nft_action'] : ['Bought NFT', 'Buying NFT', '$buy_nft_action'];
  } else if (type && TRANSACTION_TYPE_TITLES[type]) {
    titles = TRANSACTION_TYPE_TITLES[type];
  } else {
    titles = isIncoming ? ['Received', 'Receiving', '$receive_action'] : ['Sent', 'Sending', '$send_action'];
  }
  let title = translate(titles[tenseIndex]);
  if (nft && (!type || type === 'mint' || type === 'burn')) {
    title += ' NFT';
  }
  return title;
}
function isScamTransaction(transaction) {
  var _transaction$metadata;
  return Boolean((_transaction$metadata = transaction.metadata) === null || _transaction$metadata === void 0 ? void 0 : _transaction$metadata.isScam) || transaction.isIncoming && getIsTransactionWithPoisoning(transaction);
}
function shouldShowTransactionComment(transaction) {
  return Boolean(transaction.comment || transaction.encryptedComment) && !STAKING_TRANSACTION_TYPES.has(transaction.type) && !isScamTransaction(transaction);
}
function getTransactionAmountDisplayMode(_ref2) {
  let {
    type,
    amount,
    nft
  } = _ref2;
  const isPlainTransfer = type === undefined && !nft;
  if (!amount && !isPlainTransfer) {
    return 'hide';
  }
  return type === 'stake' || type === 'unstake' ? 'noSign' : 'normal';
}

/** Returns the UI sections where the address should be shown */
function shouldShowTransactionAddress(transaction) {
  const {
    type,
    isIncoming,
    nft,
    toAddress,
    fromAddress,
    extra
  } = transaction;
  if (type === 'nftTrade') {
    return extra !== null && extra !== void 0 && extra.marketplace ? ['list'] : [];
  }
  const shouldHide = isOurStakingTransaction(transaction) || type === 'burn' || !isIncoming && nft && toAddress === nft.address || isIncoming && type === 'excess' && fromAddress === BURN_ADDRESS;
  return shouldHide ? [] : ['list', 'modal'];
}

/** "Our" is staking that can be controlled with MyTonWallet app */
function isOurStakingTransaction(_ref3) {
  let {
    type,
    isIncoming,
    toAddress,
    fromAddress
  } = _ref3;
  return STAKING_TRANSACTION_TYPES.has(type) && ALL_STAKING_POOLS.includes(isIncoming ? fromAddress : toAddress);
}
function shouldShowTransactionAnnualYield(transaction) {
  return transaction.type === 'stake' && isOurStakingTransaction(transaction);
}
function getIsActivityWithHash(activity) {
  var _activity$extra;
  return !getIsTxIdLocal(activity.id) || !((_activity$extra = activity.extra) !== null && _activity$extra !== void 0 && _activity$extra.withW5Gasless);
}
function getIsActivityPending(activity) {
  // "Pending" is a blockchain term. The activities originated by our backend are never considered pending in this sense.
  return activities_getIsActivityPendingForUser(activity) && !getIsBackendSwapId(activity.id);
}
function activities_getIsActivityPendingForUser(activity) {
  return PENDING_STATUSES.has(activity.status);
}

/**
 * Sometimes activity ids change. This function finds the new id withing `nextActivities` for each activity in
 * `prevActivities`. Currently only local and pending activity ids change, so it's enough to provide only such
 * activities in `prevActivities`.
 *
 * The ids should be unique within each input array. The returned map has previous activity ids as keys and next
 * activity ids as values. If the map has no value for a previous id, it means that there is no matching next activity.
 * The values may be not unique.
 */
function getActivityIdReplacements(prevActivities, nextActivities) {
  // Each previous activity must fall into either of the groups, otherwise the resulting map will falsely miss previous ids
  const prevLocalActivities = [];
  const prevChainActivities = [];
  for (const activity of prevActivities) {
    const group = getIsTxIdLocal(activity.id) ? prevLocalActivities : prevChainActivities;
    group.push(activity);
  }
  return {
    ...getLocalActivityIdReplacements(prevLocalActivities, nextActivities),
    ...getChainActivityIdReplacements(prevChainActivities, nextActivities)
  };
}

/** Replaces local activity ids. See `getActivityIdReplacements` for more details. */
function getLocalActivityIdReplacements(prevLocalActivities, nextActivities) {
  const idReplacements = {};
  if (!prevLocalActivities.length) {
    return idReplacements;
  }
  const nextActivityIds = new Set(extractKey(nextActivities, 'id'));
  const nextChainActivities = nextActivities.filter(activity => !getIsTxIdLocal(activity.id));
  for (const localActivity of prevLocalActivities) {
    const {
      id: prevId
    } = localActivity;

    // Try a direct id match
    if (nextActivityIds.has(prevId)) {
      idReplacements[prevId] = prevId;
      continue;
    }

    // Otherwise, try to find a match by a heuristic
    const chainActivity = nextChainActivities.find(chainActivity => {
      return doesLocalActivityMatch(localActivity, chainActivity);
    });
    if (chainActivity) {
      idReplacements[prevId] = chainActivity.id;
    }

    // Otherwise, there is no match
  }
  return idReplacements;
}

/** Replaces chain (i.e. not local) activity ids. See `getActivityIdReplacements` for more details. */
function getChainActivityIdReplacements(prevActivities, nextActivities) {
  const idReplacements = {};
  if (!prevActivities.length) {
    return idReplacements;
  }
  const nextActivityIds = new Set(extractKey(nextActivities, 'id'));
  const nextActivitiesByMessageHash = groupBy(nextActivities, 'externalMsgHashNorm');
  for (const {
    id: prevId,
    externalMsgHashNorm
  } of prevActivities) {
    // Try a direct id match
    if (nextActivityIds.has(prevId)) {
      idReplacements[prevId] = prevId;
      continue;
    }

    // Otherwise, match by the message hash
    if (externalMsgHashNorm) {
      const nextSubActivities = nextActivitiesByMessageHash[externalMsgHashNorm];
      if (nextSubActivities !== null && nextSubActivities !== void 0 && nextSubActivities.length) {
        idReplacements[prevId] = nextSubActivities[0].id;

        // Leaving 1 activity in each group to ensure there is a match for the further prev activities with the same hash
        if (nextSubActivities.length > 1) {
          nextSubActivities.shift();
        }
      }
    }

    // Otherwise, there is no match
  }
  return idReplacements;
}

/** Decides whether the local activity matches the activity from the blockchain */
function doesLocalActivityMatch(localActivity, chainActivity) {
  var _localActivity$extra;
  if ((_localActivity$extra = localActivity.extra) !== null && _localActivity$extra !== void 0 && _localActivity$extra.withW5Gasless) {
    if (localActivity.kind === 'transaction' && chainActivity.kind === 'transaction') {
      return !chainActivity.isIncoming && localActivity.normalizedAddress === chainActivity.normalizedAddress && localActivity.amount === chainActivity.amount && localActivity.slug === chainActivity.slug;
    } else if (localActivity.kind === 'swap' && chainActivity.kind === 'swap') {
      return localActivity.from === chainActivity.from && localActivity.to === chainActivity.to && localActivity.fromAmount === chainActivity.fromAmount;
    }
  }
  if (localActivity.externalMsgHashNorm) {
    return localActivity.externalMsgHashNorm === chainActivity.externalMsgHashNorm && !chainActivity.shouldHide;
  }
  return parseTxId(localActivity.id).hash === parseTxId(chainActivity.id).hash;
}
;// ./src/util/datetime.ts
function toMilliseconds(seconds) {
  return seconds * 1000;
}
function toSeconds(ms) {
  return Math.floor(ms / 1000);
}
// EXTERNAL MODULE: ./src/util/decimals.ts
var util_decimals = __webpack_require__(398);
// EXTERNAL MODULE: ./src/util/safeExec.ts
var safeExec = __webpack_require__(50110);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/BitReader.js
var BitReader = __webpack_require__(53528);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/BitString.js
var BitString = __webpack_require__(62386);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Builder.js
var Builder = __webpack_require__(65871);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Cell.js
var Cell = __webpack_require__(66902);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/boc/Slice.js
var Slice = __webpack_require__(56906);
// EXTERNAL MODULE: ./node_modules/@ton/core/dist/dict/Dictionary.js
var Dictionary = __webpack_require__(97590);
;// ./src/util/isEmptyObject.ts
function isEmptyObject(obj) {
  return !isKeyCountGreater(obj, 0);
}
function isKeyCountGreater(obj, countToOutnumber) {
  if (countToOutnumber < 0) return true;
  let keyCount = 0;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      keyCount++;
      if (keyCount > countToOutnumber) {
        return true;
      }
    }
  }
  return false;
}
// EXTERNAL MODULE: ./node_modules/dexie/import-wrapper-prod.mjs
var import_wrapper_prod = __webpack_require__(64143);
;// ./src/api/db/repository.ts

const IGNORED_DEXIE_ERRORS = new Set(['AbortError', 'BulkError', 'UnknownError']);
async function tryDbQuery(cb) {
  try {
    if (config/* IS_AIR_APP */.gmk) {
      void cb();
      return undefined;
    }
    return await cb();
  } catch (error) {
    if (IGNORED_DEXIE_ERRORS.has(error === null || error === void 0 ? void 0 : error.name)) return undefined;else throw error;
  }
}
class DbRepository {
  table;
  constructor(table) {
    this.table = table;
  }
  all() {
    return this.table.toArray();
  }
  find(where) {
    return tryDbQuery(() => {
      return this.table.where(where).toArray();
    });
  }
  put(item) {
    return tryDbQuery(() => {
      return this.table.put(item);
    });
  }
  bulkPut(items) {
    return tryDbQuery(() => {
      return this.table.bulkPut(items);
    });
  }
  update(key, update) {
    return tryDbQuery(() => {
      return this.table.update(key, update);
    });
  }
  delete(key) {
    return tryDbQuery(() => {
      return this.table.delete(key);
    });
  }
  deleteWhere(where) {
    return tryDbQuery(() => {
      return this.table.where(where).delete();
    });
  }
  clear() {
    return tryDbQuery(() => {
      return this.table.clear();
    });
  }
}
;// ./src/api/db/index.ts


const DB_NAME = 'tables';
class ApiDb extends import_wrapper_prod/* default */.Ay {
  nfts;
  tokens;
  constructor() {
    super(DB_NAME);
    this.version(1).stores({
      nfts: '[accountId+address], accountId, address, collectionAddress'
    });
    this.version(2).stores({
      sseConnections: '&clientId'
    });
    this.version(3).stores({
      tokens: 'tokenAddress, chain, &slug'
    });
    this.version(4).upgrade(tx => {
      return tx.table('tokens').clear();
    });
    this.version(5).stores({
      // eslint-disable-next-line no-null/no-null
      nfts: null,
      // eslint-disable-next-line no-null/no-null
      sseConnections: null
    });
    this.version(6).upgrade(tx => {
      return tx.table('tokens').toCollection().modify(token => {
        delete token.price;
      });
    });
  }
}
const apiDb = new ApiDb();
const tokenRepository = new DbRepository(apiDb.tokens);
;// ./src/api/common/tokens.ts




const tokensPreload = new Deferred/* default */.A();
const tokensCache = {
  bySlug: {
    ...config/* TOKEN_INFO */.lfO
  }
};
async function loadTokensCache() {
  try {
    const tokens = await tokenRepository.all();
    await updateTokens(tokens);
  } finally {
    tokensPreload.resolve();
  }
}
async function updateTokens(tokens, onUpdate, tokenDetails, shouldSendUpdate) {
  const tokensForDb = [];
  const detailsBySlug = (0,iteratees/* buildCollectionByKey */.dU)(tokenDetails ?? [], 'slug');
  for (const {
    slug,
    ...details
  } of tokenDetails ?? []) {
    const cachedToken = tokensCache.bySlug[slug];
    if (cachedToken) {
      const token = {
        ...cachedToken,
        ...details
      };
      tokensCache.bySlug[slug] = token;
      tokensForDb.push(token);
    }
  }
  for (const token of tokens) {
    const {
      slug
    } = token;
    const cachedToken = tokensCache.bySlug[slug];
    const mergedToken = mergeTokenWithCache(token, detailsBySlug, cachedToken);
    if (!(token.slug in tokensCache)) {
      shouldSendUpdate = true;
    }
    tokensCache.bySlug[token.slug] = mergedToken;
    if (token.tokenAddress) {
      tokensForDb.push(mergedToken);
    }
  }
  await tokenRepository.bulkPut(tokensForDb);
  if (shouldSendUpdate && onUpdate) {
    sendUpdateTokens(onUpdate);
  }
}
function mergeTokenWithCache(token, detailsBySlug, cachedToken) {
  if (cachedToken) {
    // Metadata from backend takes priority (e.g., image)
    return {
      ...(0,iteratees/* omitUndefined */.Oy)(token.isFromBackend ? cachedToken : token),
      ...(0,iteratees/* omitUndefined */.Oy)(token.isFromBackend ? token : cachedToken),
      priceUsd: token.priceUsd || cachedToken.priceUsd,
      percentChange24h: token.percentChange24h || cachedToken.percentChange24h
    };
  } else if (token.slug in detailsBySlug) {
    return {
      ...token,
      ...detailsBySlug[token.slug]
    };
  } else {
    return token;
  }
}
function getTokensCache() {
  return tokensCache;
}

/** Note that this function may return `undefined` if the token is not found (e.g. pTON) */
function getTokenBySlug(slug) {
  return tokensCache.bySlug[slug];
}
function getTokenByAddress(tokenAddress) {
  return getTokenBySlug(buildTokenSlug('ton', tokenAddress));
}
function sendUpdateTokens(onUpdate) {
  onUpdate({
    type: 'updateTokens',
    tokens: tokensCache.bySlug
  });
}
function buildTokenSlug(chain, address) {
  const addressPart = address.replace(/[^a-z\d]/gi, '').slice(0, 10);
  return `${chain}-${addressPart}`.toLowerCase();
}
;// ./src/api/chains/ton/toncenter/other.ts






const ADDRESS_BOOK_CHUNK_SIZE = 128;
const VERSION_MAP = {
  'wallet v1 r1': 'simpleR1',
  'wallet v1 r2': 'simpleR2',
  'wallet v1 r3': 'simpleR3',
  'wallet v2 r1': 'v2R1',
  'wallet v2 r2': 'v2R2',
  'wallet v3 r1': 'v3R1',
  'wallet v3 r2': 'v3R2',
  // 'wallet v4 r1': '', // Not used in production, wrapper is missing
  'wallet v4 r2': 'v4R2',
  // 'wallet v5 beta': '', // Not used in production, wrapper is missing
  'wallet v5 r1': 'W5'
};
async function fetchAddressBook(network, addresses) {
  const chunks = (0,iteratees/* split */.lD)(addresses, ADDRESS_BOOK_CHUNK_SIZE);
  const results = await Promise.all(chunks.map(chunk => {
    return other_callToncenterV3(network, '/addressBook', {
      address: chunk
    });
  }));
  return results.reduce((acc, value) => {
    return Object.assign(acc, value);
  }, {});
}
async function fixAddressFormat(network, address) {
  const result = await other_callToncenterV3(network, '/addressBook', {
    address
  });
  return result.address_book[address];
}

/**
 * The output dictionary is indexed by the input addresses.
 * Every input address is guaranteed to be a key of the dictionary.
 */
async function getWalletInfos(network, addresses) {
  const {
    wallets: states,
    address_book: addressBook
  } = await other_callToncenterV3(network, '/walletStates', {
    address: addresses.join(',')
  });
  const walletInfoByRawAddress = Object.fromEntries(states.map(state => [state.address.toLowerCase(), buildWalletInfo(state, addressBook)]));
  return Object.fromEntries(addresses.map(inputAddress => {
    const rawAddress = (0,tonCore/* toRawAddress */.m$)(inputAddress).toLowerCase();
    return [inputAddress, walletInfoByRawAddress[rawAddress] ?? {
      address: inputAddress,
      balance: 0n,
      isInitialized: false,
      seqno: 0
    }];
  }));
}
function buildWalletInfo(state, addressBook) {
  return {
    address: addressBook[state.address].user_friendly,
    version: 'wallet_type' in state ? VERSION_MAP[state.wallet_type] : undefined,
    balance: BigInt(state.balance),
    isInitialized: state.status === 'active',
    seqno: 'seqno' in state ? state.seqno : 0,
    lastTxId: state.last_transaction_hash ? buildTxId(state.last_transaction_hash) : undefined,
    domain: addressBook[state.address].domain ?? undefined
  };
}
async function getAccountStates(network, addresses) {
  const {
    accounts: states
  } = await other_callToncenterV3(network, '/accountStates', {
    address: addresses.join(',')
  });
  const addressByRaw = Object.fromEntries(addresses.map(address => [(0,tonCore/* toRawAddress */.m$)(address), address]));
  for (const state of states) {
    state.address = addressByRaw[state.address.toLowerCase()];
  }
  return (0,iteratees/* buildCollectionByKey */.dU)(states, 'address');
}
function fetchMetadata(network, addresses) {
  return other_callToncenterV3(network, '/metadata', {
    address: addresses.join(',')
  });
}
function other_callToncenterV3(network, path, data) {
  const baseUrl = network === 'testnet' ? config/* TONCENTER_TESTNET_URL */.pyR : config/* TONCENTER_MAINNET_URL */._J8;
  const url = `${baseUrl}/api/v3${path}`;
  return (0,util_fetch/* fetchJson */.x6)(url, data, {
    headers: getToncenterHeaders(network)
  });
}
function getToncenterHeaders(network) {
  const {
    apiHeaders,
    toncenterMainnetKey,
    toncenterTestnetKey
  } = (0,api_environment/* getEnvironment */.u)();
  const apiKey = network === 'testnet' ? toncenterTestnetKey : toncenterMainnetKey;
  return {
    ...apiHeaders,
    ...(apiKey && {
      'X-Api-Key': apiKey
    }),
    'X-Actions-Version': config/* TONCENTER_ACTIONS_VERSION */.eaP
  };
}
// EXTERNAL MODULE: ./node_modules/tonapi-sdk-js/dist/index.js
var tonapi_sdk_js_dist = __webpack_require__(68354);
;// ./src/api/chains/ton/util/tonapiio.ts




const MAX_LIMIT = 500;
const EVENTS_LIMIT = 100;
let apiByNetwork;
function getApi(network) {
  if (!apiByNetwork) {
    const headers = {
      ...(0,api_environment/* getEnvironment */.u)().apiHeaders,
      'Content-Type': 'application/json'
    };
    apiByNetwork = {
      mainnet: new tonapi_sdk_js_dist/* Api */.jI(new tonapi_sdk_js_dist/* HttpClient */.Qq({
        baseUrl: config/* TONAPIIO_MAINNET_URL */.lHX,
        baseApiParams: {
          headers
        },
        customFetch: util_fetch/* fetchWithRetry */.J5
      })),
      testnet: new tonapi_sdk_js_dist/* Api */.jI(new tonapi_sdk_js_dist/* HttpClient */.Qq({
        baseUrl: config/* TONAPIIO_TESTNET_URL */.SKs,
        baseApiParams: {
          headers
        },
        customFetch: util_fetch/* fetchWithRetry */.J5
      }))
    };
  }
  return apiByNetwork[network];
}
async function fetchJettonBalances(network, account) {
  return (await getApi(network).accounts.getAccountJettonsBalances(account, {
    supported_extensions: ['custom_payload']
  })).balances;
}
async function fetchNftItems(network, addresses) {
  return (await getApi(network).nft.getNftItemsByAddresses({
    account_ids: addresses
  })).nft_items;
}
async function fetchAccountNfts(network, address, options) {
  const {
    collectionAddress,
    offset,
    limit
  } = options ?? {};
  return (await getApi(network).accounts.getAccountNftItems(address, {
    offset: offset ?? 0,
    limit: limit ?? MAX_LIMIT,
    indirect_ownership: true,
    collection: collectionAddress
  })).nft_items;
}
function fetchNftByAddress(network, nftAddress) {
  return getApi(network).nft.getNftItemByAddress(nftAddress);
}
async function fetchAccountEvents(network, address, fromSec, limit) {
  return (await getApi(network).accounts.getAccountEvents(address, {
    limit: limit ?? EVENTS_LIMIT,
    start_date: fromSec
  })).events;
}
;// ./src/api/chains/ton/util/metadata.ts
/* provided dependency */ var metadata_Buffer = __webpack_require__(48287)["Buffer"];



















const OFFCHAIN_CONTENT_PREFIX = 0x01;
const SNAKE_PREFIX = 0x00;
function fixBase64ImageData(data) {
  const decodedData = (0,utils/* base64ToString */.QM)(data);
  if (decodedData.includes('<svg')) {
    return `data:image/svg+xml;base64,${data}`;
  }
  return `data:image/png;base64,${data}`;
}
const dictSnakeBufferValue = {
  parse: slice => {
    const buffer = metadata_Buffer.from('');
    const sliceToVal = (s, v, isFirst) => {
      if (isFirst && s.loadUint(8) !== SNAKE_PREFIX) {
        throw new Error('Only snake format is supported');
      }
      v = metadata_Buffer.concat([v, s.loadBuffer(s.remainingBits / 8)]);
      if (s.remainingRefs === 1) {
        v = sliceToVal(s.loadRef().beginParse(), v, false);
      }
      return v;
    };
    return sliceToVal(slice.loadRef().beginParse(), buffer, true);
  },
  serialize: () => {
    // pass
  }
};
const jettonOnChainMetadataSpec = {
  uri: 'ascii',
  name: 'utf8',
  description: 'utf8',
  image: 'ascii',
  symbol: 'utf8',
  decimals: 'utf8',
  custom_payload_api_uri: 'ascii'
};
async function fetchJettonMetadata(network, address) {
  const {
    content
  } = await (0,tonCore/* getJettonMinterData */.Ow)(network, address);
  let metadata;
  const slice = content.asSlice();
  const prefix = slice.loadUint(8);
  if (prefix === OFFCHAIN_CONTENT_PREFIX) {
    const bytes = readSnakeBytes(slice);
    const contentUri = bytes.toString('utf-8');
    metadata = await fetchJettonOffchainMetadata(contentUri);
  } else {
    // On-chain content
    metadata = await parseJettonOnchainMetadata(slice);
    if (metadata.uri) {
      // Semi-chain content
      const offchainMetadata = await fetchJettonOffchainMetadata(metadata.uri);
      metadata = {
        ...offchainMetadata,
        ...metadata
      };
    }
  }
  return metadata;
}
async function parseJettonOnchainMetadata(slice) {
  const dict = slice.loadDict(Dictionary.Dictionary.Keys.Buffer(32), dictSnakeBufferValue);
  const res = {};
  for (const [key, value] of Object.entries(jettonOnChainMetadataSpec)) {
    var _dict$get;
    const sha256Key = metadata_Buffer.from(await (0,utils/* sha256 */.sc)(metadata_Buffer.from(key, 'ascii')));
    const val = (_dict$get = dict.get(sha256Key)) === null || _dict$get === void 0 ? void 0 : _dict$get.toString(value);
    if (val) {
      res[key] = val;
    }
  }
  return res;
}
async function fetchJettonOffchainMetadata(uri) {
  const metadata = await (0,util_fetch/* fetchJsonWithProxy */.x3)(uri);
  return (0,iteratees/* pick */.Up)(metadata, ['name', 'description', 'symbol', 'decimals', 'image', 'image_data', 'custom_payload_api_uri']);
}
async function parsePayloadBase64(network, address, base64) {
  const slice = dataToSlice(base64);
  const result = {
    type: 'unknown',
    base64
  };
  if (!slice) return result;
  return (await parsePayloadSlice(network, address, slice, true)) ?? result;
}
async function parsePayloadSlice(network, address, slice, shouldLoadItems, transactionDebug) {
  let opCode;
  try {
    opCode = slice.loadUint(32);
    if (opCode === constants/* OpCode */.$G.Comment) {
      const buffer = readSnakeBytes(slice);
      const comment = buffer.toString('utf-8');
      return {
        type: 'comment',
        comment
      };
    } else if (opCode === constants/* OpCode */.$G.Encrypted) {
      const buffer = readSnakeBytes(slice);
      const encryptedComment = buffer.toString('base64');
      return {
        type: 'encrypted-comment',
        encryptedComment
      };
    } else if (slice.remainingBits < 64) {
      return undefined;
    }
    const queryId = slice.loadUintBig(64);
    switch (opCode) {
      case constants/* JettonOpCode */.LY.Transfer:
        {
          var _forwardPayload;
          const tokenAddress = await (0,tonCore/* resolveTokenAddress */.uA)(network, address).catch(() => '');
          const slug = buildTokenSlug('ton', tokenAddress);
          const amount = slice.loadCoins();
          const destination = slice.loadAddress();
          const responseDestination = slice.loadMaybeAddress();
          if (!responseDestination) {
            return {
              type: 'tokens:transfer-non-standard',
              queryId,
              destination: (0,tonCore/* toBase64Address */.vn)(destination, undefined, network),
              amount,
              slug
            };
          }
          const customPayload = slice.loadMaybeRef();
          const forwardAmount = slice.loadCoins();
          let forwardPayload = slice.loadMaybeRef();
          let forwardPayloadOpCode;
          if (!forwardPayload && slice.remainingBits) {
            const builder = new Builder.Builder().storeBits(slice.loadBits(slice.remainingBits));
            (0,iteratees/* range */.y1)(0, slice.remainingRefs).forEach(() => {
              builder.storeRef(slice.loadRef());
            });
            forwardPayload = builder.endCell();
          }
          if (forwardPayload) {
            const forwardPayloadSlice = forwardPayload.beginParse();
            if (forwardPayloadSlice.remainingBits > 32) {
              forwardPayloadOpCode = forwardPayloadSlice.loadUint(32);
            }
          }
          return {
            type: 'tokens:transfer',
            queryId,
            amount,
            destination: (0,tonCore/* toBase64Address */.vn)(destination, undefined, network),
            responseDestination: (0,tonCore/* toBase64Address */.vn)(responseDestination, undefined, network),
            customPayload: customPayload === null || customPayload === void 0 ? void 0 : customPayload.toBoc().toString('base64'),
            forwardAmount,
            forwardPayload: (_forwardPayload = forwardPayload) === null || _forwardPayload === void 0 ? void 0 : _forwardPayload.toBoc().toString('base64'),
            forwardPayloadOpCode,
            slug,
            tokenAddress
          };
        }
      case constants/* NftOpCode */.H3.TransferOwnership:
        {
          var _nft;
          const newOwner = slice.loadAddress();
          const responseDestination = slice.loadAddress();
          const customPayload = slice.loadMaybeRef();
          const forwardAmount = slice.loadCoins();
          const forwardPayload = readForwardPayloadCell(slice);
          const comment = forwardPayload ? readComment(forwardPayload.asSlice()) : undefined;
          let nft;
          if (shouldLoadItems) {
            const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
            const [rawNft] = await fetchNftItems(network, [address]);
            if (rawNft) {
              nft = parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress);
            }
          }
          return {
            type: 'nft:transfer',
            queryId,
            newOwner: (0,tonCore/* toBase64Address */.vn)(newOwner, undefined, network),
            responseDestination: (0,tonCore/* toBase64Address */.vn)(responseDestination, undefined, network),
            customPayload: customPayload === null || customPayload === void 0 ? void 0 : customPayload.toBoc().toString('base64'),
            forwardAmount,
            forwardPayload: forwardPayload === null || forwardPayload === void 0 ? void 0 : forwardPayload.toBoc().toString('base64'),
            nftAddress: address,
            nftName: (_nft = nft) === null || _nft === void 0 ? void 0 : _nft.name,
            nft,
            comment
          };
        }
      case constants/* NftOpCode */.H3.OwnershipAssigned:
        {
          const prevOwner = slice.loadAddress();
          const forwardPayload = readForwardPayloadCell(slice);
          const comment = forwardPayload ? readComment(forwardPayload.asSlice()) : undefined;
          let nft;
          if (shouldLoadItems) {
            const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
            const [rawNft] = await fetchNftItems(network, [address]);
            if (rawNft) {
              nft = parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress);
            }
          }
          return {
            type: 'nft:ownership-assigned',
            queryId,
            prevOwner: (0,tonCore/* toBase64Address */.vn)(prevOwner, undefined, network),
            comment,
            nftAddress: address,
            nft
          };
        }
      case constants/* JettonOpCode */.LY.Burn:
        {
          const tokenAddress = await (0,tonCore/* resolveTokenAddress */.uA)(network, address);
          const slug = buildTokenSlug('ton', tokenAddress);
          const amount = slice.loadCoins();
          const addressObj = slice.loadAddress();
          const customPayload = slice.loadMaybeRef();
          const isLiquidUnstakeRequest = tokenAddress === config/* LIQUID_JETTON */.Kzb;
          return {
            type: 'tokens:burn',
            queryId,
            amount,
            address: (0,tonCore/* toBase64Address */.vn)(addressObj, undefined, network),
            customPayload: customPayload === null || customPayload === void 0 ? void 0 : customPayload.toBoc().toString('base64'),
            slug,
            isLiquidUnstakeRequest
          };
        }
      case constants/* LiquidStakingOpCode */.Ad.DistributedAsset:
        {
          return {
            type: 'liquid-staking:withdrawal-nft',
            queryId
          };
        }
      case constants/* LiquidStakingOpCode */.Ad.Withdrawal:
        {
          return {
            type: 'liquid-staking:withdrawal',
            queryId
          };
        }
      case constants/* LiquidStakingOpCode */.Ad.Deposit:
        {
          let appId;
          if (slice.remainingBits > 0) {
            appId = slice.loadUintBig(64);
          }
          return {
            type: 'liquid-staking:deposit',
            queryId,
            appId
          };
        }
      case constants/* VestingV1OpCode */.UA.AddWhitelist:
        {
          const toAddress = slice.loadAddress();
          const addressString = shouldLoadItems ? await fixAddressFormat(network, toAddress.toRawString()) : '';
          return {
            type: 'vesting:add-whitelist',
            queryId,
            address: addressString
          };
        }
      case constants/* SingleNominatorOpCode */.IP.Withdraw:
        {
          const amount = slice.loadCoins();
          return {
            type: 'single-nominator:withdraw',
            queryId,
            amount
          };
        }
      case constants/* SingleNominatorOpCode */.IP.ChangeValidator:
        {
          const toAddress = slice.loadAddress();
          const addressString = shouldLoadItems ? await fixAddressFormat(network, toAddress.toRawString()) : '';
          return {
            type: 'single-nominator:change-validator',
            queryId,
            address: addressString
          };
        }
      case constants/* LiquidStakingOpCode */.Ad.Vote:
        {
          const votingAddress = slice.loadAddress();
          const expirationDate = slice.loadUint(48);
          const vote = slice.loadBit();
          const needConfirmation = slice.loadBit();
          return {
            type: 'liquid-staking:vote',
            queryId,
            votingAddress: (0,tonCore/* toBase64Address */.vn)(votingAddress, true),
            expirationDate,
            vote,
            needConfirmation
          };
        }
      case constants/* DnsOpCode */.kc.ChangeRecord:
        {
          var _Object$entries$find;
          const hash = slice.loadBuffer(32).toString('hex');
          const category = ((_Object$entries$find = Object.entries(constants/* DNS_CATEGORY_HASH_MAP */.nm).find(_ref => {
            let [, value] = _ref;
            return hash === value;
          })) === null || _Object$entries$find === void 0 ? void 0 : _Object$entries$find[0]) ?? 'unknown';
          const toAddress = slice.loadAddress();
          const domain = shouldLoadItems ? await (0,tonCore/* getDnsItemDomain */.l_)(network, toAddress) : '';
          if (category === constants/* DnsCategory */.kJ.Wallet) {
            if (slice.remainingRefs > 0) {
              const dataSlice = slice.loadRef().beginParse();
              slice.endParse();
              const dataAddress = dataSlice.loadAddress();
              const flags = dataSlice.loadUint(8);
              const addressString = shouldLoadItems ? await fixAddressFormat(network, dataAddress.toRawString()) : '';
              return {
                type: 'dns:change-record',
                queryId,
                record: {
                  type: 'wallet',
                  value: addressString,
                  flags
                },
                domain
              };
            } else {
              return {
                type: 'dns:change-record',
                queryId,
                record: {
                  type: 'wallet',
                  value: undefined
                },
                domain
              };
            }
          } else if (slice.remainingRefs > 0) {
            const value = slice.loadRef();
            return {
              type: 'dns:change-record',
              queryId,
              record: category === constants/* DnsCategory */.kJ.Unknown ? {
                type: 'unknown',
                key: hash,
                value: value.toBoc().toString('base64')
              } : {
                type: category,
                value: value.toBoc().toString('base64')
              },
              domain
            };
          } else {
            return {
              type: 'dns:change-record',
              queryId,
              record: category === constants/* DnsCategory */.kJ.Unknown ? {
                type: 'unknown',
                key: hash
              } : {
                type: category
              },
              domain
            };
          }
        }
      case constants/* OtherOpCode */.b2.TokenBridgePaySwap:
        {
          const swapId = slice.loadBuffer(32).toString('hex');
          return {
            type: 'token-bridge:pay-swap',
            queryId,
            swapId
          };
        }
      case constants/* JettonStakingOpCode */.CU.UnstakeRequest:
        {
          const amount = slice.loadCoins();
          const isForce = slice.loadBoolean();
          return {
            type: 'jetton-staking:unstake',
            queryId,
            amount,
            isForce
          };
        }
    }
  } catch (err) {
    if (config/* DEBUG */.Oig) {
      var _opCode;
      const debugTxString = transactionDebug && `${transactionDebug.id} ${new Date(transactionDebug.timestamp).toISOString()}`;
      const opCodeHex = `0x${(_opCode = opCode) === null || _opCode === void 0 ? void 0 : _opCode.toString(16).padStart(8, '0')}`;
      (0,logs/* logDebugError */.SJ)('parsePayload', opCodeHex, debugTxString, '\n', err);
    }
  }
  return undefined;
}
function dataToSlice(data) {
  let buffer;
  if (typeof data === 'string') {
    buffer = metadata_Buffer.from(data, 'base64');
  } else if (data instanceof metadata_Buffer) {
    buffer = data;
  } else {
    buffer = metadata_Buffer.from(data);
  }
  try {
    return Cell.Cell.fromBoc(buffer)[0].beginParse();
  } catch (err) {
    if ((err === null || err === void 0 ? void 0 : err.message) !== 'Invalid magic') {
      throw err;
    }
  }
  return new Slice.Slice(new BitReader.BitReader(new BitString.BitString(buffer, 0, buffer.length * 8)), []);
}
function readComment(slice) {
  if (slice.remainingBits < 32) {
    return undefined;
  }
  const opCode = slice.loadUint(32);
  if (opCode !== constants/* OpCode */.$G.Comment || !slice.remainingBits && !slice.remainingRefs) {
    return undefined;
  }
  const buffer = readSnakeBytes(slice);
  return buffer.toString('utf-8');
}
function readForwardPayloadCell(slice) {
  let forwardPayload = slice.loadBit() && slice.remainingRefs ? slice.loadRef() : undefined;
  if (!forwardPayload && slice.remainingBits) {
    const builder = new Builder.Builder().storeBits(slice.loadBits(slice.remainingBits));
    (0,iteratees/* range */.y1)(0, slice.remainingRefs).forEach(() => {
      builder.storeRef(slice.loadRef());
    });
    forwardPayload = builder.endCell();
  }
  return forwardPayload ?? undefined;
}
function readSnakeBytes(slice) {
  let buffer = metadata_Buffer.alloc(0);
  while (slice.remainingBits >= 8) {
    buffer = metadata_Buffer.concat([buffer, slice.loadBuffer(slice.remainingBits / 8)]);
    if (slice.remainingRefs) {
      slice = slice.loadRef().beginParse();
    } else {
      break;
    }
  }
  return buffer;
}
function buildMtwCardsNftMetadata(metadata) {
  const {
    id,
    image,
    attributes
  } = metadata;
  let mtwCardType;
  let mtwCardTextType;
  let result = {};
  if (image) result.imageUrl = image;
  if (id !== undefined) result.mtwCardId = id;
  if (attributes && Array.isArray(attributes) && attributes.length) {
    var _attributes$find;
    mtwCardType = (_attributes$find = attributes.find(attribute => attribute.trait_type === 'Card Type')) === null || _attributes$find === void 0 ? void 0 : _attributes$find.value
    // Clean non-ascii characters with regex
    .replace(/[^\x20-\x7E]/g, '').trim().toLowerCase();
    if (mtwCardType) {
      var _attributes$find2;
      mtwCardTextType = (_attributes$find2 = attributes.find(attribute => attribute.trait_type === 'Text')) === null || _attributes$find2 === void 0 ? void 0 : _attributes$find2.value.toLowerCase();
      result.mtwCardType = mtwCardType;
      if (mtwCardType === 'standard') {
        var _attributes$find3;
        result.mtwCardBorderShineType = (_attributes$find3 = attributes.find(attribute => attribute.trait_type === 'Shine')) === null || _attributes$find3 === void 0 ? void 0 : _attributes$find3.value.toLowerCase();
      }
      if (mtwCardTextType === 'dark' || mtwCardType === 'silver') {
        result.mtwCardTextType = 'dark';
      } else {
        result.mtwCardTextType = 'light';
      }
      result = (0,iteratees/* omitUndefined */.Oy)(result);
    }
  }
  return !isEmptyObject(result) ? result : undefined;
}
function parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress) {
  if (!rawNft.metadata) {
    return undefined;
  }
  try {
    const {
      address,
      index,
      collection,
      metadata: rawMetadata,
      previews,
      sale,
      trust,
      owner
    } = rawNft;
    const {
      name,
      image,
      description,
      render_type: renderType,
      attributes,
      lottie
    } = rawMetadata;
    const collectionAddress = collection && (0,tonCore/* toBase64Address */.vn)(collection.address, true, network);
    let hasScamLink = false;
    if (!collectionAddress || !checkIsTrustedCollection(collectionAddress)) {
      for (const text of [name, description].filter(Boolean)) {
        if (checkHasScamLink(text)) {
          hasScamLink = true;
        }
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    const isWhitelisted = trust === 'whitelist';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
    const isScam = hasScamLink || description === 'SCAM' || trust === 'blacklist';
    const isHidden = renderType === 'hidden' || isScam;
    const imageFromPreview = previews.find(x => x.resolution === '1500x1500').url;
    const isFragmentGift = getIsFragmentGift(nftSuperCollectionsByCollectionAddress, collectionAddress);
    const metadata = {
      ...(Array.isArray(attributes) && {
        attributes
      }),
      ...(isWhitelisted && lottie && {
        lottie: (0,util_fetch/* getProxiedLottieUrl */.I5)(lottie)
      }),
      ...(collectionAddress === config/* MTW_CARDS_COLLECTION */.qL && buildMtwCardsNftMetadata(rawMetadata)),
      ...(isFragmentGift && {
        fragmentUrl: image.replace(config/* NFT_FRAGMENT_GIFT_IMAGE_TO_URL_REGEX */.Pjb, 'https://$1')
      })
    };
    return (0,iteratees/* omitUndefined */.Oy)({
      index,
      name,
      ownerAddress: owner ? (0,tonCore/* toBase64Address */.vn)(owner.address, false, network) : undefined,
      address: (0,tonCore/* toBase64Address */.vn)(address, true, network),
      image: (0,util_fetch/* fixIpfsUrl */.fU)(imageFromPreview || image || ''),
      thumbnail: previews.find(x => x.resolution === '500x500').url,
      isOnSale: Boolean(sale),
      isHidden,
      isScam,
      description,
      ...(collection && {
        collectionAddress,
        collectionName: collection.name,
        isOnFragment: isFragmentGift || config/* NFT_FRAGMENT_COLLECTIONS */.q5n.includes(collection.address),
        isTelegramGift: isFragmentGift
      }),
      metadata
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('buildNft', err);
    return undefined;
  }
}
function getIsFragmentGift(nftSuperCollectionsByCollectionAddress, collectionAddress) {
  var _nftSuperCollectionsB;
  return collectionAddress ? ((_nftSuperCollectionsB = nftSuperCollectionsByCollectionAddress[collectionAddress]) === null || _nftSuperCollectionsB === void 0 ? void 0 : _nftSuperCollectionsB.id) === config/* TELEGRAM_GIFTS_SUPER_COLLECTION */.X6R : false;
}
;// ./src/util/areDeepEqual.ts
function areDeepEqual(value1, value2) {
  const type1 = typeof value1;
  const type2 = typeof value2;
  if (type1 !== type2) {
    return false;
  }

  // eslint-disable-next-line no-null/no-null
  if (type1 !== 'object' || value1 === null || value2 === null) {
    return value1 === value2;
  }
  const isArray1 = Array.isArray(value1);
  const isArray2 = Array.isArray(value2);
  if (isArray1 !== isArray2) {
    return false;
  }
  if (isArray1) {
    const array1 = value1;
    const array2 = value2;
    if (array1.length !== array2.length) {
      return false;
    }
    return array1.every((member1, i) => areDeepEqual(member1, array2[i]));
  }
  const object1 = value1;
  const object2 = value2;
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (!keys1.every(key1 => object2.hasOwnProperty(key1))) {
    return false;
  }
  if (!keys2.every(key2 => object1.hasOwnProperty(key2))) {
    return false;
  }
  return keys1.every(key1 => areDeepEqual(object1[key1], object2[key1]));
}
// EXTERNAL MODULE: ./src/util/assert.ts
var util_assert = __webpack_require__(59288);
;// ./src/api/migrations/00016.ts

async function start() {
  const oldAccountById = await storages_storage.getItem('accounts');
  if (!oldAccountById) return;
  const mnemonicById = await storages_storage.getItem('mnemonicsEncrypted');
  const newAccountById = {};
  for (const [accountId, oldAccount] of Object.entries(oldAccountById)) {
    const {
      address,
      version,
      publicKey,
      authToken,
      ledger,
      isInitialized
    } = oldAccount;
    const tonWallet = {
      type: 'ton',
      address,
      version,
      publicKey,
      authToken,
      isInitialized,
      index: (ledger === null || ledger === void 0 ? void 0 : ledger.index) ?? 0
    };
    newAccountById[accountId] = ledger ? {
      type: 'ledger',
      ton: tonWallet,
      driver: ledger.driver,
      deviceId: ledger.deviceId,
      deviceName: ledger.deviceName
    } : {
      type: 'ton',
      mnemonicEncrypted: mnemonicById[accountId],
      ton: tonWallet
    };
  }
  await storages_storage.setItem('accounts', newAccountById);
}
;// ./src/util/getDappConnectionUniqueId.ts
function getDappConnectionUniqueId(request) {
  var _sseOptions, _sse;
  return ((_sseOptions = request.sseOptions) === null || _sseOptions === void 0 ? void 0 : _sseOptions.appClientId) ?? ((_sse = request.sse) === null || _sse === void 0 ? void 0 : _sse.appClientId) ?? 'jsbridge';
}
;// ./src/api/migrations/00017.ts


async function _00017_start() {
  // Previous schema: Record<accountId, Record<url, ApiDapp>>
  // New schema:     Record<accountId, Record<url, Record<uniqueId, ApiDapp>>>
  const oldState = await storages_storage.getItem('dapps');
  if (!oldState) return;
  const newState = {};
  for (const [accountId, byUrl] of Object.entries(oldState)) {
    newState[accountId] = {};
    for (const [url, dapp] of Object.entries(byUrl)) {
      const uniqueId = getDappConnectionUniqueId(dapp);
      newState[accountId][url] = {
        [uniqueId]: dapp
      };
    }
  }
  await storages_storage.setItem('dapps', newState);
}
;// ./src/api/migrations/00018.ts


async function _00018_start(activeAccountIds) {
  if (!activeAccountIds || activeAccountIds.length === 0) {
    return;
  }
  const accounts = await storages_storage.getItem('accounts');
  if (!accounts) {
    return;
  }
  await storages_storage.setItem('accounts', (0,iteratees/* pick */.Up)(accounts, activeAccountIds));
}
;// ./src/api/migrations/00019.ts


async function _00019_start() {
  const oldAccounts = await storages_storage.getItem('accounts');
  if (!oldAccounts) {
    return;
  }
  const newAccounts = (0,iteratees/* mapValues */.LG)(oldAccounts, oldAccount => {
    const {
      ton,
      tron,
      ...account
    } = oldAccount;
    if (ton) delete ton.type;
    if (tron) delete tron.type;
    return {
      ...account,
      byChain: (0,iteratees/* omitUndefined */.Oy)({
        ton,
        tron
      })
    };
  });
  await storages_storage.setItem('accounts', newAccounts);
}
;// ./src/api/migrations/00020.ts

async function _00020_start() {
  // Remove baseCurrency from storage as it's now handled in global state only
  try {
    await storages_storage.removeItem('baseCurrency');
  } catch {
    // The key doesn't exist
  }
}
;// ./src/api/migrations/index.ts










;// ./src/api/common/helpers.ts















const actualStateVersion = 21;
let migrationEnsurePromise;
function buildLocalTransaction(params, normalizedAddress, subId) {
  const id = buildLocalTxId(params.id, subId);
  return updateActivityMetadata({
    // Local transactions are trusted pending
    status: 'pendingTrusted',
    kind: 'transaction',
    timestamp: Date.now(),
    isIncoming: false,
    normalizedAddress,
    ...params,
    amount: -params.amount,
    id
  });
}
function updateActivityMetadata(activity) {
  if (activity.kind !== 'transaction') {
    return activity;
  }
  const {
    normalizedAddress,
    comment,
    isIncoming,
    nft
  } = activity;
  let {
    metadata = {}
  } = activity;
  const isNftTransfer = Boolean(nft);
  const knownAddresses = getKnownAddresses();
  const hasScamMarkers = comment ? getScamMarkers().some(sm => sm.test(comment)) : false;
  const shouldCheckComment = !hasScamMarkers && comment && isIncoming && (isNftTransfer || comment.toLowerCase().includes('claim'));
  const hasScamInComment = shouldCheckComment ? checkHasScamLink(comment) || checkHasTelegramBotMention(comment) : false;
  if (normalizedAddress in knownAddresses) {
    metadata = {
      ...metadata,
      ...knownAddresses[normalizedAddress]
    };
  }
  if (hasScamMarkers || hasScamInComment) {
    metadata.isScam = true;
  }
  return {
    ...activity,
    metadata
  };
}
let currentOnUpdate;
function connectUpdater(onUpdate) {
  currentOnUpdate = onUpdate;
}
function disconnectUpdater() {
  currentOnUpdate = undefined;
}
function isUpdaterAlive(onUpdate) {
  return currentOnUpdate === onUpdate;
}
function startStorageMigration(onUpdate, ton, accountIds) {
  migrationEnsurePromise = migrateStorage(onUpdate, ton, accountIds).catch(err => {
    var _currentOnUpdate;
    (0,logs/* logDebugError */.SJ)('Migration error', err);
    (_currentOnUpdate = currentOnUpdate) === null || _currentOnUpdate === void 0 || _currentOnUpdate({
      type: 'showError',
      error: 'Migration error'
    });
  });
  return migrationEnsurePromise;
}
function waitStorageMigration() {
  return migrationEnsurePromise;
}
async function migrateStorage(onUpdate, ton, accountIds) {
  let version = Number(await storages_storage.getItem('stateVersion', true));
  if (version === actualStateVersion) {
    return;
  }
  if (config/* IS_CORE_WALLET */.TI6 && !version) {
    await migrateCoreWallet(onUpdate);
  }
  if (config/* IS_CAPACITOR */.UMQ && !version) {
    if (await storages_storage.getItem('accounts', true)) {
      // Fix broken version
      version = 10;
    } else {
      // Prepare for migration to secure storage
      const idbVersion = await idb.getItem('stateVersion');
      if (idbVersion) {
        version = Number(idbVersion);
      }
    }
  }

  // Migration to chrome.storage
  if (config/* IS_EXTENSION */.hL1 && !version && !(await storages_storage.getItem('addresses'))) {
    version = await idb.getItem('stateVersion');
    if (version) {
      // Switching from IndexedDB to `chrome.storage.local`
      const idbData = await idb.getAll();
      await storages_storage.setMany(idbData);
    }
  }
  if (!version) {
    await storages_storage.setItem('stateVersion', actualStateVersion);
    return;
  }

  // First version (v1)
  if (!version) {
    // Support multi-accounts
    const mnemonicEncrypted = await storages_storage.getItem('mnemonicEncrypted');
    if (mnemonicEncrypted) {
      await storages_storage.setItem('mnemonicsEncrypted', JSON.stringify({
        [config/* MAIN_ACCOUNT_ID */.Kih]: mnemonicEncrypted
      }));
      await storages_storage.removeItem('mnemonicEncrypted');
    }

    // Change accountId format ('0' -> '0-ton', '1-ton-mainnet' -> '1-ton')
    if (!mnemonicEncrypted) {
      for (const field of ['mnemonicsEncrypted', 'addresses', 'publicKeys']) {
        const raw = await storages_storage.getItem(field);
        if (!raw) continue;
        const oldItem = JSON.parse(raw);
        const newItem = Object.entries(oldItem).reduce((prevValue, _ref) => {
          let [accountId, data] = _ref;
          const [id, chain = 'ton'] = accountId.split('-');
          const internalAccountId = [id, chain].join('-');
          prevValue[internalAccountId] = data;
          return prevValue;
        }, {});
        await storages_storage.setItem(field, JSON.stringify(newItem));
      }
    }
    version = 1;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 1) {
    const addresses = await storages_storage.getItem('addresses');
    if (addresses && addresses.includes('-undefined')) {
      for (const field of ['mnemonicsEncrypted', 'addresses', 'publicKeys']) {
        const newValue = (await storages_storage.getItem(field)).replace('-undefined', '-ton');
        await storages_storage.setItem(field, newValue);
      }
    }
    version = 2;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version >= 2 && version <= 4) {
    for (const key of ['addresses', 'mnemonicsEncrypted', 'publicKeys', 'dapps']) {
      const rawData = await storages_storage.getItem(key);
      if (typeof rawData === 'string') {
        await storages_storage.setItem(key, JSON.parse(rawData));
      }
    }
    version = 5;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 5) {
    const dapps = await storages_storage.getItem('dapps');
    if (dapps) {
      for (const accountDapps of Object.values(dapps)) {
        for (const dapp of Object.values(accountDapps)) {
          dapp.connectedAt = 1;
        }
      }
      await storages_storage.setItem('dapps', dapps);
    }
    version = 6;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 6) {
    for (const key of ['addresses', 'mnemonicsEncrypted', 'publicKeys', 'accounts', 'dapps']) {
      let data = await storages_storage.getItem(key);
      if (!data) continue;
      data = Object.entries(data).reduce((byAccountId, _ref2) => {
        let [internalAccountId, accountData] = _ref2;
        const parsed = parseAccountId(internalAccountId);
        const mainnetAccountId = buildOldAccountId({
          ...parsed,
          network: 'mainnet'
        });
        const testnetAccountId = buildOldAccountId({
          ...parsed,
          network: 'testnet'
        });
        return {
          ...byAccountId,
          [mainnetAccountId]: accountData,
          [testnetAccountId]: accountData
        };
      }, {});
      await storages_storage.setItem(key, data);
    }
    version = 7;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 7) {
    const addresses = await storages_storage.getItem('addresses');
    if (addresses) {
      const publicKeys = await storages_storage.getItem('publicKeys');
      const accounts = (await storages_storage.getItem('accounts')) ?? {};
      for (const [accountId, oldAddress] of Object.entries(addresses)) {
        const newAddress = (0,tonCore/* toBase64Address */.vn)(oldAddress, false);
        accounts[accountId] = {
          ...accounts[accountId],
          address: newAddress,
          publicKey: publicKeys[accountId]
        };
        onUpdate({
          type: 'updateAccount',
          accountId,
          chain: 'ton',
          address: newAddress
        });
      }
      await storages_storage.setItem('accounts', accounts);
      await storages_storage.removeItem('addresses');
      await storages_storage.removeItem('publicKeys');
    }
    version = 8;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 8) {
    if ((0,api_environment/* getEnvironment */.u)().isSseSupported) {
      const dapps = await storages_storage.getItem('dapps');
      if (dapps) {
        const items = [];
        for (const accountDapps of Object.values(dapps)) {
          for (const dapp of Object.values(accountDapps)) {
            var _dapp$sse;
            if ((_dapp$sse = dapp.sse) !== null && _dapp$sse !== void 0 && _dapp$sse.appClientId) {
              var _dapp$sse2;
              items.push({
                clientId: (_dapp$sse2 = dapp.sse) === null || _dapp$sse2 === void 0 ? void 0 : _dapp$sse2.appClientId
              });
            }
          }
        }
      }
    }
    version = 9;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 9) {
    if (config/* IS_CAPACITOR */.UMQ) {
      const data = await idb.getAll();
      for (const [key, value] of Object.entries(data)) {
        await capacitorStorage.setItem(key, value);
        const newValue = await capacitorStorage.getItem(key, true);
        if (!areDeepEqual(value, newValue)) {
          throw new Error('Migration error!');
        }
      }
      await idb.clear();
    }
    version = 10;
    await storages_storage.setItem('stateVersion', version);
  }
  let isIosKeychainModeMigrated = false;
  if ((0,api_environment/* getEnvironment */.u)().isIosApp && version >= 10 && version <= 13) {
    await iosBackupAndMigrateKeychainMode();
    isIosKeychainModeMigrated = true;
  }
  if (version === 10 || version === 11 || version === 12) {
    const accounts = await storages_storage.getItem('accounts', true);
    if (accounts) {
      for (const account of Object.values(accounts)) {
        const {
          publicKey,
          address,
          version: walletVersion
        } = account;
        if (walletVersion || !publicKey) continue;
        const publicKeyBytes = (0,utils/* hexToBytes */.aT)(publicKey);
        const walletInfo = ton.pickWalletByAddress('mainnet', publicKeyBytes, address);
        account.version = walletInfo.version;
      }
      await storages_storage.setItem('accounts', accounts);
    }
    version = 13;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 13) {
    const accounts = await storages_storage.getItem('accounts', true);
    if (accounts) {
      for (const [accountId, account] of Object.entries(accounts)) {
        const {
          network
        } = parseAccountId(accountId);
        if (network === 'testnet') {
          account.address = (0,tonCore/* toBase64Address */.vn)(account.address, false, network);
          onUpdate({
            type: 'updateAccount',
            accountId,
            chain: 'ton',
            address: account.address
          });
        }
      }
      version = 14;
      await storages_storage.setItem('accounts', accounts);
    }
  }
  if (version === 14 || version === 15) {
    if ((0,api_environment/* getEnvironment */.u)().isIosApp && !isIosKeychainModeMigrated) {
      await iosBackupAndMigrateKeychainMode();
    }
    version = 16;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 16) {
    await start();
    version = 17;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 17) {
    await _00017_start();
    version = 18;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 18) {
    await _00018_start(accountIds);
    version = 19;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 19) {
    await _00019_start();
    version = 20;
    await storages_storage.setItem('stateVersion', version);
  }
  if (version === 20) {
    await _00020_start();
    version = 21;
    await storages_storage.setItem('stateVersion', version);
  }
}
function buildOldAccountId(account) {
  const {
    id,
    network
  } = account;
  return `${id}-ton-${network}`;
}
async function iosBackupAndMigrateKeychainMode() {
  const keys = await capacitorStorage.getKeys();
  if (keys !== null && keys !== void 0 && keys.length) {
    const items = [];
    for (const key of keys) {
      if (key.startsWith('backup_')) {
        continue;
      }
      const backupKey = `backup_${key}`;
      const value = await capacitorStorage.getItem(key, true);
      (0,util_assert/* assert */.v)(value !== undefined, 'Empty value!');
      await capacitorStorage.setItem(backupKey, value);
      const backupValue = await capacitorStorage.getItem(backupKey);
      (0,util_assert/* assert */.v)(areDeepEqual(value, backupValue), 'Data has not been saved!');
      items.push([key, value]);
    }
    for (const [key, value] of items) {
      let shouldRewrite = false;
      await capacitorStorage.setItem(key, value).catch(() => {
        shouldRewrite = true;
      });
      if (shouldRewrite) {
        await capacitorStorage.removeItem(key);
        await capacitorStorage.setItem(key, value);
      }
    }
  }
}
async function migrateCoreWallet(onUpdate) {
  const currentStorage = config/* IS_EXTENSION */.hL1 ? storages_storage : storages_localStorage;
  const [
  // Default Core Wallet version is v3R2
  // https://github.com/toncenter/ton-wallet/blob/master/src/js/Controller.js#L128
  walletVersion = 'v3R2', isTestnet, address, words, publicKey, isTonProxyEnabled, isTonMagicEnabled] = await Promise.all([currentStorage.getItem('walletVersion'), currentStorage.getItem('isTestnet'), currentStorage.getItem('address'), currentStorage.getItem('words'), currentStorage.getItem('publicKey'), currentStorage.getItem('proxy'), currentStorage.getItem('magic')]);
  if (isTestnet) {
    onUpdate({
      type: 'updateSettings',
      settings: {
        isTestnet: true
      }
    });
  }
  const network = isTestnet ? 'testnet' : 'mainnet';
  const accountId = `0-ton-${network}`;
  if (address && words && publicKey) {
    const secondNetwork = network === 'mainnet' ? 'testnet' : 'mainnet';
    const secondAccountId = `0-ton-${secondNetwork}`;
    const secondAddress = (0,tonCore/* toBase64Address */.vn)(address, false, secondNetwork);
    const newAccountById = {};
    newAccountById[accountId] = {
      type: 'ton',
      mnemonicEncrypted: words,
      byChain: {
        ton: {
          address,
          version: walletVersion,
          publicKey,
          index: 0
        }
      }
    };
    newAccountById[secondAccountId] = {
      type: 'ton',
      mnemonicEncrypted: words,
      byChain: {
        ton: {
          address: secondAddress,
          version: walletVersion,
          publicKey,
          index: 0
        }
      }
    };
    await storages_storage.setItem('accounts', newAccountById);
    onUpdate({
      type: 'migrateCoreApplication',
      isTestnet,
      accountId,
      address,
      secondAccountId,
      secondAddress,
      isTonProxyEnabled,
      isTonMagicEnabled
    });

    // Clean up storage after migrate the app from Core Wallet
    ['walletVersion', 'isTestnet', 'words', 'address', 'publicKey', 'magic', 'proxy', 'isLedger', 'ledgerTransportType', '__time', 'isDebug'].forEach(key => {
      void currentStorage.removeItem(key);
    });
  }
}
;// ./src/api/chains/ton/toncenter/actions.ts

















const RAW_LIQUID_POOL_ADDRESS = '0:F6FF877DD4CE1355B101572045F09D54C29309737EB52CA542CFA6C195F7CC5B';
const RAW_NFT_CARD_COLLECTION = '0:901362FD85FC31D55F2C82617D91EADA1F1D6B34AF559A047572D56F20D046CA';
const TME_RENEW_HASH_SUFFIX = '0000000000000000000000000000000000000000000000';
const RAW_NFT_COLLECTIONS_TO_RELOAD_METADATA = new Set([RAW_NFT_CARD_COLLECTION]);
async function fetchActions(options) {
  const {
    network,
    filter,
    limit,
    toTimestamp,
    fromTimestamp,
    shouldIncludeFrom,
    shouldIncludeTo,
    walletAddress,
    includeTypes,
    excludeTypes
  } = options;
  const data = {
    account: 'address' in filter ? filter.address : undefined,
    action_id: 'actionId' in filter ? filter.actionId : undefined,
    limit,
    start_utime: fromTimestamp && toSeconds(fromTimestamp) + (!shouldIncludeFrom ? 1 : 0),
    end_utime: toTimestamp && toSeconds(toTimestamp) - (!shouldIncludeTo ? 1 : 0),
    sort: 'desc',
    ...((includeTypes === null || includeTypes === void 0 ? void 0 : includeTypes.length) && {
      action_type: includeTypes.join(',')
    }),
    ...((excludeTypes === null || excludeTypes === void 0 ? void 0 : excludeTypes.length) && {
      exclude_action_type: excludeTypes.join(',')
    })
  };

  // The API sorts the actions by trace_end_lt + trace_id + action_end_lt + action_id.
  // That is, the actions are grouped by the trace, and sorted by the time inside the groups.
  const {
    actions: rawActions,
    address_book: addressBook,
    metadata = {}
  } = await other_callToncenterV3(network, '/actions', data);
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  return parseActions(network, walletAddress, rawActions, addressBook, metadata, nftSuperCollectionsByCollectionAddress);
}
async function fetchPendingActions(network, address) {
  const {
    actions,
    address_book: addressBook,
    metadata = {}
  } = await other_callToncenterV3(network, '/pendingActions', {
    account: address
  });
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  return parseActions(network, address, actions, addressBook, metadata, nftSuperCollectionsByCollectionAddress, true);
}
function parseActions(network, walletAddress, rawActions, addressBook, metadata, nftSuperCollectionsByCollectionAddress, isPending) {
  const options = {
    network,
    addressBook,
    walletAddress,
    metadata,
    nftSuperCollectionsByCollectionAddress,
    isPending
  };
  const activities = [];
  for (const action of rawActions) {
    activities.push(...parseAction(action, options));
  }
  return activities;
}
function parseAction(action, options) {
  let result = [];
  switch (action.type) {
    case 'ton_transfer':
      {
        result = [parseTonTransfer(action, options)];
        break;
      }
    case 'call_contract':
      {
        result = [parseCallContract(action, options)];
        break;
      }
    case 'contract_deploy':
      {
        result = [parseContractDeploy(action, options)];
        break;
      }
    case 'nft_transfer':
      {
        result = [parseNftTransfer(action, options)];
        break;
      }
    case 'nft_mint':
      {
        result = [parseNftMint(action, options)];
        break;
      }
    case 'jetton_transfer':
      {
        result = [parseJettonTransfer(action, options)];
        break;
      }
    case 'jetton_mint':
      {
        result = [parseJettonMint(action, options)];
        break;
      }
    case 'jetton_burn':
      {
        result = [parseJettonBurn(action, options)];
        break;
      }
    case 'stake_deposit':
      {
        result = [parseStakeDeposit(action, options)];
        break;
      }
    case 'stake_withdrawal':
      {
        result = [parseStakeWithdrawal(action, options)];
        break;
      }
    case 'stake_withdrawal_request':
      {
        result = [parseStakeWithdrawalRequest(action, options)];
        break;
      }
    case 'jetton_swap':
      {
        result = [parseJettonSwap(action, options)];
        break;
      }
    case 'change_dns':
    case 'delete_dns':
    case 'renew_dns':
      {
        result = [parseDns(action, options)];
        break;
      }
    case 'auction_bid':
      {
        result = [parseAuctionBid(action, options)];
        break;
      }
    case 'dex_deposit_liquidity':
      {
        result = parseLiquidityDeposit(action, options);
        break;
      }
    case 'dex_withdraw_liquidity':
      {
        result = parseLiquidityWithdraw(action, options);
        break;
      }
  }
  for (let i = 0; i < result.length; i++) {
    var _activity$nft;
    const activity = result[i];
    if (!activity) continue;
    if ('nft' in activity && (_activity$nft = activity.nft) !== null && _activity$nft !== void 0 && _activity$nft.isHidden) {
      activity.shouldHide = true;
    }
    if (activity.kind === 'transaction' && !activity.isIncoming) {
      activity.shouldLoadDetails ??= true;
    }
    result[i] = updateActivityMetadata(activity);
  }
  return result.filter(Boolean);
}
function parseTonTransfer(action, options) {
  const {
    details,
    details: {
      encrypted: isEncrypted,
      source,
      destination,
      value
    }
  } = action;
  const comment = !isEncrypted && details.comment || undefined;
  const encryptedComment = isEncrypted && details.comment || undefined;
  return {
    ...parseCommonFields(action, options, source, destination, value),
    slug: config/* TONCOIN */.Tu9.slug,
    comment,
    encryptedComment
  };
}
function parseCallContract(action, options) {
  const {
    walletAddress
  } = options;
  const {
    details,
    details: {
      source,
      destination,
      value
    }
  } = action;
  const common = parseCommonFields(action, options, source, destination, value);
  const opCode = Number(details.opcode);
  const shouldHide = !common.isIncoming && [constants/* OpCode */.$G.OurFee, constants/* TeleitemOpCode */.s1.Ok].includes(opCode);
  let type;
  if (constants/* EXCESS_OP_CODES */.br.includes(opCode)) {
    type = 'excess';
    // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
  } else if (opCode === constants/* OpCode */.$G.Bounced) {
    type = 'bounced';
  } else if ([constants/* JettonStakingOpCode */.CU.UnstakeRequest, constants/* JettonStakingOpCode */.CU.ClaimRewards].includes(opCode)) {
    type = 'unstakeRequest';
  } else if (common.toAddress !== walletAddress) {
    type = 'callContract';
  }
  return {
    ...common,
    slug: config/* TONCOIN */.Tu9.slug,
    type,
    shouldHide
  };
}
function parseContractDeploy(action, options) {
  const {
    details: {
      source,
      destination
    }
  } = action;
  if (!source) {
    return undefined;
  }

  // Deploy action is additional and always occurs alongside others (duplicating amount), so we hide amount and fee.

  return {
    ...parseCommonFields(action, options, source, destination),
    slug: config/* TONCOIN */.Tu9.slug,
    type: 'contractDeploy',
    shouldLoadDetails: false,
    fee: 0n
  };
}
function parseJettonTransfer(action, options) {
  const {
    addressBook
  } = options;
  const {
    details,
    details: {
      is_encrypted_comment: isEncrypted,
      forward_payload: forwardPayload,
      sender,
      receiver,
      amount
    }
  } = action;
  const common = parseCommonFields(action, options, sender, receiver, amount);
  const {
    isIncoming,
    toAddress,
    fromAddress
  } = common;
  const comment = !isEncrypted && details.comment || undefined;
  const encryptedComment = isEncrypted && details.comment || undefined;
  const tokenAddress = addressBook[details.asset].user_friendly;
  const slug = buildTokenSlug('ton', tokenAddress);
  const shouldHide = !isIncoming && forwardPayload === constants/* OUR_FEE_PAYLOAD_BOC */.SQ;
  let type;
  if (toAddress === config/* BURN_ADDRESS */.pV9) {
    type = 'burn';
  } else if (toAddress === config/* MYCOIN_STAKING_POOL */.xrY) {
    type = 'stake';
  } else if (fromAddress === config/* MYCOIN_STAKING_POOL */.xrY) {
    type = 'unstake';
  } else if (tokenAddress === config/* TON_USDE */.wpN.tokenAddress) {
    if (fromAddress === config/* ETHENA_STAKING_VAULT */.BV6) {
      type = 'unstake';
    } else if (toAddress === config/* ETHENA_STAKING_VAULT */.BV6) {
      type = 'stake';
    }
  }
  return {
    ...common,
    slug,
    comment,
    encryptedComment,
    shouldHide,
    type
  };
}
function parseJettonMint(action, options) {
  const {
    addressBook
  } = options;
  const {
    details,
    details: {
      receiver,
      receiver_jetton_wallet: jettonWalletRaw,
      amount
    }
  } = action;
  const tokenAddress = addressBook[details.asset].user_friendly;
  const slug = buildTokenSlug('ton', tokenAddress);
  let commonFields;
  let type = 'mint';
  if (tokenAddress === config/* TON_TSUSDE */.VG8.tokenAddress && action.end_lt !== action.trace_end_lt) {
    // TODO After fix on Toncenter's side, move it to transfer parsing (currently it's mistakenly detected as mint)
    type = 'unstakeRequest';
    commonFields = {
      ...parseCommonFields(action, options, receiver, receiver, 0),
      toAddress: config/* ETHENA_STAKING_VAULT */.BV6,
      isIncoming: false,
      normalizedAddress: config/* ETHENA_STAKING_VAULT */.BV6
    };
  } else {
    commonFields = parseCommonFields(action, options, jettonWalletRaw, receiver, amount);
  }
  return {
    ...commonFields,
    slug,
    type
  };
}
function parseJettonBurn(action, options) {
  const {
    network
  } = options;
  const {
    details,
    details: {
      owner,
      owner_jetton_wallet: jettonWallet,
      amount
    }
  } = action;
  const slug = buildTokenSlug('ton', (0,tonCore/* toBase64Address */.vn)(details.asset, true, network));
  return {
    ...parseCommonFields(action, options, owner, jettonWallet, amount),
    slug,
    type: 'burn'
  };
}
function parseNftTransfer(action, options) {
  const {
    metadata,
    walletAddress,
    addressBook,
    nftSuperCollectionsByCollectionAddress
  } = options;
  const {
    nft_item_index: index,
    nft_item: rawNftAddress,
    nft_collection: rawCollectionAddress,
    new_owner: newOwner,
    old_owner: oldOwner,
    forward_payload: forwardPayload,
    is_purchase: isPurchase,
    price,
    response_destination: responseDestination,
    marketplace
  } = action.details;
  const {
    nft,
    isMetadataMissing
  } = parseToncenterNft(metadata, rawNftAddress, nftSuperCollectionsByCollectionAddress, rawCollectionAddress ?? undefined, index ?? undefined);
  let shouldHide = !nft && rawCollectionAddress ? isHiddenCollection(rawCollectionAddress, metadata) : undefined;

  // Hide duplicate NFT transfer actions that appear when listing NFT on Getgems marketplace
  // These are actions where old_owner and new_owner are not the wallet address,
  // but wallet address is only in response_destination
  if (oldOwner && newOwner && responseDestination) {
    var _addressBook$oldOwner, _addressBook$newOwner;
    const oldOwnerAddress = (_addressBook$oldOwner = addressBook[oldOwner]) === null || _addressBook$oldOwner === void 0 ? void 0 : _addressBook$oldOwner.user_friendly;
    const newOwnerAddress = (_addressBook$newOwner = addressBook[newOwner]) === null || _addressBook$newOwner === void 0 ? void 0 : _addressBook$newOwner.user_friendly;
    if (oldOwnerAddress !== walletAddress && newOwnerAddress !== walletAddress) {
      shouldHide = true;
    }
  }
  const activity = {
    ...parseCommonFields(action, options, oldOwner ?? rawNftAddress, newOwner),
    shouldHide,
    slug: config/* TONCOIN */.Tu9.slug,
    nft,
    comment: forwardPayload && safeReadComment(forwardPayload) || undefined,
    shouldReload: isMetadataMissing && RAW_NFT_COLLECTIONS_TO_RELOAD_METADATA.has(action.details.nft_collection) || undefined
  };
  if (activity.toAddress === config/* BURN_ADDRESS */.pV9) {
    activity.type = 'burn';
  } else if (isPurchase && price) {
    var _addressBook$newOwner2;
    const isBuying = ((_addressBook$newOwner2 = addressBook[newOwner]) === null || _addressBook$newOwner2 === void 0 ? void 0 : _addressBook$newOwner2.user_friendly) === walletAddress;
    activity.type = 'nftTrade';
    activity.isIncoming = !isBuying;
    activity.amount = isBuying ? -BigInt(price) : BigInt(price);
    activity.extra = {
      marketplace: marketplace ?? undefined
    };
  }
  return activity;
}
function parseNftMint(action, options) {
  const {
    metadata,
    nftSuperCollectionsByCollectionAddress
  } = options;
  const {
    owner,
    nft_item_index: index,
    nft_item: rawNftAddress,
    nft_collection: rawCollectionAddress
  } = action.details;
  const {
    nft,
    isMetadataMissing
  } = parseToncenterNft(metadata, rawNftAddress, nftSuperCollectionsByCollectionAddress, rawCollectionAddress ?? undefined, index ?? undefined);
  return {
    ...parseCommonFields(action, options, owner, rawNftAddress),
    slug: config/* TONCOIN */.Tu9.slug,
    nft,
    type: 'mint',
    shouldReload: isMetadataMissing && RAW_NFT_COLLECTIONS_TO_RELOAD_METADATA.has(action.details.nft_collection) || undefined
  };
}
function isHiddenCollection(rawCollectionAddress, metadata) {
  var _metadata$rawCollecti, _collectionMetadata$n;
  const collectionMetadata = (_metadata$rawCollecti = metadata[rawCollectionAddress]) === null || _metadata$rawCollecti === void 0 ? void 0 : _metadata$rawCollecti.token_info[0];
  return collectionMetadata === null || collectionMetadata === void 0 || (_collectionMetadata$n = collectionMetadata.name) === null || _collectionMetadata$n === void 0 ? void 0 : _collectionMetadata$n.includes('Withdrawal Payout');
}
function parseStakeDeposit(action, options) {
  const {
    details: {
      stake_holder: holder,
      pool,
      amount
    }
  } = action;
  return {
    ...parseCommonFields(action, options, holder, pool, amount),
    slug: config/* TONCOIN */.Tu9.slug,
    type: 'stake'
  };
}
function parseStakeWithdrawal(action, options) {
  const {
    addressBook
  } = options;
  const {
    details,
    details: {
      stake_holder: holder,
      amount
    }
  } = action;

  // Fix issue with old data when pool is null
  const pool = details.pool ?? RAW_LIQUID_POOL_ADDRESS;
  const fixedOptions = pool in addressBook ? options : {
    ...options,
    addressBook: {
      ...addressBook,
      // eslint-disable-next-line no-null/no-null
      [pool]: {
        user_friendly: config/* LIQUID_POOL */.qMf,
        domain: null
      }
    }
  };
  return {
    ...parseCommonFields(action, fixedOptions, pool, holder, amount),
    slug: config/* TONCOIN */.Tu9.slug,
    type: 'unstake',
    shouldLoadDetails: details.provider === 'tonstakers' && !details.payout_nft
  };
}
function parseStakeWithdrawalRequest(action, options) {
  const {
    details: {
      stake_holder: holder,
      pool
    }
  } = action;
  return {
    ...parseCommonFields(action, options, holder, pool, 0),
    // TODO (actions) Replace to real fee
    slug: config/* TONCOIN */.Tu9.slug,
    type: 'unstakeRequest'
  };
}
function parseJettonSwap(action, options) {
  var _parseToncenterJetton, _parseToncenterJetton2;
  const {
    metadata,
    isPending
  } = options;
  const {
    end_utime: endUtime,
    success: isSuccess,
    details: {
      dex_incoming_transfer: {
        amount: fromAmount,
        asset: fromAsset
      },
      dex_outgoing_transfer: {
        amount: toAmount,
        asset: toAsset
      }
    }
  } = action;
  const decimalsFrom = fromAsset && ((_parseToncenterJetton = parseToncenterJetton(fromAsset, metadata)) === null || _parseToncenterJetton === void 0 ? void 0 : _parseToncenterJetton.decimals) || config/* TONCOIN */.Tu9.decimals;
  const decimalsTo = toAsset && ((_parseToncenterJetton2 = parseToncenterJetton(toAsset, metadata)) === null || _parseToncenterJetton2 === void 0 ? void 0 : _parseToncenterJetton2.decimals) || config/* TONCOIN */.Tu9.decimals;
  const fromTokenAddress = fromAsset ? (0,tonCore/* toBase64Address */.vn)(fromAsset, true) : undefined;
  const toTokenAddress = toAsset ? (0,tonCore/* toBase64Address */.vn)(toAsset, true) : undefined;
  const from = fromTokenAddress && fromTokenAddress !== config/* STON_PTON_ADDRESS */.oWZ ? buildTokenSlug('ton', fromTokenAddress) : config/* TONCOIN */.Tu9.slug;
  const to = toTokenAddress && toTokenAddress !== config/* STON_PTON_ADDRESS */.oWZ ? buildTokenSlug('ton', toTokenAddress) : config/* TONCOIN */.Tu9.slug;
  return {
    kind: 'swap',
    id: buildActionActivityId(action),
    timestamp: toMilliseconds(endUtime),
    from,
    fromAmount: (0,util_decimals/* toDecimal */.nI)(BigInt(fromAmount), decimalsFrom),
    to,
    toAmount: (0,util_decimals/* toDecimal */.nI)(BigInt(toAmount), decimalsTo),
    networkFee: '0',
    swapFee: '0',
    ourFee: '0',
    status: isPending ? 'pending' : isSuccess ? 'completed' : 'failed',
    hashes: [],
    externalMsgHashNorm: action.trace_external_hash_norm ?? action.trace_external_hash,
    shouldLoadDetails: true
  };
}
function parseDns(action, options) {
  const {
    metadata,
    nftSuperCollectionsByCollectionAddress
  } = options;
  const {
    details: {
      source,
      asset
    }
  } = action;
  const {
    nft
  } = parseToncenterNft(metadata, asset, nftSuperCollectionsByCollectionAddress);
  let type;
  if (action.type === 'change_dns') {
    const {
      sum_type: sumType
    } = action.details.value;
    if (sumType === 'DNSSmcAddress') {
      type = 'dnsChangeAddress';
    } else if (sumType === 'DNSAdnlAddress') {
      type = 'dnsChangeSite';
    } else if (sumType === 'DNSStorageAddress') {
      type = 'dnsChangeStorage';
    } else if (sumType === 'DNSNextResolver') {
      type = 'dnsChangeSubdomains';
    }
  } else if (action.type === 'renew_dns' || action.type === 'delete_dns' && action.details.hash.endsWith(TME_RENEW_HASH_SUFFIX)) {
    type = 'dnsRenew';
  } else {
    type = 'dnsDelete';
  }
  return {
    ...parseCommonFields(action, options, source, asset, 0),
    // TODO (actions) Replace to real fee
    slug: config/* TONCOIN */.Tu9.slug,
    type,
    nft
  };
}
function parseAuctionBid(action, options) {
  const {
    metadata,
    nftSuperCollectionsByCollectionAddress
  } = options;
  const {
    details
  } = action;
  const {
    bidder,
    auction,
    nft_item_index: index,
    nft_item: rawNftAddress,
    nft_collection: rawCollectionAddress
  } = details;
  const {
    nft
  } = parseToncenterNft(metadata, rawNftAddress ?? undefined, nftSuperCollectionsByCollectionAddress, rawCollectionAddress ?? undefined, index ?? undefined);
  return {
    ...parseCommonFields(action, options, bidder, auction, details.amount),
    slug: config/* TONCOIN */.Tu9.slug,
    type: 'auctionBid',
    nft
  };
}
function parseLiquidityDeposit(action, options) {
  const {
    addressBook
  } = options;
  const {
    details,
    details: {
      source,
      pool,
      destination_liquidity: destinationAddress,
      dex
    }
  } = action;
  const common = parseCommonFields(action, options, source, pool ?? destinationAddress);
  const partialExtended = {
    ...common,
    type: 'liquidityDeposit',
    extra: {
      dex: convertDexId(dex)
    }
  };
  const activities = [{
    ...partialExtended,
    amount: -BigInt(details.amount_1 ?? 0n),
    slug: getAssetSlug(addressBook, details.asset_1)
  }];

  // eslint-disable-next-line no-null/no-null
  if (details.amount_2 !== null) {
    const id = buildActionActivityId(action, 'additional');
    activities.push({
      ...partialExtended,
      id,
      amount: -BigInt(details.amount_2),
      slug: getAssetSlug(addressBook, details.asset_2)
    });
  }
  return activities;
}
function parseLiquidityWithdraw(action, options) {
  const {
    addressBook
  } = options;
  const {
    details,
    details: {
      source,
      pool,
      dex
    }
  } = action;
  const common = parseCommonFields(action, options, pool, source);
  const partialExtended = {
    ...common,
    shouldLoadDetails: true,
    type: 'liquidityWithdraw',
    extra: {
      dex: convertDexId(dex)
    }
  };
  const additionalId = buildActionActivityId(action, 'additional');
  return [{
    ...partialExtended,
    amount: BigInt(details.amount_1),
    slug: getAssetSlug(addressBook, details.asset_1)
  }, {
    ...partialExtended,
    id: additionalId,
    amount: BigInt(details.amount_2),
    slug: getAssetSlug(addressBook, details.asset_2)
  }];
}
function getAssetSlug(addressBook, rawAddress) {
  return rawAddress ? buildTokenSlug('ton', addressBook[rawAddress].user_friendly) : config/* TONCOIN */.Tu9.slug;
}
function parseCommonFields(action, options, rawFromAddress, rawToAddress) {
  let amountString = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
  const id = buildActionActivityId(action);
  const {
    walletAddress,
    network,
    addressBook,
    isPending
  } = options;
  const fromAddress = addressBook[rawFromAddress].user_friendly;
  const toAddress = addressBook[rawToAddress].user_friendly;
  const isIncoming = toAddress === walletAddress;
  const normalizedAddress = (0,tonCore/* toBase64Address */.vn)(isIncoming ? fromAddress : toAddress, true, network);
  const amount = isIncoming ? BigInt(amountString) : -BigInt(amountString);
  return {
    kind: 'transaction',
    id,
    timestamp: toMilliseconds(action.end_utime),
    externalMsgHashNorm: action.trace_external_hash_norm ?? action.trace_external_hash,
    fee: 0n,
    // Calculated when TransactionModal opens
    fromAddress,
    toAddress,
    isIncoming,
    normalizedAddress,
    amount,
    // Pending actions from Toncenter are not trusted
    status: isPending ? 'pending' : action.success ? 'completed' : 'failed'
  };
}
function parseToncenterNft(metadataMap, rawNftAddress, nftSuperCollectionsByCollectionAddress, rawCollectionAddress, index) {
  try {
    const nftMetadata = extractMetadata(rawNftAddress, metadataMap, 'nft_items');
    if (!nftMetadata) {
      return {
        isMetadataMissing: true
      };
    }
    const {
      name,
      description,
      extra
    } = nftMetadata;
    let {
      image
    } = nftMetadata;
    const lottie = extra !== null && extra !== void 0 && extra.lottie ? (0,util_fetch/* getProxiedLottieUrl */.I5)(extra.lottie) : undefined;
    const nftAddress = (0,tonCore/* toBase64Address */.vn)(rawNftAddress, true);
    const collectionMetadata = rawCollectionAddress ? extractMetadata(rawCollectionAddress, metadataMap, 'nft_collections') : undefined;
    const collectionAddress = rawCollectionAddress ? (0,tonCore/* toBase64Address */.vn)(rawCollectionAddress, true) : undefined;

    // TODO (actions) Determine that this is a domain by the collection address once Toncenter adds it
    const domain = (extra === null || extra === void 0 ? void 0 : extra.domain) ?? name ?? '';
    const {
      zone: domainZone,
      base: domainBase
    } = (0,dns/* getDnsDomainZone */.u_)(domain) ?? {};
    if (domainZone && (!collectionAddress || !image)) {
      if (domainZone.suffixes[0] === 'ton') {
        image = `${config/* DNS_IMAGE_GEN_URL */.X7L}${domainBase}`;
      }
      const nft = (0,iteratees/* omitUndefined */.Oy)({
        index: Number(index),
        name: domain,
        address: nftAddress,
        thumbnail: (extra === null || extra === void 0 ? void 0 : extra._image_medium) ?? image,
        image: image,
        description,
        isOnSale: false,
        // TODO (actions) Replace with real value when Toncenter supports it
        collectionAddress: collectionAddress ?? domainZone.resolver,
        collectionName: domainZone.collectionName,
        metadata: {
          ...(lottie && {
            lottie
          })
        }
      });
      return {
        nft
      };
    }
    let hasScamLink = false;
    if (!collectionAddress || !checkIsTrustedCollection(collectionAddress)) {
      for (const text of [name, description].filter(Boolean)) {
        if (checkHasScamLink(text)) {
          hasScamLink = true;
        }
      }
    }
    const isScam = hasScamLink; // TODO (actions) Replace with real value when Toncenter supports it
    const isHidden = (extra === null || extra === void 0 ? void 0 : extra.render_type) === 'hidden' || isScam;
    const isFragmentGift = getIsFragmentGift(nftSuperCollectionsByCollectionAddress, collectionAddress);
    const isMtwCard = collectionAddress === config/* MTW_CARDS_COLLECTION */.qL;
    const fixedImage = image ? (0,util_fetch/* fixIpfsUrl */.fU)(image) : undefined;
    const thumbnail = (extra === null || extra === void 0 ? void 0 : extra._image_medium) ?? fixedImage;
    const nft = (0,iteratees/* omitUndefined */.Oy)({
      index: Number(index),
      name: name,
      address: nftAddress,
      thumbnail,
      image: fixedImage,
      description,
      isOnSale: false,
      // TODO (actions) Replace with real value when Toncenter supports it
      isHidden,
      metadata: {
        ...(isFragmentGift && {
          fragmentUrl: image.replace(config/* NFT_FRAGMENT_GIFT_IMAGE_TO_URL_REGEX */.Pjb, 'https://$1')
        }),
        // `id` must be set to `index + 1`. Unlike TonApi where this field is preformatted,
        // we need to manually adjust it here due to data source differences.
        ...(isMtwCard && buildMtwCardsNftMetadata({
          id: Number(index || 0) + 1,
          image,
          attributes: extra === null || extra === void 0 ? void 0 : extra.attributes
        }))
      },
      ...(collectionAddress && {
        collectionAddress,
        collectionName: collectionMetadata === null || collectionMetadata === void 0 ? void 0 : collectionMetadata.name,
        isOnFragment: isFragmentGift || config/* NFT_FRAGMENT_COLLECTIONS */.q5n.includes(rawCollectionAddress),
        isTelegramGift: isFragmentGift
      })
    });
    return {
      nft
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('parseToncenterNft', err);
    return {};
  }
}
function parseToncenterJetton(rawAddress, metadata) {
  const tokenAddress = (0,tonCore/* toBase64Address */.vn)(rawAddress, true);
  const slug = buildTokenSlug('ton', tokenAddress);
  const token = getTokenBySlug(slug);
  if (token) {
    return token;
  }
  const jettonMetadata = extractMetadata(rawAddress, metadata, 'jetton_masters');
  if (!jettonMetadata) {
    return undefined;
  }
  return {
    tokenAddress,
    slug,
    chain: 'ton',
    name: jettonMetadata.name,
    symbol: jettonMetadata.symbol,
    image: jettonMetadata.image,
    decimals: Number(jettonMetadata.extra.decimals)
  };
}
function extractMetadata(rawAddress, metadata, type) {
  var _data$token_info;
  const data = metadata[rawAddress];
  if (!data || !data.is_indexed) return undefined;
  return (_data$token_info = data.token_info) === null || _data$token_info === void 0 ? void 0 : _data$token_info.find(tokenInfo => tokenInfo.type === type);
}
function safeReadComment(payloadBase64) {
  return (0,safeExec/* default */.A)(() => {
    const cell = core_dist.Cell.fromBase64(payloadBase64);
    if (cell.isExotic) return undefined;
    return readComment(cell.asSlice());
  });
}
function buildActionActivityId(action, type) {
  // `lt` in activity ID is needed for sorting when timestamps are same.
  // The sorting is tuned to match the Toncenter API sorting as close as possible.
  const subId = `${action.start_lt}-${action.action_id}`;
  return buildTxId(action.trace_id ?? action.trace_external_hash_norm ?? action.trace_external_hash, subId, type);
}
function parseActionActivityId(id) {
  const {
    hash: traceId,
    subId
  } = parseTxId(id);
  const [startLt, actionId] = subId.split('-');
  return {
    traceId,
    startLt,
    actionId
  };
}
function convertDexId(toncenterDex) {
  switch (toncenterDex) {
    case 'dedust':
      return 'dedust';
    case 'stonfi':
    case 'stonfi_v2':
      return 'ston';
    default:
      return undefined;
  }
}
;// ./src/util/activities/order.ts



function compareActivities(a, b) {
  let isAsc = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // The activity sorting is tuned to match the Toncenter API sorting as close as possible.
  // Putting the pending activities first, because when they get confirmed, their timestamp gets bigger than any current
  // confirmed activity timestamp. This reduces the movement in the activity list.
  let value = (getIsActivityPending(a) ? 1 : 0) - (getIsActivityPending(b) ? 1 : 0);
  if (value === 0) {
    value = a.timestamp - b.timestamp;
    if (value === 0) {
      value = a.id > b.id ? 1 : a.id < b.id ? -1 : 0;
    }
  }
  return isAsc ? value : -value;
}

/**
 * Makes sure `activities` are suitable for `mergeSortedActivities` input.
 * Use the `mergeSortedActivities` function instead when possible.
 */
function sortActivities(activities, isAsc) {
  const uniqueActivities = (0,iteratees/* uniqueByKey */.sq)(activities, 'id');
  return uniqueActivities.sort((a1, a2) => compareActivities(a1, a2, isAsc));
}

/**
 * Makes sure `ids` are suitable for `mergeSortedActivityIds` input.
 * Use the `mergeSortedActivityIds` function instead when possible.
 */
function sortActivityIds(activityById, ids, isAsc) {
  const uniqueIds = unique(ids);
  return uniqueIds.sort((id1, id2) => compareActivities(activityById[id1], activityById[id2], isAsc));
}
function mergeSortedActivities() {
  for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {
    lists[_key] = arguments[_key];
  }
  // It's hard to make sure the input is sorted, so we check and sort just in case.
  // Otherwise, there may be unwanted duplicates in the returned array.
  for (let i = 0; i < lists.length; i++) {
    if (!areActivitiesSortedAndUnique(lists[i])) {
      (0,logs/* logDebugError */.SJ)(`Activity list ${i} is unsorted or has duplicates`, {
        stack: new Error().stack
      });
      lists[i] = sortActivities(lists[i]);
    }
  }
  return (0,iteratees/* mergeSortedArrays */.yQ)(lists, (a1, a2) => compareActivities(a1, a2), true);
}
function mergeSortedActivityIds(activityById) {
  for (var _len2 = arguments.length, lists = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    lists[_key2 - 1] = arguments[_key2];
  }
  // It's hard to make sure the input is sorted, so we check and sort just in case.
  // Otherwise, there may be unwanted duplicates in the returned array.
  for (let i = 0; i < lists.length; i++) {
    if (!areActivityIdsSortedAndUnique(activityById, lists[i])) {
      logDebugError(`Activity id list ${i} is unsorted or has duplicates`, {
        stack: new Error().stack
      });
      lists[i] = sortActivityIds(activityById, lists[i]);
    }
  }
  return mergeSortedArrays(lists, (id1, id2) => compareActivities(activityById[id1], activityById[id2]), true);
}
function mergeSortedActivitiesToMaxTime() {
  for (var _len3 = arguments.length, lists = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    lists[_key3] = arguments[_key3];
  }
  const fromTimestamp = Math.max(...lists.map(activities => activities.length ? activities[activities.length - 1].timestamp : -Infinity));
  const filterPredicate = _ref => {
    let {
      timestamp
    } = _ref;
    return timestamp >= fromTimestamp;
  };
  return mergeSortedActivities(...lists.map(activities => activities.filter(filterPredicate)));
}
function mergeSortedActivityIdsToMaxTime(activityById) {
  for (var _len4 = arguments.length, lists = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
    lists[_key4 - 1] = arguments[_key4];
  }
  const fromTimestamp = Math.max(...lists.map(ids => ids.length ? activityById[ids[ids.length - 1]].timestamp : -Infinity));
  const filterPredicate = id => activityById[id].timestamp >= fromTimestamp;
  return mergeSortedActivityIds(activityById, ...lists.map(ids => ids.filter(filterPredicate)));
}
function areActivitiesSortedAndUnique(activities, isAsc) {
  for (let i = 1; i < activities.length; i++) {
    if (compareActivities(activities[i - 1], activities[i], isAsc) >= 0) {
      return false;
    }
  }
  return true;
}
function areActivityIdsSortedAndUnique(activityById, ids, isAsc) {
  for (let i = 1; i < ids.length; i++) {
    if (compareActivities(activityById[ids[i - 1]], activityById[ids[i]], isAsc) >= 0) {
      return false;
    }
  }
  return true;
}
;// ./src/util/callbacks.ts
function createCallbackManager() {
  const callbacks = new Set();
  function addCallback(cb) {
    callbacks.add(cb);
    return () => {
      removeCallback(cb);
    };
  }
  function removeCallback(cb) {
    callbacks.delete(cb);
  }
  function runCallbacks() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    callbacks.forEach(callback => {
      callback(...args);
    });
  }
  function hasCallbacks() {
    return Boolean(callbacks.size);
  }
  return {
    runCallbacks,
    addCallback,
    removeCallback,
    hasCallbacks
  };
}
class EventEmitter {
  channels = new Map();
  on(name, handler) {
    this.resolveChannel(name).addCallback(handler);
    return this;
  }
  removeListener(name, handler) {
    this.resolveChannel(name).removeCallback(handler);
    return this;
  }
  emit(name) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    this.resolveChannel(name).runCallbacks(...args);
    return this;
  }
  resolveChannel(name) {
    let channel = this.channels.get(name);
    if (!channel) {
      channel = createCallbackManager();
      this.channels.set(name, channel);
    }
    return channel;
  }
}
// EXTERNAL MODULE: ./src/util/schedulers.ts
var schedulers = __webpack_require__(37836);
;// ./src/util/focusAwareDelay.ts


const focusListeners = createCallbackManager();
let isFocused = true;

/**
 * Calls `cb` when `ms` milliseconds pass if the app is focused at that moment.
 * Otherwise, waits until the app is focused or `forceMs` millisecond pass (since the very beginning).
 * Returns a function to cancel the timers.
 */
function onFocusAwareDelay(ms, forceMs, cb) {
  let cleanup;
  const callCb = () => {
    cleanup();
    cb();
  };

  // Stage 1: waiting for the minimum time to pass
  cleanup = (0,schedulers/* setCancellableTimeout */.Gf)(ms, () => {
    if (isFocused) {
      callCb();
    } else {
      // If the window is not focused, stage2: waiting for either the maximum time to pass or the window to get focused
      const unsubscribeFocus = focusListeners.addCallback(callCb);
      const cancelSecondTimeout = (0,schedulers/* setCancellableTimeout */.Gf)(forceMs - ms, callCb);
      cleanup = () => {
        unsubscribeFocus();
        cancelSecondTimeout();
      };
    }
  });

  // We don't return just `cleanup` because it's not constant
  return () => cleanup();
}

/**
 * @see onFocusAwareDelay
 */
function focusAwareDelay(ms, msWhenNotFocused) {
  return new Promise(resolve => {
    onFocusAwareDelay(ms, msWhenNotFocused, resolve);
  });
}
function setIsAppFocused(_isFocused) {
  isFocused = _isFocused;
  if (_isFocused) {
    focusListeners.runCallbacks();
  }
}
// EXTERNAL MODULE: ./src/util/handleError.ts + 1 modules
var handleError = __webpack_require__(48217);
;// ./src/api/constants.ts
const SEC = 1000;
const MINUTE = 60 * SEC;
const DAYS_IN_YEAR = 365;
const FIRST_TRANSACTIONS_LIMIT = 50;
const FAKE_TX_ID = 'fakeTxId';
;// ./src/api/common/polling/utils.ts




const activeWalletTiming = {
  updateOnStart: true,
  minUpdateDelay: {
    focused: SEC,
    notFocused: 3 * SEC
  },
  fallbackUpdateStartDelay: 3 * SEC,
  fallbackUpdatePeriod: {
    focused: 1.1 * SEC,
    notFocused: 10 * SEC
  },
  forceUpdatePeriod: {
    focused: MINUTE,
    notFocused: 2 * MINUTE
  }
};
const inactiveWalletTiming = {
  updateOnStart: false,
  minUpdateDelay: {
    focused: 5 * SEC,
    notFocused: 30 * SEC
  },
  fallbackUpdateStartDelay: 5 * SEC,
  fallbackUpdatePeriod: {
    focused: 30 * SEC,
    notFocused: MINUTE
  },
  forceUpdatePeriod: {
    focused: 2 * MINUTE,
    notFocused: 5 * MINUTE
  }
};
/**
 * Executes the given functions indefinitely with pauses.
 * An execution can be triggered manually, in which case the scheduled execution will be delayed.
 */
function pollingLoop(_ref) {
  let {
    period,
    minDelay = 0,
    skipInitialPoll,
    prepare = () => Promise.resolve(),
    poll
  } = _ref;
  let isStopped = false;
  let cancelPause;
  const dependenciesDeferred = new Deferred/* default */.A();

  // Using `throttle` to avoid parallel execution
  const iteration = (0,schedulers/* throttle */.nF)(async () => {
    var _cancelPause;
    if (isStopped) {
      return;
    }
    (_cancelPause = cancelPause) === null || _cancelPause === void 0 || _cancelPause();
    const dependencies = await dependenciesDeferred.promise;
    try {
      const response = await poll(dependencies);
      if (response === 'stop') {
        isStopped = true;
      }
    } finally {
      if (!isStopped) {
        scheduleIteration();
      }
    }
  }, () => {
    return focusAwareDelay(...periodToMs(minDelay));
  });
  function scheduleIteration() {
    var _cancelPause2;
    (_cancelPause2 = cancelPause) === null || _cancelPause2 === void 0 || _cancelPause2();
    cancelPause = onFocusAwareDelay(...periodToMs(period), iteration);
  }
  void prepare().then(dependencies => {
    if (isStopped) {
      return;
    }
    dependenciesDeferred.resolve(dependencies);
    if (skipInitialPoll) {
      scheduleIteration();
    } else {
      iteration();
    }
  });
  return {
    poll: iteration,
    stop() {
      var _cancelPause3;
      isStopped = true;
      (_cancelPause3 = cancelPause) === null || _cancelPause3 === void 0 || _cancelPause3();
    }
  };
}

/**
 * Wraps the given `action` function. When the wrapped function is executed, it executes `action` immediately, and
 * several times after that. The number of additional executions is equal to `pauses.length`. Each number in `pauses` is
 * the pause (in milliseconds) between the `action` executions. When the wrapped function is executed, the previously
 * scheduled additional executions are cancelled.
 *
 * `attemptNumber` starts from 0 and increments with each additional execution.
 */
function withDoubleCheck(pauses, action) {
  let isStopped = false;
  let cancelDoubleCheck;
  async function makeAttempt(attemptNumber, args) {
    var _cancelDoubleCheck;
    (_cancelDoubleCheck = cancelDoubleCheck) === null || _cancelDoubleCheck === void 0 || _cancelDoubleCheck();
    try {
      return await action(attemptNumber, ...args);
    } finally {
      if (!isStopped && attemptNumber < pauses.length) {
        var _cancelDoubleCheck2;
        (_cancelDoubleCheck2 = cancelDoubleCheck) === null || _cancelDoubleCheck2 === void 0 || _cancelDoubleCheck2(); // Cancelling again due to possible race conditions
        cancelDoubleCheck = (0,schedulers/* setCancellableTimeout */.Gf)(pauses[attemptNumber], () => makeAttempt(attemptNumber + 1, args));
      }
    }
  }
  return {
    /** Executes `actions` and returns the result of the first execution */
    run() {
      isStopped = false;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return makeAttempt(0, args);
    },
    /** Cancels the scheduled additional executions */
    cancel() {
      var _cancelDoubleCheck3;
      isStopped = true;
      (_cancelDoubleCheck3 = cancelDoubleCheck) === null || _cancelDoubleCheck3 === void 0 || _cancelDoubleCheck3();
    }
  };
}
function periodToMs(period) {
  if (typeof period === 'number') {
    return [period, period];
  }
  const {
    focused,
    notFocused
  } = period;
  return [focused, notFocused];
}
;// ./src/api/common/polling/fallbackPollingScheduler.ts




/**
 * Schedules regular polling when the socket is disconnected.
 */
class FallbackPollingScheduler {
  #options;
  #cancelScheduledPoll;
  #isDestroyed = false;
  constructor(isSocketConnected, options) {
    this.#options = options;
    this.#schedulePolling(isSocketConnected);
    if (options.pollOnStart) {
      this.#poll();
    }
  }

  /** Call this method when the socket source of data becomes available */
  onSocketConnect() {
    if (this.#isDestroyed) return;
    this.#schedulePolling(true);
    this.#poll();
  }

  /** Call this method when the socket source of data becomes unavailable */
  onSocketDisconnect() {
    if (this.#isDestroyed) return;
    this.#schedulePolling(false);
  }

  /** Call this method when the socket shows that it's alive */
  onSocketMessage() {
    if (this.#isDestroyed) return;
    this.#schedulePolling(true);
  }
  destroy() {
    var _this$cancelScheduled;
    this.#isDestroyed = true;
    (_this$cancelScheduled = this.#cancelScheduledPoll) === null || _this$cancelScheduled === void 0 || _this$cancelScheduled.call(this);
  }

  // Using `throttle` to avoid parallel execution.
  #poll = (0,schedulers/* throttle */.nF)(async () => {
    if (this.#isDestroyed) return;
    try {
      await this.#options.poll();
    } catch (err) {
      (0,handleError/* handleError */.H)(err);
    }
  }, () => {
    return focusAwareDelay(...periodToMs(this.#options.minPollDelay));
  });
  #schedulePolling(isSocketConnected) {
    var _this$cancelScheduled2;
    (_this$cancelScheduled2 = this.#cancelScheduledPoll) === null || _this$cancelScheduled2 === void 0 || _this$cancelScheduled2.call(this);
    const {
      pollingPeriod,
      pollingStartDelay = pollingPeriod,
      forcedPollingPeriod
    } = this.#options;
    const firstPause = isSocketConnected ? forcedPollingPeriod : pollingStartDelay;
    const nextPause = isSocketConnected ? forcedPollingPeriod : pollingPeriod;
    const schedule = isFirst => {
      this.#cancelScheduledPoll = onFocusAwareDelay(...periodToMs(isFirst ? firstPause : nextPause), () => {
        schedule();
        this.#poll();
      });
    };
    schedule(true);
  }
}
;// ./src/util/reconnectingWebsocket.ts





/** isUnexpected is false when the socket is closed manually, i.e. by calling close() */

const RECONNECT_BASE_DELAY = 500;
const RECONNECT_MAX_DELAY = 5000;

/**
 * Like WebSocket, but reconnects automatically when the socket disconnects
 */
class ReconnectingWebSocket {
  #url;
  #socket;

  /** `true` between the `open` and the `close` events, i.e. when the socket can send and receive messages */
  #isConnected = false;
  #reconnectAttemptCount = 0;

  /** Cancels setTimeout of the WebSocket open timeout and the reconnect delay (they never happen simultaneously) */
  #cancelTimeout;
  #outMessageQueue = [];
  #inMessageListeners = createCallbackManager();
  #connectListeners = createCallbackManager();
  #disconnectListeners = createCallbackManager();
  constructor(url) {
    this.#url = url.toString();
    this.#startSocket();
  }

  /**
   * Sends a message via the socket.
   * If the socket is disconnected, stashes the message until the socket is connected.
   */
  send(message) {
    if (this.#socket && this.#isConnected) {
      this.#sendMessageNow(message);
    } else {
      this.#outMessageQueue.push(message);
    }
  }

  /**
   * Returns `true` is the socket is connected now. You may send messages regardless of the connection status.
   * The objects always initializes in the disconnected state.
   */
  get isConnected() {
    return this.#isConnected;
  }

  /** Closes the current socket connection and creates a new one. Call it when you suspect the socket has hung. */
  reconnect() {
    this.close();
    this.#startSocket();
  }

  /** Registers a callback firing when a message arrives from the socket */
  onMessage(callback) {
    return this.#inMessageListeners.addCallback(callback);
  }

  /**
   * Registers a callback firing when the socket is connected initially or reconnected.
   * I.e. when isConnected switches from `false` to `true`.
   */
  onConnect(callback) {
    return this.#connectListeners.addCallback(callback);
  }

  /**
   * Registers a callback firing when the socket is disconnected.
   * I.e. when isConnected switches from `true` to `false`.
   */
  onDisconnect(callback) {
    return this.#disconnectListeners.addCallback(callback);
  }

  /** Call it when you don't need the socket anymore. The callbacks won't fire after that. */
  close() {
    this.#stopSocket();
    if (this.#isConnected) {
      this.#isConnected = false;
      this.#disconnectListeners.runCallbacks(false);
    }
  }
  #startSocket() {
    this.#stopSocket();
    this.#socket = new WebSocket(this.#url);
    this.#socket.binaryType = 'arraybuffer';
    this.#socket.onerror = () => (0,logs/* logDebugError */.SJ)('WebSocket error event', this.#url);
    this.#socket.onopen = this.#handleSocketOpen;
    this.#socket.onclose = this.#handleSocketClose;
    this.#socket.onmessage = this.#handleSocketMessage;

    // If the socket doesn't open in several seconds, retry opening it
    this.#cancelTimeout = (0,schedulers/* setCancellableTimeout */.Gf)(config/* DEFAULT_TIMEOUT */.cSq, () => this.#handleSocketClose('openTimeout'));
  }
  #stopSocket() {
    var _this$cancelTimeout;
    (_this$cancelTimeout = this.#cancelTimeout) === null || _this$cancelTimeout === void 0 || _this$cancelTimeout.call(this);
    if (!this.#socket) {
      return;
    }
    this.#socket.onerror = null; // eslint-disable-line no-null/no-null
    this.#socket.onopen = null; // eslint-disable-line no-null/no-null
    this.#socket.onclose = null; // eslint-disable-line no-null/no-null
    this.#socket.onmessage = null; // eslint-disable-line no-null/no-null
    this.#socket.close();
    this.#socket = undefined;
  }
  #sendMessageNow(message) {
    if (!this.#socket) throw new Error('No active socket');
    this.#socket.send(JSON.stringify(message));
  }
  #handleSocketOpen = () => {
    var _this$cancelTimeout2;
    (0,logs/* logDebug */.MD)('WebSocket opened', this.#url);
    (_this$cancelTimeout2 = this.#cancelTimeout) === null || _this$cancelTimeout2 === void 0 || _this$cancelTimeout2.call(this);
    this.#reconnectAttemptCount = 0;
    while (this.#outMessageQueue.length) {
      this.#sendMessageNow(this.#outMessageQueue.shift());
    }
    if (!this.#isConnected) {
      this.#isConnected = true;
      this.#connectListeners.runCallbacks();
    }
  };
  #handleSocketClose = event => {
    if (event === 'openTimeout') {
      (0,logs/* logDebugError */.SJ)('WebSocket open timeout');
    } else {
      (0,logs/* logDebugError */.SJ)('WebSocket closed unexpectedly', event.code, event.reason, event.wasClean);
    }
    this.#stopSocket();
    this.#reconnectAttemptCount++;
    const reconnectDelay = Math.min(RECONNECT_BASE_DELAY * this.#reconnectAttemptCount, RECONNECT_MAX_DELAY);
    this.#cancelTimeout = (0,schedulers/* setCancellableTimeout */.Gf)(reconnectDelay, () => this.#startSocket());
    if (this.#isConnected) {
      if (event === 'openTimeout') {
        throw new Error('Unexpected timeout event in an open socket');
      }
      this.#isConnected = false;
      this.#disconnectListeners.runCallbacks(true);
    }
  };
  #handleSocketMessage = _ref => {
    let {
      data
    } = _ref;
    this.#inMessageListeners.runCallbacks(data instanceof ArrayBuffer ? data : JSON.parse(data));
  };
}
;// ./src/api/chains/ton/toncenter/socket.ts









const ACTUALIZATION_DELAY = 10;

// Toncenter closes the socket after 30 seconds of inactivity
const PING_INTERVAL = 20 * SEC;

// When the internet connection is interrupted, the Toncenter socket doesn't always disconnect automatically.
// Disconnecting manually if there is no response for "ping".
const PONG_TIMEOUT = 5 * SEC;
const toncenterSockets = {};
/**
 * Connects to Toncenter to passively listen to updates.
 */
class ToncenterSocket {
  #network;
  #socket;

  /** See #rememberAddressesOfNormalizedHash */
  #addressesByHash = {};
  #walletWatchers = [];

  /** The addresses that the socket is currently subscribed to */
  #subscribedAddresses = new Set();

  /**
   * A shared incremental counter for various unique ids. The fact that it's incremental is used to tell what actions
   * happened earlier or later than others.
   */
  #currentUniqueId = 0;
  #stopPing;
  #cancelReconnect;
  constructor(network) {
    this.#network = network;
  }
  watchWallets(addresses) {
    let {
      onNewActivities,
      onConnect,
      onDisconnect
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const id = this.#currentUniqueId++;
    const watcher = {
      id,
      addresses,
      isConnected: false,
      onNewActivities,
      onConnect,
      onDisconnect,
      destroy: this.#destroyWalletWatcher.bind(this, id)
    };
    this.#walletWatchers.push(watcher);
    this.#actualizeSocket();
    return watcher;
  }

  /** Removes the given watcher and unsubscribes from its wallets. Brings the sockets to the proper state. */
  #destroyWalletWatcher(watcherId) {
    const index = this.#walletWatchers.findIndex(watcher => watcher.id === watcherId);
    if (index >= 0) {
      this.#walletWatchers.splice(index, 1);
      this.#actualizeSocket();
    }
  }

  /**
   * Creates or destroys the given socket (if needed) and subscribes to the watched wallets.
   *
   * The method is throttled in order to:
   *  - Avoid sending too many requests when the watched addresses change many times in a short time range.
   *  - Avoid reconnecting the socket when watched addresses arrive shortly after stopping watching all addresses.
   */
  #actualizeSocket = (0,schedulers/* throttle */.nF)(() => {
    if (this.#doesHaveWatchedAddresses()) {
      this.#socket ??= this.#createSocket();
      if (this.#socket.isConnected) {
        this.#sendWatchedWalletsToSocket();
      } // Otherwise, the addresses will be sent when the socket gets connected
    } else {
      var _this$socket;
      (_this$socket = this.#socket) === null || _this$socket === void 0 || _this$socket.close();
      this.#socket = undefined;
    }
  }, ACTUALIZATION_DELAY, false);
  #createSocket() {
    const url = getSocketUrl(this.#network);
    const socket = new ReconnectingWebSocket(url);
    socket.onMessage(this.#handleSocketMessage);
    socket.onConnect(this.#handleSocketConnect);
    socket.onDisconnect(this.#handleSocketDisconnect);
    return socket;
  }
  #handleSocketMessage = message => {
    var _this$cancelReconnect;
    (_this$cancelReconnect = this.#cancelReconnect) === null || _this$cancelReconnect === void 0 || _this$cancelReconnect.call(this);
    if ('status' in message) {
      if (message.status === 'subscribed') {
        this.#handleSubscribed(message);
      }
    }
    if ('type' in message) {
      if (message.type === 'trace_invalidated') {
        message = {
          ...message,
          type: 'pending_actions',
          actions: [],
          address_book: {},
          metadata: {}
        };
        // Falling down to the below `if` intentionally
      }
      if (message.type === 'actions' || message.type === 'pending_actions') {
        void this.#handleNewActions(message);
      }
    }
  };
  #handleSocketConnect = () => {
    var _this$socket2;
    (_this$socket2 = this.#socket) === null || _this$socket2 === void 0 || _this$socket2.send({
      operation: 'configure',
      include_address_book: true,
      include_metadata: true,
      supported_action_types: [config/* TONCENTER_ACTIONS_VERSION */.eaP]
    });
    this.#sendWatchedWalletsToSocket();
    this.#startPing();
  };
  #handleSocketDisconnect = () => {
    var _this$stopPing;
    this.#subscribedAddresses.clear();
    (_this$stopPing = this.#stopPing) === null || _this$stopPing === void 0 || _this$stopPing.call(this);
    for (const watcher of this.#walletWatchers) {
      if (watcher.isConnected) {
        watcher.isConnected = false;
        if (watcher.onDisconnect) (0,safeExec/* default */.A)(watcher.onDisconnect);
      }
    }
  };
  #handleSubscribed(message) {
    for (const watcher of this.#walletWatchers) {
      // If message id < watcher id, then the watcher was created after the subscribe request was sent, therefore
      // the socket may be not subscribed to all the watcher addresses yet.
      if (message.id && Number(message.id) < watcher.id) {
        continue;
      }
      if (!watcher.isConnected) {
        watcher.isConnected = true;
        if (watcher.onConnect) (0,safeExec/* default */.A)(watcher.onConnect);
      }
    }
  }

  // Limiting the concurrency to 1 to ensure the new activities are reported in the order they were received
  #handleNewActions = (0,schedulers/* forbidConcurrency */.SB)(async message => {
    const arePending = message.type === 'pending_actions';
    const messageHashNormalized = message.trace_external_hash_norm;
    const activitiesByAddress = await parseSocketActions(this.#network, message, this.#getWatchedAddresses(true));
    const addressesToNotify = this.#rememberAddressesOfHash(messageHashNormalized, Object.keys(activitiesByAddress), arePending);
    for (const watcher of this.#walletWatchers) {
      if (!isWatcherReadyForNewActivities(watcher)) {
        continue;
      }
      for (const address of watcher.addresses) {
        if (!addressesToNotify.has(address)) {
          continue;
        }
        (0,safeExec/* default */.A)(() => watcher.onNewActivities({
          address,
          messageHashNormalized,
          arePending,
          activities: activitiesByAddress[address] ?? []
        }));
      }
    }
  });
  #sendWatchedWalletsToSocket() {
    // It's necessary to collect the watched addresses synchronously with locking the request id.
    // It makes sure that all the watchers with ids < the response id will be subscribed.
    const requestId = String(this.#currentUniqueId++);
    const oldAddresses = this.#subscribedAddresses;
    const newAddresses = this.#getWatchedAddresses();
    const deletedAddresses = (0,iteratees/* findDifference */.Hl)(oldAddresses, newAddresses);
    const addedAddresses = (0,iteratees/* findDifference */.Hl)(newAddresses, oldAddresses);
    if (deletedAddresses.length) {
      this.#socket.send({
        operation: 'unsubscribe',
        addresses: deletedAddresses
      });
    }
    if (addedAddresses.length) {
      this.#socket.send({
        operation: 'subscribe',
        id: requestId,
        addresses: addedAddresses,
        types: ['actions', 'pending_actions']
      });
    }
    this.#subscribedAddresses = newAddresses;
  }
  #doesHaveWatchedAddresses() {
    return this.#walletWatchers.some(watcher => watcher.addresses.length);
  }
  #getWatchedAddresses(isOnlyReadyForNewActivities) {
    const watchedAddresses = new Set();
    for (const watcher of this.#walletWatchers) {
      if (isOnlyReadyForNewActivities && !isWatcherReadyForNewActivities(watcher)) {
        continue;
      }
      for (const address of watcher.addresses) {
        watchedAddresses.add(address);
      }
    }
    return watchedAddresses;
  }
  #startPing() {
    var _this$stopPing2;
    (_this$stopPing2 = this.#stopPing) === null || _this$stopPing2 === void 0 || _this$stopPing2.call(this);
    const pingIntervalId = setInterval(() => {
      var _this$socket3, _this$cancelReconnect2;
      (_this$socket3 = this.#socket) === null || _this$socket3 === void 0 || _this$socket3.send({
        operation: 'ping'
      });
      (_this$cancelReconnect2 = this.#cancelReconnect) === null || _this$cancelReconnect2 === void 0 || _this$cancelReconnect2.call(this);
      this.#cancelReconnect = (0,schedulers/* setCancellableTimeout */.Gf)(PONG_TIMEOUT, () => {
        var _this$socket4;
        (_this$socket4 = this.#socket) === null || _this$socket4 === void 0 || _this$socket4.reconnect();
      });
    }, PING_INTERVAL);
    this.#stopPing = () => clearInterval(pingIntervalId);
  }

  /**
   * When a pending action is invalidated, a message arrives with no data except the normalized hash. In order to find
   * what addresses it belongs to and notify those addresses, we save the addresses from the previous message with the
   * same normalized hash.
   *
   * @returns The addresses that should be notified about the new actions, even if no new action belongs to the address
   */
  #rememberAddressesOfHash(messageHashNormalized, newActionAddresses, areNewActionsPending) {
    const prevSavedAddresses = this.#addressesByHash[messageHashNormalized] ?? [];
    const nextSavedAddresses = [];
    const addressesToNotify = new Set();

    // Notifying the addresses where the actions were seen at previously. It is necessary to let the addresses know that
    // the given normalized message hash is no longer in the activity history.
    for (const address of prevSavedAddresses) {
      addressesToNotify.add(address);
    }
    for (const address of newActionAddresses) {
      addressesToNotify.add(address);

      // Saving the corresponding addresses only for pending actions, because confirmed actions don't change or invalidate
      if (areNewActionsPending) {
        nextSavedAddresses.push(address);
      }
    }
    if (nextSavedAddresses.length) {
      this.#addressesByHash[messageHashNormalized] = nextSavedAddresses;
    } else {
      delete this.#addressesByHash[messageHashNormalized];
    }
    return addressesToNotify;
  }
}
/** Returns a singleton (one constant instance per a network) */
function getToncenterSocket(network) {
  toncenterSockets[network] ??= new ToncenterSocket(network);
  return toncenterSockets[network];
}

/**
 * Returns true if the activities update is final, i.e. no other updates are expected for the corresponding message hash.
 */
function isActivityUpdateFinal(update) {
  return !update.arePending || !update.activities.length;
}
function getSocketUrl(network) {
  const url = new URL(network === 'testnet' ? config/* TONCENTER_TESTNET_URL */.pyR : config/* TONCENTER_MAINNET_URL */._J8);
  url.protocol = 'wss:';
  url.pathname = '/api/streaming/v1/ws';
  addBackendHeadersToSocketUrl(url);
  return url;
}
async function parseSocketActions(network, message, addressWhitelist) {
  const actionsByAddress = groupActionsByAddress(message.actions, message.address_book);
  const activitiesByAddress = {};
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  for (const [address, actions] of Object.entries(actionsByAddress)) {
    if (!addressWhitelist.has(address)) {
      continue;
    }
    activitiesByAddress[address] = parseActions(network, address, actions, message.address_book, message.metadata, nftSuperCollectionsByCollectionAddress, message.type === 'pending_actions');
  }
  return activitiesByAddress;
}
function groupActionsByAddress(actions, addressBook) {
  const byAddress = {};
  for (const action of actions) {
    for (const rawAddress of action.accounts) {
      var _addressBook$rawAddre;
      const address = ((_addressBook$rawAddre = addressBook[rawAddress]) === null || _addressBook$rawAddre === void 0 ? void 0 : _addressBook$rawAddre.user_friendly) ?? rawAddress;
      byAddress[address] ??= [];
      byAddress[address].push(action);
    }
  }
  return byAddress;
}
function isWatcherReadyForNewActivities(watcher) {
  // Even though the socket may already listen to some wallet addresses, we promise the class users to trigger the
  // onNewActions callback only in the connected state.
  return watcher.isConnected && !!watcher.onNewActivities;
}
;// ./src/api/chains/ton/toncenter/throttleSocketActions.ts



/**
 * The Toncenter websocket sends too many updates of pending actions. For example, sends a pending activity right before
 * sending the confirmed version of that activity. This function throttles them, but makes sure the pending actions are
 * created immediately.
 */
function throttleToncenterSocketActions(delayMs, onUpdates) {
  // A record item is created when the first pending version arrives and is removed when it gets confirmed or invalidated.
  // All message hashes are throttled independently.
  const updatesByHash = {};
  const scheduleReport = hash => {
    updatesByHash[hash] ??= {};
    updatesByHash[hash].cancelReport ??= (0,schedulers/* setCancellableTimeout */.Gf)(delayMs, () => {
      delete updatesByHash[hash].cancelReport;
      const {
        toReport
      } = updatesByHash[hash];
      if (toReport) {
        onUpdates([toReport]);
      }
    });
  };
  return update => {
    const hash = update.messageHashNormalized;
    if (isActivityUpdateFinal(update)) {
      var _updatesByHash$hash, _updatesByHash$hash$c;
      // This is the final update for the hash. It should be delivered immediately and removed.
      (_updatesByHash$hash = updatesByHash[hash]) === null || _updatesByHash$hash === void 0 || (_updatesByHash$hash$c = _updatesByHash$hash.cancelReport) === null || _updatesByHash$hash$c === void 0 || _updatesByHash$hash$c.call(_updatesByHash$hash);
      delete updatesByHash[hash];
      onUpdates([update]);
    } else if (!updatesByHash[hash]) {
      // This is the first version of the hash's update. It should (and must for pendings) be delivered immediately.
      onUpdates([update]);
      scheduleReport(hash);
    } else {
      // Otherwise, throttle the update
      updatesByHash[hash].toReport = update;
      scheduleReport(hash);
    }
  };
}
;// ./src/api/chains/ton/toncenter/activityStream.ts











const SOCKET_THROTTLE_DELAY = 250;
const MIN_POLL_DELAY = {
  focused: SEC,
  notFocused: 3 * SEC
};
const POLLING_START_DELAY = 3 * SEC;
const POLLING_PERIOD = {
  focused: 1.1 * SEC,
  notFocused: 10 * SEC
};
const FORCED_POLLING_PERIOD = {
  focused: MINUTE,
  notFocused: 2 * MINUTE
};
const FINISHED_HASH_MEMORY_SIZE = 100;

/**
 * The activities are sorted by timestamp descending.
 * The updates may arrive not in the order of activity time and may duplicate.
 * `allPendingActivities` doesn't contain activities with the hashes of the current or past confirmed activities.
 */

/**
 * Streams the new activities (confirmed and pending) in the given TON wallet as they are received from the Toncenter
 * API (with no artificial activities like CEX swaps). Uses the socket, and fallbacks to HTTP polling when the socket is
 * unavailable.
 */
class ActivityStream {
  #network;
  #address;
  #newestConfirmedActivityTimestamp;
  #pendingActivities = managePendingActivities();
  #walletWatcher;
  #fallbackPollingScheduler;
  #updateListeners = createCallbackManager();
  #loadingListeners = createCallbackManager();

  /** When `true`, the polling retries until succeeds, and the confirmed actions from the socket get stashed */
  #doesNeedToRestoreHistory = false;

  /** Sorted by timestamp descending */
  #socketConfirmedActionsStash = [];
  #isDestroyed = false;
  constructor(network, address, newestConfirmedActivityTimestamp, pollOnStart) {
    this.#network = network;
    this.#address = address;
    this.#newestConfirmedActivityTimestamp = newestConfirmedActivityTimestamp;
    this.#walletWatcher = getToncenterSocket(network).watchWallets([address], {
      onConnect: this.#handleSocketConnect,
      onDisconnect: this.#handleSocketDisconnect,
      onNewActivities: throttleToncenterSocketActions(SOCKET_THROTTLE_DELAY, this.#handleSocketNewActivities)
    });
    this.#doesNeedToRestoreHistory = this.#walletWatcher.isConnected;
    this.#fallbackPollingScheduler = new FallbackPollingScheduler(this.#walletWatcher.isConnected, {
      pollOnStart,
      minPollDelay: MIN_POLL_DELAY,
      pollingStartDelay: POLLING_START_DELAY,
      pollingPeriod: POLLING_PERIOD,
      forcedPollingPeriod: FORCED_POLLING_PERIOD,
      poll: this.#poll
    });
  }

  /**
   * Registers a callback firing then new activities arrive.
   * The callback is calls are throttled.
   */
  onUpdate(callback) {
    return this.#updateListeners.addCallback(callback);
  }

  /**
   * Registers a callback firing when the regular polling starts of finishes.
   * Guaranteed to be called with `isLoading=false` after calling the `onUpdate` callbacks.
   */
  onLoadingChange(callback) {
    return this.#loadingListeners.addCallback(callback);
  }
  destroy() {
    this.#isDestroyed = true;
    this.#walletWatcher.destroy();
    this.#fallbackPollingScheduler.destroy();
  }
  #handleSocketConnect = () => {
    // When the socket gets connected, it's important to load the confirmed activities since the last activity,
    // otherwise the activities arriving from the socket will create a gap in the activity history.
    this.#doesNeedToRestoreHistory = true;
    this.#fallbackPollingScheduler.onSocketConnect();
  };
  #handleSocketDisconnect = () => {
    this.#doesNeedToRestoreHistory = false;
    this.#fallbackPollingScheduler.onSocketDisconnect();
  };
  #handleSocketNewActivities = updates => {
    if (this.#isDestroyed) return;
    const pendingUpdates = updates.filter(update => update.arePending);
    const confirmedActivities = sortActivities(updates.filter(update => !update.arePending).flatMap(update => update.activities));
    const instantConfirmedActivities = this.#doesNeedToRestoreHistory ? [] : confirmedActivities;
    const stashedConfirmedActivities = this.#doesNeedToRestoreHistory ? confirmedActivities : [];

    // One of the goals here is preventing the stashed activities from removing pending activities (switching an activity
    // from pending to confirmed must be seamless). Another goal is delivering the pending activities with no delay.
    this.#socketConfirmedActionsStash.unshift(...stashedConfirmedActivities);
    this.#handleNewActivities(instantConfirmedActivities, undefined, pendingUpdates);
  };

  /** Fetches the activities when the socket is not connected or has just connected */
  #poll = async () => {
    try {
      this.#loadingListeners.runCallbacks(true);
      const [pendingActivities, newConfirmedActivities] = await Promise.all([loadPendingActivities(this.#network, this.#address), this.#loadNewConfirmedActivities()]);
      if (this.#isDestroyed) return;
      this.#handleNewActivities(mergeSortedActivities(newConfirmedActivities, this.#socketConfirmedActionsStash.splice(0)), pendingActivities);
      this.#doesNeedToRestoreHistory = false;
    } finally {
      if (!this.#isDestroyed) {
        this.#loadingListeners.runCallbacks(false);
      }
    }
  };
  async #loadNewConfirmedActivities() {
    while (!this.#isDestroyed) {
      try {
        return await fetchActions({
          network: this.#network,
          filter: {
            address: this.#address
          },
          walletAddress: this.#address,
          fromTimestamp: this.#newestConfirmedActivityTimestamp,
          limit: FIRST_TRANSACTIONS_LIMIT
        });
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('loadNewConfirmedActivities', err);
        if (this.#isDestroyed || !this.#doesNeedToRestoreHistory) {
          break;
        }
        await focusAwareDelay(...periodToMs(MIN_POLL_DELAY));
      }
    }
    return [];
  }

  /** The method expected one of `allPendingActivities` and `pendingUpdates`, not both at the same time */
  #handleNewActivities(confirmedActivities, allPendingActivities, pendingUpdates) {
    // If nothing new, do nothing
    if (!confirmedActivities.length && !(allPendingActivities || pendingUpdates !== null && pendingUpdates !== void 0 && pendingUpdates.length)) {
      return;
    }
    if (confirmedActivities.length) {
      this.#newestConfirmedActivityTimestamp = confirmedActivities[0].timestamp;
    }
    this.#pendingActivities.update(confirmedActivities, allPendingActivities, pendingUpdates);
    this.#updateListeners.runCallbacks(confirmedActivities, this.#pendingActivities.all);
  }
}
async function loadPendingActivities(network, address) {
  try {
    return await fetchPendingActions(network, address);
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('loadPendingActivities', err);
    return undefined;
  }
}

/**
 * Keeps the list of all current pending activities by merging the incoming updates.
 */
function managePendingActivities() {
  /** Sorted by timestamp descending */
  let pendingActivities = [];

  /**
   * External message hash normalized of the recently confirmed activities and invalidated pending activities.
   * Helps to avoid excessive pendings occurring because of race conditions that cause pendings to arrive after the
   * corresponding confirmed activities. The race conditions can occur because of the socket and polling working together.
   *
   * There still can be situations where an older pending activity version replaces a newer one, but it is not a problem.
   */
  const finishedHashes = new Set();
  function update(confirmedActivities, allPendingActivities, pendingUpdates) {
    rememberFinishedHashes((0,iteratees/* extractKey */.JY)(confirmedActivities, 'externalMsgHashNorm'));
    if (pendingUpdates) {
      rememberFinishedHashes((0,iteratees/* extractKey */.JY)(pendingUpdates.filter(isActivityUpdateFinal), 'messageHashNormalized'));
    }
    if (allPendingActivities) {
      pendingActivities = sortActivities(allPendingActivities);
    } else if (pendingUpdates) {
      pendingActivities = mergePendingActivities(pendingActivities, pendingUpdates);
    }
    pendingActivities = pendingActivities.filter(_ref => {
      let {
        externalMsgHashNorm
      } = _ref;
      return !(externalMsgHashNorm && finishedHashes.has(externalMsgHashNorm));
    });
  }
  function rememberFinishedHashes(messageHashNorms) {
    for (const hash of messageHashNorms) {
      if (hash !== undefined) {
        finishedHashes.add(hash);
      }
    }
    releaseFinishedHashesMemory();
  }
  function releaseFinishedHashesMemory() {
    // JS Set iterates the elements in the order of insertion.
    // Deleting elements from Set during iteration doesn't disrupt the iteration.
    // That is, this loop removes the oldest elements.
    for (const hash of finishedHashes) {
      if (finishedHashes.size <= FINISHED_HASH_MEMORY_SIZE) {
        break;
      }
      finishedHashes.delete(hash);
    }
  }
  return {
    get all() {
      return pendingActivities;
    },
    update
  };
}
function mergePendingActivities(currentPendingActivities,
// Must be sorted by timestamp descending
socketUpdates) {
  if (!socketUpdates.length) {
    return currentPendingActivities;
  }
  const hashesToRemove = new Set((0,iteratees/* extractKey */.JY)(socketUpdates, 'messageHashNormalized'));
  return mergeSortedActivities(currentPendingActivities.filter(activity => !hashesToRemove.has(activity.externalMsgHashNorm)), sortActivities(socketUpdates.flatMap(update => update.arePending ? update.activities : [])));
}
;// ./src/api/chains/ton/toncenter/transactions.ts





async function fetchTransactions(options) {
  const {
    network,
    address,
    limit,
    toTimestamp,
    fromTimestamp,
    shouldIncludeFrom,
    shouldIncludeTo
  } = options;
  const data = await other_callToncenterV3(network, '/transactions', {
    account: address,
    limit,
    start_utime: fromTimestamp && toSeconds(fromTimestamp) + (!shouldIncludeFrom ? 1 : 0),
    end_utime: toTimestamp && toSeconds(toTimestamp) - (!shouldIncludeTo ? 1 : 0),
    sort: 'desc'
  });
  const {
    transactions: rawTransactions,
    address_book: addressBook
  } = data;
  if (!rawTransactions.length) {
    return [];
  }
  return rawTransactions.map(rawTx => parseRawTransaction(network, rawTx, addressBook)).flat();
}
function parseRawTransaction(network, rawTx, addressBook) {
  const {
    now,
    hash,
    total_fees: totalFees,
    description: {
      compute_ph: {
        exit_code: exitCode
      }
    }
  } = rawTx;
  const timestamp = now * 1000;
  const isIncoming = !!rawTx.in_msg.source && !rawTx.out_msgs.length;
  const inMsgHashNorm = rawTx.in_msg.hash_norm ?? rawTx.in_msg.hash;
  const msgs = isIncoming ? [rawTx.in_msg] : rawTx.out_msgs;
  if (!msgs.length) return [];
  const oneMsgFee = BigInt(totalFees) / BigInt(msgs.length);
  const transactions = [];
  msgs.forEach((msg, i) => {
    const {
      source,
      destination,
      value,
      fwd_fee: fwdFee,
      opcode,
      hash: msgHash,
      bounced
    } = msg;
    if (!destination) {
      // This is log
      return;
    }
    const fromAddress = addressBook[source].user_friendly;
    const toAddress = addressBook[destination].user_friendly;
    const normalizedAddress = (0,tonCore/* toBase64Address */.vn)(isIncoming ? source : destination, true, network);
    const fee = oneMsgFee + BigInt(fwdFee ?? 0);
    const tx = (0,iteratees/* omitUndefined */.Oy)({
      timestamp,
      isIncoming,
      fromAddress,
      toAddress,
      amount: isIncoming ? BigInt(value) : -BigInt(value),
      slug: config/* TONCOIN */.Tu9.slug,
      fee,
      externalMsgHashNorm: isIncoming ? undefined : inMsgHashNorm,
      normalizedAddress,
      shouldHide: exitCode ? true : undefined,
      hash,
      opCode: Number(opcode) || undefined,
      msgHash,
      type: bounced ? 'bounced' : undefined,
      status: 'completed'
    });
    transactions.push(tx);
  });
  return transactions;
}
async function fetchLatestTxLt(network, address) {
  const {
    transactions
  } = await callToncenterV3(network, '/transactions', {
    account: address,
    limit: 1,
    sort: 'desc'
  });
  if (!transactions.length) {
    return undefined;
  }
  return Number(transactions[0].lt);
}
;// ./src/api/chains/ton/toncenter/index.ts




;// ./src/api/chains/ton/address.ts







async function resolveAddress(network, address, skipFormatSelection) {
  const isDomain = (0,dns/* isDnsDomain */.iy)(address);
  let domain;
  if (isDomain) {
    const resolvedAddress = await resolveAddressByDomain(network, address);
    if (!resolvedAddress) {
      return 'dnsNotResolved';
    }
    domain = address;
    address = resolvedAddress;
    if (!skipFormatSelection) {
      const addressBook = await fetchAddressBook(network, [address]);
      address = addressBook[address].user_friendly;
    }
  }
  let normalizedAddress;
  try {
    normalizedAddress = normalizeAddress(address);
  } catch {
    return 'invalidAddress';
  }
  const known = getKnownAddressInfo(normalizedAddress);
  if (known) {
    return {
      address,
      ...known,
      name: domain ?? known.name
    };
  }
  return {
    address,
    name: domain
  };
}
async function resolveAddressByDomain(network, domain) {
  try {
    const zoneMatch = (0,dns/* getDnsDomainZone */.u_)(domain);
    if (!zoneMatch) {
      return undefined;
    }
    const result = await (0,util_dns/* dnsResolve */.GK)((0,tonCore/* getTonClient */.N7)(network), zoneMatch.zone.resolver, zoneMatch.base, constants/* DnsCategory */.kJ.Wallet);
    if (!(result instanceof core_dist.Address)) {
      return undefined;
    }
    return (0,tonCore/* toBase64Address */.vn)(result, undefined, network);
  } catch (err) {
    var _err$message;
    if (!((_err$message = err.message) !== null && _err$message !== void 0 && _err$message.includes('exit_code'))) {
      throw err;
    }
    return undefined;
  }
}
function normalizeAddress(address, network) {
  return (0,tonCore/* toBase64Address */.vn)(address, true, network);
}
// EXTERNAL MODULE: ./src/util/withCacheAsync.ts
var withCacheAsync = __webpack_require__(69780);
;// ./src/api/chains/ton/wallet.ts
/* provided dependency */ var wallet_Buffer = __webpack_require__(48287)["Buffer"];











const isAddressInitialized = (0,withCacheAsync/* default */.A)(async (network, walletOrAddress) => {
  return (await getWalletInfo(network, walletOrAddress)).isInitialized;
});
const isActiveSmartContract = (0,withCacheAsync/* default */.A)(async (network, address) => {
  const {
    isInitialized,
    version
  } = await getWalletInfo(network, address);
  return isInitialized ? !version : undefined;
}, value => value !== undefined);
function publicKeyToAddress(network, publicKey, walletVersion, isTestnetSubwalletId) {
  const wallet = buildWallet(publicKey, walletVersion, isTestnetSubwalletId);
  return (0,tonCore/* toBase64Address */.vn)(wallet.address, false, network);
}
function buildWallet(publicKey, walletVersion, isTestnetSubwalletId) {
  if (typeof publicKey === 'string') {
    publicKey = (0,utils/* hexToBytes */.aT)(publicKey);
  }
  const WalletClass = tonCore/* walletClassMap */.ss[walletVersion];
  if (!WalletClass) {
    throw new Error(`Unsupported wallet contract version "${walletVersion}"`);
  }
  if (walletVersion === 'W5') {
    return WalletClass.create({
      publicKey: wallet_Buffer.from(publicKey),
      workchain: constants/* WORKCHAIN */.Zm,
      walletId: {
        networkGlobalId: isTestnetSubwalletId ? constants/* TON_TESTNET_CHAIN_ID */.Ih : constants/* TON_MAINNET_CHAIN_ID */.xc
      }
    });
  }
  return WalletClass.create({
    publicKey: wallet_Buffer.from(publicKey),
    workchain: constants/* WORKCHAIN */.Zm
  });
}
async function getWalletInfo(network, walletOrAddress) {
  const address = typeof walletOrAddress === 'string' ? walletOrAddress : (0,tonCore/* toBase64Address */.vn)(walletOrAddress.address, undefined, network);
  return (await getWalletInfos(network, [address]))[address];
}
async function getContractInfo(network, address) {
  const data = await (0,tonCore/* getTonClient */.N7)(network).getAddressInfo(address);
  const {
    code,
    state
  } = data;
  const codeHashOld = wallet_Buffer.from(await (0,utils/* sha256 */.sc)((0,utils/* base64ToBytes */.Kp)(code))).toString('hex');
  const contractInfo = Object.values(constants/* KnownContracts */.v4).find(info => info.hash === codeHashOld);
  // For inactive addresses, `code` is an empty string. Cell.fromBase64 throws when `code` is an empty string.
  const codeHash = code && core_dist.Cell.fromBase64(code).hash().toString('hex');
  const isInitialized = state === 'active';
  const isWallet = state === 'active' ? (contractInfo === null || contractInfo === void 0 ? void 0 : contractInfo.type) === constants/* ContractType */.h$.Wallet : undefined;
  const isSwapAllowed = contractInfo === null || contractInfo === void 0 ? void 0 : contractInfo.isSwapAllowed;
  return {
    isInitialized,
    isWallet,
    isSwapAllowed,
    contractInfo,
    codeHash,
    codeHashOld
  };
}
async function getAccountBalance(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  return getWalletBalance(network, address);
}
async function getWalletBalance(network, walletOrAddress) {
  return (await getWalletInfo(network, walletOrAddress)).balance;
}
async function getWalletSeqno(network, walletOrAddress) {
  const {
    seqno
  } = await getWalletInfo(network, walletOrAddress);
  return seqno || 0;
}
async function pickBestWallet(network, publicKey) {
  const allWallets = await getWalletVersionInfos(network, publicKey);
  const defaultWallets = allWallets.filter(_ref => {
    let {
      version
    } = _ref;
    return version === config/* DEFAULT_WALLET_VERSION */.RoE;
  });
  const defaultWallet = defaultWallets.find(_ref2 => {
    let {
      isTestnetSubwalletId
    } = _ref2;
    return isTestnetSubwalletId;
  }) ?? defaultWallets[0];
  if (defaultWallet.lastTxId) {
    return defaultWallet;
  }
  const withBiggestBalance = allWallets.reduce((best, current) => {
    return current.balance > ((best === null || best === void 0 ? void 0 : best.balance) ?? 0n) ? current : best;
  }, undefined);
  if (withBiggestBalance) {
    return withBiggestBalance;
  }
  const withLastTx = (0,iteratees/* findLast */.Uk)(allWallets, _ref3 => {
    let {
      lastTxId
    } = _ref3;
    return !!lastTxId;
  });
  if (withLastTx) {
    return withLastTx;
  }

  // Workaround for NOT holders who do not have transactions
  const v4Wallet = allWallets.find(_ref4 => {
    let {
      version
    } = _ref4;
    return version === 'v4R2';
  });
  const v4JettonBalances = await fetchJettonBalances(network, v4Wallet.address);
  if (v4JettonBalances.length > 0) {
    return v4Wallet;
  }
  return defaultWallet;
}
async function getWalletVersionInfos(network, publicKey) {
  let versions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constants/* ALL_WALLET_VERSIONS */.ov;
  const items = getWalletVersions(network, publicKey, versions);
  const walletInfos = await getWalletInfos(network, (0,iteratees/* extractKey */.JY)(items, 'address'));
  const result = items.map(item => {
    const walletInfo = walletInfos[item.address] ?? {
      balance: 0n,
      isInitialized: false
    };
    return {
      ...walletInfo,
      ...item
    };
  });
  return result;
}
function getWalletVersions(network, publicKey) {
  let versions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : constants/* ALL_WALLET_VERSIONS */.ov;
  return versions.flatMap(version => {
    if (version === 'W5' && network === 'testnet') {
      // Support wallets with both `subwallet_id` values for testnet to keep backwards compatibility
      const testnetWallet = buildWallet(publicKey, version, true);
      const testnetAddress = (0,tonCore/* toBase64Address */.vn)(testnetWallet.address, false, 'testnet');
      const mainnetWallet = buildWallet(publicKey, version, false);
      const mainnetAddress = (0,tonCore/* toBase64Address */.vn)(mainnetWallet.address, false, 'testnet');
      return [{
        wallet: testnetWallet,
        address: testnetAddress,
        version,
        isTestnetSubwalletId: true
      }, {
        wallet: mainnetWallet,
        address: mainnetAddress,
        version,
        isTestnetSubwalletId: false
      }];
    }
    const wallet = buildWallet(publicKey, version);
    const address = (0,tonCore/* toBase64Address */.vn)(wallet.address, false, network);
    return {
      wallet,
      address,
      version,
      isTestnetSubwalletId: undefined
    };
  });
}
function getWalletStateInit(storedWallet) {
  const wallet = getTonWallet(storedWallet);
  return (0,core_dist.beginCell)().storeWritable((0,core_dist.storeStateInit)(wallet.init)).endCell();
}
function pickWalletByAddress(network, publicKey, address) {
  address = (0,tonCore/* toBase64Address */.vn)(address, false, network);
  const allWallets = getWalletVersions(network, publicKey);
  return allWallets.find(w => w.address === address);
}

/**
 * Check if the wallet is with testnet subwallet ID
 * @returns `undefined` if the wallet is not a W5 wallet,
 * `true` if the wallet is with testnet subwallet ID, `false` otherwise
 */
function checkIsTestnetSubwalletId(publicKey, version, address) {
  if (version !== 'W5') {
    return undefined;
  }
  const testnetSubwalletAddress = publicKeyToAddress('testnet', publicKey, version, true);
  return address === testnetSubwalletAddress;
}
function getTonWallet(tonWallet) {
  const {
    publicKey,
    version,
    address
  } = tonWallet;
  if (!publicKey) {
    throw new Error('Public key is missing');
  }

  // For W5 wallets, determine the correct subwallet ID by comparing addresses
  if (version === 'W5') {
    const isTestnetSubwalletId = checkIsTestnetSubwalletId((0,utils/* hexToBytes */.aT)(publicKey), version, address);
    return buildWallet(publicKey, version, isTestnetSubwalletId);
  }
  return buildWallet(publicKey, version);
}
;// ./src/api/chains/ton/auth.ts
















function generateMnemonic() {
  return web.generateMnemonic();
}
function validateMnemonic(mnemonic) {
  return web.validateMnemonic(mnemonic);
}
function privateKeyHexToKeyPair(privateKeyHex) {
  return nacl_fast_default().sign.keyPair.fromSeed((0,utils/* hexToBytes */.aT)(privateKeyHex));
}
async function fetchPrivateKey(accountId, password, account) {
  try {
    const {
      secretKey: privateKey
    } = (await fetchKeyPair(accountId, password, account)) || {};
    return privateKey;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return undefined;
  }
}
async function fetchKeyPair(accountId, password, account) {
  try {
    account = account ?? (await fetchStoredAccount(accountId));
    const mnemonic = await getMnemonic(accountId, password, account);
    if (!mnemonic) {
      return undefined;
    }
    if (isMnemonicPrivateKey(mnemonic)) {
      return privateKeyHexToKeyPair(mnemonic[0]);
    } else if (account.type === 'bip39') {
      return bip39MnemonicToKeyPair(mnemonic);
    } else {
      return await web.mnemonicToKeyPair(mnemonic);
    }
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('fetchKeyPair', err);
    return undefined;
  }
}
async function rawSign(accountId, password, dataHex) {
  const privateKey = await fetchPrivateKey(accountId, password);
  if (!privateKey) {
    return undefined;
  }
  const signature = nacl_fast_default().sign.detached((0,utils/* hexToBytes */.aT)(dataHex), privateKey);
  return (0,utils/* bytesToHex */.My)(signature);
}
function getWalletFromBip39Mnemonic(network, mnemonic, version) {
  const {
    publicKey
  } = bip39MnemonicToKeyPair(mnemonic);
  return getWalletFromKeys(publicKey, network, version);
}
async function getWalletFromMnemonic(mnemonic, network, version) {
  const {
    publicKey
  } = await web.mnemonicToKeyPair(mnemonic);
  return getWalletFromKeys(publicKey, network, version);
}
function getWalletFromPrivateKey(privateKey, network, version) {
  const {
    publicKey
  } = privateKeyHexToKeyPair(privateKey);
  return getWalletFromKeys(publicKey, network, version);
}
async function getWalletFromKeys(publicKey, network, version) {
  let wallet;
  let lastTxId;
  if (version) {
    wallet = buildWallet(publicKey, version, network === 'testnet');
  } else {
    ({
      wallet,
      version,
      lastTxId
    } = await pickBestWallet(network, publicKey));
  }
  const address = (0,tonCore/* toBase64Address */.vn)(wallet.address, false, network);
  const publicKeyHex = (0,utils/* bytesToHex */.My)(publicKey);
  return {
    publicKey: publicKeyHex,
    address,
    version,
    index: 0,
    lastTxId
  };
}
function bip39MnemonicToKeyPair(mnemonic) {
  const hexSeed = src/* mnemonicToSeedSync */.kw(mnemonic.join(' '));
  const {
    key: privateKey
  } = derivePath(constants/* TON_BIP39_PATH */.W2, hexSeed.toString('hex'));
  return nacl_fast_default().sign.keyPair.fromSeed(privateKey);
}
function getOtherVersionWallet(network, wallet, otherVersion, isTestnetSubwalletId) {
  if (!wallet.publicKey) {
    throw new Error('The wallet has no public key');
  }
  const publicKey = (0,utils/* hexToBytes */.aT)(wallet.publicKey);
  const newAddress = publicKeyToAddress(network, publicKey, otherVersion, isTestnetSubwalletId);
  return {
    address: newAddress,
    publicKey: wallet.publicKey,
    version: otherVersion,
    index: wallet.index
  };
}
async function getWalletFromAddress(network, addressOrDomain) {
  const resolvedAddress = await resolveAddress(network, addressOrDomain, true);
  if (resolvedAddress === 'dnsNotResolved') return {
    error: types/* ApiAuthError */.Nu.DomainNotResolved
  };
  if (resolvedAddress === 'invalidAddress') return {
    error: types/* ApiAuthError */.Nu.InvalidAddress
  };
  const rawAddress = resolvedAddress.address;
  const [walletInfo, publicKey] = await Promise.all([getWalletInfo(network, rawAddress), (0,tonCore/* getWalletPublicKey */.q5)(network, rawAddress)]);
  return {
    title: resolvedAddress.name,
    wallet: (0,iteratees/* omitUndefined */.Oy)({
      publicKey: publicKey ? (0,utils/* bytesToHex */.My)(publicKey) : undefined,
      address: walletInfo.address,
      // The wallet has no version until it's initialized as a wallet. Using the default version just for the type
      // compliance, it plays no role for view wallets anyway.
      version: (walletInfo === null || walletInfo === void 0 ? void 0 : walletInfo.version) ?? config/* DEFAULT_WALLET_VERSION */.RoE,
      index: 0,
      isInitialized: (walletInfo === null || walletInfo === void 0 ? void 0 : walletInfo.isInitialized) ?? false
    })
  };
}
// EXTERNAL MODULE: ./src/api/chains/ton/util/index.ts
var util = __webpack_require__(41758);
// EXTERNAL MODULE: ./src/lib/big.js/index.js
var big_js = __webpack_require__(48805);
;// ./src/util/fee/transferFee.ts




/**
 * Converts the transfer fee data returned from API into data that is ready to be displayed in the transfer form UI.
 */
function explainApiTransferFee(input) {
  return shouldUseDiesel(input) ? explainGaslessTransferFee(input) : explainGasfullTransferFee(input);
}

/**
 * Calculates the maximum amount available for the transfer.
 * Returns undefined when it can't be calculated because of insufficient input data.
 */
function getMaxTransferAmount(_ref) {
  let {
    tokenBalance,
    tokenSlug,
    fullFee,
    canTransferFullBalance
  } = _ref;
  if (tokenBalance === undefined) {
    return undefined;
  }

  // Returning the full balance when the fee is unknown for a better UX
  if (canTransferFullBalance || !fullFee) {
    return tokenBalance;
  }
  let fee = fullFee.token ?? 0n;
  if (getIsNativeToken(tokenSlug)) {
    // When the token is native, both `token` and `native` refer to the same currency, so they should be added
    fee += fullFee.native ?? 0n;
  }
  return bigintMax(tokenBalance - fee, 0n);
}

/**
 * Decides whether the balance is sufficient to transfer the amount and pay the fees.
 * Returns undefined when it can't be calculated because of insufficient input data.
 */
function isBalanceSufficientForTransfer(_ref2) {
  let {
    tokenBalance,
    nativeTokenBalance,
    transferAmount,
    fullFee,
    canTransferFullBalance
  } = _ref2;
  if (transferAmount === undefined || tokenBalance === undefined || nativeTokenBalance === undefined || !fullFee) {
    return undefined;
  }
  const isFullTokenTransfer = transferAmount === tokenBalance && canTransferFullBalance;
  const tokenRequiredAmount = (fullFee.token ?? 0n) + (isFullTokenTransfer ? 0n : transferAmount);
  const nativeTokenRequiredAmount = fullFee.native ?? 0n;
  return tokenRequiredAmount <= tokenBalance && nativeTokenRequiredAmount <= nativeTokenBalance;
}
function isDieselAvailable(diesel) {
  return diesel.status !== 'not-available' && diesel.amount !== undefined;
}
function getDieselTokenAmount(diesel) {
  return diesel.status === 'stars-fee' ? 0n : diesel.amount ?? 0n;
}
function shouldUseDiesel(input) {
  return input.diesel !== undefined && isDieselAvailable(input.diesel);
}

/**
 * Converts the data of a transfer not involving diesel
 */
function explainGasfullTransferFee(input) {
  const result = {
    isGasless: false,
    canTransferFullBalance: input.tokenSlug === TONCOIN.slug
  };
  if (input.fee !== undefined) {
    result.fullFee = {
      precision: input.realFee === input.fee ? 'exact' : 'lessThan',
      terms: {
        native: input.fee
      },
      nativeSum: input.fee
    };
    result.realFee = result.fullFee;
  }
  if (input.realFee !== undefined) {
    result.realFee = {
      precision: input.realFee === input.fee ? 'exact' : 'approximate',
      terms: {
        native: input.realFee
      },
      nativeSum: input.realFee
    };
  }
  if (input.fee !== undefined && input.realFee !== undefined) {
    result.excessFee = input.fee - input.realFee;
  }
  return result;
}

/**
 * Converts the diesel of semi-diesel transfer data
 */
function explainGaslessTransferFee(_ref3) {
  let {
    diesel
  } = _ref3;
  const isStarsDiesel = diesel.status === 'stars-fee';
  const dieselKey = isStarsDiesel ? 'stars' : 'token';
  const realFeeInDiesel = convertFee(diesel.realFee, diesel.nativeAmount, diesel.amount);
  // Cover as much displayed real fee as possible with diesel, because in the excess it will return as the native token.
  const dieselRealFee = bigintMin(diesel.amount, realFeeInDiesel);
  // Cover the remaining real fee with the native token.
  const nativeRealFee = bigintMax(0n, diesel.realFee - diesel.nativeAmount);
  return {
    isGasless: true,
    canTransferFullBalance: false,
    fullFee: {
      precision: 'lessThan',
      terms: {
        [dieselKey]: diesel.amount,
        native: diesel.remainingFee
      },
      nativeSum: diesel.nativeAmount + diesel.remainingFee
    },
    realFee: {
      precision: 'approximate',
      terms: {
        [dieselKey]: dieselRealFee,
        native: nativeRealFee
      },
      nativeSum: diesel.realFee
    },
    excessFee: diesel.nativeAmount + diesel.remainingFee - diesel.realFee
  };
}

/**
 * `exampleFromAmount` and `exampleToAmount` define the exchange rate used to convert `amount`.
 * `exampleFromAmount` is defined in the same currency as `amount`. Mustn't be 0.
 * `exampleToAmount` is defined in the currency you want to get.
 */
function convertFee(amount, exampleFromAmount, exampleToAmount) {
  const exchangeRate = Big(exampleToAmount.toString()).div(exampleFromAmount.toString());
  return BigInt(Big(amount.toString()).mul(exchangeRate).round().toString());
}
;// ./src/util/ton/transfer.ts

function isNftTransferPayload(payload) {
  return (payload === null || payload === void 0 ? void 0 : payload.type) === 'nft:transfer';
}
function isTokenTransferPayload(payload) {
  return (payload === null || payload === void 0 ? void 0 : payload.type) === 'tokens:transfer' || (payload === null || payload === void 0 ? void 0 : payload.type) === 'tokens:transfer-non-standard';
}

/** How many messages can be sent in a single transaction */
function getMaxMessagesInTransaction(account, ignoreLedger) {
  const {
    type,
    byChain: {
      ton: {
        version
      }
    }
  } = account;
  if (type === 'ledger' && !ignoreLedger) {
    return constants/* LEDGER_MAX_MESSAGES */.qP;
  } else if (version === 'W5') {
    return constants/* W5_MAX_MESSAGES */.Bm;
  } else {
    return constants/* DEFAULT_MAX_MESSAGES */.EV;
  }
}
;// ./src/api/chains/ton/util/diesel.ts

const DIESEL_URL = '/diesel';
function dieselSendBoc(boc) {
  return callBackendPost(`${DIESEL_URL}/sendBoc`, {
    boc,
    isAddition: true
  }, {
    shouldRetry: true
  });
}
;// ./src/api/chains/ton/util/w5diesel.ts

const w5diesel_DIESEL_URL = '/diesel';
function dieselW5SendRequest(boc) {
  return callBackendPost(`${w5diesel_DIESEL_URL}/w5/sendBoc`, {
    boc,
    isAddition: true
  }, {
    shouldRetry: true
  });
}
;// ./src/api/chains/ton/util/sendExternal.ts



async function sendExternal(client, wallet, message, gaslessType) {
  const {
    address,
    init
  } = wallet;
  let neededInit;
  if (init && !(await client.isContractDeployed(address))) {
    neededInit = init;
  }
  const ext = (0,core_dist.external)({
    to: address,
    init: neededInit ? {
      code: neededInit.code,
      data: neededInit.data
    } : undefined,
    body: message
  });
  const cell = (0,core_dist.beginCell)().store((0,core_dist.storeMessage)(ext)).endCell();
  const isW5Gasless = gaslessType === 'w5';
  const msgHash = cell.hash().toString('base64');
  const msgHashNormalized = getExternalMsgHashNormalized(ext);
  const bodyMessageHash = message.hash().toString('base64');
  const boc = cell.toBoc().toString('base64');
  let paymentLink;
  if (isW5Gasless) {
    const result = await dieselW5SendRequest(boc);
    paymentLink = result.paymentLink;
  } else if (gaslessType === 'diesel') {
    const result = await dieselSendBoc(boc);
    paymentLink = result.paymentLink;
  } else {
    await client.sendFile(boc);
  }
  return {
    boc,
    msgHash: isW5Gasless ? bodyMessageHash : msgHash,
    msgHashNormalized,
    paymentLink
  };
}
function getExternalMsgHashNormalized(message) {
  const cell = (0,core_dist.beginCell)().storeUint(2, 2) // Message type: external-in
  .storeUint(0, 2) // No sender address for external messages
  .storeAddress(message.info.dest) // Store recipient address
  .storeUint(0, 4) // Import fee is always zero for external messages
  .storeBit(false) // No StateInit in this message
  .storeBit(true) // Store the body as a reference
  .storeRef(message.body) // Store the message body
  .endCell();
  return cell.hash().toString('base64');
}
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV5R1.js
var WalletContractV5R1 = __webpack_require__(8387);
;// ./src/util/crcHash.ts
/* provided dependency */ var crcHash_Buffer = __webpack_require__(48287)["Buffer"];
function crc32(data) {
  return crc32FromBytes(crcHash_Buffer.from(data));
}
function crc32FromBytes(bytes) {
  // The implementation is based on https://stackoverflow.com/a/18639999/1118709
  const crc32Table = makeCrc32Table();
  let crc = 0 ^ -1;
  for (let i = 0; i < bytes.length; i++) {
    crc = crc >>> 8 ^ crc32Table[(crc ^ bytes[i]) & 0xFF];
  }
  return (crc ^ -1) >>> 0;
}
let crc32Table;
function makeCrc32Table() {
  if (!crc32Table) {
    let c;
    crc32Table = new Uint32Array(256);
    for (let n = 0; n < 256; n++) {
      c = n;
      for (let k = 0; k < 8; k++) {
        c = c & 1 ? 0xEDB88320 ^ c >>> 1 : c >>> 1;
      }
      crc32Table[n] = c;
    }
  }
  return crc32Table;
}
;// ./src/api/tonConnect/signing.ts
/* provided dependency */ var signing_Buffer = __webpack_require__(48287)["Buffer"];





async function signTonProofWithPrivateKey(walletAddress, privateKey, proof) {
  const {
    timestamp,
    domain,
    payload
  } = proof;
  const address = walletAddress instanceof core_dist.Address ? walletAddress : core_dist.Address.parse(walletAddress);
  const messageBuffer = signing_Buffer.concat([signing_Buffer.from('ton-proof-item-v2/'), makeAddressBuffer(address), makeBytesWithLengthBuffer(signing_Buffer.from(domain), false), makeTimestampBuffer(timestamp, false), signing_Buffer.from(payload)]);
  const bufferToSign = signing_Buffer.concat([signing_Buffer.from([0xff, 0xff]), signing_Buffer.from('ton-connect'), signing_Buffer.from(await (0,utils/* sha256 */.sc)(messageBuffer))]);
  return nacl_fast_default().sign.detached(new Uint8Array(await (0,utils/* sha256 */.sc)(bufferToSign)), privateKey);
}

/**
 * See https://docs.tonconsole.com/academy/sign-data#how-the-signature-is-built for more details
 */
async function signDataWithPrivateKey(walletAddress, timestamp,
// Unix seconds, should be the current time
domain, payload, privateKey) {
  const address = walletAddress instanceof core_dist.Address ? walletAddress : core_dist.Address.parse(walletAddress);
  const hash = await (payload.type === 'cell' ? createCellDataHash(address, timestamp, domain, payload) : createTextDataHash(address, timestamp, domain, payload));
  return nacl_fast_default().sign.detached(hash, privateKey);
}

// https://docs.tonconsole.com/academy/sign-data#for-cell
function createCellDataHash(walletAddress, timestamp, domain, payload) {
  const message = (0,core_dist.beginCell)().storeUint(0x75569022, 32).storeUint(crc32(payload.schema), 32).storeUint(timestamp, 64).storeAddress(walletAddress).storeStringRefTail((0,util_dns/* encodeDomain */.Xy)(domain)).storeRef(core_dist.Cell.fromBase64(payload.cell)).endCell();
  const hashBuffer = message.hash();
  return new Uint8Array(hashBuffer.buffer, hashBuffer.byteOffset, hashBuffer.byteLength);
}

// https://docs.tonconsole.com/academy/sign-data#for-text-and-binary
async function createTextDataHash(walletAddress, timestamp, domain, payload) {
  const message = signing_Buffer.concat([signing_Buffer.from([0xff, 0xff]), signing_Buffer.from('ton-connect/sign-data/'), makeAddressBuffer(walletAddress), makeBytesWithLengthBuffer(signing_Buffer.from(domain), true), makeTimestampBuffer(timestamp, true), signing_Buffer.from(payload.type === 'text' ? 'txt' : 'bin'), makeBytesWithLengthBuffer(payload.type === 'text' ? signing_Buffer.from(payload.text, 'utf8') : signing_Buffer.from(payload.bytes, 'base64'), true)]);
  return new Uint8Array(await (0,utils/* sha256 */.sc)(message));
}
function makeAddressBuffer(address) {
  const workChainLength = 4;
  const addressBuffer = signing_Buffer.allocUnsafe(workChainLength + address.hash.length);
  addressBuffer.writeInt32BE(address.workChain);
  address.hash.copy(addressBuffer, workChainLength);
  return addressBuffer;
}
function makeBytesWithLengthBuffer(bytes, isBigEndian) {
  const lengthLength = 4;
  const buffer = signing_Buffer.allocUnsafe(lengthLength + bytes.length);
  if (isBigEndian) {
    buffer.writeInt32BE(bytes.length);
  } else {
    buffer.writeInt32LE(bytes.length);
  }
  bytes.copy(buffer, lengthLength);
  return buffer;
}
function makeTimestampBuffer(unixSeconds, isBigEndian) {
  const timestampBuffer = signing_Buffer.allocUnsafe(8);
  const timestamp = BigInt(unixSeconds);
  if (isBigEndian) {
    timestampBuffer.writeBigInt64BE(timestamp);
  } else {
    timestampBuffer.writeBigInt64LE(timestamp);
  }
  return timestampBuffer;
}
// EXTERNAL MODULE: ./src/lib/aes-js/index.js
var aes_js = __webpack_require__(87963);
var aes_js_default = /*#__PURE__*/__webpack_require__.n(aes_js);
// EXTERNAL MODULE: ./src/lib/noble-ed25519/index.js
var noble_ed25519 = __webpack_require__(52598);
;// ./src/api/chains/ton/util/encryption.ts
/* provided dependency */ var encryption_Buffer = __webpack_require__(48287)["Buffer"];
// This JS library implements TON message comment encryption and decryption for Web
// Reference C++ code - SimpleEncryptionV2 - https://github.com/ton-blockchain/ton/blob/cc0eb453cb3bf69f92693160103d33112856c056/tonlib/tonlib/keys/SimpleEncryption.cpp#L110
// Dependencies:
// - TonWeb 0.0.60
// - aes-js - 3.1.2 - https://github.com/ricmoo/aes-js/releases/tag/v3.1.2 - for aes-cbc without padding
// - noble-ed25519 - 1.7.3 - // https://github.com/paulmillr/noble-ed25519/releases/tag/1.7.3 - for getSharedKey





async function hmacSha512(key, data) {
  const hmacAlgo = {
    name: 'HMAC',
    hash: 'SHA-512'
  };
  const hmacKey = await crypto.subtle.importKey('raw', key, hmacAlgo, false, ['sign']);
  const signature = await crypto.subtle.sign(hmacAlgo, hmacKey, data);
  const result = new Uint8Array(signature);
  if (result.length !== 512 / 8) throw new Error();
  return result;
}
function getAesCbcState(hash) {
  if (hash.length < 48) throw new Error();
  const key = hash.slice(0, 32);
  const iv = hash.slice(32, 32 + 16);

  // Note that native crypto.subtle AES-CBC not suitable here because
  // even if the data IS a multiple of 16 bytes, padding will still be added
  // So we use aes-js

  return new (aes_js_default()).ModeOfOperation.cbc(key, iv);
}
function getRandomPrefix(dataLength, minPadding) {
  const prefixLength = (minPadding + 15 + dataLength & -16) - dataLength;
  const prefix = crypto.getRandomValues(new Uint8Array(prefixLength));
  prefix[0] = prefixLength;
  if ((prefixLength + dataLength) % 16 !== 0) throw new Error();
  return prefix;
}
function combineSecrets(a, b) {
  return hmacSha512(a, b);
}
async function encryptDataWithPrefix(data, sharedSecret, salt) {
  if (data.length % 16 !== 0) throw new Error();
  const dataHash = await combineSecrets(salt, data);
  const msgKey = dataHash.slice(0, 16);
  const res = new Uint8Array(data.length + 16);
  res.set(msgKey, 0);
  const cbcStateSecret = await combineSecrets(sharedSecret, msgKey);
  const encrypted = getAesCbcState(cbcStateSecret).encrypt(data);
  res.set(encrypted, 16);
  return res;
}
async function encryptDataImpl(data, sharedSecret, salt) {
  const prefix = getRandomPrefix(data.length, 16);
  const combined = new Uint8Array(prefix.length + data.length);
  combined.set(prefix, 0);
  combined.set(data, prefix.length);
  return encryptDataWithPrefix(combined, sharedSecret, salt);
}
async function encryptData(data, myPublicKey, theirPublicKey, privateKey, salt) {
  const sharedSecret = await (0,noble_ed25519.getSharedSecret)(privateKey, theirPublicKey);
  const encrypted = await encryptDataImpl(data, sharedSecret, salt);
  const prefixedEncrypted = new Uint8Array(myPublicKey.length + encrypted.length);
  for (let i = 0; i < myPublicKey.length; i++) {
    prefixedEncrypted[i] = theirPublicKey[i] ^ myPublicKey[i];
  }
  prefixedEncrypted.set(encrypted, myPublicKey.length);
  return prefixedEncrypted;
}
async function encryptMessageComment(comment, myPublicKey, theirPublicKey, myPrivateKey, senderAddress) {
  if (!comment || !comment.length) throw new Error('empty comment');
  if (myPrivateKey.length === 64) {
    myPrivateKey = myPrivateKey.slice(0, 32); // convert nacl private key
  }
  const commentBytes = new TextEncoder().encode(comment);
  const salt = new TextEncoder().encode((0,tonCore/* toBase64Address */.vn)(senderAddress, true));
  const encryptedBytes = await encryptData(commentBytes, myPublicKey, theirPublicKey, myPrivateKey, salt);
  const payload = new Uint8Array(encryptedBytes.length + 4);
  const buffer = encryption_Buffer.alloc(4);
  buffer.writeUInt32BE(constants/* OpCode */.$G.Encrypted);
  payload.set(buffer, 0);
  payload.set(encryptedBytes, 4);
  return payload;
}
async function doDecrypt(cbcStateSecret, msgKey, encryptedData, salt) {
  const decryptedData = getAesCbcState(cbcStateSecret).decrypt(encryptedData);
  const dataHash = await combineSecrets(salt, decryptedData);
  const gotMsgKey = dataHash.slice(0, 16);
  if (msgKey.join(',') !== gotMsgKey.join(',')) {
    throw new Error('Failed to decrypt: hash mismatch');
  }
  const prefixLength = decryptedData[0];
  if (prefixLength > decryptedData.length || prefixLength < 16) {
    throw new Error('Failed to decrypt: invalid prefix size');
  }
  return decryptedData.slice(prefixLength);
}
async function decryptDataImpl(encryptedData, sharedSecret, salt) {
  if (encryptedData.length < 16) throw new Error('Failed to decrypt: data is too small');
  if (encryptedData.length % 16 !== 0) throw new Error('Failed to decrypt: data size is not divisible by 16');
  const msgKey = encryptedData.slice(0, 16);
  const data = encryptedData.slice(16);
  const cbcStateSecret = await combineSecrets(sharedSecret, msgKey);
  const res = await doDecrypt(cbcStateSecret, msgKey, data, salt);
  return res;
}
async function decryptData(data, publicKey, privateKey, salt) {
  if (data.length < publicKey.length) {
    throw new Error('Failed to decrypt: data is too small');
  }
  const theirPublicKey = new Uint8Array(publicKey.length);
  for (let i = 0; i < publicKey.length; i++) {
    theirPublicKey[i] = data[i] ^ publicKey[i];
  }
  const sharedSecret = await (0,noble_ed25519.getSharedSecret)(privateKey, theirPublicKey);
  const decrypted = await decryptDataImpl(data.slice(publicKey.length), sharedSecret, salt);
  return decrypted;
}
async function decryptMessageComment(encryptedData, myPublicKey, myPrivateKey, senderAddress) {
  if (myPrivateKey.length === 64) {
    myPrivateKey = myPrivateKey.slice(0, 32); // convert nacl private key
  }
  const salt = new TextEncoder().encode((0,tonCore/* toBase64Address */.vn)(senderAddress, true));
  const decryptedBytes = await decryptData(encryptedData, myPublicKey, myPrivateKey, salt);
  return new TextDecoder().decode(decryptedBytes);
}
;// ./src/api/chains/ton/util/signer.ts
/* provided dependency */ var signer_Buffer = __webpack_require__(48287)["Buffer"];










/**
 * Signs, encrypts and decrypts TON stuff.
 *
 * For all the methods: error is _returned_ only for expected errors, i.e. caused not by mistakes in the app code.
 */

function getSigner(accountId, account, /** Required for mnemonic accounts when the mock signing is off */
password, /** Set `true` if you only need to emulate the transaction */
isMockSigning, /** Used for specific transactions on vesting.ton.org */
ledgerSubwalletId) {
  if (isMockSigning || account.type === 'view') {
    return new MockSigner(account.byChain.ton);
  }
  if (account.type === 'ledger') {
    return new LedgerSigner(parseAccountId(accountId).network, account.byChain.ton, ledgerSubwalletId);
  }
  if (password === undefined) throw new Error('Password not provided');
  return new MnemonicSigner(accountId, account, password);
}
class PrivateKeySigner {
  constructor(wallet) {
    this.wallet = wallet;
  }
  async signTonProof(proof) {
    const privateKey = await this.getPrivateKey();
    if ('error' in privateKey) return privateKey;
    const signature = await signTonProofWithPrivateKey(this.wallet.address, privateKey, proof);
    return signer_Buffer.from(signature);
  }
  async signTransactions(transactions) {
    const privateKey = await this.getPrivateKey();
    if ('error' in privateKey) return privateKey;
    return signTransactionsWithPrivateKey(transactions, this.wallet, privateKey);
  }
  async signData(timestamp, domain, payload) {
    const privateKey = await this.getPrivateKey();
    if ('error' in privateKey) return privateKey;
    const signature = await signDataWithPrivateKey(this.wallet.address, timestamp, domain, payload, privateKey);
    return signer_Buffer.from(signature);
  }
  async encryptComment(comment, recipientPublicKey) {
    const privateKey = await this.getPrivateKey();
    if ('error' in privateKey) return privateKey;
    const encrypted = await encryptMessageComment(comment, this.getPublicKey(), recipientPublicKey, privateKey, this.wallet.address);
    return signer_Buffer.from(encrypted.buffer, encrypted.byteOffset, encrypted.byteLength);
  }
  async decryptComment(encrypted, senderAddress) {
    const privateKey = await this.getPrivateKey();
    if ('error' in privateKey) return privateKey;
    return decryptMessageComment(encrypted, this.getPublicKey(), privateKey, senderAddress);
  }
  getPublicKey() {
    const publicKeyHex = this.wallet.publicKey;
    if (!publicKeyHex) {
      // Mnemonic wallets must always have a public key. This error happens when a developer provides a wrong wallet type.
      throw new Error('Public key is missing');
    }
    return (0,utils/* hexToBytes */.aT)(publicKeyHex);
  }
}
class MnemonicSigner extends PrivateKeySigner {
  isMock = false;
  constructor(accountId, account, password) {
    super(account.byChain.ton);
    this.accountId = accountId;
    this.account = account;
    this.password = password;
  }

  // Obtaining the key pair from the password takes much time, so the result is cached.
  getPrivateKey = (0,withCache/* default */.A)(async () => {
    const privateKey = await fetchPrivateKey(this.accountId, this.password, this.account);
    return privateKey || {
      error: types/* ApiCommonError */.QD.InvalidPassword
    };
  });
}
class MockSigner extends PrivateKeySigner {
  isMock = true;
  getPrivateKey() {
    return signer_Buffer.alloc(64);
  }
}
class LedgerSigner {
  isMock = false;
  constructor(network, wallet, subwalletId) {
    this.network = network;
    this.wallet = wallet;
    this.subwalletId = subwalletId;
  }
  async signTonProof(proof) {
    const {
      signTonProofWithLedger
    } = await Promise.all(/* import() */[__webpack_require__.e(909), __webpack_require__.e(76)]).then(__webpack_require__.bind(__webpack_require__, 38861));
    return signTonProofWithLedger(this.network, this.wallet, proof);
  }
  async signTransactions(transactions) {
    const {
      signTonTransactionsWithLedger
    } = await Promise.all(/* import() */[__webpack_require__.e(909), __webpack_require__.e(76)]).then(__webpack_require__.bind(__webpack_require__, 38861));
    return signTonTransactionsWithLedger(this.network, this.wallet, transactions, this.subwalletId);
  }
  signData() {
    throw new Error('Ledger does not support SignData');
  }
  encryptComment() {
    throw new Error('Ledger does not support comment encryption');
  }
  decryptComment() {
    throw new Error('Ledger does not support comment decryption');
  }
}
function signTransactionsWithPrivateKey(transactions, storedWallet, secretKeyUint8Array) {
  const secretKey = signer_Buffer.from(secretKeyUint8Array);
  const wallet = getTonWallet(storedWallet);
  return transactions.map(transaction => {
    if (wallet instanceof WalletContractV5R1.WalletContractV5R1) {
      return wallet.createTransfer({
        ...transaction,
        // TODO Remove it. There is bug in @ton/ton library that causes transactions to be executed in reverse order.
        messages: [...transaction.messages].reverse(),
        secretKey
      });
    }
    const {
      authType = 'external'
    } = transaction;
    if (authType !== 'external') {
      throw new Error(`${storedWallet.version} wallet doesn't support authType "${authType}"`);
    }
    return wallet.createTransfer({
      ...transaction,
      secretKey
    });
  });
}
;// ./src/api/common/preventTransferConcurrency.ts



const queues = {};

/**
 * Prevents concurrency when sending multiple transfers. Preventing concurrency is necessary in TON, because every
 * transaction must have a unique sequential `seqno` that matched the one in the wallet data exactly.
 *
 * `task` is the function performing actions that should not run concurrently. It runs in 3 stages:
 *  - foreground — ends when `task` returns. The promise returned by `withoutTransferConcurrency` is settled the
 *    same moment with the same result;
 *  - background — ends when all the tasks, provided to the `finalizeInBackground` callback, finish.
 *
 * Before `task` is executed, the function waits for both stages of all the previous tasks for the same `network` and
 * `fromAddress` to complete.
 */
function withoutTransferConcurrency(network, fromAddress, task) {
  const queueKey = `${network} ${fromAddress}`;
  const foregroundDeferred = new Deferred/* default */.A();
  const backgroundPromises = [];
  const finalizeInBackground = backgroundTask => {
    backgroundPromises.push(backgroundTask().catch(handleError/* handleError */.H));
  };
  queues[queueKey] ??= (0,schedulers/* createTaskQueue */.JL)(1);
  void queues[queueKey].run(async () => {
    try {
      foregroundDeferred.resolve(await task(finalizeInBackground));
    } catch (err) {
      foregroundDeferred.reject(err);
    }
    await Promise.all(backgroundPromises);
  });
  return foregroundDeferred.promise;
}
// EXTERNAL MODULE: ./src/api/errors.ts
var errors = __webpack_require__(39989);
;// ./src/api/chains/ton/toncenter/traces.ts

async function fetchTrace(options) {
  const {
    network,
    msgHashNormalized,
    isActionPending
  } = options;
  const response = await other_callToncenterV3(network, isActionPending ? '/pendingTraces' : '/traces', {
    [isActionPending ? 'ext_msg_hash' : 'msg_hash']: msgHashNormalized,
    include_actions: true
  });
  return {
    trace: response.traces[0],
    addressBook: response.address_book,
    metadata: response.metadata
  };
}
;// ./src/api/chains/ton/traces.ts





/**
 * Returns `undefined` when there is no trace for the given hash. It may be unavailable YET, for example if the trace is
 * requested immediately after receiving an action from the socket.
 */
async function fetchAndParseTrace(network, walletAddress, msgHashNormalized, isActionPending) {
  const {
    trace,
    addressBook
  } = await fetchTrace({
    network,
    msgHashNormalized,
    isActionPending
  });
  return trace && parseTrace({
    network,
    walletAddress,
    actions: trace.actions,
    traceDetail: trace.trace,
    addressBook,
    transactions: trace.transactions
  });
}
function parseTrace(options) {
  const {
    network,
    walletAddress,
    actions,
    traceDetail,
    addressBook,
    transactions
  } = options;
  const byTransactionIndex = isFailedTransactionTrace(traceDetail) ? parseFailedTransactions(traceDetail, transactions) : parseCompletedTransactions(network, walletAddress, traceDetail, addressBook, transactions);
  return {
    actions,
    traceDetail,
    addressBook,
    byTransactionIndex,
    totalSent: byTransactionIndex.reduce((total, _ref) => {
      let {
        sent
      } = _ref;
      return total + sent;
    }, 0n),
    totalReceived: byTransactionIndex.reduce((total, _ref2) => {
      let {
        received
      } = _ref2;
      return total + received;
    }, 0n),
    totalNetworkFee: byTransactionIndex.reduce((total, _ref3) => {
      let {
        networkFee
      } = _ref3;
      return total + networkFee;
    }, 0n)
  };
}
function isFailedTransactionTrace(traceDetails) {
  return traceDetails.children.length === 0;
}
function parseCompletedTransactions(network, walletAddress, traceDetail, addressBook, rawTransactions) {
  const transactions = Object.values(rawTransactions).map(rawTx => parseRawTransaction(network, rawTx, addressBook)).flat();
  const byHash = (0,iteratees/* groupBy */.$z)(transactions, 'hash');
  const byTransactionIndex = [];
  let isWalletTransactionFound = false;
  function processTrace(_traceDetail, _index) {
    const hash = _traceDetail.tx_hash;
    const txs = byHash[hash] || [];
    if (!isWalletTransactionFound) {
      isWalletTransactionFound = txs.some(_ref4 => {
        let {
          fromAddress,
          isIncoming
        } = _ref4;
        return fromAddress === walletAddress && !isIncoming;
      });

      // In gasless operations, we need to skip transactions before our wallet
      if (!isWalletTransactionFound) {
        _traceDetail.children.forEach(processTrace);
        return;
      }
    }
    for (const [i, tx] of txs.entries()) {
      const {
        fromAddress,
        toAddress,
        amount,
        isIncoming,
        fee,
        msgHash,
        type
      } = tx;
      const index = _index ?? i;
      if (!(index in byTransactionIndex)) {
        // First transaction from wallet includes all sub-transactions, and its hash is not unique
        byTransactionIndex.push({
          hashes: new Set(),
          sent: 0n,
          received: 0n,
          networkFee: 0n,
          isSuccess: true
        });
      } else {
        byTransactionIndex[index].hashes.add(hash);
      }
      if (fromAddress === walletAddress && !isIncoming) {
        byTransactionIndex[index].sent += (0,bigint/* bigintAbs */.wg)(amount);
        byTransactionIndex[index].networkFee = fee;
      } else if (toAddress === walletAddress && isIncoming && type !== 'bounced') {
        byTransactionIndex[index].received += (0,bigint/* bigintAbs */.wg)(amount);
      }
      const child = _traceDetail.children.find(_ref5 => {
        let {
          in_msg_hash
        } = _ref5;
        return in_msg_hash === msgHash;
      });
      if (child) {
        processTrace(child, index);
      }
    }
  }
  processTrace(traceDetail);
  return byTransactionIndex;
}
function parseFailedTransactions(traceDetails, rawTransactions) {
  const txHash = traceDetails.tx_hash;
  const rawTx = rawTransactions[txHash];

  // The root transaction can represent multiple actual failed transactions. Instead, the returned array contains only
  // one item. The actual number of failed transactions can be obtained by parsing `rawTx.in_msg.message_content.body`
  // probably, but this is not needed, so the code is simplified.
  return [{
    hashes: new Set([txHash]),
    sent: 0n,
    received: 0n,
    networkFee: BigInt(rawTx.total_fees),
    isSuccess: false
  }];
}
;// ./src/api/chains/ton/activities.ts
/* provided dependency */ var activities_Buffer = __webpack_require__(48287)["Buffer"];

















const GET_TRANSACTIONS_LIMIT = 128;
const RELOAD_ACTIVITIES_ATTEMPTS = 4;
const RELOAD_ACTIVITIES_PAUSE = SEC;
const TRACE_ATTEMPT_COUNT = 5;
const TRACE_RETRY_DELAY = SEC;
const checkHasTransaction = (0,withCacheAsync/* default */.A)(async (network, address) => {
  const transactions = await fetchTransactions({
    network,
    address,
    limit: 1
  });
  return Boolean(transactions.length);
});
async function fetchActivitySlice(_ref) {
  let {
    accountId,
    tokenSlug,
    toTimestamp,
    fromTimestamp,
    limit
  } = _ref;
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  let activities;
  if (!tokenSlug) {
    activities = await fetchActions({
      network,
      filter: {
        address
      },
      walletAddress: address,
      limit: limit ?? GET_TRANSACTIONS_LIMIT,
      fromTimestamp,
      toTimestamp
    });
  } else {
    let tokenWalletAddress = address;
    if (tokenSlug !== config/* TONCOIN */.Tu9.slug) {
      await tokensPreload.promise;
      tokenWalletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, address, getTokenBySlug(tokenSlug).tokenAddress);
    }
    activities = await fetchActions({
      network,
      filter: {
        address: tokenWalletAddress
      },
      walletAddress: address,
      limit: limit ?? GET_TRANSACTIONS_LIMIT,
      fromTimestamp,
      toTimestamp
    });
    activities = activities.filter(activity => getActivityTokenSlugs(activity).includes(tokenSlug));
  }

  // Even though the activities returned by the API are sorted by timestamp, our sorting may differ.
  // It's important to ensuring our sorting, because otherwise `mergeSortedActivities` may leave duplicates.
  activities = sortActivities(activities);
  return reloadIncompleteActivities(network, address, activities);
}
async function reloadIncompleteActivities(network, address, activities) {
  try {
    let actionIdsToReload = activities.filter(activity => activity.shouldReload).map(activity => parseActionActivityId(activity.id).actionId);
    for (let attempt = 0; attempt < RELOAD_ACTIVITIES_ATTEMPTS && actionIdsToReload.length; attempt++) {
      (0,logs/* logDebug */.MD)(`Reload incomplete activities #${attempt + 1}`, actionIdsToReload);
      await (0,schedulers/* pause */.v7)(RELOAD_ACTIVITIES_PAUSE);
      ({
        activities,
        actionIdsToReload
      } = await tryReloadIncompleteActivities(network, address, activities, actionIdsToReload));
    }
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('reloadIncompleteActivities', err);
  }
  return activities;
}
async function tryReloadIncompleteActivities(network, address, activities, actionIdsToReload) {
  const actionIdBatches = (0,iteratees/* split */.lD)(actionIdsToReload, GET_TRANSACTIONS_LIMIT);
  const batchResults = await Promise.all(actionIdBatches.map(async actionIds => {
    const reloadedActivities = await fetchActions({
      network,
      filter: {
        actionId: actionIds
      },
      walletAddress: address,
      limit: GET_TRANSACTIONS_LIMIT
    });
    return reloadedActivities.filter(activity => !activity.shouldReload);
  }));
  const reloadedActivities = batchResults.flat();
  if (reloadedActivities.length) {
    const replaceById = (0,iteratees/* buildCollectionByKey */.dU)(reloadedActivities, 'id');
    const reloadedActionIds = reloadedActivities.map(activity => parseActionActivityId(activity.id).actionId);
    activities = activities.map(activity => replaceById[activity.id] ?? activity);
    actionIdsToReload = (0,iteratees/* findDifference */.Hl)(actionIdsToReload, reloadedActionIds);
  }
  return {
    activities,
    actionIdsToReload
  };
}
async function decryptComment(_ref2) {
  let {
    accountId,
    activity,
    password
  } = _ref2;
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const signer = getSigner(accountId, account, password);
  return signer.decryptComment(activities_Buffer.from(activity.encryptedComment, 'base64'), activity.fromAddress);
}
async function fetchActivityDetails(accountId, activity) {
  var _result;
  const {
    network
  } = parseAccountId(accountId);
  const {
    address: walletAddress
  } = await fetchStoredWallet(accountId, 'ton');
  let result;

  // The trace can be unavailable immediately after the action is received, so a couple of delayed retries are made
  for (let attempt = 0; attempt < TRACE_ATTEMPT_COUNT && !result; attempt++) {
    if (attempt > 0) {
      await (0,schedulers/* pause */.v7)(TRACE_RETRY_DELAY);
    }
    const parsedTrace = await fetchAndParseTrace(network, walletAddress, activity.externalMsgHashNorm, getIsActivityPending(activity));
    if (!parsedTrace) {
      continue;
    }
    result = calculateActivityDetails(activity, parsedTrace);
  }
  if (!result) {
    (0,logs/* logDebugError */.SJ)('Trace unavailable for activity', activity.id);
  }
  return (_result = result) === null || _result === void 0 ? void 0 : _result.activity;
}
function calculateActivityDetails(activity, parsedTrace) {
  const {
    actionId
  } = parseActionActivityId(activity.id);
  const {
    actions,
    byTransactionIndex
  } = parsedTrace;
  const action = actions.find(_ref3 => {
    let {
      action_id
    } = _ref3;
    return action_id === actionId;
  });
  if (!action) {
    // This can happen when the trace is requested too early, for example right after receiving the action from a socket
    return undefined;
  }
  const actionHashes = new Set(action.transactions);
  const tracePart = byTransactionIndex.find(item => {
    return (0,iteratees/* intersection */.E$)(item.hashes, actionHashes).size;
  });
  let result;
  if (activity.kind === 'swap') {
    result = setSwapDetails({
      parsedTrace,
      activity,
      action: action,
      tracePart
    });
  } else {
    result = setTransactionDetails({
      parsedTrace,
      activity,
      action,
      tracePart
    });
  }
  (0,logs/* logDebug */.MD)('Calculation of fee for action', {
    actionId: action.action_id,
    externalMsgHashNorm: activity.externalMsgHashNorm,
    activityStatus: activity.status,
    networkFee: (0,util_decimals/* toDecimal */.nI)(tracePart.networkFee),
    realFee: (0,util_decimals/* toDecimal */.nI)(getActivityRealFee(result.activity)),
    sentForFee: (0,util_decimals/* toDecimal */.nI)(result.sentForFee),
    excess: (0,util_decimals/* toDecimal */.nI)(result.excess),
    details: action.details
  });
  return result;
}
function setSwapDetails(options) {
  const {
    action,
    tracePart,
    parsedTrace: {
      actions
    }
  } = options;
  let {
    activity
  } = options;
  const {
    details
  } = action;
  let sentForFee = tracePart.sent;
  let excess = tracePart.received;

  // When the transaction is failed, its `sent` and `received` are always 0 (as defined in `parseFailedTransactions`)
  if (tracePart.isSuccess) {
    if (!details.asset_in) {
      // TON -> token
      sentForFee -= BigInt(details.dex_incoming_transfer.amount);
    } else if (!details.asset_out) {
      // Token -> TON
      excess -= BigInt(details.dex_outgoing_transfer.amount);
    }
  }
  const realFee = tracePart.networkFee + sentForFee - excess;
  activity = {
    ...activity,
    networkFee: (0,util_decimals/* toDecimal */.nI)(realFee)
  };
  let ourFee;
  if (!details.asset_in) {
    const ourFeeAction = actions.find(_action => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-enum-comparison
      return _action.type === 'call_contract' && Number(_action.details.opcode) === constants/* OpCode */.$G.OurFee;
    });
    if (ourFeeAction !== null && ourFeeAction !== void 0 && ourFeeAction.success) {
      ourFee = BigInt(ourFeeAction.details.value);
    }
  } else {
    const ourFeeAction = actions.find(_action => {
      return _action.type === 'jetton_transfer' && _action.details.forward_payload === constants/* OUR_FEE_PAYLOAD_BOC */.SQ;
    });
    if (ourFeeAction !== null && ourFeeAction !== void 0 && ourFeeAction.success) {
      ourFee = BigInt(ourFeeAction.details.amount);
    }
  }
  if (ourFee) {
    const tokenIn = getTokenBySlug(activity.from);
    activity.ourFee = (0,util_decimals/* toDecimal */.nI)(ourFee, tokenIn === null || tokenIn === void 0 ? void 0 : tokenIn.decimals);
  }
  delete activity.shouldLoadDetails;
  return {
    activity,
    sentForFee,
    excess
  };
}
function setTransactionDetails(options) {
  const {
    action,
    tracePart,
    parsedTrace: {
      addressBook,
      totalSent,
      totalReceived,
      totalNetworkFee
    }
  } = options;
  let {
    activity
  } = options;
  let {
    networkFee,
    sent: sentForFee,
    received: excess
  } = tracePart;
  switch (action.type) {
    case 'ton_transfer':
    case 'call_contract':
      {
        sentForFee -= BigInt(action.details.value);
        break;
      }
    case 'nft_transfer':
      {
        if (action.details.is_purchase) {
          sentForFee -= BigInt(action.details.price);
        }
        break;
      }
    case 'stake_deposit':
      {
        sentForFee -= BigInt(action.details.amount);
        break;
      }
    case 'stake_withdrawal':
      {
        excess -= BigInt(action.details.amount);
        break;
      }
    case 'dex_deposit_liquidity':
      {
        // Liquidity deposit can be either a dual transaction or two separate single transactions.
        // We display the deposit as separate actions, so we divide by the number of actions.
        const activitiesPerAction = BigInt(parseLiquidityDeposit(action, {
          addressBook,
          // The below fields don't matter here, they are only to satisfy the type requirements:
          network: 'mainnet',
          walletAddress: '',
          metadata: {},
          nftSuperCollectionsByCollectionAddress: {}
        }).length);
        networkFee = totalNetworkFee / activitiesPerAction;
        sentForFee = totalSent / activitiesPerAction;
        excess = totalReceived / activitiesPerAction;
        if (!action.details.asset_1) {
          sentForFee -= BigInt(action.details.amount_1 ?? 0n) / activitiesPerAction;
        } else if (!action.details.asset_2) {
          sentForFee -= BigInt(action.details.amount_2 ?? 0n) / activitiesPerAction;
        }
        break;
      }
    case 'dex_withdraw_liquidity':
      {
        if (!action.details.asset_1) {
          excess -= BigInt(action.details.amount_1);
        } else if (!action.details.asset_2) {
          excess -= BigInt(action.details.amount_2);
        }
        sentForFee /= 2n;
        excess /= 2n;
        break;
      }
  }

  // When the transaction is failed, its `sent` and `received` are always 0 (as defined in `parseFailedTransactions`)
  if (!tracePart.isSuccess) {
    sentForFee = 0n;
    excess = 0n;
  }
  const realFee = networkFee + sentForFee - excess;
  activity = {
    ...activity,
    fee: realFee
  };
  delete activity.shouldLoadDetails;
  return {
    activity,
    sentForFee,
    excess
  };
}
function getActivityRealFee(activity) {
  return activity.kind === 'swap' ? (0,util_decimals/* fromDecimal */.UH)(activity.networkFee, config/* TONCOIN */.Tu9.decimals) : activity.fee;
}
;// ./src/api/chains/ton/toncenter/emulation.ts



async function fetchEmulateTrace(network, boc) {
  const baseUrl = network === 'testnet' ? config/* TONCENTER_TESTNET_URL */.pyR : config/* TONCENTER_MAINNET_URL */._J8;
  const response = await (0,util_fetch/* fetchWithRetry */.J5)(`${baseUrl}/api/emulate/v1/emulateTrace`, {
    method: 'POST',
    headers: {
      ...getToncenterHeaders(network),
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      boc,
      ignore_chksig: true,
      include_code_data: false,
      with_actions: true,
      include_address_book: true,
      include_metadata: true
    })
  });
  return response.json();
}
;// ./src/api/chains/ton/emulation.ts










async function emulateTransaction(network, wallet, transaction, isInitialized) {
  const boc = buildExternalBoc(wallet, transaction, isInitialized);
  const emulation = await fetchEmulateTrace(network, boc);
  const walletAddress = (0,tonCore/* toBase64Address */.vn)(wallet.address, false, network);
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  return parseEmulation(network, walletAddress, emulation, nftSuperCollectionsByCollectionAddress);
}
function parseEmulation(network, walletAddress, emulation, nftSuperCollectionsByCollectionAddress) {
  const parsedTrace = parseTrace({
    network,
    walletAddress,
    actions: emulation.actions,
    traceDetail: emulation.trace,
    addressBook: emulation.address_book,
    transactions: emulation.transactions
  });
  const allActivities = parseActions(network, walletAddress, emulation.actions, emulation.address_book, emulation.metadata, nftSuperCollectionsByCollectionAddress);
  const walletActivities = [];
  let totalRealFee = 0n;
  let totalExcess = 0n;
  for (let activity of allActivities) {
    if (activity.shouldHide || activity.kind === 'transaction' && activity.fromAddress !== walletAddress && activity.toAddress !== walletAddress) {
      continue;
    }
    if (activity.shouldLoadDetails) {
      const result = calculateActivityDetails(activity, parsedTrace);
      if (result) {
        activity = result.activity;
        totalExcess += result.excess;
      } else {
        (0,logs/* logDebugError */.SJ)('Unparsable trace for emulated activity', activity.id);
      }
    }
    walletActivities.push(activity);
    totalRealFee += getActivityRealFee(activity);
  }
  if (totalExcess) {
    addExcessActivity(walletAddress, walletActivities, totalExcess);
  }
  return {
    networkFee: parsedTrace.totalNetworkFee,
    received: parsedTrace.totalReceived,
    byTransactionIndex: parsedTrace.byTransactionIndex,
    activities: walletActivities,
    realFee: totalRealFee
  };
}
function addExcessActivity(walletAddress, activities, excess) {
  const index = activities.findIndex(activity => {
    return activity.kind === 'transaction' && activity.type === 'excess';
  });
  if (index !== -1) {
    const excessActivity = activities.splice(index, 1)[0];
    activities.push({
      ...excessActivity,
      amount: excessActivity.amount + excess
    });
  } else {
    activities.push({
      id: FAKE_TX_ID,
      timestamp: activities[activities.length - 1].timestamp,
      kind: 'transaction',
      amount: excess,
      slug: config/* TONCOIN */.Tu9.slug,
      normalizedAddress: config/* BURN_ADDRESS */.pV9,
      fromAddress: config/* BURN_ADDRESS */.pV9,
      toAddress: walletAddress,
      isIncoming: true,
      fee: 0n,
      type: 'excess',
      status: 'completed'
    });
  }
}
function buildExternalBoc(wallet, body, isInitialized) {
  const externalMessage = (0,core_dist.external)({
    to: wallet.address,
    init: !isInitialized ? {
      code: wallet.init.code,
      data: wallet.init.data
    } : undefined,
    body
  });
  return (0,core_dist.beginCell)().store((0,core_dist.storeMessage)(externalMessage)).endCell().toBoc().toString('base64');
}
;// ./src/api/chains/ton/priceless.ts
/* provided dependency */ var priceless_Buffer = __webpack_require__(48287)["Buffer"];




async function updateTokenHashes(network, tokenSlugs, onUpdate) {
  await tokensPreload.promise;
  const cachedTokens = getTokensCache().bySlug;
  const tokensToFetch = tokenSlugs.reduce((tokensToFetch, tokenSlug) => {
    const token = cachedTokens[tokenSlug];
    if (token && token.chain === 'ton' && !token.codeHash && ['LP', 'STAKED', 'POOL'].some(option => token.symbol.toUpperCase().includes(option))) {
      tokensToFetch.push(token);
    }
    return tokensToFetch;
  }, []);
  if (!tokensToFetch.length) {
    return;
  }
  const tokensByAddress = (0,iteratees/* buildCollectionByKey */.dU)(tokensToFetch, 'tokenAddress');
  try {
    const states = await getAccountStates(network, tokensToFetch.map(token => token.tokenAddress));
    for (const address of Object.keys(states)) {
      if (!tokensByAddress[address]) continue;
      tokensByAddress[address].codeHash = priceless_Buffer.from(states[address].code_hash, 'base64').toString('hex');
    }
    await updateTokens(Object.values(tokensByAddress).filter(token => token.codeHash), onUpdate);
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('Failed to fetch contract code hashes for tokens', err);
  }
}
;// ./src/api/chains/ton/tokens.ts











async function getTokenBalances(network, address) {
  const balancesRaw = await fetchJettonBalances(network, address);
  return balancesRaw.map(balance => parseTokenBalance(network, balance)).filter(Boolean);
}
function parseTokenBalance(network, balanceRaw) {
  if (!balanceRaw.jetton) {
    return undefined;
  }
  try {
    const {
      balance,
      jetton,
      wallet_address: walletAddress
    } = balanceRaw;
    const tokenAddress = (0,tonCore/* toBase64Address */.vn)(jetton.address, true, network);
    const token = buildTokenByMetadata(tokenAddress, jetton);
    return {
      slug: token.slug,
      balance: BigInt(balance),
      token,
      jettonWallet: (0,tonCore/* toBase64Address */.vn)(walletAddress.address, undefined, network)
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('parseTokenBalance', err);
    return undefined;
  }
}
async function insertMintlessPayload(network, fromAddress, tokenAddress, transfer) {
  const {
    toAddress,
    payload
  } = transfer;
  const token = getTokenByAddress(tokenAddress);
  if (typeof payload !== 'string' || !(token !== null && token !== void 0 && token.customPayloadApiUrl)) {
    return transfer;
  }
  const parsedPayload = await parsePayloadBase64(network, toAddress, payload);
  if (parsedPayload.type !== 'tokens:transfer') {
    throw new Error('Invalid payload');
  }
  const {
    mintlessTokenBalance,
    isMintlessClaimed,
    stateInit,
    customPayload
  } = await getMintlessParams({
    network,
    token,
    fromAddress,
    tokenWalletAddress: transfer.toAddress
  });
  if (!mintlessTokenBalance || isMintlessClaimed) {
    return transfer;
  }
  const newPayload = (0,tonCore/* buildTokenTransferBody */.Dg)({
    toAddress: parsedPayload.destination,
    queryId: parsedPayload.queryId,
    tokenAmount: parsedPayload.amount,
    forwardAmount: parsedPayload.forwardAmount,
    forwardPayload: core_dist.Cell.fromBase64(parsedPayload.forwardPayload),
    responseAddress: parsedPayload.responseDestination,
    customPayload: core_dist.Cell.fromBase64(customPayload)
  });
  return {
    ...transfer,
    stateInit: stateInit ? core_dist.Cell.fromBase64(stateInit) : undefined,
    payload: newPayload,
    isBase64Payload: false
  };
}
async function buildTokenTransfer(options) {
  const {
    network,
    tokenAddress,
    fromAddress,
    toAddress,
    amount,
    shouldSkipMintless,
    forwardAmount = constants/* TOKEN_TRANSFER_FORWARD_AMOUNT */.tF,
    isLedger
  } = options;
  let {
    payload
  } = options;
  const tokenWalletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, fromAddress, tokenAddress);
  const token = getTokenByAddress(tokenAddress);
  const {
    isTokenWalletDeployed = !!(await isActiveSmartContract(network, tokenWalletAddress)),
    isMintlessClaimed,
    mintlessTokenBalance,
    customPayload,
    stateInit
  } = await getMintlessParams({
    network,
    fromAddress,
    token,
    tokenWalletAddress,
    shouldSkipMintless
  });
  if (isTokenWalletDeployed) {
    const realTokenAddress = await (0,tonCore/* resolveTokenAddress */.uA)(network, tokenWalletAddress);
    if (tokenAddress !== realTokenAddress) {
      throw new Error('Invalid contract');
    }
  }

  // In ledger-app-ton v2.7.0 a queryId not equal to 0 is handled incorrectly.
  const queryId = isLedger ? 0n : undefined;
  payload = (0,tonCore/* buildTokenTransferBody */.Dg)({
    tokenAmount: amount,
    toAddress,
    forwardAmount,
    forwardPayload: payload,
    responseAddress: fromAddress,
    customPayload: customPayload ? core_dist.Cell.fromBase64(customPayload) : undefined,
    queryId
  });

  // eslint-disable-next-line prefer-const
  let {
    amount: toncoinAmount,
    realAmount
  } = getToncoinAmountForTransfer(token, Boolean(mintlessTokenBalance) && !isMintlessClaimed);
  if (forwardAmount > constants/* TOKEN_TRANSFER_FORWARD_AMOUNT */.tF) {
    toncoinAmount += forwardAmount;
  }
  return {
    amount: toncoinAmount,
    realAmount,
    toAddress: tokenWalletAddress,
    payload,
    stateInit: stateInit ? core_dist.Cell.fromBase64(stateInit) : undefined,
    mintlessTokenBalance,
    isTokenWalletDeployed
  };
}
async function getTokenBalanceWithMintless(network, accountAddress, tokenAddress) {
  const tokenWalletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, accountAddress, tokenAddress);
  const token = getTokenByAddress(tokenAddress);
  const {
    isTokenWalletDeployed = !!(await isActiveSmartContract(network, tokenWalletAddress)),
    mintlessTokenBalance
  } = await getMintlessParams({
    network,
    fromAddress: accountAddress,
    token,
    tokenWalletAddress
  });
  return calculateTokenBalanceWithMintless(network, tokenWalletAddress, isTokenWalletDeployed, mintlessTokenBalance);
}
async function calculateTokenBalanceWithMintless(network, tokenWalletAddress, isTokenWalletDeployed) {
  let mintlessTokenBalance = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0n;
  let balance = 0n;
  if (isTokenWalletDeployed) {
    balance += await (0,tonCore/* getTokenBalance */.kb)(network, tokenWalletAddress);
  }
  if (mintlessTokenBalance) {
    balance += mintlessTokenBalance;
  }
  return balance;
}
async function getMintlessParams(options) {
  const {
    network,
    fromAddress,
    token,
    tokenWalletAddress,
    shouldSkipMintless
  } = options;
  const isMintlessToken = !!token.customPayloadApiUrl;
  let isTokenWalletDeployed;
  let customPayload;
  let stateInit;
  let isMintlessClaimed;
  let mintlessTokenBalance;
  if (isMintlessToken && !shouldSkipMintless) {
    isTokenWalletDeployed = !!(await isActiveSmartContract(network, tokenWalletAddress));
    isMintlessClaimed = isTokenWalletDeployed && (await checkMintlessTokenWalletIsClaimed(network, tokenWalletAddress));
    if (!isMintlessClaimed) {
      const data = await fetchMintlessTokenWalletData(token.customPayloadApiUrl, fromAddress);
      const isExpired = data ? Date.now() > new Date(Number(data.compressed_info.expired_at) * 1000).getTime() : true;
      if (data && !isExpired) {
        customPayload = data.custom_payload;
        mintlessTokenBalance = BigInt(data.compressed_info.amount);
        if (!isTokenWalletDeployed) {
          stateInit = data.state_init;
        }
      }
    }
  }
  return {
    isTokenWalletDeployed,
    isMintlessClaimed,
    mintlessTokenBalance,
    customPayload,
    stateInit
  };
}
async function checkMintlessTokenWalletIsClaimed(network, tokenWalletAddress) {
  const res = await (0,tonCore/* getTonClient */.N7)(network).runMethod(core_dist.Address.parse(tokenWalletAddress), 'is_claimed');
  return res.stack.readBoolean();
}
async function fetchMintlessTokenWalletData(customPayloadApiUrl, address) {
  const rawAddress = (0,tonCore/* toRawAddress */.m$)(address);
  return await (0,util_fetch/* fetchJsonWithProxy */.x3)(`${customPayloadApiUrl}/wallet/${rawAddress}`).catch(() => undefined);
}
async function fetchToken(network, address) {
  const metadata = await fetchJettonMetadata(network, address);
  return buildTokenByMetadata(address, metadata);
}
function buildTokenByMetadata(address, metadata) {
  const {
    name,
    symbol,
    image,
    image_data: imageData,
    decimals,
    custom_payload_api_uri: customPayloadApiUrl
  } = metadata;
  return {
    slug: buildTokenSlug('ton', address),
    name,
    symbol,
    decimals: decimals === undefined ? constants/* DEFAULT_DECIMALS */.fI : Number(decimals),
    chain: 'ton',
    tokenAddress: address,
    image: image && (0,util_fetch/* fixIpfsUrl */.fU)(image) || imageData && fixBase64ImageData(imageData) || undefined,
    customPayloadApiUrl
  };
}

/**
 * A pure function guessing the "fee" that needs to be attached to the token transfer.
 * In contrast to the blockchain fee, this fee is a part of the transfer itself.
 *
 * `amount` is what should be attached (acts as a fee for the user);
 * `realAmount` is approximately what will be actually spent (the rest will return in the excess).
 */
function getToncoinAmountForTransfer(token, willClaimMintless) {
  let amount = 0n;
  let realAmount = 0n;
  if (token.slug === config/* TON_USDT_MAINNET_SLUG */.iLw || token.slug === config/* TON_USDT_TESTNET_SLUG */.RB) {
    amount += constants/* TINY_TOKEN_TRANSFER_AMOUNT */.GV;
    realAmount += constants/* TINIEST_TOKEN_TRANSFER_REAL_AMOUNT */.F0;
  } else if (token.isTiny) {
    amount += constants/* TINY_TOKEN_TRANSFER_AMOUNT */.GV;
    realAmount += constants/* TINY_TOKEN_TRANSFER_REAL_AMOUNT */.xB;
  } else {
    amount += constants/* TOKEN_TRANSFER_AMOUNT */.LV;
    realAmount += constants/* TOKEN_TRANSFER_REAL_AMOUNT */.qd;
  }
  if (willClaimMintless) {
    amount += constants/* CLAIM_MINTLESS_AMOUNT */.CH;
    realAmount += constants/* CLAIM_MINTLESS_AMOUNT */.CH;
  }
  return {
    amount,
    realAmount
  };
}
async function loadTokenBalances(network, address, onUpdate) {
  const tokenBalances = await getTokenBalances(network, address);
  const tokens = tokenBalances.map(_ref => {
    let {
      token
    } = _ref;
    return {
      ...token,
      priceUsd: 0,
      percentChange24h: 0
    };
  });
  await updateTokens(tokens, onUpdate);
  await updateTokenHashes(network, tokens.map(token => token.slug), onUpdate);
  return Object.fromEntries(tokenBalances.map(_ref2 => {
    let {
      slug,
      balance
    } = _ref2;
    return [slug, balance];
  }));
}
;// ./src/api/chains/ton/transfer.ts





























const WAIT_TRANSFER_TIMEOUT = MINUTE;
const WAIT_PAUSE = SEC;
const MAX_BALANCE_WITH_CHECK_DIESEL = 100000000n; // 0.1 TON
const PENDING_DIESEL_TIMEOUT_SEC = 15 * 60; // 15 min

const DIESEL_NOT_AVAILABLE = {
  status: 'not-available',
  nativeAmount: 0n,
  remainingFee: 0n,
  realFee: 0n
};
async function checkTransactionDraft(options) {
  const {
    accountId,
    amount = 0n,
    tokenAddress,
    shouldEncrypt,
    isBase64Data,
    stateInit: stateInitString,
    forwardAmount,
    allowGasless
  } = options;
  let {
    toAddress,
    data
  } = options;
  const {
    network
  } = parseAccountId(accountId);
  let result = {};
  try {
    result = await checkToAddress(network, toAddress);
    if ('error' in result) {
      return result;
    }
    toAddress = result.resolvedAddress;
    const {
      isInitialized
    } = await getContractInfo(network, toAddress);
    let stateInit;
    if (stateInitString) {
      try {
        stateInit = core_dist.Cell.fromBase64(stateInitString);
      } catch {
        return {
          ...result,
          error: types/* ApiTransactionDraftError */.KL.InvalidStateInit
        };
      }
    }
    if (result.isBounceable && !isInitialized && !stateInit) {
      result.isToAddressNew = !(await checkHasTransaction(network, toAddress));
      return {
        ...result,
        error: types/* ApiTransactionDraftError */.KL.InactiveContract
      };
    }
    result.resolvedAddress = toAddress;
    if (amount < 0n) {
      return {
        ...result,
        error: types/* ApiTransactionDraftError */.KL.InvalidAmount
      };
    }
    const account = await fetchStoredChainAccount(accountId, 'ton');
    const wallet = getTonWallet(account.byChain.ton);
    if (typeof data === 'string' && isBase64Data) {
      data = (0,utils/* base64ToBytes */.Kp)(data);
    }
    if (data && typeof data === 'string' && shouldEncrypt) {
      const toPublicKey = await (0,tonCore/* getWalletPublicKey */.q5)(network, toAddress);
      if (!toPublicKey) {
        return {
          ...result,
          error: types/* ApiTransactionDraftError */.KL.WalletNotInitialized
        };
      }
    }
    const {
      address,
      isInitialized: isWalletInitialized
    } = account.byChain.ton;
    if (data && typeof data === 'string' && !isBase64Data) {
      data = (0,tonCore/* commentToBytes */.km)(data);
    }
    let toncoinAmount;
    const {
      seqno,
      balance: toncoinBalance
    } = await getWalletInfo(network, wallet);
    let balance;
    let fee;
    let realFee;
    if (!tokenAddress) {
      balance = toncoinBalance;
      toncoinAmount = amount;
      fee = 0n;
      realFee = 0n;
      if (data instanceof Uint8Array) {
        data = shouldEncrypt ? (0,tonCore/* packBytesAsSnakeForEncryptedData */.mo)(data) : (0,tonCore/* packBytesAsSnake */.DN)(data);
      }
    } else {
      const tokenTransfer = await buildTokenTransfer({
        network,
        tokenAddress,
        fromAddress: address,
        toAddress,
        amount,
        payload: data,
        forwardAmount,
        isLedger: account.type === 'ledger'
      });
      ({
        amount: toncoinAmount,
        toAddress,
        payload: data
      } = tokenTransfer);
      const {
        realAmount: realToncoinAmount,
        isTokenWalletDeployed,
        mintlessTokenBalance
      } = tokenTransfer;

      // When the token is transferred, actually some TON is transferred, and the token sits inside the payload.
      // From the user perspective, this TON amount is a fee.
      fee = toncoinAmount;
      realFee = realToncoinAmount;
      const tokenWalletAddress = toAddress;
      balance = await calculateTokenBalanceWithMintless(network, tokenWalletAddress, isTokenWalletDeployed, mintlessTokenBalance);
    }
    const isFullTonTransfer = !tokenAddress && toncoinBalance === amount;
    const signer = getSigner(accountId, account, undefined, true);
    const signingResult = await signTransaction({
      account,
      messages: [{
        toAddress,
        amount: toncoinAmount,
        payload: data,
        stateInit,
        hints: {
          tokenAddress
        }
      }],
      seqno,
      signer,
      doPayFeeFromAmount: isFullTonTransfer
    });
    if ('error' in signingResult) {
      return {
        ...result,
        error: signingResult.error
      };
    }

    // todo: Use `received` from the emulation to calculate the real fee. Check what happens when the receiver is the same wallet.
    const {
      networkFee
    } = applyFeeFactorToEmulationResult(await emulateTransactionWithFallback(network, wallet, signingResult.transaction, isWalletInitialized));
    fee += networkFee;
    realFee += networkFee;
    result.fee = fee;
    result.realFee = realFee;
    result.diesel = DIESEL_NOT_AVAILABLE;
    let isEnoughBalance;
    if (!tokenAddress) {
      isEnoughBalance = toncoinBalance >= fee + (isFullTonTransfer ? 0n : amount);
    } else {
      const canTransferGasfully = toncoinBalance >= fee;
      if (allowGasless) {
        result.diesel = await getDiesel({
          accountId,
          tokenAddress,
          canTransferGasfully,
          toncoinBalance,
          tokenBalance: balance
        });
      }
      if (isDieselAvailable(result.diesel)) {
        isEnoughBalance = amount + getDieselTokenAmount(result.diesel) <= balance;
      } else {
        isEnoughBalance = canTransferGasfully && amount <= balance;
      }
    }
    return isEnoughBalance ? result : {
      ...result,
      error: types/* ApiTransactionDraftError */.KL.InsufficientBalance
    };
  } catch (err) {
    return {
      ...(0,errors/* handleServerError */.QS)(err),
      ...result
    };
  }
}
function estimateDiesel(address, tokenAddress, toncoinAmount, isW5, isStars) {
  return callBackendGet('/diesel/estimate', {
    address,
    tokenAddress,
    toncoinAmount,
    isW5,
    isStars
  });
}
async function checkToAddress(network, toAddress) {
  const result = {};
  const resolved = await resolveAddress(network, toAddress);
  if (resolved === 'dnsNotResolved') return {
    ...result,
    error: types/* ApiTransactionDraftError */.KL.DomainNotResolved
  };
  if (resolved === 'invalidAddress') return {
    ...result,
    error: types/* ApiTransactionDraftError */.KL.InvalidToAddress
  };
  result.addressName = resolved.name;
  result.resolvedAddress = resolved.address;
  result.isMemoRequired = resolved.isMemoRequired;
  result.isScam = resolved.isScam;
  toAddress = resolved.address;
  const {
    isUserFriendly,
    isTestOnly,
    isBounceable
  } = (0,tonCore/* parseAddress */.or)(toAddress);
  result.isBounceable = isBounceable;
  const regex = /[+=/]/;
  const isUrlSafe = !regex.test(toAddress);
  if (!isUserFriendly || !isUrlSafe || network === 'mainnet' && isTestOnly) {
    return {
      ...result,
      error: types/* ApiTransactionDraftError */.KL.InvalidAddressFormat
    };
  }
  return result;
}
async function submitTransfer(options) {
  const {
    accountId,
    password,
    amount,
    tokenAddress,
    shouldEncrypt,
    isBase64Data,
    forwardAmount = constants/* TOKEN_TRANSFER_FORWARD_AMOUNT */.tF,
    noFeeCheck
  } = options;
  let {
    stateInit
  } = options;
  let {
    toAddress,
    data
  } = options;
  const {
    network
  } = parseAccountId(accountId);
  try {
    const account = await fetchStoredChainAccount(accountId, 'ton');
    const {
      address: fromAddress,
      isInitialized
    } = account.byChain.ton;
    const wallet = getTonWallet(account.byChain.ton);
    const signer = getSigner(accountId, account, password);
    let encryptedComment;
    if (typeof data === 'string') {
      const result = await stringToPayload({
        network,
        toAddress,
        data,
        signer,
        shouldEncrypt,
        isBase64Data
      });
      if ('error' in result) return result;
      ({
        payload: data,
        encryptedComment
      } = result);
    }
    let toncoinAmount;
    if (!tokenAddress) {
      toncoinAmount = amount;
      if (data instanceof Uint8Array) {
        data = shouldEncrypt ? (0,tonCore/* packBytesAsSnakeForEncryptedData */.mo)(data) : (0,tonCore/* packBytesAsSnake */.DN)(data);
      }
    } else {
      ({
        amount: toncoinAmount,
        toAddress,
        payload: data,
        stateInit
      } = await buildTokenTransfer({
        network,
        tokenAddress,
        fromAddress,
        toAddress,
        amount,
        payload: data,
        forwardAmount,
        isLedger: account.type === 'ledger'
      }));
    }
    return await withoutTransferConcurrency(network, fromAddress, async finalizeInBackground => {
      const {
        seqno,
        balance: toncoinBalance
      } = await getWalletInfo(network, wallet);
      const isFullTonTransfer = !tokenAddress && toncoinBalance === amount;
      const signingResult = await signTransaction({
        account,
        messages: [{
          toAddress,
          amount: toncoinAmount,
          payload: data,
          stateInit,
          hints: {
            tokenAddress
          }
        }],
        seqno,
        signer,
        doPayFeeFromAmount: isFullTonTransfer
      });
      if ('error' in signingResult) return signingResult;
      const {
        transaction
      } = signingResult;
      if (!noFeeCheck) {
        const {
          networkFee
        } = await emulateTransactionWithFallback(network, wallet, transaction, isInitialized);
        const isEnoughBalance = isFullTonTransfer ? toncoinBalance > networkFee : toncoinBalance >= toncoinAmount + networkFee;
        if (!isEnoughBalance) {
          return {
            error: types/* ApiTransactionError */.jf.InsufficientBalance
          };
        }
      }
      const client = (0,tonCore/* getTonClient */.N7)(network);
      const {
        msgHash,
        boc,
        msgHashNormalized
      } = await sendExternal(client, wallet, transaction);
      finalizeInBackground(() => retrySendBoc(network, fromAddress, boc, seqno));
      return {
        amount,
        seqno,
        encryptedComment,
        toAddress,
        msgHash,
        msgHashNormalized,
        toncoinAmount
      };
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('submitTransfer', err);
    return {
      error: resolveTransactionError(err)
    };
  }
}
async function submitTransferWithDiesel(options) {
  try {
    const {
      toAddress,
      amount,
      accountId,
      password,
      tokenAddress,
      shouldEncrypt,
      dieselAmount,
      isGaslessWithStars
    } = options;
    let {
      data
    } = options;
    const {
      network
    } = parseAccountId(accountId);
    const account = await fetchStoredChainAccount(accountId, 'ton');
    const {
      address: fromAddress,
      version
    } = account.byChain.ton;
    let encryptedComment;
    if (typeof data === 'string') {
      const signer = getSigner(accountId, account, password);
      const result = await stringToPayload({
        network,
        toAddress,
        data,
        signer,
        shouldEncrypt
      });
      if ('error' in result) return result;
      ({
        payload: data,
        encryptedComment
      } = result);
    }
    const messages = [await buildTokenTransfer({
      network,
      tokenAddress,
      fromAddress,
      toAddress,
      amount,
      payload: data,
      isLedger: account.type === 'ledger'
    })];
    if (!isGaslessWithStars) {
      messages.push(await buildTokenTransfer({
        network,
        tokenAddress,
        fromAddress,
        toAddress: config/* DIESEL_ADDRESS */.InW,
        amount: dieselAmount,
        shouldSkipMintless: true,
        payload: (0,tonCore/* getOurFeePayload */.Rc)(),
        isLedger: account.type === 'ledger'
      }));
    }
    const result = await submitMultiTransfer({
      accountId,
      password,
      messages,
      isGasless: true
    });
    return {
      ...result,
      encryptedComment,
      withW5Gasless: version === 'W5'
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('submitTransferWithDiesel', err);
    return {
      error: resolveTransactionError(err)
    };
  }
}
async function stringToPayload(_ref) {
  let {
    network,
    toAddress,
    data,
    shouldEncrypt,
    signer,
    isBase64Data
  } = _ref;
  let payload;
  let encryptedComment;
  if (!data) {
    payload = undefined;
  } else if (isBase64Data) {
    payload = (0,tonCore/* parseBase64 */.Pe)(data);
  } else if (shouldEncrypt) {
    const toPublicKey = await (0,tonCore/* getWalletPublicKey */.q5)(network, toAddress);
    const result = await signer.encryptComment(data, toPublicKey);
    if ('error' in result) return result;
    payload = result;
    encryptedComment = result.subarray(4).toString('base64');
  } else {
    payload = (0,tonCore/* commentToBytes */.km)(data);
  }
  return {
    payload,
    encryptedComment
  };
}
function resolveTransactionError(error) {
  if (error instanceof errors/* ApiServerError */.K$) {
    if ((0,tonCore/* isExpiredTransactionError */.EV)(error.message)) {
      return types/* ApiTransactionError */.jf.IncorrectDeviceTime;
    } else if ((0,tonCore/* isSeqnoMismatchError */.ZN)(error.message)) {
      return types/* ApiTransactionError */.jf.ConcurrentTransaction;
    } else if (error.statusCode === 400) {
      return error.message;
    } else if (error.displayError) {
      return error.displayError;
    }
  }
  return types/* ApiTransactionError */.jf.UnsuccesfulTransfer;
}
async function checkMultiTransactionDraft(accountId, messages, withDiesel,
/**
 * If `true`, the Ledger's limitation of 1 message per transaction will be overridden. This is to be used for
 * estimating Ton Connect transactions (where each message is sent in a separate transaction).
 */
doOverrideLedgerLimit) {
  let totalAmount = 0n;
  const {
    network
  } = parseAccountId(accountId);
  const account = await fetchStoredChainAccount(accountId, 'ton');
  try {
    for (const {
      toAddress,
      amount
    } of messages) {
      if (amount < 0n) {
        return {
          error: types/* ApiTransactionDraftError */.KL.InvalidAmount
        };
      }
      const isMainnet = network === 'mainnet';
      const {
        isValid,
        isTestOnly
      } = (0,tonCore/* parseAddress */.or)(toAddress);
      if (!isValid || isMainnet && isTestOnly) {
        return {
          error: types/* ApiTransactionDraftError */.KL.InvalidToAddress
        };
      }
      totalAmount += amount;
    }

    // Check individual token balances
    const {
      hasInsufficientTokenBalance,
      parsedPayloads
    } = await isTokenBalanceInsufficient(network, account.byChain.ton.address, messages);
    const wallet = getTonWallet(account.byChain.ton);
    const {
      seqno,
      balance
    } = await getWalletInfo(network, wallet);
    const signer = getSigner(accountId, account, undefined, true);
    const signingResult = await signTransaction({
      account,
      messages,
      seqno,
      signer,
      doOverrideLedgerLimit
    });
    if ('error' in signingResult) return signingResult;
    const emulation = applyFeeFactorToEmulationResult(await emulateTransactionWithFallback(network, wallet, signingResult.transaction, account.byChain.ton.isInitialized));
    const result = {
      emulation,
      parsedPayloads
    };

    // TODO Should `totalAmount` be `0` for `withDiesel`?
    // Check for insufficient balance (both tokens and TON) and return error
    const hasInsufficientTonBalance = !withDiesel && balance < totalAmount + result.emulation.networkFee;
    if (hasInsufficientTokenBalance || hasInsufficientTonBalance) {
      return {
        ...result,
        error: types/* ApiTransactionDraftError */.KL.InsufficientBalance
      };
    }
    return result;
  } catch (err) {
    return (0,errors/* handleServerError */.QS)(err);
  }
}
async function isTokenBalanceInsufficient(network, walletAddress, messages) {
  const payloadParsingResults = await Promise.all(messages.map(async _ref2 => {
    let {
      payload,
      toAddress
    } = _ref2;
    if (!payload) return {
      tokenResult: undefined,
      parsedPayload: undefined
    };
    try {
      const payloadAsString = getPayloadFromTransfer({
        payload,
        isBase64Payload: true
      }).toBoc().toString('base64');
      const parsedPayload = await parsePayloadBase64(network, toAddress, payloadAsString);
      if ((parsedPayload === null || parsedPayload === void 0 ? void 0 : parsedPayload.type) === 'tokens:transfer') {
        return {
          tokenResult: {
            tokenAddress: parsedPayload.tokenAddress,
            amount: parsedPayload.amount
          },
          parsedPayload
        };
      }
      return {
        tokenResult: undefined,
        parsedPayload
      };
    } catch (e) {
      // If payload parsing fails, treat as regular TON transfer
      (0,logs/* logDebugError */.SJ)('isTokenBalanceInsufficient', 'Error parsing payload', e);
    }
    return {
      tokenResult: undefined,
      parsedPayload: undefined
    };
  }));

  // Accumulate token amounts by address
  const tokenAmountsByAddress = {};
  const parsedPayloads = payloadParsingResults.map(result => result === null || result === void 0 ? void 0 : result.parsedPayload);
  let hasUnknownToken = false;
  for (const result of payloadParsingResults) {
    if (result !== null && result !== void 0 && result.tokenResult) {
      const {
        tokenAddress,
        amount
      } = result.tokenResult;
      if (!tokenAddress) {
        // Possible when the jetton wallet is not deployed, therefore the minter address is unknown and set to "".
        // This is handled in `parsePayloadSlice`. If the sender jetton wallet is not deployed, assuming the balance is 0.
        hasUnknownToken = true;
        continue;
      }
      if (!tokenAmountsByAddress[tokenAddress]) {
        tokenAmountsByAddress[tokenAddress] = 0n;
      }
      tokenAmountsByAddress[tokenAddress] += amount;
    }
  }
  if (hasUnknownToken) {
    return {
      hasInsufficientTokenBalance: true,
      parsedPayloads
    };
  }
  const tokenAddresses = Object.keys(tokenAmountsByAddress);
  if (tokenAddresses.length === 0) {
    return {
      hasInsufficientTokenBalance: false,
      parsedPayloads
    }; // No token transfers
  }
  const tokenBalances = await Promise.all(tokenAddresses.map(tokenAddress => tokenAddress !== config/* STON_PTON_ADDRESS */.oWZ ? getTokenBalanceWithMintless(network, walletAddress, tokenAddress) : 0n));

  // Check if any token has insufficient balance
  for (let i = 0; i < tokenAddresses.length; i++) {
    const tokenAddress = tokenAddresses[i];
    const requiredAmount = tokenAmountsByAddress[tokenAddress];
    const availableBalance = tokenBalances[i];
    if (tokenAddress === config/* STON_PTON_ADDRESS */.oWZ) {
      continue; // PTON can be here from the built-in swaps
    }
    if (availableBalance < requiredAmount) {
      return {
        hasInsufficientTokenBalance: true,
        parsedPayloads
      };
    }
  }
  return {
    hasInsufficientTokenBalance: false,
    parsedPayloads
  };
}
// todo: Support submitting multiple transactions (not only multiple messages). The signing already supports that. It will allow to: 1) send multiple NFTs with a single API call, 2) renew multiple domains in a single function call, 3) simplify the implementation of swapping with Ledger
async function submitMultiTransfer(_ref3) {
  let {
    accountId,
    password,
    messages,
    expireAt,
    isGasless
  } = _ref3;
  const {
    network
  } = parseAccountId(accountId);
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const {
    address: fromAddress,
    isInitialized,
    version
  } = account.byChain.ton;
  try {
    const wallet = getTonWallet(account.byChain.ton);
    let totalAmount = 0n;
    messages.forEach(message => {
      totalAmount += BigInt(message.amount);
    });
    return await withoutTransferConcurrency(network, fromAddress, async finalizeInBackground => {
      const {
        seqno,
        balance
      } = await getWalletInfo(network, wallet);
      const gaslessType = isGasless ? version === 'W5' ? 'w5' : 'diesel' : undefined;
      const withW5Gasless = gaslessType === 'w5';
      const signer = getSigner(accountId, account, password);
      const signingResult = await signTransaction({
        account,
        messages,
        expireAt: withW5Gasless ? Math.round(Date.now() / 1000) + PENDING_DIESEL_TIMEOUT_SEC : expireAt,
        seqno,
        signer,
        shouldBeInternal: withW5Gasless
      });
      if ('error' in signingResult) return signingResult;
      const {
        transaction
      } = signingResult;
      if (!isGasless) {
        const {
          networkFee
        } = await emulateTransactionWithFallback(network, wallet, transaction, isInitialized);
        if (balance < totalAmount + networkFee) {
          return {
            error: types/* ApiTransactionError */.jf.InsufficientBalance
          };
        }
      }
      const client = (0,tonCore/* getTonClient */.N7)(network);
      const {
        msgHash,
        boc,
        paymentLink,
        msgHashNormalized
      } = await sendExternal(client, wallet, transaction, gaslessType);
      if (!isGasless) {
        finalizeInBackground(() => retrySendBoc(network, fromAddress, boc, seqno));
      } else {
        // TODO: Wait for gasless transfer
      }
      const clearedMessages = messages.map(message => {
        if (typeof message.payload !== 'string' && typeof message.payload !== 'undefined') {
          return (0,iteratees/* omit */.cJ)(message, ['payload']);
        }
        return message;
      });
      return {
        seqno,
        amount: totalAmount.toString(),
        messages: clearedMessages,
        boc,
        msgHash,
        msgHashNormalized,
        paymentLink,
        withW5Gasless
      };
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('submitMultiTransfer', err);
    return {
      error: resolveTransactionError(err)
    };
  }
}
async function signTransfers(accountId, messages, password, expireAt, /** Used for specific transactions on vesting.ton.org */
ledgerVestingAddress) {
  const account = await fetchStoredChainAccount(accountId, 'ton');

  // If there is an outgoing transfer in progress, this expression waits for it to finish. This helps to avoid seqno
  // mismatches. This is not fully reliable, because the signed transactions are sent by a separate API method, but it
  // works in most cases.
  await withoutTransferConcurrency(parseAccountId(accountId).network, account.byChain.ton.address, () => {});
  const seqno = await getWalletSeqno(parseAccountId(accountId).network, ledgerVestingAddress ?? account.byChain.ton.address);
  const signer = getSigner(accountId, account, password, false, ledgerVestingAddress ? constants/* LEDGER_VESTING_SUBWALLET_ID */.Fx : undefined);
  const signedTransactions = await signTransactions({
    account,
    expireAt,
    messages,
    seqno,
    signer
  });
  if ('error' in signedTransactions) return signedTransactions;
  return signedTransactions.map(_ref4 => {
    let {
      seqno,
      transaction
    } = _ref4;
    return {
      seqno,
      base64: transaction.toBoc().toString('base64')
    };
  });
}
async function signTransaction(options) {
  const result = await signTransactions({
    ...options,
    allowOnlyOneTransaction: true
  });
  if ('error' in result) return result;
  return result[0];
}

/**
 * A universal function for signing any number of transactions in any account type.
 *
 * If the account doesn't support signing all the given messages in a single transaction, will produce multiple signed
 * transactions. If you need exactly 1 signed transaction, use `allowOnlyOneTransaction` or `signTransaction` (the
 * function will throw an error in case of multiple transactions).
 *
 * The reason for signing multiple transactions (not messages) in a single function call is improving the UX. Each
 * transaction requires a manual user action to sign with Ledger. So, all the transactions should be checked before
 * actually signing any of them.
 */
async function signTransactions(_ref5) {
  let {
    account,
    messages,
    doPayFeeFromAmount,
    seqno,
    signer,
    expireAt = Math.round(Date.now() / 1000) + constants/* TRANSFER_TIMEOUT_SEC */.kF,
    shouldBeInternal,
    allowOnlyOneTransaction,
    doOverrideLedgerLimit
  } = _ref5;
  const messagesPerTransaction = getMaxMessagesInTransaction(account, doOverrideLedgerLimit);
  const messagesByTransaction = (0,iteratees/* split */.lD)(messages, messagesPerTransaction);
  if (allowOnlyOneTransaction && messagesByTransaction.length !== 1) {
    throw new Error(messagesByTransaction.length === 0 ? 'No messages to sign' : `Too many messages for 1 transaction (${messages.length} messages given)`);
  }
  const transactionsToSign = messagesByTransaction.map((transactionMessages, index) => {
    if (!signer.isMock) {
      (0,logs/* logDebug */.MD)('Signing transaction', {
        seqno,
        messages: transactionMessages.map(msg => (0,iteratees/* pick */.Up)(msg, ['toAddress', 'amount']))
      });
    }
    return makePreparedTransactionToSign({
      messages: transactionMessages,
      seqno: seqno + index,
      doPayFeeFromAmount,
      expireAt,
      shouldBeInternal
    });
  });

  // All the transactions are passed to a single `signer.signTransactions` call, because it checks the transactions
  // before signing. See the `signTransactions` description for more details.
  const signedTransactions = await signer.signTransactions(transactionsToSign);
  if ('error' in signedTransactions) return signedTransactions;
  return signedTransactions.map((transaction, index) => ({
    seqno: transactionsToSign[index].seqno,
    transaction
  }));
}
async function retrySendBoc(network, address, boc, seqno) {
  const tonClient = (0,tonCore/* getTonClient */.N7)(network);
  const waitUntil = Date.now() + WAIT_TRANSFER_TIMEOUT;
  while (Date.now() < waitUntil) {
    const [error, walletInfo] = await Promise.all([tonClient.sendFile(boc).catch(err => String(err)), getWalletInfo(network, address).catch(() => undefined)]);

    // Errors mean that `seqno` was changed or not enough of balance
    if (error !== null && error !== void 0 && error.match(/(exitcode=33|exitcode=133|inbound external message rejected by account)/)) {
      break;
    }

    // seqno here may change before exit code appears
    if (walletInfo && walletInfo.seqno > seqno) {
      break;
    }
    await (0,schedulers/* pause */.v7)(WAIT_PAUSE);
  }
}
async function emulateTransactionWithFallback(network, wallet, transaction, isInitialized) {
  try {
    const emulation = await emulateTransaction(network, wallet, transaction, isInitialized);
    return {
      isFallback: false,
      ...emulation
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('Failed to emulate a transaction', err);
  }

  // Falling back to the legacy fee estimation method just in case.
  // It doesn't support estimating more than 20 messages (inside the transaction) at once.
  // eslint-disable-next-line no-null/no-null
  const {
    code = null,
    data = null
  } = !isInitialized ? wallet.init : {};
  const {
    source_fees: fees
  } = await (0,tonCore/* getTonClient */.N7)(network).estimateExternalMessageFee(wallet.address, {
    body: transaction,
    initCode: code,
    initData: data,
    ignoreSignature: true
  });
  const networkFee = BigInt(fees.in_fwd_fee + fees.storage_fee + fees.gas_fee + fees.fwd_fee);
  return {
    isFallback: true,
    networkFee
  };
}
async function sendSignedTransactions(accountId, transactions) {
  const {
    network
  } = parseAccountId(accountId);
  const storedWallet = await fetchStoredWallet(accountId, 'ton');
  const {
    address: fromAddress
  } = storedWallet;
  const client = (0,tonCore/* getTonClient */.N7)(network);
  const wallet = getTonWallet(storedWallet);
  const attempts = constants/* ATTEMPTS */.PY + transactions.length;
  let index = 0;
  let attempt = 0;
  const sentTransactions = [];
  return withoutTransferConcurrency(network, fromAddress, async finalizeInBackground => {
    while (index < transactions.length && attempt < attempts) {
      const {
        base64,
        seqno
      } = transactions[index];
      try {
        const {
          boc,
          msgHashNormalized
        } = await sendExternal(client, wallet, core_dist.Cell.fromBase64(base64));
        sentTransactions.push({
          boc,
          msgHashNormalized
        });
        const ensureSent = () => retrySendBoc(network, fromAddress, boc, seqno);
        if (index === transactions.length - 1) {
          finalizeInBackground(ensureSent);
        } else {
          await ensureSent();
        }
        index++;
      } catch (err) {
        if (err instanceof errors/* ApiServerError */.K$ && (0,tonCore/* isSeqnoMismatchError */.ZN)(err.message)) {
          return {
            error: types/* ApiTransactionError */.jf.ConcurrentTransaction
          };
        }
        (0,logs/* logDebugError */.SJ)('sendSignedMessages', err);
      }
      attempt++;
    }
    return sentTransactions;
  });
}

/**
 * The goal of the function is acting like `checkTransactionDraft` but return only the diesel information
 */
function fetchEstimateDiesel(accountId, tokenAddress) {
  return getDiesel({
    accountId,
    tokenAddress,
    // We pass `false` because `fetchEstimateDiesel` assumes that the transfer is gasless anyway
    canTransferGasfully: false
  });
}

/**
 * Decides whether the transfer must be gasless and fetches the diesel estimate from the backend.
 */
async function getDiesel(_ref6) {
  let {
    accountId,
    tokenAddress,
    canTransferGasfully,
    toncoinBalance,
    tokenBalance
  } = _ref6;
  const {
    network
  } = parseAccountId(accountId);
  if (network !== 'mainnet') return DIESEL_NOT_AVAILABLE;
  const storedTonWallet = await fetchStoredWallet(accountId, 'ton');
  const wallet = getTonWallet(storedTonWallet);
  const token = getTokenByAddress(tokenAddress);
  if (!token.isGaslessEnabled && !token.isStarsEnabled) return DIESEL_NOT_AVAILABLE;
  const {
    address,
    version
  } = storedTonWallet;
  toncoinBalance ??= await getWalletBalance(network, wallet);
  const fee = getDieselToncoinFee(token);
  const toncoinNeeded = fee.amount - toncoinBalance;
  if (toncoinBalance >= MAX_BALANCE_WITH_CHECK_DIESEL || toncoinNeeded <= 0n) return DIESEL_NOT_AVAILABLE;
  const rawDiesel = await estimateDiesel(address, tokenAddress, (0,util_decimals/* toDecimal */.nI)(toncoinNeeded), version === 'W5', fee.isStars);
  const diesel = {
    status: rawDiesel.status,
    amount: rawDiesel.amount === undefined ? undefined : (0,util_decimals/* fromDecimal */.UH)(rawDiesel.amount, rawDiesel.status === 'stars-fee' ? 0 : token.decimals),
    nativeAmount: toncoinNeeded,
    remainingFee: toncoinBalance,
    realFee: fee.realFee
  };
  const tokenAmount = getDieselTokenAmount(diesel);
  if (tokenAmount === 0n) {
    return diesel;
  }
  tokenBalance ??= await getTokenBalanceWithMintless(network, address, tokenAddress);
  const canPayDiesel = tokenBalance >= tokenAmount;
  const isAwaitingNotExpiredPrevious = Boolean(rawDiesel.pendingCreatedAt && Date.now() - new Date(rawDiesel.pendingCreatedAt).getTime() < PENDING_DIESEL_TIMEOUT_SEC * SEC);

  // When both TON and diesel are insufficient, we want to show the TON fee
  const shouldBeGasless = !canTransferGasfully && canPayDiesel || isAwaitingNotExpiredPrevious;
  return shouldBeGasless ? diesel : DIESEL_NOT_AVAILABLE;
}

/**
 * Guesses the total TON fee (including the gas attached to the transaction) that will be spent on a diesel transfer.
 *
 * `amount` is what will be taken from the wallet;
 * `realFee` is approximately what will be actually spent (the rest will return in the excess);
 * `isStars` tells whether the fee is estimated considering that the diesel will be paid in stars.
 */
function getDieselToncoinFee(token) {
  const isStars = !token.isGaslessEnabled && token.isStarsEnabled;
  let {
    amount,
    realAmount: realFee
  } = getToncoinAmountForTransfer(token, false);

  // Multiplying by 2 because the diesel transfer has 2 transactions:
  // - for the transfer itself,
  // - for sending the diesel to the MTW wallet.
  if (!isStars) {
    amount *= 2n;
    realFee *= 2n;
  }
  amount += config/* DEFAULT_FEE */.dqR;
  realFee += config/* DEFAULT_FEE */.dqR;
  return {
    amount,
    realFee,
    isStars
  };
}
function applyFeeFactorToEmulationResult(estimation) {
  estimation = {
    ...estimation,
    networkFee: (0,bigint/* bigintMultiplyToNumber */.m1)(estimation.networkFee, constants/* FEE_FACTOR */.FT)
  };
  if ('byTransactionIndex' in estimation) {
    estimation.byTransactionIndex = estimation.byTransactionIndex.map(transaction => ({
      ...transaction,
      networkFee: (0,bigint/* bigintMultiplyToNumber */.m1)(transaction.networkFee, constants/* FEE_FACTOR */.FT)
    }));
  }
  return estimation;
}
function makePreparedTransactionToSign(options) {
  const {
    messages,
    seqno,
    doPayFeeFromAmount,
    expireAt,
    shouldBeInternal
  } = options;
  return {
    authType: shouldBeInternal ? 'internal' : undefined,
    seqno,
    messages: messages.map(message => {
      const {
        amount,
        toAddress,
        stateInit
      } = message;
      return (0,core_dist.internal)({
        value: amount,
        to: toAddress,
        body: getPayloadFromTransfer(message),
        bounce: (0,tonCore/* parseAddress */.or)(toAddress).isBounceable,
        init: (0,tonCore/* parseStateInitCell */.zq)(stateInit)
      });
    }),
    sendMode: (doPayFeeFromAmount ? core_dist.SendMode.CARRY_ALL_REMAINING_BALANCE : core_dist.SendMode.PAY_GAS_SEPARATELY
    // It's important to add IGNORE_ERRORS to every transaction. Otherwise, failed transactions may repeat and drain
    // the wallet balance: https://docs.ton.org/v3/documentation/smart-contracts/message-management/sending-messages#behavior-without-2-flag
    ) + core_dist.SendMode.IGNORE_ERRORS,
    timeout: expireAt,
    hints: messages[0].hints // Currently hints are used only by Ledger, which has only 1 message per transaction
  };
}
function getPayloadFromTransfer(_ref7) {
  let {
    payload,
    isBase64Payload
  } = _ref7;
  if (payload === undefined) {
    return undefined;
  }
  if (payload instanceof core_dist.Cell) {
    return payload;
  }
  if (typeof payload === 'string') {
    if (isBase64Payload) {
      return core_dist.Cell.fromBase64(payload);
    }

    // This is what @ton/core does under the hood when a string payload is passed to `internal()`
    return (0,tonCore/* packBytesAsSnakeCell */.nN)((0,tonCore/* commentToBytes */.km)(payload));
  }
  if (payload instanceof Uint8Array) {
    return payload.length ? (0,tonCore/* packBytesAsSnakeCell */.nN)(payload) : undefined;
  }
  throw new TypeError(`Unexpected payload type ${typeof payload}`);
}
;// ./src/api/chains/ton/nfts.ts
/* provided dependency */ var nfts_Buffer = __webpack_require__(48287)["Buffer"];














async function getAccountNfts(accountId, options) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  const rawNfts = await fetchAccountNfts(network, address, options);
  return (0,iteratees/* compact */.oE)(rawNfts.map(rawNft => parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress)));
}
async function checkNftOwnership(accountId, nftAddress) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const rawNft = await fetchNftByAddress(network, nftAddress);
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  const nft = parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress);
  return address === (nft === null || nft === void 0 ? void 0 : nft.ownerAddress);
}
async function getNftUpdates(accountId, fromSec) {
  var _events$;
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  const events = await fetchAccountEvents(network, address, fromSec);
  fromSec = ((_events$ = events[0]) === null || _events$ === void 0 ? void 0 : _events$.timestamp) ?? fromSec;
  events.reverse();
  const updates = [];
  for (const event of events) {
    for (const action of event.actions) {
      let to;
      let nftAddress;
      let rawNft;
      const isPurchase = !!action.NftPurchase;
      if (action.NftItemTransfer) {
        const {
          sender,
          recipient,
          nft: rawNftAddress
        } = action.NftItemTransfer;
        if (!sender || !recipient) continue;
        to = recipient.address;
        nftAddress = (0,tonCore/* toBase64Address */.vn)(rawNftAddress, true, network);
      } else if (action.NftPurchase) {
        const {
          buyer
        } = action.NftPurchase;
        to = buyer.address;
        rawNft = action.NftPurchase.nft;
        if (!rawNft) {
          continue;
        }
        nftAddress = (0,tonCore/* toBase64Address */.vn)(rawNft.address, true, network);
      } else {
        continue;
      }
      if (core_dist.Address.parse(to).equals(core_dist.Address.parse(address))) {
        if (!rawNft) {
          [rawNft] = await fetchNftItems(network, [nftAddress]);
        }
        if (rawNft) {
          const nft = parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress);
          if (nft) {
            updates.push({
              type: 'nftReceived',
              accountId,
              nftAddress,
              nft
            });
          }
        }
      } else if (!isPurchase && (await isActiveSmartContract(network, to))) {
        updates.push({
          type: 'nftPutUpForSale',
          accountId,
          nftAddress
        });
      } else {
        updates.push({
          type: 'nftSent',
          accountId,
          nftAddress,
          newOwnerAddress: to
        });
      }
    }
  }
  return [fromSec, updates];
}
async function checkNftTransferDraft(options) {
  const {
    accountId,
    nfts,
    comment
  } = options;
  let {
    toAddress
  } = options;
  const {
    network
  } = parseAccountId(accountId);
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const {
    address: fromAddress
  } = account.byChain.ton;
  const result = await checkToAddress(network, toAddress);
  if ('error' in result) {
    return result;
  }
  toAddress = result.resolvedAddress;
  const messages = nfts.slice(0, account.type === 'ledger' ? 1 : config/* NFT_BATCH_SIZE */.gR8) // We only need to check the first batch of a multi-transaction
  .map(nft => buildNftTransferMessage(nft, fromAddress, toAddress, comment, account.type === 'ledger'));
  const checkResult = await checkMultiTransactionDraft(accountId, messages);
  if (checkResult.emulation) {
    // todo: Use `received` from the emulation to calculate the real fee. Check what happens when the receiver is the same wallet.
    const batchFee = checkResult.emulation.networkFee;
    result.fee = calculateNftTransferFee(nfts.length, messages.length, batchFee, constants/* NFT_TRANSFER_AMOUNT */.uS);
    result.realFee = calculateNftTransferFee(nfts.length, messages.length, batchFee, constants/* NFT_TRANSFER_REAL_AMOUNT */.nx);
  }
  if ('error' in checkResult) {
    result.error = checkResult.error;
  }
  return result;
}
async function submitNftTransfers(options) {
  const {
    accountId,
    password,
    nfts,
    toAddress,
    comment
  } = options;
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const {
    address: fromAddress
  } = account.byChain.ton;
  const messages = nfts.map(nft => buildNftTransferMessage(nft, fromAddress, toAddress, comment, account.type === 'ledger'));
  return submitMultiTransfer({
    accountId,
    password,
    messages
  });
}
function buildNftTransferMessage(nft, fromAddress, toAddress, comment, isLedger) {
  const isNotcoinBurn = nft.collectionAddress === config/* NOTCOIN_VOUCHERS_ADDRESS */.KmP && (toAddress === config/* BURN_ADDRESS */.pV9 || config/* NOTCOIN_EXCHANGERS */.WVU.includes(toAddress));
  const payload = isNotcoinBurn ? buildNotcoinVoucherExchange(fromAddress, nft.address, nft.index, isLedger) : buildNftTransferPayload(fromAddress, toAddress, comment, undefined, isLedger);
  return {
    payload,
    amount: constants/* NFT_TRANSFER_AMOUNT */.uS,
    toAddress: nft.address
  };
}
function buildNotcoinVoucherExchange(fromAddress, nftAddress, nftIndex, isLedger) {
  const first4Bits = core_dist.Address.parse(nftAddress).hash.readUint8() >> 4;
  const toAddress = config/* NOTCOIN_EXCHANGERS */.WVU[first4Bits];
  const payload = new core_dist.Builder().storeUint(0x5fec6642, 32).storeUint(nftIndex, 64).endCell();
  return buildNftTransferPayload(fromAddress, toAddress, payload, config/* NOTCOIN_FORWARD_TON_AMOUNT */.APY, isLedger);
}
function buildNftTransferPayload(fromAddress, toAddress, payload) {
  let forwardAmount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : constants/* NFT_TRANSFER_FORWARD_AMOUNT */.Wb;
  let isLedger = arguments.length > 4 ? arguments[4] : undefined;
  // In ledger-app-ton v2.7.0 a queryId not equal to 0 is handled incorrectly.
  const queryId = isLedger ? 0n : (0,util/* generateQueryId */.N)();
  let builder = new core_dist.Builder().storeUint(constants/* NftOpCode */.H3.TransferOwnership, 32).storeUint(queryId, 64).storeAddress(core_dist.Address.parse(toAddress)).storeAddress(core_dist.Address.parse(fromAddress)).storeBit(false) // null custom_payload
  .storeCoins(forwardAmount);
  let forwardPayload;
  if (payload) {
    if (typeof payload === 'string') {
      const bytes = (0,tonCore/* commentToBytes */.km)(payload);
      const freeBytes = Math.floor((builder.availableBits - constants/* NFT_PAYLOAD_SAFE_MARGIN */.xA) / 8);
      forwardPayload = (0,tonCore/* packBytesAsSnake */.DN)(bytes, freeBytes);
    } else {
      forwardPayload = payload;
    }
  }
  if (forwardPayload instanceof Uint8Array) {
    builder.storeBit(0);
    builder = builder.storeBuffer(nfts_Buffer.from(forwardPayload));
  } else {
    builder = builder.storeMaybeRef(forwardPayload);
  }
  return builder.endCell();
}
function calculateNftTransferFee(totalNftCount,
// How many NFTs were added to the multi-transaction before estimating it
estimatedBatchSize,
// The blockchain fee of the estimated multi-transaction
estimatedBatchBlockchainFee,
// How much TON is attached to each NFT during the transfer
amountPerNft) {
  const fullBatchCount = Math.floor(totalNftCount / estimatedBatchSize);
  let remainingBatchSize = totalNftCount % estimatedBatchSize;

  // The blockchain fee for the first NFT in a batch is almost twice higher than the fee for the other NFTs. Therefore,
  // simply using the average NFT fee to calculate the last incomplete batch fee gives an insufficient number. To fix
  // that, we increase the last batch size.
  //
  // A real life example:
  // 1 NFT  in the batch: 0.002939195 TON
  // 2 NFTs in the batch: 0.004470516 TON
  // 3 NFTs in the batch: 0.006001837 TON
  // 4 NFTs in the batch: 0.007533158 TON
  if (remainingBatchSize > 0 && remainingBatchSize < estimatedBatchSize) {
    remainingBatchSize += 1;
  }
  const totalBlockchainFee = (0,bigint/* bigintMultiplyToNumber */.m1)(estimatedBatchBlockchainFee, (fullBatchCount * estimatedBatchSize + remainingBatchSize) / estimatedBatchSize);
  return totalBlockchainFee + BigInt(totalNftCount) * amountPerNft;
}
// EXTERNAL MODULE: ./src/util/dateFormat.ts
var dateFormat = __webpack_require__(10309);
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/DnsItem.ts
var DnsItem = __webpack_require__(96773);
;// ./src/api/chains/ton/domains.ts











async function checkDnsRenewalDraft(accountId, nftAddresses) {
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const maxMessages = getMaxMessagesInTransaction(account);
  const transactionCount = Math.ceil(nftAddresses.length / maxMessages);
  const messages = nftAddresses.slice(0, maxMessages).map(makeRenewMessage);
  const result = await checkMultiTransactionDraft(accountId, messages);
  if ('error' in result) {
    return result;
  }
  const totalAmount = constants/* TON_GAS */.sl.changeDns * BigInt(nftAddresses.length);
  const realFee = totalAmount + result.emulation.networkFee * BigInt(transactionCount); // Not very correct, but ≥ the actual fee

  return {
    realFee
  };
}
async function* submitDnsRenewal(accountId, password, nftAddresses) {
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const maxMessages = getMaxMessagesInTransaction(account);
  const nftBatches = (0,iteratees/* split */.lD)(nftAddresses, maxMessages);
  for (const nftBatch of nftBatches) {
    const messages = nftBatch.map(makeRenewMessage);
    yield {
      addresses: nftBatch,
      result: await submitMultiTransfer({
        accountId,
        password,
        messages
      })
    };
  }
}
async function checkDnsChangeWalletDraft(accountId, nftAddress, address) {
  const result = await checkMultiTransactionDraft(accountId, [makeChangeMessage(nftAddress, address)]);
  if ('error' in result) {
    return result;
  }
  return {
    realFee: result.emulation.networkFee + constants/* TON_GAS */.sl.changeDns
  };
}
function submitDnsChangeWallet(accountId, password, nftAddress, address) {
  return submitMultiTransfer({
    accountId,
    password,
    messages: [makeChangeMessage(nftAddress, address)]
  });
}
function makeRenewMessage(nftAddress) {
  return {
    toAddress: nftAddress,
    payload: DnsItem/* DnsItem */.n.buildFillUpMessage(),
    amount: constants/* TON_GAS */.sl.changeDns
  };
}
function makeChangeMessage(nftAddress, linkedAddress) {
  return {
    toAddress: nftAddress,
    payload: DnsItem/* DnsItem */.n.buildChangeDnsWalletMessage(linkedAddress),
    amount: constants/* TON_GAS */.sl.changeDns
  };
}
async function fetchDomains(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const data = await callBackendGet('/dns/getDomains', {
    address
  });
  const nftSuperCollectionsByCollectionAddress = await getNftSuperCollectionsByCollectionAddress();
  const expirationByAddress = {};
  const linkedAddressByAddress = {};
  const nfts = {};
  Object.keys(data).forEach(nftAddress => {
    const {
      lastFillUpTime,
      linkedAddress,
      nft: rawNft
    } = data[nftAddress];
    expirationByAddress[nftAddress] = new Date(lastFillUpTime).getTime() + dateFormat/* YEAR */.UX;
    if (linkedAddress) {
      linkedAddressByAddress[nftAddress] = linkedAddress;
    }
    const nft = parseTonapiioNft(network, rawNft, nftSuperCollectionsByCollectionAddress);
    if (nft) {
      nfts[nftAddress] = nft;
    }
  });
  return {
    expirationByAddress,
    linkedAddressByAddress,
    nfts
  };
}
;// ./src/util/devSettings.ts
/*
To activate dev setting, enter `devSettings.simulateLongUnstaking = true;` in the browser console,
either in the main frame or in the worker (different commands for different frames).
*/

function getDevSettings() {
  return self.devSettings ?? {};
}
self.devSettings = {};
;// ./src/util/staking/index.ts

function getStakingMinAmount(type) {
  switch (type) {
    case 'nominators':
      return NOMINATORS_STAKING_MIN_AMOUNT;
    case 'ethena':
      return ETHENA_STAKING_MIN_AMOUNT;
    default:
      return STAKING_MIN_AMOUNT;
  }
}
function getUnstakeTime(state) {
  switch (state === null || state === void 0 ? void 0 : state.type) {
    case 'nominators':
    case 'liquid':
      return state.end;
    case 'ethena':
      return state.unlockTime;
    default:
      return undefined;
  }
}
function getStakingTitle(stakingType) {
  return stakingType === 'ethena' ? 'How does it work?' : 'Why this is safe';
}
function getStakingStateStatus(state) {
  if (state.unstakeRequestAmount) {
    if (state.type === 'ethena' && state.unlockTime && state.unlockTime <= Date.now()) {
      return 'readyToClaim';
    }
    return 'unstakeRequested';
  }
  if (getIsActiveStakingState(state)) {
    return 'active';
  }
  return 'inactive';
}
function getIsActiveStakingState(state) {
  return Boolean(state.balance || state.unstakeRequestAmount || 'unclaimedRewards' in state && state.unclaimedRewards > config/* MIN_ACTIVE_STAKING_REWARDS */.dL4);
}
function getIsLongUnstake(state, amount) {
  switch (state.type) {
    case 'nominators':
      {
        return true;
      }
    case 'liquid':
      {
        return amount === undefined ? false : amount > state.instantAvailable;
      }
    case 'jetton':
      {
        return false;
      }
    case 'ethena':
      {
        return true;
      }
  }
  return undefined;
}
function getFullStakingBalance(state) {
  switch (state.type) {
    case 'jetton':
      {
        return state.balance + state.unclaimedRewards;
      }
    case 'ethena':
      {
        return state.balance + state.unstakeRequestAmount;
      }
  }
  return state.balance;
}
;// ./src/util/ton/calcJettonStakingApr.ts


function calcJettonStakingApr(_ref) {
  let {
    tvl,
    dailyReward,
    decimals
  } = _ref;
  if (!tvl) {
    return 0;
  }
  const apr = (0,util_decimals/* toBig */.CF)(dailyReward, decimals).div((0,util_decimals/* toBig */.CF)(tvl, decimals)).mul(DAYS_IN_YEAR).mul(100).toFixed(2);
  return Number(apr);
}
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonWallet.ts
var JettonWallet = __webpack_require__(67132);
;// ./src/api/chains/ton/contracts/Ethena/TsUSDeWallet.ts


var OpCode = /*#__PURE__*/function (OpCode) {
  OpCode[OpCode["transfer_timelocked"] = 3612397257] = "transfer_timelocked";
  return OpCode;
}(OpCode || {});
class TsUSDeWallet extends JettonWallet/* JettonWallet */.K {
  constructor(address) {
    super(address);
    this.address = address;
  }
  static createFromAddress(address) {
    return new TsUSDeWallet(address);
  }
  async getTimeLockData(provider) {
    try {
      const stack = (await provider.get('get_timelock_data', [])).stack;
      const lockedUsdeBalance = stack.readBigNumber();
      const unlockTime = stack.readNumber();
      return {
        lockedUsdeBalance,
        unlockTime
      };
    } catch (err) {
      var _err$message;
      if ((_err$message = err.message) !== null && _err$message !== void 0 && _err$message.includes('exit_code: -13')) {
        return {
          lockedUsdeBalance: 0n
        };
      } else {
        throw err;
      }
    }
  }
  static transferTimelockedMessage(options) {
    return (0,core_dist.beginCell)().storeUint(OpCode.transfer_timelocked, 32).storeUint(0, 64) // op, queryId
    .storeCoins(options.jettonAmount).storeAddress(options.to).storeAddress(options.responseAddress).storeMaybeRef(options.customPayload).storeCoins(options.forwardTonAmount).storeMaybeRef(options.forwardPayload).endCell();
  }
}
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonStaking/StakeWallet.ts
var StakeWallet = __webpack_require__(84752);
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonStaking/StakingPool.ts
var StakingPool = __webpack_require__(86972);
;// ./src/api/chains/ton/contracts/NominatorPool.ts

function nominatorPoolConfigToCell(config) {
  return (0,core_dist.beginCell)().endCell();
}
class NominatorPool {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new NominatorPool(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = nominatorPoolConfigToCell(config);
    const init = {
      code,
      data
    };
    return new NominatorPool((0,core_dist.contractAddress)(workchain, init), init);
  }
  async getListNominators(provider) {
    const res = await provider.get('list_nominators', []);
    const tupleReader = res.stack.readTuple();
    const itemsArray = tupleReader.items;
    return itemsArray.map(items => {
      const tupleItems = items.map(value => ({
        type: 'int',
        value
      }));
      const tuple = new core_dist.TupleReader(tupleItems);
      const hash = tuple.readBigNumber().toString(16).padStart(64, '0');
      const address = core_dist.Address.parse(`0:${hash}`);
      const amount = tuple.readBigNumber();
      const pendingDepositAmount = tuple.readBigNumber();
      const withdrawRequested = Boolean(tuple.readNumber());
      return {
        address,
        amount,
        pendingDepositAmount,
        withdrawRequested
      };
    });
  }
}
;// ./src/api/common/cache.ts

let stakingCommonCache;
const stakingCommonCacheDeferred = new Deferred/* default */.A();
const accountCache = {};
let backendConfig;
const configDeferred = new Deferred/* default */.A();
function getAccountCache(accountId, address) {
  return accountCache[`${accountId}:${address}`] ?? {};
}
function updateAccountCache(accountId, address, partial) {
  const key = `${accountId}:${address}`;
  accountCache[key] = {
    ...accountCache[key],
    ...partial
  };
}
function setStakingCommonCache(data) {
  stakingCommonCache = data;
  stakingCommonCacheDeferred.resolve();
}
async function getStakingCommonCache() {
  await stakingCommonCacheDeferred.promise;
  return stakingCommonCache;
}
function setBackendConfigCache(config) {
  backendConfig = config;
  configDeferred.resolve();
}

/** Returns the config provided by the backend */
async function getBackendConfigCache() {
  await configDeferred.promise;
  return backendConfig;
}
// EXTERNAL MODULE: ./src/util/random.ts
var random = __webpack_require__(59121);
;// ./src/api/common/other.ts
/* provided dependency */ var other_Buffer = __webpack_require__(48287)["Buffer"];


let clientId;
let referrer;
async function getClientId() {
  if (!clientId) {
    [clientId, referrer] = await Promise.all([storages_storage.getItem('clientId'), storages_storage.getItem('referrer')]);
  }
  if (clientId) {
    const parts = clientId.split(':', 1);
    if (!parts[1] && referrer) {
      clientId = `${parts[0]}:${referrer}`;
      void storages_storage.setItem('clientId', clientId);
    }
  } else {
    const hex = other_Buffer.from((0,random/* randomBytes */.po)(10)).toString('hex');
    clientId = `${hex}:${referrer ?? ''}`;
    void storages_storage.setItem('clientId', clientId);
  }
  return clientId;
}
;// ./src/api/chains/ton/staking.ts






















async function checkStakeDraft(accountId, amount, state) {
  let result;
  switch (state.type) {
    case 'nominators':
      {
        if (amount < constants/* TON_GAS */.sl.stakeNominators) {
          return {
            error: types/* ApiTransactionDraftError */.KL.InvalidAmount
          };
        }
        result = await checkTransactionDraft({
          accountId,
          toAddress: state.pool,
          amount: amount + constants/* TON_GAS */.sl.stakeNominators,
          data: constants/* STAKE_COMMENT */.v8
        });
        if ('fee' in result && result.fee) {
          result.fee = constants/* TON_GAS */.sl.stakeNominators + result.fee;
        }
        break;
      }
    case 'liquid':
      {
        result = await checkTransactionDraft({
          accountId,
          toAddress: config/* LIQUID_POOL */.qMf,
          amount: amount + constants/* TON_GAS */.sl.stakeLiquid,
          data: (0,tonCore/* buildLiquidStakingDepositBody */.UY)()
        });
        if ('fee' in result && result.fee) {
          result.fee = constants/* TON_GAS */.sl.stakeLiquid + result.fee;
        }
        break;
      }
    case 'jetton':
      {
        const {
          tokenSlug,
          pool,
          period
        } = state;
        const {
          tokenAddress
        } = getTokenBySlug(tokenSlug);
        result = await checkTransactionDraft({
          accountId,
          toAddress: pool,
          tokenAddress,
          amount,
          data: StakingPool/* StakingPool */.Ml.stakePayload(period),
          forwardAmount: constants/* TON_GAS */.sl.stakeJettonsForward
        });
        break;
      }
    case 'ethena':
      {
        result = await checkTransactionDraft({
          accountId,
          toAddress: config/* ETHENA_STAKING_VAULT */.BV6,
          tokenAddress: config/* TON_USDE */.wpN.tokenAddress,
          amount,
          forwardAmount: constants/* TON_GAS */.sl.stakeEthenaForward
        });
        break;
      }
  }
  return result;
}
async function checkUnstakeDraft(accountId, amount, state) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const commonData = await getStakingCommonCache();
  let result;
  let tokenAmount;
  switch (state.type) {
    case 'nominators':
      {
        result = await checkTransactionDraft({
          accountId,
          toAddress: state.pool,
          amount: constants/* TON_GAS */.sl.unstakeNominators,
          data: constants/* UNSTAKE_COMMENT */.mv
        });
        break;
      }
    case 'liquid':
      {
        if (amount > state.balance) {
          return {
            error: types/* ApiTransactionDraftError */.KL.InsufficientBalance
          };
        } else if (amount === state.balance) {
          tokenAmount = state.tokenBalance;
        } else {
          tokenAmount = (0,bigint/* bigintDivideToNumber */.fC)(amount, commonData.liquid.currentRate);
        }
        const params = await buildLiquidStakingWithdraw(network, address, tokenAmount);
        result = await checkTransactionDraft({
          accountId,
          toAddress: params.toAddress,
          amount: params.amount,
          data: params.payload
        });
        break;
      }
    case 'jetton':
      {
        tokenAmount = amount;
        result = await checkTransactionDraft({
          accountId,
          toAddress: state.stakeWalletAddress,
          amount: constants/* TON_GAS */.sl.unstakeJettons,
          data: (0,tonCore/* buildJettonUnstakePayload */.ct)(amount, true)
        });
        break;
      }
    case 'ethena':
      {
        if (amount > state.balance) {
          return {
            error: types/* ApiTransactionDraftError */.KL.InsufficientBalance
          };
        } else if (amount === state.balance) {
          tokenAmount = state.tokenBalance;
        } else {
          const rate = network === 'testnet' ? 1 : commonData.ethena.rate;
          tokenAmount = (0,bigint/* bigintDivideToNumber */.fC)(amount, rate);
        }
        result = await checkTransactionDraft({
          accountId,
          toAddress: config/* TON_TSUSDE */.VG8.tokenAddress,
          amount: tokenAmount,
          tokenAddress: config/* TON_TSUSDE */.VG8.tokenAddress,
          forwardAmount: constants/* TON_GAS */.sl.unstakeEthenaForward
        });
        break;
      }
  }
  return {
    ...result,
    type: state.type,
    tokenAmount
  };
}
async function submitStake(accountId, password, amount, state) {
  let result;
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  switch (state.type) {
    case 'nominators':
      {
        result = await submitTransfer({
          accountId,
          password,
          toAddress: (0,tonCore/* toBase64Address */.vn)(state.pool, true, network),
          amount: amount + constants/* TON_GAS */.sl.stakeNominators,
          data: constants/* STAKE_COMMENT */.v8
        });
        break;
      }
    case 'liquid':
      {
        result = await submitTransfer({
          accountId,
          password,
          toAddress: config/* LIQUID_POOL */.qMf,
          amount: amount + constants/* TON_GAS */.sl.stakeLiquid,
          data: (0,tonCore/* buildLiquidStakingDepositBody */.UY)()
        });
        break;
      }
    case 'jetton':
      {
        const {
          tokenSlug,
          pool,
          period
        } = state;
        const {
          tokenAddress
        } = getTokenBySlug(tokenSlug);
        result = await submitTransfer({
          accountId,
          password,
          toAddress: pool,
          tokenAddress,
          amount,
          data: StakingPool/* StakingPool */.Ml.stakePayload(period),
          forwardAmount: constants/* TON_GAS */.sl.stakeJettonsForward
        });
        if (!('error' in result)) {
          result.toAddress = pool;
        }
        break;
      }
    case 'ethena':
      {
        result = await submitTransfer({
          accountId,
          password,
          toAddress: config/* ETHENA_STAKING_VAULT */.BV6,
          tokenAddress: config/* TON_USDE */.wpN.tokenAddress,
          amount,
          forwardAmount: constants/* TON_GAS */.sl.stakeEthenaForward
        });
        break;
      }
  }
  if (!('error' in result)) {
    updateAccountCache(accountId, address, {
      stakedAt: Date.now()
    });
  }
  return result;
}
async function submitUnstake(accountId, password, amount, state) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  let result;
  switch (state.type) {
    case 'nominators':
      {
        result = await submitTransfer({
          accountId,
          password,
          toAddress: (0,tonCore/* toBase64Address */.vn)(state.pool, true, network),
          amount: constants/* TON_GAS */.sl.unstakeNominators,
          data: constants/* UNSTAKE_COMMENT */.mv
        });
        break;
      }
    case 'liquid':
      {
        const mode = !state.instantAvailable ? types/* ApiLiquidUnstakeMode */.Dn.BestRate : types/* ApiLiquidUnstakeMode */.Dn.Default;
        const params = await buildLiquidStakingWithdraw(network, address, amount, mode);
        result = await submitTransfer({
          accountId,
          password,
          toAddress: params.toAddress,
          amount: params.amount,
          data: params.payload
        });
        break;
      }
    case 'jetton':
      {
        result = await submitTransfer({
          accountId,
          password,
          toAddress: state.stakeWalletAddress,
          amount: constants/* TON_GAS */.sl.unstakeJettons,
          data: (0,tonCore/* buildJettonUnstakePayload */.ct)(amount, true)
        });
        break;
      }
    case 'ethena':
      {
        result = await submitTransfer({
          accountId,
          password,
          toAddress: config/* TON_TSUSDE */.VG8.tokenAddress,
          amount,
          tokenAddress: config/* TON_TSUSDE */.VG8.tokenAddress,
          forwardAmount: constants/* TON_GAS */.sl.unstakeEthenaForward
        });
        if (!('error' in result)) {
          result.localActivityParams = {
            slug: config/* TON_TSUSDE */.VG8.slug,
            amount: 0n,
            toAddress: config/* TON_TSUSDE */.VG8.tokenAddress
          };
        }
      }
  }
  return result;
}
async function buildLiquidStakingWithdraw(network, address, amount) {
  let mode = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : types/* ApiLiquidUnstakeMode */.Dn.Default;
  const tokenWalletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, address, config/* LIQUID_JETTON */.Kzb);
  const payload = (0,tonCore/* buildLiquidStakingWithdrawBody */.Is)({
    amount,
    responseAddress: address,
    fillOrKill: mode === types/* ApiLiquidUnstakeMode */.Dn.Instant,
    waitTillRoundEnd: mode === types/* ApiLiquidUnstakeMode */.Dn.BestRate
  });
  return {
    amount: constants/* TON_GAS */.sl.unstakeLiquid,
    toAddress: tokenWalletAddress,
    payload
  };
}
async function getStakingStates(accountId, commonData, backendState, balances) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const {
    loyaltyType,
    shouldUseNominators,
    type: backendType
  } = backendState;
  const options = {
    accountId,
    backendState,
    commonData,
    address,
    loyaltyType,
    network,
    balances
  };
  const promises = [];
  for (const poolConfig of commonData.jettonPools) {
    const slug = buildTokenSlug('ton', poolConfig.token);
    if (slug in balances) {
      promises.push(buildJettonState(options, poolConfig));
    }
  }
  if (shouldUseNominators || backendType === 'nominators') {
    promises.push(buildNominatorsState(options));
  }
  if (config/* TON_USDE */.wpN.slug in balances && (!commonData.ethena.isDisabled || config/* DEBUG */.Oig)) {
    promises.push(buildEthenaState(options));
  }
  return [buildLiquidState(options), ...(await Promise.all(promises))];
}
function buildLiquidState(_ref) {
  var _backendState$liquid;
  let {
    accountId,
    address,
    backendState,
    commonData,
    loyaltyType,
    balances
  } = _ref;
  const {
    currentRate
  } = commonData.liquid;
  const tokenSlug = buildTokenSlug('ton', config/* LIQUID_JETTON */.Kzb);
  const tokenBalance = balances[tokenSlug] ?? 0n;
  const unstakeRequestAmount = (0,util_decimals/* fromDecimal */.UH)(((_backendState$liquid = backendState.liquid) === null || _backendState$liquid === void 0 ? void 0 : _backendState$liquid.unstakeRequestAmount) ?? 0);
  const accountCache = getAccountCache(accountId, address);
  const stakedAt = Math.max(accountCache.stakedAt ?? 0, backendState.stakedAt ?? 0);
  const isInstantUnstake = Date.now() - stakedAt > config/* VALIDATION_PERIOD_MS */.NFS && !getDevSettings().simulateLongUnstaking;
  const liquidAvailable = isInstantUnstake ? commonData.liquid.available : 0n;
  const {
    start,
    end
  } = getLiquidStakingTimeRange(commonData);
  let liquidApy = commonData.liquid.apy;
  if (loyaltyType && loyaltyType in commonData.liquid.loyaltyApy) {
    liquidApy = commonData.liquid.loyaltyApy[loyaltyType];
  }
  const balance = (0,bigint/* bigintMultiplyToNumber */.m1)(tokenBalance, currentRate) + unstakeRequestAmount;
  return {
    type: 'liquid',
    id: 'liquid',
    tokenSlug: config/* TONCOIN */.Tu9.slug,
    pool: config/* LIQUID_POOL */.qMf,
    balance,
    annualYield: liquidApy,
    yieldType: 'APY',
    tokenBalance,
    unstakeRequestAmount,
    instantAvailable: liquidAvailable,
    start,
    end
  };
}
async function buildNominatorsState(_ref2) {
  var _currentNominator, _currentNominator2;
  let {
    network,
    address,
    backendState,
    commonData
  } = _ref2;
  const balance = backendState.balance;
  const {
    address: pool,
    apy
  } = backendState.nominatorsPool;
  const isPrevRoundUnlocked = Date.now() > commonData.prevRound.unlock;
  const start = isPrevRoundUnlocked ? commonData.round.start : commonData.prevRound.start;
  const end = isPrevRoundUnlocked ? commonData.round.unlock : commonData.prevRound.unlock;
  let currentNominator;
  if (backendState.type === 'nominators') {
    const nominatorPool = (0,tonCore/* getTonClient */.N7)(network).open(new NominatorPool(core_dist.Address.parse(pool)));
    const nominators = await nominatorPool.getListNominators();
    const addressObject = core_dist.Address.parse(address);
    currentNominator = nominators.find(n => n.address.equals(addressObject));
  }
  return {
    type: 'nominators',
    id: 'nominators',
    tokenSlug: config/* TONCOIN */.Tu9.slug,
    balance: currentNominator ? balance : 0n,
    annualYield: apy,
    yieldType: 'APY',
    pool,
    start,
    end,
    pendingDepositAmount: ((_currentNominator = currentNominator) === null || _currentNominator === void 0 ? void 0 : _currentNominator.pendingDepositAmount) ?? 0n,
    unstakeRequestAmount: (_currentNominator2 = currentNominator) !== null && _currentNominator2 !== void 0 && _currentNominator2.withdrawRequested ? balance : 0n
  };
}
async function buildJettonState(options, pool) {
  const {
    network
  } = options;

  // common
  const {
    pool: poolAddress,
    token: tokenAddress,
    poolConfig
  } = pool;
  const {
    decimals,
    slug: tokenSlug
  } = getTokenByAddress(tokenAddress);

  // pool
  const {
    tvl,
    rewardJettons
  } = (0,tonCore/* unpackDicts */.wx)(poolConfig);
  const {
    rewardsDeposits
  } = Object.values(rewardJettons)[0];
  const now = Math.floor(Date.now() / 1000);
  let dailyReward = 0n;
  for (const {
    startTime,
    endTime,
    distributionSpeed
  } of Object.values(rewardsDeposits)) {
    if (startTime < now && endTime > now) {
      dailyReward += distributionSpeed;
    }
  }
  const apr = calcJettonStakingApr({
    tvl,
    dailyReward,
    decimals
  });

  // wallet
  const {
    address,
    balances
  } = options;
  const periodConfig = pool.periods[0];
  const stakedTokenSlug = buildTokenSlug('ton', periodConfig.token);
  const stakeWallet = await (0,tonCore/* getJettonPoolStakeWallet */.C6)(network, poolAddress, periodConfig.period, address);
  let unclaimedRewards = 0n;
  let balance = 0n;
  let poolWallets;
  if (stakedTokenSlug in balances) {
    // Avoiding the request when it's unnecessary
    const walletData = await stakeWallet.getStorageData().catch(() => undefined);
    if (walletData) {
      const poolWalletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, poolAddress, tokenAddress);
      const rewards = StakeWallet/* StakeWallet */.sH.getAvailableRewards(walletData, poolConfig);
      unclaimedRewards = (rewards && rewards[poolWalletAddress]) ?? 0n;
      balance = walletData.jettonBalance;
      poolWallets = Object.keys(rewards);
    }
  }
  const state = {
    type: 'jetton',
    id: poolAddress,
    pool: poolAddress,
    tokenAddress,
    tokenSlug,
    annualYield: apr,
    yieldType: 'APR',
    balance,
    unclaimedRewards,
    poolWallets,
    stakeWalletAddress: (0,tonCore/* toBase64Address */.vn)(stakeWallet.address, true),
    tokenAmount: 0n,
    tvl,
    dailyReward,
    period: periodConfig.period
  };
  return state;
}
async function buildEthenaState(options) {
  const {
    network,
    balances,
    address: walletAddress,
    commonData,
    commonData: {
      ethena: {
        apy,
        apyVerified
      }
    },
    backendState: {
      ethena: {
        isVerified
      }
    }
  } = options;
  const rate = network === 'testnet' ? 1 : commonData.ethena.rate;
  const tonClient = (0,tonCore/* getTonClient */.N7)(network);
  const tsUsdeWalletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, walletAddress, config/* TON_TSUSDE */.VG8.tokenAddress);
  const tsUsdeWallet = tonClient.open(TsUSDeWallet.createFromAddress(core_dist.Address.parse(tsUsdeWalletAddress)));
  const {
    lockedUsdeBalance,
    unlockTime
  } = await tsUsdeWallet.getTimeLockData();
  const tokenBalance = balances[config/* TON_TSUSDE */.VG8.slug] ?? 0n;
  const balance = (0,bigint/* bigintMultiplyToNumber */.m1)(tokenBalance, rate);
  const state = {
    id: 'ethena',
    type: 'ethena',
    tokenSlug: config/* TON_USDE */.wpN.slug,
    yieldType: 'APY',
    annualYield: isVerified ? apyVerified : apy,
    annualYieldStandard: apy,
    annualYieldVerified: apyVerified,
    balance,
    pool: config/* ETHENA_STAKING_VAULT */.BV6,
    tokenBalance,
    unstakeRequestAmount: lockedUsdeBalance,
    unlockTime: unlockTime && lockedUsdeBalance ? unlockTime * 1000 : undefined,
    tsUsdeWalletAddress
  };

  // If the user never passed verification and has no active USDe staking, we should optimistically show the high APY.
  if (isVerified === undefined && !getIsActiveStakingState(state)) {
    state.annualYield = apyVerified;
  }
  return state;
}
function getLiquidStakingTimeRange(commonData) {
  const {
    prevRound,
    round: currentRound
  } = commonData;
  const now = Date.now();
  const gracePeriod = config/* UNSTAKE_TON_GRACE_PERIOD */.N7B;
  const round =
  // Show date of next unlock plus few minutes
  // (except when grace period is active and payout has already occurred — i.e. collection has disappeared).
  now > prevRound.unlock && now < prevRound.unlock + gracePeriod && !commonData.liquid.collection || now >= prevRound.unlock + gracePeriod ? currentRound : prevRound;
  return {
    start: round.start,
    end: round.unlock + gracePeriod
  };
}
async function getBackendStakingState(accountId) {
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const state = await fetchBackendStakingState(account.byChain.ton.address, account.type === 'view');
  return {
    ...state,
    nominatorsPool: {
      ...state.nominatorsPool,
      start: state.nominatorsPool.start * 1000,
      end: state.nominatorsPool.end * 1000
    }
  };
}
async function fetchBackendStakingState(address, isViewOnly) {
  const clientId = await getClientId();
  const stakingState = await callBackendGet(`/staking/state/${address}`, {
    isViewMode: isViewOnly ? 1 : undefined
  }, {
    'X-App-ClientID': clientId
  });
  stakingState.balance = (0,util_decimals/* fromDecimal */.UH)(stakingState.balance);
  stakingState.totalProfit = (0,util_decimals/* fromDecimal */.UH)(stakingState.totalProfit);
  if (!(0,utils/* isKnownStakingPool */.Jx)(stakingState.nominatorsPool.address)) {
    throw Error('Unexpected pool address, likely a malicious activity');
  }
  return stakingState;
}
function submitTokenStakingClaim(accountId, password, state) {
  return submitTransfer({
    accountId,
    password,
    toAddress: state.stakeWalletAddress,
    amount: constants/* TON_GAS */.sl.claimJettons,
    data: (0,tonCore/* buildJettonClaimPayload */.jf)(state.poolWallets)
  });
}
async function submitUnstakeEthenaLocked(accountId, password, state) {
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const result = await submitTransfer({
    accountId,
    password,
    toAddress: state.tsUsdeWalletAddress,
    amount: constants/* TON_GAS */.sl.unstakeEthenaLocked,
    data: TsUSDeWallet.transferTimelockedMessage({
      jettonAmount: state.unstakeRequestAmount,
      to: core_dist.Address.parse(config/* TON_TSUSDE */.VG8.tokenAddress),
      responseAddress: core_dist.Address.parse(address),
      forwardTonAmount: constants/* TON_GAS */.sl.unstakeEthenaLockedForward
    })
  });
  if (!('error' in result)) {
    result.localActivityParams = {
      type: 'unstake',
      amount: state.unstakeRequestAmount,
      isIncoming: true,
      slug: config/* TON_USDE */.wpN.slug,
      fromAddress: config/* ETHENA_STAKING_VAULT */.BV6,
      toAddress: address
    };
  }
  return result;
}
;// ./src/api/chains/ton/other.ts
/* provided dependency */ var ton_other_Buffer = __webpack_require__(48287)["Buffer"];


function packPayloadToBoc(payload) {
  return packPayloadToBuffer(payload).toString('base64');
}
function packPayloadToBuffer(payload) {
  let cell = new core_dist.Cell();
  if (payload) {
    if (payload instanceof core_dist.Cell) {
      cell = payload;
    } else if (typeof payload === 'string') {
      if (payload.length > 0) {
        cell = new core_dist.Builder().storeUint(0, 32).storeStringTail(payload).asCell();
      }
    } else {
      cell = new core_dist.Builder().storeBuffer(ton_other_Buffer.from(payload)).asCell();
    }
  }
  return cell.toBoc();
}
async function checkApiAvailability(network) {
  try {
    await (0,tonCore/* getTonClient */.N7)(network).getMasterchainInfo();
    return true;
  } catch (err) {
    return false;
  }
}
;// ./src/api/chains/ton/swap.ts








async function getContractInfos(network, addresses) {
  // Can't be done via Toncenter `/api/v3/accountStates` endpoint because it serializes code cells
  // differently, resulting in `codeHashOld` mismatch
  const result = {};
  const infos = await Promise.all(addresses.map(address => getContractInfo(network, address)));
  for (let i = 0; i < addresses.length; i++) {
    result[addresses[i]] = infos[i];
  }
  return result;
}
const FEE_ADDRESSES = [config/* SWAP_FEE_ADDRESS */.yTE, config/* DIESEL_ADDRESS */.InW];
const MAX_NETWORK_FEE = 3600000000n; // 3.6 TON = 0.3 TON * 3 * 4 - when 4 splits with 3 hops per split on Stonfi
const MAX_SPLITS = 4; // Backend configuration

async function validateDexSwapTransfers(network, address, request, transfers, account) {
  var _transfers$at;
  const feeTransfer = (0,tonCore/* toBase64Address */.vn)(((_transfers$at = transfers.at(-1)) === null || _transfers$at === void 0 ? void 0 : _transfers$at.toAddress) ?? '', false) === config/* SWAP_FEE_ADDRESS */.yTE ? transfers.at(-1) : undefined;
  const mainTransfers = feeTransfer ? transfers.slice(0, -1) : transfers;
  const maxMessages = getMaxMessagesInTransaction(account, true);
  const maxSplits = Math.min(maxMessages - (feeTransfer ? 1 : 0), MAX_SPLITS);
  const assert = (condition, message) => {
    (0,util_assert/* assert */.v)(condition, message, {
      network,
      address,
      request,
      transfers,
      maxMessages,
      maxSplits
    });
  };
  assert(transfers.length <= maxSplits, 'Too many main transfers');
  if (request.from === config/* TONCOIN */.Tu9.symbol) {
    const maxAmount = (0,util_decimals/* fromDecimal */.UH)(request.fromAmount) + (0,util_decimals/* fromDecimal */.UH)(request.ourFee) + MAX_NETWORK_FEE;
    let sumAmount = 0n;
    const contractInfos = await getContractInfos(network, mainTransfers.map(transfer => transfer.toAddress));
    for (let i = 0; i < mainTransfers.length; i++) {
      const mainTransfer = mainTransfers[i];
      sumAmount += mainTransfer.amount;
      const {
        isSwapAllowed,
        codeHashOld
      } = contractInfos[mainTransfer.toAddress];
      assert(!!isSwapAllowed, `Main transfer ${i + 1}/${mainTransfers.length} is not to a swap contract: ${codeHashOld}`);
    }
    assert(sumAmount <= maxAmount, 'Main transfers amount is too big');
    if (feeTransfer) {
      assert(feeTransfer.amount <= sumAmount, 'Fee transfer amount is bigger than main transfers amount');
      assert(feeTransfer.amount <= MAX_NETWORK_FEE, 'Fee transfer amount is bigger than max network fee');
      assert(feeTransfer.amount + sumAmount < maxAmount, 'Total amount is too big');
      assert(FEE_ADDRESSES.includes((0,tonCore/* toBase64Address */.vn)(feeTransfer.toAddress, false)), 'Unexpected fee transfer address');
    }
  } else {
    const token = getTokenByAddress(request.from);
    assert(!!token, 'Unknown "from" token');
    const maxAmount = (0,util_decimals/* fromDecimal */.UH)(request.fromAmount, token.decimals) + (0,util_decimals/* fromDecimal */.UH)(request.ourFee ?? 0, token.decimals) + (0,util_decimals/* fromDecimal */.UH)(request.dieselFee ?? 0, token.decimals);
    const maxTonAmount = MAX_NETWORK_FEE;
    const walletAddress = await (0,tonCore/* resolveTokenWalletAddress */.jq)(network, address, token.tokenAddress);
    let sumTokenAmount = 0n;
    let sumTonAmount = 0n;
    const parsedPayloads = await Promise.all(mainTransfers.map(async transfer => parsePayloadBase64(network, transfer.toAddress, transfer.payload)));
    const contractInfos = await getContractInfos(network, parsedPayloads.filter(isTokenTransferPayload).map(payload => payload.destination));
    for (let i = 0; i < mainTransfers.length; i++) {
      const mainTransfer = mainTransfers[i];
      const parsedPayload = parsedPayloads[i];
      assert(mainTransfer.toAddress === walletAddress, `Main transfer ${i + 1}/${mainTransfers.length} address is not the token wallet address`);
      assert(isTokenTransferPayload(parsedPayload), `Main transfer ${i + 1}/${mainTransfers.length} payload is not a token transfer`);
      const {
        amount: tokenAmount,
        destination
      } = parsedPayload;
      sumTokenAmount += tokenAmount;
      sumTonAmount += mainTransfer.amount;
      const {
        isSwapAllowed,
        codeHashOld
      } = contractInfos[destination];
      assert(isSwapAllowed || FEE_ADDRESSES.includes((0,tonCore/* toBase64Address */.vn)(destination, false)), `Main transfer ${i + 1}/${mainTransfers.length} destination is not a swap smart contract: ` + `${destination}, ${codeHashOld}`);
    }
    assert(sumTokenAmount <= maxAmount, 'Main transfers token amount is too big');
    assert(sumTonAmount <= maxTonAmount, 'Main transfers TON amount is too big');
    if (feeTransfer) {
      const feePayload = await parsePayloadBase64(network, feeTransfer.toAddress, feeTransfer.payload);
      assert(feeTransfer.amount + sumTonAmount < maxTonAmount, 'Total TON amount is too big');
      assert(feeTransfer.toAddress === walletAddress, 'Fee transfer address is not the token wallet address');
      assert(isTokenTransferPayload(feePayload), 'Fee transfer payload is not a token transfer');
      const {
        amount: tokenFeeAmount,
        destination: feeDestination
      } = feePayload;
      assert(sumTokenAmount + tokenFeeAmount <= maxAmount, 'Total token amount is too big');
      assert(FEE_ADDRESSES.includes((0,tonCore/* toBase64Address */.vn)(feeDestination, false)), 'Unexpected fee transfer destination');
    }
  }
}
;// ./src/api/common/backendSocket.ts






const backendSocket_ACTUALIZATION_DELAY = 10;
/**
 * Connects to the MTW backend to passively listen to updates.
 */
class BackendSocket {
  #network;

  /** Defined only when the socket it needed (i.e. somebody wants to watch something) */
  #socket;
  #walletWatchers = [];

  /**
   * A shared incremental counter for various unique ids. The fact that it's incremental is used to tell what actions
   * happened earlier or later than others.
   */
  #currentUniqueId = 0;
  constructor(network) {
    this.#network = network;
  }
  watchWallets(wallets) {
    let {
      onNewActivity,
      onConnect,
      onDisconnect
    } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    const id = this.#currentUniqueId++;
    const watcher = {
      id,
      wallets,
      isConnected: false,
      onNewActivity,
      onConnect,
      onDisconnect,
      destroy: this.#destroyWalletWatcher.bind(this, id)
    };
    this.#walletWatchers.push(watcher);
    this.#actualizeSocket();
    return watcher;
  }

  /** Removes the given watcher and unsubscribes from its wallets. Brings the sockets to the proper state. */
  #destroyWalletWatcher(watcherId) {
    const index = this.#walletWatchers.findIndex(watcher => watcher.id === watcherId);
    if (index >= 0) {
      this.#walletWatchers.splice(index, 1);
      this.#actualizeSocket();
    }
  }

  /**
   * Creates or destroys the given socket (if needed) and subscribes to the watched wallets.
   *
   * The method is throttled in order to:
   *  - Avoid sending too many requests when the watched addresses change many times in a short time range.
   *  - Avoid reconnecting the socket when watched addresses arrive shortly after stopping watching all addresses.
   */
  #actualizeSocket = (0,schedulers/* throttle */.nF)(async () => {
    const {
      isWebSocketEnabled
    } = await getBackendConfigCache();
    if (isWebSocketEnabled && this.#doesHaveWatchedAddresses()) {
      this.#socket ??= this.#createSocket();
      if (this.#socket.isConnected) {
        this.#sendWatchedWalletsToSocket();
      } // Otherwise, the addresses will be sent when the socket gets connected
    } else {
      var _this$socket;
      (_this$socket = this.#socket) === null || _this$socket === void 0 || _this$socket.close();
      this.#socket = undefined;
    }
  }, backendSocket_ACTUALIZATION_DELAY, false);
  #createSocket() {
    const url = backendSocket_getSocketUrl(this.#network);
    const socket = new ReconnectingWebSocket(url);
    socket.onMessage(this.#handleSocketMessage);
    socket.onConnect(this.#handleSocketConnect);
    socket.onDisconnect(this.#handleSocketDisconnect);
    return socket;
  }
  #handleSocketMessage = message => {
    switch (message.type) {
      case 'subscribed':
        this.#handleSubscribed(message);
        break;
      case 'newActivity':
        this.#handleNewActivity(message);
        break;
    }
  };
  #handleSocketConnect = () => {
    this.#sendWatchedWalletsToSocket();
  };
  #handleSocketDisconnect = () => {
    for (const watcher of this.#walletWatchers) {
      if (watcher.isConnected) {
        watcher.isConnected = false;
        if (watcher.onDisconnect) (0,safeExec/* default */.A)(watcher.onDisconnect);
      }
    }
  };
  #handleSubscribed(message) {
    for (const watcher of this.#walletWatchers) {
      // If message id < watcher id, then the watcher was created after the subscribe request was sent, therefore
      // the socket may be not subscribed to all the watcher addresses yet.
      if (message.id < watcher.id) {
        continue;
      }
      if (!watcher.isConnected) {
        watcher.isConnected = true;
        if (watcher.onConnect) (0,safeExec/* default */.A)(watcher.onConnect);
      }
    }
  }
  #handleNewActivity(message) {
    const messageAddresses = new Set(message.addresses);
    for (const {
      wallets,
      isConnected,
      onNewActivity
    } of this.#walletWatchers) {
      // Even though the socket may already listen to some wallet addresses, we promise the class users to trigger the
      // onNewActivity callback only in the connected state.
      if (!isConnected || !onNewActivity) {
        continue;
      }
      for (const wallet of wallets) {
        const doesWalletMatch = wallet.chain === message.chain && messageAddresses.has(wallet.address) && wallet.events.includes('activity');
        if (doesWalletMatch) {
          (0,safeExec/* default */.A)(() => onNewActivity(wallet));
        }
      }
    }
  }
  #sendWatchedWalletsToSocket() {
    // It's necessary to collect the watched addresses synchronously with locking the request id.
    // It makes sure that all the watchers with ids < the response id will be subscribed.
    const addresses = this.#getWatchedAddresses(['activity']);
    const requestId = this.#currentUniqueId++;
    this.#socket.send({
      type: 'subscribe',
      id: requestId,
      addresses: addresses.map(address => ({
        ...address,
        events: ['activity']
      }))
    });
  }
  #doesHaveWatchedAddresses() {
    return this.#walletWatchers.some(watcher => watcher.wallets.length);
  }

  /** Collects the addresses (grouped by chain) from the current watchers */
  #getWatchedAddresses(events) {
    const addresses = [];
    for (const watcher of this.#walletWatchers) {
      for (const wallet of watcher.wallets) {
        if (!wallet.events.some(event => events.includes(event))) {
          continue;
        }
        addresses.push({
          chain: wallet.chain,
          address: wallet.address
        });
      }
    }
    return addresses;
  }
}
function backendSocket_getSocketUrl(network) {
  const url = new URL(config/* BRILLIANT_API_BASE_URL */.HUv);
  url.protocol = url.protocol === 'http' ? 'ws' : 'wss';
  url.pathname += `${network === 'testnet' ? 'testnet/' : ''}ws`;
  addBackendHeadersToSocketUrl(url);
  return url;
}
const backendSockets = {};

/** Returns a singleton (one constant instance per a network) */
function getBackendSocket(network) {
  backendSockets[network] ??= new BackendSocket(network);
  return backendSockets[network];
}
;// ./src/api/common/polling/walletPolling.ts






const UPDATE_CALLBACK_DELAY = 10;
/**
 * Helps polling wallet balance and activity. Uses the backend websocket as the primary signal source and falls back
 * to simple time intervals if the websocket is unavailable. It doesn't provide the updated data, it provides signals
 * when the data should be fetched using the plain HTTP API.
 */
class WalletPolling {
  #options;
  #walletWatcher;
  #fallbackPollingScheduler;
  #isDestroyed = false;

  /** Undefined when no update is pending. Otherwise, holds the `isConfident` value (see `onUpdate` for more details) */
  #pendingUpdate;
  constructor(options) {
    var _this$walletWatcher;
    this.#options = options;
    const doesSupportSocket = chain_getChainConfig(options.chain).doesBackendSocketSupport;
    if (doesSupportSocket) {
      this.#walletWatcher = getBackendSocket(options.network).watchWallets([{
        chain: options.chain,
        events: ['activity'],
        address: options.address
      }], {
        onNewActivity: this.#handleSocketNewActivity,
        onConnect: this.#handleSocketConnect,
        onDisconnect: this.#handleSocketDisconnect
      });
    }
    this.#fallbackPollingScheduler = new FallbackPollingScheduler(((_this$walletWatcher = this.#walletWatcher) === null || _this$walletWatcher === void 0 ? void 0 : _this$walletWatcher.isConnected) ?? false, {
      pollOnStart: options.updateOnStart,
      minPollDelay: options.minUpdateDelay,
      pollingStartDelay: doesSupportSocket ? options.fallbackUpdateStartDelay : undefined,
      // If the backend socket doesn't support this chain, the polling should start sooner
      pollingPeriod: options.fallbackUpdatePeriod,
      forcedPollingPeriod: options.forceUpdatePeriod,
      poll: this.#triggerBackupNotifications
    });
  }
  destroy() {
    var _this$walletWatcher2;
    this.#isDestroyed = true;
    (_this$walletWatcher2 = this.#walletWatcher) === null || _this$walletWatcher2 === void 0 || _this$walletWatcher2.destroy();
    this.#fallbackPollingScheduler.destroy();
  }
  #handleSocketNewActivity = () => {
    this.#pendingUpdate = true;
    this.#runUpdateCallback();
    this.#fallbackPollingScheduler.onSocketMessage();
  };
  #handleSocketConnect = () => {
    this.#triggerBackupNotifications();
    this.#fallbackPollingScheduler.onSocketConnect();
  };
  #handleSocketDisconnect = () => {
    this.#fallbackPollingScheduler.onSocketDisconnect();
  };
  #triggerBackupNotifications = () => {
    this.#pendingUpdate ??= false;
    this.#runUpdateCallback();
  };
  #runUpdateCallback = (0,schedulers/* throttle */.nF)(async () => {
    if (this.#pendingUpdate === undefined) {
      return;
    }

    // To let sneak in the updates arriving in short-time batches. Otherwise, they will cause another onUpdate call.
    await (0,schedulers/* pause */.v7)(UPDATE_CALLBACK_DELAY);
    if (this.#isDestroyed) return;
    const isConfident = this.#pendingUpdate;
    this.#pendingUpdate = undefined;
    await this.#options.onUpdate(isConfident);
  }, () => {
    const [ms, forceMs] = periodToMs(this.#options.minUpdateDelay);
    return focusAwareDelay(ms - UPDATE_CALLBACK_DELAY, forceMs - UPDATE_CALLBACK_DELAY);
  });
}
;// ./src/api/common/polling/setupInactiveChainPolling.ts



const concurrencyLimiters = {};

/**
 * Starts polling of the given inactive account in the given chain. Returns a function that stops the polling.
 */
function setupInactiveChainPolling(chain, network, address, updateBalance) {
  const concurrencyLimiter = getConcurrencyLimiter(chain, network);
  const walletPolling = new WalletPolling({
    ...inactiveWalletTiming,
    chain,
    network,
    address,
    onUpdate: concurrencyLimiter.wrap(async () => {
      await updateBalance();
    })
  });
  return () => {
    walletPolling.destroy();
  };
}
function getConcurrencyLimiter(chain, network) {
  const key = `${chain} ${network}`;
  concurrencyLimiters[key] ||= (0,schedulers/* createTaskQueue */.JL)();
  return concurrencyLimiters[key];
}
;// ./src/api/common/swap.ts









async function swapGetHistory(address, params) {
  const {
    swapVersion
  } = await getBackendConfigCache();
  const items = await callBackendPost(`/swap/history/${address}`, {
    ...params,
    swapVersion: swapVersion ?? config/* SWAP_API_VERSION */.AuB
  });
  return items.map(convertSwapItemToTrusted);
}
async function swapGetHistoryItem(address, id) {
  const {
    swapVersion
  } = await getBackendConfigCache();
  const item = await callBackendGet(`/swap/history/${address}/${id}`, {
    swapVersion: swapVersion ?? config/* SWAP_API_VERSION */.AuB
  });
  return convertSwapItemToTrusted(item);
}
function swapItemToActivity(swap) {
  return {
    ...swap,
    id: buildBackendSwapId(swap.id),
    kind: 'swap',
    from: getSwapItemSlug(swap, swap.from),
    to: getSwapItemSlug(swap, swap.to),
    shouldLoadDetails: !swap.cex
  };
}
function getSwapItemSlug(item, asset) {
  if (asset === config/* TONCOIN */.Tu9.symbol) {
    return config/* TONCOIN */.Tu9.slug;
  }
  if (item.cex) {
    var _getTokenByAddress;
    return ((_getTokenByAddress = getTokenByAddress(asset)) === null || _getTokenByAddress === void 0 ? void 0 : _getTokenByAddress.slug) ?? asset;
  }
  return buildTokenSlug('ton', asset);
}
async function patchSwapItem(options) {
  const {
    address,
    swapId,
    authToken,
    msgHash,
    error
  } = options;
  const {
    swapVersion
  } = await getBackendConfigCache();
  await callBackendPost(`/swap/history/${address}/${swapId}/update`, {
    swapVersion: swapVersion ?? config/* SWAP_API_VERSION */.AuB,
    msgHash,
    error
  }, {
    method: 'PATCH',
    authToken
  });
}
async function swapReplaceCexActivities(accountId, /** Must be sorted */
activities, slug, isToNow) {
  if (!activities.length || parseAccountId(accountId).network === 'testnet' || !canHaveCexSwap(slug, activities)) {
    return activities;
  }
  try {
    var _getTokenBySlug;
    const {
      byChain: {
        ton: {
          address
        } = {}
      }
    } = await fetchStoredAccount(accountId);
    if (!address) {
      return activities;
    }
    const firstTimestamp = activities[0].timestamp;
    const lastTimestamp = activities[activities.length - 1].timestamp;
    const [fromTime, toTime] = firstTimestamp < lastTimestamp ? [firstTimestamp, isToNow ? Date.now() : lastTimestamp] : [lastTimestamp, isToNow ? Date.now() : firstTimestamp];
    const hashes = activities.map(_ref => {
      let {
        id
      } = _ref;
      return parseTxId(id).hash;
    });
    const swaps = await swapGetHistory(address, {
      fromTimestamp: fromTime,
      toTimestamp: toTime,
      asset: slug ? ((_getTokenBySlug = getTokenBySlug(slug)) === null || _getTokenBySlug === void 0 ? void 0 : _getTokenBySlug.tokenAddress) ?? config/* TONCOIN */.Tu9.symbol : undefined,
      hashes,
      isCex: true
    });
    if (!swaps.length) {
      return activities;
    }
    const swapActivities = [];
    const allSwapHashes = new Set();
    for (const swap of swaps) {
      swap.hashes.forEach(hash => allSwapHashes.add(hash));
      const isSwapHere = swap.timestamp > fromTime && swap.timestamp < toTime;
      if (isSwapHere) {
        swapActivities.push(swapItemToActivity(swap));
      }
    }
    const otherActivities = activities.map(activity => {
      if (activity.kind === 'transaction' && allSwapHashes.has(parseTxId(activity.id).hash)) {
        return {
          ...activity,
          shouldHide: true
        };
      } else {
        return activity;
      }
    });

    // Even though the swap activities returned by the API are sorted by timestamp, the client-side sorting may differ.
    // It's important to ensuring our sorting, because otherwise `mergeSortedActivities` may leave duplicates.
    return mergeSortedActivities(sortActivities(swapActivities), otherActivities);
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('swapReplaceCexActivities', err);
    return activities;
  }
}
function canHaveCexSwap(slug, activities) {
  if (slug) {
    return config/* SWAP_CROSSCHAIN_SLUGS */.dGN.has(slug);
  }
  return activities.some(activity => {
    return getActivityTokenSlugs(activity).some(slug => {
      return config/* SWAP_CROSSCHAIN_SLUGS */.dGN.has(slug);
    });
  });
}
function convertSwapItemToTrusted(swap) {
  return {
    ...swap,
    status: swap.status === 'pending' ? 'pendingTrusted' : swap.status
  };
}
;// ./src/api/common/txCallbacks.ts

const txCallbacks = createCallbackManager();
function whenTxComplete(normalizedAddress, amount) {
  return new Promise(resolve => {
    txCallbacks.addCallback(function callback(transaction) {
      if (transaction.normalizedAddress === normalizedAddress && transaction.amount === -amount) {
        txCallbacks.removeCallback(callback);
        resolve({
          result: true,
          transaction
        });
      }
    });
  });
}
;// ./src/util/orGate.ts
/**
 * A virtual multi-input OR gate (https://en.wikipedia.org/wiki/OR_gate).
 * Triggers the callback when the gate output changes.
 */
class OrGate {
  #enabledItems = new Set();
  #onSwitch;
  constructor(onSwitch) {
    this.#onSwitch = onSwitch;
  }
  get isOn() {
    return this.#enabledItems.size > 0;
  }
  on(item) {
    this.toggle(item, true);
  }
  off(item) {
    this.toggle(item, false);
  }
  toggle(item, isItemOn) {
    const prevIsOn = this.isOn;
    this.#enabledItems[isItemOn ? 'add' : 'delete'](item);
    const nextIsOn = this.isOn;
    if (prevIsOn !== nextIsOn) {
      this.#onSwitch(nextIsOn);
    }
  }
}
;// ./src/api/chains/ton/richActivityStream.ts










/**
 * Like `ActivityStream` but applies `enrichActivities` to the confirmed activities.
 *
 * @see enrichActivities
 */
class RichActivityStream {
  #accountId;

  /** Sorted by timestamp descending */
  #confirmedActivitiesToReport = [];
  #pendingActivities = richActivityStream_managePendingActivities();
  #isLoading = new OrGate(isLoading => this.#loadingListeners.runCallbacks(isLoading));
  #updateListeners = createCallbackManager();
  #triggerUpdateListeners = deduplicateActivityUpdates(this.#updateListeners.runCallbacks);
  #loadingListeners = createCallbackManager();
  #isDestroyed = false;
  #onDestroy;
  constructor(accountId, rawActivityStream) {
    this.#accountId = accountId;
    this.#onDestroy = [rawActivityStream.onUpdate(this.#handleRawActivitiesUpdate), rawActivityStream.onLoadingChange(isLoading => this.#isLoading.toggle('raw', isLoading))];
  }

  /**
   * Registers a callback firing then new activities arrive.
   * The callback is throttled under the hood.
   */
  onUpdate(callback) {
    return this.#updateListeners.addCallback(callback);
  }

  /**
   * Registers a callback firing when the data from HTTP endpoints starts of finishes loading.
   * The "loading" state includes the time when `rawActivityStream` is polling.
   */
  onLoadingChange(callback) {
    return this.#loadingListeners.addCallback(callback);
  }
  destroy() {
    this.#isDestroyed = true;
    for (const unsubscribe of this.#onDestroy) {
      unsubscribe();
    }
  }
  #handleRawActivitiesUpdate = (confirmedActivities, pendingActivities) => {
    this.#pendingActivities.updateAfterRawUpdate(confirmedActivities, pendingActivities);
    this.#reportActivities([]);
    if (confirmedActivities.length) {
      this.#confirmedActivitiesToReport.unshift(...confirmedActivities);
      this.#enrichAndReportActivities();
    }
  };

  // Using `throttle` to batch the new activities and ensure that they are reported in the order they were received
  #enrichAndReportActivities = (0,schedulers/* throttle */.nF)(async () => {
    if (this.#isDestroyed) return;
    try {
      this.#isLoading.on('enrich');
      const rawConfirmedActivities = this.#confirmedActivitiesToReport;
      this.#confirmedActivitiesToReport = [];
      const richConfirmedActivities = await enrichActivities(this.#accountId, rawConfirmedActivities);
      this.#pendingActivities.updateAfterEnrichment(rawConfirmedActivities);
      this.#reportActivities(richConfirmedActivities);
    } finally {
      this.#isLoading.off('enrich');
    }
  }, 0);
  #reportActivities(confirmedActivities) {
    if (!this.#isDestroyed) {
      this.#triggerUpdateListeners(confirmedActivities, this.#pendingActivities.all);
    }
  }
}

/**
 * Manages pending activities to ensure that switching activities from pending to confirmed is seamless.
 * If not used, the pending activities received from `ActivityStream` will disappear temporarily while the confirmed
 * activities are being enriched.
 */
function richActivityStream_managePendingActivities() {
  /** The latest pending activities provided by `rawActivityStream` */
  let pendingActivities = [];
  /** Pending activities that no longer exist but their corresponding confirmed activities are being enriched */
  let zombiePendingActivities = [];
  const updateAfterRawUpdate = (confirmedActivities, newPendingActivities) => {
    const confirmedHashes = new Set((0,iteratees/* extractKey */.JY)(confirmedActivities, 'externalMsgHashNorm'));
    zombiePendingActivities = mergeSortedActivities(zombiePendingActivities, pendingActivities.filter(activity => confirmedHashes.has(activity.externalMsgHashNorm)));
    pendingActivities = newPendingActivities;
  };
  const updateAfterEnrichment = rawConfirmedActivities => {
    const confirmedHashes = new Set((0,iteratees/* extractKey */.JY)(rawConfirmedActivities, 'externalMsgHashNorm'));
    zombiePendingActivities = zombiePendingActivities.filter(activity => !confirmedHashes.has(activity.externalMsgHashNorm));
  };
  return {
    /** Sorted by timestamp descending */
    get all() {
      return mergeSortedActivities(pendingActivities, zombiePendingActivities);
    },
    updateAfterRawUpdate,
    updateAfterEnrichment
  };
}

/**
 * Makes sure the update callback is not called uselessly. For example, with no confirmed activities and with the
 * same pending activities.
 */
function deduplicateActivityUpdates(onUpdate) {
  let lastPendingActivities = [];
  return (newConfirmedActivities, pendingActivities) => {
    if (newConfirmedActivities.length || !(0,iteratees/* areSortedArraysEqual */.k)(lastPendingActivities, pendingActivities)) {
      onUpdate(newConfirmedActivities, pendingActivities);
    }
    lastPendingActivities = pendingActivities;
  };
}
async function enrichActivities(accountId, activities) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  activities = await reloadIncompleteActivities(network, address, activities);
  activities = await swapReplaceCexActivities(accountId, activities, undefined, true);
  return activities;
}
;// ./src/api/chains/ton/vesting.ts



async function fetchVestings(accountId) {
  const {
    network
  } = parseAccountId(accountId);
  const isTestnet = network === 'testnet';
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  return callBackendGet(`/vesting/${address}`, {
    isTestnet
  });
}
;// ./src/api/chains/ton/polling.ts



























const POLL_DELAY_AFTER_SOCKET = 3 * SEC;
const POLL_MIN_INTERVAL = {
  focused: 2 * SEC,
  notFocused: 10 * SEC
};
const BALANCE_INTERVAL = {
  focused: MINUTE,
  notFocused: 5 * MINUTE
};
const INITIALIZATION_INTERVAL = {
  focused: MINUTE,
  notFocused: 5 * MINUTE
};
const STAKING_INTERVAL = {
  focused: 5 * SEC,
  notFocused: 20 * SEC
};
const VERSIONS_INTERVAL = {
  focused: 5 * MINUTE,
  notFocused: 15 * MINUTE
};
const VESTING_INTERVAL = {
  focused: 10 * SEC,
  notFocused: MINUTE
};
const TON_DNS_INTERVAL = {
  focused: 15 * SEC,
  notFocused: 2 * MINUTE
};
const NFT_FULL_INTERVAL = {
  focused: MINUTE,
  notFocused: 5 * MINUTE
};
const DOUBLE_CHECK_NFT_PAUSE = 5 * SEC;
function setupActivePolling(accountId, account, onUpdate, onUpdatingStatusChange, newestActivityTimestamps) {
  const balanceAndDomainPolling = setupBalanceAndDomainPolling(accountId, onUpdate, onUpdatingStatusChange.bind(undefined, 'balance'));
  const stopActivityPolling = setupActivityPolling(accountId, account.byChain.ton.address, newestActivityTimestamps, handleWalletUpdate, onUpdate, onUpdatingStatusChange.bind(undefined, 'activities'));
  const nftPolling = setupNftPolling(accountId, onUpdate);
  const walletInitializationPolling = setupWalletInitializationPolling(accountId);
  const stopWalletVersionPolling = setupWalletVersionsPolling(accountId, onUpdate);
  const stopTonDnsPolling = setupTonDnsPolling(accountId, onUpdate);
  const stopStakingPolling = setupStakingPolling(accountId, balanceAndDomainPolling.getBalances, onUpdate);
  const stopVestingPolling = setupVestingPolling(accountId, onUpdate);
  async function handleWalletUpdate() {
    // The TON balance updates in `getWalletInfo` several seconds after an activity arrive from the Toncenter socket.
    // This delay is up to 2 seconds, and 1 second is added as a safety margin.
    // We suppose that the other HTTP API data can be delayed, so we delay all socket-triggerred pollings.
    await (0,schedulers/* pause */.v7)(POLL_DELAY_AFTER_SOCKET);

    // These data change only when the wallet gets new activities. The other pollings don't depend on the wallet content.
    balanceAndDomainPolling.poll();
    nftPolling.poll();
    walletInitializationPolling.poll();
  }
  return () => {
    balanceAndDomainPolling.stop();
    stopActivityPolling();
    nftPolling.stop();
    stopWalletVersionPolling();
    stopTonDnsPolling();
    stopStakingPolling();
    stopVestingPolling();
  };
}
function setupBalanceAndDomainPolling(accountId, onUpdate, onUpdatingStatusChange) {
  const balanceUpdater = makeBalanceAndDomainUpdater(accountId, onUpdate, onUpdatingStatusChange);
  const polling = pollingLoop({
    period: BALANCE_INTERVAL,
    minDelay: POLL_MIN_INTERVAL,
    poll: balanceUpdater.update
  });
  return {
    ...polling,
    getBalances: balanceUpdater.get
  };
}
function makeBalanceAndDomainUpdater(accountId, onUpdate, onUpdatingStatusChange) {
  const {
    network
  } = parseAccountId(accountId);
  let balances;
  let balancesDeferred = new Deferred/* default */.A();
  let lastDomain; // Undefined means unknown, false means no domain

  async function get() {
    await balancesDeferred.promise;
    return balances;
  }
  async function update() {
    onUpdatingStatusChange === null || onUpdatingStatusChange === void 0 || onUpdatingStatusChange(true);
    try {
      const wallet = await fetchStoredWallet(accountId, 'ton');
      const [tonBalance, tokenBalances] = await Promise.all([getTonBalanceAndCheckDomain(wallet.address), loadTokenBalances(network, wallet.address, onUpdate)]);
      const newBalances = {
        [config/* TONCOIN */.Tu9.slug]: tonBalance,
        ...tokenBalances
      };
      const hasChanged = !areDeepEqual(balances, newBalances);
      balances = newBalances;
      if (hasChanged) {
        onUpdate({
          type: 'updateBalances',
          accountId,
          chain: 'ton',
          balances
        });
      }
      balancesDeferred.resolve();
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('setupBalanceAndDomainPolling update', err);

      // It's important to reject the deferred instead of keeping it unsettled, because otherwise the main polling cycle
      // will stuck and never retry. Creating a new deferred gives the `getBalances` callers another chance on retry.
      balancesDeferred.reject(err);
      balancesDeferred = new Deferred/* default */.A();
    } finally {
      onUpdatingStatusChange === null || onUpdatingStatusChange === void 0 || onUpdatingStatusChange(false);
    }
  }
  async function getTonBalanceAndCheckDomain(address) {
    // Getting the balance and the domain go together, only because they arrive from the same endpoint
    const {
      balance,
      domain = false
    } = await getWalletInfo(network, address);
    if (domain !== lastDomain) {
      onUpdate({
        type: 'updateAccount',
        accountId,
        chain: 'ton',
        domain
      });
      lastDomain = domain;
    }
    return balance;
  }
  return {
    get,
    update
  };
}

// A good address for testing: UQD5mxRgCuRNLxKxeOjG6r14iSroLF5FtomPnet-sgP5xI-e
function setupActivityPolling(accountId, address, newestConfirmedActivityTimestamps, onRawActivity, onUpdate, onUpdatingStatusChange) {
  let isStopped = false;
  let rawActivityStream;
  let richActivityStream;
  const newestTimestamps = (0,iteratees/* compact */.oE)(Object.values(newestConfirmedActivityTimestamps));
  let newestConfirmedActivityTimestamp = newestTimestamps.length ? Math.max(...newestTimestamps) : undefined;
  async function loadInitialActivities() {
    try {
      onUpdatingStatusChange(true);
      return await loadInitialConfirmedActivities(accountId, onUpdate);
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('loadInitialConfirmedActivities', err);
      return undefined;
    } finally {
      onUpdatingStatusChange(false);
    }
  }
  function onRawActivities(confirmedActivities) {
    if (confirmedActivities.length) {
      onRawActivity();
    }
  }
  function onRichActivities(confirmedActivities, pendingActivities) {
    confirmedActivities.slice().reverse().forEach(activity => {
      txCallbacks.runCallbacks(activity);
    });
    onUpdate({
      type: 'newActivities',
      chain: 'ton',
      activities: confirmedActivities,
      pendingActivities,
      accountId
    });
  }
  void (async () => {
    const doesNeedInitial = newestConfirmedActivityTimestamp === undefined;
    if (doesNeedInitial) {
      newestConfirmedActivityTimestamp = await loadInitialActivities();
      onRawActivity(); // Just in case, because new activities may have arrived while loading the initial ones
    }
    if (isStopped) return;
    rawActivityStream = new ActivityStream(parseAccountId(accountId).network, address, newestConfirmedActivityTimestamp,
    // If the initial activities are loaded, the polling on start is excessive
    !doesNeedInitial);
    richActivityStream = new RichActivityStream(accountId, rawActivityStream);
    rawActivityStream.onUpdate(onRawActivities);
    richActivityStream.onUpdate(onRichActivities);
    richActivityStream.onLoadingChange(onUpdatingStatusChange);
  })();
  return () => {
    var _richActivityStream, _rawActivityStream;
    isStopped = true;
    (_richActivityStream = richActivityStream) === null || _richActivityStream === void 0 || _richActivityStream.destroy();
    (_rawActivityStream = rawActivityStream) === null || _rawActivityStream === void 0 || _rawActivityStream.destroy();
  };
}
function setupNftPolling(accountId, onUpdate) {
  let nftFromSec = Math.round(Date.now() / 1000);

  // The NFT updates may not become available immediately after the socket message.
  // So we check again in a few seconds.
  const updatePartial = withDoubleCheck([DOUBLE_CHECK_NFT_PAUSE], async () => {
    try {
      const nftResult = await getNftUpdates(accountId, nftFromSec).catch(logAndRescue);
      if (nftResult) {
        let nftUpdates;
        [nftFromSec, nftUpdates] = nftResult;
        nftUpdates.filter(update => !(update.type === 'nftReceived' && update.nft.isHidden)).forEach(onUpdate);
      }
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('setupNftPolling updatePartial', err);
    }
  });
  const fullPolling = pollingLoop({
    period: NFT_FULL_INTERVAL,
    async poll() {
      updatePartial.cancel();
      try {
        const nfts = await getAccountNfts(accountId).catch(logAndRescue);
        if (nfts) {
          nftFromSec = Math.round(Date.now() / 1000);
          onUpdate({
            type: 'updateNfts',
            accountId,
            nfts
          });
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('setupNftPolling updateFull', err);
      }
    }
  });
  return {
    poll: (0,schedulers/* throttle */.nF)(updatePartial.run, () => focusAwareDelay(...periodToMs(POLL_MIN_INTERVAL))),
    stop() {
      updatePartial.cancel();
      fullPolling.stop();
    }
  };
}
function setupStakingPolling(accountId, getBalances, onUpdate) {
  if (config/* IS_STAKING_DISABLED */.OuE || parseAccountId(accountId).network !== 'mainnet') {
    return () => {};
  }
  let lastStates;
  return pollingLoop({
    period: STAKING_INTERVAL,
    async poll() {
      try {
        const [common, balances, backendState] = await Promise.all([getStakingCommonCache(), getBalances(), getBackendStakingState(accountId)]);
        const states = await getStakingStates(accountId, common, backendState, balances);
        const {
          shouldUseNominators,
          totalProfit
        } = backendState;
        if (!areDeepEqual(states, lastStates)) {
          lastStates = states;
          onUpdate({
            type: 'updateStaking',
            accountId,
            states,
            totalProfit,
            shouldUseNominators
          });
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('setupStakingPolling', err);
      }
    }
  }).stop;
}
async function loadInitialConfirmedActivities(accountId, onUpdate) {
  var _mainActivities$;
  let mainActivities = await fetchActivitySlice({
    accountId,
    limit: FIRST_TRANSACTIONS_LIMIT
  });
  mainActivities = await swapReplaceCexActivities(accountId, mainActivities, undefined, true);
  const bySlug = {
    // Loading the TON history is a side effect of loading the main history.
    // Because there is no way to load TON activities without loading activities of other tokens.
    [config/* TONCOIN */.Tu9.slug]: mainActivities.filter(activity => getActivityTokenSlugs(activity).includes(config/* TONCOIN */.Tu9.slug))
  };
  const newestActivityTimestamp = (_mainActivities$ = mainActivities[0]) === null || _mainActivities$ === void 0 ? void 0 : _mainActivities$.timestamp;
  onUpdate({
    type: 'initialActivities',
    chain: 'ton',
    accountId,
    mainActivities,
    bySlug
  });
  return newestActivityTimestamp;
}
function logAndRescue(err) {
  (0,logs/* logDebugError */.SJ)('Polling error', err);
  return undefined;
}
function setupWalletVersionsPolling(accountId, onUpdate) {
  const {
    network
  } = parseAccountId(accountId);
  let lastResult;
  return pollingLoop({
    period: VERSIONS_INTERVAL,
    async poll() {
      try {
        const {
          type: accountType,
          byChain: {
            ton: tonWallet
          }
        } = await fetchStoredAccount(accountId);
        if (accountType === 'bip39' || !tonWallet) {
          return 'stop';
        }
        const {
          publicKey,
          version,
          isInitialized
        } = tonWallet;
        if (!publicKey) {
          if (!isInitialized) {
            // Keep polling because `publicKey` may arrive later (for example, when the view wallet becomes initialized)
            return undefined;
          }

          // This happens when this address is not a wallet address (for example, a contract address)
          onUpdate({
            type: 'updateWalletVersions',
            accountId,
            currentVersion: version,
            versions: []
          });
          return 'stop';
        }
        const publicKeyBytes = (0,utils/* hexToBytes */.aT)(publicKey);
        let versions = (accountType === 'ledger' ? config/* LEDGER_WALLET_VERSIONS */.iQn : config/* POPULAR_WALLET_VERSIONS */.eZ2).filter(value => value !== version);

        // For W5 wallets, always include W5 to show subwallet ID variants for testnet
        if (version === 'W5') {
          versions = [...versions, 'W5'];
        }
        const versionInfos = (await getWalletVersionInfos(network, publicKeyBytes, versions)).map(_ref => {
          let {
            wallet,
            ...rest
          } = _ref;
          return rest;
        });

        // Filter out the current wallet (including the current W5 subwallet ID variant)
        const filteredVersions = versionInfos.filter(v => v.address !== tonWallet.address);
        if (!areDeepEqual(versionInfos, lastResult)) {
          lastResult = versionInfos;
          onUpdate({
            type: 'updateWalletVersions',
            accountId,
            currentVersion: version,
            versions: filteredVersions
          });
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('setupWalletVersionsPolling', err);
      }
      return undefined;
    }
  }).stop;
}
function setupTonDnsPolling(accountId, onUpdate) {
  let lastResult;
  return pollingLoop({
    period: TON_DNS_INTERVAL,
    async poll() {
      try {
        const result = await fetchDomains(accountId);
        if (!areDeepEqual(result, lastResult)) {
          lastResult = result;
          onUpdate({
            type: 'updateAccountDomainData',
            accountId,
            ...(0,iteratees/* pick */.Up)(result, ['expirationByAddress', 'linkedAddressByAddress', 'nfts'])
          });
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('setupTonDnsPolling', err);
      }
    }
  }).stop;
}
function setupVestingPolling(accountId, onUpdate) {
  if (config/* IS_CORE_WALLET */.TI6) {
    return () => {};
  }
  let lastVestingInfo;
  return pollingLoop({
    period: VESTING_INTERVAL,
    async prepare() {
      const {
        isVestingEnabled
      } = await getBackendConfigCache();
      return isVestingEnabled;
    },
    async poll(isEnabled) {
      if (!isEnabled) {
        return 'stop';
      }
      try {
        const vestingInfo = await fetchVestings(accountId);
        if (!areDeepEqual(lastVestingInfo, vestingInfo)) {
          lastVestingInfo = vestingInfo;
          onUpdate({
            type: 'updateVesting',
            accountId,
            vestingInfo
          });
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('setupVestingPolling', err);
      }
      return undefined;
    }
  }).stop;
}
function setupInactivePolling(accountId, account, onUpdate) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = account.byChain.ton;
  const balanceUpdater = makeBalanceAndDomainUpdater(accountId, onUpdate);
  return setupInactiveChainPolling('ton', network, address, balanceUpdater.update);
}
function setupWalletInitializationPolling(accountId) {
  return pollingLoop({
    period: INITIALIZATION_INTERVAL,
    minDelay: POLL_MIN_INTERVAL,
    async poll() {
      try {
        const wallet = await fetchStoredWallet(accountId, 'ton');
        if (wallet.isInitialized) {
          return 'stop';
        }
        const {
          network
        } = parseAccountId(accountId);
        const doesNeedPublicKey = !wallet.publicKey;
        let walletUpdate;
        if (doesNeedPublicKey) {
          // This branch isn't used always, because it makes more network requests than the other
          const updatedWallet = await getWalletFromAddress(network, wallet.address);
          if (!('error' in updatedWallet) && updatedWallet.wallet.isInitialized) {
            // It's important to load and save `version` along with `publicKey` because the app couldn't get the proper
            // wallet version without knowing the `publicKey`.
            walletUpdate = (0,iteratees/* pick */.Up)(updatedWallet.wallet, ['isInitialized', 'publicKey', 'version']);
          }
        } else {
          const isInitialized = await isAddressInitialized(network, wallet.address);
          if (isInitialized) {
            walletUpdate = {
              isInitialized
            };
          }
        }
        if (walletUpdate) {
          await updateStoredWallet(accountId, 'ton', walletUpdate);
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('checkWalletInitialization', err);
      }
    }
  });
}
;// ./src/api/chains/ton/index.ts
















// EXTERNAL MODULE: ./node_modules/tronweb/dist/TronWeb.js
var TronWeb = __webpack_require__(17718);
;// ./src/api/chains/tron/util/tronweb.ts


let clientByNetwork;
const parametersByNetwork = {};
const chainConfig = chain_getChainConfig('tron');
function getTronClient() {
  let network = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mainnet';
  if (!clientByNetwork) {
    clientByNetwork = {
      mainnet: new TronWeb.TronWeb({
        fullHost: chainConfig.mainnet.apiUrl
      }),
      testnet: new TronWeb.TronWeb({
        fullHost: chainConfig.testnet.apiUrl
      })
    };
  }
  return clientByNetwork[network];
}
async function getChainParameters(network) {
  if (!(network in parametersByNetwork)) {
    const chainParameters = await getTronClient(network).trx.getChainParameters();
    const energyUnitFee = chainParameters.find(param => param.key === 'getEnergyFee').value;
    const bandwidthUnitFee = chainParameters.find(param => param.key === 'getTransactionFee').value;
    parametersByNetwork[network] = {
      energyUnitFee,
      bandwidthUnitFee
    };
  }
  return parametersByNetwork[network];
}
;// ./src/api/chains/tron/util/tokens.ts



function getTokenSlugs(network) {
  const {
    usdtAddress
  } = chain_getChainConfig('tron')[network];
  const usdtSlug = buildTokenSlug('tron', usdtAddress);
  return [config/* TRX */.X7T.slug, usdtSlug];
}
;// ./src/api/chains/tron/activities.ts











async function activities_fetchActivitySlice(_ref) {
  let {
    accountId,
    tokenSlug,
    toTimestamp,
    fromTimestamp,
    limit
  } = _ref;
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'tron');
  if (tokenSlug) {
    return getTokenActivitySlice(network, address, tokenSlug, toTimestamp, fromTimestamp, limit);
  } else {
    return getAllActivitySlice(network, address, toTimestamp, fromTimestamp, limit);
  }
}
async function getTokenActivitySlice(network, address, slug, toTimestamp, fromTimestamp, limit) {
  let activities;
  if (slug === config/* TRX */.X7T.slug) {
    const rawTransactions = await getTrxTransactions(network, address, {
      min_timestamp: fromTimestamp ? fromTimestamp + 1000 : undefined,
      max_timestamp: toTimestamp ? toTimestamp - 1000 : undefined,
      limit,
      search_internal: false // The parsing is not supported and not needed currently
    });
    activities = rawTransactions.map(rawTx => parseRawTrxTransaction(address, rawTx));
  } else {
    const {
      tokenAddress
    } = getTokenBySlug(slug) || {};
    const rawTransactions = await getTrc20Transactions(network, address, {
      contract_address: tokenAddress,
      min_timestamp: fromTimestamp ? fromTimestamp + 1000 : undefined,
      max_timestamp: toTimestamp ? toTimestamp - 1000 : undefined,
      limit
    });
    activities = rawTransactions.map(rawTx => parseRawTrc20Transaction(address, rawTx));
  }

  // Even though the activities returned by the API are sorted by timestamp, our sorting may differ.
  // It's important to ensuring our sorting, because otherwise `mergeSortedActivities` may leave duplicates.
  return sortActivities(activities);
}
async function getAllActivitySlice(network, address, toTimestamp, fromTimestamp, limit) {
  const tokenSlugs = getTokenSlugs(network);
  const txsBySlug = {};
  await Promise.all(tokenSlugs.map(async slug => {
    const txs = await getTokenActivitySlice(network, address, slug, toTimestamp, fromTimestamp, limit);
    if (txs.length) {
      txsBySlug[slug] = txs;
    }
  }));
  if (isEmptyObject(txsBySlug)) {
    return [];
  }

  // TODO Нужно, чтобы чанки всегда именли "все транзакции", так как это всё работает только при корректной работе лимита.
  // А только потом должна быть очистка от ненужных транзакций.
  const mainChunk = Object.values(txsBySlug).reduce((prevChunk, chunk) => {
    if (prevChunk.length > chunk.length) return prevChunk;
    if (prevChunk.length < chunk.length) return chunk;
    if (prevChunk[prevChunk.length - 1].timestamp < chunk[chunk.length - 1].timestamp) return chunk;
    return prevChunk;
  }, []);
  const oldestTimestamp = mainChunk[mainChunk.length - 1].timestamp;
  return mergeActivities(txsBySlug).filter(_ref2 => {
    let {
      timestamp
    } = _ref2;
    return timestamp >= oldestTimestamp;
  });
}
async function getTrxTransactions(network, address) {
  let queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const baseUrl = chain_getChainConfig('tron')[network].apiUrl;
  const url = new URL(`${baseUrl}/v1/accounts/${address}/transactions`);
  const result = await (0,util_fetch/* fetchJson */.x6)(url.toString(), queryParams);
  return result.data;
}
function parseRawTrxTransaction(address, rawTx) {
  const {
    raw_data: rawData,
    txID: txId,
    energy_fee: energyFee,
    net_fee: netFee,
    block_timestamp: timestamp
  } = rawTx;
  const parameters = rawData.contract[0].parameter.value;
  const amount = BigInt(parameters.amount ?? 0);
  const fromAddress = TronWeb.TronWeb.address.fromHex(parameters.owner_address);
  const toAddress = TronWeb.TronWeb.address.fromHex(parameters.to_address || parameters.receiver_address || parameters.contract_address);
  const slug = config/* TRX */.X7T.slug;
  const isIncoming = toAddress === address;
  const normalizedAddress = isIncoming ? fromAddress : toAddress;
  const fee = BigInt(energyFee + netFee);
  const type = rawData.contract[0].type === 'TriggerSmartContract' ? 'callContract' : undefined;
  const shouldHide = rawData.contract[0].type === 'TransferAssetContract';
  return {
    id: txId,
    kind: 'transaction',
    timestamp,
    fromAddress,
    toAddress,
    amount: isIncoming ? amount : -amount,
    slug,
    isIncoming,
    normalizedAddress,
    fee,
    type,
    shouldHide,
    status: 'completed'
  };
}
async function getTrc20Transactions(network, address) {
  let queryParams = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const baseUrl = chain_getChainConfig('tron')[network].apiUrl;
  const url = new URL(`${baseUrl}/v1/accounts/${address}/transactions/trc20`);
  const result = await (0,util_fetch/* fetchJson */.x6)(url.toString(), queryParams);
  return result.data;
}
function parseRawTrc20Transaction(address, rawTx) {
  const {
    transaction_id: txId,
    block_timestamp: timestamp,
    from: fromAddress,
    to: toAddress,
    value,
    token_info: tokenInfo
  } = rawTx;
  const amount = BigInt(value);
  const slug = buildTokenSlug(config/* TRX */.X7T.chain, tokenInfo.address);
  const isIncoming = toAddress === address;
  const normalizedAddress = isIncoming ? fromAddress : toAddress;
  const fee = 0n;
  return {
    id: txId,
    kind: 'transaction',
    timestamp,
    fromAddress,
    toAddress,
    amount: isIncoming ? amount : -amount,
    slug,
    isIncoming,
    normalizedAddress,
    fee,
    status: 'completed'
  };
}
function mergeActivities(txsBySlug) {
  const seenTxIds = new Set();
  const isSeenTxId = id => {
    if (seenTxIds.has(id)) return true;
    seenTxIds.add(id);
    return false;
  };
  const {
    [config/* TRX */.X7T.slug]: trxTxs = [],
    ...tokenTxs
  } = txsBySlug;
  const trxTxById = (0,iteratees/* buildCollectionByKey */.dU)(trxTxs, 'id');
  return mergeSortedActivities(...Object.values(tokenTxs).map(tokenTxList => tokenTxList
  // Different tokens have the same transaction id if they share the same backend swap.
  // The duplicates need to removed.
  .filter(tokenTx => !isSeenTxId(tokenTx.id)).map(tokenTx => {
    const trxTx = trxTxById[tokenTx.id];
    if (tokenTx.kind === 'transaction' && (trxTx === null || trxTx === void 0 ? void 0 : trxTx.kind) === 'transaction') {
      tokenTx.fee = trxTx.fee;
    }
    return tokenTx;
  })),
  // Because of `isSeenTxId`, it's necessary to filter the TRX transactions after the token transactions
  trxTxs.filter(trxTx => !isSeenTxId(trxTx.id) && (trxTx.kind !== 'transaction' || trxTx.toAddress)));
}

// Just for the chain interface compatibility
function activities_decryptComment(options) {
  throw new Error('Not supported in Tron');
}

// Just for the chain interface compatibility
function activities_fetchActivityDetails(accountId, activity) {
  return undefined;
}
;// ./src/api/chains/tron/wallet.ts




/*
* We display unconfirmed balance and transactions to user.
* /wallet/* - endpoints with unconfirmed data
* /walletsolidity/* - endpoints with confirmed data
*/

async function wallet_getWalletBalance(network, address) {
  const tronWeb = getTronClient(network);
  return BigInt(await tronWeb.trx.getUnconfirmedBalance(address));
}
async function getTrc20Balance(network, tokenAddress, address) {
  const result = await callContract(getTronClient(network), tokenAddress, 'balanceOf(address)', [{
    type: 'address',
    value: address
  }], address);
  if (!result.length) {
    return 0n;
  }
  return BigInt(`0x${result[0]}`);
}
async function callContract(tronWeb, address, functions) {
  let parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  let issuerAddress = arguments.length > 4 ? arguments[4] : undefined;
  try {
    const result = await tronWeb.transactionBuilder.triggerSmartContract(address, functions, {
      _isConstant: true
    }, parameters, issuerAddress);
    return result && result.result ? result.constant_result : [];
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('callContract', err);
    return [];
  }
}
async function isTronAccountMultisig(network, address) {
  try {
    const tronWeb = getTronClient(network);
    const account = await tronWeb.trx.getAccount(address);
    if (!account || isEmptyObject(account)) {
      return false;
    }
    const managerAddresses = new Set();
    if (account.owner_permission.threshold > 1) {
      return true;
    }
    for (const permKey of account.owner_permission.keys) {
      managerAddresses.add(tronWeb.address.fromHex(permKey.address));
    }
    for (const perm of account.active_permission) {
      if (perm.threshold > 1) {
        return true;
      }
      for (const permKey of perm.keys) {
        managerAddresses.add(tronWeb.address.fromHex(permKey.address));
      }
    }
    if (managerAddresses.size > 1) {
      return true;
    }
    for (const managerAddress of managerAddresses) {
      if (managerAddress !== address) {
        return true;
      }
    }
    return false;
  } catch (e) {
    (0,logs/* logDebugError */.SJ)('isTronAccountMultisig', e);
    return false;
  }
}
;// ./src/api/chains/tron/polling.ts

















function polling_setupActivePolling(accountId, account, onUpdate, onUpdatingStatusChange, newestActivityTimestamps) {
  const {
    address
  } = account.byChain.tron;
  const balancePolling = setupBalancePolling(accountId, address, onUpdate, onUpdatingStatusChange.bind(undefined, 'balance'));
  const activityPolling = polling_setupActivityPolling(accountId, newestActivityTimestamps, onUpdate, onUpdatingStatusChange.bind(undefined, 'activities'));
  const multisigPolling = setupMultisigPolling(accountId, address, onUpdate);
  let isFirstUpdate = true;
  async function handleUpdate(isConfident) {
    if (isConfident || isFirstUpdate) {
      await Promise.all([balancePolling.update(), activityPolling.update(), multisigPolling.update()]);
    } else {
      // Legacy (timer) polling mode.
      // The balance is checked before the activities, because the backend throttling for balance is much looser.
      const hasBalanceChanged = await balancePolling.update();
      if (hasBalanceChanged) {
        await Promise.all([activityPolling.update(), multisigPolling.update()]);
      }
    }
    isFirstUpdate = false;
  }
  const walletPolling = new WalletPolling({
    ...activeWalletTiming,
    chain: 'tron',
    network: parseAccountId(accountId).network,
    address,
    onUpdate: handleUpdate
  });
  return () => {
    walletPolling.destroy();
  };
}
function setupBalancePolling(accountId, address, onUpdate, onUpdatingStatusChange) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    usdtAddress
  } = chain_getChainConfig('tron')[network];
  const usdtSlug = buildTokenSlug('tron', usdtAddress);
  let balances;

  /** Returns `true` if the balances have changed since the last update */
  async function update() {
    onUpdatingStatusChange === null || onUpdatingStatusChange === void 0 || onUpdatingStatusChange(true);
    try {
      const [trxBalance, usdtBalance] = await Promise.all([wallet_getWalletBalance(network, address), getTrc20Balance(network, usdtAddress, address)]);
      const newBalances = {
        [config/* TRX */.X7T.slug]: trxBalance,
        [usdtSlug]: usdtBalance
      };
      const hasChanged = !areDeepEqual(balances, newBalances);
      balances = newBalances;
      if (hasChanged) {
        onUpdate({
          type: 'updateBalances',
          accountId,
          chain: 'tron',
          balances
        });
      }
      return hasChanged;
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('setupBalancePolling update', err);
    } finally {
      onUpdatingStatusChange === null || onUpdatingStatusChange === void 0 || onUpdatingStatusChange(false);
    }
    return false;
  }
  return {
    update
  };
}
function setupMultisigPolling(accountId, address, onUpdate) {
  const {
    network
  } = parseAccountId(accountId);
  let isMultisig;
  async function update() {
    try {
      const multisigStatus = await isTronAccountMultisig(network, address);
      const hasChanged = isMultisig !== multisigStatus;
      isMultisig = multisigStatus;
      if (hasChanged) {
        onUpdate({
          type: 'updateAccount',
          accountId,
          chain: 'tron',
          isMultisig: multisigStatus
        });
      }
      return hasChanged;
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('setupMultisigPolling update', err);
      return false;
    }
  }
  return {
    update
  };
}
function polling_setupActivityPolling(accountId, newestActivityTimestamps, onUpdate, onUpdatingStatusChange) {
  const {
    network
  } = parseAccountId(accountId);
  const slugs = getTokenSlugs(network);
  async function update() {
    onUpdatingStatusChange(true);
    try {
      if (isEmptyObject(newestActivityTimestamps)) {
        newestActivityTimestamps = await loadInitialActivities(accountId, slugs, onUpdate);
      } else {
        newestActivityTimestamps = await loadNewActivities(accountId, newestActivityTimestamps, slugs, onUpdate);
      }
    } catch (err) {
      (0,logs/* logDebugError */.SJ)('setupActivityPolling update', err);
    } finally {
      onUpdatingStatusChange(false);
    }
  }
  return {
    update
  };
}
function polling_setupInactivePolling(accountId, account, onUpdate) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = account.byChain.tron;
  const balancePolling = setupBalancePolling(accountId, address, onUpdate);
  return setupInactiveChainPolling('tron', network, address, balancePolling.update);
}
async function loadInitialActivities(accountId, tokenSlugs, onUpdate) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'tron');
  const result = {};
  const bySlug = {};
  await Promise.all(tokenSlugs.map(async slug => {
    var _activities$;
    let activities = await getTokenActivitySlice(network, address, slug, undefined, undefined, FIRST_TRANSACTIONS_LIMIT);
    activities = await swapReplaceCexActivities(accountId, activities, slug, true);
    result[slug] = (_activities$ = activities[0]) === null || _activities$ === void 0 ? void 0 : _activities$.timestamp;
    bySlug[slug] = activities;
  }));
  const mainActivities = mergeActivities(bySlug);
  mainActivities.slice().reverse().forEach(transaction => {
    txCallbacks.runCallbacks(transaction);
  });
  onUpdate({
    type: 'initialActivities',
    chain: 'tron',
    accountId,
    mainActivities,
    bySlug
  });
  return result;
}
async function loadNewActivities(accountId, newestActivityTimestamps, tokenSlugs, onUpdate) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    address
  } = await fetchStoredWallet(accountId, 'tron');
  const result = {};
  const bySlug = {};
  await Promise.all(tokenSlugs.map(async slug => {
    var _activities$2;
    let newestActivityTimestamp = newestActivityTimestamps[slug];
    const activities = await getTokenActivitySlice(network, address, slug, undefined, newestActivityTimestamp, FIRST_TRANSACTIONS_LIMIT);
    newestActivityTimestamp = ((_activities$2 = activities[0]) === null || _activities$2 === void 0 ? void 0 : _activities$2.timestamp) ?? newestActivityTimestamp;
    result[slug] = newestActivityTimestamp;
    bySlug[slug] = activities;
  }));
  let activities = mergeActivities(bySlug);
  activities = await swapReplaceCexActivities(accountId, activities, undefined, true);
  activities.slice().reverse().forEach(activity => {
    txCallbacks.runCallbacks(activity);
  });
  if (activities.length > 0) {
    onUpdate({
      type: 'newActivities',
      chain: 'tron',
      activities,
      pendingActivities: [],
      accountId
    });
  }
  return result;
}
;// ./src/util/stringFormat.ts
function isAscii(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) > 127) {
      return false;
    }
  }
  return true;
}
function insertSubstring(str, start, newSubStr) {
  if (start < 0) {
    start = str.length - start;
  }
  return str.slice(0, start) + newSubStr + str.slice(start);
}
function hexToString(hex) {
  let result = '';
  for (let i = 0; i < hex.length; i += 2) {
    result += String.fromCharCode(parseInt(hex.slice(i, i + 2), 16));
  }
  return result;
}
;// ./src/api/chains/tron/constants.ts
const TRON_GAS = {
  transferTrc20Estimated: 28_214_970n
};
const ONE_TRX = 1_000_000n;
;// ./src/api/chains/tron/transfer.ts
/* provided dependency */ var transfer_Buffer = __webpack_require__(48287)["Buffer"];
// Importing from `tronweb/lib/commonjs/types` breaks eslint (eslint doesn't like any of import placement options)
// eslint-disable-next-line simple-import-sort/imports











const SIGNATURE_SIZE = 65;
async function transfer_checkTransactionDraft(options) {
  const {
    accountId,
    amount,
    toAddress,
    tokenAddress
  } = options;
  const {
    network
  } = parseAccountId(accountId);
  const tronWeb = getTronClient(network);
  const result = {};
  try {
    if (!tronWeb.isAddress(toAddress)) {
      return {
        error: types/* ApiTransactionDraftError */.KL.InvalidToAddress
      };
    }
    result.resolvedAddress = toAddress;
    const {
      address
    } = await fetchStoredWallet(accountId, 'tron');
    const [trxBalance, bandwidth, {
      energyUnitFee,
      bandwidthUnitFee
    }] = await Promise.all([wallet_getWalletBalance(network, address), tronWeb.trx.getBandwidth(address), getChainParameters(network)]);
    let fee;
    if (tokenAddress) {
      fee = await estimateTrc20TransferFee(tronWeb, {
        network,
        toAddress,
        tokenAddress,
        amount,
        energyUnitFee,
        fromAddress: address
      });
    } else {
      // This call throws "Error: Invalid amount provided" when the amount is 0.
      // It doesn't throw when the amount is > than the balance.
      const [transaction, account] = await Promise.all([tronWeb.transactionBuilder.sendTrx(toAddress, Number(amount ?? 1), address), tronWeb.trx.getAccount(toAddress)]);
      const size = 9 + 60 + transfer_Buffer.from(transaction.raw_data_hex, 'hex').byteLength + SIGNATURE_SIZE;
      fee = bandwidth > size ? 0n : BigInt(size) * BigInt(bandwidthUnitFee);

      // If the account is not activated, we pay an extra 1 TRX for activation
      if (account.balance === undefined) {
        fee += ONE_TRX;
      }
    }
    result.fee = fee;
    result.realFee = fee;
    const trxAmount = tokenAddress ? fee : (amount ?? 0n) + fee;
    const isEnoughTrx = trxBalance >= trxAmount;
    if (!isEnoughTrx) {
      result.error = types/* ApiTransactionDraftError */.KL.InsufficientBalance;
    }

    // todo: Check that the amount ≤ the token balance (in case of a token transfer)

    return result;
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tron:checkTransactionDraft', err);
    return {
      ...(0,errors/* handleServerError */.QS)(err),
      ...result
    };
  }
}
async function transfer_submitTransfer(options) {
  const {
    accountId,
    password = '',
    toAddress,
    amount,
    fee = 0n,
    tokenAddress
  } = options;
  const {
    network
  } = parseAccountId(accountId);
  try {
    const tronWeb = getTronClient(network);
    const account = await fetchStoredChainAccount(accountId, 'tron');
    if (account.type === 'ledger') throw new Error('Not supported by Ledger accounts');
    if (account.type === 'view') throw new Error('Not supported by View accounts');
    const {
      address
    } = account.byChain.tron;
    const trxBalance = await wallet_getWalletBalance(network, address);
    const trxAmount = tokenAddress ? fee : fee + amount;
    const isEnoughTrx = trxBalance >= trxAmount;
    if (!isEnoughTrx) {
      return {
        error: types/* ApiTransactionError */.jf.InsufficientBalance
      };
    }

    // todo: Check that the amount ≤ the token balance (in case of a token transfer)

    const mnemonic = await getMnemonic(accountId, password, account);
    const privateKey = tronWeb.fromMnemonic(mnemonic.join(' ')).privateKey.slice(2);
    if (tokenAddress) {
      const {
        transaction
      } = await buildTrc20Transfer(tronWeb, {
        toAddress,
        tokenAddress,
        amount,
        feeLimit: fee,
        fromAddress: address
      });
      const signedTx = await tronWeb.trx.sign(transaction, privateKey);
      const result = await tronWeb.trx.sendRawTransaction(signedTx);
      return {
        amount,
        toAddress,
        txId: result.transaction.txID
      };
    } else {
      const result = await tronWeb.trx.sendTransaction(toAddress, Number(amount), {
        privateKey
      });
      if ('code' in result && !('result' in result && result.result)) {
        const error = 'message' in result && result.message ? hexToString(result.message) : result.code.toString();
        (0,logs/* logDebugError */.SJ)('submitTransfer', {
          error,
          result
        });
        return {
          error
        };
      }
      return {
        amount,
        toAddress,
        txId: result.transaction.txID
      };
    }
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('submitTransfer', err);
    return {
      error: types/* ApiTransactionError */.jf.UnsuccesfulTransfer
    };
  }
}
async function estimateTrc20TransferFee(tronWeb, options) {
  const {
    network,
    tokenAddress,
    toAddress,
    energyUnitFee,
    fromAddress
  } = options;
  let {
    amount
  } = options;
  const tokenBalance = await getTrc20Balance(network, tokenAddress, fromAddress);
  if (!tokenBalance) {
    return TRON_GAS.transferTrc20Estimated;
  }
  if (amount === undefined || amount > tokenBalance) {
    amount = 1n;
  }

  // This call throws "Error: REVERT opcode executed" when the given amount is more than the token balance.
  // It doesn't throw when the amount is 0.
  const {
    energy_required: energyRequired
  } = await tronWeb.transactionBuilder.estimateEnergy(tokenAddress, 'transfer(address,uint256)', {}, [{
    type: 'address',
    value: toAddress
  }, {
    type: 'uint256',
    value: Number(amount)
  }], fromAddress);
  return BigInt(energyUnitFee * energyRequired);
}
async function buildTrc20Transfer(tronWeb, options) {
  const {
    amount,
    tokenAddress,
    toAddress,
    feeLimit,
    fromAddress
  } = options;
  const {
    transaction
  } = await tronWeb.transactionBuilder.triggerSmartContract(tokenAddress, 'transfer(address,uint256)', {
    feeLimit: Number(feeLimit)
  }, [{
    type: 'address',
    value: toAddress
  }, {
    type: 'uint256',
    value: Number(amount)
  }], fromAddress);
  return {
    transaction
  };
}
;// ./src/api/chains/tron/index.ts







function tron_getWalletFromBip39Mnemonic(network, mnemonic) {
  const {
    address,
    publicKey
  } = getTronClient(network).fromMnemonic(mnemonic.join(' '));
  return {
    address,
    publicKey,
    index: 0
  };
}
function tron_getWalletFromAddress(network, addressOrDomain) {
  const {
    addressRegex
  } = chain_getChainConfig('tron');
  if (!addressRegex.test(addressOrDomain)) {
    return {
      error: types/* ApiAuthError */.Nu.DomainNotResolved
    };
  }
  return {
    wallet: {
      address: addressOrDomain,
      index: 0
    }
  };
}
function tron_checkApiAvailability(network) {
  const isConnected = getTronClient(network).isConnected();
  return Boolean(isConnected);
}
;// ./src/api/chains/index.ts


/* harmony default export */ const chains = ({
  ton: ton_namespaceObject,
  tron: tron_namespaceObject
});
;// ./src/api/hooks.ts

const hooks = {};
function addHooks(partial) {
  for (const [name, hook] of Object.entries(partial)) {
    hooks[name] = (hooks[name] ?? []).concat([hook]);
  }
}
async function callHook(name) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  for (const hook of hooks[name] ?? []) {
    try {
      // @ts-ignore
      await hook(...args);
    } catch (err) {
      (0,logs/* logDebugError */.SJ)(`callHooks:${name}`, err);
    }
  }
}
;// ./src/api/tonConnect/types/index.ts
// This and the other enums can be imported from @tonconnect/protocol. We copy the enums instead of importing because
// importing that module increases the compiled code size significantly.

let CONNECT_EVENT_ERROR_CODES = /*#__PURE__*/function (CONNECT_EVENT_ERROR_CODES) {
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_NOT_FOUND_ERROR"] = 2] = "MANIFEST_NOT_FOUND_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["MANIFEST_CONTENT_ERROR"] = 3] = "MANIFEST_CONTENT_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
  CONNECT_EVENT_ERROR_CODES[CONNECT_EVENT_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
  return CONNECT_EVENT_ERROR_CODES;
}({});
let SEND_TRANSACTION_ERROR_CODES = /*#__PURE__*/function (SEND_TRANSACTION_ERROR_CODES) {
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_ERROR"] = 0] = "UNKNOWN_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["BAD_REQUEST_ERROR"] = 1] = "BAD_REQUEST_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["UNKNOWN_APP_ERROR"] = 100] = "UNKNOWN_APP_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["USER_REJECTS_ERROR"] = 300] = "USER_REJECTS_ERROR";
  SEND_TRANSACTION_ERROR_CODES[SEND_TRANSACTION_ERROR_CODES["METHOD_NOT_SUPPORTED"] = 400] = "METHOD_NOT_SUPPORTED";
  return SEND_TRANSACTION_ERROR_CODES;
}({});
let CHAIN = /*#__PURE__*/function (CHAIN) {
  CHAIN["MAINNET"] = "-239";
  CHAIN["TESTNET"] = "-3";
  return CHAIN;
}({});
;// ./package.json
const package_namespaceObject = {"rE":"4.1.6"};
;// ./src/util/tonConnectEnvironment.ts




/*
 This function is called in TonConnect `connect` method (where we know the wallet version)
 and in JS Bridge (where no account is selected, so we show maximum number of messages).
*/
function tonConnectGetDeviceInfo(account) {
  const features = ['SendTransaction',
  // TODO DEPRECATED
  {
    name: 'SendTransaction',
    maxMessages: account ? getTonConnectMaxMessages(account) : constants/* W5_MAX_MESSAGES */.Bm
  }];
  if (!account || account.type !== 'ledger') {
    features.push({
      name: 'SignData',
      types: ['text', 'binary', 'cell']
    });
  }
  return {
    platform: getPlatform(),
    appName: config/* APP_NAME */.C39,
    appVersion: package_namespaceObject.rE,
    maxProtocolVersion: config/* TONCONNECT_PROTOCOL_VERSION */.gY_,
    features
  };
}

/** How many messages can be sent in a single TON Connect transaction sending */
function getTonConnectMaxMessages(account) {
  const {
    type
  } = account;
  if (type === 'ledger') {
    return constants/* DEFAULT_MAX_MESSAGES */.EV; // TODO Remove after DEXs support the 1 message limit
  } else {
    return getMaxMessagesInTransaction(account);
  }
}
function getPlatform() {
  var _navigator;
  const {
    userAgent
  } = navigator;
  const platform = navigator.platform || ((_navigator = navigator) === null || _navigator === void 0 || (_navigator = _navigator.userAgentData) === null || _navigator === void 0 ? void 0 : _navigator.platform) || '';
  const macosPlatforms = ['macOS', 'Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iphonePlatforms = ['iPhone'];
  const ipadPlatforms = ['iPad', 'iPod'];
  let devicePlatform;
  if (config/* IS_EXTENSION */.hL1 || config/* IS_TELEGRAM_APP */.tKX) {
    devicePlatform = 'browser';
  } else if (/Android/.test(userAgent)) {
    devicePlatform = 'android';
  } else if (iphonePlatforms.indexOf(platform) !== -1) {
    devicePlatform = 'iphone';
  } else if (ipadPlatforms.indexOf(platform) !== -1) {
    devicePlatform = 'ipad';
  } else if (macosPlatforms.indexOf(platform) !== -1) {
    devicePlatform = 'mac';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    devicePlatform = 'windows';
  } else if (/Linux/.test(platform)) {
    devicePlatform = 'linux';
  } else {
    devicePlatform = 'browser';
  }
  return devicePlatform;
}
// EXTERNAL MODULE: ./src/util/generateUniqueId.ts
var generateUniqueId = __webpack_require__(14235);
;// ./src/api/common/dappPromises.ts


const deferreds = new Map();
class dappPromises_Deferred {
  resolve;
  reject;
  promise = new Promise((resolve, reject) => {
    this.resolve = resolve;
    this.reject = reject;
  });
}
function createDappPromise() {
  let promiseId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (0,generateUniqueId/* default */.A)();
  const deferred = new dappPromises_Deferred();
  deferreds.set(promiseId, deferred);
  const {
    promise
  } = deferred;
  return {
    promiseId,
    promise
  };
}
function resolveDappPromise(promiseId, value) {
  const deferred = deferreds.get(promiseId);
  if (!deferred) {
    return;
  }
  deferred.resolve(value);
  deferreds.delete(promiseId);
}
function rejectDappPromise(promiseId) {
  let reason = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Unknown rejection reason';
  const deferred = deferreds.get(promiseId);
  if (!deferred) {
    return;
  }
  deferred.reject(new errors/* ApiUserRejectsError */.KB(reason));
  deferreds.delete(promiseId);
}
function rejectAllDappPromises(message) {
  Array.from(deferreds.keys()).forEach(id => {
    rejectDappPromise(id, message);
  });
}
;// ./src/api/methods/dapps.ts







let onUpdate;
function initDapps(_onUpdate) {
  onUpdate = _onUpdate;
}
async function updateDapp(accountId, url, uniqueId, update) {
  const dapp = await getDapp(accountId, url, uniqueId);
  if (!dapp) return;
  await addDapp(accountId, {
    ...dapp,
    ...update
  }, uniqueId);
}
async function getDapp(accountId, url, uniqueId) {
  var _await$getAccountValu;
  const byUrl = (_await$getAccountValu = await getAccountValue(accountId, 'dapps')) === null || _await$getAccountValu === void 0 ? void 0 : _await$getAccountValu[url];
  if (!byUrl) return undefined;
  return byUrl[uniqueId];
}
async function addDapp(accountId, dapp, uniqueId) {
  const dapps = await getDappsByUrl(accountId);
  if (!dapps[dapp.url]) {
    dapps[dapp.url] = {};
  }
  dapps[dapp.url][uniqueId] = dapp;
  await setAccountValue(accountId, 'dapps', dapps);
}
async function deleteDapp(accountId, url, uniqueId, dontNotifyDapp) {
  const dapps = await getDappsByUrl(accountId);
  if (!(url in dapps)) {
    return false;
  }
  delete dapps[url][uniqueId];
  if (isEmptyObject(dapps[url])) {
    delete dapps[url];
  }
  await setAccountValue(accountId, 'dapps', dapps);
  if (onUpdate && isUpdaterAlive(onUpdate)) {
    onUpdate({
      type: 'dappDisconnect',
      accountId,
      url
    });
  }
  if (!dontNotifyDapp) {
    await callHook('onDappDisconnected', accountId, url);
  }
  await callHook('onDappsChanged');
  return true;
}
async function deleteAllDapps(accountId) {
  const urls = Object.keys(await getDappsByUrl(accountId));
  await setAccountValue(accountId, 'dapps', {});
  urls.forEach(url => {
    onUpdate({
      type: 'dappDisconnect',
      accountId,
      url
    });
    void callHook('onDappDisconnected', accountId, url);
  });
  await callHook('onDappsChanged');
}
async function getDapps(accountId) {
  const byUrl = await getDappsByUrl(accountId);
  return Object.values(byUrl).flatMap(byId => Object.values(byId));
}
async function getDappsByUrl(accountId) {
  return (await getAccountValue(accountId, 'dapps')) || {};
}
async function findLastConnectedAccount(network, url) {
  const dapps = (await getDappsState()) || {};
  let connectedAt = 0;
  let lastConnectedAccountId;
  Object.entries(dapps).forEach(_ref => {
    let [accountId, byUrl] = _ref;
    const connections = byUrl[url];
    if (!connections) return;
    if (parseAccountId(accountId).network !== network) return;
    Object.values(connections).forEach(conn => {
      if (conn.connectedAt > connectedAt) {
        connectedAt = conn.connectedAt;
        lastConnectedAccountId = accountId;
      }
    });
  });
  return lastConnectedAccountId;
}
function getDappsState() {
  return storages_storage.getItem('dapps');
}
async function removeAccountDapps(accountId) {
  await removeAccountValue(accountId, 'dapps');
  void callHook('onDappsChanged');
}
async function removeAllDapps() {
  await storages_storage.removeItem('dapps');
  await callHook('onDappsChanged');
}
function removeNetworkDapps(network) {
  return removeNetworkAccountsValue(network, 'dapps');
}
function getSseLastEventId() {
  return storages_storage.getItem('sseLastEventId');
}
function setSseLastEventId(lastEventId) {
  return storages_storage.setItem('sseLastEventId', lastEventId);
}
function loadExploreSites(_ref2) {
  let {
    isLandscape
  } = _ref2;
  return callBackendGet('/v2/dapp/catalog', {
    isLandscape
  });
}
;// ./src/api/methods/tokens.ts



const {
  ton
} = chains;

function tokens_fetchToken(accountId, address) {
  const {
    network
  } = parseAccountId(accountId);
  return ton.fetchToken(network, address);
}
function resolveTokenWalletAddress(network, address, tokenAddress) {
  const chain = chains.ton;
  return chain.resolveTokenWalletAddress(network, address, tokenAddress);
}
function resolveTokenAddress(network, tokenWalletAddress) {
  const chain = chains.ton;
  return chain.resolveTokenAddress(network, tokenWalletAddress);
}
function getAmountForTokenTransfer(tokenAddress, willClaimMintless) {
  const chain = chains.ton;
  const token = getTokenByAddress(tokenAddress);
  return chain.getToncoinAmountForTransfer(token, willClaimMintless);
}
;// ./src/api/methods/transfer.ts









let transfer_onUpdate;
const {
  ton: transfer_ton
} = chains;
function initTransfer(_onUpdate) {
  transfer_onUpdate = _onUpdate;
}
function methods_transfer_checkTransactionDraft(chain, options) {
  return chains[chain].checkTransactionDraft(options);
}
async function methods_transfer_submitTransfer(chain, options) {
  let shouldCreateLocalActivity = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const {
    accountId,
    password,
    toAddress,
    amount,
    tokenAddress,
    comment,
    fee,
    realFee,
    shouldEncrypt,
    isBase64Data,
    withDiesel,
    dieselAmount,
    isGaslessWithStars,
    noFeeCheck
  } = options;
  const stateInit = typeof options.stateInit === 'string' ? core_dist.Cell.fromBase64(options.stateInit) : options.stateInit;
  const fromAddress = await fetchStoredAddress(accountId, chain);
  let result;
  if (withDiesel && chain === 'ton') {
    result = await transfer_ton.submitTransferWithDiesel({
      accountId,
      password,
      toAddress,
      amount,
      tokenAddress: tokenAddress,
      data: comment,
      shouldEncrypt,
      dieselAmount: dieselAmount,
      isGaslessWithStars
    });
  } else {
    result = await chains[chain].submitTransfer({
      accountId,
      password,
      toAddress,
      amount,
      tokenAddress,
      data: comment,
      shouldEncrypt,
      isBase64Data,
      stateInit,
      fee,
      noFeeCheck
    });
  }
  if ('error' in result) {
    return result;
  }
  if (!shouldCreateLocalActivity) {
    return result;
  }
  const slug = tokenAddress ? buildTokenSlug(chain, tokenAddress) : chain_getChainConfig(chain).nativeToken.slug;
  let localActivity;
  if ('msgHash' in result) {
    const {
      encryptedComment,
      msgHashNormalized
    } = result;
    [localActivity] = createLocalTransactions(accountId, chain, [{
      id: msgHashNormalized,
      amount,
      fromAddress,
      toAddress,
      comment: shouldEncrypt ? undefined : comment,
      encryptedComment,
      fee: realFee ?? 0n,
      slug,
      externalMsgHashNorm: msgHashNormalized,
      extra: {
        ...('withW5Gasless' in result && {
          withW5Gasless: result.withW5Gasless
        })
      }
    }]);
    if ('paymentLink' in result && result.paymentLink) {
      transfer_onUpdate({
        type: 'openUrl',
        url: result.paymentLink,
        isExternal: true
      });
    }
  } else {
    const {
      txId
    } = result;
    [localActivity] = createLocalTransactions(accountId, chain, [{
      id: txId,
      amount,
      fromAddress,
      toAddress,
      comment,
      fee: realFee ?? 0n,
      slug
    }]);
  }
  return {
    ...result,
    activityId: localActivity.id
  };
}
function createLocalTransactions(accountId, chain, params) {
  const {
    network
  } = parseAccountId(accountId);
  const localTransactions = params.map((subParams, index) => {
    const {
      toAddress
    } = subParams;
    let normalizedAddress;
    if (subParams.normalizedAddress) {
      normalizedAddress = subParams.normalizedAddress;
    } else if (chain === 'ton') {
      normalizedAddress = transfer_ton.normalizeAddress(toAddress, network);
    } else {
      normalizedAddress = toAddress;
    }
    return buildLocalTransaction(subParams, normalizedAddress, index);
  });
  if (localTransactions.length) {
    transfer_onUpdate({
      type: 'newLocalActivities',
      activities: localTransactions,
      accountId
    });
  }
  return localTransactions;
}
function transfer_fetchEstimateDiesel(accountId, tokenAddress) {
  const chain = chains.ton;
  return chain.fetchEstimateDiesel(accountId, tokenAddress);
}

/**
 * Creates local activities from emulation results instead of basic transaction parameters.
 * This provides richer, parsed transaction details like "liquidity withdrawal" instead of "send TON".
 */
function createLocalActivitiesFromEmulation(accountId, chain, msgHashNormalized, emulationActivities) {
  const localActivities = [];
  let localActivityIndex = 0;
  emulationActivities.forEach(activity => {
    if (activity.shouldHide || activity.id === FAKE_TX_ID) {
      return;
    }
    const localActivity = convertEmulationActivityToLocal(activity, msgHashNormalized, localActivityIndex, chain, accountId);
    localActivities.push(localActivity);
    localActivityIndex++; // Increment only for visible activities
  });
  if (localActivities.length) {
    transfer_onUpdate({
      type: 'newLocalActivities',
      activities: localActivities,
      accountId
    });
  }
  return localActivities;
}

/**
 * Converts an emulation activity to a local activity with proper ID and timestamp
 */
function convertEmulationActivityToLocal(activity, msgHashNormalized, index, chain, accountId) {
  const localTxId = buildLocalTxId(msgHashNormalized, index);
  const commonFields = {
    id: localTxId,
    timestamp: Date.now(),
    externalMsgHashNorm: msgHashNormalized,
    // Emulation activities are not trusted
    status: 'pending'
  };
  if (activity.kind === 'transaction') {
    let normalizedAddress = activity.normalizedAddress;
    if (!normalizedAddress && chain === 'ton' && accountId) {
      const {
        network
      } = parseAccountId(accountId);
      normalizedAddress = chains.ton.normalizeAddress(activity.toAddress, network);
    }
    return {
      ...activity,
      ...commonFields,
      normalizedAddress: normalizedAddress || activity.normalizedAddress
    };
  } else {
    return {
      ...activity,
      ...commonFields
    };
  }
}
;// ./src/api/tonConnect/errors.ts



class TonConnectError extends errors/* ApiBaseError */.aU {
  code;
  constructor(message) {
    let code = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    let displayError = arguments.length > 2 ? arguments[2] : undefined;
    super(message);
    this.code = code;
    this.displayError = displayError;
  }
}
class ManifestContentError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Manifest content error';
    super(message, CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR);
  }
}
class UnknownError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown error.';
    let displayError = arguments.length > 1 ? arguments[1] : undefined;
    super(message, SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR, displayError);
  }
}
class BadRequestError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Bad request';
    let displayError = arguments.length > 1 ? arguments[1] : undefined;
    super(message, SEND_TRANSACTION_ERROR_CODES.BAD_REQUEST_ERROR, displayError);
  }
}
class UnknownAppError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unknown app error';
    super(message, SEND_TRANSACTION_ERROR_CODES.UNKNOWN_APP_ERROR);
  }
}
class UserRejectsError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The user rejected the action';
    super(message, SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR);
  }
}
class MethodNotSupportedError extends TonConnectError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The method is not supported';
    super(message, SEND_TRANSACTION_ERROR_CODES.METHOD_NOT_SUPPORTED);
  }
}
class InsufficientBalance extends BadRequestError {
  constructor() {
    let message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Insufficient balance';
    super(message, types/* ApiTransactionError */.jf.InsufficientBalance);
  }
}
;// ./src/api/tonConnect/utils.ts


// https://stackoverflow.com/a/417184
const URL_MAX_LENGTH = 2000;
function isValidString(value) {
  let maxLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  return typeof value === 'string' && value.length <= maxLength;
}
function isValidUrl(url) {
  const isString = isValidString(url, URL_MAX_LENGTH);
  if (!isString) return false;
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
}
function getTransferActualToAddress(toAddress, payload) {
  // This function implementation is not complete. That is, other transfer types may have another actual "to" address.
  if (isNftTransferPayload(payload)) {
    return payload.newOwner;
  }
  if (isTokenTransferPayload(payload)) {
    return payload.destination;
  }
  return toAddress;
}
function isTransferPayloadDangerous(payload) {
  return (payload === null || payload === void 0 ? void 0 : payload.type) === 'unknown';
}
;// ./src/api/tonConnect/index.ts
/* provided dependency */ var tonConnect_Buffer = __webpack_require__(48287)["Buffer"];
/* TonConnect specification https://github.com/ton-blockchain/ton-connect */






























const BLANK_GIF_DATA_URL = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
const tonConnect_ton = chains.ton;
let resolveInit;
const initPromise = new Promise(resolve => {
  resolveInit = resolve;
});
let tonConnect_onUpdate;
function initTonConnect(_onUpdate) {
  tonConnect_onUpdate = _onUpdate;
  resolveInit();
}
async function connect(request, message, id) {
  try {
    await openExtensionPopup(true);
    tonConnect_onUpdate({
      type: 'dappLoading',
      connectionType: 'connect',
      isSse: request && 'sseOptions' in request
    });
    const dappMetadata = await fetchDappMetadata(message.manifestUrl);
    const url = request.url || dappMetadata.url;
    const addressItem = message.items.find(_ref => {
      let {
        name
      } = _ref;
      return name === 'ton_addr';
    });
    const proofItem = message.items.find(_ref2 => {
      let {
        name
      } = _ref2;
      return name === 'ton_proof';
    });
    const proof = proofItem ? {
      timestamp: Math.round(Date.now() / 1000),
      domain: new URL(url).host,
      payload: proofItem.payload
    } : undefined;
    if (!addressItem) {
      throw new BadRequestError('Missing \'ton_addr\'');
    }
    if (proof && !proof.domain.includes('.')) {
      throw new BadRequestError('Invalid domain');
    }
    let accountId = await getCurrentAccountOrFail();
    const {
      promiseId,
      promise
    } = createDappPromise();
    const dapp = {
      ...dappMetadata,
      url,
      connectedAt: Date.now(),
      ...(request.isUrlEnsured && {
        isUrlEnsured: true
      }),
      ...('sseOptions' in request && {
        sse: request.sseOptions
      })
    };
    const uniqueId = getDappConnectionUniqueId(request);
    tonConnect_onUpdate({
      type: 'dappConnect',
      identifier: 'identifier' in request ? request.identifier : undefined,
      promiseId,
      accountId,
      dapp,
      permissions: {
        address: true,
        proof: !!proof
      },
      proof
    });
    const promiseResult = await promise;
    accountId = promiseResult.accountId;
    request.accountId = accountId;
    await addDapp(accountId, dapp, uniqueId);
    const account = await fetchStoredChainAccount(accountId, 'ton');
    const deviceInfo = tonConnectGetDeviceInfo(account);
    const items = [buildTonAddressReplyItem(accountId, account.byChain.ton)];
    if (proof) {
      items.push(buildTonProofReplyItem(proof, promiseResult.proofSignature));
    }
    tonConnect_onUpdate({
      type: 'updateDapps'
    });
    tonConnect_onUpdate({
      type: 'dappConnectComplete'
    });
    return {
      event: 'connect',
      id,
      payload: {
        items,
        device: deviceInfo
      }
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tonConnect:connect', err);
    (0,safeExec/* default */.A)(() => {
      tonConnect_onUpdate({
        type: 'dappCloseLoading',
        connectionType: 'connect'
      });
    });
    return formatConnectError(id, err);
  }
}
async function reconnect(request, id) {
  try {
    const {
      url,
      accountId
    } = await ensureRequestParams(request);
    const uniqueId = getDappConnectionUniqueId(request);
    const currentDapp = await getDapp(accountId, url, uniqueId);
    if (!currentDapp) {
      throw new UnknownAppError();
    }
    await updateDapp(accountId, url, uniqueId, {
      connectedAt: Date.now()
    });
    const account = await fetchStoredChainAccount(accountId, 'ton');
    const deviceInfo = tonConnectGetDeviceInfo(account);
    const items = [buildTonAddressReplyItem(accountId, account.byChain.ton)];
    return {
      event: 'connect',
      id,
      payload: {
        items,
        device: deviceInfo
      }
    };
  } catch (e) {
    (0,logs/* logDebugError */.SJ)('tonConnect:reconnect', e);
    return formatConnectError(id, e);
  }
}
async function disconnect(request, message) {
  try {
    const {
      url,
      accountId
    } = await ensureRequestParams(request);
    const uniqueId = getDappConnectionUniqueId(request);
    await deleteDapp(accountId, url, uniqueId, true);
    tonConnect_onUpdate({
      type: 'updateDapps'
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tonConnect:disconnect', err);
  }
  return {
    id: message.id,
    result: {}
  };
}
async function sendTransaction(request, message) {
  try {
    var _checkResult$emulatio;
    const {
      url,
      accountId
    } = await ensureRequestParams(request);
    const {
      network
    } = parseAccountId(accountId);
    const txPayload = JSON.parse(message.params[0]);
    const {
      messages,
      network: dappNetworkRaw
    } = txPayload;
    const account = await fetchStoredChainAccount(accountId, 'ton');
    const {
      type,
      byChain: {
        ton: {
          address,
          publicKey: publicKeyHex
        }
      }
    } = account;
    const maxMessages = getTonConnectMaxMessages(account);
    if (messages.length > maxMessages) {
      throw new BadRequestError(`Payload contains more than ${maxMessages} messages, which exceeds limit`);
    }
    const dappNetwork = dappNetworkRaw ? dappNetworkRaw === CHAIN.MAINNET ? 'mainnet' : 'testnet' : undefined;
    let validUntil = txPayload.valid_until;
    if (validUntil && validUntil > 10 ** 10) {
      // If milliseconds were passed instead of seconds
      validUntil = Math.round(validUntil / 1000);
    }
    const isLedger = type === 'ledger';
    let vestingAddress;
    if (txPayload.from && (0,tonCore/* toBase64Address */.vn)(txPayload.from) !== (0,tonCore/* toBase64Address */.vn)(address)) {
      const publicKey = (0,utils/* hexToBytes */.aT)(publicKeyHex);
      if (isLedger && (await checkIsHisVestingWallet(network, publicKey, txPayload.from))) {
        vestingAddress = txPayload.from;
      } else {
        throw new BadRequestError(undefined, types/* ApiTransactionError */.jf.WrongAddress);
      }
    }
    if (dappNetwork && network !== dappNetwork) {
      throw new BadRequestError(undefined, types/* ApiTransactionError */.jf.WrongNetwork);
    }
    await openExtensionPopup(true);
    tonConnect_onUpdate({
      type: 'dappLoading',
      connectionType: 'sendTransaction',
      accountId,
      isSse: Boolean('sseOptions' in request && request.sseOptions)
    });
    const checkResult = await checkTransactionMessages(accountId, messages, network);
    if ('error' in checkResult) {
      throw new BadRequestError(checkResult.error, checkResult.error);
    }
    const uniqueId = getDappConnectionUniqueId(request);
    const dapp = await getDapp(accountId, url, uniqueId);
    const transactionsForRequest = await prepareTransactionForRequest(network, messages, checkResult.emulation, checkResult.parsedPayloads);
    const {
      promiseId,
      promise
    } = createDappPromise();
    tonConnect_onUpdate({
      type: 'dappSendTransactions',
      promiseId,
      accountId,
      dapp,
      transactions: transactionsForRequest,
      emulation: checkResult.emulation.isFallback ? undefined : (0,iteratees/* pick */.Up)(checkResult.emulation, ['activities', 'realFee']),
      validUntil,
      vestingAddress
    });
    const signedTransactions = await promise;
    if (validUntil && validUntil < Date.now() / 1000) {
      throw new BadRequestError('The confirmation timeout has expired');
    }
    const sentTransactions = await tonConnect_ton.sendSignedTransactions(accountId, signedTransactions);
    if ('error' in sentTransactions) {
      throw new UnknownError(sentTransactions.error, sentTransactions.error);
    }
    if (sentTransactions.length === 0) {
      throw new UnknownError('Failed transfers');
    }
    if (sentTransactions.length < signedTransactions.length) {
      tonConnect_onUpdate({
        type: 'showError',
        error: types/* ApiTransactionError */.jf.PartialTransactionFailure
      });
    }
    const externalMsgHashNorm = sentTransactions[0].msgHashNormalized;
    if (!checkResult.emulation.isFallback && ((_checkResult$emulatio = checkResult.emulation.activities) === null || _checkResult$emulatio === void 0 ? void 0 : _checkResult$emulatio.length) > 0) {
      // Use rich emulation activities for optimistic UI
      createLocalActivitiesFromEmulation(accountId, 'ton', externalMsgHashNorm,
      // This is not always correct for Ledger, because in that case the messages are split into individual transactions which have different message hashes. Though, this appears not to cause problems.
      checkResult.emulation.activities);
    } else {
      // Fallback to basic local transactions when emulation is not available
      createLocalTransactions(accountId, 'ton', transactionsForRequest.map(transaction => {
        const {
          amount,
          normalizedAddress,
          payload,
          networkFee
        } = transaction;
        const comment = (payload === null || payload === void 0 ? void 0 : payload.type) === 'comment' ? payload.comment : undefined;
        return {
          id: externalMsgHashNorm,
          amount,
          fromAddress: address,
          toAddress: normalizedAddress,
          comment,
          fee: networkFee,
          slug: config/* TONCOIN */.Tu9.slug,
          externalMsgHashNorm // This is not always correct for Ledger, because in that case the messages are split into individual transactions which have different message hashes. Though, this appears not to cause problems.
        };
      }));
    }

    // Notify that dapp transfer is complete after successful blockchain submission
    tonConnect_onUpdate({
      type: 'dappTransferComplete',
      accountId
    });
    return {
      result: sentTransactions[0].boc,
      id: message.id
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tonConnect:sendTransaction', err);
    return handleMethodError(err, message.id, 'sendTransaction');
  }
}
function handleMethodError(err, messageId, connectionType) {
  (0,safeExec/* default */.A)(() => {
    tonConnect_onUpdate({
      type: 'dappCloseLoading',
      connectionType
    });
  });
  let code = SEND_TRANSACTION_ERROR_CODES.UNKNOWN_ERROR;
  let errorMessage = 'Unhandled error';
  let displayError;
  if (err instanceof errors/* ApiUserRejectsError */.KB) {
    code = SEND_TRANSACTION_ERROR_CODES.USER_REJECTS_ERROR;
    errorMessage = err.message;
  } else if (err instanceof TonConnectError) {
    code = err.code;
    errorMessage = err.message;
    displayError = err.displayError;
  } else if (err instanceof errors/* ApiServerError */.K$) {
    displayError = err.displayError;
  } else {
    displayError = types/* ApiCommonError */.QD.Unexpected;
  }
  if (tonConnect_onUpdate && isUpdaterAlive(tonConnect_onUpdate) && displayError) {
    tonConnect_onUpdate({
      type: 'showError',
      error: displayError
    });
  }
  return {
    error: {
      code,
      message: errorMessage
    },
    id: messageId
  };
}
async function checkIsHisVestingWallet(network, ownerPublicKey, address) {
  var _info$contractInfo;
  const [info, publicKey] = await Promise.all([getContractInfo(network, address), (0,tonCore/* getWalletPublicKey */.q5)(network, address)]);
  return ((_info$contractInfo = info.contractInfo) === null || _info$contractInfo === void 0 ? void 0 : _info$contractInfo.name) === 'vesting' && areDeepEqual(ownerPublicKey, publicKey);
}

/**
 * See https://docs.tonconsole.com/academy/sign-data for more details
 */
async function signData(request, message) {
  try {
    const {
      url,
      accountId
    } = await ensureRequestParams(request);
    await openExtensionPopup(true);
    tonConnect_onUpdate({
      type: 'dappLoading',
      connectionType: 'signData',
      accountId,
      isSse: Boolean('sseOptions' in request && request.sseOptions)
    });
    const {
      promiseId,
      promise
    } = createDappPromise();
    const uniqueId = getDappConnectionUniqueId(request);
    const dapp = await getDapp(accountId, url, uniqueId);
    const payloadToSign = JSON.parse(message.params[0]);
    tonConnect_onUpdate({
      type: 'dappSignData',
      promiseId,
      accountId,
      dapp,
      payloadToSign
    });
    const result = await promise;
    tonConnect_onUpdate({
      type: 'dappSignDataComplete',
      accountId
    });
    return {
      result,
      id: message.id
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tonConnect:signData', err);
    return handleMethodError(err, message.id, 'signData');
  }
}
async function checkTransactionMessages(accountId, messages, network) {
  const preparedMessages = messages.map(msg => {
    const {
      address: toAddress,
      amount,
      payload,
      stateInit
    } = msg;
    return {
      toAddress: (0,tonCore/* getIsRawAddress */.PZ)(toAddress) ? (0,tonCore/* toBase64Address */.vn)(toAddress, true, network) : toAddress,
      amount: BigInt(amount),
      payload: payload ? core_dist.Cell.fromBase64(payload) : undefined,
      stateInit: stateInit ? core_dist.Cell.fromBase64(stateInit) : undefined
    };
  });
  const checkResult = await tonConnect_ton.checkMultiTransactionDraft(accountId, preparedMessages, false, true);

  // Handle insufficient balance error specifically for TON Connect by converting to fallback emulation
  if ('error' in checkResult && checkResult.error === types/* ApiTransactionDraftError */.KL.InsufficientBalance && checkResult.emulation) {
    const fallbackCheckResult = {
      emulation: {
        isFallback: true,
        networkFee: checkResult.emulation.networkFee
      },
      parsedPayloads: checkResult.parsedPayloads
    };
    return fallbackCheckResult;
  }
  return checkResult;
}
function prepareTransactionForRequest(network, messages, emulation, parsedPayloads) {
  return Promise.all(messages.map(async (_ref3, index) => {
    var _emulation$byTransact;
    let {
      address,
      amount: rawAmount,
      payload: rawPayload,
      stateInit
    } = _ref3;
    const amount = BigInt(rawAmount);
    const toAddress = (0,tonCore/* getIsRawAddress */.PZ)(address) ? (0,tonCore/* toBase64Address */.vn)(address, true, network) : address;
    // Fix address format for `waitTxComplete` to work properly
    const normalizedAddress = (0,tonCore/* toBase64Address */.vn)(address, undefined, network);
    const payload = (parsedPayloads === null || parsedPayloads === void 0 ? void 0 : parsedPayloads[index]) ?? (rawPayload ? await parsePayloadBase64(network, toAddress, rawPayload) : undefined);
    const {
      isScam
    } = getKnownAddressInfo(normalizedAddress) || {};
    return {
      toAddress,
      amount,
      rawPayload,
      payload,
      stateInit,
      normalizedAddress,
      isScam,
      isDangerous: isTransferPayloadDangerous(payload),
      displayedToAddress: getTransferActualToAddress(toAddress, payload),
      networkFee: emulation.isFallback ? (0,bigint/* bigintDivideToNumber */.fC)(emulation.networkFee, messages.length) : ((_emulation$byTransact = emulation.byTransactionIndex[index]) === null || _emulation$byTransact === void 0 ? void 0 : _emulation$byTransact.networkFee) ?? 0n
    };
  }));
}
function formatConnectError(id, error) {
  let code = CONNECT_EVENT_ERROR_CODES.UNKNOWN_ERROR;
  let message = 'Unhandled error';
  if (error instanceof errors/* ApiUserRejectsError */.KB) {
    code = CONNECT_EVENT_ERROR_CODES.USER_REJECTS_ERROR;
    message = error.message;
  } else if (error instanceof TonConnectError) {
    code = error.code;
    message = error.message;
  }
  return {
    id,
    event: 'connect_error',
    payload: {
      code,
      message
    }
  };
}
function buildTonAddressReplyItem(accountId, wallet) {
  const {
    network
  } = parseAccountId(accountId);
  const {
    publicKey,
    address
  } = wallet;
  const stateInit = tonConnect_ton.getWalletStateInit(wallet);
  return {
    name: 'ton_addr',
    address: (0,tonCore/* toRawAddress */.m$)(address),
    network: network === 'mainnet' ? CHAIN.MAINNET : CHAIN.TESTNET,
    publicKey: publicKey,
    walletStateInit: stateInit.toBoc({
      idx: true,
      crc32: true
    }).toString('base64')
  };
}
function buildTonProofReplyItem(proof, signature) {
  const {
    timestamp,
    domain,
    payload
  } = proof;
  const domainBuffer = tonConnect_Buffer.from(domain);
  return {
    name: 'ton_proof',
    proof: {
      timestamp,
      domain: {
        lengthBytes: domainBuffer.byteLength,
        value: domainBuffer.toString('utf8')
      },
      signature,
      payload
    }
  };
}
async function fetchDappMetadata(manifestUrl) {
  try {
    const {
      url,
      name,
      iconUrl
    } = await (0,util_fetch/* fetchJsonWithProxy */.x3)(manifestUrl);
    const safeIconUrl = iconUrl.startsWith('data:') || iconUrl === '' ? BLANK_GIF_DATA_URL : iconUrl;
    if (!isValidUrl(url) || !isValidString(name) || !isValidUrl(safeIconUrl)) {
      throw new Error('Invalid data');
    }
    return {
      url,
      name,
      iconUrl: safeIconUrl,
      manifestUrl
    };
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('fetchDapp', err);
    throw new ManifestContentError();
  }
}
async function ensureRequestParams(request) {
  if (!request.url) {
    throw new BadRequestError('Missing `url` in request');
  }
  if (request.accountId) {
    return request;
  }
  const {
    network
  } = parseAccountId(await getCurrentAccountIdOrFail());
  const lastAccountId = await findLastConnectedAccount(network, request.url);
  if (!lastAccountId) {
    throw new BadRequestError('The connection is outdated, try relogin');
  }
  return {
    ...request,
    accountId: lastAccountId
  };
}
async function openExtensionPopup(force) {
  if (!config/* IS_EXTENSION */.hL1 || !force && tonConnect_onUpdate && isUpdaterAlive(tonConnect_onUpdate)) {
    return false;
  }
  await callHook('onWindowNeeded');
  await initPromise;
  return true;
}
async function getCurrentAccountOrFail() {
  const accountId = await getCurrentAccountId();
  if (!accountId) {
    throw new BadRequestError('The user is not authorized in the wallet');
  }
  return accountId;
}
;// ./src/api/tonConnect/sse.ts
/* provided dependency */ var sse_Buffer = __webpack_require__(48287)["Buffer"];













// The `empty` strategy - a trick to solve the problem of long network connection initialization
// in the Capacitor version of the app when it resumes from the background.
// In this case, the client should show a loader, and once the real SSE connection starts,
// the loader will be hidden.

const TTL_SEC = 300;
const NONCE_SIZE = 24;
const MAX_CONFIRM_DURATION = 60 * 1000;
const SHOULD_SHOW_LOADER_ON_SSE_START = config/* IS_CAPACITOR */.UMQ;
let sseEventSource;
let sseDapps = [];
let delayedReturnParams;
let sse_onUpdate;
function initSse(_onUpdate) {
  sse_onUpdate = _onUpdate;
}
async function startSseConnection(_ref) {
  let {
    url,
    isFromInAppBrowser,
    identifier
  } = _ref;
  const {
    searchParams: params,
    origin: connectionOrigin
  } = new URL(url);
  const ret = params.get('ret') || 'back';
  const version = Number(params.get('v'));
  const appClientId = params.get('id');
  // `back` strategy cannot be implemented
  const shouldOpenUrl = ret !== 'back' && ret !== 'none';
  const r = params.get('r');
  if (!r) {
    if (shouldOpenUrl) {
      delayedReturnParams = {
        validUntil: Date.now() + MAX_CONFIRM_DURATION,
        url: ret,
        isFromInAppBrowser
      };
    }
    return SHOULD_SHOW_LOADER_ON_SSE_START ? 'empty' : undefined;
  }
  const connectRequest = (0,safeExec/* default */.A)(() => JSON.parse(r)) || JSON.parse(decodeURIComponent(r));
  (0,logs/* logDebug */.MD)('SSE Start connection:', {
    version,
    appClientId,
    connectRequest,
    ret,
    connectionOrigin,
    identifier
  });
  const {
    secretKey: secretKeyArray,
    publicKey: publicKeyArray
  } = nacl_fast_default().box.keyPair();
  const secretKey = (0,utils/* bytesToHex */.My)(secretKeyArray);
  const clientId = (0,utils/* bytesToHex */.My)(publicKeyArray);
  const lastOutputId = 0;
  const request = {
    url: undefined,
    identifier,
    sseOptions: {
      clientId,
      appClientId,
      secretKey,
      lastOutputId
    }
  };
  await waitLogin();
  if (!connectRequest) {
    sse_onUpdate({
      type: 'showError',
      error: 'Invalid TON Connect link'
    });
    return undefined;
  }
  const result = await connect(request, connectRequest, lastOutputId);
  if (result.event === 'connect_error') {
    const {
      code
    } = result.payload;
    if ([CONNECT_EVENT_ERROR_CODES.MANIFEST_CONTENT_ERROR, CONNECT_EVENT_ERROR_CODES.MANIFEST_NOT_FOUND_ERROR, CONNECT_EVENT_ERROR_CODES.BAD_REQUEST_ERROR, CONNECT_EVENT_ERROR_CODES.UNKNOWN_APP_ERROR, CONNECT_EVENT_ERROR_CODES.METHOD_NOT_SUPPORTED].includes(code)) {
      sse_onUpdate({
        type: 'showError',
        error: result.payload.message
      });
    }
  }
  await sendMessage(result, secretKey, clientId, appClientId);
  if (result.event !== 'connect_error') {
    await resetupSseConnection();
  }
  if (!shouldOpenUrl) {
    return undefined;
  }
  return ret;
}
async function resetupSseConnection() {
  const [lastEventId, dappsState, network] = await Promise.all([getSseLastEventId(), getDappsState(), getCurrentNetwork()]);
  if (!dappsState || !network) {
    return;
  }
  sseDapps = Object.entries(dappsState).reduce((result, _ref2) => {
    let [accountId, dappsByUrl] = _ref2;
    if (parseAccountId(accountId).network !== network) {
      return result;
    }
    for (const byUniqueId of Object.values(dappsByUrl)) {
      for (const dapp of Object.values(byUniqueId)) {
        var _dapp$sse;
        if ((_dapp$sse = dapp.sse) !== null && _dapp$sse !== void 0 && _dapp$sse.clientId) {
          result.push({
            ...dapp.sse,
            accountId,
            url: dapp.url
          });
        }
      }
    }
    return result;
  }, []);
  const clientIds = (0,iteratees/* extractKey */.JY)(sseDapps, 'clientId').filter(Boolean);
  if (!clientIds.length) {
    return;
  }
  closeEventSource();
  sseEventSource = openEventSource(clientIds, lastEventId);
  sseEventSource.onopen = () => {
    if (SHOULD_SHOW_LOADER_ON_SSE_START) {
      sse_onUpdate({
        type: 'tonConnectOnline'
      });
    }
    (0,logs/* logDebug */.MD)('EventSource opened');
  };
  sseEventSource.onerror = e => {
    (0,logs/* logDebugError */.SJ)('EventSource', e.type);
  };
  sseEventSource.onmessage = async event => {
    const {
      from,
      message: encryptedMessage
    } = JSON.parse(event.data);
    const sseDapp = sseDapps.find(_ref3 => {
      let {
        appClientId
      } = _ref3;
      return appClientId === from;
    });
    if (!sseDapp) {
      (0,logs/* logDebug */.MD)(`Dapp with clientId ${from} not found`);
      return;
    }
    const {
      accountId,
      clientId,
      appClientId,
      secretKey,
      url,
      lastOutputId
    } = sseDapp;
    const message = decryptMessage(encryptedMessage, appClientId, secretKey);
    (0,logs/* logDebug */.MD)('SSE Event:', message);
    await setSseLastEventId(event.lastEventId);
    const sseOptions = {
      clientId,
      appClientId,
      secretKey,
      lastOutputId
    };

    // @ts-ignore
    const result = await tonConnect_namespaceObject[message.method]({
      url,
      accountId,
      sseOptions
    }, message);
    await sendMessage(result, secretKey, clientId, appClientId);
    if (delayedReturnParams) {
      const {
        validUntil,
        url,
        isFromInAppBrowser
      } = delayedReturnParams;
      if (validUntil > Date.now()) {
        sse_onUpdate({
          type: 'openUrl',
          url,
          isExternal: !isFromInAppBrowser
        });
      }
      delayedReturnParams = undefined;
    }
  };
}
async function sendSseDisconnect(accountId, url) {
  const sseDapp = sseDapps.find(d => d.url === url && d.accountId === accountId);
  if (!sseDapp) return;
  const {
    secretKey,
    clientId,
    appClientId
  } = sseDapp;
  const lastOutputId = sseDapp.lastOutputId + 1;
  const response = {
    event: 'disconnect',
    id: lastOutputId,
    payload: {}
  };
  await sendMessage(response, secretKey, clientId, appClientId);
}
function sendMessage(message, secretKey, clientId, toId, topic) {
  const buffer = sse_Buffer.from(JSON.stringify(message));
  const encryptedMessage = encryptMessage(buffer, toId, secretKey);
  return sendRawMessage(encryptedMessage, clientId, toId, topic);
}
async function sendRawMessage(body, clientId, toId, topic) {
  const url = new URL(`${config/* SSE_BRIDGE_URL */.Qxf}message`);
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('to', toId);
  url.searchParams.set('ttl', TTL_SEC.toString());
  if (topic) {
    url.searchParams.set('topic', topic);
  }
  const response = await fetch(url, {
    method: 'POST',
    body
  });
  await (0,util_fetch/* handleFetchErrors */.EQ)(response);
}
function closeEventSource() {
  if (!sseEventSource) return;
  (0,safeExec/* default */.A)(() => {
    sseEventSource.close();
  });
  sseEventSource = undefined;
}
function openEventSource(clientIds, lastEventId) {
  const url = new URL(`${config/* SSE_BRIDGE_URL */.Qxf}events`);
  url.searchParams.set('client_id', clientIds.join(','));
  if (lastEventId) {
    url.searchParams.set('last_event_id', lastEventId);
  }
  return new EventSource(url);
}
function encryptMessage(message, publicKey, secretKey) {
  const nonce = (0,nacl_fast.randomBytes)(NONCE_SIZE);
  const encrypted = nacl_fast_default().box(message, nonce, sse_Buffer.from(publicKey, 'hex'), sse_Buffer.from(secretKey, 'hex'));
  return sse_Buffer.concat([nonce, encrypted]).toString('base64');
}
function decryptMessage(message, publicKey, secretKey) {
  const fullBuffer = sse_Buffer.from(message, 'base64');
  const nonce = fullBuffer.subarray(0, NONCE_SIZE);
  const encrypted = fullBuffer.subarray(NONCE_SIZE);
  const decrypted = nacl_fast_default().box.open(encrypted, nonce, sse_Buffer.from(publicKey, 'hex'), sse_Buffer.from(secretKey, 'hex'));
  const jsonText = new TextDecoder('utf-8').decode(decrypted);
  return JSON.parse(jsonText);
}
;// ./src/api/methods/preload.ts
let resolvePromise;
const preloadPromise = new Promise(resolve => {
  resolvePromise = resolve;
});
function resolveDataPreloadPromise() {
  resolvePromise();
}
async function waitDataPreload() {
  await preloadPromise;
}
;// ./src/api/methods/staking.ts











const {
  ton: staking_ton
} = chains;
function initStaking() {}
function staking_checkStakeDraft(accountId, amount, state) {
  return staking_ton.checkStakeDraft(accountId, amount, state);
}
function staking_checkUnstakeDraft(accountId, amount, state) {
  return staking_ton.checkUnstakeDraft(accountId, amount, state);
}
async function staking_submitStake(accountId, password, amount, state, realFee) {
  const {
    address: fromAddress
  } = await fetchStoredWallet(accountId, 'ton');
  const result = await staking_ton.submitStake(accountId, password, amount, state);
  if ('error' in result) {
    return result;
  }
  let localActivity;
  if (state.tokenSlug === config/* TONCOIN */.Tu9.slug) {
    [localActivity] = createLocalTransactions(accountId, 'ton', [{
      id: result.msgHashNormalized,
      amount,
      fromAddress,
      toAddress: result.toAddress,
      fee: realFee ?? 0n,
      type: 'stake',
      slug: state.tokenSlug,
      externalMsgHashNorm: result.msgHashNormalized
    }]);
  } else {
    [localActivity] = createLocalTransactions(accountId, 'ton', [{
      id: result.msgHashNormalized,
      amount,
      fromAddress,
      toAddress: result.toAddress,
      fee: realFee ?? 0n,
      type: 'stake',
      slug: state.tokenSlug,
      externalMsgHashNorm: result.msgHashNormalized
    }]);
  }
  return {
    ...result,
    txId: localActivity.id
  };
}
async function staking_submitUnstake(accountId, password, amount, state, realFee) {
  const {
    address: fromAddress
  } = await fetchStoredWallet(accountId, 'ton');
  const result = await staking_ton.submitUnstake(accountId, password, amount, state);
  if ('error' in result) {
    return result;
  }
  const [localActivity] = createLocalTransactions(accountId, 'ton', [{
    id: result.msgHashNormalized,
    amount: result.toncoinAmount,
    fromAddress,
    toAddress: result.toAddress,
    fee: realFee ?? 0n,
    type: 'unstakeRequest',
    slug: config/* TONCOIN */.Tu9.slug,
    externalMsgHashNorm: result.msgHashNormalized,
    ...result.localActivityParams
  }]);
  return {
    ...result,
    txId: localActivity.id
  };
}
async function getStakingHistory(accountId) {
  const {
    byChain: {
      ton: tonWallet
    }
  } = await fetchStoredAccount(accountId);
  if (!tonWallet) return [];
  return callBackendGet(`/staking/profits/${tonWallet.address}`);
}
async function tryUpdateStakingCommonData() {
  try {
    const tonClient = (0,tonCore/* getTonClient */.N7)('mainnet');
    const response = await callBackendGet('/staking/common');
    const data = {
      ...response,
      liquid: {
        ...response.liquid,
        available: (0,util_decimals/* fromDecimal */.UH)(response.liquid.available)
      },
      jettonPools: await Promise.all(response.jettonPools.map(async pool => {
        const poolContract = tonClient.open(StakingPool/* StakingPool */.Ml.createFromAddress(core_dist.Address.parse(pool.pool)));
        const poolConfig = await poolContract.getStorageData();
        return {
          ...pool,
          poolConfig
        };
      }))
    };
    data.round.start *= 1000;
    data.round.end *= 1000;
    data.round.unlock *= 1000;
    data.prevRound.start *= 1000;
    data.prevRound.end *= 1000;
    data.prevRound.unlock *= 1000;
    setStakingCommonCache(data);
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryUpdateLiquidStakingState', err);
  }
}
async function submitStakingClaimOrUnlock(accountId, password, state, realFee) {
  const {
    address: walletAddress
  } = await fetchStoredWallet(accountId, 'ton');
  let result;
  switch (state.type) {
    case 'jetton':
      {
        result = await staking_ton.submitTokenStakingClaim(accountId, password, state);
        break;
      }
    case 'ethena':
      {
        result = await staking_ton.submitUnstakeEthenaLocked(accountId, password, state);
        break;
      }
  }
  if ('error' in result) {
    return result;
  }
  const [localActivity] = createLocalTransactions(accountId, 'ton', [{
    id: result.msgHashNormalized,
    amount: result.amount,
    fromAddress: walletAddress,
    toAddress: result.toAddress,
    fee: realFee ?? 0n,
    slug: config/* TONCOIN */.Tu9.slug,
    externalMsgHashNorm: result.msgHashNormalized,
    ...result.localActivityParams
  }]);
  return {
    ...result,
    txId: localActivity.id
  };
}
;// ./src/api/methods/other.ts
/* provided dependency */ var methods_other_Buffer = __webpack_require__(48287)["Buffer"];









const SIGN_MESSAGE = methods_other_Buffer.from('MyTonWallet_AuthToken_n6i0k4w8pb');
function other_checkApiAvailability(chain, network) {
  return chains[chain].checkApiAvailability(network);
}
async function getBackendAuthToken(accountId, password) {
  const accountWallet = await fetchStoredWallet(accountId, 'ton');
  let {
    authToken
  } = accountWallet;
  const {
    publicKey,
    isInitialized
  } = accountWallet;
  if (!authToken) {
    const privateKey = await chains.ton.fetchPrivateKey(accountId, password);
    const signature = nacl_fast_default().sign.detached(SIGN_MESSAGE, privateKey);
    authToken = methods_other_Buffer.from(signature).toString('base64');
    await updateStoredWallet(accountId, 'ton', {
      authToken
    });
  }
  if (!isInitialized) {
    authToken += `:${publicKey}`;
  }
  return authToken;
}
async function fetchAccountConfigForDebugPurposesOnly() {
  try {
    const [accounts, stateVersion, mnemonicsEncrypted] = await Promise.all([fetchStoredAccounts(), storages_storage.getItem('stateVersion'), storages_storage.getItem('mnemonicsEncrypted')]);
    return JSON.stringify({
      accounts,
      stateVersion,
      mnemonicsEncrypted
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('fetchAccountConfigForDebugPurposesOnly', err);
    return undefined;
  }
}
function ping() {
  return true;
}
function updateAccountMemoryCache(accountId, address, partial) {
  updateAccountCache(accountId, address, partial);
}

async function getMoonpayOnrampUrl(chain, address, theme) {
  try {
    return await callBackendGet('/onramp-url', {
      chain,
      address,
      theme
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('getMoonpayOnrampUrl', err);
    return (0,errors/* handleServerError */.QS)(err);
  }
}
;// ./src/api/methods/swap.ts













const swap_ton = chains.ton;
let swap_onUpdate;
function initSwap(_onUpdate) {
  swap_onUpdate = _onUpdate;
}
async function swapBuildTransfer(accountId, password, request) {
  const {
    network
  } = parseAccountId(accountId);
  const authToken = await getBackendAuthToken(accountId, password);
  const {
    address,
    version
  } = await fetchStoredWallet(accountId, 'ton');
  request.walletVersion = version;
  const {
    id,
    transfers
  } = await swapBuild(authToken, request);
  const transferList = transfers.map(transfer => ({
    ...transfer,
    amount: BigInt(transfer.amount),
    isBase64Payload: true
  }));
  try {
    const account = await fetchStoredChainAccount(accountId, 'ton');
    await swap_ton.validateDexSwapTransfers(network, address, request, transferList, account);
    const result = await swap_ton.checkMultiTransactionDraft(accountId, transferList, request.shouldTryDiesel);
    if ('error' in result) {
      await patchSwapItem({
        address,
        swapId: id,
        authToken,
        error: result.error
      });
      return result;
    }
    return {
      ...result,
      id,
      transfers
    };
  } catch (err) {
    await patchSwapItem({
      address,
      swapId: id,
      authToken,
      error: errorToString(err)
    });
    throw err;
  }
}
async function swapSubmit(accountId, password, transfers, historyItem, isGasless) {
  const swapId = historyItem.id;
  const tonWallet = await fetchStoredWallet(accountId, 'ton');
  const {
    address
  } = tonWallet;
  const authToken = tonWallet.authToken ?? (await getBackendAuthToken(accountId, password));
  try {
    const transferList = transfers.map(transfer => ({
      ...transfer,
      amount: BigInt(transfer.amount),
      isBase64Payload: true
    }));
    if (historyItem.from !== config/* TONCOIN */.Tu9.symbol) {
      transferList[0] = await swap_ton.insertMintlessPayload('mainnet', address, historyItem.from, transferList[0]);
    }
    const result = await swap_ton.submitMultiTransfer({
      accountId,
      password,
      messages: transferList,
      isGasless
    });
    if ('error' in result) {
      await patchSwapItem({
        address,
        swapId,
        authToken,
        error: result.error
      });
      return result;
    }
    delete result.messages[0].stateInit;
    const from = getSwapItemSlug(historyItem, historyItem.from);
    const to = getSwapItemSlug(historyItem, historyItem.to);
    const swap = {
      ...historyItem,
      id: buildLocalTxId(result.msgHashNormalized),
      from,
      to,
      kind: 'swap',
      externalMsgHashNorm: result.msgHashNormalized,
      extra: (0,iteratees/* omitUndefined */.Oy)({
        withW5Gasless: result.withW5Gasless
      })
    };
    swap_onUpdate({
      type: 'newLocalActivities',
      accountId,
      activities: [swap]
    });
    await patchSwapItem({
      address,
      swapId,
      authToken,
      msgHash: result.msgHash
    });
    void callHook('onSwapCreated', accountId, swap.timestamp - 1);
    return {
      activityId: swap.id
    };
  } catch (err) {
    await patchSwapItem({
      address,
      swapId,
      authToken,
      error: errorToString(err)
    });
    throw err;
  }
}
function errorToString(err) {
  return typeof err === 'string' ? err : err.stack;
}
async function fetchSwaps(accountId, ids) {
  const {
    address
  } = await fetchStoredWallet(accountId, 'ton');
  const results = await Promise.allSettled(ids.map(id => swapGetHistoryItem(address, id.replace('swap:', ''))));
  const nonExistentIds = [];
  const swaps = results.map((result, i) => {
    if (result.status === 'rejected') {
      if (result.reason instanceof errors/* ApiServerError */.K$ && result.reason.statusCode === 404) {
        nonExistentIds.push(ids[i]);
      }
      return undefined;
    }
    return swapItemToActivity(result.value);
  }).filter(Boolean);
  return {
    nonExistentIds,
    swaps
  };
}
async function swapEstimate(accountId, request) {
  const walletVersion = (await fetchStoredWallet(accountId, 'ton')).version;
  const {
    swapVersion
  } = await getBackendConfigCache();
  return callBackendPost('/swap/ton/estimate', {
    ...request,
    swapVersion: swapVersion ?? config/* SWAP_API_VERSION */.AuB,
    walletVersion
  }, {
    isAllowBadRequest: true
  });
}
async function swapBuild(authToken, request) {
  const {
    swapVersion
  } = await getBackendConfigCache();
  return callBackendPost('/swap/ton/build', {
    ...request,
    swapVersion: swapVersion ?? config/* SWAP_API_VERSION */.AuB,
    isMsgHashMode: true
  }, {
    authToken
  });
}
function swapGetAssets() {
  return callBackendGet('/swap/assets');
}
function swapGetPairs(symbolOrTokenAddress) {
  return callBackendGet('/swap/pairs', {
    asset: symbolOrTokenAddress
  });
}
function swapCexEstimate(request) {
  return callBackendPost('/swap/cex/estimate', request, {
    isAllowBadRequest: true
  });
}
function swapCexValidateAddress(params) {
  return callBackendGet('/swap/cex/validate-address', params);
}
async function swapCexCreateTransaction(accountId, password, request) {
  const authToken = await getBackendAuthToken(accountId, password);
  const {
    swapVersion
  } = await getBackendConfigCache();
  const {
    swap: rawSwap
  } = await callBackendPost('/swap/cex/createTransaction', {
    ...request,
    swapVersion: swapVersion ?? config/* SWAP_API_VERSION */.AuB
  }, {
    authToken
  });
  const swap = convertSwapItemToTrusted(rawSwap);
  const activity = swapItemToActivity(swap);
  swap_onUpdate({
    type: 'newActivities',
    accountId,
    activities: [activity]
  });
  void callHook('onSwapCreated', accountId, swap.timestamp - 1);
  return {
    swap,
    activity
  };
}
async function swapCexSubmit(chain, transferOptions, swapId) {
  const result = await methods_transfer_submitTransfer(chain, transferOptions, false);
  if (chain === 'ton' && 'msgHash' in result) {
    const {
      accountId,
      password
    } = transferOptions;
    const {
      address
    } = await fetchStoredWallet(accountId, 'ton');
    const authToken = await getBackendAuthToken(accountId, password ?? '');
    await patchSwapItem({
      address,
      authToken,
      msgHash: result.msgHash,
      swapId
    });
  }
  return result;
}
;// ./src/api/methods/polling.ts



















const BACKEND_INTERVAL = 30 * SEC;
const LONG_BACKEND_INTERVAL = MINUTE;
const INCORRECT_TIME_DIFF = 30 * SEC;
const ACCOUNT_CONFIG_INTERVAL = {
  focused: MINUTE,
  notFocused: 10 * MINUTE
};
const MAX_POST_TOKENS = 1000;
let polling_onUpdate;
let stopCommonBackendPolling;
let stopActiveAccountPolling;
const inactiveAccountPolling = config/* IS_AIR_APP */.gmk ? createInactiveAccountsPollingManager() : undefined;
const setUpdatingStatus = createUpdatingStatusManager();
function initPolling(_onUpdate) {
  var _stopCommonBackendPol;
  polling_onUpdate = _onUpdate;
  void loadTokensCache();
  void Promise.allSettled([tryUpdateKnownAddresses(), tryUpdateTokens(), tryUpdateCurrencyRates(), !config/* IS_STAKING_DISABLED */.OuE && tryUpdateSwapTokens(), tryUpdateStakingCommonData()]).then(() => resolveDataPreloadPromise());
  void tryUpdateConfig();
  (_stopCommonBackendPol = stopCommonBackendPolling) === null || _stopCommonBackendPol === void 0 || _stopCommonBackendPol();
  stopCommonBackendPolling = setupCommonBackendPolling();
}
async function destroyPolling() {
  var _stopCommonBackendPol2;
  (_stopCommonBackendPol2 = stopCommonBackendPolling) === null || _stopCommonBackendPol2 === void 0 || _stopCommonBackendPol2();
  stopCommonBackendPolling = undefined;
  removeAllPollingAccounts();
  await setActivePollingAccount(undefined, {});
}
function setupCommonBackendPolling() {
  const stopFns = [pollingLoop({
    period: BACKEND_INTERVAL,
    skipInitialPoll: true,
    poll: tryUpdateCurrencyRates
  }).stop, pollingLoop({
    period: LONG_BACKEND_INTERVAL,
    skipInitialPoll: true,
    async poll() {
      await Promise.all([tryUpdateTokens(), tryUpdateKnownAddresses(), !config/* IS_STAKING_DISABLED */.OuE && tryUpdateStakingCommonData(), tryUpdateConfig(), tryUpdateSwapTokens()]);
    }
  }).stop];
  return () => {
    for (const stopFn of stopFns) {
      stopFn();
    }
  };
}
async function tryUpdateTokens() {
  try {
    const tokens = await callBackendGet('/assets');
    for (const token of tokens) {
      token.isFromBackend = true;
    }
    await tokensPreload.promise;
    const tokensCache = getTokensCache();
    const nonBackendTokenAddresses = Object.values(tokensCache.bySlug).reduce((result, token) => {
      if (!token.isFromBackend && token.tokenAddress) {
        result.push(token.tokenAddress);
      }
      return result;
    }, []);

    // POST is used to retrieve data due to the potentially large number of addresses
    const nonBackendTokenDetails = nonBackendTokenAddresses.length ? await callBackendPost('/assets', {
      assets: nonBackendTokenAddresses.slice(0, MAX_POST_TOKENS)
    }) : undefined;
    await updateTokens(tokens, polling_onUpdate, nonBackendTokenDetails, true);
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryUpdateTokens', err);
  }
}
async function tryUpdateCurrencyRates() {
  try {
    const currencyRates = await callBackendGet('/currency-rates');
    polling_onUpdate({
      type: 'updateCurrencyRates',
      rates: currencyRates.rates
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryUpdateCurrencyRates', err);
  }
}
async function tryUpdateSwapTokens() {
  try {
    const assets = await swapGetAssets();
    await tokensPreload.promise;
    const tokens = assets.reduce((acc, asset) => {
      acc[asset.slug] = {
        // Fix legacy variable names
        ...(0,iteratees/* omit */.cJ)(asset, ['blockchain']),
        chain: 'blockchain' in asset ? asset.blockchain : asset.chain,
        tokenAddress: 'contract' in asset && asset.contract !== config/* TONCOIN */.Tu9.symbol ? asset.contract : asset.tokenAddress
      };
      return acc;
    }, {});
    polling_onUpdate({
      type: 'updateSwapTokens',
      tokens
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryUpdateSwapTokens', err);
  }
}
async function tryUpdateConfig() {
  try {
    const config = await callBackendGet('/utils/get-config');
    setBackendConfigCache(config);
    const {
      isLimited,
      isCopyStorageEnabled = false,
      supportAccountsCount = 1,
      now: serverUtc,
      country: countryCode,
      swapVersion,
      isUpdateRequired: isAppUpdateRequired
    } = config;
    polling_onUpdate({
      type: 'updateConfig',
      isLimited,
      isCopyStorageEnabled,
      supportAccountsCount,
      countryCode,
      isAppUpdateRequired,
      swapVersion
    });
    const localUtc = new Date().getTime();
    if (Math.abs(serverUtc - localUtc) > INCORRECT_TIME_DIFF) {
      polling_onUpdate({
        type: 'incorrectTime'
      });
    }
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('tryUpdateConfig', err);
  }
}

/** Call it every time the active account changes */
async function setActivePollingAccount(accountId, newestActivityTimestamps) {
  var _stopActiveAccountPol;
  (_stopActiveAccountPol = stopActiveAccountPolling) === null || _stopActiveAccountPol === void 0 || _stopActiveAccountPol();
  stopActiveAccountPolling = undefined;
  inactiveAccountPolling === null || inactiveAccountPolling === void 0 || inactiveAccountPolling.setActiveAccount(accountId);
  if (accountId) {
    const account = await fetchStoredAccount(accountId);
    const stopPollingFns = [!config/* IS_CORE_WALLET */.TI6 && setupAccountConfigPolling(accountId, account).stop, ...Object.keys(chains).map(chain => {
      if (doesAccountHaveChain(account, chain)) {
        return chains[chain].setupActivePolling(accountId, account, polling_onUpdate, setUpdatingStatus.bind(undefined, accountId, chain), pickChainTimestamps(newestActivityTimestamps, chain));
      }
    })];
    stopActiveAccountPolling = () => {
      for (const stopFn of stopPollingFns) {
        if (stopFn) {
          stopFn();
        }
      }
    };
  }
}

/** Call it every time a new account is created */
function addPollingAccount(accountId, account) {
  inactiveAccountPolling === null || inactiveAccountPolling === void 0 || inactiveAccountPolling.addAccount(accountId, account);
}

/** Call it every time an account is removed (except for cases in the other remove...account functions) */
function removePollingAccount(accountId) {
  inactiveAccountPolling === null || inactiveAccountPolling === void 0 || inactiveAccountPolling.removeAccount(accountId);
}

/** Call it every time all accounts of a network are removed */
function removeNetworkPollingAccounts(network) {
  inactiveAccountPolling === null || inactiveAccountPolling === void 0 || inactiveAccountPolling.removeNetworkAccounts(network);
}

/** Call it every time all accounts are removed */
function removeAllPollingAccounts() {
  inactiveAccountPolling === null || inactiveAccountPolling === void 0 || inactiveAccountPolling.removeAllAccounts();
}
function setupAccountConfigPolling(accountId, account) {
  let lastResult;
  const partialAccount = (0,iteratees/* omit */.cJ)(account, ['mnemonicEncrypted']);
  return pollingLoop({
    period: ACCOUNT_CONFIG_INTERVAL,
    async poll() {
      try {
        const accountConfig = await callBackendPost('/account-config', partialAccount);
        if (!areDeepEqual(accountConfig, lastResult)) {
          lastResult = accountConfig;
          polling_onUpdate({
            type: 'updateAccountConfig',
            accountId,
            accountConfig
          });
        }
      } catch (err) {
        (0,logs/* logDebugError */.SJ)('setupBackendAccountPolling', err);
      }
    }
  });
}

/**
 * Returns a stateful function that receives updating statuses from multiple chains and merges them together into a
 * single set of consistent 'updatingStatus' events for the UI.
 */
function createUpdatingStatusManager() {
  const updatingStatuses = new Map();
  return (accountId, chain, kind, isUpdating) => {
    const key = `${accountId} ${kind}`;
    let chainsBeingUpdated = updatingStatuses.get(key);
    if (!chainsBeingUpdated) {
      chainsBeingUpdated = new OrGate(isUpdating => {
        polling_onUpdate({
          type: 'updatingStatus',
          kind,
          accountId,
          isUpdating
        });
      });
      updatingStatuses.set(key, chainsBeingUpdated);
    }
    chainsBeingUpdated.toggle(chain, isUpdating);
  };
}

/**
 * Manages polling for the inactive accounts.
 * The goal is polling the accounts from the network of the current active account, but not the active account itself.
 *
 * @todo: Deduplicate polling the same addresses, if multiple accounts have it
 */
function createInactiveAccountsPollingManager() {
  const stopByAccount = {};
  let activeAccountId;
  async function setActiveAccount(accountId) {
    var _stopByAccount$active;
    if (accountId === activeAccountId) {
      return;
    }
    if (accountId === undefined) {
      stopAllPollings();
      return;
    }
    if (!activeAccountId || parseAccountId(accountId).network !== parseAccountId(activeAccountId).network) {
      await switchNetwork(accountId);
      return;
    }
    const previousActiveAccountId = activeAccountId;
    activeAccountId = accountId;

    // Stop polling the now active account
    (_stopByAccount$active = stopByAccount[activeAccountId]) === null || _stopByAccount$active === void 0 || _stopByAccount$active.call(stopByAccount);
    delete stopByAccount[activeAccountId];

    // Start polling the previous active account
    const previousActiveAccount = await fetchMaybeStoredAccount(previousActiveAccountId);
    if (previousActiveAccount) {
      // The previously active account may get removed at this moment
      startAccountPolling(previousActiveAccountId, previousActiveAccount);
    }
  }
  function addAccount(accountId, account) {
    const isActiveAccount = accountId === activeAccountId;
    const isCurrentNetwork = activeAccountId && parseAccountId(accountId).network === parseAccountId(activeAccountId).network;
    if (!isActiveAccount && isCurrentNetwork) {
      startAccountPolling(accountId, account);
    }
  }
  function removeAccount(accountId) {
    var _stopByAccount$accoun;
    (_stopByAccount$accoun = stopByAccount[accountId]) === null || _stopByAccount$accoun === void 0 || _stopByAccount$accoun.call(stopByAccount);
    delete stopByAccount[accountId];
  }
  function removeNetworkAccounts(network) {
    if (activeAccountId && parseAccountId(activeAccountId).network === network) {
      // Inactive account polling must poll only the network of the active account, so removing the network means removing all account
      stopAllPollings();
    }
  }
  function removeAllAccounts() {
    stopAllPollings();
  }
  async function switchNetwork(newActiveAccountId) {
    stopAllPollings();
    activeAccountId = newActiveAccountId;
    const {
      network
    } = parseAccountId(activeAccountId);
    const accounts = await fetchStoredAccounts();
    const otherAccountIds = Object.keys(accounts).filter(accountId => accountId !== activeAccountId && parseAccountId(accountId).network === network);
    otherAccountIds.map(accountId => startAccountPolling(accountId, accounts[accountId]));
  }
  function startAccountPolling(accountId, account) {
    if (stopByAccount[accountId]) return;
    const stopFns = Object.keys(chains).map(chain => {
      if (doesAccountHaveChain(account, chain)) {
        return chains[chain].setupInactivePolling(accountId, account, polling_onUpdate);
      }
    });
    stopByAccount[accountId] = () => {
      for (const stopChain of stopFns) {
        stopChain === null || stopChain === void 0 || stopChain();
      }
    };
  }
  function stopAllPollings() {
    for (const [accountId, stopAccountPolling] of Object.entries(stopByAccount)) {
      stopAccountPolling();
      delete stopByAccount[accountId];
    }
  }
  const preventRaceCondition = schedulers/* forbidConcurrency */.SB;
  return {
    setActiveAccount: preventRaceCondition(setActiveAccount),
    addAccount: preventRaceCondition(addAccount),
    removeAccount: preventRaceCondition(removeAccount),
    removeNetworkAccounts: preventRaceCondition(removeNetworkAccounts),
    removeAllAccounts: preventRaceCondition(removeAllAccounts)
  };
}
function pickChainTimestamps(bySlug, chain) {
  const {
    slug: nativeSlug
  } = chain_getChainConfig(chain).nativeToken;
  return Object.entries(bySlug).reduce((newBySlug, _ref) => {
    let [slug, timestamp] = _ref;
    if (slug === nativeSlug || slug.startsWith(`${chain}-`)) {
      newBySlug[slug] = timestamp;
    }
    return newBySlug;
  }, {});
}
;// ./src/api/methods/init.ts











addHooks({
  onDappDisconnected: sendSseDisconnect,
  onDappsChanged: resetupSseConnection
});
async function init(onUpdate, args) {
  connectUpdater(onUpdate);
  const environment = (0,api_environment/* setEnvironment */.k)(args);
  (0,connector/* initWindowConnector */.q)();
  initAccounts(onUpdate);
  initPolling(onUpdate);
  initTransfer(onUpdate);
  initStaking();
  initSwap(onUpdate);
  initNfts(onUpdate);
  if (environment.isDappSupported) {
    initDapps(onUpdate);
    initTonConnect(onUpdate);
  }
  if (environment.isSseSupported) {
    initSse(onUpdate);
  }
  await startStorageMigration(onUpdate, chains.ton, args.accountIds);
  if (environment.isSseSupported) {
    void resetupSseConnection();
  }
  void saveReferrer(args);
}
function destroy() {
  void destroyPolling();
  disconnectUpdater();
}
async function saveReferrer(args) {
  let referrer = await storages_storage.getItem('referrer');
  if (referrer) {
    return;
  }
  referrer = args.referrer ?? (await fetchBackendReferrer());
  if (referrer) {
    await storages_storage.setItem('referrer', referrer);
  }
}
;// ./src/api/methods/activities.ts








async function fetchPastActivities(accountId, limit, tokenSlug, toTimestamp) {
  try {
    let activities = tokenSlug ? await fetchTokenActivitySlice(accountId, limit, tokenSlug, toTimestamp) : await fetchAllActivitySlice(accountId, limit, toTimestamp);
    activities = await swapReplaceCexActivities(accountId, activities, tokenSlug);
    return activities;
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('fetchPastActivities', tokenSlug, err);
    return undefined;
  }
}
function fetchTokenActivitySlice(accountId, limit, tokenSlug, toTimestamp) {
  const chain = getChainBySlug(tokenSlug);
  return fetchAndCheckActivitySlice(chain, {
    accountId,
    tokenSlug,
    toTimestamp,
    limit
  });
}
async function fetchAllActivitySlice(accountId, limit, toTimestamp) {
  const account = await fetchStoredAccount(accountId);
  const accountChains = Object.keys(account.byChain);
  const activityChunks = await Promise.all(
  // The `fetchActivitySlice` method of all chains must return sorted activities
  accountChains.map(chain => fetchAndCheckActivitySlice(chain, {
    accountId,
    toTimestamp,
    limit
  })));
  return mergeSortedActivitiesToMaxTime(...activityChunks);
}
function methods_activities_decryptComment(accountId, activity, password) {
  const {
    encryptedComment
  } = activity;
  if (!encryptedComment) {
    return activity.comment ?? '';
  }
  const chain = getActivityChains(activity)[0];
  if (chain) {
    return chains[chain].decryptComment({
      accountId,
      activity: {
        ...activity,
        encryptedComment
      },
      password
    });
  }
  return '';
}
async function methods_activities_fetchActivityDetails(accountId, activity) {
  for (const chain of getActivityChains(activity)) {
    const newActivity = await chains[chain].fetchActivityDetails(accountId, activity);
    if (newActivity) {
      return newActivity;
    }
  }
  return activity;
}
async function fetchAndCheckActivitySlice(chain, options) {
  const activities = await chains[chain].fetchActivitySlice(options);

  // Sorting is important for `mergeSortedActivities`, so it's checked in the debug mode
  if (config/* DEBUG */.Oig && !areActivitiesSortedAndUnique(activities)) {
    (0,logs/* logDebugError */.SJ)(`The all activity slice of ${chain} is not sorted properly or has duplicates`, options);
  }
  return activities;
}
;// ./src/api/methods/accounts.ts







let accounts_onUpdate;
function initAccounts(_onUpdate) {
  accounts_onUpdate = _onUpdate;
}
async function activateAccount(accountId) {
  let newestActivityTimestamps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  await waitStorageMigration();
  const prevAccountId = await getCurrentAccountId();
  const isFirstLogin = !prevAccountId;
  await storages_storage.setItem('currentAccountId', accountId);
  loginResolve();
  if (config/* IS_EXTENSION */.hL1) {
    void callHook('onFirstLogin');
  }
  if (isFirstLogin) {
    sendUpdateTokens(accounts_onUpdate);
  }
  void setActivePollingAccount(accountId, newestActivityTimestamps);
}
async function deactivateAllAccounts() {
  void setActivePollingAccount(undefined, {});
  await storages_storage.removeItem('currentAccountId');
  if (config/* IS_EXTENSION */.hL1) {
    void callHook('onFullLogout');
  }
}
function fetchTonWallet(accountId) {
  return fetchStoredWallet(accountId, 'ton');
}
async function fetchLedgerAccount(accountId) {
  const account = await fetchStoredAccount(accountId);
  if (account.type === 'ledger') return account;
  throw new Error(`Account ${accountId} is not a Ledger account`);
}
;// ./src/api/methods/auth.ts
















const {
  ton: auth_ton
} = chains;
function auth_generateMnemonic(isBip39) {
  if (isBip39) return generateBip39Mnemonic();
  return auth_ton.generateMnemonic();
}
function createWallet(network, mnemonic, password, version) {
  if (!version) version = config/* DEFAULT_WALLET_VERSION */.RoE;
  return importMnemonic(network, mnemonic, password, version);
}
function auth_validateMnemonic(mnemonic) {
  return validateBip39Mnemonic(mnemonic) && config/* IS_BIP39_MNEMONIC_ENABLED */.iAh || chains.ton.validateMnemonic(mnemonic);
}
async function importMnemonic(network, mnemonic, password, version) {
  const isPrivateKey = isMnemonicPrivateKey(mnemonic);
  let isBip39Mnemonic = validateBip39Mnemonic(mnemonic);
  const isTonMnemonic = await auth_ton.validateMnemonic(mnemonic);
  if (!isPrivateKey && !isTonMnemonic && (!isBip39Mnemonic || !config/* IS_BIP39_MNEMONIC_ENABLED */.iAh)) {
    throw new Error('Invalid mnemonic');
  }
  const mnemonicEncrypted = await encryptMnemonic(mnemonic, password);

  // This is a defensive approach against potential corrupted encryption reported by some users
  const decryptedMnemonic = await decryptMnemonic(mnemonicEncrypted, password).catch(() => undefined);
  if (!password || !decryptedMnemonic) {
    return {
      error: types/* ApiCommonError */.QD.DebugError
    };
  }
  let account;
  let tonWallet;
  try {
    if (isBip39Mnemonic && isTonMnemonic) {
      tonWallet = await auth_ton.getWalletFromMnemonic(mnemonic, network, version);
      if (tonWallet.lastTxId) {
        isBip39Mnemonic = false;
      }
    }
    if (isBip39Mnemonic) {
      account = {
        type: 'bip39',
        mnemonicEncrypted,
        byChain: {}
      };
      await Promise.all(Object.keys(chains).map(async chain => {
        const wallet = await chains[chain].getWalletFromBip39Mnemonic(network, mnemonic);
        account.byChain[chain] = wallet;
      }));
    } else {
      if (!tonWallet) {
        tonWallet = isPrivateKey ? await auth_ton.getWalletFromPrivateKey(mnemonic[0], network, version) : await auth_ton.getWalletFromMnemonic(mnemonic, network, version);
      }
      account = {
        type: 'ton',
        mnemonicEncrypted,
        byChain: {
          ton: tonWallet
        }
      };
    }
    const accountId = await addAccount(network, account);
    const secondNetworkAccount = config/* IS_CORE_WALLET */.TI6 ? await createAccountWithSecondNetwork({
      accountId,
      network,
      mnemonic,
      mnemonicEncrypted,
      version
    }) : undefined;
    void activateAccount(accountId);
    return {
      accountId,
      byChain: getAccountChains(account),
      secondNetworkAccount
    };
  } catch (err) {
    return (0,errors/* handleServerError */.QS)(err);
  }
}
async function createAccountWithSecondNetwork(options) {
  const {
    mnemonic,
    version,
    mnemonicEncrypted
  } = options;
  const {
    network,
    accountId
  } = options;
  const tonWallet = await auth_ton.getWalletFromMnemonic(mnemonic, network, version);
  const secondNetwork = network === 'testnet' ? 'mainnet' : 'testnet';
  tonWallet.address = (0,tonCore/* toBase64Address */.vn)(tonWallet.address, false, secondNetwork);
  const account = {
    type: 'ton',
    mnemonicEncrypted,
    byChain: {
      ton: tonWallet
    }
  };
  const secondAccountId = await addAccount(secondNetwork, account, parseAccountId(accountId).id);
  return {
    accountId: secondAccountId,
    byChain: getAccountChains(account),
    network: secondNetwork
  };
}
function addressFromPublicKey(publicKey, network, version) {
  return auth_ton.getWalletFromKeys(publicKey, network, version);
}
async function importLedgerWallet(network, walletInfo) {
  const {
    publicKey,
    address,
    index,
    driver,
    deviceId,
    deviceName,
    version
  } = walletInfo;
  const accountId = await addAccount(network, {
    type: 'ledger',
    byChain: {
      ton: {
        address,
        publicKey,
        version,
        index
      }
    },
    driver,
    deviceId,
    deviceName
  });
  return {
    accountId,
    address,
    walletInfo
  };
}

// When multiple Ledger accounts are imported, they all are created simultaneously. This causes a race condition causing
// multiple accounts having the same id. `createTaskQueue(1)` forces the accounts to be imported sequentially.
const addAccountMutex = (0,schedulers/* createTaskQueue */.JL)(1);
async function addAccount(network, account, preferredId) {
  const accountId = await addAccountMutex.run(async () => {
    const accountId = await getNewAccountId(network, preferredId);
    await setAccountValue(accountId, 'accounts', account);
    return accountId;
  });
  addPollingAccount(accountId, account);
  return accountId;
}
async function removeNetworkAccounts(network) {
  removeNetworkPollingAccounts(network);
  await Promise.all([deactivateAllAccounts(), removeNetworkAccountsValue(network, 'accounts'), (0,api_environment/* getEnvironment */.u)().isDappSupported && removeNetworkDapps(network)]);
}
async function resetAccounts() {
  removeAllPollingAccounts();
  await Promise.all([deactivateAllAccounts(), storages_storage.removeItem('accounts'), (0,api_environment/* getEnvironment */.u)().isDappSupported && removeAllDapps(), tokenRepository.clear()]);
}
async function removeAccount(accountId, nextAccountId, newestActivityTimestamps) {
  removePollingAccount(accountId);
  await Promise.all([removeAccountValue(accountId, 'accounts'), (0,api_environment/* getEnvironment */.u)().isDappSupported && removeAccountDapps(accountId)]);
  await activateAccount(nextAccountId, newestActivityTimestamps);
}
async function changePassword(oldPassword, password) {
  for (const [accountId, account] of Object.entries(await fetchStoredAccounts())) {
    if (!('mnemonicEncrypted' in account)) continue;
    const mnemonic = await decryptMnemonic(account.mnemonicEncrypted, oldPassword);
    const encryptedMnemonic = await encryptMnemonic(mnemonic, password);
    await updateStoredAccount(accountId, {
      mnemonicEncrypted: encryptedMnemonic
    });
  }
}
async function importViewAccount(network, addressByChain) {
  try {
    const account = {
      type: 'view',
      byChain: {}
    };
    let title;
    let error;
    await Promise.all(Object.entries(addressByChain).map(async _ref => {
      let [_chain, address] = _ref;
      const chain = _chain;
      const wallet = await chains[chain].getWalletFromAddress(network, address);
      if ('error' in wallet) {
        error = {
          ...wallet,
          chain
        };
        return;
      }
      account.byChain[chain] = wallet.wallet;
      if (wallet.title) title = wallet.title;
    }));
    if (error) return error;
    const accountId = await addAccount(network, account);
    void activateAccount(accountId);
    return {
      accountId,
      title,
      byChain: getAccountChains(account)
    };
  } catch (err) {
    return (0,errors/* handleServerError */.QS)(err);
  }
}
async function importNewWalletVersion(accountId, version, isTestnetSubwalletId) {
  const {
    network
  } = parseAccountId(accountId);
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const newAccount = {
    ...account,
    byChain: {
      ton: auth_ton.getOtherVersionWallet(network, account.byChain.ton, version, isTestnetSubwalletId)
    }
  };
  const accounts = await fetchStoredAccounts();
  const existingAccount = Object.entries(accounts).find(_ref2 => {
    var _account$byChain$ton;
    let [, account] = _ref2;
    return ((_account$byChain$ton = account.byChain.ton) === null || _account$byChain$ton === void 0 ? void 0 : _account$byChain$ton.address) === newAccount.byChain.ton.address && account.type === newAccount.type;
  });
  if (existingAccount) {
    return {
      isNew: false,
      accountId: existingAccount[0]
    };
  }
  const ledger = account.type === 'ledger' ? {
    index: account.byChain.ton.index,
    driver: account.driver
  } : undefined;
  const newAccountId = await addAccount(network, newAccount);
  return {
    isNew: true,
    accountId: newAccountId,
    address: newAccount.byChain.ton.address,
    ledger
  };
}
;// ./src/api/methods/wallet.ts
/* provided dependency */ var methods_wallet_Buffer = __webpack_require__(48287)["Buffer"];









const wallet_ton = chains.ton;
async function wallet_fetchPrivateKey(accountId, password) {
  const account = await fetchStoredAccount(accountId);
  const privateKey = await fetchPrivateKey(accountId, password, account);
  return methods_wallet_Buffer.from(privateKey).toString('hex');
}
async function fetchMnemonic(accountId, password) {
  const account = await fetchStoredAccount(accountId);
  return getMnemonic(accountId, password, account);
}
function getMnemonicWordList() {
  return web.wordlists.default;
}
async function checkWorkerStorageIntegrity() {
  /*
    This method is intended to check if the worker storage is corrupted due to known
    behavior of browsers (at least Chromium-based ones).
    Several users reported that their storage was corrupted on Android too.
  */
  try {
    const accounts = await fetchStoredAccounts();
    return !!accounts && typeof accounts === 'object' && Object.keys(accounts).length > 0;
  } catch {
    return false;
  }
}
async function verifyPassword(password) {
  try {
    const [accountId, account] = (await getAccountWithMnemonic()) ?? [];
    if (!accountId || !account) {
      return false;
    }
    const mnemonic = await getMnemonic(accountId, password, account);
    return Boolean(mnemonic);
  } catch {
    return false;
  }
}
function confirmDappRequest(promiseId, password) {
  resolveDappPromise(promiseId, password);
}
function confirmDappRequestConnect(promiseId, data) {
  resolveDappPromise(promiseId, data);
}
function confirmDappRequestSendTransaction(promiseId, data) {
  resolveDappPromise(promiseId, data);
}
function confirmDappRequestSignData(promiseId, signedData) {
  resolveDappPromise(promiseId, signedData);
}
function cancelDappRequest(promiseId, reason) {
  rejectDappPromise(promiseId, reason);
}
async function wallet_getWalletSeqno(accountId, address) {
  const {
    network
  } = parseAccountId(accountId);
  if (!address) {
    ({
      address
    } = await fetchStoredWallet(accountId, 'ton'));
  }
  return wallet_ton.getWalletSeqno(network, address);
}
function fetchAddress(accountId, chain) {
  return fetchStoredAddress(accountId, chain);
}
function isWalletInitialized(network, address) {
  const chain = chains.ton;
  return chain.isAddressInitialized(network, address);
}
function methods_wallet_getWalletBalance(chain, network, address) {
  return chains[chain].getWalletBalance(network, address);
}
function wallet_getContractInfo(network, address) {
  const chain = chains.ton;
  return chain.getContractInfo(network, address);
}
function wallet_getWalletInfo(network, address) {
  const chain = chains.ton;
  return chain.getWalletInfo(network, address);
}
async function getAddressInfo(network, toAddress) {
  try {
    return await checkToAddress(network, toAddress);
  } catch (err) {
    return (0,errors/* handleServerError */.QS)(err);
  }
}
async function wallet_getWalletStateInit(accountId) {
  const wallet = await fetchStoredWallet(accountId, 'ton');
  return wallet_ton.getWalletStateInit(wallet).toBoc({
    idx: true,
    crc32: true
  }).toString('base64');
}
;// ./src/api/methods/nfts.ts






const {
  ton: nfts_ton
} = chains;
let nfts_onUpdate;
function initNfts(_onUpdate) {
  nfts_onUpdate = _onUpdate;
}
async function fetchNftsFromCollection(accountId, collectionAddress) {
  const account = await fetchStoredAccount(accountId);
  if (!account.byChain.ton) return;
  const nfts = await nfts_ton.getAccountNfts(accountId, {
    collectionAddress
  });
  nfts_onUpdate({
    type: 'updateNfts',
    accountId,
    nfts,
    shouldAppend: true
  });
}
function nfts_checkNftTransferDraft(options) {
  return nfts_ton.checkNftTransferDraft(options);
}
async function nfts_submitNftTransfers(accountId, password, nfts, toAddress, comment) {
  let totalRealFee = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0n;
  const {
    address: fromAddress
  } = await fetchStoredWallet(accountId, 'ton');
  const result = await nfts_ton.submitNftTransfers({
    accountId,
    password,
    nfts,
    toAddress,
    comment
  });
  if ('error' in result) {
    return result;
  }
  const realFeePerNft = (0,bigint/* bigintDivideToNumber */.fC)(totalRealFee, Object.keys(result.messages).length);
  const localActivities = createLocalTransactions(accountId, 'ton', result.messages.map((message, index) => ({
    id: result.msgHashNormalized,
    amount: 0n,
    // Regular NFT transfers should have no amount in the activity list
    fromAddress,
    toAddress,
    comment,
    fee: realFeePerNft,
    normalizedAddress: message.toAddress,
    slug: config/* TONCOIN */.Tu9.slug,
    externalMsgHashNorm: result.msgHashNormalized,
    nft: nfts === null || nfts === void 0 ? void 0 : nfts[index]
  })));
  return {
    ...result,
    activityIds: (0,iteratees/* extractKey */.JY)(localActivities, 'id')
  };
}
async function nfts_checkNftOwnership(accountId, nftAddress) {
  const account = await fetchStoredAccount(accountId);
  return account.byChain.ton && nfts_ton.checkNftOwnership(accountId, nftAddress);
}
;// ./src/api/methods/domains.ts





const {
  ton: domains_ton
} = chains;
function domains_checkDnsRenewalDraft(accountId, nfts) {
  const nftAddresses = (0,iteratees/* extractKey */.JY)(nfts, 'address');
  return domains_ton.checkDnsRenewalDraft(accountId, nftAddresses);
}
async function domains_submitDnsRenewal(accountId, password, nfts) {
  let realFee = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0n;
  const {
    address: fromAddress
  } = await fetchStoredWallet(accountId, 'ton');
  const nftByAddress = (0,iteratees/* buildCollectionByKey */.dU)(nfts, 'address');
  const results = [];
  for await (const {
    addresses,
    result
  } of domains_ton.submitDnsRenewal(accountId, password, Object.keys(nftByAddress))) {
    if ('error' in result) {
      results.push(result);
      continue;
    }
    const localActivities = createLocalTransactions(accountId, 'ton', addresses.map(address => {
      const nft = nftByAddress[address];
      return {
        id: result.msgHashNormalized,
        amount: 0n,
        fromAddress,
        toAddress: nft.address,
        fee: realFee / BigInt(nfts.length),
        normalizedAddress: nft.address,
        slug: config/* TONCOIN */.Tu9.slug,
        externalMsgHashNorm: result.msgHashNormalized,
        nft,
        type: 'dnsRenew'
      };
    }));
    results.push({
      activityIds: (0,iteratees/* extractKey */.JY)(localActivities, 'id')
    });
  }
  return results;
}
function domains_checkDnsChangeWalletDraft(accountId, nft, address) {
  return domains_ton.checkDnsChangeWalletDraft(accountId, nft.address, address);
}
async function domains_submitDnsChangeWallet(accountId, password, nft, address) {
  let realFee = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0n;
  const {
    address: walletAddress
  } = await fetchStoredWallet(accountId, 'ton');
  const result = await domains_ton.submitDnsChangeWallet(accountId, password, nft.address, address);
  if ('error' in result) {
    return result;
  }
  const [activity] = createLocalTransactions(accountId, 'ton', [{
    id: result.msgHashNormalized,
    amount: 0n,
    fromAddress: walletAddress,
    toAddress: nft.address,
    fee: realFee,
    normalizedAddress: nft.address,
    slug: config/* TONCOIN */.Tu9.slug,
    externalMsgHashNorm: result.msgHashNormalized,
    nft,
    type: 'dnsChangeAddress'
  }]);
  return {
    activityId: activity.id
  };
}
;// ./src/api/methods/tonConnect.ts






async function signTonProof(accountId, proof, password) {
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const signer = getSigner(accountId, account, password);
  const signature = await signer.signTonProof(proof);
  if ('error' in signature) return signature;
  return {
    signature: signature.toString('base64')
  };
}
async function tonConnect_signTransfers(accountId, messages) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  const {
    password,
    validUntil,
    vestingAddress
  } = options;
  const chain = chains.ton;
  const preparedMessages = messages.map(_ref => {
    var _getTokenBySlug;
    let {
      toAddress,
      amount,
      stateInit: stateInitBase64,
      rawPayload,
      payload
    } = _ref;
    return {
      toAddress,
      amount,
      payload: rawPayload ? core_dist.Cell.fromBase64(rawPayload) : undefined,
      stateInit: stateInitBase64 ? core_dist.Cell.fromBase64(stateInitBase64) : undefined,
      hints: {
        tokenAddress: (payload === null || payload === void 0 ? void 0 : payload.type) === 'tokens:transfer' ? (_getTokenBySlug = getTokenBySlug(payload.slug)) === null || _getTokenBySlug === void 0 ? void 0 : _getTokenBySlug.tokenAddress : undefined
      }
    };
  });
  return chain.signTransfers(accountId, preparedMessages, password, validUntil, vestingAddress);
}

/**
 * See https://docs.tonconsole.com/academy/sign-data for more details
 */
async function tonConnect_signData(accountId, dappUrl, payloadToSign, password) {
  const timestamp = Math.floor(Date.now() / 1000);
  const domain = new URL(dappUrl).host;
  const account = await fetchStoredChainAccount(accountId, 'ton');
  const signer = getSigner(accountId, account, password);
  const signature = await signer.signData(timestamp, domain, payloadToSign);
  if ('error' in signature) return signature;
  const result = {
    signature: signature.toString('base64'),
    address: account.byChain.ton.address,
    timestamp,
    domain,
    payload: payloadToSign
  };
  return result;
}
;// ./src/api/methods/prices.ts




async function fetchPriceHistory(slug, period) {
  let baseCurrency = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : config/* DEFAULT_PRICE_CURRENCY */.wOb;
  await tokensPreload.promise;
  const token = getTokenBySlug(slug);
  if (!token) {
    return [];
  }
  const assetId = token.chain === config/* TONCOIN */.Tu9.chain && token.tokenAddress ? token.tokenAddress : token.symbol;
  return callBackendGet(`/prices/chart/${assetId}`, {
    base: baseCurrency,
    period
  });
}
;// ./src/api/methods/notifications.ts



async function subscribeNotifications(props) {
  try {
    return await callBackendPost('/notifications/subscribe', props, {
      shouldRetry: true
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('subscribeNotifications', err);
    return (0,errors/* handleServerError */.QS)(err);
  }
}
async function unsubscribeNotifications(props) {
  try {
    return await callBackendPost('/notifications/unsubscribe', props, {
      shouldRetry: true
    });
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('unsubscribeNotifications', err);
    return (0,errors/* handleServerError */.QS)(err);
  }
}
;// ./src/api/methods/index.ts



















;// ./src/api/providers/worker/provider.ts




createPostMessageInterface(function (name, origin) {
  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }
  if (name === 'init') {
    return init(args[0], args[1]);
  } else {
    if (name.startsWith('tonConnect_')) {
      name = name.replace('tonConnect_', '');
      const method = tonConnect_namespaceObject[name];
      // @ts-ignore
      return method(...args);
    }
    const method = methods_namespaceObject[name];

    // @ts-ignore
    return method(...args);
  }
});

/***/ }),

/***/ 9705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Deferred)
/* harmony export */ });
class Deferred {
  promise;
  reject;
  resolve;
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
  static resolved(value) {
    const deferred = new Deferred();
    deferred.resolve(value);
    return deferred;
  }
}

/***/ }),

/***/ 10309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UX: () => (/* binding */ YEAR),
/* harmony export */   Z2: () => (/* binding */ SECOND)
/* harmony export */ });
/* unused harmony exports MINUTE, HOUR, DAY, formatRelativeHumanDateTime, formatHumanDay, formatFullDay, formatShortDay, formatTime, getCountDaysToDate, getDayStart, getDayStartAt, getMinuteStart */
/* harmony import */ var _withCache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19314);

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const YEAR = 365 * DAY;
const formatDayToStringWithCache = (0,_withCache__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(function (langCode, dayStartAt, noYear) {
  let monthFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'short';
  let noDay = arguments.length > 4 ? arguments[4] : undefined;
  let withTime = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  return new Date(dayStartAt).toLocaleString(langCode, {
    year: noYear ? undefined : 'numeric',
    month: monthFormat || undefined,
    day: noDay ? undefined : 'numeric',
    hour: withTime ? 'numeric' : undefined,
    minute: withTime ? 'numeric' : undefined,
    hourCycle: 'h23'
  });
});
function formatRelativeHumanDateTime() {
  let langCode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  let time = arguments.length > 1 ? arguments[1] : undefined;
  const total = time - Date.now();
  const minutes = Math.floor(total / 1000 / 60 % 60);
  const hours = Math.floor(total / (1000 * 3600) % 24);
  const days = Math.floor(total / 1000 / 3600 / 24);
  const rtf = new Intl.RelativeTimeFormat(langCode, {
    localeMatcher: 'best fit',
    numeric: 'always',
    style: 'long'
  });
  const result = [];
  if (days > 0) {
    const [daysPlural, daysValue] = rtf.formatToParts(days, 'day').reverse();
    result.push(`${daysValue.value}${daysPlural.value}`.replace(' ', '\u00A0'));
  }
  if (hours > 0) {
    const [hoursPlural, hoursValue] = rtf.formatToParts(hours, 'hour').reverse();
    result.push(`${hoursValue.value}${hoursPlural.value}`.replace(' ', '\u00A0'));
  }
  if (minutes > 0) {
    const [minutesPlural, minutesValue] = rtf.formatToParts(minutes, 'minute').reverse();
    result.push(`${minutesValue.value}${minutesPlural.value}`.replace(' ', '\u00A0'));
  }
  return result.join(' ');
}
function formatHumanDay(lang, datetime) {
  if (isToday(datetime)) {
    return lang('Today');
  }
  if (isYesterday(datetime)) {
    return lang('Yesterday');
  }
  return formatFullDay(lang.code, datetime);
}
function formatFullDay(langCode, datetime) {
  const date = new Date(datetime);
  const dayStartAt = getDayStartAt(date);
  const today = getDayStart(new Date());
  const noYear = date.getFullYear() === today.getFullYear();
  return formatDayToStringWithCache(langCode, dayStartAt, noYear, 'long');
}
function formatShortDay(langCode, datetime) {
  let withTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  let noYear = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  const date = new Date(datetime);
  const dayStartAt = getDayStartAt(date);
  const today = getDayStart(new Date());
  const todayStartAt = getDayStartAt(today);
  const noDate = withTime && dayStartAt === todayStartAt;
  const targetAt = withTime ? getMinuteStart(date).getTime() : dayStartAt;
  noYear ||= date.getFullYear() === today.getFullYear();
  return formatDayToStringWithCache(langCode, targetAt, noYear, !noDate && 'short', noDate, withTime);
}
function formatTime(datetime) {
  const date = new Date(datetime);
  return `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
}
function getCountDaysToDate(datetime) {
  const today = new Date();
  const date = datetime instanceof Date ? datetime : new Date(datetime);
  return Math.ceil((date.getTime() - today.getTime()) / DAY);
}
function getDayStart(datetime) {
  const date = new Date(datetime);
  date.setHours(0, 0, 0, 0);
  return date;
}
function getDayStartAt(datetime) {
  return getDayStart(datetime).getTime();
}
function getMinuteStart(datetime) {
  const date = new Date(datetime);
  date.setSeconds(0, 0);
  return date;
}
function isToday(datetime) {
  return getDayStartAt(new Date()) === getDayStartAt(new Date(datetime));
}
function isYesterday(datetime) {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  return getDayStartAt(yesterday) === getDayStartAt(new Date(datetime));
}

/***/ }),

/***/ 10428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   D: () => (/* binding */ ApiLiquidUnstakeMode)
/* harmony export */ });
/**
 * The `fee` field should contain the final (real) fee, because we want to show the real fee in local transactions
 */

/** 1 USD equivalent to the amount of the other currency, e.g. 1 USD = 0.00000866 BTC */

let ApiLiquidUnstakeMode = /*#__PURE__*/function (ApiLiquidUnstakeMode) {
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["Default"] = 0] = "Default";
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["Instant"] = 1] = "Instant";
  ApiLiquidUnstakeMode[ApiLiquidUnstakeMode["BestRate"] = 2] = "BestRate";
  return ApiLiquidUnstakeMode;
}({});

// Country codes from ISO-3166-1 spec

/** Each string value can be either an address or a domain name */

/***/ }),

/***/ 14235:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ generateUniqueId)
/* harmony export */ });
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

/***/ }),

/***/ 15340:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 19314:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ withCache)
/* harmony export */ });
const cache = new WeakMap();
function withCache(fn) {
  return function () {
    let fnCache = cache.get(fn);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const cacheKey = args.map(String).join('_');
    if (fnCache) {
      const cached = fnCache.get(cacheKey);
      if (cached) {
        return cached;
      }
    } else {
      fnCache = new Map();
      cache.set(fn, fnCache);
    }
    const newValue = fn(...args);
    fnCache.set(cacheKey, newValue);
    return newValue;
  };
}

/***/ }),

/***/ 23174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dn: () => (/* reexport safe */ _misc__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   KL: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.KL),
/* harmony export */   Nu: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.Nu),
/* harmony export */   QD: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.QD),
/* harmony export */   jc: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.jc),
/* harmony export */   jf: () => (/* reexport safe */ _errors__WEBPACK_IMPORTED_MODULE_1__.jf)
/* harmony export */ });
/* harmony import */ var _misc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10428);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56051);












/***/ }),

/***/ 24082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HE: () => (/* binding */ encodeExtensionMessage),
/* harmony export */   d$: () => (/* binding */ decodeExtensionMessage)
/* harmony export */ });
/* unused harmony export UNDEFINED_PREFIX */
/* harmony import */ var _bigint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);

const UNDEFINED_PREFIX = 'undefined:';
function extensionMessageReplacer(key, value) {
  if (value === undefined) {
    return `${UNDEFINED_PREFIX}marker`;
  }

  // Bigint is replaced by patching `toJSON` method

  return value;
}
function extensionMessageReviver(key, value) {
  // Handle bigint values
  if (typeof value === 'string' && value.startsWith(_bigint__WEBPACK_IMPORTED_MODULE_0__/* .BIGINT_PREFIX */ .tH)) {
    return BigInt(value.slice(_bigint__WEBPACK_IMPORTED_MODULE_0__/* .BIGINT_PREFIX */ .tH.length));
  }

  // Handle undefined values
  if (typeof value === 'string' && value.startsWith(UNDEFINED_PREFIX)) {
    return undefined;
  }
  return value;
}
function encodeExtensionMessage(data) {
  return JSON.stringify(data, extensionMessageReplacer);
}
function decodeExtensionMessage(data) {
  if (typeof data === 'string') {
    return JSON.parse(data, extensionMessageReviver);
  }
  return data;
}

/***/ }),

/***/ 24887:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "in": () => (/* binding */ dnsCategoryToBigInt),
  GK: () => (/* binding */ dnsResolve),
  Xy: () => (/* binding */ encodeDomain)
});

// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var dist = __webpack_require__(1307);
// EXTERNAL MODULE: ./src/api/chains/ton/constants.ts
var constants = __webpack_require__(3476);
// EXTERNAL MODULE: ./node_modules/@ton/crypto/dist/index.js
var crypto_dist = __webpack_require__(75269);
;// ./src/api/chains/ton/util/other.ts

function sha256BigInt(s) {
  return BigInt(`0x${(0,crypto_dist.sha256_sync)(s).toString('hex')}`);
}
;// ./src/api/chains/ton/util/dns.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];
/* Source https://github.com/toncenter/tonweb/blob/master/src/contract/dns/DnsUtils.js */




function dnsCategoryToBigInt(category) {
  if (!category) return 0n; // all categories
  return sha256BigInt(category);
}
function parseSmartContractAddressImpl(cell, prefix0, prefix1) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== prefix0 || byte1 !== prefix1) {
    throw new Error('Invalid dns record value prefix');
  }
  return parseAddress(slice);
}
function parseSmartContractAddressRecord(cell) {
  return parseSmartContractAddressImpl(cell, 0x9f, 0xd3);
}
function parseNextResolverRecord(cell) {
  return parseSmartContractAddressImpl(cell, 0xba, 0x93);
}
function parseStorageBagIdRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== 0x74 || byte1 !== 0x73) {
    throw new Error('Invalid dns record value prefix');
  }
  const buffer = slice.loadBuffer(4);
  return buffer.toString('hex');
}
function parseSiteRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 === 0xad || byte1 === 0x01) {
    return parseAdnlAddressRecord(cell);
  } else {
    return parseStorageBagIdRecord(cell);
  }
}
function parseAdnlAddressRecord(cell) {
  const slice = cell.asSlice();
  const byte0 = slice.loadUint(8);
  const byte1 = slice.loadUint(8);
  if (byte0 !== 0xad || byte1 !== 0x01) {
    throw new Error('Invalid dns record value prefix');
  }
  const buffer = slice.loadBuffer(4);
  return buffer.toString('hex');
}
async function dnsResolveImpl(client, dnsAddress, rawDomainBytes, category, oneStep) {
  const len = rawDomainBytes.length * 8;
  const domainCell = new dist.Builder().storeBuffer(rawDomainBytes).asCell();
  const categoryBigInt = dnsCategoryToBigInt(category);
  const {
    stack
  } = await client.callGetMethod(dist.Address.parse(dnsAddress), 'dnsresolve', [{
    type: 'slice',
    cell: domainCell
  }, {
    type: 'int',
    value: categoryBigInt
  }]);
  const resultLen = stack.readNumber();
  let cell;
  try {
    cell = stack.readCell();
  } catch (err) {
    // Do nothing
  }
  if (resultLen === 0) {
    return undefined; // domain cannot be resolved
  }
  if (resultLen % 8 !== 0) {
    throw new Error('domain split not at a component boundary');
  }
  // if (rawDomainBytes[resultLen] !== 0) {
  //     throw new Error('domain split not at a component boundary');
  // }
  if (resultLen > len) {
    throw new Error(`invalid response ${resultLen}/${len}`);
  } else if (resultLen === len) {
    if (category === constants/* DnsCategory */.kJ.DnsNextResolver) {
      return cell ? parseNextResolverRecord(cell) : undefined;
    } else if (category === constants/* DnsCategory */.kJ.Wallet) {
      return cell ? parseSmartContractAddressRecord(cell) : undefined;
    } else if (category === constants/* DnsCategory */.kJ.Site) {
      return cell ? parseSiteRecord(cell) : undefined;
    } else if (category === constants/* DnsCategory */.kJ.BagId) {
      return cell ? parseStorageBagIdRecord(cell) : undefined;
    } else {
      return cell;
    }
  } else if (!cell) {
    return undefined; // domain cannot be resolved
  } else {
    const nextAddress = parseNextResolverRecord(cell);
    if (oneStep) {
      if (category === constants/* DnsCategory */.kJ.DnsNextResolver) {
        return nextAddress;
      } else {
        return undefined;
      }
    } else {
      return dnsResolveImpl(client, nextAddress.toString(), rawDomainBytes.slice(resultLen / 8), category, false);
    }
  }
}

/** Encodes the domain in accordance with the TEP-81 standard */
function encodeDomain(domain) {
  if (!domain || !domain.length) {
    throw new Error('empty domain');
  }
  if (domain === '.') {
    return '';
  }
  domain = domain.toLowerCase();
  for (let i = 0; i < domain.length; i++) {
    if (domain.charCodeAt(i) <= 32) {
      throw new Error('bytes in range 0..32 are not allowed in domain names');
    }
  }
  for (let i = 0; i < domain.length; i++) {
    const s = domain.substring(i, i + 1);
    for (let c = 127; c <= 159; c++) {
      // another control codes range
      if (s === String.fromCharCode(c)) {
        throw new Error('bytes in range 127..159 are not allowed in domain names');
      }
    }
  }
  const arr = domain.split('.');
  arr.forEach(part => {
    if (!part.length) {
      throw new Error('domain name cannot have an empty component');
    }
  });
  return `${arr.reverse().join('\0')}\0`;
}
function dnsResolve(client, rootDnsAddress, domain, category, oneStep) {
  let rawDomain = encodeDomain(domain);
  if (rawDomain.length < 126) {
    rawDomain = `\0${rawDomain}`;
  }
  return dnsResolveImpl(client, rootDnsAddress, Buffer.from(rawDomain), category, oneStep);
}
function parseAddress(slice) {
  slice.loadUint(3);
  let n = slice.loadUintBig(8);
  if (n > 127n) {
    // Maybe it's not necessary?
    n -= 256n;
  }
  const hashPart = slice.loadUintBig(256);
  if (`${n.toString(10)}:${hashPart.toString(16)}` === '0:0') {
    return undefined;
  }
  const s = `${n.toString(10)}:${hashPart.toString(16).padStart(64, '0')}`;
  return dist.Address.parse(s);
}

/***/ }),

/***/ 31481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APY: () => (/* binding */ NOTCOIN_FORWARD_TON_AMOUNT),
/* harmony export */   AuB: () => (/* binding */ SWAP_API_VERSION),
/* harmony export */   BV6: () => (/* binding */ ETHENA_STAKING_VAULT),
/* harmony export */   C39: () => (/* binding */ APP_NAME),
/* harmony export */   FHx: () => (/* binding */ DEBUG_ALERT_MSG),
/* harmony export */   Guj: () => (/* binding */ APP_ENV),
/* harmony export */   HGV: () => (/* binding */ TONCENTER_TESTNET_KEY),
/* harmony export */   HUv: () => (/* binding */ BRILLIANT_API_BASE_URL),
/* harmony export */   InW: () => (/* binding */ DIESEL_ADDRESS),
/* harmony export */   Irq: () => (/* binding */ TONCENTER_MAINNET_KEY),
/* harmony export */   Kih: () => (/* binding */ MAIN_ACCOUNT_ID),
/* harmony export */   KmP: () => (/* binding */ NOTCOIN_VOUCHERS_ADDRESS),
/* harmony export */   Kzb: () => (/* binding */ LIQUID_JETTON),
/* harmony export */   MVx: () => (/* binding */ DEBUG_MORE),
/* harmony export */   N7B: () => (/* binding */ UNSTAKE_TON_GRACE_PERIOD),
/* harmony export */   NFS: () => (/* binding */ VALIDATION_PERIOD_MS),
/* harmony export */   Oig: () => (/* binding */ DEBUG),
/* harmony export */   OuE: () => (/* binding */ IS_STAKING_DISABLED),
/* harmony export */   PcM: () => (/* binding */ PRIVATE_KEY_HEX_LENGTH),
/* harmony export */   Pcx: () => (/* binding */ WINDOW_PROVIDER_CHANNEL),
/* harmony export */   Pjb: () => (/* binding */ NFT_FRAGMENT_GIFT_IMAGE_TO_URL_REGEX),
/* harmony export */   Q$0: () => (/* binding */ ELECTRON_TONCENTER_TESTNET_KEY),
/* harmony export */   Qxf: () => (/* binding */ SSE_BRIDGE_URL),
/* harmony export */   RB: () => (/* binding */ TON_USDT_TESTNET_SLUG),
/* harmony export */   RoE: () => (/* binding */ DEFAULT_WALLET_VERSION),
/* harmony export */   SKs: () => (/* binding */ TONAPIIO_TESTNET_URL),
/* harmony export */   TI6: () => (/* binding */ IS_CORE_WALLET),
/* harmony export */   TUC: () => (/* binding */ DEFAULT_RETRIES),
/* harmony export */   Tu9: () => (/* binding */ TONCOIN),
/* harmony export */   UMQ: () => (/* binding */ IS_CAPACITOR),
/* harmony export */   VG8: () => (/* binding */ TON_TSUSDE),
/* harmony export */   WRE: () => (/* binding */ DEFAULT_ERROR_PAUSE),
/* harmony export */   WVU: () => (/* binding */ NOTCOIN_EXCHANGERS),
/* harmony export */   X1K: () => (/* binding */ ONE_TON),
/* harmony export */   X6R: () => (/* binding */ TELEGRAM_GIFTS_SUPER_COLLECTION),
/* harmony export */   X7L: () => (/* binding */ DNS_IMAGE_GEN_URL),
/* harmony export */   X7T: () => (/* binding */ TRX),
/* harmony export */   _$E: () => (/* binding */ PROXY_API_BASE_URL),
/* harmony export */   _J8: () => (/* binding */ TONCENTER_MAINNET_URL),
/* harmony export */   aPk: () => (/* binding */ STAKING_POOLS),
/* harmony export */   cSq: () => (/* binding */ DEFAULT_TIMEOUT),
/* harmony export */   dGN: () => (/* binding */ SWAP_CROSSCHAIN_SLUGS),
/* harmony export */   dL4: () => (/* binding */ MIN_ACTIVE_STAKING_REWARDS),
/* harmony export */   dqR: () => (/* binding */ DEFAULT_FEE),
/* harmony export */   eO4: () => (/* binding */ IPFS_GATEWAY_BASE_URL),
/* harmony export */   eZ2: () => (/* binding */ POPULAR_WALLET_VERSIONS),
/* harmony export */   eaP: () => (/* binding */ TONCENTER_ACTIONS_VERSION),
/* harmony export */   gR8: () => (/* binding */ NFT_BATCH_SIZE),
/* harmony export */   gY_: () => (/* binding */ TONCONNECT_PROTOCOL_VERSION),
/* harmony export */   gmk: () => (/* binding */ IS_AIR_APP),
/* harmony export */   gs5: () => (/* binding */ TON_DNS_ZONES),
/* harmony export */   hL1: () => (/* binding */ IS_EXTENSION),
/* harmony export */   hl5: () => (/* binding */ APP_VERSION),
/* harmony export */   iAh: () => (/* binding */ IS_BIP39_MNEMONIC_ENABLED),
/* harmony export */   iLw: () => (/* binding */ TON_USDT_MAINNET_SLUG),
/* harmony export */   iQn: () => (/* binding */ LEDGER_WALLET_VERSIONS),
/* harmony export */   kNZ: () => (/* binding */ RE_LINK_TEMPLATE),
/* harmony export */   lHX: () => (/* binding */ TONAPIIO_MAINNET_URL),
/* harmony export */   lfO: () => (/* binding */ TOKEN_INFO),
/* harmony export */   oWZ: () => (/* binding */ STON_PTON_ADDRESS),
/* harmony export */   pV9: () => (/* binding */ BURN_ADDRESS),
/* harmony export */   pyR: () => (/* binding */ TONCENTER_TESTNET_URL),
/* harmony export */   q5n: () => (/* binding */ NFT_FRAGMENT_COLLECTIONS),
/* harmony export */   qL: () => (/* binding */ MTW_CARDS_COLLECTION),
/* harmony export */   qMf: () => (/* binding */ LIQUID_POOL),
/* harmony export */   rQT: () => (/* binding */ INDEXED_DB_STORE_NAME),
/* harmony export */   rcB: () => (/* binding */ RE_TG_BOT_MENTION),
/* harmony export */   tKX: () => (/* binding */ IS_TELEGRAM_APP),
/* harmony export */   vPi: () => (/* binding */ INDEXED_DB_NAME),
/* harmony export */   wOb: () => (/* binding */ DEFAULT_PRICE_CURRENCY),
/* harmony export */   wpN: () => (/* binding */ TON_USDE),
/* harmony export */   xlJ: () => (/* binding */ ELECTRON_TONCENTER_MAINNET_KEY),
/* harmony export */   xrY: () => (/* binding */ MYCOIN_STAKING_POOL),
/* harmony export */   yTE: () => (/* binding */ SWAP_FEE_ADDRESS),
/* harmony export */   zll: () => (/* binding */ CHAIN_CONFIG)
/* harmony export */ });
/* unused harmony exports APP_COMMIT_HASH, APP_ENV_MARKER, EXTENSION_NAME, EXTENSION_DESCRIPTION, DEBUG_API, DEBUG_VIEW_ACCOUNTS, IS_PRODUCTION, IS_TEST, IS_PERF, IS_FIREFOX_EXTENSION, IS_OPERA_EXTENSION, IS_PACKAGED_ELECTRON, IS_ANDROID_DIRECT, ELECTRON_HOST_URL, INACTIVE_MARKER, PRODUCTION_URL, BETA_URL, APP_INSTALL_URL, APP_REPO_URL, BASE_URL, BOT_USERNAME, STRICTERDOM_ENABLED, PIN_LENGTH, NATIVE_BIOMETRICS_USERNAME, NATIVE_BIOMETRICS_SERVER, MNEMONIC_COUNT, MNEMONIC_COUNTS, MNEMONIC_CHECK_COUNT, MOBILE_SCREEN_MAX_WIDTH, ANIMATION_END_DELAY, ANIMATED_STICKER_TINY_ICON_PX, ANIMATED_STICKER_ICON_PX, ANIMATED_STICKER_TINY_SIZE_PX, ANIMATED_STICKER_SMALL_SIZE_PX, ANIMATED_STICKER_MIDDLE_SIZE_PX, ANIMATED_STICKER_DEFAULT_PX, ANIMATED_STICKER_BIG_SIZE_PX, ANIMATED_STICKER_HUGE_SIZE_PX, DEFAULT_PORTRAIT_WINDOW_SIZE, DEFAULT_LANDSCAPE_WINDOW_SIZE, DEFAULT_LANDSCAPE_ACTION_TAB_ID, TRANSACTION_ADDRESS_SHIFT, WHOLE_PART_DELIMITER, DEFAULT_SLIPPAGE_VALUE, GLOBAL_STATE_CACHE_DISABLED, GLOBAL_STATE_CACHE_KEY, ANIMATION_LEVEL_MIN, ANIMATION_LEVEL_MED, ANIMATION_LEVEL_MAX, ANIMATION_LEVEL_DEFAULT, THEME_DEFAULT, TRON_MAINNET_API_URL, TRON_TESTNET_API_URL, FRACTION_DIGITS, SHORT_FRACTION_DIGITS, MAX_PUSH_NOTIFICATIONS_ACCOUNT_COUNT, SUPPORT_USERNAME, MTW_TIPS_CHANNEL_NAME, NFT_MARKETPLACE_TITLES, MTW_STATIC_BASE_URL, MTW_CARDS_BASE_URL, MTW_CARDS_MINT_BASE_URL, MYTONWALLET_PROMO_URL, MYTONWALLET_MULTISEND_DAPP_URL, TELEGRAM_WEB_URL, NFT_MARKETPLACE_URL, NFT_MARKETPLACE_TITLE, GETGEMS_BASE_MAINNET_URL, GETGEMS_BASE_TESTNET_URL, EMPTY_HASH_VALUE, IFRAME_WHITELIST, SUBPROJECT_URL_MASK, CHANGELLY_SUPPORT_EMAIL, CHANGELLY_LIVE_CHAT_URL, CHANGELLY_SECURITY_EMAIL, CHANGELLY_TERMS_OF_USE, CHANGELLY_PRIVACY_POLICY, CHANGELLY_AML_KYC, CHANGELLY_WAITING_DEADLINE, PROXY_HOSTS, TINY_TRANSFER_MAX_COST, IMAGE_CACHE_NAME, LANG_CACHE_NAME, LANG_LIST, STAKING_MIN_AMOUNT, NOMINATORS_STAKING_MIN_AMOUNT, TONCONNECT_WALLET_JSBRIDGE_KEY, EMBEDDED_DAPP_BRIDGE_CHANNEL, MTW_CARDS_WEBSITE, TON_DNS_COLLECTION, TON_DNS_RENEWAL_WARNING_DAYS, TON_DNS_RENEWAL_NFT_WARNING_DAYS, MYCOIN, MYCOIN_TESTNET, TRC20_USDT_MAINNET_SLUG, TRC20_USDT_TESTNET_SLUG, STAKED_TON_SLUG, STAKED_MYCOIN_SLUG, TRX_SWAP_COUNT_FEE_ADDRESS, ETHENA_STAKING_MIN_AMOUNT, ETHENA_ELIGIBILITY_CHECK_URL, STON_PTON_SLUG, TON_USDT, ALL_STAKING_POOLS, DEFAULT_ENABLED_TOKEN_SLUGS, DEFAULT_ENABLED_TOKEN_COUNT, PRIORITY_TOKEN_SLUGS, TOKEN_WITH_LABEL, INIT_SWAP_ASSETS, DEFAULT_TRX_SWAP_FIRST_TOKEN_SLUG, DEFAULT_SWAP_FIRST_TOKEN_SLUG, DEFAULT_SWAP_SECOND_TOKEN_SLUG, DEFAULT_TRANSFER_TOKEN_SLUG, DEFAULT_CEX_SWAP_SECOND_TOKEN_SLUG, SWAP_DEX_LABELS, MULTITAB_DATA_CHANNEL_NAME, ACTIVE_TAB_STORAGE_KEY, WINDOW_PROVIDER_PORT, SHOULD_SHOW_ALL_ASSETS_AND_ACTIVITY, PORTRAIT_MIN_ASSETS_TAB_VIEW, LANDSCAPE_MIN_ASSETS_TAB_VIEW, CURRENCIES, HISTORY_PERIODS, BROWSER_HISTORY_LIMIT, BURN_CHUNK_DURATION_APPROX_SEC, CLAIM_ADDRESS, CLAIM_AMOUNT, CLAIM_COMMENT, MINT_CARD_ADDRESS, MINT_CARD_COMMENT, MINT_CARD_REFUND_COMMENT, STARS_SYMBOL, GIVEAWAY_CHECKIN_URL, AUTOLOCK_OPTIONS_LIST, AUTO_CONFIRM_DURATION_MINUTES, PRICELESS_TOKEN_HASHES, STAKED_TOKEN_SLUGS, DEFAULT_OUR_SWAP_FEE, DEFAULT_STAKING_STATE, DEFAULT_NOMINATORS_STAKING_STATE, JVAULT_URL, HELP_CENTER_URL, DEFAULT_AUTOLOCK_OPTION, WRONG_ATTEMPTS_BEFORE_LOG_OUT_SUGGESTION, UNKNOWN_TOKEN, FALLBACK_BASE_CURRENCY_RATES */
/* provided dependency */ var process = __webpack_require__(65606);
const APP_ENV = "development";
const IS_CORE_WALLET = "false" === '1';
const APP_NAME =  false || (IS_CORE_WALLET ? 'TON Wallet' : 'MyTonWallet');
const APP_VERSION = "4.1.6";
const APP_COMMIT_HASH = (/* unused pure expression or super */ null && ("15df0c25407924611d501aa5fc7fb1582f3d3ff9"));
const APP_ENV_MARKER = APP_ENV === 'staging' ? 'Beta' : APP_ENV === 'development' ? 'Dev' : undefined;
const EXTENSION_NAME = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'TON Wallet' : 'MyTonWallet · My TON Wallet'));
const EXTENSION_DESCRIPTION = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'Set up your own TON Wallet on The Open Network'
// eslint-disable-next-line @stylistic/max-len
: 'The most feature-rich TON+TRON wallet: multi-accounts, multi-send, Telegram Gifts and other collectibles, TON DNS+Proxy, and more.'));
const DEBUG = APP_ENV !== 'production' && APP_ENV !== 'perf' && APP_ENV !== 'test';
const DEBUG_MORE = false;
const DEBUG_API = false;
const DEBUG_VIEW_ACCOUNTS = false;
const IS_PRODUCTION = APP_ENV === 'production';
const IS_TEST = APP_ENV === 'test';
const IS_PERF = APP_ENV === 'perf';
const IS_EXTENSION = "" === '1';
const IS_FIREFOX_EXTENSION = (/* unused pure expression or super */ null && ("false" === '1'));
const IS_OPERA_EXTENSION = process.env.IS_OPERA_EXTENSION === '1';
const IS_PACKAGED_ELECTRON = "false" === '1';
const IS_CAPACITOR = "false" === '1';
const IS_ANDROID_DIRECT = (/* unused pure expression or super */ null && ("false" === '1'));
const IS_AIR_APP = "false" === '1';
const IS_TELEGRAM_APP = "1" === '1';
const ELECTRON_HOST_URL = 'https://dumb-host';
const INACTIVE_MARKER = '[Inactive]';
const PRODUCTION_URL = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'https://wallet.ton.org' : 'https://mytonwallet.app'));
const BETA_URL = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'https://beta.wallet.ton.org' : 'https://beta.mytonwallet.app'));
const APP_INSTALL_URL = 'https://get.mytonwallet.io/';
const APP_REPO_URL = 'https://github.com/mytonwallet-org/mytonwallet';
const BASE_URL = (/* unused pure expression or super */ null && ("https://mytonwallet.app"));
const BOT_USERNAME = (/* unused pure expression or super */ null && ( false || 'MyTonWalletBot'));
const SWAP_FEE_ADDRESS =  false || 'UQDUkQbpTVIgt7v66-JTFR-3-eXRFz_4V66F-Ufn6vOg0GOp';
const DIESEL_ADDRESS =  false || 'UQC9lQOaEHC6YASiJJ2NrKEOlITMMQmc8j0_iZEHy-4sl3tG';
const STRICTERDOM_ENABLED = DEBUG && !IS_PACKAGED_ELECTRON;
const DEBUG_ALERT_MSG = 'Shoot!\nSomething went wrong, please see the error details in Dev Tools Console.';
const PIN_LENGTH = 4;
const NATIVE_BIOMETRICS_USERNAME = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'TonWallet' : 'MyTonWallet'));
const NATIVE_BIOMETRICS_SERVER = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'https://wallet.ton.org' : 'https://mytonwallet.app'));
const IS_BIP39_MNEMONIC_ENABLED = !IS_CORE_WALLET;
const MNEMONIC_COUNT = 24;
const MNEMONIC_COUNTS = (/* unused pure expression or super */ null && (IS_BIP39_MNEMONIC_ENABLED ? [12, 24] : [24]));
const PRIVATE_KEY_HEX_LENGTH = 64;
const MNEMONIC_CHECK_COUNT = 3;
const MOBILE_SCREEN_MAX_WIDTH = 700; // px

const ANIMATION_END_DELAY = 50;
const ANIMATED_STICKER_TINY_ICON_PX = 16;
const ANIMATED_STICKER_ICON_PX = 30;
const ANIMATED_STICKER_TINY_SIZE_PX = 70;
const ANIMATED_STICKER_SMALL_SIZE_PX = 110;
const ANIMATED_STICKER_MIDDLE_SIZE_PX = 120;
const ANIMATED_STICKER_DEFAULT_PX = 150;
const ANIMATED_STICKER_BIG_SIZE_PX = 156;
const ANIMATED_STICKER_HUGE_SIZE_PX = 192;
const DEFAULT_PORTRAIT_WINDOW_SIZE = {
  width: 368,
  height: 770
};
const DEFAULT_LANDSCAPE_WINDOW_SIZE = {
  width: 980,
  height: 788
};
const DEFAULT_LANDSCAPE_ACTION_TAB_ID = 0;
const TRANSACTION_ADDRESS_SHIFT = 4;
const WHOLE_PART_DELIMITER = ' '; // https://www.compart.com/en/unicode/U+202F

const DEFAULT_SLIPPAGE_VALUE = 5;
const GLOBAL_STATE_CACHE_DISABLED = false;
const GLOBAL_STATE_CACHE_KEY = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tonwallet-global-state' : 'mytonwallet-global-state'));
const ANIMATION_LEVEL_MIN = 0;
const ANIMATION_LEVEL_MED = 1;
const ANIMATION_LEVEL_MAX = 2;
const ANIMATION_LEVEL_DEFAULT = (/* unused pure expression or super */ null && (ANIMATION_LEVEL_MAX));
const THEME_DEFAULT = 'system';
const MAIN_ACCOUNT_ID = '0-ton-mainnet';
const TONCENTER_MAINNET_URL = "https://toncenter.mytonwallet.org" || 0;
const TONCENTER_MAINNET_KEY = "";
const ELECTRON_TONCENTER_MAINNET_KEY = "";
const TONAPIIO_MAINNET_URL = "https://tonapiio.mytonwallet.org" || 0;
const TONCENTER_TESTNET_URL = "https://toncenter-testnet.mytonwallet.org" || 0;
const TONCENTER_TESTNET_KEY = "cd6d372885d0ebc7bbd92d55f3d3121068ab75daac4ca6192e966106e3ff10d3";
const ELECTRON_TONCENTER_TESTNET_KEY = "";
const TONAPIIO_TESTNET_URL = "https://tonapiio-testnet.mytonwallet.org" || 0;
const BRILLIANT_API_BASE_URL =  false || 'https://api.mytonwallet.org';
const PROXY_API_BASE_URL =  false || 'https://api.mytonwallet.org/proxy';
const IPFS_GATEWAY_BASE_URL = 'https://ipfs.io/ipfs/';
const SSE_BRIDGE_URL = 'https://tonconnectbridge.mytonwallet.org/bridge/';
const TRON_MAINNET_API_URL =  false || 'https://tronapi.mytonwallet.org';
const TRON_TESTNET_API_URL =  false || 'https://api.shasta.trongrid.io';
const FRACTION_DIGITS = 9;
const SHORT_FRACTION_DIGITS = 2;
const MAX_PUSH_NOTIFICATIONS_ACCOUNT_COUNT = 3;
const SUPPORT_USERNAME = 'mysupport';
const MTW_TIPS_CHANNEL_NAME = {
  en: 'MyTonWalletTips',
  ru: 'MyTonWalletTipsRu'
};
const NFT_MARKETPLACE_TITLES = {
  getgems: 'Getgems',
  fragment: 'Fragment'
};
const MTW_STATIC_BASE_URL = 'https://static.mytonwallet.org';
const MTW_CARDS_BASE_URL = (/* unused pure expression or super */ null && (`${MTW_STATIC_BASE_URL}/cards/`));
const MTW_CARDS_MINT_BASE_URL = (/* unused pure expression or super */ null && (`${MTW_STATIC_BASE_URL}/mint-cards/`));
const MYTONWALLET_PROMO_URL = 'https://mytonwallet.io/';
const MYTONWALLET_MULTISEND_DAPP_URL = 'https://multisend.mytonwallet.io/';
const TELEGRAM_WEB_URL = 'https://web.telegram.org/a/';
const NFT_MARKETPLACE_URL = 'https://getgems.io/';
const NFT_MARKETPLACE_TITLE = NFT_MARKETPLACE_TITLES.getgems;
const GETGEMS_BASE_MAINNET_URL = 'https://getgems.io/';
const GETGEMS_BASE_TESTNET_URL = 'https://testnet.getgems.io/';
const EMPTY_HASH_VALUE = 'NOHASH';
const IFRAME_WHITELIST = (/* unused pure expression or super */ null && (['http://localhost:*', 'https://tonscan.org']));
const SUBPROJECT_URL_MASK = 'https://*.mytonwallet.io';
const CHANGELLY_SUPPORT_EMAIL = 'support@changelly.com';
const CHANGELLY_LIVE_CHAT_URL = 'https://changelly.com/';
const CHANGELLY_SECURITY_EMAIL = 'security@changelly.com';
const CHANGELLY_TERMS_OF_USE = 'https://changelly.com/terms-of-use';
const CHANGELLY_PRIVACY_POLICY = 'https://changelly.com/privacy-policy';
const CHANGELLY_AML_KYC = 'https://changelly.com/aml-kyc';
const CHANGELLY_WAITING_DEADLINE = (/* unused pure expression or super */ null && (3 * 60 * 60 * 1000)); // 3 hours

const PROXY_HOSTS = (/* unused pure expression or super */ null && ("tonproxy.io:38080 tonproxy.io:38081 tonproxy.io:38082"));
const TINY_TRANSFER_MAX_COST = 0.01;
const IMAGE_CACHE_NAME = 'mtw-image';
const LANG_CACHE_NAME = 'mtw-lang-234';
const LANG_LIST = [{
  langCode: 'en',
  name: 'English',
  nativeName: 'English',
  rtl: false
}, {
  langCode: 'es',
  name: 'Spanish',
  nativeName: 'Español',
  rtl: false
}, {
  langCode: 'ru',
  name: 'Russian',
  nativeName: 'Русский',
  rtl: false
}, {
  langCode: 'zh-Hans',
  name: 'Chinese (Simplified)',
  nativeName: '简体',
  rtl: false
}, {
  langCode: 'zh-Hant',
  name: 'Chinese (Traditional)',
  nativeName: '繁體',
  rtl: false
}, {
  langCode: 'tr',
  name: 'Turkish',
  nativeName: 'Türkçe',
  rtl: false
}, {
  langCode: 'de',
  name: 'German',
  nativeName: 'Deutsch',
  rtl: false
}, {
  langCode: 'th',
  name: 'Thai',
  nativeName: 'ไทย',
  rtl: false
}, {
  langCode: 'uk',
  name: 'Ukrainian',
  nativeName: 'Українська',
  rtl: false
}, {
  langCode: 'pl',
  name: 'Polish',
  nativeName: 'Polski',
  rtl: false
}];
const IS_STAKING_DISABLED = IS_CORE_WALLET;
const VALIDATION_PERIOD_MS = 65_536_000; // 18.2 h.
const ONE_TON = 1_000_000_000n;
const DEFAULT_FEE = 15_000_000n; // 0.015 TON
const UNSTAKE_TON_GRACE_PERIOD = 20 * 60 * 1000; // 20 m.

const STAKING_POOLS =  false ? 0 : [];
const LIQUID_POOL =  false || 'EQD2_4d91M4TVbEBVyBF8J1UwpMJc361LKVCz6bBlffMW05o';
const LIQUID_JETTON =  false || 'EQCqC6EhRJ_tpWngKxL6dV0k6DSnRUrs9GSVkLbfdCqsj6TE';
const STAKING_MIN_AMOUNT = (/* unused pure expression or super */ null && (ONE_TON));
const NOMINATORS_STAKING_MIN_AMOUNT = 10_000n * ONE_TON;
const MIN_ACTIVE_STAKING_REWARDS = 100_000_000n; // 0.1 MY

const TONCONNECT_PROTOCOL_VERSION = 2;
const TONCONNECT_WALLET_JSBRIDGE_KEY = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tonwallet' : 'mytonwallet'));
const EMBEDDED_DAPP_BRIDGE_CHANNEL = 'embedded-dapp-bridge';
const NFT_FRAGMENT_COLLECTIONS = ['0:0e41dc1dc3c9067ed24248580e12b3359818d83dee0304fabcf80845eafafdb2',
// Anonymous Telegram Numbers
'0:80d78a35f955a14b679faa887ff4cd5bfc0f43b4a4eea2a7e6927f3701b273c2' // Telegram Usernames
];
const NFT_FRAGMENT_GIFT_IMAGE_TO_URL_REGEX = /^https?:\/\/nft\.(fragment\.com\/gift\/[\w-]+-\d+)\.\w+$/i;
const TELEGRAM_GIFTS_SUPER_COLLECTION = 'super:telegram-gifts';
const MTW_CARDS_WEBSITE = 'https://cards.mytonwallet.io';
const MTW_CARDS_COLLECTION = 'EQCQE2L9hfwx1V8sgmF9keraHx1rNK9VmgR1ctVvINBGykyM';
const TON_DNS_COLLECTION = 'EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz';
const TON_DNS_RENEWAL_WARNING_DAYS = 14;
const TON_DNS_RENEWAL_NFT_WARNING_DAYS = 30;
const TONCOIN = {
  name: 'Toncoin',
  symbol: 'TON',
  slug: 'toncoin',
  decimals: 9,
  chain: 'ton',
  cmcSlug: 'toncoin'
};
const TRX = {
  name: 'TRON',
  symbol: 'TRX',
  slug: 'trx',
  decimals: 6,
  chain: 'tron',
  cmcSlug: 'tron'
};
const MYCOIN = {
  name: 'MyTonWallet Coin',
  symbol: 'MY',
  slug: 'ton-eqcfvnlrbn',
  decimals: 9,
  chain: 'ton',
  minterAddress: 'EQCFVNlRb-NHHDQfv3Q9xvDXBLJlay855_xREsq5ZDX6KN-w'
};
const MYCOIN_TESTNET = {
  ...MYCOIN,
  slug: 'ton-kqawlxpebw',
  minterAddress: 'kQAWlxpEbwhCDFX9gp824ee2xVBhAh5VRSGWfbNFDddAbQoQ'
};
const CHAIN_CONFIG = {
  ton: {
    title: 'TON',
    isMemoSupported: true,
    isDnsSupported: true,
    isDepositLinkSupported: true,
    canBuyWithCardInRussia: true,
    isTransferCommentSupported: true,
    addressRegex: /^([-\w_]{48}|0:[\da-h]{64})$/i,
    addressPrefixRegex: /^([-\w_]{1,48}|0:[\da-h]{0,64})$/i,
    nativeToken: TONCOIN,
    doesBackendSocketSupport: true
  },
  tron: {
    title: 'TRON',
    isMemoSupported: false,
    isDnsSupported: false,
    isDepositLinkSupported: false,
    canBuyWithCardInRussia: false,
    isTransferCommentSupported: false,
    addressRegex: /^T[1-9A-HJ-NP-Za-km-z]{33}$/,
    addressPrefixRegex: /^T[1-9A-HJ-NP-Za-km-z]{0,33}$/,
    nativeToken: TRX,
    doesBackendSocketSupport: true,
    mainnet: {
      apiUrl: TRON_MAINNET_API_URL,
      usdtAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t'
    },
    testnet: {
      apiUrl: TRON_TESTNET_API_URL,
      usdtAddress: 'TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs'
    }
  }
};
const TRC20_USDT_MAINNET_SLUG = 'tron-tr7nhqjekq';
const TRC20_USDT_TESTNET_SLUG = 'tron-tg3xxyexbk';
const TON_USDT_MAINNET_SLUG = 'ton-eqcxe6mutq';
const TON_USDT_TESTNET_SLUG = 'ton-kqd0gkbm8z'; // Where to get this token: https://t.me/testgiver_ton_usdt_bot
const STAKED_TON_SLUG = 'ton-eqcqc6ehrj';
const STAKED_MYCOIN_SLUG = 'ton-eqcbzvsfwq';
const TRX_SWAP_COUNT_FEE_ADDRESS = 'TW2LXSebZ7Br1zHaiA2W1zRojDkDwjGmpw';
const MYCOIN_STAKING_POOL = 'EQC3roTiRRsoLzfYVK7yVVoIZjTEqAjQU3ju7aQ7HWTVL5o5';
const ETHENA_STAKING_VAULT = 'EQChGuD1u0e7KUWHH5FaYh_ygcLXhsdG2nSHPXHW8qqnpZXW';
const ETHENA_STAKING_MIN_AMOUNT = 1_000_000; // 1 USDe
// eslint-disable-next-line @stylistic/max-len
const ETHENA_ELIGIBILITY_CHECK_URL = 'https://t.me/id_app/start?startapp=cQeewNnc3pVphUcwY63WruKMQDpgePd1E7eMVoqphMZAdGoU9jwS4qRqrM1kSeaqrAiiDiC3EYAJPwZDGWqxZpw5vtGxmHma59XEt';

// In cross-chain swaps, only a few TON/TRON tokens are available.
// It’s not optimal to request swap history for all the others.
const SWAP_CROSSCHAIN_SLUGS = new Set([TONCOIN.slug, TON_USDT_MAINNET_SLUG, TRX.slug, TRC20_USDT_MAINNET_SLUG]);
const STON_PTON_ADDRESS = 'EQCM3B12QK1e4yZSf8GtBRT0aLMNyEsBc_DhVfRRtOEffLez';
const STON_PTON_SLUG = 'ton-eqcm3b12qk';
const DNS_IMAGE_GEN_URL = 'https://dns-image.mytonwallet.org/img?d=';
const TRC20_USDT = {
  name: 'Tether USD',
  symbol: 'USDT',
  decimals: 6,
  chain: 'tron'
};
const TON_USDT = {
  name: 'Tether USD',
  symbol: 'USD₮',
  chain: 'ton',
  slug: TON_USDT_MAINNET_SLUG,
  decimals: 6,
  tokenAddress: 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs'
};
const TON_USDE = {
  name: 'Ethena USDe',
  symbol: 'USDe',
  chain: 'ton',
  tokenAddress: 'EQAIb6KmdfdDR7CN1GBqVJuP25iCnLKCvBlJ07Evuu2dzP5f',
  slug: 'ton-eqaib6kmdf',
  decimals: 6,
  // eslint-disable-next-line @stylistic/max-len
  image: 'https://imgproxy.toncenter.com/binMwUmcnFtjvgjp4wSEbsECXwfXUwbPkhVvsvpubNw/pr:small/aHR0cHM6Ly9tZXRhZGF0YS5sYXllcnplcm8tYXBpLmNvbS9hc3NldHMvVVNEZS5wbmc'
};
const TON_TSUSDE = {
  name: 'Ethena tsUSDe',
  symbol: 'tsUSDe',
  chain: 'ton',
  tokenAddress: 'EQDQ5UUyPHrLcQJlPAczd_fjxn8SLrlNQwolBznxCdSlfQwr',
  slug: 'ton-eqdq5uuyph',
  decimals: 6,
  // eslint-disable-next-line @stylistic/max-len
  image: 'https://cache.tonapi.io/imgproxy/vGZJ7erwsWPo7DpVG_V7ygNn7VGs0szZXcNLHB_l0ms/rs:fill:200:200:1/g:no/aHR0cHM6Ly9tZXRhZGF0YS5sYXllcnplcm8tYXBpLmNvbS9hc3NldHMvdHNVU0RlLnBuZw.webp'
};
const ALL_STAKING_POOLS = [LIQUID_POOL, MYCOIN_STAKING_POOL, ETHENA_STAKING_VAULT, TON_TSUSDE.tokenAddress];
const DEFAULT_ENABLED_TOKEN_SLUGS = {
  mainnet: [TONCOIN.slug, TON_USDT_MAINNET_SLUG, TRX.slug, TRC20_USDT_MAINNET_SLUG],
  testnet: [TONCOIN.slug, TON_USDT_TESTNET_SLUG, TRX.slug, TRC20_USDT_TESTNET_SLUG]
};

// Toncoin, USDT TON, TRX, USDT TRC20
const DEFAULT_ENABLED_TOKEN_COUNT = DEFAULT_ENABLED_TOKEN_SLUGS.mainnet.length;
const PRIORITY_TOKEN_SLUGS = [TONCOIN.slug, TON_USDT_MAINNET_SLUG, TRX.slug];
const COMMON_TOKEN = {
  isFromBackend: true,
  priceUsd: 0,
  percentChange24h: 0
};
const TOKEN_INFO = {
  toncoin: {
    ...TONCOIN,
    isFromBackend: true,
    priceUsd: 3.1,
    percentChange24h: 0
  },
  trx: {
    ...TRX,
    ...COMMON_TOKEN
  },
  [TRC20_USDT_MAINNET_SLUG]: {
    // mainnet
    ...TRC20_USDT,
    slug: TRC20_USDT_MAINNET_SLUG,
    tokenAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    ...COMMON_TOKEN
  },
  [TRC20_USDT_TESTNET_SLUG]: {
    // testnet
    ...TRC20_USDT,
    slug: TRC20_USDT_TESTNET_SLUG,
    tokenAddress: 'TG3XXyExBkPp9nzdajDZsozEu4BkaSJozs',
    ...COMMON_TOKEN
  },
  [TON_USDT_MAINNET_SLUG]: {
    ...TON_USDT,
    // eslint-disable-next-line @stylistic/max-len
    image: 'https://cache.tonapi.io/imgproxy/T3PB4s7oprNVaJkwqbGg54nexKE0zzKhcrPv8jcWYzU/rs:fill:200:200:1/g:no/aHR0cHM6Ly90ZXRoZXIudG8vaW1hZ2VzL2xvZ29DaXJjbGUucG5n.webp',
    slug: TON_USDT_MAINNET_SLUG,
    ...COMMON_TOKEN
  },
  [MYCOIN.slug]: {
    ...MYCOIN,
    // eslint-disable-next-line @stylistic/max-len
    image: 'https://cache.tonapi.io/imgproxy/Qy038wCBKISofJ0hYMlj6COWma330cx3Ju1ZSPM2LRU/rs:fill:200:200:1/g:no/aHR0cHM6Ly9teXRvbndhbGxldC5pby9sb2dvLTI1Ni1ibHVlLnBuZw.webp',
    ...COMMON_TOKEN
  },
  [TON_USDE.slug]: {
    ...TON_USDE,
    ...COMMON_TOKEN
  },
  [TON_TSUSDE.slug]: {
    ...TON_TSUSDE,
    ...COMMON_TOKEN
  }
};
const TOKEN_WITH_LABEL = {
  [TRC20_USDT_MAINNET_SLUG]: 'TRC-20',
  [TRC20_USDT_TESTNET_SLUG]: 'TRC-20',
  [TON_USDT_MAINNET_SLUG]: 'TON'
};
const INIT_SWAP_ASSETS = {
  toncoin: {
    name: 'Toncoin',
    symbol: TONCOIN.symbol,
    chain: TONCOIN.chain,
    slug: TONCOIN.slug,
    decimals: TONCOIN.decimals,
    priceUsd: 0,
    isPopular: true
  },
  [TON_USDT_MAINNET_SLUG]: {
    name: 'Tether USD',
    symbol: 'USD₮',
    chain: 'ton',
    slug: TON_USDT_MAINNET_SLUG,
    decimals: 9,
    // eslint-disable-next-line @stylistic/max-len
    image: 'https://cache.tonapi.io/imgproxy/T3PB4s7oprNVaJkwqbGg54nexKE0zzKhcrPv8jcWYzU/rs:fill:200:200:1/g:no/aHR0cHM6Ly90ZXRoZXIudG8vaW1hZ2VzL2xvZ29DaXJjbGUucG5n.webp',
    tokenAddress: 'EQCxE6mUtQJKFnGfaROTKOt1lZbDiiX1kCixRv7Nw2Id_sDs',
    priceUsd: 0,
    isPopular: true
  }
};
const DEFAULT_TRX_SWAP_FIRST_TOKEN_SLUG = TONCOIN.slug;
const DEFAULT_SWAP_FIRST_TOKEN_SLUG = TONCOIN.slug;
const DEFAULT_SWAP_SECOND_TOKEN_SLUG = (/* unused pure expression or super */ null && (TON_USDT_MAINNET_SLUG));
const DEFAULT_TRANSFER_TOKEN_SLUG = TONCOIN.slug;
const DEFAULT_CEX_SWAP_SECOND_TOKEN_SLUG = (/* unused pure expression or super */ null && (TRC20_USDT_MAINNET_SLUG));
const SWAP_DEX_LABELS = {
  dedust: 'DeDust',
  ston: 'STON.fi'
};
const MULTITAB_DATA_CHANNEL_NAME = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tw-multitab' : 'mtw-multitab'));
const ACTIVE_TAB_STORAGE_KEY = (/* unused pure expression or super */ null && (IS_CORE_WALLET ? 'tw-active-tab' : 'mtw-active-tab'));
const INDEXED_DB_NAME = 'keyval-store';
const INDEXED_DB_STORE_NAME = 'keyval';
const WINDOW_PROVIDER_CHANNEL = 'windowProvider';
const WINDOW_PROVIDER_PORT = (/* unused pure expression or super */ null && (`${IS_CORE_WALLET ? 'TonWallet' : 'MyTonWallet'}_popup_reversed`));
const SHOULD_SHOW_ALL_ASSETS_AND_ACTIVITY = (/* unused pure expression or super */ null && (IS_CORE_WALLET));
const PORTRAIT_MIN_ASSETS_TAB_VIEW = 4;
const LANDSCAPE_MIN_ASSETS_TAB_VIEW = 6;
const DEFAULT_PRICE_CURRENCY = 'USD';
const CURRENCIES = {
  USD: {
    name: 'US Dollar',
    decimals: 2,
    shortSymbol: '$'
  },
  EUR: {
    name: 'Euro',
    decimals: 2,
    shortSymbol: '€'
  },
  RUB: {
    name: 'Ruble',
    decimals: 2,
    shortSymbol: '₽'
  },
  CNY: {
    name: 'Yuan',
    decimals: 2,
    shortSymbol: '¥'
  },
  BTC: {
    name: 'Bitcoin',
    decimals: 9
  },
  [TONCOIN.symbol]: {
    name: 'Toncoin',
    decimals: 9
  }
};
const BURN_ADDRESS = 'UQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJKZ';
const DEFAULT_WALLET_VERSION = 'W5';
const POPULAR_WALLET_VERSIONS = ['v3R1', 'v3R2', 'v4R2', 'W5'];
const LEDGER_WALLET_VERSIONS = ['v3R2', 'v4R2'];
const DEFAULT_TIMEOUT = 10000;
const DEFAULT_RETRIES = 3;
const DEFAULT_ERROR_PAUSE = 500;
const HISTORY_PERIODS = (/* unused pure expression or super */ null && (['1D', '7D', '1M', '3M', '1Y', 'ALL']));
const BROWSER_HISTORY_LIMIT = 10;
const NFT_BATCH_SIZE = 4;
const NOTCOIN_VOUCHERS_ADDRESS = 'EQDmkj65Ab_m0aZaW8IpKw4kYqIgITw_HRstYEkVQ6NIYCyW';
const BURN_CHUNK_DURATION_APPROX_SEC = 30;
const NOTCOIN_FORWARD_TON_AMOUNT = 30000000n; // 0.03 TON
const NOTCOIN_EXCHANGERS = ['EQAPZauWVPUcm2hUJT9n36pxznEhl46rEn1bzBXN0RY_yiy2', 'EQASgm0Qv3h2H2mF0W06ikPqYq2ctT3dyXMJH_svbEKKB3iZ', 'EQArlmP-RhVIG2yAFGZyPZfM3m0YccxmpvoRi6sgRzWnAA0s', 'EQA6pL-spYqZp1Ck6o3rpY45Cl-bvLMW_j3qdVejOkUWpLnm', 'EQBJ_ehYjumQKbXfWUue1KHKXdTm1GuYJB0Fj2ST_DwORvpd', 'EQBRmYSjxh9xlZpUqEmGjF5UjukI9v_Cm2kCTu4CoBn3XkOD', 'EQBkiqncd7AFT5_23H-RoA2Vynk-Nzq_dLoeMVRthAU9RF0p', 'EQB_OzTHXbztABe0QHgr4PtAV8T64LR6aDunXgaAoihOdxwO', 'EQCL-x5kLg6tKVNGryItTuj6tG3FH5mhUEu0xRqQc-kbEmbe', 'EQCZh2yJ46RaQH3AYmjEA8SMMXi77Oein4-3lvqkHseIAhD-', 'EQChKo5IK3iNqUHUGDB9gtzjCjMTPtmsFqekuCA2MdreVEyu', 'EQC6DNCBv076TIliRMfOt20RpbS7rNKDfSky3WrFEapFt8AH', 'EQDE_XFZOYae_rl3ZMsgBCtRSmYhl8B4y2BZEP7oiGBDhlgy', 'EQDddqpGA2ePXQF47A2DSL3GF6ZzIVmimfM2d16cdymy2noT', 'EQDv0hNNAamhYltCh3pTJrq3oRB9RW2ZhEYkTP6fhj5BtZNu', 'EQD2mP7zgO7-imUJhqYry3i07aJ_SR53DaokMupfAAobt0Xw'];
const CLAIM_ADDRESS = 'EQB3zOTvPi1PmwdcTpqSfFKZnhi1GNKEVJM-LdoAirdLtash';
const CLAIM_AMOUNT = 30000000n; // 0.03 TON
const CLAIM_COMMENT = 'claim';
const MINT_CARD_ADDRESS = 'EQBpst3ZWJ9Dqq5gE2YH-yPsFK_BqMOmgi7Z_qK6v7WbrPWv';
const MINT_CARD_COMMENT = 'Mint card';
const MINT_CARD_REFUND_COMMENT = 'Refund';

// eslint-disable-next-line @stylistic/max-len
const RE_LINK_TEMPLATE = /((ftp|https?):\/\/)?(?<host>(www\\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z][-a-zA-Z0-9]{1,62})\b([-a-zA-Z0-9()@:%_+.,~#?&/=]*)/g;
// eslint-disable-next-line @stylistic/max-len
const RE_TG_BOT_MENTION = /telegram[:\s-]*((@[a-z0-9_]+)|(https:\/\/)?(t\.me|telegram\.me|telegram\.dog)\/[a-z0-9_]+)/mig;
const STARS_SYMBOL = '⭐️';
const GIVEAWAY_CHECKIN_URL = (/* unused pure expression or super */ null && ( false || 'https://giveaway.mytonwallet.io'));
const AUTOLOCK_OPTIONS_LIST = [{
  value: 'never',
  name: 'Disabled',
  selectedName: 'Disabled',
  period: 0
}, {
  value: '1',
  name: '30 seconds',
  selectedName: 'If away for 30 sec',
  period: 30_000
}, {
  value: '2',
  name: '3 minutes',
  selectedName: 'If away for 3 min',
  period: 60_000 * 3
}, {
  value: '3',
  name: '10 minutes',
  selectedName: 'If away for 10 min',
  period: 60_000 * 10
}];
const AUTO_CONFIRM_DURATION_MINUTES = 5;
const PRICELESS_TOKEN_HASHES = new Set(['173e31eee054cb0c76f77edc7956bed766bf48a1f63bd062d87040dcd3df700f',
// FIVA SY tsTON EQAxGi9Al7hamLAORroxGkvfap6knGyzI50ThkP3CLPLTtOZ
'5226dd4e6db9af26b24d5ca822bc4053b7e08152f923932abf25030c7e38bb42',
// FIVA PT tsTON EQAkxIRGXgs2vD2zjt334MBjD3mXg2GsyEZHfzuYX_trQkFL
'fea2c08a704e5192b7f37434927170440d445b87aab865c3ea2a68abe7168204',
// FIVA YT tsTON EQAcy60qg22RCq87A_qgYK8hooEgjCZ44yxhdnKYdlWIfKXL
'e691cf9081a8aeb22ed4d94829f6626c9d822752e035800b5543c43f83d134b5',
// FIVA LP tsTON EQD3BjCjxuf8mu5kvxajVbe-Ila1ScZZlAi03oS7lMmAJjM3
'301ce25925830d713b326824e552e962925c4ff45b1e3ea21fc363a459a49b43',
// FIVA SY eUSDT EQDi9blCcyT-k8iMpFMYY0t7mHVyiCB50ZsRgyUECJDuGvIl
'02250f83fbb8624d859c2c045ac70ee2b3b959688c3d843aec773be9b36dbfc3',
// FIVA PT eUSDT EQBzVrYkYPHx8D_HPfQacm1xONa4XSRxl826vHkx_laP2HOe
'dba3adb2c917db80fd71a6a68c1fc9e12976491a8309d5910f9722efc084ce4d',
// FIVA YT eUSDT EQCwUSc2qrY5rn9BfFBG9ARAHePTUvITDl97UD0zOreWzLru
'7da9223b90984d6a144e71611a8d7c65a6298cad734faed79438dc0f7a8e53d1',
// FIVA LP eUSDT EQBNlIZxIbQGQ78cXgG3VRcyl8A0kLn_6BM9kabiHHhWC4qY
'ddf80de336d580ab3c11d194f189c362e2ca1225cae224ea921deeaba7eca818',
// tsUSDe EQDQ5UUyPHrLcQJlPAczd_fjxn8SLrlNQwolBznxCdSlfQwr
'eb9d9891a32ec94425c09735f6ade73f4c171da0091f874d6e9d25247d583990',
// Affluent TON Lending Vault EQADQ6JcK0NMuNM5uwCcS9bjcn2RTvcxYIZjNlhIhywUrfBN
'f66c149de251ffd031bdb34b79abe43a062ba16b815433691e3ec40a77f01d71',
// Affluent Ethena Multiply Vault EQDXmtbt1-WSP00tSh6N6FH-4lX7LbnrjORClmtmuZqg4Ymm
'bca42dbdcbc0d885aaffb1eeeb027d9f338c2dd68701a05641c1d1c3171a7400' // Affluent TON Multiply Vault EQDtxQqkgIRQQR5hWlrQxiJMtLwjR3rEYNUBbEcvPDwCs1Ng
]);
const STAKED_TOKEN_SLUGS = new Set([STAKED_TON_SLUG, STAKED_MYCOIN_SLUG, TON_TSUSDE.slug]);
const DEFAULT_OUR_SWAP_FEE = 0.875;
const DEFAULT_STAKING_STATE = {
  type: 'liquid',
  id: 'liquid',
  tokenSlug: TONCOIN.slug,
  annualYield: 3.9,
  yieldType: 'APY',
  balance: 0n,
  pool: LIQUID_POOL,
  tokenBalance: 0n,
  unstakeRequestAmount: 0n,
  instantAvailable: 0n,
  start: 0,
  end: 0
};
const DEFAULT_NOMINATORS_STAKING_STATE = {
  type: 'nominators',
  id: 'nominators',
  tokenSlug: TONCOIN.slug,
  annualYield: 3.9,
  yieldType: 'APY',
  balance: 0n,
  pool: 'Ef8dgIOIRyCLU0NEvF8TD6Me3wrbrkS1z3Gpjk3ppd8m8-s_',
  start: 0,
  end: 0,
  pendingDepositAmount: 0n
};
const SWAP_API_VERSION = 3;
const TONCENTER_ACTIONS_VERSION = 'v1';
const JVAULT_URL = 'https://jvault.xyz';
const HELP_CENTER_URL = {
  home: {
    en: 'https://help.mytonwallet.io/',
    ru: 'https://help.mytonwallet.io/ru'
  },
  domainScam: {
    en: 'https://help.mytonwallet.io/intro/scams/.ton-domain-scams',
    // eslint-disable-next-line @stylistic/max-len
    ru: 'https://help.mytonwallet.io/ru/baza-znanii/moshennichestvo-i-skamy/moshennichestvo-s-ispolzovaniem-domenov-.ton'
  },
  seedScam: {
    en: 'https://help.mytonwallet.io/intro/scams/leaked-seed-phrases',
    ru: 'https://help.mytonwallet.io/ru/baza-znanii/moshennichestvo-i-skamy/slitye-sid-frazy'
  },
  ethenaStaking: {
    en: 'https://help.mytonwallet.io/intro/staking/what-is-usde-how-does-usde-staking-work',
    ru: 'https://help.mytonwallet.io/ru/baza-znanii/steiking/chto-takoe-usde-kak-rabotaet-steiking-usde'
  }
};
const ALL_TON_DNS_ZONES = [{
  suffixes: ['ton'],
  baseFormat: /^([-\da-z]+\.){0,2}[-\da-z]{4,126}$/i,
  resolver: 'EQC3dNlesgVD8YbAazcauIrXBPfiVhMMr5YYk2in0Mtsz0Bz',
  collectionName: 'TON DNS Domains'
}, {
  suffixes: ['t.me'],
  baseFormat: /^([-\da-z]+\.){0,2}[-_\da-z]{4,32}$/i,
  resolver: 'EQCA14o1-VWhS2efqoh_9M1b_A9DtKTuoqfmkn83AbJzwnPi',
  isTelemint: true,
  collectionName: 'Telegram Usernames'
}, {
  suffixes: ['vip', 'ton.vip', 'vip.ton'],
  baseFormat: /^([-\da-z]+\.){0,2}?[\da-z]{1,24}$/i,
  resolver: 'EQBWG4EBbPDv4Xj7xlPwzxd7hSyHMzwwLB5O6rY-0BBeaixS',
  collectionName: 'VIP DNS Domains',
  isUnofficial: true
}, {
  suffixes: ['gram'],
  baseFormat: /^([-\da-z]+\.){0,2}[\da-z]{1,127}$/i,
  resolver: 'EQAic3zPce496ukFDhbco28FVsKKl2WUX_iJwaL87CBxSiLQ',
  collectionName: 'GRAM DNS Domains',
  isUnofficial: true
}];
const TON_DNS_ZONES = IS_CORE_WALLET ? ALL_TON_DNS_ZONES.filter(_ref => {
  let {
    isUnofficial
  } = _ref;
  return !isUnofficial;
}) : ALL_TON_DNS_ZONES;
const DEFAULT_AUTOLOCK_OPTION = '3';
const WRONG_ATTEMPTS_BEFORE_LOG_OUT_SUGGESTION = 2;
const UNKNOWN_TOKEN = {
  symbol: '[Unknown]',
  decimals: 9
};

// https://api.mytonwallet.org/currency-rates
const FALLBACK_BASE_CURRENCY_RATES = {
  USD: '1',
  EUR: '0.85233500',
  RUB: '84.49824600',
  CNY: '7.11865000',
  BTC: '0.00000866',
  TON: '0.31360000'
};

/***/ }),

/***/ 37836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gf: () => (/* binding */ setCancellableTimeout),
/* harmony export */   JL: () => (/* binding */ createTaskQueue),
/* harmony export */   SB: () => (/* binding */ forbidConcurrency),
/* harmony export */   nF: () => (/* binding */ throttle),
/* harmony export */   v7: () => (/* binding */ pause)
/* harmony export */ });
/* unused harmony exports debounce, throttleWithTickEnd, throttleWith, rafPromise, fastRaf, onTickEnd, onIdle, onBeforeUnload, waitFor */
/* harmony import */ var _Deferred__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9705);

const pause = ms => new Promise(resolve => {
  setTimeout(() => resolve(), ms);
});
function debounce(fn, ms) {
  let shouldRunFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let shouldRunLast = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
  let waitingTimeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    if (waitingTimeout) {
      clearTimeout(waitingTimeout);
      waitingTimeout = undefined;
    } else if (shouldRunFirst) {
      fn(...args);
    }
    waitingTimeout = self.setTimeout(() => {
      if (shouldRunLast) {
        fn(...args);
      }
      waitingTimeout = undefined;
    }, ms);
  };
}

/**
 * An important feature of this throttle implementation is that it waits for `fn` to finish before scheduling the new
 * execution. That is, `fn` never gets executed in parallel with itself.
 */
function throttle(fn, ms) {
  let shouldRunFirst = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  let args;
  let isRunning = false;
  async function scheduleFn() {
    await (typeof ms === 'function' ? ms() : pause(ms));
    void runFn();
  }
  async function runFn() {
    if (!args) {
      isRunning = false;
      return;
    }
    try {
      const localArgs = args;
      args = undefined;
      await fn(...localArgs);
    } finally {
      // Voiding the promise to let the error produced by `fn` be thrown immediately
      void scheduleFn();
    }
  }
  return function () {
    for (var _len2 = arguments.length, _args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      _args[_key2] = arguments[_key2];
    }
    args = _args;
    if (!isRunning) {
      isRunning = true;
      if (shouldRunFirst) {
        void runFn();
      } else {
        void scheduleFn();
      }
    }
  };
}
function throttleWithTickEnd(fn) {
  return throttleWith(onTickEnd, fn);
}
function throttleWith(schedulerFn, fn) {
  let waiting = false;
  let args;
  return function () {
    for (var _len3 = arguments.length, _args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      _args[_key3] = arguments[_key3];
    }
    args = _args;
    if (!waiting) {
      waiting = true;
      schedulerFn(() => {
        waiting = false;
        fn(...args);
      });
    }
  };
}
function rafPromise() {
  return new Promise(resolve => {
    fastRaf(resolve);
  });
}
const FAST_RAF_TIMEOUT_FALLBACK_MS = 35; // < 30 FPS

let fastRafCallbacks;
let fastRafFallbackCallbacks;
let fastRafFallbackTimeout;

// May result in an immediate execution if called from another RAF callback which was scheduled
// (and therefore is executed) earlier than RAF callback scheduled by `fastRaf`
function fastRaf(callback) {
  let withTimeoutFallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!fastRafCallbacks) {
    fastRafCallbacks = new Set([callback]);
    requestAnimationFrame(() => {
      const currentCallbacks = fastRafCallbacks;
      fastRafCallbacks = undefined;
      fastRafFallbackCallbacks = undefined;
      if (fastRafFallbackTimeout) {
        clearTimeout(fastRafFallbackTimeout);
        fastRafFallbackTimeout = undefined;
      }
      currentCallbacks.forEach(cb => cb());
    });
  } else {
    fastRafCallbacks.add(callback);
  }
  if (withTimeoutFallback) {
    if (!fastRafFallbackCallbacks) {
      fastRafFallbackCallbacks = new Set([callback]);
    } else {
      fastRafFallbackCallbacks.add(callback);
    }
    if (!fastRafFallbackTimeout) {
      fastRafFallbackTimeout = window.setTimeout(() => {
        const currentTimeoutCallbacks = fastRafFallbackCallbacks;
        if (fastRafCallbacks) {
          currentTimeoutCallbacks.forEach(fastRafCallbacks.delete, fastRafCallbacks);
        }
        fastRafFallbackCallbacks = undefined;
        if (fastRafFallbackTimeout) {
          clearTimeout(fastRafFallbackTimeout);
          fastRafFallbackTimeout = undefined;
        }
        currentTimeoutCallbacks.forEach(cb => cb());
      }, FAST_RAF_TIMEOUT_FALLBACK_MS);
    }
  }
}
let onTickEndCallbacks;
function onTickEnd(callback) {
  if (!onTickEndCallbacks) {
    onTickEndCallbacks = [callback];
    void Promise.resolve().then(() => {
      const currentCallbacks = onTickEndCallbacks;
      onTickEndCallbacks = undefined;
      currentCallbacks.forEach(cb => cb());
    });
  } else {
    onTickEndCallbacks.push(callback);
  }
}
const IDLE_TIMEOUT = 500;
let onIdleCallbacks;
function onIdle(callback) {
  if (!self.requestIdleCallback) {
    onTickEnd(callback);
    return;
  }
  if (!onIdleCallbacks) {
    onIdleCallbacks = [callback];
    requestIdleCallback(deadline => {
      const currentCallbacks = onIdleCallbacks;
      onIdleCallbacks = undefined;
      while (currentCallbacks.length) {
        const cb = currentCallbacks.shift();
        cb();
        if (!deadline.timeRemaining()) break;
      }
      if (currentCallbacks.length) {
        if (onIdleCallbacks) {
          // Prepend the remaining callbacks if the next pass is already planned
          onIdleCallbacks = currentCallbacks.concat(onIdleCallbacks);
        } else {
          currentCallbacks.forEach(onIdle);
        }
      }
    }, {
      timeout: IDLE_TIMEOUT
    });
  } else {
    onIdleCallbacks.push(callback);
  }
}
let beforeUnloadCallbacks;
function onBeforeUnload(callback) {
  let isLast = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  if (!beforeUnloadCallbacks) {
    beforeUnloadCallbacks = [];
    self.addEventListener('beforeunload', () => {
      beforeUnloadCallbacks.forEach(cb => cb());
    });
  }
  if (isLast) {
    beforeUnloadCallbacks.push(callback);
  } else {
    beforeUnloadCallbacks.unshift(callback);
  }
  return () => {
    beforeUnloadCallbacks = beforeUnloadCallbacks.filter(cb => cb !== callback);
  };
}
async function waitFor(cb, interval, attempts) {
  let i = 0;
  let result = cb();
  while (!result && i < attempts) {
    await pause(interval);
    i++;
    result = cb();
  }
  return result;
}
function setCancellableTimeout(ms, cb) {
  const timeoutId = setTimeout(cb, ms);
  return () => clearTimeout(timeoutId);
}

/**
 * Returns a function that executes every given functions (tasks) with limited concurrency (not more than
 * `maxConcurrency` at a time). The tasks are executed in the same order that they are given. Unlike throttle, executes
 * every given task.
 */
function createTaskQueue() {
  let maxConcurrency = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  const queue = [];
  let concurrency = 0;
  const runTasks = async () => {
    concurrency++;
    while (queue.length) {
      const task = queue.shift();
      await task(); // Expected never to throw, because the errors are caught below
    }
    concurrency--;
  };

  /** Schedules execution of the given function right now. The returned promise settles with the task result. */
  const run = task => {
    const deferred = new _Deferred__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A();
    queue.push(async () => {
      try {
        deferred.resolve(await task());
      } catch (err) {
        deferred.reject(err);
      }
    });
    if (concurrency < maxConcurrency) {
      void runTasks();
    }
    return deferred.promise;
  };

  /** Returns the same task function, but with limited concurrency */
  const wrap = task => {
    return function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return run(() => task(...args));
    };
  };
  return {
    run,
    wrap
  };
}

/**
 * Returns a function that prevents `actions` from running in parallel with itself. If the `action` is already running,
 * queues, the next call will be queued. Unlike `throttle`, never skips the calls.
 */
function forbidConcurrency(action) {
  return createTaskQueue(1).wrap(action);
}

/***/ }),

/***/ 39989:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K$: () => (/* binding */ ApiServerError),
/* harmony export */   KB: () => (/* binding */ ApiUserRejectsError),
/* harmony export */   QS: () => (/* binding */ handleServerError),
/* harmony export */   aU: () => (/* binding */ ApiBaseError)
/* harmony export */ });
/* unused harmony exports AbortOperationError, NotImplemented, maybeApiErrors */
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23174);

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
    super(message, _types__WEBPACK_IMPORTED_MODULE_0__/* .ApiCommonError */ .QD.ServerError);
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

/***/ }),

/***/ 41758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ generateQueryId)
/* harmony export */ });
/* unused harmony export cloneDeep */
/* harmony import */ var _util_bigint__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(809);

function cloneDeep(value) {
  return JSON.parse(JSON.stringify(value), bigintReviver);
}
function generateQueryId() {
  return (0,_util_bigint__WEBPACK_IMPORTED_MODULE_0__/* .bigintRandom */ .nd)(8);
}

/***/ }),

/***/ 45232:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EQ: () => (/* binding */ handleFetchErrors),
/* harmony export */   I5: () => (/* binding */ getProxiedLottieUrl),
/* harmony export */   J5: () => (/* binding */ fetchWithRetry),
/* harmony export */   fU: () => (/* binding */ fixIpfsUrl),
/* harmony export */   x3: () => (/* binding */ fetchJsonWithProxy),
/* harmony export */   x6: () => (/* binding */ fetchJson)
/* harmony export */ });
/* unused harmony exports fetchWithTimeout, getProxiedJsonUrl */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* harmony import */ var _api_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39989);
/* harmony import */ var _logs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55029);
/* harmony import */ var _schedulers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37836);




const MAX_TIMEOUT = 30000; // 30 sec

function fetchJsonWithProxy(url, data, init) {
  return fetchJson(getProxiedJsonUrl(url.toString()), data, init);
}
async function fetchJson(url, data, init) {
  const urlObject = new URL(url);
  if (data) {
    Object.entries(data).forEach(_ref => {
      let [key, value] = _ref;
      if (value === undefined) {
        return;
      }
      if (Array.isArray(value)) {
        value.forEach(item => {
          urlObject.searchParams.append(key, item.toString());
        });
      } else {
        urlObject.searchParams.set(key, value.toString());
      }
    });
  }
  const response = await fetchWithRetry(urlObject, init);
  return response.json();
}
async function fetchWithRetry(url, init, options) {
  const {
    retries = _config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_RETRIES */ .TUC,
    timeouts = _config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_TIMEOUT */ .cSq,
    shouldSkipRetryFn = isNotTemporaryError
  } = options ?? {};
  let message = 'Unknown error.';
  let statusCode;
  for (let i = 1; i <= retries; i++) {
    try {
      if (i > 1) {
        (0,_logs__WEBPACK_IMPORTED_MODULE_2__/* .logDebug */ .MD)(`Retry request #${i}:`, url.toString(), statusCode);
      }
      const timeout = Array.isArray(timeouts) ? timeouts[i - 1] ?? timeouts[timeouts.length - 1] : Math.min(timeouts * i, MAX_TIMEOUT);
      const response = await fetchWithTimeout(url, init, timeout);
      statusCode = response.status;
      if (statusCode >= 400) {
        const {
          error
        } = await response.json().catch(() => {});
        throw new Error(error ?? `HTTP Error ${statusCode}`);
      }
      return response;
    } catch (err) {
      message = typeof err === 'string' ? err : err.message ?? message;
      const shouldSkipRetry = shouldSkipRetryFn(message, statusCode);
      if (shouldSkipRetry) {
        throw new _api_errors__WEBPACK_IMPORTED_MODULE_1__/* .ApiServerError */ .K$(message, statusCode);
      }
      if (i < retries) {
        await (0,_schedulers__WEBPACK_IMPORTED_MODULE_3__/* .pause */ .v7)(_config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_ERROR_PAUSE */ .WRE * i);
      }
    }
  }
  throw new _api_errors__WEBPACK_IMPORTED_MODULE_1__/* .ApiServerError */ .K$(message);
}
async function fetchWithTimeout(url, init) {
  let timeout = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config__WEBPACK_IMPORTED_MODULE_0__/* .DEFAULT_TIMEOUT */ .cSq;
  const controller = new AbortController();
  const id = setTimeout(() => {
    controller.abort();
  }, timeout);
  try {
    return await fetch(url, {
      ...init,
      signal: controller.signal
    });
  } finally {
    clearTimeout(id);
  }
}
async function handleFetchErrors(response, ignoreHttpCodes) {
  if (!response.ok && !(ignoreHttpCodes !== null && ignoreHttpCodes !== void 0 && ignoreHttpCodes.includes(response.status))) {
    // eslint-disable-next-line prefer-const
    let {
      error,
      errors
    } = await response.json().catch(() => undefined);
    if (!error && errors && errors.length) {
      var _errors$;
      error = (_errors$ = errors[0]) === null || _errors$ === void 0 ? void 0 : _errors$.msg;
    }
    throw new _api_errors__WEBPACK_IMPORTED_MODULE_1__/* .ApiServerError */ .K$(error ?? `HTTP Error ${response.status}`, response.status);
  }
  return response;
}
function isNotTemporaryError(message, statusCode) {
  return statusCode && [400, 404].includes(statusCode);
}
function getProxiedJsonUrl(url) {
  return `${_config__WEBPACK_IMPORTED_MODULE_0__/* .PROXY_API_BASE_URL */ ._$E}/download-json?url=${encodeURIComponent(url)}`;
}
function getProxiedLottieUrl(url) {
  return `${_config__WEBPACK_IMPORTED_MODULE_0__/* .PROXY_API_BASE_URL */ ._$E}/download-lottie?url=${encodeURIComponent(url)}`;
}
function fixIpfsUrl(url) {
  return url.replace('ipfs://', _config__WEBPACK_IMPORTED_MODULE_0__/* .IPFS_GATEWAY_BASE_URL */ .eO4);
}

/***/ }),

/***/ 48217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H: () => (/* binding */ handleError)
});

// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./src/util/dateFormat.ts
var dateFormat = __webpack_require__(10309);
;// ./src/util/environment.ts

const IS_EXTENSION_PAGE_SCRIPT = config/* IS_EXTENSION */.hL1 && !['chrome-extension:', 'moz-extension:'].includes(self.location.protocol);
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
// EXTERNAL MODULE: ./src/util/schedulers.ts
var schedulers = __webpack_require__(37836);
;// ./src/util/handleError.ts





const shouldShowAlert = (config/* APP_ENV */.Guj === 'development' || config/* APP_ENV */.Guj === 'staging') && typeof window === 'object' && !IS_EXTENSION_PAGE_SCRIPT;
const throttledAlert = (0,schedulers/* throttle */.nF)(message => window.alert(message), 10 * dateFormat/* SECOND */.Z2);
self.addEventListener('error', handleErrorEvent);
self.addEventListener('unhandledrejection', handleErrorEvent);
function handleErrorEvent(e) {
  // https://stackoverflow.com/questions/49384120/resizeobserver-loop-limit-exceeded
  if (e instanceof ErrorEvent && e.message === 'ResizeObserver loop limit exceeded') {
    return;
  }
  e.preventDefault();
  handleError(e instanceof ErrorEvent ? e.error || e.message : e.reason);
}
function handleError(err) {
  (0,logs/* logDebugError */.SJ)('handleError', err);
  const message = typeof err === 'string' ? err : err.message;
  const stack = typeof err === 'object' ? err.stack : undefined;
  if (message.endsWith('Failed to import rlottie-wasm.js')) {
    return;
  }
  if (shouldShowAlert) {
    throttledAlert(`${config/* DEBUG_ALERT_MSG */.FHx}\n\n${message || err}\n${stack}`);
  }
}

/***/ }),

/***/ 48805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   z: () => (/* binding */ Big)
/* harmony export */ });
/*
 *  big.js v6.2.1
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2022 Michael Mclaughlin
 *  https://github.com/MikeMcl/big.js/LICENCE.md
 */

/************************************** EDITABLE DEFAULTS *****************************************/

// The default values below must be integers within the stated ranges.

/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 20,
  // 0 to MAX_DP

  /*
   * The rounding mode (RM) used when rounding to the above decimal places.
   *
   *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
   *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
   *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
   *  3  Away from zero.                                  (ROUND_UP)
   */
  RM = 1,
  // 0, 1, 2 or 3

  // The maximum value of DP and Big.DP.
  MAX_DP = 1E6,
  // 0 to 1000000

  // The maximum magnitude of the exponent argument to the pow method.
  MAX_POWER = 1E6,
  // 1 to 1000000

  /*
   * The negative exponent (NE) at and beneath which toString returns exponential notation.
   * (JavaScript numbers: -7)
   * -1000000 is the minimum recommended exponent value of a Big.
   */
  NE = -7,
  // 0 to -1000000

  /*
   * The positive exponent (PE) at and above which toString returns exponential notation.
   * (JavaScript numbers: 21)
   * 1000000 is the maximum recommended exponent value of a Big, but this limit is not enforced.
   */
  PE = 21,
  // 0 to 1000000

  /*
   * When true, an error will be thrown if a primitive number is passed to the Big constructor,
   * or if valueOf is called, or if toNumber is called on a Big which cannot be converted to a
   * primitive number without a loss of precision.
   */
  STRICT = false,
  // true or false

  /**************************************************************************************************/

  // Error messages.
  NAME = '[big.js] ',
  INVALID = NAME + 'Invalid ',
  INVALID_DP = INVALID + 'decimal places',
  INVALID_RM = INVALID + 'rounding mode',
  DIV_BY_ZERO = NAME + 'Division by zero',
  // The shared prototype object.
  P = {},
  UNDEFINED = void 0,
  NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

/*
 * Create and return a Big constructor.
 */
function _Big_() {
  /*
   * The Big constructor and exported function.
   * Create and return a new instance of a Big number object.
   *
   * n {number|string|Big} A numeric value.
   */
  function Big(n) {
    var x = this;

    // Enable constructor usage without new.
    if (!(x instanceof Big)) return n === UNDEFINED ? _Big_() : new Big(n);

    // Duplicate.
    if (n instanceof Big) {
      x.s = n.s;
      x.e = n.e;
      x.c = n.c.slice();
    } else {
      if (typeof n !== 'string') {
        if (Big.strict === true && typeof n !== 'bigint') {
          throw TypeError(INVALID + 'value');
        }

        // Minus zero?
        n = n === 0 && 1 / n < 0 ? '-0' : String(n);
      }
      parse(x, n);
    }

    // Retain a reference to this Big constructor.
    // Shadow Big.prototype.constructor which points to Object.
    x.constructor = Big;
  }
  Big.prototype = P;
  Big.DP = DP;
  Big.RM = RM;
  Big.NE = NE;
  Big.PE = PE;
  Big.strict = STRICT;
  Big.roundDown = 0;
  Big.roundHalfUp = 1;
  Big.roundHalfEven = 2;
  Big.roundUp = 3;
  return Big;
}

/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
  var e, i, nl;
  if (!NUMERIC.test(n)) {
    throw Error(INVALID + 'number');
  }

  // Determine sign.
  x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;

  // Decimal point?
  if ((e = n.indexOf('.')) > -1) n = n.replace('.', '');

  // Exponential form?
  if ((i = n.search(/e/i)) > 0) {
    // Determine exponent.
    if (e < 0) e = i;
    e += +n.slice(i + 1);
    n = n.substring(0, i);
  } else if (e < 0) {
    // Integer.
    e = n.length;
  }
  nl = n.length;

  // Determine leading zeros.
  for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
  if (i == nl) {
    // Zero.
    x.c = [x.e = 0];
  } else {
    // Determine trailing zeros.
    for (; nl > 0 && n.charAt(--nl) == '0';);
    x.e = e - i - 1;
    x.c = [];

    // Convert string to array of digits without leading/trailing zeros.
    for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
  }
  return x;
}

/*
 * Round Big x to a maximum of sd significant digits using rounding mode rm.
 *
 * x {Big} The Big to round.
 * sd {number} Significant digits: integer, 0 to MAX_DP inclusive.
 * rm {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, sd, rm, more) {
  var xc = x.c;
  if (rm === UNDEFINED) rm = x.constructor.RM;
  if (rm !== 0 && rm !== 1 && rm !== 2 && rm !== 3) {
    throw Error(INVALID_RM);
  }
  if (sd < 1) {
    more = rm === 3 && (more || !!xc[0]) || sd === 0 && (rm === 1 && xc[0] >= 5 || rm === 2 && (xc[0] > 5 || xc[0] === 5 && (more || xc[1] !== UNDEFINED)));
    xc.length = 1;
    if (more) {
      // 1, 0.1, 0.01, 0.001, 0.0001 etc.
      x.e = x.e - sd + 1;
      xc[0] = 1;
    } else {
      // Zero.
      xc[0] = x.e = 0;
    }
  } else if (sd < xc.length) {
    // xc[sd] is the digit after the digit that may be rounded up.
    more = rm === 1 && xc[sd] >= 5 || rm === 2 && (xc[sd] > 5 || xc[sd] === 5 && (more || xc[sd + 1] !== UNDEFINED || xc[sd - 1] & 1)) || rm === 3 && (more || !!xc[0]);

    // Remove any digits after the required precision.
    xc.length = sd;

    // Round up?
    if (more) {
      // Rounding up may mean the previous digit has to be rounded up.
      for (; ++xc[--sd] > 9;) {
        xc[sd] = 0;
        if (sd === 0) {
          ++x.e;
          xc.unshift(1);
          break;
        }
      }
    }

    // Remove trailing zeros.
    for (sd = xc.length; !xc[--sd];) xc.pop();
  }
  return x;
}

/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 */
function stringify(x, doExponential, isNonzero) {
  var e = x.e,
    s = x.c.join(''),
    n = s.length;

  // Exponential notation?
  if (doExponential) {
    s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;

    // Normal notation.
  } else if (e < 0) {
    for (; ++e;) s = '0' + s;
    s = '0.' + s;
  } else if (e > 0) {
    if (++e > n) {
      for (e -= n; e--;) s += '0';
    } else if (e < n) {
      s = s.slice(0, e) + '.' + s.slice(e);
    }
  } else if (n > 1) {
    s = s.charAt(0) + '.' + s.slice(1);
  }
  return x.s < 0 && isNonzero ? '-' + s : s;
}

// Prototype/instance methods

/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
  var x = new this.constructor(this);
  x.s = 1;
  return x;
};

/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
 */
P.cmp = function (y) {
  var isneg,
    x = this,
    xc = x.c,
    yc = (y = new x.constructor(y)).c,
    i = x.s,
    j = y.s,
    k = x.e,
    l = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) return !xc[0] ? !yc[0] ? 0 : -j : i;

  // Signs differ?
  if (i != j) return i;
  isneg = i < 0;

  // Compare exponents.
  if (k != l) return k > l ^ isneg ? 1 : -1;
  j = (k = xc.length) < (l = yc.length) ? k : l;

  // Compare digit by digit.
  for (i = -1; ++i < j;) {
    if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
  }

  // Compare lengths.
  return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};

/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
  var x = this,
    Big = x.constructor,
    a = x.c,
    // dividend
    b = (y = new Big(y)).c,
    // divisor
    k = x.s == y.s ? 1 : -1,
    dp = Big.DP;
  if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }

  // Divisor is zero?
  if (!b[0]) {
    throw Error(DIV_BY_ZERO);
  }

  // Dividend is 0? Return +-0.
  if (!a[0]) {
    y.s = k;
    y.c = [y.e = 0];
    return y;
  }
  var bl,
    bt,
    n,
    cmp,
    ri,
    bz = b.slice(),
    ai = bl = b.length,
    al = a.length,
    r = a.slice(0, bl),
    // remainder
    rl = r.length,
    q = y,
    // quotient
    qc = q.c = [],
    qi = 0,
    p = dp + (q.e = x.e - y.e) + 1; // precision of the result

  q.s = k;
  k = p < 0 ? 0 : p;

  // Create version of divisor with leading zero.
  bz.unshift(0);

  // Add zeros to make remainder as long as divisor.
  for (; rl++ < bl;) r.push(0);
  do {
    // n is how many times the divisor goes into current remainder.
    for (n = 0; n < 10; n++) {
      // Compare divisor and remainder.
      if (bl != (rl = r.length)) {
        cmp = bl > rl ? 1 : -1;
      } else {
        for (ri = -1, cmp = 0; ++ri < bl;) {
          if (b[ri] != r[ri]) {
            cmp = b[ri] > r[ri] ? 1 : -1;
            break;
          }
        }
      }

      // If divisor < remainder, subtract divisor from remainder.
      if (cmp < 0) {
        // Remainder can't be more than 1 digit longer than divisor.
        // Equalise lengths using divisor with extra leading zero?
        for (bt = rl == bl ? b : bz; rl;) {
          if (r[--rl] < bt[rl]) {
            ri = rl;
            for (; ri && !r[--ri];) r[ri] = 9;
            --r[ri];
            r[rl] += 10;
          }
          r[rl] -= bt[rl];
        }
        for (; !r[0];) r.shift();
      } else {
        break;
      }
    }

    // Add the digit n to the result array.
    qc[qi++] = cmp ? n : ++n;

    // Update the remainder.
    if (r[0] && cmp) r[rl] = a[ai] || 0;else r = [a[ai]];
  } while ((ai++ < al || r[0] !== UNDEFINED) && k--);

  // Leading zero? Do not remove if result is simply zero (qi == 1).
  if (!qc[0] && qi != 1) {
    // There can't be more than one zero.
    qc.shift();
    q.e--;
    p--;
  }

  // Round?
  if (qi > p) round(q, p, Big.RM, r[0] !== UNDEFINED);
  return q;
};

/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
  return this.cmp(y) === 0;
};

/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
  return this.cmp(y) > 0;
};

/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
  return this.cmp(y) > -1;
};

/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
  return this.cmp(y) < 0;
};

/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
  return this.cmp(y) < 1;
};

/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
  var i,
    j,
    t,
    xlty,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;

  // Signs differ?
  if (a != b) {
    y.s = -b;
    return x.plus(y);
  }
  var xc = x.c.slice(),
    xe = x.e,
    yc = y.c,
    ye = y.e;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (yc[0]) {
      y.s = -b;
    } else if (xc[0]) {
      y = new Big(x);
    } else {
      y.s = 1;
    }
    return y;
  }

  // Determine which is the bigger number. Prepend zeros to equalise exponents.
  if (a = xe - ye) {
    if (xlty = a < 0) {
      a = -a;
      t = xc;
    } else {
      ye = xe;
      t = yc;
    }
    t.reverse();
    for (b = a; b--;) t.push(0);
    t.reverse();
  } else {
    // Exponents equal. Check digit by digit.
    j = ((xlty = xc.length < yc.length) ? xc : yc).length;
    for (a = b = 0; b < j; b++) {
      if (xc[b] != yc[b]) {
        xlty = xc[b] < yc[b];
        break;
      }
    }
  }

  // x < y? Point xc to the array of the bigger number.
  if (xlty) {
    t = xc;
    xc = yc;
    yc = t;
    y.s = -y.s;
  }

  /*
   * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
   * needs to start at yc.length.
   */
  if ((b = (j = yc.length) - (i = xc.length)) > 0) for (; b--;) xc[i++] = 0;

  // Subtract yc from xc.
  for (b = i; j > a;) {
    if (xc[--j] < yc[j]) {
      for (i = j; i && !xc[--i];) xc[i] = 9;
      --xc[i];
      xc[j] += 10;
    }
    xc[j] -= yc[j];
  }

  // Remove trailing zeros.
  for (; xc[--b] === 0;) xc.pop();

  // Remove leading zeros and adjust exponent accordingly.
  for (; xc[0] === 0;) {
    xc.shift();
    --ye;
  }
  if (!xc[0]) {
    // n - n = +0
    y.s = 1;

    // Result must be zero.
    xc = [ye = 0];
  }
  y.c = xc;
  y.e = ye;
  return y;
};

/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
  var ygtx,
    x = this,
    Big = x.constructor,
    a = x.s,
    b = (y = new Big(y)).s;
  if (!y.c[0]) {
    throw Error(DIV_BY_ZERO);
  }
  x.s = y.s = 1;
  ygtx = y.cmp(x) == 1;
  x.s = a;
  y.s = b;
  if (ygtx) return new Big(x);
  a = Big.DP;
  b = Big.RM;
  Big.DP = Big.RM = 0;
  x = x.div(y);
  Big.DP = a;
  Big.RM = b;
  return this.minus(x.times(y));
};

/*
 * Return a new Big whose value is the value of this Big negated.
 */
P.neg = function () {
  var x = new this.constructor(this);
  x.s = -x.s;
  return x;
};

/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
  var e,
    k,
    t,
    x = this,
    Big = x.constructor;
  y = new Big(y);

  // Signs differ?
  if (x.s != y.s) {
    y.s = -y.s;
    return x.minus(y);
  }
  var xe = x.e,
    xc = x.c,
    ye = y.e,
    yc = y.c;

  // Either zero?
  if (!xc[0] || !yc[0]) {
    if (!yc[0]) {
      if (xc[0]) {
        y = new Big(x);
      } else {
        y.s = x.s;
      }
    }
    return y;
  }
  xc = xc.slice();

  // Prepend zeros to equalise exponents.
  // Note: reverse faster than unshifts.
  if (e = xe - ye) {
    if (e > 0) {
      ye = xe;
      t = yc;
    } else {
      e = -e;
      t = xc;
    }
    t.reverse();
    for (; e--;) t.push(0);
    t.reverse();
  }

  // Point xc to the longer array.
  if (xc.length - yc.length < 0) {
    t = yc;
    yc = xc;
    xc = t;
  }
  e = yc.length;

  // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
  for (k = 0; e; xc[e] %= 10) k = (xc[--e] = xc[e] + yc[e] + k) / 10 | 0;

  // No need to check for zero, as +x + +y != 0 && -x + -y != 0

  if (k) {
    xc.unshift(k);
    ++ye;
  }

  // Remove trailing zeros.
  for (e = xc.length; xc[--e] === 0;) xc.pop();
  y.c = xc;
  y.e = ye;
  return y;
};

/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
  var x = this,
    one = new x.constructor('1'),
    y = one,
    isneg = n < 0;
  if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER) {
    throw Error(INVALID + 'exponent');
  }
  if (isneg) n = -n;
  for (;;) {
    if (n & 1) y = y.times(x);
    n >>= 1;
    if (!n) break;
    x = x.times(x);
  }
  return isneg ? one.div(y) : y;
};

/*
 * Return a new Big whose value is the value of this Big rounded to a maximum precision of sd
 * significant digits using rounding mode rm, or Big.RM if rm is not specified.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.prec = function (sd, rm) {
  if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
    throw Error(INVALID + 'precision');
  }
  return round(new this.constructor(this), sd, rm);
};

/*
 * Return a new Big whose value is the value of this Big rounded to a maximum of dp decimal places
 * using rounding mode rm, or Big.RM if rm is not specified.
 * If dp is negative, round to an integer which is a multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.round = function (dp, rm) {
  if (dp === UNDEFINED) dp = 0;else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP) {
    throw Error(INVALID_DP);
  }
  return round(new this.constructor(this), dp + this.e + 1, rm);
};

/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
  var r,
    c,
    t,
    x = this,
    Big = x.constructor,
    s = x.s,
    e = x.e,
    half = new Big('0.5');

  // Zero?
  if (!x.c[0]) return new Big(x);

  // Negative?
  if (s < 0) {
    throw Error(NAME + 'No square root');
  }

  // Estimate.
  s = Math.sqrt(x + '');

  // Math.sqrt underflow/overflow?
  // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
  if (s === 0 || s === 1 / 0) {
    c = x.c.join('');
    if (!(c.length + e & 1)) c += '0';
    s = Math.sqrt(c);
    e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
    r = new Big((s == 1 / 0 ? '5e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
  } else {
    r = new Big(s + '');
  }
  e = r.e + (Big.DP += 4);

  // Newton-Raphson iteration.
  do {
    t = r;
    r = half.times(t.plus(x.div(t)));
  } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
  return round(r, (Big.DP -= 4) + r.e + 1, Big.RM);
};

/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
  var c,
    x = this,
    Big = x.constructor,
    xc = x.c,
    yc = (y = new Big(y)).c,
    a = xc.length,
    b = yc.length,
    i = x.e,
    j = y.e;

  // Determine sign of result.
  y.s = x.s == y.s ? 1 : -1;

  // Return signed 0 if either 0.
  if (!xc[0] || !yc[0]) {
    y.c = [y.e = 0];
    return y;
  }

  // Initialise exponent of result as x.e + y.e.
  y.e = i + j;

  // If array xc has fewer digits than yc, swap xc and yc, and lengths.
  if (a < b) {
    c = xc;
    xc = yc;
    yc = c;
    j = a;
    a = b;
    b = j;
  }

  // Initialise coefficient array of result with zeros.
  for (c = new Array(j = a + b); j--;) c[j] = 0;

  // Multiply.

  // i is initially xc.length.
  for (i = b; i--;) {
    b = 0;

    // a is yc.length.
    for (j = a + i; j > i;) {
      // Current sum of products at this digit position, plus carry.
      b = c[j] + yc[i] * xc[j - i - 1] + b;
      c[j--] = b % 10;

      // carry
      b = b / 10 | 0;
    }
    c[j] = b;
  }

  // Increment result exponent if there is a final carry, otherwise remove leading zero.
  if (b) ++y.e;else c.shift();

  // Remove trailing zeros.
  for (i = c.length; !c[--i];) c.pop();
  y.c = c;
  return y;
};

/*
 * Return a string representing the value of this Big in exponential notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toExponential = function (dp, rm) {
  var x = this,
    n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), ++dp, rm);
    for (; x.c.length < dp;) x.c.push(0);
  }
  return stringify(x, true, !!n);
};

/*
 * Return a string representing the value of this Big in normal notation rounded to dp fixed
 * decimal places using rounding mode rm, or Big.RM if rm is not specified.
 *
 * dp? {number} Decimal places: integer, 0 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp, rm) {
  var x = this,
    n = x.c[0];
  if (dp !== UNDEFINED) {
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP) {
      throw Error(INVALID_DP);
    }
    x = round(new x.constructor(x), dp + x.e + 1, rm);

    // x.e may have changed if the value is rounded up.
    for (dp = dp + x.e + 1; x.c.length < dp;) x.c.push(0);
  }
  return stringify(x, false, !!n);
};

/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P[Symbol.for('nodejs.util.inspect.custom')] = P.toJSON = P.toString = function () {
  var x = this,
    Big = x.constructor;
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, !!x.c[0]);
};

/*
 * Return the value of this Big as a primitve number.
 */
P.toNumber = function () {
  var n = Number(stringify(this, true, true));
  if (this.constructor.strict === true && !this.eq(n.toString())) {
    throw Error(NAME + 'Imprecise conversion');
  }
  return n;
};

/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * rounding mode rm, or Big.RM if rm is not specified.
 * Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Significant digits: integer, 1 to MAX_DP inclusive.
 * rm? {number} Rounding mode: 0 (down), 1 (half-up), 2 (half-even) or 3 (up).
 */
P.toPrecision = function (sd, rm) {
  var x = this,
    Big = x.constructor,
    n = x.c[0];
  if (sd !== UNDEFINED) {
    if (sd !== ~~sd || sd < 1 || sd > MAX_DP) {
      throw Error(INVALID + 'precision');
    }
    x = round(new Big(x), sd, rm);
    for (; x.c.length < sd;) x.c.push(0);
  }
  return stringify(x, sd <= x.e || x.e <= Big.NE || x.e >= Big.PE, !!n);
};

/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = function () {
  var x = this,
    Big = x.constructor;
  if (Big.strict === true) {
    throw Error(NAME + 'valueOf disallowed');
  }
  return stringify(x, x.e <= Big.NE || x.e >= Big.PE, true);
};

// Export

var Big = _Big_();

/// <reference types="https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/master/types/big.js/index.d.ts" />
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Big)));

/***/ }),

/***/ 50110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ safeExec)
/* harmony export */ });
/* unused harmony export safeExecAsync */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* harmony import */ var _handleError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48217);


const SAFE_EXEC_ENABLED = !_config__WEBPACK_IMPORTED_MODULE_0__/* .DEBUG_MORE */ .MVx;
async function safeExecAsync(cb, options) {
  if (!SAFE_EXEC_ENABLED) {
    return cb();
  }
  const {
    rescue,
    always,
    shouldIgnoreError
  } = options ?? {};
  try {
    return await cb();
  } catch (err) {
    rescue === null || rescue === void 0 || rescue(err);
    if (!shouldIgnoreError) {
      handleError(err);
    }
    return undefined;
  } finally {
    always === null || always === void 0 || always();
  }
}
function safeExec(cb, options) {
  if (!SAFE_EXEC_ENABLED) {
    return cb();
  }
  const {
    rescue,
    always,
    shouldIgnoreError
  } = options ?? {};
  try {
    return cb();
  } catch (err) {
    rescue === null || rescue === void 0 || rescue(err);
    if (!shouldIgnoreError) {
      (0,_handleError__WEBPACK_IMPORTED_MODULE_1__/* .handleError */ .H)(err);
    }
    return undefined;
  } finally {
    always === null || always === void 0 || always();
  }
}

/***/ }),

/***/ 51936:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isRetryAllowed)
/* harmony export */ });
const denyList = new Set(['ENOTFOUND', 'ENETUNREACH',
// SSL errors from https://github.com/nodejs/node/blob/fc8e3e2cdc521978351de257030db0076d79e0ab/src/crypto/crypto_common.cc#L301-L328
'UNABLE_TO_GET_ISSUER_CERT', 'UNABLE_TO_GET_CRL', 'UNABLE_TO_DECRYPT_CERT_SIGNATURE', 'UNABLE_TO_DECRYPT_CRL_SIGNATURE', 'UNABLE_TO_DECODE_ISSUER_PUBLIC_KEY', 'CERT_SIGNATURE_FAILURE', 'CRL_SIGNATURE_FAILURE', 'CERT_NOT_YET_VALID', 'CERT_HAS_EXPIRED', 'CRL_NOT_YET_VALID', 'CRL_HAS_EXPIRED', 'ERROR_IN_CERT_NOT_BEFORE_FIELD', 'ERROR_IN_CERT_NOT_AFTER_FIELD', 'ERROR_IN_CRL_LAST_UPDATE_FIELD', 'ERROR_IN_CRL_NEXT_UPDATE_FIELD', 'OUT_OF_MEM', 'DEPTH_ZERO_SELF_SIGNED_CERT', 'SELF_SIGNED_CERT_IN_CHAIN', 'UNABLE_TO_GET_ISSUER_CERT_LOCALLY', 'UNABLE_TO_VERIFY_LEAF_SIGNATURE', 'CERT_CHAIN_TOO_LONG', 'CERT_REVOKED', 'INVALID_CA', 'PATH_LENGTH_EXCEEDED', 'INVALID_PURPOSE', 'CERT_UNTRUSTED', 'CERT_REJECTED', 'HOSTNAME_MISMATCH']);

// TODO: Use `error?.code` when targeting Node.js 14
function isRetryAllowed(error) {
  return !denyList.has(error && error.code);
}

/***/ }),

/***/ 52598:
/***/ (function(__unused_webpack_module, exports) {

// Version 1.7.3
(function (global, factory) {
   true ? factory(exports) : 0;
})(this, function (exports) {
  'use strict';

  const _nodeResolve_empty = {};
  const nodeCrypto = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
  });

  /*! noble-ed25519 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
  const _0n = BigInt(0);
  const _1n = BigInt(1);
  const _2n = BigInt(2);
  const _8n = BigInt(8);
  const CU_O = BigInt('7237005577332262213973186563042994240857116359379907606001950938285454250989');
  const CURVE = Object.freeze({
    a: BigInt(-1),
    d: BigInt('37095705934669439343138083508754565189542113879843219016388785533085940283555'),
    P: BigInt('57896044618658097711785492504343953926634992332820282019728792003956564819949'),
    l: CU_O,
    n: CU_O,
    h: BigInt(8),
    Gx: BigInt('15112221349535400772501151409588531511454012693041857206046113283949847762202'),
    Gy: BigInt('46316835694926478169428394003475163141307993866256225615783033603165251855960')
  });
  const POW_2_256 = BigInt('0x10000000000000000000000000000000000000000000000000000000000000000');
  const SQRT_M1 = BigInt('19681161376707505956807079304988542015446066515923890162744021073123829784752');
  BigInt('6853475219497561581579357271197624642482790079785650197046958215289687604742');
  const SQRT_AD_MINUS_ONE = BigInt('25063068953384623474111414158702152701244531502492656460079210482610430750235');
  const INVSQRT_A_MINUS_D = BigInt('54469307008909316920995813868745141605393597292927456921205312896311721017578');
  const ONE_MINUS_D_SQ = BigInt('1159843021668779879193775521855586647937357759715417654439879720876111806838');
  const D_MINUS_ONE_SQ = BigInt('40440834346308536858101042469323190826248399146238708352240133220865137265952');
  class ExtendedPoint {
    constructor(x, y, z, t) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.t = t;
    }
    static fromAffine(p) {
      if (!(p instanceof Point)) {
        throw new TypeError('ExtendedPoint#fromAffine: expected Point');
      }
      if (p.equals(Point.ZERO)) return ExtendedPoint.ZERO;
      return new ExtendedPoint(p.x, p.y, _1n, mod(p.x * p.y));
    }
    static toAffineBatch(points) {
      const toInv = invertBatch(points.map(p => p.z));
      return points.map((p, i) => p.toAffine(toInv[i]));
    }
    static normalizeZ(points) {
      return this.toAffineBatch(points).map(this.fromAffine);
    }
    equals(other) {
      assertExtPoint(other);
      const {
        x: X1,
        y: Y1,
        z: Z1
      } = this;
      const {
        x: X2,
        y: Y2,
        z: Z2
      } = other;
      const X1Z2 = mod(X1 * Z2);
      const X2Z1 = mod(X2 * Z1);
      const Y1Z2 = mod(Y1 * Z2);
      const Y2Z1 = mod(Y2 * Z1);
      return X1Z2 === X2Z1 && Y1Z2 === Y2Z1;
    }
    negate() {
      return new ExtendedPoint(mod(-this.x), this.y, this.z, mod(-this.t));
    }
    double() {
      const {
        x: X1,
        y: Y1,
        z: Z1
      } = this;
      const {
        a
      } = CURVE;
      const A = mod(X1 * X1);
      const B = mod(Y1 * Y1);
      const C = mod(_2n * mod(Z1 * Z1));
      const D = mod(a * A);
      const x1y1 = X1 + Y1;
      const E = mod(mod(x1y1 * x1y1) - A - B);
      const G = D + B;
      const F = G - C;
      const H = D - B;
      const X3 = mod(E * F);
      const Y3 = mod(G * H);
      const T3 = mod(E * H);
      const Z3 = mod(F * G);
      return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    add(other) {
      assertExtPoint(other);
      const {
        x: X1,
        y: Y1,
        z: Z1,
        t: T1
      } = this;
      const {
        x: X2,
        y: Y2,
        z: Z2,
        t: T2
      } = other;
      const A = mod((Y1 - X1) * (Y2 + X2));
      const B = mod((Y1 + X1) * (Y2 - X2));
      const F = mod(B - A);
      if (F === _0n) return this.double();
      const C = mod(Z1 * _2n * T2);
      const D = mod(T1 * _2n * Z2);
      const E = D + C;
      const G = B + A;
      const H = D - C;
      const X3 = mod(E * F);
      const Y3 = mod(G * H);
      const T3 = mod(E * H);
      const Z3 = mod(F * G);
      return new ExtendedPoint(X3, Y3, Z3, T3);
    }
    subtract(other) {
      return this.add(other.negate());
    }
    precomputeWindow(W) {
      const windows = 1 + 256 / W;
      const points = [];
      let p = this;
      let base = p;
      for (let window = 0; window < windows; window++) {
        base = p;
        points.push(base);
        for (let i = 1; i < 2 ** (W - 1); i++) {
          base = base.add(p);
          points.push(base);
        }
        p = base.double();
      }
      return points;
    }
    wNAF(n, affinePoint) {
      if (!affinePoint && this.equals(ExtendedPoint.BASE)) affinePoint = Point.BASE;
      const W = affinePoint && affinePoint._WINDOW_SIZE || 1;
      if (256 % W) {
        throw new Error('Point#wNAF: Invalid precomputation window, must be power of 2');
      }
      let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
      if (!precomputes) {
        precomputes = this.precomputeWindow(W);
        if (affinePoint && W !== 1) {
          precomputes = ExtendedPoint.normalizeZ(precomputes);
          pointPrecomputes.set(affinePoint, precomputes);
        }
      }
      let p = ExtendedPoint.ZERO;
      let f = ExtendedPoint.BASE;
      const windows = 1 + 256 / W;
      const windowSize = 2 ** (W - 1);
      const mask = BigInt(2 ** W - 1);
      const maxNumber = 2 ** W;
      const shiftBy = BigInt(W);
      for (let window = 0; window < windows; window++) {
        const offset = window * windowSize;
        let wbits = Number(n & mask);
        n >>= shiftBy;
        if (wbits > windowSize) {
          wbits -= maxNumber;
          n += _1n;
        }
        const offset1 = offset;
        const offset2 = offset + Math.abs(wbits) - 1;
        const cond1 = window % 2 !== 0;
        const cond2 = wbits < 0;
        if (wbits === 0) {
          f = f.add(constTimeNegate(cond1, precomputes[offset1]));
        } else {
          p = p.add(constTimeNegate(cond2, precomputes[offset2]));
        }
      }
      return ExtendedPoint.normalizeZ([p, f])[0];
    }
    multiply(scalar, affinePoint) {
      return this.wNAF(normalizeScalar(scalar, CURVE.l), affinePoint);
    }
    multiplyUnsafe(scalar) {
      let n = normalizeScalar(scalar, CURVE.l, false);
      const G = ExtendedPoint.BASE;
      const P0 = ExtendedPoint.ZERO;
      if (n === _0n) return P0;
      if (this.equals(P0) || n === _1n) return this;
      if (this.equals(G)) return this.wNAF(n);
      let p = P0;
      let d = this;
      while (n > _0n) {
        if (n & _1n) p = p.add(d);
        d = d.double();
        n >>= _1n;
      }
      return p;
    }
    isSmallOrder() {
      return this.multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
    }
    isTorsionFree() {
      let p = this.multiplyUnsafe(CURVE.l / _2n).double();
      if (CURVE.l % _2n) p = p.add(this);
      return p.equals(ExtendedPoint.ZERO);
    }
    toAffine(invZ) {
      const {
        x,
        y,
        z
      } = this;
      const is0 = this.equals(ExtendedPoint.ZERO);
      if (invZ == null) invZ = is0 ? _8n : invert(z);
      const ax = mod(x * invZ);
      const ay = mod(y * invZ);
      const zz = mod(z * invZ);
      if (is0) return Point.ZERO;
      if (zz !== _1n) throw new Error('invZ was invalid');
      return new Point(ax, ay);
    }
    fromRistrettoBytes() {
      legacyRist();
    }
    toRistrettoBytes() {
      legacyRist();
    }
    fromRistrettoHash() {
      legacyRist();
    }
  }
  ExtendedPoint.BASE = new ExtendedPoint(CURVE.Gx, CURVE.Gy, _1n, mod(CURVE.Gx * CURVE.Gy));
  ExtendedPoint.ZERO = new ExtendedPoint(_0n, _1n, _1n, _0n);
  function constTimeNegate(condition, item) {
    const neg = item.negate();
    return condition ? neg : item;
  }
  function assertExtPoint(other) {
    if (!(other instanceof ExtendedPoint)) throw new TypeError('ExtendedPoint expected');
  }
  function assertRstPoint(other) {
    if (!(other instanceof RistrettoPoint)) throw new TypeError('RistrettoPoint expected');
  }
  function legacyRist() {
    throw new Error('Legacy method: switch to RistrettoPoint');
  }
  class RistrettoPoint {
    constructor(ep) {
      this.ep = ep;
    }
    static calcElligatorRistrettoMap(r0) {
      const {
        d
      } = CURVE;
      const r = mod(SQRT_M1 * r0 * r0);
      const Ns = mod((r + _1n) * ONE_MINUS_D_SQ);
      let c = BigInt(-1);
      const D = mod((c - d * r) * mod(r + d));
      let {
        isValid: Ns_D_is_sq,
        value: s
      } = uvRatio(Ns, D);
      let s_ = mod(s * r0);
      if (!edIsNegative(s_)) s_ = mod(-s_);
      if (!Ns_D_is_sq) s = s_;
      if (!Ns_D_is_sq) c = r;
      const Nt = mod(c * (r - _1n) * D_MINUS_ONE_SQ - D);
      const s2 = s * s;
      const W0 = mod((s + s) * D);
      const W1 = mod(Nt * SQRT_AD_MINUS_ONE);
      const W2 = mod(_1n - s2);
      const W3 = mod(_1n + s2);
      return new ExtendedPoint(mod(W0 * W3), mod(W2 * W1), mod(W1 * W3), mod(W0 * W2));
    }
    static hashToCurve(hex) {
      hex = ensureBytes(hex, 64);
      const r1 = bytes255ToNumberLE(hex.slice(0, 32));
      const R1 = this.calcElligatorRistrettoMap(r1);
      const r2 = bytes255ToNumberLE(hex.slice(32, 64));
      const R2 = this.calcElligatorRistrettoMap(r2);
      return new RistrettoPoint(R1.add(R2));
    }
    static fromHex(hex) {
      hex = ensureBytes(hex, 32);
      const {
        a,
        d
      } = CURVE;
      const emsg = 'RistrettoPoint.fromHex: the hex is not valid encoding of RistrettoPoint';
      const s = bytes255ToNumberLE(hex);
      if (!equalBytes(numberTo32BytesLE(s), hex) || edIsNegative(s)) throw new Error(emsg);
      const s2 = mod(s * s);
      const u1 = mod(_1n + a * s2);
      const u2 = mod(_1n - a * s2);
      const u1_2 = mod(u1 * u1);
      const u2_2 = mod(u2 * u2);
      const v = mod(a * d * u1_2 - u2_2);
      const {
        isValid,
        value: I
      } = invertSqrt(mod(v * u2_2));
      const Dx = mod(I * u2);
      const Dy = mod(I * Dx * v);
      let x = mod((s + s) * Dx);
      if (edIsNegative(x)) x = mod(-x);
      const y = mod(u1 * Dy);
      const t = mod(x * y);
      if (!isValid || edIsNegative(t) || y === _0n) throw new Error(emsg);
      return new RistrettoPoint(new ExtendedPoint(x, y, _1n, t));
    }
    toRawBytes() {
      let {
        x,
        y,
        z,
        t
      } = this.ep;
      const u1 = mod(mod(z + y) * mod(z - y));
      const u2 = mod(x * y);
      const u2sq = mod(u2 * u2);
      const {
        value: invsqrt
      } = invertSqrt(mod(u1 * u2sq));
      const D1 = mod(invsqrt * u1);
      const D2 = mod(invsqrt * u2);
      const zInv = mod(D1 * D2 * t);
      let D;
      if (edIsNegative(t * zInv)) {
        let _x = mod(y * SQRT_M1);
        let _y = mod(x * SQRT_M1);
        x = _x;
        y = _y;
        D = mod(D1 * INVSQRT_A_MINUS_D);
      } else {
        D = D2;
      }
      if (edIsNegative(x * zInv)) y = mod(-y);
      let s = mod((z - y) * D);
      if (edIsNegative(s)) s = mod(-s);
      return numberTo32BytesLE(s);
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
    toString() {
      return this.toHex();
    }
    equals(other) {
      assertRstPoint(other);
      const a = this.ep;
      const b = other.ep;
      const one = mod(a.x * b.y) === mod(a.y * b.x);
      const two = mod(a.y * b.y) === mod(a.x * b.x);
      return one || two;
    }
    add(other) {
      assertRstPoint(other);
      return new RistrettoPoint(this.ep.add(other.ep));
    }
    subtract(other) {
      assertRstPoint(other);
      return new RistrettoPoint(this.ep.subtract(other.ep));
    }
    multiply(scalar) {
      return new RistrettoPoint(this.ep.multiply(scalar));
    }
    multiplyUnsafe(scalar) {
      return new RistrettoPoint(this.ep.multiplyUnsafe(scalar));
    }
  }
  RistrettoPoint.BASE = new RistrettoPoint(ExtendedPoint.BASE);
  RistrettoPoint.ZERO = new RistrettoPoint(ExtendedPoint.ZERO);
  const pointPrecomputes = new WeakMap();
  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    _setWindowSize(windowSize) {
      this._WINDOW_SIZE = windowSize;
      pointPrecomputes.delete(this);
    }
    static fromHex(hex) {
      let strict = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      const {
        d,
        P
      } = CURVE;
      hex = ensureBytes(hex, 32);
      const normed = hex.slice();
      normed[31] = hex[31] & ~0x80;
      const y = bytesToNumberLE(normed);
      if (strict && y >= P) throw new Error('Expected 0 < hex < P');
      if (!strict && y >= POW_2_256) throw new Error('Expected 0 < hex < 2**256');
      const y2 = mod(y * y);
      const u = mod(y2 - _1n);
      const v = mod(d * y2 + _1n);
      let {
        isValid,
        value: x
      } = uvRatio(u, v);
      if (!isValid) throw new Error('Point.fromHex: invalid y coordinate');
      const isXOdd = (x & _1n) === _1n;
      const isLastByteOdd = (hex[31] & 0x80) !== 0;
      if (isLastByteOdd !== isXOdd) {
        x = mod(-x);
      }
      return new Point(x, y);
    }
    static async fromPrivateKey(privateKey) {
      return (await getExtendedPublicKey(privateKey)).point;
    }
    toRawBytes() {
      const bytes = numberTo32BytesLE(this.y);
      bytes[31] |= this.x & _1n ? 0x80 : 0;
      return bytes;
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
    toX25519() {
      const {
        y
      } = this;
      const u = mod((_1n + y) * invert(_1n - y));
      return numberTo32BytesLE(u);
    }
    isTorsionFree() {
      return ExtendedPoint.fromAffine(this).isTorsionFree();
    }
    equals(other) {
      return this.x === other.x && this.y === other.y;
    }
    negate() {
      return new Point(mod(-this.x), this.y);
    }
    add(other) {
      return ExtendedPoint.fromAffine(this).add(ExtendedPoint.fromAffine(other)).toAffine();
    }
    subtract(other) {
      return this.add(other.negate());
    }
    multiply(scalar) {
      return ExtendedPoint.fromAffine(this).multiply(scalar, this).toAffine();
    }
  }
  Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
  Point.ZERO = new Point(_0n, _1n);
  class Signature {
    constructor(r, s) {
      this.r = r;
      this.s = s;
      this.assertValidity();
    }
    static fromHex(hex) {
      const bytes = ensureBytes(hex, 64);
      const r = Point.fromHex(bytes.slice(0, 32), false);
      const s = bytesToNumberLE(bytes.slice(32, 64));
      return new Signature(r, s);
    }
    assertValidity() {
      const {
        r,
        s
      } = this;
      if (!(r instanceof Point)) throw new Error('Expected Point instance');
      normalizeScalar(s, CURVE.l, false);
      return this;
    }
    toRawBytes() {
      const u8 = new Uint8Array(64);
      u8.set(this.r.toRawBytes());
      u8.set(numberTo32BytesLE(this.s), 32);
      return u8;
    }
    toHex() {
      return bytesToHex(this.toRawBytes());
    }
  }
  function concatBytes() {
    for (var _len = arguments.length, arrays = new Array(_len), _key = 0; _key < _len; _key++) {
      arrays[_key] = arguments[_key];
    }
    if (!arrays.every(a => a instanceof Uint8Array)) throw new Error('Expected Uint8Array list');
    if (arrays.length === 1) return arrays[0];
    const length = arrays.reduce((a, arr) => a + arr.length, 0);
    const result = new Uint8Array(length);
    for (let i = 0, pad = 0; i < arrays.length; i++) {
      const arr = arrays[i];
      result.set(arr, pad);
      pad += arr.length;
    }
    return result;
  }
  const hexes = Array.from({
    length: 256
  }, (v, i) => i.toString(16).padStart(2, '0'));
  function bytesToHex(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error('Uint8Array expected');
    let hex = '';
    for (let i = 0; i < uint8a.length; i++) {
      hex += hexes[uint8a[i]];
    }
    return hex;
  }
  function hexToBytes(hex) {
    if (typeof hex !== 'string') {
      throw new TypeError('hexToBytes: expected string, got ' + typeof hex);
    }
    if (hex.length % 2) throw new Error('hexToBytes: received invalid unpadded hex');
    const array = new Uint8Array(hex.length / 2);
    for (let i = 0; i < array.length; i++) {
      const j = i * 2;
      const hexByte = hex.slice(j, j + 2);
      const byte = Number.parseInt(hexByte, 16);
      if (Number.isNaN(byte) || byte < 0) throw new Error('Invalid byte sequence');
      array[i] = byte;
    }
    return array;
  }
  function numberTo32BytesBE(num) {
    const length = 32;
    const hex = num.toString(16).padStart(length * 2, '0');
    return hexToBytes(hex);
  }
  function numberTo32BytesLE(num) {
    return numberTo32BytesBE(num).reverse();
  }
  function edIsNegative(num) {
    return (mod(num) & _1n) === _1n;
  }
  function bytesToNumberLE(uint8a) {
    if (!(uint8a instanceof Uint8Array)) throw new Error('Expected Uint8Array');
    return BigInt('0x' + bytesToHex(Uint8Array.from(uint8a).reverse()));
  }
  const MAX_255B = BigInt('0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  function bytes255ToNumberLE(bytes) {
    return mod(bytesToNumberLE(bytes) & MAX_255B);
  }
  function mod(a) {
    let b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CURVE.P;
    const res = a % b;
    return res >= _0n ? res : b + res;
  }
  function invert(number) {
    let modulo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CURVE.P;
    if (number === _0n || modulo <= _0n) {
      throw new Error(`invert: expected positive integers, got n=${number} mod=${modulo}`);
    }
    let a = mod(number, modulo);
    let b = modulo;
    let x = _0n,
      u = _1n;
    while (a !== _0n) {
      const q = b / a;
      const r = b % a;
      const m = x - u * q;
      b = a, a = r, x = u, u = m;
    }
    const gcd = b;
    if (gcd !== _1n) throw new Error('invert: does not exist');
    return mod(x, modulo);
  }
  function invertBatch(nums) {
    let p = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : CURVE.P;
    const tmp = new Array(nums.length);
    const lastMultiplied = nums.reduce((acc, num, i) => {
      if (num === _0n) return acc;
      tmp[i] = acc;
      return mod(acc * num, p);
    }, _1n);
    const inverted = invert(lastMultiplied, p);
    nums.reduceRight((acc, num, i) => {
      if (num === _0n) return acc;
      tmp[i] = mod(acc * tmp[i], p);
      return mod(acc * num, p);
    }, inverted);
    return tmp;
  }
  function pow2(x, power) {
    const {
      P
    } = CURVE;
    let res = x;
    while (power-- > _0n) {
      res *= res;
      res %= P;
    }
    return res;
  }
  function pow_2_252_3(x) {
    const {
      P
    } = CURVE;
    const _5n = BigInt(5);
    const _10n = BigInt(10);
    const _20n = BigInt(20);
    const _40n = BigInt(40);
    const _80n = BigInt(80);
    const x2 = x * x % P;
    const b2 = x2 * x % P;
    const b4 = pow2(b2, _2n) * b2 % P;
    const b5 = pow2(b4, _1n) * x % P;
    const b10 = pow2(b5, _5n) * b5 % P;
    const b20 = pow2(b10, _10n) * b10 % P;
    const b40 = pow2(b20, _20n) * b20 % P;
    const b80 = pow2(b40, _40n) * b40 % P;
    const b160 = pow2(b80, _80n) * b80 % P;
    const b240 = pow2(b160, _80n) * b80 % P;
    const b250 = pow2(b240, _10n) * b10 % P;
    const pow_p_5_8 = pow2(b250, _2n) * x % P;
    return {
      pow_p_5_8,
      b2
    };
  }
  function uvRatio(u, v) {
    const v3 = mod(v * v * v);
    const v7 = mod(v3 * v3 * v);
    const pow = pow_2_252_3(u * v7).pow_p_5_8;
    let x = mod(u * v3 * pow);
    const vx2 = mod(v * x * x);
    const root1 = x;
    const root2 = mod(x * SQRT_M1);
    const useRoot1 = vx2 === u;
    const useRoot2 = vx2 === mod(-u);
    const noRoot = vx2 === mod(-u * SQRT_M1);
    if (useRoot1) x = root1;
    if (useRoot2 || noRoot) x = root2;
    if (edIsNegative(x)) x = mod(-x);
    return {
      isValid: useRoot1 || useRoot2,
      value: x
    };
  }
  function invertSqrt(number) {
    return uvRatio(_1n, number);
  }
  function modlLE(hash) {
    return mod(bytesToNumberLE(hash), CURVE.l);
  }
  function equalBytes(b1, b2) {
    if (b1.length !== b2.length) {
      return false;
    }
    for (let i = 0; i < b1.length; i++) {
      if (b1[i] !== b2[i]) {
        return false;
      }
    }
    return true;
  }
  function ensureBytes(hex, expectedLength) {
    const bytes = hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
    if (typeof expectedLength === 'number' && bytes.length !== expectedLength) throw new Error(`Expected ${expectedLength} bytes`);
    return bytes;
  }
  function normalizeScalar(num, max) {
    let strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    if (!max) throw new TypeError('Specify max value');
    if (typeof num === 'number' && Number.isSafeInteger(num)) num = BigInt(num);
    if (typeof num === 'bigint' && num < max) {
      if (strict) {
        if (_0n < num) return num;
      } else {
        if (_0n <= num) return num;
      }
    }
    throw new TypeError('Expected valid scalar: 0 < scalar < max');
  }
  function adjustBytes25519(bytes) {
    bytes[0] &= 248;
    bytes[31] &= 127;
    bytes[31] |= 64;
    return bytes;
  }
  function decodeScalar25519(n) {
    return bytesToNumberLE(adjustBytes25519(ensureBytes(n, 32)));
  }
  function checkPrivateKey(key) {
    key = typeof key === 'bigint' || typeof key === 'number' ? numberTo32BytesBE(normalizeScalar(key, POW_2_256)) : ensureBytes(key);
    if (key.length !== 32) throw new Error(`Expected 32 bytes`);
    return key;
  }
  function getKeyFromHash(hashed) {
    const head = adjustBytes25519(hashed.slice(0, 32));
    const prefix = hashed.slice(32, 64);
    const scalar = modlLE(head);
    const point = Point.BASE.multiply(scalar);
    const pointBytes = point.toRawBytes();
    return {
      head,
      prefix,
      scalar,
      point,
      pointBytes
    };
  }
  let _sha512Sync;
  function sha512s() {
    if (typeof _sha512Sync !== 'function') throw new Error('utils.sha512Sync must be set to use sync methods');
    return _sha512Sync(...arguments);
  }
  async function getExtendedPublicKey(key) {
    return getKeyFromHash(await utils.sha512(checkPrivateKey(key)));
  }
  function getExtendedPublicKeySync(key) {
    return getKeyFromHash(sha512s(checkPrivateKey(key)));
  }
  async function getPublicKey(privateKey) {
    return (await getExtendedPublicKey(privateKey)).pointBytes;
  }
  function getPublicKeySync(privateKey) {
    return getExtendedPublicKeySync(privateKey).pointBytes;
  }
  async function sign(message, privateKey) {
    message = ensureBytes(message);
    const {
      prefix,
      scalar,
      pointBytes
    } = await getExtendedPublicKey(privateKey);
    const r = modlLE(await utils.sha512(prefix, message));
    const R = Point.BASE.multiply(r);
    const k = modlLE(await utils.sha512(R.toRawBytes(), pointBytes, message));
    const s = mod(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
  }
  function signSync(message, privateKey) {
    message = ensureBytes(message);
    const {
      prefix,
      scalar,
      pointBytes
    } = getExtendedPublicKeySync(privateKey);
    const r = modlLE(sha512s(prefix, message));
    const R = Point.BASE.multiply(r);
    const k = modlLE(sha512s(R.toRawBytes(), pointBytes, message));
    const s = mod(r + k * scalar, CURVE.l);
    return new Signature(R, s).toRawBytes();
  }
  function prepareVerification(sig, message, publicKey) {
    message = ensureBytes(message);
    if (!(publicKey instanceof Point)) publicKey = Point.fromHex(publicKey, false);
    const {
      r,
      s
    } = sig instanceof Signature ? sig.assertValidity() : Signature.fromHex(sig);
    const SB = ExtendedPoint.BASE.multiplyUnsafe(s);
    return {
      r,
      s,
      SB,
      pub: publicKey,
      msg: message
    };
  }
  function finishVerification(publicKey, r, SB, hashed) {
    const k = modlLE(hashed);
    const kA = ExtendedPoint.fromAffine(publicKey).multiplyUnsafe(k);
    const RkA = ExtendedPoint.fromAffine(r).add(kA);
    return RkA.subtract(SB).multiplyUnsafe(CURVE.h).equals(ExtendedPoint.ZERO);
  }
  async function verify(sig, message, publicKey) {
    const {
      r,
      SB,
      msg,
      pub
    } = prepareVerification(sig, message, publicKey);
    const hashed = await utils.sha512(r.toRawBytes(), pub.toRawBytes(), msg);
    return finishVerification(pub, r, SB, hashed);
  }
  function verifySync(sig, message, publicKey) {
    const {
      r,
      SB,
      msg,
      pub
    } = prepareVerification(sig, message, publicKey);
    const hashed = sha512s(r.toRawBytes(), pub.toRawBytes(), msg);
    return finishVerification(pub, r, SB, hashed);
  }
  const sync = {
    getExtendedPublicKey: getExtendedPublicKeySync,
    getPublicKey: getPublicKeySync,
    sign: signSync,
    verify: verifySync
  };
  async function getSharedSecret(privateKey, publicKey) {
    const {
      head
    } = await getExtendedPublicKey(privateKey);
    const u = Point.fromHex(publicKey).toX25519();
    return curve25519.scalarMult(head, u);
  }
  Point.BASE._setWindowSize(8);
  function cswap(swap, x_2, x_3) {
    const dummy = mod(swap * (x_2 - x_3));
    x_2 = mod(x_2 - dummy);
    x_3 = mod(x_3 + dummy);
    return [x_2, x_3];
  }
  function montgomeryLadder(pointU, scalar) {
    const {
      P
    } = CURVE;
    const u = normalizeScalar(pointU, P);
    const k = normalizeScalar(scalar, P);
    const a24 = BigInt(121665);
    const x_1 = u;
    let x_2 = _1n;
    let z_2 = _0n;
    let x_3 = u;
    let z_3 = _1n;
    let swap = _0n;
    let sw;
    for (let t = BigInt(255 - 1); t >= _0n; t--) {
      const k_t = k >> t & _1n;
      swap ^= k_t;
      sw = cswap(swap, x_2, x_3);
      x_2 = sw[0];
      x_3 = sw[1];
      sw = cswap(swap, z_2, z_3);
      z_2 = sw[0];
      z_3 = sw[1];
      swap = k_t;
      const A = x_2 + z_2;
      const AA = mod(A * A);
      const B = x_2 - z_2;
      const BB = mod(B * B);
      const E = AA - BB;
      const C = x_3 + z_3;
      const D = x_3 - z_3;
      const DA = mod(D * A);
      const CB = mod(C * B);
      const dacb = DA + CB;
      const da_cb = DA - CB;
      x_3 = mod(dacb * dacb);
      z_3 = mod(x_1 * mod(da_cb * da_cb));
      x_2 = mod(AA * BB);
      z_2 = mod(E * (AA + mod(a24 * E)));
    }
    sw = cswap(swap, x_2, x_3);
    x_2 = sw[0];
    x_3 = sw[1];
    sw = cswap(swap, z_2, z_3);
    z_2 = sw[0];
    z_3 = sw[1];
    const {
      pow_p_5_8,
      b2
    } = pow_2_252_3(z_2);
    const xp2 = mod(pow2(pow_p_5_8, BigInt(3)) * b2);
    return mod(x_2 * xp2);
  }
  function encodeUCoordinate(u) {
    return numberTo32BytesLE(mod(u, CURVE.P));
  }
  function decodeUCoordinate(uEnc) {
    const u = ensureBytes(uEnc, 32);
    u[31] &= 127;
    return bytesToNumberLE(u);
  }
  const curve25519 = {
    BASE_POINT_U: '0900000000000000000000000000000000000000000000000000000000000000',
    scalarMult(privateKey, publicKey) {
      const u = decodeUCoordinate(publicKey);
      const p = decodeScalar25519(privateKey);
      const pu = montgomeryLadder(u, p);
      if (pu === _0n) throw new Error('Invalid private or public key received');
      return encodeUCoordinate(pu);
    },
    scalarMultBase(privateKey) {
      return curve25519.scalarMult(privateKey, curve25519.BASE_POINT_U);
    }
  };
  const crypto = {
    node: nodeCrypto,
    web: typeof self === 'object' && 'crypto' in self ? self.crypto : undefined
  };
  const utils = {
    bytesToHex,
    hexToBytes,
    concatBytes,
    getExtendedPublicKey,
    mod,
    invert,
    TORSION_SUBGROUP: ['0100000000000000000000000000000000000000000000000000000000000000', 'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac037a', '0000000000000000000000000000000000000000000000000000000000000080', '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc05', 'ecffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff7f', '26e8958fc2b227b045c3f489f2ef98f0d5dfac05d3c63339b13802886d53fc85', '0000000000000000000000000000000000000000000000000000000000000000', 'c7176a703d4dd84fba3c0b760d10670f2a2053fa2c39ccc64ec7fd7792ac03fa'],
    hashToPrivateScalar: hash => {
      hash = ensureBytes(hash);
      if (hash.length < 40 || hash.length > 1024) throw new Error('Expected 40-1024 bytes of private key as per FIPS 186');
      return mod(bytesToNumberLE(hash), CURVE.l - _1n) + _1n;
    },
    randomBytes: function () {
      let bytesLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 32;
      if (crypto.web) {
        return crypto.web.getRandomValues(new Uint8Array(bytesLength));
      } else if (crypto.node) {
        const {
          randomBytes
        } = crypto.node;
        return new Uint8Array(randomBytes(bytesLength).buffer);
      } else {
        throw new Error("The environment doesn't have randomBytes function");
      }
    },
    randomPrivateKey: () => {
      return utils.randomBytes(32);
    },
    sha512: async function () {
      const message = concatBytes(...arguments);
      if (crypto.web) {
        const buffer = await crypto.web.subtle.digest('SHA-512', message.buffer);
        return new Uint8Array(buffer);
      } else if (crypto.node) {
        return Uint8Array.from(crypto.node.createHash('sha512').update(message).digest());
      } else {
        throw new Error("The environment doesn't have sha512 function");
      }
    },
    precompute() {
      let windowSize = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;
      let point = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Point.BASE;
      const cached = point.equals(Point.BASE) ? point : new Point(point.x, point.y);
      cached._setWindowSize(windowSize);
      cached.multiply(_2n);
      return cached;
    },
    sha512Sync: undefined
  };
  Object.defineProperties(utils, {
    sha512Sync: {
      configurable: false,
      get() {
        return _sha512Sync;
      },
      set(val) {
        if (!_sha512Sync) _sha512Sync = val;
      }
    }
  });
  exports.CURVE = CURVE;
  exports.ExtendedPoint = ExtendedPoint;
  exports.Point = Point;
  exports.RistrettoPoint = RistrettoPoint;
  exports.Signature = Signature;
  exports.curve25519 = curve25519;
  exports.getPublicKey = getPublicKey;
  exports.getSharedSecret = getSharedSecret;
  exports.sign = sign;
  exports.sync = sync;
  exports.utils = utils;
  exports.verify = verify;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});

/***/ }),

/***/ 53297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M: () => (/* binding */ readCellOpt)
/* harmony export */ });
/* harmony import */ var _util_safeExec__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50110);

function readCellOpt(stack) {
  return (0,_util_safeExec__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(() => stack.readCellOpt(), {
    shouldIgnoreError: true
  }) ?? undefined;
}

/***/ }),

/***/ 55029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MD: () => (/* binding */ logDebug),
/* harmony export */   SJ: () => (/* binding */ logDebugError),
/* harmony export */   ao: () => (/* binding */ getLogs)
/* harmony export */ });
/* unused harmony exports errorReplacer, addLog, logDebugApi, logSelfXssWarnings */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* harmony import */ var _assert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59288);


const MAX_LOG_LENGTH = 999;
const logs = [];
function errorReplacer(_, value) {
  if (value instanceof Error) {
    return {
      name: value.name,
      message: value.message,
      stack: value.stack,
      metadata: value instanceof _assert__WEBPACK_IMPORTED_MODULE_1__/* .AssertionError */ .p ? value.metadata : undefined
    };
  }
  return value;
}
function addLog(log) {
  if (logs.length > MAX_LOG_LENGTH) {
    logs.shift();
  }
  logs.push({
    ...log,
    args: log.args.map(arg => JSON.stringify(arg, errorReplacer)),
    time: Date.now()
  });
}
function getLogs() {
  return logs;
}
function logDebugError(message) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  addLog({
    message,
    level: 'debugError',
    args
  });
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .DEBUG */ .Oig) {
    // eslint-disable-next-line no-console
    console.error(`[DEBUG][${message}]`, ...args);
  }
}
function logDebug(message) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  addLog({
    message,
    level: 'debug',
    args
  });
  if (_config__WEBPACK_IMPORTED_MODULE_0__/* .DEBUG */ .Oig) {
    // eslint-disable-next-line no-console
    console.log(`[DEBUG] ${message}`, ...args);
  }
}
function logDebugApi(message, obj1, obj2) {
  if (DEBUG_API) {
    // eslint-disable-next-line no-console
    console.debug(`[DEBUG] ${message}`);
    // eslint-disable-next-line no-console
    if (obj1) console.dir(obj1);
    // eslint-disable-next-line no-console
    if (obj2) console.dir(obj2);
  }
}
function logSelfXssWarnings() {
  const selfXssWarnings = {
    en: 'WARNING! This console can be a way for bad people to take over your crypto wallet through something called ' + 'a Self-XSS attack. So, don\'t put in or paste code you don\'t understand. Stay safe!',
    ru: 'ВНИМАНИЕ! Через эту консоль злоумышленники могут захватить ваш криптовалютный кошелёк с помощью так ' + 'называемой атаки Self-XSS. Поэтому не вводите и не вставляйте код, который вы не понимаете. Берегите себя!',
    es: '¡ADVERTENCIA! Esta consola puede ser una forma en que las personas malintencionadas se apoderen de su ' + 'billetera de criptomonedas mediante un ataque llamado Self-XSS. Por lo tanto, ' + 'no introduzca ni pegue código que no comprenda. ¡Cuídese!',
    zh: '警告！这个控制台可能成为坏人通过所谓的Self-XSS攻击来接管你的加密货币钱包的方式。因此，请不要输入或粘贴您不理解的代码。请保护自己！'
  };
  const langCode = navigator.language.split('-')[0];
  const text = selfXssWarnings[langCode] || selfXssWarnings.en;

  // eslint-disable-next-line no-console
  console.log('%c%s', 'color: red; background: yellow; font-size: 18px;', text);
}

/***/ }),

/***/ 56051:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   KL: () => (/* binding */ ApiTransactionDraftError),
/* harmony export */   Nu: () => (/* binding */ ApiAuthError),
/* harmony export */   QD: () => (/* binding */ ApiCommonError),
/* harmony export */   jc: () => (/* binding */ ApiHardwareError),
/* harmony export */   jf: () => (/* binding */ ApiTransactionError)
/* harmony export */ });
let ApiCommonError = /*#__PURE__*/function (ApiCommonError) {
  ApiCommonError["Unexpected"] = "Unexpected";
  ApiCommonError["ServerError"] = "ServerError";
  ApiCommonError["DebugError"] = "DebugError";
  ApiCommonError["UnsupportedVersion"] = "UnsupportedVersion";
  ApiCommonError["InvalidPassword"] = "InvalidPassword";
  return ApiCommonError;
}({});
let ApiAuthError = /*#__PURE__*/function (ApiAuthError) {
  ApiAuthError["InvalidMnemonic"] = "InvalidMnemonic";
  ApiAuthError["InvalidAddress"] = "InvalidAddress";
  ApiAuthError["DomainNotResolved"] = "DomainNotResolved";
  return ApiAuthError;
}({});
let ApiTransactionDraftError = /*#__PURE__*/function (ApiTransactionDraftError) {
  ApiTransactionDraftError["InvalidAmount"] = "InvalidAmount";
  ApiTransactionDraftError["InvalidToAddress"] = "InvalidToAddress";
  ApiTransactionDraftError["InsufficientBalance"] = "InsufficientBalance";
  ApiTransactionDraftError["InvalidStateInit"] = "InvalidStateInit";
  ApiTransactionDraftError["DomainNotResolved"] = "DomainNotResolved";
  ApiTransactionDraftError["WalletNotInitialized"] = "WalletNotInitialized";
  ApiTransactionDraftError["InvalidAddressFormat"] = "InvalidAddressFormat";
  ApiTransactionDraftError["InactiveContract"] = "InactiveContract";
  return ApiTransactionDraftError;
}({});
let ApiTransactionError = /*#__PURE__*/function (ApiTransactionError) {
  ApiTransactionError["PartialTransactionFailure"] = "PartialTransactionFailure";
  ApiTransactionError["IncorrectDeviceTime"] = "IncorrectDeviceTime";
  ApiTransactionError["InsufficientBalance"] = "InsufficientBalance";
  ApiTransactionError["UnsuccesfulTransfer"] = "UnsuccesfulTransfer";
  ApiTransactionError["WrongAddress"] = "WrongAddress";
  ApiTransactionError["WrongNetwork"] = "WrongNetwork";
  ApiTransactionError["ConcurrentTransaction"] = "ConcurrentTransaction";
  return ApiTransactionError;
}({});
let ApiHardwareError = /*#__PURE__*/function (ApiHardwareError) {
  /** Used when the Ledger TON app needs to be updated to support this transaction */
  ApiHardwareError["HardwareOutdated"] = "HardwareOutdated";
  ApiHardwareError["BlindSigningNotEnabled"] = "BlindSigningNotEnabled";
  ApiHardwareError["RejectedByUser"] = "RejectedByUser";
  ApiHardwareError["ProofTooLarge"] = "ProofTooLarge";
  return ApiHardwareError;
}({});

/***/ }),

/***/ 59121:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   po: () => (/* binding */ randomBytes)
/* harmony export */ });
/* unused harmony exports random, sample, randomBase64 */
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function sample(arr) {
  return arr[random(0, arr.length - 1)];
}
function randomBytes(size) {
  return self.crypto.getRandomValues(new Uint8Array(size));
}
function randomBase64(byteSize) {
  return Buffer.from(randomBytes(byteSize)).toString('base64');
}

/***/ }),

/***/ 59288:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   p: () => (/* binding */ AssertionError),
/* harmony export */   v: () => (/* binding */ assert)
/* harmony export */ });
class AssertionError extends Error {
  constructor(message,
  // Any additional information for the error to help debug it. Don't put sensitive information here.
  metadata) {
    super(message);
    this.metadata = metadata;
  }
}
function assert(condition, message, metadata) {
  if (!condition) {
    throw new AssertionError(message, metadata);
  }
}

/***/ }),

/***/ 60341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Jx: () => (/* binding */ isKnownStakingPool),
/* harmony export */   Kp: () => (/* binding */ base64ToBytes),
/* harmony export */   My: () => (/* binding */ bytesToHex),
/* harmony export */   QM: () => (/* binding */ base64ToString),
/* harmony export */   aT: () => (/* binding */ hexToBytes),
/* harmony export */   sc: () => (/* binding */ sha256)
/* harmony export */ });
/* unused harmony export bytesToBase64 */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

function sha256(bytes) {
  return crypto.subtle.digest('SHA-256', bytes);
}
function bytesToHex(bytes) {
  return Buffer.from(bytes).toString('hex');
}
function hexToBytes(hex) {
  return Uint8Array.from(Buffer.from(hex, 'hex'));
}
function bytesToBase64(bytes) {
  return Buffer.from(bytes).toString('base64');
}
function base64ToBytes(base64) {
  return Uint8Array.from(Buffer.from(base64, 'base64'));
}
function base64ToString(base64) {
  return Buffer.from(base64, 'base64').toString('utf-8');
}
function isKnownStakingPool(address) {
  return _config__WEBPACK_IMPORTED_MODULE_0__/* .STAKING_POOLS */ .aPk.some(poolPart => address.endsWith(poolPart));
}

/***/ }),

/***/ 61995:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Hc: () => (/* binding */ Dividers),
/* harmony export */   Hx: () => (/* binding */ JettonStakingOpCodes),
/* harmony export */   xT: () => (/* binding */ JettonStakingGas)
/* harmony export */ });
const JettonStakingOpCodes = {
  GET_STATIC_DATA: 0X2FCB26A2,
  REPORT_STATIC_DATA: 0X8B771735,
  GET_STORAGE_DATA: 0X5B88E5CC,
  REPORT_STORAGE_DATA: 0XAAB4A8EF,
  EXCESSES: 0XD53276DB,
  // Jettons,
  TRANSFER_JETTON: 0X0F8A7EA5,
  INTERNAL_TRANSFER: 0X178D4519,
  TRANSFER_NOTIFICATION: 0X7362D09C,
  PROVIDE_WALLET_ADDRESS: 0X2C76B973,
  TAKE_WALLET_ADDRESS: 0XD1735400,
  BURN_JETTON: 0X595F07BC,
  // Staking pool,
  STAKE_JETTONS: 0XE3A06989,
  ADD_REWARDS: 0XDB16AC95,
  SEND_CLAIMED_REWARDS: 0X44BC1FE3,
  SEND_UNSTAKED_JETTONS: 0XFB232BC3,
  APPROVE_STAKE: 0X919DE781,
  CANCEL_STAKE: 0X9EADA1D9,
  ADD_REWARD_JETTONS: 0X10676AE7,
  CLAIM_COMMISSIONS: 0XBCA8F067,
  REQUEST_UPDATE_REWARDS: 0XF5C5BAA3,
  // Staked jetton wallet,
  CLAIM_REWARDS: 0X78D9F109,
  RECEIVE_JETTONS: 0XD68A4AC1,
  UNSTAKE_JETTONS: 0X499A9262,
  UNSTAKE_REQUEST: 0X0168D4B7,
  CANCEL_UNSTAKE_REQUEST: 0XA4910F1A,
  UPDATE_REWARDS: 0XAE9307CE,
  CONFIRM_TRANSFER: 0XBC85EB11,
  // Pools admin,
  DEPLOY_NEW_POOL: 0XDA861F17,
  SEND_COMMISSIONS: 0XB96ADAEA,
  SET_CODE: 0xe2d2d211,
  CHANGE_CREATION_FEE: 0x66D5528B,
  CHANGE_CONTENT: 0x0ec29200,
  UPDATE_CODES: 0x85c923cf
};
const JettonStakingGas = {
  MIN_RESERVE: 20_000_000n,
  DEPLOY_POOL: 340_000_000n,
  NOTIFICATION: 340_000_000n,
  JETTON_TRANSFER: 55_000_000n,
  BURN_JETTONS: 340_000_000n,
  STAKE_JETTONS: 300_000_000n,
  // It was 340000000n
  UNSTAKE_JETTONS: 340_000_000n,
  CANCEL_UNSTAKE: 340_000_000n,
  SEND_COMMISSIONS: 340_000_000n,
  SIMPLE_UPDATE_REQUEST: 340_000_000n,
  ADD_REWARDS: 340_000_000n,
  APPROVE_TRANSFER: 340_000_000n,
  SAVE_UPDATED_REWARDS: 340_000_000n,
  MIN_EXCESS: 10_000_000n,
  SEND_STAKED_JETTONS: 630_000_000n
};
const Dividers = {
  COMMISSION_DIVIDER: 10000n,
  REWARDS_DIVIDER: 1000,
  DISTRIBUTION_SPEED_DIVIDER: BigInt(24 * 60 * 60),
  DISTRIBUTED_REWARDS_DIVIDER: 100000000000000000000000000000000000000n
};

/***/ }),

/***/ 67132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ JettonWallet)
/* harmony export */ });
/* unused harmony export jettonWalletConfigToCell */
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ton_core__WEBPACK_IMPORTED_MODULE_0__);

function jettonWalletConfigToCell(config) {
  return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().endCell();
}
class JettonWallet {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new JettonWallet(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = jettonWalletConfigToCell(config);
    const init = {
      code,
      data
    };
    return new JettonWallet((0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.contractAddress)(workchain, init), init);
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: _ton_core__WEBPACK_IMPORTED_MODULE_0__.SendMode.PAY_GAS_SEPARATELY,
      body: (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().endCell()
    });
  }
  async getJettonBalance(provider) {
    const state = await provider.getState();
    if (state.state.type !== 'active') {
      return 0n;
    }
    const res = await provider.get('get_wallet_data', []);
    return res.stack.readBigNumber();
  }
  static transferMessage(jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload) {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(0xf8a7ea5, 32).storeUint(0, 64) // op, queryId
    .storeCoins(jetton_amount).storeAddress(to).storeAddress(responseAddress).storeMaybeRef(customPayload).storeCoins(forward_ton_amount).storeMaybeRef(forwardPayload).endCell();
  }
  async sendTransfer(provider, via, value, jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload) {
    await provider.internal(via, {
      sendMode: _ton_core__WEBPACK_IMPORTED_MODULE_0__.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.transferMessage(jetton_amount, to, responseAddress, customPayload, forward_ton_amount, forwardPayload),
      value
    });
  }

  /*
    burn#595f07bc query_id:uint64 amount:(VarUInteger 16)
                  response_destination:MsgAddress custom_payload:(Maybe ^Cell)
                  = InternalMsgBody;
  */
  static burnMessage(jetton_amount, responseAddress, customPayload) {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(0x595f07bc, 32).storeUint(0, 64) // op, queryId
    .storeCoins(jetton_amount).storeAddress(responseAddress).storeMaybeRef(customPayload).endCell();
  }
  async sendBurn(provider, via, value, jetton_amount, responseAddress, customPayload) {
    await provider.internal(via, {
      sendMode: _ton_core__WEBPACK_IMPORTED_MODULE_0__.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.burnMessage(jetton_amount, responseAddress, customPayload),
      value
    });
  }

  /*
    withdraw_tons#107c49ef query_id:uint64 = InternalMsgBody;
  */
  static withdrawTonsMessage() {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(0x6d8e5e3c, 32).storeUint(0, 64) // op, queryId
    .endCell();
  }
  async sendWithdrawTons(provider, via) {
    await provider.internal(via, {
      sendMode: _ton_core__WEBPACK_IMPORTED_MODULE_0__.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.withdrawTonsMessage(),
      value: (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.toNano)('0.1')
    });
  }

  /*
    withdraw_jettons#10 query_id:uint64 wallet:MsgAddressInt amount:Coins = InternalMsgBody;
  */
  static withdrawJettonsMessage(from, amount) {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(0x768a50b2, 32).storeUint(0, 64) // op, queryId
    .storeAddress(from).storeCoins(amount).storeMaybeRef(undefined).endCell();
  }
  async sendWithdrawJettons(provider, via, from, amount) {
    await provider.internal(via, {
      sendMode: _ton_core__WEBPACK_IMPORTED_MODULE_0__.SendMode.PAY_GAS_SEPARATELY,
      body: JettonWallet.withdrawJettonsMessage(from, amount),
      value: (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.toNano)('0.1')
    });
  }
  async getWalletData(provider) {
    const res = await provider.get('get_wallet_data', []);
    const balance = res.stack.readBigNumber();
    const owner = res.stack.readAddress();
    const minter = res.stack.readAddress();
    const code = res.stack.readCell();
    return {
      balance,
      owner,
      minter,
      code
    };
  }
}

/***/ }),

/***/ 67491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $7: () => (/* binding */ getDnsZoneByCollection),
/* harmony export */   iy: () => (/* binding */ isDnsDomain),
/* harmony export */   u_: () => (/* binding */ getDnsDomainZone)
/* harmony export */ });
/* unused harmony exports isTonDnsNft, getTonDnsExpirationDate, filterExpiringDomains, getDomainsExpirationDate */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/* harmony import */ var _dateFormat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10309);


function isDnsDomain(value) {
  return getDnsDomainZone(value) !== undefined;
}
function getDnsDomainZone(domain) {
  for (const zone of _config__WEBPACK_IMPORTED_MODULE_0__/* .TON_DNS_ZONES */ .gs5) {
    const {
      suffixes,
      baseFormat
    } = zone;

    // Iterating the zones in reverse to prioritize longer zones when multiple zones match (assuming the zones go from
    // the shortest to the longest). For example, `test.ton.vip` matches both `vip` and `ton.vip`, and `ton.vip` must be
    // used.
    for (let i = suffixes.length - 1; i >= 0; i--) {
      const suffix = suffixes[i];
      if (!domain.endsWith(`.${suffix}`)) {
        continue;
      }
      const base = domain.slice(0, -suffix.length - 1);
      if (!baseFormat.test(base)) {
        continue;
      }
      return {
        base,
        zone
      };
    }
  }
  return undefined;
}
function getDnsZoneByCollection(collectionAddress) {
  return _config__WEBPACK_IMPORTED_MODULE_0__/* .TON_DNS_ZONES */ .gs5.find(zone => zone.resolver === collectionAddress);
}
function isTonDnsNft(nft) {
  return (nft === null || nft === void 0 ? void 0 : nft.collectionAddress) === TON_DNS_COLLECTION;
}
function getTonDnsExpirationDate(nft, dnsExpiration) {
  return isTonDnsNft(nft) ? dnsExpiration === null || dnsExpiration === void 0 ? void 0 : dnsExpiration[nft.address] : undefined;
}
function filterExpiringDomains(nftAddresses, nftByAddress, dnsExpiration) {
  const expiringDomains = [];
  if (nftByAddress && dnsExpiration) {
    for (const address of nftAddresses) {
      const nft = nftByAddress[address];
      if (getCountDaysToDate(getTonDnsExpirationDate(nft, dnsExpiration) ?? Infinity) <= TON_DNS_RENEWAL_WARNING_DAYS) {
        expiringDomains.push(nft);
      }
    }
  }
  return expiringDomains;
}
function getDomainsExpirationDate(nfts, nftByAddress, dnsExpiration) {
  if (!dnsExpiration) {
    return undefined;
  }
  return nfts.reduce((minDate, nftOrAddress) => {
    const nft = typeof nftOrAddress === 'string' ? nftByAddress === null || nftByAddress === void 0 ? void 0 : nftByAddress[nftOrAddress] : nftOrAddress;
    const expirationDate = getTonDnsExpirationDate(nft, dnsExpiration);
    return expirationDate ? Math.min(expirationDate, minDate ?? Infinity) : minDate;
  }, undefined);
}

/***/ }),

/***/ 68249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ setEnvironment),
/* harmony export */   u: () => (/* binding */ getEnvironment)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31481);
/*
 * This module is to be used instead of /src/util/environment.ts
 * when `window` is not available (e.g. in a web worker).
 */


const ELECTRON_ORIGIN = 'file://';
let environment;
function getAppOrigin(args) {
  if (args.isElectron) {
    return ELECTRON_ORIGIN;
  } else if (_config__WEBPACK_IMPORTED_MODULE_0__/* .IS_CAPACITOR */ .UMQ || _config__WEBPACK_IMPORTED_MODULE_0__/* .IS_EXTENSION */ .hL1) {
    var _self;
    return (_self = self) === null || _self === void 0 ? void 0 : _self.origin;
  } else {
    return undefined;
  }
}
function setEnvironment(args) {
  const appOrigin = getAppOrigin(args);
  environment = {
    ...args,
    isDappSupported: true,
    isSseSupported: args.isElectron || _config__WEBPACK_IMPORTED_MODULE_0__/* .IS_CAPACITOR */ .UMQ && !args.isNativeBottomSheet,
    apiHeaders: appOrigin ? {
      'X-App-Origin': appOrigin
    } : {},
    toncenterMainnetKey: args.isElectron ? _config__WEBPACK_IMPORTED_MODULE_0__/* .ELECTRON_TONCENTER_MAINNET_KEY */ .xlJ : _config__WEBPACK_IMPORTED_MODULE_0__/* .TONCENTER_MAINNET_KEY */ .Irq,
    toncenterTestnetKey: args.isElectron ? _config__WEBPACK_IMPORTED_MODULE_0__/* .ELECTRON_TONCENTER_TESTNET_KEY */ .Q$0 : _config__WEBPACK_IMPORTED_MODULE_0__/* .TONCENTER_TESTNET_KEY */ .HGV
  };
  return environment;
}
function getEnvironment() {
  return environment;
}

/***/ }),

/***/ 69780:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ withCacheAsync)
/* harmony export */ });
const cache = new WeakMap();
function withCacheAsync(fn) {
  let canBeCached = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : value => !!value;
  return async function () {
    let fnCache = cache.get(fn);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const cacheKey = buildCacheKey(args);
    if (fnCache) {
      const cached = fnCache.get(cacheKey);
      if (cached) {
        return cached;
      }
    } else {
      fnCache = new Map();
      cache.set(fn, fnCache);
    }
    const newValue = await fn(...args);
    if (canBeCached(newValue)) {
      fnCache.set(cacheKey, newValue);
    }
    return newValue;
  };
}
function buildCacheKey(args) {
  return args.reduce((cacheKey, arg) => {
    return `${cacheKey}_${typeof arg === 'object' ? JSON.stringify(args) : arg}`;
  }, '');
}

/***/ }),

/***/ 71281:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 79838:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 84752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sH: () => (/* binding */ StakeWallet)
/* harmony export */ });
/* unused harmony exports userRewardsDictValueParser, stakeWalletConfigToCell */
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ton_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53297);
/* harmony import */ var _imports_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61995);



function userRewardsDictValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeUint(src.distributedRewards, 256).storeCoins(src.unclaimedRewards).endCell();
    },
    parse: src => {
      return {
        distributedRewards: src.loadUintBig(256),
        unclaimedRewards: src.loadCoins()
      };
    }
  };
}
function stakeWalletConfigToCell(config) {
  return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeAddress(config.stakingPoolAddress).storeAddress(config.minterAddress).storeAddress(config.ownerAddress).storeRef((0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(config.lockPeriod, 32).storeUint(1, 19).endCell()).endCell();
}
class StakeWallet {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new StakeWallet(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = stakeWalletConfigToCell(config);
    const init = {
      code,
      data
    };
    return new StakeWallet((0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.contractAddress)(workchain, init), init);
  }
  static getAvailableRewards(stakeWalletConfig, poolConfig) {
    if (!poolConfig.rewardJettons) {
      return {};
    }
    const timeNow = Math.floor(Date.now() / 1000);
    const rewardMultiplier = poolConfig.lockPeriods.get(Number(stakeWalletConfig.lockPeriod)).rewardMultiplier;
    const res = {};
    for (const rewardJettonWallet of poolConfig.rewardJettons.keys()) {
      const poolRewardsInfo = poolConfig.rewardJettons.get(rewardJettonWallet);
      const userRewardsInfo = stakeWalletConfig.rewardsDict.get(rewardJettonWallet);
      let unclaimedRewards = userRewardsInfo ? userRewardsInfo.unclaimedRewards : 0n;
      const userDistributedRewards = userRewardsInfo ? userRewardsInfo.distributedRewards : 0n;
      let poolDistributedRewards = poolRewardsInfo.distributedRewards;
      for (const i of poolRewardsInfo.rewardsDeposits.keys()) {
        const rewardDeposit = poolRewardsInfo.rewardsDeposits.get(i);
        if (rewardDeposit.startTime < timeNow && poolConfig.tvlWithMultipliers) {
          poolDistributedRewards += rewardDeposit.distributionSpeed * BigInt(Math.min(timeNow, rewardDeposit.endTime) - rewardDeposit.startTime) * _imports_constants__WEBPACK_IMPORTED_MODULE_2__/* .Dividers */ .Hc.DISTRIBUTED_REWARDS_DIVIDER / (_imports_constants__WEBPACK_IMPORTED_MODULE_2__/* .Dividers */ .Hc.DISTRIBUTION_SPEED_DIVIDER * poolConfig.tvlWithMultipliers);
        }
      }
      unclaimedRewards += (poolDistributedRewards - userDistributedRewards) * stakeWalletConfig.jettonBalance * BigInt(rewardMultiplier) / (_imports_constants__WEBPACK_IMPORTED_MODULE_2__/* .Dividers */ .Hc.DISTRIBUTED_REWARDS_DIVIDER * BigInt(_imports_constants__WEBPACK_IMPORTED_MODULE_2__/* .Dividers */ .Hc.REWARDS_DIVIDER));
      res[rewardJettonWallet.toString()] = unclaimedRewards;
    }
    return res;
  }
  async getStorageData(provider) {
    const {
      stack
    } = await provider.get('get_storage_data', []);
    const res = {
      stakingPoolAddress: stack.readAddress(),
      ownerAddress: stack.readAddress(),
      lockPeriod: stack.readBigNumber(),
      jettonBalance: stack.readBigNumber(),
      rewardsDict: (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .readCellOpt */ .M)(stack),
      unstakeRequests: (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .readCellOpt */ .M)(stack),
      requestsCount: stack.readBigNumber(),
      totalRequestedJettons: stack.readBigNumber(),
      isActive: Boolean(stack.readNumber()),
      unstakeCommission: stack.readBigNumber(),
      unstakeFee: stack.readBigNumber(),
      minDeposit: stack.readBigNumber(),
      maxDeposit: stack.readBigNumber(),
      whitelist: (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .readCellOpt */ .M)(stack),
      minterAddress: stack.readAddress()
    };
    if (res.rewardsDict) {
      res.rewardsDict = res.rewardsDict.beginParse().loadDictDirect(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Address(), userRewardsDictValueParser());
    }
    if (res.unstakeRequests) {
      res.unstakeRequests = res.unstakeRequests.beginParse().loadDictDirect(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Uint(32), _ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Values.BigVarUint(4));
    }
    if (res.whitelist) {
      res.whitelist = res.whitelist.beginParse().loadDictDirect(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Address(), _ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Values.Bool());
    }
    return res;
  }
}

/***/ }),

/***/ 86972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ml: () => (/* binding */ StakingPool)
/* harmony export */ });
/* unused harmony exports stakingPoolConfigToCell, stakingPoolInitedData */
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ton_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53297);
/* harmony import */ var _imports_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61995);



function lockPeriodsValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeCoins(src.curTvl).storeCoins(src.tvlLimit).storeUint(src.rewardMultiplier, 16).storeUint(src.depositCommission, 16).storeUint(src.unstakeCommission, 16).storeAddress(src.minterAddress).endCell();
    },
    parse: src => {
      return {
        curTvl: src.loadCoins(),
        tvlLimit: src.loadCoins(),
        rewardMultiplier: src.loadUint(16),
        depositCommission: src.loadUint(16),
        unstakeCommission: src.loadUint(16),
        minterAddress: src.loadAddress()
      };
    }
  };
}
function rewardsDepositsValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeCoins(src.distributionSpeed).storeUint(src.startTime, 32).storeUint(src.endTime, 32).endCell();
    },
    parse: src => {
      return {
        distributionSpeed: src.loadCoins(),
        startTime: src.loadUint(32),
        endTime: src.loadUint(32)
      };
    }
  };
}
function rewardJettonsValueParser() {
  return {
    serialize: (src, buidler) => {
      buidler.storeUint(src.distributedRewards, 256).storeDict(src.rewardsDeposits, _ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Uint(32), rewardsDepositsValueParser()).endCell();
    },
    parse: src => {
      return {
        distributedRewards: src.loadUintBig(256),
        rewardsDeposits: src.loadDict(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Uint(32), rewardsDepositsValueParser())
      };
    }
  };
}
function stakingPoolConfigToCell(config) {
  return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeAddress(config.factoryAddress).storeUint(config.poolId, 32).endCell();
}
function stakingPoolInitedData(config) {
  return beginCell().storeBit(config.inited).storeUint(config.poolId, 32).storeAddress(config.adminAddress).storeAddress(config.creatorAddress).storeAddress(config.lockWalletAddress).storeMaybeRef(config.content).storeRef(config.stakeWalletCode).storeRef(beginCell().storeCoins(config.tvl).storeCoins(config.tvlWithMultipliers).storeCoins(config.minDeposit).storeCoins(config.maxDeposit).storeDict(config.rewardJettons, Dictionary.Keys.Address(), rewardJettonsValueParser()).storeUint(config.rewardJettonsCount ?? 0, 8).storeUint(config.rewardsDepositsCount ?? 0, 8).storeDict(config.lockPeriods, Dictionary.Keys.Uint(32), lockPeriodsValueParser()).storeDict(config.whitelist, Dictionary.Keys.Address(), Dictionary.Values.Bool()).storeCoins(config.unstakeFee).storeCoins(config.collectedCommissions).storeUint(config.rewardsCommission, 16).storeUint(config.version ?? 0, 16).endCell()).endCell();
}
class StakingPool {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new StakingPool(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = stakingPoolConfigToCell(config);
    const init = {
      code,
      data
    };
    return new StakingPool((0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.contractAddress)(workchain, init), init);
  }
  static stakePayload(lockPeriod) {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(_imports_constants__WEBPACK_IMPORTED_MODULE_2__/* .JettonStakingOpCodes */ .Hx.STAKE_JETTONS, 32).storeUint(lockPeriod, 32).endCell();
  }
  async getData(provider) {
    const {
      stack
    } = await provider.get('get_nft_data', []);
    return {
      init: stack.readBoolean(),
      index: stack.readBigNumber(),
      collection: stack.readAddressOpt(),
      owner: stack.readAddressOpt(),
      content: stack.readCell()
    };
  }
  async getStorageData(provider) {
    const {
      stack
    } = await provider.get('get_storage_data', []);
    const res = {
      inited: stack.readBoolean(),
      poolId: stack.readBigNumber(),
      adminAddress: stack.readAddress(),
      creatorAddress: stack.readAddress(),
      stakeWalletCode: stack.readCell(),
      lockWalletAddress: stack.readAddress(),
      tvl: stack.readBigNumber(),
      tvlWithMultipliers: stack.readBigNumber(),
      minDeposit: stack.readBigNumber(),
      maxDeposit: stack.readBigNumber(),
      rewardJettons: (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .readCellOpt */ .M)(stack),
      rewardJettonsCount: stack.readBigNumber(),
      rewardsDepositsCount: stack.readBigNumber(),
      lockPeriods: stack.readCellOpt(),
      whitelist: (0,_util__WEBPACK_IMPORTED_MODULE_1__/* .readCellOpt */ .M)(stack),
      unstakeFee: stack.readBigNumber(),
      collectedCommissions: stack.readBigNumber(),
      rewardsCommission: stack.readBigNumber(),
      version: stack.readBigNumber()
    };
    if (res.rewardJettons) {
      res.rewardJettons = res.rewardJettons.beginParse().loadDictDirect(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Address(), rewardJettonsValueParser());
    }
    if (res.lockPeriods) {
      res.lockPeriods = res.lockPeriods.beginParse().loadDictDirect(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Uint(32), lockPeriodsValueParser());
    }
    if (res.whitelist) {
      res.whitelist = res.whitelist.beginParse().loadDictDirect(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Keys.Address(), _ton_core__WEBPACK_IMPORTED_MODULE_0__.Dictionary.Values.Bool());
    }
    return res;
  }
  async getWalletAddress(provider, ownerAddress, lockPeriod) {
    const {
      stack
    } = await provider.get('get_stake_wallet_address', [{
      type: 'slice',
      cell: (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeAddress(ownerAddress).endCell()
    }, {
      type: 'int',
      value: BigInt(lockPeriod)
    }]);
    return stack.readAddressOpt();
  }
}

/***/ }),

/***/ 87894:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $z: () => (/* binding */ groupBy),
/* harmony export */   Am: () => (/* binding */ unique),
/* harmony export */   E$: () => (/* binding */ intersection),
/* harmony export */   Hl: () => (/* binding */ findDifference),
/* harmony export */   JY: () => (/* binding */ extractKey),
/* harmony export */   LG: () => (/* binding */ mapValues),
/* harmony export */   Oy: () => (/* binding */ omitUndefined),
/* harmony export */   Uk: () => (/* binding */ findLast),
/* harmony export */   Up: () => (/* binding */ pick),
/* harmony export */   cJ: () => (/* binding */ omit),
/* harmony export */   dU: () => (/* binding */ buildCollectionByKey),
/* harmony export */   k: () => (/* binding */ areSortedArraysEqual),
/* harmony export */   lD: () => (/* binding */ split),
/* harmony export */   oE: () => (/* binding */ compact),
/* harmony export */   rs: () => (/* binding */ fromKeyValueArrays),
/* harmony export */   sq: () => (/* binding */ uniqueByKey),
/* harmony export */   y1: () => (/* binding */ range),
/* harmony export */   yQ: () => (/* binding */ mergeSortedArrays)
/* harmony export */ });
/* unused harmony exports buildArrayCollectionByKey, pickTruthy, orderBy, cloneDeep, isLiteralObject, filterValues, swapKeysAndValues */
function buildCollectionByKey(collection, key) {
  return collection.reduce((byKey, member) => {
    byKey[member[key]] = member;
    return byKey;
  }, {});
}
function buildArrayCollectionByKey(collection, key) {
  return collection.reduce((byKey, member) => {
    const collectionKey = member[key];
    if (!byKey[collectionKey]) {
      byKey[collectionKey] = [];
    }
    byKey[collectionKey].push(member);
    return byKey;
  }, {});
}
function groupBy(collection, key) {
  return collection.reduce((byKey, member) => {
    const groupKey = member[key];
    if (!byKey[groupKey]) {
      byKey[groupKey] = [member];
    } else {
      byKey[groupKey].push(member);
    }
    return byKey;
  }, {});
}
function mapValues(byKey, callback) {
  return Object.keys(byKey).reduce((newByKey, key, index) => {
    newByKey[key] = callback(byKey[key], key, index, byKey);
    return newByKey;
  }, {});
}
function pick(object, keys) {
  return keys.reduce((result, key) => {
    result[key] = object[key];
    return result;
  }, {});
}
function pickTruthy(object, keys) {
  return keys.reduce((result, key) => {
    if (object[key]) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
function omit(object, keys) {
  const stringKeys = new Set(keys.map(String));
  const savedKeys = Object.keys(object).filter(key => !stringKeys.has(key));
  return pick(object, savedKeys);
}
function omitUndefined(object) {
  return Object.keys(object).reduce((result, stringKey) => {
    const key = stringKey;
    if (object[key] !== undefined) {
      result[key] = object[key];
    }
    return result;
  }, {});
}
function orderBy(collection, orderRule) {
  let mode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'asc';
  function compareValues(a, b, currentOrderRule, isAsc) {
    const aValue = (typeof currentOrderRule === 'function' ? currentOrderRule(a) : a[currentOrderRule]) || 0;
    const bValue = (typeof currentOrderRule === 'function' ? currentOrderRule(b) : b[currentOrderRule]) || 0;
    if (aValue === bValue) return 0;
    const condition = isAsc ? aValue > bValue : aValue < bValue;
    return condition ? 1 : -1;
  }
  if (Array.isArray(orderRule)) {
    const [mode1, mode2] = Array.isArray(mode) ? mode : [mode, mode];
    const [orderRule1, orderRule2] = orderRule;
    const isAsc1 = mode1 === 'asc';
    const isAsc2 = mode2 === 'asc';
    return collection.sort((a, b) => {
      return compareValues(a, b, orderRule1, isAsc1) || compareValues(a, b, orderRule2, isAsc2);
    });
  }
  const isAsc = mode === 'asc';
  return collection.sort((a, b) => {
    return compareValues(a, b, orderRule, isAsc);
  });
}
function unique(array) {
  return Array.from(new Set(array));
}
function compact(array) {
  return array.filter(Boolean);
}
function areSortedArraysEqual(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  return array1.every((item, i) => item === array2[i]);
}
function split(array, chunkSize) {
  const result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
}
function cloneDeep(value) {
  if (!isObject(value)) {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(cloneDeep);
  }
  return Object.keys(value).reduce((acc, key) => {
    acc[key] = cloneDeep(value[key]);
    return acc;
  }, {});
}
function isLiteralObject(value) {
  return isObject(value) && !Array.isArray(value);
}
function isObject(value) {
  // eslint-disable-next-line no-null/no-null
  return typeof value === 'object' && value !== null;
}
function findLast(array, predicate) {
  let cursor = array.length;
  while (cursor--) {
    if (predicate(array[cursor], cursor, array)) {
      return array[cursor];
    }
  }
  return undefined;
}
function range(start, end) {
  const arr = [];
  for (let i = start; i < end;) {
    arr.push(i++);
  }
  return arr;
}
function fromKeyValueArrays(keys, values) {
  return keys.reduce((acc, key, index) => {
    acc[key] = Array.isArray(values) ? values[index] : values;
    return acc;
  }, {});
}
function extractKey(array, key) {
  return array.map(value => value[key]);
}
function findDifference(array1, array2) {
  const set2 = new Set(array2);
  const diff = [];
  for (const element of array1) {
    if (!set2.has(element)) {
      diff.push(element);
    }
  }
  return diff;
}
function filterValues(byKey, callback) {
  return Object.keys(byKey).reduce((newByKey, key, index) => {
    if (callback(byKey[key], key, index, byKey)) {
      newByKey[key] = byKey[key];
    }
    return newByKey;
  }, {});
}
function uniqueByKey(array, key, shouldKeepFirst) {
  if (shouldKeepFirst) {
    array = [...array].reverse();
  }
  const result = [...new Map(array.map(item => [item[key], item])).values()];
  if (shouldKeepFirst) {
    result.reverse();
  }
  return result;
}
function intersection(x, y) {
  const result = new Set();
  for (const elem of y) {
    if (x.has(elem)) {
      result.add(elem);
    }
  }
  return result;
}
function swapKeysAndValues(object) {
  const result = {};
  for (const [key, value] of Object.entries(object)) {
    result[value] = key;
  }
  return result;
}

/**
 * The arrays inside `arrays` must be sorted according to `compareFn`, otherwise the result is not guaranteed.
 * `deduplicateEqual` doesn't remove duplicates if the individual input arrays contain duplicates.
 * Always returns a new array (not any of the input arrays).
 */
function mergeSortedArrays(arrays, compareFn, deduplicateEqual) {
  // This is a divide-and-conquer algorithm combined with a 2-pointers algorithm. Its time complexity is O(n*log(n)*m),
  // where n is the number of arrays and m is the average array size. The heap algorithm is slightly faster, but it has
  // the same time complexity and its implementation in JS is too bulky.
  // This problem on LeetCode: https://leetcode.com/problems/merge-k-sorted-lists/

  if (arrays.length === 1) return [...arrays[0]];
  let toMerge = arrays;
  while (toMerge.length > 1) {
    const nextToMerge = [];
    for (let i = 0; i < toMerge.length; i += 2) {
      nextToMerge.push(i + 1 < toMerge.length ? merge2(toMerge[i], toMerge[i + 1]) : toMerge[i] // If toMerge.length is odd, the last iteration has only 1 subarray to merge
      );
    }
    toMerge = nextToMerge;
  }
  return toMerge[0] ?? [];
  function merge2(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    const result = [];
    while (index1 < arr1.length && index2 < arr2.length) {
      const compareResult = compareFn(arr1[index1], arr2[index2]);
      if (compareResult === 0) {
        result.push(arr1[index1]);
        if (!deduplicateEqual) {
          result.push(arr2[index2]);
        }
        index1++;
        index2++;
      } else if (compareResult < 0) {
        result.push(arr1[index1++]);
      } else {
        result.push(arr2[index2++]);
      }
    }
    result.push(...arr1.slice(index1));
    result.push(...arr2.slice(index2));
    return result;
  }
}

/***/ }),

/***/ 87963:
/***/ (function(module) {

// Version 3.1.2
/*! MIT License. Copyright 2015-2018 Richard Moore <me@ricmoo.com>. See LICENSE.txt. */
(function (root) {
  "use strict";

  function checkInt(value) {
    return parseInt(value) === value;
  }
  function checkInts(arrayish) {
    if (!checkInt(arrayish.length)) {
      return false;
    }
    for (var i = 0; i < arrayish.length; i++) {
      if (!checkInt(arrayish[i]) || arrayish[i] < 0 || arrayish[i] > 255) {
        return false;
      }
    }
    return true;
  }
  function coerceArray(arg, copy) {
    // ArrayBuffer view
    if (arg.buffer && arg.name === 'Uint8Array') {
      if (copy) {
        if (arg.slice) {
          arg = arg.slice();
        } else {
          arg = Array.prototype.slice.call(arg);
        }
      }
      return arg;
    }

    // It's an array; check it is a valid representation of a byte
    if (Array.isArray(arg)) {
      if (!checkInts(arg)) {
        throw new Error('Array contains invalid value: ' + arg);
      }
      return new Uint8Array(arg);
    }

    // Something else, but behaves like an array (maybe a Buffer? Arguments?)
    if (checkInt(arg.length) && checkInts(arg)) {
      return new Uint8Array(arg);
    }
    throw new Error('unsupported array-like object');
  }
  function createArray(length) {
    return new Uint8Array(length);
  }
  function copyArray(sourceArray, targetArray, targetStart, sourceStart, sourceEnd) {
    if (sourceStart != null || sourceEnd != null) {
      if (sourceArray.slice) {
        sourceArray = sourceArray.slice(sourceStart, sourceEnd);
      } else {
        sourceArray = Array.prototype.slice.call(sourceArray, sourceStart, sourceEnd);
      }
    }
    targetArray.set(sourceArray, targetStart);
  }
  var convertUtf8 = function () {
    function toBytes(text) {
      var result = [],
        i = 0;
      text = encodeURI(text);
      while (i < text.length) {
        var c = text.charCodeAt(i++);

        // if it is a % sign, encode the following 2 bytes as a hex value
        if (c === 37) {
          result.push(parseInt(text.substr(i, 2), 16));
          i += 2;

          // otherwise, just the actual byte
        } else {
          result.push(c);
        }
      }
      return coerceArray(result);
    }
    function fromBytes(bytes) {
      var result = [],
        i = 0;
      while (i < bytes.length) {
        var c = bytes[i];
        if (c < 128) {
          result.push(String.fromCharCode(c));
          i++;
        } else if (c > 191 && c < 224) {
          result.push(String.fromCharCode((c & 0x1f) << 6 | bytes[i + 1] & 0x3f));
          i += 2;
        } else {
          result.push(String.fromCharCode((c & 0x0f) << 12 | (bytes[i + 1] & 0x3f) << 6 | bytes[i + 2] & 0x3f));
          i += 3;
        }
      }
      return result.join('');
    }
    return {
      toBytes: toBytes,
      fromBytes: fromBytes
    };
  }();
  var convertHex = function () {
    function toBytes(text) {
      var result = [];
      for (var i = 0; i < text.length; i += 2) {
        result.push(parseInt(text.substr(i, 2), 16));
      }
      return result;
    }

    // http://ixti.net/development/javascript/2011/11/11/base64-encodedecode-of-utf8-in-browser-with-js.html
    var Hex = '0123456789abcdef';
    function fromBytes(bytes) {
      var result = [];
      for (var i = 0; i < bytes.length; i++) {
        var v = bytes[i];
        result.push(Hex[(v & 0xf0) >> 4] + Hex[v & 0x0f]);
      }
      return result.join('');
    }
    return {
      toBytes: toBytes,
      fromBytes: fromBytes
    };
  }();

  // Number of rounds by keysize
  var numberOfRounds = {
    16: 10,
    24: 12,
    32: 14
  };

  // Round constant words
  var rcon = [0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c, 0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a, 0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91];

  // S-box and Inverse S-box (S is for Substitution)
  var S = [0x63, 0x7c, 0x77, 0x7b, 0xf2, 0x6b, 0x6f, 0xc5, 0x30, 0x01, 0x67, 0x2b, 0xfe, 0xd7, 0xab, 0x76, 0xca, 0x82, 0xc9, 0x7d, 0xfa, 0x59, 0x47, 0xf0, 0xad, 0xd4, 0xa2, 0xaf, 0x9c, 0xa4, 0x72, 0xc0, 0xb7, 0xfd, 0x93, 0x26, 0x36, 0x3f, 0xf7, 0xcc, 0x34, 0xa5, 0xe5, 0xf1, 0x71, 0xd8, 0x31, 0x15, 0x04, 0xc7, 0x23, 0xc3, 0x18, 0x96, 0x05, 0x9a, 0x07, 0x12, 0x80, 0xe2, 0xeb, 0x27, 0xb2, 0x75, 0x09, 0x83, 0x2c, 0x1a, 0x1b, 0x6e, 0x5a, 0xa0, 0x52, 0x3b, 0xd6, 0xb3, 0x29, 0xe3, 0x2f, 0x84, 0x53, 0xd1, 0x00, 0xed, 0x20, 0xfc, 0xb1, 0x5b, 0x6a, 0xcb, 0xbe, 0x39, 0x4a, 0x4c, 0x58, 0xcf, 0xd0, 0xef, 0xaa, 0xfb, 0x43, 0x4d, 0x33, 0x85, 0x45, 0xf9, 0x02, 0x7f, 0x50, 0x3c, 0x9f, 0xa8, 0x51, 0xa3, 0x40, 0x8f, 0x92, 0x9d, 0x38, 0xf5, 0xbc, 0xb6, 0xda, 0x21, 0x10, 0xff, 0xf3, 0xd2, 0xcd, 0x0c, 0x13, 0xec, 0x5f, 0x97, 0x44, 0x17, 0xc4, 0xa7, 0x7e, 0x3d, 0x64, 0x5d, 0x19, 0x73, 0x60, 0x81, 0x4f, 0xdc, 0x22, 0x2a, 0x90, 0x88, 0x46, 0xee, 0xb8, 0x14, 0xde, 0x5e, 0x0b, 0xdb, 0xe0, 0x32, 0x3a, 0x0a, 0x49, 0x06, 0x24, 0x5c, 0xc2, 0xd3, 0xac, 0x62, 0x91, 0x95, 0xe4, 0x79, 0xe7, 0xc8, 0x37, 0x6d, 0x8d, 0xd5, 0x4e, 0xa9, 0x6c, 0x56, 0xf4, 0xea, 0x65, 0x7a, 0xae, 0x08, 0xba, 0x78, 0x25, 0x2e, 0x1c, 0xa6, 0xb4, 0xc6, 0xe8, 0xdd, 0x74, 0x1f, 0x4b, 0xbd, 0x8b, 0x8a, 0x70, 0x3e, 0xb5, 0x66, 0x48, 0x03, 0xf6, 0x0e, 0x61, 0x35, 0x57, 0xb9, 0x86, 0xc1, 0x1d, 0x9e, 0xe1, 0xf8, 0x98, 0x11, 0x69, 0xd9, 0x8e, 0x94, 0x9b, 0x1e, 0x87, 0xe9, 0xce, 0x55, 0x28, 0xdf, 0x8c, 0xa1, 0x89, 0x0d, 0xbf, 0xe6, 0x42, 0x68, 0x41, 0x99, 0x2d, 0x0f, 0xb0, 0x54, 0xbb, 0x16];
  var Si = [0x52, 0x09, 0x6a, 0xd5, 0x30, 0x36, 0xa5, 0x38, 0xbf, 0x40, 0xa3, 0x9e, 0x81, 0xf3, 0xd7, 0xfb, 0x7c, 0xe3, 0x39, 0x82, 0x9b, 0x2f, 0xff, 0x87, 0x34, 0x8e, 0x43, 0x44, 0xc4, 0xde, 0xe9, 0xcb, 0x54, 0x7b, 0x94, 0x32, 0xa6, 0xc2, 0x23, 0x3d, 0xee, 0x4c, 0x95, 0x0b, 0x42, 0xfa, 0xc3, 0x4e, 0x08, 0x2e, 0xa1, 0x66, 0x28, 0xd9, 0x24, 0xb2, 0x76, 0x5b, 0xa2, 0x49, 0x6d, 0x8b, 0xd1, 0x25, 0x72, 0xf8, 0xf6, 0x64, 0x86, 0x68, 0x98, 0x16, 0xd4, 0xa4, 0x5c, 0xcc, 0x5d, 0x65, 0xb6, 0x92, 0x6c, 0x70, 0x48, 0x50, 0xfd, 0xed, 0xb9, 0xda, 0x5e, 0x15, 0x46, 0x57, 0xa7, 0x8d, 0x9d, 0x84, 0x90, 0xd8, 0xab, 0x00, 0x8c, 0xbc, 0xd3, 0x0a, 0xf7, 0xe4, 0x58, 0x05, 0xb8, 0xb3, 0x45, 0x06, 0xd0, 0x2c, 0x1e, 0x8f, 0xca, 0x3f, 0x0f, 0x02, 0xc1, 0xaf, 0xbd, 0x03, 0x01, 0x13, 0x8a, 0x6b, 0x3a, 0x91, 0x11, 0x41, 0x4f, 0x67, 0xdc, 0xea, 0x97, 0xf2, 0xcf, 0xce, 0xf0, 0xb4, 0xe6, 0x73, 0x96, 0xac, 0x74, 0x22, 0xe7, 0xad, 0x35, 0x85, 0xe2, 0xf9, 0x37, 0xe8, 0x1c, 0x75, 0xdf, 0x6e, 0x47, 0xf1, 0x1a, 0x71, 0x1d, 0x29, 0xc5, 0x89, 0x6f, 0xb7, 0x62, 0x0e, 0xaa, 0x18, 0xbe, 0x1b, 0xfc, 0x56, 0x3e, 0x4b, 0xc6, 0xd2, 0x79, 0x20, 0x9a, 0xdb, 0xc0, 0xfe, 0x78, 0xcd, 0x5a, 0xf4, 0x1f, 0xdd, 0xa8, 0x33, 0x88, 0x07, 0xc7, 0x31, 0xb1, 0x12, 0x10, 0x59, 0x27, 0x80, 0xec, 0x5f, 0x60, 0x51, 0x7f, 0xa9, 0x19, 0xb5, 0x4a, 0x0d, 0x2d, 0xe5, 0x7a, 0x9f, 0x93, 0xc9, 0x9c, 0xef, 0xa0, 0xe0, 0x3b, 0x4d, 0xae, 0x2a, 0xf5, 0xb0, 0xc8, 0xeb, 0xbb, 0x3c, 0x83, 0x53, 0x99, 0x61, 0x17, 0x2b, 0x04, 0x7e, 0xba, 0x77, 0xd6, 0x26, 0xe1, 0x69, 0x14, 0x63, 0x55, 0x21, 0x0c, 0x7d];

  // Transformations for encryption
  var T1 = [0xc66363a5, 0xf87c7c84, 0xee777799, 0xf67b7b8d, 0xfff2f20d, 0xd66b6bbd, 0xde6f6fb1, 0x91c5c554, 0x60303050, 0x02010103, 0xce6767a9, 0x562b2b7d, 0xe7fefe19, 0xb5d7d762, 0x4dababe6, 0xec76769a, 0x8fcaca45, 0x1f82829d, 0x89c9c940, 0xfa7d7d87, 0xeffafa15, 0xb25959eb, 0x8e4747c9, 0xfbf0f00b, 0x41adadec, 0xb3d4d467, 0x5fa2a2fd, 0x45afafea, 0x239c9cbf, 0x53a4a4f7, 0xe4727296, 0x9bc0c05b, 0x75b7b7c2, 0xe1fdfd1c, 0x3d9393ae, 0x4c26266a, 0x6c36365a, 0x7e3f3f41, 0xf5f7f702, 0x83cccc4f, 0x6834345c, 0x51a5a5f4, 0xd1e5e534, 0xf9f1f108, 0xe2717193, 0xabd8d873, 0x62313153, 0x2a15153f, 0x0804040c, 0x95c7c752, 0x46232365, 0x9dc3c35e, 0x30181828, 0x379696a1, 0x0a05050f, 0x2f9a9ab5, 0x0e070709, 0x24121236, 0x1b80809b, 0xdfe2e23d, 0xcdebeb26, 0x4e272769, 0x7fb2b2cd, 0xea75759f, 0x1209091b, 0x1d83839e, 0x582c2c74, 0x341a1a2e, 0x361b1b2d, 0xdc6e6eb2, 0xb45a5aee, 0x5ba0a0fb, 0xa45252f6, 0x763b3b4d, 0xb7d6d661, 0x7db3b3ce, 0x5229297b, 0xdde3e33e, 0x5e2f2f71, 0x13848497, 0xa65353f5, 0xb9d1d168, 0x00000000, 0xc1eded2c, 0x40202060, 0xe3fcfc1f, 0x79b1b1c8, 0xb65b5bed, 0xd46a6abe, 0x8dcbcb46, 0x67bebed9, 0x7239394b, 0x944a4ade, 0x984c4cd4, 0xb05858e8, 0x85cfcf4a, 0xbbd0d06b, 0xc5efef2a, 0x4faaaae5, 0xedfbfb16, 0x864343c5, 0x9a4d4dd7, 0x66333355, 0x11858594, 0x8a4545cf, 0xe9f9f910, 0x04020206, 0xfe7f7f81, 0xa05050f0, 0x783c3c44, 0x259f9fba, 0x4ba8a8e3, 0xa25151f3, 0x5da3a3fe, 0x804040c0, 0x058f8f8a, 0x3f9292ad, 0x219d9dbc, 0x70383848, 0xf1f5f504, 0x63bcbcdf, 0x77b6b6c1, 0xafdada75, 0x42212163, 0x20101030, 0xe5ffff1a, 0xfdf3f30e, 0xbfd2d26d, 0x81cdcd4c, 0x180c0c14, 0x26131335, 0xc3ecec2f, 0xbe5f5fe1, 0x359797a2, 0x884444cc, 0x2e171739, 0x93c4c457, 0x55a7a7f2, 0xfc7e7e82, 0x7a3d3d47, 0xc86464ac, 0xba5d5de7, 0x3219192b, 0xe6737395, 0xc06060a0, 0x19818198, 0x9e4f4fd1, 0xa3dcdc7f, 0x44222266, 0x542a2a7e, 0x3b9090ab, 0x0b888883, 0x8c4646ca, 0xc7eeee29, 0x6bb8b8d3, 0x2814143c, 0xa7dede79, 0xbc5e5ee2, 0x160b0b1d, 0xaddbdb76, 0xdbe0e03b, 0x64323256, 0x743a3a4e, 0x140a0a1e, 0x924949db, 0x0c06060a, 0x4824246c, 0xb85c5ce4, 0x9fc2c25d, 0xbdd3d36e, 0x43acacef, 0xc46262a6, 0x399191a8, 0x319595a4, 0xd3e4e437, 0xf279798b, 0xd5e7e732, 0x8bc8c843, 0x6e373759, 0xda6d6db7, 0x018d8d8c, 0xb1d5d564, 0x9c4e4ed2, 0x49a9a9e0, 0xd86c6cb4, 0xac5656fa, 0xf3f4f407, 0xcfeaea25, 0xca6565af, 0xf47a7a8e, 0x47aeaee9, 0x10080818, 0x6fbabad5, 0xf0787888, 0x4a25256f, 0x5c2e2e72, 0x381c1c24, 0x57a6a6f1, 0x73b4b4c7, 0x97c6c651, 0xcbe8e823, 0xa1dddd7c, 0xe874749c, 0x3e1f1f21, 0x964b4bdd, 0x61bdbddc, 0x0d8b8b86, 0x0f8a8a85, 0xe0707090, 0x7c3e3e42, 0x71b5b5c4, 0xcc6666aa, 0x904848d8, 0x06030305, 0xf7f6f601, 0x1c0e0e12, 0xc26161a3, 0x6a35355f, 0xae5757f9, 0x69b9b9d0, 0x17868691, 0x99c1c158, 0x3a1d1d27, 0x279e9eb9, 0xd9e1e138, 0xebf8f813, 0x2b9898b3, 0x22111133, 0xd26969bb, 0xa9d9d970, 0x078e8e89, 0x339494a7, 0x2d9b9bb6, 0x3c1e1e22, 0x15878792, 0xc9e9e920, 0x87cece49, 0xaa5555ff, 0x50282878, 0xa5dfdf7a, 0x038c8c8f, 0x59a1a1f8, 0x09898980, 0x1a0d0d17, 0x65bfbfda, 0xd7e6e631, 0x844242c6, 0xd06868b8, 0x824141c3, 0x299999b0, 0x5a2d2d77, 0x1e0f0f11, 0x7bb0b0cb, 0xa85454fc, 0x6dbbbbd6, 0x2c16163a];
  var T2 = [0xa5c66363, 0x84f87c7c, 0x99ee7777, 0x8df67b7b, 0x0dfff2f2, 0xbdd66b6b, 0xb1de6f6f, 0x5491c5c5, 0x50603030, 0x03020101, 0xa9ce6767, 0x7d562b2b, 0x19e7fefe, 0x62b5d7d7, 0xe64dabab, 0x9aec7676, 0x458fcaca, 0x9d1f8282, 0x4089c9c9, 0x87fa7d7d, 0x15effafa, 0xebb25959, 0xc98e4747, 0x0bfbf0f0, 0xec41adad, 0x67b3d4d4, 0xfd5fa2a2, 0xea45afaf, 0xbf239c9c, 0xf753a4a4, 0x96e47272, 0x5b9bc0c0, 0xc275b7b7, 0x1ce1fdfd, 0xae3d9393, 0x6a4c2626, 0x5a6c3636, 0x417e3f3f, 0x02f5f7f7, 0x4f83cccc, 0x5c683434, 0xf451a5a5, 0x34d1e5e5, 0x08f9f1f1, 0x93e27171, 0x73abd8d8, 0x53623131, 0x3f2a1515, 0x0c080404, 0x5295c7c7, 0x65462323, 0x5e9dc3c3, 0x28301818, 0xa1379696, 0x0f0a0505, 0xb52f9a9a, 0x090e0707, 0x36241212, 0x9b1b8080, 0x3ddfe2e2, 0x26cdebeb, 0x694e2727, 0xcd7fb2b2, 0x9fea7575, 0x1b120909, 0x9e1d8383, 0x74582c2c, 0x2e341a1a, 0x2d361b1b, 0xb2dc6e6e, 0xeeb45a5a, 0xfb5ba0a0, 0xf6a45252, 0x4d763b3b, 0x61b7d6d6, 0xce7db3b3, 0x7b522929, 0x3edde3e3, 0x715e2f2f, 0x97138484, 0xf5a65353, 0x68b9d1d1, 0x00000000, 0x2cc1eded, 0x60402020, 0x1fe3fcfc, 0xc879b1b1, 0xedb65b5b, 0xbed46a6a, 0x468dcbcb, 0xd967bebe, 0x4b723939, 0xde944a4a, 0xd4984c4c, 0xe8b05858, 0x4a85cfcf, 0x6bbbd0d0, 0x2ac5efef, 0xe54faaaa, 0x16edfbfb, 0xc5864343, 0xd79a4d4d, 0x55663333, 0x94118585, 0xcf8a4545, 0x10e9f9f9, 0x06040202, 0x81fe7f7f, 0xf0a05050, 0x44783c3c, 0xba259f9f, 0xe34ba8a8, 0xf3a25151, 0xfe5da3a3, 0xc0804040, 0x8a058f8f, 0xad3f9292, 0xbc219d9d, 0x48703838, 0x04f1f5f5, 0xdf63bcbc, 0xc177b6b6, 0x75afdada, 0x63422121, 0x30201010, 0x1ae5ffff, 0x0efdf3f3, 0x6dbfd2d2, 0x4c81cdcd, 0x14180c0c, 0x35261313, 0x2fc3ecec, 0xe1be5f5f, 0xa2359797, 0xcc884444, 0x392e1717, 0x5793c4c4, 0xf255a7a7, 0x82fc7e7e, 0x477a3d3d, 0xacc86464, 0xe7ba5d5d, 0x2b321919, 0x95e67373, 0xa0c06060, 0x98198181, 0xd19e4f4f, 0x7fa3dcdc, 0x66442222, 0x7e542a2a, 0xab3b9090, 0x830b8888, 0xca8c4646, 0x29c7eeee, 0xd36bb8b8, 0x3c281414, 0x79a7dede, 0xe2bc5e5e, 0x1d160b0b, 0x76addbdb, 0x3bdbe0e0, 0x56643232, 0x4e743a3a, 0x1e140a0a, 0xdb924949, 0x0a0c0606, 0x6c482424, 0xe4b85c5c, 0x5d9fc2c2, 0x6ebdd3d3, 0xef43acac, 0xa6c46262, 0xa8399191, 0xa4319595, 0x37d3e4e4, 0x8bf27979, 0x32d5e7e7, 0x438bc8c8, 0x596e3737, 0xb7da6d6d, 0x8c018d8d, 0x64b1d5d5, 0xd29c4e4e, 0xe049a9a9, 0xb4d86c6c, 0xfaac5656, 0x07f3f4f4, 0x25cfeaea, 0xafca6565, 0x8ef47a7a, 0xe947aeae, 0x18100808, 0xd56fbaba, 0x88f07878, 0x6f4a2525, 0x725c2e2e, 0x24381c1c, 0xf157a6a6, 0xc773b4b4, 0x5197c6c6, 0x23cbe8e8, 0x7ca1dddd, 0x9ce87474, 0x213e1f1f, 0xdd964b4b, 0xdc61bdbd, 0x860d8b8b, 0x850f8a8a, 0x90e07070, 0x427c3e3e, 0xc471b5b5, 0xaacc6666, 0xd8904848, 0x05060303, 0x01f7f6f6, 0x121c0e0e, 0xa3c26161, 0x5f6a3535, 0xf9ae5757, 0xd069b9b9, 0x91178686, 0x5899c1c1, 0x273a1d1d, 0xb9279e9e, 0x38d9e1e1, 0x13ebf8f8, 0xb32b9898, 0x33221111, 0xbbd26969, 0x70a9d9d9, 0x89078e8e, 0xa7339494, 0xb62d9b9b, 0x223c1e1e, 0x92158787, 0x20c9e9e9, 0x4987cece, 0xffaa5555, 0x78502828, 0x7aa5dfdf, 0x8f038c8c, 0xf859a1a1, 0x80098989, 0x171a0d0d, 0xda65bfbf, 0x31d7e6e6, 0xc6844242, 0xb8d06868, 0xc3824141, 0xb0299999, 0x775a2d2d, 0x111e0f0f, 0xcb7bb0b0, 0xfca85454, 0xd66dbbbb, 0x3a2c1616];
  var T3 = [0x63a5c663, 0x7c84f87c, 0x7799ee77, 0x7b8df67b, 0xf20dfff2, 0x6bbdd66b, 0x6fb1de6f, 0xc55491c5, 0x30506030, 0x01030201, 0x67a9ce67, 0x2b7d562b, 0xfe19e7fe, 0xd762b5d7, 0xabe64dab, 0x769aec76, 0xca458fca, 0x829d1f82, 0xc94089c9, 0x7d87fa7d, 0xfa15effa, 0x59ebb259, 0x47c98e47, 0xf00bfbf0, 0xadec41ad, 0xd467b3d4, 0xa2fd5fa2, 0xafea45af, 0x9cbf239c, 0xa4f753a4, 0x7296e472, 0xc05b9bc0, 0xb7c275b7, 0xfd1ce1fd, 0x93ae3d93, 0x266a4c26, 0x365a6c36, 0x3f417e3f, 0xf702f5f7, 0xcc4f83cc, 0x345c6834, 0xa5f451a5, 0xe534d1e5, 0xf108f9f1, 0x7193e271, 0xd873abd8, 0x31536231, 0x153f2a15, 0x040c0804, 0xc75295c7, 0x23654623, 0xc35e9dc3, 0x18283018, 0x96a13796, 0x050f0a05, 0x9ab52f9a, 0x07090e07, 0x12362412, 0x809b1b80, 0xe23ddfe2, 0xeb26cdeb, 0x27694e27, 0xb2cd7fb2, 0x759fea75, 0x091b1209, 0x839e1d83, 0x2c74582c, 0x1a2e341a, 0x1b2d361b, 0x6eb2dc6e, 0x5aeeb45a, 0xa0fb5ba0, 0x52f6a452, 0x3b4d763b, 0xd661b7d6, 0xb3ce7db3, 0x297b5229, 0xe33edde3, 0x2f715e2f, 0x84971384, 0x53f5a653, 0xd168b9d1, 0x00000000, 0xed2cc1ed, 0x20604020, 0xfc1fe3fc, 0xb1c879b1, 0x5bedb65b, 0x6abed46a, 0xcb468dcb, 0xbed967be, 0x394b7239, 0x4ade944a, 0x4cd4984c, 0x58e8b058, 0xcf4a85cf, 0xd06bbbd0, 0xef2ac5ef, 0xaae54faa, 0xfb16edfb, 0x43c58643, 0x4dd79a4d, 0x33556633, 0x85941185, 0x45cf8a45, 0xf910e9f9, 0x02060402, 0x7f81fe7f, 0x50f0a050, 0x3c44783c, 0x9fba259f, 0xa8e34ba8, 0x51f3a251, 0xa3fe5da3, 0x40c08040, 0x8f8a058f, 0x92ad3f92, 0x9dbc219d, 0x38487038, 0xf504f1f5, 0xbcdf63bc, 0xb6c177b6, 0xda75afda, 0x21634221, 0x10302010, 0xff1ae5ff, 0xf30efdf3, 0xd26dbfd2, 0xcd4c81cd, 0x0c14180c, 0x13352613, 0xec2fc3ec, 0x5fe1be5f, 0x97a23597, 0x44cc8844, 0x17392e17, 0xc45793c4, 0xa7f255a7, 0x7e82fc7e, 0x3d477a3d, 0x64acc864, 0x5de7ba5d, 0x192b3219, 0x7395e673, 0x60a0c060, 0x81981981, 0x4fd19e4f, 0xdc7fa3dc, 0x22664422, 0x2a7e542a, 0x90ab3b90, 0x88830b88, 0x46ca8c46, 0xee29c7ee, 0xb8d36bb8, 0x143c2814, 0xde79a7de, 0x5ee2bc5e, 0x0b1d160b, 0xdb76addb, 0xe03bdbe0, 0x32566432, 0x3a4e743a, 0x0a1e140a, 0x49db9249, 0x060a0c06, 0x246c4824, 0x5ce4b85c, 0xc25d9fc2, 0xd36ebdd3, 0xacef43ac, 0x62a6c462, 0x91a83991, 0x95a43195, 0xe437d3e4, 0x798bf279, 0xe732d5e7, 0xc8438bc8, 0x37596e37, 0x6db7da6d, 0x8d8c018d, 0xd564b1d5, 0x4ed29c4e, 0xa9e049a9, 0x6cb4d86c, 0x56faac56, 0xf407f3f4, 0xea25cfea, 0x65afca65, 0x7a8ef47a, 0xaee947ae, 0x08181008, 0xbad56fba, 0x7888f078, 0x256f4a25, 0x2e725c2e, 0x1c24381c, 0xa6f157a6, 0xb4c773b4, 0xc65197c6, 0xe823cbe8, 0xdd7ca1dd, 0x749ce874, 0x1f213e1f, 0x4bdd964b, 0xbddc61bd, 0x8b860d8b, 0x8a850f8a, 0x7090e070, 0x3e427c3e, 0xb5c471b5, 0x66aacc66, 0x48d89048, 0x03050603, 0xf601f7f6, 0x0e121c0e, 0x61a3c261, 0x355f6a35, 0x57f9ae57, 0xb9d069b9, 0x86911786, 0xc15899c1, 0x1d273a1d, 0x9eb9279e, 0xe138d9e1, 0xf813ebf8, 0x98b32b98, 0x11332211, 0x69bbd269, 0xd970a9d9, 0x8e89078e, 0x94a73394, 0x9bb62d9b, 0x1e223c1e, 0x87921587, 0xe920c9e9, 0xce4987ce, 0x55ffaa55, 0x28785028, 0xdf7aa5df, 0x8c8f038c, 0xa1f859a1, 0x89800989, 0x0d171a0d, 0xbfda65bf, 0xe631d7e6, 0x42c68442, 0x68b8d068, 0x41c38241, 0x99b02999, 0x2d775a2d, 0x0f111e0f, 0xb0cb7bb0, 0x54fca854, 0xbbd66dbb, 0x163a2c16];
  var T4 = [0x6363a5c6, 0x7c7c84f8, 0x777799ee, 0x7b7b8df6, 0xf2f20dff, 0x6b6bbdd6, 0x6f6fb1de, 0xc5c55491, 0x30305060, 0x01010302, 0x6767a9ce, 0x2b2b7d56, 0xfefe19e7, 0xd7d762b5, 0xababe64d, 0x76769aec, 0xcaca458f, 0x82829d1f, 0xc9c94089, 0x7d7d87fa, 0xfafa15ef, 0x5959ebb2, 0x4747c98e, 0xf0f00bfb, 0xadadec41, 0xd4d467b3, 0xa2a2fd5f, 0xafafea45, 0x9c9cbf23, 0xa4a4f753, 0x727296e4, 0xc0c05b9b, 0xb7b7c275, 0xfdfd1ce1, 0x9393ae3d, 0x26266a4c, 0x36365a6c, 0x3f3f417e, 0xf7f702f5, 0xcccc4f83, 0x34345c68, 0xa5a5f451, 0xe5e534d1, 0xf1f108f9, 0x717193e2, 0xd8d873ab, 0x31315362, 0x15153f2a, 0x04040c08, 0xc7c75295, 0x23236546, 0xc3c35e9d, 0x18182830, 0x9696a137, 0x05050f0a, 0x9a9ab52f, 0x0707090e, 0x12123624, 0x80809b1b, 0xe2e23ddf, 0xebeb26cd, 0x2727694e, 0xb2b2cd7f, 0x75759fea, 0x09091b12, 0x83839e1d, 0x2c2c7458, 0x1a1a2e34, 0x1b1b2d36, 0x6e6eb2dc, 0x5a5aeeb4, 0xa0a0fb5b, 0x5252f6a4, 0x3b3b4d76, 0xd6d661b7, 0xb3b3ce7d, 0x29297b52, 0xe3e33edd, 0x2f2f715e, 0x84849713, 0x5353f5a6, 0xd1d168b9, 0x00000000, 0xeded2cc1, 0x20206040, 0xfcfc1fe3, 0xb1b1c879, 0x5b5bedb6, 0x6a6abed4, 0xcbcb468d, 0xbebed967, 0x39394b72, 0x4a4ade94, 0x4c4cd498, 0x5858e8b0, 0xcfcf4a85, 0xd0d06bbb, 0xefef2ac5, 0xaaaae54f, 0xfbfb16ed, 0x4343c586, 0x4d4dd79a, 0x33335566, 0x85859411, 0x4545cf8a, 0xf9f910e9, 0x02020604, 0x7f7f81fe, 0x5050f0a0, 0x3c3c4478, 0x9f9fba25, 0xa8a8e34b, 0x5151f3a2, 0xa3a3fe5d, 0x4040c080, 0x8f8f8a05, 0x9292ad3f, 0x9d9dbc21, 0x38384870, 0xf5f504f1, 0xbcbcdf63, 0xb6b6c177, 0xdada75af, 0x21216342, 0x10103020, 0xffff1ae5, 0xf3f30efd, 0xd2d26dbf, 0xcdcd4c81, 0x0c0c1418, 0x13133526, 0xecec2fc3, 0x5f5fe1be, 0x9797a235, 0x4444cc88, 0x1717392e, 0xc4c45793, 0xa7a7f255, 0x7e7e82fc, 0x3d3d477a, 0x6464acc8, 0x5d5de7ba, 0x19192b32, 0x737395e6, 0x6060a0c0, 0x81819819, 0x4f4fd19e, 0xdcdc7fa3, 0x22226644, 0x2a2a7e54, 0x9090ab3b, 0x8888830b, 0x4646ca8c, 0xeeee29c7, 0xb8b8d36b, 0x14143c28, 0xdede79a7, 0x5e5ee2bc, 0x0b0b1d16, 0xdbdb76ad, 0xe0e03bdb, 0x32325664, 0x3a3a4e74, 0x0a0a1e14, 0x4949db92, 0x06060a0c, 0x24246c48, 0x5c5ce4b8, 0xc2c25d9f, 0xd3d36ebd, 0xacacef43, 0x6262a6c4, 0x9191a839, 0x9595a431, 0xe4e437d3, 0x79798bf2, 0xe7e732d5, 0xc8c8438b, 0x3737596e, 0x6d6db7da, 0x8d8d8c01, 0xd5d564b1, 0x4e4ed29c, 0xa9a9e049, 0x6c6cb4d8, 0x5656faac, 0xf4f407f3, 0xeaea25cf, 0x6565afca, 0x7a7a8ef4, 0xaeaee947, 0x08081810, 0xbabad56f, 0x787888f0, 0x25256f4a, 0x2e2e725c, 0x1c1c2438, 0xa6a6f157, 0xb4b4c773, 0xc6c65197, 0xe8e823cb, 0xdddd7ca1, 0x74749ce8, 0x1f1f213e, 0x4b4bdd96, 0xbdbddc61, 0x8b8b860d, 0x8a8a850f, 0x707090e0, 0x3e3e427c, 0xb5b5c471, 0x6666aacc, 0x4848d890, 0x03030506, 0xf6f601f7, 0x0e0e121c, 0x6161a3c2, 0x35355f6a, 0x5757f9ae, 0xb9b9d069, 0x86869117, 0xc1c15899, 0x1d1d273a, 0x9e9eb927, 0xe1e138d9, 0xf8f813eb, 0x9898b32b, 0x11113322, 0x6969bbd2, 0xd9d970a9, 0x8e8e8907, 0x9494a733, 0x9b9bb62d, 0x1e1e223c, 0x87879215, 0xe9e920c9, 0xcece4987, 0x5555ffaa, 0x28287850, 0xdfdf7aa5, 0x8c8c8f03, 0xa1a1f859, 0x89898009, 0x0d0d171a, 0xbfbfda65, 0xe6e631d7, 0x4242c684, 0x6868b8d0, 0x4141c382, 0x9999b029, 0x2d2d775a, 0x0f0f111e, 0xb0b0cb7b, 0x5454fca8, 0xbbbbd66d, 0x16163a2c];

  // Transformations for decryption
  var T5 = [0x51f4a750, 0x7e416553, 0x1a17a4c3, 0x3a275e96, 0x3bab6bcb, 0x1f9d45f1, 0xacfa58ab, 0x4be30393, 0x2030fa55, 0xad766df6, 0x88cc7691, 0xf5024c25, 0x4fe5d7fc, 0xc52acbd7, 0x26354480, 0xb562a38f, 0xdeb15a49, 0x25ba1b67, 0x45ea0e98, 0x5dfec0e1, 0xc32f7502, 0x814cf012, 0x8d4697a3, 0x6bd3f9c6, 0x038f5fe7, 0x15929c95, 0xbf6d7aeb, 0x955259da, 0xd4be832d, 0x587421d3, 0x49e06929, 0x8ec9c844, 0x75c2896a, 0xf48e7978, 0x99583e6b, 0x27b971dd, 0xbee14fb6, 0xf088ad17, 0xc920ac66, 0x7dce3ab4, 0x63df4a18, 0xe51a3182, 0x97513360, 0x62537f45, 0xb16477e0, 0xbb6bae84, 0xfe81a01c, 0xf9082b94, 0x70486858, 0x8f45fd19, 0x94de6c87, 0x527bf8b7, 0xab73d323, 0x724b02e2, 0xe31f8f57, 0x6655ab2a, 0xb2eb2807, 0x2fb5c203, 0x86c57b9a, 0xd33708a5, 0x302887f2, 0x23bfa5b2, 0x02036aba, 0xed16825c, 0x8acf1c2b, 0xa779b492, 0xf307f2f0, 0x4e69e2a1, 0x65daf4cd, 0x0605bed5, 0xd134621f, 0xc4a6fe8a, 0x342e539d, 0xa2f355a0, 0x058ae132, 0xa4f6eb75, 0x0b83ec39, 0x4060efaa, 0x5e719f06, 0xbd6e1051, 0x3e218af9, 0x96dd063d, 0xdd3e05ae, 0x4de6bd46, 0x91548db5, 0x71c45d05, 0x0406d46f, 0x605015ff, 0x1998fb24, 0xd6bde997, 0x894043cc, 0x67d99e77, 0xb0e842bd, 0x07898b88, 0xe7195b38, 0x79c8eedb, 0xa17c0a47, 0x7c420fe9, 0xf8841ec9, 0x00000000, 0x09808683, 0x322bed48, 0x1e1170ac, 0x6c5a724e, 0xfd0efffb, 0x0f853856, 0x3daed51e, 0x362d3927, 0x0a0fd964, 0x685ca621, 0x9b5b54d1, 0x24362e3a, 0x0c0a67b1, 0x9357e70f, 0xb4ee96d2, 0x1b9b919e, 0x80c0c54f, 0x61dc20a2, 0x5a774b69, 0x1c121a16, 0xe293ba0a, 0xc0a02ae5, 0x3c22e043, 0x121b171d, 0x0e090d0b, 0xf28bc7ad, 0x2db6a8b9, 0x141ea9c8, 0x57f11985, 0xaf75074c, 0xee99ddbb, 0xa37f60fd, 0xf701269f, 0x5c72f5bc, 0x44663bc5, 0x5bfb7e34, 0x8b432976, 0xcb23c6dc, 0xb6edfc68, 0xb8e4f163, 0xd731dcca, 0x42638510, 0x13972240, 0x84c61120, 0x854a247d, 0xd2bb3df8, 0xaef93211, 0xc729a16d, 0x1d9e2f4b, 0xdcb230f3, 0x0d8652ec, 0x77c1e3d0, 0x2bb3166c, 0xa970b999, 0x119448fa, 0x47e96422, 0xa8fc8cc4, 0xa0f03f1a, 0x567d2cd8, 0x223390ef, 0x87494ec7, 0xd938d1c1, 0x8ccaa2fe, 0x98d40b36, 0xa6f581cf, 0xa57ade28, 0xdab78e26, 0x3fadbfa4, 0x2c3a9de4, 0x5078920d, 0x6a5fcc9b, 0x547e4662, 0xf68d13c2, 0x90d8b8e8, 0x2e39f75e, 0x82c3aff5, 0x9f5d80be, 0x69d0937c, 0x6fd52da9, 0xcf2512b3, 0xc8ac993b, 0x10187da7, 0xe89c636e, 0xdb3bbb7b, 0xcd267809, 0x6e5918f4, 0xec9ab701, 0x834f9aa8, 0xe6956e65, 0xaaffe67e, 0x21bccf08, 0xef15e8e6, 0xbae79bd9, 0x4a6f36ce, 0xea9f09d4, 0x29b07cd6, 0x31a4b2af, 0x2a3f2331, 0xc6a59430, 0x35a266c0, 0x744ebc37, 0xfc82caa6, 0xe090d0b0, 0x33a7d815, 0xf104984a, 0x41ecdaf7, 0x7fcd500e, 0x1791f62f, 0x764dd68d, 0x43efb04d, 0xccaa4d54, 0xe49604df, 0x9ed1b5e3, 0x4c6a881b, 0xc12c1fb8, 0x4665517f, 0x9d5eea04, 0x018c355d, 0xfa877473, 0xfb0b412e, 0xb3671d5a, 0x92dbd252, 0xe9105633, 0x6dd64713, 0x9ad7618c, 0x37a10c7a, 0x59f8148e, 0xeb133c89, 0xcea927ee, 0xb761c935, 0xe11ce5ed, 0x7a47b13c, 0x9cd2df59, 0x55f2733f, 0x1814ce79, 0x73c737bf, 0x53f7cdea, 0x5ffdaa5b, 0xdf3d6f14, 0x7844db86, 0xcaaff381, 0xb968c43e, 0x3824342c, 0xc2a3405f, 0x161dc372, 0xbce2250c, 0x283c498b, 0xff0d9541, 0x39a80171, 0x080cb3de, 0xd8b4e49c, 0x6456c190, 0x7bcb8461, 0xd532b670, 0x486c5c74, 0xd0b85742];
  var T6 = [0x5051f4a7, 0x537e4165, 0xc31a17a4, 0x963a275e, 0xcb3bab6b, 0xf11f9d45, 0xabacfa58, 0x934be303, 0x552030fa, 0xf6ad766d, 0x9188cc76, 0x25f5024c, 0xfc4fe5d7, 0xd7c52acb, 0x80263544, 0x8fb562a3, 0x49deb15a, 0x6725ba1b, 0x9845ea0e, 0xe15dfec0, 0x02c32f75, 0x12814cf0, 0xa38d4697, 0xc66bd3f9, 0xe7038f5f, 0x9515929c, 0xebbf6d7a, 0xda955259, 0x2dd4be83, 0xd3587421, 0x2949e069, 0x448ec9c8, 0x6a75c289, 0x78f48e79, 0x6b99583e, 0xdd27b971, 0xb6bee14f, 0x17f088ad, 0x66c920ac, 0xb47dce3a, 0x1863df4a, 0x82e51a31, 0x60975133, 0x4562537f, 0xe0b16477, 0x84bb6bae, 0x1cfe81a0, 0x94f9082b, 0x58704868, 0x198f45fd, 0x8794de6c, 0xb7527bf8, 0x23ab73d3, 0xe2724b02, 0x57e31f8f, 0x2a6655ab, 0x07b2eb28, 0x032fb5c2, 0x9a86c57b, 0xa5d33708, 0xf2302887, 0xb223bfa5, 0xba02036a, 0x5ced1682, 0x2b8acf1c, 0x92a779b4, 0xf0f307f2, 0xa14e69e2, 0xcd65daf4, 0xd50605be, 0x1fd13462, 0x8ac4a6fe, 0x9d342e53, 0xa0a2f355, 0x32058ae1, 0x75a4f6eb, 0x390b83ec, 0xaa4060ef, 0x065e719f, 0x51bd6e10, 0xf93e218a, 0x3d96dd06, 0xaedd3e05, 0x464de6bd, 0xb591548d, 0x0571c45d, 0x6f0406d4, 0xff605015, 0x241998fb, 0x97d6bde9, 0xcc894043, 0x7767d99e, 0xbdb0e842, 0x8807898b, 0x38e7195b, 0xdb79c8ee, 0x47a17c0a, 0xe97c420f, 0xc9f8841e, 0x00000000, 0x83098086, 0x48322bed, 0xac1e1170, 0x4e6c5a72, 0xfbfd0eff, 0x560f8538, 0x1e3daed5, 0x27362d39, 0x640a0fd9, 0x21685ca6, 0xd19b5b54, 0x3a24362e, 0xb10c0a67, 0x0f9357e7, 0xd2b4ee96, 0x9e1b9b91, 0x4f80c0c5, 0xa261dc20, 0x695a774b, 0x161c121a, 0x0ae293ba, 0xe5c0a02a, 0x433c22e0, 0x1d121b17, 0x0b0e090d, 0xadf28bc7, 0xb92db6a8, 0xc8141ea9, 0x8557f119, 0x4caf7507, 0xbbee99dd, 0xfda37f60, 0x9ff70126, 0xbc5c72f5, 0xc544663b, 0x345bfb7e, 0x768b4329, 0xdccb23c6, 0x68b6edfc, 0x63b8e4f1, 0xcad731dc, 0x10426385, 0x40139722, 0x2084c611, 0x7d854a24, 0xf8d2bb3d, 0x11aef932, 0x6dc729a1, 0x4b1d9e2f, 0xf3dcb230, 0xec0d8652, 0xd077c1e3, 0x6c2bb316, 0x99a970b9, 0xfa119448, 0x2247e964, 0xc4a8fc8c, 0x1aa0f03f, 0xd8567d2c, 0xef223390, 0xc787494e, 0xc1d938d1, 0xfe8ccaa2, 0x3698d40b, 0xcfa6f581, 0x28a57ade, 0x26dab78e, 0xa43fadbf, 0xe42c3a9d, 0x0d507892, 0x9b6a5fcc, 0x62547e46, 0xc2f68d13, 0xe890d8b8, 0x5e2e39f7, 0xf582c3af, 0xbe9f5d80, 0x7c69d093, 0xa96fd52d, 0xb3cf2512, 0x3bc8ac99, 0xa710187d, 0x6ee89c63, 0x7bdb3bbb, 0x09cd2678, 0xf46e5918, 0x01ec9ab7, 0xa8834f9a, 0x65e6956e, 0x7eaaffe6, 0x0821bccf, 0xe6ef15e8, 0xd9bae79b, 0xce4a6f36, 0xd4ea9f09, 0xd629b07c, 0xaf31a4b2, 0x312a3f23, 0x30c6a594, 0xc035a266, 0x37744ebc, 0xa6fc82ca, 0xb0e090d0, 0x1533a7d8, 0x4af10498, 0xf741ecda, 0x0e7fcd50, 0x2f1791f6, 0x8d764dd6, 0x4d43efb0, 0x54ccaa4d, 0xdfe49604, 0xe39ed1b5, 0x1b4c6a88, 0xb8c12c1f, 0x7f466551, 0x049d5eea, 0x5d018c35, 0x73fa8774, 0x2efb0b41, 0x5ab3671d, 0x5292dbd2, 0x33e91056, 0x136dd647, 0x8c9ad761, 0x7a37a10c, 0x8e59f814, 0x89eb133c, 0xeecea927, 0x35b761c9, 0xede11ce5, 0x3c7a47b1, 0x599cd2df, 0x3f55f273, 0x791814ce, 0xbf73c737, 0xea53f7cd, 0x5b5ffdaa, 0x14df3d6f, 0x867844db, 0x81caaff3, 0x3eb968c4, 0x2c382434, 0x5fc2a340, 0x72161dc3, 0x0cbce225, 0x8b283c49, 0x41ff0d95, 0x7139a801, 0xde080cb3, 0x9cd8b4e4, 0x906456c1, 0x617bcb84, 0x70d532b6, 0x74486c5c, 0x42d0b857];
  var T7 = [0xa75051f4, 0x65537e41, 0xa4c31a17, 0x5e963a27, 0x6bcb3bab, 0x45f11f9d, 0x58abacfa, 0x03934be3, 0xfa552030, 0x6df6ad76, 0x769188cc, 0x4c25f502, 0xd7fc4fe5, 0xcbd7c52a, 0x44802635, 0xa38fb562, 0x5a49deb1, 0x1b6725ba, 0x0e9845ea, 0xc0e15dfe, 0x7502c32f, 0xf012814c, 0x97a38d46, 0xf9c66bd3, 0x5fe7038f, 0x9c951592, 0x7aebbf6d, 0x59da9552, 0x832dd4be, 0x21d35874, 0x692949e0, 0xc8448ec9, 0x896a75c2, 0x7978f48e, 0x3e6b9958, 0x71dd27b9, 0x4fb6bee1, 0xad17f088, 0xac66c920, 0x3ab47dce, 0x4a1863df, 0x3182e51a, 0x33609751, 0x7f456253, 0x77e0b164, 0xae84bb6b, 0xa01cfe81, 0x2b94f908, 0x68587048, 0xfd198f45, 0x6c8794de, 0xf8b7527b, 0xd323ab73, 0x02e2724b, 0x8f57e31f, 0xab2a6655, 0x2807b2eb, 0xc2032fb5, 0x7b9a86c5, 0x08a5d337, 0x87f23028, 0xa5b223bf, 0x6aba0203, 0x825ced16, 0x1c2b8acf, 0xb492a779, 0xf2f0f307, 0xe2a14e69, 0xf4cd65da, 0xbed50605, 0x621fd134, 0xfe8ac4a6, 0x539d342e, 0x55a0a2f3, 0xe132058a, 0xeb75a4f6, 0xec390b83, 0xefaa4060, 0x9f065e71, 0x1051bd6e, 0x8af93e21, 0x063d96dd, 0x05aedd3e, 0xbd464de6, 0x8db59154, 0x5d0571c4, 0xd46f0406, 0x15ff6050, 0xfb241998, 0xe997d6bd, 0x43cc8940, 0x9e7767d9, 0x42bdb0e8, 0x8b880789, 0x5b38e719, 0xeedb79c8, 0x0a47a17c, 0x0fe97c42, 0x1ec9f884, 0x00000000, 0x86830980, 0xed48322b, 0x70ac1e11, 0x724e6c5a, 0xfffbfd0e, 0x38560f85, 0xd51e3dae, 0x3927362d, 0xd9640a0f, 0xa621685c, 0x54d19b5b, 0x2e3a2436, 0x67b10c0a, 0xe70f9357, 0x96d2b4ee, 0x919e1b9b, 0xc54f80c0, 0x20a261dc, 0x4b695a77, 0x1a161c12, 0xba0ae293, 0x2ae5c0a0, 0xe0433c22, 0x171d121b, 0x0d0b0e09, 0xc7adf28b, 0xa8b92db6, 0xa9c8141e, 0x198557f1, 0x074caf75, 0xddbbee99, 0x60fda37f, 0x269ff701, 0xf5bc5c72, 0x3bc54466, 0x7e345bfb, 0x29768b43, 0xc6dccb23, 0xfc68b6ed, 0xf163b8e4, 0xdccad731, 0x85104263, 0x22401397, 0x112084c6, 0x247d854a, 0x3df8d2bb, 0x3211aef9, 0xa16dc729, 0x2f4b1d9e, 0x30f3dcb2, 0x52ec0d86, 0xe3d077c1, 0x166c2bb3, 0xb999a970, 0x48fa1194, 0x642247e9, 0x8cc4a8fc, 0x3f1aa0f0, 0x2cd8567d, 0x90ef2233, 0x4ec78749, 0xd1c1d938, 0xa2fe8cca, 0x0b3698d4, 0x81cfa6f5, 0xde28a57a, 0x8e26dab7, 0xbfa43fad, 0x9de42c3a, 0x920d5078, 0xcc9b6a5f, 0x4662547e, 0x13c2f68d, 0xb8e890d8, 0xf75e2e39, 0xaff582c3, 0x80be9f5d, 0x937c69d0, 0x2da96fd5, 0x12b3cf25, 0x993bc8ac, 0x7da71018, 0x636ee89c, 0xbb7bdb3b, 0x7809cd26, 0x18f46e59, 0xb701ec9a, 0x9aa8834f, 0x6e65e695, 0xe67eaaff, 0xcf0821bc, 0xe8e6ef15, 0x9bd9bae7, 0x36ce4a6f, 0x09d4ea9f, 0x7cd629b0, 0xb2af31a4, 0x23312a3f, 0x9430c6a5, 0x66c035a2, 0xbc37744e, 0xcaa6fc82, 0xd0b0e090, 0xd81533a7, 0x984af104, 0xdaf741ec, 0x500e7fcd, 0xf62f1791, 0xd68d764d, 0xb04d43ef, 0x4d54ccaa, 0x04dfe496, 0xb5e39ed1, 0x881b4c6a, 0x1fb8c12c, 0x517f4665, 0xea049d5e, 0x355d018c, 0x7473fa87, 0x412efb0b, 0x1d5ab367, 0xd25292db, 0x5633e910, 0x47136dd6, 0x618c9ad7, 0x0c7a37a1, 0x148e59f8, 0x3c89eb13, 0x27eecea9, 0xc935b761, 0xe5ede11c, 0xb13c7a47, 0xdf599cd2, 0x733f55f2, 0xce791814, 0x37bf73c7, 0xcdea53f7, 0xaa5b5ffd, 0x6f14df3d, 0xdb867844, 0xf381caaf, 0xc43eb968, 0x342c3824, 0x405fc2a3, 0xc372161d, 0x250cbce2, 0x498b283c, 0x9541ff0d, 0x017139a8, 0xb3de080c, 0xe49cd8b4, 0xc1906456, 0x84617bcb, 0xb670d532, 0x5c74486c, 0x5742d0b8];
  var T8 = [0xf4a75051, 0x4165537e, 0x17a4c31a, 0x275e963a, 0xab6bcb3b, 0x9d45f11f, 0xfa58abac, 0xe303934b, 0x30fa5520, 0x766df6ad, 0xcc769188, 0x024c25f5, 0xe5d7fc4f, 0x2acbd7c5, 0x35448026, 0x62a38fb5, 0xb15a49de, 0xba1b6725, 0xea0e9845, 0xfec0e15d, 0x2f7502c3, 0x4cf01281, 0x4697a38d, 0xd3f9c66b, 0x8f5fe703, 0x929c9515, 0x6d7aebbf, 0x5259da95, 0xbe832dd4, 0x7421d358, 0xe0692949, 0xc9c8448e, 0xc2896a75, 0x8e7978f4, 0x583e6b99, 0xb971dd27, 0xe14fb6be, 0x88ad17f0, 0x20ac66c9, 0xce3ab47d, 0xdf4a1863, 0x1a3182e5, 0x51336097, 0x537f4562, 0x6477e0b1, 0x6bae84bb, 0x81a01cfe, 0x082b94f9, 0x48685870, 0x45fd198f, 0xde6c8794, 0x7bf8b752, 0x73d323ab, 0x4b02e272, 0x1f8f57e3, 0x55ab2a66, 0xeb2807b2, 0xb5c2032f, 0xc57b9a86, 0x3708a5d3, 0x2887f230, 0xbfa5b223, 0x036aba02, 0x16825ced, 0xcf1c2b8a, 0x79b492a7, 0x07f2f0f3, 0x69e2a14e, 0xdaf4cd65, 0x05bed506, 0x34621fd1, 0xa6fe8ac4, 0x2e539d34, 0xf355a0a2, 0x8ae13205, 0xf6eb75a4, 0x83ec390b, 0x60efaa40, 0x719f065e, 0x6e1051bd, 0x218af93e, 0xdd063d96, 0x3e05aedd, 0xe6bd464d, 0x548db591, 0xc45d0571, 0x06d46f04, 0x5015ff60, 0x98fb2419, 0xbde997d6, 0x4043cc89, 0xd99e7767, 0xe842bdb0, 0x898b8807, 0x195b38e7, 0xc8eedb79, 0x7c0a47a1, 0x420fe97c, 0x841ec9f8, 0x00000000, 0x80868309, 0x2bed4832, 0x1170ac1e, 0x5a724e6c, 0x0efffbfd, 0x8538560f, 0xaed51e3d, 0x2d392736, 0x0fd9640a, 0x5ca62168, 0x5b54d19b, 0x362e3a24, 0x0a67b10c, 0x57e70f93, 0xee96d2b4, 0x9b919e1b, 0xc0c54f80, 0xdc20a261, 0x774b695a, 0x121a161c, 0x93ba0ae2, 0xa02ae5c0, 0x22e0433c, 0x1b171d12, 0x090d0b0e, 0x8bc7adf2, 0xb6a8b92d, 0x1ea9c814, 0xf1198557, 0x75074caf, 0x99ddbbee, 0x7f60fda3, 0x01269ff7, 0x72f5bc5c, 0x663bc544, 0xfb7e345b, 0x4329768b, 0x23c6dccb, 0xedfc68b6, 0xe4f163b8, 0x31dccad7, 0x63851042, 0x97224013, 0xc6112084, 0x4a247d85, 0xbb3df8d2, 0xf93211ae, 0x29a16dc7, 0x9e2f4b1d, 0xb230f3dc, 0x8652ec0d, 0xc1e3d077, 0xb3166c2b, 0x70b999a9, 0x9448fa11, 0xe9642247, 0xfc8cc4a8, 0xf03f1aa0, 0x7d2cd856, 0x3390ef22, 0x494ec787, 0x38d1c1d9, 0xcaa2fe8c, 0xd40b3698, 0xf581cfa6, 0x7ade28a5, 0xb78e26da, 0xadbfa43f, 0x3a9de42c, 0x78920d50, 0x5fcc9b6a, 0x7e466254, 0x8d13c2f6, 0xd8b8e890, 0x39f75e2e, 0xc3aff582, 0x5d80be9f, 0xd0937c69, 0xd52da96f, 0x2512b3cf, 0xac993bc8, 0x187da710, 0x9c636ee8, 0x3bbb7bdb, 0x267809cd, 0x5918f46e, 0x9ab701ec, 0x4f9aa883, 0x956e65e6, 0xffe67eaa, 0xbccf0821, 0x15e8e6ef, 0xe79bd9ba, 0x6f36ce4a, 0x9f09d4ea, 0xb07cd629, 0xa4b2af31, 0x3f23312a, 0xa59430c6, 0xa266c035, 0x4ebc3774, 0x82caa6fc, 0x90d0b0e0, 0xa7d81533, 0x04984af1, 0xecdaf741, 0xcd500e7f, 0x91f62f17, 0x4dd68d76, 0xefb04d43, 0xaa4d54cc, 0x9604dfe4, 0xd1b5e39e, 0x6a881b4c, 0x2c1fb8c1, 0x65517f46, 0x5eea049d, 0x8c355d01, 0x877473fa, 0x0b412efb, 0x671d5ab3, 0xdbd25292, 0x105633e9, 0xd647136d, 0xd7618c9a, 0xa10c7a37, 0xf8148e59, 0x133c89eb, 0xa927eece, 0x61c935b7, 0x1ce5ede1, 0x47b13c7a, 0xd2df599c, 0xf2733f55, 0x14ce7918, 0xc737bf73, 0xf7cdea53, 0xfdaa5b5f, 0x3d6f14df, 0x44db8678, 0xaff381ca, 0x68c43eb9, 0x24342c38, 0xa3405fc2, 0x1dc37216, 0xe2250cbc, 0x3c498b28, 0x0d9541ff, 0xa8017139, 0x0cb3de08, 0xb4e49cd8, 0x56c19064, 0xcb84617b, 0x32b670d5, 0x6c5c7448, 0xb85742d0];

  // Transformations for decryption key expansion
  var U1 = [0x00000000, 0x0e090d0b, 0x1c121a16, 0x121b171d, 0x3824342c, 0x362d3927, 0x24362e3a, 0x2a3f2331, 0x70486858, 0x7e416553, 0x6c5a724e, 0x62537f45, 0x486c5c74, 0x4665517f, 0x547e4662, 0x5a774b69, 0xe090d0b0, 0xee99ddbb, 0xfc82caa6, 0xf28bc7ad, 0xd8b4e49c, 0xd6bde997, 0xc4a6fe8a, 0xcaaff381, 0x90d8b8e8, 0x9ed1b5e3, 0x8ccaa2fe, 0x82c3aff5, 0xa8fc8cc4, 0xa6f581cf, 0xb4ee96d2, 0xbae79bd9, 0xdb3bbb7b, 0xd532b670, 0xc729a16d, 0xc920ac66, 0xe31f8f57, 0xed16825c, 0xff0d9541, 0xf104984a, 0xab73d323, 0xa57ade28, 0xb761c935, 0xb968c43e, 0x9357e70f, 0x9d5eea04, 0x8f45fd19, 0x814cf012, 0x3bab6bcb, 0x35a266c0, 0x27b971dd, 0x29b07cd6, 0x038f5fe7, 0x0d8652ec, 0x1f9d45f1, 0x119448fa, 0x4be30393, 0x45ea0e98, 0x57f11985, 0x59f8148e, 0x73c737bf, 0x7dce3ab4, 0x6fd52da9, 0x61dc20a2, 0xad766df6, 0xa37f60fd, 0xb16477e0, 0xbf6d7aeb, 0x955259da, 0x9b5b54d1, 0x894043cc, 0x87494ec7, 0xdd3e05ae, 0xd33708a5, 0xc12c1fb8, 0xcf2512b3, 0xe51a3182, 0xeb133c89, 0xf9082b94, 0xf701269f, 0x4de6bd46, 0x43efb04d, 0x51f4a750, 0x5ffdaa5b, 0x75c2896a, 0x7bcb8461, 0x69d0937c, 0x67d99e77, 0x3daed51e, 0x33a7d815, 0x21bccf08, 0x2fb5c203, 0x058ae132, 0x0b83ec39, 0x1998fb24, 0x1791f62f, 0x764dd68d, 0x7844db86, 0x6a5fcc9b, 0x6456c190, 0x4e69e2a1, 0x4060efaa, 0x527bf8b7, 0x5c72f5bc, 0x0605bed5, 0x080cb3de, 0x1a17a4c3, 0x141ea9c8, 0x3e218af9, 0x302887f2, 0x223390ef, 0x2c3a9de4, 0x96dd063d, 0x98d40b36, 0x8acf1c2b, 0x84c61120, 0xaef93211, 0xa0f03f1a, 0xb2eb2807, 0xbce2250c, 0xe6956e65, 0xe89c636e, 0xfa877473, 0xf48e7978, 0xdeb15a49, 0xd0b85742, 0xc2a3405f, 0xccaa4d54, 0x41ecdaf7, 0x4fe5d7fc, 0x5dfec0e1, 0x53f7cdea, 0x79c8eedb, 0x77c1e3d0, 0x65daf4cd, 0x6bd3f9c6, 0x31a4b2af, 0x3fadbfa4, 0x2db6a8b9, 0x23bfa5b2, 0x09808683, 0x07898b88, 0x15929c95, 0x1b9b919e, 0xa17c0a47, 0xaf75074c, 0xbd6e1051, 0xb3671d5a, 0x99583e6b, 0x97513360, 0x854a247d, 0x8b432976, 0xd134621f, 0xdf3d6f14, 0xcd267809, 0xc32f7502, 0xe9105633, 0xe7195b38, 0xf5024c25, 0xfb0b412e, 0x9ad7618c, 0x94de6c87, 0x86c57b9a, 0x88cc7691, 0xa2f355a0, 0xacfa58ab, 0xbee14fb6, 0xb0e842bd, 0xea9f09d4, 0xe49604df, 0xf68d13c2, 0xf8841ec9, 0xd2bb3df8, 0xdcb230f3, 0xcea927ee, 0xc0a02ae5, 0x7a47b13c, 0x744ebc37, 0x6655ab2a, 0x685ca621, 0x42638510, 0x4c6a881b, 0x5e719f06, 0x5078920d, 0x0a0fd964, 0x0406d46f, 0x161dc372, 0x1814ce79, 0x322bed48, 0x3c22e043, 0x2e39f75e, 0x2030fa55, 0xec9ab701, 0xe293ba0a, 0xf088ad17, 0xfe81a01c, 0xd4be832d, 0xdab78e26, 0xc8ac993b, 0xc6a59430, 0x9cd2df59, 0x92dbd252, 0x80c0c54f, 0x8ec9c844, 0xa4f6eb75, 0xaaffe67e, 0xb8e4f163, 0xb6edfc68, 0x0c0a67b1, 0x02036aba, 0x10187da7, 0x1e1170ac, 0x342e539d, 0x3a275e96, 0x283c498b, 0x26354480, 0x7c420fe9, 0x724b02e2, 0x605015ff, 0x6e5918f4, 0x44663bc5, 0x4a6f36ce, 0x587421d3, 0x567d2cd8, 0x37a10c7a, 0x39a80171, 0x2bb3166c, 0x25ba1b67, 0x0f853856, 0x018c355d, 0x13972240, 0x1d9e2f4b, 0x47e96422, 0x49e06929, 0x5bfb7e34, 0x55f2733f, 0x7fcd500e, 0x71c45d05, 0x63df4a18, 0x6dd64713, 0xd731dcca, 0xd938d1c1, 0xcb23c6dc, 0xc52acbd7, 0xef15e8e6, 0xe11ce5ed, 0xf307f2f0, 0xfd0efffb, 0xa779b492, 0xa970b999, 0xbb6bae84, 0xb562a38f, 0x9f5d80be, 0x91548db5, 0x834f9aa8, 0x8d4697a3];
  var U2 = [0x00000000, 0x0b0e090d, 0x161c121a, 0x1d121b17, 0x2c382434, 0x27362d39, 0x3a24362e, 0x312a3f23, 0x58704868, 0x537e4165, 0x4e6c5a72, 0x4562537f, 0x74486c5c, 0x7f466551, 0x62547e46, 0x695a774b, 0xb0e090d0, 0xbbee99dd, 0xa6fc82ca, 0xadf28bc7, 0x9cd8b4e4, 0x97d6bde9, 0x8ac4a6fe, 0x81caaff3, 0xe890d8b8, 0xe39ed1b5, 0xfe8ccaa2, 0xf582c3af, 0xc4a8fc8c, 0xcfa6f581, 0xd2b4ee96, 0xd9bae79b, 0x7bdb3bbb, 0x70d532b6, 0x6dc729a1, 0x66c920ac, 0x57e31f8f, 0x5ced1682, 0x41ff0d95, 0x4af10498, 0x23ab73d3, 0x28a57ade, 0x35b761c9, 0x3eb968c4, 0x0f9357e7, 0x049d5eea, 0x198f45fd, 0x12814cf0, 0xcb3bab6b, 0xc035a266, 0xdd27b971, 0xd629b07c, 0xe7038f5f, 0xec0d8652, 0xf11f9d45, 0xfa119448, 0x934be303, 0x9845ea0e, 0x8557f119, 0x8e59f814, 0xbf73c737, 0xb47dce3a, 0xa96fd52d, 0xa261dc20, 0xf6ad766d, 0xfda37f60, 0xe0b16477, 0xebbf6d7a, 0xda955259, 0xd19b5b54, 0xcc894043, 0xc787494e, 0xaedd3e05, 0xa5d33708, 0xb8c12c1f, 0xb3cf2512, 0x82e51a31, 0x89eb133c, 0x94f9082b, 0x9ff70126, 0x464de6bd, 0x4d43efb0, 0x5051f4a7, 0x5b5ffdaa, 0x6a75c289, 0x617bcb84, 0x7c69d093, 0x7767d99e, 0x1e3daed5, 0x1533a7d8, 0x0821bccf, 0x032fb5c2, 0x32058ae1, 0x390b83ec, 0x241998fb, 0x2f1791f6, 0x8d764dd6, 0x867844db, 0x9b6a5fcc, 0x906456c1, 0xa14e69e2, 0xaa4060ef, 0xb7527bf8, 0xbc5c72f5, 0xd50605be, 0xde080cb3, 0xc31a17a4, 0xc8141ea9, 0xf93e218a, 0xf2302887, 0xef223390, 0xe42c3a9d, 0x3d96dd06, 0x3698d40b, 0x2b8acf1c, 0x2084c611, 0x11aef932, 0x1aa0f03f, 0x07b2eb28, 0x0cbce225, 0x65e6956e, 0x6ee89c63, 0x73fa8774, 0x78f48e79, 0x49deb15a, 0x42d0b857, 0x5fc2a340, 0x54ccaa4d, 0xf741ecda, 0xfc4fe5d7, 0xe15dfec0, 0xea53f7cd, 0xdb79c8ee, 0xd077c1e3, 0xcd65daf4, 0xc66bd3f9, 0xaf31a4b2, 0xa43fadbf, 0xb92db6a8, 0xb223bfa5, 0x83098086, 0x8807898b, 0x9515929c, 0x9e1b9b91, 0x47a17c0a, 0x4caf7507, 0x51bd6e10, 0x5ab3671d, 0x6b99583e, 0x60975133, 0x7d854a24, 0x768b4329, 0x1fd13462, 0x14df3d6f, 0x09cd2678, 0x02c32f75, 0x33e91056, 0x38e7195b, 0x25f5024c, 0x2efb0b41, 0x8c9ad761, 0x8794de6c, 0x9a86c57b, 0x9188cc76, 0xa0a2f355, 0xabacfa58, 0xb6bee14f, 0xbdb0e842, 0xd4ea9f09, 0xdfe49604, 0xc2f68d13, 0xc9f8841e, 0xf8d2bb3d, 0xf3dcb230, 0xeecea927, 0xe5c0a02a, 0x3c7a47b1, 0x37744ebc, 0x2a6655ab, 0x21685ca6, 0x10426385, 0x1b4c6a88, 0x065e719f, 0x0d507892, 0x640a0fd9, 0x6f0406d4, 0x72161dc3, 0x791814ce, 0x48322bed, 0x433c22e0, 0x5e2e39f7, 0x552030fa, 0x01ec9ab7, 0x0ae293ba, 0x17f088ad, 0x1cfe81a0, 0x2dd4be83, 0x26dab78e, 0x3bc8ac99, 0x30c6a594, 0x599cd2df, 0x5292dbd2, 0x4f80c0c5, 0x448ec9c8, 0x75a4f6eb, 0x7eaaffe6, 0x63b8e4f1, 0x68b6edfc, 0xb10c0a67, 0xba02036a, 0xa710187d, 0xac1e1170, 0x9d342e53, 0x963a275e, 0x8b283c49, 0x80263544, 0xe97c420f, 0xe2724b02, 0xff605015, 0xf46e5918, 0xc544663b, 0xce4a6f36, 0xd3587421, 0xd8567d2c, 0x7a37a10c, 0x7139a801, 0x6c2bb316, 0x6725ba1b, 0x560f8538, 0x5d018c35, 0x40139722, 0x4b1d9e2f, 0x2247e964, 0x2949e069, 0x345bfb7e, 0x3f55f273, 0x0e7fcd50, 0x0571c45d, 0x1863df4a, 0x136dd647, 0xcad731dc, 0xc1d938d1, 0xdccb23c6, 0xd7c52acb, 0xe6ef15e8, 0xede11ce5, 0xf0f307f2, 0xfbfd0eff, 0x92a779b4, 0x99a970b9, 0x84bb6bae, 0x8fb562a3, 0xbe9f5d80, 0xb591548d, 0xa8834f9a, 0xa38d4697];
  var U3 = [0x00000000, 0x0d0b0e09, 0x1a161c12, 0x171d121b, 0x342c3824, 0x3927362d, 0x2e3a2436, 0x23312a3f, 0x68587048, 0x65537e41, 0x724e6c5a, 0x7f456253, 0x5c74486c, 0x517f4665, 0x4662547e, 0x4b695a77, 0xd0b0e090, 0xddbbee99, 0xcaa6fc82, 0xc7adf28b, 0xe49cd8b4, 0xe997d6bd, 0xfe8ac4a6, 0xf381caaf, 0xb8e890d8, 0xb5e39ed1, 0xa2fe8cca, 0xaff582c3, 0x8cc4a8fc, 0x81cfa6f5, 0x96d2b4ee, 0x9bd9bae7, 0xbb7bdb3b, 0xb670d532, 0xa16dc729, 0xac66c920, 0x8f57e31f, 0x825ced16, 0x9541ff0d, 0x984af104, 0xd323ab73, 0xde28a57a, 0xc935b761, 0xc43eb968, 0xe70f9357, 0xea049d5e, 0xfd198f45, 0xf012814c, 0x6bcb3bab, 0x66c035a2, 0x71dd27b9, 0x7cd629b0, 0x5fe7038f, 0x52ec0d86, 0x45f11f9d, 0x48fa1194, 0x03934be3, 0x0e9845ea, 0x198557f1, 0x148e59f8, 0x37bf73c7, 0x3ab47dce, 0x2da96fd5, 0x20a261dc, 0x6df6ad76, 0x60fda37f, 0x77e0b164, 0x7aebbf6d, 0x59da9552, 0x54d19b5b, 0x43cc8940, 0x4ec78749, 0x05aedd3e, 0x08a5d337, 0x1fb8c12c, 0x12b3cf25, 0x3182e51a, 0x3c89eb13, 0x2b94f908, 0x269ff701, 0xbd464de6, 0xb04d43ef, 0xa75051f4, 0xaa5b5ffd, 0x896a75c2, 0x84617bcb, 0x937c69d0, 0x9e7767d9, 0xd51e3dae, 0xd81533a7, 0xcf0821bc, 0xc2032fb5, 0xe132058a, 0xec390b83, 0xfb241998, 0xf62f1791, 0xd68d764d, 0xdb867844, 0xcc9b6a5f, 0xc1906456, 0xe2a14e69, 0xefaa4060, 0xf8b7527b, 0xf5bc5c72, 0xbed50605, 0xb3de080c, 0xa4c31a17, 0xa9c8141e, 0x8af93e21, 0x87f23028, 0x90ef2233, 0x9de42c3a, 0x063d96dd, 0x0b3698d4, 0x1c2b8acf, 0x112084c6, 0x3211aef9, 0x3f1aa0f0, 0x2807b2eb, 0x250cbce2, 0x6e65e695, 0x636ee89c, 0x7473fa87, 0x7978f48e, 0x5a49deb1, 0x5742d0b8, 0x405fc2a3, 0x4d54ccaa, 0xdaf741ec, 0xd7fc4fe5, 0xc0e15dfe, 0xcdea53f7, 0xeedb79c8, 0xe3d077c1, 0xf4cd65da, 0xf9c66bd3, 0xb2af31a4, 0xbfa43fad, 0xa8b92db6, 0xa5b223bf, 0x86830980, 0x8b880789, 0x9c951592, 0x919e1b9b, 0x0a47a17c, 0x074caf75, 0x1051bd6e, 0x1d5ab367, 0x3e6b9958, 0x33609751, 0x247d854a, 0x29768b43, 0x621fd134, 0x6f14df3d, 0x7809cd26, 0x7502c32f, 0x5633e910, 0x5b38e719, 0x4c25f502, 0x412efb0b, 0x618c9ad7, 0x6c8794de, 0x7b9a86c5, 0x769188cc, 0x55a0a2f3, 0x58abacfa, 0x4fb6bee1, 0x42bdb0e8, 0x09d4ea9f, 0x04dfe496, 0x13c2f68d, 0x1ec9f884, 0x3df8d2bb, 0x30f3dcb2, 0x27eecea9, 0x2ae5c0a0, 0xb13c7a47, 0xbc37744e, 0xab2a6655, 0xa621685c, 0x85104263, 0x881b4c6a, 0x9f065e71, 0x920d5078, 0xd9640a0f, 0xd46f0406, 0xc372161d, 0xce791814, 0xed48322b, 0xe0433c22, 0xf75e2e39, 0xfa552030, 0xb701ec9a, 0xba0ae293, 0xad17f088, 0xa01cfe81, 0x832dd4be, 0x8e26dab7, 0x993bc8ac, 0x9430c6a5, 0xdf599cd2, 0xd25292db, 0xc54f80c0, 0xc8448ec9, 0xeb75a4f6, 0xe67eaaff, 0xf163b8e4, 0xfc68b6ed, 0x67b10c0a, 0x6aba0203, 0x7da71018, 0x70ac1e11, 0x539d342e, 0x5e963a27, 0x498b283c, 0x44802635, 0x0fe97c42, 0x02e2724b, 0x15ff6050, 0x18f46e59, 0x3bc54466, 0x36ce4a6f, 0x21d35874, 0x2cd8567d, 0x0c7a37a1, 0x017139a8, 0x166c2bb3, 0x1b6725ba, 0x38560f85, 0x355d018c, 0x22401397, 0x2f4b1d9e, 0x642247e9, 0x692949e0, 0x7e345bfb, 0x733f55f2, 0x500e7fcd, 0x5d0571c4, 0x4a1863df, 0x47136dd6, 0xdccad731, 0xd1c1d938, 0xc6dccb23, 0xcbd7c52a, 0xe8e6ef15, 0xe5ede11c, 0xf2f0f307, 0xfffbfd0e, 0xb492a779, 0xb999a970, 0xae84bb6b, 0xa38fb562, 0x80be9f5d, 0x8db59154, 0x9aa8834f, 0x97a38d46];
  var U4 = [0x00000000, 0x090d0b0e, 0x121a161c, 0x1b171d12, 0x24342c38, 0x2d392736, 0x362e3a24, 0x3f23312a, 0x48685870, 0x4165537e, 0x5a724e6c, 0x537f4562, 0x6c5c7448, 0x65517f46, 0x7e466254, 0x774b695a, 0x90d0b0e0, 0x99ddbbee, 0x82caa6fc, 0x8bc7adf2, 0xb4e49cd8, 0xbde997d6, 0xa6fe8ac4, 0xaff381ca, 0xd8b8e890, 0xd1b5e39e, 0xcaa2fe8c, 0xc3aff582, 0xfc8cc4a8, 0xf581cfa6, 0xee96d2b4, 0xe79bd9ba, 0x3bbb7bdb, 0x32b670d5, 0x29a16dc7, 0x20ac66c9, 0x1f8f57e3, 0x16825ced, 0x0d9541ff, 0x04984af1, 0x73d323ab, 0x7ade28a5, 0x61c935b7, 0x68c43eb9, 0x57e70f93, 0x5eea049d, 0x45fd198f, 0x4cf01281, 0xab6bcb3b, 0xa266c035, 0xb971dd27, 0xb07cd629, 0x8f5fe703, 0x8652ec0d, 0x9d45f11f, 0x9448fa11, 0xe303934b, 0xea0e9845, 0xf1198557, 0xf8148e59, 0xc737bf73, 0xce3ab47d, 0xd52da96f, 0xdc20a261, 0x766df6ad, 0x7f60fda3, 0x6477e0b1, 0x6d7aebbf, 0x5259da95, 0x5b54d19b, 0x4043cc89, 0x494ec787, 0x3e05aedd, 0x3708a5d3, 0x2c1fb8c1, 0x2512b3cf, 0x1a3182e5, 0x133c89eb, 0x082b94f9, 0x01269ff7, 0xe6bd464d, 0xefb04d43, 0xf4a75051, 0xfdaa5b5f, 0xc2896a75, 0xcb84617b, 0xd0937c69, 0xd99e7767, 0xaed51e3d, 0xa7d81533, 0xbccf0821, 0xb5c2032f, 0x8ae13205, 0x83ec390b, 0x98fb2419, 0x91f62f17, 0x4dd68d76, 0x44db8678, 0x5fcc9b6a, 0x56c19064, 0x69e2a14e, 0x60efaa40, 0x7bf8b752, 0x72f5bc5c, 0x05bed506, 0x0cb3de08, 0x17a4c31a, 0x1ea9c814, 0x218af93e, 0x2887f230, 0x3390ef22, 0x3a9de42c, 0xdd063d96, 0xd40b3698, 0xcf1c2b8a, 0xc6112084, 0xf93211ae, 0xf03f1aa0, 0xeb2807b2, 0xe2250cbc, 0x956e65e6, 0x9c636ee8, 0x877473fa, 0x8e7978f4, 0xb15a49de, 0xb85742d0, 0xa3405fc2, 0xaa4d54cc, 0xecdaf741, 0xe5d7fc4f, 0xfec0e15d, 0xf7cdea53, 0xc8eedb79, 0xc1e3d077, 0xdaf4cd65, 0xd3f9c66b, 0xa4b2af31, 0xadbfa43f, 0xb6a8b92d, 0xbfa5b223, 0x80868309, 0x898b8807, 0x929c9515, 0x9b919e1b, 0x7c0a47a1, 0x75074caf, 0x6e1051bd, 0x671d5ab3, 0x583e6b99, 0x51336097, 0x4a247d85, 0x4329768b, 0x34621fd1, 0x3d6f14df, 0x267809cd, 0x2f7502c3, 0x105633e9, 0x195b38e7, 0x024c25f5, 0x0b412efb, 0xd7618c9a, 0xde6c8794, 0xc57b9a86, 0xcc769188, 0xf355a0a2, 0xfa58abac, 0xe14fb6be, 0xe842bdb0, 0x9f09d4ea, 0x9604dfe4, 0x8d13c2f6, 0x841ec9f8, 0xbb3df8d2, 0xb230f3dc, 0xa927eece, 0xa02ae5c0, 0x47b13c7a, 0x4ebc3774, 0x55ab2a66, 0x5ca62168, 0x63851042, 0x6a881b4c, 0x719f065e, 0x78920d50, 0x0fd9640a, 0x06d46f04, 0x1dc37216, 0x14ce7918, 0x2bed4832, 0x22e0433c, 0x39f75e2e, 0x30fa5520, 0x9ab701ec, 0x93ba0ae2, 0x88ad17f0, 0x81a01cfe, 0xbe832dd4, 0xb78e26da, 0xac993bc8, 0xa59430c6, 0xd2df599c, 0xdbd25292, 0xc0c54f80, 0xc9c8448e, 0xf6eb75a4, 0xffe67eaa, 0xe4f163b8, 0xedfc68b6, 0x0a67b10c, 0x036aba02, 0x187da710, 0x1170ac1e, 0x2e539d34, 0x275e963a, 0x3c498b28, 0x35448026, 0x420fe97c, 0x4b02e272, 0x5015ff60, 0x5918f46e, 0x663bc544, 0x6f36ce4a, 0x7421d358, 0x7d2cd856, 0xa10c7a37, 0xa8017139, 0xb3166c2b, 0xba1b6725, 0x8538560f, 0x8c355d01, 0x97224013, 0x9e2f4b1d, 0xe9642247, 0xe0692949, 0xfb7e345b, 0xf2733f55, 0xcd500e7f, 0xc45d0571, 0xdf4a1863, 0xd647136d, 0x31dccad7, 0x38d1c1d9, 0x23c6dccb, 0x2acbd7c5, 0x15e8e6ef, 0x1ce5ede1, 0x07f2f0f3, 0x0efffbfd, 0x79b492a7, 0x70b999a9, 0x6bae84bb, 0x62a38fb5, 0x5d80be9f, 0x548db591, 0x4f9aa883, 0x4697a38d];
  function convertToInt32(bytes) {
    var result = [];
    for (var i = 0; i < bytes.length; i += 4) {
      result.push(bytes[i] << 24 | bytes[i + 1] << 16 | bytes[i + 2] << 8 | bytes[i + 3]);
    }
    return result;
  }
  var AES = function (key) {
    if (!(this instanceof AES)) {
      throw Error('AES must be instanitated with `new`');
    }
    Object.defineProperty(this, 'key', {
      value: coerceArray(key, true)
    });
    this._prepare();
  };
  AES.prototype._prepare = function () {
    var rounds = numberOfRounds[this.key.length];
    if (rounds == null) {
      throw new Error('invalid key size (must be 16, 24 or 32 bytes)');
    }

    // encryption round keys
    this._Ke = [];

    // decryption round keys
    this._Kd = [];
    for (var i = 0; i <= rounds; i++) {
      this._Ke.push([0, 0, 0, 0]);
      this._Kd.push([0, 0, 0, 0]);
    }
    var roundKeyCount = (rounds + 1) * 4;
    var KC = this.key.length / 4;

    // convert the key into ints
    var tk = convertToInt32(this.key);

    // copy values into round key arrays
    var index;
    for (var i = 0; i < KC; i++) {
      index = i >> 2;
      this._Ke[index][i % 4] = tk[i];
      this._Kd[rounds - index][i % 4] = tk[i];
    }

    // key expansion (fips-197 section 5.2)
    var rconpointer = 0;
    var t = KC,
      tt;
    while (t < roundKeyCount) {
      tt = tk[KC - 1];
      tk[0] ^= S[tt >> 16 & 0xFF] << 24 ^ S[tt >> 8 & 0xFF] << 16 ^ S[tt & 0xFF] << 8 ^ S[tt >> 24 & 0xFF] ^ rcon[rconpointer] << 24;
      rconpointer += 1;

      // key expansion (for non-256 bit)
      if (KC != 8) {
        for (var i = 1; i < KC; i++) {
          tk[i] ^= tk[i - 1];
        }

        // key expansion for 256-bit keys is "slightly different" (fips-197)
      } else {
        for (var i = 1; i < KC / 2; i++) {
          tk[i] ^= tk[i - 1];
        }
        tt = tk[KC / 2 - 1];
        tk[KC / 2] ^= S[tt & 0xFF] ^ S[tt >> 8 & 0xFF] << 8 ^ S[tt >> 16 & 0xFF] << 16 ^ S[tt >> 24 & 0xFF] << 24;
        for (var i = KC / 2 + 1; i < KC; i++) {
          tk[i] ^= tk[i - 1];
        }
      }

      // copy values into round key arrays
      var i = 0,
        r,
        c;
      while (i < KC && t < roundKeyCount) {
        r = t >> 2;
        c = t % 4;
        this._Ke[r][c] = tk[i];
        this._Kd[rounds - r][c] = tk[i++];
        t++;
      }
    }

    // inverse-cipher-ify the decryption round key (fips-197 section 5.3)
    for (var r = 1; r < rounds; r++) {
      for (var c = 0; c < 4; c++) {
        tt = this._Kd[r][c];
        this._Kd[r][c] = U1[tt >> 24 & 0xFF] ^ U2[tt >> 16 & 0xFF] ^ U3[tt >> 8 & 0xFF] ^ U4[tt & 0xFF];
      }
    }
  };
  AES.prototype.encrypt = function (plaintext) {
    if (plaintext.length != 16) {
      throw new Error('invalid plaintext size (must be 16 bytes)');
    }
    var rounds = this._Ke.length - 1;
    var a = [0, 0, 0, 0];

    // convert plaintext to (ints ^ key)
    var t = convertToInt32(plaintext);
    for (var i = 0; i < 4; i++) {
      t[i] ^= this._Ke[0][i];
    }

    // apply round transforms
    for (var r = 1; r < rounds; r++) {
      for (var i = 0; i < 4; i++) {
        a[i] = T1[t[i] >> 24 & 0xff] ^ T2[t[(i + 1) % 4] >> 16 & 0xff] ^ T3[t[(i + 2) % 4] >> 8 & 0xff] ^ T4[t[(i + 3) % 4] & 0xff] ^ this._Ke[r][i];
      }
      t = a.slice();
    }

    // the last round is special
    var result = createArray(16),
      tt;
    for (var i = 0; i < 4; i++) {
      tt = this._Ke[rounds][i];
      result[4 * i] = (S[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
      result[4 * i + 1] = (S[t[(i + 1) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
      result[4 * i + 2] = (S[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
      result[4 * i + 3] = (S[t[(i + 3) % 4] & 0xff] ^ tt) & 0xff;
    }
    return result;
  };
  AES.prototype.decrypt = function (ciphertext) {
    if (ciphertext.length != 16) {
      throw new Error('invalid ciphertext size (must be 16 bytes)');
    }
    var rounds = this._Kd.length - 1;
    var a = [0, 0, 0, 0];

    // convert plaintext to (ints ^ key)
    var t = convertToInt32(ciphertext);
    for (var i = 0; i < 4; i++) {
      t[i] ^= this._Kd[0][i];
    }

    // apply round transforms
    for (var r = 1; r < rounds; r++) {
      for (var i = 0; i < 4; i++) {
        a[i] = T5[t[i] >> 24 & 0xff] ^ T6[t[(i + 3) % 4] >> 16 & 0xff] ^ T7[t[(i + 2) % 4] >> 8 & 0xff] ^ T8[t[(i + 1) % 4] & 0xff] ^ this._Kd[r][i];
      }
      t = a.slice();
    }

    // the last round is special
    var result = createArray(16),
      tt;
    for (var i = 0; i < 4; i++) {
      tt = this._Kd[rounds][i];
      result[4 * i] = (Si[t[i] >> 24 & 0xff] ^ tt >> 24) & 0xff;
      result[4 * i + 1] = (Si[t[(i + 3) % 4] >> 16 & 0xff] ^ tt >> 16) & 0xff;
      result[4 * i + 2] = (Si[t[(i + 2) % 4] >> 8 & 0xff] ^ tt >> 8) & 0xff;
      result[4 * i + 3] = (Si[t[(i + 1) % 4] & 0xff] ^ tt) & 0xff;
    }
    return result;
  };

  /**
   *  Mode Of Operation - Electonic Codebook (ECB)
   */
  var ModeOfOperationECB = function (key) {
    if (!(this instanceof ModeOfOperationECB)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Electronic Code Block";
    this.name = "ecb";
    this._aes = new AES(key);
  };
  ModeOfOperationECB.prototype.encrypt = function (plaintext) {
    plaintext = coerceArray(plaintext);
    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }
    var ciphertext = createArray(plaintext.length);
    var block = createArray(16);
    for (var i = 0; i < plaintext.length; i += 16) {
      copyArray(plaintext, block, 0, i, i + 16);
      block = this._aes.encrypt(block);
      copyArray(block, ciphertext, i);
    }
    return ciphertext;
  };
  ModeOfOperationECB.prototype.decrypt = function (ciphertext) {
    ciphertext = coerceArray(ciphertext);
    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }
    var plaintext = createArray(ciphertext.length);
    var block = createArray(16);
    for (var i = 0; i < ciphertext.length; i += 16) {
      copyArray(ciphertext, block, 0, i, i + 16);
      block = this._aes.decrypt(block);
      copyArray(block, plaintext, i);
    }
    return plaintext;
  };

  /**
   *  Mode Of Operation - Cipher Block Chaining (CBC)
   */
  var ModeOfOperationCBC = function (key, iv) {
    if (!(this instanceof ModeOfOperationCBC)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Cipher Block Chaining";
    this.name = "cbc";
    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 bytes)');
    }
    this._lastCipherblock = coerceArray(iv, true);
    this._aes = new AES(key);
  };
  ModeOfOperationCBC.prototype.encrypt = function (plaintext) {
    plaintext = coerceArray(plaintext);
    if (plaintext.length % 16 !== 0) {
      throw new Error('invalid plaintext size (must be multiple of 16 bytes)');
    }
    var ciphertext = createArray(plaintext.length);
    var block = createArray(16);
    for (var i = 0; i < plaintext.length; i += 16) {
      copyArray(plaintext, block, 0, i, i + 16);
      for (var j = 0; j < 16; j++) {
        block[j] ^= this._lastCipherblock[j];
      }
      this._lastCipherblock = this._aes.encrypt(block);
      copyArray(this._lastCipherblock, ciphertext, i);
    }
    return ciphertext;
  };
  ModeOfOperationCBC.prototype.decrypt = function (ciphertext) {
    ciphertext = coerceArray(ciphertext);
    if (ciphertext.length % 16 !== 0) {
      throw new Error('invalid ciphertext size (must be multiple of 16 bytes)');
    }
    var plaintext = createArray(ciphertext.length);
    var block = createArray(16);
    for (var i = 0; i < ciphertext.length; i += 16) {
      copyArray(ciphertext, block, 0, i, i + 16);
      block = this._aes.decrypt(block);
      for (var j = 0; j < 16; j++) {
        plaintext[i + j] = block[j] ^ this._lastCipherblock[j];
      }
      copyArray(ciphertext, this._lastCipherblock, 0, i, i + 16);
    }
    return plaintext;
  };

  /**
   *  Mode Of Operation - Cipher Feedback (CFB)
   */
  var ModeOfOperationCFB = function (key, iv, segmentSize) {
    if (!(this instanceof ModeOfOperationCFB)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Cipher Feedback";
    this.name = "cfb";
    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 size)');
    }
    if (!segmentSize) {
      segmentSize = 1;
    }
    this.segmentSize = segmentSize;
    this._shiftRegister = coerceArray(iv, true);
    this._aes = new AES(key);
  };
  ModeOfOperationCFB.prototype.encrypt = function (plaintext) {
    if (plaintext.length % this.segmentSize != 0) {
      throw new Error('invalid plaintext size (must be segmentSize bytes)');
    }
    var encrypted = coerceArray(plaintext, true);
    var xorSegment;
    for (var i = 0; i < encrypted.length; i += this.segmentSize) {
      xorSegment = this._aes.encrypt(this._shiftRegister);
      for (var j = 0; j < this.segmentSize; j++) {
        encrypted[i + j] ^= xorSegment[j];
      }

      // Shift the register
      copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
      copyArray(encrypted, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
    }
    return encrypted;
  };
  ModeOfOperationCFB.prototype.decrypt = function (ciphertext) {
    if (ciphertext.length % this.segmentSize != 0) {
      throw new Error('invalid ciphertext size (must be segmentSize bytes)');
    }
    var plaintext = coerceArray(ciphertext, true);
    var xorSegment;
    for (var i = 0; i < plaintext.length; i += this.segmentSize) {
      xorSegment = this._aes.encrypt(this._shiftRegister);
      for (var j = 0; j < this.segmentSize; j++) {
        plaintext[i + j] ^= xorSegment[j];
      }

      // Shift the register
      copyArray(this._shiftRegister, this._shiftRegister, 0, this.segmentSize);
      copyArray(ciphertext, this._shiftRegister, 16 - this.segmentSize, i, i + this.segmentSize);
    }
    return plaintext;
  };

  /**
   *  Mode Of Operation - Output Feedback (OFB)
   */
  var ModeOfOperationOFB = function (key, iv) {
    if (!(this instanceof ModeOfOperationOFB)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Output Feedback";
    this.name = "ofb";
    if (!iv) {
      iv = createArray(16);
    } else if (iv.length != 16) {
      throw new Error('invalid initialation vector size (must be 16 bytes)');
    }
    this._lastPrecipher = coerceArray(iv, true);
    this._lastPrecipherIndex = 16;
    this._aes = new AES(key);
  };
  ModeOfOperationOFB.prototype.encrypt = function (plaintext) {
    var encrypted = coerceArray(plaintext, true);
    for (var i = 0; i < encrypted.length; i++) {
      if (this._lastPrecipherIndex === 16) {
        this._lastPrecipher = this._aes.encrypt(this._lastPrecipher);
        this._lastPrecipherIndex = 0;
      }
      encrypted[i] ^= this._lastPrecipher[this._lastPrecipherIndex++];
    }
    return encrypted;
  };

  // Decryption is symetric
  ModeOfOperationOFB.prototype.decrypt = ModeOfOperationOFB.prototype.encrypt;

  /**
   *  Counter object for CTR common mode of operation
   */
  var Counter = function (initialValue) {
    if (!(this instanceof Counter)) {
      throw Error('Counter must be instanitated with `new`');
    }

    // We allow 0, but anything false-ish uses the default 1
    if (initialValue !== 0 && !initialValue) {
      initialValue = 1;
    }
    if (typeof initialValue === 'number') {
      this._counter = createArray(16);
      this.setValue(initialValue);
    } else {
      this.setBytes(initialValue);
    }
  };
  Counter.prototype.setValue = function (value) {
    if (typeof value !== 'number' || parseInt(value) != value) {
      throw new Error('invalid counter value (must be an integer)');
    }

    // We cannot safely handle numbers beyond the safe range for integers
    if (value > Number.MAX_SAFE_INTEGER) {
      throw new Error('integer value out of safe range');
    }
    for (var index = 15; index >= 0; --index) {
      this._counter[index] = value % 256;
      value = parseInt(value / 256);
    }
  };
  Counter.prototype.setBytes = function (bytes) {
    bytes = coerceArray(bytes, true);
    if (bytes.length != 16) {
      throw new Error('invalid counter bytes size (must be 16 bytes)');
    }
    this._counter = bytes;
  };
  Counter.prototype.increment = function () {
    for (var i = 15; i >= 0; i--) {
      if (this._counter[i] === 255) {
        this._counter[i] = 0;
      } else {
        this._counter[i]++;
        break;
      }
    }
  };

  /**
   *  Mode Of Operation - Counter (CTR)
   */
  var ModeOfOperationCTR = function (key, counter) {
    if (!(this instanceof ModeOfOperationCTR)) {
      throw Error('AES must be instanitated with `new`');
    }
    this.description = "Counter";
    this.name = "ctr";
    if (!(counter instanceof Counter)) {
      counter = new Counter(counter);
    }
    this._counter = counter;
    this._remainingCounter = null;
    this._remainingCounterIndex = 16;
    this._aes = new AES(key);
  };
  ModeOfOperationCTR.prototype.encrypt = function (plaintext) {
    var encrypted = coerceArray(plaintext, true);
    for (var i = 0; i < encrypted.length; i++) {
      if (this._remainingCounterIndex === 16) {
        this._remainingCounter = this._aes.encrypt(this._counter._counter);
        this._remainingCounterIndex = 0;
        this._counter.increment();
      }
      encrypted[i] ^= this._remainingCounter[this._remainingCounterIndex++];
    }
    return encrypted;
  };

  // Decryption is symetric
  ModeOfOperationCTR.prototype.decrypt = ModeOfOperationCTR.prototype.encrypt;

  ///////////////////////
  // Padding

  // See:https://tools.ietf.org/html/rfc2315
  function pkcs7pad(data) {
    data = coerceArray(data, true);
    var padder = 16 - data.length % 16;
    var result = createArray(data.length + padder);
    copyArray(data, result);
    for (var i = data.length; i < result.length; i++) {
      result[i] = padder;
    }
    return result;
  }
  function pkcs7strip(data) {
    data = coerceArray(data, true);
    if (data.length < 16) {
      throw new Error('PKCS#7 invalid length');
    }
    var padder = data[data.length - 1];
    if (padder > 16) {
      throw new Error('PKCS#7 padding byte out of range');
    }
    var length = data.length - padder;
    for (var i = 0; i < padder; i++) {
      if (data[length + i] !== padder) {
        throw new Error('PKCS#7 invalid padding byte');
      }
    }
    var result = createArray(length);
    copyArray(data, result, 0, 0, length);
    return result;
  }

  ///////////////////////
  // Exporting

  // The block cipher
  var aesjs = {
    AES: AES,
    Counter: Counter,
    ModeOfOperation: {
      ecb: ModeOfOperationECB,
      cbc: ModeOfOperationCBC,
      cfb: ModeOfOperationCFB,
      ofb: ModeOfOperationOFB,
      ctr: ModeOfOperationCTR
    },
    utils: {
      hex: convertHex,
      utf8: convertUtf8
    },
    padding: {
      pkcs7: {
        pad: pkcs7pad,
        strip: pkcs7strip
      }
    },
    _arrayTest: {
      coerceArray: coerceArray,
      createArray: createArray,
      copyArray: copyArray
    }
  };

  // node.js
  if (true) {
    module.exports = aesjs;

    // RequireJS/AMD
    // http://www.requirejs.org/docs/api.html
    // https://github.com/amdjs/amdjs-api/wiki/AMD
  } else // removed by dead control flow
{}
})(this);

/***/ }),

/***/ 88823:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  jf: () => (/* binding */ buildJettonClaimPayload),
  ct: () => (/* binding */ buildJettonUnstakePayload),
  UY: () => (/* binding */ buildLiquidStakingDepositBody),
  Is: () => (/* binding */ buildLiquidStakingWithdrawBody),
  Dg: () => (/* binding */ buildTokenTransferBody),
  km: () => (/* binding */ commentToBytes),
  l_: () => (/* binding */ getDnsItemDomain),
  PZ: () => (/* binding */ getIsRawAddress),
  Ow: () => (/* binding */ getJettonMinterData),
  C6: () => (/* binding */ getJettonPoolStakeWallet),
  Rc: () => (/* binding */ getOurFeePayload),
  kb: () => (/* binding */ getTokenBalance),
  N7: () => (/* binding */ getTonClient),
  q5: () => (/* binding */ getWalletPublicKey),
  EV: () => (/* binding */ isExpiredTransactionError),
  ZN: () => (/* binding */ isSeqnoMismatchError),
  RS: () => (/* binding */ oneCellFromBoc),
  DN: () => (/* binding */ packBytesAsSnake),
  nN: () => (/* binding */ packBytesAsSnakeCell),
  mo: () => (/* binding */ packBytesAsSnakeForEncryptedData),
  or: () => (/* binding */ parseAddress),
  Pe: () => (/* binding */ parseBase64),
  zq: () => (/* binding */ parseStateInitCell),
  uA: () => (/* binding */ resolveTokenAddress),
  jq: () => (/* binding */ resolveTokenWalletAddress),
  vn: () => (/* binding */ toBase64Address),
  m$: () => (/* binding */ toRawAddress),
  wx: () => (/* binding */ unpackDicts),
  ss: () => (/* binding */ walletClassMap)
});

// UNUSED EXPORTS: buildLiquidStakingWithdrawCustomPayload

// EXTERNAL MODULE: ./node_modules/@ton/core/dist/index.js
var dist = __webpack_require__(1307);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R1.js
var WalletContractV1R1 = __webpack_require__(94471);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R2.js
var WalletContractV1R2 = __webpack_require__(90746);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV1R3.js
var WalletContractV1R3 = __webpack_require__(3273);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV2R1.js
var WalletContractV2R1 = __webpack_require__(71902);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV2R2.js
var WalletContractV2R2 = __webpack_require__(99579);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV3R1.js
var WalletContractV3R1 = __webpack_require__(79145);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV3R2.js
var WalletContractV3R2 = __webpack_require__(28784);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV4.js
var WalletContractV4 = __webpack_require__(7941);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/wallets/WalletContractV5R1.js
var WalletContractV5R1 = __webpack_require__(8387);
// EXTERNAL MODULE: ./src/config.ts
var config = __webpack_require__(31481);
// EXTERNAL MODULE: ./src/util/dns.ts
var dns = __webpack_require__(67491);
// EXTERNAL MODULE: ./src/util/iteratees.ts
var iteratees = __webpack_require__(87894);
// EXTERNAL MODULE: ./src/util/logs.ts
var logs = __webpack_require__(55029);
// EXTERNAL MODULE: ./src/util/withCacheAsync.ts
var withCacheAsync = __webpack_require__(69780);
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/DnsItem.ts
var DnsItem = __webpack_require__(96773);
;// ./src/api/chains/ton/contracts/JettonConstants.ts
class Op {
  static transfer = 0xf8a7ea5;
  static transfer_notification = 0x7362d09c;
  static internal_transfer = 0x178d4519;
  static excesses = 0xd53276db;
  static burn = 0x595f07bc;
  static burn_notification = 0x7bdd97de;
  static provide_wallet_address = 0x2c76b973;
  static take_wallet_address = 0xd1735400;
  static mint = 21;
  static change_admin = 3;
  static change_content = 4;
}
class Errors {
  static invalid_op = (/* unused pure expression or super */ null && (709));
  static not_admin = (/* unused pure expression or super */ null && (73));
  static unouthorized_burn = (/* unused pure expression or super */ null && (74));
  static discovery_fee_not_matched = (/* unused pure expression or super */ null && (75));
  static wrong_op = (/* unused pure expression or super */ null && (0xffff));
  static not_owner = (/* unused pure expression or super */ null && (705));
  static not_enough_ton = (/* unused pure expression or super */ null && (709));
  static not_enough_gas = (/* unused pure expression or super */ null && (707));
  static not_valid_wallet = (/* unused pure expression or super */ null && (707));
  static wrong_workchain = (/* unused pure expression or super */ null && (333));
  static balance_error = (/* unused pure expression or super */ null && (706));
}
;// ./src/api/chains/ton/contracts/JettonMaster.ts


function jettonMinterConfigToCell(config) {
  return (0,dist.beginCell)().storeCoins(0).storeAddress(config.admin).storeRef(config.content).storeRef(config.wallet_code).endCell();
}
function jettonContentToCell(content) {
  return beginCell().storeUint(content.type, 8).storeStringTail(content.uri) // Snake logic under the hood
  .endCell();
}
class JettonMinter {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new JettonMinter(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = jettonMinterConfigToCell(config);
    const init = {
      code,
      data
    };
    return new JettonMinter((0,dist.contractAddress)(workchain, init), init);
  }
  async sendDeploy(provider, via, value) {
    await provider.internal(via, {
      value,
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: (0,dist.beginCell)().endCell()
    });
  }
  static jettonInternalTransfer(jetton_amount, forward_ton_amount, response_addr) {
    let query_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return (0,dist.beginCell)().storeUint(Op.internal_transfer, 32).storeUint(query_id, 64).storeCoins(jetton_amount).storeAddress(undefined).storeAddress(response_addr).storeCoins(forward_ton_amount).storeBit(false).endCell();
  }
  static mintMessage(from, to, jetton_amount, forward_ton_amount, total_ton_amount) {
    let query_id = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    const mintMsg = (0,dist.beginCell)().storeUint(Op.internal_transfer, 32).storeUint(0, 64).storeCoins(jetton_amount).storeAddress(undefined).storeAddress(from) // Response addr
    .storeCoins(forward_ton_amount).storeMaybeRef(undefined).endCell();
    return (0,dist.beginCell)().storeUint(Op.mint, 32).storeUint(query_id, 64) // op, queryId
    .storeAddress(to).storeCoins(total_ton_amount).storeCoins(jetton_amount).storeRef(mintMsg).endCell();
  }
  async sendMint(provider, via, to, jetton_amount, forward_ton_amount, total_ton_amount) {
    if (total_ton_amount <= forward_ton_amount) {
      throw new Error('Total ton amount should be > forward amount');
    }
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.mintMessage(this.address, to, jetton_amount, forward_ton_amount, total_ton_amount),
      value: total_ton_amount + (0,dist.toNano)('0.015')
    });
  }

  /* provide_wallet_address#2c76b973 query_id:uint64 owner_address:MsgAddress include_address:Bool = InternalMsgBody;
  */
  static discoveryMessage(owner, include_address) {
    return (0,dist.beginCell)().storeUint(0x2c76b973, 32).storeUint(0, 64) // op, queryId
    .storeAddress(owner).storeBit(include_address).endCell();
  }
  async sendDiscovery(provider, via, owner, include_address) {
    let value = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : (0,dist.toNano)('0.1');
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.discoveryMessage(owner, include_address),
      value
    });
  }
  static changeAdminMessage(newOwner) {
    return (0,dist.beginCell)().storeUint(Op.change_admin, 32).storeUint(0, 64) // op, queryId
    .storeAddress(newOwner).endCell();
  }
  async sendChangeAdmin(provider, via, newOwner) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.changeAdminMessage(newOwner),
      value: (0,dist.toNano)('0.05')
    });
  }
  static changeContentMessage(content) {
    return (0,dist.beginCell)().storeUint(Op.change_content, 32).storeUint(0, 64) // op, queryId
    .storeRef(content).endCell();
  }
  async sendChangeContent(provider, via, content) {
    await provider.internal(via, {
      sendMode: dist.SendMode.PAY_GAS_SEPARATELY,
      body: JettonMinter.changeContentMessage(content),
      value: (0,dist.toNano)('0.05')
    });
  }
  async getWalletAddress(provider, owner) {
    const res = await provider.get('get_wallet_address', [{
      type: 'slice',
      cell: (0,dist.beginCell)().storeAddress(owner).endCell()
    }]);
    return res.stack.readAddress();
  }
  async getJettonData(provider) {
    const res = await provider.get('get_jetton_data', []);
    const totalSupply = res.stack.readBigNumber();
    const mintable = res.stack.readBoolean();
    const adminAddress = res.stack.readCellOpt();
    const content = res.stack.readCell();
    const walletCode = res.stack.readCell();
    return {
      totalSupply,
      mintable,
      adminAddress,
      content,
      walletCode
    };
  }
  async getTotalSupply(provider) {
    const res = await this.getJettonData(provider);
    return res.totalSupply;
  }
  async getAdminAddress(provider) {
    const res = await this.getJettonData(provider);
    return res.adminAddress;
  }
  async getContent(provider) {
    const res = await this.getJettonData(provider);
    return res.content;
  }
}
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonStaking/imports/constants.ts
var constants = __webpack_require__(61995);
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonStaking/StakeWallet.ts
var StakeWallet = __webpack_require__(84752);
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonStaking/StakingPool.ts
var StakingPool = __webpack_require__(86972);
// EXTERNAL MODULE: ./src/api/chains/ton/contracts/JettonWallet.ts
var JettonWallet = __webpack_require__(67132);
// EXTERNAL MODULE: ./src/api/common/utils.ts
var utils = __webpack_require__(60341);
// EXTERNAL MODULE: ./src/api/environment.ts
var environment = __webpack_require__(68249);
// EXTERNAL MODULE: ./src/api/chains/ton/constants.ts
var ton_constants = __webpack_require__(3476);
// EXTERNAL MODULE: ./src/api/chains/ton/util/index.ts
var util = __webpack_require__(41758);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 37 modules
var axios = __webpack_require__(61880);
// EXTERNAL MODULE: ./node_modules/@ton/ton/dist/client/TonClient.js
var client_TonClient = __webpack_require__(98737);
// EXTERNAL MODULE: ./node_modules/axios/lib/core/buildFullPath.js + 2 modules
var buildFullPath = __webpack_require__(7229);
// EXTERNAL MODULE: ./node_modules/axios/lib/core/settle.js
var settle = __webpack_require__(63853);
// EXTERNAL MODULE: ./node_modules/axios/lib/helpers/buildURL.js
var buildURL = __webpack_require__(93967);
// EXTERNAL MODULE: ./node_modules/axios/lib/utils.js
var lib_utils = __webpack_require__(17275);
;// ./src/lib/axios-fetch-adapter/index.js





const {
  isFormData,
  isStandardBrowserEnv,
  isUndefined
} = lib_utils/* default */.A;

/**
 * - Create a request object
 * - Get response body
 * - Check if timeout
 */
async function fetchAdapter(config) {
  const request = createRequest(config);
  const promiseChain = [getResponse(request, config)];
  if (config.timeout && config.timeout > 0) {
    promiseChain.push(new Promise(res => {
      setTimeout(() => {
        const message = config.timeoutErrorMessage ? config.timeoutErrorMessage : `timeout of ${config.timeout}ms exceeded`;
        res(createError(message, config, 'ECONNABORTED', request));
      }, config.timeout);
    }));
  }
  const data = await Promise.race(promiseChain);
  return new Promise((resolve, reject) => {
    if (data instanceof Error) {
      reject(data);
    } else {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      Object.prototype.toString.call(config.settle) === '[object Function]' ? config.settle(resolve, reject, data) : (0,settle/* default */.A)(resolve, reject, data);
    }
  });
}

/**
 * Fetch API stage two is to get response body. This funtion tries to retrieve
 * response body based on response's type
 */
async function getResponse(request, config) {
  let stageOne;
  try {
    stageOne = await fetch(request);
  } catch (e) {
    return createError('Network Error', config, 'ERR_NETWORK', request);
  }
  const response = {
    ok: stageOne.ok,
    status: stageOne.status,
    statusText: stageOne.statusText,
    headers: new Headers(stageOne.headers),
    // Make a copy of headers
    config,
    request
  };
  if (stageOne.status >= 200 && stageOne.status !== 204) {
    switch (config.responseType) {
      case 'arraybuffer':
        response.data = await stageOne.arrayBuffer();
        break;
      case 'blob':
        response.data = await stageOne.blob();
        break;
      case 'json':
        response.data = await stageOne.json();
        break;
      case 'formData':
        response.data = await stageOne.formData();
        break;
      default:
        response.data = await stageOne.text();
        break;
    }
  }
  return response;
}

/**
 * This function will create a Request object based on configuration's axios
 */
function createRequest(config) {
  const headers = new Headers(config.headers);

  // HTTP basic authentication
  if (config.auth) {
    const username = config.auth.username || '';
    const password = config.auth.password ? decodeURI(encodeURIComponent(config.auth.password)) : '';
    headers.set('Authorization', `Basic ${btoa(`${username}:${password}`)}`);
  }
  const method = config.method.toUpperCase();
  const options = {
    headers,
    method
  };
  if (method !== 'GET' && method !== 'HEAD') {
    options.body = config.data;

    // In these cases the browser will automatically set the correct Content-Type,
    // but only if that header hasn't been set yet. So that's why we're deleting it.
    if (isFormData(options.body) && isStandardBrowserEnv()) {
      headers.delete('Content-Type');
    }
  }
  if (config.mode) {
    options.mode = config.mode;
  }
  if (config.cache) {
    options.cache = config.cache;
  }
  if (config.integrity) {
    options.integrity = config.integrity;
  }
  if (config.redirect) {
    options.redirect = config.redirect;
  }
  if (config.referrer) {
    options.referrer = config.referrer;
  }
  // This config is similar to XHR’s withCredentials flag, but with three available values instead of two.
  // So if withCredentials is not set, default value 'same-origin' will be used
  if (!isUndefined(config.withCredentials)) {
    options.credentials = config.withCredentials ? 'include' : 'omit';
  }
  const fullPath = (0,buildFullPath/* default */.A)(config.baseURL, config.url);
  const url = (0,buildURL/* default */.A)(fullPath, config.params, config.paramsSerializer);

  // Expected browser to throw error if there is any wrong configuration value
  return new Request(url, options);
}

/**
 * Note:
 *
 *   From version >= 0.27.0, createError function is replaced by AxiosError class.
 *   So I copy the old createError function here for backward compatible.
 *
 *
 *
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
function createError(message, config, code, request, response) {
  if (axios/* default */.A.AxiosError && typeof axios/* default */.A.AxiosError === 'function') {
    return new axios/* default */.A.AxiosError(message, axios/* default */.A.AxiosError[code], config, request, response);
  }
  const error = new Error(message);
  return enhanceError(error, config, code, request, response);
}

/**
 *
 * Note:
 *
 *   This function is for backward compatible.
 *
 *
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  error.isAxiosError = true;
  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code,
      // eslint-disable-next-line no-null/no-null
      status: this.response && this.response.status ? this.response.status : null
    };
  };
  return error;
}
// EXTERNAL MODULE: ./src/lib/axios-retry/index.js
var axios_retry = __webpack_require__(91179);
var axios_retry_default = /*#__PURE__*/__webpack_require__.n(axios_retry);
// EXTERNAL MODULE: ./src/util/fetch.ts
var util_fetch = __webpack_require__(45232);
;// ./src/api/chains/ton/util/TonClient.ts







axios_retry_default()(axios/* default */.A, {
  retries: config/* DEFAULT_RETRIES */.TUC,
  shouldResetTimeout: true,
  retryDelay: retryCount => {
    return retryCount * config/* DEFAULT_ERROR_PAUSE */.WRE;
  },
  onRetry: (retryNumber, error, requestConfig) => {
    var _error$response;
    (0,logs/* logDebug */.MD)(`Retry request #${retryNumber}:`, requestConfig.url, (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status);
  }
});
axios/* default */.A.defaults.adapter = fetchAdapter;
class TonClient extends client_TonClient/* TonClient */.x {
  initParameters;
  constructor(parameters) {
    super(parameters);
    this.initParameters = parameters;
  }
  getAddressInfo(address) {
    return this.callRpc('getAddressInformation', {
      address
    });
  }
  callRpc(method, params) {
    return this.sendRequest(this.parameters.endpoint, {
      id: 1,
      jsonrpc: '2.0',
      method,
      params
    });
  }
  async sendFile(src) {
    const boc = typeof src === 'object' ? src.toString('base64') : src;
    await this.callRpc('sendBocReturnHashNoError', {
      boc
    });
  }
  async sendRequest(apiUrl, request) {
    const method = request.method;
    const headers = {
      ...this.initParameters.headers,
      'Content-Type': 'application/json'
    };
    if (this.parameters.apiKey) {
      headers['X-API-Key'] = this.parameters.apiKey;
    }
    const body = JSON.stringify(request);
    const response = await (0,util_fetch/* fetchWithRetry */.J5)(apiUrl, {
      method: 'POST',
      body,
      headers
    }, {
      shouldSkipRetryFn: (message, statusCode) => isNotTemporaryError(method, message, statusCode)
    });
    const data = await response.json();
    return data.result;
  }
}
function isNotTemporaryError(method, message, statusCode) {
  return Boolean(statusCode === 422 || (message === null || message === void 0 ? void 0 : message.match(/(exit code|exitcode=|duplicate message)/)));
}
;// ./src/api/chains/ton/util/tonCore.ts
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];


























const TON_MAX_COMMENT_BYTES = 127;
let clientByNetwork;
const walletClassMap = {
  simpleR1: WalletContractV1R1/* WalletContractV1R1 */.m,
  simpleR2: WalletContractV1R2/* WalletContractV1R2 */.t,
  simpleR3: WalletContractV1R3/* WalletContractV1R3 */.A,
  v2R1: WalletContractV2R1/* WalletContractV2R1 */.H,
  v2R2: WalletContractV2R2/* WalletContractV2R2 */.a,
  v3R1: WalletContractV3R1/* WalletContractV3R1 */.G,
  v3R2: WalletContractV3R2/* WalletContractV3R2 */.N,
  v4R2: WalletContractV4/* WalletContractV4 */.U,
  W5: WalletContractV5R1.WalletContractV5R1
};
function getTonClient() {
  let network = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'mainnet';
  if (!clientByNetwork) {
    const {
      apiHeaders,
      toncenterMainnetKey,
      toncenterTestnetKey
    } = (0,environment/* getEnvironment */.u)();
    clientByNetwork = {
      mainnet: new TonClient({
        endpoint: `${config/* TONCENTER_MAINNET_URL */._J8}/api/v2/jsonRPC`,
        timeout: config/* DEFAULT_TIMEOUT */.cSq,
        apiKey: toncenterMainnetKey,
        headers: apiHeaders
      }),
      testnet: new TonClient({
        endpoint: `${config/* TONCENTER_TESTNET_URL */.pyR}/api/v2/jsonRPC`,
        timeout: config/* DEFAULT_TIMEOUT */.cSq,
        apiKey: toncenterTestnetKey,
        headers: apiHeaders
      })
    };
  }
  return clientByNetwork[network];
}
const resolveTokenWalletAddress = (0,withCacheAsync/* default */.A)(async (network, address, tokenAddress) => {
  const minter = getTonClient(network).open(new JettonMinter(dist.Address.parse(tokenAddress)));
  const walletAddress = await minter.getWalletAddress(dist.Address.parse(address));
  return toBase64Address(walletAddress, true, network);
});
const resolveTokenAddress = (0,withCacheAsync/* default */.A)(async (network, tokenWalletAddress) => {
  const tokenWallet = getTonClient(network).open(new JettonWallet/* JettonWallet */.K(dist.Address.parse(tokenWalletAddress)));
  const data = await tokenWallet.getWalletData();
  return toBase64Address(data.minter, true, network);
});
const getWalletPublicKey = (0,withCacheAsync/* default */.A)(async (network, address) => {
  const res = await getTonClient(network).runMethodWithError(dist.Address.parse(address), 'get_public_key');
  if (res.exit_code !== 0) {
    return undefined;
  }
  const bigintKey = res.stack.readBigNumber();
  const hex = bigintKey.toString(16).padStart(64, '0');
  return (0,utils/* hexToBytes */.aT)(hex);
});
const getJettonPoolStakeWallet = (0,withCacheAsync/* default */.A)(async (network, poolAddress, period, address) => {
  const tonClient = getTonClient(network);
  const pool = tonClient.open(StakingPool/* StakingPool */.Ml.createFromAddress(dist.Address.parse(poolAddress)));
  const walletAddress = await pool.getWalletAddress(dist.Address.parse(address), period);
  return tonClient.open(StakeWallet/* StakeWallet */.sH.createFromAddress(walletAddress));
});
function getJettonMinterData(network, address) {
  const contract = getTonClient(network).open(new JettonMinter(dist.Address.parse(address)));
  return contract.getJettonData();
}
function oneCellFromBoc(bytes) {
  return dist.Cell.fromBoc(Buffer.from(bytes));
}
function toBase64Address(address) {
  let isBounceable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ton_constants/* DEFAULT_IS_BOUNCEABLE */.e2;
  let network = arguments.length > 2 ? arguments[2] : undefined;
  if (typeof address === 'string') {
    address = dist.Address.parse(address);
  }
  return address.toString({
    urlSafe: true,
    bounceable: isBounceable,
    testOnly: network === 'testnet'
  });
}
function toRawAddress(address) {
  if (typeof address === 'string') {
    address = dist.Address.parse(address);
  }
  return address.toRawString();
}
function buildTokenTransferBody(params) {
  const {
    queryId,
    tokenAmount,
    toAddress,
    responseAddress,
    forwardAmount,
    customPayload
  } = params;
  let forwardPayload = params.forwardPayload;
  let builder = new dist.Builder().storeUint(ton_constants/* JettonOpCode */.LY.Transfer, 32).storeUint(queryId ?? (0,util/* generateQueryId */.N)(), 64).storeCoins(tokenAmount).storeAddress(dist.Address.parse(toAddress)).storeAddress(dist.Address.parse(responseAddress)).storeMaybeRef(customPayload).storeCoins(forwardAmount ?? 0n);
  if (forwardPayload instanceof Uint8Array) {
    const freeBytes = Math.round(builder.availableBits / 8);
    forwardPayload = packBytesAsSnake(forwardPayload, freeBytes);
  }
  if (!forwardPayload) {
    builder.storeBit(false);
  } else if (typeof forwardPayload === 'string') {
    builder = builder.storeBit(false).storeUint(0, 32).storeBuffer(Buffer.from(forwardPayload));
  } else if (forwardPayload instanceof Uint8Array) {
    builder = builder.storeBit(false).storeBuffer(Buffer.from(forwardPayload));
  } else {
    builder = builder.storeBit(true).storeRef(forwardPayload);
  }
  return builder.endCell();
}
function parseBase64(base64) {
  try {
    return dist.Cell.fromBase64(base64);
  } catch (err) {
    (0,logs/* logDebugError */.SJ)('parseBase64', err);
    return Uint8Array.from(Buffer.from(base64, 'base64'));
  }
}
function commentToBytes(comment) {
  const buffer = Buffer.from(comment);
  const bytes = new Uint8Array(buffer.length + 4);
  const startBuffer = Buffer.alloc(4);
  startBuffer.writeUInt32BE(ton_constants/* OpCode */.$G.Comment);
  bytes.set(startBuffer, 0);
  bytes.set(buffer, 4);
  return bytes;
}
function packBytesAsSnake(bytes) {
  let maxBytes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : TON_MAX_COMMENT_BYTES;
  const buffer = Buffer.from(bytes);
  if (buffer.length <= maxBytes) {
    return bytes;
  }
  return packBytesAsSnakeCell(bytes);
}
function packBytesAsSnakeCell(bytes) {
  const bytesPerCell = TON_MAX_COMMENT_BYTES;
  const cellCount = Math.ceil(bytes.length / bytesPerCell);
  let headCell;
  for (let i = cellCount - 1; i >= 0; i--) {
    const cellOffset = i * bytesPerCell;
    const cellLength = Math.min(bytesPerCell, bytes.length - cellOffset);
    const cellBuffer = Buffer.from(bytes.buffer, bytes.byteOffset + cellOffset, cellLength); // This creates a buffer that references the input bytes instead of copying them

    const nextHeadCell = new dist.Builder().storeBuffer(cellBuffer);
    if (headCell) {
      nextHeadCell.storeRef(headCell);
    }
    headCell = nextHeadCell.endCell();
  }
  return headCell ?? dist.Cell.EMPTY;
}
function packBytesAsSnakeForEncryptedData(data) {
  const ROOT_BUILDER_BYTES = 39;
  const MAX_CELLS_AMOUNT = 16;
  if (data.length > ROOT_BUILDER_BYTES + MAX_CELLS_AMOUNT * TON_MAX_COMMENT_BYTES) {
    throw new Error('Input text is too long');
  }
  return new dist.Builder().storeBuffer(Buffer.from(data.subarray(0, ROOT_BUILDER_BYTES))).storeRef(packBytesAsSnakeCell(data.subarray(ROOT_BUILDER_BYTES))).endCell();
}
function buildLiquidStakingDepositBody(queryId) {
  return new dist.Builder().storeUint(ton_constants/* LiquidStakingOpCode */.Ad.Deposit, 32).storeUint(queryId || 0, 64).asCell();
}
function buildLiquidStakingWithdrawBody(options) {
  const {
    queryId,
    amount,
    responseAddress,
    waitTillRoundEnd,
    fillOrKill
  } = options;
  const customPayload = buildLiquidStakingWithdrawCustomPayload(waitTillRoundEnd, fillOrKill);
  return new dist.Builder().storeUint(ton_constants/* JettonOpCode */.LY.Burn, 32).storeUint(queryId ?? 0, 64).storeCoins(amount).storeAddress(dist.Address.parse(responseAddress)).storeBit(1).storeRef(customPayload).asCell();
}
function buildLiquidStakingWithdrawCustomPayload(waitTillRoundEnd, fillOrKill) {
  return new dist.Builder().storeUint(Number(waitTillRoundEnd), 1).storeUint(Number(fillOrKill), 1).asCell();
}
function getTokenBalance(network, walletAddress) {
  const tokenWallet = getTonClient(network).open(new JettonWallet/* JettonWallet */.K(dist.Address.parse(walletAddress)));
  return tokenWallet.getJettonBalance();
}
function parseAddress(address) {
  try {
    if (dist.Address.isRaw(address)) {
      return {
        address: dist.Address.parseRaw(address),
        isRaw: true,
        isValid: true
      };
    } else if (dist.Address.isFriendly(address)) {
      return {
        ...dist.Address.parseFriendly(address),
        isUserFriendly: true,
        isValid: true
      };
    }
  } catch (err) {
    // Do nothing
  }
  return {
    isValid: false
  };
}
function getIsRawAddress(address) {
  return Boolean(parseAddress(address).isRaw);
}
async function getDnsItemDomain(network, address) {
  if (typeof address === 'string') address = dist.Address.parse(address);
  const contract = getTonClient(network).open(new DnsItem/* DnsItem */.n(address));
  const nftData = await contract.getNftData();
  const collectionAddress = toBase64Address(nftData.collectionAddress, true);
  const zone = (0,dns/* getDnsZoneByCollection */.$7)(collectionAddress);
  const base = zone !== null && zone !== void 0 && zone.isTelemint ? await contract.getTelemintDomain() : await contract.getDomain();
  return `${base}.${zone === null || zone === void 0 ? void 0 : zone.suffixes[0]}`;
}
function buildJettonUnstakePayload(jettonsToUnstake, forceUnstake, queryId) {
  return (0,dist.beginCell)().storeUint(constants/* JettonStakingOpCodes */.Hx.UNSTAKE_JETTONS, 32).storeUint(queryId ?? 0, 64).storeCoins(jettonsToUnstake).storeBit(forceUnstake ?? false).endCell();
}
function buildJettonClaimPayload(poolWallets, queryId) {
  const rewardsToClaim = dist.Dictionary.empty(dist.Dictionary.Keys.Address(), dist.Dictionary.Values.Bool());
  for (const poolWallet of poolWallets) {
    rewardsToClaim.set(dist.Address.parse(poolWallet), true);
  }
  return (0,dist.beginCell)().storeUint(constants/* JettonStakingOpCodes */.Hx.CLAIM_REWARDS, 32).storeUint(queryId ?? 0, 64).storeDict(rewardsToClaim, dist.Dictionary.Keys.Address(), dist.Dictionary.Values.Bool()).endCell();
}

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
function unpackDicts(obj) {
  if (!isSimpleObject(obj)) {
    return obj;
  }
  return (0,iteratees/* mapValues */.LG)(obj, value => {
    if (value instanceof dist.Dictionary) {
      return unpackDicts((0,iteratees/* fromKeyValueArrays */.rs)(value.keys(), value.values()));
    }
    if (isSimpleObject(value)) {
      return unpackDicts(value);
    }
    return value;
  });
}
function isSimpleObject(obj) {
  // eslint-disable-next-line no-null/no-null
  return obj !== null && typeof obj === 'object' && Object.getPrototypeOf(obj) === Object.prototype;
}
function getOurFeePayload() {
  return new dist.Builder().storeUint(ton_constants/* OpCode */.$G.OurFee, 32).endCell();
}
function parseStateInitCell(stateInit) {
  return stateInit && (0,dist.loadStateInit)(stateInit.asSlice());
}
function isSeqnoMismatchError(error) {
  return error.match(/exitcode=(33|133)\D/);
}
function isExpiredTransactionError(error) {
  return error.match(/exitcode=(35|136)\D/);
}

/***/ }),

/***/ 91179:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.DEFAULT_OPTIONS = exports.exponentialDelay = exports.isNetworkOrIdempotentRequestError = exports.isIdempotentRequestError = exports.isSafeRequestError = exports.isRetryableError = exports.isNetworkError = exports.namespace = void 0;
const is_retry_allowed_1 = __importDefault(__webpack_require__(51936));
exports.namespace = 'axios-retry';
function isNetworkError(error) {
  const CODE_EXCLUDE_LIST = ['ERR_CANCELED', 'ECONNABORTED'];
  if (error.response) {
    return false;
  }
  if (!error.code) {
    return false;
  }
  // Prevents retrying timed out & cancelled requests
  if (CODE_EXCLUDE_LIST.includes(error.code)) {
    return false;
  }
  // Prevents retrying unsafe errors
  return (0, is_retry_allowed_1.default)(error);
}
exports.isNetworkError = isNetworkError;
const SAFE_HTTP_METHODS = ['get', 'head', 'options'];
const IDEMPOTENT_HTTP_METHODS = SAFE_HTTP_METHODS.concat(['put', 'delete']);
function isRetryableError(error) {
  return error.code !== 'ECONNABORTED' && (!error.response || error.response.status >= 500 && error.response.status <= 599);
}
exports.isRetryableError = isRetryableError;
function isSafeRequestError(error) {
  var _a;
  if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
    // Cannot determine if the request can be retried
    return false;
  }
  return isRetryableError(error) && SAFE_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isSafeRequestError = isSafeRequestError;
function isIdempotentRequestError(error) {
  var _a;
  if (!((_a = error.config) === null || _a === void 0 ? void 0 : _a.method)) {
    // Cannot determine if the request can be retried
    return false;
  }
  return isRetryableError(error) && IDEMPOTENT_HTTP_METHODS.indexOf(error.config.method) !== -1;
}
exports.isIdempotentRequestError = isIdempotentRequestError;
function isNetworkOrIdempotentRequestError(error) {
  return isNetworkError(error) || isIdempotentRequestError(error);
}
exports.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
function noDelay() {
  return 0;
}
function exponentialDelay() {
  let retryNumber = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  let _error = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  let delayFactor = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 100;
  const delay = Math.pow(2, retryNumber) * delayFactor;
  const randomSum = delay * 0.2 * Math.random(); // 0-20% of the delay
  return delay + randomSum;
}
exports.exponentialDelay = exponentialDelay;
exports.DEFAULT_OPTIONS = {
  retries: 3,
  retryCondition: isNetworkOrIdempotentRequestError,
  retryDelay: noDelay,
  shouldResetTimeout: false,
  onRetry: () => {}
};
function getRequestOptions(config, defaultOptions) {
  return Object.assign(Object.assign(Object.assign({}, exports.DEFAULT_OPTIONS), defaultOptions), config[exports.namespace]);
}
function setCurrentState(config, defaultOptions) {
  const currentState = getRequestOptions(config, defaultOptions || {});
  currentState.retryCount = currentState.retryCount || 0;
  currentState.lastRequestTime = currentState.lastRequestTime || Date.now();
  config[exports.namespace] = currentState;
  return currentState;
}
function fixConfig(axiosInstance, config) {
  // @ts-ignore
  if (axiosInstance.defaults.agent === config.agent) {
    // @ts-ignore
    delete config.agent;
  }
  if (axiosInstance.defaults.httpAgent === config.httpAgent) {
    delete config.httpAgent;
  }
  if (axiosInstance.defaults.httpsAgent === config.httpsAgent) {
    delete config.httpsAgent;
  }
}
function shouldRetry(currentState, error) {
  return __awaiter(this, void 0, void 0, function* () {
    const {
      retries,
      retryCondition
    } = currentState;
    const shouldRetryOrPromise = (currentState.retryCount || 0) < retries && retryCondition(error);
    // This could be a promise
    if (typeof shouldRetryOrPromise === 'object') {
      try {
        const shouldRetryPromiseResult = yield shouldRetryOrPromise;
        // keep return true unless shouldRetryPromiseResult return false for compatibility
        return shouldRetryPromiseResult !== false;
      } catch (_err) {
        return false;
      }
    }
    return shouldRetryOrPromise;
  });
}
const axiosRetry = (axiosInstance, defaultOptions) => {
  const requestInterceptorId = axiosInstance.interceptors.request.use(config => {
    setCurrentState(config, defaultOptions);
    return config;
  });
  const responseInterceptorId = axiosInstance.interceptors.response.use(null, error => __awaiter(void 0, void 0, void 0, function* () {
    const {
      config
    } = error;
    // If we have no information to retry the request
    if (!config) {
      return Promise.reject(error);
    }
    const currentState = setCurrentState(config, defaultOptions);
    if (yield shouldRetry(currentState, error)) {
      currentState.retryCount += 1;
      const {
        retryDelay,
        shouldResetTimeout,
        onRetry
      } = currentState;
      const delay = retryDelay(currentState.retryCount, error);
      // Axios fails merging this configuration to the default configuration because it has an issue
      // with circular structures: https://github.com/mzabriskie/axios/issues/370
      fixConfig(axiosInstance, config);
      if (!shouldResetTimeout && config.timeout && currentState.lastRequestTime) {
        const lastRequestDuration = Date.now() - currentState.lastRequestTime;
        const timeout = config.timeout - lastRequestDuration - delay;
        if (timeout <= 0) {
          return Promise.reject(error);
        }
        config.timeout = timeout;
      }
      config.transformRequest = [data => data];
      yield onRetry(currentState.retryCount, error, config);
      return new Promise(resolve => {
        setTimeout(() => resolve(axiosInstance(config)), delay);
      });
    }
    return Promise.reject(error);
  }));
  return {
    requestInterceptorId,
    responseInterceptorId
  };
};
// Compatibility with CommonJS
axiosRetry.isNetworkError = isNetworkError;
axiosRetry.isSafeRequestError = isSafeRequestError;
axiosRetry.isIdempotentRequestError = isIdempotentRequestError;
axiosRetry.isNetworkOrIdempotentRequestError = isNetworkOrIdempotentRequestError;
axiosRetry.exponentialDelay = exponentialDelay;
axiosRetry.isRetryableError = isRetryableError;
exports["default"] = axiosRetry;

/***/ }),

/***/ 96773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ DnsItem)
/* harmony export */ });
/* unused harmony export dnsItemConfigToCell */
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1307);
/* harmony import */ var _ton_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ton_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_dns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24887);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3476);



function dnsItemConfigToCell(config) {
  return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().endCell();
}
class DnsItem {
  constructor(address, init) {
    this.address = address;
    this.init = init;
  }
  static createFromAddress(address) {
    return new DnsItem(address);
  }
  static createFromConfig(config, code) {
    let workchain = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    const data = dnsItemConfigToCell(config);
    const init = {
      code,
      data
    };
    return new DnsItem((0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.contractAddress)(workchain, init), init);
  }
  async getDomain(provider) {
    const res = await provider.get('get_domain', []);
    const domain = res.stack.readString();
    return domain;
  }
  async getTelemintDomain(provider) {
    const res = await provider.get('get_domain_full', []);
    const domain = res.stack.readString();
    const parts = domain.replace(/\\u0000/g, '.').replace(/\.$/, '').split('.');
    parts.reverse();
    return parts.join('.');
  }
  async getNftData(provider) {
    const res = await provider.get('get_nft_data', []);
    const index = res.stack.readBigNumber();
    const collectionAddress = res.stack.readAddress();
    const owner = res.stack.readAddressOpt();
    return {
      index,
      collectionAddress,
      owner
    };
  }
  async getLastFillUpTime(provider) {
    const result = await provider.get('get_last_fill_up_time', []);
    return result.stack.readBigNumber();
  }
  static buildFillUpMessage(queryId) {
    return DnsItem.buildDeleteDnsRecordMessage(queryId);
  }
  static buildDeleteDnsRecordMessage(queryId, category) {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(_constants__WEBPACK_IMPORTED_MODULE_2__/* .DnsOpCode */ .kc.ChangeRecord, 32).storeUint(queryId ?? 0n, 64).storeUint((0,_util_dns__WEBPACK_IMPORTED_MODULE_1__/* .dnsCategoryToBigInt */ ["in"])(category), 256).endCell();
  }
  static buildChangeDnsWalletMessage(address, queryId) {
    return (0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(_constants__WEBPACK_IMPORTED_MODULE_2__/* .DnsOpCode */ .kc.ChangeRecord, 32).storeUint(queryId ?? 0n, 64).storeUint((0,_util_dns__WEBPACK_IMPORTED_MODULE_1__/* .dnsCategoryToBigInt */ ["in"])(_constants__WEBPACK_IMPORTED_MODULE_2__/* .DnsCategory */ .kJ.Wallet), 256).storeRef((0,_ton_core__WEBPACK_IMPORTED_MODULE_0__.beginCell)().storeUint(0x9fd3, 16).storeAddress(_ton_core__WEBPACK_IMPORTED_MODULE_0__.Address.parse(address)).storeUint(0, 8).endCell()).endCell();
  }
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, [800,885], () => (__webpack_require__(9202)))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + {"76":"e64e6cda01c8360f9f93","800":"09881729ade743d90448","885":"432b868ff25c6c3a0feb","909":"a7bb8f6eb0374ee347af"}[chunkId] + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			941: 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e(800),
/******/ 				__webpack_require__.e(885)
/******/ 			]).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=941.3a70f0eae0816cd636ea.js.map