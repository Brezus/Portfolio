import React, { useState } from "react"
import { nanoid } from "nanoid"
import Link from "next/link"

export default function useRenderList(
  array,
  size = "desktop",
  classMob = null,
  class1Desk = null,
  class2Desk = null,
  pathname = null
) {
  console.log(array)
  const [elements, setElements] = useState(
    array.map((item) => {
      return item.toLowerCase() === "resume" ? (
        <li key={nanoid()}>
          <Link
            className={size === "desktop" ? class1Desk : classMob}
            href="https://resume.io/r/bwFS0PXmq"
            target={"_blank"}
          >
            {item}
          </Link>
        </li>
      ) : pathname !== "/" ? (
        <li key={nanoid()}>
          <Link
            className={size === "desktop" ? class2Desk : classMob}
            href={`/#${item}`}
          >
            {item}
          </Link>
        </li>
      ) : (
        <li key={nanoid()}>
          <Link
            className={size === "desktop" ? class1Desk : classMob}
            href={`#${item}`}
          >
            {item}
          </Link>
        </li>
      )
    })
  )

  return [elements]
}
