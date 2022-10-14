import { useState } from 'react'
import { useBalance } from 'wagmi'
import { useAccount } from 'wagmi'

import SubmitButton from './SubmitButton'

export default function Amount() {
  const [value, setValue] = useState('0')
  const handleChange = (event: any) => {
    if (event.target.value === '') {
      setValue('0')
    } else {
      setValue(event.target.value.toString())
    }
  }

  const { address, isConnecting, isDisconnected } = useAccount()

  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  })

  return (
    <div className="bg-white" id="start">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get started
            </h2>
            <p className="mt-4 text-lg text-gray-500">Buy some entry tokens!</p>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-2">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              ETH to Deposit:
            </label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">Ξ</span>
              </div>
              <input
                type="number"
                onChange={handleChange}
                name="price"
                id="price"
                className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder={data ? data.formatted.substring(0, 4) : '0.0'}
              />
            </div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700 items-center"
            >
              <br></br>
              <br></br>
              PLS to Receive:{' '}
              <b className="text-sm font-medium text-indigo-700 items-center">
                {(value as unknown as number) * 100}
              </b>
            </label>
            <SubmitButton toSpend={value} isDisconnected={isDisconnected} />
          </div>
        </div>
      </div>
    </div>
  )
}

//   return (
//     <div id="start">
//       <label
//         htmlFor="price"
//         className="block text-sm font-medium text-gray-700"
//       >
//         ETH to Deposit:
//       </label>
//       <div className="relative mt-1 rounded-md shadow-sm">
//         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//           <span className="text-gray-500 sm:text-sm">Ξ</span>
//         </div>
//         <input
//           type="number"
//           onChange={handleChange}
//           name="price"
//           id="price"
//           className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//           placeholder={data ? data.formatted.substring(0, 4) : '0.0'}
//         />
//       </div>
//       <label
//         htmlFor="price"
//         className="block text-sm font-medium text-gray-700 items-center"
//       >
//         <br></br>
//         PLS to Receive:{' '}
//         <b style={{ fontWeight: 'bold' }}>
//           {(value as unknown as number) * 100}
//         </b>
//       </label>
//       <SubmitButton toSpend={value} isDisconnected={isDisconnected} />
//     </div>
//   )
// }
