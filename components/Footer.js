import React from "react"
import { useAppContext } from "../context/ProjContext"
import { nanoid } from "nanoid"
import { useRouter } from "next/router"
import Link from "next/link"

export default function Footer() {
  const router = useRouter()
  const { navArray, socialItems } = useAppContext()
  const footerListItems = navArray.map((item) => {
    return (
      <li key={nanoid()}>
        <Link
          className="hover:text-slate-200 transition-all hover:scale-110 block"
          href={router.pathname !== "/" ? `/#${item}` : `#${item}`}
        >
          {item}
        </Link>
      </li>
    )
  })
  return (
    <footer className="w-full bg-neutral-900 text-slate-50 py-10">
      <ul className="flex justify-between w-11/12 text-left mx-auto flex-wrap gap-5">
        <li className="w-full md:w-auto text-center md:flex-1">
          <p className="font-bold text-xl text-white">Roshane Miller</p>
          <p className="font-mono neutral-col">
            created and developed with care
          </p>
          <p className="font-mono neutral-col">c 2022 - 2023</p>
        </li>
        <li className={`md:flex-1 w-full`}>
          <p className="font-bold text-xl text-white text-center">links</p>
          <ul className="flex gap-3 neutral-col justify-center md:flex-col md:items-center lg:flex-row">
            {footerListItems}
          </ul>
        </li>
        <li className="md:flex-1 w-full text-center">
          <p className="font-bold text-xl text-white">socials</p>
          <ul className="socials-cont">{socialItems}</ul>
        </li>
      </ul>
    </footer>
  )
}
