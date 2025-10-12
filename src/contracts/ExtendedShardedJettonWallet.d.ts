import { JettonWalletSharded } from "../output/Root_JettonWalletSharded";
import { Address, Cell, ContractProvider, Sender } from "@ton/core";
export declare class ExtendedShardedJettonWallet extends JettonWalletSharded {
    constructor(address: Address, init?: {
        code: Cell;
        data: Cell;
    });
    static fromInit(owner: Address, minter: Address, balance: bigint): Promise<ExtendedShardedJettonWallet>;
    getJettonBalance: (provider: ContractProvider) => Promise<bigint>;
    /**
     * Sends a Jetton transfer message from this wallet to a specified recipient.
     *
     * @param provider - The contract provider used to interact with the blockchain. Automatically passed by the test environment proxy
     * @param via - The sender object representing the wallet or account initiating the transfer.
     * @param value - The amount of TONs to attach to the transfer for fees and forwarding.
     * @param jettonAmount - The amount of Jettons to transfer.
     * @param to - The recipient address to which the Jettons will be sent.
     * @param responseAddress - The address to receive the response from the transfer operation (Jetton excesses)
     * @param customPayload - An optional custom payload to include in the transfer message.
     * @param forwardTonAmount - The amount of TONs to forward to the recipient along with the Jettons.
     * @param forwardPayload - An optional payload to include in the forwarded message to the recipient.
     *
     * @returns A promise that resolves when the transfer message has been sent, returns SendResult.
     *
     * @example
     * await jettonWalletSharded.sendTransfer(
     *     provider,
     *     sender,
     *     toNano("0.05"),
     *     toNano("100"),
     *     recipientAddress,
     *     responseAddress,
     *     null,
     *     toNano("0.01"),
     *     null
     * );
     */
    sendTransfer: (provider: ContractProvider, via: Sender, value: bigint, jettonAmount: bigint, to: Address, responseAddress: Address, customPayload: Cell | null, forwardTonAmount: bigint, forwardPayload: Cell | null) => Promise<void>;
    sendBurn: (provider: ContractProvider, via: Sender, value: bigint, jettonAmount: bigint, responseAddress: Address | null, customPayload: Cell | null) => Promise<void>;
    sendProvideWalletBalance: (provider: ContractProvider, via: Sender, value: bigint, receiver: Address, includeInfo: boolean) => Promise<void>;
    sendClaimTon(provider: ContractProvider, via: Sender, address: Address, value?: bigint): Promise<void>;
    loadWalletStateInitCells(): bigint;
    loadWalletStateInitBits(): bigint;
}
