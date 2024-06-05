"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi"
import { ImCross } from "react-icons/im"
import profile_pic from "../../../../public/assets/profile_pic.jpeg"
import { usePathname } from "next/navigation"

export default function Header() {
  const path = usePathname();
  const matchRegex = /^\/$/;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [display, setDisplay] = useState<boolean>(true);

  const handleResize = () => {
    setDisplay(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="p-4 max-w-[1500px] mx-auto dark:bg-black z-10 bg-white w-full border-b dark:border-white border-black sticky top-0 flex justify-between items-center">
      <div className="flex items-center">
        <div className="border-purple-700/50 border-4 rounded-[100%]">
          <Image className="rounded-[100%] border-purple-700 border-4" height={50} width={50} src={profile_pic} alt="profile-pic" />
        </div>
        <p className="ml-2 text-[1.5rem]">Nikhil Patra</p>
      </div>
      {
        display &&
        (<nav className="w-[18em]">
          <ul className="text-[1.2rem] flex items-center justify-between">
            <li className={`hover_links ${path.match(matchRegex) && 'border-b-[4px]'}`}><a aria-label="Navigate to the home page to check out my stats, work experience, get access to my blogs page, LinkedIn page, and resume." href="/">Home</a></li>
            <li className={`hover_links ${path.includes("/about") && 'border-b-[4px]'}`}><a aria-label="Navigate to the about page to learn more about me and what I am passionate about." href="/about">About</a></li>
            <li className={`hover_links ${path.includes("/projects") && 'border-b-[4px]'}`}><a aria-label="Click on Projects to view all the projects that I have worked on over the years." href="/projects">Projects</a></li>
          </ul>
        </nav>)
      }
      <button className={`${display === false ? 'visible' : 'hidden'}`} onClick={() => setIsOpen(!isOpen)} type="button">
        {!isOpen ? <GiHamburgerMenu aria-label="Navigation Menu" size={30} /> : <ImCross size={30} />}
        {
          isOpen &&
          <nav className="w-full shadow-2xl border-2 border-black dark:border-white p-4 dark:bg-black bg-white absolute top-[100%] right-0">
            <ul className="text-[1.2rem] flex flex-col items-center justify-between">
              <li className="hover_links mb-6"><a href="/" aria-label="Navigate to the home page to check out my stats, work experience, get access to my blogs page, LinkedIn page, and resume.">Home</a></li>
              <li className="hover_links mb-6"><a href="/about" aria-label="Navigate to the about page to learn more about me and what I am passionate about.">About</a></li>
              <li className="hover_links mb-6"><a href="/projects" aria-label="Click on Projects to view all the projects that I have worked on over the years.">Projects</a></li>
            </ul>
          </nav>
        }
      </button>
    </header>
  )
}