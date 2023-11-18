import React from "react"
import { PERSONAL_PROJECT_ITEMS, PROJECT_ITEMS } from "@/utils/constants";
import { Dictionary, Locales, NextParamsProp } from "@/types";
import { getDictionary } from "../../dictionaries";
import Hero from "@/components/hero";
import Projects from "@/components/projects";

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return {
    title: dict.projects.metadata.title,
    description: dict.projects.metadata.description
  };
}

const ProjectsPage = async ({ params: { lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)
  return (
    <>
      <Hero
        locale={lang as Locales}
        headline={dict.projects.headline}
        cuttedShapeStartPoint="topLeft"
      />
      <Projects
        dict={dict.projects}
        workProjects={PROJECT_ITEMS[ lang ]}
        personalProjects={PERSONAL_PROJECT_ITEMS[ lang ]}
        workProjectsHeadline={dict.projects.workProjectsHeadline}
        workProjectsText={dict.projects.workProjectsText}
        personalProjectsHeadline={dict.projects.personalProjectsHeadline}
        personalProjectsText={dict.projects.personalProjectsText}
        locale={lang as Locales}
      />
    </>
  )
};

export default ProjectsPage;