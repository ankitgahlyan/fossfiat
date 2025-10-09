//import '@twa-dev/sdk'
import { TonConnectButton, TonConnectUI, useTonConnectUI, useTonWallet, } from '@tonconnect/ui-react';
import { useTonConnect } from './hooks/useTonConnect';
// import { useWalletContract } from './hooks/useWalletContract';
import { createApi, } from "@ton-community/assets-sdk";

import "buffer";
import {
  Address,
  beginCell,
  Sender,
  SenderArguments,
  storeStateInit,
  toNano,
  TonClient,
} from "@ton/ton";
import { ExtendedShardedJettonMinter } from './contracts/ExtendedShardedJettonMinter';
import { ExtendedShardedJettonWallet } from './contracts/ExtendedShardedJettonWallet';
import { JettonTransfer } from './output/Root_JettonMinterSharded';
import React from 'react';
import { getHttpEndpoint } from '@orbs-network/ton-access';
import { getNetworkFromEnv } from './utils/utils';

function App() {
  const { connected } = useTonConnect();
  const [tonConnectUI] = useTonConnectUI();
  const wallet = useTonWallet();

  // React.useEffect(() => {
  //   if (!wallet) {
  //     // open modal only when needed
  //     tonConnectUI.openModal();
  //   }
  // }, [wallet, tonConnectUI]);

  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Controlled inputs for better perf and mobile UX
  const [dest, setDest] = React.useState("");
  const [amountInput, setAmountInput] = React.useState("");

  // NEW: random static gradient for this page load
  const [bgGradient, setBgGradient] = React.useState<string>("");
  React.useEffect(() => {
    const gradients = [
      "linear-gradient(135deg, #0f172a 0%, #061220 100%)",
      "linear-gradient(135deg, #071025 0%, #003049 100%)",
      "linear-gradient(135deg, #071120 0%, #0b1221 100%)",
      "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
      "linear-gradient(135deg, #0b1221 0%, #3b82f6 100%)",
      "linear-gradient(135deg, #0f172a 0%, #7c3aed 100%)",
      "linear-gradient(135deg, #041624 0%, #0f172a 100%)"
    ];

    const randIndex = (() => {
      try {
        if (typeof crypto !== "undefined" && "getRandomValues" in crypto) {
          return crypto.getRandomValues(new Uint32Array(1))[0] % gradients.length;
        }
      } catch {
        // fallthrough to Math.random if crypto fails
      }
      return Math.floor(Math.random() * gradients.length);
    })();

    setBgGradient(gradients[randIndex]);
  }, []);

  class TonConnectProvider implements Sender {
    /**
     * The TonConnect UI instance.
     * @private
     */
    private readonly provider: TonConnectUI;

    /**
     * The address of the current account.
     */
    public get address(): Address | undefined {
      const address = this.provider.account?.address;
      return address ? Address.parse(address) : undefined;
    }

    /**
     * Creates a new TonConnectProvider.
     * @param provider
     */
    public constructor(provider: TonConnectUI) {
      this.provider = provider;
    }

    /**
     * Sends a message using the TonConnect UI.
     * @param args
     */
    public async send(args: SenderArguments): Promise<void> {
      // The transaction is valid for 10 minutes.
      const validUntil = Math.floor(Date.now() / 1000) + 600;

      // The recipient's address should be in bounceable format for all smart contracts.
      const address = args.to.toString({ urlSafe: true, bounceable: true });

      // The address of the sender, if available.
      // const from = this.address?.toRawString();

      // The amount to send in nano tokens.
      const amount = args.value.toString();

      // The state init cell for the contract.
      let stateInit: string | undefined;
      if (args.init) {
        // State init cell for the contract.
        const stateInitCell = beginCell()
          .store(storeStateInit(args.init))
          .endCell();
        // Convert the state init cell to boc base64.
        stateInit = stateInitCell.toBoc().toString("base64");
      }

      // The payload for the message.
      let payload: string | undefined;
      if (args.body) {
        // Convert the message body to boc base64.
        payload = args.body.toBoc().toString("base64");
      }

      // Use the TonConnect UI to send the message and wait for the sending
      await this.provider.sendTransaction({
        validUntil,
        messages: [
          { address, amount, stateInit, payload },
        ],
      });
    }
  }

  const CONTRACT_ADDRESS = "EQBNvGxBDpm8FbP8BhtgQdZ9qoQlUghTPM2fHgGDy1kPJpTN";

  const getRootInstance = async () => {
    // const client = new TonClient({endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",});
    const address = Address.parse(CONTRACT_ADDRESS);

    const network = getNetworkFromEnv()
    const endpoint = await getHttpEndpoint({ network })
    const client = new TonClient({ endpoint: endpoint })
    const minter = client.open(ExtendedShardedJettonMinter.fromAddress(address))
    const minterData = await minter.getGetJettonData()
    console.log(minterData)

    return client.open(ExtendedShardedJettonMinter.fromAddress(address));
  };

  const getWalletInstance = async () => {
    if (!wallet) throw new Error("Wallet not connected");
    // you can use createApi from @ton-community/assets-sdk
    const client = await createApi("testnet");
    const address = Address.parse(wallet.account.address);
    return client.open(ExtendedShardedJettonWallet.fromAddress(address));
  };

  const getRootState = async () => {
    try {
      const rootInstance = await getRootInstance();
      const state = await rootInstance.getGetJettonData()
      console.log("root state", state);
    } catch (e) {
      // silent failure for minimal UI; surface if needed
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  const sendTransfer = async (to: Address, amount: bigint) => {
    try {
      setIsLoading(true);
      setError(null);
      const walletInstance = await getWalletInstance();
      const sender = new TonConnectProvider(tonConnectUI);

      const msg: JettonTransfer = {
        $$type: "JettonTransfer",
        queryId: 0n,
        amount,
        destination: to,
        responseDestination: null,
        customPayload: null,
        forwardTonAmount: 0n,
        forwardPayload: beginCell().endCell().asSlice()
      };

      await walletInstance.send(sender, { value: toNano(1) }, msg);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'An error occurred');
      throw e;
    } finally {
      setIsLoading(false);
    }
  };

  const getState = async () => {
    try {
      setError(null);
      if (wallet) {
        // When wallet is connected, query wallet contract state
        const walletInstance = await getWalletInstance();
        const walletState = await walletInstance.getState();
        console.log("wallet state", walletState);
      } else {
        // No wallet: fallback to querying the root contract state
        const rootInstance = await getRootInstance();
        const rootState = await rootInstance.getState();
        console.log("root state (no wallet)", rootState);
      }
    } catch (e) {
      setError(e instanceof Error ? e.message : String(e));
    }
  };

  // Minimal, dark, static gradient, no animations, mobile-first
  return (
    <main
      style={{ background: bgGradient || "linear-gradient(135deg, #0f172a 0%, #061220 100%)" }}
      className="min-h-screen w-full text-white p-4"
    >
      <div className="max-w-lg mx-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-lg font-semibold">FossFiat</h1>
          <div className="shrink-0">
            <TonConnectButton />
          </div>
        </header>

        {/* Transfer card */}
        <section className="bg-neutral-900/60 border border-neutral-700 rounded-lg p-4 space-y-3">
          <div className="text-sm font-medium">Transfer Amount</div>

          <label className="block text-xs text-neutral-300" htmlFor="dest">Destination</label>
          <input
            id="dest"
            name="destination"
            value={dest}
            onChange={(e) => setDest(e.target.value)}
            placeholder="EQ..."
            className="w-full text-sm p-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none"
            inputMode="text"
            aria-label="destination address"
          />

          <label className="block text-xs text-neutral-300" htmlFor="amount">Amount (TON)</label>
          <input
            id="amount"
            name="amount"
            value={amountInput}
            onChange={(e) => setAmountInput(e.target.value)}
            placeholder="0.1"
            className="w-full text-sm p-2 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none"
            inputMode="decimal"
            aria-label="amount"
          />

          {error && <div className="text-xs text-red-400">{error}</div>}

          <div className="flex gap-2">
            <button
              type="button"
              disabled={isLoading || !connected}
              onClick={async () => {
                try {
                  setError(null);
                  if (!dest || !amountInput) {
                    setError("Provide destination and amount");
                    return;
                  }
                  const toAddr = Address.parse(dest.trim());
                  const amount = toNano(amountInput.trim());
                  await sendTransfer(toAddr, amount);
                  setDest("");
                  setAmountInput("");
                } catch (e) {
                  setError(e instanceof Error ? e.message : String(e));
                }
              }}
              className={`flex-1 text-sm p-2 rounded-md text-white ${isLoading || !connected ? "bg-neutral-700/60" : "bg-blue-600"
                }`}
            >
              {isLoading ? "Sending…" : "Send"}
            </button>

            <button
              type="button"
              onClick={getState}
              className="w-28 text-sm p-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200"
            >
              Get State
            </button>

            <button
              type="button"
              onClick={getRootState}
              className="w-28 text-sm p-2 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200"
            >
              Get Root State
            </button>
          </div>
        </section>

        <footer className="mt-6 text-center text-xs text-neutral-400">
          • akki •
        </footer>
      </div>
    </main>
  );
}

export default App