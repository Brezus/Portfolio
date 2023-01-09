import React, { useState } from "react"
import Link from "next/link"
import { useAppContext } from "../context/ProjContext"
import { nanoid } from "nanoid"
import randomGuy from "../assets/rando.png"
import Image from "next/image"

export default function Nav() {
  const { toggleMenu, setToggleMenu, closeMenu, navArray } = useAppContext()
  const navListItems = navArray.map((item) => {
    return (
      <li key={nanoid()}>
        <a
          onClick={closeMenu}
          className="list-item capitalize"
          href={`#${item}`}
        >
          {item}
        </a>
      </li>
    )
  })
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
            ? "block text-white fixed left-0 z-20 top-0 bottom-0 bg-rose-500 right-0"
            : "hidden"
        }`}
      >
        <ul className="flex gap-6 flex-col items-center justify-center pt-12">
          {navListItems}
          {/* <div className="w-2/3: flex justify-center items-center absolute bottom-0">
            <div className="relative">
              <div className="bd"></div>
              <Image
                className="w-full block"
                src={randomGuy}
                alt={"a photo of me"}
              />
            </div>
          </div> */}
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
