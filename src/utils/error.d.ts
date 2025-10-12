import { ABIError } from "@ton/core";
import { Maybe } from "@ton/core/dist/utils/maybe";
export declare function findErrorCodeByMessage(errors: Maybe<{
    [key: number]: ABIError;
}> | undefined, errorMessage: string): number | null;
