import { GiGraduateCap } from "react-icons/gi"
import { GiRoundStar } from "react-icons/gi"
import { MdOutlineWork } from "react-icons/md"

import { work } from "@/data/experience"
import { WORK } from "../../../../../utils/type"
import { useId } from "react"

export default function WorkExperienceSection() {
  const id = useId();
  return (
    <section className="max-w-[1500px] mx-auto">
      <div className="w-[80%] lg:w-[50%] py-10 mx-auto">
        <h2 className="text-[1.5rem] w-fit pr-2 border-r-4 border-r-white">Work Experience</h2>
            <div className="mt-6 rounded-lg bg-gray-200/50 dark:bg-gray-200/20 p-4">
              <div>
                {
                  work.map((wk: WORK, index: number) => {
                    return <WorkExperience key={`${index}-${id}`} year={wk.year} heading={wk.heading} org={wk.org} stack={wk.stack} />
                  })
                }
              </div>
            </div>
          </div>
    </section>
  )
}

function WorkExperience({ year, heading, org, stack }: { year: string, heading: string, org: string, stack: string[] }) {
  const id = useId();
  return (
    <>
      <div className="flex first:mt-0 mt-2 items-center">
        <MdOutlineWork size={30} />
        <p className="date">{year}</p>
      </div>
      <div className="experience">
        <div className="flex items-center flex-wrap">
          <GiRoundStar size={20} />
          <h3 className="ml-2">{heading}</h3>
        </div>
        <p>{org}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {
            stack.map((tech: string, index: number) => {
              return <p key={`${index}-${id}`} className="stack w-fit p-1 dark:bg-gray-500/80 bg-gray-500/20 rounded-lg">{tech}</p>
            })
          }
        </div>
      </div>
    </>
  )
}