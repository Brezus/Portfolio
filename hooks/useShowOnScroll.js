import { useState, useEffect } from "react"

export default function useShowOnScroll() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
    }
    window.addEventListener("scroll", updatePosition)

    updatePosition()
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return { scrollPosition }
}
