import React from "react"
import { DictionaryItem, Locales } from "@/types";
import Container from "../container"
import ProjectItem, { ProjectItemStructure } from "./item";
import styles from "./styles.module.scss"

export interface ProjectsProps {
  dict: DictionaryItem
  projects: ProjectItemStructure[]
  locale: Locales
}


const Projects = ({ dict,
  projects = [],
  locale }: ProjectsProps) => {
  return (
    <section>
      <Container className={styles.projectsContainer}>
        <div className={styles.grid}>
          {projects.map(project => (
            <ProjectItem key={project.headline} locale={locale} ctaText={dict.seeMore} {...project}/>
          ))}
        </div>
      </Container>
    </section>
  )
};


export default Projects;