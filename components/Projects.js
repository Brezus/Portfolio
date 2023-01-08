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
      <>
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
                  project?.repo ? "font-semibold w-full" : "font-semibold w-2/5"
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
                <Link className="btn" href={`details`}>
                  Details
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <hr className="w-4/5 h-teenyHeight" />
      </>
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
