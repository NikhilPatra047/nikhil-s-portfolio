import Image from "next/image"
import { StaticImageData } from "next/image"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function Card({ image, title, gitLink, webLink, desc, stacks }: { image: StaticImageData, title: string, gitLink: string, webLink: string, desc: string, stacks: string[] }) {
  return (
    <>
      <article className="py-6 max-w-[1500px] mx-auto">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col sm:flex-row justify-between sm:items-center">
            <h3 className="flex items-center text-[1.5rem]">
              {title}
            </h3>
            <h4 className="text-[1.2rem]">
              <span className="flex items-center">
                <a className="mr-2 border-b-4 border-b-purple-700" href={gitLink} target="_blank">Github</a>
                |
                <a className="ml-2 border-b-4 border-b-purple-700" href={webLink} target="_blank">Website</a>
              </span>
            </h4>
          </div>
          <div className="mt-8 flex flex-col lg:flex-row items-start justify-between">
            <Image className="border-2 border-white rounded-xl" height={400} width={350} src={image} alt="project image" />
            <div className="max-lg:mt-4 flex flex-col lg:ml-4 lg:w-[70%]">
              <p className="">
                { desc }
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {
                  stacks.map((stack: string, index: number) => {
                    return (
                      <p className="bg-gray-500/50 w-fit p-2 rounded-md" key={index}>
                        {stack}
                      </p>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="h-[1px] max-w-[1500px] mx-auto bg-gray-200 dark:bg-white" />
    </>
  )
}