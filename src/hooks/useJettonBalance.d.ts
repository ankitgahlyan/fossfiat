export declare function useJettonBalance(): {
    balance: bigint | null;
    loading: boolean;
    error: string | null;
    refetch: () => Promise<void>;
};
