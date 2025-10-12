import { Address, Cell, Builder } from "@ton/core";
export declare const randomAddress: (wc?: number) => Address;
export declare const differentAddress: (old: Address) => Address;
export declare const getNetworkFromEnv: () => "testnet" | "mainnet";
type HttpJettonLink = "tonviewer" | "tonapi" | "toncenter" | "tonscan";
export declare const getJettonHttpLink: (network: "mainnet" | "testnet", minterAddress: Address, linkType: HttpJettonLink) => string;
export declare const getRandomInt: (min: number, max: number) => number;
export declare const getRandomTon: (min: number, max: number) => bigint;
export type InternalTransfer = {
    from: Address | null;
    response: Address | null;
    amount: bigint;
    forwardAmount: bigint;
    payload: Cell | null;
};
export type JettonTransfer = {
    to: Address;
    response_address: Address | null;
    amount: bigint;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Cell | null;
};
export declare const parseTransfer: (body: Cell) => {
    amount: bigint;
    to: Address;
    response_address: Address | import("@ton/core").ExternalAddress | null;
    custom_payload: Cell | null;
    forward_amount: bigint;
    forward_payload: Cell | null;
};
export declare const parseInternalTransfer: (body: Cell) => {
    amount: bigint;
    from: Address | import("@ton/core").ExternalAddress | null;
    response: Address | import("@ton/core").ExternalAddress | null;
    forwardAmount: bigint;
    payload: Cell | null;
};
export declare const parseTransferNotification: (body: Cell) => {
    amount: bigint;
    from: Address | import("@ton/core").ExternalAddress | null;
    payload: Cell | null;
};
export declare const parseBurnNotification: (body: Cell) => {
    amount: bigint;
    from: Address;
    response_address: Address | import("@ton/core").ExternalAddress | null;
};
export declare const storeBigPayload: (curBuilder: Builder, maxDepth?: number) => Builder;
export {};
