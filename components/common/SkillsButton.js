import React from "react"

export default function SkillsButton({ children }) {
  return (
    <button className="px-7 py-2 bg-gray-900 text-emerald-50 text-xs md:text-lg rounded">
      {children}
    </button>
  )
}
