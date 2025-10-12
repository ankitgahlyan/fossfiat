import { z } from "zod";
import { Address } from "@ton/core";
declare const tonapiResponseSchema: any;
export type TonApiResponse = z.infer<typeof tonapiResponseSchema>;
export declare const callGetMetadataFromTonApi: (address: Address) => Promise<TonApiResponse>;
export {};
