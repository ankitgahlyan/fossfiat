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
import { useTonClient } from './useTonClient';
import { useAsyncInitialize } from './useAsyncInitialize';
import { useTonConnect } from './useTonConnect';
import { Address, beginCell, OpenedContract } from '@ton/core';
// import { ExtendedShardedJettonWallet } from '../contracts/ExtendedShardedJettonWallet';
// import { ExtendedShardedJettonMinter } from '../contracts/ExtendedShardedJettonMinter';
import { JettonMinterSharded } from '../output/Root_JettonMinterSharded';
import { JettonTransfer, JettonWalletSharded } from '../output/Root_JettonWalletSharded';
import { useTonAddress } from '@tonconnect/ui-react';

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

  const minterContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new JettonMinterSharded(
      Address.parse('EQCFhF5i6Tsvxm9ncx0t7iQoQ7AW6dHdUpF20nKmws3KNM2K')
    );
    return client.open(contract) as OpenedContract<JettonMinterSharded>;
  }, [client]);

  const ownerAddress = useTonAddress()
  const jettonWalletAddress = minterContract?.getGetWalletAddress(Address.parse(ownerAddress))

  const walletContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = new JettonWalletSharded(
      // Address.parse('jettonWalletAddress') // replace with your address from tutorial 2 step 8
      jettonWalletAddress
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
