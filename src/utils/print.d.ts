import { Address, Cell } from "@ton/ton";
export declare function printSeparator(): void;
export declare function printHeader(name: string): void;
export declare function printAddress(address: Address, testnet?: boolean): void;
export declare function printDeploy(init: {
    code: Cell;
    data: Cell;
}, value: bigint, command: Cell | string, testnet?: boolean): void;
