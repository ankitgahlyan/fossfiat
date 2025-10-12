import { Cell, Address } from "@ton/core";
import { TonClient } from "@ton/ton";
import { JettonMinterSharded } from "../output/Root_JettonMinterSharded";
import { JettonWalletSharded } from "../output/Root_JettonWalletSharded";
export declare function buildOnchainMetadata(data: {
    name: string;
    description: string;
    image: string;
}): Cell;
export declare function makeSnakeCell(data: Buffer): Cell;
export type Metadata = {
    name: string;
    symbol: string;
    description: string;
    image: string;
};
export type JettonParams = {
    address: Address;
    metadata: Metadata;
    totalSupply: bigint;
    owner: Address;
    jettonWalletCode: Cell;
};
export declare const displayContentCell: (content: Cell) => Promise<void>;
export declare function validateJettonParams(expectedJettonParams: JettonParams, jettonAddress: Address, client: TonClient): Promise<void>;
export declare function buildJettonMinterFromEnv(deployerAddress: Address): Promise<JettonMinterSharded>;
export declare function buildJettonWalletFromAddress(deployerAddress: Address): Promise<JettonWalletSharded>;
export declare function buildJettonWalletFromEnv(deployerAddress: Address, minterAddress: Address): Promise<JettonWalletSharded>;
