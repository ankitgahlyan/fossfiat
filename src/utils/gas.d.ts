import { Address, Cell } from "@ton/core";
import type { Blockchain, BlockchainTransaction, SendMessageResult } from "@ton/sandbox";
type GasConsumptionChain = {
    type: "chain";
    chainLength?: number;
};
type GasConsumptionSingle = {
    type: "single";
};
type GasConsumption = GasConsumptionChain | GasConsumptionSingle;
export declare function getUsedGasInternal(sendResult: SendMessageResult, consumptionType: GasConsumption): number;
export declare function getComputeGasForTx(tx: BlockchainTransaction): number;
type BenchmarkResult = {
    label: string;
    pr: string | undefined;
    gas: Record<string, number>;
    summary: number;
};
export type RawBenchmarkResult = {
    results: {
        label: string;
        pr: string | null;
        gas: Record<string, string | undefined>;
        summary: string;
    }[];
};
export declare function generateResults(benchmarkResults: RawBenchmarkResult): BenchmarkResult[];
export type RawCodeSizeResult = {
    results: {
        label: string;
        pr: string | null;
        size: Record<string, string>;
    }[];
};
type CodeSizeResult = {
    label: string;
    pr: string | undefined;
    size: Record<string, number>;
};
export declare function generateCodeSizeResults(benchmarkResults: RawCodeSizeResult): CodeSizeResult[];
export declare function getStateSizeForAccount(blockchain: Blockchain, address: Address): Promise<{
    cells: number;
    bits: number;
}>;
export declare function getSizeOfState(arg: {
    code: Cell;
    data: Cell;
}): {
    cells: number;
    bits: number;
};
type BenchmarkTableArgs = {
    implementationName: string;
    printMode: "first-last" | "full" | "last-diff";
};
export declare function printBenchmarkTable(results: BenchmarkResult[], codeSizeResults: CodeSizeResult[] | undefined, args: BenchmarkTableArgs): void;
export {};
