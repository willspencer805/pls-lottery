import { useState } from 'react'
import { useContractRead, useAccount } from 'wagmi'
import { abi } from '../../utils/abi.js'

import Approve from './Approve'

export default function Amount() {
  const entryPrice = 10
  const [value, setValue] = useState('0')
  const [balance, setBalance] = useState('0')
  const handleChange = (event: any) => {
    if (event.target.value === '') {
      setValue('0')
    } else {
      setValue((event.target.value * entryPrice).toString())
    }
  }

  const { address, isConnecting, isDisconnected } = useAccount()
  const { data, isError, isLoading } = useContractRead({
    addressOrName: process.env.NEXT_PUBLIC_PLS_CONTRACT as string,
    contractInterface: abi,
    functionName: 'balanceOf',
    args: address,
    chainId: 5,
    onSuccess(data) {
      setBalance(((data as unknown as number) / 10 ** 18).toString())
    },
  })

  return (
    <div className="bg-white" id="start">
      <div className="max-w-7xl mx-auto py-13 px-4 sm:px-6 lg:py-13 lg:px-8 w-1/2">
        <div className="relative mt-1 rounded-md shadow-sm  ">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span className="text-gray-500 sm:text-sm">Ξ</span>
          </div>
          <input
            type="number"
            onChange={handleChange}
            name="price"
            id="price"
            className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
            placeholder="0"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault()
              }
            }}
          />
        </div>
        <label
          htmlFor="price"
          className="block text-sm font-medium text-gray-700 items-center text-center"
        >
          PLS to Spend:{' '}
          <b className="text-sm font-medium text-teal-700 items-center">
            {value as unknown as number}{' '}
          </b>
          Your balance:{' '}
          <b className="text-sm font-medium text-teal-700 items-center">
            {' ' + balance}{' '}
          </b>
          PLS
        </label>
        <Approve amount={value} entryPrice={entryPrice} />
      </div>
    </div>
  )
}
