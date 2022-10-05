import { useState } from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { abi } from "../utils/abi.js";
import { ethers } from "ethers";

export default function Amount() {
  const [value, setValue] = useState("0");
  const handleChange = (event: any) => {
    setValue((event.target.value / 100).toString());
  };

  const { config } = usePrepareContractWrite({
    addressOrName: "0xF80B284285B8Fa0DE7E7808994184Aa2000fb874",
    contractInterface: abi,
    functionName: "buyTokens",
    overrides: {
      value: ethers.utils.parseEther(value.toString()),
    },
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return (
    <div>
      <label
        htmlFor="price"
        className="block text-sm font-medium text-gray-700"
      >
        Tokens to Purchase:
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
          placeholder="0.00"
        />
      </div>
      <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
        <div className="rounded-md shadow">
          <button
            disabled={isLoading}
            onClick={() => write?.()}
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
