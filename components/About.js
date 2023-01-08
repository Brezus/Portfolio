import React from "react"
import Image from "next/image"
import SkillsButton from "./common/SkillsButton"
import profPhoto from "../assets/me3.jpeg"
import { nanoid } from "nanoid"

export default function About() {
  const mySkills = [
    "HTML",
    "CSS",
    "JS",
    "REACT",
    "NEXT JS",
    "SANITY IO",
    "FIREBASE",
    "GIT",
    "GITHUB",
    "STYLED COMPONENTS",
    "TAILWIND",
    "FIREBASE",
    "STRIPE",
  ]
  return (
    <>
      <article
        id="about"
        className="pb-8 pt-8 shadow-2xl rounded-lg items-center justify-center bg-gradient-to-r from-white to-slate-200 text-slate-900 w-11/12 mx-auto relative bottom-36 flex flex-wrap gap-5 flex-col-reverse"
      >
        <h2 className="absolute left-0 -top-7 font-black text-3xl text-slate-50 tracking-widest">
          About Me
        </h2>
        <div className="absolute overflow-hidden shadow-xl h-28 w-28 rounded-full flex items-center -bottom-32">
          <Image src={profPhoto} alt={"a photo of me"} />
        </div>
        <section className="w-5/6 flex flex-col gap-2 items-center">
          <h2 className="font-bold text-2xl text-gray-800">My Skills</h2>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {mySkills.map((skill) => (
              <p
                className="cursor-auto font-medium px-5 py-2 bg-gradient-to-r from-lime-500 to-lime-600  text-white text-xs md:text-lg rounded shadow-lg"
                key={nanoid()}
              >
                {skill}
              </p>
            ))}
          </div>
        </section>
        <section className="w-5/6 flex flex-col gap-2 items-center">
          <h2 className="font-bold text-2xl text-gray-800">Background</h2>
          <p className="w-4/5 text-base text-slate-500 font-mono">
            Completed Scrimba&#39;s Frontend Developer Career Path and several
            other coding challenges online. I have been teaching myself to code
            since 2019 and completed several design and development challenges
            on{" "}
            <a
              target={"_blank"}
              rel="noreferrer"
              href={"https://www.frontendmentor.io/profile/Brezus"}
            >
              frontendmentor.com
            </a>{" "}
            some of those challenges are featured here in this portfolio.
          </p>
        </section>
        {/* <section className="w-5/6 flex flex-col gap-2 items-center">
          <h2 className="font-bold text-2xl">Introduction</h2>
          <p className="w-4/5 text-base">
            Welcome to my web development portfolio! I have been coding since
            high school and have a passion for creating functional and visually
            appealing websites. In my spare time, I enjoy watching anime and
            keeping up with the latest trends in web development. Please take a
            look at some of my recent projects to get an idea of my skills and
            style. I hope you enjoy what you see and feel free to contact me
            with any questions or opportunities. Thank you!
          </p>
        </section> */}
      </article>
    </>
  )
}
