import { JettonMinterSharded } from "../output/Root_JettonMinterSharded";
import { Address, Cell, ContractProvider, Sender, Slice } from "@ton/core";
export declare function endParse(slice: Slice): void;
export declare class ExtendedShardedJettonMinter extends JettonMinterSharded {
    constructor(address: Address, init?: {
        code: Cell;
        data: Cell;
    });
    static fromInit(totalSupply: bigint, owner: Address, jettonContent: Cell): Promise<ExtendedShardedJettonMinter>;
    static upgradeMessage(new_code: Cell, newWalletCode: Cell, new_data: Cell, query_id?: bigint | number): Cell;
    static parseUpgrade(slice: Slice): {
        queryId: number;
        newData: Cell;
        newCode: Cell;
        newWalletCode: Cell;
    };
    sendUpgrade(provider: ContractProvider, via: Sender, new_code: Cell, newWalletCode: Cell, new_data: Cell, value?: bigint, query_id?: bigint | number): Promise<void>;
    getTotalSupply(provider: ContractProvider): Promise<bigint>;
    getWalletAddress(provider: ContractProvider, owner: Address): Promise<Address>;
    getAdminAddress(provider: ContractProvider): Promise<Address>;
    getContent(provider: ContractProvider): Promise<Cell>;
    /**
     * Sends a mint message to the Jetton Minter contract to mint new Jettons for a specified recipient.
     *
     * @param provider - The contract provider used to interact with the blockchain.
     * @param via - The sender object representing the wallet or account initiating the mint operation.
     * @param to - The recipient address to which the newly minted Jettons will be sent.
     * @param jettonAmount - The amount of Jettons to mint.
     * @param forwardTonAmount - The amount of TONs to forward to the recipient along with the Jettons.
     * @param totalTonAmount - The total amount of TONs to attach to the mint operation for fees and forwarding.
     *
     * @throws {Error} If the `totalTonAmount` is less than or equal to the `forwardTonAmount`.
     *
     * @returns A promise that resolves when the mint message has been sent.
     *
     * @example
     * await jettonMinterSharded.sendMint(
     *     provider,
     *     sender,
     *     recipientAddress,
     *     toNano("1000"), // Jetton amount
     *     toNano("0.05"), // Forward TON amount
     *     toNano("0.1"),  // Total TON amount
     * );
     */
    sendMint(provider: ContractProvider, via: Sender, to: Address, jettonAmount: bigint, forwardTonAmount: bigint, totalTonAmount: bigint): Promise<void>;
    sendChangeAdmin(provider: ContractProvider, via: Sender, newOwner: Address): Promise<void>;
    sendChangeContent(provider: ContractProvider, via: Sender, content: Cell): Promise<void>;
    sendDiscovery(provider: ContractProvider, via: Sender, address: Address, includeAddress: boolean, value?: bigint): Promise<void>;
    sendClaimTon(provider: ContractProvider, via: Sender, address: Address, value?: bigint): Promise<void>;
    loadMintMessage(mintAmount: bigint, receiver: Address, sender: Address, responseDestination: Address, forwardTonAmount: bigint, forwardPayload: Cell | null): Cell;
    loadGasForBurn(): bigint;
    loadGasForTransfer(): bigint;
    loadMinTonsForStorage(): bigint;
}
