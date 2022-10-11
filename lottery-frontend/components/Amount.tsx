import { useState } from "react";
import { useBalance } from "wagmi";
import { useAccount } from "wagmi";

import SubmitButton from "./SubmitButton";

export default function Amount() {
  const [value, setValue] = useState("0");
  const handleChange = (event: any) => {
    if (event.target.value === "") {
      setValue("0");
    } else {
      setValue(event.target.value.toString());
    }
  };

  const { address, isConnecting, isDisconnected } = useAccount();

  const { data, isError, isLoading } = useBalance({
    addressOrName: address,
  });

  return (
    <div>
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
          placeholder={data ? data.formatted.substring(0, 4) : "0.0"}
        />
      </div>
      <SubmitButton toSpend={value} isDisconnected={isDisconnected} />
    </div>
  );
}
