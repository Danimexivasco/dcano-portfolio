import React from "react"
import { Dictionary, Locales, NextParamsProp } from "@/types";
import { getDictionary } from "@/app/[lang]/dictionaries";
import ProjectDetail from "@/components/projectDetail";

export async function generateMetadata({ params: { project } }: NextParamsProp) {
  return {
    title: project,
    description: `Here you can see the ${project} project where I worked on`,
    // keywords: project.keywords
  };
}

const ProjectDetailPage = async ({ params: { project, lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)
  return(
    <ProjectDetail
      lang={lang as Locales}
      project={project}
      dict={dict.projectDetail}
    />
  )
};


export default ProjectDetailPage;