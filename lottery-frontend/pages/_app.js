import "../styles/globals.css";
// import type { AppProps } from "next/app";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import {
  chain,
  configureChains,
  createClient,
  useSigner,
  WagmiConfig,
} from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// import { config } from "dotenv";
// import { ChainId, ThirdwebSDKProvider } from "@thirdweb-dev/react";
// require("dotenv").config();

const { chains, provider } = configureChains(
  [chain.goerli],
  [alchemyProvider({ apiKey: process.env.GOERLI_API_KEY }), publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

function ThirdwebProvider({ wagmiClient, children }) {
  const { data: signer } = useSigner();

  return (
    <ThirdwebSDKProvider
      desiredChainId={ChainId.Goerli}
      signer={signer}
      provider={wagmiClient.provider}
      queryClient={wagmiClient.queryClient}
    >
      {children}
    </ThirdwebSDKProvider>
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        {/* <ThirdwebProvider wagmiClient={wagmiClient}> */}
        <Component {...pageProps} />
        {/* </ThirdwebProvider> */}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
