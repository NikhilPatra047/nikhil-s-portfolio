import Image from "next/image"
import "../../../globals.css"

import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { FaHashnode } from "react-icons/fa6"
import { IoLink } from "react-icons/io5"
import profile_pic from "../../../../../public/assets/profile_pic.jpeg"

export default function IntroSection() {
  return (
    <section className="max-w-[1500px] mx-auto">
      <div className="w-[80%] lg:w-[50%] py-20 mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center">
          <div className="rounded-[100%] w-fit border-[8px] border-purple-700/50">
            <Image height={100} width={100} className="rounded-[100%] border-[6px] border-purple-700" src={profile_pic} alt="A picture of Nikhil" />
          </div>
          <div className="lg:ml-4">
            <h1 className="text-[2.5rem]">Nikhil Patra</h1>
            <h2 className="text-[1.5rem]">Front-End Web Developer at <a href="https://www.aniccadata.com/" target="_blank" className="border-b-[6px] border-purple-700">Anicca Data</a></h2>
          </div>
        </div>
        <h3 className="w-fit text-left mt-8 text-[1.2rem] mx-auto">Hello there! 👋 I&apos;m a front-end web developer based in Bengaluru, India. I&apos;m passionate about learning and sharing my knowledge in the field of Computer Science.</h3>
        <div className="mt-4 max-sm:w-fit flex max-sm:flex-col sm:items-center">
          <a aria-label="Click to send me an E-Mail" href="mailto:patra.nikhil04@gmail.com" className="transition-all duration-300 ease-in-out bg-gradient-to-r from-purple-300 to-purple-500 dark:bg-gradient-to-r dark:from-purple-700 dark:to-purple-900 p-4 rounded-md inline-block">
            Send me a message
          </a>
          <div className="sm:ml-6 max-sm:mt-4 max-sm:w-fit flex">
            <a aria-label="Navigate to my LinkedIn profile" className="web_links hover:shadow-xl hover:shadow-purple-700" target="_blank" href="https://www.linkedin.com/in/nikhil-k-patra/">
              <FaLinkedin size={30} />
            </a>
            <a aria-label="Navigate to my GitHub profile" className="ml-4 web_links hover:shadow-xl hover:shadow-purple-700" target="_blank" href="https://github.com/NikhilPatra047">
              <BsGithub size={30} />
            </a>
            <a aria-label="Navigate to HashNode to check out my most recent blogs" className="ml-4 web_links hover:shadow-xl hover:shadow-purple-700" target="_blank" href="https://hashnode.com/@Nikey47">
              <FaHashnode size={30} />
            </a>
            <a aria-label="Click to check out my resume" className="ml-4 web_links hover:shadow-xl hover:shadow-purple-700" target="_blank" href="https://drive.google.com/file/d/1idk08vXffMnlK7xOp7f_KqdbsRJWnCeK/view?usp=sharing">
              <IoLink size={30} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}


// This isn&apos;t just my portfolio; think of it as a digital oasis where we can explore and learn together.