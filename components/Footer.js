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
      <li key={nanoid()}>
        <a href={item.url}>{item.icon}</a>
      </li>
    )
  })
  const footerListItems = navArray.map((item) => {
    return (
      <li key={nanoid()}>
        <a className="" href={`#${item}`}>
          {item}
        </a>
      </li>
    )
  })
  return (
    <footer className="w-full bg-slate-900 text-slate-50 py-5">
      <ul className="flex justify-between w-11/12 text-left mx-auto">
        <li className="flex-1">
          <p className="font-bold text-xl text-slate-200">Roshane Miller</p>
          <p className="font-mono">created and developed with care</p>
          <p className="font-mono">c 2022 - 2023</p>
        </li>
        <li className="flex-1">
          <p className="font-bold text-xl text-slate-200">links</p>
          <ul>{footerListItems}</ul>
        </li>
        <li className="flex-1">
          <p className="font-bold text-xl text-slate-200">socials</p>
          <ul className="flex justify-between">{footerSocialsItems}</ul>
        </li>
      </ul>
    </footer>
  )
}
