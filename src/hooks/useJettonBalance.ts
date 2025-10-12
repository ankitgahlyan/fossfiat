import { useEffect, useState } from 'react';
import { useRootContract } from './useRootContract';
import { config, API_ENDPOINTS } from '../config/consts';

export function useJettonBalance() {
  const { jettonWalletAddress, connected } = useRootContract();
  const [balance, setBalance] = useState<bigint | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBalance = async () => {
    if (!jettonWalletAddress) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${API_ENDPOINTS[config.NETWORK]}/runGetMethod`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          address: jettonWalletAddress,
          method: 'get_wallet_data',
          stack: []
        })
      });

      const data = await response.json();
      
      if (data.ok && data.result.exit_code === 0) {
        const balanceHex = data.result.stack[0][1];
        setBalance(BigInt('0x' + balanceHex));
      } else {
        throw new Error('Failed to fetch balance');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (connected && jettonWalletAddress) {
      fetchBalance();
    }
  }, [connected, jettonWalletAddress]);

  return {
    balance,
    loading,
    error,
    refetch: fetchBalance,
  };
}
