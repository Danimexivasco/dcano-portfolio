import { Dictionary, Locales, NextParamsProp } from "@/types";
import { getDictionary } from "../dictionaries"
import { CVLinks, TECHNOLOGIES, TIMELINE_ITEMS } from "@/utils/constants";
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Technologies from "@/components/technologies";
import Timeline from "@/components/timeline";
import Dani from "/public/images/dani_tulum.webp"

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
        img={{
          src: Dani,
          alt: "photo-of-Daniel"
        }}
        isHome
      />
      <Technologies
        headline={dict.home.technologiesHeadline}
        text={dict.home.technologiesText}
        items={TECHNOLOGIES}
      />
      <Banner
        text={dict.home.bannerText}
        ctas={CVLinks[ lang ]}
      />
      <Timeline
        headline={dict.home.timelineHeadline}
        text={dict.home.timelineText}
        items={TIMELINE_ITEMS[ lang as keyof typeof TIMELINE_ITEMS ] || []}
      />
    </>
  )
}

export default Home