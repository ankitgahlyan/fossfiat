import {TonConnectButton, TonConnectUI, useTonConnectUI, useTonWallet} from '@tonconnect/ui-react';
import "buffer";
import {
    Address,
    beginCell,
    toNano,
    Sender,
    SenderArguments,
    storeStateInit,
    TonClient
} from "@ton/ton";
import {JettonMinterSharded, JettonTransfer} from './output/Root_JettonMinterSharded';
import React from 'react';
import {JettonWalletSharded} from './output/Root_JettonWalletSharded';
import "dotenv/config"
import {config} from './config/consts';
import AddressInput from '@/components/AddressInput';

function App() {
    const [tonConnectUI] = useTonConnectUI();
    const wallet = useTonWallet();
    const [isLoading, setIsLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const [dest, setDest] = React.useState("");
    const [amountInput, setAmountInput] = React.useState("");

    class TonConnectProvider implements Sender {
        private readonly provider: TonConnectUI;
        public get address(): Address | undefined {
            const address = this.provider.account?.address;
            return address ? Address.parse(address) : undefined;
        }

        public constructor(provider: TonConnectUI) {
            this.provider = provider;
        }

        public async send(args: SenderArguments): Promise<void> {
            const validUntil = Math.floor(Date.now() / 1000) + 600;
            const address = args.to.toString({urlSafe: true, bounceable: true});
            // const from = this.address?.toRawString();
            const amount = args.value.toString();
            let stateInit: string | undefined;
            if (args.init) {
                const stateInitCell = beginCell()
                    .store(storeStateInit(args.init))
                    .endCell();
                stateInit = stateInitCell.toBoc().toString("base64");
            }

            let payload: string | undefined;
            if (args.body) {
                payload = args.body.toBoc().toString("base64");
            }

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
    });
    const sender = new TonConnectProvider(tonConnectUI);
    const userAddress = sender.address;
    const minterAddress = Address.parse(config.MINTER_ADDRESS);
    const minter = client.open(JettonMinterSharded.fromAddress(minterAddress));
    const jetton = async () => {
        const jettonAddress = await minter.getGetWalletAddress(userAddress!);
        return client.open(JettonWalletSharded.fromAddress(jettonAddress));
        // return client.open(await JettonWalletSharded.fromInit(userAddress!, minterAddress, 0n));
    };

    const sendTransfer = async (to: Address, amountRaw: string) => {
        try {
            setIsLoading(true);
            setError(null);
            const walletInstance = await jetton();
            // const deployerWallet = WalletContractV4.create({
            //     workchain: 0,
            //     publicKey: wallet!.account.publicKey,
            // })
            // const deployerWalletContract = client.open(deployerWallet)
            // const queryId = await deployerWalletContract.getSeqno();
            const parsed = parseFloat(amountRaw.trim());
            if (isNaN(parsed) || parsed <= 0) {
                setError("Amount must be a positive number");
                setIsLoading(false);
                return;
            }
            // const amount = BigInt(Math.floor(parsed * Math.pow(10, 9)));
            const amount = toNano(parsed);
            // const amount = fromNano(parsed);


            if (amount <= 0n) {
                setError("Amount too small (underflow)");
                setIsLoading(false);
                return;
            }

            const msg: JettonTransfer = {
                $$type: "JettonTransfer",
                // queryId: BigInt(queryId),
                queryId: 0n,
                amount: amount,
                destination: to,
                responseDestination: userAddress!,
                customPayload: null,
                forwardTonAmount: 10000000n,
                forwardPayload: beginCell().storeUint(0, 1).asSlice()
            };

            await walletInstance.send(sender, {value: toNano(1)}, msg);
        } catch (e) {
            setError(e instanceof Error ? e.message : 'An error occurred');
            throw e;
        } finally {
            setIsLoading(false);
        }
    };

    // const getRootState = async () => {
    //     const state = await minter.getGetJettonData()
    //     console.log("root state", state.totalSupply);
    //     return state.totalSupply
    // };
    //
    // const getState = async () => {
    //     if (!wallet) {
    //         await tonConnectUI.openSingleWalletModal('tonkeeper');
    //         setError("Wallet not connected");
    //         return;
    //     }
    //     const walletInstance = await jetton();
    //     const walletState = walletInstance.getOtherConsts;
    //     console.log("wallet state", walletState);
    // };

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

                    <AddressInput/>
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

                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    onClick={getState}*/}
                        {/*    className="w-full sm:w-28 text-sm p-3 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700"*/}
                        {/*>*/}
                        {/*    ACCOUNT STATE*/}
                        {/*</button>*/}

                        {/*<button*/}
                        {/*    type="button"*/}
                        {/*    onClick={getRootState}*/}
                        {/*    className="w-full sm:w-28 text-sm p-3 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-200 hover:bg-neutral-700"*/}
                        {/*>*/}
                        {/*    Root State*/}
                        {/*</button>*/}

                        {/*<div className="w-full sm:w-auto flex items-center justify-center">*/}
                        {/*    <Button onClick={() => tonConnectUI.openSingleWalletModal('mytonwallet')}*/}
                        {/*            className="w-full sm:w-auto p-3">*/}
                        {/*        Connect MyTonWallet*/}
                        {/*    </Button>*/}
                        {/*</div>*/}
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

