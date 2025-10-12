import { z } from "zod";
import { Address } from "@ton/ton";
declare const tokenMetadataSchema: any;
declare const tonCenterResponseSchema: any;
type TonCenterResponse = z.infer<typeof tonCenterResponseSchema>;
export type TonCenterJettonMetadata = z.infer<typeof tokenMetadataSchema>;
export declare const callGetMetadataFromTonCenter: (address: Address) => Promise<TonCenterResponse>;
export {};
