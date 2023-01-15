import React, { useState } from "react"
import SkillsButton from "./common/SkillsButton"
import { BsMailbox2 } from "react-icons/bs"

export default function Contact() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  console.log(fullName)
  console.log(email)
  return (
    <div className=" min-h-screen bg-slate-100">
      <div className="bg-[url('../assets/bg2.jpg')] bg-no-repeat bg-cover bg-center py-10">
        <h3 className="text-center text-6xl text-white font-black tracking-widest">
          Contact Me
        </h3>
      </div>
      <div className="py-8 flex flex-col w-1/2 mx-auto gap-10">
        <p className="text-2xl text-left font-black">
          Like my Style?<span className="block">Lets Work together</span>
        </p>
        <p className="contact-p">email me with formSubmit</p>
        <div>
          <form
            className="flex flex-col gap-8 items-center"
            action="https://formsubmit.co/millerroshane44@gmail.com"
            method="POST"
          >
            <div className="w-full relative ">
              <input
                className={`transition-all font-medium text-base w-11/12 focus:w-full p-4 border-2 rounded-2xl border-slate-400 outline-none peer focus:border-slate-900 valid:border-lime-500`}
                required
                type={"text"}
                onChange={(e) => setFullName(e.target.value)}
                value={fullName}
              />
              <span
                className={`absolute my-4 px-1 flex items-center top-0 left-5 transition-all duration-200 origin-[0%_0%] bg-none pointer-events-none text-lg font-medium text-slate-500  peer-focus:text-slate-900 ${
                  fullName && "scale-75 -translate-y-7 bg-white"
                }`}
              >
                full name
              </span>
            </div>
            <div className="w-full relative">
              <input
                className={`transition-all font-medium text-base w-11/12 focus:w-full p-4 border-2 rounded-2xl border-slate-400 outline-none peer focus:border-slate-900 valid:border-lime-500`}
                type={"email"}
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <span
                className={`absolute my-4 px-1 flex items-center top-0 left-5 transition-all duration-200 origin-[0%_0%] bg-none pointer-events-none text-lg font-medium text-slate-500  peer-focus:text-slate-900 ${
                  email && "scale-75 -translate-y-7 bg-white"
                }`}
              >
                email
              </span>
            </div>
            <input
              type="hidden"
              name="_subject"
              value="New submission!"
            ></input>
            <input
              type="hidden"
              name="_autoresponse"
              value="thank you for checking out my portfolio i will get back to you as soon as possible"
            ></input>
            <button
              disabled={!fullName || !email}
              className="btn w-11/12 hover:w-full disabled:hover:w-11/12 disabled:before:opacity-0 disabled:text-slate-400  disabled:border-slate-400 disabled:hover:font-extralight disabled:hover:tracking-normal"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
        <p className="font-black text-2xl">or</p>
        <div className="flex gap-1 items-center mx-auto">
          <a
            className="contact-p hover:tracking-widest transition-all"
            href="mailto:millerroshane44@gmail.com"
          >
            use default mail app
          </a>
          <a href="mailto:millerroshane44@gmail.com" className="text-3xl">
            <BsMailbox2 />
          </a>
        </div>
      </div>
    </div>
  )
}
