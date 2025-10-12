import { TonClient } from '@ton/ton';
export declare function useRootContract(): {
    client: TonClient;
    jettonWalletAddress: string | null;
    minterAddress: string;
    connected: boolean;
};
