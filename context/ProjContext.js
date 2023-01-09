import { createContext, useContext } from "react"
import { useState } from "react"

const AppContext = createContext()

export function ProjContext({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const closeMenu = () => setToggleMenu(false)
  const navArray = ["resume", "about", "projects", "contact"]

  return (
    <AppContext.Provider
      value={{ toggleMenu, setToggleMenu, closeMenu, navArray }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
