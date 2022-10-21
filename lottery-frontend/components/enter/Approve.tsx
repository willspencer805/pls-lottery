import {
  useContractWrite,
  useContractRead,
  usePrepareContractWrite,
  useAccount,
  useWaitForTransaction,
} from 'wagmi'
import { abi } from '../../utils/abi.js'
import { abi721 } from '../../utils/721abi.js'
import { BigNumber, ethers } from 'ethers'
import { useCallback, useEffect, useState } from 'react'
import Submit from './Submit'

export default function SubmitButton({
  amount,
  entryPrice,
}: {
  amount: string
  entryPrice: number
}) {
  const bigAssNumber = ethers.utils.parseEther((2 ** 56 - 1).toString())
  const [approved, setApproved] = useState(false)
  const [confirmed, setConfirmed] = useState(false)
  const [allowance, setAllowance] = useState('0')
  const { address, isConnecting, isDisconnected } = useAccount()

  var { data, isError, isLoading } = useContractRead({
    addressOrName: '0xF80B284285B8Fa0DE7E7808994184Aa2000fb874',
    contractInterface: abi,
    functionName: 'allowance',
    args: [address, '0x71893F19cd598653d042d4601c38e01Cc968a4DB'],
    chainId: 5,
    onSuccess(data: any) {
      setAllowance(data.toString())
    },
  })

  const amountToApprove = ethers.utils.parseEther(amount)
  useEffect(() => {
    console.log('Approved at effect: ', approved)
    if (BigNumber.from(allowance) >= amountToApprove) {
      setApproved(true)
    } else {
      setApproved(false)
    }
  }, [amountToApprove, approved, allowance])

  const { config } = usePrepareContractWrite({
    addressOrName: '0xF80B284285B8Fa0DE7E7808994184Aa2000fb874',
    contractInterface: abi,
    functionName: 'approve',
    args: ['0x71893F19cd598653d042d4601c38e01Cc968a4DB', bigAssNumber],
    chainId: 5,
  })
  const contractWrite = useContractWrite({
    ...config,
    onSuccess(data: any) {
      console.log(
        `View transaction here www.goerli.etherscan.io/tx/${data?.hash}`
      )
    },
    onError(error: any) {
      alert(`Please try again:\n ${error}`)
    },
  })

  const waitForTransaction = useWaitForTransaction({
    hash: contractWrite.data?.hash,
    onSuccess(data: any) {
      console.log('Approved successfully')
      setConfirmed(true)
      console.log('Approved after confirmation: ', confirmed)
    },
  })

  return (
    <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
      <div className="justify-center ">
        {!approved ? (
          waitForTransaction.isLoading ? (
            <button
              disabled={true}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
            >
              Approving...
            </button>
          ) : confirmed ? (
            <>
              <button
                disabled={true}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 opacity-50 cursor-not-allowed"
              >
                Approve
              </button>
            </>
          ) : (
            <button
              onClick={() => contractWrite.write?.()}
              className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
            >
              {isDisconnected ? 'Please Connect your Wallet' : 'Approve'}
            </button>
          )
        ) : (
          <button
            disabled={true}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 md:py-4 md:text-lg md:px-10 opacity-50 cursor-not-allowed"
          >
            Approve
          </button>
        )}
        <Submit
          amount={amount}
          entryPrice={entryPrice}
          isApproved={approved || confirmed}
        />
      </div>
    </div>
  )
}
