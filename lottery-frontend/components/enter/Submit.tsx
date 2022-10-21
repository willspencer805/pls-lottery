import { useContractWrite, usePrepareContractWrite, useBalance } from 'wagmi'
import { abi721 } from '../../utils/721abi.js'
import { ethers } from 'ethers'

export default function Submit({
  amount,
  entryPrice,
  isApproved,
}: {
  amount: string
  entryPrice: number
  isApproved: Boolean
}) {
  const { config } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_TOKEN_CONTRACT as string,
    contractInterface: abi721,
    functionName: 'buyTickets',
    args: (amount as unknown as number) / entryPrice,
  })

  const { data, isLoading, isSuccess, write } = useContractWrite({
    ...config,
    onError(error: any) {
      alert(`Please try again:\n ${error}`)
    },
  })

  return (
    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      {isSuccess && data ? (
        <p>
          Success! View your transaction
          <a
            href={'https://goerli.etherscan.io/tx/' + data.hash}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-teal-600 hover:text-teal-500"
          >
            {' '}
            here
          </a>
        </p>
      ) : (
        <div className="rounded-md shadow">
          {isApproved ? (
            <button
              onClick={() => write?.()}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
            >
              Purchase Tickets
            </button>
          ) : (
            <button
              onClick={() => write?.()}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 opacity-50 cursor-not-allowed"
            >
              Purchase Tickets
            </button>
          )}
        </div>
      )}
    </div>
  )
}
