//import '@twa-dev/sdk'
import {TonConnectButton, TonConnectUI, useTonConnectUI, useTonWallet} from '@tonconnect/ui-react';
// import {useTonConnect} from './hooks/useTonConnect';
import "buffer";
import {Address, beginCell, toNano, Sender, SenderArguments, storeStateInit, TonClient} from "@ton/ton";
import {JettonMinterSharded, JettonTransfer} from './output/Root_JettonMinterSharded';
import React from 'react';
import {JettonWalletSharded} from './output/Root_JettonWalletSharded';
import "dotenv/config"
import {config} from './config/consts';
import {Button} from './components/ui/button';
// import { ExtendedShardedJettonWallet } from './contracts/ExtendedShardedJettonWallet';
// import { TransferForm } from './components/TransferForm';

function App() {
    const [tonConnectUI] = useTonConnectUI();
    const wallet = useTonWallet();
    // const {connected, wallet, sender} = useTonConnect();
    // React.useEffect(() => {
    //   if (!wallet) {
    //     tonConnectUI.openModal();
    //   }
    // }, [wallet, tonConnectUI]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    // Controlled inputs for better perf and mobile UX
    const [dest, setDest] = React.useState("");
    const [amountInput, setAmountInput] = React.useState("");

    // Jetton decimals (set according to your contract, commonly 9)
    // const jettonDecimals = 9;

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
            const address = args.to.toString({urlSafe: true, bounceable: true});

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
                validUntil: validUntil,
                messages: [
                    {
                        address: address,
                        amount: amount,
                        stateInit: stateInit,
                        payload: payload,
                    },
                ],
            });
        }
    }

    const client = new TonClient({
        endpoint: "https://testnet.toncenter.com/api/v2/jsonRPC",
        apiKey: process.env.TONCENTER_TESTNET_KEY
    }); // NOTE: how's this safe in a static site
    const sender = new TonConnectProvider(tonConnectUI);
    const userAddress = sender.address;
    const minterAddress = Address.parse(config.MINTER_ADDRESS);
    const minter = client.open(JettonMinterSharded.fromAddress(minterAddress));
    // const contract = ExtendedShardedJettonWallet.fromInit(userAddress!, minterAddress, 0n);
    // const jettonAddress = contractAddress();

    // const getRootInstance = async () => {
    //   // return client.open(ExtendedShardedJettonMinter.fromAddress(rootAddress));
    //   // return client.open(JettonMinterSharded.fromAddress(minterAddress));

    //   // const network = getNetworkFromEnv()
    //   // const endpoint = await getHttpEndpoint({ network })
    //   // const client = new TonClient({ endpoint: endpoint })

    //   // const jettonAddress = await minter.getGetWalletAddress(userAddress);
    //   // const jetton = client.open(JettonWalletSharded.fromAddress(jettonAddress));
    //   // const jettonContract = await JettonWalletSharded.fromInit(userAddress, minterAddress, 0n);
    //   // const jetton = client.open(jettonContract);
    //   //======================================================================================
    //   const jetton = client.open(await JettonWalletSharded.fromInit(userAddress, minterAddress, 0n));
    //   const walletAllData = await jetton.getState();
    //   console.log(walletAllData.balance)

    //   // =============================================================================
    //   // const api = await createApi("testnet");
    //   // const provider = new TonConnectUI(); // OR you can use tonConnectUI as a provider from @tonconnect/ui-react

    //   // // https://github.com/ton-community/assets-sdk/blob/main/examples/use-tonconnect.ts
    //   // const sender = new TonConnectSender(provider);
    //   // // const sender = new TonConnectSender(provider);

    //   // const storage: PinataStorageParams = {
    //   //   pinataApiKey: process.env.PINATA_API_KEY!,
    //   //   pinataSecretKey: process.env.PINATA_SECRET!,
    //   // };

    //   // const sdk = AssetsSDK.create({
    //   //   api,
    //   //   storage,
    //   //   sender,
    //   // });

    //   // const jetton = sdk.openJettonWallet(address);
    //   // const RECEIVER_ADDRESS = Address.parse("RECEIVER_ADDRESS");

    //   // jetton.send(sender, RECEIVER_ADDRESS, toNano(10));
    // };

    const jetton = async () => {
        // if (!wallet) setError("connect wallet and retry");//throw new Error("Wallet not connected");
        // you can use createApi from @ton-community/assets-sdk
        // const client = await createApi("testnet");
        const jettonAddress = await minter.getGetWalletAddress(userAddress!);
        return client.open(JettonWalletSharded.fromAddress(jettonAddress));
        // return client.open(await JettonWalletSharded.fromInit(userAddress!, minterAddress, 0n));
    };

    const sendTransfer = async (to: Address, amountRaw: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const walletInstance = await jetton();

            // Convert input to nano jetton amount
            const parsed = parseFloat(amountRaw.trim());
            if (isNaN(parsed) || parsed <= 0) {
                setError("Amount must be a positive number");
                setIsLoading(false);
                return;
            }
            // const amount = BigInt(Math.floor(parsed * Math.pow(10, jettonDecimals)));
            const amount = toNano(parsed);

            if (amount <= 0n) {
                setError("Amount too small (underflow)");
                setIsLoading(false);
                return;
            }

            const msg: JettonTransfer = {
                $$type: "JettonTransfer",
                queryId: 0n,
                amount: amount,
                destination: to,
                responseDestination: null,
                customPayload: null,
                forwardTonAmount: 0n,
                forwardPayload: beginCell().endCell().asSlice()
            };

            await walletInstance.send(sender, {value: toNano(1)}, msg);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'An error occurred');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    const getRootState = async () => {
        const state = await minter.getGetJettonData()
        console.log("root state", state.totalSupply);
        return state.totalSupply
    };

    const getState = async () => {
        if (!wallet) {
            await tonConnectUI.openSingleWalletModal('tonkeeper');
            setError("Wallet not connected");
            return;
        }
        const walletInstance = await jetton();
        const walletState = walletInstance.getOtherConsts;
        console.log("wallet state", walletState);
    };

    return (
        <main className="bg-black min-h-screen flex flex-col p-2">
            <div
                className="w-full max-w-lg mx-auto px-2 sm:px-4 py-4 sm:py-8 flex flex-col gap-4 text-slate-100 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-transparent rounded-xl shadow-lg border border-slate-800/50 backdrop-blur-sm">
                <header className="flex flex-col sm:flex-row items-center justify-between mb-4 gap-2">
                    <h1 className="text-lg font-semibold text-center sm:text-left w-full">FossFiat</h1>
                    <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                        <TonConnectButton/>
                    </div>
                </header>

                {/* Transfer card */}
                <section className="bg-neutral-900/80 border border-neutral-700 rounded-lg p-3 space-y-3">
                    <div className="text-sm font-medium mb-2">Transfer Amount</div>

                    <label className="block text-xs text-neutral-300 mb-1" htmlFor="dest">Destination</label>
                    <input
                        id="dest"
                        name="destination"
                        value={dest}
                        onChange={(e) => setDest(e.target.value)}
                        placeholder="enter receiver's account: 0Q..."
                        className="w-full text-sm p-3 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        inputMode="text"
                        aria-label="destination address"
                        autoComplete="off"
                    />

                    <label className="block text-xs text-neutral-300 mb-1" htmlFor="amount">Amount(TSN)</label>
                    <input
                        id="amount"
                        name="amount"
                        value={amountInput}
                        onChange={(e) => setAmountInput(e.target.value)}
                        placeholder="0.1(invite),0.2(friendRequest)"
                        className="w-full text-sm p-3 bg-neutral-900 border border-neutral-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        inputMode="decimal"
                        aria-label="amount"
                        autoComplete="off"
                    />

                    {error && <div className="text-xs text-red-400 mt-1">{error}</div>}

                    <div className="flex flex-col sm:flex-row gap-2 mt-2">
                        <button
                            type="button"
                            disabled={isLoading || !wallet}
                            onClick={async () => {
                                try {
                                    setError(null);
                                    if (!dest || !amountInput) {
                                        setError("Provide destination and amount");
                                        return;
                                    }
                                    const toAddr = Address.parse(dest.trim());
                                    await sendTransfer(toAddr, amountInput);
                                    setDest("");
                                    setAmountInput("");
                                } catch (e) {
                                    setError(e instanceof Error ? e.message : String(e));
                                }
                            }}
                            className={`w-full sm:flex-1 text-sm p-3 rounded-md text-white transition-colors duration-150 ${isLoading || !wallet ? "bg-neutral-700/60" : "bg-blue-600 hover:bg-blue-700"}`}
                        >
                            {isLoading ? "Sending…" : "Send"}
                        </button>

                        <button
                            type="button"
                            onClick={getState}
                            className="w-full sm:w-28 text-sm p-3 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700"
                        >
                            ACCOUNT STATE
                        </button>

                        <button
                            type="button"
                            onClick={getRootState}
                            className="w-full sm:w-28 text-sm p-3 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700"
                        >
                            Root State
                        </button>

                        <div className="w-full sm:w-auto flex items-center justify-center">
                            <Button onClick={() => tonConnectUI.openSingleWalletModal('mytonwallet')}
                                    className="w-full sm:w-auto p-3">
                                Connect MyTonWallet
                            </Button>
                        </div>
                    </div>
                </section>

                {/* <TransferForm/> */}
                <footer className="mt-4 text-center text-xs text-neutral-400">
                    • akki •
                </footer>
            </div>
        </main>
    );
}

export default App

