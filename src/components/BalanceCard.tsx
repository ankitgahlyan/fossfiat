import React from 'react';
import { useJettonBalance } from '../hooks/useJettonBalance';
import { useRootContract } from '../hooks/useRootContract';
import { useTonConnect } from '../hooks/useTonConnect';
import { formatAddress, formatBalance } from '../utils/formatters';

export const BalanceCard: React.FC = () => {
  const { address } = useTonConnect();
  const { jettonWalletAddress } = useRootContract();
  const { balance, loading, refetch } = useJettonBalance();

  return (
    <div className="balance-card">
      <div className="info-grid">
        <div className="info-item">
          <div className="info-label">Connected Wallet</div>
          <div className="info-value">{address ? formatAddress(address) : '-'}</div>
        </div>
        <div className="info-item">
          <div className="info-label">Jetton Wallet</div>
          <div className="info-value">
            {jettonWalletAddress ? formatAddress(jettonWalletAddress) : '-'}
          </div>
        </div>
        <div className="info-item">
          <div className="info-label">Token Balance</div>
          <div className="info-value">
            {loading ? 'Loading...' : balance !== null ? formatBalance(balance) : '-'}
          </div>
        </div>
      </div>
      <button onClick={refetch} className="refresh-btn" disabled={loading}>
        🔄 Refresh Balance
      </button>
    </div>
  );
};