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
              <SkillsButton buttonType="proj">
                <a target={"_blank"} rel="noreferrer" href={project?.liveSite}>
                  Live Site
                </a>
              </SkillsButton>
            </li>
            <li className="font-semibold ">
              {project?.repo ? (
                <SkillsButton buttonType="proj">
                  <a target={"_blank"} rel="noreferrer" href={project?.repo}>
                    Github
                  </a>
                </SkillsButton>
              ) : null}
            </li>

            <li className="font-semibold ">
              <SkillsButton buttonType="proj">Details</SkillsButton>
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
