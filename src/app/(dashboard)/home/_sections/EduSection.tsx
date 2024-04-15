import { useId } from "react"; 

import { education } from "@/data/experience";
import { EDUCATION } from "../../../../../utils/type";
import { GiGraduateCap, GiRoundStar } from "react-icons/gi";

export default function EducationExperience() {
  const id = useId();
  return (
    <section className="max-w-[1500px] mx-auto">
      <div className="w-[80%] lg:w-[50%] py-10 mx-auto">
        <h2 className="text-[1.5rem] w-fit pr-2 border-r-4 border-r-black dark:border-r-white">Education</h2>
            <div className="mt-6 bg-gray-200/50 dark:bg-gray-200/20 p-4 rounded-lg">
              <div>
                {
                  education.map((edu: EDUCATION, index: number) => {
                    return <EduExperience key={`${index}-${id}`} link={edu.link} year={edu.year} heading={edu.heading} org={edu.org} degreeType={edu.degreeType} />
                  })
                }
              </div>
            </div>
          </div>
    </section>
  )
}

function EduExperience({ link, year, heading, org, degreeType }: { link: string, year: string, heading: string, org: string, degreeType: string }) {
  return (
    <>
      <div className="flex first:mt-0 mt-2 items-center">
        <GiGraduateCap size={30} />
        <p className="date">{year}</p>
      </div>
      <div className="experience">
        <div className="flex items-center">
          <GiRoundStar size={20} />
          <h3 className="ml-2">
            <a target="_blank" className="text-purple-500" href={link}>{heading}</a>
          </h3>
        </div>
        <p>{org}</p>
        <p>{degreeType}</p>
      </div>
    </>
  )
}

