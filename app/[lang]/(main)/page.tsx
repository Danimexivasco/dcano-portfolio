import { Dictionary, Locales, NextParamsProp } from "@/types";
import { getDictionary } from "../dictionaries"
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Technologies from "@/components/technologies";
import Timeline from "@/components/timeline";
import { TECHNOLOGIES, TIMELINE_ITEMS_EN, TIMELINE_ITEMS_ES } from "@/utils/constants";
import Dani from "/public/images/dani.jpeg"
import { TimelineItemStructure } from "@/components/timeline/item";

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return { title: dict.home.metadata.title };
}

const Home = async ({ params: { lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)
  
  return (
    <>
      <Hero
        locale={lang as Locales}
        headline={dict.home.headline}
        subHeadline={dict.home.subHeadline}
        text={dict.home.text}
        img={{
          src: Dani,
          altText: "photo-of-Daniel"
        }}
        isHome
      />
      <Technologies
        headline={dict.home.technologiesHeadline}
        text={dict.home.technologiesText}
        items={TECHNOLOGIES}
      />
      <Banner text={"My career at a sight. Do you want more? Download my resumee here:"}/>
      <Timeline
        headline={dict.home.timelineHeadline}
        items={(lang === "en" ? TIMELINE_ITEMS_EN : TIMELINE_ITEMS_ES) as Array<TimelineItemStructure>}
      />
    </>
  )
}

export default Home