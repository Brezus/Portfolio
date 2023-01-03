import React from "react"

export default function Nav() {
  return (
    <nav className="font-light text-gray-700 flex justify-between w-5/6 mt-5 mx-auto">
      <ul className="flex gap-2">
        <li>About me</li>
        <li>Projects</li>
      </ul>
      <a className="font-bold" href={"#"}>
        &lt;Roshane Miller/&gt;
      </a>
      <button>Contact Me</button>
    </nav>
  )
}
