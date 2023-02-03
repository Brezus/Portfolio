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
          className="text-lime-500 transition-all hover:scale-110 block"
          href={
            item.toLowerCase() === "resume"
              ? "https://docs.google.com/document/d/1CGVbqqJJFjtXyByBq8V49l0kqL3YGjic/edit?usp=share_link&ouid=110242115225325932551&rtpof=true&sd=true"
              : router.pathname !== "/"
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
    <footer className="w-full bg-gray-900 text-slate-50 py-20">
      <ul className="flex justify-between w-11/12 text-left mx-auto flex-wrap gap-5">
        <li className="w-full md:w-auto text-center md:flex-1">
          <p className="font-bold text-xl text-white">Roshane Miller</p>
          <p className="font-mono neutral-col">
            created and developed with care
          </p>
          <p className="font-mono neutral-col">© 2022 - 2023</p>
        </li>
        <li className={`md:flex-[2] w-full`}>
          <p className="font-bold text-xl text-white text-center">links</p>
          <ul className="flex gap-5 neutral-col justify-center md:flex-col md:items-center lg:flex-row">
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
