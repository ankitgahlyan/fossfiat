import { Sender } from '@ton/core';
export declare function useTonConnect(): {
    sender: Sender;
    connected: boolean;
    wallet: import("@tonconnect/ui-react").Wallet | (import("@tonconnect/ui-react").Wallet & import("@tonconnect/ui-react").WalletInfoWithOpenMethod) | null;
    address: string;
};
