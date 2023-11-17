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
  workProjectsHeadline: string
  workProjectsText: string
  personalProjectsHeadline: string
  personalProjectsText: string
  locale: Locales
}


const Projects = ({ dict,
  workProjects = [],
  personalProjects = [],
  workProjectsHeadline,
  workProjectsText,
  personalProjectsHeadline,
  personalProjectsText,
  locale }: ProjectsProps) => {
  return (
    <section>
      <Container className={styles.projectsContainer}>
        <h2 className={styles.headline}>{workProjectsHeadline}</h2>
        <ReactMarkdown className={styles.text}>{workProjectsText}</ReactMarkdown>
        <div className={styles.grid}>
          {workProjects.map(project => (
            <ProjectItem key={project.headline} locale={locale} ctaText={dict.seeMore} {...project}/>
          ))}
        </div>
      </Container>
      <Separator startPoint='bottomLeft' filledPart='bottom'/>
      <div className={combine(styles.projectsContainer, styles.dark)}>
        <Container>
          <h2 className={styles.headline}>{personalProjectsHeadline}</h2>
          <ReactMarkdown className={styles.text}>{personalProjectsText}</ReactMarkdown>
          <div className={styles.grid}>
            {personalProjects.map(project => (
              <ProjectItem key={project.headline} isPersonalProject locale={locale} ctaText={dict.seeMore} {...project}/>
            ))}
          </div>
        </Container>
      </div>
      <Separator startPoint="topLeft" filledPart="top"/>
      <Container className={styles.to404}>
        <p>{dict[ "404Text" ]}</p>
        <Link href="/universe" asButton centered >{dict[ "404Cta" ]}</Link>
      </Container>
    </section>
  )
};


export default Projects;