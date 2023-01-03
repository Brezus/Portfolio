import React from "react"

export default function SkillsButton({ children }) {
  return (
    <button className="cursor-auto font-medium px-5 py-2 bg-green-500 text-gray-800 text-xs md:text-lg rounded">
      {children}
    </button>
  )
}
