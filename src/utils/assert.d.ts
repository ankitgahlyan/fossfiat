import { Address, ContractABI } from "@ton/core";
import { BlockchainTransaction } from "@ton/sandbox";
import { FlatTransaction } from "@ton/test-utils";
type FlatPrintLevels = "info" | "extended" | "raw";
type FlatPrintParameters = {
    abi?: ContractABI;
    level?: FlatPrintLevels;
};
export declare function printTransaction(tx: BlockchainTransaction, args?: FlatPrintParameters): void;
export declare function assertTransaction(transactions: BlockchainTransaction[], criteria: Partial<FlatTransaction>): void;
export declare function assertTransactionChainWasSuccessful(transactions: BlockchainTransaction[], chainLengthPredicate: (len: number) => boolean): void;
export declare function assertWasDeployed(transactions: BlockchainTransaction[], args: {
    deployerAddress?: Address;
    deployedContractAddress?: Address;
}): void;
export {};
