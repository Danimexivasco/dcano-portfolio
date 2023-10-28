import { Dictionary, NextParamsProp } from "@/types";
import { getDictionary } from "../dictionaries"
import Hero from "@/components/hero";
import Banner from "@/components/banner";
import Dani from "/public/images/dani.jpeg"

export const generateMetadata = async ({ params }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(params.lang)
  return { title: dict.home.metadata.title };
}

const Home = async ({ params: { lang } }: NextParamsProp) => {
  const dict: Dictionary = await getDictionary(lang)
  
  return (
    <>
      <Hero
        locale={lang}
        headline={dict.home.headline}
        subHeadline={dict.home.subHeadline}
        text={dict.home.text}
        img={{
          src: Dani,
          altText: "photo-of-Daniel"
        }}
        isHome
      />
      <h3>Technologies</h3>
      <Banner text={"Banner text"}/>
      <h3>Resumee</h3>

    </>
  )
}

export default Home