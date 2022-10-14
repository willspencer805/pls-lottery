import Link from 'next/link'

export default function Welcome() {
  async function onClick() {
    const provider = window.ethereum

    if (provider) {
      try {
        const wasAdded = await provider.request({
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: '0xF80B284285B8Fa0DE7E7808994184Aa2000fb874',
              symbol: 'PLSC',
              decimals: 18,
            },
          },
        })
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
      <div className="text-center" id="about">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Wecome to the </span>{' '}
          <span className="block text-indigo-600 xl:inline">PLS Lottery</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          The PLS Lottery is the future of learning. Over the next few weeks,
          learn how to swap, approve, and purchase tokens, all with no money at
          stake. Through the course of the lottery we`&apos`ll take a deep dive
          into dApps, oracles, and smart contracts to understand how everything
          works..
        </p>
        <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div className="rounded-md shadow">
            <a
              href="#start"
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Get started
            </a>
          </div>
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
            <button
              onClick={onClick}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
            >
              Add PLS to Wallet
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
