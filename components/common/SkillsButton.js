import React from "react"

export default function SkillsButton({ children, buttonHref }) {
  return (
    <a
      href={buttonHref}
      target={"_blank"}
      rel="noreferrer"
      className="duration-300 ease-in relative block -z-neg1 py-3 border-2 border-solid border-slate-900 rounded outline-none before:transition-all before:duration-500 before:ease-in before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0 before:opacity-0 before:content-[''] before:bg-slate-900 hover:before:transition-all hover:before:duration-500 hover:before:ease-in hover:before:left-0 hover:before:right-0 hover:before:opacity-100 hover:before:z-neg1 hover:text-white hover:font-bold hover:tracking-widest"
    >
      {children}
    </a>
  )
}
