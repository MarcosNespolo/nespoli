import { CurrencyDollarIcon } from "@heroicons/react/solid"
import React, { useState } from "react"

export type InputTextProps = {
  text?: string;
  className?: string;
}

export default function InputText(props: InputTextProps) {

  return (
    <input
      type="text"
      name="text"
      id="text"
      className={`appearance-none block mt-2 mb-4 w-full h-9 px-3 py-2 mb-1 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 text-gray-500 focus:text-gray-900 focus:outline-none focus:ring-0 focus:border-primary text-sm ${props.className}`}
      defaultValue={props.text}
    />
  )
}