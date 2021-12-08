import type { NextPage } from 'next'
import React from 'react'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-between h-screen w-full bg-gradient-to-b bg-opacity-10 from-black to-primary-dark">
      <span className="self-center mt-12 antialiased font-extralight text-blue-50 tracking-widest text-md ">Em breve</span>
      <div className="flec flex-col self-center w-full content-center">
        <span className="block w-full text-center mb-4 antialiased font-extralight text-blue-100 text-6xl tracking-widest">Nespoli</span>
        <span className="block w-full text-center antialiased font-thin text-blue-50 tracking-widest text-xl ">Software Development</span>
      </div>
      <span className="self-center mb-12 antialiased font-extralight text-blue-50 tracking-widest text-md ">contato@nespoli.dev</span>
    </div>
  )
}

export default Home
