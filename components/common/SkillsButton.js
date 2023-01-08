import React from "react"

export default function SkillsButton({ children, buttonHref }) {
  return (
    <a href={buttonHref} target={"_blank"} rel="noreferrer" className="btn">
      {children}
    </a>
  )
}
