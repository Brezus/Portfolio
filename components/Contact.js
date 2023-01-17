import React, { useState } from "react"
import SkillsButton from "./common/SkillsButton"
import { BsMailbox2 } from "react-icons/bs"

export default function Contact() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  return (
    <div
      className="font-medium min-h-screen bg-slate-100 pb-10 bg-[url('../assets/pattern.png')] bg-blend-multiply md:text-lg"
      id={"contact"}
    >
      <div className="bg-[url('../assets/bg2.jpg')] bg-no-repeat bg-cover bg-center py-16">
        <h3 className="text-center text-6xl text-white font-black tracking-widest">
          Contact Me
        </h3>
      </div>
      <div className="py-8 flex flex-col w-3/5 mx-auto gap-10 md:w-4/5 md:max-w-[900px] mt-10">
        <p className="text-2xl md:text-3xl text-left font-black">
          Like my Style?<span className="block">Lets Work together</span>
        </p>
        <p className="contact-p md:text-left">email me with formSubmit</p>
        <div className="md:flex gap-16">
          <form
            className="font-mono flex flex-col gap-8 items-center mb-8 md:w-1/2"
            action="https://formsubmit.co/millerroshane44@gmail.com"
            method="POST"
          >
            <div className="w-full relative md:flex inline-block">
              <input
                className={`transition-all font-medium text-base w-11/12 focus:w-full p-4 border-2 rounded-2xl border-slate-400 outline-none peer focus:border-slate-900 valid:border-lime-500 md:mr-auto`}
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
            <div className="w-full relative md:flex">
              <input
                className={`transition-all font-medium text-base w-11/12 focus:w-full p-4 border-2 rounded-2xl border-slate-400 outline-none peer focus:border-slate-900 valid:border-lime-500 md:mr-auto`}
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
            <div className="w-full relative md:flex">
              <textarea
                name="message"
                rows="4"
                cols="50"
                className={`transition-all font-medium text-base w-11/12 focus:w-full p-4 border-2 rounded-2xl border-slate-400 outline-none peer focus:border-slate-900 md:mr-auto`}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <span
                className={`absolute my-4 px-1 flex items-center top-0 left-5 transition-all duration-200 origin-[0%_0%] bg-none pointer-events-none text-lg font-medium text-slate-500  peer-focus:text-slate-900 ${
                  message && "scale-75 -translate-y-7 bg-white"
                }`}
              >
                message
              </span>
            </div>

            <button
              disabled={!fullName || !email || !message}
              className="btn w-11/12 hover:w-full disabled:hover:w-11/12 disabled:before:opacity-0 disabled:text-slate-400  disabled:border-slate-400 disabled:hover:font-extralight disabled:hover:tracking-normal md:mr-auto bg-slate-100"
              type="submit"
            >
              Send Message
            </button>
          </form>
          <div className="md:flex md:justify-between md:w-1/3">
            {/* <p className="seperator">or</p> */}
            <div className="flex justify-center items-center md:pt-2 md:flex-col gap-6 md:gap-1 md:h-full md:w-vs pb-8">
              <div className="h-vs w-2/6 md:h-2/6 md:w-vs bg-slate-900"></div>
              <p className="spacer">or</p>
              <div className="h-vs w-2/6 md:h-2/6 md:w-vs bg-slate-900"></div>
            </div>
            <div className="flex gap-1 items-center justify-center md:self-start flex-wrap">
              <a
                className="contact-p hover:tracking-widest transition-all md:w-full"
                href="mailto:millerroshane44@gmail.com"
              >
                use default mail app
              </a>
              <a href="mailto:millerroshane44@gmail.com" className="text-3xl ">
                <BsMailbox2 />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
