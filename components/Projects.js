import React from "react"
import { nanoid } from "nanoid"
import { urlFor } from "../lib/client"
import Image from "next/image"
import Link from "next/link"
import SkillsButton from "./common/SkillsButton"

export default function Projects({ projects }) {
  console.log(projects)
  const projectsHtml = projects.map((project) => {
    return (
      <section
        className="flex flex-col justify-center w-11/12 max-w-md"
        key={nanoid()}
      >
        <h3 className="mb-5 font-bold text-rose-400">{project?.name}</h3>

        <div className="gap-5 grid grid-rows-[1fr_auto] w-full ">
          <img
            className="rounded-lg w-full object-contain h-auto"
            src={urlFor(project.projectImage).url()}
            alt={"project"}
          />
          <ul
            className={`${
              project?.repo
                ? "flex justify-between flex-wrap gap-4"
                : "flex justify-between"
            }`}
          >
            <li
              className={`${
                project?.repo ? "font-semibold w-full" : "font-semibold"
              }`}
            >
              <SkillsButton buttonHref={project?.liveSite}>
                Live Site
              </SkillsButton>
            </li>
            <li className="font-semibold w-2/5">
              {project?.repo ? (
                <SkillsButton buttonHref={project?.repo}>Github</SkillsButton>
              ) : null}
            </li>

            <li className="font-semibold w-2/5">
              <Link
                className="duration-300 ease-in relative block -z-neg1 py-3 border-2 border-solid border-slate-900 rounded outline-none before:transition-all before:duration-500 before:ease-in before:absolute before:top-0 before:left-1/2 before:right-1/2 before:bottom-0 before:opacity-0 before:content-[''] before:bg-slate-900 hover:before:transition-all hover:before:duration-500 hover:before:ease-in hover:before:left-0 hover:before:right-0 hover:before:opacity-100 hover:before:z-neg1 hover:text-white hover:font-bold hover:tracking-widest"
                href={`details`}
              >
                Details
              </Link>
            </li>
          </ul>
        </div>
      </section>
    )
  })
  return (
    <article
      className="bg-slate-100 py-8 flex flex-col justify-center items-center gap-20"
      id={"projects"}
    >
      <h3 className="font-black text-5xl ">Projects</h3>
      {projectsHtml}
    </article>
  )
}
