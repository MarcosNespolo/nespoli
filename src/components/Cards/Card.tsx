import React from "react"

export type CardProps = {
  children?: object;
  className?: string;
}
export default function Card(props: CardProps) {

  return (
    <div className={`bg-white shadow overflow-hidden rounded-md ${props.className}`}>
      {props.children}
    </div>
  )
}