export declare function useWalletContract(): {
    value: object | null | undefined;
    address: string | undefined;
    sendTransfer: () => Promise<void> | undefined;
};
