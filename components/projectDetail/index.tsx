"use client"

import React, { useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { PROJECTS, TECHNOLOGIES } from "@/utils/constants";
import { combine } from "@/helpers/combine";
import { filterMatchingTechnologies } from "@/helpers/filterMatchingTechnologies";
import Technologies from "@/components/technologies";
import Container from "@/components/container";
import Link from "@/components/link";
import { DictionaryItem, Locales, TechnologyItem } from "@/types";
import { ProjectItemStructure } from "../projects/item";
import Hero from "../hero";
import styles from "./styles.module.scss"

export interface ProjectDetailProps {
  lang: Locales,
  project: string | undefined
  dict: DictionaryItem
}

const ProjectDetail = ({ lang, project, dict }: ProjectDetailProps) => {
  const router = useRouter();
  const [ targetProject, setTargetProject ] = useState<ProjectItemStructure | undefined>(undefined)
  const [ projectTechnologies, setProjectTechnologies ] = useState<Array<TechnologyItem>>([])

  useEffect(() => {
    window?.scrollTo(0, 0); // Fix for Next.js link bug opening pages scrolled to the middle
  }, [])

  useEffect(() => {
    if (project && lang) {
      const targetProject = PROJECTS[ lang ].find(el => el.detailPagePath === `/${project}`)
      if (!targetProject) {
        return router.push("/universe");
      }
      return setTargetProject(targetProject)
    }
  }, [ project, lang ])

  
  useEffect(() => {
    if (targetProject) {
      setProjectTechnologies(filterMatchingTechnologies(targetProject.technologies, TECHNOLOGIES))
    }
  }, [ targetProject ])

  return (
    <>
      <Hero
        headline={targetProject?.headline}
        img={targetProject?.image}
        squareImg={targetProject?.image?.isSquare}
        isProjectDetail
        isPersonalProject={targetProject?.isPersonalProject}
        projectCtaHref={targetProject?.url ?? ""}
        projectCtaText={dict.projectCtaText}
      />
      <Container className={styles.projectDetailContainer}>
        {targetProject?.text &&
        <ReactMarkdown className={styles.text}>{targetProject?.text}</ReactMarkdown>
        }
        {targetProject?.aboutTheCompanyText &&
        <>
          <h2>{dict.aboutTheCompanyHeadline}</h2>
          <ReactMarkdown className={styles.text}>{targetProject?.aboutTheCompanyText}</ReactMarkdown>
        </>
        }
        {targetProject?.aboutTheProjectText &&
        <>
          <h2>{dict.aboutTheProjectHeadline}</h2>
          <ReactMarkdown className={combine(styles.text, styles.list)}>{targetProject?.aboutTheProjectText}</ReactMarkdown>
        </>
        }
        {targetProject?.projectImages && targetProject.projectImages?.length > 0 ?
          <div className={styles.images}>
            {targetProject?.projectImages.map(img => <Image key={img.alt} src={img.src} alt={img.alt} className={styles.image}/>)}
          </div>
          : null
        }
        {
          targetProject?.desktopScreenshoots || targetProject?.mobileScreenshoots ? (
            <div className={styles.screenshotsContainer}>
              {targetProject?.desktopScreenshoots && targetProject?.desktopScreenshoots.length > 0 ?
                <div>
                  <h2 className={styles.title}>{dict.desktopScreenshootsHeadline}:</h2>
                  <div className={styles.imgContainer}>
                    {targetProject?.desktopScreenshoots?.map((item) => {
                      const { src, alt } = item;
                      return (
                        <Image key={alt} src={src} alt={alt} className={styles.image}/>
                      )
                    })
                    }
                  </div>
                </div>
                : null
              }
              {targetProject?.mobileScreenshoots && targetProject?.mobileScreenshoots.length > 0 ?
                <div>
                  <h2 className={styles.title}>{dict.mobileScreenshootsHeadline}:</h2>
                  <div className={combine(styles.imgContainer, styles.mobile)}>
                    {targetProject?.mobileScreenshoots?.map((item) => {
                      const { src, alt } = item;
                      return (
                        <Image key={alt} src={src} alt={alt} className={styles.image}/>
                      )
                    })
                    }
                  </div>
                    
                </div>
                : null
              }
            </div>
          ): null
        }
        {targetProject?.projectVideoURL &&
        <video controls className={styles.video}>
          <source src={targetProject?.projectVideoURL} type="video/mp4" />
          {dict.videoError}
        </video>
        }
        {projectTechnologies?.length > 0 &&
        <Technologies
          headline={dict.technologiesHeadline}
          items={projectTechnologies}
          className={styles.technologiesModule}
        />
        }
        <Link href={`/${lang}/projects`} asButton centered>{dict.backToProjectsCtaText}</Link>
      </Container>
    </>
  )
};


export default ProjectDetail;