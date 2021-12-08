import { CheckIcon } from "@heroicons/react/solid"
import React from "react"

export type PrimaryButtonProps = {
  label: string;
}

export default function PrimaryButton(props: PrimaryButtonProps) {
  return (
    <div className="h-9 flex flex-wrap content-end col-span-1 mt-1 lg:col-span-1">
      <button
        type="button"
        className="h-9 w-full bg-primary rounded-md shadow-md text-sm font-medium text-white transition duration-200 ease-in-out transform hover:shadow-sm hover:bg-opacity-80">
        <div className="inline-flex items-center">
          {props.label}
        </div>
      </button>
    </div>
  )
}
