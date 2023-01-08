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

export default function Home({ projects }) {
  return (
    <div className="relative text-gray-800 min-h-full bg-rose-300 flex flex-col items-center text-center font-sans">
      <ProjContext>
        <Head>
          <title>Roshanes Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <main className="bg-gray-900 w-full">
          <About />
          <Projects projects={projects} />
        </main>

        <footer className="w-5/6"></footer>
      </ProjContext>
    </div>
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
