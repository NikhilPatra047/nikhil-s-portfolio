import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiJest } from "react-icons/si";
import { SiCypress } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaPython } from "react-icons/fa";

export default function SkillsSection() {
  return (
    <section className="max-w-[1500px] mx-auto">
      <div className="w-[80%] lg:w-[50%] py-10 mx-auto">
        <h2 className="text-[1.5rem] w-fit pr-2 border-r-4 border-black dark:border-white">
          Tech Stack
        </h2>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="tech_stack">
            <FaHtml5 size={30} />
            <p>HTML5</p>
          </div>
          <div className="tech_stack">
            <FaCss3Alt size={30} />
            <p>CSS3</p>
          </div>
          <div className="tech_stack">
            <SiTailwindcss size={30} />
            <p>Tailwind</p>
          </div>
          <div className="tech_stack">
            <FaReact size={30} />
            <p>ReactJS</p>
          </div>
          <div className="tech_stack">
            <TbBrandNextjs size={30} />
            <p>NextJS</p>
          </div>
          <div className="tech_stack">
            <SiRedux size={30} />
            <p>Redux</p>
          </div>
          <div className="tech_stack">
            <FaNodeJs size={30} />
            <p>NodeJS</p>
          </div>
          <div className="tech_stack">
            <SiExpress size={30} />
            <p>ExpressJS</p>
          </div>
          <div className="tech_stack">
            <SiJest size={30} />
            <p>Jest</p>
          </div>
          <div className="tech_stack">
            <SiCypress size={30} />
            <p>Cypress</p>
          </div>
          <div className="tech_stack">
            <IoLogoJavascript size={30} />
            <p>JavaScript</p>
          </div>
          <div className="tech_stack">
            <SiTypescript size={30} />
            <p>TypeScript</p>
          </div>
          <div className="tech_stack">
            <SiPrisma size={30} />
            <p>Prisma</p>
          </div>
        </div>
      </div>
    </section>
  );
}
