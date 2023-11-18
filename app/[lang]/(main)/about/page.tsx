import React from "react"
import { getDictionary } from "../../dictionaries";
import { Dictionary, Locales, NextParamsProp } from "@/types";
import { HISTORY_ITEMS } from "@/utils/constants";
import Hero from "@/components/hero";
import History from "@/components/history";

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return {
    title: dict.about.metadata.title,
    description: dict.about.metadata.description,
  };
}

const AboutMePage = async ({ params: { lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)
  return (
    <>
      <Hero
        locale={lang as Locales}
        headline={dict.about.headline}
        text={dict.about.text}
      />
      <History
        items={HISTORY_ITEMS[ lang as keyof typeof HISTORY_ITEMS ]}
      />
    </>
  )
};

export default AboutMePage;