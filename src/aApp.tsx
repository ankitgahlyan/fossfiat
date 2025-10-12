import { useTonConnect } from './hooks/useTonConnect';
import { WalletConnect } from './components/WalletConnect';
import { BalanceCard } from './components/BalanceCard';
import { TransferForm } from './components/TransferForm';
import './App.css';

function App() {
  const { connected } = useTonConnect();

  return (
    <div className="app">
      <header className="header">
        <div className="logo">🪙</div>
        <h1>Jetton Wallet</h1>
        <p>Manage your tokens with style</p>
      </header>

      <main className="container">
        {!connected ? (
          <div className="card">
            <WalletConnect />
          </div>
        ) : (
          <>
            <div className="card">
              <BalanceCard />
            </div>
            <div className="card">
              <TransferForm />
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
