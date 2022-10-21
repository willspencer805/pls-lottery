import Link from 'next/link'

export default function Welcome() {
  return (
    <main className="mt-13 mx-auto max-w-7xl px-4 sm:mt-13">
      <div className="text-center" id="about">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Buy your Tickets!</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          In this module, we&apos;ll see how token approvals are used to
          interact with smart contracts by exchanging the PLS tokens you
          purchased for NFTs representing an entry to the lottery.
        </p>
      </div>
    </main>
  )
}
