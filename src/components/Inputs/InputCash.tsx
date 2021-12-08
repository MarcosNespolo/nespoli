import { CurrencyDollarIcon } from "@heroicons/react/solid"
import React, { useState } from "react"

export type InputCashProps = {
  cash: string;
}

export default function InputCash(props: InputCashProps) {

  const [cash, setCash] = useState<string>(props.cash.replace(/[\D]+/g, '').replace(/^0+/, '').replace(/([0-9]{2})$/g, ",$1"));

  return (
    <div className="relative w-full rounded-md shadow-sm text-gray-500 mb-1 focus-within:text-primary">
      <div className="text-current font-medium text-xs absolute inset-y-0 left-0 pt-0.5 pl-3 flex items-center pointer-events-none">
        R$
      </div>
      <input
        type="text"
        name="cash"
        id="cash"
        className="appearance-none block w-full h-9 pl-7 pr-10 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-gray-500 focus:text-gray-900 focus:outline-none focus:ring-0 focus:border-primary text-sm"
        value={cash ? cash : '0'}
        onChange={(e) => {
          let num = e.target.value.replace(/[\D]+/g, '').replace(/^0+/, '')

          if (num.length < 1) {
            num = '000' + num
          } else if (num.length == 1) {
            num = '00' + num
          } else if (num.length == 2) {
            num = '0' + num
          }

          num = num.replace(/([0-9]{2})$/g, ",$1")

          if (num.length > 6) {
            num = num.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
          }
          setCash(num)
        }}
      />
      <div className="absolute inset-y-0 right-0 pr-3 pt-0 flex items-center pointer-events-none">
        <CurrencyDollarIcon className="h-4 w-4 text-current" aria-hidden="true" />
      </div>
    </div>
  )
}