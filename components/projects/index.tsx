import React from "react"
import ReactMarkdown from "react-markdown";
import { DictionaryItem, Locales } from "@/types";
import { combine } from "@/helpers/combine";
import Container from "../container"
import Separator from "../separator";
import Link from "../link";
import ProjectItem, { ProjectItemStructure } from "./item";
import styles from "./styles.module.scss"

export interface ProjectsProps {
  dict: DictionaryItem
  workProjects: Array<ProjectItemStructure>
  personalProjects: Array<ProjectItemStructure>
  locale: Locales
}


const Projects = ({ dict,
  workProjects = [],
  personalProjects = [],
  locale }: ProjectsProps) => {
  return (
    <section>
      <Container className={styles.projectsContainer}>
        <div className={styles.grid}>
          {workProjects.map(project => (
            <ProjectItem key={project.headline} locale={locale} ctaText={dict.seeMore} {...project}/>
          ))}
          {personalProjects.map(project => (
            <ProjectItem key={project.headline} locale={locale} ctaText={dict.seeMore} {...project}/>
          ))}
        </div>
      </Container>
    </section>
  )
};


export default Projects;