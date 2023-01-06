import React from "react"

export default function Nav() {
  return (
    <nav className="absolute top-6 left-2/4 -translate-x-1/2 font-light text-gray-800 flex justify-between w-5/6 ">
      <ul className="flex gap-2">
        <li>About me</li>
        <li>Projects</li>
      </ul>
      <a className="font-bold" href={"#"}>
        &lt;R. Miller/&gt;
      </a>
      <button>Contact Me</button>
    </nav>
  )
}
