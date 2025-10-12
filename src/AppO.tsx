// import { useTonConnectUI, useTonAddress } from '@tonconnect/ui-react';
// import { beginCell, toNano, Address } from '@ton/ton'
// // transfer#0f8a7ea5 query_id:uint64 amount:(VarUInteger 16) destination:MsgAddress
// // response_destination:MsgAddress custom_payload:(Maybe ^Cell)
// // forward_ton_amount:(VarUInteger 16) forward_payload:(Either Cell ^Cell)
// // = InternalMsgBody;

// const destinationAddress = Address.parse("");

// const forwardPayload = beginCell()
//     .storeUint(0, 32)                   // 0 opcode means we have a comment
//     .storeStringTail('Hello, TON!')
//     .endCell();

// const body = beginCell()
//     .storeUint(0xf8a7ea5, 32)           // opcode for jetton transfer
//     .storeUint(0, 64)                   // query id
//     .storeCoins(toNano("5"))            // Jetton amount for transfer (decimals = 6 - USDT, 9 - default). Function `toNano` uses 9 decimals (remember it)
//     .storeAddress(destinationAddress)   // TON wallet destination address
//     .storeAddress(destinationAddress)   // response excess destination
//     .storeBit(0)                        // no custom payload
//     .storeCoins(toNano("0.02"))         // forward amount (if >0, will send notification message)
//     .storeBit(1)                        // we store forwardPayload as a reference
//     .storeRef(forwardPayload)
//     .endCell();


// const jettonWalletContract = Address.parse('put your jetton wallet address');
// const myTransaction = {
//     validUntil: Math.floor(Date.now() / 1000) + 360,
//     messages: [
//         {
//             address: jettonWalletContract,      // sender jetton wallet
//             amount: toNano("0.05").toString(),  // for commission fees, excess will be returned
//             payload: body.toBoc().toString("base64") // payload with jetton transfer and comment body
//         }
//     ]
// }

// export const Settings = () => {
//     const [tonConnectUI] = useTonConnectUI();

//     return (
//         <div>
//             <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>
//                 Send transaction
//             </button>
//         </div>
//     );
// };
