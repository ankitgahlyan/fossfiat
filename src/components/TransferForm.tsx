import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { Address, beginCell, toNano } from '@ton/core';
import { useTonConnect } from '../hooks/useTonConnect';
import { useRootContract } from '../hooks/useRootContract';
import { useJettonBalance } from '../hooks/useJettonBalance';
import { StatusMessage } from './StatusMessage';

export const TransferForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: 'success' | 'error' | 'info' } | null>(null);
  const [qrOpen, setQrOpen] = useState(false);
  const { sender } = useTonConnect();
  const { jettonWalletAddress } = useRootContract();
  const { refetch } = useJettonBalance();

  const handleTransfer = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recipient || !amount || !jettonWalletAddress) {
      setStatus({ message: 'Please fill in all fields', type: 'error' });
      return;
    }

    setLoading(true);
    setStatus({ message: 'Preparing transaction...', type: 'info' });

    try {
      // Build the transfer payload
      // Standard jetton transfer message structure
      const payload = beginCell()
        .storeUint(0xf8a7ea5, 32) // transfer op
        .storeUint(0, 64) // query_id
        .storeCoins(BigInt(Math.floor(parseFloat(amount) * 1e9))) // amount
        .storeAddress(Address.parse(recipient)) // destination
        .storeAddress(null) // response_destination
        .storeBit(0) // custom_payload
        .storeCoins(toNano('0.01')) // forward_ton_amount
        .storeBit(0) // forward_payload
        .endCell();

      await sender.send({
        to: Address.parse(jettonWalletAddress), // FIXME
        value: toNano('1'), // gas fee
        body: payload,
      });

      setStatus({ message: 'Transaction sent successfully!', type: 'success' });
      setRecipient('');
      setAmount('');
      
      // Refresh balance after a delay
      setTimeout(() => refetch(), 3000);
    } catch (error) {
      console.error('Transfer error:', error);
      setStatus({ 
        message: error instanceof Error ? error.message : 'Transfer failed', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transfer-form">
      <h2>💸 Send Tokens</h2>
      <form onSubmit={handleTransfer}>
        <div className="form-group" style={{ position: 'relative' }}>
          <label>Recipient Address</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="text"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              placeholder="EQC..."
              disabled={loading}
              style={{ flex: 1 }}
            />
            <button
              type="button"
              onClick={() => setQrOpen(true)}
              style={{ marginLeft: 8, background: 'none', border: 'none', cursor: 'pointer' }}
              title="Scan QR"
              disabled={loading}
            >
              {/* Simple QR icon SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="14" y="3" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <rect x="3" y="14" width="7" height="7" stroke="currentColor" strokeWidth="2"/>
                <path d="M14 17h2v2h-2v-2z" fill="currentColor"/>
                <path d="M18 14h3v3h-3v-3z" fill="currentColor"/>
              </svg>
            </button>
          </div>
          {qrOpen && (
            <div style={{ position: 'absolute', top: '110%', left: 0, zIndex: 10, background: '#fff', border: '1px solid #ccc', borderRadius: 8, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span>Scan QR Code</span>
                <button type="button" onClick={() => setQrOpen(false)} style={{ background: 'none', border: 'none', fontSize: 18, cursor: 'pointer' }}>&times;</button>
              </div>
              <QrReader
                constraints={{ facingMode: 'environment' }}
                onResult={(result) => {
                  if (result) {
                    const text = result.getText() ;//? result.getText()// : result.text;
                    if (text) {
                      setRecipient(text);
                      setQrOpen(false);
                    }
                  }
                }}
              />
            </div>
          )}
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="100.00"
            disabled={loading}
          />
        </div>
        <button type="submit" disabled={loading || !jettonWalletAddress}>
          {loading ? 'Processing...' : 'Send Transfer'}
        </button>
      </form>
      {status && (
        <StatusMessage
          message={status.message}
          type={status.type}
          onClose={() => setStatus(null)}
        />
      )}
    </div>
  );
};