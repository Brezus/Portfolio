import React, { useState } from "react"
import { useRouter } from "next/router"

export default function Header({ children }) {
  const router = useRouter()
  return (
    <header
      className={`bg-[url('../assets/bg4.jpg')] sm:bg-[url('../assets/bg8.jpg')] bg-no-repeat bg-cover bg-bottom sm:bg-center relative w-full ${
        router.pathname === "/"
          ? " pt-7"
          : "py-8 flex justify-center items-center"
      }`}
    >
      {children}
      <div
        className={`w-11/12 flex flex-col gap-4 text-left  ${
          router.pathname === "/" ? "pt-7 pb-56" : "hidden"
        } mx-auto`}
      >
        <h1 className={`text-6xl font-bold mt-16 sm:text-white`}>
          Hello world i&apos;m{" "}
          <span className="block">
            &lt;Roshane Mi<span className="text-lime-400">ll</span>er/&gt;
          </span>{" "}
          <span>Web Developer</span>
        </h1>
        <p className="font-light text-lg font-mono text-slate-50 sm:text-slate-400">
          Former digital artist turned web developer on a constant learning
          path.
        </p>
      </div>
    </header>
  )
}
