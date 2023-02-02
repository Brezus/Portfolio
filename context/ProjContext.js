import { createContext, useContext, useState, useEffect } from "react"
import { BsLinkedin, BsDiscord, BsGithub } from "react-icons/bs"
import { nanoid } from "nanoid"
import SocialList from "../components/common/SocialList"

const AppContext = createContext()

export function ProjContext({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false)
  const closeMenu = () => setToggleMenu(false)
  const navArray = ["resume", "about", "projects", "contact"]
  const socials = [
    {
      name: "linkedIn",
      icon: <BsLinkedin />,
      url: "https://www.linkedin.com/in/roshane-miller-384416167/",
    },
    {
      name: "discord",
      icon: <BsDiscord />,
      url: "https://discord.com/users/roshane#5738",
    },
    { name: "github", icon: <BsGithub />, url: "https://github.com/Brezus" },
  ]
  const socialItems = socials.map((item) => {
    return (
      <SocialList key={nanoid()}>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.icon}
        </a>
      </SocialList>
    )
  })
  const socialItemsContact = socials.map((item) => {
    return (
      <SocialList shade="dark" key={nanoid()}>
        <a href={item.url} target="_blank" rel="noreferrer">
          {item.icon}
        </a>
      </SocialList>
    )
  })

  return (
    <AppContext.Provider
      value={{
        toggleMenu,
        setToggleMenu,
        closeMenu,
        navArray,
        socialItems,
        socialItemsContact,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  return useContext(AppContext)
}
