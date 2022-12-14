import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import {
  RainbowKitProvider,
  getDefaultWallets,
  lightTheme,
} from '@rainbow-me/rainbowkit'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import Layout from '../components/Layout'
import nextConfig from '../next.config'

const { chains, provider, webSocketProvider } = configureChains(
  [chain.goerli],
  [
    alchemyProvider({
      // apiKey: nextConfig.ALCHEMY_KEY,
      apiKey: 'c88lErNVv5yUhhzQ9r-mTG6IoSp0zfPv',
    }),
    publicProvider(),
  ]
)

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PLS Lottery</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          coolMode
          theme={lightTheme({
            overlayBlur: 'large',
            accentColor: 'rgb(13 148 136)',
          })}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </RainbowKitProvider>
      </WagmiConfig>
    </>
  )
}

export default MyApp
