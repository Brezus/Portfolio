import React, { useState, useEffect } from "react"
import Link from "next/link"
import { useAppContext } from "../context/ProjContext"
import { nanoid } from "nanoid"
import randomGuy from "../assets/rando.png"
import Image from "next/image"
import { useRouter } from "next/router"
import useRenderList from "../hooks/useRenderList"
import useWindowSize from "../hooks/useWindowSize"

export default function Nav() {
  const { pathname } = useRouter()
  const { toggleMenu, setToggleMenu, closeMenu, navArray } = useAppContext()
  const { width } = useWindowSize()
  useEffect(() => {
    if (width > 768) {
      closeMenu()
    }
  }, [width])
  const navListItemsMobile = navArray.map((item) => {
    return (
      <li key={nanoid()}>
        <Link
          onClick={closeMenu}
          className="list-item capitalize"
          href={
            item.toLowerCase() === "resume"
              ? "https://drive.google.com/file/d/1jJ4jh-G8jXuY0clH79UQ7W_kraMjkbI5/view?usp=share_link"
              : pathname !== "/"
              ? `/#${item}`
              : `#${item}`
          }
          target={`${item.toLowerCase() === "resume" ? "_blank" : ""}`}
        >
          {item}
        </Link>
      </li>
    )
  })
  const navListItemsDesk = navArray.map((item) => {
    return (
      <li key={nanoid()}>
        <Link
          className="list-item capitalize md:text-lg"
          href={
            item.toLowerCase() === "resume"
              ? "https://drive.google.com/file/d/1jJ4jh-G8jXuY0clH79UQ7W_kraMjkbI5/view?usp=share_link"
              : pathname !== "/"
              ? `/#${item}`
              : `#${item}`
          }
          target={`${item.toLowerCase() === "resume" ? "_blank" : ""}`}
        >
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
        <div
          className={`w-[35px] h-[5px] my-[6px] transition duration-300 ${
            toggleMenu ? "translate-y-[10px] -rotate-45" : ""
          } ${pathname !== "/" ? "bg-white" : "bg-gray-700"}  sm:bg-white `}
        ></div>
        <div
          className={`w-[35px] h-[5px] my-[6px] transition duration-300 ${
            toggleMenu && "hidden"
          } ${pathname !== "/" ? "bg-white" : "bg-gray-700"}  sm:bg-white `}
        ></div>
        <div
          className={`w-[35px] h-[5px] my-[6px] transition duration-300 ${
            toggleMenu ? "-translate-y-1 rotate-45" : ""
          } ${pathname !== "/" ? "bg-white" : "bg-gray-700"}  sm:bg-white `}
        ></div>
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
