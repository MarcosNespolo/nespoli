import type { AppProps } from 'next/app'
import React from 'react'
import Head from "next/head";
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className="flex flex-col justify-between h-screen w-full bg-gradient-to-b bg-opacity-10 from-black to-primary-dark">
        <span className="self-center mt-12 antialiased font-extralight text-blue-50 tracking-widest text-md ">Em breve</span>
        <div className="flec flex-col self-center w-full content-center">
          <span className="block w-full text-center mb-4 antialiased font-extralight text-blue-100 text-6xl tracking-widest">Nespoli</span>
          <span className="block w-full text-center antialiased font-thin text-blue-50 tracking-widest text-xl ">Software Development</span>
          <Component {...pageProps} />
        </div>
        <span className="self-center mb-12 antialiased font-extralight text-blue-50 tracking-widest text-md ">contato@nespoli.dev</span>
      </div>
    </>
  )
}

export default MyApp
