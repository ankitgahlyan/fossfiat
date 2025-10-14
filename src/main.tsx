import { config } from './config/consts'
import './index.css'
import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { TonConnectUIProvider, THEME } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';

WebApp.ready();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TonConnectUIProvider
      manifestUrl={config.MANIFEST_URL}
      uiPreferences={{ theme: THEME.DARK }}
      actionsConfiguration={{
        twaReturnUrl: 'https://t.me/fossfiatbot/myapp'
      }}
      walletsListConfiguration={{
        includeWallets: [
          {
            appName: "telegram-wallet",
            name: "Wallet",
            imageUrl: "https://wallet.tg/images/logo-288.png",
            aboutUrl: "https://wallet.tg/",
            universalLink: "https://t.me/wallet/start",
            bridgeUrl: "https://bridge.tonapi.io/bridge",
            platforms: ["ios", "android", "macos", "windows", "linux"]
          }
        ]
      }}
    >
      <App/>
    </TonConnectUIProvider>,
  </StrictMode>
)

