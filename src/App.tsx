//import '@twa-dev/sdk'
import './App.css';
import {
  TonConnectButton,
  useTonConnectUI,
  useTonWallet
} from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
import { useWalletContract } from './hooks/useWalletContract';

export function AppOld() {
  const { connected } = useTonConnect();
  const { address, sendTransfer } = useWalletContract();

  return (
    <div className='App'>
      <div className='Container'>
        <TonConnectButton className= 'Button' style={{ float: 'right' }}/>

        <div className='Card'>
          <b>Wallet Address</b>
          <div className='Hint'>{address?.slice(0, 30) + '...'}</div>
        </div>

        <div className='Card'>
          <b>Wallet Full State</b>
          {/* <div>{value ?? 'Loading...'}</div> */}
        </div>

        <a
          className={`Button ${connected ? 'Active' : 'Disabled'}`}
          onClick={() => {
            sendTransfer();
          }}
        >
          SendCustomAction
        </a>
      </div>
    </div>
  );
}

// export default App

function WalletActions() {
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  const sendOneTon = async () => {
    if (!wallet) return;

    await tonConnectUI.sendTransaction({
      validUntil: Math.floor(Date.now() / 1000) + 120,
      messages: [
        {
          address: wallet.account.address,
          amount: '1000000000'
        }
      ]
    });
  };

  return (
    <>
      <TonConnectButton />
      <button onClick={sendOneTon}>Send 1 TON</button>
    </>
  );
}

export default function App() {
  return (
      <WalletActions />
  );
}