import React from 'react';
import { TonConnectButton } from '@tonconnect/ui-react';

export const WalletConnect: React.FC = () => {
  return (
    <div className="connect-section">
      <h2>Connect Your Wallet</h2>
      <p>Get started by connecting your TON wallet</p>
      <TonConnectButton />
    </div>
  );
};