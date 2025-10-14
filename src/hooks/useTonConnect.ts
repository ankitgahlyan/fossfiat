import { useTonConnectUI, useTonAddress, useTonWallet } from '@tonconnect/ui-react';
import { Sender, SenderArguments } from '@ton/core';
// import { storeStateInit } from '../output/Root_JettonMinterSharded';

export function useTonConnect() { // : { sender: Sender; connected: boolean } {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  const wallet = useTonWallet();

  const sender: Sender = {
    send: async (args: SenderArguments) => {
      await tonConnectUI.sendTransaction({
        messages: [
          {
            address: args.to.toString(),
            amount: args.value.toString(),
            payload: args.body?.toBoc().toString('base64'),
            // stateInit: beginCell().store(storeStateInit(args.init?)).endCell().toBoc().toString('base64'),
          },
        ],
        validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes
      });
    },
    // address: address ? {  } : undefined,
    // address: address ? { toString: () => address } : undefined,
  };

  return {
    sender,
    connected: !!wallet,
    wallet,
    address,
  };
}