// import { useEffect, useState } from 'react';
// import Counter from '../contracts/counter';
// import { useTonClient } from './useTonClient';
// import { useAsyncInitialize } from './useAsyncInitialize';
// import { Address, OpenedContract } from '@ton/core';

// export function useCounterContract() {
//   const client = useTonClient();
//   const [val, setVal] = useState<null | number>();

//   const counterContract = useAsyncInitialize(async () => {
//     if (!client) return;
//     const contract = new Counter(
//       Address.parse('EQBYLTm4nsvoqJRvs_L-IGNKwWs5RKe19HBK_lFadf19FUfb') // replace with your address from tutorial 2 step 8
//     );
//     return client.open(contract) as OpenedContract<Counter>;
//   }, [client]);

//   useEffect(() => {
//     async function getValue() {
//       if (!counterContract) return;
//       setVal(null);
//       const val = await counterContract.getCounter();
//       setVal(Number(val));
//     }
//     getValue();
//   }, [counterContract]);

//   return {
//     value: val,
//     address: counterContract?.address.toString(),
//   };
// }
import { useEffect, useState } from 'react';
import { JettonTransfer, JettonWalletSharded } from '../output/Shard_JettonWalletSharded';
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonConnect } from './useTonConnect';
import { Address, beginCell, OpenedContract } from '@ton/core';
import { ExtendedShardedJettonWallet } from '../contracts/ExtendedShardedJettonWallet';

// Define dictionary schema
// const balancesDict = Dictionary.loadDirect(
//   Dictionary.Keys.Address(),
//   Dictionary.Values.Int(64),   // or 257 depending on your Int size
//   cellFromGetter // result from getAllBalances
// );
// // Iterate
// for (const [addr, balance] of balancesDict) {
//   console.log(addr.toString(), balance.toString());
// }

// reports: Dictionary {
//     _key: {
//       bits: 267,
//       serialize: [Function: serialize],
//       parse: [Function: parse]
//     },
//     _value: { serialize: [Function: serialize], parse: [Function: parse] },
//     _map: Map(0) {}
//   },

export function useWalletContract() {
  const client = useTonClient();
  const [val, setVal] = useState<null | object>();
  const { sender } = useTonConnect();

  //const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));
  const msg: JettonTransfer = {
    $$type: 'JettonTransfer',
    queryId: 0n,
    amount: 100000000n,
    destination: Address.parse('0QCpamnMhbEoYO-YsWfVQ4XAcZUWkwqpO39j8W8lMeI2qs8T'),//
    responseDestination: Address.parse('0QCpamnMhbEoYO-YsWfVQ4XAcZUWkwqpO39j8W8lMeI2qs8T'),//
    customPayload: null,
    forwardTonAmount: 0n,
    forwardPayload: beginCell().storeUint(0, 1).endCell().beginParse(),
  }

  const walletContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new ExtendedShardedJettonWallet(
      Address.parse('kQB8mhFykq_xOMSBX3y8W9w2_zp6lEJ5iJ76u-y1J3AMK70v') // replace with your address from tutorial 2 step 8
    );
    return client.open(contract) as OpenedContract<JettonWalletSharded>;
  }, [client]);

  useEffect(() => {
    async function getValue() {
      if (!walletContract) return;
      setVal(null);
      const val = await walletContract.getState()
      setVal(val);
      // await sleep(5000); // sleep 5 seconds and poll value again
      // getValue();
    }
    getValue();
  }, [walletContract]);

  return {
    value: val,
    address: walletContract?.address.toString(),
    sendTransfer: () => {
      return walletContract?.send(
        sender,
        {value: 1000000000n, bounce: true},
        msg,
      )
    },
  };
}
