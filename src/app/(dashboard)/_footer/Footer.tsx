import { FaLinkedin } from "react-icons/fa"
import { BsGithub } from "react-icons/bs"
import { FaHashnode } from "react-icons/fa6"
import { IoLink } from "react-icons/io5"

export default function Footer() {
  return (
    <footer className="max-w-[1500px] mx-auto flex flex-col lg:flex-row justify-between items-center p-4">
      <p className="max-lg:text-center">© Copyright 2024. All rights reserved.</p>
      <div className="max-lg:mt-4 flex items-center">
        <a target="_blank" href="https://www.linkedin.com/in/nikhil-kumar-patra-29978120a/">
          <FaLinkedin size={30} />
        </a>
        <a className="ml-4" target="_blank" href="https://github.com/NikhilPatra047">
          <BsGithub size={30} />
        </a>
        <a className="ml-4" target="_blank" href="https://hashnode.com/@Nikey47">
          <FaHashnode size={30} />
        </a>
        <a className="ml-4" target="_blank" href="https://drive.google.com/file/d/1zygNp2sR5AUO4UAD183IOFoINiUAJxW7/view?usp=sharing">
          <IoLink size={30} />
        </a>
      </div>
    </footer>
  )
}