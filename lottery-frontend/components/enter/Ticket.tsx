import ticket from '../../styles/images/placeholder.png'
import Image from 'next/image'
import { abi721 } from '../../utils/721abi'
import { useContractRead } from 'wagmi'
import { useState } from 'react'

export default function Ticket() {
  const [supply, setSupply] = useState('0')
  const contractRead = useContractRead({
    addressOrName: '0x71893F19cd598653d042d4601c38e01Cc968a4DB',
    contractInterface: abi721,
    functionName: 'totalSupply',
    chainId: 5,
    onSuccess(data: any) {
      setSupply(data.toString())
    },
  })
  return (
    <div className="justify-center py-4 justify-center">
      <br></br>
      <div className="text-center -mb-4 text-gray-500 sm:text-lg ">
        <b>Current Entries:</b> {supply}
        {'          '}
        <b>Max Entries:</b> 200
      </div>
      <div className="flex justify-center py-8">
        <Image
          src={ticket}
          alt="ticket"
          width={300}
          height={300}
          className="rounded-lg my-10"
        />
      </div>
    </div>
  )
}
