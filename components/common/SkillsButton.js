import React from "react"

export default function SkillsButton({ children, buttonType = "skills" }) {
  return (
    // <button className="cursor-auto font-medium px-5 py-2 bg-gradient-to-r from-lime-500 to-lime-600  text-white text-xs md:text-lg rounded shadow-md">
    //   {children}
    // </button>
    <div className="relative font-mono">
      <button
        className={`${
          buttonType === "skills"
            ? "cursor-auto font-medium px-5 py-2 bg-gradient-to-r from-lime-500 to-lime-600  text-white text-xs md:text-lg rounded shadow-lg"
            : "buttonAnimation"
        }`}
      >
        {children}
      </button>
    </div>
  )
}
