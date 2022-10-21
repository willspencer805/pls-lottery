import { useContractWrite, usePrepareContractWrite, useBalance } from 'wagmi'
import { abi } from '../../utils/abi.js'
import { ethers } from 'ethers'
import './Amount.tsx'

export default function SubmitButton({
  toSpend,
  isDisconnected,
}: {
  toSpend: string
  isDisconnected: boolean
}) {
  const { config } = usePrepareContractWrite({
    addressOrName: '0xF80B284285B8Fa0DE7E7808994184Aa2000fb874',
    contractInterface: abi,
    functionName: 'buyTokens',
    overrides: {
      value: ethers.utils.parseEther(toSpend.toString()),
    },
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
          <button
            disabled={isDisconnected || isLoading}
            onClick={() => write?.()}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
          >
            {isDisconnected ? 'Please Connect your Wallet' : 'Get Started'}
          </button>
        </div>
      )}
    </div>
  )
}
