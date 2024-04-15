import { useId } from "react"
import { projects } from "@/data/projects"
import { PROJECT } from "../../../../../utils/type"
import Card from "./card"

export default function CollectionCards() {
  const id = useId();
  return (
    projects.map((project: PROJECT, index: number) => {
      return <Card key={`${index}-${id}`} image={project.image} title={project.name} gitLink={project.repo} webLink={project.website} desc={project.desc} stacks={project.stacks} />
    })
  )
}