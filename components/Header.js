import React from "react"
import Nav from "./Nav"

export default function Header() {
  return (
    <header className="bg-[url('../assets/bg4.jpg')] bg-no-repeat bg-cover bg-bottom pt-7 relative">
      <Nav />
      <div className="w-11/12 flex flex-col gap-4 text-left pb-56 pt-7 mx-auto">
        <h1 className="text-6xl font-bold mt-16 ">
          Hello world i&apos;m{" "}
          <span className="block">
            &lt;Roshane Mi<span className="text-lime-400">ll</span>er/&gt;
          </span>{" "}
          <span>Web Developer</span>
        </h1>
        <p className="font-light text-lg font-mono text-slate-50">
          Former digital artist turned web developer on a constant learning
          path.
        </p>
      </div>
    </header>
  )
}
