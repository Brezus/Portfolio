import React, { useState } from "react"
import Link from "next/link"

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className=" font-light text-gray-700 flex justify-between items-center w-11/12 mx-auto">
      {/* <ul className="flex gap-2">
        <li>
          <a href="#">About me</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <button>Contact Me</button>
      </ul> */}
      <div
        class={`${toggleMenu ? "change" : "container"}`}
        onClick={() => setToggleMenu((prev) => !prev)}
      >
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </div>
      <Link className="font-bold flex-1" href={"/"}>
        &lt;R. Miller/&gt;
      </Link>
    </nav>
  )
}
