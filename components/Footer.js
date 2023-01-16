import React from "react"
import { useAppContext } from "../context/ProjContext"
import { nanoid } from "nanoid"
import { BsLinkedin, BsDiscord, BsGithub } from "react-icons/bs"

export default function Footer() {
  const { navArray } = useAppContext()
  const footerSocials = [
    {
      name: "linkedIn",
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/in/roshane-miller-384416167/",
    },
    {
      name: "discord",
      icon: <BsDiscord />,
      url: "discordapp.com/users/roshane#5738",
    },
    { name: "github", icon: <BsGithub />, url: "https://github.com/Brezus" },
  ]
  //   BsLinkedin, BsDiscord, BsGithub
  const footerSocialsItems = footerSocials.map((item) => {
    return (
      <li
        className="hover:text-slate-200 transition-all hover:scale-110"
        key={nanoid()}
      >
        <a href={item.url}>{item.icon}</a>
      </li>
    )
  })
  const footerListItems = navArray.map((item) => {
    return (
      <li key={nanoid()}>
        <a
          className="hover:text-slate-200 transition-all hover:scale-110 block"
          href={`#${item}`}
        >
          {item}
        </a>
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
        <li className="md:flex-1 w-full">
          <p className="font-bold text-xl text-white text-center">links</p>
          <ul className="flex gap-3 neutral-col justify-center md:flex-col md:items-center lg:flex-row">
            {footerListItems}
          </ul>
        </li>
        <li className="md:flex-1 w-full text-center">
          <p className="font-bold text-xl text-white">socials</p>
          <ul className="flex justify-center neutral-col gap-4 mt-1">
            {footerSocialsItems}
          </ul>
        </li>
      </ul>
    </footer>
  )
}
