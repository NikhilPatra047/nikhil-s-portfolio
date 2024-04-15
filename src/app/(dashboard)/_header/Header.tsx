"use client"

import { useEffect, useState } from "react"

import Image from "next/image"
import { GiHamburgerMenu } from "react-icons/gi"
import profile_pic from "../../../../public/assets/profile_pic.jpeg"
import { usePathname } from "next/navigation"

export default function Header() {
  const path = usePathname();
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
            <a href="/home"><li className={`hover_links ${path.includes('/home') && 'border-b-[4px]'}`}>Home</li></a>
            <a href="/about"><li className={`hover_links ${path.includes('/about') && 'border-b-[4px]'}`}>About</li></a>
            <a href="/projects"><li className={`hover_links ${path.includes('/projects') && 'border-b-[4px]'}`}>Projects</li></a>
          </ul>
        </nav>)
      }
      <button className={`${display === false? 'visible': 'hidden'}`} onClick={() => setIsOpen(!isOpen)} type="button">
        <GiHamburgerMenu size={30} />
        {
          isOpen &&
          <nav className="w-[15em] border-2 border-white p-4 dark:bg-black bg-white absolute top-[100%] right-0">
            <ul className="text-[1.2rem] flex flex-col items-center justify-between">
              <a href="/home"><li className="hover_links mb-6">Home</li></a>
              <a href="/about"><li className="hover_links mb-6">About</li></a>
              <a href="/projects"><li className="hover_links mb-6">Projects</li></a>
            </ul>
          </nav>
        }
      </button>
    </header>
  )
}