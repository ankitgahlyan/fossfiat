import { useEffect, useState } from 'react';
import { TonClient } from '@ton/ton';
import { config, API_ENDPOINTS } from '../config/consts';
import { useTonConnect } from './useTonConnect';
import { Address, beginCell, StateInit, storeStateInit, contractAddress } from '@ton/ton';
import { JettonWalletSharded } from '@/output/Root_JettonWalletSharded';

// This hook provides access to your jetton wallet contract
export function useRootContract() {
  const { address, connected } = useTonConnect();
  const [jettonWalletAddress, setJettonWalletAddress] = useState<string | null>(null);
  const [client] = useState(() => new TonClient({
    endpoint: API_ENDPOINTS[config.NETWORK],
    apiKey: process.env.TONCENTER_TESTNET_KEY,
  }));

  useEffect(() => {
    if (!connected || !address) {
      setJettonWalletAddress(null);
      return;
    }

    // const timerId = setTimeout(() => {
    fetchJettonWalletAddress();

    // }, 2000);
    // return () => {
    //   clearTimeout(timerId);
    // };
  }, [connected, address]);

  // const init = {
  //   code: Cell.fromBase64(),
  //   data: Cell.fromBase64('<CONTRACT_INIT_DATA>')
  // } satisfies StateInit;

  // const stateInit = beginCell().store(storeStateInit(init)).endCell();
  const init = async () => {
    return await JettonWalletSharded.init(Address.parse(address), Address.parseRaw(config.MINTER_ADDRESS), 0n) as StateInit

  }

  const fetchJettonWalletAddress = async () => {
    // const jettonAddress = contractAddress(0, init);
    return contractAddress(0, await init());
    // const response = await client.runMethod(Address.parse(config.MINTER_ADDRESS), "get_wallet_address", [addrP])

    // const response = await fetch(`${API_ENDPOINTS[config.NETWORK]}/runGetMethod`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },

    //   body: JSON.stringify({
    //     address: config.MINTER_ADDRESS,
    //     method: "get_wallet_address",
    //     stack: [
    //      [ address]
    //       // {
    //       //   type: "cell",
    //       // }
    //     ],
    //     seqno: 0
    //   })
    // });

    // const data = await response.json().catch(() => null);

    // if (!data) {
    //   throw new Error('Empty or invalid JSON response from runGetMethod');
    // }

    // if (data.ok && data.result && data.result.exit_code === 0) {
    //   const walletAddr = data.result.stack?.[0]?.[1] ?? null;
    //   setJettonWalletAddress(walletAddr);
    // } else {
    //   console.warn('Unexpected runGetMethod response:', data);
    // }
    const jettonWalletDataResult = await client.runMethod(Address.parse(address), "get_wallet_data")
    jettonWalletDataResult.stack.readNumber();
    const ownerAddress = jettonWalletDataResult.stack.readAddress();
    const jettonMasterAddress = jettonWalletDataResult.stack.readAddress();
    const jettonCode = jettonWalletDataResult.stack.readCell();
    const jettonData = beginCell()
      .storeCoins(0)
      .storeAddress(ownerAddress)
      .storeAddress(jettonMasterAddress)
      .storeRef(jettonCode)
      .endCell();

    const stateInit: StateInit = {
      code: jettonCode,
      data: jettonData
    }

    const stateInitCell = beginCell()
      .store(storeStateInit(stateInit))
      .endCell();

    console.log(new Address(0, stateInitCell.hash()));

    // =====
    // import { Address, TonClient } from '@ton/ton';

    // async function main() {
    //     const client = new TonClient({
    //         endpoint: 'https://toncenter.com/api/v2/jsonRPC',
    //         // apiKey: 'put your api key', // you can get an api key from @tonapibot bot in Telegram
    //     });

    //     const address = Address.parse('UQDKbjIcfM6ezt8KjKJJLshZJJSqX7XOA4ff-W72r5gqPuwA');
    //     const response = await client.getTransactions(address, {
    //         limit: 1,
    //     });
    //     console.log(response[0]);
    // }

    // main().finally(() => console.log('Exiting...'));

  }

  return {
    client,
    jettonWalletAddress,
    minterAddress: config.MINTER_ADDRESS,
    connected,
  };
}