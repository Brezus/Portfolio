import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import SkillsButton from "../components/common/SkillsButton"
import { nanoid } from "nanoid"
import Projects from "../components/Projects"
import About from "../components/About"
import Header from "../components/Header"
import { client } from "../lib/client"
import { ProjContext } from "../context/ProjContext"
import Footer from "../components/Footer"
import Contact from "../components/Contact"
import Nav from "../components/Nav"

export default function Home({ projects }) {
  return (
    <main className="bg-gray-900 w-full">
      <About />
      <Projects projects={projects} />
      <Contact />
    </main>
  )
}

export async function getServerSideProps() {
  const projects = await client.fetch(`*[_type == "projects"]`)

  return {
    props: {
      projects,
    },
  }
}
