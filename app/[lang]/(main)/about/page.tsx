import React from "react"
import { Dictionary, NextParamsProp } from "@/types";
import { getDictionary } from "../../dictionaries";

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return { title: dict.about.metadata.title };
}

const About = async ({ params: { lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)
  return (
    <h1>{dict.about.headline}</h1>
  )
};

export default About;