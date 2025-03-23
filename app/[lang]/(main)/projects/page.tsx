import React from "react"
import { PROJECTS } from "@/utils/constants";
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
        text={dict.projects.text}
      />
      <Projects
        dict={dict.projects}
        projects={PROJECTS[ lang ]}
        locale={lang as Locales}
      />
    </>
  )
};

export default ProjectsPage;