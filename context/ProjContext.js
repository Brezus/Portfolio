import { createContext, useContext } from "react"
import { useState } from "react"

const AppContext = createContext()

export function ProjContext({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <AppContext.Provider value={{ toggleMenu, setToggleMenu }}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
