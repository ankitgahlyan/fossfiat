(self["webpackChunkmytonwallet"] = self["webpackChunkmytonwallet"] || []).push([[800],{

/***/ 464:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransactionActionPhase = exports.loadTransactionActionPhase = void 0;
const AccountStatusChange_1 = __webpack_require__(62312);
const StorageUsedShort_1 = __webpack_require__(51143);
function loadTransactionActionPhase(slice) {
    let success = slice.loadBit();
    let valid = slice.loadBit();
    let noFunds = slice.loadBit();
    let statusChange = (0, AccountStatusChange_1.loadAccountStatusChange)(slice);
    let totalFwdFees = slice.loadBit() ? slice.loadCoins() : undefined;
    let totalActionFees = slice.loadBit() ? slice.loadCoins() : undefined;
    let resultCode = slice.loadInt(32);
    let resultArg = slice.loadBit() ? slice.loadInt(32) : undefined;
    let totalActions = slice.loadUint(16);
    let specActions = slice.loadUint(16);
    let skippedActions = slice.loadUint(16);
    let messagesCreated = slice.loadUint(16);
    let actionListHash = slice.loadUintBig(256);
    let totalMessageSize = (0, StorageUsedShort_1.loadStorageUsedShort)(slice);
    return {
        success,
        valid,
        noFunds,
        statusChange,
        totalFwdFees,
        totalActionFees,
        resultCode,
        resultArg,
        totalActions,
        specActions,
        skippedActions,
        messagesCreated,
        actionListHash,
        totalMessageSize
    };
}
exports.loadTransactionActionPhase = loadTransactionActionPhase;
function storeTransactionActionPhase(src) {
    return (builder) => {
        builder.storeBit(src.success);
        builder.storeBit(src.valid);
        builder.storeBit(src.noFunds);
        builder.store((0, AccountStatusChange_1.storeAccountStatusChange)(src.statusChange));
        builder.storeMaybeCoins(src.totalFwdFees);
        builder.storeMaybeCoins(src.totalActionFees);
        builder.storeInt(src.resultCode, 32);
        builder.storeMaybeInt(src.resultArg, 32);
        builder.storeUint(src.totalActions, 16);
        builder.storeUint(src.specActions, 16);
        builder.storeUint(src.skippedActions, 16);
        builder.storeUint(src.messagesCreated, 16);
        builder.storeUint(src.actionListHash, 256);
        builder.store((0, StorageUsedShort_1.storeStorageUsedShort)(src.totalMessageSize));
    };
}
exports.storeTransactionActionPhase = storeTransactionActionPhase;


/***/ }),

/***/ 1307:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeSignVerify = exports.safeSign = exports.getMethodId = exports.base32Encode = exports.base32Decode = exports.crc32c = exports.crc16 = exports.fromNano = exports.toNano = exports.ComputeError = exports.openContract = exports.TupleBuilder = exports.TupleReader = exports.serializeTuple = exports.parseTuple = exports.generateMerkleUpdate = exports.generateMerkleProofDirect = exports.generateMerkleProof = exports.exoticPruned = exports.exoticMerkleUpdate = exports.convertToMerkleProof = exports.exoticMerkleProof = exports.Dictionary = exports.Cell = exports.CellType = exports.Slice = exports.beginCell = exports.Builder = exports.BitBuilder = exports.BitReader = exports.BitString = exports.contractAddress = exports.ADNLAddress = exports.ExternalAddress = exports.address = exports.Address = void 0;
// Address
var Address_1 = __webpack_require__(3512);
Object.defineProperty(exports, "Address", ({ enumerable: true, get: function () { return Address_1.Address; } }));
Object.defineProperty(exports, "address", ({ enumerable: true, get: function () { return Address_1.address; } }));
var ExternalAddress_1 = __webpack_require__(71629);
Object.defineProperty(exports, "ExternalAddress", ({ enumerable: true, get: function () { return ExternalAddress_1.ExternalAddress; } }));
var ADNLAddress_1 = __webpack_require__(4061);
Object.defineProperty(exports, "ADNLAddress", ({ enumerable: true, get: function () { return ADNLAddress_1.ADNLAddress; } }));
var contractAddress_1 = __webpack_require__(88986);
Object.defineProperty(exports, "contractAddress", ({ enumerable: true, get: function () { return contractAddress_1.contractAddress; } }));
// BitString
var BitString_1 = __webpack_require__(62386);
Object.defineProperty(exports, "BitString", ({ enumerable: true, get: function () { return BitString_1.BitString; } }));
var BitReader_1 = __webpack_require__(53528);
Object.defineProperty(exports, "BitReader", ({ enumerable: true, get: function () { return BitReader_1.BitReader; } }));
var BitBuilder_1 = __webpack_require__(49924);
Object.defineProperty(exports, "BitBuilder", ({ enumerable: true, get: function () { return BitBuilder_1.BitBuilder; } }));
// Cell
var Builder_1 = __webpack_require__(65871);
Object.defineProperty(exports, "Builder", ({ enumerable: true, get: function () { return Builder_1.Builder; } }));
Object.defineProperty(exports, "beginCell", ({ enumerable: true, get: function () { return Builder_1.beginCell; } }));
var Slice_1 = __webpack_require__(56906);
Object.defineProperty(exports, "Slice", ({ enumerable: true, get: function () { return Slice_1.Slice; } }));
var CellType_1 = __webpack_require__(34654);
Object.defineProperty(exports, "CellType", ({ enumerable: true, get: function () { return CellType_1.CellType; } }));
var Cell_1 = __webpack_require__(66902);
Object.defineProperty(exports, "Cell", ({ enumerable: true, get: function () { return Cell_1.Cell; } }));
// Dict
var Dictionary_1 = __webpack_require__(97590);
Object.defineProperty(exports, "Dictionary", ({ enumerable: true, get: function () { return Dictionary_1.Dictionary; } }));
// Exotics
var exoticMerkleProof_1 = __webpack_require__(31459);
Object.defineProperty(exports, "exoticMerkleProof", ({ enumerable: true, get: function () { return exoticMerkleProof_1.exoticMerkleProof; } }));
Object.defineProperty(exports, "convertToMerkleProof", ({ enumerable: true, get: function () { return exoticMerkleProof_1.convertToMerkleProof; } }));
var exoticMerkleUpdate_1 = __webpack_require__(91408);
Object.defineProperty(exports, "exoticMerkleUpdate", ({ enumerable: true, get: function () { return exoticMerkleUpdate_1.exoticMerkleUpdate; } }));
var exoticPruned_1 = __webpack_require__(79499);
Object.defineProperty(exports, "exoticPruned", ({ enumerable: true, get: function () { return exoticPruned_1.exoticPruned; } }));
// Merkle trees
var generateMerkleProof_1 = __webpack_require__(78981);
Object.defineProperty(exports, "generateMerkleProof", ({ enumerable: true, get: function () { return generateMerkleProof_1.generateMerkleProof; } }));
Object.defineProperty(exports, "generateMerkleProofDirect", ({ enumerable: true, get: function () { return generateMerkleProof_1.generateMerkleProofDirect; } }));
var generateMerkleUpdate_1 = __webpack_require__(42230);
Object.defineProperty(exports, "generateMerkleUpdate", ({ enumerable: true, get: function () { return generateMerkleUpdate_1.generateMerkleUpdate; } }));
var tuple_1 = __webpack_require__(21640);
Object.defineProperty(exports, "parseTuple", ({ enumerable: true, get: function () { return tuple_1.parseTuple; } }));
Object.defineProperty(exports, "serializeTuple", ({ enumerable: true, get: function () { return tuple_1.serializeTuple; } }));
var reader_1 = __webpack_require__(21155);
Object.defineProperty(exports, "TupleReader", ({ enumerable: true, get: function () { return reader_1.TupleReader; } }));
var builder_1 = __webpack_require__(44117);
Object.defineProperty(exports, "TupleBuilder", ({ enumerable: true, get: function () { return builder_1.TupleBuilder; } }));
// Types
__exportStar(__webpack_require__(73814), exports);
var openContract_1 = __webpack_require__(84742);
Object.defineProperty(exports, "openContract", ({ enumerable: true, get: function () { return openContract_1.openContract; } }));
var ComputeError_1 = __webpack_require__(55121);
Object.defineProperty(exports, "ComputeError", ({ enumerable: true, get: function () { return ComputeError_1.ComputeError; } }));
// Utility
var convert_1 = __webpack_require__(97070);
Object.defineProperty(exports, "toNano", ({ enumerable: true, get: function () { return convert_1.toNano; } }));
Object.defineProperty(exports, "fromNano", ({ enumerable: true, get: function () { return convert_1.fromNano; } }));
var crc16_1 = __webpack_require__(92960);
Object.defineProperty(exports, "crc16", ({ enumerable: true, get: function () { return crc16_1.crc16; } }));
var crc32c_1 = __webpack_require__(29429);
Object.defineProperty(exports, "crc32c", ({ enumerable: true, get: function () { return crc32c_1.crc32c; } }));
var base32_1 = __webpack_require__(53721);
Object.defineProperty(exports, "base32Decode", ({ enumerable: true, get: function () { return base32_1.base32Decode; } }));
Object.defineProperty(exports, "base32Encode", ({ enumerable: true, get: function () { return base32_1.base32Encode; } }));
var getMethodId_1 = __webpack_require__(65149);
Object.defineProperty(exports, "getMethodId", ({ enumerable: true, get: function () { return getMethodId_1.getMethodId; } }));
// Crypto
var safeSign_1 = __webpack_require__(90109);
Object.defineProperty(exports, "safeSign", ({ enumerable: true, get: function () { return safeSign_1.safeSign; } }));
Object.defineProperty(exports, "safeSignVerify", ({ enumerable: true, get: function () { return safeSign_1.safeSignVerify; } }));


/***/ }),

/***/ 3512:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.address = exports.Address = void 0;
const symbol_inspect_1 = __importDefault(__webpack_require__(29107));
const crc16_1 = __webpack_require__(92960);
const bounceable_tag = 0x11;
const non_bounceable_tag = 0x51;
const test_flag = 0x80;
function parseFriendlyAddress(src) {
    if (typeof src === 'string' && !Address.isFriendly(src)) {
        throw new Error('Unknown address type');
    }
    const data = Buffer.isBuffer(src) ? src : Buffer.from(src, 'base64');
    // 1byte tag + 1byte workchain + 32 bytes hash + 2 byte crc
    if (data.length !== 36) {
        throw new Error('Unknown address type: byte length is not equal to 36');
    }
    // Prepare data
    const addr = data.subarray(0, 34);
    const crc = data.subarray(34, 36);
    const calcedCrc = (0, crc16_1.crc16)(addr);
    if (!(calcedCrc[0] === crc[0] && calcedCrc[1] === crc[1])) {
        throw new Error('Invalid checksum: ' + src);
    }
    // Parse tag
    let tag = addr[0];
    let isTestOnly = false;
    let isBounceable = false;
    if (tag & test_flag) {
        isTestOnly = true;
        tag = tag ^ test_flag;
    }
    if ((tag !== bounceable_tag) && (tag !== non_bounceable_tag))
        throw "Unknown address tag";
    isBounceable = tag === bounceable_tag;
    let workchain = null;
    if (addr[1] === 0xff) { // TODO we should read signed integer here
        workchain = -1;
    }
    else {
        workchain = addr[1];
    }
    const hashPart = addr.subarray(2, 34);
    return { isTestOnly, isBounceable, workchain, hashPart };
}
class Address {
    static isAddress(src) {
        return src instanceof Address;
    }
    static isFriendly(source) {
        // Check length
        if (source.length !== 48) {
            return false;
        }
        // Check if address is valid base64
        if (!/[A-Za-z0-9+/_-]+/.test(source)) {
            return false;
        }
        return true;
    }
    static isRaw(source) {
        // Check if has delimiter
        if (source.indexOf(':') === -1) {
            return false;
        }
        let [wc, hash] = source.split(':');
        // wc is not valid
        if (!Number.isInteger(parseFloat(wc))) {
            return false;
        }
        // hash is not valid
        if (!/[a-f0-9]+/.test(hash.toLowerCase())) {
            return false;
        }
        // has is not correct
        if (hash.length !== 64) {
            return false;
        }
        return true;
    }
    static normalize(source) {
        if (typeof source === 'string') {
            return Address.parse(source).toString();
        }
        else {
            return source.toString();
        }
    }
    static parse(source) {
        if (Address.isFriendly(source)) {
            return this.parseFriendly(source).address;
        }
        else if (Address.isRaw(source)) {
            return this.parseRaw(source);
        }
        else {
            throw new Error('Unknown address type: ' + source);
        }
    }
    static parseRaw(source) {
        let workChain = parseInt(source.split(":")[0]);
        let hash = Buffer.from(source.split(":")[1], 'hex');
        return new Address(workChain, hash);
    }
    static parseFriendly(source) {
        if (Buffer.isBuffer(source)) {
            let r = parseFriendlyAddress(source);
            return {
                isBounceable: r.isBounceable,
                isTestOnly: r.isTestOnly,
                address: new Address(r.workchain, r.hashPart)
            };
        }
        else {
            let addr = source.replace(/\-/g, '+').replace(/_/g, '\/'); // Convert from url-friendly to true base64
            let r = parseFriendlyAddress(addr);
            return {
                isBounceable: r.isBounceable,
                isTestOnly: r.isTestOnly,
                address: new Address(r.workchain, r.hashPart)
            };
        }
    }
    constructor(workChain, hash) {
        this.toRawString = () => {
            return this.workChain + ':' + this.hash.toString('hex');
        };
        this.toRaw = () => {
            const addressWithChecksum = Buffer.alloc(36);
            addressWithChecksum.set(this.hash);
            addressWithChecksum.set([this.workChain, this.workChain, this.workChain, this.workChain], 32);
            return addressWithChecksum;
        };
        this.toStringBuffer = (args) => {
            let testOnly = (args && args.testOnly !== undefined) ? args.testOnly : false;
            let bounceable = (args && args.bounceable !== undefined) ? args.bounceable : true;
            let tag = bounceable ? bounceable_tag : non_bounceable_tag;
            if (testOnly) {
                tag |= test_flag;
            }
            const addr = Buffer.alloc(34);
            addr[0] = tag;
            addr[1] = this.workChain;
            addr.set(this.hash, 2);
            const addressWithChecksum = Buffer.alloc(36);
            addressWithChecksum.set(addr);
            addressWithChecksum.set((0, crc16_1.crc16)(addr), 34);
            return addressWithChecksum;
        };
        this.toString = (args) => {
            let urlSafe = (args && args.urlSafe !== undefined) ? args.urlSafe : true;
            let buffer = this.toStringBuffer(args);
            if (urlSafe) {
                return buffer.toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
            }
            else {
                return buffer.toString('base64');
            }
        };
        this[_a] = () => this.toString();
        if (hash.length !== 32) {
            throw new Error('Invalid address hash length: ' + hash.length);
        }
        this.workChain = workChain;
        this.hash = hash;
        Object.freeze(this);
    }
    equals(src) {
        if (src.workChain !== this.workChain) {
            return false;
        }
        return src.hash.equals(this.hash);
    }
}
exports.Address = Address;
_a = symbol_inspect_1.default;
function address(src) {
    return Address.parse(src);
}
exports.address = address;


/***/ }),

/***/ 4061:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ADNLAddress = void 0;
const symbol_inspect_1 = __importDefault(__webpack_require__(29107));
const base32_1 = __webpack_require__(53721);
const crc16_1 = __webpack_require__(92960);
class ADNLAddress {
    static parseFriendly(src) {
        if (src.length !== 55) {
            throw Error('Invalid address');
        }
        // Decoding
        src = 'f' + src;
        let decoded = (0, base32_1.base32Decode)(src);
        if (decoded[0] !== 0x2d) {
            throw Error('Invalid address');
        }
        let gotHash = decoded.slice(33);
        let hash = (0, crc16_1.crc16)(decoded.slice(0, 33));
        if (!hash.equals(gotHash)) {
            throw Error('Invalid address');
        }
        return new ADNLAddress(decoded.slice(1, 33));
    }
    static parseRaw(src) {
        const data = Buffer.from(src, 'base64');
        return new ADNLAddress(data);
    }
    constructor(address) {
        this.toRaw = () => {
            return this.address.toString('hex').toUpperCase();
        };
        this.toString = () => {
            let data = Buffer.concat([Buffer.from([0x2D]), this.address]);
            let hash = (0, crc16_1.crc16)(data);
            data = Buffer.concat([data, hash]);
            return (0, base32_1.base32Encode)(data).slice(1);
        };
        this[_a] = () => this.toString();
        if (address.length !== 32) {
            throw Error('Invalid address');
        }
        this.address = address;
    }
    equals(b) {
        return this.address.equals(b.address);
    }
}
exports.ADNLAddress = ADNLAddress;
_a = symbol_inspect_1.default;


/***/ }),

/***/ 4436:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wordlist = void 0;
const EN = ['abandon', 'ability', 'able', 'about', 'above', 'absent', 'absorb', 'abstract', 'absurd', 'abuse', 'access', 'accident', 'account', 'accuse', 'achieve', 'acid', 'acoustic', 'acquire', 'across', 'act', 'action', 'actor', 'actress', 'actual', 'adapt', 'add', 'addict', 'address', 'adjust', 'admit', 'adult', 'advance', 'advice', 'aerobic', 'affair', 'afford', 'afraid', 'again', 'age', 'agent', 'agree', 'ahead', 'aim', 'air', 'airport', 'aisle', 'alarm', 'album', 'alcohol', 'alert', 'alien', 'all', 'alley', 'allow', 'almost', 'alone', 'alpha', 'already', 'also', 'alter', 'always', 'amateur', 'amazing', 'among', 'amount', 'amused', 'analyst', 'anchor', 'ancient', 'anger', 'angle', 'angry', 'animal', 'ankle', 'announce', 'annual', 'another', 'answer', 'antenna', 'antique', 'anxiety', 'any', 'apart', 'apology', 'appear', 'apple', 'approve', 'april', 'arch', 'arctic', 'area', 'arena', 'argue', 'arm', 'armed', 'armor', 'army', 'around', 'arrange', 'arrest', 'arrive', 'arrow', 'art', 'artefact', 'artist', 'artwork', 'ask', 'aspect', 'assault', 'asset', 'assist', 'assume', 'asthma', 'athlete', 'atom', 'attack', 'attend', 'attitude', 'attract', 'auction', 'audit', 'august', 'aunt', 'author', 'auto', 'autumn', 'average', 'avocado', 'avoid', 'awake', 'aware', 'away', 'awesome', 'awful', 'awkward', 'axis',
    'baby', 'bachelor', 'bacon', 'badge', 'bag', 'balance', 'balcony', 'ball', 'bamboo', 'banana', 'banner', 'bar', 'barely', 'bargain', 'barrel', 'base', 'basic', 'basket', 'battle', 'beach', 'bean', 'beauty', 'because', 'become', 'beef', 'before', 'begin', 'behave', 'behind', 'believe', 'below', 'belt', 'bench', 'benefit', 'best', 'betray', 'better', 'between', 'beyond', 'bicycle', 'bid', 'bike', 'bind', 'biology', 'bird', 'birth', 'bitter', 'black', 'blade', 'blame', 'blanket', 'blast', 'bleak', 'bless', 'blind', 'blood', 'blossom', 'blouse', 'blue', 'blur', 'blush', 'board', 'boat', 'body', 'boil', 'bomb', 'bone', 'bonus', 'book', 'boost', 'border', 'boring', 'borrow', 'boss', 'bottom', 'bounce', 'box', 'boy', 'bracket', 'brain', 'brand', 'brass', 'brave', 'bread', 'breeze', 'brick', 'bridge', 'brief', 'bright', 'bring', 'brisk', 'broccoli', 'broken', 'bronze', 'broom', 'brother', 'brown', 'brush', 'bubble', 'buddy', 'budget', 'buffalo', 'build', 'bulb', 'bulk', 'bullet', 'bundle', 'bunker', 'burden', 'burger', 'burst', 'bus', 'business', 'busy', 'butter', 'buyer', 'buzz',
    'cabbage', 'cabin', 'cable', 'cactus', 'cage', 'cake', 'call', 'calm', 'camera', 'camp', 'can', 'canal', 'cancel', 'candy', 'cannon', 'canoe', 'canvas', 'canyon', 'capable', 'capital', 'captain', 'car', 'carbon', 'card', 'cargo', 'carpet', 'carry', 'cart', 'case', 'cash', 'casino', 'castle', 'casual', 'cat', 'catalog', 'catch', 'category', 'cattle', 'caught', 'cause', 'caution', 'cave', 'ceiling', 'celery', 'cement', 'census', 'century', 'cereal', 'certain', 'chair', 'chalk', 'champion', 'change', 'chaos', 'chapter', 'charge', 'chase', 'chat', 'cheap', 'check', 'cheese', 'chef', 'cherry', 'chest', 'chicken', 'chief', 'child', 'chimney', 'choice', 'choose', 'chronic', 'chuckle', 'chunk', 'churn', 'cigar', 'cinnamon', 'circle', 'citizen', 'city', 'civil', 'claim', 'clap', 'clarify', 'claw', 'clay', 'clean', 'clerk', 'clever', 'click', 'client', 'cliff', 'climb', 'clinic', 'clip', 'clock', 'clog', 'close', 'cloth', 'cloud', 'clown', 'club', 'clump', 'cluster', 'clutch', 'coach', 'coast', 'coconut', 'code', 'coffee', 'coil', 'coin', 'collect', 'color', 'column', 'combine', 'come', 'comfort', 'comic', 'common', 'company', 'concert', 'conduct', 'confirm', 'congress', 'connect', 'consider', 'control', 'convince', 'cook', 'cool', 'copper', 'copy', 'coral', 'core', 'corn', 'correct', 'cost', 'cotton', 'couch', 'country', 'couple', 'course', 'cousin', 'cover', 'coyote', 'crack', 'cradle', 'craft', 'cram', 'crane', 'crash', 'crater', 'crawl', 'crazy', 'cream', 'credit', 'creek', 'crew', 'cricket', 'crime', 'crisp', 'critic', 'crop', 'cross', 'crouch', 'crowd', 'crucial', 'cruel', 'cruise', 'crumble', 'crunch', 'crush', 'cry', 'crystal', 'cube', 'culture', 'cup', 'cupboard', 'curious', 'current', 'curtain', 'curve', 'cushion', 'custom', 'cute', 'cycle',
    'dad', 'damage', 'damp', 'dance', 'danger', 'daring', 'dash', 'daughter', 'dawn', 'day', 'deal', 'debate', 'debris', 'decade', 'december', 'decide', 'decline', 'decorate', 'decrease', 'deer', 'defense', 'define', 'defy', 'degree', 'delay', 'deliver', 'demand', 'demise', 'denial', 'dentist', 'deny', 'depart', 'depend', 'deposit', 'depth', 'deputy', 'derive', 'describe', 'desert', 'design', 'desk', 'despair', 'destroy', 'detail', 'detect', 'develop', 'device', 'devote', 'diagram', 'dial', 'diamond', 'diary', 'dice', 'diesel', 'diet', 'differ', 'digital', 'dignity', 'dilemma', 'dinner', 'dinosaur', 'direct', 'dirt', 'disagree', 'discover', 'disease', 'dish', 'dismiss', 'disorder', 'display', 'distance', 'divert', 'divide', 'divorce', 'dizzy', 'doctor', 'document', 'dog', 'doll', 'dolphin', 'domain', 'donate', 'donkey', 'donor', 'door', 'dose', 'double', 'dove', 'draft', 'dragon', 'drama', 'drastic', 'draw', 'dream', 'dress', 'drift', 'drill', 'drink', 'drip', 'drive', 'drop', 'drum', 'dry', 'duck', 'dumb', 'dune', 'during', 'dust', 'dutch', 'duty', 'dwarf', 'dynamic',
    'eager', 'eagle', 'early', 'earn', 'earth', 'easily', 'east', 'easy', 'echo', 'ecology', 'economy', 'edge', 'edit', 'educate', 'effort', 'egg', 'eight', 'either', 'elbow', 'elder', 'electric', 'elegant', 'element', 'elephant', 'elevator', 'elite', 'else', 'embark', 'embody', 'embrace', 'emerge', 'emotion', 'employ', 'empower', 'empty', 'enable', 'enact', 'end', 'endless', 'endorse', 'enemy', 'energy', 'enforce', 'engage', 'engine', 'enhance', 'enjoy', 'enlist', 'enough', 'enrich', 'enroll', 'ensure', 'enter', 'entire', 'entry', 'envelope', 'episode', 'equal', 'equip', 'era', 'erase', 'erode', 'erosion', 'error', 'erupt', 'escape', 'essay', 'essence', 'estate', 'eternal', 'ethics', 'evidence', 'evil', 'evoke', 'evolve', 'exact', 'example', 'excess', 'exchange', 'excite', 'exclude', 'excuse', 'execute', 'exercise', 'exhaust', 'exhibit', 'exile', 'exist', 'exit', 'exotic', 'expand', 'expect', 'expire', 'explain', 'expose', 'express', 'extend', 'extra', 'eye', 'eyebrow',
    'fabric', 'face', 'faculty', 'fade', 'faint', 'faith', 'fall', 'false', 'fame', 'family', 'famous', 'fan', 'fancy', 'fantasy', 'farm', 'fashion', 'fat', 'fatal', 'father', 'fatigue', 'fault', 'favorite', 'feature', 'february', 'federal', 'fee', 'feed', 'feel', 'female', 'fence', 'festival', 'fetch', 'fever', 'few', 'fiber', 'fiction', 'field', 'figure', 'file', 'film', 'filter', 'final', 'find', 'fine', 'finger', 'finish', 'fire', 'firm', 'first', 'fiscal', 'fish', 'fit', 'fitness', 'fix', 'flag', 'flame', 'flash', 'flat', 'flavor', 'flee', 'flight', 'flip', 'float', 'flock', 'floor', 'flower', 'fluid', 'flush', 'fly', 'foam', 'focus', 'fog', 'foil', 'fold', 'follow', 'food', 'foot', 'force', 'forest', 'forget', 'fork', 'fortune', 'forum', 'forward', 'fossil', 'foster', 'found', 'fox', 'fragile', 'frame', 'frequent', 'fresh', 'friend', 'fringe', 'frog', 'front', 'frost', 'frown', 'frozen', 'fruit', 'fuel', 'fun', 'funny', 'furnace', 'fury', 'future',
    'gadget', 'gain', 'galaxy', 'gallery', 'game', 'gap', 'garage', 'garbage', 'garden', 'garlic', 'garment', 'gas', 'gasp', 'gate', 'gather', 'gauge', 'gaze', 'general', 'genius', 'genre', 'gentle', 'genuine', 'gesture', 'ghost', 'giant', 'gift', 'giggle', 'ginger', 'giraffe', 'girl', 'give', 'glad', 'glance', 'glare', 'glass', 'glide', 'glimpse', 'globe', 'gloom', 'glory', 'glove', 'glow', 'glue', 'goat', 'goddess', 'gold', 'good', 'goose', 'gorilla', 'gospel', 'gossip', 'govern', 'gown', 'grab', 'grace', 'grain', 'grant', 'grape', 'grass', 'gravity', 'great', 'green', 'grid', 'grief', 'grit', 'grocery', 'group', 'grow', 'grunt', 'guard', 'guess', 'guide', 'guilt', 'guitar', 'gun', 'gym',
    'habit', 'hair', 'half', 'hammer', 'hamster', 'hand', 'happy', 'harbor', 'hard', 'harsh', 'harvest', 'hat', 'have', 'hawk', 'hazard', 'head', 'health', 'heart', 'heavy', 'hedgehog', 'height', 'hello', 'helmet', 'help', 'hen', 'hero', 'hidden', 'high', 'hill', 'hint', 'hip', 'hire', 'history', 'hobby', 'hockey', 'hold', 'hole', 'holiday', 'hollow', 'home', 'honey', 'hood', 'hope', 'horn', 'horror', 'horse', 'hospital', 'host', 'hotel', 'hour', 'hover', 'hub', 'huge', 'human', 'humble', 'humor', 'hundred', 'hungry', 'hunt', 'hurdle', 'hurry', 'hurt', 'husband', 'hybrid',
    'ice', 'icon', 'idea', 'identify', 'idle', 'ignore', 'ill', 'illegal', 'illness', 'image', 'imitate', 'immense', 'immune', 'impact', 'impose', 'improve', 'impulse', 'inch', 'include', 'income', 'increase', 'index', 'indicate', 'indoor', 'industry', 'infant', 'inflict', 'inform', 'inhale', 'inherit', 'initial', 'inject', 'injury', 'inmate', 'inner', 'innocent', 'input', 'inquiry', 'insane', 'insect', 'inside', 'inspire', 'install', 'intact', 'interest', 'into', 'invest', 'invite', 'involve', 'iron', 'island', 'isolate', 'issue', 'item', 'ivory',
    'jacket', 'jaguar', 'jar', 'jazz', 'jealous', 'jeans', 'jelly', 'jewel', 'job', 'join', 'joke', 'journey', 'joy', 'judge', 'juice', 'jump', 'jungle', 'junior', 'junk', 'just',
    'kangaroo', 'keen', 'keep', 'ketchup', 'key', 'kick', 'kid', 'kidney', 'kind', 'kingdom', 'kiss', 'kit', 'kitchen', 'kite', 'kitten', 'kiwi', 'knee', 'knife', 'knock', 'know',
    'lab', 'label', 'labor', 'ladder', 'lady', 'lake', 'lamp', 'language', 'laptop', 'large', 'later', 'latin', 'laugh', 'laundry', 'lava', 'law', 'lawn', 'lawsuit', 'layer', 'lazy', 'leader', 'leaf', 'learn', 'leave', 'lecture', 'left', 'leg', 'legal', 'legend', 'leisure', 'lemon', 'lend', 'length', 'lens', 'leopard', 'lesson', 'letter', 'level', 'liar', 'liberty', 'library', 'license', 'life', 'lift', 'light', 'like', 'limb', 'limit', 'link', 'lion', 'liquid', 'list', 'little', 'live', 'lizard', 'load', 'loan', 'lobster', 'local', 'lock', 'logic', 'lonely', 'long', 'loop', 'lottery', 'loud', 'lounge', 'love', 'loyal', 'lucky', 'luggage', 'lumber', 'lunar', 'lunch', 'luxury', 'lyrics',
    'machine', 'mad', 'magic', 'magnet', 'maid', 'mail', 'main', 'major', 'make', 'mammal', 'man', 'manage', 'mandate', 'mango', 'mansion', 'manual', 'maple', 'marble', 'march', 'margin', 'marine', 'market', 'marriage', 'mask', 'mass', 'master', 'match', 'material', 'math', 'matrix', 'matter', 'maximum', 'maze', 'meadow', 'mean', 'measure', 'meat', 'mechanic', 'medal', 'media', 'melody', 'melt', 'member', 'memory', 'mention', 'menu', 'mercy', 'merge', 'merit', 'merry', 'mesh', 'message', 'metal', 'method', 'middle', 'midnight', 'milk', 'million', 'mimic', 'mind', 'minimum', 'minor', 'minute', 'miracle', 'mirror', 'misery', 'miss', 'mistake', 'mix', 'mixed', 'mixture', 'mobile', 'model', 'modify', 'mom', 'moment', 'monitor', 'monkey', 'monster', 'month', 'moon', 'moral', 'more', 'morning', 'mosquito', 'mother', 'motion', 'motor', 'mountain', 'mouse', 'move', 'movie', 'much', 'muffin', 'mule', 'multiply', 'muscle', 'museum', 'mushroom', 'music', 'must', 'mutual', 'myself', 'mystery', 'myth',
    'naive', 'name', 'napkin', 'narrow', 'nasty', 'nation', 'nature', 'near', 'neck', 'need', 'negative', 'neglect', 'neither', 'nephew', 'nerve', 'nest', 'net', 'network', 'neutral', 'never', 'news', 'next', 'nice', 'night', 'noble', 'noise', 'nominee', 'noodle', 'normal', 'north', 'nose', 'notable', 'note', 'nothing', 'notice', 'novel', 'now', 'nuclear', 'number', 'nurse', 'nut',
    'oak', 'obey', 'object', 'oblige', 'obscure', 'observe', 'obtain', 'obvious', 'occur', 'ocean', 'october', 'odor', 'off', 'offer', 'office', 'often', 'oil', 'okay', 'old', 'olive', 'olympic', 'omit', 'once', 'one', 'onion', 'online', 'only', 'open', 'opera', 'opinion', 'oppose', 'option', 'orange', 'orbit', 'orchard', 'order', 'ordinary', 'organ', 'orient', 'original', 'orphan', 'ostrich', 'other', 'outdoor', 'outer', 'output', 'outside', 'oval', 'oven', 'over', 'own', 'owner', 'oxygen', 'oyster', 'ozone',
    'pact', 'paddle', 'page', 'pair', 'palace', 'palm', 'panda', 'panel', 'panic', 'panther', 'paper', 'parade', 'parent', 'park', 'parrot', 'party', 'pass', 'patch', 'path', 'patient', 'patrol', 'pattern', 'pause', 'pave', 'payment', 'peace', 'peanut', 'pear', 'peasant', 'pelican', 'pen', 'penalty', 'pencil', 'people', 'pepper', 'perfect', 'permit', 'person', 'pet', 'phone', 'photo', 'phrase', 'physical', 'piano', 'picnic', 'picture', 'piece', 'pig', 'pigeon', 'pill', 'pilot', 'pink', 'pioneer', 'pipe', 'pistol', 'pitch', 'pizza', 'place', 'planet', 'plastic', 'plate', 'play', 'please', 'pledge', 'pluck', 'plug', 'plunge', 'poem', 'poet', 'point', 'polar', 'pole', 'police', 'pond', 'pony', 'pool', 'popular', 'portion', 'position', 'possible', 'post', 'potato', 'pottery', 'poverty', 'powder', 'power', 'practice', 'praise', 'predict', 'prefer', 'prepare', 'present', 'pretty', 'prevent', 'price', 'pride', 'primary', 'print', 'priority', 'prison', 'private', 'prize', 'problem', 'process', 'produce', 'profit', 'program', 'project', 'promote', 'proof', 'property', 'prosper', 'protect', 'proud', 'provide', 'public', 'pudding', 'pull', 'pulp', 'pulse', 'pumpkin', 'punch', 'pupil', 'puppy', 'purchase', 'purity', 'purpose', 'purse', 'push', 'put', 'puzzle', 'pyramid',
    'quality', 'quantum', 'quarter', 'question', 'quick', 'quit', 'quiz', 'quote',
    'rabbit', 'raccoon', 'race', 'rack', 'radar', 'radio', 'rail', 'rain', 'raise', 'rally', 'ramp', 'ranch', 'random', 'range', 'rapid', 'rare', 'rate', 'rather', 'raven', 'raw', 'razor', 'ready', 'real', 'reason', 'rebel', 'rebuild', 'recall', 'receive', 'recipe', 'record', 'recycle', 'reduce', 'reflect', 'reform', 'refuse', 'region', 'regret', 'regular', 'reject', 'relax', 'release', 'relief', 'rely', 'remain', 'remember', 'remind', 'remove', 'render', 'renew', 'rent', 'reopen', 'repair', 'repeat', 'replace', 'report', 'require', 'rescue', 'resemble', 'resist', 'resource', 'response', 'result', 'retire', 'retreat', 'return', 'reunion', 'reveal', 'review', 'reward', 'rhythm', 'rib', 'ribbon', 'rice', 'rich', 'ride', 'ridge', 'rifle', 'right', 'rigid', 'ring', 'riot', 'ripple', 'risk', 'ritual', 'rival', 'river', 'road', 'roast', 'robot', 'robust', 'rocket', 'romance', 'roof', 'rookie', 'room', 'rose', 'rotate', 'rough', 'round', 'route', 'royal', 'rubber', 'rude', 'rug', 'rule', 'run', 'runway', 'rural',
    'sad', 'saddle', 'sadness', 'safe', 'sail', 'salad', 'salmon', 'salon', 'salt', 'salute', 'same', 'sample', 'sand', 'satisfy', 'satoshi', 'sauce', 'sausage', 'save', 'say', 'scale', 'scan', 'scare', 'scatter', 'scene', 'scheme', 'school', 'science', 'scissors', 'scorpion', 'scout', 'scrap', 'screen', 'script', 'scrub', 'sea', 'search', 'season', 'seat', 'second', 'secret', 'section', 'security', 'seed', 'seek', 'segment', 'select', 'sell', 'seminar', 'senior', 'sense', 'sentence', 'series', 'service', 'session', 'settle', 'setup', 'seven', 'shadow', 'shaft', 'shallow', 'share', 'shed', 'shell', 'sheriff', 'shield', 'shift', 'shine', 'ship', 'shiver', 'shock', 'shoe', 'shoot', 'shop', 'short', 'shoulder', 'shove', 'shrimp', 'shrug', 'shuffle', 'shy', 'sibling', 'sick', 'side', 'siege', 'sight', 'sign', 'silent', 'silk', 'silly', 'silver', 'similar', 'simple', 'since', 'sing', 'siren', 'sister', 'situate', 'six', 'size', 'skate', 'sketch', 'ski', 'skill', 'skin', 'skirt', 'skull', 'slab', 'slam', 'sleep', 'slender', 'slice', 'slide', 'slight', 'slim', 'slogan', 'slot', 'slow', 'slush', 'small', 'smart', 'smile', 'smoke', 'smooth', 'snack', 'snake', 'snap', 'sniff', 'snow', 'soap', 'soccer', 'social', 'sock', 'soda', 'soft', 'solar', 'soldier', 'solid', 'solution', 'solve', 'someone', 'song', 'soon', 'sorry', 'sort', 'soul', 'sound', 'soup', 'source', 'south', 'space', 'spare', 'spatial', 'spawn', 'speak', 'special', 'speed', 'spell', 'spend', 'sphere', 'spice', 'spider', 'spike', 'spin', 'spirit', 'split', 'spoil', 'sponsor', 'spoon', 'sport', 'spot', 'spray', 'spread', 'spring', 'spy', 'square', 'squeeze', 'squirrel', 'stable', 'stadium', 'staff', 'stage', 'stairs', 'stamp', 'stand', 'start', 'state', 'stay', 'steak', 'steel', 'stem', 'step', 'stereo', 'stick', 'still', 'sting', 'stock', 'stomach', 'stone', 'stool', 'story', 'stove', 'strategy', 'street', 'strike', 'strong', 'struggle', 'student', 'stuff', 'stumble', 'style', 'subject', 'submit', 'subway', 'success', 'such', 'sudden', 'suffer', 'sugar', 'suggest', 'suit', 'summer', 'sun', 'sunny', 'sunset', 'super', 'supply', 'supreme', 'sure', 'surface', 'surge', 'surprise', 'surround', 'survey', 'suspect', 'sustain', 'swallow', 'swamp', 'swap', 'swarm', 'swear', 'sweet', 'swift', 'swim', 'swing', 'switch', 'sword', 'symbol', 'symptom', 'syrup', 'system',
    'table', 'tackle', 'tag', 'tail', 'talent', 'talk', 'tank', 'tape', 'target', 'task', 'taste', 'tattoo', 'taxi', 'teach', 'team', 'tell', 'ten', 'tenant', 'tennis', 'tent', 'term', 'test', 'text', 'thank', 'that', 'theme', 'then', 'theory', 'there', 'they', 'thing', 'this', 'thought', 'three', 'thrive', 'throw', 'thumb', 'thunder', 'ticket', 'tide', 'tiger', 'tilt', 'timber', 'time', 'tiny', 'tip', 'tired', 'tissue', 'title', 'toast', 'tobacco', 'today', 'toddler', 'toe', 'together', 'toilet', 'token', 'tomato', 'tomorrow', 'tone', 'tongue', 'tonight', 'tool', 'tooth', 'top', 'topic', 'topple', 'torch', 'tornado', 'tortoise', 'toss', 'total', 'tourist', 'toward', 'tower', 'town', 'toy', 'track', 'trade', 'traffic', 'tragic', 'train', 'transfer', 'trap', 'trash', 'travel', 'tray', 'treat', 'tree', 'trend', 'trial', 'tribe', 'trick', 'trigger', 'trim', 'trip', 'trophy', 'trouble', 'truck', 'true', 'truly', 'trumpet', 'trust', 'truth', 'try', 'tube', 'tuition', 'tumble', 'tuna', 'tunnel', 'turkey', 'turn', 'turtle', 'twelve', 'twenty', 'twice', 'twin', 'twist', 'two', 'type', 'typical',
    'ugly', 'umbrella', 'unable', 'unaware', 'uncle', 'uncover', 'under', 'undo', 'unfair', 'unfold', 'unhappy', 'uniform', 'unique', 'unit', 'universe', 'unknown', 'unlock', 'until', 'unusual', 'unveil', 'update', 'upgrade', 'uphold', 'upon', 'upper', 'upset', 'urban', 'urge', 'usage', 'use', 'used', 'useful', 'useless', 'usual', 'utility',
    'vacant', 'vacuum', 'vague', 'valid', 'valley', 'valve', 'van', 'vanish', 'vapor', 'various', 'vast', 'vault', 'vehicle', 'velvet', 'vendor', 'venture', 'venue', 'verb', 'verify', 'version', 'very', 'vessel', 'veteran', 'viable', 'vibrant', 'vicious', 'victory', 'video', 'view', 'village', 'vintage', 'violin', 'virtual', 'virus', 'visa', 'visit', 'visual', 'vital', 'vivid', 'vocal', 'voice', 'void', 'volcano', 'volume', 'vote', 'voyage',
    'wage', 'wagon', 'wait', 'walk', 'wall', 'walnut', 'want', 'warfare', 'warm', 'warrior', 'wash', 'wasp', 'waste', 'water', 'wave', 'way', 'wealth', 'weapon', 'wear', 'weasel', 'weather', 'web', 'wedding', 'weekend', 'weird', 'welcome', 'west', 'wet', 'whale', 'what', 'wheat', 'wheel', 'when', 'where', 'whip', 'whisper', 'wide', 'width', 'wife', 'wild', 'will', 'win', 'window', 'wine', 'wing', 'wink', 'winner', 'winter', 'wire', 'wisdom', 'wise', 'wish', 'witness', 'wolf', 'woman', 'wonder', 'wood', 'wool', 'word', 'work', 'world', 'worry', 'worth', 'wrap', 'wreck', 'wrestle', 'wrist', 'write', 'wrong',
    'yard', 'year', 'yellow', 'you', 'young', 'youth',
    'zebra', 'zero', 'zone', 'zoo'];
exports.wordlist = EN;


/***/ }),

/***/ 4599:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTickTock = exports.loadTickTock = void 0;
function loadTickTock(slice) {
    return {
        tick: slice.loadBit(),
        tock: slice.loadBit()
    };
}
exports.loadTickTock = loadTickTock;
function storeTickTock(src) {
    return (builder) => {
        builder.storeBit(src.tick);
        builder.storeBit(src.tock);
    };
}
exports.storeTickTock = storeTickTock;


/***/ }),

/***/ 4870:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hmac_sha512 = exports.hmac_sha512_fallback = void 0;
const jssha_1 = __importDefault(__webpack_require__(68343));
const crypto_primitives_1 = __webpack_require__(32370);
async function hmac_sha512_fallback(key, data) {
    let keyBuffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    let dataBuffer = typeof data === 'string' ? Buffer.from(data, 'utf-8') : data;
    const shaObj = new jssha_1.default("SHA-512", "HEX", {
        hmacKey: { value: keyBuffer.toString('hex'), format: "HEX" },
    });
    shaObj.update(dataBuffer.toString('hex'));
    const hmac = shaObj.getHash("HEX");
    return Buffer.from(hmac, 'hex');
}
exports.hmac_sha512_fallback = hmac_sha512_fallback;
function hmac_sha512(key, data) {
    return (0, crypto_primitives_1.hmac_sha512)(key, data);
}
exports.hmac_sha512 = hmac_sha512;


/***/ }),

/***/ 8117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deriveSymmetricPath = exports.deriveSymmetricHardenedKey = exports.getSymmetricMasterKeyFromSeed = void 0;
const hmac_sha512_1 = __webpack_require__(4870);
const SYMMETRIC_SEED = 'Symmetric key seed';
async function getSymmetricMasterKeyFromSeed(seed) {
    const I = await (0, hmac_sha512_1.hmac_sha512)(SYMMETRIC_SEED, seed);
    const IL = I.slice(32);
    const IR = I.slice(0, 32);
    return {
        key: IL,
        chainCode: IR,
    };
}
exports.getSymmetricMasterKeyFromSeed = getSymmetricMasterKeyFromSeed;
;
async function deriveSymmetricHardenedKey(parent, offset) {
    // Prepare data
    const data = Buffer.concat([Buffer.alloc(1, 0), Buffer.from(offset)]);
    // Derive key
    const I = await (0, hmac_sha512_1.hmac_sha512)(parent.chainCode, data);
    const IL = I.slice(32);
    const IR = I.slice(0, 32);
    return {
        key: IL,
        chainCode: IR,
    };
}
exports.deriveSymmetricHardenedKey = deriveSymmetricHardenedKey;
async function deriveSymmetricPath(seed, path) {
    let state = await getSymmetricMasterKeyFromSeed(seed);
    let remaining = [...path];
    while (remaining.length > 0) {
        let index = remaining[0];
        remaining = remaining.slice(1);
        state = await deriveSymmetricHardenedKey(state, index);
    }
    return state.key;
}
exports.deriveSymmetricPath = deriveSymmetricPath;


/***/ }),

/***/ 9447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.comment = exports.external = exports.internal = void 0;
const Address_1 = __webpack_require__(3512);
const Cell_1 = __webpack_require__(66902);
const Builder_1 = __webpack_require__(65871);
const convert_1 = __webpack_require__(97070);
const ExtraCurrency_1 = __webpack_require__(71784);
function internal(src) {
    // Resolve bounce
    let bounce = true;
    if (src.bounce !== null && src.bounce !== undefined) {
        bounce = src.bounce;
    }
    // Resolve address
    let to;
    if (typeof src.to === 'string') {
        to = Address_1.Address.parse(src.to);
    }
    else if (Address_1.Address.isAddress(src.to)) {
        to = src.to;
    }
    else {
        throw new Error(`Invalid address ${src.to}`);
    }
    // Resolve value
    let value;
    if (typeof src.value === 'string') {
        value = (0, convert_1.toNano)(src.value);
    }
    else {
        value = src.value;
    }
    let other;
    if (src.extracurrency) {
        // Resolve value
        other = (0, ExtraCurrency_1.packExtraCurrencyDict)(src.extracurrency);
    }
    // Resolve body
    let body = Cell_1.Cell.EMPTY;
    if (typeof src.body === 'string') {
        body = (0, Builder_1.beginCell)().storeUint(0, 32).storeStringTail(src.body).endCell();
    }
    else if (src.body) {
        body = src.body;
    }
    // Create message
    return {
        info: {
            type: 'internal',
            dest: to,
            value: { coins: value, other },
            bounce,
            ihrDisabled: true,
            bounced: false,
            ihrFee: 0n,
            forwardFee: 0n,
            createdAt: 0,
            createdLt: 0n
        },
        init: src.init ?? undefined,
        body: body
    };
}
exports.internal = internal;
function external(src) {
    // Resolve address
    let to;
    if (typeof src.to === 'string') {
        to = Address_1.Address.parse(src.to);
    }
    else if (Address_1.Address.isAddress(src.to)) {
        to = src.to;
    }
    else {
        throw new Error(`Invalid address ${src.to}`);
    }
    return {
        info: {
            type: 'external-in',
            dest: to,
            importFee: 0n
        },
        init: src.init ?? undefined,
        body: src.body || Cell_1.Cell.EMPTY
    };
}
exports.external = external;
function comment(src) {
    return (0, Builder_1.beginCell)()
        .storeUint(0, 32)
        .storeStringTail(src)
        .endCell();
}
exports.comment = comment;


/***/ }),

/***/ 9896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRepr = exports.getBitsDescriptor = exports.getRefsDescriptor = void 0;
const CellType_1 = __webpack_require__(34654);
const paddedBits_1 = __webpack_require__(34382);
function getRefsDescriptor(refs, levelMask, type) {
    return refs.length + (type !== CellType_1.CellType.Ordinary ? 1 : 0) * 8 + levelMask * 32;
}
exports.getRefsDescriptor = getRefsDescriptor;
function getBitsDescriptor(bits) {
    let len = bits.length;
    return Math.ceil(len / 8) + Math.floor(len / 8);
}
exports.getBitsDescriptor = getBitsDescriptor;
function getRepr(originalBits, bits, refs, level, levelMask, type) {
    // Allocate
    const bitsLen = Math.ceil(bits.length / 8);
    const repr = Buffer.alloc(2 + bitsLen + (2 + 32) * refs.length);
    // Write descriptors
    let reprCursor = 0;
    repr[reprCursor++] = getRefsDescriptor(refs, levelMask, type);
    repr[reprCursor++] = getBitsDescriptor(originalBits);
    // Write bits
    (0, paddedBits_1.bitsToPaddedBuffer)(bits).copy(repr, reprCursor);
    reprCursor += bitsLen;
    // Write refs
    for (const c of refs) {
        let childDepth;
        if (type == CellType_1.CellType.MerkleProof || type == CellType_1.CellType.MerkleUpdate) {
            childDepth = c.depth(level + 1);
        }
        else {
            childDepth = c.depth(level);
        }
        repr[reprCursor++] = Math.floor(childDepth / 256);
        repr[reprCursor++] = childDepth % 256;
    }
    for (const c of refs) {
        let childHash;
        if (type == CellType_1.CellType.MerkleProof || type == CellType_1.CellType.MerkleUpdate) {
            childHash = c.hash(level + 1);
        }
        else {
            childHash = c.hash(level);
        }
        childHash.copy(repr, reprCursor);
        reprCursor += 32;
    }
    // Result
    return repr;
}
exports.getRepr = getRepr;


/***/ }),

/***/ 10132:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mnemonicFromRandomSeed = exports.mnemonicIndexesToBytes = exports.bytesToMnemonics = exports.bytesToMnemonicIndexes = exports.mnemonicNew = exports.mnemonicValidate = exports.mnemonicToHDSeed = exports.mnemonicToWalletKey = exports.mnemonicToPrivateKey = exports.mnemonicToSeed = exports.mnemonicToEntropy = void 0;
const tweetnacl_1 = __importDefault(__webpack_require__(88947));
const getSecureRandom_1 = __webpack_require__(51682);
const hmac_sha512_1 = __webpack_require__(4870);
const pbkdf2_sha512_1 = __webpack_require__(59256);
const binary_1 = __webpack_require__(12202);
const wordlist_1 = __webpack_require__(4436);
const PBKDF_ITERATIONS = 100000;
async function isPasswordNeeded(mnemonicArray) {
    const passlessEntropy = await mnemonicToEntropy(mnemonicArray);
    return (await isPasswordSeed(passlessEntropy)) && !(await isBasicSeed(passlessEntropy));
}
function normalizeMnemonic(src) {
    return src.map((v) => v.toLowerCase().trim());
}
async function isBasicSeed(entropy) {
    // https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/tonlib/tonlib/keys/Mnemonic.cpp#L68
    // bool Mnemonic::is_basic_seed() {
    //   td::SecureString hash(64);
    //   td::pbkdf2_sha512(as_slice(to_entropy()), "TON seed version", td::max(1, PBKDF_ITERATIONS / 256),
    //                     hash.as_mutable_slice());
    //   return hash.as_slice()[0] == 0;
    // }
    const seed = await (0, pbkdf2_sha512_1.pbkdf2_sha512)(entropy, 'TON seed version', Math.max(1, Math.floor(PBKDF_ITERATIONS / 256)), 64);
    return seed[0] == 0;
}
async function isPasswordSeed(entropy) {
    // https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/tonlib/tonlib/keys/Mnemonic.cpp#L75
    // bool Mnemonic::is_password_seed() {
    //   td::SecureString hash(64);
    //   td::pbkdf2_sha512(as_slice(to_entropy()), "TON fast seed version", 1, hash.as_mutable_slice());
    //   return hash.as_slice()[0] == 1;
    // }
    const seed = await (0, pbkdf2_sha512_1.pbkdf2_sha512)(entropy, 'TON fast seed version', 1, 64);
    return seed[0] == 1;
}
async function mnemonicToEntropy(mnemonicArray, password) {
    // https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/tonlib/tonlib/keys/Mnemonic.cpp#L52
    // td::SecureString Mnemonic::to_entropy() const {
    //   td::SecureString res(64);
    //   td::hmac_sha512(join(words_), password_, res.as_mutable_slice());
    //   return res;
    // }
    return await (0, hmac_sha512_1.hmac_sha512)(mnemonicArray.join(' '), password && password.length > 0 ? password : '');
}
exports.mnemonicToEntropy = mnemonicToEntropy;
async function mnemonicToSeed(mnemonicArray, seed, password) {
    // https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/tonlib/tonlib/keys/Mnemonic.cpp#L58
    // td::SecureString Mnemonic::to_seed() const {
    //   td::SecureString hash(64);
    //   td::pbkdf2_sha512(as_slice(to_entropy()), "TON default seed", PBKDF_ITERATIONS, hash.as_mutable_slice());
    //   return hash;
    // }
    const entropy = await mnemonicToEntropy(mnemonicArray, password);
    return await (0, pbkdf2_sha512_1.pbkdf2_sha512)(entropy, seed, PBKDF_ITERATIONS, 64);
}
exports.mnemonicToSeed = mnemonicToSeed;
/**
 * Extract private key from mnemonic
 * @param mnemonicArray mnemonic array
 * @param password mnemonic password
 * @returns Key Pair
 */
async function mnemonicToPrivateKey(mnemonicArray, password) {
    // https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/tonlib/tonlib/keys/Mnemonic.cpp#L64
    // td::Ed25519::PrivateKey Mnemonic::to_private_key() const {
    //   return td::Ed25519::PrivateKey(td::SecureString(as_slice(to_seed()).substr(0, td::Ed25519::PrivateKey::LENGTH)));
    // }
    mnemonicArray = normalizeMnemonic(mnemonicArray);
    const seed = (await mnemonicToSeed(mnemonicArray, 'TON default seed', password));
    let keyPair = tweetnacl_1.default.sign.keyPair.fromSeed(seed.slice(0, 32));
    return {
        publicKey: Buffer.from(keyPair.publicKey),
        secretKey: Buffer.from(keyPair.secretKey)
    };
}
exports.mnemonicToPrivateKey = mnemonicToPrivateKey;
/**
 * Convert mnemonic to wallet key pair
 * @param mnemonicArray mnemonic array
 * @param password mnemonic password
 * @returns Key Pair
 */
async function mnemonicToWalletKey(mnemonicArray, password) {
    let seedPk = await mnemonicToPrivateKey(mnemonicArray, password);
    let seedSecret = seedPk.secretKey.slice(0, 32);
    const keyPair = tweetnacl_1.default.sign.keyPair.fromSeed(seedSecret);
    return {
        publicKey: Buffer.from(keyPair.publicKey),
        secretKey: Buffer.from(keyPair.secretKey)
    };
}
exports.mnemonicToWalletKey = mnemonicToWalletKey;
/**
 * Convert mnemonics to HD seed
 * @param mnemonicArray mnemonic array
 * @param password mnemonic password
 * @returns 64 byte seed
 */
async function mnemonicToHDSeed(mnemonicArray, password) {
    mnemonicArray = normalizeMnemonic(mnemonicArray);
    return (await mnemonicToSeed(mnemonicArray, 'TON HD Keys seed', password));
}
exports.mnemonicToHDSeed = mnemonicToHDSeed;
/**
 * Validate Mnemonic
 * @param mnemonicArray mnemonic array
 * @param password mnemonic password
 * @returns true for valid mnemonic
 */
async function mnemonicValidate(mnemonicArray, password) {
    // Normalize
    mnemonicArray = normalizeMnemonic(mnemonicArray);
    // Validate mnemonic words
    for (let word of mnemonicArray) {
        if (wordlist_1.wordlist.indexOf(word) < 0) {
            return false;
        }
    }
    // Check password
    if (password && password.length > 0) {
        if (!await isPasswordNeeded(mnemonicArray)) {
            return false;
        }
    }
    // Validate seed
    return await isBasicSeed(await mnemonicToEntropy(mnemonicArray, password));
}
exports.mnemonicValidate = mnemonicValidate;
/**
 * Generate new Mnemonic
 * @param wordsCount number of words to generate
 * @param password mnemonic password
 * @returns
 */
async function mnemonicNew(wordsCount = 24, password) {
    // https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/tonlib/tonlib/keys/Mnemonic.cpp#L159
    let mnemonicArray = [];
    while (true) {
        // Regenerate new mnemonics
        mnemonicArray = [];
        for (let i = 0; i < wordsCount; i++) {
            let ind = await (0, getSecureRandom_1.getSecureRandomNumber)(0, wordlist_1.wordlist.length);
            mnemonicArray.push(wordlist_1.wordlist[ind]);
        }
        // Chek password conformance
        if (password && password.length > 0) {
            if (!await isPasswordNeeded(mnemonicArray)) {
                continue;
            }
        }
        // Check if basic seed correct
        if (!(await isBasicSeed(await mnemonicToEntropy(mnemonicArray, password)))) {
            continue;
        }
        break;
    }
    return mnemonicArray;
}
exports.mnemonicNew = mnemonicNew;
/**
 * Converts bytes to mnemonics array (could be invalid for TON)
 * @param src source buffer
 * @param wordsCount number of words
 */
function bytesToMnemonicIndexes(src, wordsCount) {
    let bits = (0, binary_1.bytesToBits)(src);
    let indexes = [];
    for (let i = 0; i < wordsCount; i++) {
        let sl = bits.slice(i * 11, i * 11 + 11);
        indexes.push(parseInt(sl, 2));
    }
    return indexes;
}
exports.bytesToMnemonicIndexes = bytesToMnemonicIndexes;
function bytesToMnemonics(src, wordsCount) {
    let mnemonics = bytesToMnemonicIndexes(src, wordsCount);
    let res = [];
    for (let m of mnemonics) {
        res.push(wordlist_1.wordlist[m]);
    }
    return res;
}
exports.bytesToMnemonics = bytesToMnemonics;
/**
 * Converts mnemonics indexes to buffer with zero padding in the end
 * @param src source indexes
 * @returns Buffer
 */
function mnemonicIndexesToBytes(src) {
    let res = '';
    for (let s of src) {
        if (!Number.isSafeInteger(s)) {
            throw Error('Invalid input');
        }
        if (s < 0 || s >= 2028) {
            throw Error('Invalid input');
        }
        res += (0, binary_1.lpad)(s.toString(2), '0', 11);
    }
    while (res.length % 8 !== 0) {
        res = res + '0';
    }
    return (0, binary_1.bitsToBytes)(res);
}
exports.mnemonicIndexesToBytes = mnemonicIndexesToBytes;
/**
 * Generates deterministically mnemonics
 * @param seed
 * @param wordsCount
 * @param password
 */
async function mnemonicFromRandomSeed(seed, wordsCount = 24, password) {
    const bytesLength = Math.ceil(wordsCount * 11 / 8);
    let currentSeed = seed;
    while (true) {
        // Create entropy
        let entropy = await (0, pbkdf2_sha512_1.pbkdf2_sha512)(currentSeed, 'TON mnemonic seed', Math.max(1, Math.floor(PBKDF_ITERATIONS / 256)), bytesLength);
        // Create mnemonics
        let mnemonics = bytesToMnemonics(entropy, wordsCount);
        // Check if mnemonics are valid
        if (await mnemonicValidate(mnemonics, password)) {
            return mnemonics;
        }
        currentSeed = entropy;
    }
}
exports.mnemonicFromRandomSeed = mnemonicFromRandomSeed;


/***/ }),

/***/ 10574:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeCurrencyCollection = exports.loadCurrencyCollection = void 0;
const Dictionary_1 = __webpack_require__(97590);
;
function loadCurrencyCollection(slice) {
    const coins = slice.loadCoins();
    const other = slice.loadDict(Dictionary_1.Dictionary.Keys.Uint(32), Dictionary_1.Dictionary.Values.BigVarUint(5 /* log2(32) */));
    if (other.size === 0) {
        return { coins };
    }
    else {
        return { other, coins };
    }
}
exports.loadCurrencyCollection = loadCurrencyCollection;
function storeCurrencyCollection(collection) {
    return (builder) => {
        builder.storeCoins(collection.coins);
        if (collection.other) {
            builder.storeDict(collection.other);
        }
        else {
            builder.storeBit(0);
        }
    };
}
exports.storeCurrencyCollection = storeCurrencyCollection;


/***/ }),

/***/ 11065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransactionCreditPhase = exports.loadTransactionCreditPhase = void 0;
const CurrencyCollection_1 = __webpack_require__(10574);
function loadTransactionCreditPhase(slice) {
    const dueFeesColelcted = slice.loadBit() ? slice.loadCoins() : undefined;
    const credit = (0, CurrencyCollection_1.loadCurrencyCollection)(slice);
    return {
        dueFeesColelcted,
        credit
    };
}
exports.loadTransactionCreditPhase = loadTransactionCreditPhase;
function storeTransactionCreditPhase(src) {
    return (builder) => {
        if (src.dueFeesColelcted === null || src.dueFeesColelcted === undefined) {
            builder.storeBit(false);
        }
        else {
            builder.storeBit(true);
            builder.storeCoins(src.dueFeesColelcted);
        }
        builder.store((0, CurrencyCollection_1.storeCurrencyCollection)(src.credit));
    };
}
exports.storeTransactionCreditPhase = storeTransactionCreditPhase;


/***/ }),

/***/ 12202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bitsToBytes = exports.bytesToBits = exports.lpad = void 0;
function lpad(str, padString, length) {
    while (str.length < length) {
        str = padString + str;
    }
    return str;
}
exports.lpad = lpad;
function bytesToBits(bytes) {
    let res = '';
    for (let i = 0; i < bytes.length; i++) {
        let x = bytes.at(i);
        res += lpad(x.toString(2), '0', 8);
    }
    return res;
}
exports.bytesToBits = bytesToBits;
function bitsToBytes(src) {
    if (src.length % 8 !== 0) {
        throw Error('Uneven bits');
    }
    let res = [];
    while (src.length > 0) {
        res.push(parseInt(src.slice(0, 8), 2));
        src = src.slice(8);
    }
    return Buffer.from(res);
}
exports.bitsToBytes = bitsToBytes;


/***/ }),

/***/ 13543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransactionDescription = exports.loadTransactionDescription = void 0;
const Builder_1 = __webpack_require__(65871);
const SplitMergeInfo_1 = __webpack_require__(49589);
const Transaction_1 = __webpack_require__(96305);
const TransactionActionPhase_1 = __webpack_require__(464);
const TransactionBouncePhase_1 = __webpack_require__(35726);
const TransactionComputePhase_1 = __webpack_require__(53857);
const TransactionCreditPhase_1 = __webpack_require__(11065);
const TransactionStoragePhase_1 = __webpack_require__(58353);
function loadTransactionDescription(slice) {
    let type = slice.loadUint(4);
    if (type === 0x00) {
        const creditFirst = slice.loadBit();
        let storagePhase = undefined;
        if (slice.loadBit()) {
            storagePhase = (0, TransactionStoragePhase_1.loadTransactionStoragePhase)(slice);
        }
        let creditPhase = undefined;
        if (slice.loadBit()) {
            creditPhase = (0, TransactionCreditPhase_1.loadTransactionCreditPhase)(slice);
        }
        let computePhase = (0, TransactionComputePhase_1.loadTransactionComputePhase)(slice);
        let actionPhase = undefined;
        if (slice.loadBit()) {
            actionPhase = (0, TransactionActionPhase_1.loadTransactionActionPhase)(slice.loadRef().beginParse());
        }
        let aborted = slice.loadBit();
        let bouncePhase = undefined;
        if (slice.loadBit()) {
            bouncePhase = (0, TransactionBouncePhase_1.loadTransactionBouncePhase)(slice);
        }
        const destroyed = slice.loadBit();
        return {
            type: 'generic',
            creditFirst,
            storagePhase,
            creditPhase,
            computePhase,
            actionPhase,
            bouncePhase,
            aborted,
            destroyed
        };
    }
    if (type === 0x01) {
        return {
            type: 'storage',
            storagePhase: (0, TransactionStoragePhase_1.loadTransactionStoragePhase)(slice)
        };
    }
    if (type === 0x2 || type === 0x03) {
        const isTock = type === 0x03;
        let storagePhase = (0, TransactionStoragePhase_1.loadTransactionStoragePhase)(slice);
        let computePhase = (0, TransactionComputePhase_1.loadTransactionComputePhase)(slice);
        let actionPhase = undefined;
        if (slice.loadBit()) {
            actionPhase = (0, TransactionActionPhase_1.loadTransactionActionPhase)(slice.loadRef().beginParse());
        }
        const aborted = slice.loadBit();
        const destroyed = slice.loadBit();
        return {
            type: 'tick-tock',
            isTock,
            storagePhase,
            computePhase,
            actionPhase,
            aborted,
            destroyed
        };
    }
    if (type === 0x04) {
        let splitInfo = (0, SplitMergeInfo_1.loadSplitMergeInfo)(slice);
        let storagePhase = undefined;
        if (slice.loadBit()) {
            storagePhase = (0, TransactionStoragePhase_1.loadTransactionStoragePhase)(slice);
        }
        let computePhase = (0, TransactionComputePhase_1.loadTransactionComputePhase)(slice);
        let actionPhase = undefined;
        if (slice.loadBit()) {
            actionPhase = (0, TransactionActionPhase_1.loadTransactionActionPhase)(slice.loadRef().beginParse());
        }
        const aborted = slice.loadBit();
        const destroyed = slice.loadBit();
        return {
            type: 'split-prepare',
            splitInfo,
            storagePhase,
            computePhase,
            actionPhase,
            aborted,
            destroyed
        };
    }
    if (type === 0x05) {
        let splitInfo = (0, SplitMergeInfo_1.loadSplitMergeInfo)(slice);
        let prepareTransaction = (0, Transaction_1.loadTransaction)(slice.loadRef().beginParse());
        const installed = slice.loadBit();
        return {
            type: 'split-install',
            splitInfo,
            prepareTransaction,
            installed
        };
    }
    throw Error(`Unsupported transaction description type ${type}`);
}
exports.loadTransactionDescription = loadTransactionDescription;
function storeTransactionDescription(src) {
    return (builder) => {
        if (src.type === 'generic') {
            builder.storeUint(0x00, 4);
            builder.storeBit(src.creditFirst);
            if (src.storagePhase) {
                builder.storeBit(true);
                builder.store((0, TransactionStoragePhase_1.storeTransactionsStoragePhase)(src.storagePhase));
            }
            else {
                builder.storeBit(false);
            }
            if (src.creditPhase) {
                builder.storeBit(true);
                builder.store((0, TransactionCreditPhase_1.storeTransactionCreditPhase)(src.creditPhase));
            }
            else {
                builder.storeBit(false);
            }
            builder.store((0, TransactionComputePhase_1.storeTransactionComputePhase)(src.computePhase));
            if (src.actionPhase) {
                builder.storeBit(true);
                builder.storeRef((0, Builder_1.beginCell)().store((0, TransactionActionPhase_1.storeTransactionActionPhase)(src.actionPhase)));
            }
            else {
                builder.storeBit(false);
            }
            builder.storeBit(src.aborted);
            if (src.bouncePhase) {
                builder.storeBit(true);
                builder.store((0, TransactionBouncePhase_1.storeTransactionBouncePhase)(src.bouncePhase));
            }
            else {
                builder.storeBit(false);
            }
            builder.storeBit(src.destroyed);
        }
        else if (src.type === 'storage') {
            builder.storeUint(0x01, 4);
            builder.store((0, TransactionStoragePhase_1.storeTransactionsStoragePhase)(src.storagePhase));
        }
        else if (src.type === 'tick-tock') {
            builder.storeUint(src.isTock ? 0x03 : 0x02, 4);
            builder.store((0, TransactionStoragePhase_1.storeTransactionsStoragePhase)(src.storagePhase));
            builder.store((0, TransactionComputePhase_1.storeTransactionComputePhase)(src.computePhase));
            if (src.actionPhase) {
                builder.storeBit(true);
                builder.storeRef((0, Builder_1.beginCell)().store((0, TransactionActionPhase_1.storeTransactionActionPhase)(src.actionPhase)));
            }
            else {
                builder.storeBit(false);
            }
            builder.storeBit(src.aborted);
            builder.storeBit(src.destroyed);
        }
        else if (src.type === 'split-prepare') {
            builder.storeUint(0x04, 4);
            builder.store((0, SplitMergeInfo_1.storeSplitMergeInfo)(src.splitInfo));
            if (src.storagePhase) {
                builder.storeBit(true);
                builder.store((0, TransactionStoragePhase_1.storeTransactionsStoragePhase)(src.storagePhase));
            }
            else {
                builder.storeBit(false);
            }
            builder.store((0, TransactionComputePhase_1.storeTransactionComputePhase)(src.computePhase));
            if (src.actionPhase) {
                builder.storeBit(true);
                builder.store((0, TransactionActionPhase_1.storeTransactionActionPhase)(src.actionPhase));
            }
            else {
                builder.storeBit(false);
            }
            builder.storeBit(src.aborted);
            builder.storeBit(src.destroyed);
        }
        else if (src.type === 'split-install') {
            builder.storeUint(0x05, 4);
            builder.store((0, SplitMergeInfo_1.storeSplitMergeInfo)(src.splitInfo));
            builder.storeRef((0, Builder_1.beginCell)().store((0, Transaction_1.storeTransaction)(src.prepareTransaction)));
            builder.storeBit(src.installed);
        }
        else {
            throw Error(`Unsupported transaction description type ${src.type}`);
        }
    };
}
exports.storeTransactionDescription = storeTransactionDescription;


/***/ }),

/***/ 14568:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SendMode = void 0;
var SendMode;
(function (SendMode) {
    SendMode[SendMode["CARRY_ALL_REMAINING_BALANCE"] = 128] = "CARRY_ALL_REMAINING_BALANCE";
    SendMode[SendMode["CARRY_ALL_REMAINING_INCOMING_VALUE"] = 64] = "CARRY_ALL_REMAINING_INCOMING_VALUE";
    SendMode[SendMode["DESTROY_ACCOUNT_IF_ZERO"] = 32] = "DESTROY_ACCOUNT_IF_ZERO";
    SendMode[SendMode["PAY_GAS_SEPARATELY"] = 1] = "PAY_GAS_SEPARATELY";
    SendMode[SendMode["IGNORE_ERRORS"] = 2] = "IGNORE_ERRORS";
    SendMode[SendMode["NONE"] = 0] = "NONE";
})(SendMode || (exports.SendMode = SendMode = {}));


/***/ }),

/***/ 14660:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeHashUpdate = exports.loadHashUpdate = void 0;
function loadHashUpdate(slice) {
    if (slice.loadUint(8) !== 0x72) {
        throw Error('Invalid data');
    }
    const oldHash = slice.loadBuffer(32);
    const newHash = slice.loadBuffer(32);
    return { oldHash, newHash };
}
exports.loadHashUpdate = loadHashUpdate;
function storeHashUpdate(src) {
    return (builder) => {
        builder.storeUint(0x72, 8);
        builder.storeBuffer(src.oldHash);
        builder.storeBuffer(src.newHash);
    };
}
exports.storeHashUpdate = storeHashUpdate;


/***/ }),

/***/ 16767:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.bitsForNumber = void 0;
function bitsForNumber(src, mode) {
    let v = BigInt(src);
    // Handle negative values
    if (mode === 'int') {
        // Corner case for zero or -1 value
        if (v === 0n || v === -1n) {
            return 1;
        }
        let v2 = v > 0 ? v : -v;
        return (v2.toString(2).length + 1 /* Sign bit */);
    }
    else if (mode === 'uint') {
        if (v < 0) {
            throw Error(`value is negative. Got ${src}`);
        }
        return (v.toString(2).length);
    }
    else {
        throw Error(`invalid mode. Got ${mode}`);
    }
}
exports.bitsForNumber = bitsForNumber;


/***/ }),

/***/ 17796:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openBox = exports.sealBox = exports.signVerify = exports.sign = exports.keyPairFromSeed = exports.keyPairFromSecretKey = void 0;
const tweetnacl_1 = __importDefault(__webpack_require__(88947));
function keyPairFromSecretKey(secretKey) {
    let res = tweetnacl_1.default.sign.keyPair.fromSecretKey(new Uint8Array(secretKey));
    return {
        publicKey: Buffer.from(res.publicKey),
        secretKey: Buffer.from(res.secretKey),
    };
}
exports.keyPairFromSecretKey = keyPairFromSecretKey;
function keyPairFromSeed(secretKey) {
    let res = tweetnacl_1.default.sign.keyPair.fromSeed(new Uint8Array(secretKey));
    return {
        publicKey: Buffer.from(res.publicKey),
        secretKey: Buffer.from(res.secretKey),
    };
}
exports.keyPairFromSeed = keyPairFromSeed;
function sign(data, secretKey) {
    return Buffer.from(tweetnacl_1.default.sign.detached(new Uint8Array(data), new Uint8Array(secretKey)));
}
exports.sign = sign;
function signVerify(data, signature, publicKey) {
    return tweetnacl_1.default.sign.detached.verify(new Uint8Array(data), new Uint8Array(signature), new Uint8Array(publicKey));
}
exports.signVerify = signVerify;
function sealBox(data, nonce, key) {
    return Buffer.from(tweetnacl_1.default.secretbox(data, nonce, key));
}
exports.sealBox = sealBox;
function openBox(data, nonce, key) {
    let res = tweetnacl_1.default.secretbox.open(data, nonce, key);
    if (!res) {
        return null;
    }
    return Buffer.from(res);
}
exports.openBox = openBox;


/***/ }),

/***/ 20555:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LevelMask = void 0;
class LevelMask {
    constructor(mask = 0) {
        this._mask = 0;
        this._mask = mask;
        this._hashIndex = countSetBits(this._mask);
        this._hashCount = this._hashIndex + 1;
    }
    get value() {
        return this._mask;
    }
    get level() {
        return 32 - Math.clz32(this._mask);
    }
    get hashIndex() {
        return this._hashIndex;
    }
    get hashCount() {
        return this._hashCount;
    }
    apply(level) {
        return new LevelMask(this._mask & ((1 << level) - 1));
    }
    isSignificant(level) {
        let res = level === 0 || (this._mask >> (level - 1)) % 2 !== 0;
        return res;
        // bool res = level == 0 | | ( (mask_ >> (level -1)) % 2 != 0);
    }
}
exports.LevelMask = LevelMask;
function countSetBits(n) {
    n = n - ((n >> 1) & 0x55555555);
    n = (n & 0x33333333) + ((n >> 2) & 0x33333333);
    return ((n + (n >> 4) & 0xF0F0F0F) * 0x1010101) >> 24;
}


/***/ }),

/***/ 20706:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wordlist = void 0;
// Source https://www.eff.org/dice
exports.wordlist = [
    'abacus',
    'abdomen',
    'abdominal',
    'abide',
    'abiding',
    'ability',
    'ablaze',
    'able',
    'abnormal',
    'abrasion',
    'abrasive',
    'abreast',
    'abridge',
    'abroad',
    'abruptly',
    'absence',
    'absentee',
    'absently',
    'absinthe',
    'absolute',
    'absolve',
    'abstain',
    'abstract',
    'absurd',
    'accent',
    'acclaim',
    'acclimate',
    'accompany',
    'account',
    'accuracy',
    'accurate',
    'accustom',
    'acetone',
    'achiness',
    'aching',
    'acid',
    'acorn',
    'acquaint',
    'acquire',
    'acre',
    'acrobat',
    'acronym',
    'acting',
    'action',
    'activate',
    'activator',
    'active',
    'activism',
    'activist',
    'activity',
    'actress',
    'acts',
    'acutely',
    'acuteness',
    'aeration',
    'aerobics',
    'aerosol',
    'aerospace',
    'afar',
    'affair',
    'affected',
    'affecting',
    'affection',
    'affidavit',
    'affiliate',
    'affirm',
    'affix',
    'afflicted',
    'affluent',
    'afford',
    'affront',
    'aflame',
    'afloat',
    'aflutter',
    'afoot',
    'afraid',
    'afterglow',
    'afterlife',
    'aftermath',
    'aftermost',
    'afternoon',
    'aged',
    'ageless',
    'agency',
    'agenda',
    'agent',
    'aggregate',
    'aghast',
    'agile',
    'agility',
    'aging',
    'agnostic',
    'agonize',
    'agonizing',
    'agony',
    'agreeable',
    'agreeably',
    'agreed',
    'agreeing',
    'agreement',
    'aground',
    'ahead',
    'ahoy',
    'aide',
    'aids',
    'aim',
    'ajar',
    'alabaster',
    'alarm',
    'albatross',
    'album',
    'alfalfa',
    'algebra',
    'algorithm',
    'alias',
    'alibi',
    'alienable',
    'alienate',
    'aliens',
    'alike',
    'alive',
    'alkaline',
    'alkalize',
    'almanac',
    'almighty',
    'almost',
    'aloe',
    'aloft',
    'aloha',
    'alone',
    'alongside',
    'aloof',
    'alphabet',
    'alright',
    'although',
    'altitude',
    'alto',
    'aluminum',
    'alumni',
    'always',
    'amaretto',
    'amaze',
    'amazingly',
    'amber',
    'ambiance',
    'ambiguity',
    'ambiguous',
    'ambition',
    'ambitious',
    'ambulance',
    'ambush',
    'amendable',
    'amendment',
    'amends',
    'amenity',
    'amiable',
    'amicably',
    'amid',
    'amigo',
    'amino',
    'amiss',
    'ammonia',
    'ammonium',
    'amnesty',
    'amniotic',
    'among',
    'amount',
    'amperage',
    'ample',
    'amplifier',
    'amplify',
    'amply',
    'amuck',
    'amulet',
    'amusable',
    'amused',
    'amusement',
    'amuser',
    'amusing',
    'anaconda',
    'anaerobic',
    'anagram',
    'anatomist',
    'anatomy',
    'anchor',
    'anchovy',
    'ancient',
    'android',
    'anemia',
    'anemic',
    'aneurism',
    'anew',
    'angelfish',
    'angelic',
    'anger',
    'angled',
    'angler',
    'angles',
    'angling',
    'angrily',
    'angriness',
    'anguished',
    'angular',
    'animal',
    'animate',
    'animating',
    'animation',
    'animator',
    'anime',
    'animosity',
    'ankle',
    'annex',
    'annotate',
    'announcer',
    'annoying',
    'annually',
    'annuity',
    'anointer',
    'another',
    'answering',
    'antacid',
    'antarctic',
    'anteater',
    'antelope',
    'antennae',
    'anthem',
    'anthill',
    'anthology',
    'antibody',
    'antics',
    'antidote',
    'antihero',
    'antiquely',
    'antiques',
    'antiquity',
    'antirust',
    'antitoxic',
    'antitrust',
    'antiviral',
    'antivirus',
    'antler',
    'antonym',
    'antsy',
    'anvil',
    'anybody',
    'anyhow',
    'anymore',
    'anyone',
    'anyplace',
    'anything',
    'anytime',
    'anyway',
    'anywhere',
    'aorta',
    'apache',
    'apostle',
    'appealing',
    'appear',
    'appease',
    'appeasing',
    'appendage',
    'appendix',
    'appetite',
    'appetizer',
    'applaud',
    'applause',
    'apple',
    'appliance',
    'applicant',
    'applied',
    'apply',
    'appointee',
    'appraisal',
    'appraiser',
    'apprehend',
    'approach',
    'approval',
    'approve',
    'apricot',
    'april',
    'apron',
    'aptitude',
    'aptly',
    'aqua',
    'aqueduct',
    'arbitrary',
    'arbitrate',
    'ardently',
    'area',
    'arena',
    'arguable',
    'arguably',
    'argue',
    'arise',
    'armadillo',
    'armband',
    'armchair',
    'armed',
    'armful',
    'armhole',
    'arming',
    'armless',
    'armoire',
    'armored',
    'armory',
    'armrest',
    'army',
    'aroma',
    'arose',
    'around',
    'arousal',
    'arrange',
    'array',
    'arrest',
    'arrival',
    'arrive',
    'arrogance',
    'arrogant',
    'arson',
    'art',
    'ascend',
    'ascension',
    'ascent',
    'ascertain',
    'ashamed',
    'ashen',
    'ashes',
    'ashy',
    'aside',
    'askew',
    'asleep',
    'asparagus',
    'aspect',
    'aspirate',
    'aspire',
    'aspirin',
    'astonish',
    'astound',
    'astride',
    'astrology',
    'astronaut',
    'astronomy',
    'astute',
    'atlantic',
    'atlas',
    'atom',
    'atonable',
    'atop',
    'atrium',
    'atrocious',
    'atrophy',
    'attach',
    'attain',
    'attempt',
    'attendant',
    'attendee',
    'attention',
    'attentive',
    'attest',
    'attic',
    'attire',
    'attitude',
    'attractor',
    'attribute',
    'atypical',
    'auction',
    'audacious',
    'audacity',
    'audible',
    'audibly',
    'audience',
    'audio',
    'audition',
    'augmented',
    'august',
    'authentic',
    'author',
    'autism',
    'autistic',
    'autograph',
    'automaker',
    'automated',
    'automatic',
    'autopilot',
    'available',
    'avalanche',
    'avatar',
    'avenge',
    'avenging',
    'avenue',
    'average',
    'aversion',
    'avert',
    'aviation',
    'aviator',
    'avid',
    'avoid',
    'await',
    'awaken',
    'award',
    'aware',
    'awhile',
    'awkward',
    'awning',
    'awoke',
    'awry',
    'axis',
    'babble',
    'babbling',
    'babied',
    'baboon',
    'backache',
    'backboard',
    'backboned',
    'backdrop',
    'backed',
    'backer',
    'backfield',
    'backfire',
    'backhand',
    'backing',
    'backlands',
    'backlash',
    'backless',
    'backlight',
    'backlit',
    'backlog',
    'backpack',
    'backpedal',
    'backrest',
    'backroom',
    'backshift',
    'backside',
    'backslid',
    'backspace',
    'backspin',
    'backstab',
    'backstage',
    'backtalk',
    'backtrack',
    'backup',
    'backward',
    'backwash',
    'backwater',
    'backyard',
    'bacon',
    'bacteria',
    'bacterium',
    'badass',
    'badge',
    'badland',
    'badly',
    'badness',
    'baffle',
    'baffling',
    'bagel',
    'bagful',
    'baggage',
    'bagged',
    'baggie',
    'bagginess',
    'bagging',
    'baggy',
    'bagpipe',
    'baguette',
    'baked',
    'bakery',
    'bakeshop',
    'baking',
    'balance',
    'balancing',
    'balcony',
    'balmy',
    'balsamic',
    'bamboo',
    'banana',
    'banish',
    'banister',
    'banjo',
    'bankable',
    'bankbook',
    'banked',
    'banker',
    'banking',
    'banknote',
    'bankroll',
    'banner',
    'bannister',
    'banshee',
    'banter',
    'barbecue',
    'barbed',
    'barbell',
    'barber',
    'barcode',
    'barge',
    'bargraph',
    'barista',
    'baritone',
    'barley',
    'barmaid',
    'barman',
    'barn',
    'barometer',
    'barrack',
    'barracuda',
    'barrel',
    'barrette',
    'barricade',
    'barrier',
    'barstool',
    'bartender',
    'barterer',
    'bash',
    'basically',
    'basics',
    'basil',
    'basin',
    'basis',
    'basket',
    'batboy',
    'batch',
    'bath',
    'baton',
    'bats',
    'battalion',
    'battered',
    'battering',
    'battery',
    'batting',
    'battle',
    'bauble',
    'bazooka',
    'blabber',
    'bladder',
    'blade',
    'blah',
    'blame',
    'blaming',
    'blanching',
    'blandness',
    'blank',
    'blaspheme',
    'blasphemy',
    'blast',
    'blatancy',
    'blatantly',
    'blazer',
    'blazing',
    'bleach',
    'bleak',
    'bleep',
    'blemish',
    'blend',
    'bless',
    'blighted',
    'blimp',
    'bling',
    'blinked',
    'blinker',
    'blinking',
    'blinks',
    'blip',
    'blissful',
    'blitz',
    'blizzard',
    'bloated',
    'bloating',
    'blob',
    'blog',
    'bloomers',
    'blooming',
    'blooper',
    'blot',
    'blouse',
    'blubber',
    'bluff',
    'bluish',
    'blunderer',
    'blunt',
    'blurb',
    'blurred',
    'blurry',
    'blurt',
    'blush',
    'blustery',
    'boaster',
    'boastful',
    'boasting',
    'boat',
    'bobbed',
    'bobbing',
    'bobble',
    'bobcat',
    'bobsled',
    'bobtail',
    'bodacious',
    'body',
    'bogged',
    'boggle',
    'bogus',
    'boil',
    'bok',
    'bolster',
    'bolt',
    'bonanza',
    'bonded',
    'bonding',
    'bondless',
    'boned',
    'bonehead',
    'boneless',
    'bonelike',
    'boney',
    'bonfire',
    'bonnet',
    'bonsai',
    'bonus',
    'bony',
    'boogeyman',
    'boogieman',
    'book',
    'boondocks',
    'booted',
    'booth',
    'bootie',
    'booting',
    'bootlace',
    'bootleg',
    'boots',
    'boozy',
    'borax',
    'boring',
    'borough',
    'borrower',
    'borrowing',
    'boss',
    'botanical',
    'botanist',
    'botany',
    'botch',
    'both',
    'bottle',
    'bottling',
    'bottom',
    'bounce',
    'bouncing',
    'bouncy',
    'bounding',
    'boundless',
    'bountiful',
    'bovine',
    'boxcar',
    'boxer',
    'boxing',
    'boxlike',
    'boxy',
    'breach',
    'breath',
    'breeches',
    'breeching',
    'breeder',
    'breeding',
    'breeze',
    'breezy',
    'brethren',
    'brewery',
    'brewing',
    'briar',
    'bribe',
    'brick',
    'bride',
    'bridged',
    'brigade',
    'bright',
    'brilliant',
    'brim',
    'bring',
    'brink',
    'brisket',
    'briskly',
    'briskness',
    'bristle',
    'brittle',
    'broadband',
    'broadcast',
    'broaden',
    'broadly',
    'broadness',
    'broadside',
    'broadways',
    'broiler',
    'broiling',
    'broken',
    'broker',
    'bronchial',
    'bronco',
    'bronze',
    'bronzing',
    'brook',
    'broom',
    'brought',
    'browbeat',
    'brownnose',
    'browse',
    'browsing',
    'bruising',
    'brunch',
    'brunette',
    'brunt',
    'brush',
    'brussels',
    'brute',
    'brutishly',
    'bubble',
    'bubbling',
    'bubbly',
    'buccaneer',
    'bucked',
    'bucket',
    'buckle',
    'buckshot',
    'buckskin',
    'bucktooth',
    'buckwheat',
    'buddhism',
    'buddhist',
    'budding',
    'buddy',
    'budget',
    'buffalo',
    'buffed',
    'buffer',
    'buffing',
    'buffoon',
    'buggy',
    'bulb',
    'bulge',
    'bulginess',
    'bulgur',
    'bulk',
    'bulldog',
    'bulldozer',
    'bullfight',
    'bullfrog',
    'bullhorn',
    'bullion',
    'bullish',
    'bullpen',
    'bullring',
    'bullseye',
    'bullwhip',
    'bully',
    'bunch',
    'bundle',
    'bungee',
    'bunion',
    'bunkbed',
    'bunkhouse',
    'bunkmate',
    'bunny',
    'bunt',
    'busboy',
    'bush',
    'busily',
    'busload',
    'bust',
    'busybody',
    'buzz',
    'cabana',
    'cabbage',
    'cabbie',
    'cabdriver',
    'cable',
    'caboose',
    'cache',
    'cackle',
    'cacti',
    'cactus',
    'caddie',
    'caddy',
    'cadet',
    'cadillac',
    'cadmium',
    'cage',
    'cahoots',
    'cake',
    'calamari',
    'calamity',
    'calcium',
    'calculate',
    'calculus',
    'caliber',
    'calibrate',
    'calm',
    'caloric',
    'calorie',
    'calzone',
    'camcorder',
    'cameo',
    'camera',
    'camisole',
    'camper',
    'campfire',
    'camping',
    'campsite',
    'campus',
    'canal',
    'canary',
    'cancel',
    'candied',
    'candle',
    'candy',
    'cane',
    'canine',
    'canister',
    'cannabis',
    'canned',
    'canning',
    'cannon',
    'cannot',
    'canola',
    'canon',
    'canopener',
    'canopy',
    'canteen',
    'canyon',
    'capable',
    'capably',
    'capacity',
    'cape',
    'capillary',
    'capital',
    'capitol',
    'capped',
    'capricorn',
    'capsize',
    'capsule',
    'caption',
    'captivate',
    'captive',
    'captivity',
    'capture',
    'caramel',
    'carat',
    'caravan',
    'carbon',
    'cardboard',
    'carded',
    'cardiac',
    'cardigan',
    'cardinal',
    'cardstock',
    'carefully',
    'caregiver',
    'careless',
    'caress',
    'caretaker',
    'cargo',
    'caring',
    'carless',
    'carload',
    'carmaker',
    'carnage',
    'carnation',
    'carnival',
    'carnivore',
    'carol',
    'carpenter',
    'carpentry',
    'carpool',
    'carport',
    'carried',
    'carrot',
    'carrousel',
    'carry',
    'cartel',
    'cartload',
    'carton',
    'cartoon',
    'cartridge',
    'cartwheel',
    'carve',
    'carving',
    'carwash',
    'cascade',
    'case',
    'cash',
    'casing',
    'casino',
    'casket',
    'cassette',
    'casually',
    'casualty',
    'catacomb',
    'catalog',
    'catalyst',
    'catalyze',
    'catapult',
    'cataract',
    'catatonic',
    'catcall',
    'catchable',
    'catcher',
    'catching',
    'catchy',
    'caterer',
    'catering',
    'catfight',
    'catfish',
    'cathedral',
    'cathouse',
    'catlike',
    'catnap',
    'catnip',
    'catsup',
    'cattail',
    'cattishly',
    'cattle',
    'catty',
    'catwalk',
    'caucasian',
    'caucus',
    'causal',
    'causation',
    'cause',
    'causing',
    'cauterize',
    'caution',
    'cautious',
    'cavalier',
    'cavalry',
    'caviar',
    'cavity',
    'cedar',
    'celery',
    'celestial',
    'celibacy',
    'celibate',
    'celtic',
    'cement',
    'census',
    'ceramics',
    'ceremony',
    'certainly',
    'certainty',
    'certified',
    'certify',
    'cesarean',
    'cesspool',
    'chafe',
    'chaffing',
    'chain',
    'chair',
    'chalice',
    'challenge',
    'chamber',
    'chamomile',
    'champion',
    'chance',
    'change',
    'channel',
    'chant',
    'chaos',
    'chaperone',
    'chaplain',
    'chapped',
    'chaps',
    'chapter',
    'character',
    'charbroil',
    'charcoal',
    'charger',
    'charging',
    'chariot',
    'charity',
    'charm',
    'charred',
    'charter',
    'charting',
    'chase',
    'chasing',
    'chaste',
    'chastise',
    'chastity',
    'chatroom',
    'chatter',
    'chatting',
    'chatty',
    'cheating',
    'cheddar',
    'cheek',
    'cheer',
    'cheese',
    'cheesy',
    'chef',
    'chemicals',
    'chemist',
    'chemo',
    'cherisher',
    'cherub',
    'chess',
    'chest',
    'chevron',
    'chevy',
    'chewable',
    'chewer',
    'chewing',
    'chewy',
    'chief',
    'chihuahua',
    'childcare',
    'childhood',
    'childish',
    'childless',
    'childlike',
    'chili',
    'chill',
    'chimp',
    'chip',
    'chirping',
    'chirpy',
    'chitchat',
    'chivalry',
    'chive',
    'chloride',
    'chlorine',
    'choice',
    'chokehold',
    'choking',
    'chomp',
    'chooser',
    'choosing',
    'choosy',
    'chop',
    'chosen',
    'chowder',
    'chowtime',
    'chrome',
    'chubby',
    'chuck',
    'chug',
    'chummy',
    'chump',
    'chunk',
    'churn',
    'chute',
    'cider',
    'cilantro',
    'cinch',
    'cinema',
    'cinnamon',
    'circle',
    'circling',
    'circular',
    'circulate',
    'circus',
    'citable',
    'citadel',
    'citation',
    'citizen',
    'citric',
    'citrus',
    'city',
    'civic',
    'civil',
    'clad',
    'claim',
    'clambake',
    'clammy',
    'clamor',
    'clamp',
    'clamshell',
    'clang',
    'clanking',
    'clapped',
    'clapper',
    'clapping',
    'clarify',
    'clarinet',
    'clarity',
    'clash',
    'clasp',
    'class',
    'clatter',
    'clause',
    'clavicle',
    'claw',
    'clay',
    'clean',
    'clear',
    'cleat',
    'cleaver',
    'cleft',
    'clench',
    'clergyman',
    'clerical',
    'clerk',
    'clever',
    'clicker',
    'client',
    'climate',
    'climatic',
    'cling',
    'clinic',
    'clinking',
    'clip',
    'clique',
    'cloak',
    'clobber',
    'clock',
    'clone',
    'cloning',
    'closable',
    'closure',
    'clothes',
    'clothing',
    'cloud',
    'clover',
    'clubbed',
    'clubbing',
    'clubhouse',
    'clump',
    'clumsily',
    'clumsy',
    'clunky',
    'clustered',
    'clutch',
    'clutter',
    'coach',
    'coagulant',
    'coastal',
    'coaster',
    'coasting',
    'coastland',
    'coastline',
    'coat',
    'coauthor',
    'cobalt',
    'cobbler',
    'cobweb',
    'cocoa',
    'coconut',
    'cod',
    'coeditor',
    'coerce',
    'coexist',
    'coffee',
    'cofounder',
    'cognition',
    'cognitive',
    'cogwheel',
    'coherence',
    'coherent',
    'cohesive',
    'coil',
    'coke',
    'cola',
    'cold',
    'coleslaw',
    'coliseum',
    'collage',
    'collapse',
    'collar',
    'collected',
    'collector',
    'collide',
    'collie',
    'collision',
    'colonial',
    'colonist',
    'colonize',
    'colony',
    'colossal',
    'colt',
    'coma',
    'come',
    'comfort',
    'comfy',
    'comic',
    'coming',
    'comma',
    'commence',
    'commend',
    'comment',
    'commerce',
    'commode',
    'commodity',
    'commodore',
    'common',
    'commotion',
    'commute',
    'commuting',
    'compacted',
    'compacter',
    'compactly',
    'compactor',
    'companion',
    'company',
    'compare',
    'compel',
    'compile',
    'comply',
    'component',
    'composed',
    'composer',
    'composite',
    'compost',
    'composure',
    'compound',
    'compress',
    'comprised',
    'computer',
    'computing',
    'comrade',
    'concave',
    'conceal',
    'conceded',
    'concept',
    'concerned',
    'concert',
    'conch',
    'concierge',
    'concise',
    'conclude',
    'concrete',
    'concur',
    'condense',
    'condiment',
    'condition',
    'condone',
    'conducive',
    'conductor',
    'conduit',
    'cone',
    'confess',
    'confetti',
    'confidant',
    'confident',
    'confider',
    'confiding',
    'configure',
    'confined',
    'confining',
    'confirm',
    'conflict',
    'conform',
    'confound',
    'confront',
    'confused',
    'confusing',
    'confusion',
    'congenial',
    'congested',
    'congrats',
    'congress',
    'conical',
    'conjoined',
    'conjure',
    'conjuror',
    'connected',
    'connector',
    'consensus',
    'consent',
    'console',
    'consoling',
    'consonant',
    'constable',
    'constant',
    'constrain',
    'constrict',
    'construct',
    'consult',
    'consumer',
    'consuming',
    'contact',
    'container',
    'contempt',
    'contend',
    'contented',
    'contently',
    'contents',
    'contest',
    'context',
    'contort',
    'contour',
    'contrite',
    'control',
    'contusion',
    'convene',
    'convent',
    'copartner',
    'cope',
    'copied',
    'copier',
    'copilot',
    'coping',
    'copious',
    'copper',
    'copy',
    'coral',
    'cork',
    'cornball',
    'cornbread',
    'corncob',
    'cornea',
    'corned',
    'corner',
    'cornfield',
    'cornflake',
    'cornhusk',
    'cornmeal',
    'cornstalk',
    'corny',
    'coronary',
    'coroner',
    'corporal',
    'corporate',
    'corral',
    'correct',
    'corridor',
    'corrode',
    'corroding',
    'corrosive',
    'corsage',
    'corset',
    'cortex',
    'cosigner',
    'cosmetics',
    'cosmic',
    'cosmos',
    'cosponsor',
    'cost',
    'cottage',
    'cotton',
    'couch',
    'cough',
    'could',
    'countable',
    'countdown',
    'counting',
    'countless',
    'country',
    'county',
    'courier',
    'covenant',
    'cover',
    'coveted',
    'coveting',
    'coyness',
    'cozily',
    'coziness',
    'cozy',
    'crabbing',
    'crabgrass',
    'crablike',
    'crabmeat',
    'cradle',
    'cradling',
    'crafter',
    'craftily',
    'craftsman',
    'craftwork',
    'crafty',
    'cramp',
    'cranberry',
    'crane',
    'cranial',
    'cranium',
    'crank',
    'crate',
    'crave',
    'craving',
    'crawfish',
    'crawlers',
    'crawling',
    'crayfish',
    'crayon',
    'crazed',
    'crazily',
    'craziness',
    'crazy',
    'creamed',
    'creamer',
    'creamlike',
    'crease',
    'creasing',
    'creatable',
    'create',
    'creation',
    'creative',
    'creature',
    'credible',
    'credibly',
    'credit',
    'creed',
    'creme',
    'creole',
    'crepe',
    'crept',
    'crescent',
    'crested',
    'cresting',
    'crestless',
    'crevice',
    'crewless',
    'crewman',
    'crewmate',
    'crib',
    'cricket',
    'cried',
    'crier',
    'crimp',
    'crimson',
    'cringe',
    'cringing',
    'crinkle',
    'crinkly',
    'crisped',
    'crisping',
    'crisply',
    'crispness',
    'crispy',
    'criteria',
    'critter',
    'croak',
    'crock',
    'crook',
    'croon',
    'crop',
    'cross',
    'crouch',
    'crouton',
    'crowbar',
    'crowd',
    'crown',
    'crucial',
    'crudely',
    'crudeness',
    'cruelly',
    'cruelness',
    'cruelty',
    'crumb',
    'crummiest',
    'crummy',
    'crumpet',
    'crumpled',
    'cruncher',
    'crunching',
    'crunchy',
    'crusader',
    'crushable',
    'crushed',
    'crusher',
    'crushing',
    'crust',
    'crux',
    'crying',
    'cryptic',
    'crystal',
    'cubbyhole',
    'cube',
    'cubical',
    'cubicle',
    'cucumber',
    'cuddle',
    'cuddly',
    'cufflink',
    'culinary',
    'culminate',
    'culpable',
    'culprit',
    'cultivate',
    'cultural',
    'culture',
    'cupbearer',
    'cupcake',
    'cupid',
    'cupped',
    'cupping',
    'curable',
    'curator',
    'curdle',
    'cure',
    'curfew',
    'curing',
    'curled',
    'curler',
    'curliness',
    'curling',
    'curly',
    'curry',
    'curse',
    'cursive',
    'cursor',
    'curtain',
    'curtly',
    'curtsy',
    'curvature',
    'curve',
    'curvy',
    'cushy',
    'cusp',
    'cussed',
    'custard',
    'custodian',
    'custody',
    'customary',
    'customer',
    'customize',
    'customs',
    'cut',
    'cycle',
    'cyclic',
    'cycling',
    'cyclist',
    'cylinder',
    'cymbal',
    'cytoplasm',
    'cytoplast',
    'dab',
    'dad',
    'daffodil',
    'dagger',
    'daily',
    'daintily',
    'dainty',
    'dairy',
    'daisy',
    'dallying',
    'dance',
    'dancing',
    'dandelion',
    'dander',
    'dandruff',
    'dandy',
    'danger',
    'dangle',
    'dangling',
    'daredevil',
    'dares',
    'daringly',
    'darkened',
    'darkening',
    'darkish',
    'darkness',
    'darkroom',
    'darling',
    'darn',
    'dart',
    'darwinism',
    'dash',
    'dastardly',
    'data',
    'datebook',
    'dating',
    'daughter',
    'daunting',
    'dawdler',
    'dawn',
    'daybed',
    'daybreak',
    'daycare',
    'daydream',
    'daylight',
    'daylong',
    'dayroom',
    'daytime',
    'dazzler',
    'dazzling',
    'deacon',
    'deafening',
    'deafness',
    'dealer',
    'dealing',
    'dealmaker',
    'dealt',
    'dean',
    'debatable',
    'debate',
    'debating',
    'debit',
    'debrief',
    'debtless',
    'debtor',
    'debug',
    'debunk',
    'decade',
    'decaf',
    'decal',
    'decathlon',
    'decay',
    'deceased',
    'deceit',
    'deceiver',
    'deceiving',
    'december',
    'decency',
    'decent',
    'deception',
    'deceptive',
    'decibel',
    'decidable',
    'decimal',
    'decimeter',
    'decipher',
    'deck',
    'declared',
    'decline',
    'decode',
    'decompose',
    'decorated',
    'decorator',
    'decoy',
    'decrease',
    'decree',
    'dedicate',
    'dedicator',
    'deduce',
    'deduct',
    'deed',
    'deem',
    'deepen',
    'deeply',
    'deepness',
    'deface',
    'defacing',
    'defame',
    'default',
    'defeat',
    'defection',
    'defective',
    'defendant',
    'defender',
    'defense',
    'defensive',
    'deferral',
    'deferred',
    'defiance',
    'defiant',
    'defile',
    'defiling',
    'define',
    'definite',
    'deflate',
    'deflation',
    'deflator',
    'deflected',
    'deflector',
    'defog',
    'deforest',
    'defraud',
    'defrost',
    'deftly',
    'defuse',
    'defy',
    'degraded',
    'degrading',
    'degrease',
    'degree',
    'dehydrate',
    'deity',
    'dejected',
    'delay',
    'delegate',
    'delegator',
    'delete',
    'deletion',
    'delicacy',
    'delicate',
    'delicious',
    'delighted',
    'delirious',
    'delirium',
    'deliverer',
    'delivery',
    'delouse',
    'delta',
    'deluge',
    'delusion',
    'deluxe',
    'demanding',
    'demeaning',
    'demeanor',
    'demise',
    'democracy',
    'democrat',
    'demote',
    'demotion',
    'demystify',
    'denatured',
    'deniable',
    'denial',
    'denim',
    'denote',
    'dense',
    'density',
    'dental',
    'dentist',
    'denture',
    'deny',
    'deodorant',
    'deodorize',
    'departed',
    'departure',
    'depict',
    'deplete',
    'depletion',
    'deplored',
    'deploy',
    'deport',
    'depose',
    'depraved',
    'depravity',
    'deprecate',
    'depress',
    'deprive',
    'depth',
    'deputize',
    'deputy',
    'derail',
    'deranged',
    'derby',
    'derived',
    'desecrate',
    'deserve',
    'deserving',
    'designate',
    'designed',
    'designer',
    'designing',
    'deskbound',
    'desktop',
    'deskwork',
    'desolate',
    'despair',
    'despise',
    'despite',
    'destiny',
    'destitute',
    'destruct',
    'detached',
    'detail',
    'detection',
    'detective',
    'detector',
    'detention',
    'detergent',
    'detest',
    'detonate',
    'detonator',
    'detoxify',
    'detract',
    'deuce',
    'devalue',
    'deviancy',
    'deviant',
    'deviate',
    'deviation',
    'deviator',
    'device',
    'devious',
    'devotedly',
    'devotee',
    'devotion',
    'devourer',
    'devouring',
    'devoutly',
    'dexterity',
    'dexterous',
    'diabetes',
    'diabetic',
    'diabolic',
    'diagnoses',
    'diagnosis',
    'diagram',
    'dial',
    'diameter',
    'diaper',
    'diaphragm',
    'diary',
    'dice',
    'dicing',
    'dictate',
    'dictation',
    'dictator',
    'difficult',
    'diffused',
    'diffuser',
    'diffusion',
    'diffusive',
    'dig',
    'dilation',
    'diligence',
    'diligent',
    'dill',
    'dilute',
    'dime',
    'diminish',
    'dimly',
    'dimmed',
    'dimmer',
    'dimness',
    'dimple',
    'diner',
    'dingbat',
    'dinghy',
    'dinginess',
    'dingo',
    'dingy',
    'dining',
    'dinner',
    'diocese',
    'dioxide',
    'diploma',
    'dipped',
    'dipper',
    'dipping',
    'directed',
    'direction',
    'directive',
    'directly',
    'directory',
    'direness',
    'dirtiness',
    'disabled',
    'disagree',
    'disallow',
    'disarm',
    'disarray',
    'disaster',
    'disband',
    'disbelief',
    'disburse',
    'discard',
    'discern',
    'discharge',
    'disclose',
    'discolor',
    'discount',
    'discourse',
    'discover',
    'discuss',
    'disdain',
    'disengage',
    'disfigure',
    'disgrace',
    'dish',
    'disinfect',
    'disjoin',
    'disk',
    'dislike',
    'disliking',
    'dislocate',
    'dislodge',
    'disloyal',
    'dismantle',
    'dismay',
    'dismiss',
    'dismount',
    'disobey',
    'disorder',
    'disown',
    'disparate',
    'disparity',
    'dispatch',
    'dispense',
    'dispersal',
    'dispersed',
    'disperser',
    'displace',
    'display',
    'displease',
    'disposal',
    'dispose',
    'disprove',
    'dispute',
    'disregard',
    'disrupt',
    'dissuade',
    'distance',
    'distant',
    'distaste',
    'distill',
    'distinct',
    'distort',
    'distract',
    'distress',
    'district',
    'distrust',
    'ditch',
    'ditto',
    'ditzy',
    'dividable',
    'divided',
    'dividend',
    'dividers',
    'dividing',
    'divinely',
    'diving',
    'divinity',
    'divisible',
    'divisibly',
    'division',
    'divisive',
    'divorcee',
    'dizziness',
    'dizzy',
    'doable',
    'docile',
    'dock',
    'doctrine',
    'document',
    'dodge',
    'dodgy',
    'doily',
    'doing',
    'dole',
    'dollar',
    'dollhouse',
    'dollop',
    'dolly',
    'dolphin',
    'domain',
    'domelike',
    'domestic',
    'dominion',
    'dominoes',
    'donated',
    'donation',
    'donator',
    'donor',
    'donut',
    'doodle',
    'doorbell',
    'doorframe',
    'doorknob',
    'doorman',
    'doormat',
    'doornail',
    'doorpost',
    'doorstep',
    'doorstop',
    'doorway',
    'doozy',
    'dork',
    'dormitory',
    'dorsal',
    'dosage',
    'dose',
    'dotted',
    'doubling',
    'douche',
    'dove',
    'down',
    'dowry',
    'doze',
    'drab',
    'dragging',
    'dragonfly',
    'dragonish',
    'dragster',
    'drainable',
    'drainage',
    'drained',
    'drainer',
    'drainpipe',
    'dramatic',
    'dramatize',
    'drank',
    'drapery',
    'drastic',
    'draw',
    'dreaded',
    'dreadful',
    'dreadlock',
    'dreamboat',
    'dreamily',
    'dreamland',
    'dreamless',
    'dreamlike',
    'dreamt',
    'dreamy',
    'drearily',
    'dreary',
    'drench',
    'dress',
    'drew',
    'dribble',
    'dried',
    'drier',
    'drift',
    'driller',
    'drilling',
    'drinkable',
    'drinking',
    'dripping',
    'drippy',
    'drivable',
    'driven',
    'driver',
    'driveway',
    'driving',
    'drizzle',
    'drizzly',
    'drone',
    'drool',
    'droop',
    'drop-down',
    'dropbox',
    'dropkick',
    'droplet',
    'dropout',
    'dropper',
    'drove',
    'drown',
    'drowsily',
    'drudge',
    'drum',
    'dry',
    'dubbed',
    'dubiously',
    'duchess',
    'duckbill',
    'ducking',
    'duckling',
    'ducktail',
    'ducky',
    'duct',
    'dude',
    'duffel',
    'dugout',
    'duh',
    'duke',
    'duller',
    'dullness',
    'duly',
    'dumping',
    'dumpling',
    'dumpster',
    'duo',
    'dupe',
    'duplex',
    'duplicate',
    'duplicity',
    'durable',
    'durably',
    'duration',
    'duress',
    'during',
    'dusk',
    'dust',
    'dutiful',
    'duty',
    'duvet',
    'dwarf',
    'dweeb',
    'dwelled',
    'dweller',
    'dwelling',
    'dwindle',
    'dwindling',
    'dynamic',
    'dynamite',
    'dynasty',
    'dyslexia',
    'dyslexic',
    'each',
    'eagle',
    'earache',
    'eardrum',
    'earflap',
    'earful',
    'earlobe',
    'early',
    'earmark',
    'earmuff',
    'earphone',
    'earpiece',
    'earplugs',
    'earring',
    'earshot',
    'earthen',
    'earthlike',
    'earthling',
    'earthly',
    'earthworm',
    'earthy',
    'earwig',
    'easeful',
    'easel',
    'easiest',
    'easily',
    'easiness',
    'easing',
    'eastbound',
    'eastcoast',
    'easter',
    'eastward',
    'eatable',
    'eaten',
    'eatery',
    'eating',
    'eats',
    'ebay',
    'ebony',
    'ebook',
    'ecard',
    'eccentric',
    'echo',
    'eclair',
    'eclipse',
    'ecologist',
    'ecology',
    'economic',
    'economist',
    'economy',
    'ecosphere',
    'ecosystem',
    'edge',
    'edginess',
    'edging',
    'edgy',
    'edition',
    'editor',
    'educated',
    'education',
    'educator',
    'eel',
    'effective',
    'effects',
    'efficient',
    'effort',
    'eggbeater',
    'egging',
    'eggnog',
    'eggplant',
    'eggshell',
    'egomaniac',
    'egotism',
    'egotistic',
    'either',
    'eject',
    'elaborate',
    'elastic',
    'elated',
    'elbow',
    'eldercare',
    'elderly',
    'eldest',
    'electable',
    'election',
    'elective',
    'elephant',
    'elevate',
    'elevating',
    'elevation',
    'elevator',
    'eleven',
    'elf',
    'eligible',
    'eligibly',
    'eliminate',
    'elite',
    'elitism',
    'elixir',
    'elk',
    'ellipse',
    'elliptic',
    'elm',
    'elongated',
    'elope',
    'eloquence',
    'eloquent',
    'elsewhere',
    'elude',
    'elusive',
    'elves',
    'email',
    'embargo',
    'embark',
    'embassy',
    'embattled',
    'embellish',
    'ember',
    'embezzle',
    'emblaze',
    'emblem',
    'embody',
    'embolism',
    'emboss',
    'embroider',
    'emcee',
    'emerald',
    'emergency',
    'emission',
    'emit',
    'emote',
    'emoticon',
    'emotion',
    'empathic',
    'empathy',
    'emperor',
    'emphases',
    'emphasis',
    'emphasize',
    'emphatic',
    'empirical',
    'employed',
    'employee',
    'employer',
    'emporium',
    'empower',
    'emptier',
    'emptiness',
    'empty',
    'emu',
    'enable',
    'enactment',
    'enamel',
    'enchanted',
    'enchilada',
    'encircle',
    'enclose',
    'enclosure',
    'encode',
    'encore',
    'encounter',
    'encourage',
    'encroach',
    'encrust',
    'encrypt',
    'endanger',
    'endeared',
    'endearing',
    'ended',
    'ending',
    'endless',
    'endnote',
    'endocrine',
    'endorphin',
    'endorse',
    'endowment',
    'endpoint',
    'endurable',
    'endurance',
    'enduring',
    'energetic',
    'energize',
    'energy',
    'enforced',
    'enforcer',
    'engaged',
    'engaging',
    'engine',
    'engorge',
    'engraved',
    'engraver',
    'engraving',
    'engross',
    'engulf',
    'enhance',
    'enigmatic',
    'enjoyable',
    'enjoyably',
    'enjoyer',
    'enjoying',
    'enjoyment',
    'enlarged',
    'enlarging',
    'enlighten',
    'enlisted',
    'enquirer',
    'enrage',
    'enrich',
    'enroll',
    'enslave',
    'ensnare',
    'ensure',
    'entail',
    'entangled',
    'entering',
    'entertain',
    'enticing',
    'entire',
    'entitle',
    'entity',
    'entomb',
    'entourage',
    'entrap',
    'entree',
    'entrench',
    'entrust',
    'entryway',
    'entwine',
    'enunciate',
    'envelope',
    'enviable',
    'enviably',
    'envious',
    'envision',
    'envoy',
    'envy',
    'enzyme',
    'epic',
    'epidemic',
    'epidermal',
    'epidermis',
    'epidural',
    'epilepsy',
    'epileptic',
    'epilogue',
    'epiphany',
    'episode',
    'equal',
    'equate',
    'equation',
    'equator',
    'equinox',
    'equipment',
    'equity',
    'equivocal',
    'eradicate',
    'erasable',
    'erased',
    'eraser',
    'erasure',
    'ergonomic',
    'errand',
    'errant',
    'erratic',
    'error',
    'erupt',
    'escalate',
    'escalator',
    'escapable',
    'escapade',
    'escapist',
    'escargot',
    'eskimo',
    'esophagus',
    'espionage',
    'espresso',
    'esquire',
    'essay',
    'essence',
    'essential',
    'establish',
    'estate',
    'esteemed',
    'estimate',
    'estimator',
    'estranged',
    'estrogen',
    'etching',
    'eternal',
    'eternity',
    'ethanol',
    'ether',
    'ethically',
    'ethics',
    'euphemism',
    'evacuate',
    'evacuee',
    'evade',
    'evaluate',
    'evaluator',
    'evaporate',
    'evasion',
    'evasive',
    'even',
    'everglade',
    'evergreen',
    'everybody',
    'everyday',
    'everyone',
    'evict',
    'evidence',
    'evident',
    'evil',
    'evoke',
    'evolution',
    'evolve',
    'exact',
    'exalted',
    'example',
    'excavate',
    'excavator',
    'exceeding',
    'exception',
    'excess',
    'exchange',
    'excitable',
    'exciting',
    'exclaim',
    'exclude',
    'excluding',
    'exclusion',
    'exclusive',
    'excretion',
    'excretory',
    'excursion',
    'excusable',
    'excusably',
    'excuse',
    'exemplary',
    'exemplify',
    'exemption',
    'exerciser',
    'exert',
    'exes',
    'exfoliate',
    'exhale',
    'exhaust',
    'exhume',
    'exile',
    'existing',
    'exit',
    'exodus',
    'exonerate',
    'exorcism',
    'exorcist',
    'expand',
    'expanse',
    'expansion',
    'expansive',
    'expectant',
    'expedited',
    'expediter',
    'expel',
    'expend',
    'expenses',
    'expensive',
    'expert',
    'expire',
    'expiring',
    'explain',
    'expletive',
    'explicit',
    'explode',
    'exploit',
    'explore',
    'exploring',
    'exponent',
    'exporter',
    'exposable',
    'expose',
    'exposure',
    'express',
    'expulsion',
    'exquisite',
    'extended',
    'extending',
    'extent',
    'extenuate',
    'exterior',
    'external',
    'extinct',
    'extortion',
    'extradite',
    'extras',
    'extrovert',
    'extrude',
    'extruding',
    'exuberant',
    'fable',
    'fabric',
    'fabulous',
    'facebook',
    'facecloth',
    'facedown',
    'faceless',
    'facelift',
    'faceplate',
    'faceted',
    'facial',
    'facility',
    'facing',
    'facsimile',
    'faction',
    'factoid',
    'factor',
    'factsheet',
    'factual',
    'faculty',
    'fade',
    'fading',
    'failing',
    'falcon',
    'fall',
    'false',
    'falsify',
    'fame',
    'familiar',
    'family',
    'famine',
    'famished',
    'fanatic',
    'fancied',
    'fanciness',
    'fancy',
    'fanfare',
    'fang',
    'fanning',
    'fantasize',
    'fantastic',
    'fantasy',
    'fascism',
    'fastball',
    'faster',
    'fasting',
    'fastness',
    'faucet',
    'favorable',
    'favorably',
    'favored',
    'favoring',
    'favorite',
    'fax',
    'feast',
    'federal',
    'fedora',
    'feeble',
    'feed',
    'feel',
    'feisty',
    'feline',
    'felt-tip',
    'feminine',
    'feminism',
    'feminist',
    'feminize',
    'femur',
    'fence',
    'fencing',
    'fender',
    'ferment',
    'fernlike',
    'ferocious',
    'ferocity',
    'ferret',
    'ferris',
    'ferry',
    'fervor',
    'fester',
    'festival',
    'festive',
    'festivity',
    'fetal',
    'fetch',
    'fever',
    'fiber',
    'fiction',
    'fiddle',
    'fiddling',
    'fidelity',
    'fidgeting',
    'fidgety',
    'fifteen',
    'fifth',
    'fiftieth',
    'fifty',
    'figment',
    'figure',
    'figurine',
    'filing',
    'filled',
    'filler',
    'filling',
    'film',
    'filter',
    'filth',
    'filtrate',
    'finale',
    'finalist',
    'finalize',
    'finally',
    'finance',
    'financial',
    'finch',
    'fineness',
    'finer',
    'finicky',
    'finished',
    'finisher',
    'finishing',
    'finite',
    'finless',
    'finlike',
    'fiscally',
    'fit',
    'five',
    'flaccid',
    'flagman',
    'flagpole',
    'flagship',
    'flagstick',
    'flagstone',
    'flail',
    'flakily',
    'flaky',
    'flame',
    'flammable',
    'flanked',
    'flanking',
    'flannels',
    'flap',
    'flaring',
    'flashback',
    'flashbulb',
    'flashcard',
    'flashily',
    'flashing',
    'flashy',
    'flask',
    'flatbed',
    'flatfoot',
    'flatly',
    'flatness',
    'flatten',
    'flattered',
    'flatterer',
    'flattery',
    'flattop',
    'flatware',
    'flatworm',
    'flavored',
    'flavorful',
    'flavoring',
    'flaxseed',
    'fled',
    'fleshed',
    'fleshy',
    'flick',
    'flier',
    'flight',
    'flinch',
    'fling',
    'flint',
    'flip',
    'flirt',
    'float',
    'flock',
    'flogging',
    'flop',
    'floral',
    'florist',
    'floss',
    'flounder',
    'flyable',
    'flyaway',
    'flyer',
    'flying',
    'flyover',
    'flypaper',
    'foam',
    'foe',
    'fog',
    'foil',
    'folic',
    'folk',
    'follicle',
    'follow',
    'fondling',
    'fondly',
    'fondness',
    'fondue',
    'font',
    'food',
    'fool',
    'footage',
    'football',
    'footbath',
    'footboard',
    'footer',
    'footgear',
    'foothill',
    'foothold',
    'footing',
    'footless',
    'footman',
    'footnote',
    'footpad',
    'footpath',
    'footprint',
    'footrest',
    'footsie',
    'footsore',
    'footwear',
    'footwork',
    'fossil',
    'foster',
    'founder',
    'founding',
    'fountain',
    'fox',
    'foyer',
    'fraction',
    'fracture',
    'fragile',
    'fragility',
    'fragment',
    'fragrance',
    'fragrant',
    'frail',
    'frame',
    'framing',
    'frantic',
    'fraternal',
    'frayed',
    'fraying',
    'frays',
    'freckled',
    'freckles',
    'freebase',
    'freebee',
    'freebie',
    'freedom',
    'freefall',
    'freehand',
    'freeing',
    'freeload',
    'freely',
    'freemason',
    'freeness',
    'freestyle',
    'freeware',
    'freeway',
    'freewill',
    'freezable',
    'freezing',
    'freight',
    'french',
    'frenzied',
    'frenzy',
    'frequency',
    'frequent',
    'fresh',
    'fretful',
    'fretted',
    'friction',
    'friday',
    'fridge',
    'fried',
    'friend',
    'frighten',
    'frightful',
    'frigidity',
    'frigidly',
    'frill',
    'fringe',
    'frisbee',
    'frisk',
    'fritter',
    'frivolous',
    'frolic',
    'from',
    'front',
    'frostbite',
    'frosted',
    'frostily',
    'frosting',
    'frostlike',
    'frosty',
    'froth',
    'frown',
    'frozen',
    'fructose',
    'frugality',
    'frugally',
    'fruit',
    'frustrate',
    'frying',
    'gab',
    'gaffe',
    'gag',
    'gainfully',
    'gaining',
    'gains',
    'gala',
    'gallantly',
    'galleria',
    'gallery',
    'galley',
    'gallon',
    'gallows',
    'gallstone',
    'galore',
    'galvanize',
    'gambling',
    'game',
    'gaming',
    'gamma',
    'gander',
    'gangly',
    'gangrene',
    'gangway',
    'gap',
    'garage',
    'garbage',
    'garden',
    'gargle',
    'garland',
    'garlic',
    'garment',
    'garnet',
    'garnish',
    'garter',
    'gas',
    'gatherer',
    'gathering',
    'gating',
    'gauging',
    'gauntlet',
    'gauze',
    'gave',
    'gawk',
    'gazing',
    'gear',
    'gecko',
    'geek',
    'geiger',
    'gem',
    'gender',
    'generic',
    'generous',
    'genetics',
    'genre',
    'gentile',
    'gentleman',
    'gently',
    'gents',
    'geography',
    'geologic',
    'geologist',
    'geology',
    'geometric',
    'geometry',
    'geranium',
    'gerbil',
    'geriatric',
    'germicide',
    'germinate',
    'germless',
    'germproof',
    'gestate',
    'gestation',
    'gesture',
    'getaway',
    'getting',
    'getup',
    'giant',
    'gibberish',
    'giblet',
    'giddily',
    'giddiness',
    'giddy',
    'gift',
    'gigabyte',
    'gigahertz',
    'gigantic',
    'giggle',
    'giggling',
    'giggly',
    'gigolo',
    'gilled',
    'gills',
    'gimmick',
    'girdle',
    'giveaway',
    'given',
    'giver',
    'giving',
    'gizmo',
    'gizzard',
    'glacial',
    'glacier',
    'glade',
    'gladiator',
    'gladly',
    'glamorous',
    'glamour',
    'glance',
    'glancing',
    'glandular',
    'glare',
    'glaring',
    'glass',
    'glaucoma',
    'glazing',
    'gleaming',
    'gleeful',
    'glider',
    'gliding',
    'glimmer',
    'glimpse',
    'glisten',
    'glitch',
    'glitter',
    'glitzy',
    'gloater',
    'gloating',
    'gloomily',
    'gloomy',
    'glorified',
    'glorifier',
    'glorify',
    'glorious',
    'glory',
    'gloss',
    'glove',
    'glowing',
    'glowworm',
    'glucose',
    'glue',
    'gluten',
    'glutinous',
    'glutton',
    'gnarly',
    'gnat',
    'goal',
    'goatskin',
    'goes',
    'goggles',
    'going',
    'goldfish',
    'goldmine',
    'goldsmith',
    'golf',
    'goliath',
    'gonad',
    'gondola',
    'gone',
    'gong',
    'good',
    'gooey',
    'goofball',
    'goofiness',
    'goofy',
    'google',
    'goon',
    'gopher',
    'gore',
    'gorged',
    'gorgeous',
    'gory',
    'gosling',
    'gossip',
    'gothic',
    'gotten',
    'gout',
    'gown',
    'grab',
    'graceful',
    'graceless',
    'gracious',
    'gradation',
    'graded',
    'grader',
    'gradient',
    'grading',
    'gradually',
    'graduate',
    'graffiti',
    'grafted',
    'grafting',
    'grain',
    'granddad',
    'grandkid',
    'grandly',
    'grandma',
    'grandpa',
    'grandson',
    'granite',
    'granny',
    'granola',
    'grant',
    'granular',
    'grape',
    'graph',
    'grapple',
    'grappling',
    'grasp',
    'grass',
    'gratified',
    'gratify',
    'grating',
    'gratitude',
    'gratuity',
    'gravel',
    'graveness',
    'graves',
    'graveyard',
    'gravitate',
    'gravity',
    'gravy',
    'gray',
    'grazing',
    'greasily',
    'greedily',
    'greedless',
    'greedy',
    'green',
    'greeter',
    'greeting',
    'grew',
    'greyhound',
    'grid',
    'grief',
    'grievance',
    'grieving',
    'grievous',
    'grill',
    'grimace',
    'grimacing',
    'grime',
    'griminess',
    'grimy',
    'grinch',
    'grinning',
    'grip',
    'gristle',
    'grit',
    'groggily',
    'groggy',
    'groin',
    'groom',
    'groove',
    'grooving',
    'groovy',
    'grope',
    'ground',
    'grouped',
    'grout',
    'grove',
    'grower',
    'growing',
    'growl',
    'grub',
    'grudge',
    'grudging',
    'grueling',
    'gruffly',
    'grumble',
    'grumbling',
    'grumbly',
    'grumpily',
    'grunge',
    'grunt',
    'guacamole',
    'guidable',
    'guidance',
    'guide',
    'guiding',
    'guileless',
    'guise',
    'gulf',
    'gullible',
    'gully',
    'gulp',
    'gumball',
    'gumdrop',
    'gumminess',
    'gumming',
    'gummy',
    'gurgle',
    'gurgling',
    'guru',
    'gush',
    'gusto',
    'gusty',
    'gutless',
    'guts',
    'gutter',
    'guy',
    'guzzler',
    'gyration',
    'habitable',
    'habitant',
    'habitat',
    'habitual',
    'hacked',
    'hacker',
    'hacking',
    'hacksaw',
    'had',
    'haggler',
    'haiku',
    'half',
    'halogen',
    'halt',
    'halved',
    'halves',
    'hamburger',
    'hamlet',
    'hammock',
    'hamper',
    'hamster',
    'hamstring',
    'handbag',
    'handball',
    'handbook',
    'handbrake',
    'handcart',
    'handclap',
    'handclasp',
    'handcraft',
    'handcuff',
    'handed',
    'handful',
    'handgrip',
    'handgun',
    'handheld',
    'handiness',
    'handiwork',
    'handlebar',
    'handled',
    'handler',
    'handling',
    'handmade',
    'handoff',
    'handpick',
    'handprint',
    'handrail',
    'handsaw',
    'handset',
    'handsfree',
    'handshake',
    'handstand',
    'handwash',
    'handwork',
    'handwoven',
    'handwrite',
    'handyman',
    'hangnail',
    'hangout',
    'hangover',
    'hangup',
    'hankering',
    'hankie',
    'hanky',
    'haphazard',
    'happening',
    'happier',
    'happiest',
    'happily',
    'happiness',
    'happy',
    'harbor',
    'hardcopy',
    'hardcore',
    'hardcover',
    'harddisk',
    'hardened',
    'hardener',
    'hardening',
    'hardhat',
    'hardhead',
    'hardiness',
    'hardly',
    'hardness',
    'hardship',
    'hardware',
    'hardwired',
    'hardwood',
    'hardy',
    'harmful',
    'harmless',
    'harmonica',
    'harmonics',
    'harmonize',
    'harmony',
    'harness',
    'harpist',
    'harsh',
    'harvest',
    'hash',
    'hassle',
    'haste',
    'hastily',
    'hastiness',
    'hasty',
    'hatbox',
    'hatchback',
    'hatchery',
    'hatchet',
    'hatching',
    'hatchling',
    'hate',
    'hatless',
    'hatred',
    'haunt',
    'haven',
    'hazard',
    'hazelnut',
    'hazily',
    'haziness',
    'hazing',
    'hazy',
    'headache',
    'headband',
    'headboard',
    'headcount',
    'headdress',
    'headed',
    'header',
    'headfirst',
    'headgear',
    'heading',
    'headlamp',
    'headless',
    'headlock',
    'headphone',
    'headpiece',
    'headrest',
    'headroom',
    'headscarf',
    'headset',
    'headsman',
    'headstand',
    'headstone',
    'headway',
    'headwear',
    'heap',
    'heat',
    'heave',
    'heavily',
    'heaviness',
    'heaving',
    'hedge',
    'hedging',
    'heftiness',
    'hefty',
    'helium',
    'helmet',
    'helper',
    'helpful',
    'helping',
    'helpless',
    'helpline',
    'hemlock',
    'hemstitch',
    'hence',
    'henchman',
    'henna',
    'herald',
    'herbal',
    'herbicide',
    'herbs',
    'heritage',
    'hermit',
    'heroics',
    'heroism',
    'herring',
    'herself',
    'hertz',
    'hesitancy',
    'hesitant',
    'hesitate',
    'hexagon',
    'hexagram',
    'hubcap',
    'huddle',
    'huddling',
    'huff',
    'hug',
    'hula',
    'hulk',
    'hull',
    'human',
    'humble',
    'humbling',
    'humbly',
    'humid',
    'humiliate',
    'humility',
    'humming',
    'hummus',
    'humongous',
    'humorist',
    'humorless',
    'humorous',
    'humpback',
    'humped',
    'humvee',
    'hunchback',
    'hundredth',
    'hunger',
    'hungrily',
    'hungry',
    'hunk',
    'hunter',
    'hunting',
    'huntress',
    'huntsman',
    'hurdle',
    'hurled',
    'hurler',
    'hurling',
    'hurray',
    'hurricane',
    'hurried',
    'hurry',
    'hurt',
    'husband',
    'hush',
    'husked',
    'huskiness',
    'hut',
    'hybrid',
    'hydrant',
    'hydrated',
    'hydration',
    'hydrogen',
    'hydroxide',
    'hyperlink',
    'hypertext',
    'hyphen',
    'hypnoses',
    'hypnosis',
    'hypnotic',
    'hypnotism',
    'hypnotist',
    'hypnotize',
    'hypocrisy',
    'hypocrite',
    'ibuprofen',
    'ice',
    'iciness',
    'icing',
    'icky',
    'icon',
    'icy',
    'idealism',
    'idealist',
    'idealize',
    'ideally',
    'idealness',
    'identical',
    'identify',
    'identity',
    'ideology',
    'idiocy',
    'idiom',
    'idly',
    'igloo',
    'ignition',
    'ignore',
    'iguana',
    'illicitly',
    'illusion',
    'illusive',
    'image',
    'imaginary',
    'imagines',
    'imaging',
    'imbecile',
    'imitate',
    'imitation',
    'immature',
    'immerse',
    'immersion',
    'imminent',
    'immobile',
    'immodest',
    'immorally',
    'immortal',
    'immovable',
    'immovably',
    'immunity',
    'immunize',
    'impaired',
    'impale',
    'impart',
    'impatient',
    'impeach',
    'impeding',
    'impending',
    'imperfect',
    'imperial',
    'impish',
    'implant',
    'implement',
    'implicate',
    'implicit',
    'implode',
    'implosion',
    'implosive',
    'imply',
    'impolite',
    'important',
    'importer',
    'impose',
    'imposing',
    'impotence',
    'impotency',
    'impotent',
    'impound',
    'imprecise',
    'imprint',
    'imprison',
    'impromptu',
    'improper',
    'improve',
    'improving',
    'improvise',
    'imprudent',
    'impulse',
    'impulsive',
    'impure',
    'impurity',
    'iodine',
    'iodize',
    'ion',
    'ipad',
    'iphone',
    'ipod',
    'irate',
    'irk',
    'iron',
    'irregular',
    'irrigate',
    'irritable',
    'irritably',
    'irritant',
    'irritate',
    'islamic',
    'islamist',
    'isolated',
    'isolating',
    'isolation',
    'isotope',
    'issue',
    'issuing',
    'italicize',
    'italics',
    'item',
    'itinerary',
    'itunes',
    'ivory',
    'ivy',
    'jab',
    'jackal',
    'jacket',
    'jackknife',
    'jackpot',
    'jailbird',
    'jailbreak',
    'jailer',
    'jailhouse',
    'jalapeno',
    'jam',
    'janitor',
    'january',
    'jargon',
    'jarring',
    'jasmine',
    'jaundice',
    'jaunt',
    'java',
    'jawed',
    'jawless',
    'jawline',
    'jaws',
    'jaybird',
    'jaywalker',
    'jazz',
    'jeep',
    'jeeringly',
    'jellied',
    'jelly',
    'jersey',
    'jester',
    'jet',
    'jiffy',
    'jigsaw',
    'jimmy',
    'jingle',
    'jingling',
    'jinx',
    'jitters',
    'jittery',
    'job',
    'jockey',
    'jockstrap',
    'jogger',
    'jogging',
    'john',
    'joining',
    'jokester',
    'jokingly',
    'jolliness',
    'jolly',
    'jolt',
    'jot',
    'jovial',
    'joyfully',
    'joylessly',
    'joyous',
    'joyride',
    'joystick',
    'jubilance',
    'jubilant',
    'judge',
    'judgingly',
    'judicial',
    'judiciary',
    'judo',
    'juggle',
    'juggling',
    'jugular',
    'juice',
    'juiciness',
    'juicy',
    'jujitsu',
    'jukebox',
    'july',
    'jumble',
    'jumbo',
    'jump',
    'junction',
    'juncture',
    'june',
    'junior',
    'juniper',
    'junkie',
    'junkman',
    'junkyard',
    'jurist',
    'juror',
    'jury',
    'justice',
    'justifier',
    'justify',
    'justly',
    'justness',
    'juvenile',
    'kabob',
    'kangaroo',
    'karaoke',
    'karate',
    'karma',
    'kebab',
    'keenly',
    'keenness',
    'keep',
    'keg',
    'kelp',
    'kennel',
    'kept',
    'kerchief',
    'kerosene',
    'kettle',
    'kick',
    'kiln',
    'kilobyte',
    'kilogram',
    'kilometer',
    'kilowatt',
    'kilt',
    'kimono',
    'kindle',
    'kindling',
    'kindly',
    'kindness',
    'kindred',
    'kinetic',
    'kinfolk',
    'king',
    'kinship',
    'kinsman',
    'kinswoman',
    'kissable',
    'kisser',
    'kissing',
    'kitchen',
    'kite',
    'kitten',
    'kitty',
    'kiwi',
    'kleenex',
    'knapsack',
    'knee',
    'knelt',
    'knickers',
    'knoll',
    'koala',
    'kooky',
    'kosher',
    'krypton',
    'kudos',
    'kung',
    'labored',
    'laborer',
    'laboring',
    'laborious',
    'labrador',
    'ladder',
    'ladies',
    'ladle',
    'ladybug',
    'ladylike',
    'lagged',
    'lagging',
    'lagoon',
    'lair',
    'lake',
    'lance',
    'landed',
    'landfall',
    'landfill',
    'landing',
    'landlady',
    'landless',
    'landline',
    'landlord',
    'landmark',
    'landmass',
    'landmine',
    'landowner',
    'landscape',
    'landside',
    'landslide',
    'language',
    'lankiness',
    'lanky',
    'lantern',
    'lapdog',
    'lapel',
    'lapped',
    'lapping',
    'laptop',
    'lard',
    'large',
    'lark',
    'lash',
    'lasso',
    'last',
    'latch',
    'late',
    'lather',
    'latitude',
    'latrine',
    'latter',
    'latticed',
    'launch',
    'launder',
    'laundry',
    'laurel',
    'lavender',
    'lavish',
    'laxative',
    'lazily',
    'laziness',
    'lazy',
    'lecturer',
    'left',
    'legacy',
    'legal',
    'legend',
    'legged',
    'leggings',
    'legible',
    'legibly',
    'legislate',
    'lego',
    'legroom',
    'legume',
    'legwarmer',
    'legwork',
    'lemon',
    'lend',
    'length',
    'lens',
    'lent',
    'leotard',
    'lesser',
    'letdown',
    'lethargic',
    'lethargy',
    'letter',
    'lettuce',
    'level',
    'leverage',
    'levers',
    'levitate',
    'levitator',
    'liability',
    'liable',
    'liberty',
    'librarian',
    'library',
    'licking',
    'licorice',
    'lid',
    'life',
    'lifter',
    'lifting',
    'liftoff',
    'ligament',
    'likely',
    'likeness',
    'likewise',
    'liking',
    'lilac',
    'lilly',
    'lily',
    'limb',
    'limeade',
    'limelight',
    'limes',
    'limit',
    'limping',
    'limpness',
    'line',
    'lingo',
    'linguini',
    'linguist',
    'lining',
    'linked',
    'linoleum',
    'linseed',
    'lint',
    'lion',
    'lip',
    'liquefy',
    'liqueur',
    'liquid',
    'lisp',
    'list',
    'litigate',
    'litigator',
    'litmus',
    'litter',
    'little',
    'livable',
    'lived',
    'lively',
    'liver',
    'livestock',
    'lividly',
    'living',
    'lizard',
    'lubricant',
    'lubricate',
    'lucid',
    'luckily',
    'luckiness',
    'luckless',
    'lucrative',
    'ludicrous',
    'lugged',
    'lukewarm',
    'lullaby',
    'lumber',
    'luminance',
    'luminous',
    'lumpiness',
    'lumping',
    'lumpish',
    'lunacy',
    'lunar',
    'lunchbox',
    'luncheon',
    'lunchroom',
    'lunchtime',
    'lung',
    'lurch',
    'lure',
    'luridness',
    'lurk',
    'lushly',
    'lushness',
    'luster',
    'lustfully',
    'lustily',
    'lustiness',
    'lustrous',
    'lusty',
    'luxurious',
    'luxury',
    'lying',
    'lyrically',
    'lyricism',
    'lyricist',
    'lyrics',
    'macarena',
    'macaroni',
    'macaw',
    'mace',
    'machine',
    'machinist',
    'magazine',
    'magenta',
    'maggot',
    'magical',
    'magician',
    'magma',
    'magnesium',
    'magnetic',
    'magnetism',
    'magnetize',
    'magnifier',
    'magnify',
    'magnitude',
    'magnolia',
    'mahogany',
    'maimed',
    'majestic',
    'majesty',
    'majorette',
    'majority',
    'makeover',
    'maker',
    'makeshift',
    'making',
    'malformed',
    'malt',
    'mama',
    'mammal',
    'mammary',
    'mammogram',
    'manager',
    'managing',
    'manatee',
    'mandarin',
    'mandate',
    'mandatory',
    'mandolin',
    'manger',
    'mangle',
    'mango',
    'mangy',
    'manhandle',
    'manhole',
    'manhood',
    'manhunt',
    'manicotti',
    'manicure',
    'manifesto',
    'manila',
    'mankind',
    'manlike',
    'manliness',
    'manly',
    'manmade',
    'manned',
    'mannish',
    'manor',
    'manpower',
    'mantis',
    'mantra',
    'manual',
    'many',
    'map',
    'marathon',
    'marauding',
    'marbled',
    'marbles',
    'marbling',
    'march',
    'mardi',
    'margarine',
    'margarita',
    'margin',
    'marigold',
    'marina',
    'marine',
    'marital',
    'maritime',
    'marlin',
    'marmalade',
    'maroon',
    'married',
    'marrow',
    'marry',
    'marshland',
    'marshy',
    'marsupial',
    'marvelous',
    'marxism',
    'mascot',
    'masculine',
    'mashed',
    'mashing',
    'massager',
    'masses',
    'massive',
    'mastiff',
    'matador',
    'matchbook',
    'matchbox',
    'matcher',
    'matching',
    'matchless',
    'material',
    'maternal',
    'maternity',
    'math',
    'mating',
    'matriarch',
    'matrimony',
    'matrix',
    'matron',
    'matted',
    'matter',
    'maturely',
    'maturing',
    'maturity',
    'mauve',
    'maverick',
    'maximize',
    'maximum',
    'maybe',
    'mayday',
    'mayflower',
    'moaner',
    'moaning',
    'mobile',
    'mobility',
    'mobilize',
    'mobster',
    'mocha',
    'mocker',
    'mockup',
    'modified',
    'modify',
    'modular',
    'modulator',
    'module',
    'moisten',
    'moistness',
    'moisture',
    'molar',
    'molasses',
    'mold',
    'molecular',
    'molecule',
    'molehill',
    'mollusk',
    'mom',
    'monastery',
    'monday',
    'monetary',
    'monetize',
    'moneybags',
    'moneyless',
    'moneywise',
    'mongoose',
    'mongrel',
    'monitor',
    'monkhood',
    'monogamy',
    'monogram',
    'monologue',
    'monopoly',
    'monorail',
    'monotone',
    'monotype',
    'monoxide',
    'monsieur',
    'monsoon',
    'monstrous',
    'monthly',
    'monument',
    'moocher',
    'moodiness',
    'moody',
    'mooing',
    'moonbeam',
    'mooned',
    'moonlight',
    'moonlike',
    'moonlit',
    'moonrise',
    'moonscape',
    'moonshine',
    'moonstone',
    'moonwalk',
    'mop',
    'morale',
    'morality',
    'morally',
    'morbidity',
    'morbidly',
    'morphine',
    'morphing',
    'morse',
    'mortality',
    'mortally',
    'mortician',
    'mortified',
    'mortify',
    'mortuary',
    'mosaic',
    'mossy',
    'most',
    'mothball',
    'mothproof',
    'motion',
    'motivate',
    'motivator',
    'motive',
    'motocross',
    'motor',
    'motto',
    'mountable',
    'mountain',
    'mounted',
    'mounting',
    'mourner',
    'mournful',
    'mouse',
    'mousiness',
    'moustache',
    'mousy',
    'mouth',
    'movable',
    'move',
    'movie',
    'moving',
    'mower',
    'mowing',
    'much',
    'muck',
    'mud',
    'mug',
    'mulberry',
    'mulch',
    'mule',
    'mulled',
    'mullets',
    'multiple',
    'multiply',
    'multitask',
    'multitude',
    'mumble',
    'mumbling',
    'mumbo',
    'mummified',
    'mummify',
    'mummy',
    'mumps',
    'munchkin',
    'mundane',
    'municipal',
    'muppet',
    'mural',
    'murkiness',
    'murky',
    'murmuring',
    'muscular',
    'museum',
    'mushily',
    'mushiness',
    'mushroom',
    'mushy',
    'music',
    'musket',
    'muskiness',
    'musky',
    'mustang',
    'mustard',
    'muster',
    'mustiness',
    'musty',
    'mutable',
    'mutate',
    'mutation',
    'mute',
    'mutilated',
    'mutilator',
    'mutiny',
    'mutt',
    'mutual',
    'muzzle',
    'myself',
    'myspace',
    'mystified',
    'mystify',
    'myth',
    'nacho',
    'nag',
    'nail',
    'name',
    'naming',
    'nanny',
    'nanometer',
    'nape',
    'napkin',
    'napped',
    'napping',
    'nappy',
    'narrow',
    'nastily',
    'nastiness',
    'national',
    'native',
    'nativity',
    'natural',
    'nature',
    'naturist',
    'nautical',
    'navigate',
    'navigator',
    'navy',
    'nearby',
    'nearest',
    'nearly',
    'nearness',
    'neatly',
    'neatness',
    'nebula',
    'nebulizer',
    'nectar',
    'negate',
    'negation',
    'negative',
    'neglector',
    'negligee',
    'negligent',
    'negotiate',
    'nemeses',
    'nemesis',
    'neon',
    'nephew',
    'nerd',
    'nervous',
    'nervy',
    'nest',
    'net',
    'neurology',
    'neuron',
    'neurosis',
    'neurotic',
    'neuter',
    'neutron',
    'never',
    'next',
    'nibble',
    'nickname',
    'nicotine',
    'niece',
    'nifty',
    'nimble',
    'nimbly',
    'nineteen',
    'ninetieth',
    'ninja',
    'nintendo',
    'ninth',
    'nuclear',
    'nuclei',
    'nucleus',
    'nugget',
    'nullify',
    'number',
    'numbing',
    'numbly',
    'numbness',
    'numeral',
    'numerate',
    'numerator',
    'numeric',
    'numerous',
    'nuptials',
    'nursery',
    'nursing',
    'nurture',
    'nutcase',
    'nutlike',
    'nutmeg',
    'nutrient',
    'nutshell',
    'nuttiness',
    'nutty',
    'nuzzle',
    'nylon',
    'oaf',
    'oak',
    'oasis',
    'oat',
    'obedience',
    'obedient',
    'obituary',
    'object',
    'obligate',
    'obliged',
    'oblivion',
    'oblivious',
    'oblong',
    'obnoxious',
    'oboe',
    'obscure',
    'obscurity',
    'observant',
    'observer',
    'observing',
    'obsessed',
    'obsession',
    'obsessive',
    'obsolete',
    'obstacle',
    'obstinate',
    'obstruct',
    'obtain',
    'obtrusive',
    'obtuse',
    'obvious',
    'occultist',
    'occupancy',
    'occupant',
    'occupier',
    'occupy',
    'ocean',
    'ocelot',
    'octagon',
    'octane',
    'october',
    'octopus',
    'ogle',
    'oil',
    'oink',
    'ointment',
    'okay',
    'old',
    'olive',
    'olympics',
    'omega',
    'omen',
    'ominous',
    'omission',
    'omit',
    'omnivore',
    'onboard',
    'oncoming',
    'ongoing',
    'onion',
    'online',
    'onlooker',
    'only',
    'onscreen',
    'onset',
    'onshore',
    'onslaught',
    'onstage',
    'onto',
    'onward',
    'onyx',
    'oops',
    'ooze',
    'oozy',
    'opacity',
    'opal',
    'open',
    'operable',
    'operate',
    'operating',
    'operation',
    'operative',
    'operator',
    'opium',
    'opossum',
    'opponent',
    'oppose',
    'opposing',
    'opposite',
    'oppressed',
    'oppressor',
    'opt',
    'opulently',
    'osmosis',
    'other',
    'otter',
    'ouch',
    'ought',
    'ounce',
    'outage',
    'outback',
    'outbid',
    'outboard',
    'outbound',
    'outbreak',
    'outburst',
    'outcast',
    'outclass',
    'outcome',
    'outdated',
    'outdoors',
    'outer',
    'outfield',
    'outfit',
    'outflank',
    'outgoing',
    'outgrow',
    'outhouse',
    'outing',
    'outlast',
    'outlet',
    'outline',
    'outlook',
    'outlying',
    'outmatch',
    'outmost',
    'outnumber',
    'outplayed',
    'outpost',
    'outpour',
    'output',
    'outrage',
    'outrank',
    'outreach',
    'outright',
    'outscore',
    'outsell',
    'outshine',
    'outshoot',
    'outsider',
    'outskirts',
    'outsmart',
    'outsource',
    'outspoken',
    'outtakes',
    'outthink',
    'outward',
    'outweigh',
    'outwit',
    'oval',
    'ovary',
    'oven',
    'overact',
    'overall',
    'overarch',
    'overbid',
    'overbill',
    'overbite',
    'overblown',
    'overboard',
    'overbook',
    'overbuilt',
    'overcast',
    'overcoat',
    'overcome',
    'overcook',
    'overcrowd',
    'overdraft',
    'overdrawn',
    'overdress',
    'overdrive',
    'overdue',
    'overeager',
    'overeater',
    'overexert',
    'overfed',
    'overfeed',
    'overfill',
    'overflow',
    'overfull',
    'overgrown',
    'overhand',
    'overhang',
    'overhaul',
    'overhead',
    'overhear',
    'overheat',
    'overhung',
    'overjoyed',
    'overkill',
    'overlabor',
    'overlaid',
    'overlap',
    'overlay',
    'overload',
    'overlook',
    'overlord',
    'overlying',
    'overnight',
    'overpass',
    'overpay',
    'overplant',
    'overplay',
    'overpower',
    'overprice',
    'overrate',
    'overreach',
    'overreact',
    'override',
    'overripe',
    'overrule',
    'overrun',
    'overshoot',
    'overshot',
    'oversight',
    'oversized',
    'oversleep',
    'oversold',
    'overspend',
    'overstate',
    'overstay',
    'overstep',
    'overstock',
    'overstuff',
    'oversweet',
    'overtake',
    'overthrow',
    'overtime',
    'overtly',
    'overtone',
    'overture',
    'overturn',
    'overuse',
    'overvalue',
    'overview',
    'overwrite',
    'owl',
    'oxford',
    'oxidant',
    'oxidation',
    'oxidize',
    'oxidizing',
    'oxygen',
    'oxymoron',
    'oyster',
    'ozone',
    'paced',
    'pacemaker',
    'pacific',
    'pacifier',
    'pacifism',
    'pacifist',
    'pacify',
    'padded',
    'padding',
    'paddle',
    'paddling',
    'padlock',
    'pagan',
    'pager',
    'paging',
    'pajamas',
    'palace',
    'palatable',
    'palm',
    'palpable',
    'palpitate',
    'paltry',
    'pampered',
    'pamperer',
    'pampers',
    'pamphlet',
    'panama',
    'pancake',
    'pancreas',
    'panda',
    'pandemic',
    'pang',
    'panhandle',
    'panic',
    'panning',
    'panorama',
    'panoramic',
    'panther',
    'pantomime',
    'pantry',
    'pants',
    'pantyhose',
    'paparazzi',
    'papaya',
    'paper',
    'paprika',
    'papyrus',
    'parabola',
    'parachute',
    'parade',
    'paradox',
    'paragraph',
    'parakeet',
    'paralegal',
    'paralyses',
    'paralysis',
    'paralyze',
    'paramedic',
    'parameter',
    'paramount',
    'parasail',
    'parasite',
    'parasitic',
    'parcel',
    'parched',
    'parchment',
    'pardon',
    'parish',
    'parka',
    'parking',
    'parkway',
    'parlor',
    'parmesan',
    'parole',
    'parrot',
    'parsley',
    'parsnip',
    'partake',
    'parted',
    'parting',
    'partition',
    'partly',
    'partner',
    'partridge',
    'party',
    'passable',
    'passably',
    'passage',
    'passcode',
    'passenger',
    'passerby',
    'passing',
    'passion',
    'passive',
    'passivism',
    'passover',
    'passport',
    'password',
    'pasta',
    'pasted',
    'pastel',
    'pastime',
    'pastor',
    'pastrami',
    'pasture',
    'pasty',
    'patchwork',
    'patchy',
    'paternal',
    'paternity',
    'path',
    'patience',
    'patient',
    'patio',
    'patriarch',
    'patriot',
    'patrol',
    'patronage',
    'patronize',
    'pauper',
    'pavement',
    'paver',
    'pavestone',
    'pavilion',
    'paving',
    'pawing',
    'payable',
    'payback',
    'paycheck',
    'payday',
    'payee',
    'payer',
    'paying',
    'payment',
    'payphone',
    'payroll',
    'pebble',
    'pebbly',
    'pecan',
    'pectin',
    'peculiar',
    'peddling',
    'pediatric',
    'pedicure',
    'pedigree',
    'pedometer',
    'pegboard',
    'pelican',
    'pellet',
    'pelt',
    'pelvis',
    'penalize',
    'penalty',
    'pencil',
    'pendant',
    'pending',
    'penholder',
    'penknife',
    'pennant',
    'penniless',
    'penny',
    'penpal',
    'pension',
    'pentagon',
    'pentagram',
    'pep',
    'perceive',
    'percent',
    'perch',
    'percolate',
    'perennial',
    'perfected',
    'perfectly',
    'perfume',
    'periscope',
    'perish',
    'perjurer',
    'perjury',
    'perkiness',
    'perky',
    'perm',
    'peroxide',
    'perpetual',
    'perplexed',
    'persecute',
    'persevere',
    'persuaded',
    'persuader',
    'pesky',
    'peso',
    'pessimism',
    'pessimist',
    'pester',
    'pesticide',
    'petal',
    'petite',
    'petition',
    'petri',
    'petroleum',
    'petted',
    'petticoat',
    'pettiness',
    'petty',
    'petunia',
    'phantom',
    'phobia',
    'phoenix',
    'phonebook',
    'phoney',
    'phonics',
    'phoniness',
    'phony',
    'phosphate',
    'photo',
    'phrase',
    'phrasing',
    'placard',
    'placate',
    'placidly',
    'plank',
    'planner',
    'plant',
    'plasma',
    'plaster',
    'plastic',
    'plated',
    'platform',
    'plating',
    'platinum',
    'platonic',
    'platter',
    'platypus',
    'plausible',
    'plausibly',
    'playable',
    'playback',
    'player',
    'playful',
    'playgroup',
    'playhouse',
    'playing',
    'playlist',
    'playmaker',
    'playmate',
    'playoff',
    'playpen',
    'playroom',
    'playset',
    'plaything',
    'playtime',
    'plaza',
    'pleading',
    'pleat',
    'pledge',
    'plentiful',
    'plenty',
    'plethora',
    'plexiglas',
    'pliable',
    'plod',
    'plop',
    'plot',
    'plow',
    'ploy',
    'pluck',
    'plug',
    'plunder',
    'plunging',
    'plural',
    'plus',
    'plutonium',
    'plywood',
    'poach',
    'pod',
    'poem',
    'poet',
    'pogo',
    'pointed',
    'pointer',
    'pointing',
    'pointless',
    'pointy',
    'poise',
    'poison',
    'poker',
    'poking',
    'polar',
    'police',
    'policy',
    'polio',
    'polish',
    'politely',
    'polka',
    'polo',
    'polyester',
    'polygon',
    'polygraph',
    'polymer',
    'poncho',
    'pond',
    'pony',
    'popcorn',
    'pope',
    'poplar',
    'popper',
    'poppy',
    'popsicle',
    'populace',
    'popular',
    'populate',
    'porcupine',
    'pork',
    'porous',
    'porridge',
    'portable',
    'portal',
    'portfolio',
    'porthole',
    'portion',
    'portly',
    'portside',
    'poser',
    'posh',
    'posing',
    'possible',
    'possibly',
    'possum',
    'postage',
    'postal',
    'postbox',
    'postcard',
    'posted',
    'poster',
    'posting',
    'postnasal',
    'posture',
    'postwar',
    'pouch',
    'pounce',
    'pouncing',
    'pound',
    'pouring',
    'pout',
    'powdered',
    'powdering',
    'powdery',
    'power',
    'powwow',
    'pox',
    'praising',
    'prance',
    'prancing',
    'pranker',
    'prankish',
    'prankster',
    'prayer',
    'praying',
    'preacher',
    'preaching',
    'preachy',
    'preamble',
    'precinct',
    'precise',
    'precision',
    'precook',
    'precut',
    'predator',
    'predefine',
    'predict',
    'preface',
    'prefix',
    'preflight',
    'preformed',
    'pregame',
    'pregnancy',
    'pregnant',
    'preheated',
    'prelaunch',
    'prelaw',
    'prelude',
    'premiere',
    'premises',
    'premium',
    'prenatal',
    'preoccupy',
    'preorder',
    'prepaid',
    'prepay',
    'preplan',
    'preppy',
    'preschool',
    'prescribe',
    'preseason',
    'preset',
    'preshow',
    'president',
    'presoak',
    'press',
    'presume',
    'presuming',
    'preteen',
    'pretended',
    'pretender',
    'pretense',
    'pretext',
    'pretty',
    'pretzel',
    'prevail',
    'prevalent',
    'prevent',
    'preview',
    'previous',
    'prewar',
    'prewashed',
    'prideful',
    'pried',
    'primal',
    'primarily',
    'primary',
    'primate',
    'primer',
    'primp',
    'princess',
    'print',
    'prior',
    'prism',
    'prison',
    'prissy',
    'pristine',
    'privacy',
    'private',
    'privatize',
    'prize',
    'proactive',
    'probable',
    'probably',
    'probation',
    'probe',
    'probing',
    'probiotic',
    'problem',
    'procedure',
    'process',
    'proclaim',
    'procreate',
    'procurer',
    'prodigal',
    'prodigy',
    'produce',
    'product',
    'profane',
    'profanity',
    'professed',
    'professor',
    'profile',
    'profound',
    'profusely',
    'progeny',
    'prognosis',
    'program',
    'progress',
    'projector',
    'prologue',
    'prolonged',
    'promenade',
    'prominent',
    'promoter',
    'promotion',
    'prompter',
    'promptly',
    'prone',
    'prong',
    'pronounce',
    'pronto',
    'proofing',
    'proofread',
    'proofs',
    'propeller',
    'properly',
    'property',
    'proponent',
    'proposal',
    'propose',
    'props',
    'prorate',
    'protector',
    'protegee',
    'proton',
    'prototype',
    'protozoan',
    'protract',
    'protrude',
    'proud',
    'provable',
    'proved',
    'proven',
    'provided',
    'provider',
    'providing',
    'province',
    'proving',
    'provoke',
    'provoking',
    'provolone',
    'prowess',
    'prowler',
    'prowling',
    'proximity',
    'proxy',
    'prozac',
    'prude',
    'prudishly',
    'prune',
    'pruning',
    'pry',
    'psychic',
    'public',
    'publisher',
    'pucker',
    'pueblo',
    'pug',
    'pull',
    'pulmonary',
    'pulp',
    'pulsate',
    'pulse',
    'pulverize',
    'puma',
    'pumice',
    'pummel',
    'punch',
    'punctual',
    'punctuate',
    'punctured',
    'pungent',
    'punisher',
    'punk',
    'pupil',
    'puppet',
    'puppy',
    'purchase',
    'pureblood',
    'purebred',
    'purely',
    'pureness',
    'purgatory',
    'purge',
    'purging',
    'purifier',
    'purify',
    'purist',
    'puritan',
    'purity',
    'purple',
    'purplish',
    'purposely',
    'purr',
    'purse',
    'pursuable',
    'pursuant',
    'pursuit',
    'purveyor',
    'pushcart',
    'pushchair',
    'pusher',
    'pushiness',
    'pushing',
    'pushover',
    'pushpin',
    'pushup',
    'pushy',
    'putdown',
    'putt',
    'puzzle',
    'puzzling',
    'pyramid',
    'pyromania',
    'python',
    'quack',
    'quadrant',
    'quail',
    'quaintly',
    'quake',
    'quaking',
    'qualified',
    'qualifier',
    'qualify',
    'quality',
    'qualm',
    'quantum',
    'quarrel',
    'quarry',
    'quartered',
    'quarterly',
    'quarters',
    'quartet',
    'quench',
    'query',
    'quicken',
    'quickly',
    'quickness',
    'quicksand',
    'quickstep',
    'quiet',
    'quill',
    'quilt',
    'quintet',
    'quintuple',
    'quirk',
    'quit',
    'quiver',
    'quizzical',
    'quotable',
    'quotation',
    'quote',
    'rabid',
    'race',
    'racing',
    'racism',
    'rack',
    'racoon',
    'radar',
    'radial',
    'radiance',
    'radiantly',
    'radiated',
    'radiation',
    'radiator',
    'radio',
    'radish',
    'raffle',
    'raft',
    'rage',
    'ragged',
    'raging',
    'ragweed',
    'raider',
    'railcar',
    'railing',
    'railroad',
    'railway',
    'raisin',
    'rake',
    'raking',
    'rally',
    'ramble',
    'rambling',
    'ramp',
    'ramrod',
    'ranch',
    'rancidity',
    'random',
    'ranged',
    'ranger',
    'ranging',
    'ranked',
    'ranking',
    'ransack',
    'ranting',
    'rants',
    'rare',
    'rarity',
    'rascal',
    'rash',
    'rasping',
    'ravage',
    'raven',
    'ravine',
    'raving',
    'ravioli',
    'ravishing',
    'reabsorb',
    'reach',
    'reacquire',
    'reaction',
    'reactive',
    'reactor',
    'reaffirm',
    'ream',
    'reanalyze',
    'reappear',
    'reapply',
    'reappoint',
    'reapprove',
    'rearrange',
    'rearview',
    'reason',
    'reassign',
    'reassure',
    'reattach',
    'reawake',
    'rebalance',
    'rebate',
    'rebel',
    'rebirth',
    'reboot',
    'reborn',
    'rebound',
    'rebuff',
    'rebuild',
    'rebuilt',
    'reburial',
    'rebuttal',
    'recall',
    'recant',
    'recapture',
    'recast',
    'recede',
    'recent',
    'recess',
    'recharger',
    'recipient',
    'recital',
    'recite',
    'reckless',
    'reclaim',
    'recliner',
    'reclining',
    'recluse',
    'reclusive',
    'recognize',
    'recoil',
    'recollect',
    'recolor',
    'reconcile',
    'reconfirm',
    'reconvene',
    'recopy',
    'record',
    'recount',
    'recoup',
    'recovery',
    'recreate',
    'rectal',
    'rectangle',
    'rectified',
    'rectify',
    'recycled',
    'recycler',
    'recycling',
    'reemerge',
    'reenact',
    'reenter',
    'reentry',
    'reexamine',
    'referable',
    'referee',
    'reference',
    'refill',
    'refinance',
    'refined',
    'refinery',
    'refining',
    'refinish',
    'reflected',
    'reflector',
    'reflex',
    'reflux',
    'refocus',
    'refold',
    'reforest',
    'reformat',
    'reformed',
    'reformer',
    'reformist',
    'refract',
    'refrain',
    'refreeze',
    'refresh',
    'refried',
    'refueling',
    'refund',
    'refurbish',
    'refurnish',
    'refusal',
    'refuse',
    'refusing',
    'refutable',
    'refute',
    'regain',
    'regalia',
    'regally',
    'reggae',
    'regime',
    'region',
    'register',
    'registrar',
    'registry',
    'regress',
    'regretful',
    'regroup',
    'regular',
    'regulate',
    'regulator',
    'rehab',
    'reheat',
    'rehire',
    'rehydrate',
    'reimburse',
    'reissue',
    'reiterate',
    'rejoice',
    'rejoicing',
    'rejoin',
    'rekindle',
    'relapse',
    'relapsing',
    'relatable',
    'related',
    'relation',
    'relative',
    'relax',
    'relay',
    'relearn',
    'release',
    'relenting',
    'reliable',
    'reliably',
    'reliance',
    'reliant',
    'relic',
    'relieve',
    'relieving',
    'relight',
    'relish',
    'relive',
    'reload',
    'relocate',
    'relock',
    'reluctant',
    'rely',
    'remake',
    'remark',
    'remarry',
    'rematch',
    'remedial',
    'remedy',
    'remember',
    'reminder',
    'remindful',
    'remission',
    'remix',
    'remnant',
    'remodeler',
    'remold',
    'remorse',
    'remote',
    'removable',
    'removal',
    'removed',
    'remover',
    'removing',
    'rename',
    'renderer',
    'rendering',
    'rendition',
    'renegade',
    'renewable',
    'renewably',
    'renewal',
    'renewed',
    'renounce',
    'renovate',
    'renovator',
    'rentable',
    'rental',
    'rented',
    'renter',
    'reoccupy',
    'reoccur',
    'reopen',
    'reorder',
    'repackage',
    'repacking',
    'repaint',
    'repair',
    'repave',
    'repaying',
    'repayment',
    'repeal',
    'repeated',
    'repeater',
    'repent',
    'rephrase',
    'replace',
    'replay',
    'replica',
    'reply',
    'reporter',
    'repose',
    'repossess',
    'repost',
    'repressed',
    'reprimand',
    'reprint',
    'reprise',
    'reproach',
    'reprocess',
    'reproduce',
    'reprogram',
    'reps',
    'reptile',
    'reptilian',
    'repugnant',
    'repulsion',
    'repulsive',
    'repurpose',
    'reputable',
    'reputably',
    'request',
    'require',
    'requisite',
    'reroute',
    'rerun',
    'resale',
    'resample',
    'rescuer',
    'reseal',
    'research',
    'reselect',
    'reseller',
    'resemble',
    'resend',
    'resent',
    'reset',
    'reshape',
    'reshoot',
    'reshuffle',
    'residence',
    'residency',
    'resident',
    'residual',
    'residue',
    'resigned',
    'resilient',
    'resistant',
    'resisting',
    'resize',
    'resolute',
    'resolved',
    'resonant',
    'resonate',
    'resort',
    'resource',
    'respect',
    'resubmit',
    'result',
    'resume',
    'resupply',
    'resurface',
    'resurrect',
    'retail',
    'retainer',
    'retaining',
    'retake',
    'retaliate',
    'retention',
    'rethink',
    'retinal',
    'retired',
    'retiree',
    'retiring',
    'retold',
    'retool',
    'retorted',
    'retouch',
    'retrace',
    'retract',
    'retrain',
    'retread',
    'retreat',
    'retrial',
    'retrieval',
    'retriever',
    'retry',
    'return',
    'retying',
    'retype',
    'reunion',
    'reunite',
    'reusable',
    'reuse',
    'reveal',
    'reveler',
    'revenge',
    'revenue',
    'reverb',
    'revered',
    'reverence',
    'reverend',
    'reversal',
    'reverse',
    'reversing',
    'reversion',
    'revert',
    'revisable',
    'revise',
    'revision',
    'revisit',
    'revivable',
    'revival',
    'reviver',
    'reviving',
    'revocable',
    'revoke',
    'revolt',
    'revolver',
    'revolving',
    'reward',
    'rewash',
    'rewind',
    'rewire',
    'reword',
    'rework',
    'rewrap',
    'rewrite',
    'rhyme',
    'ribbon',
    'ribcage',
    'rice',
    'riches',
    'richly',
    'richness',
    'rickety',
    'ricotta',
    'riddance',
    'ridden',
    'ride',
    'riding',
    'rifling',
    'rift',
    'rigging',
    'rigid',
    'rigor',
    'rimless',
    'rimmed',
    'rind',
    'rink',
    'rinse',
    'rinsing',
    'riot',
    'ripcord',
    'ripeness',
    'ripening',
    'ripping',
    'ripple',
    'rippling',
    'riptide',
    'rise',
    'rising',
    'risk',
    'risotto',
    'ritalin',
    'ritzy',
    'rival',
    'riverbank',
    'riverbed',
    'riverboat',
    'riverside',
    'riveter',
    'riveting',
    'roamer',
    'roaming',
    'roast',
    'robbing',
    'robe',
    'robin',
    'robotics',
    'robust',
    'rockband',
    'rocker',
    'rocket',
    'rockfish',
    'rockiness',
    'rocking',
    'rocklike',
    'rockslide',
    'rockstar',
    'rocky',
    'rogue',
    'roman',
    'romp',
    'rope',
    'roping',
    'roster',
    'rosy',
    'rotten',
    'rotting',
    'rotunda',
    'roulette',
    'rounding',
    'roundish',
    'roundness',
    'roundup',
    'roundworm',
    'routine',
    'routing',
    'rover',
    'roving',
    'royal',
    'rubbed',
    'rubber',
    'rubbing',
    'rubble',
    'rubdown',
    'ruby',
    'ruckus',
    'rudder',
    'rug',
    'ruined',
    'rule',
    'rumble',
    'rumbling',
    'rummage',
    'rumor',
    'runaround',
    'rundown',
    'runner',
    'running',
    'runny',
    'runt',
    'runway',
    'rupture',
    'rural',
    'ruse',
    'rush',
    'rust',
    'rut',
    'sabbath',
    'sabotage',
    'sacrament',
    'sacred',
    'sacrifice',
    'sadden',
    'saddlebag',
    'saddled',
    'saddling',
    'sadly',
    'sadness',
    'safari',
    'safeguard',
    'safehouse',
    'safely',
    'safeness',
    'saffron',
    'saga',
    'sage',
    'sagging',
    'saggy',
    'said',
    'saint',
    'sake',
    'salad',
    'salami',
    'salaried',
    'salary',
    'saline',
    'salon',
    'saloon',
    'salsa',
    'salt',
    'salutary',
    'salute',
    'salvage',
    'salvaging',
    'salvation',
    'same',
    'sample',
    'sampling',
    'sanction',
    'sanctity',
    'sanctuary',
    'sandal',
    'sandbag',
    'sandbank',
    'sandbar',
    'sandblast',
    'sandbox',
    'sanded',
    'sandfish',
    'sanding',
    'sandlot',
    'sandpaper',
    'sandpit',
    'sandstone',
    'sandstorm',
    'sandworm',
    'sandy',
    'sanitary',
    'sanitizer',
    'sank',
    'santa',
    'sapling',
    'sappiness',
    'sappy',
    'sarcasm',
    'sarcastic',
    'sardine',
    'sash',
    'sasquatch',
    'sassy',
    'satchel',
    'satiable',
    'satin',
    'satirical',
    'satisfied',
    'satisfy',
    'saturate',
    'saturday',
    'sauciness',
    'saucy',
    'sauna',
    'savage',
    'savanna',
    'saved',
    'savings',
    'savior',
    'savor',
    'saxophone',
    'say',
    'scabbed',
    'scabby',
    'scalded',
    'scalding',
    'scale',
    'scaling',
    'scallion',
    'scallop',
    'scalping',
    'scam',
    'scandal',
    'scanner',
    'scanning',
    'scant',
    'scapegoat',
    'scarce',
    'scarcity',
    'scarecrow',
    'scared',
    'scarf',
    'scarily',
    'scariness',
    'scarring',
    'scary',
    'scavenger',
    'scenic',
    'schedule',
    'schematic',
    'scheme',
    'scheming',
    'schilling',
    'schnapps',
    'scholar',
    'science',
    'scientist',
    'scion',
    'scoff',
    'scolding',
    'scone',
    'scoop',
    'scooter',
    'scope',
    'scorch',
    'scorebook',
    'scorecard',
    'scored',
    'scoreless',
    'scorer',
    'scoring',
    'scorn',
    'scorpion',
    'scotch',
    'scoundrel',
    'scoured',
    'scouring',
    'scouting',
    'scouts',
    'scowling',
    'scrabble',
    'scraggly',
    'scrambled',
    'scrambler',
    'scrap',
    'scratch',
    'scrawny',
    'screen',
    'scribble',
    'scribe',
    'scribing',
    'scrimmage',
    'script',
    'scroll',
    'scrooge',
    'scrounger',
    'scrubbed',
    'scrubber',
    'scruffy',
    'scrunch',
    'scrutiny',
    'scuba',
    'scuff',
    'sculptor',
    'sculpture',
    'scurvy',
    'scuttle',
    'secluded',
    'secluding',
    'seclusion',
    'second',
    'secrecy',
    'secret',
    'sectional',
    'sector',
    'secular',
    'securely',
    'security',
    'sedan',
    'sedate',
    'sedation',
    'sedative',
    'sediment',
    'seduce',
    'seducing',
    'segment',
    'seismic',
    'seizing',
    'seldom',
    'selected',
    'selection',
    'selective',
    'selector',
    'self',
    'seltzer',
    'semantic',
    'semester',
    'semicolon',
    'semifinal',
    'seminar',
    'semisoft',
    'semisweet',
    'senate',
    'senator',
    'send',
    'senior',
    'senorita',
    'sensation',
    'sensitive',
    'sensitize',
    'sensually',
    'sensuous',
    'sepia',
    'september',
    'septic',
    'septum',
    'sequel',
    'sequence',
    'sequester',
    'series',
    'sermon',
    'serotonin',
    'serpent',
    'serrated',
    'serve',
    'service',
    'serving',
    'sesame',
    'sessions',
    'setback',
    'setting',
    'settle',
    'settling',
    'setup',
    'sevenfold',
    'seventeen',
    'seventh',
    'seventy',
    'severity',
    'shabby',
    'shack',
    'shaded',
    'shadily',
    'shadiness',
    'shading',
    'shadow',
    'shady',
    'shaft',
    'shakable',
    'shakily',
    'shakiness',
    'shaking',
    'shaky',
    'shale',
    'shallot',
    'shallow',
    'shame',
    'shampoo',
    'shamrock',
    'shank',
    'shanty',
    'shape',
    'shaping',
    'share',
    'sharpener',
    'sharper',
    'sharpie',
    'sharply',
    'sharpness',
    'shawl',
    'sheath',
    'shed',
    'sheep',
    'sheet',
    'shelf',
    'shell',
    'shelter',
    'shelve',
    'shelving',
    'sherry',
    'shield',
    'shifter',
    'shifting',
    'shiftless',
    'shifty',
    'shimmer',
    'shimmy',
    'shindig',
    'shine',
    'shingle',
    'shininess',
    'shining',
    'shiny',
    'ship',
    'shirt',
    'shivering',
    'shock',
    'shone',
    'shoplift',
    'shopper',
    'shopping',
    'shoptalk',
    'shore',
    'shortage',
    'shortcake',
    'shortcut',
    'shorten',
    'shorter',
    'shorthand',
    'shortlist',
    'shortly',
    'shortness',
    'shorts',
    'shortwave',
    'shorty',
    'shout',
    'shove',
    'showbiz',
    'showcase',
    'showdown',
    'shower',
    'showgirl',
    'showing',
    'showman',
    'shown',
    'showoff',
    'showpiece',
    'showplace',
    'showroom',
    'showy',
    'shrank',
    'shrapnel',
    'shredder',
    'shredding',
    'shrewdly',
    'shriek',
    'shrill',
    'shrimp',
    'shrine',
    'shrink',
    'shrivel',
    'shrouded',
    'shrubbery',
    'shrubs',
    'shrug',
    'shrunk',
    'shucking',
    'shudder',
    'shuffle',
    'shuffling',
    'shun',
    'shush',
    'shut',
    'shy',
    'siamese',
    'siberian',
    'sibling',
    'siding',
    'sierra',
    'siesta',
    'sift',
    'sighing',
    'silenced',
    'silencer',
    'silent',
    'silica',
    'silicon',
    'silk',
    'silliness',
    'silly',
    'silo',
    'silt',
    'silver',
    'similarly',
    'simile',
    'simmering',
    'simple',
    'simplify',
    'simply',
    'sincere',
    'sincerity',
    'singer',
    'singing',
    'single',
    'singular',
    'sinister',
    'sinless',
    'sinner',
    'sinuous',
    'sip',
    'siren',
    'sister',
    'sitcom',
    'sitter',
    'sitting',
    'situated',
    'situation',
    'sixfold',
    'sixteen',
    'sixth',
    'sixties',
    'sixtieth',
    'sixtyfold',
    'sizable',
    'sizably',
    'size',
    'sizing',
    'sizzle',
    'sizzling',
    'skater',
    'skating',
    'skedaddle',
    'skeletal',
    'skeleton',
    'skeptic',
    'sketch',
    'skewed',
    'skewer',
    'skid',
    'skied',
    'skier',
    'skies',
    'skiing',
    'skilled',
    'skillet',
    'skillful',
    'skimmed',
    'skimmer',
    'skimming',
    'skimpily',
    'skincare',
    'skinhead',
    'skinless',
    'skinning',
    'skinny',
    'skintight',
    'skipper',
    'skipping',
    'skirmish',
    'skirt',
    'skittle',
    'skydiver',
    'skylight',
    'skyline',
    'skype',
    'skyrocket',
    'skyward',
    'slab',
    'slacked',
    'slacker',
    'slacking',
    'slackness',
    'slacks',
    'slain',
    'slam',
    'slander',
    'slang',
    'slapping',
    'slapstick',
    'slashed',
    'slashing',
    'slate',
    'slather',
    'slaw',
    'sled',
    'sleek',
    'sleep',
    'sleet',
    'sleeve',
    'slept',
    'sliceable',
    'sliced',
    'slicer',
    'slicing',
    'slick',
    'slider',
    'slideshow',
    'sliding',
    'slighted',
    'slighting',
    'slightly',
    'slimness',
    'slimy',
    'slinging',
    'slingshot',
    'slinky',
    'slip',
    'slit',
    'sliver',
    'slobbery',
    'slogan',
    'sloped',
    'sloping',
    'sloppily',
    'sloppy',
    'slot',
    'slouching',
    'slouchy',
    'sludge',
    'slug',
    'slum',
    'slurp',
    'slush',
    'sly',
    'small',
    'smartly',
    'smartness',
    'smasher',
    'smashing',
    'smashup',
    'smell',
    'smelting',
    'smile',
    'smilingly',
    'smirk',
    'smite',
    'smith',
    'smitten',
    'smock',
    'smog',
    'smoked',
    'smokeless',
    'smokiness',
    'smoking',
    'smoky',
    'smolder',
    'smooth',
    'smother',
    'smudge',
    'smudgy',
    'smuggler',
    'smuggling',
    'smugly',
    'smugness',
    'snack',
    'snagged',
    'snaking',
    'snap',
    'snare',
    'snarl',
    'snazzy',
    'sneak',
    'sneer',
    'sneeze',
    'sneezing',
    'snide',
    'sniff',
    'snippet',
    'snipping',
    'snitch',
    'snooper',
    'snooze',
    'snore',
    'snoring',
    'snorkel',
    'snort',
    'snout',
    'snowbird',
    'snowboard',
    'snowbound',
    'snowcap',
    'snowdrift',
    'snowdrop',
    'snowfall',
    'snowfield',
    'snowflake',
    'snowiness',
    'snowless',
    'snowman',
    'snowplow',
    'snowshoe',
    'snowstorm',
    'snowsuit',
    'snowy',
    'snub',
    'snuff',
    'snuggle',
    'snugly',
    'snugness',
    'speak',
    'spearfish',
    'spearhead',
    'spearman',
    'spearmint',
    'species',
    'specimen',
    'specked',
    'speckled',
    'specks',
    'spectacle',
    'spectator',
    'spectrum',
    'speculate',
    'speech',
    'speed',
    'spellbind',
    'speller',
    'spelling',
    'spendable',
    'spender',
    'spending',
    'spent',
    'spew',
    'sphere',
    'spherical',
    'sphinx',
    'spider',
    'spied',
    'spiffy',
    'spill',
    'spilt',
    'spinach',
    'spinal',
    'spindle',
    'spinner',
    'spinning',
    'spinout',
    'spinster',
    'spiny',
    'spiral',
    'spirited',
    'spiritism',
    'spirits',
    'spiritual',
    'splashed',
    'splashing',
    'splashy',
    'splatter',
    'spleen',
    'splendid',
    'splendor',
    'splice',
    'splicing',
    'splinter',
    'splotchy',
    'splurge',
    'spoilage',
    'spoiled',
    'spoiler',
    'spoiling',
    'spoils',
    'spoken',
    'spokesman',
    'sponge',
    'spongy',
    'sponsor',
    'spoof',
    'spookily',
    'spooky',
    'spool',
    'spoon',
    'spore',
    'sporting',
    'sports',
    'sporty',
    'spotless',
    'spotlight',
    'spotted',
    'spotter',
    'spotting',
    'spotty',
    'spousal',
    'spouse',
    'spout',
    'sprain',
    'sprang',
    'sprawl',
    'spray',
    'spree',
    'sprig',
    'spring',
    'sprinkled',
    'sprinkler',
    'sprint',
    'sprite',
    'sprout',
    'spruce',
    'sprung',
    'spry',
    'spud',
    'spur',
    'sputter',
    'spyglass',
    'squabble',
    'squad',
    'squall',
    'squander',
    'squash',
    'squatted',
    'squatter',
    'squatting',
    'squeak',
    'squealer',
    'squealing',
    'squeamish',
    'squeegee',
    'squeeze',
    'squeezing',
    'squid',
    'squiggle',
    'squiggly',
    'squint',
    'squire',
    'squirt',
    'squishier',
    'squishy',
    'stability',
    'stabilize',
    'stable',
    'stack',
    'stadium',
    'staff',
    'stage',
    'staging',
    'stagnant',
    'stagnate',
    'stainable',
    'stained',
    'staining',
    'stainless',
    'stalemate',
    'staleness',
    'stalling',
    'stallion',
    'stamina',
    'stammer',
    'stamp',
    'stand',
    'stank',
    'staple',
    'stapling',
    'starboard',
    'starch',
    'stardom',
    'stardust',
    'starfish',
    'stargazer',
    'staring',
    'stark',
    'starless',
    'starlet',
    'starlight',
    'starlit',
    'starring',
    'starry',
    'starship',
    'starter',
    'starting',
    'startle',
    'startling',
    'startup',
    'starved',
    'starving',
    'stash',
    'state',
    'static',
    'statistic',
    'statue',
    'stature',
    'status',
    'statute',
    'statutory',
    'staunch',
    'stays',
    'steadfast',
    'steadier',
    'steadily',
    'steadying',
    'steam',
    'steed',
    'steep',
    'steerable',
    'steering',
    'steersman',
    'stegosaur',
    'stellar',
    'stem',
    'stench',
    'stencil',
    'step',
    'stereo',
    'sterile',
    'sterility',
    'sterilize',
    'sterling',
    'sternness',
    'sternum',
    'stew',
    'stick',
    'stiffen',
    'stiffly',
    'stiffness',
    'stifle',
    'stifling',
    'stillness',
    'stilt',
    'stimulant',
    'stimulate',
    'stimuli',
    'stimulus',
    'stinger',
    'stingily',
    'stinging',
    'stingray',
    'stingy',
    'stinking',
    'stinky',
    'stipend',
    'stipulate',
    'stir',
    'stitch',
    'stock',
    'stoic',
    'stoke',
    'stole',
    'stomp',
    'stonewall',
    'stoneware',
    'stonework',
    'stoning',
    'stony',
    'stood',
    'stooge',
    'stool',
    'stoop',
    'stoplight',
    'stoppable',
    'stoppage',
    'stopped',
    'stopper',
    'stopping',
    'stopwatch',
    'storable',
    'storage',
    'storeroom',
    'storewide',
    'storm',
    'stout',
    'stove',
    'stowaway',
    'stowing',
    'straddle',
    'straggler',
    'strained',
    'strainer',
    'straining',
    'strangely',
    'stranger',
    'strangle',
    'strategic',
    'strategy',
    'stratus',
    'straw',
    'stray',
    'streak',
    'stream',
    'street',
    'strength',
    'strenuous',
    'strep',
    'stress',
    'stretch',
    'strewn',
    'stricken',
    'strict',
    'stride',
    'strife',
    'strike',
    'striking',
    'strive',
    'striving',
    'strobe',
    'strode',
    'stroller',
    'strongbox',
    'strongly',
    'strongman',
    'struck',
    'structure',
    'strudel',
    'struggle',
    'strum',
    'strung',
    'strut',
    'stubbed',
    'stubble',
    'stubbly',
    'stubborn',
    'stucco',
    'stuck',
    'student',
    'studied',
    'studio',
    'study',
    'stuffed',
    'stuffing',
    'stuffy',
    'stumble',
    'stumbling',
    'stump',
    'stung',
    'stunned',
    'stunner',
    'stunning',
    'stunt',
    'stupor',
    'sturdily',
    'sturdy',
    'styling',
    'stylishly',
    'stylist',
    'stylized',
    'stylus',
    'suave',
    'subarctic',
    'subatomic',
    'subdivide',
    'subdued',
    'subduing',
    'subfloor',
    'subgroup',
    'subheader',
    'subject',
    'sublease',
    'sublet',
    'sublevel',
    'sublime',
    'submarine',
    'submerge',
    'submersed',
    'submitter',
    'subpanel',
    'subpar',
    'subplot',
    'subprime',
    'subscribe',
    'subscript',
    'subsector',
    'subside',
    'subsiding',
    'subsidize',
    'subsidy',
    'subsoil',
    'subsonic',
    'substance',
    'subsystem',
    'subtext',
    'subtitle',
    'subtly',
    'subtotal',
    'subtract',
    'subtype',
    'suburb',
    'subway',
    'subwoofer',
    'subzero',
    'succulent',
    'such',
    'suction',
    'sudden',
    'sudoku',
    'suds',
    'sufferer',
    'suffering',
    'suffice',
    'suffix',
    'suffocate',
    'suffrage',
    'sugar',
    'suggest',
    'suing',
    'suitable',
    'suitably',
    'suitcase',
    'suitor',
    'sulfate',
    'sulfide',
    'sulfite',
    'sulfur',
    'sulk',
    'sullen',
    'sulphate',
    'sulphuric',
    'sultry',
    'superbowl',
    'superglue',
    'superhero',
    'superior',
    'superjet',
    'superman',
    'supermom',
    'supernova',
    'supervise',
    'supper',
    'supplier',
    'supply',
    'support',
    'supremacy',
    'supreme',
    'surcharge',
    'surely',
    'sureness',
    'surface',
    'surfacing',
    'surfboard',
    'surfer',
    'surgery',
    'surgical',
    'surging',
    'surname',
    'surpass',
    'surplus',
    'surprise',
    'surreal',
    'surrender',
    'surrogate',
    'surround',
    'survey',
    'survival',
    'survive',
    'surviving',
    'survivor',
    'sushi',
    'suspect',
    'suspend',
    'suspense',
    'sustained',
    'sustainer',
    'swab',
    'swaddling',
    'swagger',
    'swampland',
    'swan',
    'swapping',
    'swarm',
    'sway',
    'swear',
    'sweat',
    'sweep',
    'swell',
    'swept',
    'swerve',
    'swifter',
    'swiftly',
    'swiftness',
    'swimmable',
    'swimmer',
    'swimming',
    'swimsuit',
    'swimwear',
    'swinger',
    'swinging',
    'swipe',
    'swirl',
    'switch',
    'swivel',
    'swizzle',
    'swooned',
    'swoop',
    'swoosh',
    'swore',
    'sworn',
    'swung',
    'sycamore',
    'sympathy',
    'symphonic',
    'symphony',
    'symptom',
    'synapse',
    'syndrome',
    'synergy',
    'synopses',
    'synopsis',
    'synthesis',
    'synthetic',
    'syrup',
    'system',
    't-shirt',
    'tabasco',
    'tabby',
    'tableful',
    'tables',
    'tablet',
    'tableware',
    'tabloid',
    'tackiness',
    'tacking',
    'tackle',
    'tackling',
    'tacky',
    'taco',
    'tactful',
    'tactical',
    'tactics',
    'tactile',
    'tactless',
    'tadpole',
    'taekwondo',
    'tag',
    'tainted',
    'take',
    'taking',
    'talcum',
    'talisman',
    'tall',
    'talon',
    'tamale',
    'tameness',
    'tamer',
    'tamper',
    'tank',
    'tanned',
    'tannery',
    'tanning',
    'tantrum',
    'tapeless',
    'tapered',
    'tapering',
    'tapestry',
    'tapioca',
    'tapping',
    'taps',
    'tarantula',
    'target',
    'tarmac',
    'tarnish',
    'tarot',
    'tartar',
    'tartly',
    'tartness',
    'task',
    'tassel',
    'taste',
    'tastiness',
    'tasting',
    'tasty',
    'tattered',
    'tattle',
    'tattling',
    'tattoo',
    'taunt',
    'tavern',
    'thank',
    'that',
    'thaw',
    'theater',
    'theatrics',
    'thee',
    'theft',
    'theme',
    'theology',
    'theorize',
    'thermal',
    'thermos',
    'thesaurus',
    'these',
    'thesis',
    'thespian',
    'thicken',
    'thicket',
    'thickness',
    'thieving',
    'thievish',
    'thigh',
    'thimble',
    'thing',
    'think',
    'thinly',
    'thinner',
    'thinness',
    'thinning',
    'thirstily',
    'thirsting',
    'thirsty',
    'thirteen',
    'thirty',
    'thong',
    'thorn',
    'those',
    'thousand',
    'thrash',
    'thread',
    'threaten',
    'threefold',
    'thrift',
    'thrill',
    'thrive',
    'thriving',
    'throat',
    'throbbing',
    'throng',
    'throttle',
    'throwaway',
    'throwback',
    'thrower',
    'throwing',
    'thud',
    'thumb',
    'thumping',
    'thursday',
    'thus',
    'thwarting',
    'thyself',
    'tiara',
    'tibia',
    'tidal',
    'tidbit',
    'tidiness',
    'tidings',
    'tidy',
    'tiger',
    'tighten',
    'tightly',
    'tightness',
    'tightrope',
    'tightwad',
    'tigress',
    'tile',
    'tiling',
    'till',
    'tilt',
    'timid',
    'timing',
    'timothy',
    'tinderbox',
    'tinfoil',
    'tingle',
    'tingling',
    'tingly',
    'tinker',
    'tinkling',
    'tinsel',
    'tinsmith',
    'tint',
    'tinwork',
    'tiny',
    'tipoff',
    'tipped',
    'tipper',
    'tipping',
    'tiptoeing',
    'tiptop',
    'tiring',
    'tissue',
    'trace',
    'tracing',
    'track',
    'traction',
    'tractor',
    'trade',
    'trading',
    'tradition',
    'traffic',
    'tragedy',
    'trailing',
    'trailside',
    'train',
    'traitor',
    'trance',
    'tranquil',
    'transfer',
    'transform',
    'translate',
    'transpire',
    'transport',
    'transpose',
    'trapdoor',
    'trapeze',
    'trapezoid',
    'trapped',
    'trapper',
    'trapping',
    'traps',
    'trash',
    'travel',
    'traverse',
    'travesty',
    'tray',
    'treachery',
    'treading',
    'treadmill',
    'treason',
    'treat',
    'treble',
    'tree',
    'trekker',
    'tremble',
    'trembling',
    'tremor',
    'trench',
    'trend',
    'trespass',
    'triage',
    'trial',
    'triangle',
    'tribesman',
    'tribunal',
    'tribune',
    'tributary',
    'tribute',
    'triceps',
    'trickery',
    'trickily',
    'tricking',
    'trickle',
    'trickster',
    'tricky',
    'tricolor',
    'tricycle',
    'trident',
    'tried',
    'trifle',
    'trifocals',
    'trillion',
    'trilogy',
    'trimester',
    'trimmer',
    'trimming',
    'trimness',
    'trinity',
    'trio',
    'tripod',
    'tripping',
    'triumph',
    'trivial',
    'trodden',
    'trolling',
    'trombone',
    'trophy',
    'tropical',
    'tropics',
    'trouble',
    'troubling',
    'trough',
    'trousers',
    'trout',
    'trowel',
    'truce',
    'truck',
    'truffle',
    'trump',
    'trunks',
    'trustable',
    'trustee',
    'trustful',
    'trusting',
    'trustless',
    'truth',
    'try',
    'tubby',
    'tubeless',
    'tubular',
    'tucking',
    'tuesday',
    'tug',
    'tuition',
    'tulip',
    'tumble',
    'tumbling',
    'tummy',
    'turban',
    'turbine',
    'turbofan',
    'turbojet',
    'turbulent',
    'turf',
    'turkey',
    'turmoil',
    'turret',
    'turtle',
    'tusk',
    'tutor',
    'tutu',
    'tux',
    'tweak',
    'tweed',
    'tweet',
    'tweezers',
    'twelve',
    'twentieth',
    'twenty',
    'twerp',
    'twice',
    'twiddle',
    'twiddling',
    'twig',
    'twilight',
    'twine',
    'twins',
    'twirl',
    'twistable',
    'twisted',
    'twister',
    'twisting',
    'twisty',
    'twitch',
    'twitter',
    'tycoon',
    'tying',
    'tyke',
    'udder',
    'ultimate',
    'ultimatum',
    'ultra',
    'umbilical',
    'umbrella',
    'umpire',
    'unabashed',
    'unable',
    'unadorned',
    'unadvised',
    'unafraid',
    'unaired',
    'unaligned',
    'unaltered',
    'unarmored',
    'unashamed',
    'unaudited',
    'unawake',
    'unaware',
    'unbaked',
    'unbalance',
    'unbeaten',
    'unbend',
    'unbent',
    'unbiased',
    'unbitten',
    'unblended',
    'unblessed',
    'unblock',
    'unbolted',
    'unbounded',
    'unboxed',
    'unbraided',
    'unbridle',
    'unbroken',
    'unbuckled',
    'unbundle',
    'unburned',
    'unbutton',
    'uncanny',
    'uncapped',
    'uncaring',
    'uncertain',
    'unchain',
    'unchanged',
    'uncharted',
    'uncheck',
    'uncivil',
    'unclad',
    'unclaimed',
    'unclamped',
    'unclasp',
    'uncle',
    'unclip',
    'uncloak',
    'unclog',
    'unclothed',
    'uncoated',
    'uncoiled',
    'uncolored',
    'uncombed',
    'uncommon',
    'uncooked',
    'uncork',
    'uncorrupt',
    'uncounted',
    'uncouple',
    'uncouth',
    'uncover',
    'uncross',
    'uncrown',
    'uncrushed',
    'uncured',
    'uncurious',
    'uncurled',
    'uncut',
    'undamaged',
    'undated',
    'undaunted',
    'undead',
    'undecided',
    'undefined',
    'underage',
    'underarm',
    'undercoat',
    'undercook',
    'undercut',
    'underdog',
    'underdone',
    'underfed',
    'underfeed',
    'underfoot',
    'undergo',
    'undergrad',
    'underhand',
    'underline',
    'underling',
    'undermine',
    'undermost',
    'underpaid',
    'underpass',
    'underpay',
    'underrate',
    'undertake',
    'undertone',
    'undertook',
    'undertow',
    'underuse',
    'underwear',
    'underwent',
    'underwire',
    'undesired',
    'undiluted',
    'undivided',
    'undocked',
    'undoing',
    'undone',
    'undrafted',
    'undress',
    'undrilled',
    'undusted',
    'undying',
    'unearned',
    'unearth',
    'unease',
    'uneasily',
    'uneasy',
    'uneatable',
    'uneaten',
    'unedited',
    'unelected',
    'unending',
    'unengaged',
    'unenvied',
    'unequal',
    'unethical',
    'uneven',
    'unexpired',
    'unexposed',
    'unfailing',
    'unfair',
    'unfasten',
    'unfazed',
    'unfeeling',
    'unfiled',
    'unfilled',
    'unfitted',
    'unfitting',
    'unfixable',
    'unfixed',
    'unflawed',
    'unfocused',
    'unfold',
    'unfounded',
    'unframed',
    'unfreeze',
    'unfrosted',
    'unfrozen',
    'unfunded',
    'unglazed',
    'ungloved',
    'unglue',
    'ungodly',
    'ungraded',
    'ungreased',
    'unguarded',
    'unguided',
    'unhappily',
    'unhappy',
    'unharmed',
    'unhealthy',
    'unheard',
    'unhearing',
    'unheated',
    'unhelpful',
    'unhidden',
    'unhinge',
    'unhitched',
    'unholy',
    'unhook',
    'unicorn',
    'unicycle',
    'unified',
    'unifier',
    'uniformed',
    'uniformly',
    'unify',
    'unimpeded',
    'uninjured',
    'uninstall',
    'uninsured',
    'uninvited',
    'union',
    'uniquely',
    'unisexual',
    'unison',
    'unissued',
    'unit',
    'universal',
    'universe',
    'unjustly',
    'unkempt',
    'unkind',
    'unknotted',
    'unknowing',
    'unknown',
    'unlaced',
    'unlatch',
    'unlawful',
    'unleaded',
    'unlearned',
    'unleash',
    'unless',
    'unleveled',
    'unlighted',
    'unlikable',
    'unlimited',
    'unlined',
    'unlinked',
    'unlisted',
    'unlit',
    'unlivable',
    'unloaded',
    'unloader',
    'unlocked',
    'unlocking',
    'unlovable',
    'unloved',
    'unlovely',
    'unloving',
    'unluckily',
    'unlucky',
    'unmade',
    'unmanaged',
    'unmanned',
    'unmapped',
    'unmarked',
    'unmasked',
    'unmasking',
    'unmatched',
    'unmindful',
    'unmixable',
    'unmixed',
    'unmolded',
    'unmoral',
    'unmovable',
    'unmoved',
    'unmoving',
    'unnamable',
    'unnamed',
    'unnatural',
    'unneeded',
    'unnerve',
    'unnerving',
    'unnoticed',
    'unopened',
    'unopposed',
    'unpack',
    'unpadded',
    'unpaid',
    'unpainted',
    'unpaired',
    'unpaved',
    'unpeeled',
    'unpicked',
    'unpiloted',
    'unpinned',
    'unplanned',
    'unplanted',
    'unpleased',
    'unpledged',
    'unplowed',
    'unplug',
    'unpopular',
    'unproven',
    'unquote',
    'unranked',
    'unrated',
    'unraveled',
    'unreached',
    'unread',
    'unreal',
    'unreeling',
    'unrefined',
    'unrelated',
    'unrented',
    'unrest',
    'unretired',
    'unrevised',
    'unrigged',
    'unripe',
    'unrivaled',
    'unroasted',
    'unrobed',
    'unroll',
    'unruffled',
    'unruly',
    'unrushed',
    'unsaddle',
    'unsafe',
    'unsaid',
    'unsalted',
    'unsaved',
    'unsavory',
    'unscathed',
    'unscented',
    'unscrew',
    'unsealed',
    'unseated',
    'unsecured',
    'unseeing',
    'unseemly',
    'unseen',
    'unselect',
    'unselfish',
    'unsent',
    'unsettled',
    'unshackle',
    'unshaken',
    'unshaved',
    'unshaven',
    'unsheathe',
    'unshipped',
    'unsightly',
    'unsigned',
    'unskilled',
    'unsliced',
    'unsmooth',
    'unsnap',
    'unsocial',
    'unsoiled',
    'unsold',
    'unsolved',
    'unsorted',
    'unspoiled',
    'unspoken',
    'unstable',
    'unstaffed',
    'unstamped',
    'unsteady',
    'unsterile',
    'unstirred',
    'unstitch',
    'unstopped',
    'unstuck',
    'unstuffed',
    'unstylish',
    'unsubtle',
    'unsubtly',
    'unsuited',
    'unsure',
    'unsworn',
    'untagged',
    'untainted',
    'untaken',
    'untamed',
    'untangled',
    'untapped',
    'untaxed',
    'unthawed',
    'unthread',
    'untidy',
    'untie',
    'until',
    'untimed',
    'untimely',
    'untitled',
    'untoasted',
    'untold',
    'untouched',
    'untracked',
    'untrained',
    'untreated',
    'untried',
    'untrimmed',
    'untrue',
    'untruth',
    'unturned',
    'untwist',
    'untying',
    'unusable',
    'unused',
    'unusual',
    'unvalued',
    'unvaried',
    'unvarying',
    'unveiled',
    'unveiling',
    'unvented',
    'unviable',
    'unvisited',
    'unvocal',
    'unwanted',
    'unwarlike',
    'unwary',
    'unwashed',
    'unwatched',
    'unweave',
    'unwed',
    'unwelcome',
    'unwell',
    'unwieldy',
    'unwilling',
    'unwind',
    'unwired',
    'unwitting',
    'unwomanly',
    'unworldly',
    'unworn',
    'unworried',
    'unworthy',
    'unwound',
    'unwoven',
    'unwrapped',
    'unwritten',
    'unzip',
    'upbeat',
    'upchuck',
    'upcoming',
    'upcountry',
    'update',
    'upfront',
    'upgrade',
    'upheaval',
    'upheld',
    'uphill',
    'uphold',
    'uplifted',
    'uplifting',
    'upload',
    'upon',
    'upper',
    'upright',
    'uprising',
    'upriver',
    'uproar',
    'uproot',
    'upscale',
    'upside',
    'upstage',
    'upstairs',
    'upstart',
    'upstate',
    'upstream',
    'upstroke',
    'upswing',
    'uptake',
    'uptight',
    'uptown',
    'upturned',
    'upward',
    'upwind',
    'uranium',
    'urban',
    'urchin',
    'urethane',
    'urgency',
    'urgent',
    'urging',
    'urologist',
    'urology',
    'usable',
    'usage',
    'useable',
    'used',
    'uselessly',
    'user',
    'usher',
    'usual',
    'utensil',
    'utility',
    'utilize',
    'utmost',
    'utopia',
    'utter',
    'vacancy',
    'vacant',
    'vacate',
    'vacation',
    'vagabond',
    'vagrancy',
    'vagrantly',
    'vaguely',
    'vagueness',
    'valiant',
    'valid',
    'valium',
    'valley',
    'valuables',
    'value',
    'vanilla',
    'vanish',
    'vanity',
    'vanquish',
    'vantage',
    'vaporizer',
    'variable',
    'variably',
    'varied',
    'variety',
    'various',
    'varmint',
    'varnish',
    'varsity',
    'varying',
    'vascular',
    'vaseline',
    'vastly',
    'vastness',
    'veal',
    'vegan',
    'veggie',
    'vehicular',
    'velcro',
    'velocity',
    'velvet',
    'vendetta',
    'vending',
    'vendor',
    'veneering',
    'vengeful',
    'venomous',
    'ventricle',
    'venture',
    'venue',
    'venus',
    'verbalize',
    'verbally',
    'verbose',
    'verdict',
    'verify',
    'verse',
    'version',
    'versus',
    'vertebrae',
    'vertical',
    'vertigo',
    'very',
    'vessel',
    'vest',
    'veteran',
    'veto',
    'vexingly',
    'viability',
    'viable',
    'vibes',
    'vice',
    'vicinity',
    'victory',
    'video',
    'viewable',
    'viewer',
    'viewing',
    'viewless',
    'viewpoint',
    'vigorous',
    'village',
    'villain',
    'vindicate',
    'vineyard',
    'vintage',
    'violate',
    'violation',
    'violator',
    'violet',
    'violin',
    'viper',
    'viral',
    'virtual',
    'virtuous',
    'virus',
    'visa',
    'viscosity',
    'viscous',
    'viselike',
    'visible',
    'visibly',
    'vision',
    'visiting',
    'visitor',
    'visor',
    'vista',
    'vitality',
    'vitalize',
    'vitally',
    'vitamins',
    'vivacious',
    'vividly',
    'vividness',
    'vixen',
    'vocalist',
    'vocalize',
    'vocally',
    'vocation',
    'voice',
    'voicing',
    'void',
    'volatile',
    'volley',
    'voltage',
    'volumes',
    'voter',
    'voting',
    'voucher',
    'vowed',
    'vowel',
    'voyage',
    'wackiness',
    'wad',
    'wafer',
    'waffle',
    'waged',
    'wager',
    'wages',
    'waggle',
    'wagon',
    'wake',
    'waking',
    'walk',
    'walmart',
    'walnut',
    'walrus',
    'waltz',
    'wand',
    'wannabe',
    'wanted',
    'wanting',
    'wasabi',
    'washable',
    'washbasin',
    'washboard',
    'washbowl',
    'washcloth',
    'washday',
    'washed',
    'washer',
    'washhouse',
    'washing',
    'washout',
    'washroom',
    'washstand',
    'washtub',
    'wasp',
    'wasting',
    'watch',
    'water',
    'waviness',
    'waving',
    'wavy',
    'whacking',
    'whacky',
    'wham',
    'wharf',
    'wheat',
    'whenever',
    'whiff',
    'whimsical',
    'whinny',
    'whiny',
    'whisking',
    'whoever',
    'whole',
    'whomever',
    'whoopee',
    'whooping',
    'whoops',
    'why',
    'wick',
    'widely',
    'widen',
    'widget',
    'widow',
    'width',
    'wieldable',
    'wielder',
    'wife',
    'wifi',
    'wikipedia',
    'wildcard',
    'wildcat',
    'wilder',
    'wildfire',
    'wildfowl',
    'wildland',
    'wildlife',
    'wildly',
    'wildness',
    'willed',
    'willfully',
    'willing',
    'willow',
    'willpower',
    'wilt',
    'wimp',
    'wince',
    'wincing',
    'wind',
    'wing',
    'winking',
    'winner',
    'winnings',
    'winter',
    'wipe',
    'wired',
    'wireless',
    'wiring',
    'wiry',
    'wisdom',
    'wise',
    'wish',
    'wisplike',
    'wispy',
    'wistful',
    'wizard',
    'wobble',
    'wobbling',
    'wobbly',
    'wok',
    'wolf',
    'wolverine',
    'womanhood',
    'womankind',
    'womanless',
    'womanlike',
    'womanly',
    'womb',
    'woof',
    'wooing',
    'wool',
    'woozy',
    'word',
    'work',
    'worried',
    'worrier',
    'worrisome',
    'worry',
    'worsening',
    'worshiper',
    'worst',
    'wound',
    'woven',
    'wow',
    'wrangle',
    'wrath',
    'wreath',
    'wreckage',
    'wrecker',
    'wrecking',
    'wrench',
    'wriggle',
    'wriggly',
    'wrinkle',
    'wrinkly',
    'wrist',
    'writing',
    'written',
    'wrongdoer',
    'wronged',
    'wrongful',
    'wrongly',
    'wrongness',
    'wrought',
    'xbox',
    'xerox',
    'yahoo',
    'yam',
    'yanking',
    'yapping',
    'yard',
    'yarn',
    'yeah',
    'yearbook',
    'yearling',
    'yearly',
    'yearning',
    'yeast',
    'yelling',
    'yelp',
    'yen',
    'yesterday',
    'yiddish',
    'yield',
    'yin',
    'yippee',
    'yo-yo',
    'yodel',
    'yoga',
    'yogurt',
    'yonder',
    'yoyo',
    'yummy',
    'zap',
    'zealous',
    'zebra',
    'zen',
    'zeppelin',
    'zero',
    'zestfully',
    'zesty',
    'zigzagged',
    'zipfile',
    'zipping',
    'zippy',
    'zips',
    'zit',
    'zodiac',
    'zombie',
    'zone',
    'zoning',
    'zookeeper',
    'zoologist',
    'zoology',
    'zoom',
];


/***/ }),

/***/ 21155:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TupleReader = void 0;
class TupleReader {
    constructor(items) {
        this.items = [...items];
    }
    get remaining() {
        return this.items.length;
    }
    peek() {
        if (this.items.length === 0) {
            throw Error('EOF');
        }
        return this.items[0];
    }
    pop() {
        if (this.items.length === 0) {
            throw Error('EOF');
        }
        let res = this.items[0];
        this.items.splice(0, 1);
        return res;
    }
    skip(num = 1) {
        for (let i = 0; i < num; i++) {
            this.pop();
        }
        return this;
    }
    readBigNumber() {
        let popped = this.pop();
        if (popped.type !== 'int') {
            throw Error('Not a number');
        }
        return popped.value;
    }
    readBigNumberOpt() {
        let popped = this.pop();
        if (popped.type === 'null') {
            return null;
        }
        if (popped.type !== 'int') {
            throw Error('Not a number');
        }
        return popped.value;
    }
    readNumber() {
        return Number(this.readBigNumber());
    }
    readNumberOpt() {
        let r = this.readBigNumberOpt();
        if (r !== null) {
            return Number(r);
        }
        else {
            return null;
        }
    }
    readBoolean() {
        let res = this.readNumber();
        return res === 0 ? false : true;
    }
    readBooleanOpt() {
        let res = this.readNumberOpt();
        if (res !== null) {
            return res === 0 ? false : true;
        }
        else {
            return null;
        }
    }
    readAddress() {
        let r = this.readCell().beginParse().loadAddress();
        if (r !== null) {
            return r;
        }
        else {
            throw Error('Not an address');
        }
    }
    readAddressOpt() {
        let r = this.readCellOpt();
        if (r !== null) {
            return r.beginParse().loadMaybeAddress();
        }
        else {
            return null;
        }
    }
    readCell() {
        let popped = this.pop();
        if (popped.type !== 'cell' && popped.type !== 'slice' && popped.type !== 'builder') {
            throw Error('Not a cell: ' + popped.type);
        }
        return popped.cell;
    }
    readCellOpt() {
        let popped = this.pop();
        if (popped.type === 'null') {
            return null;
        }
        if (popped.type !== 'cell' && popped.type !== 'slice' && popped.type !== 'builder') {
            throw Error('Not a cell');
        }
        return popped.cell;
    }
    readTuple() {
        let popped = this.pop();
        if (popped.type !== 'tuple') {
            throw Error('Not a tuple');
        }
        return new TupleReader(popped.items);
    }
    readTupleOpt() {
        let popped = this.pop();
        if (popped.type === 'null') {
            return null;
        }
        if (popped.type !== 'tuple') {
            throw Error('Not a tuple');
        }
        return new TupleReader(popped.items);
    }
    static readLispList(reader) {
        const result = [];
        let tail = reader;
        while (tail !== null) {
            var head = tail.pop();
            if (tail.items.length === 0 || (tail.items[0].type !== 'tuple' && tail.items[0].type !== 'null')) {
                throw Error('Lisp list consists only from (any, tuple) elements and ends with null');
            }
            tail = tail.readTupleOpt();
            result.push(head);
        }
        return result;
    }
    readLispListDirect() {
        if (this.items.length === 1 && this.items[0].type === 'null') {
            return [];
        }
        return TupleReader.readLispList(this);
    }
    readLispList() {
        return TupleReader.readLispList(this.readTupleOpt());
    }
    readBuffer() {
        let s = this.readCell().beginParse();
        if (s.remainingRefs !== 0) {
            throw Error('Not a buffer');
        }
        if (s.remainingBits % 8 !== 0) {
            throw Error('Not a buffer');
        }
        return s.loadBuffer(s.remainingBits / 8);
    }
    readBufferOpt() {
        let r = this.readCellOpt();
        if (r !== null) {
            let s = r.beginParse();
            if (s.remainingRefs !== 0 || s.remainingBits % 8 !== 0) {
                throw Error('Not a buffer');
            }
            return s.loadBuffer(s.remainingBits / 8);
        }
        else {
            return null;
        }
    }
    readString() {
        let s = this.readCell().beginParse();
        return s.loadStringTail();
    }
    readStringOpt() {
        let r = this.readCellOpt();
        if (r !== null) {
            let s = r.beginParse();
            return s.loadStringTail();
        }
        else {
            return null;
        }
    }
}
exports.TupleReader = TupleReader;


/***/ }),

/***/ 21640:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseTuple = exports.serializeTuple = void 0;
const Builder_1 = __webpack_require__(65871);
const INT64_MIN = BigInt('-9223372036854775808');
const INT64_MAX = BigInt('9223372036854775807');
// vm_stk_null#00 = VmStackValue;
// vm_stk_tinyint#01 value:int64 = VmStackValue;
// vm_stk_int#0201_ value:int257 = VmStackValue;
// vm_stk_nan#02ff = VmStackValue;
// vm_stk_cell#03 cell:^Cell = VmStackValue;
//_ cell:^Cell st_bits:(## 10) end_bits:(## 10) { st_bits <= end_bits }
//   st_ref:(#<= 4) end_ref:(#<= 4) { st_ref <= end_ref } = VmCellSlice;
// vm_stk_slice#04 _:VmCellSlice = VmStackValue;
// vm_stk_builder#05 cell:^Cell = VmStackValue;
// vm_stk_cont#06 cont:VmCont = VmStackValue;
// vm_tupref_nil$_ = VmTupleRef 0;
// vm_tupref_single$_ entry:^VmStackValue = VmTupleRef 1;
// vm_tupref_any$_ {n:#} ref:^(VmTuple (n + 2)) = VmTupleRef (n + 2);
// vm_tuple_nil$_ = VmTuple 0;
// vm_tuple_tcons$_ {n:#} head:(VmTupleRef n) tail:^VmStackValue = VmTuple (n + 1);
// vm_stk_tuple#07 len:(## 16) data:(VmTuple len) = VmStackValue;
function serializeTupleItem(src, builder) {
    if (src.type === 'null') {
        builder.storeUint(0x00, 8);
    }
    else if (src.type === 'int') {
        if (src.value <= INT64_MAX && src.value >= INT64_MIN) {
            builder.storeUint(0x01, 8);
            builder.storeInt(src.value, 64);
        }
        else {
            builder.storeUint(0x0100, 15);
            builder.storeInt(src.value, 257);
        }
    }
    else if (src.type === 'nan') {
        builder.storeInt(0x02ff, 16);
    }
    else if (src.type === 'cell') {
        builder.storeUint(0x03, 8);
        builder.storeRef(src.cell);
    }
    else if (src.type === 'slice') {
        builder.storeUint(0x04, 8);
        builder.storeUint(0, 10);
        builder.storeUint(src.cell.bits.length, 10);
        builder.storeUint(0, 3);
        builder.storeUint(src.cell.refs.length, 3);
        builder.storeRef(src.cell);
    }
    else if (src.type === 'builder') {
        builder.storeUint(0x05, 8);
        builder.storeRef(src.cell);
    }
    else if (src.type === 'tuple') {
        let head = null;
        let tail = null;
        for (let i = 0; i < src.items.length; i++) {
            // Swap
            let s = head;
            head = tail;
            tail = s;
            if (i > 1) {
                head = (0, Builder_1.beginCell)()
                    .storeRef(tail)
                    .storeRef(head)
                    .endCell();
            }
            let bc = (0, Builder_1.beginCell)();
            serializeTupleItem(src.items[i], bc);
            tail = bc.endCell();
        }
        builder.storeUint(0x07, 8);
        builder.storeUint(src.items.length, 16);
        if (head) {
            builder.storeRef(head);
        }
        if (tail) {
            builder.storeRef(tail);
        }
    }
    else {
        throw Error('Invalid value');
    }
}
function parseStackItem(cs) {
    let kind = cs.loadUint(8);
    if (kind === 0) {
        return { type: 'null' };
    }
    else if (kind === 1) {
        return { type: 'int', value: cs.loadIntBig(64) };
    }
    else if (kind === 2) {
        if (cs.loadUint(7) === 0) {
            return { type: 'int', value: cs.loadIntBig(257) };
        }
        else {
            cs.loadBit(); // must eq 1
            return { type: 'nan' };
        }
    }
    else if (kind === 3) {
        return { type: 'cell', cell: cs.loadRef() };
    }
    else if (kind === 4) {
        let startBits = cs.loadUint(10);
        let endBits = cs.loadUint(10);
        let startRefs = cs.loadUint(3);
        let endRefs = cs.loadUint(3);
        // Copy to new cell
        let rs = cs.loadRef().beginParse();
        rs.skip(startBits);
        let dt = rs.loadBits(endBits - startBits);
        let builder = (0, Builder_1.beginCell)()
            .storeBits(dt);
        // Copy refs if exist
        if (startRefs < endRefs) {
            for (let i = 0; i < startRefs; i++) {
                rs.loadRef();
            }
            for (let i = 0; i < endRefs - startRefs; i++) {
                builder.storeRef(rs.loadRef());
            }
        }
        return { type: 'slice', cell: builder.endCell() };
    }
    else if (kind === 5) {
        return { type: 'builder', cell: cs.loadRef() };
    }
    else if (kind === 7) {
        let length = cs.loadUint(16);
        let items = [];
        if (length > 1) {
            let head = cs.loadRef().beginParse();
            let tail = cs.loadRef().beginParse();
            items.unshift(parseStackItem(tail));
            for (let i = 0; i < length - 2; i++) {
                let ohead = head;
                head = ohead.loadRef().beginParse();
                tail = ohead.loadRef().beginParse();
                items.unshift(parseStackItem(tail));
            }
            items.unshift(parseStackItem(head));
        }
        else if (length === 1) {
            items.push(parseStackItem(cs.loadRef().beginParse()));
        }
        return { type: 'tuple', items };
    }
    else {
        throw Error('Unsupported stack item');
    }
}
//
// Stack parsing
// Source: https://github.com/ton-foundation/ton/blob/ae5c0720143e231c32c3d2034cfe4e533a16d969/crypto/block/block.tlb#L783
//
// vm_stack#_ depth:(## 24) stack:(VmStackList depth) = VmStack;
// vm_stk_cons#_ {n:#} rest:^(VmStackList n) tos:VmStackValue = VmStackList (n + 1);
// vm_stk_nil#_ = VmStackList 0;
//
function serializeTupleTail(src, builder) {
    if (src.length > 0) {
        // rest:^(VmStackList n)
        let tail = (0, Builder_1.beginCell)();
        serializeTupleTail(src.slice(0, src.length - 1), tail);
        builder.storeRef(tail.endCell());
        // tos
        serializeTupleItem(src[src.length - 1], builder);
    }
}
function serializeTuple(src) {
    let builder = (0, Builder_1.beginCell)();
    builder.storeUint(src.length, 24);
    let r = [...src];
    serializeTupleTail(r, builder);
    return builder.endCell();
}
exports.serializeTuple = serializeTuple;
function parseTuple(src) {
    let res = [];
    let cs = src.beginParse();
    let size = cs.loadUint(24);
    for (let i = 0; i < size; i++) {
        let next = cs.loadRef();
        res.unshift(parseStackItem(cs));
        cs = next.beginParse();
    }
    return res;
}
exports.parseTuple = parseTuple;


/***/ }),

/***/ 22738:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeStateInit = exports.loadStateInit = void 0;
const Dictionary_1 = __webpack_require__(97590);
const SimpleLibrary_1 = __webpack_require__(62672);
const TickTock_1 = __webpack_require__(4599);
;
function loadStateInit(slice) {
    // Split Depth
    let splitDepth;
    if (slice.loadBit()) {
        splitDepth = slice.loadUint(5);
    }
    // TickTock
    let special;
    if (slice.loadBit()) {
        special = (0, TickTock_1.loadTickTock)(slice);
    }
    // Code and Data
    let code = slice.loadMaybeRef();
    let data = slice.loadMaybeRef();
    // Libs
    let libraries = slice.loadDict(Dictionary_1.Dictionary.Keys.BigUint(256), SimpleLibrary_1.SimpleLibraryValue);
    if (libraries.size === 0) {
        libraries = undefined;
    }
    return {
        splitDepth,
        special,
        code,
        data,
        libraries
    };
}
exports.loadStateInit = loadStateInit;
function storeStateInit(src) {
    return (builder) => {
        if (src.splitDepth !== null && src.splitDepth !== undefined) {
            builder.storeBit(true);
            builder.storeUint(src.splitDepth, 5);
        }
        else {
            builder.storeBit(false);
        }
        if (src.special !== null && src.special !== undefined) {
            builder.storeBit(true);
            builder.store((0, TickTock_1.storeTickTock)(src.special));
        }
        else {
            builder.storeBit(false);
        }
        builder.storeMaybeRef(src.code);
        builder.storeMaybeRef(src.data);
        builder.storeDict(src.libraries);
    };
}
exports.storeStateInit = storeStateInit;


/***/ }),

/***/ 22979:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parseDict = void 0;
function readUnaryLength(slice) {
    let res = 0;
    while (slice.loadBit()) {
        res++;
    }
    return res;
}
function doParse(prefix, slice, n, res, extractor) {
    // Reading label
    let lb0 = slice.loadBit() ? 1 : 0;
    let prefixLength = 0;
    let pp = prefix;
    if (lb0 === 0) {
        // Short label detected
        // Read 
        prefixLength = readUnaryLength(slice);
        // Read prefix
        for (let i = 0; i < prefixLength; i++) {
            pp += slice.loadBit() ? '1' : '0';
        }
    }
    else {
        let lb1 = slice.loadBit() ? 1 : 0;
        if (lb1 === 0) {
            // Long label detected
            prefixLength = slice.loadUint(Math.ceil(Math.log2(n + 1)));
            for (let i = 0; i < prefixLength; i++) {
                pp += slice.loadBit() ? '1' : '0';
            }
        }
        else {
            // Same label detected
            let bit = slice.loadBit() ? '1' : '0';
            prefixLength = slice.loadUint(Math.ceil(Math.log2(n + 1)));
            for (let i = 0; i < prefixLength; i++) {
                pp += bit;
            }
        }
    }
    if (n - prefixLength === 0) {
        res.set(BigInt('0b' + pp), extractor(slice));
    }
    else {
        let left = slice.loadRef();
        let right = slice.loadRef();
        // NOTE: Left and right branches are implicitly contain prefixes '0' and '1'
        if (!left.isExotic) {
            doParse(pp + '0', left.beginParse(), n - prefixLength - 1, res, extractor);
        }
        if (!right.isExotic) {
            doParse(pp + '1', right.beginParse(), n - prefixLength - 1, res, extractor);
        }
    }
}
function parseDict(sc, keySize, extractor) {
    let res = new Map();
    if (sc) {
        doParse('', sc, keySize, res, extractor);
    }
    return res;
}
exports.parseDict = parseDict;


/***/ }),

/***/ 26278:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deserializeInternalKey = exports.serializeInternalKey = void 0;
const Address_1 = __webpack_require__(3512);
const BitString_1 = __webpack_require__(62386);
const paddedBits_1 = __webpack_require__(34382);
function serializeInternalKey(value) {
    if (typeof value === 'number') {
        if (!Number.isSafeInteger(value)) {
            throw Error('Invalid key type: not a safe integer: ' + value);
        }
        return 'n:' + value.toString(10);
    }
    else if (typeof value === 'bigint') {
        return 'b:' + value.toString(10);
    }
    else if (Address_1.Address.isAddress(value)) {
        return 'a:' + value.toString();
    }
    else if (Buffer.isBuffer(value)) {
        return 'f:' + value.toString('hex');
    }
    else if (BitString_1.BitString.isBitString(value)) {
        return 'B:' + value.toString();
    }
    else {
        throw Error('Invalid key type');
    }
}
exports.serializeInternalKey = serializeInternalKey;
function deserializeInternalKey(value) {
    let k = value.slice(0, 2);
    let v = value.slice(2);
    if (k === 'n:') {
        return parseInt(v, 10);
    }
    else if (k === 'b:') {
        return BigInt(v);
    }
    else if (k === 'a:') {
        return Address_1.Address.parse(v);
    }
    else if (k === 'f:') {
        return Buffer.from(v, 'hex');
    }
    else if (k === 'B:') {
        const lastDash = v.slice(-1) == "_";
        const isPadded = lastDash || v.length % 2 != 0;
        if (isPadded) {
            let charLen = lastDash ? v.length - 1 : v.length;
            const padded = v.substr(0, charLen) + "0"; //Padding
            if ((!lastDash) && ((charLen & 1) !== 0)) {
                // Four bit nibmle without padding
                return new BitString_1.BitString(Buffer.from(padded, 'hex'), 0, charLen << 2);
            }
            else {
                return (0, paddedBits_1.paddedBufferToBits)(Buffer.from(padded, 'hex'));
            }
        }
        else {
            return new BitString_1.BitString(Buffer.from(v, 'hex'), 0, v.length << 2);
        }
    }
    throw Error('Invalid key type: ' + k);
}
exports.deserializeInternalKey = deserializeInternalKey;


/***/ }),

/***/ 28993:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeShardAccounts = exports.loadShardAccounts = exports.ShardAccountRefValue = void 0;
const Dictionary_1 = __webpack_require__(97590);
const DepthBalanceInfo_1 = __webpack_require__(84458);
const ShardAccount_1 = __webpack_require__(30594);
exports.ShardAccountRefValue = {
    parse: (cs) => {
        let depthBalanceInfo = (0, DepthBalanceInfo_1.loadDepthBalanceInfo)(cs);
        let shardAccount = (0, ShardAccount_1.loadShardAccount)(cs);
        return {
            depthBalanceInfo,
            shardAccount
        };
    },
    serialize(src, builder) {
        builder.store((0, DepthBalanceInfo_1.storeDepthBalanceInfo)(src.depthBalanceInfo));
        builder.store((0, ShardAccount_1.storeShardAccount)(src.shardAccount));
    },
};
function loadShardAccounts(cs) {
    return Dictionary_1.Dictionary.load(Dictionary_1.Dictionary.Keys.BigUint(256), exports.ShardAccountRefValue, cs);
}
exports.loadShardAccounts = loadShardAccounts;
function storeShardAccounts(src) {
    return (Builder) => {
        Builder.storeDict(src);
    };
}
exports.storeShardAccounts = storeShardAccounts;


/***/ }),

/***/ 29039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadMasterchainStateExtra = void 0;
const Dictionary_1 = __webpack_require__(97590);
const CurrencyCollection_1 = __webpack_require__(10574);
function loadMasterchainStateExtra(cs) {
    // Check magic
    if (cs.loadUint(16) !== 0xcc26) {
        throw Error('Invalid data');
    }
    // Skip shard_hashes
    if (cs.loadBit()) {
        cs.loadRef();
    }
    // Read config
    let configAddress = cs.loadUintBig(256);
    let config = Dictionary_1.Dictionary.load(Dictionary_1.Dictionary.Keys.Int(32), Dictionary_1.Dictionary.Values.Cell(), cs);
    // Rad global balance
    const globalBalance = (0, CurrencyCollection_1.loadCurrencyCollection)(cs);
    return {
        config,
        configAddress,
        globalBalance
    };
}
exports.loadMasterchainStateExtra = loadMasterchainStateExtra;


/***/ }),

/***/ 29107:
/***/ ((module) => {

"use strict";

/**
 * <symbol> that can be used to declare custom inspect functions.
 *
 * same as Symbol.for('nodejs.util.inspect.custom')
 * same as util.inspect.custom
 */
const SymbolInspect = Symbol.for('nodejs.util.inspect.custom');
module.exports = SymbolInspect;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 29368:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exoticLibrary = void 0;
const BitReader_1 = __webpack_require__(53528);
function exoticLibrary(bits, refs) {
    const reader = new BitReader_1.BitReader(bits);
    // type + hash
    const size = 8 + 256;
    if (bits.length !== size) {
        throw new Error(`Library cell must have exactly (8 + 256) bits, got "${bits.length}"`);
    }
    // Check type
    let type = reader.loadUint(8);
    if (type !== 2) {
        throw new Error(`Library cell must have type 2, got "${type}"`);
    }
    return {};
}
exports.exoticLibrary = exoticLibrary;


/***/ }),

/***/ 29429:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.crc32c = void 0;
const POLY = 0x82f63b78;
function crc32c(source) {
    let crc = 0 ^ 0xffffffff;
    for (let n = 0; n < source.length; n++) {
        crc ^= source[n];
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
        crc = crc & 1 ? (crc >>> 1) ^ POLY : crc >>> 1;
    }
    crc = crc ^ 0xffffffff;
    // Convert endianness
    let res = Buffer.alloc(4);
    res.writeInt32LE(crc);
    return res;
}
exports.crc32c = crc32c;


/***/ }),

/***/ 30594:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeShardAccount = exports.loadShardAccount = void 0;
const Builder_1 = __webpack_require__(65871);
const Account_1 = __webpack_require__(62142);
function loadShardAccount(slice) {
    let accountRef = slice.loadRef();
    let account = undefined;
    if (!accountRef.isExotic) {
        let accountSlice = accountRef.beginParse();
        if (accountSlice.loadBit()) {
            account = (0, Account_1.loadAccount)(accountSlice);
        }
    }
    return {
        account,
        lastTransactionHash: slice.loadUintBig(256),
        lastTransactionLt: slice.loadUintBig(64)
    };
}
exports.loadShardAccount = loadShardAccount;
function storeShardAccount(src) {
    return (builder) => {
        if (src.account) {
            builder.storeRef((0, Builder_1.beginCell)()
                .storeBit(true)
                .store((0, Account_1.storeAccount)(src.account)));
        }
        else {
            builder.storeRef((0, Builder_1.beginCell)()
                .storeBit(false));
        }
        builder.storeUint(src.lastTransactionHash, 256);
        builder.storeUint(src.lastTransactionLt, 64);
    };
}
exports.storeShardAccount = storeShardAccount;


/***/ }),

/***/ 31459:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToMerkleProof = exports.exoticMerkleProof = void 0;
const BitReader_1 = __webpack_require__(53528);
const Builder_1 = __webpack_require__(65871);
function exoticMerkleProof(bits, refs) {
    const reader = new BitReader_1.BitReader(bits);
    // type + hash + depth
    const size = 8 + 256 + 16;
    if (bits.length !== size) {
        throw new Error(`Merkle Proof cell must have exactly (8 + 256 + 16) bits, got "${bits.length}"`);
    }
    if (refs.length !== 1) {
        throw new Error(`Merkle Proof cell must have exactly 1 ref, got "${refs.length}"`);
    }
    // Check type
    let type = reader.loadUint(8);
    if (type !== 3) {
        throw new Error(`Merkle Proof cell must have type 3, got "${type}"`);
    }
    // Check data
    const proofHash = reader.loadBuffer(32);
    const proofDepth = reader.loadUint(16);
    const refHash = refs[0].hash(0);
    const refDepth = refs[0].depth(0);
    if (proofDepth !== refDepth) {
        throw new Error(`Merkle Proof cell ref depth must be exactly "${proofDepth}", got "${refDepth}"`);
    }
    if (!proofHash.equals(refHash)) {
        throw new Error(`Merkle Proof cell ref hash must be exactly "${proofHash.toString('hex')}", got "${refHash.toString('hex')}"`);
    }
    return {
        proofDepth,
        proofHash
    };
}
exports.exoticMerkleProof = exoticMerkleProof;
function convertToMerkleProof(c) {
    return (0, Builder_1.beginCell)()
        .storeUint(3, 8)
        .storeBuffer(c.hash(0))
        .storeUint(c.depth(0), 16)
        .storeRef(c)
        .endCell({ exotic: true });
}
exports.convertToMerkleProof = convertToMerkleProof;


/***/ }),

/***/ 32370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha512 = exports.sha256 = exports.pbkdf2_sha512 = exports.hmac_sha512 = exports.getSecureRandomWords = exports.getSecureRandomBytes = void 0;
var getSecureRandom_1 = __webpack_require__(36307);
Object.defineProperty(exports, "getSecureRandomBytes", ({ enumerable: true, get: function () { return getSecureRandom_1.getSecureRandomBytes; } }));
Object.defineProperty(exports, "getSecureRandomWords", ({ enumerable: true, get: function () { return getSecureRandom_1.getSecureRandomWords; } }));
var hmac_sha512_1 = __webpack_require__(99967);
Object.defineProperty(exports, "hmac_sha512", ({ enumerable: true, get: function () { return hmac_sha512_1.hmac_sha512; } }));
var pbkdf2_sha512_1 = __webpack_require__(62441);
Object.defineProperty(exports, "pbkdf2_sha512", ({ enumerable: true, get: function () { return pbkdf2_sha512_1.pbkdf2_sha512; } }));
var sha256_1 = __webpack_require__(73150);
Object.defineProperty(exports, "sha256", ({ enumerable: true, get: function () { return sha256_1.sha256; } }));
var sha512_1 = __webpack_require__(43999);
Object.defineProperty(exports, "sha512", ({ enumerable: true, get: function () { return sha512_1.sha512; } }));


/***/ }),

/***/ 32423:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeShardIdent = exports.loadShardIdent = void 0;
function loadShardIdent(slice) {
    if (slice.loadUint(2) !== 0) {
        throw Error('Invalid data');
    }
    return {
        shardPrefixBits: slice.loadUint(6),
        workchainId: slice.loadInt(32),
        shardPrefix: slice.loadUintBig(64)
    };
}
exports.loadShardIdent = loadShardIdent;
function storeShardIdent(src) {
    return (builder) => {
        builder.storeUint(0, 2);
        builder.storeUint(src.shardPrefixBits, 6);
        builder.storeInt(src.workchainId, 32);
        builder.storeUint(src.shardPrefix, 64);
    };
}
exports.storeShardIdent = storeShardIdent;


/***/ }),

/***/ 33910:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeDict = exports.detectLabelType = exports.writeLabelSame = exports.writeLabelLong = exports.writeLabelShort = exports.buildTree = void 0;
const Builder_1 = __webpack_require__(65871);
const findCommonPrefix_1 = __webpack_require__(47182);
//
// Tree Build
//
function pad(src, size) {
    while (src.length < size) {
        src = '0' + src;
    }
    return src;
}
function removePrefixMap(src, length) {
    if (length === 0) {
        return src;
    }
    else {
        let res = new Map();
        for (let k of src.keys()) {
            let d = src.get(k);
            res.set(k.slice(length), d);
        }
        return res;
    }
}
function forkMap(src, prefixLen) {
    if (src.size === 0) {
        throw Error('Internal inconsistency');
    }
    let left = new Map();
    let right = new Map();
    for (let [k, d] of src.entries()) {
        if (k[prefixLen] === '0') {
            left.set(k, d);
        }
        else {
            right.set(k, d);
        }
    }
    if (left.size === 0) {
        throw Error('Internal inconsistency. Left emtpy.');
    }
    if (right.size === 0) {
        throw Error('Internal inconsistency. Right emtpy.');
    }
    return { left, right };
}
function buildNode(src, prefixLen) {
    if (src.size === 0) {
        throw Error('Internal inconsistency');
    }
    if (src.size === 1) {
        return { type: 'leaf', value: Array.from(src.values())[0] };
    }
    let { left, right } = forkMap(src, prefixLen);
    return {
        type: 'fork',
        left: buildEdge(left, prefixLen + 1),
        right: buildEdge(right, prefixLen + 1)
    };
}
function buildEdge(src, prefixLen = 0) {
    if (src.size === 0) {
        throw Error('Internal inconsistency');
    }
    const label = (0, findCommonPrefix_1.findCommonPrefix)(Array.from(src.keys()), prefixLen);
    return { label, node: buildNode(src, label.length + prefixLen) };
}
function buildTree(src, keyLength) {
    // Convert map keys
    let converted = new Map();
    for (let k of Array.from(src.keys())) {
        const padded = pad(k.toString(2), keyLength);
        converted.set(padded, src.get(k));
    }
    // Calculate root label
    return buildEdge(converted);
}
exports.buildTree = buildTree;
//
// Serialization
//
function writeLabelShort(src, to) {
    // Header
    to.storeBit(0);
    // Unary length
    for (let i = 0; i < src.length; i++) {
        to.storeBit(1);
    }
    to.storeBit(0);
    // Value
    if (src.length > 0) {
        to.storeUint(BigInt('0b' + src), src.length);
    }
    return to;
}
exports.writeLabelShort = writeLabelShort;
function labelShortLength(src) {
    return 1 + src.length + 1 + src.length;
}
function writeLabelLong(src, keyLength, to) {
    // Header
    to.storeBit(1);
    to.storeBit(0);
    // Length
    let length = Math.ceil(Math.log2(keyLength + 1));
    to.storeUint(src.length, length);
    // Value
    if (src.length > 0) {
        to.storeUint(BigInt('0b' + src), src.length);
    }
    return to;
}
exports.writeLabelLong = writeLabelLong;
function labelLongLength(src, keyLength) {
    return 1 + 1 + Math.ceil(Math.log2(keyLength + 1)) + src.length;
}
function writeLabelSame(value, length, keyLength, to) {
    // Header
    to.storeBit(1);
    to.storeBit(1);
    // Value
    to.storeBit(value);
    // Length
    let lenLen = Math.ceil(Math.log2(keyLength + 1));
    to.storeUint(length, lenLen);
}
exports.writeLabelSame = writeLabelSame;
function labelSameLength(keyLength) {
    return 1 + 1 + 1 + Math.ceil(Math.log2(keyLength + 1));
}
function isSame(src) {
    if (src.length === 0 || src.length === 1) {
        return true;
    }
    for (let i = 1; i < src.length; i++) {
        if (src[i] !== src[0]) {
            return false;
        }
    }
    return true;
}
function detectLabelType(src, keyLength) {
    let kind = 'short';
    let kindLength = labelShortLength(src);
    let longLength = labelLongLength(src, keyLength);
    if (longLength < kindLength) {
        kindLength = longLength;
        kind = 'long';
    }
    if (isSame(src)) {
        let sameLength = labelSameLength(keyLength);
        if (sameLength < kindLength) {
            kindLength = sameLength;
            kind = 'same';
        }
    }
    return kind;
}
exports.detectLabelType = detectLabelType;
function writeLabel(src, keyLength, to) {
    let type = detectLabelType(src, keyLength);
    if (type === 'short') {
        writeLabelShort(src, to);
    }
    else if (type === 'long') {
        writeLabelLong(src, keyLength, to);
    }
    else if (type === 'same') {
        writeLabelSame(src[0] === '1', src.length, keyLength, to);
    }
}
function writeNode(src, keyLength, serializer, to) {
    if (src.type === 'leaf') {
        serializer(src.value, to);
    }
    if (src.type === 'fork') {
        const leftCell = (0, Builder_1.beginCell)();
        const rightCell = (0, Builder_1.beginCell)();
        writeEdge(src.left, keyLength - 1, serializer, leftCell);
        writeEdge(src.right, keyLength - 1, serializer, rightCell);
        to.storeRef(leftCell);
        to.storeRef(rightCell);
    }
}
function writeEdge(src, keyLength, serializer, to) {
    writeLabel(src.label, keyLength, to);
    writeNode(src.node, keyLength - src.label.length, serializer, to);
}
function serializeDict(src, keyLength, serializer, to) {
    const tree = buildTree(src, keyLength);
    writeEdge(tree, keyLength, serializer, to);
}
exports.serializeDict = serializeDict;


/***/ }),

/***/ 34382:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.paddedBufferToBits = exports.bitsToPaddedBuffer = void 0;
const BitBuilder_1 = __webpack_require__(49924);
const BitString_1 = __webpack_require__(62386);
function bitsToPaddedBuffer(bits) {
    // Create builder
    let builder = new BitBuilder_1.BitBuilder(Math.ceil(bits.length / 8) * 8);
    builder.writeBits(bits);
    // Apply padding
    let padding = Math.ceil(bits.length / 8) * 8 - bits.length;
    for (let i = 0; i < padding; i++) {
        if (i === 0) {
            builder.writeBit(1);
        }
        else {
            builder.writeBit(0);
        }
    }
    return builder.buffer();
}
exports.bitsToPaddedBuffer = bitsToPaddedBuffer;
function paddedBufferToBits(buff) {
    let bitLen = 0;
    // Finding rightmost non-zero byte in the buffer
    for (let i = buff.length - 1; i >= 0; i--) {
        if (buff[i] !== 0) {
            const testByte = buff[i];
            // Looking for a rightmost set padding bit
            let bitPos = testByte & -testByte;
            if ((bitPos & 1) == 0) {
                // It's power of 2 (only one bit set)
                bitPos = Math.log2(bitPos) + 1;
            }
            if (i > 0) {
                // If we are dealing with more than 1 byte buffer
                bitLen = i << 3; //Number of full bytes * 8
            }
            bitLen += 8 - bitPos;
            break;
        }
    }
    return new BitString_1.BitString(buff, 0, bitLen);
}
exports.paddedBufferToBits = paddedBufferToBits;


/***/ }),

/***/ 34654:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CellType = void 0;
var CellType;
(function (CellType) {
    CellType[CellType["Ordinary"] = -1] = "Ordinary";
    CellType[CellType["PrunedBranch"] = 1] = "PrunedBranch";
    CellType[CellType["Library"] = 2] = "Library";
    CellType[CellType["MerkleProof"] = 3] = "MerkleProof";
    CellType[CellType["MerkleUpdate"] = 4] = "MerkleUpdate";
})(CellType || (exports.CellType = CellType = {}));


/***/ }),

/***/ 35726:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransactionBouncePhase = exports.loadTransactionBouncePhase = void 0;
const StorageUsedShort_1 = __webpack_require__(51143);
function loadTransactionBouncePhase(slice) {
    // Ok
    if (slice.loadBit()) {
        let messageSize = (0, StorageUsedShort_1.loadStorageUsedShort)(slice);
        let messageFees = slice.loadCoins();
        let forwardFees = slice.loadCoins();
        return {
            type: "ok",
            messageSize,
            messageFees,
            forwardFees,
        };
    }
    // No funds
    if (slice.loadBit()) {
        let messageSize = (0, StorageUsedShort_1.loadStorageUsedShort)(slice);
        let requiredForwardFees = slice.loadCoins();
        return {
            type: "no-funds",
            messageSize,
            requiredForwardFees,
        };
    }
    // Negative funds
    return {
        type: "negative-funds",
    };
}
exports.loadTransactionBouncePhase = loadTransactionBouncePhase;
function storeTransactionBouncePhase(src) {
    return (builder) => {
        if (src.type === 'ok') {
            builder.storeBit(true);
            builder.store((0, StorageUsedShort_1.storeStorageUsedShort)(src.messageSize));
            builder.storeCoins(src.messageFees);
            builder.storeCoins(src.forwardFees);
        }
        else if (src.type === 'negative-funds') {
            builder.storeBit(false);
            builder.storeBit(false);
        }
        else if (src.type === 'no-funds') {
            builder.storeBit(false);
            builder.storeBit(true);
            builder.store((0, StorageUsedShort_1.storeStorageUsedShort)(src.messageSize));
            builder.storeCoins(src.requiredForwardFees);
        }
        else {
            throw new Error("Invalid TransactionBouncePhase type");
        }
    };
}
exports.storeTransactionBouncePhase = storeTransactionBouncePhase;


/***/ }),

/***/ 35735:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deriveEd25519Path = exports.deriveED25519HardenedKey = exports.getED25519MasterKeyFromSeed = void 0;
const hmac_sha512_1 = __webpack_require__(4870);
const ED25519_CURVE = 'ed25519 seed';
const HARDENED_OFFSET = 0x80000000;
async function getED25519MasterKeyFromSeed(seed) {
    const I = await (0, hmac_sha512_1.hmac_sha512)(ED25519_CURVE, seed);
    const IL = I.slice(0, 32);
    const IR = I.slice(32);
    return {
        key: IL,
        chainCode: IR,
    };
}
exports.getED25519MasterKeyFromSeed = getED25519MasterKeyFromSeed;
;
async function deriveED25519HardenedKey(parent, index) {
    if (index >= HARDENED_OFFSET) {
        throw Error('Key index must be less than offset');
    }
    // Key Derive Path: 0x00 + parent.key + index;
    const indexBuffer = Buffer.alloc(4);
    indexBuffer.writeUInt32BE(index + HARDENED_OFFSET, 0);
    const data = Buffer.concat([Buffer.alloc(1, 0), parent.key, indexBuffer]);
    // Derive key
    const I = await (0, hmac_sha512_1.hmac_sha512)(parent.chainCode, data);
    const IL = I.slice(0, 32);
    const IR = I.slice(32);
    return {
        key: IL,
        chainCode: IR,
    };
}
exports.deriveED25519HardenedKey = deriveED25519HardenedKey;
;
async function deriveEd25519Path(seed, path) {
    let state = await getED25519MasterKeyFromSeed(seed);
    let remaining = [...path];
    while (remaining.length > 0) {
        let index = remaining[0];
        remaining = remaining.slice(1);
        state = await deriveED25519HardenedKey(state, index);
    }
    return state.key;
}
exports.deriveEd25519Path = deriveEd25519Path;


/***/ }),

/***/ 36307:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSecureRandomWords = exports.getSecureRandomBytes = void 0;
function getSecureRandomBytes(size) {
    return Buffer.from(window.crypto.getRandomValues(new Uint8Array(size)));
}
exports.getSecureRandomBytes = getSecureRandomBytes;
function getSecureRandomWords(size) {
    return window.crypto.getRandomValues(new Uint16Array(size));
}
exports.getSecureRandomWords = getSecureRandomWords;


/***/ }),

/***/ 37007:
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ 41080:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.topologicalSort = void 0;
function topologicalSort(src) {
    let pending = [src];
    let allCells = new Map();
    let notPermCells = new Set();
    let sorted = [];
    while (pending.length > 0) {
        const cells = [...pending];
        pending = [];
        for (let cell of cells) {
            const hash = cell.hash().toString('hex');
            if (allCells.has(hash)) {
                continue;
            }
            notPermCells.add(hash);
            allCells.set(hash, { cell: cell, refs: cell.refs.map((v) => v.hash().toString('hex')) });
            for (let r of cell.refs) {
                pending.push(r);
            }
        }
    }
    let tempMark = new Set();
    function visit(hash) {
        if (!notPermCells.has(hash)) {
            return;
        }
        if (tempMark.has(hash)) {
            throw Error('Not a DAG');
        }
        tempMark.add(hash);
        let refs = allCells.get(hash).refs;
        for (let ci = refs.length - 1; ci >= 0; ci--) {
            visit(refs[ci]);
        }
        sorted.push(hash);
        tempMark.delete(hash);
        notPermCells.delete(hash);
    }
    while (notPermCells.size > 0) {
        const id = Array.from(notPermCells)[0];
        visit(id);
    }
    let indexes = new Map();
    for (let i = 0; i < sorted.length; i++) {
        indexes.set(sorted[sorted.length - i - 1], i);
    }
    let result = [];
    for (let i = sorted.length - 1; i >= 0; i--) {
        let ent = sorted[i];
        const rrr = allCells.get(ent);
        result.push({ cell: rrr.cell, refs: rrr.refs.map((v) => indexes.get(v)) });
    }
    return result;
}
exports.topologicalSort = topologicalSort;


/***/ }),

/***/ 41766:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReserveMode = void 0;
var ReserveMode;
(function (ReserveMode) {
    ReserveMode[ReserveMode["THIS_AMOUNT"] = 0] = "THIS_AMOUNT";
    ReserveMode[ReserveMode["LEAVE_THIS_AMOUNT"] = 1] = "LEAVE_THIS_AMOUNT";
    ReserveMode[ReserveMode["AT_MOST_THIS_AMOUNT"] = 2] = "AT_MOST_THIS_AMOUNT";
    ReserveMode[ReserveMode["LEAVE_MAX_THIS_AMOUNT"] = 3] = "LEAVE_MAX_THIS_AMOUNT";
    ReserveMode[ReserveMode["BEFORE_BALANCE_PLUS_THIS_AMOUNT"] = 4] = "BEFORE_BALANCE_PLUS_THIS_AMOUNT";
    ReserveMode[ReserveMode["LEAVE_BBALANCE_PLUS_THIS_AMOUNT"] = 5] = "LEAVE_BBALANCE_PLUS_THIS_AMOUNT";
    ReserveMode[ReserveMode["BEFORE_BALANCE_MINUS_THIS_AMOUNT"] = 12] = "BEFORE_BALANCE_MINUS_THIS_AMOUNT";
    ReserveMode[ReserveMode["LEAVE_BEFORE_BALANCE_MINUS_THIS_AMOUNT"] = 13] = "LEAVE_BEFORE_BALANCE_MINUS_THIS_AMOUNT";
})(ReserveMode || (exports.ReserveMode = ReserveMode = {}));


/***/ }),

/***/ 42230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateMerkleUpdate = void 0;
const Builder_1 = __webpack_require__(65871);
const generateMerkleProof_1 = __webpack_require__(78981);
function convertToMerkleUpdate(c1, c2) {
    return (0, Builder_1.beginCell)()
        .storeUint(4, 8)
        .storeBuffer(c1.hash(0))
        .storeBuffer(c2.hash(0))
        .storeUint(c1.depth(0), 16)
        .storeUint(c2.depth(0), 16)
        .storeRef(c1)
        .storeRef(c2)
        .endCell({ exotic: true });
}
function generateMerkleUpdate(dict, key, keyObject, newValue) {
    const oldProof = (0, generateMerkleProof_1.generateMerkleProof)(dict, [key], keyObject).refs[0];
    dict.set(key, newValue);
    const newProof = (0, generateMerkleProof_1.generateMerkleProof)(dict, [key], keyObject).refs[0];
    return convertToMerkleUpdate(oldProof, newProof);
}
exports.generateMerkleUpdate = generateMerkleUpdate;


/***/ }),

/***/ 43999:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha512 = void 0;
async function sha512(source) {
    if (typeof source === 'string') {
        return Buffer.from(await crypto.subtle.digest("SHA-512", Buffer.from(source, 'utf-8')));
    }
    return Buffer.from(await crypto.subtle.digest("SHA-512", source));
}
exports.sha512 = sha512;


/***/ }),

/***/ 44117:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TupleBuilder = void 0;
const Builder_1 = __webpack_require__(65871);
const Cell_1 = __webpack_require__(66902);
const Slice_1 = __webpack_require__(56906);
class TupleBuilder {
    constructor() {
        this._tuple = [];
    }
    writeNumber(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            this._tuple.push({ type: 'int', value: BigInt(v) });
        }
    }
    writeBoolean(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            this._tuple.push({ type: 'int', value: v ? -1n : 0n });
        }
    }
    writeBuffer(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            this._tuple.push({ type: 'slice', cell: (0, Builder_1.beginCell)().storeBuffer(v).endCell() });
        }
    }
    writeString(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            this._tuple.push({ type: 'slice', cell: (0, Builder_1.beginCell)().storeStringTail(v).endCell() });
        }
    }
    writeCell(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            if (v instanceof Cell_1.Cell) {
                this._tuple.push({ type: 'cell', cell: v });
            }
            else if (v instanceof Slice_1.Slice) {
                this._tuple.push({ type: 'cell', cell: v.asCell() });
            }
        }
    }
    writeSlice(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            if (v instanceof Cell_1.Cell) {
                this._tuple.push({ type: 'slice', cell: v });
            }
            else if (v instanceof Slice_1.Slice) {
                this._tuple.push({ type: 'slice', cell: v.asCell() });
            }
        }
    }
    writeBuilder(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            if (v instanceof Cell_1.Cell) {
                this._tuple.push({ type: 'builder', cell: v });
            }
            else if (v instanceof Slice_1.Slice) {
                this._tuple.push({ type: 'builder', cell: v.asCell() });
            }
        }
    }
    writeTuple(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            this._tuple.push({ type: 'tuple', items: v });
        }
    }
    writeAddress(v) {
        if (v === null || v === undefined) {
            this._tuple.push({ type: 'null' });
        }
        else {
            this._tuple.push({ type: 'slice', cell: (0, Builder_1.beginCell)().storeAddress(v).endCell() });
        }
    }
    build() {
        return [...this._tuple];
    }
}
exports.TupleBuilder = TupleBuilder;


/***/ }),

/***/ 46815:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deriveMnemonicsPath = exports.deriveMnemonicHardenedKey = exports.getMnemonicsMasterKeyFromSeed = void 0;
const mnemonic_1 = __webpack_require__(10132);
const hmac_sha512_1 = __webpack_require__(4870);
const HARDENED_OFFSET = 0x80000000;
const MNEMONICS_SEED = 'TON Mnemonics HD seed';
async function getMnemonicsMasterKeyFromSeed(seed) {
    const I = await (0, hmac_sha512_1.hmac_sha512)(MNEMONICS_SEED, seed);
    const IL = I.slice(0, 32);
    const IR = I.slice(32);
    return {
        key: IL,
        chainCode: IR,
    };
}
exports.getMnemonicsMasterKeyFromSeed = getMnemonicsMasterKeyFromSeed;
;
async function deriveMnemonicHardenedKey(parent, index) {
    if (index >= HARDENED_OFFSET) {
        throw Error('Key index must be less than offset');
    }
    // Key Derive Path: 0x00 + parent.key + index;
    const indexBuffer = Buffer.alloc(4);
    indexBuffer.writeUInt32BE(index + HARDENED_OFFSET, 0);
    const data = Buffer.concat([Buffer.alloc(1, 0), parent.key, indexBuffer]);
    // Derive key
    const I = await (0, hmac_sha512_1.hmac_sha512)(parent.chainCode, data);
    const IL = I.slice(0, 32);
    const IR = I.slice(32);
    return {
        key: IL,
        chainCode: IR,
    };
}
exports.deriveMnemonicHardenedKey = deriveMnemonicHardenedKey;
async function deriveMnemonicsPath(seed, path, wordsCount = 24, password) {
    let state = await getMnemonicsMasterKeyFromSeed(seed);
    let remaining = [...path];
    while (remaining.length > 0) {
        let index = remaining[0];
        remaining = remaining.slice(1);
        state = await deriveMnemonicHardenedKey(state, index);
    }
    return await (0, mnemonic_1.mnemonicFromRandomSeed)(state.key, wordsCount, password);
}
exports.deriveMnemonicsPath = deriveMnemonicsPath;


/***/ }),

/***/ 47182:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findCommonPrefix = void 0;
function findCommonPrefix(src, startPos = 0) {
    // Corner cases
    if (src.length === 0) {
        return '';
    }
    let r = src[0].slice(startPos);
    for (let i = 1; i < src.length; i++) {
        const s = src[i];
        while (s.indexOf(r, startPos) !== startPos) {
            r = r.substring(0, r.length - 1);
            if (r === '') {
                return r;
            }
        }
    }
    return r;
}
exports.findCommonPrefix = findCommonPrefix;


/***/ }),

/***/ 48178:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageValue = exports.storeMessage = exports.loadMessage = void 0;
const Builder_1 = __webpack_require__(65871);
const CommonMessageInfo_1 = __webpack_require__(60445);
const StateInit_1 = __webpack_require__(22738);
function loadMessage(slice) {
    const info = (0, CommonMessageInfo_1.loadCommonMessageInfo)(slice);
    let init = null;
    if (slice.loadBit()) {
        if (!slice.loadBit()) {
            init = (0, StateInit_1.loadStateInit)(slice);
        }
        else {
            init = (0, StateInit_1.loadStateInit)(slice.loadRef().beginParse());
        }
    }
    const body = slice.loadBit() ? slice.loadRef() : slice.asCell();
    return {
        info,
        init,
        body
    };
}
exports.loadMessage = loadMessage;
function storeMessage(message, opts) {
    return (builder) => {
        // Store CommonMsgInfo
        builder.store((0, CommonMessageInfo_1.storeCommonMessageInfo)(message.info));
        // Store init
        if (message.init) {
            builder.storeBit(true);
            let initCell = (0, Builder_1.beginCell)().store((0, StateInit_1.storeStateInit)(message.init));
            // Check if need to store it in ref
            let needRef = false;
            if (opts && opts.forceRef) {
                needRef = true;
            }
            else {
                needRef = builder.availableBits - 2 /* At least two bits for ref flags */ < initCell.bits + message.body.bits.length;
            }
            // Persist init
            if (needRef) {
                builder.storeBit(true);
                builder.storeRef(initCell);
            }
            else {
                builder.storeBit(false);
                builder.storeBuilder(initCell);
            }
        }
        else {
            builder.storeBit(false);
        }
        // Store body
        let needRef = false;
        if (opts && opts.forceRef) {
            needRef = true;
        }
        else {
            needRef = builder.availableBits - 1 /* At least one bit for ref flag */ < message.body.bits.length ||
                builder.refs + message.body.refs.length > 4;
        }
        if (needRef) {
            builder.storeBit(true);
            builder.storeRef(message.body);
        }
        else {
            builder.storeBit(false);
            builder.storeBuilder(message.body.asBuilder());
        }
    };
}
exports.storeMessage = storeMessage;
exports.MessageValue = {
    serialize(src, builder) {
        builder.storeRef((0, Builder_1.beginCell)()
            .store(storeMessage(src)));
    },
    parse(slice) {
        return loadMessage(slice.loadRef().beginParse());
    }
};


/***/ }),

/***/ 49556:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeString = exports.stringToCell = exports.readString = void 0;
const Builder_1 = __webpack_require__(65871);
function readBuffer(slice) {
    // Check consistency
    if (slice.remainingBits % 8 !== 0) {
        throw new Error(`Invalid string length: ${slice.remainingBits}`);
    }
    if (slice.remainingRefs !== 0 && slice.remainingRefs !== 1) {
        throw new Error(`invalid number of refs: ${slice.remainingRefs}`);
    }
    // Read string
    let res;
    if (slice.remainingBits === 0) {
        res = Buffer.alloc(0);
    }
    else {
        res = slice.loadBuffer(slice.remainingBits / 8);
    }
    // Read tail
    if (slice.remainingRefs === 1) {
        res = Buffer.concat([res, readBuffer(slice.loadRef().beginParse())]);
    }
    return res;
}
function readString(slice) {
    return readBuffer(slice).toString();
}
exports.readString = readString;
function writeBuffer(src, builder) {
    if (src.length > 0) {
        let bytes = Math.floor(builder.availableBits / 8);
        if (src.length > bytes) {
            let a = src.subarray(0, bytes);
            let t = src.subarray(bytes);
            builder = builder.storeBuffer(a);
            let bb = (0, Builder_1.beginCell)();
            writeBuffer(t, bb);
            builder = builder.storeRef(bb.endCell());
        }
        else {
            builder = builder.storeBuffer(src);
        }
    }
}
function stringToCell(src) {
    let builder = (0, Builder_1.beginCell)();
    writeBuffer(Buffer.from(src), builder);
    return builder.endCell();
}
exports.stringToCell = stringToCell;
function writeString(src, builder) {
    writeBuffer(Buffer.from(src), builder);
}
exports.writeString = writeString;


/***/ }),

/***/ 49589:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeSplitMergeInfo = exports.loadSplitMergeInfo = void 0;
function loadSplitMergeInfo(slice) {
    let currentShardPrefixLength = slice.loadUint(6);
    let accountSplitDepth = slice.loadUint(6);
    let thisAddress = slice.loadUintBig(256);
    let siblingAddress = slice.loadUintBig(256);
    return {
        currentShardPrefixLength,
        accountSplitDepth,
        thisAddress,
        siblingAddress
    };
}
exports.loadSplitMergeInfo = loadSplitMergeInfo;
function storeSplitMergeInfo(src) {
    return (builder) => {
        builder.storeUint(src.currentShardPrefixLength, 6);
        builder.storeUint(src.accountSplitDepth, 6);
        builder.storeUint(src.thisAddress, 256);
        builder.storeUint(src.siblingAddress, 256);
    };
}
exports.storeSplitMergeInfo = storeSplitMergeInfo;


/***/ }),

/***/ 49924:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitBuilder = void 0;
const Address_1 = __webpack_require__(3512);
const ExternalAddress_1 = __webpack_require__(71629);
const BitString_1 = __webpack_require__(62386);
/**
 * Class for building bit strings
 */
class BitBuilder {
    constructor(size = 1023) {
        this._buffer = Buffer.alloc(Math.ceil(size / 8));
        this._length = 0;
    }
    /**
     * Current number of bits written
     */
    get length() {
        return this._length;
    }
    /**
     * Write a single bit
     * @param value bit to write, true or positive number for 1, false or zero or negative for 0
     */
    writeBit(value) {
        // Check overflow
        let n = this._length;
        if (n > this._buffer.length * 8) {
            throw new Error("BitBuilder overflow");
        }
        // Set bit
        if ((typeof value === 'boolean' && value === true) || (typeof value === 'number' && value > 0)) {
            this._buffer[(n / 8) | 0] |= 1 << (7 - (n % 8));
        }
        // Advance
        this._length++;
    }
    /**
     * Copy bits from BitString
     * @param src source bits
     */
    writeBits(src) {
        for (let i = 0; i < src.length; i++) {
            this.writeBit(src.at(i));
        }
    }
    /**
     * Write bits from buffer
     * @param src source buffer
     */
    writeBuffer(src) {
        // Special case for aligned offsets
        if (this._length % 8 === 0) {
            if (this._length + src.length * 8 > this._buffer.length * 8) {
                throw new Error("BitBuilder overflow");
            }
            src.copy(this._buffer, this._length / 8);
            this._length += src.length * 8;
        }
        else {
            for (let i = 0; i < src.length; i++) {
                this.writeUint(src[i], 8);
            }
        }
    }
    /**
     * Write uint value
     * @param value value as bigint or number
     * @param bits number of bits to write
     */
    writeUint(value, bits) {
        if (bits < 0 || !Number.isSafeInteger(bits)) {
            throw Error(`invalid bit length. Got ${bits}`);
        }
        const v = BigInt(value);
        if (bits === 0) {
            if (v !== 0n) {
                throw Error(`value is not zero for ${bits} bits. Got ${value}`);
            }
            else {
                return;
            }
        }
        const vBits = (1n << BigInt(bits));
        if (v < 0 || v >= vBits) {
            throw Error(`bitLength is too small for a value ${value}. Got ${bits}`);
        }
        if (this._length + bits > this._buffer.length * 8) {
            throw new Error("BitBuilder overflow");
        }
        const tillByte = 8 - (this._length % 8);
        if (tillByte > 0) {
            const bidx = Math.floor(this._length / 8);
            if (bits < tillByte) {
                const wb = Number(v);
                this._buffer[bidx] |= wb << (tillByte - bits);
                this._length += bits;
            }
            else {
                const wb = Number(v >> BigInt(bits - tillByte));
                this._buffer[bidx] |= wb;
                this._length += tillByte;
            }
        }
        bits -= tillByte;
        while (bits > 0) {
            if (bits >= 8) {
                this._buffer[this._length / 8] = Number((v >> BigInt(bits - 8)) & 0xffn);
                this._length += 8;
                bits -= 8;
            }
            else {
                this._buffer[this._length / 8] = Number((v << BigInt(8 - bits)) & 0xffn);
                this._length += bits;
                bits = 0;
            }
        }
    }
    /**
     * Write int value
     * @param value value as bigint or number
     * @param bits number of bits to write
     */
    writeInt(value, bits) {
        let v = BigInt(value);
        if (bits < 0 || !Number.isSafeInteger(bits)) {
            throw Error(`invalid bit length. Got ${bits}`);
        }
        // Corner case for zero bits
        if (bits === 0) {
            if (value !== 0n) {
                throw Error(`value is not zero for ${bits} bits. Got ${value}`);
            }
            else {
                return;
            }
        }
        // Corner case for one bit
        if (bits === 1) {
            if (value !== -1n && value !== 0n) {
                throw Error(`value is not zero or -1 for ${bits} bits. Got ${value}`);
            }
            else {
                this.writeBit(value === -1n);
                return;
            }
        }
        // Check input
        let vBits = 1n << (BigInt(bits) - 1n);
        if (v < -vBits || v >= vBits) {
            throw Error(`value is out of range for ${bits} bits. Got ${value}`);
        }
        // Write sign
        if (v < 0) {
            this.writeBit(true);
            v = vBits + v;
        }
        else {
            this.writeBit(false);
        }
        // Write value
        this.writeUint(v, bits - 1);
    }
    /**
     * Wrtie var uint value, used for serializing coins
     * @param value value to write as bigint or number
     * @param bits header bits to write size
     */
    writeVarUint(value, bits) {
        let v = BigInt(value);
        if (bits < 0 || !Number.isSafeInteger(bits)) {
            throw Error(`invalid bit length. Got ${bits}`);
        }
        if (v < 0) {
            throw Error(`value is negative. Got ${value}`);
        }
        // Corner case for zero
        if (v === 0n) {
            // Write zero size
            this.writeUint(0, bits);
            return;
        }
        // Calculate size
        const sizeBytes = Math.ceil((v.toString(2).length) / 8); // Fastest way in most environments
        const sizeBits = sizeBytes * 8;
        // Write size
        this.writeUint(sizeBytes, bits);
        // Write number
        this.writeUint(v, sizeBits);
    }
    /**
     * Wrtie var int value, used for serializing coins
     * @param value value to write as bigint or number
     * @param bits header bits to write size
     */
    writeVarInt(value, bits) {
        let v = BigInt(value);
        if (bits < 0 || !Number.isSafeInteger(bits)) {
            throw Error(`invalid bit length. Got ${bits}`);
        }
        // Corner case for zero
        if (v === 0n) {
            // Write zero size
            this.writeUint(0, bits);
            return;
        }
        // Calculate size
        let v2 = v > 0 ? v : -v;
        const sizeBytes = Math.ceil((v2.toString(2).length + 1) / 8); // Fastest way in most environments
        const sizeBits = sizeBytes * 8;
        // Write size
        this.writeUint(sizeBytes, bits);
        // Write number
        this.writeInt(v, sizeBits);
    }
    /**
     * Write coins in var uint format
     * @param amount amount to write
     */
    writeCoins(amount) {
        this.writeVarUint(amount, 4);
    }
    /**
     * Write address
     * @param address write address or address external
     */
    writeAddress(address) {
        // Is empty address
        if (address === null || address === undefined) {
            this.writeUint(0, 2); // Empty address
            return;
        }
        // Is Internal Address
        if (Address_1.Address.isAddress(address)) {
            this.writeUint(2, 2); // Internal address
            this.writeUint(0, 1); // No anycast
            this.writeInt(address.workChain, 8);
            this.writeBuffer(address.hash);
            return;
        }
        // Is External Address
        if (ExternalAddress_1.ExternalAddress.isAddress(address)) {
            this.writeUint(1, 2); // External address
            this.writeUint(address.bits, 9);
            this.writeUint(address.value, address.bits);
            return;
        }
        // Invalid address
        throw Error(`Invalid address. Got ${address}`);
    }
    /**
     * Build BitString
     * @returns result bit string
     */
    build() {
        return new BitString_1.BitString(this._buffer, 0, this._length);
    }
    /**
     * Build into Buffer
     * @returns result buffer
     */
    buffer() {
        if (this._length % 8 !== 0) {
            throw new Error("BitBuilder buffer is not byte aligned");
        }
        return this._buffer.subarray(0, this._length / 8);
    }
}
exports.BitBuilder = BitBuilder;


/***/ }),

/***/ 50421:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readUnaryLength = void 0;
function readUnaryLength(slice) {
    let res = 0;
    while (slice.loadBit()) {
        res++;
    }
    return res;
}
exports.readUnaryLength = readUnaryLength;


/***/ }),

/***/ 51143:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeStorageUsedShort = exports.loadStorageUsedShort = void 0;
function loadStorageUsedShort(slice) {
    let cells = slice.loadVarUintBig(3);
    let bits = slice.loadVarUintBig(3);
    return {
        cells,
        bits
    };
}
exports.loadStorageUsedShort = loadStorageUsedShort;
function storeStorageUsedShort(src) {
    return (builder) => {
        builder.storeVarUint(src.cells, 3);
        builder.storeVarUint(src.bits, 3);
    };
}
exports.storeStorageUsedShort = storeStorageUsedShort;


/***/ }),

/***/ 51682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSecureRandomNumber = exports.getSecureRandomWords = exports.getSecureRandomBytes = void 0;
const crypto_primitives_1 = __webpack_require__(32370);
async function getSecureRandomBytes(size) {
    return (0, crypto_primitives_1.getSecureRandomBytes)(size);
}
exports.getSecureRandomBytes = getSecureRandomBytes;
async function getSecureRandomWords(size) {
    return getSecureRandomWords(size);
}
exports.getSecureRandomWords = getSecureRandomWords;
async function getSecureRandomNumber(min, max) {
    let range = max - min;
    var bitsNeeded = Math.ceil(Math.log2(range));
    if (bitsNeeded > 53) {
        throw new Error('Range is too large');
    }
    var bytesNeeded = Math.ceil(bitsNeeded / 8);
    var mask = Math.pow(2, bitsNeeded) - 1;
    while (true) {
        let res = await getSecureRandomBytes(bitsNeeded);
        let power = (bytesNeeded - 1) * 8;
        let numberValue = 0;
        for (var i = 0; i < bytesNeeded; i++) {
            numberValue += res[i] * Math.pow(2, power);
            power -= 8;
        }
        numberValue = numberValue & mask; // Truncate
        if (numberValue >= range) {
            continue;
        }
        return min + numberValue;
    }
}
exports.getSecureRandomNumber = getSecureRandomNumber;


/***/ }),

/***/ 52231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resolveExotic = void 0;
const BitReader_1 = __webpack_require__(53528);
const CellType_1 = __webpack_require__(34654);
const exoticLibrary_1 = __webpack_require__(29368);
const exoticMerkleProof_1 = __webpack_require__(31459);
const exoticMerkleUpdate_1 = __webpack_require__(91408);
const exoticPruned_1 = __webpack_require__(79499);
const LevelMask_1 = __webpack_require__(20555);
function resolvePruned(bits, refs) {
    // Parse pruned cell
    let pruned = (0, exoticPruned_1.exoticPruned)(bits, refs);
    // Calculate parameters
    let depths = [];
    let hashes = [];
    let mask = new LevelMask_1.LevelMask(pruned.mask);
    for (let i = 0; i < pruned.pruned.length; i++) {
        depths.push(pruned.pruned[i].depth);
        hashes.push(pruned.pruned[i].hash);
    }
    return {
        type: CellType_1.CellType.PrunedBranch,
        depths,
        hashes,
        mask
    };
}
function resolveLibrary(bits, refs) {
    // Parse library cell
    let pruned = (0, exoticLibrary_1.exoticLibrary)(bits, refs);
    // Calculate parameters
    let depths = [];
    let hashes = [];
    let mask = new LevelMask_1.LevelMask();
    return {
        type: CellType_1.CellType.Library,
        depths,
        hashes,
        mask
    };
}
function resolveMerkleProof(bits, refs) {
    // Parse merkle proof cell
    let merkleProof = (0, exoticMerkleProof_1.exoticMerkleProof)(bits, refs);
    // Calculate parameters
    let depths = [];
    let hashes = [];
    let mask = new LevelMask_1.LevelMask(refs[0].level() >> 1);
    return {
        type: CellType_1.CellType.MerkleProof,
        depths,
        hashes,
        mask
    };
}
function resolveMerkleUpdate(bits, refs) {
    // Parse merkle proof cell
    let merkleUpdate = (0, exoticMerkleUpdate_1.exoticMerkleUpdate)(bits, refs);
    // Calculate parameters
    let depths = [];
    let hashes = [];
    let mask = new LevelMask_1.LevelMask((refs[0].level() | refs[1].level()) >> 1);
    return {
        type: CellType_1.CellType.MerkleUpdate,
        depths,
        hashes,
        mask
    };
}
function resolveExotic(bits, refs) {
    let reader = new BitReader_1.BitReader(bits);
    let type = reader.preloadUint(8);
    if (type === 1) {
        return resolvePruned(bits, refs);
    }
    if (type === 2) {
        return resolveLibrary(bits, refs);
    }
    if (type === 3) {
        return resolveMerkleProof(bits, refs);
    }
    if (type === 4) {
        return resolveMerkleUpdate(bits, refs);
    }
    throw Error('Invalid exotic cell type: ' + type);
}
exports.resolveExotic = resolveExotic;


/***/ }),

/***/ 52279:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newSecurePassphrase = void 0;
const __1 = __webpack_require__(75269);
async function newSecurePassphrase(size = 6) {
    return (await (0, __1.newSecureWords)(size)).join('-');
}
exports.newSecurePassphrase = newSecurePassphrase;


/***/ }),

/***/ 52938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.wonderCalculator = void 0;
const BitString_1 = __webpack_require__(62386);
const CellType_1 = __webpack_require__(34654);
const LevelMask_1 = __webpack_require__(20555);
const exoticPruned_1 = __webpack_require__(79499);
const exoticMerkleProof_1 = __webpack_require__(31459);
const descriptor_1 = __webpack_require__(9896);
const crypto_1 = __webpack_require__(75269);
const exoticMerkleUpdate_1 = __webpack_require__(91408);
const exoticLibrary_1 = __webpack_require__(29368);
//
// This function replicates unknown logic of resolving cell data
// https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/crypto/vm/cells/DataCell.cpp#L214
//
function wonderCalculator(type, bits, refs) {
    //
    // Resolving level mask
    //
    let levelMask;
    let pruned = null;
    if (type === CellType_1.CellType.Ordinary) {
        let mask = 0;
        for (let r of refs) {
            mask = mask | r.mask.value;
        }
        levelMask = new LevelMask_1.LevelMask(mask);
    }
    else if (type === CellType_1.CellType.PrunedBranch) {
        // Parse pruned
        pruned = (0, exoticPruned_1.exoticPruned)(bits, refs);
        // Load level
        levelMask = new LevelMask_1.LevelMask(pruned.mask);
    }
    else if (type === CellType_1.CellType.MerkleProof) {
        // Parse proof
        let loaded = (0, exoticMerkleProof_1.exoticMerkleProof)(bits, refs);
        // Load level
        levelMask = new LevelMask_1.LevelMask(refs[0].mask.value >> 1);
    }
    else if (type === CellType_1.CellType.MerkleUpdate) {
        // Parse update
        let loaded = (0, exoticMerkleUpdate_1.exoticMerkleUpdate)(bits, refs);
        // Load level
        levelMask = new LevelMask_1.LevelMask((refs[0].mask.value | refs[1].mask.value) >> 1);
    }
    else if (type === CellType_1.CellType.Library) {
        // Parse library
        let loaded = (0, exoticLibrary_1.exoticLibrary)(bits, refs);
        // Load level
        levelMask = new LevelMask_1.LevelMask();
    }
    else {
        throw new Error("Unsupported exotic type");
    }
    //
    // Calculate hashes and depths
    // NOTE: https://github.com/ton-blockchain/ton/blob/24dc184a2ea67f9c47042b4104bbb4d82289fac1/crypto/vm/cells/DataCell.cpp#L214
    //
    let depths = [];
    let hashes = [];
    let hashCount = type === CellType_1.CellType.PrunedBranch ? 1 : levelMask.hashCount;
    let totalHashCount = levelMask.hashCount;
    let hashIOffset = totalHashCount - hashCount;
    for (let levelI = 0, hashI = 0; levelI <= levelMask.level; levelI++) {
        if (!levelMask.isSignificant(levelI)) {
            continue;
        }
        if (hashI < hashIOffset) {
            hashI++;
            continue;
        }
        //
        // Bits
        //
        let currentBits;
        if (hashI === hashIOffset) {
            if (!(levelI === 0 || type === CellType_1.CellType.PrunedBranch)) {
                throw Error('Invalid');
            }
            currentBits = bits;
        }
        else {
            if (!(levelI !== 0 && type !== CellType_1.CellType.PrunedBranch)) {
                throw Error('Invalid: ' + levelI + ', ' + type);
            }
            currentBits = new BitString_1.BitString(hashes[hashI - hashIOffset - 1], 0, 256);
        }
        //
        // Depth
        //
        let currentDepth = 0;
        for (let c of refs) {
            let childDepth;
            if (type == CellType_1.CellType.MerkleProof || type == CellType_1.CellType.MerkleUpdate) {
                childDepth = c.depth(levelI + 1);
            }
            else {
                childDepth = c.depth(levelI);
            }
            currentDepth = Math.max(currentDepth, childDepth);
        }
        if (refs.length > 0) {
            currentDepth++;
        }
        //
        // Hash
        //
        let repr = (0, descriptor_1.getRepr)(bits, currentBits, refs, levelI, levelMask.apply(levelI).value, type);
        let hash = (0, crypto_1.sha256_sync)(repr);
        //
        // Persist next
        //
        let destI = hashI - hashIOffset;
        depths[destI] = currentDepth;
        hashes[destI] = hash;
        //
        // Next
        //
        hashI++;
    }
    //
    // Calculate hash and depth for all levels
    //
    let resolvedHashes = [];
    let resolvedDepths = [];
    if (pruned) {
        for (let i = 0; i < 4; i++) {
            const { hashIndex } = levelMask.apply(i);
            const { hashIndex: thisHashIndex } = levelMask;
            if (hashIndex !== thisHashIndex) {
                resolvedHashes.push(pruned.pruned[hashIndex].hash);
                resolvedDepths.push(pruned.pruned[hashIndex].depth);
            }
            else {
                resolvedHashes.push(hashes[0]);
                resolvedDepths.push(depths[0]);
            }
        }
    }
    else {
        for (let i = 0; i < 4; i++) {
            resolvedHashes.push(hashes[levelMask.apply(i).hashIndex]);
            resolvedDepths.push(depths[levelMask.apply(i).hashIndex]);
        }
    }
    //
    // Result
    //
    return {
        mask: levelMask,
        hashes: resolvedHashes,
        depths: resolvedDepths
    };
}
exports.wonderCalculator = wonderCalculator;


/***/ }),

/***/ 53269:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha256 = exports.sha256_fallback = exports.sha256_sync = void 0;
const jssha_1 = __importDefault(__webpack_require__(68343));
const crypto_primitives_1 = __webpack_require__(32370);
function sha256_sync(source) {
    let src;
    if (typeof source === 'string') {
        src = Buffer.from(source, 'utf-8').toString('hex');
    }
    else {
        src = source.toString('hex');
    }
    let hasher = new jssha_1.default('SHA-256', 'HEX');
    hasher.update(src);
    let res = hasher.getHash('HEX');
    return Buffer.from(res, 'hex');
}
exports.sha256_sync = sha256_sync;
async function sha256_fallback(source) {
    return sha256_sync(source);
}
exports.sha256_fallback = sha256_fallback;
function sha256(source) {
    return (0, crypto_primitives_1.sha256)(source);
}
exports.sha256 = sha256;


/***/ }),

/***/ 53721:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.base32Decode = exports.base32Encode = void 0;
const alphabet = 'abcdefghijklmnopqrstuvwxyz234567';
function base32Encode(buffer) {
    const length = buffer.byteLength;
    let bits = 0;
    let value = 0;
    let output = '';
    for (let i = 0; i < length; i++) {
        value = (value << 8) | buffer[i];
        bits += 8;
        while (bits >= 5) {
            output += alphabet[(value >>> (bits - 5)) & 31];
            bits -= 5;
        }
    }
    if (bits > 0) {
        output += alphabet[(value << (5 - bits)) & 31];
    }
    return output;
}
exports.base32Encode = base32Encode;
function readChar(alphabet, char) {
    const idx = alphabet.indexOf(char);
    if (idx === -1) {
        throw new Error('Invalid character found: ' + char);
    }
    return idx;
}
function base32Decode(input) {
    let cleanedInput;
    cleanedInput = input.toLowerCase();
    const { length } = cleanedInput;
    let bits = 0;
    let value = 0;
    let index = 0;
    const output = Buffer.alloc(((length * 5) / 8) | 0);
    for (let i = 0; i < length; i++) {
        value = (value << 5) | readChar(alphabet, cleanedInput[i]);
        bits += 5;
        if (bits >= 8) {
            output[index++] = (value >>> (bits - 8)) & 255;
            bits -= 8;
        }
    }
    return output;
}
exports.base32Decode = base32Decode;


/***/ }),

/***/ 53857:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransactionComputePhase = exports.loadTransactionComputePhase = void 0;
const Builder_1 = __webpack_require__(65871);
const ComputeSkipReason_1 = __webpack_require__(93471);
function loadTransactionComputePhase(slice) {
    // Skipped
    if (!slice.loadBit()) {
        let reason = (0, ComputeSkipReason_1.loadComputeSkipReason)(slice);
        return {
            type: 'skipped',
            reason
        };
    }
    let success = slice.loadBit();
    let messageStateUsed = slice.loadBit();
    let accountActivated = slice.loadBit();
    let gasFees = slice.loadCoins();
    const vmState = slice.loadRef().beginParse();
    let gasUsed = vmState.loadVarUintBig(3);
    let gasLimit = vmState.loadVarUintBig(3);
    let gasCredit = vmState.loadBit() ? vmState.loadVarUintBig(2) : undefined;
    let mode = vmState.loadUint(8);
    let exitCode = vmState.loadInt(32);
    let exitArg = vmState.loadBit() ? vmState.loadInt(32) : undefined;
    let vmSteps = vmState.loadUint(32);
    let vmInitStateHash = vmState.loadUintBig(256);
    let vmFinalStateHash = vmState.loadUintBig(256);
    return {
        type: 'vm',
        success,
        messageStateUsed,
        accountActivated,
        gasFees,
        gasUsed,
        gasLimit,
        gasCredit,
        mode,
        exitCode,
        exitArg,
        vmSteps,
        vmInitStateHash,
        vmFinalStateHash
    };
}
exports.loadTransactionComputePhase = loadTransactionComputePhase;
function storeTransactionComputePhase(src) {
    return (builder) => {
        if (src.type === 'skipped') {
            builder.storeBit(0);
            builder.store((0, ComputeSkipReason_1.storeComputeSkipReason)(src.reason));
            return;
        }
        builder.storeBit(1);
        builder.storeBit(src.success);
        builder.storeBit(src.messageStateUsed);
        builder.storeBit(src.accountActivated);
        builder.storeCoins(src.gasFees);
        builder.storeRef((0, Builder_1.beginCell)()
            .storeVarUint(src.gasUsed, 3)
            .storeVarUint(src.gasLimit, 3)
            .store((b) => (src.gasCredit !== undefined && src.gasCredit !== null) ? b.storeBit(1).storeVarUint(src.gasCredit, 2) : b.storeBit(0))
            .storeUint(src.mode, 8)
            .storeInt(src.exitCode, 32)
            .store((b) => (src.exitArg !== undefined && src.exitArg !== null) ? b.storeBit(1).storeInt(src.exitArg, 32) : b.storeBit(0))
            .storeUint(src.vmSteps, 32)
            .storeUint(src.vmInitStateHash, 256)
            .storeUint(src.vmFinalStateHash, 256)
            .endCell());
    };
}
exports.storeTransactionComputePhase = storeTransactionComputePhase;


/***/ }),

/***/ 55121:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ComputeError = void 0;
class ComputeError extends Error {
    constructor(message, exitCode, opts) {
        super(message);
        this.exitCode = exitCode;
        this.debugLogs = opts && opts.debugLogs ? opts.debugLogs : null;
        this.logs = opts && opts.logs ? opts.logs : null;
        Object.setPrototypeOf(this, ComputeError.prototype);
    }
}
exports.ComputeError = ComputeError;


/***/ }),

/***/ 56224:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha512 = exports.sha512_fallback = exports.sha512_sync = void 0;
const jssha_1 = __importDefault(__webpack_require__(68343));
const crypto_primitives_1 = __webpack_require__(32370);
function sha512_sync(source) {
    let src;
    if (typeof source === 'string') {
        src = Buffer.from(source, 'utf-8').toString('hex');
    }
    else {
        src = source.toString('hex');
    }
    let hasher = new jssha_1.default('SHA-512', 'HEX');
    hasher.update(src);
    let res = hasher.getHash('HEX');
    return Buffer.from(res, 'hex');
}
exports.sha512_sync = sha512_sync;
async function sha512_fallback(source) {
    return sha512_sync(source);
}
exports.sha512_fallback = sha512_fallback;
async function sha512(source) {
    return (0, crypto_primitives_1.sha512)(source);
}
exports.sha512 = sha512;


/***/ }),

/***/ 56622:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newSecureWords = void 0;
const getSecureRandom_1 = __webpack_require__(51682);
const wordlist_1 = __webpack_require__(20706);
async function newSecureWords(size = 6) {
    let words = [];
    for (let i = 0; i < size; i++) {
        words.push(wordlist_1.wordlist[await (0, getSecureRandom_1.getSecureRandomNumber)(0, wordlist_1.wordlist.length)]);
    }
    return words;
}
exports.newSecureWords = newSecureWords;


/***/ }),

/***/ 56906:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Slice = void 0;
const symbol_inspect_1 = __importDefault(__webpack_require__(29107));
const Dictionary_1 = __webpack_require__(97590);
const Builder_1 = __webpack_require__(65871);
const strings_1 = __webpack_require__(49556);
/**
 * Slice is a class that allows to read cell data
 */
class Slice {
    constructor(reader, refs) {
        this[_a] = () => this.toString();
        this._reader = reader.clone();
        this._refs = [...refs];
        this._refsOffset = 0;
    }
    /**
     * Get remaining bits
     */
    get remainingBits() {
        return this._reader.remaining;
    }
    /**
     * Get offset bits
     */
    get offsetBits() {
        return this._reader.offset;
    }
    /**
     * Get remaining refs
     */
    get remainingRefs() {
        return this._refs.length - this._refsOffset;
    }
    /**
     * Get offset refs
     */
    get offsetRefs() {
        return this._refsOffset;
    }
    /**
     * Skip bits
     * @param bits
     */
    skip(bits) {
        this._reader.skip(bits);
        return this;
    }
    /**
     * Load a single bit
     * @returns true or false depending on the bit value
     */
    loadBit() {
        return this._reader.loadBit();
    }
    /**
     * Preload a signle bit
     * @returns true or false depending on the bit value
     */
    preloadBit() {
        return this._reader.preloadBit();
    }
    /**
     * Load a boolean
     * @returns true or false depending on the bit value
     */
    loadBoolean() {
        return this.loadBit();
    }
    /**
     * Load maybe boolean
     * @returns true or false depending on the bit value or null
     */
    loadMaybeBoolean() {
        if (this.loadBit()) {
            return this.loadBoolean();
        }
        else {
            return null;
        }
    }
    /**
     * Load bits as a new BitString
     * @param bits number of bits to read
     * @returns new BitString
     */
    loadBits(bits) {
        return this._reader.loadBits(bits);
    }
    /**
     * Preload bits as a new BitString
     * @param bits number of bits to read
     * @returns new BitString
     */
    preloadBits(bits) {
        return this._reader.preloadBits(bits);
    }
    /**
     * Load uint
     * @param bits number of bits to read
     * @returns uint value
     */
    loadUint(bits) {
        return this._reader.loadUint(bits);
    }
    /**
     * Load uint
     * @param bits number of bits to read
     * @returns uint value
     */
    loadUintBig(bits) {
        return this._reader.loadUintBig(bits);
    }
    /**
     * Preload uint
     * @param bits number of bits to read
     * @returns uint value
     */
    preloadUint(bits) {
        return this._reader.preloadUint(bits);
    }
    /**
     * Preload uint
     * @param bits number of bits to read
     * @returns uint value
     */
    preloadUintBig(bits) {
        return this._reader.preloadUintBig(bits);
    }
    /**
     * Load maybe uint
     * @param bits number of bits to read
     * @returns uint value or null
     */
    loadMaybeUint(bits) {
        if (this.loadBit()) {
            return this.loadUint(bits);
        }
        else {
            return null;
        }
    }
    /**
     * Load maybe uint
     * @param bits number of bits to read
     * @returns uint value or null
     */
    loadMaybeUintBig(bits) {
        if (this.loadBit()) {
            return this.loadUintBig(bits);
        }
        else {
            return null;
        }
    }
    /**
     * Load int
     * @param bits number of bits to read
     * @returns int value
     */
    loadInt(bits) {
        return this._reader.loadInt(bits);
    }
    /**
     * Load int
     * @param bits number of bits to read
     * @returns int value
     */
    loadIntBig(bits) {
        return this._reader.loadIntBig(bits);
    }
    /**
     * Preload int
     * @param bits number of bits to read
     * @returns int value
     */
    preloadInt(bits) {
        return this._reader.preloadInt(bits);
    }
    /**
     * Preload int
     * @param bits number of bits to read
     * @returns int value
     */
    preloadIntBig(bits) {
        return this._reader.preloadIntBig(bits);
    }
    /**
     * Load maybe uint
     * @param bits number of bits to read
     * @returns uint value or null
     */
    loadMaybeInt(bits) {
        if (this.loadBit()) {
            return this.loadInt(bits);
        }
        else {
            return null;
        }
    }
    /**
     * Load maybe uint
     * @param bits number of bits to read
     * @returns uint value or null
     */
    loadMaybeIntBig(bits) {
        if (this.loadBit()) {
            return this.loadIntBig(bits);
        }
        else {
            return null;
        }
    }
    /**
     * Load varuint
     * @param bits number of bits to read in header
     * @returns varuint value
     */
    loadVarUint(bits) {
        return this._reader.loadVarUint(bits);
    }
    /**
     * Load varuint
     * @param bits number of bits to read in header
     * @returns varuint value
     */
    loadVarUintBig(bits) {
        return this._reader.loadVarUintBig(bits);
    }
    /**
     * Preload varuint
     * @param bits number of bits to read in header
     * @returns varuint value
     */
    preloadVarUint(bits) {
        return this._reader.preloadVarUint(bits);
    }
    /**
     * Preload varuint
     * @param bits number of bits to read in header
     * @returns varuint value
     */
    preloadVarUintBig(bits) {
        return this._reader.preloadVarUintBig(bits);
    }
    /**
     * Load varint
     * @param bits number of bits to read in header
     * @returns varint value
     */
    loadVarInt(bits) {
        return this._reader.loadVarInt(bits);
    }
    /**
     * Load varint
     * @param bits number of bits to read in header
     * @returns varint value
     */
    loadVarIntBig(bits) {
        return this._reader.loadVarIntBig(bits);
    }
    /**
     * Preload varint
     * @param bits number of bits to read in header
     * @returns varint value
     */
    preloadVarInt(bits) {
        return this._reader.preloadVarInt(bits);
    }
    /**
     * Preload varint
     * @param bits number of bits to read in header
     * @returns varint value
     */
    preloadVarIntBig(bits) {
        return this._reader.preloadVarIntBig(bits);
    }
    /**
     * Load coins
     * @returns coins value
     */
    loadCoins() {
        return this._reader.loadCoins();
    }
    /**
     * Preload coins
     * @returns coins value
     */
    preloadCoins() {
        return this._reader.preloadCoins();
    }
    /**
     * Load maybe coins
     * @returns coins value or null
     */
    loadMaybeCoins() {
        if (this._reader.loadBit()) {
            return this._reader.loadCoins();
        }
        else {
            return null;
        }
    }
    /**
     * Load internal Address
     * @returns Address
     */
    loadAddress() {
        return this._reader.loadAddress();
    }
    /**
     * Load optional internal Address
     * @returns Address or null
     */
    loadMaybeAddress() {
        return this._reader.loadMaybeAddress();
    }
    /**
     * Load external address
     * @returns ExternalAddress
     */
    loadExternalAddress() {
        return this._reader.loadExternalAddress();
    }
    /**
     * Load optional external address
     * @returns ExternalAddress or null
     */
    loadMaybeExternalAddress() {
        return this._reader.loadMaybeExternalAddress();
    }
    /**
     * Load address
     * @returns Address, ExternalAddress or null
     */
    loadAddressAny() {
        return this._reader.loadAddressAny();
    }
    /**
     * Load reference
     * @returns Cell
     */
    loadRef() {
        if (this._refsOffset >= this._refs.length) {
            throw new Error("No more references");
        }
        return this._refs[this._refsOffset++];
    }
    /**
     * Preload reference
     * @returns Cell
     */
    preloadRef() {
        if (this._refsOffset >= this._refs.length) {
            throw new Error("No more references");
        }
        return this._refs[this._refsOffset];
    }
    /**
     * Load optional reference
     * @returns Cell or null
     */
    loadMaybeRef() {
        if (this.loadBit()) {
            return this.loadRef();
        }
        else {
            return null;
        }
    }
    /**
     * Preload optional reference
     * @returns Cell or null
     */
    preloadMaybeRef() {
        if (this.preloadBit()) {
            return this.preloadRef();
        }
        else {
            return null;
        }
    }
    /**
     * Load byte buffer
     * @param bytes number of bytes to load
     * @returns Buffer
     */
    loadBuffer(bytes) {
        return this._reader.loadBuffer(bytes);
    }
    /**
     * Load byte buffer
     * @param bytes number of bytes to load
     * @returns Buffer
     */
    preloadBuffer(bytes) {
        return this._reader.preloadBuffer(bytes);
    }
    /**
     * Load string tail
     */
    loadStringTail() {
        return (0, strings_1.readString)(this);
    }
    /**
     * Load maybe string tail
     * @returns string or null
     */
    loadMaybeStringTail() {
        if (this.loadBit()) {
            return (0, strings_1.readString)(this);
        }
        else {
            return null;
        }
    }
    /**
     * Load string tail from ref
     * @returns string
     */
    loadStringRefTail() {
        return (0, strings_1.readString)(this.loadRef().beginParse());
    }
    /**
     * Load maybe string tail from ref
     * @returns string or null
     */
    loadMaybeStringRefTail() {
        const ref = this.loadMaybeRef();
        if (ref) {
            return (0, strings_1.readString)(ref.beginParse());
        }
        else {
            return null;
        }
    }
    /**
     * Loads dictionary
     * @param key key description
     * @param value value description
     * @returns Dictionary<K, V>
     */
    loadDict(key, value) {
        return Dictionary_1.Dictionary.load(key, value, this);
    }
    /**
     * Loads dictionary directly from current slice
     * @param key key description
     * @param value value description
     * @returns Dictionary<K, V>
     */
    loadDictDirect(key, value) {
        return Dictionary_1.Dictionary.loadDirect(key, value, this);
    }
    /**
     * Checks if slice is empty
     */
    endParse() {
        if (this.remainingBits > 0 || this.remainingRefs > 0) {
            throw new Error("Slice is not empty");
        }
    }
    /**
     * Convert slice to cell
     */
    asCell() {
        return (0, Builder_1.beginCell)().storeSlice(this).endCell();
    }
    /**
     *
     * @returns
     */
    asBuilder() {
        return (0, Builder_1.beginCell)().storeSlice(this);
    }
    /**
     * Clone slice
     * @returns cloned slice
     */
    clone(fromStart = false) {
        if (fromStart) {
            let reader = this._reader.clone();
            reader.reset();
            return new Slice(reader, this._refs);
        }
        else {
            let res = new Slice(this._reader, this._refs);
            res._refsOffset = this._refsOffset;
            return res;
        }
    }
    /**
     * Print slice as string by converting it to cell
     * @returns string
     */
    toString() {
        return this.asCell().toString();
    }
}
exports.Slice = Slice;
_a = symbol_inspect_1.default;


/***/ }),

/***/ 58353:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransactionsStoragePhase = exports.loadTransactionStoragePhase = void 0;
const AccountStatusChange_1 = __webpack_require__(62312);
function loadTransactionStoragePhase(slice) {
    const storageFeesCollected = slice.loadCoins();
    let storageFeesDue = undefined;
    if (slice.loadBit()) {
        storageFeesDue = slice.loadCoins();
    }
    const statusChange = (0, AccountStatusChange_1.loadAccountStatusChange)(slice);
    return {
        storageFeesCollected,
        storageFeesDue,
        statusChange
    };
}
exports.loadTransactionStoragePhase = loadTransactionStoragePhase;
function storeTransactionsStoragePhase(src) {
    return (builder) => {
        builder.storeCoins(src.storageFeesCollected);
        if (src.storageFeesDue === null || src.storageFeesDue === undefined) {
            builder.storeBit(false);
        }
        else {
            builder.storeBit(true);
            builder.storeCoins(src.storageFeesDue);
        }
        builder.store((0, AccountStatusChange_1.storeAccountStatusChange)(src.statusChange));
    };
}
exports.storeTransactionsStoragePhase = storeTransactionsStoragePhase;


/***/ }),

/***/ 59256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pbkdf2_sha512 = void 0;
const crypto_primitives_1 = __webpack_require__(32370);
function pbkdf2_sha512(key, salt, iterations, keyLen) {
    return (0, crypto_primitives_1.pbkdf2_sha512)(key, salt, iterations, keyLen);
}
exports.pbkdf2_sha512 = pbkdf2_sha512;


/***/ }),

/***/ 60445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeCommonMessageInfo = exports.loadCommonMessageInfo = void 0;
const CurrencyCollection_1 = __webpack_require__(10574);
function loadCommonMessageInfo(slice) {
    // Internal message
    if (!slice.loadBit()) {
        const ihrDisabled = slice.loadBit();
        const bounce = slice.loadBit();
        const bounced = slice.loadBit();
        const src = slice.loadAddress();
        const dest = slice.loadAddress();
        const value = (0, CurrencyCollection_1.loadCurrencyCollection)(slice);
        const ihrFee = slice.loadCoins();
        const forwardFee = slice.loadCoins();
        const createdLt = slice.loadUintBig(64);
        const createdAt = slice.loadUint(32);
        return {
            type: 'internal',
            ihrDisabled,
            bounce,
            bounced,
            src,
            dest,
            value,
            ihrFee,
            forwardFee,
            createdLt,
            createdAt,
        };
    }
    // External In mesage
    if (!slice.loadBit()) {
        const src = slice.loadMaybeExternalAddress();
        const dest = slice.loadAddress();
        const importFee = slice.loadCoins();
        return {
            type: 'external-in',
            src,
            dest,
            importFee,
        };
    }
    // External Out message
    const src = slice.loadAddress();
    const dest = slice.loadMaybeExternalAddress();
    const createdLt = slice.loadUintBig(64);
    const createdAt = slice.loadUint(32);
    return {
        type: 'external-out',
        src,
        dest,
        createdLt,
        createdAt,
    };
}
exports.loadCommonMessageInfo = loadCommonMessageInfo;
function storeCommonMessageInfo(source) {
    return (builder) => {
        if (source.type === 'internal') {
            builder.storeBit(0);
            builder.storeBit(source.ihrDisabled);
            builder.storeBit(source.bounce);
            builder.storeBit(source.bounced);
            builder.storeAddress(source.src);
            builder.storeAddress(source.dest);
            builder.store((0, CurrencyCollection_1.storeCurrencyCollection)(source.value));
            builder.storeCoins(source.ihrFee);
            builder.storeCoins(source.forwardFee);
            builder.storeUint(source.createdLt, 64);
            builder.storeUint(source.createdAt, 32);
        }
        else if (source.type === 'external-in') {
            builder.storeBit(1);
            builder.storeBit(0);
            builder.storeAddress(source.src);
            builder.storeAddress(source.dest);
            builder.storeCoins(source.importFee);
        }
        else if (source.type === 'external-out') {
            builder.storeBit(1);
            builder.storeBit(1);
            builder.storeAddress(source.src);
            builder.storeAddress(source.dest);
            builder.storeUint(source.createdLt, 64);
            builder.storeUint(source.createdAt, 32);
        }
        else {
            throw new Error('Unknown CommonMessageInfo type');
        }
    };
}
exports.storeCommonMessageInfo = storeCommonMessageInfo;


/***/ }),

/***/ 62142:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeAccount = exports.loadAccount = void 0;
const AccountStorage_1 = __webpack_require__(86161);
const StorageInto_1 = __webpack_require__(85006);
function loadAccount(slice) {
    return {
        addr: slice.loadAddress(),
        storageStats: (0, StorageInto_1.loadStorageInfo)(slice),
        storage: (0, AccountStorage_1.loadAccountStorage)(slice)
    };
}
exports.loadAccount = loadAccount;
function storeAccount(src) {
    return (builder) => {
        builder.storeAddress(src.addr);
        builder.store((0, StorageInto_1.storeStorageInfo)(src.storageStats));
        builder.store((0, AccountStorage_1.storeAccountStorage)(src.storage));
    };
}
exports.storeAccount = storeAccount;


/***/ }),

/***/ 62312:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeAccountStatusChange = exports.loadAccountStatusChange = void 0;
function loadAccountStatusChange(slice) {
    if (!slice.loadBit()) {
        return 'unchanged';
    }
    if (slice.loadBit()) {
        return 'deleted';
    }
    else {
        return 'frozen';
    }
}
exports.loadAccountStatusChange = loadAccountStatusChange;
function storeAccountStatusChange(src) {
    return (builder) => {
        if (src == 'unchanged') {
            builder.storeBit(0);
        }
        else if (src === 'frozen') {
            builder.storeBit(1);
            builder.storeBit(0);
        }
        else if (src === 'deleted') {
            builder.storeBit(1);
            builder.storeBit(1);
        }
        else {
            throw Error('Invalid account status change');
        }
    };
}
exports.storeAccountStatusChange = storeAccountStatusChange;


/***/ }),

/***/ 62386:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BitString = void 0;
const paddedBits_1 = __webpack_require__(34382);
const symbol_inspect_1 = __importDefault(__webpack_require__(29107));
/**
 * BitString is a class that represents a bitstring in a buffer with a specified offset and length
 */
class BitString {
    /**
     * Checks if supplied object is BitString
     * @param src is unknow object
     * @returns true if object is BitString and false otherwise
     **/
    static isBitString(src) {
        return src instanceof BitString;
    }
    /**
     * Constructing BitString from a buffer
     * @param data data that contains the bitstring data. NOTE: We are expecting this buffer to be NOT modified
     * @param offset offset in bits from the start of the buffer
     * @param length length of the bitstring in bits
     */
    constructor(data, offset, length) {
        this[_a] = () => this.toString();
        // Check bounds
        if (length < 0) {
            throw new Error(`Length ${length} is out of bounds`);
        }
        this._length = length;
        this._data = data;
        this._offset = offset;
    }
    /**
     * Returns the length of the bitstring
     */
    get length() {
        return this._length;
    }
    /**
     * Returns the bit at the specified index
     * @param index index of the bit
     * @throws Error if index is out of bounds
     * @returns true if the bit is set, false otherwise
     */
    at(index) {
        // Check bounds
        if (index >= this._length) {
            throw new Error(`Index ${index} > ${this._length} is out of bounds`);
        }
        if (index < 0) {
            throw new Error(`Index ${index} < 0 is out of bounds`);
        }
        // Calculcate offsets
        let byteIndex = (this._offset + index) >> 3;
        let bitIndex = 7 - ((this._offset + index) % 8); // NOTE: We are using big endian
        // Return the bit
        return (this._data[byteIndex] & (1 << bitIndex)) !== 0;
    }
    /**
     * Get a subscring of the bitstring
     * @param offset
     * @param length
     * @returns
     */
    substring(offset, length) {
        // Check offset
        if (offset > this._length) {
            throw new Error(`Offset(${offset}) > ${this._length} is out of bounds`);
        }
        if (offset < 0) {
            throw new Error(`Offset(${offset}) < 0 is out of bounds`);
        }
        // Corner case of empty string
        if (length === 0) {
            return BitString.EMPTY;
        }
        if (offset + length > this._length) {
            throw new Error(`Offset ${offset} + Length ${length} > ${this._length} is out of bounds`);
        }
        // Create substring
        return new BitString(this._data, this._offset + offset, length);
    }
    /**
     * Try to get a buffer from the bitstring without allocations
     * @param offset offset in bits
     * @param length length in bits
     * @returns buffer if the bitstring is aligned to bytes, null otherwise
     */
    subbuffer(offset, length) {
        // Check offset
        if (offset > this._length) {
            throw new Error(`Offset ${offset} is out of bounds`);
        }
        if (offset < 0) {
            throw new Error(`Offset ${offset} is out of bounds`);
        }
        if (offset + length > this._length) {
            throw new Error(`Offset + Lenght = ${offset + length} is out of bounds`);
        }
        // Check alignment
        if (length % 8 !== 0) {
            return null;
        }
        if ((this._offset + offset) % 8 !== 0) {
            return null;
        }
        // Create substring
        let start = ((this._offset + offset) >> 3);
        let end = start + (length >> 3);
        return this._data.subarray(start, end);
    }
    /**
     * Checks for equality
     * @param b other bitstring
     * @returns true if the bitstrings are equal, false otherwise
     */
    equals(b) {
        if (this._length !== b._length) {
            return false;
        }
        for (let i = 0; i < this._length; i++) {
            if (this.at(i) !== b.at(i)) {
                return false;
            }
        }
        return true;
    }
    /**
     * Format to canonical string
     * @returns formatted bits as a string
     */
    toString() {
        const padded = (0, paddedBits_1.bitsToPaddedBuffer)(this);
        if (this._length % 4 === 0) {
            const s = padded.subarray(0, Math.ceil(this._length / 8)).toString('hex').toUpperCase();
            if (this._length % 8 === 0) {
                return s;
            }
            else {
                return s.substring(0, s.length - 1);
            }
        }
        else {
            const hex = padded.toString('hex').toUpperCase();
            if (this._length % 8 <= 4) {
                return hex.substring(0, hex.length - 1) + '_';
            }
            else {
                return hex + '_';
            }
        }
    }
}
exports.BitString = BitString;
_a = symbol_inspect_1.default;
BitString.EMPTY = new BitString(Buffer.alloc(0), 0, 0);


/***/ }),

/***/ 62441:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.pbkdf2_sha512 = void 0;
async function pbkdf2_sha512(key, salt, iterations, keyLen) {
    const keyBuffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    const saltBuffer = typeof salt === 'string' ? Buffer.from(salt, 'utf-8') : salt;
    const pbkdf2_key = await window.crypto.subtle.importKey("raw", keyBuffer, { name: "PBKDF2" }, false, ["deriveBits"]);
    const derivedBits = await window.crypto.subtle.deriveBits({ name: "PBKDF2", hash: "SHA-512", salt: saltBuffer, iterations: iterations }, pbkdf2_key, keyLen * 8);
    return Buffer.from(derivedBits);
}
exports.pbkdf2_sha512 = pbkdf2_sha512;


/***/ }),

/***/ 62672:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SimpleLibraryValue = exports.storeSimpleLibrary = exports.loadSimpleLibrary = void 0;
function loadSimpleLibrary(slice) {
    return {
        public: slice.loadBit(),
        root: slice.loadRef()
    };
}
exports.loadSimpleLibrary = loadSimpleLibrary;
function storeSimpleLibrary(src) {
    return (builder) => {
        builder.storeBit(src.public);
        builder.storeRef(src.root);
    };
}
exports.storeSimpleLibrary = storeSimpleLibrary;
exports.SimpleLibraryValue = {
    serialize(src, builder) {
        storeSimpleLibrary(src)(builder);
    },
    parse(src) {
        return loadSimpleLibrary(src);
    },
};


/***/ }),

/***/ 63101:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadOutList = exports.storeOutList = exports.loadOutAction = exports.storeOutAction = void 0;
const MessageRelaxed_1 = __webpack_require__(84143);
const Builder_1 = __webpack_require__(65871);
const CurrencyCollection_1 = __webpack_require__(10574);
const LibRef_1 = __webpack_require__(63137);
function storeOutAction(action) {
    switch (action.type) {
        case 'sendMsg':
            return storeOutActionSendMsg(action);
        case 'setCode':
            return storeOutActionSetCode(action);
        case 'reserve':
            return storeOutActionReserve(action);
        case 'changeLibrary':
            return storeOutActionChangeLibrary(action);
        default:
            throw new Error(`Unknown action type ${action.type}`);
    }
}
exports.storeOutAction = storeOutAction;
/*
action_send_msg#0ec3c86d mode:(## 8)
  out_msg:^(MessageRelaxed Any) = OutAction;
*/
const outActionSendMsgTag = 0x0ec3c86d;
function storeOutActionSendMsg(action) {
    return (builder) => {
        builder.storeUint(outActionSendMsgTag, 32)
            .storeUint(action.mode, 8)
            .storeRef((0, Builder_1.beginCell)().store((0, MessageRelaxed_1.storeMessageRelaxed)(action.outMsg)).endCell());
    };
}
/*
action_set_code#ad4de08e new_code:^Cell = OutAction;
 */
const outActionSetCodeTag = 0xad4de08e;
function storeOutActionSetCode(action) {
    return (builder) => {
        builder.storeUint(outActionSetCodeTag, 32).storeRef(action.newCode);
    };
}
/*
action_reserve_currency#36e6b809 mode:(## 8)
  currency:CurrencyCollection = OutAction;
 */
const outActionReserveTag = 0x36e6b809;
function storeOutActionReserve(action) {
    return (builder) => {
        builder.storeUint(outActionReserveTag, 32)
            .storeUint(action.mode, 8)
            .store((0, CurrencyCollection_1.storeCurrencyCollection)(action.currency));
    };
}
/*
action_change_library#26fa1dd4 mode:(## 7)
  libref:LibRef = OutAction;
 */
const outActionChangeLibraryTag = 0x26fa1dd4;
function storeOutActionChangeLibrary(action) {
    return (builder) => {
        builder.storeUint(outActionChangeLibraryTag, 32)
            .storeUint(action.mode, 7)
            .store((0, LibRef_1.storeLibRef)(action.libRef));
    };
}
function loadOutAction(slice) {
    const tag = slice.loadUint(32);
    if (tag === outActionSendMsgTag) {
        const mode = slice.loadUint(8);
        const outMsg = (0, MessageRelaxed_1.loadMessageRelaxed)(slice.loadRef().beginParse());
        return {
            type: 'sendMsg',
            mode,
            outMsg
        };
    }
    if (tag === outActionSetCodeTag) {
        const newCode = slice.loadRef();
        return {
            type: 'setCode',
            newCode
        };
    }
    if (tag === outActionReserveTag) {
        const mode = slice.loadUint(8);
        const currency = (0, CurrencyCollection_1.loadCurrencyCollection)(slice);
        return {
            type: 'reserve',
            mode,
            currency
        };
    }
    if (tag === outActionChangeLibraryTag) {
        const mode = slice.loadUint(7);
        const libRef = (0, LibRef_1.loadLibRef)(slice);
        return {
            type: 'changeLibrary',
            mode,
            libRef
        };
    }
    throw new Error(`Unknown out action tag 0x${tag.toString(16)}`);
}
exports.loadOutAction = loadOutAction;
/*
out_list_empty$_ = OutList 0;
out_list$_ {n:#} prev:^(OutList n) action:OutAction
  = OutList (n + 1);
 */
function storeOutList(actions) {
    const cell = actions.reduce((cell, action) => (0, Builder_1.beginCell)()
        .storeRef(cell)
        .store(storeOutAction(action))
        .endCell(), (0, Builder_1.beginCell)().endCell());
    return (builder) => {
        builder.storeSlice(cell.beginParse());
    };
}
exports.storeOutList = storeOutList;
function loadOutList(slice) {
    const actions = [];
    while (slice.remainingRefs) {
        const nextCell = slice.loadRef();
        actions.push(loadOutAction(slice));
        slice = nextCell.beginParse();
    }
    return actions.reverse();
}
exports.loadOutList = loadOutList;


/***/ }),

/***/ 63137:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeLibRef = exports.loadLibRef = void 0;
function loadLibRef(slice) {
    const type = slice.loadUint(1);
    if (type === 0) {
        return {
            type: 'hash',
            libHash: slice.loadBuffer(32)
        };
    }
    else {
        return {
            type: 'ref',
            library: slice.loadRef()
        };
    }
}
exports.loadLibRef = loadLibRef;
function storeLibRef(src) {
    return (builder) => {
        if (src.type === 'hash') {
            builder.storeUint(0, 1);
            builder.storeBuffer(src.libHash);
        }
        else {
            builder.storeUint(1, 1);
            builder.storeRef(src.library);
        }
    };
}
exports.storeLibRef = storeLibRef;


/***/ }),

/***/ 65149:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMethodId = void 0;
const TABLE = new Int16Array([
    0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,
    0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,
    0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
    0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,
    0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,
    0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
    0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,
    0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,
    0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
    0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,
    0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,
    0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
    0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,
    0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,
    0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
    0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,
    0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,
    0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
    0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,
    0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,
    0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
    0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
    0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,
    0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
    0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,
    0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,
    0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
    0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,
    0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,
    0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
    0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,
    0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
]);
function crc16(data) {
    if (!(data instanceof Buffer)) {
        data = Buffer.from(data);
    }
    let crc = 0;
    for (let index = 0; index < data.length; index++) {
        const byte = data[index];
        crc = (TABLE[((crc >> 8) ^ byte) & 0xff] ^ (crc << 8)) & 0xffff;
    }
    return crc;
}
function getMethodId(name) {
    return (crc16(name) & 0xffff) | 0x10000;
}
exports.getMethodId = getMethodId;


/***/ }),

/***/ 65229:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.serializeBoc = exports.deserializeBoc = exports.parseBoc = void 0;
const BitReader_1 = __webpack_require__(53528);
const BitString_1 = __webpack_require__(62386);
const Cell_1 = __webpack_require__(66902);
const topologicalSort_1 = __webpack_require__(41080);
const bitsForNumber_1 = __webpack_require__(16767);
const BitBuilder_1 = __webpack_require__(49924);
const descriptor_1 = __webpack_require__(9896);
const paddedBits_1 = __webpack_require__(34382);
const crc32c_1 = __webpack_require__(29429);
function getHashesCount(levelMask) {
    return getHashesCountFromMask(levelMask & 7);
}
function getHashesCountFromMask(mask) {
    let n = 0;
    for (let i = 0; i < 3; i++) {
        n += (mask & 1);
        mask = mask >> 1;
    }
    return n + 1; // 1 repr + up to 3 higher hashes
}
function readCell(reader, sizeBytes) {
    // D1
    const d1 = reader.loadUint(8);
    const refsCount = d1 % 8;
    const exotic = !!(d1 & 8);
    // D2
    const d2 = reader.loadUint(8);
    const dataBytesize = Math.ceil(d2 / 2);
    const paddingAdded = !!(d2 % 2);
    const levelMask = d1 >> 5;
    const hasHashes = (d1 & 16) != 0;
    const hash_bytes = 32;
    const hashesSize = hasHashes ? getHashesCount(levelMask) * hash_bytes : 0;
    const depthSize = hasHashes ? getHashesCount(levelMask) * 2 : 0;
    reader.skip(hashesSize * 8);
    reader.skip(depthSize * 8);
    // Bits
    let bits = BitString_1.BitString.EMPTY;
    if (dataBytesize > 0) {
        if (paddingAdded) {
            bits = reader.loadPaddedBits(dataBytesize * 8);
        }
        else {
            bits = reader.loadBits(dataBytesize * 8);
        }
    }
    // Refs
    let refs = [];
    for (let i = 0; i < refsCount; i++) {
        refs.push(reader.loadUint(sizeBytes * 8));
    }
    // Result
    return {
        bits,
        refs,
        exotic
    };
}
function calcCellSize(cell, sizeBytes) {
    return 2 /* D1+D2 */ + Math.ceil(cell.bits.length / 8) + cell.refs.length * sizeBytes;
}
function parseBoc(src) {
    let reader = new BitReader_1.BitReader(new BitString_1.BitString(src, 0, src.length * 8));
    let magic = reader.loadUint(32);
    if (magic === 0x68ff65f3) {
        let size = reader.loadUint(8);
        let offBytes = reader.loadUint(8);
        let cells = reader.loadUint(size * 8);
        let roots = reader.loadUint(size * 8); // Must be 1
        let absent = reader.loadUint(size * 8);
        let totalCellSize = reader.loadUint(offBytes * 8);
        let index = reader.loadBuffer(cells * offBytes);
        let cellData = reader.loadBuffer(totalCellSize);
        return {
            size,
            offBytes,
            cells,
            roots,
            absent,
            totalCellSize,
            index,
            cellData,
            root: [0]
        };
    }
    else if (magic === 0xacc3a728) {
        let size = reader.loadUint(8);
        let offBytes = reader.loadUint(8);
        let cells = reader.loadUint(size * 8);
        let roots = reader.loadUint(size * 8); // Must be 1
        let absent = reader.loadUint(size * 8);
        let totalCellSize = reader.loadUint(offBytes * 8);
        let index = reader.loadBuffer(cells * offBytes);
        let cellData = reader.loadBuffer(totalCellSize);
        let crc32 = reader.loadBuffer(4);
        if (!(0, crc32c_1.crc32c)(src.subarray(0, src.length - 4)).equals(crc32)) {
            throw Error('Invalid CRC32C');
        }
        return {
            size,
            offBytes,
            cells,
            roots,
            absent,
            totalCellSize,
            index,
            cellData,
            root: [0]
        };
    }
    else if (magic === 0xb5ee9c72) {
        let hasIdx = reader.loadUint(1);
        let hasCrc32c = reader.loadUint(1);
        let hasCacheBits = reader.loadUint(1);
        let flags = reader.loadUint(2); // Must be 0
        let size = reader.loadUint(3);
        let offBytes = reader.loadUint(8);
        let cells = reader.loadUint(size * 8);
        let roots = reader.loadUint(size * 8);
        let absent = reader.loadUint(size * 8);
        let totalCellSize = reader.loadUint(offBytes * 8);
        let root = [];
        for (let i = 0; i < roots; i++) {
            root.push(reader.loadUint(size * 8));
        }
        let index = null;
        if (hasIdx) {
            index = reader.loadBuffer(cells * offBytes);
        }
        let cellData = reader.loadBuffer(totalCellSize);
        if (hasCrc32c) {
            let crc32 = reader.loadBuffer(4);
            if (!(0, crc32c_1.crc32c)(src.subarray(0, src.length - 4)).equals(crc32)) {
                throw Error('Invalid CRC32C');
            }
        }
        return {
            size,
            offBytes,
            cells,
            roots,
            absent,
            totalCellSize,
            index,
            cellData,
            root
        };
    }
    else {
        throw Error('Invalid magic');
    }
}
exports.parseBoc = parseBoc;
function deserializeBoc(src) {
    //
    // Parse BOC
    //
    let boc = parseBoc(src);
    let reader = new BitReader_1.BitReader(new BitString_1.BitString(boc.cellData, 0, boc.cellData.length * 8));
    //
    // Load cells
    //
    let cells = [];
    for (let i = 0; i < boc.cells; i++) {
        let cll = readCell(reader, boc.size);
        cells.push({ ...cll, result: null });
    }
    //
    // Build cells
    //
    for (let i = cells.length - 1; i >= 0; i--) {
        if (cells[i].result) {
            throw Error('Impossible');
        }
        let refs = [];
        for (let r of cells[i].refs) {
            if (!cells[r].result) {
                throw Error('Invalid BOC file');
            }
            refs.push(cells[r].result);
        }
        cells[i].result = new Cell_1.Cell({ bits: cells[i].bits, refs, exotic: cells[i].exotic });
    }
    //
    // Load roots
    //
    let roots = [];
    for (let i = 0; i < boc.root.length; i++) {
        roots.push(cells[boc.root[i]].result);
    }
    //
    // Return
    //
    return roots;
}
exports.deserializeBoc = deserializeBoc;
function writeCellToBuilder(cell, refs, sizeBytes, to) {
    let d1 = (0, descriptor_1.getRefsDescriptor)(cell.refs, cell.mask.value, cell.type);
    let d2 = (0, descriptor_1.getBitsDescriptor)(cell.bits);
    to.writeUint(d1, 8);
    to.writeUint(d2, 8);
    to.writeBuffer((0, paddedBits_1.bitsToPaddedBuffer)(cell.bits));
    for (let r of refs) {
        to.writeUint(r, sizeBytes * 8);
    }
}
function serializeBoc(root, opts) {
    // Sort cells
    let allCells = (0, topologicalSort_1.topologicalSort)(root);
    // Calculcate parameters
    let cellsNum = allCells.length;
    let has_idx = opts.idx;
    let has_crc32c = opts.crc32;
    let has_cache_bits = false;
    let flags = 0;
    let sizeBytes = Math.max(Math.ceil((0, bitsForNumber_1.bitsForNumber)(cellsNum, 'uint') / 8), 1);
    let totalCellSize = 0;
    let index = [];
    for (let c of allCells) {
        let sz = calcCellSize(c.cell, sizeBytes);
        totalCellSize += sz;
        index.push(totalCellSize);
    }
    let offsetBytes = Math.max(Math.ceil((0, bitsForNumber_1.bitsForNumber)(totalCellSize, 'uint') / 8), 1);
    let totalSize = (4 + // magic
        1 + // flags and s_bytes
        1 + // offset_bytes
        3 * sizeBytes + // cells_num, roots, complete
        offsetBytes + // full_size
        1 * sizeBytes + // root_idx
        (has_idx ? cellsNum * offsetBytes : 0) +
        totalCellSize +
        (has_crc32c ? 4 : 0)) * 8;
    // Serialize
    let builder = new BitBuilder_1.BitBuilder(totalSize);
    builder.writeUint(0xb5ee9c72, 32); // Magic
    builder.writeBit(has_idx); // Has index
    builder.writeBit(has_crc32c); // Has crc32c
    builder.writeBit(has_cache_bits); // Has cache bits
    builder.writeUint(flags, 2); // Flags
    builder.writeUint(sizeBytes, 3); // Size bytes
    builder.writeUint(offsetBytes, 8); // Offset bytes
    builder.writeUint(cellsNum, sizeBytes * 8); // Cells num
    builder.writeUint(1, sizeBytes * 8); // Roots num
    builder.writeUint(0, sizeBytes * 8); // Absent num
    builder.writeUint(totalCellSize, offsetBytes * 8); // Total cell size
    builder.writeUint(0, sizeBytes * 8); // Root id == 0
    if (has_idx) { // Index
        for (let i = 0; i < cellsNum; i++) {
            builder.writeUint(index[i], offsetBytes * 8);
        }
    }
    for (let i = 0; i < cellsNum; i++) { // Cells
        writeCellToBuilder(allCells[i].cell, allCells[i].refs, sizeBytes, builder);
    }
    if (has_crc32c) {
        let crc32 = (0, crc32c_1.crc32c)(builder.buffer()); // builder.buffer() is fast since it doesn't allocate new memory
        builder.writeBuffer(crc32);
    }
    // Sanity Check
    let res = builder.buffer();
    if (res.length !== totalSize / 8) {
        throw Error('Internal error');
    }
    return res;
}
exports.serializeBoc = serializeBoc;


/***/ }),

/***/ 66902:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cell = void 0;
const symbol_inspect_1 = __importDefault(__webpack_require__(29107));
const BitString_1 = __webpack_require__(62386);
const CellType_1 = __webpack_require__(34654);
const Slice_1 = __webpack_require__(56906);
const resolveExotic_1 = __webpack_require__(52231);
const wonderCalculator_1 = __webpack_require__(52938);
const serialization_1 = __webpack_require__(65229);
const BitReader_1 = __webpack_require__(53528);
const Builder_1 = __webpack_require__(65871);
/**
 * Cell as described in TVM spec
 */
class Cell {
    /**
     * Deserialize cells from BOC
     * @param src source buffer
     * @returns array of cells
     */
    static fromBoc(src) {
        return (0, serialization_1.deserializeBoc)(src);
    }
    /**
     * Helper function that deserializes a single cell from BOC in base64
     * @param src source string
     */
    static fromBase64(src) {
        let parsed = Cell.fromBoc(Buffer.from(src, 'base64'));
        if (parsed.length !== 1) {
            throw new Error("Deserialized more than one cell");
        }
        return parsed[0];
    }
    /**
     * Helper function that deserializes a single cell from BOC in hex
     * @param src source string
     */
    static fromHex(src) {
        let parsed = Cell.fromBoc(Buffer.from(src, 'hex'));
        if (parsed.length !== 1) {
            throw new Error("Deserialized more than one cell");
        }
        return parsed[0];
    }
    constructor(opts) {
        // Level and depth information
        this._hashes = [];
        this._depths = [];
        /**
         * Beging cell parsing
         * @returns a new slice
         */
        this.beginParse = (allowExotic = false) => {
            if (this.isExotic && !allowExotic) {
                throw new Error("Exotic cells cannot be parsed");
            }
            return new Slice_1.Slice(new BitReader_1.BitReader(this.bits), this.refs);
        };
        /**
         * Get cell hash
         * @param level level
         * @returns cell hash
         */
        this.hash = (level = 3) => {
            return this._hashes[Math.min(this._hashes.length - 1, level)];
        };
        /**
         * Get cell depth
         * @param level level
         * @returns cell depth
         */
        this.depth = (level = 3) => {
            return this._depths[Math.min(this._depths.length - 1, level)];
        };
        /**
         * Get cell level
         * @returns cell level
         */
        this.level = () => {
            return this.mask.level;
        };
        /**
         * Checks cell to be euqal to another cell
         * @param other other cell
         * @returns true if cells are equal
         */
        this.equals = (other) => {
            return this.hash().equals(other.hash());
        };
        this[_a] = () => this.toString();
        // Resolve bits
        let bits = BitString_1.BitString.EMPTY;
        if (opts && opts.bits) {
            bits = opts.bits;
        }
        // Resolve refs
        let refs = [];
        if (opts && opts.refs) {
            refs = [...opts.refs];
        }
        // Resolve type
        let hashes;
        let depths;
        let mask;
        let type = CellType_1.CellType.Ordinary;
        if (opts && opts.exotic) {
            // Resolve exotic cell
            let resolved = (0, resolveExotic_1.resolveExotic)(bits, refs);
            // Perform wonders
            let wonders = (0, wonderCalculator_1.wonderCalculator)(resolved.type, bits, refs);
            // Copy results
            mask = wonders.mask;
            depths = wonders.depths;
            hashes = wonders.hashes;
            type = resolved.type;
        }
        else {
            // Check correctness
            if (refs.length > 4) {
                throw new Error("Invalid number of references");
            }
            if (bits.length > 1023) {
                throw new Error(`Bits overflow: ${bits.length} > 1023`);
            }
            // Perform wonders
            let wonders = (0, wonderCalculator_1.wonderCalculator)(CellType_1.CellType.Ordinary, bits, refs);
            // Copy results
            mask = wonders.mask;
            depths = wonders.depths;
            hashes = wonders.hashes;
            type = CellType_1.CellType.Ordinary;
        }
        // Set fields
        this.type = type;
        this.bits = bits;
        this.refs = refs;
        this.mask = mask;
        this._depths = depths;
        this._hashes = hashes;
        Object.freeze(this);
        Object.freeze(this.refs);
        Object.freeze(this.bits);
        Object.freeze(this.mask);
        Object.freeze(this._depths);
        Object.freeze(this._hashes);
    }
    /**
     * Check if cell is exotic
     */
    get isExotic() {
        return this.type !== CellType_1.CellType.Ordinary;
    }
    /**
     * Serializes cell to BOC
     * @param opts options
     */
    toBoc(opts) {
        let idx = (opts && opts.idx !== null && opts.idx !== undefined) ? opts.idx : false;
        let crc32 = (opts && opts.crc32 !== null && opts.crc32 !== undefined) ? opts.crc32 : true;
        return (0, serialization_1.serializeBoc)(this, { idx, crc32 });
    }
    /**
     * Format cell to string
     * @param indent indentation
     * @returns string representation
     */
    toString(indent) {
        let id = indent || '';
        let t = 'x';
        if (this.isExotic) {
            if (this.type === CellType_1.CellType.MerkleProof) {
                t = 'p';
            }
            else if (this.type === CellType_1.CellType.MerkleUpdate) {
                t = 'u';
            }
            else if (this.type === CellType_1.CellType.PrunedBranch) {
                t = 'p';
            }
        }
        let s = id + (this.isExotic ? t : 'x') + '{' + this.bits.toString() + '}';
        for (let k in this.refs) {
            const i = this.refs[k];
            s += '\n' + i.toString(id + ' ');
        }
        return s;
    }
    /**
     * Covnert cell to slice
     * @returns slice
     */
    asSlice() {
        return this.beginParse();
    }
    /**
     * Convert cell to a builder that has this cell stored
     * @returns builder
     */
    asBuilder() {
        return (0, Builder_1.beginCell)().storeSlice(this.asSlice());
    }
}
exports.Cell = Cell;
_a = symbol_inspect_1.default;
Cell.EMPTY = new Cell();


/***/ }),

/***/ 68343:
/***/ (function(module) {

/**
 * A JavaScript implementation of the SHA family of hashes - defined in FIPS PUB 180-4, FIPS PUB 202,
 * and SP 800-185 - as well as the corresponding HMAC implementation as defined in FIPS PUB 198-1.
 *
 * Copyright 2008-2020 Brian Turek, 1998-2009 Paul Johnston & Contributors
 * Distributed under the BSD License
 * See http://caligatio.github.com/jsSHA/ for more information
 *
 * Two ECMAScript polyfill functions carry the following license:
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED,
 * INCLUDING WITHOUT LIMITATION ANY IMPLIED WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 * MERCHANTABLITY OR NON-INFRINGEMENT.
 *
 * See the Apache Version 2.0 License for specific language governing permissions and limitations under the License.
 */
!function(n,r){ true?module.exports=r():0}(this,(function(){"use strict";var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function r(n,r,t,e){var i,o,u,f=r||[0],w=(t=t||0)>>>3,s=-1===e?3:0;for(i=0;i<n.length;i+=1)o=(u=i+w)>>>2,f.length<=o&&f.push(0),f[o]|=n[i]<<8*(s+e*(u%4));return{value:f,binLen:8*n.length+t}}function t(t,e,i){switch(e){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(t){case"HEX":return function(n,r,t){return function(n,r,t,e){var i,o,u,f;if(0!=n.length%2)throw new Error("String of HEX type must be in byte increments");var w=r||[0],s=(t=t||0)>>>3,a=-1===e?3:0;for(i=0;i<n.length;i+=2){if(o=parseInt(n.substr(i,2),16),isNaN(o))throw new Error("String of HEX type contains invalid characters");for(u=(f=(i>>>1)+s)>>>2;w.length<=u;)w.push(0);w[u]|=o<<8*(a+e*(f%4))}return{value:w,binLen:4*n.length+t}}(n,r,t,i)};case"TEXT":return function(n,r,t){return function(n,r,t,e,i){var o,u,f,w,s,a,h,c,v=0,A=t||[0],E=(e=e||0)>>>3;if("UTF8"===r)for(h=-1===i?3:0,f=0;f<n.length;f+=1)for(u=[],128>(o=n.charCodeAt(f))?u.push(o):2048>o?(u.push(192|o>>>6),u.push(128|63&o)):55296>o||57344<=o?u.push(224|o>>>12,128|o>>>6&63,128|63&o):(f+=1,o=65536+((1023&o)<<10|1023&n.charCodeAt(f)),u.push(240|o>>>18,128|o>>>12&63,128|o>>>6&63,128|63&o)),w=0;w<u.length;w+=1){for(s=(a=v+E)>>>2;A.length<=s;)A.push(0);A[s]|=u[w]<<8*(h+i*(a%4)),v+=1}else for(h=-1===i?2:0,c="UTF16LE"===r&&1!==i||"UTF16LE"!==r&&1===i,f=0;f<n.length;f+=1){for(o=n.charCodeAt(f),!0===c&&(o=(w=255&o)<<8|o>>>8),s=(a=v+E)>>>2;A.length<=s;)A.push(0);A[s]|=o<<8*(h+i*(a%4)),v+=2}return{value:A,binLen:8*v+e}}(n,e,r,t,i)};case"B64":return function(r,t,e){return function(r,t,e,i){var o,u,f,w,s,a,h=0,c=t||[0],v=(e=e||0)>>>3,A=-1===i?3:0,E=r.indexOf("=");if(-1===r.search(/^[a-zA-Z0-9=+/]+$/))throw new Error("Invalid character in base-64 string");if(r=r.replace(/=/g,""),-1!==E&&E<r.length)throw new Error("Invalid '=' found in base-64 string");for(o=0;o<r.length;o+=4){for(w=r.substr(o,4),f=0,u=0;u<w.length;u+=1)f|=n.indexOf(w.charAt(u))<<18-6*u;for(u=0;u<w.length-1;u+=1){for(s=(a=h+v)>>>2;c.length<=s;)c.push(0);c[s]|=(f>>>16-8*u&255)<<8*(A+i*(a%4)),h+=1}}return{value:c,binLen:8*h+e}}(r,t,e,i)};case"BYTES":return function(n,r,t){return function(n,r,t,e){var i,o,u,f,w=r||[0],s=(t=t||0)>>>3,a=-1===e?3:0;for(o=0;o<n.length;o+=1)i=n.charCodeAt(o),u=(f=o+s)>>>2,w.length<=u&&w.push(0),w[u]|=i<<8*(a+e*(f%4));return{value:w,binLen:8*n.length+t}}(n,r,t,i)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(n){throw new Error("ARRAYBUFFER not supported by this environment")}return function(n,t,e){return function(n,t,e,i){return r(new Uint8Array(n),t,e,i)}(n,t,e,i)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(n){throw new Error("UINT8ARRAY not supported by this environment")}return function(n,t,e){return r(n,t,e,i)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function e(r,t,e,i){switch(r){case"HEX":return function(n){return function(n,r,t,e){var i,o,u="",f=r/8,w=-1===t?3:0;for(i=0;i<f;i+=1)o=n[i>>>2]>>>8*(w+t*(i%4)),u+="0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o);return e.outputUpper?u.toUpperCase():u}(n,t,e,i)};case"B64":return function(r){return function(r,t,e,i){var o,u,f,w,s,a="",h=t/8,c=-1===e?3:0;for(o=0;o<h;o+=3)for(w=o+1<h?r[o+1>>>2]:0,s=o+2<h?r[o+2>>>2]:0,f=(r[o>>>2]>>>8*(c+e*(o%4))&255)<<16|(w>>>8*(c+e*((o+1)%4))&255)<<8|s>>>8*(c+e*((o+2)%4))&255,u=0;u<4;u+=1)a+=8*o+6*u<=t?n.charAt(f>>>6*(3-u)&63):i.b64Pad;return a}(r,t,e,i)};case"BYTES":return function(n){return function(n,r,t){var e,i,o="",u=r/8,f=-1===t?3:0;for(e=0;e<u;e+=1)i=n[e>>>2]>>>8*(f+t*(e%4))&255,o+=String.fromCharCode(i);return o}(n,t,e)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch(n){throw new Error("ARRAYBUFFER not supported by this environment")}return function(n){return function(n,r,t){var e,i=r/8,o=new ArrayBuffer(i),u=new Uint8Array(o),f=-1===t?3:0;for(e=0;e<i;e+=1)u[e]=n[e>>>2]>>>8*(f+t*(e%4))&255;return o}(n,t,e)};case"UINT8ARRAY":try{new Uint8Array(0)}catch(n){throw new Error("UINT8ARRAY not supported by this environment")}return function(n){return function(n,r,t){var e,i=r/8,o=-1===t?3:0,u=new Uint8Array(i);for(e=0;e<i;e+=1)u[e]=n[e>>>2]>>>8*(o+t*(e%4))&255;return u}(n,t,e)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}var i=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],o=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],u=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],f="Chosen SHA variant is not supported";function w(n,r){var t,e,i=n.binLen>>>3,o=r.binLen>>>3,u=i<<3,f=4-i<<3;if(i%4!=0){for(t=0;t<o;t+=4)e=i+t>>>2,n.value[e]|=r.value[t>>>2]<<u,n.value.push(0),n.value[e+1]|=r.value[t>>>2]>>>f;return(n.value.length<<2)-4>=o+i&&n.value.pop(),{value:n.value,binLen:n.binLen+r.binLen}}return{value:n.value.concat(r.value),binLen:n.binLen+r.binLen}}function s(n){var r={outputUpper:!1,b64Pad:"=",outputLen:-1},t=n||{},e="Output length must be a multiple of 8";if(r.outputUpper=t.outputUpper||!1,t.b64Pad&&(r.b64Pad=t.b64Pad),t.outputLen){if(t.outputLen%8!=0)throw new Error(e);r.outputLen=t.outputLen}else if(t.shakeLen){if(t.shakeLen%8!=0)throw new Error(e);r.outputLen=t.shakeLen}if("boolean"!=typeof r.outputUpper)throw new Error("Invalid outputUpper formatting option");if("string"!=typeof r.b64Pad)throw new Error("Invalid b64Pad formatting option");return r}function a(n,r,e,i){var o=n+" must include a value and format";if(!r){if(!i)throw new Error(o);return i}if(void 0===r.value||!r.format)throw new Error(o);return t(r.format,r.encoding||"UTF8",e)(r.value)}var h=function(){function n(n,r,t){var e=t||{};if(this.t=r,this.i=e.encoding||"UTF8",this.numRounds=e.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=n,this.u=[],this.s=0,this.h=!1,this.v=0,this.A=!1,this.l=[],this.H=[]}return n.prototype.update=function(n){var r,t=0,e=this.S>>>5,i=this.p(n,this.u,this.s),o=i.binLen,u=i.value,f=o>>>5;for(r=0;r<f;r+=e)t+this.S<=o&&(this.m=this.R(u.slice(r,r+e),this.m),t+=this.S);this.v+=t,this.u=u.slice(t>>>5),this.s=o%this.S,this.h=!0},n.prototype.getHash=function(n,r){var t,i,o=this.U,u=s(r);if(this.T){if(-1===u.outputLen)throw new Error("Output length must be specified in options");o=u.outputLen}var f=e(n,o,this.C,u);if(this.A&&this.F)return f(this.F(u));for(i=this.K(this.u.slice(),this.s,this.v,this.B(this.m),o),t=1;t<this.numRounds;t+=1)this.T&&o%32!=0&&(i[i.length-1]&=16777215>>>24-o%32),i=this.K(i,o,0,this.L(this.o),o);return f(i)},n.prototype.setHMACKey=function(n,r,e){if(!this.g)throw new Error("Variant does not support HMAC");if(this.h)throw new Error("Cannot set MAC key after calling update");var i=t(r,(e||{}).encoding||"UTF8",this.C);this.k(i(n))},n.prototype.k=function(n){var r,t=this.S>>>3,e=t/4-1;if(1!==this.numRounds)throw new Error("Cannot set numRounds with MAC");if(this.A)throw new Error("MAC key already set");for(t<n.binLen/8&&(n.value=this.K(n.value,n.binLen,0,this.L(this.o),this.U));n.value.length<=e;)n.value.push(0);for(r=0;r<=e;r+=1)this.l[r]=909522486^n.value[r],this.H[r]=1549556828^n.value[r];this.m=this.R(this.l,this.m),this.v=this.S,this.A=!0},n.prototype.getHMAC=function(n,r){var t=s(r);return e(n,this.U,this.C,t)(this.Y())},n.prototype.Y=function(){var n;if(!this.A)throw new Error("Cannot call getHMAC without first setting MAC key");var r=this.K(this.u.slice(),this.s,this.v,this.B(this.m),this.U);return n=this.R(this.H,this.L(this.o)),n=this.K(r,this.U,this.S,n,this.U)},n}(),c=function(n,r){return(c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])})(n,r)};function v(n,r){function t(){this.constructor=n}c(n,r),n.prototype=null===r?Object.create(r):(t.prototype=r.prototype,new t)}function A(n,r){return n<<r|n>>>32-r}function E(n,r){return n>>>r|n<<32-r}function l(n,r){return n>>>r}function b(n,r,t){return n^r^t}function H(n,r,t){return n&r^~n&t}function d(n,r,t){return n&r^n&t^r&t}function S(n){return E(n,2)^E(n,13)^E(n,22)}function p(n,r){var t=(65535&n)+(65535&r);return(65535&(n>>>16)+(r>>>16)+(t>>>16))<<16|65535&t}function m(n,r,t,e){var i=(65535&n)+(65535&r)+(65535&t)+(65535&e);return(65535&(n>>>16)+(r>>>16)+(t>>>16)+(e>>>16)+(i>>>16))<<16|65535&i}function y(n,r,t,e,i){var o=(65535&n)+(65535&r)+(65535&t)+(65535&e)+(65535&i);return(65535&(n>>>16)+(r>>>16)+(t>>>16)+(e>>>16)+(i>>>16)+(o>>>16))<<16|65535&o}function R(n){return E(n,7)^E(n,18)^l(n,3)}function U(n){return E(n,6)^E(n,11)^E(n,25)}function T(n){return[1732584193,4023233417,2562383102,271733878,3285377520]}function C(n,r){var t,e,i,o,u,f,w,s=[];for(t=r[0],e=r[1],i=r[2],o=r[3],u=r[4],w=0;w<80;w+=1)s[w]=w<16?n[w]:A(s[w-3]^s[w-8]^s[w-14]^s[w-16],1),f=w<20?y(A(t,5),H(e,i,o),u,1518500249,s[w]):w<40?y(A(t,5),b(e,i,o),u,1859775393,s[w]):w<60?y(A(t,5),d(e,i,o),u,2400959708,s[w]):y(A(t,5),b(e,i,o),u,3395469782,s[w]),u=o,o=i,i=A(e,30),e=t,t=f;return r[0]=p(t,r[0]),r[1]=p(e,r[1]),r[2]=p(i,r[2]),r[3]=p(o,r[3]),r[4]=p(u,r[4]),r}function F(n,r,t,e){for(var i,o=15+(r+65>>>9<<4),u=r+t;n.length<=o;)n.push(0);for(n[r>>>5]|=128<<24-r%32,n[o]=4294967295&u,n[o-1]=u/4294967296|0,i=0;i<n.length;i+=16)e=C(n.slice(i,i+16),e);return e}var K=function(n){function r(r,e,i){var o=this;if("SHA-1"!==r)throw new Error(f);var u=i||{};return(o=n.call(this,r,e,i)||this).g=!0,o.F=o.Y,o.C=-1,o.p=t(o.t,o.i,o.C),o.R=C,o.B=function(n){return n.slice()},o.L=T,o.K=F,o.m=[1732584193,4023233417,2562383102,271733878,3285377520],o.S=512,o.U=160,o.T=!1,u.hmacKey&&o.k(a("hmacKey",u.hmacKey,o.C)),o}return v(r,n),r}(h);function B(n){return"SHA-224"==n?o.slice():u.slice()}function L(n,r){var t,e,o,u,f,w,s,a,h,c,v,A,b=[];for(t=r[0],e=r[1],o=r[2],u=r[3],f=r[4],w=r[5],s=r[6],a=r[7],v=0;v<64;v+=1)b[v]=v<16?n[v]:m(E(A=b[v-2],17)^E(A,19)^l(A,10),b[v-7],R(b[v-15]),b[v-16]),h=y(a,U(f),H(f,w,s),i[v],b[v]),c=p(S(t),d(t,e,o)),a=s,s=w,w=f,f=p(u,h),u=o,o=e,e=t,t=p(h,c);return r[0]=p(t,r[0]),r[1]=p(e,r[1]),r[2]=p(o,r[2]),r[3]=p(u,r[3]),r[4]=p(f,r[4]),r[5]=p(w,r[5]),r[6]=p(s,r[6]),r[7]=p(a,r[7]),r}var g=function(n){function r(r,e,i){var o=this;if("SHA-224"!==r&&"SHA-256"!==r)throw new Error(f);var u=i||{};return(o=n.call(this,r,e,i)||this).F=o.Y,o.g=!0,o.C=-1,o.p=t(o.t,o.i,o.C),o.R=L,o.B=function(n){return n.slice()},o.L=B,o.K=function(n,t,e,i){return function(n,r,t,e,i){for(var o,u=15+(r+65>>>9<<4),f=r+t;n.length<=u;)n.push(0);for(n[r>>>5]|=128<<24-r%32,n[u]=4294967295&f,n[u-1]=f/4294967296|0,o=0;o<n.length;o+=16)e=L(n.slice(o,o+16),e);return"SHA-224"===i?[e[0],e[1],e[2],e[3],e[4],e[5],e[6]]:e}(n,t,e,i,r)},o.m=B(r),o.S=512,o.U="SHA-224"===r?224:256,o.T=!1,u.hmacKey&&o.k(a("hmacKey",u.hmacKey,o.C)),o}return v(r,n),r}(h),k=function(n,r){this.N=n,this.I=r};function Y(n,r){var t;return r>32?(t=64-r,new k(n.I<<r|n.N>>>t,n.N<<r|n.I>>>t)):0!==r?(t=32-r,new k(n.N<<r|n.I>>>t,n.I<<r|n.N>>>t)):n}function N(n,r){var t;return r<32?(t=32-r,new k(n.N>>>r|n.I<<t,n.I>>>r|n.N<<t)):(t=64-r,new k(n.I>>>r|n.N<<t,n.N>>>r|n.I<<t))}function I(n,r){return new k(n.N>>>r,n.I>>>r|n.N<<32-r)}function M(n,r,t){return new k(n.N&r.N^~n.N&t.N,n.I&r.I^~n.I&t.I)}function X(n,r,t){return new k(n.N&r.N^n.N&t.N^r.N&t.N,n.I&r.I^n.I&t.I^r.I&t.I)}function z(n){var r=N(n,28),t=N(n,34),e=N(n,39);return new k(r.N^t.N^e.N,r.I^t.I^e.I)}function O(n,r){var t,e;t=(65535&n.I)+(65535&r.I);var i=(65535&(e=(n.I>>>16)+(r.I>>>16)+(t>>>16)))<<16|65535&t;return t=(65535&n.N)+(65535&r.N)+(e>>>16),e=(n.N>>>16)+(r.N>>>16)+(t>>>16),new k((65535&e)<<16|65535&t,i)}function j(n,r,t,e){var i,o;i=(65535&n.I)+(65535&r.I)+(65535&t.I)+(65535&e.I);var u=(65535&(o=(n.I>>>16)+(r.I>>>16)+(t.I>>>16)+(e.I>>>16)+(i>>>16)))<<16|65535&i;return i=(65535&n.N)+(65535&r.N)+(65535&t.N)+(65535&e.N)+(o>>>16),o=(n.N>>>16)+(r.N>>>16)+(t.N>>>16)+(e.N>>>16)+(i>>>16),new k((65535&o)<<16|65535&i,u)}function _(n,r,t,e,i){var o,u;o=(65535&n.I)+(65535&r.I)+(65535&t.I)+(65535&e.I)+(65535&i.I);var f=(65535&(u=(n.I>>>16)+(r.I>>>16)+(t.I>>>16)+(e.I>>>16)+(i.I>>>16)+(o>>>16)))<<16|65535&o;return o=(65535&n.N)+(65535&r.N)+(65535&t.N)+(65535&e.N)+(65535&i.N)+(u>>>16),u=(n.N>>>16)+(r.N>>>16)+(t.N>>>16)+(e.N>>>16)+(i.N>>>16)+(o>>>16),new k((65535&u)<<16|65535&o,f)}function P(n,r){return new k(n.N^r.N,n.I^r.I)}function x(n){var r=N(n,1),t=N(n,8),e=I(n,7);return new k(r.N^t.N^e.N,r.I^t.I^e.I)}function V(n){var r=N(n,14),t=N(n,18),e=N(n,41);return new k(r.N^t.N^e.N,r.I^t.I^e.I)}var Z=[new k(i[0],3609767458),new k(i[1],602891725),new k(i[2],3964484399),new k(i[3],2173295548),new k(i[4],4081628472),new k(i[5],3053834265),new k(i[6],2937671579),new k(i[7],3664609560),new k(i[8],2734883394),new k(i[9],1164996542),new k(i[10],1323610764),new k(i[11],3590304994),new k(i[12],4068182383),new k(i[13],991336113),new k(i[14],633803317),new k(i[15],3479774868),new k(i[16],2666613458),new k(i[17],944711139),new k(i[18],2341262773),new k(i[19],2007800933),new k(i[20],1495990901),new k(i[21],1856431235),new k(i[22],3175218132),new k(i[23],2198950837),new k(i[24],3999719339),new k(i[25],766784016),new k(i[26],2566594879),new k(i[27],3203337956),new k(i[28],1034457026),new k(i[29],2466948901),new k(i[30],3758326383),new k(i[31],168717936),new k(i[32],1188179964),new k(i[33],1546045734),new k(i[34],1522805485),new k(i[35],2643833823),new k(i[36],2343527390),new k(i[37],1014477480),new k(i[38],1206759142),new k(i[39],344077627),new k(i[40],1290863460),new k(i[41],3158454273),new k(i[42],3505952657),new k(i[43],106217008),new k(i[44],3606008344),new k(i[45],1432725776),new k(i[46],1467031594),new k(i[47],851169720),new k(i[48],3100823752),new k(i[49],1363258195),new k(i[50],3750685593),new k(i[51],3785050280),new k(i[52],3318307427),new k(i[53],3812723403),new k(i[54],2003034995),new k(i[55],3602036899),new k(i[56],1575990012),new k(i[57],1125592928),new k(i[58],2716904306),new k(i[59],442776044),new k(i[60],593698344),new k(i[61],3733110249),new k(i[62],2999351573),new k(i[63],3815920427),new k(3391569614,3928383900),new k(3515267271,566280711),new k(3940187606,3454069534),new k(4118630271,4000239992),new k(116418474,1914138554),new k(174292421,2731055270),new k(289380356,3203993006),new k(460393269,320620315),new k(685471733,587496836),new k(852142971,1086792851),new k(1017036298,365543100),new k(1126000580,2618297676),new k(1288033470,3409855158),new k(1501505948,4234509866),new k(1607167915,987167468),new k(1816402316,1246189591)];function q(n){return"SHA-384"===n?[new k(3418070365,o[0]),new k(1654270250,o[1]),new k(2438529370,o[2]),new k(355462360,o[3]),new k(1731405415,o[4]),new k(41048885895,o[5]),new k(3675008525,o[6]),new k(1203062813,o[7])]:[new k(u[0],4089235720),new k(u[1],2227873595),new k(u[2],4271175723),new k(u[3],1595750129),new k(u[4],2917565137),new k(u[5],725511199),new k(u[6],4215389547),new k(u[7],327033209)]}function D(n,r){var t,e,i,o,u,f,w,s,a,h,c,v,A,E,l,b,H=[];for(t=r[0],e=r[1],i=r[2],o=r[3],u=r[4],f=r[5],w=r[6],s=r[7],c=0;c<80;c+=1)c<16?(v=2*c,H[c]=new k(n[v],n[v+1])):H[c]=j((A=H[c-2],E=void 0,l=void 0,b=void 0,E=N(A,19),l=N(A,61),b=I(A,6),new k(E.N^l.N^b.N,E.I^l.I^b.I)),H[c-7],x(H[c-15]),H[c-16]),a=_(s,V(u),M(u,f,w),Z[c],H[c]),h=O(z(t),X(t,e,i)),s=w,w=f,f=u,u=O(o,a),o=i,i=e,e=t,t=O(a,h);return r[0]=O(t,r[0]),r[1]=O(e,r[1]),r[2]=O(i,r[2]),r[3]=O(o,r[3]),r[4]=O(u,r[4]),r[5]=O(f,r[5]),r[6]=O(w,r[6]),r[7]=O(s,r[7]),r}var G=function(n){function r(r,e,i){var o=this;if("SHA-384"!==r&&"SHA-512"!==r)throw new Error(f);var u=i||{};return(o=n.call(this,r,e,i)||this).F=o.Y,o.g=!0,o.C=-1,o.p=t(o.t,o.i,o.C),o.R=D,o.B=function(n){return n.slice()},o.L=q,o.K=function(n,t,e,i){return function(n,r,t,e,i){for(var o,u=31+(r+129>>>10<<5),f=r+t;n.length<=u;)n.push(0);for(n[r>>>5]|=128<<24-r%32,n[u]=4294967295&f,n[u-1]=f/4294967296|0,o=0;o<n.length;o+=32)e=D(n.slice(o,o+32),e);return"SHA-384"===i?[(e=e)[0].N,e[0].I,e[1].N,e[1].I,e[2].N,e[2].I,e[3].N,e[3].I,e[4].N,e[4].I,e[5].N,e[5].I]:[e[0].N,e[0].I,e[1].N,e[1].I,e[2].N,e[2].I,e[3].N,e[3].I,e[4].N,e[4].I,e[5].N,e[5].I,e[6].N,e[6].I,e[7].N,e[7].I]}(n,t,e,i,r)},o.m=q(r),o.S=1024,o.U="SHA-384"===r?384:512,o.T=!1,u.hmacKey&&o.k(a("hmacKey",u.hmacKey,o.C)),o}return v(r,n),r}(h),J=[new k(0,1),new k(0,32898),new k(2147483648,32906),new k(2147483648,2147516416),new k(0,32907),new k(0,2147483649),new k(2147483648,2147516545),new k(2147483648,32777),new k(0,138),new k(0,136),new k(0,2147516425),new k(0,2147483658),new k(0,2147516555),new k(2147483648,139),new k(2147483648,32905),new k(2147483648,32771),new k(2147483648,32770),new k(2147483648,128),new k(0,32778),new k(2147483648,2147483658),new k(2147483648,2147516545),new k(2147483648,32896),new k(0,2147483649),new k(2147483648,2147516424)],Q=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function W(n){var r,t=[];for(r=0;r<5;r+=1)t[r]=[new k(0,0),new k(0,0),new k(0,0),new k(0,0),new k(0,0)];return t}function $(n){var r,t=[];for(r=0;r<5;r+=1)t[r]=n[r].slice();return t}function nn(n,r){var t,e,i,o,u,f,w,s,a,h=[],c=[];if(null!==n)for(e=0;e<n.length;e+=2)r[(e>>>1)%5][(e>>>1)/5|0]=P(r[(e>>>1)%5][(e>>>1)/5|0],new k(n[e+1],n[e]));for(t=0;t<24;t+=1){for(o=W(),e=0;e<5;e+=1)h[e]=(u=r[e][0],f=r[e][1],w=r[e][2],s=r[e][3],a=r[e][4],new k(u.N^f.N^w.N^s.N^a.N,u.I^f.I^w.I^s.I^a.I));for(e=0;e<5;e+=1)c[e]=P(h[(e+4)%5],Y(h[(e+1)%5],1));for(e=0;e<5;e+=1)for(i=0;i<5;i+=1)r[e][i]=P(r[e][i],c[e]);for(e=0;e<5;e+=1)for(i=0;i<5;i+=1)o[i][(2*e+3*i)%5]=Y(r[e][i],Q[e][i]);for(e=0;e<5;e+=1)for(i=0;i<5;i+=1)r[e][i]=P(o[e][i],new k(~o[(e+1)%5][i].N&o[(e+2)%5][i].N,~o[(e+1)%5][i].I&o[(e+2)%5][i].I));r[0][0]=P(r[0][0],J[t])}return r}function rn(n){var r,t,e=0,i=[0,0],o=[4294967295&n,n/4294967296&2097151];for(r=6;r>=0;r--)0===(t=o[r>>2]>>>8*r&255)&&0===e||(i[e+1>>2]|=t<<8*(e+1),e+=1);return e=0!==e?e:1,i[0]|=e,{value:e+1>4?i:[i[0]],binLen:8+8*e}}function tn(n){return w(rn(n.binLen),n)}function en(n,r){var t,e=rn(r),i=r>>>2,o=(i-(e=w(e,n)).value.length%i)%i;for(t=0;t<o;t++)e.value.push(0);return e.value}var on=function(n){function r(r,e,i){var o=this,u=6,w=0,s=i||{};if(1!==(o=n.call(this,r,e,i)||this).numRounds){if(s.kmacKey||s.hmacKey)throw new Error("Cannot set numRounds with MAC");if("CSHAKE128"===o.o||"CSHAKE256"===o.o)throw new Error("Cannot set numRounds for CSHAKE variants")}switch(o.C=1,o.p=t(o.t,o.i,o.C),o.R=nn,o.B=$,o.L=W,o.m=W(),o.T=!1,r){case"SHA3-224":o.S=w=1152,o.U=224,o.g=!0,o.F=o.Y;break;case"SHA3-256":o.S=w=1088,o.U=256,o.g=!0,o.F=o.Y;break;case"SHA3-384":o.S=w=832,o.U=384,o.g=!0,o.F=o.Y;break;case"SHA3-512":o.S=w=576,o.U=512,o.g=!0,o.F=o.Y;break;case"SHAKE128":u=31,o.S=w=1344,o.U=-1,o.T=!0,o.g=!1,o.F=null;break;case"SHAKE256":u=31,o.S=w=1088,o.U=-1,o.T=!0,o.g=!1,o.F=null;break;case"KMAC128":u=4,o.S=w=1344,o.M(i),o.U=-1,o.T=!0,o.g=!1,o.F=o.X;break;case"KMAC256":u=4,o.S=w=1088,o.M(i),o.U=-1,o.T=!0,o.g=!1,o.F=o.X;break;case"CSHAKE128":o.S=w=1344,u=o.O(i),o.U=-1,o.T=!0,o.g=!1,o.F=null;break;case"CSHAKE256":o.S=w=1088,u=o.O(i),o.U=-1,o.T=!0,o.g=!1,o.F=null;break;default:throw new Error(f)}return o.K=function(n,r,t,e,i){return function(n,r,t,e,i,o,u){var f,w,s=0,a=[],h=i>>>5,c=r>>>5;for(f=0;f<c&&r>=i;f+=h)e=nn(n.slice(f,f+h),e),r-=i;for(n=n.slice(f),r%=i;n.length<h;)n.push(0);for(n[(f=r>>>3)>>2]^=o<<f%4*8,n[h-1]^=2147483648,e=nn(n,e);32*a.length<u&&(w=e[s%5][s/5|0],a.push(w.I),!(32*a.length>=u));)a.push(w.N),0==64*(s+=1)%i&&(nn(null,e),s=0);return a}(n,r,0,e,w,u,i)},s.hmacKey&&o.k(a("hmacKey",s.hmacKey,o.C)),o}return v(r,n),r.prototype.O=function(n,r){var t=function(n){var r=n||{};return{funcName:a("funcName",r.funcName,1,{value:[],binLen:0}),customization:a("Customization",r.customization,1,{value:[],binLen:0})}}(n||{});r&&(t.funcName=r);var e=w(tn(t.funcName),tn(t.customization));if(0!==t.customization.binLen||0!==t.funcName.binLen){for(var i=en(e,this.S>>>3),o=0;o<i.length;o+=this.S>>>5)this.m=this.R(i.slice(o,o+(this.S>>>5)),this.m),this.v+=this.S;return 4}return 31},r.prototype.M=function(n){var r=function(n){var r=n||{};return{kmacKey:a("kmacKey",r.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:a("Customization",r.customization,1,{value:[],binLen:0})}}(n||{});this.O(n,r.funcName);for(var t=en(tn(r.kmacKey),this.S>>>3),e=0;e<t.length;e+=this.S>>>5)this.m=this.R(t.slice(e,e+(this.S>>>5)),this.m),this.v+=this.S;this.A=!0},r.prototype.X=function(n){var r=w({value:this.u.slice(),binLen:this.s},function(n){var r,t,e=0,i=[0,0],o=[4294967295&n,n/4294967296&2097151];for(r=6;r>=0;r--)0==(t=o[r>>2]>>>8*r&255)&&0===e||(i[e>>2]|=t<<8*e,e+=1);return i[(e=0!==e?e:1)>>2]|=e<<8*e,{value:e+1>4?i:[i[0]],binLen:8+8*e}}(n.outputLen));return this.K(r.value,r.binLen,this.v,this.B(this.m),n.outputLen)},r}(h);return function(){function n(n,r,t){if("SHA-1"==n)this.j=new K(n,r,t);else if("SHA-224"==n||"SHA-256"==n)this.j=new g(n,r,t);else if("SHA-384"==n||"SHA-512"==n)this.j=new G(n,r,t);else{if("SHA3-224"!=n&&"SHA3-256"!=n&&"SHA3-384"!=n&&"SHA3-512"!=n&&"SHAKE128"!=n&&"SHAKE256"!=n&&"CSHAKE128"!=n&&"CSHAKE256"!=n&&"KMAC128"!=n&&"KMAC256"!=n)throw new Error(f);this.j=new on(n,r,t)}}return n.prototype.update=function(n){this.j.update(n)},n.prototype.getHash=function(n,r){return this.j.getHash(n,r)},n.prototype.setHMACKey=function(n,r,t){this.j.setHMACKey(n,r,t)},n.prototype.getHMAC=function(n,r){return this.j.getHMAC(n,r)},n}()}));
//# sourceMappingURL=sha.js.map


/***/ }),

/***/ 71629:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalAddress = void 0;
const symbol_inspect_1 = __importDefault(__webpack_require__(29107));
class ExternalAddress {
    static isAddress(src) {
        return src instanceof ExternalAddress;
    }
    constructor(value, bits) {
        this[_a] = () => this.toString();
        this.value = value;
        this.bits = bits;
    }
    toString() {
        return `External<${this.bits}:${this.value}>`;
    }
}
exports.ExternalAddress = ExternalAddress;
_a = symbol_inspect_1.default;


/***/ }),

/***/ 71784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.packExtraCurrencyCell = exports.packExtraCurrencyDict = exports.storeExtraCurrency = exports.loadMaybeExtraCurrency = exports.loadExtraCurrency = void 0;
const Builder_1 = __webpack_require__(65871);
const Dictionary_1 = __webpack_require__(97590);
function loadExtraCurrency(data) {
    let ecDict = data instanceof Dictionary_1.Dictionary ? data : Dictionary_1.Dictionary.loadDirect(Dictionary_1.Dictionary.Keys.Uint(32), Dictionary_1.Dictionary.Values.BigVarUint(5), data);
    let ecMap = {};
    for (let [k, v] of ecDict) {
        ecMap[k] = v;
    }
    return ecMap;
}
exports.loadExtraCurrency = loadExtraCurrency;
function loadMaybeExtraCurrency(data) {
    const ecData = data.loadMaybeRef();
    return ecData === null ? ecData : loadExtraCurrency(ecData);
}
exports.loadMaybeExtraCurrency = loadMaybeExtraCurrency;
function storeExtraCurrency(extracurrency) {
    return (builder) => {
        builder.storeDict(packExtraCurrencyDict(extracurrency));
    };
}
exports.storeExtraCurrency = storeExtraCurrency;
function packExtraCurrencyDict(extracurrency) {
    const resEc = Dictionary_1.Dictionary.empty(Dictionary_1.Dictionary.Keys.Uint(32), Dictionary_1.Dictionary.Values.BigVarUint(5));
    Object.entries(extracurrency).map(([k, v]) => resEc.set(Number(k), v));
    return resEc;
}
exports.packExtraCurrencyDict = packExtraCurrencyDict;
function packExtraCurrencyCell(extracurrency) {
    return (0, Builder_1.beginCell)().storeDictDirect(packExtraCurrencyDict(extracurrency)).endCell();
}
exports.packExtraCurrencyCell = packExtraCurrencyCell;


/***/ }),

/***/ 73150:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sha256 = void 0;
async function sha256(source) {
    if (typeof source === 'string') {
        return Buffer.from(await crypto.subtle.digest("SHA-256", Buffer.from(source, 'utf-8')));
    }
    return Buffer.from(await crypto.subtle.digest("SHA-256", source));
}
exports.sha256 = sha256;


/***/ }),

/***/ 73814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadSimpleLibrary = exports.loadShardStateUnsplit = exports.storeShardIdent = exports.loadShardIdent = exports.storeShardAccounts = exports.loadShardAccounts = exports.ShardAccountRefValue = exports.storeShardAccount = exports.loadShardAccount = exports.ReserveMode = exports.SendMode = exports.storeMessageRelaxed = exports.loadMessageRelaxed = exports.storeMessage = exports.loadMessage = exports.loadMasterchainStateExtra = exports.storeHashUpdate = exports.loadHashUpdate = exports.storeExtraCurrency = exports.loadMaybeExtraCurrency = exports.loadExtraCurrency = exports.packExtraCurrencyDict = exports.packExtraCurrencyCell = exports.storeDepthBalanceInfo = exports.loadDepthBalanceInfo = exports.storeCurrencyCollection = exports.loadCurrencyCollection = exports.storeComputeSkipReason = exports.loadComputeSkipReason = exports.storeCommonMessageInfoRelaxed = exports.loadCommonMessageInfoRelaxed = exports.storeCommonMessageInfo = exports.loadCommonMessageInfo = exports.storeOutList = exports.loadOutList = exports.storeOutAction = exports.loadOutAction = exports.storeAccountStorage = exports.loadAccountStorage = exports.storeAccountStatusChange = exports.loadAccountStatusChange = exports.storeAccountStatus = exports.loadAccountStatus = exports.storeAccountState = exports.loadAccountState = exports.storeAccount = exports.loadAccount = exports.comment = exports.external = exports.internal = void 0;
exports.storeTransactionsStoragePhase = exports.loadTransactionStoragePhase = exports.storeTransactionDescription = exports.loadTransactionDescription = exports.storeTransactionCreditPhase = exports.loadTransactionCreditPhase = exports.storeTransactionComputePhase = exports.loadTransactionComputePhase = exports.storeTransactionBouncePhase = exports.loadTransactionBouncePhase = exports.storeTransactionActionPhase = exports.loadTransactionActionPhase = exports.storeTransaction = exports.loadTransaction = exports.storeTickTock = exports.loadTickTock = exports.storeStorageUsedShort = exports.loadStorageUsedShort = exports.storeStorageUsed = exports.loadStorageUsed = exports.storeStorageInfo = exports.loadStorageInfo = exports.storeStateInit = exports.loadStateInit = exports.storeSplitMergeInfo = exports.loadSplitMergeInfo = exports.storeLibRef = exports.loadLibRef = exports.storeSimpleLibrary = void 0;
var _helpers_1 = __webpack_require__(9447);
Object.defineProperty(exports, "internal", ({ enumerable: true, get: function () { return _helpers_1.internal; } }));
Object.defineProperty(exports, "external", ({ enumerable: true, get: function () { return _helpers_1.external; } }));
Object.defineProperty(exports, "comment", ({ enumerable: true, get: function () { return _helpers_1.comment; } }));
var Account_1 = __webpack_require__(62142);
Object.defineProperty(exports, "loadAccount", ({ enumerable: true, get: function () { return Account_1.loadAccount; } }));
Object.defineProperty(exports, "storeAccount", ({ enumerable: true, get: function () { return Account_1.storeAccount; } }));
var AccountState_1 = __webpack_require__(83049);
Object.defineProperty(exports, "loadAccountState", ({ enumerable: true, get: function () { return AccountState_1.loadAccountState; } }));
Object.defineProperty(exports, "storeAccountState", ({ enumerable: true, get: function () { return AccountState_1.storeAccountState; } }));
var AccountStatus_1 = __webpack_require__(87676);
Object.defineProperty(exports, "loadAccountStatus", ({ enumerable: true, get: function () { return AccountStatus_1.loadAccountStatus; } }));
Object.defineProperty(exports, "storeAccountStatus", ({ enumerable: true, get: function () { return AccountStatus_1.storeAccountStatus; } }));
var AccountStatusChange_1 = __webpack_require__(62312);
Object.defineProperty(exports, "loadAccountStatusChange", ({ enumerable: true, get: function () { return AccountStatusChange_1.loadAccountStatusChange; } }));
Object.defineProperty(exports, "storeAccountStatusChange", ({ enumerable: true, get: function () { return AccountStatusChange_1.storeAccountStatusChange; } }));
var AccountStorage_1 = __webpack_require__(86161);
Object.defineProperty(exports, "loadAccountStorage", ({ enumerable: true, get: function () { return AccountStorage_1.loadAccountStorage; } }));
Object.defineProperty(exports, "storeAccountStorage", ({ enumerable: true, get: function () { return AccountStorage_1.storeAccountStorage; } }));
var OutList_1 = __webpack_require__(63101);
Object.defineProperty(exports, "loadOutAction", ({ enumerable: true, get: function () { return OutList_1.loadOutAction; } }));
Object.defineProperty(exports, "storeOutAction", ({ enumerable: true, get: function () { return OutList_1.storeOutAction; } }));
Object.defineProperty(exports, "loadOutList", ({ enumerable: true, get: function () { return OutList_1.loadOutList; } }));
Object.defineProperty(exports, "storeOutList", ({ enumerable: true, get: function () { return OutList_1.storeOutList; } }));
var CommonMessageInfo_1 = __webpack_require__(60445);
Object.defineProperty(exports, "loadCommonMessageInfo", ({ enumerable: true, get: function () { return CommonMessageInfo_1.loadCommonMessageInfo; } }));
Object.defineProperty(exports, "storeCommonMessageInfo", ({ enumerable: true, get: function () { return CommonMessageInfo_1.storeCommonMessageInfo; } }));
var CommonMessageInfoRelaxed_1 = __webpack_require__(92234);
Object.defineProperty(exports, "loadCommonMessageInfoRelaxed", ({ enumerable: true, get: function () { return CommonMessageInfoRelaxed_1.loadCommonMessageInfoRelaxed; } }));
Object.defineProperty(exports, "storeCommonMessageInfoRelaxed", ({ enumerable: true, get: function () { return CommonMessageInfoRelaxed_1.storeCommonMessageInfoRelaxed; } }));
var ComputeSkipReason_1 = __webpack_require__(93471);
Object.defineProperty(exports, "loadComputeSkipReason", ({ enumerable: true, get: function () { return ComputeSkipReason_1.loadComputeSkipReason; } }));
Object.defineProperty(exports, "storeComputeSkipReason", ({ enumerable: true, get: function () { return ComputeSkipReason_1.storeComputeSkipReason; } }));
var CurrencyCollection_1 = __webpack_require__(10574);
Object.defineProperty(exports, "loadCurrencyCollection", ({ enumerable: true, get: function () { return CurrencyCollection_1.loadCurrencyCollection; } }));
Object.defineProperty(exports, "storeCurrencyCollection", ({ enumerable: true, get: function () { return CurrencyCollection_1.storeCurrencyCollection; } }));
var DepthBalanceInfo_1 = __webpack_require__(84458);
Object.defineProperty(exports, "loadDepthBalanceInfo", ({ enumerable: true, get: function () { return DepthBalanceInfo_1.loadDepthBalanceInfo; } }));
Object.defineProperty(exports, "storeDepthBalanceInfo", ({ enumerable: true, get: function () { return DepthBalanceInfo_1.storeDepthBalanceInfo; } }));
var ExtraCurrency_1 = __webpack_require__(71784);
Object.defineProperty(exports, "packExtraCurrencyCell", ({ enumerable: true, get: function () { return ExtraCurrency_1.packExtraCurrencyCell; } }));
Object.defineProperty(exports, "packExtraCurrencyDict", ({ enumerable: true, get: function () { return ExtraCurrency_1.packExtraCurrencyDict; } }));
Object.defineProperty(exports, "loadExtraCurrency", ({ enumerable: true, get: function () { return ExtraCurrency_1.loadExtraCurrency; } }));
Object.defineProperty(exports, "loadMaybeExtraCurrency", ({ enumerable: true, get: function () { return ExtraCurrency_1.loadMaybeExtraCurrency; } }));
Object.defineProperty(exports, "storeExtraCurrency", ({ enumerable: true, get: function () { return ExtraCurrency_1.storeExtraCurrency; } }));
var HashUpdate_1 = __webpack_require__(14660);
Object.defineProperty(exports, "loadHashUpdate", ({ enumerable: true, get: function () { return HashUpdate_1.loadHashUpdate; } }));
Object.defineProperty(exports, "storeHashUpdate", ({ enumerable: true, get: function () { return HashUpdate_1.storeHashUpdate; } }));
var MasterchainStateExtra_1 = __webpack_require__(29039);
Object.defineProperty(exports, "loadMasterchainStateExtra", ({ enumerable: true, get: function () { return MasterchainStateExtra_1.loadMasterchainStateExtra; } }));
var Message_1 = __webpack_require__(48178);
Object.defineProperty(exports, "loadMessage", ({ enumerable: true, get: function () { return Message_1.loadMessage; } }));
Object.defineProperty(exports, "storeMessage", ({ enumerable: true, get: function () { return Message_1.storeMessage; } }));
var MessageRelaxed_1 = __webpack_require__(84143);
Object.defineProperty(exports, "loadMessageRelaxed", ({ enumerable: true, get: function () { return MessageRelaxed_1.loadMessageRelaxed; } }));
Object.defineProperty(exports, "storeMessageRelaxed", ({ enumerable: true, get: function () { return MessageRelaxed_1.storeMessageRelaxed; } }));
var SendMode_1 = __webpack_require__(14568);
Object.defineProperty(exports, "SendMode", ({ enumerable: true, get: function () { return SendMode_1.SendMode; } }));
var ReserveMode_1 = __webpack_require__(41766);
Object.defineProperty(exports, "ReserveMode", ({ enumerable: true, get: function () { return ReserveMode_1.ReserveMode; } }));
var ShardAccount_1 = __webpack_require__(30594);
Object.defineProperty(exports, "loadShardAccount", ({ enumerable: true, get: function () { return ShardAccount_1.loadShardAccount; } }));
Object.defineProperty(exports, "storeShardAccount", ({ enumerable: true, get: function () { return ShardAccount_1.storeShardAccount; } }));
var ShardAccounts_1 = __webpack_require__(28993);
Object.defineProperty(exports, "ShardAccountRefValue", ({ enumerable: true, get: function () { return ShardAccounts_1.ShardAccountRefValue; } }));
Object.defineProperty(exports, "loadShardAccounts", ({ enumerable: true, get: function () { return ShardAccounts_1.loadShardAccounts; } }));
Object.defineProperty(exports, "storeShardAccounts", ({ enumerable: true, get: function () { return ShardAccounts_1.storeShardAccounts; } }));
var ShardIdent_1 = __webpack_require__(32423);
Object.defineProperty(exports, "loadShardIdent", ({ enumerable: true, get: function () { return ShardIdent_1.loadShardIdent; } }));
Object.defineProperty(exports, "storeShardIdent", ({ enumerable: true, get: function () { return ShardIdent_1.storeShardIdent; } }));
var ShardStateUnsplit_1 = __webpack_require__(85787);
Object.defineProperty(exports, "loadShardStateUnsplit", ({ enumerable: true, get: function () { return ShardStateUnsplit_1.loadShardStateUnsplit; } }));
var SimpleLibrary_1 = __webpack_require__(62672);
Object.defineProperty(exports, "loadSimpleLibrary", ({ enumerable: true, get: function () { return SimpleLibrary_1.loadSimpleLibrary; } }));
Object.defineProperty(exports, "storeSimpleLibrary", ({ enumerable: true, get: function () { return SimpleLibrary_1.storeSimpleLibrary; } }));
var LibRef_1 = __webpack_require__(63137);
Object.defineProperty(exports, "loadLibRef", ({ enumerable: true, get: function () { return LibRef_1.loadLibRef; } }));
Object.defineProperty(exports, "storeLibRef", ({ enumerable: true, get: function () { return LibRef_1.storeLibRef; } }));
var SplitMergeInfo_1 = __webpack_require__(49589);
Object.defineProperty(exports, "loadSplitMergeInfo", ({ enumerable: true, get: function () { return SplitMergeInfo_1.loadSplitMergeInfo; } }));
Object.defineProperty(exports, "storeSplitMergeInfo", ({ enumerable: true, get: function () { return SplitMergeInfo_1.storeSplitMergeInfo; } }));
var StateInit_1 = __webpack_require__(22738);
Object.defineProperty(exports, "loadStateInit", ({ enumerable: true, get: function () { return StateInit_1.loadStateInit; } }));
Object.defineProperty(exports, "storeStateInit", ({ enumerable: true, get: function () { return StateInit_1.storeStateInit; } }));
var StorageInto_1 = __webpack_require__(85006);
Object.defineProperty(exports, "loadStorageInfo", ({ enumerable: true, get: function () { return StorageInto_1.loadStorageInfo; } }));
Object.defineProperty(exports, "storeStorageInfo", ({ enumerable: true, get: function () { return StorageInto_1.storeStorageInfo; } }));
var StorageUsed_1 = __webpack_require__(92577);
Object.defineProperty(exports, "loadStorageUsed", ({ enumerable: true, get: function () { return StorageUsed_1.loadStorageUsed; } }));
Object.defineProperty(exports, "storeStorageUsed", ({ enumerable: true, get: function () { return StorageUsed_1.storeStorageUsed; } }));
var StorageUsedShort_1 = __webpack_require__(51143);
Object.defineProperty(exports, "loadStorageUsedShort", ({ enumerable: true, get: function () { return StorageUsedShort_1.loadStorageUsedShort; } }));
Object.defineProperty(exports, "storeStorageUsedShort", ({ enumerable: true, get: function () { return StorageUsedShort_1.storeStorageUsedShort; } }));
var TickTock_1 = __webpack_require__(4599);
Object.defineProperty(exports, "loadTickTock", ({ enumerable: true, get: function () { return TickTock_1.loadTickTock; } }));
Object.defineProperty(exports, "storeTickTock", ({ enumerable: true, get: function () { return TickTock_1.storeTickTock; } }));
var Transaction_1 = __webpack_require__(96305);
Object.defineProperty(exports, "loadTransaction", ({ enumerable: true, get: function () { return Transaction_1.loadTransaction; } }));
Object.defineProperty(exports, "storeTransaction", ({ enumerable: true, get: function () { return Transaction_1.storeTransaction; } }));
var TransactionActionPhase_1 = __webpack_require__(464);
Object.defineProperty(exports, "loadTransactionActionPhase", ({ enumerable: true, get: function () { return TransactionActionPhase_1.loadTransactionActionPhase; } }));
Object.defineProperty(exports, "storeTransactionActionPhase", ({ enumerable: true, get: function () { return TransactionActionPhase_1.storeTransactionActionPhase; } }));
var TransactionBouncePhase_1 = __webpack_require__(35726);
Object.defineProperty(exports, "loadTransactionBouncePhase", ({ enumerable: true, get: function () { return TransactionBouncePhase_1.loadTransactionBouncePhase; } }));
Object.defineProperty(exports, "storeTransactionBouncePhase", ({ enumerable: true, get: function () { return TransactionBouncePhase_1.storeTransactionBouncePhase; } }));
var TransactionComputePhase_1 = __webpack_require__(53857);
Object.defineProperty(exports, "loadTransactionComputePhase", ({ enumerable: true, get: function () { return TransactionComputePhase_1.loadTransactionComputePhase; } }));
Object.defineProperty(exports, "storeTransactionComputePhase", ({ enumerable: true, get: function () { return TransactionComputePhase_1.storeTransactionComputePhase; } }));
var TransactionCreditPhase_1 = __webpack_require__(11065);
Object.defineProperty(exports, "loadTransactionCreditPhase", ({ enumerable: true, get: function () { return TransactionCreditPhase_1.loadTransactionCreditPhase; } }));
Object.defineProperty(exports, "storeTransactionCreditPhase", ({ enumerable: true, get: function () { return TransactionCreditPhase_1.storeTransactionCreditPhase; } }));
var TransactionDescription_1 = __webpack_require__(13543);
Object.defineProperty(exports, "loadTransactionDescription", ({ enumerable: true, get: function () { return TransactionDescription_1.loadTransactionDescription; } }));
Object.defineProperty(exports, "storeTransactionDescription", ({ enumerable: true, get: function () { return TransactionDescription_1.storeTransactionDescription; } }));
var TransactionStoragePhase_1 = __webpack_require__(58353);
Object.defineProperty(exports, "loadTransactionStoragePhase", ({ enumerable: true, get: function () { return TransactionStoragePhase_1.loadTransactionStoragePhase; } }));
Object.defineProperty(exports, "storeTransactionsStoragePhase", ({ enumerable: true, get: function () { return TransactionStoragePhase_1.storeTransactionsStoragePhase; } }));


/***/ }),

/***/ 78981:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateMerkleProof = exports.generateMerkleProofDirect = void 0;
const Builder_1 = __webpack_require__(65871);
const readUnaryLength_1 = __webpack_require__(50421);
const exoticMerkleProof_1 = __webpack_require__(31459);
function convertToPrunedBranch(c) {
    return (0, Builder_1.beginCell)()
        .storeUint(1, 8)
        .storeUint(1, 8)
        .storeBuffer(c.hash(0))
        .storeUint(c.depth(0), 16)
        .endCell({ exotic: true });
}
function doGenerateMerkleProof(prefix, slice, n, keys) {
    // Reading label
    const originalCell = slice.asCell();
    if (keys.length == 0) {
        // no keys to prove, prune the whole subdict
        return convertToPrunedBranch(originalCell);
    }
    let lb0 = slice.loadBit() ? 1 : 0;
    let prefixLength = 0;
    let pp = prefix;
    if (lb0 === 0) {
        // Short label detected
        // Read
        prefixLength = (0, readUnaryLength_1.readUnaryLength)(slice);
        // Read prefix
        for (let i = 0; i < prefixLength; i++) {
            pp += slice.loadBit() ? '1' : '0';
        }
    }
    else {
        let lb1 = slice.loadBit() ? 1 : 0;
        if (lb1 === 0) {
            // Long label detected
            prefixLength = slice.loadUint(Math.ceil(Math.log2(n + 1)));
            for (let i = 0; i < prefixLength; i++) {
                pp += slice.loadBit() ? '1' : '0';
            }
        }
        else {
            // Same label detected
            let bit = slice.loadBit() ? '1' : '0';
            prefixLength = slice.loadUint(Math.ceil(Math.log2(n + 1)));
            for (let i = 0; i < prefixLength; i++) {
                pp += bit;
            }
        }
    }
    if (n - prefixLength === 0) {
        return originalCell;
    }
    else {
        let sl = originalCell.beginParse();
        let left = sl.loadRef();
        let right = sl.loadRef();
        // NOTE: Left and right branches are implicitly contain prefixes '0' and '1'
        if (!left.isExotic) {
            const leftKeys = keys.filter((key) => {
                return pp + '0' === key.slice(0, pp.length + 1);
            });
            left = doGenerateMerkleProof(pp + '0', left.beginParse(), n - prefixLength - 1, leftKeys);
        }
        if (!right.isExotic) {
            const rightKeys = keys.filter((key) => {
                return pp + '1' === key.slice(0, pp.length + 1);
            });
            right = doGenerateMerkleProof(pp + '1', right.beginParse(), n - prefixLength - 1, rightKeys);
        }
        return (0, Builder_1.beginCell)()
            .storeSlice(sl)
            .storeRef(left)
            .storeRef(right)
            .endCell();
    }
}
function generateMerkleProofDirect(dict, keys, keyObject) {
    keys.forEach((key) => {
        if (!dict.has(key)) {
            throw new Error(`Trying to generate merkle proof for a missing key "${key}"`);
        }
    });
    const s = (0, Builder_1.beginCell)().storeDictDirect(dict).asSlice();
    return doGenerateMerkleProof('', s, keyObject.bits, keys.map((key) => keyObject.serialize(key).toString(2).padStart(keyObject.bits, '0')));
}
exports.generateMerkleProofDirect = generateMerkleProofDirect;
function generateMerkleProof(dict, keys, keyObject) {
    return (0, exoticMerkleProof_1.convertToMerkleProof)(generateMerkleProofDirect(dict, keys, keyObject));
}
exports.generateMerkleProof = generateMerkleProof;


/***/ }),

/***/ 79499:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exoticPruned = void 0;
const BitReader_1 = __webpack_require__(53528);
const LevelMask_1 = __webpack_require__(20555);
function exoticPruned(bits, refs) {
    let reader = new BitReader_1.BitReader(bits);
    // Check type
    let type = reader.loadUint(8);
    if (type !== 1) {
        throw new Error(`Pruned branch cell must have type 1, got "${type}"`);
    }
    // Check refs
    if (refs.length !== 0) {
        throw new Error(`Pruned Branch cell can't has refs, got "${refs.length}"`);
    }
    // Resolve cell
    let mask;
    if (bits.length === 280) {
        // Special case for config proof
        // This test proof is generated in the moment of voting for a slashing
        // it seems that tools generate it incorrectly and therefore doesn't have mask in it
        // so we need to hardcode it equal to 1
        mask = new LevelMask_1.LevelMask(1);
    }
    else {
        // Check level
        mask = new LevelMask_1.LevelMask(reader.loadUint(8));
        if (mask.level < 1 || mask.level > 3) {
            throw new Error(`Pruned Branch cell level must be >= 1 and <= 3, got "${mask.level}/${mask.value}"`);
        }
        // Read pruned
        const size = 8 + 8 + (mask.apply(mask.level - 1).hashCount * (256 /* Hash */ + 16 /* Depth */));
        if (bits.length !== size) {
            throw new Error(`Pruned branch cell must have exactly ${size} bits, got "${bits.length}"`);
        }
    }
    // Read pruned
    let pruned = [];
    let hashes = [];
    let depths = [];
    for (let i = 0; i < mask.level; i++) {
        hashes.push(reader.loadBuffer(32));
    }
    for (let i = 0; i < mask.level; i++) {
        depths.push(reader.loadUint(16));
    }
    for (let i = 0; i < mask.level; i++) {
        pruned.push({
            depth: depths[i],
            hash: hashes[i]
        });
    }
    return {
        mask: mask.value,
        pruned
    };
}
exports.exoticPruned = exoticPruned;


/***/ }),

/***/ 83049:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeAccountState = exports.loadAccountState = void 0;
const StateInit_1 = __webpack_require__(22738);
function loadAccountState(cs) {
    if (cs.loadBit()) {
        return { type: 'active', state: (0, StateInit_1.loadStateInit)(cs) };
    }
    else if (cs.loadBit()) {
        return { type: 'frozen', stateHash: cs.loadUintBig(256) };
    }
    else {
        return { type: 'uninit' };
    }
}
exports.loadAccountState = loadAccountState;
function storeAccountState(src) {
    return (builder) => {
        if (src.type === 'active') {
            builder.storeBit(true);
            builder.store((0, StateInit_1.storeStateInit)(src.state));
        }
        else if (src.type === 'frozen') {
            builder.storeBit(false);
            builder.storeBit(true);
            builder.storeUint(src.stateHash, 256);
        }
        else if (src.type === 'uninit') {
            builder.storeBit(false);
            builder.storeBit(false);
        }
    };
}
exports.storeAccountState = storeAccountState;


/***/ }),

/***/ 84143:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeMessageRelaxed = exports.loadMessageRelaxed = void 0;
const Builder_1 = __webpack_require__(65871);
const CommonMessageInfoRelaxed_1 = __webpack_require__(92234);
const StateInit_1 = __webpack_require__(22738);
function loadMessageRelaxed(slice) {
    const info = (0, CommonMessageInfoRelaxed_1.loadCommonMessageInfoRelaxed)(slice);
    let init = null;
    if (slice.loadBit()) {
        if (!slice.loadBit()) {
            init = (0, StateInit_1.loadStateInit)(slice);
        }
        else {
            init = (0, StateInit_1.loadStateInit)(slice.loadRef().beginParse());
        }
    }
    const body = slice.loadBit() ? slice.loadRef() : slice.asCell();
    return {
        info,
        init,
        body
    };
}
exports.loadMessageRelaxed = loadMessageRelaxed;
function storeMessageRelaxed(message, opts) {
    return (builder) => {
        // Store CommonMsgInfo
        builder.store((0, CommonMessageInfoRelaxed_1.storeCommonMessageInfoRelaxed)(message.info));
        // Store init
        if (message.init) {
            builder.storeBit(true);
            let initCell = (0, Builder_1.beginCell)().store((0, StateInit_1.storeStateInit)(message.init));
            // Check if ref is needed
            let needRef = false;
            if (opts && opts.forceRef) {
                needRef = true;
            }
            else {
                if (builder.availableBits - 2 /* At least on byte for ref flag */ >= initCell.bits) {
                    needRef = false;
                }
                else {
                    needRef = true;
                }
            }
            // Store ref
            if (needRef) {
                builder.storeBit(true);
                builder.storeRef(initCell);
            }
            else {
                builder.storeBit(false);
                builder.storeBuilder(initCell);
            }
        }
        else {
            builder.storeBit(false);
        }
        // Store body
        let needRef = false;
        if (opts && opts.forceRef) {
            needRef = true;
        }
        else {
            /*
             1. If at least one bit for ref flag
             2. If enough space for refs
             3. If not exotic
            */
            if (builder.availableBits - 1 >= message.body.bits.length &&
                builder.refs + message.body.refs.length <= 4 &&
                !message.body.isExotic) {
                needRef = false;
            }
            else {
                needRef = true;
            }
        }
        if (needRef) {
            builder.storeBit(true);
            builder.storeRef(message.body);
        }
        else {
            builder.storeBit(false);
            builder.storeBuilder(message.body.asBuilder());
        }
    };
}
exports.storeMessageRelaxed = storeMessageRelaxed;


/***/ }),

/***/ 84458:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeDepthBalanceInfo = exports.loadDepthBalanceInfo = void 0;
const CurrencyCollection_1 = __webpack_require__(10574);
function loadDepthBalanceInfo(slice) {
    let splitDepth = slice.loadUint(5);
    return {
        splitDepth,
        balance: (0, CurrencyCollection_1.loadCurrencyCollection)(slice)
    };
}
exports.loadDepthBalanceInfo = loadDepthBalanceInfo;
function storeDepthBalanceInfo(src) {
    return (builder) => {
        builder.storeUint(src.splitDepth, 5);
        builder.store((0, CurrencyCollection_1.storeCurrencyCollection)(src.balance));
    };
}
exports.storeDepthBalanceInfo = storeDepthBalanceInfo;


/***/ }),

/***/ 84742:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.openContract = void 0;
const Address_1 = __webpack_require__(3512);
const Cell_1 = __webpack_require__(66902);
function openContract(src, factory) {
    // Resolve parameters
    let address;
    let init = null;
    if (!Address_1.Address.isAddress(src.address)) {
        throw Error('Invalid address');
    }
    address = src.address;
    if (src.init) {
        if (!(src.init.code instanceof Cell_1.Cell)) {
            throw Error('Invalid init.code');
        }
        if (!(src.init.data instanceof Cell_1.Cell)) {
            throw Error('Invalid init.data');
        }
        init = src.init;
    }
    // Create executor
    let executor = factory({ address, init });
    // Create proxy
    return new Proxy(src, {
        get(target, prop) {
            const value = target[prop];
            if (typeof prop === 'string' && (prop.startsWith('get') || prop.startsWith('send') || prop.startsWith('is'))) {
                if (typeof value === 'function') {
                    return (...args) => value.apply(target, [executor, ...args]);
                }
            }
            return value;
        }
    });
}
exports.openContract = openContract;


/***/ }),

/***/ 85006:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeStorageInfo = exports.loadStorageInfo = void 0;
const StorageUsed_1 = __webpack_require__(92577);
function loadStorageInfo(slice) {
    return {
        used: (0, StorageUsed_1.loadStorageUsed)(slice),
        lastPaid: slice.loadUint(32),
        duePayment: slice.loadMaybeCoins()
    };
}
exports.loadStorageInfo = loadStorageInfo;
function storeStorageInfo(src) {
    return (builder) => {
        builder.store((0, StorageUsed_1.storeStorageUsed)(src.used));
        builder.storeUint(src.lastPaid, 32);
        builder.storeMaybeCoins(src.duePayment);
    };
}
exports.storeStorageInfo = storeStorageInfo;


/***/ }),

/***/ 85787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.loadShardStateUnsplit = void 0;
const MasterchainStateExtra_1 = __webpack_require__(29039);
const ShardAccounts_1 = __webpack_require__(28993);
const ShardIdent_1 = __webpack_require__(32423);
function loadShardStateUnsplit(cs) {
    if (cs.loadUint(32) !== 0x9023afe2) {
        throw Error('Invalid data');
    }
    let globalId = cs.loadInt(32);
    let shardId = (0, ShardIdent_1.loadShardIdent)(cs);
    let seqno = cs.loadUint(32);
    let vertSeqNo = cs.loadUint(32);
    let genUtime = cs.loadUint(32);
    let genLt = cs.loadUintBig(64);
    let minRefMcSeqno = cs.loadUint(32);
    // Skip OutMsgQueueInfo: usually exotic
    cs.loadRef();
    let beforeSplit = cs.loadBit();
    // Parse accounts
    let shardAccountsRef = cs.loadRef();
    let accounts = undefined;
    if (!shardAccountsRef.isExotic) {
        accounts = (0, ShardAccounts_1.loadShardAccounts)(shardAccountsRef.beginParse());
    }
    // Skip (not used by apps)
    cs.loadRef();
    // Parse extras
    let mcStateExtra = cs.loadBit();
    let extras = null;
    if (mcStateExtra) {
        let cell = cs.loadRef();
        if (!cell.isExotic) {
            extras = (0, MasterchainStateExtra_1.loadMasterchainStateExtra)(cell.beginParse());
        }
    }
    ;
    return {
        globalId,
        shardId,
        seqno,
        vertSeqNo,
        genUtime,
        genLt,
        minRefMcSeqno,
        beforeSplit,
        accounts,
        extras
    };
}
exports.loadShardStateUnsplit = loadShardStateUnsplit;


/***/ }),

/***/ 86161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeAccountStorage = exports.loadAccountStorage = void 0;
const AccountState_1 = __webpack_require__(83049);
const CurrencyCollection_1 = __webpack_require__(10574);
function loadAccountStorage(slice) {
    return {
        lastTransLt: slice.loadUintBig(64),
        balance: (0, CurrencyCollection_1.loadCurrencyCollection)(slice),
        state: (0, AccountState_1.loadAccountState)(slice)
    };
}
exports.loadAccountStorage = loadAccountStorage;
function storeAccountStorage(src) {
    return (builder) => {
        builder.storeUint(src.lastTransLt, 64);
        builder.store((0, CurrencyCollection_1.storeCurrencyCollection)(src.balance));
        builder.store((0, AccountState_1.storeAccountState)(src.state));
    };
}
exports.storeAccountStorage = storeAccountStorage;


/***/ }),

/***/ 87676:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeAccountStatus = exports.loadAccountStatus = void 0;
/**
 * Load account state from slice
 * @param slice
 * @returns AccountState
 */
function loadAccountStatus(slice) {
    const status = slice.loadUint(2);
    if (status === 0x00) {
        return 'uninitialized';
    }
    if (status === 0x01) {
        return 'frozen';
    }
    if (status === 0x02) {
        return 'active';
    }
    if (status === 0x03) {
        return 'non-existing';
    }
    throw Error('Invalid data');
}
exports.loadAccountStatus = loadAccountStatus;
/**
 * Store account state to builder
 * @param src account state
 * @param builder buidler
 */
function storeAccountStatus(src) {
    return (builder) => {
        if (src === 'uninitialized') {
            builder.storeUint(0x00, 2);
        }
        else if (src === 'frozen') {
            builder.storeUint(0x01, 2);
        }
        else if (src === 'active') {
            builder.storeUint(0x02, 2);
        }
        else if (src === 'non-existing') {
            builder.storeUint(0x03, 2);
        }
        else {
            throw Error('Invalid data');
        }
        return builder;
    };
}
exports.storeAccountStatus = storeAccountStatus;


/***/ }),

/***/ 88986:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.contractAddress = void 0;
const Builder_1 = __webpack_require__(65871);
const StateInit_1 = __webpack_require__(22738);
const Address_1 = __webpack_require__(3512);
function contractAddress(workchain, init) {
    let hash = (0, Builder_1.beginCell)()
        .store((0, StateInit_1.storeStateInit)(init))
        .endCell()
        .hash();
    return new Address_1.Address(workchain, hash);
}
exports.contractAddress = contractAddress;


/***/ }),

/***/ 90109:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.safeSignVerify = exports.safeSign = void 0;
const crypto_1 = __webpack_require__(75269);
const MIN_SEED_LENGTH = 8;
const MAX_SEED_LENGTH = 64;
function createSafeSignHash(cell, seed) {
    let seedData = Buffer.from(seed);
    if (seedData.length > MAX_SEED_LENGTH) {
        throw Error('Seed can\t be longer than 64 bytes');
    }
    if (seedData.length < MIN_SEED_LENGTH) {
        throw Error('Seed must be at least 8 bytes');
    }
    return (0, crypto_1.sha256_sync)(Buffer.concat([Buffer.from([0xff, 0xff]), seedData, cell.hash()]));
}
function safeSign(cell, secretKey, seed = 'ton-safe-sign-magic') {
    return (0, crypto_1.sign)(createSafeSignHash(cell, seed), secretKey);
}
exports.safeSign = safeSign;
function safeSignVerify(cell, signature, publicKey, seed = 'ton-safe-sign-magic') {
    return (0, crypto_1.signVerify)(createSafeSignHash(cell, seed), signature, publicKey);
}
exports.safeSignVerify = safeSignVerify;


/***/ }),

/***/ 91408:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exoticMerkleUpdate = void 0;
const BitReader_1 = __webpack_require__(53528);
function exoticMerkleUpdate(bits, refs) {
    const reader = new BitReader_1.BitReader(bits);
    // type + hash + hash + depth + depth
    const size = 8 + (2 * (256 + 16));
    if (bits.length !== size) {
        throw new Error(`Merkle Update cell must have exactly (8 + (2 * (256 + 16))) bits, got "${bits.length}"`);
    }
    if (refs.length !== 2) {
        throw new Error(`Merkle Update cell must have exactly 2 refs, got "${refs.length}"`);
    }
    let type = reader.loadUint(8);
    if (type !== 4) {
        throw new Error(`Merkle Update cell type must be exactly 4, got "${type}"`);
    }
    const proofHash1 = reader.loadBuffer(32);
    const proofHash2 = reader.loadBuffer(32);
    const proofDepth1 = reader.loadUint(16);
    const proofDepth2 = reader.loadUint(16);
    if (proofDepth1 !== refs[0].depth(0)) {
        throw new Error(`Merkle Update cell ref depth must be exactly "${proofDepth1}", got "${refs[0].depth(0)}"`);
    }
    if (!proofHash1.equals(refs[0].hash(0))) {
        throw new Error(`Merkle Update cell ref hash must be exactly "${proofHash1.toString('hex')}", got "${refs[0].hash(0).toString('hex')}"`);
    }
    if (proofDepth2 !== refs[1].depth(0)) {
        throw new Error(`Merkle Update cell ref depth must be exactly "${proofDepth2}", got "${refs[1].depth(0)}"`);
    }
    if (!proofHash2.equals(refs[1].hash(0))) {
        throw new Error(`Merkle Update cell ref hash must be exactly "${proofHash2.toString('hex')}", got "${refs[1].hash(0).toString('hex')}"`);
    }
    return {
        proofDepth1,
        proofDepth2,
        proofHash1,
        proofHash2
    };
}
exports.exoticMerkleUpdate = exoticMerkleUpdate;


/***/ }),

/***/ 92234:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeCommonMessageInfoRelaxed = exports.loadCommonMessageInfoRelaxed = void 0;
const CurrencyCollection_1 = __webpack_require__(10574);
function loadCommonMessageInfoRelaxed(slice) {
    // Internal message
    if (!slice.loadBit()) {
        const ihrDisabled = slice.loadBit();
        const bounce = slice.loadBit();
        const bounced = slice.loadBit();
        const src = slice.loadMaybeAddress();
        const dest = slice.loadAddress();
        const value = (0, CurrencyCollection_1.loadCurrencyCollection)(slice);
        const ihrFee = slice.loadCoins();
        const forwardFee = slice.loadCoins();
        const createdLt = slice.loadUintBig(64);
        const createdAt = slice.loadUint(32);
        return {
            type: 'internal',
            ihrDisabled,
            bounce,
            bounced,
            src,
            dest,
            value,
            ihrFee,
            forwardFee,
            createdLt,
            createdAt,
        };
    }
    // External In mesage
    if (!slice.loadBit()) {
        throw Error('External In message is not possible for CommonMessageInfoRelaxed');
    }
    // External Out message
    const src = slice.loadMaybeAddress();
    const dest = slice.loadMaybeExternalAddress();
    const createdLt = slice.loadUintBig(64);
    const createdAt = slice.loadUint(32);
    return {
        type: 'external-out',
        src,
        dest,
        createdLt,
        createdAt,
    };
}
exports.loadCommonMessageInfoRelaxed = loadCommonMessageInfoRelaxed;
function storeCommonMessageInfoRelaxed(source) {
    return (builder) => {
        if (source.type === 'internal') {
            builder.storeBit(0);
            builder.storeBit(source.ihrDisabled);
            builder.storeBit(source.bounce);
            builder.storeBit(source.bounced);
            builder.storeAddress(source.src);
            builder.storeAddress(source.dest);
            builder.store((0, CurrencyCollection_1.storeCurrencyCollection)(source.value));
            builder.storeCoins(source.ihrFee);
            builder.storeCoins(source.forwardFee);
            builder.storeUint(source.createdLt, 64);
            builder.storeUint(source.createdAt, 32);
        }
        else if (source.type === 'external-out') {
            builder.storeBit(1);
            builder.storeBit(1);
            builder.storeAddress(source.src);
            builder.storeAddress(source.dest);
            builder.storeUint(source.createdLt, 64);
            builder.storeUint(source.createdAt, 32);
        }
        else {
            throw new Error('Unknown CommonMessageInfo type');
        }
    };
}
exports.storeCommonMessageInfoRelaxed = storeCommonMessageInfoRelaxed;


/***/ }),

/***/ 92577:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeStorageUsed = exports.loadStorageUsed = void 0;
function loadStorageUsed(cs) {
    return {
        cells: cs.loadVarUintBig(3),
        bits: cs.loadVarUintBig(3),
        publicCells: cs.loadVarUintBig(3),
    };
}
exports.loadStorageUsed = loadStorageUsed;
function storeStorageUsed(src) {
    return (builder) => {
        builder.storeVarUint(src.cells, 3);
        builder.storeVarUint(src.bits, 3);
        builder.storeVarUint(src.publicCells, 3);
    };
}
exports.storeStorageUsed = storeStorageUsed;


/***/ }),

/***/ 92960:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.crc16 = void 0;
function crc16(data) {
    const poly = 0x1021;
    let reg = 0;
    const message = Buffer.alloc(data.length + 2);
    message.set(data);
    for (let byte of message) {
        let mask = 0x80;
        while (mask > 0) {
            reg <<= 1;
            if (byte & mask) {
                reg += 1;
            }
            mask >>= 1;
            if (reg > 0xffff) {
                reg &= 0xffff;
                reg ^= poly;
            }
        }
    }
    return Buffer.from([Math.floor(reg / 256), reg % 256]);
}
exports.crc16 = crc16;


/***/ }),

/***/ 93471:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeComputeSkipReason = exports.loadComputeSkipReason = void 0;
function loadComputeSkipReason(slice) {
    let reason = slice.loadUint(2);
    if (reason === 0x00) {
        return 'no-state';
    }
    else if (reason === 0x01) {
        return 'bad-state';
    }
    else if (reason === 0x02) {
        return 'no-gas';
    }
    throw new Error(`Unknown ComputeSkipReason: ${reason}`);
}
exports.loadComputeSkipReason = loadComputeSkipReason;
function storeComputeSkipReason(src) {
    return (builder) => {
        if (src === 'no-state') {
            builder.storeUint(0x00, 2);
        }
        else if (src === 'bad-state') {
            builder.storeUint(0x01, 2);
        }
        else if (src === 'no-gas') {
            builder.storeUint(0x02, 2);
        }
        else {
            throw new Error(`Unknown ComputeSkipReason: ${src}`);
        }
    };
}
exports.storeComputeSkipReason = storeComputeSkipReason;


/***/ }),

/***/ 96305:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.storeTransaction = exports.loadTransaction = void 0;
const Builder_1 = __webpack_require__(65871);
const Dictionary_1 = __webpack_require__(97590);
const AccountStatus_1 = __webpack_require__(87676);
const CurrencyCollection_1 = __webpack_require__(10574);
const HashUpdate_1 = __webpack_require__(14660);
const Message_1 = __webpack_require__(48178);
const TransactionDescription_1 = __webpack_require__(13543);
function loadTransaction(slice) {
    let raw = slice.asCell();
    if (slice.loadUint(4) !== 0x07) {
        throw Error('Invalid data');
    }
    let address = slice.loadUintBig(256);
    let lt = slice.loadUintBig(64);
    let prevTransactionHash = slice.loadUintBig(256);
    let prevTransactionLt = slice.loadUintBig(64);
    let now = slice.loadUint(32);
    let outMessagesCount = slice.loadUint(15);
    let oldStatus = (0, AccountStatus_1.loadAccountStatus)(slice);
    let endStatus = (0, AccountStatus_1.loadAccountStatus)(slice);
    let msgRef = slice.loadRef();
    let msgSlice = msgRef.beginParse();
    let inMessage = msgSlice.loadBit() ? (0, Message_1.loadMessage)(msgSlice.loadRef().beginParse()) : undefined;
    let outMessages = msgSlice.loadDict(Dictionary_1.Dictionary.Keys.Uint(15), Message_1.MessageValue);
    msgSlice.endParse();
    let totalFees = (0, CurrencyCollection_1.loadCurrencyCollection)(slice);
    let stateUpdate = (0, HashUpdate_1.loadHashUpdate)(slice.loadRef().beginParse());
    let description = (0, TransactionDescription_1.loadTransactionDescription)(slice.loadRef().beginParse());
    return {
        address,
        lt,
        prevTransactionHash,
        prevTransactionLt,
        now,
        outMessagesCount,
        oldStatus,
        endStatus,
        inMessage,
        outMessages,
        totalFees,
        stateUpdate,
        description,
        raw,
        hash: () => raw.hash(),
    };
}
exports.loadTransaction = loadTransaction;
function storeTransaction(src) {
    return (builder) => {
        builder.storeUint(0x07, 4);
        builder.storeUint(src.address, 256);
        builder.storeUint(src.lt, 64);
        builder.storeUint(src.prevTransactionHash, 256);
        builder.storeUint(src.prevTransactionLt, 64);
        builder.storeUint(src.now, 32);
        builder.storeUint(src.outMessagesCount, 15);
        builder.store((0, AccountStatus_1.storeAccountStatus)(src.oldStatus));
        builder.store((0, AccountStatus_1.storeAccountStatus)(src.endStatus));
        let msgBuilder = (0, Builder_1.beginCell)();
        if (src.inMessage) {
            msgBuilder.storeBit(true);
            msgBuilder.storeRef((0, Builder_1.beginCell)().store((0, Message_1.storeMessage)(src.inMessage)));
        }
        else {
            msgBuilder.storeBit(false);
        }
        msgBuilder.storeDict(src.outMessages);
        builder.storeRef(msgBuilder);
        builder.store((0, CurrencyCollection_1.storeCurrencyCollection)(src.totalFees));
        builder.storeRef((0, Builder_1.beginCell)().store((0, HashUpdate_1.storeHashUpdate)(src.stateUpdate)));
        builder.storeRef((0, Builder_1.beginCell)().store((0, TransactionDescription_1.storeTransactionDescription)(src.description)));
    };
}
exports.storeTransaction = storeTransaction;


/***/ }),

/***/ 97070:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.fromNano = exports.toNano = void 0;
function toNano(src) {
    if (typeof src === 'bigint') {
        return src * 1000000000n;
    }
    else {
        if (typeof src === 'number') {
            if (!Number.isFinite(src)) {
                throw Error('Invalid number');
            }
            if (Math.log10(src) <= 6) {
                src = src.toLocaleString('en', { minimumFractionDigits: 9, useGrouping: false });
            }
            else if (src - Math.trunc(src) === 0) {
                src = src.toLocaleString('en', { maximumFractionDigits: 0, useGrouping: false });
            }
            else {
                throw Error('Not enough precision for a number value. Use string value instead');
            }
        }
        // Check sign
        let neg = false;
        while (src.startsWith('-')) {
            neg = !neg;
            src = src.slice(1);
        }
        // Split string
        if (src === '.') {
            throw Error('Invalid number');
        }
        let parts = src.split('.');
        if (parts.length > 2) {
            throw Error('Invalid number');
        }
        // Prepare parts
        let whole = parts[0];
        let frac = parts[1];
        if (!whole) {
            whole = '0';
        }
        if (!frac) {
            frac = '0';
        }
        if (frac.length > 9) {
            throw Error('Invalid number');
        }
        while (frac.length < 9) {
            frac += '0';
        }
        // Convert
        let r = BigInt(whole) * 1000000000n + BigInt(frac);
        if (neg) {
            r = -r;
        }
        return r;
    }
}
exports.toNano = toNano;
function fromNano(src) {
    let v = BigInt(src);
    let neg = false;
    if (v < 0) {
        neg = true;
        v = -v;
    }
    // Convert fraction
    let frac = v % 1000000000n;
    let facStr = frac.toString();
    while (facStr.length < 9) {
        facStr = '0' + facStr;
    }
    facStr = facStr.match(/^([0-9]*[1-9]|0)(0*)/)[1];
    // Convert whole
    let whole = v / 1000000000n;
    let wholeStr = whole.toString();
    // Value
    let value = `${wholeStr}${facStr === '0' ? '' : `.${facStr}`}`;
    if (neg) {
        value = '-' + value;
    }
    return value;
}
exports.fromNano = fromNano;


/***/ }),

/***/ 99967:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/* provided dependency */ var Buffer = __webpack_require__(48287)["Buffer"];

/**
 * Copyright (c) Whales Corp.
 * All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hmac_sha512 = void 0;
async function hmac_sha512(key, data) {
    let keyBuffer = typeof key === 'string' ? Buffer.from(key, 'utf-8') : key;
    let dataBuffer = typeof data === 'string' ? Buffer.from(data, 'utf-8') : data;
    const hmacAlgo = { name: "HMAC", hash: "SHA-512" };
    const hmacKey = await window.crypto.subtle.importKey("raw", keyBuffer, hmacAlgo, false, ["sign"]);
    return Buffer.from(await crypto.subtle.sign(hmacAlgo, hmacKey, dataBuffer));
}
exports.hmac_sha512 = hmac_sha512;


/***/ })

}]);
//# sourceMappingURL=800.09881729ade743d90448.js.map