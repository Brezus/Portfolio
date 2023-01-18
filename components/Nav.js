import React, { useState } from "react"
import Link from "next/link"
import { useAppContext } from "../context/ProjContext"
import { nanoid } from "nanoid"
import randomGuy from "../assets/rando.png"
import Image from "next/image"
import { useRouter } from "next/router"

export default function Nav() {
  const { pathname } = useRouter()
  const { toggleMenu, setToggleMenu, closeMenu, navArray } = useAppContext()
  const navListItemsMobile = navArray.map((item) => {
    return pathname !== "/" ? (
      <li key={nanoid()}>
        <Link
          onClick={closeMenu}
          className="list-item capitalize"
          href={`/#${item}`}
        >
          {item}
        </Link>
      </li>
    ) : (
      <li key={nanoid()}>
        <Link
          onClick={closeMenu}
          className={`list-item capitalize`}
          href={`#${item}`}
        >
          {item}
        </Link>
      </li>
    )
  })
  const navListItemsDesk = navArray.map((item) => {
    return pathname !== "/" ? (
      <li key={nanoid()}>
        <Link className="list-item-desk capitalize" href={`/#${item}`}>
          {item}
        </Link>
      </li>
    ) : (
      <li key={nanoid()}>
        <Link className={`list-item capitalize`} href={`#${item}`}>
          {item}
        </Link>
      </li>
    )
  })
  return (
    <nav className=" font-light text-gray-700 flex justify-between items-center w-11/12 mx-auto md:z-21">
      <ul className="gap-4 text-white text-lg font-normal hidden md:flex">
        {navListItemsDesk}
      </ul>

      <button
        className={`${toggleMenu ? "change" : "container"}`}
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <div className="bar1 sm:bg-white"></div>
        <div className="bar2 sm:bg-white"></div>
        <div className="bar3 sm:bg-white"></div>
      </button>
      <div
        className={`${
          toggleMenu
            ? "block text-white fixed left-0 z-20 top-0 bottom-0 bg-rose-500 right-0"
            : "hidden"
        }`}
      >
        <ul className="flex gap-6 flex-col items-center justify-center pt-12">
          {navListItemsMobile}
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
