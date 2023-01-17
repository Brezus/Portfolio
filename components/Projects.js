import React, { useEffect, useRef, useState } from "react"
import { nanoid } from "nanoid"
import { urlFor } from "../lib/client"
import Image from "next/image"
import Link from "next/link"
import SkillsButton from "./common/SkillsButton"

export default function Projects({ projects }) {
  const projectsHtml = projects.map((project) => {
    return (
      <div key={nanoid()}>
        <section
          id="projects"
          className="flex flex-col justify-center w-11/12 max-w-md mx-auto"
        >
          <h3 className="mb-5 font-bold text-rose-400">{project?.name}</h3>

          <div className="gap-5 grid grid-rows-[1fr_auto] w-full ">
            <p>{project?.shortDescription}</p>
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
        <hr className="w-full border-1 border-gray-400 last-of-type:opacity-0 md:hidden" />
      </div>
    )
  })

  const projectsHtmlDesk = projects.map((project, i) => {
    const stack = project.techStack.split(",").map((stack) => (
      <p className="tech" key={nanoid()}>
        {stack}
      </p>
    ))
    return (
      <div key={nanoid()} className={"md:text-lg"}>
        <section
          id="projects"
          className={`${
            i % 2 === 0
              ? "flex w-11/12 max-w-6xl items-center justify-between text-left flex-row-reverse mx-auto"
              : "flex w-11/12 max-w-6xl items-center justify-between text-left mx-auto"
          }`}
        >
          <div className="w-2/5">
            <h3 className="mb-5 font-bold text-rose-400 text-4xl">
              {project?.name}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 flex-wrap">{stack}</div>
              <p className="font-mono font-normal">
                {project?.shortDescription}
              </p>
              <ul
                className={`${
                  project?.repo
                    ? "flex justify-between flex-wrap gap-4"
                    : "flex justify-between"
                }`}
              >
                <li
                  className={`${
                    project?.repo
                      ? "font-semibold w-full"
                      : "font-semibold w-2/5"
                  }`}
                >
                  <SkillsButton buttonHref={project?.liveSite}>
                    Live Site
                  </SkillsButton>
                </li>
                <li className="font-semibold w-2/5">
                  {project?.repo ? (
                    <SkillsButton buttonHref={project?.repo}>
                      Github
                    </SkillsButton>
                  ) : null}
                </li>

                <li className="font-semibold w-2/5">
                  <Link className="btn" href={`details`}>
                    Details
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <img
            className="rounded-lg w-1/2 object-contain h-auto"
            src={urlFor(project.projectImage).url()}
            alt={"project"}
          />
        </section>
      </div>
    )
  })
  return (
    <article
      className="bg-slate-100 py-8 md:pb-24 flex flex-col justify-center items-center gap-14"
      id={"projects"}
    >
      <h3 className="font-black text-6xl">Projects</h3>
      <div className="flex flex-col gap-10 justify-center items-center md:hidden">
        {projectsHtml}
      </div>
      <div className="flex-col justify-center items-center hidden md:flex gap-28">
        {projectsHtmlDesk}
      </div>
    </article>
  )
}
