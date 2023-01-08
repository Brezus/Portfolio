import React, { useState } from "react"
import Link from "next/link"
import { useAppContext } from "../context/ProjContext"

export default function Nav() {
  const { toggleMenu, setToggleMenu } = useAppContext()
  return (
    <nav className=" font-light text-gray-700 flex justify-between items-center w-11/12 mx-auto">
      {/* <ul className="flex gap-2">
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <button>Contact Me</button>
      </ul> */}

      <button
        class={`${toggleMenu ? "change" : "container"}`}
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </button>
      <div
        className={`${
          toggleMenu
            ? "block  text-white fixed left-0 z-20 top-0 bottom-0 bg-rose-500 right-0 py-12"
            : "hidden"
        }`}
      >
        <ul className="flex gap-6 flex-col items-center justify-center">
          <li>
            <a className="list-item" href="#">
              About me
            </a>
          </li>
          <li>
            <a className="list-item" href="#">
              Projects
            </a>
          </li>
          <li>
            <a className="list-item" href="#">
              Resume
            </a>
          </li>
          <li>
            <a className="list-item" href="#">
              Contact
            </a>
          </li>
          {/* <button>Contact Me</button> */}
        </ul>
      </div>
      <Link
        className="font-bold text-slate-50 ml-auto text-lg tracking-[.25em]"
        href={"/"}
      >
        &lt;R. Mi<span className="text-lime-300">ll</span>er/&gt;
      </Link>
    </nav>
  )
}
